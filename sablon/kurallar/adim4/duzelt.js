// İkinci gözün kabul edilen önerilerini uyg_*.tsv'ye işler. Girdi: duzeltme.tsv (kod, uygulayici, aday[boşsa dokunma], not_ek).
//   node duzelt.js
const fs = require('fs'), path = require('path');
const D = __dirname;
const dz = fs.readFileSync(path.join(D, 'duzeltme.tsv'), 'utf8').replace(/\r/g, '').split('\n').filter(Boolean).slice(1)
  .map(l => l.split('\t'));
const harita = {}; for (const [kod, u, aday, not] of dz) harita[kod] = { u, aday, not };
const kullanildi = new Set();
for (const f of fs.readdirSync(D).filter(f => /^uyg_.*\.tsv$/.test(f))) {
  const L = fs.readFileSync(path.join(D, f), 'utf8').replace(/\r/g, '').split('\n');
  const bas = L[0].split('\t'); const I = n => bas.indexOf(n);
  let n = 0;
  for (let i = 1; i < L.length; i++) {
    if (!L[i]) continue; const c = L[i].split('\t'); const h = harita[c[I('kod')]]; if (!h) continue;
    while (c.length < bas.length) c.push('');
    if (h.u) c[I('uygulayici')] = h.u.startsWith('+') ? c[I('uygulayici')] + ' · ' + h.u.slice(1).trim() : h.u;
    if (h.aday) c[I('aday')] = h.aday === '-' ? '' : h.aday;
    if (h.not) c[I('not')] = (c[I('not')] ? c[I('not')] + ' | ' : '') + 'ikinci göz: ' + h.not;
    L[i] = c.join('\t'); kullanildi.add(c[I('kod')]); n++;
  }
  fs.writeFileSync(path.join(D, f), L.join('\n')); console.log(f, n, 'düzeltme');
}
for (const k of Object.keys(harita)) if (!kullanildi.has(k)) console.log('BULUNAMADI:', k);
