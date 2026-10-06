// ARAÇ (test değil): yeni oyunun karakter görselini (düz bej arka planlı) keser —
// arka planı saydam yapar, sabit çerçeveyle kırpar, 700 px yüksekliğe indirip WebP yazar.
// Kullanım:
//   cd kaynak && node arac_kes.js <girdi.png> <cikti.webp> --profil peri|saten|cengo [--genis] [--onizleme <dosya.png>]
//
// Neden sabit çerçeve: bütün ifadeler AYNI çerçeveyle kesilmezse ekranda ifade değişince
// karakter büyüyüp küçülür, zıplar. Çerçeve karakter başına bir kere seçilir (profil).
// Neden profil: arka plana renkçe yakın giysiler (Cengo'nun beyaz gömleği, Peri'nin saten
// bluzu) delik doldurmada arka plan sanılıp silinir. Ayrıntı: YENI_OYUN_GORSEL_PROMPTLARI.md.
//
//   peri   x 120–1034 · delik doldurma tol 14            (mantolu temel set)
//   saten  x 120–1034 · kenar tol 14 (parlak saten kol kenara değiyor, 28 onu yer),
//                       delik tohumu tol 6, sonra tol 22 ile yeniden taşkın; mantosuz set
//   cengo  x 10–1111  · delik doldurma kapalı (beyaz gömlek)
//   hilmi  x 0–1085   · delik doldurma kapalı (beyaz gömlek); kaynak 1086×1448
//
// --genis : el, parmak vb. çerçeveden taşıyorsa görsel TAM GENİŞLİKTE kesilir; ekranda
//           standart kutuya hizalanıp taşar. Araç gereken CSS'i basar.
// --onizleme : yeşil zemin üstünde önizleme PNG'si (kalıntı, delik gözle aranır).
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PW || '/opt/node22/lib/node_modules/playwright');

const KENAR_SATEN = Number(process.env.KENAR || 14);
const PROFILLER = {
  peri:  { x0: 120, x1: 1034, kenarTol: 28, delik: true,  delikTol: 14, yenidenTol: 0,  aynali: true },
  saten: { x0: 120, x1: 1034, kenarTol: KENAR_SATEN, delik: true,  delikTol: 6,  yenidenTol: 22, aynali: true },
  cengo: { x0: 10,  x1: 1111, kenarTol: 28, delik: false, delikTol: 14, yenidenTol: 0,  aynali: false },
  // Yan karakterler: kaynak 1086×1448, tam genişlik; beyaz gömlek → delik doldurma kapalı.
  hilmi: { x0: 0,   x1: 1085, kenarTol: 28, delik: false, delikTol: 14, yenidenTol: 0,  aynali: false },
};

