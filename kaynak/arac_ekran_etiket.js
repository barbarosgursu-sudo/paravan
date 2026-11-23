// ARAÇ (test değil; 23 Kasım 2026, V5'te kullanıldı — 196 satır, kapı 418 bulgu → 18): eski düzende yazılmış bir vaka diyaloğuna
// {ekran: …}, {yuz: …} ve gerekirse {kime: …} etiketlerini kapı kurallarına göre (K1, K2, K7, K8) önerir. Söz değişmez.
// Ekrandaki ikinci kişi: kime → satır başındaki hitap ("Kadir, …") → gir → konuşma sırası → ekrandaki öteki figür; anlatıda anılanlar
// (ad + vaka<N>_kapi.md eş sözleri, yalnız o vakada görünenler). Yüz: o satırda ekrandaki figürün bugünkü ifadesi (görünüş değişmez).
// Kullanım:
//   1) vaka<N>_kapi.md (## yollar + ## eş söz) yazılı olsun; cd kaynak && node arac_kapi.js V<N> hikaye --yeniden
//      → çıktıdaki "tur çıktıları: <klasör>" yolunu al (her yolun satir/satir.jsonl'ı orada)
//   2) node arac_ekran_etiket.js ../sablon/vakalar/vaka<N>_diyalog.md <klasör>          (önizleme: satır satır öneri)
//   3) aynısı --yaz → node arac_diyalog.js … V<N> → kapıyı yeniden koş; kalan K2/K7/K4 ve satır–resim sahibinin kararı.
// "yollar arası farklı" satırlarda ilk yolun önerisi yazılır; elle bak.
const fs = require('fs'), path = require('path');
const KAYNAK = __dirname;
const [md, tmp] = process.argv.slice(2).filter(a => a !== '--yaz'), YAZ = process.argv.includes('--yaz');
if (!md || !tmp) { console.error('Kullanım: node arac_ekran_etiket.js <vaka<N>_diyalog.md> <kapı tur klasörü> [--yaz]'); process.exit(2); }
const VAKA = 'V' + (path.basename(md).match(/vaka(\d+)_diyalog/) || [])[1];
const katla = s => String(s).toLocaleLowerCase('tr');
const veri = JSON.parse(fs.readFileSync(path.join(KAYNAK, 'yeni', 'game_data.json'), 'utf8'));
const FIG = veri.kanon.sahne.figurler;
const kapiMd = fs.readFileSync(md.replace('_diyalog.md', '_kapi.md'), 'utf8');
const esSoz = {};
for (const l of (kapiMd.split(/\n(?=## )/).find(b => b.startsWith('## eş söz')) || '').split('\n')) { const m = l.match(/^-\s*(\w+)\s*:\s*(.+)$/); if (m) esSoz[m[1]] = m[2].split(',').map(x => katla(x.trim())); }
const adlar = id => { const a = id === 'peri' ? 'Peri' : id === 'cengo' ? 'Cengo' : (FIG[id] || {}).ad || id; return [...new Set([katla(a), katla(a.split(/\s+/)[0]), ...(esSoz[id] || [])])].filter(x => x.length >= 3); };
const KIMLER = [...new Set(['peri', 'cengo', ...Object.keys(FIG)])];
const gecer = (metin, soz) => new RegExp('(^|[^\\p{L}])' + soz.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "(?=$|[^\\p{L}]|['’])", 'u').test(katla(metin));
let VK = null;
const anilanlar = metin => KIMLER.filter(id => (!VK || VK.has(id)) && adlar(id).some(s => gecer(metin, s)));
const fid = x => (x && x !== '-' ? x.split('.')[0] : null);
const ifade = f => { const p = f.split('.'); return (p[0] === 'peri' || p[0] === 'cengo') ? p.slice(2).join('.') : p.slice(1).join('.'); };
const norm = s => String(s).replace(/\*/g, '').replace(/\s+/g, ' ').trim();

// kayıtlar
const kay = [];
for (const d of fs.readdirSync(tmp)) { const f = path.join(tmp, d, 'satir', 'satir.jsonl'); if (!fs.existsSync(f)) continue;
  const l = fs.readFileSync(f, 'utf8').trim().split('\n').map(x => JSON.parse(x)).filter(r => r.ad.startsWith(VAKA + '_'));
  l.forEach((r, j) => { r.onceki = l[j - 1] || null; kay.push(r); }); }
VK = new Set(['peri', 'cengo', ...kay.flatMap(r => [fid(r.sol), fid(r.sag), r.k, r.gir, r.kime])].filter(Boolean));
const byText = {}; for (const r of kay) (byText[norm(r.m)] = byText[norm(r.m)] || []).push(r);

function oner(r) {
  const anlati = r.k === 'not', anilan = anilanlar(r.m);
  const simdiki = [r.sol, r.sag].filter(x => x && x !== '-');
  let kisi;
  if (!anlati) {
    let ortak = r.kime, kimeEk = null;
    if (!ortak) { const t = katla(r.m.replace(/^\([^)]*\)\s*/, '')); ortak = [...VK].find(id => id !== r.k && adlar(id).some(a => t.startsWith(a) && /^( bey| hanım| abi| abla| usta)?([,!?.]|$)/.test(t.slice(a.length)))) || null; if (ortak) kimeEk = ortak; }
    if (!ortak && r.gir && r.gir !== r.k) { ortak = r.gir; kimeEk = ortak; }
    if (!ortak) for (let o = r.onceki; o && o.k !== 'not'; o = o.onceki) { if (o.k !== r.k) { ortak = o.k; break; } if (o.kime) { ortak = o.kime; break; } }
    if (!ortak) { const obur = simdiki.map(fid).find(x => x !== r.k); if (obur) { ortak = obur; kimeEk = obur; } }
    kisi = [r.k, ortak].filter(Boolean); r._kime = kimeEk;
  } else if (anilan.length) kisi = anilan.slice(0, 2);
  else if (r.gir) kisi = [r.gir];
  else kisi = simdiki.map(fid);
  kisi = [...new Set(kisi)];
  // sıra: Peri hep solda; değilse şimdiki sol/sağ sırası korunur
  const sira = id => id === 'peri' ? -1 : (simdiki.map(fid).indexOf(id) === -1 ? 5 : simdiki.map(fid).indexOf(id));
  kisi.sort((a, b) => sira(a) - sira(b));
  // yüzler
  const yuz = [];
  for (const id of kisi) {
    if (id === r.k) continue;
    if (r.gir === id && r.gi) continue;
    if (id === 'peri' && r.peri) continue; if (id === 'cengo' && r.cengo) continue;
    let f = simdiki.find(x => fid(x) === id);
    if (!f) for (let o = r.onceki; o; o = o.onceki) { f = [o.sol, o.sag].find(x => x && fid(x) === id); if (f) break; }
    yuz.push(id + '.' + (f ? ifade(f) : 'normal'));
  }
  return { kime: r._kime || null, ekran: kisi.join('+'), yuz: yuz.join('+'), fazla: anlati && anilan.length > 2 ? anilan : null };
}

const satirlar = fs.readFileSync(md, 'utf8').split('\n');
let bolum = '', degisen = 0, bulunamayan = [], celiski = [], fazla = [];
for (let i = 0; i < satirlar.length; i++) {
  const s = satirlar[i].replace(/\r$/, ''), cr = satirlar[i].endsWith('\r') ? '\r' : '';
  if (s.startsWith('## ')) { bolum = s; continue; }
  if (!/^## (sahne|ipucu) /.test(bolum) || bolum.includes('karar_soru')) continue;
  const m = s.match(/^(\*\*[^*]+\*\*\s*.*?|\*.*?\*)\s*(\{([^}]*)\})?$/);
  if (!m || !/^\*/.test(s)) continue;
  const etiket = m[3] || '';
  if (/\b(kare\s*:|mekan\b|ekran\s*:)/.test(etiket)) continue;
  // metin
  let metin = s.replace(/\s*\{[^}]*\}\s*$/, '');
  const sp = metin.match(/^\*\*[^*]+\*\*\s*(.*)$/); metin = sp ? sp[1] : metin;
  const adaylar = byText[norm(metin)];
  if (!adaylar) { bulunamayan.push(`${i + 1}: ${s.slice(0, 90)}`); continue; }
  const o = adaylar.map(oner), anah = [...new Set(o.map(x => x.ekran + '|' + x.yuz))];
  if (anah.length > 1) celiski.push(`${i + 1}: ${anah.join('  /  ')} · ${s.slice(0, 70)}`);
  const sec = o[0]; if (sec.fazla) fazla.push(`${i + 1}: ${sec.fazla.join(',')} · ${s.slice(0, 70)}`);
  const ek = (sec.kime && !/kime\s*:/.test(etiket) ? 'kime: ' + sec.kime + ', ' : '') + 'ekran: ' + sec.ekran + (sec.yuz ? ', yuz: ' + sec.yuz : '');
  const yeni = m[2] ? s.replace(/\{([^}]*)\}\s*$/, (_, x) => '{' + x.trim() + ', ' + ek + '}') : s + ' {' + ek + '}';
  if (!YAZ) console.log(`${i + 1}: ${ek}  ← ${s.slice(0, 60)}`);
  satirlar[i] = yeni + cr; degisen++;
}
console.error(`etiketlenen ${degisen} · bulunamayan ${bulunamayan.length} · yollar arası farklı ${celiski.length} · 2'den çok kişi anan anlatı ${fazla.length}`);
bulunamayan.forEach(x => console.error('  ? ' + x)); celiski.forEach(x => console.error('  ≠ ' + x)); fazla.forEach(x => console.error('  + ' + x));
if (YAZ) fs.writeFileSync(md, satirlar.join('\n'));
