# YENİ OYUN VERİSİ (Peri & Cengo)

Bu klasör yeni oyunun verisidir — KOD-36 (eski oyunun verisi `kaynak/game_data.json`).

| dosya | ne |
|---|---|
| `game_data.json` | kanon, ekonomi, vakalar (V1, V2) |
| `acilis.json` | açılış: dört konuşma sahnesi (haciz → manto → Cengo → kapı çalar) |
| `kisiler.json` | künye (`kisiler`), anı defteri notu (`defter.<vaka>.<karar>`), anı özeti (`ani_ozet.<vaka>`, diyalogdaki `## ani`) |
| `prolog.json` | boş; eski araçlar okuyabilsin diye duruyor |

Veri elle düzenlenmez — KOD-38. Kaynak metin: `sablon/vakalar/vakaN_diyalog.md`; veriye
`cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md V1` yazar. Açılış için `kaynak/YENI_VAKA_1.md` → `acilis.json`.

## Komutlar

```
cd kaynak
node dogrulayici.js               # yeni veriyi denetler (`… yeni` ile aynı; eski oyun arşivde)
node test_yeni_v1.js              # yeni verinin testi (test_*.js döngüsüne girer)
node test_yeni_v2.js              # her vakanın araştırma ekonomisi: hak açıkken bütün ipucu sıraları
```

Motor, doğrulayıcı ve araçlar **aynen** devralındı (`arsiv/kaynak/YENI_OYUN_CERCEVE.md` §3).

## Sayfa ve konuşma ekranı

```
node build_html.js yeni           # → depo kökü yeni/index.html
node arac_yeni_tur.js 0 set       # Pixel 5 turu (karar sırası, yol: set | dukkan)
```

Akış — YAPI-1 (açılış → masa → giriş + konuşma → araştırma → Kim yaptı? → yüzleşme → kovalamaca → karar sahnesi → sonuç →
Cengo büroda → Dosya kapandı → kapanış → masa).

**Motor eki `kaynak/motor_yeni.js`** (`OyunYeni extends Oyun`) — KOD-36. Yeni kip derlemesi dosyayı `// <node>` bloklarını atarak
sayfaya ekler; `yeni_arayuz.js` sayfadaki `Oyun` adını `OyunYeni`'ye bağlar.

Konuşma ekranı `kaynak/yeni_arayuz.js`: eski arayüzün fonksiyonlarını sarar (`prologGoster`, `vakaAc`, `kaynakAcFaz`,
`arastirmaFazi`, `kararFazi`, `kararVerFaz`, `sonEkrani`, `kasaSerit`, `cengoGosterge`) — ARAYUZ-29. Figür yerleşimi — ARAYUZ-16;
"Sahneyi geç" — ARAYUZ-23; GEÇİCİ "◂ Geri" — ARAYUZ-24 (kapatmak: `yeni_arayuz.js` → `VN_GERI = false`).

**Sahne kaydı (9 Ekim 2026, sahibinin isteği)** — KOD-50 (`akisBaslat`, `paravan_yeni_kayit_v1_sahne`, `vnSar`).

**Tarayıcı iletişim kutusu yok** — KOD-21 (`yenidenBasla` sayfa içi onay ekranı). Ruh hâli görseli ve istatistik paneli yeni
sayfada yok (YAPI-39). `test_yeni_arayuz.js` manifesto ↔ kanon ↔ derleyici eşlemesini sınar.

