// Adım 4 aracı — her kuralın bir UYGULAYICISI var mı, sayar; üretim adımlarının hatırlatma listesini programla yazar.
//
// Her kuralın bloğunda (*Kaynak:* satırından önce) tek satır:
//   *Uygulayıcı:* program `kaynak/arac_benzerlik.js`            → program ölçer, iş DURUR (yol depo kökünden; ardına açıklama yazılabilir)
//   *Uygulayıcı:* hatırlat 8, 10                                  → program ölçemez; üretim sürecinin (sablon/7_uretim_sureci.md) o
//                                                                   adımında sahibine kısa listeyle hatırlatılır; "baktım" demeden adım geçmez
//   *Uygulayıcı:* yok — <sebep>                                   → üretimle ilgisi olmayan karar / bilgi (yayın, satış, kanon kaydı…)
// Birden çok parça " · " ile ayrılır:  *Uygulayıcı:* program `kaynak/arac_satir_resim.js` · hatırlat 8
// "→ ANA" diyen (birleşmiş) kod satır taşımaz; ANA'nınki geçerlidir.
//
//   node arac_uygulayici.js say        biçim hatası, var olmayan program dosyası, eski HATIRLATMA.md → hata (çıkış 1);
//                                      satırı olmayan kural → UYARI (sayısıyla). --kesin: satırı olmayan da hata.
//   node arac_uygulayici.js yaz        HATIRLATMA.md'yi yeniden üretir (elle yazılmaz).
//   node arac_uygulayici.js adim <n>   n. üretim adımının hatırlatma listesi (sahibine o adımda bu gösterilir).
const fs = require('fs'), path = require('path');
const K = __dirname, KOK = path.join(K, '..', '..');
const KURALLAR = path.join(K, 'KURALLAR.md'), HATIR = path.join(K, 'HATIRLATMA.md');
const SUREC = path.join(KOK, 'sablon', '7_uretim_sureci.md');

function bloklar() {
  const metin = fs.readFileSync(KURALLAR, 'utf8').replace(/\r/g, '');
  const out = []; let cur = null, kodBlok = false, no = 0;
  for (const s of metin.split('\n')) {
    no++;
    if (/^```/.test(s)) kodBlok = !kodBlok;
    const m = !kodBlok && s.match(/^#### ([A-Z]+-\d+)\s*(.*)$/);
    if (m) { cur = { kod: m[1], baslik: m[2].trim(), satir: [], no }; out.push(cur); continue; }
    if (!kodBlok && /^#{1,3} /.test(s)) { cur = null; continue; }
    if (cur) cur.satir.push(s);
  }
  for (const b of out) {
    const ilk = b.satir.find(s => s.trim());
    b.yonlenen = !!(ilk && /^→ [A-Z]+-\d+/.test(ilk));
    b.uyg = b.satir.filter(s => /^\*Uygulayıcı:\*/.test(s));
  }
  return out;
}

function coz(b, H) {
  // döner: { program: [yol], hatirlat: [adım], yok: sebep|null }
  const r = { program: [], hatirlat: [], yok: null };
  if (b.uyg.length > 1) H(b.kod, 'birden çok *Uygulayıcı:* satırı');
  const govde = b.uyg[0].replace(/^\*Uygulayıcı:\*\s*/, '');
  for (const p of govde.split(' · ').map(x => x.trim())) {
    let m;
    if ((m = p.match(/^program\s+(.+)$/))) {
      const yollar = [...m[1].matchAll(/`([^`]+)`/g)].map(x => x[1]);
      if (!yollar.length) H(b.kod, 'program yolu `…` içinde yazılmalı:', p);
      for (const y of yollar) {
        const dosya = y.split(/\s+/)[0];
        if (!fs.existsSync(path.join(KOK, dosya))) H(b.kod, 'program dosyası yok:', dosya);
        r.program.push(y);
      }
    } else if ((m = p.match(/^hatırlat\s+([\d,\s]+)$/))) {
      for (const n of m[1].split(/[,\s]+/).filter(Boolean).map(Number)) {
        if (!(n >= 1 && n <= 14)) H(b.kod, 'adım 1–14 olmalı:', n);
        else r.hatirlat.push(n);
      }
    } else if ((m = p.match(/^yok\s+—\s+(.+)$/))) {
      r.yok = m[1];
    } else H(b.kod, 'anlaşılmayan parça:', JSON.stringify(p));
  }
  if (r.yok && (r.program.length || r.hatirlat.length)) H(b.kod, '"yok" başka parçayla birlikte olmaz');
  return r;
}

