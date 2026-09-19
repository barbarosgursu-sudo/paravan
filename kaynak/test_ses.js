/* Ses katmanı: yalnızca efektler. ARKA PLAN MÜZİĞİ YOK.

   Sahibinin kararı (19 Eylül 2026): müzikli hâli beğenilmedi, oyun
   sessizlik + efekt üzerine kuruldu. Sekiz parça üretilmiş ve gömülmüştü;
   hepsi kaldırıldı.

   Efektler üç yerde duruyor — EFEKT tablosu, efektCal çağrıları, ses/
   klasörü. Ayrışmaları SESSİZDİR: çalınmayan bir ses hata vermez, sadece
   hiç duyulmaz. Bir kez düşüldü: efekt_alev tabloda ve sipariş listesinde
   vardı ama hiçbir yerden çağrılmıyordu.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Dördü var — tanımlı ama
   çalınmayan efekt, çalınan ama tanımsız efekt, tabloda olup dosyası
   olmayan (ve tersi), ve geri sızan bir müzik katmanı. Dördü de aşağıda. */
const fs = require("fs");
const ui = fs.readFileSync("build_html.js", "utf-8");

let hata = 0;
const k = (ad, ok, detay = "") => {
  if (!ok) hata++;
  console.log(`${ok ? "✓" : "✗"} ${ad}${detay ? "  — " + detay : ""}`);
};

function tablo(ad) {
  const i = ui.indexOf("const " + ad + " = {");
  if (i < 0) return null;
  const govde = ui.slice(i, ui.indexOf("\n};", i));
  return Object.fromEntries(
    [...govde.matchAll(/^\s+(\w+):\s*"([^"]+)"/gm)].map(m => [m[1], m[2]])
  );
}
const EFEKT = tablo("EFEKT");
k("EFEKT tablosu bulundu", !!EFEKT && Object.keys(EFEKT).length > 0);
if (!EFEKT) { console.log("\n=== " + ++hata + " BAŞARISIZ ==="); process.exit(1); }

console.log("\n=== MÜZİK KATMANI GERİ SIZMADI ===");
{
  // Karar geri alınırsa bu testin de bilerek değişmesi gerekir; kazara
  // eklenen bir müzik çağrısı sessizce geçmesin.
  const izler = ["MUZIK", "muzikCal", "muzikBaslat", "muzikDur", "vakaModu",
                 "ses.suAn", "ses.calan", "ses.bekleyen", "ses.yukleniyor"];
  const bulunan = izler.filter(x => ui.includes(x));
  k("arayüzde müzik izi yok", bulunan.length === 0,
    bulunan.length ? "bulunan: " + bulunan.join(", ") : "");
  const muzikDosya = fs.readdirSync("../ses").filter(f => /\.(wav|mp3)$/.test(f) && !f.startsWith("efekt_"));
  k("ses/ klasöründe müzik dosyası yok", muzikDosya.length === 0,
    muzikDosya.length ? "bulunan: " + muzikDosya.join(", ") : "");
}

const dizgiCagri = () =>
  new Set([...ui.matchAll(/efektCal\(['"](\w+)['"]/g)].map(m => m[1]));

console.log("\n=== TANIMLI HER EFEKT ÇALINIYOR ===");
{
  const cagrilan = dizgiCagri();
  const olu = Object.keys(EFEKT).filter(x => !cagrilan.has(x));
  k(`tanımlı ${Object.keys(EFEKT).length} efektin hepsi çalınıyor`, olu.length === 0,
    olu.length ? "hiç çalınmayan: " + olu.join(", ") : "");
}

console.log("\n=== ÇAĞRILAN HER EFEKT TANIMLI ===");
{
  const bilinmeyen = [...dizgiCagri()].filter(x => !(x in EFEKT));
  k("çağrılan her anahtar tabloda var", bilinmeyen.length === 0,
    bilinmeyen.length ? "tabloda yok: " + bilinmeyen.join(", ") : "");
}

console.log("\n=== HER EFEKTİN DOSYASI VAR ===");
{
  const dosyalar = new Set(fs.readdirSync("../ses")
    .filter(f => /\.(wav|mp3)$/.test(f))
    .map(f => f.replace(/\.(wav|mp3)$/, "")));
  const istenen = [...new Set(Object.values(EFEKT))];
  const eksik = istenen.filter(a => !dosyalar.has(a));
  k(`${istenen.length} efektin hepsi ses/ klasöründe`, eksik.length === 0,
    eksik.length ? "eksik: " + eksik.join(", ") : "");
  const oksuz = [...dosyalar].filter(f => !istenen.includes(f));
  k("klasörde tabloya bağlanmamış ses yok", oksuz.length === 0,
    oksuz.length ? "öksüz: " + oksuz.join(", ") : "");
}

console.log("\n" + (hata === 0 ? "=== SES TESTİ TAMAM ===" : "=== " + hata + " BAŞARISIZ ==="));
process.exit(hata ? 1 : 0);
