# V7 Parti 3a istemleri (ifade figürleri, G31–G62) — tek kaynaktan; kalıplar V6 uret_istem_parti3.py'den (ISTEM-11, ISTEM-14,
# ISTEM-19, ISTEM-20, ISTEM-51). 25 Kasım 2026, Oğuz Bey'in bilgisayarı. Çalıştır: py -I uret_istem_parti3a.py
import re, os, sys
V7 = os.path.dirname(os.path.abspath(__file__))
SR = open(os.path.join(V7, "satir_resim.md"), encoding="utf-8").read()


def satirlar(anahtar):
    m = re.search(r"^### " + re.escape(anahtar) + r" \(\d+ satır\)\n(.*?)(?=^### |\Z)", SR, re.S | re.M)
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
SATIRBAS = ("`arac_satir_resim.js` (25 Kasım 2026, V7 beş yol: 0 el dogru · 1 izmir dogru · 2 tuval zayif · 3 cozmez7 sukru · "
            "0 cozmez7 vedat). Codex bu bölümü istem metnine katmaz.")


def kadraj(zemin):
    return ("Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince "
            f"bir boşluk. Arka plan: düz, tek renk {zemin}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş "
            "tek renk gibi); hiçbir nesne yok.")


def yaz(n, baslik, ust, refs, anahtar, kontrol, govde):
    out = [f"# G{n} — {baslik}", ""] + ust + ["", "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    out += ["", "## Satırlar", "", SATIRBAS, "", satirlar(anahtar)]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(os.path.join(V7, "prompts", f"G{n}.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(out))
    print("yazıldı", n, anahtar)


R = "../referanslar/"
GOVDE_K = (R + "tarz_govde_kadin.jpg", "YALNIZ ölçek ve kadraj (başı silik)")

# ---------------------------------------------------------------- Peri
PERI = {
    "kadife7": dict(bas=("referanslar/peri_kadife7_bas.png", "Peri'nin başı (onaylı G21'in baş kırpığı; G21 dekolteli, bütün hâli verilmez)"),
                    kart=("onayli/G1.png", "Peri'nin kıyafet kartı (kadife): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
                    temel="G21", sac="gevşek bir topuz, yüzünün iki yanına birer tutam düşüyor",
                    takı="küçük altın küpeler",
                    kiy=("kart referansındaki kıyafet, aynen: bordo kadife dar kalem etek, eteğin içine sokulmuş krem ince triko. "
                         "Kartta görünmeyen: trikonun V yakası DERİN, dekoltesi belirgin. Ayaklarında kırmızı stiletto (bu kadrajda görünmez).")),
    "gala": dict(bas=("referanslar/peri_gala_bas.png", "Peri'nin başı (onaylı G22'nin baş kırpığı; G22 dekolteli, bütün hâli verilmez)"),
                 kart=("onayli/G2.png", "Peri'nin kıyafet kartı (gala): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
                 temel="G22", sac="ensede zarif bir topuz, yüzünün iki yanına birer ince tutam düşüyor",
                 takı="ince zincirde tek taş küçük pırlanta kolye, küçük pırlanta küpeler",
                 kiy=("kart referansındaki gece mavisi saten elbise, aynen: ona bir beden küçük, vücudunu sıkıca sarıyor; ince askılar. "
                      "Kartta görünmeyen: V yakası DERİN, dekoltesi belirgin. İki kolunda DİRSEĞİ GEÇEN siyah SATEN eldivenler (parlak "
                      "saten; deri değil). Ayaklarında siyah stiletto (bu kadrajda görünmez).")),
    "altin_temiz": dict(bas=("referanslar/peri_gala_bas.png", "Peri'nin başı (onaylı G22'nin baş kırpığı; G22 dekolteli, bütün hâli verilmez)"),
                        kart=("onayli/G2.png", "Peri'nin kıyafet kartı (gala): YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz"),
                        temel="G39", sac="ensede topuz ama biraz dağılmış, birkaç tutam serbest",
                        takı="ince zincirde tek taş küçük pırlanta kolye, küçük pırlanta küpeler",
                        kiy=("kart referansındaki gece mavisi saten elbise (ona dar, ince askılar; V yakası DERİN, dekoltesi belirgin), ama "
                             "bir felaketten sonra: elbisenin bütün yüzeyi ince altın YALDIZ tozu ve vernikle PIRIL PIRIL, mavi kumaşın "
                             "üstünde altın bir parıltı; yüzü ve kolları TEMİZ, silinmiş; ELDİVEN YOK, çıplak kollar ve eller; sol "
                             "kulağının arkasında küçük bir altın yaldız lekesi kalmış. Ayaklarında siyah stiletto (bu kadrajda görünmez).")),
}


def peri(n, set_, ifade_key, baslik, poz, ifade, ayiran, kontrol, ek=None):
    p = PERI[set_]
    once = f"{p['temel'] if set_ == 'altin_temiz' else 'G' + p['kart'][0][-6:-4].lstrip('G')} ve baş kırpığı"
    ust = [f"- tür: figür · anahtar: `peri.{set_}.{ifade_key}`",
           f"- önce hazır olmalı: {p['kart'][0].split('/')[1][:-4]} (kart), `{p['bas'][0]}` (hazır)" + (", G39 (temiz hâlin temeli)" if set_ == "altin_temiz" and ifade_key != "normal" else ""),
           "- zemin: açık bej (`zemin.tsv`)"]
    refs = [p["bas"], GOVDE_K, p["kart"]]
    if set_ == "altin_temiz" and ifade_key != "normal":
        refs.append(("onayli/G39.png", "temizlenmiş hâlin onaylı temeli: YALNIZ elbisenin altın parıltısı ve eldivensiz kollar; yüzü buradan alma"))
    govde = [
        ("Birinci referans Peri'nin başıdır: aynı yüz, aynı kızıl-kahve saç, ela-yeşil gözler, kırmızı ruj. İkinci referans YALNIZ "
         "ölçek ve kadraj içindir (başı bilerek silindi); oradaki kıyafeti ve pozu alma. Düz açık bej arka plan. Çizim tarzı boyalı, "
         "sıcak, dokulu; onaylı Peri resimleri gibi."),
        "Üçüncü referans kıyafet kartıdır: kıyafet kart nasılsa öyle. " + KART
        + (" Dördüncü referans aynı hâlin onaylı temelidir: elbisenin parıltısı ve eldivensiz kollar onun gibi." if len(refs) == 4 else ""),
        f"Peri'nin kıyafeti: {p['kiy']} Saçı {p['sac']}. Takıları: {p['takı']}.",
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL}",
        BAKIS, f"İfade: {ifade}",
        f"Bu ifadeyi peri.{set_}.normal'den ayıran: {ayiran}" if ifade_key != "normal" else "",
        ek or "", PERI_CEK, SAC, kadraj("açık bej"), YAZI, ORAN_F]
    yaz(n, f"Peri, {set_}, {baslik}", ust, refs, f"peri.{set_}.{ifade_key}", kontrol, govde)


# ---------------------------------------------------------------- Cengo
def cengo(n, ifade_key, baslik, poz, ifade, ayiran, kontrol):
    ust = [f"- tür: figür · anahtar: `cengo.smokin.{ifade_key}`", "- önce hazır olmalı: G23, G3 (onaylı)",
           "- zemin: açık bej (`zemin.tsv`). Bileklik SOL bilekte = kameraya bakınca kadrajın SAĞ tarafında (KAR-24)."]
    refs = [("onayli/G23.png", "Cengo smokin temel figürü (onaylı)"),
            ("onayli/G3.png", "kıyafet kartı (smokin): YALNIZ kıyafetin kesimi ve rengi; kartın çizim tarzı, yüzü, pozu alınmaz")]
    govde = [
        ("Birinci referans görseldeki adamın (Cengo) AYNISI: aynı yüz, saç, sakal, kıyafet ve bileklik; aynı çizim tarzı, aynı düz "
         "açık bej arka plan, aynı ölçek ve kadraj. İkinci referans kıyafet kartıdır: " + KART + " Değişen yalnız poz ve ifade."),
        ("Kıyafet: kart referansındaki kiralık siyah smokin, ona bir beden büyük, kolları uzun; beyaz smokin gömleği; siyah papyon "
         "YAMUK, bir yana kaymış. Smokin ceketinin göğüs cebinden ince bir telin ucu görünüyor. Kadrajın SAĞ tarafında kalan "
         "bileğinde renkli boncuklu, ucuz, çocuk işi bileklik. Saçı koyu, siyaha yakın ve dağınık."),
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL} Elleri boş.",
        BAKIS, f"İfade: {ifade}", f"Bu ifadeyi cengo.smokin.normal'den ayıran: {ayiran}",
        SAC, kadraj("açık bej"), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"Cengo, smokin, {baslik}", ust, refs, f"cengo.smokin.{ifade_key}", kontrol, govde)


# ---------------------------------------------------------------- konuklar ve Gizem (varyant: ISTEM-14)
KONUK = {"suheyla": ("Süheyla Hanım", "G4", "açık bej"), "nesrin": ("Nesrin Hanım", "G5", "açık bej"),
         "sukru": ("Şükrü Bey", "G6", "açık bej"), "vedat": ("Vedat Bey", "G7", "açık bej"),
         "kaan": ("Kaan", "G8", "açık bej"), "ercan": ("Ercan", "G9", "gri-mavi"), "necmi": ("Necmi", "G10", "açık bej")}


def konuk(n, kim, ifade_key, baslik, poz, ifade, ayiran, kontrol, nesne=False):
    ad, tem, zemin = KONUK[kim]
    ust = [f"- tür: figür · anahtar: `{kim}.{ifade_key}`", f"- önce hazır olmalı: {tem} (onaylı temel)", f"- zemin: {zemin} (`zemin.tsv`)"]
    refs = [(f"onayli/{tem}.png", f"{ad} temel figürü (onaylı {tem})")]
    eller = "" if nesne else " Elleri boş."
    govde = [
        (f"Birinci referans görseldeki kişinin ({ad}) AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı düz "
         f"{zemin} arka plan, aynı ölçek ve kadraj. Değişen yalnız poz ve ifade."),
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL}{eller}",
        BAKIS, f"İfade: {ifade}", f"Bu ifadeyi {kim}.{'sakaci' if kim == 'vedat' else 'normal'}'den ayıran: {ayiran}",
        SAC, kadraj(zemin), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"{ad}, {baslik}", ust, refs, f"{kim}.{ifade_key}", kontrol, govde)


