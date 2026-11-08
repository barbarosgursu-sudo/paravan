# Vaka 3 — Onay 3 düzeltmeleri: istemleri yazar (8 Kasım 2026, sahibinin onaylı listesi).
# Kurallar: sablon/5_gorsel_sistemi.md C0 (SR-A…K) ve I (kıyafet kartı); uretim/ISTEM_KALIPLARI.md §9–10.
#   python onay3_istem.py <döküm klasörü>        (döküm = arac_yeni_tur.js --hepsi'nin dokum.txt'leri, her yol bir dosya)
# Yenilenen resimler eski numarasıyla (eski onaylı resim eski_onay3/'e taşınır); yeniler G69–G92.
import io, os, re, sys, glob, collections

KOK = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(KOK, "prompts")
DIYALOG = os.path.join(KOK, "..", "..", "sablon", "vakalar", "vaka3_diyalog.md")

# ---------- satır dökümü ----------
satir = {}
for f in sorted(glob.glob(os.path.join(sys.argv[1], "*.txt"))):
    for ln in io.open(f, encoding="utf-8"):
        p = ln.rstrip("\n").split(" | ")
        if len(p) < 6: continue
        ad = re.sub(r"^\d+\s+", "", p[0])
        if not ad.startswith("V3"): continue
        k = p[1]; arka = p[2]
        sol = p[3].replace("sol ", "").replace("(çekik) ", "").replace("sol:", ""); sag = p[4].replace("sağ ", "")
        m = " | ".join(p[5:])
        satir.setdefault((k, m), dict(k=k, arka=arka.split(" ")[0], kare=(re.search(r"KARE (\S+)", arka) or [None, None])[1], sol=sol, sag=sag, m=m))

# Giriş sahnesinde trençkot 40. satıra kadar kapalı (K36'da açılıyor).
d = io.open(DIYALOG, encoding="utf-8").read().split("\n")
GIRIS_KAPALI = set()
for ln in d[21:39]:
    mm = re.match(r"^(?:\*\*[^*]+\*\*\s*)?(.*?)\s*(\{.*\})?$", ln.strip())
    GIRIS_KAPALI.add(re.sub(r"\*", "", mm.group(1)).strip())
def acik_mi(s):
    if s["arka"] in ("A26", "A27"): return False
    if s["arka"] == "A6" and re.sub(r"\*", "", s["m"]).strip() in GIRIS_KAPALI: return False
    return True

def yaz(s, kim=None):
    k = s["k"]; m = s["m"]
    bas = "*anlatı*" if k == "not" else "**" + k + "**"
    dinl = "" if (kim is None or k == "not" or k.split("→")[0] == kim) else "  _(dinliyor)_"
    return f"- {bas}: {m}{dinl}"

def satirlar_figur(anahtar, durum=None, kim=None, sadece=None):
    out = []
    for s in satir.values():
        if s["kare"]: continue
        if anahtar not in (s["sol"], s["sag"]): continue
        if durum is not None and acik_mi(s) != durum: continue
        if sadece and not any(x in s["m"] for x in sadece): continue
        out.append(yaz(s, kim or anahtar.split(".")[0]))
    return out
def satirlar_kare(kod, sadece=None):
    return [yaz(s) for s in satir.values() if s["kare"] == kod and (not sadece or any(x in s["m"] for x in sadece))]

# ---------- ortak metinler ----------
BAKIS = "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay bakıyor; yukarı, aşağı ya da kameraya değil. Profil değil: uzaktaki göz de açıkça görünüyor."
def KADRAJ(zemin): return f"Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince bir boşluk. Arka plan: düz, tek renk {zemin}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş tek renk gibi); hiçbir nesne yok."
CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
CEK_KOMIK = "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok. Çıplaklık yok."
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
ORAN45 = "Görselin oranı TAM 4:5, dikey (1122×1402)."
ORAN34 = "Görselin oranı TAM 3:4, dikey (1086×1448)."
KARE_SON = "Yüzler üç çeyrek, gözler görünüyor; kimse kameraya bakmıyor. Her kişinin İKİ kolu, İKİ eli var."
PERI_EN = "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık en çok onun üstünde; öbür kadın(lar) çekici olabilir ama Peri'yi gölgede bırakmıyor."
KOMEDI = "Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok; müstehcen değil."
TARZ_KARE = "Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil."
SAC = "Saçın dış çizgisi toplu ve net: arka plana taşan ince tek teller, havada kıvrılan uçlar yok."

TR_UZUN = "kart referansındaki UZUN bej trençkot: etek ucu dizin altına, baldırın ortasına iner; bu kadrajda etek ucu GÖRÜNMÜYOR (uyluk ortasında biten kısa bir etek yok)"
TR_KAPALI = TR_UZUN + "; belden kemeriyle SIKICA bağlı, kemer beli incecik sıkıyor; trençkot bedene oturuyor, kalçanın kıvrımı trençkotun altından belirgin; önü kapalı ama yakası DERİN açık: yakadan, altındaki vücudu saran kısa siyah elbisenin DERİN V dekoltesi belirgin biçimde görünüyor (kapalı trençkotta çekicilik dekolte, ince bel ve kalça hattıyla taşınır)."
TR_ACIK = TR_UZUN + "; kemeri ÇÖZÜK, iki ucu yanlarından sarkıyor; iki yakası iki yana açılmış; önden, altındaki vücudu saran kısa siyah elbise ve derin V dekoltesi görünüyor."
KARE_TR_KAPALI = "UZUN bej trençkot (etek ucu dizin altında, baldırın ortasında; kart referansındaki gibi), belden kemerli, önü kapalı, yakası açık, altındaki kısa siyah elbisenin derin V dekoltesi görünüyor"
KARE_TR_ACIK = "UZUN bej trençkot (etek ucu dizin altında, baldırın ortasında; kart referansındaki gibi), kemeri ÇÖZÜK, önü AÇIK; altındaki vücudu saran kısa siyah elbise, derin V dekolteli, görünüyor"
ONLUK = ("Peri'nin kıyafeti: trençkot YOK (çıkarılmış). Pekmez lekeli, vücudu saran kısa siyah elbise (derin V dekolte). Elbisenin üstünde "
         "kart referansındaki GÖĞÜSLÜ pembe tezgâh önlüğü: boynundan askılı, üst kenarı kalp yakalı; önlüğün üstünden elbisenin derin V dekoltesi "
         "görünüyor; göğsünden dizinin hemen üstüne kadar iner, belden arkadan bağlı; düz pembe, ön cepli, yazısız, logosuz; kenarlarına yer yer "
         "pekmez bulaşmış. Pekmez ve susam hâlâ HER YERİNDE: dağınık saçında susam taneleri ve pekmez; yanağında ve alnında pekmez damlaları; "
         "boynunda birkaç pekmez damlası; göğsünün açık kısmında YALNIZ birkaç susam tanesi (pekmez yok); kollarında ve bacaklarında pekmez akıntıları ve serpiştirilmiş susam. "
         "TENİ KENDİ RENGİNDE: pekmez yalnız damla ve akıntı, ten turuncuya boyanmamış. Krem eşarp boynunda; güneş gözlüğü saçın üstünde yamuk. "
         "Çıplak bacaklar, ÇORAP YOK. Ayakkabısı kırmızı stiletto.")
