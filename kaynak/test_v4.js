const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== YOL A: Kaya'nın kayıtlarına BAKMIŞ (kaya_kayit_gordu=true) ===");
let o=new Oyun(g); o.durum.seeds.kaya_kayit_gordu=true;
let gr=o.vakaBaslat("V4");
k("giriş 'zaten görmüştü' varyantı", gr.giris.includes("zaten görmüştü"));
k("gizemli_odeme girişte açıldı", o.bilinenler().includes("gizemli_odeme"));
k("odeme_iz baştan açık (needs karşılandı)", o.acikKaynaklar().some(x=>x.id==="odeme_iz"));

console.log("\n=== YOL B: BAKMAMIŞ (varsayılan, Cengo tetikler) ===");
let o2=new Oyun(g);  // seed yok
let gr2=o2.vakaBaslat("V4");
k("giriş 'Cengo geldi' varyantı", gr2.giris.includes("Cengo elinde bir kağıtla"));
k("YOL B'de de gizemli_odeme açıldı", o2.bilinenler().includes("gizemli_odeme"));
console.log("   → İki giriş de aynı olguyla başlıyor; sonrası birebir aynı.");

console.log("\n=== TAM KEŞİF: iyilik_tam → şefkatli kararlar ===");
let o3=new Oyun(g); o3.durum.seeds.kaya_kayit_gordu=true; o3.vakaBaslat("V4");
["odeme_iz","cocuk_bul","hastane_kayit","aile_gorusme"].forEach(id=>o3.kaynakAc(id));
k("odeme_kayaya_ait türedi", o3.bilinenler().includes("odeme_kayaya_ait"));
k("iyilik_tam türedi", o3.bilinenler().includes("iyilik_tam"));
k("aileye_soyle AÇIK", o3.acikKararlar().some(x=>x.id==="aileye_soyle"));
k("sessiz_coz AÇIK", o3.acikKararlar().some(x=>x.id==="sessiz_coz"));
let r=o3.kararVer("sessiz_coz");
k("sessiz_coz cengoBag +2", o3.durum.cengoBag===2);
k("kaya_insani tohumu=true (V6 duygusal ağırlık)", o3.durum.seeds.kaya_insani===true);
k("ceyda_para_ipi tohumu=true (V5 ipi)", o3.durum.seeds.ceyda_para_ipi===true);

console.log("\n=== SIĞ KEŞİF: sadece odeme_kayaya_ait → koz açık, şefkat kapalı ===");
let o4=new Oyun(g); o4.durum.seeds.kaya_kayit_gordu=true; o4.vakaBaslat("V4");
o4.kaynakAc("odeme_iz");  // gizemli_odeme(giriş) + durma_tarihi → odeme_kayaya_ait türer
k("odeme_kayaya_ait türedi (tek kaynakla)", o4.bilinenler().includes("odeme_kayaya_ait"));
k("koz_yap AÇIK (odeme_kayaya_ait yeter)", o4.acikKararlar().some(x=>x.id==="koz_yap"));
k("aileye_soyle KAPALI (iyilik_tam yok)", !o4.acikKararlar().some(x=>x.id==="aileye_soyle"));
console.log("   → Yüzeyde kalan sadece 'kullan'ı görür; derine inen şefkati kazanır.");

console.log("\n"+(hata===0?"=== V4 TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
