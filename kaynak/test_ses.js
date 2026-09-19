/* Ses katmanı: tanımlı her parça gerçekten çalınıyor mu?

   Ses üç yerde duruyor — MUZIK/EFEKT tabloları (arayüz), muzikCal/efektCal
   çağrıları (arayüz), ve ses/ klasöründeki dosyalar. Üçü ayrışabilir ve
   ayrışması SESSİZDİR: çalınmayan bir ses hata vermez, sadece hiç duyulmaz.

   Bir kez düşüldü: efekt_alev tabloda ve sipariş listesinde vardı, yer
   tutucu dosyası da vardı, ama hiçbir yerden çağrılmıyordu. Sipariş
   edilecek 13 parçadan biri asla çalmayacaktı.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Üçü var — tanımlı ama
   çalınmayan ses, çalınan ama tanımsız ses, ve tabloda olup dosyası
   olmayan ses. Üçü de aşağıda. */
const fs = require("fs");
const ui = fs.readFileSync("build_html.js", "utf-8");

let hata = 0;
const k = (ad, ok, detay = "") => {
  if (!ok) hata++;
  console.log(`${ok ? "✓" : "✗"} ${ad}${detay ? "  — " + detay : ""}`);
};

// tabloları kaynaktan oku: MUZIK/EFEKT = { anahtar: "dosya_adi", ... }
function tablo(ad) {
  const i = ui.indexOf("const " + ad + " = {");
  if (i < 0) return null;
  const govde = ui.slice(i, ui.indexOf("\n};", i));
  return Object.fromEntries(
    [...govde.matchAll(/^\s+(\w+):\s*"([^"]+)"/gm)].map(m => [m[1], m[2]])
  );
}
const MUZIK = tablo("MUZIK"), EFEKT = tablo("EFEKT");
k("MUZIK tablosu bulundu", !!MUZIK && Object.keys(MUZIK).length > 0);
k("EFEKT tablosu bulundu", !!EFEKT && Object.keys(EFEKT).length > 0);
if (!MUZIK || !EFEKT) { console.log("\n=== " + ++hata + " BAŞARISIZ ==="); process.exit(1); }

// çağrı yerleri: doğrudan dizgi ya da değişken
const dizgiCagri = (fn) =>
  new Set([...ui.matchAll(new RegExp(fn + "\\(['\"](\\w+)['\"]", "g"))].map(m => m[1]));
const degiskenCagri = (fn) =>
  [...ui.matchAll(new RegExp(fn + "\\((?!['\"])([^)]+)\\)", "g"))].map(m => m[1].trim());

console.log("\n=== TANIMLI HER SES ÇALINIYOR ===");
{
  // Değişkenle çağrılanlar: o değişkeni üreten fonksiyonun döndürdüğü
  // dizgiler de çağrı sayılır (ör. vakaModu → 'huzun'|'final'|'arastirma').
  const dolayli = new Set();
  for (const ifd of [...degiskenCagri("muzikCal"), ...degiskenCagri("efektCal")]) {
    const f = ifd.match(/(\w+)\s*\(/);
    if (!f) continue;
    const i = ui.indexOf("function " + f[1]);
    if (i < 0) continue;
    const govde = ui.slice(i, ui.indexOf("\n}", i));
    for (const m of govde.matchAll(/['"](\w+)['"]/g)) dolayli.add(m[1]);
  }
  for (const [ad, tab, fn] of [["müzik", MUZIK, "muzikCal"], ["efekt", EFEKT, "efektCal"]]) {
    const cagrilan = new Set([...dizgiCagri(fn), ...dolayli]);
    const olu = Object.keys(tab).filter(x => !cagrilan.has(x));
    k(`${ad}: tanımlı ${Object.keys(tab).length} parçanın hepsi çalınıyor`,
      olu.length === 0, olu.length ? "hiç çalınmayan: " + olu.join(", ") : "");
  }
}

console.log("\n=== ÇAĞRILAN HER SES TANIMLI ===");
for (const [ad, tab, fn] of [["müzik", MUZIK, "muzikCal"], ["efekt", EFEKT, "efektCal"]]) {
  const bilinmeyen = [...dizgiCagri(fn)].filter(x => !(x in tab));
  k(`${ad}: çağrılan her anahtar tabloda var`, bilinmeyen.length === 0,
    bilinmeyen.length ? "tabloda yok: " + bilinmeyen.join(", ") : "");
}

console.log("\n=== HER PARÇANIN DOSYASI VAR ===");
{
  const dosyalar = new Set(fs.readdirSync("../ses")
    .filter(f => /\.(wav|mp3)$/.test(f))          // GECICI.md gibi notlar ses değil
    .map(f => f.replace(/\.(wav|mp3)$/, "")));
  const istenen = [...new Set([...Object.values(MUZIK), ...Object.values(EFEKT)])];
  const eksik = istenen.filter(a => !dosyalar.has(a));
  k(`${istenen.length} parçanın hepsi ses/ klasöründe`, eksik.length === 0,
    eksik.length ? "eksik: " + eksik.join(", ") : "");
  // ters yön: klasörde olup tabloda olmayan (ölü dosya)
  const oksuz = [...dosyalar].filter(f => !istenen.includes(f));
  k("klasörde tabloya bağlanmamış ses yok", oksuz.length === 0,
    oksuz.length ? "öksüz: " + oksuz.join(", ") : "");
}

console.log("\n" + (hata === 0 ? "=== SES TESTİ TAMAM ===" : "=== " + hata + " BAŞARISIZ ==="));
process.exit(hata ? 1 : 0);
