const { Oyun } = require("./motor.js");
const fs = require("fs");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
// Bu test vakanın İÇERİK mantığını sınıyor (türetme, kapı, karar), ekonomiyi
// değil. Kasa boşken elektrik kesiliyor ve araştırma hakkı bir azalıyor —
// gerçek bir davranış, ama burada ölçmek istediğimiz şey o değil. Ajansı
// ödeyebilir durumda tutuyoruz ki tam bütçeyle sınansın.
const ODEYEBILIR = 2000000;
const varlikli = () => { const o = new Oyun(g); o.durum.para = ODEYEBILIR; return o; };
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== 'BELİRİR' MEKANİĞİ: YAN-A V2'den sonra masaya düşer ===");
let o=varlikli();
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
const hakOnce = o.durum.aktif.arastirmaKalan;
o.kaynakAc("cengo_cumle");  // bedelsiz
// bütçeden bağımsız iddia: bedelsiz kaynak hak HARCAMAMALI
k("cengo_cumle bedelsiz (araştırma korundu)", o.durum.aktif.arastirmaKalan===hakOnce);
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
let o2=varlikli();
o2.vakaBaslat("V1"); o2.kararVer("reddet"); o2.vakaBaslat("V2"); o2.kararVer("kuru_rapor");
o2.vakaBaslat("YAN-A");
k("başta isi_gecevir KAPALI (tehdit_kim yok)", !o2.acikKararlar().some(x=>x.id==="isi_gecevir"));
o2.kaynakAc("tehdit_arastir");
k("keşiften sonra isi_gecevir açık", o2.acikKararlar().some(x=>x.id==="isi_gecevir"));
console.log("   → 'geri çevir' vakayı iptal etmiyor; önce Sevil'i görüyorsun, sonra reddedebiliyorsun.");

console.log("\n=== PARA: MERDİVEN VE SEBEPLERİ ===");
{
  const v = g.vakalar.find(x => x.id === "YAN-A");
  const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";
  const s = [...v.decisions].sort((a, b) => a.cengoBag - b.cengoBag);
  for (const x of s) console.log("   " + x.id.padEnd(15) + tl(x.para).padStart(11) + "   vicdan " + (x.cengoBag > 0 ? "+" : "") + x.cengoBag);
  k("vicdan yükseldikçe para düşüyor", s.every((x, i) => i === 0 || x.para < s[i - 1].para));
  // Eskiden sessiz_coz ve isi_gecevir aynı vicdandaydı (+1): aynı ahlak, biri
  // para getiriyor öteki getirmiyor — yani isi_gecevir'i seçmek için hiçbir
  // sebep yoktu. sessiz_coz 0'a indi: bir yabancının derdini para karşılığı
  // çözmek ve fazlasını sormamak meslek, erdem değil. İşi Cengo'nun hatırına
  // geri çevirmek ise 33.000 ₺'lik bir erdem.
  const bag = Object.fromEntries(v.decisions.map(d => [d.id, d.cengoBag]));
  k("sessiz_coz ile isi_gecevir artık aynı vicdanda DEĞİL",
    bag.sessiz_coz !== bag.isi_gecevir, `sessiz_coz ${bag.sessiz_coz} / isi_gecevir ${bag.isi_gecevir}`);
  k("işi geri çevirmek, çözmekten daha vicdanlı", bag.isi_gecevir > bag.sessiz_coz);
  k("Cengo'ya bırakmak hiç para getirmiyor",
    v.decisions.find(d => d.id === "cengoya_birak").para === 0);
  // Yan iş ay kapatmadığı için bu para doğrudan nefes demek.
  const o = varlikli();
  o.durum.para = 0; o.durum.borc = 47465;      // V2'den temiz çıkan oyuncunun hâli
  o.durum.tamamlanan = ["V1", "V2"];
  o.vakaBaslat("YAN-A");
  o.kaynakAc("tehdit_arastir");
  const r = o.kararVer("sessiz_coz");
  k("borçlu oyuncu için gerçek nefes", o.durum.borc < 10000,
    tl(47465) + " → " + tl(o.durum.borc));
  k("ama sabit gider kesilmedi (yan iş)", r.ekonomi.giderler.length === 0);
}

console.log("\n=== SESSİZ ÇÖZÜM, BİLİNMEYEN SIRRI ANLATMIYOR ===");
{
  // Kapı 'tehdit_kim'; oyuncu Cengo'nun geçmişini hiç öğrenmeden bu kararı
  // verebiliyor. Sonuç metni ona "kapalı defter kapalı kaldı" derse olmayan
  // bir sırrı ele verir.
  const kur = (yol) => {
    const o = varlikli();
    o.durum.tamamlanan = ["V1", "V2"];
    o.vakaBaslat("YAN-A");
    for (const c of yol) o.kaynakAc(c);
    return o;
  };
  const sig = kur(["tehdit_arastir"]);
  k("sığ oyuncu gecmis_tam bilmiyor (test anlamlı)", !sig.bilinenler().includes("gecmis_tam"));
  const rs = sig.kararVer("sessiz_coz");
  k("sığ oyuncuya 'kapalı defter' denmiyor", !/kapalı defter|üstlend/i.test(rs.sonuc), rs.sonuc);

  const derin = kur(["eski_kayit", "tehdit_arastir", "cengo_cumle"]);
  k("derin oyuncu gecmis_tam biliyor", derin.bilinenler().includes("gecmis_tam"));
  const rd = derin.kararVer("sessiz_coz");
  k("derin oyuncuya merhamet cümlesi geliyor", /kapalı defter/i.test(rd.sonuc));
  k("iki metin farklı", rs.sonuc !== rd.sonuc);
}

console.log("\n=== YAN İŞ KAÇIRILABİLİR — VE ARAYÜZ BUNU SÖYLÜYOR ===");
{
  // masadakiVakalar() yan vakayı yalnızca 'belirir.sonra === son tamamlanan'
  // iken gösteriyor. Omurgaya geçen oyuncu onu KALICI olarak kaybediyor.
  // Bu kasıtlı bir kayıp; ama oyuncuya söylenmezse tuzak olur.
  const o3 = varlikli();
  o3.vakaBaslat("V1"); o3.kararVer("reddet");
  o3.vakaBaslat("V2"); o3.kararVer("kuru_rapor");
  k("V2'den sonra YAN-A masada", o3.masadakiVakalar().includes("YAN-A"));
  o3.vakaBaslat("V3"); o3.kararVer(o3.acikKararlar()[0].id);
  k("omurgaya geçince YAN-A düştü", !o3.masadakiVakalar().includes("YAN-A"));
  k("ve bir daha hiç gelmiyor",
    !o3.durum.tamamlanan.includes("YAN-A") && !o3.masadakiVakalar().includes("YAN-A"));

  // Kayıp kalıcı olduğu için masadaki kart bunu söylemek ZORUNDA.
  const ui = fs.readFileSync("build_html.js", "utf-8");
  k("masa kartı yan işin beklemediğini yazıyor", /Beklemez[^']*başkasına gider/.test(ui));
  k("eski yanlış ipucu ('para senden gider') kaldırıldı", !/zaman ve para senden gider/.test(ui));
}

console.log("\n"+(hata===0?"=== YAN-A TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
