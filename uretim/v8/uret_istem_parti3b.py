# V8 Parti 3b istemleri (detaylar D28–D33 → G82–G87, kareler K155–K201 → G88–G134) — tek kaynaktan; kalıp V7
# uret_istem_parti3b.py (ISTEM-9, ISTEM-15, ISTEM-16, ISTEM-19, ISTEM-35, ISTEM-51). 26 Kasım 2026, Oğuz Bey'in bilgisayarı.
# Dekolteli resim referans verilmez (ISTEM-16): Peri yalnız baş kırpığı + kıyafet kartı. Çalıştır: py -I uret_istem_parti3b.py
import re, os, sys
V8 = os.path.dirname(os.path.abspath(__file__))
SR = open(os.path.join(V8, "satir_resim.md"), encoding="utf-8").read()


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
PERI_EN = ("Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık en çok onun üstünde; öbür kadın(lar) Peri'yi gölgede "
           "bırakmıyor.")
KALABALIK = "Yüzler üç çeyrek, gözler görünüyor; kimse kameraya bakmıyor. Her kişinin İKİ kolu, İKİ eli var."
KOMEDI = "Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok; müstehcen değil."
YALNIZ = "Sahnede yalnız yazılan nesneler var; başka eşya eklenmiyor."
SATIRBAS = "`arac_satir_resim.js` (25 Kasım 2026, V8 beş kapı yolu). Codex bu bölümü istem metnine katmaz."
GECE = ("Işık: GERÇEKTEN gece; sahnenin çoğu karanlıkta, ışık yalnız lambalardan ve fenerlerden gelir; gündüz gibi aydınlık DEĞİL.")

# ---------------------------------------------------------------- referanslar (onaylı)
BURO_G = ("onayli/G14.png", "büro, gündüz (A60; onaylı arka plan; masada kadife kutu)")
BURO_GECE = ("onayli/G15.png", "büro, gece (A71; onaylı)")
MUHASEBE = ("onayli/G16.png", "Kurtuluş, muhasebe odası (A61; onaylı)")
STUDYO = ("onayli/G17.png", "Maslak, televizyon stüdyosu (A62; onaylı)")
LOKANTA = ("onayli/G18.png", "Samatya, Fikret'in lokantası (A63; onaylı)")
POSTA = ("onayli/G19.png", "Mecidiyeköy, kargo dükkânı (A64; onaylı)")
OTOPARK = ("onayli/G20.png", "Karaköy otoparkı (A65; onaylı)")
KULIS = ("onayli/G21.png", "stüdyo kulisi (A66; onaylı)")
ATOLYE = ("onayli/G22.png", "Kurtuluş, mutfak atölyesi (A67; onaylı; köşede paravan)")
ATOLYE_ON = ("onayli/G23.png", "atölyenin önü, gece, siyah araba (A68; onaylı)")
SAHIL = ("onayli/G24.png", "sahil yolu, gece (A69; onaylı)")
YALI = ("onayli/G25.png", "Yeniköy, yalı ve iskele, gece (A70; onaylı)")
PM_BAS = ("referanslar/peri_manto8_bas.png", "Peri'nin başı (G26'nın baş kırpığı; G26 dekolteli, bütün hâli verilmez)")
PM_KART = ("onayli/G1.png", "Peri'nin kıyafet kartı (kırmızı manto): YALNIZ kıyafetin kesimi, boyu ve rengi")
PK_BAS = ("referanslar/peri_kilik_bas.png", "Peri'nin başı, kep ve gözlükle (G27'nin baş kırpığı; G27 dekolteli, bütün hâli verilmez)")
PK_KART = ("onayli/G2.png", "Peri'nin kıyafet kartı (aşçı yardımcısı kılığı): YALNIZ kıyafetin kesimi, boyu ve rengi")
P_BAS = ("../referanslar/peri_bas.jpg", "Peri'nin yüzü (yalnız yüz; kep ve gözlük YOK)")
C_SOFOR = ("onayli/G28.png", "Cengo, şoför üniforması temel figürü (onaylı; yüz, saç, üniforma, bileklik)")
C_S_KART = ("onayli/G3.png", "Cengo'nun kıyafet kartı (şoför): YALNIZ kıyafetin kesimi, boyu ve rengi")
C_CEKET = ("onayli/G29.png", "Cengo, kendi ceketi temel figürü (onaylı; yüz, saç, ceket, bileklik)")
GIZEM = ("onayli/G30.png", "Gizem, koyu yeşil kazak temel figürü (onaylı)")
BAHAR = ("onayli/G31.png", "Bahar Hanım'ın kıyafet kartı (yüz ve kıyafet)")
TARKAN = ("onayli/G32.png", "Tarkan'ın kıyafet kartı (yüz ve kıyafet)")
NEVZAT = ("onayli/G33.png", "Nevzat Bey'in kıyafet kartı (yüz ve kıyafet)")
FIKRET = ("onayli/G34.png", "Fikret Usta'nın kıyafet kartı (yüz ve kıyafet)")
NIHAT = ("onayli/G35.png", "Nihat Kora'nın kıyafet kartı (yüz ve kıyafet)")
EMIR = ("onayli/G36.png", "Emir'in kıyafet kartı (yüz ve kıyafet)")
PINAR = ("onayli/G37.png", "Pınar'ın kıyafet kartı (yüz ve kıyafet)")
YUSUF = ("onayli/G38.png", "Yusuf Efendi'nin kıyafet kartı (yüz ve kıyafet)")
SERIT4 = ("referanslar/serit_bahar_nevzat_fikret_tarkan.jpg", "şerit: soldan Bahar, Nevzat, Fikret, Tarkan (kıyafet kartları)")
SERIT2 = ("referanslar/serit_nihat_tarkan.jpg", "şerit: soldan Nihat, Tarkan (kıyafet kartları)")

# ---------------------------------------------------------------- kişi cümleleri (ISTEM-20: sabitler yeniden yazılır)
P_MANTO = ("kırmızı yün kruvaze manto, çentikli geniş yaka, düğmesiz, kuşak ÇÖZÜK ve iki yandan sarkıyor, önü açık; altında derin V "
           "yakalı krem saten bluz, dekoltesi belirgin; dar siyah kalem etek; açık, dalgalı kızıl-kahve saç; küçük altın halka küpeler; "
           "kırmızı stiletto, çorap yok")
P_KILIK = ("krem saten bluz (derin V yaka önlüğün üstünden görünüyor, dekoltesi belirgin), beline sıkıca bağlı BEYAZ şef önlüğü, dar "
           "siyah kalem etek; başında küçük beyaz aşçı KEPİ; iri siyah gözlük burnunun en ucunda, gözler gözlüğün üstünden görünüyor; "
           "açık dalgalı saç; kırmızı stiletto, çorap yok")
P_ONLUK = ("krem saten bluz (derin V yaka, dekoltesi belirgin), beline sıkıca bağlı BEYAZ şef önlüğü, dar siyah kalem etek; KEP YOK, "
           "GÖZLÜK YOK; açık, dalgalı kızıl-kahve saç; kırmızı stiletto, çorap yok")
P_RECEL = ("aynı önlüklü kılık (kep ve gözlük yok) ama baştan aşağı koyu kırmızı VİŞNE REÇELİNE bulanmış: önlük, bluz, kollar, "
           "bacaklar ve saç parlak, yapışkan kırmızı; yüzünde birkaç reçel lekesi; kırmızı stiletto")
P_SON = ("önlüksüz, yüzü yıkanmış: krem saten bluz (derin V yaka, dekoltesi belirgin) ve dar siyah kalem etek, bluzda küçük reçel "
         "lekeleri; kırmızı manto kollarına geçirilmemiş, OMUZLARINA atılmış, kuşağı çözük; dalgalı saçında koyu kırmızı reçel "
         "kalıntıları; kırmızı stiletto")
C_S = ("koyu lacivert, iki sıra düğmeli, dik yakalı şoför ceketi (bir beden dar), lacivert pantolon, siyah siperli lacivert KASKET, "
       "BEYAZ eldivenler; göğüs cebinden ince bir telin ucu; sol bileğinde (eldivenin üstünde) renkli boncuklu bileklik; kasketin "
       "altından koyu, dağınık saç")
C_SD = ("aynı şoför üniforması ama ceketin bir düğmesi KOPMUŞ, kasketi yamuk, beyaz eldivenlerinin parmakları vişne reçeliyle "
        "kırmızı; göğüs cebinden telin ucu; sol bileğinde renkli boncuklu bileklik")
C_C = ("eskimiş kahve süet ceket, kolları dirseğe kıvrık, yakası açık krem gömlek, koyu kot; göğüs cebinden ince bir telin ucu; sol "
       "bileğinde renkli boncuklu bileklik; koyu, dağınık saç, kısa sakal")
