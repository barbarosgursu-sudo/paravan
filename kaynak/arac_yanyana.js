// ARAÇ (test değil): yeni figürü OYUNDAKİ hâliyle gösterir — kesilmiş, Peri'nin yanında, sahnenin
// arka planının önünde, Pixel 5'te. Resim onaylanmadan önce boy, bakış, göz hizası ve kesim buradan görülür
// (Vaka 3 dersi: resimler tek tek doğru, oyunda yan yana yanlıştı).
//
// Kullanım:
//   cd kaynak && node arac_yanyana.js <resim.png> [<resim2.png> …] --kim gizem [--profil konuk_beyaz_delik]
//        [--boy 0.68] [--arka A23] [--peri peri.trenckot.normal] [--kesik] [--cikti <klasör>]
//   --kim     : karakter kimliği (boy ölçeği gorseller.json → boy'dan okunur; --boy ile denenir)
//   --profil  : arac_kes.js profili (varsayılan konuk; Peri/Cengo resmiyse peri/cengo)
//   --kesik   : resim zaten kesilmiş (saydam webp/png); kesim atlanır
//   --oran    : figürün ekrandaki boyu Peri'nin kaçı olsun (ör. 0.95); araç gereken boy ölçeğini bulup basar
//   --sol     : resmi Peri'nin yerine (solda) koy — Peri'nin kendi resimlerini denemek için; sağda Cengo durur
// Çıktı: YENI_UI/yanyana/<resim>.png ve hepsi birden YENI_UI/yanyana/hepsi.png. Konsola her figürün
// başının ve gözünün ekrandaki yüksekliğini Peri'ninkiyle yan yana basar (piksel; küçük = yukarıda).
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const ORTAM = require('./arac_ortam.js');
const { chromium, devices } = ORTAM.playwright();

const arg = process.argv.slice(2);
const bayrak = ad => { const i = arg.indexOf(ad); if (i < 0) return null; const v = arg[i + 1]; arg.splice(i, 2); return v; };
const tek = ad => { const i = arg.indexOf(ad); if (i < 0) return false; arg.splice(i, 1); return true; };
const kim = bayrak('--kim');
const profil = bayrak('--profil');
const boyArg = bayrak('--boy');
const oranArg = bayrak('--oran');
const arka = bayrak('--arka') || 'A23';
const peri = bayrak('--peri') || 'peri.trenckot.normal';
const cikti = bayrak('--cikti') || path.join(__dirname, 'YENI_UI', 'yanyana');
const kesik = tek('--kesik');
const solda = tek('--sol');
const dosyalar = arg;
if (!dosyalar.length || (!kim && !solda)) {
  console.error('Kullanım: node arac_yanyana.js <resim.png> … --kim <id> [--profil P] [--boy 0.7] [--arka A23] [--peri peri.trenckot.normal] [--kesik] [--sol]');
  process.exit(1);
}
const SAYFA = path.join(__dirname, '..', 'yeni', 'index.html');
if (!fs.existsSync(SAYFA)) { console.error('Önce derle: node build_html.js yeni'); process.exit(1); }
fs.mkdirSync(cikti, { recursive: true });
const gecici = fs.mkdtempSync(path.join(os.tmpdir(), 'yanyana_'));

// 1) Kes (gerekirse)
const kesilmis = dosyalar.map(d => {
  if (kesik) return d;
  const hedef = path.join(gecici, path.basename(d).replace(/\.\w+$/, '') + '.webp');
  const p = profil || (solda ? 'peri' : 'konuk');
  const r = spawnSync('node', [path.join(__dirname, 'arac_kes.js'), d, hedef, '--profil', p], { encoding: 'utf8' });
  if (r.status !== 0) { console.error('Kesilemedi: ' + d + '\n' + r.stderr); process.exit(1); }
  console.log(r.stdout.trim());
  return hedef;
});

