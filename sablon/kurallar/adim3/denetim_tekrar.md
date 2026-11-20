# İkinci göz: `tekrar_karar.md` denetimi (Adım 3)

Tarih: 20 Kasım 2026. Hiçbir kural dosyası değiştirilmedi; bu dosya yalnız rapordur.
Yöntem: her grubun ANA + birleşen kuralları `KURALLAR.md`'den çekildi, birleşmiş metinle cümle cümle karşılaştırıldı; şüpheli
yerlerde `adim2/KURAL_SATIRLAR.tsv`'deki asıl satıra bakıldı. Atıf taraması: birleşip kaybolacak 18 kodun `KURALLAR.md`'deki
bütün anılışları arandı — yalnız SATIR-28 (→ SATIR-27, SATIR-29) ve SEZON-24 (→ SEZON-22) çıktı; önceki listeyle aynı, eksik yok.
Sayım doğru: 16 grup, 18 kod birleşir (687 → 669).

Hatırlatma: `KURALLAR.md` `adim2/kural_<KOD>.md`'den `arac_kurallar.js birlestir` ile üretiliyor; birleştirme orada yapılmalı ve
ardından `node arac_kurallar.js say` her kaynak numarasının hâlâ karşılığı olduğunu göstermeli.

## Özet

| grup | sonuç | kısa |
|---|---|---|
| G1 KAR-6 ← SINIR-4 | GEÇER | |
| G2 TON-8 ← SATIR-14 | GEÇER | not: SR-H etiketi başlığa da yazılabilir |
| G3 SUREC-27 ← KOD-32 | GEÇER | |
| G4 ARAYUZ-37 ← SUREC-42 | GEÇER | tarih sırası kaynakla doğrulandı |
| G5 RAF-111 ← YAPI-41, BILGI-21 | GEÇER | not: Nurcan kuralı BILGI'den çıkıyor |
| G6 KAR-22 ← SEZON-22 | **DÜZELT** | "Bu yüzden kıyafet kütüphanesi tutulmaz" yanlış cümleye bağlandı |
| G7 BILGI-7 ← ARAYUZ-12 | GEÇER | |
| G8 ISTEM-51 ← SATIR-27 | GEÇER | |
| G9 SATIR-35 ← SEZON-24 | GEÇER | |
| G10 YAPI-17 ← TON-17 | **DÜZELT** (küçük) | "Vaka 4'te de geçerli" yeniden yazma cümlesine yapıştı |
| G11 DENETIM-30 ← SATIR-29 | GEÇER | |
| G12 KAR-8 ← TON-18, TON-20 | GEÇER | |
| G13 KAR-9 ← TON-19 | GEÇER | |
| G14 KOD-3 ← SUREC-9 | **DÜZELT** (küçük) | `göm` adım 5'in neyi kastettiği ("kök CLAUDE.md'deki komutlar") bulanıklaştı |
| G15 YAPI-40 ← KAR-20 | GEÇER | not: bağlayıcı kaynak KAR-20'de (kural kitabı) |
| G16 ARAYUZ-8 ← KOD-31 | GEÇER | |

BİRLEŞMESİN diyeceğim grup yok.

---

## 1. Gruplar

### G1. KAR-6 ← SINIR-4 — GEÇER
SINIR-4'ün her parçası birleşik metinde: "her resimde", "dekolte istenir", kural 15b, 10 Ekim / 17 Ekim (Vaka 3) / 6 Kasım "dünkü ayarlar",
Gizem örneği, Vaka 3 kıskançlığı, adım 8. KAR-6'nın cümleleri aynen. Kaynak 192, 1210, 2566, 2997 tam (SINIR-4'ün "(asıl hâli 192…)"
notu 192 ile karşılanıyor). Eklenen bilgi yok. "Aynı karede daha alımlı" ile "Gizem'le yan yana çok daha alımlı" iki kez duruyor —
kayıp olmasın diye ikisi de kalmış, doğru.

