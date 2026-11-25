# Vaka 8 — resim listesi (Parti 1: temeller)

25 Kasım 2026 akşam, Oğuz Bey'in bilgisayarında. Hikâye: `sablon/vakalar/vaka8_diyalog.md` (20 Kasım'da dondu; 25 Kasım'da
bugünkü araçlarla yeniden denetlendi — doğrulayıcı PASS, V8'de uyarı yok). Vaka 8'in resimleri baştan yapılır (V7'deki gibi).

**Sıra (V7'deki gibi):** Parti 1 = temeller (Peri/Cengo kıyafet kartları, yeni konukların temel figürleri iki zeminle, mekânlar).
Oğuz Bey bunları onaylayınca Parti 2 (Peri/Cengo temel figürleri karttan, karede görünen konukların kartları), sonra Parti 3
(ifadeler, kareler, kararlar, detaylar, kart afişi). Tam liste yazılınca `sablon/vakalar/vaka8_gorsel.md`'ye aynı numaralarla geçer.

**Görünüş kararları (25 Kas):** Tarkan'ın sarı saçı V7'deki Kaan'a benzedi (benzerlik aracı) → **siyah, makineyle kısacık
kazınmış saç, kömür grisi takım (yeleksiz)**, sol kaşta ince iz (Oğuz Bey seçti). Form, diyalog (K166), `adaylar.tsv` değişti;
benzerlik aracı V7+V8 birlikte GEÇTİ. V7 konukları havuza taşındı (gömmede atlanmıştı). Sonra **bütün vakalarla (V1–V7)**
denetlendi; üç konuk daha değişti: **Nevzat** (Kadir V5'e çok benziyordu) → zayıf, kemikli yüz, gür kabarık kumral saç,
bıyıksız, açık mavi gömlek (diyalog satır 118 anlatısı da); **Emir** (Hilmi'ye) → yuvarlak çocuksu yüz; **Yusuf** (Muammer'e)
→ yeşil hırka. Son durum: V8'in 8 konuğu havuzdaki 17 karaktere, V1–V5'in bütün konuklarına ve birbirine benzemiyor.

**Peri'nin mantosu:** Vaka 1'deki manto birebir — kruvaze, kuşakla bağlanan, geniş açık yaka, kapaksız cep; altında V yakalı
krem saten bluz; **kuşak çözük, uçları sarkık**. Referans `kaynak/yeni_gorsel/sprite/peri_manto_normal.webp` (dekoltesi
kapatılmış kopya — ISTEM-16). V7'nin G1 hatası (düğmeli, kapaklı cep) tekrarlanmaz.

**Ayakkabı ve çorap (25 Kas, Oğuz Bey):** Peri her kıyafette **kırmızı stiletto** (Vaka 1 gibi — KAR-23), **ÇORAP YOK** (ISTEM-20).

**Başka vakanın resmi kullanılmaz (SATIR-43, 23 Kas):** Gizem'e V8'in kendi kıyafeti `kazak8` (koyu yeşil balıkçı yaka kalın
kazak, siyah pantolon — Oğuz Bey; V6'nın `triko` resimleri artık V8'de yok); Cengo'nun `ceket8`'i Vaka 1'in ceketiyle aynı giysi
ama resimleri V8 için yeniden üretilir (kart Vaka 1 ceketini referans alır).

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G1 | kıyafet kartı | Peri, kırmızı manto, kuşak çözük, kırmızı stiletto, çorap yok (`manto8`; `manto8_son` bu karttan: önlüksüz, manto omzunda, saçta reçel) | — | — |
| G2 | kıyafet kartı | Peri, aşçı yardımcısı kılığı (`kilik`: manto yok, krem saten bluz + kalem etek üstünde beyaz şef önlüğü, beyaz kep, iri siyah gözlük; `onluk8` ve `recel` bu karttan) | — | — |
| G3 | kıyafet kartı | Cengo, şoför üniforması (`sofor`: lacivert iki sıra düğmeli ceket, kasket, beyaz eldiven, bir beden dar; `sofor_dugmesiz` bu karttan) | — | — |
| G4 | kıyafet kartı | Cengo, kendi ceketi (`ceket8`: Vaka 1 temel setindeki ceket, referans V1 resmi) | — | — |
| G5 | kıyafet kartı | Gizem, koyu yeşil balıkçı yaka kalın kazak, siyah pantolon (`kazak8`) | — | — |
| G6 / G6z | figür | Bahar Hanım, şaşırmış (temel; `normal` satırda yok) — açık bej / gri-mavi | `bahar.sasirmis` | tur |
| G7 / G7z | figür | Tarkan, normal (temel) — gri-mavi / açık bej | `tarkan.normal` | tur |
| G8 / G8z | figür | Nevzat Bey, normal (temel) — açık bej / gri-mavi | `nevzat.normal` | tur |
| G9 / G9z | figür | Fikret Usta, huysuz (temel; `normal` satırda yok) — gri-mavi / açık bej | `fikret.huysuz` | tur |
| G10 / G10z | figür | Nihat Kora, normal (temel) — açık bej / gri-mavi | `nihat.normal` | tur |
| G11 / G11z | figür | Emir, normal (temel) — gri-mavi / açık bej | `emir.normal` | tur |
| G12 / G12z | figür | Pınar, normal (temel) — açık bej / gri-mavi | `pinar.normal` | tur |
| G13 / G13z | figür | Yusuf Efendi, normal (temel) — gri-mavi / açık bej | `yusuf.normal` | tur |
| G14 | arka plan | Büro, gündüz (V8 için yeni açı; masada kapalı kadife kutu) | `A60` | — |
| G15 | arka plan | Büro, gece (G14'ün aynı açısı) | `A71` | G14 |
| G16 | arka plan | Kurtuluş: atölyenin üstünde dar muhasebe odası, klasörler, hesap makinesi | `A61` | — |
| G17 | arka plan | Maslak: televizyon stüdyosu, ışıklar altında mutfak dekoru, kameralar | `A62` | — |
| G18 | arka plan | Samatya: küçük lokanta, duvarda eski fotoğraflar, tezgâhın arkasında eski kasa | `A63` | — |
| G19 | arka plan | Mecidiyeköy: dar kargo dükkânı, duvar boyu numaralı posta kutuları (numara dışında yazı yok) | `A64` | — |
| G20 | arka plan | Karaköy: otopark, girişte görevli kulübesi (tabela/marka yok) | `A65` | — |
| G21 | arka plan | Stüdyo kulisi: ampullü ayna, masada kartsız buket | `A66` | — |
| G22 | arka plan | Kurtuluş: mutfak atölyesi, tezgâhlarda kavanoz kuleleri (etiket okunmaz), köşede soyunma paravanı | `A67` | — |
| G23 | arka plan | Atölyenin önü, gece, siyah araba | `A68` | — |
| G24 | arka plan | Sahil yolu, gece, Boğaz ışıkları | `A69` | — |
| G25 | arka plan | Yeniköy: beyaz yalı, uzun ahşap iskele, ucunda tekne, balıkçı ağı (gece) | `A70` | — |

**İstemlerden önce (adım 8):** kıyafet hâli tablosu (SATIR-7), görselsiz tur kapı yollarında → `satir_resim.md`
(`arac_satir_resim.js` bayrakları kapalı — SATIR-10), istem kalıbı `uretim/ISTEM_KALIPLARI.md`, istem denetimi
`uretim/istem_kontrol.sh` (ISTEM-52). Hatırlatma listesi `sablon/vakalar/vaka8_hatirlatma.md` (97 madde).

## Parti 2 (26 Kasım 2026): temel figürler karttan, konukların kıyafet kartları

Zeminler `zemin.tsv` (kartlardan `arac_zemin.py`). Konuk kartlarının belden aşağısı Oğuz Bey'in onayına (V7'deki gibi).

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G26 | figür | Peri, kırmızı manto, normal (temel; açık bej) | `peri.manto8.normal` | G1 |
| G27 | figür | Peri, aşçı yardımcısı kılığı, normal (temel; gri-mavi — beyaz önlük açık bej'e karışır) | `peri.kilik.normal` | G2 |
| G28 | figür | Cengo, şoför üniforması, normal (temel) | `cengo.sofor.normal` | G3 |
| G29 | figür | Cengo, kendi ceketi, normal (temel) | `cengo.ceket8.normal` | G4 |
| G30 | figür | Gizem, koyu yeşil kazak (bu kıyafetin temeli) | `gizem.kazak8` | G5 |
| G31 | kıyafet kartı | Bahar Hanım (tam boy) | — | G6 |
| G32 | kıyafet kartı | Tarkan (tam boy) | — | G7 |
| G33 | kıyafet kartı | Nevzat Bey (tam boy) | — | G8 |
| G34 | kıyafet kartı | Fikret Usta (tam boy) | — | G9 |
| G35 | kıyafet kartı | Nihat Kora (tam boy) | — | G10 |
| G36 | kıyafet kartı | Emir (tam boy) | — | G11 |
| G37 | kıyafet kartı | Pınar (tam boy) | — | G12 |
| G38 | kıyafet kartı | Yusuf Efendi (tam boy) | — | G13 |

## Parti 3 (26 Kasım 2026): 3a ifadeler G39–G81 (satırların istediği — SATIR-35), 3b detaylar G82–G87 ve kareler G88–G134

Üreticiler `uret_istem_parti3a.py`, `uret_istem_parti3b.py`. Peri'nin baş kırpıkları `referanslar/peri_manto8_bas.png`, `peri_kilik_bas.png`; şeritler `serit_bahar_nevzat_fikret_tarkan.jpg`, `serit_nihat_tarkan.jpg`. Kart afişi ve masa kartı gömmede.

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G39 | figür | Peri, manto8, kaşı kalkık | `peri.manto8.kas` | — |
| G40 | figür | Peri, manto8, meraklı, soruyor | `peri.manto8.merakli` | — |
| G41 | figür | Peri, manto8, sevinçli (biri onu tanıdı) | `peri.manto8.sevincli` | — |
| G42 | figür | Peri, manto8, sinirli | `peri.manto8.sinirli` | — |
| G43 | figür | Peri, kilik, kaşı kalkık | `peri.kilik.kas` | — |
| G44 | figür | Peri, kilik, meraklı, soruyor | `peri.kilik.merakli` | — |
| G45 | figür | Peri, kilik, mahcup (kamera önünde ağlamış) | `peri.kilik.utanmis` | — |
| G46 | figür | Peri, kilik, yumuşak | `peri.kilik.yumusak` | — |
| G47 | figür | Peri, onluk8, önlükle, kep ve gözlük yok (bu hâlin temeli) | `peri.onluk8.normal` | — |
| G48 | figür | Peri, onluk8, kaşı kalkık | `peri.onluk8.kas` | — |
| G49 | figür | Peri, onluk8, sinirli (adını duydu) | `peri.onluk8.sinirli` | — |
| G50 | figür | Peri, onluk8, mahcup (zayıf kanıt) | `peri.onluk8.utanmis` | — |
| G51 | figür | Peri, manto8_son, manto omzunda, saçta reçel (bu hâlin temeli) | `peri.manto8_son.normal` | — |
| G52 | figür | Peri, manto8_son, kaşı kalkık | `peri.manto8_son.kas` | — |
| G53 | figür | Peri, manto8_son, sinirli | `peri.manto8_son.sinirli` | — |
| G54 | figür | Peri, manto8_son, mahcup | `peri.manto8_son.utanmis` | — |
| G55 | figür | Peri, manto8_son, yumuşak | `peri.manto8_son.yumusak` | — |
| G56 | figür | Cengo, sofor, gülen | `cengo.sofor.gulen` | — |
| G57 | figür | Cengo, sofor, kaşı kalkık | `cengo.sofor.kas` | — |
| G58 | figür | Cengo, sofor, yumuşak | `cengo.sofor.yumusak` | — |
| G59 | figür | Cengo, sofor_dugmesiz, kaşı kalkık (düğmesi kopuk) | `cengo.sofor_dugmesiz.kas` | — |
| G60 | figür | Cengo, sofor_dugmesiz, yumuşak (düğmesi kopuk) | `cengo.sofor_dugmesiz.yumusak` | — |
| G61 | figür | Cengo, ceket8, gülen | `cengo.ceket8.gulen` | — |
| G62 | figür | Cengo, ceket8, kaşı kalkık | `cengo.ceket8.kas` | — |
| G63 | figür | Cengo, ceket8, bıkkın, homurdanan | `cengo.ceket8.sinirli` | — |
| G64 | figür | Cengo, ceket8, yumuşak | `cengo.ceket8.yumusak` | — |
| G65 | figür | Bahar Hanım, endişeli | `bahar.endiseli` | — |
| G66 | figür | Bahar Hanım, gülen (televizyon sıcaklığı) | `bahar.gulen` | — |
| G67 | figür | Bahar Hanım, normal (anlatıyor) | `bahar.normal` | — |
| G68 | figür | Bahar Hanım, sert | `bahar.sert` | — |
| G69 | figür | Tarkan, gülümseyen (kibar, kaygan) | `tarkan.gulen` | — |
| G70 | figür | Tarkan, itiraf (yakalanmış, pişman) | `tarkan.itiraf` | — |
| G71 | figür | Tarkan, panik | `tarkan.panik` | — |
| G72 | figür | Nevzat Bey, gergin | `nevzat.gergin` | — |
| G73 | figür | Nevzat Bey, utangaç, kızarmış | `nevzat.utangac` | — |
| G74 | figür | Fikret Usta, güler | `fikret.guler` | — |
| G75 | figür | Fikret Usta, hüzünlü | `fikret.huzunlu` | — |
| G76 | figür | Fikret Usta, öfkeli (bağırıyor) | `fikret.ofkeli` | — |
| G77 | figür | Emir, gülen (diş teli) | `emir.gulen` | — |
| G78 | figür | Emir, şaşırmış | `emir.sasirmis` | — |
| G79 | figür | Pınar, defterine bakıyor | `pinar.defter` | — |
| G80 | figür | Pınar, telaşlı | `pinar.telasli` | — |
| G81 | figür | Yusuf Efendi, gülen | `yusuf.gulen` | — |
| G82 | detay | Detay: ekranda alt alta üç ödeme satırı | `D28` | — |
| G83 | detay | Detay: masada bir yığın taksi fişi | `D29` | — |
| G84 | detay | Detay: Fikret'in elinde eski kasadan çıkmış açık dosya, noter mühürlü kâğıt | `D30` | — |
| G85 | detay | Detay: tezgâhta açık kalın defter | `D31` | — |
| G86 | detay | Detay: deftere iliştirilmiş noter kâğıdı, Peri'nin eli | `D32` | — |
| G87 | detay | Detay: Tarkan'ın elinde titreyen telefon, ekranda tek harf 'N' | `D33` | — |
| G88 | ara kare | Giriş açılışı: Peri masada, kırmızı manto, kuşak çözük; masada kadife kutu (yalnız) | `K155` | — |
| G89 | ara kare | Giriş: Bahar eşikte, elinde reçel kavanozu (yalnız) | `K156` | — |
| G90 | ara kare | Giriş: Peri ile Cengo birbirine bakıyor; Bahar konuşuyor | `K157` | — |
| G91 | ara kare | Konuşma (çekicilik): Peri paravandan kılıkla çıkıyor; Cengo'nun simidi düşüyor; Gizem | `K158` | — |
| G92 | ara kare | Konuşma: Cengo şoför kasketiyle aynada kendine selam veriyor | `K159` | — |
| G93 | ara kare | Stüdyo: kılıktaki Peri kameranın önünde soğan doğruyor, ağlıyor | `K160` | — |
| G94 | ara kare | Posta: Cengo kolileri rafa diziyor, Yusuf izliyor | `K161` | — |
| G95 | ara kare | Otopark: Cengo kartını Emir'in avucuna koyuyor | `K162` | — |
| G96 | ara kare | Kulis: Peri buketten bir çiçek kokluyor, elinde telefon | `K163` | — |
| G97 | ara kare | Ters köşe: akşam atölye, kavanoz kuleleri, köşede paravan (kişisiz) | `K164` | — |
| G98 | ara kare | Ters köşe: kapıda kasketli Cengo bir adama kapıyı açıyor; paravanın kenarında önlüğün ucu | `K165` | — |
| G99 | ara kare | Ters köşe: paravan aralığından bakış — Tarkan | `K166` | — |
| G100 | ara kare | Ters köşe: paravanın arkasında donmuş Peri (kılık) | `K167` | — |
| G101 | ara kare | Ters köşe: Cengo paravanın yanında eğilmiş, Peri'yle fısıldaşıyor | `K168` | — |
| G102 | ara kare | Yüzleşme açılışı: Bahar tezgâhta, Nevzat kenarda, Fikret kapıda, Tarkan telefonla; Peri ve Cengo | `K169` | — |
| G103 | ara kare | Yüzleşme kaçışı: Tarkan kapıya koşuyor | `K170` | — |
| G104 | ara kare | Yüzleşme (Nevzat): Bahar Nevzat'a bakıyor, Nevzat kızarmış | `K171` | — |
| G105 | ara kare | Yüzleşme (Fikret): Bahar kavanozu tezgâha bırakmış, Fikret'e bakıyor | `K172` | — |
| G106 | ara kare | Kovalamaca 1: arabanın içi, arka koltukta Tarkan, direksiyonda kasketli Cengo | `K173` | — |
| G107 | ara kare | Kovalamaca 1: Peri kapanmakta olan bagaja, kasaların arasına atlıyor; bacakları dışarıda | `K174` | — |
| G108 | ara kare | Kovalamaca 2: sahil yolu, arabanın içi — Tarkan telefonda, Cengo direksiyonda | `K175` | — |
| G109 | ara kare | Kovalamaca 2: bagajın içi — Peri kasaların arasında, baştan aşağı vişne reçeli | `K176` | — |
| G110 | ara kare | Kovalamaca 3: Yeniköy, yalı ve iskele, gece (kişisiz) | `K177` | — |
| G111 | ara kare | Kovalamaca 3: Tarkan iskeleye koşuyor; yalıdan valizli Nihat çıkıyor | `K178` | — |
| G112 | ara kare | Kovalamaca 3: reçelli Peri bagaj kapağında ayakta, Nihat'ı gösteriyor; Nihat donmuş | `K179` | — |
| G113 | ara kare | Kovalamaca 4: reçelde kayan Nihat ve Tarkan balıkçı ağına düşüyor | `K180` | — |
| G114 | ara kare | Kovalamaca 4: Cengo ağın ipini iskele babasına bağlıyor; eldiveni reçelli, düğmesi kopuk | `K181` | — |
| G115 | ara kare | Kovalamaca 4: reçelli Peri Cengo'nun koluna tutunmuş, gülüyor | `K182` | — |
| G116 | ara kare | Kovalamaca sonu: hortumla yüzünü yıkayan Peri; Cengo mantoyu omzuna koyuyor | `K183` | — |
| G117 | ara kare | İtiraf: ağın içinde Nihat ve Tarkan yan yana; Peri (manto) ve Cengo karşısında | `K184` | — |
| G118 | ara kare | Karar sorusu: ağın içinden Nihat konuşuyor; Peri karşısında | `K185` | — |
| G119 | ara kare | Seçim anı: ağda Nihat ve Ozan, Peri ortada, Cengo ipin başında; arkada tekne | `K186` | — |
| G120 | ara kare | Kapanış: büro, gece — Peri masada, kırmızı manto, saçta reçel; masada kavanoz | `K187` | — |
| G121 | ara kare | Kapanış (bağ düşük): Cengo kapıdan çıkıyor; Peri tek başına bir kaşık reçel yiyor | `K188` | — |
| G122 | ara kare | Kapanış (bağ yüksek): Peri Cengo'nun ceket yakasını düzeltiyor, Cengo kıpırdamıyor | `K189` | — |
| G123 | ara kare | Kapanış (bağ yüksek): masadaki telefon çalıyor; ikisi de telefona bakıyor | `K190` | — |
| G124 | ara kare | Kapanış (bağ yüksek): Cengo kapıyı açık bırakmış; Peri telefonda; Gizem arkada | `K191` | — |
| G125 | ara kare | Karar (polis): polis ağı kesiyor, Nihat ve Ozan götürülüyor; mühürlü valiz | `K192` | — |
| G126 | ara kare | Karar (anlaş): tekne karanlığa çıkıyor; Peri'nin elinde ağır çanta | `K193` | — |
| G127 | ara kare | Karar (oyun): Peri ağdan uzanan Nihat'ın elini sıkıyor, telefon kulağında | `K194` | — |
| G128 | ara kare | Karar (Ozan'ı bırak): Ozan yokuşa koşuyor, Nihat ağda | `K195` | — |
| G129 | ara kare | Giriş: büro kapısı — Cengo eşikte, kendi ceketiyle, elinde iki simit (yalnız) | `K196` | — |
| G130 | ara kare | Konuşma: Gizem çay ocağından tanıtım çantasıyla geliyor (önlük, kep, gözlük görünüyor) | `K197` | — |
| G131 | ara kare | Kapanış: büro, gece — askıda şoför kasketi, Cengo kendi ceketiyle | `K198` | — |
| G132 | ara kare | Kulis: Peri aynanın önünde telefonla konuşuyor (yalnız) | `K199` | — |
| G133 | ara kare | Yüzleşme açılışı: Peri paravanın arkasından önlükle çıkıyor; herkes ona dönmüş | `K200` | — |
| G134 | ara kare | Konuşma: Cengo çıkarken paravanın üstündeki kırmızı mantoyu koluna alıyor; Peri ile Gizem görmüyor | `K201` | — |