**Tema (6 Ekim 2026, sahibinin kararı)** — ARAYUZ-30 (`yeni_arayuz.css`'in ikinci bloğu).

**Batma uyarısı yok (sahibinin kararı):** kasa şeridi yalnız kasa ve borcu gösterir;
karar seçeneklerinin altındaki "yeni iş gelmezse batarsın / açık verirsin / borca
girersin" kaldırıldı, "ay sonunda X ₺" önizlemesi ve gider kutusu kaldı (bilgi).
`arac_yeni_tur.js` karar ekranında bu cümleleri arar; `test_yeni_arayuz.js` eski
karar ekranının temizlenen sınıf adlarını hâlâ ürettiğini sınar.

## Eski formata eklenenler

Eski veri formatı (`veri_format_sozlesmesi.md`) aynen geçerli; üstüne — KOD-40:

**`kanon.sahne`** — konuşma ekranının görsel seti; K15 denetler (KOD-40, KOD-66).
```
figurler: { peri: { setler: { manto: [ifadeler], balikli: [...] } },
            cengo: { ifadeler: [...] }, riza: { ad, ifadeler }, ... }
sesler:   { ses: "Ses", asistan: "Set asistanı" }   // figürü olmayan konuşanlar
arkalar:  ["A1", ...]     // arka plan kodları (YENI_VAKA_1.md görsel planı)
kareler:  ["D1", "K1", ...]   // detay ve ara kareler
```

**Sahne** — KOD-41: vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda `sahne`, açılışta `acilis.json → sahneler[]`:
```
{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }
```

**Satır:**
```
{ k: "peri", i: "kas", m: "Ne oldu?" }       // konuşan, ifade (verilmezse önceki kalır), metin
{ k: "not", m: "Kapı açılıyor." }            // anlatı; ifade almaz
{ k: "ses", m: "Tel lazım mı?" }             // figürü olmayan konuşan; ifade almaz
```
Satırda isteğe bağlı sahne değişiklikleri:

| alan | anlamı |
|---|---|
| `arka: "A5b"` | arka plan değişir (KOD-41) |
| `kare: "K8"` | tam ekran ara kare / detay (KOD-41) |
| `set: "balikli"` | Peri'nin kıyafet seti değişir (KOD-41) |
| `gir: "serkan"` / `cik: true` | konuk girer / çıkar; `gi` girenin ilk ifadesi; `gizle: "cengo"` (KOD-41) |
| `kime: "peri"` | solda kimin duracağı (KOD-41, SATIR-4) |
| `kasa: true` | kasa göstergesi ilk kez görünür (açılış) |
| `peri: "tac"` | dinleyen Peri'nin ifadesi (KOD-41) |
| `mekan: true` | mekân karesi (KOD-41) |
| `bag: "yuksek"` / `"dusuk"` | satır yalnız o bağ hâlinde oynar (KOD-41; `motor_yeni.js` → `BAG_ESIK`) |

**Seçim** — KOD-43: `{ secim: "Peri ne desin?", secenekler: [ { m: "…", satirlar: [...] }, ... ] }`

**Karar** — KOD-43: `kare: "K3"`; anı defteri `kisiler.json → defter.V1.<karar>`; anı özeti `ani_ozet.V1`; `_suclama_<vaka>` tohumu.

**Karar (16 Kasım 2026)** — KOD-44: `secenek` (diyalogda `**SEÇENEK:**`), `cengo_sonuc`, `cengo_replik: { i, yuz }`
(diyalogda `**CENGO [ifade]:** metin {yuz: peri.x}` — SATIR-36), `kim_yapti.cengo_kanit`, `kim_yapti.cengo_kanit_replik`
(`## cengo_kanit`). Eski alanlar: `onizleme`, `para`, `gate: "yok"`, `seed_yaz` yok.

**Vaka — Kim yaptı?:**
```
kim_yapti: {
  suclu: "serkan",
  supheliler: [ { id, ad, gorunur: "her_zaman" | <ifade> } ],   // ekranda ne zaman görünür
  dogru_ciftler: [ [<olgu|ifade>, <olgu|ifade>], ... ],          // suçu kanıtlayan iki olgu
  ucret: { dogru, zayif, yanlis },                                // sonda ödenir
  kesinti: { zayif, yanlis }   // karar ekranının üstü; {anlasilan} {kesinti} tutarla dolar (diyalogda '## ucret')
}
sahneler: { giris, konusma, yuzlesme_dogru, yuzlesme_zayif, yuzlesme_<masum id>, kovalamaca, kapanis }
anahtarlar: { <ipucu olgusu>: ["kelime", ...] }                    // K17 sızıntı araması
```
Girişte açılan olgular ve ücret alanı — KOD-46 (`giris[].acilan`, `ekonomi.gider`, `vaka.ucret`).

## Düz metin ile sahne

Düz metin ile sahne aynı içeriğin iki hâli — KOD-47 (`text`/`meta` ↔ `sahne`; K1 ikisini de tarar).

## Doğrulayıcıya eklenen kurallar

- **K15 — Sahne satırı** — KOD-66.
- **K16 — Kararsız yol** — KOD-67.
- **K17 — Giriş** — KOD-68.
- **K18 — İpucu adı** — KOD-69.
- **K19 — Kim yaptı?** — KOD-70.

## Açık uyarılar (tasarım; sahibine soruldu)

- **K8 (V4):** `polise_ver` — kabul edilmiş uyarı (KOD-71; 10 Kasım 2026).
- **K8 (V5):** `polise_teslim` — kabul edilmiş uyarı (KOD-71; 12 Kasım 2026).
- **K8:** `sete_gotur` — kabul edilmiş uyarı (KOD-71).
- **K17 (V6):** giriş 56 satır — kabul edilmiş uyarı (KOD-71; 13 Kasım 2026).
- K9 uyarısı kalktı: tohum yok (şablon, 8 Ekim 2026).

## Vaka 2 ile gelenler (10 Ekim 2026)

- **Kıyafet seti sahne başında** — KOD-42: diyalogda `⚙ … · set: tayyor · cset: takim`; satırda `{cset: unlu}`.
- **Görselsiz testte yer tutucu** — KOD-48 (`gorseller.json` → `yer_tutucu`, `yer_tutucu_metin`).
- **Diyaloğa yeni kare eklerken üç yer** — KOD-49 (`game_data.json → kanon.sahne.kareler`, `gorseller.json → yer_tutucu` +
  `yer_tutucu_metin`, diyalog dosyasındaki görsel tablosu; `arac_json_yaz.js` — KOD-38; `&&` ile zincir — KOD-6).
- `arac_diyalog.js` konuşan adındaki â/î/û'yu da düzler ("LÂL" → `lal`) — KOD-38.
- **GEÇİCİ "Vaka N'den başla"** — ARAYUZ-37 (yayından önce `yeni_arayuz.js` → `VN_VAKA_ATLA = false`).
