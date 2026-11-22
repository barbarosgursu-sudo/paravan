// YENİ OYUN — KAYIT / SÜRDÜRME (22 Kasım 2026; eski oyunun test_kayit.js'inden uyarlandı, o arşivde).
// Asıl iddia: kayıt yalnız GİRDİ taşır (açılan ipuçları, suçlama, reklam hakkı). Türetilmiş bilgi
// kaydedilmez, yüklemede güncel veriden yeniden üretilir — eski ya da kurcalanmış bir kayıt oyuncunun
// hak etmediği bir olguyu geri getiremez (Nurcan kuralı, BILGI-1).
// Sabit sayı ve sabit ad yazılmaz (KOD-9): vakalar, ipuçları, şüpheliler veriden okunur.
const fs = require("fs");
const path = require("path");
const { OyunYeni } = require("./motor_yeni.js");
const { KAYIT_SEMA } = require("./motor.js");

const G = JSON.parse(fs.readFileSync(path.join(__dirname, "yeni", "game_data.json"), "utf-8"));
let hata = 0;
const k = (ad, ok, ayrinti) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad + (ok || !ayrinti ? "" : " — " + ayrinti)); if (!ok) hata++; };
const kopya = x => JSON.parse(JSON.stringify(x));
const sirali = a => [...a].sort().join("|");
const kimYaptili = G.vakalar.filter(v => v.kim_yapti);

// Bir vakayı başlatır, hakkı yettiğince ilk açık ipucunu açar (n verilirse en çok n tane).
const oyna = (vaka, n = Infinity) => {
  const o = new OyunYeni(G);
  o.vakaBaslat(vaka.id);
  let i = 0;
  while (i++ < n && o.durum.aktif.arastirmaKalan > 0 && o.acikKaynaklar().length) o.kaynakAc(o.acikKaynaklar()[0].id);
  return o;
};
const turAtla = o => { const y = new OyunYeni(G); const r = y.durumYukle(kopya(o.durumAl())); return { y, r }; };

console.log("=== Kayıt yükü: yalnız girdiler ===");
for (const vaka of kimYaptili) {
  const o = oyna(vaka);
  const kn = o.kanitlar().map(x => x.id);
  o.suclama(vaka.kim_yapti.suclu, kn.slice(0, 2));
  const kay = o.durumAl(), metin = JSON.stringify(kay);
  const fazla = Object.keys(kay.aktif).filter(a => !["id", "acilan", "harcanan", "reklamHak", "suclama"].includes(a));
  k(`${vaka.id}: aktif vakada yalnız girdi alanları`, !fazla.length, fazla.join(","));
  k(`${vaka.id}: türetilmiş bilgi (bilinen, hak, giriş metni, vaka tanımı) kaydedilmiyor`,
    !/"bilinen"|arastirmaKalan|girisMetin|"clues"|"truth"|"facts"/.test(metin));
  k(`${vaka.id}: suçlamanın sonucu kaydedilmiyor (yalnız şüpheli + kanıtlar)`,
    sirali(Object.keys(kay.aktif.suclama || {})) === "kanitlar|supheli");
}

console.log("\n=== Vaka ortasında kaydet-yükle: durum birebir aynı ===");
for (const vaka of kimYaptili) {
  const o = oyna(vaka, Math.max(1, vaka.arastirma - 1));
  const { y, r } = turAtla(o);
  k(`${vaka.id}: yükleme başarılı`, !r.hata, r.hata);
  if (r.hata) continue;
  k(`${vaka.id}: bilinenler aynı`, sirali(y.bilinenler()) === sirali(o.bilinenler()));
  k(`${vaka.id}: açık ipuçları aynı`, sirali(y.acikKaynaklar().map(x => x.id)) === sirali(o.acikKaynaklar().map(x => x.id)));
  k(`${vaka.id}: araştırma hakkı yeniden türetildi`, y.durum.aktif.arastirmaKalan === o.durum.aktif.arastirmaKalan);
  k(`${vaka.id}: şüpheliler ve kanıtlar aynı`,
    sirali(y.supheliler().map(x => x.id)) === sirali(o.supheliler().map(x => x.id)) &&
    sirali(y.kanitlar().map(x => x.id)) === sirali(o.kanitlar().map(x => x.id)));
}

console.log("\n=== Suçlama kayıttan güncel veriyle yeniden yapılır ===");
for (const vaka of kimYaptili) {
  const o = oyna(vaka);
  const kn = o.kanitlar().map(x => x.id);
  o.suclama(vaka.kim_yapti.suclu, kn.slice(0, 2));
  const { y, r } = turAtla(o);
  k(`${vaka.id}: suçlamalı kayıt yüklendi, sonuç aynı, kararlar açık`,
    !r.hata && y.durum.aktif.suclama && y.durum.aktif.suclama.sonuc === o.durum.aktif.suclama.sonuc && y.acikKararlar().length === vaka.decisions.length, r.hata);
  const sahte = kopya(o.durumAl()); sahte.aktif.suclama.supheli = "olmayan_supheli_xyz";
  k(`${vaka.id}: olmayan şüpheliyle suçlama reddedildi`, !!new OyunYeni(G).durumYukle(sahte).hata);
}

console.log("\n=== Nurcan kuralı: az araştıranın kaydı derin olguları getirmiyor ===");
{
  let sinandi = 0;
  for (const vaka of kimYaptili) {
    const az = oyna(vaka, 1), cok = oyna(vaka);
    const fazla = cok.bilinenler().filter(x => !az.bilinenler().includes(x));
    if (!fazla.length) continue;
    sinandi++;
    const { y } = turAtla(az), yb = new Set(y.bilinenler());
    const sizan = fazla.filter(x => yb.has(x));
    k(`${vaka.id}: tek ipuçlu kayıt ${fazla.length} derin olgunun hiçbirini getirmiyor`, !sizan.length, sizan.join(","));
  }
  k("en az bir vakada derin olgu farkı var (test anlamlı)", sinandi > 0);
}

