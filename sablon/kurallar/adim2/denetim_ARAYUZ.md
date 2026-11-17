# Denetim — ARAYUZ

Eşleme tam: `konu.tsv`'de ARAYUZ'a düşen 53 satırın 53'ü haritada; YOK / ESKIDI / CELISKI işaretli satır yok.
Sorun sayısı: **4** (biri çözülmemiş çelişki, biri anlam, biri konum, biri küçük ayrıntı).

### ARAYUZ-16 — çelişki
Ne sorun: "Peri solda, sağda **tek** konuk" kuralı her sahneye uyan genel kural gibi yazılmış. Oysa 2770 (16 Kasım 2026, daha yeni) `ekran` etiketli
vakalarda (V6, V7) Peri'siz iki konuğun karşılıklı durduğunu (Gizem ↔ Eylül), Cengo'nun konukla solda durduğunu ve tek konuğun karşısına biri
gelince sola geçtiğini kayda geçiriyor. 2770 eski kuralı (286/304/2410) açıkça iptal etmiyor; iki kural yan yana kalmalı, ama ARAYUZ-16 bu
istisnayı anmıyor. Ayrıca 304'ün "Peri ve bir konuk" ifadesi sessizce düştü (bilinçli olabilir; notta gerekçe yok).
Kaynak no: 286, 304, 2410 ↔ 2770.  Önerilen düzeltme: ARAYUZ-16'ya "eski `kime` düzeni; `ekran` etiketli vakalarda (V6, V7) yerleşim ARAYUZ-17'ye
göre: ekranda Peri olmadan iki konuk da durabilir, Cengo konukla solda durabilir" notu ekle ya da çelişkiyi `celiski_ARAYUZ.md`'ye yaz ve sahibine sor.

### ARAYUZ-12 — anlam
Ne sorun: "(Vaka 3'ten itibaren yazılır)" kaynakta yok. 3007 yalnız "Vaka 3'te yazılacak" diyor (o anki iş notu), 2577 örnek olarak
`vaka2_diyalog.md → ## ani`'yi veriyor; yani Vaka 2'de de var. "İtibaren" Vaka 1–2'yi kuraldan muaf gösterir ve aynı paragraftaki "bölüm zorunlu"
ile çelişir.
Kaynak no: 2577, 3007.  Önerilen düzeltme: parantezi "(Vaka 3 başlangıç notunda istendi: `vaka3_baslangic.md` §1; örnek Vaka 2'de)" yap ya da
kaldır.

### ARAYUZ-38 — konum (YOK sayılmalıydı ya da GOMME'ye gitmeliydi)
Ne sorun: G65'in hangi sürümünün kullanıldığı ve V6 resimlerini kimin gömdüğü arayüz kuralı değil, devir/durum bilgisi (konu GOMME ya da kural
değil). 2779 başka hiçbir haritada yok; burada kalırsa GOMME kurallarında görünmez, kurallar dosyasında da "arayüz" başlığı altında yanlış yerde
durur. Not bunu kabul ediyor ama çözmüyor.
Kaynak no: 2779.  Önerilen düzeltme: 2779'u ARAYUZ-16 (tek kişi ortada) + GOMME'ye bölerek eşle; G65/V6 kısmı devir notu ise YOK say ve GOMME
birleştiricisine bildir.

### ARAYUZ-1 — ayrıntı
Ne sorun: Kaynak "Üç kural birlikte çözüyor" diyor; yeni metin "ARAYUZ-2…5" diyerek dört kuralı (figür kilidi dahil) aynı "birini bozma"
paketine alıyor. Etkisi küçük, ama kaynağın sayısı değişti.
Kaynak no: 16.  Önerilen düzeltme: "ARAYUZ-2…4 (üç kural) birlikte çözüyor; ARAYUZ-5 figür kilidi de bozulmamalı" ya da sayıyı açıkça not et.

## Denetlenip sorunsuz bulunanlar (kısa)
- ARAYUZ-11, -32, -29'daki "kasa kalktı" güncellemeleri: CLAUDE.md'deki "kasa 16 Kasım 2026'da kalktı" ile destekli; `kasaSerit` kodda
  gerçekten boş döner (`kaynak/yeni_arayuz.js:817`). Uydurma değil.
- ARAYUZ-37'deki "AÇIK KALIR, 9 Kasım 2026" 2938'in bölüm tarihiyle tutuyor; ARAYUZ-4'teki "16 Ekim 2026" 3033'ün bölümüyle tutuyor.
- Tablet (2–6), defter (9–10), konuşma ekranı (13–15, 17–28), tema, rozet, sezon sonu, reklam kurallarında sayı/eşik/dosya adı/komut düşmesi yok.
