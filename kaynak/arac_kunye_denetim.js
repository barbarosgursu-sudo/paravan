/* Künye katmanlarını insan gözüne serer. Test değil, araç —
   `test_*.js` döngüsüne girmez (arac_ui_tur.js gibi).

       node arac_kunye_denetim.js

   NEDEN VAR: künye, oyuncunun her an açabildiği bir ekran. Bir katman
   metni, o katmanın koşulunun garanti ettiğinden fazlasını söylerse
   Nurcan kuralı delinir — ve bu sessizdir: oyun çalışır, test geçer,
   kimse fark etmez. Bu yüzey uzun süre denetimsiz kaldı ve iki sızıntı
   barındırdı:

     · İlyas / iten_ilyas  → "husumeti yok, sanki biri onu sürmüş"
       (ilyas_sebep_yok ve el_var henüz kazanılmamışken)
     · Ceyda / cavit_ceyda_sevgili → "cinayetin bir ucu onda"
       (ceyda_pay kanonda ASLA çözülmez)

   Doğrulayıcı K1b yalnızca koşulun var olduğunu denetleyebiliyor; metnin
   fazla söyleyip söylemediği anlamsal bir soru ve mekanik kural bunu
   yanlış pozitif üretmeden yapamıyor ("Kaya'nın dul eşi" sızıntı değildir).
   Bu yüzden karar insanda: aşağıdaki tablo her katmanı, koşulunun hak
   ettiği olgu metinleriyle yan yana basar.

   NASIL OKUNUR: her katman için "hak edilen" listesine bak. Katman metni,
   o listedeki olguların söylemediği bir şey iddia ediyorsa sızıntıdır.
   Ayrıca kanonun ÇÖZÜLMEZ dediği olgular (kanon.belirsiz) hakkında hiçbir
   katman kesin konuşamaz. */
const fs = require("fs");
const { GAME } = require("./game_data.js");
const KISILER = JSON.parse(fs.readFileSync("kisiler.json", "utf-8"));

const olguMetni = {}, sahipVaka = {}, acan = {};
for (const v of GAME.vakalar) {
  for (const [o, t] of Object.entries(v.facts || {})) { olguMetni[o] = t; sahipVaka[o] = v; }
  for (const k of v.knowledge || []) sahipVaka[k.turetilen] = v;
  for (const c of v.clues) for (const r of c.reveals || []) acan[r] = `${v.id}/${c.id}`;
  for (const k of v.knowledge || []) acan[k.turetilen] ??= `${v.id}/(türetilen)`;
  for (const g of v.giris || []) for (const a of g.acilan || []) acan[a] ??= `${v.id}/(giriş)`;
}
// türetilen → bileşenleri (sabit nokta)
function genislet(o) {
  const v = sahipVaka[o];
  const out = new Set([o]);
  if (!v) return out;
  let degisti = true;
  while (degisti) {
    degisti = false;
    for (const k of v.knowledge || []) {
      if (!out.has(k.turetilen)) continue;
      for (const x of JSON.stringify(k.ifade).match(/[a-z0-9_]+/g) || [])
        if ((olguMetni[x] || (v.knowledge || []).some(y => y.turetilen === x)) && !out.has(x)) {
          out.add(x); degisti = true;
        }
    }
  }
  return out;
}

const BELIRSIZ = new Set(GAME.kanon.belirsiz || []);
const ISTISNA = GAME.kanon.belirsiz_istisna || {};
console.log("KÜNYE DENETİMİ — katman metni koşulunun hak ettiğinden fazlasını söylüyor mu?");
console.log("═".repeat(78));
for (const kisi of KISILER.kisiler) {
  console.log(`\n▸ ${kisi.ad}   (tanışma: ${kisi.tanisma})`);
  for (const kat of kisi.katmanlar || []) {
    const kos = String(kat.kosul).split(":")[0];
    const hak = [...genislet(kos)].sort();
    console.log(`\n  koşul: ${kat.kosul}   ← açan: ${acan[kos] || "(tohum/her_zaman)"}`);
    console.log(`  metin: ${kat.tanim}`);
    console.log(`  hak edilen olgular:`);
    if (!hak.some(o => olguMetni[o])) console.log(`     (olgu yok — tohum ya da her_zaman)`);
    for (const o of hak) if (olguMetni[o]) console.log(`     · ${o}: ${olguMetni[o]}`);
  }
}
const belirsizListe = [...BELIRSIZ].map(o => ISTISNA[o] ? `${o} (istisna: ${ISTISNA[o]})` : o);
console.log("\n" + "═".repeat(78));
console.log("ÇÖZÜLMEZ olgular — hiçbir katman bunlar hakkında kesin konuşamaz:");
console.log("  " + belirsizListe.join(", "));
