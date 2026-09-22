# Paravan Dedektiflik

Türkçe, İstanbul-Noir, ahlaki tercih temelli dedektiflik oyunu. Tek dosyalık HTML,
dikey/mobil. Yayında: https://barbarosgursu-sudo.github.io/paravan/

Depo kökündeki **`index.html` derleme çıktısıdır — elle düzenlenmez.** Kaynak `kaynak/`
klasöründe. Ayrıntılı belge: `kaynak/OKUBENI.md`.

> ### ⬅️ YENİ OTURUM: ÖNCE `kaynak/DEVIR.md` OKU
> Bu dosya kalıcı bilgidir (sözleşmeler, tuzaklar, komutlar). `DEVIR.md` ise **oturum
> durumudur**: en son ne yapıldı, sahibi hangi soruya cevap bekliyor, sıradaki iş ne.
> İkisi birlikte okunur. `DEVIR.md` iş ilerledikçe güncellenir ya da silinir.

## Çalışma kuralları

**Hikâyeye yeni ayrıntı eklemek sahibinin işidir.** Metni kısaltmak, sızıntıyı
kapatmak, hükmü kaldırmak, bulanık özneyi netleştirmek — bunlar onarımdır, yapılır.
Ama karakter ya da dünya hakkında **oyunda henüz olmayan bir gerçek yazmak** (ör.
"İlyas o mahallede hiç çalışmaz") kanona ekleme demektir ve ileride sahibinin elini
bağlar. Kural: **eklemeden önce nereye ne ekleyeceğini söyle, onay al, sonra yap.**

**Dal: doğrudan `main`.** Sahibinin duran talimatı: "Değişikliği doğrudan main dalına
commit edip push et, yeni dal açma." Harness sana başka bir dal adı veriyorsa önce
kullanıcıya sor — kendiliğinden dal açma.

