# İkinci göz: Adım 3 uygulamasının denetimi (20 Kasım 2026)

Girdi: `git diff KURALLAR.md` (HEAD 6146bd5'e karşı), `SORULAR.md` (A 21 + B 7, onaylı), `tekrar_karar.md`, `denetim_tekrar.md`,
`uygulama.md`. Yöntem: eski ve yeni dosya kural kural (`#### KOD` blokları) ayrıştırıldı, değişen her blok eski hâliyle yan yana okundu.
Hiçbir dosya değiştirilmedi; bu rapor dışında yazılan yok.

## Sonuç: GEÇER — iki küçük düzeltme ve üç not ile

## 1. Farktaki her değişiklik listede mi?

Değişen blok 52: 23 yönlenen (stub) + 21 ANA (G1–G16, E1–E5; E3'te ANA ISTEM-54) + 7 çelişki (SUREC-31, KOD-78, KOD-44, ISTEM-25,
DENETIM-37, ISTEM-7, ARAYUZ-36) + 1 atıf (SATIR-28). Blok dışı değişiklik yalnız konu tablosu (sayılar + "Birleşip başka kurala yönlenen: 23").
Listede olmayan kural değişikliği yok. Konu sayıları stub'larla tek tek tuttu (TON −4, KAR −1, SINIR −1, BILGI −1, YAPI −2, SEZON −2,
SUREC −2, SATIR −3, ISTEM −1, DENETIM −1, KOD −3, ARAYUZ −2; toplam 664). `node arac_kurallar.js say` → hata 0, birlesen 23.

