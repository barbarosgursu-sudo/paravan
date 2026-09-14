// BORCUN SONUÇLARI
//
// Borç bir sayı olarak kalırsa kimseyi sıkmaz. Ödenmeyen her gider kaleminin
// kendi sonucu var ve hiçbiri oyunu bitirmiyor (kaybetme yok). Bu testler
// tırmanmayı, geri alınabilirliği ve cezanın oyunu kilitlememesini koruyor.
const { Oyun, giderToplam, ekonomiAl } = require("./motor.js");
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? " → " + ek : "")); if (!ok) hata++; };
const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";
// JS'in /i/ bayrağı Türkçe İ'yi (U+0130) i'ye katlamıyor — elle katlıyoruz.
const tr = x => String(x).toLocaleLowerCase("tr");
const GIDER = giderToplam(g);

// Belirli bir kasayla bir omurga ay kapat; ekonomi dökümünü döndür
function ayKapat(kasa, once) {
  const o = new Oyun(g);
  o.durum.para = kasa; o.durum.borc = 0;
  if (once) once(o);
  o.vakaBaslat("V1");
  const r = o.kararVer("reddet");          // ücreti 0 — kasa neyse o kalır
  return { o, r };
}

console.log("=== TIRMANMA: para azaldıkça sırayla çöküyor ===");
{
  const kalem = Object.entries(ekonomiAl(g).gider);
  console.log("   ödeme sırası: " + kalem.map(x => x[0]).join(" → "));

  const t = (kasa, beklenen) => {
    const { r } = ayKapat(kasa);
    const olan = (r.ekonomi.yeniKrizler || []).sort().join(",");
    k(`kasa ${tl(kasa)} → [${beklenen.join(",") || "kriz yok"}]`,
      olan === beklenen.sort().join(","), olan || "kriz yok");
  };
  t(GIDER, []);                    // tamı tamına yetiyor
  t(GIDER - 4000, []);             // son kalemin yarısından azı açık
  t(GIDER - 8000, ["isletme"]);    // ışıklar
  t(GIDER - 30000, ["isletme", "cengo"]);
  t(0, ["isletme", "cengo", "kira"]);
}

console.log("\n=== EŞİK: kalemin YARIDAN FAZLASI açık kalmalı ===");
{
  // Kirasının çoğunu ödeyen kiracı icraya verilmez. Eşik olmadan tek kötü ay
  // üç krizi birden patlatıyordu ve tırmanma diye bir şey kalmıyordu.
  const kira = Object.entries(ekonomiAl(g).gider).find(([ad]) => tr(ad).includes("kira"));
  // Kira İLK ödenen kalem; ne kadarının açık kaldığını doğrudan kasa belirliyor.
  const az = ayKapat(kira[1] * 0.7);               // kiranın %70'i ödendi
  k("kiranın çoğu ödendiyse icra YOK", !az.o.durum.kriz.kira,
    "açık " + tl(kira[1] * 0.3) + " / " + tl(kira[1]));
  const cok = ayKapat(kira[1] * 0.3);              // kiranın %30'u ödendi
  k("kiranın çoğu ödenmediyse icra VAR", cok.o.durum.kriz.kira,
    "açık " + tl(kira[1] * 0.7) + " / " + tl(kira[1]));
}

console.log("\n=== ELEKTRİK: araştırma hakkı gerçekten eksiliyor ===");
{
  const { o } = ayKapat(GIDER - 8000);
  k("elektrik kesildi", o.durum.kriz.isletme === true);
  o.vakaBaslat("V2");
  const v2 = g.vakalar.find(x => x.id === "V2");
  k("V2'de bir hak eksik", o.durum.aktif.arastirmaKalan === v2.arastirma - 1,
    o.durum.aktif.arastirmaKalan + " / " + v2.arastirma);

  // Ceza oyunu KİLİTLEMEMELİ: hakkı 1 olan vakada taban 1'de duruyor.
  const enDar = g.vakalar.reduce((a, b) => ((a.arastirma ?? 3) <= (b.arastirma ?? 3) ? a : b));
  const o2 = new Oyun(g); o2.durum.kriz.isletme = true;
  o2.durum.tamamlanan = g.vakalar.filter(v => v.tur === "omurga" && v.sira < enDar.sira).map(v => v.id);
  o2.vakaBaslat(enDar.id);
  k(`en dar vaka (${enDar.id}, hak ${enDar.arastirma}) sıfıra inmiyor`,
    o2.durum.aktif.arastirmaKalan >= 1, String(o2.durum.aktif.arastirmaKalan));
}

