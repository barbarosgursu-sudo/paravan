// ============================================================================
// PARAVAN DEDEKTİFLİK — OYUN MOTORU v1 (arayüzsüz mantık katmanı)
// Veri Format Sözleşmesi'ne göre çalışır. Arayüz bu motorun üstüne giydirilir.
// ============================================================================

// Runtime ifade değerlendirme: bilinen olgular + cross-vaka seeds + cengoBag
// kasa: {para, borc} taşıyan nesne (durum'un kendisi de olur). Borç koşulları
// bunu okur; verilmezse borç 0 sayılır, yani koşul sessizce YANLIŞ döner.
// Bu yüzden motor içinde hep _kos() üzerinden çağrılır — tek tek çağrılarda
// kasayı geçirmeyi unutmak, metni hiç görünmeyen bir hataya dönüştürürdü.
function ifadeCalistir(ifade, bilinen, seeds, cengoBag, kasa) {
  if (typeof ifade === "string") return bilinen.has(ifade);
  if (!ifade || typeof ifade !== "object") return false;
  if (Array.isArray(ifade.all)) return ifade.all.every(x => ifadeCalistir(x, bilinen, seeds, cengoBag, kasa));
  if (Array.isArray(ifade.any)) return ifade.any.some(x => ifadeCalistir(x, bilinen, seeds, cengoBag, kasa));
  if (ifade.not) return !ifadeCalistir(ifade.not, bilinen, seeds, cengoBag, kasa);
  if (ifade.seed) return (seeds[ifade.seed] ?? null) === (ifade.esit ?? true);
  if (typeof ifade.cengoBag_en_az === "number") return (cengoBag ?? 0) >= ifade.cengoBag_en_az;
  if (typeof ifade.borc_en_az === "number") return ((kasa && kasa.borc) || 0) >= ifade.borc_en_az;
  return false;
}

const KAYIT_SEMA = 3;   // kayıt biçimi değişirse artır (eski kayıtlar reddedilir)

// --- BORCUN SONUÇLARI ------------------------------------------------------
// Borç bir sayı olarak kalırsa oyuncuyu sıkmaz. Ödenmeyen HER GİDER KALEMİNİN
// kendi sonucu var; hangisinin açık kaldığı, giderlerin ödenme sırasından
// çıkıyor. Sıra game_data'daki yazılış sırası: kira → Cengo → işletme.
// Yani para azaldıkça önce ışıklar söner, sonra Cengo'nun eline geçen kalmaz,
// en son ev sahibi mahkemeye gider.
//
// Hiçbiri oyunu bitirmez (kaybetme yok) ve hepsi geri alınabilir: kalem
// ödendiği ay sonuç kalkar.
const KRIZLER = {
  isletme: {
    esle: /elektrik|işletme|isletme/i,
    ad: "Elektrik kesildi",
    aciklama: "Fatura ödenmedi. Karanlıkta dosya okunmuyor — bu vakada bir araştırma hakkın eksik.",
  },
  cengo: {
    esle: /cengo/i,
    ad: "Cengo'nun eline geçmedi",
    aciklama: "Bir şey demedi. Bu daha kötü.",
  },
  kira: {
    esle: /kira/i,
    ad: "Ev sahibi icraya verdi",
    aciklama: "Büroya haciz ihbarnamesi geldi. Takip masrafı da her ay senden çıkıyor.",
  },
};
const ICRA_MASRAFI = 12000;   // icra sürerken aylık giderlere eklenen kalem

// Ödenmeyen kalemlerden kriz bayraklarına.
// Bir kalemin YARIDAN FAZLASI açık kalmalı. Kirasının dörtte üçünü ödeyen
// kiracı icraya verilmez; bu eşik olmadan tek kötü ay üç krizi birden
// patlatıyordu ve tırmanma diye bir şey kalmıyordu. Eşikle sıra kendiliğinden
// oluşuyor: giderler kira → Cengo → işletme sırasıyla ödendiği için para
// azaldıkça önce ışıklar söner, sonra Cengo'nun eline geçen kalmaz, en son
// ev sahibi harekete geçer.
function krizleriCikar(giderler) {
  const out = {};
  for (const g of giderler) {
    if (!g.eksik || g.eksik * 2 <= g.tutar) continue;
    for (const [ad, k] of Object.entries(KRIZLER)) if (k.esle.test(g.ad)) out[ad] = true;
  }
  return out;
}