G_K = "koyu yeşil, kalın örgü balıkçı yaka kazak, siyah pantolon; bal rengi kâküllü kıvırcık saç, çiller, küçük altın halka küpeler"
BAHAR_K = ("kısa PLATİN pixie saçlı, esmer, kare çeneli, kalın koyu kaşlı, iri yapılı, elli yaşlarında kadın; renkli iri çiçekli "
           "kaftan bluz, krem keten pantolon, kocaman gümüş halka küpeler")
TARKAN_K = ("ince, KEL ve parlak kafalı, dar uzun solgun yüzlü, SARI kaşlı, kaşında ince iz olan genç adam; siyah takım, siyah gömlek, "
            "altın kol düğmeleri")
NEVZAT_K = ("zayıf, kemikli yüzlü, gür KABARIK KUMRAL saçlı, bıyıksız adam; açık mavi gömlek, iki ön kolunda siyah kolluk, boynunda "
            "zincirli gözlük, kulağında kalem; gri pantolon")
FIKRET_K = ("iri, geniş omuzlu, SİYAH at kuyruklu, KEÇİ SAKALLI, altmışlarında aşçı; lekeli beyaz aşçı ceketi, kolları sıvalı, ön "
            "kolunda soluk çapa dövmesi; kareli pantolon")
NIHAT_K = ("ince, uzun boylu, DÜZ GERİYE yatırılmış GÜMÜŞ saçlı, bronz tenli, kemerli burunlu, ellilerinde adam; beyaz keten takım, "
           "açık yakalı beyaz gömlek, güneş gözlüğü saçının üstünde")
EMIR_K = ("sıska, KIVIRCIK SİYAH saçlı (tepede kabarık), kepçe kulaklı, DİŞ TELLİ genç; gri tişört üstünde turuncu otopark yeleği "
          "(yazısız), kot")
YUSUF_K = ("çok KAMBUR, ufak tefek ihtiyar; kalın BÜYÜTEÇ camlı gözlük gözlerini kocaman gösteriyor; kahverengi kasket, altından "
           "seyrek uzun beyaz saç; koyu yeşil yün hırka")


def yaz(n, kod, baslik, tur, refs, kontrol, govde, satir=None):
    out = [f"# G{n} — {baslik}", "", f"- tür: {tur} · anahtar: `{kod}`",
           "- önce hazır olmalı: referanslardaki onaylı resimler", "",
           "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    out += ["", "## Satırlar", ""]
    if satir:
        out += ["`vaka8_diyalog.md` (seçim karesi; görselsiz turun satır listesinde yok). Codex bu bölümü istem metnine katmaz.", ""] + satir
    else:
        out += [SATIRBAS, "", satirlar(kod)]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(os.path.join(V8, "prompts", f"G{n}.md"), "w", encoding="utf-8", newline="\n") as f:
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
detay(82, "D28", "Detay: ekranda alt alta üç ödeme satırı", [MUHASEBE, NEVZAT],
      "bilgisayar ekranı yakından · alt alta ÜÇ yatay satır, hepsi bulanık (rakam, ad OKUNMUYOR) · ekranın kenarında Nevzat'ın kolluklu eli",
      ("Detay: birinci referanstaki muhasebe odasının masasında bir bilgisayar ekranı, yakından, hafif çapraz. Ekran açık ve parlak; "
       "beyaz zeminde alt alta ÜÇ yatay satır, her biri bulanık gri bloklar ve çizgilerden oluşuyor: hiçbir rakam, harf, ad, logo "
       "seçilmiyor; üç satır birbirinin aynı uzunlukta, düzenli. Ekranın kenarını, siyah kollukla örtülü bir ön kolun ucundaki el "
       "(ikinci referanstaki Nevzat'ın eli) tutmuş, ekranı bize doğru çeviriyor. Yüz kadrajda yok. Öğleden sonra ışığı."))
detay(83, "D29", "Detay: masada bir yığın taksi fişi", [MUHASEBE],
      "masada dağınık bir YIĞIN küçük, uzun kâğıt fiş · üstlerinde yazı OKUNMUYOR (bulanık gri çizgiler) · el yok",
      ("Detay: birinci referanstaki muhasebe odasının ahşap masasının üstü, yukarıdan, yakından. Masanın köşesinde dağınık bir YIĞIN "
       "küçük, ince, uzun, beyaz-sarımsı kâğıt fiş; bazıları kıvrılmış, bazıları üst üste. Fişlerin üstünde yalnız bulanık, soluk gri "
       "çizgiler: hiçbir harf, rakam, logo seçilmiyor. Fişlerin yanında bir kalem. El ya da yüz yok. Masa lambasının sıcak ışığı."))
detay(84, "D30", "Detay: Fikret'in elinde eski kasadan çıkmış açık dosya, noter mühürlü kâğıt", [LOKANTA, FIKRET],
      "iri, dövmeli el açık bir karton dosya tutuyor · içinde tek kâğıt, köşesinde yuvarlak kırmızı-mor MÜHÜR · yazı OKUNMUYOR · arkada açık kasa kapağı",
      ("Detay: birinci referanstaki lokantanın tezgâhının arkası, yakından. Arkada eski, koyu yeşil, pirinç kollu dökme demir kasanın "
       "kapağı açık. Önde, iri, damarlı, ön kolunda soluk çapa dövmesi olan bir aşçının eli (ikinci referanstaki Fikret'in eli, beyaz "
       "aşçı ceketinin sıvalı kolu) eski, sararmış bir karton dosyayı açık tutuyor. Dosyanın içinde tek bir kâğıt: üstünde bulanık gri "
       "satırlar (harf seçilmez) ve köşesinde yuvarlak, kabartmalı, kırmızı-mor bir resmî MÜHÜR (mührün içinde de yazı seçilmez). Yüz "
       "kadrajda yok."))
detay(85, "D31", "Detay: tezgâhta açık kalın defter", [POSTA, YUSUF],
      "tezgâhta açık, KALIN, eski kayıt defteri · sayfalarda el yazısı satırlar bulanık (OKUNMUYOR) · yaşlı, kırışık eller sayfayı tutuyor · yeşil hırka kolu",
      ("Detay: birinci referanstaki kargo dükkânının ahşap tezgâhı, yukarıdan, yakından. Tezgâhta açılmış KALIN, eski, bez ciltli bir "
       "kayıt defteri; sayfalar sararmış, üstünde mavi mürekkeple yazılmış sıra sıra el yazısı satırlar, hepsi bulanık: harf, rakam "
       "seçilmiyor. Defterin kenarını yaşlı, kırışık, ince iki el tutuyor; bileklerde koyu yeşil yün hırkanın kolları (ikinci "
       "referanstaki Yusuf'un elleri). Yüz kadrajda yok. Kapıdan gelen gün ışığı."))
detay(86, "D32", "Detay: deftere iliştirilmiş noter kâğıdı, Peri'nin eli", [POSTA, PK_KART],
      "açık defterin sayfasına ataşla iliştirilmiş TEK kâğıt, köşesinde yuvarlak MÜHÜR · yazı OKUNMUYOR · kadın eli (kırmızı oje, krem saten bluz kolu) kâğıdı kaldırıyor",
      ("Detay: birinci referanstaki dükkânın tezgâhında açık duran eski defterin sayfası, yukarıdan, çok yakından. Sayfaya metal bir "
       "ataşla iliştirilmiş TEK, beyaz, resmî görünümlü bir kâğıt; üstünde bulanık gri satırlar (harf, ad seçilmez) ve alt köşesinde "
       "yuvarlak, kabartmalı bir resmî MÜHÜR. Kırmızı ojeli, zarif bir kadın eli (krem saten bluzun kolu, beyaz önlüğün kenarı — "
       "ikinci referanstaki kılık) kâğıdın köşesini hafifçe kaldırmış, altına bakıyor. Yüz kadrajda yok."))
detay(87, "D33", "Detay: Tarkan'ın elinde titreyen telefon, ekranda tek harf 'N'", [ATOLYE, TARKAN],
      "erkek elinde telefon, ekranı bize dönük · ekranda YALNIZ büyük tek harf 'N' (başka yazı, rakam, ikon YOK) · titreme çizgileri · siyah takım kolu, altın kol düğmesi",
      ("Detay: birinci referanstaki atölyenin önünde, yakından. Siyah takım kolunun ucunda, altın kol düğmeli beyaz olmayan siyah "
       "gömlek manşetiyle bir erkek eli (ikinci referanstaki Tarkan'ın eli) bir akıllı telefonu tutuyor; ekran bize dönük. Telefon "
       "titriyor: kenarlarında hafif titreşim çizgileri, el gergin. Ekran karanlık bir gelen arama ekranı: ortasında YALNIZ tek, iri, "
       "beyaz bir harf: N. Ekranda başka yazı, rakam, saat, ikon, düğme YOK. Arkada bulanık tezgâhlar ve kavanozlar. Yüz kadrajda yok."),
      ["Bu resimdeki TEK yazı ekrandaki 'N' harfidir; başka hiçbir yazı, harf ya da rakam yok."])

# ================================================================ KARELER
kare(88, "K155", "Giriş açılışı: Peri masada, kırmızı manto, kuşak çözük; masada kadife kutu (yalnız)", [BURO_G, PM_BAS, PM_KART],
     "TAM 1 kişi · Peri masasında oturuyor · kırmızı manto, kuşak ÇÖZÜK ve sarkık · masada kapalı bordo KADİFE kutu · sabah ışığı",
     "Sahne: birinci referanstaki büro, sabah; pencereden sıcak gün ışığı. Kadrajda TAM 1 kişi: Peri, öndeki masasında.",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_MANTO + "): masasında oturuyor, bacak bacak "
       "üstüne atmış (kırmızı stiletto görünüyor); mantonun kuşağının iki ucu sandalyenin iki yanından sarkıyor. Önünde masada "
       "kapalı, avuç büyüklüğünde, koyu bordo KADİFE bir kutu; bir elinin parmak uçları kutunun kapağında, dalgın ve sakin; öbür eli "
       "dizinde.")],
     [PERI_CEK, KALABALIK])
