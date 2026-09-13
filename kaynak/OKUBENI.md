# PARAVAN DEDEKTİFLİK — Kaynak Dosyalar

Yayındaki oyun: https://barbarosgursu-sudo.github.io/paravan/
Depo kökündeki `index.html` **derleme çıktısıdır** — elle düzenlenmez, bu klasörden üretilir.

## Nasıl derlenir

```
cd kaynak
node dogrulayici.js && node build_html.js
```

Derleme depo kökündeki `index.html`'i yeniden yazar. Görseller
`_gomulu_gorseller.js`'ten okunur (33 görsel, base64) ve çıktıya gömülür.

Doğrulayıcı veri dosyasını bulamazsa hata koduyla çıkar; yani doğrulama
koşmadan derleme yapılmaz.

## Dosyalar

- `motor.js`            → oyun mantığı (arayüzsüz, `class Oyun`)
- `game_data.json`      → 8 vaka + kanon (**asıl veri**)
- `game_data.js`        → doğrulayıcının beklediği modül köprüsü (json'u dışa verir)
- `kisiler.json`        → katmanlı künye + anı defteri
- `prolog.json`         → açılış (6 kart)
- `dogrulayici.js`      → çelişki denetleyici (5 kural)
- `build_html.js`       → derleyici (**DEV_MOD satırı burada**)
- `_gomulu_gorseller.js`→ 33 görsel, base64 (derlemenin girdisi)
- `vaka2-6.json`, `yan_a/b.json` → tekil vaka yedekleri (game_data.json asıldır)
- `test_*.js`           → testler
- `*.md`                → tasarım sözleşmeleri (doğrulayıcı, Cengo bağı, görsel, veri formatı)

`_gomulu_motor.js` ve `_gomulu_veri.js` her derlemede üretilir, depoya girmez.

## Testler

```
cd kaynak
for t in test_motor test_v2b test_v3b test_v4 test_v5 test_v6 test_yana test_yanb test_softlock; do node $t.js; done
```

`test_bozuk.js` negatif testtir: kasten bozuk veriyle doğrulayıcının BLOCKED
vermesini bekler.

## Kalan iş

- Ses/müzik (henüz başlanmadı). Ses dosyaları **gömülmeyecek**, `ses/` altında
  gerçek dosya olarak duracak: gömülürse dosya 15 MB'ı aşar, müzik akıtılamaz
  ve ilk açılış yavaşlar.
- Kayıt/sürdürme sistemi (sesten sonra). Motora `durumAl()`/`durumYukle()`
  olarak eklenmeli. Kaydedilecek olan tohumlar + açılmış kaynaklar + kararlar;
  türetilmiş `knowledge` **kaydedilmez**, yüklemede sabit-nokta yeniden
  koşturulur — aksi halde eski bir kayıt oyuncunun hak etmediği bilgiyi geri
  yükleyebilir.
- Yayın öncesi `build_html.js` içinde `DEV_MOD = false`.

## Sonraki aşama: Android

Oyun Android'e Capacitor ile paketlenecek (WebView; motor ve veri olduğu gibi
taşınır). O aşamada yapılacaklar — **HTML sürümü bitmeden ellenmeyecek**:

- Görseller base64'ten çıkıp `gorseller/*.jpg` olacak. Tüm arayüz `GORSELLER[ad]`
  üzerinden gittiği için değişen tek şey o haritanın değerleri; oyun kodu aynı kalır.
- Donanım geri tuşu mevcut `geriDon()`'a bağlanacak (şu an geri tuşu uygulamadan çıkar).
- Manifest, ikon, açılış ekranı, paket adı.
