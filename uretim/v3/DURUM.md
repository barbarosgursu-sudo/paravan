# Vaka 3 — durum

**Aşama (8 Kasım 2026 gece): ONAY 3 DÜZELTMELERİ BİTTİ.** Listedeki her resim `onayli/`'de ve oyunda (G29 İPTAL).
Sonradan eklenen: G93 (K40k), G94 (`gizem.tabla`), G95 (A23d, dükkânın dış cephesi). Kıyafet kartları G101–G111.
Sahibi oyunu oynuyor; yeni bulgu gelirse istem `prompts/`'ta düzeltme notuyla, döngü `../dongu.sh 3`.

**Aşama (8 Kasım 2026): ONAY 3 DÜZELTMELERİ.** Sahibi Onay 3'te satır–resim uyumsuzluklarını gösterdi; kurallar
`sablon/5_gorsel_sistemi.md` C0 (SR-A…K) ve I'ya yazıldı. Kıyafet kartları G101–G111 onaylı. 56 istem hazır
(`onay3_istem.py` → `onay3_liste.tsv`, `LISTE.md` sonu): 32 yenileme (eskiler `eski_onay3/`) + 24 yeni (G69–G92).
Üretim sırası: temeller (G1, G69, G2, G3) ve bağımsız konuk figürleri → onaylanınca baş kırpıkları
(`peri_trenckot2_bas`, `peri_acik_bas`, `peri_simit2_bas`, `peri_onluk2_bas`) → ifadeler ve kareler.
Gömmeden sonra diyalog yeni anahtarlara bağlanır (set `trenckot_acik`, K40a/b, K54–K57, yeni ifadeler) — liste DEVIR.md'de.


**Aşama:** BİTTİ — 68/68 resim oyunda ve yayında (7 Kasım 2026). Sırada: Onay 3 (sahibi oynar). Masa kartları MASA_V1–V3 eklendi.

## Sahibinin bulguları kapandı (6 Kasım 23:50)

G52 (Nadide önde), G58 (iki kol; ayakkabıdaki soluk iz sahibinin onayıyla kaldı), G68 `ferruh.alingan` gömüldü; diyalog veriye
yazıldı (Ferruh suçlanınca alınmış, Gizem konuşurken Peri dinliyor, Kenan girişi, gözlük, halka). 68/68 resim oyunda.
4 yol `--hepsi` + `arac_satir_resim.js`: KONUŞAN 0; kalan EYLEM 5 / JEST 10 bayrağı küçük jest farkları (sahibine listelendi).

## Sayım (6 Kasım 22:15) — GÖMÜLDÜ

67/67 onaylı ve oyuna gömüldü (`arac_paket.js --yaz`). Saç halesi `kaynak/arac_hale.py` ile temizlendi (Peri 14, Gizem 4 figür).
Boy (yeni Peri'ye göre, gorseller.json): nadide 0.64 · ferruh 0.64 · kenan 0.66 · gizem 0.60 · sedat 0.60 · ayla 0.66 · rustem 0.63.
Portreler ve kart afişi yenilendi. Doğrulayıcı (eski + yeni) PASS, iki derleme, 27 test geçti, eski index.html aynı.
Görselli tur yapıldı (4 yol). Zemin rengi sorusu karara bağlandı: `5_gorsel_sistemi.md` H4 (Vaka 4'ten itibaren).

**Araç notu (bu bilgisayar):** `arac_yanyana.js` için `PW=D:/Yazilim/paravan/araclar/node_modules/playwright`,
`CHROME=C:/Users/BG/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe`.

**Sahibinin kararları (6 Kasım):** tarz = eski resimler (`uretim/ISTEM_KALIPLARI.md`); çekicilik ve dekolte = "dünkü ayarlar"
(§9); Peri ve Cengo'nun saçı dağınık, hale gömmede temizlenir. Hazır referanslar: `referanslar/peri_trenckot_bas.png` (G1),
`referanslar/peri_simit_bas.png` (G2). Şerit hazır.

## Hazırlanan referanslar (tamam)

`referanslar/`: peri_trenckot_bas, peri_simit_bas, peri_onluk_bas, gizem_bas, gizem_eski_bas, serit_susam_dortlu.

## Sahibinin onayladığı görsel kararlar (6 Kasım 2026)

1. ~~Peri'nin trençkotu figürlerde önü kapalı (dekoltesiz).~~ 7 Kasım'da kaldırıldı: Peri dekolteli (dünkü ayarlar). Dekolte yalnız K36, felaket (G2, G25) ve kovalamaca karelerinde.
2. ~~Gizem'in tişörtü dekoltesiz (yuvarlak yaka)~~ 7 Kasım'da kaldırıldı: Gizem dekolteli (dünkü ayarlar), göbek hafif açık; eski istemde "derin yuvarlak yaka" vardı.
3. Lacivert önlük uzun kollu (D8'deki "önlük kolu" için).
4. Badem'in rengi fıstık yeşili + yazısız badem tanesi şekli (G17, D10, K48 birbirine bağlansın diye).
5. K38 (Gizem apartman önünde) sabah; formda "gece" yazıyordu.
6. Kart afişinde Cengo havaya attığı simidi yakalamaya çalışıyor.

## Sıradaki

`vaka 3 resimlerini üret` (önce G1–G11 temelleri).

## Bekleyen

—
