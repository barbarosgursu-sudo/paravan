// ARAÇ (test değil): YENİ OYUNU Pixel 5'te gerçek tıklamayla baştan sona oynatır —
// açılış, Vaka 1 girişi, iki araştırma yolundan biri, dönüş, bir karar, kapanış,
// kayıt-sürdürme. JS hatası, yatay taşma ve konuşma ekranının bitip bitmediğine bakar;
// önemli anların ekran görüntüsünü kaynak/YENI_UI/'ye yazar (gözle bakmak için).
// Kullanım:
//   cd kaynak && node build_html.js yeni && node arac_yeni_tur.js [karar_sırası] [set|dukkan]
// Yazı tipi (Google Fonts) ve ses dosyası yükleme hataları çevrimdışı ortamda
// beklenir; sayılmaz. Seçicilerde text= kullanılmaz (bkz. CLAUDE.md).
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path'), fs = require('fs');
const SAYFA = path.join(__dirname, '..', 'yeni', 'index.html');
const OUT = path.join(__dirname, 'YENI_UI'); fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) fs.unlinkSync(path.join(OUT, f));
const KARAR = Number(process.argv[2]||0), YOL = process.argv[3]||"set";
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ ...devices['Pixel 5'], reducedMotion: 'reduce' });
  const hata = []; p.on('pageerror', e => hata.push(e.message)); p.on('console', m => { if (m.type()==='error' && !/ses|Audio|404|ERR_FILE|ERR_FAILED|ERR_CERT|ERR_NAME|ERR_INTERNET/.test(m.text())) hata.push('console: '+m.text()); });
  await p.goto('file://' + SAYFA); await p.waitForTimeout(400);
  let n = 0, shot = 0, tasma = [];
  const foto = async ad => { await p.waitForTimeout(350); await p.screenshot({ path: `${OUT}/${String(++shot).padStart(2,'0')}_${ad}.png` }); };
  const tasmaBak = async yer => { const w = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (w > 0) tasma.push(yer+':'+w); };
  // VN'i bitene kadar oynat
  const vnOyna = async (ad, fotoAnlar = []) => {
    let i = 0;
    while (await p.$('.vn')) {
      const sec = await p.$('#vnSecim0');
      if (sec) { await foto(ad + '_secim'); await sec.click(); continue; }
      const t = await p.evaluate(() => (document.querySelector('.vn-replik')||{}).textContent || '');
      if (fotoAnlar.some(f => t.startsWith(f))) { await foto(ad + '_' + i); }
      await tasmaBak(ad);
      await p.click('#vnKutu'); i++; n++;
      if (i > 400) throw new Error('VN bitmedi: ' + ad);
    }
    return i;
  };
  console.log('açılış satır', await vnOyna('acilis', ['O koltukta', 'Peri mantoyu', 'Tel lazım', 'Dört bin']));
  await foto('masa'); await tasmaBak('masa');
  await p.click('.dosya-afis');
  console.log('giriş+konuşma', await vnOyna('giris', ['Teknemi aldılar', 'Camda yazıyor', 'Bir de…', 'Hiç denediniz']));
  await foto('arastirma');
  const sira = YOL === "set" ? ['Rıza Reis\'in anlattıkları','Cengo\'nun çaycısı','İskeleye bak','Bebek sahili','Set sorumlusuyla','Rıza Reis\'in oğlu']
                             : ['İskeleye bak','Rıza Reis\'in oğlu','Serkan\'ın dükkânı','Cengo\'nun çaycısı','Bebek sahili','Rıza Reis\'in anlattıkları'];
  for (const ad of sira) {
    const el = p.locator('.kaynak', { hasText: ad }).first();
    if (!(await el.count())) { console.log('yok:', ad); continue; }
    await el.click();
    const s = await vnOyna('ipucu', ['Planlamıştım', 'Akşam yemeği', 'Çaycı hortumu', 'Bu sezonun']);
    await foto('kart'); await tasmaBak('kart');
    console.log('ipucu', ad, s, 'satır');
    await p.click('.buton:has-text("Araştırmaya dön")');
  }
  await foto('arastirma_son');
  await p.click('.buton:has-text("Karar vermeye hazırım")');
  console.log('dönüş', await vnOyna('donus'));
  await foto('kararlar'); await tasmaBak('kararlar');
  // Batma uyarısı yeni oyunda yok (sahibinin kararı): karar ekranında ve şeritte aranır.
  const batma = await p.evaluate(() => /batars|açık verirsin|borca girersin|giderini karşılamıyor|kasa boş/.test(document.body.innerText));
  if (batma) hata.push('karar ekranında batma uyarısı var');
  const kararlar = await p.$$('.karar'); console.log('karar sayısı', kararlar.length);
  await kararlar[KARAR].click();
  await foto('sonuc'); await tasmaBak('sonuc');
  await p.click('.buton:has-text("Devam et")');
  console.log('kapanış', await vnOyna('kapanis', ['Cengo merdivenden']));
  await foto('son');
  // kayıt-sürdürme: yeniden yükle
  await p.reload(); await p.waitForTimeout(400); await foto('yeniden');
  const anahtar = await p.evaluate(() => Object.keys(localStorage));
  console.log('kayıt anahtarı', anahtar.join(','), '· tıklama', n);
  console.log(tasma.length ? '✗ yatay taşma: ' + tasma.join(' ') : '✓ yatay taşma yok');
  console.log(hata.length ? '✗ hata:\n  ' + hata.join('\n  ') : '✓ JS hatası yok');
  if (tasma.length || hata.length) process.exitCode = 1;
  await b.close();
})().catch(e => { console.error('TUR HATASI', e.message); process.exit(1); });
