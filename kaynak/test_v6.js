const { Oyun } = require("./motor.js");
const { dogrula } = require("./dogrulayici.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== YOL A: V5'te tam_resim çözülmüş (cavit_ceyda_bilinir=true) ===");
let o=new Oyun(g); o.durum.seeds.cavit_ceyda_bilinir=true;
let gr=o.vakaBaslat("V6");
k("giriş 'her şeyi biliyorsun' varyantı", gr.giris.includes("her şeyi biliyorsun"));
k("zincir_tam girişte açıldı", o.bilinenler().includes("zincir_tam"));
k("kaya_izi açık (zincir_tam var)", o.acikKaynaklar().some(x=>x.id==="kaya_izi"));
o.kaynakAc("kaya_izi");
k("kaya_bilmiyordu ÖĞRENİLDİ (kazan öğrenir)", o.bilinenler().includes("kaya_bilmiyordu"));
k("gercek_ortaya_cikti türedi", o.bilinenler().includes("gercek_ortaya_cikti"));

console.log("\n=== YOL B: derine inmemiş (varsayılan) — Kaya gerçeği kaynakla gelir ===");
let o2=new Oyun(g);  // cavit_ceyda_bilinir yok
let gr2=o2.vakaBaslat("V6");
k("giriş 'derine inmedin' varyantı", gr2.giris.includes("derine inmedin"));
k("zincir_tam girişte AÇILMADI", !o2.bilinenler().includes("zincir_tam"));
// DEĞİŞTİ: zinciri toparlamak artık V5'te komployu çözmüş olmayı gerektiriyor.
// Çözemeyen oyuncuya zincir hazır verilmez; onun yerine boşluğu görür.
k("zincir_ozet KAPALI (komployu çözmedi)", !o2.acikKaynaklar().some(x=>x.id==="zincir_ozet"));
k("onun yerine 'eldekiler' açık", o2.acikKaynaklar().some(x=>x.id==="eldekiler"));
const rEl = o2.kaynakAc("eldekiler");
k("eldekiler bedelsiz (hak yemiyor)", o2.durum.aktif.arastirmaKalan === (g.vakalar.find(v=>v.id==="V6").arastirma));
k("zincir_tam GELMEDİ — boşluk kapanmıyor", !o2.bilinenler().includes("zincir_tam"));
k("metin hiçbir ismi ele vermiyor",
  !["Cavit","Ceyda","İlyas","Kaya"].some(ad => (rEl.text||"").includes(ad)), rEl.text ? "" : "metin yok");
k("tek kalan karar: sus", o2.acikKararlar().map(x=>x.id).join(",") === "sus",
  o2.acikKararlar().map(x=>x.id).join(","));

console.log("\n=== FİNAL KARARLARI + tohum ===");
let o3=new Oyun(g); o3.durum.seeds.cavit_ceyda_bilinir=true; o3.vakaBaslat("V6");
o3.kaynakAc("kaya_izi");
k("5 karar açık mı? (hepsini_ifsa hariç — silahli değil)", 
   o3.acikKararlar().length===4 && !o3.acikKararlar().some(x=>x.id==="hepsini_ifsa"));
let r=o3.kararVer("cavit_ver");
k("final_karar=cavit", o3.durum.seeds.final_karar==="cavit");
k("kaya_gercek_ogrenildi=true", o3.durum.seeds.kaya_gercek_ogrenildi===true);

console.log("\n=== hepsini_ifsa yalnız silahli (V5 kanit_biriktir) ile açılır ===");
let o4=new Oyun(g); o4.durum.seeds.cavit_ceyda_bilinir=true; o4.durum.seeds.cavit_karsi_konum="silahli"; o4.vakaBaslat("V6");
o4.kaynakAc("kaya_izi");
k("silahli iken hepsini_ifsa AÇIK", o4.acikKararlar().some(x=>x.id==="hepsini_ifsa"));

console.log("\n=== FİNAL İSTİSNALARI ===");
// KIRAR: Yakın'dayken hepsini_ifsa → düşer
let o5=new Oyun(g); o5.durum.seeds.cavit_ceyda_bilinir=true; o5.durum.seeds.cavit_karsi_konum="silahli";
o5.durum.cengoBag=4; o5.vakaBaslat("V6"); o5.kaynakAc("kaya_izi");
let r5=o5.kararVer("hepsini_ifsa");
k("Yakın(4) + hepsini_ifsa → cengoBag düştü (≤2)", o5.durum.cengoBag<=2);
// MÜHÜRLER: Yakın'dayken cavit_ver → Bağlı
let o6=new Oyun(g); o6.durum.seeds.cavit_ceyda_bilinir=true; o6.durum.cengoBag=4;
o6.vakaBaslat("V6"); o6.kaynakAc("kaya_izi");
let r6=o6.kararVer("cavit_ver");
k("Yakın(4) + cavit_ver → Bağlı (6)", o6.cengoDurum()==="Bağlı");

console.log("\n=== KURAL 5: V6'da kaya_biliyordu ÇÖZÜLMESİ serbest, Ceyda DEĞİL ===");
let temiz=dogrula(g);
k("V6 kaya_biliyordu kesin ama uyarı YOK (istisna çalışıyor)", temiz===true);

console.log("\n"+(hata===0?"=== V6 TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
