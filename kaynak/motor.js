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

const KAYIT_SEMA = 2;   // kayıt biçimi değişirse artır (eski kayıtlar reddedilir)

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
      arastirmaKalan: v.arastirma ?? 3,
      girisMetin: secilen?.metin || "",
    };
    this._turet();
    return { baslik: v.baslik, giris: this.durum.aktif.girisMetin, arastirma: this.durum.aktif.arastirmaKalan };
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
    if (!c.bedelsiz) {
      if (a.arastirmaKalan <= 0) return { hata: "araştırma hakkı bitti" };
    }
    // Bazı kaynaklar para ister (muhbire ödeme, kayıt satın alma). Kasa
    // yetmiyorsa kaynak KAPANIR — yoksulluk bilgiye erişimi kısıtlar.
    const ucret = c.ucret || 0;
    if (ucret > this.durum.para) {
      return { hata: "kasa yetmiyor — " + ucret.toLocaleString("tr-TR") + " ₺ gerekiyor" };
    }
    if (!c.bedelsiz) a.arastirmaKalan -= 1;
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
    const kararPara = d.para || 0;
    if (kararPara >= 0) this.durum.para += kararPara; else paraDus(this.durum, -kararPara);

    // Sabit giderler yalnızca OMURGA vaka bitince kesilir: bir omurga vaka
    // bir ay demek. Yan iş aynı ayın içinde yapılır, ikinci kira ödetmez —
    // bu da yan işleri finansal olarak anlamlı kılar.
    const giderler = [];
    let faiz = 0;
    if (a.vaka.tur === "omurga") {
      for (const [ad, tutar] of Object.entries(ekonomi.gider || {})) {
        paraDus(this.durum, tutar);
        giderler.push({ ad, tutar });
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
      ekonomi: { kararPara, harcanan, giderler, faiz, borcOdemesi, para: this.durum.para, borc: this.durum.borc },
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
