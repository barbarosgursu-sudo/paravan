// KAYIT / SÜRDÜRME TESTİ
// Asıl iddia: kayıt yalnızca GİRDİ taşır. Türetilmiş bilgi kaydedilmez,
// yüklemede güncel veriden yeniden üretilir — eski bir kayıt oyuncunun hak
// etmediği bir olguyu geri getiremez.
const { Oyun, KAYIT_SEMA } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json", "utf-8"));
let hata = 0;
const k = (ad, ok) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad); if (!ok) hata++; };
const kopya = x => JSON.parse(JSON.stringify(x));

console.log("=== KAYIT YÜKÜ: yalnızca girdiler ===");
{
  const o = new Oyun(g);
  o.vakaBaslat("V1");
  o.kaynakAc(o.acikKaynaklar()[0].id);
  const kay = o.durumAl();
  const alanlar = Object.keys(kay).sort().join(",");
  k("üst alanlar beklendiği gibi",
    alanlar === "aktif,borc,cengoBag,kaliciOlgular,kriz,para,seeds,sema,tamamlanan");
  k("aktif yalnızca id + açılan kaynaklar",
    Object.keys(kay.aktif).sort().join(",") === "acilan,id");
  const metin = JSON.stringify(kay);
  k("türetilmiş 'bilinen' kaydedilmiyor", !metin.includes('"bilinen"'));
  k("araştırma hakkı kaydedilmiyor", !metin.includes("arastirmaKalan"));
  k("giriş metni kaydedilmiyor", !metin.includes("girisMetin"));
  k("vaka tanımı (truth/clues) kaydedilmiyor", !metin.includes('"clues"') && !metin.includes('"truth"'));
  k("kayıt JSON'a çevrilebiliyor", typeof metin === "string" && metin.length > 0);
}

console.log("\n=== VAKA ORTASINDA: tur-atla sonrası durum birebir aynı ===");
{
  const o = new Oyun(g);
  o.durum.seeds.ilyas_kime_gitti = "polis";
  o.vakaBaslat("V5");
  o.kaynakAc("cavit_ilyas_ilgi");
  o.kaynakAc("ilyas_gecmis");
  o.kaynakAc("cavit_izle");

  const kay = kopya(o.durumAl());
  const y = new Oyun(g);                       // temiz motor — tarayıcı yeniden açıldı
  const r = y.durumYukle(kay);
  k("yükleme başarılı", r.ok === true);
  k("bilinenler birebir aynı",
    y.bilinenler().sort().join("|") === o.bilinenler().sort().join("|"));
  k("açık kaynaklar aynı",
    y.acikKaynaklar().map(x => x.id).sort().join(",") === o.acikKaynaklar().map(x => x.id).sort().join(","));
  k("açık kararlar aynı",
    y.acikKararlar().map(x => x.id).sort().join(",") === o.acikKararlar().map(x => x.id).sort().join(","));
  k("araştırma hakkı yeniden türetildi",
    y.durum.aktif.arastirmaKalan === o.durum.aktif.arastirmaKalan);
  k("giriş metni yeniden türetildi",
    y.durum.aktif.girisMetin === o.durum.aktif.girisMetin);
  k("cengoBag korundu", y.durum.cengoBag === o.durum.cengoBag);
  k("açılmış kaynaklar korundu",
    [...y.durum.aktif.acilanKaynaklar].sort().join(",") === [...o.durum.aktif.acilanKaynaklar].sort().join(","));
}

console.log("\n=== NURCAN KURALI: kayıt hak edilmemiş bilgi sızdırmıyor ===");
{
  // Aynı vakayı iki oyuncu farklı derinlikte oynuyor. Az araştıranın kaydı
  // yüklendiğinde, çok araştıranın bildiği olgular GELMEMELİ.
  const az = new Oyun(g); az.durum.seeds.ilyas_kime_gitti = "polis"; az.vakaBaslat("V5");
  az.kaynakAc("cavit_ilyas_ilgi");

  const cok = new Oyun(g); cok.durum.seeds.ilyas_kime_gitti = "polis"; cok.vakaBaslat("V5");
  cok.kaynakAc("cavit_ilyas_ilgi"); cok.kaynakAc("ilyas_gecmis"); cok.kaynakAc("cavit_izle");

  const y = new Oyun(g);
  y.durumYukle(kopya(az.durumAl()));
  const yb = new Set(y.bilinenler());
  const fazla = cok.bilinenler().filter(x => !az.bilinenler().includes(x));
  k("derin oyuncunun olguları var (test anlamlı)", fazla.length > 0);
  k("az araştıranın kaydı derin olguları getirmiyor", fazla.every(x => !yb.has(x)));
  k("tam_resim sızmadı", !yb.has("tam_resim"));
}

