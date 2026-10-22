# Paravan Dedektiflik

Türkçe, İstanbul-Noir, ahlaki tercih temelli dedektiflik oyunu. Tek dosyalık HTML,
dikey/mobil. Yayında: https://barbarosgursu-sudo.github.io/paravan/

Depo kökündeki **`index.html` derleme çıktısıdır — elle düzenlenmez.** Kaynak `kaynak/`
klasöründe. Ayrıntılı belge: `kaynak/OKUBENI.md`.

> ### ⬅️ VAKA 3 İÇİN: ÖNCE `sablon/vakalar/vaka3_baslangic.md` OKU (sonra DEVIR.md) — Vaka 2 dondu (16 Ekim 2026)
>
> ### ⬅️ YENİ OTURUM: ÖNCE `kaynak/DEVIR.md` OKU
> Bu dosya kalıcı bilgidir (sözleşmeler, tuzaklar, komutlar). `DEVIR.md` ise **oturum
> durumudur**: en son ne yapıldı, sahibi hangi soruya cevap bekliyor, sıradaki iş ne.
> İkisi birlikte okunur. `DEVIR.md` iş ilerledikçe güncellenir ya da silinir.

## Çalışma kuralları

**Replikler anlaşılır yazılır (17 Ekim 2026, sahibinin kararı).** Çok kısa, şifreli cümle yok; her replik ilk
okumada kim/neyi/neden söylediğini taşır, ama telefondaki kutuya (~110 harf) sığar. Ayrıntı ve örnekler:
`sablon/2_kural_kitabi.md` kural 5, `sablon/7_uretim_sureci.md` → bulanık replik taraması ("Fazla kısa mı?").
Aynı gün: **yüzleşmede suçlunun paniği somut bir sebebe bağlanır** (kanıt yalanı çürütür ya da sakladığı şey
tehlikeye girer); zayıf bir sözle kaçış yok — `sablon/1_oyun_yapisi.md` → Yüzleşme sahneleri.

**Hikâyeye yeni ayrıntı eklemek sahibinin işidir.** Metni kısaltmak, sızıntıyı
kapatmak, hükmü kaldırmak, bulanık özneyi netleştirmek — bunlar onarımdır, yapılır.
Ama karakter ya da dünya hakkında **oyunda henüz olmayan bir gerçek yazmak** (ör.
"İlyas o mahallede hiç çalışmaz") kanona ekleme demektir ve ileride sahibinin elini
bağlar. Kural: **eklemeden önce nereye ne ekleyeceğini söyle, onay al, sonra yap.**

**Dal: doğrudan `main`.** Sahibinin duran talimatı: "Değişikliği doğrudan main dalına
commit edip push et, yeni dal açma." **Yan dallara asla push etme, yalnız `main`'e gönder**
(17 Ekim 2026). Harness başka bir dal adı verse de sormadan `main`'e push et
(`git push origin HEAD:main`). Oturum sonu denetimi "dalda gönderilmemiş commit var" derse yan
dalı push ETME: yerelde `git fetch origin main && git checkout -B main origin/main` ile `main`'e geç.

