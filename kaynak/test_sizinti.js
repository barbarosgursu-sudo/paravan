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
const { Oyun, ifadeCalistir } = require("./motor.js");
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
    olgular: ["cinayet_suphesi", "zincir_tam", "iten_ilyas", "el_var",
              "tam_resim", "cinayet_sebep", "cavit_azmettiren", "itis_kesin"],
    aciklama: "ölümün kaza değil cinayet olduğu" },

  { kelimeler: ["gizli çocuk", "çocuğa giden", "gizli iyilik", "isimsiz para", "her ay giden"],
    olgular: ["kaya_gizli_iyilik", "odeme_iz_acildi", "kaya_insani", "cocuk_bul_acildi", "odeme_kayaya_ait"],
    // V4 bu vakanın KONUSU: girişinde Cengo ödemeyi getiriyor, orada tanıtım var.
    haric: ["V4/giriş"],
    aciklama: "Kaya'nın gizlice bir çocuğa para gönderdiği" },

  { kelimeler: ["sevgili", "ilişkileri", "Cavit'le Ceyda"],
    olgular: ["cavit_ceyda", "tam_resim", "zincir_tam", "iliski_gor_acildi",
              "cavit_ceyda_sevgili", "iliski_acik"],
    aciklama: "Cavit ile Ceyda'nın ilişkisi" },

  { kelimeler: ["itildi", "itiş", "iten"],
    olgular: ["dusus_acisi", "itis_kesin", "iten_ilyas", "cinayet_suphesi", "zincir_tam",
              "foto_teshis", "tanik_gordu"],
    aciklama: "düşmenin itilme olduğu" },

  { kelimeler: ["yalnızdım", "yalnız olduğunu", "evde yalnız"],
    olgular: [],   // Ceyda bunu HİÇ söylemiyor — metinde geçmemeli
    aciklama: "Ceyda'nın 'yalnızdım' dediği (ifadesinde böyle bir şey yok)" },

  { kelimeler: ["kayıtlarına bakarken", "kayıtlarında", "dekont"],
    olgular: ["kaya_kayit_gordu", "gizli_dosya", "odeme_iz_acildi"],
    aciklama: "Kaya'nın mali kayıtlarına bakılmış olduğu" },

  // --- 2. inceleme turunda bulunanlar -------------------------------------
  { kelimeler: ["onu kullanan", "kullananın", "azmettiren", "mimarıydı", "asıl mimar"],
    olgular: ["zincir_tam", "cavit_ilyas_bag", "el_var"],
    aciklama: "İlyas'ı birinin kullandığı / Cavit'in azmettiren olduğu" },

  { kelimeler: ["aldattığını", "aldatıldığını", "sevgilinin onu istemediğinden"],
    olgular: ["cavit_ceyda", "zincir_tam", "iliski_gor_acildi", "kaya_bilmiyordu"],
    aciklama: "Ceyda'nın Kaya'yı aldattığı" },

  { kelimeler: ["bir çocuğu yaşatırken", "aile, çocuk", "o çocuğa"],
    olgular: ["kaya_gizli_iyilik", "kaya_insani", "odeme_kayaya_ait", "cocuk_bul_acildi"],
    aciklama: "Kaya'nın bir çocuğu yaşattığı (V4 bilgisi)" },

  { kelimeler: ["bu bir kaza değildi", "kaza değildi — bu kadarından eminsin"],
    olgular: ["cinayet_suphesi", "iten_ilyas", "el_var", "dusus_acisi", "zincir_tam"],
    aciklama: "ölümün kaza olmadığının KESİN bilindiği" },

  // --- 3. inceleme turunda bulunanlar -------------------------------------
  { kelimeler: ["doğruyu söyleyen", "doğru söyleyen tek kişi"],
    olgular: ["iten_ilyas", "foto_teshis", "zincir_tam"],
    aciklama: "tanığın doğru söylediğinin DOĞRULANMIŞ olduğu" },

  { kelimeler: ["V2'deki", "V2deki", "o silik tahsildar"],
    olgular: ["ilyas_tahsildar"],
    aciklama: "İlyas'la V2'de karşılaşılmış olduğu" },

  { kelimeler: ["İlyas ile Cavit", "Cavit neden İlyas"],
    olgular: ["iten_ilyas", "ilyas_isim", "ilyas_tahsildar", "zincir_tam"],
    aciklama: "İlyas ile Cavit arasında bir bağ olduğu" },

  // --- Fable turu -----------------------------------------------------------
  { kelimeler: ["İlyas gibi", "sıradan bir tahsildar için", "İlyas onun için"],
    olgular: ["ilyas_tahsildar", "ilyas_isim", "iten_ilyas", "zincir_tam"],
    aciklama: "İlyas'ın adının ve tahsildar olduğunun bilindiği" },
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
  // İlyas'ı HİÇ tanımayan oyuncu: V2'de kapıyı gözlemedi (tahsildar yok), V3'te hiç
  // araştırmadan tanığı lekeledi (isim yok) — ama V5'i derin kazıyor. V5 metinleri
  // ona İlyas'ın adını da tahsildar olduğunu da hediye etmemeli.
  ["İLYAS HİÇ TANINMADI (V2+V3 sığ), V5 derin", 1, false, { "V2": 0, "V3": 0 }],
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
console.log("\n=== VARSAYILAN VARYANTLAR NEYİ VARSAYIYOR? ===");
{
  // Oynanan gidişatlar her varyantı tetiklemiyor; bu tarama YAPISAL.
  // Koşullu bir metnin VARSAYILAN varyantı, hiçbir koşul sağlanmadığında
  // gösterilen metindir — yani o yüzeyi gören EN AZ BİLGİLİ oyuncunun
  // okuduğu şey. Soru şu: o oyuncunun elinde ne olduğu KESİN?
  //
  // Her yüzeyin kendi garantisi var:
  //   kaynak metni  → needs + reveals (kaynağın kendisi o bilgiyi VERİYOR)
  //   karar sonucu  → kararın gate'i
  //   defter notu   → ait olduğu kararın gate'i
  //   giriş         → giris.acilan
  // Bu garantiler olmadan tarama her doğru metni de yakalardı: tanığın
  // "itildi" demesi sızıntı değil, tanık ifadesinin ta kendisi.
  const olgulariTopla = (ifade, out) => {
    out = out || new Set();
    if (!ifade) return out;
    if (typeof ifade === "string") { if (ifade !== "yok") out.add(ifade); return out; }
    if (Array.isArray(ifade)) { ifade.forEach(x => olgulariTopla(x, out)); return out; }
    for (const anahtar of ["all", "any"]) if (ifade[anahtar]) olgulariTopla(ifade[anahtar], out);
    if (ifade.not) olgulariTopla(ifade.not, out);
    if (ifade.seed) out.add(ifade.seed + (ifade.esit === undefined ? "" : ":" + ifade.esit));
    return out;
  };
  // Türetme İKİ YÖNLÜ: türetilmişe sahipsen bileşenlerine de sahipsin, VE
  // bileşenlerin hepsine sahipsen türetilmişe de sahipsin. Tek yön yetmiyordu:
  // foto_goster 'foto_teshis' veriyor, 'iten_ilyas' ondan TÜRÜYOR — ileri yön
  // olmadan kaynağın kendi metni sızıntı sayılıyordu.
  // Bir olguyu ÜRETEN kaynak açılmış olmalı; o hâlde onun needs'i ve diğer
  // reveals'ı da elde demektir. Bu olmadan zincirin sonundaki kaynaklar
  // yanlış alarm veriyordu: ceyda_derin'e ulaşmak iliski_gor'dan geçiyor,
  // iliski_gor da 'cinayet_sebep'i veriyor.
  // Aynı olguyu birden çok kaynak üretiyorsa yalnızca ORTAK garantiler
  // sayılır — yoksa denetim gevşer ve gerçek sızıntıyı kaçırır.
  const uretenlerdenGelen = (vaka, olgu) => {
    const uretenler = (vaka.clues || []).filter(c => (c.reveals || []).includes(olgu));
    if (!uretenler.length) return null;
    let ortak = null;
    for (const c of uretenler) {
      const kume = new Set([...(c.reveals || []), ...olgulariTopla(c.needs)]);
      ortak = ortak === null ? kume : new Set([...ortak].filter(x => kume.has(x)));
    }
    return ortak;
  };
  const genislet = (vaka, havuz) => {
    let degisti = true;
    while (degisti) {
      degisti = false;
      for (const olgu of [...havuz]) {
        const gelen = uretenlerdenGelen(vaka, olgu);
        if (!gelen) continue;
        for (const f of gelen) if (!havuz.has(f)) { havuz.add(f); degisti = true; }
      }
      for (const t of (vaka.knowledge || [])) {
        if (havuz.has(t.turetilen)) {
          for (const f of olgulariTopla(t.ifade)) if (!havuz.has(f)) { havuz.add(f); degisti = true; }
        } else if (ifadeCalistir(t.ifade, havuz, {}, 0, {})) {
          havuz.add(t.turetilen); degisti = true;
        }
      }
    }
    return havuz;
  };

  const bulgular = [];
  const varsayilanMetin = (x) => {
    if (typeof x === "string") return x;                 // koşulsuz = herkese
    if (!Array.isArray(x)) return "";
    const v = x.find(y => y.kosul === "varsayilan");
    return v ? v.metin : "";
  };
  const bak = (yer, ham, havuz) => {
    const m = varsayilanMetin(ham);
    if (!m) return;
    for (const im of IMA) {
      if ((im.haric || []).includes(yer)) continue;
      if (!im.olgular.length) continue;                  // "hiç geçmemeli" kuralı ayrı
      if (im.olgular.some(f => havuz.has(f))) continue;  // yüzeyin kendi garantisi
      const gecen = im.kelimeler.find(kw =>
        m.toLocaleLowerCase("tr").includes(kw.toLocaleLowerCase("tr")));
      if (!gecen) continue;
      bulgular.push(`${yer}\n       varsayılan varyantta "${gecen}" geçiyor → ${im.aciklama} varsayılıyor\n` +
                    `       garantili olgular: ${[...havuz].join(", ") || "(yok)"}\n` +
                    `       "${m.slice(0, 130)}"`);
    }
  };

  for (const v of g.vakalar) {
    const girisOlgulari = new Set((v.giris || []).flatMap(x => x.acilan || []));
    for (const c of v.clues) {
      const havuz = genislet(v, new Set([
        ...girisOlgulari,
        ...olgulariTopla(c.needs),
        ...(c.reveals || []),
      ]));
      // BAŞLIK da taranıyor: araştırma ekranında AÇMADAN ÖNCE görünen tek şey
      // o. "Cavit neden İlyas'ı önemsiyor?" başlığı, İlyas'ı hiç teşhis
      // etmemiş oyuncuya ilişkinin varlığını peşinen söylüyordu.
      bak(v.id + "/" + c.id + ":başlık", c.ad, havuz);
      bak(v.id + "/" + c.id, c.text, havuz);
      bak(v.id + "/" + c.id + ":meta", c.meta, havuz);
    }
    for (const d of v.decisions) {
      const havuz = genislet(v, new Set([...girisOlgulari, ...olgulariTopla(d.gate)]));
      bak(v.id + "/" + d.id, d.sonuc, havuz);
      const not = (KISILER.defter[v.id] || {})[d.id];
      if (not) bak("defter " + v.id + "/" + d.id, not, havuz);
    }
    const varsayilanGiris = (v.giris || []).find(x => x.kosul === "varsayilan");
    if (varsayilanGiris)
      bak(v.id + "/giriş", varsayilanGiris.metin, genislet(v, new Set(varsayilanGiris.acilan || [])));
  }

  k("hiçbir varsayılan varyant hak edilmemiş olgu varsaymıyor",
    bulgular.length === 0, bulgular.join("\n\n"));
}

