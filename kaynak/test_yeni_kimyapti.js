// YENİ OYUN — Kim yaptı? ve sonda ödenen ücret (motor_yeni.js).
// Şablon: sablon/1_oyun_yapisi.md "Kim yaptı? ekranı", "Karar"; kural kitabı 24–25.
// Sabit sayı yazılmaz: beklentiler veriden (kim_yapti, decisions) türetilir.
const fs = require("fs");
const path = require("path");
const { OyunYeni, BAG_ESIK } = require("./motor_yeni.js");

const G = JSON.parse(fs.readFileSync(path.join(__dirname, "yeni", "game_data.json"), "utf-8"));
const V = G.vakalar.find(v => v.kim_yapti);
const KY = V.kim_yapti;

let hata = 0;
const k = (ad, ok) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad); if (!ok) hata++; };

// Hak sınırına takılmadan istenen ipuçlarını açan oyun (içerik sınanıyor, bütçe değil).
const oyunKur = (ipuclari = []) => {
  const o = new OyunYeni(G);
  o.vakaBaslat(V.id);
  o.durum.aktif.arastirmaKalan = 99;
  for (const id of ipuclari) { const r = o.kaynakAc(id); if (r.hata) throw new Error(id + ": " + r.hata); }
  return o;
};
const tumIpuclari = () => {                     // needs sırasına göre hepsini aç
  const o = oyunKur();
  let acik;
  while ((acik = o.acikKaynaklar()).length) o.kaynakAc(acik[0].id);
  return o;
};
// Bir çiftin somut iki olgusunu seç (ifade öğesinde ilk seçenek).
const somut = oge => typeof oge === "string" ? oge : (oge.any || oge.all)[0];

console.log("=== Kapı: suçlamadan önce karar yok ===");
{
  const o = oyunKur();
  k("suçlamadan önce açık karar yok", o.acikKararlar().length === 0);
  k("suçlamadan önce kararVer reddediliyor", !!o.kararVer(V.decisions[0].id).hata);
}

console.log("\n=== Ekranda yalnız adı duyulan şüpheliler ===");
{
  const bas = new Set(oyunKur().supheliler().map(s => s.id));
  const herZaman = KY.supheliler.filter(s => s.gorunur === "her_zaman").map(s => s.id);
  const kosullu = KY.supheliler.filter(s => s.gorunur !== "her_zaman").map(s => s.id);
  k("baştan görünenler tam 'her_zaman' olanlar", herZaman.every(id => bas.has(id)) && kosullu.every(id => !bas.has(id)));
  k("suçlu baştan görünüyor", bas.has(KY.suclu));
  const son = new Set(tumIpuclari().supheliler().map(s => s.id));
  k("bütün ipuçlarından sonra herkes görünüyor", KY.supheliler.every(s => son.has(s.id)));
  const o = oyunKur();
  const gizli = kosullu[0];
  if (gizli) {
    const ilk = o.kanitlar().slice(0, 2).map(x => x.id);
    k("görünmeyen şüpheli suçlanamıyor", !!o.suclama(gizli, ilk).hata);
  }
}

console.log("\n=== Üç sonuç ===");
{
  const o = tumIpuclari();
  const cift = KY.dogru_ciftler[0].map(somut);
  k("doğru kişi + doğru çift → dogru", o.suclamaSonucu(KY.suclu, cift) === "dogru");
  k("çiftin sırası önemsiz", o.suclamaSonucu(KY.suclu, [...cift].reverse()) === "dogru");
  // Hiçbir doğru çifte uymayan iki olgu → zayıf
  const olgular = o.kanitlar().map(x => x.id);
  let zayif = null;
  for (const a of olgular) for (const b of olgular)
    if (!zayif && a !== b && o.suclamaSonucu(KY.suclu, [a, b]) !== "dogru") zayif = [a, b];
  k("doğru kişi + çift dışı kanıt → zayif", zayif && o.suclamaSonucu(KY.suclu, zayif) === "zayif");
  const masum = KY.supheliler.find(s => s.id !== KY.suclu).id;
  k("yanlış kişi → yanlis (kanıt ne olursa olsun)", o.suclamaSonucu(masum, cift) === "yanlis");
  k("ücret sırası: dogru ≥ zayif ≥ yanlis ≥ 0",
    KY.ucret.dogru >= KY.ucret.zayif && KY.ucret.zayif >= KY.ucret.yanlis && KY.ucret.yanlis >= 0);
}

