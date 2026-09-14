// EKONOMİ TESTİ
// Tasarım tezi: para bir SKOR değil, bir KISIT. Batmak oyunu bitirmez —
// düzgün olma hakkını elinden alır. Bu testler o tezi koruyor.
const { Oyun, giderToplam, ekonomiAl } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json", "utf-8"));
let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? " → " + ek : "")); if (!ok) hata++; };
const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";

// Belirli bir kararı açan bir araştırma yolu bul (kapıları kovalar).
function kararIcinOyna(vid, kararId) {
  const vaka = g.vakalar.find(v => v.id === vid);
  const hak = vaka.arastirma ?? 3;
  const gorulen = new Set();
  let yol = null;
  const dfs = (ac, harc) => {
    if (yol) return;
    const anahtar = [...ac].sort().join("|");
    if (gorulen.has(anahtar)) return;
    gorulen.add(anahtar);
    const o = new Oyun(g);
    o.vakaBaslat(vid);
    for (const id of ac) if (o.kaynakAc(id).hata) return;
    if (o.acikKararlar().some(d => d.id === kararId)) { yol = ac; return; }
    for (const c of o.acikKaynaklar()) {
      const t = vaka.clues.find(x => x.id === c.id);
      const m = harc + (t.bedelsiz ? 0 : 1);
      if (m > hak) continue;
      dfs([...ac, c.id], m);
    }
  };
  dfs([], 0);
  return yol;
}

console.log("=== RAKAMLAR GERÇEKÇİ (2026 seviyeleri) ===");
{
  const e = ekonomiAl(g);
  const gider = giderToplam(g);
  const ASGARI_NET = 28075;                       // 2026 net asgari ücret
  k("başlangıç kasası tanımlı", e.baslangic_kasa > 0, tl(e.baslangic_kasa));
  k("aylık gider asgari ücretin üstünde", gider > ASGARI_NET, tl(gider));
  // Cengo'ya ödenen kalem, eline geçen NET asgari ücretin altında olmamalı.
  // Bilerek net kullanılıyor, resmî işveren maliyeti (~40.214 ₺) değil:
  // Paravan bir paravan şirket, Cengo'ya elden ödeme yapılıyor. Kalem adı da
  // bunu söylüyor — rakamın hangi muhasebe kaleminden geldiği belirsiz kalmasın.
  const cengoKalem = Object.entries(e.gider).find(([ad]) => /cengo/i.test(ad));
  k("Cengo kalemi tanımlı", !!cengoKalem, cengoKalem ? cengoKalem[0] : "yok");
  k("Cengo'ya ödenen net asgari ücretin altında değil",
    cengoKalem && cengoKalem[1] >= ASGARI_NET, cengoKalem ? tl(cengoKalem[1]) : "-");
  k("kalem adı ödemenin biçimini söylüyor (elden/net)",
    cengoKalem && /elden|net/i.test(cengoKalem[0]), cengoKalem ? cengoKalem[0] : "-");
  k("başlangıç kasası iki aylık gideri karşılamıyor (baskı var)",
    e.baslangic_kasa < gider * 2, tl(e.baslangic_kasa) + " / " + tl(gider) + " aylık");
}

console.log("\n=== KARAR PARAYI GERÇEKTEN DEĞİŞTİRİYOR ===");
{
  const paralar = new Set();
  for (const kid of ["temiz_rapor", "gizli_kaz", "soyle_cavit", "reddet"]) {
    const yol = kararIcinOyna("V1", kid);
    k(`${kid}: kararı açan bir yol var`, !!yol, yol ? yol.join(" → ") : "yol yok");
    if (!yol) continue;
    const o = new Oyun(g);
    o.vakaBaslat("V1");
    for (const id of yol) o.kaynakAc(id);
    const once = o.durum.para;
    const r = o.kararVer(kid);
    k(`${kid}: karar geçerli`, !r.hata, r.hata || "");
    k(`${kid}: ekonomi dökümü döndü`, !!r.ekonomi);
    if (!r.ekonomi) continue;
    k(`${kid}: kasa değişti`, o.durum.para !== once || o.durum.borc > 0,
      tl(once) + " → " + tl(o.durum.para));
    paralar.add(r.ekonomi.kararPara);
  }
  k("dört karar dört farklı tutar getiriyor", paralar.size === 4, [...paralar].map(tl).join(" | "));
}