kare(89, "K156", "Giriş: Bahar eşikte, elinde reçel kavanozu (yalnız)", [BURO_G, BAHAR],
     "TAM 1 kişi · Bahar kapı eşiğinde · platin pixie, çiçekli kaftan · elinde ETİKETSİZ vişne reçeli kavanozu · gülümsüyor",
     "Sahne: birinci referanstaki büronun kapısı AÇIK; eşikte bir kadın. Kadrajda TAM 1 kişi.",
     [("Bahar (ikinci referansın yüzü ve kıyafeti: " + BAHAR_K + "): eşikte duruyor, iki eliyle göğsünün önünde kapağı kırmızı-beyaz "
       "kareli kumaşla bağlı, ETİKETSİZ, koyu kırmızı vişne reçeliyle dolu bir cam kavanoz tutuyor; geniş, sıcak bir televizyon "
       "gülümsemesi, gamzesi derin.")],
     [KALABALIK])
kare(90, "K157", "Giriş: Peri ile Cengo birbirine bakıyor; Bahar konuşuyor", [BURO_G, PM_BAS, PM_KART, C_CEKET, BAHAR],
     "TAM 3 kişi · Peri (manto) ve Cengo (süet ceket) BİRBİRİNE bakıyor · Bahar onlara dönük konuşuyor · Peri en gösterişli",
     "Sahne: birinci referanstaki büro, sabah. Kadrajda TAM 3 kişi: Peri, Cengo, Bahar.",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_MANTO + "): masasının yanında ayakta, başını "
       "Cengo'ya çevirmiş, ona anlamlı, ciddi bir bakışla bakıyor."),
      ("Cengo (dördüncü referansın yüzü ve kıyafeti: " + C_C + "): birkaç adım ötede, Peri'ye bakıyor; yüzünde tanıdık bir şeyi "
       "hatırlamış gibi ciddi, yumuşak bir ifade."),
      ("Bahar (beşinci referans: " + BAHAR_K + "): ikisinin arasında, biraz geride, sandalyede oturuyor, elleriyle anlatıyor; "
       "ikisinin bakıştığını fark etmiyor.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(91, "K158", "Konuşma (çekicilik): Peri paravandan kılıkla çıkıyor; Cengo'nun simidi düşüyor; Gizem",
     [BURO_G, PK_BAS, PK_KART, C_CEKET, GIZEM],
     "TAM 3 kişi · Peri paravanın önünde, aşçı kılığı (önlük, kep, gözlük burnun ucunda, bacaklar açık) · paravanın üstünde KIRMIZI manto asılı · Cengo'nun elinden SİMİT düşüyor (havada) · Gizem arkada · paravan büro köşesinde",
     ("Sahne: birinci referanstaki büro, sabah; büronun bir köşesine katlanır, üç kanatlı, eski ahşap bir soyunma PARAVANI açılmış, "
      "paravanın üstüne kırmızı bir manto asılı. Kadrajda TAM 3 kişi: Peri, Cengo, Gizem."),
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + "): paravanın arkasından az önce çıkmış, "
       "bir eli belinde, kalçası yana kırık, bir model gibi poz veriyor; dudaklarında kendinden emin, alaycı bir gülümseme."),
      ("Cengo (dördüncü referansın yüzü ve kıyafeti: " + C_C + "): ona bakakalmış, ağzı açık sırıtıyor; elinden yuvarlak bir SİMİT "
       "kayıp yere düşüyor, simit havada."),
      ("Gizem (beşinci referans: " + G_K + "): arkada, elinde boş bir tanıtım çantası, gülmemek için dudaklarını bastırıyor.")],
     [PERI_KOMIK, PERI_EN, KOMEDI, KALABALIK])
kare(92, "K159", "Konuşma: Cengo şoför kasketiyle aynada kendine selam veriyor", [BURO_G, C_SOFOR, C_S_KART],
     "TAM 1 kişi (ve aynadaki yansıması) · Cengo şoför üniformasıyla, kasketli · eldivenli eliyle kasketin siperine SELAM · duvarda küçük bir ayna, yansımada aynı selam",
     ("Sahne: birinci referanstaki büro, bir saat sonra. Duvarda, dosya dolabının yanında küçük, ahşap çerçeveli bir ayna. Kadrajda "
      "TAM 1 kişi: Cengo, aynanın karşısında (aynada onun yansıması görünüyor; yansıma ayrı bir kişi değil)."),
     [("Cengo (ikinci referansın yüzü ve üniforması; üçüncü referans kart: " + C_S + "): aynanın karşısında dimdik, eldivenli sağ "
       "eliyle kasketinin siperine abartılı, şakacı bir asker selamı veriyor; kendine hayran, hınzır bir gülümseme. Aynada aynı "
       "selamın yansıması.")],
     [KALABALIK])
kare(93, "K160", "Stüdyo: kılıktaki Peri kameranın önünde soğan doğruyor, ağlıyor", [STUDYO, PK_BAS, PK_KART],
     "TAM 1 kişi · Peri tezgâhta, aşçı kılığı · kesme tahtasında SOĞAN doğruyor · gözlerinden YAŞ süzülüyor · önde stüdyo kamerası",
     "Sahne: birinci referanstaki televizyon stüdyosu; ışıkların altındaki mutfak dekorunun tezgâhı. Kadrajda TAM 1 kişi: Peri.",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + "): tezgâhın başında, kesme tahtasında "
       "yarısı doğranmış iri bir kuru SOĞAN, sağ elinde bir mutfak bıçağı (bıçak tahtaya dönük, güvenli), sol eli soğanın üstünde; "
       "gözlerinden yaşlar süzülüyor, burnunu çekiyor ama dudaklarında inatçı bir gülümseme; gözlük burnunun ucunda buğulanmış. Ön "
       "planda bir stüdyo kamerasının karanlık kenarı.")],
     [PERI_KOMIK, KOMEDI, KALABALIK])
kare(94, "K161", "Posta: Cengo kolileri rafa diziyor, Yusuf izliyor", [POSTA, C_SOFOR, C_S_KART, YUSUF],
     "TAM 2 kişi · Cengo (şoför üniforması) kucağında koli, rafa diziyor · Yusuf tezgâhın arkasından gülümseyerek izliyor · kolilerde yazı YOK",
     "Sahne: birinci referanstaki kargo dükkânı. Kadrajda TAM 2 kişi: Cengo ve Yusuf.",
     [("Cengo (ikinci referansın yüzü ve üniforması; üçüncü referans kart: " + C_S + "): kollarında iki kahverengi koli (yazısız, "
       "etiketsiz), tezgâhın arkasındaki rafa diziyor; işini severek yapan, keyifli bir yüz."),
      ("Yusuf (dördüncü referans: " + YUSUF_K + "): tezgâhın arkasında, kambur, ellerini önünde birleştirmiş, büyüteç gözlüğünün "
       "arkasından kocaman gözlerle Cengo'ya bakıp gülümsüyor.")],
     [KALABALIK])
kare(95, "K162", "Otopark: Cengo kartını Emir'in avucuna koyuyor", [OTOPARK, C_SOFOR, C_S_KART, EMIR],
     "TAM 2 kişi · Cengo (şoför) eldivenli eliyle buruşuk küçük bir KARTI Emir'in açık avucuna koyuyor · kartta yazı OKUNMUYOR · kulübe arkada",
     "Sahne: birinci referanstaki otopark, görevli kulübesinin önü. Kadrajda TAM 2 kişi: Cengo ve Emir.",
     [("Cengo (ikinci referansın yüzü ve üniforması; üçüncü referans kart: " + C_S + "): Emir'in karşısında, hafif eğilmiş, eldivenli "
       "eliyle buruşuk, küçük, beyaz bir kartvizit kartını Emir'in açık avucuna koyuyor; yüzünde ciddi, ağabeyce, yumuşak bir ifade. "
       "Kartın yüzü bize dönük değil; üstünde yazı seçilmiyor."),
      ("Emir (dördüncü referans: " + EMIR_K + "): avucunu açmış, karta bakıyor; meraklı, saf bir yüz, ağzı hafif açık, diş teli belli.")],
     [KALABALIK])
