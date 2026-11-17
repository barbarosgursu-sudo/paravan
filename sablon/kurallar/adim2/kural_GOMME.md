# GOMME — kesim, zemin, boy, gömme

### GOMME-1 Figür kesimi yapay zekâyla (tek yöntem)
14 Kasım 2026'dan beri (sahibinin kararı) yeni oyunun figürleri yalnız yapay zekâyla kesilir:
`cd kaynak && python arac_kes_yz.py <girdi> <çıktı.webp> --profil peri|cengo|konuk… [--genis]`.
- BiRefNet modeli: saç arası ve kol arası zemini de siler, kenardaki zemin rengini arındırır. İlk kullanımda model (~970 MB) iner; `onnxruntime` gerekir (`KURULUM_ORTAK.md`).
- Figür karakterin SABİT çerçevesine göre kesilir; profil yalnız bu çerçeveyi verir.
- `KALINTI` (düz zemin rengi ölçüsü) yalnız uyarıdır.
- `arac_paket.js` figürleri `arac_kes_yz.py` ile keser. **Kapı:** yalnız bu yöntemle kesilmiş figür gömülür (`--eski` ile `--yaz` durur). `arac_kapi.js` K6: "Saç ve kol arasında zemin kalmaz: figür yapay zekâ kesimiyle gömülmüş olmalı."
- Sebep: V6'da hale adımı atlandı; Peri'nin saçında mavi, Cengo'nun kol arasında bej yayına çıktı.
- El denetimi `arac_el.py` ile yapılır; onayı sahibi verir.
- Araçtır, test değil.
*Kaynak:* 27, 475, 1144, 2793, 3551

### GOMME-2 Eski renk kesimi ve arac_hale.py — yalnız karşılaştırma / kayıt
Eski renk kesimi (`arac_kes.js`) ve `arac_hale.py` artık kullanılmaz (14 Kasım 2026); `arac_kes.js` yalnız karşılaştırma için (`--eski`).
- Komut: `node arac_kes.js <girdi> <çıktı.webp> --profil peri|saten|cengo [--genis]` — arka planı saydamlar, karakteri sabit çerçevesiyle kırpar (yoksa ifade değişince karakter ekranda zıplar). Profiller ve gerekçeleri: `YENI_OYUN_GORSEL_PROMPTLARI.md` → "KESİM ARACI". Paketle kullanımı `arac_paket.js --profil G<n>=<profil>`.
- Vaka 2'de eklenen profiller:
  - `peri_beyaz` / `cengo_beyaz` / `konuk_beyaz`: zemine yakın beyaz taşıyan görsel (krema, masa örtüsü, beyaz gömlek). Varsayılan profil (kenar tol 28, hale 60, delik doldurma) beyazı zeminle birlikte yer. Bu profiller kenar 8–10, hale 20–25, delik kapalı; zemin rengini kenardan 40 px içeriden okur (üreticinin kenar sütunları birkaç birim açık çıkıyor). `konuk_beyaz`, varsayılan `konuk`un delik doldurması Bülent ve Sarkis'in beyaz gömleğini delik delik yediği için eklendi.
  - `konuk_sag`: el ya da kol sol kenara uzanıyorsa. Araç zemin rengini satırın sol kenarından okur; orada parmak varsa o satırda ince zemin çizgisi kalır. Bu profil sağdan okur.