console.log("\n=== Tek hak, sahneler ===");
{
  const o = tumIpuclari();
  const cift = KY.dogru_ciftler[0].map(somut);
  k("aynı kanıt iki kez sayılmaz", !!o.suclama(KY.suclu, [cift[0], cift[0]]).hata);
  const r = o.suclama(KY.suclu, cift);
  k("suçlama yapıldı", !r.hata && r.sonuc === "dogru");
  k("ikinci suçlama reddediliyor", !!o.suclama(KY.suclu, cift).hata);
  k("suçlamadan sonra dört karar da açık", o.acikKararlar().length === V.decisions.length);
  const gerekli = ["yuzlesme_dogru", "yuzlesme_zayif",
    ...KY.supheliler.filter(s => s.id !== KY.suclu).map(s => "yuzlesme_" + s.id)];
  k("her sonucun yüzleşme sahnesi var", gerekli.every(ad => V.sahneler && V.sahneler[ad]));
}

console.log("\n=== Para: ücret sonda, yalnız birikir ===");
for (const sonuc of ["dogru", "zayif", "yanlis"]) {
  for (const d of V.decisions) {
    const o = tumIpuclari();
    const masum = KY.supheliler.find(s => s.id !== KY.suclu).id;
    const cift = KY.dogru_ciftler[0].map(somut);
    const olgular = o.kanitlar().map(x => x.id);
    let kanit = cift, kim = KY.suclu;
    if (sonuc === "yanlis") kim = masum;
    if (sonuc === "zayif") {
      for (const a of olgular) for (const b of olgular)
        if (a !== b && o.suclamaSonucu(KY.suclu, [a, b]) === "zayif") kanit = [a, b];
    }
    o.suclama(kim, kanit);
    const once = o.durum.para;
    const r = o.kararVer(d.id);
    const bekle = once + KY.ucret[sonuc] + (d.para || 0);
    if (r.hata || o.durum.para !== bekle || o.durum.para < 0 || o.durum.borc !== 0) {
      k(`${sonuc} + ${d.id}: kasa = önce + ücret + karar parası, eksi/borç yok`, false);
    }
  }
}
k("her sonuç × her karar: kasa = önce + ücret + karar parası, eksi ve borç yok", true);

console.log("\n=== Kayıt ===");
{
  // Gerçek hakla: yükleme ipuçlarını kayıttaki sırayla yeniden açar, hak aşılamaz.
  const o = new OyunYeni(G);
  o.vakaBaslat(V.id);
  let acik;
  while (o.kanitlar().length < 2 && (acik = o.acikKaynaklar()).length && !o.kaynakAc(acik[0].id).hata) {}
  const kanit = o.kanitlar().slice(0, 2).map(x => x.id);
  const ilk = o.suclama(KY.suclu, kanit);
  const kayit = JSON.parse(JSON.stringify(o.durumAl()));
  const y = new OyunYeni(G);
  k("suçlamalı kayıt yükleniyor", !ilk.hata && !y.durumYukle(kayit).hata);
  k("yüklenince suçlama ve sonucu geri geliyor",
    !!(y.durum.aktif && y.durum.aktif.suclama && y.durum.aktif.suclama.sonuc === ilk.sonuc) &&
    y.acikKararlar().length === V.decisions.length);
  const bozuk = JSON.parse(JSON.stringify(kayit)); bozuk.aktif.suclama.supheli = "yok_boyle";
  const z = new OyunYeni(G);
  k("geçersiz suçlamalı kayıt reddediliyor, durum bozulmuyor", !!z.durumYukle(bozuk).hata && z.durum.aktif === null);
}

console.log("\n=== Kapanış eşiği ===");
{
  const o = new OyunYeni(G);
  o.durum.cengoBag = BAG_ESIK; const y = o.bagYuksek();
  o.durum.cengoBag = BAG_ESIK - 1; const d = o.bagYuksek();
  k("eşik ve üstü yüksek, altı düşük (kural 12a)", y === true && d === false);
}

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nHEPSİ GEÇTİ");
process.exit(hata ? 1 : 0);
