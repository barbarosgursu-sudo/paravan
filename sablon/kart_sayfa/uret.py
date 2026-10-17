# Paylaş kartı görsellerinin iş sayfası (17 Ekim 2026). Vaka başına bir afiş görseli: o vakanın kişileri
# ve mekânı, hiçbir ipucu vermeden (Nurcan). Sayfa Vaka 2'nin iş sayfası şablonundan üretilir.
# Kullanım: python3 uret.py  → kart_gorseller.html (yayın: Artifact, ref/ ile birlikte)
import json, os
STIL = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, "
        "ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. "
        "Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
ORAN = ("Görselin oranı dikey 9:16 (1080×1920). Üretici 9:16 veremiyorsa dikey 2:3 (1024×1536) olsun: "
        "sol ve sağ kenardan kırpılacak, bu yüzden kimse kenara değmesin; bütün kişiler ortadaki %80'lik şeritte toplu.")
DUZEN = ("Afiş düzeni (ÖNEMLİ): görselin ALT %40'ının üstüne bir yazı kutusu binecek. Bütün yüzler ve başlar "
         "görselin ÜST %55'inde. Alt kısımda yalnız gövdeler ve zemin; orada önemli hiçbir şey yok.")
ESIT = ("Arka sıradaki dört kişi AYNI boyda, AYNI ışıkta, Peri ile Cengo'dan AYNI uzaklıkta, eşit aralıklı; hiçbiri ortada "
        "tek başına öne çıkmıyor, hiçbiri gölgede kalmıyor. Bu bir dizi afişi: herkes 'kadroda', kimse 'suçlu' değil.")

def j(*p): return "\n\n".join(x for x in p if x)
def dosya(f, ne): return {"dosya": f, "ne": ne}
G = []

G.append(dict(no=1, ad="Vaka 1 · Kayıp Tekne — kart görseli", anahtar="kart.V1", sohbet="Yeni sohbet · Vaka 1 kartı",
  refs=[dosya("KART1-1_iskele.jpg", "mekân: Karaköy iskelesi"), dosya("KART1-2_peri.jpg", "Peri, kırmızı manto"),
        dosya("KART1-3_cengo.jpg", "Cengo"), dosya("KART1-4_konuklar.jpg", "soldan sağa: Rıza, Kemal, Tuba, Serkan")],
  metin=j(STIL,
    "Bir oyunun paylaşım kartı için dikey afiş görseli: bir dizi afişi gibi toplu kadro. Kişiler eklediğim referanslardakilerin AYNISI "
    "(yüz, saç, yaş, beden); mekân birinci referanstakinin AYNISI. Kadrajda yalnız sayılan kişiler ve nesneler var.",
    "Mekân (1. referans): Karaköy iskelesi, gün batımı. Taş rıhtım, suda bağlı küçük ahşap balıkçı tekneleri (mavi, yeşil, kırmızı; "
    "ahşabı eski, boyaları solmuş), arkada Boğaz, tarihi yarımadanın siluetinde camiler ve bir vapur. Rıhtımda iki teknenin arasında "
    "BOŞ bir bağlama yeri: yalnız su ve boş bir demir baba, babada halat yok.",
    "Kadrajda TAM ALTI kişi (altı; beş değil, yedi değil):",
    "ÖN PLANDA ORTADA Peri (2. referans): aynı kızıl saç topuzu, kırmızı manto belden kuşakla bağlı, altında krem saten bluz, "
    "kırmızı stiletto. TAM İKİ KOL, İKİ EL: sol eli belinde, sağ eli mantonun yakasında. Kendinden emin, hafif gülümseme; "
    "gövdesi kameraya yarım dönük, burnu kadrajın soluna bakıyor.",
    "Peri'nin hemen sağ omzunun arkasında Cengo (3. referans): aynı dağınık siyah saç, kahverengi ceket, açık yakalı krem gömlek, "
    "kot pantolon, bileğinde boncuk bileklik. TAM İKİ KOL, İKİ EL: bir eli cebinde, öbürü yanda. Hınzır yarım gülümseme.",
    "ARKADA, Peri ve Cengo'dan bir adım geride, başları onlardan biraz yukarıda kalacak biçimde tek sıra, soldan sağa: "
    "Kemal, Rıza Reis, Tuba, Serkan (4. referanstaki kişiler; referanstaki sıra soldan sağa Rıza, Kemal, Tuba, Serkan).",
    "- Rıza Reis: yetmişlerinde, kır sakallı, lacivert kasket, lacivert örgü yelek, açık mavi gömlek. Elleri önünde kavuşmuş. "
    "İfadesi: endişeli, yorgun.\n"
    "- Kemal: ellilerinde, iri yapılı balıkçı, bıyıksız, kara-kır sakal; lacivert tişört. ÖNLÜK YOK, ELDİVEN YOK, FIRÇA YOK; kolları göğsünde kavuşmuş, "
    "elleri ve kolları temiz.\n"
    "- Tuba: dağınık topuz koyu saç; haki yelek, lacivert gömlek. Elleri boş, kolları yanında. Telefon yok.\n"
    "- Serkan: otuzlarında, koyu saç, kirli sakal; koyu yeşil kapüşonlu ceket, gri tişört, koyu kot. İki eli de ceplerinde "
    "(ensesinde değil).",
    "Kemal, Tuba ve Serkan'ın ifadesi AYNI: ciddi, temkinli, kameraya bakıyor. Hiçbiri gülmüyor, hiçbiri gözünü kaçırmıyor, "
    "hiçbiri tedirgin, suçlu ya da korkmuş görünmüyor.",
    ESIT,
    "Kadrajda OLMAYACAKLAR: beyaz boya, boya fırçası, boya lekesi; beyaz tekne, yat, lüks tekne; kamera, ışık, klaket, kulaklık; "
    "yaka kartı ya da boyna asılı kart; anahtar; kilit; zincir; telefon; simit; balık kasası; para. Kimse koşmuyor.",
    "Işık: sıcak gün batımı ışığı herkesin üstünde eşit; en parlak yer Peri.", DUZEN,
    "Peri en üst seviyede zarif ve çekici. Çıplaklık yok.", YAZI, ORAN),
  bak="tam altı kişi · Kemal'de boya/önlük/fırça yok · Serkan'ın elleri cepte · arka sıradaki üçü aynı ifadede · "
      "zincir, kilit, beyaz tekne yok · yüzler üst yarıda · yazı yok"))

