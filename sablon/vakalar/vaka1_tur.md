# Vaka 1 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [set|dukkan] [dogru|zayif|<şüpheli id>]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- set: Çaycıyla konuşmak | İskele ve Kemal | Bebek'teki beyaz | Setin sorumlusuyla | Serkan'ı bulmak
- dukkan: İskele ve Kemal | Serkan'ı bulmak | Çaycıyla konuşmak | Bebek'teki beyaz | Setin sorumlusuyla

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Çaycıyla konuşmak | İskele ve Kemal | Bebek'teki beyaz | Setin sorumlusuyla

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Teli Peri
- soğuk: Teli kilitte
