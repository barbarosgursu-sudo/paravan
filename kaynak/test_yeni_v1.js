// YENİ OYUN — Vaka 1 verisi (kaynak/yeni/). Eski oyunun testlerine dokunmaz.
// Sınadıkları: doğrulayıcı yeni veriyi geçiriyor; K15 (sahne satırı), K1'in sahne
// taraması ve K16 (kararsız yol) gerçekten ısırıyor — bozuk kopya besleyip hatayı
// bekliyoruz, yoksa "PASS" yalnızca kuralın kör olduğunu söyleyebilirdi; ekonomi
// ve anı defteri eşleşmesi.
const fs = require("fs");
const path = require("path");
const { dogrula } = require("./dogrulayici.js");
const { Oyun } = require("./motor.js");

const DIZIN = path.join(__dirname, "yeni");
const oku = f => JSON.parse(fs.readFileSync(path.join(DIZIN, f), "utf-8"));
const G = oku("game_data.json"), KISILER = oku("kisiler.json"), ACILIS = oku("acilis.json");
const kopya = x => JSON.parse(JSON.stringify(x));

let hata = 0;
const k = (ad, ok) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad); if (!ok) hata++; };

// Doğrulayıcı konsola rapor basıyor; testte yalnız sonucu ve hata satırlarını istiyoruz.
const sessiz = (game, acilis = ACILIS) => {
  const satirlar = [], eski = console.log;
  console.log = (...a) => satirlar.push(a.join(" "));
  let ok;
  try { ok = dogrula(game, [], KISILER, acilis); } finally { console.log = eski; }
  return { ok, hatalar: satirlar.filter(s => s.trim().startsWith("✗")) };
};
const hataVar = (r, etiket, parca) => r.hatalar.some(h => h.includes(etiket) && (!parca || h.includes(parca)));

console.log("=== Doğrulayıcı ===");
k("yeni veri doğrulayıcıdan geçiyor", sessiz(G).ok);

console.log("\n=== K15 sahne satırı: bozuk kopyayı yakalıyor mu ===");
const v1 = g => g.vakalar[0];
const clue = (g, id) => v1(g).clues.find(c => c.id === id);
{
  const g = kopya(G);
  // balıklı sette 'normal' ifade yok (yalnız sinirli/utanmış çekildi)
  const s = v1(g).sahneler.kovalamaca.satirlar;
  const i = s.findIndex(x => x.set === "balikli");
  s.splice(i + 1, 0, { k: "peri", i: "normal", m: "deneme" });
  k("balıklı sette olmayan Peri ifadesi → K15", hataVar(sessiz(g), "[K15]", "balikli"));
}
{
  const g = kopya(G); clue(g, "cayci").sahne.arka = "A99";
  k("tanımsız arka plan → K15", hataVar(sessiz(g), "[K15]", "A99"));
}
{
  const g = kopya(G); v1(g).sahneler.konusma.satirlar.push({ k: "komiser", m: "deneme" });
  k("tanımsız konuşan → K15", hataVar(sessiz(g), "[K15]", "komiser"));
}
{
  const g = kopya(G); v1(g).decisions[0].kare = "K99";
  k("karara bağlı tanımsız kare → K15", hataVar(sessiz(g), "[K15]", "K99"));
}
{
  const a = kopya(ACILIS); a.sahneler[0].satirlar.push({ k: "cengo", i: "agliyor", m: "deneme" });
  k("açılış sahnesindeki tanımsız ifade → K15", hataVar(sessiz(G, a), "[K15]", "agliyor"));
}

{
  const a = kopya(ACILIS); a.sahneler[0].satirlar.push({ k: "hilmi", m: "deneme", peri: "balik" });
  k("dinleyen Peri'nin tanımsız ifadesi → K15", hataVar(sessiz(G, a), "[K15]", "balik"));
}

console.log("\n=== K1 sahne taraması ===");
{
  // Kanona hayalî bir isim ekle, yalnız SAHNE satırına yaz (düz metne değil).
  const g = kopya(G); g.kanon.isimler.push("Zeki");
  clue(g, "cayci").sahne.satirlar.push({ k: "not", m: "Zeki de oradaydı." });
  k("yalnız sahnede geçen hak edilmemiş isim → K1", hataVar(sessiz(g), "[K1]", "Zeki"));
}

console.log("\n=== K17 giriş ===");
const giris = g => v1(g).sahneler.giris;
{
  const g = kopya(G); giris(g).arka = "A9";
  k("büro dışında giriş → K17", hataVar(sessiz(g), "[K17]", "büroda"));
}
{
  const g = kopya(G); giris(g).satirlar = giris(g).satirlar.slice(0, 10);
  k("15 repliğin altındaki giriş → K17", hataVar(sessiz(g), "[K17]", "replik"));
}
{
  const g = kopya(G); const a = Object.entries(v1(g).anahtarlar)[0];
  giris(g).satirlar.splice(2, 0, { k: "peri", m: "Deneme: " + a[1][0] + "." });
  k("ipucu olgusunun anahtarı girişte → K17", hataVar(sessiz(g), "[K17]", a[0]));
}
{
  const g = kopya(G); const o = Object.keys(v1(g).anahtarlar)[0]; delete v1(g).anahtarlar[o];
  k("anahtar kelimesi olmayan ipucu olgusu → K17", hataVar(sessiz(g), "[K17]", o));
}
{
  const g = kopya(G); const u = v1(g).kim_yapti.ucret; u.dogru += 1000; u.zayif = Math.min(u.zayif, u.dogru);
  k("girişte konuşulmayan ücret → K17", hataVar(sessiz(g), "[K17]", "ücret"));
}

