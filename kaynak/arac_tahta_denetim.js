/* ZİNCİR DEFTERİ DENETİMİ — test değil, ARAÇ.

   Her çıkarım başlığını, o çıkarıma ulaşan oyuncunun GERÇEKTEN sahip olduğu
   olguların yanına basar. Sızıntıyı gözle ararsın: başlık, garanti kümesinin
   söylemediği bir şey söylüyor mu?

   Bu mekanik olarak çözülemez — "Kaya'nın dul eşi" sızıntı değildir ama
   "arkasında biri var" olabilir. Künyede aynı sonuca varıldı ve denetim
   arac_kunye_denetim.js ile insana bırakıldı; burada da öyle.

   GARANTİ KÜMESİ iki yoldan kapanır:
     1. Çıkarım ise kendi ifadesi de garanti (özyineli).
     2. Olgu bir kaynaktan geliyorsa, o kaynağın needs'i de garanti —
        yoksa kaynak hiç açılamazdı.
   'ya biri' dallarında KESİŞİM alınır: hiçbir alternatif tek başına garanti
   değildir. Bu adım atlanırsa araç fazla garanti raporlar ve sızıntıyı kaçırır.

   Çalıştır: node arac_tahta_denetim.js          (tümü)
             node arac_tahta_denetim.js V5       (tek vaka)   */
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));

const olguMetin = {}, acanKaynak = {}, kaynakNeeds = {}, cikarimIfade = {};
for (const v of g.vakalar) {
  Object.assign(olguMetin, v.facts || {});
  for (const c of v.clues || []) {
    kaynakNeeds[c.id] = c.needs || [];
    for (const r of c.reveals || []) acanKaynak[r] = c.id;
  }
  for (const k of v.knowledge || []) cikarimIfade[k.turetilen] = k.ifade;
}

function garanti(ifade, yol = new Set()) {
  if (typeof ifade === "string") {
    if (yol.has(ifade)) return new Set();
    const y = new Set(yol); y.add(ifade);
    const s = new Set([ifade]);
    if (cikarimIfade[ifade]) for (const x of garanti(cikarimIfade[ifade], y)) s.add(x);
    if (acanKaynak[ifade])
      for (const n of kaynakNeeds[acanKaynak[ifade]]) for (const x of garanti(n, y)) s.add(x);
    return s;
  }
  if (ifade && Array.isArray(ifade.all)) {
    const s = new Set();
    for (const x of ifade.all) for (const y of garanti(x, yol)) s.add(y);
    return s;
  }
  if (ifade && Array.isArray(ifade.any)) {
    const alt = ifade.any.map(x => garanti(x, yol));
    if (!alt.length) return new Set();
    return new Set([...alt[0]].filter(x => alt.every(a => a.has(x))));   // KESİŞİM
  }
  return new Set();
}

const suz = process.argv[2];
for (const v of g.vakalar) {
  if (suz && v.id !== suz) continue;
  const kn = v.knowledge || [];
  if (!kn.length) continue;
  console.log("\n" + "=".repeat(76));
  console.log(v.id + " · " + v.baslik);
  for (const k of kn) {
    const gar = garanti(k.ifade);
    const taban = [...gar].filter(x => olguMetin[x]).sort();
    console.log("\n  ◆ " + (k.baslik || "!! BAŞLIK YOK — " + k.turetilen));
    console.log("    (" + k.turetilen + ")");
    if (!taban.length) {
      console.log("    ⚠ GARANTİ OLGU YOK — saf 'ya biri'. Başlık hiçbir alternatifi");
      console.log("      adlandıramaz; yalnız üçünün ORTAK anlamını söyleyebilir.");
    } else {
      console.log("    bu çıkarıma ulaşan oyuncunun kesinlikle bildikleri:");
      for (const f of taban) console.log("      • " + olguMetin[f]);
    }
  }
}
console.log("\n" + "=".repeat(76));
console.log("Başlık, yukarıdaki maddelerin söylemediği bir şey söylüyorsa sızıntıdır.");