### G2. TON-8 ← SATIR-14 — GEÇER
SATIR-14'ün iki cümlesi (yalnız o an görülebilen, kural 4a; depo örneği) TON-8'de zaten var; başlığı ("Anlatıcı da 'nereden biliyoruz?'
sınavından geçer") son cümleye taşınmış. Kaynak 176, 701, 6, 384, 2628 tam.
Not (yapı, kayıp değil): SATIR bölümü SR-A…L sırasını tutuyor; SR-H oradan çıkınca harf sırası delinir. İstenirse başlık
"Sahne notu yalnız o an görüleni söyler (SR-H)" yazılır — metinde "5. parça SR-H" zaten geçtiği için yeni bilgi değildir.

### G3. SUREC-27 ← KOD-32 — GEÇER
KOD-32'den gelenler tam: `V5 40`, "Şablon 7. parça adım 5 ve 14", "Test değil, araç.", "sahibinin kararı". KOD-32'nin kısa komutu
(önünde `build_html.js yeni` yok) SUREC-27'nin tam komutunun alt kümesi; anlam kaybı yok. Kaynak 694, 2783, 15, 2886 tam.

### G4. ARAYUZ-37 ← SUREC-42 — GEÇER
Önceki Claude "10 Ekim ilk hâl, 16 Ekim Vaka 1 dahil" sıralamasını "bizim okumamız" diye işaretlemişti. Kaynakta doğrulandı:
no 2454 `yeni/OKUBENI.md` → "Vaka 2 ile gelenler (10 Ekim 2026)": "her sonraki omurga vakası için bir düğme"; no 3055 DEVIR
"16 Eki 20:20": "her vakaya düğme … Vaka 1 dahil, açılış atlanır". Sıra kaynağın kendi tarihleri; yorum değil. "Vaka N · Başlık (test)",
"yeni vaka eklenince kendiliğinden çıkar", 9 Kasım "AÇIK KALIR", yayından önce `false` — hepsi var. Kaynak 2454, 2938, 3017, 3079, 3055 tam.
Vaka 2 süre/görsel kaydı parantezi konu dışı ama kaybolmasın diye taşınmış — ilkeye uygun.

### G5. RAF-111 ← YAPI-41, BILGI-21 — GEÇER
Üçünün bütün cümleleri var: "9 Kasım 2026 raf kararı", "Paravan rozetleri ve sezon sonu tablosu", vaka başına bir-iki, rozetsiz vaka,
"12'nin 3'ü" YOK, gri/kilitli kutu yok + gerekçe (Nurcan, sayı nottur), "kazandığı an öğrenir", Play başarı sistemi yok + gerekçe.
Kaynak 1702, 2011, 3019, 1698, 1703, 1699 tam. Başlık genişledi (yeni bilgi değil, gövdede var).
Not (aynı mı sorusu): üçü gerçekten tek karar bloğu (RAF §12b) — birleşmesine katılıyorum. Ama BILGI-21 bir **Nurcan** kuralı;
RAF'a gidince Nurcan bölümünü okuyan onu görmez. Kayıp değil, yerleşim sorusu: ya ANA BILGI olur, ya BILGI bölümünde "rozetler: RAF-111"
gibi bir atıf satırı kalır (bu Adım 3'ün atıf düzenine uyuyorsa). Sahibinin/birleştiricinin tercihi.

### G6. KAR-22 ← SEZON-22 — DÜZELT
Kayıp yok; kaynak 193, 102, 1857, 3084, 1971 tam. **Ama bir anlam kayması var:** SEZON-22'de "bu yüzden kıyafet kütüphanesi tutulmaz"
her vakada kıyafetin değişmesinin sonucudur (kaynak no 3084: "Her vakada Peri ve Cengo yeni kıyafet giyer → kıyafet kütüphanesi tutulmaz").
Birleşik metinde bu cümle "**Cengo'nun saçı değişmez** (19 Kasım 2026)."dan hemen sonra geliyor; "bu yüzden" Cengo'nun saçının
değişmemesine bağlanmış gibi okunuyor.
Düzeltme — birleşik metnin ilk paragrafı şöyle olmalı:

> Peri ve Cengo her vakada yeni kıyafet giyer; kıyafeti, takısı, aksesuarı vakaya göre değişir (sahibinin isteği); bu yüzden kıyafet kütüphanesi tutulmaz. İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Peri'nin saçı da değişir. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17); **Cengo'nun saçı değişmez** (sahibinin kararı, 19 Kasım 2026).

(İkinci paragraf "Görsel üretimi vaka metni yazıldıktan sonra…" aynı kalır.)
Aynı mı sorusu: önceki Claude'a katılıyorum — son cümle (görsel üretiminin zamanı) ayrı bir iş yaptırıyor; ayrı SEZON kuralı olarak
kalması daha temiz. Kayıp olmadığı için ikisi de kabul edilebilir.

### G7. BILGI-7 ← ARAYUZ-12 — GEÇER
ARAYUZ-12'den: Anı sekmesi, §12'nin altı, `**ANI:** …` + `## cozum`'dan sonra, bölüm zorunlu (`arac_diyalog.js`), `vaka2_diyalog.md`
örneği, `2_kural_kitabi.md`, `vaka3_baslangic.md` §1 — hepsi var. BILGI-7'nin cümleleri aynen. Kaynak 203, 634, 669, 2577, 3007 tam.

### G8. ISTEM-51 ← SATIR-27 — GEÇER
SATIR-27'nin bütün cümleleri aynen taşınmış (görselsiz tur komutu, `## Kontrol`'den önce, HEPSİNE uyma/SR-D, EYLEM, JEST, okuma sorusu,
Codex katmaz, bayraklar kapanır SR-E/SATIR-10, 13 Kasım SR-M notu). İki tarih (6–7 Kasım kalıcı karar; 8 Kasım C0) ve iki kapsam
("figür, ara kare, detay" + "figür ve kare") birlikte korunmuş. Kaynak 3566, 3578, 2967, 2630, 715, 1073, 1218 tam.
SATIR-28 atfı (SATIR-27 → ISTEM-51) doğru tespit edilmiş.

### G9. SATIR-35 ← SEZON-24 — GEÇER
SEZON-24'ün iki cümlesi (satırın istemediği üretilmez / istediği esirgenmez; kalkan 11 Ekim ve 4 Ekim kuralları, 17 Kasım çelişki sorusu 31;
yeni kıyafet atfı) aynen; "(SEZON-22)" → "(KAR-22)" G6 ile tutarlı. Kendine atıf "(SATIR-35)" doğal olarak düşmüş. Kaynak 371, 372,
373, 645, 370, 646, 1971, 3081 tam.

