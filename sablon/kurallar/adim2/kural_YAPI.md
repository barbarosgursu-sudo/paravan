# YAPI — vaka yapısı ve oyun kuralları (birleştirilmiş)

### YAPI-1 Vakanın akış sırası
Her vaka aynı sırayla oynanır; sıra değişmez. Bugünkü akış (16 Kasım 2026'dan beri; eski karar ekranı / sonuç sayfası / kasa düzeni kalktı, kod 14bbf84):
açılış sahneleri (yalnız oyun başında) → masa → **giriş** + konuşma sahnesi → **araştırma** (ipucu açılınca sahnesi oynar, ardından "Deftere düştü" kartı) → **Kim yaptı?** (şüpheli + iki kanıt, tek hak) → **yüzleşme** (sonuca göre dört sahneden biri) → **kovalamaca** → **karar sahnesi** (sahnedeki biri sorar, "Peri ne yapsın?" seçimi; kasa yok) → **sonuç sahnesi** (karar karesinin üstünde) → **Cengo büroda** (karar repliği + söylenmeyen doğru kanıt, YAPI-25) → **"Dosya kapandı" kartı** → kapanış sahnesi (bağa göre iki hâl) → masa.
Adımların özü:
1. Giriş: müşteri gelir, derdini anlatır.
2. Konuşma: Peri ile Cengo atışır, plan yapar.
3. Araştırma: oyuncu ipucu açar; hakkı sınırlıdır.
4. Kim yaptı?: oyuncu suçluyu seçer ve iki kanıt gösterir.
5. Yüzleşme: seçime göre kısa bir sahne (4 tane); hepsinde gerçek suçlu kaçar.
6. Kovalamaca: her durumda aynı.
7. Karar: oyuncu ne yapacağını seçer (ahlaki seçim).
8. Kapanış: kısa bir son sahne.
Ayrıntı: 2. parça kural 22a–d ve 24, `kaynak/DEVIR.md` en üst.
*Kaynak:* 81, 83, 84, 85, 86, 87, 88, 89, 90, 293, 297, 2408

### YAPI-2 Sezon açılışı vaka değildir
Oyunun en başındaki açılış (haciz, büro, Cengo) vaka değildir, vaka formunun dışındadır. Yalnız kural kitabına, kanon kaydına ve görsel sistemine uyar. Bir kez oynanır.
*Kaynak:* 82

### YAPI-3 İki vaka tipi; şimdilik yalnız Bilmece
- **Bilmece** (Çerçeve'de "Mavi Ay tipi"): oyuncu da suçluyu bilmez, gerçeği kurar / bulur (mevcut sistemin aynısı).
- **Ters** (Çerçeve'de "Columbo tipi", ters kurgu, "howcatchem"): oyuncu suçluyu (katili) baştan görür, Peri bilmez; oyuncunun işi kanıt bulmak. Sahnede ipucu arama ekranının en iyi kullanıldığı yer; katilin ifadesiyle çelişen ayrıntı aranır.
- **Ters tip ertelendi; şimdilik yalnız Bilmece** (sahibinin kararı, 17 Ekim 2026: Vaka 3 de Bilmece). Ters tip ileride ayrı bir **deneme vakasıyla** sınanacak — yüzleşme "kişi seç" yerine "kanıt seç" olur; bu motor + doğrulayıcı işidir.
- Vaka formunun kimlik tablosunda tip: Bilmece.
*Kaynak:* 158, 159, 570, 1856, 2031, 2032

### YAPI-4 Sabit sayılar: şüpheli, karar, süre
- **3 şüpheli:** 1 gerçek suçlu, 2 yanlış iz.
- **4 karar.**
- **Süre:** bir vaka 15–25 dakika (formda "süre hedefi").
*Kaynak:* 117, 122, 123, 573, 656

### YAPI-5 İpucu ve araştırma hakkı
- Bedava ipucu yok: her ipucu bir hak harcar. İpucu sayısı haktan fazladır.
- Vaka 1: 5 ipucu, 4 hak. Vaka 2: 6 ipucu, 3 hak. Vaka 2'den itibaren 3 hak.
- **3 hakla `doğru` yolu şart** (`test_yeni_v2.js` sınar); 4. ipucu resmi genişletir.
- Reklamla +1 hak (16 Ekim 2026, sahibinin kararı; Android'de): reklam düğmesi hak bitince çıkar; kapanıştan sonra "Kaçırdığın ipuçları". Ayrıntı `kaynak/YENI_OYUN_CERCEVE.md`.
- Motor araştırmada ipucu listesi, hak sayısı, ipucu sahnesi ve "deftere düştü" kartı gösterir.
- Formda her ipucunun kısa sahne özeti ayrıca yazılır.
*Kaynak:* 85, 118, 119, 120, 294, 571, 599, 600, 2575

### YAPI-6 Girişin yeri, içeriği ve bitişi
- Yer: büro; müşteri kapıdan girer.
- İçinde bulunması gerekenler: müşteri kim, ne kaybetmiş, ne istiyor; ücret konuşulabilir (tutar fiyat tablosundan; ekranda rakam olarak tutulmaz, YAPI-32); şüphelilerden en az biri adıyla anılır, oyuncunun aklına ilk şüphe düşer.
- Girişte suçlu ele verilmez (form kontrolü: "şüpheli anılıyor, suçlu ele verilmiyor").
- Müşterinin girişte anlattıkları ipucu değildir, girişin parçasıdır (formda ayrı başlık).
- Bitiş: iş kabul edilir, ilk gidilecek yer belli olur.
*Kaynak:* 91, 99, 100, 101, 107, 127, 584, 589, 655

### YAPI-7 Yanlış iz ve aklanma
- Her yanlış şüphelinin onu suçlu gösteren bir izi vardır.
- Her yanlış izi çözen (şüpheliyi aklayan) bir kanıt vardır.
- Formun şüpheli tablosunda her şüpheli için "onu şüpheli gösteren iz" ve "onu aklayan kanıt" satırı (suçluda aklayan kanıt "—") doldurulur.
*Kaynak:* 124, 125, 592, 593, 656

### YAPI-8 Suçluyu kanıtlayan yollar ve kanıt çiftleri
- Suçluyu tam kanıtlayan **en az iki ayrı ipucu yolu** vardır.
- Formda yazılır: suçluyu tam kanıtlayan yollar (en az 2; hangi ipuçları birlikte), "Kim yaptı?"da doğru kanıt çiftleri (hangi iki olgu birlikte suçu kanıtlar), zayıf kanıtlar (suçluyu gösteren ama tek başına yetmeyen olgular).
*Kaynak:* 126, 601, 602, 603, 657

### YAPI-9 Her vakada bir "aha!" anı
Her vakada oyuncuyu yanıltan bir iz ve onu çözen bir kanıt vardır ("aha!" anı). Form kontrolünde aranır.
*Kaynak:* 166, 660

### YAPI-10 Gerçeğin zaman çizelgesi
Formun "Gerçek" bölümünde (oyuncuya asla gösterilmez) zaman çizelgesi saat saat yazılır; her şüphelinin o anda nerede olduğu ve ne gördüğü yazılır. Çizelgede çelişki olmaz (kim nerede, ne gördü) — form kontrolü.
*Kaynak:* 577, 661

### YAPI-11 Kişi tablosu: rol kontrolü (A) ve harita kontrolü (C)
12 Kasım 2026, sahibinin onayı; Vaka 6'dan itibaren (ortağın Vaka 5 derslerinden; A, B, C, G geçerli, D, E, F iptal). Vakadaki her kişi (müşteri, şüpheliler, yan kişiler) bir satır: kişi | işi | olaydaki rolü | işi rolüne uyuyor mu? | oturduğu yer | olay günü nereden nereye, nasıl gitti.
- **Rol kontrolü (A):** kişinin işi ile olaydaki rolü birbirine uyuyor mu; iki rol aynı kişide absürt mü? (Vaka 5: Selim hem ortak hem tamirciydi — en pahalı düzeltme, 5 dosya.)
- **Harita kontrolü (C):** oturduğu yer, gittiği yer ve oraya nasıl gittiği tutarlı mı? (Vaka 5: Nedim Moda'da oturup Moda'ya vapurla gidiyordu.)
Form onaya gitmeden kişi tablosu dolu olmalı.
*Kaynak:* 578, 579, 580, 581, 662, 1017, 1019

### YAPI-12 "Kim neyi biliyor" listesi (B)
12 Kasım 2026; Vaka 6'dan itibaren. Kararlar yazılmadan ÖNCE, son sahneden (kovalamaca + itiraf) sonra her kişinin ne bildiği listelenir. Karar metinleri, Cengo satırları ve kapanış bu listeye göre yazılır; listede olmayan bilgiyi kimse bilmez, listede olanı kimse bilmiyormuş gibi davranmaz. (Vaka 5: kararlar Muammer'in olayı bilmediğini varsayıyordu, oysa kovalamacada itirafı duymuştu → 4 karar yeniden yazıldı.) Hem form kontrolünde hem üretim sürecinin hızlandırma denetiminde ("Bilmediğini biliyor mu?") sorulur.
*Kaynak:* 625, 663, 709, 1018

### YAPI-13 Kim yaptı? ekranı
- Oyuncu önce bir şüpheli, sonra iki kanıt seçer (iki ayrı ekran).
- Seçilebilen şüpheliler yalnız adı duyulanlar; kanıtlar yalnız eldeki olgular (olgu = oyuncunun eline geçen cümleler).
- Kanıt yalnız **ipuçlarında** bulunan bilgilerden seçilir; müşterinin girişte anlattıkları herkesin bildiği bilgidir, kanıt değildir.
- Kanıtlar şüpheliye göre **süzülmez** (süzmek cevabı söylemek olur); öğrenildiği yerin başlığı altında, kapalı gruplar hâlinde durur.
- **Tek hak:** oyuncu bir kez suçlar.
*Kaynak:* 86, 131, 139, 296, 596

### YAPI-14 Kim yaptı?'nın üç sonucu
| sonuç | ne olur |
|---|---|
| Doğru kişi, doğru kanıt | Suç kanıtlanır. |
| Doğru kişi, zayıf kanıt | Peri haklıdır ama inandıramaz (yüzleşmede duyulur). Sonda Cengo elindeki doğru kanıtı söyler (YAPI-25). |
| Yanlış kişi | Masum biri suçlanır. Gerçek yine ortaya çıkar. Sonda Cengo elindeki doğru kanıtı söyler (YAPI-25). |
Sonuca göre yüzleşme sahnesi oynar (YAPI-16).
*Kaynak:* 133, 134, 135, 296

### YAPI-15 Kilit açarak bulunan kanıt
- Kilit açarak bulunan kanıt (Cengo'nun teli) "Kim yaptı?"da geçerlidir.
- Hikâyede kuralın tarafı: delil hukuka uygun olmalı; kilit açarak bulunan şey mahkemede işe yaramaz, kapıyı çalarak bulunan şey yarar. Cengo'nun teli bu yüzden hep bir bedel taşır (Ton §9, 5 Ekim 2026, "tekrarlanan espri" başlığı altında); bu, Peri'nin kuralı ile Cengo'nun içgüdüsü arasındaki kavganın gerçek hayattaki dayanağıdır.
- Kural 21b: mahkemede geçmemesi yalnız espri olarak kullanılır.
- Bu iki söz ("hep bir bedel taşır" / "yalnız espri") arasındaki fark çözülmedi: bkz. CELISKI-YAPI-3.
*Kaynak:* 204, 1822

### YAPI-16 Dört yüzleşme sahnesi
Her vaka 4 kısa yüzleşme sahnesi yazar (her biri 4–6 replik); hepsinde gerçek suçlu kaçar:
- Doğru kişi, doğru kanıt → suçlu köşeye sıkışır, kaçar.
- Doğru kişi, zayıf kanıt → suçlu inkâr eder, sonra paniğe kapılıp kaçar.
- Yanlış şüpheli 1 → masum kendini savunurken gerçeği ele verir, suçlu kaçar.
- Yanlış şüpheli 2 → aynı, kendi tepkisiyle.
*Kaynak:* 87, 140, 141, 142, 143, 144

### YAPI-17 Panik ve kaçışın somut sebebi
Sahibinin kararı, 17 Ekim 2026. Suçlu "Bir his", "His mi?", "Neredeydin?", "Fırına bakayım" gibi zayıf / cevabı kolay bir sözle kaçmaz. Kaçışı bir tetikleyici başlatır: ya kanıt yalanını çürütür (doğru kanıt), ya da **sakladığı şey tehlikeye girer** (biri, farkında olmadan, onun sakladığı yeri arayacağını söyler). Oyuncu kovalamacada "ha, bu yüzden kaçtı" diyebilmeli. Örnek, Vaka 3: Nadide "Yarın eksper dükkânı arayacak, depodaki un çuvallarına kadar" der; para o çuvaldadır, Ferruh depoya koşar. Üretimde her yüzleşme "Neden kaçıyor?" diye denetlenir; Vaka 3'te üç yüzleşme bu yüzden yeniden yazıldı.
*Kaynak:* 145, 710

### YAPI-18 Yüzleşmenin yeri
Dört yüzleşme sahnesi de kovalamacanın başladığı yerde geçer. Şüpheli orada değilse yüzleşme telefonla ya da onu oraya getiren bir sebeple yapılır.
*Kaynak:* 146

### YAPI-19 Kovalamaca
Sahibinin kararı, 7 Ekim 2026.
- Her vakada suçluyla bir kovalamaca ya da arbede olur — Mavi Ay'ın bölüm sonu gibi birkaç dakikalık fiziksel komedi. Her durumda (her yüzleşme sonucunda) aynıdır.
- **Yeri: Kim yaptı? ve yüzleşmeden sonra, karardan önce.** Kaçan hep gerçek suçludur; kovalamaca cevabı önceden ele vermez. (Tarihçe: V1'de araştırmanın ortasındaydı — Serkan ipucu, her yol oradan geçiyordu; sonraki vakalar için Mavi Ay'daki gibi karardan hemen önceki doruk önerilmişti.)
- Peri de Cengo da ayrı ayrı komik duruma düşer; Cengo en az bir kez. Denge serbest, her vakada eşit pay şart değil (V1'de Peri iki kez rezil olur — önce çamaşır ipinde çarşafa sarılır, sonra balık kasasına oturur — Cengo yalnız havada simit kapar; sahibi böyle bıraktı, 7 Ekim 2026).
- Kaçanı beceri değil **şans** yakalar (V1: Serkan levreklere basıp kayar).
- Yazıyla değil **görüntüyle** anlatılır: her vuruşun kendi ara karesi vardır (V1: 4 kare).
*Kaynak:* 88, 108, 109, 113, 114, 1871, 1872, 1873, 1875, 1876

### YAPI-20 Peri'nin felaketi
Sahibinin kararı, 6 Ekim 2026. Her vakada Peri'nin üstü başı bir şekilde berbat olur (bir kovalamaca, boğuşma ya da kaza; balık, çamur, boya, pasta, su…) — zarif eski güzellik kraliçesinin en kötü anı, fiziksel komedi.
- Felaket kovalamacanın içinde olur; iki kural birbirini besler.
- Felaket vakanın konusundan çıkar (V1: balık kasaları); dışarıdan yapıştırılmaz.
- Görsel maliyeti: 1 ara kare + 2 "kirli" ifade (sinirli, utanmış) → vaka başına 3.
- Sahne sonunda temizlenme anı yazılır (V1: çaycının hortumu); sonraki sahneler temel setle sürer; araştırma sırası serbest olduğu için kirli hâl yayılmaz.
*Kaynak:* 112, 1865, 1868, 1869, 1870, 1874

### YAPI-21 Yanlış/zayıf suçlamanın bedeli sahnede ve o vakada kalır; oyun bitmez
- **Bedel sahnededir** (16 Kasım 2026; kasa kalktı): zayıf ya da yanlış suçlama yüzleşmede duyulur, sonda Cengo elindeki doğru kanıtı söyler (YAPI-25). Ücret kesintisi yok (YAPI-32).
- **Bedel o vakada kalır:** sonraki vakalara taşınmaz, kimse küsmez.
- **Oyun hiçbir durumda bitmez.**
*Kaynak:* 147, 148, 150

### YAPI-22 Karar: dört seçenek, doğru cevap yok, kapı yok
- 4 seçenek vardır; doğru ya da yanlış cevap yoktur. Oyuncu ne yapacağını seçer (ahlaki seçim).
- **Kapı yok** (yeni oyun): dört karar her zaman açıktır; gerçek yüzleşmede ortaya çıktığı için hepsi seçilebilir. Araştırmanın karşılığı Kim yaptı? ekranındadır.
*Kaynak:* 89, 151, 152

### YAPI-23 Karar sahnenin içindedir
Kural 22a; sahibinin kararı, 16 Kasım 2026 (8 Ekim'deki "oyuncu seçmeden önce sonucu bilir" kuralının yerine).
- İtiraftan sonra konuşma ekranı kesilmez; ayrı karar ekranı, "Dosya çözüldü" sayfası, karar menüsü, sonuç sayfası yoktur (kalkan ekranlar).
- Kararı **sahnedeki biri sorar** — itiraftan sonra sahnede kalan biri (V6: Müzeyyen bankta "Şimdi ne olacak, kızım?"); soran ve dinleyen ekrandadır (5. parça SR-A). Formda kararı kimin sorduğu, repliği ve ekranda kimin olduğu yazılır.
- Seçenekler **Peri'nin ağzından kısa cümlelerdir**, konuşma kutusundaki seçimle gelir ("Peri ne yapsın?"; açılıştaki "Peri ne desin?" kutusu gibi). Seçenek cümlesi ne yapılacağını açıkça söyler (kural 5); sonucu söylemez.
- Seçeneğin altında hiçbir şey yazmaz: **sonuç önizlemesi, rakam, Cengo'nun tavrı yok.**
- Taslak: `sablon/taslak_karar/vaka6_akis.jpg` (önerilen akış, onaylandı) ve `vaka6_simdi_oneri.jpg` (eskisiyle yan yana).
- Form kontrolü: kararı sahnedeki biri soruyor; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (22a–b).
- Uygulama (kod, 16 Kasım 2026): `yeni_arayuz.js → kararSahnesi`; veride `sahneler.karar_soru` varsa soran satırlar, sonda "Peri ne yapsın?" seçimi; seçenek = kararın `SEÇENEK` satırı, yoksa etiket. `arac_diyalog.js`: `## sahne karar_soru` (⚙ `secim_kare`), karar `**SEÇENEK:**` (ÖNİZLEME artık isteğe bağlı).
*Kaynak:* 153, 206, 627, 631, 666, 2773

### YAPI-24 Sonuç sahnede gösterilir
Kural 22b. Seçimden sonra SONUÇ anlatı satırlarına bölünür ve karar karesinin (5. parça SR-K; V6: K106) üstünde akar; bedel de orada görünür (eylem → sonuç → bedel, YAPI-38). Cengo'nun karar satırı (bağ etkisi, kural 23) kendi ağzından, kendisi ekrandayken söylenir (V6: büroda). Ardından Cengo'nun söylenmeyen doğru kanıtı (YAPI-25), "Dosya kapandı" kartı (YAPI-26), kapanış sahnesi gelir. Uygulama: veride `sahneler.sonuc_<karar>` varsa o oynar, yoksa SONUÇ ~110 harflik anlatı satırlarına bölünür.
*Kaynak:* 154, 207, 666, 2773

### YAPI-25 Cengo söylenmeyen doğru kanıtı söyler
Kural 22c; sahibinin kararı, 16 Kasım 2026 (eski ücret kesintisinin ve formdaki "kesinti açıklaması"nın yerine; kasa yok).
- Kapanıştan önce, büroda, Cengo yalnız oyuncunun **elinde olup** suçlamada kullanmadığı doğru kanıtı anar ("Elindeydi"; seçimi `cozumYolu()` yapar, testli).
- **Açılmamış ipucunun bilgisi asla anılmaz** (kural 20 / 20 Ekim kuralı; reklamlı "kaçan ipucu" da bunun için korunur).
- Doğru kişi + sağlam kanıtta Cengo bu konuyu açmaz. Yanlış kişi suçlandıysa da aynı kural: elindeki doğru kanıt.
- Yazar suçluyu kanıtlayan **her doğru kanıt için bir** Cengo satırı yazar; satır yalnız o kanıtı anar, kanıtın kendi bilgisinden fazlasını söylemez, çiftin öbür kanıtını anmaz (oyuncu onu açmamış olabilir — V6'nın ilk örneğindeki "Sofradaki tarihle" sözü sızıntı taramasında yakalandı, 16 Kasım 2026). Form kontrolü: her doğru kanıt için satır var, yalnız o kanıtın bilgisini söylüyor.
- Örnek (V6, zayıf): "Elbise kılıfını o gün iki kişi tuttu, Peri. Onu söyleseydin kadın 'kanıtınız ne?' diyemezdi." (DEVIR'deki karar notunda aynı örnek "Torbayı o gün iki kişi tuttu…" biçimindedir.)
- Karar satırı da kanıt satırı da **Cengo'nun repliğidir** (Peri'ye söyler, anlatı değil; Peri dinler). Diyalogda etiketle yazılır: karar satırı `**CENGO [ifade]:** … {yuz: peri.x}`; kanıt satırı `## cengo_kanit` bölümünde `**olgu [Cengo'nun ifadesi]:** metin {yuz: peri.x}` — ifade ve Peri'nin yüzü yazılır (kapıda K8). Biçim `sablon/6_vaka_formu.md`. Veride `kim_yapti.cengo_kanit[olgu]`.
- Bir doğru kanıtın Cengo satırı yoksa o yolda Cengo susar.
*Kaynak:* 208, 614, 667, 2773

### YAPI-26 "Dosya kapandı" kartı
Kural 22d (16 Kasım 2026; eski "Dosya çözüldü" ekranının yerine). Vakanın sonunda, kapanış sahnesinden önce tek bir kart: sonuç başlığı (sağlam / zayıf / yanlış), oyuncunun kanıtları ✓/✗, "Elindeydi", yanlışsa suçlananın neden masum olduğu (`## cozum` MASUM satırı), Peri'nin anı cümlesi, "Devam" ve "Arkadaşına öner". Rakam yok. Yalnız oyuncunun elindeki kanıt anılır (20 Ekim kuralı). Seçim mantığı `cozumYolu()`. Formda karta giden metin yazılır: suçluyu kanıtlayan yollar (sade dille) ve her yanlış şüphelinin neden masum olduğu.
*Kaynak:* 138, 209, 613, 2773

### YAPI-27 Karar tablosu (formda)
Formda her karar için bir satır: karar | Peri'nin seçenek cümlesi (kısa, ne yapacağını söyler) | sonuç sahnesi: eylem → sonuç → bedel (anlatı satırları) | para sahnede (kim kime ne verdi/kesti; yoksa —) | bağ | Cengo satırı (büroda, kendi ağzından) | anı defteri | ara kare.
*Kaynak:* 629

### YAPI-28 Metni gelmeyen vakaların yedek davranışı ve geçiş sırası
16 Kasım 2026 karar düzeninin uygulaması: V6'ya taslaktaki örnek metin girdi (Müzeyyen'in sorusu, 4 SEÇENEK, `prova_torba` için Cengo satırı; son hâli Oğuz Bey'de). Öbür vakalar (V1–V5, V7) metin gelene dek yedekle çalışır: soran yok, seçenek = etiket, Cengo susar. Sıra: önce Vaka 6 (resimleri tam) → tutarsa V7, V8 bu düzenle → V1–V5 yeniden geçirilir. Her adım ayrıca sahibinin "yap"ıyla. Oğuz Bey her vaka için yazar: kararı soran kişi + repliği, Peri'nin seçenek cümleleri, SONUÇ'un sahne satırları, her doğru kanıt için Cengo'nun "Elindeydi" satırı, rakam geçen karar metinlerinin sahneye çevrilmesi.
*Kaynak:* 2773

### YAPI-29 Her durumda en az bir dürüst seçenek
Her durumda en az bir dürüst karar seçeneği açıktır (form kontrolü: "En az bir dürüst karar var").
*Kaynak:* 165, 630, 665

### YAPI-30 Kirli seçenek Peri'nin bir derdine çare olur
Kural 26. Kirli seçeneğin cazibesi rakamla değil hikâyeyle kurulur: Peri'nin bir derdine çare olur. Peri'nin parasızlığı (haciz, taç, faturalar) hikâyede ara ara hatırlatılır ki "parasını al" gibi bir seçenek rakamsız da çekici görünsün. Dürüst seçeneğin de bir karşılığı vardır; "doğru cevap" çıkmaz (kural 23).
*Kaynak:* 214, 630, 2773

### YAPI-31 Para yalnız hikâyededir (kasa yok)
Kural 24; sahibinin kararı, 16 Kasım 2026 (sebep: kasa yalnız birikiyordu, hiçbir şeye bağlanmıyordu; karar ekranı tablo karşılaştırmasına dönmüştü).
- Ekranda kasa, ücret, karar parası, kasa göstergesi, hesap kutusu, "Kasaya …", Anı'daki "Kasaya" satırı yok; oyunun saydığı bir para yok.
- Para sahnede yaşar: kim kime ne veriyor, kim neyi kesiyor, kim borç topluyor. **Her kararın parası kendi sahnesinde görünür ve orada biter** (V6: Haldun ücreti öder — "Bir hafta bekledim, şimdi bir yıl bekleyeceğim"; Müzeyyen zarfı uzatır).
- Para vakalar arasında taşınmaz (YAPI-43). Para hiçbir yolu kapatmaz.
- Uygulama: `motor_yeni.js` kararVer kasayı değiştirmez; ücret/karar parası veride hikâye rakamı olarak durur (`test_yeni_kimyapti.js`: "karar kasayı değiştirmiyor").
*Kaynak:* 212, 2773

### YAPI-32 Ücret hikâyenin parçasıdır; kesinti yok
Kural 25.
- Ücret girişte konuşulabilir (tutar fiyat tablosundan, formda "Vaka ücreti: fiyat tablosundan"); ekranda rakam olarak tutulmaz; sonda ödendiği sahnede söylenebilir.
- **Müşteri girişte söylediği ücreti öder; kesinti yoktur** (16 Kasım 2026, sahibinin kararı — kasa kalktı, kesintinin anlamı kalmadı): sonuç metninde "beş bin kesti" gibi satır yazılmaz, `## ucret` bölümü yazılmaz (`arac_diyalog.js`'te isteğe bağlı), verideki ücret kademeleri eşittir (`kim_yapti.ucret`: dogru = zayif = yanlis), `kesinti` yok.
- Sus payı / prim (kesinti değil) kaldı.
- V6 ve V7'de uygulandı (V6: "kendisi söylesin" SONUÇ → Haldun ücreti ödedi; "Cengo'ya bırak" SONUÇ'tan "Haldun ad duymadığı için beş bin kesti." silindi; iki ÖNİZLEME'den "₺ keser" çıktı). **V1–V5'teki kesinti metinleri bilerek bırakıldı**; yeniden geçirilirken `## ucret` silinir, kademeler eşitlenir.
- Zayıf ya da yanlış suçlamanın bedeli: sahnede duyulur ve Cengo söylenmeyen doğru kanıtı söyler (YAPI-21, YAPI-25).
*Kaynak:* 100, 147, 213, 572, 2768

### YAPI-33 Her tutar gerçek hayata uygun
Kural 27b; sahibinin kuralı, 5 Ekim 2026. Her tutar o yılın İstanbul fiyatlarına uyar: vaka ücreti, kararların getirdiği para ve metinde geçen her tutar (kira, ücret, kiralama, borç, rüşvet, balığın kilosu…).
*Kaynak:* 216, 1815

### YAPI-34 Her vakanın fiyat tablosu
Kural 27c. Her vaka kendi fiyat (referans) tablosunu taşır (ilki `YENI_VAKA_1.md`'de; formda §17). Metinde geçen her tutar, dayanağıyla birlikte tabloda yazılıdır; tabloda olmayan tutar metne giremez (denetimde ve form kontrolünde aranır: "Her tutar fiyat tablosunda"). Ay sonu gideri de bu tabloya göre kurulur (Ekim 2026: 35.000 ₺) — bkz. CELISKI-YAPI-2.
*Kaynak:* 217, 652, 664, 1815

### YAPI-35 Taç her yolda Vaka 7'de alınır
Kural 27; sahibinin kararı, 15–16 Kasım 2026.
- Taç her yolda Vaka 7'de alınır. Karar yalnız **nasıl** alındığını ve bedelini değiştirir (kimin parasıyla, kime borçlu kalarak; örn. kendi parası / sahibenin sus payı / Cengo'nun borcu / dalavere). Bedel tacın kaybı değil, nasıl alındığıdır; sonuç metninde ve bağda görünür.
- Taç Vaka 8'e ve sonrasına taşınmaz; V8 ve sonrası tacın alınmış olduğu hâlden başlar; nasıl alındığı sonraki vakalarda anılmaz.
- Kasa olmadığı için taç bir hesaptan düşmez. Kasadan düşme, kasaya göre sonuç seçimi ve "taç alındı" işareti için yazılan motor planı iptal.
- Vaka 7'nin ortakla kararlaştırılan ayrıntıları (15 Kasım 2026): tacın parası karara göre bulunur, oyuncu ayrıca seçmez (örn. Sus'ta Cengo borç bulur, Sus payında sahibenin parası kapatır); Cengo'nun borcu Vaka 8'de anılmaz, Vaka 7'de kapanır; ihbar yolunda Süheyla tacı minnetle, satış dışında katalog fiyatına Peri'ye satar; "Tacı Cengo'ya bırak" kararında Cengo tacı kendi parasıyla alır, kapanışta Peri'ye verir (taç alınmış sayılır); fiyat ~200.000 ₺.
- Bekleyen kural işi (15 Kasım 2026, Barbaros onayıyla; kim yapacaksa önce DEVIR'e yazar): sezon taslağında Ton §9.2'ye dayanan "dürüst yol yalnızca erteler" cümlesi taç kararına göre yeniden yazılır.
*Kaynak:* 215, 2776, 2777, 2773

### YAPI-36 Kaybetme yok
- Batmak oyunu bitirmez (eski oyunda düzgün olma hakkını daraltır).
- Yeni oyunda hiçbir sonuç bir yolu kapatmaz; kasa yok, para yalnız hikâyede (YAPI-31).
- Yeni oyunda kalkanlar: batıran aylık giderler, faiz, borç sarmalı, icra krizleri.
- Eski oyundan yeni oyuna aynen taşınan yapı sözleşmelerinden biridir.
*Kaynak:* 47, 164, 1724, 1807, 1816, 2044, 2047

### YAPI-37 Ekonomi seçenekleri daraltır, kirletmeye zorlamaz
Ekonomi seçenekleri daraltabilir ama oyuncuyu kirli karara zorlayamaz: bütçeyi harcamanın hiçbir biçiminde oyuncunun elinde yalnızca vicdanı eksi kararlar kalamaz. `test_borc.js` bunu eski oyunun dokuz vakasının hepsinde sınıyor. Eski oyundan yeni oyuna aynen taşınan yapı sözleşmelerinden biridir.
*Kaynak:* 46, 1724, 1816, 2044, 2046

### YAPI-38 Oyun oyuncuya not vermez
- Tek bir ahlak skoru, puan, sayaç, sıralama tablosu yok; sonuç metinleri seçimi yargılamaz, sonucu gösterir.
- Kalıp: **eylem → sonuç → bedel.** Karar sonucu somut bir fiille açılır ("İlyas'ı polise teslim ettin"), sonra ne olduğunu gösterir; bedeli göster, kararı oyuncu versin. Anlatıcı hüküm vermez.
- "Doğru olanı yaptın", "en adil" gibi hüküm cümleleri yasak.
- Nitelik + bedel yapısı ("Onurlu ama ölümcül", "Dürüstsün ama saf") hüküm değildir, kalabilir — orada oyuncunun seçimi değil dünyanın tepkisi anlatılır.
- Eski oyundan yeni oyuna aynen taşınan yapı sözleşmelerinden biridir (kural 22).
*Kaynak:* 48, 155, 205, 932, 1724, 1793, 2044, 2048

### YAPI-39 Ruh hâli sınıflaması kelime olarak gösterilmez; yeni oyunda ruh hâli görseli ve istatistik paneli yok
- Eski motordaki `kararRuhHali` sınıflaması (temiz/bedel/bosluk/kirli) oyuncuya ASLA kelime olarak gösterilmez; yalnızca atmosfer görseli seçer.
- Yeni oyunda (kural 27a) ruh hâli görseli ve istatistik paneli yok; kararın sonucunu kararın kendi ara karesi gösterir.
*Kaynak:* 48, 218, 1704, 2048

### YAPI-40 Cengo'nun yorumu gizli not olmamalı
Komedi "not vermez" kuralını yeni bir yerden deler: Cengo'nun esprisi gizli bir not olabilir — her temiz karara alkış, her kirli karara laf sokarsa Cengo puan tabelasına döner.
- Cengo yorum yapabilir, çünkü o bir karakterdir, hakem değil. Ama tepkisi ahlaka değil **duruma** göredir: bazen kurnazca kirli bir oyunu sever (eski besleme tablosunda da öyleydi), bazen dürüst bir karar ona pahalıya patlar ve söylenir.
- Bir vakadaki kararların Cengo satırları yan yana konunca "doğru cevap" okunmamalı; `arac_akis_denetim.js` tam bunu basar.
*Kaynak:* 1792, 1794, 1795

### YAPI-41 Rozetler yalnız komik anlar için
9 Kasım 2026 raf kararı. Rozetler yalnız komik anlar içindir; iyi/kötü karar için rozet YOK (oyun not vermez). Vaka başına en fazla bir-iki, yalnız gerçekten komik bir an varsa; hiç rozeti olmayan vaka da olur.
*Kaynak:* 1698, 1703

### YAPI-42 Sezon sonu tablosu: puan değil, sezonun dosyası
9 Kasım 2026 raf kararı (`final_tablo_plani.md`'deki "ne kadar ahlaki/kirli" isteğinin yerine; ruh hâli sınıflaması oyuncuya asla kelime olarak gösterilmez, oyun not vermez).
- Puan/grafik değil: her vaka bir satır, kalıp **eylem → sonuç → bedel** (örn. "Vaka 2 · Kayıp Gelinlik — Defne'yi suçladın. Parayı ona bıraktın. Düğün yapıldı; kasaya bir şey girmedi."). Defter → Anı'dan türetilebilir. Yargı yok.
- Altında **Peri'nin sezon notu**, 3–4 değişkenle. Değişkenler yargı değil sezonun sonucunu anlatır (kasa dolu/boş, Peri kimlerle bağ kurdu, kimlerle bozuştu). Yazar işi.
- Kasa geçen örnek ve değişken: bkz. CELISKI-YAPI-1.
*Kaynak:* 1704, 1705, 1706

### YAPI-43 Vakalar arasında yalnız Cengo bağı ve sabit sezon hikâyesi taşınır
Her vaka kendi içinde kapanır. Vakalar arasında yalnız şunlar taşınır: **Cengo bağı** (sistem, vakadan vakaya sürer) ve sabit sezon hikâyesi. Para/kasa 16 Kasım 2026'da kalktı; para taşınmaz, yalnız hikâyededir (kural 24).
*Kaynak:* 160, 161, 219

### YAPI-44 Tohum yok
Bir vakadaki karar başka bir vakanın metnini, kişilerini ya da olaylarını değiştirmez. Vaka 1'in tohumları silindi; doğrulayıcı K19 tohumu hata sayar.
*Kaynak:* 163, 219

### YAPI-45 Dallanma yok
Dallanma YOK (Chapters dallanır, biz dallanmayız): kararlar birleşir; değişen şey hikâyenin yolu değil, bilgi ve bağdır (eski metindeki "para" ve "tohum" sonradan kalktı: YAPI-43, YAPI-44). Dallanmada yazılanın çoğunu kimse görmez; bizde her şey oynanır, sadece farklı anlama gelir. Ayrıca dallanma bütün Nurcan mimarisini yıkar. Eski oyundan yeni oyuna aynen taşınan yapı sözleşmelerinden biridir.
*Kaynak:* 1724, 2044, 2049

### YAPI-46 Karar uyarısı (K8)
Taslak (`TASLAK_tekrar_onleme.md`, 12 Kasım 2026; kasa kalkmadan önce yazıldı). Bir karar ötekinden hem daha çok para verip hem Cengo'nun daha çok hoşuna gidiyorsa doğrulayıcı uyarır: ikinciyi seçmenin sebebi kalmaz (yalnız vicdan). V1, V4, V5'te var, üçü de kabul edildi. Kararların etkisi yeniden düzenlenince tekrar bakılır.
16 Kasım 2026'da kasa ve karar parası ekrandan kalktı (YAPI-31); bu uyarının para ölçütünün kalıp kalmadığı açık: bkz. CELISKI-YAPI-4.
*Kaynak:* 980

### YAPI-47 "Dosyanın tamamı"
17 Ekim 2026. Vaka sonundaki ekranda ayrı düğme, reklamla açılır: 5–7 kısa paragraf, olay sırasıyla gerçekte ne oldu — suçlu ne yaptı ve neden, masumlar o gece neredeydi, yanıltan izler nereden geldi. Formun §2'sinden (Gerçek) düz dille. Diyalogda `## hikaye` bölümüne gider (`YENI_OYUN_CERCEVE.md`).
*Kaynak:* 636
