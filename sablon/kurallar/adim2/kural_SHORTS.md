# SHORTS — YouTube Shorts videoları

### SHORTS-1 Shorts hattı: ne, kaç tane, kim
14 Kasım 2026, sahibinin kararı. Her vaka için 2–3 kısa tanıtım videosu (YouTube Shorts) yapılır. Amaç ilgi çekmek ve izleyiciyi oyuna çekmek. **Çözüm gösterilmez.** Vaka yayına girince videolar birkaç gün arayla yüklenir (bkz. SHORTS-29). Hattın belgesi `sablon/8_shorts.md`. Videoları Oğuz Bey üretir. Örnek: Vaka 3 (üç video). Süre: bkz. SHORTS-6.
*Kaynak:* 29, 780

### SHORTS-2 Videoyu seslendirme taşır; altyazı yok
Video seslendirmelidir (Edge TTS, ücretsiz). Ekranda oyunun kendi resimleri durur: mekân, figürler, ifadeler. Altyazı yok, ekrana yazı gömülmez. Ayrıca YouTube'a yüklenebilecek bir `.srt` dosyası üretilir; kullanıp kullanmamak yükleyene kalır.
*Kaynak:* 29, 783

### SHORTS-3 Metin oyundan kopyalanmaz
Senaryo serbest yazılır ve kanca gibi kurulur. Olaylar ve kişiler vakaya sadık kalır.
*Kaynak:* 784

### SHORTS-4 Kimin konuşacağı esnek
Bir video yalnız anlatıcıyla, bir video karakter sesleriyle, bir video ikisinin karışımıyla yapılabilir.
*Kaynak:* 785

### SHORTS-5 Son kare
Son kare: vakanın kapak resmi bulanık ve karanlık; üstünde PARAVAN / DEDEKTİFLİK, "Şimdi oyna ▶" ve bağlantı. Kapanış sorusu bu karenin üstünde seslendirilir ("Sen kimi suçlardın?").
*Kaynak:* 786

### SHORTS-6 Süre
Video kısadır; üst sınır 55 sn (alt sınır için CELISKI-SHORTS-1: 28 mi 30 mu). Araç önce süreyi tahmin eder, üretimde gerçek süreyi basar.
*Kaynak:* 780, 787

### SHORTS-7 Video tipleri ve kapanış soruları
Her vaka için şu tiplerden 2–3 tanesi seçilir:
- **Kanca:** olay, mekân, kayıp, kimin kimden şüphelendiği (girişte ne varsa). Kapanış: "Kim yaptı?"
- **Şüpheliler:** her şüpheliye eşit yer: kim, ne iş yapar, kendini savunan tek bir cümle. Kapanış: "Sen kimi suçlardın?"
- **Ekip:** Peri ile Cengo'nun hâli, mizahı, müşteriyle ilk karşılaşma. Kapanış: "Sen de gel."
- *İkilem* (istisnai): yalnız vakanın ikilemi çözümü söylemeden kurulabiliyorsa. Çoğu vakada kurulamaz, çünkü kararların adları suçluyu ele verir. Kapanış: "Sen olsan ne yapardın?"
*Kaynak:* 789, 790, 791, 792

### SHORTS-8 Spoiler kuralı (Nurcan kuralının videodaki karşılığı)
İzleyici oyunu oynamadı; video, oyunun **ilk birkaç dakikasında** öğrenilenden fazlasını söyleyemez.
*Kaynak:* 793

### SHORTS-9 Kaynak olarak kullanılabilecekler
Vakanın `## sahne giris` ve `## sahne konusma` bölümleri. Ayrıca ipucu sahnelerinin **mekânları** (arka planlar) ve şüphelilerin sade hâlleri.
*Kaynak:* 794

### SHORTS-10 Videoda yasak olanlar
- suçlunun kim olduğu ya da ona işaret eden herhangi bir şey: fazla yer, fazla kuşkulu bir yüz, "biri yalan söylüyor" deyip tek kişiye bakmak;
- ipucunun içeriği: kanıt nesnesi, saat, şifre, fotoğraf, borç;
- yüzleşme, kovalamaca, itiraf, kapanış, karar sahneleri ve onların resimleri;
- kararların adları ve sonuçları;
- çözüm, anı, hikâye, kanıt adı metinleri;
- oyunda henüz olmayan bir gerçek (kanona ekleme). Gerekirse önce sahibine sorulur.
*Kaynak:* 796, 797, 798, 799, 800, 801

