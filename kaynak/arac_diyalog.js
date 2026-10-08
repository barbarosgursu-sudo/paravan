// ARAÇ: diyalog dosyasını (sablon/vakalar/vakaN_diyalog.md) veriye yazar.
// Sahneler ve karar metinleri YALNIZ diyalog dosyasında yazılır; veri ondan üretilir.
// Böylece metin ile veri ayrışamaz (şablon 7. parça: "veri ya da görsel, formu
// değiştirmeden hikâyeyi değiştiremez").
//
// Kullanım:  cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md [V1]
// Yazar:     yeni/game_data.json  → vaka.sahneler.*, clues[].sahne, decisions[].{etiket,onizleme,sonuc,cengo_sonuc}
//            yeni/kisiler.json    → defter.<vaka>.<karar>
// Yapı (ipuçlarının açılma koşulu, olgular, Kim yaptı?) bu aracın işi değil; veride durur.
// Ardından: node dogrulayici.js yeni
const fs = require("fs");
const path = require("path");
const yaz = require("./arac_json_yaz.js");

const [dosya, vakaId = "V1"] = process.argv.slice(2);
if (!dosya) { console.error("kullanım: node arac_diyalog.js <diyalog.md> [vaka id]"); process.exit(1); }
const md = fs.readFileSync(dosya, "utf-8").split("\n");

// Konuşan adı → veri kimliği: "ÇAYCI" → "cayci", "TUBA_TEL" → "tuba_tel".
const kimlik = ad => ad.toLocaleLowerCase("tr").replace(/[çğıöşü]/g, c => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" })[c]).replace(/i̇/g, "i");
// "{arka: A9, cik}" → { arka: "A9", cik: true }
const ayar = s => Object.fromEntries(s.split(",").map(x => x.trim()).filter(Boolean).map(x => {
  const [k, ...v] = x.split(":"); return [k.trim(), v.length ? v.join(":").trim() : true];
}));
const temiz = s => s.replace(/\*\(([^)]*)\)\*/g, "($1)").trim();   // *(yutkunarak)* → (yutkunarak)

const hatalar = [];
const sahneler = {}, ipuclari = {}, kararlar = {};
let hedef = null, satirNo = 0;
for (const ham of md) {
  satirNo++;
  const s = ham.trim();
  let m;
  if ((m = s.match(/^## (sahne|ipucu|karar) (\S+)$/))) {
    hedef = { tur: m[1], ad: m[2], ayar: {}, satirlar: [], metin: {} };
    ({ sahne: sahneler, ipucu: ipuclari, karar: kararlar })[m[1]][m[2]] = hedef;
    continue;
  }
  if (/^#|^---$/.test(s)) { if (/^#/.test(s)) hedef = null; continue; }
  if (!hedef || !s) continue;
  if (s.startsWith("⚙")) {                          // ⚙ arka: A6 · figurler: peri, cengo
    for (const parca of s.slice(1).split("·")) {
      const mm = parca.trim().match(/^(arka|figurler|etiket):\s*(.+)$/);
      if (mm) hedef.ayar[mm[1]] = mm[1] === "figurler" ? mm[2].split(",").map(x => x.trim()) : mm[2].trim();
    }
    continue;
  }
  if (hedef.tur === "karar") {
    if ((m = s.match(/^\*\*(ÖNİZLEME|SONUÇ|CENGO|DEFTER):\*\*\s*(.+)$/))) hedef.metin[m[1]] = m[2].trim();
    else hatalar.push(`${satirNo}: karar bölümünde tanınmayan satır`);
    continue;
  }
  let ek = {};
  const am = s.match(/\s*\{([^}]*)\}\s*$/);
  const govde = am ? s.slice(0, am.index) : s;
  if (am) ek = ayar(am[1]);
  let satir;
  if ((m = govde.match(/^\*\*([^*\[]+?)(?:\s*\[([\w]+)\])?:\*\*\s*(.+)$/))) {
    satir = { k: kimlik(m[1].trim()) };
    if (m[2]) satir.i = m[2];
    satir.m = temiz(m[3]);
  } else if ((m = govde.match(/^\*(.+)\*$/))) {
    satir = { k: "not", m: temiz(m[1]) };
  } else { hatalar.push(`${satirNo}: tanınmayan satır: ${s.slice(0, 60)}`); continue; }
  if (!satir.m) { hatalar.push(`${satirNo}: boş metin`); continue; }
  hedef.satirlar.push({ ...satir, ...ek });
}

const sahneYap = h => ({ ...(h.ayar.arka ? { arka: h.ayar.arka } : {}),
  figurler: h.ayar.figurler || ["peri", "cengo"], satirlar: h.satirlar });

const vYol = path.join(__dirname, "yeni", "game_data.json"), kYol = path.join(__dirname, "yeni", "kisiler.json");
const G = JSON.parse(fs.readFileSync(vYol, "utf-8")), K = JSON.parse(fs.readFileSync(kYol, "utf-8"));
const v = G.vakalar.find(x => x.id === vakaId);
if (!v) { console.error("vaka yok: " + vakaId); process.exit(1); }

v.sahneler = Object.fromEntries(Object.entries(sahneler).map(([ad, h]) => [ad, sahneYap(h)]));
for (const [id, h] of Object.entries(ipuclari)) {
  const c = v.clues.find(x => x.id === id);
  if (!c) { hatalar.push(`ipucu '${id}' veride yok`); continue; }
  c.sahne = sahneYap(h);
}
for (const c of v.clues) if (!ipuclari[c.id]) hatalar.push(`veride ipucu '${c.id}' var ama diyalogda sahnesi yok`);
K.defter = K.defter || {}; K.defter[vakaId] = {};
for (const [id, h] of Object.entries(kararlar)) {
  const d = v.decisions.find(x => x.id === id);
  if (!d) { hatalar.push(`karar '${id}' veride yok`); continue; }
  for (const alan of ["ÖNİZLEME", "SONUÇ", "CENGO", "DEFTER"]) if (!h.metin[alan]) hatalar.push(`karar '${id}': ${alan} yok`);
  if (h.ayar.etiket) d.etiket = h.ayar.etiket;
  d.onizleme = h.metin["ÖNİZLEME"];
  d.sonuc = h.metin["SONUÇ"];
  d.cengo_sonuc = [{ kosul: "varsayilan", metin: h.metin.CENGO }];
  K.defter[vakaId][id] = h.metin.DEFTER;
}
for (const d of v.decisions) if (!kararlar[d.id]) hatalar.push(`veride karar '${d.id}' var ama diyalogda metni yok`);

if (hatalar.length) { console.error("YAZILMADI —\n  " + hatalar.join("\n  ")); process.exit(1); }
fs.writeFileSync(vYol, yaz(G) + "\n");
fs.writeFileSync(kYol, yaz(K) + "\n");
const say = Object.values(sahneler).concat(Object.values(ipuclari)).reduce((a, h) => a + h.satirlar.length, 0);
console.log(`✓ ${vakaId}: ${Object.keys(sahneler).length} sahne, ${Object.keys(ipuclari).length} ipucu sahnesi, ` +
  `${Object.keys(kararlar).length} karar, ${say} satır yazıldı. Sırada: node dogrulayici.js yeni`);
