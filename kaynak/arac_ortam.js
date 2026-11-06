// Araçların ortak ortam ayarı: Playwright, Chromium ve ImageMagick yerini bulur.
// Aynı araçlar hem bulut kabında (Linux) hem sahibinin bilgisayarında (Windows) çalışsın diye.
//   PW      : playwright modülünün yolu (yoksa önce normal require, sonra bulut kabındaki yol)
//   CHROME  : Chromium'un yolu (yoksa bulut kabındaki /opt/pw-browsers, o da yoksa Playwright'ın kendi tarayıcısı)
// ImageMagick: Windows'ta ve yalnız IM7 kurulu yerde `magick`, bulut kabında `convert` / `identify`.
const fs = require('fs');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');

function playwright() {
  const adaylar = [process.env.PW, 'playwright', '/opt/node22/lib/node_modules/playwright'].filter(Boolean);
  for (const a of adaylar) { try { return require(a); } catch (e) { /* sıradaki */ } }
  throw new Error('Playwright bulunamadı. Kur: npm install -g playwright && npx playwright install chromium (ya da PW=<yol>)');
}

function chromeYolu() {
  if (process.env.CHROME) return process.env.CHROME;
  const kok = '/opt/pw-browsers';
  const sabit = path.join(kok, 'chromium-1194/chrome-linux/chrome');
  if (fs.existsSync(sabit)) return sabit;
  if (fs.existsSync(kok)) {
    for (const d of fs.readdirSync(kok).filter(d => /^chromium-\d+$/.test(d)).sort().reverse()) {
      for (const alt of ['chrome-linux64/chrome', 'chrome-linux/chrome']) {
        const y = path.join(kok, d, alt);
        if (fs.existsSync(y)) return y;
      }
    }
  }
  return undefined; // Playwright kendi indirdiği tarayıcıyı kullanır
}

// chromium.launch() seçenekleri
const tarayici = (ek = {}) => { const y = chromeYolu(); return y ? { executablePath: y, ...ek } : { ...ek }; };

let _magick = null;
function magickVar() {
  if (_magick === null) {
    _magick = process.platform === 'win32' || spawnSync('convert', ['-version'], { encoding: 'utf8' }).status !== 0;
  }
  return _magick;
}
// im('convert', [...]) / im('identify', [...]) → çıktı (Buffer)
function im(komut, args) {
  if (!magickVar()) return execFileSync(komut, args);
  return execFileSync('magick', komut === 'convert' ? args : [komut, ...args]);
}

module.exports = { playwright, tarayici, chromeYolu, im };