def gizem(n, ifade_key, baslik, poz, ifade, ayiran, kontrol, nesne=False):
    ust = [f"- tür: figür · anahtar: `gizem.{ifade_key}`",
           "- önce hazır olmalı: V6 G23 (gizem.triko_telefon, onaylı), V6 G22 (Gizem triko kartı)",
           "- zemin: açık bej (`zemin.tsv`). Gizem'in triko kıyafeti Vaka 6'dakinin aynısı (vaka7_diyalog.md başı)."]
    refs = [("../v6/onayli/G23.png", "Gizem triko temel figürü (Vaka 6, onaylı; dekoltesiz)"),
            ("../v6/onayli/G22.png", "Gizem'in kıyafet kartı (triko): YALNIZ kıyafetin kesimi ve rengi; yüzü, pozu alınmaz")]
    govde = [
        ("Birinci referans görseldeki kızın (Gizem) AYNISI: aynı yüz, bal rengi kâküllü kıvırcık saç, çiller, aynı krem triko ve "
         "koyu kot; aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj. İkinci referans kıyafet kartıdır: " + KART
         + " Değişen poz, ifade ve elindeki: birinci referanstaki TELEFON YOK."),
        f"Poz: TAM İKİ KOL, İKİ EL. {poz} {KOL}" + ("" if nesne else " Elleri boş: telefon, tepsi, fincan yok."),
        BAKIS, f"İfade: {ifade}", f"Bu figürü gizem.triko_telefon'dan ayıran: {ayiran}",
        SAC, kadraj("açık bej"), "Çıplaklık yok.", YAZI, ORAN_F]
    yaz(n, f"Gizem, {baslik}", ust, refs, f"gizem.{ifade_key}", kontrol, govde)


