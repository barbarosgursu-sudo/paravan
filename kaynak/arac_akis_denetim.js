/* AKIŞ DENETİMİ — test değil, ARAÇ.

   Bu oturumda bulunan çelişkilerin hiçbirini test yakalamadı; hepsi gözle
   bulundu. Sebebi: çelişki tek bir dosyanın içinde değil, ANLAMLA bağlı ama
   KODLA bağlı olmayan yüzeyler arasında duruyor. Örnek: "Cengo'nun yüzü asık"
   anı notu, cengoBag'i +2 YÜKSELTEN bir kararda duruyordu — iki yüzey birbirini
   hiç görmediği için kimse fark etmedi.

   Bu araç bir kararın BÜTÜN yüzeylerini tek ekranda yan yana basar:
     etiket · kapı · para · bağ · ruh hâli · ruh görseli
     sonuç metni (bütün varyantlar, koşullarıyla)
     Cengo satırı (bütün kademeler, eşikleriyle)
     anı defteri notu (bütün varyantlar, koşullarıyla)

   Künye ve tahta araçlarının kardeşi, aynı sebeple insana bırakıldı: çelişki
   ANLAMSAL bir sorudur, mekanik kural yanlış pozitif üretmeden karar veremez.

   ⚑ BAYRAKLAR yalnızca ADAY listesidir, hata listesi DEĞİL. Yanlış pozitif
   üretmeleri beklenir ve tasarım gereğidir; her biri insanın bakması gereken
   yeri işaret eder, hükmü sen verirsin. Bayrak yok demek çelişki yok demek
   değildir — asıl denetim gözle okumaktır.

   Çalıştır: node arac_akis_denetim.js           (40 kararın hepsi)
             node arac_akis_denetim.js V1        (tek vaka)
             node arac_akis_denetim.js --bayrak  (yalnız bayraklı kararlar)  */
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
const k = JSON.parse(fs.readFileSync("kisiler.json", "utf-8"));

// Türkçe İ tuzağı: /i/ bayrağı U+0130'u katlamaz.
const kucuk = (s) => String(s).toLocaleLowerCase("tr");

/* Ruh hâli motordan KOPYALANMAZ, oradan okunur — ayrışma sessiz olmasın. */
const motor = require("./motor.js");
const ruhHali = motor.kararRuhHali || ((d) => {
  const v = d.cengoBag || 0, p = d.para || 0;
  return v < 0 ? "kirli" : v === 0 ? "bosluk" : p < 0 ? "bedel" : "temiz";
});
const RUH_GORSEL = { temiz: "karar_temiz", bedel: "karar_bedel",
                     bosluk: "karar_bosluk", kirli: "karar_kirli" };

/* ---- metin varyantlarını düzleştir -------------------------------------- */
function varyantlar(ham) {
  if (ham == null) return [];
  if (typeof ham === "string") return [{ kosul: null, metin: ham }];
  if (!Array.isArray(ham)) return [];
  return ham.map((v) => ({ kosul: v.kosul, metin: v.metin }));
}
const kosulYaz = (x) =>
  x == null ? "" : typeof x === "string" ? x : JSON.stringify(x);

/* ---- bayraklar ----------------------------------------------------------- */
const CENGO_SOGUK = ["yüzü asık", "suratı", "tek kelime etmedi", "bir şey demedi",
  "konusunu açmadı", "farklı bakıyor", "günden beri farklı", "çenesi kasıl",
  "soru sormadı", "sormadı bile", "kaldıramaz", "bakmıyor"];
const CENGO_SICAK = ["gülümse", "omzuna", "sırtını sıvazla", "başını salladı",
  "güldü", "sevindi", "rahatladı"];
const HUKUM = ["doğru olanı yaptın", "en adil", "doğrusu buydu", "doğru olanı yaptım",
  "en iyisini yaptın", "haklıydın", "doğru olan buydu", "iyi bir insansın",
  // Sıralama da hükümdür: seçenekleri ahlaki sıraya dizen her üstünlük derecesi.
  // 23 Eylül 2026'da YAN-B "en pahalı, en dürüst hali" diyordu ve bu liste
  // yalnız "en adil"i tanıdığı için göremedi.
  "en dürüst", "en temiz", "en onurlu", "en doğru", "en erdemli"];

