#!/usr/bin/env node
// Konuk benzerliği denetimi — ÜRETİMDEN ÖNCE (kural işi adım 4, sahibinin kararı 19 Kasım 2026).
// Girdi: sablon/kurallar/benzerlik/konuklar.tsv (her konuğun görünüş tablosu, kapalı sözlük).
// Her yeni konuk, ÖNCEKİ vakaların bütün konuklarıyla (aynı cins) karşılaştırılır. Aynı sayılan özellik sayısı
// ESIK'e ulaşırsa çıkış 1: o konuğun istemi üretime girmez — görünüşü değiştirilip tablo yeniden yazılır.
//
//   node arac_benzerlik.js <vaka>       → o vakanın konuklarını önceki vakalarla karşılaştırır (çıkış 1 = benzer var)
//   node arac_benzerlik.js --hepsi      → her vakayı kendinden öncekilerle (bilgi; çıkış hep 0)
//   node arac_benzerlik.js --sinav      → bilinen benzer çiftleri yakalıyor mu (çıkış 1 = araç güvenilmez)
//
// Özellikler: yaş (±10 yıl aynı sayılır), beden, yüz biçimi, saç rengi (yakın renkler aynı), saç kesimi,
// üst rengi, ayırıcı işaret (ortak bir işaret varsa aynı). "?" hiçbir şeyle aynı sayılmaz; ama YENİ vakanın
// konuğunda "?" yasak (bilinmeyen özellik denetimi deler).
"use strict";
const fs = require("fs");
const path = require("path");

const DOSYA = path.join(__dirname, "..", "sablon", "kurallar", "benzerlik", "konuklar.tsv");
const ESIK = 3;

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

function oku(dosya = DOSYA) {
  const satirlar = fs.readFileSync(dosya, "utf8").split("\n").filter((s) => s.trim() && !s.startsWith("#"));
  const bas = satirlar.shift().split("\t");
  const hata = [];
  const kisiler = satirlar.map((s, i) => {
    const h = s.split("\t");
    const o = {};
    bas.forEach((b, j) => (o[b] = (h[j] || "").trim()));
    o.kalici = o.vaka === "K";
    o.vaka = o.kalici ? -1 : Number(o.vaka);
    o.isaret = o.isaret === "-" ? [] : o.isaret.split(",").map((x) => x.trim()).filter(Boolean);
    for (const [alan, izin] of Object.entries(SOZLUK)) {
      const degerler = alan === "isaret" ? o.isaret : [o[alan]];
      for (const d of degerler) if (d !== "?" && !izin.includes(d)) hata.push(`${o.id}: ${alan} = "${d}" sözlükte yok`);
    }
    if (o.yas !== "?" && !/^\d+$/.test(o.yas)) hata.push(`${o.id}: yas sayı değil`);
    return o;
  });
  return { kisiler, hata };
}

function karsilastir(a, b) {
  const ayni = [];
  const bilinir = (x) => x && x !== "?";
  if (bilinir(a.yas) && bilinir(b.yas) && Math.abs(+a.yas - +b.yas) <= 10) ayni.push(`yaş (${a.yas}/${b.yas})`);
  for (const alan of ["beden", "yuz", "sac_kesim", "ust_renk"])
    if (bilinir(a[alan]) && a[alan] === b[alan]) ayni.push(`${alan} (${a[alan]})`);
  if (bilinir(a.sac_renk) && bilinir(b.sac_renk) &&
      (a.sac_renk === b.sac_renk || (RENK_GRUP[a.sac_renk] && RENK_GRUP[a.sac_renk] === RENK_GRUP[b.sac_renk])))
    ayni.push(`sac_renk (${a.sac_renk}/${b.sac_renk})`);
  const ortak = a.isaret.filter((x) => b.isaret.includes(x) && !ISARET_SAYILMAZ.has(x));
  if (ortak.length) ayni.push(`işaret (${ortak.join(",")})`);
  return ayni;
}

function denetle(kisiler, vaka, esik = ESIK) {
  const yeni = kisiler.filter((k) => k.vaka === vaka);
  const eski = kisiler.filter((k) => k.vaka < vaka); // kalıcılar (vaka -1) her zaman içinde
  const bulgu = [];
  const eksik = [];
  for (const y of yeni) {
    for (const alan of ["yas", "beden", "yuz", "sac_renk", "sac_kesim", "ust_renk"])
      if (!y[alan] || y[alan] === "?") eksik.push(`${y.id}: ${alan} boş ("?") — yeni konukta her özellik yazılır`);
    for (const e of eski) {
      if (e.cins !== y.cins) continue;
      const ayni = karsilastir(y, e);
      if (ayni.length >= esik) bulgu.push({ yeni: y, eski: e, ayni });
    }
  }
  bulgu.sort((p, q) => q.ayni.length - p.ayni.length);
  return { yeni, bulgu, eksik };
}

