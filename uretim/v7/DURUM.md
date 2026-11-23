**23 Kasım 2026, 09:45 — PARTİ 1'İN 7 RESMİ onayli/'de; KAPI DÜZELDİ (Barbaros: "Evet").** Commit kapısı (`.claude/kapi_hook.js`) artık onaylı resim / el onayı / `vaka7_gorsel.md` için vakanın TAMAMINI denetlemiyor (üretim sürerken hep kalıyordu); onaylı resim yalnız kendi üç aracından ve el onayından (`arac_el.py --kapi`) geçer, vakanın tamamı gömmede. Seçilen zeminler: G5 = G5z, G8 = G8z, G9 = G9z (öbürleri `red/`). `zemin.tsv` yazıldı (`arac_zemin.py`): Ercan gri-mavi, öbürleri açık bej. ⚠ Kaan'ın temeli (G8z) gri-mavi ama saçı açık sarı — kesimde mavi hale riski; gömmede DENETIM-37 ile bak. `sablon/vakalar/vaka7_gorsel.md` yazıldı (LISTE'den). `arac_el.py` Windows'ta UTF-8 basıyor.

**23 Kasım 2026, 09:30 — EL ONAYI (Barbaros):** G1, G4, G5 (=G5z), G6, G8 (=G8z), G9 (=G9z), G10 → `el_onay.md` (imza seçilen resmin; onayli/'e o resim `G<n>.png` adıyla girmeli, yoksa onay düşer).

**23 Kasım 2026, 09:15 — PARTİ 1'İN YENİ RESİMLERİ BİTTİ (Barbaros'un bilgisayarı).** Her kişinin bir resmi üç aracı geçti: G1 Peri kartı (yüz 0,864) · Süheyla G4 ve G4z (yeni dolgun yüz, gözlük; Jale 0,42) · Nesrin **G5z** (G5 ŞÜPHELİ Jale 1,54) · Şükrü **G6** · Kaan **G8z** (yeni sarı saç; G8 ŞÜPHELİ Haldun 1,48) · Ercan **G9z** (yeni geniş kare yüz; G9 ŞÜPHELİ Cengo 1,52; ilk G9 Şükrü'ye 1,78 → `red/G9_red1`) · Necmi G10 ve G10z. Ercan da değişti (Barbaros onayladı): form, `adaylar.tsv`, G9/G9z istemleri. **Bekleyen:** el onayı (Barbaros; sayfalar `kaynak/YENI_UI/el/`); onayli/'e alınca commit kapısı bütün V7 resim denetimini koşuyor (poz kaydı, K6) — Parti 1 onayları vaka sonuna kadar yerelde tutulmalı ya da kapı partiye göre ayarlanmalı. `sablon/vakalar/vaka7_gorsel.md` yok (`arac_el.py` istiyor; yazılınca da kapı V7 resim denetimini başlatıyor). Bulunan iki araç hatası: `dongu.sh` `PY` (düzeldi), `arac_el.py` Windows'ta UTF-8 (`PYTHONIOENCODING=utf-8` ile koş).

**23 Kasım 2026, 09:00 — SÜHEYLA VE KAAN'IN GÖRÜNÜŞÜ DEĞİŞTİ (Barbaros onayladı).** Benzerlik aracı: G4/G4z Süheyla → Jale 1,51 (ŞÜPHELİ); G5 Nesrin → Süheyla 1,47 (ŞÜPHELİ), G5z → 1,75 (KALDI); G8 Kaan → Cengo 1,89 (KALDI). Yeni: **Süheyla** dolgun, yuvarlak yüzlü, tombul yanaklı, KALIN SİYAH çerçeveli gözlük (topuz, krem kazak, ekose ceket, kehribar aynı) · **Kaan** kısa boylu, ufak yapılı, bebek yüzlü, AÇIK SARI düz kısa saç, perçem (gözlük, çil, lacivert takım aynı; diyalogdaki "perçemli, gözlüklü" geçerli). Form, `adaylar.tsv` (yazı benzerliği GEÇTİ), G4/G4z/G8/G8z istemleri (kontrol çıkış 0). Eski resimler `red/G4_red2`, `G4z_red2`, `G8_red1`, `G8z_red1`. Nesrin değişmedi; G5'in benzerliği yeni Süheyla gelince yeniden koşulur. Şükrü: G6 GEÇTİ (Tahsin 1,39, gözle ayrışıyor), G6z ŞÜPHELİ (1,44) → zemin G6.

**23 Kasım 2026 — ÜRETİM BARBAROS'UN BİLGİSAYARINDA YENİDEN BAŞLADI (Barbaros: "önce benim bilgisayarımda, sorun çıkarsa burada halledelim; sonra asıl üretim Oğuz Bey'de").** Oğuz Bey bu sırada V7 üretmesin. İlk parti: `SADECE="1 4 4z 5 5z 6 6z 8 8z 9 9z 10 10z"`. İstem kontrolü yeni ISTEM-44 denetimine G5/G5z/G10/G10z'de takıldı (saçın dış çizgisi cümlesi yoktu) → dördüne `## Düzeltme 1` eklendi, kontrol çıkış 0. 16 Kasım'da üretilen G3, G7/G7z, G11, G13–G20 hâlâ onay bekliyor (`onayli/` yok).

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