console.log("\n=== Elle kurcalanmış kayıt reddediliyor ===");
{
  const vaka = kimYaptili[0];
  const o = oyna(vaka, 1), saglam = kopya(o.durumAl());
  const red = (ad, kay) => k(ad, !!new OyunYeni(G).durumYukle(kay).hata);
  const s1 = kopya(saglam); s1.aktif.acilan = ["olmayan_ipucu_xyz"]; red("olmayan ipucu reddedildi", s1);
  // Kilitli ipucu: gereken olgu bilinmeden açılmış gibi yazılmış kayıt (her vakada ilk kilitli ipucu).
  for (const v of G.vakalar) {
    const t = new OyunYeni(G); t.vakaBaslat(v.id);
    const b = new Set(t.bilinenler());
    const kil = v.clues.find(c => (c.needs || []).length && !c.needs.every(n => b.has(n)));
    if (!kil) continue;
    const kay = kopya(t.durumAl()); kay.aktif.acilan = [kil.id];
    red(`${v.id}: kilitli ipucu (${kil.id}) kayda elle yazılınca reddedildi`, kay);
  }
  const s2 = kopya(saglam); s2.aktif.id = "V_OLMAYAN"; red("olmayan vaka reddedildi", s2);
  const s3 = kopya(saglam); s3.tamamlanan = ["UYDURMA"]; red("tanınmayan tamamlanan vaka reddedildi", s3);
  const s4 = kopya(saglam); s4.sema = KAYIT_SEMA + 1; red("başka şema reddedildi", s4);
  red("null reddedildi", null); red("dizi reddedildi", [1, 2, 3]); red("boş nesne reddedildi", {});
  // Reddedilen yükleme var olan oyunu bozmaz.
  const t = new OyunYeni(G); t.vakaBaslat(vaka.id); const once = t.durum.aktif.id;
  t.durumYukle(s1);
  k("reddedilince eski durum bozulmadı", t.durum.aktif && t.durum.aktif.id === once);
}

console.log("\n=== Uçtan uca: her adımda kaydet-yükle, bütün vakalar bitiyor ===");
{
  let o = new OyunYeni(G), adim = 0, guvenlik = 0, kopuk = null;
  const tur = () => { const { y, r } = turAtla(o); if (r.hata) throw new Error("adım " + adim + ": " + r.hata); o = y; adim++; };
  try {
    while (o.masadakiVakalar().length && guvenlik++ < 4 * G.vakalar.length) {
      const vid = o.masadakiVakalar()[0], vaka = G.vakalar.find(v => v.id === vid);
      o.vakaBaslat(vid); tur();
      while (o.durum.aktif.arastirmaKalan > 0 && o.acikKaynaklar().length) { o.kaynakAc(o.acikKaynaklar()[0].id); tur(); }
      if (vaka.kim_yapti) {
        const r = o.suclama(vaka.kim_yapti.suclu, o.kanitlar().map(x => x.id).slice(0, 2));
        if (r.hata) throw new Error(vid + " suçlama: " + r.hata);
        tur();
      }
      const kararlar = o.acikKararlar();
      if (!kararlar.length) throw new Error(vid + ": karar açılmadı");
      const r = o.kararVer(kararlar[kararlar.length - 1].id);
      if (r.hata) throw new Error(vid + " karar: " + r.hata);
      tur();
    }
  } catch (e) { kopuk = e.message; }
  k("hiçbir adımda kayıt kopmadı", !kopuk, kopuk);
  const omurga = G.vakalar.filter(v => v.tur === "omurga").map(v => v.id);
  const eksik = omurga.filter(id => !o.durum.tamamlanan.includes(id));
  k("omurga vakaların hepsi tamamlandı", !eksik.length, eksik.join(","));
  k("hiçbir vaka iki kez tamamlanmadı", new Set(o.durum.tamamlanan).size === o.durum.tamamlanan.length, o.durum.tamamlanan.join(" → "));
  k("kasa değişmedi (kasa yok — YAPI-31)", o.durum.para === new OyunYeni(G).durum.para);
  console.log("  (bilgi) " + adim + " adımın her birinde kaydedilip yeniden yüklendi");
}

console.log("\n=== Vaka arasında (aktif vaka yokken) ===");
{
  const vaka = kimYaptili[0];
  const o = oyna(vaka);
  o.suclama(vaka.kim_yapti.suclu, o.kanitlar().map(x => x.id).slice(0, 2));
  o.kararVer(o.acikKararlar()[0].id);
  const kay = kopya(o.durumAl());
  k("aktif null olarak kaydedildi", kay.aktif === null);
  const y = new OyunYeni(G), r = y.durumYukle(kay);
  k("yüklendi, aktif vaka yok", !r.hata && y.durum.aktif === null, r.hata);
  k("masadaki vakalar aynı", y.masadakiVakalar().join(",") === o.masadakiVakalar().join(","));
  k("Cengo bağı ve tohumlar korundu", y.durum.cengoBag === o.durum.cengoBag && JSON.stringify(y.durum.seeds) === JSON.stringify(o.durum.seeds));
  k("kalıcı olgular korundu", sirali(y.durum.kaliciOlgular || []) === sirali(o.durum.kaliciOlgular || []));
}

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== KAYIT TESTİ (yeni oyun) TAMAM ===");
process.exit(hata ? 1 : 0);
