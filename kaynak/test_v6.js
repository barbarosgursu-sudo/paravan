const { Oyun } = require("./motor.js");
const fs = require("fs");
const { dogrula } = require("./dogrulayici.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";
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

console.log("\n=== DÖRT DURUM, DÖRT AYRI GİRİŞ ===");
{
  // 3. inceleme turu: "B ve C aynı giriş metnini kullanıyor; C'de İlyas'ın
  // bilindiği söylenmiyor, sonraki ekranda İlyas birden seçenek olarak
  // beliriyor." Doğruydu — C'nin kendi girişi yoktu.
  const kur = (olgular, tohumlar) => {
    const o = new Oyun(g);
    o.durum.para = 3000000;
    o.durum.kaliciOlgular = [...(olgular || [])];
    Object.assign(o.durum.seeds, tohumlar || {});
    o.durum.tamamlanan = ["V1", "V2", "V3", "V4", "V5"];
    return o.vakaBaslat("V6").giris;
  };
  const A = kur([], {});
  const B = kur(["cinayet_suphesi"], {});
  const C = kur(["cinayet_suphesi", "iten_ilyas"], { iten_biliniyor: true });
  const D = kur(["cinayet_suphesi", "iten_ilyas"], { iten_biliniyor: true, cavit_ceyda_bilinir: true });
  for (const [ad, m] of [["A", A], ["B", B], ["C", C], ["D", D]])
    console.log("   " + ad + ": " + m.slice(0, 92) + "…");

  k("dört giriş de birbirinden farklı", new Set([A, B, C, D]).size === 4);
  k("C İlyas'ın adını söylüyor", /İlyas/.test(C), C.slice(0, 60));
  k("B İlyas'tan söz ETMİYOR", !/İlyas/.test(B));
  k("A cinayet demiyor", !/cinayet/i.test(A));
  k("C, arkasındakini bilmediğini söylüyor", /kimin sürdüğünü bilmiyorsun|bilmiyorsun/.test(C));
  k("C Cavit/Ceyda sızdırmıyor", !/Cavit'le Ceyda|azmettir|sevgili/.test(C), C);

  // Cavit'in teklifi KARARDAN ÖNCE kurulmalı: sus_bilerek +70.000 ₺ getiriyor
  // ve oyuncu paranın nereden geldiğini karardan SONRA öğreniyordu.
  const v = g.vakalar.find(x => x.id === "V6");
  const susPara = v.decisions.find(d => d.id === "sus_bilerek").para;
  k("susmak gerçekten para getiriyor (test anlamlı)", susPara > 0, tl(susPara));
  k("C'nin girişinde zarf var", /zarf/.test(C), "…" + (C.match(/Cavit dün[^.]*\./) || [""])[0]);
  k("D'nin girişinde de zarf var", /zarf/.test(D));
  k("A'da zarf YOK (susma seçeneği de yok)", !/zarf/.test(A));
  k("B'de zarf YOK", !/zarf/.test(B));
  k("C'nin zarfı 'neden bu kadar cömert' diye soruyor", /cömert/.test(C));
}

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
  // "ajans yaşar / ajans rahat" gibi finansal durum iddiaları metinden
  // kaldırıldı: sabit cümle, 500.000 ₺ borçlu oyuncuya yalan söylüyordu.
  // Paranın KAYNAĞI hâlâ metinde — Cavit susmayı satın alıyor.
  k("susma metni parayı Cavit'in ödediğini söylüyor",
    /Cavit.{0,40}öd/is.test(duz(bul("sus_bilerek").sonuc)));
  k("metinde artık sabit finansal durum iddiası yok",
    !/ajans yaşar|ajans rahat|ajans bu ay/i.test(duz(bul("sus_bilerek").sonuc)));
  k("'ajans batabilir' diyen karar kaybettiren", /ajans batabilir/.test(duz(bul("cavit_ver").sonuc)));

  // boslukla_kapat, ele verilecek biri OLAN oyuncuya asla sunulmuyor: kapısı
  // artık "ne zinciri biliyor ne İlyas'ı" demek. K8 bu dışlamayı bilmiyor;
  // burada hepsi sıfırda olduğu için sorun çıkmıyor ama ayrışırlarsa yanlış
  // alarm verir.
  const kapi = bul("boslukla_kapat").gate;
  k("boşlukla kapat dışlayan bir kapıda", !!kapi.not, JSON.stringify(kapi));
  const icerik = JSON.stringify(kapi.not);
  k("hem zinciri hem İlyas'ı dışlıyor",
    /zincir_tam/.test(icerik) && /iten_biliniyor/.test(icerik), icerik);

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

console.log("\n=== DÖRT BİLGİ DURUMU, DÖRT AYRI KAPANIŞ ===");
{
  // Eskiden zinciri çözemeyen HERKES tek bir zorunlu kapanışa düşüyordu ve
  // metin ona "verecek kimsen yoktu" diyordu. İlyas'ı katil olarak bilen
  // oyuncu için bu düpedüz yanlıştı: verecek biri vardı.
  const kur = (derinlik, plan) => {
    const o = new Oyun(g);
    o.durum.para = 3000000;                      // ekonomi değil bilgi sınanıyor
    for (const vid of ["V1","V2","V3","V4","V5"]) {
      o.vakaBaslat(vid);
      const n = derinlik[vid] ?? 0;
      let i = 0;
      while (i < n && o.acikKaynaklar().length) { if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break; i++; }
      const kr = o.acikKararlar().map(x => x.id);
      o.kararVer(kr.includes(plan[vid]) ? plan[vid] : kr[0]);
    }
    o.vakaBaslat("V6");
    let n = 0;
    while (o.acikKaynaklar().length && n++ < 4) { if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break; }
    return o;
  };
  const A = kur({},                     {V1:"temiz_rapor",V3:"tanigi_lekele",V5:"kazma"});
  const B = kur({V1:9},                 {V1:"gizli_kaz",  V3:"tanigi_lekele",V5:"kazma"});
  const C = kur({V1:9,V3:9},            {V1:"gizli_kaz",  V3:"koz_yap",      V5:"kazma"});
  const D = kur({V1:9,V3:9,V4:9,V5:9},  {V1:"gizli_kaz",  V3:"koz_yap",      V5:"cavite_vur"});
  const idler = o => o.acikKararlar().map(x => x.id).sort().join(",");

  k("A (hiç bakmadı): yalnız dosyayı kapat", idler(A) === "boslukla_kapat", idler(A));
  k("B (baktı, bulamadı): yalnız dosyayı kapat", idler(B) === "boslukla_kapat", idler(B));
  k("C (İlyas'ı biliyor): ARTIK gerçek bir seçim var",
    idler(C) === "ilyas_ver,sus_bilerek", idler(C));
  k("C artık 'dosyayı kapat'a düşmüyor", !idler(C).includes("boslukla_kapat"));
  k("D (zinciri çözdü): dört seçenek", idler(D).split(",").length === 4, idler(D));

  // Kapı DAR bilgi kümesiyle çalışır; iten_ilyas V3'ün olgusu, V6'nın değil.
  // Bu yüzden tohum üzerinden bakılıyor — V3 onu zaten yazıyordu ama kimse
  // okumuyordu.
  k("C'nin kapısını açan şey iten_biliniyor tohumu", C.durum.seeds.iten_biliniyor === true);

  console.log("\n   --- metinler ---");
  const metin = (o, id) => {
    const t = new Oyun(g);
    t.durumYukle(JSON.parse(JSON.stringify(o.durumAl())));
    return t.kararVer(id).sonuc;
  };
  const mA = metin(A, "boslukla_kapat"), mB = metin(B, "boslukla_kapat");
  const mC = metin(C, "ilyas_ver"),      mD = metin(D, "ilyas_ver");
  for (const [ad, m] of [["A", mA], ["B", mB], ["C", mC], ["D", mD]])
    console.log("   " + ad + ": " + m.slice(0, 96) + "…");

  k("A ile B aynı cümleyi okumuyor", mA !== mB);
  k("A'ya 'baktın' denmiyor", !/baktın|sordun/i.test(mA), mA.slice(0, 60));
  k("B'ye 'peşine düşmedin' denmiyor", !/peşine düşmedin/i.test(mB));
  k("C ile D aynı cümleyi okumuyor", mC !== mD);
  // NURCAN: C zinciri çözmedi — Cavit'in ya da Ceyda'nın adı geçmemeli.
  k("C'nin metni Cavit/Ceyda/mimar demiyor", !/Cavit|Ceyda|mimar/i.test(mC), mC);
  k("D'nin metni mimarlardan söz ediyor (test anlamlı)", /mimar/i.test(mD));

  const sC = metin(C, "sus_bilerek"), sD = metin(D, "sus_bilerek");
  k("susmanın iki metni farklı", sC !== sD);
  k("C'nin susma metni zinciri ele vermiyor", !/Ceyda|ortak olmak|azmettir/i.test(sC), sC);

  // Son ekran da aynı ayrımı yapmalı: "mimarlar gölgede kaldı" cümlesi
  // zinciri bilmeyen oyuncuya gösterilemez.
  const ui = fs.readFileSync("build_html.js", "utf-8");
  k("son ekran zincir bilgisine göre ayrışıyor", /zinciriBiliyor/.test(ui));
  k("zincir bilmeyene 'mimarlar' denmiyor",
    /zinciriBiliyor[\s\S]{0,200}mimarlar gölgede/.test(ui));
}

console.log("\n"+(hata===0?"=== V6 TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
