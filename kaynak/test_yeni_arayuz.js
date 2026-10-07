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
const var_ = a => M.dosyalar[a] || (M.takma && M.dosyalar[M.takma[a]]);

console.log("=== Manifesto ↔ kanon.sahne ===");
const eksikKod = [...S.arkalar, ...S.kareler].filter(a => !M.dosyalar[a]);
k("her arka plan ve kare kodunun görseli var", !eksikKod.length, eksikKod.join(", "));
const eksikAd = S.arkalar.filter(a => !(M.arka[a] && M.arka[a].ad));
k("her arka planın mekân adı var (sahnenin sağ üstü)", !eksikAd.length, eksikAd.join(", "));
const eksikSprite = [];
for (const [kim, f] of Object.entries(S.figurler)) {
  if (f.setler) for (const [set, ifadeler] of Object.entries(f.setler))
    for (const i of ifadeler) { if (!var_(`${kim}.${set}.${i}`)) eksikSprite.push(`${kim}.${set}.${i}`); }
  else for (const i of f.ifadeler) if (!var_(`${kim}.${i}`)) eksikSprite.push(`${kim}.${i}`);
}
k("her figürün her ifadesinin sprite'ı ya da takması var", !eksikSprite.length, eksikSprite.join(", "));
const yokDosya = Object.entries(M.dosyalar).filter(([, d]) => !fs.existsSync(path.join(__dirname, "yeni_gorsel", d))).map(([a]) => a);
k("manifestodaki her dosya diskte", !yokDosya.length, yokDosya.join(", "));
const gecersizTakma = Object.entries(M.takma || {}).filter(([a, h]) => a !== "_not" && !M.dosyalar[h]).map(([a]) => a);
k("her takma gerçek bir sprite'a gidiyor", !gecersizTakma.length, gecersizTakma.join(", "));
const yetim = [...(M.genis || []), ...(M.tam || [])].filter(a => !M.dosyalar[a]);
k("geniş/tam listesindeki her anahtar manifestoda", !yetim.length, yetim.join(", "));
// İlişki: kanonda olmayan ama manifestoda duran figür sprite'ı yanlış yazılmış bir ad demektir.
const bilinmeyenFigur = Object.keys(M.dosyalar).filter(a => a.includes(".") && !S.figurler[a.split(".")[0]]);
k("manifestodaki her sprite kanondaki bir figüre ait", !bilinmeyenFigur.length, bilinmeyenFigur.join(", "));

// Vurgu (konuşulan nesnenin aydınlanması): her satırın vurgusu, o an ekrandaki arka
// planda tanımlı bir nesne olmalı. Yanlış adda vurgu JS hatası vermez, sessizce yanmaz.
{
  const A = JSON.parse(oku("yeni/acilis.json"));
  const sahneler = [...A.sahneler, ...G.vakalar.flatMap(v => [...Object.values(v.sahneler || {}), ...(v.clues || []).map(c => c.sahne).filter(Boolean)])];
  const hatali = [];
  let toplam = 0;
  const yuru = (satirlar, arka) => { for (const s of satirlar) {
    if (s.arka) arka = s.arka;
    if (s.vurgu) { toplam++; if (!((M.vurgular || {})[arka] || {})[s.vurgu]) hatali.push(`${arka}/${s.vurgu}`); }
    for (const sec of s.secenekler || []) yuru(sec.satirlar || [], arka);
  } };
  for (const sh of sahneler) yuru(sh.satirlar || [], sh.arka);
  k(`her vurgu o anki arka planda tanımlı (${toplam} satır)`, !hatali.length, hatali.join(", "));
}

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
for (const f of ["prologGoster", "vakaAc", "kaynakAcFaz", "kararFazi", "kararVerFaz", "sonEkrani", "kasaSerit"]) {
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

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nHepsi geçti.");
process.exit(hata ? 1 : 0);
