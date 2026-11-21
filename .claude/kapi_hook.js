// COMMIT BAĞLANTISI (14 Kasım 2026, sahibinin kararı: "kapılar kendiliğinden çalışsın; kimse hatırlamak zorunda kalmasın").
// Claude Code her Bash komutundan önce bunu çağırır (.claude/settings.json → PreToolUse). Komut bir `git commit` ise, kaydedilecek
// dosyalara bakar: Vaka 6 ve sonrasının metnine ya da oyunun ortak dosyalarına dokunuluyorsa hikâye kapısı, resimlerine
// dokunuluyorsa resim kapısı çalışır (kaynak/arac_kapi.js). Kapı geçmezse commit YAPILMAZ ve neden yazılır.
// Kapı aynı girdilerle önce geçtiyse saniyede döner (önbellek).
//
// ADIM 4 BAĞLANTILARI (21 Kasım 2026, sahibinin onayı: "programları bağlayalım") — kapı bunları da yapar:
//  (a) kaynak/ değişiyorsa: iki doğrulayıcı + test_*.js (test_bozuk.js hariç) — KOD-3. Biri geçmezse commit yok.
//  (d) gömme: gorseller.json ya da yeni_gorsel/ değişiyorsa, değişen resmin VAKASI (Vaka 6+) resim kapısına girer — yalnız o vaka.
//      Resim → vaka: anahtar uretim/v<N>/LISTE.md ya da sablon/vakalar/vaka<N>_gorsel.md'de geçiyor mu.
//  (e) diyalog: sablon/vakalar/vaka<N>_diyalog.md'nin SÖZLERİ değiştiyse (arac_soz_farki.js) commit yok — SATIR-11.
//      Sahibi söz değişikliğini onayladıysa commit iletisine `[söz onaylı]` yazılır.
//  (b) onay: uretim/v<N>/onayli/G<n>.png (Vaka 6+) kaydedilirken tarz, yüz ve benzerlik araçları yeniden koşar; GEÇTİ
//      demeyen resim onaylı kaydedilmez — DENETIM-2, DENETIM-8, DENETIM-53. Sahibinin "kalsın"ı:
//      sablon/vakalar/vaka<N>_kapi.md → ## kalsın satırı `- G<n> | tarz|yüz|benzerlik | <sebep>`.
//
// İKİ KİP: Claude Code'da PreToolUse (stdin JSON). Git kancası olarak: `.githooks/commit-msg` → `node .claude/kapi_hook.js --git <ileti>`
// (Codex ve terminal commit'leri de geçer; bir kez `git config core.hooksPath .githooks`). Git kancası kuruluysa Claude Code kipi
// hiçbir şey yapmaz (iki kez koşmasın).
const fs = require('fs'), path = require('path');
const { spawnSync } = require('child_process');
const kok = process.env.CLAUDE_PROJECT_DIR || path.resolve(__dirname, '..');
const git = a => spawnSync('git', a, { cwd: kok, encoding: 'utf8' }).stdout || '';
const GIT_KIPI = process.argv[2] === '--git';
let komut = '', ileti = '';
if (GIT_KIPI) {
  try { ileti = fs.readFileSync(process.argv[3], 'utf8'); } catch (e) {}
} else {
  let girdi = ''; try { girdi = fs.readFileSync(0, 'utf8'); } catch (e) {}
  try { komut = (JSON.parse(girdi).tool_input || {}).command || ''; } catch (e) { process.exit(0); }
  if (!/\bgit\b[^|;&]*\bcommit\b/.test(komut)) process.exit(0);
  if (git(['config', '--get', 'core.hooksPath']).trim() === '.githooks' && fs.existsSync(path.join(kok, '.githooks', 'commit-msg'))) process.exit(0);
  ileti = komut;
}
// `git commit -a` / `git add … && git commit` da olur: kaydedilecekler = sahnelenmiş + (-a varsa) değişmiş izlenen dosyalar.
let dosyalar = git(['diff', '--cached', '--name-only']).split('\n').filter(Boolean);
if (!GIT_KIPI && (/\bcommit\b[^|;&]*\s-[a-zA-Z]*a/.test(komut) || /\bgit add\b/.test(komut))) dosyalar = dosyalar.concat(git(['diff', '--name-only']).split('\n').filter(Boolean), git(['ls-files', '--others', '--exclude-standard']).split('\n').filter(Boolean));
dosyalar = [...new Set(dosyalar)];