console.log("\n=== ÇEKİRDEK KAYNAK CEZAYLA SİLİNEMİYOR ===");
{
  // Krizler araştırma GENİŞLİĞİNİ kısabilir, ama vakanın başlığını anlamlı
  // kılan tek delili erişilemez kılamaz. Aksi halde ekonomik ceza anlatı
  // içeriğini elinden alır — incelemedeki asıl endişe buydu.
  const cekirdekli = g.vakalar.filter(v => (v.clues || []).some(c => c.cekirdek));
  k("en az bir vakada çekirdek kaynak işaretli", cekirdekli.length > 0,
    cekirdekli.map(v => v.id + "/" + v.clues.filter(c => c.cekirdek).map(c => c.id).join("+")).join(", "));

  for (const v of cekirdekli) {
    const cekirdek = v.clues.filter(c => c.cekirdek).map(c => c.id);
    const kur = (kesik) => {
      const o = new Oyun(g);
      o.durum.para = 3000000;
      o.durum.kriz.isletme = kesik;
      o.durum.seeds.cavit_ceyda_bilinir = true;     // zinciri çözmüş oyuncu
      o.durum.tamamlanan = g.vakalar
        .filter(x => x.tur === "omurga" && x.sira < v.sira).map(x => x.id);
      o.vakaBaslat(v.id);
      let n = 0;
      while (o.acikKaynaklar().length && n++ < 12) {
        if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break;
      }
      return o;
    };
    const acik = kur(false), kesik = kur(true);
    k(`${v.id}: elektrik varken çekirdek açılıyor (test anlamlı)`,
      cekirdek.every(id => acik.durum.aktif.acilanKaynaklar.has(id)));
    k(`${v.id}: elektrik KESİKKEN de çekirdek açılıyor`,
      cekirdek.every(id => kesik.durum.aktif.acilanKaynaklar.has(id)),
      "hak " + kesik.durum.aktif.arastirmaKalan);
  }

  // Koruma tesadüfe değil hesaba dayanmalı: bütçe artsa da çekirdek erişilebilir
  // kalmalı, ama ceza yine de uygulanmalı (genişlik kısılır, çekirdek kalır).
  const g2 = JSON.parse(JSON.stringify(g));
  const v6 = g2.vakalar.find(x => x.id === "V6");
  v6.arastirma = 3;
  const o2 = new Oyun(g2);
  o2.durum.kriz.isletme = true;
  o2.durum.seeds.cavit_ceyda_bilinir = true;
  o2.durum.tamamlanan = ["V1", "V2", "V3", "V4", "V5"];
  o2.vakaBaslat("V6");
  k("bütçe büyükse ceza yine de uygulanıyor", o2.durum.aktif.arastirmaKalan === 2,
    "3 → " + o2.durum.aktif.arastirmaKalan);

  // Çekirdeği olmayan vakada hesap hiç çalışmamalı (hız ve basitlik)
  const v1 = g.vakalar.find(x => x.id === "V1");
  const o3 = new Oyun(g);
  k("çekirdeksiz vakada maliyet 0", o3._cekirdekMaliyet(v1) === 0);
}

console.log("\n=== HİÇBİR VAKA CEZAYLA KİLİTLENMİYOR ===");
{
  // Elektrik kesikken de her vakada, bütçeyi harcamanın HER biçiminde,
  // en az bir karar açık kalmalı.
  for (const v of g.vakalar) {
    let enDar = null, yollar = 0;
    const dene = (ac) => {
      const o = new Oyun(g);
      o.durum.kriz.isletme = true;
      try { o.vakaBaslat(v.id); } catch (e) { return; }
      for (const id of ac) if (o.kaynakAc(id).hata) return;
      const alinabilir = o.acikKaynaklar().filter(c => {
        const t = v.clues.find(x => x.id === c.id);
        return t.bedelsiz || o.durum.aktif.arastirmaKalan > 0;
      });
      if (!alinabilir.length) {
        yollar++;
        const n = o.acikKararlar().length;
        if (enDar === null || n < enDar) enDar = n;
        return;
      }
      for (const c of alinabilir) dene([...ac, c.id]);
    };
    dene([]);
    k(`${v.id}: ${yollar} yolun hepsinde karar açık (elektrik kesik)`,
      enDar !== null && enDar > 0, "en dar: " + enDar);
  }
}

