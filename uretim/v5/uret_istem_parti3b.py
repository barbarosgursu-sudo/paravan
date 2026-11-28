# V5 Parti 3b istemleri (detaylar D14–D17 → G73–G76, kareler K79–K95 → G77–G93, kart afişi → G94) — kalıp
# uretim/v8/uret_istem_parti3b.py (ISTEM-9, ISTEM-15, ISTEM-16, ISTEM-19, ISTEM-35, ISTEM-51). 28 Kasım 2026, Oğuz Bey'in bilgisayarı.
# Dekolteli resim referans verilmez (ISTEM-16): Peri yalnız baş kırpığı + kıyafet kartı. Çalıştır: python -I uret_istem_parti3b.py
import re, os, sys
V5 = os.path.dirname(os.path.abspath(__file__))
SR = open(os.path.join(V5, "satir_resim.md"), encoding="utf-8").read()


def satirlar(kod):
    m = re.search(r"^### KARE " + re.escape(kod) + r" \(\d+ satır\)\n(.*?)(?=^### |^## |\Z)", SR, re.S | re.M)
    if not m:
        sys.exit("satır yok: " + kod)
    return m.group(1).strip()


TARZ = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil: "
        "belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern "
        "çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
KARTLAR = ("Kart referansları YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartların çizim tarzını, ışığını, yüzünü ve pozunu "
           "ALMA. Bütün kişiler sıcak ışıklı, boyalı, ince konturlu aynı illüstrasyon tarzında.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
ORAN = "Görselin oranı TAM 3:4, dikey (1086×1448)."
PERI_CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
PERI_KOMIK = "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok. Çıplaklık yok."
PERI_EN = "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık en çok onun üstünde; öbür kadın Peri'yi gölgede bırakmıyor."
KALABALIK = "Yüzler üç çeyrek, gözler görünüyor; kimse kameraya bakmıyor. Her kişinin İKİ kolu, İKİ eli var."
KOMEDI = "Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok; müstehcen değil."
YALNIZ = "Sahnede yalnız yazılan nesneler var; başka eşya eklenmiyor."
SATIRBAS = "`arac_satir_resim.js` (27 Kasım 2026, V5 dört kapı yolu). Codex bu bölümü istem metnine katmaz."
AKSAM = ("Işık: AKŞAM; pencerede alacakaranlık, oda yarı karanlık; ışık yalnız masa lambasından gelir, sıcak sarı bir ışık havuzu "
         "ve uzun gölgeler; gündüz gibi aydınlık DEĞİL.")
SAAT_GERCEK = ("eski, ALTIN, işlemeli kapaklı, zincirli, çalar bir CEP SAATİ (kadranındaki rakamlar ve kapaktaki işleme "
               "OKUNMUYOR, yalnız süs çizgileri)")

# ---------------------------------------------------------------- referanslar (onaylı)
BURO_G = ("onayli/G14.png", "büro, gündüz (A72; onaylı arka plan; pencereden Karaköy iskelesi)")
BURO_A = ("onayli/G15.png", "büro, akşam (A73; onaylı; aynı açı)")
SALON = ("onayli/G16.png", "vapurun alt salonu (A36; onaylı; ahşap koltuklar, direk, çay tezgâhı, merdiven)")
GUVERTE = ("onayli/G17.png", "vapurun üst güvertesi (A37; onaylı)")
SAATODA = ("onayli/G19.png", "Nedim Bey'in saat odası (A39; onaylı)")
DUKKAN = ("onayli/G21.png", "Muammer'in antika dükkânı (A41; onaylı)")
ISKELE = ("onayli/G22.png", "Karaköy iskelesi, vapur yanaşmış (A42; onaylı)")
PBAS = ("referanslar/peri_ipek_bas.png", "Peri'nin başı (G23'ün baş kırpığı; G23 dekolteli, bütün hâli verilmez)")
PK1 = ("onayli/G1.png", "Peri'nin kıyafet kartı (zümrüt yeşili ipek elbise + krem hırka): YALNIZ kıyafetin kesimi, boyu ve rengi")
PK2 = ("onayli/G2.png", "Peri'nin kıyafet kartı (ipek elbise, hırkasız): YALNIZ kıyafetin kesimi, boyu ve rengi")
CENGO = ("onayli/G25.png", "Cengo temel figürü (onaylı; yüz, saç, lacivert balıkçı yaka, kahverengi kasket, bileklik)")
GIZEM = ("onayli/G26.png", "Gizem, kiremit hırka temel figürü (onaylı)")
MUAMMER = ("onayli/G27.png", "Muammer Bey'in kıyafet kartı (yüz ve kıyafet)")
SELIM = ("onayli/G28.png", "Selim'in kıyafet kartı (yüz ve kıyafet)")
KADIR = ("onayli/G29.png", "Kadir'in kıyafet kartı (yüz ve kıyafet)")
NEDIM = ("onayli/G30.png", "Nedim Bey'in kıyafet kartı (yüz ve kıyafet)")
SIMITCI = ("onayli/G35.png", "simitçinin kıyafet kartı (yüz ve kıyafet)")
SERIT4 = ("referanslar/serit_muammer_selim_nedim_kadir.jpg", "şerit: soldan Muammer, Selim, Nedim, Kadir (kıyafet kartları)")

# ---------------------------------------------------------------- kişi cümleleri (ISTEM-20: sabitler yeniden yazılır)
P_IPEK = ("zümrüt yeşili, ince askılı, akışkan ipek elbise (derin V yaka, dekoltesi belirgin), üstünde önü açık krem örgü hırka; "
          "açık, dalgalı kızıl-kahve saç; küçük inci küpeler; kırmızı stiletto, çorap yok")
P_ACIK = ("zümrüt yeşili, ince askılı, akışkan ipek elbise (derin V yaka, dekoltesi belirgin), HIRKA YOK, omuzlar çıplak; açık, "
          "dalgalı kızıl-kahve saç; küçük inci küpeler; kırmızı stiletto, çorap yok")
P_ISLAK = ("zümrüt yeşili ipek elbise SIRILSIKLAM, bedenine yapışık, üstünde koyu yeşil YOSUN parçaları; hırka YOK; saçı ıslak, yüzüne "
           "yapışık, içinde yosun; küçük inci küpeler")
P_BATT = ("ıslak zümrüt yeşili ipek elbisenin üstüne omuzlarına sarılmış kalın, gri-kahverengi, kareli, yünlü bir VAPUR BATTANİYESİ "
          "(yazısız); saçı ıslak, darmadağın, içinde birkaç yosun parçası; bir ayağı çıplak, öbüründe kırmızı stiletto")
C_K = ("koyu lacivert, kalın örgülü balıkçı yaka kazak, kahverengi yün kasket (altından koyu, dağınık saç), koyu gri pantolon; "
       "kazağın kol ağzından ince bir telin ucu; sol bileğinde renkli boncuklu bileklik; kısa sakal")
C_SIMIT = (C_K + "; bir ön kolunda kola GEÇMİŞ 4–5 susamlı SİMİT, kasketinin tepesinde de bir simit")
G_K = "kiremit rengi iri örgü hırka, krem gömlek, gri pantolon; bal rengi kâküllü kıvırcık saç, çiller, küçük altın halka küpeler"
MUAMMER_K = ("altmış yaşında, koyu kahveye boyalı FÖNLÜ kabarık saçlı, KALIN koyu bıyıklı, bir ALTIN dişli adam; BORDO kadife "
             "ceket, krem gömlek, cebinden sarkan altın renkli zincir, koyu gri pantolon")
SELIM_K = ("elli sekiz yaşında, uzun ve zayıf, kısa KIVIRCIK KIR saçlı, kısa kır sakallı adam; eski kahverengi hırka, açık gri uzun "
           "pardösü, koyu kahve pantolon")
KADIR_K = ("kırk beş yaşında, TOMBUL, kırmızı yanaklı, kısa siyah saçlı, KALIN siyah bıyıklı çaycı; beyaz kısa çaycı ceketi, kolları "
           "sıvalı, omzunda beyaz bez, siyah pantolon")
NEDIM_K = ("yetmişlerinde, TOMBUL, BEMBEYAZ saçı ensede AT KUYRUĞU, beyaz KEÇİ SAKALLI adam; gri blazer, açık mavi gömlek, desenli "
           "ipek fular, elinde gümüş başlı siyah baston")
SIMITCI_K = ("yirmi yaşında, ince uzun, KIZIL KIVIRCIK saçlı, çilli genç; lacivert-krem çizgili tişört, beyaz uzun önlük, koyu pantolon")


def yaz(n, kod, baslik, tur, refs, kontrol, govde, satir=None, ust_ek=""):
    out = [f"# G{n} — {baslik}", "", f"- tür: {tur} · anahtar: `{kod}`",
           "- önce hazır olmalı: referanslardaki onaylı resimler" + ust_ek, "",
           "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    out += ["", "## Satırlar", ""]
    if satir:
        out += satir
    else:
        out += [SATIRBAS, "", satirlar(kod)]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(os.path.join(V5, "prompts", f"G{n}.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(out))
    print("yazıldı", n, kod)


def kare(n, kod, baslik, refs, kontrol, sahne, kisiler, ekler=(), satir=None):
    kartli = any("kart" in d for _, d in refs)
    govde = [TARZ, KARTLAR if kartli else "", sahne] + list(kisiler) + list(ekler) + [YALNIZ, "Çıplaklık yok.", YAZI, ORAN]
    yaz(n, kod, baslik, "ara kare", refs, kontrol, govde, satir)


def detay(n, kod, baslik, refs, kontrol, sahne, ekler=()):
    kartli = any("kart" in d for _, d in refs)
    govde = [TARZ, KARTLAR if kartli else "", sahne] + list(ekler) + [YALNIZ, "Çıplaklık yok.", YAZI, ORAN]
    yaz(n, kod, baslik, "detay", refs, kontrol, govde)


# ================================================================ DETAYLAR
detay(73, "D14", "Detay: kadife kutuda parlak, ucuz bir cep saati", [BURO_G, MUAMMER],
      "açık, koyu bordo KADİFE kutu, içinde PARLAK, UCUZ görünüşlü cep saati · kadranda rakam OKUNMUYOR · kutuyu tutan erkek eli, bordo kadife ceket kolu",
      ("Detay: birinci referanstaki büronun masasının üstü, yakından, hafif yukarıdan. Avuç büyüklüğünde, koyu bordo KADİFE bir kutu "
       "AÇIK; içinde, kadifenin üstünde PARLAK, ucuz görünüşlü, sarı-yaldızlı bir cep saati: kaba işçilik, fazla parlak, oyuncak gibi; "
       "kadranında rakam ve yazı OKUNMUYOR, yalnız çizgiler ve iki ince yelkovan. Kutunun kapağını, bordo kadife ceketin kolundan çıkan "
       "bir erkek eli (ikinci referanstaki Muammer'in eli) açık tutuyor. Yüz kadrajda yok. Sabah ışığı."))
detay(74, "D15", "Detay: Nedim'in duvarındaki saatler aynı anda çalıyor", [SAATODA],
      "duvarda irili ufaklı saatler YAKINDAN · sarkaçlar sallanıyor, guguk kuşu çıkmış · çalma çizgileri · kadranlarda RAKAM YOK · insan yok",
      ("Detay: birinci referanstaki saat odasının duvarı, yakından. İrili ufaklı ahşap duvar saatleri, sarkaçlı saatler ve guguklu saat "
       "AYNI ANDA çalıyor: sarkaçlar iki yana savrulmuş, guguklu saatin küçük kapağı açık, tahta kuşu dışarı fırlamış; saatlerin "
       "çevresinde çizgi romandaki gibi ince, kıvrımlı SES ÇİZGİLERİ. Kadranlarda RAKAM ve yazı YOK, yalnız çizgiler ve yelkovanlar. "
       "İnsan yok. Pencereden yumuşak, sıcak öğle ışığı."))
detay(75, "D16", "Detay: çanta astarında küçük deri damgası", [DUKKAN, PK1],
      "açık kahverengi deri çantanın içi, astarın köşesi YAKINDAN · deriye basılmış küçük, yuvarlak KABARTMA damga, içinde yalnız basit bir YAPRAK şekli, HARF YOK · kırmızı ojeli kadın eli, krem hırka kolu",
      ("Detay: birinci referanstaki antika dükkânının tezgâhında, kahverengi, eski moda, kulplu küçük bir deri çanta AÇIK; çok yakından "
       "içine bakıyoruz. Astarın bir köşesinde deriye basılmış küçük, yuvarlak, kabartma bir DAMGA: içinde yalnız basit bir YAPRAK "
       "şekli; damgada harf, rakam, ad YOK. Çantanın ağzını kırmızı ojeli, zarif bir kadın eli (krem örgü hırkanın kolu — ikinci "
       "referanstaki kıyafet) aralık tutuyor. Yüz kadrajda yok. Tozlu camlardan süzülen sıcak ışık."))
detay(76, "D17", "Detay: açık cep saati kapağının içinde ince bir kazıma", [ISKELE, MUAMMER],
      "erkek elinde AÇIK, eski ALTIN işlemeli cep saati · kapağın İÇİNDE ince el kazıması süs, harf ve rakam OKUNMUYOR · bordo kadife ceket kolu · arkada bulanık iskele",
      ("Detay: birinci referanstaki iskele, akşamüstü, arkada bulanık. Önde, çok yakından, bordo kadife ceketin kolundan çıkan bir erkek "
       "eli (ikinci referanstaki Muammer'in eli) " + SAAT_GERCEK + " tutuyor; kapak AÇIK, bize dönük. Kapağın İÇİNDE ince, el işi bir "
       "KAZIMA: zarif, kıvrımlı oyma çizgiler; bir harf ve bir yıl olduğu sezilir ama OKUNMUYOR, hiçbir harf ya da rakam seçilmiyor. "
       "Kadrajın kenarında, omzun üstünden eğilen ıslak, kızıl-kahve bir saç tutamı. Yüz kadrajda yok."),
      ["Bu resimdeki kazımada okunabilir hiçbir harf ya da rakam YOK."])

# ================================================================ KARELER
kare(77, "K79", "Giriş (çekicilik): Peri açık pencerenin önünde, hırkasız; Muammer bakıyor; Cengo",
     [BURO_G, PBAS, PK2, MUAMMER, CENGO],
     "TAM 3 kişi · Peri AÇIK pencerenin önünde, HIRKASIZ ipek elbise, saç rüzgârda · krem hırka sandalyenin arkasında asılı · Muammer büyülenmiş bakıyor · Cengo kaşı kalkık · büro gündüz",
     ("Sahne: birinci referanstaki büro, sabah; kemerli pencere AÇIK, içeri iskelenin rüzgârı doluyor, perdesiz pencerenin kanadı "
      "açık. Kadrajda TAM 3 kişi: Peri, Muammer, Cengo."),
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_ACIK + "): açık pencerenin önünde, yarı dönük "
       "duruyor; rüzgâr saçını ve ipek elbisenin eteğini dalgalandırıyor; bir eli pencere kanadında. Krem örgü hırkası yanındaki "
       "sandalyenin arkasına asılı."),
      ("Muammer (dördüncü referansın yüzü ve kıyafeti: " + MUAMMER_K + "): müşteri sandalyesinde oturuyor, ağzı hafif açık, büyülenmiş "
       "Peri'ye bakıyor; elinde kapalı koyu bordo kadife bir kutu, kucağında."),
      ("Cengo (beşinci referans: " + C_K + "): odanın öbür köşesinde, pencere kenarına yaslanmış, tek kaşı kalkık, bu manzarayı "
       "hınzırca izliyor.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(78, "K80", "Yüzleşme açılışı: alt salon; Muammer, Selim, Nedim koltukların başında; Kadir tezgâhta; Peri ve Cengo",
     [SALON, PBAS, PK1, CENGO, SERIT4],
     "TAM 6 kişi · alt salon · Muammer, Selim, Nedim yan yana koltukların başında · Kadir çay tezgâhında · Peri (ipek + hırka) ve Cengo karşılarında · kimse suçlu gibi öne çıkarılmıyor",
     ("Sahne: birinci referanstaki vapurun alt salonu, perşembe öğleden sonra; pencerelerden deniz. Kadrajda TAM 6 kişi: Peri, Cengo, "
      "Muammer, Selim, Nedim, Kadir (dördü beşinci referanstaki şeritten, soldan Muammer, Selim, Nedim, Kadir)."),
     [("Muammer (" + MUAMMER_K + "), Selim (" + SELIM_K + ") ve Nedim (" + NEDIM_K + "): ahşap koltuk sıralarının başında yan yana, "
       "eşit aralıkla duruyorlar; üçü de aynı boyda, aynı ışıkta, ciddi ve temkinli; kimse öne çıkarılmıyor."),
      "Kadir (" + KADIR_K + "): arkada, köşedeki çay tezgâhının arkasında, elleri tezgâhta, merakla bakıyor.",
      ("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_IPEK + ") ve Cengo (dördüncü referans: " + C_K
       + "): ön planda, üçünün karşısında, bize yarı dönük; Peri kendinden emin, bir eli belinde; Cengo bir adım geride.")],
     [PERI_CEK, KALABALIK])
kare(79, "K81", "Yüzleşme: Selim'in ceketinin iç cebi, eli göğsünde, zil sesi (yakın)", [SALON, SELIM],
     "TAM 1 kişi (göğüs ve el yakından, yüzün alt yarısı) · Selim'in eli pardösünün göğsüne bastırılmış · iç cepten ince SES ÇİZGİLERİ · saat GÖRÜNMÜYOR",
     ("Sahne: birinci referanstaki alt salon, arkada bulanık. Yakın plan. Kadrajda TAM 1 kişi: Selim (ikinci referansın yüzü ve "
      "kıyafeti: " + SELIM_K + "); kadrajda yalnız göğsü, eli ve yüzünün alt yarısı (sakallı çenesi, gergin dudakları)."),
     [("Selim'in bir eli açık gri pardösüsünün göğsüne, iç cebin üstüne sıkıca bastırılmış, parmakları gergin; pardösünün altından "
       "kahverengi hırka görünüyor. İç cebin hizasından, kumaşın altından yükselen ince, titreşen, çizgi romandaki gibi SES ÇİZGİLERİ "
       "(küçük zil sesi). Saatin kendisi GÖRÜNMÜYOR. Alnından inen bir ter damlası çenesine doğru akıyor.")],
     ["Her kişinin İKİ kolu, İKİ eli var; kadrajda görünen el tek."])
kare(80, "K82", "Yüzleşme: herkes Selim'e dönmüş; Selim merdivene koşuyor", [SALON, PBAS, PK1, CENGO, SERIT4],
     "TAM 6 kişi · Selim ön planda MERDİVENE koşuyor (sırtı yarı dönük, yüzü üç çeyrek) · arkada Muammer, Nedim, Kadir, Peri, Cengo ona dönmüş, şaşkın · alt salon",
     ("Sahne: birinci referanstaki alt salon. Kadrajda TAM 6 kişi: Selim, Muammer, Nedim, Kadir (beşinci referanstaki şerit), Peri, "
      "Cengo."),
     [("Selim (" + SELIM_K + "): ön planda, salonun dibindeki dar demir MERDİVENE doğru koşuyor; pardösüsünün etekleri uçuşuyor, bir eli "
       "göğsünde, yüzü üç çeyrek, panik içinde omzunun üstünden geriye bakıyor."),
      ("Arkada, hepsi başlarını Selim'e çevirmiş: Muammer (" + MUAMMER_K + ") ağzı açık, kolunu uzatmış; Nedim (" + NEDIM_K + ") "
       "kaşı kalkık, bastonuna dayanmış; Kadir (" + KADIR_K + ") tezgâhın arkasında, elinde bez; Peri (ikinci referansın yüzü, üçüncü "
       "referanstaki kart: " + P_IPEK + ") ve Cengo (dördüncü referans: " + C_K + ") Selim'in peşine atılmak üzere.")],
     [PERI_CEK, KALABALIK, KOMEDI])
kare(81, "K83", "Kovalamaca 1: Cengo simitçiyle çarpışıyor; tabla havada, simitler koluna ve kasketine geçiyor",
     [SALON, CENGO, SIMITCI],
     "TAM 2 kişi · Cengo ve simitçi çarpışmış · tabla HAVADA, simitler uçuşuyor · simitler Cengo'nun KOLUNA ve KASKETİNE geçiyor · fiziksel komedi",
     ("Sahne: birinci referanstaki alt salonun merdiven dibi. Kadrajda TAM 2 kişi: Cengo ve simitçi. Fiziksel komedi anı, dondurulmuş "
      "hareket."),
     [("Cengo (ikinci referansın yüzü ve kıyafeti: " + C_K + "): koşarken simitçiye çarpmış, bir kolunu siper etmiş; havadaki "
       "susamlı SİMİTLER halka halka onun ön koluna geçiyor, biri tam kasketinin tepesine oturmak üzere; ağzı açık, şaşkın."),
      ("Simitçi (üçüncü referansın yüzü ve kıyafeti: " + SIMITCI_K + "): geriye sendelemiş, ağzı açık; başındaki yuvarlak ahşap SİMİT "
       "TABLASI havaya uçmuş, ters dönüyor; simitler havada dağılıyor.")],
     [KALABALIK, KOMEDI])
kare(82, "K84", "Kovalamaca 2: üst güverte, dalga Peri'nin üstüne boşalmış; ıslak, yosunlu", [GUVERTE, PBAS, PK1],
     "TAM 1 kişi · Peri üst güvertede KORKULUĞA tutunmuş · dalga ÜSTÜNE boşalıyor, köpük · ipek elbise SIRILSIKLAM, YOSUNLU · bir bacak havada · kırmızı stiletto · seksi ve komik",
     ("Sahne: birinci referanstaki üst güverte, rüzgârlı; bordanın üstünden aşan büyük bir DALGA köpüklü sularıyla güverteye "
      "boşalıyor. Kadrajda TAM 1 kişi: Peri."),
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kartın elbisesi, ama: " + P_ISLAK + "): iki eliyle beyaz demir "
       "KORKULUĞA sımsıkı tutunmuş; dalga üstüne boşalırken bir bacağı geriye, havaya kalkmış (kırmızı stiletto görünüyor); ağzı "
       "şaşkınlıkla açık, gözleri kocaman; hırka yok olmuş, yalnız ipek elbise bedenine yapışmış; dalganın getirdiği koyu yeşil yosun "
       "parçaları elbisesine ve saçına yapışıyor.")],
     [PERI_KOMIK, KALABALIK, KOMEDI])
kare(83, "K85", "Kovalamaca 3: Peri'nin topuğu iskele tahtasına sıkışmış; tek ayakkabıyla koşuyor; ileride Selim",
     [ISKELE, PBAS, PK1, SELIM],
     "TAM 2 kişi · Peri ön planda TEK AYAKKABIYLA koşuyor, eteğini tutuyor · arkasında tahtaların arasına SAPLANMIŞ kırmızı stiletto · ileride Selim koşuyor · ıslak, yosunlu",
     ("Sahne: birinci referanstaki Karaköy iskelesi; vapur yanaşmış. Kadrajda TAM 2 kişi: Peri ve Selim."),
     [("Peri (ikinci referansın yüzü; kıyafeti: " + P_ISLAK + "): ön planda kararlı bir yüzle koşuyor, bir eliyle ıslak eteğini "
       "tutuyor; bir ayağında kırmızı stiletto, öbür ayağı ÇIPLAK. Arkasında, aralıklı ahşap iskele tahtalarının arasına topuğundan "
       "SAPLANMIŞ, dimdik duran tek bir kırmızı stiletto."),
      ("Selim (dördüncü referansın yüzü ve kıyafeti: " + SELIM_K + "): ileride, iskelenin ucuna doğru koşuyor, "
       "pardösüsü uçuşuyor, bir eli göğsünde; omzunun üstünden geriye bakıyor.")],
     [PERI_KOMIK, KALABALIK, KOMEDI])
kare(84, "K86", "Kovalamaca 4: martı sürüsü yosunlu Peri'nin peşinde; Selim'i de sarmış, halata takılıp düşüyor",
     [ISKELE, PBAS, PK1, SELIM],
     "TAM 2 kişi + MARTI SÜRÜSÜ · Peri kollarını sallayarak koşuyor, martılar saçındaki yosunlara dalıyor · Selim martılarla sarılı, ellerini GÖĞSÜNE bastırmış, HALATA takılıp düşüyor · fiziksel komedi",
     ("Sahne: birinci referanstaki iskele. Kadrajda TAM 2 kişi ve bir MARTI SÜRÜSÜ (on beş kadar beyaz-gri martı). Fiziksel komedi, "
      "dondurulmuş hareket."),
     [("Peri (ikinci referansın yüzü; kıyafeti: " + P_ISLAK + "; tek ayağında kırmızı stiletto): iki kolunu havada sallayarak, "
       "çığlık atarak koşuyor; martılar saçındaki ve elbisesindeki yosunlara dalıyor, çevresinde kanat çırpıyor."),
      ("Selim (dördüncü referansın yüzü ve kıyafeti: " + SELIM_K + "): martıların ortasında kalmış, iki elini göğsüne sıkıca bastırmış "
       "(bir şeyi koruyor), iskelenin kalın HALATINA ayağı takılmış, sırtüstü düşmek üzere havada.")],
     [PERI_KOMIK, KALABALIK, KOMEDI])
kare(85, "K87", "Kovalamaca sonu: simitli Cengo Selim'in üstünde oturuyor; Peri tek ayakkabılı, çenesi havada",
     [ISKELE, PBAS, PK1, CENGO, SELIM],
     "TAM 3 kişi · Selim yerde yüzüstü · simitli Cengo (kolda ve kaskette simitler) üstünde oturuyor · Peri ayakta, tek ayakkabılı, saçı darmadağın, ÇENESİ HAVADA, ıslak ve yosunlu · birkaç martı uzakta",
     ("Sahne: birinci referanstaki iskele; dağılan birkaç martı uzakta. Kadrajda TAM 3 kişi: Peri, Cengo, Selim."),
     [("Selim (beşinci referansın yüzü ve kıyafeti: " + SELIM_K + "): iskele tahtalarında yüzüstü yatıyor, pes etmiş."),
      ("Cengo (dördüncü referans; kıyafeti: " + C_SIMIT + "): Selim'in sırtına rahatça oturmuş, keyifli bir yarım gülümsemeyle "
       "nefesleniyor."),
      ("Peri (ikinci referansın yüzü; kıyafeti: " + P_ISLAK + "; bir ayağında kırmızı stiletto, öbürü çıplak): yanlarında ayakta, saçı "
       "darmadağın ve yosunlu, bir eli belinde, ÇENESİ HAVADA, gururlu ve komik bir zafer pozu.")],
     [PERI_KOMIK, KALABALIK, KOMEDI])
kare(86, "K88", "Karar sorusu (seçim karesi): Kadir battaniyeyi Peri'nin omzuna atıyor, elinde çay; arkada Muammer, elinde açık saat",
     [ISKELE, PBAS, PK1, KADIR, MUAMMER],
     "TAM 3 kişi · Kadir battaniyeyi Peri'nin ıslak omuzlarına atıyor, öbür elinde ince belli bardakta ÇAY · Peri ıslak, yosunlu · arkada Muammer elinde AÇIK cep saati · iskele, akşamüstü",
     ("Sahne: birinci referanstaki iskele, akşamüstü; vapur yanaşmış. Kadrajda TAM 3 kişi: Peri, Kadir, Muammer."),
     [("Peri (ikinci referansın yüzü; kıyafeti: " + P_ISLAK + "): ön planda, üşümüş, omuzları hafif kalkık, dalgın."),
      ("Kadir (dördüncü referansın yüzü ve kıyafeti: " + KADIR_K + "): Peri'nin yanında, bir eliyle kalın, gri-kahverengi, kareli, "
       "yünlü bir VAPUR BATTANİYESİNİ (yazısız) Peri'nin ıslak omuzlarına atıyor; öbür elinde tabağıyla ince belli bir bardak sıcak "
       "ÇAY uzatıyor; yüzü sıcak, babacan."),
      ("Muammer (beşinci referans: " + MUAMMER_K + "): biraz arkada, elinde " + SAAT_GERCEK + " kapağı AÇIK, ona bakıyor; yüzü "
       "rahatlamış ama kaçamak.")],
     [PERI_CEK, KALABALIK])
kare(87, "K89", "Kapanış: Cengo masanın kenarında, kasketinde simit; Peri battaniyeli masada; Gizem pencerede",
     [BURO_A, PBAS, PK1, CENGO, GIZEM],
     "TAM 3 kişi · büro AKŞAM · Peri masada battaniyeye sarınmış, saçta yosun · Cengo masanın kenarına ilişmiş, kasketinde SİMİT · Gizem pencerenin önünde, iskeleye bakıyor",
     ("Sahne: birinci referanstaki büro, akşam. Kadrajda TAM 3 kişi: Peri, Cengo, Gizem."),
     [("Peri (ikinci referansın yüzü; kıyafeti: " + P_BATT + "): masasında oturuyor, battaniyeye sarınmış, yorgun ama gülümsemesini "
       "saklıyor."),
      ("Cengo (dördüncü referans: " + C_K + "; kasketinin tepesinde hâlâ takılı tek bir susamlı SİMİT): masanın kenarına ilişmiş, "
       "Peri'ye dönük."),
      ("Gizem (beşinci referans: " + G_K + "): arkada, kemerli pencerenin önünde, bize yarı dönük, iskeleye bakıyor; muzip bir "
       "gülümseme.")],
     [AKSAM, PERI_EN, KALABALIK])
kare(88, "K90", "Kapanış (bağ düşük): simit Peri'nin masasında; Cengo çıkıyor", [BURO_A, PBAS, PK1, CENGO],
     "TAM 2 kişi · masada tek SİMİT · Peri battaniyeli, simide bakıyor, yemiyor · Cengo kadrajın sağ kenarında, sırtı dönük, çıkıyor (kapı görünmüyor)",
     ("Sahne: birinci referanstaki büro, akşam. Kadrajda TAM 2 kişi: Peri, Cengo."),
     [("Peri (ikinci referansın yüzü; kıyafeti: " + P_BATT + "): masasında oturuyor, önündeki masanın üstünde tek bir susamlı SİMİT; "
       "ona bakıyor, dokunmuyor; yüzü düşünceli ve biraz hüzünlü."),
      ("Cengo (dördüncü referans: " + C_K + "): kadrajın sağ kenarında, sırtı bize yarı dönük, odadan çıkıyor; yüzü üç çeyrek, "
       "omzunun üstünden son bir kez bakıyor. Kapı kadrajda görünmüyor.")],
     [AKSAM, KALABALIK])
kare(89, "K91", "Kapanış (bağ yüksek): Peri Cengo'nun kazağının içinde, kollar uzun; Cengo tişörtle; Gizem arkada",
     [BURO_A, PBAS, PK1, CENGO, GIZEM],
     "TAM 3 kişi · Peri Cengo'nun LACİVERT BALIKÇI YAKA kazağını giymiş, KOLLAR ellerinden UZUN, battaniye omuzlarında · Cengo BEYAZ tişörtle, kasketli, gülümsüyor · Gizem arkada pencerede",
     ("Sahne: birinci referanstaki büro, akşam. Kadrajda TAM 3 kişi: Peri, Cengo, Gizem."),
     [("Peri (ikinci referansın yüzü; saçı ıslak ve darmadağın): Cengo'nun koyu lacivert, kalın örgülü balıkçı yaka KAZAĞINI giymiş; "
       "kazak ona çok büyük, kolları ellerinden UZUN, parmakları görünmüyor; battaniye hâlâ omuzlarında; kazağın altından ıslak, zümrüt "
       "yeşili ipek eteğin ucu görünüyor. Masasında oturuyor, burnunu kazağın yakasına gömmüş, gizli bir gülümseme."),
      ("Cengo (dördüncü referansın yüzü; kazağı Peri'de olduğu için üstünde yalnız sade BEYAZ bir tişört, kahverengi kasket, koyu gri "
       "pantolon; sol bileğinde renkli boncuklu bileklik): masanın yanında ayakta, kollarını kavuşturmuş, yumuşak, sevecen bir yüzle "
       "Peri'ye bakıyor."),
      ("Gizem (beşinci referans: " + G_K + "): arkada, pencerenin önünde, bu sahneyi gizlice izliyor, eli ağzında, gülümsüyor.")],
     [AKSAM, KALABALIK])
kare(90, "K92", "Karar (Saati Muammer'e bırak): Muammer dükkânında saati cebine koyuyor; Selim aletleriyle çıkıyor",
     [DUKKAN, MUAMMER, SELIM],
     "TAM 2 kişi · antika dükkânı, akşamüstü · Muammer tezgâhta, CEP SAATİNİ yeleğinin/ceketinin cebine koyuyor, yüzü kendinden memnun · Selim elinde ahşap ALET KUTUSU, kapıya yürüyor, sırtı yarı dönük, başı önde",
     ("Sahne: birinci referanstaki antika dükkânı, akşamüstü. Kadrajda TAM 2 kişi: Muammer, Selim."),
     [("Muammer (ikinci referansın yüzü ve kıyafeti: " + MUAMMER_K + "): tezgâhın arkasında, " + SAAT_GERCEK + " kapağı kapalı, "
       "ceketinin iç cebine koyuyor; yüzü kendinden memnun, altın dişi görünüyor."),
      ("Selim (üçüncü referansın yüzü ve kıyafeti: " + SELIM_K + "): ön planda, elinde eski, ahşap, saplı bir ALET KUTUSU (içinde "
       "tornavida, pense, küçük kavanozlar), dükkânın çıkışına doğru yürüyor; başı önde, yüzü üç çeyrek, yorgun ve kırgın.")],
     [KALABALIK])
kare(91, "K93", "Karar (\"Aranızda kalsın\"): ertesi gün Muammer ve Selim yine aynı dükkânda, ikisi de sır tutuyor",
     [DUKKAN, MUAMMER, SELIM],
     "TAM 2 kişi · antika dükkânı, sabah · Selim arkada bir sandalye tamir ediyor · Muammer tezgâhta · ikisi birbirine KAÇAMAK, temkinli bakıyor · saat görünmüyor",
     ("Sahne: birinci referanstaki antika dükkânı, ertesi sabah. Kadrajda TAM 2 kişi: Muammer, Selim."),
     [("Muammer (ikinci referansın yüzü ve kıyafeti: " + MUAMMER_K + "): ön planda tezgâhın arkasında, iki eli tezgâhta, gözünün "
       "ucuyla arkadaki Selim'e bakıyor; dudaklarında gergin, temkinli bir gülümseme; bir eli bıyığını düzeltiyor."),
      ("Selim (üçüncü referansın yüzü ve kıyafeti: " + SELIM_K + "; pardösüsüz, kahverengi hırkayla): arkada, eski ahşap bir "
       "sandalyenin başında diz çökmüş, onu tamir ediyor; başını hafifçe kaldırmış, o da gözünün ucuyla Muammer'e bakıyor.")],
     [KALABALIK, "Saat görünmüyor."],
     satir=["`vaka5_diyalog.md` → karar `vapurda_bulduk` (kapı yollarında seçilmiyor; satır listesinde yok). Codex bu bölümü istem "
            "metnine katmaz.", "",
            "- *sonuç*: Anlaştılar: Muammer Selim'i çıkarmadı, Selim kazımayı unuttu. Ertesi gün ikisi yine aynı dükkânda; ikisi de ötekinin sırrını biliyor.",
            "- **cengo**: İki taraftan para. Vapur gibi, Peri: bir Kadıköy, bir Karaköy.  _(dinliyor)_"])
kare(92, "K94", "Karar (saatin gerçek sahibi): Peri saati yaşlı bir kadının ellerine bırakıyor",
     [ISKELE, PBAS, PK1],
     "TAM 2 kişi · Peri (ipek elbise + krem hırka, KURU, toparlanmış) eski altın cep saatini yaşlı bir kadının KIRIŞIK ELLERİNE bırakıyor · kadının yüzü kadrajda DEĞİL, yalnız elleri, hırkalı kolları ve omzu · sıcak, duygulu",
     ("Sahne: birinci referanstaki iskelenin arkasında, ama sakin bir sabah; arkada bulanık bir deniz ve iskele. Kadrajda TAM 2 kişi: "
      "Peri ve yaşlı bir kadın; yaşlı kadının YÜZÜ kadrajda değil (kadrajın kenarında yalnız omzu, gri yün şal örtülü kolları ve "
      "elleri)."),
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi, kuru ve düzgün: " + P_IPEK + "): hafifçe eğilmiş, iki "
       "eliyle " + SAAT_GERCEK + " yaşlı kadının avuçlarına bırakıyor; yüzü yumuşak, gözleri nemli, sevecen bir gülümseme."),
      ("Yaşlı kadının kırışık, damarlı elleri saatin altında açık, hafif titriyor; parmağında ince, eski bir alyans.")],
     [PERI_CEK, KALABALIK])