### SHORTS-11 Spoiler denetimi en başta; damga olmadan üretim yok
Spoiler ancak video üretildikten sonra fark edilirse ses ve görüntü baştan üretilir. Bu yüzden araç önce yalnız senaryoyu denetler. Senaryo **damgalanmadan** ses ve görüntü üretilmez. Damgadan sonra bir videoda tek harf değişirse o video yeniden denetlenir. Damga `shorts/vN/denetim.json`'da durur; damgasız ya da damgadan sonra değişmiş video için ses/görüntü üretilmez.
*Kaynak:* 29, 802

### SHORTS-12 Aracın yakaladıkları (HATA → durur)
- çözüm, anı, hikâye ve kanıt bölümleriyle, karar ve ipucu metinleriyle, ipucuyla açılan olgularla **4 kelimelik ortak söz** (girişte ya da konuşmada da geçen sözler hariç);
- **suçlunun adı ile bir suç sözü aynı cümlede** (soydu, sakladı, yalan, itiraf…; soru cümleleri hariç). Başlık ve açıklama da bu denetimden geçer;
- karar adları;
- yalnız yüzleşme, kovalamaca, kapanış ve karar sahnelerinde geçen resimler;
- giriş ve konuşmada görülmeyen kareler (`K…`); vakanın kapak ve kart resimleri hariç;
- suçlunun "normal" dışındaki ifadeleri (giriş ve konuşmada görünenler hariç);
- henüz üretilmemiş resim (yer tutucu), ses tanımı olmayan konuşan.
*Kaynak:* 803, 804, 805, 806, 807, 808, 809

### SHORTS-13 Aracın uyarıları (karar insanın)
- adı geçen kişi ekranda değil (sahnede olmayan birinden söz etmek serbest; uyarıyı okuyup karar ver);
- cevap veren karakter konuşurken az önce konuşan karakter ekrandan çıkmış (hitap edilen ekranda olmalı);
- konuşan karakter bir karenin üstünde konuşuyor (karede o mu?);
- çok uzun satır, hedef dışı süre, kapanış sorusunun olmaması.
*Kaynak:* 810, 811, 812, 813

### SHORTS-14 İnsan kontrol listesi (araç basar; damgadan önce senaryo okunarak cevaplanır)
1. Suçlu bu videodan çıkarılabiliyor mu?
2. Bir ipucunun içeriği söyleniyor ya da gösteriliyor mu?
3. Bir karar ya da sonucu anılıyor mu? Kapanış sorusu bir karara mı işaret ediyor?
4. Kanona ekleme var mı?
5. Adı geçen kişi o an ekranda mı, söylenen yer arkada mı?
6. Başlık ve açıklama da aynı kurallara uyuyor mu?
*Kaynak:* 814, 815, 816, 817, 818, 819

### SHORTS-15 Konuşan ve hitap edilen ekranda
(5. parça SR kurallarının kısası.) Konuşan karakter ekranda olur (araç kendiliğinden ekler). Hitap edilen de ekranda kalır.
*Kaynak:* 820

### SHORTS-16 Söz edilen kişi ekranda, söz edilen yer arkada
Bir kişiden söz edildiği an o kişi ekranda olur; bir yerden söz edilince o mekân arkada durur. Sahnede olmayan birinden söz etmek serbesttir (araç yalnız uyarır, bkz. SHORTS-13).
*Kaynak:* 821, 810

### SHORTS-17 Figür sayısı ve yerleşim
Ekranda **en çok iki figür** olur. Peri ya da Cengo solda (aynalı, sağa bakar), konuk sağda durur. Tek figür ortada durur.
*Kaynak:* 822

### SHORTS-18 Işık
Konuşan aydınlık, dinleyen loş görünür. Anlatıcı konuşurken figürlerin hepsi aynı ışıktadır.
*Kaynak:* 823

### SHORTS-19 Senaryo dosyası (örnek biçim)
Senaryo `sablon/vakalar/vakaN_shorts.md`'dedir. Dosyanın biçimi kaynaktaki şu örnekteki gibidir (kaynak yalnız örneği verir; genel biçim kuralı yazmaz):
```
## video 1 · Kanca
⚙ baslik: Karaköy'de bir pastane soyuldu. Kim yaptı? #shorts
⚙ aciklama: Paravan Dedektiflik · Vaka 3: … (YouTube açıklaması; spoiler denetiminden geçer)
⚙ set: trenckot · cset: haki · muzik: muzik/gerilim_1.mp3
- anlatici: Pazar gecesi Karaköy'de bir pastane soyuldu. | arka: A23d · kamera: yakin
- nadide.kirgin: Yedi yüz yirmi bin lira! | arka: A6 · figur: peri.kas, nadide.kirgin
- anlatici: Biri yalan söylüyor. Ama kim? | son
```
*Kaynak:* 824

