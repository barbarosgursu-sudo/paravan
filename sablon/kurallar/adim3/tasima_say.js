// Taşıma sayımı: kayit_sinif.tsv'de DERS ya da BILGI (VAR olmayan) her satır hedefinde "(k:<id>)" etiketiyle duruyor mu?
// Hedef kural kodu ise etiket o kuralın bloğunun İÇİNDE olmalı. Eksik varsa çıkış 1.
//   node sablon/kurallar/adim3/tasima_say.js
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..', '..', '..');
const DOSYA = {
  KANON: 'sablon/3_kanon_kaydi.md', FORM: 'sablon/6_vaka_formu.md', SUREC: 'sablon/7_uretim_sureci.md',
  URETIM: 'uretim/CLAUDE.md', FIKIR: 'sablon/FIKIR_HAVUZU.md', KURALLAR: 'sablon/kurallar/KURALLAR.md',
};
const oku = f => fs.existsSync(path.join(R, f)) ? fs.readFileSync(path.join(R, f), 'utf8').replace(/\r/g, '') : null;
const kur = oku(DOSYA.KURALLAR);
const blok = {}; let cur = null, kod = false;
for (const s of kur.split('\n')) {
  if (/^```/.test(s)) kod = !kod;
  const m = !kod && s.match(/^#### ([A-Z]+-\d+)\b/);
  if (m) { cur = m[1]; blok[cur] = ''; continue; }
  if (!kod && /^#{1,3} /.test(s)) { cur = null; continue; }
  if (cur) blok[cur] += s + '\n';
}
const satir = fs.readFileSync(path.join(__dirname, 'kayit_sinif.tsv'), 'utf8').replace(/\r/g, '').trim().split('\n').slice(1).map(l => l.split('\t'));
let hata = 0; const say = {};
for (const [id, sinif, hedef] of satir) {
  say[sinif] = (say[sinif] || 0) + 1;
  if (sinif !== 'DERS' && sinif !== 'BILGI') continue;
  const et = '(k:' + id + ')';
  if (/^[A-Z]+-\d+$/.test(hedef)) {
    if (!(hedef in blok)) { console.log('HEDEF KURAL YOK', id, hedef); hata++; }
    else if (!blok[hedef].includes(et)) { console.log('TAŞINMADI', id, '→', hedef); hata++; }
  } else {
    const f = DOSYA[hedef]; const t = f && oku(f);
    if (!t) { console.log('HEDEF DOSYA YOK', id, hedef); hata++; }
    else if (!t.includes(et)) { console.log('TAŞINMADI', id, '→', hedef); hata++; }
  }
}
console.log(JSON.stringify(say), 'hata:', hata);
process.exit(hata ? 1 : 0);
