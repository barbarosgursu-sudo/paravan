# V8 Parti 3a istemleri (ifade figürleri, G39–G81) — tek kaynaktan; kalıplar V7 uret_istem_parti3a.py'den (ISTEM-11, ISTEM-14,
# ISTEM-19, ISTEM-20, ISTEM-51). Yalnız satırların istediği ifadeler (SATIR-35; satir_resim.md). 26 Kasım 2026, Oğuz Bey'in
# bilgisayarı. Çalıştır: py -I uret_istem_parti3a.py
import re, os, sys
V8 = os.path.dirname(os.path.abspath(__file__))
SR = open(os.path.join(V8, "satir_resim.md"), encoding="utf-8").read()


def satirlar(anahtar):
    m = re.search(r"^### " + re.escape(anahtar) + r" \(\d+ satır\)\n(.*?)(?=^### |^## |\Z)", SR, re.S | re.M)
    if not m:
        sys.exit("satır yok: " + anahtar)
    return m.group(1).strip()


YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
ORAN_F = "Görselin oranı TAM 4:5, dikey (1122×1402)."
BAKIS = ("Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay "
         "bakıyor; yukarı, aşağı ya da kameraya değil. Profil değil: uzaktaki göz de açıkça görünüyor.")
SAC = "Saçın dış çizgisi toplu ve net: arka plana taşan ince tek teller, havada kıvrılan uçlar yok."
PERI_CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
KOL = ("Kollar ve eller gövdenin dış çizgisinin içinde kalıyor: hiçbir el yana ya da öne uzanmıyor, kollar kavuşmuyor "
       "(oyunda yanındaki kişiye değer).")
KART = "Kart YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartın çizim tarzını, ışığını, yüzünü ve pozunu ALMA."
SATIRBAS = ("`arac_satir_resim.js` (25 Kasım 2026, V8 beş kapı yolu: 0 sifre dogru · 1 studyo dogru · 2 iptal zayif · "
            "3 cozmez8 nevzat · 0 cozmez8 fikret). Codex bu bölümü istem metnine katmaz.")


def kadraj(zemin):
    return ("Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince "
            f"bir boşluk. Arka plan: düz, tek renk {zemin}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş "
            "tek renk gibi); hiçbir nesne yok.")


