// Veri JSON'unu okunur, kısa yazar: sığan değer tek satıra, sığmayan alt alta.
// Kullanım (modül): require("./arac_json_yaz.js")(nesne) → metin.
// Kullanım (komut): node arac_json_yaz.js yeni/game_data.json  (yerinde yeniden yazar)
function tekSatir(x) {
  if (typeof x !== "object" || x === null) return JSON.stringify(x);
  if (Array.isArray(x)) return "[" + x.map(tekSatir).join(", ") + "]";
  return "{" + Object.entries(x).filter(([, v]) => v !== undefined)
    .map(([k, v]) => JSON.stringify(k) + ": " + tekSatir(v)).join(", ") + "}";
}
function yaz(x, girinti = "", genislik = 120) {
  const tek = tekSatir(x);
  if (typeof x !== "object" || x === null || girinti.length + tek.length <= genislik) return tek;
  const ic = girinti + "  ";
  if (Array.isArray(x)) return "[\n" + x.map(v => ic + yaz(v, ic, genislik)).join(",\n") + "\n" + girinti + "]";
  return "{\n" + Object.entries(x).filter(([, v]) => v !== undefined)
    .map(([k, v]) => ic + JSON.stringify(k) + ": " + yaz(v, ic, genislik)).join(",\n") + "\n" + girinti + "}";
}
module.exports = yaz;
if (require.main === module) {
  const fs = require("fs"), p = process.argv[2];
  fs.writeFileSync(p, yaz(JSON.parse(fs.readFileSync(p, "utf8"))) + "\n");
}
