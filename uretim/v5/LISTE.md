# Vaka 5 — resim listesi (Parti 1: temeller)

27 Kasım 2026, Oğuz Bey'in bilgisayarında. Hikâye: `sablon/vakalar/vaka5_diyalog.md` (bugün yeni kurallarla denetlendi:
doğrulayıcı PASS, kapı V5 hikâye GEÇTİ). Vaka 5'in hiç resmi yoktu; hepsi baştan (V7, V8 gibi). İstemler `uret_istem_parti1.py`
ile üretildi (`python -I uret_istem_parti1.py satir_resim.md`), `istem_kontrol.sh` çıkış 0.

**Sıra (V8'deki gibi):** Parti 1 = temeller (Peri/Cengo/Gizem kıyafet kartları, 9 konuğun temel figürü iki zeminle, 9 mekân).
Oğuz Bey onaylayınca Parti 2 (Peri/Cengo/Gizem temel figürleri karttan; karede görünen konukların kıyafet kartları), sonra Parti 3
(ifadeler, nesneli pozlar, kareler K79–K95, detaylar D14–D17, kart afişi). Tam liste `sablon/vakalar/vaka5_gorsel.md`'ye aynı numaralarla geçer.

**Görünüş kararları (27 Kas, Oğuz Bey):** konuklar bütün vakalarla ayrıştı (benzerlik aracı `0 1 2 3 4 5` ve `5` GEÇTİ):
Muammer bordo kadife ceket, koyu kahveye boyalı fönlü saç, kalın bıyık, altın diş · Nedim ufak tefek, kısacık bembeyaz saç, beyaz
keçi sakalı, gri blazer, fular, baston (Tahsin'in gür dalgalı beyaz saçından ayrı) · İsmet tombul, kare yüz, siyaha boyalı geriye
saç · Derya kısa kumral saç, bere · Efe kısa siyah saç · görevli iri, kare yüz, kısacık kumral saç, gür kumral bıyık · simitçi ince
uzun, kızıl kıvırcık saç, çilli. **Peri:** kırmızı stiletto, çorap yok (formdaki siyah sandaletin yerine). **Gizem:** `hirka5` —
kiremit örgü hırka, krem gömlek, gri pantolon (SATIR-43; hardal değil, V6 Dilek hardal kazaklı). **Büro:** V5'in kendi bürosu
A72 (gündüz) / A73 (akşam), ortak A6 yerine.

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G1 | kıyafet kartı | Peri, zümrüt yeşili ipek elbise + krem hırka, kırmızı stiletto, çorap yok (`ipek`; `islak`, `battaniye` bu karttan) | — | — |
| G2 | kıyafet kartı | Peri, aynı elbise hırkasız (`ipek_acik`) | — | G1 |
| G3 | kıyafet kartı | Cengo, lacivert balıkçı yaka kazak + kahverengi kasket (`balikci`; `simitli` bu karttan) | — | — |
| G4 | kıyafet kartı | Gizem, kiremit örgü hırka, krem gömlek, gri pantolon (`hirka5`) | — | — |
| G5 / G5z | figür | Muammer Bey, normal (temel) — açık bej / gri-mavi | `muammer.normal` | tur |
| G6 / G6z | figür | Selim, normal (temel) — gri-mavi / açık bej | `selim.normal` | tur |
| G7 / G7z | figür | Kadir, normal (temel) — gri-mavi / açık bej | `kadir.normal` | tur |
| G8 / G8z | figür | Nedim Bey, normal, bastonlu (temel) — açık bej / gri-mavi | `nedim.normal` | tur |
| G9 / G9z | figür | Derya Hanım, normal (temel) — açık bej / gri-mavi | `derya.normal` | tur |
| G10 / G10z | figür | Efe, normal (temel) — gri-mavi / açık bej | `efe.normal` | tur |
| G11 / G11z | figür | İskele görevlisi, normal (temel) — açık bej / gri-mavi | `gorevli.normal` | tur |
| G12 / G12z | figür | İsmet Usta, normal (temel) — gri-mavi / açık bej | `ismet.normal` | tur |
| G13 / G13z | figür | Simitçi, normal, başında simit tablası (temel) — açık bej / gri-mavi | `simitci.normal` | tur |
| G14 | arka plan | Büro, gündüz (V5'in kendi bürosu; kemerli pencereden Karaköy iskelesi ve vapur) | `A72` | — |
| G15 | arka plan | Büro, akşam (G14'ün aynı açısı) | `A73` | G14 |
| G16 | arka plan | Vapurun alt salonu: ahşap koltuklar, direk, çay tezgâhı, merdiven | `A36` | — |
| G17 | arka plan | Vapurun üst güvertesi: korkuluk, martılar, rüzgâr | `A37` | — |
| G18 | arka plan | Kadıköy iskelesi: turnikeler, görevli kulübesi, bank, yanaşan vapur | `A38` | — |
| G19 | arka plan | Nedim Bey'in koleksiyon odası (Moda): saat duvarı, cep saati vitrini | `A39` | — |
| G20 | arka plan | Kadıköy çarşısında deri atölyesi: yarım çantalar, kayışlar | `A40` | — |
| G21 | arka plan | Muammer'in antika dükkânı (Çukurcuma): vitrinler, gramofon, kasa, tezgâh | `A41` | — |
| G22 | arka plan | Karaköy iskelesi: yanaşmış vapur, aralıklı ahşap tahtalar, halatlar, martılar (kapak V5) | `A42` | — |

**Satır dökümü:** `satir_resim.md` (kapı V5 hikâye, dört yol; OTO 17 · İŞ 0 · SOR 0).

## Parti 2 (27 Kasım 2026): temel figürler karttan, konukların kıyafet kartları

Zeminler `zemin.tsv` (kartlardan `arac_zemin.py`; dördü de açık bej). İstemler `uret_istem_parti2.py`. Konuk kartlarının belden aşağısı Oğuz Bey'in onayına.

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G23 | figür | Peri, zümrüt yeşili ipek elbise + krem hırka, normal (temel; açık bej) | `peri.ipek.normal` | G1 |
| G24 | figür | Peri, ipek elbise hırkasız, normal (temel; açık bej) | `peri.ipek_acik.normal` | G2 |
| G25 | figür | Cengo, lacivert balıkçı yaka + kasket, normal (temel; açık bej) | `cengo.balikci.normal` | G3 |
| G26 | figür | Gizem, kiremit örgü hırka (bu kıyafetin temeli; açık bej) | `gizem.hirka5` | G4 |
| G27 | kıyafet kartı | Muammer Bey (tam boy) | — | G5 |
| G28 | kıyafet kartı | Selim (tam boy) | — | G6 |
| G29 | kıyafet kartı | Kadir (tam boy) | — | G7 |
| G30 | kıyafet kartı | Nedim Bey (tam boy) | — | G8 |
| G31 | kıyafet kartı | Derya Hanım (tam boy) | — | G9 |
| G32 | kıyafet kartı | Efe (tam boy) | — | G10 |
| G33 | kıyafet kartı | İskele görevlisi (tam boy) | — | G11 |
| G34 | kıyafet kartı | İsmet Usta (tam boy) | — | G12 |
| G35 | kıyafet kartı | Simitçi (tam boy) | — | G13 |

## Parti 3 (27–28 Kasım 2026): 3a ifadeler ve nesneli pozlar G36–G72 (satırların istediği — SATIR-35), 3b detaylar G73–G76, kareler G77–G93, kart afişi G94

İstemler `uret_istem_parti3a.py`, `uret_istem_parti3b.py`; baş kırpıkları `referanslar/peri_ipek_bas.png`, `gizem_hirka5_bas.png`; şerit `referanslar/serit_muammer_selim_nedim_kadir.jpg`. Hâl temelleri: `peri.islak` G43, `peri.battaniye` G44, `cengo.simitli` G50.

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G36 | figür | Peri, ipek, kaşı kalkık | `peri.ipek.kas` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G37 | figür | Peri, ipek, meraklı, soruyor | `peri.ipek.merakli` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G38 | figür | Peri, ipek, mahcup (zayıf kanıt) | `peri.ipek.utanmis` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G39 | figür | Peri, ipek, deniz tutmuş (yeşil) | `peri.ipek.yesil` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G40 | figür | Peri, ipek, kalan çantayı tezgâha koyuyor | `peri.ipek.canta` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G41 | figür | Peri, ipek_acik, kaşı kalkık | `peri.ipek_acik.kas` | G2 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G42 | figür | Peri, ipek_acik, meraklı (iltifat duyuyor) | `peri.ipek_acik.merakli` | G2 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G43 | figür | Peri, islak, sırılsıklam, kaşı kalkık (bu hâlin temeli) | `peri.islak.kas` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G44 | figür | Peri, battaniye, battaniyeye sarınmış (bu hâlin temeli) | `peri.battaniye.normal` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır) |
| G45 | figür | Peri, battaniye, battaniyede, kaşı kalkık | `peri.battaniye.kas` | G1 (kart), `referanslar/peri_ipek_bas.png` (hazır), G44 |
| G46 | figür | Cengo, balikci, gülen | `cengo.balikci.gulen` | G25, G3 (onaylı) |
| G47 | figür | Cengo, balikci, kaşı kalkık | `cengo.balikci.kas` | G25, G3 (onaylı) |
| G48 | figür | Cengo, balikci, kollarını açmış, martı gibi bağırıyor | `cengo.balikci.kollar` | G25, G3 (onaylı) |
| G49 | figür | Cengo, balikci, martılara simit atıyor | `cengo.balikci.simit` | G25, G3 (onaylı) |
| G50 | figür | Cengo, simitli, kolunda ve kasketinde simitler (bu hâlin temeli) | `cengo.simitli.normal` | G25, G3 (onaylı) |
| G51 | figür | Cengo, simitli, simitli, gülen | `cengo.simitli.gulen` | G50, G3 (onaylı) |
| G52 | figür | Cengo, simitli, simitli, kaşı kalkık | `cengo.simitli.kas` | G50, G3 (onaylı) |
| G53 | figür | Cengo, simitli, simitli, yumuşak | `cengo.simitli.yumusak` | G50, G3 (onaylı) |
| G54 | figür | Gizem, kiremit hırka, işveli | `gizem.hirka5_isveli` | G26 (onaylı temel) |
| G55 | figür | Efe, gülen (bir daha!) | `efe.gulen` | G10 (onaylı temel) |
| G56 | figür | Efe, martılara simit atıyor | `efe.simit` | G10 (onaylı temel) |
| G57 | figür | İskele görevlisi, elinde defter | `gorevli.defter` | G11 (onaylı temel) |
| G58 | figür | İsmet Usta, kayış dikiyor | `ismet.dikiyor` | G12 (onaylı temel) |
| G59 | figür | Kadir, alınmış (kazaydı!) | `kadir.alinmis` | G7 (onaylı temel) |
| G60 | figür | Kadir, gülen (unuttum) | `kadir.gulen` | G7 (onaylı temel) |
| G61 | figür | Kadir, elinde çay tepsisi | `kadir.tepsi` | G7 (onaylı temel) |
| G62 | figür | Muammer Bey, dertli (anlatıyor) | `muammer.dertli` | G5 (onaylı temel) |
| G63 | figür | Muammer Bey, kaçamak (bıyığını düzeltiyor) | `muammer.kacamak` | G5 (onaylı temel) |
| G64 | figür | Muammer Bey, elinde kadife kutu | `muammer.kutu` | G5 (onaylı temel) |
| G65 | figür | Muammer Bey, öfkeli | `muammer.ofkeli` | G5 (onaylı temel) |
| G66 | figür | Nedim Bey, alaycı | `nedim.alayci` | G8 (onaylı temel) |
| G67 | figür | Nedim Bey, bastonuyla gösteriyor | `nedim.baston` | G8 (onaylı temel) |
| G68 | figür | Selim, gergin (eli göğsünde) | `selim.gergin` | G6 (onaylı temel) |
| G69 | figür | Selim, itiraf (yıkılmış) | `selim.itiraf` | G6 (onaylı temel) |
| G70 | figür | Selim, sandalye bacağı yapıştırıyor | `selim.sandalye` | G6 (onaylı temel) |
| G71 | figür | Simitçi, öfkeli (parasını ver!) | `simitci.ofkeli` | G13 (onaylı temel) |
| G72 | figür | Simitçi, tablasından simit uzatıyor | `simitci.tabla` | G13 (onaylı temel) |
| G73 | detay | Detay: kadife kutuda parlak, ucuz bir cep saati | `D14` | referanslardaki onaylı resimler |
| G74 | detay | Detay: Nedim'in duvarındaki saatler aynı anda çalıyor | `D15` | referanslardaki onaylı resimler |
| G75 | detay | Detay: çanta astarında küçük deri damgası | `D16` | referanslardaki onaylı resimler |
| G76 | detay | Detay: açık cep saati kapağının içinde ince bir kazıma | `D17` | referanslardaki onaylı resimler |
| G77 | ara kare | Giriş (çekicilik): Peri açık pencerenin önünde, hırkasız; Muammer bakıyor; Cengo | `K79` | referanslardaki onaylı resimler |
| G78 | ara kare | Yüzleşme açılışı: alt salon; Muammer, Selim, Nedim koltukların başında; Kadir tezgâhta; Peri ve Cengo | `K80` | referanslardaki onaylı resimler |
| G79 | ara kare | Yüzleşme: Selim'in ceketinin iç cebi, eli göğsünde, zil sesi (yakın) | `K81` | referanslardaki onaylı resimler |
| G80 | ara kare | Yüzleşme: herkes Selim'e dönmüş; Selim merdivene koşuyor | `K82` | referanslardaki onaylı resimler |
| G81 | ara kare | Kovalamaca 1: Cengo simitçiyle çarpışıyor; tabla havada, simitler koluna ve kasketine geçiyor | `K83` | referanslardaki onaylı resimler |
| G82 | ara kare | Kovalamaca 2: üst güverte, dalga Peri'nin üstüne boşalmış; ıslak, yosunlu | `K84` | referanslardaki onaylı resimler |
| G83 | ara kare | Kovalamaca 3: Peri'nin topuğu iskele tahtasına sıkışmış; tek ayakkabıyla koşuyor; ileride Selim | `K85` | referanslardaki onaylı resimler |
| G84 | ara kare | Kovalamaca 4: martı sürüsü yosunlu Peri'nin peşinde; Selim'i de sarmış, halata takılıp düşüyor | `K86` | referanslardaki onaylı resimler |
| G85 | ara kare | Kovalamaca sonu: simitli Cengo Selim'in üstünde oturuyor; Peri tek ayakkabılı, çenesi havada | `K87` | referanslardaki onaylı resimler |
| G86 | ara kare | Karar sorusu (seçim karesi): Kadir battaniyeyi Peri'nin omzuna atıyor, elinde çay; arkada Muammer, elinde açık saat | `K88` | referanslardaki onaylı resimler |
| G87 | ara kare | Kapanış: Cengo masanın kenarında, kasketinde simit; Peri battaniyeli masada; Gizem pencerede | `K89` | referanslardaki onaylı resimler |
| G88 | ara kare | Kapanış (bağ düşük): simit Peri'nin masasında; Cengo çıkıyor | `K90` | referanslardaki onaylı resimler |
| G89 | ara kare | Kapanış (bağ yüksek): Peri Cengo'nun kazağının içinde, kollar uzun; Cengo tişörtle; Gizem arkada | `K91` | referanslardaki onaylı resimler |
| G90 | ara kare | Karar (Saati Muammer'e bırak): Muammer dükkânında saati cebine koyuyor; Selim aletleriyle çıkıyor | `K92` | referanslardaki onaylı resimler |
| G91 | ara kare | Karar ("Aranızda kalsın"): ertesi gün Muammer ve Selim yine aynı dükkânda, ikisi de sır tutuyor | `K93` | referanslardaki onaylı resimler |
| G92 | ara kare | Karar (saatin gerçek sahibi): Peri saati yaşlı bir kadının ellerine bırakıyor | `K94` | referanslardaki onaylı resimler |
| G93 | ara kare | Karar (polise teslim): Selim başı önde, amblemsiz bir polis memuruyla götürülüyor; Peri ve Cengo izliyor | `K95` | referanslardaki onaylı resimler |
| G94 | kart afişi | Kart afişi: Vapur | `KART_V5` | referanslardaki onaylı resimler · GOMME-21…27, BILGI-14…16: kadro = Peri, Cengo + müşteri Muammer + üç şüpheli (Selim, Nedim, Kadir); şüpheliler eşit; yöntem nesneleri yasak; Peri'nin dekolteli temeli verilmez (baş kırpığı + kart). |
