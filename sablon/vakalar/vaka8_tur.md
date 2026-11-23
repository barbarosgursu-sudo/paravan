# Vaka 8 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [sifre|studyo|iptal|cozmez8] [dogru|zayif|nevzat|fikret]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- sifre: Nevzat Bey | Posta kutusu | Emir
- studyo: Nevzat Bey | Stüdyo | Kulis
- iptal: Posta kutusu | Fikret Usta | Kulis
- cozmez8: Fikret Usta | Emir | Kulis

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Nevzat Bey | Posta kutusu | Emir

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Cengo, ben
- soğuk: Alacağım hâlâ
