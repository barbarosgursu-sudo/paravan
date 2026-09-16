const { dogrula } = require("./dogrulayici.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));

// Vaka 1'in derin kopyası üstünde 4 ayrı bozma yapıyoruz
const clone = () => JSON.parse(JSON.stringify(g));

console.log("\n########## TEST 2: NURCAN HATASI (K1) — İlyas ismi bir kaynağa sızıyor ##########");
let t2 = clone();
// komsu_ifadesi metnine, hiçbir needs/reveals olmadan "İlyas" sok
t2.vakalar[0].clues.find(c=>c.id==="komsu_ifadesi").text += " Komşu ekledi: 'İlyas'ı gördüm o gece.'";
dogrula(t2);

console.log("\n########## TEST 3: ULAŞILAMAZ BİLGİ (K2) — gate açılamayan olguya dayanıyor ##########");
let t3 = clone();
t3.vakalar[0].decisions.find(d=>d.id==="gizli_kaz").gate = "hayali_olgu";
dogrula(t3);

console.log("\n########## TEST 4: DÖNGÜ (K3) — iki clue birbirini bekliyor ##########");
let t4 = clone();
// polis_dosyasi ve olay_yeri birbirinin reveals'ine muhtaç olsun
t4.vakalar[0].clues.find(c=>c.id==="polis_dosyasi").needs = ["dusus_acisi"]; // olay_yeri açar
t4.vakalar[0].clues.find(c=>c.id==="olay_yeri").needs = ["polis_kaza"];      // polis_dosyasi açar
dogrula(t4);

console.log("\n########## TEST 5: TRUTH İHLALİ (K4) — 'AÇILMAZ' olan 'iten' reveals ediliyor ##########");
let t5 = clone();
t5.vakalar[0].facts["iten"] = "Kaya'yı iten kişi.";
t5.vakalar[0].clues.find(c=>c.id==="olay_yeri").reveals.push("iten");
dogrula(t5);

console.log("\n########## TEST 6: OLGU ÇAKIŞMASI (K11) — iki vakada aynı olgu adı ##########");
let t6 = clone();
// V1'in olgusunu V2'de de tanımla: kalıcı olgular taşındığı için aynı ad iki anlam taşıyamaz
t6.vakalar[1].facts["polis_kaza"] = "V2'de aynı adla başka bir şey";
dogrula(t6);

console.log("\n########## TEST 7: KOŞULLU METİNDE SIZINTI (K1) ##########");
let t7 = clone();
// Koşullu bir metnin VARSAYILAN varyantına, hiçbir needs/reveals taşımadan isim sok.
// Eskiden varyant dizisi "[object Object]" oluyordu ve K1 koşullu metni hiç görmüyordu.
t7.vakalar[0].clues.find(c => c.id === "komsu_ifadesi")
  .meta.find(v => v.kosul === "varsayilan").metin += " Sevil de oradaydı.";
dogrula(t7);