// --- EKONOMİ ---------------------------------------------------------------
// Para bir SKOR değil, bir KISIT. Biriktirilip maksimize edilmez; bittiğinde
// seçenekler kapanır. Batmak oyunu bitirmez — düzgün olma hakkını elinden alır.
const EKONOMI_VARSAYILAN = {
  baslangic_kasa: 0,
  gider: {},            // omurga vaka bitince kesilen sabit giderler
  borc_faizi: 0,        // her omurga vakada borca eklenen oran
};

function ekonomiAl(game) {
  return { ...EKONOMI_VARSAYILAN, ...(game.ekonomi || {}) };
}
function giderToplam(game) {
  return Object.values(ekonomiAl(game).gider || {}).reduce((a, b) => a + b, 0);
}
// Parayı düşürür; kasa yetmezse eksik kısım borca yazılır (oyun bitmez).
function paraDus(durum, miktar) {
  durum.para -= miktar;
  if (durum.para < 0) { durum.borc += -durum.para; durum.para = 0; }
}   // kayıt biçimi değişirse artır (eski kayıtlar reddedilir)

const ESIKLER = [
  { ad: "Mesafeli", enAz: -Infinity, enFazla: -2 },
  { ad: "Yoldaş",   enAz: -1,        enFazla: 2 },
  { ad: "Yakın",    enAz: 3,         enFazla: 5 },
  { ad: "Bağlı",    enAz: 6,         enFazla: Infinity },
];
function cengoDurumHesap(x) {
  return (ESIKLER.find(e => x >= e.enAz && x <= e.enFazla) || ESIKLER[1]).ad;
}
// cengoBag sayısını 0-5 dolu alev sayısına çevirir (eşiklerle tutarlı)
function cengoAlev(x) {
  if (x <= -2) return 1;   // Mesafeli
  if (x <= 0)  return 2;   // Yoldaş (başlangıç)
  if (x <= 2)  return 3;   // Yoldaş üstü / Yakın'a doğru
  if (x <= 5)  return 4;   // Yakın
  return 5;                // Bağlı
}

// Koşullu metin: düz dizgi olabilir ya da varyant dizisi
//   [{kosul:<ifade>, metin:"..."}, {kosul:"varsayilan", metin:"..."}]
// Bir kaynağın meta'sı oyuncunun HENÜZ bilmediği bir olguya gönderme
// yapmamalı (Nurcan kuralı). Varyantla, hak eden oyuncu bağlantıyı görür.
function metinSec(ham, bilinen, seeds, cengoBag, kasa) {
  if (typeof ham === "string" || ham == null) return ham || "";
  if (!Array.isArray(ham)) return "";
  for (const v of ham) {
    if (v.kosul === "varsayilan") return v.metin;
    if (ifadeCalistir(v.kosul, bilinen, seeds, cengoBag, kasa)) return v.metin;
  }
  return "";
}

class Oyun {
  constructor(game) {
    this.game = game;
    this.durum = {
      para: ekonomiAl(game).baslangic_kasa,
      borc: 0,
      cengoBag: 0,
      kriz: {},           // ödenmeyen gider kaleminin sonuçları (bkz. KRIZLER)
      seeds: {},          // cross-vaka bayraklar
      tamamlanan: [],     // biten vaka id'leri
      aktif: null,        // aktif vaka çalışma durumu
    };
  }

