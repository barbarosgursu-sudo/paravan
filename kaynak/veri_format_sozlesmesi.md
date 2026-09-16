# Paravan Dedektiflik — Veri Format Sözleşmesi (v1)

> Motor ve doğrulayıcı **ikisi de** bu şekle göre yazılır. Alan adları buradan sonra sabittir.
> Soyut kalmasın diye §6'da Vaka 1 bu formatta tam kodlanmıştır.

---

## 1. Üst düzey yapı

```
GAME = {
  kanon:   KANON,
  vakalar: [ VAKA, VAKA, ... ],   // 6 omurga + 2 yan, sıra alanıyla yönetilir
  baslangic: { para: 2400, ... }  // global durum başlangıcı (Münevver'deki gibi)
}
```

---

## 2. KANON — tek gerçek kaynağı

```
KANON = {
  isimler:  ["Kaya","Ceyda","Cavit","İlyas","Vedat","Nesrin","Peri","Cengo",
             "Nadire","Sevil","Sabri-YOK"],   // doğrulayıcı Kural 1 bunu tarar
  belirsiz: ["ceyda_pay","kaya_biliyordu","sevil_pay"],  // Kural 5 bunları korur
  belirsiz_istisna: { "kaya_biliyordu": "V6" },  // V6'da çözülmesi serbest (bkz. doğrulayıcı §Kural 5)
  tohum_isimleri: {                              // K1 için: tohumun hangi DEĞERİNDE hangi
    "iten_biliniyor": { "true": ["İlyas"] }       // kanon isimlerinin bilindiği. Koşulu bu
  }                                              // tohum olan metin varyantı o ismi serbestçe anabilir.
}
```

---

## 3. VAKA — tek vaka şeması

```
VAKA = {
  id:        "V1",
  tur:       "omurga" | "yan",
  sira:      1,                    // omurga akış sırası; yan vakalar "belirir" alanıyla
  belirir:   null | { sonra: "V2", kosul: <IFADE> },  // yan vakalar için: ne zaman masaya düşer
  baslik:    "Merdivendeki Adam",
  arastirma: 3,                    // bu vakada kaç kaynak açılabilir (araştırma puanı)

  truth:     { anahtar: "değer" | "<BELİRSİZ>...", ... },

  facts:     { anahtar: "insan-okur açıklama", ... },

  knowledge: [ { turetilen: "anahtar", ifade: <IFADE> }, ... ],

  giris:     [ GIRIS_VARYANT, ... ],   // koşullu giriş metinleri (Vaka 4, yan vakalar)

  clues:     [ CLUE, ... ],

  decisions: [ DECISION, ... ],

  seeds:     { anahtar: <SEED_KAYNAK>, ... }  // sonraki vakalara taşınan
}
```

---

## 4. İFADE formatı (knowledge + gate + koşullar)

`VE / VEYA / DEĞİL` mantığı, iç içe geçebilen JSON:

```
<IFADE> =
    "olgu_anahtari"                      // yaprak: bu olgu biliniyorsa true
  | { all: [ <IFADE>, <IFADE>, ... ] }   // hepsi true ise true  (VE)
  | { any: [ <IFADE>, <IFADE>, ... ] }   // biri true ise true   (VEYA)
  | { not: <IFADE> }                     // tersi                 (DEĞİL)
  | { seed: "anahtar", esit: <değer> }   // önceki vakadan taşınan bayrak kontrolü
  | { cengoBag_en_az: 3 }                // sayaç eşiği kontrolü
```

**Örnek** — "cinayet_suphesi = dusus_acisi VE (ceyda_celiski VEYA komsu_ses)":
```
{ all: [ "dusus_acisi", { any: [ "ceyda_celiski", "komsu_ses" ] } ] }
```

---

## 5. Alt yapılar

### CLUE — kaynak
```
CLUE = {
  id:       "olay_yeri",
  ad:       "Olay yeri incelemesi",         // listede görünen ad
  tur:      "Görüntü" | "İfade" | "Belge" | "Gözlem",
  ico:      "◉",
  needs:    [ "olgu" | <IFADE>, ... ],       // açılması için gereken (boş = baştan açık)
  reveals:  [ "olgu", ... ],                 // açtığı olgular
  text:     "…kaynak metni…",
  meta:     "…yorum/çıkarım metni…",
  gorsel:   GORSEL | null                    // kanıt görseli (needs/reveals'e tabi — bkz. GORSEL)
}
```
> Doğrulayıcı Kural 1: `text`+`meta`+`gorsel.gosterir` içindeki her KANON ismi/olgusu,
> `needs ∪ reveals` içinde olmalı.

### GORSEL — kanıt/portre/mekân görseli
```
GORSEL = {
  dosya:    "v1_merdiven.jpg",   // Adım "görseller"e kadar yer tutucu
  tur:      "kanit" | "portre" | "mekan",
  gosterir: [ "olgu" | "isim", ... ],   // görselin ifşa ettiği bilgi — reveals'ten fazlası OLAMAZ
  alt:      "gölgeli merdiven boşluğu"   // erişilebilirlik + yer tutucu açıklama
}
```
> Görsel Stil Sözleşmesi §7: `gosterir ⊆ (clue.needs ∪ clue.reveals)`. Değilse doğrulayıcı FAIL.