# ================================================================ liste
# Peri, kadife
peri(31, "kadife7", "kas", "kaşı kalkık",
     "Bir eli belinde, eteğin bel kenarında; öbür kolu gövdesinin yanında, eli gevşek.",
     "tek kaşı belirgin biçimde kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda: \"ciddi misin?\" Takılan, iğneleyici ama sevimli. Ağzı kapalı.",
     "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · kıyafet kart gibi (bordo kadife etek, krem triko) · dekolte derin · eller BOŞ · gevşek topuz · zemin açık bej")
peri(32, "kadife7", "merakli", "meraklı, soruyor",
     "Bir elinin parmak uçları çenesinin altında, dirseği gövdesine yakın; öbür kolu gövdesinin yanında.",
     "meraklı, dikkatle dinliyor; kaşları hafif yukarıda, başı azıcık yana eğik, gözler canlı. Dudakları kapalı, hafif aralık değil.",
     "başı yana eğik, kaşlar meraklı, parmak uçları çenede; alay yok.",
     "parmak uçları çenede, dirsek gövdeye yakın · meraklı yüz, ağız kapalı · eller BOŞ · zemin açık bej")
peri(33, "kadife7", "sasirmis", "şaşırmış",
     "Bir eli göğsünün üstünde, dekoltenin hemen üstünde açık parmaklarla duruyor; öbür kolu gövdesinin yanında.",
     "şaşırmış: kaşlar yukarıda, gözler iri açık, dudaklar hafif aralık; komik bir \"hadi canım!\" şaşkınlığı, korku değil.",
     "kaşlar yukarıda, gözler iri, ağız hafif aralık; bir eli göğsünde.",
     "gözler iri, ağız hafif aralık · bir el göğüste · eller BOŞ · zemin açık bej")
