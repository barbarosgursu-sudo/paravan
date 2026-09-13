# ⚠ BU KLASÖRDEKİ SESLER GEÇİCİDİR

Bunlar gerçek parçalar değil — geliştirme sırasında ses sistemini duyarak test
edebilmek için Python'la sentezlenmiş yer tutuculardır. Sahne geçişlerini,
çapraz geçişi ve ritmi denemeye yarar; müzikal değeri yoktur.

Gerçek parçalar `kaynak/ses_promptlari.md`'deki sipariş metinleriyle üretilecek.

## Değiştirirken

Gerçek dosyaları **aynı adlarla, `.mp3` olarak** bu klasöre koyun:

    prolog  masa  giris  arastirma  karar  sonuc  huzun  final
    efekt_dokun  efekt_kaynak  efekt_kilit  efekt_muhur  efekt_alev

Oyun `.mp3`'ü önce arar, bulamazsa `.wav`'a düşer. Yani `prolog.mp3` koyduğunuz
anda geçici `prolog.wav` devre dışı kalır — kodda hiçbir şey değişmez.
Hepsi tamamlandığında bu klasördeki `.wav` dosyalarını ve bu notu silin.

Toplam geçici boyut: ~3 MB (12 kHz mono WAV, dikişsiz döngü).