// Hangi vakalar kapıya girer: Vaka 6 ve sonrası (sahibinin kararı). Vaka listesi diyalog dosyalarından.
const vakalar = fs.readdirSync(path.join(kok, 'sablon', 'vakalar')).map(f => (f.match(/^vaka(\d+)_diyalog\.md$/) || [])[1]).filter(Boolean).map(Number).filter(n => n >= 6);
// YALNIZ DEĞİŞEN VAKA (20 Kasım 2026, sahibinin kararı: "kapı yalnız değişen vakayı denetlesin"). Önceden ortak bir dosyaya
// (veri, resim listesi) dokunmak Vaka 6 ve sonrasının HEPSİNİ baştan denetletiyordu; resimleri henüz üretilmemiş Vaka 7–8 her
// seferinde kalıyor, tek satırlık bir değişiklik saatlerce bekliyordu. Şimdi:
//  - Ortak veri (game_data.json, kisiler.json): yalnız içinde gerçekten değişen vakalar hikâye kapısına girer.
//  - Ortak kod (arayüz, motor, araçlar): hepsini etkiler, hepsi hikâye kapısına girer (seyrek).
//  - Ortak resim dosyaları (gorseller.json, yeni_gorsel/, kesim araçları) BÜTÜN vakalara resim kapısı açmaz (sahibi: "bitmiş
//    vakalarda neden çalışıyor?"). 21 Kasım 2026'dan beri yalnız değişen resmin vakasına açar (yukarıda (d)).
//  - yeni/index.html derleme çıktısıdır, kendi başına kapı açmaz (kaynağı zaten bakılıyor).
//  - Vakanın KENDİ dosyaları eskisi gibi: onaylı resim / görsel tablosu → resim kapısı; diyalog/kapı/bayrak → hikâye kapısı.
const ORTAK_VERI = /^kaynak\/yeni\/(game_data|kisiler)\.json$/;
const ORTAK_KOD = /^kaynak\/(yeni_arayuz\.(js|css)|motor_yeni\.js|arac_diyalog\.js|arac_kapi\.js|arac_satir_resim\.js|arac_yeni_tur\.js)$/;
const sahnede = new Set(git(['diff', '--cached', '--name-only']).split('\n').filter(Boolean));
function yeniHal(f) {   // kaydedilecek hâl: sahnelenmişse sahnedeki, değilse çalışma kopyası
  if (sahnede.has(f)) return git(['show', ':' + f]);
  try { return fs.readFileSync(path.join(kok, f), 'utf8'); } catch (e) { return ''; }
}
const ayni = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function veriDegisen(f) {   // döner: Set(vaka no) ya da 'hepsi'
  let eski, yeni;
  try { eski = JSON.parse(git(['show', 'HEAD:' + f]) || '{}'); yeni = JSON.parse(yeniHal(f) || '{}'); } catch (e) { return 'hepsi'; }
  const s = new Set(), no = id => Number(String(id).replace(/\D/g, '')) || 0;
  if (f.endsWith('game_data.json')) {
    for (const k of new Set([...Object.keys(eski), ...Object.keys(yeni)])) if (k !== 'vakalar' && k !== '_not' && !ayni(eski[k], yeni[k])) return 'hepsi';
    const e = new Map((eski.vakalar || []).map(v => [v.id, v])), y = new Map((yeni.vakalar || []).map(v => [v.id, v]));
    for (const id of new Set([...e.keys(), ...y.keys()])) if (!ayni(e.get(id), y.get(id))) s.add(no(id));
    return s;
  }
  // kisiler.json: defter/ani_ozet vaka anahtarlı; kişi listesinde kişinin vakası benzerlik tablolarından (K = kalıcı → hepsi)
  for (const b of ['defter', 'ani_ozet']) {
    const e = eski[b] || {}, y = yeni[b] || {};
    for (const k of new Set([...Object.keys(e), ...Object.keys(y)])) if (k !== '_not' && !ayni(e[k], y[k])) s.add(no(k));
  }
  const vakasi = {};
  for (const t of ['havuz.tsv', 'adaylar.tsv']) {
    try { fs.readFileSync(path.join(kok, 'sablon', 'kurallar', 'benzerlik', t), 'utf8').split('\n').forEach(l => { const h = l.split('\t'); if (h.length > 2 && !l.startsWith('#')) vakasi[h[1]] = h[0]; }); } catch (e) {}
  }
  const e = new Map((eski.kisiler || []).map(k => [k.id, k])), y = new Map((yeni.kisiler || []).map(k => [k.id, k]));
  for (const id of new Set([...e.keys(), ...y.keys()])) {
    if (ayni(e.get(id), y.get(id))) continue;
    const v = Number(vakasi[id]);
    if (!v) return 'hepsi';
    s.add(v);
  }
  for (const k of Object.keys(eski)) if (!['defter', 'ani_ozet', 'kisiler', '_not'].includes(k) && !ayni(eski[k], yeni[k])) return 'hepsi';
  return s;
}
const metinVaka = new Set();
let metinHepsi = dosyalar.some(f => ORTAK_KOD.test(f));
for (const f of new Set(dosyalar.filter(f => ORTAK_VERI.test(f)))) {
  const d = veriDegisen(f);
  if (d === 'hepsi') metinHepsi = true; else d.forEach(n => metinVaka.add(n));
}
// (d) Gömme: değişen resim anahtarları → vakaları.
const resimVaka = new Set();
{
  const GJ = 'kaynak/yeni/gorseller.json';
  const anahtar = new Set();
  let eskiG = {}, yeniG = {};
  try { eskiG = JSON.parse(git(['show', 'HEAD:' + GJ]) || '{}'); } catch (e) {}
  try { yeniG = JSON.parse(fs.readFileSync(path.join(kok, GJ), 'utf8')); } catch (e) {}
  if (dosyalar.includes(GJ)) {
    for (const b of new Set([...Object.keys(eskiG), ...Object.keys(yeniG)])) {
      if (b.startsWith('_')) continue;
      const e = eskiG[b] || {}, y = yeniG[b] || {};
      if (Array.isArray(e) || Array.isArray(y) || typeof e !== 'object' || typeof y !== 'object') continue;
      for (const k of new Set([...Object.keys(e), ...Object.keys(y)])) if (!k.startsWith('_') && !ayni(e[k], y[k])) anahtar.add(k);
    }
  }
  const dosyaAnahtar = {};
  for (const [k, v] of Object.entries(Object.assign({}, eskiG.dosyalar, yeniG.dosyalar))) dosyaAnahtar[String(v).replace(/\\/g, '/')] = k;
  for (const f of dosyalar) {
    const m = f.match(/^kaynak\/yeni_gorsel\/(.+)$/);
    if (m && dosyaAnahtar[m[1]]) anahtar.add(dosyaAnahtar[m[1]]);
  }
  const kac = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const n of vakalar) {
    let metin = '';
    for (const t of [`uretim/v${n}/LISTE.md`, `sablon/vakalar/vaka${n}_gorsel.md`]) { try { metin += fs.readFileSync(path.join(kok, t), 'utf8') + '\n'; } catch (e) {} }
    if (!metin) continue;
    for (const k of anahtar) if (new RegExp(`(?<![\\w.])${kac(k)}(?![\\w]|\\.\\w)`).test(metin)) { resimVaka.add(n); break; }
  }
}