const arg = process.argv.slice(2);
const bayrak = ad => { const i = arg.indexOf(ad); if (i < 0) return null; const v = arg[i + 1]; arg.splice(i, 2); return v; };
const genis = arg.includes('--genis'); if (genis) arg.splice(arg.indexOf('--genis'), 1);
const profilAd = bayrak('--profil');
const onizleme = bayrak('--onizleme');
const [girdi, cikti] = arg;
if (!girdi || !cikti || !PROFILLER[profilAd]) {
  console.error('Kullanım: node arac_kes.js <girdi.png> <cikti.webp> --profil ' + Object.keys(PROFILLER).join('|') + ' [--genis] [--onizleme <dosya.png>]');
  process.exit(1);
}
const P = { ...PROFILLER[profilAd] };

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage();
  const tur = /\.jpe?g$/i.test(girdi) ? 'jpeg' : /\.webp$/i.test(girdi) ? 'webp' : 'png';
  const veri = 'data:image/' + tur + ';base64,' + fs.readFileSync(girdi).toString('base64');
  const r = await p.evaluate(async ([d, P, genis]) => {
    const i = new Image(); i.src = d; await i.decode();
    const W = i.width, H = i.height;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const x = cv.getContext('2d'); x.drawImage(i, 0, 0);
    const im = x.getImageData(0, 0, W, H), a = im.data;
    // Arka plan rengi satır satır kenardan okunur (hafif degradeye dayanır).
    const ref = (px, py) => { const k = (py * W + (px < W / 2 ? 2 : W - 3)) * 4; return [a[k], a[k + 1], a[k + 2]]; };
    const dist = (k, c) => Math.hypot(a[k] - c[0], a[k + 1] - c[1], a[k + 2] - c[2]);
    const bg = new Uint8Array(W * H);
    const komsu = n => [n - 1, n + 1, n - W, n + W];
    const gecerli = (n, m) => m >= 0 && m < W * H && Math.abs((m % W) - (n % W)) <= 1;
    // 1) kenardan taşkın doldurma
    const q = []; for (let px = 0; px < W; px++) { q.push(px); q.push((H - 1) * W + px); } for (let py = 0; py < H; py++) { q.push(py * W); q.push(py * W + W - 1); }
    while (q.length) { const n = q.pop(); if (bg[n]) continue; if (dist(n * 4, ref(n % W, (n / W) | 0)) > P.kenarTol) continue; bg[n] = 1; for (const m of komsu(n)) if (gecerli(n, m) && !bg[m]) q.push(m); }
    // 2) kapalı boşluklar (kol ile bel arası vb.): arka plana yakın, büyük bileşenler
    let delik = 0;
    if (P.delik) {
      const seen = new Uint8Array(W * H);
      for (let s = 0; s < W * H; s++) {
        if (bg[s] || seen[s] || dist(s * 4, ref(s % W, (s / W) | 0)) > P.delikTol) continue;
        const comp = [], st = [s]; seen[s] = 1;
        while (st.length) { const n = st.pop(); comp.push(n); for (const m of komsu(n)) { if (!gecerli(n, m) || seen[m] || bg[m]) continue; if (dist(m * 4, ref(m % W, (m / W) | 0)) > P.delikTol) continue; seen[m] = 1; st.push(m); } }
        if (comp.length <= 400) continue;
        for (const n of comp) bg[n] = 1; delik++;
        // 2b) onaylı boşluktan daha gevşek yeniden taşkın: dokulu kalıntıları da alır
        if (P.yenidenTol) { const q2 = [...comp]; while (q2.length) { const n = q2.pop(); for (const m of komsu(n)) { if (!gecerli(n, m) || bg[m]) continue; if (dist(m * 4, ref(m % W, (m / W) | 0)) > P.yenidenTol) continue; bg[m] = 1; q2.push(m); } } }
      }
    }
    // 3) hale aşındırma: arka plana komşu ve arka plana yakın pikseller (3 tur)
    for (let t = 0; t < 3; t++) { const yeni = []; for (let n = W; n < W * H - W; n++) { if (bg[n] || !(bg[n - 1] || bg[n + 1] || bg[n - W] || bg[n + W])) continue; if (dist(n * 4, ref(n % W, (n / W) | 0)) < 60) yeni.push(n); } for (const n of yeni) bg[n] = 1; }
    // 3b) kırıntı temizliği: ana gövdeye bağlı olmayan küçük opak adacıklar (sıkı kenar
    // toleransında arka plandan kalan lekeler) silinir. Gövdenin %2'sinden küçük olan gider.
    let kirinti = 0;
    { const etiket = new Int32Array(W * H).fill(-1), boy = [];
      for (let s0 = 0; s0 < W * H; s0++) { if (bg[s0] || etiket[s0] >= 0) continue; const id = boy.length; let c = 0; const st = [s0]; etiket[s0] = id;
        while (st.length) { const n = st.pop(); c++; for (const m of komsu(n)) if (gecerli(n, m) && !bg[m] && etiket[m] < 0) { etiket[m] = id; st.push(m); } }
        boy.push(c); }
      const enBuyuk = Math.max(0, ...boy);
      for (let n = 0; n < W * H; n++) if (!bg[n] && boy[etiket[n]] < enBuyuk * 0.02) { bg[n] = 1; kirinti++; } }
    for (let n = 0; n < W * H; n++) if (bg[n]) a[n * 4 + 3] = 0;
    for (let n = W; n < W * H - W; n++) { if (!bg[n] && (bg[n - 1] || bg[n + 1] || bg[n - W] || bg[n + W])) a[n * 4 + 3] = 160; }
    x.putImageData(im, 0, 0);
    // 4) sabit kesim
    const x0 = genis ? 0 : P.x0, x1 = genis ? W - 1 : P.x1;
    const w = x1 - x0 + 1, sc = Math.min(1, 700 / H);
    const c2 = document.createElement('canvas'); c2.width = Math.round(w * sc); c2.height = Math.round(H * sc);
    c2.getContext('2d').drawImage(cv, x0, 0, w, H, 0, 0, c2.width, c2.height);
    // Taşan parça: kutunun dışındaki opak piksel var mı (genişte bilgi, standartta uyarı)
    let tasma = 0;
    for (let py = 0; py < H; py += 2) for (const px of [P.x0 - 1, P.x1 + 1]) { if (px < 0 || px >= W) continue; if (!bg[py * W + px]) tasma++; }
    let yesil = null;
    if (d) { const c3 = document.createElement('canvas'); c3.width = c2.width; c3.height = c2.height; const y = c3.getContext('2d'); y.fillStyle = '#3a6'; y.fillRect(0, 0, c3.width, c3.height); y.drawImage(c2, 0, 0); yesil = c3.toDataURL('image/png'); }
    return { u: c2.toDataURL('image/webp', 0.8), w: c2.width, h: c2.height, W, H, delik, kirinti, tasma, yesil };
  }, [veri, P, genis]);
  fs.writeFileSync(cikti, Buffer.from(r.u.split(',')[1], 'base64'));
  if (onizleme) fs.writeFileSync(onizleme, Buffer.from(r.yesil.split(',')[1], 'base64'));
  console.log(path.basename(cikti) + ': ' + r.w + '×' + r.h + ' · kaynak ' + r.W + '×' + r.H + ' · profil ' + profilAd + (genis ? ' (geniş)' : '') + ' · kapalı boşluk ' + r.delik + ' · kırıntı ' + r.kirinti + ' px');
  if (r.H !== 1402) console.log('UYARI: kaynak yüksekliği ' + r.H + ' (set 1402). Ölçek öteki ifadelerden farklı olabilir; yan yana bakın.');
  if (!genis && r.tasma > 20) console.log('UYARI: çerçevenin kenarında karakter var (' + r.tasma + ' örnek). El/parmak kesiliyor olabilir → --genis ile yeniden kes.');
  if (genis) {
    const fw = P.x1 - P.x0 + 1;
    const gen = (r.W / fw * 100).toFixed(2), sol = P.aynali ? -((r.W - 1 - P.x1) / fw * 100) : -(P.x0 / fw * 100);
    console.log('CSS (' + (P.aynali ? 'aynalı' : 'aynasız') + '): img.genis { width: ' + gen + '%; max-width: none; margin-left: ' + sol.toFixed(2) + '%; }');
  }
  await b.close();
})();
