# VAKA 8 — İADE · DİYALOG (SEZON FİNALİ)

Üretim adımı 3 (`7_uretim_sureci.md`). Kaynak: `vaka8_form.md` (Onay 1, 19 Kasım 2026).
**Bu dosya sahnelerin ve karar metinlerinin TEK kaynağıdır.** Veriye elle yazılmaz:
`cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka8_diyalog.md V8`.

Yazım `vaka7_diyalog.md`'deki gibi. Vaka 8'in kıyafetleri (kıyafet hâli):
- **Peri:** `manto8` (Vaka 1'deki kırmızı manto birebir: kruvaze, geniş açık yaka, kapaksız cepler, altında V yakalı krem
  saten bluz; **kuşak çözük, uçları sarkık**; dar siyah kalem etek, siyah stiletto; saç açık, dalgalı), `kilik` (aşçı
  yardımcısı: mantonun üstünden beyaz şef önlüğü beline sıkı bağlı, beyaz kep, iri siyah çerçeveli gözlük burnunun ucunda;
  manto yakası ve bacak açıkta), `recel` (kovalamaca: kılık baştan aşağı vişne reçeli, kep yok, gözlük yamuk, saçta
  reçel), `manto8_son` (temizlenmiş: önlüksüz, manto, saçta reçel — kovalamaca sonu, karar, kapanış).
- **Cengo:** `sofor` (lacivert iki sıra düğmeli şoför ceketi, kasket, beyaz eldiven, bir beden dar; tel cepte; bileklik),
  `sofor_dugmesiz` (son reçelden sonra bir düğme kopuk — kovalamaca ve karar), `ceket8` (kapanış: kendi ceketi,
  Vaka 1 temel setindeki ceket).
- **Gizem:** `triko` (sade kıyafet).

**Görselsiz test için yer tutucu:** Vaka 8'in bütün görselleri gri "görsel yok" kutusuyla görünür (V7'deki gibi baştan
yapılır). Kodlar V7'nin sonundan: A60, D28, K155.

**Kasa yok** (kural 24): para yalnız hikâyede. Tutar metinde yalnız ücret (elli bin); üç ödeme, yatırımcı parası ve
Peri'nin payı rakamsız.

**Karar düzeni** (kural 22a–d): kararı Nihat sorar (`## sahne karar_soru`, seçim karesi K186), Peri'nin 4 `**SEÇENEK:**`
cümlesi, Cengo'nun karar ve kanıt satırları büroda kendi ağzından, etiketli. Önizleme yok. İfadeler kapanış setinden:
Cengo `ceket8` (normal, kas, gulen, yumusak, sinirli), Peri `manto8_son` (normal, kas, yumusak, utanmis, sinirli).

**⚠ Ters köşe sahnesi (`## sahne ters_kose`):** "Kim yaptı?" ekranından HEMEN ÖNCE, her yolda oynamalı (ortağın kararı:
önce bambaşka biri görülür, sonra suçlama). Motorda bu yer henüz yok — küçük bir kod eki gerekiyor (`yeni_arayuz.js`:
Kim yaptı? açılmadan `sahneler.ters_kose` oynasın). Ek yapılana kadar sahne veride durur ama oynamaz.

Her satır için kontrol sorusu: *ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu, metnin andığı nesne görünüyor mu?*
Adı geçen her kişi o satırda ekranda (tek kişi `gir`, kalabalık kare). Sahnede olmayan ya da geçmişte kalan birinden söz
serbest (SR-A). Sigara yok (19a).

---

