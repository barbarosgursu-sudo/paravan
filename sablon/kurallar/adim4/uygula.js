// Adım 4: adim4/uyg_*.tsv → KURALLAR.md'deki *Uygulayıcı:* satırları (varsa değiştirir, yoksa *Kaynak:*'tan önce ekler).
//   node uygula.js           önizler (kaç ekleme/değişiklik, bilinmeyen kod, eksik kod)
//   node uygula.js --yaz     KURALLAR.md'ye yazar; ardından `node ../arac_uygulayici.js yaz && node ../arac_uygulayici.js say` koş
const fs = require('fs'), path = require('path');
const D = __dirname, KUR = path.join(D, '..', 'KURALLAR.md');
const yaz = process.argv.includes('--yaz');
const harita = {};
for (const f of fs.readdirSync(D).filter(f => /^uyg_.*\.tsv$/.test(f))) {
  const satir = fs.readFileSync(path.join(D, f), 'utf8').replace(/\r/g, '').split('\n').filter(Boolean);
  const bas = satir[0].split('\t'); const ik = bas.indexOf('kod'), iu = bas.indexOf('uygulayici');
  for (const s of satir.slice(1)) {
    const c = s.split('\t'); const kod = (c[ik] || '').trim(), u = (c[iu] || '').trim();
    if (!kod) continue;
    if (harita[kod] && harita[kod].u !== u) console.log('ÇİFT:', kod, f, 've', harita[kod].f);
    harita[kod] = { u, f };
  }
}
let s = fs.readFileSync(KUR, 'utf8'); const crlf = s.includes('\r\n'); s = s.replace(/\r/g, '');
const parca = s.split(/^(?=#### )/m);
let ekle = 0, degis = 0, ayni = 0; const goruldu = new Set(), eksik = [];
for (let i = 0; i < parca.length; i++) {
  const m = parca[i].match(/^#### ([A-Z]+-\d+)/); if (!m) continue;
  const kod = m[1]; const govde = parca[i].split('\n');
  const ilk = govde.slice(1).find(x => x.trim()); if (ilk && /^→ [A-Z]+-\d+/.test(ilk)) { goruldu.add(kod); continue; }
  const h = harita[kod]; if (!h) { eksik.push(kod); continue; }
  goruldu.add(kod);
  if (!h.u) { console.log('BOŞ uygulayıcı:', kod); continue; }
  const yeni = '*Uygulayıcı:* ' + h.u;
  const j = govde.findIndex(x => /^\*Uygulayıcı:\*/.test(x));
  if (j >= 0) { if (govde[j] === yeni) ayni++; else { govde[j] = yeni; degis++; } }
  else {
    let k = govde.findIndex(x => /^\*Kaynak:\*/.test(x));
    if (k < 0) { k = govde.length; while (k > 1 && !govde[k - 1].trim()) k--; }
    govde.splice(k, 0, yeni); ekle++;
  }
  parca[i] = govde.join('\n');
}
for (const k of Object.keys(harita)) if (!goruldu.has(k)) console.log('KURALLAR.md\'de yok:', k);
console.log(JSON.stringify({ tsv_kod: Object.keys(harita).length, ekle, degis, ayni, eksik: eksik.length }));
if (eksik.length) console.log('TSV\'de olmayan:', eksik.join(' '));
if (yaz) { let o = parca.join(''); if (crlf) o = o.replace(/\n/g, '\r\n'); fs.writeFileSync(KUR, o); console.log('yazıldı'); }
