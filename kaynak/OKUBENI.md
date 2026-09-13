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
for t in test_motor test_v2b test_v3b test_v4 test_v5 test_v6 test_yana test_yanb test_softlock test_kayit test_butce test_ekonomi test_sizinti; do node $t.js; done
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
| K10 | **Olgu sızıntısı** — metin, bir kişinin söylediğine gönderme yapıyor ama o olgu needs'te yok | hata |

K6 ve K7 **gerçek motoru** kullanır (`motor.js`): bütün açma sıralarını
dener, böylece simülasyon oyunla birebir aynı davranır. K2 bir kaynağın
*ulaşılabilir* olduğunu söyler; K6 onun **bütçe içinde açılabilir** olduğunu
söyler — ikisi aynı şey değil, aradaki fark canlı bir hataya yol açmıştı.

K8 yalnızca kararlarında `para` bulunan vakalarda çalışır; ekonomi henüz
yazılmamış vakaları sessizce atlar.

K9, tohumları `kisiler.json`, `prolog.json` ve `build_html.js` içinde de arar.

**K10, K1'in açığını kapatır.** K1 İSİM sızıntısına bakar ve girişte tanıtılan
isimleri serbest sayar — ama bir ismin sahnede olması, o kişinin NE DEDİĞİNİ
bilmek demek değildir. Canlı oyunda yakalanan hata tam buydu: V1'de komşu
ifadesinin meta'sı "ama Ceyda 'yalnızdım' demişti" diyordu, oysa oyuncu Ceyda
ile henüz görüşmemiş olabilirdi. K1 susuyordu çünkü Ceyda girişte tanıtılıyor.

### Koşullu metin

Kaynakların `text` ve `meta` alanları düz dizgi yerine varyant dizisi olabilir:

```json
"meta": [
  {"kosul": "ceyda_saat", "metin": "... ama Ceyda 'yalnızdım' demişti."},
  {"kosul": "varsayilan", "metin": "... o saatte dairede iki kişi varsa, biri konuşmadı."}
]
```

Motorda `metinSec()` çözer. Koşullu metin desteklenen yerler: kaynak `text`
ve `meta`, karar `sonuc`, anı defteri notu (`defterNotu`), ve vaka `giris`
varyantları. Hak eden oyuncu bağlantıyı görür, etmeyen sızıntı görmez.

**Metin koşulları GENİŞ bilgi kümesini görür** (`_metinBilinen`): aktif
vakadakiler + önceki vakalardan taşınan kalıcı olgular + tohumlar. Mekanik
kapılar (`needs`, `gate`) bunu kullanmaz; onlar dar kümeyle çalışır — yoksa
V1'de öğrenilen bir olgu V5'te kaynak açardı. Bu ayrım olmadan "önceki vakada
bunu öğrenmiştin" diyen bir varyant asla tetiklenmez.

### Açık uyarılar (tasarım kararı bekliyor)

- **K7 · V3 ve V6**: oyuncu hiçbir noktada iki kaynak arasında seçim yapmak
  zorunda kalmıyor. İkisi de **kabul edilmiş**: V3 düz bir teşhis zinciri
  (ağırlığı İlyas'ı ne yapacağında — 4 ayrı ahlaki karar), V6 ise final
  (ağırlığı kimi ele vereceğinde). Araştırma seçimi bu iki vakanın konusu değil.
- **K6 · V2/mahalle_konus**: kaçıran oyuncunun elinde 4 karardan 3'ü kalıyor.
  Derinlik ödülü olarak makul; dokunulmadı.
- **K9**: 11 tohum yazılıp hiç okunmuyor. Silinmedi — bunlar ekonominin
  ihtiyaç duyacağı şeyler (hangi kararı verdin → itibar → müşteri ücreti;
  `cavit_guven` → hangi işler sana geliyor). Ekonomi turunda bağlanacak.

### Kapatılan tuzaklar

- **V1/cengo_baglanti** bedelsiz yapıldı: needs'i iki kaynak istiyor, kendisi
  de hak istiyordu; yanlış sırada harcayan oyuncu listede görüp açamıyordu.
- **V3/foto_goster** bedelsiz yapıldı: iki açılış kaynağı (`cavit_brief`,
  `mahalle_yokla`) aynı kapıya çıkıyor. İkisini birden alan oyuncu — ki bu
  doğal bir hamle — teşhise yetişemiyor ve elinde yalnızca "tanığı lekele"
  kalıyordu. Artık 10 yolun hepsinde 4 karar da açık.
- **V6/zincir_ozet** V5'teki komplo çözümüne bağlandı; çözemeyen oyuncu
  `eldekiler` ile boşluğun kendisiyle yüzleşiyor.
- **V6'da susmak ikiye ayrıldı**: `sus_bilerek` (zinciri kurdu, söylemedi —
  sert sonuç, vicdan −1) ve `boslukla_kapat` (kuramadı, suçlayacak delili
  yok — mahkûmiyet ve ceza YOK). Kapılar `zincir_tam` ve `{not: zincir_tam}`
  olduğu için ikisi asla birlikte sunulmuyor; başka seçeneği olmayan oyuncuya
  ahlaki fatura kesilmiyor.
- **İstatistik paneli yalnızca SUNULAN kararları gösteriyor** ve oranları o
  kümede 100'e ölçekliyor. Tek seçenek varsa panel hiç görünmüyor — dağılım
  diye bir şey yoktur. Eskiden oyuncunun hiç göremediği seçeneklerin oranı da
  gösteriliyordu.
- **Son ekranı `hepsi` anahtarı**: eşlemede `hepsini_ifsa` yazıyordu ama karar
  `final_karar: "hepsi"` yazıyor. O final cümlesi hiç görünmüyormuş.

