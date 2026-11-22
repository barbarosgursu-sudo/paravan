/* Cengo–Peri ikili kareleri: motor ↔ arayüz eşlemesi.

   Dört görsel, motorun dört eşiği. Eşleme ELLE yazılmış bir tablo
   (CENGO_GORSEL) ile motorun ESIKLER dizisi arasında duruyor ve bu depoda
   böyle ayrışmalar SESSİZDİR: yanlış anahtar JS hatası vermez, görsel hiç
   çizilmez, tarayıcı turu da yakalamaz.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Dördü var —
     1. Motorun döndürdüğü bir durum adının tabloda karşılığı olmaması.
     2. Tabloda motorun hiç üretmediği bir anahtar bulunması (boşuna
        sipariş edilmiş görsel).
     3. Tablodaki bir dosyanın gömülü olmaması — eksik görsel sessizce
        yer tutucuya düşer (GORSELLER anahtarı UZANTISIZ tuzağı).
     4. Bir eşiğin pratikte hiç üretilememesi.
   Dördü de aşağıda. */
const fs = require("fs");
const vm = require("vm");
const { cengoDurumHesap } = require("./motor.js");

const ui = fs.readFileSync("build_html.js", "utf-8");
const gomulu = fs.readFileSync("_gomulu_gorseller.js", "utf-8");

let hata = 0;
const k = (ad, ok, detay = "") => {
  if (!ok) hata++;
  console.log(`${ok ? "✓" : "✗"} ${ad}${detay ? "  — " + detay : ""}`);
};

/* --- tabloyu sayfadan çıkar (şablon dizgisi içinde yaşıyor) --------------- */
const bas = ui.indexOf("const CENGO_GORSEL = {");
const son = ui.indexOf("};", bas) + 2;
if (bas < 0) { console.log("✗ CENGO_GORSEL tablosu bulunamadı"); process.exit(1); }
const kutu = {};
vm.createContext(kutu);
vm.runInContext(ui.slice(bas, son) + "\n;__t = CENGO_GORSEL;", kutu);
const TABLO = kutu.__t;

/* --- motorun üretebildiği bütün durumlar --------------------------------- */
// Sabit sayı yazmıyoruz: eşikleri geniş bir cengoBag aralığını tarayarak buluyoruz.
const motorDurumlari = new Set();
for (let x = -20; x <= 20; x++) motorDurumlari.add(cengoDurumHesap(x));

console.log("=== MOTOR ↔ TABLO ===");
{
  const karsiliksiz = [...motorDurumlari].filter(d => !TABLO[d]);
  k(`motorun ürettiği ${motorDurumlari.size} durumun hepsinin görseli var`,
    karsiliksiz.length === 0, karsiliksiz.join(", "));

  const fazla = Object.keys(TABLO).filter(a => !motorDurumlari.has(a));
  k("tabloda motorun üretmediği anahtar yok", fazla.length === 0,
    fazla.length ? "boşuna sipariş edilmiş: " + fazla.join(", ") : "");

  console.log("   durumlar: " + [...motorDurumlari].join(" · "));
}

console.log("\n=== GÖRSELLER GERÇEKTEN GÖMÜLÜ ===");
{
  // GORSELLER anahtarı UZANTISIZ; sayfa aramadan önce .jpg'yi atıyor.
  const eksik = [], uzantili = [];
  for (const [durum, g] of Object.entries(TABLO)) {
    const ad = g.dosya.replace(".jpg", "");
    if (!new RegExp('"' + ad + '":\\s*"data:image/webp;base64,').test(gomulu)) eksik.push(durum);
    if (!g.dosya.endsWith(".jpg")) uzantili.push(durum);
    if (!g.alt || !g.alt.trim()) k(`'${durum}' alt metni var`, false);
  }
  k("tablodaki her görsel gömülü", eksik.length === 0, eksik.join(", "));
  k("tablodaki dosya adları .jpg ile yazılmış", uzantili.length === 0, uzantili.join(", "));
}

console.log("\n=== ÇİZİM YERİ ===");
{
  k("cengoGorseli() tanımlı", /function cengoGorseli\(\)/.test(ui));
  k("karar sonucu ekranında çağrılıyor", /h \+= cengoGorseli\(\);/.test(ui));
  // Gösterge ile aynı ekranda durmalı: biri çizilip öteki unutulursa ayrışma başlar.
  const i1 = ui.indexOf("h += cengoGorseli();");
  const i2 = ui.indexOf("h += cengoGosterge();", i1);
  k("görsel ve gösterge yan yana çiziliyor", i1 >= 0 && i2 > i1 && (i2 - i1) < 120);
}

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nTÜMÜ GEÇTİ");
process.exit(hata ? 1 : 0);
