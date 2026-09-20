/* ZİNCİR DEFTERİ (delil tahtası) — Nurcan sınaması

   Tahta, künyeden sonraki ÜÇÜNCÜ Nurcan yüzeyi ve en genişi: bir vakanın
   bütün olgularını, çıkarımlarını ve türetme ağacını tek ekranda basıyor.
   Künye uzun süre denetimsiz kaldığı için iki sızıntı barındırmıştı; tahta
   çok daha fazla veri gösterdiğinden aynı hikâyeyi tekrarlamaya müsait.

   Sorduğum asıl soru: "hangi durumu denemiyorum?" Dördü var:
     1. Oyuncunun sahip OLMADIĞI bir olgunun metni ekrana düşebilir.
     2. 'ya biri' dalında TUTMAYAN alternatif çizilebilir — bu, sahip
        olunmayan bir olgunun adını söylemektir.
     3. Başlıksız bir çıkarım ham kimliğe ("cinayet_suphesi") düşebilir.
     4. Motorun türettiği bir çıkarımı tahta sessizce atlayabilir
        (arayüz/motor ayrışması — bu depoda tekrar tekrar ısırdı).

   Tahta fonksiyonları üretilen sayfanın içinde yaşıyor; buraya kaynaktan
   çıkarılıp VM'de GERÇEK oyun durumuyla çalıştırılıyor. Statik regex değil,
   davranış sınanıyor. */
const vm = require("vm");
const fs = require("fs");
const { Oyun, ifadeCalistir } = require("./motor.js");

const GAME = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
const ui = fs.readFileSync("build_html.js", "utf-8");

let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? "\n     " + ek : "")); if (!ok) hata++; };

/* --- tahta fonksiyonlarını sayfadan çıkar ---------------------------------
   Sayfa tek bir JS şablon dizgisi; içindeki ` ve ${ kaçışlı. Geri açıyoruz. */
const bas = ui.indexOf("let _tahtaSozlukCache");
const son = ui.indexOf("function defterZincir(");
if (bas < 0 || son < 0 || son < bas) { console.log("✗ tahta kodu bulunamadı"); process.exit(1); }
const kod = ui.slice(bas, son).replace(/\\`/g, "`").replace(/\\\$\{/g, "${");

function tahtaKur(oyun) {
  const kutu = { GAME, oyun, ifadeCalistir, console };
  vm.createContext(kutu);
  vm.runInContext(kod, kutu);
  return kutu;
}

/* --- gerçek oyun durumu üret ---------------------------------------------- */
function oyunKur(acilacak) {
  const o = new Oyun(GAME);
  o.durum.para = 9000000;
  o.vakaBaslat("V1");
  o.durum.aktif.arastirmaKalan = 99;
  for (let t = 0; t < 6; t++)
    for (const c of o.acikKaynaklar())
      if (!acilacak || acilacak.includes(c.id)) { try { o.kaynakAc(c.id); } catch (e) {} }
  return o;
}

const V1 = GAME.vakalar.find(v => v.id === "V1");

/* 1 — HAK EDİLMEMİŞ OLGU METNİ EKRANA DÜŞMEZ ------------------------------- */
{
  // Sadece olay yerini aç: Ceyda ve komşu ifadesi alınmamış olsun.
  const o = oyunKur(["olay_yeri"]);
  const bilinen = o.tumBilinen();
  const html = tahtaKur(o).tahtaVaka(V1, bilinen);
  const disarida = Object.keys(V1.facts).filter(f => !bilinen.has(f));
  const sizan = disarida.filter(f => html.includes(V1.facts[f]));
  k("hak edilmemiş olgu metni tahtaya düşmüyor", sizan.length === 0,
    sizan.length ? "sızan: " + sizan.join(", ") : "denetlenen olgu: " + disarida.length);
}

/* 2 — 'YA BİRİ' DALINDA YALNIZ TUTAN ALTERNATİF ÇİZİLİR --------------------
   cinayet_suphesi = dusus_acisi + (ceyda_celiski | komsu_ses).
   Komşu ifadesini almadan, Ceyda yoluyla çıkarıma ulaş: komşunun sesi
   tahtada GÖRÜNMEMELİ. */
{
  const o = oyunKur(["olay_yeri", "ceyda_gorusme"]);
  const bilinen = o.tumBilinen();
  const ulasti = bilinen.has("cinayet_suphesi");
  const html = tahtaKur(o).tahtaVaka(V1, bilinen);
  k("kurulum: çıkarıma Ceyda yolundan ulaşıldı", ulasti && !bilinen.has("komsu_ses"));
  k("tutmayan 'ya biri' dalı çizilmiyor", !html.includes(V1.facts.komsu_ses),
    "komşu ifadesi alınmadı; metni tahtada olmamalı");
  k("tutan dal çiziliyor", html.includes(GAME.vakalar[0].knowledge.find(x => x.turetilen === "ceyda_celiski").baslik));
}

/* 3 — HAM KİMLİK EKRANA DÜŞMEZ --------------------------------------------- */
{
  const o = oyunKur();
  const bilinen = o.tumBilinen();
  const html = tahtaKur(o).tahtaVaka(V1, bilinen);
  const kimlikler = (V1.knowledge || []).map(x => x.turetilen).concat(Object.keys(V1.facts));
  const gorunen = kimlikler.filter(id => html.includes(">" + id) || html.includes(id + "<"));
  k("ham olgu/çıkarım kimliği ekrana düşmüyor", gorunen.length === 0,
    gorunen.length ? "görünen: " + gorunen.join(", ") : "");
}

/* 4 — MOTORUN TÜRETTİĞİ HER ÇIKARIM TAHTADA KARŞILIK BULUYOR ---------------
   Arayüz/motor ayrışması bu depoda sessizdir; eşleme test ile kilitlenir. */
{
  let eksikBaslik = [], basilmayan = [];
  for (const v of GAME.vakalar) {
    for (const kn of v.knowledge || []) {
      if (typeof kn.baslik !== "string" || !kn.baslik.trim()) eksikBaslik.push(v.id + "/" + kn.turetilen);
    }
  }
  k("her çıkarımın başlığı var", eksikBaslik.length === 0, eksikBaslik.join(", "));

  // Her çıkarımı tek tek "ulaşılmış" varsayıp tahtanın onu bastığını doğrula.
  const o = oyunKur();
  const kutu = tahtaKur(o);
  for (const v of GAME.vakalar) {
    for (const kn of v.knowledge || []) {
      const sahte = new Set([kn.turetilen]);
      const html = kutu.tahtaVaka(v, sahte);
      if (!html.includes(kn.baslik)) basilmayan.push(v.id + "/" + kn.turetilen);
    }
  }
  k("tahta hiçbir çıkarımı sessizce atlamıyor", basilmayan.length === 0, basilmayan.join(", "));
}

/* 5 — BOŞ DURUM: hiçbir şey açılmamışken tahta olgu sızdırmaz -------------- */
{
  const o = new Oyun(GAME);
  o.durum.para = 9000000;
  o.vakaBaslat("V1");
  const bilinen = o.tumBilinen();
  const html = tahtaKur(o).tahtaVaka(V1, bilinen);
  const sizan = Object.keys(V1.facts).filter(f => html.includes(V1.facts[f]));
  k("açılmamış vakada hiçbir olgu metni yok", sizan.length === 0, sizan.join(", "));
}

console.log(hata ? `\n${hata} BAŞARISIZ` : "\nTÜMÜ GEÇTİ");
process.exit(hata ? 1 : 0);