const is = [];
for (const n of vakalar) {
  const kendi = dosyalar.filter(f => f.startsWith(`sablon/vakalar/vaka${n}_`) || f.startsWith(`uretim/v${n}/`));
  const resim = resimVaka.has(n) || kendi.some(f => /^uretim\/v\d+\/(onayli|el_onay)/.test(f) || /_gorsel\.md$/.test(f));
  const metin = metinHepsi || metinVaka.has(n) || kendi.some(f => /_(diyalog|kapi|bayrak)\.md$/.test(f));
  if (resim) is.push(['V' + n, 'resim']); else if (metin) is.push(['V' + n, 'hikaye']);
}
// (a) Testler: kaynak/ değişiyorsa (görüntü klasörü hariç).
const testGerek = dosyalar.some(f => f.startsWith('kaynak/') && !f.startsWith('kaynak/YENI_UI/'));
// (e) Söz farkı: HEAD'de olan her diyalog dosyası.
const sozDosya = dosyalar.filter(f => /^sablon\/vakalar\/vaka\d+_diyalog\.md$/.test(f) && fs.existsSync(path.join(kok, f)) &&
  spawnSync('git', ['cat-file', '-e', 'HEAD:' + f], { cwd: kok }).status === 0);
const sozOnayli = /\[söz onaylı\]/.test(ileti);
// (b) Onaylı resimler: Vaka 6+, dosya duruyor (silinen değil).
const onay = {};   // 'v7' → ['G4', …]
for (const f of dosyalar) {
  const m = f.match(/^uretim\/v(\d+)\/onayli\/(G\d+z?)\.png$/);
  if (m && Number(m[1]) >= 6 && fs.existsSync(path.join(kok, f))) (onay['v' + m[1]] = onay['v' + m[1]] || []).push(m[2]);
}

if (process.env.KAPI_KURU) {
  console.log('kapı çalıştıracaktı: ' + (is.map(x => x.join(' ')).join(', ') || 'hiçbiri') +
    ' · testler: ' + (testGerek ? 'evet' : 'hayır') + ' · söz farkı: ' + (sozDosya.join(', ') || 'hiçbiri') + (sozOnayli ? ' [söz onaylı]' : '') +
    ' · onay denetimi: ' + (Object.entries(onay).map(([v, g]) => v + ' ' + g.join(' ')).join(', ') || 'hiçbiri'));
  process.exit(0);
}

