#!/usr/bin/env node
// YouTube Shorts üretim hattı (14 Kasım 2026). Kural belgesi: sablon/8_shorts.md
//
// Senaryo: sablon/vakalar/vakaN_shorts.md  →  shorts/vN/vN_<video>.mp4 (+ .srt, yükleme notu)
//
//   node arac_shorts.js 3 --denetle          spoiler + satır–resim denetimi (ses/görüntü ÜRETMEZ)
//   node arac_shorts.js 3 --onayla [1 2]     senaryoyu okuyup kontrol listesini geçtikten sonra: damga basar
//   node arac_shorts.js 3 [1 2] [--onizle]   damgalı videoları üretir (--onizle: 540×960, 15 kare/sn, hızlı)
//   node arac_shorts.js --ses-dene           shorts_ayar.json'daki her sesten deneme dosyası
//
// Sıra bilerek böyle: spoiler denetimi EN BAŞTA. Damgası olmayan ya da damgadan sonra değişmiş bir
// video için araç ses ve görüntü üretmeyi reddeder — "üret, izle, spoiler çıktı, baştan üret" olmasın.
// Test değil, araç.
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const { spawnSync, spawn } = require('child_process');

const KOK = path.resolve(__dirname, '..');
const AYAR = JSON.parse(fs.readFileSync(path.join(__dirname, 'shorts_ayar.json'), 'utf8'));
const GOR = JSON.parse(fs.readFileSync(path.join(__dirname, 'yeni/gorseller.json'), 'utf8'));
const GORSEL_KLASOR = path.join(__dirname, 'yeni_gorsel');
const kucuk = s => String(s).toLocaleLowerCase('tr');
const args = process.argv.slice(2);
const bayrak = b => args.includes(b);

