#!/usr/bin/env node
// Konuk benzerliği denetimi — karakter üretilmeden ÖNCE (sahibinin kararı, 20 Kasım 2026). Kurala vaka numarası karışmaz.
//   HAVUZ   (sablon/kurallar/benzerlik/havuz.tsv):   resmi onaylanmış karakterler; değişmez.
//   ADAYLAR (sablon/kurallar/benzerlik/adaylar.tsv): resmi onaylanmamış herkes; değişebilir.
// Yeni karakter havuzdaki HİÇ kimseye ve birlikte denetlenen öbür adaylara benzememeli. Benzerse görünüşü formda ve
// adaylar.tsv'de değiştirilir (sahibine sorulmaz) ve program GEÇTİ diyene kadar yeniden denenir. Resmi onaylanınca
// karakter havuza taşınır; ondan sonraki her karakter ona da bakılarak üretilir.
//
//   node arac_benzerlik.js <seçim> ...  → seçilen adaylar (vaka sütunu ya da id; ör. "8" ya da "nevzat pinar") havuza ve
//                                         birbirine karşı. Çıkış 1 = değişecek biri var; o kişinin istemi üretime girmez.
//   node arac_benzerlik.js              → bütün adaylar havuza karşı (bilgi; adaylar birbirine karşı denetlenmez)
//   node arac_benzerlik.js --havuza <id> ...  → onaylanan karakteri adaylardan havuza taşır (onay anında; gömme aracı da çağırır)
//   node arac_benzerlik.js --sinav      → bilinen benzer çiftlerin yazıdaki puanı (bilgi)
//
// Özellikler: yaş (±10 yıl aynı), beden, yüz biçimi, saç rengi (yakın renkler aynı), saç kesimi, üst rengi, ayırıcı
// işaret (ortak işaret varsa aynı). Ağırlıklı puan, eşik 6: daha gevşek eşik her vakada 10–40 yanlış alarm verdi. Yazı
// denetimi BARİZ benzerliği durdurur; resimde çıkan benzerliği (Süheyla–Jale gibi) üretimden sonraki resim aracı yakalar.
"use strict";
const fs = require("fs");
const path = require("path");

const KLASOR = process.env.BENZERLIK_KLASOR || path.join(__dirname, "..", "sablon", "kurallar", "benzerlik");
const HAVUZ = path.join(KLASOR, "havuz.tsv");
const ADAY = path.join(KLASOR, "adaylar.tsv");

const AGIRLIK = { yas: 1, beden: 1, yuz: 1, sac_kesim: 2, ust_renk: 1, sac_renk: 2, isaret: 2 };
const ESIK = 6;
const SOZLUK = {
  cins: ["k", "e", "c"],
  beden: ["ince", "orta", "iri", "tombul", "ufak"],
  yuz: ["oval", "yuvarlak", "uzun", "kare", "kemikli"],
  sac_renk: ["siyah", "koyu_kahve", "kumral", "sari", "platin", "kizil", "kir", "beyaz", "mor"],
  sac_kesim: ["kel", "cok_kisa", "kisa", "kisa_kivircik", "kut", "mizanpli", "kabarik", "geriye", "omuz",
    "uzun", "uzun_dalgali", "topuz", "at_kuyrugu", "orgu"],
  ust_renk: ["siyah", "lacivert", "gri", "beyaz", "krem", "kirmizi", "bordo", "yesil", "kahve", "hardal", "mor",
    "mavi", "turuncu", "sari", "renkli"],
  isaret: ["biyik", "sakal", "gozluk", "kasket", "bere", "papyon", "yelek", "onluk", "hirka", "kakul", "cil",
    "kulaklik", "kolluk", "yara_izi", "dovme", "dis_teli", "altin_dis"],
};
// Göze aynı gelen saç renkleri (ilk Müzeyyen "gümüş" — Nadide "bembeyaz" böyle karıştı).
const RENK_GRUP = { kir: "agarmis", beyaz: "agarmis", sari: "acik", platin: "acik", siyah: "koyu", koyu_kahve: "koyu" };
// Meslek giysisi ortak işaret sayılmaz (önlüğü olan çok; yüzü ayırmaz).
const ISARET_SAYILMAZ = new Set(["onluk"]);
const OZELLIK = ["yas", "beden", "yuz", "sac_renk", "sac_kesim", "ust_renk"];
const bilinir = (x) => x && x !== "?";

