/* Cengo satırı — bağ sıcaklığına göre değişen tepki.

   Üç kademe: soğuk (Mesafeli), varsayılan (Yoldaş), sıcak (Yakın+Bağlı).
   Seçim mevcut metinSec ile yapılıyor; yeni olan tek şey hangi cengoBag
   değerinin okunduğu.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Dördü var:
     1. Sıcaklık değişince satırın DEĞİŞMEMESİ (alan bağlanmamış olabilir).
     2. Satırın KARAR SONRASI bağa bakması — yanlış metin üretir: bağ -1'ken
        koz_yap (-2) seçilince -3'e düşer ve "uzun zamandır bir şey demiyor"
        basılır, oysa adam tam o an tiksindi. Tasarım kararı "ÖNCE" idi.
     3. Bir kademede satırın boş kalması (varsayilan eksikse sessizce olur).
     4. Cengo cümlesinin hem sonuçta hem satırda durması (taşınırken
        silinmeyi unutmak) — oyuncu aynı şeyi iki kez okur.
   Dördü de aşağıda. */
const fs = require("fs");
const { Oyun } = require("./motor.js");
const GAME = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));

let hata = 0;
const goster = x => (x === undefined ? "<undefined>" : JSON.stringify(x));
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? "\n     " + ek : "")); if (!ok) hata++; };

/* Bir kararı verilen başlangıç bağıyla oynar, Cengo satırını döndürür. */
function oyna(vid, did, baslangicBag) {
  const o = new Oyun(GAME);
  o.durum.para = 9000000;
  o.vakaBaslat(vid);
  o.durum.aktif.arastirmaKalan = 99;
  for (let t = 0; t < 6; t++)
    for (const c of o.acikKaynaklar()) { try { o.kaynakAc(c.id); } catch (e) {} }
  o.durum.cengoBag = baslangicBag;
  return o.kararVer(did);
}

const ORNEK = GAME.vakalar.flatMap(v =>
  (v.decisions || []).filter(d => d.cengo_sonuc).map(d => ({ vid: v.id, d })));

console.log("=== KAPSAM ===");
k(`${ORNEK.length} kararda Cengo satırı tanımlı`, ORNEK.length === 17, "bulunan: " + ORNEK.length);

console.log("\n=== ÜÇ KADEME ÜÇ FARKLI SATIR ÜRETİYOR ===");
{
  // Veriden okunuyor, motordan değil: bazı kararlar KAPILI (hepsini_ifsa kanıt
  // ister) ve basit bir koşumda hiç açılmaz. Metin çeşitliliği yapısal bir
  // soru; motorun o kararı o an verebiliyor olmasına bağlı değil.
  const ayniKalan = [], eksik = [];
  for (const { vid, d } of ORNEK) {
    const m = d.cengo_sonuc.map(v => v.metin);
    if (m.length !== 3) { eksik.push(`${vid}/${d.id} (${m.length} varyant)`); continue; }
    if (new Set(m).size !== 3) ayniKalan.push(`${vid}/${d.id}`);
  }
  k("her kararda tam üç kademe var", eksik.length === 0, eksik.join(", "));
  k("üç kademe üç FARKLI metin", ayniKalan.length === 0, ayniKalan.join(", "));
}

