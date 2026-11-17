# SUREC — üretim süreci kuralları (birleştirilmiş)

### SUREC-1 Önce konuş, sonra yap
Yeni bir kural ya da istek gelince önce anladığını ve sorularını söyle, ayrıntıda anlaşın. Sahibi "yap/yaz" demeden belge, kod ya da
veri değiştirilmez; okumak serbest (8 Kasım 2026, sahibinin isteği). Taslaktaki hiçbir şey Barbaros "yaz" demeden şablona, kanona,
koda ya da veriye işlenmez (TASLAK_tekrar_onleme §9). Tarama bulgusu da böyledir: bulgu sahibine kısa liste olarak verilir, metin
değiştirmek bu kurala tabidir.
*Kaynak:* 7, 936, 2783

### SUREC-2 Kural değişikliği yolu
Bütün vakalar kural kitabına (`sablon/2_kural_kitabi.md`) uyar; kural değişecekse önce orada (şablonda) değişir, sahibinin onayıyla;
sonra etkilenen vakalar yeniden denetlenir. Kural kitabının kaynağı: Ton, Sezon, Çerçeve belgeleri ve sahibinin kararları (8 Ekim
2026'da toplandı); görsel kuralları 5. parçada, üretim kuralları 7. parçada. Vaka yazımı sırasında yeni kural gerekirse şablona
sahibinin onayıyla eklenir (12 Kasım 2026 planı).
*Kaynak:* 171, 769, 2834

### SUREC-3 Sahibinin söylediği kural yazıya geçer
Sahibi bir kural söylerse (ör. "Peri'nin ayakkabısı hep kırmızı") hafızaya değil dosyaya yazılır — resim üretiminde `uretim/CLAUDE.md`'ye.
Sahibi resimlere kendisi de bakar ve Claude'un kaçırdıklarını yakalar (Vaka 3: G40–G42 ve G56'daki tişört izi, G63'teki bacaklar);
söylediği şey kural hâline getirilir.
*Kaynak:* 1034, 1484

### SUREC-4 Rol ayrımı: kim neye karar verir
- **Barbaros (sahibi) her şeyi yapabilir**; ortağın yetkisi onunkini daraltmaz (11 Kasım 2026).
- **Ortak (Oğuz Bey) kendisi karar verir (işletme):** var olan kurallara göre vaka üretmek, hikâyeye yeni ayrıntı eklemek (kanon), metin
  düzeltmek, resim üretmek, test/araç/derleme çalıştırmak, `main`'e göndermek. Belgelerdeki "sahibine sor" bu işler için ortağa sorulur.
- **Barbaros'a danışılır, ortak tek başına onaylamaz:** yeni kural yazmak ya da var olanı değiştirmek (`CLAUDE.md`, `sablon/`,
  sözleşmeler), kod ve altyapı (motor, arayüz, araçlar, derleme), yayın, satış ve platform kararları (`RAF_KARARLARI.md`). Böyle bir iş
  çıkarsa Claude yapmaz; ne istendiğini kısaca yazar, ortak Barbaros'a iletir. Codex/ChatGPT hesabı Barbaros'undur. Bu liste 14 Kasım'da
  da değişmedi.
- **14 Kasım 2026'dan beri bütün üretim (vaka metni + resim) Oğuz Bey'de:** Barbaros vaka üretmez — ama Barbaros da resim üretimini yürütebilir (aşağıda "üretimin yeri"
  ve "sahibi") (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 41). Codex ve web ChatGPT için Barbaros'un
  hesabı kullanılır (şimdilik; ileride değişebilir). Oğuz Bey üretimi yürütür: yerel Claude'a `vaka N resimlerini üret` der, takılınca
  sorulana cevap verir, Oğuz Bey'in yürüttüğü oturumda resim onayında son karar onundur, web'de üretilecekleri Barbaros'un ChatGPT hesabıyla üretir.
- **Resim üretiminin yeri (Barbaros, 14 Kasım 2026 gece — öncekinin yerine):** döngü/Codex Oğuz Bey'in ya da Barbaros'un bilgisayarında
  yapılır; ikisi aynı numarayı aynı anda üretmez, hangisinin ürettiği `DURUM.md` en üstte yazılır.
- **"Sahibi" (resim üretiminde):** o oturumda üretimi yürüten kişi (Oğuz Bey ya da Barbaros); resim onayında son söz ondadır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 41). Temel onayı, resim onayı/reddi, el onayı,
  web listesi (filtreye takılanlar), tarz soruları ona gider; yeni kural ya da kural değişikliği Barbaros'a sorulur (`kaynak/DEVIR.md` en üst).
