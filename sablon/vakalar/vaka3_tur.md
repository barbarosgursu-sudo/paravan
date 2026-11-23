# Vaka 3 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [kod|foto|borc|badem|cozmez] [dogru|zayif|kenan|gizem]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- kod: Susam'ın merkezi | Alarmcı Sedat | Gizem'le konuşmak
- foto: Alarmcı Sedat | Gizem'le konuşmak | Kenan'la konuşmak
- borc: Alarmcı Sedat | Un toptancısı | Kenan'la konuşmak
- badem: Kenan'la konuşmak | Kadıköy'deki pastane | Susam'ın merkezi
- cozmez: Kenan'la konuşmak | Kadıköy'deki pastane | Alarmcı Sedat

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Susam'ın merkezi | Alarmcı Sedat | Gizem'le konuşmak

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Gizem tabladan
- soğuk: Ben çıkıyorum
