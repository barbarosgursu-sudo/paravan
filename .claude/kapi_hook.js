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
// maxBuffer büyük: yeni/index.html birkaç MB (gömülü resimler); varsayılan 1 MB sayfayı yarım okutuyordu (KOD-1 yanlış alarmı).
const git = a => spawnSync('git', a, { cwd: kok, encoding: 'utf8', maxBuffer: 1 << 28 }).stdout || '';
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

// ---- Adım 4 madde 3 (21 Kasım 2026, sahibi tek tek onayladı) ----
// CODEX-17: onaylı resim silinmez; onayli/'e png dışında dosya girmez. Sahibi bilerek siliyorsa iletiye [onaylı sil].
{
  const ONAYLI = /^uretim\/v\d+\/onayli\//;
  const silinen = dosyalar.filter(f => ONAYLI.test(f) && !fs.existsSync(path.join(kok, f)) &&
    spawnSync('git', ['cat-file', '-e', 'HEAD:' + f], { cwd: kok }).status === 0);
  const pngDisi = dosyalar.filter(f => ONAYLI.test(f) && fs.existsSync(path.join(kok, f)) && !/\/G\d+z?\.png$/.test(f));
  if (silinen.length && !/\[onaylı sil\]/.test(ileti)) dur.push(`onaylı resim silindi: ${silinen.join(', ')} — onaylı resim emektir (CODEX-17). Bilerek siliyorsan commit iletisine [onaylı sil] yaz.`);
  if (pngDisi.length) dur.push(`onayli/'e png olmayan ya da adı G<n>.png olmayan dosya: ${pngDisi.join(', ')} (CODEX-17)`);
}
// CODEX-25: üretilmiş bir resmin isteminde `## İstem` bölümü değişmez; yalnız sona `## Düzeltme` / `## ENGELLENDİ` eklenir
// (neyin denendiği kayıtta kalsın). Henüz üretilmemiş istem serbest. Sahibi onayladıysa iletiye [istem onaylı].
if (!/\[istem onaylı\]/.test(ileti)) {
  const istemBolumu = t => { const m = String(t).replace(/\r/g, '').split(/\n(?=## )/).find(b => b.startsWith('## İstem')); return (m || '').trim(); };
  for (const f of dosyalar) {
    const m = f.match(/^uretim\/(v\d+)\/prompts\/(G\d+z?)\.md$/);
    if (!m || !fs.existsSync(path.join(kok, f)) || spawnSync('git', ['cat-file', '-e', 'HEAD:' + f], { cwd: kok }).status !== 0) continue;
    const vd = path.join(kok, 'uretim', m[1]);
    const uretildi = ['uretilen', 'onayli'].some(k => fs.existsSync(path.join(vd, k, m[2] + '.png'))) ||
      (fs.existsSync(path.join(vd, 'red')) && fs.readdirSync(path.join(vd, 'red')).some(x => x.startsWith(m[2] + '_red')));
    if (!uretildi) continue;
    if (istemBolumu(git(['show', 'HEAD:' + f])) !== istemBolumu(yeniHal(f)))
      dur.push(`${f}: '## İstem' bölümü değişti, resim üretilmişti — istem değiştirilmez, sona '## Düzeltme <k>' eklenir (CODEX-25). Sahibi onayladıysa iletiye [istem onaylı].`);
  }
}
// KOD-1: oyun sayfası (yeni/index.html) elle yazılmaz, derlenir. Sayfa ya da kaynak/ kaydediliyorsa sayfa yeniden derlenir ve
// kaydedilecek sayfayla karşılaştırılır; fark varsa durur. Çalışma kopyası eski hâline döner (yan etki yok).
if (dosyalar.includes('yeni/index.html') || testGerek) {
  const SAYFA = path.join(kok, 'yeni', 'index.html');
  const once = fs.existsSync(SAYFA) ? fs.readFileSync(SAYFA) : null;
  const rb = spawnSync('node', ['build_html.js', 'yeni'], { cwd: path.join(kok, 'kaynak'), encoding: 'utf8' });
  const derlenen = fs.existsSync(SAYFA) ? fs.readFileSync(SAYFA, 'utf8') : '';
  if (once) fs.writeFileSync(SAYFA, once);
  spawnSync('node', ['build_html.js'], { cwd: path.join(kok, 'kaynak'), encoding: 'utf8' });   // _gomulu_veri.js'i eski kipe döndürür
  const lf = s => String(s).replace(/\r\n/g, '\n');
  const kaydedilecek = dosyalar.includes('yeni/index.html') ? yeniHal('yeni/index.html') : git(['show', 'HEAD:yeni/index.html']);
  if (rb.status !== 0) dur.push('derleme (yeni) çalışmadı: ' + String(rb.stderr || rb.stdout).trim().split('\n').pop());
  else if (lf(derlenen) !== lf(kaydedilecek)) dur.push('yeni/index.html derlemeden çıkanla aynı değil — sayfa elle yazılmaz ya da derlenmeyi unuttun (KOD-1). ' +
    'Çözüm: cd kaynak && node build_html.js yeni && node build_html.js, sonra git add yeni/index.html.');
}

// KOD-38: oyun verisi elle yazılmaz; diyalogdan `arac_diyalog.js` yazar. Veri ya da bir diyalog kaydediliyorsa kaydedilecek veri
// geçici klasöre kopyalanır, her vakanın kaydedilecek diyaloğu üstüne yeniden yazılır; sonuç kaydedilecek veriden farklıysa elle
// düzenleme var (bir sonraki yazımda kaybolur). Araçla yazılamayan diyalog (eski biçim, ör. etiketsiz **CENGO:**) atlanır ve
// bildirilir — vaka no ile değil, dosyanın biçimiyle (sahibinin kararı: denetim vakadan bağımsız).
{
  const VERI = ['kaynak/yeni/game_data.json', 'kaynak/yeni/kisiler.json'];
  if (dosyalar.some(f => VERI.includes(f) || /^sablon\/vakalar\/vaka\d+_diyalog\.md$/.test(f))) {
    const gec = fs.mkdtempSync(path.join(require('os').tmpdir(), 'kod38-'));
    for (const f of VERI) fs.writeFileSync(path.join(gec, path.basename(f)), yeniHal(f));
    const once = VERI.map(f => fs.readFileSync(path.join(gec, path.basename(f)), 'utf8'));
    const vdir = path.join(kok, 'sablon', 'vakalar'), atlanan = [];
    const diyaloglar = fs.readdirSync(vdir).map(x => x.match(/^vaka(\d+)_diyalog\.md$/)).filter(Boolean).sort((a, b) => a[1] - b[1]);
    for (const m of diyaloglar) {
      const md = path.join(gec, m[0]);
      fs.writeFileSync(md, yeniHal('sablon/vakalar/' + m[0]));
      const r = spawnSync('node', ['arac_diyalog.js', md, 'V' + m[1]], { cwd: KAYNAK, encoding: 'utf8', env: { ...process.env, VERI_DIZIN: gec } });
      if (r.status !== 0) atlanan.push('V' + m[1]);
    }
    const lf = s => String(s).replace(/\r\n/g, '\n');
    VERI.forEach((f, i) => {
      if (lf(fs.readFileSync(path.join(gec, path.basename(f)), 'utf8')) !== lf(once[i]))
        dur.push(`${f} diyalogdan yazılanla aynı değil — veri elle düzenlenmiş; bir sonraki yazımda kaybolur (KOD-38). ` +
          'Çözüm: değişikliği sablon/vakalar/vakaN_diyalog.md\'ye yaz, cd kaynak && node arac_diyalog.js ../sablon/vakalar/vakaN_diyalog.md VN. ' +
          '(Yapı alanları — ipucu koşulu, olgu, Kim yaptı? — veride elle değil arac_json_yaz.js ile yazılır; onlara bu denetim bakmaz.)');
    });
    if (atlanan.length) process.stderr.write(`KAPI (bilgi): KOD-38 — araçla yazılamayan (eski biçim) diyaloglar atlandı: ${atlanan.join(', ')}\n`);
    fs.rmSync(gec, { recursive: true, force: true });
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