## sahne giris
⚙ arka: A60 · figurler: peri, cengo · set: manto8 · cset: ceket8
⚙ akış: Büro, sabah. Peri kırmızı mantoda, kuşağı çözük; masada kapalı kadife kutu (taç, anılmaz). Cengo kendi ceketiyle, elinde simitler. Kapı çalar: Bahar, elinde bir kavanoz reçel. Peri'yi tanır (sezonda ilk). Ödemeler, olmayan tedarikçi, imza. Bordroda Emir. Üç şüpheli. Ücret elli bin. Bahar çıkar.
⚙ K17: büro, en az 15 satır, şüpheliler (Nevzat, Fikret, Tarkan) anılıyor; ipucu bilgisi yok (şifrenin kime verildiği, stüdyo geceleri, iptal belgesi, posta kutusu, vekâletin kimlerde olduğu, Emir'in otoparkı).

*Sabah. Büro. Peri kırmızı mantosuyla masasında; mantonun kuşağı çözük, uçları sarkıyor. Masada kapalı, kadife bir kutu.* {kare: K155}
*Kapı açılıyor. Cengo eşikte, kendi ceketiyle; elinde iki simit.* {gir: cengo, kare: K196}
**CENGO [normal]:** Kuşağın çözük, Peri. {kime: peri, ekran: peri+cengo, yuz: peri.normal}
**PERİ [kas]:** Biliyorum. Bugün bağlamak istemedim. {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
*Kapı çalınıyor. Eşikte platin beyaz kısa saçlı, çiçekli kaftanlı, iri yapılı bir kadın; elinde bir kavanoz reçel.* {kare: K156}
**BAHAR [gulen]:** Paravan Dedektiflik? Ben Bahar. Eli boş gelinmez, vişne reçeli. {gir: bahar, kime: peri, ekran: peri+bahar, yuz: peri.normal}
*Bahar Peri'yi görünce olduğu yerde kalıyor.* {gir: bahar, gi: sasirmis, ekran: peri+bahar, yuz: peri.normal}
**BAHAR [sasirmis]:** Siz… kozmetik reklamlarındaki kraliçe! Perihan! {kime: peri, ekran: peri+bahar, yuz: peri.normal}
**PERİ [sevincli]:** Sonunda biri tanıdı, Cengo. {kime: cengo, ekran: peri+cengo, yuz: cengo.gulen}
**BAHAR [gulen]:** Ben de sizin kremi kullanırdım. Kırışıklık için. {kime: peri, ekran: peri+bahar, yuz: peri.sevincli}
**PERİ [kas]:** Kullanırdınız? Buyurun, Bahar Hanım, oturun. {kime: bahar, ekran: peri+bahar, yuz: bahar.gulen}
**CENGO [normal]:** Sizi ben tanıdım. Televizyonda yemek yapıyorsunuz. Gizem programınızı hiç kaçırmaz. {kime: bahar, ekran: cengo+bahar, yuz: bahar.gulen}
**BAHAR [normal]:** On iki yıldır. Bu akşam da ilk kez kendi markamı açıyorum: kavanozda sos, reçel. {kime: cengo, ekran: cengo+bahar, yuz: cengo.normal}
**BAHAR [endiseli]:** Ama şirketin hesabından para çıkıyor. Son bir ayda üç kez. {kime: peri, ekran: peri+bahar, yuz: peri.kas}
**BAHAR [endiseli]:** "Kavanoz Ambalaj" diye bir tedarikçiye gitmiş. Ben böyle bir firmayla hiç çalışmadım. {ekran: peri+bahar, yuz: peri.kas}
**BAHAR [sert]:** Ödeme talimatlarında benim imzam var. Ben atmadım. {ekran: peri+bahar, yuz: peri.kas}
**PERİ [merakli]:** Polise neden gitmiyorsunuz? {kime: bahar, ekran: peri+bahar, yuz: bahar.sert}
**BAHAR [endiseli]:** Lansman bu akşam. Yatırımcının parası bu gece giriyor. Polis gelirse kaçar, televizyon da duyar. {kime: peri, ekran: peri+bahar, yuz: peri.merakli}
**PERİ [merakli]:** Kimden şüpheleniyorsunuz? {kime: bahar, ekran: peri+bahar, yuz: bahar.endiseli}
**BAHAR [normal]:** Muhasebecim Nevzat Bey. Ödemeler onun şifresiyle çıkmış. Yıllardır yanımda ama… {kime: peri, ekran: peri+bahar, yuz: peri.merakli}
**BAHAR [sert]:** Bir de Fikret. Eski ortağım; ilk lokantamı birlikte açmıştık. Kapıma isimsiz notlar bırakıyor. {ekran: peri+bahar, yuz: peri.merakli}
**BAHAR [sert]:** "Avukatına güvenme" yazıyor. Kıskançlık. {ekran: peri+bahar, yuz: peri.merakli}
**CENGO [normal]:** Avukatınız kim? {kime: bahar, ekran: cengo+bahar, yuz: bahar.sert}
**BAHAR [normal]:** Tarkan Bey. Her işimi o yürütüyor; vekâletim onda. Programıma konuk oldu, öyle tanıştık. {kime: cengo, ekran: cengo+bahar, yuz: cengo.normal}
**BAHAR [normal]:** Ona söyledim, "hallederim" dedi. Ama hep yolda. Üç ayda yüzünü iki kez gördüm. {ekran: cengo+bahar, yuz: cengo.normal}
**BAHAR [sasirmis]:** Bir tuhaflık daha: muhasebe listesinde bir şoför var, Emir diye. Benim şoförüm yok ki! {kime: peri, ekran: peri+bahar, yuz: peri.merakli}
*Peri ile Cengo birbirine bakıyor.* {kare: K157}
**CENGO [normal]:** *(alçak sesle)* Ben de bir bordrodaydım, Peri. {kime: peri, kare: K157}
**PERİ [normal]:** Ücretimiz elli bin lira, Bahar Hanım. İş bitince ödenir. {kime: bahar, ekran: peri+bahar, yuz: bahar.sasirmis}
**BAHAR [gulen]:** Elli bin. Bir de ömür boyu reçel. {kime: peri, ekran: peri+bahar, yuz: peri.normal}
**PERİ [kas]:** Reçel pazarlığa girmez. {kime: bahar, ekran: peri+bahar, yuz: bahar.gulen}
**BAHAR [normal]:** Lansman akşam yedide, Kurtuluş'taki atölyemde. Tarkan Bey de gelecek. Ona bir de şoför bulmam lazım. {cik, kime: peri, ekran: peri+bahar, yuz: peri.kas}

## sahne konusma
⚙ arka: A60 · figurler: peri, cengo · set: manto8 · cset: ceket8
⚙ akış: Bahar çıkmış. Peri yöntemi sayar: vekâlet, olmayan firma, bordroda bir yabancı. "Bu benim avukatım; adını değiştirmiş." Cengo'nun planı: şoför olur; adam onu hiç görmedi, yalnız kimliğini (otopark). Gizem: avukat Peri'yi tanır, kılık lazım; Bahar'ın tanıtım çantasından önlük, kep, gözlük. Peri paravanın arkasından çıkar: çekicilik anı. Plan: Nevzat, stüdyo; Cengo: Fikret, posta kutusu, Emir.

*Kapı kapanıyor. Peri kalkıp pencereye gidiyor.* {ekran: peri, yuz: peri.normal}
**PERİ [sinirli]:** Vekâlet. Olmayan bir firma. Bordroda kimsenin tanımadığı biri. {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
**PERİ [sinirli]:** Bunu bana yaptılar, Cengo. Adım adım, aynısını. {ekran: peri+cengo, yuz: cengo.normal}
**CENGO [normal]:** Bize. Bordrodaki ben değil miydim? {kime: peri, ekran: peri+cengo, yuz: peri.sinirli}
**PERİ [kas]:** Bu Tarkan Bey benim avukatım. Nihat Kora. Adını değiştirmiş, dönmüş. {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
**CENGO [kas]:** Seni dolandıran adam, benim de yedi yıllık patronum. Hiç görmediğim patronum. {kime: peri, ekran: peri+cengo, yuz: peri.kas}
**PERİ [merakli]:** Hiç mi görmedin? Seni bordroya nasıl yazdı? {kime: cengo, ekran: peri+cengo, yuz: cengo.kas}
**CENGO [normal]:** Karaköy'de otoparkta çalışıyordum. Müdür bir gün kimliğimin fotokopisini istedi, "sigorta için" dedi. {kime: peri, ekran: peri+cengo, yuz: peri.merakli}
**CENGO [normal]:** Sonra hesabıma para yatmaya başladı. Ben de sormadım. Adam beni hiç görmedi; kimliğimi gördü, o kadar. {ekran: peri+cengo, yuz: peri.merakli}
**CENGO [gulen]:** Bahar Hanım ona şoför arıyor. O şoför benim. {ekran: peri+cengo, yuz: peri.merakli}
**PERİ [kas]:** Ya beni? Beni görürse tanır. {kime: cengo, ekran: peri+cengo, yuz: cengo.gulen}
*Gizem çay ocağından geliyor; elinde masada unutulmuş bir tanıtım çantası.* {kare: K197}
**GİZEM [triko]:** Kılık lazım, Peri Hanım. Bahar Hanım'ın çantasında önlük, kep, bir de gözlük var. {gir: gizem, kime: peri, ekran: peri+gizem, yuz: peri.kas}
**PERİ [kas]:** Ben aşçı mı olacağım, Gizem? {kime: gizem, ekran: peri+gizem, yuz: gizem.triko}
**GİZEM [triko]:** Aşçı yardımcısı. Aşçı olmanıza kimse inanmaz. {kime: peri, ekran: peri+gizem, yuz: peri.kas}
*Peri çantayı alıp paravanın arkasına geçiyor. Bir süre sonra çıkıyor: beyaz önlük beline sıkı bağlı, mantonun yakası ve bacakları açıkta, kep başında, iri gözlük burnunun ucunda.* {kare: K158, set: kilik}
*Cengo elindeki simidi düşürüyor.* {kare: K158}
**CENGO [gulen]:** Ben bu aşçıya her şeyi yedirirdim. {kare: K158}
**PERİ [kas]:** Sen önce şoför ol, Cengo. {kare: K158}
**CENGO [gulen]:** Smokini kiraladığım dükkânda şoför üniforması da var. Bir saate dönerim. {kime: peri, ekran: peri+cengo, yuz: peri.kas}
*Bir saat sonra: Cengo lacivert şoför üniformasıyla, kasketini takıp aynada kendine selam veriyor.* {kare: K159, cset: sofor}
**GİZEM [triko]:** Avukat sizi sesinizden tanımasın, Peri Hanım. {gir: gizem, kime: peri, ekran: peri+gizem, yuz: peri.kas}
**PERİ [kas]:** Ben onu sesinden tanırım, Gizem. O beni görmeyecek. {kime: gizem, ekran: peri+gizem, yuz: gizem.triko}
**PERİ [normal]:** Ben Nevzat Bey'e giderim. Bahar Hanım'ın çekimleri Maslak'taki stüdyoda; oraya da bakarım. {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
**CENGO [normal]:** Ben Fikret Usta'yı bulurum. Bir de o "Kavanoz Ambalaj"ın kapısı nerede, bakarım. {kime: peri, ekran: peri+cengo, yuz: peri.normal}
**CENGO [yumusak]:** Bir de Emir'i bulayım. Bordrodaki o çocuk benim gibi bir şeyi bilmiyordur. {ekran: peri+cengo, yuz: peri.normal}

---

## ipucu nevzat
⚙ arka: A61 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Kurtuluş, mutfak atölyesinin üstündeki muhasebe odası: klasörler, hesap makinesi. Nevzat Peri'yi stajyer sanıp kahve ister (şaka 1). Ekran: üç ödeme onun şifresiyle, gece ikide, dışarıdan. Şifreyi Tarkan'a verdi, "denetim için". Masada taksi fişleri; nereye gittiğini söylemez, kızarır.
⚙ Kural 21c: şifre {Nevzat, Tarkan} — tek başına kimseyi göstermez. Taksi fişi Nevzat'ı gösterir (yanıltır).

*Kurtuluş. Mutfak atölyesinin üstünde dar bir muhasebe odası: raflarda klasörler, masada hesap makinesi.* {arka: A61, mekan}
*Kollarında siyah kolluk, kulağında kurşun kalem, kalın bıyıklı, tombul bir adam; gözlüğü boynunda zincirle sarkıyor.* {gir: nevzat, gi: normal, ekran: nevzat}
**NEVZAT [normal]:** Yeni stajyer misiniz? Şekersiz bir kahve, lütfen. {gir: nevzat, kime: peri, ekran: peri+nevzat, yuz: peri.normal}
**PERİ [kas]:** Kahveyi sonra yaparım, Nevzat Bey. Bahar Hanım ödemelere bakmamı istedi. {kime: nevzat, ekran: peri+nevzat, yuz: nevzat.normal}
*Nevzat ekranı çeviriyor: alt alta üç ödeme satırı.* {kare: D28}
**NEVZAT [gergin]:** Üçü de benim şifremle. Üçü de gece ikide. Ama bu odadan değil; dışarıdan bağlanmışlar. {kare: D28}
**PERİ [merakli]:** Şifrenizi bilen başka biri var mı? {kime: nevzat, ekran: peri+nevzat, yuz: nevzat.gergin}
*Nevzat kızarıyor, gözlerini kaçırıyor.* {gir: nevzat, gi: utangac, ekran: nevzat}
**NEVZAT [utangac]:** Bir kişiye verdim. Tarkan Bey'e. Denetim için istedi. {kime: peri, ekran: peri+nevzat, yuz: peri.merakli}
**NEVZAT [utangac]:** Bahar Hanım'ın avukatına güvenmezsem kime güveneceğim? Yani şifreyi iki kişi biliyor: ben ve o. {ekran: peri+nevzat, yuz: peri.merakli}
*Peri masadaki bir yığın taksi fişine bakıyor.* {kare: D29}
**PERİ [merakli]:** Bunlar ne, Nevzat Bey? Hepsi gece. {kare: D29}
**NEVZAT [utangac]:** İş… İşle ilgili değil. Yani işle ilgili de değil. Kahveniz soğumasın. {kime: peri, ekran: peri+nevzat, yuz: peri.merakli}
**PERİ [kas]:** Kahveyi siz istemiştiniz. {kime: nevzat, ekran: peri+nevzat, yuz: nevzat.utangac}
**NEVZAT [gergin]:** Doğru. Ben… ben yaparım. {kime: peri, ekran: peri+nevzat, yuz: peri.kas}

## ipucu studyo
⚙ arka: A62 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Maslak, programın stüdyosu: mutfak dekoru, ışıklar, kameralar. Pınar (yapım asistanı, kulaklıklı) Peri'yi "yeni yardımcı" sanıp kameranın önüne iter; Peri soğan doğrar, ağlar (şaka 1). Molada: ödeme gecelerinin üçü de çekim gecesi; Nevzat sabaha kadar kulisteydi.
⚙ Kural 21c: yalnız Nevzat'ı aklar; kimseyi göstermez.

*Maslak. Televizyon stüdyosu: ışıkların altında bir mutfak dekoru, kameralar.* {arka: A62, mekan}
*Mor saçlı, küt kâküllü, ince bir kadın koşturuyor.* {gir: pinar, gi: telasli, ekran: pinar}
**PINAR [telasli]:** Yeni yardımcı sen misin? Tezgâha, çabuk! Soğanlar doğranacak, kamera açık! {gir: pinar, kime: peri, ekran: peri+pinar, yuz: peri.normal}
*Peri kameranın önünde soğan doğruyor; gözlerinden yaşlar süzülüyor.* {kare: K160}
**PERİ [utanmis]:** Ağlamıyorum. Soğan. {kare: K160}
**PINAR [normal]:** Mola! *(Peri'ye)* İyiydin. Ağlaman çok gerçekti. {gir: pinar, kime: peri, ekran: peri+pinar, yuz: peri.utanmis}
**PERİ [kas]:** Gerçekti. Bir şey soracağım: geçen ay üç gece geç saate kadar çekim var mıydı? {kime: pinar, ekran: peri+pinar, yuz: pinar.normal}
*Pınar defterini karıştırıyor.* {gir: pinar, gi: defter, ekran: pinar}
**PINAR [defter]:** Üç gece, evet. Çekim sabaha kadar sürdü. Tarihler bunlar. {kime: peri, ekran: peri+pinar, yuz: peri.kas}
**PINAR [defter]:** Nevzat Bey üçünde de buradaydı. Kulisteydi, ışıkları kapattık, hâlâ oradaydı. {ekran: peri+pinar, yuz: peri.kas}
**PERİ [merakli]:** Muhasebeci bir yemek çekiminde sabaha kadar ne yapar? {kime: pinar, ekran: peri+pinar, yuz: pinar.defter}
**PINAR [normal]:** Bilmem. Bahar Hanım'ı izler. Kimseyi rahatsız etmez; çay da getirir. {kime: peri, ekran: peri+pinar, yuz: peri.merakli}
**PINAR [telasli]:** Mola bitti! Yardımcı, maydanoz! {kime: peri, ekran: peri+pinar, yuz: peri.merakli}

## ipucu fikret
⚙ arka: A63 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Samatya, küçük lokanta; duvarlarda eski fotoğraflar (genç Bahar ve Fikret, ilk dükkân), çerçeveli bir belge. Fikret Cengo'yu sever, Peri'yi tanır (şaka 1 doruğu: "Önlük sana yakışmamış"). Notları kabul eder: o da aynı yöntemle soyuldu. Duvardaki çerçeve: Bahar'ın vekâletini bir yıl önce iptal ettirdi.
⚙ Kural 21c: Fikret'i yöntemi bilen eski kurban olarak gösterir (yanıltır); iptal belgesi onu vekâlet tarafından aklar.

*Samatya. Küçük bir lokanta; duvarlarda eski fotoğraflar, aralarında çerçeveli bir belge.* {arka: A63, mekan}
*Beyaz uzun saçını at kuyruğu yapmış, kolları sıvalı, ön kolunda soluk bir çapa dövmesi olan iri bir adam.* {gir: fikret, gi: huysuz, ekran: fikret}
**FİKRET [huysuz]:** Kapalıyız. Sen şoför müsün, kaptan mı? Otur, çorba var. {gir: fikret, kime: cengo, ekran: cengo+fikret, yuz: cengo.normal}
**CENGO [gulen]:** Çorbaya hayır demem, usta. {kime: fikret, ekran: cengo+fikret, yuz: fikret.huysuz}
*Fikret Peri'yi görünce gülüyor.* {gir: fikret, gi: guler, ekran: peri+fikret, yuz: peri.kas}
**FİKRET [guler]:** Kraliçe! Önlük sana yakışmamış, kızım. {kime: peri, ekran: peri+fikret, yuz: peri.kas}
**PERİ [kas]:** Planlamıştım. Bahar Hanım'ın kapısına notları siz mi bırakıyorsunuz, Fikret Usta? {kime: fikret, ekran: peri+fikret, yuz: fikret.guler}
**FİKRET [huysuz]:** Ben bırakıyorum. Adımı yazmadım; yazsam okumaz, bana küs. {kime: peri, ekran: peri+fikret, yuz: peri.kas}
**FİKRET [huzunlu]:** Bana da aynısını yaptılar. Bir "avukat", bir vekâlet, olmayan firmalar. Lokantam gitti. {ekran: peri+fikret, yuz: peri.kas}
**FİKRET [huzunlu]:** O Tarkan'ı televizyonda görünce tanıdım. Yüzünü değil, konuşmasını. "Markanızı ben korurum." {ekran: peri+fikret, yuz: peri.kas}
**CENGO [normal]:** Bahar Hanım'ın vekâleti sizde de var mı? Eskiden ortaktınız. {kime: fikret, ekran: cengo+fikret, yuz: fikret.huzunlu}
*Fikret duvardaki çerçeveyi gösteriyor: noter mühürlü bir kâğıt.* {kare: D30}
**FİKRET [huysuz]:** Vardı. Bir yıl önce noterde iptal ettirdim. Bir daha kimse kimsenin adına imza atmasın diye astım. {kare: D30}
**PERİ [yumusak]:** Bahar Hanım'a bunu neden söylemediniz? {kime: fikret, ekran: peri+fikret, yuz: fikret.huysuz}
**FİKRET [huzunlu]:** Söyleseydim "kıskanıyorsun" derdi. Belki kıskanıyorum da. Ama soyulmasını istemem. {kime: peri, ekran: peri+fikret, yuz: peri.yumusak}

## ipucu posta
⚙ arka: A64 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Mecidiyeköy, dar bir kargo dükkânı, duvar boyu posta kutuları. Yusuf Efendi kambur, büyüteç gözlüklü; Cengo kutularını taşır. Kavanoz Ambalaj: kırk iki numara, mektubu hiç gelmez. Defter: vekâletle açılmış, Bahar adına. Peri okur: Bahar'ın vekâlet verdiği iki kişi, eski ortağı ve avukatı.
⚙ Kural 21c: vekâlet {Fikret, Tarkan} — tek başına kimseyi göstermez.

*Mecidiyeköy. Dar bir kargo dükkânı; duvar boyu numaralı posta kutuları.* {arka: A64, mekan}
*Kasketli, yün hırkalı, çok kambur, ufak tefek yaşlı bir adam.* {gir: yusuf, gi: normal, ekran: yusuf}
**YUSUF [normal]:** Hanım kızım, kargo mu? Paket ağırsa şu delikanlı taşısın. {gir: yusuf, kime: peri, ekran: peri+yusuf, yuz: peri.kas}
*Cengo hiçbir şey sormadan tezgâhın arkasındaki kolileri rafa diziyor.* {kare: K161}
**YUSUF [gulen]:** Şoför de çalışkanmış. Ne arıyorsunuz, söyleyin bakalım. {kare: K161}
**CENGO [normal]:** "Kavanoz Ambalaj" diye bir firma, Yusuf Efendi. Adresi sizin dükkân görünüyor. {kime: yusuf, ekran: cengo+yusuf, yuz: yusuf.gulen}
**YUSUF [normal]:** Kırk iki numara. Ona hiç mektup gelmez. Kutu boş durur, kirası düzenli yatar. {kime: cengo, ekran: cengo+yusuf, yuz: cengo.normal}
*Yusuf tezgâhın altından kalın bir defter çıkarıp bir sayfayı açıyor.* {kare: D31}
**YUSUF [normal]:** Kutuyu açan kâğıt bu. Vekâletle açılmış; Bahar Hanım adına. Bahar Hanım televizyondaki mi? {kare: D31}
**PERİ [merakli]:** Vekâlette kimin adı var? {kime: yusuf, ekran: peri+yusuf, yuz: yusuf.normal}
**YUSUF [normal]:** Gözlerim iyi görmez, kızım. Ama noter yazısını buraya iliştirmişler; sen oku. {kime: peri, ekran: peri+yusuf, yuz: peri.merakli}
*Peri iliştirilmiş kâğıda eğiliyor.* {kare: D32}
**PERİ [kas]:** Bahar Hanım iki kişiye vekâlet vermiş: eski ortağı Fikret Usta'ya ve avukatı Tarkan Bey'e. {kime: cengo, kare: D32}
**CENGO [kas]:** Hangisinin eli değmiş, kâğıt söylemiyor mu? {kime: peri, ekran: peri+cengo, yuz: peri.kas}
**PERİ [kas]:** Söylemiyor. Kâğıt yalnız "vekil" diyor. {kime: cengo, ekran: peri+cengo, yuz: cengo.kas}

## ipucu emir
⚙ arka: A65 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Karaköy otoparkı, görevli kulübesi — Cengo'nun eski yeri. Emir genç, turuncu yelekli, diş telli. Bordrodan habersiz: "Bir şey yatıyor, sormadım." Cengo donar. Emir: telefonla bir avukat bey aradı, kimliğini müdür verdi; sesi genç. Cengo kartını bırakır.
⚙ Kural 21c: yöntemi gösterir, kişiyi değil. "Sesi genç" ters köşenin habercisi; kimseyi göstermez.

*Karaköy. Bir otopark; girişte küçük bir görevli kulübesi.* {arka: A65, mekan}
**CENGO [yumusak]:** Yedi yıl bu kulübede oturdum, Peri. {kime: peri, ekran: peri+cengo, yuz: peri.normal}
*Turuncu yelekli, kıvırcık siyah saçlı, diş telli, sıska bir genç kulübeden fırlıyor.* {gir: emir, gi: gulen, ekran: emir}
**EMİR [gulen]:** Abi, park mı? Şoförsün, bilirsin; anahtarı bırak, ben çekerim. {gir: emir, kime: cengo, ekran: cengo+emir, yuz: cengo.yumusak}
**CENGO [normal]:** Emir sen misin? Bir şirkette şoför görünüyorsun, biliyor musun? {kime: emir, ekran: cengo+emir, yuz: emir.gulen}
**EMİR [sasirmis]:** Ben mi? Ben ehliyetsizim abi. {kime: cengo, ekran: cengo+emir, yuz: cengo.normal}
**EMİR [normal]:** Ama hesabıma bir şey yatıyor, iki aydır. Sormadım. Yatıyorsa yatsın dedim. {ekran: cengo+emir, yuz: cengo.normal}
*Cengo bir an hiçbir şey demiyor.* {gir: cengo, ekran: cengo, yuz: cengo.yumusak}
**PERİ [yumusak]:** Kimliğini kime verdin, Emir? {kime: emir, ekran: peri+emir, yuz: emir.normal}
**EMİR [normal]:** Müdüre. Bir avukat bey telefonla aramış, "sigorta için" demiş. Ben görmedim, müdür verdi. {kime: peri, ekran: peri+emir, yuz: peri.yumusak}
**EMİR [normal]:** Bir kere ben açtım telefonu. Sesi benim gibi gençti. Kibar ama. {ekran: peri+emir, yuz: peri.yumusak}
*Cengo cebinden buruşuk bir kart çıkarıp Emir'in avucuna koyuyor.* {kare: K162}
**CENGO [yumusak]:** Bir gün "bu para nereden geliyor" diye sorarsan, beni ara. {kime: emir, kare: K162}
**EMİR [gulen]:** "Paravan Dedektiflik." Abi, sen dedektif misin? {kime: cengo, kare: K162}
**CENGO [kas]:** Bordroda öyle yazıyor. {kime: emir, kare: K162}

## ipucu kulis
⚙ arka: A66 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Maslak, stüdyonun kulisi: ayna, ampuller, çiçekler. Peri yalnız; Gizem telefonda (Pınar'la mesajlaşıyor). Nevzat her çekim gecesi gelip Bahar'ı izliyor; kartsız çiçekleri o bırakıyor. Peri çiçeği koklar.
⚙ Kural 21c: Nevzat'ın sakladığı şey (aşk) — kimseyi göstermez, Nevzat'ı yalnız "saklayan" yapar.

*Maslak. Stüdyonun kulisi: ampullü bir ayna, sandalyede bir önlük, masada kartsız bir buket.* {arka: A66, mekan}
*Peri aynanın önünde. Telefonu çalıyor.* {ekran: peri, yuz: peri.normal}
**GİZEM_TEL:** Peri Hanım! Pınar'la mesajlaşıyoruz. Dedikodu var. {kare: K199}
**PERİ [merakli]:** Pınar'ı ne zaman tanıdın, Gizem? {ekran: peri, yuz: peri.merakli}
**GİZEM_TEL:** On dakika önce. Önemli değil. Kulisteki çiçekleri kim bırakıyor, biliyor musunuz? {kare: K199}
**GİZEM_TEL:** Nevzat Bey. Her çekim gecesi geliyor, köşede oturup Bahar Hanım'ı izliyor. Yıllardır. {kare: K199}
**GİZEM_TEL:** Kimse bilmesin istiyormuş. Çiçeklere kart koymuyor. Romantik değil mi? {kare: K199}
*Peri buketten bir çiçek alıp kokluyor.* {kare: K163}
**PERİ [yumusak]:** Romantik, Gizem. Ama bir muhasebeci için tehlikeli bir sır. {kare: K163}
**GİZEM_TEL:** Neden? {kare: K199}
**PERİ [kas]:** Gece nerede olduğunu söyleyemeyen adama herkes başka bir şey yakıştırır. {ekran: peri, yuz: peri.kas}

---

## sahne ters_kose
⚙ arka: A67 · figurler: peri, cengo · set: kilik · cset: sofor
⚙ akış: Akşam 19.00, Kurtuluş'taki mutfak atölyesi; lansman provası, tezgâhlarda kavanoz kuleleri; köşede bir soyunma paravanı. Cengo şoför üniformasıyla Tarkan'ı kapıya getirir. Peri paravanın arkasından aralıktan bakar: genç, sarı saçlı, kaşında iz — Nihat değil. "Bu o değil." Cengo: "Yöntem aynı ama." Peri: "Yöntem çalınabilir." Ardından Kim yaptı?.
⚙ HER YOLDA, Kim yaptı?'dan önce (kod eki gerekiyor, dosya başındaki not). Hiçbir kanıtı anmaz; yalnız Tarkan'ın yüzünü gösterir.

*Akşam. Kurtuluş'ta Bahar'ın mutfak atölyesi: tezgâhlarda kavanozdan kuleler, köşede bir soyunma paravanı.* {arka: A67, kare: K164}
*Peri paravanın arkasına saklanmış. Kapıda Cengo, kasketiyle, bir adama kapıyı açıyor.* {kare: K165}
**CENGO [normal]:** Buyurun, Tarkan Bey. Atölye burası. {kare: K165}
*Kare: paravanın aralığından. Lacivert yelekli takımlı, açık sarı saçlı, kaşında ince bir iz olan genç bir adam; telefonu elinde, gülümsüyor.* {kare: K166}
**TARKAN [gulen]:** Bahar Hanım! Büyük gece. Yatırımcımız dokuzda burada. {kare: K166}
*Peri paravanın arkasında donup kalıyor.* {kare: K167}
**PERİ [sasirmis]:** *(fısıldayarak)* Cengo. Bu o değil. {kare: K167}
*Cengo paravanın yanına geliyor, sesini alçaltıyor.* {kare: K168}
**CENGO [kas]:** Nasıl değil? Vekâlet, firma, bordro. Yöntem aynı ama. {kime: peri, kare: K168}
**PERİ [sinirli]:** Yöntem çalınabilir, Cengo. Bu adamı hayatımda hiç görmedim. {kime: cengo, kare: K168}
**CENGO [normal]:** O zaman baştan düşün, Peri. Bu odadaki üç kişiden hangisi? {kime: peri, kare: K168}

---

## sahne yuzlesme_dogru
⚙ arka: A67 · figurler: peri, cengo · set: manto8 · cset: sofor
⚙ akış: 19.20, atölyenin mutfağı. Bahar, Nevzat, Fikret (Bahar notlar için çağırdı), Tarkan. Peri kılığı çıkarmış, mantoda; Cengo kasketsiz. Ortak açılış: "Bu yöntemi ben bilirim… Bunu bana Nihat Kora yaptı." Peri iki kilidi sayar; Tarkan "Perihan Hanım" der, ağzından kaçar. Telefonu titrer; Nihat'ın adı paniğe sokar. Kapıya koşar.
⚙ Kanıtı adıyla anmaz ("şifre ve vekâlet" — iki olgunun ortak dili, hangi çift seçilirse seçilsin doğru).

*Atölyenin mutfağı. Bahar tezgâhın başında; Nevzat bir kenarda, Fikret kapının yanında, kollarını kavuşturmuş. Tarkan telefonuyla.* {kare: K169}
*Peri paravanın arkasından çıkıyor; önlüğü, kepi, gözlüğü çıkarmış, kırmızı mantosuyla.* {kare: K200, set: manto8}
**BAHAR [sasirmis]:** Perihan? Siz yardımcı değil miydiniz? {gir: bahar, kime: peri, ekran: peri+bahar, yuz: peri.normal}
**PERİ [normal]:** Bu yöntemi ben bilirim. Vekâlet, olmayan bir firma, bordroda bir yabancı. {kime: bahar, ekran: peri+bahar, yuz: bahar.sasirmis}
**PERİ [kas]:** Bunu bana Nihat Kora yaptı. Bütün paramla gitti. {ekran: peri+bahar, yuz: bahar.sasirmis}
**PERİ [kas]:** Tarkan Bey. Bahar Hanım'ın parasını siz çektiniz. {gir: tarkan, kime: tarkan, ekran: peri+tarkan, yuz: tarkan.normal}
**PERİ [kas]:** Paranın çıkması için iki şey lazımdı: şifre ve vekâlet. İkisi de yalnız sizde vardı. {ekran: peri+tarkan, yuz: tarkan.normal}
**TARKAN [gulen]:** Ben avukatım, Perihan Hanım. Bana her şeyi verirler. {kime: peri, ekran: peri+tarkan, yuz: peri.kas}
**PERİ [sinirli]:** Bana Perihan yalnız bir kişi derdi. {kime: tarkan, ekran: peri+tarkan, yuz: tarkan.gulen}
*Tarkan'ın gülümsemesi düşüyor. Elindeki telefon titriyor; ekranda bir isim: "N."* {kare: D33}
**TARKAN [panik]:** Ben… arabayı getireyim. {cik, kime: cengo, ekran: cengo+tarkan, yuz: cengo.kas}
*Tarkan kapıya koşuyor.* {kare: K170}

## sahne yuzlesme_zayif
⚙ arka: A67 · figurler: peri, cengo · set: manto8 · cset: sofor
⚙ akış: Ortak açılış; Peri Tarkan'ı suçlar ama tutturamaz; Tarkan "vekâlet bende, işim bu". Peri Nihat'ın adını anar; telefon titrer; kaçar.

*Atölyenin mutfağı. Bahar tezgâhın başında; Nevzat bir kenarda, Fikret kapının yanında, kollarını kavuşturmuş. Tarkan telefonuyla.* {kare: K169}
*Peri paravanın arkasından çıkıyor; önlüğü, kepi, gözlüğü çıkarmış, kırmızı mantosuyla.* {kare: K200, set: manto8}
**BAHAR [sasirmis]:** Perihan? Siz yardımcı değil miydiniz? {gir: bahar, kime: peri, ekran: peri+bahar, yuz: peri.normal}
**PERİ [normal]:** Bu yöntemi ben bilirim. Vekâlet, olmayan bir firma, bordroda bir yabancı. {kime: bahar, ekran: peri+bahar, yuz: bahar.sasirmis}
**PERİ [kas]:** Tarkan Bey. Bahar Hanım'ın parasını siz çektiniz. {gir: tarkan, kime: tarkan, ekran: peri+tarkan, yuz: tarkan.normal}
**TARKAN [gulen]:** Vekâlet bende, evet; işim bu. Kanıtınız ne, hanımefendi? {kime: peri, ekran: peri+tarkan, yuz: peri.kas}
**PERİ [utanmis]:** Elimde bir şey var, ama sizi köşeye sıkıştıracak kadar değil. {kime: tarkan, ekran: peri+tarkan, yuz: tarkan.gulen}
**PERİ [kas]:** Yalnız şunu bilin: bu yöntemi bana Nihat Kora diye biri öğretti. Bütün paramla. {ekran: peri+tarkan, yuz: tarkan.gulen}
*Tarkan'ın gülümsemesi düşüyor. Elindeki telefon titriyor; ekranda bir isim: "N."* {kare: D33}
**TARKAN [panik]:** Ben… arabayı getireyim. {cik, kime: cengo, ekran: cengo+tarkan, yuz: cengo.kas}
*Tarkan kapıya koşuyor.* {kare: K170}

## sahne yuzlesme_nevzat
⚙ arka: A67 · figurler: peri, cengo · set: manto8 · cset: sofor
⚙ akış: Ortak açılış; Peri Nevzat'ı suçlar; Nevzat kekeler: "o geceler stüdyodaydım"; Bahar ona bakar; Nevzat susar. Tarkan "muhasebe bulundu" diye ceketini alır; Peri Nihat'ın adını anar; telefon titrer; Tarkan kaçar.

*Atölyenin mutfağı. Bahar tezgâhın başında; Nevzat bir kenarda, Fikret kapının yanında, kollarını kavuşturmuş. Tarkan telefonuyla.* {kare: K169}
*Peri paravanın arkasından çıkıyor; önlüğü, kepi, gözlüğü çıkarmış, kırmızı mantosuyla.* {kare: K200, set: manto8}
**BAHAR [sasirmis]:** Perihan? Siz yardımcı değil miydiniz? {gir: bahar, kime: peri, ekran: peri+bahar, yuz: peri.normal}
**PERİ [normal]:** Bu yöntemi ben bilirim. Vekâlet, olmayan bir firma, bordroda bir yabancı. {kime: bahar, ekran: peri+bahar, yuz: bahar.sasirmis}
**PERİ [kas]:** Nevzat Bey. Ödemeler sizin şifrenizle çıktı. Parayı siz çektiniz. {gir: nevzat, kime: nevzat, ekran: peri+nevzat, yuz: nevzat.gergin}
**NEVZAT [utangac]:** Ben mi? Ben o geceler… Ben o geceler stüdyodaydım. {kime: peri, ekran: peri+nevzat, yuz: peri.kas}
*Bahar dönüp Nevzat'a bakıyor. Nevzat kızarıp susuyor.* {kare: K171}
**TARKAN [gulen]:** Demek muhasebe bulundu. Ben de yatırımcıyı karşılayayım. {gir: tarkan, kime: bahar, ekran: bahar+tarkan, yuz: bahar.sasirmis}
**PERİ [kas]:** Bir dakika, Tarkan Bey. Bu yöntemi bana Nihat Kora diye biri öğretti. Tanır mısınız? {gir: tarkan, kime: tarkan, ekran: peri+tarkan, yuz: tarkan.gulen}
*Tarkan'ın gülümsemesi düşüyor. Elindeki telefon titriyor; ekranda bir isim: "N."* {kare: D33}
**TARKAN [panik]:** Ben… arabayı getireyim. {cik, kime: cengo, ekran: cengo+tarkan, yuz: cengo.kas}
*Tarkan kapıya koşuyor.* {kare: K170}

## sahne yuzlesme_fikret
⚙ arka: A67 · figurler: peri, cengo · set: manto8 · cset: sofor
⚙ akış: Ortak açılış; Peri Fikret'i suçlar; Fikret bağırır: "Ben uyardım! Notları ben yazdım." Bahar donar. Tarkan geri çekilir; Peri Nihat'ın adını anar; telefon titrer; kaçar.

*Atölyenin mutfağı. Bahar tezgâhın başında; Nevzat bir kenarda, Fikret kapının yanında, kollarını kavuşturmuş. Tarkan telefonuyla.* {kare: K169}
*Peri paravanın arkasından çıkıyor; önlüğü, kepi, gözlüğü çıkarmış, kırmızı mantosuyla.* {kare: K200, set: manto8}
**BAHAR [sasirmis]:** Perihan? Siz yardımcı değil miydiniz? {gir: bahar, kime: peri, ekran: peri+bahar, yuz: peri.normal}
**PERİ [normal]:** Bu yöntemi ben bilirim. Vekâlet, olmayan bir firma, bordroda bir yabancı. {kime: bahar, ekran: peri+bahar, yuz: bahar.sasirmis}
**PERİ [kas]:** Fikret Usta. Bu yöntemi bilen biri yaptı. Siz biliyordunuz. {gir: fikret, kime: fikret, ekran: peri+fikret, yuz: fikret.huysuz}
**FİKRET [ofkeli]:** Ben uyardım! Notları ben yazdım! "Avukatına güvenme" dedim, kimse dinlemedi! {kime: peri, ekran: peri+fikret, yuz: peri.kas}
*Bahar elindeki kavanozu tezgâha bırakıp Fikret'e bakıyor.* {kare: K172}
*Tarkan bir adım geri çekiliyor.* {gir: tarkan, gi: normal, ekran: tarkan}
**PERİ [kas]:** Avukattan söz açılmışken, Tarkan Bey: bu yöntemi bana Nihat Kora diye biri öğretti. Tanır mısınız? {kime: tarkan, ekran: peri+tarkan, yuz: tarkan.normal}
*Tarkan'ın yüzü bembeyaz oluyor. Elindeki telefon titriyor; ekranda bir isim: "N."* {kare: D33}
**TARKAN [panik]:** Ben… arabayı getireyim. {cik, kime: cengo, ekran: cengo+tarkan, yuz: cengo.kas}
*Tarkan kapıya koşuyor.* {kare: K170}

## sahne kovalamaca
⚙ arka: A68 · figurler: peri, cengo · set: manto8 · cset: sofor
⚙ akış: Tarkan arabaya atlar; direksiyonda Cengo. "Yeniköy'e, yalıya!" Peri mantoyu arabaya atıp önlükle kapanmakta olan bagaja, lansman kasalarının arasına atlar (`kilik`). Sahil yolu: Tarkan telefonda payını ister; bagajda kavanozlar kırılır, Peri reçel olur (`recel`). Yalı: Tarkan iskeleye koşar; yalıdan valizli Nihat çıkar. Peri bagajdan doğrulur; Nihat: "Perihan?" İkisi tekneye koşar; reçel izine basıp kayar, birbirine çarpar, balıkçı ağına düşer. Cengo ipi bağlar. Hortum: Peri temizlenir, manto omzunda (`manto8_son`). Cengo'nun düğmesi kopmuş. İtiraf iskelede, ağın içinden.
⚙ Her sonuçta aynı. Peri erotik + gülünç; felaketi vişne reçeli (müşterinin markası). Şans: reçel izi. Kural 18: kimse yaralanmaz, alay edilmez; ağ yumuşak, ikisi kıpırdamadan durur. Bahar, Nevzat, Fikret itirafı duymaz.

*Atölyenin önü, gece. Tarkan siyah bir arabanın arka kapısını açıp içeri atlıyor. Direksiyonda kasketiyle Cengo.* {arka: A68, kare: K173}
**TARKAN [panik]:** Sür! Yeniköy'e, yalıya! {kare: K173}
**CENGO [kas]:** Başüstüne, beyim. {kare: K173}
*Peri koşarak geliyor; mantosunu ön koltuğa fırlatıyor, Bahar'ın önlüğünü kapıp kapanmakta olan bagaja, lansman kasalarının arasına atlıyor.* {kare: K174, set: kilik}
**PERİ [sinirli]:** Planlamıştım. {kare: K174}
*Sahil yolu, gece. Boğaz'ın ışıkları. Araba virajları hızla alıyor.* {arka: A69, kare: K175}
**TARKAN [panik]:** *(telefonda)* Geliyorum. Payımı hazırla, tekneyi çalıştır. {kare: K175}
**CENGO [normal]:** Emniyet kemeriniz, beyim. {kare: K175}
*Bagajın içi: her virajda bir kavanoz devriliyor, kırılıyor. Peri baştan aşağı vişne reçeli; gözlüğü yamuk, saçı kıpkırmızı.* {kare: K176, set: recel, peri: sinirli}
**PERİ [sinirli]:** Bahar Hanım'ın reçeli gerçekten çok iyi. Her yerime işledi. {kare: K176}
*Yeniköy. Boğaz kıyısında beyaz bir yalı; önünde uzun, ahşap bir iskele, ucunda bir tekne.* {arka: A70, kare: K177}
*Tarkan arabadan fırlayıp iskeleye koşuyor. Yalının kapısından beyaz keten takımlı, gümüş saçlı, elinde deri bir valizle bir adam çıkıyor.* {kare: K178}
*Bagaj açılıyor; Peri reçel damlayarak doğruluyor, bagajın kapağına basıp ayağa kalkıyor, adamı gösteriyor.* {kare: K179}
**NİHAT [sasirmis]:** Perihan? {kare: K179}
**PERİ [sinirli]:** Nihat. Üç aydır seni arıyordum. Bir reçel kavanozunun içinden çıkacağımı söyleselerdi inanmazdım. {kare: K179}
*Nihat ile Tarkan tekneye koşuyor. İskelede Peri'nin bıraktığı reçel izine basıyorlar; ikisi de kayıyor, birbirine çarpıyor, iskelenin ucundaki balıkçı ağına birlikte düşüyor. Ağ üstlerine kapanıyor.* {kare: K180}
*Cengo ağın ipini iskelenin babasına sıkıca bağlıyor. Eldiveni reçelli, ceketinin bir düğmesi kopmuş.* {kare: K181, cset: sofor_dugmesiz}
**CENGO [gulen]:** İkisi bir torbada, beyim. Bahşiş? {kare: K181}
*Peri Cengo'nun koluna tutunmuş, kaymamaya çalışıyor; reçelli, saçı dağınık, gülüyor.* {kare: K182}
**PERİ [kas]:** Kimse kımıldamasın. Bu iskele benden kaygan. {kare: K182}
*Cengo yalının bahçesinden bir hortum çekiyor. Peri önlüğü çıkarıyor, yüzünü, kollarını yıkıyor. Cengo arabadan mantoyu getirip omzuna koyuyor; saçında hâlâ reçel.* {kare: K183, set: manto8_son}
**CENGO [yumusak]:** Mantonu hep ön koltuğa atıyorsun. Ben de hep getiriyorum. {gir: cengo, kime: peri, ekran: peri+cengo, yuz: peri.kas}
**PERİ [yumusak]:** Bu sefer kuşağını da getir. {kime: cengo, ekran: peri+cengo, yuz: cengo.yumusak}
*İskele. Ağın içinde Nihat ile Tarkan yan yana oturuyor; Peri ve Cengo karşılarında.* {kare: K184}
**TARKAN [itiraf]:** Adım Tarkan değil, Ozan. Avukat da değilim; onun adamıyım. {gir: tarkan, kime: peri, ekran: peri+tarkan, yuz: peri.kas}
**TARKAN [itiraf]:** Yıllarca evrakını taşıdım. Paravan'ın kâğıtlarını da ben taşıdım; sizi o yüzden tanıdım, Perihan Hanım. {ekran: peri+tarkan, yuz: peri.kas}
**TARKAN [itiraf]:** Yöntemi ondan öğrendim. Bu gece para girince hesabı boşaltacaktım; payımı almaya geliyordum. {ekran: peri+tarkan, yuz: peri.kas}
*Nihat bir süre susuyor. Sonra gözü iskelenin ucundaki tekneye kayıyor.* {gir: nihat, gi: normal, ekran: nihat}
**NİHAT [normal]:** Senin paran hâlâ teknede, Perihan. Valizde. Hiç harcamadım. {kime: peri, ekran: peri+nihat, yuz: peri.kas}
**CENGO [kas]:** Benim maaşım da mı oradan yatıyordu? {kime: nihat, ekran: cengo+nihat, yuz: nihat.normal}
**NİHAT [normal]:** Senin maaşın şirketin süsüydü, delikanlı. Seni hiç görmedim. Kimliğin yeterdi. {kime: cengo, ekran: cengo+nihat, yuz: cengo.kas}

---

## sahne karar_soru
⚙ arka: A70 · figurler: peri, cengo, nihat · set: manto8_son · cset: sofor_dugmesiz · secim_kare: K186
⚙ Kural 22a: kararı sahnedeki biri sorar — itiraftan hemen sonra, iskelede, ağın içinden Nihat. Ekranda Peri, Nihat ve Ozan (ağda), Cengo ipin başında.

*Nihat ağın içinden, eski avukat sesiyle konuşuyor.* {kare: K185}
**NİHAT [pazarlik]:** Paranın yarısı senin, Perihan. Bu akşam burada hiçbir şey olmadı. Ne dersin? {kime: peri, kare: K185}

## cengo_kanit
⚙ Kural 22c: oyuncu bu doğru kanıtı ELİNDE tutup suçlamada kullanmadıysa Cengo büroda söyler. Satır yalnız kendi kanıtını
⚙ anar. Biçim: **olgu [Cengo ifadesi]:** metin {yuz: peri.x}.

**sifre_iki [normal]:** Şifreyi bilen iki kişiydi, Peri. Biri o adamdı. Onu söyleseydin "kanıtınız ne" diyemezdi. {yuz: peri.kas}
**kurulus_vekalet [normal]:** Firmayı vekâletle açmışlar, Peri. Vekâlet kimdeydi, Yusuf Efendi'nin kâğıdı yazıyordu. {yuz: peri.kas}
**odeme_gecesi [kas]:** Nevzat Bey o geceler kulisteydi, Peri. Para kendi kendine çıkmadı. {yuz: peri.utanmis}
**ortak_iptal [normal]:** Fikret Usta vekâleti bir yıl önce iptal ettirmişti, Peri. Duvarda asılıydı. {yuz: peri.kas}

---

## cozum
⚙ "Dosya kapandı" ekranı. YOL: suçluyu kanıtlayan her doğru çift, sade dille. MASUM <id>: neden masum (yalnız yüzleşme + itirafın söylediği).

**YOL:** Ödemeler için şifre lazımdı; şifreyi iki kişi biliyordu (Nevzat ya da Tarkan) + firmayı kurmak için vekâlet lazımdı; vekâlet iki kişideydi (Fikret ya da Tarkan). İkisinde de olan tek kişi Tarkan'dı.
**YOL:** Şifreyi iki kişi biliyordu (Nevzat ya da Tarkan) + ödeme gecelerinde Nevzat sabaha kadar stüdyodaydı; kalan Tarkan'dı.
**YOL:** Vekâlet iki kişideydi (Fikret ya da Tarkan) + Fikret'in vekâleti firma kurulmadan bir yıl önce iptal edilmişti; kalan Tarkan'dı.
**MASUM nevzat:** Nevzat Bey masumdu: o geceler stüdyodaydı; parayı çeken, kendini avukat diye tanıtan Ozan'dı.
**MASUM fikret:** Fikret Usta masumdu: isimsiz notları o yazmıştı, Bahar Hanım'ı uyarmak için.

## kanit
⚙ Kim yaptı? ekranında kanıtın kısa adı. 2–4 kelime; kişiyi suçlamaz, olayı adlandırır.

**odeme_suphe:** Olmayan tedarikçi
**nevzat_suphe:** Muhasebecinin şifresi
**fikret_suphe:** İsimsiz notlar
**tarkan_suphe:** Avukatın vekâleti
**sifre_iki:** Şifreyi bilenler
**nevzat_saklar:** Gece taksi fişleri
**odeme_gecesi:** Ödeme geceleri
**ortak_kurban:** Fikret'in eski yarası
**ortak_iptal:** Duvardaki noter belgesi
**kurulus_vekalet:** Posta kutusunun kâğıdı
**bordro_genc:** Bordrodaki genç
**nevzat_ask:** Kartsız çiçekler

## ani
⚙ Anı defterinde vakanın hatırlatması. Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği. 2–3 cümle.

**ANI:** Televizyonun aşçısı Bahar Hanım'ın şirketinden para çekiliyordu. Çeken, "avukat" Tarkan Bey'di; gerçek adı Ozan'dı, Peri'yi dolandıran Nihat Kora'nın adamıydı. Peri ikisini aynı gece, Yeniköy'de bir iskelede yakaladı.

## hikaye
⚙ "Dosyanın tamamı" ekranı. Gerçekte ne oldu, olay sırasıyla; masumlar neredeydi.

**HİKÂYE:** Avukat Nihat Kora, Peri'nin hesaplarını boşaltıp yurt dışına kaçmıştı. Yıllarca evrakını taşıyan adamı Ozan, yöntemini ezbere biliyordu: genel vekâlet, vekâletle kurulan hayalet firmalar, gerçek görünsünler diye bordroya yazılan gerçek kişiler. Nihat dönünce yeni bir av seçtiler; Ozan "Avukat Tarkan" olarak öne çıktı, Nihat Yeniköy'de kiralık bir yalıda saklandı.
**HİKÂYE:** Tarkan, kendi markasını kuran televizyon aşçısı Bahar Hanım'ın programına konuk oldu ve vekâletini aldı. Vekâletle "Kavanoz Ambalaj" diye bir firma kurdu; adresi Mecidiyeköy'de bir posta kutusuydu. Firmanın bordrosuna, Karaköy otoparkındaki genç Emir'i yazdı; kimliğini müdürden telefonla almıştı.
**HİKÂYE:** Muhasebeci Nevzat Bey, "denetim için" isteyen avukata şifresini kendi verdi. Tarkan üç çekim gecesi, gece ikide, o şifreyle dışarıdan ödeme gönderdi. O gecelerin üçünde de Nevzat stüdyodaydı: yıllardır âşık olduğu Bahar Hanım'ı kuliste izliyor, kimse bilmesin istiyordu.
**HİKÂYE:** Bahar'ın eski ortağı Fikret Usta, yıllar önce aynı yöntemle soyulmuştu. Bahar'ın vekâletini bir yıl önce noterde iptal ettirmiş, belgeyi lokantasının duvarına asmıştı. Tarkan'ı televizyonda görünce yöntemi sezdi; Bahar küs olduğu için adını yazmadan "Avukatına güvenme" diye notlar bıraktı. Herkes onları tehdit sandı.
**HİKÂYE:** Lansman gecesi yatırımcının parası girecek, Tarkan hesabı boşaltıp payını almak için Nihat'a gidecekti. Bahar ödemeleri bankadan öğrendi ve Peri'ye geldi.

## karar polis
⚙ etiket: İkisini de polise teslim et

**SEÇENEK:** “Polisi arıyorum, Nihat. İkiniz de.”
**SONUÇ:** Peri telefonu açtı. Polis geldi, ağı kesip Nihat'ı ve Ozan'ı götürdü. Bahar'ın parası bankada kaldı; yatırımcı gece imzaladı, lansman sürdü. Bahar elli bini ertesi sabah, bir kasa reçelle büroya getirdi. Teknedeki valiz delil diye mühürlendi. Peri'nin parası dava bitene kadar orada; belki hiç gelmeyecek.
**CENGO [gulen]:** Paranı mühürlediler, adamı götürdüler. Ben ikincisine razıyım, Peri. {yuz: peri.yumusak}
**DEFTER:** İkisini de polise verdim. Param bir valizde, mühürlü.

## karar anlas
⚙ etiket: Anlaş, payını al, sus

**SEÇENEK:** “Yarısını alıyorum. Sonra beni hiç görmediniz.”
**SONUÇ:** Cengo ağı açtı. Nihat valizden Peri'nin payını sayıp eline verdi; Ozan'la tekneye binip karanlığa çıktılar. O gece Bahar'ın hesabı boşaldı. Yatırımcı ertesi sabah çekildi; lansman ertelendi, kavanozlar depoya kaldı. Bahar elli bini yine de ödedi: "Siz elinizden geleni yaptınız." Peri'nin çantası ağırdı.
**CENGO [sinirli]:** Paran geldi, Peri. Bahar Hanım'ın reçelleri depoda kaldı. Ben bir süre reçel yemem. {yuz: peri.utanmis}
**DEFTER:** Payımı aldım, sustum. İkisi gitti; Bahar kaybetti.

## karar oyun
⚙ etiket: Anlaşır gibi yap, sonra teslim et

**SEÇENEK:** “Anlaştık, Nihat.”
**SONUÇ:** Peri valizden payını aldı, Nihat'ın ağın arasından uzanan elini sıktı. Sonra telefonu açtı. Polis ikisini ağdan çıkardı; Nihat arkasından bağırdı: "Sözünü bozdun, Perihan!" Bahar'ın parası kurtuldu, lansman sürdü. Polis Peri'nin kucağındaki çantayı sordu. Peri "Lansman reçeli" dedi; Cengo başını salladı.
**CENGO [kas]:** Ona kendi oyununu oynadın. Polise yalanı ben de söyledim; ortağız artık, Peri. {yuz: peri.sinirli}
**DEFTER:** Anlaştım, sonra ikisini de verdim. Polise yalan söyledik.

## karar ozan_birak
⚙ etiket: Adamı bırak, avukatı teslim et

**SEÇENEK:** “Sen git, Ozan. O kalıyor.”
**SONUÇ:** Cengo ağı açtı, Ozan'ı çekip çıkardı. Ozan arkasına bakmadan yokuşa koştu. Polis Nihat'ı götürdü; Bahar'ın parası kurtuldu, lansman sürdü. Peri'nin parası Nihat'ın davasına karıştı; hiç geri gelmeyecek. Ozan'ın nereye gittiğini kimse bilmiyor. Belki bir gün başka birinin kapısını çalar.
**CENGO [yumusak]:** Bir gence şans verdin, Peri. Bana da biri vermişti, bir bordroda. {yuz: peri.yumusak}
**DEFTER:** Ozan'ı bıraktım, Nihat'ı verdim. Param gitti. Ozan bir yerde.

---

## sahne kapanis
⚙ arka: A71 · figurler: peri, cengo · set: manto8_son · cset: ceket8
⚙ akış: Büro, gece. Peri kırmızı mantoda, kuşağı çözük, saçında reçel. Sezonun başladığı yer. Gizem çay getirir, saçından reçel toplar. Cengo kasketi çıkarır, kendi ceketini giyer. Masada Bahar'ın bir kavanozu. Bağ düşük: Cengo "alacağım duruyor" der, çıkar; Peri tek başına reçel yer; telefon çalmaz. Bağ yüksek: Peri Cengo'nun yakasını düzeltir, "Cengo, ben…" — telefon çalar; yeni müşteri. Kavuşmazlar.
⚙ Sezon finali (kural 12a, eşik +1). Kanon: manto "evden çıkardığı tek giysi".

*Gece. Büro. Peri masasında, kırmızı mantosuyla; kuşağı hâlâ çözük, saçında reçel. Masada bir kavanoz vişne reçeli.* {kare: K187}
*Cengo şoför kasketini askıya asmış; üstünde kendi eski ceketi.* {kare: K198}
*Gizem içeri geliyor.* {gir: gizem, gi: triko, ekran: gizem}
**GİZEM [triko]:** Saçınızda hâlâ reçel var, Peri Hanım. {gir: gizem, kime: peri, ekran: peri+gizem, yuz: peri.normal}
**PERİ [kas]:** Vişne, Gizem. Bahar Hanım'ın markası. Çok iyi tutuyor. {kime: gizem, ekran: peri+gizem, yuz: gizem.triko}
**GİZEM [triko]:** Sezon başında da bu mantoyla gelmiştiniz. Kuşağı bağlıydı ama. {kime: peri, ekran: peri+gizem, yuz: peri.kas}
**PERİ [yumusak]:** O sabah her şey bağlıydı, Gizem. Sonra hepsi çözüldü. {kime: gizem, ekran: peri+gizem, yuz: gizem.triko}
**CENGO [normal]:** Alacağım hâlâ duruyor, haberin olsun. Patron bulundu ama maaşı yok. {bag: dusuk, kime: peri, ekran: peri+cengo, yuz: peri.yumusak}
*Cengo kapıdan çıkıyor. Peri kavanozu açıp tek başına bir kaşık reçel yiyor.* {bag: dusuk, kare: K188}
*Peri kalkıp Cengo'nun önüne geçiyor; ceketinin yakasını düzeltiyor. Cengo kıpırdamıyor.* {bag: yuksek, kare: K189}
**PERİ [yumusak]:** Cengo, ben… {bag: yuksek, kime: cengo, kare: K189}
*Masadaki telefon çalıyor. İkisi de telefona bakıyor.* {bag: yuksek, kare: K190}
**PERİ [normal]:** *(telefonu açarak)* Paravan Dedektiflik. {bag: yuksek, kare: K190}
**TELEFON:** İyi akşamlar. Bir işim var. Yarın sabah gelebilir miyim? {bag: yuksek, kare: K190}
*Peri Cengo'ya bakıyor. Cengo gülümseyip kapıya gidiyor, kapıyı açık bırakıyor.* {bag: yuksek, kare: K191}
**GİZEM [triko]:** Hıh. {bag: yuksek, gir: gizem, kime: peri, ekran: peri+gizem, yuz: peri.yumusak}

---

## Satır → görsel (yeni görseller)

Görselsiz turda hepsi gri yer tutucu. Tam liste ve istemler adım 8'de. Kodlar V7'nin son kodlarından sonra: A60, D28, K155.

| kod | ne | nerede |
|---|---|---|
| A60 | büro, gündüz (Vaka 8 için yeniden); masada kapalı kadife kutu | giriş, konuşma |
| A61 | Kurtuluş: atölyenin üstünde dar muhasebe odası, klasörler, hesap makinesi | nevzat |
| A62 | Maslak: televizyon stüdyosu, ışıklar altında mutfak dekoru, kameralar | studyo |
| A63 | Samatya: küçük lokanta, duvarlarda eski fotoğraflar ve çerçeveli bir belge (yazı okunmaz) | fikret |
| A64 | Mecidiyeköy: dar kargo dükkânı, duvar boyu numaralı posta kutuları (numara dışında yazı yok) | posta |
| A65 | Karaköy: otopark, girişte görevli kulübesi (tabela/marka yok) | emir |
| A66 | stüdyo kulisi: ampullü ayna, masada kartsız buket | kulis |
| A67 | Kurtuluş: mutfak atölyesi, tezgâhlarda kavanoz kuleleri (etiket okunmaz), köşede soyunma paravanı | ters köşe, yüzleşmeler |
| A68 | atölyenin önü, gece, siyah araba | kovalamaca 1 |
| A69 | sahil yolu, gece, Boğaz ışıkları | kovalamaca 2 |
| A70 | Yeniköy: beyaz yalı, uzun ahşap iskele, ucunda tekne, balıkçı ağı | kovalamaca 3–4, itiraf, karar |
| A71 | büro, gece (Vaka 8 için yeniden) | kapanış |
| D28 | ekranda alt alta üç ödeme satırı (rakam, ad okunmaz) | nevzat |
| D29 | masada bir yığın taksi fişi (yazı okunmaz) | nevzat |
| D30 | duvarda çerçeveli, noter mühürlü kâğıt (yazı okunmaz) | fikret |
| D31 | tezgâhta açık kalın defter (yazı okunmaz) | posta |
| D32 | deftere iliştirilmiş noter kâğıdı, Peri'nin eli (yazı okunmaz) | posta |
| D33 | Tarkan'ın elinde titreyen telefon, ekranda tek harf "N" | yüzleşmeler |
| K155 | giriş açılışı: Peri kırmızı mantoda, kuşak çözük, masada kadife kutu (yalnız) | giriş |
| K156 | Bahar eşikte: platin pixie, çiçekli kaftan, elinde reçel kavanozu (yalnız) | giriş |
| K157 | Peri ile Cengo birbirine bakıyor; Bahar konuşuyor | giriş |
| K158 | Peri paravanın arkasından aşçı yardımcısı kılığında çıkıyor (önlük, kep, gözlük, manto yakası ve bacak açık); Cengo'nun elinden simit düşmüş; Gizem | konuşma, çekicilik |
| K159 | Cengo şoför kasketiyle aynada kendine selam veriyor | konuşma |
| K160 | stüdyo: kılıktaki Peri kameranın önünde soğan doğruyor, ağlıyor | studyo |
| K161 | kargo dükkânı: Cengo kolileri rafa diziyor, Yusuf izliyor | posta |
| K162 | otopark: Cengo kartını Emir'in avucuna koyuyor | emir |
| K163 | kulis: Peri buketten bir çiçek koklıyor, elinde telefon | kulis |
| K164 | akşam atölye, tezgâhlarda kavanoz kuleleri, köşede paravan (kişisiz) | ters köşe |
| K165 | kapıda kasketli Cengo, bir adama kapıyı açıyor; paravanın kenarında Peri'nin önlüğü | ters köşe |
| K166 | paravan aralığından bakış: Tarkan (sarı saç, kaş izi, yelekli takım, telefon) | ters köşe |
| K167 | paravanın arkasında donmuş Peri (kılık) | ters köşe |
| K168 | Cengo paravanın yanında eğilmiş, Peri'yle fısıldaşıyor | ters köşe |
| K169 | atölyenin mutfağı: Bahar tezgâhta, Nevzat kenarda, Fikret kapıda, Tarkan telefonla; Peri ve Cengo | yüzleşme açılışı (dört sonuç) |
| K170 | Tarkan kapıya koşuyor | yüzleşme kaçışı (dört sonuç) |
| K171 | Bahar Nevzat'a bakıyor, Nevzat kızarmış | yüzleşme (Nevzat) |
| K172 | Bahar kavanozu tezgâha bırakmış, Fikret'e bakıyor | yüzleşme (Fikret) |
| K173 | gece, araba: arka koltukta Tarkan, direksiyonda kasketli Cengo | kovalamaca 1 |
| K174 | Peri (kılık) kapanmakta olan bagaja kasaların arasına atlıyor; bacakları dışarıda | kovalamaca 1 |
| K175 | sahil yolu: arabanın içi, Tarkan telefonda, Cengo direksiyonda | kovalamaca 2 |
| K176 | bagajın içi: Peri kasaların arasında yan yatmış, baştan aşağı vişne reçeli, gözlük yamuk | kovalamaca 2 |
| K177 | Yeniköy: yalı ve iskele, gece (kişisiz) | kovalamaca 3 |
| K178 | Tarkan iskeleye koşuyor; yalıdan valizli, beyaz keten takımlı Nihat çıkıyor | kovalamaca 3 |
| K179 | reçelli Peri bagaj kapağında ayakta, Nihat'ı gösteriyor; Nihat donmuş | kovalamaca 3 |
| K180 | Nihat ve Tarkan reçel izinde kayıp birbirine çarpıyor, balıkçı ağına düşüyor | kovalamaca 4 |
| K181 | Cengo ağın ipini iskele babasına bağlıyor; eldiveni reçelli, bir düğmesi kopuk | kovalamaca 4 |
| K182 | reçelli Peri Cengo'nun koluna tutunmuş, gülüyor | kovalamaca 4 |
| K183 | bahçe hortumu: Peri yüzünü yıkıyor; Cengo mantoyu omzuna koyuyor | kovalamaca sonu |
| K184 | iskele: ağın içinde Nihat ve Tarkan yan yana; Peri (manto) ve Cengo karşısında | itiraf |
| K185 | ağın içinden Nihat konuşuyor; Peri karşısında | karar sorusu |
| K186 | iskele: ağda Nihat ve Ozan, Peri (manto, saçta reçel) ortada, Cengo ipin başında; arkada tekne | seçim anı |
| K187 | büro, gece: Peri masada, kırmızı manto, kuşak çözük, saçta reçel; masada kavanoz | kapanış |
| K188 | Cengo kapıdan çıkıyor; Peri tek başına bir kaşık reçel yiyor | kapanış (bağ düşük) |
| K189 | Peri Cengo'nun ceket yakasını düzeltiyor, Cengo kıpırdamıyor | kapanış (bağ yüksek) |
| K190 | masadaki telefon çalıyor; ikisi de telefona bakıyor | kapanış (bağ yüksek) |
| K191 | Cengo kapıyı açık bırakmış; Peri telefonda; Gizem arkada | kapanış (bağ yüksek) |
| K196 | büro kapısı: Cengo eşikte, kendi ceketiyle, elinde iki simit (yalnız) | giriş |
| K197 | Gizem çay ocağından, elinde tanıtım çantası (önlük, kep, gözlük görünür) | konuşma |
| K198 | büro, gece: askıda şoför kasketi, Cengo kendi ceketiyle | kapanış |
| K199 | kulis: Peri aynanın önünde telefonla konuşuyor (yalnız; telefondaki Gizem'in sesi) | kulis |
| K200 | atölye: Peri paravanın arkasından mantoyla çıkıyor; herkes ona dönmüş | yüzleşme açılışı (dört sonuç) |
| K192–K195 | dört kararın ara karesi (polis: ağı kesen polisler, mühürlenen valiz; anlaş: tekne karanlığa çıkıyor, Peri'nin elinde ağır çanta; oyun: Peri Nihat'ın elini sıkarken telefon kulağında; Ozan'ı bırak: Ozan yokuşa koşuyor, Nihat ağda) | kararlar |
| Peri `manto8` | normal, kas, sinirli, merakli, sevincli, utanmis, sasirmis, yumusak | giriş, konuşma, yüzleşmeler |
| Peri `kilik` | normal, kas, merakli, utanmis, yumusak, sasirmis, sinirli | ipuçları, ters köşe |
| Peri `recel` | sinirli, kas | kovalamaca |
| Peri `manto8_son` | normal, kas, yumusak, utanmis, sinirli | kovalamaca sonu, itiraf, karar, kapanış |
| Cengo `sofor` | normal, kas, gulen, yumusak | her yerde |
| Cengo `sofor_dugmesiz` | kas, gulen, yumusak | kovalamaca sonu, itiraf |
| Cengo `ceket8` | normal, kas, gulen, yumusak, sinirli | kapanış, karar ve kanıt satırları |
| Gizem | triko | konuşma, kapanış |
| Bahar | gulen, sasirmis, endiseli, sert, normal | giriş, yüzleşme |
| Tarkan (Ozan) | normal, gulen, panik, itiraf | ters köşe, yüzleşme, kovalamaca |
| Nihat | sasirmis, normal, pazarlik | kovalamaca, itiraf, karar |
| Nevzat | normal, gergin, utangac | nevzat, yüzleşme |
| Fikret | huysuz, guler, huzunlu, ofkeli | fikret, yüzleşme |
| Pınar | telasli, normal, defter | studyo |
| Yusuf | normal, gulen | posta |
| Emir | gulen, sasirmis, normal | emir |
| Gizem (telefon), telefondaki ses | ses (kare üstünde) | kulis, kapanış |