kare(96, "K163", "Kulis: Peri buketten bir çiçek kokluyor, elinde telefon", [KULIS, PK_BAS, PK_KART],
     "TAM 1 kişi · Peri aynanın önünde, aşçı kılığı · bir elinde buketten aldığı tek GÜL, burnuna götürmüş · öbür elinde telefon (ekranı görünmüyor)",
     "Sahne: birinci referanstaki stüdyo kulisi; ampullü ayna, masada kartsız buket. Kadrajda TAM 1 kişi: Peri.",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + "): ampullü aynanın önünde ayakta, "
       "buketten aldığı tek bir pembe gülü burnuna götürmüş, gözlerini yarı kapamış kokluyor; öbür elinde bir akıllı telefon, kulağından "
       "biraz uzakta, ekranı kendine dönük (görünmüyor); yüzünde yumuşak, dalgın bir gülümseme. Aynada onun belirsiz yansıması.")],
     [PERI_CEK, KALABALIK])
kare(97, "K164", "Ters köşe: akşam atölye, kavanoz kuleleri, köşede paravan (kişisiz)", [ATOLYE],
     "TAM 0 kişi · akşam ışığı · tezgâhlarda kavanoz KULELERİ (etiketsiz) · köşede soyunma PARAVANI, kanatlar arasında ince aralık",
     ("Sahne: birinci referanstaki mutfak atölyesi, akşam saat yedi; pencerelerden son turuncu gün ışığı, tavan lambaları yanıyor. "
      "Kadrajda TAM 0 kişi: atölye boş. Tezgâhlarda piramit gibi dizilmiş etiketsiz vişne reçeli kavanoz kuleleri; arka köşede üç "
      "kanatlı soyunma paravanı, kanatları arasında ince bir aralık. Kamera biraz daha yakın ve alçak, paravana doğru."), [], [])
kare(98, "K165", "Ters köşe: kapıda kasketli Cengo bir adama kapıyı açıyor; paravanın kenarında önlüğün ucu",
     [ATOLYE, C_SOFOR, C_S_KART, TARKAN],
     "TAM 2 kişi · Cengo (şoför) atölye kapısını açıyor, bir eli kasketinde · gelen adam (Tarkan) kapıda, YARI görünür · paravanın kenarından BEYAZ önlüğün ucu görünüyor (Peri görünmüyor)",
     ("Sahne: birinci referanstaki atölye, akşam; kapı tarafı. Kadrajda TAM 2 kişi: Cengo ve kapıdan giren adam. Köşedeki paravanın "
      "kenarından, arkasında saklanan birinin beyaz önlüğünün ucu belli belirsiz taşıyor; o kişi görünmüyor."),
     [("Cengo (ikinci referansın yüzü ve üniforması; üçüncü referans kart: " + C_S + "): atölyenin kapısını iki eliyle açık tutmuş, "
       "başı hafif eğik, ciddi bir şoför gibi."),
      ("Tarkan (dördüncü referans: " + TARKAN_K + "): kapının eşiğinde, yarısı kapı pervazının arkasında, içeri adım atıyor; "
       "elinde bir telefon (ekranı görünmüyor); kendinden emin.")],
     [KALABALIK])
kare(99, "K166", "Ters köşe: paravan aralığından bakış — Tarkan", [ATOLYE, TARKAN],
     "BAKIŞ AÇISI: paravanın iki kanadı arasındaki aralıktan · TAM 1 kişi görünür: Tarkan (kel, sarı kaş, kaş izi, siyah takım, siyah gömlek) elinde telefon, gülümsüyor · paravan kanatları kadrajın iki yanında karanlık",
     ("Sahne: birinci referanstaki atölye, akşam; ama bakış paravanın ARKASINDAN: kadrajın iki yanında paravanın koyu ahşap çerçeveli, "
      "krem kumaşlı kanatları, aralarındaki dikey aralıktan atölyenin içi görünüyor. Kadrajda TAM 1 kişi görünüyor: aralığın tam "
      "ortasında Tarkan."),
     [("Tarkan (ikinci referans: " + TARKAN_K + "): atölyenin ortasında, tezgâhın yanında, elinde bir telefon (ekranı görünmüyor), "
       "kendinden emin, kibar, kaygan bir gülümsemeyle birine el sallıyor.")],
     ["Peri'nin kendisi kadrajda YOK; yalnız onun baktığı yer."])
kare(100, "K167", "Ters köşe: paravanın arkasında donmuş Peri (kılık)", [ATOLYE, PK_BAS, PK_KART],
     "TAM 1 kişi · Peri paravanın ARKASINDA, kanatların arasındaki aralıktan bakarken donmuş · elini ağzına götürmüş · kılık (kep, gözlük, önlük)",
     ("Sahne: birinci referanstaki atölyenin köşesi; paravanın ARKASI, dar, gölgeli bir köşe. Kadrajda TAM 1 kişi: Peri, paravanın "
      "arkasında."),
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + "): sırtı duvara yakın, yüzü paravanın "
       "aralığına dönük, donup kalmış; bir elinin parmak uçları açık ağzının önünde, gözleri iri, kaşları yukarıda: inanamıyor. Öbür "
       "eli paravanın kanadını tutuyor.")],
     [PERI_CEK, KALABALIK])
kare(101, "K168", "Ters köşe: Cengo paravanın yanında eğilmiş, Peri'yle fısıldaşıyor", [ATOLYE, PK_BAS, PK_KART, C_SOFOR, C_S_KART],
     "TAM 2 kişi · Cengo (şoför) paravanın yanında eğilmiş · Peri paravanın kenarından yüzünü uzatmış · ikisi fısıldaşıyor, yüzler yakın",
     "Sahne: birinci referanstaki atölyenin köşesi, paravanın kenarı, akşam. Kadrajda TAM 2 kişi: Cengo ve Peri.",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + "): paravanın kenarından yalnız başını ve "
       "omzunu uzatmış, kaşları çatık, endişeli, Cengo'ya fısıldıyor."),
      ("Cengo (dördüncü referansın yüzü ve üniforması; beşinci referans kart: " + C_S + "): paravanın yanında, sırtı odaya dönük, "
       "Peri'ye doğru eğilmiş, başını yaklaştırmış, ciddi bir yüzle dinliyor; bir eli kasketinde.")],
     [PERI_CEK, KALABALIK])
