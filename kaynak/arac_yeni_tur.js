// ARAÇ (test değil): YENİ OYUNU Pixel 5'te gerçek tıklamayla baştan sona oynatır —
// açılış, Vaka 1 girişi, iki araştırma yolundan biri, Kim yaptı? (seçilen sonuçla),
// yüzleşme + kovalamaca, bir karar, kapanış, kayıt-sürdürme. JS hatası, yatay taşma ve konuşma ekranının bitip bitmediğine bakar;
// önemli anların ekran görüntüsünü kaynak/YENI_UI/'ye yazar (gözle bakmak için).
// Kullanım:
//   cd kaynak && node build_html.js yeni && node arac_yeni_tur.js [karar_sırası] [set|dukkan] [dogru|zayif|<şüpheli id>]
//   Vaka 2: node arac_yeni_tur.js [karar_sırası] [ortu|vale|terzi|defne] [dogru|zayif|lal|tolga]
//   (Vaka 1 önce hızlı oynanır: V1 → V2 geçişi ve kayıt da böylece denenir.)
// Yazı tipi (Google Fonts) ve ses dosyası yükleme hataları çevrimdışı ortamda
// beklenir; sayılmaz. Seçicilerde text= kullanılmaz (bkz. CLAUDE.md).
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path'), fs = require('fs');
const SAYFA = path.join(__dirname, '..', 'yeni', 'index.html');
const OUT = path.join(__dirname, 'YENI_UI'); fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) fs.unlinkSync(path.join(OUT, f));
const KARAR = Number(process.argv[2]||0), YOL = process.argv[3]||"set", SONUC = process.argv[4]||"dogru";
// Vaka 2: yol adı ortu|vale|terzi|defne verilirse Vaka 1 hızlı oynanır, sonra Vaka 2.
const YOL2 = ["ortu", "vale", "terzi", "defne"].includes(YOL) ? YOL : null, VAKA = YOL2 ? "V2" : "V1";
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
  // Bir vakayı masadan kapanışa kadar oynatır. sira: açılacak ipuçlarının adları (hak bitene kadar).
  const vakaOyna = async (vid, sira, karar, sonuc) => {
    await p.click('.dosya-afis');
    console.log(`[${vid}] giriş+konuşma`, await vnOyna(vid + '_giris', ['Teknemi aldılar', 'Camda yazıyor', 'Peri mantosunu', 'Kızım, sen', 'Buyurun, oturun', 'Bir de…', 'Hiç denediniz', 'Paravan Dedektiflik?', 'Peri masanın kenarına', 'Peri masanın altına', 'Elli bin']));
    await foto(vid + '_arastirma');
    for (const ad of sira) {
      const el = p.locator('.kaynak', { hasText: ad }).first();
      if (!(await el.count())) { console.log('yok:', ad); continue; }
      if (await el.evaluate(e => e.classList.contains('yetersiz'))) { console.log('hak bitti:', ad); continue; }
      await el.click();
      const s = await vnOyna(vid + '_ipucu', ['Ne olacak?', 'Hırsız arıyorsanız', 'Bu sezonun', 'Duydum.', 'Set arkası, yemek', 'Kepengin üstüne', 'Nazlı giderken', 'Bu bir itiraf', 'Teknenin sahibinin', 'Dokunmayın, daha', 'Çekimdeyiz dedim', "(Peri'yi baştan",
        'Siz… Pervin?', 'Dokuzda indim', 'Ben gelinliğe örtü', 'Sabah geldim', 'Sekiz buçukta', 'Gelin.', 'Biliyorum kaç kişi', 'Cengo, kolunda', 'Canım, cumartesi', 'Kraliçe.', 'Kuyruğu kesilecek']);
      await foto(vid + '_kart'); await tasmaBak('kart');
      console.log(`[${vid}] ipucu`, ad, s, 'satır');
      await p.click('.buton:has-text("Araştırmaya dön")');
    }
    await foto(vid + '_arastirma_son');
    await p.click('.buton:has-text("Kim yaptı?")');
    await foto(vid + '_kimyapti'); await tasmaBak('kimyapti');
    // İstenen sonucu verecek şüpheli + iki kanıtı motordan bul (yol neyi açtıysa onunla).
    const secim = await p.evaluate(istek => {
      const ky = oyun.durum.aktif.vaka.kim_yapti, kn = oyun.kanitlar().map(x => x.id);
      const kim = (istek === 'dogru' || istek === 'zayif') ? ky.suclu : istek;
      for (const a of kn) for (const b of kn)
        if (a !== b && oyun.suclamaSonucu(kim, [a, b]) === (kim === ky.suclu ? istek : 'yanlis')) return { kim, kanit: [a, b] };
      return null;
    }, sonuc);
    if (!secim) throw new Error(vid + ': bu yolda "' + sonuc + '" sonucu verecek seçim yok');
    if (!(await p.$(`.ky-secenek[onclick="kySupheli('${secim.kim}')"]`))) throw new Error('şüpheli ekranda yok: ' + secim.kim);
    await p.click(`.ky-secenek[onclick="kySupheli('${secim.kim}')"]`);
    await foto(vid + '_kimyapti_supheli');
    for (const id of secim.kanit) {
      // Kanıtlar başlık altında kapalı durur: önce o kanıtın başlığını aç.
      const n = await p.evaluate(id => kyGruplar().findIndex(g => g.kanitlar.includes(id)), id);
      if (!(await p.$(`.ky-secenek[onclick="kyKanit('${id}')"]`))) await p.click(`.ky-grup[onclick="kyGrup(${n})"]`);
      await p.click(`.ky-secenek[onclick="kyKanit('${id}')"]`);
    }
    await foto(vid + '_kimyapti_secili');
    await p.click('.buton:has-text("Suçla")');
    await foto(vid + '_kimyapti_onay');
    await p.click('.buton:has-text("Evet, suçla")');
    console.log(`[${vid}] suçlama`, secim.kim, secim.kanit.join('+'), '→', await p.evaluate(() => oyun.durum.aktif.suclama.sonuc));
    console.log(`[${vid}] yüzleşme+kovalamaca`, await vnOyna(vid + '_yuzlesme', ['Babana söyleyecek', 'Ben mi?', 'His mi?', '(Cengo bir adım', 'Babam mı?', 'Akşam yemeği',
      'Kızım?', 'Ben mi canım?', 'Defne yalınayak', 'Peri, Defne', 'Peri kremalı', 'Buketi tutan', 'Tamam. Ben aldım', 'Garson Peri']));
    await foto(vid + '_cozum'); await tasmaBak('cozum');
    await p.click('.buton:has-text("Karara geç")');
    await foto(vid + '_kararlar'); await tasmaBak('kararlar');
    // Batma uyarısı yeni oyunda yok (sahibinin kararı): karar ekranında ve şeritte aranır.
    const batma = await p.evaluate(() => /batars|açık verirsin|borca girersin|giderini karşılamıyor|kasa boş/.test(document.body.innerText));
    if (batma) hata.push(vid + ': karar ekranında batma uyarısı var');
    const kararlar = await p.$$('.karar'); console.log(`[${vid}] karar sayısı`, kararlar.length);
    await kararlar[karar].click();
    await foto(vid + '_sonuc'); await tasmaBak('sonuc');
    await p.click('.buton:has-text("Devam et")');
    gorulen = [];
    const bagY = await p.evaluate(() => oyun.bagYuksek());
    const sicak = { V1: 'Teli Peri', V2: 'Siz evlenseniz' }[vid], soguk = { V1: 'Teli kilitte', V2: 'Cengo kravatını çözüp' }[vid];
    console.log(`[${vid}] kapanış`, await vnOyna(vid + '_kapanis', ['Koridor. Peri', 'Cengo merdivenden', 'Teli kilitte', 'Teli Peri', 'Hiç unutmadım', 'Geçen hafta elime', 'Siz evlenseniz', 'Takım yarın']),
      '· bağ', bagY ? 'yüksek' : 'düşük', '→', gorulen.some(t => t.startsWith(sicak)) ? 'sıcak satırlar' : gorulen.some(t => t.startsWith(soguk)) ? 'soğuk satırlar' : 'iki hâl yok',
      '· kasa', await p.evaluate(() => oyun.durum.para));
    await foto(vid + '_son');
  };
  const V1_SIRA = YOL === "set" ? ['Çaycıyla konuşmak','İskele ve Kemal','Bebek\'teki beyaz','Setin sorumlusuyla','Serkan\'ı bulmak']
                                : ['İskele ve Kemal','Serkan\'ı bulmak','Çaycıyla konuşmak','Bebek\'teki beyaz','Setin sorumlusuyla'];
  // Vaka 2 yolları (form §7): ortu = atölye + Gülsüm (aha); vale = atölye + vale (+ terzi);
  // terzi = vale → terzi + nedime provası; defne = Defne + prova + Gülsüm (çözmeyen yol, zayıf ya da yanlış için).
  const V2_SIRA = { ortu: ["Lâl Hanım'ın atölyesi", 'Usta Gülsüm', "Defne'yle konuşmak"],
                    vale: ["Lâl Hanım'ın atölyesi", 'Sokaktaki vale', "Kurtuluş'taki terzi"],
                    terzi: ['Sokaktaki vale', "Kurtuluş'taki terzi", 'Nedime provası'],
                    defne: ["Defne'yle konuşmak", 'Nedime provası', 'Usta Gülsüm'] }[YOL2] || [];
  if (VAKA === 'V2') {
    // Vaka 1 hızlı geçilir (ilk yol, doğru, ilk karar); asıl tur Vaka 2.
    await vakaOyna('V1', ['Çaycıyla konuşmak','İskele ve Kemal','Bebek\'teki beyaz','Setin sorumlusuyla'], 0, 'dogru');
    await foto('masa_v2'); await tasmaBak('masa_v2');
    await vakaOyna('V2', V2_SIRA, KARAR, SONUC);
  } else await vakaOyna('V1', V1_SIRA, KARAR, SONUC);
  // kayıt-sürdürme: yeniden yükle
  await p.reload(); await p.waitForTimeout(400); await foto('yeniden');
  const anahtar = await p.evaluate(() => Object.keys(localStorage));
  console.log('kayıt anahtarı', anahtar.join(','), '· tıklama', n);
  console.log(tasma.length ? '✗ yatay taşma: ' + tasma.join(' ') : '✓ yatay taşma yok');
  console.log(hata.length ? '✗ hata:\n  ' + hata.join('\n  ') : '✓ JS hatası yok');
  if (tasma.length || hata.length) process.exitCode = 1;
  await b.close();
})().catch(e => { console.error('TUR HATASI', e.message); process.exit(1); });
