# VAKA 2 — GELİNLİK · DİYALOG

Üretim adımı 3 (`7_uretim_sureci.md`). Kaynak: `vaka2_form.md` (Onay 1, 10 Ekim 2026).
**Bu dosya sahnelerin ve karar metinlerinin TEK kaynağıdır.** Veriye elle yazılmaz:
`cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka2_diyalog.md V2`.

Yazım `vaka1_diyalog.md`'deki gibi. Vaka 2'nin kıyafetleri:
- **Peri:** `tayyor` (vakanın temel seti), `kremali` (pastadan sonra), `ortulu` (masa örtüsüne sarılı).
- **Cengo:** `takim` (ödünç lacivert takım, bordo kravat). Cengo'nun ifadeleri bu setten okunur.

**Görselsiz test için yer tutucu:** Vaka 2'nin bütün yeni görselleri (arka planlar, kareler,
figürler) görsel gelene kadar gri "görsel yok" kutusuyla görünür.

Her satır için kontrol sorusu: *ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu,
metnin andığı nesne görünüyor mu?* Kurallar: `arsiv/sablon/5_gorsel_sistemi.md` C.

---

## sahne giris
⚙ arka: A6 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ K17: büro, 15–25 replik, şüpheli (Lâl) anılıyor, ücret konuşuluyor, ipucu bilgisi yok.

