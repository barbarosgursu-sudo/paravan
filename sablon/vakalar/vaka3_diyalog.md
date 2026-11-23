# VAKA 3 — SİMİT SOYGUNU · DİYALOG

Üretim adımı 3 (`7_uretim_sureci.md`). Kaynak: `vaka3_form.md` (Onay 1, 17 Ekim 2026).
**Bu dosya sahnelerin ve karar metinlerinin TEK kaynağıdır.** Veriye elle yazılmaz:
`cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka3_diyalog.md V3`.

Yazım `vaka2_diyalog.md`'deki gibi. Vaka 3'ün kıyafetleri:
- **Peri:** `trenckot` (kitaba göre dedektif kılığı: bej trençkot, eşarp, güneş gözlüğü), `simit` (pekmez + susam, kovalamaca), `onluklu` (felaketin üstüne Gizem'in pembe tezgâh önlüğü).
- **Cengo:** `haki` (haki askeri ceket), `unlu` (un bulutundan sonra, bembeyaz).

**Görselsiz test için yer tutucu:** Vaka 3'ün bütün yeni görselleri görsel gelene kadar gri "görsel yok" kutusuyla görünür.

Her satır için kontrol sorusu: *ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu,
metnin andığı nesne görünüyor mu?* Adı geçen her kişi o satırda ekranda (tek kişi `gir`, kalabalık kare).

---

## sahne giris
⚙ arka: A6 · figurler: peri, cengo · set: trenckot · cset: haki
⚙ K17: büro, 15–25 replik, şüpheli (Gizem, Kenan) anılıyor, ücret konuşuluyor, ipucu bilgisi yok.

*Sabah. Büro. Peri masada; bej trençkot, başında eşarp, iri güneş gözlüğü alnında. Cengo kapıda durup bakıyor.* {ekran: peri+cengo, yuz: peri.normal+cengo.normal}
**CENGO [kas]:** Bu ne kılık? Film setinden mi geldin? {kime: peri, ekran: peri+cengo, yuz: peri.normal}
**PERİ [kas]:** Kılık bu. Dedektif iz sürerken tanınmaz. Kitapta yazıyor. {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [gulen]:** Ortada iş yok ki. Kimin izini süreceksin? {ekran: peri+cengo, yuz: peri.kas}
**PERİ [normal]:** Bugün gelecek müşterinin. Dedektif hazırlıklı olur. {ekran: peri+cengo, yuz: cengo.gulen}
*Kapı çalınıyor. Eşikte iri yapılı, bembeyaz saçlı, dimdik bir hanım; elinde bastonu var ama yere değdirmiyor.* {gir: nadide, gi: normal, ekran: nadide}
**NADİDE [normal]:** Peri Hanım! Ben sizin eski hayranınızım. {gir: nadide, kime: peri, ekran: peri+nadide, yuz: peri.normal}
**PERİ [kas]:** Ben o değilim. {ekran: peri+nadide, yuz: nadide.normal}
**NADİDE [normal]:** Tabii, tabii. {ekran: peri+nadide, yuz: peri.kas}
**CENGO [gulen]:** Kılık çok işe yaradı. Kapıdan girer girmez tanıdı. {kime: peri, ekran: peri+cengo, yuz: peri.kas}
**NADİDE [normal]:** Ben Nadide. Susam Pastanesi benim. Kırk beş yıl önce kocamla tek tezgâhla açtık, şimdi dört dükkân. {kime: peri, ekran: peri+nadide, yuz: peri.kas}
**NADİDE [kirgin]:** Pazar gece Karaköy'deki merkezi soymuşlar. Arka cam kırık, kasa açık. Hafta sonunun hasılatı gitmiş. {ekran: peri+nadide, yuz: peri.kas}
**CENGO [kas]:** Ne kadar? {ekran: cengo+nadide, yuz: nadide.kirgin}
**NADİDE [kirgin]:** Yedi yüz yirmi bin lira. Ferruh defterden hesaplayıp sigortaya bildirdi. Kamera da tam o gece bozukmuş. {kime: cengo, ekran: cengo+nadide, yuz: cengo.kas}
**NADİDE [normal]:** Ferruh on beş yıldır dükkânımı yönetir. Rahmetli kocamın çırağıydı, ona güvenirim. {kime: peri, ekran: peri+nadide, yuz: peri.kas}
**NADİDE [kirgin]:** Sigortanın eksperi "çalışanlardan biri yaptı" deyip ödemiyor. {ekran: peri+nadide, yuz: peri.kas}
**NADİDE [kirgin]:** Eksper, sabah dükkânı açan müdürüm Kenan'dan şüpheleniyor. {ekran: peri+nadide, yuz: peri.kas}
**NADİDE [kirgin]:** Ferruh ise tezgâhtarımız Gizem'den şüpheleniyor. Pazar akşamı dükkânı o kapatmış, anahtarlar ondaymış. {ekran: peri+nadide, yuz: peri.kas}
**NADİDE [normal]:** İkisinden de şüphelenmem. Dükkânımı bilirim: unu kırk yıldır Rüstem'den alırım, bir kuruş borcumuz olmadı. {ekran: peri+nadide, yuz: peri.kas}
*Büro sıcak. Peri trençkotun kemerini çözüp bacak bacak üstüne atıyor; altında dar siyah bir elbise. Nadide Hanım hayranlıkla bakıyor.* {kare: K36, set: trenckot_acik}
**CENGO [gulen]:** Trençkotu açtın. Gizli görev bitti mi? {kime: peri, ekran: peri+cengo, yuz: peri.kas}
**PERİ [kas]:** Kısa bir mola. Gelelim işe: ücretimiz kırk bin lira. {gir: nadide, kime: nadide, ekran: peri+nadide, yuz: nadide.normal}
**NADİDE [normal]:** Kabul. Kırk bini hırsızı bulduğunuzda öderim. {kime: peri, ekran: peri+nadide, yuz: peri.kas}
**CENGO [kas]:** Bir kısmını simitle ödeseniz olmaz mı? Ben dükkânınızın müdavimiyim. {ekran: cengo+nadide, yuz: nadide.normal}
**NADİDE [normal]:** Seni tanırım oğlum. Dükkânda veresiye defterin var; o borcun ayrı. {kime: cengo, ekran: cengo+nadide, yuz: cengo.kas}
**PERİ [normal]:** Anlaştık. İşe soygunun olduğu yerden, dükkândan başlarız. {ekran: peri+nadide, yuz: nadide.normal}

## sahne konusma
⚙ arka: A6 · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ İpucu adlarındaki kişiler burada duyulur (K18): Sedat (Cengo). Rüstem girişte Nadide'nin ağzından.

*Kapı kapanıyor. Peri gözlüğünü alnına itip düzeltiyor.* {ekran: peri, yuz: peri.normal}
**CENGO [kas]:** Tezgâhtaki Gizem'i tanırım. Aldığım simitleri veresiye defterine o yazar. {kime: peri, ekran: peri+cengo, yuz: peri.normal}
**PERİ [kiskanc]:** Ne kadar borcunuz var? {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [gulen]:** Gizem'in keyfine göre değişiyor. Onu güldürürsem yazmıyor. {ekran: peri+cengo, yuz: peri.kiskanc}
**PERİ [kiskanc]:** Demek onu güldürüyorsunuz. {ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [normal]:** Bir de o dükkânın alarmını alarmcı Sedat taktı. Bana borçlu; alarmın kaydını bize gösterir. {ekran: peri+cengo, yuz: peri.kiskanc}
**PERİ [kas]:** Bu şehirde size borçlu olmayan var mı? {ekran: peri+cengo, yuz: cengo.normal}
**CENGO [gulen]:** Ben de herkese borçluyum. Ödeşiyoruz. {ekran: peri+cengo, yuz: peri.kas}
**PERİ [normal]:** Plan şu. Önce dükkâna bakarız: cam, kasa, kamera. Sonra müdür Kenan'la ve Gizem'le konuşuruz. {arka: A7, ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [kas]:** Un toptancısı Rüstem'e de uğrayalım. Nadide Hanım "bir kuruş borcumuz olmadı" dedi ya. {ekran: peri+cengo, yuz: peri.normal}
**PERİ [merakli]:** Ne var bunda? {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [kas]:** Kırk yılda hiç borç olmaz mı? Ben bir ayda borçlanırım. Bu kadar temiz hesap bana tuhaf geldi. {ekran: peri+cengo, yuz: peri.merakli}
**PERİ [kas]:** Siz pastane işletmiyorsunuz ama. {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [gulen]:** Ama pastaneye borçluyum. Konuyu bilirim. {ekran: peri+cengo, yuz: peri.kas}

---

## ipucu dukkan
⚙ arka: A23d · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ Kural 21c: cam, şifre ve lacivert önlük Kenan'a da Ferruh'a da uyar. Ferruh ekranda görünür: şifreyi ve önlüğü kendisi söyler.

*Karaköy. Susam Pastanesi'nin önü: kepenk yarı açık, kapı aralık, vitrinde simit tablaları.* {arka: A23d, mekan}
*Göbekli, bıyıklı, papyonlu bir adam kapıda; lacivert önlüğünü düzeltiyor.* {gir: ferruh, gi: normal, ekran: ferruh}
**FERRUH [normal]:** Hoş geldiniz! Ben Ferruh, dükkânı ben yönetirim. Nadide Hanım dedektif tuttuğunu söyledi. {gir: ferruh, kime: peri, ekran: peri+ferruh, yuz: peri.normal}
*Peri içeri adım atıyor ve duruyor. İçeride tezgâh, duvarlarda eski fotoğraflar; tezgâhın üstünde, kocaman bir çerçevede, kendi afişi: kraliçe yıllarından, köşesinde kendi imzası.* {arka: A23, peri: sasirmis, ekran: peri}
**PERİ [sasirmis]:** … {kime: ferruh, ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [normal]:** Bu afiş Nadide Hanım'ın gözbebeği. Yıllar önce bir defilede imzalatmış. Ama siz o değilsiniz tabii. {kare: K37}
**PERİ [kas]:** Değilim. {ekran: peri+ferruh, yuz: ferruh.normal}
**PERİ [kas]:** Ama ışık kötü. Fotoğrafçı sol profili çekmeliydi, hep söylerdim. {ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [normal]:** Kime söylerdiniz efendim? {kime: peri, ekran: peri+ferruh, yuz: peri.kas}
**PERİ [sasirmis]:** … Genel olarak söylerdim. {ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [normal]:** Tabii efendim, tabii. {ekran: peri+ferruh, yuz: peri.sasirmis}
**CENGO [gulen]:** *(Peri'nin kulağına)* Gizli görev yine bitti. Bu sefer kendin bitirdin. {kime: peri, kare: K56}
*Arka sokak. Kırık bir pencere; cam kırıkları kaldırımda, sokağa saçılmış.* {arka: A26, mekan}
**FERRUH [normal]:** İşte, bakın! Hırsız camı dışarıdan kırmış. Siz de gördünüz; gerekirse tanıklık edersiniz. {gir: ferruh, kime: peri, ekran: peri+ferruh, yuz: peri.sasirmis}
**PERİ [kas]:** Kırıklar sokakta, Ferruh Bey. Cam içeriden kırılmış. {ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [terli]:** Haklısınız… İçeriden de kırılmış olabilir tabii. {ekran: peri+ferruh, yuz: peri.kas}
*Ofis. Dağınık bir masa, açık duran çelik bir kasa, köşede kamera kayıt cihazı.* {arka: A24, mekan}
**PERİ [merakli]:** Kasanın kapağında tek çizik yok. Zorla açılmamış. {gir: ferruh, gi: normal, kime: ferruh, ekran: peri+ferruh}
**FERRUH [normal]:** Şifreyle açılır; şifreyi Kenan'la ben biliriz. Gizem şifreyi bilmez, günün parasını üstteki yarıktan atar. {kime: peri, ekran: peri+ferruh, yuz: peri.merakli}
**CENGO [kas]:** Kamera ne göstermiş? {ekran: cengo+ferruh, yuz: ferruh.normal}
**FERRUH [normal]:** Hiçbir şey. Kamera bozuk; o gece hiç kayıt almamış. {kime: cengo, ekran: cengo+ferruh, yuz: cengo.kas}
*Cengo kayıt cihazının arkasına eğiliyor; fişi çekilmiş. Takıyor. Ekranda son kare: pazar gece 22.46, ofis kapısında lacivert bir önlük kolu.* {kare: D8}
**CENGO [kas]:** Kamera bozuk değil, biri fişini çekmiş. Son kayıt pazar gece, on kırk altı. {kare: D8}
**PERİ [merakli]:** Son karede lacivert bir önlük kolu var. Dükkânda bu önlüğü kim giyer? {gir: ferruh, kime: ferruh, ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [terli]:** Kenan'la ben. Bir de… herkes giyebilir aslında. {kime: peri, ekran: peri+ferruh, yuz: peri.merakli}
**PERİ [kas]:** Herkes değil. Tezgâhtakiler pembe önlük giyiyor; Gizem de. {ekran: peri+ferruh, yuz: ferruh.terli}
**FERRUH [normal]:** Ne keskin gözünüz var. Fotoğrafçılara da böyle söylerdiniz herhalde. {ekran: peri+ferruh, yuz: peri.kas}

## ipucu alarm
⚙ arka: A26 · figurler: peri, cengo · set: trenckot · cset: haki
⚙ Kural 21c: ortak kod Gizem'e de Ferruh'a da uyar (Gizem'i şüpheli gösterir, Kenan'ı aklar). Ferruh adıyla anılır.

*Susam'ın arka sokağı. Gri iş tulumlu, tıknaz bir adam kamyonetin kapısında, kulağında kalem.* {gir: sedat, ekran: sedat, yuz: sedat.normal}
**CENGO [normal]:** Sedat, Susam'ın alarmını sen takmıştın. Pazar gecenin kaydını göster. {gir: sedat, kime: sedat, ekran: cengo+sedat, yuz: sedat.normal}
**SEDAT [normal]:** Göstereyim abi, sana borçluyum. Geçen ay anahtarı kamyonetin içinde unutmuştum; kapıyı telinle sen açtın. {gir: sedat, kime: cengo, ekran: cengo+sedat, yuz: cengo.normal}
**CENGO [gulen]:** Telim hâlâ cebimde. Kayıtta ne var? {ekran: cengo+sedat, yuz: sedat.normal}
**SEDAT [tablet]:** Bakayım. *(tableti açıp)* Pazar gece on kırk dörtte alarm kapatılmış. Dükkânın ortak koduyla. {kime: cengo, ekran: cengo+sedat, yuz: cengo.gulen}
**SEDAT [tablet]:** On bir elli beşte yine ortak kodla kurulmuş. Sabah altı otuzda müdür koduyla açılmış. {ekran: cengo+sedat, yuz: cengo.gulen}
**PERİ [merakli]:** Ortak kodu kim bilir? {ekran: peri+sedat, yuz: sedat.tablet}
**SEDAT [normal]:** Tezgâhtaki kız, Gizem. Bir de Ferruh Bey. Kenan'ın kendi kodu var; o gece kullanılmamış. {kime: peri, ekran: peri+sedat, yuz: peri.merakli}
**CENGO [kas]:** Cam kırılınca alarm ötmedi mi? {ekran: cengo+sedat, yuz: sedat.normal}
**SEDAT [tablet]:** Sensör hiç ötmemiş. Cam kırılırken alarm kapalıymış. {kime: cengo, ekran: cengo+sedat, yuz: cengo.kas}
**CENGO [kas]:** Yani biri önce alarmı kapatmış, camı sonra kırmış. Kimse duymasın diye. {kime: peri, ekran: peri+cengo, yuz: peri.merakli}
**PERİ [kas]:** Ortak kodu Gizem biliyor. {ekran: peri+cengo, yuz: cengo.kas}
**CENGO [normal]:** Ferruh da biliyor. {ekran: peri+cengo, yuz: peri.kas}
**SEDAT [normal]:** Abi, bunları ben söylemedim, tamam mı? {cik, ekran: sedat+cengo, yuz: cengo.normal}

## ipucu gizem
⚙ arka: A27 · figurler: peri, cengo · set: trenckot · cset: haki
⚙ Kural 21c: Gizem gece oradaydı (kendini şüpheli gösterir); fotoğraftaki lacivert önlük Kenan'a da Ferruh'a da uyar. Ferruh adıyla anılır ("patron").

*Tophane. Dar bir sokakta eski bir apartmanın önü. Elinde simit poşeti olan genç bir kadın, kapı önündeki yaşlı komşulara simit dağıtıyor.* {kare: K38}
**TEYZE:** Gizem kızım, susamlısından bir tane daha. {kare: K38}
**GİZEM [isveli]:** Hepsi susamlı teyzeciğim. Susam Pastanesi'nden geldiler. {gir: gizem, gi: isveli, kare: K38}
**GİZEM [isveli]:** Cengo! Burada veresiye yok tatlım, defterin dükkânda kaldı. {gir: gizem, kime: cengo, ekran: cengo+gizem, yuz: cengo.normal}
**CENGO [gulen]:** Simit için gelmedim. Pazar geceyi soracağız. {ekran: cengo+gizem, yuz: gizem.isveli}
**GİZEM [suzuyor]:** *(Peri'yi baştan aşağı süzerek)* Sen dükkândaki afişsin. {kime: peri, ekran: peri+gizem, yuz: peri.normal}
**PERİ [kas]:** Değilim. {ekran: peri+gizem, yuz: gizem.suzuyor}
**GİZEM [isveli]:** Tabii, tatlım. {ekran: peri+gizem, yuz: peri.kas}
**GİZEM [isveli]:** Sana anlatırım, Cengo. Afiş hanıma değil. {kime: cengo, ekran: cengo+gizem, yuz: cengo.gulen}
**PERİ [kiskanc]:** Afiş hanım burada ve duyuyor. {ekran: peri+gizem, yuz: gizem.isveli}
**GİZEM [normal]:** Pazar gece on bir buçukta dükkâna geri döndüm. Artan simitler için. Patron yasaklıyor; artanı çöpe attırır. {kime: cengo, cengo: kas, ekran: cengo+gizem}
**GİZEM [normal]:** Arka kapıdan girdim. Alarm ötmedi. Ofiste ışık vardı. {ekran: cengo+gizem, yuz: cengo.kas}
**GİZEM [korkmus]:** Ofisin kapısı aralıktı. Kasanın başında biri vardı, sırtı bana dönüktü. {ekran: cengo+gizem, yuz: cengo.kas}
**GİZEM [korkmus]:** Telefonu çıkarıp çektim. Elim titriyordu; tablayı bırakmak aklıma bile gelmedi. {ekran: cengo+gizem, yuz: cengo.kas}
*Gizem telefonunu uzatıyor. Fotoğraf 23.31: önde Gizem'in tablayı tutan eli; arkada, ofisin kapısından, kasanın başında lacivert önlüklü biri. Sırtı dönük.* {kare: D9}
**GİZEM [korkmus]:** Lacivert önlük. Onu Kenan'la Ferruh Bey giyer. Korktum, simitleri kaptım, kaçtım. {kare: D9}
**CENGO [kas]:** Neden kimseye söylemedin? {ekran: cengo+gizem, yuz: gizem.korkmus}
**GİZEM [kas]:** Ne diyecektim? "Gece gizlice simit almaya girdim" mi? Ferruh Bey zaten beni suçluyor. {kime: cengo, ekran: cengo+gizem, yuz: cengo.kas}
**PERİ [kiskanc]:** İzinsiz simit almak da hırsızlıktır. {gir: gizem, kime: gizem, ekran: peri+gizem, yuz: gizem.kas}
**GİZEM [isveli]:** Çöpe gidecek simidi yaşlılara vermek hayır işidir, tatlım. {kime: peri, ekran: peri+gizem, yuz: peri.kiskanc}

## ipucu kenan
⚙ arka: A25 · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ Kural 21c: yalan ve batan dükkân Kenan'ı şüpheli gösterir; maaşı Ferruh'un yatırdığı söylenir (Ferruh ekranda). Önlük E'yi açar.

*Susam'ın imalathanesi. Taş fırın, simit tezgâhı, büyük bir pekmez kazanı. Uzun boylu, sakallı bir adam lacivert önlüğüyle hamur kesiyor.* {kare: K54, gir: kenan, gi: normal}
**PERİ [normal]:** Kenan Bey. Pazar gece neredeydiniz? {gir: kenan, gi: normal, kime: kenan, ekran: peri+kenan}
**KENAN [normal]:** Evdeydim. Erken yattım; sabah fırını ben açıyorum. {gir: kenan, ekran: peri+kenan, yuz: peri.normal}
**PERİ [merakli]:** Kaçta yattınız? {ekran: peri+kenan, yuz: kenan.normal}
**KENAN [normal]:** Onda. En geç on. {ekran: peri+kenan, yuz: peri.merakli}
*Kenan kocaman esniyor. Gözlerinin altında koyu halkalar var.* {gir: kenan, gi: esniyor, ekran: kenan}
**PERİ [kas]:** Onda yatan biri öğlen böyle esnemez, Kenan Bey. Siz o gece hiç uyumamışsınız. {gir: kenan, gi: normal, kime: kenan, ekran: peri+kenan}
**KENAN [kizgin]:** Uykumu da mı size soracağım? {kime: peri, ekran: peri+kenan, yuz: peri.kas}
**CENGO [kas]:** Soygunu sabah ilk sen görmüşsün. Altı buçukta. {ekran: cengo+kenan, yuz: kenan.kizgin}
**KENAN [normal]:** Her sabah fırını ben açarım. O sabah da açtım, kasayı açık buldum. {kime: cengo, ekran: cengo+kenan, yuz: cengo.kas}
**KENAN [kizgin]:** Maaşlar iki aydır geç yatıyor. Maaşı Ferruh Bey yatırır. {kime: peri, ekran: peri+kenan, yuz: peri.kas}
**KENAN [kizgin]:** Bu dükkân batıyor, hanımefendi. Herkes biliyor, Nadide Hanım hariç. {ekran: peri+kenan, yuz: peri.kas}
**PERİ [merakli]:** Batan gemiden siz de mi kaçıyorsunuz? {ekran: peri+kenan, yuz: kenan.kizgin}
**KENAN [kizgin]:** Ben işimi yaparım, hamur keserim. Gerisi beni ilgilendirmez. {ekran: peri+kenan, yuz: peri.merakli}
*Kenan fırına dönüyor. Cengo duvardaki dolabı teliyle açıyor. İçinde katlanmış, başka bir pastanenin önlüğü.* {kare: D10}
**CENGO [kas]:** Bu önlük sizin değil. Kadıköy'deki Badem Pastanesi'nin. {kare: D10}
**KENAN [kizgin]:** O… bir hediye. Dolabıma dokunmayın. {gir: kenan, kime: cengo, ekran: cengo+kenan, yuz: cengo.kas}
**CENGO [gulen]:** Ben dokunmadım. Telim açtı. {kime: peri, ekran: peri+cengo, yuz: peri.merakli}
**PERİ [kas]:** Telle açılan dolap mahkemede kanıt sayılmaz, Cengo. {gir: cengo, kime: cengo, ekran: peri+cengo, yuz: cengo.gulen}
**CENGO [kas]:** Burası mahkeme değil, fırın. Önlük de önlüktür. {ekran: peri+cengo, yuz: peri.kas}

## ipucu badem
⚙ arka: A28 · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ Kural 21c: Kenan'ı aklar; Ferruh için yalnız sebep (merkezi satmak istemesi suç değildir).

*Kadıköy. Badem Pastanesi: parlak bir vitrin, mutfak kapısı aralık. Beyaz şef ceketli, kısa kırçıl saçlı, uzun boylu bir kadın elinde sıkma torbasıyla.* {gir: ayla, ekran: ayla, yuz: ayla.normal}
**CENGO [normal]:** İş arıyorum. Hamurdan anlarım. {gir: ayla, kime: ayla, ekran: cengo+ayla, yuz: ayla.normal}
**AYLA [bakiyor]:** *(Cengo'nun ellerine bakıp)* Bu eller hamur görmemiş. Sen iş aramıyorsun. {gir: ayla, kime: cengo, ekran: cengo+ayla, yuz: cengo.normal}
**PERİ [normal]:** Haklısınız. Susam'ın müdürü Kenan'ı soracaktık. {ekran: peri+ayla, yuz: ayla.bakiyor}
**AYLA [normal]:** Kenan pazar gece buradaydı, ondan sabah ikiye kadar. Onu deneme vardiyasına çağırmıştım. {kime: peri, ekran: peri+ayla, yuz: peri.normal}
**AYLA [normal]:** Profiterolü çok iyi. Susam'dan ayrılırsa işe alırım. Ayrılır da; orası batıyor. {ekran: peri+ayla, yuz: peri.normal}
**CENGO [kas]:** Battığını nereden biliyorsunuz? {ekran: cengo+ayla, yuz: ayla.normal}
**AYLA [normal]:** Geçen ay Ferruh Bey geldi. Susam'ın merkezini bize satmak istedi. Fiyatı tutmadı. {kime: cengo, ekran: cengo+ayla, yuz: cengo.kas}
**PERİ [merakli]:** Nadide Hanım biliyor mu? {ekran: peri+ayla, yuz: ayla.normal}
**AYLA [normal]:** Bildiğini sanmıyorum. Ferruh Bey "aramızda kalsın" dedi. {kime: peri, ekran: peri+ayla, yuz: peri.merakli}
**CENGO [gulen]:** Artık aramızda kalmadı. {ekran: cengo+ayla, yuz: ayla.normal}
**AYLA [normal]:** Gitmeden bir profiterol alın. Parasıyla. {cik, ekran: cengo+ayla, yuz: cengo.gulen}

## ipucu toptanci
⚙ arka: A29 · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ Kural 21c: 720.000 şişirilmiş; parayı getireni Rüstem görmedi (Kenan da olabilir). Ferruh yalnız "sıkışık" diye anılır: sebep, kanıt değil.

*Eminönü. Un çuvallarıyla dolu dar bir dükkân. Gür beyaz bıyıklı, iri bir adam, hesap makinesi elinde, ayağa kalkıyor.* {gir: rustem, ekran: rustem, yuz: rustem.normal}
**RÜSTEM [normal]:** Siz Nadide Hanım'ın duvarındaki afişsiniz! Dükkâna her un götürdüğümde size bakarım. {gir: rustem, kime: peri, ekran: peri+rustem, yuz: peri.normal}
**PERİ [kas]:** Ben o değilim. {ekran: peri+rustem, yuz: rustem.normal}
**RÜSTEM [normal]:** Tabii, tabii. Buyurun, kraliçem. {ekran: peri+rustem, yuz: peri.kas}
**PERİ [normal]:** Susam'ın size borcu var mı? {ekran: peri+rustem, yuz: rustem.normal}
**RÜSTEM [normal]:** Vardı. Aylardır ödemiyorlardı. Cumartesi sabah birden hepsini ödediler. {kime: peri, ekran: peri+rustem, yuz: peri.normal}
**RÜSTEM [normal]:** Susam'dan biri geldi, elden nakit ödedi. İki yüz kırk bin lira, bir Susam poşetinin içinde. {ekran: peri+rustem, yuz: peri.normal}
**CENGO [kas]:** Kim getirdi? {ekran: cengo+rustem, yuz: rustem.normal}
**RÜSTEM [normal]:** Parayı kalfam aldı, getireni ben görmedim. Tam bir günlük hasılat kadar para. {kime: cengo, ekran: cengo+rustem, yuz: cengo.kas}
**RÜSTEM [normal]:** Ferruh Bey çok sıkışık. Piyasaya da borcu var. {ekran: cengo+rustem, yuz: cengo.kas}
**PERİ [merakli]:** Cuma günü kazanılan para cumartesi borca gittiyse, pazar gece kasada olamaz. {gir: rustem, kime: rustem, ekran: peri+rustem, yuz: rustem.normal}
**CENGO [kas]:** Yani sigortaya söylenen yedi yüz yirmi bin kasada hiç yoktu. {kime: peri, ekran: peri+cengo, yuz: peri.merakli}
**RÜSTEM [normal]:** Ama afişte daha gençtiniz. {kime: peri, ekran: peri+rustem, yuz: peri.merakli}
**PERİ [sinirli]:** Afişte rötuş vardı. {ekran: peri+rustem, yuz: rustem.normal}

---

## sahne yuzlesme_dogru
⚙ arka: A23b · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ Oyuncu hangi doğru çifti seçtiyse seçsin aynı sahne; kanıtı adıyla anmaz.

*Salı akşamı. Susam'ın merkezi, kepenk yarı inik. Nadide Hanım herkesi tezgâhın önüne toplamış: Ferruh, Kenan, Gizem.* {kare: K39}
**PERİ [normal]:** Ferruh Bey. Dükkânı siz soydunuz. Nasıl soyduğunuzu da biliyorum. {gir: ferruh, kime: ferruh, ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [alingan]:** *(papyonunu düzelterek)* Peri Hanım, ne diyorsunuz? Siz benim tanığımdınız… {gir: ferruh, kime: peri, ekran: peri+ferruh, yuz: peri.normal}
**PERİ [kas]:** Elimde iki kanıt var. İkisi de sizi gösteriyor. {ekran: peri+ferruh, yuz: ferruh.alingan}
**NADİDE [kirgin]:** Ferruh… Doğru mu bu? {gir: nadide, kime: ferruh, ekran: nadide+ferruh, yuz: ferruh.alingan}
**FERRUH [terli]:** Nadide Hanım… {gir: ferruh, kime: nadide, ekran: ferruh+nadide, yuz: nadide.kirgin}
*Ferruh tezgâha bakıyor, kapıya bakıyor. Sonra depoya doğru koşuyor.* {cik, kare: K40}

## sahne yuzlesme_zayif
⚙ arka: A23b · figurler: peri, cengo · set: trenckot_acik · cset: haki

*Salı akşamı. Susam'ın merkezi, kepenk yarı inik. Nadide Hanım herkesi tezgâhın önüne toplamış: Ferruh, Kenan, Gizem.* {kare: K39}
**PERİ [normal]:** Dükkânı siz soydunuz, Ferruh Bey. {gir: ferruh, kime: ferruh, ekran: peri+ferruh, yuz: ferruh.normal}
**FERRUH [alingan]:** Ben mi? Kırk beş yıllık dükkân, ben mi? Kanıtınız ne? {gir: ferruh, ekran: peri+ferruh, yuz: peri.normal}
**PERİ [utanmis]:** …Şimdilik bir his. {ekran: peri+ferruh, yuz: ferruh.alingan}
**NADİDE [kirgin]:** His yetmez. Yarın sabah eksper geliyor; dükkânı baştan aşağı arayacak. {gir: nadide, kime: ferruh, ekran: nadide+ferruh, yuz: ferruh.alingan}
**NADİDE [kirgin]:** Depodaki un çuvallarına kadar. Ferruh, depo anahtarını hazırla. {kime: ferruh, ekran: nadide+ferruh, yuz: ferruh.alingan}
**FERRUH [bembeyaz]:** *(yüzü bembeyaz)* Depo mu? Depoya… gerek yok ki. Ben… bir bakayım. {gir: ferruh, kime: nadide, ekran: ferruh+nadide, yuz: nadide.kirgin}
*Ferruh depoya doğru koşuyor.* {cik, kare: K40}

## sahne yuzlesme_kenan
⚙ arka: A23b · figurler: peri, cengo · set: trenckot_acik · cset: haki

*Salı akşamı. Susam'ın merkezi, kepenk yarı inik. Nadide Hanım herkesi tezgâhın önüne toplamış: Ferruh, Kenan, Gizem.* {kare: K39}
**PERİ [kas]:** Kenan Bey. Dükkânı siz soydunuz. {gir: kenan, kime: kenan, ekran: peri+kenan, yuz: kenan.normal}
**KENAN [onluksuz]:** *(önlüğünü çıkarıp)* Pazar gece Kadıköy'deydim. İş denemesindeydim. {gir: kenan, ekran: peri+kenan, yuz: peri.kas}
**KENAN [onluksuz]:** Gitmek istiyordum, çünkü bu dükkân batıyor. Ferruh Bey size söylemedi mi? {ekran: peri+kenan, yuz: peri.kas}
**NADİDE [kirgin]:** Batıyor mu? Yarın sabah eksper gelince her şeyi açacağız, Ferruh. {gir: nadide, kime: ferruh, ekran: nadide+ferruh, yuz: ferruh.normal}
**NADİDE [kirgin]:** Defterleri de, depoyu da, un çuvallarına kadar. {kime: ferruh, ekran: nadide+ferruh, yuz: ferruh.normal}
*Herkes Ferruh'a dönüyor.* {gir: ferruh, gi: bembeyaz, kare: K40a}
**FERRUH [bembeyaz]:** *(yüzü bembeyaz)* Depo mu? Depoya… gerek yok ki. Ben… bir bakayım. {gir: ferruh, kime: nadide, ekran: ferruh+nadide, yuz: nadide.kirgin}
*Ferruh depoya doğru koşuyor.* {cik, kare: K40k}

## sahne yuzlesme_gizem
⚙ arka: A23b · figurler: peri, cengo · set: trenckot_acik · cset: haki

*Salı akşamı. Susam'ın merkezi, kepenk yarı inik. Nadide Hanım herkesi tezgâhın önüne toplamış: Ferruh, Kenan, Gizem.* {kare: K39}
**PERİ [kas]:** Gizem. Dükkânı sen soydun. {gir: gizem, kime: gizem, ekran: peri+gizem, yuz: gizem.normal}
**GİZEM [kas]:** Oradaydım, evet. Simit için. {gir: gizem, ekran: peri+gizem, yuz: peri.kas}
**GİZEM [telefon]:** Ama içeride biri vardı. Bak. *(telefonu tezgâha bırakıyor)* {ekran: peri+gizem, yuz: peri.kas}
**NADİDE [kirgin]:** Lacivert önlük… Bu fotoğrafı yarın sabah eksper görecek. {gir: nadide, kime: peri, ekran: peri+nadide, yuz: peri.kas}
**NADİDE [kirgin]:** Dükkânı da baştan aşağı arayacak, depodaki un çuvallarına kadar. {kime: peri, ekran: peri+nadide, yuz: peri.kas}
*Fotoğraf elden ele geçiyor. Herkes Ferruh'a dönüyor.* {gir: ferruh, gi: bembeyaz, kare: K40b}
**FERRUH [bembeyaz]:** *(yüzü bembeyaz)* Depo mu? Depoya… gerek yok ki. Ben… bir bakayım. {gir: ferruh, kime: nadide, ekran: ferruh+nadide, yuz: nadide.kirgin}
*Ferruh depoya doğru koşuyor.* {cik, kare: K40}

## sahne kovalamaca
⚙ arka: A25 · figurler: peri, cengo · set: trenckot_acik · cset: haki
⚙ Her sonuçta aynı. Peri erotik + gülünç, felaketi pekmez + susam (simit olur); Ferruh'u şans (dökülen susam) yakalar; para çuvaldan fışkırır.

*Ferruh un deposuna dalıyor, çuval yığınını deviriyor. Cengo un bulutunun içinde kalıyor; bembeyaz, yalnız gözleri görünüyor.* {arka: A25b, kare: K41, cset: unlu}
**CENGO [kas]:** *(öksürerek)* Korkmayın, hayalet değilim! Benim, Cengo! {kare: K41}
*Peri Ferruh'un peşinden imalathaneye koşuyor. Pekmez kazanının ıslak kenarında kayıyor ve kazanın içine oturuyor.* {arka: A25, kare: K42, set: simit, peri: sinirli}
**PERİ [sinirli]:** *(kazanın içinden)* Kimse bir şey demesin. Bilerek girdim. {kare: K42}
*Peri kazandan çıkarken susam tablasına kapaklanıyor. Baştan aşağı susamlı.* {kare: K43}
**GİZEM:** Simit gibi oldun tatlım. Seni fırına mı verelim? {kare: K43}
*Ferruh arka kapıya koşarken Peri'nin döktüğü susamlara basıyor, kayıyor, bir un çuvalının üstüne düşüyor. Çuval yırtılıyor; içinden bantlı para desteleri fışkırıyor. Bembeyaz Cengo üstüne yetişiyor.* {arka: A25b, kare: K44}
**CENGO [gulen]:** Parayı un çuvalına saklamış. Bankadan güvenli. {kare: K44, kime: peri}
**FERRUH [itiraf]:** Tamam. Ben yaptım. {gir: ferruh, ekran: ferruh+cengo, yuz: cengo.gulen}
**FERRUH [itiraf]:** Susam batıyor. Maaşları ödeyemedim. Merkezi satmaya çalıştım, alan çıkmadı. {ekran: ferruh+cengo, yuz: cengo.gulen}
**FERRUH [itiraf]:** Cuma'nın hasılatıyla cumartesi un borcunu kapattım. Deftere yazmadım. {ekran: ferruh+cengo, yuz: cengo.gulen}
**FERRUH [itiraf]:** Pazar gece kasadakini bu çuvala sakladım. Camı içeriden kırdım. {ekran: ferruh+cengo, yuz: cengo.gulen}
**FERRUH [itiraf]:** Sigortadan yedi yüz yirmi bin alacaktım. Borçları kapatıp Nadide Hanım'a "kurtardım" diyecektim. {ekran: ferruh+cengo, yuz: cengo.gulen}
**GİZEM [ofkeli]:** Beni de suçlayacaktın. {gir: gizem, kime: ferruh, ekran: gizem+ferruh, yuz: ferruh.itiraf}
**FERRUH [itiraf]:** Biri suçlanmalıydı. {gir: ferruh, kime: gizem, ekran: ferruh+gizem, yuz: gizem.ofkeli}
*Gizem kolundaki pembe tezgâh önlüğünü Peri'ye uzatıyor.* {arka: A25, kare: K45}
**GİZEM [isveli]:** Al, bunu üstüne bağla. Pekmezli elbiseyle sokağa çıkamazsın. {kare: K45}
**PERİ [sinirli]:** Tezgâhtar önlüğü mü? Hem de pembe? Ben pembe önlük giymem. {kare: K45}
**GİZEM [isveli]:** Ya pembe önlük ya susam, tatlım. Seç. {kare: K45}
*Peri önlüğü pekmezli elbisesinin üstüne bağlıyor. Gizem, Peri'nin omzundan bir susam alıp yiyor.* {kare: K45b, set: onluklu, peri: kas}
**GİZEM [isveli]:** Susamın kavrulmamış tatlım. Fırına girmeden simit olmaz. {kare: K45c}

---

## sahne karar_soru
⚙ arka: A25 · figurler: peri, cengo, gizem · set: onluklu · cset: unlu · secim_kare: K44
⚙ 23 Kasım 2026 (YAPI-23): kararı kovalamacanın sonunda, imalathanede Gizem sorar; seçim kutusu ("Peri ne yapsın?") arayüzce
⚙ eklenir, seçenekler kararların SEÇENEK satırları. Ücret kesintisi yok (YAPI-32): eski `## ucret` bölümü silindi.

**GİZEM [isveli]:** Eksper yarın sabah geliyor, tatlım. Ona ne diyeceksin? {kime: peri, ekran: peri+gizem, yuz: peri.kas}

## cengo_kanit
⚙ YAPI-25: oyuncu bu doğru kanıtı ELİNDE tutup suçlamada kullanmadıysa Cengo büroda söyler. Satır yalnız kendi kanıtının
⚙ bilgisini söyler. Biçim: **olgu [Cengo ifadesi]:** metin {yuz: peri.x}.

**alarm_kodu [normal]:** Alarm o gece ortak kodla kapanmış, Peri. O kodu Gizem'le Ferruh Bey bilir; Kenan'ın kodu kullanılmamış. {yuz: peri.kas}
**kasa_sifre [normal]:** Kasa zorlanmamış, Peri, şifreyle açılmış. Şifreyi yalnız Kenan'la Ferruh Bey bilir. {yuz: peri.kas}
**kamera_fis [normal]:** Kameranın fişini çeken lacivert önlüklüydü, Peri. Lacivert önlüğü Kenan'la Ferruh Bey giyer. {yuz: peri.kas}
**gizem_foto [normal]:** Gizem'in fotoğrafında kasanın başında lacivert önlüklü biri var, Peri. Sırtı dönük ama önlük belli. {yuz: peri.kas}
**borc_elden [normal]:** Cumartesi un borcunu Susam'dan biri elden ödemiş, Peri: iki yüz kırk bin. Cuma hasılatı kadar. {yuz: peri.kas}
**kenan_deneme [normal]:** Kenan pazar gece sabah ikiye kadar Kadıköy'de, Badem'deydi, Peri. Deneme vardiyasındaymış. {yuz: peri.kas}

## cozum
⚙ "Dosya çözüldü" ekranı. YOL: suçluyu kanıtlayan her doğru çift, sade dille. MASUM <id>: neden masum.

**YOL:** Alarm ortak kodla kapatıldı; ortak kodu Gizem'le Ferruh bilir + kasa şifreyle açıldı; şifreyi Kenan'la Ferruh bilir.
**YOL:** Alarm ortak kodla kapatıldı (Gizem ya da Ferruh) + kamerayı kapatan lacivert önlüklüydü (Kenan ya da Ferruh).
**YOL:** Alarm ortak kodla kapatıldı (Gizem ya da Ferruh) + Gizem döndüğünde kasanın başında lacivert önlüklü biri vardı (Kenan ya da Ferruh).
**YOL:** Alarm ortak kodla kapatıldı (Gizem ya da Ferruh) + kasada 720.000 yoktu, cuma'nın parası cumartesi borca gitmişti; şifreyi bilen yalan söylüyor (Kenan ya da Ferruh).
**YOL:** Kenan pazar gece Kadıköy'deydi + kasayı açabilen, lacivert önlük giyen kalan tek kişi Ferruh.
**MASUM kenan:** Kenan masumdu: pazar gece Kadıköy'de iş denemesindeydi.
**MASUM gizem:** Gizem masumdu: o gece yalnız simit almaya gelmişti. İçeride lacivert önlüklü birini görüp fotoğrafını çekti.

## kanit
⚙ Kim yaptı? ekranında kanıtın kısa adı (18 Ekim 2026, sahibinin onayı). Listede yalnız ad görünür, tam metin dokununca açılır; "Dosya çözüldü" ekranı da adla konuşur. Ad olgunun kendi metninde olanı söyler, fazlasını değil (Nurcan): kişiyi suçlamaz, olayı adlandırır. 2–4 kelime.

**susam_soyuldu:** Soygun gecesi
**gizem_kapatti:** Dükkânı Gizem kapattı
**kenan_acti:** Dükkânı Kenan açtı
**cam_iceriden:** İçeriden kırılan cam
**kasa_sifre:** Şifreyle açılan kasa
**kamera_fis:** Fişi çekilen kamera
**alarm_kodu:** Alarmın ortak kodu
**cam_sensor:** Ötmeyen cam sensörü
**gizem_dondu:** Gizem'in gece dönüşü
**gizem_foto:** Gizem'in fotoğrafı
**kenan_yalan:** Kenan'ın "evdeydim"i
**maas_gec:** Geciken maaşlar
**kenan_onluk:** Badem'in önlüğü
**kenan_deneme:** Kenan'ın deneme vardiyası
**merkez_satilik:** Satılmak istenen merkez
**borc_elden:** Elden ödenen un borcu
**ferruh_borc:** Toptancının sözü

## ani
⚙ Anı defterinde vakanın hatırlatması (Peri'nin notunun üstünde, bütün kararlarda aynı). Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği; karara göre değişen hiçbir şey yazılmaz. 2–3 cümle: müşteri ve kayıp, kim almıştı, neden.

**ANI:** Susam Pastanesi'nin Karaköy'deki merkezi bir pazar gecesi soyuldu; kurucusu Nadide Hanım hırsızı bulmamızı istedi. Soyan, dükkânı yöneten Ferruh'tu: Susam batıyordu, kasadaki parayı bir un çuvalına saklayıp sigortadan yedi yüz yirmi bin alacaktı. Suçu tezgâhtar Gizem'e yıkacaktı.


## hikaye
⚙ "Dosyanın tamamı" ekranı: kaçan ipuçlarından en az birini reklamla izleyen oyuncuya vaka kapanınca bir kez gösterilir (17 Ekim 2026, sahibinin kararı). Gerçekte ne oldu, olay sırasıyla; masumlar o gece neredeydi.

**HİKÂYE:** Susam Pastanesi batıyordu: maaşlar iki aydır gecikiyor, un toptancısına borç birikiyordu. Dükkânı yöneten Ferruh bunu Nadide Hanım'dan sakladı; merkezi gizlice Badem'e satmaya çalıştı, olmadı.
**HİKÂYE:** Cumartesi sabahı kasadaki cuma hasılatını, iki yüz kırk bini alıp un borcunu elden ödedi; kasa defterine yazmadı.
**HİKÂYE:** Pazar akşamı dükkânı Gizem kapattı. Kenan sekiz buçukta çıkmış, Kadıköy'de Badem'deki gizli iş denemesine gitmişti; sabah ikiye kadar oradaydı.
**HİKÂYE:** Ferruh gece on kırk dörtte döndü: alarmı ortak kodla kapattı, kameranın fişini çekti, kasayı şifreyle açtı ve içindeki dört yüz seksen bini depodaki bir un çuvalına sakladı.
**HİKÂYE:** On bir buçukta Gizem artan simitleri almak için geri geldi. Kasanın başında lacivert önlüklü birini görünce telefonla fotoğrafını çekti, korkup kaçtı; gizlice girdiği için kimseye söylemedi.
**HİKÂYE:** Ferruh camı içeriden kırdı, alarmı kurup çıktı. Sabah sigortaya defterdeki yedi yüz yirmi bini bildirdi, kasada hiç olmayan cuma parası dahil; suçu da Gizem'e yıkmaya çalıştı.

## karar eksper_anlat
⚙ etiket: Eksper'e her şeyi anlat

**ÖNİZLEME:** Sigorta talebi düşer; eksper sana 5.000 ₺ ikramiye verir. Susam'ın merkezi kapanır.
**SONUÇ:** Çarşamba sabah eksper'e her şeyi anlattın: defteri, kasayı, çuvalı. Talep düştü, poliçe iptal oldu. Borçlar çuvaldaki parayı yuttu; merkezin kepengi bir hafta sonra indi. Altı kişi işsiz kaldı. Eksper sana beş bin ikramiye bıraktı.
**SEÇENEK:** “Eksper'e her şeyi anlatacağım: defteri, kasayı, çuvalı.”
**CENGO [kas]:** Kepenk indi, Peri. Sabah simidini nereden alacağız şimdi? {yuz: peri.kas}
**DEFTER:** Sigorta gerçeği öğrendi. Susam'ın merkezi kapandı.

## karar ferruh_soylesin
⚙ etiket: Talebi Ferruh kendisi geri çeksin

**ÖNİZLEME:** Ferruh eksper'i arayıp talebi kendisi geri çeker; dolandırıcılık dosyası açılmaz. Çuvaldaki para maaşlara gider.
**SONUÇ:** Ferruh'u telefonun başına oturttun. Eksper'i kendisi aradı, talebi geri çekti: "Sayım hatası yapmışım." Dosya kapandı. Çuvaldaki para iki aylık maaşa gitti. Nadide Hanım merkezi tuttu, Ferruh'un hissesini alıp onu kapıya koydu.
**SEÇENEK:** “Talebi Ferruh kendisi geri çeksin. Kendi ağzıyla.”
**CENGO [gulen]:** Kenan fırından simit verdi, Peri. Yarısı senin. Hesaba yazma. {yuz: peri.normal}
**DEFTER:** Ferruh talebi kendi ağzıyla geri çekti. Merkez açık, maaşlar ödendi.

## karar nadideye_birak
⚙ etiket: Kararı Nadide Hanım'a bırak

**ÖNİZLEME:** Dükkân onun; ne yapılacağına Nadide Hanım karar verir, sen sigortaya bir şey söylemezsin. Nadide Hanım talebi geri çeker, merkezi satar.
**SONUÇ:** "Dükkân sizin, karar da sizin" dedin ve çekildin. Nadide Hanım talebi geri çekti, Ferruh'u kapıya koydu. Borçları ödemek için merkezi Badem'e sattı; dört dükkândan üçü kaldı. Kenan Badem'e geçti.
**SEÇENEK:** “Dükkân Nadide Hanım'ın. Kararı da o versin.”
**CENGO [kas]:** Merkezin tabelası değişmiş, Peri. Badem yazıyor. Susam daha iyiydi. {yuz: peri.kas}
**DEFTER:** Karar Nadide Hanım'ındı. Merkez Badem oldu.

## karar ferruh_payi
⚙ etiket: Ferruh'tan payını al, sus

**ÖNİZLEME:** Ferruh sana 20.000 ₺ verir; eksper'e "dışarıdan biri, bulunamadı" dersin. Nadide Hanım dükkânı kurtulsun diye susar. Sigorta öder; Gizem'in üstündeki şüphe kalkmaz.
**SONUÇ:** Ferruh'un parasını aldın ve eksper'e içeriden kimsenin olmadığını söyledin. Nadide Hanım bir şey demedi; dükkânı kurtulsun istedi. Sigorta yedi yüz yirmi bin ödedi, Ferruh yerinde kaldı. Gizem'in adı esnafın ağzında kaldı: "Kasayı o kızın açtığını söylüyorlar."
**SEÇENEK:** “Payımı ver Ferruh, eksper'e dışarıdan biri derim.”
**CENGO [kas]:** Parayı saydım, Peri. Gizem'e ne diyeceğiz? {yuz: peri.utanmis}
**DEFTER:** Ferruh'un sırrı bende ve Nadide Hanım'da. Gizem'in adı temizlenmedi.

---

## sahne kapanis
⚙ arka: A8 · figurler: peri, cengo · set: onluklu · cset: unlu
⚙ Bağın iki hâli (kural 12a, eşik +1). Gizem her yolda gelir (kanon, Onay 1); afiş büroya asılmaz.

*Akşam. Büro. Peri pembe önlüğün altında, saçında hâlâ susam. Cengo ceketindeki unu silkeliyor.* {ekran: peri+cengo, yuz: peri.normal+cengo.normal}
*Kapı çalınıyor: üç kere.* {ekran: peri+cengo, yuz: peri.normal+cengo.normal}
**PERİ [sasirmis]:** Ev sahibi! {kime: cengo, ekran: peri+cengo, yuz: cengo.normal}
*Peri masanın altına giriyor. Kapıda Gizem: elinde simit tablası, omzunda çantası.* {kare: K53, gizle: peri, gir: gizem, gi: normal}
**GİZEM [normal]:** Susam'dan istifa ettim. Beni suçlayan bir dükkânda bir gün daha çalışmam. {gir: gizem, kime: cengo, kare: K53}
*Gizem simit tablasını masaya bırakıyor.* {gir: gizem, gi: tabla, ekran: gizem}
**GİZEM [isveli]:** Size bir çaycı lazım. Burada çay ocağı var mı? {kime: cengo, ekran: cengo+gizem, yuz: cengo.normal}
**CENGO [gulen]:** Ocak var. Çay yok, para hiç yok. {ekran: cengo+gizem, yuz: gizem.isveli}
**GİZEM [isveli]:** Çayı ben getiririm. Büroya da ben bakarım. {kime: cengo, ekran: cengo+gizem, yuz: cengo.gulen}
**PERİ [kas]:** *(masanın altından çıkarak)* Maaş veremeyiz. {gir: peri, kare: K55}
**GİZEM [isveli]:** Biliyorum. Cengo'ya da vermiyormuşsunuz. {kime: peri, ekran: peri+gizem, yuz: peri.kas}
*Gizem çantasından çerçeveli afişi çıkarıp Peri'ye uzatıyor.* {kare: K52}
**GİZEM [normal]:** Nadide Hanım gönderdi. "Asıl sahibine götür" dedi. {kare: K52}
*Peri afişe bakıyor, sonra Gizem'e. Bir şey demiyor; afişi masanın arkasına, yüzü duvara dönük koyuyor.* {kare: K57}
**CENGO [normal]:** Ben çıkıyorum. İyi akşamlar. {bag: dusuk, kime: gizem, ekran: cengo+gizem, yuz: gizem.normal}
**GİZEM [normal]:** Ben kalıyorum. Çayı demlerim. {bag: dusuk, kime: peri, ekran: peri+gizem, yuz: peri.kas}
**PERİ [sasirmis]:** Cengo… {bag: dusuk, ekran: peri+gizem, yuz: gizem.normal}
*Cengo dönmüyor; merdivenden iniyor. Gizem iki çay koyuyor; birini Peri'nin önüne bırakıp kendininkiyle pencerenin önüne oturuyor. Cengo'nun sandalyesi boş.* {bag: dusuk, kare: K50}
**GİZEM [simit]:** *(tabladan bir simit uzatarak)* Al bakalım. {bag: yuksek, gir: gizem, kime: cengo, ekran: cengo+gizem, yuz: cengo.gulen}
**CENGO [gulen]:** Bunu da veresiye defterine mi yazacaksın? {bag: yuksek, ekran: cengo+gizem, yuz: gizem.simit}
**GİZEM [isveli]:** Yok. Bugün ilk günüm; bu hoş bulduk simidi. {bag: yuksek, kime: cengo, ekran: cengo+gizem, yuz: cengo.gulen}
*Cengo simidi ikiye bölüyor; büyük yarısını Peri'ye veriyor.* {bag: yuksek, kare: K51}
**GİZEM [kas]:** Hıh. Bana yarım bile vermedi. {bag: yuksek, kime: peri, peri: simit_elinde, ekran: peri+gizem}
**PERİ [simit_isiriyor]:** *(yarım simidi ısırarak)* Bu susam kavrulmuş. {bag: yuksek, cengo: yumusak, ekran: peri+gizem, yuz: gizem.kas}

---

## Satır → görsel (yeni görseller)

Görselsiz turda hepsi gri yer tutucu. Tam liste ve promptlar adım 8'de (`vaka3_gorsel.md`).

| kod | ne | nerede |
|---|---|---|
| A23 | Susam'ın merkezi: tezgâh, vitrinde simit tablaları, duvarda Nadide'nin çerçeveli Peri afişi (imza okunmaz) | ipucu dukkan |
| A23b | Susam, salı akşamı: kepenk yarı inik, tezgâh lambası yanık | yüzleşmeler |
| A24 | Susam'ın ofisi: açık çelik kasa, kayıt cihazı, dağınık masa | ipucu dukkan |
| A25 | imalathane: taş fırın, pekmez kazanı, susam tablaları, simit tezgâhı | ipucu kenan, kovalamaca |
| A25b | un deposu: çuval yığınları | kovalamaca |
| A26 | Susam'ın arka sokağı: kırık pencere, kaldırımda cam, alarmcının kamyoneti | ipucu dukkan, ipucu alarm |
| A27 | Tophane: eski apartmanın önü | ipucu gizem |
| A28 | Badem Pastanesi, Kadıköy: parlak vitrin, mutfak kapısı | ipucu badem |
| A29 | Rüstem'in un toptancısı, Eminönü: çuvallar | ipucu toptanci |
| D8 | kayıt cihazının ekranı: son kare, ofis kapısında lacivert önlük kolu (saat yazısı yok) | ipucu dukkan |
| D9 | Gizem'in telefonu: önde tablayı tutan eli (simitler), arkada kasanın başında lacivert önlüklü, sırtı dönük (yazı yok) | ipucu gizem |
| D10 | dolapta katlı, başka renkte bir pastane önlüğü (yazı/logo yok) | ipucu kenan |
| K36 | Peri trençkotu açmış, masada bacak bacak üstüne; Nadide hayranlıkla bakıyor; Cengo | giriş |
| K37 | Peri tezgâhın üstündeki kendi kocaman afişine bakakalmış; Ferruh gururla gösteriyor; Cengo sırıtıyor | ipucu dukkan |
| K38 | Gizem apartman önünde yaşlı komşulara simit dağıtıyor; Peri ve Cengo yaklaşıyor | ipucu gizem |
| K39 | Salı akşamı tezgâhın önü: Nadide, Ferruh, Kenan, Gizem; Peri ve Cengo karşılarında | yüzleşme açılışı (dört sonuç) |
| K40 | Herkes Ferruh'a dönmüş; Ferruh depoya koşuyor | yüzleşme kaçışı (dört sonuç) |
| K41 | un bulutunda bembeyaz Cengo, yalnız gözleri | kovalamaca 1 |
| K42 | Peri pekmez kazanının içinde, bacaklar kenardan havada | kovalamaca 2 |
| K43 | susamlı Peri tablada kapaklanmış; Gizem kapıda | kovalamaca 3 |
| K44 | Ferruh yırtık çuvalın üstünde, para desteleri saçılmış; unlu Cengo yetişiyor | kovalamaca 4 |
| K45 | Gizem Peri'ye pembe önlüğü uzatıyor | kovalamaca sonu |
| K45b | Peri pembe önlüğü bağlıyor; Gizem Peri'nin omzundan bir susam alıp yiyor | kovalamaca sonu |
| K45c | Gizem "Susamın kavrulmamış" diye takılıyor; önlüklü Peri ters bakıyor | kovalamaca sonu |
| K46–K49 | dört kararın ara karesi | kararlar |
| K50 | Akşam büro: Gizem pencerenin önünde çayla; Peri pembe önlüklü masada; Cengo'nun sandalyesi boş | kapanış (bağ düşük) |
| K51 | Cengo simidi ikiye bölüp büyük yarısını Peri'ye veriyor; Gizem kollarını kavuşturmuş bakıyor | kapanış (bağ yüksek) |
| K52 | Gizem Peri'ye çerçeveli afişi uzatıyor | kapanış |
| K53 | Kapıda simit tablalı Gizem ve unlu Cengo; masanın altında pembe önlüklü Peri saklanıyor (V2 K20'nin açısı) | kapanış |
| Peri `trenckot` | normal, kas, sinirli, utanmis, sasirmis, merakli, kiskanc | her yerde |
| Peri `simit` | sinirli, utanmis | kovalamaca |
| Peri `onluklu` | normal, kas, sasirmis, utanmis, sinirli | kovalamaca sonu, kapanış |
| Cengo `haki` | normal, kas, gulen, yumusak | her yerde |
| Cengo `unlu` | normal, kas, gulen, yumusak | kovalamaca, kapanış |
| Nadide | normal, kirgin | giriş, yüzleşme |
| Ferruh | normal, terli, itiraf | dukkan, yüzleşme, kovalamaca |
| Kenan | normal, kizgin | kenan, yüzleşme |
| Gizem | normal, isveli, kas, korkmus | gizem, yüzleşme, kovalamaca, kapanış |
| Sedat, Ayla, Rüstem | normal | birer sahne |
| sesler | teyze | kare üstünde |
