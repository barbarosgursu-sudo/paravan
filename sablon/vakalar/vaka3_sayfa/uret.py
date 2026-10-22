# Vaka 3 görsel üretim sayfasının verisini ve görsel listesini üretir.
# Kullanım: python3 uret.py  → veri.js + vaka3_gorseller.html (yayımlanan sayfa) + ../vaka3_gorsel.md (liste; arac_paket.js okur)
#
# Sahibinin düzeni (22 Ekim 2026): ÖNCE ana referanslar (Aşama 1) tek pencerede üretilir ve Claude'a verilir;
# hepsi onaylanınca Aşama 2'nin grupları ÜÇ ChatGPT penceresinde paralel, arka arkaya üretilir ve 8–10 görsel
# birikince toplu gönderilir. Aşama 3 (kareler) Aşama 2'nin çıktılarını referans alır. "Beklemeden" bölümü
# hiçbir onaya bağlı değil; boş kalan pencerede her an yapılabilir.
import json, os
STIL = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, "
        "ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. "
        "Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
F45 = "Görselin oranı TAM 4:5, dikey (1122×1402). Birinci referansla aynı oran."
F34 = "Görselin oranı TAM 3:4, dikey (1086×1448)."
F916 = "Görselin oranı TAM 9:16, dikey."
BAS = "Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor; yüzü üç çeyrek. Kameraya bakmıyor."
TARZ = ("Referans görsel YALNIZ çizim tarzı, renk, ölçek, kadraj ve arka plan içindir. Başı bilerek silindi: yüzü sıfırdan, aşağıdaki tarife göre çiz; "
        "referanstaki kişinin bedenini, kıyafetini ve POZUNU alma. Bu yepyeni, kimseye benzemeyen bir kişi.")
KADRAJ = "Kadraj: DİKEY. Referanstakiyle aynı ölçek ve kesim: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte. Tek başına, ayakta. Arka plan: düz, tek renk açık bej; hiçbir nesne yok."
POZ_REF = "Eklediğim poz referansı YALNIZ poz içindir; oradaki kıyafeti, saçı ve arka planı alma."
EN = "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde, duruşu en kendinden emin olan o; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor."
AILE = "Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok; müstehcen değil."

PERI_TR = ("kısa, bej bir trençkot: dizin çok üstünde biter, belden kemeriyle sıkı bağlı, yakası açık; yakadan, altındaki vücudu saran "
           "kısa siyah elbisenin derin V dekoltesi görünüyor. Başında çene altından bağlı krem rengi ipek eşarp (eski film yıldızları gibi), "
           "altından kızıl-kahve saçının ucu görünüyor. İri siyah güneş gözlüğü eşarbın üstüne, alnının yukarısına itilmiş; gözleri açıkça görünüyor. "
           "Çıplak bacaklar, ÇORAP YOK. Kırmızı stiletto. Başka takı yok")
PERI_SM = ("aynı kısa bej trençkot ve altındaki dar siyah elbise; trençkot koyu kehribar renkli pekmezle ıslak, lekeli ve parlak, yer yer "
           "akıntılar; bacaklarda birkaç pekmez akıntısı. TENİ KENDİ RENGİNDE: yüzü, boynu ve göğsü pekmeze boyanmamış, turuncu değil; "
           "yalnız yanağında ve dekoltesinde birkaç pekmez damlası. Susam taneleri trençkotta, saçta ve bacaklarda serpiştirilmiş (simit gibi), "
           "yüzde yalnız birkaç tane. Krem eşarp başından kaymış, boynuna düşmüş, ucunda pekmez lekesi; saçı açıkta ve dağınık; "
           "güneş gözlüğü saçın üstünde yamuk duruyor. ÇORAP YOK")
PERI_ON = ("trençkot YOK (çıkarılmış). Pekmez lekeli, vücudu saran kısa siyah elbise (derin V dekolte); elbisenin üstüne belden sıkıca bağlı "
           "pembe bir tezgâh önlüğü: düz pembe, ön cepli, yazısız, logosuz. Saçında ve omuzlarında hâlâ susam taneleri; krem eşarp boynunda gevşek; "
           "güneş gözlüğü saçın üstünde. ÇORAP YOK, kırmızı stiletto")
PERI_CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
CENGO_HK = ("haki renkli, dört cepli bir askeri ceket, kollar dirseğe kadar kıvrık (bileğindeki renkli boncuklu bileklik açıkça görünüyor); "
            "altında gri tişört; siyah kot. Ceketin göğüs cebinden ince bir telin ucu görünüyor. Ceket markasız, rozetsiz, yamasız")
CENGO_UN = ("aynı haki askeri ceket, gri tişört ve siyah kot, ama baştan aşağı una bulanmış: ceket, saç, kaşlar, kirpikler, sakal ve yüz bembeyaz; "
            "un bulutundan çıkmış gibi. Gözleri ve ağzının içi seçiliyor; ifadesi okunuyor")
CK = "Çekicilik: çekici (ama bu vakada en gösterişli kadın Peri'dir; onu geçmez). Çıplaklık yok."

def j(*p): return "\n\n".join(x for x in p if x)
G = []
def ekle(no, ad, anahtar, tur, grup, refs, metin, bak=""):
    G.append(dict(no=no, ad=ad, anahtar=anahtar, tur=tur, grup=grup, refs=refs, metin=metin, bak=bak))
def dosya(f, ne): return {"dosya": f, "ne": ne}
def cikti(g, ne): return {"cikti": g, "ne": ne}
def seritref(ne): return {"serit": True, "ne": ne}

# =====================================================================================
# AŞAMA 1 — ANA REFERANSLAR (tek pencerede, sırayla; Claude'a gönder, onay bekle)
# =====================================================================================
A1 = "Aşama 1 · Ana referanslar"
ekle(1, "Peri, trençkot, normal (temel)", "peri.trenckot.normal", "figür", A1,
  [dosya("L1_peri_yuz.jpg", "yüz"), dosya("peri_beden.jpg", "beden, ölçek, kadraj"), dosya("L14_peri_trenckot.jpg", "YALNIZ trençkotun biçimi"), dosya("peri_kirmizi_stiletto.jpg", "YALNIZ kırmızı stiletto")],
  j("Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı kızıl-kahve saç rengi, aynı çizim tarzı. İkinci referanstaki gibi beden, ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey; düz, tek renk açık bej arka plan, hiçbir nesne yok. Üçüncü referans YALNIZ trençkotun biçimi içindir (o daha uzun; bu kısa olacak). Dördüncü referans YALNIZ ayakkabı içindir: kırmızı stiletto.",
    "Kıyafet: " + PERI_TR + ".",
    "Kitaba göre dedektif kılığına girmiş, kendini tanınmaz sanan eski bir güzellik kraliçesi.",
    "Poz: TAM İKİ KOL, İKİ EL. Sol eli trençkotun kemerinde, sağ eli eşarbın düğümünü çenesinin altında düzeltiyor. Ağırlığı bir bacağında, kalçası hafif yana kırık.",
    BAS, "İfade: sakin, kendinden emin, gizemli yarım gülümseme; \"kimse beni tanımıyor\".", PERI_CEK, YAZI, F45),
  "L1 ile yan yana yüz aynı mı · trençkot KISA mı (dizin çok üstü) · altta siyah elbisenin V dekoltesi · gözlük alında, gözler görünüyor · çorap yok · iki el beşer parmak")
ekle(2, "Peri, pekmezli-susamlı, sinirli (felaket temeli)", "peri.simit.sinirli", "figür", A1,
  [cikti(1, "trençkotlu Peri")],
  j("Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı beden, aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.",
    "Değişen: kadın az önce simitlerin batırıldığı pekmez kazanına düştü, sonra susam tablasına kapaklandı. Kıyafet: " + PERI_SM + ".",
    "Poz: TAM İKİ KOL, İKİ EL. Bir kırmızı stilettosunu sağ elinde topuğundan tutuyor (öbürü ayağında, kadraj dışında); sol eliyle yanağındaki susamları silkeliyor. Dimdik; gururunu korumaya çalışıyor.",
    BAS, "İfade: öfkeli ve gururlu; kaşlar çatık, dudaklar sıkılmış.",
    "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok. Çıplaklık yok.", YAZI, F45),
  "Ten KENDİ RENGİNDE mi (turuncu değil) · eşarp boyunda, saç açık · pekmez kıyafette · susam serpiştirilmiş · elde tek stiletto · yüz G1 ile aynı")
