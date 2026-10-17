// ARAÇ (test değil): YENİ OYUNU Pixel 5'te gerçek tıklamayla baştan sona oynatır —
// açılış, Vaka 1 girişi, iki araştırma yolundan biri, Kim yaptı? (seçilen sonuçla),
// yüzleşme + kovalamaca, bir karar, kapanış, kayıt-sürdürme. JS hatası, yatay taşma ve konuşma ekranının bitip bitmediğine bakar;
// önemli anların ekran görüntüsünü kaynak/YENI_UI/'ye yazar (gözle bakmak için).
// Kullanım:
//   cd kaynak && node build_html.js yeni && node arac_yeni_tur.js [karar_sırası] [set|dukkan] [dogru|zayif|<şüpheli id>]
//   Vaka 2: node arac_yeni_tur.js [karar_sırası] [ortu|vale|terzi|defne] [dogru|zayif|lal|tolga]
//   (Vaka 1 önce hızlı oynanır: V1 → V2 geçişi ve kayıt da böylece denenir.)
//   Vaka 3: node arac_yeni_tur.js [karar_sırası] [kod|foto|borc|badem|cozmez] [dogru|zayif|kenan|gizem]
//   (Vaka 1 ve 2 önce hızlı oynanır: V2 → V3 geçişi de böylece denenir.)
//   --tablet (herhangi bir yerde): Pixel 5 yerine dikey tablet (800×1280) — yeni_arayuz.css'teki
//   tablet eşiği (min-width:600px, min-height:1050px) devreye girer; tam sayfa görüntü alır.
//   --cihaz: seçilen her anda 19 ekran boyunda (telefon, tablet dikey/yatay, bilgisayar) görüntü alır
//   ve yerleşimi ölçer — ayrıntı arac_cihaz.js; çıktı YENI_UI/cihaz/ (karşılaştırma sayfaları + bayraklar).
//   --hepsi: incelenen vakanın (V1, V2 ya da V3) HER konuşma satırının görüntüsünü YENI_UI/satir/'a yazar
//   (JPEG) ve satir/dokum.txt'ye satır satır döker: konuşan, kime, arka plan, kare, soldaki/sağdaki
//   figürün sprite anahtarı, metin. Görselli tur denetimi (adım 11) bununla yapılır.
// Yazı tipi (Google Fonts) ve ses dosyası yükleme hataları çevrimdışı ortamda
// beklenir; sayılmaz. Seçicilerde text= kullanılmaz (bkz. CLAUDE.md).
const { chromium, devices } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path'), fs = require('fs');
const SAYFA = path.join(__dirname, '..', 'yeni', 'index.html');
const OUT = path.join(__dirname, 'YENI_UI'); fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) fs.rmSync(path.join(OUT, f), { recursive: true });
const TABLET = process.argv.includes('--tablet'), CIHAZ = process.argv.includes('--cihaz') && require('./arac_cihaz.js');
const HEPSI = process.argv.includes('--hepsi');
const ARG = process.argv.filter(a => a !== '--tablet' && a !== '--cihaz' && a !== '--hepsi');
const KARAR = Number(ARG[2]||0), YOL = ARG[3]||"set", SONUC = ARG[4]||"dogru";
// Vaka 2: yol adı ortu|vale|terzi|defne verilirse Vaka 1 hızlı oynanır, sonra Vaka 2.
const YOL2 = ["ortu", "vale", "terzi", "defne"].includes(YOL) ? YOL : null;
// Vaka 3: yol adı kod|foto|borc|badem|cozmez verilirse Vaka 1 ve 2 hızlı oynanır, sonra Vaka 3.
const YOL3 = ["kod", "foto", "borc", "badem", "cozmez"].includes(YOL) ? YOL : null;
const VAKA = YOL3 ? "V3" : YOL2 ? "V2" : "V1";
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const cihaz = TABLET ? { viewport: { width: 800, height: 1280 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true } : devices['Pixel 5'];
  const p = await b.newPage({ ...cihaz, reducedMotion: 'reduce' });
  const hata = []; p.on('pageerror', e => hata.push(e.message)); p.on('console', m => { if (m.type()==='error' && !/ses|Audio|404|ERR_FILE|ERR_FAILED|ERR_CERT|ERR_NAME|ERR_INTERNET/.test(m.text())) hata.push('console: '+m.text()); });
  await p.goto('file://' + SAYFA); await p.waitForTimeout(400);
  // --hepsi: o an gösterilen satırı yakalamak için vnSatirGoster sarılır (oyunun kendisi tutmuyor).
  if (HEPSI) await p.evaluate(() => { const o = vnSatirGoster; window.vnSatirGoster = function (s) { window.__satir = s; return o(s); }; });
  // Tablet eşiği tutmadıysa (CSS değişti, .vn yine 480 px'e kilitlendi) görüntüler yanıltır: söyle.
  if (TABLET) { const g = await p.evaluate(() => (document.querySelector('.vn')||{getBoundingClientRect:()=>({width:0})}).getBoundingClientRect().width);
    if (g <= 600) hata.push('tablet: konuşma ekranı ' + Math.round(g) + ' px — tablet eşiği devreye girmedi'); else console.log('tablet: konuşma ekranı', Math.round(g), 'px'); }
  let n = 0, shot = 0, tasma = [], gorulen = [];
  const foto = async ad => { await p.waitForTimeout(350); await p.screenshot({ fullPage: TABLET, path: `${OUT}/${String(++shot).padStart(2,'0')}_${ad}.png` });
    if (CIHAZ) await CIHAZ.tara(p, ad); };
  const tasmaBak = async yer => { const w = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (w > 0) tasma.push(yer+':'+w); };
  // --hepsi: incelenen vakanın her satırı → satir/NNN_ad.jpg + dokum.txt
  let incelenen = null, sn = 0; const SDIR = path.join(OUT, 'satir'), dokum = [], adsiz = [];
  if (HEPSI) fs.mkdirSync(SDIR, { recursive: true });
  const satirFoto = async ad => {
    await p.waitForTimeout(250);
    const d = await p.evaluate(() => {
      const s = window.__satir || {}, f = id => { const e = document.getElementById(id); return e && !e.hidden ? (e.dataset.src || '?') : '-'; };
      return { k: s.k, kime: s.kime || '', arka: vn.arka || '', kare: s.kare || '', sol: f('vnSol'), sag: f('vnSag'),
        cekilmis: document.getElementById('vnFig').classList.contains('cekilmis'),
        m: (document.querySelector('.vn-replik') || {}).textContent || '',
        // Anlatı satırında adı geçen ama ekranda olmayan kişi (kare yoksa). Ad = künyedeki adın ilk kelimesi.
        yok: (!s.kare && s.k === 'not') ? Object.keys(Object.assign({}, SAHNE_KANON.figurler, { peri: 1, cengo: 1 }, SAHNE_KANON.sesler || {}))
          .filter(k => { const ad = String(vnAd(k)).split(/\s+/)[0]; const m = s.m || '';
            if (!ad || ad.length < 3 || !new RegExp('(^|[^\\p{L}])' + ad + '(?![\\p{L}])', 'u').test(m) && !m.includes(ad + "'")) return false;
            const g = ['vnSol', 'vnSag'].map(id => document.getElementById(id)).filter(e => !e.hidden && !document.getElementById('vnFig').classList.contains('cekilmis')).map(e => e.dataset.src || '');
            return !g.some(x => x.replace(/^sol:/, '').split('.')[0] === k); }) : [] };
    });
    if (d.yok.length) adsiz.push(`${String(sn + 1).padStart(3, '0')} ${ad} | ekranda yok: ${d.yok.join(', ')} | ${d.m}`);
    const no = String(++sn).padStart(3, '0');
    await p.screenshot({ path: `${SDIR}/${no}_${ad}.jpg`, type: 'jpeg', quality: 55 });
    dokum.push(`${no} ${ad} | ${d.k}${d.kime ? '→' + d.kime : ''} | ${d.arka}${d.kare ? ' KARE ' + d.kare : ''} | sol ${d.cekilmis ? '(çekik) ' : ''}${d.sol} | sağ ${d.sag} | ${d.m}`);
  };
  // VN'i bitene kadar oynat
  const vnOyna = async (ad, fotoAnlar = []) => {
    let i = 0;
    while (await p.$('.vn')) {
      const sec = await p.$('#vnSecim0');
      if (sec) { await foto(ad + '_secim'); await sec.click(); continue; }
      const t = await p.evaluate(() => (document.querySelector('.vn-replik')||{}).textContent || '');
      gorulen.push(t);
      if (HEPSI && incelenen && ad.startsWith(incelenen)) await satirFoto(ad);
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
    const sicak = { V1: 'Teli Peri', V2: 'Siz evlenseniz', V3: 'Gizem tabladan' }[vid], soguk = { V1: 'Teli kilitte', V2: 'Cengo kravatını çözüp', V3: 'Ben çıkıyorum' }[vid];
    console.log(`[${vid}] kapanış`, await vnOyna(vid + '_kapanis', ['Koridor. Peri', 'Cengo merdivenden', 'Teli kilitte', 'Teli Peri', 'Hiç unutmadım', 'Geçen hafta elime', 'Siz evlenseniz', 'Takım yarın']),
      '· bağ', bagY ? 'yüksek' : 'düşük', '→', gorulen.some(t => t.startsWith(sicak)) ? 'sıcak satırlar' : gorulen.some(t => t.startsWith(soguk)) ? 'soğuk satırlar' : 'iki hâl yok',
      '· kasa', await p.evaluate(() => oyun.durum.para));
    await foto(vid + '_son');
    // Kaçırılan ipuçları ekranı (reklamla izlenir; deneme reklamı) — varsa masaya dön.
    if (await p.$('#kacanDon')) { await foto(vid + '_kacan'); await p.click('#kacanDon'); await p.waitForTimeout(200); }
  };
  const V1_SIRA = YOL === "set" ? ['Çaycıyla konuşmak','İskele ve Kemal','Bebek\'teki beyaz','Setin sorumlusuyla','Serkan\'ı bulmak']
                                : ['İskele ve Kemal','Serkan\'ı bulmak','Çaycıyla konuşmak','Bebek\'teki beyaz','Setin sorumlusuyla'];
  // Vaka 2 yolları (form §7): ortu = atölye + Gülsüm (aha); vale = atölye + vale (+ terzi);
  // terzi = vale → terzi + nedime provası; defne = Defne + prova + Gülsüm (çözmeyen yol, zayıf ya da yanlış için).
  const V2_SIRA = { ortu: ["Lâl Hanım'ın atölyesi", 'Usta Gülsüm', "Defne'yle konuşmak"],
                    vale: ["Lâl Hanım'ın atölyesi", 'Sokaktaki vale', "Kurtuluş'taki terzi"],
                    terzi: ['Sokaktaki vale', "Kurtuluş'taki terzi", 'Nedime provası'],
                    defne: ["Defne'yle konuşmak", 'Nedime provası', 'Usta Gülsüm'] }[YOL2] || [];
  // Vaka 3 yolları (form §7): kod = dükkân + alarm (+ Gizem); foto = alarm + Gizem (aha);
  // borc = alarm + toptancı; badem = Kenan → Badem + dükkân; cozmez = Kenan → Badem + alarm (zayıf/yanlış için).
  const V3_SIRA = { kod: ["Susam'ın merkezi", 'Alarmcı Sedat', "Gizem'le konuşmak"],
                    foto: ['Alarmcı Sedat', "Gizem'le konuşmak", "Kenan'la konuşmak"],
                    borc: ['Alarmcı Sedat', 'Un toptancısı', "Kenan'la konuşmak"],
                    badem: ["Kenan'la konuşmak", "Kadıköy'deki pastane", "Susam'ın merkezi"],
                    cozmez: ["Kenan'la konuşmak", "Kadıköy'deki pastane", 'Alarmcı Sedat'] }[YOL3] || [];
  incelenen = VAKA;
  if (VAKA === 'V3') {
    await vakaOyna('V1', ['Çaycıyla konuşmak','İskele ve Kemal','Bebek\'teki beyaz','Setin sorumlusuyla'], 0, 'dogru');
    await vakaOyna('V2', ["Lâl Hanım'ın atölyesi", 'Usta Gülsüm', "Defne'yle konuşmak"], 0, 'dogru');
    await foto('masa_v3'); await tasmaBak('masa_v3');
    await vakaOyna('V3', V3_SIRA, KARAR, SONUC);
  } else if (VAKA === 'V2') {
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
  if (HEPSI) { fs.writeFileSync(path.join(SDIR, 'dokum.txt'), dokum.join('\n') + '\n'); console.log('satır görüntüsü', sn, '→ YENI_UI/satir/');
    fs.writeFileSync(path.join(SDIR, 'adi_gecen_yok.txt'), adsiz.join('\n') + '\n');
    console.log(adsiz.length ? '⚑ anlatıda adı geçen ama ekranda olmayan: ' + adsiz.length + ' satır (aday; satir/adi_gecen_yok.txt)\n  ' + adsiz.join('\n  ') : '✓ anlatıda adı geçen herkes ekranda'); }
  if (CIHAZ) await CIHAZ.rapor(b, OUT);
  await b.close();
})().catch(e => { console.error('TUR HATASI', e.message); process.exit(1); });
