const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== YOL 1: 4 hakkı kritik zincire ver → sir_tam → hersey_soyle AÇILIR ===");
let o=new Oyun(g); o.vakaBaslat("V2");
k("araştırma 4", o.durum.aktif.arastirmaKalan===4);
o.kaynakAc("nesrin_gorusme");
o.kaynakAc("takip_gece");
k("aldatmiyor_kesin türedi", o.bilinenler().includes("aldatmiyor_kesin"));
o.kaynakAc("kenar_ev_gozlem");
k("İlyas görüldü (seed işareti)", o.durum.aktif.acilanKaynaklar.has("kenar_ev_gozlem"));
o.kaynakAc("mahalle_konus");
k("araştırma bitti (4/4)", o.durum.aktif.arastirmaKalan===0);
k("sir_tam türedi", o.bilinenler().includes("sir_tam"));
k("hersey_soyle AÇIK", o.acikKararlar().some(x=>x.id==="hersey_soyle"));
let r=o.kararVer("hersey_soyle");
k("seed ilyas_yuz_tandi=true", o.durum.seeds.ilyas_yuz_tandi===true);

console.log("\n=== YOL 2: bir hakkı Vedat'a acımaya harca → sir_tam KAÇAR ===");
let o2=new Oyun(g); o2.vakaBaslat("V2");
o2.kaynakAc("nesrin_gorusme");
o2.kaynakAc("takip_gece");
o2.kaynakAc("vedat_yuz");      // opsiyonel — acıma, ama gerçeği ilerletmez
o2.kaynakAc("kenar_ev_gozlem"); // 4. hak bitti
k("vedat_pisman öğrenildi (acıma)", o2.bilinenler().includes("vedat_pisman"));
k("araştırma bitti (4/4)", o2.durum.aktif.arastirmaKalan===0);
k("sir_tam KAÇTI (mahalle açılamadı)", !o2.bilinenler().includes("sir_tam"));
k("hersey_soyle KAPALI", !o2.acikKararlar().some(x=>x.id==="hersey_soyle"));
k("ama aldatmiyor_de AÇIK", o2.acikKararlar().some(x=>x.id==="aldatmiyor_de"));
console.log("   → gerçek seçim: tam gerçek (güç) vs Vedat'a acıma (empati). İkisi birden değil.");

console.log("\n=== YOL 3: hiç araştırma yok → yalnız yalan/kuru ===");
let o3=new Oyun(g); o3.vakaBaslat("V2");
const kk=o3.acikKararlar().map(x=>x.id);
k("araştırmasız yalnız yalan_kur+kuru_rapor", kk.includes("yalan_kur")&&kk.includes("kuru_rapor")&&kk.length===2);

console.log("\n"+(hata===0?"=== V2 DÜZELTME DOĞRULANDI ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
