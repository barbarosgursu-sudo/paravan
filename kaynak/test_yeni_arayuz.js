// YENİ OYUN — konuşma ekranının veri/görsel/derleyici eşlemesi.
// Arayüz/veri ayrışması bu depoda sessizdir: eksik sprite JS hatası vermez, figür
// eski ifadede kalır; eksik arka plan boş ekran olur; derleyicinin yerleştirme
// noktası kayarsa yeni kip ya durur ya da eki yanlış yere koyar. Bu test üçünü eşler.
// Derleme YAPMAZ (dosya yazmaz); yalnız kaynakları okur.
const fs = require("fs");
const path = require("path");
const oku = f => fs.readFileSync(path.join(__dirname, f), "utf-8");
const G = JSON.parse(oku("yeni/game_data.json"));
const M = JSON.parse(oku("yeni/gorseller.json"));
const S = G.kanon.sahne;

let hata = 0;
const k = (ad, ok, ayrinti) => { console.log((ok ? "✓ " : "✗ BAŞARISIZ ") + ad + (ok || !ayrinti ? "" : " — " + ayrinti)); if (!ok) hata++; };
const var_ = a => M.dosyalar[a] || (M.takma && M.dosyalar[M.takma[a]]) || (M.yer_tutucu || []).includes(a);

console.log("=== Manifesto ↔ kanon.sahne ===");
// Görselsiz testte (şablon 7. parça adım 5) arka plan ve kare de yer tutucu olabilir; o zaman
// ekranda ne göstereceği yazılı olmalı, yoksa gri alan boş kalır.
const eksikKod = [...S.arkalar, ...S.kareler].filter(a => !M.dosyalar[a] && !(M.yer_tutucu || []).includes(a));
k("her arka plan ve kare kodunun görseli ya da yer tutucusu var", !eksikKod.length, eksikKod.join(", "));
const metinsizYT = [...S.arkalar, ...S.kareler].filter(a => !M.dosyalar[a] && !(M.yer_tutucu_metin || {})[a]);
k("yer tutucu arka plan ve karelerin açıklaması var", !metinsizYT.length, metinsizYT.join(", "));
const eksikAd = S.arkalar.filter(a => !(M.arka[a] && M.arka[a].ad));
k("her arka planın mekân adı var (sahnenin sağ üstü)", !eksikAd.length, eksikAd.join(", "));
const eksikSprite = [];
for (const [kim, f] of Object.entries(S.figurler)) {
  // Cengo'da ikisi birden var: düz ifadeler (Vaka 1) + kıyafet setleri (Vaka 2'den itibaren).
  if (f.setler) for (const [set, ifadeler] of Object.entries(f.setler))
    for (const i of ifadeler) { if (!var_(`${kim}.${set}.${i}`)) eksikSprite.push(`${kim}.${set}.${i}`); }
  if (f.ifadeler) for (const i of f.ifadeler) if (!var_(`${kim}.${i}`)) eksikSprite.push(`${kim}.${i}`);
}
k("her figürün her ifadesinin sprite'ı, takması ya da yer tutucusu var", !eksikSprite.length, eksikSprite.join(", "));
const yokDosya = Object.entries(M.dosyalar).filter(([, d]) => !fs.existsSync(path.join(__dirname, "yeni_gorsel", d))).map(([a]) => a);
k("manifestodaki her dosya diskte", !yokDosya.length, yokDosya.join(", "));
// Görsel gelince yer tutucu listeden silinmeli; ikisinde birden duran anahtar unutulmuş bir satırdır.
const bayatYT = (M.yer_tutucu || []).filter(a => M.dosyalar[a]);
k("yer tutucu listesinde görseli gelmiş anahtar yok", !bayatYT.length, bayatYT.join(", "));
const gecersizTakma = Object.entries(M.takma || {}).filter(([a, h]) => a !== "_not" && !M.dosyalar[h]).map(([a]) => a);
k("her takma gerçek bir sprite'a gidiyor", !gecersizTakma.length, gecersizTakma.join(", "));
const yetim = [...(M.genis || []), ...(M.tam || [])].filter(a => !M.dosyalar[a]);
k("geniş/tam listesindeki her anahtar manifestoda", !yetim.length, yetim.join(", "));
// İlişki: kanonda olmayan ama manifestoda duran figür sprite'ı yanlış yazılmış bir ad demektir.
const bilinmeyenFigur = Object.keys(M.dosyalar).filter(a => a.includes(".") && !S.figurler[a.split(".")[0]]);
k("manifestodaki her sprite kanondaki bir figüre ait", !bilinmeyenFigur.length, bilinmeyenFigur.join(", "));

