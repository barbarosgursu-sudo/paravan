# V5 Parti 3a istemleri (ifade figürleri ve nesneli pozlar, G36–G72) — kalıp uretim/v8/uret_istem_parti3a.py (ISTEM-11, ISTEM-14,
# ISTEM-19, ISTEM-20, ISTEM-51). Yalnız satırların istediği ifadeler (SATIR-35; satir_resim.md). 27 Kasım 2026, Oğuz Bey'in
# bilgisayarı. Çalıştır: python -I uret_istem_parti3a.py
import re, os, sys
V5 = os.path.dirname(os.path.abspath(__file__))
SR = open(os.path.join(V5, "satir_resim.md"), encoding="utf-8").read()


def satirlar(anahtar):
    m = re.search(r"^### " + re.escape(anahtar) + r" \(\d+ satır\)\n(.*?)(?=^### |^## |\Z)", SR, re.S | re.M)
    if not m:
        sys.exit("satır yok: " + anahtar)
    ls = [l for l in m.group(1).strip().split("\n") if l.startswith("- ")]
    return "\n".join(ls[:8])


YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
ORAN_F = "Görselin oranı TAM 4:5, dikey (1122×1402)."
BAKIS = ("Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay "
         "bakıyor; yukarı, aşağı ya da kameraya değil. Profil değil: uzaktaki göz de açıkça görünüyor.")
BAKIS_ASAGI = ("Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler ELLERİNDEKİ işe, aşağıya "
               "bakıyor (göz kapakları hafif inik ama gözler görünüyor). Profil değil.")
SAC = "Saçın dış çizgisi toplu ve net: arka plana taşan ince tek teller, havada kıvrılan uçlar yok."
PERI_CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
PERI_CEK_FELAKET = ("Çekicilik: felaket hâlinde bile seksi ve komik; ıslak ipek bedene yapışık, dekolte, belin inceliği ve bacağın hattı "
                    "korunur. Çıplaklık yok.")
KOL = ("Kollar ve eller gövdenin dış çizgisinin içinde kalıyor: hiçbir el yana ya da öne uzanmıyor, kollar kavuşmuyor "
       "(oyunda yanındaki kişiye değer).")
KART = "Kart YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartın çizim tarzını, ışığını, yüzünü ve pozunu ALMA."
SATIRBAS = ("`arac_satir_resim.js` (27 Kasım 2026, V5 dört kapı yolu: 0 vapur dogru · 2 iskele zayif · 0 usta kadir · "
            "3 cozmez5 nedim). Codex bu bölümü istem metnine katmaz.")


def kadraj(zemin):
    return ("Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince "
            f"bir boşluk. Arka plan: düz, tek renk {zemin}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş "
            "tek renk gibi); hiçbir nesne yok.")


