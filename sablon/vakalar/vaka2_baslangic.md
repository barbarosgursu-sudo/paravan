# VAKA 2 — BAŞLANGIÇ (yeni pencere için)

Tarih: 10 Ekim 2026. **Vaka 1 bitti ve kalıp oldu.** Vaka 2 aynı şablonla, aynı araçlarla,
**daha hızlı** üretilecek. Sahibi süreyi ölçüyor: Vaka 2'nin süresi, sonraki vakalar için ölçü.

## 0. Okuma sırası

1. `CLAUDE.md` (kalıcı kurallar, tuzaklar, komutlar)
2. **bu dosya**
3. `sablon/` — 7 parça, sırayla (özellikle `5_gorsel_sistemi.md` C ve F, `7_uretim_sureci.md`)
4. Örnek olarak: `sablon/vakalar/vaka1_form.md`, `vaka1_diyalog.md`, `vaka1_gorsel.md`
5. Gerekirse geçmiş: `sablon/vakalar/vaka1_gorsel_devir.md` (Vaka 1 görsel işinin tamamı)

## 1. Süre ölçümü

- **Başlangıç = sahibinin "Vaka 2'ye başla" dediği an.** Tarih ve saati aşağıdaki tabloya yaz.
- Her adım bittiğinde (özellikle her **Onay**) tarihi ve saati yaz. Sona kadar doldur.
- Sahibi sonunda bu tabloya bakacak; adım adım ne kadar sürdü görünmeli.

| adım (7. parça) | başladı | bitti | not |
|---|---|---|---|
| 1 Form | 10 Eki 16:52 (TSİ) | 10 Eki 17:02 | başlangıç = "Vaka 2'ye başla" |
| 2 Onay 1 | 10 Eki 17:02 | 10 Eki 17:23 | onay; tek ek: kadınlar en çekici hâlde |
| 3–4 Diyalog + veri + künye | 10 Eki 17:23 | 10 Eki ~17:33 | doğrulayıcı PASS; künye aracı temiz; bağ: "nikâhtan sonra" +2 (K8) |
| 5 Görselsiz tur | 10 Eki ~17:33 | 10 Eki 17:44 | araçlar V2'ye açıldı (Cengo kıyafet seti, gri arka plan/kare, tur, `test_yeni_v2.js`); 6 yol temiz; satır satır ekran denetimi, 6 düzeltme |
| 6–7 Onay 2, hikâye donar | 10 Eki 17:44 | 10 Eki 19:40 | 22 metin notu (hepsi bulanık replik; hikâye değişmedi); soğuk kapanış belirginleşti (+K32); geçici "Vaka 2'den başla" düğmesi |
| 8 Görsel listesi + promptlar | 10 Eki 19:40 | 10 Eki 19:44 | 59 görsel, `vaka2_gorsel.md`; 29 referans `vaka2_referans/` |
| 9–10 Görseller, kontrol, yerleştirme | 10 Eki 19:44 | | sahibi üretiyor |
| 11 Görselli tur | | | |
| 12–13 Onay 3, düzeltmeler | | | |
| 14 Vaka donar | | | |

## 2. Vaka 1'de zaman nereye gitti (tekrarlanmayacak)

Vaka 1'de vaktin çoğu **Onay 3'te**, sahibinin oynarken tek tek bulduğu görsel sorunlarına gitti.
Hepsi baştan önlenebilirdi:

