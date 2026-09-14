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
- `game_data.json`      → 9 vaka + kanon (**asıl veri**)
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
- `final_tablo_plani.md`→ sezon sonu istatistik tablosu (yazılmadı; Android aşamasının planı)

`_gomulu_motor.js` ve `_gomulu_veri.js` her derlemede üretilir, depoya girmez.

## Testler

```
cd kaynak
for t in test_*.js; do node $t; done
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
- **K9**: 9 tohum yazılıp hiç okunmuyor. Üçü (`cavit_guven`, `v2_karar`,
  `v4_karar`) itibar sistemine bağlandı; kalanlar ya Sezon 2 ipi
  (`peri_yuzlesti`, `adres_kime`) ya da henüz karşılığı yazılmamış. Silinmedi — bunlar ekonominin
  ihtiyaç duyacağı şeyler (hangi kararı verdin → itibar → müşteri ücreti;
  `cavit_guven` → hangi işler sana geliyor). Ekonomi turunda bağlanacak.

### Kapatılan tuzaklar

- **V1/cengo_baglanti** bedelsiz yapıldı: needs'i iki kaynak istiyor, kendisi
  de hak istiyordu; yanlış sırada harcayan oyuncu listede görüp açamıyordu.
- **V1/sigorta_yazisi** bedelsiz yapıldı: üç haktan birini yiyordu ama
  karşılığında girişte zaten söylenen şeyi tekrarlıyordu; açtığı olgu
  (`sigorta_sorusturma`) hiçbir çıkarımda kullanılmıyor. Sigorta eksperi
  zaten Peri'yi tutan taraf, dosyayı ona vermesi doğal. Metni de keskinleşti:
  artık ödemenin donduğunu ve "bağımsız uzman raporu" beklendiğini söylüyor —
  yani oyuncuya kendi rolünü anlatıyor (Cavit'in satın aldığı şey imza).
  V1'de hâlâ 4 ücretli kaynak / 3 hak var; seçim baskısı korundu.
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
| Cengo'ya elden ödeme | 28.075 ₺ | 2026 **net** asgari ücret, birebir |
| İşletme | 9.000 ₺ | elektrik, telefon, yakıt |
| **Aylık toplam** | **59.075 ₺** | |
| Borç faizi | %10 / ay | tefeci; borç varsa her omurga vakada biner |

Vaka ücretleri gerçek dedektiflik fiyatlarına dayanıyor: aldatma araştırması
20–50 bin, kayıp kişi 40–100 bin, günlük 4–9 bin ₺.

**Neden net ücret, işveren maliyeti değil:** resmî çalışanda 2026 toplam
işveren maliyeti ~40.214 ₺. Paravan bir **paravan şirket**; Cengo'ya elden
ödeme yapılıyor, bu yüzden nakit çıkışı net tutar kadar. Kalem adı bunu
söylüyor ki rakamın hangi muhasebe kaleminden geldiği belirsiz kalmasın.
Cengo resmîleştirilirse aylık gider ~71.214 ₺ olur ve tüm denge yeniden
ayarlanmalıdır.

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

### V2 — kıtlık ayı

V2'nin müşterisi Nesrin gazeteden gelen bir yürüyen müşteri: "tanıdık, kadın
ve **ucuz** bir kapı" aradığı için Peri'ye geldi. Bu yüzden ücret düşük —
anlaşılan ücret 18.000 ₺, aldatma araştırması bandının (20–50 bin) altı.

| Karar | Para | Vicdan | Neden o kadar |
|---|---|---|---|
| Parayı al, kuru rapor ver | 18.000 ₺ | −1 | Sözleşme neyse o; pazarlık da yok teşekkür de |
| Rahatlatıcı bir yalan kur | 18.000 ₺ | −1 | Ücreti eksiksiz öder — **yalan fazladan kuruş getirmez** |
| Nesrin'e her şeyi anlat | 14.000 ₺ | 0 | İş bitti ama iş artık hukuki; kalan para avukata gidiyor |
| Sadece 'aldatmıyor' de | 10.000 ₺ | +1 | Kuşkusu bitmediği için işi bitmiş saymıyor; kaporayı bırakıp gerisini tutuyor |

İki −1 seçeneğin parası **kasten eşit**: K8 eşit vicdanda para farkını
baskınlık sayar, ama asıl sebep tematik — yalan söylemek Peri'ye hiçbir şey
kazandırmıyor, sadece bir şey kaybettiriyor.

**V2 tasarım gereği zararlı bir ay.** En iyi ihtimalle 18.000 ₺ giriyor,
59.075 ₺ çıkıyor: oyuncu V2'den her hâlükârda daha fakir çıkar (V1'i temiz
oynayan 70.925 → 29.850; reddeden 5.925 → 38.665 ₺ borç). Tez şu: dürüst
müvekkil kirayı ödemez. Rahatlama hemen sonra gelen **YAN-A** ile geliyor —
yan vakalarda sabit gider kesilmiyor.

Dikkat: masa sıralı. V1 → V2 → (YAN-A) → V3 → V4 → (YAN-B) → V5 → V6.
`masadakiVakalar()` yan vakayı yalnızca `belirir.sonra === son tamamlanan`
iken gösteriyor; omurgaya geçen oyuncu onu **kalıcı olarak** kaybediyor.
Yan vakayı önce oynamak omurgayı düşürmüyor.

Bu kayıp kasıtlı — ama söylenmezse tuzak. Masadaki yan iş kartı artık şunu
yazıyor: *"Beklemez — büyük dosyaya dönersen başkasına gider."*

Eski yazı (*"İstersen bak — zaman ve para senden gider"*) uyarı eksikliğinden
daha kötüydü: yan vakalarda sabit gider **kesilmiyor** ve yan iş ücret
getiriyor, yani cümle oyuncuyu tam ters yöne itiyordu. Oyunun deyimi
"metinle uyar, engelleme" (bkz. "Bu karar geri alınamaz."), o yüzden onay
kutusu değil kart yazısı seçildi. `test_yana.js` hem düşme davranışını hem
kartın uyarıyı taşıdığını kilitliyor.

### V3 — kirli paranın en yüksek olduğu ay

Müşteri yine Cavit ve istediği şey V1'dekinden ağır: doğruyu söyleyen yaşlı
bir kadını "güvenilmez" diye rapor ettirmek. Vicdanın fiyatı da ona göre
yükseliyor — V1'in tavanı 65.000 ₺ idi, V3'ün tavanı 85.000 ₺.

| Karar | Para | Vicdan | Neden o kadar |
|---|---|---|---|
| Tanığı 'güvenilmez' diye rapor et | 85.000 ₺ | −2 | Cavit'in sipariş ettiği tek şey buydu: dosyayı kapatan belge |
| İlyas'ı Cavit'e teslim et | 70.000 ₺ | −1 | Rapor yazılmadı, ama Cavit aldığı şeye daha çok değer veriyor |
| Kendine sakla, koz yap | 40.000 ₺ | +1 | Ortada rapor yok, sadece bir görüntü; ücretin bir kısmını tutar |
| İlyas'ı polise ver | 0 ₺ | +2 | Sonuç metninin kendi sözü: Cavit "ödemeyi keser" |

`tanigi_lekele` tek kapısız karar (`gate: "yok"`). Yani hiç araştırmayan
oyuncunun önünde yalnızca **en çok kazandıran ve en kirli** seçenek duruyor.
Bakmamak para kazandırıyor — tez tam olarak bu.

Üç aylık eğri (yan vakalar hariç, başlangıç 65.000 ₺):

| Yol | V1 | V2 | V3 |
|---|---|---|---|
| En kirli | 70.925 ₺ | 29.850 ₺ | 55.775 ₺ |
| Orta | 50.925 ₺ | 9.850 ₺ | 20.775 ₺ |
| Koz tutan | 50.925 ₺ | 9.850 ₺ | 10.148 ₺ borç |
| En temiz | 5.925 ₺ | 47.465 ₺ borç | 117.194 ₺ borç |

### Karar önizlemesi motorun hesabını tekrar eder

Karar ekranındaki "ay sonunda …" satırı `Math.max(0, kalan)` basıyordu; kasa
eksiye düşemediği için bu, 37.225 ₺'lik bir çukuru **"ay sonunda 0 ₺"** diye
gösteriyordu. Artık motorun kapanış sırasını birebir taklit ediyor —
önce sabit giderler, sonra borcun **tamamına** faiz — ve ikinci bir satırda
oluşacak borcu yazıyor ("borç 40.948 ₺"). Zaten borçlu oyuncuda uyarı
"borca girersin" değil "borcun büyür" oluyor.

İki hesabın aynı kalmasını `test_ekonomi.js` kilitliyor: motorun kapanış
sırası değişirse test patlar ve arayüzün de güncellenmesi gerektiğini söyler.

### Eline geçen para borcu kapatır

Kasa ve borç iki ayrı sayaç gibi işliyordu: oyuncu 30.925 ₺ kasa **ve** büyüyen
33.000 ₺ borçla dolaşabiliyordu, borçtan çıkışın hiçbir yolu yoktu. Artık
kapanış sırası şöyle: kararın parası → sabit giderler → borcun tamamına faiz →
**kalan kasa borcu kapatır**. Alacaklı sormaz, alır. Yan işlerde de geçerli.

Bu, borcu bir cezadan gerçekten tırmanılabilir bir çukura çevirdi ve YAN-C'yi
mümkün kıldı — o düzeltme olmadan 120.000 ₺ kazanmak borcu kapatmıyordu.

## YAN-C "Adres" — borç tetikli vaka

Omurgayla hiçbir ilgisi yok. Borç **80.000 ₺**'yi geçince masaya düşer ve
`belirir.sonra: "her"` olduğu için koşul sürdükçe orada kalır; masa kartı da
bunu yazar ("Gitmiyor. Ne zaman dönsen orada"). Kirli oynayan oyuncu bu vakayı
hiç görmez.

Hulki adında bir adam tek bir şey ister: bir adres. Ödeyeceği rakam bir adres
için değil, bir adresin sessizliği için. Peri'yi nereden bulduğu vakanın
kalbi — Cengo'nun bedelsiz sorusu onu açar: *"Bu herif senin borcunu nereden
biliyor?"* Borç, öğrenilecek bir şey değil; duyulur. Artık bir fiyatın var ve
fiyatını sen koymadın.

| Karar | Para | Vicdan | Kapı |
|---|---|---|---|
| Adresi ver, parayı al | +120.000 ₺ | −2 | `ayla_yeri` |
| Yanlış adres ver, kaporayı al | +40.000 ₺ | 0 | `kadin_adi` |
| İşi reddet | 0 ₺ | +1 | yok |
| Ayla'yı bul ve uyar | **−15.000 ₺** | +2 | `ayla_yeri` |

Oyunun **cebinden ödeten ilk kararı** bu. K8'in kuralı zaten "vicdan
yükseldikçe para düşer" diyordu; en vicdanlı seçenek sıfırın da altına iniyor.

**Bütçe kasten yetmiyor.** Hak 3, ücretli kaynak 4. Otuz iki harcama yolunun
hiçbirinde oyuncu hem adresi (`ayla_yeri`) hem tam resmi (`neye_alet` =
uzaklaştırma kararı + adamın bunu daha önce de yaptırmış olması) alamıyor.
Yani *"kime alet olduğunu bil ve yine de sat"* mümkün; *"her şeyi bil"* değil.
Hiç araştırmayanın önünde tek seçenek kalıyor: reddetmek. Para istiyorsan
bakmak zorundasın.

Borç 117.194 ₺ iken `adresi_ver` borcu sıfırlıyor ve geriye **3.000 ₺**
bırakıyor. Kadını sattın ve hâlâ beş parasızsın — kurtuluş değil, takas.

## YAN-A "Kapalı Defter" — nefes alma yeri

Yan iş, sabit gider kesmediği için gelen para doğrudan nefes demek. V2'den
47.465 ₺ borçla çıkan oyuncu burada borcunu neredeyse kapatabiliyor.

| Karar | Para | Vicdan | Neden o kadar |
|---|---|---|---|
| Sevil'e 'biliyorum' diye çık | 65.000 ₺ | −1 | Ücret + fazlası: sırrını bilen bir kişi daha var |
| Tehdidi çöz, geçmişe dokunma | 45.000 ₺ | 0 | Anlaşılan ücret; iş yapıldı |
| Sevil'in işini geri çevir | 12.000 ₺ | +1 | Yapılan iş kadarı; asıl ücreti eline almadın |
| Cengo'ya bırak, karışma | 0 ₺ | +2 | Arkadaşının kendi defteri için fatura kesilmez |

### K8'in yakaladığı gerçek çelişki

`sessiz_coz` ve `isi_gecevir` **ikisi de +1 vicdandaydı**. Biri işi çözüp para
getiriyor, öteki geri çevirip getirmiyor — yani aynı ahlak, daha çok para.
`isi_gecevir`'i seçmek için hiçbir sebep kalmıyordu. Bu, para eklenmeden de
var olan bir tasarım hatasıydı; K8 onu para eklenince görünür kıldı.

Çözüm `sessiz_coz`'ü **0**'a indirmek oldu: bir yabancının derdini para
karşılığı çözmek ve fazlasını sormamak **meslek**, erdem değil. İşi
Cengo'nun hatırına geri çevirmek ise 33.000 ₺'lik bir erdem.

### Sessiz çözümün sonucu koşullu

`sessiz_coz`'ün kapısı `tehdit_kim`; oyuncu Cengo'nun geçmişini **hiç
öğrenmeden** bu kararı verebiliyor. Eski metin ona "kapalı defter kapalı
kaldı" diyordu — olmayan bir sırrı ele veriyordu. Üç varyant:

| Bilgi | Metin |
|---|---|
| `gecmis_tam` | "Cengo'nun onun yerine neyi üstlendiğini biliyorsun — ve söylemedin." |
| `gecmis_sezildi` | "İkisi arasında bir şey olduğunu sezdin ama üstüne gitmedin." |
| varsayılan | "Kadının neden bu kadar korktuğunu hiç öğrenmedin — sormadın da." |

### Karanlıkta tek iplik

Borçlu oyuncunun elektriği kesik olduğu için YAN-A'da **2 değil 1** araştırma
hakkı var. Bu, iki dalın yalnızca birine yetiyor:

| Harcadığın hak | Açılan kararlar |
|---|---|
| `tehdit_arastir` | sessiz_coz (45.000 ₺) · isi_gecevir (12.000 ₺) |
| `eski_kayit` (+ bedelsiz `cengo_cumle`) | biliyorum_cik (65.000 ₺) · cengoya_birak (0 ₺) |

Yani en çok kazandıran seçenek (65.000 ₺) ancak Cengo'nun geçmişini kurcalayan
oyuncunun önüne çıkıyor, ve o dalda orta yol yok: ya arkadaşının yarasını
açarsın ya hiç para almazsın. Kimse bunu tasarlamadı — krizin bütçeyi kısması
ile kapıların dizilişi çarpıştı. Kalsın: oyunun tezi tam olarak bu.

## İtibar: geçmiş kararlar ücreti değiştirir

Tohumlar yazılıp hiç okunmuyordu — V1'de Cavit'e doğruyu söylemekle
söylememek sonraki hiçbir şeyi etkilemiyordu. Artık etkiliyor.

Vakaya `ucret_etkisi` eklenebiliyor:

```json
"ucret_etkisi": [
  { "kosul": {"seed":"cavit_guven","esit":false}, "carpan": 0.7,
    "metin": "Cavit sana eskisi gibi güvenmiyor — işi veriyor, parasını kırpıyor." }
]
```

| Vaka | Koşul | Çarpan |
|---|---|---|
| V3, V5 | `cavit_guven = false` | **×0.70** — Cavit'in güvenini kaybettin |
| V5 | `v4_karar = "koz"` | **×1.15** — Kaya'nın gizli parası elinde bir koz |
| YAN-A | `v2_karar = "hersey"` | **×0.80** — konuştuğun duyuldu, sır müşterisi pazarlık eder |

Etkiler **birleşiyor**: güven yok + koz var → ×0.80.

### Neden VAKA düzeyinde, karar düzeyinde değil

Karar düzeyinde ölçeklemek K8'in para/vicdan merdivenini bozardı. Vaka
düzeyinde ölçeklemek pozitif bir sabitle çarpmak demek; sıralamayı koruyor,
yani K8'in statik analizi geçerli kalıyor. Vakanın tamamı zenginleşiyor ya da
fakirleşiyor, kararlar arası ödünleşim aynı duruyor. `test_itibar` bunu her
çarpan değeri için doğruluyor.

**Yalnızca POZİTİF ücret ölçekleniyor.** İtibarını kaybetmek, Peri'nin kendi
cebinden ödediğini ucuzlatmaz — YAN-B'nin −40.000 ₺'si her hâlükârda 40.000 ₺.

### Oyuncu bunu karar vermeden ÖNCE görüyor

Karar ekranında ücret satırlarının üstünde bir kutu: *"▼ %30 Cavit sana
eskisi gibi güvenmiyor — işi veriyor, parasını kırpıyor."* Sonuç ekranındaki
hesapta da satır *"anlaşılan 85.000 ₺, itibar ×0.70"* diyor. Önizleme ile
motorun uyguladığı rakamın aynı olması `test_itibar`'da kilitli.

K9 uyarısı 12 → **9** ölü tohuma indi.

## V5 "Kim Kimi" — Cavit'in ödediği şey sessizlik

| Karar | Para | Vicdan | Metnin kendi sözü |
|---|---|---|---|
| Belli etme, oyunu sürdür | +80.000 ₺ | −2 | "**Para akar**, güvenliktesin" |
| Cavit'in dediğini yap, kazma | +55.000 ₺ | −1 | "**Para geldi.** Neyi temizlediğini hiç öğrenmedin" |
| Ceyda'yı hedef al | +30.000 ₺ | 0 | İstediğini yapmadın, ücret kırpıldı |
| Sessizce kanıt biriktir | +15.000 ₺ | +1 | Ne vur ne teslim ol — az iş, az ücret |
| Bildiğini Cavit'in yüzüne vur | 0 ₺ | +2 | "**Para biter**, artık sen de bir tehditsin" |

Rakamları ben koymadım, metinler söylüyordu. `test_v5` o cümlelerle rakamı
birbirine bağlıyor: "Para akar" diyen karar en çok kazandıran olmalı, "Para
biter" diyen sıfır olmalı.

**Ayı kârla kapatan tek seçenek `oyunu_surdur`** — yani her şeyi bilip örtmek.

### V5'te İKİ çift eşitlik vardı

`cavite_vur` ile `kanit_biriktir` ikisi de +1; `oyunu_surdur` ile `kazma` ikisi
de −1 idi. Her iki çiftte de biri para getiriyor öteki getirmiyor. Ayrım
metinlerde zaten vardı:

- **Bilerek örtmek, bakmamaktan ağır.** `oyunu_surdur`'un kapısı `tam_resim`
  (bilmeden seçilemiyor), `kazma`'nınki "yok" (bilmeyenin seçeneği).
  −2 ve −1.
- **Parayı kaybetmeyi göze almak, para akarken kanıt biriktirmekten ağır.**
  +2 ve +1.

## V6 — dört bilgi durumu, dört ayrı kapanış

Eskiden zinciri çözemeyen **herkes** tek bir zorunlu kapanışa düşüyordu ve
metin ona *"Kimseyi ele vermedin çünkü verecek kimsen yoktu"* diyordu.
İlyas'ı katil olarak bilen oyuncu için bu düpedüz yalandı: verecek biri vardı.

| Durum | Ne biliyor | Ne sunuluyor |
|---|---|---|
| **A** | Hiçbir şey; peşine hiç düşmedi | Dosyayı kapat |
| **B** | Bir şeyin tutmadığını gördü, isim yok | Dosyayı kapat *(farklı metin)* |
| **C** | **İlyas'ın ittiğini biliyor** | **İlyas'ı ele ver** · **sus** |
| **D** | Zincirin tamamı | Dört seçenek |

C artık gerçek bir ikilemle karşılaşıyor: elindeki tek ismi verir ya da gömer.
Gömerse Cavit ödüyor (+70.000 ₺) — **neden bu kadar kolay ödediğini bilmeden.**

### Kapı neden tohumla açılıyor

Kararların kapıları **dar** bilgi kümesiyle çalışır: yalnızca o vakanın kendi
olguları. `iten_ilyas` V3'ün olgusu, V6'nın değil — doğrudan kapı olarak
kullanılamaz. `iten_biliniyor` tohumu tam bu iş için V3'te zaten yazılıyordu
ama bugüne kadar hiçbir yerde okunmuyordu. Artık okunuyor.

### Metinler dört durumu da ayırıyor

- **A**: "Peşine düşmedin, o yüzden verecek kimsen de olmadı."
- **B**: "Baktın, sordun, bir şeyin tutmadığını gördün — ama elinde bir isim yok."
- **C**: "Elindeki tek ismi verdin… onu oraya kimin sürdüğünü sen de hiç
  öğrenemedin." — **Cavit, Ceyda, "mimar" kelimeleri geçmiyor.**
- **D**: "asıl mimar Cavit ve belki asıl akıl Ceyda paçayı kurtarabilir."

Son ekran da ayrışıyor: zinciri bilmeyene *"mimarlar gölgede kaldı"*
denmiyor, çünkü mimarların varlığını bilmiyor.

`test_v6` dördünü de ve C metninin sızdırmadığını kilitliyor.

## V6 "Kaya Biliyor muydu" — finalde ücret yok, sonuç var

V6'nın da müşterisi yok; bu Peri'nin kendi son sorusu. Para burada bir ücret
değil, **kararın sonucu**:

| Karar | Para | Vicdan |
|---|---|---|
| Hiçbirini verme, sus | +70.000 ₺ | −1 |
| İlyas'ı ele ver | 0 ₺ | 0 |
| Ceyda'yı ele ver | 0 ₺ | 0 |
| Dosyayı kapat | 0 ₺ | 0 |
| Hepsini ifşa et | 0 ₺ | 0 |
| Cavit'i ele ver | −20.000 ₺ | +1 |

Dört seçeneğin sıfırda eşit olması bir boşluk değil, bir iddia: **parayı
değiştiren tek şey susmak (ödüllendiriliyor) ve hamini vermek
(cezalandırılıyor).** Metinler de bunu söylüyordu — `sus_bilerek` "ajans
yaşar", `cavit_ver` "o senin geçim kaynağındı, ajans batabilir".

Bu sayede V6'da hiçbir vicdan değeri değiştirilmedi; finalin ahlaki dengesi
yazıldığı gibi duruyor.

### K8'in bilmediği bir şey

`boslukla_kapat`'ın kapısı `{not: zincir_tam}`, diğer beşininki `zincir_tam`.
Yani oyuncuya **asla birlikte sunulmuyorlar**; aralarında "baskınlık" diye bir
şey olamaz. K8 bunu bilmiyor. Şu an ikisi de sıfırda olduğu için sorun
çıkmıyor, ama biri değişirse yanlış alarm verir. `test_v6` kapının bu hâlini
kilitliyor.

## Sezonun tam eğrisi

Üç gidişat, yan işler önce alınarak (aylık gider 59.075 ₺):

| | Bitiş | Cengo |
|---|---|---|
| En kirli | 118.550 ₺ kasa, hiç borca girmedi | **−12** (gitti) |
| Orta | 92.207 ₺ borç | −1 |
| En temiz | 140.030 ₺ borç | **+1** |

Dikkat çeken şey en temiz yolun Cengo'yu yalnızca +1'de bitirmesi: vicdanlı
kararlar bağı yükseltiyor ama **ödeyemediğin her ay bir düşürüyor.** Cengo'ya
iyi davranmakla Cengo'ya ödeyebilmek aynı şey değil.

## V4 "Küçük Hasta" — müşterisi olmayan ay

V4'ün **müşterisi yok.** Cengo'nun eski dosyalarda bulduğu bir kâğıt var ve
Peri merakına uyuyor. Ücret ödeyen kimse olmadığı için para ancak ipi
**çekmeyerek** ya da bildiğini kendine saklayarak geliyor — yani ayın kalanını
ödeyen işlere ayırarak.

| Karar | Para | Vicdan | Neden o kadar |
|---|---|---|---|
| Bilgiyi kendine sakla, koz yap | +25.000 ₺ | −2 | Ayın kalanı ödeyen işlere gitti; bildiğin de cebinde |
| Boş ver, bu ipi çekme | +18.000 ₺ | −1 | Ay boş geçmedi, küçük işlerle idare ettin |
| 'Artık gelmeyecek' de | 0 ₺ | +1 | Ne aldın ne verdin |
| Aileye gerçeği söyle | −10.000 ₺ | +2 | O haberi verip elin boş çıkamazsın |
| Kimliği sakla, sessizce çözüm ara | −35.000 ₺ | +3 | Tedavinin devamını kendi kasandan üstlendin |

V4 omurga vaka, yani ay kapanıyor ve sabit giderler kesiliyor. **En kârlı
seçenek bile ayı zararla bitiriyor** (25.000 ₺ girdi, 59.075 ₺ çıktı).

### Üçüncü kez aynı çelişki

`aileye_soyle` ile `sessiz_coz` **ikisi de +2 idi.** Biri gerçeği söyleyip
çekiliyor, öteki kimliği saklayıp tedavinin devamını kendi cebinden
üstleniyor. `sessiz_coz` **+3**'e çıktı; kendi metni zaten
*"Onurlu ama sana pahalı — Peri de beş parasız"* diyordu.

Bu, yan vakalardaki ikisiyle birlikte **üçüncü** örnek. Vicdan değerleri
başlangıçta kabaca "iyi / çok iyi" diye konmuş, ince ayrım yapılmamış; para
ekseni eklenince hepsi tek tek görünür oldu. K8'in asıl işi buymuş.

## YAN-B "Enkaz" — kazanç kapısı olmayan vaka

İki yan iş birbirinin aynası. YAN-A nefes aldırır; YAN-B **hiçbir seçeneğinde
para kazandırmaz.**

Sebebi vakanın kendisi: Nadire beş parasız, ve onu batıran Peri. Ondan ücret
almak düşünülemez. En iyi ihtimal sıfır; gerisi Peri'nin cebinden çıkıyor.

| Karar | Para | Vicdan | Neden o kadar |
|---|---|---|---|
| Geçiştir, kendini koru | 0 ₺ | −2 | Hiçbir şey vermedin, hiçbir şey de almadın |
| Sadece dolandırıcıyı çöz | −8.000 ₺ | +1 | Adamın peşine düşmek para yedi, onu sen karşıladın |
| Geçmişle yüzleş, gerçeği söyle | −18.000 ₺ | +2 | O cümleden sonra kadına masraf yazamazsın |
| Nadire'ye tam sahip çık | −40.000 ₺ | +3 | Kaybettiğinin bir kısmını kendi kasandan kapattın |

Oyunun tek "kaçmak bedava, doğru olan pahalı" vakası. `gecistir`'in sıfırı bir
ödül değil, yalnızca maliyetin yokluğu — ve vicdan ekseninde oyunun en dibi.

### Yine K8, yine gerçek bir çelişki

`tam_sahip_cik` ile `gercegi_soyle` **ikisi de +2 idi.** Biri yalnızca itiraf,
öteki itiraf **artı** kadının zararını kendi cebinden kapatmak. Aynı vicdan
değerinde farklı para, K8'e göre baskınlık — ve haklı: sözle sahiplenmek ile
parayla sahiplenmek aynı şey değil.

`tam_sahip_cik` **+3**'e çıktı. Kararın kendi metni bunu zaten söylüyordu:
*"Suçunu sahiplenmenin en pahalı, en dürüst hali."*

`test_yanb`'deki "tam_sahip_cik +2" iddiası da sabit sayıdan kurtarıldı:
artık bağı verideki değer kadar yükselttiğini ve YAN-B'nin en vicdanlı kararı
olduğunu doğruluyor.

## Borcun sonuçları

Borç bir sayı olarak kalırsa kimseyi sıkmaz. **Ödenmeyen her gider kaleminin
kendi sonucu var.** Hangi kalemin açık kaldığı, ödeme sırasından çıkıyor
(`game_data.json` → `ekonomi.gider` yazılış sırası):

**Ofis kirası → Cengo'ya elden ödeme → İşletme (elektrik)**

Yani para azaldıkça önce ışıklar söner, sonra Cengo'nun eline geçen kalmaz,
en son ev sahibi harekete geçer.

| Açık kalan | Sonuç | Mekanik |
|---|---|---|
| İşletme | Elektrik kesildi | Sonraki vakalarda araştırma hakkı **−1** (bkz. çekirdek kaynak) |
| Cengo'ya ödeme | "Cengo'nun eline geçmedi" | `cengoBag` **−1**, her açık kalan ayda yeniden |
| Ofis kirası | Ev sahibi icraya verdi | Aylık giderlere **12.000 ₺** takip masrafı eklenir |

### Çekirdek kaynak: cezanın silemeyeceği delil

Krizler araştırma **genişliğini** kısabilir, ama bir vakanın başlığını anlamlı
kılan tek delili erişilemez kılamaz. Aksi halde ekonomik ceza, anlatı
içeriğini elinden alır.

Bir kaynağa `cekirdek: true` konur. Elektrik kesikken araştırma hakkı şöyle
hesaplanır:

```
hak = max( max(1, çekirdeğe ulaşmanın maliyeti),  tam bütçe − 1 )
```

Maliyet **gerçek motorla** ölçülüyor (doğrulayıcının K6'da yaptığı gibi):
needs zincirini ve bedelsiz kaynakları kendiliğinden doğru sayıyor. Ceza yoksa
hesap hiç çalıştırılmıyor — hem gereksiz hem de aramanın kurduğu kopyalar
`vakaBaslat` çağırdığı için özyinelemeye yol açardı. Kopyaların krizi boş
olduğundan arama kendiliğinden sonlanıyor.

Şu an tek çekirdek: **V6/`kaya_izi`** — "Kaya Biliyor muydu" vakasının tek yeni
delili. Eskiden onu koruyan şey tesadüftü (taban 1 ile çekirdeğin maliyeti 1
çakışıyordu); bütçe 2 olsaydı koruma çalışmayacaktı. Artık hesap yapılıyor:
bütçe 3 olsa ceza yine uygulanır (3 → 2) ama çekirdek erişilebilir kalır.

**Eşik: kalemin yarıdan fazlası açık kalmalı.** Kirasının dörtte üçünü ödeyen
kiracı icraya verilmez. Bu eşik olmadan tek kötü ay üç krizi birden
patlatıyordu ve tırmanma diye bir şey kalmıyordu.

**Hiçbiri oyunu bitirmez ve hepsi geri alınabilir:** kalem ödendiği ay sonuç
kalkar. Yan işler ay kapatmadığı için kriz de değerlendirmez.

Cezanın vakayı kilitlememesi `test_borc.js`'te korunuyor: elektrik kesikken de
dokuz vakanın her birinde, bütçeyi harcamanın her biçiminde en az bir karar
açık kalıyor.

Oyuncu üç yerde görüyor: sonuç ekranında kriz kutusu (yeni patlayan), kasa
şeridinde rozet (süren), araştırma ekranında sönük noktanın sebebi.

**Kriz metinleri iki yerde duruyor** — motorda `KRIZLER`, arayüzde
`KRIZ_METIN` — çünkü arayüz motordan okuyamıyor. İkisinin ayrışmasını
`test_borc.js` yakalıyor.

### Testler ve ekonomi

`test_yana`, `test_yanb`, `test_softlock` vakaların İÇERİK mantığını sınıyor
(türetme, kapı, karar), ekonomiyi değil. Kasa boşken elektrik kesiliyor ve
araştırma hakkı azalıyor; bu gerçek bir davranış ama o testlerin ölçtüğü şey
değil. Hepsi artık `varlikli()` ile başlıyor — ajans ödeyebilir durumda, vaka
tam bütçeyle sınanıyor.

### Koşul dilinde borç

`ifadeCalistir` artık beşinci bir argüman alıyor: kasa (`{para, borc}`).
`{borc_en_az: 80000}` terimi bunu okuyor — `cengoBag_en_az` ile simetrik.

Motor içinde koşullar **yalnızca `this._kos()` üzerinden** değerlendiriliyor.
Sebebi şu: kasayı geçirmeyi unutan bir çağrı hata vermez, koşul sessizce
yanlış döner ve metin hiç görünmez. Tek kapı, unutulacak yer bırakmıyor.

### Kalan

Dokuz vakanın **40 kararının hepsinde** `para` yazılı; K8 hepsinde çalışıyor.
Yan vakaların ücretsiz olması özellikle önemli: V2, V4 ve temiz oynanan V3
zararlı aylar, nefes alma yeri yan işler. Yan
vakaların ücretsiz olması özellikle önemli: V2 ve temiz oynanan V3 zararlı
aylar, tek nefes alma yeri yan işler — ama şu an sıfır getiriyorlar.

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
