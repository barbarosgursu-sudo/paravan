# Vaka 6 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [sofra|siparis|kagit|cozmez6] [dogru|zayif|cengo|jale]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- sofra: Haldun Bey | Atölyenin kalfası | Apartmanın kapıcısı
- siparis: Jale Hanım | Mektuplar | Eylül'ün anneannesi
- kagit: Mektuplar | Haldun Bey | Jale Hanım
- cozmez6: Apartmanın kapıcısı | Eylül'ün anneannesi | Atölyenin kalfası

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Haldun Bey | Atölyenin kalfası | Apartmanın kapıcısı

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Cengo, ben
- soğuk: Neden söylemedin
