/* VAKA OKUMA — test değil, ARAÇ.

   Bir vakanın BÜTÜN metnini, oyuncunun karşılaştığı sırayla, düz okunur hâlde
   basar: yazarın gerçeği → giriş → ipuçları → açılan olgular → çıkarımlar →
   kararlar ve bütün karar yüzeyleri → sonraki vakalara yazılan tohumlar.

   Sebebi: oyunu oynayarak denetleyemezsin, çünkü hiçbir oyun bütün yolları
   birden gezmez. Araştırma hakkı ipuçlarını daraltır, kapılar kararları kilitler,
   koşullu varyantlar yalnız belli bilgi kümesinde görünür. Bu araç o daralmayı
   kaldırır ve vakayı TEK SEFERDE okunabilir kılar.

   arac_akis_denetim.js kararların yüzeylerini yan yana koyar (dar ve derin);
   bu araç vakanın tamamını akış sırasına koyar (geniş ve sığ). Kardeşler.

   Oyuncuya gösterilmeyen iki şey burada BİLEREK basılır ve etiketlenir:
   yazarın gerçeği (truth) ve ruh hâli sınıflaması. Denetim için gerekli;
   ikisi de oyunda asla kelime olarak görünmez.

   Çalıştır: node arac_okuma.js V1
             node arac_okuma.js V1 > /tmp/v1.txt
             node arac_okuma.js --hepsi                                        */
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
const k = JSON.parse(fs.readFileSync("kisiler.json", "utf-8"));
const { kararRuhHali } = require("./motor.js");

const EN = 78;
const RUH_GORSEL = { temiz: "karar_temiz", bedel: "karar_bedel",
                     bosluk: "karar_bosluk", kirli: "karar_kirli" };

/* Türkçe kelimeleri bölmeden sar. */
function sar(metin, girinti = 0) {
  const bosluk = " ".repeat(girinti);
  const satirlar = [];
  for (const parca of String(metin).split("\n")) {
    let s = bosluk;
    for (const kelime of parca.split(/\s+/).filter(Boolean)) {
      if (s.trim() && (s + " " + kelime).length > EN) { satirlar.push(s); s = bosluk + kelime; }
      else s = s.trim() ? s + " " + kelime : bosluk + kelime;
    }
    satirlar.push(s);
  }
  return satirlar.join("\n");
}
const baslik = (s, ch = "─") => "\n" + ch.repeat(EN) + "\n" + s + "\n" + ch.repeat(EN);
const varyantlar = (ham) =>
  ham == null ? [] :
  typeof ham === "string" ? [{ kosul: null, metin: ham }] :
  Array.isArray(ham) ? ham.map((v) => ({ kosul: v.kosul, metin: v.metin })) : [];

/* Koşul ifadesini okunur Türkçeye çevir: {all:[a,{any:[b,c]}]} → "a VE (b YA DA c)" */
function ifadeYaz(x) {
  if (x == null) return "";
  if (typeof x === "string") return x;
  if (Array.isArray(x)) return x.map(ifadeYaz).join(" VE ");
  if (x.all) return x.all.map((y) => (y.any ? "(" + ifadeYaz(y) + ")" : ifadeYaz(y))).join(" VE ");
  if (x.any) return x.any.map(ifadeYaz).join(" YA DA ");
  if (x.not) return "DEĞİL " + ifadeYaz(x.not);
  return JSON.stringify(x);
}