## Sızıntı testi (test_sizinti.js)

Doğrulayıcının 10 kuralı **yapıya** bakar. Ama oynanışta bulunan hataların
çoğu yapı olarak geçerli, **anlam olarak yanlış**: metin, oyuncunun o an
sahip olmadığı bir olguyu varsayıyor. Şema doğrulaması bunu göremez.

Bu test oyunu uçtan uca, farklı bilgi derinliklerinde oynar ve her ekranda
gösterilen metni oyuncunun O ANDAKİ bilgisiyle karşılaştırır.

Oynanan gidişatlar:

| Gidişat | Ne yakalar |
|---|---|
| En az bilgi (hiç araştırma yok) | sonuç/defter metinlerinin varsaydığı bilgi |
| Tam araştırma | normal akışta sızıntı |
| Her şey (yan vakalar dahil) | yan vaka metinleri |
| V4 savsaklandı ama komplo çözüldü | V6'nın V4 bilgisini hediye etmesi |
| V1 savsaklandı, gerisi derin | erken savsaklamanın sonraki vakalara etkisi |

**İma sözlüğü** elle yazılır ve bilinçli olarak dardır: "şu kelime geçiyorsa
şu olgulardan biri bilinmeli". Böylece yanlış alarm üretmez; yakaladığı her
şey gerçek sızıntıdır. Bir vaka kendi konusunu tanıtıyorsa `haric` ile
muaf tutulur (örn. V4'ün girişi isimsiz ödemeyi zaten tanıtır).

Test ayrıca `_durum_matrisi.txt` üretir: her gidişatta her ekranda ne yazdığının
tam dökümü. Otomatik kural her şeyi yakalayamaz; bu dosya **elle okunmak
içindir** ve oynamadan gözden geçirmeyi mümkün kılar.

## Ekonomi

**Para bir skor değil, bir kısıt.** Biriktirilip maksimize edilmez; bittiğinde
seçenekler kapanır. Batmak oyunu bitirmez — düzgün olma hakkını elinden alır.
Kaybetme durumu **yok**.

Rakamlar 2026 seviyelerine göre (`game_data.json` → `ekonomi`):

| Kalem | Tutar | Dayanak |
|---|---|---|
| Başlangıç kasası | 65.000 ₺ | bir aylık gideri ancak karşılıyor |
| Ofis kirası | 22.000 ₺ | İstanbul ortalaması 75.450 ₺; Paravan arka sokakta, dökük |
| Cengo'nun maaşı | 28.075 ₺ | 2026 net asgari ücret, birebir |
| İşletme | 9.000 ₺ | elektrik, telefon, yakıt |
| **Aylık toplam** | **59.075 ₺** | |
| Borç faizi | %10 / ay | tefeci; borç varsa her omurga vakada biner |

Vaka ücretleri gerçek dedektiflik fiyatlarına dayanıyor: aldatma araştırması
20–50 bin, kayıp kişi 40–100 bin, günlük 4–9 bin ₺.

### Kurallar

- **Sabit giderler yalnızca OMURGA vaka bitince kesilir.** Bir omurga vaka bir
  ay demek; yan iş aynı ayın içinde yapılır, ikinci kira ödetmez. Bu yan
  işleri finansal olarak anlamlı kılar.
- **Kasa asla eksiye düşmez**; eksik kısım borca yazılır (`paraDus`).
- Kaynaklar `ucret` taşıyabilir (muhbire ödeme, kayıt satın alma). Kasa
  yetmiyorsa kaynak kapanır — yoksulluk bilgiye erişimi kısıtlar.
- Kararlar `para` taşır: kararın net parasal sonucu.

### Arayüz

- **Kasa şeridi** her ekranda: tutar + anlamı ("bir aylık gideri ancak
  karşılıyor"). Çıplak sayı baskıyı okunmaz yapar, sayısız gösterge körleştirir.
- **Karar ekranında rakam YOK**, niteliksel etiket var: "tam ücret",
  "ücretin bir kısmı", "ödeme yok", "cebinden çıkar". Kesin tutar görünürse
  ahlaki seçim hesap işine döner.
- **Sonuç ekranında tam döküm**: ücret, araştırma masrafı, kalem kalem
  giderler, faiz, kasa ve borç.

### Baskınlık kuralı (K8)

Para ve vicdan eksenleri **ters sıralanmalı**. Bir seçenek hem daha çok para
hem daha çok vicdan getiriyorsa o bir ikilem değil, doğru cevaptır.

V1 bunun ilk örneği. Eski vicdan değerleri (−1, 0, +1, +1) para eklenince
baskın seçenek üretiyordu: `gizli_kaz` hem para getiriyor hem +1 vicdan,
`reddet`i (aynı +1, sıfır para) anlamsız kılıyordu. Yeni sıralama:

| Karar | Para | Vicdan |
|---|---|---|
| Temiz rapor ver (göm) | 65.000 ₺ | −1 |
| Raporu ver, sessizce kaz | 45.000 ₺ | 0 |
| Şüpheni Cavit'e söyle | 25.000 ₺ | +1 |
| İşi reddet | 0 ₺ | +2 |

K8 ayrıca göreli ödünleşimi kontrol eder: en çok kazandıran seçenek aynı
zamanda en vicdanlısı olamaz. 65.000 yerine 0 almak da bir bedeldir.

### Kalan

V1 dışındaki 7 vakanın para değerleri henüz yazılmadı (31 karar). K8 bu
vakaları sessizce atlıyor; `para` eklendiği anda devreye giriyor.

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