const dur = [];
const KAYNAK = path.join(kok, 'kaynak');
const kos = (komut, argv, cwd) => spawnSync(komut, argv, { cwd: cwd || KAYNAK, encoding: 'utf8', maxBuffer: 1 << 26 });
const son = (r, n) => ((r.stdout || '') + (r.stderr || '') + (r.error ? String(r.error) : '')).trim().split('\n').slice(-(n || 2)).join(' — ');

if (testGerek) {
  for (const a of [[], ['yeni']]) {
    const r = kos('node', ['dogrulayici.js', ...a]);
    if (r.status !== 0) dur.push(`doğrulayıcı${a.length ? ' (yeni)' : ''} geçmedi: ` + son(r));
  }
  const kalan = [];
  for (const t of fs.readdirSync(KAYNAK).filter(f => /^test_.*\.js$/.test(f) && f !== 'test_bozuk.js').sort()) {
    const r = kos('node', [t]);
    if (r.status !== 0) kalan.push(t + ' (' + son(r, 1).slice(0, 160) + ')');
  }
  if (kalan.length) dur.push('test geçmedi — KOD-3: ' + kalan.join('; '));
}

if (sozDosya.length && !sozOnayli) {
  for (const f of sozDosya) {
    const r = kos('node', ['arac_soz_farki.js', path.join('..', f)]);
    if (r.status !== 0) dur.push(`${f}: SÖZLER değişti — SATIR-11 (onaylı sözler değişmez). ` + ((r.stdout || '').split('\n').slice(0, 7).join(' | ')) +
      ' … Sahibi onayladıysa commit iletisine [söz onaylı] yaz.');
  }
}

const ARAC = { tarz: 'arac_tarz.py', 'yüz': 'arac_yuz.py', benzerlik: 'arac_benzerlik_resim.py' };
for (const [v, gler] of Object.entries(onay)) {
  const n = v.slice(1);
  let kayit = ''; try { kayit = fs.readFileSync(path.join(kok, 'sablon', 'vakalar', `vaka${n}_kapi.md`), 'utf8'); } catch (e) {}
  const kalsin = new Set();
  for (const l of ((kayit.split(/\n(?=## )/).find(b => b.startsWith('## kalsın')) || '').split('\n'))) {
    const m = l.match(/^-\s*(G\d+z?)\s*\|\s*(tarz|yüz|yuz|benzerlik)\s*\|/);
    if (m) kalsin.add(m[1] + ' ' + (m[2] === 'yuz' ? 'yüz' : m[2]));
  }
  const ikili = gler.filter(g => fs.existsSync(path.join(kok, 'uretim', v, 'uretilen', g + '.png')));
  if (ikili.length) dur.push(`${v}: ${ikili.join(' ')} hem onayli/'de hem uretilen/'de — araçlar uretilen/'dekine bakar; birini kaldır.`);
  for (const [ad, betik] of Object.entries(ARAC)) {
    const bak = gler.filter(g => !kalsin.has(g + ' ' + ad) && !ikili.includes(g));
    if (!bak.length) continue;
    const r = kos('python', [betik, '--uretim', v, ...bak]);
    if (r.status === 0) continue;
    const satir = ((r.stdout || '') + (r.stderr || '')).split('\n').filter(l => /^\s*(YÜZ\s+|BENZERLİK\s+)?(KALDI|ŞÜPHELİ|DUR)/.test(l)).slice(0, 6).join(' | ');
    const ne = { 1: 'ŞÜPHELİ', 2: 'KALDI', 3: 'DUR (sınır kurulamadı — sahibine)' }[r.status] || 'araç çalışmadı';
    dur.push(`${v} onay — ${ad} ${ne}: ${satir || son(r)} — onaylı kaydedilmez (DENETIM-2/8/53). Sahibi "kalsın" dediyse vaka${n}_kapi.md → ## kalsın: \`- G<n> | ${ad} | <sebep>\`.`);
  }
}

for (const [v, tur] of is) {
  const r = kos('node', ['arac_kapi.js', v, tur]);
  if (r.status !== 0) dur.push(`${v} ${tur}: ` + son(r) + ` (rapor kaynak/YENI_UI/kapi_${v}_${tur}.md; sahibinin "kalsın"ı sablon/vakalar/vaka<N>_kapi.md → ## kalsın)`);
}
if (!dur.length) process.exit(0);
process.stderr.write('KAPI — commit durduruldu:\n- ' + dur.join('\n- ') + '\n');
process.exit(GIT_KIPI ? 1 : 2);