// Bilinen benzer çiftler: resimleri birbirine benzemiş, sahibinin ya da ortağın yakaladığı. Araç bunları
// tablodaki bugünkü görünüşleriyle ya da sorunlu İLK tarifleriyle yakalamalı; yakalayamazsa güvenilmez.
const SINAV = [
  // Vaka 7 G4: Süheyla, Jale'nin aynısı çıktı (19 Kasım 2026). Tablodaki hâli = resimde çıkan.
  { ad: "Süheyla – Jale (V7 G4)", yeni: "suheyla", eski: "jale" },
  // Vaka 6 ilk tarif (13 Kasım 2026, Barbaros: Nadide'ye çok benzedi): gümüş saç, örgü hırka, zincirli gözlük.
  { ad: "Müzeyyen ilk tarif – Nadide", eski: "nadide",
    yeni: { id: "muzeyyen_ilk", vaka: 6, cins: "k", yas: "60", beden: "?", yuz: "?", sac_renk: "kir", sac_kesim: "?",
      ust_renk: "?", isaret: ["gozluk", "hirka"] } },
  // Vaka 7 ilk tarif (16 Kasım, ortak: Bülent'e benzedi): uzun ince, perçemli kahverengi saç, genç.
  { ad: "Kaan ilk tarif – Bülent", eski: "bulent",
    yeni: { id: "kaan_ilk", vaka: 7, cins: "e", yas: "28", beden: "ince", yuz: "?", sac_renk: "koyu_kahve",
      sac_kesim: "?", ust_renk: "lacivert", isaret: [] } },
  // Vaka 7 ilk tarif (16 Kasım, ortak: Recep'e benzedi): iri, kır favoriler, yün bere, 50'ler.
  { ad: "Necmi ilk tarif – Recep", eski: "recep",
    yeni: { id: "necmi_ilk", vaka: 7, cins: "e", yas: "55", beden: "tombul", yuz: "yuvarlak", sac_renk: "kir",
      sac_kesim: "?", ust_renk: "?", isaret: ["bere"] } },
  // Vaka 7 ilk tarif (16 Kasım, ortak: Bülent'ten ayrılsın): jöleli siyah saç, kırmızı vale yeleği.
  { ad: "Ercan ilk tarif – Bülent", eski: "bulent",
    yeni: { id: "ercan_ilk", vaka: 7, cins: "e", yas: "40", beden: "?", yuz: "?", sac_renk: "siyah",
      sac_kesim: "geriye", ust_renk: "kirmizi", isaret: ["yelek"] } },
];

function satir(b) {
  const v = (k) => (k.kalici ? "kalıcı" : "V" + k.vaka);
  return `  ${b.yeni.ad} (${v(b.yeni)}) ~ ${b.eski.ad} (${v(b.eski)}): ${b.ayni.length} aynı — ${b.ayni.join(", ")}`;
}

function main() {
  const arg = process.argv[2];
  const { kisiler, hata } = oku();
  if (hata.length) {
    console.log("TABLO HATALI:\n  " + hata.join("\n  "));
    process.exit(1);
  }
  const byId = Object.fromEntries(kisiler.map((k) => [k.id, k]));

  if (arg === "--sinav") {
    let kacan = 0;
    for (const s of SINAV) {
      const y = typeof s.yeni === "string" ? byId[s.yeni] : s.yeni;
      const e = byId[s.eski];
      const ayni = karsilastir(y, e);
      const tuttu = ayni.length >= ESIK;
      if (!tuttu) kacan++;
      console.log(`${tuttu ? "YAKALADI" : "KAÇIRDI "}  ${s.ad}: ${ayni.length} aynı — ${ayni.join(", ") || "yok"}`);
    }
    console.log(kacan ? `\nSONUÇ: ${kacan} bilinen çift kaçtı — araç güvenilmez.` : "\nSONUÇ: bilinen çiftlerin hepsi yakalandı.");
    process.exit(kacan ? 1 : 0);
  }

  if (arg === "--hepsi") {
    const vakalar = [...new Set(kisiler.map((k) => k.vaka))].filter((v) => v > 0).sort((a, b) => a - b);
    for (const v of vakalar) {
      const { bulgu } = denetle(kisiler, v);
      console.log(`== Vaka ${v}: ${bulgu.length} benzer çift`);
      bulgu.forEach((b) => console.log(satir(b)));
    }
    return;
  }

  const vaka = Number(arg);
  if (!vaka) {
    console.log("Kullanım: node arac_benzerlik.js <vaka> | --hepsi | --sinav");
    process.exit(2);
  }
  const { yeni, bulgu, eksik } = denetle(kisiler, vaka);
  if (!yeni.length) {
    console.log(`Vaka ${vaka}'nın konukları tabloda yok (${path.relative(process.cwd(), DOSYA)}). Önce tabloya ekle.`);
    process.exit(1);
  }
  if (eksik.length) console.log("EKSİK:\n  " + eksik.join("\n  "));
  if (bulgu.length) {
    console.log(`BENZER (${ESIK} ya da daha çok özellik aynı) — bu konukların istemi üretime girmez:`);
    bulgu.forEach((b) => console.log(satir(b)));
  }
  const durdu = eksik.length || bulgu.length;
  console.log(durdu ? `\nSONUÇ: DURDU — Vaka ${vaka}'nın ${yeni.length} konuğunda düzeltilecek yer var.`
    : `\nSONUÇ: GEÇTİ — Vaka ${vaka}'nın ${yeni.length} konuğu öncekilerin hiçbirine benzemiyor.`);
  process.exit(durdu ? 1 : 0);
}

if (require.main === module) main();
module.exports = { oku, karsilastir, denetle, ESIK, SINAV };
