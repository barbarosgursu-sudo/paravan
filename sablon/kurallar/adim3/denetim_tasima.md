# İkinci göz — taşıma denetimi (20 Kasım 2026)

Denetlenen: `tasima.md` kaydı; `KURALLAR.md`, `FIKIR_HAVUZU.md`, `3_kanon_kaydi.md`, `uretim/CLAUDE.md` farkları. Git komutu
çalıştırılmadı (yalnız `diff`/`show`); Shorts dosyalarına dokunulmadı. Değiştirilen: yalnız 3. maddedeki kanon düzeltmesi (aşağıda).

## Sonuç: GEÇER — iki küçük düzeltme önerisiyle (4 ve 5. bulgu sahibine)

## 1. Metin aynı mı — 286 satırın hepsi (programla) + 120'den fazlası gözle

- Her `(k:id)` satırı `kayit_aday.tsv`'deki asıl metinle harf/rakam düzeyinde karşılaştırıldı (biçim işaretleri, tablo çizgileri,
  satır sonları dışarıda): **286/286 aynı, düşen ayrıntı yok.** İki PowerShell betiği (1ca20d93c4, d2d69b7389) satır satır aynı.
- Asıl metne EK yapılmış yalnız iki satır var, ikisi de sahibinin onayıyla (4b, 4c): 929dc73367 (YAPI-13, "Cengo da şüpheli olabilir…")
  ve 06c17df589 (SUREC-14, "Yeni vakada kapı kurulur…"). Asıl kayıt ikisinde de "Asıl kayıt:" diye tam duruyor.