console.log("\n=== K18 ipucu adı ===");
{
  const g = kopya(G); const c = v1(g).clues[0]; c.ad = "Zübeyde'nin kahvesi";
  k("duyulmamış özel isimli ipucu adı → K18", hataVar(sessiz(g), "[K18]", "Zübeyde"));
}

console.log("\n=== K19 Kim yaptı? ===");
{
  const g = kopya(G); v1(g).clues[0].bedelsiz = true;
  k("bedava ipucu → K19", hataVar(sessiz(g), "[K19]", "bedava"));
}
{
  const g = kopya(G); v1(g).decisions[0].gate = v1(g).kim_yapti.dogru_ciftler[0][0];
  k("kapılı karar → K19", hataVar(sessiz(g), "[K19]", "kapı"));
}
{
  const g = kopya(G); const masum = v1(g).kim_yapti.supheliler.find(x => x.id !== v1(g).kim_yapti.suclu).id;
  delete v1(g).sahneler["yuzlesme_" + masum];
  k("eksik yüzleşme sahnesi → K19", hataVar(sessiz(g), "[K19]", "yuzlesme_" + masum));
}
{
  const g = kopya(G); v1(g).kim_yapti.supheliler.find(x => x.id === v1(g).kim_yapti.suclu).gorunur = "kiralayan_balikci";
  k("suçlu bir tam yolda görünmüyor → K19", hataVar(sessiz(g), "[K19]", "tam yolda"));
}
{
  const g = kopya(G); v1(g).kim_yapti.dogru_ciftler = v1(g).kim_yapti.dogru_ciftler.slice(0, 1);
  k("tek kanıt yolu → K19", hataVar(sessiz(g), "[K19]", "en az 2 yol"));
}
{
  const g = kopya(G); delete v1(g).decisions[0].onizleme;
  k("kısa sonucu olmayan karar → K19 (kural 22a)", hataVar(sessiz(g), "[K19]", "22a"));
}
{
  const g = kopya(G); delete v1(g).kim_yapti.kesinti.yanlis;
  k("açıklamasız ücret kesintisi → K19 (kural 22a)", hataVar(sessiz(g), "[K19]", "kesinti"));
}
{
  // Kural 21c: tek ipucunun kendi iki olgusunu doğru çift yap → yakalanmalı.
  const g = kopya(G); const c = v1(g).clues.find(x => (x.reveals || []).length >= 2);
  v1(g).kim_yapti.dogru_ciftler.push(c.reveals.slice(0, 2));
  k("suçluyu tek başına kanıtlayan ipucu → K19 (kural 21c)", hataVar(sessiz(g), "[K19]", "21c"));
}
{
  const g = kopya(G); v1(g).decisions[0].para = -(v1(g).kim_yapti.ucret.yanlis + 1);
  k("kasayı eksiye düşürebilen karar → K19", hataVar(sessiz(g), "[K19]", "eksi"));
}
{
  const g = kopya(G); v1(g).sahneler.kapanis.satirlar.push({ k: "peri", m: "deneme", bag: "orta" });
  k("tanımsız bağ hâli → K15", hataVar(sessiz(g), "[K15]", "bag"));
}

console.log("\n=== Her yol: karar, ekonomi ===");
const yollar = [];
(function dfs(ac) {
  const o = new Oyun(G); o.vakaBaslat("V1");
  for (const id of ac) if (o.kaynakAc(id).hata) return;
  const al = o.acikKaynaklar().filter(c => o.bedelsizMi(v1(G).clues.find(x => x.id === c.id)) || o.durum.aktif.arastirmaKalan > 0);
  if (!al.length) { yollar.push(ac); return; }
  for (const c of al) dfs([...ac, c.id]);
})([]);
k("en az bir araştırma yolu var", yollar.length > 0);
let temizHepsinde = true, kasaEksi = [];
for (const ac of yollar) {
  const o = new Oyun(G); o.vakaBaslat("V1"); ac.forEach(id => o.kaynakAc(id));
  const kararlar = o.acikKararlar();
  if (!kararlar.some(d => (v1(G).decisions.find(x => x.id === d.id).cengoBag || 0) >= 0)) temizHepsinde = false;
  for (const d of kararlar) {
    const o2 = new Oyun(G); o2.vakaBaslat("V1"); ac.forEach(id => o2.kaynakAc(id));
    o2.kararVer(d.id);
    if (o2.durum.para < 0 || o2.durum.borc > 0) kasaEksi.push(d.id);
  }
}
k("her yolda vicdanı eksi olmayan bir karar açık (kirletmeye zorlamaz)", temizHepsinde);
k("hiçbir karar kasayı eksiye düşürmüyor (Ton §9)", kasaEksi.length === 0);

console.log("\n=== Karar yüzeyleri ===");
const defter = (KISILER.defter || {}).V1 || {};
for (const d of v1(G).decisions) {
  k(`${d.id}: anı defteri notu var`, typeof defter[d.id] === "string" && defter[d.id].trim().length > 0);
  k(`${d.id}: sonuç karesi var`, typeof d.kare === "string");
}
k("anı defterinde karşılığı olmayan karar kimliği yok",
  Object.keys(defter).every(id => v1(G).decisions.some(d => d.id === id)));

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nHepsi geçti.");
process.exit(hata ? 1 : 0);