def yaz(n, baslik, ust, refs, anahtar, kontrol, govde):
    out = [f"# G{n} — {baslik}", ""] + ust + ["", "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    out += ["", "## Satırlar", "", SATIRBAS, "", satirlar(anahtar)]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(os.path.join(V5, "prompts", f"G{n}.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(out))
    print("yazıldı", n, anahtar)


R = "../referanslar/"
GOVDE_K = (R + "tarz_govde_kadin.jpg", "YALNIZ ölçek ve kadraj (başı silik)")
PBAS = ("referanslar/peri_ipek_bas.png", "Peri'nin başı (onaylı G23'ün baş kırpığı; G23 dekolteli, bütün hâli verilmez)")

PERI = {
    "ipek": dict(kart=("onayli/G1.png", "Peri'nin kıyafet kartı (zümrüt yeşili ipek elbise + krem hırka): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
                 sac="açık, omuzlarına dökülen iri dalgalar, rüzgârda hafif dağınık", taki="küçük inci küpeler",
                 kiy=("kart referansındaki kıyafet, aynen: zümrüt yeşili, ince askılı, akışkan ipek elbise; üstünde krem örgü hırka, önü "
                      "açık. Kartta görünmeyen: elbisenin V yakası DERİN, dekoltesi belirgin; hırka dekolteyi örtmüyor. Ayaklarında kırmızı "
                      "stiletto, çorap yok (bu kadrajda görünmez)."), temel="peri.ipek.normal", cek=PERI_CEK),
    "ipek_acik": dict(kart=("onayli/G2.png", "Peri'nin kıyafet kartı (ipek elbise, hırkasız): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
                      sac="açık, omuzlarına dökülen iri dalgalar", taki="küçük inci küpeler",
                      kiy=("kart referansındaki kıyafet, aynen: zümrüt yeşili, ince askılı, akışkan ipek elbise; HIRKA YOK, omuzlar ve kollar "
                           "çıplak. Kartta görünmeyen: V yaka DERİN, dekoltesi belirgin. Ayaklarında kırmızı stiletto, çorap yok (bu "
                           "kadrajda görünmez)."), temel="peri.ipek_acik.normal", cek=PERI_CEK),
    "islak": dict(kart=("onayli/G1.png", "Peri'nin kıyafet kartı (ipek elbise): YALNIZ elbisenin kesimi ve rengi; bu hâlde hırka YOK, elbise SIRILSIKLAM"),
                  sac="SIRILSIKLAM, yüzüne ve omuzlarına yapışmış, içinde yeşil YOSUN parçaları",
                  taki="küçük inci küpeler",
                  kiy=("bir dalganın altında kalmış: kartın zümrüt yeşili ipek elbisesi SIRILSIKLAM, bedenine yapışık, yer yer koyu yeşil "
                       "YOSUN parçaları yapışmış; hırka YOK, omuzlar ve kollar ıslak, üstlerinde su damlaları. Elbisenin V yakası DERİN. "
                       "Makyajı biraz akmış ama yüz tanınır ve güzel. Bir ayağı çıplak, öbüründe kırmızı stiletto (bu kadrajda görünmez)."),
                  temel="peri.ipek.normal", cek=PERI_CEK_FELAKET),
    "battaniye": dict(kart=("onayli/G1.png", "Peri'nin kıyafet kartı (ipek elbise): YALNIZ elbisenin kesimi ve rengi; bu hâlde elbise ıslak, üstünde battaniye"),
                      sac="ıslak, toplanmamış, darmadağın; içinde birkaç küçük yeşil YOSUN parçası",
                      taki="küçük inci küpeler",
                      kiy=("ıslak hâlinin üstüne, omuzlarına bir VAPUR BATTANİYESİ sarılmış: kalın, gri-kahverengi, kareli, yünlü, eski bir "
                           "battaniye (yazısız, etiketsiz); battaniye omuzlardan sarkıyor, önü hafif açık; altından ıslak, zümrüt yeşili "
                           "ipek elbisenin V yakası görünüyor. Bir ayağı çıplak (bu kadrajda görünmez)."),
                      temel="peri.battaniye.normal", cek=PERI_CEK_FELAKET),
}


def peri(n, set_, ifade_key, baslik, poz, ifade, ayiran, kontrol, ek=None, ref_ek=None, nesne=False):
    p = PERI[set_]
    kart_no = p["kart"][0].split("/")[1][:-4]
    ust = [f"- tür: figür · anahtar: `peri.{set_}.{ifade_key}`",
           f"- önce hazır olmalı: {kart_no} (kart), `{PBAS[0]}` (hazır)" + (f", {ref_ek[0].split('/')[1][:-4]}" if ref_ek else ""),
           "- zemin: açık bej (`zemin.tsv`)"]
    refs = [PBAS, GOVDE_K, p["kart"]] + ([ref_ek] if ref_ek else [])
    govde = [
        ("Birinci referans Peri'nin başıdır: aynı yüz, aynı kızıl-kahve saç rengi, ela-yeşil gözler, kırmızı ruj. İkinci referans YALNIZ "
         "ölçek ve kadraj içindir (başı bilerek silindi); oradaki kıyafeti ve pozu alma. Düz açık bej arka plan. Çizim tarzı "
         "boyalı, sıcak, dokulu; onaylı Peri resimleri gibi."),
        "Üçüncü referans kıyafet kartıdır: kıyafet kart nasılsa öyle. " + KART,
        ("Dördüncü referans bu hâlin onaylı temelidir: kıyafet, battaniye ve saçın hâli ONUN AYNISI; değişen yalnız poz ve ifade."
         if ref_ek else ""),
        f"Peri'nin kıyafeti: {p['kiy']} Saçı {p['sac']}. Takıları: {p['taki']}.",
        f"Poz: TAM İKİ KOL, İKİ EL. {poz}" + ("" if nesne else f" {KOL}"),
        BAKIS, f"İfade: {ifade}",
        f"Bu ifadeyi {p['temel']}'den ayıran: {ayiran}" if ayiran else "",
        ek or "", p["cek"], SAC, kadraj("açık bej"), YAZI, ORAN_F]
    yaz(n, f"Peri, {set_}, {baslik}", ust, refs, f"peri.{set_}.{ifade_key}", kontrol, govde)


CENGO_KIY = {
    "balikci": ("Kıyafet: kart referansındaki kıyafet, aynen: koyu lacivert, kalın örgülü balıkçı yaka kazak; başında kahverengi yün "
                "kasket; koyu gri pantolon."),
    "simitli": ("Kıyafet: kart referansındaki kıyafet (lacivert balıkçı yaka kazak, kahverengi kasket), ama bir simitçiyle çarpıştıktan "
                "sonra: bir kolunun ön kolu boyunca, bileğinden dirseğine kadar, kola GEÇMİŞ dört-beş SUSAMLI SİMİT halka halka diziliyor; "
                "kasketinin üstünde de bir simit, kasketin tepesine geçmiş gibi duruyor. Kazağında birkaç susam tanesi."),
}


def cengo(n, set_, ifade_key, baslik, poz, ifade, ayiran, kontrol, temel=("onayli/G25.png", "Cengo temel figürü (onaylı G25)"),
          nesne=False, kol_serbest=False):
    ust = [f"- tür: figür · anahtar: `cengo.{set_}.{ifade_key}`",
           f"- önce hazır olmalı: {temel[0].split('/')[1][:-4]}, G3 (onaylı)",
           "- zemin: açık bej (`zemin.tsv`). Bileklik SOL bilekte = kameraya bakınca kadrajın SAĞ tarafında (KAR-24)."]
    refs = [temel, ("onayli/G3.png", "kıyafet kartı: YALNIZ kıyafetin kesimi ve rengi; kartın çizim tarzı, yüzü, pozu alınmaz")]
    govde = [
        ("Birinci referans görseldeki adamın (Cengo) AYNISI: aynı yüz, saç, sakal, kıyafet ve bileklik; aynı çizim tarzı, aynı düz "
         "açık bej arka plan, aynı ölçek ve kadraj. İkinci referans kıyafet kartıdır: " + KART + " Değişen yalnız poz ve ifade."),
        CENGO_KIY[set_] + (" Kazağın kol ağzının altından ince bir telin ucu görünüyor. Kadrajın SAĞ tarafında kalan bileğinde renkli "
                           "boncuklu, ucuz, çocuk işi bileklik. Kasketin altından koyu, dağınık saç taşıyor."),
        f"Poz: TAM İKİ KOL, İKİ EL. {poz}" + ("" if (nesne or kol_serbest) else f" {KOL} Elleri boş."),
        BAKIS, f"İfade: {ifade}", f"Bu ifadeyi cengo.{set_}.normal'den ayıran: {ayiran}" if ayiran else "",
        SAC, kadraj("açık bej"), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"Cengo, {set_}, {baslik}", ust, refs, f"cengo.{set_}.{ifade_key}", kontrol, govde)


KONUK = {"muammer": ("Muammer Bey", "G5", "açık bej"), "selim": ("Selim", "G6", "açık bej"),
         "kadir": ("Kadir", "G7", "gri-mavi"), "nedim": ("Nedim Bey", "G8", "açık bej"),
         "efe": ("Efe", "G10", "açık bej"), "gorevli": ("İskele görevlisi", "G11", "gri-mavi"),
         "ismet": ("İsmet Usta", "G12", "açık bej"), "simitci": ("Simitçi", "G13", "açık bej")}


def konuk(n, kim, ifade_key, baslik, poz, ifade, ayiran, kontrol, nesne=False, ek="", bakis=BAKIS):
    ad, tem, zemin = KONUK[kim]
    ust = [f"- tür: figür · anahtar: `{kim}.{ifade_key}`", f"- önce hazır olmalı: {tem} (onaylı temel)", f"- zemin: {zemin} (`zemin.tsv`)"]
    refs = [(f"onayli/{tem}.png", f"{ad} temel figürü (onaylı {tem})")]
    eller = "" if nesne else f" {KOL} Elleri boş."
    govde = [
        (f"Birinci referans görseldeki kişinin ({ad}) AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı ölçek ve "
         f"kadraj. Arka plan düz {zemin}. Değişen yalnız poz ve ifade."),
        ek,
        f"Poz: TAM İKİ KOL, İKİ EL. {poz}{eller}",
        bakis, f"İfade: {ifade}", f"Bu figürü {kim}.normal'den ayıran: {ayiran}",
        SAC, kadraj(zemin), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"{ad}, {baslik}", ust, refs, f"{kim}.{ifade_key}", kontrol, govde)


EL_BEL = "Bir eli belinde; öbür kolu gövdesinin yanında, eli gevşek."
CENE = "Bir elinin parmak uçları çenesinin altında, dirseği gövdesine yakın; öbür kolu gövdesinin yanında."
ONDE = "İki kolu gövdesinin önünde aşağıda, elleri belinin önünde hafifçe birbirine değiyor (kavuşmuyor); omuzları hafif düşük."
KAS = ("tek kaşı belirgin biçimde kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda: \"ciddi misin?\" Takılan, "
       "iğneleyici ama sevimli. Ağzı kapalı.")
MERAK = "meraklı, dikkatle dinliyor; kaşları hafif yukarıda, başı azıcık yana eğik, gözler canlı. Dudakları kapalı."
UTAN = ("mahcup, biraz bozulmuş: gözleri hafif aşağıda ama kadrajın soluna, dudakları kapalı ve hafif büzük, yanakları hafif "
        "kızarık. Yenik değil, sevimli.")
YUMUSAK = "yumuşak, sıcak, duygulanmış: gözleri nemli ve sevecen, dudaklarında küçük, içten bir gülümseme; kaşları hafif yukarıda."

# ---------------- Peri, ipek
peri(36, "ipek", "kas", "kaşı kalkık", EL_BEL, KAS, "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · ipek elbise + krem hırka, dekolte derin · eller BOŞ · saç açık · zemin açık bej")
peri(37, "ipek", "merakli", "meraklı, soruyor", CENE, MERAK, "başı yana eğik, kaşlar meraklı, parmak uçları çenede; alay yok.",
     "parmak uçları çenede · meraklı yüz, ağız kapalı · hırka · eller BOŞ · zemin açık bej")
peri(38, "ipek", "utanmis", "mahcup (zayıf kanıt)", ONDE, UTAN, "omuzlar düşük, bakış hafif aşağı, dudak büzük; eller önde birleşiyor.",
     "mahcup yüz · eller önde (kavuşmuyor) · hırka · eller BOŞ · zemin açık bej")
peri(39, "ipek", "yesil", "deniz tutmuş (yeşil)",
     "Bir eli midesinin üstünde, avucu karnına bastırılmış; öbür eli ağzının önünde, parmak uçları dudaklarına değiyor, dirseği gövdeye yakın.",
     ("DENİZ TUTMUŞ: yüzü solgun, belirgin YEŞİLİMSİ bir renk almış (yanaklar ve alın hafif yeşil, dudakların kırmızısı soluk); "
      "gözleri sulanmış ve hafif kısık, dudakları sıkılı, yanakları şişkin, midesi bulanıyor; alnında birkaç ter damlası. Komik ama "
      "acınası; yine de güzel."),
     "yüz YEŞİLİMSİ ve solgun, bir el midede, öbür el ağzın önünde; gülümseme yok.",
     "yüz belirgin YEŞİLİMSİ, solgun · bir el midede, öbür el ağzın önünde · hırka · saç rüzgârda dağınık · zemin açık bej")
peri(40, "ipek", "canta", "kalan çantayı tezgâha koyuyor",
     ("İki eliyle gövdesinin önünde, bel hizasında, kahverengi, eski moda, tokalı küçük bir DERİ ÇANTA tutuyor (evrak çantası "
      "değil, kulplu küçük bir el çantası; yazısız, etiketsiz); çantayı aşağıya, önündeki görünmeyen tezgâha bırakır gibi. "
      "Dirsekleri gövdeye yakın; çanta gövdenin önünde, kadrajın içinde."),
     "kendinden emin, iş bitiren bir dedektif; dudaklarında belli belirsiz, bilmiş bir gülümseme.",
     "iki elde kahverengi deri çanta, gövdenin önünde; bilmiş gülümseme.",
     "kahverengi, tokalı, kulplu küçük deri çanta iki elde, gövdenin önünde, yazısız · hırka · zemin açık bej", nesne=True)
# ---------------- Peri, ipek_acik
peri(41, "ipek_acik", "kas", "kaşı kalkık", EL_BEL, KAS, "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · HIRKA YOK, omuzlar çıplak · dekolte derin · eller BOŞ · zemin açık bej")
peri(42, "ipek_acik", "merakli", "meraklı (iltifat duyuyor)", CENE,
     MERAK + " Bir iltifat duymuş; gözlerinde küçük, keyifli bir parıltı.",
     "başı yana eğik, kaşlar meraklı, parmak uçları çenede; alay yok.",
     "parmak uçları çenede · meraklı yüz · HIRKA YOK · eller BOŞ · zemin açık bej")
# ---------------- Peri, islak
peri(43, "islak", "kas", "sırılsıklam, kaşı kalkık (bu hâlin temeli)",
     "Bir eli belinde; öbür eli yüzüne yapışmış ıslak bir saç tutamını kulağının arkasına itiyor, dirseği gövdeye yakın.",
     KAS + " Sırılsıklam ve yosunlu ama onurunu kaybetmemiş.",
     "elbise ve saç SIRILSIKLAM, yosunlu; hırka yok; kaş kalkık.",
     "elbise SIRILSIKLAM, bedene yapışık · üstünde koyu yeşil YOSUN parçaları · saç ıslak, yüze yapışık, içinde yosun · HIRKA YOK · kaş kalkık · zemin açık bej",
     ek="Bu hâlin temelidir.")
# ---------------- Peri, battaniye
peri(44, "battaniye", "normal", "battaniyeye sarınmış (bu hâlin temeli)",
     "İki eli battaniyenin iki ucunu göğsünün önünde, çenesinin altında tutuyor; dirsekleri gövdeye yakın.",
     "üşümüş ama toparlanmış; sakin, yorgun, dudaklarında belli belirsiz bir gülümseme; burnunun ucu hafif kızarık.", "",
     "gri-kahverengi, kareli, yünlü VAPUR BATTANİYESİ omuzlarda, yazısız · altında ıslak zümrüt yeşili elbise, V yaka görünüyor · saç ıslak, darmadağın, içinde yosun · eller battaniyenin uçlarında · zemin açık bej",
     ek="Bu hâlin temelidir: kas ifadesi aynı hâlde çizilecek.", nesne=True)
peri(45, "battaniye", "kas", "battaniyede, kaşı kalkık",
     "Bir eli battaniyenin ucunu göğsünün önünde tutuyor; öbür eli belinde, battaniyenin altından.",
     KAS, "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş kalkık · battaniye omuzlarda (G44'teki gibi) · saç ıslak, yosunlu · zemin açık bej",
     ref_ek=("onayli/G44.png", "bu hâlin onaylı temeli (battaniye, ıslak saç): kıyafet ve saçın hâli bunun gibi"), nesne=True)
# ---------------- Cengo, balikci
cengo(46, "balikci", "gulen", "gülen", "Bir eli pantolonunun cebinde; öbür eli kasketinin siperini hafifçe yukarı itiyor, dirseği gövdeye yakın.",
      "geniş, sıcak, dişleri görünen bir gülümseme; gözleri kısılmış, keyifli.", "dişleri görünen geniş gülümseme, kasket hafif geride.",
      "geniş gülümseme · lacivert balıkçı yaka, kahverengi kasket · tel, bileklik · zemin açık bej")
cengo(47, "balikci", "kas", "kaşı kalkık", "Bir eli pantolonunun cebinde; öbür kolu gövdesinin yanında, eli gevşek.",
      "tek kaşı kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda; takılan, hınzır.",
      "tek kaş belirgin kalkık, gülümseme tek taraflı.", "kaş kalkık · balıkçı yaka, kasket · tel, bileklik · zemin açık bej")
cengo(48, "balikci", "kollar", "kollarını açmış, martı gibi bağırıyor",
      ("İKİ KOLUNU iki yana, omuz hizasında, KANAT gibi açmış; dirsekleri hafif bükük, elleri açık, parmakları kanat uçları gibi "
       "aralık; kollar ve eller kadrajın İÇİNDE kalıyor (kadraj buna göre biraz geniş). Elleri boş."),
      "çocuksu, coşkulu: ağzı kocaman açık, martı gibi \"Kiyaaa!\" diye bağırıyor; gözleri kısılmış, keyifli.",
      "iki kol kanat gibi yana açık, ağız bağırır gibi açık.",
      "İKİ KOL yana kanat gibi açık, eller kadrajın içinde · ağız açık bağırıyor · balıkçı yaka, kasket · bileklik · zemin açık bej",
      kol_serbest=True)
cengo(49, "balikci", "simit", "martılara simit atıyor",
      ("Bir eli yukarıda, başının yanında, avucundan küçük bir SİMİT parçasını havaya, kadrajın soluna doğru fırlatmış (parça elinin "
       "biraz üstünde, havada); öbür eliyle göğsünün önünde yarısı koparılmış, susamlı bir SİMİT tutuyor. Martı yok (yalnız Cengo)."),
      "keyifli, hınzır, pazarlıktan kazanmış gibi kendinden memnun; yarım gülümseme.",
      "bir el yukarıda simit parçası atıyor, öbür elde yarım simit.",
      "bir elde yarım susamlı simit, öbür elden havaya fırlatılan küçük simit parçası · balıkçı yaka, kasket · bileklik · zemin açık bej",
      nesne=True)
# ---------------- Cengo, simitli (hâl)
cengo(50, "simitli", "normal", "kolunda ve kasketinde simitler (bu hâlin temeli)",
      "Simitli kolunu göğsünün önünde, dirseği bükük tutuyor (simitler görünsün); öbür kolu gövdesinin yanında, eli gevşek.",
      "kendinden memnun, biraz mahcup bir yarım gülümseme; olanı umursamıyor.", "",
      "bir ön kolda kola GEÇMİŞ 4–5 susamlı SİMİT · kasketin tepesinde bir simit · balıkçı yaka · bileklik · zemin açık bej",
      nesne=True)
SIMITLI = ("onayli/G50.png", "simitli hâlin onaylı temeli: kolundaki ve kasketindeki simitler bunun AYNISI")
cengo(51, "simitli", "gulen", "simitli, gülen", "Simitli kolu göğsünün önünde, dirseği bükük; öbür eli pantolonunun cebinde.",
      "geniş, sıcak, dişleri görünen bir gülümseme; gözleri kısılmış.", "dişleri görünen geniş gülümseme.",
      "geniş gülümseme · kolda ve kaskette simitler (G50 gibi) · bileklik · zemin açık bej", temel=SIMITLI, nesne=True)
cengo(52, "simitli", "kas", "simitli, kaşı kalkık", "Simitli kolu gövdesinin yanında, simitler görünüyor; öbür eli belinde.",
      "tek kaşı kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda; takılan ama düşünceli.",
      "tek kaş kalkık, gülümseme tek taraflı.", "kaş kalkık · kolda ve kaskette simitler (G50 gibi) · bileklik · zemin açık bej",
      temel=SIMITLI, nesne=True)
cengo(53, "simitli", "yumusak", "simitli, yumuşak", "Simitli kolu göğsünün önünde; öbür eli göğsünün önünde, kazağının yakasında.",
      "yumuşak, sevecen, biraz mahcup; gözleri sıcak, küçük içten bir gülümseme.", "gözler sıcak, gülümseme küçük ve içten; alay yok.",
      "yumuşak yüz · kolda ve kaskette simitler (G50 gibi) · bileklik · zemin açık bej", temel=SIMITLI, nesne=True)
# ---------------- Gizem
yaz(54, "Gizem, kiremit hırka, işveli", ["- tür: figür · anahtar: `gizem.hirka5_isveli`", "- önce hazır olmalı: G26 (onaylı temel)",
                                          "- zemin: açık bej (`zemin.tsv`)"],
    [("onayli/G26.png", "Gizem'in bu kıyafetteki onaylı temeli (G26)")], "gizem.hirka5_isveli",
    "işveli, göz kırpan yüz · bir el saçında · kiremit hırka, krem gömlek, gri pantolon · bal rengi kâküllü saç, çil · zemin açık bej",
    [("Birinci referans görseldeki kadının (Gizem) AYNISI: aynı yüz, bal rengi kâküllü dalgalı saç, çiller, kıyafet ve küpeler; aynı "
      "çizim tarzı, ölçek ve kadraj. Arka plan düz açık bej. Değişen yalnız poz ve ifade."),
     f"Poz: TAM İKİ KOL, İKİ EL. Bir eli saçının bir tutamını parmağına doluyor, dirseği gövdeye yakın; öbür kolu gövdesinin yanında. {KOL} Elleri boş.",
     BAKIS, "İfade: işveli, cilveli, muzip: tek gözünü kırpıyor, dudaklarında şımarık bir gülümseme, başı hafif yana eğik.",
     "Bu figürü gizem.hirka5'ten ayıran: tek göz kırpık, şımarık gülümseme, eli saçında; kollar kavuşuk değil.",
     "Çekicilik: genç, sevimli, cilveli; abartısız.", SAC, kadraj("açık bej"), "Çıplaklık yok.", YAZI, ORAN_F])
# ---------------- Konuklar
konuk(55, "efe", "gulen", "gülen (bir daha!)", "İki elini göğsünün önünde çırpar gibi birleştirmiş, parmaklar açık.",
      "coşkulu, masum bir çocuk sevinci: ağzı kocaman açık gülüyor, gözleri parlıyor.", "ağız açık kahkaha, eller çırpar gibi.",
      "çocuk, masum · ağız açık gülüyor · eller göğüs önünde · sarı yağmurluk · zemin açık bej")
konuk(56, "efe", "simit", "martılara simit atıyor",
      ("Bir eli yukarıda, başının üstünde, küçük bir SİMİT parçasını havaya, kadrajın soluna fırlatmış (parça elinin üstünde, havada); "
       "öbür eliyle göğsünün önünde küçük, şeffaf bir poşet içinde yarım SİMİTLER tutuyor (poşette yazı yok). Martı yok."),
      "masum, mutlu bir çocuk; ağzı hafif açık, gözleri havadaki parçayı izliyor ama kadrajın soluna.",
      "bir el yukarıda simit atıyor, öbür elde simit poşeti.",
      "çocuk, masum · bir elden havaya simit parçası, öbür elde yazısız şeffaf poşette simitler · sarı yağmurluk · zemin açık bej", nesne=True)
konuk(57, "gorevli", "defter", "elinde defter",
      ("Bir eliyle göğsünün önünde kapalı, siyah kapaklı, küçük bir DEFTER tutuyor (kapak yazısız, düz); öbür eli defterin üstünde, "
       "parmakları kapağın kenarında."),
      "ciddi, sabırlı, resmi; dudaklar kapalı.", "elinde kapalı siyah defter; kollar kavuşuk değil.",
      "elde kapalı, siyah, YAZISIZ defter · bıyıksız, kalın siyah gözlük · lacivert yelek, kırmızı ipte düdük · zemin gri-mavi", nesne=True)
konuk(58, "ismet", "dikiyor", "kayış dikiyor",
      ("İki eli göğsünün önünde, bel hizasında: bir eliyle kahverengi, uzun bir DERİ KAYIŞI tutuyor, öbür eliyle kayışa iri bir İĞNE "
       "geçirip ipliği çekiyor; dirsekleri gövdeye yakın."),
      "işine dalmış, dikkatli, sakin; dudaklar kapalı.", "elinde kayış ve iğne, gözler işte.",
      "elde kahverengi deri kayış ve iğne, iplik · gözlük burnun ucunda · deri önlük, ekose gömlek · zemin açık bej",
      nesne=True, bakis=BAKIS_ASAGI)
konuk(59, "kadir", "alinmis", "alınmış (kazaydı!)", "İki eli göğsünün önünde, avuçları yukarı açık: \"ben mi?\"",
      "alınmış, kırgın ve öfkeli: kaşları yukarı ve çatık, ağzı açık itiraz ediyor, yanakları kıpkırmızı.",
      "avuçlar açık, ağız itiraz eder gibi açık, kaşlar kırgın; gülümseme yok.",
      "alınmış yüz, ağız açık · avuçlar yukarı açık · beyaz çaycı ceketi, bez omuzda · zemin gri-mavi")
konuk(60, "kadir", "gulen", "gülen (unuttum)", "Bir eli ensesini kaşıyor, dirseği gövdeye yakın; öbür eli belinde.",
      "mahcup ama sevimli bir gülümseme, dişleri görünüyor; gözleri kısık: \"unuttum işte\".",
      "mahcup geniş gülümseme, bir eli ensede.", "mahcup gülümseme · el ensede · beyaz çaycı ceketi · zemin gri-mavi")
konuk(61, "kadir", "tepsi", "elinde çay tepsisi",
      ("Bir eliyle göğsünün önünde, bel hizasında yuvarlak, gümüş renkli, küçük bir ÇAY TEPSİSİ taşıyor; tepside dört İNCE BELLİ "
       "cam çay bardağı, içlerinde koyu kırmızı çay, tabaklarıyla; öbür eli tepsinin kenarında, dengeliyor."),
      "neşeli, davetkâr; geniş bir gülümseme.", "elinde dolu çay tepsisi.",
      "gümüş renkli küçük tepside 4 ince belli dolu çay bardağı · beyaz çaycı ceketi · kalın siyah bıyık · zemin gri-mavi", nesne=True)
konuk(62, "muammer", "dertli", "dertli (anlatıyor)",
      ("Bir eli göğsünün üstünde, avucu kalbinin hizasında; öbür kolu gövdesinin yanında. Öbür bileğinde altın renkli, küçük kadranlı "
       "bir KOL SAATİ (kadranda rakam yok)."),
      "dertli, kendine acıyan: kaşları yukarı ve ortada birleşik, ağzının kenarları aşağıda, gösterişli bir dram.",
      "kaşlar dertli, el göğüste; gülümseme ve altın diş görünmüyor.",
      "dertli yüz · el göğüste · bilekte rakamsız altın kol saati · bordo kadife ceket · zemin açık bej")
konuk(63, "muammer", "kacamak", "kaçamak (bıyığını düzeltiyor)",
      ("Bir elinin baş ve işaret parmağıyla bıyığının ucunu düzeltiyor, dirseği gövdeye yakın; öbür eli ceketinin cebinde."),
      "kaçamak, yalan söyleyen: gözleri yana kaçmış (kadrajın soluna ama karşısındakinin gözüne değil), dudaklarında gergin bir gülümseme.",
      "iki parmak bıyıkta, gözler kaçamak.", "iki parmak bıyığın ucunda · gözler kaçamak · bordo kadife ceket · zemin açık bej")
konuk(64, "muammer", "kutu", "elinde kadife kutu",
      ("İki eliyle göğsünün önünde, bel hizasında, avuç büyüklüğünde, kapağı KAPALI, koyu bordo KADİFE bir kutu tutuyor; kutuyu "
       "gösterir gibi hafifçe öne tutmuş, dirsekleri gövdeye yakın."),
      "gösterişli, kendinden emin ama kaygılı bir gülümseme; altın diş hafif görünüyor.", "elinde kapalı kadife kutu.",
      "iki elde KAPALI koyu bordo kadife kutu · bordo kadife ceket · boş saat zinciri · zemin açık bej", nesne=True)
konuk(65, "muammer", "ofkeli", "öfkeli", "Bir eli yumruk, göğsünün önünde; öbür kolu gövdesinin yanında, gergin.",
      "öfkeli: kaşları sert çatık, gözleri parlak, ağzı açık bağırıyor, bıyığı gerilmiş, yüzü kızarık.",
      "ağız açık, kaşlar çatık, yumruk göğüste.", "öfkeli yüz · yumruk göğüste · bordo kadife ceket · zemin açık bej")
konuk(66, "nedim", "alayci", "alaycı",
      "Bir eli bastonunun gümüş başında, baston yere dayalı; öbür eli fularının düğümünde, dirseği gövdeye yakın.",
      "alaycı, kendinden emin, üstten bakan: tek kaşı kalkık, dudaklarında ince, iğneleyici bir gülümseme.",
      "tek kaş kalkık, iğneleyici gülümseme, eli fularda.", "alaycı yüz · el bastonda ve fularda · beyaz at kuyruğu, keçi sakalı · zemin açık bej",
      nesne=True)
konuk(67, "nedim", "baston", "bastonuyla gösteriyor",
      ("Bastonunu gümüş başından tutmuş, ucunu kadrajın soluna ve aşağıya doğru uzatmış (baston göğüs hizasından çapraz iniyor, "
       "kadrajın içinde); öbür kolu gövdesinin yanında."),
      "sakin, kendinden emin, hafif alaycı: \"dinleyin bakalım\"; dudaklarında ince bir gülümseme.",
      "baston çapraz uzatılmış, bir yeri gösteriyor.", "baston ucu kadrajın soluna uzatılmış, kadrajın içinde · zemin açık bej", nesne=True)
konuk(68, "selim", "gergin", "gergin (eli göğsünde)",
      "Bir eli ceketinin (pardösüsünün) göğsüne, iç cebinin üstüne sıkıca bastırılmış; öbür kolu gövdesinin yanında, gergin.",
      "gergin, korkmuş: gözleri iri ve tedirgin, kaşları yukarıda, dudakları sıkılı, alnında ter.",
      "eli göğüste sıkıca bastırılmış, gözler tedirgin.", "tedirgin yüz · el pardösünün göğsünde, iç cebin üstünde · zemin açık bej")
konuk(69, "selim", "itiraf", "itiraf (yıkılmış)", ONDE,
      "yıkılmış, itiraf eden: omuzları çökük, gözleri nemli ve yorgun, kaşları yukarı ve ortada birleşik, dudakları titrek.",
      "omuzlar çökük, gözler nemli, eller önde.", "yıkılmış yüz · eller önde (kavuşmuyor) · pardösü · zemin açık bej")
konuk(70, "selim", "sandalye", "sandalye bacağı yapıştırıyor",
      ("İki eli göğsünün önünde, bel hizasında: bir eliyle eski, ahşap, tornalı bir SANDALYE BACAĞI tutuyor, öbür eliyle ucuna küçük "
       "bir fırçayla TUTKAL sürüyor; dirsekleri gövdeye yakın. Pardösü YOK (dükkânda): eski kahverengi hırka ve açık renk gömlek."),
      "işine dalmış, başını kaldırmıyor; sessiz, yorgun, biraz küskün.", "elinde sandalye bacağı ve tutkal fırçası, gözler işte, pardösüsüz.",
      "elde tornalı ahşap sandalye bacağı ve küçük tutkal fırçası · PARDÖSÜ YOK, kahverengi hırka · gözler işte · zemin açık bej",
      nesne=True, bakis=BAKIS_ASAGI)
konuk(71, "simitci", "ofkeli", "öfkeli (parasını ver!)",
      "Başında simit tablası (temeldeki gibi), bir eli tablanın kenarında; öbür eli yumruk, göğsünün önünde.",
      "öfkeli, sabırsız: kaşları çatık, ağzı açık bağırıyor, yanakları kızarık.", "ağız açık bağırıyor, kaşlar çatık; bir eli yumruk.",
      "öfkeli yüz · başta simit tablası (temeldeki gibi) · bir el yumruk · zemin açık bej", nesne=True)
konuk(72, "simitci", "tabla", "tablasından simit uzatıyor",
      ("Başında simit tablası (temeldeki gibi), bir eli tablanın kenarında; öbür eliyle tabladan aldığı bir SİMİDİ kadrajın soluna doğru "
       "uzatıyor (kol hafif öne, ama el kadrajın İÇİNDE)."),
      "canlı, satış yapan bir esnaf gülümsemesi.", "bir elde uzatılan simit.",
      "başta simit tablası · bir elde kadrajın soluna uzatılan simit, el kadrajın içinde · zemin açık bej", nesne=True)
