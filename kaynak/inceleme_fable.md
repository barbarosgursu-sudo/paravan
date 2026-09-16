# Paravan Dedektiflik — Fable 5.1 taze göz incelemesi

> **DURUM (16 Eylül 2026): hepsi uygulandı.** Her bulgunun başında ✔ ve commit
> hash'i var. Uygulama talimatları `inceleme_fable_talimat.md`'de. Şüpheliler
> bilerek yapılmadı — tasarım kararı, sahibine sorulacak.

**Tarih:** 16 Eylül 2026 · **Kapsam:** veri/mantık, metin, ekonomi, arayüz/derleme,
görseller · **Bu turda kod değişmedi**; yalnızca bulgu.

**Yöntem:** CLAUDE.md, OKUBENI.md ve üç sözleşme okundu; `motor.js`, `dogrulayici.js`,
`build_html.js` satır satır; dokuz vakanın tüm metinleri (giriş varyantları, kaynak
`text/meta/ad`, kararlar, künye, defter) dökülüp okundu; şüpheler motorla simüle edildi
(3.000 rastgele oyunluk değişmez taraması dahil); oyun Pixel 5 profilinde Chromium'da
gerçek tıklamayla baştan sona oynatıldı (JS hatası yok, yatay taşma yok, kayıt-sürdürme
çalışıyor); künye ekranı fotoğraflandı.

Bilinen 5 doğrulayıcı uyarısı ve CLAUDE.md'deki bozulmaz sözleşmeler **yazarın kararı
kabul edildi**, dokunulmadı. Aşağıdakiler onların dışında.

Biçim: `[Seviye] · başlık · dosya:satır · sorun · neden önemli · önerilen düzeltme · süre`

---

## KRİTİK

### ✔ 78a4cf1 · K1 · `eski_dava` olgu kimliği iki vakada aynı → künye V5'in bütün sırrını V2'de açıyor
**Dosya:** `game_data.json:882` (YAN-A facts), `:893,:949,:957,:968` (YAN-A eski_kayit
reveals / cengo_cumle needs / knowledge), `game_data.json:1809` (V5 facts), `:1838,:1994,:2003`
(V5 ilyas_gecmis reveals / knowledge); `kisiler.json:110` (İlyas katmanı `kosul: "eski_dava"`).
**Sorun:** YAN-A'daki Cengo'nun eski davası ile V5'teki İlyas'ın eski davası aynı olgu
kimliğini taşıyor. Olgular vaka bitince `kaliciOlgular`a yazılıyor ve künye `tumBilinen()`
üzerinden okuyor. Sonuç, simülasyonla ve ekranda doğrulandı: V2'de `kenar_ev_gozlem`
(İlyas'ı tahsildar olarak tanıma) + YAN-A'da `eski_kayit` açan oyuncu, **V3 daha
başlamadan** Kişiler panelinde şunu okuyor:
> İlyas — *Cavit'in yıllar önce delil karartıp kurtardığı katil. Şimdi ona mahkûm;
> kurtarıldığı için tuzağa düşmüş.*
İlyas'ın katil olduğu (V3), Cavit'in onu kurtardığı ve elinde tuttuğu (V5) — üç vakalık
düğüm tek satırda. (Ekran görüntüsü: inceleme sırasında alındı; yeniden üretimi için:
V1 temiz_rapor → V2 kenar_ev_gozlem aç → YAN-A eski_kayit aç → Kişiler.)
**Neden önemli:** Nurcan kuralının bugüne kadarki en büyük ihlali; doğrulayıcı olgu
kimliklerinin vakalar arası benzersizliğini denetlemediği için görünmez kaldı.
**Düzeltme:** YAN-A'daki olguyu `cengo_eski_dava` diye yeniden adlandır (5 yer +
`kisiler.json`'daki Cengo/Sevil katmanları etkilenmiyor, onlar `cengo_gecmis_bilinir`/
`gecmis_tam` okuyor). Ardından doğrulayıcıya **K11: olgu kimlikleri vakalar arasında
benzersiz** kuralı ekle (hata sınıfı) ki bir daha olmasın. **Süre:** 20 + 15 dk.

