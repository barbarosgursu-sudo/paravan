// YENİ OYUN — Kim yaptı? ve sonda ödenen ücret (motor_yeni.js).
// Kurallar: YAPI-13, YAPI-22 (Kim yaptı?, karar); YAPI-31, YAPI-32.
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

console.log("\n=== Üç sonuç: bütün vakalar (YAPI-14) ===");
// Yukarıdaki blok yalnız ilk vakayı sınar; burada her vaka, önceki vakalar oynanmış hâlde (Adım 4, 22 Kasım 2026).
for (const VK of G.vakalar.filter(v => v.kim_yapti)) {
  const ky = VK.kim_yapti, o = new OyunYeni(G);
  for (const v of G.vakalar.filter(x => x.kim_yapti && x.sira < VK.sira).sort((x, y) => x.sira - y.sira)) {
    o.vakaBaslat(v.id); o.durum.aktif.arastirmaKalan = 99;
    let ac; while ((ac = o.acikKaynaklar()).length) o.kaynakAc(ac[0].id);
    const kn = o.kanitlar().map(x => x.id); o.suclama(v.kim_yapti.suclu, kn.slice(0, 2)); o.kararVer(v.decisions[0].id);
  }
  o.vakaBaslat(VK.id); o.durum.aktif.arastirmaKalan = 99;
  let ac; while ((ac = o.acikKaynaklar()).length) o.kaynakAc(ac[0].id);
  const cift = ky.dogru_ciftler[0].map(somut), ol = o.kanitlar().map(x => x.id);
  let zayif = null;
  for (const a of ol) for (const b of ol) if (!zayif && a !== b && o.suclamaSonucu(ky.suclu, [a, b]) !== "dogru") zayif = [a, b];
  const masum = ky.supheliler.find(s => s.id !== ky.suclu).id, u = ky.ucret || {};
  const sorun = [];
  if (o.suclamaSonucu(ky.suclu, cift) !== "dogru") sorun.push("doğru çift → dogru değil");
  if (!zayif || o.suclamaSonucu(ky.suclu, zayif) !== "zayif") sorun.push("zayıf sonuç kurulamıyor");
  if (o.suclamaSonucu(masum, cift) !== "yanlis") sorun.push("yanlış kişi → yanlis değil");
  if (!(u.dogru >= u.zayif && u.zayif >= u.yanlis && u.yanlis >= 0)) sorun.push("ücret sırası bozuk");
  // Suçlama Cengo bağını değiştirmez; bağ yalnız ahlaki kararla oynar (KAR-19).
  const bagOnce = o.durum.cengoBag;
  for (const [kim, kanit] of [[masum, cift], ...(zayif ? [[ky.suclu, zayif]] : [])]) {
    o.durum.aktif.suclama = null; o.suclama(kim, kanit);
    if (o.durum.cengoBag !== bagOnce) sorun.push(`suçlama Cengo bağını değiştirdi (${bagOnce} → ${o.durum.cengoBag})`);
  }
  o.durum.aktif.suclama = null;
  const r = o.suclama(ky.suclu, cift);
  if (o.durum.cengoBag !== bagOnce) sorun.push(`doğru suçlama Cengo bağını değiştirdi (${bagOnce} → ${o.durum.cengoBag})`);
  if (r.hata || o.acikKararlar().length !== VK.decisions.length) sorun.push("suçlamadan sonra kararların hepsi açık değil");
  k(`${VK.id}: üç sonuç, ücret sırası, kararlar açık, bağ değişmez` + (sorun.length ? " — " + sorun.join("; ") : ""), !sorun.length);
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
    // Kasa yok (16 Kasım 2026, kural 24): ne ücret ne karar parası oyunun parasını değiştirir.
    const once = o.durum.para, borcOnce = o.durum.borc;
    const r = o.kararVer(d.id);
    if (r.hata || o.durum.para !== once || o.durum.borc !== borcOnce) {
      k(`${sonuc} + ${d.id}: karar kasayı değiştirmiyor (kasa yok)`, false);
    }
    // Anı defteri vaka bitince kimi suçladığını bu tohumdan okur (aktif silinir).
    if (o.durum.seeds["_suclama_" + V.id] !== kim + ":" + sonuc) {
      k(`${sonuc} + ${d.id}: suçlama kalıcı tohuma yazıldı`, false);
    }
  }
}
k("her sonuç × her karar: karar kasayı değiştirmiyor (kasa yok, kural 24)", true);
k("her sonuç × her karar: suçlama `_suclama_<vaka>` tohumunda (anı defteri)", true);

console.log("\n=== Kayıt ===");
{
  // Gerçek hakla: yükleme ipuçlarını kayıttaki sırayla yeniden açar, hak aşılamaz.
  const o = new OyunYeni(G);
  o.vakaBaslat(V.id);
  let acik;
  while (o.kanitlar().length < 2 && (acik = o.acikKaynaklar()).length && !o.kaynakAc(acik[0].id).hata) {}
  const kanit = o.kanitlar().slice(0, 2).map(x => x.id);
  const ilk = o.suclama(o.supheliler()[0].id, kanit);   // erken suçlama: ekrandaki ilk şüpheli
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

console.log("\n=== Dosya çözüldü: yalnız eldeki kanıt (Nurcan, 20 Ekim 2026) ===");
// Sahibi buldu: "Eksik olan" açılmamış ipucunun olgusunu basıyordu (hem sızıntı hem reklamlı
// kaçan ipucunu bedavaya açma). Her vakada her ipucu alt kümesi × şüpheli × çift denenir.
{
  let denenen = 0, sizinti = [], eldeYetmez = 0, eksikli = 0;
  for (const vaka of G.vakalar.filter(v => v.kim_yapti)) {
    const ids = vaka.clues.map(c => c.id);
    for (let m = 1; m < (1 << ids.length); m++) {
      const o = new OyunYeni(G);
      for (const v of G.vakalar.filter(x => x.kim_yapti && x.sira < vaka.sira).sort((x, y) => x.sira - y.sira)) {
        o.vakaBaslat(v.id); o.durum.aktif.arastirmaKalan = 99;
        let ac; while ((ac = o.acikKaynaklar()).length) o.kaynakAc(ac[0].id);
        const kn = o.kanitlar().map(x => x.id); o.suclama(v.kim_yapti.suclu, kn.slice(0, 2)); o.kararVer(v.decisions[0].id);
      }
      o.vakaBaslat(vaka.id); const a = o.durum.aktif; a.arastirmaKalan = 99;
      for (const [i, id] of ids.entries()) if (m & (1 << i)) o.kaynakAc(id);   // koşulu tutmayan açılmaz, sorun değil
      const kn = o.kanitlar().map(x => x.id);
      for (const s of o.supheliler()) for (let i = 0; i < kn.length; i++) for (let j = i + 1; j < kn.length; j++) {
        a.suclama = null; o.suclama(s.id, [kn[i], kn[j]]); denenen++;
        const y = o.cozumYolu();
        for (const x of [...y.eksik, ...y.tamam]) if (!kn.includes(x)) sizinti.push(`${vaka.id} ${s.id} → ${x}`);
        if (y.eksik.length) eksikli++;
        if (!y.eldeCiftVar) eldeYetmez++;
      }
    }
  }
  k(`sonuç ekranı yalnız eldeki kanıtı anıyor (${denenen} suçlama)` + (sizinti.length ? ": " + sizinti.slice(0, 3).join("; ") : ""), denenen > 0 && !sizinti.length);
  k("iki durum da yaşanıyor: eksik kanıt elde / elde tam çift yok", eksikli > 0 && eldeYetmez > 0);
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
