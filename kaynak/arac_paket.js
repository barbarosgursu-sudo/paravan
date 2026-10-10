// ARAÇ (test değil): bir sohbetin görsellerini PAKET hâlinde işler (şablon 7. parça,
// "Hızlandırma kuralları" → toplu görsel işleme; adım 9–10).
// Kullanım:
//   cd kaynak && node arac_paket.js <klasör> [--vaka 2] [--sira G1-G13] [--profil G10=saten,G32=cengo] [--genis G3,G24] [--yaz]
//
// Klasördeki dosyalar prompt numarasıyla başlar: G2.png, G3_sinirli.jpg, G35.webp …
// YA DA ChatGPT'nin verdiği adla kalır ve --sira G1-G13 verilir: dosyalar adlarındaki üretim
// saatine dizilir, numaralar sırayla dağıtılır (sayı tutmazsa durur). Eşleşme temas sayfasında.
// Numara → tür ve anahtar, sablon/vakalar/vaka<N>_gorsel.md tablosundan okunur.
//   figür              → arac_kes.js ile kesilir (peri / cengo / konuk profili; --profil ile değişir)
//   arka plan/kare/detay → 900×1200, WebP q80
//
// --yaz YOKKEN (önizleme): hiçbir proje dosyasına dokunmaz; çıktılar geçici klasöre gider,
//   temas sayfası YENI_UI/paket_<klasör>.png yazılır (yeşil zemin + büyütülmüş baş).
// --yaz İLE: webp'ler yeni_gorsel/'e, manifesto (yeni/gorseller.json) güncellenir — dosyalar'a
//   eklenir, yer_tutucu'dan silinir — ardından doğrulayıcı (yeni) ve iki derleme çalışır,
//   eski index.html'in değişmediği md5 ile sınanır.
//
// YAPMADIĞI (insana kalan): saç halesi temizliği, yazı/harf taraması, boy ayarı, metinle uyum.
// Temas sayfası bunlara bakmak içindir; görselli tur (arac_yeni_tur.js) ayrıca koşulur.
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { execFileSync, spawnSync } = require('child_process');
const { chromium } = require(process.env.PW || '/opt/node22/lib/node_modules/playwright');
const jsonYaz = require('./arac_json_yaz.js');

const KOK = __dirname;
const arg = process.argv.slice(2);
const bayrak = ad => { const i = arg.indexOf(ad); if (i < 0) return null; const v = arg[i + 1]; arg.splice(i, 2); return v; };
const yaz = arg.includes('--yaz'); if (yaz) arg.splice(arg.indexOf('--yaz'), 1);
const vaka = bayrak('--vaka') || '2';
const profilEk = Object.fromEntries((bayrak('--profil') || '').split(',').filter(Boolean).map(s => s.split('=')));
const genisEk = new Set((bayrak('--genis') || '').split(',').filter(Boolean));
const sira = bayrak('--sira');
const [klasor] = arg;
if (!klasor || !fs.existsSync(klasor)) {
  console.error('Kullanım: node arac_paket.js <klasör> [--vaka 2] [--sira G1-G13] [--profil G10=saten] [--genis G3,G24] [--yaz]');
  process.exit(1);
}

// ChatGPT indirme adından üretim saati: "ChatGPT Image Oct 10, 2026, 08_15_33 PM.png",
// "ChatGPT Image 10 Eki 2026 20_15_33.png" … Tarih + saat sıralanabilir sayıya çevrilir; yoksa null.
const AYLAR = ['oca|jan', 'şub|sub|feb', 'mar', 'nis|apr', 'may', 'haz|jun', 'tem|jul', 'ağu|agu|aug', 'eyl|sep', 'eki|oct', 'kas|nov', 'ara|dec'];
const ayNo = s => AYLAR.findIndex(a => a.split('|').some(x => s.toLocaleLowerCase('tr').startsWith(x)));
function saatAnahtari(ad) {
  const t = ad.match(/(\d{1,2})[_.:](\d{2})[_.:](\d{2})(?:\s*(AM|PM|ÖÖ|ÖS))?/i);
  if (!t) return null;
  let tarih = 0;
  const iso = ad.match(/(\d{4})-(\d{2})-(\d{2})/);
  const tr = ad.match(/(\d{1,2})\s+([A-Za-zÇĞİÖŞÜçğıöşü]{3,})\.?\s+(\d{4})/);
  const en = ad.match(/([A-Za-z]{3,})\.?\s+(\d{1,2}),?\s+(\d{4})/);
  if (iso) tarih = +iso[1] * 10000 + +iso[2] * 100 + +iso[3];
  else if (tr && ayNo(tr[2]) >= 0) tarih = +tr[3] * 10000 + (ayNo(tr[2]) + 1) * 100 + +tr[1];
  else if (en && ayNo(en[1]) >= 0) tarih = +en[3] * 10000 + (ayNo(en[1]) + 1) * 100 + +en[2];
  let s = +t[1] % 12;
  if (!t[4]) s = +t[1]; else if (/PM|ÖS/i.test(t[4])) s += 12;
  return tarih * 1e6 + s * 10000 + +t[2] * 100 + +t[3];
}