- **Yerel Claude:** denetler, onaylar ya da düzeltme notuyla reddeder, oyuna gömer, GitHub'a gönderir; kuralları `uretim/CLAUDE.md`.
- **Bulut Claude:** bilgisayar kapalıyken istem yazar, onaylıları inceler, oyunu düzeltir; resim üretemez.
*Kaynak:* 2907, 2908, 2909, 2910, 1266, 2798, 2795, 2796, 2797, 1265, 1035, 1036, 1268, 1269

### SUREC-5 Araç istisnası (ortak)
Ortak yeni bir vakayı **var olan** araç ve testlere ekleyebilir (yol listeleri, vaka adları, önceki vakanın kalıbıyla) — Barbaros'un
genel izni, 11 Kasım 2026. Böyle bir commit'in mesajında "araç: Vaka N eklendi" yazar ki Barbaros görsün. Aracın nasıl çalıştığını
değiştirmek, yeni araç yazmak, motor, arayüz ve derleme yine Barbaros'ta.
*Kaynak:* 2895, 2911

### SUREC-6 Ortak bilgisayara kurulum yalnız Barbaros'la
Barbaros Oğuz Bey'in bilgisayarının başına geçip "resim üretim programlarını kurdurt" dediğinde `uretim/KURULUM_ORTAK.md` ona adım adım
uygulatılır. Kurulumu yalnız Barbaros yapar; Oğuz Bey'in oturumlarında bu konu açılmaz (Barbaros, 13 Kasım 2026).
*Kaynak:* 2805

### SUREC-7 Git: yalnız `main`
Sahibinin duran talimatı: değişiklik doğrudan `main`'e commit edilip push edilir, yeni dal açılmaz; yan dallara asla push edilmez
(17 Ekim 2026). Harness başka dal adı verse de sormadan `git push origin HEAD:main`. Oturum sonu denetimi "dalda gönderilmemiş commit
var" derse yan dal push EDİLMEZ; yerelde `git fetch origin main && git checkout -B main origin/main` ile `main`'e geçilir. Her üretim
adımının sonunda değişiklikler `main`'e gönderilir. Resim üretiminde: bitirirken ve döngüde ara ara `DURUM.md` güncellenir → commit →
`git push origin HEAD:main`. `red/` klasörü GitHub'a gitmez (.gitignore). Vaka 2 başlangıç belgesindeki "oturumun dalına da" sözü
kalktı: yalnız `main` (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 38).
*Kaynak:* 9, 692, 1033, 1151, 2555

### SUREC-8 İki kişi aynı depoda: `git pull`
Her oturumun başında `git pull`, göndermeden önce yine `git pull`. Resim oturumunda başlarken `git pull`, sonra `uretim/v<N>/DURUM.md`
okunur. Aynı anda aynı vakaya iki kişi dokunmaz. Vaka 5'ten beri bütün vakaların verisi aynı `yeni/game_data.json`'da; vaka başına ayrı
veri/künye/görsel dosyası konuşuldu, Barbaros: şimdilik ayrılmayacak.
*Kaynak:* 1032, 2904, 2913

### SUREC-9 Her değişiklikten / commit'ten önce denetim
Her değişiklikten sonra: doğrulayıcı, iki derleme (eski `index.html` md5'i aynı kalmalı), testler, gerekiyorsa tur. Resim gömme
(`göm` komutu) adım 5: kök CLAUDE.md'deki "Her commit'ten önce" komutları; hepsi geçerse commit → push.
*Kaynak:* 2555, 1147

### SUREC-10 Adımlar sırayla, atlanmaz
Bir vaka formdan oynanır hâle 7. parçadaki 14 adımla gelir; adım atlanmaz. Otomatik denetimlerden geçmeyen vaka bir sonraki adıma geçmez.
*Kaynak:* 674, 733

### SUREC-11 Adım 1–2: Form ve Onay 1
Her vaka formu (6. parça) doldurarak başlar; diyalog, veri ve görsel formdan türetilir. **Form onaylanmadan diyalog yazılmaz, görsel
üretilmez.** Adım 1: form Claude'ca doldurulur, ölçüt formun kontrol listesinin tamam olması (o listede: "kural kitabıyla çelişen bir şey
yok"). Formda 6. parçanın bütün başlıkları + **künye tablosu** + yeni yan karakterlerin görünüş önerisi (benzerlerinden ayrışsın)
bulunur; görünüş formla birlikte Onay 1'de onaylanır, görsel aşamasında ayrıca sorulmaz. Adım 2 — **Onay 1:** form; sahibi "onay" der.
*Kaynak:* 567, 673, 676, 677, 2537

### SUREC-12 Adım 3: Diyalog
Diyalog `vakalar/vakaN_diyalog.md`'ye Claude'ca yazılır: her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu). Satır–resim
sözleşmesi (5. parça C0): her satırın gerçek muhatabı `kime`/`gir` ile (SR-A, konuk–konuk SR-G); ifade satırın duygusundan seçilir,
eldeki yüzlerden değil (SR-I); sahne notu yalnız o an görüleni söyler (SR-H). Ölçüt: otomatik denetimden geçer.
*Kaynak:* 678