### SHORTS-20 Konuşan
Konuşan `anlatici` ya da bir resim anahtarıdır (`nadide.kirgin`, `peri.kas`, `cengo.gulen`). Yalnız kişi adı yazılırsa (`nadide`) `normal` ifadesi kullanılır. Peri ve Cengo için kıyafet video başındaki `set:` ve `cset:` değerlerinden gelir; istenirse açıkça yazılır (`peri.trenckot_acik.kas`).
*Kaynak:* 825

### SHORTS-21 `arka:`
Arka plan (`A…`) ya da kare (`K…`). Sonraki satırlara geçer. Değişince figürler sıfırlanır. Karenin üstüne figür çizilmez.
*Kaynak:* 826

### SHORTS-22 `figur:`
Ekranda duranlar (konuşan kendiliğinden eklenir). Sonraki satırlara geçer; `figur: yok` temizler.
*Kaynak:* 827

### SHORTS-23 `kamera:`
Değerler: `yakin`, `uzak`, `sola`, `saga`. Aynı arka planda süren satırlar tek çekim sayılır; kamera o çekimin ilk satırından alınır. Yazılmazsa sırayla değişir.
*Kaynak:* 828

### SHORTS-24 `| son`
Satır son karenin üstünde söylenir (kapanış sorusu, çağrı).
*Kaynak:* 829

### SHORTS-25 Resim anahtarları nerede
Resim anahtarları `kaynak/yeni/gorseller.json` dosyasındadır. Vakanın görsel tablosu: `vakaN_gorsel.md`.
*Kaynak:* 830

### SHORTS-26 Sesler (`kaynak/shorts_ayar.json`)
Edge TTS ücretsizdir ve hesap istemez. Türkçe ana dilli iki ses var: `tr-TR-AhmetNeural` (erkek) ve `tr-TR-EmelNeural` (kadın). Karakterler hız (`hiz`) ve perdeyle (`perde`) ayrılır. **Bir karakterin sesi bir kez seçilir, bütün vakalarda aynı kalır.** Yeni bir karakter konuşacaksa önce `shorts_ayar.json`'a eklenir (araç eksik sesi hata sayar). Son karenin ayarı da bu dosyadadır. Denemek için `node arac_shorts.js --ses-dene` her sesten `shorts/ses_deneme/` klasörüne bir dosya yazar. Ücretli bir sese geçilirse yalnız `seslendir()` fonksiyonu değişir.
*Kaynak:* 29, 831

### SHORTS-27 Müzik ve depoya girmeyenler
Müzik YouTube Ses Kitaplığı'ndan (Studio → Ses kitaplığı; "atıf gerekmez" olanlar) indirilir, `shorts/muzik/` klasörüne konur ve senaryoda `muzik: muzik/<dosya>.mp3` diye anılır. Araç müziği döngüler, seslendirme konuşurken kısar, başta ve sonda yumuşatır, sonucu -14 LUFS'a hizalar. Videolar, müzik dosyaları ve ara dosyalar depoya girmez (`.gitignore`); damga dosyası (`denetim.json`) girer.
*Kaynak:* 29, 832

### SHORTS-28 Üretim adımları (Oğuz Bey, her yeni vaka için)
```
cd kaynak
# 1. Senaryoyu yaz: sablon/vakalar/vakaN_shorts.md (Vaka 3 örneği hazır)
node arac_shorts.js N --denetle        # 2. HATA kalmayana kadar düzelt; uyarıları oku
                                       # 3. Kontrol listesini senaryoyu okuyarak geç
node arac_shorts.js N --onayla         # 4. Damga
node arac_shorts.js N 1 --onizle       # 5. Hızlı önizleme (540×960), izle; görüntü düzeltmesi gerekirse senaryo → 2'ye dön
node arac_shorts.js N                  # 6. Tam kalite: shorts/vN/vN_1.mp4 … (+ .srt, _yukleme.txt)
```
Araç biçimi: `node arac_shorts.js N --denetle | --onayla | [video] [--onizle]`.
*Kaynak:* 29, 833

### SHORTS-29 Yükleme
YouTube Studio → Oluştur → Video yükle. Başlık ve açıklama `vN_K_yukleme.txt` dosyasındadır. Görünürlük → **Programla**: vaka çıktığı gün 1. video, 2–3 gün arayla diğerleri. Altyazı isteğe bağlıdır (Altyazılar → dosya yükle → `.srt`). Shorts, dikey ve 60 sn'den kısa olduğu için kendiliğinden Shorts sayılır.
*Kaynak:* 835
