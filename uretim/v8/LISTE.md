# Vaka 8 — resim listesi (Parti 1: temeller)

25 Kasım 2026 akşam, Oğuz Bey'in bilgisayarında. Hikâye: `sablon/vakalar/vaka8_diyalog.md` (20 Kasım'da dondu; 25 Kasım'da
bugünkü araçlarla yeniden denetlendi — doğrulayıcı PASS, V8'de uyarı yok). Vaka 8'in resimleri baştan yapılır (V7'deki gibi).

**Sıra (V7'deki gibi):** Parti 1 = temeller (Peri/Cengo kıyafet kartları, yeni konukların temel figürleri iki zeminle, mekânlar).
Oğuz Bey bunları onaylayınca Parti 2 (Peri/Cengo temel figürleri karttan, karede görünen konukların kartları), sonra Parti 3
(ifadeler, kareler, kararlar, detaylar, kart afişi). Tam liste yazılınca `sablon/vakalar/vaka8_gorsel.md`'ye aynı numaralarla geçer.

**Görünüş kararları (25 Kas):** Tarkan'ın sarı saçı V7'deki Kaan'a benzedi (benzerlik aracı) → **siyah, makineyle kısacık
kazınmış saç, kömür grisi takım (yeleksiz)**, sol kaşta ince iz (Oğuz Bey seçti). Form, diyalog (K166), `adaylar.tsv` değişti;
benzerlik aracı V7+V8 birlikte GEÇTİ. V7 konukları havuza taşındı (gömmede atlanmıştı).

**Peri'nin mantosu:** Vaka 1'deki manto birebir — kruvaze, kuşakla bağlanan, geniş açık yaka, kapaksız cep; altında V yakalı
krem saten bluz; **kuşak çözük, uçları sarkık**. Referans `kaynak/yeni_gorsel/sprite/peri_manto_normal.webp` (dekoltesi
kapatılmış kopya — ISTEM-16). V7'nin G1 hatası (düğmeli, kapaklı cep) tekrarlanmaz.

**Ayakkabı:** Peri `manto8` ve `kilik` → siyah stiletto (form §14).

**Gizem (`triko`) ve Cengo'nun `ceket8`'i (Vaka 1 ceketi) hazır resimlerden** — yeni kart yok.

| # | tür | ne | anahtar | bekler |
|---|---|---|---|---|
| G1 | kıyafet kartı | Peri, kırmızı manto, kuşak çözük (`manto8`; `manto8_son` bu karttan: önlüksüz, manto omzunda, saçta reçel) | — | — |
| G2 | kıyafet kartı | Peri, aşçı yardımcısı kılığı (`kilik`: manto yok, krem saten bluz + kalem etek üstünde beyaz şef önlüğü, beyaz kep, iri siyah gözlük; `onluk8` ve `recel` bu karttan) | — | — |
| G3 | kıyafet kartı | Cengo, şoför üniforması (`sofor`: lacivert iki sıra düğmeli ceket, kasket, beyaz eldiven, bir beden dar; `sofor_dugmesiz` bu karttan) | — | — |
| G4 / G4z | figür | Bahar Hanım, şaşırmış (temel; `normal` satırda yok) — açık bej / gri-mavi | `bahar.sasirmis` | tur |
| G5 / G5z | figür | Tarkan, normal (temel) — gri-mavi / açık bej | `tarkan.normal` | tur |
| G6 / G6z | figür | Nevzat Bey, normal (temel) — açık bej / gri-mavi | `nevzat.normal` | tur |
| G7 / G7z | figür | Fikret Usta, huysuz (temel; `normal` satırda yok) — gri-mavi / açık bej | `fikret.huysuz` | tur |
| G8 / G8z | figür | Nihat Kora, normal (temel) — açık bej / gri-mavi | `nihat.normal` | tur |
| G9 / G9z | figür | Emir, normal (temel) — gri-mavi / açık bej | `emir.normal` | tur |
| G10 / G10z | figür | Pınar, normal (temel) — açık bej / gri-mavi | `pinar.normal` | tur |
| G11 / G11z | figür | Yusuf Efendi, normal (temel) — gri-mavi / açık bej | `yusuf.normal` | tur |
| G12 | arka plan | Büro, gündüz (V8 için yeni açı; masada kapalı kadife kutu) | `A60` | — |
| G13 | arka plan | Büro, gece (G12'nin aynı açısı) | `A71` | G12 |
| G14 | arka plan | Kurtuluş: atölyenin üstünde dar muhasebe odası, klasörler, hesap makinesi | `A61` | — |
| G15 | arka plan | Maslak: televizyon stüdyosu, ışıklar altında mutfak dekoru, kameralar | `A62` | — |
| G16 | arka plan | Samatya: küçük lokanta, duvarda eski fotoğraflar, tezgâhın arkasında eski kasa | `A63` | — |
| G17 | arka plan | Mecidiyeköy: dar kargo dükkânı, duvar boyu numaralı posta kutuları (numara dışında yazı yok) | `A64` | — |
| G18 | arka plan | Karaköy: otopark, girişte görevli kulübesi (tabela/marka yok) | `A65` | — |
| G19 | arka plan | Stüdyo kulisi: ampullü ayna, masada kartsız buket | `A66` | — |
| G20 | arka plan | Kurtuluş: mutfak atölyesi, tezgâhlarda kavanoz kuleleri (etiket okunmaz), köşede soyunma paravanı | `A67` | — |
| G21 | arka plan | Atölyenin önü, gece, siyah araba | `A68` | — |
| G22 | arka plan | Sahil yolu, gece, Boğaz ışıkları | `A69` | — |
| G23 | arka plan | Yeniköy: beyaz yalı, uzun ahşap iskele, ucunda tekne, balıkçı ağı (gece) | `A70` | — |

**İstemlerden önce (adım 8):** kıyafet hâli tablosu (SATIR-7), görselsiz tur kapı yollarında → `satir_resim.md`
(`arac_satir_resim.js` bayrakları kapalı — SATIR-10), istem kalıbı `uretim/ISTEM_KALIPLARI.md`, istem denetimi
`uretim/istem_kontrol.sh` (ISTEM-52). Hatırlatma listesi `sablon/vakalar/vaka8_hatirlatma.md` (97 madde).
