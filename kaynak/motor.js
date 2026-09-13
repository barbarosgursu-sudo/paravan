// ============================================================================
// PARAVAN DEDEKTİFLİK — OYUN MOTORU v1 (arayüzsüz mantık katmanı)
// Veri Format Sözleşmesi'ne göre çalışır. Arayüz bu motorun üstüne giydirilir.
// ============================================================================

// Runtime ifade değerlendirme: bilinen olgular + cross-vaka seeds + cengoBag
function ifadeCalistir(ifade, bilinen, seeds, cengoBag) {
  if (typeof ifade === "string") return bilinen.has(ifade);
  if (!ifade || typeof ifade !== "object") return false;
  if (Array.isArray(ifade.all)) return ifade.all.every(x => ifadeCalistir(x, bilinen, seeds, cengoBag));
  if (Array.isArray(ifade.any)) return ifade.any.some(x => ifadeCalistir(x, bilinen, seeds, cengoBag));
  if (ifade.not) return !ifadeCalistir(ifade.not, bilinen, seeds, cengoBag);
  if (ifade.seed) return (seeds[ifade.seed] ?? null) === (ifade.esit ?? true);
  if (typeof ifade.cengoBag_en_az === "number") return (cengoBag ?? 0) >= ifade.cengoBag_en_az;
  return false;
}

const KAYIT_SEMA = 1;   // kayıt biçimi değişirse artır (eski kayıtlar reddedilir)

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

class Oyun {
  constructor(game) {
    this.game = game;
    this.durum = {
      para: game.baslangic?.para ?? 2400,
      borc: game.baslangic?.borc ?? 0,
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
    // yan vakalar: belirir.sonra == sonuncu && belirir.kosul true && henüz yapılmadı
    for (const v of this.game.vakalar) {
      if (v.tur !== "yan" || tamam.has(v.id) || !v.belirir) continue;
      const kosulOk = !v.belirir.kosul || v.belirir.kosul === "varsayilan" ||
        ifadeCalistir(v.belirir.kosul, new Set(), this.durum.seeds, this.durum.cengoBag);
      if (v.belirir.sonra === sonuncu && kosulOk) out.push(v.id);
    }
    return out;
  }

  // --- Vaka başlat: giriş varyantı seç, açılan olguları uygula ----------------
  vakaBaslat(id) {
    const v = this.game.vakalar.find(x => x.id === id);
    if (!v) throw new Error("vaka yok: " + id);
    const bilinen = new Set();
    // giriş varyantı: ilk koşulu sağlanan, yoksa 'varsayilan'
    let secilen = null;
    for (const g of v.giris || []) {
      if (g.kosul === "varsayilan") { if (!secilen) secilen = g; continue; }
      if (ifadeCalistir(g.kosul, bilinen, this.durum.seeds, this.durum.cengoBag)) { secilen = g; break; }
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

  // knowledge sabit-nokta türetimi
  _turet() {
    const a = this.durum.aktif;
    let degisti = true;
    while (degisti) {
      degisti = false;
      for (const k of a.vaka.knowledge || []) {
        if (!a.bilinen.has(k.turetilen) &&
            ifadeCalistir(k.ifade, a.bilinen, this.durum.seeds, this.durum.cengoBag)) {
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
                              : ifadeCalistir(n, a.bilinen, this.durum.seeds, this.durum.cengoBag));
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
                            : ifadeCalistir(n, a.bilinen, this.durum.seeds, this.durum.cengoBag));
    if (!ok) return { hata: "kilitli — önce gereken bilgiyi aç" };
    // bedelsiz kaynaklar (Cengo'nun kendiliğinden konuşması gibi) araştırma harcamaz
    if (!c.bedelsiz) {
      if (a.arastirmaKalan <= 0) return { hata: "araştırma hakkı bitti" };
      a.arastirmaKalan -= 1;
    }
    a.acilanKaynaklar.add(id);
    a.bilinen.add(id + "_acildi");                 // seed koşulları için işaret
    (c.reveals || []).forEach(r => a.bilinen.add(r));
    this._turet();
    return { text: c.text, meta: c.meta, gorsel: c.gorsel || null, arastirmaKalan: a.arastirmaKalan };
  }

  // --- Açık kararlar: gate sağlanan --------------------------------------------
  acikKararlar() {
    const a = this.durum.aktif;
    return a.vaka.decisions.filter(d =>
      d.gate === "yok" || ifadeCalistir(d.gate, a.bilinen, this.durum.seeds, this.durum.cengoBag)
    ).map(d => ({ id: d.id, etiket: d.etiket }));
  }

  // --- Karar ver: cengoBag, seed_yaz, vakayı kapat, tohumları taşı ------------
  kararVer(id) {
    const a = this.durum.aktif;
    const d = a.vaka.decisions.find(x => x.id === id);
    if (!d) return { hata: "karar yok" };
    const gateOk = d.gate === "yok" || ifadeCalistir(d.gate, a.bilinen, this.durum.seeds, this.durum.cengoBag);
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
        this.durum.seeds[ad] = ifadeCalistir(tanim.esit_ise, seedEvalSet, this.durum.seeds, this.durum.cengoBag)
          ? tanim.deger : (this.durum.seeds[ad] ?? false);
      } else if (tanim.deger !== undefined) {
        if (this.durum.seeds[ad] === undefined) this.durum.seeds[ad] = tanim.deger;
      }
    }

    this.durum.tamamlanan.push(a.id);
    // kalıcı olguları kaydet (künye için — vaka bitince bilinenler kaybolmasın)
    this.durum.kaliciOlgular = this.durum.kaliciOlgular || [];
    a.bilinen.forEach(x => { if (!x.endsWith("_acildi") && !this.durum.kaliciOlgular.includes(x)) this.durum.kaliciOlgular.push(x); });
    this.durum.aktif = null;
    return { sonuc: d.sonuc, cengoBag: this.durum.cengoBag, cengoDurum: cengoDurumHesap(this.durum.cengoBag), yuzde: d.yuzde ?? null };
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

module.exports = { Oyun, ifadeCalistir, cengoDurumHesap, cengoAlev, KAYIT_SEMA };
