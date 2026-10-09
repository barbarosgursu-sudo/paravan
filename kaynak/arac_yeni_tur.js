// ARAÇ (test değil): YENİ OYUNU Pixel 5'te gerçek tıklamayla baştan sona oynatır —
// açılış, Vaka 1 girişi, iki araştırma yolundan biri, Kim yaptı? (seçilen sonuçla),
// yüzleşme + kovalamaca, bir karar, kapanış, kayıt-sürdürme. JS hatası, yatay taşma ve konuşma ekranının bitip bitmediğine bakar;
// önemli anların ekran görüntüsünü kaynak/YENI_UI/'ye yazar (gözle bakmak için).
// Kullanım:
//   cd kaynak && node build_html.js yeni && node arac_yeni_tur.js [karar_sırası] [set|dukkan] [dogru|zayif|<şüpheli id>]
// Yazı tipi (Google Fonts) ve ses dosyası yükleme hataları çevrimdışı ortamda
// beklenir; sayılmaz. Seçicilerde text= kullanılmaz (bkz. CLAUDE.md).
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path'), fs = require('fs');
const SAYFA = path.join(__dirname, '..', 'yeni', 'index.html');
const OUT = path.join(__dirname, 'YENI_UI'); fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) fs.unlinkSync(path.join(OUT, f));
const KARAR = Number(process.argv[2]||0), YOL = process.argv[3]||"set", SONUC = process.argv[4]||"dogru";
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ ...devices['Pixel 5'], reducedMotion: 'reduce' });
  const hata = []; p.on('pageerror', e => hata.push(e.message)); p.on('console', m => { if (m.type()==='error' && !/ses|Audio|404|ERR_FILE|ERR_FAILED|ERR_CERT|ERR_NAME|ERR_INTERNET/.test(m.text())) hata.push('console: '+m.text()); });
  await p.goto('file://' + SAYFA); await p.waitForTimeout(400);
  let n = 0, shot = 0, tasma = [], gorulen = [];
  const foto = async ad => { await p.waitForTimeout(350); await p.screenshot({ path: `${OUT}/${String(++shot).padStart(2,'0')}_${ad}.png` }); };
  const tasmaBak = async yer => { const w = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (w > 0) tasma.push(yer+':'+w); };
  // VN'i bitene kadar oynat
  const vnOyna = async (ad, fotoAnlar = []) => {
    let i = 0;
    while (await p.$('.vn')) {
      const sec = await p.$('#vnSecim0');
      if (sec) { await foto(ad + '_secim'); await sec.click(); continue; }
      const t = await p.evaluate(() => (document.querySelector('.vn-replik')||{}).textContent || '');
      gorulen.push(t);
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
  console.log('giriş+konuşma', await vnOyna('giris', ['Teknemi aldılar', 'Camda yazıyor', 'Peri mantosunu', 'Buyurun, oturun', 'Bir de…', 'Hiç denediniz']));
  await foto('arastirma');
  const sira = YOL === "set" ? ['Çaycıyla konuşmak','İskele ve Kemal','Bebek\'teki beyaz','Setin sorumlusuyla','Serkan\'ı bulmak']
                             : ['İskele ve Kemal','Serkan\'ı bulmak','Çaycıyla konuşmak','Bebek\'teki beyaz','Setin sorumlusuyla'];
  for (const ad of sira) {
    const el = p.locator('.kaynak', { hasText: ad }).first();
    if (!(await el.count())) { console.log('yok:', ad); continue; }
    if (await el.evaluate(e => e.classList.contains('yetersiz'))) { console.log('hak bitti:', ad); continue; }
    await el.click();
    const s = await vnOyna('ipucu', ['Ne olacak?', 'Hırsız arıyorsanız', 'Bu sezonun', 'Duydum.', 'Set arkası, yemek', 'Kepengin üstüne', 'Nazlı giderken', 'Bu bir itiraf', 'Teknenin sahibinin', 'Dokunmayın, daha', 'Çekimdeyiz dedim']);
    await foto('kart'); await tasmaBak('kart');
    console.log('ipucu', ad, s, 'satır');
    await p.click('.buton:has-text("Araştırmaya dön")');
  }
  await foto('arastirma_son');
  await p.click('.buton:has-text("Kim yaptı?")');
  await foto('kimyapti'); await tasmaBak('kimyapti');
  // İstenen sonucu verecek şüpheli + iki kanıtı motordan bul (yol neyi açtıysa onunla).
  const secim = await p.evaluate(istek => {
    const ky = oyun.durum.aktif.vaka.kim_yapti, kn = oyun.kanitlar().map(x => x.id);
    const kim = (istek === 'dogru' || istek === 'zayif') ? ky.suclu : istek;
    for (const a of kn) for (const b of kn)
      if (a !== b && oyun.suclamaSonucu(kim, [a, b]) === (kim === ky.suclu ? istek : 'yanlis')) return { kim, kanit: [a, b] };
    return null;
  }, SONUC);
  if (!secim) throw new Error('bu yolda "' + SONUC + '" sonucu verecek seçim yok');
  if (!(await p.$(`.ky-secenek[onclick="kySupheli('${secim.kim}')"]`))) throw new Error('şüpheli ekranda yok: ' + secim.kim);
  await p.click(`.ky-secenek[onclick="kySupheli('${secim.kim}')"]`);
  await foto('kimyapti_supheli');
  for (const id of secim.kanit) {
    // Kanıtlar başlık altında kapalı durur: önce o kanıtın başlığını aç.
    const n = await p.evaluate(id => kyGruplar().findIndex(g => g.kanitlar.includes(id)), id);
    if (!(await p.$(`.ky-secenek[onclick="kyKanit('${id}')"]`))) await p.click(`.ky-grup[onclick="kyGrup(${n})"]`);
    await p.click(`.ky-secenek[onclick="kyKanit('${id}')"]`);
  }
  await foto('kimyapti_secili');
  await p.click('.buton:has-text("Suçla")');
  await foto('kimyapti_onay');
  await p.click('.buton:has-text("Evet, suçla")');
  console.log('suçlama', secim.kim, secim.kanit.join('+'), '→', await p.evaluate(() => oyun.durum.aktif.suclama.sonuc));
  console.log('yüzleşme+kovalamaca', await vnOyna('yuzlesme', ['Babana söyleyecek', 'Ben mi?', 'His mi?', '(Cengo bir adım', 'Babam mı?', 'Akşam yemeği']));
  await foto('cozum'); await tasmaBak('cozum');
  await p.click('.buton:has-text("Karara geç")');
  await foto('kararlar'); await tasmaBak('kararlar');
  // Batma uyarısı yeni oyunda yok (sahibinin kararı): karar ekranında ve şeritte aranır.
  const batma = await p.evaluate(() => /batars|açık verirsin|borca girersin|giderini karşılamıyor|kasa boş/.test(document.body.innerText));
  if (batma) hata.push('karar ekranında batma uyarısı var');
  const kararlar = await p.$$('.karar'); console.log('karar sayısı', kararlar.length);
  await kararlar[KARAR].click();
  await foto('sonuc'); await tasmaBak('sonuc');
  await p.click('.buton:has-text("Devam et")');
  gorulen = [];
  const bagY = await p.evaluate(() => oyun.bagYuksek());
  console.log('kapanış', await vnOyna('kapanis', ['Koridor. Peri', 'Cengo merdivenden', 'Teli kilitte', 'Teli Peri']),
    '· bağ', bagY ? 'yüksek' : 'düşük', '→', gorulen.some(t => t.startsWith('Teli Peri')) ? 'sıcak satırlar' : gorulen.some(t => t.startsWith('Teli kilitte')) ? 'soğuk satırlar' : 'iki hâl yok');
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
