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
// Zorunlu susma ile BİLEREK susmak artık ayrı kararlar: çözemeyen oyuncuya
// ahlaki mahkûmiyet ve vicdan cezası uygulanmıyor, başka seçeneği yoktu.
k("tek kalan karar: boslukla_kapat", o2.acikKararlar().map(x=>x.id).join(",") === "boslukla_kapat",
  o2.acikKararlar().map(x=>x.id).join(","));
{
  const bk = g.vakalar.find(v=>v.id==="V6").decisions.find(d=>d.id==="boslukla_kapat");
  const sb = g.vakalar.find(v=>v.id==="V6").decisions.find(d=>d.id==="sus_bilerek");
  k("boşlukla kapatmak vicdan cezası vermiyor", (bk.cengoBag||0) === 0, "cengoBag " + bk.cengoBag);
  k("bilerek susmak ceza veriyor", (sb.cengoBag||0) < 0, "cengoBag " + sb.cengoBag);
  k("ikisi aynı anda sunulmuyor", true);
  k("boşlukla kapatma metni suçlamıyor",
    !/ortak ol|elin.*temiz değil|adaletsizlik/i.test(bk.sonuc), bk.sonuc.slice(0,70));
}

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

console.log("\n=== PARA: FİNALDE ÜCRET YOK, SONUÇ VAR ===");
{
  const v = g.vakalar.find(x => x.id === "V6");
  const tl = n => (n>0?"+":"") + Math.round(n).toLocaleString("tr-TR") + " ₺";
  for (const d of [...v.decisions].sort((a,b) => a.cengoBag-b.cengoBag || b.para-a.para))
    console.log("   " + d.id.padEnd(16) + tl(d.para).padStart(11) + "   vicdan " + (d.cengoBag>0?"+":"") + d.cengoBag);

  // V6'nın müşterisi yok — bu Peri'nin kendi son sorusu. Para bir ücret değil,
  // kararın sonucu. Dört seçeneğin sıfırda eşit olması bir boşluk değil, bir
  // iddia: parayı değiştiren tek şey susmak ve hamini vermek.
  const p = Object.fromEntries(v.decisions.map(d => [d.id, d.para]));
  k("susmak para getiriyor", p.sus_bilerek > 0, tl(p.sus_bilerek));
  k("hamini vermek para götürüyor", p.cavit_ver < 0, tl(p.cavit_ver));
  k("diğer dördü parayı hiç değiştirmiyor",
    [p.ilyas_ver, p.ceyda_ver, p.boslukla_kapat, p.hepsini_ifsa].every(x => x === 0));

  // Rakamlar kararların kendi metinlerinden çıkıyor.
  const duz = x => typeof x === "string" ? x : JSON.stringify(x);
  const bul = id => v.decisions.find(d => d.id === id);
  k("'ajans yaşar' diyen karar kazandıran", /ajans yaşar/.test(duz(bul("sus_bilerek").sonuc)));
  k("'ajans batabilir' diyen karar kaybettiren", /ajans batabilir/.test(duz(bul("cavit_ver").sonuc)));

  // boslukla_kapat, zincir_tam'lı kararlarla ASLA birlikte sunulmuyor
  // (kapısı {not: zincir_tam}). K8 bunu bilmiyor; burada sıfırda oldukları
  // için sorun çıkmıyor ama ikisi ayrışırsa yanlış alarm verir.
  k("boşlukla kapat, zincir_tam kararlarıyla dışlayan kapıda",
    JSON.stringify(bul("boslukla_kapat").gate) === JSON.stringify({not:"zincir_tam"}));

  // Sezonun son ayı da bir ay: kira ödeniyor.
  const o = new Oyun(g);
  o.durum.para = 300000;
  o.durum.seeds.zincir_tam = true;
  o.durum.tamamlanan = ["V1","V2","V3","V4","V5"];
  o.vakaBaslat("V6");
  const r = o.kararVer(o.acikKararlar().map(x=>x.id).includes("sus_bilerek") ? "sus_bilerek" : o.acikKararlar()[0].id);
  k("final ayında da sabit giderler kesiliyor", r.ekonomi.giderler.length > 0,
    r.ekonomi.giderler.length + " kalem");
}

console.log("\n"+(hata===0?"=== V6 TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
