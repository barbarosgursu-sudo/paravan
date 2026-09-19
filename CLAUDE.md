# Paravan Dedektiflik

Türkçe, İstanbul-Noir, ahlaki tercih temelli dedektiflik oyunu. Tek dosyalık HTML,
dikey/mobil. Yayında: https://barbarosgursu-sudo.github.io/paravan/

Depo kökündeki **`index.html` derleme çıktısıdır — elle düzenlenmez.** Kaynak `kaynak/`
klasöründe. Ayrıntılı belge: `kaynak/OKUBENI.md`.

## Çalışma kuralları

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
Diğer 18 test geçmelidir.

Doğrulayıcı **11 kural** çalıştırıyor ve hâlihazırda **5 kabul edilmiş uyarı** ile PASS
veriyor (K6 V2/mahalle_konus; K7 V3, V6, YAN-B; K9'un 6 ölü tohumu). Bunlar yazarın
bilinçli kararı, düzeltilecek hata değil. `hata` = oyun kırılır ve paketleme durur;
`uyarı` = tasarım kararı.

**UI değişikliğinden sonra** `cd kaynak && node arac_ui_tur.js` — oyunu Pixel 5'te
gerçek tıklamayla baştan sona oynatır (JS hatası, yatay taşma, dokunma hedefi,
kayıt-sürdürme). Test değil, araç; `test_*.js` döngüsüne girmez.

## Bozulmaz sözleşmeler

**Nurcan kuralı** — projenin çekirdeği. Hiçbir metin ya da görsel, oyuncunun henüz
hak etmediği bir bilgiyi sızdıramaz. Metin tarafını doğrulayıcı K1/K10/K11 ve
`test_sizinti.js` kolluyor; görsel tarafı `kaynak/gorsel_stil_sozlesmesi.md` §7
(künye portresi de katmanlı — `kisiler.json` → `portre_katman`).

**Olgu adları vakalar arasında benzersiz** (K11). Olgular vaka bitince taşınıyor ve
künye birleşik kümeyi okuyor; aynı ad iki vakada iki anlam taşırsa biri ötekinin
kapısını açar.

**Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.** Bütçeyi harcamanın hiçbir
biçiminde oyuncunun elinde yalnızca vicdanı eksi kararlar kalamaz. `test_borc.js`
bunu dokuz vakanın hepsinde sınıyor.

**Kaybetme yok.** Batmak oyunu bitirmez, düzgün olma hakkını daraltır.

**Oyun oyuncuya not vermez.** Tek bir ahlak skoru, sıralama tablosu yok.

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

**Görseller bitti (19 Eylül 2026).** 59 gömülü görsel, WebP q80,
`_gomulu_gorseller.js` içinde base64; veride tanımlı her slot dolu. Sahibinin kararı:
**sezon 59'da kapandı.** Paket 5'in dört görseli (kriz kutusu + sezon sonu) sipariş
edilmedi — bağlanacakları slot veride hiç açılmamıştı, açmak arayüz işi gerektiriyor;
gerekçe ve dönülecek yer `kaynak/gorsel_promptlari_2.md` PAKET 5 başlığında.

Yeni görsel gerekirse boru hattı değişmedi: 900 px genişliğe indir, WebP q80 ile göm,
öncesinde üç kontrol — mevcut setle parlaklık karşılaştırması, büyütülmüş harf/rakam
taraması (plaka, tabela, etiket, kâğıt yüzü), ve slotun `gosterir`ine karşı Nurcan
kontrolü. Tekrar tekrar ısıran ders: genel "yazı olmasın" satırı, gövdede **açıkça
istenmiş** bir nesneyi geçersiz kılamaz. Yazı taşıyabilecek nesnenin yüzü gövdede
kapatılır ("dosya KAPALI", "kâğıt katlı, iç yüzü görünmüyor"), boş yüz istenmez.

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
