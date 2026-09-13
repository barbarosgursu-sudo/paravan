const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));

// Sahte bir yan vaka ekle: V1'den sonra, gizli_dosya seed'i varsa belirsin
g.vakalar.push({
  id:"YAN-TEST", tur:"yan", belirir:{ sonra:"V1", kosul:{ seed:"gizli_dosya", esit:true } },
  baslik:"Test Yan Vaka", arastirma:1,
  truth:{}, facts:{ x:"bir olgu" },
  knowledge:[], giris:[{kosul:"varsayilan", metin:"yan giriş", acilan:[]}],
  clues:[{id:"k1",ad:"K",tur:"Gözlem",ico:"◉",needs:[],reveals:["x"],text:"metin",meta:"m",gorsel:null}],
  decisions:[{id:"d1",gate:"yok",etiket:"bitir",sonuc:"bitti",cengoBag:1,seed_yaz:{}}],
  seeds:{}
});

let hata = 0;
const kontrol = (ad, ok, ek) => { console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad+(ek?" → "+ek:"")); if(!ok)hata++; };

console.log("=== YOL A: araştır → cinayet şüphesi → gizli_kaz ===");
let o = new Oyun(g);
kontrol("başta masada V1 var", o.masadakiVakalar().includes("V1"));
o.vakaBaslat("V1");
kontrol("araştırma 3", o.durum.aktif.arastirmaKalan===3);

// başta gizli_kaz kapalı olmalı (cinayet_suphesi yok)
kontrol("başta gizli_kaz KAPALI", !o.acikKararlar().some(k=>k.id==="gizli_kaz"));
kontrol("başta temiz_rapor AÇIK", o.acikKararlar().some(k=>k.id==="temiz_rapor"));

// olay_yeri aç (dusus_acisi + olum_saati) ve ceyda_gorusme (ceyda_saat)
o.kaynakAc("olay_yeri");
o.kaynakAc("ceyda_gorusme");
// şimdi cengo_baglanti açılabilir olmalı (needs: ceyda_saat, olum_saati)
kontrol("cengo_baglanti artık açık", o.acikKaynaklar().some(k=>k.id==="cengo_baglanti"));
// cinayet_suphesi türedi mi? (dusus_acisi VE (ceyda_celiski VEYA komsu_ses)); ceyda_celiski = ceyda_saat VE olum_saati
kontrol("ceyda_celiski türedi", o.bilinenler().includes("ceyda_celiski"));
kontrol("cinayet_suphesi türedi", o.bilinenler().includes("cinayet_suphesi"));
// gizli_kaz artık açık olmalı
kontrol("gizli_kaz artık AÇIK", o.acikKararlar().some(k=>k.id==="gizli_kaz"));

let r = o.kararVer("gizli_kaz");
const gkBekle = g.vakalar.find(v=>v.id==="V1").decisions.find(d=>d.id==="gizli_kaz").cengoBag;
kontrol("gizli_kaz cengoBag verideki değerle uyuşuyor ("+gkBekle+")", o.durum.cengoBag===gkBekle);
kontrol("cengoDurum Yoldaş", r.cengoDurum==="Yoldaş");
kontrol("seed gizli_dosya=true", o.durum.seeds.gizli_dosya===true);
kontrol("seed kaya_kayit_gordu=true (olay_yeri açıldı)", o.durum.seeds.kaya_kayit_gordu===true);
kontrol("V1 tamamlandı", o.durum.tamamlanan.includes("V1"));
// yan vaka belirdi mi? (gizli_dosya true)
kontrol("YAN-TEST masada belirdi", o.masadakiVakalar().includes("YAN-TEST"));

console.log("\n=== YOL B: hiç araştırma yok → sadece gate'siz kararlar ===");
let o2 = new Oyun(g);
o2.vakaBaslat("V1");
const kararlar = o2.acikKararlar().map(k=>k.id);
kontrol("araştırmasız yalnız temiz_rapor + reddet açık",
  kararlar.includes("temiz_rapor") && kararlar.includes("reddet") &&
  !kararlar.includes("gizli_kaz") && !kararlar.includes("soyle_cavit"));
let r2 = o2.kararVer("temiz_rapor");
kontrol("temiz_rapor cengoBag -1", o2.durum.cengoBag===-1);
kontrol("YAN-TEST belirMEdi (gizli_dosya yok)", !o2.masadakiVakalar().includes("YAN-TEST"));

console.log("\n=== YOL C: reddet → cengoBag +1 → Yoldaş sınırı ===");
let o3 = new Oyun(g); o3.vakaBaslat("V1");
o3.kararVer("reddet");
const rdBekle = g.vakalar.find(v=>v.id==="V1").decisions.find(d=>d.id==="reddet").cengoBag;
kontrol("reddet cengoBag verideki değerle uyuşuyor ("+rdBekle+")", o3.durum.cengoBag===rdBekle);

console.log("\n=== KOŞULLU METİN: meta hak edilmemiş olguyu ele vermiyor ===");
{
  // Oyuncu Ceyda ile görüşmeden komşu ifadesini açarsa, meta Ceyda'nın
  // ifadesine gönderme YAPMAMALI (Nurcan kuralı).
  const a = new Oyun(g); a.vakaBaslat("V1");
  const rA = a.kaynakAc("komsu_ifadesi");
  kontrol("Ceyda ile görüşmeden: meta onun sözünü aktarmıyor",
    !/Ceyda/.test(rA.meta || ""), rA.meta);
  kontrol("yine de anlamlı bir meta geliyor", (rA.meta || "").length > 20);

  const b = new Oyun(g); b.vakaBaslat("V1");
  b.kaynakAc("ceyda_gorusme");
  const rB = b.kaynakAc("komsu_ifadesi");
  kontrol("görüştükten sonra: bağlantı kuruluyor", /Ceyda/.test(rB.meta || ""), rB.meta);
  kontrol("iki varyant farklı", rA.meta !== rB.meta);
}

console.log("\n"+(hata===0 ? "=== TÜM MOTOR TESTLERİ GEÇTİ ===" : "=== "+hata+" TEST BAŞARISIZ ==="));
process.exit(hata?1:0);