def yaz(n, baslik, ust, refs, anahtar, kontrol, govde):
    out = [f"# G{n} — {baslik}", ""] + ust + ["", "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    out += ["", "## Satırlar", "", SATIRBAS, "", satirlar(anahtar)]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(os.path.join(V8, "prompts", f"G{n}.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(out))
    print("yazıldı", n, anahtar)


R = "../referanslar/"
GOVDE_K = (R + "tarz_govde_kadin.jpg", "YALNIZ ölçek ve kadraj (başı silik)")

# ---------------------------------------------------------------- Peri
PERI = {
    "manto8": dict(
        bas=("referanslar/peri_manto8_bas.png", "Peri'nin başı (onaylı G26'nın baş kırpığı; G26 dekolteli, bütün hâli verilmez)"),
        kart=("onayli/G1.png", "Peri'nin kıyafet kartı (kırmızı manto): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
        zemin="açık bej", sac="açık, omuzlarına dökülen iri, yumuşak dalgalar", taki="küçük altın halka küpeler",
        kiy=("kart referansındaki kıyafet, aynen: kırmızı yün kruvaze manto, çentikli geniş yaka, düğmesiz, kuşak ÇÖZÜK, iki ucu "
             "yanlardan gevşekçe sarkıyor, manto önden açık; altında krem saten bluz, dar siyah kalem etek. Kartta görünmeyen: bluzun "
             "V yakası DERİN, dekoltesi belirgin. Ayaklarında kırmızı stiletto, çorap yok (bu kadrajda görünmez).")),
    "kilik": dict(
        bas=("referanslar/peri_kilik_bas.png", "Peri'nin başı, kep ve gözlükle (onaylı G27'nin baş kırpığı; G27 dekolteli, bütün hâli verilmez)"),
        kart=("onayli/G2.png", "Peri'nin kıyafet kartı (aşçı yardımcısı kılığı): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
        zemin="gri-mavi", sac="açık, dalgalı, omuzlara dökülüyor; başında küçük, düz, beyaz bir aşçı KEPİ",
        taki="küçük altın halka küpeler; İRİ, kalın siyah çerçeveli gözlük burnunun EN UCUNDA, gözler gözlüğün ÜSTÜNDEN çıplak ve açıkça görünüyor",
        kiy=("kart referansındaki kıyafet, aynen: krem saten bluz, üstünde göğsü örten, beline sıkıca bağlı BEYAZ şef önlüğü, dar "
             "siyah kalem etek; manto YOK. Kartta görünmeyen: bluzun V yakası önlüğün üst kenarının üstünden DERİN, dekoltesi "
             "belirgin. Ayaklarında kırmızı stiletto, çorap yok (bu kadrajda görünmez).")),
    "onluk8": dict(
        bas=(R + "peri_bas.jpg", "Peri'nin yüzü (yalnız yüz; kep ve gözlük YOK)"),
        kart=("onayli/G2.png", "Peri'nin kıyafet kartı (aşçı yardımcısı kılığı): YALNIZ önlüğün, bluzun ve eteğin kesimi; kartın kepi ve gözlüğü bu hâlde YOK"),
        zemin="gri-mavi", sac="AÇIK, dalgalı, omuzlara dökülüyor; KEP YOK",
        taki="küçük altın halka küpeler; GÖZLÜK YOK",
        kiy=("kart referansındaki kılık, ama kep ve gözlük ÇIKARILMIŞ: krem saten bluz, üstünde göğsü örten, beline sıkıca bağlı "
             "BEYAZ şef önlüğü, dar siyah kalem etek; manto YOK, kep YOK, gözlük YOK. Kartta görünmeyen: bluzun V yakası önlüğün üst "
             "kenarının üstünden DERİN, dekoltesi belirgin. Ayaklarında kırmızı stiletto, çorap yok (bu kadrajda görünmez).")),
    "manto8_son": dict(
        bas=("referanslar/peri_manto8_bas.png", "Peri'nin başı (onaylı G26'nın baş kırpığı; G26 dekolteli, bütün hâli verilmez)"),
        kart=("onayli/G1.png", "Peri'nin kıyafet kartı (kırmızı manto): YALNIZ mantonun kesimi ve rengi; bu hâlde manto OMUZLARINDA"),
        zemin="açık bej", sac="açık, dalgalı ama biraz dağınık; saçının uçlarında ve bir yanında koyu kırmızı VİŞNE REÇELİ kalıntıları",
        taki="küçük altın halka küpeler",
        kiy=("bir kovalamacadan sonra, yüzü yıkanmış ve TEMİZ: önlük YOK; krem saten bluz ve dar siyah kalem etek; kartın kırmızı "
             "mantosu kollarına GEÇİRİLMEMİŞ, OMUZLARINA atılmış, önden açık, kuşağı çözük ve iki yandan sarkıyor. Bluzun eteğinde "
             "ve kollarında birkaç küçük koyu kırmızı reçel lekesi kalmış. Bluzun V yakası DERİN, dekoltesi belirgin. Ayaklarında "
             "kırmızı stiletto, çorap yok (bu kadrajda görünmez).")),
}


def peri(n, set_, ifade_key, baslik, poz, ifade, ayiran, kontrol, ek=None):
    p = PERI[set_]
    ust = [f"- tür: figür · anahtar: `peri.{set_}.{ifade_key}`",
           f"- önce hazır olmalı: {p['kart'][0].split('/')[1][:-4]} (kart), `{p['bas'][0]}` (hazır)",
           f"- zemin: {p['zemin']} (`zemin.tsv`)"]
    refs = [p["bas"], GOVDE_K, p["kart"]]
    govde = [
        ("Birinci referans Peri'nin başıdır: aynı yüz, aynı kızıl-kahve saç, ela-yeşil gözler, kırmızı ruj. İkinci referans YALNIZ "
         f"ölçek ve kadraj içindir (başı bilerek silindi); oradaki kıyafeti ve pozu alma. Düz {p['zemin']} arka plan. Çizim tarzı "
         "boyalı, sıcak, dokulu; onaylı Peri resimleri gibi."),
        "Üçüncü referans kıyafet kartıdır: kıyafet kart nasılsa öyle. " + KART,
        f"Peri'nin kıyafeti: {p['kiy']} Saçı {p['sac']}. Takıları: {p['taki']}.",
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL}",
        BAKIS, f"İfade: {ifade}",
        f"Bu ifadeyi peri.{set_}.normal'den ayıran: {ayiran}" if ifade_key != "normal" else "",
        ek or "", PERI_CEK, SAC, kadraj(p["zemin"]), YAZI, ORAN_F]
    yaz(n, f"Peri, {set_}, {baslik}", ust, refs, f"peri.{set_}.{ifade_key}", kontrol, govde)


# ---------------------------------------------------------------- Cengo
CENGO = {
    "sofor": dict(temel="G28", kart="G3",
                  kiy=("Kıyafet: kart referansındaki şoför üniforması, aynen: koyu lacivert, iki sıra düğmeli, dik yakalı ceket, ona bir "
                       "beden DAR; aynı renk pantolon; başında siyah siperli lacivert şoför KASKETİ; ellerinde BEYAZ pamuk eldiven.")),
    "sofor_dugmesiz": dict(temel="G28", kart="G3",
                           kiy=("Kıyafet: kart referansındaki şoför üniforması, ama bir kovalamacadan sonra: ceketin İKİ SIRA düğmesinden "
                                "BİRİ KOPMUŞ, o yerde boş bir ilik ve sarkan iplik; ceket bir beden dar, gergin, hafif buruşuk; BEYAZ "
                                "eldivenlerin parmak uçlarında küçük koyu kırmızı reçel lekeleri; KASKET yerinde ama biraz yamuk.")),
    "ceket8": dict(temel="G29", kart="G4",
                   kiy=("Kıyafet: kart referansındaki kıyafet, aynen: eskimiş kahve rengi süet ceket, düğmeleri açık, kolları dirseğe "
                        "kadar kıvrık; altında yakası açık krem gömlek; koyu gri-lacivert kot pantolon.")),
}


def cengo(n, set_, ifade_key, baslik, poz, ifade, ayiran, kontrol):
    c = CENGO[set_]
    ust = [f"- tür: figür · anahtar: `cengo.{set_}.{ifade_key}`", f"- önce hazır olmalı: {c['temel']}, {c['kart']} (onaylı)",
           "- zemin: açık bej (`zemin.tsv`). Bileklik SOL bilekte = kameraya bakınca kadrajın SAĞ tarafında (KAR-24)."]
    refs = [(f"onayli/{c['temel']}.png", f"Cengo temel figürü (onaylı {c['temel']})"),
            (f"onayli/{c['kart']}.png", "kıyafet kartı: YALNIZ kıyafetin kesimi ve rengi; kartın çizim tarzı, yüzü, pozu alınmaz")]
    govde = [
        ("Birinci referans görseldeki adamın (Cengo) AYNISI: aynı yüz, saç, sakal, kıyafet ve bileklik; aynı çizim tarzı, aynı düz "
         "açık bej arka plan, aynı ölçek ve kadraj. İkinci referans kıyafet kartıdır: " + KART + " Değişen yalnız poz ve ifade"
         + (" ve kıyafetin kovalamacadan sonraki hâli." if set_ == "sofor_dugmesiz" else ".")),
        c["kiy"] + (" Ceketin göğüs cebinden ince bir telin ucu görünüyor. Kadrajın SAĞ tarafında kalan bileğinde renkli boncuklu, "
                    "ucuz, çocuk işi bileklik. Saçı koyu, siyaha yakın ve dağınık."),
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL} Elleri boş.",
        BAKIS, f"İfade: {ifade}", f"Bu ifadeyi cengo.{'sofor' if set_ == 'sofor_dugmesiz' else set_}.normal'den ayıran: {ayiran}",
        SAC, kadraj("açık bej"), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"Cengo, {set_}, {baslik}", ust, refs, f"cengo.{set_}.{ifade_key}", kontrol, govde)


# ---------------------------------------------------------------- konuklar (varyant: ISTEM-14)
KONUK = {"bahar": ("Bahar Hanım", "G6", "açık bej", "sasirmis"), "tarkan": ("Tarkan", "G7", "açık bej", "normal"),
         "nevzat": ("Nevzat Bey", "G8", "açık bej", "normal"), "fikret": ("Fikret Usta", "G9", "açık bej", "huysuz"),
         "emir": ("Emir", "G11", "açık bej", "normal"), "pinar": ("Pınar", "G12", "açık bej", "normal"),
         "yusuf": ("Yusuf Efendi", "G13", "açık bej", "normal")}


def konuk(n, kim, ifade_key, baslik, poz, ifade, ayiran, kontrol, nesne=False, ek=""):
    ad, tem, zemin, temel_ifade = KONUK[kim]
    ust = [f"- tür: figür · anahtar: `{kim}.{ifade_key}`", f"- önce hazır olmalı: {tem} (onaylı temel)", f"- zemin: {zemin} (`zemin.tsv`)"]
    refs = [(f"onayli/{tem}.png", f"{ad} temel figürü (onaylı {tem})")]
    eller = "" if nesne else " Elleri boş."
    govde = [
        (f"Birinci referans görseldeki kişinin ({ad}) AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı ölçek ve "
         f"kadraj. Arka plan düz {zemin}. Değişen yalnız poz ve ifade."),
        ek,
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL}{eller}",
        BAKIS, f"İfade: {ifade}", f"Bu ifadeyi {kim}.{temel_ifade}'den ayıran: {ayiran}",
        SAC, kadraj(zemin), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"{ad}, {baslik}", ust, refs, f"{kim}.{ifade_key}", kontrol, govde)


