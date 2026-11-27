# Vaka 5 Parti 1 istemleri (27 Kasım 2026, Oğuz Bey'in bilgisayarı). Kalıp: uretim/v8/prompts (G1, G5, G8, G14, G15).
# Kullanım: python uret_istem_parti1.py <satir_resim.md>   → prompts/G1..G22.md (+ konuklarda G<n>z.md)
import os, re, sys

KOK = os.path.dirname(os.path.abspath(__file__))
PR = os.path.join(KOK, "prompts")
os.makedirs(PR, exist_ok=True)

satir_dosya = sys.argv[1]
SATIR = {}
cur = None
for l in open(satir_dosya, encoding="utf-8"):
    m = re.match(r"^### ([a-z0-9_.]+) \(", l)
    if m:
        cur = m.group(1); SATIR[cur] = []; continue
    if l.startswith("## "):
        cur = None; continue
    if cur and l.startswith("- "):
        SATIR[cur].append(l.rstrip("\n"))

def satirlar(anahtar, yedek=()):
    ls = SATIR.get(anahtar, [])
    for y in yedek:
        if not ls: ls = SATIR.get(y, [])
    if not ls:
        raise SystemExit(f"satır yok: {anahtar}")
    return "\n".join(ls[:6])

def yaz(ad, metin):
    with open(os.path.join(PR, ad + ".md"), "w", encoding="utf-8", newline="\n") as f:
        f.write(metin.strip("\n") + "\n")

TARZ = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil: "
        "belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern "
        "çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