kare(102, "K169", "Yüzleşme açılışı: Bahar tezgâhta, Nevzat kenarda, Fikret kapıda, Tarkan telefonla; Peri ve Cengo",
     [ATOLYE, P_BAS, PK_KART, C_SOFOR, SERIT4],
     "TAM 6 kişi · Bahar tezgâhın başında · Nevzat bir kenarda · Fikret kapının yanında, kollarını kavuşturmuş · Tarkan telefonuyla · Peri (önlük, KEP ve GÖZLÜK YOK) ve Cengo (şoför) · Peri en gösterişli",
     ("Sahne: birinci referanstaki atölyenin mutfağı, akşam; tezgâhlarda kavanoz kuleleri. Kadrajda TAM 6 kişi: Bahar, Nevzat, Fikret, "
      "Tarkan, Peri, Cengo. Kişiler daha küçük ve kadrajda daha yukarıda; en öndekinin ayakkabısı dahil herkesin ayakları kadrajın "
      "üst %80'inin içinde."),
     [("Beşinci referans bir şerittir (soldan Bahar, Nevzat, Fikret, Tarkan). Bahar (" + BAHAR_K + "): ortada, tezgâhın başında. "
       "Nevzat (" + NEVZAT_K + "): solda, bir kenarda, gergin. Fikret (" + FIKRET_K + "): sağda, kapının yanında, kollarını "
       "kavuşturmuş, huysuz. Tarkan (" + TARKAN_K + "): tezgâhın yanında, elinde telefon (ekranı görünmüyor), kendinden emin."),
      ("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kartın önlüklü hâli: " + P_ONLUK + "): ön planda, odanın "
       "ortasına doğru yürüyor, kararlı."),
      ("Cengo (dördüncü referansın yüzü ve üniforması: " + C_S + "): Peri'nin bir adım gerisinde, kapı tarafında.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(103, "K170", "Yüzleşme kaçışı: Tarkan kapıya koşuyor", [ATOLYE, TARKAN],
     "TAM 1 kişi · Tarkan atölyenin kapısına KOŞUYOR, sırtı yarı dönük, başı geriye bakıyor · elinde telefon · ceketi uçuşuyor",
     "Sahne: birinci referanstaki atölye, akşam; kapıya doğru. Kadrajda TAM 1 kişi: Tarkan.",
     [("Tarkan (ikinci referans: " + TARKAN_K + "): atölyenin kapısına doğru KOŞUYOR, ceketinin etekleri uçuşuyor, bir elinde "
       "telefon; başını omzunun üstünden geriye çevirmiş, yüzü bembeyaz ve panik içinde (üç çeyrek, iki göz görünüyor).")],
     [KALABALIK])
kare(104, "K171", "Yüzleşme (Nevzat): Bahar Nevzat'a bakıyor, Nevzat kızarmış", [ATOLYE, BAHAR, NEVZAT],
     "TAM 2 kişi · Bahar dönüp Nevzat'a bakıyor (şaşkın, kırgın) · Nevzat kızarmış, gözlerini kaçırıyor, kolluğunu tutuyor",
     "Sahne: birinci referanstaki atölye, tezgâhın yanı, akşam. Kadrajda TAM 2 kişi: Bahar ve Nevzat.",
     [("Bahar (ikinci referans: " + BAHAR_K + "): tezgâhın başında, başını Nevzat'a çevirmiş, şaşkın ve kırgın bir yüzle ona bakıyor."),
      ("Nevzat (üçüncü referans: " + NEVZAT_K + "): yanakları ve kulakları kıpkırmızı, gözlerini kaçırıyor, bir eliyle öbür "
       "kolundaki kolluğu sıkıca tutuyor; susuyor.")],
     [KALABALIK])
kare(105, "K172", "Yüzleşme (Fikret): Bahar kavanozu tezgâha bırakmış, Fikret'e bakıyor", [ATOLYE, BAHAR, FIKRET],
     "TAM 2 kişi · Bahar az önce elindeki kavanozu tezgâha bırakmış (eli hâlâ kavanozun yanında) · Fikret'e bakıyor · Fikret kapının yanında, öfkeli ve hüzünlü",
     "Sahne: birinci referanstaki atölye, akşam. Kadrajda TAM 2 kişi: Bahar ve Fikret.",
     [("Bahar (ikinci referans: " + BAHAR_K + "): tezgâhın başında, az önce elindeki etiketsiz reçel kavanozunu tezgâha bırakmış, eli "
       "hâlâ kavanozun yanında; donmuş, Fikret'e bakıyor."),
      ("Fikret (üçüncü referans: " + FIKRET_K + "): kapının yanında, yumruklarını sıkmış, yüzü öfke ile hüzün arasında, Bahar'a bakıyor.")],
     [KALABALIK])
kare(106, "K173", "Kovalamaca 1: arabanın içi, arka koltukta Tarkan, direksiyonda kasketli Cengo", [ATOLYE_ON, C_SOFOR, C_S_KART, TARKAN],
     "TAM 2 kişi · arabanın İÇİ, gece · direksiyonda Cengo (kasket, eldiven) · arka koltukta Tarkan panik içinde · yan koltukta katlanmış KIRMIZI manto · camdan atölyenin ışıkları",
     ("Sahne: siyah, eski model bir sedanın içi, gece; ön camdan ve yan camdan birinci referanstaki atölyenin sarı ışıkları "
      "görünüyor. Kamera ön yolcu koltuğunun yanından, arkaya doğru çapraz bakıyor. Kadrajda TAM 2 kişi: Cengo ve Tarkan."),
     [("Cengo (ikinci referansın yüzü ve üniforması; üçüncü referans kart: " + C_S + "): direksiyonda, eldivenli elleri direksiyonda, "
       "dikiz aynasından arkaya bakıyor; yüzünde ciddi ama hınzır bir ifade. Yanındaki boş ön yolcu koltuğunda katlanmış KIRMIZI bir "
       "yün manto duruyor."),
      ("Tarkan (dördüncü referans: " + TARKAN_K + "): arka koltukta, öne eğilmiş, bir eli ön koltuğun arkasında, yüzü bembeyaz, "
       "ağzı açık bağırıyor.")],
     [GECE, KALABALIK])
kare(107, "K174", "Kovalamaca 1: Peri kapanmakta olan bagaja, kasaların arasına atlıyor; bacakları dışarıda",
     [ATOLYE_ON, P_BAS, PK_KART],
     "TAM 1 kişi · siyah arabanın BAGAJI açık, içinde ahşap reçel KASALARI · Peri (önlük, kep/gözlük YOK) kafa üstü kasaların arasına atlamış · iki bacağı ve kırmızı stilettolar bagajın dışında havada · bagaj kapağı inmek üzere",
     ("Sahne: birinci referanstaki atölyenin önü, gece; siyah arabanın arka tarafı yakından, bagaj kapağı açık ve inmeye başlamış. "
      "Bagajın içinde üst üste ahşap kasalar, içlerinde etiketsiz reçel kavanozları. Kadrajda TAM 1 kişi: Peri."),
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kartın önlüklü hâli: " + P_ONLUK + "): bagaja, kasaların "
       "arasına balıklama atlamış; gövdesi bagajın içinde, kasaların arasında; iki bacağı ve kırmızı stilettoları bagajın dışında, "
       "havada çapraz; kalem etek dizlerinin üstünde gergin. Yüzü üç çeyrek, bagajın içinden omzunun üstünden kameraya değil, "
       "yukarıdaki kapağa bakıyor, kararlı ve komik.")],
     [GECE, PERI_KOMIK, KOMEDI, KALABALIK])
kare(108, "K175", "Kovalamaca 2: sahil yolu, arabanın içi — Tarkan telefonda, Cengo direksiyonda", [SAHIL, C_SOFOR, C_S_KART, TARKAN],
     "TAM 2 kişi · arabanın İÇİ, gece · camdan Boğaz'ın ışıkları ve sahil yolu · Tarkan arka koltukta telefonla konuşuyor · Cengo direksiyonda virajı alıyor",
     ("Sahne: siyah sedanın içi, gece; camlardan birinci referanstaki sahil yolu ve Boğaz'ın ışıkları hızla akıyor (hafif hareket "
      "bulanıklığı). Kadrajda TAM 2 kişi: Cengo ve Tarkan."),
     [("Cengo (ikinci referansın yüzü ve üniforması; üçüncü referans kart: " + C_S + "): direksiyonu sertçe çeviriyor, araba virajda "
       "yatıyor; yüzünde sakin, hafif keyifli bir ifade."),
      ("Tarkan (dördüncü referans: " + TARKAN_K + "): arka koltukta yana savrulmuş, bir eli tavandaki tutamakta, öbür eli telefonu "
       "kulağına bastırıyor (ekranı görünmüyor); panik içinde konuşuyor.")],
     [GECE, KALABALIK])
kare(109, "K176", "Kovalamaca 2: bagajın içi — Peri kasaların arasında, baştan aşağı vişne reçeli", [P_BAS, PK_KART],
     "TAM 1 kişi · karanlık BAGAJIN içi · Peri kasaların arasında yan yatmış · baştan aşağı koyu kırmızı VİŞNE REÇELİ · kırık kavanozlar · sinirli ama komik",
     ("Sahne: siyah bir arabanın bagajının içi, gece; dar, karanlık; bagaj kapağının aralığından içeri ince bir sokak lambası ışığı "
      "düşüyor. Kasalardan devrilmiş, kırılmış cam kavanozlar (keskin kenar yok, kırıklar yuvarlak ve zararsız), her yer koyu kırmızı "
      "vişne reçeli. Kadrajda TAM 1 kişi: Peri."),
     [("Peri (birinci referansın yüzü; kıyafeti ikinci referanstaki kartın önlüklü hâli: " + P_RECEL + "): kasaların arasında yan "
       "yatmış, bir dirseğinin üstünde doğrulmaya çalışıyor; yüzü ve saçı reçelli, kaşları çatık, dudakları büzük, sinirli ama komik.")],
     [GECE, PERI_KOMIK, KOMEDI, KALABALIK])
kare(110, "K177", "Kovalamaca 3: Yeniköy, yalı ve iskele, gece (kişisiz)", [YALI],
     "TAM 0 kişi · beyaz yalı, uzun ahşap iskele, ucunda tekne, iskelede balıkçı ağı · fenerler · gece",
     ("Sahne: birinci referanstaki Yeniköy yalısı ve iskelesi, gece. Kadrajda TAM 0 kişi. Kamera biraz daha geniş ve yüksek; yalının "
      "önündeki yola, yalının kapısına ve iskelenin başlangıcına bakıyor; iskelenin ucunda bağlı tekne, ortasında yığılı balıkçı ağı."),
     [], [GECE])
kare(111, "K178", "Kovalamaca 3: Tarkan iskeleye koşuyor; yalıdan valizli Nihat çıkıyor", [YALI, TARKAN, NIHAT],
     "TAM 2 kişi · Tarkan iskeleye doğru KOŞUYOR · yalının kapısından Nihat çıkıyor, elinde deri VALİZ · gece, fenerler",
     "Sahne: birinci referanstaki yalının önü ve iskelenin başı, gece. Kadrajda TAM 2 kişi: Tarkan ve Nihat.",
     [("Tarkan (ikinci referans: " + TARKAN_K + "): iskeleye doğru koşuyor, ceketi uçuşuyor, telaşlı."),
      ("Nihat (üçüncü referans: " + NIHAT_K + "): yalının açık kapısından çıkıyor, elinde kahverengi deri bir VALİZ, sakin ve "
       "kendinden emin, Tarkan'a bakıyor.")],
     [GECE, KALABALIK])