# ================================================================ liste
EL_BEL = "Bir eli belinde; öbür kolu gövdesinin yanında, eli gevşek."
CENE = "Bir elinin parmak uçları çenesinin altında, dirseği gövdesine yakın; öbür kolu gövdesinin yanında."
GOGUS = "Bir eli göğsünün üstünde, dekoltenin hemen üstünde açık parmaklarla duruyor; öbür kolu gövdesinin yanında."
ONDE = "İki kolu gövdesinin önünde aşağıda, elleri belinin önünde hafifçe birbirine değiyor (kavuşmuyor); omuzları hafif düşük."
KAS = ("tek kaşı belirgin biçimde kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda: \"ciddi misin?\" Takılan, "
       "iğneleyici ama sevimli. Ağzı kapalı.")
MERAK = "meraklı, dikkatle dinliyor; kaşları hafif yukarıda, başı azıcık yana eğik, gözler canlı. Dudakları kapalı."
SINIR = "kızgın: kaşları çatık, gözleri kısık, çenesi sıkılı, dudakları ince bir çizgi; bağırmıyor ama öfkesi belli."
UTAN = ("mahcup, biraz bozulmuş: gözleri hafif aşağıda ama kadrajın soluna, dudakları kapalı ve hafif büzük, yanakları hafif "
        "kızarık. Yenik değil, sevimli.")
