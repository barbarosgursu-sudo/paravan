# PARAVAN DEDEKTİFLİK — Kaynak Dosyalar

Yayındaki oyun: https://barbarosgursu-sudo.github.io/paravan/
Depo kökündeki `index.html` derleme çıktısıdır, bu klasörden üretilir — KOD-1.

## Nasıl derlenir

```
cd kaynak
node dogrulayici.js && node build_html.js
```

Derleme depo kökündeki `index.html`'i yeniden yazar. Görseller
`_gomulu_gorseller.js`'ten okunur (44 görsel, **WebP q80**, base64) ve çıktıya
gömülür. Biçim JPEG'den WebP'ye geçti: aynı çözünürlükte yarı boyut, gözle fark yok.
Veride dosya adları hâlâ `foo.jpg` — o yalnızca bir anahtar, gerçek biçim data URI'nin
içinde.

Doğrulayıcı ne zaman çalışır, ne çıktı verir — KOD-4.

## Dosyalar

- `motor.js`            → oyun mantığı (arayüzsüz, `class Oyun`)
- `game_data.json`      → 9 vaka + kanon (**asıl veri**)
- `game_data.js`        → doğrulayıcının beklediği modül köprüsü (json'u dışa verir)
- `kisiler.json`        → katmanlı künye + anı defteri (portre de katmanlı olabilir:
  `portre_katman` ile bir olgu açılınca yüz değişir — İlyas'ın yarası V3 teşhisiyle gelir)
- `prolog.json`         → açılış (6 kart)
- `dogrulayici.js`      → çelişki denetleyici (9 kural, bkz. aşağısı)
- `build_html.js`       → derleyici (DEV_MOD satırı burada — KOD-15)
- `_gomulu_gorseller.js`→ 44 görsel, WebP/base64 (derlemenin girdisi)
- `vaka2-6.json`, `yan_a/b.json` → tekil vaka yedekleri (game_data.json asıldır)
- `test_*.js`           → testler
- `*.md`                → tasarım sözleşmeleri (doğrulayıcı, Cengo bağı, görsel, veri formatı)
- `ses_promptlari.md`   → 8 müzik + 5 efekt için sipariş metinleri
- `arsiv/kaynak/final_tablo_plani.md`→ sezon sonu istatistik tablosu (yazılmadı; Android aşamasının planı)

`_gomulu_motor.js` ve `_gomulu_veri.js` her derlemede üretilir — KOD-2.

## Geliştirici modu

DEV_MOD — KOD-15: `build_html.js` içinde `const DEV_MOD = false;` (satır ~508). `true` iken üst şeritte 🛠 düğmesi çıkıyor:
durum özeti, `cengoBag` oynatma, tohum anahtarları ve ses teşhisi.

**Şu an kapalı — yayın modundayız.** Derleme bunu her seferinde söylüyor:

```
index.html yenilendi: 4357 KB
  ✓ yayın modu — 🛠 düğmesi basılmadı
```

İki tuzak var, ikisine de düştüm:

1. Bayrak üretilen sayfanın içinde yaşıyor (KOD-15).
2. Çıktıda `dev-btn` aramak yanıltıcı; tek doğru kontrol tarayıcıda `.dev-btn` sayısı 0 (KOD-15).

**Ses üretimine başlarken geri açmak isteyebilirsin** — ses teşhisi paneli
orada. Tek satır.

## Testler

```
cd kaynak
for t in test_*.js; do node $t; done
```

`test_bozuk.js` negatif testtir — KOD-7.

## Doğrulayıcı kuralları

Hata ile uyarı ayrımı — KOD-5.

| | Ne kontrol eder | Şiddet |
|---|---|---|
| K1 | Sözlük — KOD-54 | hata |
| K2 | Erişilebilirlik — KOD-55 | hata |
| K3 | Döngü — KOD-56 | hata |
| K4 | Truth uyumu — KOD-57 | hata |
| K5 | Belirsizlik — Ceyda/Sevil kesinleşmemeli | uyarı |
| K6 | **Bütçe** — KOD-59 | ölü içerik: hata / kusursuz sıra: uyarı |
| K7 | **Seçim baskısı** — KOD-59 | uyarı |
| K8 | **Baskınlık** — KOD-60 | uyarı |
| K9 | **Ölü tohum** — KOD-61 | uyarı |
| K10 | **Olgu sızıntısı** — KOD-62 | hata |
| K11 | **Olgu kimliği** — KOD-63 | hata |

K6 ve K7 gerçek motoru (`motor.js`) kullanır — KOD-59.

K8 yalnız kararlarında `para` bulunan vakalarda çalışır — KOD-60.

K9, tohumları `kisiler.json`, `prolog.json` ve `build_html.js` içinde de arar — KOD-61.

**K10, K1'in açığını kapatır** — KOD-62.

**K11, kalıcı olguların açtığı kapıyı kapatıyor** — KOD-63 (`kaliciOlgular`, `tumBilinen()`; `eski_dava` → `cengo_eski_dava`).

### Koşullu metin

Koşullu metin — KOD-88. Kaynakların `text` ve `meta` alanları varyant dizisi olabilir:

```json
"meta": [
  {"kosul": "ceyda_saat", "metin": "... ama Ceyda 'yalnızdım' demişti."},
  {"kosul": "varsayilan", "metin": "... o saatte dairede iki kişi varsa, biri konuşmadı."}
]
```

Motorda `metinSec()` çözer; desteklenen yerler — KOD-88 (kaynak `text`/`meta`, karar `sonuc`, `defterNotu`, vaka `giris`).

**Metin koşulları geniş bilgi kümesini görür** (`_metinBilinen`); mekanik kapılar (`needs`, `gate`) dar kümeyle — KOD-88.


## Eski oyunun vakaları ve ekonomisi

Eski oyunun (dokuz vaka) açık uyarıları, kapatılan tuzakları, sızıntı ve ekonomi notları, vaka vaka tasarım kayıtları
16 Kasım 2026'da `arsiv/kaynak/OKUBENI_eski_oyun.md`'ye taşındı (kuralları ham listede: `sablon/kurallar/HAM.md`).

## Kayıt sistemi

Kayıt sistemi — KOD-50: motorda `durumAl()` / `durumYukle()`, arayüzde `localStorage` (`paravan_kayit_v1`).

Kaydedilen yalnız girdilerdir — KOD-50.

Yükleme kaynakları kaydedildikleri sırayla yeniden açar (doğrulama) — KOD-50.

**Karar verilir verilmez yazılır**; tek yuva — KOD-50.

`localStorage` yoksa kayıt sessizce devre dışı — KOD-50.

## Ses

Altyapı kuruldu. Sipariş metinleri: `ses_promptlari.md`.

**Şu an depoda geçici sentetik sesler var** (`ses/*.wav`, ~3 MB) — gerçek
parçalar değil, geliştirme sırasında duyarak test edebilmek için. Ayrıntı:
`ses/GECICI.md`. Oyun `.mp3`'ü önce arar, bulamazsa `.wav`'a düşer; gerçek
`prolog.mp3` konduğu anda geçici `prolog.wav` devre dışı kalır, kodda hiçbir
şey değişmez.

Ses dosyaları — KOD-19: depo kökündeki `ses/` klasörüne konur, `index.html`'e gömülmez. Beklenen adlar `build_html.js` içindeki
`EFEKT` haritasında (MUZIK haritası söküldü — KOD-18):

- müzik: `prolog` `masa` `giris` `arastirma` `karar` `sonuc` `huzun` `final`
- efekt: `efekt_dokun` `efekt_kaynak` `efekt_kilit` `efekt_muhur` `efekt_alev` (KOD-18)

Uzantı sırası `SES_UZANTILAR = [".mp3", ".wav"]` — KOD-19.

Davranış:

- **Dosya yoksa oyun sessiz devam eder** — KOD-19.
- **Otomatik çalma kilidi** — KOD-19 (`NotAllowedError`).
- **Çapraz geçiş:** sahne değişince parça 700 ms'de karşılıklı kısılıp açılır.
- **Ses tercihi kayıt yuvasından ayrıdır** (`paravan_ses_v1`) — KOD-19.
- Kanıt ekranı müziği değiştirmez — kısa bir ekran, kesinti rahatsız eder.
- V4 `huzun`, V6 `final`; diğer tüm vakalar aynı `arastirma` parçasını çalar.
  Vakaya göre değişseydi oyuncu daha hiçbir şey bulmadan "bu vakada iş kötü"
  bilgisini duyardı (bkz. `ses_promptlari.md` — Sesin Nurcan Kuralı).

## Kalan iş

- Gerçek ses parçalarının üretilip `ses/` klasörüne `.mp3` olarak konması,
  ardından geçici `.wav` dosyalarının ve `ses/GECICI.md`'nin silinmesi.

## Sonraki aşama: Android

Android paketi Capacitor ile — RAF-102. O aşamada yapılacaklar (HTML sürümü bitmeden ellenmeyecek):

- Görseller base64'ten çıkıp `gorseller/*.jpg` olacak. Tüm arayüz `GORSELLER[ad]`
  üzerinden gittiği için değişen tek şey o haritanın değerleri; oyun kodu aynı kalır.
- Donanım geri tuşu mevcut `geriDon()`'a bağlanacak (şu an geri tuşu uygulamadan çıkar).
- Manifest, ikon, açılış ekranı, paket adı.
