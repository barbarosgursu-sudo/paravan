# 7. ÜRETİM SÜRECİ

Bir vaka formdan oynanır hâle bu sırayla gelir. **Adım atlanmaz.**

## Adımlar

| # | adım | kim | çıkış şartı |
|---|---|---|---|
| 1 | **Form** doldurulur (6. parça) | ben | formun kontrol listesi tamam |
| 2 | **Onay 1:** form | sahibi | "onay" |
| 3 | **Diyalog** yazılır: her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu) | ben | otomatik denetimden geçer |
| 4 | **Veri** hazırlanır | ben | otomatik denetimden geçer |
| 5 | **Görsel listesi ve promptlar** tek seferde verilir (numaralı referanslarla) | ben | — |
| 6 | **Görseller** üretilir | sahibi | — |
| 7 | **Kontrol, kesim, yerleştirme** (5. parça, kontrol listesi) | ben | her görsel gömülü |
| 8 | **Oyun turu:** bütün yollar otomatik oynanır | ben | hata yok |
| 9 | **Onay 2:** sahibi oynar, notlarını tek listede verir | sahibi | — |
| 10 | **Düzeltme turu** (tek tur, aşağıdaki kurala göre) | ben | denetim + tur temiz |
| 11 | **Vaka donar.** Şablonda eksik çıktıysa şablon düzeltilir | ben + sahibi | — |

- Görseller 3. ve 4. adım geçmeden üretilmez.
- Her adımın sonunda değişiklikler `main`'e gönderilir.

## Otomatik denetimler

Geçmeyen vaka bir sonraki adıma geçmez.

**Hikâye**
- 3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var.
- Suçluyu kanıtlayan en az 2 ipucu yolu var.
- Her ipucu yolunda "Kim yaptı?" ekranı çalışıyor (tam, zayıf ya da yanlış sonuç).
- Defter cümleleri suçluyu söylemiyor.
- Hak edilmemiş bilgi sızmıyor (isim, olgu, görsel).

**Karar ve para**
- En az bir dürüst karar her yolda açık.
- Kasa hiç eksiye düşmüyor; gider, borç, tohum yok.
- Metindeki her tutar fiyat tablosunda.

**Görsel**
- Her satırın ifadesi sözlükte ve görseli var.
- Metinde anılan nesne ya da hareket o satırda görünüyor (satır → görsel tablosu).
- Her görsel gömülü, adı doğru.

**Elle bakılanlar** (makine yapamaz): espri tutuyor mu, çekicilik seviyesi, görsel kalitesi.

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
| Görseller (25–35 adet) | 2–3 gün (sahibinin üretim hızına bağlı) |
| Oyun testi + düzeltme | yarım–1 gün |
| **Toplam** | **4–6 gün** |

**Vaka 1'e özel:** motor işleri (Kim yaptı? ekranı, yüzleşme, para, kapanıştaki iki hâl, yeni denetimler) bir kez yapılır: **+2 gün.**