- **Not 1 (kural dışı değişiklik):** `arac_kurallar.js` da değişmiş (`say`e birleşme denetimi: hedef var mı, zincir yok mu, birleşenin her
  kaynak numarası ANA'da mı). Onaylı listede değil ama kural metni değil, araç; zararsız ve yararlı. `uygulama.md`'deki "Yalnız `KURALLAR.md`
  değişti" sözü bu yüzden yanlış — düzeltilmeli ya da araç değişikliği ayrıca anılmalı.
- **Not 2 (sayı):** SORULAR "687 → 664" diyordu (A'da 23 kod yönlenir varsayımıyla). Uygulamada E3 (SUREC-31↔ISTEM-54) stub değil
  madde taşıma oldu, buna karşılık B-4 DENETIM-45'i yönlendirdi; sonuç yine 664. E3 kararı doğru: SUREC-31'de API ve kıyafet maddeleri
  ayrı iş yaptırıyor, tümüyle yönlenemezdi; ızgara maddesi ISTEM-54'te aynı sözle var ("bir istekte birkaç ifade", "çözünürlük düşüyor"),
  kaynak 732 eklendi. Sahibine bir satırla söylenmeli: "SUREC-31 yönlenmedi, yalnız ızgara maddesi ISTEM-54'e atıf oldu."

## 2. Birleşmelerde ayrıntı kaybı (cümle cümle)

| grup | sonuç |
|---|---|
| G1 KAR-6 ← SINIR-4 | GEÇER (kural 15b, 10 Eki/17 Eki V3/6 Kas, her resimde, dekolte, Gizem, kıskançlık, adım 8) |
| G2 TON-8 ← SATIR-14 | GEÇER (kural 4a, depo örneği, "nereden biliyoruz?", SR-H) |
| G3 SUREC-27 ← KOD-32 | GEÇER (`V5 40`, 7. parça adım 5 ve 14, "Test değil, araç.") |
| G4 ARAYUZ-37 ← SUREC-42 | GEÇER (düğme metni, 16 Eki 20:20, Vaka 1 dahil, açılış atlanır, kendiliğinden çıkar, yayından önce false, Vaka 2 kaydı) |
| G5 RAF-111 ← YAPI-41, BILGI-21 | GEÇER (hepsi; "(oyun not vermez)" dahil) |
| G6 KAR-22 ← SEZON-22 | GEÇER — ikinci gözün düzelttiği sırayla |
| G7 BILGI-7 ← ARAYUZ-12 | GEÇER |
| G8 ISTEM-51 ← SATIR-27 | GEÇER (iki tarih, iki kapsam, SR-M notu) |
| G9 SATIR-35 ← SEZON-24 | GEÇER ("(SATIR-35)" kendine atıf doğal düştü; SEZON-22 → KAR-22) |
| G10 YAPI-17 ← TON-17 | GEÇER — düzeltilmiş hâliyle ("Vaka 4'te de geçerli" başta) |
| G11 DENETIM-30 ← SATIR-29 | GEÇER |
| G12 KAR-8 ← TON-18, TON-20 | GEÇER (öneri işareti eklenen maddede) |
| G13 KAR-9 ← TON-19 | GEÇER (öneri işaretli; başlık cümlesi gövdede) |
| G14 KOD-3 ← SUREC-9 | GEÇER — düzeltilmiş son cümle, md5 notu |
| G15 YAPI-40 ← KAR-20 | GEÇER |
| G16 ARAYUZ-8 ← KOD-31 | GEÇER |
| E1 KOD-21 ← ARAYUZ-27 | GEÇER |
| E2 RAF-65 ← YAPI-47 | GEÇER (5–7 paragraf, yanıltan izler, §2 Gerçek, reklamla açılır, `YENI_OYUN_CERCEVE.md`) |
| E3 ISTEM-54 ← SUREC-31 maddesi | GEÇER (bkz. Not 2) |
| E4 GOMME-28 ← ISTEM-57 | GEÇER |
| E5 ARAYUZ-32 ← KOD-92 | **DÜZELT (küçük)** — aşağıda |

**E5 düzeltme:** KOD-92'de "Sahibinin kuralı: önce resim, yazı az; **girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`)**"
tek cümleydi; yeni ARAYUZ-32'de "Sahibinin kuralı: önce resim, yazı az." ayrı, ilk cümle sözü iki paragraf aşağıda ve "sahibinin kuralı"
işaretsiz kaldı (karar notu kaybı). Ayrıca oradaki cümle iki iki noktayla zor okunuyor. Öneri:
> Sahibinin kuralı: önce resim, yazı az; girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`).
ve aşağıdaki satır eski hâline döner: "`giris` varsayılanının ilk cümlesi paylaşım mesajına girer: sızıntısız ve tek başına anlaşılır olsun."

## 3. Çelişki önerileri

| # | sonuç |
|---|---|
| B-1 SUREC-31 | GEÇER. "görsel sayısı azaltılmaz" silindi; bilgi SATIR-35'te tarihli kayıt olarak duruyor. Sapma (not SEZON-24 yerine **SATIR-35**) doğru: SEZON-24 artık stub, atıf ANA'ya gider. |
| B-2 KOD-78 | GEÇER (öneri sözüyle aynı yönde; Adım 4 notu) |
| B-3 KOD-44 | GEÇER ("V1–V5") |
| B-4 ISTEM-25 / DENETIM-45 | GEÇER ("orijinal istemle", "Grok da reddederse sahibine", "kendiliğinden yumuşatılmaz"; kaynak 3059 ANA'da) |
| B-5 DENETIM-37 | GEÇER, **not ile** (aşağıda) |
| B-6 ISTEM-7 | GEÇER (satır aynen, "Kayıt (artık geçerli değil; …, GOMME-16)" öneki) |
| B-7 ARAYUZ-36 | GEÇER ("Android'de de ilk iki vaka reklamsız (RAF-48)"; RAF-48 metniyle uyumlu) |

- **SINIR-4 kaynak satırından "KAR-6"nın çıkması:** doğru. Bilgi stub'ın "→ KAR-6" satırında; kaynak satırında kalsaydı yeni `say`
  "6"yı kaynak numarası sanıp hata verirdi (araç kaynak satırındaki bütün rakamları alıyor).
- **B-5 yorumu ("başka profil dene" çıktı, eskisi kayıtta):** anlamca doğru — o adımın seçenekleri (`konuk` ↔ `konuk_beyaz_delik`) zemine
  göre profil seçimiydi ve 17 Kasım (soru 8) ile kalktı; bugün profil yalnız çerçeve verdiğinden başka profil kesimi düzeltmez
  (`arac_kes_yz.py` profili yalnız `profil_cerceve` için kullanıyor — kodda doğrulandı). Eski cümle tam hâliyle "(eski: …)" içinde, kayıp yok.
  Not: "başka profil dene"nin düşmesi onaylı öneride adıyla yazmıyordu, uygulayıcının çıkarımı; sahibine bir satırla söylenmeli.
  (Kapsam dışı yan bulgu: GOMME-20'nin başlığı hâlâ "kesim profili zemine göre" diyor, gövdesi tersini — Adım 3'ün sonraki geçişine.)

## 4. Birleşen koda kalan atıf

Yok. 23 stub kodunun her biri `KURALLAR.md`'de yalnız kendi başlığında geçiyor (grep). SATIR-28 → ISTEM-51 / DENETIM-30, SATIR-35'te
KAR-22, SUREC-31'de SATIR-35 doğru. Kurallar klasörünün öbür .md'lerinde yalnız `PLAN.md` satır 27 iş tarifi olarak SEZON-24'ü anıyor
(atıf değil, plan sözü). Zincirli birleşme yok (`say` denetliyor).

## Düzeltilecekler (özet)

1. ARAYUZ-32 — "girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`)" yeniden "Sahibinin kuralı:" cümlesine bağlanmalı.
2. `uygulama.md` — "Yalnız KURALLAR.md değişti" yanlış; `arac_kurallar.js` `say` değişikliği anılmalı.

Sahibine bildirilecek (düzeltme değil): SUREC-31 yönlenmedi (E3 madde taşıma); B-5'te "başka profil dene" adımı düştü (kayıtta).
