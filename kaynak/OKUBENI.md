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
- `dogrulayici.js`      → çelişki denetleyici (9 kural, bkz. aşağısı)
- `build_html.js`       → derleyici (**DEV_MOD satırı burada**)
- `_gomulu_gorseller.js`→ 33 görsel, base64 (derlemenin girdisi)
- `vaka2-6.json`, `yan_a/b.json` → tekil vaka yedekleri (game_data.json asıldır)
- `test_*.js`           → testler
- `*.md`                → tasarım sözleşmeleri (doğrulayıcı, Cengo bağı, görsel, veri formatı)
- `ses_promptlari.md`   → 8 müzik + 5 efekt için sipariş metinleri

`_gomulu_motor.js` ve `_gomulu_veri.js` her derlemede üretilir, depoya girmez.

## Testler

```
cd kaynak
for t in test_motor test_v2b test_v3b test_v4 test_v5 test_v6 test_yana test_yanb test_softlock test_kayit test_butce; do node $t.js; done
```

`test_bozuk.js` negatif testtir: kasten bozuk veriyle doğrulayıcının BLOCKED
vermesini bekler.

## Doğrulayıcı kuralları

**Hata = oyun bozulur, paketlenemez. Uyarı = tasarım kararı bekliyor.**
Bu ayrım önemli: K1–K4 ve K6'nın ölü içerik kolu çelişki/bozukluk yakalar;
K5, K7, K8, K9 yazarın karar vermesi gereken tasarım sorularıdır.

| | Ne kontrol eder | Şiddet |
|---|---|---|
| K1 | Sözlük — metin/görsel, açılmamış bir ismi sızdırıyor mu (Nurcan kuralı) | hata |
| K2 | Erişilebilirlik — olgu zinciri ulaşılabilir mi | hata |
| K3 | Döngü — needs döngüsü, açık giriş var mı | hata |
| K4 | Truth uyumu — vaka gerçeğiyle çelişen reveal | hata |
| K5 | Belirsizlik — Ceyda/Sevil kesinleşmemeli | uyarı |
| K6 | **Bütçe** — araştırma hakkıyla açılamayan kaynak | ölü içerik: hata / kusursuz sıra: uyarı |
| K7 | **Seçim baskısı** — oyuncu hiç iki kaynak arasında seçmek zorunda kalıyor mu | uyarı |
| K8 | **Baskınlık** — bir karar hem para hem vicdan ekseninde diğerini geçiyor mu | uyarı |
| K9 | **Ölü tohum** — yazılıp hiçbir yerde okunmayan tohum | uyarı |

K6 ve K7 **gerçek motoru** kullanır (`motor.js`): bütün açma sıralarını
dener, böylece simülasyon oyunla birebir aynı davranır. K2 bir kaynağın
*ulaşılabilir* olduğunu söyler; K6 onun **bütçe içinde açılabilir** olduğunu
söyler — ikisi aynı şey değil, aradaki fark canlı bir hataya yol açmıştı.

K8 yalnızca kararlarında `para` bulunan vakalarda çalışır; ekonomi henüz
yazılmamış vakaları sessizce atlar.

K9, tohumları `kisiler.json`, `prolog.json` ve `build_html.js` içinde de arar.

### Açık uyarılar (tasarım kararı bekliyor)

- **K7 · YAN-A, YAN-B, V6**: oyuncu hiçbir noktada iki kaynak arasında seçim
  yapmak zorunda kalmıyor — araştırmamanın bedeli yok.
- **K7 · V6**: final vakasının kaynakları hiçbir geçmiş tohuma bakmıyor.
  `zincir_ozet` koşulsuz (`needs: []`) ve tüm cinayet zincirini veriyor;
  önceki vakaları savsaklayan oyuncu da hazır alıyor.
- **K6 · V2/mahalle_konus, V3/foto_goster, V4/aile_gorusme, V5/ceyda_derin**:
  yalnızca kusursuz sırada açılabiliyor. V5'teki bilinçli (komployu çöz YA DA
  Ceyda'yı oku); diğerleri gözden geçirilmeli.
- **K9**: 12 tohum yazılıp hiç okunmuyor.

## Kayıt sistemi

Tek yuva, otomatik. Motorda `durumAl()` / `durumYukle()`, arayüzde
`localStorage` (`paravan_kayit_v1`).

Kaydedilen **yalnızca girdilerdir**: tohumlar, tamamlanan vakalar, kalıcı
olgular ve aktif vakada açılmış kaynakların id'leri. Türetilmiş `knowledge`,
araştırma hakkı ve giriş metni kaydedilmez — yüklemede güncel veriden yeniden
üretilir. Böylece eski bir kayıt oyuncunun hak etmediği bir olguyu geri
getiremez; Nurcan kuralı kayıt üzerinden delinmez.