kare(93, "K95", "Karar (polise teslim): Selim başı önde, amblemsiz bir polis memuruyla götürülüyor; Peri ve Cengo izliyor",
     [ISKELE, SELIM, PBAS, PK1, CENGO],
     "TAM 4 kişi · Selim başı önde yürüyor, yanında AMBLEMSİZ lacivert üniformalı bir polis memuru (sırtı dönük, yüzü görünmüyor) kolundan tutuyor · Peri battaniyeli ve Cengo arkada izliyor · rozet, şapka amblemi, yazı YOK",
     ("Sahne: birinci referanstaki iskele, akşamüstü. Kadrajda TAM 4 kişi: Selim, bir polis memuru, Peri, Cengo."),
     [("Selim (ikinci referansın yüzü ve kıyafeti: " + SELIM_K + "): orta planda, başı önde, omuzları çökük yürüyor."),
      ("Polis memuru: sade, koyu lacivert üniformalı, şapkasız bir adam; sırtı bize dönük, yüzü görünmüyor; Selim'i kolundan nazikçe "
       "tutuyor. Üniformada ROZET, ARMA, AMBLEM, yazı YOK; silah görünmüyor."),
      ("Peri (üçüncü referansın yüzü; kıyafeti: " + P_BATT + ") ve Cengo (beşinci referans: " + C_K + "): ön planda, yan yana, "
       "onları izliyor; Peri ciddi ve düşünceli, Cengo'nun yüzünde buruk bir ifade.")],
     [KALABALIK, "Kelepçe yok; sahne sakin ve ağırbaşlı."])

