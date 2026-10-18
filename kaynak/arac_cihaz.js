// ARAÇ (test değil): arac_yeni_tur.js'in `--cihaz` kipi. Tur oyunu bir kez oynar; seçilen her
// anda bu modül sayfayı sırayla aşağıdaki ekran boylarına getirir, görüntü alır ve ölçer.
// Cihaz elde olmadan yerleşimi denetlemenin yolu bu: tarayıcı ekran boyunu taklit eder.
// Çıktı: kaynak/YENI_UI/cihaz/<an>.png (her anda bütün boylar yan yana) + bayraklar.txt.
// Bayraklar ADAY listesidir, hata listesi değil (arac_akis_denetim.js --bayrak gibi):
// sayısal sorunları yakalar, "kötü duruyor" yargısı karşılaştırma sayfalarına bakan insana kalır.
// Taklit gerçek cihazın aynısı değil: Safari farkları, çentik/alt çubuk payı, yazı tipi çizimi.
const fs = require('fs'), path = require('path');

// Boylar CSS pikseli. "çubuklu" olanlar tarayıcının adres/alt çubuğu düşülmüş görünür alandır —
// sahibinin tabletindeki hata (1280×650) tam o alanda çıkmıştı; ekran boyu tek başına yetmez.
const CIHAZLAR = [
  { ad: 'Pixel 5 (ölçü)', w: 393, h: 851, grup: 'Telefon' },   // ilk sırada: oran karşılaştırmasının referansı
  { ad: 'Küçük Android', w: 360, h: 780, grup: 'Telefon' },
  { ad: 'iPhone SE', w: 375, h: 667, grup: 'Telefon' },
  { ad: 'iPhone 14/15', w: 390, h: 844, grup: 'Telefon' },
  { ad: 'iPhone, Safari çubuklu', w: 390, h: 664, grup: 'Telefon' },
  { ad: 'Pixel 7 / Galaxy S+', w: 412, h: 915, grup: 'Telefon' },
  { ad: 'iPhone Pro Max', w: 430, h: 932, grup: 'Telefon' },
  { ad: 'Telefon yatay', w: 844, h: 390, grup: 'Telefon' },
  { ad: 'iPad mini', w: 744, h: 1133, grup: 'Tablet dikey' },
  { ad: 'iPad Air', w: 820, h: 1180, grup: 'Tablet dikey' },
  { ad: 'Galaxy Tab', w: 800, h: 1280, grup: 'Tablet dikey' },
  { ad: 'iPad Pro 12.9', w: 1024, h: 1366, grup: 'Tablet dikey' },
  { ad: 'iPad mini yatay', w: 1133, h: 744, grup: 'Tablet yatay' },
  { ad: 'iPad Air yatay', w: 1180, h: 820, grup: 'Tablet yatay' },
  { ad: 'Galaxy Tab yatay', w: 1280, h: 800, grup: 'Tablet yatay' },
  { ad: 'Galaxy Tab yatay, çubuklu', w: 1280, h: 650, grup: 'Tablet yatay' },
  { ad: 'iPad Pro yatay', w: 1366, h: 1024, grup: 'Tablet yatay' },
  { ad: 'Dizüstü', w: 1366, h: 768, grup: 'Bilgisayar' },
  { ad: 'Masaüstü', w: 1920, h: 1080, grup: 'Bilgisayar' },
];

// Eşikler — ölçü telefondaki (Pixel 5) yerleşim; bayrak oradan belirgin sapmadır.
const ESIK = {
  boyOrani: 0.12,      // sağ/sol figür boy oranı Pixel 5'tekinden en çok %12 sapabilir (Lâl/Defne sorunu %20 idi)
  arkaGorunen: 0.65,   // 3:4 arka planın en az %65'i görünmeli (ilk tablet sorunu %60 idi; Pixel 5 %82, yatay tablet %68)
  figurPay: 0.35,      // Peri sahne yüksekliğinin en az %35'i (Pixel 5 ~%55)
  kutuPay: 0.45,       // konuşma kutusu ekranın en çok %45'i
  sahneMin: 200,       // sahne en az 200 px yüksek
  hedefMin: 32,        // dokunma hedefi en az 32 px
};

// Seçilen anlar: konuşma anlarının hepsi (tur onları zaten elle seçiyor), diğer ekranların her türünden ilki.
const goruldu = new Set();
function secilsin(ad) {
  if (/_(giris|ipucu|yuzlesme|kapanis|secim)_?\d*$|^acilis/.test(ad)) return true;
  const tur = ad.replace(/^V\d_/, '').replace(/_v\d$/, '');
  if (goruldu.has(tur)) return false;
  goruldu.add(tur); return true;
}