| sorun (Vaka 1) | Vaka 2'de nasıl önlenir |
|---|---|
| Cengo konuğa konuşurken Peri'ye bakıyor gibi | diyalogda her Cengo satırı için kime konuştuğu belli; `{kime: peri}` |
| Konuk Peri'ye konuşurken Cengo karşısında | konuk satırında `{kime: peri}` |
| İki Cengo aynı ekranda | görselli turda satır satır denetim (aşağıda §4) |
| Dinleyenin yüzü bir önceki satırdan kalmış (kızgın Peri) | her yeni olay/kişi girişinde `{peri: …}` / `{cengo: …}` |
| Kızgın konuk sahneye "zaten kızgın" giriyor | anlatı satırında `{mekan}`, konuk ilk konuştuğu satırda `{gir: x, gi: …}` |
| Uzun konuşma hep aynı arka planda | ≈15 satırı geçen konuşmaya 2. açı; durum değişince (kapı açıldı, manto asıldı) yeni arka plan |
| Kovalamacada karelerin sırası/kişisi yanlış | her vuruş bir kare, metinle aynı sıra; sahneden ayrılan figür karede yok (`{gizle: cengo}`) |
| Islanan/kirlenen Peri sonraki satırda kuru | durum sürekliliği: ara hâl figürü baştan listede |
| Metin bir nesne anıyor, ekranda yok (telefon, istavrit, tel) | satır → görsel tablosunda her nesne için figür ya da kare |
| Figürü olmayan konuşan (boyacı, asistan) | ya figür ya o satırda ilgili kare; iki boş figür kalmaz |
| Yanlış kıyafetle sahne (önlüklü Kemal borç istemeye) | konuk her sahnede o sahneye uygun hâlde; gerekirse ikinci kıyafet |
| Saçta grilik (kesim halesi) | her figür gönderilmeden önce saç kenarı büyütülüp temizlenir (§4) |
| Konuk çok büyük/küçük | ekranda Peri'nin yanında boy ayarı (`boy`), sahibine göstermeden önce |
| Görsel oranı karışık | her prompta oran satırı (figür 4:5, sahne 3:4) |
| Künye boş kaldı | künye veri adımında yazılır (adım 4), sonradan değil |
| Promptlar mekânla çelişiyor (olmayan askı, yanlış masa) | prompt yazmadan önce referans görsele bakılır; mekândaki eşyalar adıyla sayılır |
| Referans dosyaları sonradan istendi | her prompt **referans dosyalarıyla birlikte** gönderilir (`referans/G<n>-<sıra>_ad.png`) |

## 3. Adım adım ne yapacaksın (7. parçaya ek)

**Form (adım 1):** 6. parçanın bütün başlıkları + **künye tablosu** + yeni yan karakterlerin
görünüş önerisi (benzerlerinden ayrışsın). Görünüş, formla birlikte Onay 1'de onaylanır —
görsel aşamasında ayrıca sormaya gerek kalmaz.

**Diyalog (adım 3):** her satır için baştan yaz: konuşan, ifade, **kime** (konuk varsa), dinleyenin
yüzü değişiyorsa işareti, arka plan/açı, kare. Satır → görsel tablosu diyalogla birlikte biter.
Kontrol sorusu her satırda: "Ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu, metnin
andığı nesne görünüyor mu?"

**Veri (adım 4):** `arac_diyalog.js <dosya> V2`; künye `yeni/kisiler.json`;
`node arac_kunye_denetim.js yeni` temiz.

**Araçları Vaka 2'ye aç (adım 5'ten önce, ~1 saat):**
- `arac_yeni_tur.js` şu an yalnız Vaka 1'i oynuyor → Vaka 2'yi de oynasın.
- Vaka 1 → Vaka 2 geçişini dene (V1 bitince V2 açılıyor mu, kayıt doğru mu).
- `test_yeni_v1.js`'in Vaka 2 kardeşi gerekiyorsa yaz.

**Görsel listesi (adım 8):** tek seferde ve EKSİKSİZ: figürler (her ifade), konuk ikinci hâlleri,
ara kareler (kovalamacanın her vuruşu), ek açılar, durum hâlleri (ıslak/kirli), nesneli pozlar.
Her prompt: kalıp (5. parça D) + oran satırı + numaralı referans dosyaları hazır.

**Görsel gelince (adım 10):** sahibine göndermeden ÖNCE: kes, saç kenarını büyütüp temizle (yalnız
baş kutusu; gümüş nesneleri koru), ekranda Peri'nin yanında boyuna bak, yazı/harf tara, ilgili
satırda ekran görüntüsü al. Sahibine yalnız oyundaki son hâli gönder.

## 4. Görselli tur denetimi (adım 11) — her sahne, her satır

- Ekranda kaç figür var, aynı figür iki kez var mı?
- Konuşan kim, karşısında kim; kime konuşuyorsa o mu karşısında?
- Dinleyenin yüzü bu satıra uyuyor mu (önceki satırdan kalmış mı)?
- Metinde anılan nesne/hareket görünüyor mu?
- Arka plan/açı hikâyedeki duruma uyuyor mu (kapı açık mı, kim ayrıldı)?
- Saç kenarı temiz mi, boy doğru mu?
- Yer etiketi doğru mu (ara sokak / iskele)?

## 5. Sahibiyle çalışma biçimi

- Çok basit, kısa Türkçe; bir adımda dur, eksikleri tek tek konuş.
- Kanona ekleme → önce sor (nereye ne). Metindeki küçük netleştirmeleri önerip uygula.
- Commit doğrudan `main`'e ve oturumun dalına. Her değişiklikten sonra: doğrulayıcı, iki
  derleme (eski `index.html` md5 aynı), testler, gerekiyorsa tur.
