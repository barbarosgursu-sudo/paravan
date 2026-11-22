// YENİ OYUN — doğrulayıcının temel kuralları bozuk veride DURUYOR mu (22 Kasım 2026; eski oyunun
// test_bozuk.js'inden uyarlandı, o arşivde). Eskisi yalnız BLOCKED basıyordu ve çıkış kodu hep 0'dı;
// bu test her bozmada beklenen kuralın HATASINI arar, bulamazsa başarısız olur. "PASS" tek başına
// kuralın kör olduğunu da söyleyebilir — kural ancak ısırdığı görülünce güvenilir.
// K15–K20'nin bozuk kopya denemeleri test_yeni_v1.js ve test_yeni_kimyapti.js'te; burada ortak çekirdek:
// K1 (isim sızıntısı), K2 (ulaşılamaz olgu), K3 (döngü), K4 (truth), K11 (olgu kimliği), K14 (tanımsız olgu).
// Sabit ad yazılmaz (KOD-9): bozulacak ipucu, olgu ve isim veriden seçilir.
const fs = require("fs");
const path = require("path");
const { dogrula } = require("./dogrulayici.js");

const oku = f => JSON.parse(fs.readFileSync(path.join(__dirname, "yeni", f), "utf-8"));
const G = oku("game_data.json"), KISILER = oku("kisiler.json"), ACILIS = oku("acilis.json");
const kopya = x => JSON.parse(JSON.stringify(x));
let hata = 0;
const k = (ad, ok, ayrinti) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad + (ok || !ayrinti ? "" : " — " + ayrinti)); if (!ok) hata++; };

const sessiz = game => {
  const satirlar = [], eski = console.log;
  console.log = (...a) => satirlar.push(a.join(" "));
  let ok;
  try { ok = dogrula(game, [], KISILER, ACILIS); } finally { console.log = eski; }
  return { ok, hatalar: satirlar.filter(s => s.trim().startsWith("✗")).map(s => s.trim()) };
};
// Bozma: kopya üstünde değiştir, doğrula; beklenen etiketli hata (ve varsa parça) çıkmalı, doğrulama durmalı.
const boz = (ad, etiket, parca, degistir) => {
  const g = kopya(G);
  const ayrinti = degistir(g);
  if (ayrinti === null) { k(ad + " — bozacak yer bulunamadı (veri değişti mi?)", false); return; }
  const r = sessiz(g);
  const tutan = r.hatalar.filter(h => h.includes(etiket) && (!parca || h.includes(parca)));
  k(`${ad}: ${etiket} durdurdu`, !r.ok && tutan.length > 0, r.ok ? "doğrulama GEÇTİ" : "başka hatalar: " + r.hatalar.slice(0, 2).join(" / "));
};

k("bozulmamış veri doğrulayıcıdan geçiyor (başlangıç noktası)", sessiz(G).ok);

const V = g => g.vakalar[0];

// K1: vakanın hiçbir yerinde geçmeyen bir kanon ismini, hiçbir olgu taşımadan bir ipucunun metnine sok.
boz("K1 isim sızıntısı (ipucu metni)", "[K1]", null, g => {
  const v = V(g), json = JSON.stringify(v);
  const isim = g.kanon.isimler.find(i => !i.endsWith("-YOK") && !json.includes(i));
  const c = v.clues.find(c => typeof c.text === "string");
  if (!isim || !c) return null;
  c.text += ` Bir de ${isim} vardı o gece.`;
});

// K2: bir çıkarım, tanımlı ama hiçbir ipucunun açmadığı bir olguya dayansın.
boz("K2 ulaşılamaz olgu (çıkarım)", "[K2]", "test_ulasilmaz", g => {
  const v = V(g);
  if (!(v.knowledge || []).length) return null;
  v.facts.test_ulasilmaz = "Hiçbir ipucunun açmadığı olgu.";
  v.knowledge[0].ifade = { all: [...(v.knowledge[0].ifade.all || []), "test_ulasilmaz"] };
});

// K3: iki ipucu birbirinin açtığı olguyu beklesin.
boz("K3 needs döngüsü", "[K3]", null, g => {
  const cs = V(g).clues.filter(c => (c.reveals || []).length);
  if (cs.length < 2) return null;
  const [a, b] = cs;
  a.needs = [b.reveals[0]]; b.needs = [a.reveals[0]];
});

// K4: truth bir anahtar için "AÇILMAZ" desin, bir ipucu aynı adlı olguyu açsın.
boz("K4 truth ihlali", "[K4]", "test_gizli", g => {
  const v = V(g);
  v.truth.test_gizli = "AÇILMAZ — bu vakada kimse öğrenmez.";
  v.facts.test_gizli = "Gizli kalması gereken olgu.";
  v.clues[0].reveals = [...(v.clues[0].reveals || []), "test_gizli"];
});

// K11: ilk vakanın bir olgusu ikinci vakada başka anlamla tanımlansın.
boz("K11 olgu adı iki vakada", "[K11]", null, g => {
  if (g.vakalar.length < 2) return null;
  const ad = Object.keys(V(g).facts)[0];
  g.vakalar[1].facts[ad] = "Aynı ad, başka anlam.";
});

// K14: bir ipucunun açtığı olgunun adı tek harf yanlış yazılsın.
boz("K14 tanımsız olgu (yazım hatası)", "[K14]", null, g => {
  const c = V(g).clues.find(c => (c.reveals || []).length);
  if (!c) return null;
  c.reveals = [c.reveals[0] + "x", ...c.reveals.slice(1)];
});

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== BOZUK VERİ TESTİ (yeni oyun) TAMAM ===");
process.exit(hata ? 1 : 0);
