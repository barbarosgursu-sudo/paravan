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
  const s = clue(g, "serkan").sahne.satirlar;
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

console.log("\n=== K16 kararsız yol ===");
{
  // İskele ücretliyken İskele + Serkan + Dükkân yolu Bebek'i görmüyordu.
  const g = kopya(G); delete clue(g, "iskele").bedelsiz;
  k("iskele ücretli olunca kararsız yol yakalanıyor → K16", hataVar(sessiz(g), "[K16]"));
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
