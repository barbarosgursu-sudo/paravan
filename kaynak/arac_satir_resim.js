// ARAÇ (test değil): her RESMİN hangi SATIRLARDA göründüğünü ve metin–resim uyumu için riskli satırları listeler.
// Sahibinin kuralı (6 Kasım 2026): "Her metin, gösterildiği resimle uyumlu olmalı; resim bunu bilerek üretilmeli."
//
// Girdi: arac_yeni_tur.js --hepsi'nin yazdığı dokum.txt dosyaları (bir ya da birkaç yolun; tekrarlar birleşir).
// Tur görselsiz de çalışır (yer tutucu), yani bu araç resimler üretilmeden ÖNCE de koşar:
//   cd kaynak && node arac_yeni_tur.js 0 <yol> dogru --hepsi   (her yol ve sonuç için; satir/'ı kopyala)
//   node arac_satir_resim.js <dokum1.txt> [<dokum2.txt> …] [--vaka V3] [--cikti dosya.md] [--karar vakaN_bayrak.md]
//
// Çıktı (Markdown):
//   1. RESİM → SATIRLAR: her figür ifadesi, kare için o resmin ekranda olduğu bütün satırlar.
//   2. BAYRAKLAR — 13 Kasım 2026'dan beri KURALLA AYIKLANIR (sahibinin kararı: "en az karar bana gelsin";
//      kurallar `sablon/5_gorsel_sistemi.md` → SR-M). Her bayrak üç sınıftan birine düşer:
//        OTO  — kural kapattı (gerekçesiyle listelenir, kimseye sorulmaz).
//        İŞ   — kural ne yapılacağını söylüyor; yazar (Claude) diyalogda uygular, araç yeniden koşar.
//        SOR  — kural karar veremedi; yalnız bunlar sahibine gider.
//      Türler: EYLEM (anlatıda eylem/nesne, kare yok), JEST (replikte parantez), KONUŞAN (konuşan ekranda değil),
//      HİTAP (`kime` ekranda değil).
//   --karar: sahibinin "kalsın" dediği satırlar (dosyada `- kalsın: <satırın başı>`); bir daha sorulmaz.
const fs = require('fs'), path = require('path');
const arg = process.argv.slice(2);
const al = (ad, v) => { const i = arg.indexOf(ad); if (i < 0) return v; const x = arg[i + 1]; arg.splice(i, 2); return x; };
const VAKA = al('--vaka', null);
const CIKTI = al('--cikti', path.join(__dirname, 'YENI_UI', 'satir_resim.md'));
const KARAR = al('--karar', null);
if (!arg.length) { console.error('Kullanım: node arac_satir_resim.js <dokum.txt> … [--vaka V3] [--cikti dosya.md] [--karar dosya.md]'); process.exit(1); }

const kucuk = s => String(s).toLocaleLowerCase('tr');
const katla = s => kucuk(s).replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u');