# Peri, gala
peri(34, "gala", "kas", "kaşı kalkık",
     "Bir eli belinde; öbür kolu gövdesinin yanında, eli gevşek.",
     "tek kaşı belirgin biçimde kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda: kendinden emin, iğneleyici. Ağzı kapalı.",
     "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş belirgin kalkık · gece mavisi saten, SİYAH SATEN eldiven · pırlanta kolye · eller BOŞ (defter yok) · zemin açık bej")
peri(35, "gala", "merakli", "meraklı, soruyor",
     "Bir elinin eldivenli parmak uçları çenesinin altında, dirseği gövdesine yakın; öbür kolu gövdesinin yanında.",
     "meraklı, dikkatle soran bir dedektif; kaşları hafif yukarıda, başı azıcık yana eğik, gözler canlı. Dudakları kapalı.",
     "başı yana eğik, kaşlar meraklı, parmak uçları çenede; alay yok.",
     "parmak uçları çenede · meraklı yüz, ağız kapalı · eldivenler saten · eller BOŞ · zemin açık bej")
peri(36, "gala", "sasirmis", "şaşırmış",
     "Bir eli göğsünün üstünde, dekoltenin hemen üstünde açık parmaklarla duruyor; öbür kolu gövdesinin yanında.",
     "şaşırmış ve hoşuna gitmiş: kaşlar yukarıda, gözler iri açık, dudaklar hafif aralık.",
     "kaşlar yukarıda, gözler iri, ağız hafif aralık; bir eli göğsünde.",
     "gözler iri, ağız hafif aralık · bir el göğüste · eldivenler saten · eller BOŞ · zemin açık bej")
