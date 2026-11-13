// ARAÇ (test değil): donmuş diyaloğun SÖZLERİ değişti mi? (13 Kasım 2026, sahibinin kuralı — SR-M:
// "onayladığımız diyaloglar değişmesin; değişecekse resim üretilsin.")
// Resim işi yalnız oyuncunun görmediği etiketleri değiştirebilir: [ifade], {kare/gir/gi/kime…}, ⚙ notları, görsel tablosu.
// Araç iki sürümün etiketsiz metnini satır satır karşılaştırır; fark varsa basar ve 1 ile çıkar.
//   cd kaynak && node arac_soz_farki.js ../sablon/vakalar/vaka6_diyalog.md [git-ref, varsayılan HEAD]
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const [dosya, ref = 'HEAD'] = process.argv.slice(2);
if (!dosya) { console.error('Kullanım: node arac_soz_farki.js <diyalog.md> [git-ref]'); process.exit(2); }
const kok = execSync('git rev-parse --show-toplevel', { cwd: path.dirname(path.resolve(dosya)) }).toString().trim();
const goreli = path.relative(kok, path.resolve(dosya)).split(path.sep).join('/');
const eski = execSync(`git show ${ref}:${goreli}`, { cwd: kok, maxBuffer: 1 << 26 }).toString();
const yeni = fs.readFileSync(dosya, 'utf8');
const soz = t => t.split(/\r?\n/).filter(l => !l.startsWith('|') && !l.startsWith('⚙'))
  .map(l => l.replace(/\{[^}]*\}/g, '').replace(/^(\*\*[^*[]+)\[[^\]]*\]/, '$1').trimEnd());
const a = soz(eski), b = soz(yeni);
const fark = [];
for (let i = 0; i < Math.max(a.length, b.length); i++) if (a[i] !== b[i]) fark.push([i + 1, a[i], b[i]]);
if (!fark.length) { console.log(`✓ söz farkı 0 (${a.length} satır, ${ref} ile) — yalnız etiketler değişti`); process.exit(0); }
console.log(`✗ ${fark.length} satırda SÖZ değişti (${ref} ile). Donmuş metin değişmez; resimle çöz (SR-M).`);
for (const [n, x, y] of fark.slice(0, 20)) console.log(`  ${n}\n    eski: ${x}\n    yeni: ${y}`);
process.exit(1);