/* Motorun kararRuhHali sınıflaması (temiz/bedel/bosluk/kirli) oyuncuya ASLA
   kelime olarak gösterilmez — sözleşme böyle diyor ama hiçbir yer denetlemiyordu.
   YAN-C/isi_reddet tam tamına "Temiz kaldın" yazıyordu ve karar gerçekten
   ruh=temiz'di: iç etiket ekrana sızmıştı. Bu tarama o sızıntıyı arar.
   Fiille birlikte aranır; "temiz bir iş çıkardın" gibi sıfat kullanımı
   yanlış pozitif olurdu. */
const RUH_SIZINTI = [
  "temiz kaldın", "temiz kaldım", "temiz çıktın", "temiz bir karar",
  "kirli kaldın", "kirli bir karar", "elin kirlendi",
  "vicdanın temiz", "vicdanı temiz",
];
const PARA_GELDI = ["para geldi", "parayı aldım", "ödeme yapıldı", "kasa doldu"];
const PARA_GELMEDI = ["bir kuruş girmedi", "para gelmez", "para gelmedi"];

/* Özel isimler — tire denetiminin yanlış pozitifini kesmek için. Kadro
   kisiler.json'dan okunur (elle liste tutulmaz, kadro değişince kendi gelir);
   yer adları ayrıca eklenir. */
