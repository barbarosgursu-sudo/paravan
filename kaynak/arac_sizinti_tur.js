// ARAÇ: sızıntı taraması (22 Ekim 2026, sahibinin isteği — her vakadan sonra koşulur; şablon 7. parça).
// İki iş yapar:
//  1) Yeni oyunu farklı yollardan oynar (rastgele ipucu alt kümesi, şüpheli, kanıt çifti, karar) ve HER
//     ekranda (araştırma, ipucu kartı, Kim yaptı?, onay, Dosya çözüldü, karar, sonuç, kaçan ipuçları,
//     Defter Zincir/Anı, Kişiler) oyuncunun o an BİLMEDİĞİ olgunun metnini / kısa adını ya da
//     türemeyen çıkarımın başlığını arar. Bulursa çıkış kodu 1.
//  2) Suçlamadan sonraki metinleri (MASUM satırları, karar ÖNİZLEME/SONUÇ/CENGO) her yolda oynayan
//     sahnelerin (yüzleşmeler + kovalamaca) yanına YENI_UI/sizinti_okuma.txt'ye basar. Birebir tarama
//     anlamca sızıntıyı yakalamaz ("kodu, fişi" gibi); bu dosya ELLE okunur: metin yalnız bu sahnelerin
//     söylediğini mi anıyor? (22 Ekim'de 9 sızıntı böyle bulundu.)
// Kullanım: cd kaynak && node build_html.js yeni && node arac_sizinti_tur.js [V3] [tur=40]
// Test değil, araç.
const fs = require("fs"), path = require("path");
const ARGS = process.argv.slice(2);
const VAKALAR = ARGS.filter(a => /^V\d+$/.test(a));
const TUR = Number(ARGS.find(a => /^\d+$/.test(a)) || 40);
const G = JSON.parse(fs.readFileSync(path.join(__dirname, "yeni", "game_data.json"), "utf-8"));
const hedefVakalar = VAKALAR.length ? VAKALAR : G.vakalar.filter(v => v.kim_yapti).map(v => v.id);

// --- 2) okuma dosyası
{
  const satir = s => ((s && s.satirlar) || []).map(x => (x.k === "not" ? "* " : String(x.k || "").toLocaleUpperCase("tr") + ": ") + (x.m || "")).filter(x => x.trim());
  let o = "SIZINTI OKUMASI — suçlamadan sonraki metin, yalnız aşağıdaki HER YOLDA oynayan sahnelerin söylediğini anabilir.\n";
  for (const id of hedefVakalar) {
    const v = G.vakalar.find(x => x.id === id), s = v.sahneler || {}, ky = v.kim_yapti;
    o += `\n\n######## ${id} · ${v.baslik}\n`;
    o += "\n== Giriş (herkes bilir): " + Object.keys(v.facts).filter(f => !v.clues.some(c => (c.reveals || []).includes(f))).join(", ") + "\n";
    for (const ad of Object.keys(s).filter(a => /^yuzlesme_|^kovalamaca$/.test(a)))
      o += `\n== sahne ${ad}${ad === "kovalamaca" ? " (HER YOLDA)" : ""}\n` + satir(s[ad]).map(x => "  " + x).join("\n") + "\n";
    o += "\n== OKUNACAK: MASUM satırları (yanlış suçlamada, o şüphelinin yüzleşmesinden + kovalamacadan sonra)\n";
    for (const [k, t] of Object.entries((ky.cozum || {}).masum || {})) o += `  [${k}] ${t}\n`;
    o += "\n== OKUNACAK: kararlar (kovalamacadan sonra)\n";
    for (const d of v.decisions) {
      o += `  [${d.id}] ÖNİZLEME: ${d.onizleme || ""}\n  [${d.id}] SONUÇ: ${d.sonuc || ""}\n`;
      for (const c of d.cengo_sonuc || []) o += `  [${d.id}] CENGO: ${c.metin}\n`;
    }
  }
  fs.mkdirSync(path.join(__dirname, "YENI_UI"), { recursive: true });
  fs.writeFileSync(path.join(__dirname, "YENI_UI", "sizinti_okuma.txt"), o);
}

