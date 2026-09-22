/* Yedek vaka dosyaları ↔ game_data.json eşlemesi.

   `game_data.json` ASIL veri; `vaka2-6.json` ve `yan_a/b.json` yedektir
   (OKUBENI.md §Dosyalar). Kural belgede yazılıydı ama kimse denetlemiyordu
   ve yedi yedeğin YEDİSİ de kaymıştı — 22 ile 80 satır arası. Cengo satırı
   gibi bütün bir özellik yedeklere hiç işlenmemişti.

   Bu ayrışma SESSİZDİR ve bu depoda kayıtlı tuzağın tam kardeşi: yedek
   dosyayı kimse okumadığı için oyun çalışmaya devam eder, ama "yedek" adı
   yalan söyler. Birisi bir vakayı incelerken yedeğe bakarsa aylar önceki
   metne bakmış olur — üstelik baktığını bilmeden.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Üçü var —
     1. Yedek, asıldan farklı içerik taşıyor (kayma).
     2. Yedek dosya hiç yok ya da okunamıyor.
     3. Yedekte, asılda artık bulunmayan bir vaka duruyor (silinmiş vaka).

   Asılda olup yedeği HİÇ OLMAYAN vaka (V1, YAN-C) bilerek dışarıda: yedek
   kümesi OKUBENI'de "vaka2-6 + yan_a/b" diye tanımlı, eksiklik kayma değil.
   Yedek eklenirse aşağıdaki tabloya da eklenir. */
const fs = require("fs");

const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
const YEDEKLER = {
  "vaka2.json": "V2", "vaka3.json": "V3", "vaka4.json": "V4",
  "vaka5.json": "V5", "vaka6.json": "V6",
  "yan_a.json": "YAN-A", "yan_b.json": "YAN-B",
};

let hata = 0;
const k = (ad, ok, detay = "") => {
  if (!ok) hata++;
  console.log(`${ok ? "✓" : "✗ BAŞARISIZ"} ${ad}${detay ? "\n   " + detay : ""}`);
};

// Anahtar sırası yedekte farklı olabilir; ÖNEMLİ OLAN İÇERİK.
// Bu yüzden anahtarlar özyineli sıralanıp imza alınıyor.
const duz = (x) => {
  if (Array.isArray(x)) return x.map(duz);
  if (x && typeof x === "object")
    return Object.keys(x).sort().reduce((o, a) => (o[a] = duz(x[a]), o), {});
  return x;
};
const imza = (x) => JSON.stringify(duz(x));

console.log("=== YEDEK DOSYALAR ASILLA AYNI MI ===\n");

for (const [dosya, vid] of Object.entries(YEDEKLER)) {
  const asil = g.vakalar.find((v) => v.id === vid);
  k(`${dosya}: asılda ${vid} var`, !!asil);
  if (!asil) continue;

  let yedek = null;
  try { yedek = JSON.parse(fs.readFileSync(dosya, "utf-8")); }
  catch (e) { k(`${dosya}: okunabiliyor`, false, String(e.message).slice(0, 90)); continue; }

  k(`${dosya}: kimliği ${vid}`, yedek.id === vid,
    yedek.id === vid ? "" : `yedekteki id: ${yedek.id}`);

  const ayni = imza(yedek) === imza(asil);
  let detay = "";
  if (!ayni) {
    // Nerede ayrıldığını söyle — "farklı" tek başına işe yaramaz.
    const ayrilan = [...new Set([...Object.keys(asil), ...Object.keys(yedek)])]
      .filter((a) => imza(asil[a]) !== imza(yedek[a]));
    detay = `ayrılan alanlar: ${ayrilan.join(", ")}\n   ` +
            `düzeltmek için yedeği game_data.json'dan yeniden üret`;
  }
  k(`${dosya}: içerik asılla aynı`, ayni, detay);
}

// Yedeği olmayan vakaları say — eksiklik hata değil, ama sessiz de kalmasın.
const yedeksiz = g.vakalar.map((v) => v.id).filter((id) => !Object.values(YEDEKLER).includes(id));
console.log(`\nyedeği olmayan vaka: ${yedeksiz.join(", ") || "yok"} (bilerek, OKUBENI'deki küme bu)`);

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== hepsi geçti ===");
process.exit(hata ? 1 : 0);
