const fs = require("fs");
// Gömme verilerini HER derlemede kaynak dosyalardan TAZE üret (bayat veri hatası olmasın)
{
  const g = JSON.parse(fs.readFileSync("game_data.json","utf-8"));
  const kj = JSON.parse(fs.readFileSync("kisiler.json","utf-8"));
  const pj = JSON.parse(fs.readFileSync("prolog.json","utf-8"));
  const motorKaynak = fs.readFileSync("motor.js","utf-8").replace(/module\.exports.*$/m,"");
  fs.writeFileSync("_gomulu_motor.js", motorKaynak);
  fs.writeFileSync("_gomulu_veri.js",
    "const GAME="+JSON.stringify(g)+";const KISILER="+JSON.stringify(kj)+";const PROLOG="+JSON.stringify(pj.prolog)+";");
}
const motor = fs.readFileSync("_gomulu_motor.js","utf-8");
const veri  = fs.readFileSync("_gomulu_veri.js","utf-8");
const gorselveri = fs.readFileSync("_gomulu_gorseller.js","utf-8");

const html = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Paravan Dedektiflik — Pilot Sezon</title>
<style>
/* ===== PARLAMENT MAVİSİ NOIR PALETİ ===== */
:root{
  --zemin1:#1B3A5B; --zemin2:#132A42; --panel:#21456A;
  --panel2:#2A5078; --cizgi:#3A6089;
  --metin:#E6EDF3; --sonuk:#9FB4C7; --duman:#7E97AD;
  --kehribar:#E0A45C; --altin:#C9A86A; --kirmizi:#C25B52; --koz:#F0C27B;
  --yesil:#7FA88C;
}
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%}
body{
  background:linear-gradient(165deg,#1B3A5B 0%,#0F2338 100%);
  background-attachment:fixed;
  color:var(--metin);
  font-family:Georgia,'Times New Roman',serif;
  line-height:1.65;-webkit-font-smoothing:antialiased;
}
#app{max-width:520px;margin:0 auto;min-height:100vh;padding-bottom:40px;position:relative}

/* ===== ÜST ŞERİT ===== */
.ust{position:sticky;top:0;z-index:20;background:rgba(15,35,56,.94);
  backdrop-filter:blur(10px);border-bottom:1px solid var(--cizgi);
  padding:12px 18px;display:flex;justify-content:space-between;align-items:center}
.marka{font-size:15px;letter-spacing:3px;color:var(--altin);font-weight:bold}
.marka small{display:block;font-size:8.5px;letter-spacing:4px;color:var(--duman);font-weight:normal}
.ust-butonlar{display:flex;gap:8px}
.ust-btn{background:var(--panel);border:1px solid var(--cizgi);color:var(--sonuk);
  min-height:40px;display:inline-flex;align-items:center;
  border-radius:20px;padding:6px 13px;font-family:inherit;font-size:12px;cursor:pointer;
  display:flex;align-items:center;gap:5px;transition:all .15s}
.ust-btn:hover{border-color:var(--kehribar);color:var(--metin)}
.ust-btn .n{background:var(--kehribar);color:#12263a;border-radius:10px;
  font-size:10px;padding:0 5px;font-weight:bold}

/* ===== FAZ KABI ===== */
.faz{padding:0 0 20px;animation:fade .35s ease}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

.baslik{padding:28px 24px 6px}
.baslik .no{font-size:10.5px;letter-spacing:3px;color:var(--kirmizi);text-transform:uppercase}
.baslik h1{font-size:27px;color:var(--metin);font-weight:normal;margin-top:5px;letter-spacing:.5px}

.giris-metin{padding:14px 24px 8px;font-size:16px;color:var(--metin)}
.anlati-italik{font-style:italic;color:var(--sonuk)}

/* buton (faz ilerletme) */
.buton{display:block;width:calc(100% - 48px);margin:22px 24px 0;padding:16px;
  text-align:center;background:var(--kehribar);color:#12263a;border:none;border-radius:5px;
  font-family:inherit;font-size:14px;letter-spacing:2px;font-weight:bold;cursor:pointer;text-transform:uppercase}
.buton:hover{background:var(--koz)}
.buton.ikincil{background:transparent;color:var(--sonuk);border:1px solid var(--cizgi)}
.buton.ikincil:hover{border-color:var(--kehribar);color:var(--metin)}

/* ===== GÖRSEL YER TUTUCU ===== */
.gorsel-cerceve{margin:14px 24px;border:1px solid var(--cizgi);border-radius:5px;overflow:hidden;line-height:0;box-shadow:0 4px 20px rgba(0,0,0,.4)}
.gorsel-cerceve img{width:100%;height:auto;display:block}
.gorsel-cerceve.portre{max-width:280px;margin:14px auto;border-radius:6px}
.gorsel-cerceve.kanit{border-color:var(--kehribar)}
.gorsel-cerceve.giris-gorsel{margin:0 0 4px;border-radius:0;border-left:none;border-right:none;border-top:none}
/* Ruh bandı karar ekranının en üstünde duruyor. Vaka girişinde tam boy
   görsel doğru — orası sahnenin açılışı. Kırk karar ekranında aynı boy
   ekranı yutar ve sonuç metnini aşağı iter. Görseller yine dikey üretiliyor
   (tek üretim hattı), burada kırpılarak gösteriliyor. */
.gorsel-cerceve.ruh-bant img{max-height:34vh;object-fit:cover;object-position:center 40%}
.gorsel{margin:14px 24px;border:1px solid var(--cizgi);border-radius:4px;
  background:linear-gradient(135deg,#24547e,#16304a);
  aspect-ratio:3/2;display:flex;flex-direction:column;align-items:center;justify-content:center;
  color:var(--duman);text-align:center;padding:18px}
.gorsel::before{content:'◈';font-size:30px;color:var(--kul,#4d7ca6);margin-bottom:10px;opacity:.6}
.gorsel .yt{font-style:italic;font-size:12px;max-width:82%;color:var(--sonuk)}
.gorsel.portre{aspect-ratio:1/1;max-width:140px;margin:14px auto}
.gorsel.kanit{border-color:var(--kehribar);border-style:dashed}

/* ===== ARAŞTIRMA FAZI ===== */
.faz-etiket{padding:20px 24px 4px;display:flex;justify-content:space-between;align-items:center}
.kasa-serit{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;
  padding:9px 24px;background:rgba(15,35,56,.6);border-bottom:1px solid var(--cizgi);
  font-size:12.5px;letter-spacing:.4px}
.kasa-serit .tutar{color:var(--altin);font-weight:bold;font-size:14px}
.kasa-serit .hal{color:var(--duman);font-style:italic}
.kasa-serit .hal.kritik{color:var(--kirmizi);font-style:normal}
.kasa-serit .hal.batik{color:var(--kirmizi);font-weight:bold;font-style:normal}
.kasa-serit .borc{color:var(--kirmizi)}
.gider-uyari{margin:14px 24px 4px;padding:12px 14px;border:1px solid var(--kirmizi);
  border-radius:4px;background:rgba(194,91,82,.10)}
.gider-uyari .ust-satir{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
.gider-uyari .et{font-size:11.5px;letter-spacing:2px;text-transform:uppercase;color:var(--kirmizi)}
.gider-uyari .tutar{font-size:22px;color:var(--kirmizi);font-weight:bold;letter-spacing:.3px}
.gider-uyari .dokum{display:flex;flex-wrap:wrap;gap:4px 14px;margin-top:7px;
  padding-top:7px;border-top:1px solid rgba(194,91,82,.28);font-size:12px;color:var(--duman)}
.gider-uyari .dokum b{color:var(--sonuk);font-weight:normal}
.karar .bedel{display:flex;align-items:baseline;gap:9px;margin-top:8px;
  padding-top:8px;border-top:1px solid var(--cizgi);flex-wrap:wrap}
.karar .bedel .etiket{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--duman)}
.karar .bedel .ok{color:var(--duman);font-size:14px}
.karar .bedel b{font-size:16px;letter-spacing:.3px}
.karar .bedel b.kazanc{color:var(--altin)}
.karar .bedel b.yok{color:var(--kirmizi)}
.karar .bedel .kalan{font-size:13px;color:var(--sonuk)}
.karar .bedel .kalan.dar{color:var(--koz)}
.karar .bedel .kalan.kotu{color:var(--kirmizi)}
.karar .bedel .borc-onizleme{font-size:13px;color:var(--kirmizi);font-weight:600}
.itibar-kutu{margin:0 0 12px;padding:9px 12px;border-left:3px solid var(--duman);
  background:rgba(255,255,255,.03);border-radius:0 6px 6px 0;font-size:12.5px;
  color:var(--sonuk);line-height:1.5}
.itibar-kutu .dusuk{color:var(--kirmizi);font-weight:700}
.itibar-kutu .yuksek{color:var(--altin);font-weight:700}
.kriz-kutu{margin:12px 0 0;padding:11px 13px;border:1px solid var(--kirmizi);border-radius:7px;
  background:rgba(150,40,40,.12)}
.kriz-kutu .b{font-size:14px;font-weight:700;color:var(--kirmizi);letter-spacing:.3px}
.kriz-kutu .a{font-size:13px;color:var(--sonuk);margin-top:4px;line-height:1.45}
.kriz-rozetler{display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;width:100%}
.kriz-rozet{font-size:10.5px;letter-spacing:.4px;color:var(--kirmizi);border:1px solid var(--kirmizi);
  border-radius:4px;padding:1px 5px;white-space:nowrap}
.kriz-satir{font-size:12.5px;color:var(--kirmizi);margin:-2px 0 10px;font-style:italic}
.sonuc-kutu .cengo-alacak{margin-top:9px;padding-top:9px;border-top:1px solid rgba(255,255,255,.12);font-size:13.5px;color:var(--sonuk);line-height:1.5}
.sonuc-kutu .cengo-alacak b{color:var(--kirmizi)}
.hesap .satir.odenmedi b{color:var(--kirmizi)}
.hesap .satir .acik{display:block;font-size:11px;color:var(--kirmizi);font-style:normal;margin-top:2px}
.karar .bedel .sonuc{font-size:13px;font-style:italic}
.karar .bedel .sonuc.iyi{color:var(--sonuk)}
.karar .bedel .sonuc.dar{color:var(--koz)}
.karar .bedel .sonuc.kotu{color:var(--kirmizi);font-style:normal;font-weight:bold}
.kaynak .ucret{color:var(--altin);font-size:11.5px;margin-left:6px}
.hesap{margin:16px 24px 0;padding:12px 14px;border:1px solid var(--cizgi);
  background:rgba(33,69,106,.35);border-radius:4px;font-size:13px}
.hesap .satir{display:flex;justify-content:space-between;padding:2px 0;color:var(--sonuk)}
.hesap .satir.gelir b{color:var(--yesil)}
.hesap .satir.gider b{color:var(--kirmizi)}
.hesap .ayrac{border-top:1px solid var(--cizgi);margin:7px 0}
.hesap .sonuc-satir{display:flex;justify-content:space-between;color:var(--metin);font-weight:bold}
.kaynak.yetersiz{opacity:.45}
.kaynak.yetersiz .tur{color:var(--kirmizi);font-style:italic}
.kaynak-uyari{margin:8px 24px 0;padding:9px 12px;border-left:2px solid var(--kirmizi);
  background:rgba(194,91,82,.09);color:var(--koz);font-size:13px;border-radius:0 4px 4px 0}
.faz-etiket .t{font-size:11px;letter-spacing:2px;color:var(--duman);text-transform:uppercase}
.arastirma-puan{display:inline-flex;gap:5px}
.arastirma-puan .p{width:9px;height:9px;border-radius:50%;background:var(--kehribar)}
.arastirma-puan .p.bos{background:var(--cizgi)}

.kaynak{margin:9px 24px;padding:15px 16px;background:var(--panel);
  border:1px solid var(--cizgi);border-radius:5px;cursor:pointer;
  display:flex;align-items:center;gap:13px;transition:all .15s}
.kaynak:hover{background:var(--panel2);border-color:var(--kehribar);transform:translateX(3px)}
.kaynak .ico{font-size:19px;color:var(--kehribar);flex-shrink:0}
.kaynak .ad{flex:1;font-size:14.5px}
.kaynak .tur{font-size:10px;color:var(--duman);letter-spacing:1px}
.kaynak.bedelsiz .ad::after{content:' · bedava';font-size:10px;color:var(--altin);font-style:italic}

/* açılan kaynak = tek ekran (faz) */
.kanit-ekran{padding:8px 0}
.kanit-metin{margin:14px 24px;padding:16px 18px;background:rgba(224,164,92,.08);
  border-left:3px solid var(--kehribar);border-radius:0 5px 5px 0;font-size:15.5px}
.kanit-metin .meta{display:block;margin-top:10px;color:var(--sonuk);font-style:italic;font-size:13.5px}

/* ===== KARAR FAZI ===== */
.karar{margin:11px 24px;padding:17px;background:linear-gradient(135deg,var(--panel2),var(--panel));
  border:1px solid var(--kehribar);border-radius:5px;cursor:pointer;transition:all .15s}
.karar:hover{box-shadow:0 0 0 1px var(--kehribar);transform:translateY(-1px)}
.karar .et{font-size:15px;color:var(--metin);font-weight:bold}
.uyari{padding:6px 24px 0;font-size:12px;color:var(--kirmizi);letter-spacing:1px;font-style:italic}

/* ===== SONUÇ ===== */
.sonuc-kutu{margin:22px 24px;padding:20px;background:var(--panel);
  border:1px solid var(--kehribar);border-radius:5px}
.sonuc-kutu h3{font-size:11px;letter-spacing:2px;color:var(--kehribar);
  text-transform:uppercase;margin-bottom:10px;font-weight:normal}
.sonuc-kutu p{font-size:15.5px}
.defter-not{margin:14px 24px;padding:16px 18px;background:rgba(201,168,106,.06);
  border-left:3px solid var(--altin);border-radius:0 5px 5px 0;font-style:italic;color:var(--sonuk);font-size:14.5px}
.defter-not::before{content:'— Peri, anı defterinden';display:block;font-size:10px;
  letter-spacing:2px;color:var(--duman);margin-bottom:8px;font-style:normal;text-transform:uppercase}

/* ===== MASA ===== */
.masa-baslik{padding:34px 24px 12px;text-align:center}
.masa-baslik .b{font-size:22px;color:var(--altin);letter-spacing:1px}
.masa-baslik .alt{font-size:12.5px;color:var(--duman);letter-spacing:2px;margin-top:6px}
.dosya-afis{position:relative;margin:14px 24px;height:190px;border-radius:8px;overflow:hidden;
  cursor:pointer;border:1px solid var(--cizgi);background-size:cover;background-position:center;
  transition:all .2s;box-shadow:0 6px 24px rgba(0,0,0,.45);display:flex;align-items:flex-end}
.dosya-afis:hover{transform:translateY(-2px);border-color:var(--kehribar);box-shadow:0 8px 30px rgba(0,0,0,.6)}
.dosya-afis.omurga{border-left:3px solid var(--kirmizi)}
.dosya-afis.yan{border-left:3px solid var(--altin)}
.dosya-afis.gorselsiz{background:linear-gradient(135deg,var(--panel2),var(--panel))}
.afis-alt{padding:16px 18px;width:100%}
.afis-alt .tip{font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:3px}
.dosya-afis.omurga .tip{color:var(--kirmizi)}
.dosya-afis.yan .tip{color:var(--koz)}
.afis-alt h2{font-size:23px;font-weight:normal;color:#fff;margin:0;text-shadow:0 2px 8px rgba(0,0,0,.8);letter-spacing:.5px}
.afis-alt .ipu{font-size:12.5px;color:#d8dce0;margin-top:4px;font-style:italic;text-shadow:0 1px 4px rgba(0,0,0,.9)}
.dosya{margin:12px 24px;padding:19px;background:var(--panel);border:1px solid var(--cizgi);
  border-radius:5px;cursor:pointer;transition:all .15s}
.dosya:hover{border-color:var(--kehribar);background:var(--panel2);transform:translateY(-1px)}
.dosya .tip{font-size:10px;letter-spacing:2px;text-transform:uppercase}
.dosya.omurga .tip{color:var(--kirmizi)}
.dosya.yan .tip{color:var(--altin)}
.dosya h2{font-size:20px;font-weight:normal;margin-top:5px;color:var(--metin)}
.dosya .ipu{font-size:12.5px;color:var(--sonuk);margin-top:5px;font-style:italic}

/* ===== KİŞİLER / DEFTER PANELLERİ ===== */
.panel-ekran{padding:20px 0}
.panel-baslik{padding:8px 24px 16px;font-size:20px;color:var(--altin);letter-spacing:1px}
.kisi-kart{margin:10px 24px;padding:14px;background:var(--panel);border:1px solid var(--cizgi);
  border-radius:5px;display:flex;gap:14px;align-items:flex-start}
.kisi-portre img{width:100%;height:100%;object-fit:cover;border-radius:4px}
.kisi-portre{width:60px;height:60px;border-radius:4px;flex-shrink:0;overflow:hidden;
  background:linear-gradient(135deg,#24547e,#16304a);border:1px solid var(--cizgi);
  display:flex;align-items:center;justify-content:center;color:var(--duman);font-size:22px}
.kisi-bilgi .ad{font-size:15px;color:var(--metin);font-weight:bold}
.kisi-bilgi .tanim{font-size:13px;color:var(--sonuk);margin-top:3px}
.defter-kayit{margin:10px 24px;padding:15px 18px;background:var(--panel);
  border-left:3px solid var(--altin);border-radius:0 5px 5px 0}
.defter-kayit .v{font-size:10.5px;letter-spacing:2px;color:var(--duman);text-transform:uppercase;margin-bottom:6px}
.defter-kayit .n{font-size:14.5px;font-style:italic;color:var(--metin)}
.bos-panel{padding:40px 24px;text-align:center;color:var(--duman);font-style:italic}

.prolog-nokta{display:flex;gap:7px;justify-content:center;padding:22px 0 4px}
.prolog-nokta span{width:7px;height:7px;border-radius:50%;background:var(--cizgi)}
.prolog-nokta span.aktif{background:var(--kehribar);width:20px;border-radius:4px}
.dev-btn{background:#4a2f1a !important;border-color:var(--kehribar) !important}
.dev-ekran{padding-bottom:40px}
.dev-uyari{margin:16px 24px;padding:10px 14px;background:#4a2f1a;border:1px solid var(--kehribar);border-radius:5px;color:var(--koz);font-size:12px;letter-spacing:1px;text-align:center;text-transform:uppercase}
.dev-blok{margin:16px 24px;padding:14px;background:var(--panel);border:1px solid var(--cizgi);border-radius:6px}
.dev-baslik{font-size:11px;letter-spacing:2px;color:var(--duman);text-transform:uppercase;margin-bottom:12px}
.dev-satir{font-size:13px;color:var(--sonuk);margin-bottom:6px}
.dev-satir b{color:var(--kehribar)}
.dev-mini{display:inline-block;background:var(--panel2);border:1px solid var(--cizgi);border-radius:4px;padding:1px 8px;margin-left:6px;cursor:pointer;color:var(--metin);font-size:12px}
.dev-mini:hover{border-color:var(--kehribar)}
.dev-vaka{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;margin-bottom:6px;background:var(--panel2);border:1px solid var(--cizgi);border-radius:5px;cursor:pointer;font-size:14px}
.dev-vaka:hover{border-color:var(--kehribar);color:var(--kehribar)}
.dev-etik{font-size:10px;color:var(--duman);letter-spacing:1px}
.dev-seed{padding:10px 12px;margin-bottom:6px;background:var(--panel2);border:1px solid var(--cizgi);border-radius:5px;cursor:pointer}
.dev-seed.aktif{border-color:var(--kehribar);background:rgba(224,164,92,.08)}
.dev-seed-ad{font-size:13px;color:var(--metin)}
.dev-seed-val{float:right;font-size:12px;color:var(--kehribar);font-family:monospace}
.dev-seed-not{font-size:11px;color:var(--duman);margin-top:3px;font-style:italic}
.cengo-gosterge{margin:20px auto;text-align:center}
.cengo-etiket{font-size:11px;letter-spacing:2px;color:var(--duman);text-transform:uppercase;margin-bottom:10px}
.cengo-alevler{display:flex;gap:8px;justify-content:center;align-items:flex-end}
.alev{transition:all .4s ease}
.alev.dolu{filter:drop-shadow(0 0 5px rgba(224,164,92,.6))}
.alev.bos{opacity:.4}
.cengo-kelime{font-size:12px;color:var(--sonuk);font-style:italic;margin-top:8px;letter-spacing:1px}
.istat-panel{margin:18px 24px;padding:18px;background:var(--panel);border:1px solid var(--cizgi);border-radius:6px}
.istat-baslik{font-size:11px;letter-spacing:2px;color:var(--duman);text-transform:uppercase;margin-bottom:16px}
.istat-satir{margin-bottom:14px}
.istat-et{font-size:14px;color:var(--sonuk);margin-bottom:6px}
.istat-et.secili{color:var(--metin);font-weight:bold}
.istat-et .senin{color:var(--kehribar);font-weight:normal;font-style:italic}
.istat-bar-kutu{position:relative;display:flex;align-items:center;gap:10px}
.istat-bar-kutu::before{content:'';position:absolute;left:0;right:44px;height:8px;background:var(--zemin2);border-radius:4px}
.istat-bar{height:8px;background:var(--duman);border-radius:4px;position:relative;z-index:1;min-width:6px;transition:width .5s ease}
.istat-bar.secili{background:var(--kehribar)}
.istat-yuzde{margin-left:auto;font-size:13px;color:var(--sonuk);min-width:38px;text-align:right;z-index:1}
.istat-yuzde.secili{color:var(--kehribar);font-weight:bold}
.istat-kaynak{margin-top:12px;padding-top:10px;border-top:1px solid var(--cizgi);
  font-size:11.5px;color:var(--duman);line-height:1.5}
.istat-not{margin-top:8px;font-size:12px;color:var(--duman);font-style:italic;line-height:1.5}
.bilgi{padding:14px 24px;font-size:12px;color:var(--duman);font-style:italic;text-align:center}
</style>
</head>
<body>
<div id="app"></div>
<script>
${motor}
${gorselveri}
${veri}

/* ===================== ARAYÜZ (FAZLI) ===================== */
const oyun = new Oyun(GAME);
const app = document.getElementById("app");
let sonAcilan = null; // son açılan kaynağın kaydı
let sonUyari = null;  // açılamayan kaynağın sebebi (bir kez gösterilir)

/* ============================================================
   KAYIT — tek yuva, otomatik.
   Karar verilir verilmez yazılır: oyuncu uygulamayı kapatarak
   kararı geri alamaz. "Geri alınamaz karar" oyunun çekirdeği,
   kayıt sistemi onu delmemeli.
   ============================================================ */
const KAYIT_ANAHTAR = "paravan_kayit_v1";
let kayitKapali = false;   // depolama yoksa (özel sekme, dosya kısıtı) sessizce devre dışı kalır
function kayitYaz(){
  if(kayitKapali || devIzole) return;         // izole dev testi ana kaydı kirletmez
  try{ localStorage.setItem(KAYIT_ANAHTAR, JSON.stringify(oyun.durumAl())); }
  catch(e){ kayitKapali = true; }             // yazılamıyorsa oyun yine de oynanır
}
function kayitOku(){
  try{ const s = localStorage.getItem(KAYIT_ANAHTAR); return s ? JSON.parse(s) : null; }
  catch(e){ return null; }
}
function kayitSil(){ try{ localStorage.removeItem(KAYIT_ANAHTAR); }catch(e){} }

/* ============================================================
   SES — ruh haline göre müzik + kısa efektler.
   Parçalar GÖMÜLMEZ; ses/ klasöründen akıtılır (bkz. OKUBENI).
   Dosya yoksa oyun sessiz devam eder, hata vermez.
   ============================================================ */
const SES_ANAHTAR = "paravan_ses_v1";   // kayıt yuvasından AYRI: "baştan başla" ses tercihini silmez
const SES_KLASOR  = "ses/";
// Sırayla denenir. Gerçek parçalar .mp3 olacak; .wav yedeği geçici sentetik
// seslerin çalışmasını sağlıyor. Bulunan uzantı akılda tutulur, bir daha aranmaz.
const SES_UZANTILAR = [".mp3", ".wav"];

// ruh hali → dosya adı (ses/<ad>.mp3)
const MUZIK = {
  prolog:     "prolog",
  masa:       "masa",
  giris:      "giris",
  arastirma:  "arastirma",
  karar:      "karar",
  sonuc:      "sonuc",
  huzun:      "huzun",      // V4 — Kaya'nın gizli iyiliği
  final:      "final",      // V6 + son ekranı
};
const EFEKT = {
  dokun:   "efekt_dokun",
  kaynak:  "efekt_kaynak",
  kilit:   "efekt_kilit",
  muhur:   "efekt_muhur",   // karar mühürlendi
  alev:    "efekt_alev",
};

const ses = {
  acik: true,
  seviye: 0.55,
  kilitli: true,          // tarayıcı: kullanıcı dokunana kadar ses çalınmaz
  suAn: null,             // çalan ruh hali
  calan: null,            // aktif Audio
  bekleyen: null,         // kilit açılınca çalacak ruh hali
  yok: {},                // bulunamayan dosyalar — bir daha denenmez
  uzanti: {},             // ad → çalışan uzantının sırası (bir kez bulunur)
  yukleniyor: null,       // hazırlanan parça (çift başlatmayı önler)
  efektler: {},           // önbellek
};

function sesAyarOku(){
  try{
    const s = JSON.parse(localStorage.getItem(SES_ANAHTAR));
    if(s && typeof s === "object"){
      if(typeof s.acik === "boolean") ses.acik = s.acik;
      if(typeof s.seviye === "number") ses.seviye = Math.min(1, Math.max(0, s.seviye));
    }
  }catch(e){}
}
function sesAyarYaz(){
  try{ localStorage.setItem(SES_ANAHTAR, JSON.stringify({acik: ses.acik, seviye: ses.seviye})); }catch(e){}
}

// Tarayıcı ve Android WebView, kullanıcı dokunmadan ses çaldırmaz.
// İlk dokunuşta kilidi açıp bekleyen parçayı başlatıyoruz.
// Hangi uzantının VAR olduğunu önceden bul. Aksi halde ilk dokunuşta önce
// .mp3 denenir, hata ASENKRON gelir ve .wav için çağrılan ikinci play()
// artık kullanıcı hareketinin içinde olmadığı için mobilde reddedilir.
// Bu yüzden dosya keşfi dokunuştan ÖNCE, fetch ile yapılıyor.
function sesKesfet(){
  if(typeof fetch !== "function") return;
  const adlar = [...new Set([...Object.values(MUZIK), ...Object.values(EFEKT)])];
  let calisti = false;                      // fetch hiç çalıştı mı (file:// engelleyebilir)
  const bulunan = {}, eksik = {};
  const denemeler = adlar.map(ad =>
    SES_UZANTILAR.reduce((zincir, uz, i) => zincir.then(sonuc => {
      if(sonuc !== null) return sonuc;
      return fetch(SES_KLASOR + ad + uz, {method:"HEAD"})
        .then(r => { calisti = true; return r.ok ? i : null; })
        .catch(() => null);
    }), Promise.resolve(null))
    .then(i => { if(i !== null) bulunan[ad] = i; else eksik[ad] = true; })
  );
  Promise.all(denemeler).then(() => {
    if(!calisti) return;                    // keşif yapılamadı → çalışma anında dene
    Object.assign(ses.uzanti, bulunan);
    Object.assign(ses.yok, eksik);
  }).catch(()=>{});
}

function sesKilidiAc(){
  if(!ses.kilitli) return;
  ses.kilitli = false;
  if(ses.bekleyen){ const m = ses.bekleyen; ses.bekleyen = null; muzikCal(m); }
}

function muzikCal(mod){
  const ad = MUZIK[mod];
  if(!ad || ses.yok[ad]) return;
  if(ses.suAn === mod && (ses.calan || ses.yukleniyor)) return;   // zaten çalıyor ya da yükleniyor
  ses.suAn = mod;
  if(!ses.acik) return;
  if(ses.kilitli){ ses.bekleyen = mod; return; }
  muzikBaslat(mod, ad, ses.uzanti[ad] ?? 0);
}

function muzikBaslat(mod, ad, i){
  if(i >= SES_UZANTILAR.length){ ses.yok[ad] = true; ses.yukleniyor = null; return; }
  const yeni = new Audio(SES_KLASOR + ad + SES_UZANTILAR[i]);
  yeni.loop = true;
  yeni.volume = 0;
  ses.yukleniyor = yeni;
  let bitti = false;

  const basarisiz = () => {
    if(bitti) return; bitti = true;
    if(ses.yukleniyor === yeni) ses.yukleniyor = null;
    if(ses.suAn === mod) muzikBaslat(mod, ad, i + 1);   // sıradaki uzantıyı dene
  };
  yeni.addEventListener("error", basarisiz);

  // Geçişi ancak yeni parça çalmaya HAZIR olunca başlat; yoksa eskisi susar
  // ve yeni dosya gelene kadar sessizlik olur.
  yeni.addEventListener("canplay", () => {
    if(bitti) return; bitti = true;
    ses.uzanti[ad] = i;                                  // çalışan uzantıyı aklında tut
    if(ses.yukleniyor === yeni) ses.yukleniyor = null;
    if(ses.suAn !== mod || !ses.acik){ try{ yeni.pause(); }catch(e){} return; }  // sahne değişti
    capraz(ses.calan, yeni);
    ses.calan = yeni;
  }, {once:true});

  const p = yeni.play();
  if(p && p.catch) p.catch(err => {
    // Reddin iki farklı sebebi var, karıştırılmamalı:
    // NotAllowedError = kullanıcı henüz dokunmadı → kilitle, dokununca çal.
    // Diğerleri (dosya yok/bozuk) → uzantıyı düş, sonunda dosyayı eksik say;
    // yoksa tek bir eksik parça bütün müziği susturur.
    if(err && err.name === "NotAllowedError"){
      bitti = true; ses.yukleniyor = null; ses.kilitli = true; ses.bekleyen = mod;
    } else basarisiz();
  });
}

// çapraz geçiş: eskisi kısılıp durur, yenisi açılır (sert kesme kötü durur)
function capraz(eski, yeni){
  const hedef = ses.seviye, sure = 700, adim = 50;
  let t = 0;
  const zamanlayici = setInterval(() => {
    t += adim;
    const o = Math.min(1, t / sure);
    if(yeni) { try{ yeni.volume = hedef * o; }catch(e){} }
    if(eski) { try{ eski.volume = hedef * (1 - o); }catch(e){} }
    if(o >= 1){
      clearInterval(zamanlayici);
      if(eski){ try{ eski.pause(); }catch(e){} }
    }
  }, adim);
}

function muzikDur(){
  if(ses.calan){ const e = ses.calan; ses.calan = null; capraz(e, null); }
  ses.suAn = null;
}

function efektCal(tur, i){
  const ad = EFEKT[tur];
  if(!ad || !ses.acik || ses.kilitli || ses.yok[ad]) return;
  const idx = i ?? ses.uzanti[ad] ?? 0;
  if(idx >= SES_UZANTILAR.length){ ses.yok[ad] = true; return; }
  try{
    let a = ses.efektler[ad];
    if(!a){
      a = new Audio(SES_KLASOR + ad + SES_UZANTILAR[idx]);
      a.addEventListener("error", () => {        // sıradaki uzantıyı dene
        ses.efektler[ad] = null;
        efektCal(tur, idx + 1);
      });
      a.addEventListener("canplay", () => { ses.uzanti[ad] = idx; }, {once:true});
      ses.efektler[ad] = a;
    }
    a.currentTime = 0;
    a.volume = Math.min(1, ses.seviye + 0.15);   // efektler müziğin bir tık üstünde
    const p = a.play(); if(p && p.catch) p.catch(()=>{});
  }catch(e){}
}

function sesTogle(){
  ses.acik = !ses.acik;
  sesAyarYaz();
  if(!ses.acik){ muzikDur(); }
  else { const m = ses.suAn || "masa"; ses.suAn = null; muzikCal(m); }
  sesDugmeTazele();
}
function sesDugmeSvg(){ return ses.acik ? "♪" : "♪̸"; }
function sesDugmeTazele(){
  document.querySelectorAll(".ses-btn").forEach(b => {
    b.textContent = sesDugmeSvg();
    b.setAttribute("aria-label", ses.acik ? "Sesi kapat" : "Sesi aç");
  });
}

/* ============================================================
   🛠 GELİŞTİRİCİ MODU — YAYINA ALIRKEN AŞAĞIDAKİ SATIRI false YAP
   ============================================================ */
const DEV_MOD = false;

// Test için ayarlanabilir seed anahtarları (giriş varyantlarını/koşullu içeriği tetikler)
const DEV_SEEDLER = [
  ["ilyas_yuz_tandi", "V2'de İlyas görüldü (V3 girişi)"],
  ["kaya_kayit_gordu", "Kaya kayıtları görüldü (V4 girişi)"],
  ["ilyas_kime_gitti", "İlyas'a ne oldu (V5 girişi) — polis/koz/cavit"],
  ["cavit_ceyda_bilinir", "V5 tam resim çözüldü (V6 girişi)"],
  ["cavit_karsi_konum", "V5 konum (silahli→hepsini_ifsa açılır)"],
  ["kaya_insani", "Kaya insanileşti (V6 ağırlık)"],
  ["el_sezildi", "V3'te 'el' sezildi"],
];

function devPanel(){
  const d = oyun.durum;
  let h = ust() + '<div class="faz panel-ekran dev-ekran">';
  h += \`<div class="dev-uyari">🛠 GELİŞTİRİCİ MODU · yayında kaldır</div>\`;

  // Durum özeti
  h += \`<div class="dev-blok"><div class="dev-baslik">Durum</div>
    <div class="dev-satir">cengoBag: <b>\${d.cengoBag}</b> (\${oyun.cengoDurum()}, \${oyun.cengoAlevSayisi()} alev)
      <span class="dev-mini" onclick="devCengo(-1)">−1</span>
      <span class="dev-mini" onclick="devCengo(1)">+1</span></div>
    <div class="dev-satir">Tamamlanan: \${d.tamamlanan.length? d.tamamlanan.join(", ") : "(yok)"}</div>
  </div>\`;

  // Ses teşhisi
  const calanAd = ses.calan ? decodeURIComponent(ses.calan.src.split("/").pop()) : "(yok)";
  const uzOzet = Object.keys(ses.uzanti).length
    ? Object.entries(ses.uzanti).map(([a,i]) => a+SES_UZANTILAR[i]).slice(0,3).join(", ")+"…"
    : "(keşif yok)";
  h += \`<div class="dev-blok"><div class="dev-baslik">Ses teşhisi</div>
    <div class="dev-satir">açık: <b>\${ses.acik}</b> · kilitli: <b>\${ses.kilitli}</b> · bekleyen: <b>\${ses.bekleyen||"-"}</b></div>
    <div class="dev-satir">sahne: <b>\${ses.suAn||"-"}</b> · çalan dosya: <b>\${calanAd}</b></div>
    <div class="dev-satir">duraklamış: <b>\${ses.calan ? ses.calan.paused : "-"}</b> · ses düzeyi: <b>\${ses.calan ? ses.calan.volume.toFixed(2) : "-"}</b></div>
    <div class="dev-satir">bulunan: \${uzOzet}</div>
    <div class="dev-satir">eksik: \${Object.keys(ses.yok).join(", ")||"(yok)"}</div>
    <div class="dev-satir"><span class="dev-mini" onclick="devSesDene()">▶ zorla çal</span>
      <span class="dev-mini" onclick="devSesRapor()">⎘ raporu göster</span></div>
  </div>\`;

  // Vakaya atla
  h += \`<div class="dev-blok"><div class="dev-baslik">Vakaya atla (izole, temiz başlar)</div>\`;
  for(const v of GAME.vakalar){
    const bitti = d.tamamlanan.includes(v.id);
    h += \`<div class="dev-vaka" onclick="devVakaAtla('\${v.id}')">
      <span>\${v.id} · \${v.baslik}</span>
      <span class="dev-etik">\${v.tur==='yan'?'yan':'omurga'}\${bitti?' ✓':''}</span>
    </div>\`;
  }
  h += \`</div>\`;

  // Seed anahtarları
  h += \`<div class="dev-blok"><div class="dev-baslik">Seed anahtarları (giriş varyantları/koşullar)</div>\`;
  for(const [key, aciklama] of DEV_SEEDLER){
    const val = d.seeds[key];
    const aktif = val!==undefined && val!==false;
    h += \`<div class="dev-seed \${aktif?'aktif':''}" onclick="devSeedTogle('\${key}')">
      <span class="dev-seed-ad">\${key}</span>
      <span class="dev-seed-val">\${val===undefined?'—':String(val)}</span>
      <div class="dev-seed-not">\${aciklama}</div>
    </div>\`;
  }
  h += \`</div>\`;

  // Genel işlemler
  h += \`<div class="dev-blok">
    <button class="buton ikincil" onclick="devBastan()">↺ Baştan başla (prolog)</button>
    <button class="buton ikincil" onclick="masaGoster()">← Masaya dön</button>
  </div>\`;

  h += '</div>';
  app.innerHTML=h; scrollUst();
}
function devCengo(delta){ oyun.durum.cengoBag += delta; devPanel(); }
// Ses çalmıyorsa sebebini doğrudan gösterir: play() ne diyor?
function devSesDene(){
  ses.kilitli = false; ses.acik = true;
  const a = new Audio(SES_KLASOR + "masa" + SES_UZANTILAR[ses.uzanti["masa"] ?? 0]);
  a.volume = 1;
  const p = a.play();
  if(p && p.then) p.then(() => alert("ÇALDI: " + a.src.split("/").pop() + "\\nSes duymuyorsan cihazın sesi kısık ya da sessiz modda."))
                   .catch(err => alert("REDDEDİLDİ: " + err.name + "\\n" + err.message));
  else alert("play() söz döndürmedi (eski tarayıcı)");
}
function devSesRapor(){
  const r = {
    adres: location.href,
    acik: ses.acik, kilitli: ses.kilitli, sahne: ses.suAn,
    calan: ses.calan ? ses.calan.src.split("/").pop() : null,
    duraklamis: ses.calan ? ses.calan.paused : null,
    duzey: ses.calan ? ses.calan.volume : null,
    bulunan: ses.uzanti, eksik: Object.keys(ses.yok),
    wavDestek: (new Audio()).canPlayType("audio/wav"),
    mp3Destek: (new Audio()).canPlayType("audio/mpeg"),
    tarayici: navigator.userAgent,
  };
  alert(JSON.stringify(r, null, 1));
}
function devVakaAtla(id){
  // İZOLE TEST: ana oyun durumuna dokunma. Geçici bir kopya oyun kur, onu oynat.
  devAnaDurum = JSON.parse(JSON.stringify(oyun.durum));  // ana durumu sakla
  devIzole = true;
  // temiz bir durum kur ama mevcut seed'leri koru (giriş varyantları test edilebilsin)
  const korunanSeeds = JSON.parse(JSON.stringify(oyun.durum.seeds));
  const yeni = new Oyun(GAME);
  Object.assign(oyun.durum, yeni.durum);
  oyun.durum.seeds = korunanSeeds;
  vakaAc(id);
}
let devAnaDurum = null;
let devIzole = false;
function devIzoleBitir(){
  // izole testten çık, ana durumu geri yükle
  if(devAnaDurum){ Object.assign(oyun.durum, devAnaDurum); devAnaDurum=null; }
  devIzole = false;
  devPanel();
}
function devSeedTogle(key){
  const d = oyun.durum;
  const cur = d.seeds[key];
  // ilyas_kime_gitti gibi string seed'ler için döngü; boolean için aç/kapa
  if(key==="ilyas_kime_gitti"){
    const sira = [undefined,"polis","koz","cavit","lekele"];
    const i = sira.indexOf(cur);
    d.seeds[key] = sira[(i+1)%sira.length];
  } else if(key==="cavit_karsi_konum"){
    const sira = [undefined,"silahli","dusman","ortak","ceyda_ittifak"];
    const i = sira.indexOf(cur);
    d.seeds[key] = sira[(i+1)%sira.length];
  } else {
    d.seeds[key] = cur ? false : true;
  }
  devPanel();
}
function devBastan(){
  // durumu sıfırla
  kayitSil();
  const yeni = new Oyun(GAME);
  Object.assign(oyun.durum, yeni.durum);
  prologIndex = 0; prologGoster();
}

// prolog ve sürdürme ekranlarının sade şeridi — ses düğmesi burada da bulunmalı,
// oyuncu daha masaya varmadan sesi kısabilsin
function ustSade(){
  return \`<div class="ust"><div class="marka">PARAVAN<small>DEDEKTİFLİK</small></div>
    <div class="ust-butonlar"><button class="ust-btn ses-btn" onclick="sesTogle()" aria-label="Ses">\${sesDugmeSvg()}</button></div>
  </div>\`;
}
function ust(geriMasa){
  return \`<div class="ust">
    <div class="marka">PARAVAN<small>DEDEKTİFLİK</small></div>
    <div class="ust-butonlar">
      \${DEV_MOD ? '<button class="ust-btn dev-btn" onclick="devPanel()">🛠</button>' : ''}
      <button class="ust-btn ses-btn" onclick="sesTogle()" aria-label="Ses">\${sesDugmeSvg()}</button>
      <button class="ust-btn" onclick="kisilerGoster()">☗ Kişiler</button>
      <button class="ust-btn" onclick="defterGoster()">✎ Defter</button>
    </div>
  </div>\` + kasaSerit();
}
function scrollUst(){ window.scrollTo(0,0); }

/* Para: sayıyı ve ANLAMINI birlikte göster. Çıplak sayı baskıyı okunmaz yapar,
   sayısız gösterge ise oyuncuyu körleştirir. */
function tl(n){ return (n<0?"−":"") + Math.abs(Math.round(n)).toLocaleString("tr-TR") + " ₺"; }
// Süren krizler her ekranda görünür durur: bu bir olay değil, bir HÂL.
function krizRozetleri(){
  const kz = (oyun.durum.kriz)||{};
  const r = [];
  if(kz.isletme) r.push('<span class="kriz-rozet">⚡ kesik</span>');
  if(kz.kira)    r.push('<span class="kriz-rozet">§ icra</span>');
  if(kz.cengo)   r.push('<span class="kriz-rozet">✦ Cengo ödenmedi</span>');
  return r.length ? \`<span class="kriz-rozetler">\${r.join("")}</span>\` : "";
}

function kasaSerit(){
  const k = oyun.kasaDurumu();
  if(!k.aylikGider) return "";
  const halMetin = {
    "idare eder": k.ayDayanir + " aylık gider karşılanıyor",
    "dar":        "bir aylık gideri ancak karşılıyor",
    "kritik":     "bu ayın giderini karşılamıyor",
    "batık":      "kasa boş",
  }[k.hal];
  return \`<div class="kasa-serit">
    <span>Kasa <span class="tutar">\${tl(k.para)}</span>\${k.borc? \` · <span class="borc">borç \${tl(k.borc)}</span>\`:""}</span>
    <span class="hal \${k.hal==="kritik"?"kritik":k.hal==="batık"?"batik":""}">\${halMetin}</span>
    \${krizRozetleri()}
  </div>\`;
}

/* Cengo bağı: 5 alevlik gösterge (dolu=kehribar, boş=sönük) + küçük kelime */
function alevSvg(dolu){
  const renk = dolu ? 'var(--kehribar)' : 'none';
  const stroke = dolu ? 'var(--koz)' : 'var(--cizgi)';
  return \`<svg class="alev \${dolu?'dolu':'bos'}" width="18" height="22" viewBox="0 0 18 22" fill="\${renk}" stroke="\${stroke}" stroke-width="1.2">
    <path d="M9 1 C10 5 14 6 14 11 C14 15 11.5 18 9 18 C6.5 18 4 15 4 11 C4 8 6 7 6 4 C7.5 5.5 8.5 3 9 1 Z"/>
  </svg>\`;
}
// Alev sesi, göstergedeki alev sayısı DEĞİŞTİĞİNDE çalar. Ham cengoBag'e değil:
// ses bir kibritin tutuşması (ses_promptlari.md #13), yani yanan/sönen alevin
// kendisi — oyuncunun görmediği bir değişim için çalmak yanıltıcı olurdu.
// İlk çizim sessiz: kayıttan dönerken ya da sayfa açılırken "değişti" demek yalan.
let cengoSonAlev = null;
function cengoGosterge(){
  const dolu = oyun.cengoAlevSayisi();   // 0-5
  const kelime = oyun.cengoDurum();
  // innerHTML'den ÖNCE çağrılıyoruz; ses çizimden ve karar mühründen sonraya kalsın.
  if(cengoSonAlev !== null && dolu !== cengoSonAlev) setTimeout(() => efektCal('alev'), 420);
  cengoSonAlev = dolu;
  let alevler = '';
  for(let i=1;i<=5;i++) alevler += alevSvg(i<=dolu);
  return \`<div class="cengo-gosterge">
    <div class="cengo-etiket">Cengo ile aran</div>
    <div class="cengo-alevler">\${alevler}</div>
    <div class="cengo-kelime">\${kelime}</div>
  </div>\`;
}

/* ---------- PROLOG (açılış, dokundukça ilerler) ---------- */
let prologIndex = 0;
function prologGoster(){
  muzikCal('prolog');
  const k = PROLOG[prologIndex];
  const sonMu = prologIndex === PROLOG.length - 1;
  let h = '<div class="faz prolog-faz">';
  // prologda üst şerit sade (Kişiler/Defter yok)
  h += ustSade();
  if(k.nasil_oynanir){
    h += \`<div class="baslik" style="padding-top:32px"><div class="no">Nasıl Oynanır</div></div>\`;
    h += \`<div class="giris-metin">\${k.metin}</div>\`;
  } else {
    h += gorselHTML(k.gorsel);
    h += \`<div class="giris-metin anlati-italik" style="font-size:17px">\${k.metin}</div>\`;
  }
  // ilerleme noktaları
  h += '<div class="prolog-nokta">';
  for(let i=0;i<PROLOG.length;i++) h += \`<span class="\${i===prologIndex?'aktif':''}"></span>\`;
  h += '</div>';
  h += \`<button class="buton" onclick="prologIlerle()">\${sonMu?'Ajansa gir →':'Devam'}</button>\`;
  if(prologIndex>0 && !sonMu) h += \`<button class="buton ikincil" onclick="prologGeri()">← Geri</button>\`;
  h += '</div>';
  app.innerHTML=h; scrollUst();
}
function prologIlerle(){
  if(prologIndex < PROLOG.length-1){ prologIndex++; prologGoster(); }
  else { masaGoster(); }
}
function prologGeri(){ if(prologIndex>0){ prologIndex--; prologGoster(); } }

/* ---------- MASA ---------- */
function masaGoster(){
  sonAcilan=null;
  kayitYaz();
  muzikCal('masa');
  const masada = oyun.masadakiVakalar();
  if(masada.length===0) return sonEkrani();
  let h = ust() + '<div class="faz">';
  h += \`<div class="masa-baslik"><div class="b">Ajansın Masası</div>
    <div class="alt">Hangi işe bakacaksın?</div></div>\`;
  for(const id of masada){
    const v = GAME.vakalar.find(x=>x.id===id);
    const yan = v.tur==='yan';
    // 'sonra: her' ile gelen iş koşulu sürdükçe masada duruyor; ona
    // "beklemez" demek yalan olurdu (bkz. motor: masadakiVakalar).
    const kalici = yan && v.belirir && v.belirir.sonra === 'her';
    const gad = (v.giris_gorsel||'').replace('.jpg','');
    const src = (typeof GORSELLER!=='undefined' && GORSELLER[gad]) ? GORSELLER[gad] : null;
    const arka = src ? \`style="background-image:linear-gradient(to bottom, rgba(15,35,56,.15) 0%, rgba(15,35,56,.55) 55%, rgba(15,35,56,.95) 100%), url('\${src}')"\` : '';
    h += \`<div class="dosya-afis \${yan?'yan':'omurga'} \${src?'':'gorselsiz'}" \${arka} onclick="vakaAc('\${id}')">
      <div class="afis-alt">
        <div class="tip">\${yan?'Yan iş':'Vaka'}</div>
        <h2>\${v.baslik}</h2>
        <div class="ipu">\${kalici?'Gitmiyor. Ne zaman dönsen orada':(yan?'Beklemez — büyük dosyaya dönersen başkasına gider':'Ana dosya')}</div>
      </div>
    </div>\`;
  }
  h += \`<div class="bilgi">Her seçimin geri dönüşü yok.</div></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 1: GİRİŞ ---------- */
function vakaAc(id){
  const g = oyun.vakaBaslat(id);
  sonAcilan=null;
  kayitYaz();
  muzikCal('giris');
  const v = oyun.durum.aktif.vaka;
  let h = ust() + '<div class="faz">';
  h += \`<div class="baslik"><div class="no">\${v.tur==='yan'?'Yan İş':'Vaka'}</div><h1>\${v.baslik}</h1></div>\`;
  // giriş sahne görseli
  if(v.giris_gorsel){
    const gad = v.giris_gorsel.replace('.jpg','');
    if(typeof GORSELLER!=='undefined' && GORSELLER[gad]){
      h += \`<div class="gorsel-cerceve giris-gorsel"><img src="\${GORSELLER[gad]}" alt="\${v.baslik}" loading="lazy"></div>\`;
    }
  }
  h += \`<div class="giris-metin anlati-italik">\${g.giris}</div>\`;
  h += \`<button class="buton" onclick="arastirmaFazi()">Araştırmaya başla</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 2: ARAŞTIRMA (kaynak listesi) ---------- */
// V4 hüzünlü keşif, V6 final ağırlığı; gerisi standart araştırma tonu
function vakaModu(vid){ return vid==='V4' ? 'huzun' : (vid==='V6' ? 'final' : 'arastirma'); }
function arastirmaFazi(){
  const a = oyun.durum.aktif;
  muzikCal(vakaModu(a.id));
  const v = a.vaka;
  const acik = oyun.acikKaynaklar();
  const kararlar = oyun.acikKararlar();
  let h = ust() + '<div class="faz">';
  h += \`<div class="baslik"><h1 style="font-size:21px">\${v.baslik}</h1></div>\`;

  // araştırma puanı
  let puan='<span class="arastirma-puan">';
  for(let i=0;i<v.arastirma;i++) puan+=\`<span class="p \${i<a.arastirmaKalan?'':'bos'}"></span>\`;
  puan+='</span>';

  if(acik.length>0){
    h += \`<div class="faz-etiket"><span class="t">Neyi araştıracaksın?</span>\${puan}</div>\`;
    // Sönük duran nokta sebepsiz bir eksiklik gibi görünmesin.
    if(oyun.durum.kriz && oyun.durum.kriz.isletme && a.arastirmaKalan < v.arastirma){
      h += '<div class="kriz-satir">⚡ Elektrik kesik — bu vakada bir araştırma hakkın eksik.</div>';
    }
    if(sonUyari){ h += \`<div class="kaynak-uyari">\${sonUyari}</div>\`; sonUyari = null; }
    for(const c of acik){
      const tam = v.clues.find(x=>x.id===c.id);
      // Hak bitmişken ücretli kaynak listede durur ama alınamaz. Oyuncu bunu
      // tıklamadan ÖNCE görmeli; sessizce aynı ekrana dönmek hata gibi duruyor.
      // Koşullu bedelsizlik de burada görünmeli: "bedava" etiketi motorun
      // gerçekten uygulayacağı şeyi söylemeli.
      const bedava = oyun.bedelsizMi(tam);
      const yetersiz = (!bedava && a.arastirmaKalan <= 0) || ((tam.ucret||0) > oyun.durum.para);
      h += \`<div class="kaynak \${bedava?'bedelsiz':''} \${yetersiz?'yetersiz':''}" onclick="kaynakAcFaz('\${c.id}')">
        <span class="ico">\${c.ico}</span><span class="ad">\${c.ad}\${tam.ucret?\`<span class="ucret">\${tl(tam.ucret)}</span>\`:""}</span>
        <span class="tur">\${yetersiz ? 'zamanın kalmadı' : c.tur}</span></div>\`;
    }
  } else {
    h += \`<div class="bilgi">Araştıracak başka bir şey kalmadı.</div>\`;
  }

  if(kararlar.length>0){
    h += \`<button class="buton" onclick="kararFazi()">Karar vermeye hazırım →</button>\`;
  } else {
    h += \`<div class="bilgi">Karar verebilmek için daha fazla araştırman gerek.</div>\`;
  }
  h += '</div>';
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 2b: AÇILAN KANIT (tek ekran) ---------- */
function kaynakAcFaz(id){
  const r = oyun.kaynakAc(id);
  if(r.hata){ efektCal('kilit'); sonUyari = r.hata; arastirmaFazi(); return; }
  kayitYaz();
  efektCal('kaynak');
  const c = oyun.durum.aktif.vaka.clues.find(x=>x.id===id);
  let h = ust() + '<div class="faz kanit-ekran">';
  h += \`<div class="baslik"><div class="no">\${c.ad}</div></div>\`;
  h += gorselHTML(c.gorsel);
  h += \`<div class="kanit-metin">\${r.text}<span class="meta">\${r.meta}</span></div>\`;
  h += \`<button class="buton" onclick="arastirmaFazi()">← Araştırmaya dön</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 3: KARAR ---------- */
// aktif vakanın ham karar tanımı (para alanı için)
function v6Karar(id){
  const v = oyun.durum.aktif && oyun.durum.aktif.vaka;
  return (v && v.decisions.find(d => d.id === id)) || {};
}
function kararFazi(){
  muzikCal('karar');
  const kararlar = oyun.acikKararlar();
  let h = ust() + '<div class="faz">';
  h += \`<div class="baslik"><div class="no">Karar</div><h1 style="font-size:22px">Ne yapacaksın?</h1></div>\`;
  h += \`<div class="uyari">Bu karar geri alınamaz.</div>\`;
  // Baskının çapası bu. Küçük gri bir satır olarak geçiştirilirse oyuncu
  // görmüyor ve karar bedelsiz hissettiriyor — masadaki fatura gibi dursun.
  if(oyun.durum.aktif.vaka.tur === "omurga"){
    // Motorun keseceği kalemlerin TA KENDİSİ — icra sürüyorsa o da burada.
    const gd = oyun.aylikGiderler();
    h += \`<div class="gider-uyari">
      <div class="ust-satir"><span class="et">Bu ay ödeyeceksin</span><span class="tutar">\${tl(oyun.aylikGiderToplam())}</span></div>
      <div class="dokum">\${gd.map(x => \`<span>\${x.ad} <b>\${tl(x.tutar)}</b></span>\`).join("")}</div>
    </div>\`;
  }
  // Baskı ancak SONUCU görünürse hissedilir. Tutarı gizlemek ikilemi
  // korumuyordu, sadece kararı anlamsızlaştırıyordu — baskın seçeneği K8
  // engelliyor zaten. Peri iş kadını: hangi işin ne getirdiğini bilir.
  const aylikGider = (oyun.durum.aktif.vaka.tur === "omurga") ? oyun.aylikGiderToplam() : 0;
  // İtibar ücreti vaka düzeyinde ölçekliyor. Oyuncu bunu KARAR VERMEDEN ÖNCE
  // görmeli; yoksa ekranda yazan rakamla kasaya giren rakam tutmaz.
  const itibar = oyun.ucretEtkisi();
  if(itibar.sebepler.length){
    h += \`<div class="itibar-kutu">\${itibar.sebepler.map(x =>
      \`<div><span class="\${x.carpan<1?'dusuk':'yuksek'}">\${x.carpan<1?'▼':'▲'} %\${Math.round(Math.abs(1-x.carpan)*100)}</span> \${x.metin}</div>\`
    ).join("")}</div>\`;
  }
  for(const k of kararlar){
    const ham = v6Karar(k.id).para;
    const p = (ham > 0) ? Math.round(ham * itibar.carpan) : ham;
    let bedel = "";
    if(p !== undefined){
      const kalan = oyun.durum.para + p - aylikGider;
      // Kasa eksiye düşmez, açık BORCA yazılır — önizleme de motorun yaptığını
      // birebir yapmalı, yoksa "ay sonunda 0 ₺" diyerek 37 bin liralık çukuru
      // gizler. Faiz giderlerden SONRA ve borcun tamamına işliyor.
      const borcOnce = oyun.durum.borc;
      let kasaSonra = Math.max(0, kalan);
      let borcSonra = borcOnce + Math.max(0, -kalan);
      if(aylikGider && borcSonra > 0) borcSonra += Math.round(borcSonra * (ekonomiAl(GAME).borc_faizi || 0));
      // Eline geçen para borcu kapatır (motor: kararVer). Önizleme de kapatmalı,
      // yoksa "47.775 ₺ kasa + 40.948 ₺ borç" gibi imkânsız bir tablo gösterir.
      const odeme = Math.min(kasaSonra, borcSonra);
      kasaSonra -= odeme; borcSonra -= odeme;
      // Asıl bilgi "ay sonunda kasada ne kalıyor". Uyarı cümlesi YALNIZCA kötü
      // seçeneklerde çıkar — hepsinde çıkarsa ayrım kaybolur, kimse okumaz.
      let uyari = "", sinif = "iyi";
      // Gelecek ay yeni bir iş gelebilir; uyarı bunu kesinmiş gibi sunmamalı.
      // Borç ise BU ayın kesin sonucu, koşulsuz.
      if(kalan < 0){ uyari = borcOnce > 0 ? "borcun büyür" : "borca girersin"; sinif = "kotu"; }
      else if(aylikGider && kalan < aylikGider * 0.5){ uyari = "yeni iş gelmezse batarsın"; sinif = "kotu"; }
      else if(aylikGider && kalan < aylikGider){ uyari = "yeni iş gelmezse açık verirsin"; sinif = "dar"; }
      const tutar = p > 0 ? "+" + tl(p) : (p < 0 ? tl(p) : "ödeme yok");
      // İki rakam arasındaki ilişki görünmezse okuyan "bu ne demek?" diyor.
      // Ücret → ay sonu zinciri okla kurulsun.
      // Eksi tutarı "ücret" diye göstermek ahlakın satın alındığı hissini
      // veriyordu. Her giderin gerçek bir adı var: taşınma parası, tedavi
      // katkısı, tahsil edilemeyen hesap.
      const etiket = (p < 0 && v6Karar(k.id).bedel_adi) ? v6Karar(k.id).bedel_adi : "ücret";
      bedel = \`<span class="bedel">
        <span class="etiket">\${etiket}</span><b class="\${p>0?'kazanc':'yok'}">\${tutar}</b>
        <span class="ok">→</span>
        <span class="kalan \${sinif}">ay sonunda \${tl(kasaSonra)}</span>
        \${borcSonra>0?\`<span class="borc-onizleme">borç \${tl(borcSonra)}</span>\`:""}
        \${uyari?\`<span class="sonuc \${sinif}">\${uyari}</span>\`:""}</span>\`;
    }
    h += \`<div class="karar" onclick="kararVerFaz('\${k.id}')"><div class="et">\${k.etiket}\${bedel}</div></div>\`;
  }
  h += \`<button class="buton ikincil" onclick="arastirmaFazi()">← Biraz daha araştırayım</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 4: SONUÇ + DEFTER NOTU ---------- */
function kararVerFaz(id){
  const vid = oyun.durum.aktif.id;
  const mevcutIdler = oyun.acikKararlar().map(x=>x.id);   // karar vermeden önce
  const r = oyun.kararVer(id);
  if(r.hata){ alert(r.hata); return; }
  kayitYaz();   // hemen: kapatıp kararı geri almak yok
  efektCal('muhur');
  muzikCal('sonuc');
  const not = defterNotu(vid, id);
  let h = ust() + '<div class="faz">';
  h += ruhGorseli(r.ruh);
  h += \`<div class="sonuc-kutu"><h3>Sonuç</h3><p>\${r.sonuc}</p></div>\`;
  if(not) h += \`<div class="defter-not">\${not}</div>\`;
  h += hesapKutusu(r.ekonomi);
  h += istatistikPanel(vid, id, mevcutIdler);
  h += cengoGosterge();
  if(devIzole){
    h += \`<div class="dev-uyari" style="margin-top:20px">🛠 İZOLE TEST — bu sonuç kaydedilmedi</div>\`;
    h += \`<button class="buton" onclick="devIzoleBitir()">🛠 Testi bitir, panele dön</button></div>\`;
  } else {
    h += \`<button class="buton" onclick="masaGoster()">Devam et</button></div>\`;
  }
  app.innerHTML=h; scrollUst();
}

/* Kararın parasal sonucu: oyuncu ne kazandığını VE ayın giderlerini görmeli.
   Ekonomik çöküş hikâyede varsa oyunda da görünmeli. */
// Motordaki KRIZLER ile aynı metinler; arayüz motordan okuyamadığı için
// burada duruyor. İkisinin ayrışmasını test_borc.js yakalıyor.
const KRIZ_METIN = {
  isletme: { ad: "Elektrik kesildi",
             aciklama: "Fatura ödenmedi. Karanlıkta dosya okunmuyor — bundan sonraki vakada bir araştırma hakkın eksik." },
  cengo:   { ad: "Cengo'nun eline geçmedi",
             aciklama: "Bir şey demedi. Bu daha kötü." },
  kira:    { ad: "Ev sahibi icraya verdi",
             aciklama: "Büroya haciz ihbarnamesi geldi. Takip masrafı da her ay senden çıkıyor." },
};

function hesapKutusu(e){
  if(!e) return "";
  let h = '<div class="hesap">';
  if(e.kararPara){
    // İtibar ücreti değiştirdiyse satır bunu söylesin; yoksa rakam sebepsiz
    // görünür ve oyuncu yanlış hatırladığını sanır.
    const kirpik = e.itibar && e.itibar.carpan !== 1 && e.ilanPara > 0;
    h += \`<div class="satir \${e.kararPara>0?'gelir':'gider'}"><span>\${e.kararPara>0?'Vaka ücreti':(e.bedelAdi||'Kararın bedeli')}\${
      kirpik?\`<em class="acik" style="color:var(--sonuk)">anlaşılan \${tl(e.ilanPara)}, itibar ×\${e.itibar.carpan.toFixed(2)}</em>\`:""
    }</span><b>\${tl(e.kararPara)}</b></div>\`;
  }
  if(e.harcanan)  h += \`<div class="satir gider"><span>Araştırma masrafı</span><b>\${tl(-e.harcanan)}</b></div>\`;
  for(const g of (e.giderler||[])){
    // Ödenemeyen kalemi gizlemek, borcun NEDEN sonuç doğurduğunu görünmez
    // kılardı. Açık kalan kadarı satırın kendisinde yazıyor.
    const acik = g.eksik ? \`<em class="acik">\${tl(g.eksik)} açık kaldı</em>\` : "";
    h += \`<div class="satir gider \${g.eksik?'odenmedi':''}"><span>\${g.ad}\${acik}</span><b>\${tl(-g.tutar)}</b></div>\`;
  }
  if(e.faiz) h += \`<div class="satir gider"><span>Borç faizi</span><b>\${tl(-e.faiz)}</b></div>\`;
  h += '<div class="ayrac"></div>';
  h += \`<div class="sonuc-satir"><span>Kasa</span><span>\${tl(e.para)}</span></div>\`;
  if(e.borcOdemesi) h += \`<div class="sonuc-satir" style="color:var(--altin)"><span>Borca giden</span><span>\${tl(-e.borcOdemesi)}</span></div>\`;
  if(e.borc) h += \`<div class="sonuc-satir" style="color:var(--kirmizi)"><span>Borç</span><span>\${tl(e.borc)}</span></div>\`;
  h += '</div>';
  // Bu ay yeni patlayan sonuçlar. Rakamın altında değil, ayrı bir kutuda —
  // oyuncu muhasebeyi atlasa bile bunu atlamasın.
  for(const ad of (e.yeniKrizler||[])){
    const k = KRIZ_METIN[ad]; if(!k) continue;
    h += \`<div class="kriz-kutu"><div class="b">\${k.ad}</div><div class="a">\${k.aciklama}</div></div>\`;
  }
  return h;
}

/* Karar mührünün ruh hâli: dört görselden biri, kararın kendi
   cengoBag/para değerlerinden türüyor (motor.js/kararRuhHali).

   Yer tutucu BASILMAZ: dört görsel gelene kadar bu bant hiç görünmez.
   gorselHTML'in kesikli kutusu ipucu listesinde bilerek duruyor — orada
   eksiği işaretliyor. Kırk karar ekranının her birinde aynı kutu ise
   eksik işareti değil, gürültü olurdu.

   Alt metinler yargı İÇERMEZ: "kirli karar" değil, kül tablası. Oyunun
   oyuncuya not vermeme sözü metinde olduğu gibi görselde de geçerli. */
const RUH_GORSEL = {
  temiz:  { dosya: 'karar_temiz.jpg',  alt: 'sabaha karşı açılan bir pencere' },
  bedel:  { dosya: 'karar_bedel.jpg',  alt: 'boşalmış bir çekmece, masada kalan az şey' },
  bosluk: { dosya: 'karar_bosluk.jpg', alt: 'kapanmış bir dosya, sönmüş lamba' },
  kirli:  { dosya: 'karar_kirli.jpg',  alt: 'kül tablasında sönmekte olan bir sigara' },
};

function ruhGorseli(ruh){
  const g = RUH_GORSEL[ruh];
  if(!g) return '';
  const ad = g.dosya.replace('.jpg','');
  const src = (typeof GORSELLER!=='undefined' && GORSELLER[ad]) ? GORSELLER[ad] : null;
  if(!src) return '';
  return \`<div class="gorsel-cerceve giris-gorsel ruh-bant ruh-\${ruh}"><img src="\${src}" alt="\${g.alt}" loading="lazy"></div>\`;
}

function gorselHTML(g){
  if(!g) return '';
  const s = g.tur==='portre'?'portre':(g.tur==='kanit'?'kanit':'');
  const ad = (g.dosya||'').replace('.jpg','');
  const src = (typeof GORSELLER!=='undefined' && GORSELLER[ad]) ? GORSELLER[ad] : null;
  if(src){
    return \`<div class="gorsel-cerceve \${s}"><img src="\${src}" alt="\${g.alt||''}" loading="lazy"></div>\`;
  }
  // yer tutucu (görsel yoksa)
  return \`<div class="gorsel \${s}"><span class="yt">[\${g.tur}] \${g.alt||''}</span></div>\`;
}

/* Münevver stili: tüm kararların yüzdeleri, çubuk listesi */
function istatistikPanel(vid, secilenId, mevcutIdler){
  const v = GAME.vakalar.find(x=>x.id===vid);
  // Panel yalnızca oyuncuya SUNULAN kararları göstermeli. Aksi halde
  // "bu durumda insanlar ne yapardı" ifadesi yanlış olur: oyuncunun hiç
  // göremediği seçeneklerin oranını göstermek başka bir durumu anlatır.
  let kararlar = [...v.decisions];
  if(Array.isArray(mevcutIdler) && mevcutIdler.length){
    kararlar = kararlar.filter(d => mevcutIdler.includes(d.id));
  }
  // Tek seçenek varsa dağılım diye bir şey yok — paneli hiç gösterme.
  if(kararlar.length < 2) return "";
  // Süzülen kümede oranlar 100'e tamamlanmalı, yoksa eksik görünür.
  const toplam = kararlar.reduce((a,d)=>a+(d.yuzde||0),0) || 1;
  kararlar = kararlar.map(d => ({...d, yuzde: Math.round((d.yuzde||0)*100/toplam)}));
  kararlar.sort((a,b)=>(b.yuzde||0)-(a.yuzde||0));
  // "Diğer oyuncular ne yaptı?" gerçek veri ima ediyordu; oysa bu oranlar
  // vakaya sabit yazılı ve hiçbir yere gönderilmiyor. Koşullu kip kullanıp
  // kaynağını açıkça söylüyoruz — ayna etkisi korunuyor, iddia kalkıyor.
  let h = \`<div class="istat-panel"><div class="istat-baslik">Çoğu insan ne yapardı?</div>\`;
  for(const d of kararlar){
    const secili = d.id===secilenId;
    h += \`<div class="istat-satir">
      <div class="istat-et \${secili?'secili':''}">\${d.etiket}\${secili?' · <span class="senin">senin kararın</span>':''}</div>
      <div class="istat-bar-kutu">
        <div class="istat-bar \${secili?'secili':''}" style="width:\${d.yuzde||0}%"></div>
        <span class="istat-yuzde \${secili?'secili':''}">%\${d.yuzde||0}</span>
      </div>
    </div>\`;
  }
  h += \`<div class="istat-kaynak">Bu oranlar gerçek oyuncu verisi değil — oyunun bu durumda insanlardan beklediği dağılım.</div>\`;
  h += \`<div class="istat-not">Bu bir puan değil, kimse kazanmaz. Bir ayna.</div></div>\`;
  return h;
}

/* ---------- KİŞİLER PANELİ (katmanlı künye) ---------- */
function kisilerGoster(){
  const bilinen = oyun.tumBilinen();
  let h = ust() + '<div class="faz panel-ekran">';
  h += \`<div class="panel-baslik">☗ Kişiler</div>\`;
  let sayac=0;
  for(const kisi of KISILER.kisiler){
    // tanışıldı mı?
    const tanisti = kisi.tanisma==='her_zaman' || bilinen.has(kisi.tanisma);
    if(!tanisti) continue;
    sayac++;
    // en derin bilinen katmanı bul (son eşleşen)
    let tanim = '';
    for(const kat of kisi.katmanlar){
      if(kat.kosul==='her_zaman' || bilinen.has(kat.kosul)) tanim = kat.tanim;
    }
    // Portre de katmanlı olabilir: yüzdeki yara V3'ün tanık ipucu (tarif_yara),
    // künye onu V2'de göstermemeli (görsel stil sözleşmesi §7).
    let portreDosya = kisi.portre || '';
    for(const pk of (kisi.portre_katman||[])) if(bilinen.has(pk.kosul)) portreDosya = pk.portre;
    const pad = portreDosya.replace('.jpg','');
    const psrc = (typeof GORSELLER!=='undefined' && GORSELLER[pad]) ? GORSELLER[pad] : null;
    const portreHTML = psrc ? \`<img src="\${psrc}" alt="\${kisi.ad}">\` : '☗';
    h += \`<div class="kisi-kart">
      <div class="kisi-portre">\${portreHTML}</div>
      <div class="kisi-bilgi"><div class="ad">\${kisi.ad}</div><div class="tanim">\${tanim}</div></div>
    </div>\`;
  }
  if(sayac===0) h += \`<div class="bos-panel">Henüz kimseyle tanışmadın.</div>\`;
  h += \`<button class="buton ikincil" onclick="geriDon()">← Geri</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- DEFTER PANELİ ---------- */
/* Anı defteri notu. Değer düz metin olabilir ya da koşullu varyant dizisi:
   [{kosul: <ifade>, metin: "..."}, {kosul: "varsayilan", metin: "..."}]
   Aynı kararı farklı bilgiyle veren oyuncular aynı notu okumamalı — örneğin
   V6'da "sus" diyen biri her şeyi bilerek susmuş da olabilir, hiç
   öğrenemediği için de susmuş olabilir. */
function defterNotu(vid, kararId){
  const ham = (KISILER.defter[vid]||{})[kararId];
  if(!ham) return null;
  if(typeof ham === "string") return ham;
  if(!Array.isArray(ham)) return null;
  const bilinen = oyun.tumBilinen();
  for(const v of ham){
    if(v.kosul === "varsayilan") return v.metin;
    if(ifadeCalistir(v.kosul, bilinen, oyun.durum.seeds, oyun.durum.cengoBag, oyun.durum)) return v.metin;
  }
  return null;
}

function defterGoster(){
  let h = ust() + '<div class="faz panel-ekran">';
  h += \`<div class="panel-baslik">✎ Anı Defteri</div>\`;
  const tamamlanan = oyun.durum.tamamlanan;
  if(tamamlanan.length===0){
    h += \`<div class="bos-panel">Defter henüz boş. Her vaka bittiğinde Peri o günü buraya yazacak.</div>\`;
  } else {
    for(const vid of tamamlanan){
      const v = GAME.vakalar.find(x=>x.id===vid);
      const karar = oyun.durum.seeds["_karar_"+vid];
      const not = defterNotu(vid, karar);
      if(not) h += \`<div class="defter-kayit"><div class="v">\${v.baslik}</div><div class="n">\${not}</div></div>\`;
    }
  }
  h += \`<button class="buton ikincil" onclick="geriDon()">← Geri</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* panelden geri dönüş: aktif vaka varsa araştırmaya, yoksa masaya */
function geriDon(){
  if(oyun.durum.aktif) arastirmaFazi(); else masaGoster();
}

/* ---------- SON EKRANI ---------- */
function sonEkrani(){
  muzikCal('final');
  const d = oyun.durum;
  const cengoSatir = {
    "Mesafeli":"Cengo çekip gitti.",
    "Yoldaş":"Cengo mesleki bir vedayla ayrıldı; yollar ayrıldı.",
    "Yakın":"Cengo yanında kaldı — aranızda bir şey asılı, söze dökülmemiş.",
    "Bağlı":"Cengo, karanlığın ortasında sana kalan tek insan oldu."
  }[oyun.cengoDurum()];
  // NOT: anahtar 'hepsi' olmalı — karar seed_yaz'ı onu yazıyor. Eskiden
  // 'hepsini_ifsa' yazıyordu ve o final cümlesi hiç görünmüyordu.
  // Zinciri çözemeyen oyuncu "mimarlar" diye birilerinin varlığını bilmiyor.
  // Aynı karar (İlyas'ı vermek) iki bilgi durumundan da verilebiliyor.
  const zinciriBiliyor = oyun.tumBilinen().has("zincir_tam");
  const fk = {
    "ilyas": zinciriBiliyor
      ? "Tetikçiyi verdin; mimarlar gölgede kaldı."
      : "Elindeki tek ismi verdin. Arkasında biri var mıydı, hiç öğrenemedin.",
    "cavit":"Mimarı verdin; zincir koptu, ajans sarsıldı.",
    "ceyda":"Belki asıl aklı verdin — ama asla emin olamayacaksın.",
    "sus_bilerek":"Sustun. Elin temiz değil ama hayattasın.",
    "boslukla_kapat":"Dosyayı kapattın. Kimseyi vermedin — verecek kimsen yoktu.",
    "hepsi":"Hepsini yaktın — adalet, bedelini masumlara ödetti."
  }[d.seeds.final_karar] || "Dava kapandı.";
  const kayaSatir = d.seeds.kaya_gercek_ogrenildi
    ? "Kaya hiçbir şey bilmiyordu. Olmayan bir tehdit için öldü — bunu öğrendin."
    : "Kaya'nın bilip bilmediğini asla tam öğrenemedin. O boşluk seninle kalacak.";
  let h = ust() + '<div class="faz">';
  h += \`<div class="baslik"><div class="no">Son</div><h1>Dava Kapandı</h1></div>\`;
  h += \`<div class="giris-metin"><p>\${fk}</p></div>\`;
  h += \`<div class="giris-metin"><p class="anlati-italik">\${kayaSatir}</p></div>\`;
  h += \`<div class="sonuc-kutu"><h3>Cengo</h3><p>\${cengoSatir}</p>\`;
  // Sadakat ile emek sömürüsü aynı anda görünmeli. "Bağlı" ile "beş aylık
  // alacağı var" birbirini çürütmüyor — ikisi birden doğru, ve asıl ağırlık
  // orada. İlişkiyi düşürmek yerine faturayı görünür kılıyoruz.
  const gc = (oyun.durum.gecmis)||{};
  if(gc.cengoAcikAy > 0){
    h += \`<p class="cengo-alacak">Ama \${gc.cengoAcikAy} ay eline tam para geçmedi.
      Birikmiş alacağı <b>\${tl(gc.cengoAlacak)}</b>. Sana bir kez bile sormadı.</p>\`;
  }
  h += '</div>';
  h += cengoGosterge();
  if(d.seeds.sezon2_avukat_ipi){
    h += \`<div class="giris-metin"><p style="color:var(--altin);font-style:italic">Ve bir kırıntı: seni soyan avukatın izi. Peri'nin gözünde eski bir ateş... (Sezon 2)</p></div>\`;
  }
  h += \`<div class="bilgi">Paravan Dedektiflik · Pilot Sezon sonu</div>\`;
  h += \`<button class="buton ikincil" onclick="defterGoster()">Anı defterini oku</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- AÇILIŞ: kayıt varsa sürdürme ekranı ---------- */
function baslat(){
  sesAyarOku();
  // Tarayıcı/WebView kullanıcı dokunmadan ses çaldırmaz.
  // Dinleyiciler KALICI: ilk deneme reddedilirse (mobilde olur) sonraki
  // dokunuş yeniden dener. {once:true} olsaydı tek ret sonsuza dek susturdu.
  ["pointerdown","touchend","click","keydown"].forEach(e =>
    document.addEventListener(e, sesKilidiAc, true));
  sesKesfet();
  // buton dokunuş efekti (kaynak ve karar kendi efektlerini çalar)
  document.addEventListener("click", e => {
    if(e.target.closest(".buton, .ust-btn")) efektCal('dokun');
  });
  const k = kayitOku();
  if(!k){ prologGoster(); return; }
  // Deneme yüklemesi: kayıt bozuk ya da veri değişmişse sürdürme teklif etme
  const deneme = new Oyun(GAME);
  if(deneme.durumYukle(k).hata){ kayitSil(); prologGoster(); return; }
  devamEkrani(deneme);
}

function devamEkrani(ozet){
  const bitti = ozet.durum.tamamlanan.length;
  const a = ozet.durum.aktif;
  let h = '<div class="faz prolog-faz">';
  h += ustSade();
  h += \`<div class="baslik" style="padding-top:32px"><div class="no">Kaldığın Yer</div><h1>Dosya açık</h1></div>\`;
  h += \`<div class="giris-metin anlati-italik">\${bitti ? bitti + " iş kapandı." : "Ajans yeni açıldı."}</div>\`;
  if(a){
    h += \`<div class="sonuc-kutu"><h3>Masadaki dosya</h3><p>\${a.vaka.baslik}</p>\`;
    h += \`<p style="color:var(--sonuk);font-size:14px">\${a.arastirmaKalan} araştırma hakkı kaldı.</p></div>\`;
  }
  h += cengoGosterge();
  h += \`<button class="buton" onclick="kayittanDevam()">Kaldığın yerden devam et</button>\`;
  h += \`<button class="buton ikincil" onclick="yenidenBasla()">Baştan başla</button>\`;
  h += '</div>';
  app.innerHTML=h; scrollUst();
}

function kayittanDevam(){
  const r = oyun.durumYukle(kayitOku());
  if(r.hata){ kayitSil(); prologIndex=0; prologGoster(); return; }
  if(oyun.durum.aktif) arastirmaFazi(); else masaGoster();
}

function yenidenBasla(){
  if(!confirm("Kayıtlı ilerleme silinecek, oyun baştan başlayacak. Emin misin?")) return;
  kayitSil();
  const yeni = new Oyun(GAME);
  oyun.durum = yeni.durum;
  cengoSonAlev = null;   // yeni oyun: ilk gösterge çizimi yine sessiz
  prologIndex = 0; prologGoster();
}

baslat();
</script>
</body>
</html>`;

// Üretilen betiği yazmadan ÖNCE doğrula. Bu dosyanın tamamı bir şablon
// dizgisi olduğu için kaçış hataları (\\n yerine \\\\n) sessizce geçip
// tarayıcıda "Invalid or unexpected token" olarak patlayabiliyor.
{
  const m = html.match(/<script>([\s\S]*)<\/script>/);
  if(!m){ console.error("DERLEME DURDU: <script> bloğu bulunamadı."); process.exit(1); }
  try {
    new (require("vm").Script)(m[1], { filename: "index.html (script)" });
  } catch (e) {
    console.error("DERLEME DURDU — üretilen betik geçersiz:", e.message);
    const satir = e.lineNumber || (e.stack.match(/\(script\):(\d+)/)||[])[1];
    if(satir) console.error("  betik satırı:", satir, "→", (m[1].split("\n")[satir-1]||"").trim().slice(0,120));
    process.exit(1);
  }
}

// Görsel anahtarı sessiz bir tuzak: sayfa her aramada `.replace('.jpg','')`
// yapıyor, yani GORSELLER'e uzantılı gömülen bir görsel HİÇ bulunamaz —
// ekranda JS hatası değil, metin yer tutucu çıkar. Bir kez düşüldü (7 görsel
// .jpg anahtarıyla gömüldü, hiçbiri görünmedi, UI turu da yakalamadı).
// Atıfları üretilen sayfadan topluyoruz: veri, künye ve RUH_GORSEL'in hepsi
// oraya düştüğü için tek tarama üçünü birden kapsıyor.
{
  const anahtar = new Set(
    [...gorselveri.matchAll(/"([^"]+)":\s*"data:image\//g)].map(m => m[1])
  );
  const uzantili = [...anahtar].filter(k => k.endsWith(".jpg"));
  if (uzantili.length) {
    console.error("DERLEME DURDU — GORSELLER anahtarı uzantılı (sayfa .jpg'yi kırpıp");
    console.error("  arar, bu anahtarlar hiç bulunamaz):", uzantili.join(", "));
    process.exit(1);
  }
  const istenen = new Set(
    [...html.matchAll(/['"]([a-z0-9_]+\.jpg)['"]/g)].map(m => m[1])
  );
  const eksik = [...istenen].filter(d => !anahtar.has(d.replace(".jpg", "")));
  if (eksik.length) {
    console.error("DERLEME DURDU — sayfada atıf var ama gömülü görsel yok:", eksik.join(", "));
    process.exit(1);
  }
  console.log("  \u2713 görsel: " + istenen.size + " atıfın hepsi gömülü (" + anahtar.size + " anahtar)");
}

fs.writeFileSync("../index.html", html);
console.log("index.html yenilendi:", (html.length/1024).toFixed(0), "KB");
// Geliştirici modunun yanlışlıkla yayına gitmesi sessizce olabilecek bir hata.
// Bayrak üretilen sayfanın içinde yaşıyor, derleyicinin kapsamında değil —
// o yüzden ÇIKTIYA bakıyoruz: 🛠 düğmesi gerçekten basıldı mı?
const devAcik = /const DEV_MOD = true/.test(html);
console.log(devAcik
  ? "  ⚠ GELİŞTİRİCİ MODU AÇIK — 🛠 düğmesi çıktıda. Yayın öncesi DEV_MOD = false yap."
  : "  ✓ yayın modu — 🛠 düğmesi basılmadı");