YUMUSAK = "yumuşak, sıcak, duygulanmış: gözleri nemli ve sevecen, dudaklarında küçük, içten bir gülümseme; kaşları hafif yukarıda."

# Peri, manto8
peri(39, "manto8", "kas", "kaşı kalkık", EL_BEL, KAS, "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · manto kart gibi (kuşak çözük, düğmesiz, çentikli yaka) · dekolte derin · eller BOŞ · saç açık · zemin açık bej")
peri(40, "manto8", "merakli", "meraklı, soruyor", CENE, MERAK, "başı yana eğik, kaşlar meraklı, parmak uçları çenede; alay yok.",
     "parmak uçları çenede, dirsek gövdeye yakın · meraklı yüz, ağız kapalı · eller BOŞ · zemin açık bej")
peri(41, "manto8", "sevincli", "sevinçli (biri onu tanıdı)",
     "Bir eli hafifçe saçına dokunuyor (dirseği gövdeye yakın, kadrajın dışına çıkmıyor), öbür kolu gövdesinin yanında.",
     "içten, parlak, gururlu bir sevinç; geniş, dişleri görünen bir gülümseme, gözleri parlıyor: \"sonunda biri tanıdı!\"",
     "geniş, dişleri görünen gülümseme; bir eli saçında.",
     "geniş gülümseme · bir el saçta, dirsek gövdeye yakın · eller BOŞ · zemin açık bej")
peri(42, "manto8", "sinirli", "sinirli", "İki eli belinde, dirsekleri hafifçe dışa açık ama gövdenin hizasında.", SINIR,
     "kaşlar çatık, çene sıkılı, iki eli belinde; gülümseme yok.",
     "kaşlar çatık, ağız kapalı · iki el belde · eller BOŞ · zemin açık bej")
# Peri, kilik
peri(43, "kilik", "kas", "kaşı kalkık", EL_BEL, KAS, "kaş belirgin kalkık (gözlüğün üstünden), gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık, gözler gözlüğün ÜSTÜNDEN · kep, önlük kart gibi · gözlük burnun ucunda · eller BOŞ · zemin gri-mavi")
peri(44, "kilik", "merakli", "meraklı, soruyor", CENE, MERAK + " Gözlüğün üstünden bakıyor.",
     "başı yana eğik, kaşlar meraklı, parmak uçları çenede; alay yok.",
     "parmak uçları çenede · meraklı yüz, gözler gözlüğün üstünden · kep, önlük · eller BOŞ · zemin gri-mavi")
