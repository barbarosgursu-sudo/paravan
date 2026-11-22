const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

// Tam teşhis + bedelsiz cengo → el_var
let o=new Oyun(g); o.durum.seeds.ilyas_yuz_tandi=true; o.vakaBaslat("V3");
const zincir=["cavit_brief","tanik_gorusme","mahalle_don","foto_goster"];
k("teşhis zinciri hatasız açıldı", zincir.every(id=>!o.kaynakAc(id).hata));
k("iten_ilyas türedi (katil teşhis edildi)", o.bilinenler().includes("iten_ilyas"));
k("cengo_okuma açık", o.acikKaynaklar().some(x=>x.id==="cengo_okuma"));
// bütçeden bağımsız: bedelsiz kaynak hak HARCAMAMALI
const hakOnce=o.durum.aktif.arastirmaKalan;
let r=o.kaynakAc("cengo_okuma");
k("cengo_okuma bedelsiz açıldı (hak değişmedi, hata yok)", !r.hata && o.durum.aktif.arastirmaKalan===hakOnce);
k("el_var türedi", o.bilinenler().includes("el_var"));
o.kararVer("polise_ver");
k("el_sezildi tohumu=true (V5 doğrulama olur)", o.durum.seeds.el_sezildi===true);

// Hiç araştırmayıp lekele → el_var YOK
let o2=new Oyun(g); o2.durum.seeds.ilyas_yuz_tandi=true; o2.vakaBaslat("V3");
o2.kararVer("tanigi_lekele");
k("lekele yolunda el_sezildi=false (V5 şok olur)", o2.durum.seeds.el_sezildi!==true);
console.log("   → Ayrım net: teşhisi çözen 'el'i sezer (doğrulama); lekeleyen sezmez (şok).");

console.log("\n"+(hata===0?"=== V3 DÜZELTME DOĞRULANDI ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
