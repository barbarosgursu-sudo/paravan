# V7 Parti 3b istemleri (detaylar D22–D27 → G63–G68, kareler K124–K154 → G69–G99) — tek kaynaktan; kalıp V6
# uret_istem_parti3.py (ISTEM-9, ISTEM-15, ISTEM-16, ISTEM-19, ISTEM-51). 25 Kasım 2026, Oğuz Bey'in bilgisayarı.
# Dekolteli resim referans verilmez (ISTEM-16): Peri yalnız baş kırpığı + kıyafet kartı. Çalıştır: py -I uret_istem_parti3b.py
import re, os, sys
V7 = os.path.dirname(os.path.abspath(__file__))
SR = open(os.path.join(V7, "satir_resim.md"), encoding="utf-8").read()


def satirlar(kod):
    m = re.search(r"^### KARE " + re.escape(kod) + r" \(\d+ satır\)\n(.*?)(?=^### |\Z)", SR, re.S | re.M)
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
SIGARA_YOK = "Sahnede yalnız yazılan nesneler var; başka eşya eklenmiyor."
SATIRBAS = ("`arac_satir_resim.js` (25 Kasım 2026, V7 beş yol). Codex bu bölümü istem metnine katmaz.")

# ---------------------------------------------------------------- referanslar
BURO_G = ("onayli/G11.png", "büro, gündüz (A58; Vaka 7'nin onaylı arka planı)")
BURO_GECE = ("onayli/G12.png", "büro, gece (A59; onaylı)")
DEPO = ("onayli/G13.png", "müzayede evinin bodrum deposu (A50; onaylı)")
LOKANTA = ("onayli/G14.png", "Teşvikiye, eski lokanta (A51; onaylı)")
AVLU = ("onayli/G17.png", "müzayede evinin arka avlusu (A54; onaylı)")
PAZAR = ("onayli/G18.png", "Feriköy Antika Pazarı (A55; onaylı)")
CERCEVE = ("onayli/G19.png", "çerçeve odası (A56; onaylı)")
SALON = ("onayli/G20.png", "müzayede salonu (A57; onaylı)")
PK_BAS = ("referanslar/peri_kadife7_bas.png", "Peri'nin başı (G21'in baş kırpığı; G21 dekolteli, bütün hâli verilmez)")
PK_KART = ("onayli/G1.png", "Peri'nin kıyafet kartı (kadife): YALNIZ kıyafetin kesimi, boyu ve rengi")
PG_BAS = ("referanslar/peri_gala_bas.png", "Peri'nin başı (G22'nin baş kırpığı; G22 dekolteli, bütün hâli verilmez)")
PG_KART = ("onayli/G2.png", "Peri'nin kıyafet kartı (gece mavisi saten): YALNIZ kıyafetin kesimi, boyu ve rengi")
CENGO = ("onayli/G23.png", "Cengo, kiralık smokin temel figürü (onaylı; yüz, saç, smokin, bileklik)")
C_KART = ("onayli/G3.png", "Cengo'nun kıyafet kartı (smokin): YALNIZ kıyafetin kesimi, boyu ve rengi")
GIZEM = ("../v6/onayli/G23.png", "Gizem, triko temel figürü (Vaka 6, onaylı; elindeki telefonu ALMA)")
SUHEYLA = ("onayli/G24.png", "Süheyla Hanım'ın kıyafet kartı (yüz ve kıyafet)")
NESRIN = ("onayli/G25.png", "Nesrin Hanım'ın kıyafet kartı (yüz ve kıyafet)")
SUKRU = ("onayli/G26.png", "Şükrü Bey'in kıyafet kartı (yüz ve kıyafet)")
KAAN = ("onayli/G28.png", "Kaan'ın kıyafet kartı (yüz ve kıyafet)")
NECMI = ("onayli/G30.png", "Necmi'nin kıyafet kartı (yüz ve kıyafet)")
SERIT_SVN = ("referanslar/serit_sukru_vedat_nesrin.jpg", "şerit: soldan Şükrü Bey, Vedat Bey, Nesrin Hanım (kıyafet kartları)")
SERIT_SK = ("referanslar/serit_suheyla_kaan.jpg", "şerit: soldan Süheyla Hanım, Kaan (kıyafet kartları)")

# ---------------------------------------------------------------- kişi cümleleri (kart nasılsa öyle; sabitler yeniden yazılır — ISTEM-20)
P_KADIFE = ("bordo kadife dar kalem etek, eteğin içinde derin V yakalı krem ince triko, dekoltesi belirgin; gevşek topuz, iki yana "
            "birer tutam; küçük altın küpeler; kırmızı stiletto")
P_GALA = ("gece mavisi, ona dar ve kısa saten elbise, ince askılar, derin V yaka, dekoltesi belirgin, yüksek yırtmaç; dirseği geçen "
          "siyah SATEN eldivenler; ensede topuz, iki yana ince tutam; tek taş pırlanta kolye; siyah stiletto")
P_ALTIN = ("aynı gece mavisi saten elbise, ama baştan aşağı ALTIN yaldız tozu ve parlak vernikle kaplı: elbise, kolları, omuzları, "
           "yüzü ve bacakları altın; dirseği geçen eldivenleri altın; topuzu dağılmış, saçında da yaldız")
P_TEMIZ = ("aynı gece mavisi saten elbise (derin V yaka, dekoltesi belirgin), yüzeyi ince altın yaldızla PIRIL PIRIL; yüzü ve kolları "
           "temiz; ELDİVEN YOK; topuzu biraz dağılmış; tek taş pırlanta kolye")
CENGO_K = ("bir beden büyük kiralık siyah smokin, beyaz gömlek, YAMUK siyah papyon; göğüs cebinden ince bir telin ucu; sol bileğinde "
           "renkli boncuklu bileklik; koyu, dağınık saç")