### G10. YAPI-17 ← TON-17 — DÜZELT (küçük)
Kayıp yok; kaynak 145, 710, 5, 2629 tam. Ama TON-17'nin "Vaka 4'te de geçerli" sözü (kaynak no 2629: Vaka 4 başlangıç notu, "bu vakada
geçerli olan" listesi — yani **kural** Vaka 4'te de geçerli) birleşik metinde "Vaka 3'te üç yüzleşme bu yüzden yeniden yazıldı."dan hemen
sonra duruyor ve "Vaka 4'te de yeniden yazıldı" diye okunabiliyor.
Düzeltme — birleşik metnin ilk iki cümlesi şöyle olmalı, sondaki "Vaka 4'te de geçerli." silinmeli:

> Sahibinin kararı, 17 Ekim 2026; Vaka 4'te de geçerli. Yüzleşmede suçlunun paniği somut bir sebebe bağlanır.

### G11. DENETIM-30 ← SATIR-29 — GEÇER
SATIR-29'dan: "resim istemle birlikte o satırlarla da okunur", "konuşanın kim olduğu", Vaka 3 Gizem/Peri örneği — var. DENETIM-30 aynen.
Kaynak 469, 1128, 716, 1074 tam.

### G12. KAR-8 ← TON-18, TON-20 — GEÇER
TON-18'in "en az bir kez ikisi de kaybeder" cümlesi KAR-8'de zaten kural olarak var (kaynak no 183, kural kitabı 8), düşmesi kayıp değil;
gerekçe cümlesi ve TON-20 "öneri" işaretiyle taşınmış. Kaynak 183, 1754, 1987, 1756, 1758 tam.