peri(45, "kilik", "utanmis", "mahcup (kamera önünde ağlamış)", ONDE,
     UTAN + " Gözleri soğan doğradığı için hafif kızarık ve nemli, ama gözyaşı akmıyor.",
     "omuzlar düşük, bakış hafif aşağı, dudak büzük, gözler nemli; eller önde birleşiyor.",
     "mahcup yüz, gözler hafif nemli · eller önde (kavuşmuyor) · kep, önlük, gözlük burnun ucunda · eller BOŞ · zemin gri-mavi")
peri(46, "kilik", "yumusak", "yumuşak", "Bir eli önlüğün göğüs kenarında, parmakları gevşek; öbür kolu gövdesinin yanında.", YUMUSAK,
     "gözler sevecen ve nemli, küçük içten gülümseme; alay yok.",
     "yumuşak, sıcak yüz · bir el önlüğün göğüs kenarında · kep, önlük · eller BOŞ · zemin gri-mavi")
# Peri, onluk8 (kep ve gözlük çıkarılmış)
peri(47, "onluk8", "normal", "önlükle, kep ve gözlük yok (bu hâlin temeli)",
     "Bir eli belinde, önlüğün bağının hizasında; öbür kolu gövdesinin yanında, eli gevşek.",
     "kendinden emin, kararlı; gerçeği söylemeye hazır bir dedektif; dudaklarında belli belirsiz bir gülümseme.", "",
     "KEP YOK, GÖZLÜK YOK, saç açık · beyaz önlük beline sıkı bağlı · krem saten bluz, V yaka derin · eller BOŞ · zemin gri-mavi",
     ek="Bu hâlin temelidir: kas, sinirli, utanmis ifadeleri aynı kıyafetle çizilecek.")
peri(48, "onluk8", "kas", "kaşı kalkık", EL_BEL, KAS, "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · KEP ve GÖZLÜK YOK · önlük · eller BOŞ · zemin gri-mavi")
peri(49, "onluk8", "sinirli", "sinirli (adını duydu)", "İki eli belinde, dirsekleri hafifçe dışa açık ama gövdenin hizasında.",
     SINIR + " Biraz da şaşkın: adını beklemediği birinden duymuş.", "kaşlar çatık, gözler kısık, iki eli belinde.",
     "kaşlar çatık · iki el belde · KEP ve GÖZLÜK YOK · önlük · eller BOŞ · zemin gri-mavi")
peri(50, "onluk8", "utanmis", "mahcup (zayıf kanıt)", ONDE, UTAN, "omuzlar düşük, bakış hafif aşağı, dudak büzük; eller önde birleşiyor.",
     "mahcup yüz · eller önde (kavuşmuyor) · KEP ve GÖZLÜK YOK · önlük · eller BOŞ · zemin gri-mavi")
# Peri, manto8_son (temizlenmiş, manto omzunda, saçta reçel)
peri(51, "manto8_son", "normal", "manto omzunda, saçta reçel (bu hâlin temeli)",
     "İki eli mantonun iki yakasını omuzlarının üstünde, göğsünün hizasında hafifçe tutuyor; dirsekleri gövdeye yakın.",
     "yorgun ama gururlu, sakin; dudaklarında belli belirsiz bir gülümseme.", "",
     "önlük YOK · manto kollara geçirilmemiş, OMUZLARDA, kuşak çözük · saçta reçel kalıntısı · yüz TEMİZ · bluzda küçük reçel lekeleri · zemin açık bej",
     ek="Bu hâlin temelidir: kas, sinirli, utanmis, yumusak ifadeleri aynı hâlde çizilecek.")
peri(52, "manto8_son", "kas", "kaşı kalkık",
     "Bir eli belinde; öbür eli mantonun yakasını omzunun üstünde tutuyor, dirseği gövdeye yakın.", KAS,
     "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · manto omuzlarda · saçta reçel · eller BOŞ · zemin açık bej")
peri(53, "manto8_son", "sinirli", "sinirli",
     "İki eli mantonun iki yakasını göğsünün önünde sıkıca tutuyor, dirsekleri gövdeye yakın.",
     SINIR, "kaşlar çatık, çene sıkılı; eller mantonun yakasını sıkıca tutuyor.",
     "kaşlar çatık · eller mantoyu göğüste sıkı tutuyor · saçta reçel · zemin açık bej")
peri(54, "manto8_son", "utanmis", "mahcup", ONDE, UTAN, "omuzlar düşük, bakış hafif aşağı, dudak büzük; eller önde.",
     "mahcup yüz · eller önde (kavuşmuyor) · manto omuzlarda · saçta reçel · zemin açık bej")
