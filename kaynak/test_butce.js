// BÜTÇE / ERİŞİLEBİLİRLİK TESTİ
// ChatGPT'nin canlı oyunda takıldığı hata buradan geçmeliydi:
// V1'de 3 hak "yanlış" sırayla harcanınca 'Cengo saatleri karşılaştırır'
// listede görünüyor ama açılamıyor, üstelik hiçbir açıklama gelmiyordu.
const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json", "utf-8"));
let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? " → " + ek : "")); if (!ok) hata++; };

// Hedef kaynağı açılabilir hale getiren bir açma sırası bul (türetilmiş
// olguları da kovalar — motoru kullandığı için oyunla birebir aynı davranır).
// Tohuma bağlı kaynaklar boş tohumlarla bakıldığında hep "ölü" görünür.
// Doğru soru: HERHANGİ bir oyun gidişatında açılabiliyor mu?
function tohumBirlesimleri(vaka) {
  const degerler = new Map();
  const tara = (x) => {
    if (!x || typeof x !== "object") return;
    if (x.seed) {
      if (!degerler.has(x.seed)) degerler.set(x.seed, new Set([undefined]));
      degerler.get(x.seed).add(x.esit === undefined ? true : x.esit);
    }
    for (const key of Object.keys(x)) tara(x[key]);
  };
  tara(vaka.clues); tara(vaka.knowledge); tara(vaka.giris);
  let out = [{}];
  for (const [ad, kume] of degerler) {
    const yeni = [];
    for (const b of out) for (const d of kume) {
      const kopya = { ...b };
      if (d === undefined) delete kopya[ad]; else kopya[ad] = d;
      yeni.push(kopya);
    }
    out = yeni;
    if (out.length > 32) break;
  }
  return out;
}

function yoluBul(vid, hedef) {
  const vaka = g.vakalar.find(v => v.id === vid);
  const hak = vaka.arastirma ?? 3;
  const gorulen = new Set();
  let sonuc = null;
  const dfs = (acilmis, harcanan) => {
    if (sonuc) return;
    const anahtar = [...acilmis].sort().join("|");
    if (gorulen.has(anahtar)) return;
    gorulen.add(anahtar);
    const o = new Oyun(g);
    o.vakaBaslat(vid);
    for (const id of acilmis) if (o.kaynakAc(id).hata) return;
    if (o.acikKaynaklar().some(c => c.id === hedef)) { sonuc = acilmis; return; }
    for (const c of o.acikKaynaklar()) {
      const t = vaka.clues.find(x => x.id === c.id);
      const m = harcanan + (t.bedelsiz ? 0 : 1);
      if (m > hak) continue;
      dfs([...acilmis, c.id], m);
    }
  };
  dfs([], 0);
  return sonuc;
}

console.log("=== V1: ChatGPT'nin izlediği yol artık çalışıyor ===");
{
  const o = new Oyun(g);
  o.vakaBaslat("V1");
  for (const id of ["polis_dosyasi", "ceyda_gorusme", "olay_yeri"]) {
    const r = o.kaynakAc(id);
    k("açıldı: " + id, !r.hata, r.hata || "");
  }
  k("üç hak da harcandı", o.durum.aktif.arastirmaKalan === 0);
  const acik = o.acikKaynaklar().map(x => x.id);
  k("Cengo bağlantısı listede", acik.includes("cengo_baglanti"), acik.join(","));
  const r = o.kaynakAc("cengo_baglanti");
  k("hak bitmişken bile AÇILIYOR (bedelsiz)", !r.hata, r.hata || "");
  k("gerçekten bilgi verdi", !!r.text);
  k("saat çelişkisi bilinenlere girdi", o.bilinenler().some(x => x.includes("celisk") || x.includes("saat")),
    o.bilinenler().join(","));
}

console.log("\n=== Bedelsiz kaynaklar hak harcamıyor ===");
{
  for (const [vid, cid] of [["V1", "cengo_baglanti"], ["V3", "cengo_okuma"]]) {
    const yol = yoluBul(vid, cid);
    k(`${vid}/${cid}: kilidini açan bir yol var`, !!yol, yol ? yol.join(" → ") : "yol bulunamadı");
    if (!yol) continue;
    const o = new Oyun(g);
    o.vakaBaslat(vid);
    for (const id of yol) o.kaynakAc(id);
    const once = o.durum.aktif.arastirmaKalan;
    const r = o.kaynakAc(cid);
    k(`${vid}/${cid}: açıldı`, !r.hata, r.hata || "");
    k(`${vid}/${cid}: hak harcamadı`, o.durum.aktif.arastirmaKalan === once,
      once + " → " + o.durum.aktif.arastirmaKalan);
  }
}