### SUREC-13 Adım 4: Veri ve künye
Veri Claude'ca hazırlanır: yapı (ipuçları, olgular, Kim yaptı?) elle; sahne ve karar metni `node arac_diyalog.js <dosya> VN` ile
diyalogdan; **künye** (`yeni/kisiler.json`) bu adımda yazılır, sonradan değil (Vaka 1'de künye boş kalmıştı). Ölçüt: otomatik denetimden
geçer; `node arac_kunye_denetim.js yeni` temiz.
*Kaynak:* 679, 2534, 2539

### SUREC-14 Adım 5: Görselsiz oyun turu ve üç tarama
Yeni görsellerin yerinde yer tutucu (eski görsel ya da yazılı gri kutu); bütün yollar otomatik oynanır. Ardından **bulanık replik
taraması**, **sızıntı taraması** ve **erken satır–resim taraması** (SR-M8). Ölçüt: hata yok, üç tarama bitti, düzeltmeler veride.
*Kaynak:* 680

### SUREC-15 Bulanık replik taraması
Adım 5'in sonunda, Onay 2'den ÖNCE: diyalog baştan sona oyuncunun gördüğü sırayla okunur (`arac_okuma.js` ya da görselsiz turun
ekranları) ve her replik "kime, neyi, nereden biliyor, espri, sıra, niyet" sorularıyla sınanır (soruların ayrıntısı 7. parçada). Düzeltme
yalnız **netleştirme**dir; hikâyeye yeni olgu eklenmez, eklenecekse önce sahibine sorulur. Bulunanlar ve yapılanlar sahibine **tek liste**
hâlinde verilir; sahibi Onay 2'ye temizlenmiş metinle başlar ve notlarını sahne sahne, **toplu** verir. Ölçü (neden): Vaka 2'de Onay 2 =
1 sa 56 dk, 22 not.
*Kaynak:* 697, 711, 2568

### SUREC-16 Adım 6: Onay 2 — görselsiz test
Sahibi oynar. Okuyan, vakaya başlamadan önce `3_kanon_kaydi.md`'yi okur (büro nerede, kim kimdir, dönen figürler; kural G, 12 Kasım 2026;
ortağın önerisindeki "yarım sayfalık kanon özeti" yeni belge olarak yazılmadı, iki belge zamanla kayacağı için var olan kanon kaydı
kullanılır). Bakılan: hikâye anlaşılıyor mu, bulmaca çözülüyor mu, Kim yaptı? keyifli mi, espriler, süre. Girişte de sahibi Onay 2'de
bakar: suçlu dolaylı yoldan ele veriliyor mu, çekicilik anı ve espri tutuyor mu, giriş ilk gidilecek yer belli olarak bitiyor mu. Ölçüt:
notlar tek listede.
Genel olarak elle (makinenin yapamadığı) bakılanlar: espri tutuyor mu, çekicilik seviyesi, görsel kalitesi (bu liste yalnız Onay 2'ye
bağlı değil; görsel kalitesine görselsiz testte bakılamaz).
Yürüyüş (Vaka 4, 10 Kasım 2026): sahibi telefondan ekran görüntüsüyle not gönderir; satır üstünde konuşulur ("önceki/sonraki 10 satırı yaz"
isteyebilir), öneri verilir, sahibinin seçtiği hâl not listesine yazılır; "yayına koy / güncelle" deyince hepsi birlikte işlenir. (Vaka 4
kaydı: giriş bitti, 13 not işli; sahibi girişi yeniden inceleyecek — kural 5c Vaka 4'e henüz uygulanmadı, sahibinin kararı; sıradaki
konuşma sahnesi ve ipuçları.)
*Kaynak:* 681, 763, 1023, 1028, 2925

### SUREC-17 Adım 7: Hikâye donar
Hikâye düzeltmeleri değişiklik kuralına (SUREC-28) göre yapılır ve görselsiz test sahibi "tamam" diyene kadar tekrarlanır (Claude +
sahibi). Sonunda **hikâye donar**.
*Kaynak:* 682