// 1) Görsel tablosu: | G<n> | tür | ne | `anahtar` | …
const tabloYolu = path.join(KOK, '..', 'sablon', 'vakalar', 'vaka' + vaka + '_gorsel.md');
const TURLER = { 'figür': 'figur', 'arka plan': 'arka', 'detay': 'detay', 'ara kare': 'kare' };
const tablo = {};
for (const satir of fs.readFileSync(tabloYolu, 'utf8').split('\n')) {
  const m = satir.match(/^\|\s*G(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*`([^`]+)`\s*\|/);
  if (m && TURLER[m[2]]) tablo[m[1]] = { tur: TURLER[m[2]], ne: m[3], anahtar: m[4] };
}

// 2) Klasördeki dosyalar
const girdiler = {};
const resimler = fs.readdirSync(klasor).filter(ad => /\.(png|jpe?g|webp)$/i.test(ad));
if (sira) {
  // --sira: ChatGPT'nin verdiği adlarla gelen dosyalar üretim saatine dizilir, sıradaki
  // numaralar sırayla verilir. Sohbetteki üretim sırası sayfadaki kart sırasıdır.
  const numaralar = sira.split(',').flatMap(p => {
    const m = p.trim().match(/^G?(\d+)(?:\s*-\s*G?(\d+))?$/i);
    if (!m) { console.error('--sira anlaşılmadı: ' + p); process.exit(1); }
    const a = +m[1], b = m[2] ? +m[2] : a;
    return Array.from({ length: b - a + 1 }, (_, i) => String(a + i));
  });
  const anahtarlar = resimler.map(ad => ({ ad, k: saatAnahtari(ad) }));
  const saatsiz = anahtarlar.filter(x => x.k === null);
  if (saatsiz.length && saatsiz.length < anahtarlar.length) {
    console.error('DURDU: şu dosyaların adında üretim saati yok, sıraya konamıyor (adını değiştirmeden gönder): ' + saatsiz.map(x => x.ad).join(', '));
    process.exit(1);
  }
  if (saatsiz.length) {
    console.log('UYARI: dosya adlarında saat yok; dosya tarihine göre dizildi — temas sayfasında sırayı mutlaka kontrol et.');
    for (const x of anahtarlar) x.k = fs.statSync(path.join(klasor, x.ad)).mtimeMs;
  }
  anahtarlar.sort((x, y) => x.k - y.k || x.ad.localeCompare(y.ad, 'tr', { numeric: true }));
  if (anahtarlar.length !== numaralar.length) {
    console.error('DURDU: klasörde ' + anahtarlar.length + ' görsel var, --sira ' + numaralar.length + ' numara istiyor (' +
      numaralar.map(n => 'G' + n).join(' ') + '). Beğenilmeyen/yeniden üretilen görselleri çıkar; her numaradan bir görsel.');
    process.exit(1);
  }
  anahtarlar.forEach((x, i) => { girdiler[numaralar[i]] = x.ad; console.log('G' + numaralar[i] + ' ← ' + x.ad); });
}
for (const ad of sira ? [] : resimler.sort()) {
  const m = ad.match(/^G(\d+)(?![0-9]).*\.(png|jpe?g|webp)$/i);
  if (!m) continue;
  if (girdiler[m[1]]) { console.log('ATLANDI: G' + m[1] + ' iki dosya (' + girdiler[m[1]] + ', ' + ad + ') — birini çıkar'); girdiler[m[1]] = null; continue; }
  if (girdiler[m[1]] === null) continue;
  girdiler[m[1]] = ad;
}

const gecici = fs.mkdtempSync(path.join(os.tmpdir(), 'paket_'));
const hedefKok = yaz ? path.join(KOK, 'yeni_gorsel') : gecici;
const sozcuk = s => s.toLocaleLowerCase('tr').replace(/\./g, '_');
const profilBul = (no, anahtar) => profilEk['G' + no] || (anahtar.startsWith('peri.') ? 'peri' : anahtar.startsWith('cengo.') ? 'cengo' : 'konuk');
const dosyaAdi = ({ tur, anahtar }) =>
  tur === 'figur' ? ((/^(peri|cengo)\./.test(anahtar) ? 'sprite/' : 'figur_') + sozcuk(anahtar) + '.webp')
  : ({ arka: 'arka_', detay: 'detay_', kare: 'ara_' })[tur] + sozcuk(anahtar) + '.webp';
const olcu = f => execFileSync('identify', ['-format', '%w %h', f + '[0]']).toString().trim().split(' ').map(Number);

const sonuc = [];
for (const [no, ad] of Object.entries(girdiler)) {
  if (!ad) continue;
  const satir = tablo[no];
  if (!satir) { console.log('ATLANDI: ' + ad + ' — G' + no + ' vaka' + vaka + '_gorsel.md tablosunda yok'); continue; }
  const girdi = path.join(klasor, ad);
  const rel = dosyaAdi(satir);
  const cikti = path.join(hedefKok, rel);
  fs.mkdirSync(path.dirname(cikti), { recursive: true });
  const [w, h] = olcu(girdi);
  const kayit = { no, ad, ...satir, rel, cikti, notlar: [] };
  if (satir.tur === 'figur') {
    let kaynak = girdi;
    if (w !== 1122 || h !== 1402) {
      // Zemin rengiyle 1122×1402'ye getir (5. parça F). Zemin rengi sol üst köşeden.
      const zemin = execFileSync('convert', [girdi + '[0]', '-format', '%[pixel:p{2,2}]', 'info:']).toString().trim();
      kaynak = path.join(gecici, 'G' + no + '_1122.png');
      execFileSync('convert', [girdi + '[0]', '-resize', '1122x1402', '-background', zemin, '-gravity', 'center', '-extent', '1122x1402', kaynak]);
      kayit.notlar.push('kaynak ' + w + '×' + h + ' → 1122×1402 (zemin ' + zemin + ')');
    }
    const profil = profilBul(no, satir.anahtar);
    const genis = genisEk.has('G' + no);
    kayit.onizleme = path.join(gecici, 'G' + no + '_yesil.png');
    const r = spawnSync('node', [path.join(KOK, 'arac_kes.js'), kaynak, cikti, '--profil', profil, ...(genis ? ['--genis'] : []), '--onizleme', kayit.onizleme], { encoding: 'utf8' });
    if (r.status !== 0) { console.log('HATA: G' + no + ' kesilemedi\n' + r.stderr); continue; }
    kayit.notlar.push(...r.stdout.trim().split('\n'));
    kayit.genis = genis;
  } else {
    execFileSync('convert', [girdi + '[0]', '-resize', '900x1200', '-quality', '80', cikti]);
    const [w2, h2] = olcu(cikti);
    kayit.notlar.push(path.basename(rel) + ': ' + w2 + '×' + h2 + ' · kaynak ' + w + '×' + h);
    if (w2 !== 900 || h2 !== 1200) kayit.notlar.push('UYARI: 900×1200 değil — oran 3:4 değil, ekranda kayabilir');
    kayit.onizleme = cikti;
  }
  sonuc.push(kayit);
}

for (const k of sonuc) console.log('G' + k.no + ' ' + k.anahtar + ' → ' + k.rel + '\n  ' + k.notlar.join('\n  '));
const gelmeyen = Object.keys(tablo).filter(no => !girdiler[no]);

(async () => {
  if (!sonuc.length) { console.log('İşlenecek görsel yok.'); return; }
  // 3) Temas sayfası: her görsel + figürlerde büyütülmüş baş (saç halesine bakmak için)
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1200, height: 800 } });
  const uri = f => 'data:image/' + (f.endsWith('.png') ? 'png' : 'webp') + ';base64,' + fs.readFileSync(f).toString('base64');
  const hucre = k => '<figure><div class="ikili"><img src="' + uri(k.onizleme) + '">' +
    (k.tur === 'figur' ? '<div class="bas" style="background-image:url(' + uri(k.onizleme) + ')"></div>' : '') +
    '</div><figcaption><b>G' + k.no + '</b> ' + k.anahtar + '<br><small>' + k.ad + '</small></figcaption></figure>';
  await p.setContent('<style>body{margin:0;padding:12px;background:#222;color:#eee;font:14px sans-serif;display:grid;grid-template-columns:repeat(auto-fill,minmax(440px,1fr));gap:12px}' +
    'figure{margin:0;background:#333;padding:6px;border-radius:6px}.ikili{display:flex;gap:6px}img{height:300px}' +
    '.bas{width:200px;height:300px;background-size:260% auto;background-position:50% 6%;background-repeat:no-repeat;background-color:#3a6}</style>' +
    sonuc.map(hucre).join(''));
  await p.waitForTimeout(300);
  const sayfa = path.join(KOK, 'YENI_UI', 'paket_' + path.basename(path.resolve(klasor)) + '.png');
  fs.mkdirSync(path.dirname(sayfa), { recursive: true });
  await p.screenshot({ path: sayfa, fullPage: true });
  await b.close();
  console.log('\nTemas sayfası: ' + path.relative(process.cwd(), sayfa));

  if (!yaz) {
    console.log('ÖNİZLEME — proje dosyalarına dokunulmadı. Uygunsa aynı komutu --yaz ile çalıştır.');
    if (gelmeyen.length) console.log('Tabloda olup henüz gelmeyen: ' + gelmeyen.length + ' görsel.');
    return;
  }

  // 4) Manifesto
  const mYolu = path.join(KOK, 'yeni', 'gorseller.json');
  const m = JSON.parse(fs.readFileSync(mYolu, 'utf8'));
  for (const k of sonuc) {
    m.dosyalar[k.anahtar] = k.rel;
    m.yer_tutucu = m.yer_tutucu.filter(x => x !== k.anahtar);
    if (m.yer_tutucu_metin) delete m.yer_tutucu_metin[k.anahtar];
    if (k.genis && !m.genis.includes(k.anahtar)) m.genis.push(k.anahtar);
  }
  fs.writeFileSync(mYolu, jsonYaz(m) + '\n');
  console.log('Manifesto güncellendi: ' + sonuc.length + ' görsel; yer tutucu kalan ' + m.yer_tutucu.length);
  const boysuz = [...new Set(sonuc.filter(k => k.tur === 'figur' && !/^(peri|cengo)\./.test(k.anahtar)).map(k => k.anahtar.split('.')[0]))].filter(f => !(f in m.boy));
  if (boysuz.length) console.log('BOY YOK (Peri\'nin yanında ekranda bak, gorseller.json → boy): ' + boysuz.join(', '));
  if (sonuc.some(k => k.genis)) console.log('GENİŞ: arac_kes.js\'nin bastığı CSS\'e bak (yukarıda).');

  // 5) Kapı: doğrulayıcı → iki derleme → eski sayfa birebir aynı mı (boru yok, çıkış kodu tek tek)
  const md5 = f => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex');
  const eski = path.join(KOK, '..', 'index.html'), once = md5(eski);
  for (const komut of [['dogrulayici.js', 'yeni'], ['build_html.js', 'yeni'], ['build_html.js']]) {
    const r = spawnSync('node', komut, { cwd: KOK, encoding: 'utf8' });
    const son = (r.stdout + r.stderr).trim().split('\n');
    console.log('node ' + komut.join(' ') + ' → çıkış ' + r.status + '\n  ' + son.filter(s => /görsel|SONUÇ|✓|HATA|BLOCKED/.test(s)).slice(-4).join('\n  '));
    if (r.status !== 0) { console.log('DURDU: ' + komut.join(' ') + ' geçmedi.'); process.exitCode = 1; return; }
  }
  console.log(md5(eski) === once ? 'Eski index.html birebir aynı ✓' : 'UYARI: eski index.html DEĞİŞTİ — yeni kip eski sayfaya dokunmamalı');
  console.log('Sırada: arac_yeni_tur.js ile görselli tur; saç kenarı ve yazı taraması temas sayfasından.');
})();