**Her commit'ten önce:**
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # test_bozuk.js hariç hepsi geçmeli
```
`test_bozuk.js` bilerek bozuk veri besleyip doğrulayıcının BLOCKED demesini gösteren
bir betiktir — yedi senaryonun her birinde BLOCKED basar ve çıkış kodu 0'dır (gösteri
başarılı demektir; buradaki "BLOCKED" çıktısı beklenen sonuçtur, hata değil).
Diğer 26 test geçmelidir (22'si eski oyunun; `test_yeni_v1.js`, `test_yeni_v2.js`, `test_yeni_arayuz.js` ve `test_yeni_kimyapti.js` yeni oyunun).

Doğrulayıcı eski oyunda **15 kural** çalıştırıyor (K16 kararsız yol dahil; K15 yalnız yeni oyunda) ve hâlihazırda **5 kabul edilmiş uyarı** ile PASS
veriyor (K6 V2/mahalle_konus; K7 V3, V6, YAN-B; K9'un 6 ölü tohumu). Bunlar yazarın
bilinçli kararı, düzeltilecek hata değil. `hata` = oyun kırılır ve paketleme durur;
`uyarı` = tasarım kararı.

**Yeni oyunun verisi `kaynak/yeni/`'de** (Vaka 1 + açılış; eski oyunun verisine dokunmaz).
`cd kaynak && node dogrulayici.js yeni` onu denetler — argümansız çağrı eski oyunu denetler.
Yeni oyun **yapım şablonuyla** üretilir: `sablon/` (7 parça + `vakalar/`). Şablon ile bu
dosya çelişirse yeni oyun için şablon geçerlidir. Yeni oyunun motor eki `kaynak/motor_yeni.js`
(Kim yaptı?, ücret sonda) — `motor.js`'e dokunulmaz, eski sayfa birebir aynı kalmalı.
Doğrulayıcı yeni oyunda ayrıca K17 (giriş), K18 (ipucu adı), K19 (Kim yaptı?) çalıştırır.
Veri JSON'unu elle değil `arac_json_yaz.js` ile yaz (kısa, okunur biçim).
Sahne satırı biçimi, K15/K16 ve açık uyarılar: `kaynak/yeni/OKUBENI.md`. Vaka metni
`sablon/vakalar/vakaN_diyalog.md`'de değişir; veriye `node arac_diyalog.js <dosya> <vaka>`
yazar (elle değil). Açılış metni hâlâ `YENI_VAKA_1.md` → `yeni/acilis.json`.

**Yeni oyunun sayfası:** `cd kaynak && node build_html.js yeni` → depo kökünde
`yeni/index.html` (yayında `…/paravan/yeni/`). Eski sayfanın betiği aynen kullanılır;
konuşma ekranı `kaynak/yeni_arayuz.js` + `.css`'ten eklenir, görseller
`kaynak/yeni/gorseller.json` manifestosundan gömülür. Argümansız derleme eski
`index.html`'i üretir ve ondan **birebir aynı** çıkar — yeni kip eski sayfaya dokunmaz.
Kayıt anahtarı ayrı (`paravan_yeni_kayit_v1`): iki oyun aynı alan adında. Yeni kip
`_gomulu_veri.js`'in üstüne yazar; ardından argümansız derleme onu yeniden üretir.
Konuşma ekranı değişince `node arac_yeni_tur.js [karar] [set|dukkan]` — yeni oyunu
Pixel 5'te baştan sona oynatır, görüntüleri `kaynak/YENI_UI/`'ye yazar. Test değil, araç.
Vaka 2 için yol adı ver: `node arac_yeni_tur.js [karar] [ortu|vale|terzi|defne] [dogru|zayif|lal|tolga]`
(Vaka 1 önce hızlı oynanır; V1 → V2 geçişi de böylece denenir).
`--hepsi` eklenirse incelenen vakanın HER satırı `YENI_UI/satir/`'a görüntülenir ve `dokum.txt`'ye
konuşan/kime/arka/kare/figür anahtarıyla dökülür — görselli tur denetimi (adım 11) bununla yapılır.
**Kim yaptı? kanıtları kısa adla (18 Ekim 2026):** diyalogda `## kanit` (`**olgu_id:** Kısa ad`) → `kim_yapti.kanit_ad`.
Liste düz, tam metin ▾ ile; sonuç ekranı ✓/✗ + "Elindeydi". Ad olgunun metninden fazlasını söylemez (Nurcan). Adı olmayan vaka tam metne düşer.
**"Dosya çözüldü" de Nurcan yüzeyidir (20 Ekim 2026, sahibi buldu):** yalnız oyuncunun ELİNDEKİ kanıt anılır — açılmamış
ipucunun olgusu orada basılırsa hem sızıntı olur hem reklamlı "kaçan ipucu"nu bedavaya açar. Seçim `motor_yeni.js → cozumYolu()`;
`test_yeni_kimyapti.js` her ipucu alt kümesi × şüpheli × çifti sınar.
Aynı kural suçlamadan sonraki METİNLERE de uyar (22 Ekim 2026): `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız
her yolda oynayan sahnelerin (yüzleşme + kovalamaca itirafı) söylediğini anar; ipucu olgusunu değil. Mekanik yakalanmaz, elle oku.
**Her vakadan sonra sızıntı taraması** (sahibinin kararı): `cd kaynak && node arac_sizinti_tur.js [VN] [tur]` — farklı yollardan
oynar, her ekranda bilinmeyen olgu arar (çıkış 1 = sızıntı) ve `YENI_UI/sizinti_okuma.txt`'yi elle okunmak üzere yazar.
Şablon 7. parça adım 5 ve 14. Test değil, araç.
Defter de vaka başına (17 Ekim 2026): Zincir yalnız içinde bulunulan vakayı gösterir; Anı her biten vakanın
**anı özetini** (diyalogda `## ani`, `kisiler.json → ani_ozet`; kural 21d: yalnız itirafın söylediği), kimi
suçladığını, kararını, kasayı ve Peri'nin notunu basar (`yeni_arayuz.js → defterZincir, defterAni`).
Künye (Kişiler) yalnız içinde bulunulan vakanın kişilerini gösterir (`yeni_arayuz.js → vnKisiGorunur`);
portre `python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`. Deneme reklamı (`reklamGoster`,
+1 hak ve kaçırılan ipuçları) ve test için vaka düğmeleri (`VN_VAKA_ATLA`, yayından önce `false`):
`kaynak/YENI_OYUN_CERCEVE.md`.
**Paylaş (davet kartı, 17 Ekim 2026) — yalnız yeni oyun.** Biten vaka "Arkadaşına öner" düğmesiyle
paylaşılır (kapanıştan sonraki ekran — kaçan ipucu yoksa "Dosya kapandı" — ve Defter → Anı). Kart
1080×1920 tarayıcıda çizilir (`yeni_arayuz.js → paylasKartCiz`): vakanın afişi (`gorseller.json → kart`; yoksa
`kapak` arka planı) ve altta KÜÇÜK bir kutu — vaka no/adı, "Sen olsan ne yapardın?" — ile bağlantı. Sahibinin
kuralı: önce resim, yazı az; girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`). **Suçlu, karar, suçlama, kasa, not
karta GİRMEZ** (Nurcan — arkadaş oynamadı; ve oyun not vermez). `navigator.share` varsa görselle paylaşır,
yoksa indir + bağlantıyı kopyala. Afiş promptları ve iş sayfası `sablon/kart_sayfa/uret.py`; yeni vakanın afişi
için kurallar `sablon/5_gorsel_sistemi.md` → G. Bağlantı önizlemesi (`og:` etiketleri) `build_html.js yeni`'de; görseli
`yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`. Anı karşılaştırması ve davet kodu Android aşamasında.
Ayrıca `satir/adi_gecen_yok.txt`: anlatıda adı geçen ama ekranda olmayan kişiler (aday; grup ve
"annesi" gibi sözleri yakalamaz). Sahibinin kuralı: adı geçen herkes ekranda — tek kişi `gir`, kalabalık kare.
`--tablet` eklenirse (herhangi bir yere) Pixel 5 yerine dikey tablette (800×1280) oynatır ve
tam sayfa görüntü alır; tablet eşiği tutmazsa hata basar. Yeni vaka bittiğinde iki kipte de koş.
`--cihaz` eklenirse oyun bir kez oynanır, seçilen her anda sayfa **19 ekran boyuna** (telefonlar,
iPhone Safari çubuklu, telefon yatay, tablet dikey/yatay — 1280×650 çubuklu dahil, dizüstü,
masaüstü) getirilip görüntülenir ve ölçülür (`kaynak/arac_cihaz.js`; ~3 dk). Çıktı
`YENI_UI/cihaz/`: her an için bütün boylar yan yana bir karşılaştırma sayfası + `bayraklar.txt`.
Bayraklar ADAY'dır: yatay taşma, figür başı kadraj dışı, konuk/Peri boy oranının Pixel 5'ten
%12'den fazla sapması (Lâl/Defne hatasını yakalar), arka planın %65'ten azı görünmesi (ilk
tablet hatasını yakalar), Peri'nin küçülmesi, kutunun ekranı yemesi, küçük dokunma hedefi.
Eşikler `ESIK` tablosunda. Yeni vaka, yeni görsel ya da düzen değişikliğinden sonra koş;
Telefon yatayda (alçak, dokunmatik, yatay ekran) oyunun üstüne **"Telefonu dikey çevir"** uyarısı
biner (`yeni_arayuz.css` sonu, `body::before`; sahibinin kararı, Ekim 2026 — sahne ~170 px'e iniyordu).
Araç o boyu "dikey uyarısı" diye işaretler, altını ölçmez. Bilinen tek bayrak: 1280×650'de seçim
ekranı (arka planın ~%51'i görünür, kutu büyüdüğü için) — göze batmıyor.

**Tablet düzeni (Ekim 2026) — yalnız yeni oyun, `kaynak/yeni_arayuz.css`.** Dikey tablette
sabit 480 px sütun sahneyi 1:2'den uzun yapıyordu: 3:4 arka plan iki yandan ~%40 kesiliyor,
figürler kadrajdan taşıyordu. Üç kural birlikte çözüyor, birini bozma:
- `.vn` genişliği `max(480px,56dvh)` — sütun yüksekliğe göre genişler, oran telefondakine
  yakın kalır. Telefon ve yatay ekran 480 px tabanında kalır.
- `@media (min-width:600px) and (min-height:1050px)` eşiğinde konuşma ekranının yazısı
  elle ~%30 büyür; eski arayüzün ekranları ise `#app > :not(.vn){zoom:1.3}` ile ölçeklenir
  (`#app` 676 px = 520 × 1,3, iç düzen telefondakiyle aynı). `.vn` `#app`'in İÇİNDE —
  `:not(.vn)` olmazsa iki kez büyür. Kişiler paneli `.vn .vn-kisiler` ile `.vn`'i kaplar
  (özgüllük şart: dosyanın sonundaki `.vn-kisiler` kuralı aksi hâlde ezer).
