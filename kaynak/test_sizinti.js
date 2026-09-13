// DURUM MATRİSİ / SIZINTI TESTİ
//
// Doğrulayıcının kuralları YAPIYA bakar: olgu zinciri tutuyor mu, kaynak
// erişilebilir mi, isim sızıyor mu. Ama bulunan hataların çoğu yapı olarak
// geçerli, ANLAM olarak yanlış: metin, oyuncunun o an sahip olmadığı bir
// olguyu varsayıyor. Şema doğrulaması bunu göremez.
//
// Bu test oyunu uçtan uca, farklı bilgi derinliklerinde oynar ve her ekranda
// gösterilen metni oyuncunun O ANDA bildikleriyle karşılaştırır.
//
// İma sözlüğü elle yazılır ve bilinçli olarak dardır: "şu kelime geçiyorsa
// şu olgu bilinmeli". Böylece yanlış alarm üretmez, ama yakaladığı her şey
// gerçek bir sızıntıdır.
const { Oyun } = require("./motor.js");
const fs = require("fs");
const g = JSON.parse(fs.readFileSync("game_data.json", "utf-8"));
const KISILER = JSON.parse(fs.readFileSync("kisiler.json", "utf-8"));

let hata = 0;
const k = (ad, ok, ek) => { console.log((ok ? "✓" : "✗ BAŞARISIZ") + " " + ad + (ek ? "\n     " + ek : "")); if (!ok) hata++; };

// ---------------------------------------------------------------------------
// İMA SÖZLÜĞÜ: metinde bu kelimeler geçiyorsa, yanındaki olgulardan EN AZ BİRİ
// oyuncunun elinde olmalı. Boş dizi = herkes bilir (girişte verilir).
// ---------------------------------------------------------------------------
const IMA = [
  { kelimeler: ["cinayet", "öldürüldü", "öldürttü"],
    olgular: ["cinayet_suphesi", "zincir_tam", "iten_ilyas", "el_var"],
    aciklama: "ölümün kaza değil cinayet olduğu" },

  { kelimeler: ["gizli çocuk", "çocuğa giden", "gizli iyilik", "isimsiz para", "her ay giden"],
    olgular: ["kaya_gizli_iyilik", "odeme_iz_acildi", "kaya_insani", "cocuk_bul_acildi", "odeme_kayaya_ait"],
    // V4 bu vakanın KONUSU: girişinde Cengo ödemeyi getiriyor, orada tanıtım var.
    haric: ["V4/giriş"],
    aciklama: "Kaya'nın gizlice bir çocuğa para gönderdiği" },

  { kelimeler: ["sevgili", "ilişkileri", "Cavit'le Ceyda"],
    olgular: ["cavit_ceyda", "tam_resim", "zincir_tam", "iliski_gor_acildi"],
    aciklama: "Cavit ile Ceyda'nın ilişkisi" },

  { kelimeler: ["itildi", "itiş", "iten"],
    olgular: ["dusus_acisi", "itis_kesin", "iten_ilyas", "cinayet_suphesi", "zincir_tam"],
    aciklama: "düşmenin itilme olduğu" },

  { kelimeler: ["yalnızdım", "yalnız olduğunu", "evde yalnız"],
    olgular: [],   // Ceyda bunu HİÇ söylemiyor — metinde geçmemeli
    aciklama: "Ceyda'nın 'yalnızdım' dediği (ifadesinde böyle bir şey yok)" },

  { kelimeler: ["kayıtlarına bakarken", "kayıtlarında", "dekont"],
    olgular: ["kaya_kayit_gordu", "gizli_dosya", "odeme_iz_acildi"],
    aciklama: "Kaya'nın mali kayıtlarına bakılmış olduğu" },
];