### SUREC-18 Görseller hikâye donduktan sonra; liste formdan
Görseller hikâye onaylandıktan (7. adımda dondu) **sonra** üretilir, önce değil. Görsel listesi vaka formundan (§16) çıkar: konuklar,
arka planlar, ara kareler, detaylar.
*Kaynak:* 341, 690, 647

### SUREC-19 Adım 8: Görsel listesi ve istemler
Görsel listesi ve promptlar **tek seferde ve eksiksiz** verilir: figürler (her ifade), konuk ikinci hâlleri, ara kareler (kovalamacanın
her vuruşu), ek açılar, durum hâlleri (ıslak/kirli), nesneli pozlar. Her prompt: kalıp (5. parça D) + oran satırı + numaralı referans
dosyaları hazır. Liste **iş sayfası olarak yayımlanır** (SUREC-20). Listeye **kart afişi** de girer (G; prompt `sablon/kart_sayfa/uret.py`,
ayrı iş sayfası). İstemlerden ÖNCE: **kıyafet hâli tablosu** (sahne ve her karar/ara/kapanış karesi için, SR-B), **ifade/nesne ayrımı**
(SR-D), `arac_satir_resim.js` bayraklarının **hepsi kapalı** (SR-E). İlk figürden önce **kıyafet kartları** tek sayfada sahibine
(5. parça I, SR-C). Ölçüt: bayrak kalmadı, kıyafet kartları onaylı.
*Kaynak:* 683, 2544

### SUREC-20 Görsel iş sayfası
11 Ekim 2026, sahibinin kararı (zorunlu): promptlar sahibine düz metin ya da md dosyası olarak değil, claude.ai'da yayımlanmış tek bir
**iş sayfası** (Artifact) olarak verilir. Vaka 2'nin sayfası: https://claude.ai/artifact/DhL2uDY7LHzMLqo8FQ5fXQ — sahibinin ölçüsü: "beni
çok hızlandırdı; sonraki vakalar aynı şekilde devam etmeli" (Vaka 2: 59 görsel). Her vakada **aynı biçimde** üretilir. Vazgeçilmez
özellikler:
- Görseller **sohbet sırasıyla** gruplu (temel görsel önce, türevleri arkasından; tek görsellik konuk/mekân "Yeni sohbet · Ad"; kareler en
  sonda, her biri ayrı sohbet).
- Her kartta numara (G<n>), ad, oyundaki anahtar, **tam prompt metni** (yer tutucu yok, "[ortak stil satırı]" gibi kısaltma yok) ve
  **Kopyala** düğmesi.