Yükleme, kaynakları kaydedildikleri sırayla yeniden açar. Tekrar oynatma aynı
zamanda doğrulamadır: veri değiştiyse ya da kayıt kurcalandıysa bir adım
"kilitli" döner ve kayıt tümden reddedilir, eski durum geri konur.

**Karar verilir verilmez yazılır.** Oyuncu uygulamayı kapatıp kararı geri
alamaz — "geri alınamaz karar" oyunun çekirdeği, kayıt sistemi onu delmemeli.
Bu yüzden tek yuva var, elle kayıt ve çoklu slot yok.

`localStorage` yoksa (gizli sekme, kısıtlı WebView) kayıt sessizce devre dışı
kalır, oyun oynanmaya devam eder. İzole dev testi (🛠 → vakaya atla) ana kaydı
kirletmez.

## Ses

Altyapı kuruldu. Sipariş metinleri: `ses_promptlari.md`.

**Şu an depoda geçici sentetik sesler var** (`ses/*.wav`, ~3 MB) — gerçek
parçalar değil, geliştirme sırasında duyarak test edebilmek için. Ayrıntı:
`ses/GECICI.md`. Oyun `.mp3`'ü önce arar, bulamazsa `.wav`'a düşer; gerçek
`prolog.mp3` konduğu anda geçici `prolog.wav` devre dışı kalır, kodda hiçbir
şey değişmez.

Dosyalar depo kökündeki `ses/` klasörüne konur; `index.html`'e **gömülmez**
(gömülürse dosya 15 MB'ı aşar, müzik akıtılamaz, ilk açılış yavaşlar).
Beklenen adlar `build_html.js` içindeki `MUZIK` ve `EFEKT` haritalarında:

- müzik: `prolog` `masa` `giris` `arastirma` `karar` `sonuc` `huzun` `final`
- efekt: `efekt_dokun` `efekt_kaynak` `efekt_kilit` `efekt_muhur` `efekt_alev`

Uzantı sırası `SES_UZANTILAR = [".mp3", ".wav"]`. Bulunan uzantı akılda tutulur,
her ses için yalnızca bir kez aranır.

Davranış:

- **Dosya yoksa oyun sessiz devam eder.** Eksik dosya bir kez denenir, işaretlenir,
  bir daha istenmez. Bir parçanın eksikliği diğerlerini etkilemez.
- **Otomatik çalma kilidi:** tarayıcı ve Android WebView kullanıcı dokunmadan ses
  çaldırmaz. İlk dokunuşta kilit açılır, bekleyen parça başlar. `play()` reddi
  `NotAllowedError` ise kilit (dokunuş bekleniyor), değilse dosya eksik sayılır —
  ikisi karıştırılırsa tek eksik dosya bütün müziği susturur.
- **Çapraz geçiş:** sahne değişince parça 700 ms'de karşılıklı kısılıp açılır.
- **Ses tercihi kayıt yuvasından ayrıdır** (`paravan_ses_v1`): "baştan başla"
  oyunu sıfırlar ama ses tercihini silmez.
- Kanıt ekranı müziği değiştirmez — kısa bir ekran, kesinti rahatsız eder.
- V4 `huzun`, V6 `final`; diğer tüm vakalar aynı `arastirma` parçasını çalar.
  Vakaya göre değişseydi oyuncu daha hiçbir şey bulmadan "bu vakada iş kötü"
  bilgisini duyardı (bkz. `ses_promptlari.md` — Sesin Nurcan Kuralı).

## Kalan iş

- Gerçek ses parçalarının üretilip `ses/` klasörüne `.mp3` olarak konması,
  ardından geçici `.wav` dosyalarının ve `ses/GECICI.md`'nin silinmesi.
- Yayın öncesi `build_html.js` içinde `DEV_MOD = false`.

## Sonraki aşama: Android

Oyun Android'e Capacitor ile paketlenecek (WebView; motor ve veri olduğu gibi
taşınır). O aşamada yapılacaklar — **HTML sürümü bitmeden ellenmeyecek**:

- Görseller base64'ten çıkıp `gorseller/*.jpg` olacak. Tüm arayüz `GORSELLER[ad]`
  üzerinden gittiği için değişen tek şey o haritanın değerleri; oyun kodu aynı kalır.
- Donanım geri tuşu mevcut `geriDon()`'a bağlanacak (şu an geri tuşu uygulamadan çıkar).
- Manifest, ikon, açılış ekranı, paket adı.