console.log("\n=== KRİZ, AHLAKEN SAVUNULABİLİR SEÇENEĞİ SİLEMİYOR ===");
{
  // "En az bir karar açık" yetmiyor. 3. inceleme turunda yakalanan şey şuydu:
  // elektrik kesikken V3'te dürüst oynamaya çalışan oyuncunun elinde YALNIZCA
  // "tanığı 'güvenilmez' diye rapor et" kalıyordu — yani oyun ona "yanlış
  // araştırdın, şimdi doğru söyleyen kadını lekele" diyordu. YAN-B'de de bir
  // yol yalnızca "geçiştir"e düşüyordu.
  //
  // Asıl garanti: bütçeyi harcamanın HER biçiminde, vicdanı eksi OLMAYAN en
  // az bir karar açık kalmalı. Oyuncu kendini kirletmeye ZORLANMAMALI.
  for (const v of g.vakalar) {
    const vicdan = Object.fromEntries(v.decisions.map(d => [d.id, d.cengoBag || 0]));
    let kotuYol = null, yollar = 0;
    const dene = (ac) => {
      if (kotuYol) return;
      const o = new Oyun(g);
      o.durum.para = 3000000;
      o.durum.kriz.isletme = true;
      o.durum.tamamlanan = g.vakalar.filter(x => x.tur === "omurga" && x.sira < (v.sira || 99)).map(x => x.id);
      try { o.vakaBaslat(v.id); } catch (e) { return; }
      for (const id of ac) if (o.kaynakAc(id).hata) return;
      const alinabilir = o.acikKaynaklar().filter(c => {
        const t = v.clues.find(x => x.id === c.id);
        return o.bedelsizMi(t) || o.durum.aktif.arastirmaKalan > 0;
      });
      if (!alinabilir.length) {
        yollar++;
        const kararlar = o.acikKararlar().map(x => x.id);
        if (!kararlar.some(id => vicdan[id] >= 0)) kotuYol = { ac, kararlar };
        return;
      }
      for (const c of alinabilir) dene([...ac, c.id]);
    };
    dene([]);
    k(`${v.id}: ${yollar} yolun hepsinde vicdanı eksi olmayan bir seçenek var`,
      !kotuYol,
      kotuYol ? kotuYol.ac.join(" → ") + "  ⇒ yalnız [" +
                kotuYol.kararlar.map(id => id + "(" + vicdan[id] + ")").join(",") + "]" : "");
  }
}

console.log("\n=== İCRA: aylık gidere kalem ekliyor ===");
{
  const { o } = ayKapat(0);
  k("icra başladı", o.durum.kriz.kira === true);
  o.durum.para = 500000;                       // artık ödeyebiliyor
  o.vakaBaslat("V2");
  const r = o.kararVer("kuru_rapor");
  const icra = r.ekonomi.giderler.find(x => tr(x.ad).includes("icra"));
  k("icra takip masrafı kesildi", !!icra, icra ? tl(icra.tutar) : "yok");
  k("bu ay her şey ödendiğine göre icra kalktı", o.durum.kriz.kira === false);

  const o2 = new Oyun(g); o2.durum.para = 500000;
  o2.vakaBaslat("V1");
  const r2 = o2.kararVer("reddet");
  k("icra yokken o kalem hiç görünmüyor", !r2.ekonomi.giderler.some(x => tr(x.ad).includes("icra")));
}