  // --- Masadaki vakalar: sıradaki omurga + koşulu sağlanan yan vakalar --------
  masadakiVakalar() {
    const tamam = new Set(this.durum.tamamlanan);
    const sonuncu = this.durum.tamamlanan[this.durum.tamamlanan.length - 1] || null;
    const out = [];
    // sıradaki omurga (sira'ya göre ilk tamamlanmamış)
    const omurga = this.game.vakalar
      .filter(v => v.tur === "omurga" && !tamam.has(v.id))
      .sort((a, b) => a.sira - b.sira);
    if (omurga[0]) out.push(omurga[0].id);
    // Yan vakaların iki belirme biçimi var:
    //   sonra: "<vaka id>"  → YALNIZCA o vakadan hemen sonraki masada durur.
    //                         Omurgaya geçen oyuncu onu kalıcı kaybeder;
    //                         masa kartı bunu yazıyor ("Beklemez").
    //   sonra: "her"        → koşulu sağlandığı SÜRECE masada kalır. Borç
    //                         tetikli iş böyle: çaresizlik geçici bir hâl
    //                         değil, oyuncu ondan kaçamasın diye durur.
    for (const v of this.game.vakalar) {
      if (v.tur !== "yan" || tamam.has(v.id) || !v.belirir) continue;
      const kosulOk = !v.belirir.kosul || v.belirir.kosul === "varsayilan" ||
        this._kos(v.belirir.kosul, new Set());
      const kalici = v.belirir.sonra === "her";
      // "her" olsa bile en az bir vaka bitmiş olmalı: ilk masada borç yok,
      // olsa bile oyuncu daha oyunun ne olduğunu bilmiyor.
      const sonraOk = kalici ? sonuncu !== null : v.belirir.sonra === sonuncu;
      if (sonraOk && kosulOk) out.push(v.id);
    }
    return out;
  }

  // --- Vaka başlat: giriş varyantı seç, açılan olguları uygula ----------------
  vakaBaslat(id) {
    const v = this.game.vakalar.find(x => x.id === id);
    if (!v) throw new Error("vaka yok: " + id);
    const bilinen = new Set();
    // Giriş varyantı önceki vakalarda öğrenilenlere de bakabilmeli — yoksa
    // "bunu zaten biliyorsun" diyen bir giriş asla tetiklenmez.
    const genis = this._metinBilinen();
    let secilen = null;
    for (const g of v.giris || []) {
      if (g.kosul === "varsayilan") { if (!secilen) secilen = g; continue; }
      if (this._kos(g.kosul, genis)) { secilen = g; break; }
    }
    (secilen?.acilan || []).forEach(o => bilinen.add(o));
    this.durum.aktif = {
      id: v.id, vaka: v, bilinen,
      acilanKaynaklar: new Set(),
      arastirmaKalan: this._arastirmaHakki(v),
      girisMetin: secilen?.metin || "",
    };
    this._turet();
    return { baslik: v.baslik, giris: this.durum.aktif.girisMetin, arastirma: this.durum.aktif.arastirmaKalan };
  }

  // Bir kaynak ya doğuştan bedelsizdir (bedelsiz: true) ya da bir koşul
  // sağlandığında bedelsizleşir (bedelsiz_kosul). İkincisi geçmiş kararların
  // araştırmaya dokunmasını sağlıyor: V1'de kendine dosya açan oyuncu V5'te
  // o dosyaya yeniden bakmak için hak harcamıyor — zaten tutuyordu.
  //
  // Doğrulayıcı bu koşulu görmez ve kaynağı ÜCRETLİ sayar; bu bilinçli:
  // bütçe denetimi her zaman zor durumu sınamalı.
  bedelsizMi(c) {
    if (!c) return false;
    if (c.bedelsiz) return true;
    return !!c.bedelsiz_kosul && this._kos(c.bedelsiz_kosul, new Set());
  }

  // Araştırma hakkı. Elektrik kesikse bir eksik, ama taban iki şeyin büyüğü:
  // en az 1 (sıfır hak vakayı kilitleyebilirdi) ve vakanın ÇEKİRDEK kaynağına
  // ulaşmanın maliyeti — ceza, vakayı anlamlı kılan tek delili silemez.
  //
  // Ceza YOKSA çekirdek hesabı hiç çalıştırılmıyor: hem gereksiz, hem de
  // _cekirdekMaliyet aramayı gerçek motorla yaptığı için (kopyalar vakaBaslat
  // çağırıyor) özyinelemeye yol açardı. Kopyaların krizi boş olduğundan bu dal
  // onlarda hiç açılmıyor ve arama kendiliğinden sonlanıyor.
  _arastirmaHakki(v) {
    const tam = v.arastirma ?? 3;
    if (!this.durum.kriz.isletme) return tam;
    return Math.max(Math.max(1, this._cekirdekMaliyet(v)), tam - 1);
  }

