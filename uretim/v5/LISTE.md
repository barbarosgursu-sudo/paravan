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