peri(37, "gala", "sevincli", "sevinçli (biri onu tanıdı)",
     "İki eli belinde değil: bir eli hafifçe topuzuna dokunuyor (dirseği gövdeye yakın, kadrajın dışına çıkmıyor), öbür kolu gövdesinin yanında.",
     "içten, parlak, gururlu bir sevinç; geniş, dişleri görünen bir gülümseme, gözleri parlıyor: \"sonunda biri tanıdı!\"",
     "geniş, dişleri görünen gülümseme; bir eli topuzunda.",
     "geniş gülümseme · bir el topuzda, dirsek gövdeye yakın · eldivenler saten · eller BOŞ · zemin açık bej")
peri(38, "gala", "utanmis", "mahcup (zayıf kanıt)",
     "İki kolu gövdesinin önünde aşağıda, eldivenli elleri belinin önünde hafifçe birbirine değiyor (kavuşmuyor); omuzları hafif düşük.",
     "mahcup, biraz bozulmuş: gözleri hafif aşağıda ama kadrajın soluna, dudakları kapalı ve hafif büzük, yanakları hafif kızarık. Yenik değil, sevimli.",
     "omuzlar düşük, bakış hafif aşağı, dudak büzük; eller önde birleşiyor.",
     "mahcup yüz, bakış hafif aşağı · eller önde (kavuşmuyor) · eldivenler saten · eller BOŞ · zemin açık bej")
# Peri, temizlenmiş (altın parıltılı elbise)
peri(39, "altin_temiz", "normal", "temizlenmiş, normal (bu hâlin temeli)",
     "Bir eli belinde; öbür kolu gövdesinin yanında, eli gevşek.",
     "yorgun ama gururlu, sakin; dudaklarında belli belirsiz bir gülümseme.",
     "",
     "elbise gece mavisi ama YALDIZLA pırıl pırıl · ELDİVEN YOK · yüz temiz · kulak arkasında küçük altın leke · topuz biraz dağılmış · eller BOŞ · zemin açık bej",
     ek="Bu hâlin temelidir: kas ve yumusak ifadeleri bundan çizilecek.")
peri(40, "altin_temiz", "kas", "temizlenmiş, kaşı kalkık",
     "Bir eli belinde; öbür kolu gövdesinin yanında, eli gevşek.",
     "tek kaşı belirgin biçimde kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda: kuru, gururlu bir şaka. Ağzı kapalı.",
     "kaş belirgin kalkık, gülümseme alaycı ve tek taraflı.",
     "kaş kalkık · elbise yaldızla pırıl pırıl · ELDİVEN YOK · kulak arkasında altın · eller BOŞ · zemin açık bej")
peri(41, "altin_temiz", "yumusak", "temizlenmiş, yumuşamış",
     "İki kolu gövdesinin yanında, elleri gevşek; omuzları gevşemiş.",
     "yumuşamış, içten, biraz duygulu: alay yok, dudaklarında küçük, sıcak bir gülümseme, gözleri yumuşak.",
     "alay yok; sıcak, küçük gülümseme ve yumuşak bakış.",
     "yumuşak, sıcak yüz · elbise yaldızla pırıl pırıl · ELDİVEN YOK · eller BOŞ · zemin açık bej")
# Cengo, smokin
cengo(42, "kas", "kaşı kalkık",
      "Bir eli pantolon cebinde; öbür kolu gövdesinin yanında, eli gevşek.",
      "tek kaşı kalkık, şüpheci, hafif alaycı; dudağının bir ucu yukarıda. Ağzı kapalı.",
      "tek kaş kalkık, şüpheci; gülümseme yok denecek kadar az.",
      "tek kaş kalkık · papyon yamuk · telin ucu cepte · bileklik kadrajın SAĞındaki bilekte · eller boş · zemin açık bej")