### GIRIS_VARYANT — koşullu açılış (müşterisiz/keşif vakaları)
```
GIRIS_VARYANT = {
  kosul:  <IFADE> | "varsayilan",   // ilk eşleşen varyant oynanır
  metin:  "…giriş anlatısı…",
  acilan: [ "olgu", ... ]           // bu giriş hangi olguyu baştan açar
}
```
> Vaka 4 ve yan vakalarda kullanılır (ör. `{seed:"kaya_kayit_gordu", esit:true}` → farklı giriş).
> Tüm varyantlar **aynı `acilan` sonucuna** çıkmalı (çelişkisizlik; bkz. Vaka 4 tasarımı).

### DECISION — karar
```
DECISION = {
  id:        "gizli_kaz",
  gate:      <IFADE> | "yok",         // açılması için gereken bilgi eşiği
  etiket:    "Raporu ver ama sessizce kaz",
  sonuc:     "…karar sonucu anlatısı (hemen / ilerleyen / görünmeyen)…",
  cengoBag:  +1,                      // sayaca etki (bkz. cengoBag mekaniği)
  seed_yaz:  { anahtar: <değer>, ... } // sonraki vakalara bayrak yazar
}
```

### SEED_KAYNAK — tohum tanımı
```
<SEED_KAYNAK> =
    { esit_ise: <IFADE>, deger: <değer> }   // koşul true ise bu değeri taşı
  | { karardan: "decision_id" }             // hangi karar seçildiyse onu taşı
  | { toplam: "cengoBag" }                  // sayaç değerini taşı
```

---

## 6. Vaka 1 — tam kodlanmış örnek

