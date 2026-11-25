# VAKA 6 SHORTS — HAREKETLİ VİDEO DENEMESİ (iş tarifi)

24 Kasım 2026, Barbaros'un penceresinde hazırlandı; üretim denemesi başka pencerede yapılır.
Kurallar: `sablon/8_shorts.md` (SHORTS-1…29). Senaryonun araç biçimi: `sablon/vakalar/vaka6_shorts.md`
(`cd kaynak && node arac_shorts.js 6 --denetle` → **PASS**, üç uyarı; damga henüz BASILMADI).
Resimlerin hepsi (13 PNG, adlarında satır no): `kaynak/YENI_UI/shorts_v6_resimler/` (depoda değil; yoksa §4'teki dosyalardan).

---

## 1. Amaç ve alınan kararlar

- Video izleyiciyi **oyunu oynamaya çekmeli**; çekmiyorsa Shorts yapmanın anlamı yok (Barbaros).
- Bugünkü araç durağan resim + kamera kaydırması yapıyor; bu "yüzsüz video" gibi duruyor. Hedef: karakterler
  **konuşuyor, ağzı oynuyor, birbirine bakıyor** (örnek: Barbaros'un gönderdiği `kanepe.mp4` — Peri ve Cengo
  kanepede konuşuyor; dudak hareketi ve el hareketleri iyi, Cengo'nun saçı kayıyor, yatay 896×448).
- Ses: **ElevenLabs** (aylık kredi yenilendi). Dil: **Türkçe** (yayındaki oyun Türkçe; ilgiyi ölçmek için).
- Video tipi: **Kanca** — tek sahne, kesintisiz; anlatıcı yalnız sonda. Üç şüpheli **eşit** yer alır ki izleyici
  "bu çözülebilir bir bilmece" diye görsün.
- Anneannenin "evliliği istemediği" söylenmez: bu onun gerçek sebebi (ipucu ve itiraf bilgisi) — spoiler.

## 2. Senaryo (~34 sn)

Kaynak yalnız `vaka6_diyalog.md` → `## sahne giris` / `## sahne konusma`. Sözler **harfi harfine** böyle kalır;
tek harf değişirse araç denetimi baştan yapılır.

**Bölüm 1 — büro, kesintisiz sahne (hareketli, konuşan ağzı oynar):**

| # | Konuşan (ifade) | Söz | Ekranda | Süre |
|---|---|---|---|---|
| 1 | **Eylül** (üzgün) | "Baba… annem bu mektupları senin yazdığını söylüyor." | Eylül yakın; yanında Cengo | ~4 sn |
| 2 | **Cengo** (sinirli) | "Ben mi? Ben annene mektup mu yazacağım?" | Cengo + Eylül | ~3 sn |
| 3 | **Peri** (meraklı) | "Ne yazıyor mektuplarda?" | Peri + Eylül | ~2 sn |
| 4 | **Eylül** (normal) | "Üçünde de aynı şey: 'Bu düğün olursa herkes öğrenir.'" | Eylül; kamera yavaşça yaklaşır | ~4 sn |
| 5 | **Eylül** (üzgün) | "Haldun amca da eski karısından şüpheleniyor. Anneannem de çok üzülüyor." | Eylül | ~5 sn |
| 6 | **Eylül** (sevinçli) | "Sen dedektifsin baba. Sen bulursun." | Eylül + Cengo (yumuşak) | ~3 sn |

**Bölüm 2 — üç şüpheli (anlatıcı konuşur; yüzler yalnız hafif hareket: nefes, göz kırpma, bakış — ağız oynamaz):**

| # | Ekranda | Anlatıcı | Süre |
|---|---|---|---|
| 7 | Jale, tam boy, sade — gelinlik atölyesinde (A45) | "Eski eş. Boşanırken 'Seni rahat bırakmam' demiş." | ~3,5 sn |
| 8 | Müzeyyen (anneanne), tam boy, sade — kendi salonunda (A47) | "Anneanne. Torununu bu büroya o gönderdi." | ~3,5 sn |
| 9 | Cengo, tam boy, sade — büroda (A6) | "Baba. Gelin onu suçluyor." | ~3,5 sn |

- Üçü **aynı sürede, aynı boyda, aynı hareketle**; her biri kendi mekânında. Sıra bilerek: suçlu ortada, Cengo sonda.
- Portre YOK, tepsi YOK (25 Kasım, Barbaros: "portre saçma"; börek tepsisinin olayla ilgisi yok, göz çeker).

**Kapanış:** son kare (bkz. §6) üstünde anlatıcı: **"Sence kim yazdı?"** (~3 sn)

## 3. Spoiler yasakları (en önemli bölüm — SHORTS-8…14, Nurcan kuralı)

Suçlu **Müzeyyen** (anneanne). Video bunu hiçbir yolla ima etmez.

- **Kullanılmaz:** ipucu bilgileri (düğün sofrasında kim vardı, Eylül'ün babasına attığı mesaj, bank, elbise
  kılıfını kim tuttu, sipariş günü, terzi kalıp kâğıdı, Müzeyyen'in terzi olduğu), yüzleşme/kovalamaca/karar/
  kapanış sahneleri ve resimleri, karar adları, Müzeyyen'in sebebi.
- **Müzeyyen'in resmi:** `muzeyyen.normal` oyunda yalnız yüzleşmede görünür; resmin kendisi sade (arka plan yok, elinde
  bir şey yok). **Sahibi 25 Kasım'da onayladı** → senaryoda `⚙ izin: muzeyyen.normal`, araç uyarı basar (SHORTS-12).
  Başka ifadesi (tepsi, gergin, itiraf) kullanılmaz.
- **Atölye (A45):** masada kâğıt/kumaş topları ve makas var; mektuplar terzi kalıp kâğıdına yazılmıştı (ipucu). O
  masaya **yakın çekim yapılmaz**, hareketli videoda masa öne çıkmaz.
- Müzeyyen'e fazla süre, fazla yakın çekim, kuşkulu yüz **verilmez**; ötekilerden az da verilmez.
- **Mektuplar/zarflar** gösterilirse üstlerinde okunur yazı olmaz (BILGI-20: yazı taşıyan nesnenin yüzü kapalı).
- Yapay zekâ videosu **yeni nesne, yeni kişi, yeni olay eklemez** (görsel yalan söyleyebilir — BILGI-19):
  kimse elinde kâğıt/telefon/tepsi belirmez, kimse odaya girmez.
- Başlık ve açıklama da aynı denetimden geçer (araç bakar).

## 4. Görünüş — oyundaki onaylı resimlerden sapma yok

Her çekim üretildikten sonra oyundaki resimle **yan yana** konup gözle onaylanır. Kayan çekim kullanılmaz.

| Kişi | Görünüş (Vaka 6, giriş) | Kaynak resim (`kaynak/yeni_gorsel/`) |
|---|---|---|
| **Eylül** (16) | uzun koyu saç, kot ceket, siyah tişört, sırt çantası | `figur_eylul_uzgun.webp`, `_normal`, `_sevincli` (560×700) |
| **Cengo** | açık mavi, kolalı, ütülü gömlek; lacivert pantolon; taranmış koyu saç; **renkli boncuklu bileklik** (Eylül'ün yaptığı) | `sprite/cengo_utulu_sinirli.webp`, `_yumusak`, `_normal` (550×700) |
| **Peri** | kızıl at kuyruğu, beyaz gömlek belde düğümlü, dar kot | `sprite/peri_mesai_merakli.webp` (457×700) |
| **Jale** | kısa kızıl küt saç, siyah elbise, kollar kavuşuk, bilekte iğnelik | `figur_jale_normal.webp` (560×700) |
| **Müzeyyen** | kısa sarı dalgalı saç, inci kolye, lacivert hırka, puantiyeli elbise, eller önde | `figur_muzeyyen_normal.webp` (560×700) |
| **Büro** | gündüz büro | `arka_a6_buro_gunduz.webp` (900×1200) |
| **Atölye** | Jale'nin gelinlik atölyesi | `arka_a45.webp` (900×1200) |
| **Salon** | Müzeyyen'in salonu | `arka_a47.webp` (900×1200) |

- Cengo'da **sabit**: yüz, saç, tel, bileklik (KAR-24). `kanepe.mp4`'teki saç kayması (kıvırcık ↔ taranmış) burada
  kabul edilmez. Çekimler 3–5 sn tutulursa kayma azalır.
- Peri'nin eski dekolteli görünüşü kullanılmaz; kıyafet yukarıdaki gibi.
- En çok **iki kişi** aynı karede (SHORTS-17). Dinleyen de canlı: bakar, başını çevirir, ama konuşmaz.
- **Başlangıç karesi** için en kolay yol: oyunun kendi ekranı. `cd kaynak && node arac_yeni_tur.js sofra dogru --hepsi`
  giriş satırlarının görüntüsünü `kaynak/YENI_UI/satir/`'a yazar (dikey telefon kadrajı, figürler oyundaki yerinde).
  O kare dikeye uygun büyütülüp videoya başlangıç resmi olarak verilir.
- Kaynak resimler küçük (arka plan 900×1200, figürler ~560×700) → videoya vermeden önce
  büyütme (upscale) gerekebilir; büyütülmüş resim de aslıyla yan yana denetlenir.

## 5. Teknik özellikler (son video)

| Özellik | Değer |
|---|---|
| Boyut | **1080×1920 dikey** (9:16) |
| Kare hızı | 30 fps (`kaynak/shorts_ayar.json` → `zaman.fps`) |
| Kodlama | H.264 (yuv420p) + AAC; mp4 |
| Ses seviyesi | **−14 LUFS** (YouTube) |
| Süre | hedef 30–40 sn (izin 28–55; 60 sn'yi geçmez) |
| Çekim | her satır ayrı çekim, 2–5 sn; bölüm 1'de konuşanın ağzı sesle eş (lip-sync) |
| Yazı | **altyazı yok, ekrana yazı yok** (son kare hariç). İsteğe bağlı ayrı `.srt` |
| Müzik | yok ya da YouTube Ses Kitaplığı'ndan "atıf gerekmez" bir parça, konuşurken kısık |
| Geçiş | aynı mekânda kesme ya da 0,35 sn yumuşak geçiş; bölüm 2'ye geçişte kısa karartma |

## 6. Son kare

Vakanın kapağı **A44** bulanık ve karanlık; üstünde **PARAVAN / DEDEKTİFLİK**, **"Şimdi oyna ▶"** ve
`barbarosgursu-sudo.github.io/paravan/yeni`. En az 3 sn. "Sence kim yazdı?" bu karenin üstünde söylenir.
`arac_shorts.js` bu kareyi zaten çiziyor (`shorts_ayar.json` → `son_kare`); hareketli çekimler ona eklenebilir.

## 7. Sesler (ElevenLabs)

Bir karakterin sesi **bir kez** seçilir, bütün vakalarda aynı kalır → seçilince `kaynak/shorts_ayar.json`'a yazılır
(şu an orada Edge TTS sesleri var; Eylül'e yer tutucu eklendi).

| Karakter | Tarif |
|---|---|
| **Eylül** | 16 yaşında kız; Türkçe ana dilli gibi; satır 1 ve 5 kırgın, satır 6 umutlu |
| **Cengo** | 30'ların ortası erkek; sıcak, mahalleli, hafif boğuk; satır 2 alınmış, sinirli |
| **Peri** | 30'larda kadın; kendinden emin, hafif alaycı; satır 3 meraklı |
| **Anlatıcı** | kalın, alçak, yavaş noir erkek sesi |

- Türkçe söyleyişi dinlenerek seçilir (çok dilli modelde aksan olabilir). Ses örnekleri sahibine dinletilir.
- Ücretsiz plan ticari kullanıma izin vermiyordu (9 Kasım notu) — yayından önce planın lisansına bakılır.

## 8. Deneme sırası

1. **Tek çekim:** satır 1 (Eylül, ~4 sn, dikey). Ölçüt: yüz ve saç oyundaki resimle aynı mı, ağız sesle eş mi,
   kıyafet doğru mu, fazladan nesne/kişi var mı, tarz oyunun çizgisinde mi. Sahibine göster.
2. Tutarsa satır 2 (iki kişili kare: Cengo konuşur, Eylül dinler) — iki kişide yüz tutuyor mu.
3. Sonra bütün video. Her çekim tek tek onaylanır; kayan çekim yeniden üretilir.
4. Maliyet ve süre kayda geçer (çekim başına ne tuttu).

## 9. Dosyalar

- Ara dosyalar ve videolar **depoya girmez** (`.gitignore`: `shorts/**/*.mp4`, `shorts/*/_is/`). Yer: `shorts/v6/`.
- Yöntemin notu (model, servis, ayarlar, maliyet) yeni bir `uretim/shorts_hareketli/OKUBENI.md`'ye yazılır.
- Senaryo değişirse önce `vaka6_shorts.md` düzeltilir, `node arac_shorts.js 6 --denetle` yeniden koşulur.

## 10. Açık konular

- `kanepe.mp4`'ün yöntemi (hangi model/servis) bu belgede yok — denemeyi yapan pencere yazar.
- Araç uyarıları (karar insanın): satır 3'te Peri soruyor, az önce konuşan Cengo ekranda değil (Peri Eylül'e
  soruyor; kabul edilebilir) · satır 5'te Haldun anılıyor ama ekranda değil (yalnız adı geçiyor; kabul edilebilir).
- Damga (`--onayla`) sahibi senaryoyu kontrol listesiyle okuyunca basılır.
