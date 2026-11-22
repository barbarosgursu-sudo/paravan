// YENİ OYUN — TAKILMA (softlock) YOK (22 Kasım 2026; eski oyunun test_softlock.js'inden uyarlandı, o arşivde).
// İddia: oyuncu hakkını nasıl harcarsa harcasın, kimi suçlarsa suçlasın, hangi kanıtı seçerse seçsin vaka
// bir karara varır, karar verilir ve oyun sıradaki vakaya geçer. Kaybetme yok (YAPI-36): yanlış suçlama da
// zayıf kanıt da oyunu kilitlemez.
// test_yeni_v2.js aynı ipucu sıralarını İÇERİK için gezer (suçlu ekranda mı, doğru çift toplanabilir mi);
// bu test AKIŞ için gezer: her yaprakta her şüpheli × bir kanıt çifti × her karar.
// Sabit sayı ve ad yazılmaz (KOD-9).
const fs = require("fs");
const path = require("path");
const { OyunYeni } = require("./motor_yeni.js");

const G = JSON.parse(fs.readFileSync(path.join(__dirname, "yeni", "game_data.json"), "utf-8"));
let hata = 0;
const k = (ad, ok, ayrinti) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad + (ok || !ayrinti ? "" : " — " + ayrinti)); if (!ok) hata++; };

// Hakkın izin verdiği her ipucu kümesi (sıra needs yüzünden önemli; aynı kümeye varan sıralardan biri yeter).
function kumeler(vaka) {
  const sonuc = new Map();
  const gez = sira => {
    const o = new OyunYeni(G);
    o.vakaBaslat(vaka.id);
    for (const id of sira) o.kaynakAc(id);
    const acik = o.durum.aktif.arastirmaKalan > 0 ? o.acikKaynaklar() : [];
    if (!acik.length) { const a = [...new Set(sira)].sort().join("+"); if (!sonuc.has(a)) sonuc.set(a, sira); return; }
    for (const c of acik) gez([...sira, c.id]);
  };
  gez([]);
  return sonuc;
}
const kur = (vaka, sira) => { const o = new OyunYeni(G); o.vakaBaslat(vaka.id); for (const id of sira) o.kaynakAc(id); return o; };

for (const vaka of G.vakalar) {
  console.log(`\n=== ${vaka.id} · ${vaka.baslik} ===`);
  const ks = kumeler(vaka);
  const sorun = [];
  let denenen = 0;
  for (const [ad, sira] of ks) {
    const o0 = kur(vaka, sira);
    if (!vaka.kim_yapti) {                       // Kim yaptı? taşımayan vaka: karar doğrudan açılmalı
      if (!o0.acikKararlar().length) sorun.push(ad + ": karar açılmadı");
      continue;
    }
    const supheliler = o0.supheliler().map(s => s.id), kanit = o0.kanitlar().map(x => x.id);
    if (!supheliler.length) { sorun.push(ad + ": şüpheli yok"); continue; }
    if (kanit.length < 2) { sorun.push(ad + ": iki kanıt seçilemiyor"); continue; }
    for (const s of supheliler) {
      for (const d of vaka.decisions) {
        denenen++;
        const o = kur(vaka, sira);
        const r = o.suclama(s, kanit.slice(0, 2));
        if (r.hata) { sorun.push(`${ad} · ${s}: suçlama reddedildi (${r.hata})`); break; }
        if (o.acikKararlar().length !== vaka.decisions.length) { sorun.push(`${ad} · ${s}: kararların hepsi açılmadı`); break; }
        const kr = o.kararVer(d.id);
        if (kr.hata) { sorun.push(`${ad} · ${s} · ${d.id}: karar reddedildi (${kr.hata})`); continue; }
        if (o.durum.aktif !== null || !o.durum.tamamlanan.includes(vaka.id)) sorun.push(`${ad} · ${s} · ${d.id}: vaka kapanmadı`);
      }
    }
  }
  k(`her ipucu kümesinde (${ks.size}) her şüpheli × her karar vakayı kapatıyor`, !sorun.length, [...new Set(sorun)].slice(0, 4).join(" | "));
  console.log(`  (bilgi) ${denenen} suçlama + karar denendi`);
}

// Vakalar arası: hangi karar verilirse verilsin sıradaki omurga vakası masaya gelir, oyun sonuna dek kopmaz.
console.log("\n=== Vakalar arası: her karar sırasında masa boşalmadan sona varılıyor ===");
{
  const omurga = G.vakalar.filter(v => v.tur === "omurga").map(v => v.id);
  const enCok = Math.max(...G.vakalar.map(v => v.decisions.length));
  const kopanlar = [];
  for (let secim = 0; secim < enCok; secim++) {
    const o = new OyunYeni(G);
    let guvenlik = 0;
    while (o.masadakiVakalar().length && guvenlik++ < 4 * G.vakalar.length) {
      const vid = o.masadakiVakalar()[0], vaka = G.vakalar.find(v => v.id === vid);
      o.vakaBaslat(vid);
      while (o.durum.aktif.arastirmaKalan > 0 && o.acikKaynaklar().length) o.kaynakAc(o.acikKaynaklar()[0].id);
      if (vaka.kim_yapti) o.suclama(o.supheliler()[0].id, o.kanitlar().map(x => x.id).slice(0, 2));
      const kr = o.acikKararlar();
      if (!kr.length) { kopanlar.push(`seçim ${secim}: ${vid} karar yok`); break; }
      o.kararVer(kr[Math.min(secim, kr.length - 1)].id);
    }
    const eksik = omurga.filter(id => !o.durum.tamamlanan.includes(id));
    if (eksik.length) kopanlar.push(`seçim ${secim}: bitmeyen ${eksik.join(",")}`);
  }
  k(`her karar sırasıyla (${enCok}) bütün omurga vakaları bitiyor`, !kopanlar.length, kopanlar.slice(0, 3).join(" | "));
}

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== TAKILMA TESTİ (yeni oyun) TAMAM ===");
process.exit(hata ? 1 : 0);