// Sayfanın içinde koşar: o anki boyda ölçüm. object-fit:contain figürün GÖRÜNEN resim kutusunu hesaplar
// (img kutusu değil — kutu sahneden büyük olabilir, resim içinde küçülür).
function olc() {
  const R = e => e && e.getBoundingClientRect();
  const gorunur = e => e && !e.hidden && e.offsetParent !== null && R(e).width > 0;
  const sonuc = { tasma: document.documentElement.scrollWidth - innerWidth, vn: !!document.querySelector('.vn'),
    // Yatay telefonda oyunun üstüne "dikey çevir" uyarısı biner (yeni_arayuz.css); alttaki yerleşim ölçülmez.
    dikeyUyari: getComputedStyle(document.body, '::before').content.includes('dikey') };
  const vn = document.querySelector('.vn'), sahne = document.querySelector('.vn-sahne');
  if (vn && sahne) {
    const s = R(sahne); sonuc.sahne = { w: s.width, h: s.height };
    const kutu = document.querySelector('.vn-kutu-alani');
    if (kutu) sonuc.kutuPay = R(kutu).height / R(vn).height;
    const arka = [...document.querySelectorAll('.vn-arka img')].filter(i => i.naturalWidth).pop();
    if (arka) {
      const oran = (s.width / s.height) / (arka.naturalWidth / arka.naturalHeight);
      sonuc.arkaGorunen = Math.min(oran, 1 / oran);      // cover: kısa kalan eksende görünen pay
    }
    const kare = document.querySelector('.vn-kare'), fig = document.querySelector('.vn-figurler');
    if (!kare && fig && !fig.classList.contains('cekilmis')) {
      sonuc.figur = {};
      for (const yan of ['sol', 'sag']) {
        const kap = document.querySelector('.vn-figur.' + yan), img = kap && kap.querySelector('img');
        if (!gorunur(kap) || !img || !img.naturalWidth) continue;
        const r = R(img), k = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight);
        const h = img.naturalHeight * k;
        sonuc.figur[yan] = { ad: img.alt, h, ust: r.bottom - h - s.top };
      }
    }
  }
  sonuc.kucukHedef = [...document.querySelectorAll('.vn-gec,.vn-secim,.buton,.kaynak,.karar,.ust-btn,.ky-secenek,.ky-oku,.ky-yuva.dolu,.dosya-afis')]
    .filter(gorunur).map(e => ({ ad: (e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 18), r: R(e) }))
    .filter(x => x.r.height < 32 || x.r.width < 32).map(x => x.ad + ' ' + Math.round(x.r.width) + '×' + Math.round(x.r.height));
  return sonuc;
}

const kayit = [];   // { an, cihaz, olcu, jpg, bayrak[] }
let kisilerBakildi = false;

function bayraklar(o, ref) {
  const b = [];
  if (o.dikeyUyari) return b;
  if (o.tasma > 0) b.push('yatay taşma ' + o.tasma + ' px');
  if (o.sahne && o.sahne.h < ESIK.sahneMin) b.push('sahne kısa: ' + Math.round(o.sahne.h) + ' px');
  if (o.kutuPay > ESIK.kutuPay) b.push('kutu ekranın %' + Math.round(o.kutuPay * 100) + "'i");
  if (o.arkaGorunen && o.arkaGorunen < ESIK.arkaGorunen) b.push('arka plan %' + Math.round(o.arkaGorunen * 100) + ' görünüyor');
  if (o.figur) {
    for (const f of Object.values(o.figur)) if (f.ust < -2) b.push(f.ad + ' başı kadraj dışı (' + Math.round(f.ust) + ' px)');
    const { sol, sag } = o.figur;
    if (sol && o.sahne && sol.h / o.sahne.h < ESIK.figurPay) b.push(sol.ad + ' küçük: sahnenin %' + Math.round(sol.h / o.sahne.h * 100) + "'i");
    if (sol && sag && ref && ref.figur && ref.figur.sol && ref.figur.sag && ref.figur.sag.ad === sag.ad) {
      const sapma = (sag.h / sol.h) / (ref.figur.sag.h / ref.figur.sol.h) - 1;
      if (Math.abs(sapma) > ESIK.boyOrani) b.push(sag.ad + ' / ' + sol.ad + ' boy oranı Pixel 5\'ten %' + Math.round(sapma * 100) + ' farklı');
    }
  }
  for (const k of o.kucukHedef) b.push('küçük dokunma hedefi: ' + k);
  return b;
}