ekle(3, "Peri, pembe önlüklü, normal (kapanış temeli)", "peri.onluklu.normal", "figür", A1,
  [cikti(2, "pekmezli-susamlı Peri")],
  j("Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı beden, aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.",
    "Değişen: kıyafet. Kıyafet: " + PERI_ON + ".",
    "Poz: TAM İKİ KOL, İKİ EL. İki eli önlüğün iplerini belinde bağlıyor, dirsekleri yana açık. Dimdik.",
    BAS, "İfade: onurunu toplamış, sakin; pembe önlüğe rağmen kraliçe gibi; dudağında kuru bir yarım gülümseme.", PERI_CEK, YAZI, F45),
  "Trençkot gerçekten yok mu · önlük düz pembe, yazısız · susam saçta ve omuzlarda · siyah elbise önlüğün altından görünüyor")
ekle(4, "Cengo, haki ceket, normal (temel)", "cengo.haki.normal", "figür", A1,
  [dosya("C1_cengo_yuz.jpg", "yüz"), dosya("cengo_beden.jpg", "beden, ölçek, kadraj, bileklik")],
  j("Birinci referans görseldeki adamın AYNISI: aynı yüz, aynı dağınık koyu saç, iki üç günlük sakal, kalın kaşlar, aynı hınzır yarım gülümseme. İkinci referanstaki gibi beden, ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey; düz, tek renk açık bej arka plan; bileğinde aynı renkli boncuklu bileklik.",
    "Kıyafet: " + CENGO_HK + ". Lacivert hiçbir şey yok.",
    "Poz: TAM İKİ KOL, İKİ EL. Bir eli kotunun cebinde, öbür eliyle ceketin göğüs cebindeki teli yokluyor.",
    BAS, "İfade: hınzır yarım gülümseme.", YAZI, F45),
  "C1 ile yüz aynı mı · ceket haki ve dört cepli · kollar kıvrık, bileklik görünüyor · tel ucu cepte · lacivert yok")
ekle(5, "Cengo, unlu, normal (felaket temeli)", "cengo.unlu.normal", "figür", A1,
  [cikti(4, "haki ceketli Cengo")],
  j("Birinci referans görseldeki adamın AYNISI: aynı yüz, aynı beden, aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.",
    "Değişen: az önce bir un çuvalı yığını üstüne devrildi. Kıyafet: " + CENGO_UN + ". Bej zeminden ayrılsın diye un bembeyaz ve hafif mavimsi gölgeli; konturlar net.",
    "Poz: TAM İKİ KOL, İKİ EL. Bir eliyle ağzını kapatıp öksürüyor, öbür elini havada sallıyor (\"korkmayın, benim!\").",
    BAS, "İfade: gözleri iri, kaşları kalkık; hem komik hem kendinden memnun.", YAZI, F45),
  "Un bembeyaz ama bej zeminden ayrılıyor mu (kesimde kaybolmasın) · yüz yine Cengo · bileklik unun altından seçiliyor")