peri(55, "manto8_son", "yumusak", "yumuşak",
     "Bir eli mantonun yakasını omzunun üstünde, yanağına yakın tutuyor; öbür kolu gövdesinin yanında.", YUMUSAK,
     "gözler sevecen ve nemli, küçük içten gülümseme; mantoyu yanağına yakın tutuyor.",
     "yumuşak yüz · manto yakası yanağa yakın · saçta reçel · zemin açık bej")
# Cengo, sofor
cengo(56, "sofor", "gulen", "gülen", "Eldivenli bir eli kasketinin siperini hafifçe yukarı itiyor; öbür kolu gövdesinin yanında.",
      "geniş, sıcak, dişleri görünen bir gülümseme; gözleri kısılmış, keyifli.", "dişleri görünen geniş gülümseme, kasket hafif geride.",
      "geniş gülümseme · kasket, eldiven, dar ceket · tel, bileklik · zemin açık bej")
cengo(57, "sofor", "kas", "kaşı kalkık", "Bir eli pantolon cebinde; öbür kolu gövdesinin yanında, eldivenli eli gevşek.",
      "tek kaşı kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda; takılan, hınzır.",
      "tek kaş belirgin kalkık, gülümseme tek taraflı.", "kaş kalkık · kasket, eldiven · tel, bileklik · zemin açık bej")
cengo(58, "sofor", "yumusak", "yumuşak", "Eldivenli bir eli göğsünün önünde, kasketini çıkarmış gibi değil, ceketinin düğmesine dokunuyor; öbür kolu yanında.",
      "yumuşak, sevecen, biraz mahcup; gözleri sıcak, küçük içten bir gülümseme.", "gözler sıcak, gülümseme küçük ve içten; alay yok.",
      "yumuşak yüz · kasket, eldiven · tel, bileklik · zemin açık bej")
# Cengo, sofor_dugmesiz
cengo(59, "sofor_dugmesiz", "kas", "kaşı kalkık (düğmesi kopuk)", "Bir eli belinde; öbür kolu gövdesinin yanında, eldivenli eli gevşek.",
      "tek kaşı kalkık, alaycı ve biraz kırgın bir yarım gülümseme: \"ciddi misin?\"",
      "tek kaş kalkık; ceketin bir düğmesi KOPUK, eldivende reçel lekesi.",
      "BİR DÜĞME KOPUK, boş ilik · eldiven uçlarında reçel · kasket yamuk · tel, bileklik · zemin açık bej")
cengo(60, "sofor_dugmesiz", "yumusak", "yumuşak (düğmesi kopuk)", "Eldivenli bir eli göğsünün önünde, kopuk düğmenin yerinde; öbür kolu yanında.",
      "yumuşak, sevecen; gözleri sıcak, küçük içten bir gülümseme.", "gözler sıcak; eli kopuk düğmenin yerinde.",
      "BİR DÜĞME KOPUK · eldiven uçlarında reçel · yumuşak yüz · tel, bileklik · zemin açık bej")
# Cengo, ceket8
cengo(61, "ceket8", "gulen", "gülen", "Bir eli kot pantolonunun cebinde; öbür eli ensesinde, dirseği gövdeye yakın.",
      "geniş, sıcak, dişleri görünen bir gülümseme; gözleri kısılmış, keyifli.", "dişleri görünen geniş gülümseme; bir eli ensesinde.",
      "geniş gülümseme · süet ceket, kollar kıvrık · tel, bileklik · zemin açık bej")
cengo(62, "ceket8", "kas", "kaşı kalkık", "Bir eli kot pantolonunun cebinde; öbür kolu gövdesinin yanında, eli gevşek.",
      "tek kaşı kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda; takılan, hınzır.",
      "tek kaş belirgin kalkık, gülümseme tek taraflı.", "kaş kalkık · süet ceket · tel, bileklik · zemin açık bej")
cengo(63, "ceket8", "sinirli", "bıkkın, homurdanan", "Kollarını gövdesinin yanında sarkıtmış, omuzları hafif düşük; eller gevşek.",
      "bıkkın, homurdanan: kaşları çatık, dudakları büzük, gözleri yan bakıyor; öfkeli değil, sıkılmış ve kırgın.",
      "kaşlar çatık, dudak büzük, omuzlar düşük; gülümseme yok.", "bıkkın yüz · omuzlar düşük · süet ceket · tel, bileklik · zemin açık bej")
