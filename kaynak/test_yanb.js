const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== 'BELİRİR': YAN-B V4'ten sonra ===");
let o=new Oyun(g);
function tamamla(o){
  o.vakaBaslat("V1"); o.kararVer("reddet");
  o.vakaBaslat("V2"); o.kararVer("kuru_rapor");
  o.vakaBaslat("V3"); o.kararVer("tanigi_lekele");
  o.vakaBaslat("V4"); o.kaynakAc("odeme_iz"); o.kararVer("koz_yap");  // araştır sonra karar
}
tamamla(o);
k("V4 sonrası YAN-B masada VAR", o.masadakiVakalar().includes("YAN-B"));

console.log("\n=== GİRİŞ → KEŞİF → KARARLAR ===");
o.vakaBaslat("YAN-B");
k("girişte nadire_geldi+dolandirici_var açıldı", o.bilinenler().includes("nadire_geldi") && o.bilinenler().includes("dolandirici_var"));
k("başta gecistir AÇIK (gate yok)", o.acikKararlar().some(x=>x.id==="gecistir"));
k("başta tam_sahip_cik KAPALI", !o.acikKararlar().some(x=>x.id==="tam_sahip_cik"));
o.kaynakAc("dolandirici_iz");
k("sadece_coz açıldı (dolandirici_kim)", o.acikKararlar().some(x=>x.id==="sadece_coz"));
o.kaynakAc("peri_ic_ses");  // bedelsiz
k("peri_ic_ses bedelsiz (araştırma korundu)", o.durum.aktif.arastirmaKalan===2);
k("sorumluluk_tam türedi", o.bilinenler().includes("sorumluluk_tam"));
k("tam_sahip_cik + gercegi_soyle açıldı", o.acikKararlar().some(x=>x.id==="tam_sahip_cik") && o.acikKararlar().some(x=>x.id==="gercegi_soyle"));

console.log("\n=== SEZON 2 KANCASI (opsiyonel) ===");
o.kaynakAc("avukat_kirintisi");
k("avukat_izi öğrenildi", o.bilinenler().includes("avukat_izi"));

console.log("\n=== SAHİPLENME +2 + tohumlar ===");
let bagOnce=o.durum.cengoBag;
let r=o.kararVer("tam_sahip_cik");
k("tam_sahip_cik +2", o.durum.cengoBag===bagOnce+2);
k("peri_yuzlesti tohumu=true", o.durum.seeds.peri_yuzlesti===true);
k("sezon2_avukat_ipi tohumu=true", o.durum.seeds.sezon2_avukat_ipi===true);

console.log("\n=== GEÇİŞTİR: gate'siz, her zaman kaçış mümkün ===");
let o2=new Oyun(g);
o2.vakaBaslat("V1"); o2.kararVer("reddet"); o2.vakaBaslat("V2"); o2.kararVer("kuru_rapor"); o2.vakaBaslat("V3"); o2.kararVer("tanigi_lekele"); o2.vakaBaslat("V4"); o2.kaynakAc("odeme_iz"); o2.kararVer("koz_yap");
o2.vakaBaslat("YAN-B");
let r2=o2.kararVer("gecistir");  // hiç araştırmadan kaç
k("araştırmasız gecistir seçilebildi", o2.durum.tamamlanan.includes("YAN-B"));
k("gecistir cengoBag -2", r2.cengoBag===o2.durum.cengoBag && o2.durum.seeds.yanb_karar==="gecistirdi");

console.log("\n"+(hata===0?"=== YAN-B TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
