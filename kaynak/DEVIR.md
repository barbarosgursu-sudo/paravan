# DEVİR NOTU — 23 Eylül 2026 (en üst bölüm: 16 Ekim 2026)

> Bir sohbet penceresinden ötekine devir. **Önce `CLAUDE.md`'yi oku** (sözleşmeler,
> tuzaklar, komutlar orada). Bu belge onun üstüne yalnız **oturum durumunu** koyar:
> ne yapıldı, sahibi neyi bekliyor, sıradaki iş ne.
>
> Bu belge tarihlidir. İş ilerledikçe **güncellenir ya da silinir**.

---

## 00000. CİHAZ DÜZENİ — tablet, yatay, çok boy (16 Ekim 2026)

**Durum tek cümle:** Sahibi oyuna tabletten baktı; yeni oyunun (`/yeni/`) düzeni telefon dışı
ekranlara uyarlandı, çok boylu denetim aracı yazıldı. **Açık iş yok, sahibi bir şey beklemiyor.**
Vaka 2'nin durumu (aşağıdaki bölüm) bu oturumda **değişmedi** — oradan devam edilir.
Kurallar ve tuzaklar `CLAUDE.md` → **"Tablet düzeni"** ve `--cihaz` paragrafında; burada yalnız iz.

### Ne yapıldı (8 commit, hepsi `main`, eski `index.html` her adımda md5 ile aynı)
Sahibinin sırayla bildirdiği sorunlar ve çözümleri — hepsi `kaynak/yeni_arayuz.css`:
1. **Dikey tablette sahne çok uzun, yanlar kesik** (`edfee06`). Sabit 480 px sütun 800×1280'de
   sahneyi 480×1070 yapıyordu; 3:4 arka plan iki yandan ~%40 kesiliyor, Müjgan/Cengo kadrajdan
   taşıyordu. `.vn` genişliği `max(480px,56dvh)`.
2. **Tablette yazı küçük** (`49e083d`, `689fc01`). Konuşma ekranı elle ~%30; masa/araştırma/kart/
   karar/sonuç ekranları `#app > :not(.vn){zoom:1.3}`; Kişiler paneli `.vn`'i kaplar.
3. **Yatay tablette diğer ekranlar küçük** (`9a76947`). Aynı zoom, `min-width:1000px` ve
   `min-height:700px`'te. Konuşma ekranı yatayda **bilerek 480 px'te** (genişlerse üst/alt kesilir).
4. **Yatay tablette Lâl ve Defne kısa** (`32b5bf2`). Asıl kök: `gorseller.json → boy` ölçekleri
   telefonda ayarlandı ve telefonda figürler genişliğe takılıp küçülüyor, ölçek neredeyse görünmüyor;
   geniş sahnede Peri tam boya çıkınca konuk %20 kısa kaldı. Figür katmanı Pixel 5 oranına
   (393/498) kilitlendi, yüksekliği container birimleriyle. **Pixel 5 görüntüleri piksel piksel aynı.**
   Sahibinin tableti yatayda tarayıcı çubuğuyla **1280×650** — hata yalnız o boyda belirgindi.
5. **Araçlar:** `arac_yeni_tur.js --tablet` (`f6db231`, 800×1280, tam sayfa) ve **`--cihaz`**
   (`c05c12c`, `kaynak/arac_cihaz.js`): oyun bir kez oynanır, seçilen her anda 19 ekran boyunda
   görüntü + ölçüm, `YENI_UI/cihaz/` altında karşılaştırma sayfaları ve aday bayraklar.
   Düzeltmelerden önceki derlemeye karşı koşuldu: Lâl/Defne/Müjgan/Gülsüm/Rıza boy sapmasını ve
   tablet arka plan kesimini cihaz cihaz yakaladı.
6. **Yatay telefon** (`d42dc87`): araç sahnenin ~170 px'e indiğini buldu; sahibi üç seçenekten
   **"Telefonu dikey çevir" uyarısını** seçti (`body::before`, alçak + yatay + dokunmatik ekran).

### Sahibinin kararları (bu oturum)
- Her cihaza ayrı ayar **yapılmaz**; kurallar orana dayalı, denetim taklitle (`--cihaz`).
- Yatay telefon için ayrı düzen **yok**, uyarı var.
- Yatay tablette konuşma ekranının dar kalması kabul (yalnız diğer ekranlar büyüdü).
- Sahibi değişikliği görmek için adrese `?v=N` ekliyor (önbellek); son verilen `?v=30`.

### Bundan sonra dikkat
- **Yeni vaka / yeni görsel / düzen değişikliğinden sonra** `node arac_yeni_tur.js 0 ortu dogru --cihaz`
  (~3–5 dk). Güncel derlemede tek bayrak: 1280×650 seçim ekranında arka planın ~%51'i (göze batmıyor).
- Yeni konuk boyu (`boy`) ayarlanırken artık her ekranda telefondaki oran geçerli — telefonda bak yeter,
  ama `--cihaz` boy sapmasını yine sınar.
- Düz tur (`arac_yeni_tur.js`, `--cihaz`sız) `YENI_UI/`'yi siler — `cihaz/` sayfaları da gider.
- Gözlenen, dokunulmayan: `arac_yeni_tur.js 0 defne dogru` "bu yolda doğru sonucu verecek seçim yok"
  der (Vaka 2 notundaki bilinen durum, aşağıda).

---

## 0000. VAKA 2 — DEVİR (11 Ekim 2026) ⬅️ YENİ PENCERE BURADAN BAŞLAR