kare(112, "K179", "Kovalamaca 3: reçelli Peri bagaj kapağında ayakta, Nihat'ı gösteriyor; Nihat donmuş", [YALI, P_BAS, PK_KART, NIHAT],
     "TAM 2 kişi · Peri (baştan aşağı reçel) açık bagajın kapağına basıp AYAĞA kalkmış, parmağıyla Nihat'ı gösteriyor · Nihat iskelenin başında, valizi elinde, DONMUŞ",
     ("Sahne: birinci referanstaki yalının önü, gece; siyah arabanın açık bagajı ön planda. Kadrajda TAM 2 kişi: Peri ve Nihat."),
     [("Peri (ikinci referansın yüzü; kıyafeti kartın önlüklü hâli, reçelli: " + P_RECEL + "): bagajın kenarına basmış, ayağa "
       "kalkmış, reçel damlıyor; kolunu uzatmış, işaret parmağıyla Nihat'ı gösteriyor; yüzü öfkeli ve muzaffer."),
      ("Nihat (dördüncü referans: " + NIHAT_K + "): iskelenin başında, elinde deri valiz, donup kalmış, ağzı açık, Peri'ye bakıyor.")],
     [GECE, PERI_KOMIK, KOMEDI, KALABALIK])
kare(113, "K180", "Kovalamaca 4: reçelde kayan Nihat ve Tarkan balıkçı ağına düşüyor", [YALI, SERIT2],
     "TAM 2 kişi · iskelenin ucunda Nihat ve Tarkan REÇELE basıp kaymış, birbirine çarpmış · ikisi birlikte BALIKÇI AĞINA düşüyor, ağ üstlerine kapanıyor · iskelede kırık kavanoz ve reçel",
     ("Sahne: birinci referanstaki iskelenin ucu, gece; tahtalarda kırılmış bir kavanozdan yayılan koyu kırmızı reçel birikintisi. "
      "Kadrajda TAM 2 kişi: Nihat ve Tarkan."),
     [("İkinci referans bir şerittir (soldan Nihat, Tarkan). Nihat (" + NIHAT_K + ") ve Tarkan (" + TARKAN_K + "): ikisi de reçele "
       "basıp kaymış, kolları havada, birbirine çarpmış; iskelede yığılı büyük, yeşil-kahve balıkçı ağının üstüne birlikte düşüyorlar, "
       "ağ üstlerine kapanıyor; yüzlerinde komik bir şaşkınlık. Nihat'ın valizi tahtalarda, kapalı.")],
     [GECE, KOMEDI, KALABALIK])
kare(114, "K181", "Kovalamaca 4: Cengo ağın ipini iskele babasına bağlıyor; eldiveni reçelli, düğmesi kopuk",
     [YALI, C_SOFOR, C_S_KART],
     "TAM 1 kişi · Cengo iskelenin demir BABASINA kalın bir ip bağlıyor · eldivenler reçelli kırmızı · ceketin bir düğmesi KOPUK · arkada ağ (içindekiler belirsiz)",
     ("Sahne: birinci referanstaki iskele, gece. Kadrajda TAM 1 kişi: Cengo. Arkada, bulanık, kapanmış balıkçı ağının yığını."),
     [("Cengo (ikinci referansın yüzü; kart üçüncü: " + C_SD + "): iskelenin kenarındaki kısa, kalın demir babaya "
       "kalın bir halatı sıkıca düğümlüyor, bir ayağını babaya dayamış; omzunun üstünden geriye bakıyor, keyifli, hınzır bir sırıtış.")],
     [GECE, KALABALIK])
kare(115, "K182", "Kovalamaca 4: reçelli Peri Cengo'nun koluna tutunmuş, gülüyor", [YALI, P_BAS, PK_KART, C_SOFOR, C_S_KART],
     "TAM 2 kişi · Peri (baştan aşağı reçel) Cengo'nun koluna tutunmuş, kaymamaya çalışıyor, gülüyor · Cengo (düğmesi kopuk) onu tutuyor",
     "Sahne: birinci referanstaki iskele, gece; tahtalar reçelden kaygan. Kadrajda TAM 2 kişi: Peri ve Cengo.",
     [("Peri (ikinci referansın yüzü; kıyafeti kartın önlüklü hâli, reçelli: " + P_RECEL + "): iki eliyle Cengo'nun koluna tutunmuş, "
       "ayakları kayıyor, saçı dağınık; başını geri atmış, içten gülüyor."),
      ("Cengo (dördüncü referansın yüzü; kart beşinci: " + C_SD + "): bir koluyla Peri'yi tutuyor, gülüyor.")],
     [GECE, PERI_KOMIK, KOMEDI, KALABALIK])
kare(116, "K183", "Kovalamaca sonu: hortumla yüzünü yıkayan Peri; Cengo mantoyu omzuna koyuyor", [YALI, PM_BAS, PM_KART, C_SOFOR, C_S_KART],
     "TAM 2 kişi · Peri önlüksüz, bahçe HORTUMUNDAN akan suyla yüzünü yıkıyor · Cengo KIRMIZI mantoyu arkasından omzuna koyuyor · yerde reçelli önlük",
     ("Sahne: birinci referanstaki yalının bahçesi, iskelenin başında, gece; bir fener. Yerde çıkarılmış, reçelli beyaz bir önlük. "
      "Kadrajda TAM 2 kişi: Peri ve Cengo."),
     [("Peri (ikinci referansın yüzü; kıyafet: krem saten bluz ve siyah kalem etek, önlüksüz, bluzda reçel lekeleri, saçında reçel): "
       "öne eğilmiş, bir elinde tuttuğu yeşil bahçe hortumundan akan suyla yüzünü ve kollarını yıkıyor."),
      ("Cengo (dördüncü referansın yüzü; kart beşinci: " + C_SD + "): Peri'nin arkasında, iki eliyle kırmızı yün mantoyu (üçüncü "
       "referanstaki kart) onun omuzlarına koyuyor; yüzünde sessiz, sevecen bir gülümseme.")],
     [GECE, PERI_CEK, KALABALIK])
kare(117, "K184", "İtiraf: ağın içinde Nihat ve Tarkan yan yana; Peri (manto) ve Cengo karşısında",
     [YALI, PM_BAS, PM_KART, C_SOFOR, SERIT2],
     "TAM 4 kişi · iskelede kapanmış ağın İÇİNDE Nihat ve Tarkan yan yana oturuyor (reçelli) · karşılarında Peri (manto omzunda, saçta reçel) ve Cengo (düğmesi kopuk) ayakta",
     ("Sahne: birinci referanstaki iskele, gece; iskelenin tahtalarında yığılmış balıkçı ağının içinde iki adam oturuyor. Kadrajda "
      "TAM 4 kişi: Nihat, Tarkan, Peri, Cengo."),
     [("Beşinci referans bir şerittir (soldan Nihat, Tarkan). Nihat (" + NIHAT_K + ") ve Tarkan (" + TARKAN_K + "): ağın içinde yan "
       "yana oturuyorlar, ağın gözleri yüzlerinin önünde; kıyafetleri reçel lekeli; Tarkan başını öne eğmiş, pişman; Nihat dik, "
       "sakin, hesap yapıyor."),
      ("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): karşılarında ayakta, mantoyu omuzlarında tutuyor, kararlı."),
      ("Cengo (dördüncü referansın yüzü: " + C_SD + "): Peri'nin yanında, halatın ucunu tutuyor.")],
     [GECE, PERI_CEK, KALABALIK])
kare(118, "K185", "Karar sorusu: ağın içinden Nihat konuşuyor; Peri karşısında", [YALI, PM_BAS, PM_KART, NIHAT],
     "TAM 2 kişi · Nihat ağın içinde oturmuş, eski avukat sesiyle konuşuyor, bir eli ağın gözünden dışarı uzanmış · Peri (manto omzunda) karşısında ayakta, dinliyor",
     "Sahne: birinci referanstaki iskele, gece; ağın yanı. Kadrajda TAM 2 kişi: Nihat ve Peri.",
     [("Nihat (dördüncü referans: " + NIHAT_K + "; takımı reçel lekeli): ağın içinde oturuyor, bir elini ağın gözünden dışarı "
       "uzatmış, açık avuçla bir teklif yapıyor; yüzünde kaygan, ikna edici bir gülümseme."),
      ("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): karşısında ayakta, mantoyu omuzlarında tutuyor, gözleri kısık, "
       "düşünceli, ona bakıyor.")],
     [GECE, PERI_CEK, KALABALIK])