- Eski iş akışı (Vaka 2): zemine yakın renk silinirse (Peri'nin beyaz masa örtüsü G10–13, beyaz gömlekler) `--profil` ile değiştirilirdi. `cengo` profilinin çerçevesi Peri'ninkinden farklıdır; Peri'ye delik doldurmasız profil gerekirse `arac_kes.js` PROFILLER'e `peri` çerçeveli, `delik:false` bir profil eklenir. El çerçeveden taşarsa `--genis G<n>`.
- `arac_hale.py` yalnız yeşil zemin için yazıldı; başka zeminde kullanılacaksa önce eşiği denenir.
*Kaynak:* 27, 481, 482, 483, 543, 1144, 3049, 3074

### GOMME-3 Görsel boyutu ve ölçeği
- Farklı boyutta gelen görsel önce 1122×1402'ye (zemin rengiyle) getirilir.
- Temel görselin ölçeği ölçülür: baş tepesi ile etek ucu arası setle aynı mı. Vaka 2 G1 boydan gelmişti → kırpılıp 1122×1402'ye getirildi. Grok 912×1136 verir; araç büyütür, ölçek tutar.
*Kaynak:* 476, 484

### GOMME-4 Kesimde kaybolan ya da kalan zemin
- Zemine yakın renkte nesne (beyaz kâğıt gibi) kesimde kaybolabilir → elle maske.
- Kol ile gövde arasında kalan bej boşluk → elle temizlenir. (YZ kesimiyle ilişkisi: CELISKI-GOMME-1.)
*Kaynak:* 477, 478

### GOMME-5 Saç kenarı (hale) denetimi ve elle temizlik
Her figürde, sahibine göndermeden önce saç kenarı büyütülüp bakılır (Vaka 1'de "saçta grilik" zaman kaybettirdi). Saç halesi araca değil insana kalır. (YZ kesiminden sonraki geçerliliği: CELISKI-GOMME-1.)
- Renk kesimi kıvırcık/dağınık saçın arasında bej hale bırakır. Yeşil önizlemede (temas sayfası) başı büyütüp bak; hale varsa yalnız **baş kutusunda** temizle.
- Kır saçta dikkat (temizlik saçı da siler). Gümüş/beyaz nesneler (balık, tel, kâğıt, pul) temizlikte silinebilir: kutunun dışında bırak, sonra büyütüp var mı bak. Siyah saçta açık şerit kalır → kenarı koyulaştır.
- Yöntem: koyu saçta, koyu saça komşu ve zemine <30 uzak opak pikseller silinir; **ten çevresi korunur** (korumasız denemede göz akı da gitmişti). Kızıl saç ten rengine yakın (Saadet'in saçı `hale_koyu`nun ten korumasına takıldı): orada yalnız baş kutusunda saydama komşu pikseller birkaç tur aşındırılır (Saadet: y<170, zemine <32 uzak, 8 tur). Krema zemine ~6 birim uzak: renkle genel temizlik kremayı yer, yalnız küçük kutuda çalış.
- Tarif: `vaka1_gorsel_devir.md` §6.
*Kaynak:* 28, 480, 485, 2531, 2545, 3052, 3074

### GOMME-6 Paket aracı ve toplu işleme
Görseller tek tek değil, **sohbet sohbet** (bir sohbetin bütün çıktıları), toplu gelir.
- Dosyalar `G<n>` ile başlar ya da ChatGPT'nin verdiği adla kalır; sahibi yalnız numaraları yazar ("Sohbet 1, G1–G13"), araç `--sira G1-G13` ile dosya adındaki üretim saatine göre numara verir. Pakette her numaradan **bir** görsel olur (beğenilmeyen çıkarılır); sayı tutmazsa araç durur. Numarayı mesaj sırasından değil görselden doğrula (Vaka 2'de 3. ve 4. tablonun tersiydi).
- Numara `sablon/vakalar/vakaN_gorsel.md` tablosundan tür ve anahtara çevrilir.
- `cd kaynak && node arac_paket.js <klasör> --vaka N [--yaz]`: `--yaz` yokken yalnız önizler, proje dosyasına dokunmaz (temas sayfası `YENI_UI/paket_<klasör>.png`: yeşil zemin + büyütülmüş baş). `--yaz` ile keser/küçültür, gömer, manifestoyu günceller, doğrulayıcı + iki derlemeyi koşar ve eski `index.html`'in değişmediğini md5 ile sınar.
- Araca kalmayan (insana): saç halesi, yazı/harf taraması, boy ayarı (araç boyu olmayan konuğu söyler), ilgili satırlarda ekran görüntüsü (`arac_yeni_tur.js`).
- Sahibine paketin oyundaki son hâli tek seferde gösterilir; düzeltme istenen görseller tek listede döner. Temel görseller (G1, G14…) bitince öbür sohbetler aynı anda (başka sekmede, ChatGPT ya da Grok) yürüyebilir.
- Araçtır, test değil.
*Kaynak:* 28, 730, 3074, 3085

### GOMME-7 Sahibine göndermeden önce teknik denetim
Görsel gelince (adım 10), sahibine göndermeden ÖNCE: kes; saç kenarını büyütüp temizle (yalnız baş kutusu; gümüş nesneleri koru); ekranda Peri'nin yanında boyuna bak; yazı/harf tara; ilgili satırda ekran görüntüsü al. Sahibine yalnız oyundaki son hâl gider. Görselli tur denetiminde (adım 11) de teknik olarak bakılır: saç kenarı temiz mi, boy doğru mu, kesim kalıntısı var mı.
*Kaynak:* 728, 2532, 2545, 2551

### GOMME-8 `göm` komutu
Yalnız LISTE'deki her resim `onayli/`'deyken gömülür (yarım set gömülmez; oyunda eski ve yeni resim karışmasın).
1. `kaynak` içinde: `node arac_paket.js ../uretim/v<N>/onayli --vaka <N> --profil <G=profil,…> --genis <…>` → temas sayfasına bak.
2. Aynı komut `--yaz` ile (doğrulayıcı ve derlemeleri kendisi çalıştırır).
3. Not edilen boy ölçekleri `kaynak/yeni/gorseller.json → boy`'a yazılır (`arac_json_yaz.js` ile).
4. Masa kartı (GOMME-28), kart afişi elle (GOMME-21, GOMME-27) ve yeni karakterin künye portresi (GOMME-12).
*Kaynak:* 1140, 1141, 1142, 1143, 1146

### GOMME-9 Derleme "her görsel gömülü" demeli
Gömüldükten sonra derleme "her görsel gömülü" demelidir.
*Kaynak:* 479

### GOMME-10 Biçim: WebP q80
Bütün görseller WebP, kalite 80.
*Kaynak:* 348

### GOMME-11 Eski oyunun görsel boru hattı
Eski oyuna yeni görsel gerekirse: 900 px genişliğe indir, WebP q80 ile göm. Öncesinde üç kontrol: mevcut setle parlaklık karşılaştırması; büyütülmüş harf/rakam taraması (plaka, tabela, etiket, kâğıt yüzü); slotun `gosterir`ine karşı Nurcan kontrolü. Ders: genel "yazı olmasın" satırı, gövdede açıkça istenmiş bir nesneyi geçersiz kılamaz; yazı taşıyabilecek nesnenin yüzü gövdede kapatılır ("dosya KAPALI", "kâğıt katlı, iç yüzü görünmüyor"), boş yüz istenmez.
*Kaynak:* 69

### GOMME-12 Künye portresi
Her figürlü kişinin yüzü portreye kırpılır (`yeni_gorsel/portre/`): her yeni kişinin figürü gömülünce `python3 arac_portre.py <figür_normal> yeni_gorsel/portre/portre_<id>.webp` + `gorseller.json`. (16 Ekim; sahibi buldu: Vaka 2'nin yedi konuğunda yoktu.) `test_yeni_v2.js` eksik portreyi yakalar.
*Kaynak:* 489, 1146, 2580

### GOMME-13 Boy — resim değil, tablo belirler
- Resimde herkes aynı yükseklikte çizilir; ekrandaki boyu tablo belirler (`gorseller.json → boy`).
- Yeni karakter tabloya önce eklenir, sonra istemi yazılır.
- Yerel Claude temel figürü onaylamadan önce `arac_yanyana.js --oran` ile boyu ölçüp ayarlar. Yeni konuk eklenince ekranda Peri'nin yanında bakılır (sahibine göstermeden önce); araç boysuz konuğu söyler.
- Telefonda bakmak yeter (16 Ekim 2026'dan beri her ekranda telefondaki oran geçerli); `--cihaz` boy sapmasını yine sınar.
- Tablo (Peri'ye göre): Peri 1,00; Cengo 1,00; Nadide 0,98; Ferruh 0,98; Kenan 1,02; Gizem 0,93; Sedat 0,92; Ayla 1,00; Rüstem 0,95; Müzeyyen (V6) 1,00; Jale (V6) 1,00; Haldun (V6) 1,02; Eylül (V6) 0,94; Recep (V6) 0,94; Dilek (V6) 0,92; Tahsin (V6) 1,00.
- Kadın yan karakterler için eski aralık (0.76–0.82, çok kısa/tombul 0.72): CELISKI-GOMME-2.
*Kaynak:* 487, 504, 505, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 524, 2532, 3036, 3052

### GOMME-14 Uzanan kol, elde nesne
Uzanan kol ya da elde tutulan nesne figür çerçevesinden taşıyorsa `--genis`; karşıdakinin arkasında kalıyorsa öne alınır (`yeni_arayuz.js` → `ustte` listesi).
*Kaynak:* 488

### GOMME-15 Marka/yazı rötuşu
Düz yüzeyde (gözlük sapı, çelik kapak, rozet) satır satır yatay ara değerle silinir. Yapısal çizgi geçen ya da büyük alanda (çorap bandı, etek ucu) rötuş tutmaz → yeniden üret.
*Kaynak:* 486

### GOMME-16 Zemin: özellik ve yazılımla seçim
- Zemin düz, tek renk, gölgesiz; üstünde hiçbir nesne yok.
- 14 Kasım 2026'dan beri (sahibinin kararı) zemin KIYAFETE göre yazılımla seçilir: `kaynak/arac_zemin.py`. Saça bakan eski tablo yalnız tarihî kayıttır (V6'da Peri'nin mesai kıyafeti — krem gömlek + mavi kot — gri-mavi zemine kondu, kesimde kot zeminle birlikte silindi).
- Zeminler tek listede: `uretim/referanslar/zeminler.tsv` — yalnız DENENMİŞ iki zemin, sırasıyla açık bej → gri-mavi (sıra saç halesi tecrübesinden: Vaka 3'te kızıl/bal dağınık saç yeşil zeminde kesilince teller arasında zeytin-yeşil sis kaldı, `arac_hale.py` ile ancak temizlendi; bej zemindeki Cengo, Kenan, Sedat'ta hale çıkmadı). Zemin adları zeminler.tsv'den.
- Yeşil zemin artık kullanılmaz (kızıl saçın karşıtı; karışımı göze batıyor).
- Her zemin için figürün yüzde kaçının zemine kesim toleransı kadar yakın olduğu ölçülür; riski %5'in altındaki ilk zemin seçilir.
- Karar `uretim/v<N>/zemin.tsv`'ye yazılır; `istem_kontrol.sh` istemin zeminini onunla karşılaştırır, uymayan istem üretilmez.
*Kaynak:* 528, 529, 535, 536, 1084

### GOMME-17 İki zemin de riskliyse kıyafet değişir
İki zemin de riskliyse (araç "KIYAFET DEĞİŞMELİ" der) zemin değil KIYAFET değişir (sahibinin kararı, 14 Kasım 2026: "yeni bir kıyafet giydiririz, bu kadar uğraşacak bir şey yok"). Araç çakışan rengi ve figürdeki yerini basar; kıyafetin o parçası iki zeminden de uzak bir renkle değiştirilir (kıyafet kanondur: çakışan parça sahibine/ortağa sorulur, onlar karar verir), kart yeniden üretilir, araç yeniden koşar. Yeni zemin rengi eklenmez.
*Kaynak:* 537, 1084

### GOMME-18 Zemin seçiminin zamanı: Peri/Cengo ve konuk
- Peri, Cengo (önce kıyafet kartı gelir, SR-C): kart onaylanınca, istemden önce `python arac_zemin.py --uretim v<N> G<kart> --kiyafet peri.<kıyafet> --yaz` → karar `uretim/v<N>/zemin.tsv`; o kıyafetin bütün istemleri bu zemini alır.
- Konuk (kartı temelden sonra gelir): temel açık bej zeminde üretilir; onaylanınca araç temelde koşar (`--yaz`). Bej riskliyse temel önerilen zeminde BİR kez daha üretilir; ikisi de riskliyse GOMME-17. (Eskiden her temel iki zeminle üretiliyordu; şimdi yalnız gerektiğinde.)
*Kaynak:* 538, 539, 1084

### GOMME-19 Zemin denemesi
Yalnız araç gri-mavi seçip saç açıksa (gri-mavi açık/sıcak saçta mavi hale bıraktı — V6: Eylül, Recep, Tahsin, Gizem) bej ile deneme yapılır: temel istemi iki zeminle (`G<n>.md` + `G<n>z.md`) üretilir, ikisi oyunda kesilip (`arac_yanyana.js`) başı büyütülür, saç kenarı temiz olan seçilir; seçilen `onayli/G<n>.png`, öbürü `red/`. O kıyafetin bütün ifadeleri o zemini alır.
*Kaynak:* 541, 543, 1084

### GOMME-20 Aynı zemin, renk düzeltmesi yok; kesim profili zemine göre
- Aynı karakterin (aynı kıyafetin) bütün ifadeleri aynı zeminde.
- Renk düzeltmesi yapılmaz: renk yanlışsa resim yeniden üretilir.
- Kesim profili zemine göre seçilir ve araç basar (gömmede o kullanılır): bej → `peri`/`cengo`/`konuk`; öbürleri → dar profil `peri_mavi`/`cengo_beyaz`/`konuk_beyaz_delik`.
*Kaynak:* 542, 544, 1084

### GOMME-21 Kart afişi: genel
Her vakanın bir afişi var (17 Ekim 2026): oyuncu vakayı bitirince "Arkadaşına öner" kartının arka planı olur (`gorseller.json → kart`, anahtar `KART_V<n>`; 9:16). Okuyan kişi vakayı OYNAMADI — afiş Nurcan yüzeyidir. İstemler ve iş sayfası `sablon/kart_sayfa/uret.py`: yeni vaka = yeni `G.append`, sonra `python3 uret.py` ve aynı Artifact'e yeniden yayın. Vaka 1 ve 2'nin istemleri örnek; Vaka 2 afişi balo salonunda.
*Kaynak:* 490, 1146, 3001

### GOMME-22 Kart afişi: kadro
Önde Peri ve Cengo (vakanın kıyafetiyle), arkada tek sıra müşteri + şüpheliler. Görgü tanığı ve sırrı taşıyan kişi (Vaka 2'de vale, terzi) girmez.
*Kaynak:* 491

### GOMME-23 Kart afişi: hareketli ve eğlenceli
Sahibinin kararı (17 Ekim): afişler eğlenceli ve hareketli; Peri ile Cengo'nun kendine özgü pozu var. Peri kameraya yürür (L19 yalnız poz referansı); Cengo vakaya uygun komik bir hareket yapar (V1 martıdan eğiliyor, V2 Peri'yi dansa davet ediyor). Arka sıra yerinde durur.
*Kaynak:* 495, 3001

### GOMME-24 Kart afişi: zemin satırı şart
İstemde şu satır ŞART: "Altı kişinin hepsi <zemin>in üstünde, ayakları <zemin>e basıyor; su/tekneler arkada." (Vaka 1'in ilk denemesinde arka sıra suyun üstünde durdu.)
*Kaynak:* 496

### GOMME-25 Kart afişi: düzen
Kart altta küçük bir kutu çizer (alt ~%20). Kişiler ayaklarına kadar onun üstünde kalır; alt şeritte yalnız zemin. Sahibinin kuralı: "önce resim, yazı az" — kutu büyütülmez.
*Kaynak:* 497, 3001

### GOMME-26 Kart afişi: referanslar (5)
Mekân, Peri temeli, Cengo temeli, **konuk şeridi** (figürler bej zeminde tek görselde birleştirilir; `uret.py` yanındaki `ref/`), L19. Şerit tek referansla dört kişi taşır.
*Kaynak:* 498

### GOMME-27 Kart afişi: gömme ve kontrol
Gelen görsel olduğu gibi WebP q80 → `kaynak/yeni_gorsel/kart_v<n>.webp`; `dosyalar` + `kart` (`arac_json_yaz.js` ile). Sonra kart Pixel 5'te çizilip bakılır (yüzler kutunun üstünde mi). Kontrol: E listesi + kartın `bak` satırı.
*Kaynak:* 499, 500

### GOMME-28 Masa kartı (Ajansın Masası, vaka seçme)
Kart afişinden yatay kırpık, yüzler görünür: `magick yeni_gorsel/kart_v<N>.webp -resize 900x -crop 900x500+0+<y> +repage -quality 80 yeni_gorsel/masa_v<N>.webp`; `gorseller.json → dosyalar.MASA_V<N>` ve `game_data.json → vakalar[V<N>].giris_gorsel = "MASA_V<N>"` (yoksa önceki vakanın büro resmi görünür — Vaka 3'te sahibi buldu, 6 Kasım).
*Kaynak:* 1145

### GOMME-29 Görsel standardın amacı: oyunda yan yana
Görsel standart (6 Kasım 2026, sahibinin onayı): resimler tek tek değil, **oyunda yan yana** doğru olsun. Her istem buna göre yazılır; yerel Claude denetimi buna göre yapar. (Vaka 3 dersi: 67 resim tek tek onaylandı, oyunda boylar, bakışlar ve kesim tutmadı.)
*Kaynak:* 501
