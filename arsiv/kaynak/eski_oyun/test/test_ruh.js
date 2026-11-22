/* Karar ekranı ruh hâlleri.

   Dört görsel, kırk karar ekranı. Eşleme elle yapılmıyor — kararın kendi
   cengoBag/para değerlerinden türüyor. Bu testin işi, o türetmenin
   sessizce bozulmadığını göstermek.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Üçü var —
   bir kararın hiçbir hâle düşmemesi, bir hâlin hiç kullanılmaması
   (yani boşuna üretilmiş bir görsel), ve motor ile arayüzün farklı
   dört isimden söz etmesi. Üçü de aşağıda. */
const fs = require("fs");
const { kararRuhHali } = require("./motor.js");
const game = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));

let hata = 0;
const k = (ad, ok, detay = "") => {
  if (!ok) hata++;
  console.log(`${ok ? "✓" : "✗"} ${ad}${detay ? "  — " + detay : ""}`);
};

const HALLER = ["temiz", "bedel", "bosluk", "kirli"];
const kararlar = game.vakalar.flatMap(v => v.decisions.map(d => ({ vid: v.id, d })));

console.log("=== HER KARAR BİR HÂLE DÜŞÜYOR ===");
{
  const sayac = Object.fromEntries(HALLER.map(h => [h, 0]));
  const dusmeyen = [];
  for (const { vid, d } of kararlar) {
    const r = kararRuhHali(d);
    if (!HALLER.includes(r)) dusmeyen.push(`${vid}/${d.id} → ${r}`);
    else sayac[r]++;
  }
  k(`${kararlar.length} kararın hepsi dört hâlden birine düşüyor`,
    dusmeyen.length === 0, dusmeyen.join(", "));

  // Kullanılmayan bir hâl = boşuna sipariş edilmiş bir görsel.
  for (const h of HALLER) k(`'${h}' hâli en az bir kararda kullanılıyor`, sayac[h] > 0);
  console.log("   dağılım: " + HALLER.map(h => `${h} ${sayac[h]}`).join(" · "));
}

console.log("\n=== TÜRETME KURALI DOĞRU ===");
{
  // Kuralı sayılarla değil, ANLAMIYLA sınıyoruz. Rakam yazarsam veri
  // değiştiğinde test yalan söyler; ilişkiyi yazarsam veriyle birlikte yaşar.
  const yanlis = [];
  for (const { vid, d } of kararlar) {
    const r = kararRuhHali(d), v = d.cengoBag || 0, p = d.para || 0;
    const beklenen = v < 0 ? "kirli" : v === 0 ? "bosluk" : (p < 0 ? "bedel" : "temiz");
    if (r !== beklenen) yanlis.push(`${vid}/${d.id} vicdan ${v} para ${p} → ${r}, beklenen ${beklenen}`);
  }
  k("vicdan eksi olan hiçbir karar temiz/bedel sayılmıyor", yanlis.length === 0, yanlis.join(" | "));

  // Asıl sözleşme: vicdanı artı bir karar ASLA 'kirli' görünmemeli.
  const iftira = kararlar.filter(({ d }) => (d.cengoBag || 0) > 0 && kararRuhHali(d) === "kirli");
  k("vicdanı artı hiçbir karara kirli görseli basılmıyor", iftira.length === 0,
    iftira.map(x => x.d.id).join(", "));

  // Ve tersi: bedeli olan doğru karar 'temiz' değil 'bedel' olmalı —
  // yoksa cebinden ödeyen oyuncuya hiçbir şey kaybetmemiş gibi görünür.
  const bedelliler = kararlar.filter(({ d }) => (d.cengoBag || 0) > 0 && (d.para || 0) < 0);
  k("cebinden ödeyen doğru kararlar 'bedel' hâlinde",
    bedelliler.every(({ d }) => kararRuhHali(d) === "bedel"),
    bedelliler.map(x => x.d.id + ":" + kararRuhHali(x.d)).join(", "));
}

console.log("\n=== MOTOR VE ARAYÜZ AYNI DÖRT İSMİ KULLANIYOR ===");
{
  // RUH_GORSEL arayüzde, kararRuhHali motorda. Biri diğerinden habersiz
  // yeniden adlandırılırsa karar ekranı sessizce görselsiz kalır — hata
  // vermez, sadece boş görünür. En sinsi bozulma bu.
  const ui = fs.readFileSync("build_html.js", "utf-8");
  const blok = ui.match(/const RUH_GORSEL = \{(.*?)\n\};/s);
  k("arayüzde RUH_GORSEL tanımlı", !!blok);
  if (blok) {
    const anahtarlar = [...blok[1].matchAll(/^\s*(\w+):\s*\{/gm)].map(m => m[1]);
    k("arayüz tam olarak motorun ürettiği hâlleri tanıyor",
      HALLER.every(h => anahtarlar.includes(h)) && anahtarlar.length === HALLER.length,
      "arayüz: " + anahtarlar.join(", "));
    // Her hâlin bir dosyası ve yargısız bir alt metni olmalı.
    for (const h of HALLER) {
      const satir = blok[1].match(new RegExp(h + ":\\s*\\{([^}]*)\\}"));
      k(`${h}: dosya ve alt metin dolu`,
        !!satir && /dosya:\s*'[^']+\.jpg'/.test(satir[1]) && /alt:\s*'[^']{8,}'/.test(satir[1]));
    }
  }
  // Ruh hâli motorun sonucunda gerçekten dönüyor mu?
  k("kararVer sonucunda 'ruh' alanı var",
    /ruh:\s*kararRuhHali\(d\)/.test(fs.readFileSync("motor.js", "utf-8")));
  k("arayüz karar ekranında ruhGorseli çağırıyor", /h \+= ruhGorseli\(r\.ruh\)/.test(ui));
}

console.log("\n" + (hata === 0 ? "=== RUH HÂLİ TESTİ TAMAM ===" : "=== " + hata + " BAŞARISIZ ==="));
process.exit(hata ? 1 : 0);
