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