function dosyaOku(dosya) {
  const metin = fs.readFileSync(dosya, "utf8");
  const satir = metin.split("\n");
  const ust = satir.filter((s) => s.startsWith("#"));
  const veri = satir.filter((s) => s.trim() && !s.startsWith("#"));
  const bas = veri.shift().split("\t");
  const hata = [];
  const kisiler = veri.map((s, sira) => {
    const h = s.split("\t");
    const o = { sira, ham: s };
    bas.forEach((b, j) => (o[b] = (h[j] || "").trim()));
    o.isaret = o.isaret === "-" ? [] : o.isaret.split(",").map((x) => x.trim()).filter(Boolean);
    for (const [alan, izin] of Object.entries(SOZLUK)) {
      const degerler = alan === "isaret" ? o.isaret : [o[alan]];
      for (const d of degerler) if (d !== "?" && !izin.includes(d)) hata.push(`${path.basename(dosya)} ${o.id}: ${alan} = "${d}" sözlükte yok`);
    }
    if (o.yas !== "?" && !/^\d+$/.test(o.yas)) hata.push(`${o.id}: yas sayı değil`);
    return o;
  });
  return { ust, bas, kisiler, hata };
}

function oku() {
  const h = dosyaOku(HAVUZ), a = dosyaOku(ADAY);
  const hata = h.hata.concat(a.hata);
  const ids = new Set();
  for (const k of h.kisiler.concat(a.kisiler)) {
    if (ids.has(k.id)) hata.push(`${k.id}: iki kez yazılı (havuz ve adaylar birlikte)`);
    ids.add(k.id);
  }
  return { havuz: h, aday: a, hata };
}

function karsilastir(a, b) {
  const ayni = [];
  if (bilinir(a.yas) && bilinir(b.yas) && Math.abs(+a.yas - +b.yas) <= 10) ayni.push(["yas", `yaş (${a.yas}/${b.yas})`]);
  for (const alan of ["beden", "yuz", "sac_kesim", "ust_renk"])
    if (bilinir(a[alan]) && a[alan] === b[alan]) ayni.push([alan, `${alan} (${a[alan]})`]);
  if (bilinir(a.sac_renk) && bilinir(b.sac_renk) &&
      (a.sac_renk === b.sac_renk || (RENK_GRUP[a.sac_renk] && RENK_GRUP[a.sac_renk] === RENK_GRUP[b.sac_renk])))
    ayni.push(["sac_renk", `saç rengi (${a.sac_renk}/${b.sac_renk})`]);
  const ortak = a.isaret.filter((x) => b.isaret.includes(x) && !ISARET_SAYILMAZ.has(x));
  if (ortak.length) ayni.push(["isaret", `işaret (${ortak.join(",")})`]);
  return { puan: ayni.reduce((s, [alan]) => s + AGIRLIK[alan], 0), ayni: ayni.map(([, m]) => m) };
}

// Seçilen adaylar: havuzdaki herkese ve birbirine karşı. İki aday benzerse adaylar listesinde SONRA yazılan değişir.
function denetle(havuz, secili, birbirine = true) {
  const bulgu = [], eksik = [];
  for (const y of secili) {
    for (const alan of OZELLIK) if (!bilinir(y[alan])) eksik.push(`${y.id}: ${alan} boş ("?") — adayda her özellik yazılır`);
    const karsi = havuz.concat(birbirine ? secili.filter((o) => o.sira < y.sira) : []);
    for (const e of karsi) {
      if (e.cins !== y.cins) continue;
      const { puan, ayni } = karsilastir(y, e);
      if (puan >= ESIK) bulgu.push({ y, e, puan, ayni });
    }
  }
  bulgu.sort((p, q) => q.puan - p.puan);
  return { bulgu, eksik };
}

// Onaylanan karakteri adaylardan havuza taşır. Dönüş: taşınan id'ler. Havuzda zaten olan sessizce geçilir.
function havuzaTasi(idler) {
  const { havuz, aday, hata } = oku();
  if (hata.length) throw new Error("benzerlik tabloları hatalı: " + hata.join("; "));
  const havuzda = new Set(havuz.kisiler.map((k) => k.id));
  const tasinan = [];
  for (const id of idler) {
    if (havuzda.has(id)) continue;
    const k = aday.kisiler.find((x) => x.id === id);
    if (!k) continue;
    tasinan.push(k);
  }
  if (!tasinan.length) return [];
  const tasId = new Set(tasinan.map((k) => k.id));
  const yaz = (d, ust, bas, kisiler) => fs.writeFileSync(d, ust.join("\n") + "\n" + bas.join("\t") + "\n" + kisiler.map((k) => k.ham).join("\n") + "\n");
  yaz(HAVUZ, havuz.ust, havuz.bas, havuz.kisiler.concat(tasinan));
  yaz(ADAY, aday.ust, aday.bas, aday.kisiler.filter((k) => !tasId.has(k.id)));
  return [...tasId];
}