console.log("\n=== CENGO: ödeyememek ilişkiyi aşındırıyor ===");
{
  const o = new Oyun(g);
  o.durum.para = 0;
  o.vakaBaslat("V1");
  const once = o.durum.cengoBag;
  const d = g.vakalar.find(v => v.id === "V1").decisions.find(x => x.id === "reddet");
  const r = o.kararVer("reddet");
  k("Cengo'ya ödenemedi", o.durum.kriz.cengo === true);
  k("bağ, kararın kendi etkisinin ÜSTÜNE bir düştü",
    o.durum.cengoBag === once + (d.cengoBag || 0) - 1,
    once + " → " + o.durum.cengoBag + " (karar " + (d.cengoBag || 0) + ", kriz −1)");

  // Ödeyebilen oyuncuda ceza yok
  const t = new Oyun(g); t.durum.para = 500000;
  t.vakaBaslat("V1");
  const oncekiT = t.durum.cengoBag;
  t.kararVer("reddet");
  k("ödeyende ceza yok", t.durum.cengoBag === oncekiT + (d.cengoBag || 0) && !t.durum.kriz.cengo);
}

console.log("\n=== CENGO'NUN ALACAĞI BİRİKİYOR ===");
{
  // Anlık kriz bayrağı geçmişi anlatmıyor. Finalde "Bağlı, ama beş aydır
  // eline tam para geçmedi" diyebilmek için sayaç gerekiyordu.
  const o = new Oyun(g);
  o.durum.para = 0;
  const cengo = Object.entries(ekonomiAl(g).gider).find(([ad]) => tr(ad).includes("cengo"));
  o.vakaBaslat("V1"); o.kararVer("reddet");
  k("bir ay açık kaldı", o.durum.gecmis.cengoAcikAy === 1, String(o.durum.gecmis.cengoAcikAy));
  k("alacak eksik ödenen kadar", o.durum.gecmis.cengoAlacak > 0, tl(o.durum.gecmis.cengoAlacak));
  const ilkAlacak = o.durum.gecmis.cengoAlacak;
  o.vakaBaslat("V2"); o.kararVer("kuru_rapor");
  k("ikinci ay da eklendi", o.durum.gecmis.cengoAcikAy === 2);
  k("alacak büyüdü", o.durum.gecmis.cengoAlacak > ilkAlacak, tl(o.durum.gecmis.cengoAlacak));

  // Ödeyen oyuncuda sayaç işlemiyor
  const t = new Oyun(g); t.durum.para = 500000;
  t.vakaBaslat("V1"); t.kararVer("reddet");
  k("ödeyende alacak yok", t.durum.gecmis.cengoAcikAy === 0);

  // Alacak, kriz EŞİĞİNDEN bağımsız: yarısını ödemek "ödedim" değil
  const y = new Oyun(g);
  const oncekiler = Object.entries(ekonomiAl(g).gider);
  const kiraTutar = oncekiler[0][1];
  y.durum.para = kiraTutar + Math.round(cengo[1] * 0.8);   // Cengo'nun %80'i
  y.vakaBaslat("V1"); y.kararVer("reddet");
  k("Cengo krizi yanmadı (yarıdan azı açık)", y.durum.kriz.cengo === false);
  k("ama alacak yine de kaydedildi", y.durum.gecmis.cengoAcikAy === 1,
    tl(y.durum.gecmis.cengoAlacak));

  // Arayüz finalde ikisini birlikte gösteriyor
  const ui = fs.readFileSync("build_html.js", "utf-8");
  k("final ekranı alacağı gösteriyor", /cengo-alacak/.test(ui));
  k("ilişki kademesi düşürülmedi, fatura eklendi", /cengoSatir/.test(ui));
}

