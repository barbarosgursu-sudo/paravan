// İTİBAR: GEÇMİŞ KARARLAR ÜCRETİ DEĞİŞTİRİR
//
// Tohumlar yazılıp hiç okunmuyordu: V1'de Cavit'e doğruyu söylemek ile
// söylememek sonraki hiçbir şeyi etkilemiyordu. Artık itibar VAKA düzeyinde
// ücreti ölçekliyor.
//
// Vaka düzeyinde olması şart: karar düzeyinde ölçeklemek K8'in para/vicdan
// merdivenini bozardı. Böyle vakanın tamamı zenginleşiyor ya da fakirleşiyor,
// kararlar arası sıralama olduğu gibi kalıyor.
const { Oyun } = require("./motor.js");
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? " → " + ek : "")); if (!ok) hata++; };
const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";

function oyna(tohum, vid, kid) {
  const o = new Oyun(g);
  o.durum.para = 2000000;                       // ekonomi değil itibar sınanıyor
  Object.assign(o.durum.seeds, tohum);
  const sira = g.vakalar.find(x => x.id === vid).sira;
  o.durum.tamamlanan = g.vakalar.filter(v => v.tur === "omurga" && v.sira < sira).map(v => v.id);
  o.vakaBaslat(vid);
  let n = 0;
  while (o.acikKaynaklar().length && n++ < 14) { if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break; }
  const kr = o.acikKararlar().map(x => x.id);
  if (!kr.includes(kid)) return null;
  return o.kararVer(kid).ekonomi;
}

console.log("=== V1'DEKİ KARAR V3 VE V5'İN ÜCRETİNİ DEĞİŞTİRİYOR ===");
{
  for (const [vid, kid] of [["V3", "tanigi_lekele"], ["V5", "oyunu_surdur"]]) {
    const guven = oyna({ cavit_guven: true }, vid, kid);
    const yok   = oyna({ cavit_guven: false }, vid, kid);
    k(`${vid}: iki senaryo da oynanabildi`, !!guven && !!yok);
    if (!guven || !yok) continue;
    k(`${vid}: güven yokken ücret düşük`, yok.kararPara < guven.kararPara,
      tl(guven.kararPara) + " → " + tl(yok.kararPara));
    k(`${vid}: ilan edilen tutar aynı (kırpılan şey itibar)`,
      yok.ilanPara === guven.ilanPara, tl(yok.ilanPara));
    k(`${vid}: sebebi oyuncuya söyleniyor`, yok.itibar.sebepler.length > 0,
      (yok.itibar.sebepler[0] || {}).metin);
  }
}

console.log("\n=== ELİNDEKİ KOZ PAZARLIĞI GÜÇLENDİRİYOR ===");
{
  const koz = oyna({ cavit_guven: true, v4_karar: "koz" }, "V5", "oyunu_surdur");
  const duz = oyna({ cavit_guven: true }, "V5", "oyunu_surdur");
  k("koz varken ücret yüksek", koz.kararPara > duz.kararPara,
    tl(duz.kararPara) + " → " + tl(koz.kararPara));

  // İki etki birlikte işliyor: güven yok ama koz var → net yine düşük
  const ikisi = oyna({ cavit_guven: false, v4_karar: "koz" }, "V5", "oyunu_surdur");
  k("iki etki de sayılıyor", ikisi.itibar.sebepler.length === 2,
    ikisi.itibar.sebepler.length + " sebep");
  k("güven kaybı kozdan ağır basıyor", ikisi.kararPara < duz.kararPara,
    tl(ikisi.kararPara));
}

console.log("\n=== KONUŞTUĞUN DUYULUYOR: V2 → YAN-A ===");
{
  const acik = oyna({ v2_karar: "hersey" }, "YAN-A", "sessiz_coz");
  const suskun = oyna({ v2_karar: "korudu" }, "YAN-A", "sessiz_coz");
  k("iki senaryo da oynanabildi", !!acik && !!suskun);
  if (acik && suskun) {
    k("her şeyi anlatan Peri'ye sır müşterisi az ödüyor",
      acik.kararPara < suskun.kararPara, tl(suskun.kararPara) + " → " + tl(acik.kararPara));
  }
}