*Öğle. Büro. Cengo ödünç bir lacivert takımın içinde; kolları bileklerinden kısa, boynunda bordo kravat.* {ekran: cengo, yuz: cengo.normal}
**PERİ [kas]:** Kravat mı o? {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
**CENGO [gulen]:** Arkadaşın nikâhından geldim. Şahittim. {ekran: peri+cengo, yuz: peri.kas}
**PERİ [kas]:** Neye? {ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [gulen]:** "Evet" dediklerine. {ekran: peri+cengo, yuz: peri.kas}
*Kapı çalınıyor. Eşikte uzun boylu, platin saçlı bir kadın; güneş gözlüğü başında, ipek elbisesi dar.* {gir: mujgan, gi: normal, ekran: mujgan}
**MÜJGAN [normal]:** Paravan Dedektiflik? Müjgan Ersoy. {gir: mujgan, kime: peri, ekran: peri+mujgan, yuz: peri.kas}
**MÜJGAN [kas]:** Siz şey değil misiniz… şampuan reklamındaki? {kime: peri, ekran: peri+mujgan, yuz: peri.kas}
**PERİ [kas]:** Kozmetik. Kendi markamdı. {ekran: peri+mujgan, yuz: mujgan.kas}
**MÜJGAN [normal]:** Şampuan işte. {ekran: peri+mujgan, yuz: peri.kas}
*Peri masanın kenarına oturup bacak bacak üstüne atıyor. Müjgan Hanım tayyörü baştan aşağı süzüyor; Cengo kravatına bakıyor.* {kare: K19}
**MÜJGAN [kas]:** Bu tayyör Lâl işi. {kime: peri, ekran: peri+mujgan, yuz: peri.kas}
**PERİ [normal]:** On yıllık. {ekran: peri+mujgan, yuz: mujgan.kas}
**MÜJGAN [kas]:** Tayyör de, siz de iyi muhafaza edilmişsiniz. {ekran: peri+mujgan, yuz: peri.normal}
**MÜJGAN [ofkeli]:** Kızımın gelinliği kayboldu. Düğüne üç gün var. Cumartesi, beş yüz davetli. {ekran: peri+mujgan, yuz: peri.normal}
**MÜJGAN [ofkeli]:** Lâl'in atölyesinde, mankendeydi. Dün akşam son prova. Bu sabah ustası Gülsüm bakmış: yok. {ekran: peri+mujgan, yuz: peri.normal}
**CENGO [kas]:** Kapı? {ekran: cengo+mujgan, yuz: mujgan.ofkeli}
**MÜJGAN [normal]:** Kırılmamış. Anahtar yalnız Lâl'de. {kime: cengo, ekran: cengo+mujgan, yuz: cengo.kas}
**MÜJGAN [ofkeli]:** Lâl batıyor, herkes biliyor. Gelinliğe İtalyan dantel koydum. {ekran: cengo+mujgan, yuz: cengo.kas}
**MÜJGAN [normal]:** Kızım Defne perişan. Organizatörüm Tolga Bey bugün otelde nedime provası yapıyor. Gelinlik yok diye düğün iptal olmaz. {ekran: cengo+mujgan, yuz: cengo.kas}
**PERİ [normal]:** Elli bin. {ekran: peri+mujgan, yuz: mujgan.normal}
**MÜJGAN [normal]:** Gelinlik üç yüz bin, siz elli bin. Makul. Gelinlik bulununca. Basına duyulmasın. {ekran: peri+mujgan, yuz: peri.normal}
**CENGO [kas]:** Makul dedi. Az istemişiz. {kime: peri, ekran: peri+cengo, yuz: peri.normal}
**PERİ [kas]:** Anlaştık. Önce atölye. {ekran: peri+cengo, yuz: cengo.kas}

## sahne konusma
⚙ arka: A6 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Ev sahibi Saadet Hanım ilk kez (kanon, Onay 1). Peri saklanır; Saadet yalnız Cengo'yu görür.

*Müjgan Hanım merdivenden iniyor. Kapı yine çalınıyor: üç kere.* {ekran: mujgan, yuz: mujgan.normal}
**PERİ [sasirmis]:** Ev sahibi. {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
**CENGO [kas]:** Nereden bildiniz? {ekran: peri+cengo, yuz: peri.sasirmis}
**PERİ [utanmis]:** Borçlu, kapıyı sesinden tanır. {ekran: peri+cengo, yuz: cengo.kas}
*Peri masanın altına giriyor. Cengo kapıyı açıyor: minyon, kızıl saçlı, kırmızı rujlu bir hanım; elinde örtülü bir tepsi.* {kare: K20}
**SAADET [normal]:** Peri Hanım yok mu? {gir: saadet, kime: cengo, ekran: cengo+saadet, yuz: cengo.kas}
**CENGO [normal]:** Yok. Ben buranın… çalışanıyım. {ekran: cengo+saadet, yuz: saadet.normal}
**SAADET [normal]:** Kira üç aydır yok. Börek getirdim. {kime: cengo, ekran: cengo+saadet, yuz: cengo.normal}
**CENGO [kas]:** Kira yok, börek var? {ekran: cengo+saadet, yuz: saadet.normal}
**SAADET [normal]:** Borçluya ikram edilir, oğlum. Utansın diye. Ben Saadet. Yine gelirim. {kime: cengo, ekran: cengo+saadet, yuz: cengo.kas}
*Saadet Hanım tepsiyi Cengo'nun eline bırakıp merdivenden iniyor.* {cik, kare: K20}
**CENGO [gulen]:** Börek ıspanaklı. Çıkabilirsiniz. {gizle: peri, ekran: cengo}
**PERİ [utanmis]:** Utanmadım. {gir: peri, ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [gulen]:** Börekten yemediniz ki daha. {ekran: peri+cengo, yuz: peri.utanmis}
**PERİ [normal]:** Plan şu. Atölyeye müşteri olarak girerim. Lâl beni tanır. {arka: A7, ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [kas]:** Tanır mı? {ekran: peri+cengo, yuz: peri.normal}
**PERİ [kas]:** …Tanır. {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [normal]:** Ben de kuzen olurum. Takım hazır. Nedime provasına sızarım. {ekran: peri+cengo, yuz: peri.kas}
**PERİ [kas]:** Kimin kuzeni? {ekran: peri+cengo, yuz: cengo.normal}
**CENGO [gulen]:** Kim sorarsa onun. {ekran: peri+cengo, yuz: peri.kas}
**CENGO [normal]:** Bir de Teşvikiye'nin valesi Bülent bana borçlu. O sokakta yaprak kıpırdasa görür. {ekran: peri+cengo, yuz: peri.kas}
**PERİ [normal]:** Ustayla da konuşmak lazım. Gülsüm. Bir de gelinle. {ekran: peri+cengo, yuz: cengo.normal}
**CENGO [kas]:** Gelin perişanmış. {ekran: peri+cengo, yuz: peri.normal}
**PERİ [kas]:** Perişan gelini ben teselli ederim. Siz börek yiyin. {ekran: peri+cengo, yuz: cengo.kas}

---

## ipucu atolye
⚙ arka: A15 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Kural 21c: Defne'nin yalnız kalması Lâl'i de içeride bırakır; Lâl kilitledi ve borçlu.

*Teşvikiye. Lâl'in atölyesi: aynalar, kumaş topları, mankenler. Kapının önünde elinde faturayla bekleyen bir adam: kumaşçının adamı.* {kare: K35}
*Siyahlar içinde, gözlüğü zincirde, gümüş saçlı bir kadın kapıyı açıyor.* {gir: lal, gi: kas, ekran: lal}
**LÂL [kas]:** Siz… Pervin? {gir: lal, kime: peri, ekran: peri+lal, yuz: peri.normal}
**PERİ [kas]:** Peri. {ekran: peri+lal, yuz: lal.kas}
**LÂL [normal]:** Tabii. Pervin. Buyrun canım. Gelinlik mi? {ekran: peri+lal, yuz: peri.kas}
**PERİ [utanmis]:** Gelinlik için geldim. Ben evlenmiyorum… Müjgan Hanım'ın kayıp gelinliği için. {ekran: peri+lal, yuz: lal.normal}
**LÂL [sinirli]:** Müjgan beni hırsız yaptı, sizi de dedektif. {ekran: peri+lal, yuz: peri.utanmis}
**LÂL [sinirli]:** Kapıdaki adamı gördünüz. Kumaşçının adamı. Borcumu öderim; gelinlik çalarak değil. {ekran: peri+lal, yuz: peri.utanmis}
**PERİ [normal]:** Dün akşam ne oldu? {ekran: peri+lal, yuz: lal.sinirli}
**LÂL [normal]:** Prova sekizde bitti. Defne "biraz yalnız kalayım" dedi, prova odasında kaldı. Ben yukarı, ofisime çıktım. {ekran: peri+lal, yuz: peri.normal}
**LÂL [normal]:** Gelin yalnız kalmak ister. Ne zaman çıktı, görmedim. {ekran: peri+lal, yuz: peri.normal}
*Prova odası. Ortada çıplak bir manken; örtüsü bir sandalyenin üstünde.* {arka: A16, mekan}
**LÂL [normal]:** Dokuzda indim. Manken örtülüydü, kaldırmadım. Ön kapıyı da arka kapıyı da kilitledim. {gir: lal, kime: peri, ekran: peri+lal, yuz: peri.normal}
**CENGO [kas]:** Örtüyü neden kaldırmadınız? {ekran: cengo+lal, yuz: lal.normal}
**LÂL [kas]:** Gelinliğe bakılmaz, canım. Uğursuzluk. Siz kimsiniz? {kime: cengo, ekran: cengo+lal, yuz: cengo.kas}
**CENGO [gulen]:** Kuzen. {ekran: cengo+lal, yuz: lal.kas}
**PERİ [kas]:** Arka kapı nereye açılıyor? {gir: lal, kime: lal, ekran: peri+lal, yuz: lal.kas}
**LÂL [normal]:** Avluya. Avludan sokağa. {ekran: peri+lal, yuz: peri.kas}

## ipucu gulsum
⚙ arka: A17 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Kural 21c: örtü, kilitlemeden önce birinin içeride olduğunu söyler; kim olduğunu değil (Lâl de içerideydi).

*Atölyenin arka avlusu. Usta Gülsüm, önlüğünde toplu iğneler, çay molasında.* {gir: gulsum, ekran: gulsum, yuz: gulsum.normal}
**CENGO [gulen]:** Çayınız soğumuş. Tazeleyeyim mi? {gir: gulsum, kime: gulsum, ekran: cengo+gulsum, yuz: gulsum.normal}
**GÜLSÜM [normal]:** Sen kimsin? {gir: gulsum, kime: cengo, ekran: cengo+gulsum, yuz: cengo.gulen}
**CENGO [normal]:** Kuzen. Gelin tarafından. {ekran: cengo+gulsum, yuz: gulsum.normal}
**GÜLSÜM [normal]:** Kuzen mi? O ailenin her kuzeninin bel ölçüsünü bilirim. {kime: cengo, ekran: cengo+gulsum, yuz: cengo.normal}
**GÜLSÜM [normal]:** Seninkini bilmiyorum. Çayı koy. {kime: cengo, ekran: cengo+gulsum, yuz: cengo.normal}
**PERİ [normal]:** Dün akşam çıkarken gelinlik neredeydi? {ekran: peri+gulsum, yuz: gulsum.normal}
**GÜLSÜM [normal]:** Mankendeydi, açık. Sekizde ben çıktım. {kime: peri, ekran: peri+gulsum, yuz: peri.normal}
**PERİ [merakli]:** Açık mı? Örtüsüz? {ekran: peri+gulsum, yuz: gulsum.normal}
**GÜLSÜM [normal]:** Ben gelinliğe örtü örtmem. Tül yapışır. Kırk yıllık usul. {ekran: peri+gulsum, yuz: peri.merakli}
**GÜLSÜM:** Sabah geldim, manken örtülü. Kaldırdım: çıplak. {kare: D6}
**CENGO [kas]:** Kapı? Cam? {ekran: cengo+gulsum, yuz: gulsum.normal}
**GÜLSÜM [normal]:** Kilitli. Camlar sağlam. Kimse bir şey kırmamış. {kime: cengo, ekran: cengo+gulsum, yuz: cengo.kas}
**CENGO [kas]:** Örtüyü kim örttü o zaman? {kime: peri, ekran: peri+cengo, yuz: peri.merakli}
**PERİ [kas]:** Güzel soru. {ekran: peri+cengo, yuz: cengo.kas}
**GÜLSÜM [normal]:** Bana sormayın. Ben örtmem. {cik, ekran: peri+gulsum, yuz: peri.kas}

## ipucu vale
⚙ arka: A18 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Kural 21c: vale yüzü görmedi. Bağ sahnede söylenir ("O akşam atölyede genç kadın kim vardı?" "Gelin."); Defne ekranda görünür hâle gelir.

*Teşvikiye. Atölyenin sokağı. Kırmızı yelekli genç bir vale, anahtar panosunun başında.* {gir: bulent, ekran: bulent, yuz: bulent.normal}
**BÜLENT [normal]:** Cengo abi! Arabayı çizdiğimi kimseye söylemedin, sağ ol. {gir: bulent, kime: cengo, ekran: cengo+bulent, yuz: cengo.normal}
**CENGO [gulen]:** Ben görmem. Ama sen görmüşsündür. Salı akşamı ne gördün? {ekran: cengo+bulent, yuz: bulent.normal}
**BÜLENT [normal]:** Gördüm abi. Organizatör var ya, kulaklıklı. Sekizi çeyrek geçe ön kapıdan çıktı, eli boş. {kime: cengo, ekran: cengo+bulent, yuz: cengo.gulen}
**BÜLENT [normal]:** Sekiz buçukta da arka kapıdan bir kadın çıktı. Elinde uzun, siyah bir elbise kılıfı. Taksiye bindi. {ekran: cengo+bulent, yuz: cengo.gulen}
**PERİ [merakli]:** Lâl Hanım mı? {ekran: peri+bulent, yuz: bulent.normal}
**BÜLENT [normal]:** Yok abla, Lâl Hanım'ı tanırım. Genç bir kadındı. Başında şal vardı, yüzünü görmedim. {kime: peri, ekran: peri+bulent, yuz: peri.merakli}
**CENGO [kas]:** Taksiciye ne dedi? {ekran: cengo+bulent, yuz: bulent.normal}
**BÜLENT [normal]:** "Kurtuluş'a, terziye." Kapı açıktı, duydum. {kime: cengo, ekran: cengo+bulent, yuz: cengo.kas}
**CENGO [kas]:** Genç bir kadın. O akşam atölyede genç kadın kim vardı? {kime: peri, ekran: peri+cengo, yuz: peri.merakli}
**PERİ [kas]:** Gelin. {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [gulen]:** Bülent, çiziği unuttum. {gir: bulent, kime: bulent, ekran: cengo+bulent, yuz: bulent.normal}
**BÜLENT [normal]:** Sağ ol abi. {cik, ekran: cengo+bulent, yuz: cengo.gulen}

## ipucu defne
⚙ arka: A19 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Kural 21c: Defne'nin sakinliği bir gelinin sinirine de uyar; Tolga'yı suçlaması Tolga'yı ekrana getirir.

*Nişantaşı. Ersoy'ların salonu. Defne pencerenin önünde; ipek gömleği belde düğümlü, saçları omzunda. Sakin.* {gir: defne, ekran: defne, yuz: defne.normal}
**PERİ [normal]:** Defne Hanım. Gelinliğiniz için çok üzgünüm. {gir: defne, kime: defne, ekran: peri+defne, yuz: defne.normal}
**DEFNE [normal]:** Bulunur. Böyle şeyler bulunur. {gir: defne, ekran: peri+defne, yuz: peri.normal}
**PERİ [kas]:** Çok sakinsiniz. {ekran: peri+defne, yuz: defne.normal}
**DEFNE [normal]:** Annem yeterince telaşlı. İkimize yeter. {ekran: peri+defne, yuz: peri.kas}
**CENGO [normal]:** Düğüne üç gün var. Beş yüz kişi. {ekran: cengo+defne, yuz: defne.normal}
**DEFNE [bardak]:** *(bardağı sıkarak)* Biliyorum kaç kişi. {kime: cengo, ekran: cengo+defne, yuz: cengo.normal}
**PERİ [kas]:** Kimden şüpheleniyorsunuz? {ekran: peri+defne, yuz: defne.bardak}
**DEFNE [gergin]:** Tolga Bey. Annemle kavgalı. Düğünü ertelemek istiyordu, annem izin vermedi. {kime: peri, ekran: peri+defne, yuz: peri.kas}
**DEFNE [normal]:** Lâl Hanım değil. O gelinliği çok sevdi. {ekran: peri+defne, yuz: peri.kas}
**CENGO [kas]:** Siz? {ekran: cengo+defne, yuz: defne.normal}
**DEFNE [normal]:** Ben de sevdim. {kime: cengo, ekran: cengo+defne, yuz: cengo.kas}
*Defne pencereye dönüyor. Peri ile Cengo kapıya yürüyor.* {cik, ekran: peri+cengo, yuz: peri.kas+cengo.kas}
**PERİ [kas]:** Gelinliği soruyorum, rahat. Düğünü soruyorum, bardağı sıkıyor. {kime: cengo, ekran: peri+cengo, yuz: cengo.kas}
**CENGO [kas]:** Gelinler gergin olur. {ekran: peri+cengo, yuz: peri.kas}
**PERİ [aci]:** Gelinliği kaybeden kadın böyle bakmaz. {ekran: peri+cengo, yuz: cengo.kas}

## ipucu prova
⚙ arka: A20 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Kural 21c: Tolga'nın gördüğü, onu da atölyeye koyar; nedimenin "cuma sabahı" tek başına bir gelinin işine de uyar.

*Boğaz'da bir otelin balo salonu. Pembe saten elbiseli dört nedime, balon kemerinin altında sıra olmuş. Kulaklıklı, ince bir adam tabletine bakıyor.* {gir: tolga, ekran: tolga, yuz: tolga.normal}
**TOLGA [normal]:** Kuzen sen misin canım? Geç kaldın. Sıraya! {gir: tolga, kime: cengo, ekran: cengo+tolga, yuz: cengo.normal}
**CENGO [gulen]:** Benim. Kimin kuzeniydim, bir hatırlatır mısınız? {ekran: cengo+tolga, yuz: tolga.normal}
**TOLGA [normal]:** Kim olursan. Kolunu dördüncü nedimeye ver. Adım, dur, adım. {kime: cengo, ekran: cengo+tolga, yuz: cengo.gulen}
*Cengo, kolunda pembe saten bir nedime, balon kemerinin altından yürüyor. Peri kapıda, kollarını kavuşturmuş.* {kare: K21}
**NEDİME:** Gelin de provaya gelmiyor ki. "Cuma sabahı işim var, beni beklemeyin" dedi. {kare: K21}
**PERİ [kas]:** Cuma sabahı. {ekran: peri+nedime, yuz: nedime.normal}
*Tolga'nın kulaklığı ötüyor.* {ekran: tolga, yuz: tolga.normal}
**TOLGA [normal]:** Canım, cumartesi salon boşalırsa sizin düğünü oraya alırım. Söz veremem ama umut var. {gir: tolga, kime: peri, ekran: peri+tolga, yuz: peri.kas}
**CENGO [kas]:** Hangi düğün boşalıyor? {ekran: cengo+tolga, yuz: tolga.normal}
**TOLGA [sinirli]:** Hiçbiri canım! Lafın gelişi. {kime: cengo, ekran: cengo+tolga, yuz: cengo.kas}
**TOLGA [normal]:** Gelinliği ben salı akşamı gördüm. Sekizi on geçe, çiçek rengi için uğradım. {ekran: cengo+tolga, yuz: cengo.kas}
**TOLGA [normal]:** Mankendeydi, açık. Gelin de oradaydı. {ekran: cengo+tolga, yuz: cengo.kas}
**PERİ [merakli]:** Kaç dakika kaldınız? {gir: tolga, kime: tolga, ekran: peri+tolga, yuz: tolga.normal}
**TOLGA [normal]:** Beş dakika. Aşağıda çiçekçi bekliyordu. {kime: peri, ekran: peri+tolga, yuz: peri.merakli}
**TOLGA [normal]:** *(nedimelere dönüp)* Hadi kızlar, bir daha baştan! {ekran: peri+tolga, yuz: peri.merakli}
**CENGO [gulen]:** Beni nedimeyle evlendirdiler. {kime: peri, ekran: peri+cengo, yuz: peri.merakli}

## ipucu terzi
⚙ arka: A22 · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Kural 21c: getireni tanımıyor ("genç bir hanım"); kısaltmak bir satıcıya da uyar.

*Kurtuluş. Dar bir sokakta eski bir terzi dükkânı. Mankende bir gelinlik; kuyruğu yarıya kadar sökülmüş.* {mekan, kare: D7}
**PERİ [normal]:** Kurtuluş'ta kuyruk kesen bir tek usta kaldı. Sarkis Usta. {kare: D7}
**SARKİS [normal]:** *(gözlüğünü düzeltip)* Kraliçe. Dergide görmüştüm. Taçlı. {gir: sarkis, ekran: peri+sarkis, yuz: peri.normal}
**PERİ [utanmis]:** Şimdi taçsız. {ekran: peri+sarkis, yuz: sarkis.normal}
**SARKİS [normal]:** Herkes sonunda taçsız. Gelinliğe mi geldiniz? Lâl işi. Dantelden tanırım. {ekran: peri+sarkis, yuz: peri.utanmis}
**CENGO [kas]:** Kim getirdi? {ekran: cengo+sarkis, yuz: sarkis.normal}
**SARKİS [normal]:** Salı gece, genç bir hanım. Adını sormadım; parası peşin. {kime: cengo, ekran: cengo+sarkis, yuz: cengo.kas}
**SARKİS [normal]:** Kuyruğu kesilecek, kısa olacak. Cuma sabah sekizde alacak. {ekran: cengo+sarkis, yuz: cengo.kas}
**PERİ [merakli]:** Kısa mı? Beş yüz kişilik düğüne kısa gelinlik? {gir: sarkis, kime: sarkis, ekran: peri+sarkis, yuz: sarkis.normal}
**SARKİS [normal]:** Ben dikerim, düğünü sormam. Fişi olana veririm. Size vermem. {kime: peri, ekran: peri+sarkis, yuz: peri.merakli}
**CENGO [gulen]:** Zaten bana yakışmazdı. {ekran: cengo+sarkis, yuz: sarkis.normal}
**PERİ [kas]:** Kısası da yakışmazdı. {gir: cengo, kime: cengo, ekran: peri+cengo, yuz: cengo.gulen}

---

## sahne yuzlesme_dogru
⚙ arka: A20b · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Oyuncu hangi doğru çifti seçtiyse seçsin aynı sahne; kanıtı adıyla anmaz.

*Ertesi gün. Otelin balo salonunda son prova. Defne sıranın başında, yanında annesi.* {kare: K33}
**PERİ [normal]:** Defne Hanım. Gelinliği siz aldınız. Nasıl aldığınızı da biliyorum. {gir: defne, kime: defne, ekran: peri+defne, yuz: defne.normal}
**DEFNE [gergin]:** Ne diyorsunuz siz? {gir: defne, ekran: peri+defne, yuz: peri.normal}
**PERİ [kas]:** İki şey diyorum. İkisini de biliyorsunuz. {ekran: peri+defne, yuz: defne.gergin}
**MÜJGAN [ofkeli]:** Kızım? {gir: mujgan, kime: peri, ekran: peri+mujgan, yuz: peri.kas}
**DEFNE [panik]:** Anne… {gir: defne, ekran: defne+mujgan, yuz: mujgan.ofkeli}
*Defne annesine bakıyor, kapıya bakıyor. Sandaletlerini çıkarıp koşuyor.* {cik, kare: K34}

## sahne yuzlesme_zayif
⚙ arka: A20b · figurler: peri, cengo · set: tayyor · cset: takim

*Ertesi gün. Otelin balo salonunda son prova. Defne sıranın başında, yanında annesi.* {kare: K33}
**PERİ [normal]:** Gelinliği siz aldınız. {gir: defne, kime: defne, ekran: peri+defne, yuz: defne.normal}
**DEFNE [normal]:** Ben mi? Kendi gelinliğimi mi? Ne kanıtınız var? {gir: defne, ekran: peri+defne, yuz: peri.normal}
**PERİ [utanmis]:** …Bir his. {ekran: peri+defne, yuz: defne.normal}
**MÜJGAN [ofkeli]:** His mi? Kızım, gel buraya. {gir: mujgan, kime: peri, ekran: peri+mujgan, yuz: peri.utanmis}
**DEFNE [panik]:** *(annesi bir adım yaklaşınca)* Gelme anne! {gir: defne, kare: K34}
*Defne sandaletlerini fırlatıp koşuyor.* {cik, kare: K34}

## sahne yuzlesme_lal
⚙ arka: A20b · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Lâl nedime elbiselerini getirmiş (form §10).

*Ertesi gün. Otelin balo salonu. Lâl Hanım nedimelerin son iğnelerini takıyor. Defne sıranın başında.* {kare: K33}
**PERİ [kas]:** Lâl Hanım. Gelinliği siz aldınız. {gir: lal, kime: lal, ekran: peri+lal, yuz: lal.normal}
**LÂL [sinirli]:** Ben mi? Pervin, aklını mı kaçırdın? {ekran: peri+lal, yuz: peri.kas}
**LÂL [sinirli]:** Salı akşamı prova odasında en son kim kaldı, ona sorsana! {ekran: peri+lal, yuz: peri.kas}
*Bütün nedimeler aynı anda Defne'ye dönüyor.* {gir: defne, gi: panik, kare: K34}
**DEFNE [panik]:** Ben… ben yalnızca aynaya baktım! {kime: peri, ekran: peri+defne, yuz: peri.kas}
*Defne sandaletlerini çıkarıp koşuyor.* {cik, kare: K34}

## sahne yuzlesme_tolga
⚙ arka: A20b · figurler: peri, cengo · set: tayyor · cset: takim

*Ertesi gün. Otelin balo salonunda son prova. Tolga tabletiyle sırayı diziyor. Defne sıranın başında.* {kare: K33}
**PERİ [kas]:** Tolga Bey. Gelinliği siz aldınız. {gir: tolga, kime: tolga, ekran: peri+tolga, yuz: tolga.normal}
**TOLGA [sinirli]:** Ben mi canım? Ben gördüğümde gelinlik yerindeydi! {ekran: peri+tolga, yuz: peri.kas}
**TOLGA [sinirli]:** Gelin hanım da yanındaydı. Bana öyle bir baktı ki çıktım! {ekran: peri+tolga, yuz: peri.kas}
*Herkes Defne'ye dönüyor.* {gir: defne, gi: panik, kare: K34}
**DEFNE [panik]:** Ne bakıyorsunuz? {kime: peri, ekran: peri+defne, yuz: peri.kas}
*Defne sandaletlerini çıkarıp koşuyor.* {cik, kare: K34}

## sahne kovalamaca
⚙ arka: A20b · figurler: peri, cengo · set: tayyor · cset: takim
⚙ Her sonuçta aynı. Peri erotik + gülünç, felaketi düğün pastası; Defne'yi şans (pirinç) yakalar.

*Defne yalınayak nedimelerin arasından fırlıyor. Cengo, kolunda nedimesi, balon kemerine dolanıyor; balonlar patlıyor.* {kare: K22}
**CENGO [gulen]:** Bırakın beni, ben kuzenim! {kare: K22}
**NEDİME:** Sıranı bozma! {kare: K22}
*Peri, Defne'nin peşinden pasta mutfağına dalıyor. Islak zeminde kayıyor ve tadımlık beş katlı pastanın içine oturuyor.* {arka: A21, kare: K23, set: kremali}
**PERİ [sinirli]:** *(kremanın içinden)* Bu… planın parçasıydı. {kare: K23}
*Peri kremalı stilettolarıyla salona dönüyor; dans pistinde buz pateni gibi kayıyor, bir bacağı havada.* {arka: A20, kare: K24}
**GARSON:** Pist cilalı, hanımefendi! {kare: K24}
*Defne kapıya koşarken nedimelerin elinden dökülen pirince basıyor, kayıyor, sandalye örtüsü yığınına düşüyor. Cengo, elinde gelin buketiyle yetişiyor.* {kare: K25}
**NEDİME:** Buketi tutan evlenir! {kare: K25}
**CENGO [buket]:** Ben tutmadım, o düştü. {kime: peri, ekran: peri+cengo, yuz: peri.sinirli}
**DEFNE [itiraf]:** Tamam. Ben aldım. {gir: defne, ekran: defne+cengo, yuz: cengo.buket}
**DEFNE [itiraf]:** Kerem'le evleniyoruz. Cuma sabahı, iki şahitle. Beş yüz kişi değil. {ekran: defne+cengo, yuz: cengo.buket}
**DEFNE [itiraf]:** Annemle konuşmaya çalıştım. "Beş yüz kişiye davetiye gitti, ayıp olur" dedi. Konu kapandı. {ekran: defne+cengo, yuz: cengo.buket}
**DEFNE [itiraf]:** Gelinlik olmazsa düğünü erteler, dedim. Ben de o arada cuma sabahı sessizce evlenirim. {ekran: defne+cengo, yuz: cengo.buket}
**DEFNE [itiraf]:** Gelinlik Kurtuluş'ta, bir terzide. Kuyruğunu kestiriyorum. Gelinliği seviyorum; gösteriyi sevmiyorum. {ekran: defne+cengo, yuz: cengo.buket}
**CENGO [yumusak]:** Gösteriyi kimse sevmez. {ekran: cengo+defne, yuz: defne.itiraf}
*Garson Peri'ye bir masa örtüsü uzatıyor; Peri örtüye sarınıyor. Cengo parmağındaki kremayı tadıyor.* {kare: K26, set: ortulu}
**CENGO [gulen]:** Fıstıklı. {kime: peri, ekran: peri+cengo, yuz: peri.sinirli}
**PERİ [kas]:** Bademli. {ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [gulen]:** Ben fıstıklı yedim. {kime: peri, ekran: peri+cengo, yuz: peri.kas}

---

## ucret
⚙ Karar ekranının üstünde, ücret kesildiyse çıkan açıklama. `{anlasilan}` ve `{kesinti}` tutarla dolar.

**ZAYIF:** Anlaşılan ücret {anlasilan}. Kanıtın zayıf kaldı; Müjgan Hanım {kesinti} kesti.
**YANLIS:** Anlaşılan ücret {anlasilan}. Masum birini suçladın; Müjgan Hanım {kesinti} kesti.

## cozum
⚙ "Dosya çözüldü" ekranı. YOL: suçluyu kanıtlayan her doğru çift, sade dille. MASUM <id>: neden masum.

**YOL:** Defne sekizden sonra prova odasında yalnız kaldı + sekiz buçukta arka kapıdan kılıflı genç bir kadın çıktı.
**YOL:** Gelinlik sekizde açıktaydı, dokuzda manken örtülüydü + arada içeride Defne yalnız kaldı.
**YOL:** Sekizi on geçe gelinlik yerindeydi, gelin içerideydi + sekiz buçukta arka kapıdan kılıflı genç bir kadın çıktı.
**YOL:** Gelinlik cuma sabah sekizde terziden alınacak + Defne'nin cuma sabahı işi var.
**MASUM lal:** Lâl masumdu: anahtar ondaydı ama gelinliği provadan sonra Defne aldı.
**MASUM tolga:** Tolga masumdu: uğradığında gelinlik yerindeydi, gelin de yanındaydı. Gelinliği Defne aldı.

## ani
⚙ Anı defterinde vakanın hatırlatması (Peri'nin notunun üstünde, bütün kararlarda aynı). Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği; karara göre değişen hiçbir şey yazılmaz. 2–3 cümle: müşteri ve kayıp, kim almıştı, neden.

**ANI:** Defne'nin gelinliği, düğüne üç gün kala Lâl Hanım'ın atölyesinden kayboldu. Defne kendisi almıştı: annesinin beş yüz kişilik düğünü yerine cuma sabahı Kerem'le iki şahitle evlenecekti. Gelinlik Kurtuluş'ta bir terzideydi, kuyruğu kesiliyordu.


## hikaye
⚙ "Dosyanın tamamı" ekranı: kaçan ipuçlarından en az birini reklamla izleyen oyuncuya vaka kapanınca bir kez gösterilir (17 Ekim 2026, sahibinin kararı). Gerçekte ne oldu, olay sırasıyla; masumlar o gece neredeydi.

**HİKÂYE:** Defne, annesi Müjgan Hanım'ın kurduğu beş yüz kişilik düğünü istemiyordu; Kerem'le cuma sabahı iki şahitle evlenmek istiyordu. Annesine söylemeyi denedi, dinletemedi.
**HİKÂYE:** Salı son provadan sonra "biraz yalnız kalayım" dedi. Lâl Hanım yukarıda, ofisindeydi; usta Gülsüm sekizde çıkarken gelinlik mankende, açıktaydı.
**HİKÂYE:** Sekizi on geçe organizatör Tolga çiçek rengine bakmaya uğradı, gelinliği ve gelini gördü, çeyrek geçe eli boş çıktı. Cumartesiyi boş istemesi başka bir çiftin düğünü içindi.
**HİKÂYE:** Defne gelinliği siyah bir kılıfa koydu, boş mankene örtü örttü ki gelinlik yerindeymiş gibi görünsün. Sekiz buçukta arka kapıdan çıktı; vale Bülent onu gördü ama yüzünü seçemedi. Taksiye "Kurtuluş'a, terziye" dedi.
**HİKÂYE:** Dokuzda Lâl Hanım aşağı indi, örtülü mankene bakmadan kapıları kilitledi. Borcu gerçekti, hırsızlığı değil.
**HİKÂYE:** Gelinlik Sarkis Usta'daydı; kuyruğu kesilip kısaltılacak, cuma sabah sekizde alınacaktı. Defne gelinliği seviyordu; istemediği, gösteriydi.

## karar anneye_anlat
⚙ etiket: Müjgan Hanım'a hemen anlat

**ÖNİZLEME:** Gelinlik cumartesiye döner; Defne'nin cuma nikâhı olmaz. Müjgan Hanım 5.000 ₺ bahşiş verir.
**SONUÇ:** Müjgan Hanım'a her şeyi anlattın: terziyi, cuma nikâhını, beş yüz kişiyi istemediğini. Müjgan Hanım kızını alıp Kurtuluş'a gitti; Sarkis Usta kuyruğu geri dikti. Cumartesi beş yüz kişi alkışladı. Müjgan Hanım ücretin üstüne beş bin bahşiş bıraktı. Defne gülümsedi, sana bakmadı.
**CENGO [normal]:** Cengo düğünde ikinci tabağı alırken "Ana kız meselesi" dedi. "Ben yemeğe bakarım." {yuz: peri.normal}
**DEFTER:** Gelinlik cumartesiye yetişti. Gelin de.

## karar nikahtan_sonra
⚙ etiket: Nikâhtan sonra söyle

**ÖNİZLEME:** Defne cuma nikâhını kıyar; sen anneye ancak ondan sonra söylersin. Müjgan Hanım geç kaldın diye 10.000 ₺ keser.
**SONUÇ:** Cuma sabahı gelinliği Defne'yle birlikte terziden aldın. Nikâh iki şahitle kıyıldı; gelinlik kısaydı. Öğlen Müjgan Hanım'a anlattın. Telefonu yüzüne kapattı, akşam ücreti gönderdi: on bin eksik.
**CENGO [normal]:** Şahitlerden biri Cengo'ydu. "Bu hafta ikinci nikâhım" dedi. "Artık ücret alacağım." {yuz: peri.normal}
**DEFTER:** Defne nikâhını istediği gibi kıydı. Müjgan Hanım bir gün geç öğrendi.

## karar yuz_yuze
⚙ etiket: Ana kızı yüz yüze oturt

**ÖNİZLEME:** Ana kızı aynı masaya oturtursun. Nikâh cuma, anne şahit olur. Salonun iptal cezası için Müjgan Hanım 5.000 ₺ keser.
**SONUÇ:** Müjgan Hanım'la Defne'yi boş balo salonunda bir masaya oturttun. Bir saat sustular, sonra konuştular. Nikâh cuma kıyıldı; şahitlerden biri Müjgan Hanım'dı. Cumartesi beş yüz kişi yerine yirmi kişilik bir yemek oldu. Salonun iptal cezasından payını ücretten kesti.
**CENGO [normal]:** Cengo kapının dışında bekledi, bir şey demedi. Ana kız çıkınca "Pasta kaldı mı?" diye sordu. {yuz: peri.normal}
**DEFTER:** Ana kız aynı masaya oturdu. Nikâh cuma, cumartesi yemek.

## karar defnenin_parasi
⚙ etiket: Defne'nin parasını al, sırrını sakla

**ÖNİZLEME:** Defne sana 15.000 ₺ verir; anneye "atölyeden çalınmış, terzide bulduk" dersin. Suç Lâl'in atölyesine kalır.
**SONUÇ:** Defne'nin parasını aldın ve Müjgan Hanım'a hırsızın bulunamadığını söyledin. Gelinlik cumartesiye döndü; Defne nikâhından vazgeçti. Müjgan Hanım Nişantaşı'nda "Lâl'in atölyesi kalbur gibi" dedi. İki müşteri siparişini geri çekti.
**CENGO [normal]:** Cengo parayı saydı, bir an durdu. "Lâl Hanım'ın atölyesine bir daha kim gider?" diye sordu. {yuz: peri.normal}
**DEFTER:** Defne'nin sırrı bende kaldı. Lâl Hanım'ın iki müşterisi gitti.

---

## sahne kapanis
⚙ arka: A8 · figurler: peri, cengo · set: ortulu · cset: takim
⚙ Bağın iki hâli (kural 12a, eşik +1). İplik ucu (kanon, Onay 1): Lâl'in müzayede kataloğu; ne olduğu söylenmez.

*Akşam. Büro. Peri hâlâ masa örtüsüne sarılı, saçında krema. Cengo kravatını gevşetiyor.* {set: ortulu, ekran: peri+cengo, yuz: peri.normal+cengo.normal}
*Kapı çalınıyor: üç kere.* {ekran: peri+cengo, yuz: peri.normal+cengo.normal}
**PERİ [sasirmis]:** Ev sahibi! {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
*Peri masanın arkasına çömeliyor. Cengo kapıyı açıyor. Eşikte Lâl Hanım, elinde siyah bir elbise kılıfı.* {gizle: peri, gir: lal, gi: kilif, ekran: peri+cengo, yuz: peri.sasirmis+cengo.normal}
**LÂL [kilif]:** Tayyörünü pastaya gömmüşsün. Bunu giy. {gir: lal, kime: cengo, ekran: cengo+lal, yuz: cengo.normal}
**PERİ [utanmis]:** *(masanın arkasından doğrularak)* Lâl Hanım. Beni sonunda hatırladınız mı? {gir: peri, kime: lal, ekran: peri+lal, yuz: lal.kilif}
**LÂL [kas]:** Hiç unutmadım, Peri. Taç gecesi elbiseni ben diktim. {kime: peri, ekran: peri+lal, yuz: peri.utanmis}
**PERİ [sasirmis]:** Peki neden "Pervin"? {ekran: peri+lal, yuz: lal.kas}
**LÂL [kas]:** Bir kraliçe unutulunca nasıl bakar, merak ettim. {ekran: peri+lal, yuz: peri.sasirmis}
*Lâl Hanım kapıda dönüyor.* {ekran: lal, yuz: lal.kas}
**LÂL [normal]:** Geçen hafta elime bir müzayede kataloğu geçti. İçinde senin tanıyacağın bir şey vardı. {kime: peri, ekran: peri+lal, yuz: peri.sasirmis}
**PERİ [sasirmis]:** Ne? {ekran: peri+lal, yuz: lal.normal}
**LÂL [kas]:** Sonra. {cik, ekran: peri+lal, yuz: peri.sasirmis}
**CENGO [normal]:** Gitti. {kime: peri, bag: dusuk, ekran: peri+cengo, yuz: peri.sasirmis}
*Cengo kravatını çözüp masaya bırakıyor.* {bag: dusuk, cengo: kravat, ekran: cengo, yuz: cengo.kravat}
**CENGO [normal]:** Takım yarın sahibine döner. İyi akşamlar. {bag: dusuk, kime: peri, ekran: peri+cengo, yuz: peri.sasirmis}
**PERİ [sasirmis]:** Cengo… {bag: dusuk, ekran: peri+cengo, yuz: cengo.normal}
*Cengo dönmüyor; merdivenden iniyor. Peri örtüsüne sarılı, boş büroda tek başına kalıyor.* {bag: dusuk, kare: K32}
**CENGO [gulen]:** Gitti. Merdiven üç kat; örtüyle yetişemezsiniz. {kime: peri, bag: yuksek, ekran: peri+cengo, yuz: peri.sasirmis}
**CENGO [yumusak]:** Siz evlenseniz kaç kişi çağırırdınız? {kime: peri, bag: yuksek, ekran: peri+cengo, yuz: peri.normal}
**PERİ [normal]:** İki. {bag: yuksek, ekran: peri+cengo, yuz: cengo.yumusak}
**PERİ [kas]:** Ben ve şahit. {bag: yuksek, cengo: yumusak, ekran: peri+cengo}
*Cengo gülümsüyor. Kravatını gevşetiyor ama çıkarmıyor; merdivende dönüp Peri'ye bir kez daha bakıyor.* {bag: yuksek, arka: A5b, kare: K31}

---

## Satır → görsel (yeni görseller)

Görselsiz turda hepsi gri yer tutucu. Tam liste ve promptlar adım 8'de (`vaka2_gorsel.md`).

| kod | ne | nerede |
|---|---|---|
| A15 | Lâl'in atölyesi, salon | ipucu atolye |
| A16 | prova odası: çıplak manken, örtü sandalyede | ipucu atolye |
| A17 | atölyenin arka avlusu | ipucu gulsum |
| A18 | Teşvikiye, atölyenin sokağı (vale panosu) | ipucu vale |
| A19 | Ersoy'ların salonu | ipucu defne |
| A20 | otel balo salonu, balon kemeri | ipucu prova, kovalamaca |
| A20b | balo salonu, 2. açı (prova sırası) | yüzleşmeler, kovalamaca |
| A21 | otelin pasta mutfağı | kovalamaca |
| A22 | Sarkis Usta'nın dükkânı | ipucu terzi |
| D6 | el örtüyü kaldırıyor, manken boş | ipucu gulsum |
| D7 | kuyruğu yarı sökülmüş gelinlik | ipucu terzi |
| K19 | Peri masanın kenarında bacak bacak üstüne; Müjgan süzüyor | giriş |
| K20 | kapıda tepsili Saadet ve Cengo; masanın altında Peri | konuşma |
| K21 | Cengo kolunda nedimeyle balon kemerinin altında; Peri kapıda | ipucu prova |
| K22 | Defne nedimelerin arasından fırlıyor; Cengo balon kemerine dolanmış | kovalamaca 1 |
| K23 | Peri beş katlı pastanın içinde | kovalamaca 2 |
| K24 | kremalı Peri pistte kayıyor, bacak havada | kovalamaca 3 |
| K25 | Defne pirinçte kaymış, örtü yığınında; Cengo buketle | kovalamaca 4 |
| K26 | Peri masa örtüsüne sarılı; Cengo kremayı tadıyor | kovalamaca sonu |
| K27–K30 | dört kararın ara karesi | kararlar |
| K31 | Cengo kravatı gevşek, merdivende gülümseyerek dönüp bakıyor | kapanış (bağ yüksek) |
| K32 | Akşam büro: masada çözülmüş bordo kravat ve börek tepsisi; Peri örtüye sarılı, tek başına | kapanış (bağ düşük) |
| K35 | Atölyenin kapısı: faturayla bekleyen kumaşçının adamı | atölyeye geliş |
| K34 | Herkes Defne'ye dönüyor; Müjgan bir adım atmış | yüzleşme, kaçıştan önce (dört sonuç) |
| K33 | Son prova: Defne sıranın başında, yanında Müjgan; dört nedime, Tolga, Lâl | yüzleşme açılışı (dört sonuç) |
| Peri `tayyor` | normal, kas, sinirli, aci, utanmis, sasirmis, merakli | her yerde |
| Peri `kremali` | sinirli, utanmis | kovalamaca |
| Peri `ortulu` | normal, kas, sasirmis, utanmis | kovalamaca sonu, kapanış |
| Cengo `takim` | normal, kas, gulen, yumusak, buket | her yerde |
| Müjgan | normal, kas, ofkeli | giriş, yüzleşme |
| Defne | normal, gergin, panik, itiraf | ipucu defne, yüzleşme, kovalamaca |
| Lâl | normal, kas, sinirli | atolye, yüzleşme, kapanış |
| Tolga | normal, sinirli | prova, yüzleşme |
| Gülsüm, Bülent, Sarkis, Saadet | normal | birer sahne |
| sesler | nedime, garson | kare üstünde |
