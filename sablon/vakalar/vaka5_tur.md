# Vaka 5 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [vapur|iskele|usta|cozmez5] [dogru|zayif|kadir|nedim]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- vapur: Çaycı Kadir | Vapurun üst güvertesi | Kadıköy iskelesi
- iskele: Nedim Bey | Kadıköy iskelesi | Vapurun üst güvertesi
- usta: Muammer'in dükkânı | Deri ustası | Çaycı Kadir
- cozmez5: Vapurun üst güvertesi | Kadıköy iskelesi | Muammer'in dükkânı

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Çaycı Kadir | Vapurun üst güvertesi | Kadıköy iskelesi

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Islaksın
- soğuk: Bu sana. Martılar