// ───────────────────────── senaryo okuma ─────────────────────────
// ## video 1 · Kanca
// ⚙ baslik: … · muzik: muzik/x.mp3 · set: trenckot · cset: haki
// ⚙ aciklama: …
// - anlatici: Metin. | arka: A23d · kamera: yakin
// - nadide.kirgin: Metin. | figur: peri.kas
// - anlatici: Kim yaptı? | son
function ayarOku(s) {
  const o = {};
  for (const p of s.split('·')) {
    const m = p.match(/^\s*([a-zçğıöşü_]+)\s*(?::\s*(.*?))?\s*$/i);
    if (m) o[kucuk(m[1])] = m[2] === undefined ? true : m[2];
  }
  return o;
}
function senaryoOku(dosya) {
  const metin = fs.readFileSync(dosya, 'utf8');
  const videolar = [];
  let v = null;
  metin.split(/\r?\n/).forEach((satir, i) => {
    const no = i + 1;
    let m;
    if ((m = satir.match(/^##\s+video\s+(\d+)\s*(?:[·\-—:]\s*(.*))?$/i))) {
      v = { no: m[1], ad: (m[2] || '').trim(), ayar: {}, satirlar: [], ham: [], satirNo: no };
      videolar.push(v);
      return;
    }
    if (/^##\s/.test(satir)) { v = null; return; }
    if (!v) return;
    v.ham.push(satir);
    if ((m = satir.match(/^⚙\s*(.*)$/))) {
      const t = m[1];
      // aciklama ve baslik "·" içerebilir: tek alan olarak al
      const tek = t.match(/^(baslik|aciklama)\s*:\s*(.*)$/i);
      if (tek) v.ayar[kucuk(tek[1])] = tek[2].trim();
      else Object.assign(v.ayar, ayarOku(t));
      return;
    }
    if ((m = satir.match(/^-\s*([a-zçğıöşü0-9_.]+)\s*:\s*(.+?)\s*$/i))) {
      let [, kim, govde] = m;
      let ayar = {};
      const b = govde.lastIndexOf('|');
      if (b >= 0) { ayar = ayarOku(govde.slice(b + 1)); govde = govde.slice(0, b).trim(); }
      v.satirlar.push({ kim: kucuk(kim), metin: govde, ayar, satirNo: no });
    }
  });
  return videolar;
}

// ───────────────────────── oyun verisinden yasaklar ─────────────────────────
function vakaVerisi(vakaId) {
  const g = JSON.parse(fs.readFileSync(path.join(__dirname, 'yeni/game_data.json'), 'utf8'));
  const v = g.vakalar.find(x => x.id === vakaId);
  if (!v) throw new Error(vakaId + ' oyun verisinde yok');
  return v;
}
const IZINLI_SAHNE = new Set(['giris', 'konusma']);
// Bir sahnenin satırlarını yürütüp kullandığı resim anahtarlarını toplar.
function sahneAnahtarlari(sahne) {
  const out = new Set();
  if (!sahne) return out;
  let set = sahne.set, cset = sahne.cset;
  if (sahne.arka) out.add(sahne.arka);
  const sprite = (kim, ifade) => {
    if (!kim || !ifade) return;
    if (kim === 'peri') out.add(`peri.${set}.${ifade}`);
    else if (kim === 'cengo') out.add(cset ? `cengo.${cset}.${ifade}` : `cengo.${ifade}`);
    else out.add(`${kim}.${ifade}`);
  };
  for (const l of sahne.satirlar || []) {
    if (l.set) set = l.set;
    if (l.cset) cset = l.cset;
    if (l.arka) out.add(l.arka);
    if (l.kare) out.add(l.kare);
    if (l.k && l.k !== 'not' && l.i) sprite(l.k, l.i);
    if (l.gir && l.gi) sprite(l.gir, l.gi);
    if (l.peri) sprite('peri', l.peri);
    if (l.cengo) sprite('cengo', l.cengo);
  }
  return out;
}
function bolum(md, ad) {
  const m = md.match(new RegExp('^## ' + ad + '\\s*$([\\s\\S]*?)(?=^## |(?![\\s\\S]))', 'm'));
  return m ? m[1] : '';
}
function yasaklar(vakaNo, vaka) {
  const izinli = new Set(), yasakSahne = new Set(), ipucuSahne = new Set();
  for (const [ad, s] of Object.entries(vaka.sahneler || {})) {
    const hedef = IZINLI_SAHNE.has(ad) ? izinli : yasakSahne;
    sahneAnahtarlari(s).forEach(x => hedef.add(x));
  }
  for (const c of vaka.clues || []) sahneAnahtarlari(c.sahne).forEach(x => ipucuSahne.add(x));
  for (const d of vaka.decisions || []) if (d.kare) yasakSahne.add(d.kare);
  // Ham metinler: çözüm, anı, hikâye, kanıt adları, karar metinleri, ipucu metinleri, ipucuyla açılan olgular
  const md = fs.readFileSync(path.join(KOK, `sablon/vakalar/vaka${vakaNo}_diyalog.md`), 'utf8');
  const cozumMetin = ['cozum', 'ani', 'hikaye', 'kanit'].map(b => bolum(md, b)).join('\n');
  const ipucuOlgu = new Set();
  (vaka.clues || []).forEach(c => (c.reveals || []).forEach(r => ipucuOlgu.add(r)));
  const yasakMetin = [
    { ad: 'çözüm/anı/hikâye/kanıt bölümü', metin: cozumMetin },
    { ad: 'karar metinleri', metin: (vaka.decisions || []).map(d => [d.etiket, d.onizleme, d.sonuc].join(' ')).join('\n') },
    { ad: 'ipucu metinleri', metin: (vaka.clues || []).map(c => c.text).join('\n') },
    { ad: 'ipucuyla açılan olgular', metin: [...ipucuOlgu].map(o => (vaka.facts || {})[o] || '').join('\n') },
  ];
  const kararAd = (vaka.decisions || []).map(d => d.id);
  return { izinli, yasakSahne, ipucuSahne, yasakMetin, kararAd, suclu: vaka.kim_yapti && vaka.kim_yapti.suclu,
    supheliler: ((vaka.kim_yapti && vaka.kim_yapti.supheliler) || []).map(s => s.id) };
}

// ───────────────────────── resim anahtarı çözümü ─────────────────────────
const dosyaVar = k => !!(GOR.dosyalar && GOR.dosyalar[k]);
const kareMi = k => /^(K\d|MASA_|KART_)/.test(k);
function spriteCoz(tok, set, cset) {
  if (!tok) return null;
  if (dosyaVar(tok)) return tok;
  const p = tok.split('.');
  if (p[0] === 'peri') {
    const ifade = p.length === 1 ? 'normal' : p[p.length - 1];
    const s = p.length === 3 ? p[1] : set;
    return s && dosyaVar(`peri.${s}.${ifade}`) ? `peri.${s}.${ifade}` : null;
  }
  if (p[0] === 'cengo') {
    const ifade = p.length === 1 ? 'normal' : p[p.length - 1];
    const s = p.length === 3 ? p[1] : cset;
    if (s && dosyaVar(`cengo.${s}.${ifade}`)) return `cengo.${s}.${ifade}`;
    return dosyaVar(`cengo.${ifade}`) ? `cengo.${ifade}` : null;
  }
  if (p.length === 1 && dosyaVar(`${tok}.normal`)) return `${tok}.normal`;
  return null;
}
const kisiAd = (() => {
  const k = JSON.parse(fs.readFileSync(path.join(__dirname, 'yeni/kisiler.json'), 'utf8')).kisiler;
  const o = {};
  k.forEach(x => { o[x.id] = x.ad.replace(/\s+(Bey|Hanım|Reis|Usta|Abla|Ağabey)$/, ''); });
  return o;
})();

// ───────────────────────── video planı (denetim + üretim ortak) ─────────────────────────
function plan(video) {
  const hatalar = [], uyarilar = [];
  const set = video.ayar.set, cset = video.ayar.cset;
  let arka = null, figurler = [];
  const satirlar = video.satirlar.map(s => {
    const h = m => hatalar.push(`satır ${s.satirNo}: ${m}`);
    const kisi = s.kim === 'anlatici' ? 'anlatici' : s.kim.split('.')[0];
    let konusanAnahtar = null;
    if (kisi !== 'anlatici') {
      konusanAnahtar = spriteCoz(s.kim, set, cset);
      if (!konusanAnahtar) h(`konuşanın resmi bulunamadı: "${s.kim}" (peri için ⚙ set:, cengo için ⚙ cset: gerekebilir)`);
    }
    if (!AYAR.sesler[kisi]) h(`"${kisi}" için ses tanımı yok — kaynak/shorts_ayar.json → sesler`);
    if (s.ayar.arka) {
      if (s.ayar.arka !== arka) figurler = [];
      arka = s.ayar.arka;
      if (!dosyaVar(arka)) h(`resim yok: arka "${arka}"`);
    }
    if (!arka && !s.ayar.son) h('ilk satırda arka: verilmeli');
    if (s.ayar.figur !== undefined) {
      figurler = kucuk(s.ayar.figur) === 'yok' ? [] : String(s.ayar.figur).split(',').map(x => x.trim()).filter(Boolean)
        .map(t => { const a = spriteCoz(t, set, cset); if (!a) h(`figür resmi bulunamadı: "${t}"`); return a; }).filter(Boolean);
    }
    let ekran = figurler.slice();
    if (konusanAnahtar) {
      ekran = ekran.filter(a => a.split('.')[0] !== kisi);
      ekran.push(konusanAnahtar);
    }
    const kare = arka && kareMi(arka);
    if (kare) ekran = [];
    if (ekran.length > 2) h(`ekranda en çok iki figür olur (${ekran.join(', ')})`);
    return { ...s, kisi, arka, kare, ekran: ekran.slice(0, 2), konusanAnahtar,
      kamera: s.ayar.kamera, son: !!s.ayar.son };
  });
  return { satirlar, hatalar, uyarilar };
}

// ───────────────────────── DENETİM ─────────────────────────
const SUC_KOK = ['soy', 'çal', 'hırsız', 'suçlu', 'katil', 'öldür', 'yaptı', 'itiraf', 'sakla', 'yalan', 'kandır',
  'dolandır', 'aldı', 'götürdü', 'kaçırdı', 'sucl'];
const kelimeler = s => kucuk(s).replace(/[^a-zçğıöşüâîû0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
function ngramlar(s, n) {
  const k = kelimeler(s), out = new Set();
  for (let i = 0; i + n <= k.length; i++) out.add(k.slice(i, i + n).join(' '));
  return out;
}
function denetle(vakaNo, videolar) {
  const vakaId = 'V' + vakaNo;
  const vaka = vakaVerisi(vakaId);
  const Y = yasaklar(vakaNo, vaka);
  const yasakNgram = Y.yasakMetin.map(y => ({ ad: y.ad, set: ngramlar(y.metin, 4) }));
  const izinliMetin = ngramlar(['giris', 'konusma'].map(a => (vaka.sahneler[a] || { satirlar: [] }).satirlar.map(l => l.m).join(' ')).join(' ')
    + ' ' + [].concat(vaka.giris || []).join(' '), 4);
  const sucluAd = Y.suclu && kucuk(kisiAd[Y.suclu] || Y.suclu);
  const sonuc = {};
  for (const v of videolar) {
    const p = plan(v);
    const hatalar = p.hatalar.slice(), uyarilar = p.uyarilar.slice();
    const metinler = [
      ...p.satirlar.map(s => ({ yer: `satır ${s.satirNo}`, metin: s.metin })),
      ...(v.ayar.baslik ? [{ yer: 'başlık', metin: v.ayar.baslik }] : []),
      ...(v.ayar.aciklama ? [{ yer: 'açıklama', metin: v.ayar.aciklama }] : []),
    ];
    for (const { yer, metin } of metinler) {
      // 1) Çözüm, karar, ipucu metinlerinden 4 kelimelik dizi — giriş/konuşmada da geçmiyorsa
      const ng = ngramlar(metin, 4);
      for (const y of yasakNgram) {
        const ortak = [...ng].filter(x => y.set.has(x) && !izinliMetin.has(x));
        if (ortak.length) hatalar.push(`${yer}: ${y.ad} ile ortak söz — "${ortak[0]}"`);
      }
      // 2) Suçlunun adı + suç sözü aynı cümlede (soru cümlesi hariç)
      for (const cumle of metin.split(/(?<=[.!…])\s+/)) {
        const kc = kucuk(cumle);
        if (sucluAd && kc.includes(sucluAd) && !/\?\s*$/.test(cumle)) {
          const kok = SUC_KOK.find(k => kelimeler(cumle).some(w => w.startsWith(k)));
          if (kok) hatalar.push(`${yer}: suçlunun adı suç sözüyle aynı cümlede ("${kok}…") — "${cumle.trim()}"`);
        }
      }
      // 3) Karar kimlikleri
      for (const k of Y.kararAd) if (kucuk(metin).includes(kucuk(k).replace(/_/g, ' '))) hatalar.push(`${yer}: karar adı geçiyor (${k})`);
    }
    // 4) Resimler
    const kullanilan = new Set();
    p.satirlar.forEach(s => { if (s.arka) kullanilan.add(s.arka); s.ekran.forEach(a => kullanilan.add(a)); });
    for (const a of kullanilan) {
      if ((GOR.yer_tutucu || []).includes(a) && !dosyaVar(a)) hatalar.push(`resim henüz üretilmedi (yer tutucu): ${a}`);
      if (Y.yasakSahne.has(a) && !Y.izinli.has(a) && !Y.ipucuSahne.has(a))
        hatalar.push(`resim yalnız yüzleşme/kovalamaca/kapanış/karar sahnelerinde geçiyor: ${a}`);
      if (kareMi(a) && !Y.izinli.has(a) && !Object.values(GOR.kapak || {}).includes(a) && !Object.values(GOR.kart || {}).includes(a))
        hatalar.push(`kare giriş/konuşmada görülmüyor (ipucu ya da sonrası olabilir): ${a}`);
      const kisi = a.split('.')[0];
      if (Y.suclu && kisi === Y.suclu && !Y.izinli.has(a) && !/\.normal$/.test(a))
        hatalar.push(`suçlunun yalnız "normal" ifadesi ya da giriş/konuşmada görünen ifadesi kullanılır: ${a}`);
    }
    // 5) Satır–resim (uyarı): adı geçen kişi ekranda mı, konuşan karede mi
    p.satirlar.forEach((s, i) => {
      const ekrandaki = new Set(s.ekran.map(a => a.split('.')[0]));
      // Karşılıklı konuşma: bir önceki satırı söyleyen karakter aynı yerde, şimdi ekrandan çıktıysa
      const o = p.satirlar[i - 1];
      if (o && !s.son && !s.kare && o.arka === s.arka && o.kisi !== 'anlatici' && s.kisi !== 'anlatici' && o.kisi !== s.kisi && !ekrandaki.has(o.kisi))
        uyarilar.push(`satır ${s.satirNo}: ${s.kisi} cevap veriyor ama az önce konuşan ${o.kisi} ekrandan çıktı (SR: hitap edilen ekranda) — figur: listesine ekle`);
      for (const [id, ad] of Object.entries(kisiAd)) {
        if (ad.length < 3 || ekrandaki.has(id)) continue;
        if (new RegExp('(^|[^a-zçğıöşü])' + kucuk(ad) + '([^a-zçğıöşü]|$|\'|’)').test(kucuk(s.metin)) && !s.kare && !s.son)
          uyarilar.push(`satır ${s.satirNo}: "${ad}" anılıyor ama ekranda değil (SR: adı geçen ekranda)`);
      }
      if (s.kare && s.kisi !== 'anlatici') uyarilar.push(`satır ${s.satirNo}: ${s.kisi} konuşuyor, ekranda kare (${s.arka}) var — karede o mu, göz kontrol etsin`);
      if (s.metin.length > 170) uyarilar.push(`satır ${s.satirNo}: uzun (${s.metin.length} harf) — tek karede çok uzun kalır, böl`);
    });
    // 6) Süre tahmini (Türkçe seslendirme ~2 kelime/sn, Edge TTS ölçümü)
    const kelime = p.satirlar.reduce((t, s) => t + kelimeler(s.metin).length, 0);
    const tahmin = kelime / 2.0 + p.satirlar.length * AYAR.zaman.satir_arasi + AYAR.zaman.son_kare_en_az;
    if (tahmin < AYAR.hedef_sure[0] || tahmin > AYAR.hedef_sure[1]) uyarilar.push(`tahmini süre ~${tahmin.toFixed(0)} sn (hedef ${AYAR.hedef_sure.join('–')})`);
    if (!p.satirlar.some(s => s.son)) uyarilar.push('son karede söylenen satır yok (| son) — kapanış sorusu yok');
    sonuc[v.no] = { hatalar, uyarilar, tahmin, hash: videoHash(v) };
  }
  return sonuc;
}
const videoHash = v => crypto.createHash('sha1').update(v.ham.join('\n').trim()).digest('hex').slice(0, 16);

const KONTROL_LISTESI = [
  'Suçlu kim, bu videodan çıkarılabiliyor mu? (Bir şüpheliye fazla yer, fazla kuşkulu bir yüz, "biri yalan söylüyor" deyip tek kişiye bakmak)',
  'Bir ipucunun içeriği söyleniyor ya da gösteriliyor mu? (kanıt nesnesi, saat, şifre, fotoğraf, borç…)',
  'Kararlardan biri ya da sonucu anılıyor mu? Kapanış sorusu bir karara mı işaret ediyor?',
  'Oyunda henüz olmayan bir gerçek (kanona ekleme) yazıldı mı? Yazıldıysa sahibinin onayı var mı?',
  'Adı geçen kişi o an ekranda mı; söylenen yer o an arkada mı? (araç adları yakalar, "annesi" gibi sözleri yakalamaz)',
  'Başlık ve açıklama da aynı kurallara uyuyor mu?',
];

// ───────────────────────── ÜRETİM ─────────────────────────
function calistir(komut, a, secenek = {}) {
  const r = spawnSync(komut, a, { encoding: 'utf8', maxBuffer: 1 << 26, ...secenek });
  if (r.status !== 0) throw new Error(`${komut} başarısız:\n${(r.stderr || '').slice(-1500)}`);
  return r.stdout;
}
const sure = f => parseFloat(calistir('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]));
function seslendir(metin, kisi, klasor) {
  const s = AYAR.sesler[kisi];
  const h = crypto.createHash('sha1').update(JSON.stringify([s, metin])).digest('hex').slice(0, 12);
  const out = path.join(klasor, `${kisi}_${h}.mp3`);
  if (fs.existsSync(out) && fs.statSync(out).size > 0) return out;
  for (let deneme = 1; deneme <= 4; deneme++) {
    const r = spawnSync('python', ['-m', 'edge_tts', '--voice', s.ses, `--rate=${s.hiz || '+0%'}`, `--pitch=${s.perde || '+0Hz'}`,
      '--text', metin, '--write-media', out], { encoding: 'utf8' });
    if (r.status === 0 && fs.existsSync(out) && fs.statSync(out).size > 0) {
      // Edge TTS başta ve sonda sessizlik bırakıyor; kırpılmazsa satırlar arası boşluk iki katına çıkıyor
      const ham = out + '.ham.mp3';
      fs.renameSync(out, ham);
      calistir('ffmpeg', ['-y', '-v', 'error', '-i', ham, '-af',
        'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse',
        '-c:a', 'libmp3lame', '-q:a', '2', out]);
      fs.unlinkSync(ham);
      return out;
    }
    if (deneme === 4) throw new Error(`Edge TTS ses üretemedi (${kisi}): ${(r.stderr || '').slice(-400)}\nKurulu mu? pip install edge-tts`);
  }
}
const srtZaman = t => { const ms = Math.round(t * 1000); const p = (n, w = 2) => String(n).padStart(w, '0');
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`; };
const dosyaURL = k => 'file:///' + path.join(GORSEL_KLASOR, GOR.dosyalar[k]).replace(/\\/g, '/');

async function uret(vakaNo, video, onizle) {
  const vakaId = 'V' + vakaNo;
  const klasor = path.join(KOK, 'shorts', 'v' + vakaNo);
  const is = path.join(klasor, '_is');
  fs.mkdirSync(is, { recursive: true });
  const p = plan(video);
  if (p.hatalar.length) throw new Error(p.hatalar.join('\n'));
  const Z = AYAR.zaman;
  // 1) Ses ve zaman çizelgesi
  let t = Z.bas_bosluk;
  const cizelge = [];
  const normal = p.satirlar.filter(s => !s.son), son = p.satirlar.filter(s => s.son);
  for (const s of normal) {
    const f = seslendir(s.metin, s.kisi, is), d = sure(f);
    cizelge.push({ ...s, ses: f, bas: t, sesSure: d, bit: t + d + Z.satir_arasi });
    t += d + Z.satir_arasi;
    process.stdout.write('.');
  }
  const sonBas = t;
  let ts = sonBas + 0.4;
  for (const s of son) {
    const f = seslendir(s.metin, s.kisi, is), d = sure(f);
    cizelge.push({ ...s, ses: f, bas: ts, sesSure: d, bit: ts + d + Z.satir_arasi });
    ts += d + Z.satir_arasi;
  }
  const toplam = Math.max(ts + 0.6, sonBas + Z.son_kare_en_az);
  console.log(` ses tamam, süre ${toplam.toFixed(1)} sn`);

  // 2) Ses karışımı
  const sesDosya = path.join(is, `v${vakaNo}_${video.no}_ses.wav`);
  const girdi = [], filtre = [];
  cizelge.forEach((c, i) => { girdi.push('-i', c.ses); const ms = Math.round(c.bas * 1000); filtre.push(`[${i}:a]aresample=48000,adelay=${ms}|${ms}[s${i}]`); });
  filtre.push(`${cizelge.map((_, i) => `[s${i}]`).join('')}amix=inputs=${cizelge.length}:normalize=0,apad=whole_dur=${toplam.toFixed(2)},atrim=0:${toplam.toFixed(2)}[ses]`);
  let son_etiket = '[ses]';
  const muzik = video.ayar.muzik && path.resolve(KOK, 'shorts', video.ayar.muzik);
  if (video.ayar.muzik) {
    if (!fs.existsSync(muzik)) throw new Error('müzik dosyası yok: ' + muzik);
    const mi = cizelge.length;
    girdi.push('-stream_loop', '-1', '-i', muzik);
    filtre.push(`[ses]asplit=2[ses1][yan]`);
    filtre.push(`[${mi}:a]aresample=48000,atrim=0:${toplam.toFixed(2)},volume=${AYAR.muzik_seviye},afade=t=in:d=0.8,afade=t=out:st=${(toplam - 1.5).toFixed(2)}:d=1.5[m0]`);
    filtre.push(`[m0][yan]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=400[m1]`);
    filtre.push(`[ses1][m1]amix=inputs=2:normalize=0[karisik]`);
    son_etiket = '[karisik]';
  }
  filtre.push(`${son_etiket}loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[cikis]`);
  calistir('ffmpeg', ['-y', '-v', 'error', ...girdi, '-filter_complex', filtre.join(';'), '-map', '[cikis]', '-ac', '2', sesDosya]);

  // 3) Görüntü: kare kare çiz, ffmpeg'e boru
  const G = onizle ? { w: 540, h: 960, fps: 15 } : { w: 1080, h: 1920, fps: Z.fps };
  const anahtarlar = new Set();
  cizelge.forEach(c => { if (c.arka) anahtarlar.add(c.arka); c.ekran.forEach(a => anahtarlar.add(a)); });
  const kapak = (GOR.kapak || {})[vakaId] || cizelge[0].arka;
  anahtarlar.add(kapak);
  const resim = {}; anahtarlar.forEach(k => { resim[k] = dosyaURL(k); });
  const veri = {
    W: G.w, H: G.h, gecis: Z.gecis, toplam, sonBas, kapak, resim,
    boy: GOR.boy || {}, genis: GOR.genis || [], sk: AYAR.son_kare,
    satirlar: cizelge.filter(c => !c.son).map(c => ({ bas: c.bas, bit: c.bit, arka: c.arka, kare: c.kare, ekran: c.ekran, kisi: c.kisi, kamera: c.kamera })),
  };
  const html = path.join(is, 'sahne.html');
  fs.writeFileSync(html, sahneHTML(veri));
  const ORTAM = require('./arac_ortam.js');
  const { chromium } = ORTAM.playwright();
  const tarayici = await chromium.launch(ORTAM.tarayici());
  const sayfa = await tarayici.newPage({ viewport: { width: G.w, height: G.h }, deviceScaleFactor: 1 });
  await sayfa.goto('file:///' + html.replace(/\\/g, '/'));
  await sayfa.waitForFunction(() => window.HAZIR === true, null, { timeout: 60000 });
  const cikis = path.join(klasor, `v${vakaNo}_${video.no}${onizle ? '_onizleme' : ''}.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(G.fps), '-c:v', 'mjpeg', '-i', '-',
    '-i', sesDosya, '-c:v', 'libx264', '-preset', onizle ? 'veryfast' : 'medium', '-crf', onizle ? '28' : '19', '-pix_fmt', 'yuv420p',
    '-r', String(G.fps), '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', cikis], { stdio: ['pipe', 'inherit', 'inherit'] });
  const bitti = new Promise((ok, red) => ff.on('close', k => (k === 0 ? ok() : red(new Error('ffmpeg kodlama başarısız: ' + k)))));
  const N = Math.ceil(toplam * G.fps);
  for (let f = 0; f < N; f++) {
    await sayfa.evaluate(tt => window.ciz(tt), f / G.fps);
    const buf = await sayfa.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % G.fps === 0) process.stdout.write(`\r  çizim ${Math.round(f / N * 100)}%`);
  }
  ff.stdin.end();
  await bitti;
  await tarayici.close();
  process.stdout.write('\r  çizim 100%\n');

  // 4) Altyazı (videoya GÖMÜLMEZ; YouTube'a ayrıca yüklenebilir) ve yükleme notu
  if (!onizle) {
    fs.writeFileSync(path.join(klasor, `v${vakaNo}_${video.no}.srt`),
      cizelge.map((c, i) => `${i + 1}\n${srtZaman(c.bas)} --> ${srtZaman(c.bas + c.sesSure)}\n${c.metin}\n`).join('\n'));
    fs.writeFileSync(path.join(klasor, `v${vakaNo}_${video.no}_yukleme.txt`),
      `Başlık: ${video.ayar.baslik || '(senaryoda ⚙ baslik: yok)'}\n\nAçıklama:\n${video.ayar.aciklama || '(senaryoda ⚙ aciklama: yok)'}\n\n` +
      `Oyna: https://${AYAR.son_kare.baglanti}\n\nSüre: ${toplam.toFixed(1)} sn · Müzik: ${video.ayar.muzik || 'yok'}\n` +
      `Altyazı dosyası (isteğe bağlı): v${vakaNo}_${video.no}.srt\n`);
  }
  console.log('  → ' + path.relative(KOK, cikis));
}

// Kare kare çizilen sahne. Zaman bilerek dışarıdan verilir (ciz(t)): her çalıştırmada aynı video çıkar.
function sahneHTML(V) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shrikhand&family=Nunito:wght@600;800&display=swap">
<style>
html,body{margin:0;width:${V.W}px;height:${V.H}px;overflow:hidden;background:#0d0b0a}
.kat{position:absolute;inset:0;overflow:hidden}
.kat img{position:absolute;left:50%;top:50%;width:100%;height:100%;object-fit:cover;transform-origin:50% 50%}
#figurler{position:absolute;inset:0}
.fig{position:absolute;bottom:${-V.H * 0.012}px;height:${V.H * 0.70}px;transform-origin:50% 100%}
.fig img{height:100%;display:block}
#golge{position:absolute;inset:0;pointer-events:none;
 background:radial-gradient(ellipse 85% 70% at 50% 45%,rgba(0,0,0,0) 55%,rgba(0,0,0,.55) 100%),
 linear-gradient(to bottom,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 14%,rgba(0,0,0,0) 80%,rgba(0,0,0,.45) 100%)}
#son{position:absolute;inset:0;opacity:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
#son .bg{position:absolute;inset:-4%;background-size:cover;background-position:center;filter:blur(${V.W * 0.008}px) brightness(.38) saturate(.8)}
#son .ic{position:relative;color:#f3e6cf}
#son .b{font-family:Shrikhand,Georgia,serif;font-size:${V.W * 0.15}px;letter-spacing:${V.W * 0.004}px;text-shadow:0 ${V.W * 0.006}px ${V.W * 0.02}px rgba(0,0,0,.8)}
#son .a{font-family:Nunito,sans-serif;font-weight:800;font-size:${V.W * 0.045}px;letter-spacing:${V.W * 0.02}px;margin-top:${-V.W * 0.01}px;color:#d9b77a}
#son .c{display:inline-block;margin-top:${V.W * 0.09}px;padding:${V.W * 0.028}px ${V.W * 0.08}px;border-radius:${V.W}px;background:#b3262b;
 font-family:Nunito,sans-serif;font-weight:800;font-size:${V.W * 0.06}px;color:#fff;box-shadow:0 ${V.W * 0.01}px ${V.W * 0.04}px rgba(0,0,0,.6)}
#son .l{font-family:Nunito,sans-serif;font-weight:600;font-size:${V.W * 0.032}px;margin-top:${V.W * 0.05}px;color:#cdbfa6}
</style></head><body>
<div class="kat" id="kA"><img></div><div class="kat" id="kB"><img></div>
<div id="figurler"></div><div id="golge"></div>
<div id="son"><div class="bg"></div><div class="ic"><div class="b"></div><div class="a"></div><div class="c"></div><div class="l"></div></div></div>
<script>
const V=${JSON.stringify(V)};
const $=s=>document.querySelector(s);
const yumusak=x=>x<=0?0:x>=1?1:x*x*(3-2*x);
// Çekimler: aynı arka arka arkaya gelen satırlar tek çekim (kamera hareketi kesilmez)
const cekim=[];
V.satirlar.forEach((s,i)=>{const o=cekim[cekim.length-1];
  if(o&&o.arka===s.arka){o.bit=s.bit;o.son=i;} else cekim.push({arka:s.arka,kare:s.kare,bas:s.bas,bit:s.bit,ilk:i,son:i,kamera:s.kamera});});
if(cekim.length){cekim[0].bas=0;}
cekim.forEach((c,i)=>{if(i+1<cekim.length)c.bit=cekim[i+1].bas+V.gecis; else c.bit=V.sonBas+V.gecis;
  c.kamera=c.kamera||['yakin','sola','uzak','saga'][i%4];});
function kamera(c,t){const p=yumusak((t-c.bas)/Math.max(.1,c.bit-c.bas));let s=1.06,x=0,y=0;
  if(c.kamera==='yakin')s=1.04+.10*p; else if(c.kamera==='uzak')s=1.14-.10*p;
  else if(c.kamera==='sola'){s=1.12;x=3-6*p;} else if(c.kamera==='saga'){s=1.12;x=-3+6*p;}
  return 'translate(-50%,-50%) translate('+x+'%,'+y+'%) scale('+s+')';}
function katCiz(el,c,t,op){const img=el.firstChild;if(!c){el.style.opacity=0;return;}
  if(img.dataset.k!==c.arka){img.src=V.resim[c.arka];img.dataset.k=c.arka;}
  img.style.transform=kamera(c,t);el.style.opacity=op;}
// Figürler: kişi başına tek <img>; yer (sol/orta/sağ) satırdan satıra kayarak değişir
const figEl={};
function yerler(ekran){if(!ekran.length)return [];const k=ekran.map(a=>a.split('.')[0]);
  if(k.length===1)return [{a:ekran[0],x:.5,ayna:k[0]==='peri'||k[0]==='cengo'}];
  let sira=[0,1];
  if(k[1]==='peri'||(k[1]==='cengo'&&k[0]!=='peri'))sira=[1,0];
  return [{a:ekran[sira[0]],x:.27,ayna:true},{a:ekran[sira[1]],x:.73,ayna:false}];}
const satirYer=V.satirlar.map(s=>s.kare?[]:yerler(s.ekran));
function figCiz(t){
  let i=V.satirlar.findIndex(s=>t<s.bit);if(i<0)i=V.satirlar.length-1;
  const s=V.satirlar[i], simdi=satirYer[i], once=i>0?satirYer[i-1]:[];
  const ayni=i>0&&V.satirlar[i-1].arka===s.arka, dt=t-s.bas;
  const gorunen=new Set();
  const ciz=(y,op,x)=>{const kisi=y.a.split('.')[0];gorunen.add(kisi);
    let el=figEl[kisi];if(!el){el=document.createElement('div');el.className='fig';el.innerHTML='<img>';$('#figurler').appendChild(el);figEl[kisi]=el;}
    const img=el.firstChild;if(img.dataset.k!==y.a){img.src=V.resim[y.a];img.dataset.k=y.a;}
    const olcek=(kisi==='peri'||kisi==='cengo')?1:(V.boy[kisi]||1);
    const konusan=s.kisi===kisi, anlatici=s.kisi==='anlatici';
    const nefes=konusan?1+.006*Math.sin(t*3.1):1;
    el.style.height=(V.H*.70*olcek)+'px';
    const w=img.naturalWidth?img.naturalWidth*(V.H*.70*olcek)/img.naturalHeight:V.W*.6;
    el.style.left=(x*V.W-w/2)+'px';
    el.style.transform=(y.ayna?'scaleX(-1) ':'')+'scale('+nefes+')';
    el.style.filter=anlatici?'brightness(.92)':konusan?'brightness(1.04)':'brightness(.62) saturate(.75)';
    el.style.zIndex=konusan?2:1;el.style.opacity=op;};
  for(const y of simdi){const kisi=y.a.split('.')[0];const o=ayni?once.find(z=>z.a.split('.')[0]===kisi):null;
    if(o){const p=yumusak(dt/.35);ciz(y,1,o.x+(y.x-o.x)*p);}
    else{const op=yumusak(dt/.3);ciz(y,op,y.x+(y.x<.5?-.03:.03)*(1-op));}}
  if(ayni&&dt<.25)for(const o of once){const kisi=o.a.split('.')[0];if(!gorunen.has(kisi))ciz(o,1-dt/.25,o.x);}
  for(const k in figEl)if(!gorunen.has(k))figEl[k].style.opacity=0;
  // Çekim geçişinde figürler de yeni çekimle birlikte belirir
  const c=cekim.findIndex(c=>t>=c.bas&&t<c.bit&&c.ilk<=i&&i<=c.son);
  $('#figurler').style.opacity=t>=V.sonBas?Math.max(0,1-(t-V.sonBas)/V.gecis):1;
}
window.ciz=function(t){
  let ci=-1;for(let i=0;i<cekim.length;i++)if(t>=cekim[i].bas)ci=i;
  const c=cekim[ci], o=ci>0?cekim[ci-1]:null;
  const g=o?yumusak((t-c.bas)/V.gecis):1;
  katCiz($('#kA'),o&&g<1?o:null,t,1);
  katCiz($('#kB'),c,t,g);
  figCiz(t);
  const sp=yumusak((t-V.sonBas)/0.5);$('#son').style.opacity=sp;
  const kat=(sel,gec)=>{$(sel).style.opacity=yumusak((t-V.sonBas-gec)/0.5);$(sel).style.transform='translateY('+(1-yumusak((t-V.sonBas-gec)/0.5))*V.W*.03+'px)';};
  kat('#son .b',.2);kat('#son .a',.45);kat('#son .c',.8);kat('#son .l',1.1);
  const cs=1+.03*Math.max(0,Math.sin((t-V.sonBas-1.3)*3));$('#son .c').style.transform+=' scale('+(t-V.sonBas>1.3?cs:1)+')';
};
$('#son .bg').style.backgroundImage='url("'+V.resim[V.kapak]+'")';
$('#son .b').textContent=V.sk.baslik;$('#son .a').textContent=V.sk.alt_baslik;
$('#son .c').textContent=V.sk.cagri+'  ▶';$('#son .l').textContent=V.sk.baglanti;
const hepsi=Object.values(V.resim).map(u=>new Promise(r=>{const i=new Image();i.onload=i.onerror=r;i.src=u;}));
Promise.all([...hepsi,document.fonts.ready]).then(()=>{
  // figür imgleri doğal boyu bilsin diye hepsini önceden oluştur
  window.ciz(0);setTimeout(()=>{window.HAZIR=true;},300);});
</script></body></html>`;
}

// ───────────────────────── damga ─────────────────────────
const damgaYolu = n => path.join(KOK, 'shorts', 'v' + n, 'denetim.json');
const damgaOku = n => { try { return JSON.parse(fs.readFileSync(damgaYolu(n), 'utf8')); } catch (e) { return { videolar: {} }; } };

function rapor(vakaNo, sonuc, videolar) {
  let hataVar = false;
  for (const v of videolar) {
    const r = sonuc[v.no];
    console.log(`\n── Video ${v.no}${v.ad ? ' · ' + v.ad : ''}  (~${r.tahmin.toFixed(0)} sn)`);
    if (!r.hatalar.length && !r.uyarilar.length) console.log('   temiz');
    r.hatalar.forEach(h => console.log('   HATA   ' + h));
    r.uyarilar.forEach(u => console.log('   uyarı  ' + u));
    if (r.hatalar.length) hataVar = true;
  }
  return hataVar;
}

async function ana() {
  if (bayrak('--ses-dene')) {
    const d = path.join(KOK, 'shorts', 'ses_deneme'); fs.mkdirSync(d, { recursive: true });
    const metin = args.find(a => !a.startsWith('--')) || 'Pazar gecesi Karaköy\'de bir pastane soyuldu. Kamera o gece bozukmuş. Sence kim yaptı?';
    for (const k of Object.keys(AYAR.sesler)) { const f = seslendir(metin, k, d); fs.copyFileSync(f, path.join(d, k + '.mp3')); fs.unlinkSync(f); console.log('  ' + k + '.mp3'); }
    console.log('→ ' + path.relative(KOK, d));
    return;
  }
  const sayilar = args.filter(a => /^\d+$/.test(a));
  const vakaNo = sayilar[0];
  if (!vakaNo) { console.log('Kullanım: node arac_shorts.js <vaka no> [--denetle | --onayla [video...] | video... [--onizle]]'); process.exit(2); }
  const secili = sayilar.slice(1);
  const si = args.indexOf('--senaryo');
  const dosya = si >= 0 ? path.resolve(args[si + 1]) : path.join(KOK, `sablon/vakalar/vaka${vakaNo}_shorts.md`);
  if (si >= 0 && !bayrak('--denetle')) { console.error('--senaryo yalnız --denetle ile (deneme için)'); process.exit(2); }
  if (!fs.existsSync(dosya)) { console.error('Senaryo yok: ' + path.relative(KOK, dosya)); process.exit(2); }
  const hepsi = senaryoOku(dosya);
  const videolar = secili.length ? hepsi.filter(v => secili.includes(v.no)) : hepsi;
  if (!videolar.length) { console.error('Senaryoda video bulunamadı'); process.exit(2); }

  if (bayrak('--denetle') || bayrak('--onayla')) {
    const sonuc = denetle(vakaNo, videolar);
    const hataVar = rapor(vakaNo, sonuc, videolar);
    console.log('\nİnsan kontrol listesi (araç bunları yakalayamaz — senaryoyu okuyarak cevapla):');
    KONTROL_LISTESI.forEach((k, i) => console.log(`  ${i + 1}. ${k}`));
    if (hataVar) { console.log('\nBLOCKED — hatalar düzelmeden damga basılmaz, üretim yapılmaz.'); process.exit(1); }
    if (bayrak('--onayla')) {
      const d = damgaOku(vakaNo);
      videolar.forEach(v => { d.videolar[v.no] = { hash: sonuc[v.no].hash, tarih: new Date().toISOString().slice(0, 10) }; });
      fs.mkdirSync(path.dirname(damgaYolu(vakaNo)), { recursive: true });
      fs.writeFileSync(damgaYolu(vakaNo), JSON.stringify(d, null, 2) + '\n');
      console.log(`\nDAMGA basıldı: video ${videolar.map(v => v.no).join(', ')} → ${path.relative(KOK, damgaYolu(vakaNo))}`);
    } else console.log('\nPASS (mekanik). Kontrol listesini geçtiysen: node arac_shorts.js ' + vakaNo + ' --onayla');
    return;
  }

  const d = damgaOku(vakaNo);
  const red = videolar.filter(v => !d.videolar[v.no] || d.videolar[v.no].hash !== videoHash(v));
  if (red.length) {
    console.error(`Damgasız ya da damgadan sonra değişmiş video: ${red.map(v => v.no).join(', ')}.\n` +
      `Önce: node arac_shorts.js ${vakaNo} --denetle  →  okuyup  →  node arac_shorts.js ${vakaNo} --onayla`);
    process.exit(1);
  }
  for (const v of videolar) { console.log(`Video ${v.no}${v.ad ? ' · ' + v.ad : ''}`); await uret(vakaNo, v, bayrak('--onizle')); }
}
ana().catch(e => { console.error('\n' + (e.stack || e)); process.exit(1); });
