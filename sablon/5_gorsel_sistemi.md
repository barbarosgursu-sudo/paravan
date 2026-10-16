# 5. GÖRSEL SİSTEMİ

Görseller hikâye onaylandıktan **sonra** üretilir. Liste vaka formundan çıkar.

## A. Görsel türleri

| tür | ne | boyut |
|---|---|---|
| **Arka plan** | mekân, insansız | 900×1200 |
| **Ara kare** | tam ekran an (kovalamaca, karar sonucu) | 900×1200 |
| **Detay** | yakın çekim nesne (kilit, pruva) | 900×1200 |
| **Figür** | karakter, düz bej zemin, uyluk ortasından yukarı | Peri ve Cengo 1122×1402, konuk 1086×1448 |

- Bütün görseller WebP, kalite 80.
- **Figürde sabitler:** aynı ölçek, başın tepesi aynı yükseklikte, bakış kadrajın soluna. Peri ekranda aynalanır, Cengo'ya bakar.

## B. İfade sözlüğü

Her replik ifadesini **anlamına göre** seçer. Uygun ifade yoksa önce görsel üretilir, sonra replik yazılır.

**Peri**
| ifade | anlamı | ne zaman |
|---|---|---|
| normal | sakin, kendinden emin | varsayılan |
| kas | kuşkulu, alaycı | soru, iğne |
| sinirli | öfkeli, karşısındakine | biriyle çatışırken |
| aci | içe dönük öfke, kırgın | kendine ya da orada olmayana kızarken |
| utanmis | mahcup | rezil olunca |
| sasirmis | irkilme | beklenmedik ses ya da kişi |
| merakli | şaşkın merak | "bir daha söyle?" |
| nesneli | elinde bir nesneyle (kâğıt, çay, taç…) | metin o nesneyi anarken |

**Cengo**
| ifade | anlamı | ne zaman |
|---|---|---|
| normal | hınzır yarım gülümseme | varsayılan |
| kas | kuşkulu, alaycı | soru, iğne |
| gulen | açık gülüş | espri, zafer |
| yumusak | gülmeyen, sıcak | "elektrik" anları |
| sinirli | ters | kızdığında *(henüz yok)* |
| nesneli / hareketli | vakaya özel (buyrun gibi) | metin gerektirdiğinde |

**Konuk:** en az 1, gerekirse 2–3 ifade.