cengo(43, "gulen", "gülüyor",
      "Bir eli ensesinde, saçının arkasında (dirseği yukarıda ama kadrajın içinde); öbür kolu gövdesinin yanında.",
      "içten, geniş bir gülüş, dişleri görünüyor, gözlerinin kenarı kırışık; hınzır ve sıcak.",
      "geniş, dişleri görünen gülüş; bir eli ensesinde.",
      "geniş gülüş · bir el ensede, dirsek kadraj içinde · papyon yamuk · tel · bileklik kadrajın SAĞındaki bilekte · zemin açık bej")
cengo(44, "yumusak", "yumuşak",
      "İki kolu gövdesinin yanında, elleri gevşek.",
      "yumuşak, ciddi, içten; gülmüyor, alay yok; gözleri sıcak ve dikkatli, dudakları kapalı. İlk kez sesini alçaltan bir adam.",
      "gülümseme ve alay yok; sıcak, ciddi bakış.",
      "gülmüyor, yumuşak bakış · papyon yamuk · tel · bileklik kadrajın SAĞındaki bilekte · eller boş · zemin açık bej")
# Gizem
gizem(45, "triko", "triko (sade, normal)",
      "Bir eli kotunun ön cebinde, başparmağı dışarıda; öbür kolu gövdesinin yanında.",
      "rahat, şakacı, sevimli; dudaklarında hınzır küçük bir gülümseme.",
      "telefon yok; bir eli kot cebinde.",
      "TELEFON YOK · krem triko, koyu kot · bal rengi kâküllü saç, çil · eller boş · zemin açık bej")
gizem(46, "triko_aski", "elinde askıda gece mavisi elbise",
      "Bir eliyle göğüs hizasında tahta bir ASKI tutuyor; askıda GECE MAVİSİ, ince askılı, saten bir gece elbisesi asılı, elbise "
      "gövdesinin önünde aşağı sarkıyor. Öbür eli elbisenin eteğini hafifçe tutuyor.",
      "gururlu, heyecanlı, hafif muzip; elbiseyi gösteren bir gülümseme.",
      "elinde askıda gece mavisi saten elbise.",
      "askıda GECE MAVİSİ saten elbise (Peri'nin G2 kartındaki elbise) · iki el elbisede, kadrajın içinde · krem triko · zemin açık bej",
      nesne=True)
# Süheyla
konuk(47, "suheyla", "suzuyor", "süzüyor",
      "Bir eli belinde, ceketin kenarında; öbür kolu gövdesinin yanında.",
      "karşısındakini baştan aşağı süzüyor: başı hafif geride, gözleri yarı kısık ve hafif aşağı (ama kadrajın soluna), tek kaşı kalkık; dudaklarında değerlendiren, belli belirsiz bir gülümseme. Ağzı kapalı.",
      "gözler kısık, süzen bakış, kaş kalkık.",
      "süzen bakış, gözler kısık · gözlük · topuz · kehribar yüzük · eller boş · zemin açık bej")
konuk(48, "suheyla", "endiseli", "endişeli",
      "İki eli gövdesinin önünde, belinin hizasında parmakları birbirine kenetli (kollar kavuşmuyor).",
      "endişeli, kaygılı: kaşları içten yukarı, alnı hafif kırışık, dudakları gergin ve kapalı.",
      "kaşlar içten yukarı, gergin dudak; eller önde kenetli.",
      "kaygılı yüz · eller önde kenetli · gözlük · topuz · eller boş · zemin açık bej")