  // ÇEKİRDEK KAYNAK: vakanın başlığını anlamlı kılan kaynak.
  // Krizler oyuncunun araştırma GENİŞLİĞİNİ kısabilir, ama vakanın tek yeni
  // delilini erişilemez kılamaz — yoksa ekonomik ceza anlatı içeriğini
  // elinden alır. Örnek: "Kaya Biliyor muydu" vakasında kaya_izi.
  //
  // Maliyeti gerçek motorla ölçüyoruz (doğrulayıcının K6'da yaptığı gibi):
  // needs zincirini ve bedelsizleri kendiliğinden doğru sayar. Aramada
  // kurulan kopyaların krizi boş olduğu için ceza uygulanmıyor; özyineleme
  // kendiliğinden duruyor.
  _cekirdekMaliyet(vaka) {
    const cekirdekler = (vaka.clues || []).filter(c => c.cekirdek).map(c => c.id);
    if (!cekirdekler.length) return 0;
    const hak = vaka.arastirma ?? 3;
    const gorulen = new Set();
    let enAz = Infinity;
    const dfs = (acilmis, harcanan) => {
      if (harcanan >= enAz) return;
      const anahtar = [...acilmis].sort().join("|");
      if (gorulen.has(anahtar)) return;
      gorulen.add(anahtar);
      const o = new Oyun(this.game);
      o.durum.seeds = { ...this.durum.seeds };
      o.durum.cengoBag = this.durum.cengoBag;
      o.durum.kaliciOlgular = [...(this.durum.kaliciOlgular || [])];
      o.durum.tamamlanan = [...this.durum.tamamlanan];
      try { o.vakaBaslat(vaka.id); } catch (e) { return; }
      for (const id of acilmis) if (o.kaynakAc(id).hata) return;
      if (cekirdekler.every(id => o.durum.aktif.acilanKaynaklar.has(id))) {
        enAz = Math.min(enAz, harcanan);
        return;
      }
      for (const c of o.acikKaynaklar()) {
        const t = vaka.clues.find(x => x.id === c.id);
        const m = harcanan + (o.bedelsizMi(t) ? 0 : 1);
        if (m > hak) continue;
        dfs([...acilmis, c.id], m);
      }
    };
    dfs([], 0);
    return enAz === Infinity ? 0 : enAz;
  }

  // İTİBAR: geçmiş kararlar bu vakanın ÜCRETİNİ ölçekler.
  // Vaka düzeyinde uygulanıyor, karar düzeyinde değil — böylece kararlar
  // arasındaki para/vicdan merdiveni (K8) olduğu gibi kalıyor, yalnızca
  // vakanın tamamı zenginleşiyor ya da fakirleşiyor.
  // Yalnızca POZİTİF ücret ölçeklenir: itibarını kaybetmek, Peri'nin kendi
  // cebinden ödediği şeyi ucuzlatmaz.
  ucretEtkisi(vaka) {
    const v = vaka || (this.durum.aktif && this.durum.aktif.vaka);
    const sebepler = [];
    let carpan = 1;
    for (const e of (v && v.ucret_etkisi) || []) {
      if (!this._kos(e.kosul, new Set())) continue;
      carpan *= e.carpan;
      sebepler.push({ metin: e.metin, carpan: e.carpan });
    }
    return { carpan, sebepler };
  }

  // Koşul değerlendirmenin TEK kapısı. Tohumları, Cengo bağını ve kasayı
  // her seferinde birlikte geçirir; biri unutulduğunda ortaya çıkan hata
  // (koşul sessizce yanlış döner, metin hiç görünmez) sessiz olduğu için
  // dağınık çağrılara güvenilmiyor.
  _kos(ifade, bilinen) {
    return ifadeCalistir(ifade, bilinen, this.durum.seeds, this.durum.cengoBag, this.durum);
  }