// Eylem anlatısı (kare yoksa bakılır).
const EYLEM = /(yiyor|yiyip|uzatıyor|uzatarak|kesiyor|çömel|masanın altına|giriyor|geliyor|koşuyor|oturuyor|bağlıyor|silkeliyor|çıkarıp|çıkarıyor|ısır|esniyor|açıyor|takıyor|itiyor|bırakıp|bırakıyor|deviriyor|düşüyor|kayıyor|kapaklan|dağıtıyor|bölüyor|koyuyor|dönüyor|iniyor|bakakal|gösteriyor|fışkır|saklan|öksür|el sall|selam|alıp|tutuyor|veriyor|atıyor|elinde)/u;
// SR-M1: yalnız yer değiştirme / bakış / ses — figürün girip çıkması ve ifadesi taşır.
const HAREKET = /(giriyor|geliyor|dönüyor|çıkıyor|kapanıyor|çalınıyor|kalıyor|süzüyor|bakıyor|oturuyor|koşuyor|koluna giriyor|yürüyor|susuyor|duruyor)/u;
// Nesne işareti: elde bir şey var ya da el değiştiriyor.
const NESNE = /(elinde|alıp|koyuyor|uzatıyor|uzatarak|çıkarıp|çıkarıyor|tutuyor|bırakıp|bırakıyor|veriyor|atıyor|yiyor|yiyip|takıyor)/u;
// SR-M2: yüz, bakış, ses jesti — ifade taşır.
const YUZ = /(göz kırp|bakarak|bakıp|gülümse|gülerek|iç çek|kaşlarını|omuz silk|başını sall|fısılda|alçak sesle|sesi titre|yüzüne bakmadan|dişlerinin arasından)/u;
// SR-M3: parantez yalnız hitap işareti: "(Cengo'ya)", "(Eylül'e)".
const HITAP_ISARETI = /^\(\s*[A-ZÇĞİÖŞÜ][^\s)]*['’](y?[ae]|n[ae])\s*\)$/u;
// Nesne → figür adında aranan kök (figür nesneyi gösteriyorsa bayrak kapanır).
const ES = { telefon: ['telefon', 'yazarak', 'mesaj'], tepsi: ['tepsi', 'tepsiyle'], borek: ['borek'], simit: ['simit'], tabla: ['tabla'],
  buket: ['buket', 'cicek'], tablet: ['tablet'], kova: ['kova'], kilif: ['kilif'], uzatir: ['uzat'], uzaniyor: ['uzan'], makbuz: ['makbuz'], supurge: ['supurge'] };
const figurNesneyiTasir = (figurler, metin) => {
  const m = katla(metin);
  return figurler.some(f => f.split('.').slice(1).join('_').split('_').some(p => (ES[p] || [p]).some(e => e.length > 3 && m.includes(e))));
};

const satirlar = new Map(); // anahtar: konuşan+metin → kayıt
for (const d of arg) {
  for (const ln of fs.readFileSync(d, 'utf8').split(/\r?\n/)) {
    const p = ln.split(' | '); if (p.length < 6) continue;
    const [noAd, kimRaw, arkaRaw, solRaw, sagRaw] = p; const m = p.slice(5).join(' | ');
    const ad = noAd.replace(/^\d+\s+/, '');
    if (VAKA && !ad.startsWith(VAKA)) continue;
    const [k, kime] = kimRaw.split('→');
    const kare = (arkaRaw.match(/KARE (\S+)/) || [])[1] || '';
    const arka = arkaRaw.split(' ')[0];
    const cekik = /\(çekik\)/.test(solRaw);
    const sol = solRaw.replace(/^sol\s+/, '').replace('(çekik) ', '').replace(/^sol:/, '');
    const sag = sagRaw.replace(/^sağ\s+/, '');
    const anahtar = k + '|' + m;
    if (!satirlar.has(anahtar)) satirlar.set(anahtar, { ad, k, kime: kime || '', m, arka, kare, sol, sag, cekik, gorulen: new Set() });
    satirlar.get(anahtar).gorulen.add(`${sol}·${sag}·${kare}`);
  }
}

const kalsin = KARAR && fs.existsSync(KARAR)
  ? fs.readFileSync(KARAR, 'utf8').split(/\r?\n/).map(x => (x.match(/^-\s*kalsın:\s*(.+)$/u) || [])[1]).filter(Boolean).map(x => x.trim())
  : [];
const kararVar = s => kalsin.some(x => s.m.startsWith(x) || (s.k + ': ' + s.m).startsWith(x));

const resim = new Map();
const ekle = (key, s) => { if (!key || key === '-') return; if (!resim.has(key)) resim.set(key, []); const l = resim.get(key); if (!l.includes(s)) l.push(s); };
const bayrak = []; // [tür, sınıf, satır, not]
const B = (tur, sinif, s, not) => bayrak.push([tur, kararVar(s) ? 'OTO' : sinif, s, kararVar(s) ? 'sahibi: kalsın' : not]);
for (const s of satirlar.values()) {
  const yazi = `${s.k === 'not' ? '*anlatı*' : '**' + s.k + '**'}: ${s.m}`;
  if (s.kare) ekle('KARE ' + s.kare, yazi);
  else { ekle(s.sol, yazi + (s.k === s.sol.split('.')[0] ? '' : '  _(dinliyor)_')); ekle(s.sag, yazi + (s.k === s.sag.split('.')[0] ? '' : '  _(dinliyor)_')); }
  ekle('ARKA ' + s.arka, yazi);
  const ekranda = [s.sol, s.sag].map(x => x.split('.')[0]);
  const figurler = [s.sol, s.sag].filter(x => x && x !== '-');
  if (s.k === 'not' && !s.kare && EYLEM.test(s.m)) {
    const nesne = NESNE.test(s.m);
    if (!nesne && HAREKET.test(s.m)) B('EYLEM', 'OTO', s, 'SR-M1: giriş/çıkış, bakış — figür ve ifadesi taşır');
    else if (/bırak/u.test(s.m) && !/(alıp|uzat)/u.test(s.m)) B('EYLEM', 'OTO', s, 'SR-M5/SR-B: nesneyi bırakma satırı — nesne burada biter');
    else if (nesne && figurNesneyiTasir(figurler, s.m)) B('EYLEM', 'OTO', s, 'SR-M4: ekrandaki figür nesneyi gösteriyor');
    else B('EYLEM', 'İŞ', s, 'SR-M5: nesne ipucuysa ya da konuşmada "şimdi burada" anılıyorsa nesneli poz/kare; değilse nesneyi anlatıdan çıkar');
  }
  const par = (s.m.match(/\([^)]+\)/) || [])[0];
  if (s.k !== 'not' && par && !s.kare) {
    const fig = figurler.find(x => x.split('.')[0] === s.k) || '(ekranda değil)';
    if (HITAP_ISARETI.test(par)) B('JEST', 'OTO', s, 'SR-M3: parantez yalnız hitap işareti');
    else if (YUZ.test(par)) B('JEST', 'OTO', s, `SR-M2: yüz/bakış/ses jesti, ifade taşır (${fig})`);
    else if (figurNesneyiTasir([fig], par)) B('JEST', 'OTO', s, `SR-M4: figür nesneyi gösteriyor (${fig})`);
    else B('JEST', 'İŞ', s, `SR-M5: figür ${fig} bunu yapmıyor — komşu kareye bağla, nesneli poz, ya da parantezi çıkar`);
  }
  if (s.k !== 'not' && !s.kare && !s.cekik && !ekranda.includes(s.k) && !['teyze', 'fotografci'].includes(s.k)) B('KONUŞAN', 'İŞ', s, `SR-M6: konuşanı ekrana al (gir) — ekranda: ${s.sol}, ${s.sag}`);
  if (s.k !== 'not' && s.kime && !s.kare && !s.cekik && !ekranda.includes(s.kime)) B('HİTAP', 'İŞ', s, `SR-M6: ${s.kime} sahnede değil ya da motor getiremedi — gir ekle ya da kime'yi düzelt; ekranda: ${s.sol}, ${s.sag}`);
}