console.log("\n=== KAYBETME YOK: kasa bitince oyun devam eder ===");
{
  const o = new Oyun(g);
  o.durum.para = 0;                               // beş parasız
  o.vakaBaslat("V1");
  k("parasızken vaka başlatılabiliyor", !!o.durum.aktif);
  k("ücretsiz kaynaklar hâlâ açık", o.acikKaynaklar().length > 0);
  let guv = 0;
  while (o.acikKaynaklar().length && o.durum.aktif.arastirmaKalan > 0 && guv++ < 10) {
    const c = o.acikKaynaklar()[0];
    if (o.kaynakAc(c.id).hata) break;
  }
  k("karar verebiliyor (kilitlenme yok)", o.acikKararlar().length > 0);
  // en az kazandıran kararı seç: giderler karşılanamayacak, borç doğmalı
  const v1 = g.vakalar.find(x => x.id === "V1");
  const enAz = o.acikKararlar()
    .map(d => ({ id: d.id, para: (v1.decisions.find(x => x.id === d.id).para) || 0 }))
    .sort((a, b) => a.para - b.para)[0];
  const r = o.kararVer(enAz.id);
  k("karar geçti", !r.hata, enAz.id + " (" + tl(enAz.para) + ")");
  k("kasa asla eksiye düşmüyor", o.durum.para >= 0, tl(o.durum.para));
  k("eksik borca yazıldı", o.durum.borc > 0, tl(o.durum.borc));
}

console.log("\n=== BORÇ BİRİKİYOR AMA OYUNU BİTİRMİYOR ===");
{
  let o = new Oyun(g);
  o.durum.para = 0; o.durum.borc = 100000;
  const oncekiBorc = o.durum.borc;
  o.vakaBaslat("V1");
  o.kararVer("reddet");                           // hiç para getirmeyen karar
  k("borç büyüdü", o.durum.borc > oncekiBorc, tl(oncekiBorc) + " → " + tl(o.durum.borc));
  k("faiz işledi", o.durum.borc > oncekiBorc + giderToplam(g),
    "faiz oranı " + ekonomiAl(g).borc_faizi);
  k("oyun devam ediyor", o.masadakiVakalar().length > 0);
}

console.log("\n=== YOKSULLUK SEÇENEK KAPATIR (ücretli kaynak) ===");
{
  const ucretli = [];
  for (const v of g.vakalar) for (const c of v.clues) if (c.ucret) ucretli.push([v.id, c.id, c.ucret]);
  if (!ucretli.length) {
    console.log("   (henüz ücretli kaynak yok — ekonomi turu tamamlanınca eklenecek)");
  } else {
    const [vid, cid, ucret] = ucretli[0];
    const zengin = new Oyun(g); zengin.durum.para = ucret * 3; zengin.vakaBaslat(vid);
    const fakir = new Oyun(g); fakir.durum.para = 0; fakir.vakaBaslat(vid);
    k("zengin oyuncu ücretli kaynağı açabiliyor", !zengin.kaynakAc(cid).hata);
    const r = fakir.kaynakAc(cid);
    k("fakir oyuncu açamıyor", !!r.hata, r.hata);
    k("sebep para olduğunu söylüyor", /kasa|para/i.test(r.hata || ""));
  }
}

console.log("\n=== YAN İŞLER İKİNCİ KİRA ÖDETMEZ ===");
{
  // Bir omurga vaka bir ay. Yan iş aynı ayın içinde yapılır.
  const omurga = new Oyun(g); omurga.vakaBaslat("V1");
  const rO = omurga.kararVer("reddet");
  k("omurga vakada sabit giderler kesildi", rO.ekonomi.giderler.length > 0,
    rO.ekonomi.giderler.length + " kalem");

  const yan = g.vakalar.find(v => v.tur === "yan");
  const o = new Oyun(g);
  o.durum.tamamlanan = [];
  o.vakaBaslat(yan.id);
  let guv = 0;
  while (o.acikKaynaklar().length && o.durum.aktif.arastirmaKalan > 0 && guv++ < 10) {
    if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break;
  }
  const rY = o.kararVer(o.acikKararlar()[0].id);
  k("yan vakada sabit gider kesilmedi", rY.ekonomi.giderler.length === 0);
}