  // METİN koşulları için geniş bilgi kümesi: aktif vakadakiler + önceki
  // vakalardan taşınan kalıcı olgular + tohumlar.
  // MEKANİK kapılar (needs, gate) bunu KULLANMAZ; onlar dar kümeyle çalışır,
  // yoksa V1'de öğrenilen bir olgu V5'te kaynak açardı.
  _metinBilinen() {
    const set = new Set(this.durum.aktif ? this.durum.aktif.bilinen : []);
    (this.durum.kaliciOlgular || []).forEach(x => set.add(x));
    for (const [key, val] of Object.entries(this.durum.seeds)) {
      if (val === true) set.add(key);
      if (typeof val === "string") set.add(key + ":" + val);
    }
    return set;
  }

  // knowledge sabit-nokta türetimi
  _turet() {
    const a = this.durum.aktif;
    let degisti = true;
    while (degisti) {
      degisti = false;
      for (const k of a.vaka.knowledge || []) {
        if (!a.bilinen.has(k.turetilen) &&
            this._kos(k.ifade, a.bilinen)) {
          a.bilinen.add(k.turetilen); degisti = true;
        }
      }
    }
  }

  // --- Açık kaynaklar: needs sağlanan + henüz açılmamış -----------------------
  acikKaynaklar() {
    const a = this.durum.aktif;
    return a.vaka.clues.filter(c => {
      if (a.acilanKaynaklar.has(c.id)) return false;
      const needs = c.needs || [];
      return needs.every(n =>
        typeof n === "string" ? a.bilinen.has(n)
                              : this._kos(n, a.bilinen));
    }).map(c => ({ id: c.id, ad: c.ad, tur: c.tur, ico: c.ico }));
  }

  // --- Kaynak aç: araştırma harca, reveals uygula, türet ----------------------
  kaynakAc(id) {
    const a = this.durum.aktif;
    const c = a.vaka.clues.find(x => x.id === id);
    if (!c) return { hata: "kaynak yok" };
    if (a.acilanKaynaklar.has(id)) return { hata: "zaten açık" };
    // needs kontrolü
    const ok = (c.needs || []).every(n =>
      typeof n === "string" ? a.bilinen.has(n)
                            : this._kos(n, a.bilinen));
    if (!ok) return { hata: "kilitli — önce gereken bilgiyi aç" };
    // bedelsiz kaynaklar (Cengo'nun kendiliğinden konuşması gibi) araştırma harcamaz
    const bedava = this.bedelsizMi(c);
    if (!bedava) {
      if (a.arastirmaKalan <= 0) return { hata: "araştırma hakkı bitti" };
    }
    // Bazı kaynaklar para ister (muhbire ödeme, kayıt satın alma). Kasa
    // yetmiyorsa kaynak KAPANIR — yoksulluk bilgiye erişimi kısıtlar.
    const ucret = c.ucret || 0;
    if (ucret > this.durum.para) {
      return { hata: "kasa yetmiyor — " + ucret.toLocaleString("tr-TR") + " ₺ gerekiyor" };
    }
    if (!bedava) a.arastirmaKalan -= 1;
    if (ucret) { this.durum.para -= ucret; a.harcanan = (a.harcanan || 0) + ucret; }
    a.acilanKaynaklar.add(id);
    a.bilinen.add(id + "_acildi");                 // seed koşulları için işaret
    (c.reveals || []).forEach(r => a.bilinen.add(r));
    this._turet();
    return {
      text: metinSec(c.text, this._metinBilinen(), this.durum.seeds, this.durum.cengoBag, this.durum),
      meta: metinSec(c.meta, this._metinBilinen(), this.durum.seeds, this.durum.cengoBag, this.durum),
      gorsel: c.gorsel || null,
      arastirmaKalan: a.arastirmaKalan, ucret, para: this.durum.para,
    };
  }

  // --- Açık kararlar: gate sağlanan --------------------------------------------
  acikKararlar() {
    const a = this.durum.aktif;
    return a.vaka.decisions.filter(d =>
      d.gate === "yok" || this._kos(d.gate, a.bilinen)
    ).map(d => ({ id: d.id, etiket: d.etiket }));
  }

