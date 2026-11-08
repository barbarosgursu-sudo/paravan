// ARAÇ (test değil): her RESMİN hangi SATIRLARDA göründüğünü ve metin–resim uyumu için riskli satırları listeler.
// Sahibinin kuralı (6 Kasım 2026): "Her metin, gösterildiği resimle uyumlu olmalı; resim bunu bilerek üretilmeli."
//
// Girdi: arac_yeni_tur.js --hepsi'nin yazdığı dokum.txt dosyaları (bir ya da birkaç yolun; tekrarlar birleşir).
// Tur görselsiz de çalışır (yer tutucu), yani bu araç resimler üretilmeden ÖNCE de koşar:
//   cd kaynak && node arac_yeni_tur.js 0 <yol> dogru --hepsi   (her yol ve sonuç için; satir/'ı kopyala)
//   node arac_satir_resim.js <dokum1.txt> [<dokum2.txt> …] [--vaka V3] [--cikti YENI_UI/satir_resim.md]
//
// Çıktı (Markdown):
//   1. RESİM → SATIRLAR: her figür ifadesi, kare ve arka plan için o resmin ekranda olduğu bütün satırlar.
//      İstem yazılırken her istemin başına bu satırlar konur; bir yüz hepsine uymuyorsa ayrı ifade gerekir.
//      Denetimde resim bu satırlarla birlikte okunur.
//   2. BAYRAKLAR (aday, hata değil):
//      EYLEM  — anlatı satırı bir eylem anlatıyor (yiyor, uzatıyor…) ama o satırda kare yok: figür o eylemi göstermez.
//      JEST   — replikte parantezli sahne yönü var: "(papyonunu düzelterek)" — konuşanın figürü bunu yapıyor mu?
//      KONUŞAN— konuşan kişi ekranda değil (kare yok, iki figürde de yok).
//      SUSKUN — anlatı satırında adı geçen kişi ekranda değil.
//      HİTAP  — satırın `kime`si (hitap edilen) ekranda değil (kare yok). SR-A/SR-G, 8 Kasım 2026.
const fs = require('fs'), path = require('path');
const arg = process.argv.slice(2);
const al = (ad, v) => { const i = arg.indexOf(ad); if (i < 0) return v; const x = arg[i + 1]; arg.splice(i, 2); return x; };
const VAKA = al('--vaka', null);
const CIKTI = al('--cikti', path.join(__dirname, 'YENI_UI', 'satir_resim.md'));
if (!arg.length) { console.error('Kullanım: node arac_satir_resim.js <dokum.txt> … [--vaka V3] [--cikti dosya.md]'); process.exit(1); }

const EYLEM = /\b(yiyor|yiyip|uzatıyor|uzatarak|kesiyor|çömel|masanın altına|giriyor|koşuyor|oturuyor|bağlıyor|silkeliyor|çıkarıp|çıkarıyor|ısır|esniyor|açıyor|takıyor|itiyor|bırakıp|bırakıyor|deviriyor|düşüyor|kayıyor|kapaklan|dağıtıyor|bölüyor|koyuyor|dönüyor|iniyor|bakakal|gösteriyor|fışkır|saklan|öksür|el sall|selam)/iu;

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

const resim = new Map();
const ekle = (key, s) => { if (!key || key === '-') return; if (!resim.has(key)) resim.set(key, []); const l = resim.get(key); if (!l.includes(s)) l.push(s); };
const bayrak = [];
for (const s of satirlar.values()) {
  const yazi = `${s.k === 'not' ? '*anlatı*' : '**' + s.k + '**'}: ${s.m}`;
  if (s.kare) ekle('KARE ' + s.kare, yazi);
  else { ekle(s.sol, yazi + (s.k === s.sol.split('.')[0] ? '' : '  _(dinliyor)_')); ekle(s.sag, yazi + (s.k === s.sag.split('.')[0] ? '' : '  _(dinliyor)_')); }
  ekle('ARKA ' + s.arka, yazi);
  const ekranda = [s.sol, s.sag].map(x => x.split('.')[0]);
  if (s.k === 'not' && !s.kare && EYLEM.test(s.m)) bayrak.push(['EYLEM', s, 'figür bu eylemi göstermez; kare ya da uygun figür gerekir']);
  if (s.k !== 'not' && /\([^)]+\)/.test(s.m) && !s.kare) bayrak.push(['JEST', s, `figür: ${[s.sol, s.sag].find(x => x.split('.')[0] === s.k) || '(ekranda değil)'}`]);
  if (s.k !== 'not' && !s.kare && !s.cekik && !ekranda.includes(s.k) && !['teyze'].includes(s.k)) bayrak.push(['KONUŞAN', s, `ekranda: ${s.sol}, ${s.sag}`]);
  if (s.k !== 'not' && s.kime && !s.kare && !s.cekik && !ekranda.includes(s.kime)) bayrak.push(['HİTAP', s, `${s.kime} ekranda değil; ekranda: ${s.sol}, ${s.sag}`]);
}

let o = `# Satır → resim uyumu${VAKA ? ' — ' + VAKA : ''}\n\nKaynak: ${arg.map(a => path.basename(path.dirname(a)) + '/' + path.basename(a)).join(', ')} · ${satirlar.size} farklı satır.\n` +
  `Her resim, ekranda olduğu satırlarla birlikte okunur: yüz, el ve jest HER satıra uymalı. Uymuyorsa ayrı ifade/kare gerekir.\n\n`;
o += `## Bayraklar (aday — gözle karar ver)\n\n| tür | sahne | satır | not |\n|---|---|---|---|\n`;
for (const [t, s, n] of bayrak) o += `| ${t} | ${s.ad} | ${s.k}: ${s.m.replace(/\|/g, '/').slice(0, 140)} | ${n} |\n`;
o += `\n## Resim → satırlar\n\n`;
const sira = [...resim.keys()].sort((a, b) => (a.startsWith('ARKA') - b.startsWith('ARKA')) || (a.startsWith('KARE') - b.startsWith('KARE')) || a.localeCompare(b));
for (const key of sira) {
  if (key.startsWith('ARKA')) continue;
  o += `### ${key} (${resim.get(key).length} satır)\n\n` + resim.get(key).map(x => '- ' + x).join('\n') + '\n\n';
}
fs.mkdirSync(path.dirname(CIKTI), { recursive: true });
fs.writeFileSync(CIKTI, o);
const say = t => bayrak.filter(b => b[0] === t).length;
console.log(`${satirlar.size} satır · ${resim.size} resim anahtarı · bayrak: EYLEM ${say('EYLEM')}, JEST ${say('JEST')}, KONUŞAN ${say('KONUŞAN')}, HİTAP ${say('HİTAP')}`);
console.log('Yazıldı: ' + CIKTI);