console.log("\n=== SATIR KARAR ÖNCESİ BAĞA BAKIYOR (tasarım kararı) ===");
{
  // koz_yap cengoBag -2. Başlangıç -1 (Yoldaş) → sonrası -3 (Mesafeli).
  // Doğru davranış: YOLDAŞ satırı basılmalı, Mesafeli değil.
  // DİKKAT: karar kimlikleri vakalar arası benzersiz değil — koz_yap hem V3'te
  // hem V4'te var (olgu adları K11 ile benzersiz, kararlar değil). Vakaya kapsa.
  const d = GAME.vakalar.find(v => v.id === "V4").decisions.find(x => x.id === "koz_yap");
  const beklenenOrta = d.cengo_sonuc.find(v => v.kosul && v.kosul.cengoBag_en_az === -1).metin;
  const beklenenSoguk = d.cengo_sonuc.find(v => v.kosul === "varsayilan").metin;
  const r = oyna("V4", "koz_yap", -1);
  k("bağ -1'de koz_yap (-2) YOLDAŞ satırını basıyor", r.cengoSatir === beklenenOrta,
    "gelen: " + goster(r.cengoSatir).slice(0, 70));
  k("karar SONRASI değere bakmıyor (soğuk satır basmıyor)", r.cengoSatir !== beklenenSoguk);
  k("bağ gerçekten düştü (delta uygulandı)", r.cengoBag === -3, "cengoBag: " + r.cengoBag);
}

console.log("\n=== CENGO CÜMLESİ İKİ YERDE DURMUYOR ===");
{
  // Satır taşınırken sonuç metninden silinmeliydi; unutulursa oyuncu iki kez okur.
  const cift = [];
  for (const { vid, d } of ORNEK) {
    const r = oyna(vid, d.id, 0);
    if (r.hata || !r.cengoSatir) continue;   // kapılı karar: basit koşumda açılmıyor
    // satırın ilk anlamlı parçası sonuç metninde de geçiyor mu?
    const cekirdek = r.cengoSatir.split(/[.;?!]/)[0].trim();
    if (cekirdek.length > 12 && r.sonuc.includes(cekirdek)) cift.push(`${vid}/${d.id}`);
  }
  k("Cengo satırı sonuç metninde tekrar etmiyor", cift.length === 0, cift.join(", "));
}

console.log("\n=== CENGO SATIRI OLMAYAN KARARLAR SESSİZ ===");
{
  const bos = GAME.vakalar.flatMap(v => (v.decisions || []).filter(d => !d.cengo_sonuc).map(d => ({ vid: v.id, d })));
  const r = oyna(bos[0].vid, bos[0].d.id, 0);
  k("cengo_sonuc'suz kararda satır boş", !r.cengoSatir, "gelen: " + goster(r.cengoSatir));
  console.log(`   (${bos.length} kararda Cengo konuşmuyor — bu normal)`);
}

console.log("\n=== YENİ VARYANTLAR ANI DEFTERİNİ TEKRAR ETMİYOR ===");
{
  // Cengo satırı, ekranda Peri'nin anı notunun hemen ÜSTÜNDE duruyor. İkisi
  // aynı repliği kelimesi kelimesine taşırsa oyuncu arka arkaya iki kez okur.
  // ORTA varyant denetim dışı: o, kararın ÖZGÜN sonuç cümlesidir (bu özellikten
  // önce de oradaydı) ve anı defteriyle ilişkisi yazarın kendi tercihi.
  // Denetlenen: bu özellikle EKLENEN soğuk ve sıcak varyantlar.
  const KISILER = JSON.parse(fs.readFileSync("kisiler.json", "utf-8"));
  const defter = KISILER.defter || {};
  const cakisan = [];
  for (const { vid, d } of ORNEK) {
    const ham = (defter[vid] || {})[d.id];
    if (!ham) continue;
    const notlar = (typeof ham === "string" ? [ham] : ham.map(v => v.metin || "")).join(" ");
    for (const [i, v] of d.cengo_sonuc.entries()) {
      if (i === 1) continue;                       // orta = özgün cümle, denetim dışı
      for (const cumle of v.metin.split(/(?<=[.?!])\s+/)) {
        const t = cumle.trim().replace(/^[""']|[""']$/g, "");
        if (t.length >= 25 && notlar.includes(t)) cakisan.push(`${vid}/${d.id}: «${t.slice(0,45)}…»`);
      }
    }
  }
  k("eklenen varyantlar anı defterinden cümle tekrar etmiyor", cakisan.length === 0, cakisan.join("\n     "));
}

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nTÜMÜ GEÇTİ");
process.exit(hata ? 1 : 0);
