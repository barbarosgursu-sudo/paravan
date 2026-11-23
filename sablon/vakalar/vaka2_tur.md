# Vaka 2 — tur yolları

Görselsiz tur (`kaynak/arac_yeni_tur.js`) bu dosyayı okur. 23 Kasım 2026'da araçtaki tablolardan buraya taşındı (Barbaros:
yeni vaka aracı değiştirmesin, öbür vakaları yeniden denetletmesin). Kullanım:
`node arac_yeni_tur.js [karar_sırası] [ortu|vale|terzi|defne] [dogru|zayif|lal|tolga]`.

## yollar

Yol adı: açılacak ipuçlarının başlıkları, sırayla (`- <yol>: <başlık> | <başlık> …`).

- ortu: Lâl Hanım'ın atölyesi | Usta Gülsüm | Defne'yle konuşmak
- vale: Lâl Hanım'ın atölyesi | Sokaktaki vale | Kurtuluş'taki terzi
- terzi: Sokaktaki vale | Kurtuluş'taki terzi | Nedime provası
- defne: Defne'yle konuşmak | Nedime provası | Usta Gülsüm

## hızlı

Sonraki bir vaka incelenirken bu vaka hızlı oynanırken açılan ipuçları (ilk karar, doğru suçlama).

- Lâl Hanım'ın atölyesi | Usta Gülsüm | Defne'yle konuşmak

## kapanış

Kapanışta bağın iki hâlini ayıran satır başları.

- sıcak: Siz evlenseniz
- soğuk: Cengo kravatını çözüp