- Yatay tablet / geniş ekran (`min-width:1000px` ve `min-height:700px`): yalnız `#app`
  ekranları aynı `zoom:1.3` ile büyür; konuşma ekranı BİLEREK 480 px'te kalır — 800 px
  yükseklikte genişlerse 3:4 arka plan üstten/alttan kesilir, figürün başı ya da ayağı gider.
- Figür katmanı (`.vn-figurler`) Pixel 5 oranına (393/498) kilitli; yüksekliği `.vn-sahne`'nin
  container birimleriyle hesaplanır (`max(78cqh, min(115cqh, 100cqw·498/393))`). Konukların
  `gorseller.json → boy` ölçekleri telefonda ayarlandı ve telefonda figürler genişliğe takılıp
  küçülüyor; kilit olmadan geniş sahnede Peri tam boya çıkıp konuk %20 kısa kalıyordu (Lâl,
  Defne). Telefon birebir aynı. `min-width:0` şart — yoksa aspect-ratio içerikle ezilir.
- Yeni bir ekran ya da pencere `#app`'in ya da `.vn`'in DIŞINA eklenirse bu kurallar ona
  uygulanmaz; tablette ayrıca bak. Yeni arka plan 3:4 değilse kesim oranı değişir.
Eski oyunun sayfası bu kurallara girmez (CSS yalnız `build_html.js yeni`'de gömülür).

**Künye değişikliğinden sonra** `cd kaynak && node arac_kunye_denetim.js` (yeni oyun: `… yeni`) — her
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

**Bir vakayı baştan sona okumak için** `cd kaynak && node arac_okuma.js V1` — vakanın
bütün metnini oyuncunun karşılaştığı sırayla düz okunur hâlde basar: yazarın gerçeği,
giriş, ipuçları (bedelsiz olanlar işaretli), açılan olgular, çıkarımlar, kararların
bütün yüzeyleri, tohumlar. `--hepsi` dokuz vakayı birden verir (~2300 satır).
Oyunu oynayarak denetleyemezsin — hiçbir oyun bütün yolları birden gezmez; araştırma
hakkı ipuçlarını, kapılar kararları, koşullu varyantlar metni daraltır. Bu araç o
daralmayı kaldırır. `arac_akis_denetim.js`'in kardeşi: o dar ve derin (kararların
yüzeyleri yan yana), bu geniş ve sığ (vakanın tamamı akış sırasıyla).