SON_REF = ("Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin "
           "gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA. "
           "Karikatür değil: doğal yüz oranları, abartısız ifade.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
KUMAS = "Boya dokusu yüzde, saçta ve ışıkta; kumaş pürüzsüz, yumuşak geçişli (köşeli kırışık, buruşturulmuş kâğıt ya da folyo dokusu yok)."
KART_BAS = ("KIYAFET KARTI: bu resim kıyafetin ölçü resmidir. Kadraj TAM BOY, TEK KİŞİ: başın tepesinden ayakkabının altına kadar "
            "bütün beden kadrajda; ayaklar KESİLMİYOR, ayakkabının altında ince bir boşluk var. Önden, dimdik ayakta, ağırlık iki "
            "ayakta; kollar gövdenin yanında, hafif açık, kıyafetin önünü kapatmıyor. Yüz sakin ve nötr, hafif yana bakıyor, "
            "kameraya değil. Arka plan: düz, tek renk açık gri; gölgesiz, dokusuz, hiçbir nesne yok.")
KART_SON = f"""{SON_REF}

İKİ kolu, İKİ eli var; eller boş.

Çıplaklık yok.

{YAZI}

Görselin oranı TAM 2:3, dikey (1024×1536)."""

# ---------------- Kıyafet kartları ----------------
yaz("G1", f"""
# G1 — Peri, zümrüt yeşili ipek elbise + krem hırka (kıyafet kartı)

- tür: kıyafet kartı (oyuna GÖMÜLMEZ; SATIR-8, ISTEM-17) · anahtar: yok
- önce hazır olmalı: yok
- kıyafet hâli: `ipek` (dışarıda, vapurda, yüzleşme). `islak` (sırılsıklam, yosunlu, tek ayakkabı) ve `battaniye` ayrı kart DEĞİL: bu kart + istemde hâl.
- tarif (form §14, diyalog başı): zümrüt yeşili, ince, askılı ipek elbise; üstünde ince krem hırka; küçük inci küpe; saç açık, rüzgârda dağınık. Ayakkabı: kırmızı stiletto, çorap yok (27 Kasım 2026, Oğuz Bey; formdaki siyah sandaletin yerine).
- kart kuralı (ISTEM-17): çekicilik satırı YOK; hırka önü kapalıya yakın, dekolte görünmüyor. Çekicilik figür istemlerinde.

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../referanslar/peri_bas.jpg` — Peri'nin yüzü
2. `../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve tarz (başı silik)
3. `../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği

## Kontrol

TAM BOY, TEK kişi · ZÜMRÜT YEŞİLİ, ince, akışkan İPEK elbise, diz altına kadar · üstünde İNCE KREM örgü hırka, önü hafif açık · küçük İNCİ küpe · KIRMIZI stiletto · ÇORAP YOK · saç AÇIK, dalgalı, hafif dağınık · çanta, şapka, kolye YOK · zemin açık gri

## İstem

```text
{KART_BAS}

{TARZ}

Birinci referans Peri'nin yüzüdür: aynı yüz, aynı kızıl-kahve saç, ela-yeşil gözler, kırmızı ruj. İkinci referans YALNIZ ölçek ve tarz içindir (başı silik); oradaki kıyafeti ve pozu alma.

Peri: otuzlarının sonunda, eski bir güzellik kraliçesi, şimdi dedektif.

Saç: kızıl-kahve saçı AÇIK, omuzlarına dökülen iri, yumuşak dalgalar; rüzgârda biraz dağılmış gibi. Kulaklarında küçük İNCİ küpeler. Başka takı YOK.

Kıyafet: ZÜMRÜT YEŞİLİ (derin, parlak yeşil), ince, akışkan İPEK bir elbise; ince askılı, beli hafif oturan, eteği diz altına inen, yürürken dalgalanan yumuşak bir kumaş. Üstünde İNCE, KREM rengi, yumuşak örgü bir HIRKA; önü düğmesiz, hafif açık, kolları bileğe kadar; hırka elbisenin üst kısmını örtüyor. Bacaklar çıplak, ÇORAP YOK. Ayaklarında KIRMIZI, sivri burunlu stiletto. Çanta, şapka, kolye, kemer YOK.

{KUMAS}

{KART_SON}
```
""")

yaz("G2", f"""
# G2 — Peri, ipek elbise, hırkasız (kıyafet kartı)

- tür: kıyafet kartı (oyuna GÖMÜLMEZ; SATIR-8, ISTEM-17 — açılıp kapanan kıyafetin ikinci hâli) · anahtar: yok
- önce hazır olmalı: G1 (onaylı)
- kıyafet hâli: `ipek_acik` (giriş çekicilik anından sonra ve konuşma: hırka sandalyede, yalnız ipek elbise).
- kart kuralı (ISTEM-17): çekicilik satırı YOK; askılı elbisenin yakası sade, derin değil. Çekicilik figür istemlerinde.

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../referanslar/peri_bas.jpg` — Peri'nin yüzü
2. `onayli/G1.png` — AYNI elbise, AYNI ayakkabı; yalnız hırka yok
3. `../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği

## Kontrol

G1'deki elbisenin AYNISI (renk, kumaş, boy, askılar) · HIRKA YOK: omuzlar ve kollar çıplak · küçük inci küpe · KIRMIZI stiletto · ÇORAP YOK · saç açık, dalgalı · zemin açık gri

## İstem

```text
{KART_BAS}

{TARZ}

Birinci referans Peri'nin yüzüdür: aynı yüz, aynı kızıl-kahve saç, ela-yeşil gözler, kırmızı ruj. İkinci referans aynı kıyafetin hırkalı kartıdır: elbise, renk, kumaş, boy ve ayakkabı TAM ONUN GİBİ olsun; tek fark HIRKA YOK.

Peri: otuzlarının sonunda, eski bir güzellik kraliçesi, şimdi dedektif.

Saç: kızıl-kahve saçı AÇIK, omuzlarına dökülen iri, yumuşak dalgalar. Kulaklarında küçük İNCİ küpeler. Başka takı YOK.

Kıyafet: ikinci referanstaki ZÜMRÜT YEŞİLİ, ince, akışkan İPEK elbisenin AYNISI: ince askılı, beli hafif oturan, eteği diz altına inen. Hırka YOK: omuzlar ve kollar çıplak. Bacaklar çıplak, ÇORAP YOK. Ayaklarında KIRMIZI, sivri burunlu stiletto. Çanta, şapka, kolye, kemer YOK.

{KUMAS}

{KART_SON}
```
""")

yaz("G3", f"""
# G3 — Cengo, lacivert balıkçı yaka kazak + kahverengi kasket (kıyafet kartı)

- tür: kıyafet kartı (oyuna GÖMÜLMEZ; SATIR-8) · anahtar: yok
- önce hazır olmalı: yok
- kıyafet hâli: `balikci` (vaka boyunca). `simitli` (kolunda ve kasketinde simitler) ve `kollar`/`simit` pozları ayrı kart DEĞİL.
- tarif (diyalog başı, form §14): lacivert balıkçı yaka kalın kazak, kahverengi yün kasket; tel ve boncuklu bileklik sabit (KAR-24). Saç her vakada aynı (kasket altında koyu dalgalı uçlar görünür).

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../v3/onayli/G4.png` — Cengo'nun onaylı eski resmi (Vaka 3): YÜZ, SAÇ ve ÇİZİM TARZI buradan; kıyafeti alınmaz
2. `../referanslar/cengo_beden.jpg` — bedeni ve ölçeği (kıyafeti, pozu alınmaz)
3. `../referanslar/tarz_ornek_erkek.jpg` — YALNIZ çizim tarzı örneği

## Kontrol

TARZ: v3 G4 ile aynı boyalı tarz (katalog/çizgi roman DEĞİL) · YÜZ v3 G4'ünkü · TAM BOY, TEK kişi · LACİVERT, kalın örgü BALIKÇI YAKA kazak · KAHVERENGİ yün KASKET, altından koyu dalgalı saç uçları · koyu gri kot ya da kumaş pantolon · kahverengi bot · telin ucu pantolonun arka cebinden ya da kazağın kolundan görünmüyorsa sorun değil · boncuklu bileklik kadrajın SAĞındaki bilekte · zemin açık gri

## İstem

```text
{KART_BAS}

{TARZ}

Birinci referans Cengo'nun onaylı eski resmidir: yüz, koyu dalgalı dağınık saç, kısa sakal, boyalı çizim tarzı, sıcak ışık ve renkler ONUN GİBİ olsun. Oradaki kıyafeti ve pozu ALMA. Bu resim katalog ya da moda çizimi DEĞİL: kalın siyah kontur, düz boya, soğuk stüdyo ışığı yok. İkinci referans Cengo'nun bedeni ve ölçeğidir; oradaki kıyafeti ve pozu alma.

Cengo: otuzlarının ortasında, uzun boylu, geniş omuzlu, yakışıklı, dağınık bir adam; bugün vapur yolcusu, rahat giyimli.

Kıyafet: koyu LACİVERT, kalın örgülü, yumuşak bir BALIKÇI YAKA kazak; kolları bileğe kadar, beli hafif bol. Başında KAHVERENGİ, yün, kısa siperli bir KASKET; kasketin altından koyu, dalgalı, dağınık saçının uçları kulaklarının ve ensesinin üstünde görünüyor. Koyu gri, düz paça bir pantolon. Ayaklarında kahverengi, bağcıklı kısa bot. Kadrajın SAĞ tarafında kalan bileğinde RENKLİ BONCUKLU, ucuz, çocuk işi bir bileklik. Kazağın kol ağzının altından ince bir TELİN ucu görünüyor. Atkı, saat, kolye YOK. Kısa sakal.

{KUMAS}

{KART_SON}
```
""")

yaz("G4", f"""
# G4 — Gizem, kiremit rengi örgü hırka (kıyafet kartı)

- tür: kıyafet kartı (oyuna GÖMÜLMEZ; SATIR-8, ISTEM-17) · anahtar: yok
- önce hazır olmalı: yok
- kıyafet hâli: `hirka5` (kapanış). 27 Kasım 2026, Oğuz Bey: Gizem'e V5'in kendi kıyafeti (SATIR-43; V6'nın `triko` resimleri V5'te kullanılmaz). Renk hardal değil: V6'nın Dilek'i hardal kazaklı.
- tarif: kiremit rengi (pas turuncusu) örgü hırka, krem gömlek, gri kumaş pantolon. Ayakkabı formda yok → kahverengi, düz tabanlı kısa bot (tam boy kart için).

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../v3/referanslar/gizem_bas.png` — Gizem'in başı (Vaka 3 onaylı G9'un baş kırpığı)
2. `../referanslar/tarz_govde_kadin.jpg` — YALNIZ ölçek ve kadraj (başı silik)
3. `../referanslar/tarz_ornek_kadin.jpg` — YALNIZ çizim tarzı örneği

## Kontrol

TAM BOY, ayakkabı dahil · KİREMİT (pas turuncusu) kalın ÖRGÜ HIRKA, önü açık · altında KREM, yakalı GÖMLEK · düz GRİ kumaş pantolon · kahverengi düz tabanlı kısa bot · bal rengi kâküllü saç, çil · hardal, krem triko, yeşil kazak YOK · kırmızı yok · zemin açık gri

## İstem

```text
{KART_BAS}

{TARZ}

Birinci referans Gizem'in başıdır: aynı yüz, bal rengi kâküllü dalgalı saç, çiller, pembe-mercan ruj. İkinci referans YALNIZ ölçek ve tarz içindir (başı silik); oradaki kıyafeti ve pozu alma.

Gizem: yirmilerinin ortasında, büronun sekreteri; genç, sportif, sevimli.

Kıyafet: KİREMİT rengi (koyu, sıcak pas turuncusu), kalın, iri örgülü, yumuşak bir HIRKA; önü düğmesiz, açık, kalçaya kadar uzun, kolları bileğe kadar. Altında KREM rengi, küçük yakalı, düz bir GÖMLEK, pantolonun içine sokulu. Düz paça, GRİ kumaş pantolon. Ayaklarında kahverengi, düz tabanlı, kısa bot. Kulaklarında küçük altın halka küpeler. Hardal sarısı, krem triko, yeşil kazak, kot, önlük YOK; kırmızı hiçbir şey YOK; çanta, atkı YOK.

{KART_SON}
```
""")

# ---------------- Konuk temelleri ----------------
KONUK = [
 # (G, id, ad, anahtar, yedek satır, ref gövde, tarif, kontrol, poz, ifade, benzemiyor, zemin1)
 (5, "muammer", "Muammer Bey", "muammer.normal", (), "tarz_govde_erkek.jpg",
  "Muammer Bey: altmış yaşında, Çukurcuma'da otuz yıllık, gösterişli, kendini beğenmiş bir antikacı. Orta boylu, dik duruşlu. KEMİKLİ, belirgin elmacık kemikli bir yüz. Saçı KOYU KAHVEYE BOYALI, fönle KABARTILMIŞ, gür ve parlak (kel DEĞİL, beyaz ya da kır DEĞİL; boyası belli). KALIN, bakımlı, koyu kahve bir BIYIK. Gülümseyince üst dişlerinin arasında bir ALTIN DİŞ parlıyor. Gözlük YOK, papyon YOK, yelek YOK. Üstünde BORDO, KADİFE bir ceket; altında krem bir gömlek, yakası açık. Ceketin cebinden ince, altın renkli bir saat ZİNCİRİ sarkıyor; zincirin ucunda saat YOK (boş). Koyu gri kumaş pantolon.",
  "altmış yaşında, orta boy · KEMİKLİ yüz · KOYU KAHVEYE BOYALI, FÖNLÜ, KABARIK saç (kel değil, beyaz değil) · KALIN koyu kahve bıyık · gülümsemede bir ALTIN DİŞ · gözlük, papyon, yelek YOK · BORDO KADİFE ceket, krem gömlek · cepten sarkan BOŞ saat zinciri · eller boş · Şükrü'ye, Sarkis'e, V1 Çaycı'ya, Ferruh'a benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Bir eli ceketinin yakasını düzeltiyor, öbürü belinde; elleri boş: kutu, saat YOK.",
  "İfade: kendinden memnun, gösterişli; ağzı hafif açık bir gülümseme, altın diş görünüyor.",
  "Şükrü Bey'e (kel, beyaz bıyıklı, papyonlu) ve Sarkis Usta'ya (kel, gözlüklü) benzemiyor; Ferruh'a (ince bıyık, bordo papyon) benzemiyor: Muammer'in saçı gür, boyalı, fönlü; papyonu ve gözlüğü yok.",
  "açık bej"),
 (6, "selim", "Selim", "selim.normal", (), "tarz_govde_erkek.jpg",
  "Selim: elli sekiz yaşında, sessiz, nazik, yorgun bir tamirci. UZUN boylu ve ZAYIF, omuzları hafif düşük. UZUN, ince bir yüz, yorgun ama nazik gözler; iki gözün altında hafif koyu halka; morluk ya da yara yok. Saçı KISA, KIVIRCIK, KIR (gri-beyaz karışık). Bıyık ve sakal yok, temiz traşlı. Üstünde ESKİ, kollarının dirsekleri incelmiş KAHVERENGİ örgü bir HIRKA, altında açık renk bir gömlek; hırkanın üstünde açık, uzun GRİ bir PARDÖSÜ. Ellerinin parmaklarında hafif yağ ve tutkal lekeleri. Koyu kahve pantolon.",
  "elli sekiz yaşında · UZUN, ZAYIF · uzun ince yüz, yorgun nazik gözler · KISA, KIVIRCIK, KIR saç · bıyıksız · eski KAHVERENGİ hırka · açık GRİ pardösü · parmaklarda hafif yağ lekesi · eller boş · Recep'e, Tahsin'e, Nihat'a benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Kollar gövdesinin yanında, bir eli pardösünün önünü tutuyor; elleri boş: alet, sandalye YOK.",
  "İfade: sessiz, nazik, biraz mahcup; dudaklar kapalı, küçük, yorgun bir gülümseme.",
  "Recep Efendi'ye (tombul, kır kıvırcık, yeşil yelek) benzemiyor; Tahsin Usta'ya (gür dalgalı beyaz saç, kalın gözlük) ve Nihat'a (kemikli, geriye taranmış saç) benzemiyor: Selim uzun, zayıf, kısa kır kıvırcık saçlı, pardösülü.",
  "gri-mavi"),
 (7, "kadir", "Kadir", "kadir.normal", (), "tarz_govde_iri_erkek.jpg",
  "Kadir: kırk beş yaşında, neşeli, konuşkan bir vapur çaycısı. Orta boylu, TOMBUL, göbekli. YUVARLAK bir yüz, KIRMIZI yanaklar. Saçı KISA, SİYAH, düz, yana taranmış. KALIN, gür, SİYAH bir BIYIK. Üstünde BEYAZ, düğmeli, kısa bir ÇAYCI CEKETİ, altında siyah pantolon. Kolları dirseğe kadar sıvanmış. Omzunda küçük beyaz bir bez.",
  "kırk beş yaşında · TOMBUL, göbekli · YUVARLAK yüz, KIRMIZI yanaklar · KISA SİYAH düz saç · KALIN SİYAH bıyık · BEYAZ çaycı ceketi, kollar sıvalı · omzunda beyaz bez · siyah pantolon · eller boş (tepsi YOK) · Recep'e, Nevzat'a, Ferruh'a benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Elleri belinde, göğsü öne çıkık; elleri boş: tepsi, bardak YOK.",
  "İfade: neşeli, sıcak; ağzı açık, içten bir gülümseme.",
  "Recep Efendi'ye (tombul ama kır kıvırcık saçlı, bıyıksız, yeşil yelekli) benzemiyor; Ferruh'a (ince bıyık, papyon) benzemiyor: Kadir siyah saçlı, kalın siyah bıyıklı, beyaz ceketli.",
  "gri-mavi"),
 (8, "nedim", "Nedim Bey", "nedim.normal", (), "tarz_govde_erkek.jpg",
  "Nedim Bey: yetmiş iki yaşında, alaycı, zarif bir saat koleksiyoncusu. UFAK TEFEK, kısa boylu, ince. OVAL bir yüz. Saçı BEMBEYAZ, KISACIK kesilmiş (kafa derisine yakın). Çenesinde bakımlı, sivri, BEYAZ bir KEÇİ SAKALI; bıyığı ince, sakalla birleşik. Gözlük YOK. Üstünde GRİ, iyi dikilmiş bir BLAZER ceket, açık mavi gömlek; boynunda bordo-lacivert desenli İPEK bir FULAR. Koyu gri pantolon. Bir elinde GÜMÜŞ başlı, siyah, ince bir BASTON.",
  "yetmiş iki yaşında · UFAK TEFEK · OVAL yüz · BEMBEYAZ, KISACIK saç (geriye taranmış ya da dalgalı DEĞİL) · BEYAZ KEÇİ SAKALI · gözlük YOK · GRİ blazer, ipek FULAR · GÜMÜŞ başlı siyah BASTON tek elde · Tahsin'e, Yusuf'a, Rüstem'e benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Bir eli gümüş başlı bastonun başında, baston yere dayalı; öbür eli gövdesinin yanında, boş.",
  "İfade: alaycı, kendinden emin; tek kaşı hafif kalkık, dudaklar kapalı, ince bir gülümseme.",
  "Tahsin Usta'ya (ince uzun, gür dalgalı beyaz saç, kalın gözlük, önlük) benzemiyor; Yusuf Efendi'ye (uzun beyaz saç, kasket, hırka) ve Rüstem Bey'e (iri, geriye taranmış beyaz saç, bıyık) benzemiyor: Nedim ufak tefek, kısacık beyaz saçlı, keçi sakallı.",
  "açık bej"),
 (9, "derya", "Derya Hanım", "derya.normal", (), "tarz_govde_kadin.jpg",
  "Derya Hanım: otuz beş yaşında, sportif, güler yüzlü bir anne. İnce, dinç. OVAL bir yüz. Saçı KISA, KUMRAL, düz; başında yün, açık gri bir BERE. Üstünde DİZE kadar inen, KIRMIZI-LACİVERT renkli, fermuarlı bir YAĞMURLUK; altında kot pantolon. Makyajsız, doğal.",
  "otuz beş yaşında · İNCE, sportif · OVAL yüz · KISA KUMRAL saç · açık gri yün BERE · kırmızı-lacivert, dize inen YAĞMURLUK · kot pantolon · eller boş · çekicilik pozu YOK · Ayla'ya, Pınar'a, Eylül'e benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Bir eli yağmurluğunun cebinde, öbürü gövdesinin yanında; elleri boş: poşet, simit YOK.",
  "İfade: güler yüzlü, biraz mahcup; dudaklar kapalı, sıcak bir gülümseme.",
  "Ayla Hanım'a, Pınar'a ve Eylül'e benzemiyor: Derya kısa kumral saçlı, bereli, yağmurluklu, sade bir anne.",
  "açık bej"),
 (10, "efe", "Efe", "efe.normal", ("efe.gulen",), "tarz_govde_erkek.jpg",
  "Efe: sekiz yaşında, meraklı, neşeli bir çocuk (çocuk yalnız masum çizilir). UFAK, ince. YUVARLAK bir yüz, iri gözler. Saçı KISA, SİYAH, biraz dağınık. Üstünde parlak SARI, kapüşonlu bir YAĞMURLUK (kapüşon arkada, başında değil); altında mavi kot pantolon, kırmızı lastik çizme.",
  "sekiz yaşında ÇOCUK · UFAK · YUVARLAK yüz, iri gözler · KISA SİYAH saç · parlak SARI yağmurluk, kapüşon arkada · kot pantolon, kırmızı lastik çizme · eller boş · masum, neşeli · Emir'e benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Kollar gövdesinin yanında, ayakta; elleri boş: simit, poşet YOK. Kadraj çocuğun boyuna göre: başı kadrajın üst kısmında, boşluk az.",
  "İfade: meraklı, neşeli; ağzı hafif açık, içten bir gülümseme.",
  "Emir'e (V8, genç adam) benzemiyor; bu bir ÇOCUK.",
  "gri-mavi"),
 (11, "gorevli", "İskele görevlisi", "gorevli.normal", (), "tarz_govde_iri_erkek.jpg",
  "İskele görevlisi: elli altı yaşında, ciddi, düzenli bir iskele memuru. İRİ yarı, geniş omuzlu. KARE, sert hatlı bir yüz. Saçı KISACIK kesilmiş, KUMRAL. GÜR, KUMRAL bir BIYIK. Üstünde LACİVERT, düğmeli bir YELEK, altında beyaz uzun kollu bir gömlek; boynunda kırmızı bir ipe asılı, gümüş bir DÜDÜK. Lacivert pantolon. Hiçbir rozet, amblem, yaka kartı, kurum adı YOK.",
  "elli altı yaşında · İRİ yarı · KARE yüz · KISACIK KUMRAL saç · GÜR KUMRAL bıyık · LACİVERT yelek, beyaz gömlek · boynunda kırmızı ipte DÜDÜK · rozet, amblem, yaka kartı, yazı YOK · eller boş (defter YOK) · Kemal'e, Rıza'ya, Tolga'ya benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Kollar gövdesinin önünde kavuşturulmuş; elleri boş: defter, kalem YOK.",
  "İfade: ciddi, sabırlı; dudaklar kapalı, nötr.",
  "Kemal Reis'e ve Rıza Reis'e (kır saçlı, sakallı balıkçılar) benzemiyor; Tolga'ya (siyah saçlı genç) benzemiyor: görevli kısacık kumral saçlı, gür kumral bıyıklı, lacivert yelekli.",
  "açık bej"),
 (12, "ismet", "İsmet Usta", "ismet.normal", (), "tarz_govde_iri_erkek.jpg",
  "İsmet Usta: altmış sekiz yaşında, ağırbaşlı, işinin ehli bir deri ustası. Orta boylu, TOMBUL. KARE, geniş bir yüz, dolgun yanaklar. Saçı SİYAHA BOYALI, parlak, GERİYE TARANMIŞ (kır ya da beyaz DEĞİL; boyası belli). Bıyık ve sakal yok. İnce çerçeveli bir okuma GÖZLÜĞÜ burnunun UCUNA kaymış, gözleri gözlüğün üstünden bakıyor. Üstünde ekose bir gömlek, kolları sıvalı; önünde koyu kahve, kalın, aşınmış bir DERİ ÖNLÜK.",
  "altmış sekiz yaşında · TOMBUL · KARE yüz · SİYAHA BOYALI, GERİYE taranmış saç (kır değil) · bıyıksız · okuma gözlüğü BURNUNUN UCUNDA · ekose gömlek, kollar sıvalı · koyu kahve DERİ ÖNLÜK · eller boş · Tahsin'e, Haldun'a, Sarkis'e benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Elleri önlüğün önünde birleşmiş; elleri boş: kayış, iğne, çanta YOK.",
  "İfade: ağırbaşlı, dikkatli; dudaklar kapalı, gözlüğün üstünden bakan sakin bir bakış.",
  "Tahsin Usta'ya (ince uzun, gür beyaz saç, mürekkepli önlük) benzemiyor; Haldun'a (kır şakaklı, gri takım) ve Sarkis Usta'ya (kel, beyaz saç) benzemiyor: İsmet tombul, siyaha boyalı geriye taranmış saçlı, deri önlüklü.",
  "gri-mavi"),
 (13, "simitci", "Simitçi", "simitci.normal", (), "tarz_govde_erkek.jpg",
  "Simitçi: yirmi yaşında, hızlı, sabırsız bir genç simitçi. İNCE ve UZUN boylu. UZUN, genç bir yüz, birkaç çil. Saçı KISA, KIVIRCIK, KIZIL. Bıyık ve sakal yok. Üstünde BEYAZ, uzun bir ÖNLÜK; altında çizgili bir tişört ve koyu pantolon. BAŞINDA, üstünde katlanmış bir bez olan yuvarlak, ahşap bir SİMİT TABLASI; tablada üst üste dizili, susamlı, halka biçimli SİMİTLER (on kadar). Tabla başın üstünde dengede, kadrajın içinde, kesilmiyor.",
  "yirmi yaşında · İNCE, UZUN · uzun genç yüz, birkaç çil · KISA KIVIRCIK KIZIL saç · bıyıksız · BEYAZ uzun önlük, çizgili tişört · BAŞINDA ahşap SİMİT TABLASI, üstünde susamlı simitler, tabla kadrajda tam · bir eli tablanın kenarında · Kenan'a, Tarkan'a, Emir'e benzemiyor",
  "Poz: TAM İKİ KOL, İKİ EL. Bir eli yukarıda, başının üstündeki tablanın kenarını tutuyor; öbür eli gövdesinin yanında, boş. Elinde simit YOK.",
  "İfade: canlı, biraz sabırsız; ağzı hafif açık, kısa bir gülümseme.",
  "Kenan'a (V3, önlüklü) benzemiyor; Tarkan'a ve Emir'e (V8) benzemiyor: simitçi kızıl kıvırcık saçlı, çilli, ince uzun bir genç.",
  "açık bej"),
]
DIGER = {"açık bej": "gri-mavi", "gri-mavi": "açık bej"}

for G, kid, ad, anahtar, yedek, govde, tarif, kontrol, poz, ifade, benz, zemin1 in KONUK:
    st = satirlar(anahtar, yedek)
    for z, ek in ((zemin1, ""), (DIGER[zemin1], "z")):
        bas = (f"# G{G}{ek} — {ad}, normal (temel)" + (" — ZEMİN DENEMESİ (" + z + ")" if ek else ""))
        zsat = (f"- zemin denemesi: G{G}z ({DIGER[zemin1]}); kesilip saç kenarı temiz olan seçilir (H4)" if not ek
                else f"- zemin denemesi: asıl G{G} ({zemin1}); bu dosya yalnız zemin rengiyle ayrılır (H4)")
        yaz(f"G{G}{ek}", f"""
{bas}

- tür: figür · anahtar: `{anahtar}`
- önce hazır olmalı: yok
{zsat}

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../referanslar/{govde}` — YALNIZ tarz, ölçek, kadraj (başı silik)
2. `../referanslar/tarz_ornek_erkek.jpg` — YALNIZ çizim tarzı örneği (kişi, kıyafet, poz alınmaz)

## Satırlar

`arac_satir_resim.js` (27 Kasım 2026, V5 dört kapı yolu: 0 vapur dogru, 2 iskele zayif, 0 usta kadir, 3 cozmez5 nedim). Codex bu bölümü istem metnine katmaz.

{st}

## Kontrol

{kontrol} · zemin {z}

## İstem

```text
{TARZ}

Referans görsel YALNIZ çizim tarzı, renk, ölçek ve kadraj içindir. Başı bilerek silindi: yüzü sıfırdan, aşağıdaki tarife göre çiz; referanstaki kişinin bedenini, kıyafetini ve POZUNU alma. Bu yepyeni, kimseye benzemeyen bir kişi.

{tarif} {benz}

{poz}

Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay bakıyor; yukarı, aşağı ya da kameraya değil. Profil değil: uzaktaki göz de açıkça görünüyor.

{ifade}

Saçın dış çizgisi toplu ve net: arka plana taşan ince tek teller, havada kıvrılan uçlar yok.

Boya dokusu yüzde, saçta ve ışıkta; kumaş pürüzsüz, yumuşak geçişli.

Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince bir boşluk. Arka plan: düz, tek renk {z}; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş tek renk gibi); hiçbir nesne yok.

Çıplaklık yok.

{SON_REF}

{YAZI}

Görselin oranı TAM 4:5, dikey (1122×1402).
```
""")

# ---------------- Mekânlar ----------------
MEKAN_SON = f"""İnsan yok; kadraj boş bir sahne gibi, figürler sonradan önüne konacak (ortası açık).

{YAZI}

Görselin oranı TAM 3:4, dikey (1086×1448)."""

yaz("G14", f"""
# G14 — Büro, gündüz (Vaka 5'in kendi bürosu)

- tür: arka plan · anahtar: `A72`
- önce hazır olmalı: yok
- 27 Kasım 2026, Oğuz Bey: V5'e kendi bürosu (SATIR-43; ortak A6 yerine). Giriş ve konuşma.
- aynı yer, farklı açı (ISTEM-46, SEZON-21): A6 kapıdan pencereye düz; V7 A58 pencerenin yanından çapraz; V8 A60 kapı köşesinden çapraz (pencere sağda yarım). Bu resim pencerenin ÖNÜNDEN, odanın içinden KAPIYA doğru bakar değil — pencereyi SOLDA tam gösterir: kamera sağ duvarın ortasında, pencere kadrajın SOL yarısında tam; pencereden Karaköy iskelesi ve bir vapur (diyalog: "Cengo pencerede iskeleyi seyrediyor", "pencereyi açıyor; iskelenin rüzgârı").
- büro kapısı sabiti (KAR-25): kapı bu açıda kadraj dışında.
- V7 dersi: masada cam kâse/tabla, gazete YOK. Kadife kutu bu resimde YOK (Muammer getirir; masaya figürle gelir).

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../referanslar/buro_gunduz.jpg` — YALNIZ yerin kendisi (dökük sıvalı krem duvar, iki eski ahşap masa, gri dosya dolabı, askılık, radyatör, tahta döşeme); açısını alma
2. `../referanslar/tarz_mekan_ic.jpg` — yalnız boya dokusu ve sıcak renk; KOMPOZİSYONUNU ALMA

## Kontrol

büro tanınıyor (dökük krem sıva, iki eski ahşap masa, gri dosya dolabı, askılık, tahta döşeme) · açı A6, A58, A60'tan FARKLI: kemerli pencere SOL yarıda TAM, kapalı · pencereden Karaköy iskelesi ve yanaşmış bir vapur, martılar · öndeki masada lamba, yazısız dosyalar; kadife kutu YOK · cam kâse, tabla, gazete YOK · sabah ışığı · yazı yok · ortası açık

## İstem

```text
{TARZ}

Birinci referans yalnız bu büronun kendisidir (duvar, masalar, dolap, döşeme); onun açısını ve kompozisyonunu ALMA. Referans görselin KOMPOZİSYONUNU ALMA; yalnız boya dokusu ve renk.

Mekân: İstanbul Karaköy, eski bir hanın üçüncü katında küçük, yoksul ama karakterli bir dedektif bürosu, sabah. Sıvası yer yer dökülmüş krem duvarlar; eski, cilası aşınmış geniş tahta döşeme. İki eski ahşap masa ve ahşap sandalyeler. Öndeki masada (Peri'nin masası) pirinç bir masa lambası ve birkaç kapalı, düz kapaklı, YAZISIZ karton dosya. Arkadaki masa dağınık: birkaç kitap, bir kupa. Arka duvarda gri, metal, eski bir dosya dolabı ve bir ayaklı askılık. Masaların üstünde YALNIZ sayılanlar var: cam kâse, tabla, gazete, kutu YOK. Hiçbir tabela, yazı, takvim, afiş ya da logo yok.

Pencere: büyük, KEMERLİ, kapalı bir pencere kadrajın SOL yarısında TAM görünüyor; altında eski bir döküm radyatör. Dışarıda aşağıda Karaköy iskelesi: ahşap iskele, yanaşmış beyaz-sarı eski bir şehir hatları VAPURU (adı, yazısı, logosu YOK), uçan birkaç martı, ötede denizin üstünde sabah ışığı.

Kompozisyon: kamera odanın sağ duvarının önünde, göz hizasında durur ve karşı duvardaki pencereye doğru hafif çapraz bakar. Sabah ışığı soldan, pencereden giriyor; tahta döşemede ve masalarda uzun, yumuşak gölgeler. Ön planda sağda öndeki masanın köşesi ve lamba. Ortası açık bir zemin.

{MEKAN_SON}
```
""")

yaz("G15", f"""
# G15 — Büro, akşam (G14'ün aynı açısı)

- tür: arka plan · anahtar: `A73`
- önce hazır olmalı: G14 (onaylı)
- aynı yer, AYNI açı: G14'ün akşam hâli (kapanış: "Akşam. Büro."; Gizem pencerenin önünde iskeleye bakıyor).
- V7 dersi: cam kâse, tabla, gazete YOK. Masada simit yok (simit figür/karede gelir — K90).

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `onayli/G14.png` — AYNI oda, AYNI açı: duvarlar, masalar, eşyalar, pencere bunun gibi; yalnız saat akşam
2. `../referanslar/tarz_mekan_ic.jpg` — yalnız boya dokusu ve sıcak renk; KOMPOZİSYONUNU ALMA

## Kontrol

G14'le AYNI açı ve AYNI eşyalar · AKŞAM: pencerede alacakaranlık, koyu mor-lacivert gök, iskelede ve vapurda yanan sarı ışıklar · yalnız pirinç masa lambası yanıyor · yeni eşya YOK · yazı yok · ortası açık

## İstem

```text
{TARZ}

Birinci referans bu odanın KENDİSİDİR: açı, eşyalar ve yerleri birebir aynı kalsın; yalnız saat akşam. İkinci referanstan yalnız boya dokusu ve renk; onun KOMPOZİSYONUNU ALMA.

Mekân: birinci referanstaki büronun AYNISI, AYNI açıdan, ama akşam. Bütün eşyalar yerli yerinde: iki masa, dosya dolabı, askılık, radyatör, kemerli pencere. Yeni eşya yok.

Işık: GERÇEKTEN akşam; gökyüzü alacakaranlıkta koyu mor-lacivert, sahnenin çoğu yarı karanlıkta; ışık yalnız sayılan lambalardan gelir, sıcak sarı lekeler ve uzun gölgeler bırakır. Gündüz gibi aydınlık DEĞİL. Yanan tek lamba öndeki masadaki pirinç masa lambası; sıcak sarı bir ışık havuzu masayı ve önündeki döşemeyi aydınlatıyor. Kemerli pencereden aşağıda Karaköy iskelesinin ve yanaşmış vapurun küçük, sarı ışıkları, karanlık denizde yansımaları.

Kompozisyon: birinci referanstaki gibi — pencere kadrajın SOL yarısında tam, kamera sağ duvarın önünde. Ortası açık bir zemin.

{MEKAN_SON}
```
""")

MEKANLAR = [
 (16, "A36", "Vapurun alt salonu", "vapur_cayci, yüzleşmeler (perşembe aynı vapur, aynı salon), kovalamaca başı",
  "Mekân: İstanbul'un eski bir şehir hatları vapurunun kapalı ALT SALONU, öğleden sonra. Sıra sıra, arkalıklı, cilalı AHŞAP koltuklar; ortada tavana uzanan kalın, beyaz boyalı bir DİREK. Bir köşede küçük bir ÇAY TEZGÂHI: semaver, sıra sıra ince belli boş çay bardakları, tabaklar (çay ocağında kimse yok). İki yanda geniş, yuvarlak köşeli pencereler; dışarıda mavi-gri deniz ve uzakta İstanbul'un kıyısı. Salonun dibinde üst güverteye çıkan dar demir bir MERDİVEN. Koltukların üstünde ya da yerde ÇANTA YOK. Hiçbir tabela, yazı, numara, logo, can yeleği yazısı YOK.",
  "Kompozisyon: kamera salonun bir ucunda, göz hizasında; koltuk sıraları kadrajın iki yanında derinliğe uzanıyor, direk orta planda hafif sağda, çay tezgâhı solda, merdiven dipte. Ortası (koridor) açık; ışık pencerelerden, yumuşak, sıcak.",
  "AHŞAP koltuk sıraları · ortada DİREK · köşede ÇAY TEZGÂHI (semaver, boş ince belli bardaklar), kimse yok · pencerelerde deniz · dipte üst güverteye MERDİVEN · çanta YOK · yazı, numara, logo YOK · ortası açık"),
 (17, "A37", "Vapurun üst güvertesi", "ust_guverte, kovalamaca 2",
  "Mekân: eski bir şehir hatları vapurunun açık ÜST GÜVERTESİ, öğleden sonra, rüzgârlı. Beyaz boyalı, yer yer paslı demir KORKULUK; korkuluğun dibinde uzun ahşap bir bank. Güverte tahtaları ıslak, parlıyor. Havada birkaç MARTI kanat çırpıyor. Ötede dalgalı, köpüklü deniz ve uzakta İstanbul kıyısı (Kız Kulesi gibi tanınmış bir yapı ÖN PLANDA DEĞİL). Bir köşede bacanın alt kısmı. İnsan yok, yerde simit yok. Hiçbir tabela, yazı, logo YOK.",
  "Kompozisyon: kamera güvertenin ortasında, göz hizasında, korkuluğa ve denize doğru çapraz bakar; korkuluk kadrajın sağından sola doğru uzanıyor, gökyüzü üst üçte birde. Ortası açık; rüzgârlı, parlak, serin ışık ama sıcak tonlu.",
  "açık ÜST GÜVERTE · beyaz, yer yer paslı KORKULUK · ıslak güverte tahtaları · havada MARTILAR · dalgalı deniz, uzakta kıyı · baca dibi · insan, simit YOK · yazı YOK · ortası açık"),
 (18, "A38", "Kadıköy iskelesi", "kadikoy_iskele",
  "Mekân: Kadıköy vapur İSKELESİNİN bekleme alanı, öğleden sonra. Eski, taş ve ahşap bir iskele binasının içinden açık tarafa bakış: metal TURNİKELER (ekran, yazı, logo YOK), küçük, camlı, ahşap bir GÖREVLİ KULÜBESİ (içi boş), duvar dibinde ahşap bir BANK; açık taraftan denize ve iskeleye YANAŞAN eski, beyaz-sarı bir vapur görünüyor. Yerde taş döşeme. İnsan yok. Hiçbir tabela, yazı, saat, numara, logo YOK.",
  "Kompozisyon: kamera bekleme alanının içinde, göz hizasında; turnikeler orta planda, kulübe solda, bank sağda, açık kemerin ardında yanaşan vapur ve deniz. Ortası açık; gün ışığı açık taraftan, sıcak.",
  "iskele bekleme alanı · metal TURNİKELER (ekransız) · camlı ahşap GÖREVLİ KULÜBESİ, boş · ahşap BANK · açık taraftan YANAŞAN vapur · tabela, saat, yazı YOK · ortası açık"),
 (19, "A39", "Nedim Bey'in koleksiyon odası (Moda)", "nedim",
  "Mekân: Moda'da eski bir apartman dairesinde zengin bir saat koleksiyoncusunun ODASI, öğlene doğru. Duvarlar baştan aşağı SAATLERLE kaplı: irili ufaklı ahşap duvar saatleri, sarkaçlı saatler, guguklu bir saat; köşede uzun, ayaklı bir dede saati. Camlı, ahşap bir VİTRİNDE kadife üstünde dizili açık ve kapalı CEP SAATLERİ. Ortada koyu ahşap bir çalışma masası, üstünde büyüteç ve küçük aletler. Kalın bir halı, kadife perdeli bir pencere. Saatlerin kadranlarında RAKAM ve yazı OKUNMUYOR (yalnız çizgi ve yelkovan). İnsan yok.",
  "Kompozisyon: kamera kapının yanından odanın içine bakar; saat duvarı arkada ve sağda, vitrin solda, masa orta planda. Ortası açık; pencereden yumuşak, sıcak gün ışığı, saatlerin camında parıltılar.",
  "duvarlar SAATLERLE kaplı (duvar saati, sarkaçlı, guguklu, dede saati) · camlı VİTRİNDE CEP SAATLERİ · çalışma masası, büyüteç · kadranlarda RAKAM, yazı OKUNMUYOR · insan YOK · ortası açık"),
 (20, "A40", "Kadıköy çarşısında deri atölyesi", "deri_ustasi",
  "Mekân: Kadıköy çarşısında, balıkçıların arasındaki dar bir sokakta küçük, eski bir DERİ ATÖLYESİ, öğleden sonra. Dar, derin bir dükkân: ön tarafta uzun, çizik, ahşap bir TEZGÂH; tezgâhta YARIM kalmış birkaç kahverengi deri ÇANTA, rulo deriler, kesik KAYIŞLAR, bıçak, iğne, iplik makaraları. Duvarda çivilere asılı kayışlar ve deri parçaları; köşede eski, ayaklı bir dikiş makinesi. Açık kapıdan dışarıda çarşının dar sokağı ve bir balık tezgâhının ucu görünüyor. Hiçbir tabela, yazı, logo, damga YAZISI YOK. İnsan yok.",
  "Kompozisyon: kamera dükkânın içinde, kapının yanında, göz hizasında; tezgâh sağdan derinliğe uzanıyor, duvar solda, dipte dikiş makinesi. Ortası açık; ışık açık kapıdan, sıcak, deri kokulu bir loşluk.",
  "dar DERİ ATÖLYESİ · ahşap TEZGÂHTA YARIM deri ÇANTALAR, rulo deri, KAYIŞLAR, aletler · duvarda asılı kayışlar · ayaklı dikiş makinesi · kapıdan çarşı sokağı · tabela, yazı YOK · insan YOK · ortası açık"),
 (21, "A41", "Muammer'in antika dükkânı (Çukurcuma)", "dukkan_cukurcuma",
  "Mekân: Çukurcuma'da eski, tozlu bir ANTİKA DÜKKÂNI, öğleden sonra. Camları tozlu, ahşap VİTRİNLER; içlerinde porselen biblolar, gümüş şamdanlar, eski fotoğraf çerçeveleri (fotoğrafların içi boş ya da bulanık). Bir köşede borulu, pirinç bir GRAMOFON. Arkada uzun, cilalı, ahşap bir TEZGÂH; tezgâhın ucunda eski, döküm, süslü bir para KASASI. Tavanda eski bir avize, yerde eski halılar, duvara dayalı bir iki eski sandalye. Tezgâhta ÇANTA YOK (çanta figürle gelir). Hiçbir tabela, etiket, fiyat kartı, yazı YOK. İnsan yok.",
  "Kompozisyon: kamera dükkânın girişinde, göz hizasında; vitrinler iki yanda, gramofon solda ön planda, tezgâh ve kasa dipte. Ortası açık; tozlu camlardan süzülen sıcak, altın renkli ışık, havada toz zerreleri.",
  "tozlu ahşap VİTRİNLER (biblo, şamdan, boş çerçeve) · pirinç GRAMOFON · uzun ahşap TEZGÂH · döküm, süslü KASA · tezgâhta çanta YOK · etiket, fiyat, yazı YOK · insan YOK · ortası açık"),
 (22, "A42", "Karaköy iskelesi (vapur yanaşmış)", "vapur_cayci, ust_guverte (biniş), kovalamaca, karar sorusu (Kapak V5)",
  "Mekân: İstanbul KARAKÖY'de eski bir vapur iskelesi, öğleden sonra. Ön planda yıpranmış, aralıklı AHŞAP İSKELE TAHTALARI (tahtaların arasında dar boşluklar, aşağıda su). İskeleye YANAŞMIŞ, beyaz-sarı, eski bir şehir hatları VAPURU; borda ile iskele arasında kalın HALATLAR, babalara sarılı. Havada ve korkuluklarda MARTILAR. Arkada Karaköy'ün eski binaları ve Galata tarafının silueti. Hiçbir tabela, yazı, vapur adı, logo YOK. İnsan yok.",
  "Kompozisyon: kamera iskelenin üstünde, göz hizasında; ahşap tahtalar ön planda derinliğe uzanıyor, vapur sağda kadrajın yarısını kaplıyor, halatlar ön planda, martılar gökte. Ortası açık; sıcak öğleden sonra ışığı, suda parıltılar. (Bu kurgu — uzaklaşan iskele + ufuk — vakada bir kez; A37 ve A38 başka açıdan.)",
  "Karaköy İSKELESİ · ön planda ARALIKLI AHŞAP tahtalar · YANAŞMIŞ beyaz-sarı eski VAPUR · kalın HALATLAR, babalar · MARTILAR · arkada Karaköy binaları · vapur adı, tabela, logo YOK · insan YOK · ortası açık"),
]
for G, kod, ad, nerede, mekan, komp, kontrol in MEKANLAR:
    yaz(f"G{G}", f"""
# G{G} — {ad}

- tür: arka plan · anahtar: `{kod}`
- önce hazır olmalı: yok
- nerede: {nerede} (diyalog "Satır → görsel" tablosu).
- SEZON-20: uzaklaşan koridor + ufuk kurgusu vakada en çok bir kez (A42); öbür mekânlar başka açıdan.

## Referanslar (bu sırayla ekle; istemdeki "birinci referans" = 1.)

1. `../referanslar/tarz_mekan_ic.jpg` — yalnız boya dokusu ve sıcak renk; KOMPOZİSYONUNU ALMA

## Kontrol

{kontrol}

## İstem

```text
{TARZ}

Referans görselin KOMPOZİSYONUNU ALMA; yalnız boya dokusu ve renk.

{mekan}

{komp}

{MEKAN_SON}
```
""")

print("yazıldı:", len(os.listdir(PR)), "istem")