console.log("\n=== ELLE KURCALANMIŞ KAYIT REDDEDİLİYOR ===");
{
  const o = new Oyun(g); o.vakaBaslat("V1"); o.kaynakAc(o.acikKaynaklar()[0].id);
  const saglam = kopya(o.durumAl());

  // Kilidi açılmamış bir kaynağı kayda elle eklemek
  const sahte = kopya(saglam);
  sahte.aktif.acilan = ["olmayan_kaynak_xyz"];
  const y1 = new Oyun(g); y1.vakaBaslat("V2");
  const oncekiVaka = y1.durum.aktif.id;
  const r1 = y1.durumYukle(sahte);
  k("olmayan kaynak reddedildi", !!r1.hata);
  k("reddedilince eski durum bozulmadı", y1.durum.aktif && y1.durum.aktif.id === oncekiVaka);

  // Olmayan vaka
  const sahte2 = kopya(saglam); sahte2.aktif.id = "V99";
  k("olmayan vaka reddedildi", !!(new Oyun(g)).durumYukle(sahte2).hata);

  // Tamamlanan listesinde tanınmayan vaka
  const sahte3 = kopya(saglam); sahte3.tamamlanan = ["V1", "UYDURMA"];
  k("tanınmayan tamamlanan vaka reddedildi", !!(new Oyun(g)).durumYukle(sahte3).hata);

  // Sürüm uyumsuzluğu
  const sahte4 = kopya(saglam); sahte4.sema = KAYIT_SEMA + 1;
  k("eski/yeni şema reddedildi", !!(new Oyun(g)).durumYukle(sahte4).hata);

  // Çöp girdiler
  k("null reddedildi", !!(new Oyun(g)).durumYukle(null).hata);
  k("dizi reddedildi", !!(new Oyun(g)).durumYukle([1, 2, 3]).hata);
  k("boş nesne reddedildi", !!(new Oyun(g)).durumYukle({}).hata);
}

console.log("\n=== UÇTAN UCA: her adımda kaydet-yükle, oyun yine bitiyor ===");
{
  let o = new Oyun(g);
  let adim = 0;
  const turAtla = () => {                       // her adımda uygulama kapanıp açılıyor
    const y = new Oyun(g);
    const r = y.durumYukle(kopya(o.durumAl()));
    if (r.hata) throw new Error("adım " + adim + ": " + r.hata);
    o = y;
  };
  let guvenlik = 0;
  while (o.masadakiVakalar().length && guvenlik++ < 40) {
    // yan vakalar masaya omurgadan sonra eklenir ve kaçırılabilir —
    // sondakini seçerek onları da kayıt çemberinden geçiriyoruz
    const masada = o.masadakiVakalar();
    const vid = masada[masada.length - 1];
    o.vakaBaslat(vid); turAtla();
    let g2 = 0;
    while (o.acikKaynaklar().length && o.durum.aktif.arastirmaKalan > 0 && g2++ < 20) {
      o.kaynakAc(o.acikKaynaklar()[0].id); adim++; turAtla();
    }
    const kararlar = o.acikKararlar();
    if (!kararlar.length) throw new Error(vid + ": karar açılmadı (softlock)");
    o.kararVer(kararlar[0].id); adim++; turAtla();
  }
  k("tüm vakalar bitti", o.masadakiVakalar().length === 0);
  // Sayıyı sabitlemek yanlış iddiaydı: yan vakalar koşullu (YAN-C yalnızca
  // borç eşiği aşılınca beliriyor), yani bu gidişatın kaç vaka göreceği
  // içeriğe bağlı. Asıl iddia şu — omurganın tamamı oynandı, hiçbir vaka
  // iki kez sayılmadı.
  const omurga = g.vakalar.filter(v => v.tur === "omurga").map(v => v.id);
  const eksikOmurga = omurga.filter(id => !o.durum.tamamlanan.includes(id));
  k("omurga vakaların hepsi tamamlandı", eksikOmurga.length === 0, eksikOmurga.join(","));
  k("hiçbir vaka iki kez tamamlanmadı",
    new Set(o.durum.tamamlanan).size === o.durum.tamamlanan.length,
    o.durum.tamamlanan.join(" → "));
  k("final kararı yazıldı", o.durum.seeds.final_karar !== undefined);
  k("kalıcı olgular taşındı", (o.durum.kaliciOlgular || []).length > 0);
  console.log("   → " + adim + " adımın her birinde kaydedilip yeniden yüklendi");
}

console.log("\n=== VAKA ARASINDA (aktif vaka yokken) ===");
{
  const o = new Oyun(g);
  o.vakaBaslat("V1");
  o.kararVer(o.acikKararlar()[0].id);           // vaka bitti, aktif = null
  const kay = kopya(o.durumAl());
  k("aktif null olarak kaydedildi", kay.aktif === null);
  const y = new Oyun(g);
  k("yüklendi", y.durumYukle(kay).ok === true);
  k("aktif vaka yok", y.durum.aktif === null);
  k("masadaki vakalar aynı",
    y.masadakiVakalar().join(",") === o.masadakiVakalar().join(","));
  k("kalıcı olgular korundu",
    (y.durum.kaliciOlgular || []).sort().join(",") === (o.durum.kaliciOlgular || []).sort().join(","));
  k("künye bilgisi korundu",
    [...y.tumBilinen()].sort().join(",") === [...o.tumBilinen()].sort().join(","));
}

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== KAYIT TESTİ TAMAM ===");
process.exit(hata ? 1 : 0);