console.log("\n=== Derleyici ↔ yeni_arayuz ===");
const build = oku("build_html.js");
// Yerleştirme dizgileri derleyicinin ek kodunda da geçiyor; tek olması gereken yer ŞABLON.
const sablon = build.slice(build.indexOf("const html = `"), build.indexOf("</html>`;"));
const arayuz = oku("yeni_arayuz.js");
// Yeni kip eki bu dizgileri birebir arıyor; eski şablonda değişirlerse derleme durur.
// Burada önceden yakalamak için aynı dizgilerin şablonda TEK kez geçtiğini sınıyoruz.
for (const [ad, dizgi] of [
  ["başlık", "<title>Paravan Dedektiflik — Pilot Sezon</title>"],
  ["kayıt anahtarı", 'const KAYIT_ANAHTAR = "paravan_kayit_v1";'],
  ["ses klasörü", 'const SES_KLASOR  = "ses/";'],
  ["betik sonu", "\nbaslat();\n</script>"],
]) k(`şablonda '${ad}' yerleştirme noktası tek`, sablon.split(dizgi).length === 2);
// Sarmalanan fonksiyonlar eski arayüzde tanımlı olmalı; adı değişirse sarma sessizce
// yeni bir global yaratır ve eski fonksiyon çalışmaya devam eder.
for (const f of ["prologGoster", "vakaAc", "kaynakAcFaz", "kararFazi", "kararVerFaz", "sonEkrani", "kasaSerit", "arastirmaFazi", "cengoGosterge", "defterZincir"]) {
  k(`'${f}' eski arayüzde tanımlı ve yeni arayüzde sarılıyor`,
    new RegExp("function " + f + "\\(").test(build) && new RegExp("^" + f + " = function", "m").test(arayuz));
}
for (const f of ["defterNotu", "hesapKutusu", "cengoGosterge", "ust", "tl", "kayitYaz", "efektCal", "arastirmaFazi", "masaGoster", "krizRozetleri"]) {
  k(`yeni arayüzün çağırdığı '${f}' eski arayüzde var`, new RegExp("function " + f + "\\(").test(build));
}

// Batma uyarısı temizliği eski karar ekranının sınıf adlarına dayanıyor; adlar
// değişirse temizlik sessizce hiçbir şey bulmaz ve uyarılar geri gelir.
for (const sinif of ['class="sonuc \\${sinif}"', 'class="kalan \\${sinif}"', '"yeni iş gelmezse batarsın"'])
  k(`eski karar ekranı hâlâ ${sinif} üretiyor (yeni arayüz onu temizliyor)`, build.includes(sinif));

console.log("\n=== Anı defteri ===");
{
  // Biten her vakanın Anı kaydında hatırlatma durur; yoksa kayıt yalnız Peri'nin tek satırına düşer.
  const KJ = JSON.parse(oku("yeni/kisiler.json"));
  const eksik = G.vakalar.filter(v => v.kim_yapti && !((KJ.ani_ozet || {})[v.id] || "").trim()).map(v => v.id);
  k("Kim yaptı?'lı her vakanın anı hatırlatması var (kisiler.json → ani_ozet)", !eksik.length, eksik.join(", "));
  const yetimOzet = Object.keys(KJ.ani_ozet || {}).filter(id => id !== "_not" && !G.vakalar.some(v => v.id === id));
  k("ani_ozet'te olmayan vaka yok", !yetimOzet.length, yetimOzet.join(", "));
  k("'defterAni' eski arayüzde tanımlı ve yeni arayüzde sarılıyor",
    /function defterAni\(/.test(build) && /^defterAni = function/m.test(arayuz));
}

console.log("\n=== Paylaş (davet kartı) ===");
{
  // Kartın kapağı olmayan vaka "Arkadaşına öner" düğmesini sessizce kaybeder. Kapak bir ARKA PLAN
  // olmalı ve vakanın ipucu sahnelerinde geçmeli: oyuncunun araştırırken gezdiği bir yer. Yüzleşme,
  // kovalamaca, kapanış ve K kareleri (yakalama, itiraf) kart için yasak — arkadaş oynamadı (Nurcan).
  for (const v of G.vakalar.filter(v => v.tur === "omurga")) {
    const kod = (M.kapak || {})[v.id];
    const ipucuArka = new Set((v.clues || []).map(c => c.sahne && c.sahne.arka).filter(Boolean));
    k(`${v.id}: kapak var, gömülü ve ipucu sahnelerinde geçen bir arka plan (gorseller.json → kapak)`,
      !!kod && !!M.dosyalar[kod] && ipucuArka.has(kod), kod ? `${kod} — ipucu arkaları: ${[...ipucuArka].join(" ")}` : "kapak yok");
    k(`${v.id}: girişin varsayılan metni var (kartın cümlesi)`,
      !!(v.giris || []).some(g => g.kosul === "varsayilan" && g.metin));
  }
  k("paylaşım yalnız biten vakada (paylasilabilir → tamamlanan)",
    /function paylasilabilir\(vid\)\{\s*return oyun\.durum\.tamamlanan\.includes\(vid\)/.test(arayuz));
  // Kart çizimi suçlu, karar, suçlama, kasa ya da Peri'nin notunu okumamalı.
  const ciz = (arayuz.match(/async function paylasKartCiz[\s\S]*?\n\}\n/) || [""])[0] + (arayuz.match(/function paylasMetin[\s\S]*?\n\}\n/) || [""])[0];
  const yasak = ["kim_yapti", "_karar_", "_suclama_", "decisions", "defterNotu", "ani_ozet", "seeds", "para"].filter(x => ciz.includes(x));
  k("kart ve paylaşım metni suçlu/karar/kasa/not okumuyor", ciz.length > 200 && !yasak.length, yasak.join(", "));
}

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nHepsi geçti.");
process.exit(hata ? 1 : 0);