KARE_ONLUK = ("derin V dekolteli kısa siyah elbisenin üstünde GÖĞÜSLÜ pembe tezgâh önlüğü (boyundan askılı, kalp yakalı üst kenarından dekolte biraz "
              "görünüyor; kart referansındaki gibi); saçında, yüzünde, boynunda, kollarında ve bacaklarında pekmez damlaları ve susam (göğsünde yalnız birkaç susam); trençkot, "
              "eşarp başta değil (boynunda), gözlük saçta")

KART = {"tr": "`onayli/G101.png` — YALNIZ Peri'nin trençkotunun kesimi ve boyu (soldaki kapalı, sağdaki açık hâl); yüzü, pozu alınmaz",
        "simit": "`onayli/G102.png` — YALNIZ felaket hâlindeki trençkotun kesimi ve boyu; pozu alınmaz",
        "onluk": "`onayli/G103.png` — YALNIZ göğüslü pembe önlüğün kesimi ve yeri; pozu alınmaz",
        "cengo": "`onayli/G104.png` — Cengo'nun kıyafet kartı (bel altı: siyah kot, kahverengi bot)",
        "gizem": "`onayli/G106.png` — YALNIZ Gizem'in kıyafetinin kesimi; pozu alınmaz",
        "kenan": "`onayli/G107.png` — Kenan'ın kıyafet kartı (solda önlüklü, sağda önlüksüz)",
        "ferruh": "`onayli/G108.png` — Ferruh'un kıyafet kartı",
        "nadide": "`onayli/G109.png` — Nadide Hanım'ın kıyafet kartı",
        "sedat": "`onayli/G110.png` — Sedat'ın kıyafet kartı",
        "ayla": "`onayli/G111.png` — Ayla Hanım'ın kıyafet kartı"}

YALNIZ = {int(x) for x in sys.argv[2].split(",")} if len(sys.argv) > 2 else None   # ör. "1,2,3": yalnız bu numaralar yazılır
def dosya(no, baslik, tur, anahtar, refs, kontrol, satirlar, istem, bekle=""):
    assert len(refs) <= 5, (no, "en çok 5 referans")
    YAZILAN.append((no, baslik, tur, anahtar, bekle))
    if YALNIZ is not None and no not in YALNIZ: return
    s = f"# G{no} — {baslik}\n\n- tür: {tur} · anahtar: `{anahtar}` · Onay 3 düzeltmesi (8 Kasım 2026)\n"
    if bekle: s += f"- önce hazır olmalı: {bekle}\n"
    s += "\n## Referanslar (bu sırayla ekle; istemdeki \"birinci referans\" = 1.)\n\n"
    s += "\n".join(f"{i+1}. {r}" for i, r in enumerate(refs)) + "\n\n"
    s += "## Satırlar\n\n" + ("\n".join(satirlar) if satirlar else "- (şu an hiçbir satırda kullanılmıyor; setin tamlığı için üretiliyor — 5. parça B, her kıyafette yedi ifade)") + "\n\n"
    s += f"## Kontrol\n\n{kontrol}\n\n## İstem\n\n```text\n" + "\n\n".join(x for x in istem if x) + "\n```\n"
    io.open(os.path.join(P, f"G{no}.md"), "w", encoding="utf-8", newline="\n").write(s)
YAZILAN = []

import subprocess
TABAN = "52c439a"   # istemlerin Onay 3'ten önceki hâli (betik bu yüzden tekrar çalıştırılabilir)
def eski_metin(no):
    return subprocess.run(["git", "show", f"{TABAN}:uretim/v3/prompts/G{no}.md"], capture_output=True, cwd=KOK, check=True).stdout.decode("utf-8")
def eski_istem(no):
    t = eski_metin(no)
    ist = re.search(r"```text\n(.*?)\n```", t, re.S).group(1)
    duz = re.findall(r"## Düzeltme \d+\n\n(.*?)(?=\n\n## |\Z)", t, re.S)
    return [x for x in ist.split("\n\n")], [x.strip() for x in duz]
def degistir(par, eski, yeni, zorunlu=True):
    out, n = [], 0
    for x in par:
        if eski in x: x = x.replace(eski, yeni); n += 1
        out.append(x)
    assert n or not zorunlu, ("bulunamadı", eski[:60])
    return out
def satir_bas(par, bas, yeni):
    out, n = [], 0
    for x in par:
        if x.startswith(bas): x = yeni; n += 1
        out.append(x)
    assert n, ("paragraf yok", bas)
    return out

# ---------- 1. Peri trençkot KAPALI (G1, G19–G24) ve AÇIK (G69–G75) ----------
IFADE = [(1, 69, "normal", "normal (temel)"), (19, 70, "kas", "kaşı kalkık"), (20, 71, "sinirli", "sinirli"), (21, 72, "utanmis", "utanmış"),
         (22, 73, "sasirmis", "şaşırmış"), (23, 74, "merakli", "meraklı"), (24, 75, "kiskanc", "kıskanç")]