  // --- Karar ver: cengoBag, seed_yaz, vakayı kapat, tohumları taşı ------------
  kararVer(id) {
    const a = this.durum.aktif;
    const d = a.vaka.decisions.find(x => x.id === id);
    if (!d) return { hata: "karar yok" };
    const gateOk = d.gate === "yok" || this._kos(d.gate, a.bilinen);
    if (!gateOk) return { hata: "bu karar henüz açık değil" };

    // cengoBag
    this.durum.cengoBag += (d.cengoBag || 0);

    // FİNAL İSTİSNALARI (yalnız final vakada): flörtü kırar ya da mühürler
    if (a.vaka.final) {
      const durumOnce = cengoDurumHesap(this.durum.cengoBag);
      // KIRAR: canavarca seçim (hepsini ifşa — masumlar da yandı) → bir kademe düşür
      if (id === "hepsini_ifsa") {
        this.durum.cengoBag = Math.min(this.durum.cengoBag, 2); // Bağlı/Yakın'dan indir
      }
      // MÜHÜRLER: en zor ama en doğru (Cavit'i ver, ajans batsa da) + zaten Yakın'daysa → Bağlı
      if (id === "cavit_ver" && durumOnce === "Yakın") {
        this.durum.cengoBag = 6; // Bağlı eşiğine taşı
      }
    }
    // kararın yazdığı seed'ler
    for (const [k, val] of Object.entries(d.seed_yaz || {})) this.durum.seeds[k] = val;
    // seçilen kararı da işaretle (seeds karardan taşınabilsin)
    this.durum.seeds["_karar_" + a.id] = id;

    // vaka seeds tanımlarını değerlendir (bilinen ∪ truthy seeds)
    const seedEvalSet = new Set([...a.bilinen]);
    for (const [k, v] of Object.entries(this.durum.seeds)) if (v === true) seedEvalSet.add(k);
    for (const [ad, tanim] of Object.entries(a.vaka.seeds || {})) {
      if (tanim.karardan) { this.durum.seeds[ad] = this.durum.seeds["_karar_" + tanim.karardan] ?? id; }
      else if (tanim.toplam === "cengoBag") { this.durum.seeds[ad] = this.durum.cengoBag; }
      else if (Array.isArray(tanim.say)) { this.durum.seeds[ad] = tanim.say.filter(f => seedEvalSet.has(f)).length; }
      else if (tanim.esit_ise !== undefined) {
        this.durum.seeds[ad] = this._kos(tanim.esit_ise, seedEvalSet)
          ? tanim.deger : (this.durum.seeds[ad] ?? false);
      } else if (tanim.deger !== undefined) {
        if (this.durum.seeds[ad] === undefined) this.durum.seeds[ad] = tanim.deger;
      }
    }

    // --- EKONOMİ: kararın parası, sonra ayın sabit giderleri ---------------
    const ekonomi = ekonomiAl(this.game);
    const itibar = this.ucretEtkisi(a.vaka);
    const ilanPara = d.para || 0;
    const kararPara = ilanPara > 0 ? Math.round(ilanPara * itibar.carpan) : ilanPara;
    if (kararPara >= 0) this.durum.para += kararPara; else paraDus(this.durum, -kararPara);

    // Sabit giderler yalnızca OMURGA vaka bitince kesilir: bir omurga vaka
    // bir ay demek. Yan iş aynı ayın içinde yapılır, ikinci kira ödetmez —
    // bu da yan işleri finansal olarak anlamlı kılar.
    const giderler = [];
    let faiz = 0;
    if (a.vaka.tur === "omurga") {
      // Kalemler TEK TEK ödeniyor ve hangisinin açık kaldığı kaydediliyor:
      // borcun sonucu ancak böyle "elektrik kesildi"ye dönüşebilir.
      const kalemler = Object.entries(ekonomi.gider || {});
      // İcra sürüyorsa takip masrafı da bu ayın gideri. En sona eklenir ki
      // asıl kalemleri öne geçip onları ödenmemiş göstermesin.
      if (this.durum.kriz.kira) kalemler.push(["İcra takip masrafı", ICRA_MASRAFI]);
      for (const [ad, tutar] of kalemler) {
        const odenen = Math.min(this.durum.para, tutar);
        paraDus(this.durum, tutar);
        giderler.push({ ad, tutar, odenen, eksik: tutar - odenen });
      }
      if (this.durum.borc > 0 && ekonomi.borc_faizi) {
        faiz = Math.round(this.durum.borc * ekonomi.borc_faizi);
        this.durum.borc += faiz;
      }
    }

    // Eline geçen para borcu KAPATIR. Bu olmadan kasa ve borç iki ayrı sayaç
    // gibi işliyordu: oyuncu 30.000 ₺ kasa ve büyüyen 33.000 ₺ borçla
    // dolaşabiliyor, borçtan çıkışın hiçbir yolu bulunmuyordu. Alacaklı
    // sormaz, alır — ve bu, borcu bir ceza olmaktan çıkarıp gerçekten
    // tırmanılabilir bir çukura çevirir. Yan işlerde de geçerli: borçluyken
    // kazanılan para önce borca gider.
    // Krizler: bu ay açık kalan kalemler yakılır, ödenenler söndürülür.
    // Yalnızca omurga vakada (yani ay kapanışında) değerlendirilir — yan iş
    // ikinci bir ay geçirmiyor.
    let yeniKrizler = [];
    if (a.vaka.tur === "omurga") {
      const simdiki = krizleriCikar(giderler);
      for (const ad of Object.keys(KRIZLER)) {
        if (simdiki[ad] && !this.durum.kriz[ad]) yeniKrizler.push(ad);
        this.durum.kriz[ad] = !!simdiki[ad];
      }
      // Cengo'ya ödeyememek bir ilişki olayıdır, bir gider satırı değil.
      // Her AY açık kaldığında bir kez düşer — borç sürdükçe süren bir ceza.
      if (simdiki.cengo) this.durum.cengoBag -= 1;
    }

    let borcOdemesi = 0;
    if (this.durum.borc > 0 && this.durum.para > 0) {
      borcOdemesi = Math.min(this.durum.para, this.durum.borc);
      this.durum.para -= borcOdemesi;
      this.durum.borc -= borcOdemesi;
    }

    this.durum.tamamlanan.push(a.id);
    // kalıcı olguları kaydet (künye için — vaka bitince bilinenler kaybolmasın)
    this.durum.kaliciOlgular = this.durum.kaliciOlgular || [];
    a.bilinen.forEach(x => { if (!x.endsWith("_acildi") && !this.durum.kaliciOlgular.includes(x)) this.durum.kaliciOlgular.push(x); });
    const harcanan = a.harcanan || 0;
    // Sonuç metni de koşullu olabilir: aynı kararı farklı bilgiyle veren
    // oyuncular aynı cümleyi okumamalı. Bilinenler henüz elimizde.
    const sonucMetin = metinSec(d.sonuc, this._metinBilinen(), this.durum.seeds, this.durum.cengoBag, this.durum);
    this.durum.aktif = null;
    return {
      sonuc: sonucMetin,
      cengoBag: this.durum.cengoBag,
      cengoDurum: cengoDurumHesap(this.durum.cengoBag),
      yuzde: d.yuzde ?? null,
      // ekonomik döküm — oyuncu kararının parasal sonucunu ekranda görmeli
      ekonomi: { kararPara, ilanPara, itibar, bedelAdi: d.bedel_adi || null,
                 harcanan, giderler, faiz, borcOdemesi, yeniKrizler,
                 kriz: { ...this.durum.kriz }, para: this.durum.para, borc: this.durum.borc },
    };
  }

