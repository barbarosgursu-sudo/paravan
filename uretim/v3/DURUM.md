# Vaka 3 — durum

**Aşama:** üretim sürüyor (6 Kasım 2026).

## YARIM İŞ (6 Kasım 22:55, kullanım sınırı) — sıradaki oturum buradan devam eder

Sahibinin bulguları (telefonda): G52 Nadide toplamış görünmüyordu · Ferruh suçlanırken gülüyordu · G58 Gizem'de 3 kol ·
Gizem konuşurken Peri'nin işaret eden figürü konuşan sanılıyordu. Yapılanlar:
- G52 yeniden üretildi, ONAYLI (Nadide önde ortada). G68 `ferruh.alingan` yeni figür, ONAYLI (LISTE + vaka3_gorsel.md'ye eklendi).
- G58 3. üretim `uretilen/G58.png`: kollar DOĞRU, ama ayakkabıda soluk marka izi (swoosh, dil etiketi). Karar ver: onayla ya da
  `## Düzeltme 3` "ayakkabılar markasız" ile yeniden üret.
- Diyalog (`vaka3_diyalog.md`) düzeltildi ama VERİYE YAZILMADI: Ferruh satır 214/225 `[alingan]`, satır 278 `peri: kas`.
  Önce G68'i göm (arac_kes konuk_beyaz_delik → `figur_ferruh_alingan.webp`, gorseller.json'a `ferruh.alingan`, kanon ifadelerine
  alingan ekle), sonra `node arac_diyalog.js ../sablon/vakalar/vaka3_diyalog.md V3`, doğrulayıcı, derleme, testler.
- G52 ve G58 gömülecek (`arac_paket.js ../uretim/v3/onayli --vaka 3 … --yaz` ya da tek tek 900×1200 webp: ara_k39, ara_k45).
- Sonra 4 yolu `--hepsi` ile oyna, `node arac_satir_resim.js <dokum…> --vaka V3`, uyumsuzluk tablosunu sahibine ver.
- Yeni araç ve kural: `kaynak/arac_satir_resim.js`; uretim/CLAUDE.md madde 7 ve denetim 12; 7_uretim_sureci.md; ISTEM_KALIPLARI §10.

## Sayım (6 Kasım 22:15) — GÖMÜLDÜ

67/67 onaylı ve oyuna gömüldü (`arac_paket.js --yaz`). Saç halesi `kaynak/arac_hale.py` ile temizlendi (Peri 14, Gizem 4 figür).
Boy (yeni Peri'ye göre, gorseller.json): nadide 0.64 · ferruh 0.64 · kenan 0.66 · gizem 0.60 · sedat 0.60 · ayla 0.66 · rustem 0.63.
Portreler ve kart afişi yenilendi. Doğrulayıcı (eski + yeni) PASS, iki derleme, 27 test geçti, eski index.html aynı.
Sırada: `arac_yeni_tur.js` ile görselli tur.
Sahibinin sorusu (konuşulacak): bir sonraki vakada saç halesi çıkmasın diye figür zemin rengi.

**Boy (arac_yanyana --oran, eski oyundaki Peri'ye göre; gömmede yeni Peri'yle yeniden ölç):** Peri 1 · Cengo 1 ·
Nadide ≈0.65 · Gizem ≈0.61 · Sedat ≈0.61 · Ayla ≈0.66 · Rüstem ≈0.63.

**Araç notu (bu bilgisayar):** `arac_yanyana.js` için `PW=D:/Yazilim/paravan/araclar/node_modules/playwright`,
`CHROME=C:/Users/BG/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe`.

**Sahibinin kararları (6 Kasım):** tarz = eski resimler (`uretim/ISTEM_KALIPLARI.md`); çekicilik ve dekolte = "dünkü ayarlar"
(§9); Peri ve Cengo'nun saçı dağınık, hale gömmede temizlenir. Hazır referanslar: `referanslar/peri_trenckot_bas.png` (G1),
`referanslar/peri_simit_bas.png` (G2). Şerit (`serit_susam_dortlu.jpg`) G7 ve G8 onaylanınca yapılacak.

## Sonra yerel Claude'un hazırlayacakları

- G2 onaylanınca → `referanslar/peri_simit_bas.png` (baş kırpığı; G25, G56, G58 bekler).
- G6–G9 onaylanınca → `referanslar/serit_susam_dortlu.jpg` (G52, G67 bekler).
- G1, G3, G9 onaylanırken: dekolte GÖRÜNMEMELİ (bütün hâliyle referans olacaklar). Görünürse ret.

## Sahibinin onayladığı görsel kararlar (6 Kasım 2026)

1. Peri'nin trençkotu figürlerde önü kapalı (dekoltesiz). Dekolte yalnız K36, felaket (G2, G25) ve kovalamaca karelerinde.
2. Gizem'in tişörtü dekoltesiz (yuvarlak yaka), göbek hafif açık; eski istemde "derin yuvarlak yaka" vardı.
3. Lacivert önlük uzun kollu (D8'deki "önlük kolu" için).
4. Badem'in rengi fıstık yeşili + yazısız badem tanesi şekli (G17, D10, K48 birbirine bağlansın diye).
5. K38 (Gizem apartman önünde) sabah; formda "gece" yazıyordu.
6. Kart afişinde Cengo havaya attığı simidi yakalamaya çalışıyor.

## Sıradaki

`vaka 3 resimlerini üret` (önce G1–G11 temelleri).

## Bekleyen

—