- Kaynak etiketleri (`[belge › bölüm]`) 212 satırda bölüm adıyla eşleşiyor (25'inde yalnız `*` biçim işareti düşmüş, sorun değil).

## 2. Yer doğru mu

Kurallara giden 162 satırın hepsi başlıklarıyla birlikte okundu. Büyük çoğunluğu yerinde. Sorulan beşi:

- **209f3d58fe → SUREC-14:** doğru. Satır V7'nin adım 5 kaydı (araçlara ekleme + üç tarama + kapı); SUREC-14 adım 5'in kendisi.
- **e96885132b → YAPI-37:** doğru. "Fark küçük, testle korunur (`test_borc.js` kardeşi)" YAPI-37'nin `test_borc` cümlesine bağlı;
  YAPI-29 yalnız "en az bir dürüst seçenek" diyor.
- **434bcb3027 → KOD-36:** kabul edilir. Daha iyi yer yok ("motorda vaka adı yok" başka kuralda geçmiyor).
- **c19343d93a → GOMME-3:** kabul edilir. Grok boyutu/kırpma kısmı GOMME-3'ün kendi cümleleriyle aynı olay; kesim profili ve
  çorap bandı ayrıntısı da aynı satırda, kaybolmuyor.
- **c9e79469d0 → SATIR-7:** yer doğru, ama yalnız başına "küçük fark kabul" emsali gibi okunuyor; DENETIM-51 ("tutarsızlık görülürse
  gömmeden önce sorulur") ile ilişkisi yazılı değil. Sahibine sorulmalı (uygulayıcı da sormuş).

Gözle bulunan yer/anlam sorunları (hepsi sahibine; ben değiştirmedim):

1. **KAR-33 ← f470d09d74 (90.000 ₺ kira borcu, "taksit ay sonu giderine eklenir")** kuralın kendisiyle çelişiyor (KAR-33: "Yalnız
   komedi: parayı etkilemez"; kasa da kalktı). Rakam oyunda yok, taslaktan. Kural bloğunda "Bilgi" olarak durunca geçerli sanılabilir.
   Öneri: FIKIR'e ya da GECMIS'e (eski plan); en azından "(eski, geçersiz)" notu.
2. **KAR-3 ← a60ae9675b ("Açık: avukatın Cengo'yu nereden tanıdığı")** eskidi: kanon 19 Kasım'da kapattı (Nihat Kora Cengo'yu tanımaz).
   Öneri: GECMIS ya da "(kapandı, bkz. kanon Avukat)" notu.
3. KAR-13 ← ea8b3b23a3 ("arayan yeni bir müşteridir, Sezon 2'nin kapısı") taslaktan plan; kuralın gövdesi zaten "V8 telefon" diyor.
   Kaynak etiketi taslak olduğunu gösteriyor; düşük risk, not olarak.
4. KOD-35'teki yeni cümle ("Yeni vakada kapının kurulumu … bkz. SUREC-14") `- *Ders:*` maddesinin ARKASINA, boş satırsız yazıldı;
   Markdown'da o maddenin devamı gibi görünür. Kuralın gövde paragrafına (Ders maddesinin önüne) alınmalı.
5. `tasima.md` sayıları artık KANON 4 / FIKIR 105 (aşağıdaki düzeltme yüzünden); kayıt güncellenmeli.

## 3. KANON'a giden 5 satır

| id | kaynak | oyunda/kanonda var mı | karar |
|---|---|---|---|
| aac3c6315e | TASLAK_tekrar_onleme (dönen figürler) | Hepsi kanonun önceki hâlinde var: Gizem, ev sahibi, avukat V8, Hilmi Bey, Kadir (Cengo satırında "çaycısı Kadir'i tanır"), takvim V6/V7/V8 | KALIR (yeni gerçek yok; tekrar) |
| 74fdf20bb1 | YENI_OYUN_SEZON Sahne 3 | `acilis.json`: "Tel lazım mı?", "Kilidi iki saniyede açıyorsunuz" | KALIR |
| 6a8b4f42c2 | 5_gorsel_sistemi (sahibinin seçtiği ölçü, taslak değil) | V3'te bej trençkot oyunda; boy, onaylı resmin ölçüsü | KALIR |
| 6b9a037c64 | YENI_OYUN_SEZON Sahne 1 | `acilis.json`/`YENI_VAKA_1.md`: "Evden çıkardığı tek şey, üstündeki manto"; kanonda "Kırmızı manto" | KALIR |
| **641c9f45bc** | YENI_OYUN_SEZON Sahne 1 | Kısmen: çay ("Önce çayınızı için"), son kalem taç, çekişme oyunda; ama **"O koltuk İtalyan, dikkat" oyunda YOK** (oyunda "O koltukta üç evlenme teklifi aldım") | **ÇIKARILDI → FIKIR** |

Yapılan düzeltme: 641c9f45bc `3_kanon_kaydi.md`'den silindi; `FIKIR_HAVUZU.md`'de yeni başlık "Açılış: ilk taslak (kanon değil; yazılan
açılış `kaynak/YENI_VAKA_1.md` …)" altına aynı metin ve `(k:641c9f45bc)` ile kondu; `kayit_sinif.tsv`'de hedef KANON → FIKIR, not
"ikinci göz, taşıma denetimi; önce: BILGI KANON".

## 4. GECMIS'te kalan 250 satır

Hepsi tarandı. Çoğu ayraç, tablo/alt başlık, belge bandı, cevaplanmış soru (karar kuralda), yapıldı notu, eski ekonomi/kasa, eski
maliyet hesabı, V1/V2/V4/V6 ilk taslakları. **Kaçan ders bulunmadı.** Açık kalan iki soru uygulayıcının listesinde zaten var:
reddedilen seçenekler (8) için ayrı "reddedilenler" listesi istenir mi; V1–V6 ilk taslaklarının kullanılmayan parçaları havuza girsin mi
(V3/V5 Columbo taslakları FIKIR'de, öbürleri GECMIS — tutarsız görünüyor, sahibinin kararı).

## 5. Kural düzeltmeleri

- **SUREC-35:** doğru. `vaka6/7/8_okuma.md` başındaki cümle ve `DEVIR.md` satır 632 ("4 satır eklendiği için numaralar 51'den sonra
  kaydı") ile tutuyor; eski düzen kuralın sonunda olduğu gibi duruyor. 5691d10441'in "kanon ortağın önünde değildi" yarısı SUREC-16'da
  zaten var.
- **YAPI-13:** doğru. `vaka6_diyalog.md`'de `## sahne yuzlesme_cengo` var; yeni gerçek yok.
- **SUREC-14:** doğru. `arac_kapi.js` satır 89: YOLLAR'da vaka yoksa "yolları yok" → `bitir()`.
- **KOD-35:** içerik doğru, yeri kusurlu (bkz. 2. bölüm, madde 4).

## Sayımlar (düzeltmeden sonra)

```
node sablon/kurallar/adim3/tasima_say.js
{"GECMIS":250,"BILGI-VAR":42,"DERS-VAR":60,"DERS":72,"BILGI":214,"YERINDE":201} hata: 0
cd sablon/kurallar && node arac_kurallar.js say
{"ham_kayit":3585,"kural_kaydi":1725,"karsilik":1697,"YOK":17,"ESKIDI":11,"birlesen":23,"kural_basligi":687} hata: 0
```