async function anTara(p, an) {
  const ilk = p.viewportSize();
  let ref = null;
  for (const c of CIHAZLAR) {
    await p.setViewportSize({ width: c.w, height: c.h });
    await p.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
    await p.waitForTimeout(60);
    const o = await p.evaluate(olc);
    if (!ref) ref = o;
    const jpg = (await p.screenshot({ type: 'jpeg', quality: 70, scale: 'css' })).toString('base64');
    kayit.push({ an, cihaz: c, olcu: o, jpg, bayrak: bayraklar(o, ref) });
  }
  await p.setViewportSize(ilk);
  await p.waitForTimeout(60);
}

// Tur her fotoğraf anında çağırır.
async function tara(p, ad) {
  if (!secilsin(ad)) return;
  await anTara(p, ad);
  // Kişiler paneli bir kez: konuşmanın üstünde açılan pencere (tabletteki genişlik kuralı ona ayrı).
  if (!kisilerBakildi && await p.$('#vnKisi')) {
    kisilerBakildi = true;
    await p.click('#vnKisi'); await p.waitForTimeout(150);
    await anTara(p, ad + '_kisiler');
    await p.click('#vnKisilerKapat'); await p.waitForTimeout(100);
  }
}

// Tur bitince: her an için karşılaştırma sayfası + bayrak dökümü.
async function rapor(tarayici, outDir) {
  const dir = path.join(outDir, 'cihaz'); fs.mkdirSync(dir, { recursive: true });
  const anlar = [...new Set(kayit.map(k => k.an))];
  const sayfa = await tarayici.newPage({ viewport: { width: 2400, height: 800 } });
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const satirlar = [];
  for (const [i, an] of anlar.entries()) {
    const ks = kayit.filter(k => k.an === an);
    const gruplar = [...new Set(CIHAZLAR.map(c => c.grup))];
    const html = `<html><body style="margin:0;padding:16px;background:#fff;font:14px sans-serif;width:2368px">
      <h2 style="margin:0 0 10px">${esc(an)}</h2>` + gruplar.map(g => `<h3 style="margin:14px 0 6px">${g}</h3>
      <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:flex-start">` + ks.filter(k => k.cihaz.grup === g).map(k => {
        const H = 340, W = Math.round(k.cihaz.w * H / k.cihaz.h);
        return `<div style="width:${Math.max(W, 150)}px"><img style="height:${H}px;width:${W}px;display:block;border:1px solid #999" src="data:image/jpeg;base64,${k.jpg}">
          <div style="font-weight:bold;margin-top:4px">${esc(k.cihaz.ad)}</div><div style="color:#666">${k.cihaz.w}×${k.cihaz.h}${k.olcu.dikeyUyari ? ' · dikey uyarısı' : ''}</div>
          ${k.bayrak.map(x => `<div style="color:#c00">⚑ ${esc(x)}</div>`).join('')}</div>`;
      }).join('') + '</div>').join('') + '</body></html>';
    await sayfa.setContent(html);
    await sayfa.screenshot({ path: path.join(dir, String(i + 1).padStart(2, '0') + '_' + an + '.png'), fullPage: true });
    for (const k of ks) for (const x of k.bayrak) satirlar.push(`${an}\t${k.cihaz.ad} ${k.cihaz.w}×${k.cihaz.h}\t${x}`);
  }
  await sayfa.close();
  fs.writeFileSync(path.join(dir, 'bayraklar.txt'), satirlar.join('\n') + '\n');
  // Özet: aynı bayrak türü kaç anda, hangi cihazlarda.
  const ozet = {};
  for (const s of satirlar) { const [an, cihaz, x] = s.split('\t'); const tur = x.replace(/%-?\d+('i)?|-?\d+(\.\d+)? ?px|\d+×\d+|\(.*?\)|: *$/g, '').replace(/\s+/g, ' ').trim();
    (ozet[tur] = ozet[tur] || { anlar: new Set(), cihazlar: new Set() }).anlar.add(an); ozet[tur].cihazlar.add(cihaz); }
  console.log(`cihaz: ${anlar.length} an × ${CIHAZLAR.length} boy → ${path.relative(process.cwd(), dir)}/`);
  if (!satirlar.length) console.log('✓ cihaz: bayrak yok');
  else {
    console.log(`⚑ cihaz: ${satirlar.length} bayrak (aday — karşılaştırma sayfalarına bak; ayrıntı bayraklar.txt)`);
    for (const [tur, v] of Object.entries(ozet)) console.log(`  ${tur} — ${v.anlar.size} an · ${[...v.cihazlar].join(', ')}`);
  }
}

module.exports = { CIHAZLAR, ESIK, tara, rapor };