**Yeni oyunun karakter görselini kesmek için** `cd kaynak && node arac_kes.js <girdi> <çıktı.webp> --profil peri|saten|cengo [--genis]`
— arka planı saydamlar, karakterin SABİT çerçevesiyle kırpar (yoksa ifade değişince
karakter ekranda zıplar). Profiller ve gerekçeleri `YENI_OYUN_GORSEL_PROMPTLARI.md`
"KESİM ARACI" başlığında. Test değil, araç.

**Yeni oyunun görsellerini paket hâlinde işlemek için** `cd kaynak && node arac_paket.js <klasör> --vaka N [--yaz]`
— dosyalar `G<n>` ile başlar ya da ChatGPT adıyla kalır ve `--sira G1-G13` üretim saatine göre
numara verir; numara `sablon/vakalar/vakaN_gorsel.md` tablosundan tür ve anahtara
çevrilir. `--yaz` yokken yalnız önizler (temas sayfası `YENI_UI/paket_<klasör>.png`); `--yaz` ile
keser, gömer, manifestoyu günceller, doğrulayıcı + iki derlemeyi koşar ve eski `index.html`'in
değişmediğini md5 ile sınar. Saç halesi, yazı taraması ve boy insana kalır. Test değil, araç.

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
- **Kapıya boru sokma.** `node dogrulayici.js | tail -1 && node build_html.js` yazma:
  `tail` çıkış kodunu yutar, doğrulayıcı BLOCKED derken bile derleme çalışır ve bozuk
  veri `index.html`'e yazılır. Düşüldü — K1 bir Nurcan sızıntısını yakalayıp BLOCKED
  verdi, boru yüzünden derleme yine de geçti. Çıktıyı kısaltman gerekiyorsa önce
  dosyaya yaz, çıkış kodunu ayrı oku:
  ```
  node dogrulayici.js > /tmp/dog.txt 2>&1; echo $?; tail -1 /tmp/dog.txt
  ```
  Aynı tuzağın kardeşi: test döngüsünde `|| echo FAIL` yazıp sonunda koşulsuz
  "hepsi geçti" basmak. Bayrak tut, sonunda bayrağa bak.
