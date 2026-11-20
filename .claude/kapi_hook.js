// COMMIT BAĞLANTISI (14 Kasım 2026, sahibinin kararı: "kapılar kendiliğinden çalışsın; kimse hatırlamak zorunda kalmasın").
// Claude Code her Bash komutundan önce bunu çağırır (.claude/settings.json → PreToolUse). Komut bir `git commit` ise, kaydedilecek
// dosyalara bakar: Vaka 6 ve sonrasının metnine ya da oyunun ortak dosyalarına dokunuluyorsa hikâye kapısı, resimlerine
// dokunuluyorsa resim kapısı çalışır (kaynak/arac_kapi.js). Kapı geçmezse commit YAPILMAZ ve neden yazılır.
// Kapı aynı girdilerle önce geçtiyse saniyede döner (önbellek).
const fs = require('fs'), path = require('path');
const { spawnSync } = require('child_process');
let girdi = ''; try { girdi = fs.readFileSync(0, 'utf8'); } catch (e) {}
let komut = ''; try { komut = (JSON.parse(girdi).tool_input || {}).command || ''; } catch (e) { process.exit(0); }
if (!/\bgit\b[^|;&]*\bcommit\b/.test(komut)) process.exit(0);

const kok = process.env.CLAUDE_PROJECT_DIR || path.resolve(__dirname, '..');
const git = a => spawnSync('git', a, { cwd: kok, encoding: 'utf8' }).stdout || '';
// `git commit -a` / `git add … && git commit` da olur: kaydedilecekler = sahnelenmiş + (-a varsa) değişmiş izlenen dosyalar.
let dosyalar = git(['diff', '--cached', '--name-only']).split('\n').filter(Boolean);
if (/\bcommit\b[^|;&]*\s-[a-zA-Z]*a/.test(komut) || /\bgit add\b/.test(komut)) dosyalar = dosyalar.concat(git(['diff', '--name-only']).split('\n').filter(Boolean), git(['ls-files', '--others', '--exclude-standard']).split('\n').filter(Boolean));

// Hangi vakalar kapıya girer: Vaka 6 ve sonrası (sahibinin kararı). Vaka listesi diyalog dosyalarından.
const vakalar = fs.readdirSync(path.join(kok, 'sablon', 'vakalar')).map(f => (f.match(/^vaka(\d+)_diyalog\.md$/) || [])[1]).filter(Boolean).map(Number).filter(n => n >= 6);
// YALNIZ DEĞİŞEN VAKA (20 Kasım 2026, sahibinin kararı: "kapı yalnız değişen vakayı denetlesin"). Önceden ortak bir dosyaya
// (veri, resim listesi) dokunmak Vaka 6 ve sonrasının HEPSİNİ baştan denetletiyordu; resimleri henüz üretilmemiş Vaka 7–8 her
// seferinde kalıyor, tek satırlık bir değişiklik saatlerce bekliyordu. Şimdi:
//  - Ortak veri (game_data.json, kisiler.json): yalnız içinde gerçekten değişen vakalar hikâye kapısına girer.
//  - Ortak kod (arayüz, motor, araçlar): hepsini etkiler, hepsi hikâye kapısına girer (seyrek).
//  - Ortak resim dosyaları (gorseller.json, yeni_gorsel/, kesim araçları) resim kapısı AÇMAZ (sahibi: "bitmiş vakalarda neden
//    çalışıyor?"). Bitmiş bir vakanın resmi bozulursa derleme (build_html.js: "atıfın hepsi gömülü") zaten durdurur.
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
const is = [];
for (const n of vakalar) {
  const kendi = dosyalar.filter(f => f.startsWith(`sablon/vakalar/vaka${n}_`) || f.startsWith(`uretim/v${n}/`));
  const resim = kendi.some(f => /^uretim\/v\d+\/(onayli|el_onay)/.test(f) || /_gorsel\.md$/.test(f));
  const metin = metinHepsi || metinVaka.has(n) || kendi.some(f => /_(diyalog|kapi|bayrak)\.md$/.test(f));
  if (resim) is.push(['V' + n, 'resim']); else if (metin) is.push(['V' + n, 'hikaye']);
}
if (process.env.KAPI_KURU) { console.log('kapı çalıştıracaktı: ' + (is.map(x => x.join(' ')).join(', ') || 'hiçbiri')); process.exit(0); }
if (!is.length) process.exit(0);

const dur = [];
for (const [v, tur] of is) {
  const r = spawnSync('node', ['arac_kapi.js', v, tur], { cwd: path.join(kok, 'kaynak'), encoding: 'utf8', maxBuffer: 1 << 26 });
  if (r.status !== 0) dur.push(`${v} ${tur}: ` + (r.stdout + r.stderr).trim().split('\n').slice(-2).join(' — '));
}
if (!dur.length) process.exit(0);
process.stderr.write('KAPI — commit durduruldu (Vaka 6 ve sonrası, sahibinin kararı):\n' + dur.join('\n') +
  '\nRapor kaynak/YENI_UI/kapi_V<N>_<tür>.md içinde. Bulgular düzelmeden ya da sahibi "kalsın" demeden (sablon/vakalar/vaka<N>_kapi.md → ## kalsın) kaydedilmez.\n');
process.exit(2);
