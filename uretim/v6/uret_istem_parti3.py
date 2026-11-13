# V6 Parti 3 istemleri — tek kaynaktan, kalıplar ISTEM_KALIPLARI.md'den.
import re, os, sys
V6 = r"D:/Yazilim/paravan/uretim/v6"
SR = open(V6 + "/satir_resim.md", encoding="utf-8").read()

def satirlar(anahtar):
    m = re.search(r"^### " + re.escape(anahtar) + r" \(\d+ satır\)\n(.*?)(?=^### |\Z)", SR, re.S | re.M)
    if not m:
        sys.exit("satır yok: " + anahtar)
    return m.group(1).strip()

TARZ = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil: "
        "belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern "
        "çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
TARZ_ORNEK = ("Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin "
              "gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA. "
              "Karikatür değil: doğal yüz oranları, abartısız ifade.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
ORAN_F = "Görselin oranı TAM 4:5, dikey (1122×1402)."
ORAN_K = "Görselin oranı TAM 3:4, dikey (1086×1448)."
ORAN_KART = "Görselin oranı TAM 2:3, dikey (1024×1536)."
BAKIS = ("Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay "
         "bakıyor; yukarı, aşağı ya da kameraya değil. Profil değil: uzaktaki göz de açıkça görünüyor.")
SAC = "Saçın dış çizgisi toplu ve net: arka plana taşan ince tek teller, havada kıvrılan uçlar yok."
PERI_CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
PERI_KOMIK = "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok. Çıplaklık yok."
PERI_EN = ("Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık en çok onun üstünde; öbür kadın(lar) çekici olabilir ama "
           "Peri'yi gölgede bırakmıyor.")
KALABALIK = "Yüzler üç çeyrek, gözler görünüyor; kimse kameraya bakmıyor. Her kişinin İKİ kolu, İKİ eli var."
KOMEDI = "Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok; müstehcen değil."
EYLUL16 = ("Eylül on altı yaşında bir genç kızdır (kural 16): yaşına uygun, masum, çocuksu bir duruş; makyaj yok; kıyafeti kapalı "
           "ve bol; poz sade, hiçbir çekicilik ya da flört ögesi yok.")

def kadraj(zemin):
    return ("Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince "
            f"bir boşluk. Arka plan: düz, tek renk {zemin}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş "
            "tek renk gibi); hiçbir nesne yok.")

def yaz(n, baslik, ust, refs, satir_key, kontrol, govde):
    """ust: '- tür: …' ile başlayan satırlar listesi; refs: [(yol, açıklama)]; govde: paragraflar listesi."""
    out = [f"# G{n} — {baslik}", ""] + ust + ["", "## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)", ""]
    out += [f"{i}. `{p}` — {d}" for i, (p, d) in enumerate(refs, 1)]
    if isinstance(satir_key, tuple):   # ("SONUÇ", metin): karar karesi, satırı karar metninden
        out += ["", "## Satırlar", "", "Karar karesi (SR-K): `vaka6_diyalog.md` → karar SONUÇ metni. Codex bu bölümü istem metnine katmaz.", "",
                f"- *SONUÇ*: {satir_key[1]}"]
    elif satir_key is not None:
        out += ["", "## Satırlar", "",
                "`arac_satir_resim.js` (13 Kasım 2026, V6 dört yol). Codex bu bölümü istem metnine katmaz.", ""]
        out += [satirlar(k) for k in (satir_key if isinstance(satir_key, list) else [satir_key])]
    out += ["", "## Kontrol", "", kontrol, "", "## İstem", "", "```text", "\n\n".join(p for p in govde if p), "```", ""]
    with open(f"{V6}/prompts/G{n}.md", "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(out))

# ---------------------------------------------------------------- referans kısayolları
R = "../referanslar/"
PERI_BAS = ("referanslar/peri_mesai_bas.png", "Peri'nin başı (onaylı G17'nin baş kırpığı; G17 dekolteli, bütün hâli verilmez)")
GOVDE_K = (R + "tarz_govde_kadin.jpg", "YALNIZ ölçek ve kadraj (başı silik)")
KART_PERI = ("onayli/G1.png", "Peri'nin kıyafet kartı: YALNIZ kıyafetin kesimi, boyu ve rengi; yüzü, pozu alınmaz")
KART_CENGO = ("onayli/G2.png", "Cengo'nun kıyafet kartı: soldaki ütülü, sağdaki buruşuk hâl; yüzü, pozu alınmaz")
CENGO_T = ("onayli/G18.png", "Cengo ütülü temel figürü (onaylı)")
BURO_G = (R + "buro_gunduz.jpg", "büro, gündüz (Vaka 1'den beri aynı oda)")
BURO_A = (R + "buro_aksam.jpg", "büro, akşam")

PERI_GIRIS = ("Birinci referans Peri'nin başıdır: aynı yüz, aynı kızıl-kahve saç ve at kuyruğu, ela-yeşil gözler, kırmızı ruj, "
              "küçük altın halka küpeler. İkinci referans YALNIZ ölçek ve kadraj içindir (başı bilerek silindi); oradaki kıyafeti "
              "ve pozu alma. Düz gri-mavi arka plan. Çizim tarzı boyalı, onaylı Peri resimleri gibi.\n\n"
              "Üçüncü referans kıyafet kartıdır: kıyafet kart nasılsa öyle (kesim, boy, renk); oradaki yüzü ve pozu alma.")
PERI_MESAI = ("Peri'nin kıyafeti: kart referansındaki kıyafet, aynen. Vücudu saran, yüksek belli, dar açık mavi kot; beyaz erkek "
              "gömleği önü açık, belde DÜĞÜMLÜ, kolları dirseğe kadar sıvalı; altında vücudu saran siyah, derin oyuk yakalı "
              "atlet, dekoltesi belirgin. Saçı yüksek, dalgalı bir at kuyruğu; birkaç tutam yüzüne düşüyor.")
PERI_TUL = ("Peri'nin kıyafeti: kart referansındaki kıyafet (dar açık mavi kot, belde düğümlü beyaz erkek gömleği, altında derin "
            "oyuk yakalı siyah atlet), ama bir kovalamacadan sonra: gömlek ve kot NEMLİ ve buruşuk, kotta koyu ıslak lekeler; "
            "TENİ KENDİ RENGİNDE, ıslaklık yalnız kumaşta. Omuzlarına beyaz, yumuşak, yarı saydam bir TÜL ŞAL sarılı: şal iki "
            "omzu ve kolların üstünü örtüyor, önde göğsünün altında elleriyle tutulmuş ya da gevşekçe kavuşmuş; atletin "
            "dekoltesi şalın arasından görünüyor. At kuyruğu dağılmış, nemli; saçında tek, belirgin, kırmızı bir GÜL YAPRAĞI "
            "takılı kalmış.")

def peri_mesai(n, ifade_key, baslik, poz, ifade, ayiran, kontrol, bakis=BAKIS, cek=PERI_CEK):
    yaz(n, f"Peri, mesai dışı, {baslik}", [f"- tür: figür · anahtar: `peri.mesai.{ifade_key}`",
         "- önce hazır olmalı: G1 (kart), `referanslar/peri_mesai_bas.png` (G17'den, hazır)",
         "- not: zemin gri-mavi (H4). Gömmede `peri_beyaz_delik` profili gerekecek (kot zemine yakın; DURUM.md)."],
        [PERI_BAS, GOVDE_K, KART_PERI], f"peri.mesai.{ifade_key}", kontrol,
        [PERI_GIRIS, PERI_MESAI, "Poz: TAM İKİ KOL, İKİ EL. " + poz, bakis, "İfade: " + ifade, ayiran,
         kadraj("gri-mavi"), cek, YAZI, ORAN_F])

def peri_tul(n, ifade_key, baslik, poz, ifade, ayiran, kontrol, bakis=BAKIS):
    yaz(n, f"Peri, tül şallı (kovalamaca sonrası), {baslik}", [f"- tür: figür · anahtar: `peri.tul.{ifade_key}`",
         "- önce hazır olmalı: G1 (kart), `referanslar/peri_mesai_bas.png`",
         "- kıyafet hâli (SR-B): mesai kıyafeti nemli + tül şal + saçta tek gül yaprağı; kovalamaca sonu (bank) ve kapanış (büro) aynı hâl.",
         "- not: kıyafet hâli kartın değişimi değil, hâli (sahibine öneri: ayrı kart yok)."],
        [PERI_BAS, GOVDE_K, KART_PERI], f"peri.tul.{ifade_key}", kontrol,
        [PERI_GIRIS, PERI_TUL, "Poz: TAM İKİ KOL, İKİ EL. " + poz, bakis, "İfade: " + ifade, ayiran,
         kadraj("gri-mavi"), PERI_CEK, YAZI, ORAN_F])

CENGO_GIRIS = ("Birinci referans görseldeki adamın (Cengo) AYNISI: aynı yüz, saç, sakal, kıyafet ve bileklik; aynı çizim tarzı, "
               "aynı düz açık bej arka plan, aynı ölçek ve kadraj. İkinci referans kıyafet kartıdır: {hal}; kıyafet kart nasılsa "
               "öyle, oradaki yüzü ve pozu alma.{poz_ref} Değişen yalnız poz ve ifade.")
CENGO_KIY = ("Kıyafet: kart referansındaki {hal_kisa}: açık mavi gömlek, koyu lacivert kumaş pantolon, kahverengi deri kemer. "
             "Kadrajın SAĞ tarafında kalan bileğinde renkli boncuklu, ucuz, çocuk işi bileklik. Haki ceket YOK, kravat YOK.")

def cengo(n, set_, ifade_key, baslik, poz, ifade, ayiran, kontrol, poz_ref=None, ek_kiy="", bakis=BAKIS, ust_ek=()):
    hal = "YALNIZ soldaki ütülü hâl" if set_ != "buruk" else "YALNIZ sağdaki BURUŞUK hâl"
    hal_kisa = {"utulu": "ütülü hâl (gömlek kolalı, düğmeleri boğaza kadar ilikli, pantolonun içinde; saç yana taranmış)",
                "duvakli": "ütülü hâl (gömlek kolalı, pantolonun içinde)",
                "buruk": "BURUŞUK hâl (gömlek buruşmuş, yakası açık, bir yanı pantolondan dışarı çıkmış; saç dağılmış)"}[set_]
    refs = [CENGO_T, KART_CENGO]
    pr = ""
    if poz_ref:
        refs.append((R + poz_ref, "YALNIZ poz (oradaki haki ceketi ve zemini alma)"))
        pr = " Üçüncü referans YALNIZ poz içindir: oradaki kıyafeti (haki ceket, tişört) ve zemini alma."
    yaz(n, f"Cengo, {baslik}", [f"- tür: figür · anahtar: `cengo.{set_}.{ifade_key}`", "- önce hazır olmalı: G18, G2 (onaylı)",
         "- not: zemin açık bej (H4). Bileklik kadrajın SAĞ tarafında kalan bilekte (G2 Düzeltme 1)."] + list(ust_ek),
        refs, f"cengo.{set_}.{ifade_key}", kontrol,
        [CENGO_GIRIS.format(hal=hal, poz_ref=pr).replace("aynı yüz, saç, sakal, kıyafet ve bileklik",
             "aynı yüz, sakal ve bileklik (kıyafetin hâli ve saç aşağıdaki gibi)" if set_ != "utulu" else "aynı yüz, saç, sakal, kıyafet ve bileklik"),
CENGO_KIY.format(hal_kisa=hal_kisa) + (" " + ek_kiy if ek_kiy else ""),
         "Poz: TAM İKİ KOL, İKİ EL. " + poz, bakis, "İfade: " + ifade, ayiran, kadraj("açık bej"), "Çıplaklık yok.", YAZI, ORAN_F])

def konuk(n, kim_ad, kim_id, temel, ifade_key, baslik, zemin, poz, ifade, ayiran, kontrol, ek="", bakis=BAKIS,
          ust_ek=(), ek_once=None, yuz_gen=""):
    refs = [(f"onayli/G{temel}.png", f"{kim_ad} temel figürü (onaylı G{temel})")]
    yaz(n, f"{kim_ad}, {baslik}", [f"- tür: figür · anahtar: `{kim_id}.{ifade_key}`", f"- önce hazır olmalı: G{temel} (onaylı temel)",
         f"- zemin: {zemin} (temel G{temel} ile aynı; H4)"] + list(ust_ek),
        refs, f"{kim_id}.{ifade_key}", kontrol,
        [f"Birinci referans görseldeki kişinin ({kim_ad}) AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı düz "
         f"{zemin} arka plan, aynı ölçek ve kadraj. Değişen yalnız poz ve ifade" + (" ve elindeki nesne." if ek else "."),
         ek_once, ek, "Poz: TAM İKİ KOL, İKİ EL. " + poz, bakis, "İfade: " + ifade, ayiran, SAC, kadraj(zemin), "Çıplaklık yok.",
         YAZI, ORAN_F])

# ================================================================= 1. EYLÜL TEMELİ (G6 / G6z) ===
EYLUL_TARIF = ("Eylül: on altı yaşında bir lise öğrencisi, Cengo'nun kızı. Boyu ortalama, ince, genç bir kız; yüzü yuvarlakça ve "
               "taze, çocuksuluğu henüz gitmemiş. Uzun, DÜZ, koyu kahve saç, açık, omuzlarının altına iniyor; ortadan ayrılmış. "
               "Koyu kahve gözler, kalın düz kaşlar (babasınınkiler gibi), makyajsız. Kıyafeti: açık mavi, bol kesim kot ceket, "
               "önü açık; altında yuvarlak yakalı, boğazı kapalı, düz SİYAH tişört; koyu gri, bol kesim düz pantolon. Sırtında "
               "küçük siyah sırt çantası, iki askısı omuzlarında. Kadrajın SAĞ tarafında kalan bileğinde renkli boncuklu, "
               "ucuz, çocuk işi bir bileklik (babasınınkinin eşi). Küpe, kolye, makyaj YOK. Defne'ye (uzun KIVIRCIK koyu "
               "saçlı, beyaz gömlekli, makyajlı yetişkin bir kadın) benzemiyor; Gizem'e (bal rengi kâküllü saç, çil) benzemiyor.")

def eylul_temel(n, zemin, z):
    yaz(n, "Eylül, normal (temel)" + (" — ZEMİN DENEMESİ (gri-mavi)" if z else ""),
        ["- tür: figür · anahtar: `eylul.normal`", "- önce hazır olmalı: yok",
         ("- zemin denemesi: asıl G6 (açık bej); bu dosya yalnız zemin rengiyle ayrılır (H4)" if z else
          "- zemin denemesi: G6z (gri-mavi); kesilip saç kenarı temiz olan seçilir (H4). Koyu saç → asıl açık bej; kot ceket gri-mavide kesimde delinebilir."),
         "- kural 16 (`sablon/2_kural_kitabi.md`): reşit değil; çekicilik satırı YOK, poz sade, kıyafet kapalı."],
        [GOVDE_K[0:1] + ("YALNIZ tarz, ölçek, kadraj (başı silik)",), (R + "tarz_ornek_kadin.jpg", "YALNIZ çizim tarzı örneği (kişi, kıyafet, poz alınmaz)")],
        "eylul.normal",
        "on altı yaşında GÖRÜNÜYOR (yetişkin değil, makyaj yok) · uzun DÜZ koyu kahve saç (kıvırcık değil) · kot ceket + boğazı kapalı siyah tişört · "
        "sırt çantası askıları · boncuklu bileklik kadrajın SAĞındaki bilekte · eller boş · Defne'ye ve Gizem'e benzemiyor · zemin " + zemin,
        [TARZ, "Referans görsel YALNIZ çizim tarzı, renk, ölçek ve kadraj içindir. Başı bilerek silindi: yüzü sıfırdan, aşağıdaki tarife "
         "göre çiz; referanstaki kişinin bedenini, kıyafetini ve POZUNU alma. Bu yepyeni, kimseye benzemeyen bir kişi.",
         EYLUL_TARIF, EYLUL16,
         "Poz: TAM İKİ KOL, İKİ EL. İki eli sırt çantasının askılarını göğüs hizasında tutuyor; elleri boş, başka nesne yok.",
         BAKIS, "İfade: ciddi, kararlı, biraz çekingen; dudakları kapalı. Bir derdi var ama dimdik duruyor.",
         SAC, kadraj(zemin), "Çıplaklık yok.", TARZ_ORNEK, YAZI, ORAN_F])

eylul_temel("6", "açık bej", False)
eylul_temel("6z", "gri-mavi", True)

# ================================================================= 2. GİZEM, TRİKO =================
GIZEM_KIY = ("Kıyafet: ince örgü, vücuda oturan KREM rengi triko kazak; YUVARLAK, kapalı yaka (dekoltesiz), kolları bileğe kadar; "
             "kazak belde biter. Yüksek belli, koyu mavi düz paça kot pantolon (Peri'nin açık mavi dar kotundan koyu). Beyaz spor "
             "ayakkabı. Kulaklarında küçük altın halka küpeler. Kırmızı hiçbir şey YOK, önlük YOK, çanta YOK.")
yaz(22, "Gizem, triko (kıyafet kartı)", ["- tür: kıyafet kartı (oyuna GÖMÜLMEZ; `sablon/5_gorsel_sistemi.md` I, SR-C) · anahtar: yok",
     "- önce hazır olmalı: yok",
     "- not: Gizem'in `triko` kıyafeti V4'te tarif edildi (`vaka4_diyalog.md`: krem triko kazak, kot pantolon; kırmızı yok) ama V4–V5 resimsiz; hiç çizilmedi. Kart burada açılır, V4'e de geçer."],
    [(R.replace("referanslar/", "") + "v3/referanslar/gizem_bas.png", "Gizem'in başı (Vaka 3 onaylı G9'un baş kırpığı)"), GOVDE_K,
     (R + "tarz_ornek_kadin.jpg", "YALNIZ çizim tarzı örneği")], None,
    "TAM BOY, ayakkabı dahil · krem triko kazak YUVARLAK kapalı yaka · koyu mavi düz kot · beyaz spor ayakkabı · bal rengi kâküllü saç, çil · kırmızı yok · zemin açık gri",
    ["KIYAFET KARTI: bu resim kıyafetin ölçü resmidir. Kadraj TAM BOY: başın tepesinden ayakkabının altına kadar bütün beden "
     "kadrajda; ayaklar KESİLMİYOR, ayakkabının altında ince bir boşluk var. Önden, dimdik ayakta, ağırlık iki ayakta; kollar "
     "gövdenin yanında, hafif açık, kıyafetin önünü kapatmıyor. Yüz sakin ve nötr, hafif yana bakıyor, kameraya değil. Arka plan: "
     "düz, tek renk açık gri; gölgesiz, dokusuz, hiçbir nesne yok.",
     "Birinci referans Gizem'in başıdır: aynı yüz, bal rengi kâküllü dalgalı saç, çiller, pembe-mercan ruj. İkinci referans YALNIZ "
     "ölçek ve tarz içindir (başı silik); oradaki kıyafeti ve pozu alma.",
     "Gizem: yirmilerinin ortasında, büronun sekreteri; genç, sportif, sevimli.", GIZEM_KIY,
     TARZ_ORNEK.replace(" ve ölçek", ""), "İKİ kolu, İKİ eli var; eller boş.", "Çıplaklık yok.", YAZI, ORAN_KART])

GIZEM_SAT_TEL = "gizem.triko_telefon"
def gizem_temel(n, zemin, z):
    yaz(n, "Gizem, triko, telefonla (bu kıyafetin temeli)" + (" — ZEMİN DENEMESİ (açık bej)" if z else ""),
        ["- tür: figür · anahtar: `gizem.triko_telefon`", "- önce hazır olmalı: G22 (kart)",
         ("- zemin denemesi: asıl G23 (gri-mavi); bu dosya yalnız zemin rengiyle ayrılır (H4)" if z else
          "- zemin denemesi: G23z (açık bej); bal saç → asıl gri-mavi (H4). Yeni kıyafet temeli: iki zemin."),
         "- not: Gizem'in eski figürleri dekolteli; referans baş kırpığı + kapalı gövde + kart. Bu temel onaylanınca triko_tepsi(_telefon) ondan çizilir."],
        [("../v3/referanslar/gizem_bas.png", "Gizem'in başı (Vaka 3 onaylı G9'un baş kırpığı)"), GOVDE_K,
         ("onayli/G22.png", "kıyafet kartı: YALNIZ kıyafetin kesimi ve rengi; yüzü, pozu alınmaz"),
         (R + "tarz_ornek_kadin.jpg", "YALNIZ çizim tarzı örneği")],
        GIZEM_SAT_TEL,
        "kıyafet G22 kartındaki gibi (krem triko, YUVARLAK kapalı yaka) · telefonun ARKASI kameraya dönük, düz siyah, logo yok; ekran görünmüyor · "
        "bal kâküllü saç, çil · Eylül'e (düz uzun koyu saç, kot ceket) benzemiyor · zemin " + zemin,
        [TARZ, "Birinci referans Gizem'in başıdır: aynı yüz, bal rengi kâküllü dalgalı saç, çiller, pembe-mercan ruj, altın halka küpeler. "
         "İkinci referans YALNIZ ölçek ve kadraj içindir (başı bilerek silindi); oradaki kıyafeti ve pozu alma. Üçüncü referans kıyafet "
         "kartıdır: kıyafet kart nasılsa öyle; oradaki yüzü ve pozu alma. Gizem'in bu kıyafetle çizilen ilk resmi; Eylül'e (uzun düz koyu "
         "saçlı, kot ceketli genç kız) benzemiyor.",
         GIZEM_KIY,
         "Poz: TAM İKİ KOL, İKİ EL. Sol eliyle göğüs hizasında bir akıllı telefon tutuyor: telefonun ARKASI kameraya dönük, düz siyah, "
         "logo yok; ekranı kendine dönük, görünmüyor. Sağ elinin başparmağı ekranda, mesaj yazıyor gibi. Telefonun kenarı göğsünün önünde.",
         "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay bakıyor "
         "(telefondan başını kaldırmış, karşısındakine bakıyor); yukarı, aşağı ya da kameraya değil. Profil değil.",
         "İfade: muzip, bilmiş, kaşları hafif kalkık bir yarım gülümseme: \"bir mesaj geldi, sana söyleyeceğim\".",
         "Çekicilik: genç, sportif ve sevimli; beden hattı belirgin ama dekolte yok. Bu vakada en gösterişli kadın yine Peri'dir.",
         SAC, kadraj(zemin), "Çıplaklık yok.", TARZ_ORNEK, YAZI, ORAN_F])

gizem_temel("23", "gri-mavi", False)
gizem_temel("23z", "açık bej", True)

TEPSI_G = ("Elindeki nesne: yuvarlak, düz, gümüş renkli metal bir çay tepsisi; üstünde tabaklarıyla İKİ ince belli Türk çay "
           "bardağı, demli koyu kırmızı çay. Tepside başka bir şey yok.")
konuk(24, "Gizem", "gizem", "23", "triko_tepsi", "triko, elinde çay tepsisi", "gri-mavi",
      "İki eliyle çay tepsisini önünde, bel hizasında tutuyor; tepsi yatay, bardaklar dik. Telefon YOK.",
      "neşeli, cana yakın, meraklı; karşısındaki misafire sıcak, muzip bir gülümseme, bir kaşı hafif kalkık (göz kırpacakmış gibi).",
      "Bu figürü gizem.triko_telefon'dan ayıran: elinde telefon değil, iki eliyle tuttuğu çay tepsisi; yüzü daha açık, misafire gülümsüyor.",
      "G23 ile aynı yüz ve kıyafet · tepside TAM 2 ince belli bardak, tabaklı · telefon YOK · iki el tepsinin iki yanında · zemin G23'ünkiyle aynı",
      ek=TEPSI_G, ust_ek=["- not: G23z seçilirse zemin satırını 'açık bej' yap (üretimden önce)."])
konuk(25, "Gizem", "gizem", "23", "triko_tepsi_telefon", "triko, bir elinde tepsi, öbüründe telefon", "gri-mavi",
      "Sol eliyle çay tepsisini yanında, bel hizasında taşıyor (tepsi yatay, avuç altında); sağ eliyle telefonu göğüs hizasında "
      "tutuyor: telefonun ARKASI kameraya dönük, düz siyah, logo yok, ekran görünmüyor.",
      "muzip, bilmiş, alaycı; dudağının bir ucu yukarıda: \"bak ne yazmış\".",
      "Bu figürü gizem.triko_tepsi'den ayıran: bir elinde telefon var ve yüzü muzip-alaycı; gizem.triko_telefon'dan ayıran: öbür elinde çay tepsisi.",
      "tepsi TEK elde, yatay, TAM 2 bardak · telefonun arkası kameraya, logo yok · iki elin işi ayrı ayrı · zemin G23'ünkiyle aynı",
      ek=TEPSI_G, ust_ek=["- not: G23z seçilirse zemin satırını 'açık bej' yap (üretimden önce)."])

# ================================================================= 3. EYLÜL KARTI ==================
yaz(26, "Eylül (kıyafet kartı)", ["- tür: kıyafet kartı (oyuna GÖMÜLMEZ; `sablon/5_gorsel_sistemi.md` I, SR-C) · anahtar: yok",
     "- önce hazır olmalı: G6 (onaylı temel)",
     "- not: Eylül K97'de (babasına sarılıyor) ve K107/K109 karar karelerinde görünür → kart (sahibinin kuralı: kareye giren konuğun kartı)."],
    [("onayli/G6.png", "Eylül'ün onaylı temeli: yüz, saç ve belden yukarı kıyafet ONUN AYNISI"), GOVDE_K], None,
    "TAM BOY, ayakkabı dahil · G6 ile aynı yüz ve kıyafet · sırt çantası · on altı yaşında görünüyor · zemin açık gri",
    ["KIYAFET KARTI: bu resim kıyafetin ölçü resmidir. Kadraj TAM BOY: başın tepesinden ayakkabının altına kadar bütün beden "
     "kadrajda; ayaklar KESİLMİYOR, ayakkabının altında ince bir boşluk var. Önden, dimdik ayakta, ağırlık iki ayakta; kollar "
     "gövdenin yanında, hafif açık, kıyafetin önünü kapatmıyor. Yüz sakin ve nötr, hafif yana bakıyor, kameraya değil. Arka plan: "
     "düz, tek renk açık gri; gölgesiz, dokusuz, hiçbir nesne yok.",
     "Birinci referans bu kişinin onaylı resmidir: yüz, saç, belden yukarısı (kot ceket, siyah tişört, sırt çantası, bileklik) ONUN "
     "AYNISI; bu kart yalnız belden aşağısını tamamlar. İkinci referans YALNIZ ölçek ve tarz içindir; başı bilerek silindi, oradaki "
     "kıyafeti alma.", EYLUL16,
     "Belden aşağısı: birinci referanstaki koyu gri, bol kesim düz pantolon bileğe kadar iner; ayaklarında siyah kanvas, sade spor "
     "ayakkabı (logo yok). Sırt çantası sırtında, iki askısı omuzlarında.",
     "İKİ kolu, İKİ eli var; eller boş.", "Çıplaklık yok.", YAZI, ORAN_KART])

# ================================================================= 4. PERİ, MESAİ ==================
peri_mesai(27, "kas", "kaşı kalkık",
           "Sol eli belinde; sağ kolu gövdesinin önünden geçmiş, sağ elinin parmakları sol dirseğinin üstünde. Elleri boş: dergi, telefon yok.",
           "tek kaşı belirgin biçimde kalkık, dudağının bir ucu alaycı bir yarım gülümsemeyle yukarıda: \"ciddi misin?\" Takılan, iğneleyici ama sevimli.",
           "Bu ifadeyi peri.mesai.normal'den ayıran: kaş belirgin kalkık, gülümseme alaycı ve tek taraflı; duruşu daha kapalı (kol önde).",
           "kaş belirgin kalkık · kıyafet kart gibi, düğümlü gömlek + derin oyuklu siyah atlet · eller BOŞ · at kuyruğu · zemin gri-mavi")
peri_mesai(28, "merakli", "meraklı, soruyor",
           "Hafifçe öne eğilmiş; sağ elinin işaret parmağı çenesinin altında, düşünür gibi; sol eli kotun cebinin kenarında. Elleri boş.",
           "meraklı, dikkatle dinleyen, sorgulayan; kaşları hafif çatık ve odaklı, gözleri kısık değil açık, dudakları kapalı, hafif yan gülüş yok.",
           "Bu ifadeyi peri.mesai.kas'tan ayıran: alay yok, gülümseme yok; yüz ciddi ve dikkatli, gövde öne eğik, parmak çenede.",
           "parmak çenede, gövde hafif öne eğik · alaycı DEĞİL, dikkatli · eller boş · zemin gri-mavi")
peri_mesai(29, "sasirmis", "şaşırmış",
           "İki eli de havada, avuçları öne dönük, omuz hizasının biraz altında; bir an donakalmış. Elleri boş.",
           "gerçekten şaşırmış: kaşlar yukarı fırlamış, gözler kocaman açık, ağzı hafif aralık. Korku değil, inanamama.",
           "Bu ifadeyi peri.mesai.merakli'den ayıran: kaşlar yukarıda (çatık değil), ağız açık, eller havada.",
           "kaşlar yukarı, ağız aralık · iki el havada, avuçlar öne · eller BOŞ (dergi yok) · zemin gri-mavi")
peri_mesai(30, "utanmis", "mahcup (zayıf kanıt)",
           "Sağ eli ensesinde, at kuyruğunun dibinde; sol kolu gövdesinin yanında, eli gevşek. Elleri boş.",
           "mahcup, hafif kızarmış; dudakları kapalı, gergin, zorlama bir yarım gülümseme: \"elimde yeterince yok\". Kendinden emin değil.",
           "Bu ifadeyi öbür mesai ifadelerinden ayıran: yanakları hafif pembe, bakış yere kaçmış, eli ensesinde; özgüven yok.",
           "eli ENSESİNDE · yanaklar hafif pembe · gözler aşağı-sola · eller boş · zemin gri-mavi",
           bakis="Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna ama hafif "
                 "AŞAĞIDA, karşısındakinin yüzüne değil göğüs hizasına kaçıyor; kameraya değil. Profil değil.")

# ================================================================= 5. PERİ, TÜL ====================
peri_tul(31, "normal", "normal",
         "İki eliyle tül şalın iki ucunu göğsünün altında birbirine tutuyor; ağırlığı bir bacağında. Elinde başka nesne yok.",
         "yorgun, sakin, ciddi; hafif dalgın. Gülümsemiyor; bir şey sormaya hazırlanıyor.",
         "Bu ifadeyi peri.tul.kas'tan ayıran: alay yok, kaş düz; yüz yorgun ve ciddi.",
         "tül şal İKİ omzu örtüyor · saçta TEK kırmızı gül yaprağı · kıyafet nemli ama TEN kendi renginde · eller şalın uçlarında · zemin gri-mavi")
peri_tul(32, "kas", "kaşı kalkık",
         "Sol eli tül şalı göğsünün altında tutuyor; sağ eli belinde, şalın üstünden. Elinde başka nesne yok.",
         "tek kaşı kalkık, alaycı, kuru bir yarım gülümseme; ıslak ve dağınık ama gururu yerinde: \"ben bir şey demedim ki\".",
         "Bu ifadeyi peri.tul.normal'den ayıran: kaş kalkık, dudak ucu alaycı; peri.tul.yumusak'tan ayıran: sıcaklık yok, iğneleyici.",
         "kaş kalkık · tül şal · gül yaprağı saçta · bir eli belinde · zemin gri-mavi")
peri_tul(33, "yumusak", "yumuşamış",
         "İki kolu tül şalın içinde gövdesine sarılmış gibi, kendini sarıyor; omuzları hafif düşük. Elinde nesne yok.",
         "yumuşamış, sıcak, biraz kırılgan; gözleri ışıldıyor, dudaklarında küçük, içten, utangaç bir gülümseme.",
         "Bu ifadeyi peri.tul.kas'tan ayıran: alay yok, kaşlar yumuşak, gülümseme içten ve küçük; kollar şalın içinde kendini sarıyor.",
         "kollar şalın içinde · içten küçük gülümseme (alaycı değil) · gül yaprağı saçta · zemin gri-mavi")

# ================================================================= 6. CENGO =========================
cengo(34, "utulu", "kas", "ütülü, kaşı kalkık",
      "Kolları göğsünde kavuşuk, iki elin parmakları görünüyor; bileklik görünüyor. Elleri boş.",
      "tek kaşı kalkık, şüpheci, hafif alaycı; dudağının bir ucu yukarıda.",
      "Bu ifadeyi cengo.utulu.normal'den ayıran: gerginlik yok, alaycı ve rahat; kollar kavuşuk.",
      "ütülü gömlek, saç TARANMIŞ · kollar kavuşuk, bileklik görünüyor · haki ceket YOK · zemin açık bej", poz_ref="poz_cengo_kas.jpg")
cengo(35, "utulu", "gulen", "ütülü, gülüyor",
      "Sağ eli ensesinde, sol eli pantolonun cebinde, başparmağı dışarıda; bileklik görünüyor. Elleri boş.",
      "içten, geniş, biraz mahcup bir gülüş; dişleri görünüyor, gözlerinin kenarı kırışık.",
      "Bu ifadeyi cengo.utulu.kas'tan ayıran: alay yok, geniş içten gülüş; eli ensesinde.",
      "geniş gülüş · eli ensesinde · ütülü gömlek · zemin açık bej", poz_ref="poz_cengo_gulen.jpg")
cengo(36, "utulu", "yumusak", "ütülü, yumuşak",
      "Sol eliyle sağ bileğindeki boncuklu bilekliği hafifçe tutuyor (bileklik görünüyor); omuzları hafif düşük.",
      "yumuşak, hüzünlü, sevgi dolu; gözleri nemli değil ama yumuşak, dudaklarında küçük, buruk bir gülümseme.",
      "Bu ifadeyi cengo.utulu.gulen'den ayıran: gülüş yok, buruk ve içe dönük; eli bileklikte.",
      "eli bilekliğe dokunuyor, bileklik kadrajın sağındaki bilekte · buruk gülümseme · zemin açık bej", poz_ref="poz_cengo_yumusak.jpg")
cengo(37, "utulu", "sinirli", "ütülü, alınmış ('Ben mi?')",
      "Sağ elinin parmak uçları kendi göğsünde (\"ben mi?\"), sol eli yana açılmış, avucu yukarı. Bileklik görünüyor. Kimseyi işaret etmiyor.",
      "alınmış, kızgın ama saldırgan değil; kaşları çatık, alnı kırışık, ağzı inanamayarak aralık.",
      "Bu ifadeyi cengo.utulu.kas'tan ayıran: alay yok, kaşlar çatık ve alın kırışık; eli kendi göğsünde.",
      "eli KENDİ göğsünde (kimseyi işaret etmiyor) · kaşlar çatık · bileklik görünüyor · zemin açık bej")
cengo(38, "utulu", "borek", "ütülü, ağzı börekle dolu",
      "Sağ elinde yarısı ısırılmış, üçgen bir dilim peynirli börek (yufkası çıtır, altın sarısı); sol avucu çenesinin altında, "
      "düşen birkaç börek kırıntısını havada yakalıyor. Bileklik görünüyor.",
      "ağzı börekle dolu, yanakları şişkin, keyifli, gözleri gülüyor; utanmaz bir mutluluk.",
      "Bu figürü cengo.utulu.gulen'den ayıran: elinde börek, ağzı dolu, avucu çenesinin altında kırıntı yakalıyor.",
      "elde TEK dilim börek · avuç çenenin altında, birkaç kırıntı havada · gömlekte leke YOK (kırıntı havada) · zemin açık bej",
      ek_kiy="Gömlek hâlâ tertemiz.")
DUVAK = ("Başında beyaz tülden uzun bir GELİN DUVAĞI: duvak başının üstüne oturmuş, yüzünden geriye atılmış, arkasından omuzlarına "
         "ve sırtına dökülüyor; yüzü tamamen AÇIK ve görünüyor. Saçı duvağın altında dağılmış. Gömlek hâlâ ütülü ama yakası hafif yamulmuş.")
cengo(39, "duvakli", "kas", "ütülü, başında gelin duvağı, kaşı kalkık",
      "Kolları göğsünde kavuşuk, iki elin parmakları görünüyor; bileklik görünüyor. Elleri boş.",
      "tek kaşı kalkık, ama yüzü ciddi ve dikkatle dinliyor; duvak gülünç, yüzü değil.",
      "Bu figürü cengo.utulu.kas'tan ayıran: başında gelin duvağı; yüz alaycı değil, dikkatle dinleyen.",
      "duvak başta, yüz AÇIK · kollar kavuşuk · bileklik · zemin açık bej", ek_kiy=DUVAK,
      ust_ek=["- kıyafet hâli (SR-B): kovalamaca + bank (itiraf) satırları; duvak K100'de başına geçti, metin çıkarmıyor."])
cengo(40, "duvakli", "yumusak", "ütülü, başında gelin duvağı, yumuşak",
      "Sol eliyle sağ bileğindeki boncuklu bilekliği hafifçe tutuyor; omuzları düşük.",
      "yumuşak, buruk, sevgi dolu; küçük, hüzünlü bir gülümseme. \"Buldum ama.\"",
      "Bu figürü cengo.duvakli.kas'tan ayıran: kaş yumuşak, buruk gülümseme, eli bileklikte.",
      "duvak başta, yüz AÇIK · eli bileklikte · buruk gülümseme · zemin açık bej", ek_kiy=DUVAK)
cengo(41, "buruk", "normal", "buruşuk gömlek, normal (kapanış)",
      "Ellerini pantolonunun ceplerine sokmuş, başparmakları dışarıda; bileklik kadrajın sağındaki bilekte görünüyor. Elleri boş.",
      "sakin, yorgun, dürüst; gülümsemiyor, hafif buruk.",
      "Bu figürü cengo.utulu.normal'den ayıran: gömlek BURUŞUK, saç dağınık; yüz yorgun ve buruk, gergin değil.",
      "kartın SAĞDAKİ buruşuk hâli · saç dağılmış · eller cepte · bileklik görünüyor · zemin açık bej")

# ================================================================= 7. EYLÜL İFADELERİ ==============
def eylul(n, key, baslik, poz, ifade, ayiran, kontrol, bakis=BAKIS):
    konuk(n, "Eylül", "eylul", "6", key, baslik, "açık bej", poz, ifade, ayiran, kontrol, ek_once=EYLUL16, bakis=bakis,
          ust_ek=["- kural 16: çekicilik/flört yok, poz sade.", "- not: G6z seçilirse zemin satırını 'gri-mavi' yap (üretimden önce)."])
eylul(42, "sevincli", "sevinçli ('Baba!')",
      "İki kolu öne, yarı açık, sarılmaya gidecekmiş gibi; sırt çantası sırtında. Elleri boş.",
      "sevinçli, heyecanlı, gözleri parlıyor; geniş, içten, çocuksu bir gülüş.",
      "Bu ifadeyi eylul.gulen'den ayıran: kollar açık, coşkulu, babasını görmenin sevinci; daha büyük bir gülüş.",
      "kollar öne yarı açık · coşkulu çocuksu gülüş · çanta sırtta · bileklik · çekicilik YOK")
eylul(43, "kiskanc", "kıskanç (Peri'yi süzüyor)",
      "Kolları göğsünde kavuşuk, sırt çantası sırtında. Elleri boş.",
      "kıskanç, şüpheci, somurtkan bir genç kız: dudakları büzük, kaşları hafif çatık, çenesi havada.",
      "Bu ifadeyi eylul.normal'den ayıran: kollar kavuşuk, dudaklar büzük, bakış süzen ve şüpheli.",
      "kollar kavuşuk · dudak büzük · bakış süzer gibi · çekicilik YOK",
      bakis="Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay; göz kapakları "
            "hafif kısık, karşısındakini tepeden tırnağa süzer gibi; kameraya değil. Profil değil.")
eylul(44, "gulen", "gülüyor (Gizem'le)",
      "Bir eli sırt çantasının askısında, öbürü gövdesinin yanında gevşek. Elleri boş.",
      "rahatlamış, sıcak, minnettar bir gülümseme; utangaç ama mutlu.",
      "Bu ifadeyi eylul.sevincli'den ayıran: coşku yok, sakin ve sıcak bir gülümseme; kollar kapalı.",
      "sakin sıcak gülümseme · bir el askıda · çekicilik YOK")
eylul(45, "uzgun", "üzgün (İzmir)",
      "İki eli sırt çantasının askılarını sıkıca tutuyor; omuzları düşük.",
      "üzgün, kırgın, ağlamaya yakın ama ağlamıyor; kaşları içten yukarı, dudakları titrek, gözleri nemli.",
      "Bu ifadeyi eylul.normal'den ayıran: kararlılık yok, kaşlar içten yukarı, gözler nemli; omuzlar düşük.",
      "gözler nemli ama yaş akmıyor · omuzlar düşük · eller askılarda · çekicilik YOK")

# ================================================================= 8. KONUKLAR =====================
konuk(46, "Haldun Bey", "haldun", "5", "dertli", "dertli (alnı terli)", "açık bej",
      "Sağ eli açık, avucu yukarı, göğüs hizasında (\"saklayacak bir şeyim yok\"); sol eli gövdesinin yanında. Elleri boş.",
      "dertli, sıkışmış, savunmada; kaşları içten yukarı, alnında ince ter damlaları, dudakları gergin.",
      "Bu ifadeyi haldun.normal'den ayıran: alnı terli, kaşlar kalkık ve dertli; eli avucu yukarı açık.",
      "alında ince ter damlaları · kravat GEVŞEK · gözlük · avuç yukarı · eller boş · zemin açık bej")
konuk(47, "Haldun Bey", "haldun", "5", "yumusak", "yumuşamış (İzmir)", "açık bej",
      "İki eli önünde, bel hizasında birbirine kenetli; omuzları gevşemiş. Elleri boş.",
      "yumuşamış, umutlu, biraz mahcup; küçük, içten bir gülümseme; gözleri sıcak.",
      "Bu ifadeyi haldun.dertli'den ayıran: ter yok, kaşlar yumuşak, küçük içten gülümseme; eller kenetli.",
      "ter YOK · küçük içten gülümseme · eller kenetli · zemin açık bej")
TEPSI_M = ("Elindeki nesne: yuvarlak, kenarlı, eski bakır renkli metal bir tepsi; üstünde kare kesilmiş, altın sarısı, yeni pişmiş peynirli "
           "su böreği dilimleri. Tepside başka bir şey yok. Elinde dikişe dair hiçbir şey YOK.")
konuk(48, "Müzeyyen Hanım", "muzeyyen", "3", "tepsi", "elinde börek tepsisi, güler yüzlü", "gri-mavi",
      "İki eliyle börek tepsisini önünde, bel hizasında tutuyor; tepsi yatay.",
      "sıcak, misafirperver, sevinçli bir anneanne gülümsemesi; gözleri ışıldıyor, hafif nostaljik.",
      "Bu figürü muzeyyen.normal'den ayıran: elinde börek tepsisi; gülümseme daha geniş ve sevinçli.",
      "tepside YALNIZ börek dilimleri · iki el tepsinin iki yanında · elinde dikişe dair hiçbir şey yok · inci kolye · zemin gri-mavi",
      ek=TEPSI_M, ust_ek=["- SR-M5: tepsi metnin getirdiği satırdan (anlatı) itibaren; bırakma sözü yok → salon sahnesinin bütün satırları tepsili."])
konuk(49, "Müzeyyen Hanım", "muzeyyen", "3", "tepsi_uzgun", "elinde börek tepsisi, üzgün", "gri-mavi",
      "İki eliyle börek tepsisini önünde, bel hizasının biraz altında tutuyor; omuzları düşük.",
      "üzgün, kırgın, düşünceli; kaşları içten yukarı, gözleri nemli ama ağlamıyor, dudakları kapalı.",
      "Bu figürü muzeyyen.tepsi'den ayıran: gülümseme yok, kaşlar içten yukarı, gözler nemli; tepsi daha aşağıda.",
      "aynı tepsi, aynı börek · gözler nemli, yaş akmıyor · zemin gri-mavi", ek=TEPSI_M)
konuk(50, "Müzeyyen Hanım", "muzeyyen", "3", "gergin", "gergin (suçlanınca)", "gri-mavi",
      "İki eli hırkasının önünü göğsünde kapatıyor, parmaklar hırkayı sıkıca tutuyor. Elinde nesne yok.",
      "gergin, savunmada; dudaklarında donmuş, zorlama bir gülümseme, çenesi hafif kalkık, gözlerinde korku.",
      "Bu ifadeyi muzeyyen.normal'den ayıran: sıcaklık yok, donmuş gülümseme ve korku; eller hırkayı kapatıyor; bakış kaçık.",
      "eller hırkayı kapatıyor · donmuş gülümseme · bakış karşısındakinin yüzüne değil · zemin gri-mavi",
      bakis="Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna ama karşısındakinin "
            "yüzüne değil, hafif aşağıya, omzunun yanına kaçıyor; kameraya değil. Profil değil.")
konuk(51, "Müzeyyen Hanım", "muzeyyen", "3", "itiraf", "itiraf (ağlıyor)", "gri-mavi",
      "Sağ eli göğsünde, kalbinin üstünde; sol eli gövdesinin yanında, parmakları gevşek. Elinde nesne yok.",
      "yıkılmış, pişman, ağlıyor: yanağından tek bir yaş süzülüyor, kaşlar içten yukarı, dudaklar titrek; ama sevgi dolu.",
      "Bu ifadeyi muzeyyen.gergin'den ayıran: savunma bitmiş, yüz çözülmüş, yanakta yaş; eli kalbinde.",
      "yanakta TEK yaş · eli kalbinde · saç düzgün · zemin gri-mavi")
konuk(52, "Jale Hanım", "jale", "4", "soguk", "soğuk", "gri-mavi",
      "Kolları göğsünde kavuşuk; bileğindeki iğnelik görünüyor. Elleri boş.",
      "soğuk, mesafeli, temkinli; dudakları ince bir çizgi, kaşları düz, bakışı keskin.",
      "Bu ifadeyi jale.normal'den ayıran: kollar kavuşuk, yüz kapalı ve mesafeli.",
      "kollar kavuşuk · iğnelik bilekte görünüyor · gülümseme yok · zemin gri-mavi")
konuk(53, "Jale Hanım", "jale", "4", "kacamak", "kaçamak (bardağı çeviriyor)", "gri-mavi",
      "Sol elinde küçük bir cam tabağın üstünde ince belli bir Türk çay bardağı, göğüs hizasının altında; sağ elinin parmak uçlarıyla "
      "bardağı tabağın içinde çeviriyor. Bileğindeki iğnelik görünüyor.",
      "kaçamak, huzursuz, yalan söyleyen biri: dudakları gergin, kaşları hafif kalkık, bakışını kaçırıyor.",
      "Bu figürü jale.soguk'tan ayıran: elinde tabaklı çay bardağı, parmakları bardağı çeviriyor; bakış aşağıda, kaçamak.",
      "TABAKLI tek çay bardağı · parmaklar bardağı çeviriyor (SR-F: ipucu taşıyan eylem) · bakış aşağıda · zemin gri-mavi",
      ek="Elindeki nesne: küçük cam tabak üstünde, yarısı dolu, ince belli bir Türk çay bardağı.",
      bakis="Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna ama AŞAĞIDA, "
            "elindeki bardağa bakıyor; karşısındakinin gözüne değil, kameraya değil. Profil değil.",
      ust_ek=["- SR-F: \"Yalan söylerken bardağı çeviriyorsunuz\" — eylem bu figürde görünür; kacamak satırlarının hepsi çay bahçesinde."])
konuk(54, "Jale Hanım", "jale", "4", "ofkeli", "öfkeli", "gri-mavi",
      "Sağ eli göğsünde, parmakları açık (\"ben mi?\"); sol eli yana açık, avucu yukarı. Kimseyi işaret etmiyor. İğnelik bilekte.",
      "öfkeli, alınmış; kaşları çatık, burun kanatları açık, ağzı konuşurken açık.",
      "Bu ifadeyi jale.soguk'tan ayıran: soğukluk yerine öfke; kaşlar çatık, ağız açık, eller açık.",
      "eli kendi göğsünde (kimseyi işaret etmiyor) · kaşlar çatık · zemin gri-mavi")
konuk(55, "Jale Hanım", "jale", "4", "makbuz", "elinde makbuz", "gri-mavi",
      "Sağ elinde küçük, dikdörtgen, beyaz bir makbuz kâğıdı, göğüs hizasında; kâğıdın yazılı yüzü KENDİNE dönük, kameraya kâğıdın boş "
      "arkası görünüyor. Sol eli gövdesinin yanında.",
      "soğuk, işini bilen, kararlı; dudakları ince bir çizgi.",
      "Bu figürü jale.soguk'tan ayıran: elinde makbuz; kollar kavuşuk değil.",
      "makbuzun yalnız BOŞ arkası görünüyor, yazı yok · iğnelik bilekte · zemin gri-mavi",
      ek="Elindeki nesne: küçük beyaz bir makbuz kâğıdı (avuç içi büyüklüğünde).")
konuk(56, "Jale Hanım", "jale", "4", "uzaniyor", "öfkeli, torbaya uzanıyor", "gri-mavi",
      "Sağ kolu kadrajın soluna ve aşağısına doğru uzanmış, eli açık, parmakları kadraj dışındaki bir torbayı tutmaya gidiyor; sol eli "
      "gövdesinin yanında yumruk. Elinde nesne yok.",
      "öfkeli, kararlı, meydan okuyan; kaşları çatık, çenesi kenetli.",
      "Bu figürü jale.ofkeli'den ayıran: kolu kadrajın soluna-aşağıya uzanmış, eli bir şeyi tutmaya gidiyor; yüz kenetli ve kararlı.",
      "kol sola-aşağı uzanmış, el açık ve BOŞ · torba kadrajda YOK · kaşlar çatık · zemin gri-mavi")
konuk(57, "Recep Efendi", "recep", "7", "gulen", "gülüyor (tanıdı)", "açık bej",
      "İki eli tombul karnının üstünde birleşmiş; kimseyi işaret etmiyor. Elleri boş, süpürge yok.",
      "bilmiş, keyifli bir gülüş; gözleri kısılmış, \"seni tanıdım\" der gibi; yanakları kabarık.",
      "Bu ifadeyi recep.normal'den ayıran: bilmiş geniş gülüş, gözler kısık; eller karnında.",
      "eller karnında, kimseyi işaret ETMİYOR · süpürge YOK · yelek · zemin açık bej")
konuk(58, "Recep Efendi", "recep", "7", "supurge", "elinde süpürge", "açık bej",
      "İki eliyle uzun saplı bir çalı süpürgesinin sapını tutuyor, süpürgenin ucu kadrajın altına doğru, yeri süpürür gibi; gövdesi hafif öne eğik.",
      "işine dalmış, sakin, iyi niyetli; ağzı kapalı.",
      "Bu figürü recep.normal'den ayıran: elinde süpürge, gövde öne eğik, işine dalmış.",
      "süpürge sapı iki elde · süpürgenin ucu kadraj altına doğru · zemin açık bej",
      ek="Elindeki nesne: uzun ahşap saplı, ucu sarı çalıdan bir sokak süpürgesi.")
konuk(59, "Dilek", "dilek", "8", "heyecanli", "heyecanlı (Peri'yi tanıdı)", "açık bej",
      "İki elinin avuçları yanaklarında, parmakları açık; ağzında artık iğne YOK (yere düştüler). Boynunda beyaz mezura.",
      "hayran, heyecanlı, inanamayan; gözleri kocaman ve ışıl ışıl, ağzı sevinçle açık.",
      "Bu ifadeyi dilek.normal'den ayıran: ağzında iğne yok, avuçlar yanaklarda, yüz hayranlıkla açılmış.",
      "ağızda iğne YOK · avuçlar yanaklarda · mezura boyunda, üstünde rakam yok · zemin açık bej")
konuk(60, "Tahsin Usta", "tahsin", "9", "gulen", "gülüyor (Cengo'yu karşılıyor)", "açık bej",
      "İki kolu iki yana açık, kucaklamaya hazır; avuçları öne. Elleri boş.",
      "kahkahayla gülüyor, sevinçli, şakacı; gözleri kalın gözlüğün arkasında kısılmış.",
      "Bu ifadeyi tahsin.normal'den ayıran: kollar açık, kahkaha; yüz şakacı.",
      "kollar açık · kahkaha · kalın gözlük · mürekkepli önlük · zemin açık bej")

# ================================================================= 9. KARELER ======================
def kare(n, key, baslik, refs, kontrol, govde, tur="ara kare", ust_ek=(), oran=ORAN_K, satir=True):
    sk = satir if isinstance(satir, tuple) else (f"KARE {key}" if satir else None)
    yaz(n, baslik, [f"- tür: {tur} · anahtar: `{key}`"] + list(ust_ek), refs, sk, kontrol,
        [TARZ] + govde + ["Çıplaklık yok.", YAZI, oran])

PERI_KISA = ("Peri (birinci karakter referansının yüzü; kıyafet Peri'nin kart referansındaki gibi: dar açık mavi kot, belde düğümlü beyaz "
             "gömlek, altında derin oyuk yakalı siyah atlet, at kuyruğu, beyaz spor ayakkabı)")
CENGO_KISA = ("Cengo (Cengo referansının yüzü ve kıyafeti: ütülü açık mavi gömlek, lacivert pantolon, kahverengi kemer; saç taranmış; renkli "
              "boncuklu bileklik)")
kare(61, "D18", "Detay: Eylül üç zarfı masaya koyuyor",
     [BURO_G, ("onayli/G26.png", "Eylül'ün kıyafet kartı: YALNIZ kot ceketin kolu ve bileklik")],
     "YALNIZ eller ve kollar (yüz yok) · TAM 3 zarf · kâğıtta okunur harf YOK · kot ceket kolu + boncuklu bileklik · pul yok",
     ["Detay: birinci referanstaki büronun ahşap masasının üstü, yakından, yukarıdan hafif çapraz. Kadrajda bir genç kızın İKİ eli ve kot ceket "
      "kollu bilekleri: eller masaya üç düz beyaz zarf bırakıyor (zarflarda pul, adres, damga YOK). Zarflardan birinin içinden katlanmış ince bir "
      "kâğıt yarı çıkmış, açık ucunda kurşun kalemle yazılmış birkaç satırın gri izi görünüyor ama okunmuyor (bulanık gri çizgiler, harf seçilmez). "
      "Genç kızın bir bileğinde renkli boncuklu, çocuk işi bir bileklik (ikinci referanstaki gibi). Yüz kadrajda YOK. Masada başka nesne yok.",
      "Işık öğleden sonra, sıcak. Eller genç ve masum; oje yok."])
kare(62, "D19", "Detay: Cengo'nun bileğinde boncuklu bileklik",
     [CENGO_T, KART_CENGO],
     "yakın plan BİLEK · bileklik renkli boncuklu, çocuk işi, birkaç boncuk eğri · gömlek kolu açık mavi ütülü · yüz yok",
     ["Detay: yakın plan, bir adamın bileği ve eli (birinci ve ikinci referanstaki Cengo'nun bileği): ütülü, kolalı açık mavi gömleğin manşeti "
      "biraz yukarı kaymış; bileğinde renkli boncuklu, ucuz, çocuk işi bir bileklik: boncuklar farklı renklerde ve boyda, ipi eskimiş, "
      "birkaç boncuk eğri dizilmiş, yedi yaşında bir çocuğun elinden çıkmış gibi. El gevşek, parmakları hafif kıvrık. Arka plan bulanık, sıcak "
      "büro ışığı. Yüz kadrajda yok."])
kare(63, "D20", "Detay: Tahsin mektubu ışığa tutuyor",
     [("onayli/G15.png", "Karaköy matbaası (onaylı mekân)"), ("onayli/G9.png", "Tahsin Usta (onaylı temel)")],
     "kâğıt ışığa karşı · içinde ince NOKTALI çizgiler (kalıp kâğıdı) · yazı OKUNMUYOR · Tahsin'in elleri ve gözlüğü",
     ["Detay: birinci referanstaki matbaada, pencerenin önünde. İkinci referanstaki Tahsin Usta (gür dalgalı beyaz saç, kalın gözlük, mürekkepli "
      "önlük) iki eliyle ince, yarı saydam bir kâğıdı pencereden gelen ışığa tutuyor; kamera omzunun yanından, kâğıda yakın. Işığın içinden "
      "kâğıdın dokusunda ince, NOKTALI, düz ve eğri kalıp çizgileri beliriyor (terzi kalıp kâğıdı gibi). Kâğıdın üstünde kurşun kalem izleri "
      "yalnız soluk gri lekeler; harf seçilmiyor. Tahsin'in yüzünün yalnız bir kısmı ve kalın gözlüğü kadrajın kenarında, dikkatle bakıyor.",
      "Her elin beş parmağı var; iki el kâğıdın iki üst köşesinde."])
kare(64, "D21", "Detay: Müzeyyen katlanmış kâğıdı Peri'ye uzatıyor",
     [("onayli/G16.png", "Bahariye Caddesi (onaylı mekân, kovalamaca)"), ("onayli/G19.png", "Müzeyyen'in kıyafet kartı: YALNIZ hırkanın kolu ve eli")],
     "yaşlı kadın eli + lacivert hırka kolu · kâğıt KATLI, yazı görünmüyor · karşıdan uzanan genç kadın eli · yüz yok",
     ["Detay: birinci referanstaki caddede, bir bankın önünde, yakın plan; yüz yok. Soldan, ince lacivert hırka kollu yaşlı bir kadının eli "
      "(ikinci referanstaki Müzeyyen'in hırkası) katlanmış, ince, beyaz bir kâğıdı uzatıyor; kâğıt dört katlı, dış yüzü boş, içindeki yazı "
      "görünmüyor. Sağdan bir genç kadının eli (sıvalı, nemli beyaz gömlek kolunun üstünde beyaz tül şalın ucu) kâğıdı almak için uzanıyor; "
      "iki el kâğıdın iki ucunda, henüz el değiştirmemiş. Arka planda bulanık çiçekçi kovaları.",
      "Yaşlı elde yüzük yok, dikiş iğnesi, mezura ya da makas YOK."])
kare(65, "K96", "Giriş: Peri Cengo'nun yakasını düzeltiyor (çekicilik anı, Eylül yok)",
     [BURO_G, PERI_BAS, KART_PERI, CENGO_T],
     "TAM 2 kişi · Peri İKİ parmakla yakada · Peri süzüyor · Cengo gergin · Eylül YOK · çekicilik eski onaylı Peri'den az değil · beyaz spor ayakkabı",
     ["Sahne: birinci referanstaki büro, öğleden sonra, sıcak gün ışığı. Kadrajda TAM 2 kişi. Masanın üstünde açık duran bir dergi.",
      f"Solda {PERI_KISA} (ikinci ve üçüncü referans): masadan yeni kalkmış, Cengo'ya çok yakın duruyor; sağ elinin iki parmağıyla onun gömleğinin "
      "yakasını düzeltiyor, sol eli belinde. Bakışı Cengo'yu baştan aşağı süzüyor; kaşı kalkık, dudağında alaycı, çekici bir yarım gülümseme.",
      f"Sağda {CENGO_KISA} (dördüncü referans): dimdik, gergin, kolları yanında; gözleri Peri'nin yüzünde, utangaç ve şaşkın.",
      PERI_CEK, PERI_EN, KALABALIK])
kare(66, "K97", "Giriş: Eylül Cengo'ya sarılıyor, Peri'nin dergisi düşüyor",
     [BURO_G, PERI_BAS, KART_PERI, CENGO_T, ("onayli/G26.png", "Eylül'ün kıyafet kartı (yüz ve kıyafet)")],
     "TAM 3 kişi · Eylül masum, yaşına uygun · Cengo kızına sarılıyor · dergi HAVADA ya da yerde, kapağında yazı yok · Peri şaşkın · çekicilik vurgusu YOK",
     ["Sahne: birinci referanstaki büro, öğleden sonra. Kadrajda TAM 3 kişi.",
      "Ortada ve sağda: kapının önünde Cengo ile kızı Eylül sarılıyor. " + CENGO_KISA + " (dördüncü referans) iki koluyla kızını sarmış, gözleri "
      "kapalı, mutlu. Eylül (beşinci referans: uzun düz koyu kahve saç, kot ceket, siyah tişört, sırt çantası, boncuklu bileklik) koşarak "
      "gelmiş, babasının boynuna sarılmış, yüzü üç çeyrek görünüyor, sevinçle gülüyor. " + EYLUL16,
      f"Solda masanın yanında {PERI_KISA} (ikinci ve üçüncü referans): şaşkınlıktan donmuş, kaşları yukarıda, ağzı açık; elinden bir dergi "
      "yere düşüyor (dergi havada, sayfaları açılmış, kapağında ve sayfalarında yazı ya da resim seçilmiyor).",
      "Bu karede çekicilik vurgusu YOK: Peri sade duruyor, poz yok; sahne bir aile anı.", KALABALIK])
SERIT3 = ("referanslar/serit_muzeyyen_jale_dilek.jpg", "Müzeyyen, Jale, Dilek (soldan sağa; onaylı kıyafet kartları G19–G21)")
ATOLYE = ("onayli/G12.png", "gelinlik atölyesi (onaylı mekân)")
TORBA = ("Gelinlik TORBASI: boydan, beyaz-krem, opak, kalın kumaştan fermuarlı bir elbise torbası; içindeki gelinlik görünmüyor; üstünde "
         "yazı, etiket, logo yok.")
kare(67, "K98", "Yüzleşme açılışı: cuma akşamı atölye",
     [ATOLYE, PERI_BAS, KART_PERI, CENGO_T, SERIT3],
     "TAM 5 kişi · torba ASKIDA, kapalı · Müzeyyen torbanın başında, eli boş · Jale tezgâhta · kalfa vitrinde · Peri ve Cengo kapıda · akşam ışığı",
     ["Sahne: birinci referanstaki gelinlik atölyesi, cuma akşamı; vitrinden dışarısı kararmış, içeride sıcak sarı lambalar yanık. "
      "Kadrajda TAM 5 kişi. " + TORBA + " Torba ayaklı bir askıda asılı, kapalı.",
      "Torbanın hemen yanında Müzeyyen Hanım (beşinci referansta SOLDAKİ: kısa kül sarısı mizanpli saç, lacivert puantiyeli elbise, ince "
      "lacivert hırka, inci kolye): elleri boş, önünde birleşmiş, kapıya dönmüş, sıcak ama hafif tedirgin gülümsüyor.",
      "Arkada, tezgâhın arkasında Jale Hanım (beşinci referansta ORTADAKİ: kısa düz kızıl saç, sade siyah elbise, bileğinde iğnelik): "
      "tezgâha iki eliyle yaslanmış, kapıya soğuk bakıyor. Vitrinin önünde kalfa Dilek (beşinci referansta SAĞDAKİ: kâküllü siyah saç, hardal "
      "kazak, pembe önlük, boynunda mezura): bir mankenin duvağını düzeltirken başını kapıya çevirmiş.",
      f"Kapının içinde, ön planda yan yana: {PERI_KISA} (ikinci ve üçüncü referans), ciddi ve kararlı; ve {CENGO_KISA} (dördüncü referans), ciddi.",
      "Kompozisyon: kamera atölyenin iç köşesinde, kapıyı ve askıyı çapraz görüyor; Peri ve Cengo solda önde, torba ve Müzeyyen ortada, Jale "
      "sağda arkada.", PERI_EN, KALABALIK])
kare(68, "K99", "Yüzleşme kaçışı: Müzeyyen torbayı askıdan kapıp kapıya koşuyor",
     [ATOLYE, PERI_BAS, KART_PERI, CENGO_T, SERIT3],
     "Müzeyyen torbayı kucaklamış, kapıya KOŞUYOR · askı boş, sallanıyor · Jale arkada, elinde küçük beyaz makbuz (yazı görünmüyor) · Peri ve Cengo şaşkın, yerinden fırlıyor · TAM 5 kişi",
     ["Sahne: birinci referanstaki gelinlik atölyesi, akşam, sıcak lambalar yanık. Kadrajda TAM 5 kişi. " + TORBA,
      "Müzeyyen Hanım (beşinci referansta SOLDAKİ) torbayı askıdan kapmış, iki koluyla göğsüne bastırmış, kapıya doğru koşuyor; adımı büyük, "
      "hırkası savrulmuş, yüzü kararlı ve korkmuş. Ayaklı askı boşta sallanıyor.",
      "Arkada, tezgâhın yanından dönen Jale Hanım (beşinci referansta ORTADAKİ): elinde küçük beyaz bir makbuz (yazılı yüzü görünmüyor), ağzı "
      "açık, inanamıyor. Vitrinde kalfa Dilek (beşinci referansta SAĞDAKİ) iki eli ağzında.",
      f"Ön planda {PERI_KISA} (ikinci ve üçüncü referans) ve {CENGO_KISA} (dördüncü referans): ikisi de şaşkın, yerinden fırlamak üzere, Müzeyyen'e dönmüşler.",
      "Kompozisyon: kamera tezgâh tarafında; kapı kadrajın sağında, açık; Müzeyyen ortadan sağa, kapıya koşuyor.", PERI_EN, KALABALIK],
     ust_ek=["- SR-M7: doğru, zayıf, cengo yolları (askıdan kapıyor; Jale makbuzla dönüyor). Jale yolu K99j."])
kare(69, "K99j", "Yüzleşme kaçışı (Jale yolu): Müzeyyen torbayı Jale'nin elinden kapıyor",
     [ATOLYE, PERI_BAS, KART_PERI, CENGO_T, SERIT3],
     "torba Müzeyyen'in kollarında, Jale'nin elleri BOŞ kaldı, torbanın az önceki yerinde · makbuz YOK · askı yok · TAM 5 kişi",
     ["Sahne: birinci referanstaki gelinlik atölyesi, akşam, sıcak lambalar yanık. Kadrajda TAM 5 kişi. " + TORBA,
      "Ortada Jale Hanım (beşinci referansta ORTADAKİ): iki kolu önde, elleri açık ve BOŞ, az önce tuttuğu torbanın yerinde havada kalmış; "
      "şaşkın ve öfkeli. Elinde makbuz YOK.",
      "Müzeyyen Hanım (beşinci referansta SOLDAKİ) torbayı Jale'nin elinden yeni kapmış, iki koluyla göğsüne bastırmış, kapıya doğru dönüp "
      "koşmaya başlıyor; hırkası savrulmuş, yüzü korkmuş ve kararlı.",
      f"Vitrinde kalfa Dilek (beşinci referansta SAĞDAKİ), iki eli ağzında. Ön planda {PERI_KISA} (ikinci ve üçüncü referans) ve {CENGO_KISA} "
      "(dördüncü referans): yerinden fırlamak üzere.",
      "Kompozisyon: kamera vitrin tarafında; kapı kadrajın solunda, açık; Müzeyyen sağdan sola kapıya koşuyor (K99'dan ters yön).", PERI_EN, KALABALIK],
     ust_ek=["- SR-M7: Jale yolunun anı (Jale torbayı açmak üzereyken elinden kapılıyor). K99'dan ayrı an, ayrı kamera."])
BAHARIYE = ("onayli/G16.png", "Bahariye Caddesi, çiçekçi (onaylı mekân)")
GULLU = ("ıslak: beyaz gömlek ve kot sırılsıklam, gömlek altındaki siyah atlete yapışık değil, gevşek; TENİ KENDİ RENGİNDE, ıslaklık "
         "yalnız kumaşta ve saçta; saçında, omuzlarında kırmızı ve pembe gül yaprakları; at kuyruğu dağılmış")
kare(70, "K100", "Kovalamaca 1: Cengo duvaklı mankenle çarpışıyor",
     [BAHARIYE, CENGO_T, ATOLYE, ("onayli/G19.png", "Müzeyyen'in kıyafet kartı")],
     "duvak Cengo'nun başında, YÜZÜNÜN ÜSTÜNE düşmüş · manken devriliyor · Müzeyyen uzakta torbayla koşuyor · Peri kadrajda yok · gülünç, acı yok",
     ["Sahne: atölyenin kapısının önü, Bahariye Caddesi'nin kaldırımı (birinci referanstaki cadde; üçüncü referanstaki atölyenin vitrini "
      "arkada). Gündüz, akşamüstü ışığı. Kadrajda TAM 2 kişi ve bir vitrin mankeni.",
      f"Ön planda {CENGO_KISA} (ikinci referans): kapıdan fırlamış, kapının önündeki gelinlikli bir vitrin mankeniyle çarpışmış; mankenin uzun "
      "beyaz tül GELİN DUVAĞI Cengo'nun başına geçmiş ve yüzünün üstüne düşmüş, yüzü tülün ardından belli belirsiz görünüyor; iki kolu öne "
      "uzanmış, el yordamıyla yol arıyor. Manken yana devriliyor (mankenin yüzü ifadesiz, düz).",
      "Arka planda, kaldırımın ilerisinde Müzeyyen Hanım (dördüncü referans: lacivert puantiyeli elbise, ince lacivert hırka, kül sarısı saç) "
      "kucağında beyaz, fermuarlı, opak bir gelinlik torbasıyla koşuyor; küçük ve uzakta, sırtı yarı dönük.",
      KOMEDI, KALABALIK])
kare(71, "K101", "Kovalamaca 2: Peri gelinlik kuyruğuna basıp çiçekçinin kovalarına düşüyor",
     [BAHARIYE, PERI_BAS, KART_PERI, ("onayli/G19.png", "Müzeyyen'in kıyafet kartı")],
     "Peri kovaların arasında yerde, bacaklar havada, BEYAZ SPOR AYAKKABI · ıslak ama TEN kendi renginde · güller etrafa saçılmış · uzun gelinlik kuyruğu kaldırımda · Müzeyyen ileride · çekicilik eski onaylıdan az değil",
     ["Sahne: birinci referanstaki Bahariye Caddesi, bir çiçekçinin önü; kaldırımda su dolu çinko kovalarda gül demetleri. Akşamüstü ışığı. "
      "Kadrajda TAM 2 kişi.",
      "Kaldırıma açılmış bir gelinlik torbasından uzun, beyaz, dantelli bir gelinlik KUYRUĞU kaldırım boyunca uzanıyor.",
      f"Ön planda {PERI_KISA} (ikinci ve üçüncü referans): kuyruğa basıp kaymış, devrilen kovaların arasına sırtüstü düşmüş, dirseklerinin "
      f"üstünde; bacakları havada, beyaz spor ayakkabıları görünüyor. {GULLU}. Etrafında devrilmiş kovalar, akan su, saçılmış güller. "
      "Yüzü öfkeli ve şaşkın, ağzı açık.",
      "Arka planda Müzeyyen Hanım (dördüncü referans) torbayla ileride, bir an dönüp bakıyor.",
      KOMEDI, PERI_KOMIK, KALABALIK])
kare(72, "K102", "Kovalamaca 3: fotoğrafçı flaş patlatıyor, 'Ben gelin değilim!'",
     [BAHARIYE, PERI_BAS, KART_PERI],
     "Peri ayakta, ıslak, güllü · bir eli belinde, öbürüyle fotoğrafçıyı itiyor · fotoğrafçının makinesinde logo YOK · flaş patlıyor · TAM 2 kişi · çekicilik az değil",
     ["Sahne: birinci referanstaki Bahariye Caddesi, çiçekçinin önü; yerde devrik kovalar ve güller. Akşamüstü ışığı. Kadrajda TAM 2 kişi.",
      f"Solda {PERI_KISA} (ikinci ve üçüncü referans): ayağa kalkmış, {GULLU}. Bir eli belinde; öbür eliyle önündeki fotoğrafçının "
      "objektifini itiyor. Yüzü öfkeli ve sinirli, kaşları çatık, ağzı açık (bağırıyor).",
      "Sağda bir düğün fotoğrafçısı: otuzlarında, zayıf bir adam, siyah yelek, beyaz gömlek, boynunda askı; büyük siyah bir fotoğraf makinesini "
      "yüzüne kaldırmış, flaşı patlıyor (beyaz parlama). Makinede ve askıda logo, yazı YOK. Coşkulu, sırıtıyor.",
      KOMEDI, PERI_KOMIK, KALABALIK])
kare(73, "K103", "Kovalamaca 4: kuyruk geriliyor, Müzeyyen banka oturuveriyor, teyze gösteriyor",
     [BAHARIYE, PERI_BAS, KART_PERI, CENGO_T, ("onayli/G19.png", "Müzeyyen'in kıyafet kartı")],
     "TAM 4 kişi · kuyruk Peri'nin ayağından torbaya GERİLİ · Müzeyyen bankta oturmuş · duvaklı Cengo (yüzü AÇIK) torbayı tutuyor · teyze Peri ile Cengo'yu gösteriyor",
     ["Sahne: birinci referanstaki Bahariye Caddesi; kaldırımda bir bank, çiçekçinin kovaları. Akşamüstü. Kadrajda TAM 4 kişi.",
      f"Solda {PERI_KISA} (ikinci ve üçüncü referans), {GULLU}: doğrulmuş, ayakta; uzun beyaz gelinlik kuyruğunun ucu ayağına dolanmış, kuyruk "
      "ondan kadrajın ortasına doğru GERGİN bir çizgi gibi uzanıyor.",
      "Ortada bir bank: kuyruğun öbür ucu açık fermuarlı beyaz gelinlik torbasında; torba geri çekilmiş, Müzeyyen Hanım (beşinci referans) "
      "torbayla birlikte geri çekilip banka oturuvermiş, şaşkın ve nefes nefese.",
      f"Bankın yanında {CENGO_KISA} (dördüncü referans), başında uzun beyaz gelin duvağı (yüzünden geriye atılmış, yüzü açık): torbayı iki eliyle tutmuş.",
      "Sağda, kaldırımda yaşlı, tombul, başörtülü, elinde file pazar çantası olan bir teyze: işaret parmağıyla Peri'yi ve duvaklı Cengo'yu "
      "gösteriyor, duygulanmış, gülümsüyor.",
      KOMEDI, PERI_EN, KALABALIK])
kare(74, "K104", "Kovalamaca sonu: Peri kuyruğun ucu elinde, çenesi havada",
     [BAHARIYE, PERI_BAS, KART_PERI, CENGO_T, ("onayli/G19.png", "Müzeyyen'in kıyafet kartı")],
     "Peri önde, kuyruğun ucunu bir elinde tutuyor, çenesi HAVADA, gururlu · ıslak, güllü · arkada bankta Müzeyyen ve torbayı tutan duvaklı Cengo, küçük",
     ["Sahne: birinci referanstaki Bahariye Caddesi; kaldırımda bank, devrik kovalar, saçılmış güller. Akşamüstü ışığı Peri'nin üstünde.",
      f"Önde {PERI_KISA} (ikinci ve üçüncü referans), {GULLU}: dimdik duruyor, bir elinde uzun beyaz gelinlik kuyruğunun ucu bir zafer "
      "bayrağı gibi; öbür eli belinde; çenesi havada, gururlu, hafif kendini beğenmiş bir yarım gülümseme.",
      "Arka planda, küçük ve odak dışı: bankta oturan Müzeyyen Hanım (beşinci referans) ve yanında, başında gelin duvağı (yüzü açık), torbayı "
      f"tutan {CENGO_KISA} (dördüncü referans). Kadrajda TAM 3 kişi.",
      KOMEDI, PERI_KOMIK, KALABALIK])
kare(75, "K105", "Kovalamaca sonu: kalfa tül şalı Peri'nin omuzlarına atıyor",
     [BAHARIYE, PERI_BAS, KART_PERI, ("onayli/G21.png", "Dilek'in kıyafet kartı")],
     "Dilek koşarak gelmiş, tül şal havada Peri'nin omuzlarına iniyor · Dilek'in öbür elinde havlu · Peri ıslak, güllü · TAM 2 kişi",
     ["Sahne: birinci referanstaki Bahariye Caddesi, çiçekçinin önü. Akşamüstü. Kadrajda TAM 2 kişi.",
      f"Solda {PERI_KISA} (ikinci ve üçüncü referans), {GULLU}: ayakta, kollarını hafif açmış, şaşkın ve minnettar.",
      "Sağda kalfa Dilek (dördüncü referans: kısa kâküllü siyah saç, hardal kazak, açık pembe önlük, boynunda beyaz mezura, ağzında iğne YOK): "
      "koşarak gelmiş; bir eliyle beyaz, yarı saydam, büyük bir TÜL ŞALI Peri'nin omuzlarına atıyor (şal havada, omuzlara inmek üzere); öbür "
      "kolunda katlı beyaz bir havlu. Yüzü telaşlı ve hayran.",
      PERI_KOMIK, PERI_EN, KALABALIK])
# ---- karar kareleri (SR-K: SONUÇ'un asıl anı)
kare(76, "K106", "Karar: yazanı söyle — düğün, Müzeyyen en arka masada",
     [("onayli/G19.png", "Müzeyyen'in kıyafet kartı (yüz ve kıyafet)")],
     "düğün salonu · Müzeyyen EN ARKA masada YALNIZ, üzgün · gelin önde, SIRTI dönük, yüzü görünmüyor · Peri ve Cengo yok · yazı, pankart yok",
     ["Sahne: akşam, sade bir düğün salonu; sıcak sarı ışıklar, beyaz örtülü yuvarlak masalar, masalarda küçük çiçek aranjmanları. Ön planda "
      "dans eden, odak dışı, yüzleri seçilmeyen birkaç konuk. Önde, kadrajın solunda beyaz gelinlikli, duvaklı bir gelin: SIRTI kameraya "
      "dönük, yüzü görünmüyor, başka tarafa dönmüş.",
      "Kadrajın derininde, salonun EN ARKA masasında, yalnız başına Müzeyyen Hanım (birinci referans: kısa kül sarısı mizanpli saç, lacivert "
      "puantiyeli elbise, ince lacivert hırka, inci kolye) oturuyor: elleri kucağında, önündeki tabağa dokunmamış, gelini uzaktan izliyor; "
      "yüzü yalnız ve hüzünlü. Masasında başka kimse yok; ışık onun üstünde biraz daha loş.",
      "Kompozisyon: kamera salonun ortasından derine bakıyor; gelin ile Müzeyyen arasında boş masalar ve dans edenler; mesafe hikâyeyi anlatıyor.",
      KALABALIK],
     satir=("SONUÇ", "Haldun'a ve Gamze'ye dördüncü mektubu verip yazanın adını söyledin. Düğün oldu. Gamze düğünde annesiyle tek kelime konuşmadı; Müzeyyen en arka masada oturdu. Bir hafta sonra İzmir'e gittiler."),
     ust_ek=["- SONUÇ: \"Gamze düğünde annesiyle tek kelime konuşmadı; Müzeyyen en arka masada oturdu.\" Gamze'nin resmi yok → sırtı dönük gelin."])
kare(77, "K107", "Karar: kendisi söylesin — sofrada Gamze annesine sarılıyor",
     [("onayli/G19.png", "Müzeyyen'in kıyafet kartı"), ("onayli/G5.png", "Haldun Bey (onaylı temel)"), ("onayli/G26.png", "Eylül'ün kıyafet kartı")],
     "TAM 4 kişi · Gamze'nin YÜZÜ annesinin omzunda, görünmüyor · Müzeyyen ağlıyor, sarılıyor · Haldun ve Eylül masada, masum · Peri ve Cengo yok",
     ["Sahne: akşam, sıcak ışıklı mütevazı bir ev salonunda kurulu sofra (Müzeyyen'in salonu değil; daha sade, alt kat): beyaz örtü, yemek "
      "tabakları, ekmek sepeti, su bardakları. Kadrajda TAM 4 kişi.",
      "Sofranın başında, ayağa kalkmış iki kadın sarılıyor: Müzeyyen Hanım (birinci referans) gözleri kapalı, ağlıyor, kızına sarılmış. Kızı "
      "Gamze (otuzlarının ortasında, koyu kumral omuz boyu saç, bordo kazak) annesine sıkıca sarılmış, YÜZÜ annesinin omzuna gömülü, görünmüyor.",
      "Masada oturan Haldun Bey (ikinci referans: kır şakaklar, ince gözlük, gri takım; ceketi çıkarılmış, kravatı gevşek) duygulanmış, eli "
      "ağzında. Masanın öbür ucunda Eylül (üçüncü referans, sırt çantası yok, kot ceket sandalyenin arkasında, siyah tişörtle) ellerini "
      "masada birleştirmiş, gözleri dolu, annesiyle anneannesine bakıyor. " + EYLUL16,
      KALABALIK],
     satir=("SONUÇ", "Mektubu Müzeyyen'e geri verdin: \"Düğünden önceki akşam, sofrada, siz söyleyeceksiniz.\" Söyledi. Gamze ağladı, sonra annesine sarıldı. Haldun İzmir'e tek gitti; Gamze ve Eylül okul bitene kadar Üsküdar'da kalacak."),
     ust_ek=["- SONUÇ: \"Düğünden önceki akşam, sofrada… Gamze ağladı, sonra annesine sarıldı.\" Gamze'nin resmi yok → yüzü gizli."])
kare(78, "K108", "Karar: parasını al — Müzeyyen zarfı Peri'ye veriyor",
     [("onayli/G14.png", "Müzeyyen'in salonu (onaylı mekân)"), PERI_BAS, KART_PERI, CENGO_T, ("onayli/G19.png", "Müzeyyen'in kıyafet kartı")],
     "TAM 3 kişi · zarf Müzeyyen'in elinden Peri'nin eline geçiyor, kapalı, üstünde yazı YOK, para GÖRÜNMÜYOR · Cengo arkada, zarfa bakmıyor, elleri cebinde",
     ["Sahne: birinci referanstaki salon (dantel örtüler, vitrinde porselen), gündüz. Kadrajda TAM 3 kişi. Masada börek yok.",
      "Müzeyyen Hanım (beşinci referans) ayakta, iki eliyle kalın, kapalı, düz beyaz bir zarfı uzatıyor (zarfta yazı yok, içi görünmüyor); "
      "yüzü yorgun, ağır, gözlerini kaçırıyor.",
      f"Karşısında {PERI_KISA} (ikinci ve üçüncü referans; kıyafeti kuru ve düzgün): bir eliyle zarfı alıyor, iki elleri zarfın iki ucunda; yüzü "
      "ciddi, kararını vermiş.",
      f"Arkada, pencerenin yanında {CENGO_KISA} (dördüncü referans): elleri ceplerinde, başını yana çevirmiş, zarfa bakmıyor; yüzü kapalı.",
      PERI_EN, KALABALIK],
     satir=("SONUÇ", "Haldun'a yazanın bulunduğunu, bir daha yazmayacağını söyledin; adını vermedin. Haldun sormadı, ücreti ödedi. Müzeyyen kenara koyduğu on beş bini bir zarfa koyup sana verdi. Düğün oldu; Gamze mektupları kimin yazdığını hiç öğrenmedi."),
     ust_ek=["- kıyafet hâli: karar günü, Peri mesai (kuru), Cengo ütülü (`LISTE.md` → kıyafet hâli tablosu)."])
kare(79, "K109", "Karar: başarıyı Cengo'ya bırak — Eylül babasına sarılıp Peri'ye bakıyor",
     [("onayli/G10.png", "Haldun'un müdür odası (onaylı mekân)"), PERI_BAS, KART_PERI, CENGO_T, ("onayli/G26.png", "Eylül'ün kıyafet kartı")],
     "TAM 3 kişi (Haldun kadraj dışında) · Eylül babasına sarılmış, başını çevirip Peri'ye bakıyor · Cengo gururlu ve mahcup · Peri hafif gülümsüyor · çekicilik vurgusu yok",
     ["Sahne: birinci referanstaki camlı müdür odası (masada davetiye destesi YOK), gündüz. Kadrajda TAM 3 kişi.",
      f"Ortada {CENGO_KISA} (dördüncü referans): kızına sarılmış, gururlu ve mahcup, gözleri nemli.",
      "Eylül (beşinci referans) babasının beline sarılmış, başı onun göğsünde; başını çevirmiş, babasının omzunun üstünden Peri'ye bakıyor: "
      "kaşı hafif kalkık, yarı kıskanç yarı minnettar bir genç kız bakışı. " + EYLUL16,
      f"Solda {PERI_KISA} (ikinci ve üçüncü referans): kollarını göğsünde kavuşturmuş, bir adım geride, ikisine bakıp hafifçe gülümsüyor.",
      "Bu karede çekicilik vurgusu YOK: Peri sade duruyor; sahne bir aile anı.", KALABALIK],
     satir=("SONUÇ", "Haldun'un ve Eylül'ün önünde \"Dosyayı Cengo Bey çözdü\" dedin. Cengo adı vermedi. Haldun ad duymadığı için beş bin kesti. Eylül babasına sarıldı: \"Biliyordum.\" Sonra Peri'ye baktı: \"Sen de yardım ettin herhalde.\" Düğün oldu; İzmir'e gittiler."),
     ust_ek=["- SONUÇ: \"Eylül babasına sarıldı: 'Biliyordum.' Sonra Peri'ye baktı.\" Haldun'un önünde geçiyor; mekân onun ofisi (K97'den farklı oda)."])
# ---- kapanış
kare(80, "K110", "Kapanış: Cengo masanın kenarında bilekliğini çeviriyor; Peri şallı; Gizem tepsi ve telefonla",
     [BURO_A, PERI_BAS, KART_PERI, KART_CENGO, ("onayli/G23.png", "Gizem, triko (onaylı temel)")],
     "TAM 3 kişi · Cengo'nun gömleği BURUŞUK, masanın kenarına oturmuş, bileklikle oynuyor · Peri tül şallı, saçında TEK gül yaprağı · Gizem tepsi (2 bardak) + telefon (arkası) · akşam",
     ["Sahne: birinci referanstaki büro, akşam; masa lambası yanık, pencerede lacivert gökyüzü. Kadrajda TAM 3 kişi.",
      "Ortada Cengo (dördüncü referansın SAĞDAKİ buruşuk hâli: buruşmuş açık mavi gömlek, yakası açık, bir yanı pantolondan çıkmış; saç dağınık; "
      "yüzü Cengo'nun yüzü): masanın kenarına yarı oturmuş, başı eğik, sol eliyle sağ bileğindeki renkli boncuklu bilekliği çeviriyor; dalgın ve yumuşak.",
      "Masanın arkasındaki sandalyede Peri (ikinci referansın yüzü; kıyafet üçüncü referanstaki gibi ama nemli, buruşuk): omuzlarına beyaz tül "
      "bir şal sarınmış, saçında tek kırmızı gül yaprağı; Cengo'ya yan gözle bakıyor.",
      "Kapıda Gizem (beşinci referans: bal rengi kâküllü saç, çil, krem triko kazak): bir elinde iki çay bardaklı yuvarlak metal tepsi, öbür "
      "elinde telefonu (arkası kameraya, düz siyah, logo yok); içeri giriyor.", PERI_EN, KALABALIK],
     ust_ek=["- önce hazır olmalı: G23 (Gizem temeli). Kıyafet hâli: Peri tül, Cengo buruk, Gizem triko."])
kare(81, "K111", "Kapanış (bağ düşük): Cengo ceketini alıp çıkıyor, Peri gül yaprağını çöpe atıyor",
     [BURO_A, PERI_BAS, KART_PERI, KART_CENGO],
     "TAM 2 kişi · Cengo kapıda, SIRTI yarı dönük, haki ceketi elinde/omzunda · Peri yaprağı çöp kutusuna bırakıyor · hüzünlü, akşam",
     ["Sahne: birinci referanstaki büro, akşam; yalnız masa lambası yanık. Kadrajda TAM 2 kişi.",
      "Kapının eşiğinde Cengo (ikinci referansın SAĞDAKİ buruşuk hâli; yüzü Cengo'nun yüzü): askıdan aldığı haki askeri ceketini omzuna atmış, "
      "kapıdan çıkıyor; sırtı yarı dönük, yüzü üç çeyrek, yere bakıyor.",
      "Ön planda, masanın yanında Peri (ikinci referansın yüzü; kıyafet üçüncü referanstaki gibi, nemli; omuzlarında beyaz tül şal): saçından "
      "aldığı tek kırmızı gül yaprağını parmaklarının arasından masanın yanındaki küçük tel çöp kutusuna bırakıyor; yüzü kapalı, gururlu ama "
      "hüzünlü. Gül yaprağı havada, çöpün üstünde.", KALABALIK])
kare(82, "K112", "Kapanış (bağ yüksek): Peri gül yaprağını uzatıyor, Cengo alıyor; Gizem arkada",
     [BURO_A, PERI_BAS, KART_PERI, KART_CENGO, ("onayli/G23.png", "Gizem, triko (onaylı temel)")],
     "TAM 3 kişi · gül yaprağı İKİ elin arasında (Peri'nin parmakları ve Cengo'nun parmakları) · Cengo buruşuk gömlekli, gömlek cebi görünüyor · Gizem arkada, tepsi + telefon, gülümsüyor",
     ["Sahne: birinci referanstaki büro, akşam; masa lambası yanık. Kadrajda TAM 3 kişi.",
      "Önde Peri (ikinci referansın yüzü; kıyafet üçüncü referanstaki gibi, nemli; omuzlarında beyaz tül şal) ve Cengo (dördüncü referansın "
      "SAĞDAKİ buruşuk hâli; yüzü Cengo'nun yüzü) karşı karşıya. Peri tek, kırmızı bir gül yaprağını iki parmağının arasında uzatmış; Cengo "
      "onu parmak uçlarıyla almak üzere; yaprak ikisinin parmaklarının arasında. Peri'nin yüzü yumuşak, utangaç, gözleri ışıldıyor; Cengo "
      "şaşkın ve duygulanmış, küçük bir gülümseme. Cengo'nun gömleğinin göğüs cebi görünüyor.",
      "Arkada kapıda Gizem (beşinci referans): bir elinde iki çay bardaklı tepsi, öbür elinde telefonu (arkası kameraya); ikisine bakıp bilmiş "
      "bir gülümsemeyle kaşını kaldırıyor.", PERI_EN, KALABALIK],
     ust_ek=["- önce hazır olmalı: G23. SR-D: tek an — yaprak el değiştirirken (uzatma ile cebe koyma arasında)."])
kare(83, "K113", "Kovalamaca (ipucu): Müzeyyen torbanın cebinden kâğıdı alıp hırkasının cebine koyuyor",
     [BAHARIYE, PERI_BAS, KART_PERI, CENGO_T, ("onayli/G19.png", "Müzeyyen'in kıyafet kartı")],
     "ÖN PLANDA Müzeyyen, bankta, kâğıt torba cebinden hırka cebine geçiyor (katlı, yazı görünmüyor) · gizli, telaşlı · arkada Peri ve duvaklı Cengo kuyrukla uğraşıyor, Müzeyyen'e bakmıyorlar · SR-F",
     ["Sahne: birinci referanstaki Bahariye Caddesi; kaldırımda bank. Akşamüstü. Kadrajda TAM 3 kişi.",
      "Ön planda bankta oturan Müzeyyen Hanım (beşinci referans): kucağında açık fermuarlı beyaz gelinlik torbası; torbanın dış cebinden "
      "katlanmış ince beyaz bir kâğıt çekmiş, onu lacivert hırkasının cebine sokuyor; kâğıdın yarısı cepte, katlı, yazısı görünmüyor. Gözleri "
      "yana kaçmış, telaşlı ve gizli; dudakları sıkılı.",
      f"Arka planda, odak dışı: {PERI_KISA} (ikinci ve üçüncü referans), {GULLU}, eğilmiş, ayağına dolanan uzun gelinlik kuyruğunu çözmeye "
      f"çalışıyor; yanında başında beyaz gelin duvağı (yüzü açık) olan {CENGO_KISA} (dördüncü referans) kuyruğu topluyor. İkisi de Müzeyyen'e bakmıyor.",
      KALABALIK],
     ust_ek=["- SR-F: ipucu taşıyan eylem (hırkaya giren kâğıt) net görünmeli; kâğıt yazısız."])
kare(84, "K114", "Kovalamaca sonu: Jale torbayı Cengo'dan alıp ıslak eteğe bakıyor",
     [BAHARIYE, PERI_BAS, KART_PERI, CENGO_T, ("referanslar/serit_jale_dilek.jpg", "Jale, Dilek (soldan sağa; onaylı kıyafet kartları G20, G21)")],
     "TAM 4 kişi · Jale torbayı tutuyor, gelinliğin ıslak eteğini elinde kaldırmış bakıyor · Peri tül şallı, ıslak, saçında gül yaprağı · duvaklı Cengo (yüzü açık) · Dilek elinde havlu · Müzeyyen kadrajda YOK",
     ["Sahne: birinci referanstaki Bahariye Caddesi, çiçekçinin önü; yerde kovalar, su, güller. Akşamüstü. Kadrajda TAM 4 kişi (bank kadraj dışında).",
      "Ortada Jale Hanım (beşinci referansta SOLDAKİ): Cengo'nun elinden aldığı açık fermuarlı gelinlik torbasını bir koluna almış; öbür "
      "eliyle torbadan sarkan beyaz gelinliğin ıslak, lekeli eteğini kaldırıp soğukkanlılıkla inceliyor.",
      f"Sağında {CENGO_KISA} (dördüncü referans), başında beyaz gelin duvağı (yüzünden geriye atılmış, yüzü açık): torbayı yeni bırakmış, "
      "elleri boşta, nefes nefese.",
      f"Solda {PERI_KISA} (ikinci ve üçüncü referans): sırılsıklam, omuzlarında beyaz tül şal, saçında tek kırmızı gül yaprağı; çenesi havada, kuru bir alayla Jale'ye bakıyor.",
      "Arkada kalfa Dilek (beşinci referansta SAĞDAKİ): kolunda katlı beyaz havlu.", PERI_EN, KALABALIK])

# ================================================================= 10. KART AFİŞİ ==================
kare(85, "KART_V6", "Kart afişi: İsimsiz Mektuplar",
     [ATOLYE, PERI_BAS, KART_PERI, CENGO_T, ("referanslar/serit_kart_v6.jpg", "Haldun, Müzeyyen, Jale, Eylül (soldan sağa; onaylı G5, G3, G4, G6)")],
     "TAM 6 kişi · Peri önde kameraya yürüyor · Cengo komik (gömleğindeki kırışık) · arkada 4 kişi eşit boy/ışık, ciddi · alt %20 boş zemin · yasak nesneler yok · Eylül masum",
     ["Bir dedektif hikâyesinin afişi; ipucusuz, hareketli, eğlenceli. Mekân: birinci referanstaki gelinlik atölyesi, gündüz; vitrinde tüller, "
      "askılarda gelinlikler. Kadrajda TAM 6 kişi; herkes atölyenin ahşap zemininde, ayakları zemine basıyor.",
      f"Önde, kameraya doğru yürüyen {PERI_KISA} (ikinci ve üçüncü referans): uzun, kendinden emin adımlarla; bir eli belinde, öbürü yanında "
      "sallanıyor; at kuyruğu savruluyor; yüzü üç çeyrek, iki göz görünüyor, gizemli yarım gülümseme.",
      f"Peri'nin yanında {CENGO_KISA} (dördüncü referans): ütülü gömleğinin önündeki TEK bir kırışığı iki eliyle telaşla düzeltmeye çalışıyor, "
      "başı eğik, dili dişlerinin arasında; gülünç.",
      "Arkada, tek sıra halinde, eşit aralıkla, aynı boyda, aynı ışıkta dört kişi, beşinci referanstaki yüzlerle (soldan sağa): Haldun Bey, "
      "Müzeyyen Hanım, Jale Hanım, Eylül. Dördü de ciddi ve temkinli, kimse gülmüyor; öne bakıyor; elleri boş ve yanlarında. Müzeyyen "
      "GÜLÜMSEMİYOR. Eylül on altı yaşında, sırt çantalı, masum ve sade duruyor (kural 16).",
      "Görselde OLMAYACAKLAR: mektup, zarf, kâğıt, gelinlik torbası, fermuar, makbuz, börek, tepsi, bank, gelin duvağı, gül yaprağı, "
      "fotoğraf makinesi, telefon, çay bardağı, makas, mezura, iğne, kalıp kâğıdı.",
      "Düzen: kişiler kadrajda daha küçük ve daha yukarıda; en öndekinin ayakkabıları dahil herkesin ayakları üst %80'in içinde. Alt %20'de "
      "yalnız atölyenin zemini; orada kimse ve hiçbir nesne yok.", PERI_EN, KALABALIK],
     tur="kart afişi", oran="Görselin oranı TAM 9:16, dikey (941×1672).", satir=False,
     ust_ek=["- önce hazır olmalı: `referanslar/serit_kart_v6.jpg` (G6 onaylanınca: G5, G3, G4, G6 → 900 px yükseklik, bej zemin şeridi)",
             "- `sablon/5_gorsel_sistemi.md` G: görgü tanıkları (Recep, Dilek, Tahsin) girmez; şüpheliler eşit; yöntem nesneleri adıyla yasak."])
print("tamam")