- **Doğrulayıcı testlerin içinde de çalışıyor.** `test_v5.js` ve `test_v6.js`
  doğrulayıcıyı çağırıp temiz geçmesini bekliyor; bir K1 hatası bu ikisini de
  kırar. Üç kırık gördüğünde tek kök sebep arayabilirsin.
- **Testlerde sabit sayı yazma.** Tekrar tekrar ısırdı: iddiayı rakamla değil
  *ilişkiyle* kur, yoksa veri değişince test yalan söyler.
- **Arayüz/motor ayrışması** sessizdir. İki yerde duran her şey (KRIZLER/KRIZ_METIN,
  kararRuhHali/RUH_GORSEL) test ile eşlenmiştir; yenisini eklerken aynısını yap.
- **`game_data.json` ASIL, `vaka2-6.json` ve `yan_a/b.json` YEDEK.** Asılda değiştirdiğini
  yedekte de değiştir. Bu kural belgede yazılıydı ama denetlenmiyordu ve yedi yedeğin
  yedisi de kaymıştı (22–80 satır; Cengo satırı gibi bütün bir özellik hiç işlenmemişti).
  Ayrışma sessizdir — oyun çalışır, yalnızca "yedek" adı yalan söyler. `test_yedek.js`
  artık eşliyor; kayma olursa hangi alanın ayrıldığını basar. V1 ve YAN-C'nin yedeği
  bilerek yok, küme OKUBENI'de tanımlı.