### G13. KAR-9 ← TON-19 — GEÇER
TON-19'un başlığı ve üç cümlesi "öneri" işaretiyle var. Kaynak 184, 1757 tam. (Asıl taslak "taşımalı / duymalı" der, KURALLAR "taşır /
duyar" — bu fark birleştirmeden önce de vardı, birleştirmenin işi değil.)

### G14. KOD-3 ← SUREC-9 — DÜZELT (küçük)
Kaynak 10, 11, 2326, 2350, 2886, 2555, 1147 tam. md5 notu, commit → push var. Sorun: SUREC-9'un "Resim gömme (`göm` komutu) adım 5:
**kök CLAUDE.md'deki "Her commit'ten önce" komutları**" sözü (kaynak no 1147, `uretim/CLAUDE.md`) birleşik metinde "adım 5 bu komutlardır"
olmuş; "bu komutlar" artık yeni oyun listesini, turu ve sızıntı taramasını da kapsıyor gibi okunuyor, "kök CLAUDE.md" atfı da düşmüş.
(SUREC-9'un "gerekiyorsa tur"u KOD-3'ün "sahneyi etkileyen değişiklikte ayrıca tur"u ile karşılanıyor — o kabul.)
Düzeltme — birleşik metnin son cümlesi şöyle olmalı:

> Resim gömmede (`göm` komutu) adım 5: kök CLAUDE.md'deki "Her commit'ten önce" komutları (yukarıdaki kod bloğu); hepsi geçerse commit → push.

### G15. YAPI-40 ← KAR-20 — GEÇER
KAR-20'den "dört karar" ve "vaka formu 12. Kararlar'da da denetlenir" var; başlığı ("ahlaka değil duruma göre") YAPI-40 gövdesinde.
Kaynak 1792, 1794, 1795, 210, 632 tam.
Not: YAPI-40'ın kaynağı TON belgesi **taslağı** §7 (no 1792–1795); bağlayıcı hâli KAR-20'nin kaynağı, kural kitabı E.23 (no 210).
G12/G13'te taslak cümleler "öneri" diye işaretlendi, YAPI-40 işaretsiz — bu tutarsızlık birleştirmeden önce de vardı. Kayıp yok; ama ANA
seçimi tartışılabilir: bağlayıcı kural KAR-20. Değiştirmek istenirse ANA KAR-20 olur, YAPI-40'ın cümleleri ona eklenir.

### G16. ARAYUZ-8 ← KOD-31 — GEÇER
KOD-31'in metni, koşulu, yeri ve gerekçesi var. "Ekim 2026" ile "16 Ekim 2026" aynı karar (kaynak no 3032 DEVIR 16 Ekim). Kaynak 3032, 15 tam.

---

## 2. AYRI denen çiftlerden kaçan tekrarlar (en yüksek benzerlikli 40 AYRI çift: no 1–46)

Gözden geçirilen 40 çift: 1, 2, 3, 4, 6, 7, 8, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
37, 38, 39, 40, 41, 42, 43, 44, 45, 46. Önceki Claude'un ölçütüyle (kural ↔ istem/denetim maddesi AYRI; adım özeti AYRI) çoğuna katılıyorum.
Katılmadığım ya da sınırda gördüklerim:

### Gerçek tekrar (birleşmeli)

**a) Çift 29 — KOD-21 ↔ ARAYUZ-27 (ICINDE).** ARAYUZ-27 ("Tarayıcı uyarı kutusu yok — Claude sayfası engelliyor; her onay sayfanın
içinde", no 309, motor sınırları) KOD-21'in (no 2412) tamamen içinde. ANA KOD-21; ARAYUZ-27'den eklenecek yalnız kaynak no 309. Bu bir
araç açıklaması değil, aynı yasak — ölçüte göre de birleşmeli.

**b) Çift 27 — YAPI-47 ↔ RAF-65 (ICINDE/AYNI).** İkisi de "Dosyanın tamamı", 17 Ekim 2026, aynı karar (no 636 vaka formu; no 2006 çerçeve).
RAF-65 daha geniş. ANA RAF-65; YAPI-47'den eklenecek: "5–7 kısa paragraf", "yanıltan izler nereden geldi", "formun §2'sinden (Gerçek) düz
dille", `YENI_OYUN_CERCEVE.md` atfı, kaynak 636. (Ayrıca bkz. aşağıda RAF-47 ile gerilim.)