console.log("\n=== FİNAL MÜHRÜ AYNI AY GERİ ALINMIYOR ===");
{
  // cavit_ver, Cengo zaten "Yakın"sa ilişkiyi "Bağlı"ya mühürlüyor. Mühür
  // kriz hesabından ÖNCE vuruluyordu ve aynı ay Cengo'ya ödenemezse −1 onu
  // hemen geri alıyordu: "Bağlı" sessizce "Yakın"a düşüyordu.
  const kur = (para) => {
    const o = new Oyun(g);
    o.durum.para = para;
    o.durum.cengoBag = 4;                       // "Yakın"
    o.durum.seeds.cavit_ceyda_bilinir = true;
    o.durum.tamamlanan = ["V1", "V2", "V3", "V4", "V5"];
    o.vakaBaslat("V6");
    let n = 0;
    while (o.acikKaynaklar().length && n++ < 4) { if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break; }
    o.kararVer("cavit_ver");
    return o;
  };
  const zengin = kur(500000), fakir = kur(0);
  k("ödeyen oyuncuda mühür tuttu", zengin.durum.cengoBag >= 6, String(zengin.durum.cengoBag));
  k("ödeyemeyen oyuncuda da mühür tuttu", fakir.durum.cengoBag >= 6, String(fakir.durum.cengoBag));
  k("ama alacağı yine de kaydedildi", fakir.durum.gecmis.cengoAcikAy > 0,
    fakir.durum.gecmis.cengoAcikAy + " ay");
}

console.log("\n=== GERİ ALINABİLİR: ödeyince sonuçlar kalkıyor ===");
{
  const { o } = ayKapat(0);
  k("üç kriz de yandı", o.durum.kriz.isletme && o.durum.kriz.cengo && o.durum.kriz.kira);
  o.durum.para = 500000; o.durum.borc = 0;
  o.vakaBaslat("V2");
  o.kararVer("kuru_rapor");
  k("hepsi söndü", !o.durum.kriz.isletme && !o.durum.kriz.cengo && !o.durum.kriz.kira,
    JSON.stringify(o.durum.kriz));
}

console.log("\n=== YAN İŞ AY KAPATMIYOR: kriz değerlendirmesi yapmaz ===");
{
  const o = new Oyun(g);
  o.durum.para = 0; o.durum.borc = 200000;
  o.durum.tamamlanan = ["V1", "V2"];
  o.vakaBaslat("YAN-A");
  let n = 0;
  while (o.acikKaynaklar().length && o.durum.aktif.arastirmaKalan > 0 && n++ < 8) {
    if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break;
  }
  const r = o.kararVer(o.acikKararlar()[0].id);
  k("yan işte gider kesilmedi", r.ekonomi.giderler.length === 0);
  k("yan işte kriz yanmadı", (r.ekonomi.yeniKrizler || []).length === 0);
}

console.log("\n=== KAYIT KRİZİ TAŞIYOR ===");
{
  const { o } = ayKapat(0);
  const kay = JSON.parse(JSON.stringify(o.durumAl()));
  k("kayıtta kriz alanı var", !!kay.kriz, JSON.stringify(kay.kriz));
  const y = new Oyun(g);
  k("yüklendi", y.durumYukle(kay).ok === true);
  k("kriz birebir korundu", JSON.stringify(y.durum.kriz) === JSON.stringify(o.durum.kriz));
  y.vakaBaslat("V2");
  const v2 = g.vakalar.find(x => x.id === "V2");
  k("yüklenen oyunda da hak eksik", y.durum.aktif.arastirmaKalan === v2.arastirma - 1);
}

console.log("\n=== MOTOR VE ARAYÜZ AYNI ŞEYİ SÖYLÜYOR ===");
{
  // Kriz metinleri iki yerde duruyor (motor: KRIZLER, arayüz: KRIZ_METIN),
  // çünkü arayüz motordan okuyamıyor. Ayrışmalarını burada yakalıyoruz.
  const ui = fs.readFileSync("build_html.js", "utf-8");
  const motorKaynak = fs.readFileSync("motor.js", "utf-8");
  for (const ad of ["isletme", "cengo", "kira"]) {
    const m = new RegExp(ad + ":\\s*\\{[^}]*?ad:\\s*\"([^\"]+)\"", "s");
    const mo = motorKaynak.match(m), ar = ui.match(m);
    k(`${ad}: iki tarafta da tanımlı`, !!mo && !!ar);
    if (mo && ar) k(`${ad}: başlık aynı`, mo[1] === ar[1], mo[1] + " ≟ " + ar[1]);
  }
}

console.log("\n" + (hata === 0 ? "=== BORÇ TESTİ TAMAM ===" : "=== " + hata + " BAŞARISIZ ==="));
process.exit(hata ? 1 : 0);
