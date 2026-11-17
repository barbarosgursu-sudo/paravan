# ISTEM — resim istemi yazma kuralları

### ISTEM-1 Kalıp dosyası zorunlu; ezberden yazılmaz
`istemleri hazırla <N>` her vakada `uretim/ISTEM_KALIPLARI.md`'deki kalıplarla yazılır (6 Kasım 2026, sahibinin onayı). Amaç: eski resimlerin (Vaka 1–2 ve eski Vaka 3) tarzını ve kalitesini tutturmak; kalıplar Vaka 3'te iki kez yanlış kurulup düzeltildi, nedenleri o dosyanın sonunda. Yeni istem yazmadan önce o dosya ve onaylı örnekler açılır, `v3_eski/prompts/` ile yan yana karşılaştırılır. Ayrıca **H. Görsel standart** uygulanır: kadraj (H1), bakış (H3), zemin (H4), iki kol iki el, yazı yok, oran.
*Kaynak:* 1067, 1172, 1240, 1170

### ISTEM-2 Sıra: temeller önce
Karakter temel figürleri ve mekân temelleri ilk numaralarda; ifadeler ve kareler sonra. Gerekçe: bir temelin reddi bütün zinciri bir tur geciktirir (Vaka 3'te G5 beş resmi bekletti).
*Kaynak:* 1060

### ISTEM-3 Görsel türleri ve boyutları
| tür | ne | boyut |
|---|---|---|
| Arka plan | mekân, insansız | 900×1200 |
| Ara kare | tam ekran an (kovalamaca, karar sonucu) | 900×1200 |
| Detay | yakın çekim nesne (kilit, pruva) | 900×1200 |
| Figür | karakter, düz bej zemin (zemin rengi seçimi: ISTEM-7; "bej" için bkz. CELISKI-ISTEM-8), uyluk ortasından yukarı | Peri ve Cengo 1122×1402, konuk 1086×1448 (konuk ölçüsü için bkz. CELISKI-ISTEM-3) |
| Kart afişi | paylaşım kartı: vakanın kadrosu + mekânı, ipucusuz (bkz. 5_gorsel_sistemi G) | dikey 9:16 (ChatGPT ~941×1672) |
*Kaynak:* 343, 344, 345, 346, 347

### ISTEM-4 Oran satırı her istemin sonunda
9 Ekim 2026, sahibinin kararı (Vaka 1'de oranlar karışık çıktığı için). Her istemin sonuna, tek başına:
- figür: "Görselin oranı TAM 4:5, dikey (1122×1402). Birinci referansla aynı oran."
- arka plan, ara kare, detay: "Görselin oranı TAM 3:4, dikey (1086×1448)."
Üretici oranı çoğu zaman birinci referanstan alır; bu yüzden birinci referans da aynı oranda verilir. Yine kayarsa görsel atılmaz, kesimde ölçüye getirilir (kenardan kırpma). `istem_kontrol.sh` oran satırı ("Görselin oranı TAM") yoksa istemi geçirmez.
*Kaynak:* 440, 441, 442, 2533, 1436, 3562

### ISTEM-5 Figür kadrajı (H1) ve figür sabitleri
- 4:5 dikey; uyluk ortasından yukarısı; başın üstünde ince bir boşluk; tek kişi, ayakta, kadrajın ortasında (H1, 6 Kasım 2026: "herkes için aynı").
- Aynı karakterin bütün ifadeleri aynı ölçek ve kadrajda, başın tepesi aynı yükseklikte (yoksa ifade değişince ekranda zıplar).
- Bakış kadrajın soluna; Peri ekranda aynalanır, Cengo'ya bakar (bkz. ISTEM-6).
- Kalıp satırı (§6): "Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince bir boşluk. Arka plan: düz, tek renk <zemin>; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş tek renk gibi); hiçbir nesne yok."
- "dokusuz, lekesiz" şart: bir denemede zemin tuval dokulu, lekeli çıktı ve kesim tutmazdı.
*Kaynak:* 502, 503, 350, 431, 1198, 1199, 1424

### ISTEM-6 Baş açısı ve bakış: burun-kulak geometrisi
- Sol/sağ talimatı yanak/kaş ile değil burun-kulak geometrisiyle yazılır. "Sağ yanağını görüyoruz" tutmadı; "burnu kadrajın sağına baksın, kulağı solunda kalsın" ilk seferde tuttu.
- Her figür isteminde aynı satır (H3, aynen): "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay bakıyor; yukarı, aşağı ya da kameraya değil."
- Vaka 3'te (BIRIKIM §6.1, işe yarayanlar) satır kulakla da yazılmıştı: "Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor; yüzü üç çeyrek. Kameraya bakmıyor."
- Gerekçe: oyunda Peri solda aynalanır, konuk sağda durur; bu satırla ikisi birbirine bakar.
- Yüz profile dönüyorsa: "üç çeyrek, İKİ göz de açıkça görünsün" (Vaka 3'te en sık bozulanlardan biri profil yüzdü).
- `istem_kontrol.sh` figürde "Başın açısı" yoksa geçirmez.
*Kaynak:* 73, 432, 446, 525, 526, 527, 350, 1423, 1159, 1495, 3568

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### ISTEM-8 Prompt kalıbının sırası
1. Kimlik: "Referanstaki kişinin AYNISI…"
2. Kadraj: ölçek, kesim, baş yüksekliği
3. Baş açısı: burun-kulak ile ("burnu kadrajın soluna bakıyor, kulağı sağda")
4. "Değişen tek şey poz ve ifade."
5. Poz: eller tek tek tarif edilir; "tam iki kol, iki el"
6. İfade
7. Nesneler: tek tek sayılır; yazı taşıyan nesnenin yüzü kapalı
8. Kıyafet sabitleri (vakaya göre: etek, ayakkabı rengi…)
9. Çekicilik satırı (kural 15)
10. "Hiçbir yazı, harf, rakam, logo yok."
11. Oran satırı (ISTEM-4)
*Kaynak:* 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440

### ISTEM-9 Tarz paragrafı: metni ve nereye yazıldığı
Metin aynen kopyalanır, değiştirilmez:
> Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.

Tarz paragrafı her istemde DEĞİL (6 Kasım 2026 düzeltmesi; eski "her istemin başında" satırı çizgi roman/karikatür tarzına, kalın kontura yol açtı — v3 ilk G1, G4, sahibi fark etti):
| istem | tarz paragrafı |
|---|---|
| Peri ve Cengo temeli (yeni kıyafet) | YOK — tarzı boyalı referanslar taşır |
| Her karakterin ifade/varyant istemleri (onaylı temelden) | YOK |
| Yeni karakter temeli | VAR + sonda tarz örneği cümlesi (ISTEM-10) |
| Arka plan, detay, ara kare, kart afişi | VAR |
`istem_kontrol.sh` arka plan, ara kare ve detayda "Yarı gerçekçi dijital" yoksa geçirmez.
*Kaynak:* 1178, 1179, 1181, 1182, 1183, 1184, 551, 1170, 2967, 3579, 3580

### ISTEM-10 Tarz örneği cümlesi (§3)
Temel ve yeni karakter isteminde, en sonda, yazı yasağından önce:
> Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA. Karikatür değil: doğal yüz oranları, abartısız ifade.

Tarz örneği dosyası referans listesinde SON sırada: `tarz_ornek_kadin.jpg` (eski Nadide) ya da `tarz_ornek_erkek.jpg` (eski Kenan); ikisi de dekoltesiz, boyalı. Yeni karakterin kendi temeli onaylanınca o karakterin varyantlarında gerekmez. (Vaka 3'te tarz yamasından sonra onaylı bir temel bu rolde, "YALNIZ bitmiş çizim tarzı örneği (kişi, kıyafet, poz alınmaz)" diye eklenince yeni karakterler serinin tarzına oturdu.) `istem_kontrol.sh` yeni karakter temelinde "Son referans YALNIZ" yoksa geçirmez.
*Kaynak:* 1194, 1195, 1418, 3576, 1170

### ISTEM-11 Peri / Cengo temeli (yeni kıyafet)
- Referanslar sırayla, hepsi dekoltesiz: 1. yüz: `../referanslar/peri_bas.jpg` ya da `../referanslar/C1_cengo_yuz.jpg`; 2. beden/ölçek: `../referanslar/tarz_govde_kadin.jpg` ya da `../referanslar/cengo_beden.jpg`; 3. tarz örneği: `tarz_ornek_kadin.jpg` ya da `tarz_ornek_erkek.jpg`. (Kıyafet kartı referansı: ISTEM-19.)
- İstem sırası: "Birinci referans görseldeki … AYNISI" → kıyafet → "Poz: TAM İKİ KOL, İKİ EL." + her elin işi → bakış satırı (H3) → ifade → kadraj + zemin satırı → çıplaklık satırı → tarz örneği cümlesi (ISTEM-10) → yazı yasağı → oran.
- Peri'nin eski referansları (L*, peri_*, poz_peri_*; `sablon/peri_poz/` L1–L25 kütüphanesi) HEPSİ dekolteli — kullanılmaz; Peri'nin pozu metinle anlatılır.
- Cengo poz kütüphanesi `sablon/cengo_poz/` (C1–C25, dizin `OKUBENI.md`; 17 Ekim'de tamam): C1 yüz, G14-1 beden; zor pozda uygun C "YALNIZ poz için" (ör. C25 koltukta bacak bacak üstünde, C16 işaret eden, C24 arkadan, C19 yürüyor). İfadeler vakanın temel figürünün düzenlemesi (ISTEM-14); kıyafet V1/V2 ile aynıysa oyundaki figür referanstır. Adım 8'de her Cengo kartına hangi C'nin gireceğini Claude yazar.
*Kaynak:* 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1063, 1479, 3012, 2581, 412

### ISTEM-12 Yeni (yan) karakter temeli
- Yan karakterlere ana karakter referans verilmez (sahibinin duran kuralı).
- Referanslar: 1. `tarz_govde_<kadin|erkek|iri_erkek>.jpg` (başı silik), 2. `tarz_ornek_<kadin|erkek>.jpg`. Yüzü açık tarz referansı verilmez. Vaka 3 dersi (22 Ekim 2026, sahibi buldu): yüzü açık referans verilince ChatGPT yüzü ve pozu kopyaladı — Kenan ve Sedat Vaka 1'in Serkan'ı, Ferruh Rüstem'le aynı aileden çıktı; "İçindeki kişi bu görselde yok" satırı yetmedi.
- İstem: tarz paragrafı → "Referans görsel YALNIZ çizim tarzı, renk, ölçek ve kadraj içindir. Başı bilerek silindi: yüzü sıfırdan, aşağıdaki tarife göre çiz; referanstaki kişinin bedenini, kıyafetini ve POZUNU alma. Bu yepyeni, kimseye benzemeyen bir kişi." → karakter (yaş, boy, yüz, saç, ayırıcı özellik — yüz biçimi, sakal/bıyık türü, saç kesimi; benzeyebileceği kişiye "X'e benzemiyor") → kıyafet → poz → bakış → ifade → (saç toplu satırı, yan karakterde; ISTEM-44) → kadraj + zemin → çıplaklık → tarz örneği cümlesi → yazı yasağı → oran.
- (Vaka 3'teki eski cümlede "… kadraj ve arka plan içindir" yazıyordu; kalıptaki güncel biçimde "arka plan" yok, zemin istemde ayrıca yazılır.)
*Kaynak:* 1196, 1417, 413, 459, 1167, 3119

### ISTEM-13 Birbirine benzeyebilecek karakterler: "X'e benzemiyor"
İki karakteri ayırmak için istemde açıkça "X'e benzemiyor" yazılır ve ayırıcı özellik verilir. Örnekler: Ferruh/Rüstem (ince bıyık / gür beyaz pala bıyık), Kenan/Sedat (dolgun sakal / sakalsız bebek yüzü); işe yaradı. Yeni karakter eski birine benziyorsa: başı silinmiş tarz gövdesi + yüz ayırt edici çizgilerle + "pozunu alma" (ISTEM-12). `istem_kontrol.sh` yeni karakter temelinde "benzemiyor" yoksa geçirmez.
*Kaynak:* 1166, 1500, 459, 1167, 1196, 3575

### ISTEM-14 Varyant (aynı karakter, başka ifade)
- Kıyafet başına tek temel görsel: önce nötr görsel üretilir; diğer ifadeler hep onun düzenlemesidir. Yüz, ölçek ve kıyafet sabit kalır. Ölçek kayarsa: temel görsel 1. referans.
- Referanslar: 1. `onayli/G<temel>.png`; onaylı temel dekolteliyse bütün hâliyle verilmez, onun baş kırpığı + kapalı gövde verilir (baş kırpığını temel onaylanınca yerel Claude hazırlar, `referanslar/`). Gerekirse 2. poz (`poz_cengo_*` ya da `poz_*.jpg`, "YALNIZ poz"). İki kaynak ayrışıyor: ISTEM_KALIPLARI §5 baş kırpığını yalnız dekolteli temelde ister; uretim/CLAUDE.md ise varyantın referansını koşulsuz "onaylı temelin baş kırpığı + kapalı gövde" diye yazar — dekoltesiz temelde hangisi: CELISKI-ISTEM-6.
- Tarz paragrafı YOK, tarz örneği cümlesi YOK.
- İstem: "Birinci referans görseldeki X'in AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı düz <renk> arka plan, aynı ölçek ve kadraj. Değişen tek şey poz ve ifade." → poz → bakış → ifade → kadraj + zemin → çıplaklık → yazı yasağı → oran.
*Kaynak:* 411, 1197, 1419, 1420, 1064, 433, 450

### ISTEM-15 Referans verme biçimi
- Her prompt referans dosyalarıyla birlikte gönderilir (`referans/G<n>-<sıra>_ad.png`); referanslar numaralı, aynı mesajda (Vaka 1'de referanslar sonradan istendi; sahibinin duran kuralı).
- Referanslar sırayla ve tam yolla verilir; sıra önemli, çünkü istem "birinci referans, ikinci referans…" diye konuşur.
- En çok 5 referans (ChatGPT sınırı; 16 Ekim 2026, Vaka 2 K33'te görüldü). `istem_kontrol.sh` 5'ten fazlasını geçirmez.
- Daha çok kişi gerekiyorsa o kişileri bir arada gösteren önceki bir kare tek referans olarak verilir (K34 → K33 çıktısı), ya da şerit: birden çok karakterin temeli tek resimde. Şerit, kaynak temeller yeniden onaylanınca yenilenir: hepsi 900 px yüksekliğe, soldan sağa, aralarında 24 px zemin rengi: `magick G6.png G7.png G8.png G9.png -resize x900 -background "<zemin>" -splice 24x0 +append serit.jpg` (ilk sütundaki fazla boşluğu kırp). Şeritte dekolte olmamalı.
*Kaynak:* 2536, 3119, 1347, 412, 3563, 1149

### ISTEM-16 Referanslarda dekolte yok — zorunlu
- Vaka 3 deneyinde (G1, G2, G9; BIRIKIM §4.2) bulunan: engelin asıl sebebi referans resimdeki görünür dekolte; metindeki "seksi", "dekolte", "vücudu saran", "çekici" tek başına engel sebebi değildi (uretim/CLAUDE.md de "Güvenlik filtresi metne değil referans resimdeki dekolteye bakıyor" der). Ekim 2026'daki ChatGPT bulgusu ise sebebi çoğu zaman sözcüklerde görür; bu ayrılık açık: CELISKI-ISTEM-1. Kural sebepten bağımsız: bir tane dekolteli referans bile yetiyor; referansların HEPSİ dekoltesiz olmalı.
- Kanıtlar: çekicilik satırını yumuşatmak işe yaramadı (0/4); "kişinin dekoltesi, vücudu saran" metni dekolteli referansla engellendi, aynı metin kapalı referansla geçti. Vaka içinde onaylı dekolteli Peri resimleri (G1–G3) sahne referansı olarak kullanıldığında G49–G67'nin çoğu yine geçti: tek dekolteli referans her zaman engellemiyor ama riski artırıyor; sahnelerde de baş kırpığı + kapalı gövde güvenli yol.
- Kadın karakterin referansı: yalnız baş kırpığı (çeneden yukarısı, yaka yok) + kapalı giyimli tarz gövdesi (`uretim/referanslar/tarz_govde_kadin.jpg`). Dekolteli kıyafette referans = baş kırpığı + `tarz_govde_kadin.jpg`, bütün figür değil (`v3/referanslar/peri_*_bas.png`). Poz referansları da kapalı giyimle ya da başı silik gövdeyle verilir.
- Ortak referanslar (`uretim/referanslar/`: Peri ve Cengo baş kırpıkları, kapalı giyimli tarz gövdeleri kadın/erkek/iri erkek, büro ve tarz mekânları) hepsi dekoltesiz; vakaya özgü referanslar o vakanın `referanslar/` klasöründe.
- Erkek karakterlerde açık göğüs sorun çıkarmadı.
- `istem_kontrol.sh` dekolteli Peri referansını (peri_beden, L1_peri, L14_, L9_, L19_, L25_, poz_peri_, peri_kirmizi) geçirmez.
*Kaynak:* 1061, 1062, 1063, 1066, 1285, 1391, 1392, 1395, 1438, 1443, 1479, 1213, 1153, 3564

### ISTEM-17 Kıyafet kartının istemi
- 8 Kasım 2026, sahibinin kararı (SR-C). Görsel listesinden sonra, ilk figürden önce vakadaki her kıyafet için tek bir ölçü resmi üretilir: boy, kesim, renk, aksesuar; açılıp kapanan kıyafette iki hâl de (trençkot kapalı / açık). Peri, Cengo ve her konuğun kıyafeti (Vaka 6'da yalnız karede görünen konuklara üretildi: ISTEM-18; genel kural olup olmadığı: CELISKI-ISTEM-5). Kartlar önce sahibine gider.
- Kart TAM BOY: baştan ayakkabıya, önden, düz duruş, nötr yüz, düz zemin (figür uyluktan kesildiği için boy ve etek/trençkot uzunluğu ancak tam boyda görünür). Tek kişi, dikey 2:3 (13 Kasım 2026). İki hâlin nasıl verileceği: CELISKI-ISTEM-4.
- Kartta çekicilik satırı YAZILMAZ (sahibi, 8 Kasım 2026); dekolte hafif yazılır: "derin V dekolte" yerine "V yakalı", "göbeği açık" yerine "göbeği hafif açık". Gerekçe: tam boyda derin dekolte + mini elbise + çıplak bacak + "seksi" bir araya gelince çıktı filtresi engelledi (G101, sexual, output); uyluktan kesik figürde bu sorun çıkmıyordu. Kart yalnız kıyafetin ölçüsünü taşır; çekicilik ve dekolte figür ve kare istemlerinde yazılmaya devam eder.
- Kart tarz taşımaz ama kendisi de boyalı tarzda üretilir (13 Kasım 2026, sahibi: "farklı stil olan her şey yeniden üretilecek"; V6'da Cengo kartı G2 — iki kişi yan yana, yatay 3:2, küçük tam boy — katalog çizimine kaydı): yüz/tarz referansı olarak karakterin BOYALI onaylı resmi (Cengo: `v3/onayli/G4.png`) + tarz örneği + tarz örneği cümlesinin TAMAMI ("Karikatür değil…" dahil).
- `istem_kontrol.sh` kartta "TAM BOY" yoksa ya da "Çekicilik" varsa geçirmez.
*Kaynak:* 553, 554, 555, 1217, 1226, 1227, 560, 3583, 3584, 2630

### ISTEM-18 Vaka 6 kararı: konuk kıyafet kartı yalnız karede görünenlere
Vaka 6'da (Parti 2'den önce sorulan soru; 13 Kasım 2026, sahibinin cevabı) konuk kıyafet kartı altı konuğa değil, yalnız karede görünen üçüne (Müzeyyen, Jale, Dilek) üretildi — gerekçe kota; sonradan kareye giren olursa kartı o zaman. Karar `uretim/v6/LISTE.md`'ye yazıldı. Kaynak bunu yalnız Vaka 6 için söylüyor; ISTEM-17'deki "her konuğun kıyafeti" ile ilişkisi: CELISKI-ISTEM-5.
*Kaynak:* 2816

### ISTEM-19 Kartı referans alan istem
- Onaydan sonra o kıyafetin geçtiği her figür ve kare istemi kıyafet kartını referans olarak alır (SR-C). Peri/Cengo figüründe kart referansı zorunlu; `istem_kontrol.sh` referanslarda "kıyafet kartı" yoksa geçirmez. (Kıyafetin istemde sözle ne kadar yazılacağı: CELISKI-ISTEM-2.)
- Kartı referans alan her istemde: "Kart YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartın çizim tarzını, ışığını, yüzünü ve pozunu ALMA." Tarz ve yüz birinci referanstan (boyalı onaylı resim). Gerekçe: V6'da G18 (temel) kartı referans alınca tarzı da karttan kopyaladı; ifadeler G18'in "aynısı" istendiği için kayma bütün Cengo setine geçti (13 Kasım, sahibi fark etti). Denetimde temel/kart eski onaylılarla yan yana konur (tarz).
*Kaynak:* 379, 557, 1228, 560, 1169, 3577

### ISTEM-20 Karakter sabitleri her istemde
- Karakter sabitleri her istemde tek tek yeniden yazılır; referansa güvenilmez (Vaka 2 K24, G19: ayakkabı yeşil, saç kumral çıktı). Ör. "kırmızı stiletto", "platin saç".
- Peri: HER istemde "kırmızı stiletto" (Vaka 3'te ayakkabı siyah çıktı) ve "çorap yok" (sahnelerde "ÇORAP YOK"). Ayakkabının istisnası (vakanın formu başka ayakkabı yazıyorsa o: Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı) ve sabitler tablosu: KAR-23 (uretim/CLAUDE.md, karakter sabitleri). "Çorap yok" ile ISTEM-38'in ilişkisi: CELISKI-ISTEM-7. Mantolu Peri'nin altında siyah kalem etek (sahibinin duran kuralı, 7 Ekim 2026).
- Kıyafet sabitleri kalıpta 8. sırada (vakaya göre: etek, ayakkabı rengi…). Karakter sabitleri listesi CLAUDE.md'de durmalı (Vaka 3'te tek sabit Peri'nin kırmızı stilettosuydu; diğer karakterlerde benzeri tutulur).
*Kaynak:* 551, 1157, 1492, 1496, 451, 3119, 437

### ISTEM-21 Peri'nin çekicilik satırı ve dekoltesi
- Peri'nin her isteminde ("dünkü ayarlar", sahibi 6 Kasım): "Çekicilik: en üst seviyede zarif ve seksi; belin inceliği ve bacakların hattı belirgin. Çıplaklık yok." Felaket/komedi hâlinde: "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok." (Riskli karelerde "seksi" sözcüğü için CELISKI-ISTEM-1.)
- Peri'nin dekoltesi asla azaltılmaz (sahibinin duran kuralı, 7 Ekim); tek istisna kıyafet kartı (ISTEM-17, sahibi 8 Kasım). Peri ve Gizem dekolteli (6–7 Kasım).
- Peri'nin olduğu sahnelerde: "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde…; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor." Bu satır filtreye takılmadı.
*Kaynak:* 1211, 438, 3119, 2967, 1428

### ISTEM-22 "Kalın, mat kumaş" satırı yalnız Gizem'de; göğsü örten poz
- "Kumaş kalın ve mat, altından vücut ayrıntısı belirmiyor" satırı Peri'ye YAZILMAZ (dekolteyi ve seksiliği bastırdı). Yalnız Gizem'in dar beyaz tişörtünde kalır; Gizem'de ayrıca kollar göğsü örter.
- Ders: dar beyaz tişörtün altından meme ucu izi çıktı. "Vücudu saran, derin yuvarlak yakalı beyaz tişört" (G9) filtreden geçti ama sorun oradan doğdu: beyaz, dar ve ince tarif meme ucu izini çağırıyor. Yalnız "kalın kumaş" / "tişört kalın kumaş; meme ucu belirmiyor" yetmedi (G56'da 2, G67'de 3 üretimde tutmadı; poz değişmeden düzelmedi). Çözüm: göğsü örten poz (kollar kavuşuk) + "kalın, mat, düz renk kumaş"; kollar göğsü örtünce sorun bitti.
*Kaynak:* 1212, 1154, 1434, 1439, 1444, 1490

### ISTEM-23 Islaklık yalnız üst giyside
"Trençkot pekmezle ıslak; TENİ KENDİ RENGİNDE, yalnız dekoltesinde birkaç damla." "Elbise de ıslak, vücuda yapışık" yazınca iki çağrı da engellendi (sexual, output).
*Kaynak:* 1214

### ISTEM-24 Fiziksel komedi / riskli kare satırı
Fiziksel komedi karesinde: "Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok; müstehcen değil." (eski G55, G56 bununla geçti). Riskli karede baştan: "family-friendly" çerçeve cümlesi, riskli bölgeyi örten somut nesne ("lap concealed by the broken cake"), "neutral eye-level camera, no low angle", "not suggestive". ("seksi / bacaklar havada / kalça" sözcükleri için CELISKI-ISTEM-1.)
*Kaynak:* 1215, 415

### ISTEM-25 Üretici reddederse
- Üretici: önce ChatGPT; reddederse ya da tutmazsa Grok.
- ChatGPT reddederse önce (16 Ekim 2026, sahibinin kararı; Vaka 2 K23): aynı promptu ChatGPT'nin düşünen kipinde ("Çalışma") yeniden ver. Filtreye takılınca promptu kendisi yeniden yazıp dener ("seksi" → "şık ve çekici moda estetiği", ceket kapalı, kamera açısı nötr, sahne "aile dostu fiziksel komedi"). 11 Ekim'de reddedilen K23 böyle üretildi ve Grok'unkinden iyi çıktı. Gelince bak: yumuşatılmış tarif Peri'nin görünüşünü (dekolte, kıyafet sabitleri) değiştirmiş mi — K23'te değiştirmemişti. Olmazsa aynı promptla Grok. Kabul edilen prompt ve reddedilen iki deneme: `vakalar/vaka2_gorsel.md` → "K23 (G50) — ChatGPT'nin kendi yazdığı promptlar".
- Claude promptu kendiliğinden yumuşatmaz (sahibi yumuşatılmış prompt istemiyor).
*Kaynak:* 415, 460, 2582, 3077

### ISTEM-26 Filtre sınırda: iki deneme kuralı ve sebep arama yöntemi
- Filtre sınırda: G1 tur 3 ve G63/G67 ancak 2. denemede geçti; G64'ün istemi geçen G63, G65, G66 ile neredeyse aynıydı, ortak sebep bulunamadı. Bu yüzden iki deneme kuralı şart.
- Sebep aranırken kafadan değiştirilmez (sahibinin yöntemi): geçen ve engellenen istemler karşılaştırılır, ortak yan bulunur, sonra denenir. Ölçüt yalnız üreticinin engellemesidir; bizim reddettiğimiz (üretilmiş ama sorunlu) resimler karşılaştırmaya katılmaz.
*Kaynak:* 1394, 1153, 1379

### ISTEM-27 Çıplaklık satırı
Her figür isteminde çıplaklık satırı ("Çıplaklık yok") bulunur (H6); `istem_kontrol.sh` figürde yoksa geçirmez.
*Kaynak:* 551, 3574

### ISTEM-28 Yazı yasağı ve nesneye özgü yazısızlık
- Her istemin sonunda: "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın." `istem_kontrol.sh` "hiçbir yazı, harf, rakam, logo" yoksa geçirmez.
- Genel satır tek başına yetmez (cihaz çerçevelerinde ve tuşlarda logo ve rakam yine çıktı): yazı taşıyabilecek nesnenin yüzü kapalı tarif edilir; her cihaz tek tek: "tuşlar düz, işaretsiz", "çerçeve tamamen düz siyah, hiçbir işaret yok", ekran kameradan çevrik / "ekranı görünmüyor" (telefon, tablet, hesap makinesi).
- Marka izi (gözlük sapı, buzdolabı levhası, kürsü rozeti — G26–28, G42, G38): üreticinin markalı yaptığı nesnede "markasız, rozetsiz" yazılır; gelince büyütüp taranır.
*Kaynak:* 439, 3561, 1436, 436, 447, 455, 1155, 1430, 1440, 1491

### ISTEM-29 Nesneler tek tek sayılır; yasaklar adıyla
- Açık uçlu nesne listesi yazılmaz: "Dağılmış birkaç eşya" deyince üretici boşluğu yazı taşıyan bir nesneyle doldurdu (kapağı yaldızlı monogramlı defter, üstelik A-4 kanonuyla çelişen). Kadrajdaki nesneler tek tek sayılır, istenmeyen nesne sınıfları adıyla yasaklanır.
- Yasaklar tek tek: "ÇORAP YOK", "Önlük yok", "çanta YOK", "şapka YOK" (poz/sahne çağrıştırıyorsa), "ateş ve buhar YOK". İpucu taşımaması gereken sahnede (G67) yasaklı nesnelerin listesi verildi, işe yaradı.
- Mekânla çelişmemek için prompt yazmadan önce referans görsele bakılır; mekândaki eşyalar adıyla sayılır (Vaka 1'de olmayan askı, yanlış masa çıktı).
*Kaynak:* 71, 436, 448, 1429, 1156, 2535

### ISTEM-30 "Görünmesin" yazılmaz; kadraj dışında bırakılır
Görsel yalan söyleyebilir: "yarası görünmesin" yarayı saklatmaz, yarasız bir yüz ürettirir. Kanondaki fiziksel gerçek kadraj dışında bırakılır, silinmez (`gorsel_stil_sozlesmesi.md` §7c).
*Kaynak:* 72, 449

### ISTEM-31 Tam iki kol, iki el; her el ayrı
Her figürde "Poz: TAM İKİ KOL, İKİ EL." ve ardından her elin ne yaptığı ayrı ayrı (fazla uzuv, üç el, ters el dersi; Vaka 3'te en sık bozulanlardan). `istem_kontrol.sh` figürde "TAM İKİ KOL" yoksa geçirmez.
*Kaynak:* 434, 445, 1158, 1422, 1494, 551, 3567

### ISTEM-32 Nesne tutan el (§12)
15 Kasım 2026, sahibi (V6 G25 ve G80'de Gizem'in tepsi eli sol kolun ucunda SAĞ eldi; üretici kameraya yakın koldaki doğal eli çiziyor):
- Nesne yakın elde: tutulan nesne (tepsi, telefon, kutu, kâğıt) sahnenin izin verdiği ölçüde kameraya YAKIN kolun elinde istenir. Figür kadrajın sağına dönükse yakın kol SAĞ kol, soluna dönükse SOL kol. Metin hangi eli söylemiyorsa el buna göre seçilir.
- Kenardan kavrama: tepsi ve kutu avuç yukarı taşınmaz; "BAŞPARMAK tepsinin ÜSTÜNDE, açıkça görünür; DÖRT parmak ALTINDA; elde TAM BEŞ parmak".
- İki el adıyla: "SAĞ eli tepsiyi, SOL eli telefonu tutuyor" + "İki el birbirinin aynası (biri sol, biri sağ); iki sağ el YOK".
*Kaynak:* 1233, 1234, 1235

### ISTEM-33 Sayı kayarsa
Sayı büyük harfle ve parantezle tekrarlanır: "BEŞ katlı (dört değil)" (G40'ta beş katlı pasta dört çıktı).
*Kaynak:* 453

### ISTEM-34 Pencereden İstanbul
Pencere görünen mekânda: "pencereden İstanbul: eski apartmanlar, uzakta minare / Boğaz" (G35, G39'da Lizbon, Paris çatıları çıktı).
*Kaynak:* 454

### ISTEM-35 Kalabalık kare
- Kare promptunda kişi sayısı yazılır: "Kadrajda TAM n kişi: …" (K19'da kenardaki Cengo düştü); gelince metindeki kare satırıyla (`vakaN_diyalog.md` → `{kare: Kn}`) sayılır, adı geçen herkes var mı bakılır.
- Her kişi için parantez içinde referans numarası ve kıyafet özeti. Örnek: "Peri (ikinci referans; kısa bej trençkot kemeri bağlı, krem eşarp, güneş gözlüğü alnında, kırmızı stiletto, ÇORAP YOK)". Peri varsa "en gösterişli kadın" satırı (ISTEM-21); her elin işi.
*Kaynak:* 456, 1209, 1426, 1427, 1428, 3077

### ISTEM-36 Kim kimi görüyor
Saklanma/gizlilik karesinde kamera ve engel tarif edilir ("kamera masanın arkasında, ön panel kapalı" → seyirci Peri'yi görür, Saadet görmez; K20'de masanın açık yüzü kapıya dönmüştü).
*Kaynak:* 457, 3077

### ISTEM-37 Detay karede elin sahibinin kıyafeti
Detay karede elin sahibinin kıyafeti yazılır (Gülsüm: kısa kollu tişört, gri önlük), şüpheliyle karışmasın (G44'te siyah uzun kol Lâl'i çağrıştırdı).
*Kaynak:* 458

### ISTEM-38 Çorap
Bacak görünen her kadın görselinde: "ince ten rengi KÜLOTLU çorap; üst bandı hiçbir yerde görünmüyor" (Vaka 2 G8–G13; sahibinin kararı: bant kaldırılır). G8–G12 "iki bacakta KÜLOTLU çorap, bant hiçbir yerde görünmesin" istemiyle yeniden üretildi (Grok, 912×1136). Otomatik rötuş denendi, olmadı (bant etek ucuna yapışık, krema üstünden geçiyor; maske gölgeyi de bant sanıyor) — bu yola dönülmez. Not: bu kararın doğduğu G8–G13 Peri'nin resimleriydi (Vaka 2, Sohbet 1); sonradan Peri için "çorap yok" sabiti kondu (ISTEM-20) ve hiçbir kaynak birinin öbürünü iptal ettiğini söylemiyor: CELISKI-ISTEM-7.
*Kaynak:* 452, 3066

### ISTEM-39 Yorgun göz
"Yorgun gözler" yazılmaz (model morluk çizdi); yerine: "iki gözün altında hafif koyu halka; morluk ya da yara yok".
*Kaynak:* 1160, 1442

### ISTEM-40 Unlu ya da kirli karakter
"un bembeyaz, kalın tabaka; saç, kaş ve sakal dahil; yüz genç" + tarz paragrafı. Yazılmazsa karakter yaşlı, gri çıkıyor, fotoğrafa kayıyor.
*Kaynak:* 1161, 1435

### ISTEM-41 Işık ve saat
Loş sahne fazla aydınlık çıkmasın diye hangi lambanın yanık, hangisinin sönük olduğu tek tek ve saat (sabah, akşam) açıkça yazılır.
*Kaynak:* 1162, 1431

### ISTEM-42 Konum ve fizik
Oturan figürün nereye oturduğu, bacaklarının nereye sarktığı, dirseğinin neye dayandığı yazılır ("pervazın ön kenarında, bacakları kaloriferin önünde"); havadaki nesnenin konumu başa göre ("başının epey yukarısında").
*Kaynak:* 1163, 1165, 1432

### ISTEM-43 Kadraj sınırı yüzdeyle değil görsel tarifle
Yüzde tutmuyor ("alt %20 boş" tekrar edildi, 3 üretimde ayaklar yine taştı). Görsel tarif: "kişiler daha küçük ve kadrajda daha yukarıda; en öndekinin ayakkabısı dahil herkesin ayakları üst %80'in içinde".
*Kaynak:* 1164, 1433, 1441, 1493

### ISTEM-44 Saç toplu satırı (yan karakter); Peri ve Cengo istisna
- Yan karakter isteminde: "saçın dış çizgisi toplu; zemine taşan ince tel yok" (eşarplıysa "saçın tamamı eşarbın içinde"). Gerekçe: dağınık teller zemine taşınca kesimden sonra teller arasında zemin halesi kalıyor (v3 G1, G4). Hale tek başına ret sebebi değil: gömmede yalnız baş kutusunda temizlenir (`5_gorsel_sistemi.md` → F "Hale temizliği yöntemi"; Vaka 1–2'de böyle).
- Peri ve Cengo istisna (sahibi, 6 Kasım): saçları dağınık kalır; onlara bu satır yazılmaz, kesimde kalan hale gömmede temizlenir.
*Kaynak:* 1171, 1193, 2967

### ISTEM-45 Arka plan (mekân) istemi
- Referans: `../referanslar/tarz_mekan_ic.jpg` ya da `tarz_sokak.jpg`. Işık yasaklanmaz: eski mekânların altın saat ışığı, gün batımı ve denizi bu referanstan geliyor; "gün batımını alma, ışık gündüz" yazınca mekân düz ve sıradan çıktı (sahibi fark etti). İstemde saat yazılır (ör. "sabah"), ışık referanstan gelir.
- İstem: tarz paragrafı → `Mekân: …` ZENGİN ve somut (malzeme, renk, lamba, çini, pencereden ne görünüyor; İstanbul) → yasak nesneler adıyla → "İnsan yok; kadraj boş bir sahne gibi, figürler sonradan önüne konacak (ortası açık)." → `Kompozisyon:` satırı (ISTEM-46) → yazı yasağı → "Görselin oranı TAM 3:4, dikey (1086×1448)."
- `istem_kontrol.sh` arka planda "İnsan yok" yoksa geçirmez.
*Kaynak:* 1201, 3581

### ISTEM-46 Mekân kompozisyonu tekrar etmez (§7a)
13 Kasım 2026, sahibi: "üretilen sokak resimleri önceki vakalardakine çok benzer olmamalı". Referans resim ışıkla birlikte kompozisyonu da taşıyor (Vaka 3–5 sokaklarının 4–5'i aynı kare: ortada uzaklaşan arnavut kaldırımı, ucunda deniz + güneş diski + vapur + cami silüeti; iç mekânların çoğu ortadan uzaklaşan koridor; V6'nın ilk G11'i de aynısıydı, saat "sabah" iken gün batımı). Her mekân isteminde:
- `Kompozisyon:` satırı — kamera nerede durur, nereye bakar; ön, orta, arka planda ne var. Metnin istediği an (ör. "bankta oturup kapıya bakar") kompozisyonu belirler.
- Referans satırı: "yalnız boya dokusu ve sıcak renk; KOMPOZİSYONUNU ALMA".
- `istem_kontrol.sh` arka plan isteminde `Kompozisyon:` arar; yoksa geçirmez (eski mekân kalıbı tekrar eder).
*Kaynak:* 1201, 1202, 1203, 1207, 3582

### ISTEM-47 Duvardaki portre/afiş
Duygu abartısız yazılır ("zarif, abartısız bir gülümseme"); "göz kamaştırıcı gülümseme" karikatür sırıtış verdi.
*Kaynak:* 1208

### ISTEM-48 Ara kare, detay, kart afişi
Tarz paragrafı VAR. Mekân ve kişiler onaylı resimlerden (`onayli/G<n>.png`) referans verilir; tarzı onlar taşır. Kalabalıkta ISTEM-35. Kurallar ayrıca `uretim/CLAUDE.md` → Vaka 3 dersleri tablosu (ISTEM-53).
*Kaynak:* 1209, 1184

### ISTEM-49 Boya dokusu yüzde, kumaş pürüzsüz
13 Kasım 2026, sahibi (G18 ve Eylül'de buldu): "görünür fırça darbesi, dokulu boya" vurgusu düz ve açık renk geniş kumaşta (gömlek, kot) köşeli kırışık / buruşturulmuş kâğıt dokusu yapıyor. Tarz vurgusu yazılırken: "boya dokusu yüzde, saçta ve ışıkta; kumaş pürüzsüz, yumuşak geçişli". Ütülü kıyafete ayrıca "kusursuz ütülü, pürüzsüz"; buruşuk kıyafete "doğal kumaş kırışığı, yumuşak kıvrım; folyo/kâğıt gibi köşeli değil". "Sıcak altın ışık" saçı açabilir: koyu saçlı karakterde "ışık saçın rengini açmasın" (G18'de saç kızıla çalan kahve çıktı).
*Kaynak:* 1229

### ISTEM-50 Kontrol bölümü
Her istem dosyasında `## Kontrol` bölümü ve `## İstem` bölümü bulunur (`istem_kontrol.sh` yoksa geçirmez). Kontrol satırı: o resimde en kolay bozulacak 2–5 şey. Vaka 3'te en sık bozulanlar: Gizem'in tişörtü, cihazlarda logo ve rakam, Peri'nin ayakkabısı, kadraj sınırı, fazla uzuv, profil yüz.
*Kaynak:* 1069, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 3559, 3560

### ISTEM-51 `## Satırlar` bölümü
Figür, ara kare ve detay isteminde `## Satırlar` bölümü bulunur (satır–resim uyumu zorunlu, sahibinin kalıcı kararı 6–7 Kasım; ISTEM_KALIPLARI §10, SR-D, SR-E, SR-K); figürde boş olamaz. Yalnız satırların istediği ifade üretilir. `istem_kontrol.sh` yoksa geçirmez.
*Kaynak:* 3566, 3578, 2967, 2630

### ISTEM-52 `istem_kontrol.sh` geçmeden üretim yok
13 Kasım 2026, sahibinin isteği: `cd uretim && ./istem_kontrol.sh v<N>/prompts/*.md` — çıkış 0 olmadan üretim başlatılmaz. Döngü de her istemi bundan geçirir; geçmeyeni ÜRETMEZ (`$DONGU_LOG/kontrolden_gecmedi.txt`). Liste mekanik olanı yakalar (Satırlar, zemin, iki zemin denemesi, "X'e benzemiyor", kart referansı, dekolteli referans, 5 referans sınırı ve ISTEM-4, 6, 7, 9, 10, 13, 15, 16, 17, 19, 27, 28, 31, 45, 46, 50, 51, 55'te sayılan denetimler); istem dosyasında `- tür:` satırı (figür / ara kare / detay / arka plan / kıyafet kartı / kart afişi) okunamazsa da geçirmez. Anlam (yüz satıra uyuyor mu, Nurcan, eski karakterlere benzerlik) yine elle okunur.
*Kaynak:* 1080, 540, 3585

### ISTEM-53 Vaka 3 dersleri istemde baştan uygulanır
`uretim/CLAUDE.md`'deki Vaka 3 dersleri tablosu istem yazılırken baştan uygulanır (denetimde de aranır). Boy, bakış, kesim, saç için: H. Görsel standart + `arac_yanyana.js`.
*Kaynak:* 1068, 1168

### ISTEM-54 İfade ızgarası yok
Bir istekte birkaç ifade istenmez (çözünürlük düşüyor; sahibinin kararı, Vaka 2).
*Kaynak:* 3082

### ISTEM-55 İstemde sigara sözü yok
İstem sigara/tütünü hiç anmaz (kural 19a, 16 Kasım 2026); `istem_kontrol.sh` sigara, izmarit, kül tablası, tütün, puro, pipo, nargile, çakmak, cigar, smoke, smoking sözünü bulursa geçirmez.
*Kaynak:* 3565

### ISTEM-56 Vaka 5: susam değil yosun
Vaka 5'in adım 8'inde istem yazarken: susam değil yosun.
*Kaynak:* 2869

### ISTEM-57 Her vakaya kendi masa kartı
Her vakaya kendi masa kartı (`MASA_V<N>`, kart afişinden yatay kırpık) — sahibinin kalıcı kararı (6–7 Kasım).
*Kaynak:* 2967