kare(119, "K186", "Seçim anı: ağda Nihat ve Ozan, Peri ortada, Cengo ipin başında; arkada tekne", [YALI, PM_BAS, PM_KART, C_SOFOR, SERIT2],
     "TAM 4 kişi · ağda Nihat ve Tarkan(Ozan) · Peri (manto omzunda, saçta reçel) ORTADA, karar vermek üzere · Cengo ipin başında · arkada tekne · SONUÇ gösterilmiyor (seçim karesi)",
     ("Sahne: birinci referanstaki iskele, gece; iskelenin ucunda bağlı tekne. Kadrajda TAM 4 kişi: Nihat, Tarkan, Peri, Cengo. Bu bir "
      "karar anı: henüz hiçbir şey olmamış."),
     [("Beşinci referans bir şerittir (soldan Nihat, Tarkan). Nihat (" + NIHAT_K + ") ve Tarkan (" + TARKAN_K + "): solda, ağın "
       "içinde, reçel lekeli, Peri'ye bakıyor ve bekliyorlar."),
      ("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): kadrajın ORTASINDA, ayakta, mantoyu omuzlarında tutuyor; yüzü "
       "ciddi, düşünceli, karar vermek üzere."),
      ("Cengo (dördüncü referansın yüzü: " + C_SD + "): sağda, halatın ucunu iskele babasında tutuyor, Peri'ye bakıyor, bekliyor.")],
     [GECE, PERI_CEK, KALABALIK],
     satir=["- *seçim*: Peri'nin 4 SEÇENEK cümlesi bu karenin üstünde (polis / anlaş / anlaşır gibi yap / Ozan'ı bırak)",
            "- **nihat**: Teknedeki para senin, Perihan. Bu akşam burada hiçbir şey olmadı. Ne dersin?"])
kare(120, "K187", "Kapanış: büro, gece — Peri masada, kırmızı manto, saçta reçel; masada kavanoz", [BURO_GECE, PM_BAS, PM_KART],
     "TAM 1 kişi · Peri masasında oturuyor, manto OMUZLARINDA, kuşak çözük · saçında reçel · masada etiketsiz reçel kavanozu ve kadife kutu · lamba ışığı",
     "Sahne: birinci referanstaki büro, gece; yalnız masa lambası yanıyor. Kadrajda TAM 1 kişi: Peri, masasında.",
     [("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): masasında oturuyor, yorgun ama huzurlu, dirseğini masaya dayamış, "
       "çenesi elinde, masadaki etiketsiz vişne reçeli kavanozuna bakıyor; yanında kapalı kadife kutu.")],
     [GECE, PERI_CEK, KALABALIK])
kare(121, "K188", "Kapanış (bağ düşük): Cengo kapıdan çıkıyor; Peri tek başına bir kaşık reçel yiyor", [BURO_GECE, PM_BAS, PM_KART, C_CEKET],
     "TAM 2 kişi · Cengo (süet ceket) kapıdan ÇIKIYOR, sırtı yarı dönük · Peri masada, kavanozdan bir KAŞIK reçel yiyor, yalnız ve hüzünlü",
     "Sahne: birinci referanstaki büro, gece. Kadrajda TAM 2 kişi: Peri ve Cengo.",
     [("Cengo (dördüncü referans: " + C_C + "): arkada, kapının eşiğinde, çıkıyor; sırtı yarı dönük, başı hafif öne eğik."),
      ("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): ön planda masasında, kapağı açık kavanozdan küçük bir kaşıkla "
       "reçel yiyor; gözleri kapıya kaymış, yüzü yalnız ve hüzünlü.")],
     [GECE, PERI_CEK, KALABALIK])
kare(122, "K189", "Kapanış (bağ yüksek): Peri Cengo'nun ceket yakasını düzeltiyor, Cengo kıpırdamıyor", [BURO_GECE, PM_BAS, PM_KART, C_CEKET],
     "TAM 2 kişi · Peri Cengo'nun ÖNÜNDE, iki eliyle süet ceketinin yakasını düzeltiyor · Cengo kıpırdamadan, nefesini tutmuş ona bakıyor · yüzler yakın",
     "Sahne: birinci referanstaki büro, gece; lamba ışığı. Kadrajda TAM 2 kişi: Peri ve Cengo.",
     [("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): Cengo'nun önünde durmuş, iki eliyle onun ceketinin yakasını "
       "düzeltiyor; gözleri yakada, dudakları bir şey söyleyecekmiş gibi hafif aralık; yumuşak."),
      ("Cengo (dördüncü referans: " + C_C + "): dimdik, kıpırdamadan duruyor, nefesini tutmuş, Peri'ye bakıyor.")],
     [GECE, PERI_CEK, KALABALIK])
kare(123, "K190", "Kapanış (bağ yüksek): masadaki telefon çalıyor; ikisi de telefona bakıyor", [BURO_GECE, PM_BAS, PM_KART, C_CEKET],
     "TAM 2 kişi · masada eski, kablolu, siyah masa TELEFONU çalıyor (titreşim çizgileri) · Peri ve Cengo yan yana, ikisi de başını telefona çevirmiş · an bölünmüş",
     ("Sahne: birinci referanstaki büro, gece. Öndeki masada eski, siyah, kablolu bir masa telefonu çalıyor (ahizenin çevresinde hafif "
      "titreşim çizgileri; tuşlarda rakam okunmuyor). Kadrajda TAM 2 kişi: Peri ve Cengo."),
     [("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + ") ve Cengo (dördüncü referans: " + C_C + "): birbirine çok yakın "
       "duruyorlar; az önce söylenecek bir şey yarım kalmış; ikisi de başını aynı anda telefona çevirmiş, şaşkın ve biraz da "
       "gülümseyen yüzlerle.")],
     [GECE, PERI_CEK, KALABALIK])
kare(124, "K191", "Kapanış (bağ yüksek): Cengo kapıyı açık bırakmış; Peri telefonda; Gizem arkada", [BURO_GECE, PM_BAS, PM_KART, C_CEKET, GIZEM],
     "TAM 3 kişi · Peri masada, ahizeyi kulağına tutmuş, konuşuyor · Cengo kapıda, kapıyı AÇIK bırakıp gülümseyerek çıkıyor · Gizem arkada, çay ocağının yanında · Peri en gösterişli",
     "Sahne: birinci referanstaki büro, gece. Kadrajda TAM 3 kişi: Peri, Cengo, Gizem.",
     [("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): masasında, siyah masa telefonunun ahizesini kulağına tutmuş, "
       "konuşuyor; gözleri kapıdaki Cengo'da, dudaklarında belli belirsiz bir gülümseme."),
      ("Cengo (dördüncü referans: " + C_C + "): kapının eşiğinde, kapıyı ardına kadar açık bırakmış, omzunun üstünden Peri'ye dönüp "
       "gülümsüyor."),
      ("Gizem (beşinci referans: " + G_K + "): arkada, elinde bir çay bardağı, ikisine bakıp bilmiş bir gülümsemeyle.")],
     [GECE, PERI_CEK, PERI_EN, KALABALIK])
kare(125, "K192", "Karar (polis): polis ağı kesiyor, Nihat ve Ozan götürülüyor; mühürlü valiz", [YALI, SERIT2],
     "TAM 4 kişi · iki POLİS (yüzleri gölgede, üniforma yazısız) ağı kesip Nihat'ı ve Tarkan'ı çıkarıyor · iskelede kırmızı-beyaz şeritle MÜHÜRLENMİŞ deri valiz · mavi-kırmızı polis ışığı yansıması",
     ("Sahne: birinci referanstaki iskele, gece; uzaktan bir polis arabasının mavi-kırmızı ışıkları suya ve yalının duvarına "
      "yansıyor. Kadrajda TAM 4 kişi: iki polis memuru, Nihat, Tarkan. SONUÇ anı: polis gelmiş."),
     [("İki polis memuru (koyu lacivert üniforma, şapka; üniformada yazı, rozet harfi, numara YOK; yüzleri gölgede, ikinci plan): biri "
       "makasla ağı kesiyor, öbürü Nihat'ı kolundan tutup kaldırıyor."),
      ("İkinci referans bir şerittir (soldan Nihat, Tarkan). Nihat (" + NIHAT_K + ") ve Tarkan (" + TARKAN_K + "): reçel lekeli, "
       "başları önde, götürülüyorlar."),
      "Ön planda iskelenin tahtalarında, kırmızı-beyaz çizgili bantla çapraz MÜHÜRLENMİŞ kahverengi deri valiz (bantta yazı YOK)."],
     [GECE, KALABALIK])
kare(126, "K193", "Karar (anlaş): tekne karanlığa çıkıyor; Peri'nin elinde ağır çanta", [YALI, PM_BAS, PM_KART],
     "TAM 1 kişi (ve uzakta teknede iki küçük karaltı) · tekne iskeleden ayrılıp karanlık Boğaz'a çıkıyor · Peri iskelenin ucunda, elinde AĞIR bir deri çanta, tekneye bakıyor",
     ("Sahne: birinci referanstaki iskelenin ucu, gece; tekne iskeleden ayrılmış, ışıkları sönük, karanlık Boğaz'a uzaklaşıyor; "
      "teknede iki küçük, seçilmeyen karaltı. Kadrajda TAM 1 kişi yakın planda: Peri. SONUÇ anı."),
     [("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): iskelenin ucunda ayakta, bir elinde ağır, dolu, kahverengi deri bir "
       "çanta (çantanın ağırlığıyla omzu düşmüş); uzaklaşan tekneye bakıyor; yüzü karışık: rahatlamış ama mahcup.")],
     [GECE, PERI_CEK, KALABALIK])