konuk(49, "suheyla", "sert", "sert",
      "İki kolu gövdesinin yanında, dimdik; çenesi hafif yukarıda.",
      "sert, kararlı, iş kadını: kaşları düz ve hafif çatık, bakışı keskin, dudakları ince bir çizgi; gülümseme yok.",
      "gülümseme yok, kaşlar hafif çatık, dimdik duruş.",
      "sert yüz, gülümseme yok · dimdik · gözlük · topuz · eller boş · zemin açık bej")
# Kaan
konuk(50, "kaan", "heyecanli", "heyecanlı",
      "Bir eliyle gözlüğünü burnunun üstünde düzeltiyor; öbür kolu gövdesinin yanında.",
      "heyecanlı, coşkulu, çocuksu: gözleri iri ve parlak, geniş bir gülümseme, kaşları yukarıda.",
      "geniş gülümseme, iri gözler; bir eli gözlüğünde.",
      "heyecanlı geniş gülümseme · bir el gözlükte · açık sarı perçem · çil · eller boş · zemin açık bej")
konuk(51, "kaan", "ciddi", "ciddi (uzman)",
      "İki kolu gövdesinin yanında; omuzları dik.",
      "ciddi, dikkatli, uzman: kaşları hafif çatık, dudakları kapalı, bakışı yoğun; heyecan yok.",
      "gülümseme yok, çatık kaş, yoğun bakış.",
      "ciddi yüz, gülümseme yok · UV lambası YOK (satırlarda yok) · açık sarı perçem · gözlük · eller boş · zemin açık bej")
# Şükrü
konuk(52, "sukru", "dik", "dik, mağrur",
      "İki eli gövdesinin önünde, belinin hizasında parmakları birbirine kenetli; dimdik, çenesi hafif yukarıda.",
      "mağrur, kibirli, savunmada: çenesi yukarıda, gözleri hafif kısık, dudakları ince bir çizgi; gülmüyor.",
      "çene yukarıda, mağrur kısık bakış.",
      "mağrur yüz, çene yukarıda · koyu yeşil puantiyeli papyon · zincir · eller boş (büyüteç yok) · zemin açık bej")
konuk(53, "sukru", "kirgin", "kırgın",
      "İki kolu gövdesinin yanında; omuzları hafif düşük.",
      "kırgın, içerlemiş, yaşlı bir adam: kaşları içten yukarı, gözleri hafif nemli ve hafif aşağı (ama kadrajın soluna), dudakları kapalı ve aşağı kıvrık.",
      "omuzlar düşük, hüzünlü kırgın bakış.",
      "kırgın, hüzünlü yüz · omuzlar düşük · papyon · eller boş · zemin açık bej")
# Vedat
konuk(54, "vedat", "kacamak", "kaçamak",
      "Bir eliyle ensesini kaşıyor (dirseği yukarıda ama kadrajın içinde); öbür kolu gövdesinin yanında.",
      "kaçamak, yapmacık bir gülüş: ağzı gülüyor ama gözleri kaçıyor, hafif yana ve aşağı (ama kadrajın soluna).",
      "yapmacık gülüş, kaçan gözler; bir eli ensesinde.",
      "kaçamak gülüş · bir el ensede · kel, kır sakal, kalın gözlük · bordo kadife ceket · eller boş · zemin açık bej")
konuk(55, "vedat", "yakalanmis", "yakalanmış",
      "İki kolu gövdesinin yanında aşağı sarkıyor; omuzları düşmüş.",
      "yakalanmış, çökmüş: kaşları içten yukarı, gözleri hafif aşağı, dudakları kapalı ve aşağı kıvrık; şakacılığı bitmiş.",
      "omuzlar düşük, gülüş yok, çökmüş yüz.",
      "çökmüş yüz, omuzlar düşük · gülüş yok · kalın gözlük · eller boş · zemin açık bej")
