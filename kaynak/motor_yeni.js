// ============================================================================
// YENİ OYUN MOTORU EKİ (Peri & Cengo) — motor.js'in ÜSTÜNE, ona dokunmadan.
// Şablon: sablon/1_oyun_yapisi.md ("Kim yaptı? ekranı", "Karar") ve
// sablon/2_kural_kitabi.md kural 24–25 (para yalnız birikir; ücret sonda).
//
// Neden ayrı dosya: motor.js eski oyunun sayfasına da gömülüyor ve o sayfa
// derlemede BİREBİR aynı çıkmalı. Yeni oyunun kuralları burada yaşar; eski
// motorun hiçbir davranışı değişmez. Yalnız `node build_html.js yeni` bu dosyayı
// sayfaya ekler; sayfada `Oyun` adı OyunYeni'ye bağlanır (yeni_arayuz.js).
//
// Vaka verisi (kim_yapti):
//   { suclu: "serkan",
//     supheliler: [{ id, ad, gorunur: "her_zaman" | <ifade> }],
//     dogru_ciftler: [[<olgu|ifade>, <olgu|ifade>], ...],
//     ucret: { dogru, zayif, yanlis } }
// Sahneler: sahneler.yuzlesme_dogru, yuzlesme_zayif, yuzlesme_<şüpheli id>
// (her yanlış şüpheli için), kovalamaca (isteğe bağlı), kapanis.
// ============================================================================

// <node>
const { Oyun } = require("./motor.js");
// </node>

// Kapanışta bağın iki hâli (kural 12a): +1 ve üstü sıcak.
const BAG_ESIK = 1;

class OyunYeni extends Oyun {
  _ky() { const a = this.durum.aktif; return (a && a.vaka.kim_yapti) || null; }

  // Ekranda yalnız oyuncunun adını duyduğu şüpheliler (1. parça, "Ekranda ne görünür").
  supheliler() {
    const ky = this._ky(); if (!ky) return [];
    const a = this.durum.aktif;
    return ky.supheliler
      .filter(s => s.gorunur === "her_zaman" || this._kos(s.gorunur, a.bilinen))
      .map(s => ({ id: s.id, ad: s.ad }));
  }

  // Kanıt olarak gösterilebilecekler: oyuncunun AÇTIĞI ipuçlarından gelen olgular.
  // Girişte müşterinin anlattıkları herkesin bildiği bilgidir, kanıt değil (sahibinin
  // görselsiz testi, 9 Ekim 2026: "yedekler evdeydi" seçilince 3 kanıt gerekiyormuş sanıldı).
  kanitlar() {
    const a = this.durum.aktif; if (!a) return [];
    const f = a.vaka.facts || {};
    const ipucundan = new Set(a.vaka.clues.filter(c => a.acilanKaynaklar.has(c.id)).flatMap(c => c.reveals || []));
    return [...a.bilinen].filter(x => f[x] && ipucundan.has(x)).map(id => ({ id, metin: f[id] }));
  }

  // Bir çift öğesi tek olgu ya da ifade ({any:[...]}) olabilir.
  _ogeTutar(oge, olgu) {
    return typeof oge === "string" ? oge === olgu : this._kos(oge, new Set([olgu]));
  }
  _ciftTutar(cift, a, b) {
    return (this._ogeTutar(cift[0], a) && this._ogeTutar(cift[1], b)) ||
           (this._ogeTutar(cift[0], b) && this._ogeTutar(cift[1], a));
  }

  // Sonucu hesaplar, durumu değiştirmez (doğrulayıcı ve testler de kullanır).
  suclamaSonucu(supheliId, kanitIdleri) {
    const ky = this._ky();
    if (supheliId !== ky.suclu) return "yanlis";
    const [a, b] = kanitIdleri;
    return ky.dogru_ciftler.some(c => this._ciftTutar(c, a, b)) ? "dogru" : "zayif";
  }

  // Tek hak: oyuncu bir kez suçlar (1. parça).
  suclama(supheliId, kanitIdleri) {
    const a = this.durum.aktif, ky = this._ky();
    if (!a || !ky) return { hata: "bu vakada Kim yaptı? yok" };
    if (a.suclama) return { hata: "suçlama zaten yapıldı" };
    if (!this.supheliler().some(s => s.id === supheliId)) return { hata: "bu şüpheli ekranda yok" };
    const ids = [...new Set(kanitIdleri || [])];
    const elde = new Set(this.kanitlar().map(k => k.id));
    if (ids.length !== 2 || !ids.every(x => elde.has(x))) return { hata: "iki farklı kanıt seçilmeli" };
    const sonuc = this.suclamaSonucu(supheliId, ids);
    a.suclama = { supheli: supheliId, kanitlar: ids, sonuc };
    const sahne = sonuc === "yanlis" ? "yuzlesme_" + supheliId : "yuzlesme_" + sonuc;
    return { sonuc, ucret: ky.ucret[sonuc], sahne };
  }

  // Kapı yok: suçlamadan sonra dört karar da açık (1. parça, "Karar").
  acikKararlar() {
    const a = this.durum.aktif;
    if (!this._ky()) return super.acikKararlar();
    if (!a.suclama) return [];
    return a.vaka.decisions.map(d => ({ id: d.id, etiket: d.etiket }));
  }

  // Ücret sonda ödenir (kural 25): kasaya giren = ücret + karar parası.
  kararVer(id) {
    const a = this.durum.aktif, ky = this._ky();
    if (!ky) return super.kararVer(id);
    if (!a.suclama) return { hata: "önce Kim yaptı?" };
    if (!a.vaka.decisions.some(d => d.id === id)) return { hata: "karar yok" };
    const sonuc = a.suclama.sonuc, ucret = ky.ucret[sonuc];
    const bagOnce = this.durum.cengoBag;
    this.durum.para += ucret;
    const r = super.kararVer(id);
    if (r.hata) { this.durum.para -= ucret; return r; }
    r.ekonomi.ucret = ucret;
    r.ekonomi.suclama = sonuc;
    r.bagOnce = bagOnce;
    r.bagYuksek = this.durum.cengoBag >= BAG_ESIK;
    return r;
  }

  bagYuksek() { return this.durum.cengoBag >= BAG_ESIK; }

  durumAl() {
    const k = super.durumAl();
    const a = this.durum.aktif;
    if (k.aktif && a.suclama) k.aktif.suclama = { supheli: a.suclama.supheli, kanitlar: [...a.suclama.kanitlar] };
    return k;
  }

  // Suçlama da girdidir: güncel veriyle yeniden yapılır (sonuç kayıttan okunmaz).
  durumYukle(k) {
    const yedek = this.durum;
    const r = super.durumYukle(k);
    if (r.hata || !k.aktif || !k.aktif.suclama) return r;
    const s = this.suclama(k.aktif.suclama.supheli, k.aktif.suclama.kanitlar);
    if (s.hata) { this.durum = yedek; return { hata: "suçlama geri yüklenemedi: " + s.hata }; }
    return r;
  }
}

// <node>
module.exports = { OyunYeni, BAG_ESIK };
// </node>