- **`GORSELLER` anahtarı UZANTISIZ.** Sayfa her aramada `.replace('.jpg','')` yapıyor,
  yani `"v5_takip.jpg"` diye gömülen bir görsel hiç bulunamaz. Eksik görsel JS hatası
  vermez, sessizce metin yer tutucuya düşer — `arac_ui_tur.js` de yakalamaz. Düşüldü:
  7 görsel uzantılı gömüldü ve hiçbiri görünmedi. `build_html.js` artık hem uzantılı
  anahtarı hem de gömülmemiş atfı yakalayıp derlemeyi durduruyor; görsel gömdükten
  sonra derlemenin "✓ görsel: N atıfın hepsi gömülü" satırını görmek şart.
- **Tarayıcı turunda `text=` seçicisi kullanma.** Playwright'ın `text=Geri` seçicisi
  büyük/küçük harf duyarsızdır ve alt dizgi eşler. V5'e *"…iş olarak **geri** istemiş"*
  diyen bir künye satırı eklenince seçici o cümleye takıldı, tur Kişiler panelinden
  çıkamadı ve **"KARAR DÜĞMESİ YOK" diye yanlış alarm verdi** — oysa motorda vaka
  aktifti ve dört karar açıktı. Düğmeyi hedefle: `.buton:has-text("Geri")`,
  `.ust-btn:has-text("Kişiler")`. Oyun metni değiştikçe kırılmayan tek yol bu.
  Aynı turda ikinci ders: ipucu döngüsünün emniyet freni ekrandaki `.kaynak`
  sayısından türetilemez — o seçici yalnız O AN açılabilir olanları sayar (zincirin
  başında 2), toplamı değil. Fren bol ve sabit tutulur; o bir iddia değil.
- **Tur "karar düğmesi yok" derse önce motora sor.** `oyun.acikKararlar()` tarayıcı
  konsolundan okunabiliyor; doluysa sorun oyunda değil turun gezinmesindedir.
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

**Android aşamasına girerken sahibine HATIRLAT — eski dalları toplu silecek (17 Ekim 2026 isteği).**
GitHub'da `main` dışında yedi dal duruyor; hepsi incelendi, hiçbirinde `main`'de olmayan iş yok:
`ccr-343110e4-d0l9zo`, `ccr-87724e8f-t47bex`, `ccr-e81c6ba9-9m243w` (`main`'de olmayan commit yok),
`ccr-4dc083d1-16dsmw`, `ccr-b852a2a4-jzjulo`, `ccr-a12f42ec-wu06x5` (9–10 Ekim; GitHub yüzlerce
commit "önde" gösterir çünkü `main`'in geçmişi 12 Ekim'de tek commit'le yeniden başladı — içerikleri
`main`'de), `claude/vibrant-mccarthy-jdec2m` (13 Eylül, PR #1 ile birleşmiş). Silme sahibinde:
Branches sayfası → çöp kutusu (oturumdan `git push --delete` geçmiyor). O güne kadar yeni dal
açılırsa listeye eklenir; silinince bu not kalkar.