cengo(64, "ceket8", "yumusak", "yumuşak", "Bir eli göğsünün önünde ceketinin yakasında; öbür kolu gövdesinin yanında.",
      "yumuşak, sevecen, biraz mahcup; gözleri sıcak, küçük içten bir gülümseme.", "gözler sıcak, gülümseme küçük ve içten; alay yok.",
      "yumuşak yüz · eli ceket yakasında · tel, bileklik · zemin açık bej")
# Bahar
konuk(65, "bahar", "endiseli", "endişeli", "İki elinin parmakları göğsünün önünde birbirine kenetli, dirsekleri gövdeye yakın.",
      "endişeli: kaşları yukarı ve ortada birbirine yakın, dudakları gergin, gözleri kaygılı; gülümseme yok.",
      "kaşlar kaygılı, parmaklar göğsün önünde kenetli; şaşkınlık değil, kaygı.", "kaygılı yüz · parmaklar kenetli · kaftan · zemin açık bej")
konuk(66, "bahar", "gulen", "gülen (televizyon sıcaklığı)", "Bir eli göğsünün önünde açık, avucu yukarı, sıcak bir \"buyurun\" jesti; öbür kolu yanında.",
      "geniş, sıcak, dişleri görünen bir gülümseme, gamzesi derin; televizyondaki gibi neşeli ve davetkâr.",
      "geniş gülümseme, derin gamze; şaşkınlık yok.", "geniş gülümseme, gamze · bir el açık · kaftan · zemin açık bej")
konuk(67, "bahar", "normal", "normal (anlatıyor)", "Bir eli göğsünün önünde hafifçe açık, anlatır gibi; öbür kolu gövdesinin yanında.",
      "sakin, ciddi, anlatan; dudaklarında hafif bir gülümseme, gözleri dikkatli.", "sakin yüz, kaşlar yerinde, ağız kapalıya yakın; şaşkınlık yok.",
      "sakin yüz · bir el açık · kaftan · zemin açık bej")
konuk(68, "bahar", "sert", "sert", "İki eli belinde, dirsekleri gövdenin hizasında.",
      "sert, kararlı, kırgın: kaşları çatık, dudakları sıkılı, çenesi yukarıda; televizyon gülümsemesi YOK.",
      "kaşlar çatık, çene yukarıda, iki eli belinde.", "sert yüz · iki el belde · kaftan · zemin açık bej")
# Tarkan
konuk(69, "tarkan", "gulen", "gülümseyen (kibar, kaygan)", "Bir eli ceketinin önünü düzeltiyor; öbür eli pantolon cebinde.",
      "kendinden emin, kibar ve kaygan bir gülümseme; dişleri hafif görünüyor, gözleri soğuk ve hesapçı.",
      "dişleri görünen kaygan gülümseme, gözler hesapçı.", "kaygan gülümseme · kel, sarı kaş, kaş izi · siyah takım · zemin açık bej")
konuk(70, "tarkan", "itiraf", "itiraf (yakalanmış, pişman)", "İki kolu gövdesinin önünde aşağıda, elleri birbirine değiyor; omuzları çökük.",
      "yakalanmış ve pişman: kaşları yukarı ve ortada birleşik, gözleri yaşlı ve kaçamak, dudakları titrek; kibri tamamen gitmiş.",
      "omuzlar çökük, gözler yaşlı ve kaçamak; ceketinde reçel lekeleri.",
      "pişman yüz · omuzlar çökük · siyah takımda birkaç koyu kırmızı reçel lekesi · zemin açık bej",
      ek="Kovalamacadan sonra: siyah takım ceketinde ve pantolonunda birkaç koyu kırmızı VİŞNE REÇELİ lekesi, ceket buruşuk.")
konuk(71, "tarkan", "panik", "panik", "Bir eli ceketinin cebinde telefonu arıyor gibi duruyor (telefon görünmüyor); öbür kolu yanında, gergin.",
      "panik: gözleri iri açık, kaşları yukarıda, dudakları aralık, yüzü bembeyaz; kaçmak üzere.",
      "gözler iri, yüz bembeyaz, dudaklar aralık; gülümseme yok.", "panik yüz · bir el cepte · siyah takım · zemin açık bej")
# Nevzat
konuk(72, "nevzat", "gergin", "gergin", "İki eli göğsünün önünde, bir eliyle öbür bileğindeki kolluğu sıkıca tutuyor.",
      "gergin: kaşları çatık ve yukarıda, dudakları ince bir çizgi, alnında hafif ter; gözleri tedirgin.",
      "kaşlar gergin, dudak çizgi, alında ter; gülümseme yok.", "gergin yüz · el kollukta · kolluklar, mavi gömlek · zemin açık bej")
