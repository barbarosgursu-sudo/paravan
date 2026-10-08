# 7. ÜRETİM SÜRECİ

Bir vaka formdan oynanır hâle bu sırayla gelir. **Adım atlanmaz.**

## Adımlar

| # | adım | kim | çıkış şartı |
|---|---|---|---|
| 1 | **Form** doldurulur (6. parça) | ben | formun kontrol listesi tamam |
| 2 | **Onay 1:** form | sahibi | "onay" |
| 3 | **Diyalog** yazılır (`vakalar/vakaN_diyalog.md`): her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu) | ben | otomatik denetimden geçer |
| 4 | **Veri** hazırlanır: yapı (ipuçları, olgular, Kim yaptı?) elle; sahne ve karar metni `arac_diyalog.js` ile diyalogdan | ben | otomatik denetimden geçer |
| 5 | **Görselsiz oyun turu:** yeni görsellerin yerinde yer tutucu (eski görsel ya da yazılı gri kutu); bütün yollar otomatik oynanır | ben | hata yok |
| 6 | **Onay 2 — görselsiz test:** sahibi oynar. Bakılan: hikâye anlaşılıyor mu, bulmaca çözülüyor mu, Kim yaptı? keyifli mi, espriler, süre | sahibi | notlar tek listede |
| 7 | **Hikâye düzeltmeleri** (değişiklik kuralına göre) ve tekrar görselsiz test, sahibi "tamam" diyene kadar | ben + sahibi | **hikâye donar** |
| 8 | **Görsel listesi ve promptlar** tek seferde verilir (numaralı referanslarla) | ben | — |
| 9 | **Görseller** üretilir | sahibi | — |
| 10 | **Kontrol, kesim, yerleştirme** (5. parça, kontrol listesi) | ben | her görsel gömülü |
| 11 | **Görselli oyun turu:** bütün yollar otomatik oynanır | ben | hata yok |
| 12 | **Onay 3 — görselli test:** sahibi oynar. **Yalnız görsellere** bakılır: metinle uyum, ifade, çekicilik | sahibi | notlar tek listede |
| 13 | **Görsel düzeltmeleri** | ben + sahibi | — |
| 14 | **Vaka donar.** Şablonda eksik çıktıysa şablon düzeltilir | ben + sahibi | — |

- **Görseller, hikâye donmadan (7. adım) üretilmez.**
- Görselli testte hikâye değişmez; değişecekse forma dönülür ve etkilenen görseller listelenir.
- Her adımın sonunda değişiklikler `main`'e gönderilir.

## Otomatik denetimler

Geçmeyen vaka bir sonraki adıma geçmez.

**Giriş (K17)**
- Arka plan büro.
- 15–25 replik.
- Formdaki şüphelinin adı metinde geçiyor.
- Metindeki ücret formdaki ücretle aynı.
- Bir ipucunun vereceği bilgi metinde geçmiyor (ipucu olgularının anahtar kelimeleriyle aranır).

**Hikâye**
- 3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var.
- Suçluyu kanıtlayan en az 2 ipucu yolu var.
- Hiçbir doğru kanıt çifti tek bir ipucundan çıkmıyor (kural 21c).
- Her ipucu yolunda "Kim yaptı?" ekranı çalışıyor (tam, zayıf ya da yanlış sonuç).
- Defter cümleleri suçluyu söylemiyor.
- Hak edilmemiş bilgi sızmıyor (isim, olgu, görsel).
- İpucu adındaki özel isimler, ipucu açılabilir olduğu anda oyuncunun duyduğu adlar arasında.

**Karar ve para**
- En az bir dürüst karar her yolda açık.
- Her kararın kısa sonucu (önizleme) ve her ücret kesintisinin açıklaması var (kural 22a).
- Kasa hiç eksiye düşmüyor; gider, borç, tohum yok.
- Metindeki her tutar fiyat tablosunda.

**Görsel**
- Her satırın ifadesi sözlükte ve görseli var.
- Metinde anılan nesne ya da hareket o satırda görünüyor (satır → görsel tablosu).
- Her görsel gömülü, adı doğru.

**Elle bakılanlar** (makine yapamaz): espri tutuyor mu, çekicilik seviyesi, görsel kalitesi. Girişte: suçlu dolaylı yoldan ele veriliyor mu, çekicilik anı ve espri tutuyor mu, giriş ilk gidilecek yer belli olarak bitiyor mu (Onay 2'de sahibi bakar).

## Değişiklik kuralı

Bir şey beğenilmezse değişiklik **doğru yerden** başlar:

| ne değişiyor | nereden başlar | sonra |
|---|---|---|
| Bir replik, bir ifade | diyalog | veri → denetim |
| Bir görsel | görsel | kontrol listesi → yerleştirme |
| Bir olay, şüpheli, ipucu, karar | **form** (Onay 1'e döner) | diyalog → veri → denetim → etkilenen görseller |
| Bir kural | **şablon** (sahibinin onayı) | etkilenen vakalar yeniden denetlenir |

- Veri ya da görsel, formu değiştirmeden hikâyeyi değiştiremez.
- Sahibinin oyun testi notları önce bu tabloya göre sınıflanır, sonra uygulanır.

## Süre

| adım | süre |
|---|---|
| Form + onay | yarım gün |
| Diyalog + veri + denetim | 1 gün |
| Görselsiz test + hikâye düzeltmeleri | yarım–1 gün |
| Görseller (25–35 adet) | 2–3 gün (sahibinin üretim hızına bağlı) |
| Görselli test + düzeltme | yarım gün |
| **Toplam** | **5–6 gün** |

**Vaka 1'e özel:** motor işleri (Kim yaptı? ekranı, yüzleşme, para, kapanıştaki iki hâl, yeni denetimler) bir kez yapılır: **+2 gün.**