const say = (sinif, t) => bayrak.filter(b => b[1] === sinif && (!t || b[0] === t)).length;
let o = `# Satır → resim uyumu${VAKA ? ' — ' + VAKA : ''}\n\nKaynak: ${arg.map(a => path.basename(path.dirname(a)) + '/' + path.basename(a)).join(', ')} · ${satirlar.size} farklı satır.\n` +
  `Her resim, ekranda olduğu satırlarla birlikte okunur: yüz, el ve jest HER satıra uymalı. Uymuyorsa ayrı ifade/kare gerekir.\n` +
  `Bayraklar kuralla ayıklanır (\`sablon/5_gorsel_sistemi.md\` → SR-M): **OTO** kural kapattı · **İŞ** yazar kurala göre düzeltir · **SOR** sahibine.\n\n`;
o += `**Özet:** OTO ${say('OTO')} · İŞ ${say('İŞ')} · SOR ${say('SOR')}\n\n`;
for (const sinif of ['SOR', 'İŞ', 'OTO']) {
  const l = bayrak.filter(b => b[1] === sinif); if (!l.length) continue;
  o += `## Bayraklar — ${sinif}\n\n| tür | sahne | satır | not |\n|---|---|---|---|\n`;
  for (const [t, , s, n] of l) o += `| ${t} | ${s.ad} | ${s.k}: ${s.m.replace(/\|/g, '/').slice(0, 140)} | ${n} |\n`;
  o += '\n';
}
o += `## Resim → satırlar\n\n`;
const sira = [...resim.keys()].sort((a, b) => (a.startsWith('ARKA') - b.startsWith('ARKA')) || (a.startsWith('KARE') - b.startsWith('KARE')) || a.localeCompare(b));
for (const key of sira) {
  if (key.startsWith('ARKA')) continue;
  o += `### ${key} (${resim.get(key).length} satır)\n\n` + resim.get(key).map(x => '- ' + x).join('\n') + '\n\n';
}
fs.mkdirSync(path.dirname(CIKTI), { recursive: true });
fs.writeFileSync(CIKTI, o);
const tur = s => ['EYLEM', 'JEST', 'KONUŞAN', 'HİTAP'].map(t => `${t} ${say(s, t)}`).join(', ');
console.log(`${satirlar.size} satır · ${resim.size} resim anahtarı`);
console.log(`bayrak: OTO ${say('OTO')} (${tur('OTO')}) · İŞ ${say('İŞ')} (${tur('İŞ')}) · SOR ${say('SOR')}`);
console.log('Yazıldı: ' + CIKTI);
