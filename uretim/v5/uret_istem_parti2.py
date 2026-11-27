# Vaka 5 Parti 2 istemleri (27 Kasım 2026, Oğuz Bey'in bilgisayarı). Kalıp: uretim/v8/prompts G26, G28, G30, G33.
# Kullanım: python -I uret_istem_parti2.py satir_resim.md   → prompts/G23..G35.md
import os, re, sys

KOK = os.path.dirname(os.path.abspath(__file__))
PR = os.path.join(KOK, "prompts")
SATIR, cur = {}, None
for l in open(sys.argv[1], encoding="utf-8"):
    m = re.match(r"^### ([a-z0-9_.]+) \(", l)
    if m: cur = m.group(1); SATIR[cur] = []; continue
    if l.startswith("## "): cur = None; continue
    if cur and l.startswith("- "): SATIR[cur].append(l.rstrip("\n"))

def satirlar(k):
    if not SATIR.get(k): raise SystemExit("satır yok: " + k)
    return "\n".join(SATIR[k][:7])

def yaz(ad, metin):
    with open(os.path.join(PR, ad + ".md"), "w", encoding="utf-8", newline="\n") as f:
        f.write(metin.strip("\n") + "\n")

SON_REF = ("Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin "
           "gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA. "
           "Karikatür değil: doğal yüz oranları, abartısız ifade.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
BAKIS = ("Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay "
         "bakıyor; yukarı, aşağı ya da kameraya değil. Profil değil: uzaktaki göz de açıkça görünüyor.")
SAC = "Saçın dış çizgisi toplu ve net: arka plana taşan ince tek teller, havada kıvrılan uçlar yok."
KADRAJ = ("Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince "
          "bir boşluk. Arka plan: düz, tek renk {z}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş "
          "tek renk gibi); hiçbir nesne yok.")
KART_REF = ("Kart YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartın çizim tarzını, ışığını, yüzünü ve pozunu ALMA.")
SATIR_BAS = ("`arac_satir_resim.js` (27 Kasım 2026, V5 dört kapı yolu: 0 vapur dogru, 2 iskele zayif, 0 usta kadir, "
             "3 cozmez5 nedim). Codex bu bölümü istem metnine katmaz.")
FIG_SON = """Çıplaklık yok.

{yazi}

Görselin oranı TAM 4:5, dikey (1122×1402).

{son}"""

def peri(G, kart, anahtar, baslik, hal, kontrol, kiyafet, poz, ifade, sahne):
    yaz(f"G{G}", f"""
# G{G} — Peri, {baslik}, normal (temel)

- tür: figür · anahtar: `{anahtar}`
- önce hazır olmalı: {kart} (kıyafet kartı, onaylı)
- zemin: açık bej (`zemin.tsv`, `arac_zemin.py`)
- kıyafet hâli: {hal}

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../referanslar/peri_bas.jpg` — Peri'nin yüzü (yalnız yüz)
2. `../referanslar/tarz_govde_kadin.jpg` — YALNIZ tarz, ölçek, kadraj (başı silik)
3. `onayli/{kart}.png` — kıyafet kartı: YALNIZ kıyafetin kesimi ve rengi; yüzü, pozu alınmaz
4. `../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği

## Satırlar

{SATIR_BAS}

{satirlar(anahtar)}

## Kontrol

{kontrol} · eller BOŞ · yüz peri_bas ile aynı · zemin açık bej

## İstem

```text
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı kızıl-kahve saç rengi, aynı ela-yeşil gözler, kırmızı ruj. İkinci referans YALNIZ çizim tarzı, ölçek ve kadraj içindir: başı bilerek silindi; oradaki kıyafeti ve pozu alma.

Üçüncü referans kıyafet kartıdır: kıyafet kart nasılsa öyle. {KART_REF}

Peri: eski bir güzellik kraliçesi, şimdi dedektif; {sahne}

Peri'nin kıyafeti: {kiyafet}

{poz}

{BAKIS}

{ifade}

Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur.

{SAC}

{KADRAJ.format(z="açık bej")}

{FIG_SON.format(yazi=YAZI, son=SON_REF)}
```
""")

peri(23, "G1", "peri.ipek.normal", "zümrüt yeşili ipek elbise + krem hırka",
     "`ipek` (dışarıda, vapurda, yüzleşme). `islak`, `battaniye` ve `yesil` ifadesi Parti 3'te bu temelden.",
     "elbise karttaki gibi (zümrüt yeşili, ince askılı, akışkan ipek) · üstünde KREM örgü hırka, önü AÇIK · elbisenin V yakası DERİN · küçük inci küpe · saç açık, dalgalı, hafif rüzgârlı",
     "kart referansındaki kıyafet, aynen: zümrüt yeşili, ince askılı, akışkan ipek elbise; üstünde krem örgü hırka, önü açık. Kartta görünmeyen: elbisenin V yakası DERİN, dekoltesi belirgin; hırka omuzlarda, önü açık, dekolteyi örtmüyor. Saçı AÇIK, omuzlarına dökülen iri dalgalar, rüzgârda hafif dağılmış. Kulaklarında küçük inci küpeler. Ayaklarında kırmızı stiletto, çorap yok (bu kadrajda görünmez).",
     "Poz: TAM İKİ KOL, İKİ EL. Bir eli hırkanın açık önünü hafifçe tutuyor, öbür kolu gövdesinin yanında, eli gevşek. Ağırlığı bir bacağında, kalçası hafif yana kırık. Elinde nesne yok.",
     "İfade: sakin, kendinden emin, dikkatle dinleyen bir kadın; dudaklarında belli belirsiz bir gülümseme.",
     "bugün vapur yolculuğuna çıkmış, zarif ve rüzgârlı.")

peri(24, "G2", "peri.ipek_acik.normal", "ipek elbise, hırkasız",
     "`ipek_acik` (giriş çekicilik anından sonra ve konuşma: büroda, hırka sandalyede).",
     "elbise karttaki gibi (zümrüt yeşili, ince askılı, akışkan ipek) · HIRKA YOK: omuzlar ve kollar çıplak · V yaka DERİN · küçük inci küpe · saç açık, dalgalı",
     "kart referansındaki kıyafet, aynen: zümrüt yeşili, ince askılı, akışkan ipek elbise; hırka YOK, omuzlar ve kollar çıplak. Kartta görünmeyen: elbisenin V yakası DERİN, dekoltesi belirgin. Saçı AÇIK, omuzlarına dökülen iri dalgalar. Kulaklarında küçük inci küpeler. Ayaklarında kırmızı stiletto, çorap yok (bu kadrajda görünmez).",
     "Poz: TAM İKİ KOL, İKİ EL. Bir eli belinde, öbür kolu gövdesinin yanında, eli gevşek. Ağırlığı bir bacağında, kalçası hafif yana kırık, omzu hafif geride. Elinde nesne yok.",
     "İfade: kendinden emin, hafif muzip; dudaklarında belli belirsiz bir gülümseme.",
     "büroda, açık pencerenin önünde hırkasını çıkarmış, iş konuşuyor.")

# Cengo
yaz("G25", f"""
# G25 — Cengo, lacivert balıkçı yaka + kahverengi kasket, normal (temel)

- tür: figür · anahtar: `cengo.balikci.normal`
- önce hazır olmalı: G3 (kıyafet kartı, onaylı)
- zemin: açık bej (`zemin.tsv`)
- kıyafet hâli: `balikci` (vaka boyunca). `simitli`, `kollar`, `simit` Parti 3'te bu temelden.

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../v3/onayli/G4.png` — Cengo'nun onaylı eski temeli (Vaka 3): YÜZ, SAÇ, ÇİZİM TARZI, IŞIK, açık bej zemin ve kadraj buradan; kıyafeti alınmaz
2. `onayli/G3.png` — kıyafet kartı: YALNIZ kıyafetin kesimi ve rengi; kartın çizim tarzı, yüzü, pozu alınmaz
3. `../referanslar/tarz_ornek_erkek.jpg` — YALNIZ çizim tarzı örneği

## Satırlar

{SATIR_BAS}

{satirlar("cengo.balikci.normal")}

## Kontrol

yüz v3 G4'ünkü · LACİVERT kalın örgü BALIKÇI YAKA kazak · KAHVERENGİ yün KASKET, altından koyu dağınık saç · boncuklu bileklik kadrajın SAĞındaki bilekte · kazağın kol ağzından telin ucu · eller boş · zemin açık bej

## İstem

```text
Birinci referans Cengo'nun onaylı eski resmidir: yüz, koyu dalgalı dağınık saç, kısa sakal, boyalı çizim tarzı, sıcak ışık ve renkler ONUN GİBİ olsun. Oradaki kıyafeti (haki ceket, gri tişört) ve pozu ALMA. Bu resim katalog ya da moda çizimi DEĞİL: kalın siyah kontur, düz boya, soğuk stüdyo ışığı yok; birinci referanstaki gibi boyalı, sıcak, dokulu. Aynı düz açık bej arka plan, aynı ölçek ve kadraj.

İkinci referans kıyafet kartıdır: kıyafet kart nasılsa öyle. {KART_REF}

Cengo: otuzlarının ortasında, uzun boylu, yakışıklı, dağınık bir adam; bugün vapurda, rahat ve keyifli.

Kıyafet: kart referansındaki kıyafet, aynen: koyu lacivert, kalın örgülü balıkçı yaka kazak; başında kahverengi yün kasket, altından koyu, dağınık saç taşıyor; koyu gri pantolon. Kazağın kol ağzının altından ince bir telin ucu görünüyor. Kadrajın SAĞ tarafında kalan bileğinde renkli boncuklu, ucuz, çocuk işi bir bileklik.

Poz: TAM İKİ KOL, İKİ EL. Bir eli pantolonunun cebinde, öbür kolu gövdesinin yanında, eli gevşek; omuzları rahat. Elinde nesne yok.

{BAKIS}

İfade: keyifli, hınzır bir yarım gülümseme.

{SAC}

{KADRAJ.format(z="açık bej")}

{FIG_SON.format(yazi=YAZI, son=SON_REF)}
```
""")

# Gizem
yaz("G26", f"""
# G26 — Gizem, kiremit örgü hırka (bu kıyafetin temeli)

- tür: figür · anahtar: `gizem.hirka5`
- önce hazır olmalı: G4 (kıyafet kartı, onaylı)
- zemin: açık bej (`zemin.tsv`)
- V5'in kendi kıyafeti (SATIR-43, 27 Kasım 2026, Oğuz Bey). `hirka5_isveli` Parti 3'te bu temelden.

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../v3/referanslar/gizem_bas.png` — Gizem'in başı (Vaka 3 onaylı G9'un baş kırpığı)
2. `onayli/G4.png` — kıyafet kartı: YALNIZ kıyafetin kesimi ve rengi; kartın çizim tarzı, yüzü, pozu alınmaz
3. `../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği

## Satırlar

{SATIR_BAS}

{satirlar("gizem.hirka5")}

## Kontrol

yüz gizem_bas ile aynı (bal rengi kâküllü dalgalı saç, çil) · KİREMİT iri örgü hırka, önü açık · KREM yakalı gömlek · GRİ pantolon · küçük altın halka küpe · eller boş · zemin açık bej

## İstem

```text
Birinci referans görseldeki kadının AYNISI: aynı yüz, bal rengi kâküllü dalgalı saç, çiller, pembe-mercan ruj.

İkinci referans kıyafet kartıdır: kıyafet kart nasılsa öyle. {KART_REF}

Gizem: yirmilerinin ortasında, büronun sekreteri; genç, sportif, sevimli, dilini tutamayan. Akşam büroda, pencerenin önünden dönmüş.

Kıyafet: kart referansındaki kıyafet, aynen: kiremit rengi, iri örgülü, önü açık uzun hırka; altında krem, küçük yakalı gömlek; gri kumaş pantolon. Kulaklarında küçük altın halka küpeler.

Poz: TAM İKİ KOL, İKİ EL. Kollarını göğsünün altında hafifçe kavuşturmuş, ağırlığı bir bacağında. Elinde nesne yok.

{BAKIS}

İfade: muzip, bilmiş bir yarım gülümseme; tek kaşı hafif kalkık.

Çekicilik: genç, sevimli, sportif bir çekicilik; abartısız.

{SAC}

{KADRAJ.format(z="açık bej")}

{FIG_SON.format(yazi=YAZI, son=SON_REF)}
```
""")

# Konuk kıyafet kartları
KONUK = [
 (27, "G5", "Muammer Bey", "tarz_govde_erkek.jpg",
  "TAM BOY · belden yukarısı G5 gibi (boyalı fönlü saç, kalın bıyık, bordo kadife ceket, krem gömlek, boş saat zinciri) · KOYU GRİ kumaş pantolon · siyah, parlak deri ayakkabı · eller boş",
  "bordo kadife ceket, krem gömlek (yakası açık), cebinden sarkan boş, altın renkli saat zinciri (temeldeki gibi); ütülü, KOYU GRİ kumaş pantolon; ince siyah kemer; ayaklarında siyah, parlak, bağcıklı deri ayakkabı. Kutu, saat, çanta YOK."),
 (28, "G6", "Selim", "tarz_govde_erkek.jpg",
  "TAM BOY · belden yukarısı G6 gibi (kısa kır kıvırcık saç, kısa kır sakal, kahverengi hırka, açık gri uzun pardösü) · pardösü DİZE kadar · KOYU KAHVE pantolon · eskimiş kahverengi ayakkabı · eller boş",
  "eski kahverengi örgü hırka, açık renk gömlek; üstünde DİZE kadar inen, eskimiş, açık GRİ pardösü, önü açık (temeldeki gibi); koyu kahve, bol kumaş pantolon; ayaklarında eskimiş, kahverengi, bağcıklı deri ayakkabı. Alet, sandalye, çanta YOK."),
 (29, "G7", "Kadir", "tarz_govde_iri_erkek.jpg",
  "TAM BOY · belden yukarısı G7 gibi (kısa siyah saç, kalın siyah bıyık, beyaz çaycı ceketi, kollar sıvalı, omzunda beyaz bez) · SİYAH pantolon · siyah ayakkabı · eller boş (tepsi YOK)",
  "beyaz, düğmeli, kısa çaycı ceketi, kolları dirseğe kadar sıvalı, omzunda küçük beyaz bez (temeldeki gibi); düz SİYAH kumaş pantolon; ayaklarında siyah, rahat deri ayakkabı. Tepsi, bardak YOK."),
 (30, "G8", "Nedim Bey", "tarz_govde_erkek.jpg",
  "TAM BOY · belden yukarısı G8 gibi (beyaz at kuyruğu, keçi sakalı, gri blazer, açık mavi gömlek, ipek fular, cep mendili) · KOYU GRİ pantolon · siyah, parlak ayakkabı · eller boş (baston bu kartta YOK)",
  "gri blazer ceket, açık mavi gömlek, boynunda desenli ipek fular, göğüs cebinde bordo mendil (temeldeki gibi); kahverengi deri kemer; ütülü, KOYU GRİ kumaş pantolon; ayaklarında siyah, parlak, bağcıklı deri ayakkabı. Baston bu kartta YOK (eller boş)."),
 (31, "G9", "Derya Hanım", "tarz_govde_kadin.jpg",
  "TAM BOY · belden yukarısı G9 gibi (kısa kumral saç, açık gri bere, kırmızı-lacivert yağmurluk) · yağmurluk DİZE kadar · KOT pantolon · BEYAZ spor ayakkabı · eller boş",
  "açık gri yün bere; DİZE kadar inen, kırmızı-lacivert, fermuarlı, kapüşonlu yağmurluk (temeldeki gibi); altında mavi kot pantolon; ayaklarında beyaz spor ayakkabı. Çanta, poşet, simit YOK."),
 (32, "G10", "Efe", "tarz_govde_erkek.jpg",
  "TAM BOY, ÇOCUK (sekiz yaş, küçük beden) · belden yukarısı G10 gibi (kısa siyah saç, parlak sarı yağmurluk) · MAVİ KOT pantolon · KIRMIZI lastik çizme · eller boş",
  "parlak SARI, kapüşonlu yağmurluk, kapüşon arkada (temeldeki gibi); mavi kot pantolon; ayaklarında KIRMIZI lastik çizme. Simit, poşet YOK. Bu bir ÇOCUK: sekiz yaşında, küçük bedenli; ikinci referanstaki yetişkin ölçeğini alma, çocuk oranları."),
 (33, "G11", "İskele görevlisi", "tarz_govde_iri_erkek.jpg",
  "TAM BOY · belden yukarısı G11 gibi (kısacık kumral saç, bıyıksız, kalın siyah gözlük, lacivert yelek, beyaz gömlek, kırmızı ipte düdük) · LACİVERT pantolon · siyah ayakkabı · rozet, amblem, yazı YOK · eller boş (defter YOK)",
  "lacivert, düğmeli yelek, beyaz uzun kollu gömlek, boynunda kırmızı ipte gümüş düdük, kalın siyah çerçeveli gözlük (temeldeki gibi); düz LACİVERT kumaş pantolon, siyah kemer; ayaklarında siyah, sade deri ayakkabı. Rozet, amblem, yaka kartı, kurum adı, defter YOK."),
 (34, "G12", "İsmet Usta", "tarz_govde_iri_erkek.jpg",
  "TAM BOY · belden yukarısı G12 gibi (siyaha boyalı geriye taranmış saç, burnunun ucunda gözlük, ekose gömlek, kollar sıvalı) · koyu kahve DERİ ÖNLÜK DİZE kadar · KAHVERENGİ kadife pantolon · kahverengi ayakkabı · eller boş",
  "ekose gömlek, kolları sıvalı, okuma gözlüğü burnunun ucunda (temeldeki gibi); önünde DİZE kadar inen, koyu kahve, kalın, aşınmış DERİ ÖNLÜK; altında kahverengi kadife pantolon; ayaklarında eskimiş, kahverengi, bağcıklı deri ayakkabı. Kayış, iğne, çanta YOK."),
 (35, "G13", "Simitçi", "tarz_govde_erkek.jpg",
  "TAM BOY · belden yukarısı G13 gibi (kızıl kıvırcık saç, çil, çizgili tişört, beyaz önlük) · KOYU pantolon · BEYAZ spor ayakkabı · TABLA YOK · eller boş",
  "lacivert-krem çizgili tişört, üstünde beyaz, uzun önlük (temeldeki gibi); koyu gri pantolon; ayaklarında beyaz spor ayakkabı. Bu kartta simit tablası YOK, simit YOK; eller boş."),
]
for G, temel, ad, govde, kontrol, kiyafet in KONUK:
    yaz(f"G{G}", f"""
# G{G} — {ad} (kıyafet kartı)

- tür: kıyafet kartı (oyuna GÖMÜLMEZ; ISTEM-17, SATIR-8) · anahtar: yok
- önce hazır olmalı: {temel} (onaylı temel). Her konuğa kart — ISTEM-17; belden aşağısı Parti 2 onayında Oğuz Bey'e.

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `onayli/{temel}.png` — bu kişinin onaylı temeli: YÜZ, SAÇ, belden yukarı kıyafet ve ÇİZİM TARZI buradan; pozu alınmaz
2. `../referanslar/{govde}` — YALNIZ tam boy ölçek (başı silik); kıyafeti, pozu alınmaz
3. `../referanslar/{"tarz_ornek_kadin.jpg" if "kadin" in govde else "tarz_ornek_erkek.jpg"}` — YALNIZ çizim tarzı örneği

## Kontrol

{kontrol} · zemin açık gri

## İstem

```text
KIYAFET KARTI: bu resim kıyafetin ölçü resmidir. Kadraj TAM BOY, TEK KİŞİ: başın tepesinden ayakkabının altına kadar bütün beden kadrajda; ayaklar KESİLMİYOR, ayakkabının altında ince bir boşluk var. Önden, dimdik ayakta, ağırlık iki ayakta; kollar gövdenin yanında, hafif açık, kıyafetin önünü kapatmıyor. Yüz sakin ve nötr, hafif yana bakıyor, kameraya değil. Arka plan: düz, tek renk açık gri; gölgesiz, dokusuz, hiçbir nesne yok.

Birinci referans bu kişinin onaylı resmidir: aynı yüz, aynı saç, aynı beden yapısı; belden yukarısı (kıyafet, takılar) ONUN AYNISI; boyalı çizim tarzı, sıcak ışık ve renkler onun gibi. Bu kart yalnız belden aşağısını tamamlar. Bu resim katalog ya da moda çizimi DEĞİL: kalın siyah kontur, düz boya, soğuk stüdyo ışığı yok. İkinci referans YALNIZ tam boy ölçek içindir; başı bilerek silindi, oradaki kıyafeti ve pozu alma.

Kıyafet: {kiyafet}

Boya dokusu yüzde, saçta ve ışıkta; kumaş pürüzsüz, yumuşak geçişli (köşeli kırışık, buruşturulmuş kâğıt ya da folyo dokusu yok).

{SON_REF}

İKİ kolu, İKİ eli var; eller boş.

Çıplaklık yok.

{YAZI}

Görselin oranı TAM 2:3, dikey (1024×1536).
```
""")
print("yazıldı G23–G35")
