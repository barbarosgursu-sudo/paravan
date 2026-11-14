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
const ORTAK_METIN = /^(kaynak\/(yeni\/(game_data|kisiler)\.json|yeni_arayuz\.(js|css)|motor_yeni\.js|arac_diyalog\.js|arac_kapi\.js|arac_satir_resim\.js|arac_yeni_tur\.js)|yeni\/index\.html)$/;
const ORTAK_RESIM = /^(kaynak\/(yeni\/gorseller\.json|yeni_gorsel\/|arac_el\.py|arac_kes_yz\.py|arac_paket\.js))/;
const is = [];
for (const n of vakalar) {
  const kendi = dosyalar.filter(f => f.startsWith(`sablon/vakalar/vaka${n}_`) || f.startsWith(`uretim/v${n}/`));
  const resim = dosyalar.some(f => ORTAK_RESIM.test(f)) || kendi.some(f => /^uretim\/v\d+\/(onayli|el_onay)/.test(f) || /_gorsel\.md$/.test(f));
  const metin = dosyalar.some(f => ORTAK_METIN.test(f)) || kendi.some(f => /_(diyalog|kapi|bayrak)\.md$/.test(f));
  if (resim) is.push(['V' + n, 'resim']); else if (metin) is.push(['V' + n, 'hikaye']);
}
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
