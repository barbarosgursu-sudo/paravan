// YENİ OYUN — her vakanın araştırma ekonomisi (Vaka 2 ile yazıldı; Kim yaptı? taşıyan
// her vakaya uygulanır). test_yeni_kimyapti.js içeriği sınar (hak sınırı kapalı); bu test
// HAKKI AÇIK oynar: oyuncunun gerçekten yapabileceği her ipucu sırası denenir.
// Şablon: 1. parça "Sabit sayılar", "Yanlış iz", "Ekranda ne görünür"; kural 24–26.
// Sabit sayı yazılmaz: beklentiler veriden (arastirma, kim_yapti, decisions) türetilir.
const fs = require("fs");
const path = require("path");
const { OyunYeni } = require("./motor_yeni.js");

const G = JSON.parse(fs.readFileSync(path.join(__dirname, "yeni", "game_data.json"), "utf-8"));
let hata = 0;
const k = (ad, ok, ayrinti) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad + (ok || !ayrinti ? "" : " — " + ayrinti)); if (!ok) hata++; };

// Hakkın izin verdiği bütün ipucu sıralarını gezer; her yaprakta (hak bitti ya da açılacak
// ipucu kalmadı) oyunu döndürür. Sıra önemli olabilir (needs), o yüzden küme değil dizi.
function yapraklar(vaka) {
  const sonuc = [];
  const gez = sira => {
    const o = new OyunYeni(G);
    o.vakaBaslat(vaka.id);
    for (const id of sira) { const r = o.kaynakAc(id); if (r.hata) throw new Error(sira.join(">") + ": " + r.hata); }
    const acik = o.durum.aktif.arastirmaKalan > 0 ? o.acikKaynaklar() : [];
    if (!acik.length) { sonuc.push({ sira, o }); return; }
    for (const c of acik) gez([...sira, c.id]);
  };
  gez([]);
  return sonuc;
}

for (const vaka of G.vakalar.filter(v => v.kim_yapti)) {
  const ky = vaka.kim_yapti;
  console.log(`\n=== ${vaka.id} · ${vaka.baslik} ===`);
  const ys = yapraklar(vaka);
  const kume = y => [...new Set(y.sira)].sort().join("+");
  const kumeler = new Map(ys.map(y => [kume(y), y]));
  k(`hak (${vaka.arastirma}) ipucu sayısından (${vaka.clues.length}) az`, vaka.arastirma < vaka.clues.length);

  // Suçlu, hakkını bitiren her oyuncunun ekranında (1. parça, "Ekranda ne görünür").
  const gormeyen = ys.filter(y => !y.o.supheliler().some(s => s.id === ky.suclu)).map(kume);
  k("hakkını bitiren her oyuncu suçluyu ekranda görüyor", !gormeyen.length, [...new Set(gormeyen)].join(", "));

  // Her yolda Kim yaptı? çalışır: en az iki kanıt ve bir sonuç var.
  const kanitsiz = ys.filter(y => y.o.kanitlar().length < 2).map(kume);
  k("her yolda en az iki kanıt seçilebiliyor", !kanitsiz.length, [...new Set(kanitsiz)].join(", "));

  // Doğru sonuca ulaşan ipucu kümeleri; en az iki AYRI yol (ortak ipucu taşımayan iki çözüm
  // değil — şablon "en az iki ayrı ipucu yolu" der: farklı kümeler).
  const cozen = [...kumeler.entries()].filter(([, y]) => {
    const kn = y.o.kanitlar().map(x => x.id);
    return kn.some(a => kn.some(b => a !== b && y.o.suclamaSonucu(ky.suclu, [a, b]) === "dogru"));
  }).map(([a]) => a);
  k("suçluyu tam kanıtlayan en az iki ayrı ipucu yolu var", cozen.length >= 2, cozen.join(" | "));
  console.log(`  (bilgi) çözen küme: ${cozen.length} / ${kumeler.size} oynanabilir küme`);

  // Her doğru çift, oyuncunun gerçekten toplayabileceği bir kümede birlikte bulunur.
  const ulasilmaz = ky.dogru_ciftler.filter(c => ![...kumeler.values()].some(y => {
    const kn = new Set(y.o.kanitlar().map(x => x.id));
    return c.every(o => typeof o === "string" ? kn.has(o) : (o.any || o.all).some(x => kn.has(x)));
  }));
  k("her doğru kanıt çifti hak içinde toplanabiliyor", !ulasilmaz.length, ulasilmaz.map(c => c.join("+")).join(", "));

  // Kasa yalnız birikir (kural 24): en kötü ücret + en kötü karar parası ≥ 0.
  const enAzUcret = Math.min(...Object.values(ky.ucret));
  const enAzPara = Math.min(...vaka.decisions.map(d => d.para || 0));
  k("en kötü ücret + en kötü karar ≥ 0", enAzUcret + enAzPara >= 0, `${enAzUcret} + ${enAzPara}`);

  // Kirli seçenek biraz daha çok kazandırır (kural 26), ama ücreti geçmez.
  const enCok = Math.max(...vaka.decisions.map(d => d.para || 0));
  k("en çok kazandıran karar ücretin altında", enCok < ky.ucret.dogru, `${enCok} / ${ky.ucret.dogru}`);
}

// Vakalar sırayla açılır: Vaka 1 bitince sıradaki omurga (sira) gelir.
{
  const omurga = G.vakalar.filter(v => v.tur === "omurga").sort((a, b) => a.sira - b.sira);
  if (omurga.length > 1) {
    const o = new OyunYeni(G);
    const [ilk, ikinci] = omurga;
    o.vakaBaslat(ilk.id);
    o.durum.aktif.arastirmaKalan = 99;
    let acik; while ((acik = o.acikKaynaklar()).length) o.kaynakAc(acik[0].id);
    const kn = o.kanitlar().map(x => x.id);
    o.suclama(ilk.kim_yapti.suclu, kn.slice(0, 2));
    o.kararVer(ilk.decisions[0].id);
    const id = o.masadakiVakalar()[0] || null;
    console.log("\n=== Vakalar arası ===");
    k(`${ilk.id} bitince sıradaki vaka ${ikinci.id}`, id === ikinci.id, String(id));
  }
}

console.log(hata ? `\n${hata} başarısız.` : "\nHepsi geçti.");
process.exitCode = hata ? 1 : 0;
