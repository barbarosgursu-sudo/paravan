# Taşıma — kayıt satırları hedeflerine (20 Kasım 2026)

Sahibinin 20 Kasım onaylarıyla yapıldı (1–6). Git komutu çalıştırılmadı; Shorts dosyalarına dokunulmadı.
Program: oturumun geçici klasöründeki `tasi.js` (depoya girmedi); sayım `node sablon/kurallar/adim3/tasima_say.js`.

## Sonuç

```
node sablon/kurallar/adim3/tasima_say.js
{"GECMIS":250,"BILGI-VAR":42,"DERS-VAR":60,"DERS":72,"BILGI":214,"YERINDE":201} hata: 0
cd sablon/kurallar && node arac_kurallar.js say
{"ham_kayit":3585,"kural_kaydi":1725,"karsilik":1697,"YOK":17,"ESKIDI":11,"birlesen":23,"kural_basligi":687} hata: 0
```

Sınıflar (839 satır): önce GECMIS 429 · DERS-VAR 97 · BILGI-VAR 66 · DERS 55 · BILGI 192 →
şimdi **GECMIS 250 · YERINDE 201 · DERS-VAR 60 · BILGI-VAR 42 · DERS 72 · BILGI 214**.

Taşınan 286 satır (DERS 72 + BILGI 214):

| hedef | satır | nereye |
|---|---|---|
| kural kodu | 162 | `KURALLAR.md`, 79 kuralın bloğunda, `*Kaynak:*` satırından hemen önce |
| FIKIR | 104 | yeni `sablon/FIKIR_HAVUZU.md` (153 satır, 13 başlık) |
| URETIM | 15 | `uretim/CLAUDE.md` sonunda yeni "Taşınan bilgiler (20 Kasım 2026)" bölümü (2 alt başlık) |
| KANON | 5 | `sablon/3_kanon_kaydi.md` (Kişiler, Nesneler, Sabit sezon hikâyesi tablolarının altı) |

Sınıf değişimleri (önceki → şimdiki):

| değişim | satır |
|---|---|
| GECMIS → YERINDE (başlangıç dosyaları 144, `8_shorts.md` 2) | 146 |
| DERS-VAR/BILGI-VAR → YERINDE (başlangıç 44, `8_shorts.md` 1) | 45 |
| BILGI → YERINDE (başlangıç 9 — V2 süre satırları ×6, V3/V5/V6 süre toplamı; `8_shorts.md` 1) | 10 |
| GECMIS → BILGI FIKIR | 22 |
| BILGI → BILGI FIKIR (önce SEZON-x / YAPI-3 hedefliydi) | 82 |
| GECMIS → DERS/BILGI kural (ikinci gözün yükselttikleri) | 11 |
| DERS-VAR/BILGI-VAR → DERS/BILGI kural (ikinci göz: yanlış ya da kısmi VAR) | 16 |
| DERS/BILGI hedef düzeltmesi (ikinci göz) | 6 |

YERINDE toplamı 201 = `vaka2…7_baslangic.md` 197 + `8_shorts.md` 4.

## 1. İkinci gözün düzeltmeleri (`denetim_kayit.md`) — hepsi işlendi

Not sütununa "ikinci göz: …" yazıldı.

