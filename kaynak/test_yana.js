const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== 'BELİRİR' MEKANİĞİ: YAN-A V2'den sonra masaya düşer ===");
let o=new Oyun(g);
// V1'i bitir
o.vakaBaslat("V1"); o.kararVer("reddet");
k("V1 sonrası YAN-A masada YOK", !o.masadakiVakalar().includes("YAN-A"));
// V2'yi bitir
o.vakaBaslat("V2"); o.kararVer("kuru_rapor");
k("V2 sonrası YAN-A masada VAR", o.masadakiVakalar().includes("YAN-A"));
k("sıradaki omurga V3 de masada", o.masadakiVakalar().includes("V3"));

console.log("\n=== KAÇINILMAZ GİRİŞ → KEŞİF → 4 KARAR ===");
let gr=o.vakaBaslat("YAN-A");
k("girişte sevil_tehdit+cengo_tepki açıldı", o.bilinenler().includes("sevil_tehdit") && o.bilinenler().includes("cengo_tepki"));
k("başta biliyorum_cik KAPALI (gecmis_tam yok)", !o.acikKararlar().some(x=>x.id==="biliyorum_cik"));
// keşif: tehdit + eski_dava + cengo(bedelsiz) → gecmis_tam
o.kaynakAc("tehdit_arastir");
k("sessiz_coz + isi_gecevir açıldı (tehdit_kim)", o.acikKararlar().some(x=>x.id==="sessiz_coz") && o.acikKararlar().some(x=>x.id==="isi_gecevir"));
o.kaynakAc("eski_kayit");
o.kaynakAc("cengo_cumle");  // bedelsiz
k("cengo_cumle bedelsiz (araştırma korundu)", o.durum.aktif.arastirmaKalan===1);
k("gecmis_tam türedi", o.bilinenler().includes("gecmis_tam"));
k("cengoya_birak + biliyorum_cik açıldı", o.acikKararlar().some(x=>x.id==="cengoya_birak") && o.acikKararlar().some(x=>x.id==="biliyorum_cik"));

console.log("\n=== EN GÜÇLÜ YAKINLAŞMA: cengoya_birak +2 ===");
let bagOnce=o.durum.cengoBag;
let r=o.kararVer("cengoya_birak");
k("cengoya_birak +2", o.durum.cengoBag===bagOnce+2);
k("cengo_gecmis_bilinir=true", o.durum.seeds.cengo_gecmis_bilinir===true);
k("YAN-A tamamlandı", o.durum.tamamlanan.includes("YAN-A"));
k("YAN-A artık masada YOK (tekrar gelmez)", !o.masadakiVakalar().includes("YAN-A"));

console.log("\n=== İŞİ GERİ ÇEVİR: keşiften SONRA, iptal değil ===");
let o2=new Oyun(g);
o2.vakaBaslat("V1"); o2.kararVer("reddet"); o2.vakaBaslat("V2"); o2.kararVer("kuru_rapor");
o2.vakaBaslat("YAN-A");
k("başta isi_gecevir KAPALI (tehdit_kim yok)", !o2.acikKararlar().some(x=>x.id==="isi_gecevir"));
o2.kaynakAc("tehdit_arastir");
k("keşiften sonra isi_gecevir açık", o2.acikKararlar().some(x=>x.id==="isi_gecevir"));
console.log("   → 'geri çevir' vakayı iptal etmiyor; önce Sevil'i görüyorsun, sonra reddedebiliyorsun.");

console.log("\n"+(hata===0?"=== YAN-A TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