function adimAdlari() {
  const ad = {};
  for (const s of fs.readFileSync(SUREC, 'utf8').replace(/\r/g, '').split('\n')) {
    const m = s.match(/^\| (\d+) \| (.+?) \|/);
    if (m) ad[m[1]] = m[2].replace(/\*\*/g, '').replace(/\s+—.*$/, '').replace(/\s*\(.*$/, '').trim();
  }
  return ad;
}

function uret(bl) {
  const H = () => {};
  const ad = adimAdlari(), adim = {}, prog = {};
  for (const b of bl) {
    if (b.yonlenen || !b.uyg.length) continue;
    const r = coz(b, H);
    for (const n of r.hatirlat) (adim[n] = adim[n] || []).push(b);
    for (const y of r.program) { const d = y.split(/\s+/)[0]; (prog[d] = prog[d] || []).push(b); }
  }
  const L = ['# HATIRLATMA LİSTESİ — üretim adımı başına', '',
    '> **Elle yazılmaz.** `node sablon/kurallar/arac_uygulayici.js yaz` KURALLAR.md\'deki `*Uygulayıcı:*` satırlarından üretir;',
    '> `say` bu dosya eskiyse hata verir. Adım numaraları `sablon/7_uretim_sureci.md` tablosudur. Her adımın sonunda bu liste',
    '> sahibine gösterilir; sahibi "baktım" demeden adım geçmez. Kuralın metni KURALLAR.md\'de.', ''];
  for (let n = 1; n <= 14; n++) {
    const l = adim[n] || [];
    L.push(`## Adım ${n} — ${ad[n] || '?'} (${l.length})`, '');
    for (const b of l) L.push(`- [ ] **${b.kod}** ${b.baslik}`);
    if (!l.length) L.push('_(hatırlatma yok)_');
    L.push('');
  }
  L.push('## Programın uyguladığı kurallar (bilgi; bunlar sahibine sorulmaz, program durdurur)', '');
  for (const d of Object.keys(prog).sort()) L.push(`- \`${d}\`: ${prog[d].map(b => b.kod).join(', ')}`);
  L.push('');
  return L.join('\n');
}

const komut = process.argv[2];
const bl = bloklar();
if (komut === 'yaz') {
  fs.writeFileSync(HATIR, uret(bl)); console.log('yazıldı:', path.relative(KOK, HATIR));
} else if (komut === 'adim') {
  const n = Number(process.argv[3]); const ad = adimAdlari();
  const l = bl.filter(b => !b.yonlenen && b.uyg.length && coz(b, () => {}).hatirlat.includes(n));
  console.log(`Adım ${n} — ${ad[n] || '?'}: ${l.length} hatırlatma`);
  for (const b of l) console.log(`  ${b.kod}  ${b.baslik}`);
} else if (komut === 'say') {
  let hata = 0; const H = (...m) => { console.log('HATA', ...m); hata++; };
  const kesin = process.argv.includes('--kesin');
  const sayi = { kural: 0, program: 0, hatirlat: 0, yok: 0, eksik: 0 }, eksik = {};
  for (const b of bl) {
    if (b.yonlenen) { if (b.uyg.length) H(b.kod, '"→ ANA" diyen kod uygulayıcı taşımaz'); continue; }
    sayi.kural++;
    if (!b.uyg.length) { sayi.eksik++; const k = b.kod.split('-')[0]; eksik[k] = (eksik[k] || 0) + 1; if (kesin) H(b.kod, 'uygulayıcı yok'); continue; }
    const r = coz(b, H);
    if (r.program.length) sayi.program++;
    if (r.hatirlat.length) sayi.hatirlat++;
    if (r.yok) sayi.yok++;
  }
  const simdiki = fs.existsSync(HATIR) ? fs.readFileSync(HATIR, 'utf8').replace(/\r/g, '') : '';
  if (simdiki !== uret(bl)) H('HATIRLATMA.md eski — `node arac_uygulayici.js yaz`');
  if (sayi.eksik && !kesin) console.log('UYARI uygulayıcısı olmayan:', sayi.eksik, JSON.stringify(eksik));
  console.log(JSON.stringify(sayi), 'hata:', hata);
  process.exit(hata ? 1 : 0);
} else { console.log('kullanım: node arac_uygulayici.js say [--kesin] | yaz | adim <n>'); process.exit(2); }