console.log("\n=== Hiçbir kaynak ölü içerik değil (tüm vakalar) ===");
{
  for (const vaka of g.vakalar) {
    const hak = vaka.arastirma ?? 3;
    const enAz = {};
    for (const tohumlar of tohumBirlesimleri(vaka)) {
      const gorulen = new Set();
      const dfs = (acilmis, harcanan) => {
        const anahtar = [...acilmis].sort().join("|");
        if (gorulen.has(anahtar)) return;
        gorulen.add(anahtar);
        const o = new Oyun(g);
        Object.assign(o.durum.seeds, tohumlar);
        o.vakaBaslat(vaka.id);
        for (const id of acilmis) if (o.kaynakAc(id).hata) return;
        for (const c of o.acikKaynaklar()) {
          const tam = vaka.clues.find(x => x.id === c.id);
          const m = harcanan + (tam.bedelsiz ? 0 : 1);
          if (m > hak) continue;
          if (enAz[c.id] === undefined || m < enAz[c.id]) enAz[c.id] = m;
          dfs([...acilmis, c.id], m);
        }
      };
      dfs([], 0);
    }
    const olu = vaka.clues.filter(c => enAz[c.id] === undefined).map(c => c.id);
    k(`${vaka.id}: tüm kaynaklar bütçe içinde açılabiliyor`, olu.length === 0, olu.join(","));
  }
}

console.log("\n=== Açılamayan kaynak SEBEBİNİ söylüyor (sessiz dönüş yok) ===");
{
  const o = new Oyun(g);
  o.vakaBaslat("V2");
  // hakkı tüket
  let guv = 0;
  while (o.durum.aktif.arastirmaKalan > 0 && guv++ < 10) {
    const c = o.acikKaynaklar().find(x => !x.bedelsiz);
    if (!c || o.kaynakAc(c.id).hata) break;
  }
  const kalanAcik = o.acikKaynaklar();
  if (kalanAcik.length) {
    const r = o.kaynakAc(kalanAcik[0].id);
    k("motor hata mesajı döndürüyor", !!r.hata && typeof r.hata === "string", r.hata);
    k("mesaj oyuncuya anlaşılır", /hak|kilit/i.test(r.hata || ""), r.hata);
  } else {
    k("test anlamlı (hak bitince açık kaynak kaldı)", false, "açık kaynak kalmadı");
  }
}

console.log("\n=== HER HARCAMA YOLU BİTİYOR (kilitlenme yok) ===");
{
  // test_softlock tek bir yolu oynar; bu, bütçeyi harcamanın HER olası
  // biçimini dener ve hepsinde en az bir karar açık kalmasını şart koşar.
  for (const v of g.vakalar) {
    let enDar = null, yollar = 0;
    let aktifTohum = {};
    const dene = (ac) => {
      const o = new Oyun(g);
      Object.assign(o.durum.seeds, aktifTohum);
      o.vakaBaslat(v.id);
      for (const id of ac) if (o.kaynakAc(id).hata) return;
      const alinabilir = o.acikKaynaklar().filter(c => {
        const t = v.clues.find(x => x.id === c.id);
        return t.bedelsiz || o.durum.aktif.arastirmaKalan > 0;
      });
      if (!alinabilir.length) {
        yollar++;
        const kar = o.acikKararlar().map(x => x.id);
        if (!enDar || kar.length < enDar.length) enDar = kar;
        return;
      }
      for (const c of alinabilir) dene([...ac, c.id]);
    };
    for (const t of tohumBirlesimleri(v)) { aktifTohum = t; dene([]); }
    k(`${v.id}: ${yollar} harcama yolunun hepsinde karar açık`,
      enDar !== null && enDar.length > 0, enDar ? `en dar: ${enDar.length} karar` : "yol bulunamadı");
  }
}

console.log("\n=== YAN VAKALARDA SEÇİM BASKISI VAR ===");
{
  // Hak 3 iken 3 ücretli kaynağın hepsi alınıyordu, seçim yoktu.
  for (const vid of ["YAN-A", "YAN-B"]) {
    const v = g.vakalar.find(x => x.id === vid);
    const ucretli = v.clues.filter(c => !c.bedelsiz).length;
    k(`${vid}: ücretli kaynak (${ucretli}) hak'tan (${v.arastirma}) fazla — seçmek zorunda`,
      ucretli > v.arastirma);
  }
}

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== BÜTÇE TESTİ TAMAM ===");
process.exit(hata ? 1 : 0);
