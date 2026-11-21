// Adım 4 aracı — her kuralın bir UYGULAYICISI var mı, sayar; üretim adımlarının hatırlatma listesini programla yazar.
//
// Her kuralın bloğunda (*Kaynak:* satırından önce) tek satır:
//   *Uygulayıcı:* program `kaynak/arac_benzerlik.js`            → program ölçer, iş DURUR (yol depo kökünden; ardına açıklama yazılabilir)
//   *Uygulayıcı:* hatırlat 8, 10                                  → program ölçemez; üretim sürecinin (sablon/7_uretim_sureci.md) o
//                                                                   adımında sahibine kısa listeyle hatırlatılır; "baktım" demeden adım geçmez
//   *Uygulayıcı:* talimat `uretim/AGENTS.md`                     → makinenin (Codex) her işte okuduğu talimat; o dosya kuralın KODUNU
//                                                                   anmalı (yoksa hata). Yalnız Codex gibi talimatla yürüyen üretici için.
//   *Uygulayıcı:* yok — <sebep>                                   → üretimle ilgisi olmayan karar / bilgi (yayın, satış, kanon kaydı…)
// Birden çok parça " · " ile ayrılır:  *Uygulayıcı:* program `kaynak/arac_satir_resim.js` · hatırlat 8
// "→ ANA" diyen (birleşmiş) kod satır taşımaz; ANA'nınki geçerlidir.
//
//   node arac_uygulayici.js say        biçim hatası, var olmayan program dosyası, eski HATIRLATMA.md → hata (çıkış 1);
//                                      satırı olmayan kural da hata (yeni kural uygulayıcısıyla yazılır — SUREC-43).
//   node arac_uygulayici.js yaz        HATIRLATMA.md'yi yeniden üretir (elle yazılmaz).
//   node arac_uygulayici.js adim <n>   n. üretim adımının hatırlatma listesi.
//
// VAKA KAYDI (21 Kasım 2026, sahibinin onayı — SUREC-43): Claude'un adımlarında listeye CLAUDE bakar; sahibine yalnız
// UYMUYOR ve EMİN DEĞİLİM gelir, sahibinin zaten onay verdiği anda. Kayıt: sablon/vakalar/vaka<N>_hatirlatma.md.
//   node arac_uygulayici.js kayit <N> <adım>   o adımın maddelerini kayda ekler (yoksa; işaretlere dokunmaz).
//   node arac_uygulayici.js bitti <N> <an|adım…>   adım(lar)ın her maddesi işaretli mi; sahibine gidecek kısa notu basar.
//                                      İşaretsiz madde ya da notsuz X/? varsa çıkış 1 = adım BİTMEDİ.
//   İşaret: [u] uyuyor · [X] UYMUYOR · [?] EMİN DEĞİLİM · [-] bu vakayla ilgisi yok. X ve ? satır sonunda `· NOT: …` ister.
//   Anlar (sahibinin onay anları, ANLAR tablosu): onay1, onay2, don, resim, onay3, son.
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
  const r = { program: [], hatirlat: [], talimat: [], yok: null };
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
    } else if ((m = p.match(/^talimat\s+`([^`]+)`$/))) {
      const f = path.join(KOK, m[1]);
      if (!fs.existsSync(f)) H(b.kod, 'talimat dosyası yok:', m[1]);
      else if (!new RegExp('\\b' + b.kod + '(?!\\d)').test(fs.readFileSync(f, 'utf8'))) H(b.kod, 'talimat dosyası kodu anmıyor:', m[1]);
      r.talimat.push(m[1]);
    } else if ((m = p.match(/^hatırlat\s+([\d,\s]+)$/))) {
      for (const n of m[1].split(/[,\s]+/).filter(Boolean).map(Number)) {
        if (!(n >= 1 && n <= 14)) H(b.kod, 'adım 1–14 olmalı:', n);
        else r.hatirlat.push(n);
      }
    } else if ((m = p.match(/^yok\s+—\s+(.+)$/))) {
      r.yok = m[1];
    } else H(b.kod, 'anlaşılmayan parça:', JSON.stringify(p));
  }
  if (r.yok && (r.program.length || r.hatirlat.length || r.talimat.length)) H(b.kod, '"yok" başka parçayla birlikte olmaz');
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
    '> `say` bu dosya eskiyse hata verir. Adım numaraları `sablon/7_uretim_sureci.md` tablosudur. Claude\'un adımlarında listeye',
    '> Claude bakar ve vaka kaydına işaretler (`kayit` / `bitti`); sahibine yalnız UYMUYOR ve EMİN DEĞİLİM gider, onay anında.',
    '> Sahibinin adımları (2, 6, 12) olduğu gibi gösterilir — SUREC-43. Kuralın metni KURALLAR.md\'de.', ''];
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

// Sahibinin onay anları: Claude'un adımları (bakar, işaretler) + o anda sahibinin kendi listesi (olduğu gibi gösterilir).
const ANLAR = [
  ['onay1', 'Onay 1 — form', [1], 2],
  ['onay2', 'Onay 2 — görselsiz test (metin donmadan önce)', [3, 4, 5], 6],
  ['don', 'Hikâye donarken', [7], null],
  ['resim', 'Resim üretiminden önce', [8], null],
  ['onay3', 'Onay 3 — görselli test', [9, 10, 11], 12],
  ['son', 'Vaka donarken', [13, 14], null],
];
const adimKurallari = (bl, n) => bl.filter(b => !b.yonlenen && b.uyg.length && coz(b, () => {}).hatirlat.includes(n));
const kayitYolu = v => path.join(KOK, 'sablon', 'vakalar', `vaka${v}_hatirlatma.md`);
const SATIR = /^- \[(.)\] \*\*([A-Z]+-\d+)\*\* (.*?)(?: · NOT: (.*))?$/;
function kayitOku(v) {
  const f = kayitYolu(v);
  const metin = fs.existsSync(f) ? fs.readFileSync(f, 'utf8').replace(/\r/g, '') : '';
  const bol = {};   // adım → { bas, son } (satır indeksleri), işaretler
  const s = metin ? metin.split('\n') : [];
  let cur = null;
  s.forEach((l, i) => {
    const m = l.match(/^## Adım (\d+) /);
    if (m) { cur = Number(m[1]); bol[cur] = { bas: i, son: i, isaret: {} }; return; }
    if (/^## /.test(l)) { cur = null; return; }
    if (cur == null) return;
    const k = l.match(SATIR);
    if (k) { bol[cur].isaret[k[2]] = { i: k[1], not: (k[4] || '').trim() }; bol[cur].son = i; }
  });
  return { f, s, bol };
}

const komut = process.argv[2];
const bl = bloklar();
if (komut === 'kayit') {
  const v = Number(process.argv[3]), n = Number(process.argv[4]);
  if (!v || !(n >= 1 && n <= 14)) { console.log('kullanım: node arac_uygulayici.js kayit <vaka> <adım>'); process.exit(2); }
  const ad = adimAdlari(), l = adimKurallari(bl, n);
  let { f, s, bol } = kayitOku(v);
  if (!s.length) s = [`# Vaka ${v} — hatırlatma kaydı (SUREC-43)`, '',
    '> Programla üretilir (`node sablon/kurallar/arac_uygulayici.js kayit <vaka> <adım>`), işaretleri Claude koyar.',
    '> İşaret: `[u]` uyuyor · `[X]` UYMUYOR · `[?]` EMİN DEĞİLİM · `[-]` bu vakayla ilgisi yok. `[X]` ve `[?]` satır sonunda `· NOT: …` ister.',
    '> Sahibine yalnız `[X]` ve `[?]` gider, onay anında (`… bitti <vaka> <an>`). Kuralın metni `sablon/kurallar/KURALLAR.md`.', ''];
  if (!bol[n]) {
    while (s.length && s[s.length - 1] === '') s.pop();
    s.push('', `## Adım ${n} — ${ad[n] || '?'}`, '');
    for (const b of l) s.push(`- [ ] **${b.kod}** ${b.baslik}`);
    s.push('');
    console.log(`eklendi: Adım ${n}, ${l.length} madde → ${path.relative(KOK, f)}`);
  } else {
    const yeni = l.filter(b => !bol[n].isaret[b.kod]).map(b => `- [ ] **${b.kod}** ${b.baslik}`);
    s.splice(bol[n].son + 1, 0, ...yeni);
    console.log(`Adım ${n} zaten kayıtta; ${yeni.length} yeni madde eklendi → ${path.relative(KOK, f)}`);
  }
  fs.writeFileSync(f, s.join('\n').replace(/\n*$/, '\n'));
} else if (komut === 'bitti') {
  const v = Number(process.argv[3]), arg = process.argv.slice(4);
  const an = ANLAR.find(a => a[0] === arg[0]);
  const adimlar = an ? an[2] : arg.map(Number).filter(n => n >= 1 && n <= 14);
  if (!v || !adimlar.length) { console.log('kullanım: node arac_uygulayici.js bitti <vaka> <' + ANLAR.map(a => a[0]).join('|') + '|adım…>'); process.exit(2); }
  const ad = adimAdlari(), { f, bol } = kayitOku(v);
  const eksik = [], sorun = [];
  let toplam = 0, uy = 0, ilgisiz = 0;
  for (const n of adimlar) {
    const l = adimKurallari(bl, n);
    if (!bol[n]) { if (l.length) eksik.push(`Adım ${n}: kayıtta yok — önce \`kayit ${v} ${n}\``); continue; }
    for (const b of l) {
      toplam++;
      const x = bol[n].isaret[b.kod];
      if (!x) eksik.push(`Adım ${n} ${b.kod}: kayıtta yok (kural sonradan eklenmiş — \`kayit ${v} ${n}\`)`);
      else if (x.i === 'u') uy++;
      else if (x.i === '-') ilgisiz++;
      else if (x.i === 'X' || x.i === '?') { if (!x.not) eksik.push(`Adım ${n} ${b.kod}: [${x.i}] notsuz`); else sorun.push([x.i, n, b, x.not]); }
      else eksik.push(`Adım ${n} ${b.kod}: işaretsiz`);
    }
  }
  if (eksik.length) {
    console.log(`BİTMEDİ — ${eksik.length} madde (${path.relative(KOK, f)}):\n  ` + eksik.slice(0, 30).join('\n  ') + (eksik.length > 30 ? `\n  … ${eksik.length - 30} daha` : ''));
    process.exit(1);
  }
  console.log(`${an ? an[1] : 'Adım ' + adimlar.join(', ')} — Vaka ${v}: ${toplam} maddeye bakıldı. ${uy} uyuyor, ${ilgisiz} bu vakayla ilgisiz` +
    (sorun.length ? `, ${sorun.length} size soruluyor:` : '. Sorun yok.'));
  for (const [i, n, b, not] of sorun) console.log(`  ${i === 'X' ? 'UYMUYOR' : 'EMİN DEĞİLİM'} (adım ${n}) ${b.kod} ${b.baslik}: ${not}`);
  if (an && an[3]) {
    const l = adimKurallari(bl, an[3]);
    if (l.length) { console.log(`\nSizin bakacağınız (adım ${an[3]} — ${ad[an[3]] || '?'}):`); for (const b of l) console.log(`  ${b.kod}  ${b.baslik}`); }
  }
} else if (komut === 'yaz') {
  fs.writeFileSync(HATIR, uret(bl)); console.log('yazıldı:', path.relative(KOK, HATIR));
} else if (komut === 'adim') {
  const n = Number(process.argv[3]); const ad = adimAdlari();
  const l = adimKurallari(bl, n);
  console.log(`Adım ${n} — ${ad[n] || '?'}: ${l.length} hatırlatma`);
  for (const b of l) console.log(`  ${b.kod}  ${b.baslik}`);
} else if (komut === 'say') {
  let hata = 0; const H = (...m) => { console.log('HATA', ...m); hata++; };
  const kesin = true; // 20 Kasım 2026: 667 kuralın hepsinin uygulayıcısı var; artık eksik = hata
  const sayi = { kural: 0, program: 0, talimat: 0, hatirlat: 0, yok: 0, eksik: 0 }, eksik = {};
  for (const b of bl) {
    if (b.yonlenen) { if (b.uyg.length) H(b.kod, '"→ ANA" diyen kod uygulayıcı taşımaz'); continue; }
    sayi.kural++;
    if (!b.uyg.length) { sayi.eksik++; const k = b.kod.split('-')[0]; eksik[k] = (eksik[k] || 0) + 1; if (kesin) H(b.kod, 'uygulayıcı yok'); continue; }
    const r = coz(b, H);
    if (r.program.length) sayi.program++;
    if (r.hatirlat.length) sayi.hatirlat++;
    if (r.talimat.length) sayi.talimat++;
    if (r.yok) sayi.yok++;
  }
  const simdiki = fs.existsSync(HATIR) ? fs.readFileSync(HATIR, 'utf8').replace(/\r/g, '') : '';
  if (simdiki !== uret(bl)) H('HATIRLATMA.md eski — `node arac_uygulayici.js yaz`');
  if (sayi.eksik && !kesin) console.log('UYARI uygulayıcısı olmayan:', sayi.eksik, JSON.stringify(eksik));
  console.log(JSON.stringify(sayi), 'hata:', hata);
  process.exit(hata ? 1 : 0);
} else { console.log('kullanım: node arac_uygulayici.js say | yaz | adim <n> | kayit <vaka> <adım> | bitti <vaka> <an|adım…>'); process.exit(2); }