const OZEL = new Set();
for (const p of k.kisiler || [])
  for (const parca of String(p.ad).replace(/["']/g, " ").split(/\s+/))
    if (parca) OZEL.add(kucuk(parca));
for (const y of ["istanbul", "haliç", "beyoğlu", "galata", "karaköy", "peri", "paravan"])
  OZEL.add(y);

const cumleler = (t) => String(t).split(/(?<=[.!?…])\s+/).filter(Boolean);
const gecer = (t, liste) => liste.filter((w) => kucuk(t).includes(kucuk(w)));

function bayraklar(d, sonucV, cengoV, defterV) {
  const f = [];
  const bag = d.cengoBag || 0, para = d.para || 0;
  const anlati = [...sonucV, ...defterV];      // Cengo satırı hariç: o AYRI okunur

  // 1) Cengo'nun tepkisi bağın yönüyle çelişiyor mu?
  //    Cengo satırı bu denetimin DIŞINDA: o kararın ÖNCESİNDEKİ bağa bakar ve
  //    tasarım gereği sıcakken ihanet daha çok acıtır — orada ters yön doğrudur.
  for (const v of anlati)
    for (const c of cumleler(v.metin)) {
      if (!kucuk(c).includes("cengo")) continue;
      const s = gecer(c, CENGO_SOGUK), w = gecer(c, CENGO_SICAK);
      if (bag > 0 && s.length) f.push(`bağ +${bag} ama Cengo küsmüş görünüyor: "${s[0]}"`);
      if (bag < 0 && w.length) f.push(`bağ ${bag} ama Cengo memnun görünüyor: "${w[0]}"`);
    }

  // 2) Hüküm cümlesi. Sonuç metninde YASAK; anı defteri Peri'nin kendi sesi,
  //    orada yalnızca dikkat çekilir.
  for (const v of sonucV) for (const h of gecer(v.metin, HUKUM))
    f.push(`SONUÇ metninde hüküm cümlesi: "${h}"`);
  for (const v of defterV) for (const h of gecer(v.metin, HUKUM))
    f.push(`anı defterinde hüküm kalıbı (Peri'nin kendi sesi olabilir): "${h}"`);
  // 2b) Ruh hâli etiketi metne sızmış mı? Sonuç da defter de aynı yasağa tabi:
  //     defterde Peri'nin kendi sesi olması bunu mazur göstermez, "temiz kaldım"
  //     da oyuncuya not vermektir.
  for (const v of [...sonucV, ...defterV]) for (const r of gecer(v.metin, RUH_SIZINTI))
    f.push(`ruh hâli etiketi metne sızmış (motor sınıflaması ekranda): "${r}"`);

  // 3) Para ile metin çelişiyor mu?
  for (const v of anlati) {
    if (para <= 0 && gecer(v.metin, PARA_GELDI).length)
      f.push(`para ${para} ama metin para geldiğini söylüyor`);
    if (para > 0 && gecer(v.metin, PARA_GELMEDI).length)
      f.push(`para +${para} ama metin para gelmediğini söylüyor`);
  }

  // 4) Cengo satırı ile anı defteri aynı repliği iki kez okutuyor mu?
  //    (DEVIR §4'te kayıtlı, bilinen açık iş.)
  for (const a of cengoV) for (const b of defterV)
    for (const ca of cumleler(a.metin))
      if (ca.length > 25 && kucuk(b.metin).includes(kucuk(ca)))
        f.push(`aynı cümle hem Cengo satırında hem anı defterinde: "${ca.slice(0, 45)}…"`);

  // 4b) Cengo EKRANDA susuyor ama anı defteri onu konuşturuyor.
  //     Geçen turda kaçırıldı ve taze göz buldu: V2/kuru_rapor'un varsayılan
  //     Cengo satırı "Soru sormadı" diyor, anı defteri ise KOŞULSUZ olarak
  //     "Cengo 'biz insanlarla mı uğraşıyoruz' dedi" diyor. Düşük bağdaki
  //     oyuncu ekranda sessizlik görüp deftere replik yazıyor.
  //     Tekrar denetimi (4) bunu yakalayamadı: iki cümle birebir aynı değil
  //     ("insanla"/"insanlarla"), üstelik sorun tekrar değil ÇELİŞKİ.
  // Sessizlik listesi HARFİ OLMAMALI. İlk yazımda "bir şey demedi" gibi tam
  // kalıplar arandı ve YAN-A/cengoya_birak kaçtı: orada satır
  // '"Sen iyi birisin" demedi' diyor, defter ise aynı cümleyi Cengo'ya
  // söyletiyor. Olumsuzlanmış konuşma FİİLİ yeter.
  const SUSUYOR = ["soru sormadı", "sormuyor artık", "sessiz kaldı"];
  const SUSMA_FIIL = /(^|[^a-zçğıöşü])(demedi|söylemedi|sormadı|etmedi|konuşmadı|açmadı)([^a-zçğıöşü]|$)/i;
  // Cümle sınırına takılmamalı: YAN-A defterinde "…dedim Cengo'ya. Bana '…'
  // dedi." yazıyor ve arada NOKTA var. Atıf cümle atlayabiliyor, o yüzden
  // "Cengo geçiyor" ile "konuşma fiili geçiyor" ayrı ayrı aranır. Bayrak
  // zaten ADAY listesi; fazladan aday, kaçan bulgudan iyidir.
  // TÜRKÇE \b TUZAĞI: JS'in \w'si [A-Za-z0-9_], yani "ğ" harf SAYILMAZ ve
  // /\bsordu\b/ "sorduğu" ile eşleşir. YAN-C/aylayi_uyar tam böyle yanlış
  // alarm verdi. Sınırı Türkçe harf kümesiyle elle kur.
  const TR = "a-zçğıöşü";
  const KONUSMA_FIIL = new RegExp(
    `(^|[^${TR}])(dedi|sordu|ekledi|fısıldadı|söyledi)([^${TR}]|$)`, "i");
  const KONUSUYOR = (t) => kucuk(t).includes("cengo") && KONUSMA_FIIL.test(kucuk(t));
  const susanVaryant = cengoV.find((x) =>
    gecer(x.metin, SUSUYOR).length || SUSMA_FIIL.test(kucuk(x.metin)));
  if (susanVaryant)
    for (const x of defterV) {
      // Defter varyantı Cengo'nun sessiz olduğu duruma da basılıyorsa çelişir.
      // Koşulsuz ya da 'varsayilan' varyant her durumda basılır.
      const herZaman = !x.kosul || x.kosul === "varsayilan";
      if (herZaman && KONUSUYOR(x.metin)) {
        const iz = gecer(susanVaryant.metin, SUSUYOR)[0] ||
                   (kucuk(susanVaryant.metin).match(SUSMA_FIIL) || [])[0];
        f.push(`Cengo satırının bir varyantı susuyor ("${iz}") ` +
               `ama anı defteri onu her durumda konuşturuyor`);
      }
    }

  // 5) Sarkan tire — cümle silinince kalıyor, otomatik kontrol geçen sefer kaçırdı.
  for (const v of [...anlati, ...cengoV]) {
    if (/—\s*$/.test(v.metin.trim())) f.push("metin tire ile bitiyor");
    // Tireden sonra büyük harf: özel isimden önce NORMALDİR ("… sormadın — Cavit
    // tam da bunu istiyordu"). Yalnız özel isim OLMAYAN büyük harf şüphelidir;
    // geçen oturumun kırığı böyleydi: "Belki en kolayı — İpi çekmediğin için".
    for (const m of v.metin.matchAll(/—\s+([A-ZÇĞİÖŞÜI][a-zçğıöşü]+)/g))
      if (!OZEL.has(kucuk(m[1]))) f.push(`tireden sonra "${m[1]}" — silinmiş cümle kalıntısı olabilir`);
    if (/\s{2,}/.test(v.metin)) f.push("çift boşluk");
  }
  return [...new Set(f)];
}

/* ---- basım ---------------------------------------------------------------- */
const arg = process.argv.slice(2);
const yalnizBayrak = arg.includes("--bayrak");
const vakaSuz = arg.find((a) => !a.startsWith("--"));

let toplam = 0, bayrakli = 0, cengosuz = 0;
for (const v of g.vakalar) {
  if (vakaSuz && v.id !== vakaSuz) continue;
  const defterVaka = (k.defter || {})[v.id] || {};
  for (const d of v.decisions || []) {
    toplam++;
    const sonucV = varyantlar(d.sonuc);
    const cengoV = varyantlar(d.cengo_sonuc);
    const defterV = varyantlar(defterVaka[d.id]);
    if (!cengoV.length) cengosuz++;
    const f = bayraklar(d, sonucV, cengoV, defterV);
    if (f.length) bayrakli++;
    if (yalnizBayrak && !f.length) continue;

    const bag = d.cengoBag || 0, ruh = ruhHali(d);
    console.log("\n" + "━".repeat(78));
    console.log(`${v.id} · ${d.id}   "${d.etiket}"`);
    console.log(`   kapı: ${d.gate ?? "yok"}   para: ${d.para ?? 0}   ` +
                `bağ: ${bag > 0 ? "+" + bag : bag}   ruh: ${ruh} → ${RUH_GORSEL[ruh]}` +
                (d.bedel_adi ? `   bedel: ${d.bedel_adi}` : ""));
    if (d.seed_yaz) console.log(`   tohum: ${JSON.stringify(d.seed_yaz)}`);

    const blok = (ad, liste, not) => {
      console.log(`   ── ${ad} ${"─".repeat(Math.max(0, 52 - ad.length))}${not ? " " + not : ""}`);
      if (!liste.length) { console.log("      (yok)"); return; }
      for (const x of liste)
        console.log(`      ${x.kosul ? "[" + kosulYaz(x.kosul) + "] " : ""}${x.metin}`);
    };
    blok("SONUÇ", sonucV);
    blok("CENGO SATIRI", cengoV, "(karar ÖNCESİ bağa bakar)");
    blok("ANI DEFTERİ", defterV);
    for (const x of f) console.log(`   ⚑ ${x}`);
  }
}

console.log("\n" + "═".repeat(78));
console.log(`${toplam} karar okundu · ${bayrakli} kararda bayrak var · ` +
            `${cengosuz} kararda Cengo hiç konuşmuyor`);
console.log("Bayraklar ADAY listesidir, hata listesi değil. Asıl denetim gözle okumaktır.");