  // Kasanın SAYISI kadar ANLAMI da gösterilmeli: "kaç ay dayanır?"
  kasaDurumu() {
    const gider = giderToplam(this.game);
    const d = this.durum;
    const ay = gider > 0 ? d.para / gider : Infinity;
    let hal;
    if (d.borc > 0 && d.para <= 0) hal = "batık";
    else if (ay < 1) hal = "kritik";
    else if (ay < 2) hal = "dar";
    else hal = "idare eder";
    return { para: d.para, borc: d.borc, aylikGider: gider, hal,
             ayDayanir: gider > 0 ? Math.floor(ay) : null };
  }

  cengoDurum() { return cengoDurumHesap(this.durum.cengoBag); }
  cengoAlevSayisi() { return cengoAlev(this.durum.cengoBag); }
  bilinenler() { return [...(this.durum.aktif?.bilinen || [])].filter(x => !x.endsWith("_acildi")); }

  // Tüm bilinen olguları topla (aktif vaka + tüm seed'ler + tamamlanan vakalardan kalıcı olgular)
  tumBilinen() {
    const set = new Set(["her_zaman"]);
    // aktif vakadaki bilinenler
    if (this.durum.aktif) this.durum.aktif.bilinen.forEach(x => { if (!x.endsWith("_acildi")) set.add(x); });
    // kalıcı olgular (tamamlanan vakalarda açığa çıkmış olgular)
    (this.durum.kaliciOlgular || []).forEach(x => set.add(x));
    // seed'ler (truthy olanlar + değeri olanlar künye koşulu olabilir)
    for (const [key, val] of Object.entries(this.durum.seeds)) {
      if (val === true) set.add(key);
      if (typeof val === "string") set.add(key + ":" + val);
    }
    return set;
  }