- Referanslar kartın içinde **numaralı**: dosya referansı **indir** düğmesiyle, önceki çıktı referansı "G<n> çıktısı (ne için)" diye.
- **Yapıldı** işareti (tarayıcıda kalır) — sahibi nerede kaldığını görür.
- Kartta **bakılacaklar** satırı (o görselde en sık bozulan şey).
Üretim: `sablon/vakalar/vakaN_sayfa/` = `uret.py` (veriyi `vakaN_gorsel.md`'den tam metinli üretir → `veri.js`) + `sablon.html`. Yeni vakada
önceki vakanın (Vaka 2'nin) klasörü kopyalanır, `uret.py`'deki görsel listesi ve `sira` değiştirilir; `sablon.html` aynen kalır. Sayfa
adım 8'in **çıktısıdır**: `vakaN_gorsel.md` biter bitmez üretilir, yayımlanır, bağlantısı sahibine ve `DEVIR.md`'ye yazılır. Sahibi
sohbetleri **sayfadaki sırayla** yürütür; süre tablosu, `DEVIR.md` ve belgelerdeki sohbet bölümlemesi sayfayla aynı tutulur (Vaka 2'de
"7 = G35–G45" diyen belge sayfayla ayrışmıştı). Sohbet sırası değişirse önce sayfa, sonra belgeler. Ayrıntı: `5_gorsel_sistemi.md` D-6.
**Codex düzeninde (Vaka 4'ten beri) bu madde yalnız web'de üretilecek resimler için geçerlidir**; öbür resimleri Codex döngüsü üretir
(SUREC-32), sohbet sırası ve sayfa onlar için yok. 7. parçanın adım 8–9'u ve D-6 buna göre yazılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 416, 417, 418, 419, 420, 421, 731, 2571

### SUREC-21 Adım 9–10: Üretim ve toplu işleme
Adım 9: görseller üretilir (sahibi) ve **toplu gönderilir**. Adım 10: kontrol, kesim, yerleştirme (5. parça, kontrol listesi) Claude'ca,
**toplu işlenir**; ölçüt her görselin gömülü olması. Görseller sohbet sohbet gelir, paket hâlinde işlenir, sahibine oyundaki son hâli tek
seferde gösterilir. Codex düzeninde adım 9'u döngü yapar (SUREC-32); sohbet sohbet üretim yalnız web'deki resimler için kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 684, 685, 2569

### SUREC-22 Temel görsel önce, türevler onaydan sonra
Karakter temelleri (Peri, Cengo, yan karakterler) ve mekân temelleri ilk turda onaylanır; her temel reddi bütün zinciri bir tur geciktirir.
Her sohbette sahibi önce temel görseli (G1, G14, G19…; mekânda G35, G40, G43 — Vaka 2 numaraları) **tek** gönderir; Claude kontrol
listesinden geçirip "doğru, devam" ya da düzeltme promptu verir; türevler onaydan sonra üretilir. Neden: Vaka 2'de bunu yapmayan Sohbet 1
(G8'deki çorap bandı G9–G13'e yayıldı) 64 dk sürdü, yapan sohbetler görsel başına 3–5 dk; Vaka 3'te G5 iki kez reddedildi ve beş resmi
(G33, G34, G35, G54, G57) bekletti. Sahibi görselleri sohbete **doğrudan yapıştırır**, numarayı Claude verir (dosya adı gerekmez); sahibi
"Sohbet N'e başlıyorum" / "bitti" der, saatler süre tablosuna yazılır. Sahibi "üret" dediğinde hiçbir resim (temel) hazır değilse bu
söylenir ve önce "kontrol et" istenir. Vaka 2'nin bütün görsel dersleri (kıyafet sabiti kayması, külotlu çorap, sayı, şehir, marka izi,
kalabalıkta kişi düşmesi, kim kimi görüyor, red) `5_gorsel_sistemi.md` D (bilinen hatalar tablosu), E (kontrol listesi 10–12) ve F'de
(kesim profilleri, hale, rötuş sınırı); prompt yazarken D tablosundaki önlemler promptlara baştan konur. Temel önce kuralı Codex düzeninde de
sürer (DENETIM-41); sohbet/yapıştırma ayrıntısı yalnız web'deki resimler için kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 712, 1356, 1488, 2572

### SUREC-23 Gizem referans seti
Vaka 3'te Gizem'in referans seti yok (17 Ekim): önce temel figür tek başına, onaydan sonra ifadeler. Vaka 3 bitince sahibiyle karar
verilir: küçük set (8–10) ya da tam set (25, Peri/Cengo gibi). Vaka süresine girmez.
*Kaynak:* 2567

### SUREC-24 Adım 11: Görselli oyun turu
Bütün yollar otomatik oynanır; ayrıca her sahne satır satır: konuşan/karşısındaki doğru mu, iki aynı figür var mı, dinleyenin yüzü uygun
mu, saç kenarı temiz mi; satır–resim sözleşmesinin (SR-A…L) hepsi. Ölçüt: hata yok. Bulunanlar sahibine **tek liste** hâlinde, ekran
görüntüsüyle verilir; düzeltilebilenleri (yerleşim, boy, takma, kesim) önce Claude düzeltir, yeniden üretim gerektirenler için prompt
verir. Sahibi Onay 3'e temizlenmiş turla başlar.
*Kaynak:* 686, 729

### SUREC-25 Adım 12–13: Onay 3 ve görsel düzeltmeleri
Onay 3 — görselli test: sahibi oynar, **yalnız görsellere** bakılır (metinle uyum, ifade, çekicilik); notlar tek listede. Görselli testte
hikâye değişmez; değişecekse forma dönülür ve etkilenen görseller listelenir. Adım 13: görsel düzeltmeleri (Claude + sahibi).
*Kaynak:* 687, 688, 691

### SUREC-26 Adım 14: Vaka donar
Donmadan önce **sızıntı taraması** bir kez daha (SUREC-27); ölçüt tarama temiz. Şablonda eksik çıktıysa şablon düzeltilir (Claude +
sahibi). Bitişte ayrıca: bütün yollar `--hepsi`, tablet, 19 boy, kart afişi, masa kartı, künye portreleri.
*Kaynak:* 689, 2632

### SUREC-27 Sızıntı taraması
22 Ekim 2026, sahibinin kararı — her vakadan sonra (adım 5'te ve adım 14'ün ön koşulu olarak): `cd kaynak && node build_html.js yeni &&
node arac_sizinti_tur.js VN [tur]` (ör. `V6 40`). İki parça: (1) araç oyunu farklı yollardan oynar, her ekranda oyuncunun o an bilmediği
olgunun metni / kısa adı çıkıyor mu bakar — bulursa çıkış 1 (= sızıntı); (2) `kaynak/YENI_UI/sizinti_okuma.txt` ELLE okunur (Nurcan):
"Dosya çözüldü", `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız her yolda oynayan sahnelerin (yüzleşmeler + kovalamaca
itirafı) söylediğini mi anıyor? Bir ipucunun bilgisi geçiyorsa sızıntıdır (22 Ekim'de 9 tane böyle bulundu: "kodu, fişi", "Gizem'in
fotoğrafı", "örtüyü"…). Bulgu sahibine kısa liste olarak verilir; düzeltme tek tek, önce/sonra gösterilerek yapılır (SUREC-1).
*Kaynak:* 694, 2783

### SUREC-28 Değişiklik kuralı: doğru yerden başla
Bir şey beğenilmezse değişiklik doğru yerden başlar:
| Değişen | Nereden başlar | Sonra |
|---|---|---|
| Bir replik, bir ifade | diyalog | veri → denetim |
| Bir görsel | görsel | kontrol listesi → yerleştirme |
| Bir olay, şüpheli, ipucu, karar | **form** (Onay 1'e döner) | diyalog → veri → denetim → etkilenen görseller |
| Bir kural | **şablon** (sahibinin onayı) | etkilenen vakalar yeniden denetlenir (SUREC-2) |
Hikâye değişecekse önce form değişir; veri ya da görsel formu değiştirmeden hikâyeyi değiştiremez. Sahibinin oyun testi notları önce bu
tabloya göre sınıflanır, sonra uygulanır.
*Kaynak:* 567, 764, 766, 767, 768, 769, 770, 771

### SUREC-29 Değişiklik nereye yazılır (veri yolu)
Replik, sahne notu, karar metni → `sablon/vakalar/vakaN_diyalog.md`, sonra `cd kaynak && node arac_diyalog.js ../sablon/vakalar/vakaN_diyalog.md VN`.
Yapı (olgu metni `facts`, ipucu kartı `clues[].text/meta`, çıkarım başlığı, `kim_yapti`, karar parası/bağ, `anahtarlar`) ve künye
(`yeni/kisiler.json`) diyalogdan üretilmez: `yeni/game_data.json`'da doğrudan değişir (node ile oku-değiştir, `arac_json_yaz.js` ile yaz).
Vaka 4'ün ilk iskeleti geçici bir betikle kuruldu, depoda yok — yeniden kurmak gerekmez, veri artık tek kaynak. Hikâye değişirse aynı
değişiklik `vakaN_form.md`'ye de işlenir (örnek, Vaka 4: "yüz lira" diyalogda, olguda, ipucu kartında, itirafta, hikâyede ve formun fiyat
tablosunda değişti).
*Kaynak:* 2885, 2926

### SUREC-30 Süre ölçümü
- Her vakanın süresi ölçülür: başlangıç ve her adımın bitişi vakanın başlangıç belgesindeki tabloya yazılır (örnek: `vakalar/vaka2_baslangic.md` §1).
- Başlangıç = sahibinin "Vaka N'e başla" dediği an (Vaka 4: 10 Kasım 2026, 12:49 İstanbul).
- Saat yalnız saati yürütenin sözüyle işler ya da durur — Vaka 3–4'te sahibinin, Vaka 5'ten beri ortağın ("zamanı durdur" / "tekrar
  başlat"; 17 Ekim, sahibinin isteği). Aralar ara tablosuna yazılır; aralar toplama girmez, aktif süre = toplam − aralar. Yazılan saat o
  sözün anıdır, ekran görüntüsünden tahmin edilmez (18 Eki: "başlat" dendi ama çalışılamadı → aynı anda yeni ara açıldı). Vaka 4'ten beri
  saat sonuna kadar işletilir.
- Vaka 4'ten beri her adımın satırına iki süre: **sahibi/ortak** (bilfiil çalıştığı süre: onaylar, oynama, web'de resim üretimi, okuma)
  ve **makine** (sahibi beklemeden Claude/Codex'in çalıştığı süre: yazım, turlar, Codex üretimi, denetim). Kesin ayrılamayan yerde tahmin
  yazılır ve "~" konur.
- Resim aşamasında ayrıca: resim sayısı (liste), Codex çağrısı, ret, filtre engeli, web'de üretilen; resim başına ortalama Codex süresi
  (1 kol ve 2 kol ayrı, bekleme dahil). Kaynak: `uretim/vN/uretim_kaydi.md` + döngü logu.
- Saat kabukta düz `date` ile okunur (TZ verme). Neden: 12 Kasım'daki V6 saatleri UTC yazılmıştı (Git Bash `TZ=Europe/Istanbul`'u
  tanımıyor), hepsi +3 saat düzeltildi; V5 kayıtları doğru.
*Kaynak:* 693, 2584, 2633, 2636, 2637, 2638, 2639, 2640, 2671, 2698, 2745, 2823

### SUREC-31 Kapsam dışı bırakılanlar (hızlandırma)
Sahibinin kararı: görsel sayısı azaltılmaz; ifade ızgarası (bir istekte birkaç ifade) kullanılmaz, çözünürlük düşüyor; ücretli üretim (API)
yok (şimdilik; ChatGPT/Grok sohbetinde elle üretim); her vakada Peri ve Cengo yeni kıyafet giyer, kıyafet kütüphanesi tutulmaz.
*Kaynak:* 732, 3083

### SUREC-32 Resim üretim döngüsü (Codex + yerel Claude)
1. Hikâye donar → Claude'a (yerel ya da bulut) **`istemleri hazırla N`** → sahibi listeyi onaylar.
2. Yerel Claude'a **`vaka N resimlerini üret`**; yerel Claude kendi döngüsünü yürütür: Codex'i çalıştırır → gelen resmi denetler → onaylar
   ya da düzeltme notuyla yeniden ürettirir → ara ara GitHub'a gönderir.
3. Hepsi onaylanınca resimleri oyuna gömer, testleri çalıştırır, gönderir.
Vaka 4'ten beri resimler bu düzenle (`uretim/CLAUDE.md`). Adım 8–9 bu düzene göre yazılır; iş sayfası yalnız web'deki resimler için (SUREC-20) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 1270, 1271, 1272, 2631

### SUREC-33 Resim oturumunda okunacaklar
Önce depo kökündeki `CLAUDE.md` okunur. Görsel kurallar: `sablon/5_gorsel_sistemi.md` → H. Görsel standart. Ayrıntılı geçmiş ve
gerekçeler: `uretim/v3_eski/BIRIKIM.md` (Vaka 3'ün Codex deneyimi). Türkçe, kısa yazılır.
*Kaynak:* 1031

### SUREC-34 Sahibiyle çalışma biçimi
- Çok basit, kısa Türkçe; Türkçe kelime kullan. Uzun tablo ve çok maddeli cevap işe yaramıyor; **iki-üç cümle + bir soru** çalışıyor
  (sahibi bir oturumda dört kez "basit ve kısaca anlat" dedi). Kısa Türkçe ister; resim üretimini "kontrol et" ve "üret" komutlarıyla yönetir.
- Bir adımda dur, eksikleri tek tek konuş.
- "Senin fikrin nedir?" diye sorar: seçenek listesi yerine **bir tane öner, gerekçesini tek cümlede söyle** (bir oturumda beş kez böyle
  ilerledi). Bu genel kuraldır; tekrar önleme taslağındaki "seçenekler listelenir, Barbaros seçer" kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 39).
- **Taslak → oku → uygula** (her seferinde taslakta bir hata yakalandı).
- **Sahibinin prozasına dokunma**; onun cümlesini değiştirmek öneriyle olur.
- Değişiklikler kafadan değil, veriye bakarak yapılır (BIRIKIM §4.2).
- Anlattığını hatırlar; yapılmış bir iş yeniden önerilmez (Vaka 3'te G1, G2 ve G9 denemeleri yeniden önerilmiş, düzeltmişti).
- 8 Ekim 2026'da (Vaka 1 dönemi): yalnız Vaka 1 üzerinde çalış.
*Kaynak:* 2553, 3104, 3194, 3195, 3197, 3198, 1483, 1485, 1486, 937

### SUREC-35 Ortağa cevap: sahne + satır numarası
Ortağa cevap basit ve kısa. Ortak replikleri sahne sahne, sahne içinde 1'den başlayan satır numarasıyla görür (ör. "İpucu: Nedim Bey, 11").
Liste veriden üretilir: `yeni/game_data.json` VN → `sahneler` (Vaka 5'te: giris, konusma, yuzlesme_dogru/zayif/kadir/nedim, kovalamaca,
kapanis) ve `clues[].sahne` (Vaka 5'te: vapur_cayci, ust_guverte, kadikoy_iskele, nedim, deri_ustasi, dukkan_cukurcuma); numara =
`satirlar` dizisindeki sıra + 1 (sahne notları dahil).
*Kaynak:* 2884

### SUREC-36 Ton belgesi taslaktır
`YENI_OYUN_TON.md` (4 Ekim 2026) taslaktır: §9–11'deki kararlar sahibinindir; geri kalan her karakter ayrıntısı ve her örnek replik
öneridir, kanon değildir. Sahibi onaylamadan hiçbir vaka bunlara dayanarak yazılmaz. Çerçeve kararları ayrı belgede: `YENI_OYUN_CERCEVE.md`.
*Kaynak:* 1712

### SUREC-37 Dış inceleme yöntemi
Eski oyundan devralınan yöntem: döküm çıkar → brief yaz → dışarıya inceletme → her iddiayı veriye karşı doğrula → ayıkla → uygula (dokuz
turda oturdu, `DEVIR.md` §2'de kayıtlı). İngilizce metinde daha da değerli: "bu replik komik mi, yoksa çeviri gibi mi duruyor" sorusu dış
göze sorulur.
*Kaynak:* 2024

### SUREC-38 Ortağın Vaka 5 dersleri (TASLAK §12) kararı
Barbaros'un cevabı (12 Kasım 2026): onaylandı, Vaka 6'dan itibaren geçerli. A, B, C olduğu gibi; D, E, F iptal (önce onaylandı, aynı gün
geri alındı — şimdilik kontrol yok); G yeni belge değil, Onay 2'den önce `3_kanon_kaydi.md` okunur (SUREC-16). İşlendiği yerler:
`6_vaka_formu.md` (§2 kişi tablosu, §12 "kim neyi biliyor", §19), `7_uretim_sureci.md` (adım 6, bulanık replik taraması).
*Kaynak:* 1024, 1025, 1028, 2831

### SUREC-39 Yeni plan (12 Kasım 2026, Barbaros'un kararı)
1. Vaka 6, 7, 8 **resimsiz** yazılır; üçünün de onayı (Onay 2'ye kadar, hikâye donar) yapılır.
2. Bu sırada yeni kural gerekirse şablona sahibinin onayıyla eklenir.
3. Sonra başa dönülür: Vaka 1, 2, 3, 4 yeni kurallara göre yeniden geçirilir.
Vaka 4'ün resimleri şimdi yapılmıyor (ortak da başlamasın); Vaka 8'den sonra, yeni kurallara göre ortaya çıkan duruma bakılıp yapılacak.
*Kaynak:* 2833, 2834, 2835, 2840

### SUREC-40 Vaka 7 resimleri dursun (Barbaros, 16 Kasım 2026 gece)
Vaka 7'nin resimlerine Barbaros'la Peri'nin kıyafeti konuşulmadan başlanmaz. Döngü çalışıyorsa durdurulur (`touch uretim/v7/DUR`; kalan
`codex`/`bash` süreci var mı bakılır). Üretilmiş resim varsa onaylanmaz, gömülmez; olduğu yerde bekler. Konuşma bitince Barbaros "başla"
der ve kararlar `DEVIR.md`'ye yazılır; o zamana kadar V7'de istem yazmak serbest, üretmek değil.
Konuşulacak: kırmızı manto açılışta ve Vaka 1'de var, V2–V6'da yok, V7'de geri dönüyor; kanonda "Peri'nin evden çıkardığı tek giysi" —
aynı manto, Vaka 1'deki gibi görünmeli. G1 kartı (`uretim/v7/prompts/G1.md`) onu düğmeli, önü kapalı, kapaklı cepli tarif ediyor; Vaka 1
resmindeki manto (`kaynak/yeni_gorsel/sprite/peri_manto_normal.webp`) kruvaze, yalnız kuşakla bağlı, geniş yakası açık, kapaksız cepli,
altında V yakalı krem saten bluz. Claude'un önerisi: G1 Vaka 1'deki mantoya göre düzeltilsin (biçim için Vaka 1 resminin dekoltesiz kırpığı
referans). Peri'nin öbür V7 kıyafetleri (`gala` balo elbisesi, `altin`, `altin_temiz`) de aynı konuşmada geçilir.
*Kaynak:* 2762

### SUREC-42 Test için vaka düğmeleri
Vaka 2 donduktan sonra (sahibinin isteği, 16 Eki 20:20): "Baştan başla" penceresinde her vakaya düğme ("Vaka N · Başlık (test)", Vaka 1
dahil, açılış atlanır) — `VN_VAKA_ATLA = true`. Yeni vaka eklenince düğmesi kendiliğinden çıkar. **Yayından önce `false` yapılır.**
(Kayıt: Vaka 2 toplam ≈ 11 sa 06 dk, tablo `vaka2_baslangic.md` §1; 63 görsel = 59 + Onay 3'te 4.)
*Kaynak:* 3055
