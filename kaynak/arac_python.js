// Python komutunu bulur (22 Kasım 2026, KOD-33): iki bilgisayarda adı farklı — birinde `python`, ortağınkinde
// yalnız `py` (Windows başlatıcısı), Linux/macOS'ta `python3`. Sıra: PYTHON ortam değişkeni → python → py → python3.
// "Çalışıyor" = `-c "import sys"` çıkış 0 (Windows'un mağaza kısayolu `python` adıyla durur ama çalışmaz; o elenir).
// Bulamazsa 'python' döner ki hata iletisi tanıdık olsun. Sonuç süreç içinde bir kez hesaplanır.
const { spawnSync } = require('child_process');
let bulunan = null;
function python() {
  if (bulunan) return bulunan;
  const adaylar = [process.env.PYTHON, 'python', 'py', 'python3'].filter(Boolean);
  for (const c of adaylar) {
    const r = spawnSync(c, ['-c', 'import sys'], { encoding: 'utf8', timeout: 20000 });
    if (r.status === 0) return (bulunan = c);
  }
  return (bulunan = 'python');
}
module.exports = { python };
if (require.main === module) console.log(python());