- **GECMIS → yükselen:** 929dc73367 → YAPI-13 (4b), 06c17df589 → SUREC-14 (4c), 029a998c5d → SUREC-15, 34a487a69c → SATIR-21,
  c9e79469d0 → SATIR-7, 31b0e7a581 → SEZON-7, c19343d93a → GOMME-3, 434bcb3027 → KOD-36, bfcbc735ee → SUREC-34,
  8c84b80519 → SEZON-9 (DERS; "5–20 bin" SEZON-9'da yazmıyor, o yüzden DERS-VAR değil DERS), 7e16212aad → SATIR-35.
- **Başlangıç dosyasında olduğu için taşınmayanlar (YERINDE, onay 1):** V4 süre satırları e4bcfa1e27, 1828d4530e, 24d1f334cf, 2cea0bfc65;
  V6 Codex süreleri 05ebd9184d, 7dd9142ea4; V7 süre satırları 26c14d892a, 48e4d7d162, b0fe8f55fb; 8fbc908280 (V6 Parti 1 süresi;
  SR-M yarısı zaten SATIR-11'de). Dosyalar yerinde kaldığı için ölçümler kaybolmuyor.
- **Yanlış VAR:** 465321f998 → DENETIM-42 (3. ret kuralının kanıtı), 5691d10441 → SUREC-35, e9f4b3cbe7 ve e60b9134cd → SUREC-30,
  4915076b46 → ISTEM-56.
- **Kısmi VAR → DERS/BILGI (eksik kısım taşınsın):** 43270ca92b → DENETIM-28, 2dd102a3ff → SUREC-16, e3809c13ab → YAPI-39,
  8ea4cbae96 → SUREC-32, 48cfdb87fc → KAR-1, 209f3d58fe → **SUREC-14** (denetim SUREC-27 diyordu; eksik kalan "yeni vakayı araçlara
  ekle" adım 5'in işi, sızıntı yarısı SUREC-27'de zaten var), d7b58c2bf4 → SEZON-9, 9856ceeba3 ve c91f38eb7a → SEZON-16,
  e96885132b → **YAPI-37** (YAPI-29 yerine; "fark küçük, testle korunur" ekonomi kuralına daha yakın), e515487396 → SUREC-22.
- **Hedef düzeltmeleri:** 3d6b32aaa5 → SATIR-20, f4468f331e → SUREC-25, d9ac408c41 → YAPI-10, a54e8a287c → TON-14,
  cb71d33700 → CODEX-13, 9134389f93 → YAPI-37. (f0d33f7de0 ve üç kardeşi için önerilen SEZON-2 yerine FIKIR'e gittiler.)

## 2. Başlangıç dosyaları ve 8_shorts.md (onay 1)

`sablon/vakalar/vaka2…7_baslangic.md` ve `sablon/8_shorts.md` satırları YERINDE; hedef sütunu (VAR ise kural kodu) korunarak not
sütununa "yerinde kalır (önce: …)" yazıldı. **Başka vakaları da ilgilendiren 39 satırın kopyası taşındı** (DERS/BILGI kaldı, notta
"kopyası taşındı"):

- dersler/genel yöntem (32): 929dc73367, 06c17df589, 029a998c5d, 34a487a69c, c9e79469d0, 31b0e7a581, c19343d93a, bfcbc735ee,
  e9f4b3cbe7, e60b9134cd, 43270ca92b, 8ea4cbae96, 48cfdb87fc, 209f3d58fe, e515487396, 3d6b32aaa5, ae3300f00f, 8acc86459c,
  f4468f331e, 1362873514, a900914fa5, 3ac136bebe, cd8610b376, 3aa52d436b, b306415f99, 763048e1fb, 59f1f482bc, e3e5cd9628,
  280e38c738, f3b38418a1, 1c22a8bb57, 040e8bfbf2 (bunların bir kısmı zaten DERS/BILGI'ydi);
- Vaka 7'nin bırakılan planı (7, FIKIR'e): 962c44ffa3, 84969bee69, dbab0d56ca, 4133621de0, a8c3848365, bf48aaf3eb, 32e00ff73a.

Yerinde kalan (kopyalanmayan) DERS/BILGI'ler yalnız o vakanın süre sayılarıydı: V2'nin 6 süre satırı (5d9d45eab2 … 865e7b0b24),
V3 3cdf8d6543, V5 c1e5dcb7e1, V6 d09134c33c.

## 3. Fikir havuzu (onay 2) — `sablon/FIKIR_HAVUZU.md`

Başlık + "Yeni vaka yazarken seçenek kaynağı; kural değildir, kanon değildir." 13 başlık: vaka seçenekleri, müşteri tipleri, şüpheliler,
dönen figürler, sezonun ipliği, semtler/çevreler, yeni oyun biçimleri, ortağın onaylanmamış biçim notu (ters vaka / saatli / yalan bulma /
kılık), benzer oyunlar araştırması, Cengo'nun seçilmeyen sırları, ters vaka ilk taslakları (V3, V5), Vaka 7 ilk taslağı ve bırakılan plan,
Vaka 8 ilk taslağı. Hepsi sınıf BILGI, hedef FIKIR; notta "önce: …" eski sınıf/hedef duruyor.

## 4. Kural düzeltmeleri (onay 4)

- **a. SUREC-35:** başlık "Ortağa cevap: diyalog dosyasının satır numarası"; kural artık `vakaN_diyalog.md` dosyasının satır numarası
  (dayanak: `vakaN_okuma.md` başındaki cümle, `kaynak/DEVIR.md` 12 Kasım Vaka 5 kaydı — "4 satır eklendiği için numaralar 51'den sonra
  kaydı"). Eski "sahne içinde 1'den" düzeni kuralın sonunda "(eski, Vaka 5'e dek: …)" diye olduğu gibi duruyor. 5691d10441 aynı kurala Ders.
- **b. Cengo şüpheli olabilir:** YAPI-13'e (Kim yaptı? ekranı) Bilgi satırı, asıl kayıt metniyle (k:929dc73367). "yüzleşme yolu `cengo`"
  sözü kök CLAUDE.md'deki Vaka 6 tur yollarından (`[dogru|zayif|cengo|jale]`); yeni gerçek değil.
- **c. Kapı kurulumu:** SUREC-14'e (adım 5) Ders satırı (k:06c17df589), V7 kaydının asıl metniyle; KOD-35'e "bkz. SUREC-14" cümlesi.
  "Yol yok deyip durur" `kaynak/arac_kapi.js` satır 89 ile tutuyor ("YOLLAR tablosunda bu vakanın yolları yok" → `bitir()`).
- Yeni kural numarası açılmadı; `KURALLAR.md` başındaki kural sayısı tablosu değişmedi.

## 5. Yazım biçimi (onay 3) — yorumlarım

- Metin kısaltılmadı: `kayit_aday.tsv`'deki asıl metin olduğu gibi, satır sonları boşlukla birleşti.
- Her satırın başına **kaynak etiketi** kondu: `[<belge> › <son bölüm başlığı>]` (vaka, tarih ve bağlam kaybolmasın diye; örn.
  "[V2 başlangıç › 1. Süre ölçümü]"). Yalnız FIKIR'deki `TASLAK_tekrar_onleme.md` satırlarında yok (başlık zaten bağlamı veriyor).
- Tablo satırları hücreleri " · " ile ayrılmış tek satıra çevrildi. Diyalog alıntıları (`> **PERİ:** …`) " / " ile birleşti.
- İki PowerShell betiği (1ca20d93c4 → DENETIM-15, d2d69b7389 → ISTEM-15) girintili kod bloğu olarak taşındı (girintili olduğu için
  `tasima_say` / `arac_kurallar` blok ayrıştırmasını bozmuyor).
- `KURALLAR.md`'de tek satır da olsa hep madde biçimi: `- *Ders:* …` / `- *Bilgi:* … (k:<id>)`.
- KANON satırları `- *Bilgi (taşındı, 20 Kasım 2026; kaynak: <belge> [(taslak belge)]):* …` biçiminde.
- `uretim/CLAUDE.md`: uyan bir bölüm bulunamadı (klasör işleyişi ve yerel SD denemesi için başlık yok) → sonda "Taşınan bilgiler
  (20 Kasım 2026)": "Resim klasörü ve ortak referanslar" (9) ve "Yerel üretim denemesi (SD/Forge)" (6).
- FIKIR'in müşteri başlığına "(Ölü ve hayalet tonda sınırda — bkz. SINIR-9.)" atfı kondu (35b49d1a55'in kendisi SINIR-9'da).

## 6. Emin olmadıklarım (sahibine)

1. **KANON'a taşınan 5 satırın 4'ü taslak belgeden** (`YENI_OYUN_SEZON.md` açılış sahneleri: haciz/çay/taç, kırmızı manto, "Tel lazım mı?";
   `TASLAK_tekrar_onleme.md` dönen figürler listesi). Kanon kaydı "burada yazan gerçektir" diyor — taslak metni kanona yükseltmiş olabilirim.
   Kaynağı "(taslak belge)" diye işaretledim; sahibi bakmalı. Ayrıca aac3c6315e "Kadir (vapur çaycısı, V5)"i kanonda sayıyor ama Kişiler
   tablosunda Kadir yok.
2. **V1, V2, V4, V6 ilk taslakları GECMIS kaldı** (vaka bu taslaktan yazıldı; kullanılmayan parçaları — karar düğümü seçenekleri, komedi
   motoru, kıyafet — arşive gider). V3 ve V5'in ters vaka (Columbo) taslaklarını ise yazılan vaka bambaşka çıktığı için FIKIR'e aldım.
   Sahibi V1–V6 taslaklarının kullanılmayan parçalarını da havuzda isterse eklenir.
3. **"Reddedilen seçenek" satırları (8) ve iptal edilen D/E/F kuralları GECMIS kaldı** (kararlar kuralda). İkinci gözün sorusu açık:
   yeniden önerilmesinler diye ayrı bir "reddedilenler" listesi istenir mi? 23e42069f3/2289cf534a (kararı kaldırma önerisi) FIKIR'e değil
   SEZON-9'a gitti — reddedilmiş öneri, gerekçesi (e39b93d4c0) yanında dursun diye.
4. **c9e79469d0** (V2: tepsi örtüsü çizgili/dantelli küçük fark kabul edildi) SATIR-7'ye emsal olarak taşındı; DENETIM-51 ("tutarlılık
   beğeni diye geçilmez") ile ilişkisi yazılı değil — sahibine sorulmalı.
5. **`KURALLAR.md` üretilmiş bir dosya** (`arac_kurallar.js birlestir`, `adim2/kural_<KOD>.md`'den). `birlestir` yeniden çalışırsa bu taşıma
   (kurallara giden 162 satır) ve SUREC-35/KOD-35 düzeltmeleri silinir. Ya `birlestir` bir daha çalıştırılmamalı ya da
   aynı ekler `adim2` dosyalarına da yazılmalı.
6. **bbf8ee3eac / CODEX-13:** `v3_eski/BIRIKIM.md` arşive taşınınca bu satırdaki ve CODEX-13'teki yol atfı güncellenmeli.
7. Ufak hedef seçimlerim: 209f3d58fe → SUREC-14 (SUREC-27 değil), e96885132b → YAPI-37 (YAPI-29 değil), 434bcb3027 → KOD-36,
   c19343d93a → GOMME-3, 74caee4b2e (V6–8 kaba dağılımı) → FIKIR "Vaka 8" başlığı, 32e00ff73a (V7 açık sorular; içinde "isimler sorulacak"
   gibi kapanmış iş notu da var) bütün hâliyle FIKIR'e.
8. Bazı taşınan cümleler bağlamından kopunca yarım kalıyor (ör. 74fdf20bb1 "… Cengo kapıyı iki saniyede açar. Sonra:"; c018bf7b6e yalnız
   başlık). Asıl metin değiştirilmesin diye bırakıldı; kaynak etiketi ve `(k:…)` ile asıl yere dönülebilir.