G.append(dict(no=2, ad="Vaka 2 · Gelinlik — kart görseli", anahtar="kart.V2", sohbet="Yeni sohbet · Vaka 2 kartı",
  refs=[dosya("KART2-1_atolye.jpg", "mekân: Lâl'in atölyesi"), dosya("KART2-2_peri.jpg", "Peri, zümrüt tayyör"),
        dosya("KART2-3_cengo.jpg", "Cengo, lacivert takım"), dosya("KART2-4_konuklar.jpg", "soldan sağa: Müjgan, Lâl, Tolga, Defne")],
  metin=j(STIL,
    "Bir oyunun paylaşım kartı için dikey afiş görseli: bir dizi afişi gibi toplu kadro. Kişiler eklediğim referanslardakilerin AYNISI "
    "(yüz, saç, yaş, beden, kıyafet); mekân birinci referanstakinin AYNISI. Kadrajda yalnız sayılan kişiler ve nesneler var.",
    "Mekân (1. referans): Lâl Hanım'ın Teşvikiye'deki moda atölyesi, gün ışığı. Yüksek tavan, krem duvarlar, alçı süsler, yaldız "
    "çerçeveli boy aynası, yazısız rulo kumaş rafları, kemerli büyük pencere; pencereden İstanbul: eski taş apartmanlar, ağaçlar, "
    "uzakta bir minare. Arkada İKİ terzi mankeni, ikisi de BOŞ: üstlerinde hiçbir giysi yok, örtü yok.",
    "Kadrajda TAM ALTI kişi (altı; beş değil, yedi değil):",
    "ÖN PLANDA ORTADA Peri (2. referans): aynı kızıl saç, ensede sıkı topuz, tek inci küpe; zümrüt yeşili tayyör (derin V yakalı "
    "kısa ceket, altında bluz yok; dizin üstünde dar kalem etek), ince ten rengi KÜLOTLU çorap, kırmızı stiletto. TAM İKİ KOL, "
    "İKİ EL: sol eli belinde, sağ eli ceketin yakasında. Kendinden emin, hafif gülümseme; burnu kadrajın soluna bakıyor.",
    "Peri'nin hemen sağ omzunun arkasında Cengo (3. referans): aynı dağınık siyah saç; lacivert takım (kolları bileklerinden kısa), "
    "beyaz gömlek, bordo kravat. TAM İKİ KOL, İKİ EL: bir eli cebinde, öbürü kravatının düğümünde. Hınzır yarım gülümseme.",
    "ARKADA, Peri ve Cengo'dan bir adım geride, başları onlardan biraz yukarıda kalacak biçimde tek sıra, soldan sağa: "
    "Lâl Hanım, Defne, Müjgan Ersoy, Tolga (4. referanstaki kişiler; referanstaki sıra soldan sağa Müjgan, Lâl, Tolga, Defne).",
    "- Müjgan Ersoy: ellilerinin sonu, dalgalı platin saç, başının üstünde güneş gözlüğü; krem saten, kısa, kolsuz, altın kemerli "
    "elbise (gelinliğe benzemiyor). Kolları göğsünde kavuşmuş. İfadesi: kibirli ve sabırsız.\n"
    "- Lâl Hanım: altmışlarında, kısa gümüş alagarson saç, kırmızı ruj, siyah çerçeveli gözlük boynunda zincirle; siyah sarmal "
    "elbise, siyah file çorap; boynunda küçük gümüş makas kolye, bileğinde kırmızı iğnelik. Elleri belinde.\n"
    "- Defne: yirmilerinin sonu, uzun dalgalı koyu kestane saç; belde düğümlü beyaz ipek gömlek, bej yüksek bel pantolon. "
    "Elleri boş, kolları yanında; elinde bardak yok.\n"
    "- Tolga: kırklarında, yanları kısa jöleli saç; lacivert yelek, açık mavi gömlek, gri pantolon, tek kulağında kulaklık. "
    "Elleri boş; tablet yok.",
    "Lâl, Defne ve Tolga'nın ifadesi AYNI: ciddi, temkinli, kameraya bakıyor. Hiçbiri gülümsemiyor, hiçbiri rahat ya da mutlu "
    "değil, hiçbiri gözünü kaçırmıyor, hiçbiri suçlu ya da korkmuş görünmüyor. (Defne de gülümsemiyor.)",
    ESIT,
    "Kadrajda OLMAYACAKLAR: gelinlik, beyaz dantel, duvak; elbise kılıfı ya da siyah giysi torbası; beyaz örtü, çarşaf; "
    "makas (Lâl'in kolyesindeki küçük gümüş makas dışında); anahtar; açık kapı; taksi; düğün pastası; nedime; balon; telefon; "
    "tablet; kâğıt, fatura. Kimse koşmuyor.",
    "Işık: pencereden gelen sıcak gün ışığı herkesin üstünde eşit; en parlak yer Peri.", DUZEN,
    "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde, duruşu en kendinden emin olan o; öbür kadınlar şık "
    "ve çekici ama Peri'yi gölgede bırakmıyor. Çıplaklık yok.", YAZI, ORAN),
  bak="tam altı kişi · iki manken de boş, örtü/kılıf yok · Defne gülümsemiyor · arka sıradaki üçü aynı ifadede · "
      "Müjgan'ın elbisesi gelinliğe benzemiyor · yüzler üst yarıda · yazı yok"))

