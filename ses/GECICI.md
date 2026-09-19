# ⚠ BU KLASÖRDEKİ SESLER GEÇİCİDİR

Bunlar gerçek efektler değil — geliştirme sırasında ses sistemini duyarak test
edebilmek için Python'la sentezlenmiş yer tutuculardır.

**Arka plan müziği yok.** Sahibinin kararı (19 Eylül 2026): oyun sessizlik ve
kısa efektler üzerine kuruldu. Sekiz müzik parçası üretilip gömülmüştü, hepsi
kaldırıldı. Gerekçe ve geri dönüş tarifi: `kaynak/ses_promptlari.md`.

## Değiştirirken

Gerçek dosyaları **aynı adlarla, `.mp3` olarak** bu klasöre koyun:

    efekt_dokun  efekt_kaynak  efekt_kilit  efekt_muhur  efekt_alev

Oyun `.mp3`'ü önce arar, bulamazsa `.wav`'a düşer. Yani `efekt_muhur.mp3`
koyduğunuz anda geçici `efekt_muhur.wav` devre dışı kalır — kodda hiçbir şey
değişmez. Beşi de tamamlandığında bu klasördeki `.wav` dosyalarını ve bu notu
silin.

`kaynak/test_ses.js` üçünü birden kolluyor: tanımlı ama çalınmayan efekt,
çalınan ama tanımsız efekt, tabloda olup dosyası olmayan (ve tersi).
Ayrıca müzik katmanının geri sızmadığını da kontrol eder.