const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage(); const jsh = []; p.on('pageerror', e => jsh.push(e.message));
  await p.goto('file://' + path.join(__dirname, '..', 'yeni', 'index.html')); await p.waitForTimeout(400);
  const r = await p.evaluate(({ TUR, VAKALAR }) => {
    let tohum = 11; const rnd = () => (tohum = (tohum * 16807) % 2147483647) / 2147483647;
    const bul = {}, ekranSay = {};
    const app = () => document.getElementById("app").innerText;
    const bak = (ekran, metin, bilinen, v, ekstraYasak = []) => {
      ekranSay[ekran] = (ekranSay[ekran] || 0) + 1;
      const ad = (v.kim_yapti || {}).kanit_ad || {};
      const yasak = [];
      for (const [o, t] of Object.entries(v.facts)) if (!bilinen.has(o)) { yasak.push([o, t]); if (ad[o]) yasak.push([o + " (kısa ad)", ad[o]]); }
      for (const k of v.knowledge || []) if (!bilinen.has(k.turetilen) && k.baslik) yasak.push([k.turetilen + " (çıkarım)", k.baslik]);
      for (const [o, t] of [...yasak, ...ekstraYasak]) if (t && metin.includes(t)) {
        const key = `${v.id} · ${ekran} · ${o}`; bul[key] = (bul[key] || 0) + 1;
      }
    };
    for (const vid of VAKALAR) for (let tur = 0; tur < TUR; tur++) {
      vakaAtla(vid); oyun.vakaBaslat(vid);
      const a = oyun.durum.aktif, v = a.vaka; a.arastirmaKalan = 99;
      const panel = (ek) => { const bl = oyun.tumBilinen();
        bak("zincir" + ek, (() => { const d = document.createElement("div"); d.innerHTML = defterZincir(); return d.textContent; })(), bl, v);
        kisilerGoster(); bak("kişiler" + ek, app(), bl, v); };
      arastirmaFazi(); bak("araştırma", app(), a.bilinen, v); panel("");
      const hedef = Math.floor(rnd() * (v.clues.length + 1));
      let acik;
      while (a.acilanKaynaklar.size < hedef && (acik = oyun.acikKaynaklar()).length) {
        const c = acik[Math.floor(rnd() * acik.length)], once = new Set(a.bilinen);
        const rr = oyun.kaynakAc(c.id); const yeni = [...a.bilinen].filter(x => !once.has(x));
        ipucuKarti(v.clues.find(x => x.id === c.id), rr, yeni); bak("ipucu kartı", app(), a.bilinen, v);
        arastirmaFazi(); bak("araştırma", app(), a.bilinen, v); panel("");
      }
      kimYaptiEkrani(); bak("kim yaptı: şüpheli", app(), a.bilinen, v);
      const sup = oyun.supheliler(); const s = sup[Math.floor(rnd() * sup.length)];
      kySupheli(s.id); const kn = oyun.kanitlar().map(x => x.id);
      for (const id of kn) { kySecim.acik = id; kimYaptiEkrani(false); bak("kim yaptı: kanıt ▾", app(), a.bilinen, v); }
      if (kn.length < 2) continue;
      const i = Math.floor(rnd() * kn.length); let j = Math.floor(rnd() * (kn.length - 1)); if (j >= i) j++;
      kySecim.kanitlar = [kn[i], kn[j]]; kimYaptiEkrani(false); bak("kim yaptı: seçili", app(), a.bilinen, v);
      kyOnay(); bak("onay", app(), a.bilinen, v);
      oyun.suclama(s.id, [kn[i], kn[j]]);
      const sonuc = a.suclama.sonuc;
      cozumEkrani(); bak("çözüm/" + sonuc, app(), a.bilinen, v);
      kararEkrani(); bak("karar/" + sonuc, app(), a.bilinen, v); panel("/suçlamadan sonra");
      const ds = oyun.acikKararlar(); const d = ds[Math.floor(rnd() * ds.length)];
      const bilinenOnce = new Set(a.bilinen);
      kararVerFaz(d.id); bak("karar sonucu", app(), bilinenOnce, v);
      kacanEkrani(vid); bak("kaçan ekranı", app(), bilinenOnce, v);
      const dd = document.createElement("div"); dd.innerHTML = defterAni(); bak("anı defteri", dd.textContent, bilinenOnce, v);
      panel("/vaka bitti");
    }
    return { bul, ekranSay };
  }, { TUR, VAKALAR: hedefVakalar });
  const ekran = Object.values(r.ekranSay).reduce((x, y) => x + y, 0), bul = Object.entries(r.bul);
  console.log(`${hedefVakalar.join(", ")} · ${TUR} yol/vaka · ${ekran} ekran tarandı`);
  for (const [k, n] of bul) console.log(`✗ SIZINTI ${k} (${n} kez)`);
  if (!bul.length) console.log("✓ birebir sızıntı yok");
  console.log(jsh.length ? `✗ JS hatası: ${jsh.slice(0, 3).join(" | ")}` : "✓ JS hatası yok");
  console.log("→ ELLE OKU: kaynak/YENI_UI/sizinti_okuma.txt (MASUM + karar metinleri yalnız yüzleşme/kovalamacanın söylediğini mi anıyor?)");
  await b.close();
  process.exit(bul.length || jsh.length ? 1 : 0);
})();