### ✔ e98a4d0 · K2 · V5/`cavit_ilyas_ilgi` metni, İlyas'ı hiç tanımayan oyuncuya "İlyas gibi sıradan bir tahsildar" diyor
**Dosya:** `game_data.json:1913` (kaynak; `text` ve `meta` koşulsuz).
**Sorun:** Başlık 3. turda koşullu yapılmış ("Cavit'in telaşı nereden?") ama gövde ve
meta yapılmamış. V3'te araştırmadan `tanigi_lekele` diyen oyuncu V5'e **sıfır İlyas
olgusuyla** giriyor (simülasyonla doğrulandı: bilinen tek şey `ilyas_kime_gitti:lekele`);
kaynağı açınca *"Cavit, İlyas gibi sıradan bir tahsildar için gereğinden fazla telaşlı"*
ve meta *"İlyas onun için sıradan biri değil. Aralarında bir geçmiş var."* okuyor. İsim
de (V3), tahsildar olduğu da (V2) sızıyor.
**Neden önemli:** OKUBENI'nin kendi teşhisi ("metin koşulluyken meta koşulsuz kalması iki
kez tekrarladı") — üçüncü tekrar. `test_sizinti` bu gidişatı oynamıyor (lekele +
araştırmasız V3, sonra derin V5).
**Düzeltme:** `text` ve `meta`'yı başlıkla aynı koşula bağla; varsayılan varyant İlyas'ı
adsız anlatsın (*"Cavit bu iş için gereğinden fazla telaşlı — sıradan bir tahsildar
meselesi diyor ama…"*). `test_sizinti`'ye "V3 sığ + lekele, V5 derin" gidişatı ekle.
**Süre:** 10 + 15 dk.

---

## ÖNEMLİ

### ✔ 3675113 · Ö1 · Final bittikten sonra YAN-C masaya düşüyor; final mührü ve son ekranı bozuluyor
**Dosya:** `motor.js:161-188` (`masadakiVakalar`), `build_html.js:757-762` (`masaGoster`:
masa boşsa son ekranı).
**Sorun:** YAN-C `belirir.sonra: "her"` ve tek koşulu `borc_en_az: 80000`. V6 bittiğinde
omurga kalmıyor ama borç eşiğin üstündeyse masada yalnızca YAN-C duruyor → oyuncu "Dava
Kapandı" yerine Hulki'yi görüyor. 3.000 rastgele oyunun **561'inde** oldu. Simülasyonla
doğrulanan zincir: V6/`cavit_ver` → Cengo "Bağlı"ya mühürlendi (6) → YAN-C `adresi_ver`
→ Cengo 4 "Yakın". OKUBENI'nin "final mührü artık geri alınamıyor" sözü bu yoldan
deliniyor; sezon finalinin ardından bir yan iş gelmesi anlatıyı da bozuyor.
**Düzeltme:** `masadakiVakalar` içinde omurga kalmadıysa (`final` vaka tamamlandıysa) yan
vakaları hiç listeleme; `sonEkrani` doğrudan gelsin. `test_yanc`'a "V6 sonrası masada
görünmez" iddiası. **Süre:** 10 + 10 dk.

### ✔ 339e98f · Ö2 · Künyedeki İlyas portresi yaralı yüz — yara V3'ün ipucu, künye V2'de açılıyor
**Dosya:** `kisiler.json:98` (`"portre": "portre_ilyas.jpg"`), `game_data.json:450`
(V2 kaynağı `portre_ilyas_v2.jpg`).
**Sorun:** İki İlyas görseli var: `portre_ilyas` (yanakta belirgin yara — V3'teki
`tarif_yara`) ve `portre_ilyas_v2` (yarasız; stil sözleşmesi §7 gereği V2 için özellikle
böyle üretilmiş). V2 kaynağı doğru olanı gösteriyor, ama Kişiler paneli `ilyas_tahsildar`
ile açılır açılmaz **yaralı** yüzü basıyor. V2 oyuncusu tanığın tarifini görselden önce
alıyor.
**Neden önemli:** Görsel Nurcan kuralı (§7) — metin tarafı bunu tam olarak çözmüşken künye
geri açıyor.
**Düzeltme:** En kısa yol `kisiler.json` portresini `portre_ilyas_v2.jpg` yap. Daha iyisi:
künyeye katmanlı portre (`iten_ilyas` sonrası `portre_ilyas`) — 4 satırlık arayüz
değişikliği. **Süre:** 5 / 15 dk.

### ✔ ca36642 · Ö3 · Doğrulayıcı K1 ve K5 koşullu metinleri hiç taramıyor
**Dosya:** `dogrulayici.js:82` (`blob = (c.text||"") + " " + (c.meta||"")`), `:203` (K5 aynı).
**Sorun:** `text`/`meta` varyant dizisi olduğunda dizgi birleştirme `"[object Object]"`
üretiyor (doğrulandı). Şu an 8 kaynağın koşullu metni K1'in (isim sızıntısı) ve K5'in
(belirsizlik) dışında: V1 komsu_ifadesi, V1 cengo_baglanti, V3 foto_goster, V5 iliski_gor,
V6 eldekiler, V6 kaya_izi (+ V5'te iki koşullu başlık). K10 varsayılanı denetliyor, K1
hiçbirini.
**Neden önemli:** Koşullu metin tam da Nurcan düzeltmelerinin yaşadığı yer; asıl bekçi
oraya kör.
**Düzeltme:** Her varyantı ayrı denetle: varyantın `kosul` olgularını o varyant için havuza
kat, metnini tara. K5 için varyant metinlerini birleştirmek yeter. **Süre:** 20 dk.

### ✔ ca36642 · Ö4 · K1'in "temel" isim kümesi giriş varyantlarının BİRLEŞİMİ — bir varyantta geçen isim tüm vakada serbest
**Dosya:** `dogrulayici.js:71-76`.
**Sorun:** `girisMetin` tüm varyantları birleştiriyor; V5'te "polis/koz/cavit" varyantları
İlyas'ı andığı için İlyas V5'in her kaynağında serbest sayılıyor — varsayılan girişi
okuyan (lekele) oyuncu için değil. K2 bu yüzden yakalanmadı; OKUBENI'deki iki başlık
düzeltmesi de aynı sebeple elle bulunmuştu. V6'da İlyas/Cavit/Ceyda için aynı durum.
**Düzeltme:** `temel` = yalnızca `varsayilan` varyantta geçen isimler (en az bilgili
oyuncunun garantisi). Ortaya çıkacak yeni K1 hataları gerçek olacaktır; koşullu metinle
kapatılır. Ö3 ile birlikte yapılmalı. **Süre:** 15 dk (+ çıkan hataların metin işi).

---

## KÜÇÜK

### ✔ a34b2fb · Kü1 · Kasa şeridinde borç görünürken metinler bitişiyor ("90.000 ₺bir aylık gideri…")
`build_html.js:97` `.kasa-serit` flex'te `gap` ve `flex-wrap` yok; Pixel 5'te borç satırı
eklenince iki span birbirine yapışıyor (ekran görüntüsünde görüldü). → `gap:10px;
flex-wrap:wrap`. **2 dk.**

### ✔ a34b2fb · Kü2 · `kasaDurumu` icra masrafını saymıyor
`motor.js:591-602` `giderToplam(this.game)` okuyor, `aylikGiderToplam()` değil. İcra
sürerken "bir aylık gideri ancak karşılıyor" 12.000 ₺ eksik hesapla söyleniyor — karar
ekranı doğru, üst şerit yanlış. → `this.aylikGiderToplam()`. **5 dk.**

### ✔ a34b2fb · Kü3 · V3/`mahalle_don`: Cengo "bu İlyas olabilir, şu tahsildar" — V2'de kapıyı gözlemeyen oyuncuda tahsildar yok
`game_data.json:699`. `foto_goster` meta'sı aynı sebeple koşullu yapılmış, bu kaynağın
metni yapılmamış. Cengo'nun sokak bilgisi diye savunulabilir; ama emsal var. →
`ilyas_tahsildar` koşullu varyant, varsayılan "bu İlyas olabilir — kenar mahallede tanınan
biri". **5 dk.**

### ✔ a34b2fb · Kü4 · V4 varsayılan girişi "Kaya'nın eski dosyalarını karıştırırken" — V1'i reddedip hiçbir şey açmayan oyuncuda dosya yok
`game_data.json:1618`. Sigorta dosyasını alan (`sigorta_yazisi_acildi`) için köprü var;
reddedip hiç bakmayan için Cengo'nun elindeki kâğıt nereden geldi, açık değil. Üçüncü
varyant (`ilk_karar: reddetti` + dosya yok): kâğıt Cavit'in V3'te bıraktığı dosyadan.
**10 dk.**

### ✔ a34b2fb · Kü5 · `test_yanc.js:13` `ESIK = 80000` sabit
CLAUDE.md'nin "testlerde sabit sayı yazma" kuralına aykırı; eşik veride değişirse test
yalan söyler. → `g.vakalar.find(v=>v.id==="YAN-C").belirir.kosul.borc_en_az`. **3 dk.**

### ✔ a34b2fb · Kü6 · `ucret` özelliği ölü ve iki gizli hata taşıyor
Hiçbir kaynak `ucret` taşımıyor; ama kod yolu var ve bozuk: (a) `motor.js:668-671`
kayıt yüklemede kaynaklar yeniden açılırken `kaynakAc` parayı **ikinci kez** düşürür
(kayıttaki `para` zaten düşülmüş hâl); (b) `a.harcanan` kaydedilmiyor, sonuç dökümü
yüklemeden sonra 0 gösterir; (c) `_kirletmeyeZorlarMi` kopyaları kasa taşımadığı için
ücretli kaynağı alınabilir sayar. → Ya özelliği kaldır, ya üçünü düzeltip `test_kayit`'a
ücretli kaynak senaryosu ekle. **20 dk.**

### ✔ a34b2fb · Kü7 · Motorda veriye özgü karar kimlikleri sabit kodlu
`motor.js:557-558` `hepsini_ifsa` ve `cavit_ver` isimleri motorun içinde. Karar yeniden
adlandırılırsa mühür sessizce çalışmaz. → karara `final_etki: {cengo_ust_sinir: 2}` /
`{cengo_muhur: "Bağlı", eger: "Yakın"}` alanı, motor alanı okusun. **20 dk.**

### ✔ a34b2fb · Kü8 · `durumYukle` para yedeği 2400
`motor.js:655` `this.game.baslangic?.para ?? 2400` — `baslangic` bu veride yok, 2400
Münevver'den kalma. Kayıtta `para` her zaman var, o yüzden bugün etkisiz. →
`ekonomiAl(this.game).baslangic_kasa`. **2 dk.**

### ✔ a34b2fb · Kü9 · Yakınlaştırma kapalı
`build_html.js:20` `maximum-scale=1.0, user-scalable=no`. Erişilebilirlik açısından
kötü (görme zorluğu çeken oyuncu büyütemez); iOS zaten yok sayıyor. Android aşamasında
gündeme gelecek erişilebilirlik başlığının ilk maddesi. **1 dk.**

### ✔ a34b2fb · Kü10 · Üst şerit düğmeleri 29 px yüksek
`build_html.js:49` `.ust-btn`. Dokunma hedefi önerisi 44 px. Kişiler/Defter/ses düğmeleri
küçük parmakla kaçırılıyor. → `min-height:40px; padding` artışı. **5 dk.**

### ✔ a34b2fb · Kü11 · Belge bayatlıkları
- `OKUBENI.md:14,31` "34 görsel" → 44.
- `OKUBENI.md:142` K9 "9 tohum" → 6.
- `OKUBENI.md:1133` "Ekonomi → Kalan" paragrafı iki kez yazılmış ve ikincisi "yan
  vakalar şu an sıfır getiriyorlar" diyor — artık getiriyorlar; paragraf kendi kendini
  yalanlıyor.
- `OKUBENI.md:1198` "Kalan iş: DEV_MOD = false" → yapıldı, sil.
- `gorsel_stil_sozlesmesi.md:160` §9 "tek teknik: koyu yağlıboya" ve §10 şablon başı
  `[Koyu yağlıboya…]` — §3 foto-gerçekçi diye düzeltilmiş, iki bölüm eski hâlde.
- `dogrulayici.js:3` "5 kuralını" → 10.
**15 dk.**

### ✖ YAPILMADI (talimat gereği) · Kü12 · Ses keşfi açılışta 26 HEAD isteği
`build_html.js` `sesKesfet`: 13 dosya × 2 uzantı, her açılışta. Pages'te 13 gereksiz
404. Gerçek mp3'ler gelince `.wav` yedeği ve bu ikinci deneme zaten silinecek; o güne
kadar not. **—**

---

## ŞÜPHELİ (kesin değil — yazarın kararı)

- **`kararRuhHali`: para 0 + vicdan artı → "temiz".** `motor.js:134-140`. V3/polise_ver
  (0 ₺, +2), YAN-C/isi_reddet (0 ₺, +1), YAN-A/cengoya_birak (0 ₺, +2), V4/kimligi_sakla
  (0 ₺, +1). "Temiz: doğru olan aynı zamanda ayakta tuttu" — 120 bin liralık işi borçluyken
  reddetmek ayakta tutmuyor, cebinden çıkmıyor ama vazgeçilen bir ücret var. Görsel de
  sabah penceresi (dinginlik). `para <= 0 ? "bedel" : "temiz"` daha dürüst olabilir; ama
  bu, dört ruh hâlinin dağılımını değiştirir (temiz 11 → ~7).
- **İstatistik paneli "Çoğu insan ne yapardı?"** `build_html.js:1062`. Oranlar yazar
  tarafından sabit yazılmış ve dürüstçe öyle olduğu söyleniyor. Yine de "oyun not vermez"
  sözleşmesiyle gerilimli: nadir seçeneği seçene "%8, senin kararın" göstermek yumuşak bir
  yargı. Bilinçli bir "ayna" ise kalsın; değilse panel kaldırılabilir.
- **Künye tanışma koşulları kaynağa bağlı.** Kaya `polis_kaza`, Ceyda `ceyda_saat`. İkisi
  de V1 girişinde adıyla anılıyor ama o kaynağı açmayan oyuncunun künyesine hiç girmiyor —
  V6'da bile. Tasarım ("tanışmak = kaynağı açmak") olabilir; öyleyse belgeye bir cümle.
- **K10 yalnızca varsayılan varyantı denetliyor** (belgelenmiş). Koşulu dar bir varyant
  başka bir kişinin sözüne gönderme yaparsa görünmez. Ö3 yapılırken aynı mantık K10'a da
  taşınabilir.
- **V6 `sus_bilerek` +70.000 ₺ yan vaka değil omurga** — gider kesiliyor ve faiz işliyor;
  bu istendiği gibi görünüyor (ay kapanışı). Sadece not.

---

## Doğrulananlar (sorun bulunmadı)

- Doğrulayıcı PASS (bilinen 5 uyarı), 17 test geçiyor, `test_bozuk` beklendiği gibi 1.
- 3.000 rastgele oyunda istisna yok, kasa hiç eksiye düşmedi, en yüksek borç 418.196 ₺
  (sınırlı), her omurga vakada her zaman en az bir karar açık (YAN-A tasarım gereği en
  az bir araştırma istiyor, arayüz bunu söylüyor).
- Pixel 5'te tıklamayla tam tur: JS hatası yok, yatay taşma yok, sayfa yenilenince
  "Dosya açık" ekranıyla sürdürme çalışıyor.
- 44 gömülü görselin hepsi veride bağlı; veride olup gömülü olmayan yok.
- 13 ses dosyası `MUZIK`/`EFEKT` haritalarıyla birebir.
- Karar önizlemesi ile motor kapanış sırası aynı (`test_ekonomi` kilitli), icra masrafı
  önizlemede var.
- Ekonomi sözleşmesi ("kirletmeye zorlamaz") `test_borc` ile dokuz vakada tutuyor.

## Önerilen sıra

1. K1 (olgu çakışması) + K11 kuralı — en büyük sızıntı, en ucuz kapanış.
2. K2 (V5 metni) + test gidişatı.
3. Ö1 (final sonrası YAN-C).
4. Ö2 (künye portresi) — 5 dakika.
5. Ö3 + Ö4 birlikte (doğrulayıcının kör noktaları) — sonra çıkacak K1 hatalarını metinle kapat.
6. Kü'ler tek commit'te.