console.log("\n=== SABİT FİNANSAL DURUM İDDİASI VAR MI? ===");
{
  // Ekonomi dinamik, metinler sabit. "Borç kapandı" diyen bir cümle, borcun
  // bir kısmı kalan oyuncuya yalan söyler; "kasa boş" diyen bir defter notu
  // 200.000 ₺'si olana yalan söyler. Rakamı hesap kutusu gösteriyor zaten —
  // metnin işi EYLEMİ anlatmak, DURUMU değil.
  //
  // Yasak olan: Peri'nin kasası/borcu hakkında kesin durum iddiası.
  // Serbest olan: olay bildiren cümleler ("para geldi", "para biter") ve
  // başka birinin parasızlığı (Cengo, Ceyda, Nadire).
  const YASAK = [
    { kalip: /borç\s*(biraz\s*)?(kapan|bitti|nefes)/i, ne: "borcun kapandığı/rahatladığı" },
    { kalip: /kasa[mn]?\s*(boş|doldu|rahat)/i,          ne: "kasanın boş/dolu olduğu" },
    { kalip: /ajans\s*(rahat|yaşar|nefes al[iı]r)/i,     ne: "ajansın rahat olduğu" },
    { kalip: /ödenmiş bir kira/i,                        ne: "kiranın ödendiği" },
    { kalip: /kasa zaten (dardı|yoktu)/i,                ne: "kasanın dar/yok olduğu" },
    { kalip: /Peri (de )?beş parasız/i,                  ne: "Peri'nin beş parasız olduğu" },
    // 3. inceleme turu: bekçinin kalıp listesi eksikti, üç defter notu kaçtı.
    { kalip: /kasada\s*(para\s*)?(yok|kalmadı)/i,        ne: "kasada para olmadığı" },
    { kalip: /borcu[mn]?\s*(kapan|bitti|sıfırlandı)/i,    ne: "borcun kapandığı" },
    { kalip: /borcumu\s*büyüttüm/i,                       ne: "borcun büyüdüğü" },
  ];
  // Bilerek bırakılanlar: V1 herkeste aynı durumdan başlıyor (65.000 ₺, borç
  // yok), o yüzden V1'in kendi sonucu "ajans nefes alır" diyebiliyor.
  const SERBEST = new Set(["V1/temiz_rapor"]);

  const bulgular = [];
  const bak = (yer, x) => {
    if (typeof x === "string") {
      if (SERBEST.has(yer.split(" ")[0])) return;
      for (const y of YASAK) if (y.kalip.test(x))
        bulgular.push(`${yer}\n       ${y.ne} iddia ediliyor\n       "${x.slice(0, 120)}"`);
    } else if (Array.isArray(x)) {
      x.forEach((v, i) => bak(yer + "[" + i + "]", v && v.metin !== undefined ? v.metin : v));
    }
  };
  for (const v of g.vakalar) {
    for (const d of v.decisions) bak(v.id + "/" + d.id + " sonuc", d.sonuc);
    for (const c of v.clues) { bak(v.id + "/" + c.id + " text", c.text); bak(v.id + "/" + c.id + " meta", c.meta); }
    bak(v.id + " giris", (v.giris || []).map(x => x.metin));
  }
  for (const [vid, kararlar] of Object.entries(KISILER.defter))
    for (const [kid, m] of Object.entries(kararlar)) bak("defter " + vid + "/" + kid, m);

  k("hiçbir metin sabit finansal durum iddia etmiyor", bulgular.length === 0, bulgular.join("\n\n"));
}

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