// ---------------------------------------------------------------------------
// Bir oyun gidişatını oynat, her ekranda gösterilen metni topla
// ---------------------------------------------------------------------------
function oyna({ ad, arastirmaDerinligi, yanVakalar, kararSecici, vakaDerinligi }) {
  const o = new Oyun(g);
  const ekranlar = [];
  const kaydet = (vaka, ekran, metin) => {
    if (metin && String(metin).trim()) {
      ekranlar.push({ vaka, ekran, metin: String(metin), bilinen: new Set(o.tumBilinen()) });
    }
  };

  let guvenlik = 0;
  while (o.masadakiVakalar().length && guvenlik++ < 40) {
    const masada = o.masadakiVakalar();
    const vid = yanVakalar ? masada[masada.length - 1] : masada[0];
    const vaka = g.vakalar.find(v => v.id === vid);

    const gr = o.vakaBaslat(vid);
    kaydet(vid, "giriş", gr.giris);

    // araştırma derinliği: 0 = hiç, 1 = bütçe kadar. vakaDerinligi ile
    // vaka vaka değiştirilebilir — belirli sızıntılar ancak "şurada derin,
    // burada sığ" oynayan bir oyuncuda ortaya çıkıyor.
    const derinlik = (vakaDerinligi && vid in vakaDerinligi) ? vakaDerinligi[vid] : arastirmaDerinligi;
    if (derinlik > 0) {
      let g2 = 0;
      while (o.acikKaynaklar().length && g2++ < 20) {
        const c = o.acikKaynaklar()[0];
        const tam = vaka.clues.find(x => x.id === c.id);
        if (!tam.bedelsiz && o.durum.aktif.arastirmaKalan <= 0) break;
        const r = o.kaynakAc(c.id);
        if (r.hata) break;
        kaydet(vid, "kaynak:" + c.id, r.text);
        kaydet(vid, "kaynak:" + c.id + ":meta", r.meta);
      }
    } else {
      // hiç araştırma yapmayan oyuncu da bedelsiz kaynakları görür
      for (const c of o.acikKaynaklar()) {
        const tam = vaka.clues.find(x => x.id === c.id);
        if (!tam.bedelsiz) continue;
        const r = o.kaynakAc(c.id);
        if (r.hata) continue;
        kaydet(vid, "kaynak:" + c.id, r.text);
        kaydet(vid, "kaynak:" + c.id + ":meta", r.meta);
      }
    }

    const kararlar = o.acikKararlar();
    if (!kararlar.length) throw new Error(vid + ": karar açılmadı");
    for (const d of kararlar) kaydet(vid, "karar-etiket", d.etiket);

    const secilen = kararSecici(kararlar, vid);
    const r = o.kararVer(secilen);
    kaydet(vid, "sonuç:" + secilen, r.sonuc);

    // anı defteri notu (koşullu varyantlar dahil)
    const ham = (KISILER.defter[vid] || {})[secilen];
    if (typeof ham === "string") kaydet(vid, "defter:" + secilen, ham);
    else if (Array.isArray(ham)) {
      const v = ham.find(x => x.kosul === "varsayilan");
      if (v) kaydet(vid, "defter:" + secilen, v.metin);
    }
  }
  return { ad, ekranlar, oyun: o };
}

// ---------------------------------------------------------------------------
console.log("=== GİDİŞATLAR OYNANIYOR ===");
const gidisatlar = [];
for (const [ad, derinlik, yan, vakaDerinligi] of [
  ["EN AZ BİLGİ (hiç araştırma yok, yan vaka yok)", 0, false, null],
  ["TAM ARAŞTIRMA (bütçe sonuna kadar, yan vaka yok)", 1, false, null],
  ["HER ŞEY (tüm bütçe + yan vakalar)", 1, true, null],
  // V4'ü savsaklayıp komployu çözen oyuncu: V6 ona gizli çocuğu anlatmamalı
  ["V4 SAVSAKLANDI ama komplo çözüldü", 1, false, { "V4": 0 }],
  // V1'i savsaklayıp sonrasını derin oynayan oyuncu
  ["V1 SAVSAKLANDI, gerisi derin", 1, false, { "V1": 0 }],
]) {
  try {
    const r = oyna({ ad, arastirmaDerinligi: derinlik, yanVakalar: yan, vakaDerinligi,
                     kararSecici: (kararlar) => kararlar[0].id });
    gidisatlar.push(r);
    k(ad, true, r.ekranlar.length + " ekran · " + r.oyun.durum.tamamlanan.length + " vaka");
  } catch (e) {
    k(ad, false, e.message);
  }
}

