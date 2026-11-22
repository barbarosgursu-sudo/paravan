**22 Kasım 2026 — PERİ'NİN GİRİŞ KIYAFETİ DEĞİŞTİ (Barbaros: "Kırmızı manto vaka 1'de kaldı").** Vaka 7'de manto YOK; formdaki "sabit kırmızı manto" yanlışlıktı (KAR-22). Yeni set `kadife7`: bordo kadife dar kalem etek (diz üstü), derin V yakalı krem ince triko, kırmızı stiletto, gevşek topuz; ifadeler satırların istediği dört: normal, kas, merakli, sasirmis. Form §3/§14, diyalog (iki sahne notu, set satırları, K124), veri (`setler`, `yer_tutucu`), G1 istemi ve LISTE güncel; eski G1 → `red/G1_red1.png`. `satir_resim.md` eski adı (`manto7`) taşıyor — araç yeniden koşunca düzelir. Kolye repliği ("mantonun cebine saklamıştım") aynen kaldı. **16 Kasım durdurma talimatının sebebi (manto) kapandı;** üretime dönüş için Barbaros "başla" der. Vaka 8'deki manto Vaka 1'dekinin aynısı, referans Vaka 1 resimleri (`vaka8_form.md` §3).

**🛑 16 Kasım 2026, gece — VAKA 7 ÜRETİMİ DURDU (Barbaros'un talimatı).** Barbaros'la Peri'nin kıyafeti (önce kırmızı manto, G1)
konuşulmadan Vaka 7'nin resimlerine devam edilmez. Döngü çalışıyorsa `touch uretim/v7/DUR`. Ayrıntı `kaynak/DEVIR.md` en üst.

**20 Kasım 2026 — SÜHEYLA VE NESRİN YENİ GÖRÜNÜŞLE YENİDEN YAZILDI (Barbaros: "ikisini de değiştir").** Resim benzerlik aracı
(`kaynak/arac_benzerlik_resim.py`, `uretim/CLAUDE.md` 0b2): G4 Süheyla KALDI (Jale 1,80), G5 Nesrin ŞÜPHELİ (Nadide 1,47).
Yeni: **Süheyla** siyah saç geriye taranmış, ensede sıkı topuz (küt değil), uzun yüz, krem boğazlı kazak (gri ekose ceket ve ruj
aynı) · **Nesrin** saç kır değil KOYU KESTANE, yine tek örgü. Hikâye değişmedi: diyalog satır 47 ve 205'ten yalnız saç tarifi
çıkarıldı (sahibinin onayı; görünüş bir daha değişse metne dokunulmasın diye). Form, K152 satırı, `adaylar.tsv`, veri ve G4/G4z/G5/G5z
istemleri güncel. `kaynak/yeni/gorseller.json` → K152 tarifi BİLEREK eski (dosya ortak, kapı V7/V8 resimleri olmadığı için durduruyor);
V7 resimleri üretilince `arac_diyalog.js` yeniden yazar; yazı denetimi GEÇTİ, istem kontrolü çıkış 0. Eski resimler `red/G4*_red1`, `red/G5*_red1`. **ÜRETİLMEDİ:**
durdurma talimatı sürüyor; "başla" deyince `SADECE="4 4z 5 5z"` eklenir. Üretimden sonra benzerlik aracı yeniden koşar.

**16 Kasım 2026, gece — VAKA 7 ÜRETİMİ BAŞLADI (Oğuz Bey'in bilgisayarında; Barbaros aynı numaraları üretmesin).**
Parti 1 (temeller): `LISTE.md`. Kartlar (G1–G3) ve mekânlar (G11–G20) istem kontrolünden geçti, döngüye verildi. Konuk temelleri
(G4–G10, iki zeminle) görselsiz tur bitince (`## Satırlar` için) yazılacak. Görünüş kararları (ortak): Şükrü'nün papyonu koyu
yeşil, Ercan'ın yeleği siyah (ayrıntı `LISTE.md`).
Araç düzeltmesi: `istem_kontrol.sh` sigara denetimindeki `smok` deseni "smokin"i yakalıyordu (V7'de her Cengo istemi düşerdi);
desen `smoke|smoking` oldu.

**16 Kasım 2026, 21:25 — PARTİ 1 ÜRETİLDİ, SAHİBİNİN ONAYINI BEKLİYOR.** Döngü bitti (kalanlar onay bekliyor). Hepsi tarz GEÇTİ
(figür +0,026…+0,106, mekân +0,182…+0,262); kartlarda yüz GEÇTİ (G1 Peri 0,822, G3 Cengo 0,897). Temas sayfaları
`yanyana/parti1_kisiler.jpg`, `yanyana/parti1_mekanlar.jpg`.
- **G13 Düzeltme 1:** ilk resimde 1928 tablosunda Boğaz Köprüsü vardı (`red/G13_red1.png`); yenisi köprüsüz.
- **G2 (Peri gala kartı) ENGELLENDİ ×2** → `WEB_G2.md` (web'de üretilecek). Peri'nin bütün gala/altın resimleri buna bağlı.
- **G12 (büro gece)** G11 onayını bekliyor.
- **Benzerlik uyarıları (kural 9, gözle bakıldı):** Kaan ↔ Cengo yüz 0,72 (ikisi de uzun boylu, koyu kahve saçlı; Kaan traşlı ve
  genç); Ercan ↔ Ferruh 0,745 (ikisi de tıknaz, bıyıklı; Ercan siyah jöleli saçlı, Ferruh kır); Süheyla (G4z) ↔ Ayla 0,70 (ayrılıyor).
- Zemin seçimi onaydan sonra (`arac_zemin.py`, H4), sonra baş kırpıkları ve Parti 2.

**16 Kasım 2026, 21:50 — DÖRT KONUK YENİDEN YAZILDI (ortağın kuralı: vakaya özgü karakterler eski konuklardan tamamen farklı;
`uretim/CLAUDE.md` 9b).** Gözle karşılaştırmada Kaan = Bülent/Cengo, Ercan ve Necmi = Recep, Şükrü = Ferruh/Tahsin arası çıktı.
Ortağın seçtiği yeni görünüşler (form §16 ve diyalog güncel): **Kaan** açık kumral perçemli, yuvarlak kemik gözlüklü, çilli, çocuksu
(diyalog satır 113'e "gözlüklü" eklendi) · **Ercan** uzun, sırık gibi ince, köşeli yüzlü, bıyıksız · **Necmi** yüzü uzun ve kemikli,
kalın siyah kaşlar, altın diş · **Şükrü** tepesi kel, sert yüz, gülmüyor. Eski resimler `red/G6*_red1`, `G8*`, `G9*`, `G10*`.
İstemler kontrolden geçti (çıkış 0). **ÜRETİLMEDİ:** Barbaros'un durdurma talimatı sürüyor (en üst); "başla" deyince
`SADECE="6 6z 8 8z 9 9z 10 10z"` ile üretilir. Süheyla, Nesrin, Vedat ayrışıyor (değişmedi).