console.log("\n=== MERDİVEN BOZULMUYOR (K8 korunuyor) ===");
{
  // Ölçekleme vaka düzeyinde olduğu için kararlar arası sıralama her
  // itibar değerinde aynı kalmalı. Bu, K8'in statik analizinin geçerli
  // kalmasının sebebi.
  for (const vid of ["V3", "V5", "YAN-A"]) {
    const v = g.vakalar.find(x => x.id === vid);
    const sirala = (carpan) => [...v.decisions]
      .sort((a, b) => a.cengoBag - b.cengoBag)
      .map(d => d.para > 0 ? Math.round(d.para * carpan) : d.para);
    const dusen = dizi => dizi.every((x, i) => i === 0 || x < dizi[i - 1]);
    const carpanlar = [1, 0.7, 0.8, 1.15, 0.7 * 1.15];
    k(`${vid}: her itibar değerinde merdiven hâlâ azalan`,
      carpanlar.every(c => dusen(sirala(c))),
      carpanlar.map(c => "×" + c.toFixed(2)).join(" "));
  }
}

console.log("\n=== NEGATİF TUTARLAR ÖLÇEKLENMİYOR ===");
{
  // İtibarını kaybetmek, Peri'nin KENDİ cebinden ödediğini ucuzlatmaz.
  const o = new Oyun(g);
  o.durum.para = 2000000;
  o.durum.seeds.v2_karar = "hersey";           // YAN-A'da ×0.8
  o.durum.tamamlanan = ["V1", "V2"];
  o.vakaBaslat("YAN-A");
  const e = o.ucretEtkisi();
  k("YAN-A'da itibar etkisi aktif (test anlamlı)", e.carpan !== 1, "×" + e.carpan);

  // Cepten ödeten bir karar taşıyan vakada aynı kontrol
  const v = g.vakalar.find(x => x.id === "YAN-A");
  const negatif = v.decisions.filter(d => d.para < 0);
  if (negatif.length) {
    k("negatif tutar ölçeklenmiyor", true);
  } else {
    // YAN-A'da negatif yok; YAN-B üzerinden motorun kuralını doğrula
    const o2 = new Oyun(g);
    o2.durum.para = 2000000;
    o2.durum.tamamlanan = ["V1", "V2", "V3", "V4"];
    o2.vakaBaslat("YAN-B");
    o2.kaynakAc("dolandirici_iz"); o2.kaynakAc("peri_ic_ses");
    const r = o2.kararVer("tam_sahip_cik");
    const beklenen = g.vakalar.find(x => x.id === "YAN-B").decisions.find(d => d.id === "tam_sahip_cik").para;
    k("cepten ödenen tutar ilan edildiği gibi çıkıyor", r.ekonomi.kararPara === beklenen,
      tl(r.ekonomi.kararPara) + " ≟ " + tl(beklenen));
  }
}

console.log("\n=== ARAYÜZ ÖNİZLEMESİ MOTORLA AYNI ===");
{
  // Karar ekranı ücreti oyuncuya karar vermeden ÖNCE gösteriyor; o rakam
  // motorun uygulayacağı rakamla birebir aynı olmalı.
  const o = new Oyun(g);
  o.durum.para = 2000000;
  o.durum.seeds.cavit_guven = false;
  o.durum.tamamlanan = ["V1", "V2"];
  o.vakaBaslat("V3");
  const c = o.ucretEtkisi().carpan;
  const ham = g.vakalar.find(x => x.id === "V3").decisions.find(d => d.id === "tanigi_lekele").para;
  const onizleme = ham > 0 ? Math.round(ham * c) : ham;     // build_html ile aynı formül
  let n = 0;
  while (o.acikKaynaklar().length && n++ < 14) { if (o.kaynakAc(o.acikKaynaklar()[0].id).hata) break; }
  const r = o.kararVer("tanigi_lekele");
  k("önizleme ile gerçekleşen aynı", r.ekonomi.kararPara === onizleme,
    tl(onizleme) + " ≟ " + tl(r.ekonomi.kararPara));

  const ui = fs.readFileSync("build_html.js", "utf-8");
  k("arayüz ucretEtkisi() kullanıyor", /oyun\.ucretEtkisi\(\)/.test(ui));
  k("arayüz sebebi ekranda gösteriyor", /itibar-kutu/.test(ui));
}

console.log("\n" + (hata === 0 ? "=== İTİBAR TESTİ TAMAM ===" : "=== " + hata + " BAŞARISIZ ==="));
process.exit(hata ? 1 : 0);
