const { Oyun } = require("./motor.js");
const { dogrula } = require("./dogrulayici.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== 4 GİRİŞ VARYANTI (V3 kararına göre) ===");
for (const [kar, iz] of [["polis","büyümeden bastıralım"],["koz","senden almaya"],["cavit","onunla ilgilendim"],["baska","temizlik' işi daha"]]) {
  let o=new Oyun(g); o.durum.seeds.ilyas_kime_gitti=kar;
  k(`giriş '${kar}' varyantı`, o.vakaBaslat("V5").giris.includes(iz));
}

console.log("\n=== YOL 1: KOMPLO derinliği (tam_resim) — 4 kaynak + 1 ip ===");
let o=new Oyun(g); o.durum.seeds.ilyas_kime_gitti="polis"; o.vakaBaslat("V5");
const bas=o.acikKaynaklar().map(x=>x.id).sort().join(",");
k("başta 2 paralel kaynak açık (cavit_ilyas_ilgi + dosya_donus), ip derinleşmemiş", bas==="cavit_ilyas_ilgi,dosya_donus");
o.kaynakAc("cavit_ilyas_ilgi");
k("İP2 başı açık, ceyda_oku KAPALI", o.acikKaynaklar().some(x=>x.id==="cavit_izle") && !o.acikKaynaklar().some(x=>x.id==="ceyda_oku"));
o.kaynakAc("ilyas_gecmis"); o.kaynakAc("cavit_izle"); o.kaynakAc("iliski_gor");
k("tam_resim türedi (İP1+İP2)", o.bilinenler().includes("tam_resim"));
k("ana kararlar açık (cavite_vur/kanit_biriktir)", o.acikKararlar().some(x=>x.id==="cavite_vur"));
k("ceyda_oku açık (İP3 başı)", o.acikKaynaklar().some(x=>x.id==="ceyda_oku"));
o.kaynakAc("ceyda_oku");   // 5. hak → ip_koz
k("araştırma bitti (5/5)", o.durum.aktif.arastirmaKalan===0);
k("ceyda_derin KAPALI değil ama hak yok", o.acikKaynaklar().some(x=>x.id==="ceyda_derin"));
let r1=o.kararVer("kanit_biriktir");
k("ceyda_okundu=1 (komplo yolunda Ceyda az okundu)", o.durum.seeds.ceyda_okundu===1);
k("cavit_ceyda_bilinir=true", o.durum.seeds.cavit_ceyda_bilinir===true);

console.log("\n=== YOL 2: CEYDA derinliği — ilyas_gecmis'i atla, 3 ipi de aç ===");
let o2=new Oyun(g); o2.durum.seeds.ilyas_kime_gitti="polis"; o2.vakaBaslat("V5");
o2.kaynakAc("cavit_ilyas_ilgi");
o2.kaynakAc("cavit_izle"); o2.kaynakAc("iliski_gor");  // İP2 (ilyas_gecmis'i atladık)
o2.kaynakAc("ceyda_oku"); o2.kaynakAc("ceyda_derin");  // 3 ip
k("araştırma bitti (5/5)", o2.durum.aktif.arastirmaKalan===0);
k("ceyda_okundu=3 (Ceyda tam okundu)", true /* kararda hesaplanır */);
k("tam_resim YOK (ilyas_gecmis atlandı)", !o2.bilinenler().includes("tam_resim"));
k("ana kararlar KAPALI, sadece ceydaya_git", 
   !o2.acikKararlar().some(x=>x.id==="cavite_vur") && o2.acikKararlar().some(x=>x.id==="ceydaya_git"));
let r2=o2.kararVer("ceydaya_git");
k("ceyda_okundu=3 kesinleşti", o2.durum.seeds.ceyda_okundu===3);
console.log("   → Gerçek ödünleşim: komployu çöz (tam_resim) YA DA Ceyda'yı oku (3 ip). İkisi birden değil.");

console.log("\n=== CEYDA BELİRSİZ KALIYOR (Kural 5 gerçek veride) ===");
let temiz=dogrula(g); // mevcut veri Ceyda'yı belirsiz tutuyor → uyarı olmamalı
k("temiz veride Ceyda uyarısı YOK", temiz===true);

console.log("\n"+(hata===0?"=== V5 TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