POZ_SINIRLI = "Poz: TAM İKİ KOL, İKİ EL. Sağ eli göğsünün önünde, avucu açık, sert bir \"yeter\" hareketiyle havada; kimseyi işaret ETMİYOR (parmak uzatmak yok). Sol eli belinde, yumruk."
for eski, yeni, ifade, ad in IFADE:
    par, duz = eski_istem(eski)
    par = [x.replace("Peri'nin kıyafeti: kısa, bej bir trençkot: dizin çok üstünde biter, belden kemeriyle sıkı bağlı, yakası açık; yakadan, altındaki vücudu saran kısa siyah elbisenin derin V dekoltesi görünüyor.", "Peri'nin kıyafeti: " + TR_KAPALI) for x in par]
    assert any(TR_KAPALI in x for x in par), eski
    if ifade == "sinirli": par = satir_bas(par, "Poz:", POZ_SINIRLI)
    kap = [x for x in par if not x.startswith("Son referans")]
    son = [x for x in par if x.startswith("Son referans")]
    tem = eski == 1
    refs_k = (["`../referanslar/peri_bas.jpg` — Peri'nin yüzü (yalnız yüz)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ tarz, ölçek, kadraj (başı silik)", KART["tr"], "`../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği (kişi, kıyafet, poz alınmaz)"]
              if tem else ["`referanslar/peri_trenckot2_bas.png` — Peri'nin başı (YENİ onaylı G1'in baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["tr"]])
    kart_cumle = "Üçüncü referans YALNIZ trençkotun kesimi ve boyu içindir (soldaki kapalı hâl); oradaki yüzü, pozu ve dekolte ölçüsünü alma."
    if not tem: kart_cumle = "Üçüncü referans YALNIZ trençkotun kesimi ve boyu içindir (soldaki kapalı hâl); oradaki yüzü, pozu ve dekolte ölçüsünü alma."
    ist = kap[:1] + [kart_cumle] + kap[1:] + son
    kontrol = f"trençkot UZUN: kadrajın altında etek ucu YOK · önü KAPALI, kemer bağlı · derin V dekolte · çekicilik eski onaylı G{eski}'den az değil · " + ("yüz peri_bas ile aynı" if tem else "G1 ile aynı yüz, ölçek, kadraj") + (" · kimseyi işaret etmiyor" if ifade == "sinirli" else "")
    dosya(eski, f"Peri, trençkot KAPALI (uzun), {ad}", "figür", f"peri.trenckot.{ifade}", refs_k, kontrol,
          satirlar_figur(f"peri.trenckot.{ifade}", durum=False, kim="peri"), ist + [f"## Düzeltme {i+1}\n\n{x}" for i, x in []] ,
          bekle="" if tem else "`referanslar/peri_trenckot2_bas.png` (yeni G1 onaylanınca yerel Claude hazırlar)")
    # AÇIK
    par2 = [x.replace(TR_KAPALI, TR_ACIK) for x in par]
    par2 = [x.replace("Sol eli trençkotun kemerinde", "Sol eli belinde, trençkotun açık kenarını hafifçe geriye itmiş").replace("trençkotun üstünden göğsünün ortasında", "göğsünün ortasında") for x in par2]
    assert not any("kemerinde" in x for x in par2), yeni
    kap2 = [x for x in par2 if not x.startswith("Son referans")]
    kart2 = "Üçüncü referans YALNIZ trençkotun kesimi ve boyu içindir (SAĞDAKİ açık hâl); oradaki yüzü, pozu ve dekolte ölçüsünü alma."
    refs_a = (["`referanslar/peri_trenckot_bas.png` — Peri'nin başı (onaylı G1'in baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["tr"], "`../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği (kişi, kıyafet, poz alınmaz)"]
              if tem else ["`referanslar/peri_acik_bas.png` — Peri'nin başı (onaylı G69'un baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["tr"]])
    ist2 = kap2[:1] + [kart2] + kap2[1:] + son
    dosya(yeni, f"Peri, trençkot AÇIK (uzun), {ad}", "figür", f"peri.trenckot_acik.{ifade}", refs_a,
          "trençkot UZUN ve AÇIK: kemer çözük, iki uç sarkıyor, elbise önden görünüyor · kadrajın altında etek ucu YOK · derin V dekolte · çekicilik eski onaylı Peri'den az değil" + (" · kimseyi işaret etmiyor" if ifade == "sinirli" else ""),
          satirlar_figur(f"peri.trenckot.{ifade}", durum=True, kim="peri"), ist2,
          bekle="" if tem else "`referanslar/peri_acik_bas.png` (G69 onaylanınca yerel Claude hazırlar)")

# ---------- 2. Peri felaket (G2, G25) ----------
for no in (2, 25):
    par, _ = eski_istem(no)
    par = degistir(par, "kısa bej trençkot (dizin çok üstünde biter,", "kart referansındaki UZUN bej trençkot (etek ucu dizin altına iner, bu kadrajda görünmüyor;")
    par = [x for x in par if not x.startswith("Son referans")]
    ist = par
    refs = (["`referanslar/peri_trenckot_bas.png` — Peri'nin yüzü (onaylı G1'in baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)"] if no == 2
            else ["`referanslar/peri_simit2_bas.png` — Peri'nin felaket hâlinde başı (YENİ onaylı G2'nin baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)"])
    an = "peri.simit.sinirli" if no == 2 else "peri.simit.utanmis"
    dosya(no, "Peri, felaket hâli (uzun trençkot), " + ("sinirli (temel)" if no == 2 else "utanmış"), "figür", an, refs,
          "trençkot UZUN: kadrajda etek ucu yok · derin V dekolte · ten kendi renginde · susam serpiştirilmiş · elde tek kırmızı stiletto · çorap yok · çekicilik eski onaylıdan az değil",
          satirlar_figur(an, kim="peri"), ist, bekle="" if no == 2 else "`referanslar/peri_simit2_bas.png` (yeni G2 onaylanınca)")

# ---------- 3. Peri önlüklü (G3, G26–G29) + simitli (G76, G77) ----------
ONL = [(3, "normal", "normal (temel)"), (26, "kas", "kaşı kalkık"), (27, "sasirmis", "şaşırmış"), (28, "utanmis", "utanmış"), (29, "sinirli", "sinirli")]
for no, ifade, ad in ONL:
    par, _ = eski_istem(no)
    par = satir_bas(par, "Peri'nin kıyafeti:", ONLUK)
    par = [x.replace("İki eli önlüğün iplerini belinde bağlıyor", "İki eli önlüğün iplerini arkada, belinde bağlıyor") for x in par]
    par = [x for x in par if not x.startswith("Son referans")]
    son = ["Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA. Karikatür değil: doğal yüz oranları, abartısız ifade."] if no == 3 else []
    ist = par[:1] + ["Üçüncü referans YALNIZ önlüğün kesimi ve yeri içindir; oradaki pozu alma."] + par[1:] + son
    refs = (["`referanslar/peri_simit_bas.png` — Peri'nin başı (onaylı G2'nin baş kırpığı: saçta susam)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["onluk"], "`../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği (kişi, kıyafet, poz alınmaz)"]
            if no == 3 else ["`referanslar/peri_onluk2_bas.png` — Peri'nin başı (YENİ onaylı G3'ün baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["onluk"]])
    dosya(no, f"Peri, göğüslü pembe önlüklü, {ad}", "figür", f"peri.onluklu.{ifade}", refs,
          "GÖĞÜSLÜ önlük, boyun askılı, kalp yaka; dekolte biraz görünüyor · pekmez ve susam saçta, yüzde, göğüste, kollarda, bacaklarda · ten kendi renginde · çekicilik eski onaylıdan az değil",
          satirlar_figur(f"peri.onluklu.{ifade}", kim="peri"), ist, bekle="" if no == 3 else "`referanslar/peri_onluk2_bas.png` (yeni G3 onaylanınca)")
par, _ = eski_istem(26)
par = satir_bas(par, "Peri'nin kıyafeti:", ONLUK)
for no, an, ad, poz, ifade, sat, ayir in [
    (76, "peri.onluklu.simit_elinde", "yarım simit elinde",
     "Poz: TAM İKİ KOL, İKİ EL. Sağ eli göğsünün önünde, bel hizasında YARIM bir susamlı simit tutuyor (ikiye bölünmüş simidin büyük yarısı; kırık ucu görünüyor). Sol eli belinde. Simidi henüz ısırmamış.",
     "İfade: memnun, keyfi yerinde; dudağında küçük, saklamadığı bir gülümseme; tek kaşı az kalkık.",
     ["- **gizem**: Hıh. Bana yarım bile vermedi.  _(dinliyor)_"], "Bu figürü önlüklü öbür figürlerden ayıran: elindeki yarım simit ve memnun gülümseme."),
    (77, "peri.onluklu.simit_isiriyor", "yarım simidi ısırıyor",
     "Poz: TAM İKİ KOL, İKİ EL. Sağ eli YARIM susamlı simidi ağzına götürmüş, simidin ucunu ısırıyor; ağzında küçük bir lokma, simitte ısırık izi. Sol eli belinde.",
     "İfade: lezzeti ölçen bir uzman: gözleri hafif kısık, kaşları düşünceli; \"Bu susam kavrulmuş\" der gibi.",
     ["- **peri**: (yarım simidi ısırarak) Bu susam kavrulmuş."], "Bu figürü simit_elinde'den ayıran: simit ağzında, ısırıyor.")]:
    ist = [par[0], "Üçüncü referans YALNIZ önlüğün kesimi ve yeri içindir; oradaki pozu alma.", ONLUK, poz, BAKIS, ifade, ayir, KADRAJ("orta yeşil"), CEK, YAZI, ORAN45]
    dosya(no, f"Peri, göğüslü önlüklü, {ad}", "figür", an,
          ["`referanslar/peri_onluk2_bas.png` — Peri'nin başı (YENİ onaylı G3'ün baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["onluk"]],
          "yarım simit (bütün değil) · göğüslü önlük · pekmez ve susam · iki el beşer parmak · çekicilik eski onaylıdan az değil", sat, ist,
          bekle="`referanslar/peri_onluk2_bas.png` (yeni G3 onaylanınca)")

# ---------- 4. Gizem (G42 yeniden, G78–G81) ----------
par, _ = eski_istem(42)
GZ_BAS = par[0]; GZ_KIY = par[1]
GZ_CEK = "Çekicilik: genç, sportif ve çok çekici bir mahalle güzeli; kıvrımlı beden hattı belirgin. Bu vakada en gösterişli kadın yine Peri'dir. Çıplaklık yok."
assert GZ_KIY.startswith("Kıyafet:"), GZ_KIY[:40]
GZ = [
 (42, "gizem.korkmus", "korkmuş (telefonsuz)",
  "Poz: TAM İKİ KOL, İKİ EL. Elleri BOŞ; telefon YOK. İki kolu kendine sarılı: sağ eli sol dirseğini, sol eli sağ kolunun üstünü tutuyor; kolları göğsünü örtüyor; omuzları hafif içe çekik.",
  BAKIS, "İfade: korkmuş; kaşlar içten yukarı, gözler iri, dudaklar aralık, hafif titrek.",
  "Bu ifadeyi gizem.kas ve gizem.isveli'den ayıran: korku; kendinden emin gülümseme YOK.",
  satirlar_figur("gizem.korkmus", sadece=["Ofisin kapısı", "Telefonu çıkarıp", "Lacivert önlük. Onu"]), "elinde telefon YOK"),
 (78, "gizem.telefon", "telefonu tezgâha bırakıyor",
  "Poz: TAM İKİ KOL, İKİ EL. Sol eli bir telefonu önünde, bel hizasında, avucu aşağı dönük, aşağıya bırakıyormuş gibi tutuyor; telefonun ekranı aşağı dönük, görünen arkası tamamen düz siyah, hiçbir işaret yok. Sağ eli göğsünün önünde; kolu göğsünü örtüyor.",
  BAKIS, "İfade: korkmuş ama kararlı: kaşlar içten yukarı, gözler iri ve karşısındakinde; \"Bak\" der gibi.",
  "Bu ifadeyi gizem.korkmus'tan ayıran: elinde telefon, onu bırakıyor; kararlı.",
  ["- **gizem**: Ama içeride biri vardı. Bak. (telefonu tezgâha bırakıyor)"], "telefonun ekranı kameraya dönük DEĞİL · telefon aşağı bırakılıyor, uzatılmıyor"),
 (79, "gizem.ofkeli", "öfkeli",
  "Poz: TAM İKİ KOL, İKİ EL. İki kolu yanlarında, iki eli yumruk; omuzları dik, çenesi önde. Kimseyi parmakla işaret ETMİYOR.",
  BAKIS, "İfade: öfkeli; kaşlar çatık, gözler kısık ve sabit, dudaklar sıkılı; gülümseme YOK.",
  "Bu ifadeyi gizem.kas'tan ayıran: keyifli alaycılık değil, açık öfke.",
  ["- **gizem**: Beni de suçlayacaktın."], "parmakla işaret yok · gülümseme yok"),
 (80, "gizem.suzuyor", "Peri'yi baştan aşağı süzüyor",
  "Poz: TAM İKİ KOL, İKİ EL. Kolları göğsünün altında gevşekçe kavuşuk; ağırlığı tek bacağında, kalçası yana kırık.",
  "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Başı hafif geride; gözleri AŞAĞIDA, kadrajın soluna doğru: karşısındakini baştan aşağı süzüyor, bakışı karşısındakinin bacaklarına iniyor. Kameraya bakmıyor.",
  "İfade: tek kaşı kalkık, dudağında alaycı, kendinden emin yarım gülümseme.",
  "Bu ifadeyi gizem.kas'tan ayıran: bakış aşağıda, birini tepeden tırnağa ölçüyor.",
  ["- **gizem**: (Peri'yi baştan aşağı süzerek) Sen dükkândaki afişsin."], "gözler AŞAĞIDA, kadrajın soluna"),
 (81, "gizem.simit", "tek simit uzatıyor",
  "Poz: TAM İKİ KOL, İKİ EL. Sağ eli tek bir susamlı simidi öne, kadrajın soluna doğru uzatıyor (kol ileri, simit elinde). Sol eli belinde. Elinde tabla YOK.",
  BAKIS, "İfade: işveli, sıcak gülümseme; \"Al bakalım.\"",
  "Bu ifadeyi gizem.isveli'den ayıran: elinde uzattığı simit.",
  ["- **gizem**: (tabladan bir simit uzatarak) Al bakalım.", "- **cengo**: Bunu da veresiye defterine mi yazacaksın?  _(dinliyor)_"], "tek simit, tabla yok"),
]
for no, an, ad, poz, bak, ifade, ayir, sat, ek in GZ:
    ist = [GZ_BAS, "Üçüncü referans YALNIZ kıyafetin kesimi içindir; oradaki pozu alma.", GZ_KIY, poz, bak, ifade, ayir, KADRAJ("orta yeşil"), GZ_CEK, YAZI, ORAN45]
    dosya(no, f"Gizem, {ad}", "figür", an,
          ["`referanslar/gizem_bas.png` — Gizem'in başı (onaylı G9'un baş kırpığı)", "`../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)", KART["gizem"]],
          f"{ek} · göğsü kol örtüyor ya da tişört kalın · bal saç, çil · çekicilik eski onaylı Gizem'den az değil", sat, ist)

# ---------- 5. Konuk varyantları (G82–G86) ----------
def konuk(no, kim, ad_kim, temel, kart, zemin, an, ad, poz, bak, ifade, ayir, sat, kontrol, kiy_ek=""):
    bas = (f"Birinci referans görseldeki kişinin ({ad_kim}) AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı düz {zemin} arka plan, aynı ölçek ve kadraj. "
           "İkinci referans kıyafet kartıdır: kıyafetin kesimi ve rengi onun gibi; oradaki pozu alma. Değişen yalnız poz ve ifade" + (" ve " + kiy_ek if kiy_ek else "") + ".")
    dosya(no, f"{ad_kim}, {ad}", "figür", an, [f"`onayli/G{temel}.png` — {ad_kim} temel figürü", KART[kart]], kontrol, sat,
          [bas, poz, bak, ifade, ayir, SAC, KADRAJ(zemin), "Çıplaklık yok.", YAZI, ORAN45])
konuk(82, "kenan", "Kenan", 8, "kenan", "açık bej", "kenan.esniyor", "kocaman esniyor",
      "Poz: TAM İKİ KOL, İKİ EL. Sağ elinin tersi ağzının önüne yarım kalkmış, ağzını tam kapatmıyor; sol kolu yanında, gevşek.",
      "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek; başı hafif geriye atılmış.",
      "İfade: KOCAMAN esniyor: ağzı ardına kadar açık, gözleri sıkıca kapalı ya da yaşlı, kaşları kalkık; gözlerinin altında belirgin koyu halkalar (uykusuz). Morluk ya da yara YOK.",
      "Bu ifadeyi kenan.normal'den ayıran: ağzı ardına kadar açık bir esneme.",
      ["- *anlatı*: Kenan kocaman esniyor. Gözlerinin altında koyu halkalar var."], "ağız açık, gerçek bir esneme · koyu göz altı halkası · önlük üstünde")
konuk(83, "kenan", "Kenan", 8, "kenan", "açık bej", "kenan.onluksuz", "önlüksüz, önlük elinde, öfkeli",
      "Poz: TAM İKİ KOL, İKİ EL. ÖNLÜK ÜSTÜNDE DEĞİL: lacivert önlüğü çıkarmış, katlanmış hâlde SAĞ elinde, yanında sarkıyor. Üstünde gri tişört (kart referansındaki sağdaki hâl), kolları dirseğe kadar sıvalı. Sol eli yumruk, yanında.",
      BAKIS, "İfade: öfkeli; kaşlar çatık, çene sıkılı; bir şeyi itiraf etmek zorunda kalmış birinin sert yüzü.",
      "Bu figürü kenan.kizgin'den ayıran: önlüksüz, önlük elinde.",
      ["- **kenan**: (önlüğünü çıkarıp) Pazar gece Kadıköy'deydim. İş denemesindeydim.", "- **kenan**: Gitmek istiyordum, çünkü bu dükkân batıyor. Ferruh Bey size söylemedi mi?"],
      "önlük ÜSTÜNDE DEĞİL, elinde · gri tişört", kiy_ek="önlüğün çıkarılması")
konuk(84, "ferruh", "Ferruh", 7, "ferruh", "orta yeşil", "ferruh.bembeyaz", "yüzü bembeyaz",
      "Poz: TAM İKİ KOL, İKİ EL. İki eli önlüğünün önünde, birbirine kenetlenmiş, parmakları beyazlamış; papyona DOKUNMUYOR.",
      BAKIS, "İfade: kanı çekilmiş; yüzü BEMBEYAZ, dudakları solgun, gözleri iri ve korkulu, alnında ter; gülümseme YOK.",
      "Bu ifadeyi ferruh.terli ve ferruh.alingan'dan ayıran: gülümseme yok, el papyonda değil, yüz kâğıt gibi beyaz.",
      ["- **ferruh**: (yüzü bembeyaz) Depo mu? Depoya… gerek yok ki. Ben… bir bakayım."], "yüz açıkça solgun-beyaz · el papyonda DEĞİL · gülümseme yok")
konuk(85, "sedat", "Sedat", 12, "sedat", "açık bej", "sedat.tablet", "tableti açık, ekrana bakıyor",
      "Poz: TAM İKİ KOL, İKİ EL. İki eliyle küçük bir tableti göğsünün önünde, ekranı KENDİNE dönük tutuyor; kameraya dönük arkası tamamen düz siyah, hiçbir işaret yok. Sağ elinin işaret parmağı tabletin kenarında.",
      "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözleri AŞAĞIDA, tabletin ekranında.",
      "İfade: dikkatli, okuyor; kaşlar hafif kalkık, \"bakayım\" havası.",
      "Bu figürü sedat.normal'den ayıran: tablet açık, gözleri ekranda.",
      satirlar_figur("sedat.normal", sadece=["tableti açıp", "On bir elli beşte", "Sensör"]),
      "tabletin ekranı kameraya dönük DEĞİL · gözler tablette")
konuk(86, "ayla", "Ayla Hanım", 13, "ayla", "orta yeşil", "ayla.bakiyor", "Cengo'nun ellerine bakıyor",
      "Poz: TAM İKİ KOL, İKİ EL. Sağ eli içi krema dolu sıkma torbasını göğsünün önünde tutuyor; sol eli torbanın ucunda.",
      "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözleri AŞAĞIDA ve kadrajın soluna: karşısındakinin bel hizasındaki ellerine bakıyor.",
      "İfade: sert, ölçüp biçen; bir kaşı kalkık, ağzı düz.",
      "Bu ifadeyi ayla.normal'den ayıran: bakış aşağıda, karşısındakinin ellerinde.",
      ["- **ayla**: (Cengo'nun ellerine bakıp) Bu eller hamur görmemiş. Sen iş aramıyorsun."], "gözler AŞAĞIDA, kadrajın soluna")

# ---------- 6. Yenilenen kareler ----------
def kare_yenile(no, kod, refs, degisim, ek_par=None, duz_degis=None, kontrol="", sat=None, sil_duz=False):
    par, duz = eski_istem(no)
    for e, y in degisim: par = degistir(par, e, y)
    if ek_par: par = par[:-1] + ek_par + par[-1:]
    if duz_degis:
        for e, y in duz_degis: duz = [x.replace(e, y) for x in duz]
    if sil_duz: duz = []
    ist = par + [f"## Düzeltme {i+1}\n\n{x}" for i, x in enumerate(duz)]
    # Düzeltmeleri istem bloğunun DIŞINA koy (AGENTS.md sırayla ekler)
    t_ist = par
    s_duz = "".join(f"\n## Düzeltme {i+1}\n\n{x}\n" for i, x in enumerate(duz))
    dosya(no, eski_baslik(no) + " (Onay 3)", "ara kare", kod, refs, kontrol, sat if sat is not None else satirlar_kare(kod), t_ist)
    if s_duz and (YALNIZ is None or no in YALNIZ):
        f = os.path.join(P, f"G{no}.md"); io.open(f, "a", encoding="utf-8", newline="\n").write(s_duz)
def eski_baslik(no):
    t = eski_metin(no).splitlines()[0]
    return re.sub(r"^# G\d+ — ", "", t.strip()).replace(" (Onay 3)", "")

kare_yenile(49, "K36", ["`../referanslar/buro_gunduz.jpg` — büro, gündüz", "`onayli/G69.png` — Peri (açık trençkot)", "`onayli/G4.png` — Cengo", "`onayli/G6.png` — Nadide"],
            [("kısa bej trençkot, kemeri ÇÖZÜLMÜŞ, önü AÇIK", "UZUN bej trençkot (etek ucu dizin altında, baldırın ortasında), kemeri ÇÖZÜLMÜŞ, önü AÇIK; oturunca trençkotun etekleri masanın kenarından aşağı sarkıyor")],
            kontrol="trençkot UZUN, etekleri masadan sarkıyor · açık, elbise ve bacak bacak üstüne görünüyor · TAM 3 kişi · çekicilik eski onaylıdan az değil")
kare_yenile(50, "K37", ["`onayli/G10.png` — Susam'ın merkezi ve duvardaki afiş", "`onayli/G69.png` — Peri (açık trençkot)", "`onayli/G7.png` — Ferruh", "`onayli/G4.png` — Cengo", KART["tr"]],
            [("kısa bej trençkot, belden kemerli, yakası açık, altındaki kısa siyah elbisenin derin V dekoltesi görünüyor", KARE_TR_ACIK), ("sol eli trençkotun kemerinde", "sol eli trençkotun açık kenarında")],
            kontrol="trençkot UZUN ve AÇIK · TAM 3 kişi · afiş aynı yüz")
kare_yenile(51, "K38", ["`onayli/G16.png` — Tophane, apartman önü", "`onayli/G9.png` — Gizem", "`onayli/G1.png` — Peri (kapalı trençkot)", "`onayli/G4.png` — Cengo", KART["tr"]],
            [("kısa bej trençkot, belden kemerli, yakası açık, altındaki kısa siyah elbisenin derin V dekoltesi görünüyor", KARE_TR_KAPALI)],
            kontrol="trençkot UZUN ve KAPALI (dışarıda) · TAM 5 kişi · simit poşeti yazısız")
kare_yenile(52, "K39", ["`onayli/G43.png` — Susam, salı akşamı", "`onayli/G69.png` — Peri (açık trençkot)", "`onayli/G4.png` — Cengo", "`referanslar/serit_susam_dortlu.jpg` — Nadide, Ferruh, Kenan, Gizem (soldan sağa; onaylı G6–G9)", KART["tr"]],
            [("kısa bej trençkot, belden kemerli, yakası açık, altındaki kısa siyah elbisenin derin V dekoltesi görünüyor", KARE_TR_ACIK)],
            kontrol="trençkot UZUN ve AÇIK · TAM 6 kişi, her biri bir kez · Nadide ortada önde")
kare_yenile(53, "K40", ["`onayli/G52.png` — aynı sahne, aynı kişiler (YENİ K39)", "`onayli/G84.png` — Ferruh'un bembeyaz panik yüzü"],
            [("Ferruh (ikinci referanstaki panik yüz;", "Ferruh (ikinci referanstaki bembeyaz panik yüz;"), ("Peri bir adım atmış, işaret ediyor;", "Peri bir adım atmış, eli havada;")],
            kontrol="Peri'nin trençkotu UZUN ve AÇIK (birinci referanstaki gibi) · TAM 6 kişi · Ferruh koşuyor",
            sat=satirlar_kare("K40", sadece=["depoya doğru koşuyor"]))
kare_yenile(55, "K42", ["`onayli/G11.png` — imalathane, pekmez kazanı", "`onayli/G69.png` — Peri (açık trençkot)", KART["tr"]],
            [("Kısa bej trençkotu açılmış", "UZUN bej trençkotu (etek ucu dizin altında; üçüncü referanstaki kartın sağdaki hâli; etekleri kazanın kenarından dışarı sarkıyor) açılmış")],
            kontrol="trençkot UZUN, etekleri kazandan sarkıyor · iki ayakta kırmızı stiletto · ten kendi renginde · TAM 1 kişi")
kare_yenile(56, "K43", ["`onayli/G11.png` — imalathane, susam tablaları", "`referanslar/peri_simit2_bas.png` — Peri'nin felaket hâlinde başı (YENİ onaylı G2'nin baş kırpığı)", "`onayli/G9.png` — Gizem", KART["simit"]],
            [("Açık trençkotu,", "UZUN (dizin altına inen; dördüncü referanstaki kart gibi) açık trençkotu,"), ("katlanmış PEMBE bir tezgâh önlüğü", "katlanmış PEMBE bir tezgâh önlüğü (göğüslü, boyun askılı)")],
            kontrol="trençkot UZUN · TAM 2 kişi · Gizem'in kolunda pembe önlük")
kare_yenile(58, "K45", ["`onayli/G11.png` — imalathane", "`referanslar/peri_simit2_bas.png` — Peri'nin felaket hâlinde başı (YENİ onaylı G2'nin baş kırpığı)", "`onayli/G9.png` — Gizem", KART["simit"], KART["onluk"]],
            [("pekmezli, susam serpiştirilmiş açık trençkot", "pekmezli, susam serpiştirilmiş UZUN (dizin altına inen; dördüncü referanstaki kart gibi) açık trençkot"),
             ("katlanmış PEMBE bir tezgâh önlüğünü", "katlanmış PEMBE, GÖĞÜSLÜ bir tezgâh önlüğünü (beşinci referanstaki önlük; boyun askısı sarkıyor)")],
            kontrol="TAM 2 kişi · Gizem'de TAM iki kol · trençkot UZUN · önlük göğüslü, katlı")
for no, kod, cengo in ((63, "K50", False), (64, "K51", True), (65, "K52", False), (66, "K53", True)):
    par, _ = eski_istem(no)
    refs = {63: ["`../referanslar/buro_aksam.jpg` — büro, akşam", "`onayli/G3.png` — Peri, göğüslü pembe önlüklü", "`onayli/G9.png` — Gizem", KART["onluk"]],
            64: ["`../referanslar/buro_aksam.jpg` — büro, akşam", "`onayli/G3.png` — Peri, göğüslü pembe önlüklü", "`onayli/G5.png` — unlu Cengo", "`onayli/G9.png` — Gizem", KART["onluk"]],
            65: ["`../referanslar/buro_aksam.jpg` — büro, akşam", "`onayli/G3.png` — Peri, göğüslü pembe önlüklü", "`onayli/G9.png` — Gizem", "`onayli/G10.png` — afiş (çerçeve ve yüz)", KART["onluk"]],
            66: ["`referanslar/aci_masanin_alti_v2.jpg` — YALNIZ kamera açısı ve düzen (kişileri, kıyafetleri alma)", "`../referanslar/buro_aksam.jpg` — büro, akşam", "`onayli/G3.png` — Peri, göğüslü pembe önlüklü", "`onayli/G9.png` — Gizem", "`onayli/G5.png` — unlu Cengo"]}[no]
    kare_yenile(no, kod, refs,
                [("derin V dekolteli kısa siyah elbisenin üstünde belden bağlı pembe yarım önlük, saçında susam; trençkot, eşarp, gözlük yok", KARE_ONLUK)],
                duz_degis=[("derin V dekolteli kısa siyah elbise ve belden bağlı pembe yarım önlük (G63, G64, G66'daki gibi). Eşarp yok, gözlük yok.", "derin V dekolteli kısa siyah elbise ve GÖĞÜSLÜ pembe önlük (boyun askılı, kalp yaka); pekmez ve susam üstünde.")],
                kontrol="Peri'de GÖĞÜSLÜ önlük, pekmez ve susam her yerinde · trençkot yok · çekicilik eski onaylıdan az değil")
kare_yenile(67, "KART_V3", ["`onayli/G10.png` — Susam'ın merkezi", "`onayli/G69.png` — Peri (açık trençkot)", "`onayli/G4.png` — Cengo", "`referanslar/serit_susam_dortlu.jpg` — Nadide, Ferruh, Kenan, Gizem (soldan sağa; onaylı G6–G9)", KART["tr"]],
            [("kısa bej trençkot, belden kemerli, yakası açık, altındaki kısa siyah elbisenin derin V dekoltesi görünüyor", KARE_TR_ACIK),
             ("bir eli trençkotun kemerinde, öbürü yanında sallanıyor", "trençkotun açık etekleri yürüyüşle arkaya savruluyor; bir eli belinde, öbürü yanında sallanıyor")],
            kontrol="Peri'nin trençkotu UZUN ve AÇIK, etekleri savruluyor · TAM 6 kişi · alt %20 boş zemin · şüpheliler eşit", sat=["- (kart afişi; oyunda satırı yok — paylaşım kartı ve masa kartı MASA_V3 buradan kırpılır)"])

# ---------- 7. Karar kareleri (SR-K; günlük kıyafet: haki Cengo, açık trençkotlu Peri) ----------
def kare_yeni(no, kod, ad, refs, govde, kontrol, sat, komedi=False):
    dosya(no, ad, "ara kare", kod, refs, kontrol, sat, [TARZ_KARE] + ([KOMEDI] if komedi else []) + govde + [PERI_EN, KARE_SON, "Çıplaklık yok.", YAZI, ORAN34])
PERI_K = "Peri (" + KARE_TR_ACIK + "; krem ipek eşarp; güneş gözlüğü alnında, gözleri görünüyor; çıplak bacaklar, ÇORAP YOK; KIRMIZI STİLETTO)"
CENGO_K = "Cengo (haki askeri ceket, kollar kıvrık, renkli boncuklu bileklik; gri tişört, siyah kot, kahverengi bot)"
_d = io.open(DIYALOG, encoding="utf-8").read()
def SONUC(kod):
    b = re.search(r"## karar " + kod + r"\n(.*?)(?=\n## )", _d, re.S).group(1)
    return ["- **SONUÇ**: " + re.search(r"\*\*SONUÇ:\*\* (.*)", b).group(1), "- **CENGO**: " + re.search(r"\*\*CENGO:\*\* (.*)", b).group(1)]
kare_yeni(59, "K46", "Karar (eksper'e anlat): merkezin kepengi inmiş, işsiz kalanlar önünde",
  ["`referanslar/susam_cephe_inik.png` — Susam'ın merkezinin cephesi, kepengi inik (eski onaylı G59)", "`onayli/G69.png` — Peri", "`onayli/G4.png` — Cengo", "`referanslar/serit_susam_dortlu.jpg` — Nadide, Ferruh, Kenan, Gizem (YALNIZ Nadide, Kenan, Gizem alınır)", KART["tr"]],
  ["Sahne: birinci referanstaki Susam'ın merkezinin önü, gündüz, sokak; dükkânın kepengi TAMAMEN inik. Kadrajda TAM 5 kişi; Ferruh YOK.",
   "Kepengin önünde yan yana üç kişi, dördüncü referanstaki yüzlerle: Nadide Hanım (bastonu elinde, yere değmiyor; başı dik ama gözleri dolu, kırgın), Kenan (önlüksüz, gri tişört; elinde katlanmış lacivert önlüğü), Gizem (beyaz tişört, kot etek; kolları kendine sarılı). Üçü de işsiz kalmış, kepenge ve birbirine bakıyor.",
   f"Önde, sol köşede {PERI_K} (ikinci referans) ve yanında {CENGO_K} (üçüncü referans); üçlüye dönük, kameraya üç çeyrek. Peri dimdik ama yüzünde bedelin ağırlığı; Cengo elleri cebinde, başı önde.",
   "Tabelada, kepengin üstünde ve vitrinde hiçbir yazı yok."],
  "kepenk İNİK · Ferruh YOK · TAM 5 kişi · Peri'nin trençkotu UZUN ve AÇIK · Cengo haki (unlu DEĞİL) · yazı yok", SONUC("eksper_anlat"))
kare_yeni(60, "K47", "Karar (Ferruh geri çeksin): Ferruh ofiste telefonla eksperi arıyor",
  ["`onayli/G44.png` — Susam'ın ofisi", "`onayli/G7.png` — Ferruh", "`onayli/G6.png` — Nadide", "`onayli/G69.png` — Peri", "`onayli/G4.png` — Cengo"],
  ["Sahne: birinci referanstaki Susam'ın ofisi, gündüz. Kadrajda TAM 4 kişi.",
   "Ortada Ferruh (ikinci referans; ince bıyık, bordo papyon, lacivert önlük) ofis masasında oturuyor: eski tip ahizeli bir masa telefonunun ahizesini kulağına tutmuş, öbür eli masada; başı önde, omuzları düşük, utanmış. Telefonun tuşlarında yazı yok.",
   "Masanın yanında Nadide Hanım (üçüncü referans; bembeyaz topuz, koyu yeşil elbise, bej hırka, baston elinde yere değmiyor) dimdik ayakta, Ferruh'a sert ve kırgın bakıyor.",
   f"Kapının eşiğinde {PERI_K} (dördüncü referans) ve {CENGO_K} (beşinci referans); Peri kollarını kavuşturmuş izliyor, Cengo kapı pervazına yaslı.",
   "Masadaki kâğıtlar kapalı; hiçbir yazı okunmuyor."],
  "Ferruh telefonda, başı önde · Nadide yanında · Peri ve Cengo kapıda · Cengo haki · yazı yok", SONUC("ferruh_soylesin"))
kare_yeni(61, "K48", "Karar (Nadide'ye bırak): merkez Badem olmuş, Kenan yeni önlüğüyle kapıda",
  ["`referanslar/susam_cephe_inik.png` — Susam'ın merkezinin cephesi (kepengi şimdi AÇIK)", "`onayli/G8.png` — Kenan", "`onayli/G6.png` — Nadide", "`onayli/G69.png` — Peri", "`onayli/G4.png` — Cengo"],
  ["Sahne: birinci referanstaki cephe, gündüz; kepenk AÇIK. Dükkânın tabelası ve tentesi artık FISTIK YEŞİLİ, üstünde yalnız yazısız, sade bir badem tanesi şekli (Badem Pastanesi'nin rengi). Kadrajda TAM 4 kişi.",
   "Dükkânın kapısında Kenan (ikinci referansın yüzü): üstünde LACİVERT DEĞİL, FISTIK YEŞİLİ yeni bir pastane önlüğü; kollarını kavuşturmuş, mahcup.",
   "Önde Nadide Hanım (üçüncü referans; bastonu elinde, yere değmiyor) tabelaya bakıyor: gururlu ama kırgın, dudakları sıkılı.",
   f"Kaldırımın öbür yanında {PERI_K} (dördüncü referans) ve {CENGO_K} (beşinci referans); Cengo tabelaya bakıp burun kıvırıyor.",
   "Tabelada, tentede ve vitrinde hiçbir yazı yok."],
  "tabela fıstık yeşili, yazısız badem · Kenan yeşil önlüklü · Ferruh YOK · Cengo haki · yazı yok", SONUC("nadideye_birak"))
kare_yeni(62, "K49", "Karar (Ferruh'tan pay al): Ferruh büroda Peri'ye zarf uzatıyor",
  ["`../referanslar/buro_gunduz.jpg` — büro, gündüz", "`onayli/G69.png` — Peri", "`onayli/G7.png` — Ferruh (yüzü)", "`onayli/G4.png` — Cengo", KART["tr"]],
  ["Sahne: birinci referanstaki büro, gündüz. Kadrajda TAM 3 kişi.",
   "Masanın önünde Ferruh (üçüncü referansın yüzü; ince bıyık, bordo papyon; beyaz gömlek, ÖNLÜK YOK, koyu pantolon): kalın, kapalı, yazısız kahverengi bir zarfı iki eliyle Peri'ye uzatıyor; yaltakçı, terli bir gülümseme.",
   f"Masanın kenarında {PERI_K} (ikinci referans): bir eliyle zarfı alıyor; yüzü ifadesiz, Ferruh'a bakmıyor, zarfa bakıyor.",
   f"Arkada, pencerenin önünde {CENGO_K} (dördüncü referans): kolları kavuşuk, yüzü asık, Peri'ye bakıyor.",
   "Zarfın içi görünmüyor; para dışarı taşmıyor. Hiçbir yazı yok."],
  "zarf kapalı, yazısız · Cengo asık yüzlü, haki · Ferruh önlüksüz · TAM 3 kişi", SONUC("ferruh_payi"))

# ---------- 8. Yeni kareler (G87–G92) ----------
kare_yeni(87, "K40a", "Yüzleşme (Kenan yolu): herkes Ferruh'a dönmüş, Ferruh donmuş",
  ["`onayli/G52.png` — aynı sahne, aynı kişiler (YENİ K39)", "`onayli/G84.png` — Ferruh'un bembeyaz yüzü"],
  ["Birinci referanstaki sahnenin hemen sonrası: aynı dükkân, aynı akşam ışığı, aynı altı kişi, aynı kıyafetler. Kadrajda TAM 6 kişi.",
   "Öbür beş kişinin hepsi başını Ferruh'a çevirmiş: Nadide Hanım kırgın ve şaşkın; Kenan kaşları çatık; Gizem gözleri iri; Peri dimdik, kaşı kalkık; Cengo bir adım öne gelmiş.",
   "Ferruh (ikinci referanstaki bembeyaz yüz; ince bıyık, bordo papyon, lacivert önlük) tezgâhın önünde DONMUŞ kalmış: yüzü kâğıt gibi beyaz, alnı terli, gözleri kapıya kaçıyor; henüz KOŞMUYOR, ayakları yerde.",
   "Kimsenin elinde telefon YOK."],
  "Ferruh henüz koşmuyor · telefon YOK · TAM 6 kişi · Peri'nin trençkotu UZUN ve AÇIK", ["- *anlatı*: Herkes Ferruh'a dönüyor."])
kare_yeni(88, "K40b", "Yüzleşme (Gizem yolu): fotoğraf elden ele, herkes Ferruh'a dönmüş",
  ["`onayli/G52.png` — aynı sahne, aynı kişiler (YENİ K39)", "`onayli/G84.png` — Ferruh'un bembeyaz yüzü"],
  ["Birinci referanstaki sahnenin hemen sonrası: aynı dükkân, aynı akşam ışığı, aynı altı kişi, aynı kıyafetler. Kadrajda TAM 6 kişi.",
   "Nadide Hanım bir telefonu Kenan'a uzatıyor, Kenan almak üzere: telefon elden ele geçiyor; telefonun ekranı kameraya dönük DEĞİL, görünen arkası düz siyah. İkisinin de başı ama Ferruh'a dönmüş.",
   "Gizem, Peri ve Cengo da başını Ferruh'a çevirmiş: Gizem kollarını kendine sarmış; Peri dimdik, kaşı kalkık; Cengo bir adım öne gelmiş.",
   "Ferruh (ikinci referanstaki bembeyaz yüz; ince bıyık, bordo papyon, lacivert önlük) tezgâhın önünde DONMUŞ kalmış: yüzü kâğıt gibi beyaz, alnı terli, gözleri kapıya kaçıyor; henüz KOŞMUYOR."],
  "telefon Nadide'den Kenan'a geçiyor, ekranı görünmüyor · Ferruh henüz koşmuyor · TAM 6 kişi", ["- *anlatı*: Fotoğraf elden ele geçiyor. Herkes Ferruh'a dönüyor."])
kare_yeni(89, "K54", "İmalathane girişi: Kenan hamur kesiyor",
  ["`onayli/G11.png` — imalathane", "`onayli/G8.png` — Kenan", KART["kenan"]],
  ["Sahne: birinci referanstaki imalathane, gündüz; taş fırın yanıyor. Kadrajda TAM 1 kişi.",
   "Simit tezgâhının başında Kenan (ikinci referans; kısa siyah saç ve sakal, lacivert önlük, kolları sıvalı, önlükte un izi; gözlerinin altında hafif koyu halkalar): unlu tezgâhın üstündeki uzun hamuru metal bir hamur kesme spatulasıyla eşit parçalara kesiyor; başı önde, işine odaklı, yorgun.",
   "Tezgâhta kesilmiş hamur parçaları ve un; arkada pekmez kazanı."],
  "Kenan gerçekten hamur kesiyor · TAM 1 kişi · yazı yok", satirlar_kare("YOK") or ["- *anlatı*: Susam'ın imalathanesi. Taş fırın, simit tezgâhı, büyük bir pekmez kazanı. Uzun boylu, sakallı bir adam lacivert önlüğüyle hamur kesiyor."])
kare_yeni(90, "K55", "Kapanış: Peri masanın altından çıkıyor",
  ["`referanslar/aci_masanin_alti_v2.jpg` — YALNIZ kamera açısı ve düzen (kişileri, kıyafetleri alma)", "`../referanslar/buro_aksam.jpg` — büro, akşam", "`onayli/G3.png` — Peri, göğüslü pembe önlüklü", "`onayli/G9.png` — Gizem", "`onayli/G5.png` — unlu Cengo"],
  ["Sahne: ikinci referanstaki büro, akşam; masa lambası yanık. Kamera açısı birinci referanstaki gibi (YENİ K53 ile aynı açı). Kadrajda TAM 3 kişi.",
   f"Peri ({KARE_ONLUK}; KIRMIZI STİLETTO, ÇORAP YOK) (üçüncü referans) masanın altından çıkıyor: bir eli masanın kenarında, doğruluyor; başı masanın üstüne çıkmış, saçı dağınık; yüzü ciddi, kararlı: \"Maaş veremeyiz.\"",
   "Masanın üstünde simitlerle dolu bir tabla duruyor. Masanın yanında Gizem (dördüncü referans; omzunda çanta, elleri boş) Peri'ye bakıp gülmemeye çalışıyor; kapının iç yanında Cengo (beşinci referans; baştan aşağı bembeyaz un) şaşkın."],
  "Peri masanın altından doğruluyor · tabla masada, Gizem'in elleri boş · TAM 3 kişi", ["- **peri**: (masanın altından çıkarak) Maaş veremeyiz."], komedi=True)
kare_yeni(91, "K56", "Dükkân: Cengo Peri'nin kulağına fısıldıyor",
  ["`onayli/G10.png` — Susam'ın merkezi ve duvardaki afiş", "`onayli/G69.png` — Peri (açık trençkot)", "`onayli/G4.png` — Cengo", KART["tr"]],
  ["Sahne: birinci referanstaki dükkân, gündüz; duvarda çerçeveli afiş. Kadrajda TAM 2 kişi.",
   f"{PERI_K} (ikinci referans) afişe bakıyor; yüzü şaşkın, yanakları kızarmış.",
   f"{CENGO_K} (üçüncü referans) arkasından eğilmiş, ağzını Peri'nin kulağına yaklaştırmış, elini ağzının yanına siper etmiş, fısıldıyor; muzip, gülmemeye çalışıyor."],
  "Cengo gerçekten fısıldıyor, ağzı Peri'nin kulağında · TAM 2 kişi · trençkot UZUN ve AÇIK", ["- **cengo→peri**: (Peri'nin kulağına) Gizli görev yine bitti. Bu sefer kendin bitirdin."])
kare_yeni(92, "K57", "Kapanış: Peri afişi yüzü duvara dönük koyuyor",
  ["`../referanslar/buro_aksam.jpg` — büro, akşam", "`onayli/G3.png` — Peri, göğüslü pembe önlüklü", "`onayli/G9.png` — Gizem", "`onayli/G10.png` — afişin altın yaldızlı çerçevesi"],
  ["Sahne: birinci referanstaki büro, akşam; masa lambası yanık. Kadrajda TAM 2 kişi.",
   f"Peri ({KARE_ONLUK}; KIRMIZI STİLETTO, ÇORAP YOK) (ikinci referans) masanın arkasında, altın yaldızlı çerçeveli büyük afişi iki eliyle duvara yaslıyor: afişin ÖN YÜZÜ DUVARA dönük, kameraya yalnız çerçevenin ARKASI (düz ahşap) görünüyor. Yüzü ciddi, dudakları sıkılı; tek söz söylemiyor.",
   "Masanın önünde Gizem (üçüncü referans; omzunda çanta) Peri'ye bakıyor; şaşkın ve biraz kırgın."],
  "afişin ön yüzü GÖRÜNMÜYOR, yalnız çerçevenin arkası · TAM 2 kişi", ["- *anlatı*: Peri afişe bakıyor, sonra Gizem'e. Bir şey demiyor; afişi masanın arkasına, yüzü duvara dönük koyuyor."])

io.open(os.path.join(KOK, "onay3_liste.tsv"), "w", encoding="utf-8").write("\n".join(f"G{n}\t{t}\t{b}\t{a}\t{w}" for n, b, t, a, w in sorted(YAZILAN)) + "\n")
print(len(YAZILAN), "istem yazıldı")
