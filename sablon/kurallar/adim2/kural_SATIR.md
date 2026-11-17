# SATIR — satır–resim sözleşmesi (birleştirilmiş kurallar)

### SATIR-1 Temel ilke: söylenen görünür, görünen söylenmiş
Satır–resim sözleşmesi sahibinin kararıdır (8 Kasım 2026; ana metni `sablon/5_gorsel_sistemi.md` C0). Bir şey söylendiğinde ilgili kişi ya da kişiler ekranda görünür, ya da söylenen şey resimde görünür. Tersi de geçerlidir: resimde görünen şey o an söylenmiş olmalı. Sahnede bulunmayan ya da geçmişte kalan birinden söz etmek serbesttir ("Kenan dün akşam neredeydi?" kare istemez).
Metin bir nesneyi, hareketi ya da kıyafeti anıyorsa o satırda ekranda görünür. Üç yol var:
- figürün ifadesi o nesneyle ya da hareketle,
- bir ara kare,
- bir mekân karesi (nesne arka planda görünüyorsa).
Hiçbiri yoksa metin değişir. (Vaka 1'de yaşanan: metin telefon, istavrit, tel andı, ekranda yoktu.)
*Kaynak:* 6, 375, 391, 392, 393, 394, 395, 2528, 723, 2549

### SATIR-2 Sözleşmenin amacı, kapsamı ve nerede yakalandığı
Sözleşme SR-A…M maddelerinden oluşur (SR-L 8 Kasım 2026'da, SR-M 13 Kasım 2026'da eklendi; eski belgelerde "SR-A…L" yazar). Amaç: bir vakanın resimleri **bir kez** üretilir; kurallar hatayı istem yazılırken yakalar (7. parça adım 3, 8 ve "Satır–resim uyumu"). Nerede yakalanır:
- diyalog yazılırken (adım 3): SR-A, H, I, L (`kime`/`gir`, anlatı, ifade satırın duygusundan, sahne başında akış notu; sahne notu yalnız o an görüleni söyler — kural 4a);
- görsel listesinde (adım 8): SR-B, C, D, K (kıyafet kartı, kıyafet hâli tablosu, ifade/nesne ayrımı);
- istem yazılırken: SR-D, E, I, J (`## Satırlar` her vakada zorunlu, bayraklar kapalı);
- gömmeden sonra hepsi doğrulanır. Bu son adım artık hata aramak için değil, öncekilerin tuttuğunu görmek içindir.
*Kaynak:* 6, 390, 1076, 2628, 2946

### SATIR-3 SR-A Hitap
Konuşanın karşısında sözü yönelttiği kişi durur. Replik iki kişiye gidiyorsa asıl işin yöneldiği kişi ekranda olur. `kime` her zaman gerçek muhatabı gösterir. Figür birini işaret ediyorsa karşısındaki gerçekten o kişi olmalı. Diyalogda her Cengo satırı için kime konuştuğu belli olur (Vaka 1 dersi). Hatalı örnekler: "Kısa bir mola. Gelelim işe: ücretimiz…" Nadide'ye söyleniyor, ekranda Cengo; "Ferruh… Doğru mu bu?" satırına `kime: peri` yazılmış; Vaka 1'de Cengo konuğa konuşurken Peri'ye bakıyor gibiydi, konuk Peri'ye konuşurken karşısında Cengo vardı.
*Kaynak:* 6, 377, 397, 2520, 2521, 720, 2547

### SATIR-4 Ekran düzeni ve `kime` işaretleri
Ekran düzeni (9 Ekim 2026): sol "bizim taraf" (Peri ya da Cengo), sağ karşı taraf.
- Konuk sahnedeyken Cengo konuşursa Peri'nin yerine sola geçer (aynalı) ve konuğa bakar.
- Cengo konuk varken Peri'ye konuşuyorsa Cengo satırına `{kime: peri}` yazılır (yoksa sola geçer, konuğa bakar).
- Konuk satırında `{kime: peri|cengo}`: konuk kime konuşuyorsa solda o durur.
- Peri konuğa, Cengo'nun ardından konuşuyorsa konuğu sağa almak için `{gir: <konuk>}`.
- Motor kuralı (SR-M6, 13 Kasım 2026, `yeni_arayuz.js`; V1–V5'i de etkiler): Peri'nin `kime`si sahnedeyse motor onu sağa getirir; bundan sonra kalan HİTAP/KONUŞAN bayrağında `gir` eklenir ya da `kime` düzeltilir.
*Kaynak:* 397, 399, 400, 2520, 2521, 389, 2817

### SATIR-5 SR-G Konuk konuğa konuşursa ikisi de ekranda
Konuk başka bir konuğa konuşuyorsa satıra `{kime: <konuk>}` yazılır: konuşan sola geçer (aynalı), hitap edilen sağda kalır (C-3 ekran düzeni; 8 Kasım 2026, `yeni_arayuz.js`). O satırda Peri ekranda değildir. Peri ya da Cengo konuşunca, ya da soldaki konuk `kime`siz konuşunca sol Peri'ye döner. Karşılıklı sürerse yerler sabit (16 Kasım 2026, sahibinin kararı): aynı iki kişi bir önceki satırda da ekrandaysa kimse yer değiştirmez, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Örnek: Nadide ↔ Ferruh, Gizem ↔ Ferruh.
*Kaynak:* 6, 383, 401

### SATIR-6 Figürü olmayan konuşmacı
Sesi olan ama figürü olmayan biri (boyacı, asistan, telefon) konuşurken ya figürü olur ya da ekranda o satırda ilgili kare ya da nesne (telefonlu Peri) olur; boş iki figür kalmaz. Figürü olmayan konuşmacı (`sesler`: teyze, ses) bir karenin üstünde konuşuyorsa ona verilen cevap da AYNI karede kalır (`{kare: K38}`); kare kalkarsa motor solda Peri'yi gösterir ve cevap Peri'ye verilmiş gibi görünür (Vaka 3, Gizem → teyze; sahibi 18 Ekim'de buldu). Kare, cevaplayan başka birine dönünce kalkar.
*Kaynak:* 406, 720, 2529

### SATIR-7 SR-B Süreklilik ve kıyafet hâli tablosu
Sahne içinde kıyafet hâli (açık trençkot), çıkarılan şey (önlük) ve elde tutulan nesne (tabla, yarım simit) sürer — dinleyen için de. Bir nesne bırakılıyorsa bu metinde söylenir. Durum da sürer: ıslandı, kirlendi, balık pulu, manto çıkarıldı/asıldı — sonraki satırlarda figür de o hâlde; gerekirse ara hâl figürü üretilir (ıslak Peri) ve bu ara hâl figürü görsel listesine baştan girer. Kıyafet, saç, takı sahneden sahneye aynı kalır; bir önceki olay (pastaya oturma) görselde izini taşır. Konuk her sahnede o sahneye uygun hâldedir; gerekirse ikinci kıyafet üretilir (Vaka 1: önlüklü Kemal borç istemeye geldi). Sahneler arası doğal geçiş serbesttir (dışarıda kapalı, içeride açık; satır gerekmez), ama her sahnenin ve her karar/ara/kapanış karesinin kıyafet hâli görsel listesinde önceden yazılır (**kıyafet hâli tablosu**); karenin referansı o hâlden seçilir. Hatalı örnekler: trençkot açılınca figür kapalı; Kenan önlüğünü çıkarınca yine önlüklü; karar karelerinde unlu değil haki Cengo.
*Kaynak:* 6, 378, 409, 724, 2527, 2530, 1076

### SATIR-8 SR-C Kıyafet kartı (satır tarafı)
Her kıyafet önce tek bir ölçü resmiyle (kıyafet kartı) onaylanır; kıyafet istemde sözle yeniden tarif edilmez, kart referans verilir. İstemde: "Kıyafet: N. referanstaki kıyafet kartıyla birebir aynı (boy, kesim, renk)" + o satırların hâli ("trençkot AÇIK, kemer çözük"). (Kartın ayrıntısı ISTEM konusunda, 5. parça I.)
*Kaynak:* 6, 1220, 1076, 715

### SATIR-9 SR-D Resim metne bağlı: nesne satırda başlar, satırda biter
Nesne ya da hareket metnin onu **getirdiği** satırda başlar, **bıraktığı** satırda biter; nesne bırakıldığı satırda hâlâ görünür (kapı K10; satır–resim aracı bunu İŞ sayar). Geçmiş zamanla anlatılan eylem ("çektim") şimdiki pozu haklı çıkarmaz. İfade figürü **nesnesiz** üretilir; nesneli/hareketli poz ayrı anahtardır ve yalnız o satırlara bağlanır. İstemde: yalnız `## Satırlar`'ın HEPSİNDE metinde geçen nesne poza girer; birinde yoksa nesnesiz ifade + ayrı nesneli anahtar; başlıkta ifade ile nesne birleşmez ("korkmuş (telefonu gösteriyor)" yazılmaz). Temel figüre de "rahat dursun" diye mendil, makas, bez verilmez; `## Satırlar`'da geçmiyorsa eller boş. Bir kare **tek bir anı** gösterir: "aynı anda" iki ardışık eylem yazılmaz (uzatıyor + bölüyor); sonraki anı gösteren kare önceki satırda kullanılmaz. Hatalı örnekler: `gizem.korkmus` telefonu metinden önce uzatıyor; Rüstem hesap makinesini "bırakıyor" ama hep elinde; K40 (kaçış) "herkes Ferruh'a dönüyor" satırında; bir karede iki simit.
*Kaynak:* 6, 380, 1079, 1221, 1224, 3555, 1076

### SATIR-10 SR-E Bayrak kapıdır
`arac_satir_resim.js`'in her bayrağı (EYLEM, JEST, KONUŞAN, HİTAP) **istemler yazılmadan önce** kapanır. 13 Kasım 2026'dan beri kuralla kapanır (SR-M): araç her bayrağı OTO / İŞ / SOR diye ayırır; İŞ'i yazar kurala göre yalnız etiketle ve resimle çözer (onaylı söz değişmez); sahibine yalnız SOR (kuralın karar veremediği) ve yeni resim sayısı gider. Sahibinin "kalsın"ı `sablon/vakalar/vakaN_bayrak.md`'ye yazılır (`- kalsın: <satırın başı>`), bir daha sorulmaz. Komut: `node arac_satir_resim.js <dokum…> --vaka V<N> --karar ../sablon/vakalar/vaka<N>_bayrak.md`. İŞ'i çözme döngüsü: diyalogda yalnız etiket (`[ifade]`, `{kare}`, `{gi}`), gerekirse yeni poz/kare; veriye `arac_diyalog.js` yazar; sonra `node arac_soz_farki.js <diyalog>` "söz farkı 0" demeli; tur + araç yeniden koşar, İŞ sıfırlanana dek. Ders: 15 bayrak "küçük jest farkı" diye bırakılmıştı; esneme ve iki simit bunların içindeydi.
*Kaynak:* 6, 381, 1076, 715, 2817

### SATIR-11 SR-M Bayraklar kuralla kapanır, onaylı sözler değişmez
Sahibinin kararı (13 Kasım 2026): "en az karar bana gelsin; onayladığımız diyaloglar değişmesin, değişecekse resim üretilsin; sahneler saçma olmasın." Yalnız oyuncunun görmediği **etiketler** değişir (`[ifade]`, `{kare}`, `{gir/gi}`, `{kime}`); anlatı ve replik sözleri birebir kalır (araç etiketsiz metni eskisiyle karşılaştırır, fark 0). Sıra:
- **M1** Anlatı yalnız yer değiştirme/bakış/ses anlatıyorsa (giriyor, dönüyor, kapı çalınıyor, süzüyor) → kalır; figürün girip çıkması ve ifadesi taşır.
- **M2** Parantez yüz/bakış/ses jestiyse (göz kırparak, bakarak) → kalır; ifade taşır.
- **M3** Parantez yalnız hitap işaretiyse ("(Cengo'ya)") → kalır; `kime` taşır.
- **M4** Ekrandaki figürün adı nesneyi gösteriyorsa (`triko_telefon` + "yazarak") → kapanır.
- **M5** Elde nesne / el değiştirme → resimle: önce komşu satırdaki aynı anı gösteren kareye bağlanır (yeni resim yok); yoksa konuşanın nesneli pozu (tek kişi) ya da kare (birden çok kişi). Nesne metin onu bırakana dek elde kalır (SR-B): bırakma sözü yoksa o kişinin sahnedeki bütün satırları nesneli pozla (yüz satırlara uyacak kadar ayrı ifade). Nesne o sahnede başka resimde de çiftlenmez (arka planda ikinci tepsi yok).
- **M6** HİTAP/KONUŞAN: motor Peri'nin `kime`sini sahnedeyse sağa getirir (`yeni_arayuz.js`); kalan bayrakta `gir` eklenir ya da `kime` düzeltilir.
- **M7** Aynı kare birden çok yolda kullanılıyorsa her yolda aynı anı göstermeli; anlar farklıysa yola özel kare (`K99j`).
- **M8** → SATIR-12.
Örnek (V6): 29 bayrak; 12 HİTAP motorla, gerisi kuralla kapandı; sözlerde 0 fark. Yeni resim: `muzeyyen.tepsi`, `muzeyyen.tepsi_uzgun`, `cengo.utulu.borek`, `gizem.triko_tepsi`, `gizem.triko_tepsi_telefon`, `recep.supurge`, `jale.makbuz`, `jale.uzaniyor`, `K99j`, `K113` (ipucu: hırkaya giren kâğıt), `K114` (DEVIR'de "11 yeni resim"). K99 "askıdan" / "Jale'nin elinden" iki ayrı andı (M7).
*Kaynak:* 389, 1076, 2817

### SATIR-12 SR-M8 Hikâye donmadan önce satır–resim aracı (adım 5)
Sahibinin kararı (14 Kasım 2026; Vaka 7'den itibaren; Barbaros'a götürülen öneri kabul edildi). Hikâye donmadan önce (adım 5, görselsiz tur) bütün yollarda `--hepsi` ile tur koşar, araç bir kez çalışır: `node arac_satir_resim.js <dokum…> --vaka V<N>`. **İŞ** bayrakları yazara gider; sözle çözülecek olan (nesneyi bırakan cümle, netleşen hitap…) şimdi sözle çözülür. **SOR** bayrakları bu turda sahibine GİTMEZ — hikâye dondukça bir kısmı kendiliğinden kalkar; kalanlar adım 8'de bir kez sorulur. Hikâye donduktan sonra yalnız etiket ve resimle (SR-M). Aynı turda iki liste daha kapanır (14 Kasım 2026, V6 açılışı yayında bulununca): aracın **DURUŞ** ve **İLK GÖRME** bayrakları, ve turun `satir/adi_gecen_yok.txt`'si. V6'da bu liste "metin işi" diye resimlerden sonraya kaldı ve yayına çıktı; artık hikâye donmadan biri bile açık kalmaz. Üç kişiyi birden anan satır kare ister — o kare görsel listesine (adım 8) baştan girer.
*Kaynak:* 389, 714, 2817

### SATIR-13 SR-F İpucu taşıyan eylem her zaman görünür
Bir çıkarım bir harekete ya da görünüşe dayanıyorsa o hareket/görünüş o satırda ekranda olur. Örnek: "Kenan kocaman esniyor" → Peri: "Onda yatan biri öğlen böyle esnemez".
*Kaynak:* 6, 382

### SATIR-14 SR-H Anlatıcı da "nereden biliyoruz?" sınavından geçer
Anlatı (sahne notu) satırı yalnız o an görülebileni söyler (kural kitabı 4a). Hatalı örnek: "parayı sakladığı depoya doğru koşuyor" — para itirafta ortaya çıkıyor.
*Kaynak:* 6, 384, 2628

### SATIR-15 SR-I Yüz satıra uyar; bakışın yönü ve hedefi
Her replik ifadesini **anlamına göre** seçer: ifade satırın duygusuna göre seçilir, eldeki figürlere göre değil. Uygun ifade yoksa önce görsel (yeni ifade) üretilir, sonra replik yazılır; konuk figür listesi diyalogdan çıkar. Bir yüz bir resmin bütün satırlarına uymuyorsa (ör. güler yüz + suçlanma satırı) AYRI ifade istenir. Bakışın **yönü ve hedefi** ("süzerek", "ellerine bakıp") istemde yazılır: satır bir yere bakmayı söylüyorsa "gözleri aşağıda, kadrajın soluna, karşısındakinin ellerine" gibi. Kapı K9: "X'e bakıyor" → X ekranda ve bakanın pozu karşıya bakıyor. Hatalı örnekler: "Beni de suçlayacaktın" keyifli `gizem.kas`'la; Ayla Cengo'nun ellerine bakmıyor.
*Kaynak:* 6, 351, 385, 1222, 3554, 715, 1073

### SATIR-16 Dinleyenin yüzü de satıra uyar
Dinleyenin ifadesi de uyar: konuşmadığı satırda da hikâyeye uygun durur (tacı tutan Peri gibi). Konuşmayan dinleyenin yüzü değişecekse `{peri: ifade}` / `{cengo: ifade}` yazılır (önceki yüz kalmasın); her yeni olay/kişi girişinde bu işaret konur (Vaka 1: dinleyenin yüzü bir önceki satırdan kalmıştı — kızgın Peri). Kapı K8 (Vaka 6 ve sonrası): ekrandaki herkesin ifadesi o satırda yazılı olur (`[ifade]`, `gi`, `yuz`, `peri`, `cengo`).
*Kaynak:* 396, 404, 2523, 3553 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-17 SR-J Her ifade kardeşlerinden ayırt edilir
İstemde ifadeyi ötekilerden neyin ayırdığı yazılır: yeni ifadede "Bu ifadeyi <kardeş ifade>'den ayıran: …" satırı (yüz rengi, ağız, eller). Denetimde aynı kişinin ifadeleri yan yana konur, benzeyen kabul edilmez. Hatalı örnek: `ferruh.terli` ≈ `ferruh.alingan` → "yüzü bembeyaz" karşılıksız.
*Kaynak:* 6, 386, 1223, 715, 1076

### SATIR-18 SR-K Karar karesi SONUÇ'u gösterir
Karar karesi SONUÇ metninin asıl anını gösterir (bedeli yaşayan kişiler karede). Karar karesi SONUÇ'un anlatı satırlarının altında durur (kural 22b). Cengo'nun karar satırı ve söylenmeyen kanıt satırı (22c) Cengo ekrandayken söylenir; kararı soran kişi de seçim anında ekrandadır (SR-A). Hatalı örnek: K47 Cengo satırını (Kenan'ın simidi) gösteriyordu; SONUÇ'taki Ferruh ve telefon yoktu.
*Kaynak:* 6, 387, 1224, 1076

### SATIR-19 SR-L Mekân ve olay akışı mantıklı
(8 Kasım 2026.) Satırlar ve resimler olayın gerçek sırasıyla ilerler. Varışta önce giriş, sonra içerisi: karakter içeride gösterildiyse "içeri adım atıyor" ondan sonra gelmez. Bir şeyi ilk kez görmek o satırda olur; karakter önceki satırlarda onun önünde tepkisiz durmaz. Söylenen yer ("kapıda", "tezgâhın arkasında") figür ve arka planla çelişmez. Kare yalnız gösterdiği anın satırına bağlanır (SR-D'nin sahne düzeyi). Diyalog yazılırken her sahnenin başına kısa bir akış notu yazılır: `⚙ akış: kim nerede, kim ne zaman giriyor, ne ilk kez görülüyor` (bulanık replik taramasında "Akış: kim nerede, ne sırayla?" sorusu). Araç iki denetim yapar (14 Kasım 2026'da eklendi): **İLK GÖRME** (anlatı figürü sonra getiriyorsa) ve **DURUŞ** (duruş/uğraş anlatısı figürde yok). Hatalı örnekler: Peri afişin dibinde dururken Ferruh "kapıda" karşılıyor, sonra "Peri içeri adım atıyor… kendi afişi"; K37 (Ferruh afişi gösteriyor) afişten söz edilmeden önce. V6 açılışı (14 Kasım 2026, yayında sahibi buldu): Cengo ilk satırda Peri'nin yanında, anlatı onu ikinci satırda "kapının önünde" getiriyor; Peri "ayakları masada, dergi okuyor" derken ayakta, eli boş.
*Kaynak:* 6, 388, 699, 2946, 2628

### SATIR-20 Adı geçen herkes ekranda (iki yönlü)
ZORUNLU (16 Ekim 2026, sahibinin kararı): anlatı satırında adı geçen her kişi (ya da grup: nedimeler, annesi, misafirler) o satırda ekranda olmalı. Tek kişiyse figürü `{gir: x}` ile o satırda girer (yeri tanıtan `{mekan}` satırı bile olsa); ekranda aynı anda yalnız iki figür durabildiği için iki kişiden fazlası ya da grup → kare. Kapı K2 (Vaka 6 ve sonrası) iki yönlüdür: anlatıda adı ya da eş sözü geçen herkes ekranda; ekrandaki herkes o satırda anılıyor, konuşuyor ya da hitap ediliyor. Denetim üç adımda: diyalog yazılırken (adım 3: kişi sayan her anlatı satırına `gir` ya da kare), görsel listesinde (adım 8: kalabalık anlatan her satıra kare) ve turda (adım 11: `arac_yeni_tur.js … --hepsi` `satir/adi_gecen_yok.txt`'ye aday listesi yazar; grup adlarını ve akrabalık sözlerini — "annesi" — yakalamaz, onlara gözle bakılır). Vaka 7'den beri bu liste hikâye donmadan kapanır (SATIR-12). Köken: Vaka 2'de sahibi Onay 3'te buldu ("yazıda bahsedilen kişiler görünmüyor"): son prova açılışları, "Bütün nedimeler Defne'ye dönüyor", "Gelme anne!" → K33 (son prova, 4 açılış), K34 (herkes Defne'ye dönüyor, 7 satır), K35 (atölye kapısında kumaşçının adamı), `lal.kilif` sonradan üretildi; Gülsüm/Bülent/Defne/Tolga tanıtım satırında `gir` aldı.
*Kaynak:* 719, 2574, 3014, 3056, 3547 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-21 Yeni gelen: `{mekan}`, `{gir, gi}` ve yalnız gelen ekranda
Yer tanıtılırken konuk henüz görünmemeliyse anlatı satırında `{mekan}`; konuk ilk konuştuğu satırda `{gir: x, gi: ifade}` ile ilk yüzüyle girer (anlatı satırında "öfkeli giriyor" gibi). Böylece kızgın konuk sahneye "zaten kızgın" girmez (Vaka 1 dersi). Kapı K7 (Vaka 6 ve sonrası): yeni geleni anlatan satırda ekranda yalnız o (ve satırın andığı kişi) olur.
*Kaynak:* 402, 405, 2524, 3552 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-22 Sahneden ayrılan ve saklanan kişi
`{gizle: cengo}`: figür sahneden ayrıldı (koşup gitti); konuşunca geri gelir. Sahneden ayrılan figür kareye girmez. Saklanan kişi (masanın altı, kapı arkası) **ara kareyle** gösterilir: kapıda gelen, masanın altında saklanan aynı karede (Vaka 2 K20, Vaka 3 K53 — aynı açı, tekrar eden şaka). Anlatı + gelenin ilk repliği o karede; figür düzeninde `gizle` ile yapılırsa saklanan, adı geçtiği satırda ekranda olmaz (18 Ekim, sahibinin kararı).
*Kaynak:* 403, 721, 408, 2526

### SATIR-23 Mekân ve açı çeşitliliği
Uzun bir konuşma (≈15 satırdan fazla) tek arka planda geçmez; aynı mekânın ikinci/üçüncü açısı ya da durum değişikliği (kapı açıldı, manto askıda) üretilir. Hikâyede bir şey değiştiyse (kapı açıldı, manto asıldı, tabla devrildi) arka plan da değişir.
*Kaynak:* 407, 2525

### SATIR-24 Hareket sahneleri (kovalamaca) kareleri
Kovalamaca yazıyla değil görüntüyle anlatılır: her vuruşun kendi ara karesi var (3–4 kare). Kareler birbirinin devamıdır (aynı hız, aynı kargaşanın izleri). Sıralama metinle aynı: önde koşan önce düşer. Sahneden ayrılan figür karede yok (`{gizle: cengo}`) — Vaka 1'de karelerin sırası/kişisi yanlıştı.
*Kaynak:* 110, 408, 2526

### SATIR-25 Satır → görsel tablosu
Her sahne için bir **satır → görsel** tablosu yazılır ve denetlenir; metnin andığı her nesne için tabloda figür ya da kare bulunur. Tablo diyalogla birlikte biter.
*Kaynak:* 410, 2528, 2538

### SATIR-26 Diyaloğu satır satır yazmak (adım 3)
Diyalog yazılırken her satır için baştan yazılır: konuşan, ifade, `kime` (konuk varsa), dinleyenin yüzü değişiyorsa işareti, arka plan/açı, kare. Kontrol sorusu her satırda: "Ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu, metnin andığı nesne görünüyor mu?"
*Kaynak:* 2538

### SATIR-27 İstem yazarken: `## Satırlar` bölümü
`## Satırlar` **bütün vakalarda**, her figür ve karenin isteminde zorunludur (8 Kasım 2026, sahibinin kararı, 5. parça C0). Görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`, her yolun `satir/`'ını kopyala) → `node arac_satir_resim.js <dokum…> --vaka V<N>`. İstem dosyasında `## Kontrol`'den önce o resmin satırları konur (konuşan: metin; dinliyorsa işaretli). İstemin ifade ve poz satırları bu satırların HEPSİNE uyacak biçimde yazılır; bir satır uymazsa istem bölünür (SR-D). EYLEM bayraklı anlatı satırı (yiyor, uzatıyor, kesiyor…) kare ister ya da diyalogda o satıra uygun kare/figür bağlanır. JEST bayraklı replik ("(papyonunu düzelterek)", parantezli sahne yönü) konuşanın figürünün pozuna yazılır. Her satır şu soruyla okunur: *bu pozdaki her nesne ve hareket BU satırda metinde var mı; metindeki her kişi ve şey ekranda mı?* Codex bu bölümü istem metnine KATMAZ (yalnız `## İstem` gider); yerel Claude yazarken ve denetlerken okur. İstem yazılmadan önce her bayrak kapanır (SR-E, SATIR-10). (Not: 8 Kasım metnindeki "figür/kare bağlanır ya da sahibi 'kalsın' der; 'kısmen uyuyor' da sahibine gider" 13 Kasım'dan beri SR-M düzeniyle işler: sahibine yalnız SOR gider.)
*Kaynak:* 715, 1073, 1218

### SATIR-28 Satır–resim uyumu zorunlu: dört aşama
(Sahibi, 6 Kasım 2026.) Her metin, gösterildiği resimle uyumlu olmalı ve resim bunu bilerek üretilir. Araç: `kaynak/arac_satir_resim.js` (tur dökümünden her resmin göründüğü satırları ve riskli satırları basar). Aşamalar (kaynak "üç aşama" der — istem, denetim, gömme; 14 Kasım 2026'da SR-M8 hikâye donmadan önceki aşamayı ekledi, böylece dört): hikâye donmadan önce (SATIR-12), istem yazarken (SATIR-27), denetimde (SATIR-29), gömmeden sonra (SATIR-30).
*Kaynak:* 713, 1071, 1072

### SATIR-29 Resim denetiminde satırlarla okuma
Denetimde resim istemle birlikte o satırlarla da okunur: yüz, el, jest, konuşanın kim olduğu (dinleyen parmağıyla işaret ediyorsa konuşan o sanılır — Vaka 3, Gizem konuşurken Peri'nin işaret eden figürü).
*Kaynak:* 716, 1074

### SATIR-30 Gömmeden sonra
Bütün yollar `--hepsi` ile oynanır, araç yeniden çalışır; her bayrak ve her satırın ekranı metniyle okunur, sonuç sahibine tablo hâlinde verilir (satır · metin · uyuyor/uymuyor · neden).
*Kaynak:* 717, 1075

### SATIR-31 Görsel–metin uyum denetimi (adım 11, Onay 3'ten önce)
Bulanık replik taramasının görsel kardeşi. Bütün görseller gömülünce görselli tur **bütün yollarda** koşulur (`arac_yeni_tur.js`) ve her ekran altındaki metinle yan yana, her sahne satır satır okunur. Bulunanlar tek listede toplanır (ayrıntı: `7_uretim_sureci.md` → Hızlandırma kuralları). Sorular:
- **Kim var?** Metindeki/kare satırındaki herkes ekranda mı; ekranda kaç figür var; fazladan ya da iki kez görünen var mı (Vaka 1: iki Cengo aynı ekranda)? (Adı geçen: SATIR-20.)
- **Kime konuşuyor?** Konuşan kim, karşısında kim; hitap ettiği kişi mi duruyor? (SATIR-3, SATIR-6.)
- **Yüz satıra uyuyor mu?** Konuşanın ve dinleyenin ifadesi bu satırın duygusu mu, önceki satırdan mı kalmış? (SATIR-15, SATIR-16.)
- **Anılan şey görünüyor mu?** Metindeki nesne, hareket, kıyafet (krema, örtü, kravat gevşek/çözük, gözlük elde).
- **Süreklilik:** kıyafet, saç, takı aynı mı; önceki olay iz bırakıyor mu? (SATIR-7.)
- **Yer ve zaman:** SATIR-32.
- **Görünürlük:** SATIR-33.
- **Nurcan** (sızıntı) da bu okumada aranır.
*Kaynak:* 718, 719, 720, 722, 723, 724, 725, 726, 2570, 2522, 2546, 2547, 2548, 2549, 2550, 2552

### SATIR-32 Yer ve zaman
Arka plan, açı, yer etiketi (ör. ara sokak / iskele) ve ışık (gündüz/akşam) metinle ve hikâyedeki durumla aynıdır (kapı açık mı, kim ayrıldı).
*Kaynak:* 725, 2550, 2552

### SATIR-33 Görünürlük: el, jest, nesne kenardan taşmaz
El, jest, nesne ekran kenarından taşıp kaybolmaz (Vaka 2: Tolga "Ben mi canım?").
*Kaynak:* 726

### SATIR-34 İfade sözlüğü (Peri ve Cengo)
**Peri:** `normal` — sakin, kendinden emin — varsayılan; `kas` — kuşkulu, alaycı — soru, iğne; `sinirli` — öfkeli, karşısındakine — biriyle çatışırken; `aci` — içe dönük öfke, kırgın — kendine ya da orada olmayana kızarken; `utanmis` — mahcup — rezil olunca; `sasirmis` — irkilme — beklenmedik ses ya da kişi; `merakli` — şaşkın merak — "bir daha söyle?"; `nesneli` — elinde bir nesneyle (kâğıt, çay, taç…) — metin o nesneyi anarken.
**Cengo:** `normal` — hınzır yarım gülümseme — varsayılan; `kas` — kuşkulu, alaycı — soru, iğne; `gulen` — açık gülüş — espri, zafer; `yumusak` — gülmeyen, sıcak — "elektrik" anları; `sinirli` — ters — kızdığında *(henüz yok)*; `nesneli / hareketli` — vakaya özel (buyrun gibi) — metin gerektirdiğinde.
*Kaynak:* 354, 355, 356, 357, 358, 359, 360, 361, 364, 365, 366, 367, 368, 369

### SATIR-35 Yalnız satırların istediği ifade ve poz üretilir
Kıyafet başına sayı (sahibinin kararı, 8 Kasım 2026 — 8 Ekim kararının yerine): yalnız satırların istediği ifade ve poz üretilir. Bir ifadenin vakada hiçbir satırı yoksa (`arac_satir_resim.js` → "Resim → satırlar" listesinde boşsa) üretilmez. Eski "Peri'nin her kıyafetinde yedi ifadenin hepsi" kuralı kalktı (Vaka 3'te altı resim hiçbir satırda kullanılmadan üretildi; biri filtreye takılıp sahibine web'de iş çıkardı).
- **Peri:** tavan yok; satırların istediği her ifade + vakanın gerektirdiği her nesneli ve hareketli poz. Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir (o da satırlardan çıkar).
- **Cengo:** satırların istediği ifadeler (genelde normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası.
- Konuklar, arka planlar, ara kareler, detaylar görsel listesinde ayrıca yer alır. (Konuk ifade sayısı ve Cengo'nun "4 ifade" satırı: çelişki dosyası.)
*Kaynak:* 371, 372, 373, 645

### SATIR-36 Cengo satırı etiketli replik olarak yazılır
Diyalogda Cengo satırı **etiketli** yazılır: `**CENGO [ifade]:** metin {yuz: peri.x}` → büroda Cengo'nun repliği (16 Kasım 2026). Etiketsiz `**CENGO:**` eski düzendir (anlatı satırı; V1–V5 yeniden geçirilene dek).
*Kaynak:* 633

### SATIR-37 Kapı K1: ekran metinden gelir
Kapı (`kaynak/arac_kapi.js`, 14 Kasım 2026, sahibinin kararı; Vaka 6 ve sonrası): her satırda `{ekran: …}` yazılı olur (kare/mekân satırı hariç); önceki satırdan hiçbir şey taşınmaz.
*Kaynak:* 3546 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-38 Kapı K3: yönelen pozun hedefi karşıda
Poz bir kişiye yöneliyorsa (sarılma, uzanma, dokunma) o kişi karşıda durur. (Kapı, Vaka 6 ve sonrası.)
*Kaynak:* 3548 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-39 Kapı K4: uzak yer sözü kare ister
"Eşikte", "kapıda", "uzakta" gibi yer sözü kare ister. (Kapı, Vaka 6 ve sonrası.)
*Kaynak:* 3549 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-40 Kapı K11: figürler üst üste binmez
İki figür üst üste binmez (ekranda ölçülür). (Kapı, Vaka 6 ve sonrası.)
*Kaynak:* 3556 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-41 Kapı K12: konuşur gibi poz yalnız konuşanda
Konuşur gibi poz yalnız konuşma satırında, konuşanda kullanılır. (Kapı, Vaka 6 ve sonrası.)
*Kaynak:* 3557 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### SATIR-42 Kapı K13: metnin söylediği görünüş figürde
Metnin söylediği görünüş (terli, ıslak, yaralı…) o figürde görünür; poz kaydında yazılı olur. (Kapı, Vaka 6 ve sonrası.)
*Kaynak:* 3558 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)