(async () => {
  const b = await chromium.launch(ORTAM.tarayici());
  const p = await b.newPage({ ...devices['Pixel 5'], reducedMotion: 'reduce' });
  await p.goto('file://' + SAYFA);
  await p.waitForSelector('#vnSol', { state: 'attached' });
  await p.waitForTimeout(300);
  const cikanlar = [];
  for (let i = 0; i < kesilmis.length; i++) {
    const veri = 'data:image/webp;base64,' + fs.readFileSync(kesilmis[i]).toString('base64');
    const olcum = await p.evaluate(([veri, kim, boyArg, arka, peri, solda, ad]) => {
      vnArkaKoy(arka, true);
      const fig = document.getElementById('vnFig'); fig.classList.remove('cekilmis');
      const sol = document.getElementById('vnSol'), sag = document.getElementById('vnSag');
      sol.hidden = false; sag.hidden = false;
      sol.className = 'vn-figur sol aktif'; sag.className = 'vn-figur sag aktif';
      const periSrc = solda ? veri : vnGorsel(peri);
      sol.innerHTML = `<img alt="Peri" src="${periSrc}">`;
      const sagKim = solda ? 'cengo' : kim;
      const sagSrc = solda ? vnGorsel('cengo.haki.normal') : veri;
      const olcek = solda ? 1 : (boyArg ? Number(boyArg) : ((YG.boy || {})[kim] || 1));
      const stil = olcek < 1 ? ` style="position:absolute;left:0;bottom:0;height:${olcek * 100}%"` : '';
      sag.innerHTML = `<img alt="${sagKim}"${stil} src="${sagSrc}">`;
      sag.style.transform = '';
      const r = document.querySelector('.vn-replik'); if (r) r.textContent = ad + (solda ? '' : ' · ' + kim + ' · boy ' + olcek);
      return olcek;
    }, [veri, kim, boyArg, arka, peri, solda, path.basename(dosyalar[i])]);
    await p.waitForTimeout(300);
    // Başın tepesi: figür resminin ilk opak satırı, ekran koordinatına çevrilmiş.
    const bas = await p.evaluate(async () => {
      const olc = async img => {
        await img.decode().catch(() => {});
        const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
        const x = c.getContext('2d'); x.drawImage(img, 0, 0);
        const a = x.getImageData(0, 0, c.width, c.height).data; let ilk = 0;
        satir: for (let y = 0; y < c.height; y++) for (let px = 0; px < c.width; px++) if (a[(y * c.width + px) * 4 + 3] > 200) { ilk = y; break satir; }
        const kutu = img.getBoundingClientRect();
        // object-fit:contain + alta hizalı: görünen resmin yüksekliği
        const oran = Math.min(kutu.width / img.naturalWidth, kutu.height / img.naturalHeight);
        const gorunenH = img.naturalHeight * oran, ust = kutu.bottom - gorunenH;
        return { bas: Math.round(ust + ilk * oran), boy: Math.round(gorunenH - ilk * oran) };
      };
      return { sol: await olc(document.querySelector('#vnSol img')), sag: await olc(document.querySelector('#vnSag img')) };
    });
    if (oranArg && !solda) {
      // Ekrandaki boy ölçekle doğrusal değil (kutu genişliğe takılabiliyor): ölçerek ara.
      const hedef = Number(oranArg) * bas.sol.boy;
      const bul = await p.evaluate(async ([hedef]) => {
        const img = document.querySelector('#vnSag img'); let enIyi = null;
        for (let b = 100; b >= 30; b--) {
          Object.assign(img.style, { position: 'absolute', left: '0', bottom: '0', height: b + '%' });
          await new Promise(r => requestAnimationFrame(r));
          const kutu = img.getBoundingClientRect(), oran = Math.min(kutu.width / img.naturalWidth, kutu.height / img.naturalHeight);
          const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
          const x = c.getContext('2d'); x.drawImage(img, 0, 0); const a = x.getImageData(0, 0, c.width, c.height).data; let ilk = 0;
          satir: for (let y = 0; y < c.height; y++) for (let px = 0; px < c.width; px++) if (a[(y * c.width + px) * 4 + 3] > 200) { ilk = y; break satir; }
          const h = (img.naturalHeight - ilk) * oran;
          if (h <= hedef) { enIyi = b / 100; break; }
        }
        return enIyi;
      }, [hedef]);
      console.log(`  → --oran ${oranArg} için boy ≈ ${bul} (gorseller.json → boy.${kim}); görüntü bu boyla`);
      await p.waitForTimeout(200);
    }
    const ad = path.basename(dosyalar[i]).replace(/\.\w+$/, '');
    const yol = path.join(cikti, ad + '.png');
    await p.screenshot({ path: yol });
    cikanlar.push(yol);
    const fark = bas.sag.bas - bas.sol.bas;
    console.log(`${ad}: Peri başı ${bas.sol.bas} px · ${solda ? 'Cengo' : kim} başı ${bas.sag.bas} px · fark ${fark > 0 ? '+' : ''}${fark} px (${fark > 0 ? 'Peri\'den kısa' : fark < 0 ? 'Peri\'den uzun' : 'aynı'}) · boy ${olcum}`);
  }
  await b.close();
  if (cikanlar.length > 1) {
    const hepsi = path.join(cikti, 'hepsi.png');
    ORTAM.im('montage', [...cikanlar, '-tile', Math.min(cikanlar.length, 4) + 'x', '-geometry', '393x+6+6', '-background', '#333', hepsi]);
    console.log('Hepsi: ' + path.relative(process.cwd(), hepsi));
  } else console.log('Görüntü: ' + path.relative(process.cwd(), cikanlar[0]));
})();