yol = os.path.dirname(os.path.abspath(__file__))
gruplar = [{"ad": g["sohbet"], "gorseller": [g]} for g in G]
h = open(os.path.join(yol, "..", "vakalar", "vaka2_sayfa", "sablon.html"), encoding="utf-8").read()
for eski, yeni in [
    ("/*VERI*/", "const GRUPLAR=" + json.dumps(gruplar, ensure_ascii=False) + ";"),
    ('"vaka2_gorsel_yapildi"', '"kart_gorsel_yapildi"'),
    ('" / 59"', '" / ' + str(len(G)) + '"'), ("n / 59", "n / " + str(len(G))), ("0 / 59", "0 / " + str(len(G))),
    ("<title>Vaka 2 Görselleri</title>", "<title>Paylaş Kartı Görselleri</title>"),
    ("<h1>Vaka 2 Görselleri</h1>", "<h1>Paylaş Kartı Görselleri</h1>"),
    ("Gelinlik · 59 görsel · ChatGPT ile sırayla", "Vaka başına bir afiş · ipucu vermeden · her biri ayrı sohbet"),
    ('"G" + v.no', '"K" + v.no')]:
    assert eski in h, eski
    h = h.replace(eski, yeni)
open(os.path.join(yol, "kart_gorseller.html"), "w", encoding="utf-8").write(h)
print(len(G), "görsel → kart_gorseller.html")