```json
{
  "id": "V1",
  "tur": "omurga",
  "sira": 1,
  "belirir": null,
  "baslik": "Merdivendeki Adam",
  "arastirma": 3,

  "truth": {
    "olen": "Kaya Tuncer",
    "gorunen": "merdivenden düştü (kaza)",
    "gercek": "itildi (cinayet)",
    "iten": "İlyas — BU VAKADA AÇILMAZ",
    "azmettiren": "Cavit — çok sonra",
    "cavit_niyeti": "sigorta ödensin, dosya kapalı kalsın"
  },

  "facts": {
    "polis_kaza": "Polis dosyası: kaza, dosya kapalı.",
    "sigorta_sorusturma": "Sigorta, ödeme öncesi soruşturuyor.",
    "giris_zorlama_yok": "Eve zorla giriş yok — tanıdık ya da içeriden.",
    "ceyda_saat": "Ceyda: 'Akşam 8'de çıktım, gece döndüğümde yerde buldum.'",
    "olum_saati": "Adli tahmin: ölüm ~23:00.",
    "dusus_acisi": "Yaralar/açı kendi düşmeyle uyuşmuyor; itiş olası.",
    "komsu_ses": "Komşu: o gece boğuk bir tartışma / ikinci bir ses."
  },

  "knowledge": [
    { "turetilen": "ceyda_celiski", "ifade": { "all": ["ceyda_saat","olum_saati"] } },
    { "turetilen": "cinayet_suphesi",
      "ifade": { "all": ["dusus_acisi", { "any": ["ceyda_celiski","komsu_ses"] }] } }
  ],

  "giris": [
    { "kosul": "varsayilan",
      "metin": "Cavit iyi giyimli, güven veren biri. Bir müvekkili adına geldiğini söylüyor: genç bir dul, Ceyda Tuncer. Kocası Kaya, çocuk doktoru, merdivenden düşüp ölmüş. Polis kaza demiş. Ama sigorta ödeme öncesi soruşturuyor. Cavit'in istediği basit görünüyor: ölümün kaza olduğunu teyit eden kısa bir rapor.",
      "acilan": [] }
  ],

  "clues": [
    { "id": "polis_dosyasi", "ad": "Polis dosyası", "tur": "Belge", "ico": "▤",
      "needs": [], "reveals": ["polis_kaza","giris_zorlama_yok"],
      "text": "Dosya kaza diyor, kapatılmış. Bir not: eve zorla giriş izi yok.",
      "meta": "Zorla giriş yoksa, ya tanıdık biri ya içeriden.",
      "gorsel": { "dosya": "v1_dosya.jpg", "tur": "kanit",
                  "gosterir": ["polis_kaza"], "alt": "kapatılmış polis dosyası" } },

    { "id": "sigorta_yazisi", "ad": "Sigorta yazısı", "tur": "Belge", "ico": "▤",
      "needs": [], "reveals": ["sigorta_sorusturma"],
      "text": "Sigorta, ödemeden önce kendi soruşturmasını açmış.",
      "meta": "Şirket ödememek için bahane arar; saat işliyor.",
      "gorsel": null },

    { "id": "ceyda_gorusme", "ad": "Ceyda ile görüşme", "tur": "İfade", "ico": "◑",
      "needs": [], "reveals": ["ceyda_saat"],
      "text": "Ceyda: 'Akşam sekizde çıktım. Gece döndüğümde onu merdivenin dibinde buldum.'",
      "meta": "Sakin anlatıyor — ama sakinlik masumiyet değildir.",
      "gorsel": { "dosya": "portre_ceyda.jpg", "tur": "portre",
                  "gosterir": ["Ceyda"], "alt": "yarısı gölgede bir kadın yüzü" } },

    { "id": "komsu_ifadesi", "ad": "Komşu ifadesi", "tur": "İfade", "ico": "◑",
      "needs": [], "reveals": ["komsu_ses"],
      "text": "Komşu: 'O gece boğuk bir tartışma duydum. İki ses vardı gibi.'",
      "meta": "Tek başına kanıt değil — ama Ceyda 'yalnızdım' demişti.",
      "gorsel": null },

    { "id": "olay_yeri", "ad": "Olay yeri incelemesi", "tur": "Gözlem", "ico": "◉",
      "needs": [], "reveals": ["olum_saati","dusus_acisi"],
      "text": "Merdiven dik. Ama yaraların açısı, kendi düşen birine göre ters. Ölüm saati ~23:00.",
      "meta": "Açı bir itişe daha çok uyuyor.",
      "gorsel": { "dosya": "v1_merdiven.jpg", "tur": "mekan",
                  "gosterir": ["dusus_acisi","olum_saati"], "alt": "gölgeli merdiven boşluğu" } },

    { "id": "cengo_baglanti", "ad": "Cengo saatleri karşılaştırır", "tur": "Gözlem", "ico": "◈",
      "needs": ["ceyda_saat","olum_saati"], "reveals": [],
      "text": "Cengo kağıtları yan yana koydu: 'Kadın sekizde çıktım diyor, ama adam on birde ölmüş. Peri abla, bu saatler tutmuyor.'",
      "meta": "Ceyda ya yanılıyor ya yalan söylüyor.",
      "gorsel": null }
  ],

  "decisions": [
    { "id": "temiz_rapor", "gate": "yok",
      "etiket": "Temiz 'kaza' raporu ver",
      "sonuc": "Parayı alırsın, ajans nefes alır. Şüpheni gömdün; Cavit sana güvenir, yeni iş getirir.",
      "cengoBag": -1, "seed_yaz": { "ilk_karar": "temiz", "cavit_guven": true } },

    { "id": "soyle_cavit", "gate": "cinayet_suphesi",
      "etiket": "Şüpheni Cavit'e söyle",
      "sonuc": "Dürüstsün ama saf. Cavit gülümser — ama gözünde artık bir risksin.",
      "cengoBag": 0, "seed_yaz": { "ilk_karar": "soyledi", "cavit_guven": false } },

    { "id": "gizli_kaz", "gate": "cinayet_suphesi",
      "etiket": "Raporu ver ama sessizce kaz",
      "sonuc": "Cavit'e istediğini verirsin, güvenini korursun; bir yandan kendine dosya açarsın.",
      "cengoBag": 1, "seed_yaz": { "ilk_karar": "gizli", "cavit_guven": true, "gizli_dosya": true } },

    { "id": "reddet", "gate": "yok",
      "etiket": "İşi reddet",
      "sonuc": "Onurlu ama ölümcül. Para gelmez, borç büyür; Cavit başkasını bulur.",
      "cengoBag": 1, "seed_yaz": { "ilk_karar": "reddetti", "cavit_guven": false } }
  ],

  "seeds": {
    "kaya_kayit_gordu": { "esit_ise": { "any": ["olay_yeri_acildi","gizli_dosya"] }, "deger": true },
    "el_sezildi_hazir": { "deger": false }
  }
}
```

---

## 7. Doğrulayıcının bu formatta okuduğu alanlar (özet)

| Kural | Okuduğu alan |
|---|---|
| 1 Sözlük | `clues[].text/meta` + `clues[].gorsel.gosterir` ⊆ `needs ∪ reveals`; KANON.isimler taranır |
| 2 Erişilebilirlik | `knowledge[].ifade` + `decisions[].gate`'teki her olgu bir `reveals`'te veya türetilebilir |
| 3 Döngü | `clues[].needs` grafiği DAG; her vakada `needs:[]` en az bir clue |
| 4 Truth uyumu | `reveals` edilen olgu, `truth`'ta "YOK/AÇILMAZ" işaretini çiğnemez |
| 5 Belirsizlik | `truth` + metinlerde `KANON.belirsiz` konuları tek yöne kesinleşmez (istisna: V6/kaya_biliyordu) |

---

## 8. Not

Bu format tüm tasarım kararlarını taşıyacak şekilde kuruldu: koşullu girişler (müşterisiz/keşif
vakaları), kanıt görselleri (needs/reveals'e tabi), `cengoBag` puanları, vakalar arası tohumlar,
yan vakaların "belirir" koşulu, ve iç içe VE/VEYA ifadeleri. Sonraki alt-adım (doğrulayıcıyı
kodlamak) doğrudan bu şekilden yazılır.