// ---------------------------------------------------------------------------
console.log("\n=== METİN, OYUNCUNUN BİLMEDİĞİ OLGUYU VARSAYIYOR MU? ===");
{
  const bulgular = [];
  for (const gd of gidisatlar) {
    for (const e of gd.ekranlar) {
      for (const im of IMA) {
        if ((im.haric || []).includes(e.vaka + "/" + e.ekran)) continue;   // tanıtım yeri
        const gecen = im.kelimeler.find(kw =>
          e.metin.toLocaleLowerCase("tr").includes(kw.toLocaleLowerCase("tr")));
        if (!gecen) continue;
        const biliyor = im.olgular.some(f => e.bilinen.has(f));
        if (!biliyor) {
          bulgular.push(
            `[${gd.ad.split(" (")[0]}] ${e.vaka}/${e.ekran}\n` +
            `       "${gecen}" geçiyor → ${im.aciklama} varsayılıyor\n` +
            `       ama oyuncu bunu bilmiyor (gereken: ${im.olgular.join(" / ") || "HİÇBİRİ — metin yanlış"})\n` +
            `       metin: ${e.metin.slice(0, 130)}`);
        }
      }
    }
  }
  k(`sızıntı yok (${gidisatlar.reduce((a, b) => a + b.ekranlar.length, 0)} ekran tarandı)`,
    bulgular.length === 0, bulgular.join("\n\n"));
}

// ---------------------------------------------------------------------------
console.log("\n=== SONUÇ METNİ, VERİLMEYEN BİR KARARI ANLATIYOR MU? ===");
{
  // "Şüpheni gömdün" diyen bir sonuç, oyuncunun şüphe edinmiş olmasını
  // gerektirir. Hiç araştırma yapmayan oyuncuya bunu söylemek yanlış.
  const KOSULLU_SONUC = [
    { kelimeler: ["şüpheni gömdün", "şüpheni", "gömdün"], olgu: "cinayet_suphesi",
      aciklama: "gömülecek bir şüphe" },
  ];
  const bulgular = [];
  const azBilgi = gidisatlar.find(x => x.ad.startsWith("EN AZ"));
  if (azBilgi) {
    for (const e of azBilgi.ekranlar.filter(x => x.ekran.startsWith("sonuç:") || x.ekran.startsWith("defter:"))) {
      for (const ks of KOSULLU_SONUC) {
        const gecen = ks.kelimeler.find(kw => e.metin.toLocaleLowerCase("tr").includes(kw));
        if (gecen && !e.bilinen.has(ks.olgu)) {
          bulgular.push(`${e.vaka}/${e.ekran}: "${gecen}" → ${ks.aciklama} yok\n       ${e.metin.slice(0, 120)}`);
        }
      }
    }
  }
  k("kanıtsız oyuncuya sahip olmadığı şüphe atfedilmiyor", bulgular.length === 0, bulgular.join("\n\n"));
}

// ---------------------------------------------------------------------------
console.log("\n=== DURUM MATRİSİ RAPORU ===");
{
  // İnsan gözüyle okunacak döküm: her gidişatta hangi ekranda ne yazıyor.
  // Otomatik kural her şeyi yakalayamaz; bu dosya elle okunmak içindir.
  const satirlar = [];
  for (const gd of gidisatlar) {
    satirlar.push("", "=".repeat(78), gd.ad, "=".repeat(78));
    let sonVaka = null;
    for (const e of gd.ekranlar) {
      if (e.vaka !== sonVaka) { satirlar.push("", "--- " + e.vaka + " ---"); sonVaka = e.vaka; }
      satirlar.push(`  [${e.ekran}]`);
      satirlar.push("    " + e.metin.replace(/\n/g, "\n    "));
    }
  }
  fs.writeFileSync("_durum_matrisi.txt", satirlar.join("\n") + "\n");
  k("rapor yazıldı (_durum_matrisi.txt)", true, satirlar.length + " satır");
}

console.log(hata ? `\n=== ${hata} BAŞARISIZ ===` : "\n=== SIZINTI TESTİ TAMAM ===");
process.exit(hata ? 1 : 0);
