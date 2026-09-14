// YAN-C "ADRES" — BORÇ TETİKLİ VAKA
//
// Tasarım tezi: borçtan çıkış VAR, ama bedava değil. Bu vaka batmış oyuncuya
// bir el uzatır; eli tutmanın bedelini saklamaz. Test, elin bedava olmadığını
// ve çaresizliğin kurtarıcı çağırmadığını koruyor.
const { Oyun, giderToplam } = require("./motor.js");
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
const KISILER = JSON.parse(fs.readFileSync("kisiler.json", "utf-8"));
let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? " → " + ek : "")); if (!ok) hata++; };
const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";
const ESIK = 80000;

// V1'i bitirip masayı açan yardımcı (borcu elle kuruyoruz)
function borcla(borc) {
  const o = new Oyun(g);
  o.vakaBaslat("V1"); o.kararVer("reddet");
  o.durum.borc = borc; o.durum.para = 0;
  return o;
}

console.log("=== ÇARESİZLİK KURTARICI ÇAĞIRMIYOR: eşik gerçek ===");
{
  k("borç yokken masada YOK", !borcla(0).masadakiVakalar().includes("YAN-C"));
  k("eşiğin bir lira altında YOK", !borcla(ESIK - 1).masadakiVakalar().includes("YAN-C"));
  k("eşikte masada VAR", borcla(ESIK).masadakiVakalar().includes("YAN-C"));
  k("çok borçluyken masada VAR", borcla(250000).masadakiVakalar().includes("YAN-C"));
  // İlk masada hiç vaka bitmemişken görünmemeli: oyuncu daha oyunun ne
  // olduğunu bilmiyor, borcu da yok.
  const ilk = new Oyun(g); ilk.durum.borc = 250000;
  k("hiç vaka bitmemişken (ilk masa) YOK", !ilk.masadakiVakalar().includes("YAN-C"));
}

console.log("\n=== GİTMİYOR: omurgaya geçmek onu düşürmüyor ===");
{
  // YAN-A/YAN-B 'sonra: <vaka>' ile gelir ve omurgaya geçilince kaybolur.
  // YAN-C 'sonra: her' ile gelir — borç sürdükçe masada kalır.
  const o = borcla(200000);
  k("V2 öncesi masada", o.masadakiVakalar().includes("YAN-C"));
  o.vakaBaslat("V2"); o.kararVer("kuru_rapor");
  k("V2'den sonra HÂLÂ masada", o.masadakiVakalar().includes("YAN-C"), o.masadakiVakalar().join(","));
  o.vakaBaslat("V3"); o.kararVer("tanigi_lekele");
  const kaldiMi = o.masadakiVakalar().includes("YAN-C");
  k(o.durum.borc > ESIK ? "V3'ten sonra hâlâ masada (borç sürüyor)"
                        : "borç eşiğin altına inince masadan kalktı",
    o.durum.borc > ESIK ? kaldiMi : !kaldiMi, "borç " + tl(o.durum.borc));
}

console.log("\n=== BÜTÇE: HER ŞEYİ BİLEN OYUNCU YOK ===");
{
  const v = g.vakalar.find(x => x.id === "YAN-C");
  const ucretli = v.clues.filter(c => !c.bedelsiz).length;
  k(`ücretli kaynak (${ucretli}) hak'tan (${v.arastirma}) fazla — seçmek zorunda`, ucretli > v.arastirma);

  // Bütçeyi harcamanın HER yolunu dene; adresi de tam resmi de aynı anda
  // alan bir yol OLMAMALI. "Kime alet olduğunu bil ve yine de sat" mümkün;
  // "her şeyi bil" değil.
  const uclu = [];
  const dene = (ac, harc) => {
    const o = borcla(200000);
    o.vakaBaslat("YAN-C");
    for (const id of ac) if (o.kaynakAc(id).hata) return;
    const alinabilir = o.acikKaynaklar().filter(c => {
      const t = v.clues.find(x => x.id === c.id);
      return t.bedelsiz || o.durum.aktif.arastirmaKalan > 0;
    });
    if (!alinabilir.length) {
      const b = o.bilinenler();
      uclu.push({ yol: ac, adres: b.includes("ayla_yeri"), tam: b.includes("neye_alet"),
                  kararlar: o.acikKararlar().map(x => x.id) });
      return;
    }
    for (const c of alinabilir) dene([...ac, c.id], harc + 1);
  };
  dene([], 0);
  k(`${uclu.length} harcama yolunun hepsinde en az bir karar açık`,
    uclu.every(x => x.kararlar.length > 0));
  k("hem adresi hem tam resmi alan yol YOK", !uclu.some(x => x.adres && x.tam),
    "adres: " + uclu.filter(x => x.adres).length + " yol, tam resim: " + uclu.filter(x => x.tam).length + " yol");
  k("adresi bulan yol VAR", uclu.some(x => x.adres));
  k("tam resmi gören yol VAR", uclu.some(x => x.tam));
  k("hiç araştırmayana yalnızca 'reddet' kalıyor",
    (() => { const o = borcla(200000); o.vakaBaslat("YAN-C");
             const kr = o.acikKararlar().map(x => x.id); return kr.length === 1 && kr[0] === "isi_reddet"; })());
}