**c) Çift 37 — SUREC-31 ↔ ISTEM-54 (ICINDE).** ISTEM-54 ("ifade ızgarası yok, çözünürlük düşüyor; sahibinin kararı, Vaka 2", no 3082)
SUREC-31'in maddesi olarak aynen var (no 732: "ifade ızgarası (bir istekte birkaç ifade) kullanılmaz, çözünürlük düşüyor"). İki yol:
SUREC-31 ANA, ISTEM-54'ten "Vaka 2" ve kaynak 3082 eklenir; ya da (SUREC-31 karışık bir liste olduğu ve "görsel sayısı azaltılmaz"
maddesi bayatladığı için) önce SUREC-31 çelişki 1'e göre düzeltilir, sonra birleşir.

**d) Çift 24 — ISTEM-57 ↔ GOMME-28 (ICINDE).** ISTEM-57 ("her vakaya kendi masa kartı, `MASA_V<N>`, kart afişinden yatay kırpık —
6–7 Kasım kalıcı karar", no 2967) istem kuralı değil; GOMME-28 (no 1145) aynı kartın yapımı. ANA GOMME-28; ISTEM-57'den eklenecek:
"Her vakaya kendi masa kartı — sahibinin kalıcı kararı (6–7 Kasım)", kaynak 2967.

**e) Çift 23 — KOD-92 ↔ ARAYUZ-32 (ICINDE).** Aynı ekran (Paylaş kartı, 17 Ekim 2026); ARAYUZ-32 kendisi "ayrıntı `CLAUDE.md` → Paylaş"
der, yani KOD-92'nin kaynağını (no 15) gösterir. "Kart suçlu/karar/kasa taşımaz", afiş, `uret.py`, `5_gorsel_sistemi.md` → G, ilk cümle
paylaşım mesajında — iki yerde. Önceki Claude KOD-92'yi "araç/ekran açıklaması" diye AYRI tuttu, ama ARAYUZ-32 de aynı ekranın
açıklaması; G16'da (KOD-31 → ARAYUZ-8, aynı kaynak no 15) aynı durum birleştirildi. Tutarlılık için: ANA ARAYUZ-32; KOD-92'den
eklenecek: 1080×1920 tarayıcıda çizim (`paylasKartCiz`), düğme yerleri (kapanış sonrası ekran, Defter → Anı), "önce resim, yazı az"
(sahibinin kuralı), "suçlama, not" da girmez + gerekçe (arkadaş oynamadı; oyun not vermez), `navigator.share` / indir + kopyala,
`og:` etiketleri (`build_html.js yeni`) ve `yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`, kaynak 15. ("Anı karşılaştırması ve
davet kodu Android aşamasında" ARAYUZ-32'de zaten var.)

### Sınırda (kısmi tekrar; birleştirme şart değil, not)

- **Çift 43 — KOD-91 ↔ ARAYUZ-31:** KOD-91'in 2. maddesi ("Künye yalnız içinde bulunulan vakanın kişilerini gösterir", `vnKisiGorunur`)
  ARAYUZ-31'in 1. maddesiyle aynı kural. KOD-91 üç ayrı konuyu (Defter, Künye, deneme reklamı) birleştiren bir CLAUDE.md paragrafı;
  tümüyle birleşemez. Öneri: o madde ARAYUZ-31'e taşınır (`vnKisiGorunur` ve portre komutu ile), KOD-91'de kalan iki madde kalır.
  Çift 20 ve 45 (GOMME-12 ↔ KOD-91 / ARAYUZ-31) aynı portre komutunun tekrarı; GOMME-12 asıl yer, AYRI kalabilir.
- **Çift 12 / 40 — ARAYUZ-36 ↔ RAF-52:** ARAYUZ-36'nın "Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`)" maddesi
  RAF-52'nin koruma kuralının tekrarı. Tüm kurallar ayrı iş yaptırıyor (biri web taklidi, öbürü iş kuralı); o madde RAF-52'ye atıfla
  kısaltılabilir. Gerilim için bkz. bölüm 3, ek bulgu C.
- **Çift 41 — SEZON-23 ↔ ARAYUZ-19:** "kıyafet vaka içinde değişebilir" (karar, 16 Ekim) ve "sahne içinde değişebilir, `cset`" (motor
  yeteneği, no 288). Ölçüte göre (motor açıklaması ↔ kural) AYRI kalabilir; içerik neredeyse aynı.
- **Çift 35 — SUREC-29 ↔ KOD-38:** ikisi de "diyalog → `arac_diyalog.js`, JSON → `arac_json_yaz.js`" der; SUREC-29 ayrıca "yapı ve künye
  diyalogdan üretilmez" der. Kısmi örtüşme; AYRI kalabilir.
- **Çift 28 — KAR-39 ↔ SINIR-2:** ilk cümle (kanun yok, ne yasak ne lisanslı, 5 Ekim) iki yerde; işleri ayrı (kanon olgusu / espri sınırı).
  AYRI'ya katılıyorum.
- **Çift 3 — YAPI-45 ↔ ARAYUZ-22:** "dallanmaz" iki düzeyde (karar yapısı / konuşma ekranındaki seçim, no 291 motor sınırları). AYRI'ya katılıyorum.

Öbür çiftlerde (1, 2, 4, 6, 8, 11, 14, 15, 17, 18, 19, 21, 22, 26, 30, 31, 32, 33, 38, 39, 42, 44, 46) AYRI kararına katılıyorum.
7, 25 ve 34 tekrar değil ama **çelişki** taşıyor — bölüm 3.

---

## 3. Çelişkilerin doğrulaması

**1. SUREC-31 ↔ SEZON-24 (görsel sayısı) — GERÇEK.** SUREC-31 (no 732, `7_uretim_sureci.md` "Hızlandırma kuralları (10 Ekim)"; no 3083)
hâlâ "görsel sayısı azaltılmaz" diyor; SEZON-24 (no 3081 + 17 Kasım çelişki sorusu 31) bu kuralın kalktığını söylüyor. SUREC-31 bayat.
(Küçük ek: SEZON-24 kalkan kuralı "11 Ekim 2026" diye tarihliyor; SUREC-31'in kaynağı "10 Ekim" başlıklı — aynı karar, tarih bir gün kaymış
olabilir. Kaynak no 3081'in DEVIR bölümü "11 Ekim" — ikisi de kaynakta var, değiştirmeyin.)

**2. KOD-78 ↔ SINIR-13 (sigara denetimi) — GERÇEK (kısmen).** KOD-78 `KURALLAR.md`'de "### G. Üretim sürecinin otomatik denetimleri"
başlığı altında (kaynak no 755, `7_uretim_sureci.md` › Otomatik denetimler) ve "metinde, sahne notunda, ifade adında, istemde" der.
Kodda doğrulandı: `kaynak/*.js` içinde sigara yasağı denetleyen bir şey yok (`dogrulayici.js`, `arac_kapi.js` sessiz; `arac_satir_resim.js`
"sigara"yı yalnız DURUŞ bayrağı kalıbında arar, yasak denetimi değil). Otomatik olan yalnız istem tarafı (`uretim/istem_kontrol.sh`,
ISTEM-55). SINIR-13'ün "doğrulayıcıda metin taraması henüz yok" sözü doğru; KOD-78'in "otomatik" başlığı metin, sahne notu ve ifade adı
için doğru değil. (Yan not: `kaynak/build_html.js` satır 1072'de eski oyunun ruh görseli `karar_kirli.jpg` "kül tablasında sönmekte olan bir
sigara" — eski oyun, yeni sayfada ruh görseli yok; SINIR-13 "yeni oyunun verisi (V1–V7) ve şablonlar" der, çelişmez ama "bütün seri"
sözü eski oyunu kapsıyorsa sahibine sorulabilir.)

**3. SATIR-36 ↔ KOD-44 (etiketsiz Cengo düzeni) — GERÇEK; bayat olan KOD-44.** SATIR-36 (no 633) "V1–V5", KOD-44 (no 2435) "V1–V5, V7".
Diyaloglarda sayıldı (`^**CENGO:**` etiketsiz / `^**CENGO [` etiketli): V1 8/38, V2 4/41, V3 4/37, V4 4/29, V5 4/29, **V6 0/40, V7 0/32**,
V8 0/35. Bugün V7'de etiketsiz Cengo satırı yok; SATIR-36 dosyalarla uyuşuyor, KOD-44'teki "V7" eskimiş.

**4. ISTEM-25 ↔ DENETIM-45 (filtre reddi sırası) — GERÇEK, ama tarih çözüyor.** DENETIM-45'in tek kaynağı no 3059: DEVIR, "Ara (11 Eki 15:55)
— **eski not**" (ChatGPT reddetti → Grok'ta orijinal istem; Grok da reddederse sahibine). ISTEM-25 (no 415, `5_gorsel_sistemi.md` D-5, 16 Ekim
2026, sahibinin kararı) araya "önce ChatGPT'nin düşünen kipi" adımını koyuyor. Yani sıra farkı gerçek ve DENETIM-45 daha eski. Tamamen
çelişmeyen parçalar: "Claude istemi kendiliğinden yumuşatmaz" ikisinde de var; "Grok da reddederse sahibine sorulur" yalnız DENETIM-45'te —
ISTEM-25'e eksik. AYRI bırakılmasına katılıyorum; sahibine sorulacak: DENETIM-45 16 Ekim sırasına göre güncellensin mi.

### Ek bulgular (denetim sırasında çıkan, önceki listede olmayan çelişkiler — sahibine)

**A. DENETIM-37 ↔ GOMME-20 (kesim profili) — çelişki.** DENETIM-37 (no 1136, `uretim/CLAUDE.md` Denetim): "zemin bej → `konuk`;
yeşil/gri-mavi → `konuk_beyaz_delik`". GOMME-20: zemine göre dar profil seçimi (`peri_mavi`/`cengo_beyaz`/`konuk_beyaz_delik`) **kalktı**,
profil yalnız çerçeveyi belirler (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 8). DENETIM-37 bayat görünüyor.

**B. ISTEM-7 ↔ GOMME-16 (zemin seçimi) — olası çelişki.** ISTEM-7'nin 2. maddesi "Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da
uzak (kızıl/açık saç → gri-mavi)" kuralını geçerli gibi yazıyor (6–7 Kasım). GOMME-16: 14 Kasım'dan beri zemin KIYAFETE göre yazılımla
(`arac_zemin.py`) seçilir; "saça bakan eski tablo yalnız tarihî kayıttır", 6 Kasım kuralı "artık tarihî kayıt". (`arac_zemin.py` figürün
tamamını, saç dahil, ölçüyorsa "saçtan uzak" sonucu yine tutar; ama "kızıl/açık saç → gri-mavi" eşlemesi bayat.)

**C. ARAYUZ-36 ↔ RAF-47 / RAF-48 / RAF-52 (reklam) — gerilim.** ARAYUZ-36: "Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla
değişir" — bugünkü kod her vakada (Vaka 1 dahil) +1 hak ve kaçan ipucu için reklam açar; bu cümleye göre Android'de Vaka 1–2'de de gerçek
reklam çıkar. RAF-47/48 (9 Kasım): Vaka 1–2'de hiç reklam yok, +1 hak ve kaçan ipucu "reklamsız (düğmeyle)". RAF-52: "reklamsız sürümde (web,
Steam) ek hak düğmesi çıkmaz" — web'deki bugünkü deneme düğmesi taklit olduğu için bu belki çelişki değil, ama ifade ayrışıyor. Aynı ailede
RAF-65 / YAPI-47 "Dosyanın tamamı · reklam" (17 Ekim) ile RAF-47'nin "Vaka 1–2 dosyanın tamamı reklamsız" (9 Kasım) satırı.
ARAYUZ-36'nın Android cümlesi 9 Kasım raf kararından önce yazılmış görünüyor.
