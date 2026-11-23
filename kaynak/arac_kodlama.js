// KOD-93 (23 Kasım 2026, Barbaros: "bir daha yaşamayalım"): Python'da metin dosyası kodlama belirtilmeden açılmaz.
// Windows'ta Python'un varsayılan kodlaması cp1252'dir; "ş", "ı" yazılamaz, dosya yarım kalır (arac_el.py → sayim.json, V6 resim
// kapısı durdu). Bu araç bir Python dosyasında şunları bulur:
//   open(…)  — `encoding=` yok ve kip ikili ('rb', 'wb' …) değil
//   .read_text(…) / .write_text(…) — `encoding=` yok
// `Image.open`, `os.open`, `urlopen` gibi başka işlevler sayılmaz (önünde nokta ya da harf olan `open`).
// Kullanım: node arac_kodlama.js <dosya.py> …   → bulgu varsa listeler, çıkış 1. Kapı (`.claude/kapi_hook.js`) commit'e giren
// .py dosyalarını buna verir (arsiv/ hariç). Modül olarak: require('./arac_kodlama.js').bul(metin) → [{satir, kod}].
const fs = require('fs');

function kapanis(s, i) {   // s[i] === '(' → eşleşen ')' konumu (dizgi içindeki ayraçlar sayılmaz)
  let d = 0, tirnak = null;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (tirnak) {
      if (c === '\\') { j++; continue; }
      if (s.startsWith(tirnak, j)) { j += tirnak.length - 1; tirnak = null; }
      continue;
    }
    if (c === '#') { const n = s.indexOf('\n', j); if (n < 0) return -1; j = n; continue; }
    if (c === '"' || c === "'") { tirnak = s.startsWith(c.repeat(3), j) ? c.repeat(3) : c; j += tirnak.length - 1; continue; }
    if (c === '(') d++;
    else if (c === ')' && --d === 0) return j;
  }
  return -1;
}

function bul(metin) {
  const sonuc = [];
  const desen = /(?<![\w.])open\s*\(|\.(read_text|write_text)\s*\(/g;
  let m;
  while ((m = desen.exec(metin))) {
    const satirBasi = metin.lastIndexOf('\n', m.index) + 1;
    const satir = metin.slice(satirBasi, m.index);
    if (/^\s*#/.test(satir) || /^\s*def\s/.test(satir)) continue;          // yorum ya da tanım
    if ((satir.match(/(?<!\\)["']/g) || []).length % 2) continue;           // dizgi içinde
    const ac = m.index + m[0].length - 1, kap = kapanis(metin, ac);
    if (kap < 0) continue;
    const arg = metin.slice(ac + 1, kap);
    if (/\bencoding\s*=/.test(arg)) continue;
    if (!m[1]) {   // open: ikili kip mi? (ikinci konumsal argüman ya da mode=)
      const kip = arg.match(/(?:^|,|\bmode\s*=)\s*[rbu]?["']([rwxabt+]*)["']/g) || [];
      if (kip.some(k => /["'][rwxat+]*b[rwxat+]*["']/.test(k))) continue;
    }
    const no = metin.slice(0, m.index).split('\n').length;
    sonuc.push({ satir: no, kod: metin.slice(satirBasi, metin.indexOf('\n', m.index) < 0 ? undefined : metin.indexOf('\n', m.index)).trim() });
  }
  return sonuc;
}

module.exports = { bul };

if (require.main === module) {
  const dosyalar = process.argv.slice(2);
  if (!dosyalar.length) { console.error('kullanım: node arac_kodlama.js <dosya.py> …'); process.exit(2); }
  let n = 0;
  for (const f of dosyalar) {
    let metin; try { metin = fs.readFileSync(f, 'utf8'); } catch (e) { continue; }
    for (const b of bul(metin)) { console.log(`${f}:${b.satir}: ${b.kod}`); n++; }
  }
  if (n) { console.log(`\n${n} yerde kodlama belirtilmemiş — encoding='utf-8' ekle (KOD-93).`); process.exit(1); }
  console.log('kodlama: temiz');
}