console.log("\n=== BEDEL: ÇIKIŞ VAR AMA BEDAVA DEĞİL ===");
{
  const yolBul = (hedefKarar) => {
    const v = g.vakalar.find(x => x.id === "YAN-C");
    const gor = new Set(); let yol = null;
    const dfs = (ac, h) => {
      if (yol) return;
      const a = [...ac].sort().join("|"); if (gor.has(a)) return; gor.add(a);
      const o = borcla(200000); o.vakaBaslat("YAN-C");
      for (const id of ac) if (o.kaynakAc(id).hata) return;
      if (o.acikKararlar().some(d => d.id === hedefKarar)) { yol = ac; return; }
      for (const c of o.acikKaynaklar()) {
        const t = v.clues.find(x => x.id === c.id);
        const m = h + (t.bedelsiz ? 0 : 1);
        if (m > v.arastirma) continue;
        dfs([...ac, c.id], m);
      }
    };
    dfs([], 0); return yol;
  };
  const oyna = (kid, borc) => {
    const yol = yolBul(kid);
    if (!yol) { k(`${kid}: yol bulunamadı`, false); return null; }
    const o = borcla(borc); o.vakaBaslat("YAN-C");
    for (const id of yol) o.kaynakAc(id);
    const r = o.kararVer(kid);
    k(`${kid}: karar geçti`, !r.hata, r.hata || yol.join(" → "));
    return o;
  };

  const a = oyna("adresi_ver", 117000);
  k("adresi_ver borcu kapatıyor", a && a.durum.borc === 0, a ? tl(a.durum.borc) : "-");
  k("ama zengin etmiyor — geriye az şey kalıyor", a && a.durum.para < 20000, a ? tl(a.durum.para) : "-");

  const b = oyna("aylayi_uyar", 117000);
  k("aylayi_uyar PARA GÖTÜRÜYOR (borç büyüyor)", b && b.durum.borc > 117000, b ? tl(b.durum.borc) : "-");

  const c = oyna("isi_reddet", 117000);
  k("isi_reddet borcu olduğu gibi bırakıyor", c && c.durum.borc === 117000, c ? tl(c.durum.borc) : "-");

  const d = oyna("yanlis_adres", 117000);
  k("yanlis_adres borcu azaltıyor ama kapatmıyor",
    d && d.durum.borc > 0 && d.durum.borc < 117000, d ? tl(d.durum.borc) : "-");

  // Yan iş: sabit gider kesilmemeli (ikinci kira ödetmez)
  const e = oyna("isi_reddet", 200000);
  k("yan iş ay kirası ödetmiyor", e && e.durum.borc === 200000, e ? tl(e.durum.borc) : "-");
}

console.log("\n=== PARA/VİCDAN TERS SIRALI (K8'in istediği) ===");
{
  const v = g.vakalar.find(x => x.id === "YAN-C");
  const s = v.decisions.map(d => ({ id: d.id, para: d.para, bag: d.cengoBag }))
                       .sort((a, b) => a.bag - b.bag);
  for (const x of s) console.log("   " + x.id.padEnd(14) + tl(x.para).padStart(12) + "   vicdan " + (x.bag > 0 ? "+" : "") + x.bag);
  k("vicdan yükseldikçe para düşüyor", s.every((x, i) => i === 0 || x.para < s[i - 1].para));
  k("en vicdanlı seçenek CEBİNDEN ödetiyor", s[s.length - 1].para < 0, tl(s[s.length - 1].para));
}

console.log("\n=== DEFTER NOTLARI TAM ===");
{
  const v = g.vakalar.find(x => x.id === "YAN-C");
  const d = KISILER.defter["YAN-C"] || {};
  const eksik = v.decisions.filter(x => !d[x.id]).map(x => x.id);
  k("her kararın defter notu var", eksik.length === 0, eksik.join(","));
}

console.log("\n" + (hata === 0 ? "=== YAN-C TEST TAMAM ===" : "=== " + hata + " BAŞARISIZ ==="));
process.exit(hata ? 1 : 0);