**Durum tek cümle:** Vaka 2'nin hikâyesi dondu (Onay 2 tamam); **adım 9–10 sürüyor** — sahibi
ChatGPT'de **Sohbet 1'i (Peri, G1–G13)** üretiyor, bitince 13 görseli **tek seferde** bu pencereye
gönderecek. Bu pencerenin işi: görselleri değerlendirmek, işlemek, oyuna gömmek ve Vaka 2'yi
sona (adım 14) götürmek. Süre tablosu: `sablon/vakalar/vaka2_baslangic.md` §1. **Adım 9'un başlangıcı = sahibinin bu
pencereye İLK MESAJI verdiği an** (sahibinin kararı): o saati (TSİ, `TZ=Europe/Istanbul date`)
hemen tabloya yaz; öncesi ara, toplama girmez. **Üretim süresi de ölçülür:** §1'deki sohbet
tablosuna her sohbetin üretim başladı / üretim bitti / işleme bitti saatini yaz (sahibi "Sohbet N'e
başlıyorum" der, görselleri gönderir; ChatGPT dosya adındaki saatlerle karşılaştır). Sahibi "ara"
demedikçe sohbetler arası boşluk çalışma süresidir.

### Okuma sırası
1. `CLAUDE.md` · 2. **bu bölüm** · 3. `sablon/vakalar/vaka2_baslangic.md` (§2 Vaka 1 dersleri,
§4 görselli tur denetimi, §5 çalışma biçimi) · 4. `sablon/7_uretim_sureci.md` → **Hızlandırma
kuralları** · 5. `sablon/5_gorsel_sistemi.md` E–F (kontrol listesi, kesim) · 6. `sablon/vakalar/vaka2_gorsel.md`
(59 görselin listesi, promptlar, sohbet sırası) · 7. gerekirse `vaka1_gorsel_devir.md` §5–6 (elle iş tarifleri, saç halesi).

### Sahibinin iş sayfası
Görsel iş listesi (59 prompt, kopyala/indir/Yapıldı): https://claude.ai/artifact/DhL2uDY7LHzMLqo8FQ5fXQ
Üreticisi `sablon/vakalar/vaka2_sayfa/uret.py`. Sohbet sırası (iş sayfası): 1 Peri (G1–13) · 2 Cengo (G14–18) ·
3 Müjgan (G19–21) · 4 Defne (G22–25) · 5 Lâl (G26–28) · 6 Tolga (G29–30) · tekli konuklar
(G31–34, her biri ayrı) · 7 Atölye (G35–37, G44) · 8 Otel (G40–42) · 9 Terzi (G43, G45) · Sokak (G38) ·
Salon (G39) · kareler en son (G46–59, her biri ayrı sohbet).

### Paket gelince ne yapılır (her sohbet için aynı)
Sahibi dosyaları **ChatGPT'nin verdiği adla** gönderir ve "Sohbet 1, G1–G13" yazar.
```
mkdir -p <scratchpad>/paket_s1 && (dosyaları oraya koy)
cd kaynak
node arac_paket.js <scratchpad>/paket_s1 --vaka 2 --sira G1-G13          # ÖNİZLEME, projeye dokunmaz
```
1. Konsoldaki `G1 ← dosya adı` eşleşmesine ve **temas sayfasına** (`kaynak/YENI_UI/paket_paket_s1.png`)
   bak: sıra doğru mu (her kartın ifadesi `vaka2_gorsel.md`'deki satırla tutuyor mu)?
   - **Bilinmeyen:** yüklenen dosyaların adı korunuyor mu henüz görülmedi. Ad değişmişse araç
     "dosya tarihine göre dizildi" der → sırayı görselden tek tek doğrula; gerekirse dosyaları
     `G1.png…` diye adlandırıp `--sira`sız çalıştır.
2. Her görsele **kontrol listesi** (`5_gorsel_sistemi.md` E): iki kol iki el / beşer parmak,
   kıyafet promptla tutuyor mu (kartın `bak` satırı), oran, **yazı/harf** (büyütüp), Nurcan.
   Peri "vakadaki en gösterişli kadın" (kural 15b) — konuk kadınlar onu geçmemeli.
3. Kesim sorunları: zemine yakın renk silinirse (Peri'nin **beyaz masa örtüsü G10–13**, beyaz
   gömlekler) `--profil` ile değiştir. Dikkat: `cengo` profilinin çerçevesi Peri'ninkinden farklı;
   Peri'ye delik doldurmasız bir profil gerekirse `arac_kes.js` PROFILLER'e `peri` çerçeveli,
   `delik:false` bir profil ekle. El çerçeveden taşarsa `--genis G<n>`.
4. Sorunlu görsel → sahibine **tek listede** düzeltme promptu (o sohbette "şunu düzelt").
5. Hepsi iyi → aynı komut **`--yaz`** ile: yeni_gorsel/'e yazar, `gorseller.json` günceller,
   doğrulayıcı + iki derleme koşar, eski `index.html` md5 aynı mı bakar (`bc871463456171ae79f25847a2b962ad`).
6. **Elle:** saç halesi (yalnız baş kutusu; tarif `vaka1_gorsel_devir.md` §6), yeni konuğun
   **boyu** (`gorseller.json` → `boy`; araç boysuzları söyler; kadınlar ~0.76–0.82).
7. Görselli tur: `node arac_yeni_tur.js 0 ortu dogru` (yollar: `ortu|vale|terzi|defne`,
   sonuç: `dogru|zayif|lal|tolga`) → `kaynak/YENI_UI/`. Satır satır §4 denetimi.
8. Sahibine **paketin oyundaki son hâlini tek seferde** göster. Commit + push `main`.

### ✅ 16 Ekim 17:40: adım 11 bitti — sırada Onay 3 (sahibi görsellere bakar)
`arac_yeni_tur.js --hepsi` her satırı `YENI_UI/satir/`'a görüntüler + `dokum.txt`. Bütün yollar ve dört karar koşuldu,
bağ düşük (karar 3) soğuk kapanış da. Düzeltilen: kapıdaki konuk anlatı satırında görünür (Müjgan, Lâl ×2), Saadet
gidince K20 kalkar, "Kısası da yakışmazdı" karşısında Cengo, K31'de etiket koridor (A5b), Tolga G30 eli
(`gorseller.json → sola`). `defne dogru` yolunun olmaması bilerek (Defne yolu çözmeyen yol, form §7).
Sahibine sorulan, karar bekleyen: kumaşçının adamı hiç görünmüyor; Lâl'in elbise kılıfı görünmüyor; Defne'nin
itirafında Peri'nin yüzü sinirli kalıyor (kremalı sette `normal` yok); G2–G7 yüze düşen tutam.

### ✅ 16 Ekim 16:47: K23 gömüldü — 59/59, adım 9–10 bitti
Sahibi K23'ü hem Grok'ta hem ChatGPT'de üretti; ChatGPT'ninki seçildi (buzdolabı levhaları elle silindi).
`yer_tutucu` boş. **Sırada adım 11: görselli tur, bütün yollar + `--cihaz`** (aşağıdaki notlar hâlâ geçerli:
Tolga G30'un eli, `defne dogru` yolu yok).

### ⏸ Ara (11 Eki 15:55) — eski not
Gömülü: G1–G49, G51–G59 (58/59). G13 Gemini'de üretildi (12 Eki). **Bekleyen yalnız K23** (G50;
ChatGPT reddetti) — Grok'ta orijinal promptla.
Grok da reddederse sahibine sor, kendiliğinden yumuşatma. İki görsel gelince → **adım 11 görselli tur (bütün yollar)** → Onay 3. Sahibi başladığını haber verince
saati `vaka2_baslangic.md` §1'e yaz. Adım 11'de bakılacaklar: Tolga G30'un eli ekran dışında;
`arac_yeni_tur.js 0 defne dogru` yolu yok.

**16 Ekim notu:** K23'ün Grok denemesi 12 Ekim'den beri kayda geçmedi — yeni pencere **ilk iş sahibine
sorsun** (denendi mi, görsel var mı). 12 Ekim'deki LoRA / Forge (yerel üretim) işi Vaka 2'nin yolu
DEĞİL, ayrı bir deneme; durumu `sablon/lora_plani.md`'de (eller çözülmedi, sırada ControlNet). Vaka 2
süresine girmez. 16 Ekim cihaz düzeni oturumu da girmez (bkz. en üst bölüm). Adım 11 turunda
`--cihaz` da koşulsun (CLAUDE.md).

### Sohbet 1 (Peri, G1–G13) — gömüldü (11 Eki 10:00)
Kullanılan komut: `node arac_paket.js <paket> --vaka 2 --profil G8=peri_beyaz,…,G13=peri_beyaz --genis G3,G8 --yaz`
(dosyalar sahibinden `G1.png…` adıyla geldi, `--sira`sız). Öğrenilenler — sonraki paketler için:
- **G1 boydan (ayakkabıya kadar) geldi**; öbürleri uyluk ortasından. Ölçek 1.58 kat küçüktü → G1 elle
  kırpılıp 1122×1402'ye büyütüldü (baş tepesi/etek ucu aralığı G2–G7 ile eşlendi). Temel görselin
  kadrajı tutmazsa önce bunu ölç: baş tepesi–etek ucu aralığı setle aynı mı?
- **`peri_beyaz` profili** (`arac_kes.js`): beyaz krema ve masa örtüsü `peri` profilinde zeminle
  birlikte siliniyordu (kenar tol 28, hale tol 60). Yeni profil: kenar 8, hale 20, delik tol 5, zemin
  rengi kenardan 40 px içeriden okunur (bu üreticinin kenar sütunları ~5 birim açık; dar tolde
  zemini parça parça bırakıyordu). Beyaz giysili her Peri setinde bunu kullan.
- **Krema rengi zemine ~6 birim uzak** → renkle genel hale temizliği kremayı yer. G10–13'te topuz
  altı / boyun yanındaki zemin cebi yalnız küçük bir kutuda (sprite x 235–345, y 88–170) silindi;
  yeni G9'da el–yüz arası ve ense arkası ayrı kutularla.
- **Grok çıktısı** 912×1136 geldi; araç 1122×1402'ye büyüttü, ölçek ve parlaklık setle tuttu.
- **Çorap bandı (sahibinin kararı: kaldır).** İlk G8–G13'te çorabın üst bandı görünüyordu (bazısında
  tek, G9'da iki bacak). G8–G12 "iki bacakta KÜLOTLU çorap, bant hiçbir yerde görünmesin" promptuyla
  yeniden üretildi (Grok, 912×1136) ve gömüldü. Otomatik rötuş denendi, olmadı (bant etek ucuna
  yapışık, krema üstünden geçiyor; maske gölgeyi de bant sanıyor) — bu yola dönme.
- ⚠️ **AÇIK: G13 (`peri.ortulu.utanmis`) yeniden üretilemedi** (ChatGPT yapmıyor, Grok limiti doldu).
  Geçici: `gorseller.json` → `takma` ile G12'nin (`peri.ortulu.sasirmis`) karesi görünüyor; bantlı eski
  sprite silindi. Sahibi G13'ü getirince: `arac_paket.js <klasör> --vaka 2 --profil G13=peri_beyaz --yaz`,
  sonra `takma`'daki satırı sil, boyun cebini temizle (aşağıdaki kutu).
- Hâlâ sorulmadı (beğeni): G2–G7'de yüze düşen tutam ("tek tutam bile düşmüyor" denmişti).

### Sohbet 2 (Cengo, G14–G18) — gömüldü (11 Eki 11:08)
`node arac_paket.js <paket> --vaka 2 --profil G14=cengo_beyaz,…,G18=cengo_beyaz --yaz`. Yeni profil
**`cengo_beyaz`** (`arac_kes.js`): yaka ucu zemine değince `cengo` (kenar 28) onu yiyordu; kenar 10,
hale 25, zemin 40 px içeriden. Saç halesi (üstte açık bej kıvrımlar): baş kutusunda (sprite y 0–115)
zemine <38 uzak opak pikseller silindi — koyu saçta güvenli; açık saçlı karakterde yapma.

### Sohbet 3 (Müjgan, G19–G21) — gömüldü (11 Eki 11:23)
G19 bir kez düzeltildi (saç platin değildi; metin "platin saçlı" diyor). Yeni profil **`konuk_sag`**:
`arac_kes.js` zemin rengini satırın SOL kenarından okuyor; el sol kenara uzanınca o satırda zemin
yerine ten okunuyor ve elin hizasında ince bir zemin çizgisi kalıyordu (G21). `refSag` ile sağdan
okunur. El SAĞ kenara uzanırsa tersini düşün. Platin saçın kenarı biraz tırtıklı — kabul edildi.
Boy: `mujgan` 0.82.

### Sohbet 4 (Defne, G22–G25) — gömüldü (11 Eki 11:38)
Varsayılan `konuk` profili beyaz gömleği ve bej pantolonu temiz kesti. Koyu kıvırcık saçta bej hale:
koyu saça komşu, zemine <30 uzak opak pikseller silindi (boyun altında yalnız dış kenar). **Ten
çevresi korunmalı** — korumasız ilk denemede G24'ün göz akı (zemine yakın, kirpiğe komşu) da gitti.
Boy: `defne` 0.80. Not: `arac_yeni_tur.js 0 defne dogru` yolu yok ("dogru sonucu verecek seçim
yok"); `defne zayif` çalışıyor.

### Sohbet 5 (Lâl, G26–G28) — gömüldü (11 Eki 12:13)
Üretici gözlüğün sapına (menteşe yanı) her seferinde marka yazısı benzeri bir iz koydu; düz siyah
yüzeyde, dikeyde koyu komşulardan medyanla dolduruldu (kaynak `ozgun/` scratchpad'de). Gözlük/kalem/saat
gibi markalı olabilen nesnelerde sapı ve kenarı büyütüp tara. G28 → `konuk_sag`. Boy `lal` 0.80.

### Sohbet 6 (Tolga, G29–G30) — gömüldü (11 Eki 12:21)
Düzeltme yok; `konuk` profili temiz. Boy `tolga` 0.90. **Adım 11'de bak:** G30'un ("Ben mi canım?")
havadaki açık eli, sağ figür yuvasında ekranın sağ kenarından taşıyor — jest kayboluyor. Çare
`genis` listesi ya da yuva kaydırma (arayüz işi), görsel değil.

### Tekli konuklar (G31–G34) — gömüldü (11 Eki 12:32)
Sahibi dört görseli tek mesajda gönderdi; 3. ve 4. sırası tablonun tersiydi — **numarayı mesaj
sırasından değil görselden doğrula**. Yeni profil **`konuk_beyaz`** (beyaz gömlek: varsayılan
`konuk`un delik doldurması Bülent ve Sarkis'in gömleğini delik delik yiyordu). Saadet'in kızıl saçı
`hale_koyu`nun ten korumasına takıldı (kızıl = ten rengi); baş bölgesinde (y<170) yalnız saydama
komşu, zemine <32 uzak pikseller 8 tur aşındırıldı. Mezuralarda çentik/rakam benzeri işaretler var;
mezuranın doğası, oyun boyutunda okunmuyor — kabul.

### Sohbet 7 (Atölye) — gömüldü (11 Eki 12:46)
G35–G37 (A15–A17) gömüldü, temiz. **G44 (D6) düzeltilip gömüldü (12:49):** ilk hâlinde örtüyü kaldıran el siyah uzun kollu ve
kolunda toplu iğneler — Lâl'in kıyafetini çağrıştırıyor; oysa satır Gülsüm'ün ("Sabah geldim…
Kaldırdım: çıplak", ipucu gulsum). Düzeltme: dolgun çıplak kol, kısa kollu siyah tişört, gri önlük (Gülsüm).

### Sohbet 8 (Otel, G40–G42) — gömüldü (11 Eki 13:22)
G40: pasta dört katlıydı (metin "beş katlı") → düzeltildi. G42: buzdolabının üstünde 3–4 küçük marka
levhası vardı; düz çelik yüzey, satır satır yatay ara değerle silindi (kaynak `ozgun/G42.png`). Mutfak,
araç, cihaz gibi markalı olabilen nesnelerde levha/rozet ara.

### Kareler — ders (K19, 11 Eki)
Kare promptu birden çok kişi sayınca üretici kenardaki kişiyi düşürebiliyor (K19'da Cengo yoktu).
**K23 (G50) ertelendi (11 Eki 14:14):** ChatGPT reddetti. Sahibi yarın **Grok**'ta deneyecek — **ORİJİNAL promptla** (sahibinin kararı: yumuşatılmış
prompt istenmiyor; Grok da reddederse o zaman düşünülür). Yedek yumuşatılmış prompt (yalnız gerekirse): "komik bir an, çizgi film tonu", kamera YANDAN göğüs hizası, Peri pastanın alt katına
oturmuş, dizler bükülü, ayaklar kenardan sarkıyor; "seksi / bacaklar havada / etek" kelimeleri YOK.
Ref: G42 (mutfak) + G8 (kremalı Peri). Reddedilen karelerde bu kelimeleri çıkarıp açıyı yandan al.
Saklanma/görme içeren karede **kim kimi görüyor** geometrisini kur (K20: kamera masanın arkasında, ön panel kapalı → seyirci Peri'yi görür, Saadet görmez).
Her karede **metindeki kare satırını** (`vaka2_diyalog.md` → `{kare: Kn}`) aç, adı geçen herkes var mı say.

### Sonra
- Bütün sohbetler bitince → adım 11 (görselli tur, bütün yollar) → **Onay 3** (sahibi yalnız
  görsellere bakar) → düzeltmeler → **adım 14 Vaka donar**. Süre tablosunu doldur, **toplamı
  hesapla** (aralar ve "sayılmaz" işler hariç) — sahibi bununla vaka başına süreyi tahmin edecek
  (önceki tahmin: 7–10 saat).
- Yayından önce: geçici "Vaka 2'den başla" düğmesini kapat (`yeni_arayuz.js` → `VN_VAKA_ATLA = false`).
- Vaka 3: `sablon/vakalar/vaka3_baslangic.md` hazır (iki yeni kural: **bulanık replik taraması**
  Onay 2'den önce, **toplu görsel işleme**). Sahibi "Vaka 3'e başla" deyince başlar.

### Bu oturumda alınan kararlar (sahibinin)
- Görsel sayısı **azaltılmaz** (çok görsel oyunu güzelleştiriyor).
- **İfade ızgarası yok** (bir istekte birkaç ifade → çözünürlük düşüyor).
- **Ücretli üretim (API) yok**, şimdilik; ChatGPT/Grok sohbetinde elle üretim.
- **Her vakada Peri ve Cengo yeni kıyafet** giyer → kıyafet kütüphanesi tutulmaz.
- Görseller sohbet sohbet, **toplu** gelir; adlandırmayı araç yapar (`--sira`).
- `arac_paket.js` yazımı ve G1 hazırlığı Vaka 2 süresine **sayılmaz**.
- Platform/tür sohbeti yapıldı (Choices benzeri platform, gazeteci/avukat gibi türler) — karar yok, iş yok.

---

## 000. VAKA 2 — EN GÜNCEL DURUM (10 Ekim 2026)

- **10 Ekim akşam: Onay 2 tamam, hikâye dondu.** 22 metin notu uygulandı (hepsi diyalogda), soğuk
  kapanış belirginleşti (+K32). **Adım 8 bitti:** 59 görsel, promptlar `sablon/vakalar/vaka2_gorsel.md`,
  numaralı referanslar `sablon/vakalar/vaka2_referans/`. **Sırada: sahibi görselleri üretiyor; gelen
  her görsel → kontrol, kesim (`arac_kes.js`), göm, `gorseller.json` yer_tutucu'dan çıkar, tur.**
  Geçici "Vaka 2'den başla" düğmesi açık (`VN_VAKA_ATLA`), yayından önce kapanacak.
  **19:44'te ara verildi.** Yeniden başlanınca süre tablosuna (`vaka2_baslangic.md` §1) başlangıç saati yazılır.

- **10 Ekim akşam: adım 1–5 bitti.** Form Onay 1 aldı (`vaka2_form.md`; kadın karakterler en çekici
  hâlde). Diyalog `vaka2_diyalog.md`, veri `yeni/game_data.json` V2, künye yazıldı. Araçlar Vaka 2'ye
  açıldı: Cengo kıyafet seti (`cset`), görseli olmayan arka plan/kare gri kutu, tur
  (`node arac_yeni_tur.js 0 ortu dogru`), `test_yeni_v2.js`. **Sırada: Onay 2 — sahibi görselsiz oynar.**
  Süre tablosu: `sablon/vakalar/vaka2_baslangic.md` §1.

- **Vaka 1 bitti** (görseller, Onay 3 notları, künye). Kalıp oldu.
- **Sıradaki iş: Vaka 2.** Yeni pencerede önce **`sablon/vakalar/vaka2_baslangic.md`** oku:
  okuma sırası, süre ölçüm tablosu, Vaka 1'de zamanın nereye gittiği ve nasıl önleneceği,
  adım adım yapılacaklar, görselli tur denetimi.
- Sahibi Vaka 2'nin süresini ölçüyor: "Vaka 2'ye başla" dediği an başlangıç.

---

## 00. ŞABLON VE VAKA 1 — EN GÜNCEL DURUM (8 Ekim 2026)

> Yeni oyun artık **`sablon/`** klasöründeki yapım şablonuyla üretiliyor (7 parça + `vakalar/`).
> Aşağıdaki §0 şablondan önceki durumdur; Vaka 1 verisi forma göre **yeniden yapılacak.**

- **Şablon dondu.** Vaka 1 formu (`sablon/vakalar/vaka1_form.md`) **Onay 1 aldı.**
- **Motor işleri bitti (8 Ekim):** `kaynak/motor_yeni.js` (Kim yaptı?, ücret sonda, kayıt),
  `yeni_arayuz.js` (Kim yaptı? ekranı → yüzleşme → kovalamaca → karar; kapanışta `bag` satırları;
  Cengo göstergesi yok), doğrulayıcı K17/K18/K19, `test_yeni_kimyapti.js`. Veri yeni düzene
  taşındı ama **metin hâlâ eski**: giriş/konuşma "yarın getiririm / peşin" diyor, karar
  sonuçlarında "ücretin tamamı geldi" ve tohum cümleleri duruyor, yüzleşmeler geçici, ipuçları
  formdaki 5'e değil eski 7'ye göre. Bunlar diyalog adımının işi.
- **Diyalog yazıldı (8 Ekim):** `sablon/vakalar/vaka1_diyalog.md` tek kaynak; `arac_diyalog.js`
  veriye yazar. 5 ipucu / 4 hak, bedava yok; Kemal figürsüz (ses). Altı yol turda temiz.
- **Onay 2 TAMAM (9 Ekim): hikâye dondu.** Sahibinin görselsiz test notlarıyla yapılanlar —
  kural 21c, kural 22a (kısa sonuç, kasaya giden, Cengo'nun tavrı, kesinti sebebi), gri yer
  tutucu, iki adımlı Kim yaptı?, Dosya çözüldü ekranı, satırdan sürdürme, Sahneyi geç onarımı.
- **Görsel işi yeni pencerede: önce `sablon/vakalar/vaka1_gorsel_devir.md` oku.**
- **9 Ekim: Vaka 1'in 11 görseli oyunda** (figürler G1–G6, kareler K15–K18, detay D4). Sırada Onay 3.
- **Sıradaki iş: adım 8, görseller.** Liste ve 11 prompt: `sablon/vakalar/vaka1_gorsel.md`
  (numaralı referanslarla sahibine gönderildi). Görsel geldikçe: kontrol (dosyanın sonu),
  figürse `arac_kes.js`, göm, `gorseller.json` → `yer_tutucu`'dan çıkar, tur. Sonra Onay 3.
- Tur: `node arac_yeni_tur.js [karar] [set|dukkan] [dogru|zayif|kemal|tuba]`.
- **Sahibiyle çalışma biçimi:** çok basit ve kısa yaz, Türkçe kelime kullan; bir adımda dur,
  eksikleri tek tek konuş; yalnız Vaka 1 üzerinde çalış.

---

## 0. YENİ OYUN — EN GÜNCEL DURUM (7 Ekim 2026)

> Aşağıdaki §1 ve sonrası **eski oyunun** (dokuz vaka, `index.html`) 23 Eylül durumudur;
> eski oyun o günden beri değişmedi. Şu an üzerinde çalışılan **yeni oyun** (Peri & Cengo,
> Mavi Ay tonu). Kalıcı bilgi `CLAUDE.md` + `kaynak/yeni/OKUBENI.md`'de.

| | |
|---|---|
| Kaynak metin | `YENI_VAKA_1.md` (açılış + Vaka 1), `YENI_OYUN_SEZON.md` (sezon kuralları), `YENI_OYUN_TON.md` |
| Veri | `kaynak/yeni/` — `node dogrulayici.js yeni` PASS (3 uyarı: K8 ×2, K9) |
| Sayfa | `node build_html.js yeni` → `yeni/index.html` (yayında `…/paravan/yeni/`), tema yeni, batma uyarısı yok |
| Görsel | Vaka 1: **49/49** (`YENI_OYUN_GORSEL_PROMPTLARI.md`, son bölümler kovalamaca K10–K12) |
| Test | 24/24 (+ test_bozuk); `arac_yeni_tur.js` iki yolu da temiz oynuyor |

**Son yapılanlar:** konuşma ekranı oyunda; bütün ekranlar yeni temada; kovalamaca dört
kareye çıktı (simit → Peri çarşafta → balık kasası → yakalama); sezon kuralları
"Peri'nin felaketi" ve "Kovalamaca".

**Sahibine açık sorular:**
- **K8 uyarısı:** `sete_gotur` iki kararı hem para hem bağda geçiyor (`yeni/OKUBENI.md`).
- **Künye (Kişiler paneli) boş** — metinleri sahibinin onayıyla yazılacak.
- Ruh hâli görseli / istatistik paneli yeni sayfada yok (eski açık sorular).
- Cengo'nun "sinirli" sprite'ı yok (normal'e takma).

**Sıradaki iş:** Vaka 2'yi kâğıt üstünde yazmak (`YENI_OYUN_SEZON.md` sırası); kovalamacayı
karardan önceki doruğa koymak önerildi.

**Duran kurallar (sahibinin):** doğrudan `main`; her prompta referans resimleri numaralı
ve aynı mesajda; mantolu Peri'nin altında siyah kalem etek, ayakkabıları kırmızı stiletto;
Peri'nin dekoltesi asla azaltılmaz; yan karakterlere ana karakter referans verilmez; yeni
kanon eklemeden önce sor.

---

## 1. NEREDE DURUYORUZ

Her şey **`main`**'de ve push edilmiş; çalışma ağacı temiz. Son commit'in hash'i burada TUTULMUYOR — kendine işaret eden bir hash `--amend`'de anında yanlışlanıyor (bu nota bir kez öyle yazıldı). `git log --oneline -5` doğrusunu söyler.

| | |
|---|---|
| Doğrulayıcı | **PASS (5 uyarı)** — 14 kural |
| Test | **22/22** (+ `test_bozuk.js`, çıkış 0, gösteri betiği) |
| Görsel | **63/63** gömülü |
| Tarayıcı turu | dokuz vakayı da oynuyor, hata yok |
| İçerik | 9 vaka · 48 ipucu · 67 olgu · 40 karar |

**Cache uyarısı:** GitHub Pages `index.html`'i `max-age=600` ile sunuyor. Sahibi
değişikliği göremezse **`?v=8`** gibi bir sorgu eki ver.

---

## 2. BU OTURUMDA NE OLDU (33 commit)

Oturum "akışta çelişki var mı" sorusuyla başladı ve **sistematik bir metin
denetimine** dönüştü. **Dokuz vakanın dokuzu da** (V1–V6 omurga, YAN-A/B/C yan)
taze göz incelemesinden geçirildi ve düzeltildi. **Metin incelemesi bitti.**

### Yöntem — tekrar kurulabilir

1. `node arac_okuma.js V3 > /tmp/v3.txt` — vakanın tam dökümü
2. `kaynak/inceleme_brief_v3.md` — ChatGPT'ye brief (format sözlüğü + sözleşmeler
   + o vakaya özgü uyarılar + önceki turun karnesi)
3. Rapor gelince **her maddeyi veriye/motora karşı doğrula**, sonra ayıkla
4. Geçerli olanları uygula, geçmeyenlerin gerekçesini bir sonraki brief'e yaz

Altı brief `kaynak/inceleme_brief_v1..v6.md` olarak duruyor. **Yan vakalar için
aynı kalıbı kullan.**

### Tur tur bilanço

| tur | uygulanan | yanlış çıkan |
|---|---|---|
| V1 | 3 | 3 *(ikisi benim brief hatam: prolog verilmemişti, finans kuralı fazla geniş yazılmıştı)* |
| V2 | 5 | 0 |
| V3 | 5 | 3 |
| V4 | 7 | 1 |
| V5 | 6 + **kanıt eklendi** | 1 |
| V6 | 4 | 2 *(biri `arac_okuma`'nın basım hatası)* |
| YAN-A/B/C *(tek tur)* | 14 | **0** |

Yan tur üçü birden okundu: `OKUBENI` YAN-A ile YAN-B'yi *"birbirinin aynası"*
diye tanımlıyor (biri nefes aldırır, öteki hiçbir seçeneğinde para kazandırmaz) —
ayrı turlarda o karşılaştırma kaybolurdu. **Dokuz turun içinde yanlış alarmsız
tek tur bu oldu.**

Yan turun iki asıl bulgusu:

- **YAN-A'da olgu, ipucundan fazlasını söylüyordu** — V3/`tarif_yara`'nın kardeşi.
  Cengo'nun tek cümlesi *"onun yerine içeri girdim"*i kanıtlıyor, *"suç onundu"*yu
  değil. Olgu metni / çıkarım başlığı / ipucu metası cümleye indirildi; **kimlikler
  değişmedi**, o yüzden kapı, tohum ve test etkilenmedi.
- **YAN-C/`isi_reddet` "Temiz kaldın" diyordu** ve karar gerçekten `ruh=temiz`'di —
  motorun iç sınıflaması kelimesi kelimesine ekrana sızmıştı.

Aynı olgunun künye yüzeyinde ikinci bir aşım çıktı, raporda yoktu: *"sevdiği
kadın"* / *"eski sevgilisi"*. **Yazar gerçeğinde bile yok** (`truth`'ta Sevil'in
geliş sebebi "sırrı bilen tek güvenilir kişi"). Sezon boyu kovalanan "sevgili"
fazla söylemesinin son yuvasıydı; ikisi de kaldırıldı.

### Kanona eklenen tek şey (sahibinin onayıyla)

**V5'e Cavit'i cinayete bağlayan kanıt.** Vakanın adı "Cavit'in maskesi düşüyor"du
ama düşüren kanıt yoktu: eski dava dosyası yalnız **kaldıracı** gösteriyordu.
Sahibi üç şekilden **B**'yi (sokak yolu) seçti.

Yeni ipucu `cengo_mahalle_donus` (**bedelsiz**, needs `ilyas_mahkum`): Cengo
mahalleye dönüyor, kahvede biri hatırlıyor — ölümden bir hafta önce İlyas *"bir iş
var, tahsilat değil; onu yapınca eski defter kapanıyor"* demiş. Yeni olgu
`ilyas_son_is`. `cavit_azmettiren` artık üç olgunun kesişiminden doğuyor.

**Bağladığı kanon:** İlyas'ın ölümden bir hafta önce kahvede konuştuğu artık
sabit. Ekonomi korundu (adım bedelsiz, `tam_resim` yine aynı 5 ödemeyle geliyor).

### Sezon boyu yapılan iki büyük geri çekme

**"Evde ağır" kaldırıldı (V4).** İfade üç yerde geçiyordu ve hiçbiri öncesini
kurmuyordu — dahası `kaya_cevre` tam tersini söylüyor (*"iyi kalpli, sessiz,
kimseye yük olmayan"*). Boşluk değil çelişkiydi. Sahibi kurmak yerine kaldırmayı
seçti; kurmak Ceyda'nın "mağdur mu" okumasını güçlendirirdi.

**"Sevgili" yedi yüzeyde "gizlice yakın" oldu (V5+V6).** Perde arkasındaki giriş
gizli yakınlık gösteriyor, sevgililiği kanıtlamıyor.
**ÇİZGİ ŞURADA VE SEBEBİ ÖNEMLİ:** V6'daki `kaya_bilmiyordu` olgusu hâlâ
*"aldatıldığını"* diyor ve **kalacak** — o olgu `kaya_izi`'nden geliyor, o da
Kaya'nın kendi el yazısını getiriyor (*"karısıyla aralarının açıldığını görmüş,
sebebini bulamamış"*). Gözlem + kocanın kendi kalemi = hak edilmiş adlandırma.

### Araçlara eklenen beş kör nokta

`arac_akis_denetim.js` yeni yazıldı (40 kararın bütün yüzeyleri yan yana) ve
`arac_okuma.js` yeni yazıldı (bir vakayı baştan sona okunur hâlde). İkisi de
kullanıldıkça kör noktaları çıktı:

| kör nokta | sonucu |
|---|---|
| Cengo ekranda susarken defterde konuşuyor | V2/`kuru_rapor` çelişkisi yakalandı |
| `meta` koşullu varyant olabiliyor | üç varyant `[object Object]` basıyordu |
| ipucu `ad`'ı da varyant olabiliyor | iki başlık `[object Object]` |
| prolog basılmıyordu | inceleme "açılış Peri'yi kurmuyor" dedi, yanlıştı |
| `DEĞİL` parantezsiz basılıyordu | inceleme yanlış bir **P0** bildirdi |
| sessizlik kalıbı fazla harfiydi + atıf cümle sınırına takılıyordu | YAN-A/`cengoya_birak` çelişkisi kaçmıştı |
| `HUKUM` yalnız "en adil"i tanıyordu | YAN-B "en pahalı, **en dürüst** hali" göremedi |
| ruh hâli etiketi hiç taranmıyordu | YAN-C "Temiz kaldın" göremedi |

Son üçü düzeltildi ve negatif sınandı (eski metinler geçici geri konunca araç
yakaladı). Türkçe tuzağının yeni bir yüzü de burada çıktı: **JS'in `\b` sınırı
"ğ"yi harf saymıyor**, yani `/\bsordu\b/` **"sorduğu"** ile eşleşiyor. Sınır
Türkçe harf kümesiyle elle kuruldu.

### Yeni korumalar

**K14 (Tanımsız olgu)** — doğrulayıcının 14. kuralı. Ayrıntısı §3.2'de.

`test_yedek.js` — `game_data.json` ↔ `vaka2-6/yan_a-b` eşlemesi. Kural belgede
yazılıydı ama denetlenmiyordu: **yedi yedeğin yedisi de kaymıştı** (22–80 satır).
Hepsi yeniden üretildi. Negatif sınandı.

### CLAUDE.md'ye yazılan dört tuzak

kapıya boru sokma · doğrulayıcı testlerin içinde de çalışıyor · yedek dosya
senkronu · tarayıcı turunda `text=` seçicisi kullanma (+ tur "karar düğmesi yok"
derse önce motora sor)

---

## 3. AÇIK SORU YOK

Önceki iki soru sahibince **ikisi de "uygula"** diye cevaplandı (23 Eylül 2026).

### 3.1 · `boslugu_kabul` — silindi

V6/`eldekiler` bu adla bir olgu "açıyordu" ama olgunun hiçbir yerde gövdesi yoktu:
67 olgunun tek istisnası. Motor onu bilinen kümesine ekliyor, ekranda hiçbir şey
görünmüyordu — sessiz bir no-op.

`reveals`'tan silindi, metin yazılmadı. Gerekçe: olgu hiçbir çıkarımı beslemiyor,
hiçbir kapıyı açmıyor, hiçbir künye katmanını tetiklemiyordu — yazılsa bile oyunda
işi yoktu. Metin yazmak ayrıca kanona ekleme olurdu. **`eldekiler` artık `reveals: []`**
ve bu meşrudur: hiçbir şey açmayan, yalnız oyuncuya elindekini saydıran bir ipucu.
Motor ve doğrulayıcı her yerde `c.reveals || []` okuyor, boş dizi güvenli.

### 3.2 · K14 (Tanımsız olgu) — eklendi

`reveals`/`acilan` ile açılan her olgunun bir gövdesi olmalı: ya `vaka.facts`'te bir
metni, ya bir `knowledge.turetilen` karşılığı. Yoksa **hata** — uyarı değil, çünkü bu
bir tasarım kararı olamaz.

Tuttuğu şey: `ilyas_yuzu` yerine `ilyas_yuz` yazmak. Eskiden doğrulayıcı geçerdi,
oyun çalışırdı, ipucu açılırdı ve olgu buharlaşırdı — ona bağlı çıkarım hiç doğmaz,
o çıkarıma bağlı karar hiç açılmaz, vakanın yarısı sessizce kapanırdı.

**`needs` bilerek denetlenmiyor:** bir ipucu önceki vakadan taşınan kalıcı bir olguyu
ya da bir tohumu isteyebilir; orada "bu vakada tanımlı değil" demek yanlış pozitif
üretirdi. `reveals`/`acilan` ise BEYANDIR — bu vakanın açtığını söyler.

Negatif sınandı ve `test_bozuk.js`'e **TEST 8** olarak eklendi (tek harflik yazım
hatası → BLOCKED). Betik artık yedi senaryo basıyor.

---

## 4. SIRADAKİ İŞLER

### 🆕 YENİ OYUN — çerçeve kararları alındı (23 Eylül 2026)

Sahibi Mavi Ay (*Moonlighting*) tonunda, **İngilizce**, İstanbul'da geçen yeni bir oyun
yapmaya karar verdi. Kararların tamamı ve gerekçeleri: **`YENI_OYUN_CERCEVE.md`**.

Özet: sadece İngilizce (orijinal, çeviri değil) · İstanbul kalıyor · Steam birinci,
Android ikinci · ilk 2-3 vaka bedava, gerisi tek ödeme · reklam/elmas/abonelik yok ·
metin anahtarı sistemi kurulmayacak.

Motor, doğrulayıcı, araçlar ve yöntem aynen devralınıyor (~7.100 satır). Yeniden
yazılacak olan hikâye (~3.500 satır) ve iki yeni ekran: konuşma (atışma) ve sahnede
ipucu arama.

**Sıradaki iş: tek bir vakayı kâğıt üstünde baştan sona yazmak.** Kod yok.

**Mevcut Türkçe sezon elde duruyor** — yayınlanıp yayınlanmayacağına karar verilmedi.
Aşağıdaki maddeler onun açık işleri; yeni oyun onları geçersiz kılmıyor ama
önceliklendirme değişti.


### ✅ Dokuz vakanın metin incelemesi BİTTİ
Yan turda sorulan iki sert soruya cevap veriye uydu, **hiçbiri değişmedi:**
`isi_reddet` gerçek bir kaçış (kapısız, 0 ₺, batmak game-over değil —
`test_borc.js` dokuz vakada da sınıyor); 120.000 ₺ küçülmedi, baskı vakanın
fikri; YAN-B'nin bütün seçeneklerinin para kaybettirmesi ceza değil, aynanın
kendisi.

### 🔴 Ses — DEVIR'in eski notundaki "tek gerçek eksik"
`ses/` içindeki **5 dosya sentetik yer tutucu** (12 kHz bip). Sipariş metinleri
`ses_promptlari.md` BÖLÜM 2'de. Efekt müzik değil; Suno/Udio üretemez, metinden
efekt üreten araç ya da freesound gibi kütüphane gerekiyor. `test_ses.js` üç yeri
eşliyor (EFEKT tablosu, `efektCal` çağrıları, `ses/` klasörü).

### 🟡 İncelemelerden kalan, sahibinin karar vermediği
- **Ahlak cetveli.** Dokuz vakanın dokuzunda da vicdan düşerse para artıyor.
  Testten çıkan teşhis: bu bir gözden kaçma değil **zorunluluk** — aynı vicdan +
  farklı para = baskınlık, eksen ikiyse katı sıralama ters orantı demek. Kırmanın
  yolu rakam değil **üçüncü eksen**; o eksen veride var (`cavit_karsi_konum` gibi
  tohumlar) ama karar anında görünmüyor. İnceleme "karar kartında stratejik yön
  göster, sayılaştırma" öneriyor. V6'da dört karar zaten 0/0'da düzleşiyor.
- **Ceyda'nın üç "A mı B mi"si** (V5). Fikir sözleşme gereği doğru ama üçüncü
  tekrarda oyuncu yazarın elini görüyor. V6'da aynı belirsizlik kararın bedeline
  dönüştüğü için orada çalışıyor.
- **İki hüküm kalıbı**: *"Umarım doğru olanı yaptım"* (V2), *"Doğrusu buydu"* (V3).
  `arac_akis_denetim.js --bayrak` ikisini de bayrakla basıyor. Üçüncüsü
  (*"Haklıydın olmasan bile"*, YAN-B) yan turda onarıldı — bozuk Türkçeydi ve
  üstüne, Nadire'nin suçlamadığı kurulmuşken suçlama varmış gibi bir geçmiş
  yaratıyordu. Artık *"Beni suçlamasan bile"*.
- **"Peri'nin boğazı düğümlendi"** (V4) — oyuncuya ne hissedeceğini söylüyor.
- **`cengo_yoldas` yeniden üretimi** — PAKET 8 siparişi duruyor ama **gerek
  kalmadı**: kareler takas edilerek çözüldü. Sipariş kaydı tarihsel.

### 🟢 Eski açık işler (değişmedi)
- Paket 5 görselleri (4: kriz kutusu + sezon sonu) — slot veride açılmamış
- K10 kör noktası — doğrulayıcı yalnız varsayılan metin varyantını denetliyor
- Cengo satırı / anı defteri tekrarı — `gecistir`, `oyunu_surdur`
  (`cengoya_birak` yan turda kapandı: Cengo'ya atfedilen cümle defterden çıktı)

### ⚪ Sonraki faz
Android: Capacitor, görselleri base64'ten çıkarma, donanım geri tuşu,
erişilebilirlik, `final_tablo_plani.md`'deki sezon sonu istatistik tablosu.

---

## 5. SAHİBİYLE ÇALIŞMA BİÇİMİ

**Kısa konuş.** Bu oturumda sahibi dört kez "basit ve kısaca anlat" dedi. Uzun
tablo ve çok maddeli cevap işe yaramıyor; **iki-üç cümle + bir soru** çalışıyor.

**"Senin fikrin nedir?" diye sorar.** Seçenek listesi sunmak yerine **bir tane
öner ve gerekçesini tek cümlede söyle.** Bu oturumda beş kez böyle ilerledi.

**Kanona ekleme yapmadan önce onay al** — nereye ne ekleyeceğini söyle, onaylasın,
sonra yap. Bu oturumda bir kez işledi (V5 kanıtı) ve şekli sahibi seçti.

**Taslak → oku → uygula.** Her seferinde taslakta bir hata yakalandı.

**Sahibinin prozasına dokunma.** Onun cümlesini değiştirmek öneriyle olur.

---

## 6. BU OTURUMDA ISIRAN DERSLER

**Önce motora sor, sonra inan.** İnceleme üç kez "bu bozuk" dedi ve üçü de
doğruydu; ama iki kez de yanlış alarm verdi ve ikisi de ancak **motoru
çalıştırınca** çürütülebildi (`boslukla_kapat` kapısı, `%100` paneli).

**Tuhaf görünen şey kasıtlı olabilir.** `vedat_yuz`'ü "gizli tuzak" sanıp bedelsiz
yaptım; `test_v2b.js` kırıldı ve testin kendi yorumu tasarımı yazıyordu:
*"gerçek seçim: tam gerçek (güç) vs Vedat'a acıma (empati). İkisi birden değil."*
**Değiştirmeden önce ilgili teste bak.**

**Kendi aracına da şüpheyle bak.** İki yanlış alarmdan biri verinin değil
`arac_okuma.js`'in hatasıydı. Bir teşhiste de kendi "düzeltmem" hatayı büyüttü
(tur döngüsünün frenini 8'den 4'e düşürdüm).

**Geri çekme, ekleme kadar iş görür.** Bu oturumda uygulanan 30 düzeltmenin
büyük çoğunluğu **cümle kısaltmaktı** — "kimseye söylememiş" → "desteği veren
oydu", "Adalet geldi" → "Hepsi düştü". Yeni kanon yalnız bir kez eklendi.

**Aynı kök, farklı yüzey.** V4'teki altı sızıntının hepsi tek bir sebeptendi:
vaka "bunu kim biliyordu?" sorusunu cevaplıyordu, oysa o soru V5'in. Bir bulgu
bulduğunda **kardeşlerini ara.**