def yaz(n, kod, baslik, tur, refs, kontrol, govde, satir=None):
    out = [f"# G{n} — {baslik}", "", f"- tür: {tur} · anahtar: `{kod}`",
           "- önce hazır olmalı: referanslardaki onaylı resimler", "",
           "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    out += ["", "## Satırlar", ""]
    if satir:
        out += ["`vaka7_diyalog.md` (görselsiz turun yolunda yok; satır diyalogdan). Codex bu bölümü istem metnine katmaz.", ""] + satir
    else:
        out += [SATIRBAS, "", satirlar(kod)]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(os.path.join(V7, "prompts", f"G{n}.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(out))
    print("yazıldı", n, kod)


def kare(n, kod, baslik, refs, kontrol, sahne, kisiler, ekler=(), satir=None, tur="ara kare"):
    kartli = any("kart" in d for _, d in refs)
    govde = [TARZ, KARTLAR if kartli else "", sahne] + list(kisiler) + list(ekler) + [SIGARA_YOK, "Çıplaklık yok.", YAZI, ORAN]
    yaz(n, kod, baslik, tur, refs, kontrol, govde, satir)


def detay(n, kod, baslik, refs, kontrol, sahne, ekler=()):
    kartli = any("kart" in d for _, d in refs)
    govde = [TARZ, KARTLAR if kartli else "", sahne] + list(ekler) + [SIGARA_YOK, "Çıplaklık yok.", YAZI, ORAN]
    yaz(n, kod, baslik, "detay", refs, kontrol, govde)


# ================================================================ DETAYLAR
detay(63, "D22", "Detay: Süheyla'nın eli masadaki açık katalogda", [BURO_G, SUHEYLA],
      "YALNIZ bir el ve kol (yüz yok) · kalın katalog açık · sayfada yazı OKUNMUYOR · kehribar yüzük · gri ekose ceket kolu",
      ("Detay: birinci referanstaki büronun ahşap masasının üstü, yakından, yukarıdan hafif çapraz. Masada kalın, ağır, parlak "
       "kâğıtlı bir müzayede kataloğu AÇIK duruyor; sayfalarda küçük tablo fotoğrafları ve okunmayan, bulanık gri satırlar (harf "
       "seçilmez). Kataloğun üstünde bir kadının dolgun eli duruyor: gri ekose yün ceket kolu, krem kazak manşeti, parmağında "
       "iri, oval, bal rengi kehribar yüzük (ikinci referanstaki kadının eli). Yüz kadrajda YOK. Pazar sabahı, sıcak gün ışığı."))
detay(64, "D23", "Detay: katalog sayfası — kadife yastıkta gümüş taç", [BURO_G],
      "sayfada TEK fotoğraf: kadife yastıkta kristal taşlı gümüş taç · fotoğrafın altındaki yazı OKUNMUYOR · el yok",
      ("Detay: açık bir müzayede kataloğunun tek sayfası, yukarıdan, yakından; sayfa kadrajı dolduruyor, kenarında masanın sıcak "
       "ahşabı. Sayfanın ortasında parlak bir fotoğraf: koyu kırmızı kadife bir yastığın üstünde, ince işçilikli, kristal taşlı "
       "GÜMÜŞ bir güzellik yarışması tacı; taşlar ışıkta parlıyor. Fotoğrafın altında birkaç satır bulanık gri çizgi (harf, rakam "
       "seçilmez). Sayfada başka fotoğraf yok."),
      ["Fotoğraftaki taç gerçekçi ama zarif; kraliyet tacı değil, yarışma tacı."])
detay(65, "D24", "Detay: mor UV ışığında tablo, her yeri düz parlıyor", [DEPO, KAAN],
      "mor UV ışığı · tablonun her yeri AYNI düz parlıyor (leke yok) · Kaan'ın eli ve lambası · yüz yok ya da kenarda",
      ("Detay: birinci referanstaki depoda, şövaledeki yaldız çerçeveli Boğaz manzarası tablosu yakından. Oda karanlık; tek ışık, "
       "bir elin tuttuğu küçük el lambasından gelen MOR (ultraviyole) ışık. Tablonun yüzeyi bu mor ışıkta her yerinde AYNI, düz, "
       "eşit bir parıltıyla parlıyor; lekesiz, yamasız. Lambayı tutan genç adamın eli ve lacivert takım kolu kadrajın kenarında "
       "(ikinci referanstaki Kaan'ın kolu); yüzü kadrajda yok."),
      ["Işık loş ve mor; sıcak gün ışığı YOK."])
detay(66, "D25", "Detay: UV ışığında tablonun köşesi — ince onarım izi", [DEPO, KAAN],
      "tablonun SAĞ ALT köşesi yakından · mor ışıkta ince, kısa, farklı parlayan bir çizgi (onarım izi) · yazı/imza YOK",
      ("Detay: birinci referanstaki tablonun SAĞ ALT köşesi çok yakından: yaldız çerçevenin köşesi ve boyalı tuval. Mor UV ışığı "
       "köşeye tutulmuş; tuvalin üstünde, köşeye yakın, ince, kısa, hafif kıvrık bir çizgi ötekilerden farklı, daha koyu parlıyor: "
       "bir yırtığın onarım izi. Lambayı tutan elin parmak uçları kadrajın kenarında (ikinci referanstaki Kaan'ın eli). Köşede "
       "imza, rakam ya da yazı YOK."),
      ["Işık loş ve mor."])
detay(67, "D26", "Detay: Peri'nin eldivenli elinde tacın kartpostalı, arkasında kurşun kalemle '100'", [PAZAR, PG_KART],
      "eldiven siyah SATEN · kartpostalın ARKASI görünüyor · köşede kurşun kalemle YALNIZ '100' · başka yazı/pul YOK",
      ("Detay: birinci referanstaki açık hava antika pazarının tezgâhının üstü, yakından. Siyah SATEN, dirseği geçen eldivenli "
       "zarif bir kadın eli (ikinci referanstaki eldiven) eski, sararmış bir kartpostalı tutuyor; kartpostalın ARKA yüzü bize dönük: "
       "boş, eskimiş karton; yalnız sağ üst köşesinde kurşun kalemle küçük, el yazısıyla yazılmış bir sayı: 100. Kartpostalın arka "
       "yüzünde başka yazı, adres, pul YOK. Yüz kadrajda yok. Arkada bulanık tezgâh, öğleden sonra ışığı."),
      ["Bu resimdeki TEK yazı kartpostalın köşesindeki '100' sayısıdır; başka hiçbir yazı, harf ya da rakam yok."])
detay(68, "D27", "Detay: masaya açılmış rulo tuval — Boğaz'da akşam, köşede ince onarım", [CERCEVE, DEPO],
      "rulo tuval masada AÇILMIŞ, kenarları kıvrık · Boğaz'da akşam, iki sandal, yalılar (köprü YOK) · köşede ince onarım izi · yaşlı boyalı parmaklar",
      ("Detay: birinci referanstaki çerçeve odasının ahşap iş masasının üstü, yukarıdan. Masaya yeni açılmış, kenarları hâlâ "
       "kıvrık, ÇERÇEVESİZ bir tuval: ikinci referanstaki depoda şövalede duran tablonun AYNISI — Boğaz'da bir akşam, sakin su, iki "
       "sandal, kıyıda ahşap yalılar, servili tepeler, turuncu gök (köprü, kule, modern yapı YOK). Tuvalin sağ alt köşesinde ince, "
       "kısa bir onarım izi seçiliyor. Tuvalin iki kenarını, parmak uçları boyalı, yaşlı bir kadının iki eli düzlüyor; yüz kadrajda "
       "yok. Sıcak lamba ışığı."),
      ["İkinci referans YALNIZ tablonun resmi içindir; oradaki depoyu ve şövaleyi alma."])

# ================================================================ KARELER
kare(69, "K124", "Giriş açılışı: Peri masada bulmaca çözüyor (yalnız)", [BURO_G, PK_BAS, PK_KART],
     "TAM 1 kişi · Peri masada oturuyor, elinde kalem, önünde katlı gazete (bulmaca ızgarası, harf okunmuyor) · kadife etek, krem triko · zemin büro",
     "Sahne: birinci referanstaki büro, pazar sabahı, pencereden sıcak gün ışığı. Kadrajda TAM 1 kişi: Peri, öndeki masada.",
     [("Peri (ikinci referansın yüzü; kıyafeti üçüncü referanstaki kart gibi: " + P_KADIFE + "): masasında oturuyor, bacak bacak "
       "üstüne atmış (kırmızı stiletto görünüyor); önünde katlanmış bir gazetenin bulmaca sayfası (kareler boş ya da okunmayan "
       "harflerle; yazı seçilmez), sağ elinde bir kalem, kalemin ucu dudağının kenarında, düşünceli; sol eli masada.")],
     [PERI_CEK, KALABALIK])
kare(70, "K125", "Giriş: Cengo eşikte, bol smokin, uykusuz (yalnız)", [BURO_G, CENGO, C_KART],
     "TAM 1 kişi · Cengo kapı eşiğinde · smokin BOL, papyon YAMUK · uykusuz gözler · bileklik sol bilekte · tel cepte",
     "Sahne: birinci referanstaki büronun kapısı AÇIK; kapı aralığında, eşikte bir adam. Kadrajda TAM 1 kişi.",
     [("Cengo (ikinci referansın yüzü ve smokini; üçüncü referans kart): " + CENGO_K + ". Eşikte duruyor, bir eli kapı kasasında; "
       "gözleri uykusuz, göz altları hafif koyu ama morluk yok; saçı darmadağın; yorgun, hınzır bir yarım gülümseme.")],
     [KALABALIK])
kare(71, "K126", "Giriş: Peri katalog sayfasına bakıp kalmış; Cengo ona bakıyor; Süheyla konuşuyor",
     [BURO_G, PK_BAS, PK_KART, CENGO, SUHEYLA],
     "TAM 3 kişi · Peri masada, açık kataloğa donmuş bakıyor · Cengo Peri'ye bakıyor · Süheyla konuşuyor, gözlüklü, topuzlu · katalogda yazı okunmuyor",
     "Sahne: birinci referanstaki büro, pazar sabahı. Kadrajda TAM 3 kişi. Masada açık, kalın bir müzayede kataloğu.",
     [("Önde, masada Peri (ikinci referansın yüzü; kıyafet üçüncü referanstaki kart: " + P_KADIFE + "): açık kataloğun bir "
       "sayfasına bakıp KALMIŞ; donmuş, dudakları hafif aralık, eli sayfanın kenarında."),
      ("Masanın yanında ayakta Cengo (dördüncü referans: " + CENGO_K + "): Peri'ye bakıyor, kaşları hafif çatık, meraklı."),
      ("Masanın karşısında, sırtı kapıya, Süheyla Hanım (beşinci referans: dolgun, yuvarlak yüzlü, kalın siyah gözlüklü, siyah "
       "saçı ensede sıkı topuz, kırmızı ruj, gri ekose ceket, krem boğazlı kazak): elini havada hafifçe sallayarak konuşuyor, "
       "Peri'nin donduğunu fark etmiyor.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(72, "K127", "Giriş: Süheyla Cengo'nun papyonuna uzanıyor, Cengo geri çekiliyor; Peri masada",
     [BURO_G, PK_BAS, PK_KART, CENGO, SUHEYLA],
     "TAM 3 kişi · Süheyla'nın eli papyona uzanmış · Cengo bir adım GERİ, gövdesi geriye kaçıyor · Peri masada, kaşı kalkık",
     "Sahne: birinci referanstaki büro, pazar sabahı. Kadrajda TAM 3 kişi.",
     [("Ortada Süheyla Hanım (beşinci referans: dolgun, kalın siyah gözlüklü, topuzlu, gri ekose ceketli): sağ elini Cengo'nun "
       "yamuk papyonuna uzatmış, düzeltmek istiyor; yüzünde iş bitirici bir kararlılık."),
      ("Sağda Cengo (dördüncü referans: " + CENGO_K + "): bir adım GERİ çekiliyor, gövdesi geriye kaçmış, iki eli yanında "
       "hafif kalkık, 'yok, kalsın' der gibi; yüzünde komik bir panik."),
      ("Solda, masasında oturan Peri (ikinci referansın yüzü; kıyafet üçüncü referanstaki kart: " + P_KADIFE + "): olanı "
       "izliyor, tek kaşı kalkık, dudağında alaycı yarım gülümseme.")],
     [PERI_CEK, PERI_EN, KALABALIK, KOMEDI])
kare(73, "K128", "Konuşma: Peri paravanın arkasından gece mavisi satenle çıkıyor; Cengo'nun ağzı açık; Gizem askıyla",
     [BURO_G, PG_BAS, PG_KART, CENGO, GIZEM],
     "TAM 3 kişi · Peri paravanın önünde, gece mavisi saten, eldiven, kolye · Cengo'nun AĞZI AÇIK · Gizem elinde BOŞ ahşap askı · çekicilik anı",
     ("Sahne: birinci referanstaki büro; arka köşedeki üç kanatlı ahşap PARAVAN. Kadrajda TAM 3 kişi. Bu, vakanın çekicilik "
      "anıdır: Peri paravanın arkasından yeni çıkmış."),
     [("Ortada, paravanın hemen önünde Peri (ikinci referansın yüzü; elbise üçüncü referanstaki kart: " + P_GALA + "): bir eli "
       "paravanın kenarında, öbürü belinde; kalçası hafif yana kırık; kendinden emin, hafif alaycı bir gülümseme. Elbise ona dar "
       "ve kısa; yırtmaç yukarıda."),
      ("Solda Cengo (dördüncü referans: " + CENGO_K + "): donmuş, AĞZI AÇIK kalmış, gözleri Peri'de."),
      ("Sağda Gizem (beşinci referansın yüzü ve kıyafeti: bal rengi kâküllü kıvırcık saç, çiller, krem triko, koyu kot; elinde "
       "telefon YOK): elinde boşalmış ahşap bir elbise askısı, Peri'yi süzüyor, yarı kıskanç yarı gururlu bir yüz.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(74, "K129", "Konuşma: Peri parmağıyla Cengo'nun çenesini kapatıyor", [BURO_G, PG_BAS, PG_KART, CENGO, C_KART],
     "TAM 2 kişi · Peri'nin TEK işaret parmağı Cengo'nun çenesinin altında · Cengo'nun ağzı kapanıyor · eldiven siyah saten",
     "Sahne: birinci referanstaki büro. Kadrajda TAM 2 kişi, yakın plan, belden yukarı.",
     [("Solda Peri (ikinci referansın yüzü; elbise üçüncü referanstaki kart: " + P_GALA + "): Cengo'ya çok yakın; siyah saten "
       "eldivenli SOL elinin işaret parmağıyla Cengo'nun çenesinin altına dokunup ağzını kapatıyor; öbür eli kendi belinde. "
       "Alaycı, çekici bir yarım gülümseme; tek kaşı kalkık."),
      ("Sağda Cengo (dördüncü referans; beşinci referans kart: " + CENGO_K + "): ağzı Peri'nin parmağıyla kapanıyor, gözleri "
       "hâlâ büyümüş; kolları yanında.")],
     [PERI_CEK, KALABALIK])
kare(75, "K130", "Lokanta: Şükrü Cengo'nun papyonuna uzanıyor, Cengo geri çekiliyor; Peri", [LOKANTA, PG_BAS, PG_KART, CENGO, SUKRU],
     "TAM 3 kişi · Şükrü oturmuş, eli papyona uzanmış · Cengo geri çekiliyor · Peri gülümsüyor · masada beyaz örtü, yazı yok",
     "Sahne: birinci referanstaki eski lokanta, öğlen; beyaz örtülü köşe masa. Kadrajda TAM 3 kişi.",
     [("Masada oturan Şükrü Bey (beşinci referans: ufak tefek, tepesi kel, yanlarda kısa beyaz saç, ince kır bıyık, kahverengi "
       "tüvit takım, koyu yeşil puantiyeli papyon): sağ elini ayakta duran Cengo'nun yamuk papyonuna uzatmış; yüzü sert, beğenmez."),
      ("Masanın yanında ayakta Cengo (dördüncü referans: " + CENGO_K + "): gövdesi geriye kaçıyor, bir eli kendi papyonunu "
       "korur gibi göğsünde."),
      ("Masanın öbür yanında Peri (ikinci referansın yüzü; elbise üçüncü referanstaki kart: " + P_GALA + "): oturmuş, çenesini "
       "eldivenli eline dayamış, olanı keyifle izliyor.")],
     [PERI_CEK, PERI_EN, KALABALIK, KOMEDI])
kare(76, "K131", "Arka avlu: Nesrin ve Cengo basamakta yan yana oturuyor, kediler Cengo'ya sokulmuş; Peri geride",
     [AVLU, NESRIN, CENGO, PG_BAS, PG_KART],
     "TAM 3 kişi + 3 kedi · Nesrin ve Cengo AYNI basamakta yan yana · kediler Cengo'nun dizinde/yanında · Peri biraz geride ayakta · konuşmuyorlar",
     "Sahne: birinci referanstaki arka avlu, öğleden sonra; arka kapıya çıkan taş basamaklar, duvar dibinde kediler. Kadrajda TAM 3 kişi ve 3 kedi.",
     [("Basamakta oturan Nesrin Hanım (ikinci referans: ince, kemikli yüz, koyu kestane tek örgü omzundan önde, gözlüğü başının "
       "üstünde, siyah elbise, boya lekeli lacivert önlük): dizlerini birleştirmiş, elleri kucağında, bakışı uzakta; soğuk değil, sessiz."),
      ("Aynı basamakta, onun yanında oturan Cengo (üçüncü referans: " + CENGO_K + "): dirsekleri dizlerinde; üç kedi ona "
       "sokulmuş, biri kucağına çıkmış, biri bacağına sürtünüyor. Yüzünde sessiz, yumuşak bir gülümseme."),
      ("Biraz geride, ayakta Peri (dördüncü referansın yüzü; beşinci referans kart: " + P_GALA + "): kollarını hafifçe "
       "kavuşturmadan beline koymuş, ikisini izliyor; meraklı, yumuşak bir yüz.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(77, "K132", "Yüzleşme açılışı: akşam depo — Şükrü, Vedat, Nesrin; köşede boş çerçeve; Peri ve Cengo kapıda",
     [DEPO, SERIT_SVN, PG_BAS, PG_KART, CENGO],
     "TAM 5 kişi · Şükrü elinde rapor kâğıtları (yazı okunmuyor) · Vedat tablonun başında · Nesrin raf önünde · köşede BOŞ büyük yaldız çerçeve · Peri ve Cengo kapıda",
     ("Sahne: birinci referanstaki bodrum deposu, AKŞAM; sıcak lamba ışığı, şövalede yaldız çerçeveli Boğaz manzarası, sağ "
      "köşede BOŞ, büyük, yaldızlı, arkası koyu kadife bir çerçeve. Kadrajda TAM 5 kişi."),
     [("Şövalenin yanında, ikinci referanstaki şeridin ortasındaki Vedat Bey (iri, tamamen kel, gür kısa kır sakal, kalın siyah "
       "gözlük, bordo kadife ceket, beyaz boğazlı kazak): tablonun başında, ellerini arkasında birleştirmiş."),
      ("Solda, şeridin solundaki Şükrü Bey (ufak tefek, kel, ince kır bıyık, kahverengi tüvit, koyu yeşil papyon): elinde birkaç "
       "rapor kâğıdı (yazı okunmuyor), dimdik."),
      ("Sağda raf önünde, şeridin sağındaki Nesrin Hanım (koyu kestane tek örgü, siyah elbise, lacivert önlük): elinde küçük boş bir çerçeve."),
      ("Ön planda, kapı eşiğinde, sırtları yarı bize dönük Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_GALA + ") "
       "ve Cengo (beşinci referans: " + CENGO_K + "): üçüne bakıyorlar; Peri kararlı, Cengo tetikte.")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(78, "K133", "Yüzleşme: Şükrü papyonunu düzeltiyor, Nesrin çerçeveyi rafa bırakıyor", [DEPO, SUKRU, NESRIN],
     "TAM 2 kişi · Şükrü İKİ eliyle KENDİ papyonunda · Nesrin küçük boş çerçeveyi rafa koyuyor · gergin sessizlik",
     "Sahne: birinci referanstaki bodrum deposu, akşam, sıcak lamba ışığı. Kadrajda TAM 2 kişi, belden yukarı.",
     [("Solda Şükrü Bey (ikinci referans: ufak tefek, kel, ince kır bıyık, kahverengi tüvit, koyu yeşil puantiyeli papyon): iki "
       "eliyle KENDİ papyonunu düzeltiyor, gergin, gözleri yana kaçıyor."),
      ("Sağda raf önünde Nesrin Hanım (üçüncü referans: koyu kestane tek örgü, siyah elbise, lacivert önlük, parmak uçları "
       "boyalı): elindeki küçük boş yaldız çerçeveyi rafa bırakıyor, yüzü ifadesiz, soğuk.")],
     [KALABALIK])
kare(79, "K134", "Yüzleşme kaçışı: Nesrin boş çerçevenin arkalığını yırtıp ruloyu çekiyor, kapıya koşuyor; Kaan donmuş",
     [DEPO, NESRIN, KAAN],
     "TAM 2 kişi · Nesrin koşuyor, elinde RULO tuval · köşedeki boş çerçevenin kadife arkalığı YIRTIK · Kaan elinde kadife örtü, donmuş",
     ("Sahne: birinci referanstaki bodrum deposu, akşam. Sağ köşedeki büyük boş yaldız çerçevenin koyu kadife arkalığı YIRTILMIŞ, "
      "sarkıyor. Kadrajda TAM 2 kişi; hareket anı."),
     [("Nesrin Hanım (ikinci referans: koyu kestane tek örgü havada savrulmuş, siyah elbise, lacivert önlük): çerçeveden kaptığı "
       "RULO bir tuvali göğsüne bastırmış, arka kapıya doğru KOŞUYOR; yüzü kararlı."),
      ("Kapının yanında Kaan (üçüncü referans: kısa boylu, açık sarı perçemli, yuvarlak gözlüklü, çilli, dar lacivert takım): "
       "elinde katlı bir kadife örtüyle donup kalmış, ağzı açık.")],
     [KALABALIK, "Hareket net ve okunaklı; kimse düşmüyor, kimse yaralanmıyor."])
kare(80, "K135", "Kovalamaca 1: Nesrin ruloyla kilitli arka kapının kolunu çekiyor", [CERCEVE, NESRIN],
     "TAM 1 kişi · Nesrin demir ARKA KAPININ kolunu çekiyor, kapı kapalı · rulo koltuğunun altında · yaldız kovaları",
     "Sahne: birinci referanstaki çerçeve odası, akşam; yaldız kovaları, vernik kutuları, duvarda boş çerçeveler. Kadrajda TAM 1 kişi.",
     [("Nesrin Hanım (ikinci referans: koyu kestane tek örgü, siyah elbise, lacivert önlük): rulo tuvali koltuğunun altına "
       "sıkıştırmış, öbür eliyle yeşil demir ARKA KAPININ kolunu var gücüyle çekiyor; kapı kilitli, açılmıyor. Yüzünde gerginlik, öfke değil.")],
     [KALABALIK])
kare(81, "K136", "Kovalamaca 1: ikram şefi Cengo'ya şampanya tepsisi tutuşturuyor", [SALON, CENGO, C_KART],
     "TAM 2 kişi · ikram şefi YENİ kişi (kısa, tombul, kır saçlı kadın, beyaz şef ceketi) · Cengo'nun elinde şampanya kadehli tepsi · kadehlerde yazı yok",
     "Sahne: birinci referanstaki müzayede salonunun kapı tarafı, akşam, kristal avize. Kadrajda TAM 2 kişi.",
     [("Cengo (ikinci referans; üçüncü referans kart: " + CENGO_K + "): koşarken yakalanmış; elinde birden beliren, üstünde dolu "
       "şampanya kadehleri olan gümüş bir TEPSİ, kadehler sallanıyor; yüzünde komik bir isyan: 'ben garson değilim!'"),
      ("İkram şefi (yeni, tek seferlik kişi: kısa, tombul, ellilerinde, kısa kıvırcık KIR saçlı bir kadın; beyaz, çift düğmeli "
       "şef ceketi; telaşlı, buyurgan): tepsiyi Cengo'nun ellerine itiyor, öbür eliyle salonu gösteriyor.")],
     [KALABALIK, KOMEDI])
kare(82, "K137", "Kovalamaca 2: Peri yaldız kovasına düşmüş, baştan aşağı altın, altın bulut", [CERCEVE, PG_BAS, PG_KART],
     "TAM 1 kişi · Peri yerde, yan yatmış, devrilmiş yaldız kovası · baştan aşağı ALTIN · havada altın toz bulutu · öfkeli ve gururlu · acı yok",
     ("Sahne: birinci referanstaki çerçeve odası; yerde dökülmüş taze vernik parlıyor, devrilmiş bir yaldız kovası, havada ince "
      "ALTIN bir toz bulutu. Kadrajda TAM 1 kişi."),
     [("Peri (ikinci referansın yüzü; elbisenin kesimi üçüncü referanstaki kart: " + P_ALTIN + "): yerde YAN YATMIŞ, bir dirseğine "
       "dayanmış, devrilen kovanın yanında; bir ayağındaki stiletto havada. Öfkeli ve gururlu bir yüz: kaşları çatık ama dudakları "
       "hâlâ kırmızı ve kendinden emin; acı ya da yara yok.")],
     [PERI_KOMIK, KOMEDI])
kare(83, "K138", "Kovalamaca 2: Nesrin ruloyla Peri'nin yanından salona kaçıyor", [CERCEVE, NESRIN, PG_BAS, PG_KART],
     "TAM 2 kişi · Nesrin ruloyla koşarak geçiyor · Peri yerde, altın, doğrulmaya çalışıyor · altın toz",
     "Sahne: birinci referanstaki çerçeve odası; havada hâlâ ince altın toz. Kadrajda TAM 2 kişi.",
     [("Nesrin Hanım (ikinci referans: koyu kestane tek örgü, siyah elbise, lacivert önlük): rulo tuvali göğsüne bastırmış, "
       "yerdeki Peri'nin yanından salonun kapısına doğru koşarak geçiyor; Peri'ye bakmıyor."),
      ("Yerde, dizlerinin üstünde doğrulmaya çalışan Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_ALTIN + "): "
       "başını çevirmiş, Nesrin'in arkasından bakıyor, öfkeli ve şaşkın.")],
     [PERI_KOMIK, KALABALIK, KOMEDI])
kare(84, "K139", "Kovalamaca 3: salon — altın Peri boş kaideye tırmanmış; misafirler heykel sanıyor", [SALON, PG_BAS, PG_KART],
     "Peri BOŞ beyaz mermer KAİDENİN üstünde, baştan aşağı altın · arkadaki misafirler bulanık · vitrinde taç",
     ("Sahne: birinci referanstaki müzayede salonu, akşam; kristal avize, sıra sıra kadife sandalyeler, kürsü, cam vitrinde "
      "kadife yastıkta gümüş taç; vitrinin yanında boş beyaz mermer KAİDE. Kadrajda TAM 1 kişi yüzüyle seçiliyor: Peri; arkadaki misafirler küçük, bulanık, yüzleri seçilmiyor."),
     [("Peri (ikinci referansın yüzü; elbisenin kesimi üçüncü referanstaki kart: " + P_ALTIN + "): KAİDENİN ÜSTÜNE tırmanmış, "
       "yeni doğrulmuş, ayakta; salonun öbür ucuna, Nesrin'i arar gibi bakıyor."),
      ("Arka planda, sandalyelerin arasında 3–4 şık, yaşlıca misafir (takım elbiseli erkekler, gece elbiseli kadınlar; yüzleri "
       "küçük ve belirsiz, kimseye benzemeyen tek seferlik kişiler): hayranlıkla kaideye bakıyorlar, biri ağzını eliyle kapamış.")],
     [PERI_KOMIK, PERI_EN, KALABALIK, KOMEDI])
kare(85, "K140", "Kovalamaca 3: Kaan kürsüde tokmağı kaldırmış, kaideye bakıyor; bir misafir el kaldırmış",
     [SALON, KAAN, PG_BAS, PG_KART],
     "Kaan kürsüde, elinde TOKMAK havada · arkada kaidede altın Peri (küçük) · ön planda bir misafir eli havada · yazı/lot numarası YOK",
     "Sahne: birinci referanstaki müzayede salonu, akşam. Kadrajda TAM 3 kişi: Kaan, Peri ve bir misafir.",
     [("Kürsüde Kaan (ikinci referans: kısa boylu, açık sarı perçemli, yuvarlak gözlüklü, çilli, dar lacivert takım): ahşap "
       "TOKMAĞI havaya kaldırmış, başını kaideye çevirmiş, heyecanla bağırıyor."),
      ("Arka planda, kaidenin üstünde heykel gibi duran Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_ALTIN + ")."),
      ("Ön planda, sandalyede oturan, sırtı yarı bize dönük, gri saçlı tek bir misafir (tek seferlik kişi): elini havaya kaldırmış, pey veriyor.")],
     [PERI_KOMIK, KALABALIK, KOMEDI])
kare(86, "K141", "Kovalamaca 3: kaidede altın Peri, heykel pozu, göz ucu vitrindeki tacta", [SALON, PG_BAS, PG_KART],
     "TAM 1 kişi · Peri kaidede: BİR eli belinde, ÖBÜRÜ havada · gözü yanındaki vitrindeki TAÇTA · kımıldamıyor · altın",
     "Sahne: birinci referanstaki müzayede salonu, akşam; boş beyaz mermer kaide ve hemen yanında cam vitrinde kadife yastıkta gümüş taç. Kadrajda TAM 1 kişi.",
     [("Kaidenin üstünde Peri (ikinci referansın yüzü; elbisenin kesimi üçüncü referanstaki kart: " + P_ALTIN + "): klasik bir "
       "HEYKEL POZU: bir eli belinde, öbür kolu zarifçe havada; gövdesi dimdik, kımıldamıyor. Başı öne bakıyor ama GÖZ UCUYLA "
       "yanındaki vitrindeki tacına bakıyor; yüzünde gizli bir özlem.")],
     [PERI_KOMIK, KOMEDI])
kare(87, "K142", "Kovalamaca 4: Peri'nin altın eldivenli eli Nesrin'in bileğinde", [SALON, PG_BAS, PG_KART, NESRIN],
     "TAM 2 kişi · Peri kaideden eğilmiş, ALTIN eldivenli eli Nesrin'in BİLEĞİNDE · Nesrin ruloyla, duruyor · arkada bulanık misafirler",
     "Sahne: birinci referanstaki müzayede salonu, akşam; kaidenin yanı. Kadrajda TAM 2 kişi ön planda; arkada bulanık misafirler.",
     [("Kaidenin üstünden eğilen Peri (ikinci referansın yüzü; elbisenin kesimi üçüncü referanstaki kart: " + P_ALTIN + "): "
       "altın eldivenli SAĞ eliyle aşağıdan geçen Nesrin'in bileğini sıkıca yakalamış; öbür eli kaidenin kenarında. Yüzü "
       "kararlı, kaşı kalkık."),
      ("Nesrin Hanım (dördüncü referans: koyu kestane tek örgü, siyah elbise, lacivert önlük): rulo tuvali göğsüne bastırmış, "
       "bileğinden tutulunca DURMUŞ, başını Peri'ye kaldırmış; yüzünde yenilgi değil, sessiz bir şaşkınlık.")],
     [PERI_KOMIK, PERI_EN, KALABALIK])
kare(88, "K143", "Kovalamaca 4: Cengo tepsiyi misafire verip ruloyu alıyor; misafir cebine bahşiş sıkıştırıyor",
     [SALON, CENGO, C_KART, NESRIN],
     "TAM 3 kişi · Cengo bir eliyle tepsiyi misafire uzatıyor, öbür eliyle RULOYU Nesrin'den alıyor · misafir Cengo'nun cebine katlı kâğıt para sıkıştırıyor (yazı yok)",
     "Sahne: birinci referanstaki müzayede salonu, akşam. Kadrajda TAM 3 kişi.",
     [("Ortada Cengo (ikinci referans; üçüncü referans kart: " + CENGO_K + "): SOL eliyle şampanya tepsisini yanındaki misafire "
       "uzatıyor, SAĞ eliyle Nesrin'in elindeki rulo tuvali alıyor; yüzü ciddi ama hafif hınzır."),
      ("Solda Nesrin Hanım (dördüncü referans: koyu kestane tek örgü, siyah elbise, lacivert önlük): ruloyu bırakıyor, yüzü sessiz."),
      ("Sağda yaşlı, şık bir erkek misafir (tek seferlik kişi: ince, uzun, beyaz saçlı, gözlüksüz, koyu takım): tepsiyi alırken "
       "öbür eliyle Cengo'nun smokin cebine katlanmış bir kâğıt para sıkıştırıyor (parada yazı/rakam seçilmez).")],
     [KALABALIK, KOMEDI])
kare(89, "K144", "Kovalamaca sonu: Kaan pamuk ve örtüyle; Peri yüzünü siliyor, eldivensiz, elbise pırıl pırıl",
     [SALON, KAAN, PG_BAS, PG_KART],
     "TAM 2 kişi · Peri yüzünü PAMUKLA siliyor, ELDİVEN YOK (altın eldivenler elinde ya da yerde) · elbise yaldızla pırıl pırıl · Kaan elinde pamuk ve katlı beyaz masa örtüsü",
     "Sahne: birinci referanstaki müzayede salonunun kenarı, akşam. Kadrajda TAM 2 kişi.",
     [("Peri (üçüncü referansın yüzü; elbisenin kesimi dördüncü referanstaki kart: " + P_TEMIZ + "): elindeki alkollü pamukla "
       "yüzünü siliyor; yüzünün yarısı temizlenmiş, yarısında hâlâ ince altın; çıkardığı ALTIN eldivenler öbür elinde sarkıyor. "
       "Kaşı kalkık, kuru bir 'şimdi mi?' bakışı."),
      ("Kaan (ikinci referans: kısa boylu, açık sarı perçemli, yuvarlak gözlüklü, çilli, dar lacivert takım): koşarak gelmiş, "
       "bir elinde bir tutam pamuk, kolunda katlı beyaz bir masa örtüsü; heyecanlı, hayran.")],
     [PERI_CEK, KALABALIK])
kare(90, "K145", "İtiraf: çerçeve odası — Nesrin taburede, Peri ve Cengo karşısında, Cengo'nun elinde rulo",
     [CERCEVE, NESRIN, PG_BAS, PG_KART, CENGO],
     "TAM 3 kişi · Nesrin taburede oturuyor · Peri ve Cengo ayakta karşısında · Cengo'nun elinde RULO · Peri ELDİVENSİZ, elbise pırıl pırıl · kapı kapalı",
     "Sahne: birinci referanstaki çerçeve odası; kapılar kapalı, sıcak, loş lamba ışığı; ortada boş iş masası ve tabure. Kadrajda TAM 3 kişi.",
     [("Tabureye oturmuş Nesrin Hanım (ikinci referans: koyu kestane tek örgü, siyah elbise, lacivert önlük, parmak uçları "
       "boyalı): elleri kucağında kenetli, dimdik, hüzünlü; anlatmaya hazır."),
      ("Karşısında ayakta Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_TEMIZ + "): kolları gevşek, dikkatle dinliyor."),
      ("Peri'nin yanında Cengo (beşinci referans: " + CENGO_K + "): elinde rulo tuval, yüzü yumuşak, ciddi.")],
     [PERI_CEK, KALABALIK])
kare(91, "K146", "Kapanış (bağ düşük): papyon cepte, Cengo kapıdan çıkıyor; Peri kulak arkasını siliyor",
     [BURO_GECE, CENGO, C_KART, PG_BAS, PG_KART],
     "TAM 2 kişi · Cengo kapıda, sırtı yarı dönük, PAPYONSUZ, papyonun ucu cebinden görünüyor, ceketi kolunda · Peri masada kulağının arkasını siliyor",
     "Sahne: birinci referanstaki büro, gece; yalnız masa lambası yanık. Kadrajda TAM 2 kişi.",
     [("Kapıda Cengo (ikinci referans; üçüncü referans kart: smokin, ama PAPYONSUZ; gömleğin yakası açık; papyonun ucu cebinden "
       "sarkıyor; smokin ceketi kolunda; sol bileğinde boncuklu bileklik): çıkıyor, yarı sırtı bize dönük, başını hafifçe "
       "çevirmiş; yorgun."),
      ("Masasında oturan Peri (dördüncü referansın yüzü; beşinci referans kart: " + P_TEMIZ + "): bir eliyle kulağının arkasındaki "
       "altın lekeyi siliyor, Cengo'ya bakmıyor; yüzünde kırgın bir sessizlik.")],
     [PERI_CEK, KALABALIK])
kare(92, "K147", "Kapanış (bağ yüksek): Peri Cengo'nun papyonunu düzeltiyor, Cengo kıpırdamıyor; Gizem arkada",
     [BURO_GECE, PG_BAS, PG_KART, CENGO, GIZEM],
     "TAM 3 kişi · Peri İKİ eliyle Cengo'nun papyonunu düzeltiyor · Cengo kıpırdamıyor, gözleri Peri'de · Gizem arkada kapıda · Peri ELDİVENSİZ",
     "Sahne: birinci referanstaki büro, gece; yalnız masa lambası yanık, sıcak. Kadrajda TAM 3 kişi.",
     [("Önde Peri (ikinci referansın yüzü; üçüncü referans kart: " + P_TEMIZ + "): Cengo'nun önünde, ona çok yakın; İKİ eliyle "
       "onun yamuk papyonunu düzeltiyor; yüzünde yumuşak, küçük bir gülümseme."),
      ("Cengo (dördüncü referans: " + CENGO_K + "): kıpırdamıyor, kolları yanında; gözleri Peri'nin yüzünde, yumuşak ve ciddi."),
      ("Arkada kapı eşiğinde Gizem (beşinci referansın yüzü ve kıyafeti: bal rengi kâküllü kıvırcık saç, çil, krem triko, koyu "
       "kot; telefon YOK): ikisini görmüş, kaşları kalkık, dudakları büzük: 'hıh'.")],
     [PERI_CEK, PERI_EN, KALABALIK],
     satir=["- *anlatı*: Peri kalkıp Cengo'nun önüne geçiyor; papyonuna uzanıyor. Bütün gün kaçan Cengo bu kez kıpırdamıyor.",
            "- **peri**: Bütün gün yamuktu.", "- **cengo**: Bekliyordum.", "- **gizem**: Hıh.  _(gir)_"])
kare(93, "K148", "Karar (ihbar): boşalan salon; Süheyla kadife kutuyu Peri'nin önüne koyuyor", [SALON, SUHEYLA, PG_BAS, PG_KART],
     "TAM 2 kişi · salon BOŞ (sandalyeler dağınık) · Süheyla kapalı kadife kutuyu Peri'nin önündeki küçük masaya koyuyor · Peri eldivensiz, pırıl pırıl",
     "Sahne: birinci referanstaki müzayede salonu, satıştan sonra: sandalyeler boş ve dağınık, avize yarı loş, vitrin boş. Kadrajda TAM 2 kişi.",
     [("Süheyla Hanım (ikinci referans: dolgun, kalın siyah gözlüklü, siyah topuz, kırmızı ruj, gri ekose ceket; yakasında küçük "
       "gümüş hilal broş): Peri'nin önündeki küçük yuvarlak masaya kapalı, koyu kırmızı KADİFE bir kutuyu koyuyor; yüzü yorgun ama dürüst."),
      ("Masada oturan Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_TEMIZ + "): kutuya bakıyor, dokunmuyor; ciddi, yorgun.")],
     [PERI_CEK, KALABALIK])
kare(94, "K149", "Karar (sus): Peri'nin elinde taç, alkışlayan salon", [SALON, PG_BAS, PG_KART],
     "Peri ayakta, İKİ eliyle gümüş tacı tutuyor (takmıyor) · arkada alkışlayan bulanık misafirler · Peri eldivensiz, pırıl pırıl",
     "Sahne: birinci referanstaki müzayede salonu, satış sırasında; avize parlak. Kadrajda TAM 1 kişi yüzüyle seçiliyor: Peri; arkadaki kalabalık bulanık, yüzleri seçilmiyor.",
     [("Peri (ikinci referansın yüzü; üçüncü referans kart: " + P_TEMIZ + "): ayakta, İKİ eliyle kristal taşlı gümüş tacı göğsünün "
       "hizasında tutuyor, takmıyor; tacına bakıyor; yüzünde gurur ve belli belirsiz bir hüzün aynı anda."),
      ("Arkada sandalyelerde, bulanık, yüzleri belirsiz şık misafirler alkışlıyor (tek seferlik kişiler).")],
     [PERI_CEK, PERI_EN, KALABALIK])
kare(95, "K150", "Karar (sus payı): Süheyla tacı kutusuyla Peri'ye uzatıyor", [SALON, SUHEYLA, PG_BAS, PG_KART],
     "TAM 2 kişi · Süheyla AÇIK kadife kutuyu, içinde taç, iki eliyle Peri'ye uzatıyor · Peri henüz almıyor · salon arkada",
     "Sahne: birinci referanstaki müzayede salonunun bir köşesi, satış sürerken; arkada bulanık misafirler. Kadrajda TAM 2 kişi ön planda.",
     [("Süheyla Hanım (ikinci referans: dolgun, kalın siyah gözlüklü, siyah topuz, kırmızı ruj, gri ekose ceket, hilal broş): "
       "İKİ eliyle AÇIK bir koyu kırmızı kadife kutuyu Peri'ye uzatıyor; kutunun içinde kristal taşlı gümüş taç; yüzünde imalı, "
       "kurnaz bir gülümseme: 'bu akşam burada hiçbir şey olmadı'."),
      ("Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_TEMIZ + "): kutuya bakıyor, elleri henüz yanında; yüzü karışık.")],
     [PERI_CEK, KALABALIK])
kare(96, "K151", "Karar (Cengo'ya bırak): buruşuk paralar, Cengo'nun koltuğunun altında kutu", [SALON, CENGO, C_KART],
     "TAM 1 kişi · Cengo'nun elinde bir tomar BURUŞUK kâğıt para (rakam/yazı seçilmez) · koltuğunun altında koyu kırmızı kadife kutu · telefon kulağında değil",
     "Sahne: birinci referanstaki müzayede salonunun bir köşesi, satıştan sonra. Kadrajda TAM 1 kişi.",
     [("Cengo (ikinci referans; üçüncü referans kart: " + CENGO_K + "): bir elinde bir tomar buruşuk, karışık kâğıt para (paralarda "
       "rakam ya da yazı seçilmez), sayıyor; koltuğunun altına koyu kırmızı kadife bir kutu sıkıştırmış. Yüzünde yorgun ama "
       "kocaman, hınzır bir gülümseme.")],
     [KALABALIK])
kare(97, "K152", "Giriş: Süheyla eşikte — kırmızı ruj, gri ekose ceket (yalnız)", [BURO_G, SUHEYLA],
     "TAM 1 kişi · Süheyla kapı eşiğinde · kalın siyah gözlük, siyah topuz, kırmızı ruj, gri ekose ceket · elinde çanta YOK ya da küçük",
     "Sahne: birinci referanstaki büronun kapısı açık; eşikte bir kadın. Kadrajda TAM 1 kişi.",
     [("Süheyla Hanım (ikinci referansın yüzü ve kıyafeti: dolgun, yuvarlak yüzlü, KALIN SİYAH gözlüklü, siyah saçı ensede sıkı "
       "topuz, koyu kırmızı ruj, krem boğazlı kazak, gri ekose yün ceket, siyah pantolon, parmağında kehribar yüzük): eşikte "
       "dimdik duruyor, bir eli kapı kasasında; içeriyi fiyat biçer gibi süzüyor; telaşlı, kendinden emin.")],
     [KALABALIK])
kare(98, "K153", "Kapanış: büro, gece — Peri masada, önünde açık kadife kutu, masada gümüş taç (takmıyor)",
     [BURO_GECE, PG_BAS, PG_KART],
     "TAM 1 kişi · masada AÇIK kadife kutu ve gümüş taç · Peri tacı TAKMIYOR, bakıyor · eldivensiz, elbise pırıl pırıl · yalnız masa lambası",
     "Sahne: birinci referanstaki büro, gece; yalnız masa lambası yanık. Kadrajda TAM 1 kişi.",
     [("Peri (ikinci referansın yüzü; üçüncü referans kart: " + P_TEMIZ + "): masasında oturuyor; önünde açık, koyu kırmızı kadife "
       "bir kutu ve kutunun yanında masada duran kristal taşlı gümüş taç; tacı TAKMIYOR, ellerini masada birleştirmiş, tacına "
       "bakıyor. Yüzünde sessiz bir hüzün ve küçük bir gülümseme.")],
     [PERI_CEK])
kare(99, "K154", "Karar sorusu: çerçeve odası — Nesrin taburede, masada açık rulo; Peri ve Cengo karşısında",
     [CERCEVE, NESRIN, PG_BAS, PG_KART, CENGO],
     "TAM 3 kişi · Nesrin taburede · masada AÇIK rulo tuval (Boğaz manzarası) · Peri ELDİVENSİZ, pırıl pırıl · Cengo smokin · karar anı, sessiz",
     "Sahne: birinci referanstaki çerçeve odası; ortadaki iş masasının üstünde açılmış, kenarları kıvrık, çerçevesiz bir tuval (Boğaz'da akşam). Kadrajda TAM 3 kişi.",
     [("Tabureye oturmuş Nesrin Hanım (ikinci referans: koyu kestane tek örgü, siyah elbise, lacivert önlük): Peri'ye bakıyor, "
       "soruyor gibi; yüzü yorgun ama dik."),
      ("Masanın öbür yanında ayakta Peri (üçüncü referansın yüzü; dördüncü referans kart: " + P_TEMIZ + "): bir eli masanın "
       "kenarında, tuvale bakıyor; düşünceli, karar vermek üzere."),
      ("Peri'nin yanında Cengo (beşinci referans: " + CENGO_K + "): Peri'ye bakıyor, sessiz, bekliyor.")],
     [PERI_CEK, KALABALIK],
     satir=["- **nesrin**: Rulo sizde, hanımefendi. Satış sekizde başlıyor. Süheyla Hanım'a ne diyeceksiniz?  _(karar sorusu; seçim karesi)_"])
