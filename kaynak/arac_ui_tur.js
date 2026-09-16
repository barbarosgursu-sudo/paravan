// ARAÇ (test değil): oyunu Pixel 5 profilinde gerçek tıklamayla baştan sona oynatır;
// JS hatası, yatay taşma, küçük dokunma hedefi ve kayıt-sürdürme kontrolü yapar.
// Kullanım: cd kaynak && node arac_ui_tur.js   (Playwright + Chromium gerekir)
// ses/ dosyalarına file:// üzerinden CORS hatası NORMALDİR, yok sayılır.
const { chromium, devices } = require(process.env.PW || '/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctx = await b.newContext({ ...devices['Pixel 5'] });
  const p = await ctx.newPage();
  const hatalar=[]; p.on('pageerror', e=>hatalar.push("pageerror: "+e.message)); p.on('console', m=>{ if(m.type()==='error' && !/ses\/|CORS|ERR_FAILED|ERR_FILE_NOT_FOUND/.test(m.text())) hatalar.push("console: "+m.text()); });
  const tasma=[]; const kucukHedef=[];
  async function ekranKontrol(ad){
    const r = await p.evaluate(()=>{
      const de=document.documentElement;
      const kucuk=[...document.querySelectorAll('.kaynak,.karar,.buton,.ust-btn,.dosya-afis')].map(e=>{const r=e.getBoundingClientRect();return {cls:e.className.split(' ')[0],h:Math.round(r.height)};}).filter(x=>x.h>0&&x.h<40);
      return {sw:de.scrollWidth, cw:de.clientWidth, kucuk};
    });
    if(r.sw>r.cw+1) tasma.push(ad+" ("+r.sw+">"+r.cw+")");
    for(const k of r.kucuk) kucukHedef.push(ad+": "+k.cls+" "+k.h+"px");
  }
  await p.goto('file://' + require('path').resolve(__dirname, '../index.html')); await p.waitForTimeout(400);
  await ekranKontrol("prolog");
  // prolog: dokunarak ilerle
  for(let i=0;i<8;i++){ const btn=await p.$('.buton'); if(!btn) break; const t=await btn.innerText(); await btn.click(); await p.waitForTimeout(120); if(/başla|Başla/i.test(t)) break; }
  await ekranKontrol("masa");
  let ekran=0, sayac=0;
  const gecmis=[];
  while(sayac++<60){
    const masa = await p.$$('.dosya-afis');
    if(!masa.length){ break; }
    // yan iş varsa önce onu al
    const hedef = masa[masa.length-1];
    const baslik = await hedef.$eval('h2', e=>e.innerText);
    await hedef.click(); await p.waitForTimeout(150); await ekranKontrol("giriş "+baslik);
    await p.click('.buton'); await p.waitForTimeout(150); await ekranKontrol("araştırma "+baslik);
    // tüm kaynakları sırayla dene
    for(let i=0;i<8;i++){
      const k = await p.$('.kaynak:not(.yetersiz)'); if(!k) break;
      await k.click(); await p.waitForTimeout(120); await ekranKontrol("kanıt "+baslik);
      const geri = await p.$('.buton'); await geri.click(); await p.waitForTimeout(120);
    }
    // Kişiler paneline bak (YAN-A sonrası künye sızıntısı için)
    await p.click('text=Kişiler'); await p.waitForTimeout(150); await ekranKontrol("kişiler "+baslik);
    if(baslik.includes("Tanık")) { await p.screenshot({path:'UI_kisiler_V3_oncesi.png', fullPage:true}); }
    await p.click('text=Geri'); await p.waitForTimeout(120);
    const kararBtn = await p.$('.buton:has-text("Karar")'); if(!kararBtn){ hatalar.push("KARAR DÜĞMESİ YOK: "+baslik); break; }
    await kararBtn.click(); await p.waitForTimeout(150); await ekranKontrol("karar "+baslik);
    const kararlar = await p.$$('.karar'); await kararlar[0].click(); await p.waitForTimeout(200); await ekranKontrol("sonuç "+baslik);
    gecmis.push(baslik);
    const devam = await p.$('.buton'); await devam.click(); await p.waitForTimeout(150); await ekranKontrol("masa "+gecmis.length);
  }
  await ekranKontrol("son");
  await p.screenshot({path:'UI_son.png', fullPage:true});
  console.log("oynanan:", gecmis.join(" → "));
  console.log("JS/console hataları:", hatalar.length?hatalar:"yok");
  console.log("yatay taşma:", tasma.length?tasma:"yok");
  console.log("40px altı dokunma hedefi:", kucukHedef.length?[...new Set(kucukHedef)].slice(0,12):"yok");
  // kayıt-sürdürme: sayfayı yenile
  await p.reload(); await p.waitForTimeout(400);
  console.log("yenilemeden sonra ekran:", await p.evaluate(()=>document.querySelector('h1')?.innerText));
  await b.close();
})();