# ================================================================ KART AFİŞİ
yaz(94, "KART_V5", "Kart afişi: Vapur", "kart afişi", [SALON, PBAS, PK1, CENGO, SERIT4],
    "TAM 6 kişi · Peri önde kameraya yürüyor, zümrüt yeşili ipek elbise + krem hırka, kırmızı stiletto · Cengo komik, dengesini kaybetmiş · arkada 4 kişi düz tek sıra, eşit boy ve ışık, ciddi (Muammer, Selim, Nedim, Kadir) · yöntem nesneleri YOK · alt %25 boş ahşap zemin · yazı yok",
    [TARZ, KARTLAR,
     ("Bir dedektif hikâyesinin afişi; ipucusuz, hareketli, eğlenceli. Mekân: birinci referanstaki vapurun alt salonu, öğleden sonra; "
      "ahşap koltuk sıraları, ortada direk, pencerelerden deniz ve martılar. Kadrajda TAM 6 kişi. Kadrodaki herkes salonun ahşap "
      "zemininin üstünde, ayakları zemine basıyor."),
     ("Önde, kameraya doğru yürüyen Peri (ikinci referansın yüzü; kıyafet üçüncü referanstaki kart gibi: " + P_IPEK + "): uzun, "
      "kendinden emin adımlarla; ipek elbisenin eteği ve hırkası yürüyüşle hafifçe dalgalanıyor; bir eli belinde; yüzü üç çeyrek, iki "
      "göz görünüyor, gizemli yarım gülümseme; yüzünde belli belirsiz bir yeşillik, deniz tutmasına direnir gibi."),
     ("Peri'nin yanında, bir adım geride Cengo (dördüncü referansın yüzü ve kıyafeti: " + C_K + "): vapurun sallantısıyla dengesini "
      "kaybetmiş, kollarını hafifçe açmış, kasketi kaymak üzere; kaşları kalkık, gülünç."),
     ("Arkada, tek düz sıra hâlinde, eşit aralıkla, aynı boyda, aynı ışıkta dört kişi, beşinci referanstaki yüzlerle (soldan sağa): "
      "Muammer, Selim, Nedim, Kadir. Dördü de yan yana, aynı hizada, kıpırdamadan ayakta duruyor; ciddi ve temkinli, kimse gülmüyor; "
      "öne bakıyor; elleri boş ve yanlarında. Nedim'in bastonu YOK, Kadir'in tepsisi YOK."),
     ("Görselde OLMAYACAKLAR: cep saati, kadife kutu, çanta, deri damga, kazıma, telefon, kâğıt, simit tablası, battaniye, yosun, "
      "ıslaklık, polis, halat. Kimse ıslak değil."),
     ("Düzen: kişiler kadrajda KÜÇÜK ve YUKARIDA; Peri'nin ayakkabısı dahil herkesin ayakları kadrajın yukarıdan %72'sinin içinde "
      "bitiyor. Alt %28'de yalnız salonun boş ahşap zemini; orada kimse ve hiçbir nesne yok."),
     PERI_CEK, PERI_EN, KALABALIK, "Çıplaklık yok.", YAZI, "Görselin oranı TAM 9:16, dikey (941×1672)."],
    satir=["Kart afişi bir satıra bağlı değildir; vaka bitince \"Arkadaşına öner\" kartının arka planı olur (GOMME-21). Codex bu "
           "bölümü istem metnine katmaz.", "", "- *kart*: vakayı oynamamış birine gösterilir — Nurcan yüzeyi."],
    ust_ek=" · GOMME-21…27, BILGI-14…16: kadro = Peri, Cengo + müşteri Muammer + üç şüpheli (Selim, Nedim, Kadir); şüpheliler eşit; yöntem nesneleri yasak; Peri'nin dekolteli temeli verilmez (baş kırpığı + kart).")