konuk(56, "vedat", "ofkeli", "öfkeli",
      "İki eli yumruk, gövdesinin iki yanında aşağıda.",
      "öfkeli, alınmış: kaşları çatık, yüzü kızarık, ağzı konuşur gibi açık.",
      "çatık kaş, kızarık yüz, yumruklar.",
      "öfkeli, kızarık yüz · yumruklar yanda · kalın gözlük · eller boş · zemin açık bej")
# Nesrin
konuk(57, "nesrin", "soguk", "soğuk",
      "İki eli önlüğünün cebinde.",
      "soğuk, mesafeli, kuru: yüzü ifadesiz, gözleri hafif kısık, dudakları ince bir çizgi; gülmüyor.",
      "eller önlük cebinde, ifadesiz soğuk yüz.",
      "soğuk, ifadesiz yüz · eller önlük cebinde · tek örgü önde · gözlük başın üstünde · zemin açık bej")
konuk(58, "nesrin", "itiraf", "itiraf (hüzünlü, dik)",
      "İki eli gövdesinin önünde, belinin hizasında, boyalı parmakları birbirine kenetli.",
      "hüzünlü ama dimdik: gözleri nemli ama ağlamıyor, bakışı uzakta (kadrajın soluna), dudakları kapalı; otuz yıllık bir yorgunluk ve onur.",
      "nemli gözler, uzak bakış, kenetli boyalı parmaklar.",
      "hüzünlü ama dik · nemli gözler, ağlamıyor · parmaklar kenetli, uçları boyalı · tek örgü · zemin açık bej")
# Ercan
konuk(59, "ercan", "gulen", "gülüyor",
      "İki eli gövdesinin önünde, beyaz eldivenli; parmakları gevşekçe birbirine değiyor.",
      "içten, geniş bir gülüş, dişleri görünüyor; eski bir dostu görmüş gibi sevinçli.",
      "geniş, dişleri görünen gülüş.",
      "geniş gülüş · beyaz eldiven · siyah altın düğmeli yelek · jöleli saç · eller boş (anahtar yok) · zemin gri-mavi")
konuk(60, "ercan", "fisilti", "fısıldıyor (sır veriyor)",
      "Bir eli ağzının yanında, avucu ağzına yakın, fısıldar gibi (dirseği gövdeye yakın); öbür kolu gövdesinin yanında.",
      "sır veren, gizli: başı hafif öne eğik, kaşları kalkık, gözleri anlamlı; dudakları fısıldar gibi hafif aralık.",
      "eli ağzının yanında, öne eğik, gizli bakış.",
      "fısıltı: el ağzın yanında, dirsek gövdeye yakın · beyaz eldiven · yelek · zemin gri-mavi")
# Necmi
konuk(61, "necmi", "heyecanli", "heyecanlı (kraliçeyi tanıdı)",
      "İki eli yanaklarının iki yanında, avuçlar açık, şaşkın bir sevinçle (dirsekleri gövdeye yakın, kadrajın içinde).",
      "coşkulu, hayran, çocuk gibi sevinçli: gözleri iri, geniş gülüş, altın dişi görünüyor.",
      "eller yanaklarda, iri gözler, geniş gülüş.",
      "eller yanaklarda, dirsekler kadraj içinde · altın diş görünüyor · hardal bere · zemin açık bej")
konuk(62, "necmi", "defter", "elinde buruşuk defter",
      "İki eliyle göğüs hizasında küçük, eski, buruşuk, karton kapaklı bir DEFTER tutuyor, defter AÇIK, sayfaları kendine dönük (okuyucu sayfaları görmüyor).",
      "dikkatle hatırlamaya çalışıyor: kaşları hafif çatık, dudakları kapalı, gözleri deftere ve kadrajın soluna.",
      "elinde açık defter, dikkatli, ciddi yüz.",
      "elinde AÇIK buruşuk defter, sayfalar kendine dönük, yazı GÖRÜNMÜYOR · hardal bere · zemin açık bej",
      nesne=True)