const SINAV = [
  { ad: "Süheyla – Jale", a: "suheyla", b: "jale" },
  { ad: "Müzeyyen ilk tarif – Nadide", b: "nadide",
    a: { cins: "k", yas: "60", sac_renk: "kir", isaret: ["gozluk", "hirka"] } },
  { ad: "Kaan ilk tarif – Bülent", b: "bulent",
    a: { cins: "e", yas: "28", beden: "ince", sac_renk: "koyu_kahve", ust_renk: "lacivert", isaret: [] } },
  { ad: "Necmi ilk tarif – Recep", b: "recep",
    a: { cins: "e", yas: "55", beden: "tombul", yuz: "yuvarlak", sac_renk: "kir", isaret: ["bere"] } },
  { ad: "Ercan ilk tarif – Bülent", b: "bulent",
    a: { cins: "e", yas: "40", sac_renk: "siyah", sac_kesim: "geriye", ust_renk: "kirmizi", isaret: ["yelek"] } },
];

function main() {
  const args = process.argv.slice(2);
  if (args[0] === "--havuza") {
    const t = havuzaTasi(args.slice(1));
    console.log(t.length ? "Havuza taşındı: " + t.join(", ") : "Taşınacak kimse yok (zaten havuzda ya da adaylarda yok).");
    return;
  }
  const { havuz, aday, hata } = oku();
  if (hata.length) { console.log("TABLO HATALI:\n  " + hata.join("\n  ")); process.exit(1); }
  const herkes = Object.fromEntries(havuz.kisiler.concat(aday.kisiler).map((k) => [k.id, k]));

  if (args[0] === "--sinav") {
    for (const s of SINAV) {
      const a = typeof s.a === "string" ? herkes[s.a] : s.a;
      const { puan, ayni } = karsilastir(a, herkes[s.b]);
      console.log(`${puan >= ESIK ? "YAKALADI" : "eşik altı"}  ${s.ad}: puan ${puan} — ${ayni.join(", ") || "yok"}`);
    }
    return;
  }

  let secili = aday.kisiler;
  if (args.length) {
    const s = new Set();
    for (const a of args) {
      const bul = aday.kisiler.filter((k) => k.vaka === a || k.id === a);
      if (!bul.length) {
        if (havuz.kisiler.some((k) => k.id === a)) { console.log(`${a} havuzda (onaylı); denetlenmez.`); continue; }
        console.log(`"${a}" adaylarda yok (${path.relative(process.cwd(), ADAY)}). Yeni karakteri önce oraya ekle.`);
        process.exit(1);
      }
      bul.forEach((k) => s.add(k));
    }
    secili = [...s].sort((p, q) => p.sira - q.sira);
  }
  const { bulgu, eksik } = denetle(havuz.kisiler, secili, args.length > 0);
  const ad = (k) => `${k.ad} (${k.vaka === "K" ? "kalıcı" : "V" + k.vaka})`;
  if (eksik.length) console.log("EKSİK:\n  " + eksik.join("\n  "));
  if (bulgu.length) {
    console.log(`BENZER (puan ${ESIK} ya da üstü) — öndeki değişir, istemi üretime girmez:`);
    bulgu.forEach((b) => console.log(`  ${ad(b.y)} ~ ${ad(b.e)}${havuz.kisiler.includes(b.e) ? " [havuz]" : ""}: puan ${b.puan} — ${b.ayni.join(", ")}`));
  }
  const kisi = [...new Set(bulgu.map((b) => b.y.id))];
  const durdu = eksik.length || kisi.length;
  console.log(durdu
    ? `\nSONUÇ: DURDU — değişecek: ${kisi.join(", ") || "-"}${eksik.length ? "; eksik özellik var" : ""}.`
    : `\nSONUÇ: GEÇTİ — ${secili.length} aday havuzdaki ${havuz.kisiler.length} karaktere${args.length ? " ve birbirine" : ""} benzemiyor.`);
  process.exit(durdu ? 1 : 0);
}

if (require.main === module) main();
module.exports = { oku, karsilastir, denetle, havuzaTasi, ESIK, SINAV };