def konuk(no, ad, anahtar, grup, ref, karakter, kiyafet, poz, ifade, cekim, bak=""):
    ekle(no, ad, anahtar, "figür", grup, [dosya(ref, "yalnız tarz, ölçek, kadraj")],
      j(STIL, TARZ, "Karakter: " + karakter, "Kıyafet: " + kiyafet, "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, cekim, KADRAJ, YAZI, F45), bak)
konuk(6, "Nadide Hanım, normal (temel)", "nadide.normal", A1, "tarz_govde_kadin.jpg",
  "Nadide Hanım, 72, Karaköy'deki Susam Pastanesi'nin kurucusu. İri yapılı, dimdik, ağır başlı ama sıcak. Bembeyaz saç arkada düzgün bir topuz; altın çerçeveli okuma gözlüğü boynunda ince bir zincirle sarkıyor.",
  "koyu yeşil, uzun kollu yün elbise; üstünde el örgüsü bej bir hırka; hırkanın yakasında iri, düz, yuvarlak altın bir broş (simit biçimli değil). Elinde gümüş saplı koyu bir baston, ama bastona yaslanmıyor; yere değmeden tutuyor.",
  "Bir eli bastonun sapında, öbür eli göğsünde, broşun yanında.", "sıcak, hayran bir gülümseme; gözleri parlıyor, sanki karşısında çok sevdiği bir yıldız var.",
  "Çekicilik: yaşına yakışan bir zarafet; görkemli, bakımlı.", "Bembeyaz topuz · broş düz yuvarlak · baston yere değmiyor · iki el")
konuk(7, "Ferruh, normal (temel)", "ferruh.normal", A1, "tarz_govde_iri_erkek.jpg",
  "Ferruh, 50'lerinde, Susam Pastanesi'ni yöneten ortak. Orta boylu, göbekli. Yüz: yuvarlak, tombul, pembe yanaklı, sinekkaydı tıraşlı (sakal yok); üst dudakta KALEM GİBİ İNCE, düzgün kesilmiş siyah-kır bir bıyık (gür değil, sarkık değil; eski film jönleri gibi). Saç: kır, briyantinle parlatılmış, düzgünce geriye yatırılmış; tek tel düşmüyor. Kaşlar ince. Nazik, yardımsever, çok konuşan, herkesi kendi tarafına çekmeye çalışan bir esnaf.",
  "beyaz gömlek, boynunda bordo papyon; üstünde boyundan ve belden bağlı koyu lacivert bir pastane önlüğü (düz, cepsiz, yazısız, logosuz).",
  "Sağ eli göğsünde, sol eli açık avuçla kadrajın soluna uzanmış; \"buyurun, bakın\" der gibi.", "güven veren, biraz fazla geniş bir gülümseme; yardımsever.",
  "", "Bıyık KALEM GİBİ İNCE, yüz tıraşlı · saç briyantinli geriye · Rüstem'e (gür beyaz bıyık) benzemiyor · papyon bordo · önlük lacivert, yazısız")
konuk(8, "Kenan, normal (temel)", "kenan.normal", A1, "tarz_govde_erkek.jpg",
  "Kenan, 40'larında, Susam'ın dükkân müdürü; sabah fırınını o açar. Uzun boylu ve ince. Yüz: uzun ve köşeli, çökük yanaklar, belirgin kemerli bir burun; DÜZGÜN KESİLMİŞ, dolgun, kısa siyah bir sakal (kirli sakal değil); koyu kalın kaşlar, altları mor yorgun gözler. Saç: makineyle çok kısa kesilmiş siyah saç, dağınık değil. Az konuşur, ciddi.",
  "kolları dirseğe kadar sıvanmış gri tişört; üstünde boyundan ve belden bağlı koyu lacivert bir pastane önlüğü (düz, yazısız, logosuz), önlükte un izleri.",
  "Kollarında un; sağ elinde düz, metal bir hamur kazıyıcısı, göğüs hizasında; sol eli önlüğün cebinde.", "ciddi, kapalı; yorgun bir dikkat.",
  "", "Düzgün dolgun sakal (kirli sakal değil) · çok kısa saç · uzun köşeli yüz · Vaka 1'in Serkan'ına benzemiyor · önlük lacivert · kazıyıcı yazısız")
konuk(9, "Gizem, normal (temel)", "gizem.normal", A1, "tarz_govde_kadin.jpg",
  "Gizem, 25, Susam Pastanesi'nde tezgâhtar. Orta boylu, kıvrımlı; koyu bal rengi, omuz boyu, dalgalı saç ve kâküllü; iri ela gözler, çilli burun; pembe-mercan ruj. Hazırcevap, işveli, mahalleli.",
  "dar beyaz tişört, kısa kot etek, beyaz spor ayakkabı; kulaklarında küçük, simit biçimli altın küpeler. Önlük yok. Çorap yok.",
  "Sol eli belinde, sağ eliyle bir tutam kâkülünü kulağının arkasına atıyor; kalçası hafif yana kırık.", "kendinden emin, muzip bir gülümseme.",
  "Çekicilik: genç, sportif ve işveli; çekici ama sade, sokak şıklığı. Bu vakada en gösterişli kadın Peri'dir; Gizem onu geçmez. Çıplaklık yok.",
  "Saç bal rengi + kâkül · çil · simit küpe · beyaz tişört + kot etek · önlük yok")
def mekan(no, ad, an, grup, refs, govde, bak=""):
    ekle(no, ad, an, "arka plan", grup, refs, j(STIL, govde, "İnsan yok; kadraj boş bir sahne gibi, figürler sonradan önüne konacak (ortası açık).", YAZI, F34), bak)
mekan(10, "Susam'ın merkezi: tezgâh ve afiş", "A23", A1,
  [dosya("tarz_mekan_ic.jpg", "yalnız çizim tarzı ve ışık"), dosya("L1_peri_yuz.jpg", "YALNIZ duvardaki afişteki genç kadının yüzü")],
  "Mekân: İstanbul Karaköy'de eski, köklü bir simit-pastane dükkânının içi, sabah. Mermer tezgâh; tezgâhın arkasındaki camlı vitrinde ÜÇ tabla simit; arkada çay ocağı. Taş zemin, yeşil-krem çiniler, pirinç lambalar. Tezgâhın arkasındaki duvarda, ortada, kocaman altın varaklı bir çerçevede eski bir afiş: yirmili yaşlarında, kızıl-kahve saçlı, ikinci referanstaki yüze sahip bir güzellik kraliçesi; başında ince bir taç, omzunda kurdele, saten gece elbisesi; afişin sağ alt köşesinde harf olmayan, tek bir dalgalı mürekkep çizgisi (imza gibi ama okunmaz). Afişte ve dükkânda hiçbir yazı, tabela, fiyat kartı yok. Pencereden İstanbul: eski apartmanlar, dar sokak.",
  "Afişteki yüz L1'e benziyor mu · afişte/kartlarda harf var mı (büyüt) · ÜÇ tabla simit · dükkân sıcak ve eski")
mekan(11, "Susam'ın imalathanesi: fırın, pekmez kazanı, susam tablaları", "A25", A1,
  [dosya("tarz_mekan_ic.jpg", "yalnız çizim tarzı ve ışık")],
  "Mekân: aynı eski simit dükkânının arka tarafındaki imalathane. Solda kemerli taş fırın, ağzında hafif kızıllık. Ortada yerde duran, bel hizasında, geniş, bakır bir pekmez kazanı; içi koyu kehribar renkli parlak pekmezle dolu. Sağda uzun ahşap bir tezgâh ve üstünde İKİ büyük, yayvan susam tablası, susamla dolu. Duvarda raflar, unlu bezler; arkada çuvalların durduğu un deposuna açılan kemerli bir geçit. Un tozu havada ışık huzmesinde.",
  "Pekmez kazanı tek ve bakır · İKİ susam tablası · arkada depo geçidi · yazı yok")

# =====================================================================================
# BEKLEMEDEN — hiçbir onaya bağlı değil (boş kalan pencerede her an)
# =====================================================================================
B = "Beklemeden · onaya bağlı değil"
konuk(12, "Sedat (alarmcı)", "sedat.normal", B, "tarz_govde_erkek.jpg",
  "Sedat, 30'larında, alarm tamircisi. Kısa boylu, tıknaz. Yüz: yuvarlak, bebek yüzlü, TIRAŞLI (sakal, bıyık yok), tombul yanaklar, küçük burun, ince kaşlar. Saç: kısa, sık kıvırcık koyu saç (kel değil); kulağının arkasında bir kurşun kalem. Sevimli, biraz suçlu bakışlı.",
  "gri iş tulumu (markasız, yazısız, rozetsiz), fermuarı göğse kadar; belinde deri bir alet çantası.",
  "Sol elinde küçük, kapalı bir tablet, ekranı göğsüne dönük (ekran görünmüyor); sağ eliyle kulağının arkasındaki kalemi alıyor.", "mahcup bir sırıtış, \"abi, sana borçluyum\".",
  "", "Sakal YOK, bebek yüzü · Kenan'a ve Vaka 1'in Serkan'ına benzemiyor · tulum yazısız · tablet ekranı görünmüyor")
konuk(13, "Ayla Hanım (Badem'in şefi)", "ayla.normal", B, "tarz_govde_kadin.jpg",
  "Ayla Hanım, 50'lerinde, Kadıköy'deki iddialı bir pastanenin şefi. Uzun boylu; kısa kesim kırçıl saç; keskin bakış. Sert, iş bilen.",
  "beyaz şef ceketi (markasız, nakışsız, yazısız), kolları dirseğe kadar sıvalı; zeytin yeşili bir önlük.",
  "Sağ elinde krema sıkma torbası, ucu aşağıda; sol eli belinde.", "değerlendiren, alaycı yarım bakış; bir kaşı kalkık.",
  "", "Şef ceketinde nakış/yazı yok · önlük zeytin yeşili (onaylı G13: Badem'in rengi bu)")
konuk(14, "Rüstem Bey (un toptancısı)", "rustem.normal", B, "tarz_govde_iri_erkek.jpg",
  "Rüstem Bey, 60'larında, Eminönü'nde un toptancısı. İri yapılı, geniş omuzlu. Yüz: UZUN ve kemikli (yuvarlak ve tombul DEĞİL), derin çizgili, kartal burunlu; gür, aşağı sarkan bembeyaz bir pala bıyık; kalın, bembeyaz kaşlar. Saç: tepesi KEL ve parlak, yalnız kulaklarının üstünde ve ensesinde kısa beyaz saç; takke yok. Babacan.",
  "kahverengi kumaş yelek, altında açık mavi gömlek, kolları sıvalı; gömlekte ve yelekte un izleri.",
  "Sol elinde eski bir masa hesap makinesi, ekranı kendine dönük (görünmüyor); sağ eli göğsünde, şapka çıkarır gibi bir selam.", "kocaman, hayran bir gülümseme; heyecanlı.",
  "", "Tepe kel, yüz uzun ve kemikli · pala bıyık bembeyaz · Ferruh'a (yuvarlak, briyantinli) ve Kemal Reis'e benzemiyor · hesap makinesinin ekranı görünmüyor")
mekan(15, "Susam'ın arka sokağı", "A26", B, [dosya("tarz_sokak.jpg", "yalnız çizim tarzı ve ışık")],
  "Mekân: Karaköy'de dar, arnavut kaldırımlı bir arka sokak, sabah. Solda eski taş bir binanın arka cephesi: arka kapı ve yanında kırık bir pencere; cam kırıkları SOKAKTA, kaldırımın üstünde (dışarıda) dağılmış. Sağda kaldırıma yanaşmış küçük, beyaz, eski bir kamyonet; arka kapakları açık, içinde kablo makaraları; kamyonette hiçbir yazı, logo, plaka yazısı yok. Arkada İstanbul: eski apartmanlar.",
  "Cam kırıkları dışarıda, kaldırımda mı · kamyonette yazı/plaka okunuyor mu (büyüt)")
mekan(16, "Tophane: eski apartmanın önü", "A27", B, [dosya("tarz_sokak.jpg", "yalnız çizim tarzı ve ışık")],
  "Mekân: İstanbul Tophane'de dik, dar bir sokakta eski, cumbalı bir apartmanın önü, sabah. Ahşap çift kanatlı apartman kapısı, önünde üç basamak; kapının iki yanında birer ahşap tabure; pencere önlerinde saksı sardunyalar; ipte asılı çamaşır. Sokakta kimse yok. Kapı numarası ya da tabela yok.",
  "Basamak ve iki tabure · numara/tabela yok · İstanbul dokusu")
mekan(17, "Badem Pastanesi, Kadıköy", "A28", B, [dosya("tarz_mekan_ic.jpg", "yalnız çizim tarzı ve ışık"), cikti(13, "YALNIZ Badem'in rengi: Ayla'nın zeytin yeşili önlüğü")],
  "Mekân: Kadıköy'de yeni, parlak, modern bir pastanenin içi. Zeytin yeşili (ikinci referanstaki önlüğün rengi) ve krem renkler; aydınlık camlı vitrinde sıra sıra profiterol, ekler ve küçük pastalar; mermer tezgâh; arkada mutfağa açılan çift kanatlı, yuvarlak pencereli bir kapı. Duvarda tek süs: büyük, yaldızlı bir badem resmi (harf yok). Hiçbir yazı, tabela, fiyat kartı yok. Susam'ın eski dükkânının tam tersi: yeni, ışıklı, düzenli.",
  "Zeytin yeşili + krem (Ayla'nın önlüğüyle aynı) · badem resmi harfsiz · vitrinde fiyat kartı yok")
mekan(18, "Rüstem'in un toptancısı, Eminönü", "A29", B, [dosya("tarz_mekan_ic.jpg", "yalnız çizim tarzı ve ışık")],
  "Mekân: Eminönü'nde eski, loş bir un toptancısı dükkânı. Tavana kadar üst üste dizilmiş beyaz, düz bez un çuvalları (üstlerinde hiçbir baskı, yazı, logo yok); önde eski ahşap bir yazı masası ve sandalye; masada kapalı bir defter (kapağı düz, yazısız). Açık kapıdan dışarıda dar bir çarşı sokağı. Havada un tozu.",
  "Çuvallarda baskı/yazı var mı (büyüt) · defter kapalı")

# =====================================================================================
# AŞAMA 2 — ONAYLI REFERANSLA SERİ ÜRETİM (3 pencere paralel)
# =====================================================================================
def peri_turev(no, grup, temel, kiy, an, ad, poz_dosya, poz, ifade, cek=PERI_CEK):
    refs = [cikti(temel, "onaylı temel")] + ([dosya(poz_dosya, "YALNIZ poz")] if poz_dosya else [])
    ekle(no, ad, an, "figür", grup, refs,
      j("Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı beden, aynı kıyafet: " + kiy + ". Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey." + (" " + POZ_REF if poz_dosya else ""),
        "Değişen tek şey poz ve ifade.", "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, cek, YAZI, F45),
      "Kıyafet sabitleri birebir mi (trençkot kısa, eşarp, gözlük alında, çorap yok) · yüz temelle aynı · iki el")
P1 = "G1 → Peri, trençkot ifadeleri"
for no, an, ad, f, poz, ifade in [
  (19, "kas", "kaşı kalkık", "poz_peri_kas.jpg", "Kolları göğsünün altında gevşekçe kavuşmuş.", "kuşkulu, alaycı; tek kaş yukarıda, dudağın bir köşesi kıvrık."),
  (20, "sinirli", "sinirli", "poz_peri_sinirli.jpg", "Sağ eli belinde, sol işaret parmağı kadrajın soluna uzanmış.", "öfkeli; kaşlar çatık, ağzı açık, karşısındakine çıkışıyor."),
  (21, "utanmis", "utanmış", "poz_peri_utanmis.jpg", "Bir eli alnında, öbürüyle güneş gözlüğünü gözlerinin üstüne indiriyor, saklanır gibi.", "mahcup; yanakları kızarmış, dudaklarını ısırıyor."),
  (22, "sasirmis", "şaşırmış", "poz_peri_sasirmis.jpg", "Bir eli açık avuçla göğsünün üstünde, öbürü yanda.", "irkilmiş; gözler açık, kaşlar kalkık, ağzı hafif açık."),
  (23, "merakli", "meraklı", "poz_peri_merakli.jpg", "Hafifçe öne eğilmiş, bir eli çenesinde.", "şaşkın merak, \"bir daha söyle?\"; gözler kısılmış, başı hafif yana eğik."),
  (24, "kiskanc", "kıskanç", "L9_peri_kollar_kavusuk.jpg", "Kolları göğsünün altında sıkıca kavuşmuş, bir omzu öne çıkmış, çenesi havada.", "kıskanç; dudakları büzük, gözleri kısık ve yan bakıyor, burnu havada; \"hıh\".")]:
  peri_turev(no, P1, 1, PERI_TR, "peri.trenckot." + an, "Peri, trençkot, " + ad, f, poz, ifade)
peri_turev(25, "G2 → Peri, pekmezli-susamlı", 2, PERI_SM, "peri.simit.utanmis", "Peri, pekmezli-susamlı, utanmış", "poz_peri_utanmis.jpg",
  "Bir eli alnında, öbürü elindeki tek kırmızı stilettoyu göğsüne bastırmış.", "mahcup; yanaklar kızarmış (susamların altından), gözleri yarı kapalı.",
  "Çekicilik: en üst seviyede seksi ve komik. Çıplaklık yok.")
P3 = "G3 → Peri, pembe önlüklü"
for no, an, ad, f, poz, ifade in [
  (26, "kas", "kaşı kalkık", "poz_peri_kas.jpg", "Kolları önlüğün üstünde kavuşmuş.", "bir kaşı kalkık, alaycı."),
  (27, "sasirmis", "şaşırmış", "poz_peri_sasirmis.jpg", "Bir eli açık avuçla göğsünde, öbürü önlüğün eteğini tutuyor.", "irkilmiş; gözler açık (kapı çalındı)."),
  (28, "utanmis", "utanmış", "poz_peri_utanmis.jpg", "Önlüğün ucunu iki eliyle tutup yüzünün altına kaldırmış.", "mahcup; yanaklar kızarmış."),
  (29, "sinirli", "sinirli", "poz_peri_sinirli.jpg", "Sağ eli belinde, sol işaret parmağı kadrajın soluna uzanmış.", "öfkeli; \"ben pembe önlük giymem!\".")]:
  peri_turev(no, P3, 3, PERI_ON, "peri.onluklu." + an, "Peri, önlüklü, " + ad, f, poz, ifade)
def cengo_turev(no, grup, temel, kiy, an, ad, f, poz, ifade):
    ekle(no, ad, an, "figür", grup, [cikti(temel, "onaylı temel"), dosya(f, "YALNIZ poz")],
      j("Birinci referans görseldeki adamın AYNISI: aynı yüz, aynı kıyafet: " + kiy + ". Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey. " + POZ_REF,
        "Değişen tek şey poz ve ifade.", "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, YAZI, F45),
      "Kıyafet birebir · yüz temelle aynı · bileklik görünüyor · iki el")
for grup, temel, kiy, set_ in [("G4 → Cengo, haki ceket", 4, CENGO_HK, "haki"), ("G5 → Cengo, unlu", 5, CENGO_UN, "unlu")]:
    base = 30 if set_ == "haki" else 33
    for i, (an, ad, f, poz, ifade) in enumerate([
      ("kas", "kaşı kalkık", "poz_cengo_kas.jpg", "Bir eli çenesinde, öbürü cebinde.", "kuşkulu, alaycı; tek kaş kalkık."),
      ("gulen", "gülen", "poz_cengo_gulen.jpg", "Başı hafif geride, bir eli göğsünde.", "açık, içten bir gülüş."),
      ("yumusak", "yumuşak", "poz_cengo_yumusak.jpg", "İki eli cebinde.", "gülmeyen, sıcak bir bakış.")]):
        cengo_turev(base + i, grup, temel, kiy, "cengo." + set_ + "." + an, "Cengo, " + ("haki" if set_ == "haki" else "unlu") + ", " + ad, f, poz, ifade)
def surum(no, ad, anahtar, grup, temel, kim, poz, ifade, ek="", bak=""):
    ekle(no, ad, anahtar, "figür", grup, [cikti(temel, "onaylı temel")],
      j("Birinci referans görseldeki " + kim + " AYNISI: aynı yüz, saç, kıyafet ve takılar. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.",
        "Değişen tek şey poz ve ifade." + (" " + ek if ek else ""), "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, YAZI, F45), bak)
surum(36, "Nadide, kırgın", "nadide.kirgin", "G6 → Nadide", 6, "kadının", "Bastonu iki eliyle önünde tutuyor, omuzları biraz çökmüş.", "kırgın, inanamıyor; gözleri dolu, \"Ferruh… doğru mu bu?\".")
surum(37, "Ferruh, terli (panik)", "ferruh.terli", "G7 → Ferruh", 7, "adamın", "Bir eliyle papyonunu gevşetiyor, öbür eli havada, yarım bir \"durun\" işareti.", "panik; alnında iri ter damlaları, yüzü bembeyaz, gözleri kaçıyor.",
  "Papyon yamuk.", "Ter damlaları belirgin · papyon yamuk")
surum(38, "Ferruh, itiraf (unlu, yenik)", "ferruh.itiraf", "G7 → Ferruh", 7, "adamın", "İki eli yanlara düşmüş, avuçlar açık; omuzları çökmüş.", "yenik; bakışı aşağıda, dudakları titrek.",
  "Az önce bir un çuvalının üstüne düştü: papyonu çözülmüş sarkıyor, saçı dağılmış, lacivert önlüğü ve gömleği un ve susam tanelerine bulanmış.", "Un + susam · papyon çözük · önlük hâlâ lacivert seçiliyor")
surum(39, "Kenan, kızgın", "kenan.kizgin", "G8 → Kenan", 8, "adamın", "Lacivert önlüğün boyun askısını iki eliyle başının üstünden çıkarıyor.", "kızgın; çenesi kasılmış, bakışı sert.", "", "Önlüğü çıkarırken bile lacivert seçiliyor")
for no, an, ad, poz, ifade, bak in [
  (40, "isveli", "işveli", "Kalçası yana kırık, bir eli belinde, öbürüyle kâkülüyle oynuyor.", "işveli, muzip; yarı kapalı göz, \"tatlım\" der gibi bir gülümseme.", ""),
  (41, "kas", "kaşı kalkık (süzüyor)", "Kolları kavuşuk, ağırlığı tek bacağında.", "karşısındakini baştan aşağı süzüyor; tek kaşı kalkık, dudağında alaycı bir kıvrım.", ""),
  (42, "korkmus", "korkmuş (telefonu gösteriyor)", "Sağ elinde telefonunu kadrajın soluna doğru uzatıyor; telefonun ekranı kadrajın soluna dönük, bize görünmüyor. Sol eli göğsünde.", "korkmuş ama kararlı; kaşlar kalkık, dudakları aralık.", "Telefon ekranı görünmüyor")]:
    surum(no, "Gizem, " + ad, "gizem." + an, "G9 → Gizem", 9, "kadının", poz, ifade, "", bak)
S10 = "G10 → Susam dükkânı (mekân ve detaylar)"
ekle(43, "Susam, salı akşamı: kepenk yarı inik", "A23b", "arka plan", S10, [cikti(10, "onaylı Susam tezgâhı")],
  j(STIL, "Birinci referanstaki dükkânın AYNISI: aynı tezgâh, aynı çiniler, aynı vitrin, duvarda aynı çerçeveli afiş.",
    "Değişen: zaman ve ışık. Salı akşamı, dükkân kapalı: vitrindeki tablalar BOŞ; dışarıya bakan kepenk yarıya kadar inik, altından sokağın lacivert akşam ışığı sızıyor; yalnız tezgâhın üstündeki tek pirinç lamba yanık, sıcak sarı bir ışık havuzu. Tezgâhın önünde geniş boş bir zemin (insanlar sonradan oraya konacak).",
    "İnsan yok.", YAZI, F34), "Afiş hâlâ aynı yerde · kepenk yarı inik · tablalar boş")
ekle(44, "Susam'ın ofisi: açık kasa, kayıt cihazı", "A24", "arka plan", S10, [cikti(10, "onaylı Susam tezgâhı (tarz ve malzeme)")],
  j(STIL, "Birinci referanstaki dükkânın arka tarafında, aynı yapıda, aynı malzeme ve renklerde küçük bir ofis.",
    "Mekân: dar bir oda; dağınık eski ahşap masa (kâğıt destesi KAPALI dosyalarda, kalemlik, soğumuş çay bardağı); köşede kapağı ARDINA KADAR AÇIK, içi BOŞ, yeşil boyalı eski bir çelik kasa (zorlanmamış, kapak sağlam); duvar rafında küçük siyah bir kayıt cihazı ve üstünde küçük, KAPALI bir monitör, kablosu prizden çekilmiş, yerde sarkıyor. Kapı açık; kapıdan dükkânın çinileri görünüyor.",
    "İnsan yok.", YAZI, F34), "Kasa açık ve boş, zorlanmamış · fiş prizden çekik · kâğıtlarda yazı okunmuyor")
ekle(45, "Detay: kayıt cihazının son karesi", "D8", "detay", S10, [cikti(44, "onaylı ofis")],
  j(STIL, "Detay görsel: birinci referanstaki ofisin monitörünün ekranı, tam kadraj (monitörün çerçevesi ince bir kenar olarak görünüyor).",
    "Ekranda güvenlik kamerasının donmuş SON karesi: soluk, gri-yeşil, karlı, siyah-beyaza yakın bir görüntü. Görüntüde ofisin kapı pervazı yukarıdan; pervazın kenarında, kapıdan çıkmakta olan birinin KOYU LACİVERT önlüğünün yalnız kenarı ve sarkan bel bağı görünüyor. Kişinin kendisi kadraj dışında: kolu, eli, gömleği, saçı, ayakkabısı HİÇ görünmüyor. Lacivert, griliğin içinde seçilen tek renk.",
    "Ekranda saat, tarih, kanal numarası, simge, yazı YOK.", YAZI, F34),
  "Önlüğün sahibine dair HİÇBİR şey (kol, gömlek rengi, beden) görünmüyor · ekranda rakam/saat yok")
ekle(46, "Detay: Gizem'in fotoğrafı", "D9", "detay", S10, [cikti(44, "onaylı ofis"), cikti(9, "onaylı Gizem (yalnız eli ve tişörtünün kolu)")],
  j(STIL, "Detay görsel: bir telefon fotoğrafının kendisi, tam kadraj (telefon görünmüyor).",
    "Önde, alt yarıda: bir genç kadının eli (ikinci referanstaki Gizem: ince bilek, kısa beyaz tişört kolu, pembe-mercan oje) dükkânın arka kapısında, gece, artan simitlerle dolu yuvarlak bir tablayı tutuyor; flaş simitleri parlatmış. Arkada, açık kapıdan, birinci referanstaki ofis yarı karanlık: masa lambası yanık; açık çelik kasanın başında ayakta, SIRTI DÖNÜK biri; KOYU LACİVERT bir önlüğün bağları sırtında görünüyor.",
    "Bu kişinin kim olduğu ANLAŞILMAMALI: başı öne eğik ve gölgede, saçı ve yüzü görünmüyor; ne iri ne zayıf, orta yapılı; kolları gölgede, gömleği seçilmiyor; papyon, bıyık, sakal hiçbir şey görünmüyor. Biraz bulanık, aceleyle çekilmiş bir fotoğraf.",
    "Fotoğrafta tarih, saat, simge, yazı YOK.", YAZI, F34),
  "Sırtı dönük kişi ne Ferruh'a (göbek, kır saç, papyon) ne Kenan'a (uzun ince, siyah saç) benzemeli · flaşlı simitler · yazı yok")
S11 = "G11 → İmalathane (mekân ve detay)"
ekle(47, "İmalathane: un deposu", "A25b", "arka plan", S11, [cikti(11, "onaylı imalathane")],
  j(STIL, "Birinci referanstaki imalathanenin arkasındaki un deposu; aynı yapı, taş duvarlar ve ışık.",
    "Mekân: alçak tavanlı, taş duvarlı bir depo; iki yanda tavana kadar üst üste dizilmiş beyaz, düz bez un çuvalları (baskısız, yazısız). Ortada dar bir geçit; geçidin sonunda sokağa açılan eski ahşap bir arka kapı. Havada ince un tozu, kapının aralığından ışık huzmesi.",
    "İnsan yok.", YAZI, F34), "Çuvallarda baskı yok · arka kapı görünüyor")
ekle(48, "Detay: dolapta başka pastanenin önlüğü", "D10", "detay", S11, [cikti(11, "onaylı imalathane (malzeme ve ışık)"), cikti(13, "YALNIZ önlüğün rengi ve biçimi (Ayla'nın önlüğü)")],
  j(STIL, "Detay görsel: birinci referanstaki imalathanenin köşesinde duran eski, gri, metal bir personel dolabı; kapağı ardına kadar açık. Yakın çekim.",
    "Dolabın içinde: askıda ZEYTİN YEŞİLİ bir pastane önlüğü (ikinci referanstaki önlüğün aynısı, kişi yok); göğsünde nakışla işlenmiş tek bir küçük badem şekli (harf yok); bu önlük Susam'ın lacivert önlüklerinden açıkça farklı. Yanında askıda gri bir tişört; dolabın dibinde bir çift eski beyaz iş ayakkabısı. Başka hiçbir şey yok.",
    "Dolapta isim etiketi, yazı, logo YOK.", YAZI, F34), "Önlük Ayla'nınkiyle aynı zeytin yeşili, yalnız badem nakışı · yazı/etiket yok")

# =====================================================================================
# AŞAMA 3 — KARELER (Aşama 2'nin onaylı çıktılarıyla)
# =====================================================================================
K = "Aşama 3 · Kareler"
def kare(no, ad, an, refs, govde, peri_kadin=False, bak=""):
    ekle(no, ad, an, "ara kare", K, refs, j(STIL, govde, EN if peri_kadin else "", YAZI, F34), bak)
kare(49, "Giriş: Peri trençkotu açmış, masada; Nadide hayran", "K36",
  [dosya("buro_gunduz.jpg", "büro"), cikti(1, "Peri"), cikti(4, "Cengo"), cikti(6, "Nadide"), dosya("L25_peri_oturur.jpg", "YALNIZ Peri'nin oturuşu")],
  "Mekân: birinci referanstaki büro, sabah, aynı pencere ve İstanbul manzarası. Kadrajda TAM üç kişi. Ortada Peri (ikinci referans) masanın arkasında sandalyede oturuyor, bacak bacak üstüne atmış (beşinci referanstaki oturuş, YALNIZ poz): trençkotunun kemerini çözmüş, trençkot iki yana açılmış; altındaki vücudu saran kısa siyah elbise ve derin V dekolte görünüyor; krem eşarp başında, güneş gözlüğü alnında; kırmızı stiletto; ÇORAP YOK. Kendinden memnun, kraliçe gibi. Sağda, masanın önünde Nadide Hanım (dördüncü referans; bembeyaz topuz, koyu yeşil elbise, bej hırka, altın broş, elinde baston) ellerini göğsünde birleştirmiş, Peri'ye hayranlıkla bakıyor. Kapının yanında Cengo (üçüncü referans; haki ceket) kollarını kavuşturmuş, sırıtıyor.",
  True, "TAM üç kişi · trençkot açık, elbise görünüyor · çorap yok · Nadide hayran")
kare(50, "Afiş: Peri kendi afişine bakakalmış; Ferruh gururla gösteriyor", "K37",
  [cikti(10, "Susam tezgâhı ve afiş"), cikti(1, "Peri"), cikti(7, "Ferruh"), cikti(4, "Cengo")],
  "Mekân: birinci referanstaki dükkân, aynı afiş duvarda. Kadrajda TAM üç kişi. Önde Peri (ikinci referans; kısa bej trençkot, eşarp, güneş gözlüğü alnında, kırmızı stiletto, ÇORAP YOK) afişe bakakalmış: ağzı hafif açık, bir eli gözlüğünün sapında, gözlüğü gözlerine indirmek üzere; afişteki genç kraliçe ile kendisinin aynı kişi olduğu belli. Sağda Ferruh (üçüncü referans; papyon, lacivert önlük) bir eliyle afişi gururla gösteriyor, geniş gülümsüyor. Solda arkada Cengo (dördüncü referans; haki ceket) Peri'ye bakıp sırıtıyor.",
  False, "Afiş birinci referanstakinin aynısı · Peri'nin yüzü afişteki yüzle tanınır · TAM üç kişi")
kare(51, "Gizem apartman önünde komşulara simit dağıtıyor", "K38",
  [cikti(16, "Tophane apartmanı"), cikti(9, "Gizem"), cikti(1, "Peri"), cikti(4, "Cengo")],
  "Mekân: birinci referanstaki Tophane apartmanının önü, sabah. Kadrajda TAM beş kişi. Kapının önündeki iki taburede İKİ yaşlı kadın komşu oturuyor (başörtülü biri, gri saçlı ve hırkalı öbürü); Gizem (ikinci referans; bal rengi kâküllü saç, dar beyaz tişört, kot etek) elindeki düz kahverengi kâğıt poşetten (yazısız) onlara simit uzatıyor, gülüyor. Sokağın aşağısından Peri (üçüncü referans; kısa bej trençkot, eşarp, gözlük alında, kırmızı stiletto, ÇORAP YOK) ve Cengo (dördüncü referans; haki ceket) yaklaşıyor; Cengo el sallıyor, Peri Gizem'i süzüyor.",
  True, "TAM beş kişi (iki yaşlı komşu) · poşet yazısız · Peri Gizem'den gösterişli")
kare(52, "Yüzleşme: salı akşamı, herkes tezgâhın önünde", "K39",
  [cikti(43, "Susam, salı akşamı"), cikti(1, "Peri"), cikti(4, "Cengo"), dosya("serit_susam_dortlu.jpg", "Susam dörtlüsü: soldan Nadide, Ferruh, Kenan, Gizem")],
  "Mekân: birinci referanstaki dükkân, salı akşamı, kepenk yarı inik, tezgâh lambası yanık. Kadrajda TAM altı kişi. Sağda tezgâhın önünde yan yana dört kişi (dördüncü referanstaki şeridin soldan sağa sırasıyla aynı kişiler): Nadide Hanım (bembeyaz topuz, baston), Ferruh (papyon, lacivert önlük), Kenan (gri tişört, lacivert önlük), Gizem (bal rengi kâküllü saç, beyaz tişört, kot etek). Dördü de gergin, Peri'ye bakıyor. Solda, onların karşısında Peri (ikinci referans; kısa bej trençkot, eşarp, gözlük alında, kırmızı stiletto, ÇORAP YOK) dimdik duruyor, yanında Cengo (üçüncü referans; haki ceket).",
  True, "TAM altı kişi, say · dört kişi şeritteki kişilerle aynı · kimse kaçmıyor (kaçış bir sonraki kare)")
kare(53, "Yüzleşme: herkes Ferruh'a dönmüş; Ferruh depoya koşuyor", "K40",
  [cikti(52, "yüzleşme karesi"), cikti(37, "Ferruh, terli")],
  "Birinci referanstaki karenin AYNISI: aynı dükkân, aynı akşam ışığı, aynı altı kişi aynı kıyafetlerle. Değişen tek şey an: Ferruh (ikinci referanstaki terli yüzle) tezgâhın arkasındaki imalathane kapısına doğru koşmaya başlamış, papyonu yamuk, bir eli kapının kenarında; öbür beş kişi aynı anda ona dönmüş, şaşkın bakıyor. Kadrajda TAM altı kişi.",
  True, "Ferruh koşuyor, öbür beşi ona dönük · kişiler bir önceki kareyle aynı")
kare(54, "Kovalamaca 1: un bulutunda bembeyaz Cengo", "K41",
  [cikti(47, "un deposu"), cikti(5, "unlu Cengo")],
  "Mekân: birinci referanstaki un deposu. Devrilmiş bir çuval yığınından koca bir un bulutu yükseliyor. Kadrajda TAM bir kişi: bulutun ortasında Cengo (ikinci referans), baştan aşağı bembeyaz; yalnız iri açılmış gözleri ve öksüren ağzı seçiliyor; elini havada sallıyor. Komik, hayalet gibi.",
  False, "Yalnız Cengo · gözler seçiliyor")
kare(55, "Kovalamaca 2: Peri pekmez kazanının içinde", "K42",
  [cikti(11, "imalathane"), cikti(1, "Peri")],
  "Mekân: birinci referanstaki imalathane. " + AILE + " Kadrajda TAM bir kişi: Peri (ikinci referans) bakır pekmez kazanının içine oturmuş; kazanın kenarından iki bacağı ve kırmızı stilettoları havaya kalkmış (ÇORAP YOK); kısa bej trençkotu açılmış, altındaki dar siyah elbise ve trençkot pekmezle ıslak, parlıyor; eşarp yüzüne kaymış, bir eliyle onu itiyor; öbür eli kazanın kenarında. Yüzünde öfkeli bir gurur: \"bilerek girdim\". Pekmez koyu kehribar, kazanın kenarından taşıyor. Henüz susam yok.",
  True, "Henüz susam yok, yalnız pekmez · tam iki kol iki el · müstehcen değil")
kare(56, "Kovalamaca 3: susamlı Peri tablada; Gizem kapıda", "K43",
  [cikti(11, "imalathane"), cikti(2, "pekmezli-susamlı Peri"), cikti(9, "Gizem")],
  "Mekân: birinci referanstaki imalathane, susam tablalarının olduğu tezgâh. " + AILE + " Kadrajda TAM iki kişi. Peri (ikinci referans) iki büyük susam tablasından birinin üstüne kapaklanmış; dirsekleri tablada, başını kaldırmış; baştan aşağı pekmez ve susam, tam bir simit gibi; eşarp boynuna kaymış, gözlük saçında yamuk; yüzü öfkeli-mahcup. Kapı aralığında Gizem (üçüncü referans; beyaz tişört, kot etek) bir eli ağzında, gülmemek için kendini tutuyor.",
  True, "TAM iki kişi · susam her yerde · Gizem kapıda")
kare(57, "Kovalamaca 4: Ferruh yırtık çuvalda, paralar saçılmış", "K44",
  [cikti(47, "un deposu"), cikti(37, "Ferruh, terli"), cikti(5, "unlu Cengo")],
  "Mekân: birinci referanstaki un deposu, arka kapının önü. Kadrajda TAM iki kişi. Ferruh (ikinci referans; papyon, lacivert önlük) yerdeki yere dökülmüş susamlara basıp kaymış, sırtüstü bir un çuvalının üstüne düşmüş; çuval yırtılmış, içinden bantla bağlanmış kâğıt para desteleri fışkırıp etrafa saçılmış (banknotların yüzü görünmüyor; deste bantları düz, yazısız). Ferruh'un yüzü dehşet. Üstüne doğru bembeyaz Cengo (üçüncü referans) koşarak yetişiyor, kolunu uzatmış.",
  False, "Banknot yüzü/rakam yok · yerde susam · TAM iki kişi")
kare(58, "Kovalamaca sonu: Gizem Peri'ye pembe önlüğü uzatıyor", "K45",
  [cikti(11, "imalathane"), cikti(2, "pekmezli-susamlı Peri"), cikti(9, "Gizem")],
  "Mekân: birinci referanstaki imalathane. Kadrajda TAM iki kişi. Gizem (üçüncü referans; beyaz tişört, kot etek) az önce çıkardığı düz pembe tezgâh önlüğünü (yazısız) Peri'ye uzatıyor; öbür eliyle Peri'nin omzundan bir susam tanesi alıp ağzına götürüyor, işveli bir gülümseme. Peri (ikinci referans; pekmezli, baştan aşağı susamlı, trençkot hâlâ üstünde) önlüğe tiksinerek bakıyor, kaşları çatık.",
  True, "TAM iki kişi · önlük pembe, yazısız · Gizem susamı Peri'nin omzundan alıyor")
kare(59, "Karar: eksper'e anlat — merkezin kepengi inik", "K46",
  [cikti(43, "Susam, salı akşamı (dükkânın kendisi)"), cikti(4, "Cengo")],
  "Birinci referanstaki dükkânın DIŞARIDAN görünüşü, sabah: Karaköy'de eski bir taş binanın zemin katı; dükkânın bütün kepengi sonuna kadar inik ve kilitli; kepengin önünde bir sıra boş simit tablası üst üste. Kadrajda TAM bir kişi: Cengo (ikinci referans; haki ceket) inik kepengin önünde ellerini cebine sokmuş duruyor, kepenge bakıyor; hüzünlü-alaycı. Kepenkte, binada hiçbir yazı, tabela, ilan kâğıdı yok.",
  False, "Kepenkte yazı/ilan yok · Cengo tek başına")
kare(60, "Karar: talebi Ferruh geri çeksin — Kenan simit uzatıyor", "K47",
  [cikti(11, "imalathane"), cikti(8, "Kenan"), cikti(4, "Cengo")],
  "Mekân: birinci referanstaki imalathane, sabah, fırın yanıyor. Kadrajda TAM iki kişi. Kenan (ikinci referans; gri tişört, lacivert önlük) fırından yeni çıkmış sıcak bir simidi Cengo'ya uzatıyor, hafif gülümsüyor (ilk kez). Cengo (üçüncü referans; haki ceket) simidi almış, ikiye bölüyor; buharı tütüyor.",
  False, "TAM iki kişi · Kenan gülümsüyor")
kare(61, "Karar: Nadide'ye bırak — merkezin yeni tabelası", "K48",
  [cikti(43, "Susam'ın binası ve dükkânı"), cikti(17, "Badem'in renkleri ve badem resmi"), cikti(4, "Cengo")],
  "Birinci referanstaki dükkânın DIŞARIDAN görünüşü, Karaköy, gündüz: aynı eski taş bina, ama dükkân değişmiş: vitrin ve kepenk ikinci referanstaki pastanenin zeytin yeşili-krem renklerine boyanmış; kapının üstündeki yeni, parlak tabelada YALNIZ büyük, yaldızlı bir badem resmi (hiç harf yok). Kadrajda TAM bir kişi: Cengo (üçüncü referans; haki ceket) kaldırımda durmuş, ellerini cebine sokmuş, yeni tabelaya küskün bakıyor.",
  False, "Tabelada HARF yok, yalnız badem · bina aynı, renk Badem'in")
kare(62, "Karar: Ferruh'tan pay al — Cengo parayı sayıyor", "K49",
  [dosya("buro_gunduz.jpg", "büro"), cikti(4, "Cengo")],
  "Mekân: birinci referanstaki büro, öğleden sonra. Kadrajda TAM bir kişi: Cengo (ikinci referans; haki ceket) masanın kenarına ilişmiş, elinde lastikle bağlı bir deste kâğıt para (banknotların yüzü görünmüyor, rakam yok), saymayı yarıda bırakmış; bakışı boşlukta, düşünceli, hiç gülmüyor.",
  False, "Banknot yüzü/rakam yok · Cengo gülmüyor")
kare(63, "Kapanış (bağ düşük): Gizem pencerede, Cengo'nun sandalyesi boş", "K50",
  [dosya("buro_aksam.jpg", "büro, akşam"), cikti(3, "önlüklü Peri"), cikti(9, "Gizem")],
  "Mekân: birinci referanstaki büro, akşam, lamba yanık. Kadrajda TAM iki kişi. Peri (ikinci referans; pembe önlük, pekmez lekeli siyah elbise, saçında susam) masada oturuyor, önünde bir ince belli çay bardağı, bakışı boş sandalyede. Pencerenin önünde Gizem (üçüncü referans) elinde ince belli çay bardağıyla oturmuş, dışarıya bakıyor. Masanın öbür yanında Cengo'nun ahşap sandalyesi BOŞ; sandalyenin arkalığında kimse yok, ceket de yok.",
  True, "TAM iki kişi · sandalye boş · iki çay bardağı")
kare(64, "Kapanış (bağ yüksek): Cengo simidi bölüp büyük yarısını Peri'ye veriyor", "K51",
  [dosya("buro_aksam.jpg", "büro, akşam"), cikti(3, "önlüklü Peri"), cikti(4, "Cengo"), cikti(9, "Gizem")],
  "Mekân: birinci referanstaki büro, akşam. Kadrajda TAM üç kişi. Cengo (üçüncü referans; haki ceketinde birkaç soluk un lekesi) bir simidi ikiye bölmüş, büyük yarısını masada oturan Peri'ye (ikinci referans; pembe önlük, saçında susam) uzatıyor; Peri gülümsemesini saklamadan alıyor. Kapının yanında Gizem (dördüncü referans) kollarını kavuşturmuş, elinde simit tablası koltuğunun altında, \"hıh\" der gibi kaşı kalkık bakıyor.",
  True, "TAM üç kişi · büyük yarı Peri'de · Gizem'in tablası")
kare(65, "Kapanış: Gizem Peri'ye çerçeveli afişi uzatıyor", "K52",
  [dosya("buro_aksam.jpg", "büro, akşam"), cikti(3, "önlüklü Peri"), cikti(9, "Gizem"), cikti(10, "YALNIZ afiş (Susam'ın duvarındaki)")],
  "Mekân: birinci referanstaki büro, akşam. Kadrajda TAM iki kişi. Gizem (üçüncü referans) çantasından çıkardığı altın varaklı çerçeveli afişi iki eliyle Peri'ye uzatıyor; afiş, dördüncü referanstaki dükkân duvarındaki afişin AYNISI (taçlı genç kraliçe; köşede harfsiz dalgalı çizgi). Peri (ikinci referans; pembe önlük, saçında susam) afişe bakıyor, yüzü donuk, ne diyeceğini bilemiyor.",
  True, "Afiş Susam'dakinin aynısı · afişte harf yok · TAM iki kişi")
kare(66, "Kapanış: kapıda Gizem ve Cengo; masanın altında Peri", "K53",
  [dosya("aci_masanin_alti_v2.jpg", "YALNIZ kamera açısı ve düzen (masanın altı)"), dosya("buro_aksam.jpg", "büro, akşam"), cikti(3, "önlüklü Peri"), cikti(9, "Gizem"), cikti(4, "Cengo")],
  "Birinci referanstaki kamera açısı ve düzen: kamera masanın arkasında, alçakta; masanın ön paneli kapalı, kapıdan bakan masanın altını GÖREMEZ; biz Peri'yi masanın altında görüyoruz, kapıdakiler yukarıda, arka planda. İkinci referanstaki büro, akşam ışığı. Kadrajda TAM üç kişi. Masanın altında Peri (üçüncü referans; pembe önlük, pekmez lekeli siyah elbise, saçında susam, kırmızı stiletto) çömelmiş, bir eli ağzında, gözleri iri. Açık kapıda Gizem (dördüncü referans) elinde simitlerle dolu yuvarlak bir tabla, omzunda çanta; yanında Cengo (beşinci referans; haki ceketinde soluk un lekeleri) ceketindeki unu silkeliyor.",
  True, "Kapıdakiler masanın altını göremiyor (ön panel kapalı) · TAM üç kişi · Gizem'in tablası")

# =====================================================================================
# AFİŞ (paylaşım kartı) — sablon/5_gorsel_sistemi.md → G
# =====================================================================================
ekle(67, "Kart afişi: Simit Soygunu", "KART_V3", "kart afişi", K,
  [cikti(10, "mekân: Susam'ın dükkânı"), cikti(1, "Peri"), cikti(4, "Cengo"), dosya("serit_susam_dortlu.jpg", "Susam dörtlüsü: soldan Nadide, Ferruh, Kenan, Gizem"), dosya("L19_peri_yuruyor.jpg", "YALNIZ Peri'nin yürüyüşü")],
  j(STIL, "Bir dedektif komedisinin dikey film afişi.",
    "Mekân: birinci referanstaki eski simit-pastane dükkânının içi, sıcak sabah ışığı; vitrinde simit tablaları, duvarda afiş.",
    "Kadro, kadrajda TAM altı kişi. Önde, kameraya doğru yürüyen Peri (ikinci referans; kısa bej trençkot kemeri bağlı, krem eşarp, güneş gözlüğü alnında, kırmızı stiletto, ÇORAP YOK; beşinci referanstaki yürüyüş, YALNIZ poz): kendinden emin, gizemli. Yanında Cengo (üçüncü referans; haki ceket) havaya attığı bir simidi ağzıyla yakalamaya çalışıyor, komik. Arkada tek sıra halinde, tezgâhın önünde, dördüncü referanstaki şeridin sırasıyla dört kişi: Nadide Hanım, Ferruh, Kenan, Gizem. Dördü EŞİT: aynı boyda, aynı ışıkta, eşit aralıkla, aynı ciddi-temkinli ifadeyle, kollar yanda ya da kavuşuk; hiçbiri öne çıkmıyor, hiçbiri ortada değil.",
    "İpucu taşıyan hiçbir şey YOK: Ferruh ve Kenan'da ÖNLÜK YOK (Ferruh beyaz gömlek ve papyon, Kenan gri tişört); Gizem'de pembe önlük yok; telefon, para, kasa, kayıt cihazı, un çuvalı, pekmez kazanı, susam tablası, alarm yok. Ferruh terli değil, gülümsemiyor.",
    "Altı kişinin hepsi dükkânın taş zemininin üstünde, ayakları zemine basıyor. Kişiler ayaklarına kadar kadrajın üst %80'inde; alt %20'lik şeritte yalnız boş taş zemin (oraya bir yazı kutusu konacak).",
    EN, YAZI, F916),
  "Şüpheliler eşit mi (Ferruh önde/ortada değil) · önlük YOK · alt %20 boş zemin · TAM altı kişi")

# ---------------------------------------------------------------------------------------
SIRA = [A1, B, P1, "G2 → Peri, pekmezli-susamlı", P3, "G4 → Cengo, haki ceket", "G5 → Cengo, unlu", "G6 → Nadide", "G7 → Ferruh",
        "G8 → Kenan", "G9 → Gizem", S10, S11, K]
NOT = {
  A1: "TEK pencerede, yukarıdan aşağı (G2 G1'den, G3 G2'den, G5 G4'ten türer). Hepsini Claude'a gönder; onaylanmayan yeniden üretilir. Aşama 2 bunlar onaylanınca başlar.",
  B: "Hiçbir onaya bağlı değil. Aşama 1'i beklerken ya da bir pencere boş kalınca yap.",
  K: "Aşama 2'nin çıktıları onaylanınca. K40 (G53) K39'dan (G52) türer: ikisini aynı pencerede, arka arkaya. \"Susam dörtlüsü\" referansı (G6–G9 birleşik) kartlarda indirilebilir.",
}
gruplar = []
for s in SIRA:
    gs = sorted([g for g in G if g["grup"] == s], key=lambda g: g["no"])
    asama = 1 if s == A1 else 0 if s == B else 3 if s == K else 2
    gruplar.append({"ad": s, "asama": asama, "not": NOT.get(s, "Onaylı referansı bu pencereye bir kez ekle; sonra kartları arka arkaya yap."), "gorseller": gs})
N = len(G)
assert sum(len(x["gorseller"]) for x in gruplar) == N == len({g["no"] for g in G}) == 67
assert [g["no"] for x in gruplar for g in x["gorseller"]] == list(range(1, N + 1)), "numara sırası sayfa sırasıyla aynı olmalı"
for g in G:
    assert len(g["refs"]) <= 5, ("en çok 5 referans", g["no"])
yol = os.path.dirname(os.path.abspath(__file__))
veri = "const GRUPLAR=" + json.dumps(gruplar, ensure_ascii=False) + ";const TOPLAM=" + str(N) + ";\n"
open(os.path.join(yol, "veri.js"), "w").write(veri)
sablon = open(os.path.join(yol, "sablon.html")).read()
open(os.path.join(yol, "vaka3_gorseller.html"), "w").write(sablon.replace("/*VERI*/", veri))

# Liste (arac_paket.js tabloyu okur: | G<n> | tür | ne | `anahtar` | …)
def refyazi(r):
    if r.get("dosya"): return r["dosya"]
    if r.get("serit"): return "Susam dörtlüsü şeridi"
    return "G%d" % r["cikti"]
md = ["# VAKA 3 — GÖRSEL LİSTESİ VE PROMPTLAR", "",
      "Üretim adımı 8 (`7_uretim_sureci.md`). **Hikâye 22 Ekim 2026'da donmuş sayıldı** (sahibi: \"hikâyeyi donmuş sayalım\").",
      "**Bu dosya `vaka3_sayfa/uret.py` ile üretilir — elle düzenlenmez.** Promptların tam metni iş sayfasında ve `uret.py`'de.",
      "", "**Sahibinin düzeni (22 Ekim 2026):** Aşama 1 ana referanslar tek pencerede → Claude onaylar → Aşama 2 gruplar üç",
      "pencerede paralel, onaylı referans her pencereye bir kez eklenir → 8–10 görsel birikince toplu gönderilir, Claude toplu değerlendirir",
      "→ Aşama 3 kareler. \"Beklemeden\" bölümü hiçbir onaya bağlı değil.", "",
      "Referans dosyaları: `vaka3_sayfa/ref/`. **Susam dörtlüsü şeridi** (K39, K40'ın atası, afiş): G6–G9 onaylanınca Claude birleştirir.", "",
      "## Liste (%d görsel)" % N, "", "| # | tür | ne | anahtar | referans | aşama |", "|---|---|---|---|---|---|"]
for x in gruplar:
    for g in x["gorseller"]:
        md.append("| G%d | %s | %s | `%s` | %s | %s |" % (g["no"], g["tur"], g["ad"], g["anahtar"], ", ".join(refyazi(r) for r in g["refs"]), x["ad"]))
open(os.path.join(yol, "..", "vaka3_gorsel.md"), "w").write("\n".join(md) + "\n")
print(N, "görsel,", len(gruplar), "grup")