kare(127, "K194", "Karar (oyun): Peri ağdan uzanan Nihat'ın elini sıkıyor, telefon kulağında", [YALI, PM_BAS, PM_KART, NIHAT],
     "TAM 2 kişi · Nihat ağın içinden elini uzatmış · Peri bir eliyle onun elini SIKIYOR, öbür elinde telefon KULAĞINDA · Peri'nin yüzünde soğuk bir gülümseme · kucağında çanta",
     "Sahne: birinci referanstaki iskele, gece; ağın yanı. Kadrajda TAM 2 kişi: Peri ve Nihat. SONUÇ anı.",
     [("Nihat (dördüncü referans: " + NIHAT_K + "; reçel lekeli): ağın içinden, gözlerinin arasından elini uzatmış, memnun, "
       "anlaşma yapmış bir gülümsemeyle."),
      ("Peri (ikinci referansın yüzü; kart üçüncü: " + P_SON + "): bir eliyle Nihat'ın elini sıkıyor; öbür elindeki telefonu "
       "kulağına tutmuş (ekranı görünmüyor); yüzünde soğuk, oyunbaz bir gülümseme; koltuğunun altında ağır bir deri çanta.")],
     [GECE, PERI_CEK, KALABALIK])
kare(128, "K195", "Karar (Ozan'ı bırak): Ozan yokuşa koşuyor, Nihat ağda", [YALI, SERIT2],
     "TAM 2 kişi · Tarkan (Ozan) yalının yanındaki YOKUŞA doğru koşuyor, arkasına bakmadan · Nihat ağın içinde kalmış, ona bakıyor",
     ("Sahne: birinci referanstaki yalının önü ve iskele, gece; yalının yanından yukarı çıkan dar, taş bir yokuş. Kadrajda TAM 2 kişi: "
      "Tarkan ve Nihat. SONUÇ anı."),
     [("İkinci referans bir şerittir (soldan Nihat, Tarkan). Tarkan (" + TARKAN_K + "; reçel lekeli): yokuşa doğru koşuyor, uzaklaşıyor, "
       "sırtı bize dönük ama başı hafif yana, yüzü üç çeyrek görünüyor. Nihat (" + NIHAT_K + "): iskelede, ağın içinde tek başına "
       "oturuyor, Tarkan'ın arkasından öfkeyle bakıyor.")],
     [GECE, KALABALIK])
kare(129, "K196", "Giriş: büro kapısı — Cengo eşikte, kendi ceketiyle, elinde iki simit (yalnız)", [BURO_G, C_CEKET],
     "TAM 1 kişi · Cengo büro kapısının eşiğinde · süet ceket · elinde iki SİMİT · sabah",
     "Sahne: birinci referanstaki büronun kapısı AÇIK, sabah; eşikte bir adam. Kadrajda TAM 1 kişi.",
     [("Cengo (ikinci referansın yüzü ve kıyafeti: " + C_C + "): eşikte duruyor, bir elinde iki yuvarlak, susamlı SİMİT, öbür eli "
       "kapının kolunda; keyifli, hınzır bir yarım gülümseme.")],
     [KALABALIK])
kare(130, "K197", "Konuşma: Gizem çay ocağından tanıtım çantasıyla geliyor (önlük, kep, gözlük görünüyor)", [BURO_G, GIZEM],
     "TAM 1 kişi · Gizem elinde açık bir bez TANITIM ÇANTASI · çantanın ağzından beyaz önlük, beyaz kep ve iri siyah gözlük görünüyor · çantada yazı/logo YOK",
     "Sahne: birinci referanstaki büro, sabah; çay ocağının kapısından gelen bir kız. Kadrajda TAM 1 kişi: Gizem.",
     [("Gizem (ikinci referans: " + G_K + "): iki eliyle önünde ağzı açık, krem rengi bez bir tanıtım çantası tutuyor (çantada yazı, "
       "logo YOK); çantanın ağzından katlanmış beyaz bir şef önlüğü, küçük beyaz bir aşçı kepi ve iri siyah çerçeveli bir gözlük "
       "görünüyor. Yüzünde muzip, fikir bulmuş bir gülümseme.")],
     [KALABALIK])
kare(131, "K198", "Kapanış: büro, gece — askıda şoför kasketi, Cengo kendi ceketiyle", [BURO_GECE, C_CEKET],
     "TAM 1 kişi · askılıkta asılı LACİVERT şoför KASKETİ · Cengo süet ceketini giymiş, yakasını düzeltiyor · gece",
     ("Sahne: birinci referanstaki büro, gece; ayaklı askılıkta lacivert, siperli bir şoför kasketi asılı. Kadrajda TAM 1 kişi: Cengo."),
     [("Cengo (ikinci referansın yüzü ve kıyafeti: " + C_C + "): askılığın yanında, kendi süet ceketini yeni giymiş, yakasını "
       "düzeltiyor; askıdaki kaskete göz ucuyla bakıp gülümsüyor.")],
     [GECE, KALABALIK])
kare(132, "K199", "Kulis: Peri aynanın önünde telefonla konuşuyor (yalnız)", [KULIS, PK_BAS, PK_KART],
     "TAM 1 kişi · Peri ampullü aynanın önünde, aşçı kılığı · telefonu kulağında (ekranı görünmüyor) · aynada yansıması · yalnız",
     "Sahne: birinci referanstaki stüdyo kulisi; ampullü ayna. Kadrajda TAM 1 kişi: Peri (ve aynadaki yansıması).",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + "): makyaj masasına kalçasını dayamış, "
       "telefonu kulağına tutmuş, dinliyor; kaşları meraklı, dudaklarında küçük bir gülümseme. Aynada onun yansıması.")],
     [PERI_CEK, KALABALIK])
kare(133, "K200", "Yüzleşme açılışı: Peri paravanın arkasından önlükle çıkıyor; herkes ona dönmüş",
     [ATOLYE, P_BAS, PK_KART, C_SOFOR, SERIT4],
     "TAM 6 kişi · Peri paravanın önünde, önlükle, KEP ve GÖZLÜK YOK, saç açık, kendinden emin · Bahar, Nevzat, Fikret, Tarkan ve Cengo ONA dönmüş · Peri en gösterişli",
     ("Sahne: birinci referanstaki atölye, akşam; köşedeki paravanın önü. Kadrajda TAM 6 kişi. Kişiler daha küçük ve kadrajda daha "
      "yukarıda; en öndekinin ayakkabısı dahil herkesin ayakları kadrajın üst %80'inin içinde."),
     [("Peri (ikinci referansın yüzü; kıyafet kartın önlüklü hâli: " + P_ONLUK + "): paravanın arkasından az önce çıkmış, önünde "
       "dimdik, bir eli belinde, başı yukarıda; kraliçe gibi kendinden emin."),
      ("Beşinci referans bir şerittir (soldan Bahar, Nevzat, Fikret, Tarkan). Bahar (" + BAHAR_K + "), Nevzat (" + NEVZAT_K + "), "
       "Fikret (" + FIKRET_K + ") ve Tarkan (" + TARKAN_K + "): odanın öbür tarafında, hepsi Peri'ye dönmüş, şaşkın; Tarkan'ın "
       "gülümsemesi donmuş."),
      ("Cengo (dördüncü referans: " + C_S + "): kapının yanında, kasketini hafifçe kaldırmış, Peri'ye gururla bakıyor.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(134, "K201", "Konuşma: Cengo çıkarken paravanın üstündeki kırmızı mantoyu koluna alıyor; Peri ile Gizem görmüyor",
     [BURO_G, PK_BAS, PK_KART, C_CEKET, GIZEM],
     "TAM 3 kişi · ön planda Cengo, paravanın üstündeki KIRMIZI mantoyu sessizce koluna alıyor, kapıya gidiyor · arkada Peri (kılık) ve Gizem tanıtım çantasına eğilmiş, görmüyor",
     ("Sahne: birinci referanstaki büro, sabah; köşede katlanır soyunma paravanı, üstüne kırmızı bir manto asılı. Kadrajda TAM 3 kişi: "
      "Cengo, Peri, Gizem."),
     [("Cengo (dördüncü referans: " + C_C + "): ön planda, paravanın yanından geçerken üstündeki kırmızı yün mantoyu sessizce "
       "koluna almış, kapıya doğru yürüyor; omzunun üstünden geriye, sırrını saklayan bir gülümsemeyle bakıyor."),
      ("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KILIK + ") ve Gizem (beşinci referans: " + G_K
       + "): arkada, masanın başında, açık tanıtım çantasının içine eğilmiş, bir şey arıyorlar; Cengo'yu görmüyorlar.")],
     [PERI_CEK, KALABALIK])
