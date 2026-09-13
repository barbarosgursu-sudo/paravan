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
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
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
   🛠 GELİŞTİRİCİ MODU — YAYINA ALIRKEN AŞAĞIDAKİ SATIRI false YAP
   ============================================================ */
const DEV_MOD = true;

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

function ust(geriMasa){
  return \`<div class="ust">
    <div class="marka">PARAVAN<small>DEDEKTİFLİK</small></div>
    <div class="ust-butonlar">
      \${DEV_MOD ? '<button class="ust-btn dev-btn" onclick="devPanel()">🛠</button>' : ''}
      <button class="ust-btn" onclick="kisilerGoster()">☗ Kişiler</button>
      <button class="ust-btn" onclick="defterGoster()">✎ Defter</button>
    </div>
  </div>\`;
}
function scrollUst(){ window.scrollTo(0,0); }

/* Cengo bağı: 5 alevlik gösterge (dolu=kehribar, boş=sönük) + küçük kelime */
function alevSvg(dolu){
  const renk = dolu ? 'var(--kehribar)' : 'none';
  const stroke = dolu ? 'var(--koz)' : 'var(--cizgi)';
  return \`<svg class="alev \${dolu?'dolu':'bos'}" width="18" height="22" viewBox="0 0 18 22" fill="\${renk}" stroke="\${stroke}" stroke-width="1.2">
    <path d="M9 1 C10 5 14 6 14 11 C14 15 11.5 18 9 18 C6.5 18 4 15 4 11 C4 8 6 7 6 4 C7.5 5.5 8.5 3 9 1 Z"/>
  </svg>\`;
}
function cengoGosterge(){
  const dolu = oyun.cengoAlevSayisi();   // 0-5
  const kelime = oyun.cengoDurum();
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
  const k = PROLOG[prologIndex];
  const sonMu = prologIndex === PROLOG.length - 1;
  let h = '<div class="faz prolog-faz">';
  // prologda üst şerit sade (Kişiler/Defter yok)
  h += \`<div class="ust"><div class="marka">PARAVAN<small>DEDEKTİFLİK</small></div></div>\`;
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
  const masada = oyun.masadakiVakalar();
  if(masada.length===0) return sonEkrani();
  let h = ust() + '<div class="faz">';
  h += \`<div class="masa-baslik"><div class="b">Ajansın Masası</div>
    <div class="alt">Hangi işe bakacaksın?</div></div>\`;
  for(const id of masada){
    const v = GAME.vakalar.find(x=>x.id===id);
    const yan = v.tur==='yan';
    const gad = (v.giris_gorsel||'').replace('.jpg','');
    const src = (typeof GORSELLER!=='undefined' && GORSELLER[gad]) ? GORSELLER[gad] : null;
    const arka = src ? \`style="background-image:linear-gradient(to bottom, rgba(15,35,56,.15) 0%, rgba(15,35,56,.55) 55%, rgba(15,35,56,.95) 100%), url('\${src}')"\` : '';
    h += \`<div class="dosya-afis \${yan?'yan':'omurga'} \${src?'':'gorselsiz'}" \${arka} onclick="vakaAc('\${id}')">
      <div class="afis-alt">
        <div class="tip">\${yan?'Yan iş':'Vaka'}</div>
        <h2>\${v.baslik}</h2>
        <div class="ipu">\${yan?'İstersen bak — zaman ve para senden gider':'Ana dosya'}</div>
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
function arastirmaFazi(){
  const a = oyun.durum.aktif;
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
    for(const c of acik){
      const tam = v.clues.find(x=>x.id===c.id);
      h += \`<div class="kaynak \${tam.bedelsiz?'bedelsiz':''}" onclick="kaynakAcFaz('\${c.id}')">
        <span class="ico">\${c.ico}</span><span class="ad">\${c.ad}</span>
        <span class="tur">\${c.tur}</span></div>\`;
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
  if(r.hata){ arastirmaFazi(); return; }
  kayitYaz();
  const c = oyun.durum.aktif.vaka.clues.find(x=>x.id===id);
  let h = ust() + '<div class="faz kanit-ekran">';
  h += \`<div class="baslik"><div class="no">\${c.ad}</div></div>\`;
  h += gorselHTML(c.gorsel);
  h += \`<div class="kanit-metin">\${r.text}<span class="meta">\${r.meta}</span></div>\`;
  h += \`<button class="buton" onclick="arastirmaFazi()">← Araştırmaya dön</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 3: KARAR ---------- */
function kararFazi(){
  const kararlar = oyun.acikKararlar();
  let h = ust() + '<div class="faz">';
  h += \`<div class="baslik"><div class="no">Karar</div><h1 style="font-size:22px">Ne yapacaksın?</h1></div>\`;
  h += \`<div class="uyari">Bu karar geri alınamaz.</div>\`;
  for(const k of kararlar){
    h += \`<div class="karar" onclick="kararVerFaz('\${k.id}')"><div class="et">\${k.etiket}</div></div>\`;
  }
  h += \`<button class="buton ikincil" onclick="arastirmaFazi()">← Biraz daha araştırayım</button></div>\`;
  app.innerHTML=h; scrollUst();
}

/* ---------- FAZ 4: SONUÇ + DEFTER NOTU ---------- */
function kararVerFaz(id){
  const vid = oyun.durum.aktif.id;
  const r = oyun.kararVer(id);
  if(r.hata){ alert(r.hata); return; }
  kayitYaz();   // hemen: kapatıp kararı geri almak yok
  const not = (KISILER.defter[vid]||{})[id];
  let h = ust() + '<div class="faz">';
  h += \`<div class="sonuc-kutu"><h3>Sonuç</h3><p>\${r.sonuc}</p></div>\`;
  if(not) h += \`<div class="defter-not">\${not}</div>\`;
  h += istatistikPanel(vid, id);
  h += cengoGosterge();
  if(devIzole){
    h += \`<div class="dev-uyari" style="margin-top:20px">🛠 İZOLE TEST — bu sonuç kaydedilmedi</div>\`;
    h += \`<button class="buton" onclick="devIzoleBitir()">🛠 Testi bitir, panele dön</button></div>\`;
  } else {
    h += \`<button class="buton" onclick="masaGoster()">Devam et</button></div>\`;
  }
  app.innerHTML=h; scrollUst();
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
function istatistikPanel(vid, secilenId){
  const v = GAME.vakalar.find(x=>x.id===vid);
  const kararlar = [...v.decisions].sort((a,b)=>(b.yuzde||0)-(a.yuzde||0));
  let h = \`<div class="istat-panel"><div class="istat-baslik">Diğer oyuncular ne yaptı?</div>\`;
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
  h += \`<div class="istat-not">Bu bir puan değil — kimse kazanmaz. Sadece insanların bu durumda ne seçtiğini gösteren bir ayna.</div></div>\`;
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
    const pad = (kisi.portre||'').replace('.jpg','');
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
      const not = (KISILER.defter[vid]||{})[karar];
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
  const d = oyun.durum;
  const cengoSatir = {
    "Mesafeli":"Cengo çekip gitti.",
    "Yoldaş":"Cengo mesleki bir vedayla ayrıldı; yollar ayrıldı.",
    "Yakın":"Cengo yanında kaldı — aranızda bir şey asılı, söze dökülmemiş.",
    "Bağlı":"Cengo, karanlığın ortasında sana kalan tek insan oldu."
  }[oyun.cengoDurum()];
  const fk = {
    "ilyas":"Tetikçiyi verdin; mimarlar gölgede kaldı.",
    "cavit":"Mimarı verdin; zincir koptu, ajans sarsıldı.",
    "ceyda":"Belki asıl aklı verdin — ama asla emin olamayacaksın.",
    "sus":"Sustun. Elin temiz değil ama hayattasın.",
    "hepsini_ifsa":"Hepsini yaktın — adalet, bedelini masumlara ödetti."
  }[d.seeds.final_karar] || "Dava kapandı.";
  const kayaSatir = d.seeds.kaya_gercek_ogrenildi
    ? "Kaya hiçbir şey bilmiyordu. Olmayan bir tehdit için öldü — bunu öğrendin."
    : "Kaya'nın bilip bilmediğini asla tam öğrenemedin. O boşluk seninle kalacak.";
  let h = ust() + '<div class="faz">';
  h += \`<div class="baslik"><div class="no">Son</div><h1>Dava Kapandı</h1></div>\`;
  h += \`<div class="giris-metin"><p>\${fk}</p></div>\`;
  h += \`<div class="giris-metin"><p class="anlati-italik">\${kayaSatir}</p></div>\`;
  h += \`<div class="sonuc-kutu"><h3>Cengo</h3><p>\${cengoSatir}</p></div>\`;
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
  h += \`<div class="ust"><div class="marka">PARAVAN<small>DEDEKTİFLİK</small></div></div>\`;
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
  prologIndex = 0; prologGoster();
}

baslat();
</script>
</body>
</html>`;

fs.writeFileSync("../index.html", html);
console.log("index.html yenilendi:", (html.length/1024).toFixed(0), "KB");