**Kıyafet başına sayı (sahibinin kararı, 8 Ekim 2026):**
- **Peri:** tavan yok; olabildiğince çok ve farklı görsel. Her kıyafette sözlüğün **yedi ifadesinin hepsi** (normal, kas, sinirli, acı, utanmış, şaşırmış, meraklı) **+ vakanın gerektirdiği her nesneli ve hareketli poz.** Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir.
- **Cengo:** 4 (normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası.

## C. Metin ile görselin eşleşmesi

1. **Metin bir nesneyi, hareketi ya da kıyafeti anıyorsa o satırda ekranda görünür.** Üç yol:
   - figürün ifadesi o nesneyle ya da hareketle,
   - bir ara kare,
   - bir mekân karesi (arka planda görünüyorsa).

   Hiçbiri yoksa metin değişir.
2. **Dinleyenin ifadesi de uyar.** Konuşmadığı satırda da hikâyeye uygun durur (tacı tutan Peri gibi).
3. **Figür birini işaret ediyorsa** karşısındaki gerçekten o kişi olmalı.
   **Ekran düzeni (9 Ekim 2026):** sol "bizim taraf" (Peri ya da Cengo), sağ karşı taraf. Konuk
   sahnedeyken Cengo konuşursa Peri'nin yerine sola geçer (aynalı) ve konuğa bakar; Cengo konuk
   varken Peri'ye konuşuyorsa satıra `{kime: peri}` yazılır. Peri konuğa, Cengo'nun ardından
   konuşuyorsa konuğu sağa almak için `{gir: <konuk>}`.
   **Satır işaretleri (Vaka 1 dersleri, 10 Ekim 2026):**
   | işaret | ne zaman |
   |---|---|
   | `{kime: peri}` Cengo satırında | konuk varken Cengo Peri'ye konuşuyor (yoksa sola geçer, konuğa bakar) |
   | `{kime: peri\|cengo}` konuk satırında | konuk kime konuşuyorsa solda o dursun |
   | `{gir: x, gi: ifade}` | konuk girerken ilk yüzü (anlatı satırında "öfkeli giriyor" gibi) |
   | `{gizle: cengo}` | figür sahneden ayrıldı (koşup gitti); konuşunca geri gelir |
   | `{peri: ifade}` / `{cengo: ifade}` | konuşmayan dinleyenin yüzü değişsin (önceki yüz kalmasın) |
   | `{mekan}` | konuk henüz görünmemeli, yer tanıtılıyor |
   **Denetim:** konuşan kim, karşısında kim, dinleyenin yüzü önceki satırdan mı kaldı — her sahne
   satır satır okunur. Sesi olan ama figürü olmayan biri (boyacı, telefon) konuşurken ekranda ilgili
   kare ya da nesne (telefonlu Peri) olur; boş iki figür kalmaz.
5. **Mekân ve açı çeşitliliği:** uzun bir konuşma (≈15 satırdan fazla) tek arka planda geçmez;
   aynı mekânın ikinci/üçüncü açısı ya da durum değişikliği (kapı açıldı, manto askıda) üretilir.
   Hikâyede bir şey değiştiyse (kapı açıldı, manto asıldı, tabla devrildi) arka plan da değişir.
6. **Hareket sahneleri (kovalamaca):** her vuruş bir kare; kareler birbirinin devamı (aynı hız,
   aynı kargaşanın izleri). Sıralama metinle aynı: önde koşan önce düşer. Sahneden ayrılan figür
   kareye girmez.
7. **Durum sürekliliği:** ıslandı, kirlendi, balık pulu, manto çıkarıldı/asıldı — sonraki satırlarda
   figür de o hâlde. Gerekirse ara hâl figürü üretilir (ıslak Peri).
4. Her sahne için bir **satır → görsel** tablosu yazılır ve denetlenir.

## D. Üretim yöntemi

1. **Kıyafet başına tek temel görsel:** önce nötr görsel üretilir. Diğer ifadeler hep onun **düzenlemesidir** (1. referans = temel görsel). Yüz, ölçek ve kıyafet sabit kalır.
2. **Referanslar:** her prompta numaralı olarak, aynı mesajda verilir.
3. **Yan karakterlere ana karakter referans verilmez.** Stil için başka bir yan karakter verilir.
4. **Benzer yan karakterler ayrışır:** yaş, yapı, saç, bıyık farklı (üç yaşlı bıyıklı balıkçı olmaz).
5. **Üretici:** önce ChatGPT; reddederse ya da tutmazsa Grok.
   **ChatGPT reddederse önce bu yol (16 Ekim 2026, sahibinin kararı; Vaka 2 K23):** aynı promptu
   ChatGPT'nin **düşünen kipinde ("Çalışma")** yeniden ver. Filtreye takılınca promptu kendisi
   yeniden yazıp tekrar deniyor: "seksi" → "şık ve çekici moda estetiği", ceket kapalı, kamera
   açısı nötr, sahne "aile dostu fiziksel komedi". 11 Ekim'de reddedilen K23 böyle üretildi ve
   Grok'unkinden iyi çıktı. Gelince bak: yumuşatılmış tarif Peri'nin görünüşünü (dekolte,
   kıyafet sabitleri) değiştirmiş mi — K23'te değiştirmemişti. Olmazsa Grok.
   Kabul edilen prompt ve reddedilen iki deneme: `vakalar/vaka2_gorsel.md` → "K23 (G50) —
   ChatGPT'nin kendi yazdığı promptlar". Riskli karede baştan: "family-friendly" çerçeve cümlesi,
   riskli bölgeyi örten somut nesne ("lap concealed by the broken cake"), "neutral eye-level
   camera, no low angle", "not suggestive"; "seksi / bacaklar havada / kalça" yazılmaz.

6. **Görsel iş sayfası (zorunlu; 11 Ekim 2026, sahibinin kararı).** Promptlar sahibine düz metin
   ya da md dosyası olarak değil, **iş sayfası** olarak verilir: claude.ai'da yayımlanmış tek bir
   sayfa (Artifact). Vaka 2'nin sayfası: https://claude.ai/artifact/DhL2uDY7LHzMLqo8FQ5fXQ —
   sahibinin ölçüsü: "beni çok hızlandırdı; sonraki vakalar aynı şekilde devam etmeli."
   Sayfanın vazgeçilmez özellikleri (Vaka 2'deki gibi):
   - Görseller **sohbet sırasıyla** gruplu (temel görsel önce, ondan türeyenler arkasından; tek
     görsellik konuk/mekân "Yeni sohbet · Ad"; kareler en sonda, her biri ayrı sohbet).
   - Her kartta: numara (G<n>), ad, oyundaki anahtar, **tam prompt metni** (yer tutucu yok,
     "[ortak stil satırı]" gibi kısaltma yok) ve **Kopyala** düğmesi.
   - Referanslar kartın içinde **numaralı**: dosya referansı **indir** düğmesiyle, önceki çıktı
     referansı "G<n> çıktısı (ne için)" diye.
   - **Yapıldı** işareti (tarayıcıda kalır) — sahibi nerede kaldığını görür.
   - Kartta **bakılacaklar** satırı (o görselde en sık bozulan şey).
   Üretim: `sablon/vakalar/vakaN_sayfa/` = `uret.py` (veriyi `vakaN_gorsel.md`'den, tam metinli
   üretir → `veri.js`) + `sablon.html` (sayfa). Yeni vakada Vaka 2'nin klasörü kopyalanır,
   `uret.py`'deki görsel listesi ve `sira` değiştirilir; `sablon.html` aynen kalır. Sayfa
   adım 8'in **çıktısıdır**: `vakaN_gorsel.md` biter bitmez üretilir, yayımlanır, bağlantısı
   sahibine ve `DEVIR.md`'ye yazılır. Sohbet sırası değişirse önce sayfa, sonra belgeler.

7. **Yerel üretim denemesi (11 Ekim 2026; karar verilmedi, sürüyor).** Amaç: ret/limit yok, gece
   otomatik üretim, Claude üretir-denetler-yeniden dener, sahibi sabah toplu onaylar.
   - Donanım: sahibinin dizüstü HP Omen, GTX 1060 Max-Q **6 GB**, 16 GB RAM, Win 10. Sınırda ama çalışıyor.
   - Kurulum: Stable Diffusion WebUI **Forge** (tek tık paketi, CUDA 12.1) → `C:\forge`; NVIDIA 582.78.
   - Model: **DreamShaper XL Lightning DPM++ SDE** (civitai 112902). Lisans CreativeML Open RAIL++-M
     (çıktı üzerinde hak iddia edilmiyor; ticari kullanım yasağı yok). Ayar: 6 adım, CFG 2, DPM++ SDE,
     Karras, 832×1216, UI = xl.
   - Tuzaklar: canlı önizleme GitHub'dan dosya indirmeye çalışıp "getaddrinfo failed" verdi → Settings →
     Live previews kapat, yöntem "Approx cheap". **GPU Weights 5119 → 4096** süreyi 4 dk 35 sn'den
     1 dk 25 sn'ye indirdi (bellek %100 → %87).
   - Karakter tutarlılığı: ControlNet Unit 0 → IP-Adapter (`ip-adapter-plus_sdxl_vit-h`, preprocessor
     CLIP-ViT-H) + G1 referansı. Weight 0.7: G1'e çok benzer ama fotoğrafa kayar; **0.5: hem benzer hem
     boyalı**, 1 dk 47 sn. (İlk çalıştırma kodlayıcıyı indirdiği için 14 dk.)
   - Sıradaki: Peri/Cengo için LoRA (bulutta bir kez, ~1–2 $), sonra gece betiği (Forge API).

**Prompt kalıbı (sırasıyla):**
1. Kimlik: "Referanstaki kişinin AYNISI…"
2. Kadraj: ölçek, kesim, baş yüksekliği
3. Baş açısı: **burun-kulak** ile ("burnu kadrajın soluna bakıyor, kulağı sağda")
4. "Değişen tek şey poz ve ifade."
5. Poz: **eller tek tek** tarif edilir; "tam iki kol, iki el"
6. İfade
7. Nesneler: **tek tek sayılır**; yazı taşıyan nesnenin yüzü kapalı
8. Kıyafet sabitleri (vakaya göre: etek, ayakkabı rengi…)
9. Çekicilik satırı (kural 15)
10. "Hiçbir yazı, harf, rakam, logo yok."
11. **Oran satırı (9 Ekim 2026, sahibinin kararı):** her promptun sonuna, tek başına:
    - figür: "Görselin oranı TAM 4:5, dikey (1122×1402). Birinci referansla aynı oran."
    - arka plan, ara kare, detay: "Görselin oranı TAM 3:4, dikey (1086×1448)."
    Üretici oranı çoğu zaman birinci referanstan alır; bu yüzden birinci referans da aynı
    oranda verilir. Yine kayarsa görsel atılmaz, kesimde ölçüye getirilir (kenardan kırpma).

**Bilinen hatalar ve önlemleri:**
| hata | önlem |
|---|---|
| üç el, ters el | "tam iki kol, iki el"; her eli ayrı tarif et |
| sağ/sol karışır | burun-kulak geometrisi |
| nesnede yazı çıkar | yüzü kapalı tarif et |
| istenmeyen nesne çıkar | nesneleri tek tek say, açık uçlu liste yok |
| "görünmesin" yanlış çizilir | kadraj dışında bırak, silme |
| ölçek kayar | temel görseli 1. referans ver |
| **kıyafet sabiti kayar** (ayakkabı yeşil, saç kumral) — Vaka 2 K24, G19 | her türev ve karede sabitleri tek tek yeniden yaz ("kırmızı stiletto", "platin saç"); referansa güvenme |
| **istenmeyen giysi ayrıntısı** (çorap üst bandı) — Vaka 2 G8–G13 | bacak görünen her kadın görselinde: "ince ten rengi KÜLOTLU çorap; üst bandı hiçbir yerde görünmüyor" |
| **sayı kayar** (beş katlı pasta dört çıktı) — G40 | sayıyı büyük harfle ve parantezle tekrarla: "BEŞ katlı (dört değil)" |
| **manzara başka şehir** (Lizbon, Paris çatıları) — G35, G39 | pencere görünen mekânda: "pencereden İstanbul: eski apartmanlar, uzakta minare / Boğaz" |
| **marka izi** (gözlük sapı, buzdolabı levhası, kürsü rozeti) — G26–28, G42, G38 | "yazı yok" yetmiyor: üreticinin markalı yaptığı nesnede ("markasız, rozetsiz") yaz; gelince büyütüp tara |
| **kalabalık karede kişi düşer** (K19'da Cengo yok) — K19 | kare promptunda kişi sayısını yaz ("kadrajda TAM üç kişi: …"); gelince metindeki kare satırıyla say |
| **kim kimi görüyor** bozulur (masanın açık yüzü kapıya) — K20 | saklanma/gizlilik karesinde kamerayı ve engeli tarif et ("kamera masanın arkasında, ön panel kapalı") |
| **kıyafet başka karakteri çağrıştırır** (siyah uzun kol = Lâl) — G44 | detay karede elin sahibinin kıyafetini yaz (Gülsüm: kısa kollu tişört, gri önlük); şüpheliyle karışmasın |
| **reddedilir** ("sahtekârlık" kalıbı) — K23 | asıl sebep çoğu zaman "seksi / bacaklar havada / etek" sözcükleri; önce aynı promptu ChatGPT'nin düşünen kipinde ver, kendisi yumuşatıp yeniden dener (D-5); olmazsa aynı promptla Grok. Claude promptu kendiliğinden yumuşatmaz |

## E. Kontrol listesi (gelen her görsel)

1. Kimlik aynı mı?
2. Ölçek ve baş yüksekliği aynı mı?
3. Bakış yönü doğru mu?
4. El ve parmak sayısı doğru mu?
5. Yazı, harf, logo var mı?
6. Kıyafet sabitleri tutuyor mu?
7. Çekicilik seviyesi kurala uygun mu?
8. Hak edilmemiş bir bilgi gösteriyor mu?
9. Metindeki satırla uyuşuyor mu?
10. **Metindeki kare/sahne satırında adı geçen herkes var mı?** (`vakaN_diyalog.md` → `{kare: Kn}`)
11. **Mekân doğru şehir mi, nesne sayısı (kat, kişi) doğru mu?**
12. **Gelen görselin numarasını mesaj sırasından değil görselden doğrula** (Vaka 2 konuklarında
    3. ve 4. ters gelmişti).

## F. Kesim ve yerleştirme

- Figür, kesim aracıyla karakterin sabit çerçevesine göre kesilir.
- Farklı boyutta gelen görsel önce 1122×1402'ye (zemin rengiyle) getirilir.
- **Zemine yakın renkte nesne** (beyaz kâğıt gibi) kesimde kaybolabilir → elle maske.
- Kol ile gövde arasında kalan bej boşluk → elle temizlenir.
- Gömüldükten sonra derleme "her görsel gömülü" demeli.
- **Saç kenarı (her figürde):** kesim aracı kıvırcık/dağınık saçın arasında bej hale bırakır.
  Yeşil önizlemede başı büyütüp bak; hale varsa yalnız **baş kutusunda** temizle. Kır saçta dikkat
  (saçı da siler); **gümüş/beyaz nesneler** (balık, tel, kâğıt, pul) temizlikte silinebilir —
  kutunun dışında bırak, sonra büyütüp var mı bak. Siyah saçta açık şerit kalır → kenarı koyulaştır.
- **Kesim profilleri** (`arac_kes.js`; `arac_paket.js --profil G<n>=<profil>`), Vaka 2'de eklenenler:
  - `peri_beyaz` / `cengo_beyaz` / `konuk_beyaz`: zemine yakın beyaz taşıyan görsel (krema, masa
    örtüsü, beyaz gömlek). Varsayılan profil (kenar tol 28, hale 60, delik doldurma) beyazı zeminle
    birlikte yer. Bu profiller kenar 8–10, hale 20–25, delik kapalı ve zemin rengini kenardan
    40 px içeriden okur (üreticinin kenar sütunları birkaç birim açık çıkıyor).
  - `konuk_sag`: el ya da kol **sol kenara** uzanıyorsa. Araç zemin rengini satırın sol kenarından
    okur; orada parmak varsa o satırda ince bir zemin çizgisi kalır. Bu profil sağdan okur.
- **Temel görselin ölçeğini ölç** (baş tepesi ile etek ucu arası setle aynı mı). Vaka 2 G1 boydan
  gelmişti → kırpılıp 1122×1402'ye getirildi. Grok 912×1136 verir; araç büyütür, ölçek tutar.
- **Hale temizliği yöntemi:** koyu saçta, koyu saça komşu ve zemine <30 uzak opak pikseller silinir;
  **ten çevresi korunur** (korumasız denemede göz akı da gitmişti). Kızıl saç ten rengine yakın;
  orada yalnız baş kutusunda saydama komşu pikseller birkaç tur aşındırılır. Krema zemine ~6 birim
  uzak: renkle genel temizlik kremayı yer, yalnız küçük kutuda çalış.
- **Marka/yazı rötuşu:** düz yüzeyde (gözlük sapı, çelik kapak, rozet) satır satır yatay ara değerle
  silinir. Yapısal çizgi geçen ya da büyük alanda (çorap bandı, etek ucu) rötuş tutmaz → yeniden üret.
- **Boy:** yeni konuk eklenince Peri'nin yanında ekranda bakılır; `gorseller.json` → `boy`.
  Kadın yan karakterler genellikle 0.76–0.82, çok kısa/tombul 0.72.
- **Uzanan kol / elde tutulan nesne** figür çerçevesinden taşıyorsa `--genis`; karşıdakinin
  arkasında kalıyorsa öne alınır (`yeni_arayuz.js` → `ustte` listesi).
- **Künye portresi:** her figürlü kişinin yüzü portreye kırpılır (`yeni_gorsel/portre/`).

---

## Sahibine sorular

1. ✓ *Karar: Peri için tavan yok, en az yedi ifade + vaka pozları; Cengo 4.* **Kıyafet başına zorunlu ifade sayısı.** Her vakada yeni kıyafet olduğu için bu sayı vaka başına görsel sayısını belirliyor.
   - a) Peri 5 (normal, kas, sinirli, utanmış, şaşırmış), Cengo 4 (normal, kas, gülen, yumuşak). Gerisi vaka gerektirirse. *(önerim)*
   - b) Peri 4, Cengo 4.
   - c) Başka bir sayı.
