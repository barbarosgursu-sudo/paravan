# Vaka 4 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [soz|aksam|ilham|cozmez4] [dogru|zayif|tarik|rana]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- soz: Kuytu Kafe | Rana'nın dükkânı | Kafenin sahibi Zerrin
- aksam: Tarık Bey'le konuşmak | Şebnem Hanım | Kuytu Kafe
- ilham: Feraye'nin fal masası | Rana'nın dükkânı | Tarık Bey'le konuşmak
- cozmez4: Kuytu Kafe | Tarık Bey'le konuşmak | Kafenin sahibi Zerrin

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Kuytu Kafe | Rana'nın dükkânı | Kafenin sahibi Zerrin

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Soğusun
- soğuk: Bu sende dursun