console.log("\n=== KASA DURUMU SAYIYI VE ANLAMINI VERİYOR ===");
{
  const gider = giderToplam(g);
  const dene = (para, borc, beklenen) => {
    const o = new Oyun(g); o.durum.para = para; o.durum.borc = borc;
    const d = o.kasaDurumu();
    k(`${tl(para)}${borc ? " (borç " + tl(borc) + ")" : ""} → "${beklenen}"`, d.hal === beklenen, d.hal);
  };
  dene(gider * 3, 0, "idare eder");
  dene(gider * 1.5, 0, "dar");
  dene(gider * 0.5, 0, "kritik");
  dene(0, 50000, "batık");
}

console.log("\n=== KARAR ÖNİZLEMESİ MOTORLA AYNI SONUCU VERİYOR ===");
{
  // Karar ekranı "ay sonunda ne olacak" diye bir önizleme basıyor. O önizleme
  // motorun hesabını BİREBİR tekrar etmeli; etmezse oyuncuya yanlış rakamla
  // karar verdiriyoruz. Bu test iki hesabı karşılaştırır — motorun kapanış
  // sırası (önce giderler, SONRA borcun tamamına faiz) değişirse burası patlar
  // ve arayüzün de güncellenmesi gerektiğini söyler.
  const e = ekonomiAl(g), gider = giderToplam(g);
  const onizleme = (para, borc, kararPara, omurgaMi) => {
    const aylikGider = omurgaMi ? gider : 0;
    const kalan = para + kararPara - aylikGider;
    let borcSonra = borc + Math.max(0, -kalan);
    if (aylikGider && borcSonra > 0) borcSonra += Math.round(borcSonra * (e.borc_faizi || 0));
    return { kasa: Math.max(0, kalan), borc: borcSonra };
  };
  const dene = (vid, kid, para, borc) => {
    const o = new Oyun(g);
    o.durum.para = para; o.durum.borc = borc;
    const yol = kararIcinOyna(vid, kid);
    if (!yol) return k(`${vid}/${kid}: yol bulunamadı`, false);
    o.vakaBaslat(vid);
    for (const id of yol) o.kaynakAc(id);
    const omurgaMi = o.durum.aktif.vaka.tur === "omurga";
    const t = onizleme(para, borc, g.vakalar.find(v=>v.id===vid).decisions.find(d=>d.id===kid).para || 0, omurgaMi);
    o.kararVer(kid);
    k(`${vid}/${kid} (kasa ${tl(para)}, borç ${tl(borc)}): kasa uyuyor`,
      o.durum.para === t.kasa, tl(o.durum.para) + " ≟ " + tl(t.kasa));
    k(`${vid}/${kid}: borç uyuyor`, o.durum.borc === t.borc, tl(o.durum.borc) + " ≟ " + tl(t.borc));
  };
  dene("V3", "polise_ver",    21850,     0);   // borçsuzken borca giriş
  dene("V3", "polise_ver",    21850, 40000);   // borçluyken borç büyümesi
  dene("V3", "tanigi_lekele", 21850,     0);   // kâr eden ay
  dene("V3", "tanigi_lekele",  5000, 30000);   // kâr var ama borç faiziyle duruyor
}

console.log("\n=== KAYIT EKONOMİYİ TAŞIYOR ===");
{
  const o = new Oyun(g);
  o.vakaBaslat("V1");
  o.kararVer("temiz_rapor");
  const kay = JSON.parse(JSON.stringify(o.durumAl()));
  const y = new Oyun(g);
  k("yüklendi", y.durumYukle(kay).ok === true);
  k("kasa korundu", y.durum.para === o.durum.para, tl(y.durum.para));
  k("borç korundu", y.durum.borc === o.durum.borc);
}

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== EKONOMİ TESTİ TAMAM ===");
process.exit(hata ? 1 : 0);
