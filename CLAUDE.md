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
bir betiktir; çıkış kodu 1'dir ve bu normaldir. Diğer 17 test geçmelidir.

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

## Doğrulama

UI değişikliği Playwright + Chromium ile tarayıcıda doğrulanır:
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Pixel 5 profili.

## Şu anki durum (Eylül 2026)

Metin, mantık ve ekonomi **bitti**. Fable 5.1 taze göz incelemesi (16 Eylül 2026)
uygulandı — bulgular ve commit'ler `kaynak/inceleme_fable.md`, uygulama talimatları
`kaynak/inceleme_fable_talimat.md`. **Şüpheli** başlığındaki üç tasarım sorusu bilerek
açık bırakıldı (ruh hâli sınıflaması, istatistik paneli, künye tanışma koşulları) —
sahibine sorulacak.

Kalan iki iş:

1. **Görseller.** 44 gömülü görsel, WebP q80, `_gomulu_gorseller.js` içinde base64.
   Hedef 63 slot. Sipariş metinleri `kaynak/gorsel_promptlari_2.md` içinde; kalıp,
   tek parça kopyala-yapıştır promptlar. Paket 1 (YAN-C), 1-EK (`portre_dolandirici`)
   Paket 6 (karar ruh hâlleri) ve Paket 1-DÜZELTME gömüldü; bekleyen Paket 2-5, 19 görsel.
   Gelen görsel 900 px genişliğe indirilip WebP q80 ile gömülür. Gömmeden önce üç
   kontrol: mevcut setle parlaklık karşılaştırması, büyütülmüş harf/rakam taraması
   (plaka, tabela, etiket), ve slotun `gosterir`ine karşı Nurcan kontrolü.
2. **Ses.** `ses/*.wav` 13 sentetik yer tutucu. Sipariş metinleri
   `kaynak/ses_promptlari.md`, silinecek not `ses/GECICI.md`.

Sonrası Android aşaması (bilerek ertelendi): Capacitor, görselleri base64'ten
çıkarma, donanım geri tuşu, erişilebilirlik, ve `kaynak/final_tablo_plani.md`'deki
sezon sonu istatistik tablosu.