  // --- KAYIT / SÜRDÜRME -------------------------------------------------------
  // Kaydedilen YALNIZCA girdilerdir: tohumlar, tamamlanan vakalar, kalıcı olgular
  // ve aktif vakada açılmış kaynakların id'leri.
  // Kaydedilmeyen: türetilmiş knowledge, araştırma hakkı, giriş metni. Bunlar
  // yüklemede GÜNCEL veriden yeniden üretilir — böylece eski bir kayıt, oyuncunun
  // hak etmediği bir olguyu geri getiremez (Nurcan kuralı kayıt üzerinden delinmez).
  durumAl() {
    const d = this.durum;
    return {
      sema: KAYIT_SEMA,
      para: d.para, borc: d.borc, cengoBag: d.cengoBag,
      seeds: { ...d.seeds },
      tamamlanan: [...d.tamamlanan],
      kaliciOlgular: [...(d.kaliciOlgular || [])],
      kriz: { ...(d.kriz || {}) },
      aktif: d.aktif ? { id: d.aktif.id, acilan: [...d.aktif.acilanKaynaklar] } : null,
    };
  }

  // Kaynakları kaydedildikleri sırayla yeniden açar. Tekrar oynatma aynı zamanda
  // doğrulamadır: veri değiştiyse bir adım "kilitli" döner ve kayıt tümden reddedilir.
  // Başarısızlıkta eski durum geri konur — bozuk kayıt oyunu bozmaz.
  durumYukle(k) {
    if (!k || typeof k !== "object") return { hata: "kayıt okunamadı" };
    if (k.sema !== KAYIT_SEMA) return { hata: "kayıt sürümü uyumsuz" };
    const yedek = this.durum;
    try {
      for (const id of (k.tamamlanan || [])) {
        if (!this.game.vakalar.some(v => v.id === id)) throw new Error("kayıtta tanınmayan vaka: " + id);
      }
      this.durum = {
        para: k.para ?? this.game.baslangic?.para ?? 2400,
        borc: k.borc ?? this.game.baslangic?.borc ?? 0,
        cengoBag: k.cengoBag ?? 0,
        seeds: { ...(k.seeds || {}) },
        tamamlanan: [...(k.tamamlanan || [])],
        kaliciOlgular: [...(k.kaliciOlgular || [])],
        kriz: { ...(k.kriz || {}) },
        aktif: null,
      };
      if (k.aktif) {
        if (!this.game.vakalar.some(v => v.id === k.aktif.id)) throw new Error("kayıttaki vaka yok: " + k.aktif.id);
        this.vakaBaslat(k.aktif.id);            // giriş varyantı tohumlardan yeniden seçilir
        for (const cid of (k.aktif.acilan || [])) {
          const r = this.kaynakAc(cid);
          if (r.hata) throw new Error("kaynak geri yüklenemedi (" + cid + "): " + r.hata);
        }
      }
      return { ok: true };
    } catch (e) {
      this.durum = yedek;
      return { hata: e.message };
    }
  }
}

module.exports = { Oyun, ifadeCalistir, cengoDurumHesap, cengoAlev, KAYIT_SEMA, ekonomiAl, giderToplam, metinSec };