function vakaYaz(v) {
  const defterVaka = (k.defter || {})[v.id] || {};
  const cikti = [];
  const p = (s = "") => cikti.push(s);

  p("\n" + "═".repeat(EN));
  p(`${v.id} · ${v.baslik}`);
  p("═".repeat(EN));
  p(`tür: ${v.tur}   sıra: ${v.sira}   araştırma hakkı: ${v.arastirma} ` +
    `(${(v.clues || []).length} ipucundan)` + (v.belirir ? `   belirir: ${ifadeYaz(v.belirir)}` : ""));
  if (v.giris_gorsel) p(`giriş görseli: ${v.giris_gorsel}`);

  if (v.truth) {
    p(baslik("YAZARIN GERÇEĞİ  ⚠ oyuncuya asla gösterilmez"));
    for (const [a, b] of Object.entries(v.truth)) p(sar(`${a}: ${b}`, 3));
  }

  p(baslik("GİRİŞ"));
  for (const x of varyantlar(v.giris)) {
    if (x.kosul && varyantlar(v.giris).length > 1) p(`   [${x.kosul === "varsayilan" ? "varsayılan" : "koşul: " + ifadeYaz(x.kosul)}]`);
    p(sar(x.metin, 3));
    p();
  }
  const acilan = (v.giris || []).flatMap((x) => x.acilan || []);
  if (acilan.length) p(`   → giriş şunları açıyor: ${acilan.join(", ")}`);

  /* İpuçları: önce kapısız olanlar, sonra bağımlılar — oyuncunun görebileceği sıra. */
  const clues = [...(v.clues || [])].sort((a, b) => (a.needs || []).length - (b.needs || []).length);
  const bedavaSayi = clues.filter((c) => c.bedelsiz || c.bedelsiz_kosul).length;
  p(baslik(`İPUÇLARI (${clues.length}) — ${v.arastirma} araştırma hakkı` +
           (bedavaSayi ? ` + ${bedavaSayi} bedelsiz` : "")));
  for (const c of clues) {
    // BEDELSİZ ipucu araştırma hakkı harcatmaz. Okurken bu görünmezse vakanın
    // ekonomisi yanlış okunur: 6 ipuçluk bir vakada 3 hak dar görünür, oysa
    // ikisi bedavaysa oyuncu gerçekte 5'ine ulaşabiliyordur.
    const bedava = c.bedelsiz ? "  ✦ BEDELSİZ (hak harcamaz)"
                 : c.bedelsiz_kosul ? `  ✦ bedelsiz koşullu: ${ifadeYaz(c.bedelsiz_kosul)}` : "";
    p(`\n   ▸ ${c.ad}   [${c.id}]   tür: ${c.tur}${bedava}`);
    p(`     açılması için: ${(c.needs || []).length ? ifadeYaz(c.needs) : "koşulsuz"}`);
    p(`     açtığı olgular: ${(c.reveals || []).join(", ") || "—"}`);
    for (const x of varyantlar(c.text)) {
      if (x.kosul) p(`     [${x.kosul === "varsayilan" ? "varsayılan" : "koşul: " + ifadeYaz(x.kosul)}]`);
      p(sar(x.metin, 5));
    }
    // meta de koşullu varyant olabiliyor — düz dizgi varsayılırsa [object Object] basar.
    for (const x of varyantlar(c.meta)) {
      if (x.kosul) p(`     [${x.kosul === "varsayilan" ? "varsayılan" : ifadeYaz(x.kosul)}]`);
      p(sar("↳ " + x.metin, 5));
    }
    if (c.gorsel) p(`     görsel: ${c.gorsel.dosya}  (gösterir: ${(c.gorsel.gosterir || []).join(", ") || "—"})`);
  }

  if (v.facts && Object.keys(v.facts).length) {
    p(baslik("OLGULAR — ipucu açınca oyuncunun eline geçen cümleler"));
    const acan = {};
    for (const c of v.clues || []) for (const r of c.reveals || []) acan[r] = c.id;
    for (const [id, metin] of Object.entries(v.facts)) {
      p(`\n   ${id}   ← ${acan[id] || "giriş / başka vaka"}`);
      p(sar(metin, 5));
    }
  }

  if ((v.knowledge || []).length) {
    p(baslik("ÇIKARIMLAR — olgular birleşince kendiliğinden doğar"));
    for (const kn of v.knowledge) {
      p(`\n   ${kn.turetilen}`);
      p(`     gerekir: ${ifadeYaz(kn.ifade)}`);
      p(sar("başlık: " + (kn.baslik || "⚠ BAŞLIK YOK"), 5));
    }
  }

  p(baslik(`KARARLAR (${(v.decisions || []).length})`));
  for (const d of v.decisions || []) {
    const bag = d.cengoBag || 0, ruh = kararRuhHali(d);
    p("\n" + "   " + "━".repeat(EN - 3));
    p(`   ▸ "${d.etiket}"   [${d.id}]`);
    p(`     kapı: ${d.gate && d.gate !== "yok" ? ifadeYaz(d.gate) : "yok"}   ` +
      `para: ${d.para ?? 0}   bağ: ${bag > 0 ? "+" + bag : bag}` +
      (d.yuzde != null ? `   "çoğu insan": %${d.yuzde}` : ""));
    p(`     ruh hâli: ${ruh} → görsel ${RUH_GORSEL[ruh]}   ⚠ sınıflama oyuncuya gösterilmez` +
      (d.bedel_adi ? `\n     bedel kalemi: ${d.bedel_adi}` : ""));
    p("\n     SONUÇ:");
    for (const x of varyantlar(d.sonuc)) {
      if (x.kosul) p(`     [${x.kosul === "varsayilan" ? "varsayılan" : "koşul: " + ifadeYaz(x.kosul)}]`);
      p(sar(x.metin, 5));
    }
    const cs = varyantlar(d.cengo_sonuc);
    p("\n     CENGO SATIRI:   (kararın ÖNCESİNDEKİ bağa bakar)");
    if (!cs.length) p("       (bu kararda Cengo konuşmuyor)");
    for (const x of cs) {
      p(`     [${x.kosul === "varsayilan" ? "varsayılan" : ifadeYaz(x.kosul)}]`);
      p(sar(x.metin, 5));
    }
    p("\n     ANI DEFTERİ:");
    const dv = varyantlar(defterVaka[d.id]);
    if (!dv.length) p("       (yok)");
    for (const x of dv) {
      if (x.kosul) p(`     [${x.kosul === "varsayilan" ? "varsayılan" : "koşul: " + ifadeYaz(x.kosul)}]`);
      p(sar(x.metin, 5));
    }
    if (d.seed_yaz) p(`\n     sonraki vakalara yazdığı: ${JSON.stringify(d.seed_yaz)}`);
  }

  if (v.seeds && Object.keys(v.seeds).length) {
    p(baslik("TOHUMLAR — bu vakanın sonraki vakalara bıraktığı"));
    for (const [a, b] of Object.entries(v.seeds)) p(sar(`${a}: ${JSON.stringify(b)}`, 3));
  }
  p();
  return cikti.join("\n");
}

const arg = process.argv.slice(2);
const hedef = arg.find((a) => !a.startsWith("--"));
const hepsi = arg.includes("--hepsi");
if (!hedef && !hepsi) {
  console.log("kullanım: node arac_okuma.js <VAKA>   |   node arac_okuma.js --hepsi");
  console.log("vakalar: " + g.vakalar.map((v) => v.id).join(", "));
  process.exit(0);
}
for (const v of g.vakalar) if (hepsi || v.id === hedef) console.log(vakaYaz(v));