konuk(73, "nevzat", "utangac", "utangaç, kızarmış", "Bir eli ensesinde, başını hafifçe öne eğmiş; öbür kolu gövdesinin yanında.",
      "utangaç ve kızarmış: yanakları ve kulakları belirgin pembe, gözleri kaçamak, aşağıda ama kadrajın soluna; mahcup bir gülümseme.",
      "yanaklar kızarık, bakış kaçamak, bir eli ensede.", "kızarmış yüz · el ensede · kolluklar, mavi gömlek · zemin açık bej")
# Fikret
konuk(74, "fikret", "guler", "güler", "Bir eli göğsünde, öbür kolu gövdesinin yanında.",
      "kocaman, sıcak bir kahkaha: ağzı açık, gözleri kısılmış, çatık kaşları yumuşamış; huysuz ustanın içindeki sıcaklık.",
      "ağız açık kahkaha, kaşlar yumuşak; kollar kavuşmuyor.", "kahkaha · bir el göğüste · keçi sakalı, siyah at kuyruğu · zemin açık bej")
konuk(75, "fikret", "huzunlu", "hüzünlü", "İki kolu gövdesinin yanında sarkık, omuzları düşük.",
      "hüzünlü: kaşları yukarı ve ortada birleşik, gözleri dalgın ve nemli, dudakları aşağı kıvrık; yaşlı bir adamın kırgınlığı.",
      "kaşlar hüzünlü, gözler nemli, omuzlar düşük; çatıklık yok.", "hüzünlü yüz · omuzlar düşük · zemin açık bej")
konuk(76, "fikret", "ofkeli", "öfkeli (bağırıyor)", "Bir eli yumruk, göğsünün önünde; öbür kolu gövdesinin yanında, gergin.",
      "öfkeli ve bağırıyor: ağzı açık, kaşları sert çatık, gözleri parlak, boyun damarları belli.",
      "ağız açık bağırıyor, bir eli yumruk; huysuz değil öfkeli.", "bağıran yüz · yumruk göğüste · zemin açık bej")
# Emir
konuk(77, "emir", "gulen", "gülen (diş teli)", "Bir eli başının arkasında, kıvırcık saçını kaşıyor; öbür kolu yanında.",
      "geniş, saf, dişleri görünen bir gülümseme; DİŞ TELİ açıkça görünüyor; gözleri parlak.",
      "geniş gülümseme, diş teli belli; bir eli başının arkasında.", "geniş gülümseme, diş teli · turuncu yelek · zemin açık bej")
konuk(78, "emir", "sasirmis", "şaşırmış", "İki eli göğsünün önünde, avuçları dışa açık: \"ben mi?\"",
      "şaşırmış: kaşları yukarıda, gözleri iri, ağzı açık; saf bir şaşkınlık.", "gözler iri, ağız açık, avuçlar açık.",
      "şaşkın yüz · avuçlar açık · turuncu yelek · zemin açık bej")
# Pınar
konuk(79, "pinar", "defter", "defterine bakıyor", "İki eliyle göğsünün önünde açık, klipsli bir DEFTER tutuyor (defterin arkası kameraya dönük, düz siyah karton, yazısız; sayfaları kendine dönük, görünmüyor).",
      "dikkatli, işine odaklı; gözlerini defterden kaldırmış, karşısındakine bakıyor; hafif bir gülümseme.",
      "elinde klipsli defter, odaklı yüz.", "klipsli defter, arkası kameraya, yazısız · kulaklık boynunda · zemin açık bej", nesne=True)
konuk(80, "pinar", "telasli", "telaşlı", "Bir eli boynundaki kulaklığı tutuyor, öbür kolu öne değil yanda; vücudu hafifçe öne eğik, koşuşturur gibi.",
      "telaşlı: kaşları yukarıda, gözleri iri ve hızlı, ağzı bir şey söyleyecekmiş gibi açık.",
      "telaşlı yüz, ağız açık, eli kulaklıkta.", "telaşlı yüz · el kulaklıkta · mor at kuyruğu · zemin açık bej")
# Yusuf
konuk(81, "yusuf", "gulen", "gülen", "Kollarını önünde birleştirmiş, elleri karnının hizasında üst üste.",
      "geniş, sevimli, dişsiz denecek bir gülümseme; büyüteç gözlüğün arkasında gözleri kısılmış.",
      "geniş gülümseme, gözler kısık; merak yok, keyif var.", "geniş gülümseme · kambur · kasket, büyüteç gözlük · zemin açık bej")