**Her commit'ten önce:**
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # test_bozuk.js hariç hepsi geçmeli
```
`test_bozuk.js` bilerek bozuk veri besleyip doğrulayıcının BLOCKED demesini gösteren
bir betiktir — altı senaryonun her birinde BLOCKED basar ve çıkış kodu 0'dır (gösteri
başarılı demektir; buradaki "BLOCKED" çıktısı beklenen sonuçtur, hata değil).
Diğer 21 test geçmelidir.

Doğrulayıcı **13 kural** çalıştırıyor ve hâlihazırda **5 kabul edilmiş uyarı** ile PASS
veriyor (K6 V2/mahalle_konus; K7 V3, V6, YAN-B; K9'un 6 ölü tohumu). Bunlar yazarın
bilinçli kararı, düzeltilecek hata değil. `hata` = oyun kırılır ve paketleme durur;
`uyarı` = tasarım kararı.

**Künye değişikliğinden sonra** `cd kaynak && node arac_kunye_denetim.js` — her
katmanı koşulunun hak ettiği olgularla yan yana basar; sızıntıyı gözle ararsın.
Test değil, araç.

**Çıkarım başlığı değiştirdikten sonra** `cd kaynak && node arac_tahta_denetim.js` —
her başlığı, o çıkarıma ulaşan oyuncunun *kesinlikle* bildiği olguların yanına basar;
fazla söyleyeni gözle ararsın. Künye aracının kardeşi, aynı sebeple insana bırakıldı.

**Karar metni / cengoBag / para değiştirdikten sonra** `cd kaynak && node arac_akis_denetim.js`
— 40 kararın her birinin bütün yüzeylerini (sonuç, Cengo satırı, anı defteri, para, bağ,
ruh hâli, ruh görseli) tek ekranda yan yana basar. Çelişkiler tek dosyanın içinde değil,
anlamla bağlı ama kodla bağlı olmayan yüzeyler ARASINDA duruyor — "Cengo'nun yüzü asık"
notu bağı +2 yükselten bir kararda öyle oturmuştu. `--bayrak` yalnız şüpheli kararları
basar; bayraklar ADAY listesidir, hata listesi değil. Künye ve tahta araçlarının kardeşi,
test değil.

**UI değişikliğinden sonra** `cd kaynak && node arac_ui_tur.js` — oyunu Pixel 5'te
gerçek tıklamayla baştan sona oynatır (JS hatası, yatay taşma, dokunma hedefi,
kayıt-sürdürme). Test değil, araç; `test_*.js` döngüsüne girmez.

## Bozulmaz sözleşmeler

**Nurcan kuralı** — projenin çekirdeği. Hiçbir metin ya da görsel, oyuncunun henüz
hak etmediği bir bilgiyi sızdıramaz. Metin tarafını doğrulayıcı K1/K10/K11 ve
`test_sizinti.js` kolluyor; görsel tarafı `kaynak/gorsel_stil_sozlesmesi.md` §7
(künye portresi de katmanlı — `kisiler.json` → `portre_katman`).

**Künye de Nurcan yüzeyidir** ve uzun süre denetimsiz kaldı. `kisiler.json`
katman metni, o katmanın koşulunun garanti ettiğinden fazlasını söyleyemez.
İki sızıntı bu boşlukta oturuyordu (20 Eylül 2026'da ChatGPT taze göz
incelemesinde bulundu): İlyas'ın "arkasında biri var"ı ve Ceyda'nın "cinayetin
bir ucu onda"sı. K1b artık koşulun gerçekten var olduğunu denetliyor; metnin
fazla söyleyip söylemediği ANLAMSAL bir soru ve mekanik kural bunu yanlış
pozitif üretmeden yapamıyor ("Kaya'nın dul eşi" sızıntı değildir) — o denetim
`kaynak/arac_kunye_denetim.js` ile insana bırakıldı. **Künyeye katman
eklerken ya da metnini değiştirirken o aracı çalıştır.**

**Zincir defteri ÜÇÜNCÜ Nurcan yüzeyidir** ve en genişi: bir vakanın bütün olgularını,
çıkarımlarını ve türetme ağacını tek ekranda basar. Üç kural pazarlığa kapalı:

- **Yalnız hak edilmiş düğüm çizilir.** `ya biri` dalında YALNIZ TUTAN alternatif
  gösterilir — tutmayanı göstermek, oyuncunun sahip olmadığı bir olgunun adını
  söylemektir. `test_tahta.js` bunu davranışsal olarak sınıyor.
- **Eksik düğüm, "?" kutusu, "şu da lazım" YOK.** Olsaydı tahta ipucu sistemine döner
  ve "ekonomi seçenekleri daraltır" sözleşmesini delerdi.
- **Sayaç YOK** ("7 ipucunun 5'i") — o not vermektir.

Çıkarımlar vaka içidir (knowledge dar kümeyle türetilir), o yüzden ağaçlar vaka başına;
vakalar arası bağ KARARLARDADIR (`seeds`) ve tahtanın altında karar satırı olarak durur.
Her çıkarımın `baslik` alanı zorunludur (K12) — yoksa ekranda ham kimliğe düşer.

**Cengo bağı artık hem görülüyor hem duyuluyor.** 31 karar `cengoBag`'i besliyor. 20 Eylül'de
iki yanıt da verildi: görsel (`CENGO_GORSEL`, dört ikili kare) ve metin (`cengo_sonuc`,
17 kararda üç sıcaklık kademesi — soğuk/varsayılan/sıcak). Ayrıntı `cengo_bag_mekanigi.md` §9-10.

**Cengo satırının üç kuralı:**
- **Kararın ÖNCESİNDEKİ bağa bakar.** Sonrasına bakmak yanlış metin üretir: bağ −1'ken
  `koz_yap` (−2) seçilince −3'e düşer ve "uzun zamandır bir şey demiyor" basılırdı — oysa
  adam tam o an tiksindi. İhanet, bulunduğun yere göre ölçülür.
- **Varyant sırası AZALAN eşik olmalı** ve sonda `varsayilan` bulunmalı (K13). `metinSec`
  ilk tutanı döndürür; sıra bozulursa sıcak varyant hiç görünmez, `varsayilan` yoksa satır
  sessizce boşalır. İkisi de hata vermez.
- **Sıcaklık onay değildir.** Bağ güçlendikçe kirli kararlar daha çok acıtır, temiz kararlar
  daha az söze dökülür. Tersi olsaydı sayaç "puan topla, affedil" mekaniğine dönerdi.

Ekrandaki 5 alevlik gösterge notun "görünmez sayaç" ilkesiyle çelişiyor; sahibi şimdilik
kalmasına karar verdi.

**Kanonda ÇÖZÜLMEYEN iki olgu var:** `ceyda_pay` ve `sevil_pay`. `kaya_biliyordu`
da `belirsiz` listesinde ama `belirsiz_istisna` ile V6'da bilerek çözülüyor —
yani "asla çözülmeyen üç şey" demek yanlıştır, ikidir.

**Olgu adları vakalar arasında benzersiz** (K11). Olgular vaka bitince taşınıyor ve
künye birleşik kümeyi okuyor; aynı ad iki vakada iki anlam taşırsa biri ötekinin
kapısını açar.

**Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.** Bütçeyi harcamanın hiçbir
biçiminde oyuncunun elinde yalnızca vicdanı eksi kararlar kalamaz. `test_borc.js`
bunu dokuz vakanın hepsinde sınıyor.

**Kaybetme yok.** Batmak oyunu bitirmez, düzgün olma hakkını daraltır.

**Oyun oyuncuya not vermez.** Tek bir ahlak skoru, sıralama tablosu yok — ve sonuç
metinleri de seçimi yargılamaz. Kalıp: **eylem → sonuç → bedel.** Karar sonucu somut
bir fiille açılır ("İlyas'ı polise teslim ettin"), sonra ne olduğunu gösterir. "Doğru
olanı yaptın", "en adil" gibi hüküm cümleleri yasak; bedeli göster, kararı oyuncu
versin. Nitelik + bedel yapısı ("Onurlu ama ölümcül", "Dürüstsün ama saf") hüküm
değildir, kalabilir — orada oyuncunun seçimi değil dünyanın tepkisi anlatılıyor.
Motorun içindeki `kararRuhHali` sınıflaması (temiz/bedel/bosluk/kirli) oyuncuya
ASLA kelime olarak gösterilmez; yalnızca atmosfer görseli seçer.

## Teknik tuzaklar (hepsine düşüldü)

- **Türkçe İ:** JS'in `/i/` bayrağı U+0130'u katlamaz. `/icra/i` "İcra"yı bulmaz.
  Çözüm: `String(x).toLocaleLowerCase("tr")`.
- **`index.html` tek bir JS şablon dizgisidir** (`build_html.js` içinde). Kaçış
  karakterleri gerçek bir tehlike; `vm.Script` derleme koruması bozuk çıktıyı yazmayı
  reddeder.
- **`DEV_MOD`** `build_html.js` içinde, **şu an `false`**. Bayrak üretilen sayfanın
  içinde yaşar, derleyicinin kapsamında değil. Çıktıda `dev-btn` aramak yanıltıcıdır
  (dizgi koşulun içinde her hâlükârda var). Tek geçerli kontrol tarayıcıda DOM.
  **Ses teşhisi paneli de bu bayrağın arkasında.**
- **Testlerde sabit sayı yazma.** Tekrar tekrar ısırdı: iddiayı rakamla değil
  *ilişkiyle* kur, yoksa veri değişince test yalan söyler.
- **Arayüz/motor ayrışması** sessizdir. İki yerde duran her şey (KRIZLER/KRIZ_METIN,
  kararRuhHali/RUH_GORSEL) test ile eşlenmiştir; yenisini eklerken aynısını yap.
- **`GORSELLER` anahtarı UZANTISIZ.** Sayfa her aramada `.replace('.jpg','')` yapıyor,
  yani `"v5_takip.jpg"` diye gömülen bir görsel hiç bulunamaz. Eksik görsel JS hatası
  vermez, sessizce metin yer tutucuya düşer — `arac_ui_tur.js` de yakalamaz. Düşüldü:
  7 görsel uzantılı gömüldü ve hiçbiri görünmedi. `build_html.js` artık hem uzantılı
  anahtarı hem de gömülmemiş atfı yakalayıp derlemeyi durduruyor; görsel gömdükten
  sonra derlemenin "✓ görsel: N atıfın hepsi gömülü" satırını görmek şart.
- **Tarayıcı turu her şeyi görmez.** JS hatası, yatay taşma, dokunma hedefi ve
  kayıt-sürdürme bakar; eksik görsele, yanlış metne, bozuk yerleşime bakmaz.
- **Ses üç yerde duruyor** — EFEKT tablosu, efektCal çağrıları, `ses/` klasörü.
  Ayrışması sessizdir: çalınmayan bir ses hata vermez, hiç duyulmaz. Düşüldü:
  `efekt_alev` tabloda ve sipariş listesindeydi ama hiç çağrılmıyordu.
  `test_ses.js` üçünü de eşliyor; yeni ses eklerken üçüne birden ekle.

## Doğrulama

UI değişikliği Playwright + Chromium ile tarayıcıda doğrulanır:
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Pixel 5 profili.

## Şu anki durum (Eylül 2026)

Metin, mantık ve ekonomi **bitti**. Fable 5.1 taze göz incelemesi (16 Eylül 2026)
uygulandı — bulgular ve commit'ler `kaynak/inceleme_fable.md`, uygulama talimatları
`kaynak/inceleme_fable_talimat.md`. **Şüpheli** başlığındaki üç tasarım sorusu bilerek
açık bırakıldı (ruh hâli sınıflaması, istatistik paneli, künye tanışma koşulları) —
sahibine sorulacak.

ChatGPT taze göz incelemesi (20 Eylül 2026) — `kaynak/inceleme_chatgpt.md`. **Açık bulgu
kalmadı.** Beş bulgu uygulandı (künyedeki iki Nurcan sızıntısı, "En adil", "Doğru olanı
yaptın", bulanık özne) ve künye kör noktası kapatıldı. A-5 uygulandı (İlyas'ın o
mahallede işi yok) ve A-4 uygulandı (Kaya'nın kendi el yazısıyla defteri) — iki çıkarım
da artık yokluktan değil pozitif kanıttan geliyor. A-3 sahibince **olduğu gibi
bırakıldı**; üç çözüm yolu denendi, üçü de elendi, gerekçeleri notta.

Bu iki eklemenin bağladığı kanon: **İlyas'ın Kaya'nın mahallesiyle bir bağı olduğu**
bir daha yazılamaz, ve **Kaya'nın en ufak bir şüphe duyduğu** bir kurgu yazılamaz —
kendi el yazısı aksini söylüyor. Kaya'nın muayenehanesi de artık içine girilebilen,
eşyaları duran bir yer.

**Görseller: 63 gömülü** (sezon 59'da kapatılmıştı; 20 Eylül'de sahibinin kararıyla
Cengo–Peri ikili kareleri için 4 slot açıldı — `gorsel_promptlari_2.md` PAKET 7).
WebP q80,
`_gomulu_gorseller.js` içinde base64; veride tanımlı her slot dolu. Sahibinin kararı:
**sezon 59'da kapanmıştı, 63'e açıldı.** (20 Eylül'de ayrıca iki slot **yeniden üretildi** — `v1_merdiven`
kanona aykırı bir binadaydı, `portre_ilyas_v2` olmayan bir temiz yanak gösteriyordu;
sayım değişmedi, bkz. `gorsel_promptlari_2.md` PAKET 6.) Paket 5'in dört görseli (kriz kutusu + sezon sonu) sipariş
edilmedi — bağlanacakları slot veride hiç açılmamıştı, açmak arayüz işi gerektiriyor;
gerekçe ve dönülecek yer `kaynak/gorsel_promptlari_2.md` PAKET 5 başlığında.

Yeni görsel gerekirse boru hattı değişmedi: 900 px genişliğe indir, WebP q80 ile göm,
öncesinde üç kontrol — mevcut setle parlaklık karşılaştırması, büyütülmüş harf/rakam
taraması (plaka, tabela, etiket, kâğıt yüzü), ve slotun `gosterir`ine karşı Nurcan
kontrolü. Tekrar tekrar ısıran ders: genel "yazı olmasın" satırı, gövdede **açıkça
istenmiş** bir nesneyi geçersiz kılamaz. Yazı taşıyabilecek nesnenin yüzü gövdede
kapatılır ("dosya KAPALI", "kâğıt katlı, iç yüzü görünmüyor"), boş yüz istenmez.

Aynı ailenin üç varyantı da ısırdı, üçü de `gorsel_promptlari_2.md` PAKET 6'da:

- **Açık uçlu nesne listesi yazma.** "Dağılmış birkaç eşya" deyince üretici boşluğu
  yazı taşıyan bir nesneyle doldurdu (kapağı yaldızlı monogramlı bir defter) — üstelik
  o defter A-4 kanonuyla çelişiyordu. **Kadrajdaki nesneler tek tek sayılır**, istenmeyen
  nesne sınıfları adıyla yasaklanır.
- **Görsel yalan söyleyebilir.** "Yarası görünmesin" demek yarayı saklatmaz, **yarasız
  bir yüz ürettirir**. Kanondaki fiziksel gerçek kadraj dışında bırakılır, silinmez —
  kural `gorsel_stil_sozlesmesi.md` **§7c**.
- **Sol/sağ talimatı ters anlaşılıyor.** "Sağ yanağını görüyoruz" tutmadı; **"burnu
  kadrajın sağına baksın, kulağı solunda kalsın"** ilk seferde tuttu. Yön talimatını
  yanak/kaş ile değil burun-kulak geometrisiyle yaz.

**Rötuşun sınırı:** düz bir yüzeydeki nesne klonlanarak silinebilir (`yanb_kirinti`
böyle düzeldi). Ama silinecek bölgeden **yapısal bir çizgi geçiyorsa** (basamak kenarı,
kiriş, sövenin hattı) klonlama o çizgiyi kesiyor ve ek yeri belli oluyor — orada
yeniden üretim şart. Merdivendeki defter bu yüzden rötuşla kaldırılamadı.

Kalan tek iş:

- **Ses — yalnızca efektler. ARKA PLAN MÜZİĞİ YOK (19 Eylül 2026).**
  Sahibinin kararı: müzikli hâli beğenilmedi. Sekiz parçanın altısı üretilmiş,
  döngüleri kesilmiş, −18 LUFS'a hizalanmış ve gömülmüştü; katman tamamen
  söküldü — MUZIK tablosu, muzikCal/muzikBaslat/muzikDur, çapraz geçiş,
  vakaModu, dokuz çağrı yeri, 14 ses dosyası. Oyun artık **sessizlik + beş
  kısa efekt** üzerine kurulu.

  Kalan iş: `ses/efekt_*.wav` **5 sentetik yer tutucu** gerçek `.mp3` ile
  değiştirilecek. Sipariş metinleri `kaynak/ses_promptlari.md` → BÖLÜM 2.
  Efektler müzik değil; Suno/Udio üretemez, metinden efekt üreten bir araç
  ya da hazır kütüphane gerekir. Silinecek not: `ses/GECICI.md`.

  **Müzik geri istenirse** sıfırdan başlanmaz ama kod işi gerektirir: ev
  standardı, sekiz stil satırı, kesme noktaları ve hizalama tarifi
  `ses_promptlari.md`'de kayıt olarak duruyor; motor silindiği için geri
  getirilmesi gerekir. `test_ses.js` müzik izinin geri sızmadığını kasten
  kolluyor — karar geri alınırsa o test de bilerek güncellenmeli.

Sonrası Android aşaması (bilerek ertelendi): Capacitor, görselleri base64'ten
çıkarma, donanım geri tuşu, erişilebilirlik, ve `kaynak/final_tablo_plani.md`'deki
sezon sonu istatistik tablosu.
