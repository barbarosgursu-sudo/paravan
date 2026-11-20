# Konular arası tekrar adayları (eşik 0.25, 250 çift)

Üretildi: `node adim3/aday.js 0.25`. Her çiftte iki kuralın KURALLAR.md'deki tam metni.

## 1. ISTEM-20 ↔ DENETIM-20 (0.71)

### ISTEM-20 Karakter sabitleri her istemde
- Karakter sabitleri her istemde tek tek yeniden yazılır; referansa güvenilmez (Vaka 2 K24, G19: ayakkabı yeşil, saç kumral çıktı). Ör. "kırmızı stiletto", "platin saç".
- Peri: HER istemde "kırmızı stiletto" (Vaka 3'te ayakkabı siyah çıktı) ve "çorap yok" (sahnelerde "ÇORAP YOK"). Ayakkabının istisnası (vakanın formu başka ayakkabı yazıyorsa o: Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı) ve sabitler tablosu: KAR-23 (uretim/CLAUDE.md, karakter sabitleri). Peri'de çorap yok; ISTEM-38'deki külotlu çorap kuralı Peri'ye uygulanmaz (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 15). Mantolu Peri'nin altında siyah kalem etek (sahibinin duran kuralı, 7 Ekim 2026).
- Kıyafet sabitleri kalıpta 8. sırada (vakaya göre: etek, ayakkabı rengi…). Karakter sabitleri listesi CLAUDE.md'de durmalı (Vaka 3'te tek sabit Peri'nin kırmızı stilettosuydu; diğer karakterlerde benzeri tutulur).
*Kaynak:* 551, 1157, 1492, 1496, 451, 3119, 437

### DENETIM-20 Karakter sabitleri
Karakter sabitleri görünüyorsa her resimde denetlenir, uymazsa ret. Örnek: Peri'nin ayakkabısı HER resimde kırmızı stiletto (doğru örnek: Vaka 3 onaylı G49); siyah ya da başka renkse ret, düzeltme notu: "Peri'nin ayakkabıları kırmızı stiletto." (İstisna, `uretim/CLAUDE.md` karakter sabitleri tablosundan: vakanın formu başka ayakkabı yazıyorsa o — Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı.) Kayıt: G63 ve G65 siyah stilettoyla geldi; sahibi bunu karakter sabiti yaptı, kural 2026-11-04'te CLAUDE.md'ye eklendi ve eklenince eski onaylıların hepsine geriye dönük bakıldı. Kontrol listesinde: "Kıyafet sabitleri tutuyor mu?"
*Kaynak:* 466, 1118, 1305, 1509, 1510

## 2. SINIR-13 ↔ KOD-78 (0.71)

### SINIR-13 Sigara yok
Ortağın isteği, sahibinin (Barbaros) onayı, 16 Kasım 2026; bütün seri.
- Hiçbir yerde sigara içilmez ve sigarayla ilgili hiçbir konu geçmez: replik, sahne notu, ipucu, olgu, ifade/poz adı, kare tarifi, istem.
- Sigara içen ya da kadrajında sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile, duman bulunan resim yapılmaz (5. parça A).
- İstem bunları hiç anmaz ("sigara yok" bile yazılmaz); `uretim/istem_kontrol.sh` istemde sigara/tütün sözünü yakalar. "Mola", "dışarıda
  bekleme" gibi anlar sigarasız kurulur ve tarif edilir (V7: Nesrin ile Cengo basamakta oturup kedilere bakar).
- Resim denetiminde (5. parça E.13) yakın bakışla aranır. Form onaya gitmeden kontrol listesinde işaretlenir: "[ ] Sigara yok (kural 19a)".
- Durum (16 Kasım 2026): Vaka 7'deki tek örnek (Nesrin ipucu, arka avlu) değiştirildi, `nesrin.sigara` ifadesi silindi; yeni oyunun verisinde
  (V1–V7) ve şablonlarda başka sigara geçmiyor. Doğrulayıcıda "sigara/tütün/izmarit" metin taraması henüz yok (kod adımında eklenebilir).
*Kaynak:* 198, 349, 668, 1054, 2774

### KOD-78 Sigara yok
Metinde, sahne notunda, ifade adında, istemde sigara yok (kural 19a).
*Kaynak:* 755

## 3. YAPI-45 ↔ ARAYUZ-22 (0.70)

### YAPI-45 Dallanma yok
Dallanma YOK (Chapters dallanır, biz dallanmayız): kararlar birleşir; değişen şey hikâyenin yolu değil, bilgi ve bağdır (eski metindeki "para" ve "tohum" sonradan kalktı: YAPI-43, YAPI-44). Dallanmada yazılanın çoğunu kimse görmez; bizde her şey oynanır, sadece farklı anlama gelir. Ayrıca dallanma bütün Nurcan mimarisini yıkar. Eski oyundan yeni oyuna aynen taşınan yapı sözleşmelerinden biridir.
*Kaynak:* 1724, 2044, 2049

### ARAYUZ-22 Seçim dallanmaz
Oyuncu bir cevap seçer; birkaç satır değişir, hikâye **dallanmaz.**
*Kaynak:* 291

## 4. SINIR-13 ↔ ISTEM-55 (0.68)

### SINIR-13 Sigara yok
Ortağın isteği, sahibinin (Barbaros) onayı, 16 Kasım 2026; bütün seri.
- Hiçbir yerde sigara içilmez ve sigarayla ilgili hiçbir konu geçmez: replik, sahne notu, ipucu, olgu, ifade/poz adı, kare tarifi, istem.
- Sigara içen ya da kadrajında sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile, duman bulunan resim yapılmaz (5. parça A).
- İstem bunları hiç anmaz ("sigara yok" bile yazılmaz); `uretim/istem_kontrol.sh` istemde sigara/tütün sözünü yakalar. "Mola", "dışarıda
  bekleme" gibi anlar sigarasız kurulur ve tarif edilir (V7: Nesrin ile Cengo basamakta oturup kedilere bakar).
- Resim denetiminde (5. parça E.13) yakın bakışla aranır. Form onaya gitmeden kontrol listesinde işaretlenir: "[ ] Sigara yok (kural 19a)".
- Durum (16 Kasım 2026): Vaka 7'deki tek örnek (Nesrin ipucu, arka avlu) değiştirildi, `nesrin.sigara` ifadesi silindi; yeni oyunun verisinde
  (V1–V7) ve şablonlarda başka sigara geçmiyor. Doğrulayıcıda "sigara/tütün/izmarit" metin taraması henüz yok (kod adımında eklenebilir).
*Kaynak:* 198, 349, 668, 1054, 2774

### ISTEM-55 İstemde sigara sözü yok
İstem sigara/tütünü hiç anmaz (kural 19a, 16 Kasım 2026); `istem_kontrol.sh` sigara, izmarit, kül tablası, tütün, puro, pipo, nargile, çakmak, cigar, smoke, smoking sözünü bulursa geçirmez.
*Kaynak:* 3565

## 5. KAR-6 ↔ SINIR-4 (0.63)

### KAR-6 Peri her zaman en gösterişli kadındır
Sahibinin kararı, 10 Ekim 2026. Eski güzellik kraliçesi olduğu için vakadaki kadınların içinde en gösterişli ve en seksi odur. Başka bir kadınla aynı karede Peri açıkça daha alımlı görünür (ışık, duruş, kıyafet); öbür kadınlar çekici kalır ama onu gölgede bırakmaz.
*Kaynak:* 192

### SINIR-4 Peri her zaman en seksi kadın
Peri her resimde, vakadaki kadınların içinde her zaman en gösterişli ve seksi olandır; dekolte istenir. Asıl kural: kural 15b, sahibinin kararı,
10 Ekim 2026 (KAR-6, no 192); 17 Ekim 2026'da Vaka 3 için sürdürüldü; 6 Kasım 2026 "dünkü ayarlar". Aynı karede Peri açıkça daha alımlı
görünür (ışık, duruş, kıyafet); öbür kadınlar çekici kalır ama onu gölgede bırakmaz. Başka bir kadınla (ör. Gizem) yan yana Peri çok daha alımlı görünür. Vaka 3'te kıskançlık bundan
doğar: Peri üstün olduğu hâlde huzursuzlanır. Görsel istemlerine (adım 8) baştan konur.
*Kaynak:* 1210, 2566, 2997 (asıl hâli 192, KAR konusunda, KAR-6)

## 6. SINIR-13 ↔ DENETIM-35 (0.60)

### SINIR-13 Sigara yok
Ortağın isteği, sahibinin (Barbaros) onayı, 16 Kasım 2026; bütün seri.
- Hiçbir yerde sigara içilmez ve sigarayla ilgili hiçbir konu geçmez: replik, sahne notu, ipucu, olgu, ifade/poz adı, kare tarifi, istem.
- Sigara içen ya da kadrajında sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile, duman bulunan resim yapılmaz (5. parça A).
- İstem bunları hiç anmaz ("sigara yok" bile yazılmaz); `uretim/istem_kontrol.sh` istemde sigara/tütün sözünü yakalar. "Mola", "dışarıda
  bekleme" gibi anlar sigarasız kurulur ve tarif edilir (V7: Nesrin ile Cengo basamakta oturup kedilere bakar).
- Resim denetiminde (5. parça E.13) yakın bakışla aranır. Form onaya gitmeden kontrol listesinde işaretlenir: "[ ] Sigara yok (kural 19a)".
- Durum (16 Kasım 2026): Vaka 7'deki tek örnek (Nesrin ipucu, arka avlu) değiştirildi, `nesrin.sigara` ifadesi silindi; yeni oyunun verisinde
  (V1–V7) ve şablonlarda başka sigara geçmiyor. Doğrulayıcıda "sigara/tütün/izmarit" metin taraması henüz yok (kod adımında eklenebilir).
*Kaynak:* 198, 349, 668, 1054, 2774

### DENETIM-35 Sigara ve duman
Sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile ya da duman var mı? Varsa ret (kural 19a).
*Kaynak:* 474

## 7. ISTEM-7 ↔ GOMME-16 (0.59)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### GOMME-16 Zemin: özellik ve yazılımla seçim
- Zemin düz, tek renk, gölgesiz; üstünde hiçbir nesne yok.
- 14 Kasım 2026'dan beri (sahibinin kararı) zemin KIYAFETE göre yazılımla seçilir: `kaynak/arac_zemin.py`. Saça bakan eski tablo yalnız tarihî kayıttır (V6'da Peri'nin mesai kıyafeti — krem gömlek + mavi kot — gri-mavi zemine kondu, kesimde kot zeminle birlikte silindi).
- Zeminler tek listede: `uretim/referanslar/zeminler.tsv` — yalnız DENENMİŞ iki zemin, sırasıyla açık bej → gri-mavi (sıra saç halesi tecrübesinden; kaynak hangi tecrübe olduğunu söylemiyor — gri-mavinin açık saçta hale bıraktığı V6 olayı için bkz. GOMME-19). Zemin adları zeminler.tsv'den.
- Zeminin saça yakın olmaması dersi (6 Kasım 2026 kuralının gerekçesi; o kural artık tarihî kayıt): Vaka 3'te kızıl/bal dağınık saç yeşil zeminde kesilince teller arasında zeytin-yeşil sis kaldı, `arac_hale.py` ile ancak temizlendi; bej zemindeki Cengo, Kenan, Sedat'ta hale çıkmadı.
- Yeşil zemin artık kullanılmaz (kızıl saçın karşıtı; karışımı göze batıyor).
- Her zemin için figürün yüzde kaçının zemine kesim toleransı kadar yakın olduğu ölçülür; riski %5'in altındaki ilk zemin seçilir.
- Karar `uretim/v<N>/zemin.tsv`'ye yazılır; `istem_kontrol.sh` istemin zeminini onunla karşılaştırır, uymayan istem üretilmez.
*Kaynak:* 528, 529, 535, 536, 540, 1084

## 8. ISTEM-55 ↔ KOD-78 (0.59)

### ISTEM-55 İstemde sigara sözü yok
İstem sigara/tütünü hiç anmaz (kural 19a, 16 Kasım 2026); `istem_kontrol.sh` sigara, izmarit, kül tablası, tütün, puro, pipo, nargile, çakmak, cigar, smoke, smoking sözünü bulursa geçirmez.
*Kaynak:* 3565

### KOD-78 Sigara yok
Metinde, sahne notunda, ifade adında, istemde sigara yok (kural 19a).
*Kaynak:* 755

## 9. YAPI-41 ↔ RAF-111 (0.58)

### YAPI-41 Rozetler yalnız komik anlar için
9 Kasım 2026 raf kararı. Rozetler yalnız komik anlar içindir; iyi/kötü karar için rozet YOK (oyun not vermez). Vaka başına en fazla bir-iki, yalnız gerçekten komik bir an varsa; hiç rozeti olmayan vaka da olur.
*Kaynak:* 1698, 1703

### RAF-111 Paravan'ın rozetleri: komik anlar, Play başarı sistemi yok
Rozetler yalnız komik anlar için ("Pastaya oturdun", "Saadet Hanım'dan üç kez saklandın"); iyi/kötü karar için rozet yok — oyun not vermez. Yalnız kazanılanlar görünür, liste/sayı yok (9 Kasım 2026). Google Play başarı sistemi kullanılmaz (bütün listeyi ve sayıyı kendisi gösterir, gizliler bile sayılır).
*Kaynak:* 1702, 2011, 3019

## 10. TON-8 ↔ SATIR-14 (0.58)

### TON-8 Sahne notu yalnız o an görüleni söyler
Sahibinin kararı, 8 Kasım 2026 (5. parça SR-H; kural kitabı 4a). Anlatı satırı karakterin aklındakini ya da sonra ortaya çıkacak bir gerçeği yazmaz. "Sonra parayı sakladığı depoya doğru koşuyor" yanlıştır (para itirafta ortaya çıkıyor); "Sonra depoya doğru koşuyor" doğrudur. Bulanık replik taramasındaki "Nereden biliyor?" sorusu sahne notlarına da sorulur (TON-14).
*Kaynak:* 176, 701

### SATIR-14 SR-H Anlatıcı da "nereden biliyoruz?" sınavından geçer
Anlatı (sahne notu) satırı yalnız o an görülebileni söyler (kural kitabı 4a). Hatalı örnek: "parayı sakladığı depoya doğru koşuyor" — para itirafta ortaya çıkıyor.
*Kaynak:* 6, 384, 2628

## 11. ISTEM-55 ↔ DENETIM-35 (0.57)

### ISTEM-55 İstemde sigara sözü yok
İstem sigara/tütünü hiç anmaz (kural 19a, 16 Kasım 2026); `istem_kontrol.sh` sigara, izmarit, kül tablası, tütün, puro, pipo, nargile, çakmak, cigar, smoke, smoking sözünü bulursa geçirmez.
*Kaynak:* 3565

### DENETIM-35 Sigara ve duman
Sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile ya da duman var mı? Varsa ret (kural 19a).
*Kaynak:* 474

## 12. ARAYUZ-36 ↔ RAF-47 (0.54)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-47 Paravan'ın reklam/kredi tablosu
Paravan için (satın alma = o sezonu satın almak):

| | Vaka 1–2 | Vaka 3+ (satın almadı) | Satın aldı |
|---|---|---|---|
| Vaka geçişi | Reklamsız | Kredi (reklam) ya da satın alma | Reklamsız |
| +1 araştırma hakkı | Reklamsız (düğmeyle) | Kredi (reklam) | Reklamsız (düğmeyle) |
| Kaçırılan ipuçları | Reklamsız | Kredi (reklam) | Reklamsız |
| Dosyanın tamamı (vaka özeti) | Reklamsız | Kredi (reklam) | Reklamsız |
| Kıyafet (gardırop) | Yok | Yok | Yok |
*Kaynak:* 1600, 1602, 1603, 1604, 1605, 1606

## 13. SUREC-27 ↔ KOD-32 (0.53)

### SUREC-27 Sızıntı taraması
22 Ekim 2026, sahibinin kararı — her vakadan sonra (adım 5'te ve adım 14'ün ön koşulu olarak): `cd kaynak && node build_html.js yeni &&
node arac_sizinti_tur.js VN [tur]` (ör. `V6 40`). İki parça: (1) araç oyunu farklı yollardan oynar, her ekranda oyuncunun o an bilmediği
olgunun metni / kısa adı çıkıyor mu bakar — bulursa çıkış 1 (= sızıntı); (2) `kaynak/YENI_UI/sizinti_okuma.txt` ELLE okunur (Nurcan):
"Dosya çözüldü", `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız her yolda oynayan sahnelerin (yüzleşmeler + kovalamaca
itirafı) söylediğini mi anıyor? Bir ipucunun bilgisi geçiyorsa sızıntıdır (22 Ekim'de 9 tane böyle bulundu: "kodu, fişi", "Gizem'in
fotoğrafı", "örtüyü"…). Bulgu sahibine kısa liste olarak verilir; düzeltme tek tek, önce/sonra gösterilerek yapılır (SUREC-1).
*Kaynak:* 694, 2783

### KOD-32 Her vakadan sonra sızıntı taraması
Sahibinin kararı: `cd kaynak && node arac_sizinti_tur.js [VN] [tur]` (ör. `V5 40`) — farklı yollardan oynar, her ekranda bilinmeyen olgu arar (çıkış 1 = sızıntı) ve `YENI_UI/sizinti_okuma.txt`'yi elle okunmak üzere yazar. Şablon 7. parça adım 5 ve 14. Test değil, araç.
*Kaynak:* 15, 2886

## 14. YAPI-7 ↔ KOD-73 (0.53)

### YAPI-7 Yanlış iz ve aklanma
- Her yanlış şüphelinin onu suçlu gösteren bir izi vardır.
- Her yanlış izi çözen (şüpheliyi aklayan) bir kanıt vardır.
- Formun şüpheli tablosunda her şüpheli için "onu şüpheli gösteren iz" ve "onu aklayan kanıt" satırı (suçluda aklayan kanıt "—") doldurulur.
*Kaynak:* 124, 125, 592, 593, 656

### KOD-73 Şüpheli ve Kim yaptı? yolları
3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var. Her ipucu yolunda "Kim yaptı?" ekranı çalışır (tam, zayıf ya da yanlış sonuç).
*Kaynak:* 741, 744

## 15. SATIR-36 ↔ KOD-44 (0.52)

### SATIR-36 Cengo satırı etiketli replik olarak yazılır
Diyalogda Cengo satırı **etiketli** yazılır: `**CENGO [ifade]:** metin {yuz: peri.x}` → büroda Cengo'nun repliği (16 Kasım 2026). Etiketsiz `**CENGO:**` eski düzendir (anlatı satırı; V1–V5 yeniden geçirilene dek).
*Kaynak:* 633

### KOD-44 Karar alanları (16 Kasım 2026 düzeni)
- `secenek` = Peri'nin seçim cümlesi (diyalogda `**SEÇENEK:**`); `cengo_sonuc` = Cengo'nun büroda satırı.
- `cengo_replik: { i, yuz }` varsa o satır Cengo'nun repliği olarak oynar (`k: "cengo", kime: "peri"`, `i` Cengo'nun ifadesi, `yuz` dinleyen Peri'nin yüzü); diyalogda etiketli `**CENGO [ifade]:** metin {yuz: peri.x}`. Etiketsiz `**CENGO:**` → `cengo_replik` yok → eski düzende anlatı satırı (V1–V5, V7 yeniden geçirilene dek).
- `kim_yapti.cengo_kanit: { olgu: metin }` ve `kim_yapti.cengo_kanit_replik: { olgu: { i, yuz } }` aynı biçimden gelir (`## cengo_kanit` → `**olgu [ifade]:** metin {yuz: peri.x}`).
- Eski alanlar: `onizleme` = eski karar ekranındaki tek cümlelik kısa sonuç (artık gösterilmez; zorunlu değil, doğrulayıcı da istemez (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19)); `para` = karar parası (hikâye rakamı; kasa yok); `gate: "yok"` (kapı yok); `seed_yaz` yok (tohum yok).
*Kaynak:* 2435

## 16. SUREC-42 ↔ ARAYUZ-37 (0.52)

### SUREC-42 Test için vaka düğmeleri
Vaka 2 donduktan sonra (sahibinin isteği, 16 Eki 20:20): "Baştan başla" penceresinde her vakaya düğme ("Vaka N · Başlık (test)", Vaka 1
dahil, açılış atlanır) — `VN_VAKA_ATLA = true`. Yeni vaka eklenince düğmesi kendiliğinden çıkar. **Yayından önce `false` yapılır.**
(Kayıt: Vaka 2 toplam ≈ 11 sa 06 dk, tablo `vaka2_baslangic.md` §1; 63 görsel = 59 + Onay 3'te 4.)
*Kaynak:* 3055

### ARAYUZ-37 "Vaka N'den başla" test düğmeleri (GEÇİCİ)
"Baştan başla" onay ekranında her sonraki omurga vakası için bir düğme (10 Ekim 2026, sahibinin testi için). Önceki vakalar motorda kendiliğinden oynanır (her ipucu, doğru suçlama, ilk karar). Şimdilik AÇIK KALIR (`VN_VAKA_ATLA = true`, sahibinin kararı, 9 Kasım 2026); **yayından önce** `yeni_arayuz.js` → `VN_VAKA_ATLA = false`.
*Kaynak:* 2454, 2938, 3017, 3079

## 17. BILGI-21 ↔ ARAYUZ-35 (0.51)

### BILGI-21 Rozetler: yalnız kazanılan görünür
(Paravan rozetleri ve sezon sonu tablosu, 9 Kasım 2026.) Yalnız kazanılan rozetler görünür. Liste yok, sayı yok ("12'nin 3'ü" YOK), gri/kilitli kutu yok — gri bir rozetin adı görülmemiş bir sahneyi söyler (Nurcan), sayı nottur. Oyuncu rozeti kazandığı an varlığını öğrenir.
*Kaynak:* 1699

### ARAYUZ-35 Defter → Rozetler sayfası
Defter'de "Rozetler" sayfası: yalnız kazanılanlar, hangi vakada kazanıldığıyla (komik anların albümü). (9 Kasım 2026.)
*Kaynak:* 1701

## 18. ARAYUZ-36 ↔ RAF-48 (0.51)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-48 İlk iki vakada reklam yok
İlk iki vakada hiç reklam yok. Reklam ilk kez Vaka 2 → 3 geçişinde, satın alma seçeneğiyle yan yana çıkar.
*Kaynak:* 1607

## 19. ARAYUZ-36 ↔ RAF-59 (0.51)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-59 Yalnız ödüllü reklam
Yalnız ödüllü reklam. Afiş (alt şerit) reklam yok, zorunlu ara reklam yok — rafın değişmez sözü.
*Kaynak:* 1622, 1995

## 20. GOMME-12 ↔ KOD-91 (0.50)

### GOMME-12 Künye portresi
Her figürlü kişinin yüzü portreye kırpılır (`yeni_gorsel/portre/`): her yeni kişinin figürü gömülünce `python3 arac_portre.py <figür_normal> yeni_gorsel/portre/portre_<id>.webp` + `gorseller.json`. (16 Ekim; sahibi buldu: Vaka 2'nin yedi konuğunda yoktu.) `test_yeni_v2.js` eksik portreyi yakalar.
*Kaynak:* 489, 1146, 2580

### KOD-91 Defter ve Künye vaka başına
- (17 Ekim 2026) Zincir yalnız içinde bulunulan vakayı gösterir; Anı her biten vakanın anı özetini (diyalogda `## ani`, `kisiler.json → ani_ozet`; kural 21d: yalnız itirafın söylediği), kimi suçladığını, kararını ve Peri'nin notunu basar (kasa 16 Kasım 2026'da kalktı) (`yeni_arayuz.js → defterZincir, defterAni`).
- Künye (Kişiler) yalnız içinde bulunulan vakanın kişilerini gösterir (`yeni_arayuz.js → vnKisiGorunur`); portre `python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`.
- Deneme reklamı (`reklamGoster`, +1 hak ve kaçırılan ipuçları) ve test için vaka düğmeleri (`VN_VAKA_ATLA`, yayından önce `false`): `kaynak/YENI_OYUN_CERCEVE.md`.
*Kaynak:* 15

## 21. DENETIM-35 ↔ KOD-78 (0.49)

### DENETIM-35 Sigara ve duman
Sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile ya da duman var mı? Varsa ret (kural 19a).
*Kaynak:* 474

### KOD-78 Sigara yok
Metinde, sahne notunda, ifade adında, istemde sigara yok (kural 19a).
*Kaynak:* 755

## 22. SATIR-31 ↔ KOD-79 (0.49)

### SATIR-31 Görsel–metin uyum denetimi (adım 11, Onay 3'ten önce)
Bulanık replik taramasının görsel kardeşi. Bütün görseller gömülünce görselli tur **bütün yollarda** koşulur (`arac_yeni_tur.js`) ve her ekran altındaki metinle yan yana, her sahne satır satır okunur. Bulunanlar tek listede toplanır (ayrıntı: `7_uretim_sureci.md` → Hızlandırma kuralları). Sorular:
- **Kim var?** Metindeki/kare satırındaki herkes ekranda mı; ekranda kaç figür var; fazladan ya da iki kez görünen var mı (Vaka 1: iki Cengo aynı ekranda)? (Adı geçen: SATIR-20.)
- **Kime konuşuyor?** Konuşan kim, karşısında kim; hitap ettiği kişi mi duruyor? (SATIR-3, SATIR-6.)
- **Yüz satıra uyuyor mu?** Konuşanın ve dinleyenin ifadesi bu satırın duygusu mu, önceki satırdan mı kalmış? (SATIR-15, SATIR-16.)
- **Anılan şey görünüyor mu?** Metindeki nesne, hareket, kıyafet (krema, örtü, kravat gevşek/çözük, gözlük elde).
- **Süreklilik:** kıyafet, saç, takı aynı mı; önceki olay iz bırakıyor mu? (SATIR-7.)
- **Yer ve zaman:** SATIR-32.
- **Görünürlük:** SATIR-33.
- **Nurcan** (sızıntı) da bu okumada aranır.
*Kaynak:* 718, 719, 720, 722, 723, 724, 725, 726, 2570, 2522, 2546, 2547, 2548, 2549, 2550, 2552

### KOD-79 Satır–görsel denetimleri
Hiçbir satırda ekranda aynı figür iki kez yok (Cengo hem solda hem sağda). Metinde anılan nesne ya da hareket o satırda görünür (satır → görsel tablosu).
*Kaynak:* 759, 761

## 23. KOD-92 ↔ ARAYUZ-32 (0.49)

### KOD-92 Paylaş (davet kartı) — yalnız yeni oyun
(17 Ekim 2026) Biten vaka "Arkadaşına öner" düğmesiyle paylaşılır (kapanıştan sonraki ekran — kaçan ipucu yoksa "Dosya kapandı" — ve Defter → Anı). Kart 1080×1920 tarayıcıda çizilir (`yeni_arayuz.js → paylasKartCiz`): vakanın afişi (`gorseller.json → kart`; yoksa `kapak` arka planı) ve altta KÜÇÜK bir kutu — vaka no/adı, "Sen olsan ne yapardın?" — ile bağlantı. Sahibinin kuralı: önce resim, yazı az; girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`). Suçlu, karar, suçlama, kasa, not karta GİRMEZ (Nurcan — arkadaş oynamadı; ve oyun not vermez). `navigator.share` varsa görselle paylaşır, yoksa indir + bağlantıyı kopyala. Afiş promptları ve iş sayfası `sablon/kart_sayfa/uret.py`; yeni vakanın afişi için kurallar `sablon/5_gorsel_sistemi.md` → G. Bağlantı önizlemesi (`og:` etiketleri) `build_html.js yeni`'de; görseli `yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`. Anı karşılaştırması ve davet kodu Android aşamasında.
*Kaynak:* 15

### ARAYUZ-32 Paylaş kartı (vaka)
Biten vaka afişli bir kartla paylaşılır (web'de kuruldu, 17 Ekim 2026; ayrıntı `CLAUDE.md` → "Paylaş"). Kart suçlu/karar/kasa taşımaz (kasa 16 Kasım 2026'dan beri yok). Her vakaya iki şey gerekir:
1. **Kapak** (`gorseller.json → kapak`, zorunlu, yedek): ipucu sahnelerinde geçen bir ARKA PLAN; yüzleşme/kovalamaca/kapanış ve K kareleri olmaz (Nurcan). `test_yeni_arayuz.js` kapaksız vakayı yakalar.
2. **Kart afişi** (`gorseller.json → kart`, `KART_V3`): kişiler + mekân, ipucusuz, hareketli. Adım 8'de görsel listesine eklenir, promptu `sablon/kart_sayfa/uret.py`'ye yazılır; kurallar `5_gorsel_sistemi.md` → **G**.
`giris` varsayılanının ilk cümlesi paylaşım mesajına girer: sızıntısız ve tek başına anlaşılır olsun.
Android'de kalan: anı karşılaştırması (bitirmiş arkadaşa kilitli) ve davet kodu.
*Kaynak:* 2008, 2578

## 24. ISTEM-57 ↔ GOMME-28 (0.49)

### ISTEM-57 Her vakaya kendi masa kartı
Her vakaya kendi masa kartı (`MASA_V<N>`, kart afişinden yatay kırpık) — sahibinin kalıcı kararı (6–7 Kasım).
*Kaynak:* 2967

### GOMME-28 Masa kartı (Ajansın Masası, vaka seçme)
Kart afişinden yatay kırpık, yüzler görünür: `magick yeni_gorsel/kart_v<N>.webp -resize 900x -crop 900x500+0+<y> +repage -quality 80 yeni_gorsel/masa_v<N>.webp`; `gorseller.json → dosyalar.MASA_V<N>` ve `game_data.json → vakalar[V<N>].giris_gorsel = "MASA_V<N>"` (yoksa önceki vakanın büro resmi görünür — Vaka 3'te sahibi buldu, 6 Kasım).
*Kaynak:* 1145

## 25. DENETIM-37 ↔ GOMME-2 (0.49)

### DENETIM-37 Kesim profili
Zemin bej → `konuk` (Peri `peri`, Cengo `cengo`); yeşil/gri-mavi → `konuk_beyaz_delik`. Kesim tutmazsa önce başka profil dene; yine olmazsa reddet.
*Kaynak:* 1136

### GOMME-2 Eski renk kesimi ve arac_hale.py — yalnız karşılaştırma / kayıt
Eski renk kesimi (`arac_kes.js`) ve `arac_hale.py` artık kullanılmaz (14 Kasım 2026); `arac_kes.js` yalnız karşılaştırma için (`--eski`).
- Komut: `node arac_kes.js <girdi> <çıktı.webp> --profil peri|saten|cengo [--genis]` — arka planı saydamlar, karakteri sabit çerçevesiyle kırpar (yoksa ifade değişince karakter ekranda zıplar). Profiller ve gerekçeleri: `YENI_OYUN_GORSEL_PROMPTLARI.md` → "KESİM ARACI". Paketle kullanımı `arac_paket.js --profil G<n>=<profil>`.
- Vaka 2'de eklenen profiller:
  - `peri_beyaz` / `cengo_beyaz` / `konuk_beyaz`: zemine yakın beyaz taşıyan görsel (krema, masa örtüsü, beyaz gömlek). Varsayılan profil (kenar tol 28, hale 60, delik doldurma) beyazı zeminle birlikte yer. Bu profiller kenar 8–10, hale 20–25, delik kapalı; zemin rengini kenardan 40 px içeriden okur (üreticinin kenar sütunları birkaç birim açık çıkıyor). `konuk_beyaz`, varsayılan `konuk`un delik doldurması Bülent ve Sarkis'in beyaz gömleğini delik delik yediği için eklendi.
  - `konuk_sag`: el ya da kol sol kenara uzanıyorsa. Araç zemin rengini satırın sol kenarından okur; orada parmak varsa o satırda ince zemin çizgisi kalır. Bu profil sağdan okur.
- Eski iş akışı (Vaka 2): zemine yakın renk silinirse (Peri'nin beyaz masa örtüsü G10–13, beyaz gömlekler) `--profil` ile değiştirilirdi. `cengo` profilinin çerçevesi Peri'ninkinden farklıdır; Peri'ye delik doldurmasız profil gerekirse `arac_kes.js` PROFILLER'e `peri` çerçeveli, `delik:false` bir profil eklenir. El çerçeveden taşarsa `--genis G<n>`.
- `arac_hale.py` yalnız yeşil zemin için yazıldı; başka zeminde kullanılacaksa önce eşiği denenir.
*Kaynak:* 27, 481, 482, 483, 543, 1144, 3049, 3074

## 26. SATIR-16 ↔ ARAYUZ-18 (0.48)

### SATIR-16 Dinleyenin yüzü de satıra uyar
Dinleyenin ifadesi de uyar: konuşmadığı satırda da hikâyeye uygun durur (tacı tutan Peri gibi). Konuşmayan dinleyenin yüzü değişecekse `{peri: ifade}` / `{cengo: ifade}` yazılır (önceki yüz kalmasın); her yeni olay/kişi girişinde bu işaret konur (Vaka 1: dinleyenin yüzü bir önceki satırdan kalmıştı — kızgın Peri). Kapı K8 (Vaka 6 ve sonrası): ekrandaki herkesin ifadesi o satırda yazılı olur (`[ifade]`, `gi`, `yuz`, `peri`, `cengo`).
*Kaynak:* 396, 404, 2523, 3553 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### ARAYUZ-18 İfade
Her satırda konuşanın ifadesi değişebilir. Dinleyen Peri'nin ifadesi de değişebilir.
*Kaynak:* 287

## 27. YAPI-47 ↔ RAF-65 (0.48)

### YAPI-47 "Dosyanın tamamı"
17 Ekim 2026. Vaka sonundaki ekranda ayrı düğme, reklamla açılır: 5–7 kısa paragraf, olay sırasıyla gerçekte ne oldu — suçlu ne yaptı ve neden, masumlar o gece neredeydi, yanıltan izler nereden geldi. Formun §2'sinden (Gerçek) düz dille. Diyalogda `## hikaye` bölümüne gider (`YENI_OYUN_CERCEVE.md`).
*Kaynak:* 636

### RAF-65 Dosyanın tamamı
(17 Ekim 2026, sahibinin kararı.) Kapanıştan sonraki ekranda (Kaçırdığın ipuçları / Dosya kapandı) ayrı bir düğme: "Dosyanın tamamı · reklam". Açan oyuncu vakanın gerçekte nasıl olduğunu olay sırasıyla okur (suçlu ne yaptı, neden; masumlar o gece neredeydi), "Geri" ile aynı ekrana döner. Kaçan ipucu reklamlarından bağımsızdır; bir kez izlenince o ekranda yeniden reklamsız açılır. Masaya dönünce kapanır, Defter'den açılmaz — reklamın ödülüdür. Metin diyalogda `## hikaye` (`**HİKÂYE:**` paragrafları) → `kim_yapti.hikaye`; yoksa `arac_diyalog.js` yazmaz. Ekran `yeni_arayuz.js → hikayeIzle, hikayeEkrani`. AÇIK SORU (sahibi): düğmenin yeri geçici — kaçan ipuçlarının altında durunca oyuncu ipuçlarını izlemeyip doğrudan hikâyeyi açar; Defter → Anı'ya ise vaka sonrası kimse gitmez. Şimdilik böyle kalıyor, sonra düşünülecek.
*Kaynak:* 2006

## 28. KAR-39 ↔ SINIR-2 (0.48)

### KAR-39 Paravan'ın yasal durumu (gerçek)
Sahibinin kararı, 5 Ekim 2026 (tekrarlanan espri). Türkiye'de özel dedektiflik için bir kanun yok: 1994'te hazırlanan Özel Dedektiflik Kanunu (3963) yürürlüğe girmedi. Meslek ne yasak ne lisanslı; delil hukuka uygun toplandığı sürece iş yapılabiliyor, çoğu büro "danışmanlık" ya da "araştırma" şirketi olarak çalışıyor.
*Kaynak:* 1819

### SINIR-2 Paravan'ın yasal durumu esprisinin sınırı
Türkiye'de özel dedektiflik kanunu yok; meslek ne yasak ne lisanslı. Bu, Paravan'ın tekrar eden esprisidir (sahibinin kararı, 5 Ekim 2026).
Espri yalnız Paravan'ın kendi tuhaf durumuyla ilgilidir: devlet, kurumlar, siyasi makamlar ve kişiler hakkında laf edilmez, kurum ve kişi
adı geçmez. Oyunda "kanunu yok, yürürlüğe girmemiş" kadarı söylenir, fazlası söylenmez.
*Kaynak:* 262, 1821

## 29. KOD-21 ↔ ARAYUZ-27 (0.47)

### KOD-21 Tarayıcı iletişim kutusu kullanma
claude.ai artifact çerçevesi `confirm()`/`alert()`ı engeller (kutu çıkmaz, `confirm` "hayır" döner); eski sayfanın "Baştan başla"sı bu yüzden hiçbir şey yapmıyordu. Yeni oyunda `yenidenBasla` sayfa içi onay ekranıyla değiştirildi. Yeni onay/uyarı eklerken iletişim kutusu kullanma.
*Kaynak:* 2412

### ARAYUZ-27 Tarayıcı uyarı kutusu yok
Claude sayfası engelliyor; her onay sayfanın içinde.
*Kaynak:* 309

## 30. ISTEM-49 ↔ DENETIM-31 (0.46)

### ISTEM-49 Boya dokusu yüzde, kumaş pürüzsüz
13 Kasım 2026, sahibi (G18 ve Eylül'de buldu): "görünür fırça darbesi, dokulu boya" vurgusu düz ve açık renk geniş kumaşta (gömlek, kot) köşeli kırışık / buruşturulmuş kâğıt dokusu yapıyor. Tarz vurgusu yazılırken: "boya dokusu yüzde, saçta ve ışıkta; kumaş pürüzsüz, yumuşak geçişli". Ütülü kıyafete ayrıca "kusursuz ütülü, pürüzsüz"; buruşuk kıyafete "doğal kumaş kırışığı, yumuşak kıvrım; folyo/kâğıt gibi köşeli değil". "Sıcak altın ışık" saçı açabilir: koyu saçlı karakterde "ışık saçın rengini açmasın" (G18'de saç kızıla çalan kahve çıktı).
*Kaynak:* 1229

### DENETIM-31 Kıyafet kartına uyum ve kumaş yüzeyi
Kıyafet onaylı karttaki gibi mi — boy, kesim, açık/kapalı hâli (SR-B, SR-C); kıyafet istemle tutuyor mu (kartın `bak` satırı). **Kumaş yüzeyi de** (13 Kasım 2026, sahibi G18'de buldu): ütülü kıyafet pürüzsüz mü (her yerde küçük köşeli kırışık = buruşturulmuş kâğıt/folyo dokusu → ret), buruşuk kıyafet kumaş gibi yumuşak kıvrımlı mı. Gövdeyi büyütüp bak.
*Kaynak:* 1129, 3048

## 31. ISTEM-15 ↔ CODEX-4 (0.46)

### ISTEM-15 Referans verme biçimi
- Her prompt referans dosyalarıyla birlikte gönderilir (`referans/G<n>-<sıra>_ad.png`); referanslar numaralı, aynı mesajda (Vaka 1'de referanslar sonradan istendi; sahibinin duran kuralı).
- Referanslar sırayla ve tam yolla verilir; sıra önemli, çünkü istem "birinci referans, ikinci referans…" diye konuşur.
- En çok 5 referans (ChatGPT sınırı; 16 Ekim 2026, Vaka 2 K33'te görüldü). `istem_kontrol.sh` 5'ten fazlasını geçirmez.
- Daha çok kişi gerekiyorsa o kişileri bir arada gösteren önceki bir kare tek referans olarak verilir (K34 → K33 çıktısı), ya da şerit: birden çok karakterin temeli tek resimde. Şerit, kaynak temeller yeniden onaylanınca yenilenir: hepsi 900 px yüksekliğe, soldan sağa, aralarında 24 px zemin rengi: `magick G6.png G7.png G8.png G9.png -resize x900 -background "<zemin>" -splice 24x0 +append serit.jpg` (ilk sütundaki fazla boşluğu kırp). Şeritte dekolte olmamalı.
*Kaynak:* 2536, 3119, 1347, 412, 3563, 1149

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 32. DENETIM-38 ↔ CODEX-4 (0.45)

### DENETIM-38 Onay
Onaylanan resim `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>` taşınır. Buna bağlı resimlerin önü açılır, çünkü Codex yalnız `onayli/`'yi referans alır. Temel figürse baş kırpığı hazırlanır (`referanslar/<kim>_bas.png`).
*Kaynak:* 1138, 1325, 1517

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 33. SINIR-3 ↔ ISTEM-21 (0.45)

### SINIR-3 Çekicilik seviyesi (Peri)
Peri seksi ve çekicidir; eski bir güzellik kraliçesi olduğu için güzel ve seksi görünmesi vakanın parçasıdır.
- **Taban:** deneme setindeki seviye (`yeni_gorsel/deneme_peri_a.webp`) artık taban, tavan değil (sahibinin kararı, 8 Ekim 2026; 4 Ekim dekolte kuralının yerine geçer).
- **Serbest:** çekici, seksi, dar ve kısa kıyafet, derin dekolte, bacak, kışkırtıcı poz, flört.
- **Hedef:** Google Play'in izin verdiği ve görsel üreticilerin üretebildiği en yüksek seviye. ChatGPT reddederse Grok denenir.
- **Bedeli:** Play yaş sınıflandırması büyük ihtimalle 16+ olur (yasak değil, kitle daralır).
- Sınırı SINIR-6 ve SINIR-7'dir.
- Kapalı yakalı parça (tayyör, kazak, gömlek) yazılsa bile Peri'nin **üst düğmeleri açık**, iç bluz aynı derinlikte çizilir; bu satır her Peri istemine yazılır (4 Ekim kuralının bu ayrıntısı sürer; "dekolte asla azaltılmaz" ile uyumlu — ISTEM-21) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 32).
*Kaynak:* 191, 1859, 1860, 1861, 1863

### ISTEM-21 Peri'nin çekicilik satırı ve dekoltesi
- Peri'nin her isteminde ("dünkü ayarlar", sahibi 6 Kasım): "Çekicilik: en üst seviyede zarif ve seksi; belin inceliği ve bacakların hattı belirgin. Çıplaklık yok." Felaket/komedi hâlinde: "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok." Felaket ve komedi karesinde de "seksi" yazılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 9).
- Peri'nin dekoltesi asla azaltılmaz (sahibinin duran kuralı, 7 Ekim); tek istisna kıyafet kartı (ISTEM-17, sahibi 8 Kasım). Peri ve Gizem dekolteli (6–7 Kasım).
- Peri'nin olduğu sahnelerde: "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde…; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor." Bu satır filtreye takılmadı.
*Kaynak:* 1211, 438, 3119, 2967, 1428

## 34. DENETIM-37 ↔ GOMME-20 (0.45)

### DENETIM-37 Kesim profili
Zemin bej → `konuk` (Peri `peri`, Cengo `cengo`); yeşil/gri-mavi → `konuk_beyaz_delik`. Kesim tutmazsa önce başka profil dene; yine olmazsa reddet.
*Kaynak:* 1136

### GOMME-20 Aynı zemin, renk düzeltmesi yok; kesim profili zemine göre
- Aynı karakterin (aynı kıyafetin) bütün ifadeleri aynı zeminde.
- Renk düzeltmesi yapılmaz: renk yanlışsa resim yeniden üretilir.
- Kesim profilinin adı kalır ama **yalnız karakterin çerçevesini** belirler (GOMME-1). Zemine göre "dar profil" seçimi (`peri_mavi`/`cengo_beyaz`/`konuk_beyaz_delik`)
  ve eski renk ayarları kalktı — renk kesimi dönemine aitti (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 8).
*Kaynak:* 542, 544, 1084

## 35. SUREC-29 ↔ KOD-38 (0.45)

### SUREC-29 Değişiklik nereye yazılır (veri yolu)
Replik, sahne notu, karar metni → `sablon/vakalar/vakaN_diyalog.md`, sonra `cd kaynak && node arac_diyalog.js ../sablon/vakalar/vakaN_diyalog.md VN`.
Yapı (olgu metni `facts`, ipucu kartı `clues[].text/meta`, çıkarım başlığı, `kim_yapti`, karar parası/bağ, `anahtarlar`) ve künye
(`yeni/kisiler.json`) diyalogdan üretilmez: `yeni/game_data.json`'da doğrudan değişir (node ile oku-değiştir, `arac_json_yaz.js` ile yaz).
Vaka 4'ün ilk iskeleti geçici bir betikle kuruldu, depoda yok — yeniden kurmak gerekmez, veri artık tek kaynak. Hikâye değişirse aynı
değişiklik `vakaN_form.md`'ye de işlenir (örnek, Vaka 4: "yüz lira" diyalogda, olguda, ipucu kartında, itirafta, hikâyede ve formun fiyat
tablosunda değişti).
*Kaynak:* 2885, 2926

### KOD-38 Veri elle yazılmaz
- Veri JSON'unu elle değil `arac_json_yaz.js` ile yaz (kısa, okunur biçim); kanon listesine ekleme de bununla.
- Vaka metni `sablon/vakalar/vakaN_diyalog.md`'de değişir (sahneler, karar metinleri, anı defteri, anı özeti); veriye `cd kaynak && node arac_diyalog.js <dosya> <vaka>` yazar (ör. `node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md V1`); veri elle düzenlenmez. Açılış metni hâlâ `YENI_VAKA_1.md` → `yeni/acilis.json`.
- `arac_diyalog.js` konuşan adındaki â/î/û'yu düzler ("LÂL" → `lal`).
*Kaynak:* 14, 303, 2404, 2452, 2453

## 36. KAR-22 ↔ SEZON-22 (0.44)

### KAR-22 Her vakada yeni kıyafet
Peri ve Cengo her vakada yeni kıyafet giyer. İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
*Kaynak:* 193, 102

### SEZON-22 Peri ve Cengo her vakada yeni kıyafet
Her vakada Peri ile Cengo'nun kıyafeti, takısı, aksesuarı vakaya göre değişir (sahibinin isteği); Peri'nin saçı da değişir, **Cengo'nun saçı değişmez** (sahibinin kararı, 19 Kasım 2026); bu yüzden kıyafet kütüphanesi tutulmaz.
Görsel üretimi vaka metni yazıldıktan sonra yapılır (maliyet notu `kaynak/YENI_OYUN_SEZON.md` §9).
*Kaynak:* 1857, 3084, 1971

## 37. SUREC-31 ↔ ISTEM-54 (0.44)

### SUREC-31 Kapsam dışı bırakılanlar (hızlandırma)
Sahibinin kararı: görsel sayısı azaltılmaz; ifade ızgarası (bir istekte birkaç ifade) kullanılmaz, çözünürlük düşüyor; ücretli üretim (API)
yok (şimdilik; ChatGPT/Grok sohbetinde elle üretim); her vakada Peri ve Cengo yeni kıyafet giyer, kıyafet kütüphanesi tutulmaz.
*Kaynak:* 732, 3083

### ISTEM-54 İfade ızgarası yok
Bir istekte birkaç ifade istenmez (çözünürlük düşüyor; sahibinin kararı, Vaka 2).
*Kaynak:* 3082

## 38. ISTEM-21 ↔ DENETIM-33 (0.43)

### ISTEM-21 Peri'nin çekicilik satırı ve dekoltesi
- Peri'nin her isteminde ("dünkü ayarlar", sahibi 6 Kasım): "Çekicilik: en üst seviyede zarif ve seksi; belin inceliği ve bacakların hattı belirgin. Çıplaklık yok." Felaket/komedi hâlinde: "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok." Felaket ve komedi karesinde de "seksi" yazılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 9).
- Peri'nin dekoltesi asla azaltılmaz (sahibinin duran kuralı, 7 Ekim); tek istisna kıyafet kartı (ISTEM-17, sahibi 8 Kasım). Peri ve Gizem dekolteli (6–7 Kasım).
- Peri'nin olduğu sahnelerde: "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde…; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor." Bu satır filtreye takılmadı.
*Kaynak:* 1211, 438, 3119, 2967, 1428

### DENETIM-33 Çekicilik seviyesi
Çekicilik seviyesi kurala uygun olmalı. Peri ve Gizem için (sahibi, 8 Kasım 2026): yeni resim o karakterin eski onaylı resimleriyle yan yana; çekicilik ve dekolte onlardan AZ DEĞİL. Filtreden kaçarken istem farkında olmadan hafifleyebilir; sönük kalan onaylanmaz, `ISTEM_KALIPLARI.md` §9 satırlarıyla yeniden üretilir. Kıyafet kartı bu maddeden muaf. Peri "vakadaki en gösterişli kadın" (kural 15b) — konuk kadınlar onu geçmemeli.
*Kaynak:* 467, 1131, 3048

## 39. YAPI-24 ↔ SATIR-18 (0.43)

### YAPI-24 Sonuç sahnede gösterilir
Kural 22b. Seçimden sonra SONUÇ anlatı satırlarına bölünür ve karar karesinin (5. parça SR-K; V6: K106) üstünde akar; bedel de orada görünür (eylem → sonuç → bedel, YAPI-38). Cengo'nun karar satırı (bağ etkisi, kural 23) kendi ağzından, kendisi ekrandayken söylenir (V6: büroda). Ardından Cengo'nun söylenmeyen doğru kanıtı (YAPI-25), "Dosya kapandı" kartı (YAPI-26), kapanış sahnesi gelir. Uygulama: veride `sahneler.sonuc_<karar>` varsa o oynar, yoksa SONUÇ ~110 harflik anlatı satırlarına bölünür.
*Kaynak:* 154, 207, 666, 2773

### SATIR-18 SR-K Karar karesi SONUÇ'u gösterir
Karar karesi SONUÇ metninin asıl anını gösterir (bedeli yaşayan kişiler karede). Karar karesi SONUÇ'un anlatı satırlarının altında durur (kural 22b). Cengo'nun karar satırı ve söylenmeyen kanıt satırı (22c) Cengo ekrandayken söylenir; kararı soran kişi de seçim anında ekrandadır (SR-A). Hatalı örnek: K47 Cengo satırını (Kenan'ın simidi) gösteriyordu; SONUÇ'taki Ferruh ve telefon yoktu.
*Kaynak:* 6, 387, 1224, 1076

## 40. ARAYUZ-36 ↔ RAF-52 (0.43)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-52 +1 araştırma hakkı ve koruma kuralı
Koruma kuralı (pazarlığa kapalı, raf düzeninde aynen): her vaka reklamsız haklarla `doğru` çözülebilir olmalı — reklam başarı satmaz, yalnız daha geniş resim verir. Doğrulayıcı/test bunu vaka başına sınar (reklamsız hak sayısıyla en az bir `doğru` yolu); ekonomi sözleşmesi aynen (`test_borc.js`). +1 hak (16 Ekim 2026, sahibinin kararı; sahibi oynarken 3 hakkı az buldu): vaka başına bir kez, bir ek araştırma hakkı (bugün kredi/reklam ile, RAF-47). Reklamsız sürümde (web, Steam) ek hak düğmesi çıkmaz; Steam'de hak sayısı sonra kararlaştırılır (ör. reklamın yerine +1 sabit).
*Kaynak:* 1611, 2003, 3019

## 41. SEZON-23 ↔ ARAYUZ-19 (0.43)

### SEZON-23 Vaka içinde kıyafet değişimi serbest
Hikâye gerektirirse kıyafet vaka içinde değişebilir (Vaka 2'deki gibi; 16 Ekim 2026). Her yeni kıyafet = bir ifade seti (Vaka 3 notunda ~6–8 figür).
*Kaynak:* 2579, 3020

### ARAYUZ-19 Kıyafet sahne içinde değişebilir
Sahne içinde Peri'nin kıyafeti değişebilir (manto → mantosuz gibi); Cengo'nunki de (`cset`, Vaka 3: un bulutu).
*Kaynak:* 288

## 42. ISTEM-16 ↔ CODEX-4 (0.43)

### ISTEM-16 Referanslarda dekolte yok — zorunlu
- Vaka 3 deneyinde (G1, G2, G9; BIRIKIM §4.2) bulunan: engelin asıl sebebi referans resimdeki görünür dekolte; metindeki "seksi", "dekolte", "vücudu saran", "çekici" tek başına engel sebebi değildi (uretim/CLAUDE.md de "Güvenlik filtresi metne değil referans resimdeki dekolteye bakıyor" der). Ekim 2026'daki ChatGPT bulgusu sebebi çoğu zaman sözcüklerde görmüştü; geçerli olan Vaka 3 deneyidir: filtrenin asıl sebebi referanstaki dekolte, kelime değil (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 9). Kural sebepten bağımsız: bir tane dekolteli referans bile yetiyor; referansların HEPSİ dekoltesiz olmalı.
- Kanıtlar: çekicilik satırını yumuşatmak işe yaramadı (0/4); "kişinin dekoltesi, vücudu saran" metni dekolteli referansla engellendi, aynı metin kapalı referansla geçti. Vaka içinde onaylı dekolteli Peri resimleri (G1–G3) sahne referansı olarak kullanıldığında G49–G67'nin çoğu yine geçti: tek dekolteli referans her zaman engellemiyor ama riski artırıyor; sahnelerde de baş kırpığı + kapalı gövde güvenli yol.
- Kadın karakterin referansı: yalnız baş kırpığı (çeneden yukarısı, yaka yok) + kapalı giyimli tarz gövdesi (`uretim/referanslar/tarz_govde_kadin.jpg`). Dekolteli kıyafette referans = baş kırpığı + `tarz_govde_kadin.jpg`, bütün figür değil (`v3/referanslar/peri_*_bas.png`). Poz referansları da kapalı giyimle ya da başı silik gövdeyle verilir.
- Ortak referanslar (`uretim/referanslar/`: Peri ve Cengo baş kırpıkları, kapalı giyimli tarz gövdeleri kadın/erkek/iri erkek, büro ve tarz mekânları) hepsi dekoltesiz; vakaya özgü referanslar o vakanın `referanslar/` klasöründe.
- Erkek karakterlerde açık göğüs sorun çıkarmadı.
- `istem_kontrol.sh` dekolteli Peri referansını (peri_beden, L1_peri, L14_, L9_, L19_, L25_, poz_peri_, peri_kirmizi) geçirmez.
*Kaynak:* 1061, 1062, 1063, 1066, 1285, 1391, 1392, 1395, 1438, 1443, 1479, 1213, 1153, 3564

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 43. KOD-91 ↔ ARAYUZ-31 (0.43)

### KOD-91 Defter ve Künye vaka başına
- (17 Ekim 2026) Zincir yalnız içinde bulunulan vakayı gösterir; Anı her biten vakanın anı özetini (diyalogda `## ani`, `kisiler.json → ani_ozet`; kural 21d: yalnız itirafın söylediği), kimi suçladığını, kararını ve Peri'nin notunu basar (kasa 16 Kasım 2026'da kalktı) (`yeni_arayuz.js → defterZincir, defterAni`).
- Künye (Kişiler) yalnız içinde bulunulan vakanın kişilerini gösterir (`yeni_arayuz.js → vnKisiGorunur`); portre `python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`.
- Deneme reklamı (`reklamGoster`, +1 hak ve kaçırılan ipuçları) ve test için vaka düğmeleri (`VN_VAKA_ATLA`, yayından önce `false`): `kaynak/YENI_OYUN_CERCEVE.md`.
*Kaynak:* 15

### ARAYUZ-31 Künye (Kişiler) vaka başına
- Künyede yalnız içinde bulunulan vakanın kişileri (+ Peri, Cengo her vakada; Hilmi Bey yalnız açılışın) (16 Ekim 2026).
- Vakada tanışılan / konuşan her kişiye (adı olan herkes) künye kaydı (kart) ve portre. Vaka 2'de Saadet unutulmuştu; Vaka 2'nin 7 kişisine portre + Saadet Hanım eklendi (sahibinin onayıyla metin). Test eksik portreyi yakalar.
- Önceki vakadan dönen kişi için `tanisma` dizi olur.
*Kaynak:* 648, 2576, 3016

## 44. SUREC-21 ↔ GOMME-6 (0.42)

### SUREC-21 Adım 9–10: Üretim ve toplu işleme
Adım 9: görseller üretilir (sahibi) ve **toplu gönderilir**. Adım 10: kontrol, kesim, yerleştirme (5. parça, kontrol listesi) Claude'ca,
**toplu işlenir**; ölçüt her görselin gömülü olması. Görseller sohbet sohbet gelir, paket hâlinde işlenir, sahibine oyundaki son hâli tek
seferde gösterilir. Codex düzeninde adım 9'u döngü yapar (SUREC-32); sohbet sohbet üretim yalnız web'deki resimler için kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 684, 685, 2569

### GOMME-6 Paket aracı ve toplu işleme
Görseller tek tek değil, **sohbet sohbet** (bir sohbetin bütün çıktıları), toplu gelir.
- Dosyalar `G<n>` ile başlar ya da ChatGPT'nin verdiği adla kalır; sahibi yalnız numaraları yazar ("Sohbet 1, G1–G13"), araç `--sira G1-G13` ile dosya adındaki üretim saatine göre numara verir. Pakette her numaradan **bir** görsel olur (beğenilmeyen çıkarılır); sayı tutmazsa araç durur. Numarayı mesaj sırasından değil görselden doğrula (Vaka 2'de 3. ve 4. tablonun tersiydi).
- Numara `sablon/vakalar/vakaN_gorsel.md` tablosundan tür ve anahtara çevrilir.
- `cd kaynak && node arac_paket.js <klasör> --vaka N [--yaz]`: `--yaz` yokken yalnız önizler, proje dosyasına dokunmaz (temas sayfası `YENI_UI/paket_<klasör>.png`: yeşil zemin + büyütülmüş baş). `--yaz` ile keser/küçültür, gömer, manifestoyu günceller, doğrulayıcı + iki derlemeyi koşar ve eski `index.html`'in değişmediğini md5 ile sınar.
- Araca kalmayan (insana): saç halesi, yazı/harf taraması, boy ayarı (araç boyu olmayan konuğu söyler), ilgili satırlarda ekran görüntüsü (`arac_yeni_tur.js`).
- Sahibine paketin oyundaki son hâli tek seferde gösterilir; düzeltme istenen görseller tek listede döner. Temel görseller (G1, G14…) bitince öbür sohbetler aynı anda (başka sekmede, ChatGPT ya da Grok) yürüyebilir.
- Araçtır, test değil.
*Kaynak:* 28, 730, 3074, 3085

## 45. GOMME-12 ↔ ARAYUZ-31 (0.42)

### GOMME-12 Künye portresi
Her figürlü kişinin yüzü portreye kırpılır (`yeni_gorsel/portre/`): her yeni kişinin figürü gömülünce `python3 arac_portre.py <figür_normal> yeni_gorsel/portre/portre_<id>.webp` + `gorseller.json`. (16 Ekim; sahibi buldu: Vaka 2'nin yedi konuğunda yoktu.) `test_yeni_v2.js` eksik portreyi yakalar.
*Kaynak:* 489, 1146, 2580

### ARAYUZ-31 Künye (Kişiler) vaka başına
- Künyede yalnız içinde bulunulan vakanın kişileri (+ Peri, Cengo her vakada; Hilmi Bey yalnız açılışın) (16 Ekim 2026).
- Vakada tanışılan / konuşan her kişiye (adı olan herkes) künye kaydı (kart) ve portre. Vaka 2'de Saadet unutulmuştu; Vaka 2'nin 7 kişisine portre + Saadet Hanım eklendi (sahibinin onayıyla metin). Test eksik portreyi yakalar.
- Önceki vakadan dönen kişi için `tanisma` dizi olur.
*Kaynak:* 648, 2576, 3016

## 46. SATIR-20 ↔ KOD-28 (0.42)

### SATIR-20 Adı geçen herkes ekranda (iki yönlü)
ZORUNLU (16 Ekim 2026, sahibinin kararı): anlatı satırında adı geçen her kişi (ya da grup: nedimeler, annesi, misafirler) o satırda ekranda olmalı. Tek kişiyse figürü `{gir: x}` ile o satırda girer (yeri tanıtan `{mekan}` satırı bile olsa); ekranda aynı anda yalnız iki figür durabildiği için iki kişiden fazlası ya da grup → kare. Kapı K2 (Vaka 6 ve sonrası) iki yönlüdür: anlatıda adı ya da eş sözü geçen herkes ekranda; ekrandaki herkes o satırda anılıyor, konuşuyor ya da hitap ediliyor. Denetim üç adımda: diyalog yazılırken (adım 3: kişi sayan her anlatı satırına `gir` ya da kare), görsel listesinde (adım 8: kalabalık anlatan her satıra kare) ve turda (adım 11: `arac_yeni_tur.js … --hepsi` `satir/adi_gecen_yok.txt`'ye aday listesi yazar; grup adlarını ve akrabalık sözlerini — "annesi" — yakalamaz, onlara gözle bakılır). Vaka 7'den beri bu liste hikâye donmadan kapanır (SATIR-12). Köken: Vaka 2'de sahibi Onay 3'te buldu ("yazıda bahsedilen kişiler görünmüyor"): son prova açılışları, "Bütün nedimeler Defne'ye dönüyor", "Gelme anne!" → K33 (son prova, 4 açılış), K34 (herkes Defne'ye dönüyor, 7 satır), K35 (atölye kapısında kumaşçının adamı), `lal.kilif` sonradan üretildi; Gülsüm/Bülent/Defne/Tolga tanıtım satırında `gir` aldı.
*Kaynak:* 719, 2574, 3014, 3056, 3547 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### KOD-28 --hepsi: her satırın görüntüsü ve adı geçen kişiler
`--hepsi` eklenirse incelenen vakanın HER satırı `YENI_UI/satir/`'a görüntülenir ve `dokum.txt`'ye konuşan/kime/arka/kare/figür anahtarıyla dökülür — görselli tur denetimi (adım 11) bununla yapılır. Ayrıca `satir/adi_gecen_yok.txt`: anlatıda adı geçen ama ekranda olmayan kişiler (aday; grup ve "annesi" gibi sözleri yakalamaz). Sahibinin kuralı: adı geçen herkes ekranda — tek kişi `gir`, kalabalık kare.
*Kaynak:* 15

## 47. SUREC-13 ↔ KOD-38 (0.41)

### SUREC-13 Adım 4: Veri ve künye
Veri Claude'ca hazırlanır: yapı (ipuçları, olgular, Kim yaptı?) elle; sahne ve karar metni `node arac_diyalog.js <dosya> VN` ile
diyalogdan; **künye** (`yeni/kisiler.json`) bu adımda yazılır, sonradan değil (Vaka 1'de künye boş kalmıştı). Ölçüt: otomatik denetimden
geçer; `node arac_kunye_denetim.js yeni` temiz.
*Kaynak:* 679, 2534, 2539

### KOD-38 Veri elle yazılmaz
- Veri JSON'unu elle değil `arac_json_yaz.js` ile yaz (kısa, okunur biçim); kanon listesine ekleme de bununla.
- Vaka metni `sablon/vakalar/vakaN_diyalog.md`'de değişir (sahneler, karar metinleri, anı defteri, anı özeti); veriye `cd kaynak && node arac_diyalog.js <dosya> <vaka>` yazar (ör. `node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md V1`); veri elle düzenlenmez. Açılış metni hâlâ `YENI_VAKA_1.md` → `yeni/acilis.json`.
- `arac_diyalog.js` konuşan adındaki â/î/û'yu düzler ("LÂL" → `lal`).
*Kaynak:* 14, 303, 2404, 2452, 2453

## 48. ARAYUZ-16 ↔ SHORTS-17 (0.41)

### ARAYUZ-16 Figür yerleşimi
- Ekranda en çok iki figür.
- **Eski `kime` düzeni (V1–V5):** Peri solda, sağda **tek** konuk (Cengo ya da konuk — sahnede olan ve en son konuşan); üç kişilik sahnede sağdaki kişi değişir. Bu düzen yalnız V1–V5'e aittir.
- **`ekran` düzeni (V6'dan beri):** ARAYUZ-17 geçerli — Peri'siz iki konuk karşılıklı durabilir, Cengo konukla solda durabilir. (Sahibinin kararı, 17 Kasım 2026, çelişki sorusu 1.)
- Konuşan aydınlanır, dinleyen kararır.
- Sahnede tek kişi varken ortada durur; ikinci kişi gelince kaymadan, anında yanlara geçer (`yeni_arayuz.js/.css`, `.vn-figurler.tek`; `f8dfc4e`, 14 Kasım 2026).
*Kaynak:* 286, 304, 2410, 2779

### SHORTS-17 Figür sayısı ve yerleşim
Ekranda **en çok iki figür** olur. Peri ya da Cengo solda (aynalı, sağa bakar), konuk sağda durur. Tek figür ortada durur.
*Kaynak:* 822

## 49. ISTEM-51 ↔ DENETIM-30 (0.40)

### ISTEM-51 `## Satırlar` bölümü
Figür, ara kare ve detay isteminde `## Satırlar` bölümü bulunur (satır–resim uyumu zorunlu, sahibinin kalıcı kararı 6–7 Kasım; ISTEM_KALIPLARI §10, SR-D, SR-E, SR-K); figürde boş olamaz. Yalnız satırların istediği ifade üretilir. `istem_kontrol.sh` yoksa geçirmez.
*Kaynak:* 3566, 3578, 2967, 2630

### DENETIM-30 Satırlarla uyum
Resim metindeki satırla uyuşmalı: istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra — yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu; elde nesne yalnız metnin getirdiği satırlarda mı (SR-D); bakış satırın söylediği yere mi (SR-I).
*Kaynak:* 469, 1128

## 50. SATIR-4 ↔ KOD-41 (0.40)

### SATIR-4 Ekran düzeni ve `kime` işaretleri
Ekran düzeni (9 Ekim 2026): sol "bizim taraf" (Peri ya da Cengo), sağ karşı taraf.
- Konuk sahnedeyken Cengo konuşursa Peri'nin yerine sola geçer (aynalı) ve konuğa bakar.
- Cengo konuk varken Peri'ye konuşuyorsa Cengo satırına `{kime: peri}` yazılır (yoksa sola geçer, konuğa bakar).
- Konuk satırında `{kime: peri|cengo}`: konuk kime konuşuyorsa solda o durur.
- Peri konuğa, Cengo'nun ardından konuşuyorsa konuğu sağa almak için `{gir: <konuk>}`.
- Motor kuralı (SR-M6, 13 Kasım 2026, `yeni_arayuz.js`; V1–V5'i de etkiler): Peri'nin `kime`si sahnedeyse motor onu sağa getirir; bundan sonra kalan HİTAP/KONUŞAN bayrağında `gir` eklenir ya da `kime` düzeltilir.
*Kaynak:* 397, 399, 400, 2520, 2521, 389, 2817

### KOD-41 Sahne ve satır biçimi
Sahne: vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda `sahne`, açılışta `acilis.json → sahneler[]`; biçim `{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }`.
Satır: `{ k: "peri", i: "kas", m: "Ne oldu?" }` (konuşan, ifade — verilmezse önceki kalır —, metin); `{ k: "not", m: … }` anlatı, ifade almaz; `{ k: "ses", m: … }` figürü olmayan konuşan, ifade almaz.
Satırda isteğe bağlı sahne değişiklikleri:
- `arka: "A5b"` arka plan değişir (aynı yer+saat çapraz geçiş, değilse karartma).
- `kare: "K8"` tam ekran ara kare / detay; figürler çekilir.
- `set: "balikli"` Peri'nin kıyafet seti değişir (sonraki ifadeler o setten).
- `gir: "serkan"` / `cik: true` konuk girer/çıkar; `gi` girenin ilk ifadesi; `gizle: "cengo"` figürü ekrandan çeker (konuşunca döner).
- `kime: "peri"`: konuk varken Cengo Peri'ye konuşuyorsa sağa geçer; yoksa Cengo konuk varken SOLA geçer (aynalı), konuk sağda kalır. Konuk satırında `kime: peri|cengo` solda kimin duracağını seçer. Anlatı satırında da `kime: peri|cengo|<konuk>` solda kimin duracağını seçer (konuk: sağdakinin karşısında, aynalı; 14 Kasım 2026).
- `peri: "tac"` konuşan başkayken Peri'nin (dinleyen) ifadesi; K15 set kuralıyla denetler.
- `mekan: true` mekân karesi: figürler çekilir, arka plan çıplak (yeri tanıtan anlatı satırı).
- `bag: "yuksek"` / `"dusuk"` satır yalnız o bağ hâlinde oynar (kapanış; eşik +1, `motor_yeni.js` → `BAG_ESIK`).
*Kaynak:* 2418, 2419, 2421, 2424, 2425, 2426, 2427, 2428, 2430, 2431, 2432

## 51. YAPI-41 ↔ ARAYUZ-35 (0.40)

### YAPI-41 Rozetler yalnız komik anlar için
9 Kasım 2026 raf kararı. Rozetler yalnız komik anlar içindir; iyi/kötü karar için rozet YOK (oyun not vermez). Vaka başına en fazla bir-iki, yalnız gerçekten komik bir an varsa; hiç rozeti olmayan vaka da olur.
*Kaynak:* 1698, 1703

### ARAYUZ-35 Defter → Rozetler sayfası
Defter'de "Rozetler" sayfası: yalnız kazanılanlar, hangi vakada kazanıldığıyla (komik anların albümü). (9 Kasım 2026.)
*Kaynak:* 1701

## 52. SATIR-8 ↔ ISTEM-19 (0.40)

### SATIR-8 SR-C Kıyafet kartı (satır tarafı)
Her kıyafet önce tek bir ölçü resmiyle (kıyafet kartı) onaylanır; kıyafet istemde sözle yeniden tarif edilmez, kart referans verilir. İstemde: "Kıyafet: N. referanstaki kıyafet kartıyla birebir aynı (boy, kesim, renk)" + o satırların hâli ("trençkot AÇIK, kemer çözük"). (Kartın ayrıntısı ISTEM konusunda, 5. parça I.)
*Kaynak:* 6, 1220, 1076, 715

### ISTEM-19 Kartı referans alan istem
- Onaydan sonra o kıyafetin geçtiği her figür ve kare istemi kıyafet kartını referans olarak alır (SR-C). Peri/Cengo figüründe kart referansı zorunlu; `istem_kontrol.sh` referanslarda "kıyafet kartı" yoksa geçirmez. 
- Kıyafet istemde sözle yeniden **tarif edilmez**; kart referans verilir, "kart nasılsa öyle" yazılır. Yalnız kartta görünmeyen şey yazılır: **dekolte derinliği** (kartta hafif çizilir, ISTEM-17; yazılmazsa resimde çıkmaz — Vaka 2 G2 tur 3) ve **o satırın hâli** (açık, kapalı, lekeli) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 10). Karakter sabitleri (ISTEM-20) ayrıca her istemde yazılır.
- Kartı referans alan her istemde: "Kart YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartın çizim tarzını, ışığını, yüzünü ve pozunu ALMA." Tarz ve yüz birinci referanstan (boyalı onaylı resim). Gerekçe: V6'da G18 (temel) kartı referans alınca tarzı da karttan kopyaladı; ifadeler G18'in "aynısı" istendiği için kayma bütün Cengo setine geçti (13 Kasım, sahibi fark etti). Denetimde temel/kart eski onaylılarla yan yana konur (tarz).
*Kaynak:* 379, 557, 1228, 560, 1169, 3577

## 53. KOD-76 ↔ ARAYUZ-12 (0.40)

### KOD-76 Anı özeti zorunlu
Diyalogda `## ani` yoksa `arac_diyalog.js` yazmaz, `test_yeni_arayuz.js` eksiği yakalar. İçerik (yalnız itirafın söylediği, kural 21d) bulanık replik taramasında okunur.
*Kaynak:* 753

### ARAYUZ-12 Anı özeti nasıl yazılır
Anı sekmesinde her biten vakanın üstünde 2–3 cümlelik anı özeti durur: müşteri ve kayıp, kim almıştı, neden — yalnız kovalamacadaki itirafın söylediği (kural 21d, `2_kural_kitabi.md`). Formda §12'nin altına yazılır; diyalogda `## ani` bölümüne (`**ANI:** …`, `## cozum`'dan sonra) gider. Bölüm zorunlu: yoksa `arac_diyalog.js` veriyi yazmaz. Örnek: `vaka2_diyalog.md` → `## ani`. (Vaka 3 başlangıç notunda istendi: `vaka3_baslangic.md` §1; örnek Vaka 2'de.)
*Kaynak:* 2577, 3007

## 54. BILGI-21 ↔ RAF-110 (0.40)

### BILGI-21 Rozetler: yalnız kazanılan görünür
(Paravan rozetleri ve sezon sonu tablosu, 9 Kasım 2026.) Yalnız kazanılan rozetler görünür. Liste yok, sayı yok ("12'nin 3'ü" YOK), gri/kilitli kutu yok — gri bir rozetin adı görülmemiş bir sahneyi söyler (Nurcan), sayı nottur. Oyuncu rozeti kazandığı an varlığını öğrenir.
*Kaynak:* 1699

### RAF-110 Rozetler ve sezon sonu tablosu kitabın kararı
Komik rozetler ve sezon sonu tablosu (karşılaştırmasız hâli, `final_tablo_plani.md`) sunucu istemez; bunlar her kitabın kendi kararıdır, raf karışmaz. Paravan için kararlar RAF_KARARLARI §12b'de.
*Kaynak:* 1697

## 55. ISTEM-7 ↔ GOMME-18 (0.40)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### GOMME-18 Zemin seçiminin zamanı: Peri/Cengo ve konuk
- Peri, Cengo (önce kıyafet kartı gelir, SR-C): kart onaylanınca, istemden önce `python arac_zemin.py --uretim v<N> G<kart> --kiyafet peri.<kıyafet> --yaz` → karar `uretim/v<N>/zemin.tsv`; o kıyafetin bütün istemleri bu zemini alır.
- Konuk (kartı temelden sonra gelir): temel açık bej zeminde üretilir; onaylanınca araç temelde koşar (`--yaz`). Bej riskliyse temel önerilen zeminde BİR kez daha üretilir; ikisi de riskliyse GOMME-17. (Eskiden her temel iki zeminle üretiliyordu; şimdi yalnız gerektiğinde.)
*Kaynak:* 538, 539, 1084

## 56. SATIR-5 ↔ ARAYUZ-17 (0.40)

### SATIR-5 SR-G Konuk konuğa konuşursa ikisi de ekranda
Konuk başka bir konuğa konuşuyorsa satıra `{kime: <konuk>}` yazılır: konuşan sola geçer (aynalı), hitap edilen sağda kalır (C-3 ekran düzeni; 8 Kasım 2026, `yeni_arayuz.js`). O satırda Peri ekranda değildir. Peri ya da Cengo konuşunca, ya da soldaki konuk `kime`siz konuşunca sol Peri'ye döner. Karşılıklı sürerse yerler sabit (16 Kasım 2026, sahibinin kararı): aynı iki kişi bir önceki satırda da ekrandaysa kimse yer değiştirmez, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Örnek: Nadide ↔ Ferruh, Gizem ↔ Ferruh.
*Kaynak:* 6, 383, 401

### ARAYUZ-17 Karşılıklı konuşmada yerler sabit
Aynı iki kişi bir önceki satırda da ekrandaysa yerleri korunur, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Peri hep solda. Kod `yeni_arayuz.js` (`vnSatirGoster`, `ekran` dalı), kural `sablon/5_gorsel_sistemi.md` SR-G; `86db39d`. `ekran` etiketli vakalara (V6'dan beri) uyar; eski "Peri solda, sağda tek konuk" düzeni yalnız V1–V5'indir (ARAYUZ-16; 17 Kasım 2026). Sebep: V6 girişinde Gizem ↔ Eylül her satırda yer değiştiriyordu (`ekran` etiketinin sırası konuşanı sola alıyordu). (Sahibinin kararı, 16 Kasım 2026.)
- V6 tarandı: bu türden başka yer kalmadı.
- Kalan taraf değiştirmeler (Cengo konukla solda, Peri konuşunca sağda; tek görünen konuk karşısına biri gelince sola) sahibince sorunsuz bulundu, **dokunulmayacak**.
- V1–V5'teki iki örnek (V4: Rana ↔ Feraye, Feraye ↔ Sadık; eski `kime` düzeni) **bilerek düzeltilmedi**; o vakalar yeni kurallara göre yeniden geçirilecek.
*Kaynak:* 2770

## 57. BILGI-7 ↔ ARAYUZ-12 (0.40)

### BILGI-7 Anı özeti yalnız herkesin duyduğunu yazar (kural 21d)
Sahibinin isteği, 17 Ekim 2026. Anı defterinde her biten vakanın üstünde (Peri'nin notunun üstünde) 2–3 cümlelik hatırlatma durur: müşteri ve kayıp, kim almıştı, neden. Bütün kararlarda aynıdır. Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği girer; bir ipucunda kalmış ayrıntı ya da karara göre değişen hiçbir şey (sonuç dahil) girmez. Diyalogda `## ani` bölümüne yazılır. Kimi suçladığın ve kararın oyunun kendi kaydından yazılır (kasa yok, kural 24). Vaka formu onaya gitmeden "Anı özeti yazıldı; yalnız itirafın söylediğini içeriyor" kontrolü işaretlenir.
*Kaynak:* 203, 634, 669

### ARAYUZ-12 Anı özeti nasıl yazılır
Anı sekmesinde her biten vakanın üstünde 2–3 cümlelik anı özeti durur: müşteri ve kayıp, kim almıştı, neden — yalnız kovalamacadaki itirafın söylediği (kural 21d, `2_kural_kitabi.md`). Formda §12'nin altına yazılır; diyalogda `## ani` bölümüne (`**ANI:** …`, `## cozum`'dan sonra) gider. Bölüm zorunlu: yoksa `arac_diyalog.js` veriyi yazmaz. Örnek: `vaka2_diyalog.md` → `## ani`. (Vaka 3 başlangıç notunda istendi: `vaka3_baslangic.md` §1; örnek Vaka 2'de.)
*Kaynak:* 2577, 3007

## 58. ISTEM-28 ↔ DENETIM-23 (0.40)

### ISTEM-28 Yazı yasağı ve nesneye özgü yazısızlık
- Her istemin sonunda: "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın." `istem_kontrol.sh` "hiçbir yazı, harf, rakam, logo" yoksa geçirmez.
- Genel satır tek başına yetmez (cihaz çerçevelerinde ve tuşlarda logo ve rakam yine çıktı): yazı taşıyabilecek nesnenin yüzü kapalı tarif edilir; her cihaz tek tek: "tuşlar düz, işaretsiz", "çerçeve tamamen düz siyah, hiçbir işaret yok", ekran kameradan çevrik / "ekranı görünmüyor" (telefon, tablet, hesap makinesi).
- Marka izi (gözlük sapı, buzdolabı levhası, kürsü rozeti — G26–28, G42, G38): üreticinin markalı yaptığı nesnede "markasız, rozetsiz" yazılır; gelince büyütüp taranır.
*Kaynak:* 439, 3561, 1436, 436, 447, 455, 1155, 1430, 1440, 1491

### DENETIM-23 İstemde olmayan nesne ve yazı yok
İstemde olmayan nesne, yazı, harf, rakam, logo ya da filigran YOK (yazı/harf büyütülerek aranır). Sebep: küçük boyutta görünmüyorlar ama büyütünce çıkıyorlar — G14 hesap makinesi tuşlarında rakam ve fazladan şapka, G44 monitör çerçevesi ve kayıt cihazında logo izi, G51 Peri'nin omzunda zincirli çanta. Gözlük, kalem, saat gibi markalı olabilen nesnelerde sapı ve kenarı büyütüp tara (Vaka 2, Lâl G26–G28: üretici gözlüğün sapına, menteşe yanına, her seferinde marka yazısı benzeri bir iz koydu; düz siyah yüzeyde, dikeyde koyu komşulardan medyanla dolduruldu).
*Kaynak:* 465, 1121, 1310, 1513, 3048, 3072

## 59. SATIR-27 ↔ ISTEM-51 (0.40)

### SATIR-27 İstem yazarken: `## Satırlar` bölümü
`## Satırlar` **bütün vakalarda**, her figür ve karenin isteminde zorunludur (8 Kasım 2026, sahibinin kararı, 5. parça C0). Görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`, her yolun `satir/`'ını kopyala) → `node arac_satir_resim.js <dokum…> --vaka V<N>`. İstem dosyasında `## Kontrol`'den önce o resmin satırları konur (konuşan: metin; dinliyorsa işaretli). İstemin ifade ve poz satırları bu satırların HEPSİNE uyacak biçimde yazılır; bir satır uymazsa istem bölünür (SR-D). EYLEM bayraklı anlatı satırı (yiyor, uzatıyor, kesiyor…) kare ister ya da diyalogda o satıra uygun kare/figür bağlanır. JEST bayraklı replik ("(papyonunu düzelterek)", parantezli sahne yönü) konuşanın figürünün pozuna yazılır. Her satır şu soruyla okunur: *bu pozdaki her nesne ve hareket BU satırda metinde var mı; metindeki her kişi ve şey ekranda mı?* Codex bu bölümü istem metnine KATMAZ (yalnız `## İstem` gider); yerel Claude yazarken ve denetlerken okur. İstem yazılmadan önce her bayrak kapanır (SR-E, SATIR-10). (Not: 8 Kasım metnindeki "figür/kare bağlanır ya da sahibi 'kalsın' der; 'kısmen uyuyor' da sahibine gider" 13 Kasım'dan beri SR-M düzeniyle işler: sahibine yalnız SOR gider.)
*Kaynak:* 715, 1073, 1218

### ISTEM-51 `## Satırlar` bölümü
Figür, ara kare ve detay isteminde `## Satırlar` bölümü bulunur (satır–resim uyumu zorunlu, sahibinin kalıcı kararı 6–7 Kasım; ISTEM_KALIPLARI §10, SR-D, SR-E, SR-K); figürde boş olamaz. Yalnız satırların istediği ifade üretilir. `istem_kontrol.sh` yoksa geçirmez.
*Kaynak:* 3566, 3578, 2967, 2630

## 60. ISTEM-2 ↔ DENETIM-41 (0.40)

### ISTEM-2 Sıra: temeller önce
Karakter temel figürleri ve mekân temelleri ilk numaralarda; ifadeler ve kareler sonra. Gerekçe: bir temelin reddi bütün zinciri bir tur geciktirir (Vaka 3'te G5 beş resmi bekletti).
*Kaynak:* 1060

### DENETIM-41 Takılan temel hemen sahibine
Temeller önce (sahibi, 8 Kasım 2026): her vakada üretim temellerle başlar — her kıyafetin temel figürü (ve ondan baş kırpığı çıkacak her resim), mekân temelleri. İlk iş yalnız temelleri üretmek ve denetlemek; durumları (onaylı / ret / engelli) sahibine söylenir. İki kez filtreye takılan ya da üç kez reddedilen **temel** döngü sonunu beklemez: sahibine o an web paketi verilir. Sahibi web'de temeli üretirken döngü temele bağlı OLMAYAN resimlerle sürer; temel gelip onaylanınca ona bağlı olanlar başlar. (Vaka 3 Onay 3'te G2 ve G3 engellendi, 25 resim onları bekledi.)
*Kaynak:* 1090

## 61. KOD-20 ↔ RAF-5 (0.39)

### KOD-20 Sayfa boyutu
Görseller sayfaya gömülü; bir görsel ~50–120 KB; sezon için yer var.
*Kaynak:* 311

### RAF-5 Kitabın boyutu
Sahibinin kararı: her kitap 8–10 sezon, her sezon 8–10 vaka. Paravan'da bir vaka ~10–15 dakika (metin sayımı, 9 Kasım 2026: oyuncunun gördüğü yolda V1 ~130 satır, V2 ~150, V3 ~160; vakalar uzuyor). Bir sezon ~1,5–2,5 saat.
*Kaynak:* 1553

## 62. YAPI-44 ↔ KOD-61 (0.39)

### YAPI-44 Tohum yok
Bir vakadaki karar başka bir vakanın metnini, kişilerini ya da olaylarını değiştirmez. Vaka 1'in tohumları silindi; doğrulayıcı K19 tohumu hata sayar.
*Kaynak:* 163, 219

### KOD-61 K9 — Ölü tohum, uyarı
Yazılıp hiçbir yerde okunmayan tohum. Tohumları `kisiler.json`, `prolog.json` ve `build_html.js` içinde de arar.
*Kaynak:* 2362, 2367

## 63. SUREC-12 ↔ SATIR-26 (0.38)

### SUREC-12 Adım 3: Diyalog
Diyalog `vakalar/vakaN_diyalog.md`'ye Claude'ca yazılır: her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu). Satır–resim
sözleşmesi (5. parça C0): her satırın gerçek muhatabı `kime`/`gir` ile (SR-A, konuk–konuk SR-G); ifade satırın duygusundan seçilir,
eldeki yüzlerden değil (SR-I); sahne notu yalnız o an görüleni söyler (SR-H). Ölçüt: otomatik denetimden geçer.
*Kaynak:* 678

### SATIR-26 Diyaloğu satır satır yazmak (adım 3)
Diyalog yazılırken her satır için baştan yazılır: konuşan, ifade, `kime` (konuk varsa), dinleyenin yüzü değişiyorsa işareti, arka plan/açı, kare. Kontrol sorusu her satırda: "Ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu, metnin andığı nesne görünüyor mu?"
*Kaynak:* 2538

## 64. YAPI-34 ↔ KOD-77 (0.38)

### YAPI-34 Her vakanın fiyat tablosu
Kural 27c. Her vaka kendi fiyat (referans) tablosunu taşır (ilki `YENI_VAKA_1.md`'de; formda §17). Metinde geçen her tutar, dayanağıyla birlikte tabloda yazılıdır; tabloda olmayan tutar metne giremez (denetimde ve form kontrolünde aranır: "Her tutar fiyat tablosunda"). Eski "ay sonu gideri (Ekim 2026: 35.000 ₺)" tablodan kalktı — oyun para saymaz (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 36).
*Kaynak:* 217, 652, 664, 1815

### KOD-77 Kasa yok, tohum yok, tutarlar tabloda
Kasa yok; para yalnız hikâyede, her kararın parası kendi sahnesinde biter (kural 24). Tohum yok. Metindeki her tutar fiyat tablosunda.
*Kaynak:* 754, 756

## 65. ARAYUZ-36 ↔ RAF-62 (0.38)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-62 Reklam yüklenemezse
Ağ reklam göndermiyor ya da oyuncuda reklam engelleyici varsa birkaç kez yeniden denenir; yine gelmezse günde en fazla 1 bedava kredi.
*Kaynak:* 1625

## 66. SATIR-35 ↔ ISTEM-51 (0.38)

### SATIR-35 Yalnız satırların istediği ifade ve poz üretilir
Kıyafet başına sayı (sahibinin kararı, 8 Kasım 2026 — 8 Ekim kararının yerine): yalnız satırların istediği ifade ve poz üretilir. Bir ifadenin vakada hiçbir satırı yoksa (`arac_satir_resim.js` → "Resim → satırlar" listesinde boşsa) üretilmez. Eski "Peri'nin her kıyafetinde yedi ifadenin hepsi" kuralı kalktı (Vaka 3'te altı resim hiçbir satırda kullanılmadan üretildi; biri filtreye takılıp sahibine web'de iş çıkardı).
- **Peri:** tavan yok; satırların istediği her ifade + vakanın gerektirdiği her nesneli ve hareketli poz. Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir (o da satırlardan çıkar).
- **Cengo:** satırların istediği ifadeler (genelde normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası. Her vakada sabit "4 ifade" üretilmez; vaka formundaki "Cengo: 4 ifade" satırı buna göre düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 28).
- **Konuk:** en az 1 ifade; "gerekirse 2–3" yalnız tahmindir, üst sınır değil — satırlar daha çok isterse üretilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 29).
- Konuklar, arka planlar, ara kareler, detaylar görsel listesinde ayrıca yer alır.
*Kaynak:* 371, 372, 373, 645, 370, 646

### ISTEM-51 `## Satırlar` bölümü
Figür, ara kare ve detay isteminde `## Satırlar` bölümü bulunur (satır–resim uyumu zorunlu, sahibinin kalıcı kararı 6–7 Kasım; ISTEM_KALIPLARI §10, SR-D, SR-E, SR-K); figürde boş olamaz. Yalnız satırların istediği ifade üretilir. `istem_kontrol.sh` yoksa geçirmez.
*Kaynak:* 3566, 3578, 2967, 2630

## 67. ISTEM-7 ↔ GOMME-24 (0.38)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### GOMME-24 Kart afişi: zemin satırı şart
İstemde şu satır ŞART: "Altı kişinin hepsi <zemin>in üstünde, ayakları <zemin>e basıyor; su/tekneler arkada." (Vaka 1'in ilk denemesinde arka sıra suyun üstünde durdu.)
*Kaynak:* 496

## 68. SATIR-25 ↔ KOD-79 (0.38)

### SATIR-25 Satır → görsel tablosu
Her sahne için bir **satır → görsel** tablosu yazılır ve denetlenir; metnin andığı her nesne için tabloda figür ya da kare bulunur. Tablo diyalogla birlikte biter.
*Kaynak:* 410, 2528, 2538

### KOD-79 Satır–görsel denetimleri
Hiçbir satırda ekranda aynı figür iki kez yok (Cengo hem solda hem sağda). Metinde anılan nesne ya da hareket o satırda görünür (satır → görsel tablosu).
*Kaynak:* 759, 761

## 69. BILGI-6 ↔ KOD-74 (0.38)

### BILGI-6 Defter yalnız ara bulgu yazar (kural 21a)
İpucu açılınca olgular gelir; olgular birleşince deftere bir ara bulgu cümlesi yazılır (ör. "Tekne sette"). Bu cümle suçluyu asla söylemez. Vaka formu onaya gitmeden "Defter cümleleri suçluyu söylemiyor" kontrolü işaretlenir.
*Kaynak:* 201, 295, 604, 659

### KOD-74 Defter ve sızıntı denetimi
Defter cümleleri suçluyu söylemez. Hak edilmemiş bilgi sızmaz (isim, olgu, görsel).
*Kaynak:* 745, 746

## 70. KAR-22 ↔ SEZON-23 (0.37)

### KAR-22 Her vakada yeni kıyafet
Peri ve Cengo her vakada yeni kıyafet giyer. İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
*Kaynak:* 193, 102

### SEZON-23 Vaka içinde kıyafet değişimi serbest
Hikâye gerektirirse kıyafet vaka içinde değişebilir (Vaka 2'deki gibi; 16 Ekim 2026). Her yeni kıyafet = bir ifade seti (Vaka 3 notunda ~6–8 figür).
*Kaynak:* 2579, 3020

## 71. ISTEM-7 ↔ GOMME-17 (0.37)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### GOMME-17 İki zemin de riskliyse kıyafet değişir
İki zemin de riskliyse (araç "KIYAFET DEĞİŞMELİ" der) zemin değil KIYAFET değişir (sahibinin kararı, 14 Kasım 2026: "yeni bir kıyafet giydiririz, bu kadar uğraşacak bir şey yok"). Araç çakışan rengi ve figürdeki yerini basar; kıyafetin o parçası iki zeminden de uzak bir renkle değiştirilir (kıyafet kanondur: çakışan parça sahibine/ortağa sorulur, onlar karar verir), kart yeniden üretilir, araç yeniden koşar. Yeni zemin rengi eklenmez.
*Kaynak:* 537, 1084

## 72. CODEX-21 ↔ SHORTS-25 (0.37)

### CODEX-21 Liste oyunla eşleşir (zorunlu)
Oyun her resmi bir anahtarla arar (ör. `peri.trenckot.kas`, `A23`, `K36`); gömme aracı (`arac_paket.js`) numarayı ve anahtarı
`sablon/vakalar/vaka<N>_gorsel.md` tablosundan okur.
- Listesi zaten olan vaka (Vaka 3): `vaka<N>_gorsel.md`'deki liste AYNEN alınır — aynı numaralar, tür, anahtar. Yalnız istemler yazılır;
  numara ya da anahtar değişmez, resim eklenmez, çıkarılmaz.
- Yeni vaka: liste `vaka<N>_gorsel.md`'ye de aynı tablo biçiminde yazılır
  (`| G<n> | figür / arka plan / detay / ara kare / kart afişi | ne | \`anahtar\` | referans | aşama |`). Anahtarlar diyalogdaki sahne
  kodlarıyla aynı olmalı (`node dogrulayici.js yeni` ve `test_yeni_arayuz.js` sınar).
*Kaynak:* 1057, 1058, 1059

### SHORTS-25 Resim anahtarları nerede
Resim anahtarları `kaynak/yeni/gorseller.json` dosyasındadır. Vakanın görsel tablosu: `vakaN_gorsel.md`.
*Kaynak:* 830

## 73. YAPI-34 ↔ RAF-43 (0.37)

### YAPI-34 Her vakanın fiyat tablosu
Kural 27c. Her vaka kendi fiyat (referans) tablosunu taşır (ilki `YENI_VAKA_1.md`'de; formda §17). Metinde geçen her tutar, dayanağıyla birlikte tabloda yazılıdır; tabloda olmayan tutar metne giremez (denetimde ve form kontrolünde aranır: "Her tutar fiyat tablosunda"). Eski "ay sonu gideri (Ekim 2026: 35.000 ₺)" tablodan kalktı — oyun para saymaz (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 36).
*Kaynak:* 217, 652, 664, 1815

### RAF-43 Fiyat değişikliği
Fiyat sonradan değiştirilebilir; önceden alanları etkilemez.
*Kaynak:* 1596

## 74. TON-20 ↔ KAR-8 (0.37)

### TON-20 Kavga işin üstündedir, kişiliğin değil
Peri ile Cengo birbirlerini aşağılamazlar; birbirleriyle uğraşırlar. (Ton belgesi taslağı §4, öneri.)
*Kaynak:* 1758

### KAR-8 Atışmanın ekseni ve kuralı
- **Eksen (sahibi belirledi): kadın kural, adam içgüdü.** Her vakada aynı kavga başka kılıkta çıkar: *"Kapıyı çalalım." / "Kilidi açalım."*
- Son sözü sırayla alırlar; her vakada ikisi de en az bir kez "kaybeder". Kavga işin üstündedir, kişiliğin değil.
*Kaynak:* 183, 1754, 1987

## 75. ISTEM-32 ↔ DENETIM-14 (0.37)

### ISTEM-32 Nesne tutan el (§12)
15 Kasım 2026, sahibi (V6 G25 ve G80'de Gizem'in tepsi eli sol kolun ucunda SAĞ eldi; üretici kameraya yakın koldaki doğal eli çiziyor):
- Nesne yakın elde: tutulan nesne (tepsi, telefon, kutu, kâğıt) sahnenin izin verdiği ölçüde kameraya YAKIN kolun elinde istenir. Figür kadrajın sağına dönükse yakın kol SAĞ kol, soluna dönükse SOL kol. Metin hangi eli söylemiyorsa el buna göre seçilir.
- Kenardan kavrama: tepsi ve kutu avuç yukarı taşınmaz; "BAŞPARMAK tepsinin ÜSTÜNDE, açıkça görünür; DÖRT parmak ALTINDA; elde TAM BEŞ parmak".
- İki el adıyla: "SAĞ eli tepsiyi, SOL eli telefonu tutuyor" + "İki el birbirinin aynası (biri sol, biri sağ); iki sağ el YOK".
*Kaynak:* 1233, 1234, 1235

### DENETIM-14 Nesne tutan el: zorunlu yakın bakış
15 Kasım 2026, sahibi (V6 G25 ve G80, 69 resimlik toplu onayda kaçtı). Nesne tutan HER el (tepsi, telefon, kutu, kâğıt) el sayfasından ayrıca 4–5 kat büyütülür: `magick <resim> -crop WxH+X+Y +repage -resize 500% <çıktı>`. Bakılan:
1. başparmak görünüyor ve doğru tarafta mı,
2. beş parmak sayılıyor mu,
3. el bir ön kola bağlı mı,
4. nesnenin kenarında fazla parmak var mı.
Başparmak görünmüyorsa resim onaylanmaz; istemde §12 (`ISTEM_KALIPLARI.md`) kalıbıyla yeniden üretilir. Nesne tutan eller topluca onaylanmaz; büyütülmüş görüntü sahibine resim resim gösterilir. Bu bakışı yapan Claude kendi okumasında kuşkuluysa ("sol el gibi") bunu söyler, "doğru" demez.
*Kaynak:* 1113

## 76. ISTEM-27 ↔ DENETIM-26 (0.37)

### ISTEM-27 Çıplaklık satırı
Her figür isteminde çıplaklık satırı ("Çıplaklık yok") bulunur (H6); `istem_kontrol.sh` figürde yoksa geçirmez.
*Kaynak:* 551, 3574

### DENETIM-26 Çıplaklık yok
Açık cinsel içerik / çıplaklık YOK (cazibe istenebilir, çıplaklık asla). Kumaşın altından meme ucu belirmesi de ret; şüpheli yer mutlaka büyütülerek bakılır. Düzeltme notu örneği: "Tişört kalın kumaş; altından meme ucu belirmiyor." (giysiye göre uyarla). Sebep: Gizem'in beyaz dar tişörtünde meme ucu izi defalarca çıktı; bunu ilk kez sahibi yakaladı (G40, G41, G42 ve G56'yı Claude onaylamıştı); sahibi "reddet" dedi ve madde o zaman kuruldu.
*Kaynak:* 1124, 1313, 1516

## 77. KAR-23 ↔ ISTEM-20 (0.37)

### KAR-23 Karakter sabitleri (her istemde yazılır, her denetimde aranır)
- Peri: kırmızı stiletto (görünüyorsa HER resimde), çorap yok — istisna: vakanın formu başka ayakkabı yazıyorsa o (Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı).
- Cengo: renkli boncuklu bileklik. Ceket sabit değil — `uretim/CLAUDE.md`'deki "haki ceket" yalnız Vaka 3'ün kıyafetiydi; ceket vakanın formundan gelir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
- Ferruh: kalem gibi ince bıyık, bordo papyon.
- Gizem: bal rengi kâküllü saç, çil.
- Müzeyyen (V6): kısa kül sarısı mizanpli saç, ince uzun, lacivert puantiyeli elbise + ince lacivert hırka, inci kolye, gözlük yok.
- Jale (V6): kısa düz kızıl saç, sade siyah elbise, bileğinde iğnelik.
- Haldun (V6): kır şakaklar, ince çerçeveli gözlük, gri takım, gevşek lacivert kravat.
- Recep (V6): tombul, kısa kıvırcık kır saç, bıyık/sakal yok, koyu yeşil yün yelek.
- Dilek (V6): kısa kâküllü siyah saç, hardal kazak + açık pembe önlük, beyaz mezura, ağzında iğneler.
- Tahsin (V6): ince uzun, gür dalgalı beyaz saç, temiz traşlı, kalın gözlük, mürekkepli önlük.
Yeni vakada yeni karakter bu tabloya (`uretim/CLAUDE.md`) sahibinin onayıyla eklenir. (Vaka 3 birikimi de sonraki vakaya Cengo, Ferruh, Gizem sabitlerini aynı biçimde devretti.)
*Kaynak:* 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1497, 1498, 1499

### ISTEM-20 Karakter sabitleri her istemde
- Karakter sabitleri her istemde tek tek yeniden yazılır; referansa güvenilmez (Vaka 2 K24, G19: ayakkabı yeşil, saç kumral çıktı). Ör. "kırmızı stiletto", "platin saç".
- Peri: HER istemde "kırmızı stiletto" (Vaka 3'te ayakkabı siyah çıktı) ve "çorap yok" (sahnelerde "ÇORAP YOK"). Ayakkabının istisnası (vakanın formu başka ayakkabı yazıyorsa o: Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı) ve sabitler tablosu: KAR-23 (uretim/CLAUDE.md, karakter sabitleri). Peri'de çorap yok; ISTEM-38'deki külotlu çorap kuralı Peri'ye uygulanmaz (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 15). Mantolu Peri'nin altında siyah kalem etek (sahibinin duran kuralı, 7 Ekim 2026).
- Kıyafet sabitleri kalıpta 8. sırada (vakaya göre: etek, ayakkabı rengi…). Karakter sabitleri listesi CLAUDE.md'de durmalı (Vaka 3'te tek sabit Peri'nin kırmızı stilettosuydu; diğer karakterlerde benzeri tutulur).
*Kaynak:* 551, 1157, 1492, 1496, 451, 3119, 437

## 78. SINIR-4 ↔ ISTEM-21 (0.37)

### SINIR-4 Peri her zaman en seksi kadın
Peri her resimde, vakadaki kadınların içinde her zaman en gösterişli ve seksi olandır; dekolte istenir. Asıl kural: kural 15b, sahibinin kararı,
10 Ekim 2026 (KAR-6, no 192); 17 Ekim 2026'da Vaka 3 için sürdürüldü; 6 Kasım 2026 "dünkü ayarlar". Aynı karede Peri açıkça daha alımlı
görünür (ışık, duruş, kıyafet); öbür kadınlar çekici kalır ama onu gölgede bırakmaz. Başka bir kadınla (ör. Gizem) yan yana Peri çok daha alımlı görünür. Vaka 3'te kıskançlık bundan
doğar: Peri üstün olduğu hâlde huzursuzlanır. Görsel istemlerine (adım 8) baştan konur.
*Kaynak:* 1210, 2566, 2997 (asıl hâli 192, KAR konusunda, KAR-6)

### ISTEM-21 Peri'nin çekicilik satırı ve dekoltesi
- Peri'nin her isteminde ("dünkü ayarlar", sahibi 6 Kasım): "Çekicilik: en üst seviyede zarif ve seksi; belin inceliği ve bacakların hattı belirgin. Çıplaklık yok." Felaket/komedi hâlinde: "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok." Felaket ve komedi karesinde de "seksi" yazılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 9).
- Peri'nin dekoltesi asla azaltılmaz (sahibinin duran kuralı, 7 Ekim); tek istisna kıyafet kartı (ISTEM-17, sahibi 8 Kasım). Peri ve Gizem dekolteli (6–7 Kasım).
- Peri'nin olduğu sahnelerde: "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde…; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor." Bu satır filtreye takılmadı.
*Kaynak:* 1211, 438, 3119, 2967, 1428

## 79. ARAYUZ-33 ↔ RAF-44 (0.37)

### ARAYUZ-33 Sezon sonu tablosu: yer ve paylaşım
- **Yer:** sezonun kapanış sahnesinden hemen sonra, ardından "rafta başka kitaplar" kartı. Defter'den yeniden açılır.
- **Paylaşım:** "Sezon 1 bitti" kartı — yalnız sezon afişi + "Sen olsan ne yapardın?". Suçlu/karar/kasa karta girmez; tablonun kendisi paylaşılmaz.
(9 Kasım 2026.)
*Kaynak:* 1708, 1709

### RAF-44 Aile paylaşımı
Aile paylaşımı açık.
*Kaynak:* 1597

## 80. BILGI-16 ↔ ISTEM-29 (0.37)

### BILGI-16 Kart afişi: yasak nesneler adıyla sayılır
Açık uçlu liste yok. Yasak nesneler adıyla sayılır: yöntem nesneleri (kılıf, örtü, anahtar, zincir), yanıltıcı iz (boya), kovalamaca şakaları (simit, balık kasası, pasta). Mekân referansında böyle bir nesne varsa "referanstaki X'i ÇIKAR" yazılır (A20'nin pastası); örtü yığını olan ikinci açı (A20b) kullanılmadı.
*Kaynak:* 494

### ISTEM-29 Nesneler tek tek sayılır; yasaklar adıyla
- Açık uçlu nesne listesi yazılmaz: "Dağılmış birkaç eşya" deyince üretici boşluğu yazı taşıyan bir nesneyle doldurdu (kapağı yaldızlı monogramlı defter, üstelik A-4 kanonuyla çelişen). Kadrajdaki nesneler tek tek sayılır, istenmeyen nesne sınıfları adıyla yasaklanır.
- Yasaklar tek tek: "ÇORAP YOK", "Önlük yok", "çanta YOK", "şapka YOK" (poz/sahne çağrıştırıyorsa), "ateş ve buhar YOK". İpucu taşımaması gereken sahnede (G67) yasaklı nesnelerin listesi verildi, işe yaradı.
- Mekânla çelişmemek için prompt yazmadan önce referans görsele bakılır; mekândaki eşyalar adıyla sayılır (Vaka 1'de olmayan askı, yanlış masa çıktı).
*Kaynak:* 71, 436, 448, 1429, 1156, 2535

## 81. SEZON-24 ↔ SATIR-35 (0.37)

### SEZON-24 Görsel sayısını satırlar belirler
Görsel sayısını satırlar belirler (SATIR-35): satırın istemediği ifade üretilmez, istediği de esirgenmez. Eski "görsel sayısı azaltılmaz"
(11 Ekim 2026) ve "~96 görsel, her vakada Peri ile Cengo için dörder ifade" (4 Ekim 2026) kuralları kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 31). Her vakada Peri ile Cengo
yeni kıyafet giyer (SEZON-22).
*Kaynak:* 1971, 3081

### SATIR-35 Yalnız satırların istediği ifade ve poz üretilir
Kıyafet başına sayı (sahibinin kararı, 8 Kasım 2026 — 8 Ekim kararının yerine): yalnız satırların istediği ifade ve poz üretilir. Bir ifadenin vakada hiçbir satırı yoksa (`arac_satir_resim.js` → "Resim → satırlar" listesinde boşsa) üretilmez. Eski "Peri'nin her kıyafetinde yedi ifadenin hepsi" kuralı kalktı (Vaka 3'te altı resim hiçbir satırda kullanılmadan üretildi; biri filtreye takılıp sahibine web'de iş çıkardı).
- **Peri:** tavan yok; satırların istediği her ifade + vakanın gerektirdiği her nesneli ve hareketli poz. Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir (o da satırlardan çıkar).
- **Cengo:** satırların istediği ifadeler (genelde normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası. Her vakada sabit "4 ifade" üretilmez; vaka formundaki "Cengo: 4 ifade" satırı buna göre düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 28).
- **Konuk:** en az 1 ifade; "gerekirse 2–3" yalnız tahmindir, üst sınır değil — satırlar daha çok isterse üretilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 29).
- Konuklar, arka planlar, ara kareler, detaylar görsel listesinde ayrıca yer alır.
*Kaynak:* 371, 372, 373, 645, 370, 646

## 82. YAPI-23 ↔ KOD-75 (0.36)

### YAPI-23 Karar sahnenin içindedir
Kural 22a; sahibinin kararı, 16 Kasım 2026 (8 Ekim'deki "oyuncu seçmeden önce sonucu bilir" kuralının yerine).
- İtiraftan sonra konuşma ekranı kesilmez; ayrı karar ekranı, "Dosya çözüldü" sayfası, karar menüsü, sonuç sayfası yoktur (kalkan ekranlar).
- Kararı **sahnedeki biri sorar** — itiraftan sonra sahnede kalan biri (V6: Müzeyyen bankta "Şimdi ne olacak, kızım?"); soran ve dinleyen ekrandadır (5. parça SR-A). Formda kararı kimin sorduğu, repliği ve ekranda kimin olduğu yazılır.
- Seçenekler **Peri'nin ağzından kısa cümlelerdir**, konuşma kutusundaki seçimle gelir ("Peri ne yapsın?"; açılıştaki "Peri ne desin?" kutusu gibi). Seçenek cümlesi ne yapılacağını açıkça söyler (kural 5); sonucu söylemez.
- Seçeneğin altında hiçbir şey yazmaz: **sonuç önizlemesi, rakam, Cengo'nun tavrı yok.**
- Taslak: `sablon/taslak_karar/vaka6_akis.jpg` (önerilen akış, onaylandı) ve `vaka6_simdi_oneri.jpg` (eskisiyle yan yana).
- Form kontrolü: kararı sahnedeki biri soruyor; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (22a–b).
- Uygulama (kod, 16 Kasım 2026): `yeni_arayuz.js → kararSahnesi`; veride `sahneler.karar_soru` varsa soran satırlar, sonda "Peri ne yapsın?" seçimi; seçenek = kararın `SEÇENEK` satırı, yoksa etiket. `arac_diyalog.js`: `## sahne karar_soru` (⚙ `secim_kare`), karar `**SEÇENEK:**` (ÖNİZLEME artık isteğe bağlı).
*Kaynak:* 153, 206, 627, 631, 666, 2773

### KOD-75 Karar sahnede; Cengo satırları
- Kararı sahnedeki biri sorar; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (kural 22a–b). Önizleme, kesinti ve rakam yok (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–20).
- Her doğru kanıt için Cengo'nun söylenmeyen kanıt satırı var; açılmamış ipucunu anmaz (kural 22c).
- Cengo'nun karar ve kanıt satırları etiketli: `**CENGO [ifade]:** … {yuz: peri.x}` / `**olgu [ifade]:** … {yuz: peri.x}`; ifade kapanış setinde (`gorseller.json`) var olan bir resim olmalı, yoksa kapı (`arac_kapi.js … resim` K2/K8/K6, poz kaydı) durur.
*Kaynak:* 750, 751, 752

## 83. BILGI-8 ↔ SUREC-13 (0.36)

### BILGI-8 Künye de Nurcan yüzeyidir
`kisiler.json` katman metni (künye kartı), o katmanın koşulunun (olgunun) garanti ettiğinden fazlasını söyleyemez; kart yalnız o olgunun söylediğini söyler.
- Uzun süre denetimsiz kaldı; iki sızıntı bu boşlukta oturuyordu (20 Eylül 2026, ChatGPT taze göz incelemesi): İlyas'ın "arkasında biri var"ı ve Ceyda'nın "cinayetin bir ucu onda"sı.
- K1b koşulun gerçekten var olduğunu denetler. Metnin fazla söyleyip söylemediği anlamsal bir sorudur; mekanik kural bunu yanlış pozitif üretmeden yapamaz ("Kaya'nın dul eşi" sızıntı değildir). O denetim insana bırakıldı.
- Künyeye katman eklerken, metnini değiştirirken ya da künye değişikliğinden sonra `cd kaynak && node arac_kunye_denetim.js` (yeni oyun: `node arac_kunye_denetim.js yeni`) çalıştırılır: her katmanı koşulunun hak ettiği olgularla yan yana basar, sızıntı gözle aranır. Test değil, araç.
- Vaka formu onaya gitmeden "Künye kartları yazıldı, denetim aracından geçti" kontrolü işaretlenir.
*Kaynak:* 23, 32, 650, 671

### SUREC-13 Adım 4: Veri ve künye
Veri Claude'ca hazırlanır: yapı (ipuçları, olgular, Kim yaptı?) elle; sahne ve karar metni `node arac_diyalog.js <dosya> VN` ile
diyalogdan; **künye** (`yeni/kisiler.json`) bu adımda yazılır, sonradan değil (Vaka 1'de künye boş kalmıştı). Ölçüt: otomatik denetimden
geçer; `node arac_kunye_denetim.js yeni` temiz.
*Kaynak:* 679, 2534, 2539

## 84. BILGI-21 ↔ YAPI-41 (0.36)

### BILGI-21 Rozetler: yalnız kazanılan görünür
(Paravan rozetleri ve sezon sonu tablosu, 9 Kasım 2026.) Yalnız kazanılan rozetler görünür. Liste yok, sayı yok ("12'nin 3'ü" YOK), gri/kilitli kutu yok — gri bir rozetin adı görülmemiş bir sahneyi söyler (Nurcan), sayı nottur. Oyuncu rozeti kazandığı an varlığını öğrenir.
*Kaynak:* 1699

### YAPI-41 Rozetler yalnız komik anlar için
9 Kasım 2026 raf kararı. Rozetler yalnız komik anlar içindir; iyi/kötü karar için rozet YOK (oyun not vermez). Vaka başına en fazla bir-iki, yalnız gerçekten komik bir an varsa; hiç rozeti olmayan vaka da olur.
*Kaynak:* 1698, 1703

## 85. SATIR-27 ↔ DENETIM-30 (0.36)

### SATIR-27 İstem yazarken: `## Satırlar` bölümü
`## Satırlar` **bütün vakalarda**, her figür ve karenin isteminde zorunludur (8 Kasım 2026, sahibinin kararı, 5. parça C0). Görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`, her yolun `satir/`'ını kopyala) → `node arac_satir_resim.js <dokum…> --vaka V<N>`. İstem dosyasında `## Kontrol`'den önce o resmin satırları konur (konuşan: metin; dinliyorsa işaretli). İstemin ifade ve poz satırları bu satırların HEPSİNE uyacak biçimde yazılır; bir satır uymazsa istem bölünür (SR-D). EYLEM bayraklı anlatı satırı (yiyor, uzatıyor, kesiyor…) kare ister ya da diyalogda o satıra uygun kare/figür bağlanır. JEST bayraklı replik ("(papyonunu düzelterek)", parantezli sahne yönü) konuşanın figürünün pozuna yazılır. Her satır şu soruyla okunur: *bu pozdaki her nesne ve hareket BU satırda metinde var mı; metindeki her kişi ve şey ekranda mı?* Codex bu bölümü istem metnine KATMAZ (yalnız `## İstem` gider); yerel Claude yazarken ve denetlerken okur. İstem yazılmadan önce her bayrak kapanır (SR-E, SATIR-10). (Not: 8 Kasım metnindeki "figür/kare bağlanır ya da sahibi 'kalsın' der; 'kısmen uyuyor' da sahibine gider" 13 Kasım'dan beri SR-M düzeniyle işler: sahibine yalnız SOR gider.)
*Kaynak:* 715, 1073, 1218

### DENETIM-30 Satırlarla uyum
Resim metindeki satırla uyuşmalı: istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra — yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu; elde nesne yalnız metnin getirdiği satırlarda mı (SR-D); bakış satırın söylediği yere mi (SR-I).
*Kaynak:* 469, 1128

## 86. DENETIM-28 ↔ KOD-28 (0.35)

### DENETIM-28 Sayım ve adı geçen herkes
İstemde "TAM n kişi" yazıyorsa kişiler sayılır; aynı karakter bir sahnede iki kez görünmez. Metindeki kare/sahne satırında adı geçen herkes resimde olmalı (`vakaN_diyalog.md` → `{kare: Kn}`).
*Kaynak:* 470, 1126, 1315

### KOD-28 --hepsi: her satırın görüntüsü ve adı geçen kişiler
`--hepsi` eklenirse incelenen vakanın HER satırı `YENI_UI/satir/`'a görüntülenir ve `dokum.txt`'ye konuşan/kime/arka/kare/figür anahtarıyla dökülür — görselli tur denetimi (adım 11) bununla yapılır. Ayrıca `satir/adi_gecen_yok.txt`: anlatıda adı geçen ama ekranda olmayan kişiler (aday; grup ve "annesi" gibi sözleri yakalamaz). Sahibinin kuralı: adı geçen herkes ekranda — tek kişi `gir`, kalabalık kare.
*Kaynak:* 15

## 87. ISTEM-7 ↔ DENETIM-43 (0.35)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### DENETIM-43 Web paketi
Web'e giden resim için sahibine her resmin istemi (tam metin) ve referansları, sırayla ve tam yollarıyla verilir (Vaka 3 G64'te böyle yapıldı); döngü sonunda TEK seferde (takılan temel için DENETIM-41: o an). Paket dosyası `v<N>/WEB_G<n>.md`; yollar Windows biçiminde tam yol. **Zemin rengi resim olarak verilir** (13 Kasım 2026, sahibi: "web'de üretilen resimler kolay kesilsin"): figür ve kart paketlerine EN SONA o resmin zemininin düz renk örneği eklenir ve istemin zemin satırına şu cümle konur: "Arka plan rengi son referanstaki düz renk ile BİREBİR aynı (<HEX>); başka ton, geçiş ya da gölge yok." Örnekler (`uretim/referanslar/`, renkler V6 onaylı resimlerinden ölçüldü): `zemin_gri_mavi.png` #778393 · `zemin_acik_bej.png` #F0E8D9 · `zemin_acik_gri.png` #D4D4D4 (kıyafet kartı). Sahibi web ChatGPT'de üretip `uretilen/G<n>.png` olarak koyar; Claude denetler.
*Kaynak:* 1095, 1273, 1503

## 88. ISTEM-7 ↔ GOMME-19 (0.35)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### GOMME-19 Zemin denemesi
Yalnız araç gri-mavi seçip saç açıksa (gri-mavi açık/sıcak saçta mavi hale bıraktı — V6: Eylül, Recep, Tahsin, Gizem) bej ile deneme yapılır: temel istemi iki zeminle (`G<n>.md` + `G<n>z.md`) üretilir, ikisi oyunda kesilip (`arac_yanyana.js`) başı büyütülür, saç kenarı temiz olan seçilir; seçilen `onayli/G<n>.png`, öbürü `red/`. O kıyafetin bütün ifadeleri o zemini alır.
*Kaynak:* 541, 543, 1084

## 89. ISTEM-22 ↔ DENETIM-26 (0.35)

### ISTEM-22 "Kalın, mat kumaş" satırı yalnız Gizem'de; göğsü örten poz
- "Kumaş kalın ve mat, altından vücut ayrıntısı belirmiyor" satırı Peri'ye YAZILMAZ (dekolteyi ve seksiliği bastırdı). Yalnız Gizem'in dar beyaz tişörtünde kalır; Gizem'de ayrıca kollar göğsü örter.
- Ders: dar beyaz tişörtün altından meme ucu izi çıktı. "Vücudu saran, derin yuvarlak yakalı beyaz tişört" (G9) filtreden geçti ama sorun oradan doğdu: beyaz, dar ve ince tarif meme ucu izini çağırıyor. Yalnız "kalın kumaş" / "tişört kalın kumaş; meme ucu belirmiyor" yetmedi (G56'da 2, G67'de 3 üretimde tutmadı; poz değişmeden düzelmedi). Çözüm: göğsü örten poz (kollar kavuşuk) + "kalın, mat, düz renk kumaş"; kollar göğsü örtünce sorun bitti.
*Kaynak:* 1212, 1154, 1434, 1439, 1444, 1490

### DENETIM-26 Çıplaklık yok
Açık cinsel içerik / çıplaklık YOK (cazibe istenebilir, çıplaklık asla). Kumaşın altından meme ucu belirmesi de ret; şüpheli yer mutlaka büyütülerek bakılır. Düzeltme notu örneği: "Tişört kalın kumaş; altından meme ucu belirmiyor." (giysiye göre uyarla). Sebep: Gizem'in beyaz dar tişörtünde meme ucu izi defalarca çıktı; bunu ilk kez sahibi yakaladı (G40, G41, G42 ve G56'yı Claude onaylamıştı); sahibi "reddet" dedi ve madde o zaman kuruldu.
*Kaynak:* 1124, 1313, 1516

## 90. YAPI-4 ↔ SHORTS-6 (0.35)

### YAPI-4 Sabit sayılar: şüpheli, karar, süre
- **3 şüpheli:** 1 gerçek suçlu, 2 yanlış iz.
- **4 karar.**
- **Süre:** bir vaka 15–25 dakika (formda "süre hedefi").
*Kaynak:* 117, 122, 123, 573, 656

### SHORTS-6 Süre
Süre **28–55 sn** (araç bununla ölçer; girişteki "30–55" düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 27)). Araç önce süreyi tahmin eder, üretimde gerçek süreyi basar.
*Kaynak:* 780, 787

## 91. TON-14 ↔ SUREC-15 (0.35)

### TON-14 Bulanık replik taraması: anlam soruları
Her replik şu sorulardan geçer (`sablon/7_uretim_sureci.md`, hızlandırma kuralları, 10 Ekim 2026, Vaka 2 ölçümünden):
- **Kime?** Konuşanın kime konuştuğu belli mi; cevap doğru kişiden mi geliyor?
- **Neyi?** "O", "bu", "orası" neyi gösteriyor; oyuncu bunu bu satıra kadar duydu mu?
- **Nereden biliyor?** Karakter bu bilgiyi ya da bu kişiyi nereden tanıyor; ekranda görüldü mü? Sahne notuna da sorulur (TON-8).
- **Sıra:** cevap sorudan, tepki olaydan sonra mı; iki iş tek replikte karışmış mı?
- **Ne istiyor?** Karakterin bu satırdaki niyeti (iltifat mı, iğne mi, yalan mı) belli mi?
(Aynı taramanın öteki soruları: "Espri tutuyor mu?" TON-15, "Saat kala" TON-12, "Tekrar eden şaka" TON-16, "Giriş" TON-10, "Fazla kısa mı?" TON-9.)
*Kaynak:* 698, 700, 701, 703, 706

### SUREC-15 Bulanık replik taraması
Adım 5'in sonunda, Onay 2'den ÖNCE: diyalog baştan sona oyuncunun gördüğü sırayla okunur (`arac_okuma.js` ya da görselsiz turun
ekranları) ve her replik "kime, neyi, nereden biliyor, espri, sıra, niyet" sorularıyla sınanır (soruların ayrıntısı 7. parçada). Düzeltme
yalnız **netleştirme**dir; hikâyeye yeni olgu eklenmez, eklenecekse önce sahibine sorulur. Bulunanlar ve yapılanlar sahibine **tek liste**
hâlinde verilir; sahibi Onay 2'ye temizlenmiş metinle başlar ve notlarını sahne sahne, **toplu** verir. Ölçü (neden): Vaka 2'de Onay 2 =
1 sa 56 dk, 22 not.
*Kaynak:* 697, 711, 2568

## 92. SINIR-3 ↔ DENETIM-33 (0.35)

### SINIR-3 Çekicilik seviyesi (Peri)
Peri seksi ve çekicidir; eski bir güzellik kraliçesi olduğu için güzel ve seksi görünmesi vakanın parçasıdır.
- **Taban:** deneme setindeki seviye (`yeni_gorsel/deneme_peri_a.webp`) artık taban, tavan değil (sahibinin kararı, 8 Ekim 2026; 4 Ekim dekolte kuralının yerine geçer).
- **Serbest:** çekici, seksi, dar ve kısa kıyafet, derin dekolte, bacak, kışkırtıcı poz, flört.
- **Hedef:** Google Play'in izin verdiği ve görsel üreticilerin üretebildiği en yüksek seviye. ChatGPT reddederse Grok denenir.
- **Bedeli:** Play yaş sınıflandırması büyük ihtimalle 16+ olur (yasak değil, kitle daralır).
- Sınırı SINIR-6 ve SINIR-7'dir.
- Kapalı yakalı parça (tayyör, kazak, gömlek) yazılsa bile Peri'nin **üst düğmeleri açık**, iç bluz aynı derinlikte çizilir; bu satır her Peri istemine yazılır (4 Ekim kuralının bu ayrıntısı sürer; "dekolte asla azaltılmaz" ile uyumlu — ISTEM-21) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 32).
*Kaynak:* 191, 1859, 1860, 1861, 1863

### DENETIM-33 Çekicilik seviyesi
Çekicilik seviyesi kurala uygun olmalı. Peri ve Gizem için (sahibi, 8 Kasım 2026): yeni resim o karakterin eski onaylı resimleriyle yan yana; çekicilik ve dekolte onlardan AZ DEĞİL. Filtreden kaçarken istem farkında olmadan hafifleyebilir; sönük kalan onaylanmaz, `ISTEM_KALIPLARI.md` §9 satırlarıyla yeniden üretilir. Kıyafet kartı bu maddeden muaf. Peri "vakadaki en gösterişli kadın" (kural 15b) — konuk kadınlar onu geçmemeli.
*Kaynak:* 467, 1131, 3048

## 93. YAPI-32 ↔ KOD-45 (0.35)

### YAPI-32 Ücret hikâyenin parçasıdır; kesinti yok
Kural 25.
- Ücret girişte konuşulabilir (tutar fiyat tablosundan, formda "Vaka ücreti: fiyat tablosundan"); ekranda rakam olarak tutulmaz; sonda ödendiği sahnede söylenebilir.
- **Müşteri girişte söylediği ücreti öder; kesinti yoktur** (16 Kasım 2026, sahibinin kararı — kasa kalktı, kesintinin anlamı kalmadı): sonuç metninde "beş bin kesti" gibi satır yazılmaz, `## ucret` bölümü yazılmaz (`arac_diyalog.js`'te isteğe bağlı), verideki ücret kademeleri eşittir (`kim_yapti.ucret`: dogru = zayif = yanlis), `kesinti` yok.
- Sus payı / prim (kesinti değil) kaldı.
- V6 ve V7'de uygulandı (V6: "kendisi söylesin" SONUÇ → Haldun ücreti ödedi; "Cengo'ya bırak" SONUÇ'tan "Haldun ad duymadığı için beş bin kesti." silindi; iki ÖNİZLEME'den "₺ keser" çıktı). **V1–V5'teki kesinti metinleri bilerek bırakıldı**; yeniden geçirilirken `## ucret` silinir, kademeler eşitlenir.
- Zayıf ya da yanlış suçlamanın bedeli: sahnede duyulur ve Cengo söylenmeyen doğru kanıtı söyler (YAPI-21, YAPI-25).
*Kaynak:* 100, 147, 213, 572, 2768

### KOD-45 Kim yaptı? veri şeması
```
kim_yapti: {
  suclu: "serkan",
  supheliler: [ { id, ad, gorunur: "her_zaman" | <ifade> } ],   // ekranda ne zaman görünür
  dogru_ciftler: [ [<olgu|ifade>, <olgu|ifade>], ... ],          // suçu kanıtlayan iki olgu
  ucret: { dogru, zayif, yanlis },                                // sonda ödenir
  // kesinti: { zayif, yanlis } — ESKİ: karar ekranının üstündeki ücret kesintisi açıklamasıydı; kesinti yok, zorunlu değil
}
sahneler: { giris, konusma, yuzlesme_dogru, yuzlesme_zayif, yuzlesme_<masum id>, kovalamaca, kapanis }
anahtarlar: { <ipucu olgusu>: ["kelime", ...] }                    // K17 sızıntı araması
```
Ücret kesintisi ve açıklaması kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 20).
*Kaynak:* 2437, 332

## 94. KOD-91 ↔ ARAYUZ-9 (0.35)

### KOD-91 Defter ve Künye vaka başına
- (17 Ekim 2026) Zincir yalnız içinde bulunulan vakayı gösterir; Anı her biten vakanın anı özetini (diyalogda `## ani`, `kisiler.json → ani_ozet`; kural 21d: yalnız itirafın söylediği), kimi suçladığını, kararını ve Peri'nin notunu basar (kasa 16 Kasım 2026'da kalktı) (`yeni_arayuz.js → defterZincir, defterAni`).
- Künye (Kişiler) yalnız içinde bulunulan vakanın kişilerini gösterir (`yeni_arayuz.js → vnKisiGorunur`); portre `python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`.
- Deneme reklamı (`reklamGoster`, +1 hak ve kaçırılan ipuçları) ve test için vaka düğmeleri (`VN_VAKA_ATLA`, yayından önce `false`): `kaynak/YENI_OYUN_CERCEVE.md`.
*Kaynak:* 15

### ARAYUZ-9 Defter → Zincir yalnız içinde bulunulan vaka
Zincir sekmesi yalnız içinde bulunulan vakanın olgularını ve çıkarımlarını gösterir (açık vaka yoksa son biten vaka). Önceki vakalar burada görünmez — künyedeki kuralın aynısı: geçmiş vakalar geçmişte kaldı. Önceden Vaka 2'de Vaka 1'in olguları görünüyordu; düzeltildi. Kod: `yeni_arayuz.js → defterZincir`. (Sahibinin isteği, 17 Ekim 2026.)
*Kaynak:* 156, 300, 2577, 3006

## 95. SINIR-6 ↔ ISTEM-27 (0.35)

### SINIR-6 Kesin çizgi: çıplaklık ve cinsel eylem yok
Çıplaklık yok, cinsel eylem yok. Bu çizgi değişmez; kovalamaca dahil her sahnede geçerlidir.
*Kaynak:* 194, 1862, 115

### ISTEM-27 Çıplaklık satırı
Her figür isteminde çıplaklık satırı ("Çıplaklık yok") bulunur (H6); `istem_kontrol.sh` figürde yoksa geçirmez.
*Kaynak:* 551, 3574

## 96. ARAYUZ-36 ↔ RAF-58 (0.35)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-58 Rafın reklam sözü ve kitabın kararı
Rafın sözü (her kitapta aynı): ilk iki vaka reklamsız; reklam yalnız kredi ile; satın alan o sezonda reklam görmez. Kitabın kararı: krediyi hangi anlarda harcatacağı (gazete oyununda "+1 hak" olmayabilir).
*Kaynak:* 1621

## 97. KOD-92 ↔ ARAYUZ-33 (0.35)

### KOD-92 Paylaş (davet kartı) — yalnız yeni oyun
(17 Ekim 2026) Biten vaka "Arkadaşına öner" düğmesiyle paylaşılır (kapanıştan sonraki ekran — kaçan ipucu yoksa "Dosya kapandı" — ve Defter → Anı). Kart 1080×1920 tarayıcıda çizilir (`yeni_arayuz.js → paylasKartCiz`): vakanın afişi (`gorseller.json → kart`; yoksa `kapak` arka planı) ve altta KÜÇÜK bir kutu — vaka no/adı, "Sen olsan ne yapardın?" — ile bağlantı. Sahibinin kuralı: önce resim, yazı az; girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`). Suçlu, karar, suçlama, kasa, not karta GİRMEZ (Nurcan — arkadaş oynamadı; ve oyun not vermez). `navigator.share` varsa görselle paylaşır, yoksa indir + bağlantıyı kopyala. Afiş promptları ve iş sayfası `sablon/kart_sayfa/uret.py`; yeni vakanın afişi için kurallar `sablon/5_gorsel_sistemi.md` → G. Bağlantı önizlemesi (`og:` etiketleri) `build_html.js yeni`'de; görseli `yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`. Anı karşılaştırması ve davet kodu Android aşamasında.
*Kaynak:* 15

### ARAYUZ-33 Sezon sonu tablosu: yer ve paylaşım
- **Yer:** sezonun kapanış sahnesinden hemen sonra, ardından "rafta başka kitaplar" kartı. Defter'den yeniden açılır.
- **Paylaşım:** "Sezon 1 bitti" kartı — yalnız sezon afişi + "Sen olsan ne yapardın?". Suçlu/karar/kasa karta girmez; tablonun kendisi paylaşılmaz.
(9 Kasım 2026.)
*Kaynak:* 1708, 1709

## 98. ISTEM-25 ↔ DENETIM-45 (0.35)

### ISTEM-25 Üretici reddederse
- Üretici: önce ChatGPT; reddederse ya da tutmazsa Grok.
- ChatGPT reddederse önce (16 Ekim 2026, sahibinin kararı; Vaka 2 K23): aynı promptu ChatGPT'nin düşünen kipinde ("Çalışma") yeniden ver. Filtreye takılınca promptu kendisi yeniden yazıp dener ("seksi" → "şık ve çekici moda estetiği", ceket kapalı, kamera açısı nötr, sahne "aile dostu fiziksel komedi"). 11 Ekim'de reddedilen K23 böyle üretildi ve Grok'unkinden iyi çıktı. Gelince bak: yumuşatılmış tarif Peri'nin görünüşünü (dekolte, kıyafet sabitleri) değiştirmiş mi — K23'te değiştirmemişti. Olmazsa aynı promptla Grok. Kabul edilen prompt ve reddedilen iki deneme: `vakalar/vaka2_gorsel.md` → "K23 (G50) — ChatGPT'nin kendi yazdığı promptlar".
- Claude promptu kendiliğinden yumuşatmaz (sahibi yumuşatılmış prompt istemiyor).
*Kaynak:* 415, 460, 2582, 3077

### DENETIM-45 Filtre reddinde yumuşatma yok
ChatGPT'nin reddettiği resim Grok'ta orijinal istemle denenir; Grok da reddederse sahibine sorulur, istem kendiliğinden yumuşatılmaz.
*Kaynak:* 3059

## 99. ARAYUZ-34 ↔ RAF-77 (0.35)

### ARAYUZ-34 Rozet bildirimi
Rozet kazanınca ekranın kenarında küçük, sessiz bir not; birkaç saniyede kaybolur, akışı durdurmaz, dokunma istemez. (9 Kasım 2026.)
*Kaynak:* 1700

### RAF-77 Bildirim yok
İlk sürümde bildirim yok. İleride eklenirse tek kural: yalnız gerçekten yeni içerik için; "geri dön, oyna" türü bildirim asla.
*Kaynak:* 1641

## 100. YAPI-26 ↔ KOD-90 (0.35)

### YAPI-26 "Dosya kapandı" kartı
Kural 22d (16 Kasım 2026; eski "Dosya çözüldü" ekranının yerine). Vakanın sonunda, kapanış sahnesinden önce tek bir kart: sonuç başlığı (sağlam / zayıf / yanlış), oyuncunun kanıtları ✓/✗, "Elindeydi", yanlışsa suçlananın neden masum olduğu (`## cozum` MASUM satırı), Peri'nin anı cümlesi, "Devam" ve "Arkadaşına öner". Rakam yok. Yalnız oyuncunun elindeki kanıt anılır (20 Ekim kuralı). Seçim mantığı `cozumYolu()`. Formda karta giden metin yazılır: suçluyu kanıtlayan yollar (sade dille) ve her yanlış şüphelinin neden masum olduğu.
*Kaynak:* 138, 209, 613, 2773

### KOD-90 "Dosya kapandı" ve suçlama sonrası metinler Nurcan yüzeyidir
(20 Ekim 2026, sahibi buldu; 16 Kasım 2026'dan beri "Dosya çözüldü" yerine "Dosya kapandı" kartı + Cengo'nun kanıt satırı.) Yalnız oyuncunun ELİNDEKİ kanıt anılır — açılmamış ipucunun olgusu basılırsa hem sızıntı olur hem reklamlı "kaçan ipucu"nu bedavaya açar. Seçim `motor_yeni.js → cozumYolu()`; `test_yeni_kimyapti.js` her ipucu alt kümesi × şüpheli × çifti sınar. Aynı kural suçlamadan sonraki metinlere de uyar (22 Ekim 2026): `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız her yolda oynayan sahnelerin (yüzleşme + kovalamaca itirafı) söylediğini anar, ipucu olgusunu değil. Mekanik yakalanmaz, elle oku.
*Kaynak:* 15

## 101. SEZON-15 ↔ RAF-110 (0.35)

### SEZON-15 Sezon sonu özeti
Sezon sonunda "Senin İstanbul'un" özeti: kararların kime ne yaptığı. Plan zaten var: `kaynak/final_tablo_plani.md`. (Ek fikir; sahibi: hepsi olabilir, 12 Kasım 2026.)
*Durum:* taslak (`sablon/TASLAK_tekrar_onleme.md`; Barbaros "yaz" demedi).
*Kaynak:* 931

### RAF-110 Rozetler ve sezon sonu tablosu kitabın kararı
Komik rozetler ve sezon sonu tablosu (karşılaştırmasız hâli, `final_tablo_plani.md`) sunucu istemez; bunlar her kitabın kendi kararıdır, raf karışmaz. Paravan için kararlar RAF_KARARLARI §12b'de.
*Kaynak:* 1697

## 102. ISTEM-19 ↔ CODEX-4 (0.35)

### ISTEM-19 Kartı referans alan istem
- Onaydan sonra o kıyafetin geçtiği her figür ve kare istemi kıyafet kartını referans olarak alır (SR-C). Peri/Cengo figüründe kart referansı zorunlu; `istem_kontrol.sh` referanslarda "kıyafet kartı" yoksa geçirmez. 
- Kıyafet istemde sözle yeniden **tarif edilmez**; kart referans verilir, "kart nasılsa öyle" yazılır. Yalnız kartta görünmeyen şey yazılır: **dekolte derinliği** (kartta hafif çizilir, ISTEM-17; yazılmazsa resimde çıkmaz — Vaka 2 G2 tur 3) ve **o satırın hâli** (açık, kapalı, lekeli) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 10). Karakter sabitleri (ISTEM-20) ayrıca her istemde yazılır.
- Kartı referans alan her istemde: "Kart YALNIZ kıyafetin kesimi, boyu ve rengi içindir; kartın çizim tarzını, ışığını, yüzünü ve pozunu ALMA." Tarz ve yüz birinci referanstan (boyalı onaylı resim). Gerekçe: V6'da G18 (temel) kartı referans alınca tarzı da karttan kopyaladı; ifadeler G18'in "aynısı" istendiği için kayma bütün Cengo setine geçti (13 Kasım, sahibi fark etti). Denetimde temel/kart eski onaylılarla yan yana konur (tarz).
*Kaynak:* 379, 557, 1228, 560, 1169, 3577

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 103. YAPI-41 ↔ RAF-110 (0.34)

### YAPI-41 Rozetler yalnız komik anlar için
9 Kasım 2026 raf kararı. Rozetler yalnız komik anlar içindir; iyi/kötü karar için rozet YOK (oyun not vermez). Vaka başına en fazla bir-iki, yalnız gerçekten komik bir an varsa; hiç rozeti olmayan vaka da olur.
*Kaynak:* 1698, 1703

### RAF-110 Rozetler ve sezon sonu tablosu kitabın kararı
Komik rozetler ve sezon sonu tablosu (karşılaştırmasız hâli, `final_tablo_plani.md`) sunucu istemez; bunlar her kitabın kendi kararıdır, raf karışmaz. Paravan için kararlar RAF_KARARLARI §12b'de.
*Kaynak:* 1697

## 104. ISTEM-9 ↔ DENETIM-25 (0.34)

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

### DENETIM-25 Tarz gözle
Tarz öbür onaylılarla aynı: yarı gerçekçi boyalı illüstrasyon; anime, 3B ya da fotoğraf değil. Sebep: G5 (unlu Cengo) ilk üretimde fotoğrafa kaydı. **Her yeni temel ve kartta zorunlu:** aynı karakterin eski onaylı resmiyle ve eski konuklarla yan yana bak; kontur kalınlığı, boya dokusu, ışığın sıcaklığı ve yüz eskilerden ayrılıyorsa ret (§11). Kart da bu denetime girer.
*Kaynak:* 1123, 1231, 1312, 1515

## 105. KAR-23 ↔ DENETIM-20 (0.34)

### KAR-23 Karakter sabitleri (her istemde yazılır, her denetimde aranır)
- Peri: kırmızı stiletto (görünüyorsa HER resimde), çorap yok — istisna: vakanın formu başka ayakkabı yazıyorsa o (Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı).
- Cengo: renkli boncuklu bileklik. Ceket sabit değil — `uretim/CLAUDE.md`'deki "haki ceket" yalnız Vaka 3'ün kıyafetiydi; ceket vakanın formundan gelir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
- Ferruh: kalem gibi ince bıyık, bordo papyon.
- Gizem: bal rengi kâküllü saç, çil.
- Müzeyyen (V6): kısa kül sarısı mizanpli saç, ince uzun, lacivert puantiyeli elbise + ince lacivert hırka, inci kolye, gözlük yok.
- Jale (V6): kısa düz kızıl saç, sade siyah elbise, bileğinde iğnelik.
- Haldun (V6): kır şakaklar, ince çerçeveli gözlük, gri takım, gevşek lacivert kravat.
- Recep (V6): tombul, kısa kıvırcık kır saç, bıyık/sakal yok, koyu yeşil yün yelek.
- Dilek (V6): kısa kâküllü siyah saç, hardal kazak + açık pembe önlük, beyaz mezura, ağzında iğneler.
- Tahsin (V6): ince uzun, gür dalgalı beyaz saç, temiz traşlı, kalın gözlük, mürekkepli önlük.
Yeni vakada yeni karakter bu tabloya (`uretim/CLAUDE.md`) sahibinin onayıyla eklenir. (Vaka 3 birikimi de sonraki vakaya Cengo, Ferruh, Gizem sabitlerini aynı biçimde devretti.)
*Kaynak:* 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1497, 1498, 1499

### DENETIM-20 Karakter sabitleri
Karakter sabitleri görünüyorsa her resimde denetlenir, uymazsa ret. Örnek: Peri'nin ayakkabısı HER resimde kırmızı stiletto (doğru örnek: Vaka 3 onaylı G49); siyah ya da başka renkse ret, düzeltme notu: "Peri'nin ayakkabıları kırmızı stiletto." (İstisna, `uretim/CLAUDE.md` karakter sabitleri tablosundan: vakanın formu başka ayakkabı yazıyorsa o — Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı.) Kayıt: G63 ve G65 siyah stilettoyla geldi; sahibi bunu karakter sabiti yaptı, kural 2026-11-04'te CLAUDE.md'ye eklendi ve eklenince eski onaylıların hepsine geriye dönük bakıldı. Kontrol listesinde: "Kıyafet sabitleri tutuyor mu?"
*Kaynak:* 466, 1118, 1305, 1509, 1510

## 106. KAR-22 ↔ SATIR-8 (0.34)

### KAR-22 Her vakada yeni kıyafet
Peri ve Cengo her vakada yeni kıyafet giyer. İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
*Kaynak:* 193, 102

### SATIR-8 SR-C Kıyafet kartı (satır tarafı)
Her kıyafet önce tek bir ölçü resmiyle (kıyafet kartı) onaylanır; kıyafet istemde sözle yeniden tarif edilmez, kart referans verilir. İstemde: "Kıyafet: N. referanstaki kıyafet kartıyla birebir aynı (boy, kesim, renk)" + o satırların hâli ("trençkot AÇIK, kemer çözük"). (Kartın ayrıntısı ISTEM konusunda, 5. parça I.)
*Kaynak:* 6, 1220, 1076, 715

## 107. TON-17 ↔ YAPI-17 (0.34)

### TON-17 Yüzleşmede panik somut sebebe bağlanır
Sahibinin kararı, 17 Ekim 2026. Yüzleşmede suçlunun paniği somut bir sebebe bağlanır (kanıt yalanı çürütür ya da sakladığı şey tehlikeye girer); zayıf bir sözle kaçış yok. Ayrıntı `sablon/1_oyun_yapisi.md` → Yüzleşme sahneleri. Vaka 4'te de geçerli.
*Kaynak:* 5, 2629

### YAPI-17 Panik ve kaçışın somut sebebi
Sahibinin kararı, 17 Ekim 2026. Suçlu "Bir his", "His mi?", "Neredeydin?", "Fırına bakayım" gibi zayıf / cevabı kolay bir sözle kaçmaz. Kaçışı bir tetikleyici başlatır: ya kanıt yalanını çürütür (doğru kanıt), ya da **sakladığı şey tehlikeye girer** (biri, farkında olmadan, onun sakladığı yeri arayacağını söyler). Oyuncu kovalamacada "ha, bu yüzden kaçtı" diyebilmeli. Örnek, Vaka 3: Nadide "Yarın eksper dükkânı arayacak, depodaki un çuvallarına kadar" der; para o çuvaldadır, Ferruh depoya koşar. Üretimde her yüzleşme "Neden kaçıyor?" diye denetlenir; Vaka 3'te üç yüzleşme bu yüzden yeniden yazıldı.
*Kaynak:* 145, 710

## 108. SATIR-5 ↔ KOD-41 (0.34)

### SATIR-5 SR-G Konuk konuğa konuşursa ikisi de ekranda
Konuk başka bir konuğa konuşuyorsa satıra `{kime: <konuk>}` yazılır: konuşan sola geçer (aynalı), hitap edilen sağda kalır (C-3 ekran düzeni; 8 Kasım 2026, `yeni_arayuz.js`). O satırda Peri ekranda değildir. Peri ya da Cengo konuşunca, ya da soldaki konuk `kime`siz konuşunca sol Peri'ye döner. Karşılıklı sürerse yerler sabit (16 Kasım 2026, sahibinin kararı): aynı iki kişi bir önceki satırda da ekrandaysa kimse yer değiştirmez, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Örnek: Nadide ↔ Ferruh, Gizem ↔ Ferruh.
*Kaynak:* 6, 383, 401

### KOD-41 Sahne ve satır biçimi
Sahne: vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda `sahne`, açılışta `acilis.json → sahneler[]`; biçim `{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }`.
Satır: `{ k: "peri", i: "kas", m: "Ne oldu?" }` (konuşan, ifade — verilmezse önceki kalır —, metin); `{ k: "not", m: … }` anlatı, ifade almaz; `{ k: "ses", m: … }` figürü olmayan konuşan, ifade almaz.
Satırda isteğe bağlı sahne değişiklikleri:
- `arka: "A5b"` arka plan değişir (aynı yer+saat çapraz geçiş, değilse karartma).
- `kare: "K8"` tam ekran ara kare / detay; figürler çekilir.
- `set: "balikli"` Peri'nin kıyafet seti değişir (sonraki ifadeler o setten).
- `gir: "serkan"` / `cik: true` konuk girer/çıkar; `gi` girenin ilk ifadesi; `gizle: "cengo"` figürü ekrandan çeker (konuşunca döner).
- `kime: "peri"`: konuk varken Cengo Peri'ye konuşuyorsa sağa geçer; yoksa Cengo konuk varken SOLA geçer (aynalı), konuk sağda kalır. Konuk satırında `kime: peri|cengo` solda kimin duracağını seçer. Anlatı satırında da `kime: peri|cengo|<konuk>` solda kimin duracağını seçer (konuk: sağdakinin karşısında, aynalı; 14 Kasım 2026).
- `peri: "tac"` konuşan başkayken Peri'nin (dinleyen) ifadesi; K15 set kuralıyla denetler.
- `mekan: true` mekân karesi: figürler çekilir, arka plan çıplak (yeri tanıtan anlatı satırı).
- `bag: "yuksek"` / `"dusuk"` satır yalnız o bağ hâlinde oynar (kapanış; eşik +1, `motor_yeni.js` → `BAG_ESIK`).
*Kaynak:* 2418, 2419, 2421, 2424, 2425, 2426, 2427, 2428, 2430, 2431, 2432

## 109. ISTEM-7 ↔ DENETIM-24 (0.34)

### ISTEM-7 Figür zemini
- Zemin satırı ISTEM-5'teki kalıpla yazılır; renk adları `uretim/referanslar/zeminler.tsv`'den (14 Kasım 2026). Kıyafetin zemini `kaynak/arac_zemin.py` ile seçilir ve `v<N>/zemin.tsv`'ye yazılır; istem ona uymalı.
- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak (kızıl/açık saç → gri-mavi); yeşil zemin yok; temelde iki zemin denemesi (`5_gorsel_sistemi.md` H4; sahibinin kalıcı kararı 6–7 Kasım). (§6'daki eski aday listesi "açık bej | orta yeşil | gri-mavi"daki yeşil bu yüzden düştü.)
- `istem_kontrol.sh` denetimleri (figür): zemin satırı yoksa ya da renk zeminler.tsv'de değilse; zemin yeşilse; kıyafet zemin.tsv'de yoksa ("önce kaynak/arac_zemin.py --kiyafet … --yaz"); zemin zemin.tsv'nin bu kıyafete dediğinden farklıysa; yeni konuk temeli zemin.tsv'den önce gelir → varsayılanı "açık bej" olmalı. Zemin denemesi çifti (G<n> ve G<n>z, `- zemin denemesi:` satırı) bilerek iki renklidir, atlanır. Uymayan istem üretilmez.
*Kaynak:* 1198, 540, 3569, 3570, 3571, 3572, 3573, 2967, 2630

### DENETIM-24 Kadraj, oran, ölçek ve zemin
- Kadraj ve oran istemdeki gibi. Figürlerde uyluk ortasından yukarısı. Afişte alt %20 boş.
- Boyutu dosya başlığından doğrula. Doğru değerler: 4:5 → 1122×1402, 3:4 → 1086×1448, 9:16 → 941×1672.
- Ölçek ve baş yüksekliği aynı mı (kontrol listesi E.2).
- Zemin düz ve H4'teki renk (`5_gorsel_sistemi.md` H4). (Vaka 3 kaydındaki "düz açık bej zemin" H4'ün Vaka 4 ve 14 Kasım 2026 kararlarıyla eskidi.)
*Kaynak:* 462, 1122, 1311, 1514, 3048

## 110. SATIR-29 ↔ DENETIM-30 (0.34)

### SATIR-29 Resim denetiminde satırlarla okuma
Denetimde resim istemle birlikte o satırlarla da okunur: yüz, el, jest, konuşanın kim olduğu (dinleyen parmağıyla işaret ediyorsa konuşan o sanılır — Vaka 3, Gizem konuşurken Peri'nin işaret eden figürü).
*Kaynak:* 716, 1074

### DENETIM-30 Satırlarla uyum
Resim metindeki satırla uyuşmalı: istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra — yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu; elde nesne yalnız metnin getirdiği satırlarda mı (SR-D); bakış satırın söylediği yere mi (SR-I).
*Kaynak:* 469, 1128

## 111. YAPI-46 ↔ SEZON-9 (0.33)

### YAPI-46 Karar uyarısı (K8)
Taslak (`TASLAK_tekrar_onleme.md`, 12 Kasım 2026; kasa kalkmadan önce yazıldı). Bir karar ötekinden hem daha çok para verip hem Cengo'nun daha çok hoşuna gidiyorsa doğrulayıcı uyarır: ikinciyi seçmenin sebebi kalmaz (yalnız vicdan). V1, V4, V5'te var, üçü de kabul edildi. Kararların etkisi yeniden düzenlenince tekrar bakılır.
16 Kasım 2026'da kasa ve karar parası ekrandan kalktı (YAPI-31). Bu yüzden K8 **yeni oyunda kalkar** (para yok); eski oyunda kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 37).
*Kaynak:* 980

### SEZON-9 Kararın etkisi görünür olmalı
Sahibi (12 Kasım 2026): vaka sonundaki kararların oyuna gerçek bir etkisi yok gibi (Cengo'nun hoşuna gidiyor/gitmiyor, az/çok para — hiçbiri
hissedilmiyor). Karar kalır, ama etkisi muhakkak düzeltilir; etkisi görünmezse karar ekranı yalnız karmaşıklaştırır (Barbaros'un sonucu).
Ara yol olarak "4 yerine 2 karar" anıldı; karar verilmedi.
*Durum:* taslak (`sablon/TASLAK_tekrar_onleme.md`; Barbaros "yaz" demedi).
*Kaynak:* 908, 971

## 112. TON-18 ↔ KAR-8 (0.33)

### TON-18 Atışmada son sözü sırayla alırlar
Hep Cengo kazanırsa Peri yemlik olur; hep Peri kazanırsa Cengo palyaço olur. Bir vakada en az bir kez her ikisi de "kaybeder". (Ton belgesi taslağı §4, öneri.)
*Kaynak:* 1756

### KAR-8 Atışmanın ekseni ve kuralı
- **Eksen (sahibi belirledi): kadın kural, adam içgüdü.** Her vakada aynı kavga başka kılıkta çıkar: *"Kapıyı çalalım." / "Kilidi açalım."*
- Son sözü sırayla alırlar; her vakada ikisi de en az bir kez "kaybeder". Kavga işin üstündedir, kişiliğin değil.
*Kaynak:* 183, 1754, 1987

## 113. ARAYUZ-35 ↔ RAF-110 (0.33)

### ARAYUZ-35 Defter → Rozetler sayfası
Defter'de "Rozetler" sayfası: yalnız kazanılanlar, hangi vakada kazanıldığıyla (komik anların albümü). (9 Kasım 2026.)
*Kaynak:* 1701

### RAF-110 Rozetler ve sezon sonu tablosu kitabın kararı
Komik rozetler ve sezon sonu tablosu (karşılaştırmasız hâli, `final_tablo_plani.md`) sunucu istemez; bunlar her kitabın kendi kararıdır, raf karışmaz. Paravan için kararlar RAF_KARARLARI §12b'de.
*Kaynak:* 1697

## 114. ISTEM-5 ↔ DENETIM-24 (0.33)

### ISTEM-5 Figür kadrajı (H1) ve figür sabitleri
- 4:5 dikey; uyluk ortasından yukarısı; başın üstünde ince bir boşluk; tek kişi, ayakta, kadrajın ortasında (H1, 6 Kasım 2026: "herkes için aynı").
- Aynı karakterin bütün ifadeleri aynı ölçek ve kadrajda, başın tepesi aynı yükseklikte (yoksa ifade değişince ekranda zıplar).
- Bakış kadrajın soluna; Peri ekranda aynalanır, Cengo'ya bakar (bkz. ISTEM-6).
- Kalıp satırı (§6): "Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince bir boşluk. Arka plan: düz, tek renk <zemin>; gölgesiz, dokusuz, lekesiz, renk geçişi yok (bilgisayarda doldurulmuş tek renk gibi); hiçbir nesne yok."
- "dokusuz, lekesiz" şart: bir denemede zemin tuval dokulu, lekeli çıktı ve kesim tutmazdı.
*Kaynak:* 502, 503, 350, 431, 1198, 1199, 1424

### DENETIM-24 Kadraj, oran, ölçek ve zemin
- Kadraj ve oran istemdeki gibi. Figürlerde uyluk ortasından yukarısı. Afişte alt %20 boş.
- Boyutu dosya başlığından doğrula. Doğru değerler: 4:5 → 1122×1402, 3:4 → 1086×1448, 9:16 → 941×1672.
- Ölçek ve baş yüksekliği aynı mı (kontrol listesi E.2).
- Zemin düz ve H4'teki renk (`5_gorsel_sistemi.md` H4). (Vaka 3 kaydındaki "düz açık bej zemin" H4'ün Vaka 4 ve 14 Kasım 2026 kararlarıyla eskidi.)
*Kaynak:* 462, 1122, 1311, 1514, 3048

## 115. SATIR-35 ↔ KOD-75 (0.33)

### SATIR-35 Yalnız satırların istediği ifade ve poz üretilir
Kıyafet başına sayı (sahibinin kararı, 8 Kasım 2026 — 8 Ekim kararının yerine): yalnız satırların istediği ifade ve poz üretilir. Bir ifadenin vakada hiçbir satırı yoksa (`arac_satir_resim.js` → "Resim → satırlar" listesinde boşsa) üretilmez. Eski "Peri'nin her kıyafetinde yedi ifadenin hepsi" kuralı kalktı (Vaka 3'te altı resim hiçbir satırda kullanılmadan üretildi; biri filtreye takılıp sahibine web'de iş çıkardı).
- **Peri:** tavan yok; satırların istediği her ifade + vakanın gerektirdiği her nesneli ve hareketli poz. Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir (o da satırlardan çıkar).
- **Cengo:** satırların istediği ifadeler (genelde normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası. Her vakada sabit "4 ifade" üretilmez; vaka formundaki "Cengo: 4 ifade" satırı buna göre düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 28).
- **Konuk:** en az 1 ifade; "gerekirse 2–3" yalnız tahmindir, üst sınır değil — satırlar daha çok isterse üretilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 29).
- Konuklar, arka planlar, ara kareler, detaylar görsel listesinde ayrıca yer alır.
*Kaynak:* 371, 372, 373, 645, 370, 646

### KOD-75 Karar sahnede; Cengo satırları
- Kararı sahnedeki biri sorar; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (kural 22a–b). Önizleme, kesinti ve rakam yok (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–20).
- Her doğru kanıt için Cengo'nun söylenmeyen kanıt satırı var; açılmamış ipucunu anmaz (kural 22c).
- Cengo'nun karar ve kanıt satırları etiketli: `**CENGO [ifade]:** … {yuz: peri.x}` / `**olgu [ifade]:** … {yuz: peri.x}`; ifade kapanış setinde (`gorseller.json`) var olan bir resim olmalı, yoksa kapı (`arac_kapi.js … resim` K2/K8/K6, poz kaydı) durur.
*Kaynak:* 750, 751, 752

## 116. ISTEM-26 ↔ CODEX-10 (0.33)

### ISTEM-26 Filtre sınırda: iki deneme kuralı ve sebep arama yöntemi
- Filtre sınırda: G1 tur 3 ve G63/G67 ancak 2. denemede geçti; G64'ün istemi geçen G63, G65, G66 ile neredeyse aynıydı, ortak sebep bulunamadı. Bu yüzden iki deneme kuralı şart.
- Sebep aranırken kafadan değiştirilmez (sahibinin yöntemi): geçen ve engellenen istemler karşılaştırılır, ortak yan bulunur, sonra denenir. Ölçüt yalnız üreticinin engellemesidir; bizim reddettiğimiz (üretilmiş ama sorunlu) resimler karşılaştırmaya katılmaz.
*Kaynak:* 1394, 1153, 1379

### CODEX-10 Güvenlik filtresi engellerse: iki deneme, sonra web
Güvenlik filtresi engellerse AYNI istem ve AYNI referanslarla bir kez daha denenir (istem DEĞİŞTİRİLMEZ). İkinci deneme de engellenirse
`prompts/G<n>.md` sonuna `## ENGELLENDİ` + tarih + mesajın kısası eklenir, sıradakine geçilir. Sahibinin v4 kararı (4 Kasım 2026): "kesin web"
yolu yok; her resim önce Codex'te iki kez denenir, yalnız iki denemede de engellenen web'e gider.
*Kaynak:* 1257, 1536, 1396

## 117. SUREC-12 ↔ SATIR-2 (0.33)

### SUREC-12 Adım 3: Diyalog
Diyalog `vakalar/vakaN_diyalog.md`'ye Claude'ca yazılır: her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu). Satır–resim
sözleşmesi (5. parça C0): her satırın gerçek muhatabı `kime`/`gir` ile (SR-A, konuk–konuk SR-G); ifade satırın duygusundan seçilir,
eldeki yüzlerden değil (SR-I); sahne notu yalnız o an görüleni söyler (SR-H). Ölçüt: otomatik denetimden geçer.
*Kaynak:* 678

### SATIR-2 Sözleşmenin amacı, kapsamı ve nerede yakalandığı
Sözleşme SR-A…M maddelerinden oluşur (SR-L 8 Kasım 2026'da, SR-M 13 Kasım 2026'da eklendi; eski belgelerde "SR-A…L" yazar). Amaç: bir vakanın resimleri **bir kez** üretilir; kurallar hatayı istem yazılırken yakalar (7. parça adım 3, 8 ve "Satır–resim uyumu"). Nerede yakalanır:
- diyalog yazılırken (adım 3): SR-A, H, I, L (`kime`/`gir`, anlatı, ifade satırın duygusundan, sahne başında akış notu; sahne notu yalnız o an görüleni söyler — kural 4a);
- görsel listesinde (adım 8): SR-B, C, D, K (kıyafet kartı, kıyafet hâli tablosu, ifade/nesne ayrımı);
- istem yazılırken: SR-D, E, I, J (`## Satırlar` her vakada zorunlu, bayraklar kapalı);
- gömmeden sonra hepsi doğrulanır. Bu son adım artık hata aramak için değil, öncekilerin tuttuğunu görmek içindir.
*Kaynak:* 6, 390, 1076, 2628, 2946

## 118. BILGI-21 ↔ RAF-111 (0.33)

### BILGI-21 Rozetler: yalnız kazanılan görünür
(Paravan rozetleri ve sezon sonu tablosu, 9 Kasım 2026.) Yalnız kazanılan rozetler görünür. Liste yok, sayı yok ("12'nin 3'ü" YOK), gri/kilitli kutu yok — gri bir rozetin adı görülmemiş bir sahneyi söyler (Nurcan), sayı nottur. Oyuncu rozeti kazandığı an varlığını öğrenir.
*Kaynak:* 1699

### RAF-111 Paravan'ın rozetleri: komik anlar, Play başarı sistemi yok
Rozetler yalnız komik anlar için ("Pastaya oturdun", "Saadet Hanım'dan üç kez saklandın"); iyi/kötü karar için rozet yok — oyun not vermez. Yalnız kazanılanlar görünür, liste/sayı yok (9 Kasım 2026). Google Play başarı sistemi kullanılmaz (bütün listeyi ve sayıyı kendisi gösterir, gizliler bile sayılır).
*Kaynak:* 1702, 2011, 3019

## 119. KAR-4 ↔ KOD-54 (0.33)

### KAR-4 İsimler değişmez
Sabit karakterlerin ve önceki vakaların isimleri değişmez. (Vaka 6'da ortak yeni isimleri Claude'a bıraktı, 12 Kasım 2026.)
*Kaynak:* 2689

### KOD-54 K1 — Sözlük (isim sızıntısı), hata
- Her clue'nun `text`, `meta`, `ad` ve `gorsel.gosterir`'inde geçen her kanon ismi ve olgu-anahtarı ya o clue'nun `reveals`'inde (ilk kez o açıyor) ya `needs`'inde (daha önce açılmış) olmalı; değilse FAIL. Görsel için: `gosterir ⊆ (clue.needs ∪ clue.reveals)` (Görsel Stil Sözleşmesi §7). KANON.isimler taranır.
- Düzeltme iki yoldan biri: `needs`'e açan olgu eklenir (ör. `needs:["nurcan_suclamasi"]` — o ismi açan kaynak görülmeden kamera açılmaz) ya da isim metinden çıkarılır.
- Keskinleştirmeler: (1) "girişte tanıtılmış" isimler yalnız varsayılan giriş varyantından alınır; (2) koşullu metinlerde her varyant ayrı denetlenir, varyantın koşul olguları o varyantın havuzuna katılır; (3) havuzdaki türetilmiş olgular bileşenlerine açılır; (4) varyantın koşulu bir tohumsa `KANON.tohum_isimleri` o tohumun hangi değerinde hangi isimleri garanti ettiğini söyler.
- İsim tespiti: KANON.isimler kelime sınırıyla, büyük/küçük harf ve Türkçe ekler dahil aranır ("İlyas'ı", "İlyas'ın" → "İlyas"). Olgu-anahtarları metne `{olgu}` şablonuyla ya da açık atıfla girer; asıl risk isimlerdir.
- Yeni oyunda K1 ipucunun hem düz metnini hem `sahne`'sini tarar (KOD-47).
*Kaynak:* 2236, 2237, 2238, 2239, 2240, 2243, 2246, 2307, 2309, 2318, 2354

## 120. SATIR-36 ↔ RAF-63 (0.33)

### SATIR-36 Cengo satırı etiketli replik olarak yazılır
Diyalogda Cengo satırı **etiketli** yazılır: `**CENGO [ifade]:** metin {yuz: peri.x}` → büroda Cengo'nun repliği (16 Kasım 2026). Etiketsiz `**CENGO:**` eski düzendir (anlatı satırı; V1–V5 yeniden geçirilene dek).
*Kaynak:* 633

### RAF-63 Mağaza etiketleri
Mağaza sayfasında "Reklam içerir" ve "Uygulama içi satın alma" etiketleri (zorunlu).
*Kaynak:* 1626

## 121. KOD-29 ↔ ARAYUZ-1 (0.33)

### KOD-29 --tablet
`--tablet` (herhangi bir yere) eklenirse Pixel 5 yerine dikey tablette (800×1280) oynatır, tam sayfa görüntü alır; tablet eşiği tutmazsa hata basar. Yeni vaka bittiğinde iki kipte de koş.
*Kaynak:* 15

### ARAYUZ-1 Tablet düzeni: genel çerçeve
Yalnız yeni oyun, `kaynak/yeni_arayuz.css` (Ekim 2026). Sorun: dikey tablette sabit 480 px sütun sahneyi 1:2'den uzun yapıyordu; 3:4 arka plan iki yandan ~%40 kesiliyor, figürler kadrajdan taşıyordu. Üç kural (ARAYUZ-2, -3, -4) birlikte çözüyor; birini bozma. ARAYUZ-5 (figür kilidi) aynı listede duran ek kuraldır, o da bozulmamalı.
Eski oyunun sayfası bu kurallara girmez (CSS yalnız `build_html.js yeni`'de gömülür).
*Kaynak:* 16, 22

## 122. TON-19 ↔ KAR-9 (0.33)

### TON-19 İkisi de haklıdır, ikisi de yanlıştır
Vaka tasarımı bunu taşır: bazı kapıları kural (Peri) açar, bazılarını içgüdü (Cengo). Oyuncu ikisine de ihtiyaç duyar. (Ton belgesi taslağı §4, öneri.)
*Kaynak:* 1757

### KAR-9 İkisi de gerekli
Bazı ipuçlarını Peri'nin yolu (kural, kibarlık), bazılarını Cengo'nun yolu (tanıdık, kurnazlık) açar.
*Kaynak:* 184

## 123. GOMME-8 ↔ ARAYUZ-38 (0.32)

### GOMME-8 `göm` komutu
Yalnız LISTE'deki her resim `onayli/`'deyken gömülür (yarım set gömülmez; oyunda eski ve yeni resim karışmasın).
1. `kaynak` içinde: `node arac_paket.js ../uretim/v<N>/onayli --vaka <N> --profil <G=profil,…> --genis <…>` → temas sayfasına bak.
2. Aynı komut `--yaz` ile (doğrulayıcı ve derlemeleri kendisi çalıştırır).
3. Not edilen boy ölçekleri `kaynak/yeni/gorseller.json → boy`'a yazılır (`arac_json_yaz.js` ile).
4. Masa kartı (GOMME-28), kart afişi elle (GOMME-21, GOMME-27) ve yeni karakterin künye portresi (GOMME-12).
*Kaynak:* 1140, 1141, 1142, 1143, 1146

### ARAYUZ-38 G65 ve Vaka 6 resimleri (devir notu; konusu GOMME — GOMME birleştiricisine bildirilmeli)
Oğuz Bey'in G65'i (Düzeltme 2: sol el, avuç içi bize dönük) kullanılır — gömülü olan o (`ara_k96.webp`, `onayli/G65.png`, el onayı `fa557717b270`); G65 yeniden gömülmez (Barbaros, 15 Kasım 2026; önce "geçersiz" denmişti, aynı gece kabul edildi). Vaka 6'nın resimleri Barbaros'ta; V6'ya resim gömmeden önce Barbaros'a sor. Açılıştaki dergi resmine (G87) dokunulmadı; kalan 10 resmi (G46, G87–G95) gömme Barbaros'ta (14 Kasım 2026 durumu).
*Kaynak:* 2779

## 124. ISTEM-44 ↔ GOMME-5 (0.32)

### ISTEM-44 Saç toplu satırı (yan karakter); Peri ve Cengo istisna
- Yan karakter isteminde: "saçın dış çizgisi toplu; zemine taşan ince tel yok" (eşarplıysa "saçın tamamı eşarbın içinde"). Gerekçe: dağınık teller zemine taşınca kesimden sonra teller arasında zemin halesi kalıyor (v3 G1, G4). Hale tek başına ret sebebi değil: gömmede yalnız baş kutusunda temizlenir (`5_gorsel_sistemi.md` → F "Hale temizliği yöntemi"; Vaka 1–2'de böyle).
- Peri ve Cengo istisna (sahibi, 6 Kasım): saçları dağınık kalır; onlara bu satır yazılmaz, kesimde kalan hale gömmede temizlenir.
*Kaynak:* 1171, 1193, 2967

### GOMME-5 Saç kenarı (hale) denetimi
Her figürde, sahibine göndermeden önce saç kenarı **büyütülüp bakılır** (Vaka 1'de "saçta grilik" zaman kaybettirdi); bu bakış insana kalır.
Hale kalmışsa resim **yeniden kesilir ya da yeniden üretilir**; elle temizlik artık bir adım değil (YZ kesimi saç arasındaki zemini siler;
sahibinin kararı, 17 Kasım 2026, çelişki sorusu 6). Aşağıdaki elle temizlik yöntemi eski renk kesimi dönemine ait, kayıt olarak durur:
- Renk kesimi kıvırcık/dağınık saçın arasında bej hale bırakır. Yeşil önizlemede (temas sayfası) başı büyütüp bak; hale varsa yalnız **baş kutusunda** temizle.
- Kır saçta dikkat (temizlik saçı da siler). Gümüş/beyaz nesneler (balık, tel, kâğıt, pul) temizlikte silinebilir: kutunun dışında bırak, sonra büyütüp var mı bak. Siyah saçta açık şerit kalır → kenarı koyulaştır.
- Yöntem: koyu saçta, koyu saça komşu ve zemine <30 uzak opak pikseller silinir; **ten çevresi korunur** (korumasız denemede göz akı da gitmişti). Kızıl saç ten rengine yakın (Saadet'in saçı `hale_koyu`nun ten korumasına takıldı): orada yalnız baş kutusunda saydama komşu pikseller birkaç tur aşındırılır (Saadet: y<170, zemine <32 uzak, 8 tur). Krema zemine ~6 birim uzak: renkle genel temizlik kremayı yer, yalnız küçük kutuda çalış.
- Tarif: `vaka1_gorsel_devir.md` §6.
*Kaynak:* 28, 480, 485, 2531, 2545, 3052, 3074

## 125. SUREC-9 ↔ KOD-3 (0.32)

### SUREC-9 Her değişiklikten / commit'ten önce denetim
Her değişiklikten sonra: doğrulayıcı, iki derleme (eski `index.html` md5'i aynı kalmalı), testler, gerekiyorsa tur. Resim gömme
(`göm` komutu) adım 5: kök CLAUDE.md'deki "Her commit'ten önce" komutları; hepsi geçerse commit → push.
*Kaynak:* 2555, 1147

### KOD-3 Her commit'ten (ve her değişiklikten) önce
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # test_bozuk.js hariç hepsi geçmeli
```
Yeni oyunda her değişiklikten sonra: `node dogrulayici.js yeni`, `node build_html.js yeni`, `node build_html.js`, testler. Sahneyi etkileyen
değişiklikte ayrıca tur (`node arac_yeni_tur.js 0 vapur dogru` gibi, yollar KOD-27'de) ve sızıntı taraması (`node arac_sizinti_tur.js V5 40`).
*Kaynak:* 10, 11, 2326, 2350, 2886

## 126. SATIR-4 ↔ ARAYUZ-16 (0.32)

### SATIR-4 Ekran düzeni ve `kime` işaretleri
Ekran düzeni (9 Ekim 2026): sol "bizim taraf" (Peri ya da Cengo), sağ karşı taraf.
- Konuk sahnedeyken Cengo konuşursa Peri'nin yerine sola geçer (aynalı) ve konuğa bakar.
- Cengo konuk varken Peri'ye konuşuyorsa Cengo satırına `{kime: peri}` yazılır (yoksa sola geçer, konuğa bakar).
- Konuk satırında `{kime: peri|cengo}`: konuk kime konuşuyorsa solda o durur.
- Peri konuğa, Cengo'nun ardından konuşuyorsa konuğu sağa almak için `{gir: <konuk>}`.
- Motor kuralı (SR-M6, 13 Kasım 2026, `yeni_arayuz.js`; V1–V5'i de etkiler): Peri'nin `kime`si sahnedeyse motor onu sağa getirir; bundan sonra kalan HİTAP/KONUŞAN bayrağında `gir` eklenir ya da `kime` düzeltilir.
*Kaynak:* 397, 399, 400, 2520, 2521, 389, 2817

### ARAYUZ-16 Figür yerleşimi
- Ekranda en çok iki figür.
- **Eski `kime` düzeni (V1–V5):** Peri solda, sağda **tek** konuk (Cengo ya da konuk — sahnede olan ve en son konuşan); üç kişilik sahnede sağdaki kişi değişir. Bu düzen yalnız V1–V5'e aittir.
- **`ekran` düzeni (V6'dan beri):** ARAYUZ-17 geçerli — Peri'siz iki konuk karşılıklı durabilir, Cengo konukla solda durabilir. (Sahibinin kararı, 17 Kasım 2026, çelişki sorusu 1.)
- Konuşan aydınlanır, dinleyen kararır.
- Sahnede tek kişi varken ortada durur; ikinci kişi gelince kaymadan, anında yanlara geçer (`yeni_arayuz.js/.css`, `.vn-figurler.tek`; `f8dfc4e`, 14 Kasım 2026).
*Kaynak:* 286, 304, 2410, 2779

## 127. SEZON-20 ↔ ISTEM-46 (0.32)

### SEZON-20 Arka planda aynı kurgu tekrar etmez
Yasak olan öğe değil, TEKRAR (sahibi, 6 Kasım 2026: "deniz ve cami resimlerde olabilir; sorun her resmin aynı ve benzer çıkması"). Deniz, cami,
vapur, gün batımı serbest. Tekrar eden kurgu — ortada uzaklaşan sokak/koridor + ucunda ufuk — bir vakada en çok bir kez; yoksa kamera başka yere
konur (cepheye karşıdan, çapraz, yukarıdan, köşeden). Işık sıcak kalır (§7); saat istemdeki gibi (sabah istenmişse gün batımı değil).
*Kaynak:* 1204

### ISTEM-46 Mekân kompozisyonu tekrar etmez (§7a)
13 Kasım 2026, sahibi: "üretilen sokak resimleri önceki vakalardakine çok benzer olmamalı". Referans resim ışıkla birlikte kompozisyonu da taşıyor (Vaka 3–5 sokaklarının 4–5'i aynı kare: ortada uzaklaşan arnavut kaldırımı, ucunda deniz + güneş diski + vapur + cami silüeti; iç mekânların çoğu ortadan uzaklaşan koridor; V6'nın ilk G11'i de aynısıydı, saat "sabah" iken gün batımı). Her mekân isteminde:
- `Kompozisyon:` satırı — kamera nerede durur, nereye bakar; ön, orta, arka planda ne var. Metnin istediği an (ör. "bankta oturup kapıya bakar") kompozisyonu belirler.
- Referans satırı: "yalnız boya dokusu ve sıcak renk; KOMPOZİSYONUNU ALMA".
- `istem_kontrol.sh` arka plan isteminde `Kompozisyon:` arar; yoksa geçirmez (eski mekân kalıbı tekrar eder).
*Kaynak:* 1201, 1202, 1203, 1207, 3582

## 128. SATIR-20 ↔ DENETIM-28 (0.32)

### SATIR-20 Adı geçen herkes ekranda (iki yönlü)
ZORUNLU (16 Ekim 2026, sahibinin kararı): anlatı satırında adı geçen her kişi (ya da grup: nedimeler, annesi, misafirler) o satırda ekranda olmalı. Tek kişiyse figürü `{gir: x}` ile o satırda girer (yeri tanıtan `{mekan}` satırı bile olsa); ekranda aynı anda yalnız iki figür durabildiği için iki kişiden fazlası ya da grup → kare. Kapı K2 (Vaka 6 ve sonrası) iki yönlüdür: anlatıda adı ya da eş sözü geçen herkes ekranda; ekrandaki herkes o satırda anılıyor, konuşuyor ya da hitap ediliyor. Denetim üç adımda: diyalog yazılırken (adım 3: kişi sayan her anlatı satırına `gir` ya da kare), görsel listesinde (adım 8: kalabalık anlatan her satıra kare) ve turda (adım 11: `arac_yeni_tur.js … --hepsi` `satir/adi_gecen_yok.txt`'ye aday listesi yazar; grup adlarını ve akrabalık sözlerini — "annesi" — yakalamaz, onlara gözle bakılır). Vaka 7'den beri bu liste hikâye donmadan kapanır (SATIR-12). Köken: Vaka 2'de sahibi Onay 3'te buldu ("yazıda bahsedilen kişiler görünmüyor"): son prova açılışları, "Bütün nedimeler Defne'ye dönüyor", "Gelme anne!" → K33 (son prova, 4 açılış), K34 (herkes Defne'ye dönüyor, 7 satır), K35 (atölye kapısında kumaşçının adamı), `lal.kilif` sonradan üretildi; Gülsüm/Bülent/Defne/Tolga tanıtım satırında `gir` aldı.
*Kaynak:* 719, 2574, 3014, 3056, 3547 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### DENETIM-28 Sayım ve adı geçen herkes
İstemde "TAM n kişi" yazıyorsa kişiler sayılır; aynı karakter bir sahnede iki kez görünmez. Metindeki kare/sahne satırında adı geçen herkes resimde olmalı (`vakaN_diyalog.md` → `{kare: Kn}`).
*Kaynak:* 470, 1126, 1315

## 129. ARAYUZ-35 ↔ RAF-111 (0.32)

### ARAYUZ-35 Defter → Rozetler sayfası
Defter'de "Rozetler" sayfası: yalnız kazanılanlar, hangi vakada kazanıldığıyla (komik anların albümü). (9 Kasım 2026.)
*Kaynak:* 1701

### RAF-111 Paravan'ın rozetleri: komik anlar, Play başarı sistemi yok
Rozetler yalnız komik anlar için ("Pastaya oturdun", "Saadet Hanım'dan üç kez saklandın"); iyi/kötü karar için rozet yok — oyun not vermez. Yalnız kazanılanlar görünür, liste/sayı yok (9 Kasım 2026). Google Play başarı sistemi kullanılmaz (bütün listeyi ve sayıyı kendisi gösterir, gizliler bile sayılır).
*Kaynak:* 1702, 2011, 3019

## 130. ARAYUZ-32 ↔ RAF-44 (0.32)

### ARAYUZ-32 Paylaş kartı (vaka)
Biten vaka afişli bir kartla paylaşılır (web'de kuruldu, 17 Ekim 2026; ayrıntı `CLAUDE.md` → "Paylaş"). Kart suçlu/karar/kasa taşımaz (kasa 16 Kasım 2026'dan beri yok). Her vakaya iki şey gerekir:
1. **Kapak** (`gorseller.json → kapak`, zorunlu, yedek): ipucu sahnelerinde geçen bir ARKA PLAN; yüzleşme/kovalamaca/kapanış ve K kareleri olmaz (Nurcan). `test_yeni_arayuz.js` kapaksız vakayı yakalar.
2. **Kart afişi** (`gorseller.json → kart`, `KART_V3`): kişiler + mekân, ipucusuz, hareketli. Adım 8'de görsel listesine eklenir, promptu `sablon/kart_sayfa/uret.py`'ye yazılır; kurallar `5_gorsel_sistemi.md` → **G**.
`giris` varsayılanının ilk cümlesi paylaşım mesajına girer: sızıntısız ve tek başına anlaşılır olsun.
Android'de kalan: anı karşılaştırması (bitirmiş arkadaşa kilitli) ve davet kodu.
*Kaynak:* 2008, 2578

### RAF-44 Aile paylaşımı
Aile paylaşımı açık.
*Kaynak:* 1597

## 131. KAR-26 ↔ YAPI-43 (0.32)

### KAR-26 Sabit sezon hikâyesi
Peri'nin geçmişi (dolandırıcı avukat, haczedilen taç) sabit sezon hikâyesidir: her oyuncu için aynıdır; oyuncunun kararları değiştirmez. Vaka vaka:
- Açılış: haciz, taç gider, büro, Cengo.
- 2: Ev sahibi gelir (komedi).
- 3: Yan karakter gelir.
- 6: Cengo'nun kızı ortaya çıkar.
- 7: Taç müzayedede.
- 8: Avukat döner. Avukatın Cengo'yu nereden tanıdığı açılır.
*Kaynak:* 162, 263, 265, 266, 267, 269, 270, 271

### YAPI-43 Vakalar arasında yalnız Cengo bağı ve sabit sezon hikâyesi taşınır
Her vaka kendi içinde kapanır. Vakalar arasında yalnız şunlar taşınır: **Cengo bağı** (sistem, vakadan vakaya sürer) ve sabit sezon hikâyesi. Para/kasa 16 Kasım 2026'da kalktı; para taşınmaz, yalnız hikâyededir (kural 24).
*Kaynak:* 160, 161, 219

## 132. SATIR-24 ↔ ARAYUZ-25 (0.32)

### SATIR-24 Hareket sahneleri (kovalamaca) kareleri
Kovalamaca yazıyla değil görüntüyle anlatılır: her vuruşun kendi ara karesi var (3–4 kare). Kareler birbirinin devamıdır (aynı hız, aynı kargaşanın izleri). Sıralama metinle aynı: önde koşan önce düşer. Sahneden ayrılan figür karede yok (`{gizle: cengo}`) — Vaka 1'de karelerin sırası/kişisi yanlıştı.
*Kaynak:* 110, 408, 2526

### ARAYUZ-25 Hareket yok
Figürler ve kareler durağan görsellerdir. Yeni poz = yeni görsel.
*Kaynak:* 305

## 133. ISTEM-11 ↔ CODEX-4 (0.32)

### ISTEM-11 Peri / Cengo temeli (yeni kıyafet)
- Referanslar sırayla, hepsi dekoltesiz: 1. yüz: `../referanslar/peri_bas.jpg` ya da `../referanslar/C1_cengo_yuz.jpg`; 2. beden/ölçek: `../referanslar/tarz_govde_kadin.jpg` ya da `../referanslar/cengo_beden.jpg`; 3. tarz örneği: `tarz_ornek_kadin.jpg` ya da `tarz_ornek_erkek.jpg`. (Kıyafet kartı referansı: ISTEM-19.)
- İstem sırası: "Birinci referans görseldeki … AYNISI" → kıyafet (kart nasılsa öyle + kartta görünmeyen dekolte derinliği; ISTEM-19) → "Poz: TAM İKİ KOL, İKİ EL." + her elin işi → bakış satırı (H3) → ifade → kadraj + zemin satırı → çıplaklık satırı → tarz örneği cümlesi (ISTEM-10) → yazı yasağı → oran.
- Peri'nin eski referansları (L*, peri_*, poz_peri_*; `sablon/peri_poz/` L1–L25 kütüphanesi) HEPSİ dekolteli — kullanılmaz; Peri'nin pozu metinle anlatılır.
- Cengo poz kütüphanesi `sablon/cengo_poz/` (C1–C25, dizin `OKUBENI.md`; 17 Ekim'de tamam): C1 yüz, G14-1 beden; zor pozda uygun C "YALNIZ poz için" (ör. C25 koltukta bacak bacak üstünde, C16 işaret eden, C24 arkadan, C19 yürüyor). İfadeler vakanın temel figürünün düzenlemesi (ISTEM-14); kıyafet V1/V2 ile aynıysa oyundaki figür referanstır. Adım 8'de her Cengo kartına hangi C'nin gireceğini Claude yazar.
*Kaynak:* 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1063, 1479, 3012, 2581, 412

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 134. BILGI-13 ↔ SATIR-1 (0.32)

### BILGI-13 Kişiyi görünür yapan bağ sahnede söylenir
Bir kişi bir olgu yüzünden "Kim yaptı?" ekranında görünür hâle geliyorsa, o olgunun geldiği sahnede bağ söylenir ("Evde kim var?" "Bir oğlu var."); oyuncuya bırakılmaz.
*Kaynak:* 137

### SATIR-1 Temel ilke: söylenen görünür, görünen söylenmiş
Satır–resim sözleşmesi sahibinin kararıdır (8 Kasım 2026; ana metni `sablon/5_gorsel_sistemi.md` C0). Bir şey söylendiğinde ilgili kişi ya da kişiler ekranda görünür, ya da söylenen şey resimde görünür. Tersi de geçerlidir: resimde görünen şey o an söylenmiş olmalı. Sahnede bulunmayan ya da geçmişte kalan birinden söz etmek serbesttir ("Kenan dün akşam neredeydi?" kare istemez).
Metin bir nesneyi, hareketi ya da kıyafeti anıyorsa o satırda ekranda görünür. Üç yol var:
- figürün ifadesi o nesneyle ya da hareketle,
- bir ara kare,
- bir mekân karesi (nesne arka planda görünüyorsa).
Hiçbiri yoksa metin değişir. (Vaka 1'de yaşanan: metin telefon, istavrit, tel andı, ekranda yoktu.)
*Kaynak:* 6, 375, 391, 392, 393, 394, 395, 2528, 723, 2549

## 135. SUREC-20 ↔ GOMME-6 (0.32)

### SUREC-20 Görsel iş sayfası
11 Ekim 2026, sahibinin kararı (zorunlu): promptlar sahibine düz metin ya da md dosyası olarak değil, claude.ai'da yayımlanmış tek bir
**iş sayfası** (Artifact) olarak verilir. Vaka 2'nin sayfası: https://claude.ai/artifact/DhL2uDY7LHzMLqo8FQ5fXQ — sahibinin ölçüsü: "beni
çok hızlandırdı; sonraki vakalar aynı şekilde devam etmeli" (Vaka 2: 59 görsel). Her vakada **aynı biçimde** üretilir. Vazgeçilmez
özellikler:
- Görseller **sohbet sırasıyla** gruplu (temel görsel önce, türevleri arkasından; tek görsellik konuk/mekân "Yeni sohbet · Ad"; kareler en
  sonda, her biri ayrı sohbet).
- Her kartta numara (G<n>), ad, oyundaki anahtar, **tam prompt metni** (yer tutucu yok, "[ortak stil satırı]" gibi kısaltma yok) ve
  **Kopyala** düğmesi.
- Referanslar kartın içinde **numaralı**: dosya referansı **indir** düğmesiyle, önceki çıktı referansı "G<n> çıktısı (ne için)" diye.
- **Yapıldı** işareti (tarayıcıda kalır) — sahibi nerede kaldığını görür.
- Kartta **bakılacaklar** satırı (o görselde en sık bozulan şey).
Üretim: `sablon/vakalar/vakaN_sayfa/` = `uret.py` (veriyi `vakaN_gorsel.md`'den tam metinli üretir → `veri.js`) + `sablon.html`. Yeni vakada
önceki vakanın (Vaka 2'nin) klasörü kopyalanır, `uret.py`'deki görsel listesi ve `sira` değiştirilir; `sablon.html` aynen kalır. Sayfa
adım 8'in **çıktısıdır**: `vakaN_gorsel.md` biter bitmez üretilir, yayımlanır, bağlantısı sahibine ve `DEVIR.md`'ye yazılır. Sahibi
sohbetleri **sayfadaki sırayla** yürütür; süre tablosu, `DEVIR.md` ve belgelerdeki sohbet bölümlemesi sayfayla aynı tutulur (Vaka 2'de
"7 = G35–G45" diyen belge sayfayla ayrışmıştı). Sohbet sırası değişirse önce sayfa, sonra belgeler. Ayrıntı: `5_gorsel_sistemi.md` D-6.
**Codex düzeninde (Vaka 4'ten beri) bu madde yalnız web'de üretilecek resimler için geçerlidir**; öbür resimleri Codex döngüsü üretir
(SUREC-32), sohbet sırası ve sayfa onlar için yok. 7. parçanın adım 8–9'u ve D-6 buna göre yazılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 416, 417, 418, 419, 420, 421, 731, 2571

### GOMME-6 Paket aracı ve toplu işleme
Görseller tek tek değil, **sohbet sohbet** (bir sohbetin bütün çıktıları), toplu gelir.
- Dosyalar `G<n>` ile başlar ya da ChatGPT'nin verdiği adla kalır; sahibi yalnız numaraları yazar ("Sohbet 1, G1–G13"), araç `--sira G1-G13` ile dosya adındaki üretim saatine göre numara verir. Pakette her numaradan **bir** görsel olur (beğenilmeyen çıkarılır); sayı tutmazsa araç durur. Numarayı mesaj sırasından değil görselden doğrula (Vaka 2'de 3. ve 4. tablonun tersiydi).
- Numara `sablon/vakalar/vakaN_gorsel.md` tablosundan tür ve anahtara çevrilir.
- `cd kaynak && node arac_paket.js <klasör> --vaka N [--yaz]`: `--yaz` yokken yalnız önizler, proje dosyasına dokunmaz (temas sayfası `YENI_UI/paket_<klasör>.png`: yeşil zemin + büyütülmüş baş). `--yaz` ile keser/küçültür, gömer, manifestoyu günceller, doğrulayıcı + iki derlemeyi koşar ve eski `index.html`'in değişmediğini md5 ile sınar.
- Araca kalmayan (insana): saç halesi, yazı/harf taraması, boy ayarı (araç boyu olmayan konuğu söyler), ilgili satırlarda ekran görüntüsü (`arac_yeni_tur.js`).
- Sahibine paketin oyundaki son hâli tek seferde gösterilir; düzeltme istenen görseller tek listede döner. Temel görseller (G1, G14…) bitince öbür sohbetler aynı anda (başka sekmede, ChatGPT ya da Grok) yürüyebilir.
- Araçtır, test değil.
*Kaynak:* 28, 730, 3074, 3085

## 136. YAPI-5 ↔ RAF-52 (0.32)

### YAPI-5 İpucu ve araştırma hakkı
- Bedava ipucu yok: her ipucu bir hak harcar. İpucu sayısı haktan fazladır.
- Vaka 1: 5 ipucu, 4 hak. Vaka 2: 6 ipucu, 3 hak. Vaka 2'den itibaren 3 hak.
- **3 hakla `doğru` yolu şart** (`test_yeni_v2.js` sınar); 4. ipucu resmi genişletir.
- Reklamla +1 hak (16 Ekim 2026, sahibinin kararı; Android'de): reklam düğmesi hak bitince çıkar; kapanıştan sonra "Kaçırdığın ipuçları". Ayrıntı `kaynak/YENI_OYUN_CERCEVE.md`.
- Motor araştırmada ipucu listesi, hak sayısı, ipucu sahnesi ve "deftere düştü" kartı gösterir.
- Formda her ipucunun kısa sahne özeti ayrıca yazılır.
*Kaynak:* 85, 118, 119, 120, 294, 571, 599, 600, 2575

### RAF-52 +1 araştırma hakkı ve koruma kuralı
Koruma kuralı (pazarlığa kapalı, raf düzeninde aynen): her vaka reklamsız haklarla `doğru` çözülebilir olmalı — reklam başarı satmaz, yalnız daha geniş resim verir. Doğrulayıcı/test bunu vaka başına sınar (reklamsız hak sayısıyla en az bir `doğru` yolu); ekonomi sözleşmesi aynen (`test_borc.js`). +1 hak (16 Ekim 2026, sahibinin kararı; sahibi oynarken 3 hakkı az buldu): vaka başına bir kez, bir ek araştırma hakkı (bugün kredi/reklam ile, RAF-47). Reklamsız sürümde (web, Steam) ek hak düğmesi çıkmaz; Steam'de hak sayısı sonra kararlaştırılır (ör. reklamın yerine +1 sabit).
*Kaynak:* 1611, 2003, 3019

## 137. YAPI-5 ↔ ARAYUZ-36 (0.31)

### YAPI-5 İpucu ve araştırma hakkı
- Bedava ipucu yok: her ipucu bir hak harcar. İpucu sayısı haktan fazladır.
- Vaka 1: 5 ipucu, 4 hak. Vaka 2: 6 ipucu, 3 hak. Vaka 2'den itibaren 3 hak.
- **3 hakla `doğru` yolu şart** (`test_yeni_v2.js` sınar); 4. ipucu resmi genişletir.
- Reklamla +1 hak (16 Ekim 2026, sahibinin kararı; Android'de): reklam düğmesi hak bitince çıkar; kapanıştan sonra "Kaçırdığın ipuçları". Ayrıntı `kaynak/YENI_OYUN_CERCEVE.md`.
- Motor araştırmada ipucu listesi, hak sayısı, ipucu sahnesi ve "deftere düştü" kartı gösterir.
- Formda her ipucunun kısa sahne özeti ayrıca yazılır.
*Kaynak:* 85, 118, 119, 120, 294, 571, 599, 600, 2575

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

## 138. YAPI-25 ↔ KOD-75 (0.31)

### YAPI-25 Cengo söylenmeyen doğru kanıtı söyler
Kural 22c; sahibinin kararı, 16 Kasım 2026 (eski ücret kesintisinin ve formdaki "kesinti açıklaması"nın yerine; kasa yok).
- Kapanıştan önce, büroda, Cengo yalnız oyuncunun **elinde olup** suçlamada kullanmadığı doğru kanıtı anar ("Elindeydi"; seçimi `cozumYolu()` yapar, testli).
- **Açılmamış ipucunun bilgisi asla anılmaz** (kural 20 / 20 Ekim kuralı; reklamlı "kaçan ipucu" da bunun için korunur).
- Doğru kişi + sağlam kanıtta Cengo bu konuyu açmaz. Yanlış kişi suçlandıysa da aynı kural: elindeki doğru kanıt.
- Yazar suçluyu kanıtlayan **her doğru kanıt için bir** Cengo satırı yazar; satır yalnız o kanıtı anar, kanıtın kendi bilgisinden fazlasını söylemez, çiftin öbür kanıtını anmaz (oyuncu onu açmamış olabilir — V6'nın ilk örneğindeki "Sofradaki tarihle" sözü sızıntı taramasında yakalandı, 16 Kasım 2026). Form kontrolü: her doğru kanıt için satır var, yalnız o kanıtın bilgisini söylüyor.
- Örnek (V6, zayıf): "Elbise kılıfını o gün iki kişi tuttu, Peri. Onu söyleseydin kadın 'kanıtınız ne?' diyemezdi." (DEVIR'deki karar notunda aynı örnek "Torbayı o gün iki kişi tuttu…" biçimindedir.)
- Karar satırı da kanıt satırı da **Cengo'nun repliğidir** (Peri'ye söyler, anlatı değil; Peri dinler). Diyalogda etiketle yazılır: karar satırı `**CENGO [ifade]:** … {yuz: peri.x}`; kanıt satırı `## cengo_kanit` bölümünde `**olgu [Cengo'nun ifadesi]:** metin {yuz: peri.x}` — ifade ve Peri'nin yüzü yazılır (kapıda K8). Biçim `sablon/6_vaka_formu.md`. Veride `kim_yapti.cengo_kanit[olgu]`.
- Bir doğru kanıtın Cengo satırı yoksa o yolda Cengo susar.
*Kaynak:* 208, 614, 667, 2773

### KOD-75 Karar sahnede; Cengo satırları
- Kararı sahnedeki biri sorar; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (kural 22a–b). Önizleme, kesinti ve rakam yok (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–20).
- Her doğru kanıt için Cengo'nun söylenmeyen kanıt satırı var; açılmamış ipucunu anmaz (kural 22c).
- Cengo'nun karar ve kanıt satırları etiketli: `**CENGO [ifade]:** … {yuz: peri.x}` / `**olgu [ifade]:** … {yuz: peri.x}`; ifade kapanış setinde (`gorseller.json`) var olan bir resim olmalı, yoksa kapı (`arac_kapi.js … resim` K2/K8/K6, poz kaydı) durur.
*Kaynak:* 750, 751, 752

## 139. ARAYUZ-7 ↔ RAF-22 (0.31)

### ARAYUZ-7 Cihaza ayrı ayar yok
Her cihaza ayrı ayar yapılmaz; kurallar orana dayalı, denetim taklitle (`--cihaz`) yapılır (sahibinin kararı, 16 Ekim 2026).
*Kaynak:* 3031

### RAF-22 Ayarın yeri
Genel ayar rafta, kitaba özgü ayar kitapta; aynı ayar iki yerde olmaz.
*Kaynak:* 1570

## 140. SUREC-23 ↔ KOD-42 (0.31)

### SUREC-23 Gizem referans seti
Vaka 3'te Gizem'in referans seti yok (17 Ekim): önce temel figür tek başına, onaydan sonra ifadeler. Vaka 3 bitince sahibiyle karar
verilir: küçük set (8–10) ya da tam set (25, Peri/Cengo gibi). Vaka süresine girmez.
*Kaynak:* 2567

### KOD-42 Kıyafet seti sahne başında
Diyalogda `⚙ … · set: tayyor · cset: takim`: `set` Peri'nin, `cset` Cengo'nun seti (`kanon.sahne.figurler.cengo.setler`). Cengo'nun sprite anahtarı set varsa `cengo.<set>.<ifade>`, yoksa `cengo.<ifade>` (Vaka 1). K15 ikisini de denetler. Satırda `{cset: unlu}` Cengo'nun setini sahne ortasında değiştirir (Vaka 3, 17 Ekim 2026).
*Kaynak:* 2450

## 141. KAR-20 ↔ YAPI-40 (0.31)

### KAR-20 Cengo'nun tepkisi ahlaka değil duruma göredir
Dört kararın Cengo satırları yan yana okununca "doğru cevap" çıkmamalı (vaka formu 12. Kararlar'da da denetlenir).
*Kaynak:* 210, 632

### YAPI-40 Cengo'nun yorumu gizli not olmamalı
Komedi "not vermez" kuralını yeni bir yerden deler: Cengo'nun esprisi gizli bir not olabilir — her temiz karara alkış, her kirli karara laf sokarsa Cengo puan tabelasına döner.
- Cengo yorum yapabilir, çünkü o bir karakterdir, hakem değil. Ama tepkisi ahlaka değil **duruma** göredir: bazen kurnazca kirli bir oyunu sever (eski besleme tablosunda da öyleydi), bazen dürüst bir karar ona pahalıya patlar ve söylenir.
- Bir vakadaki kararların Cengo satırları yan yana konunca "doğru cevap" okunmamalı; `arac_akis_denetim.js` tam bunu basar.
*Kaynak:* 1792, 1794, 1795

## 142. DENETIM-38 ↔ CODEX-24 (0.31)

### DENETIM-38 Onay
Onaylanan resim `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>` taşınır. Buna bağlı resimlerin önü açılır, çünkü Codex yalnız `onayli/`'yi referans alır. Temel figürse baş kırpığı hazırlanır (`referanslar/<kim>_bas.png`).
*Kaynak:* 1138, 1325, 1517

### CODEX-24 Döngü çalışırken yerel Claude'un işi
1. `uretilen/`'e geleni denetler. Onayladıkça yeni resimlerin önü açılır; döngü çıktıysa yeniden başlatır. (Codex 5 dk'dan uzun beklerse: CODEX-13.)
2. Temel onaylanınca gereken baş kırpığını/şeridi hazırlar (`referanslar/`); hazırlanmayan referansı bekleyen resim döngüye girmez.
   `referanslar/`'a yalnız yeni dosya (baş kırpığı, şerit) koyar; var olan dosyayı değiştirmez (17 Kasım 2026, çelişki sorusu 2).
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. Üretilecek ve denetlenecek resim kalmayınca durur. LISTE'nin hepsi `onayli/`'deyse `göm`'e geçer. Gömmeden sonra `DURUM.md`'deki bağlama
   etiketlerini diyaloğa yazar ve `cd kaynak && node arac_kapi.js V<N> resim` koşar — GEÇTİ demeden vaka bitmiş sayılmaz.
*Kaynak:* 1086, 1087, 1088, 1089

## 143. SINIR-5 ↔ YAPI-20 (0.31)

### SINIR-5 Dekolte felaket sahnesinde de bozulmaz
Peri'nin felaketinde (kirlenen sahnede) de dekolte temel setteki ayarda görünür.
*Kaynak:* 1867

### YAPI-20 Peri'nin felaketi
Sahibinin kararı, 6 Ekim 2026. Her vakada Peri'nin üstü başı bir şekilde berbat olur (bir kovalamaca, boğuşma ya da kaza; balık, çamur, boya, pasta, su…) — zarif eski güzellik kraliçesinin en kötü anı, fiziksel komedi.
- Felaket kovalamacanın içinde olur; iki kural birbirini besler.
- Felaket vakanın konusundan çıkar (V1: balık kasaları); dışarıdan yapıştırılmaz.
- Görsel maliyeti: 1 ara kare + 2 "kirli" ifade (sinirli, utanmış) → vaka başına 3.
- Sahne sonunda temizlenme anı yazılır (V1: çaycının hortumu); sonraki sahneler temel setle sürer; araştırma sırası serbest olduğu için kirli hâl yayılmaz.
*Kaynak:* 112, 1865, 1868, 1869, 1870, 1874

## 144. ARAYUZ-2 ↔ RAF-84 (0.31)

### ARAYUZ-2 Sütun genişliği
`.vn` genişliği `max(480px,56dvh)`: sütun yüksekliğe göre genişler, oran telefondakine yakın kalır. Telefon ve yatay ekran 480 px tabanında kalır.
*Kaynak:* 17

### RAF-84 Anlaşma yalnız genişler
Var olan madde değişmez, silinmez (eski kitaplar yeni rafta çalışır).
*Kaynak:* 1653

## 145. GOMME-23 ↔ ARAYUZ-25 (0.31)

### GOMME-23 Kart afişi: hareketli ve eğlenceli
Sahibinin kararı (17 Ekim): afişler eğlenceli ve hareketli; Peri ile Cengo'nun kendine özgü pozu var. Peri kameraya yürür (L19 yalnız poz referansı); Cengo vakaya uygun komik bir hareket yapar (V1 martıdan eğiliyor, V2 Peri'yi dansa davet ediyor). Arka sıra yerinde durur.
*Kaynak:* 495, 3001

### ARAYUZ-25 Hareket yok
Figürler ve kareler durağan görsellerdir. Yeni poz = yeni görsel.
*Kaynak:* 305

## 146. ISTEM-35 ↔ DENETIM-28 (0.31)

### ISTEM-35 Kalabalık kare
- Kare promptunda kişi sayısı yazılır: "Kadrajda TAM n kişi: …" (K19'da kenardaki Cengo düştü); gelince metindeki kare satırıyla (`vakaN_diyalog.md` → `{kare: Kn}`) sayılır, adı geçen herkes var mı bakılır.
- Her kişi için parantez içinde referans numarası ve kıyafet özeti. Örnek: "Peri (ikinci referans; kısa bej trençkot kemeri bağlı, krem eşarp, güneş gözlüğü alnında, kırmızı stiletto, ÇORAP YOK)". Peri varsa "en gösterişli kadın" satırı (ISTEM-21); her elin işi.
*Kaynak:* 456, 1209, 1426, 1427, 1428, 3077

### DENETIM-28 Sayım ve adı geçen herkes
İstemde "TAM n kişi" yazıyorsa kişiler sayılır; aynı karakter bir sahnede iki kez görünmez. Metindeki kare/sahne satırında adı geçen herkes resimde olmalı (`vakaN_diyalog.md` → `{kare: Kn}`).
*Kaynak:* 470, 1126, 1315

## 147. KOD-29 ↔ ARAYUZ-4 (0.31)

### KOD-29 --tablet
`--tablet` (herhangi bir yere) eklenirse Pixel 5 yerine dikey tablette (800×1280) oynatır, tam sayfa görüntü alır; tablet eşiği tutmazsa hata basar. Yeni vaka bittiğinde iki kipte de koş.
*Kaynak:* 15

### ARAYUZ-4 Yatay tablet / geniş ekran
`min-width:1000px` ve `min-height:700px`: yalnız `#app` ekranları aynı `zoom:1.3` ile büyür; konuşma ekranı BİLEREK 480 px'te kalır — 800 px yükseklikte genişlerse 3:4 arka plan üstten/alttan kesilir, figürün başı ya da ayağı gider. Yatay tablette konuşma ekranının dar kalması sahibince kabul edildi (16 Ekim 2026).
*Kaynak:* 19, 3033

## 148. GOMME-26 ↔ CODEX-4 (0.30)

### GOMME-26 Kart afişi: referanslar (5)
Mekân, Peri temeli, Cengo temeli, **konuk şeridi** (figürler bej zeminde tek görselde birleştirilir; `uret.py` yanındaki `ref/`), L19. Şerit tek referansla dört kişi taşır.
*Kaynak:* 498

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 149. SUREC-32 ↔ CODEX-25 (0.30)

### SUREC-32 Resim üretim döngüsü (Codex + yerel Claude)
1. Hikâye donar → Claude'a (yerel ya da bulut) **`istemleri hazırla N`** → sahibi listeyi onaylar.
2. Yerel Claude'a **`vaka N resimlerini üret`**; yerel Claude kendi döngüsünü yürütür: Codex'i çalıştırır → gelen resmi denetler → onaylar
   ya da düzeltme notuyla yeniden ürettirir → ara ara GitHub'a gönderir.
3. Hepsi onaylanınca resimleri oyuna gömer, testleri çalıştırır, gönderir.
Vaka 4'ten beri resimler bu düzenle (`uretim/CLAUDE.md`). Adım 8–9 bu düzene göre yazılır; iş sayfası yalnız web'deki resimler için (SUREC-20) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 1270, 1271, 1272, 2631

### CODEX-25 Yerel Claude resim üretmez, istem metnini değiştirmez
Yerel Claude resim üretmez (Codex üretir). `prompts/`'taki istem metnini değiştirmez; istem dosyasına yalnız sonuna `## Düzeltme` eklenir.
`referanslar/`'taki var olan dosyayı değiştirmez; oraya yalnız baş kırpığı/şerit gibi yeni dosya koyar (CODEX-24 madde 2). Eski Vaka 3
talimatının "`referanslar/`'a dokunma" yasağı bu kadarıyla kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 2).
*Kaynak:* 1150, 1506

## 150. YAPI-8 ↔ KOD-70 (0.30)

### YAPI-8 Suçluyu kanıtlayan yollar ve kanıt çiftleri
- Suçluyu tam kanıtlayan **en az iki ayrı ipucu yolu** vardır.
- Formda yazılır: suçluyu tam kanıtlayan yollar (en az 2; hangi ipuçları birlikte), "Kim yaptı?"da doğru kanıt çiftleri (hangi iki olgu birlikte suçu kanıtlar), zayıf kanıtlar (suçluyu gösteren ama tek başına yetmeyen olgular).
*Kaynak:* 126, 601, 602, 603, 657

### KOD-70 K19 — Kim yaptı? yapısı
3 şüpheli; suçlu her yolda görünür; kanıt çiftleri olgu; ücret sırası; dört yüzleşme sahnesi; 4 karar; kapı/tohum/bedava ipucu yok; ipucu > hak; hak içinde en az 2 farklı doğru kanıt çifti; hiçbir doğru çift tek ipucundan çıkmaz (kural 21c); K19 artık `kesinti` açıklaması, karar `onizleme`si ve "kasa eksiye düşmez" denetimi **istemez** — üçü de 16 Kasım düzeniyle kalktı (kesinti, önizleme, kasa yok) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–21). Üretim denetiminde ayrıca: suçluyu kanıtlayan en az 2 ipucu yolu var (742).
*Kaynak:* 2444, 742, 743

## 151. KOD-30 ↔ ARAYUZ-8 (0.30)

### KOD-30 --cihaz (19 ekran boyu)
`--cihaz` eklenirse oyun bir kez oynanır, seçilen her anda sayfa 19 ekran boyuna (telefonlar, iPhone Safari çubuklu, telefon yatay, tablet dikey/yatay — 1280×650 çubuklu dahil, dizüstü, masaüstü) getirilip görüntülenir ve ölçülür (`kaynak/arac_cihaz.js`; ~3–5 dk; örnek komut `node arac_yeni_tur.js 0 ortu dogru --cihaz`). Çıktı `YENI_UI/cihaz/`: her an için bütün boylar yan yana bir karşılaştırma sayfası + `bayraklar.txt`.
Bayraklar ADAY'dır: yatay taşma, figür başı kadraj dışı, konuk/Peri boy oranının Pixel 5'ten %12'den fazla sapması (Lâl/Defne hatası), arka planın %65'ten azı görünmesi (ilk tablet hatası), Peri'nin küçülmesi, kutunun ekranı yemesi, küçük dokunma hedefi. Eşikler `ESIK` tablosunda. Yeni vaka, yeni görsel ya da düzen değişikliğinden sonra koş. Telefon yatay boyunu araç "dikey uyarısı" diye işaretler, altını ölçmez. Bilinen tek bayrak: 1280×650'de seçim ekranı (arka planın ~%51'i görünür, kutu büyüdüğü için) — göze batmıyor.
*Kaynak:* 15, 3035

### ARAYUZ-8 Yatay telefon
Yatay telefon için ayrı düzen yok, uyarı var (sahibinin kararı, 16 Ekim 2026).
*Kaynak:* 3032

## 152. KAR-22 ↔ GOMME-17 (0.30)

### KAR-22 Her vakada yeni kıyafet
Peri ve Cengo her vakada yeni kıyafet giyer. İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
*Kaynak:* 193, 102

### GOMME-17 İki zemin de riskliyse kıyafet değişir
İki zemin de riskliyse (araç "KIYAFET DEĞİŞMELİ" der) zemin değil KIYAFET değişir (sahibinin kararı, 14 Kasım 2026: "yeni bir kıyafet giydiririz, bu kadar uğraşacak bir şey yok"). Araç çakışan rengi ve figürdeki yerini basar; kıyafetin o parçası iki zeminden de uzak bir renkle değiştirilir (kıyafet kanondur: çakışan parça sahibine/ortağa sorulur, onlar karar verir), kart yeniden üretilir, araç yeniden koşar. Yeni zemin rengi eklenmez.
*Kaynak:* 537, 1084

## 153. YAPI-5 ↔ KOD-69 (0.30)

### YAPI-5 İpucu ve araştırma hakkı
- Bedava ipucu yok: her ipucu bir hak harcar. İpucu sayısı haktan fazladır.
- Vaka 1: 5 ipucu, 4 hak. Vaka 2: 6 ipucu, 3 hak. Vaka 2'den itibaren 3 hak.
- **3 hakla `doğru` yolu şart** (`test_yeni_v2.js` sınar); 4. ipucu resmi genişletir.
- Reklamla +1 hak (16 Ekim 2026, sahibinin kararı; Android'de): reklam düğmesi hak bitince çıkar; kapanıştan sonra "Kaçırdığın ipuçları". Ayrıntı `kaynak/YENI_OYUN_CERCEVE.md`.
- Motor araştırmada ipucu listesi, hak sayısı, ipucu sahnesi ve "deftere düştü" kartı gösterir.
- Formda her ipucunun kısa sahne özeti ayrıca yazılır.
*Kaynak:* 85, 118, 119, 120, 294, 571, 599, 600, 2575

### KOD-69 K18 — İpucu adı
İpucu adındaki özel isimler (kesmeli kelime ya da ilk kelime dışında büyük harfle başlayan) ipucu açılabilir olduğu anda oyuncunun duyduğu adlar arasında olmalı (giriş, konuşma, `needs` zincirindeki ipuçlarının sahne ve olguları; Peri ve Cengo her zaman bilinir).
*Kaynak:* 747, 2443

## 154. ISTEM-42 ↔ DENETIM-27 (0.30)

### ISTEM-42 Konum ve fizik
Oturan figürün nereye oturduğu, bacaklarının nereye sarktığı, dirseğinin neye dayandığı yazılır ("pervazın ön kenarında, bacakları kaloriferin önünde"); havadaki nesnenin konumu başa göre ("başının epey yukarısında").
*Kaynak:* 1163, 1165, 1432

### DENETIM-27 Fiziksel olabilirlik
Oturan ya da dayanan figürde bacaklar nereye iniyor, mobilyanın içinden veya arkasından geçiyor mu, dirsek gerçekten masada mı — bakılır. Sebep: G63'te Gizem'in bacakları pervazın arkasına (kalorifer ile duvar arasına) girmişti, Peri'nin dirseği havadaydı; Claude onaylamıştı, sahibi yakaladı, onay geri alındı ve resim ret gibi işlendi.
*Kaynak:* 1125, 1314

## 155. SUREC-36 ↔ RAF-1 (0.30)

### SUREC-36 Ton belgesi taslaktır
`YENI_OYUN_TON.md` (4 Ekim 2026) taslaktır: §9–11'deki kararlar sahibinindir; geri kalan her karakter ayrıntısı ve her örnek replik
öneridir, kanon değildir. Sahibi onaylamadan hiçbir vaka bunlara dayanarak yazılmaz. Çerçeve kararları ayrı belgede: `YENI_OYUN_CERCEVE.md`.
*Kaynak:* 1712

### RAF-1 RAF_KARARLARI.md'nin önceliği
`kaynak/RAF_KARARLARI.md`, `YENI_OYUN_CERCEVE.md`'deki platform, dil, metin anahtarı, satış, reklam ve gardırop kararlarının yerine geçer (9 Kasım 2026; mobil kütüphane uygulaması "Ajar", Paravan rafın ilk kitabı). Çelişki olursa RAF_KARARLARI.md geçerlidir. Çerçeve belgesinde eskiyen satırlar işaretlidir.
*Kaynak:* 1548, 1976

## 156. SATIR-4 ↔ ARAYUZ-17 (0.30)

### SATIR-4 Ekran düzeni ve `kime` işaretleri
Ekran düzeni (9 Ekim 2026): sol "bizim taraf" (Peri ya da Cengo), sağ karşı taraf.
- Konuk sahnedeyken Cengo konuşursa Peri'nin yerine sola geçer (aynalı) ve konuğa bakar.
- Cengo konuk varken Peri'ye konuşuyorsa Cengo satırına `{kime: peri}` yazılır (yoksa sola geçer, konuğa bakar).
- Konuk satırında `{kime: peri|cengo}`: konuk kime konuşuyorsa solda o durur.
- Peri konuğa, Cengo'nun ardından konuşuyorsa konuğu sağa almak için `{gir: <konuk>}`.
- Motor kuralı (SR-M6, 13 Kasım 2026, `yeni_arayuz.js`; V1–V5'i de etkiler): Peri'nin `kime`si sahnedeyse motor onu sağa getirir; bundan sonra kalan HİTAP/KONUŞAN bayrağında `gir` eklenir ya da `kime` düzeltilir.
*Kaynak:* 397, 399, 400, 2520, 2521, 389, 2817

### ARAYUZ-17 Karşılıklı konuşmada yerler sabit
Aynı iki kişi bir önceki satırda da ekrandaysa yerleri korunur, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Peri hep solda. Kod `yeni_arayuz.js` (`vnSatirGoster`, `ekran` dalı), kural `sablon/5_gorsel_sistemi.md` SR-G; `86db39d`. `ekran` etiketli vakalara (V6'dan beri) uyar; eski "Peri solda, sağda tek konuk" düzeni yalnız V1–V5'indir (ARAYUZ-16; 17 Kasım 2026). Sebep: V6 girişinde Gizem ↔ Eylül her satırda yer değiştiriyordu (`ekran` etiketinin sırası konuşanı sola alıyordu). (Sahibinin kararı, 16 Kasım 2026.)
- V6 tarandı: bu türden başka yer kalmadı.
- Kalan taraf değiştirmeler (Cengo konukla solda, Peri konuşunca sağda; tek görünen konuk karşısına biri gelince sola) sahibince sorunsuz bulundu, **dokunulmayacak**.
- V1–V5'teki iki örnek (V4: Rana ↔ Feraye, Feraye ↔ Sadık; eski `kime` düzeni) **bilerek düzeltilmedi**; o vakalar yeni kurallara göre yeniden geçirilecek.
*Kaynak:* 2770

## 157. BILGI-18 ↔ KOD-84 (0.30)

### BILGI-18 Görsel için doğrulayıcı eki (Kural 1 genişletme)
Her görsel, bağlı clue'nun `reveals`ine etiketlenir. Görsel bir kanon yüzü/olguyu gösteriyorsa, o yüz/olgu clue'nun `needs ∪ reveals` kümesinde olmalıdır; değilse → FAIL. Nurcan'ın görsel versiyonu böyle engellenir.
*Kaynak:* 2127

### KOD-84 CLUE ve GORSEL
- CLUE: `id`, `ad` (listede görünen ad), `tur: "Görüntü"|"İfade"|"Belge"|"Gözlem"`, `ico`, `needs: [olgu|<IFADE>]` (boş = baştan açık), `reveals: [olgu]`, `text`, `meta` (yorum/çıkarım), `gorsel: GORSEL|null`.
- GORSEL: `dosya` (ör. "v1_merdiven.jpg"), `tur: "kanit"|"portre"|"mekan"`, `gosterir: [olgu|isim]` (görselin ifşa ettiği bilgi — `reveals`'ten fazlası olamaz), `alt` (erişilebilirlik + yer tutucu açıklama).
*Kaynak:* 2306, 2308

## 158. SUREC-22 ↔ ISTEM-2 (0.30)

### SUREC-22 Temel görsel önce, türevler onaydan sonra
Karakter temelleri (Peri, Cengo, yan karakterler) ve mekân temelleri ilk turda onaylanır; her temel reddi bütün zinciri bir tur geciktirir.
Her sohbette sahibi önce temel görseli (G1, G14, G19…; mekânda G35, G40, G43 — Vaka 2 numaraları) **tek** gönderir; Claude kontrol
listesinden geçirip "doğru, devam" ya da düzeltme promptu verir; türevler onaydan sonra üretilir. Neden: Vaka 2'de bunu yapmayan Sohbet 1
(G8'deki çorap bandı G9–G13'e yayıldı) 64 dk sürdü, yapan sohbetler görsel başına 3–5 dk; Vaka 3'te G5 iki kez reddedildi ve beş resmi
(G33, G34, G35, G54, G57) bekletti. Sahibi görselleri sohbete **doğrudan yapıştırır**, numarayı Claude verir (dosya adı gerekmez); sahibi
"Sohbet N'e başlıyorum" / "bitti" der, saatler süre tablosuna yazılır. Sahibi "üret" dediğinde hiçbir resim (temel) hazır değilse bu
söylenir ve önce "kontrol et" istenir. Vaka 2'nin bütün görsel dersleri (kıyafet sabiti kayması, külotlu çorap, sayı, şehir, marka izi,
kalabalıkta kişi düşmesi, kim kimi görüyor, red) `5_gorsel_sistemi.md` D (bilinen hatalar tablosu), E (kontrol listesi 10–12) ve F'de
(kesim profilleri, hale, rötuş sınırı); prompt yazarken D tablosundaki önlemler promptlara baştan konur. Temel önce kuralı Codex düzeninde de
sürer (DENETIM-41); sohbet/yapıştırma ayrıntısı yalnız web'deki resimler için kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 712, 1356, 1488, 2572

### ISTEM-2 Sıra: temeller önce
Karakter temel figürleri ve mekân temelleri ilk numaralarda; ifadeler ve kareler sonra. Gerekçe: bir temelin reddi bütün zinciri bir tur geciktirir (Vaka 3'te G5 beş resmi bekletti).
*Kaynak:* 1060

## 159. TON-22 ↔ KAR-39 (0.30)

### TON-22 Paravan'ın yasal durumu tekrarlanan espridir
Sahibinin kararı, 5 Ekim 2026. Paravan, kanunda var sayılmayan bir mesleği yapan sahte bir şirkettir. İlk kez açılışta Hilmi Bey söyler ("Yasak değil. Ama var da sayılmaz. Sizin şirket gibi."). Sezon boyu ara sıra geri döner: kimlik soran bir polis, kartvizit bastırmaya çalışan Peri, "meslek" hanesine ne yazacağını bilemeyen bir form.
*Kaynak:* 1820

### KAR-39 Paravan'ın yasal durumu (gerçek)
Sahibinin kararı, 5 Ekim 2026 (tekrarlanan espri). Türkiye'de özel dedektiflik için bir kanun yok: 1994'te hazırlanan Özel Dedektiflik Kanunu (3963) yürürlüğe girmedi. Meslek ne yasak ne lisanslı; delil hukuka uygun toplandığı sürece iş yapılabiliyor, çoğu büro "danışmanlık" ya da "araştırma" şirketi olarak çalışıyor.
*Kaynak:* 1819

## 160. GOMME-21 ↔ ARAYUZ-32 (0.30)

### GOMME-21 Kart afişi: genel
Her vakanın bir afişi var (17 Ekim 2026): oyuncu vakayı bitirince "Arkadaşına öner" kartının arka planı olur (`gorseller.json → kart`, anahtar `KART_V<n>`; 9:16). Okuyan kişi vakayı OYNAMADI — afiş Nurcan yüzeyidir. İstemler ve iş sayfası `sablon/kart_sayfa/uret.py`: yeni vaka = yeni `G.append`, sonra `python3 uret.py` ve aynı Artifact'e yeniden yayın. Vaka 1 ve 2'nin istemleri örnek; Vaka 2 afişi balo salonunda.
*Kaynak:* 490, 1146, 3001

### ARAYUZ-32 Paylaş kartı (vaka)
Biten vaka afişli bir kartla paylaşılır (web'de kuruldu, 17 Ekim 2026; ayrıntı `CLAUDE.md` → "Paylaş"). Kart suçlu/karar/kasa taşımaz (kasa 16 Kasım 2026'dan beri yok). Her vakaya iki şey gerekir:
1. **Kapak** (`gorseller.json → kapak`, zorunlu, yedek): ipucu sahnelerinde geçen bir ARKA PLAN; yüzleşme/kovalamaca/kapanış ve K kareleri olmaz (Nurcan). `test_yeni_arayuz.js` kapaksız vakayı yakalar.
2. **Kart afişi** (`gorseller.json → kart`, `KART_V3`): kişiler + mekân, ipucusuz, hareketli. Adım 8'de görsel listesine eklenir, promptu `sablon/kart_sayfa/uret.py`'ye yazılır; kurallar `5_gorsel_sistemi.md` → **G**.
`giris` varsayılanının ilk cümlesi paylaşım mesajına girer: sızıntısız ve tek başına anlaşılır olsun.
Android'de kalan: anı karşılaştırması (bitirmiş arkadaşa kilitli) ve davet kodu.
*Kaynak:* 2008, 2578

## 161. ISTEM-15 ↔ GOMME-26 (0.30)

### ISTEM-15 Referans verme biçimi
- Her prompt referans dosyalarıyla birlikte gönderilir (`referans/G<n>-<sıra>_ad.png`); referanslar numaralı, aynı mesajda (Vaka 1'de referanslar sonradan istendi; sahibinin duran kuralı).
- Referanslar sırayla ve tam yolla verilir; sıra önemli, çünkü istem "birinci referans, ikinci referans…" diye konuşur.
- En çok 5 referans (ChatGPT sınırı; 16 Ekim 2026, Vaka 2 K33'te görüldü). `istem_kontrol.sh` 5'ten fazlasını geçirmez.
- Daha çok kişi gerekiyorsa o kişileri bir arada gösteren önceki bir kare tek referans olarak verilir (K34 → K33 çıktısı), ya da şerit: birden çok karakterin temeli tek resimde. Şerit, kaynak temeller yeniden onaylanınca yenilenir: hepsi 900 px yüksekliğe, soldan sağa, aralarında 24 px zemin rengi: `magick G6.png G7.png G8.png G9.png -resize x900 -background "<zemin>" -splice 24x0 +append serit.jpg` (ilk sütundaki fazla boşluğu kırp). Şeritte dekolte olmamalı.
*Kaynak:* 2536, 3119, 1347, 412, 3563, 1149

### GOMME-26 Kart afişi: referanslar (5)
Mekân, Peri temeli, Cengo temeli, **konuk şeridi** (figürler bej zeminde tek görselde birleştirilir; `uret.py` yanındaki `ref/`), L19. Şerit tek referansla dört kişi taşır.
*Kaynak:* 498

## 162. SEZON-25 ↔ SUREC-4 (0.30)

### SEZON-25 Barbaros'a anlatım biçimi
Barbaros'la konuşurken her şey **basit ve kısa** anlatılır; her seferinde söyletilmez (Barbaros'un isteği).
*Durum:* taslak (`sablon/TASLAK_tekrar_onleme.md`; Barbaros "yaz" demedi).
*Kaynak:* 935

### SUREC-4 Rol ayrımı: kim neye karar verir
- **17 Kasım 2026 (Barbaros'un kararı): Oğuz Bey'in hesabı her şeye yetkili** — kod, kurallar, metin, resim, yayın; aşağıdaki
  "Barbaros'a danışılır" listesi Barbaros geri alana dek askıda.
- **Barbaros (sahibi) her şeyi yapabilir**; ortağın yetkisi onunkini daraltmaz (11 Kasım 2026).
- **Ortak (Oğuz Bey) kendisi karar verir (işletme):** var olan kurallara göre vaka üretmek, hikâyeye yeni ayrıntı eklemek (kanon), metin
  düzeltmek, resim üretmek, test/araç/derleme çalıştırmak, `main`'e göndermek. Belgelerdeki "sahibine sor" bu işler için ortağa sorulur.
- **Barbaros'a danışılır, ortak tek başına onaylamaz:** yeni kural yazmak ya da var olanı değiştirmek (`CLAUDE.md`, `sablon/`,
  sözleşmeler), kod ve altyapı (motor, arayüz, araçlar, derleme), yayın, satış ve platform kararları (`RAF_KARARLARI.md`). Böyle bir iş
  çıkarsa Claude yapmaz; ne istendiğini kısaca yazar, ortak Barbaros'a iletir. Codex/ChatGPT hesabı Barbaros'undur. Bu liste 14 Kasım'da
  da değişmedi.
- **14 Kasım 2026'dan beri bütün üretim (vaka metni + resim) Oğuz Bey'de:** Barbaros vaka üretmez — ama Barbaros da resim üretimini yürütebilir (aşağıda "üretimin yeri"
  ve "sahibi") (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 41). Codex ve web ChatGPT için Barbaros'un
  hesabı kullanılır (şimdilik; ileride değişebilir). Oğuz Bey üretimi yürütür: yerel Claude'a `vaka N resimlerini üret` der, takılınca
  sorulana cevap verir, Oğuz Bey'in yürüttüğü oturumda resim onayında son karar onundur, web'de üretilecekleri Barbaros'un ChatGPT hesabıyla üretir.
- **Resim üretiminin yeri (Barbaros, 14 Kasım 2026 gece — öncekinin yerine):** döngü/Codex Oğuz Bey'in ya da Barbaros'un bilgisayarında
  yapılır; ikisi aynı numarayı aynı anda üretmez, hangisinin ürettiği `DURUM.md` en üstte yazılır.
- **"Sahibi" (resim üretiminde):** o oturumda üretimi yürüten kişi (Oğuz Bey ya da Barbaros); resim onayında son söz ondadır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 41). Temel onayı, resim onayı/reddi, el onayı,
  web listesi (filtreye takılanlar), tarz soruları ona gider; yeni kural ya da kural değişikliği Barbaros'a sorulur (`kaynak/DEVIR.md` en üst).
- **Yerel Claude:** denetler, onaylar ya da düzeltme notuyla reddeder, oyuna gömer, GitHub'a gönderir; kuralları `uretim/CLAUDE.md`.
- **Bulut Claude:** bilgisayar kapalıyken istem yazar, onaylıları inceler, oyunu düzeltir; resim üretemez.
*Kaynak:* 2907, 2908, 2909, 2910, 1266, 2798, 2795, 2796, 2797, 1265, 1035, 1036, 1268, 1269

## 163. YAPI-25 ↔ KOD-44 (0.30)

### YAPI-25 Cengo söylenmeyen doğru kanıtı söyler
Kural 22c; sahibinin kararı, 16 Kasım 2026 (eski ücret kesintisinin ve formdaki "kesinti açıklaması"nın yerine; kasa yok).
- Kapanıştan önce, büroda, Cengo yalnız oyuncunun **elinde olup** suçlamada kullanmadığı doğru kanıtı anar ("Elindeydi"; seçimi `cozumYolu()` yapar, testli).
- **Açılmamış ipucunun bilgisi asla anılmaz** (kural 20 / 20 Ekim kuralı; reklamlı "kaçan ipucu" da bunun için korunur).
- Doğru kişi + sağlam kanıtta Cengo bu konuyu açmaz. Yanlış kişi suçlandıysa da aynı kural: elindeki doğru kanıt.
- Yazar suçluyu kanıtlayan **her doğru kanıt için bir** Cengo satırı yazar; satır yalnız o kanıtı anar, kanıtın kendi bilgisinden fazlasını söylemez, çiftin öbür kanıtını anmaz (oyuncu onu açmamış olabilir — V6'nın ilk örneğindeki "Sofradaki tarihle" sözü sızıntı taramasında yakalandı, 16 Kasım 2026). Form kontrolü: her doğru kanıt için satır var, yalnız o kanıtın bilgisini söylüyor.
- Örnek (V6, zayıf): "Elbise kılıfını o gün iki kişi tuttu, Peri. Onu söyleseydin kadın 'kanıtınız ne?' diyemezdi." (DEVIR'deki karar notunda aynı örnek "Torbayı o gün iki kişi tuttu…" biçimindedir.)
- Karar satırı da kanıt satırı da **Cengo'nun repliğidir** (Peri'ye söyler, anlatı değil; Peri dinler). Diyalogda etiketle yazılır: karar satırı `**CENGO [ifade]:** … {yuz: peri.x}`; kanıt satırı `## cengo_kanit` bölümünde `**olgu [Cengo'nun ifadesi]:** metin {yuz: peri.x}` — ifade ve Peri'nin yüzü yazılır (kapıda K8). Biçim `sablon/6_vaka_formu.md`. Veride `kim_yapti.cengo_kanit[olgu]`.
- Bir doğru kanıtın Cengo satırı yoksa o yolda Cengo susar.
*Kaynak:* 208, 614, 667, 2773

### KOD-44 Karar alanları (16 Kasım 2026 düzeni)
- `secenek` = Peri'nin seçim cümlesi (diyalogda `**SEÇENEK:**`); `cengo_sonuc` = Cengo'nun büroda satırı.
- `cengo_replik: { i, yuz }` varsa o satır Cengo'nun repliği olarak oynar (`k: "cengo", kime: "peri"`, `i` Cengo'nun ifadesi, `yuz` dinleyen Peri'nin yüzü); diyalogda etiketli `**CENGO [ifade]:** metin {yuz: peri.x}`. Etiketsiz `**CENGO:**` → `cengo_replik` yok → eski düzende anlatı satırı (V1–V5, V7 yeniden geçirilene dek).
- `kim_yapti.cengo_kanit: { olgu: metin }` ve `kim_yapti.cengo_kanit_replik: { olgu: { i, yuz } }` aynı biçimden gelir (`## cengo_kanit` → `**olgu [ifade]:** metin {yuz: peri.x}`).
- Eski alanlar: `onizleme` = eski karar ekranındaki tek cümlelik kısa sonuç (artık gösterilmez; zorunlu değil, doğrulayıcı da istemez (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19)); `para` = karar parası (hikâye rakamı; kasa yok); `gate: "yok"` (kapı yok); `seed_yaz` yok (tohum yok).
*Kaynak:* 2435

## 164. ISTEM-9 ↔ DENETIM-2 (0.30)

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

### DENETIM-2 Tarz sonucunun üç hâli
- **KALDI** (tarz puanı < 0) → ret; `## Düzeltme`: tarz (boyalı, sıcak ışık, dokulu; kalın kontur/düz boya yok).
- **ŞÜPHELİ** (0–0,02) → onaylanmaz; aynı düzeltmeyle yeniden üretilir. İki kez ŞÜPHELİ kalırsa sahibine sorulur (görüntüyle).
- **GEÇTİ** → göz denetimi (A ve B). Kayda `G<n> tarz GEÇTİ (+0,0xx)` yazılır; bu satırı olmayan resim onaylı sayılmaz.
*Kaynak:* 1097, 1098, 1099

## 165. SATIR-5 ↔ SHORTS-15 (0.30)

### SATIR-5 SR-G Konuk konuğa konuşursa ikisi de ekranda
Konuk başka bir konuğa konuşuyorsa satıra `{kime: <konuk>}` yazılır: konuşan sola geçer (aynalı), hitap edilen sağda kalır (C-3 ekran düzeni; 8 Kasım 2026, `yeni_arayuz.js`). O satırda Peri ekranda değildir. Peri ya da Cengo konuşunca, ya da soldaki konuk `kime`siz konuşunca sol Peri'ye döner. Karşılıklı sürerse yerler sabit (16 Kasım 2026, sahibinin kararı): aynı iki kişi bir önceki satırda da ekrandaysa kimse yer değiştirmez, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Örnek: Nadide ↔ Ferruh, Gizem ↔ Ferruh.
*Kaynak:* 6, 383, 401

### SHORTS-15 Konuşan ve hitap edilen ekranda
(5. parça SR kurallarının kısası.) Konuşan karakter ekranda olur (araç kendiliğinden ekler). Hitap edilen de ekranda kalır.
*Kaynak:* 820

## 166. SUREC-29 ↔ KOD-49 (0.30)

### SUREC-29 Değişiklik nereye yazılır (veri yolu)
Replik, sahne notu, karar metni → `sablon/vakalar/vakaN_diyalog.md`, sonra `cd kaynak && node arac_diyalog.js ../sablon/vakalar/vakaN_diyalog.md VN`.
Yapı (olgu metni `facts`, ipucu kartı `clues[].text/meta`, çıkarım başlığı, `kim_yapti`, karar parası/bağ, `anahtarlar`) ve künye
(`yeni/kisiler.json`) diyalogdan üretilmez: `yeni/game_data.json`'da doğrudan değişir (node ile oku-değiştir, `arac_json_yaz.js` ile yaz).
Vaka 4'ün ilk iskeleti geçici bir betikle kuruldu, depoda yok — yeniden kurmak gerekmez, veri artık tek kaynak. Hikâye değişirse aynı
değişiklik `vakaN_form.md`'ye de işlenir (örnek, Vaka 4: "yüz lira" diyalogda, olguda, ipucu kartında, itirafta, hikâyede ve formun fiyat
tablosunda değişti).
*Kaynak:* 2885, 2926

### KOD-49 Diyaloğa yeni kare eklerken üç yer
(18 Ekim 2026, K53) `game_data.json → kanon.sahne.kareler` (`arac_diyalog.js` bunu YAZMAZ; eksikse K15 BLOCKED der; `arac_json_yaz.js` ile yaz), `gorseller.json → yer_tutucu` + `yer_tutucu_metin`, ve vakanın diyalog dosyasındaki görsel tablosu.
*Kaynak:* 2452, 2991

## 167. KOD-29 ↔ ARAYUZ-6 (0.30)

### KOD-29 --tablet
`--tablet` (herhangi bir yere) eklenirse Pixel 5 yerine dikey tablette (800×1280) oynatır, tam sayfa görüntü alır; tablet eşiği tutmazsa hata basar. Yeni vaka bittiğinde iki kipte de koş.
*Kaynak:* 15

### ARAYUZ-6 Yeni ekran / yeni arka plan uyarısı
Yeni bir ekran ya da pencere `#app`'in ya da `.vn`'in DIŞINA eklenirse tablet kuralları ona uygulanmaz; tablette ayrıca bak. Yeni arka plan 3:4 değilse kesim oranı değişir.
*Kaynak:* 21

## 168. KOD-42 ↔ ARAYUZ-19 (0.29)

### KOD-42 Kıyafet seti sahne başında
Diyalogda `⚙ … · set: tayyor · cset: takim`: `set` Peri'nin, `cset` Cengo'nun seti (`kanon.sahne.figurler.cengo.setler`). Cengo'nun sprite anahtarı set varsa `cengo.<set>.<ifade>`, yoksa `cengo.<ifade>` (Vaka 1). K15 ikisini de denetler. Satırda `{cset: unlu}` Cengo'nun setini sahne ortasında değiştirir (Vaka 3, 17 Ekim 2026).
*Kaynak:* 2450

### ARAYUZ-19 Kıyafet sahne içinde değişebilir
Sahne içinde Peri'nin kıyafeti değişebilir (manto → mantosuz gibi); Cengo'nunki de (`cset`, Vaka 3: un bulutu).
*Kaynak:* 288

## 169. SATIR-37 ↔ KOD-35 (0.29)

### SATIR-37 Kapı K1: ekran metinden gelir
Kapı (`kaynak/arac_kapi.js`, 14 Kasım 2026, sahibinin kararı; Vaka 6 ve sonrası): her satırda `{ekran: …}` yazılı olur (kare/mekân satırı hariç); önceki satırdan hiçbir şey taşınmaz.
*Kaynak:* 3546 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### KOD-35 Kapı (arac_kapi.js)
Sahibinin kararı: vaka kaydedilmeden önce `kaynak/arac_kapi.js` 13 kural + eski denetimleri kendiliğinden koşar; Vaka 6 ve sonrası. Kurallar dosyanın başında; vaka kaydı `sablon/vakalar/vaka6_kapi.md`. Commit bağlantısı (`.claude/kapi_hook.js`) **açık olmalı**: kapı her commit'te kendiliğinden çalışır, geçmezse commit olmaz (`.claude/settings.json` ile bağlanır) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 24). (14 Kasım'da "Vaka 6 kapıdan geçince açılacak" deniyordu; Vaka 6 15 Kasım'da geçti.) Ondan sonra: GitHub yayın koruması (sahibi: "sonra ekle"). `arac_kapi.js … resim` K2/K8/K6, Cengo satırlarındaki ifadenin kapanış setinde olmamasını yakalar (KOD-75).
*Kaynak:* 2791, 752

## 170. YAPI-13 ↔ KOD-73 (0.29)

### YAPI-13 Kim yaptı? ekranı
- Oyuncu önce bir şüpheli, sonra iki kanıt seçer (iki ayrı ekran).
- Seçilebilen şüpheliler yalnız adı duyulanlar; kanıtlar yalnız eldeki olgular (olgu = oyuncunun eline geçen cümleler).
- Kanıt yalnız **ipuçlarında** bulunan bilgilerden seçilir; müşterinin girişte anlattıkları herkesin bildiği bilgidir, kanıt değildir.
- Kanıtlar şüpheliye göre **süzülmez** (süzmek cevabı söylemek olur); öğrenildiği yerin başlığı altında, kapalı gruplar hâlinde durur.
- **Tek hak:** oyuncu bir kez suçlar.
*Kaynak:* 86, 131, 139, 296, 596

### KOD-73 Şüpheli ve Kim yaptı? yolları
3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var. Her ipucu yolunda "Kim yaptı?" ekranı çalışır (tam, zayıf ya da yanlış sonuç).
*Kaynak:* 741, 744

## 171. YAPI-2 ↔ RAF-18 (0.29)

### YAPI-2 Sezon açılışı vaka değildir
Oyunun en başındaki açılış (haciz, büro, Cengo) vaka değildir, vaka formunun dışındadır. Yalnız kural kitabına, kanon kaydına ve görsel sistemine uyar. Bir kez oynanır.
*Kaynak:* 82

### RAF-18 Kitabın açılış ekranı
Girişte kitabın kendi kısa açılış ekranı (1–2 sn, dokununca atlanır) — "kapıdan girme" anı.
*Kaynak:* 1566

## 172. SUREC-24 ↔ SATIR-31 (0.29)

### SUREC-24 Adım 11: Görselli oyun turu
Bütün yollar otomatik oynanır; ayrıca her sahne satır satır: konuşan/karşısındaki doğru mu, iki aynı figür var mı, dinleyenin yüzü uygun
mu, saç kenarı temiz mi; satır–resim sözleşmesinin (SR-A…L) hepsi. Ölçüt: hata yok. Bulunanlar sahibine **tek liste** hâlinde, ekran
görüntüsüyle verilir; düzeltilebilenleri (yerleşim, boy, takma, kesim) önce Claude düzeltir, yeniden üretim gerektirenler için prompt
verir. Sahibi Onay 3'e temizlenmiş turla başlar.
*Kaynak:* 686, 729

### SATIR-31 Görsel–metin uyum denetimi (adım 11, Onay 3'ten önce)
Bulanık replik taramasının görsel kardeşi. Bütün görseller gömülünce görselli tur **bütün yollarda** koşulur (`arac_yeni_tur.js`) ve her ekran altındaki metinle yan yana, her sahne satır satır okunur. Bulunanlar tek listede toplanır (ayrıntı: `7_uretim_sureci.md` → Hızlandırma kuralları). Sorular:
- **Kim var?** Metindeki/kare satırındaki herkes ekranda mı; ekranda kaç figür var; fazladan ya da iki kez görünen var mı (Vaka 1: iki Cengo aynı ekranda)? (Adı geçen: SATIR-20.)
- **Kime konuşuyor?** Konuşan kim, karşısında kim; hitap ettiği kişi mi duruyor? (SATIR-3, SATIR-6.)
- **Yüz satıra uyuyor mu?** Konuşanın ve dinleyenin ifadesi bu satırın duygusu mu, önceki satırdan mı kalmış? (SATIR-15, SATIR-16.)
- **Anılan şey görünüyor mu?** Metindeki nesne, hareket, kıyafet (krema, örtü, kravat gevşek/çözük, gözlük elde).
- **Süreklilik:** kıyafet, saç, takı aynı mı; önceki olay iz bırakıyor mu? (SATIR-7.)
- **Yer ve zaman:** SATIR-32.
- **Görünürlük:** SATIR-33.
- **Nurcan** (sızıntı) da bu okumada aranır.
*Kaynak:* 718, 719, 720, 722, 723, 724, 725, 726, 2570, 2522, 2546, 2547, 2548, 2549, 2550, 2552

## 173. SATIR-22 ↔ RAF-71 (0.29)

### SATIR-22 Sahneden ayrılan ve saklanan kişi
`{gizle: cengo}`: figür sahneden ayrıldı (koşup gitti); konuşunca geri gelir. Sahneden ayrılan figür kareye girmez. Saklanan kişi (masanın altı, kapı arkası) **ara kareyle** gösterilir: kapıda gelen, masanın altında saklanan aynı karede (Vaka 2 K20, Vaka 3 K53 — aynı açı, tekrar eden şaka). Anlatı + gelenin ilk repliği o karede; figür düzeninde `gizle` ile yapılırsa saklanan, adı geçtiği satırda ekranda olmaz (18 Ekim, sahibinin kararı).
*Kaynak:* 403, 721, 408, 2526

### RAF-71 Saklananlar
Her kitabın kaydı, krediler, ayarlar. Satın almaları mağaza tutar ("Geri yükle").
*Kaynak:* 1635

## 174. ARAYUZ-20 ↔ RAF-25 (0.29)

### ARAYUZ-20 Giriş / çıkış
Konuk sahneye girer, sahneden çıkar.
*Kaynak:* 289

### RAF-25 Hesap/giriş yok
Uygulamada hesap ya da giriş yok. Satın almalar mağaza hesabına bağlıdır.
*Kaynak:* 1573

## 175. SUREC-6 ↔ KOD-33 (0.29)

### SUREC-6 Ortak bilgisayara kurulum yalnız Barbaros'la
Barbaros Oğuz Bey'in bilgisayarının başına geçip "resim üretim programlarını kurdurt" dediğinde `uretim/KURULUM_ORTAK.md` ona adım adım
uygulatılır. Kurulumu yalnız Barbaros yapar; Oğuz Bey'in oturumlarında bu konu açılmaz (Barbaros, 13 Kasım 2026).
*Kaynak:* 2805

### KOD-33 Ortağın bilgisayarı ve ilk kurulum
- İlk kurulum (bir kez): Git, Node.js, Python 3 kurulu olmalı. Depoda olmayan tarayıcı aracı (`araclar/`, Playwright + Chromium) yeniden kurulur: `npx playwright install chromium`. Resim üretimi için ortağın kendi Codex erişimi gerekir (`uretim/CLAUDE.md`). Kurulumdan sonra `cd kaynak && node dogrulayici.js yeni` ve test döngüsü geçmeli.
- Tuzak: Claude'un kabuğu `PW` kullanıcı değişkenini görmez; tur araçlarından önce `export PW=C:/Yazilim/paravan/araclar/node_modules/playwright`. Python `py` ile çalışır (`python` yok).
*Kaynak:* 2887, 2912

## 176. KOD-31 ↔ ARAYUZ-8 (0.29)

### KOD-31 Telefonu dikey çevir uyarısı
Telefon yatayda (alçak, dokunmatik, yatay ekran) oyunun üstüne "Telefonu dikey çevir" uyarısı biner (`yeni_arayuz.css` sonu, `body::before`; sahibinin kararı, Ekim 2026 — sahne ~170 px'e iniyordu).
*Kaynak:* 15

### ARAYUZ-8 Yatay telefon
Yatay telefon için ayrı düzen yok, uyarı var (sahibinin kararı, 16 Ekim 2026).
*Kaynak:* 3032

## 177. SUREC-32 ↔ CODEX-24 (0.29)

### SUREC-32 Resim üretim döngüsü (Codex + yerel Claude)
1. Hikâye donar → Claude'a (yerel ya da bulut) **`istemleri hazırla N`** → sahibi listeyi onaylar.
2. Yerel Claude'a **`vaka N resimlerini üret`**; yerel Claude kendi döngüsünü yürütür: Codex'i çalıştırır → gelen resmi denetler → onaylar
   ya da düzeltme notuyla yeniden ürettirir → ara ara GitHub'a gönderir.
3. Hepsi onaylanınca resimleri oyuna gömer, testleri çalıştırır, gönderir.
Vaka 4'ten beri resimler bu düzenle (`uretim/CLAUDE.md`). Adım 8–9 bu düzene göre yazılır; iş sayfası yalnız web'deki resimler için (SUREC-20) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 1270, 1271, 1272, 2631

### CODEX-24 Döngü çalışırken yerel Claude'un işi
1. `uretilen/`'e geleni denetler. Onayladıkça yeni resimlerin önü açılır; döngü çıktıysa yeniden başlatır. (Codex 5 dk'dan uzun beklerse: CODEX-13.)
2. Temel onaylanınca gereken baş kırpığını/şeridi hazırlar (`referanslar/`); hazırlanmayan referansı bekleyen resim döngüye girmez.
   `referanslar/`'a yalnız yeni dosya (baş kırpığı, şerit) koyar; var olan dosyayı değiştirmez (17 Kasım 2026, çelişki sorusu 2).
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. Üretilecek ve denetlenecek resim kalmayınca durur. LISTE'nin hepsi `onayli/`'deyse `göm`'e geçer. Gömmeden sonra `DURUM.md`'deki bağlama
   etiketlerini diyaloğa yazar ve `cd kaynak && node arac_kapi.js V<N> resim` koşar — GEÇTİ demeden vaka bitmiş sayılmaz.
*Kaynak:* 1086, 1087, 1088, 1089

## 178. BILGI-4 ↔ KOD-70 (0.29)

### BILGI-4 Hiçbir ipucu suçluyu tek başına göstermez (kural 21c)
Sahibinin görselsiz testi, 8 Ekim 2026. Suçlunun adı, ona özgü bir eşya ya da itiraf tek ipucunda verilmez; her ipucunun bilgisi en az iki şüpheliye uyar ya da masum bir açıklaması vardır. Suçlu, en az iki ipucunun birleşmesiyle bulunur. K19 denetler: hiçbir doğru kanıt çifti tek ipucundan çıkmaz. Vaka formu onaya gitmeden kontrol listesinde işaretlenir.
*Kaynak:* 128, 202, 658

### KOD-70 K19 — Kim yaptı? yapısı
3 şüpheli; suçlu her yolda görünür; kanıt çiftleri olgu; ücret sırası; dört yüzleşme sahnesi; 4 karar; kapı/tohum/bedava ipucu yok; ipucu > hak; hak içinde en az 2 farklı doğru kanıt çifti; hiçbir doğru çift tek ipucundan çıkmaz (kural 21c); K19 artık `kesinti` açıklaması, karar `onizleme`si ve "kasa eksiye düşmez" denetimi **istemez** — üçü de 16 Kasım düzeniyle kalktı (kesinti, önizleme, kasa yok) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–21). Üretim denetiminde ayrıca: suçluyu kanıtlayan en az 2 ipucu yolu var (742).
*Kaynak:* 2444, 742, 743

## 179. SATIR-5 ↔ ARAYUZ-16 (0.29)

### SATIR-5 SR-G Konuk konuğa konuşursa ikisi de ekranda
Konuk başka bir konuğa konuşuyorsa satıra `{kime: <konuk>}` yazılır: konuşan sola geçer (aynalı), hitap edilen sağda kalır (C-3 ekran düzeni; 8 Kasım 2026, `yeni_arayuz.js`). O satırda Peri ekranda değildir. Peri ya da Cengo konuşunca, ya da soldaki konuk `kime`siz konuşunca sol Peri'ye döner. Karşılıklı sürerse yerler sabit (16 Kasım 2026, sahibinin kararı): aynı iki kişi bir önceki satırda da ekrandaysa kimse yer değiştirmez, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Örnek: Nadide ↔ Ferruh, Gizem ↔ Ferruh.
*Kaynak:* 6, 383, 401

### ARAYUZ-16 Figür yerleşimi
- Ekranda en çok iki figür.
- **Eski `kime` düzeni (V1–V5):** Peri solda, sağda **tek** konuk (Cengo ya da konuk — sahnede olan ve en son konuşan); üç kişilik sahnede sağdaki kişi değişir. Bu düzen yalnız V1–V5'e aittir.
- **`ekran` düzeni (V6'dan beri):** ARAYUZ-17 geçerli — Peri'siz iki konuk karşılıklı durabilir, Cengo konukla solda durabilir. (Sahibinin kararı, 17 Kasım 2026, çelişki sorusu 1.)
- Konuşan aydınlanır, dinleyen kararır.
- Sahnede tek kişi varken ortada durur; ikinci kişi gelince kaymadan, anında yanlara geçer (`yeni_arayuz.js/.css`, `.vn-figurler.tek`; `f8dfc4e`, 14 Kasım 2026).
*Kaynak:* 286, 304, 2410, 2779

## 180. KOD-91 ↔ ARAYUZ-11 (0.29)

### KOD-91 Defter ve Künye vaka başına
- (17 Ekim 2026) Zincir yalnız içinde bulunulan vakayı gösterir; Anı her biten vakanın anı özetini (diyalogda `## ani`, `kisiler.json → ani_ozet`; kural 21d: yalnız itirafın söylediği), kimi suçladığını, kararını ve Peri'nin notunu basar (kasa 16 Kasım 2026'da kalktı) (`yeni_arayuz.js → defterZincir, defterAni`).
- Künye (Kişiler) yalnız içinde bulunulan vakanın kişilerini gösterir (`yeni_arayuz.js → vnKisiGorunur`); portre `python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`.
- Deneme reklamı (`reklamGoster`, +1 hak ve kaçırılan ipuçları) ve test için vaka düğmeleri (`VN_VAKA_ATLA`, yayından önce `false`): `kaynak/YENI_OYUN_CERCEVE.md`.
*Kaynak:* 15

### ARAYUZ-11 Defter → Anı
Biten her vaka için bir kayıt, sırayla: **anı özeti** (2–3 cümle, kural 21d) → oyuncunun izi (kimi suçladı · sonucu, kararı) → Peri'nin karara göre notu. Anı, vakalar arası tek geriye bakış yeridir. Kod: `yeni_arayuz.js → defterAni`. Suçlama vaka bitince `_suclama_<vaka>` tohumunda kalır (`motor_yeni.js`). (Sahibinin isteği, 17 Ekim 2026.)
Kasa artık Anı'da basılmaz: kasa 16 Kasım 2026'da kalktı (kural 24).
*Kaynak:* 157, 300, 2577, 3007

## 181. KAR-22 ↔ RAF-51 (0.29)

### KAR-22 Her vakada yeni kıyafet
Peri ve Cengo her vakada yeni kıyafet giyer. İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17).
*Kaynak:* 193, 102

### RAF-51 Gardırop (kıyafet) ertelendi
Kıyafet ilk sezonda hiç yok; ikinci sezonda düşünülür (9 Kasım 2026; çerçevedeki gardırop kararı ertelendi, reklamlı işlemler artık kredi ile). Ertelenen tasarım (16 Ekim 2026, sahibinin kararı; Android aşamasında): oyuncu ödüllü reklamla Peri ve Cengo için ek kıyafet açar. Yalnız kozmetik — hiçbir seçeneği, ipucunu, parayı, bağı değiştirmez, "seçim satma" kuralına dokunmaz. Yalnız konuşma ekranındaki figürlerde görünür; ara kareler hikâyenin kendi kıyafetiyle kalır (her kareyi iki kez çizmek görsel sayısını katlar). Hikâyenin gerektirdiği kıyafet değişimi (Vaka 2: tayyör → kremalı → örtülü) bundan ayrıdır, her vakada serbest. Her gardırop kıyafeti = o kıyafette bütün ifadeler (~6–8 figür). Başlangıç havuzu: `sablon/peri_poz/` L kıyafetleri (kırmızı manto, gece elbisesi, trençkot…), Cengo'nun C seti. Web sayfasında reklam yok; iş Capacitor + reklam SDK'sıyla. Steam sürümünde reklam olmaz — orada gardırop ya bedava açılır ya da yoktur (karar sonra).
*Kaynak:* 1610, 2002, 3019

## 182. ARAYUZ-13 ↔ SHORTS-21 (0.29)

### ARAYUZ-13 Konuşma ekranı: arka plan
Arka plan her satırda değişebilir (aynı yerde yumuşak geçiş, başka yerde kararma).
*Kaynak:* 283

### SHORTS-21 `arka:`
Arka plan (`A…`) ya da kare (`K…`). Sonraki satırlara geçer. Değişince figürler sıfırlanır. Karenin üstüne figür çizilmez.
*Kaynak:* 826

## 183. SATIR-26 ↔ KOD-79 (0.29)

### SATIR-26 Diyaloğu satır satır yazmak (adım 3)
Diyalog yazılırken her satır için baştan yazılır: konuşan, ifade, `kime` (konuk varsa), dinleyenin yüzü değişiyorsa işareti, arka plan/açı, kare. Kontrol sorusu her satırda: "Ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu, metnin andığı nesne görünüyor mu?"
*Kaynak:* 2538

### KOD-79 Satır–görsel denetimleri
Hiçbir satırda ekranda aynı figür iki kez yok (Cengo hem solda hem sağda). Metinde anılan nesne ya da hareket o satırda görünür (satır → görsel tablosu).
*Kaynak:* 759, 761

## 184. DENETIM-38 ↔ CODEX-7 (0.28)

### DENETIM-38 Onay
Onaylanan resim `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>` taşınır. Buna bağlı resimlerin önü açılır, çünkü Codex yalnız `onayli/`'yi referans alır. Temel figürse baş kırpığı hazırlanır (`referanslar/<kim>_bas.png`).
*Kaynak:* 1138, 1325, 1517

### CODEX-7 Atlama koşulları
Codex şu resimleri atlar:
1. `onayli/G<n>` ya da `uretilen/G<n>` zaten varsa (yeni talimat `.png` arar; eski Vaka 3 talimatı her uzantıyı, `G<n>.*`).
2. Dosyada `## ENGELLENDİ` başlığı varsa (bunları sahibi web'de yapar — CODEX-10).
3. "Referanslar"daki bir `onayli/G<k>` dosyası yoksa (o resim henüz onaylanmadı).
*Kaynak:* 1252, 1253, 1254, 1531, 1532, 1533

## 185. ISTEM-34 ↔ RAF-60 (0.28)

### ISTEM-34 Pencereden İstanbul
Pencere görünen mekânda: "pencereden İstanbul: eski apartmanlar, uzakta minare / Boğaz" (G35, G39'da Lizbon, Paris çatıları çıktı).
*Kaynak:* 454

### RAF-60 İzin pencereleri
İzin pencereleri (AB yasal izni, iOS "izlenmeye izin ver") uygulamanın ilk açılışında değil, ilk reklam gerektiğinde (Vaka 2 → 3) çıkar; öncesinde kısa açıklama: "Reklamlar oyunun ücretsiz kalmasını sağlıyor."
*Kaynak:* 1623

## 186. KOD-21 ↔ RAF-79 (0.28)

### KOD-21 Tarayıcı iletişim kutusu kullanma
claude.ai artifact çerçevesi `confirm()`/`alert()`ı engeller (kutu çıkmaz, `confirm` "hayır" döner); eski sayfanın "Baştan başla"sı bu yüzden hiçbir şey yapmıyordu. Yeni oyunda `yenidenBasla` sayfa içi onay ekranıyla değiştirildi. Yeni onay/uyarı eklerken iletişim kutusu kullanma.
*Kaynak:* 2412

### RAF-79 Uygulama dışı iletişim
Uygulama dışında yalnız rafın web sayfasına bağlantı. E-posta listesi toplanmaz (veri yok kararı).
*Kaynak:* 1643

## 187. SEZON-25 ↔ SUREC-6 (0.28)

### SEZON-25 Barbaros'a anlatım biçimi
Barbaros'la konuşurken her şey **basit ve kısa** anlatılır; her seferinde söyletilmez (Barbaros'un isteği).
*Durum:* taslak (`sablon/TASLAK_tekrar_onleme.md`; Barbaros "yaz" demedi).
*Kaynak:* 935

### SUREC-6 Ortak bilgisayara kurulum yalnız Barbaros'la
Barbaros Oğuz Bey'in bilgisayarının başına geçip "resim üretim programlarını kurdurt" dediğinde `uretim/KURULUM_ORTAK.md` ona adım adım
uygulatılır. Kurulumu yalnız Barbaros yapar; Oğuz Bey'in oturumlarında bu konu açılmaz (Barbaros, 13 Kasım 2026).
*Kaynak:* 2805

## 188. TON-22 ↔ SINIR-2 (0.28)

### TON-22 Paravan'ın yasal durumu tekrarlanan espridir
Sahibinin kararı, 5 Ekim 2026. Paravan, kanunda var sayılmayan bir mesleği yapan sahte bir şirkettir. İlk kez açılışta Hilmi Bey söyler ("Yasak değil. Ama var da sayılmaz. Sizin şirket gibi."). Sezon boyu ara sıra geri döner: kimlik soran bir polis, kartvizit bastırmaya çalışan Peri, "meslek" hanesine ne yazacağını bilemeyen bir form.
*Kaynak:* 1820

### SINIR-2 Paravan'ın yasal durumu esprisinin sınırı
Türkiye'de özel dedektiflik kanunu yok; meslek ne yasak ne lisanslı. Bu, Paravan'ın tekrar eden esprisidir (sahibinin kararı, 5 Ekim 2026).
Espri yalnız Paravan'ın kendi tuhaf durumuyla ilgilidir: devlet, kurumlar, siyasi makamlar ve kişiler hakkında laf edilmez, kurum ve kişi
adı geçmez. Oyunda "kanunu yok, yürürlüğe girmemiş" kadarı söylenir, fazlası söylenmez.
*Kaynak:* 262, 1821

## 189. SATIR-9 ↔ KOD-79 (0.28)

### SATIR-9 SR-D Resim metne bağlı: nesne satırda başlar, satırda biter
Nesne ya da hareket metnin onu **getirdiği** satırda başlar, **bıraktığı** satırda biter; nesne bırakıldığı satırda hâlâ görünür (kapı K10; satır–resim aracı bunu İŞ sayar). Geçmiş zamanla anlatılan eylem ("çektim") şimdiki pozu haklı çıkarmaz. İfade figürü **nesnesiz** üretilir; nesneli/hareketli poz ayrı anahtardır ve yalnız o satırlara bağlanır. İstemde: yalnız `## Satırlar`'ın HEPSİNDE metinde geçen nesne poza girer; birinde yoksa nesnesiz ifade + ayrı nesneli anahtar; başlıkta ifade ile nesne birleşmez ("korkmuş (telefonu gösteriyor)" yazılmaz). Temel figüre de "rahat dursun" diye mendil, makas, bez verilmez; `## Satırlar`'da geçmiyorsa eller boş. Bir kare **tek bir anı** gösterir: "aynı anda" iki ardışık eylem yazılmaz (uzatıyor + bölüyor); sonraki anı gösteren kare önceki satırda kullanılmaz. Hatalı örnekler: `gizem.korkmus` telefonu metinden önce uzatıyor; Rüstem hesap makinesini "bırakıyor" ama hep elinde; K40 (kaçış) "herkes Ferruh'a dönüyor" satırında; bir karede iki simit.
*Kaynak:* 6, 380, 1079, 1221, 1224, 3555, 1076

### KOD-79 Satır–görsel denetimleri
Hiçbir satırda ekranda aynı figür iki kez yok (Cengo hem solda hem sağda). Metinde anılan nesne ya da hareket o satırda görünür (satır → görsel tablosu).
*Kaynak:* 759, 761

## 190. ISTEM-10 ↔ DENETIM-2 (0.28)

### ISTEM-10 Tarz örneği cümlesi (§3)
Temel ve yeni karakter isteminde, en sonda, yazı yasağından önce:
> Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA. Karikatür değil: doğal yüz oranları, abartısız ifade.

Tarz örneği dosyası referans listesinde SON sırada: `tarz_ornek_kadin.jpg` (eski Nadide) ya da `tarz_ornek_erkek.jpg` (eski Kenan); ikisi de dekoltesiz, boyalı. Yeni karakterin kendi temeli onaylanınca o karakterin varyantlarında gerekmez. (Vaka 3'te tarz yamasından sonra onaylı bir temel bu rolde, "YALNIZ bitmiş çizim tarzı örneği (kişi, kıyafet, poz alınmaz)" diye eklenince yeni karakterler serinin tarzına oturdu.) `istem_kontrol.sh` yeni karakter temelinde "Son referans YALNIZ" yoksa geçirmez.
*Kaynak:* 1194, 1195, 1418, 3576, 1170

### DENETIM-2 Tarz sonucunun üç hâli
- **KALDI** (tarz puanı < 0) → ret; `## Düzeltme`: tarz (boyalı, sıcak ışık, dokulu; kalın kontur/düz boya yok).
- **ŞÜPHELİ** (0–0,02) → onaylanmaz; aynı düzeltmeyle yeniden üretilir. İki kez ŞÜPHELİ kalırsa sahibine sorulur (görüntüyle).
- **GEÇTİ** → göz denetimi (A ve B). Kayda `G<n> tarz GEÇTİ (+0,0xx)` yazılır; bu satırı olmayan resim onaylı sayılmaz.
*Kaynak:* 1097, 1098, 1099

## 191. BILGI-1 ↔ DENETIM-34 (0.28)

### BILGI-1 Nurcan kuralı: hak edilmemiş bilgi hiçbir yerden sızmaz
Projenin çekirdeği; korunacak sözleşmelerden biridir. Oyuncu henüz hak etmediği bir bilgiyi hiçbir yerden almaz: metin, görsel, defter, ipucu adı, Cengo'nun esprisi.
- Şakaya da uyar: Cengo'nun esprisi, oyuncunun henüz hak etmediği bir ipucunu "yanlışlıkla" söyleyemez. Komik yan karakterlerin en kolay düştüğü tuzak budur.
- Metin tarafını doğrulayıcı K1/K10/K11 ve `test_sizinti.js` kollar; görsel tarafı `kaynak/gorsel_stil_sozlesmesi.md` §7. Künye portresi de katmanlıdır (`kisiler.json` → `portre_katman`).
*Kaynak:* 31, 199, 1799, 2045

### DENETIM-34 Nurcan: hak edilmemiş bilgi
Resim hak edilmemiş bir bilgi gösteriyor mu? Gösteriyorsa onaylanmaz.
*Kaynak:* 468, 3048

## 192. BILGI-23 ↔ DENETIM-32 (0.28)

### BILGI-23 Bir sızıntı bulunca kardeşlerini ara
Aynı kök, farklı yüzey: V4'teki altı sızıntının hepsi tek bir sebeptendi — vaka "bunu kim biliyordu?" sorusunu cevaplıyordu, oysa o soru V5'in. Bir bulgu bulduğunda kardeşlerini ara.
*Kaynak:* 3204

### DENETIM-32 Kardeş resimlerle ayrışma
Aynı kişinin onaylı ifadeleriyle yan yana bakılır; yüz ve poz onlardan açıkça ayrılıyor mu (SR-J).
*Kaynak:* 1130

## 193. KOD-41 ↔ ARAYUZ-16 (0.28)

### KOD-41 Sahne ve satır biçimi
Sahne: vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda `sahne`, açılışta `acilis.json → sahneler[]`; biçim `{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }`.
Satır: `{ k: "peri", i: "kas", m: "Ne oldu?" }` (konuşan, ifade — verilmezse önceki kalır —, metin); `{ k: "not", m: … }` anlatı, ifade almaz; `{ k: "ses", m: … }` figürü olmayan konuşan, ifade almaz.
Satırda isteğe bağlı sahne değişiklikleri:
- `arka: "A5b"` arka plan değişir (aynı yer+saat çapraz geçiş, değilse karartma).
- `kare: "K8"` tam ekran ara kare / detay; figürler çekilir.
- `set: "balikli"` Peri'nin kıyafet seti değişir (sonraki ifadeler o setten).
- `gir: "serkan"` / `cik: true` konuk girer/çıkar; `gi` girenin ilk ifadesi; `gizle: "cengo"` figürü ekrandan çeker (konuşunca döner).
- `kime: "peri"`: konuk varken Cengo Peri'ye konuşuyorsa sağa geçer; yoksa Cengo konuk varken SOLA geçer (aynalı), konuk sağda kalır. Konuk satırında `kime: peri|cengo` solda kimin duracağını seçer. Anlatı satırında da `kime: peri|cengo|<konuk>` solda kimin duracağını seçer (konuk: sağdakinin karşısında, aynalı; 14 Kasım 2026).
- `peri: "tac"` konuşan başkayken Peri'nin (dinleyen) ifadesi; K15 set kuralıyla denetler.
- `mekan: true` mekân karesi: figürler çekilir, arka plan çıplak (yeri tanıtan anlatı satırı).
- `bag: "yuksek"` / `"dusuk"` satır yalnız o bağ hâlinde oynar (kapanış; eşik +1, `motor_yeni.js` → `BAG_ESIK`).
*Kaynak:* 2418, 2419, 2421, 2424, 2425, 2426, 2427, 2428, 2430, 2431, 2432

### ARAYUZ-16 Figür yerleşimi
- Ekranda en çok iki figür.
- **Eski `kime` düzeni (V1–V5):** Peri solda, sağda **tek** konuk (Cengo ya da konuk — sahnede olan ve en son konuşan); üç kişilik sahnede sağdaki kişi değişir. Bu düzen yalnız V1–V5'e aittir.
- **`ekran` düzeni (V6'dan beri):** ARAYUZ-17 geçerli — Peri'siz iki konuk karşılıklı durabilir, Cengo konukla solda durabilir. (Sahibinin kararı, 17 Kasım 2026, çelişki sorusu 1.)
- Konuşan aydınlanır, dinleyen kararır.
- Sahnede tek kişi varken ortada durur; ikinci kişi gelince kaymadan, anında yanlara geçer (`yeni_arayuz.js/.css`, `.vn-figurler.tek`; `f8dfc4e`, 14 Kasım 2026).
*Kaynak:* 286, 304, 2410, 2779

## 194. SEZON-23 ↔ RAF-51 (0.28)

### SEZON-23 Vaka içinde kıyafet değişimi serbest
Hikâye gerektirirse kıyafet vaka içinde değişebilir (Vaka 2'deki gibi; 16 Ekim 2026). Her yeni kıyafet = bir ifade seti (Vaka 3 notunda ~6–8 figür).
*Kaynak:* 2579, 3020

### RAF-51 Gardırop (kıyafet) ertelendi
Kıyafet ilk sezonda hiç yok; ikinci sezonda düşünülür (9 Kasım 2026; çerçevedeki gardırop kararı ertelendi, reklamlı işlemler artık kredi ile). Ertelenen tasarım (16 Ekim 2026, sahibinin kararı; Android aşamasında): oyuncu ödüllü reklamla Peri ve Cengo için ek kıyafet açar. Yalnız kozmetik — hiçbir seçeneği, ipucunu, parayı, bağı değiştirmez, "seçim satma" kuralına dokunmaz. Yalnız konuşma ekranındaki figürlerde görünür; ara kareler hikâyenin kendi kıyafetiyle kalır (her kareyi iki kez çizmek görsel sayısını katlar). Hikâyenin gerektirdiği kıyafet değişimi (Vaka 2: tayyör → kremalı → örtülü) bundan ayrıdır, her vakada serbest. Her gardırop kıyafeti = o kıyafette bütün ifadeler (~6–8 figür). Başlangıç havuzu: `sablon/peri_poz/` L kıyafetleri (kırmızı manto, gece elbisesi, trençkot…), Cengo'nun C seti. Web sayfasında reklam yok; iş Capacitor + reklam SDK'sıyla. Steam sürümünde reklam olmaz — orada gardırop ya bedava açılır ya da yoktur (karar sonra).
*Kaynak:* 1610, 2002, 3019

## 195. SINIR-5 ↔ ISTEM-21 (0.28)

### SINIR-5 Dekolte felaket sahnesinde de bozulmaz
Peri'nin felaketinde (kirlenen sahnede) de dekolte temel setteki ayarda görünür.
*Kaynak:* 1867

### ISTEM-21 Peri'nin çekicilik satırı ve dekoltesi
- Peri'nin her isteminde ("dünkü ayarlar", sahibi 6 Kasım): "Çekicilik: en üst seviyede zarif ve seksi; belin inceliği ve bacakların hattı belirgin. Çıplaklık yok." Felaket/komedi hâlinde: "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok." Felaket ve komedi karesinde de "seksi" yazılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 9).
- Peri'nin dekoltesi asla azaltılmaz (sahibinin duran kuralı, 7 Ekim); tek istisna kıyafet kartı (ISTEM-17, sahibi 8 Kasım). Peri ve Gizem dekolteli (6–7 Kasım).
- Peri'nin olduğu sahnelerde: "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde…; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor." Bu satır filtreye takılmadı.
*Kaynak:* 1211, 438, 3119, 2967, 1428

## 196. BILGI-7 ↔ KOD-76 (0.28)

### BILGI-7 Anı özeti yalnız herkesin duyduğunu yazar (kural 21d)
Sahibinin isteği, 17 Ekim 2026. Anı defterinde her biten vakanın üstünde (Peri'nin notunun üstünde) 2–3 cümlelik hatırlatma durur: müşteri ve kayıp, kim almıştı, neden. Bütün kararlarda aynıdır. Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği girer; bir ipucunda kalmış ayrıntı ya da karara göre değişen hiçbir şey (sonuç dahil) girmez. Diyalogda `## ani` bölümüne yazılır. Kimi suçladığın ve kararın oyunun kendi kaydından yazılır (kasa yok, kural 24). Vaka formu onaya gitmeden "Anı özeti yazıldı; yalnız itirafın söylediğini içeriyor" kontrolü işaretlenir.
*Kaynak:* 203, 634, 669

### KOD-76 Anı özeti zorunlu
Diyalogda `## ani` yoksa `arac_diyalog.js` yazmaz, `test_yeni_arayuz.js` eksiği yakalar. İçerik (yalnız itirafın söylediği, kural 21d) bulanık replik taramasında okunur.
*Kaynak:* 753

## 197. SATIR-17 ↔ DENETIM-32 (0.28)

### SATIR-17 SR-J Her ifade kardeşlerinden ayırt edilir
İstemde ifadeyi ötekilerden neyin ayırdığı yazılır: yeni ifadede "Bu ifadeyi <kardeş ifade>'den ayıran: …" satırı (yüz rengi, ağız, eller). Denetimde aynı kişinin ifadeleri yan yana konur, benzeyen kabul edilmez. Hatalı örnek: `ferruh.terli` ≈ `ferruh.alingan` → "yüzü bembeyaz" karşılıksız.
*Kaynak:* 6, 386, 1223, 715, 1076

### DENETIM-32 Kardeş resimlerle ayrışma
Aynı kişinin onaylı ifadeleriyle yan yana bakılır; yüz ve poz onlardan açıkça ayrılıyor mu (SR-J).
*Kaynak:* 1130

## 198. SATIR-21 ↔ DENETIM-44 (0.28)

### SATIR-21 Yeni gelen: `{mekan}`, `{gir, gi}` ve yalnız gelen ekranda
Yer tanıtılırken konuk henüz görünmemeliyse anlatı satırında `{mekan}`; konuk ilk konuştuğu satırda `{gir: x, gi: ifade}` ile ilk yüzüyle girer (anlatı satırında "öfkeli giriyor" gibi). Böylece kızgın konuk sahneye "zaten kızgın" girmez (Vaka 1 dersi). Kapı K7 (Vaka 6 ve sonrası): yeni geleni anlatan satırda ekranda yalnız o (ve satırın andığı kişi) olur.
*Kaynak:* 402, 405, 2524, 3552 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### DENETIM-44 Web'den gelen resim reddedilirse
Web'den gelen (Codex'in üretemediği) resmi reddedersen sahibine söyle: web'de yeniden yapacak.
*Kaynak:* 1337, 1520

## 199. GOMME-13 ↔ ARAYUZ-26 (0.28)

### GOMME-13 Boy — resim değil, tablo belirler
- Resimde herkes aynı yükseklikte çizilir; ekrandaki boyu tablo belirler (`gorseller.json → boy`).
- Yeni karakter tabloya önce eklenir, sonra istemi yazılır.
- Yerel Claude temel figürü onaylamadan önce `arac_yanyana.js --oran` ile boyu ölçüp ayarlar. Yeni konuk eklenince ekranda Peri'nin yanında bakılır (sahibine göstermeden önce); araç boysuz konuğu söyler.
- Telefonda bakmak yeter (16 Ekim 2026'dan beri her ekranda telefondaki oran geçerli); `--cihaz` boy sapmasını yine sınar.
- Tablo (Peri'ye göre): Peri 1,00; Cengo 1,00; Nadide 0,98; Ferruh 0,98; Kenan 1,02; Gizem 0,93; Sedat 0,92; Ayla 1,00; Rüstem 0,95; Müzeyyen (V6) 1,00; Jale (V6) 1,00; Haldun (V6) 1,02; Eylül (V6) 0,94; Recep (V6) 0,94; Dilek (V6) 0,92; Tahsin (V6) 1,00.
- Kadın yan karakterler için eski aralık (0.76–0.82, çok kısa/tombul 0.72) **kalktı**; boyu yalnız bu tablo belirler (17 Kasım 2026, çelişki sorusu 7).
*Kaynak:* 487, 504, 505, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 524, 2532, 3036, 3052

### ARAYUZ-26 Figür boyu sabit
Her konuğun boyu bir kez ayarlanır.
*Kaynak:* 306

## 200. SUREC-27 ↔ KOD-3 (0.27)

### SUREC-27 Sızıntı taraması
22 Ekim 2026, sahibinin kararı — her vakadan sonra (adım 5'te ve adım 14'ün ön koşulu olarak): `cd kaynak && node build_html.js yeni &&
node arac_sizinti_tur.js VN [tur]` (ör. `V6 40`). İki parça: (1) araç oyunu farklı yollardan oynar, her ekranda oyuncunun o an bilmediği
olgunun metni / kısa adı çıkıyor mu bakar — bulursa çıkış 1 (= sızıntı); (2) `kaynak/YENI_UI/sizinti_okuma.txt` ELLE okunur (Nurcan):
"Dosya çözüldü", `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız her yolda oynayan sahnelerin (yüzleşmeler + kovalamaca
itirafı) söylediğini mi anıyor? Bir ipucunun bilgisi geçiyorsa sızıntıdır (22 Ekim'de 9 tane böyle bulundu: "kodu, fişi", "Gizem'in
fotoğrafı", "örtüyü"…). Bulgu sahibine kısa liste olarak verilir; düzeltme tek tek, önce/sonra gösterilerek yapılır (SUREC-1).
*Kaynak:* 694, 2783

### KOD-3 Her commit'ten (ve her değişiklikten) önce
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # test_bozuk.js hariç hepsi geçmeli
```
Yeni oyunda her değişiklikten sonra: `node dogrulayici.js yeni`, `node build_html.js yeni`, `node build_html.js`, testler. Sahneyi etkileyen
değişiklikte ayrıca tur (`node arac_yeni_tur.js 0 vapur dogru` gibi, yollar KOD-27'de) ve sızıntı taraması (`node arac_sizinti_tur.js V5 40`).
*Kaynak:* 10, 11, 2326, 2350, 2886

## 201. DENETIM-34 ↔ KOD-74 (0.27)

### DENETIM-34 Nurcan: hak edilmemiş bilgi
Resim hak edilmemiş bir bilgi gösteriyor mu? Gösteriyorsa onaylanmaz.
*Kaynak:* 468, 3048

### KOD-74 Defter ve sızıntı denetimi
Defter cümleleri suçluyu söylemez. Hak edilmemiş bilgi sızmaz (isim, olgu, görsel).
*Kaynak:* 745, 746

## 202. ISTEM-41 ↔ SHORTS-18 (0.27)

### ISTEM-41 Işık ve saat
Loş sahne fazla aydınlık çıkmasın diye hangi lambanın yanık, hangisinin sönük olduğu tek tek ve saat (sabah, akşam) açıkça yazılır.
*Kaynak:* 1162, 1431

### SHORTS-18 Işık
Konuşan aydınlık, dinleyen loş görünür. Anlatıcı konuşurken figürlerin hepsi aynı ışıktadır.
*Kaynak:* 823

## 203. KAR-29 ↔ SINIR-7 (0.27)

### KAR-29 Cengo'nun kızı: Eylül
Cengo'nun sırrı (V6, sahibinin kararı 4 Ekim 2026, seçenek b — uzaktaki kızı). Adı **Eylül** *(ortağın kararı, 12 Kasım 2026)*. **16 yaşında** (ilk taslakta 17'ydi; ortak 12 Kasım 2026'da düzeltti — Cengo baba olduğunda reşit olsun; sezon belgesinde 13 Kasım 2026 tarihiyle 17 → 16). Annesiyle uzakta, şehrin öbür yakasında, Üsküdar'da yaşıyor; Cengo, annesiyle anlaşarak, uzaktan bakıyor. Kızı babasını büyük bir dedektif sanıyor ve (V6'da) yardım istemeye geliyor. Vaka 6'ya kadar açıklanmaz. Reşit değil: her zaman masum çizilir. Peri'yi kıskanır; Gizem'le çok iyi anlaşır, ona "abla" der, mesajlaşırlar *(Vaka 6, 12 Kasım 2026)*.
*Kaynak:* 242, 1968

### SINIR-7 Reşit olmayan hiç kimse bu çerçeveye girmez
Reşit olmayan hiç kimse — Cengo'nun kızı dahil — çekicilik çerçevesine hiçbir zaman girmez. Cengo'nun kızı reşit değildir; görselde ve metinde
çocuk/ergen olarak, tamamen masum çizilir; hiçbir romantik ya da cinsel çerçeveye girmez. V3 yan karakterine (pastanenin yetişkin, yirmili
yaşlarının ortasındaki genç kadın çalışanı; no 1970, KAR konusunda) verilen "zaman zaman dekolte olabilir" izni yalnız onun içindir; Cengo'nun
kızına uzanmaz.
*Kaynak:* 194, 1862, 1973

## 204. YAPI-44 ↔ KOD-77 (0.27)

### YAPI-44 Tohum yok
Bir vakadaki karar başka bir vakanın metnini, kişilerini ya da olaylarını değiştirmez. Vaka 1'in tohumları silindi; doğrulayıcı K19 tohumu hata sayar.
*Kaynak:* 163, 219

### KOD-77 Kasa yok, tohum yok, tutarlar tabloda
Kasa yok; para yalnız hikâyede, her kararın parası kendi sahnesinde biter (kural 24). Tohum yok. Metindeki her tutar fiyat tablosunda.
*Kaynak:* 754, 756

## 205. SUREC-14 ↔ KOD-32 (0.27)

### SUREC-14 Adım 5: Görselsiz oyun turu ve üç tarama
Yeni görsellerin yerinde yer tutucu (eski görsel ya da yazılı gri kutu); bütün yollar otomatik oynanır. Ardından **bulanık replik
taraması**, **sızıntı taraması** ve **erken satır–resim taraması** (SR-M8). Ölçüt: hata yok, üç tarama bitti, düzeltmeler veride.
*Kaynak:* 680

### KOD-32 Her vakadan sonra sızıntı taraması
Sahibinin kararı: `cd kaynak && node arac_sizinti_tur.js [VN] [tur]` (ör. `V5 40`) — farklı yollardan oynar, her ekranda bilinmeyen olgu arar (çıkış 1 = sızıntı) ve `YENI_UI/sizinti_okuma.txt`'yi elle okunmak üzere yazar. Şablon 7. parça adım 5 ve 14. Test değil, araç.
*Kaynak:* 15, 2886

## 206. SATIR-35 ↔ DENETIM-30 (0.27)

### SATIR-35 Yalnız satırların istediği ifade ve poz üretilir
Kıyafet başına sayı (sahibinin kararı, 8 Kasım 2026 — 8 Ekim kararının yerine): yalnız satırların istediği ifade ve poz üretilir. Bir ifadenin vakada hiçbir satırı yoksa (`arac_satir_resim.js` → "Resim → satırlar" listesinde boşsa) üretilmez. Eski "Peri'nin her kıyafetinde yedi ifadenin hepsi" kuralı kalktı (Vaka 3'te altı resim hiçbir satırda kullanılmadan üretildi; biri filtreye takılıp sahibine web'de iş çıkardı).
- **Peri:** tavan yok; satırların istediği her ifade + vakanın gerektirdiği her nesneli ve hareketli poz. Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir (o da satırlardan çıkar).
- **Cengo:** satırların istediği ifadeler (genelde normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası. Her vakada sabit "4 ifade" üretilmez; vaka formundaki "Cengo: 4 ifade" satırı buna göre düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 28).
- **Konuk:** en az 1 ifade; "gerekirse 2–3" yalnız tahmindir, üst sınır değil — satırlar daha çok isterse üretilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 29).
- Konuklar, arka planlar, ara kareler, detaylar görsel listesinde ayrıca yer alır.
*Kaynak:* 371, 372, 373, 645, 370, 646

### DENETIM-30 Satırlarla uyum
Resim metindeki satırla uyuşmalı: istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra — yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu; elde nesne yalnız metnin getirdiği satırlarda mı (SR-D); bakış satırın söylediği yere mi (SR-I).
*Kaynak:* 469, 1128

## 207. BILGI-12 ↔ KOD-73 (0.27)

### BILGI-12 Kim yaptı? ekranında yalnız şüphelenmek için sebebi olan kişiler
Ekranda yalnız oyuncunun şüphelenmek için sebebi olan kişiler (biri onu suçladı, ipucunda karşılaştı ya da onu işaret eden bir olguyu biliyor; adının geçmesi yetmez) ve elindeki olgular görünür. Suçlu, hakkını bitiren her oyuncunun ekranında görünür; erken suçlayan göremeyebilir. (Sahibinin görselsiz testi, 9 Ekim 2026.)
*Kaynak:* 136

### KOD-73 Şüpheli ve Kim yaptı? yolları
3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var. Her ipucu yolunda "Kim yaptı?" ekranı çalışır (tam, zayıf ya da yanlış sonuç).
*Kaynak:* 741, 744

## 208. YAPI-34 ↔ SATIR-25 (0.27)

### YAPI-34 Her vakanın fiyat tablosu
Kural 27c. Her vaka kendi fiyat (referans) tablosunu taşır (ilki `YENI_VAKA_1.md`'de; formda §17). Metinde geçen her tutar, dayanağıyla birlikte tabloda yazılıdır; tabloda olmayan tutar metne giremez (denetimde ve form kontrolünde aranır: "Her tutar fiyat tablosunda"). Eski "ay sonu gideri (Ekim 2026: 35.000 ₺)" tablodan kalktı — oyun para saymaz (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 36).
*Kaynak:* 217, 652, 664, 1815

### SATIR-25 Satır → görsel tablosu
Her sahne için bir **satır → görsel** tablosu yazılır ve denetlenir; metnin andığı her nesne için tabloda figür ya da kare bulunur. Tablo diyalogla birlikte biter.
*Kaynak:* 410, 2528, 2538

## 209. ISTEM-14 ↔ DENETIM-38 (0.27)

### ISTEM-14 Varyant (aynı karakter, başka ifade)
- Kıyafet başına tek temel görsel: önce nötr görsel üretilir; diğer ifadeler hep onun düzenlemesidir. Yüz, ölçek ve kıyafet sabit kalır. Ölçek kayarsa: temel görsel 1. referans.
- Referanslar: 1. `onayli/G<temel>.png`; temel dekoltesizse **bütün resim** verilir; onaylı temel dekolteliyse bütün hâliyle verilmez, onun baş kırpığı + kapalı gövde verilir (baş kırpığını temel onaylanınca yerel Claude hazırlar, `referanslar/`). Baş kırpığı yalnız dekolteli temelde kullanılır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 14). Gerekirse 2. poz (`poz_cengo_*` ya da `poz_*.jpg`, "YALNIZ poz").
- Tarz paragrafı YOK, tarz örneği cümlesi YOK.
- İstem: "Birinci referans görseldeki X'in AYNISI: aynı yüz, saç, kıyafet ve takılar; aynı çizim tarzı, aynı düz <renk> arka plan, aynı ölçek ve kadraj. Değişen tek şey poz ve ifade." → poz → bakış → ifade → kadraj + zemin → çıplaklık → yazı yasağı → oran.
*Kaynak:* 411, 1197, 1419, 1420, 1064, 433, 450

### DENETIM-38 Onay
Onaylanan resim `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>` taşınır. Buna bağlı resimlerin önü açılır, çünkü Codex yalnız `onayli/`'yi referans alır. Temel figürse baş kırpığı hazırlanır (`referanslar/<kim>_bas.png`).
*Kaynak:* 1138, 1325, 1517

## 210. YAPI-27 ↔ SATIR-18 (0.27)

### YAPI-27 Karar tablosu (formda)
Formda her karar için bir satır: karar | Peri'nin seçenek cümlesi (kısa, ne yapacağını söyler) | sonuç sahnesi: eylem → sonuç → bedel (anlatı satırları) | para sahnede (kim kime ne verdi/kesti; yoksa —) | bağ | Cengo satırı (büroda, kendi ağzından) | anı defteri | ara kare.
*Kaynak:* 629

### SATIR-18 SR-K Karar karesi SONUÇ'u gösterir
Karar karesi SONUÇ metninin asıl anını gösterir (bedeli yaşayan kişiler karede). Karar karesi SONUÇ'un anlatı satırlarının altında durur (kural 22b). Cengo'nun karar satırı ve söylenmeyen kanıt satırı (22c) Cengo ekrandayken söylenir; kararı soran kişi de seçim anında ekrandadır (SR-A). Hatalı örnek: K47 Cengo satırını (Kenan'ın simidi) gösteriyordu; SONUÇ'taki Ferruh ve telefon yoktu.
*Kaynak:* 6, 387, 1224, 1076

## 211. BILGI-3 ↔ SHORTS-10 (0.27)

### BILGI-3 Girişte yasak olanlar
Her vakanın girişinde: suçlu ele verilmez; bir ipucunun vereceği bilgi önceden söylenmez.
*Kaynak:* 104, 105, 106

### SHORTS-10 Videoda yasak olanlar
- suçlunun kim olduğu ya da ona işaret eden herhangi bir şey: fazla yer, fazla kuşkulu bir yüz, "biri yalan söylüyor" deyip tek kişiye bakmak;
- ipucunun içeriği: kanıt nesnesi, saat, şifre, fotoğraf, borç;
- yüzleşme, kovalamaca, itiraf, kapanış, karar sahneleri ve onların resimleri;
- kararların adları ve sonuçları;
- çözüm, anı, hikâye, kanıt adı metinleri;
- oyunda henüz olmayan bir gerçek (kanona ekleme). Gerekirse önce sahibine sorulur.
*Kaynak:* 796, 797, 798, 799, 800, 801

## 212. SINIR-2 ↔ RAF-100 (0.27)

### SINIR-2 Paravan'ın yasal durumu esprisinin sınırı
Türkiye'de özel dedektiflik kanunu yok; meslek ne yasak ne lisanslı. Bu, Paravan'ın tekrar eden esprisidir (sahibinin kararı, 5 Ekim 2026).
Espri yalnız Paravan'ın kendi tuhaf durumuyla ilgilidir: devlet, kurumlar, siyasi makamlar ve kişiler hakkında laf edilmez, kurum ve kişi
adı geçmez. Oyunda "kanunu yok, yürürlüğe girmemiş" kadarı söylenir, fazlası söylenmez.
*Kaynak:* 262, 1821

### RAF-100 Vaka 1'deki ad esprisi İngilizcede yeniden yazılır
Vaka 1'deki "Kâğıtta var. Paravan Dedektiflik…" sahnesi İngilizcede yeni adın esprisine göre yeniden yazılır.
*Kaynak:* 1687

## 213. YAPI-31 ↔ KOD-77 (0.27)

### YAPI-31 Para yalnız hikâyededir (kasa yok)
Kural 24; sahibinin kararı, 16 Kasım 2026 (sebep: kasa yalnız birikiyordu, hiçbir şeye bağlanmıyordu; karar ekranı tablo karşılaştırmasına dönmüştü).
- Ekranda kasa, ücret, karar parası, kasa göstergesi, hesap kutusu, "Kasaya …", Anı'daki "Kasaya" satırı yok; oyunun saydığı bir para yok.
- Para sahnede yaşar: kim kime ne veriyor, kim neyi kesiyor, kim borç topluyor. **Her kararın parası kendi sahnesinde görünür ve orada biter** (V6: Haldun ücreti öder — "Bir hafta bekledim, şimdi bir yıl bekleyeceğim"; Müzeyyen zarfı uzatır).
- Para vakalar arasında taşınmaz (YAPI-43). Para hiçbir yolu kapatmaz.
- Uygulama: `motor_yeni.js` kararVer kasayı değiştirmez; ücret/karar parası veride hikâye rakamı olarak durur (`test_yeni_kimyapti.js`: "karar kasayı değiştirmiyor").
*Kaynak:* 212, 2773

### KOD-77 Kasa yok, tohum yok, tutarlar tabloda
Kasa yok; para yalnız hikâyede, her kararın parası kendi sahnesinde biter (kural 24). Tohum yok. Metindeki her tutar fiyat tablosunda.
*Kaynak:* 754, 756

## 214. SEZON-23 ↔ SATIR-8 (0.27)

### SEZON-23 Vaka içinde kıyafet değişimi serbest
Hikâye gerektirirse kıyafet vaka içinde değişebilir (Vaka 2'deki gibi; 16 Ekim 2026). Her yeni kıyafet = bir ifade seti (Vaka 3 notunda ~6–8 figür).
*Kaynak:* 2579, 3020

### SATIR-8 SR-C Kıyafet kartı (satır tarafı)
Her kıyafet önce tek bir ölçü resmiyle (kıyafet kartı) onaylanır; kıyafet istemde sözle yeniden tarif edilmez, kart referans verilir. İstemde: "Kıyafet: N. referanstaki kıyafet kartıyla birebir aynı (boy, kesim, renk)" + o satırların hâli ("trençkot AÇIK, kemer çözük"). (Kartın ayrıntısı ISTEM konusunda, 5. parça I.)
*Kaynak:* 6, 1220, 1076, 715

## 215. ARAYUZ-33 ↔ RAF-110 (0.27)

### ARAYUZ-33 Sezon sonu tablosu: yer ve paylaşım
- **Yer:** sezonun kapanış sahnesinden hemen sonra, ardından "rafta başka kitaplar" kartı. Defter'den yeniden açılır.
- **Paylaşım:** "Sezon 1 bitti" kartı — yalnız sezon afişi + "Sen olsan ne yapardın?". Suçlu/karar/kasa karta girmez; tablonun kendisi paylaşılmaz.
(9 Kasım 2026.)
*Kaynak:* 1708, 1709

### RAF-110 Rozetler ve sezon sonu tablosu kitabın kararı
Komik rozetler ve sezon sonu tablosu (karşılaştırmasız hâli, `final_tablo_plani.md`) sunucu istemez; bunlar her kitabın kendi kararıdır, raf karışmaz. Paravan için kararlar RAF_KARARLARI §12b'de.
*Kaynak:* 1697

## 216. GOMME-21 ↔ KOD-92 (0.27)

### GOMME-21 Kart afişi: genel
Her vakanın bir afişi var (17 Ekim 2026): oyuncu vakayı bitirince "Arkadaşına öner" kartının arka planı olur (`gorseller.json → kart`, anahtar `KART_V<n>`; 9:16). Okuyan kişi vakayı OYNAMADI — afiş Nurcan yüzeyidir. İstemler ve iş sayfası `sablon/kart_sayfa/uret.py`: yeni vaka = yeni `G.append`, sonra `python3 uret.py` ve aynı Artifact'e yeniden yayın. Vaka 1 ve 2'nin istemleri örnek; Vaka 2 afişi balo salonunda.
*Kaynak:* 490, 1146, 3001

### KOD-92 Paylaş (davet kartı) — yalnız yeni oyun
(17 Ekim 2026) Biten vaka "Arkadaşına öner" düğmesiyle paylaşılır (kapanıştan sonraki ekran — kaçan ipucu yoksa "Dosya kapandı" — ve Defter → Anı). Kart 1080×1920 tarayıcıda çizilir (`yeni_arayuz.js → paylasKartCiz`): vakanın afişi (`gorseller.json → kart`; yoksa `kapak` arka planı) ve altta KÜÇÜK bir kutu — vaka no/adı, "Sen olsan ne yapardın?" — ile bağlantı. Sahibinin kuralı: önce resim, yazı az; girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`). Suçlu, karar, suçlama, kasa, not karta GİRMEZ (Nurcan — arkadaş oynamadı; ve oyun not vermez). `navigator.share` varsa görselle paylaşır, yoksa indir + bağlantıyı kopyala. Afiş promptları ve iş sayfası `sablon/kart_sayfa/uret.py`; yeni vakanın afişi için kurallar `sablon/5_gorsel_sistemi.md` → G. Bağlantı önizlemesi (`og:` etiketleri) `build_html.js yeni`'de; görseli `yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`. Anı karşılaştırması ve davet kodu Android aşamasında.
*Kaynak:* 15

## 217. ISTEM-15 ↔ CODEX-8 (0.27)

### ISTEM-15 Referans verme biçimi
- Her prompt referans dosyalarıyla birlikte gönderilir (`referans/G<n>-<sıra>_ad.png`); referanslar numaralı, aynı mesajda (Vaka 1'de referanslar sonradan istendi; sahibinin duran kuralı).
- Referanslar sırayla ve tam yolla verilir; sıra önemli, çünkü istem "birinci referans, ikinci referans…" diye konuşur.
- En çok 5 referans (ChatGPT sınırı; 16 Ekim 2026, Vaka 2 K33'te görüldü). `istem_kontrol.sh` 5'ten fazlasını geçirmez.
- Daha çok kişi gerekiyorsa o kişileri bir arada gösteren önceki bir kare tek referans olarak verilir (K34 → K33 çıktısı), ya da şerit: birden çok karakterin temeli tek resimde. Şerit, kaynak temeller yeniden onaylanınca yenilenir: hepsi 900 px yüksekliğe, soldan sağa, aralarında 24 px zemin rengi: `magick G6.png G7.png G8.png G9.png -resize x900 -background "<zemin>" -splice 24x0 +append serit.jpg` (ilk sütundaki fazla boşluğu kırp). Şeritte dekolte olmamalı.
*Kaynak:* 2536, 3119, 1347, 412, 3563, 1149

### CODEX-8 Üretim: istem aynen, referanslar sırayla
Referanslar listesindeki dosyaların HEPSİ listedeki SIRAYLA görüntü aracına verilir ("birinci referans" = listedeki 1.). İstem = `## İstem`
bölümündeki metin (eski talimatta: kod bloğu) AYNEN; `## Düzeltme` bölümleri varsa hepsi sırayla istemin SONUNA eklenir. Kısaltma, yumuşatma,
çeviri, kendi ekleme yok. Boyut: istemin "oran" satırındaki dikey orana en yakın boyut (eski Vaka 3 talimatı).
*Kaynak:* 1255, 1534

## 218. SUREC-23 ↔ CODEX-4 (0.26)

### SUREC-23 Gizem referans seti
Vaka 3'te Gizem'in referans seti yok (17 Ekim): önce temel figür tek başına, onaydan sonra ifadeler. Vaka 3 bitince sahibiyle karar
verilir: küçük set (8–10) ya da tam set (25, Peri/Cengo gibi). Vaka süresine girmez.
*Kaynak:* 2567

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

## 219. ARAYUZ-28 ↔ RAF-35 (0.26)

### ARAYUZ-28 Telefonda yazı kutusu 4 satır
Telefon dikey ekranda yazı kutusu 4 satır; uzun replik bölünür.
*Kaynak:* 310

### RAF-35 Resimde yazı yok, yazı tipleri
Resimlerde yazı olmaması kuralı çok dilli yapıda daha da önemlidir. Yazı tipleri ileride gelecek alfabeler düşünülerek seçilir.
*Kaynak:* 1584

## 220. SEZON-21 ↔ DENETIM-49 (0.26)

### SEZON-21 Yeni mekân eski vakaların resimlerine benzemez
Yeni mekân ve manzara eski vakaların resimlerine benzemez (sahibi, 6 Kasım 2026: "önceki vakalardaki resimlerle benzer olmamalı üreteceğimiz mekânlar
ve manzaralar. Sadece aynı yerleri anlatıyorsak benzer olsun, o da farklı bir açıdan olmalı"). Aynı yer (büro, han koridoru, iskele) dönüyorsa yer
tanınır ama kamera eski resimlerinkinden FARKLI açıda durur; istemde hangi eski resme (`arka_aN`) göre neyin değiştiği yazılır. İstemden önce eski
mekânların temas sayfası açılır (`magick montage kaynak/yeni_gorsel/arka_*.webp …`); aynı kurguda eski mekân varsa başka açı seçilir. Denetimde yeni
mekân bu sayfayla yan yana konur; benzeyen reddedilir.
*Kaynak:* 1205, 1206

### DENETIM-49 Yeni karakter eski bütün figürlerle karşılaştırılır
13 Kasım 2026, sahibi (`uretim/CLAUDE.md` komut adımı 9). İstemden önce `kaynak/yeni_gorsel/figur_*_normal.webp` temas sayfası + önceki vakaların formlarındaki tarifler ile yan yana bakılır. Formdaki tarif de benzetebilir (V6'da Müzeyyen = Nadide, Dilek = Gülsüm, Tahsin = Sarkis/Rıza çıktı): benzerse sahibine yeni görünüş önerilir, metinde geçen eşya korunur. İstemde "X'e (ayırıcı özelliği) benzemiyor" yazılır. Benzerlik `istem_kontrol.sh`'ın yakalayamadığı şeydir.
*Kaynak:* 1077

## 221. ISTEM-47 ↔ GOMME-12 (0.26)

### ISTEM-47 Duvardaki portre/afiş
Duygu abartısız yazılır ("zarif, abartısız bir gülümseme"); "göz kamaştırıcı gülümseme" karikatür sırıtış verdi.
*Kaynak:* 1208

### GOMME-12 Künye portresi
Her figürlü kişinin yüzü portreye kırpılır (`yeni_gorsel/portre/`): her yeni kişinin figürü gömülünce `python3 arac_portre.py <figür_normal> yeni_gorsel/portre/portre_<id>.webp` + `gorseller.json`. (16 Ekim; sahibi buldu: Vaka 2'nin yedi konuğunda yoktu.) `test_yeni_v2.js` eksik portreyi yakalar.
*Kaynak:* 489, 1146, 2580

## 222. SUREC-22 ↔ GOMME-6 (0.26)

### SUREC-22 Temel görsel önce, türevler onaydan sonra
Karakter temelleri (Peri, Cengo, yan karakterler) ve mekân temelleri ilk turda onaylanır; her temel reddi bütün zinciri bir tur geciktirir.
Her sohbette sahibi önce temel görseli (G1, G14, G19…; mekânda G35, G40, G43 — Vaka 2 numaraları) **tek** gönderir; Claude kontrol
listesinden geçirip "doğru, devam" ya da düzeltme promptu verir; türevler onaydan sonra üretilir. Neden: Vaka 2'de bunu yapmayan Sohbet 1
(G8'deki çorap bandı G9–G13'e yayıldı) 64 dk sürdü, yapan sohbetler görsel başına 3–5 dk; Vaka 3'te G5 iki kez reddedildi ve beş resmi
(G33, G34, G35, G54, G57) bekletti. Sahibi görselleri sohbete **doğrudan yapıştırır**, numarayı Claude verir (dosya adı gerekmez); sahibi
"Sohbet N'e başlıyorum" / "bitti" der, saatler süre tablosuna yazılır. Sahibi "üret" dediğinde hiçbir resim (temel) hazır değilse bu
söylenir ve önce "kontrol et" istenir. Vaka 2'nin bütün görsel dersleri (kıyafet sabiti kayması, külotlu çorap, sayı, şehir, marka izi,
kalabalıkta kişi düşmesi, kim kimi görüyor, red) `5_gorsel_sistemi.md` D (bilinen hatalar tablosu), E (kontrol listesi 10–12) ve F'de
(kesim profilleri, hale, rötuş sınırı); prompt yazarken D tablosundaki önlemler promptlara baştan konur. Temel önce kuralı Codex düzeninde de
sürer (DENETIM-41); sohbet/yapıştırma ayrıntısı yalnız web'deki resimler için kalır (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 40).
*Kaynak:* 712, 1356, 1488, 2572

### GOMME-6 Paket aracı ve toplu işleme
Görseller tek tek değil, **sohbet sohbet** (bir sohbetin bütün çıktıları), toplu gelir.
- Dosyalar `G<n>` ile başlar ya da ChatGPT'nin verdiği adla kalır; sahibi yalnız numaraları yazar ("Sohbet 1, G1–G13"), araç `--sira G1-G13` ile dosya adındaki üretim saatine göre numara verir. Pakette her numaradan **bir** görsel olur (beğenilmeyen çıkarılır); sayı tutmazsa araç durur. Numarayı mesaj sırasından değil görselden doğrula (Vaka 2'de 3. ve 4. tablonun tersiydi).
- Numara `sablon/vakalar/vakaN_gorsel.md` tablosundan tür ve anahtara çevrilir.
- `cd kaynak && node arac_paket.js <klasör> --vaka N [--yaz]`: `--yaz` yokken yalnız önizler, proje dosyasına dokunmaz (temas sayfası `YENI_UI/paket_<klasör>.png`: yeşil zemin + büyütülmüş baş). `--yaz` ile keser/küçültür, gömer, manifestoyu günceller, doğrulayıcı + iki derlemeyi koşar ve eski `index.html`'in değişmediğini md5 ile sınar.
- Araca kalmayan (insana): saç halesi, yazı/harf taraması, boy ayarı (araç boyu olmayan konuğu söyler), ilgili satırlarda ekran görüntüsü (`arac_yeni_tur.js`).
- Sahibine paketin oyundaki son hâli tek seferde gösterilir; düzeltme istenen görseller tek listede döner. Temel görseller (G1, G14…) bitince öbür sohbetler aynı anda (başka sekmede, ChatGPT ya da Grok) yürüyebilir.
- Araçtır, test değil.
*Kaynak:* 28, 730, 3074, 3085

## 223. SEZON-23 ↔ GOMME-17 (0.26)

### SEZON-23 Vaka içinde kıyafet değişimi serbest
Hikâye gerektirirse kıyafet vaka içinde değişebilir (Vaka 2'deki gibi; 16 Ekim 2026). Her yeni kıyafet = bir ifade seti (Vaka 3 notunda ~6–8 figür).
*Kaynak:* 2579, 3020

### GOMME-17 İki zemin de riskliyse kıyafet değişir
İki zemin de riskliyse (araç "KIYAFET DEĞİŞMELİ" der) zemin değil KIYAFET değişir (sahibinin kararı, 14 Kasım 2026: "yeni bir kıyafet giydiririz, bu kadar uğraşacak bir şey yok"). Araç çakışan rengi ve figürdeki yerini basar; kıyafetin o parçası iki zeminden de uzak bir renkle değiştirilir (kıyafet kanondur: çakışan parça sahibine/ortağa sorulur, onlar karar verir), kart yeniden üretilir, araç yeniden koşar. Yeni zemin rengi eklenmez.
*Kaynak:* 537, 1084

## 224. BILGI-18 ↔ KOD-56 (0.26)

### BILGI-18 Görsel için doğrulayıcı eki (Kural 1 genişletme)
Her görsel, bağlı clue'nun `reveals`ine etiketlenir. Görsel bir kanon yüzü/olguyu gösteriyorsa, o yüz/olgu clue'nun `needs ∪ reveals` kümesinde olmalıdır; değilse → FAIL. Nurcan'ın görsel versiyonu böyle engellenir.
*Kaynak:* 2127

### KOD-56 K3 — Döngü, hata
Clue'ların `needs` grafiği döngüsüz (DAG) olmalı; döngü → FAIL ("kilitli kapı arkasında kilitli anahtar: şu clue'lar birbirini bekliyor: [...]"). Her vakada `needs:[]` olan (baştan açık) en az bir clue bulunmalı; yoksa FAIL ("vakanın açık girişi yok").
*Kaynak:* 2256, 2257, 2258, 2259, 2320, 2356

## 225. BILGI-11 ↔ ARAYUZ-9 (0.26)

### BILGI-11 Zincir defteri: sayaç yok
Sayaç YOK ("7 ipucunun 5'i") — o not vermektir.
*Kaynak:* 33, 36

### ARAYUZ-9 Defter → Zincir yalnız içinde bulunulan vaka
Zincir sekmesi yalnız içinde bulunulan vakanın olgularını ve çıkarımlarını gösterir (açık vaka yoksa son biten vaka). Önceki vakalar burada görünmez — künyedeki kuralın aynısı: geçmiş vakalar geçmişte kaldı. Önceden Vaka 2'de Vaka 1'in olguları görünüyordu; düzeltildi. Kod: `yeni_arayuz.js → defterZincir`. (Sahibinin isteği, 17 Ekim 2026.)
*Kaynak:* 156, 300, 2577, 3006

## 226. KAR-37 ↔ SEZON-1 (0.26)

### KAR-37 Taç
- Peri'nin eski hayatından geri alınacak şey (sahibinin kararı, 4 Ekim 2026: güzellik kraliçesi tacı; haczedilip satılmış, müzayedede karşısına çıkar).
- Hacizde gitti. Vaka 7'de müzayedede karşısına çıkar; **her yolda Vaka 7'de geri alınır**, karar yalnız nasıl alındığını değiştirir (kural 27). 16 Kasım 2026'da kasa kalktı; "kasada biriken parayla" geçersiz.
- 2009 tarihli güzellik yarışması tacı; gümüş, kristal taşlı. İcra satışından bir tüccar almış; Nişantaşı'ndaki müzayede evinin kataloğunda 14 numara *(Vaka 7, ortağın onayı, 15 Kasım 2026)*.
*Kaynak:* 256, 1844, 1969

### SEZON-1 Sezon 1'in çatısı
Sezon 1 **sekiz vaka**dır (sahibinin kararı, 4 Ekim 2026: "sekizi de kalıyor"; yazarken değişebilir). Her vaka kendi içinde kapanır.
Vakaları birbirine bağlayan iplikler kararlarla ilerler:
- **Para hedefi:** Peri'nin eski hayatından geri alınacak bir şey — tacı; Vaka 7'de müzayedede karşısına çıkar.
- **Cengo'nun sırrı:** uzaktaki kızı; Vaka 6'da açılır. Öncesinde yalnız ipuçları: telefona bakıp açmaması, bir okulun önünden geçmek istememesi.
- (Üçüncü iplik Peri–Cengo bağıdır; o satır bu konuda değil.) 12 Kasım 2026 taslağı S1'in ipliğini şöyle sayar: para hedefi (Peri'nin tacı, V7 müzayede) + Cengo'nun sırrı (kızı, V6) + avukat (V8).
*Kaynak:* 1850, 1853, 1854, 1967, 884

## 227. ARAYUZ-13 ↔ RAF-49 (0.26)

### ARAYUZ-13 Konuşma ekranı: arka plan
Arka plan her satırda değişebilir (aynı yerde yumuşak geçiş, başka yerde kararma).
*Kaynak:* 283

### RAF-49 Geçiş ekranı bir seçim ekranıdır
Geçiş ekranında iki seçenek: "▶ Reklam izle" ya da "Sezonu satın al (reklamsız)". Satın alma her geçişte ve kredi ekranında görünür; oyuncu istediği an alabilir.
*Kaynak:* 1608

## 228. SATIR-8 ↔ ISTEM-18 (0.26)

### SATIR-8 SR-C Kıyafet kartı (satır tarafı)
Her kıyafet önce tek bir ölçü resmiyle (kıyafet kartı) onaylanır; kıyafet istemde sözle yeniden tarif edilmez, kart referans verilir. İstemde: "Kıyafet: N. referanstaki kıyafet kartıyla birebir aynı (boy, kesim, renk)" + o satırların hâli ("trençkot AÇIK, kemer çözük"). (Kartın ayrıntısı ISTEM konusunda, 5. parça I.)
*Kaynak:* 6, 1220, 1076, 715

### ISTEM-18 Vaka 6 kararı: konuk kıyafet kartı yalnız karede görünenlere
Vaka 6'da (Parti 2'den önce sorulan soru; 13 Kasım 2026, sahibinin cevabı) konuk kıyafet kartı altı konuğa değil, yalnız karede görünen üçüne (Müzeyyen, Jale, Dilek) üretildi — gerekçe kota; sonradan kareye giren olursa kartı o zaman. Karar `uretim/v6/LISTE.md`'ye yazıldı. Yalnız Vaka 6'nın kotasıydı; genel kural ISTEM-17'deki "her konuğun kıyafeti" (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 13).
*Kaynak:* 2816

## 229. SUREC-38 ↔ ISTEM-53 (0.26)

### SUREC-38 Ortağın Vaka 5 dersleri (TASLAK §12) kararı
Barbaros'un cevabı (12 Kasım 2026): onaylandı, Vaka 6'dan itibaren geçerli. A, B, C olduğu gibi; D, E, F iptal (önce onaylandı, aynı gün
geri alındı — şimdilik kontrol yok); G yeni belge değil, Onay 2'den önce `3_kanon_kaydi.md` okunur (SUREC-16). İşlendiği yerler:
`6_vaka_formu.md` (§2 kişi tablosu, §12 "kim neyi biliyor", §19), `7_uretim_sureci.md` (adım 6, bulanık replik taraması).
*Kaynak:* 1024, 1025, 1028, 2831

### ISTEM-53 Vaka 3 dersleri istemde baştan uygulanır
`uretim/CLAUDE.md`'deki Vaka 3 dersleri tablosu istem yazılırken baştan uygulanır (denetimde de aranır). Boy, bakış, kesim, saç için: H. Görsel standart + `arac_yanyana.js`.
*Kaynak:* 1068, 1168

## 230. BILGI-18 ↔ KOD-54 (0.26)

### BILGI-18 Görsel için doğrulayıcı eki (Kural 1 genişletme)
Her görsel, bağlı clue'nun `reveals`ine etiketlenir. Görsel bir kanon yüzü/olguyu gösteriyorsa, o yüz/olgu clue'nun `needs ∪ reveals` kümesinde olmalıdır; değilse → FAIL. Nurcan'ın görsel versiyonu böyle engellenir.
*Kaynak:* 2127

### KOD-54 K1 — Sözlük (isim sızıntısı), hata
- Her clue'nun `text`, `meta`, `ad` ve `gorsel.gosterir`'inde geçen her kanon ismi ve olgu-anahtarı ya o clue'nun `reveals`'inde (ilk kez o açıyor) ya `needs`'inde (daha önce açılmış) olmalı; değilse FAIL. Görsel için: `gosterir ⊆ (clue.needs ∪ clue.reveals)` (Görsel Stil Sözleşmesi §7). KANON.isimler taranır.
- Düzeltme iki yoldan biri: `needs`'e açan olgu eklenir (ör. `needs:["nurcan_suclamasi"]` — o ismi açan kaynak görülmeden kamera açılmaz) ya da isim metinden çıkarılır.
- Keskinleştirmeler: (1) "girişte tanıtılmış" isimler yalnız varsayılan giriş varyantından alınır; (2) koşullu metinlerde her varyant ayrı denetlenir, varyantın koşul olguları o varyantın havuzuna katılır; (3) havuzdaki türetilmiş olgular bileşenlerine açılır; (4) varyantın koşulu bir tohumsa `KANON.tohum_isimleri` o tohumun hangi değerinde hangi isimleri garanti ettiğini söyler.
- İsim tespiti: KANON.isimler kelime sınırıyla, büyük/küçük harf ve Türkçe ekler dahil aranır ("İlyas'ı", "İlyas'ın" → "İlyas"). Olgu-anahtarları metne `{olgu}` şablonuyla ya da açık atıfla girer; asıl risk isimlerdir.
- Yeni oyunda K1 ipucunun hem düz metnini hem `sahne`'sini tarar (KOD-47).
*Kaynak:* 2236, 2237, 2238, 2239, 2240, 2243, 2246, 2307, 2309, 2318, 2354

## 231. ISTEM-11 ↔ GOMME-26 (0.26)

### ISTEM-11 Peri / Cengo temeli (yeni kıyafet)
- Referanslar sırayla, hepsi dekoltesiz: 1. yüz: `../referanslar/peri_bas.jpg` ya da `../referanslar/C1_cengo_yuz.jpg`; 2. beden/ölçek: `../referanslar/tarz_govde_kadin.jpg` ya da `../referanslar/cengo_beden.jpg`; 3. tarz örneği: `tarz_ornek_kadin.jpg` ya da `tarz_ornek_erkek.jpg`. (Kıyafet kartı referansı: ISTEM-19.)
- İstem sırası: "Birinci referans görseldeki … AYNISI" → kıyafet (kart nasılsa öyle + kartta görünmeyen dekolte derinliği; ISTEM-19) → "Poz: TAM İKİ KOL, İKİ EL." + her elin işi → bakış satırı (H3) → ifade → kadraj + zemin satırı → çıplaklık satırı → tarz örneği cümlesi (ISTEM-10) → yazı yasağı → oran.
- Peri'nin eski referansları (L*, peri_*, poz_peri_*; `sablon/peri_poz/` L1–L25 kütüphanesi) HEPSİ dekolteli — kullanılmaz; Peri'nin pozu metinle anlatılır.
- Cengo poz kütüphanesi `sablon/cengo_poz/` (C1–C25, dizin `OKUBENI.md`; 17 Ekim'de tamam): C1 yüz, G14-1 beden; zor pozda uygun C "YALNIZ poz için" (ör. C25 koltukta bacak bacak üstünde, C16 işaret eden, C24 arkadan, C19 yürüyor). İfadeler vakanın temel figürünün düzenlemesi (ISTEM-14); kıyafet V1/V2 ile aynıysa oyundaki figür referanstır. Adım 8'de her Cengo kartına hangi C'nin gireceğini Claude yazar.
*Kaynak:* 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1063, 1479, 3012, 2581, 412

### GOMME-26 Kart afişi: referanslar (5)
Mekân, Peri temeli, Cengo temeli, **konuk şeridi** (figürler bej zeminde tek görselde birleştirilir; `uret.py` yanındaki `ref/`), L19. Şerit tek referansla dört kişi taşır.
*Kaynak:* 498

## 232. SUREC-12 ↔ SATIR-25 (0.26)

### SUREC-12 Adım 3: Diyalog
Diyalog `vakalar/vakaN_diyalog.md`'ye Claude'ca yazılır: her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu). Satır–resim
sözleşmesi (5. parça C0): her satırın gerçek muhatabı `kime`/`gir` ile (SR-A, konuk–konuk SR-G); ifade satırın duygusundan seçilir,
eldeki yüzlerden değil (SR-I); sahne notu yalnız o an görüleni söyler (SR-H). Ölçüt: otomatik denetimden geçer.
*Kaynak:* 678

### SATIR-25 Satır → görsel tablosu
Her sahne için bir **satır → görsel** tablosu yazılır ve denetlenir; metnin andığı her nesne için tabloda figür ya da kare bulunur. Tablo diyalogla birlikte biter.
*Kaynak:* 410, 2528, 2538

## 233. ISTEM-48 ↔ GOMME-26 (0.26)

### ISTEM-48 Ara kare, detay, kart afişi
Tarz paragrafı VAR. Mekân ve kişiler onaylı resimlerden (`onayli/G<n>.png`) referans verilir; tarzı onlar taşır. Kalabalıkta ISTEM-35. Kurallar ayrıca `uretim/CLAUDE.md` → Vaka 3 dersleri tablosu (ISTEM-53).
*Kaynak:* 1209, 1184

### GOMME-26 Kart afişi: referanslar (5)
Mekân, Peri temeli, Cengo temeli, **konuk şeridi** (figürler bej zeminde tek görselde birleştirilir; `uret.py` yanındaki `ref/`), L19. Şerit tek referansla dört kişi taşır.
*Kaynak:* 498

## 234. BILGI-7 ↔ ARAYUZ-11 (0.26)

### BILGI-7 Anı özeti yalnız herkesin duyduğunu yazar (kural 21d)
Sahibinin isteği, 17 Ekim 2026. Anı defterinde her biten vakanın üstünde (Peri'nin notunun üstünde) 2–3 cümlelik hatırlatma durur: müşteri ve kayıp, kim almıştı, neden. Bütün kararlarda aynıdır. Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği girer; bir ipucunda kalmış ayrıntı ya da karara göre değişen hiçbir şey (sonuç dahil) girmez. Diyalogda `## ani` bölümüne yazılır. Kimi suçladığın ve kararın oyunun kendi kaydından yazılır (kasa yok, kural 24). Vaka formu onaya gitmeden "Anı özeti yazıldı; yalnız itirafın söylediğini içeriyor" kontrolü işaretlenir.
*Kaynak:* 203, 634, 669

### ARAYUZ-11 Defter → Anı
Biten her vaka için bir kayıt, sırayla: **anı özeti** (2–3 cümle, kural 21d) → oyuncunun izi (kimi suçladı · sonucu, kararı) → Peri'nin karara göre notu. Anı, vakalar arası tek geriye bakış yeridir. Kod: `yeni_arayuz.js → defterAni`. Suçlama vaka bitince `_suclama_<vaka>` tohumunda kalır (`motor_yeni.js`). (Sahibinin isteği, 17 Ekim 2026.)
Kasa artık Anı'da basılmaz: kasa 16 Kasım 2026'da kalktı (kural 24).
*Kaynak:* 157, 300, 2577, 3007

## 235. KOD-50 ↔ RAF-20 (0.26)

### KOD-50 Kayıt sistemi
- Eski oyun: tek yuva, otomatik. Motorda `durumAl()` / `durumYukle()`, arayüzde `localStorage` (`paravan_kayit_v1`). Yeni oyun her adımda kaydedilir (suçlama dahil).
- Kaydedilen yalnız girdilerdir: tohumlar, tamamlanan vakalar, kalıcı olgular, aktif vakada açılmış kaynakların id'leri. Türetilmiş `knowledge`, araştırma hakkı ve giriş metni kaydedilmez, yüklemede güncel veriden yeniden üretilir — eski kayıt hak edilmemiş olguyu geri getiremez (Nurcan kuralı kayıt üzerinden delinmez).
- Yükleme kaynakları kaydedildikleri sırayla yeniden açar; bu aynı zamanda doğrulamadır: veri değiştiyse ya da kayıt kurcalandıysa bir adım "kilitli" döner, kayıt tümden reddedilir, eski durum geri konur.
- Karar verilir verilmez yazılır; oyuncu uygulamayı kapatıp kararı geri alamaz ("geri alınamaz karar" çekirdektir). Bu yüzden tek yuva; elle kayıt ve çoklu slot yok.
- `localStorage` yoksa (gizli sekme, kısıtlı WebView) kayıt sessizce devre dışı kalır, oyun sürer. İzole dev testi (🛠 → vakaya atla) ana kaydı kirletmez.
- Sahne kaydı (yeni oyun; 9 Ekim 2026, sahibinin isteği): her konuşma akışı (açılış, giriş, ipucu, yüzleşme+kovalamaca, kapanış) `akisBaslat` ile başlar; sahne ve satır ayrı anahtarda (`paravan_yeni_kayit_v1_sahne`). Açınca sahne o satıra kadar yazı/geçiş beklemeden yeniden oynatılır (`vnSar`), seçimler kaydedildiği gibi yapılır; görüntü (arka plan, kıyafet, figürler) aynı gelir. Kayıt motor durumuyla tutarsızsa yok sayılır. Akış bitince silinir. Sonuç ekranında kapatılırsa kapanış sahnesinden sürer. Sahne ve satır düzeyinde kayıt **her konuşma akışında** geçerlidir, yalnız açılışta değil (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 23).
*Kaynak:* 302, 2375, 2376, 2377, 2378, 2379, 2411

### RAF-20 Otomatik kayıt, kitap başına tek yuva
Kayıt her adımda otomatik; uygulama arka plana atılınca da korunur. Kitap başına tek yuva, elle kaydetme yok (çok yuva "kaydet–dene–geri al" alışkanlığı yaratır, kararların bedeline ters).
*Kaynak:* 1568

## 236. SATIR-41 ↔ ARAYUZ-21 (0.26)

### SATIR-41 Kapı K12: konuşur gibi poz yalnız konuşanda
Konuşur gibi poz yalnız konuşma satırında, konuşanda kullanılır. (Kapı, Vaka 6 ve sonrası.)
*Kaynak:* 3557 (+ "Vaka 6 ve sonrası": `kaynak/arac_kapi.js` başlık yorumu, satır 1–3; KURAL_SATIRLAR.tsv'de yok)

### ARAYUZ-21 Figürsüz konuşan
Görseli olmayan biri adıyla konuşabilir (ses, asistan…).
*Kaynak:* 290

## 237. CODEX-9 ↔ RAF-20 (0.26)

### CODEX-9 Kaydetme
Üretilen resim `uretilen/G<n>.png` olarak kaydedilir.
*Kaynak:* 1256, 1535

### RAF-20 Otomatik kayıt, kitap başına tek yuva
Kayıt her adımda otomatik; uygulama arka plana atılınca da korunur. Kitap başına tek yuva, elle kaydetme yok (çok yuva "kaydet–dene–geri al" alışkanlığı yaratır, kararların bedeline ters).
*Kaynak:* 1568

## 238. YAPI-27 ↔ KOD-75 (0.26)

### YAPI-27 Karar tablosu (formda)
Formda her karar için bir satır: karar | Peri'nin seçenek cümlesi (kısa, ne yapacağını söyler) | sonuç sahnesi: eylem → sonuç → bedel (anlatı satırları) | para sahnede (kim kime ne verdi/kesti; yoksa —) | bağ | Cengo satırı (büroda, kendi ağzından) | anı defteri | ara kare.
*Kaynak:* 629

### KOD-75 Karar sahnede; Cengo satırları
- Kararı sahnedeki biri sorar; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (kural 22a–b). Önizleme, kesinti ve rakam yok (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–20).
- Her doğru kanıt için Cengo'nun söylenmeyen kanıt satırı var; açılmamış ipucunu anmaz (kural 22c).
- Cengo'nun karar ve kanıt satırları etiketli: `**CENGO [ifade]:** … {yuz: peri.x}` / `**olgu [ifade]:** … {yuz: peri.x}`; ifade kapanış setinde (`gorseller.json`) var olan bir resim olmalı, yoksa kapı (`arac_kapi.js … resim` K2/K8/K6, poz kaydı) durur.
*Kaynak:* 750, 751, 752

## 239. YAPI-1 ↔ KOD-70 (0.26)

### YAPI-1 Vakanın akış sırası
Her vaka aynı sırayla oynanır; sıra değişmez. Bugünkü akış (16 Kasım 2026'dan beri; eski karar ekranı / sonuç sayfası / kasa düzeni kalktı, kod 14bbf84):
açılış sahneleri (yalnız oyun başında) → masa → **giriş** + konuşma sahnesi → **araştırma** (ipucu açılınca sahnesi oynar, ardından "Deftere düştü" kartı) → **Kim yaptı?** (şüpheli + iki kanıt, tek hak) → **yüzleşme** (sonuca göre dört sahneden biri) → **kovalamaca** → **karar sahnesi** (sahnedeki biri sorar, "Peri ne yapsın?" seçimi; kasa yok) → **sonuç sahnesi** (karar karesinin üstünde) → **Cengo büroda** (karar repliği + söylenmeyen doğru kanıt, YAPI-25) → **"Dosya kapandı" kartı** → kapanış sahnesi (bağa göre iki hâl) → masa.
Adımların özü:
1. Giriş: müşteri gelir, derdini anlatır.
2. Konuşma: Peri ile Cengo atışır, plan yapar.
3. Araştırma: oyuncu ipucu açar; hakkı sınırlıdır.
4. Kim yaptı?: oyuncu suçluyu seçer ve iki kanıt gösterir.
5. Yüzleşme: seçime göre kısa bir sahne (4 tane); hepsinde gerçek suçlu kaçar.
6. Kovalamaca: her durumda aynı.
7. Karar: oyuncu ne yapacağını seçer (ahlaki seçim).
8. Kapanış: kısa bir son sahne.
Ayrıntı: 2. parça kural 22a–d ve 24, `kaynak/DEVIR.md` en üst.
*Kaynak:* 81, 83, 84, 85, 86, 87, 88, 89, 90, 293, 297, 2408

### KOD-70 K19 — Kim yaptı? yapısı
3 şüpheli; suçlu her yolda görünür; kanıt çiftleri olgu; ücret sırası; dört yüzleşme sahnesi; 4 karar; kapı/tohum/bedava ipucu yok; ipucu > hak; hak içinde en az 2 farklı doğru kanıt çifti; hiçbir doğru çift tek ipucundan çıkmaz (kural 21c); K19 artık `kesinti` açıklaması, karar `onizleme`si ve "kasa eksiye düşmez" denetimi **istemez** — üçü de 16 Kasım düzeniyle kalktı (kesinti, önizleme, kasa yok) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–21). Üretim denetiminde ayrıca: suçluyu kanıtlayan en az 2 ipucu yolu var (742).
*Kaynak:* 2444, 742, 743

## 240. YAPI-29 ↔ RAF-42 (0.26)

### YAPI-29 Her durumda en az bir dürüst seçenek
Her durumda en az bir dürüst karar seçeneği açıktır (form kontrolü: "En az bir dürüst karar var").
*Kaynak:* 165, 630, 665

### RAF-42 Satın alma ekranında dürüst karşılaştırma
Satın alma ekranında yalnız bilgi, baskı yok: *"Bu sezon için yaklaşık 40 reklam yerine: tek seferlik 1,99 $"*.
*Kaynak:* 1595

## 241. ISTEM-6 ↔ DENETIM-21 (0.26)

### ISTEM-6 Baş açısı ve bakış: burun-kulak geometrisi
- Sol/sağ talimatı yanak/kaş ile değil burun-kulak geometrisiyle yazılır. "Sağ yanağını görüyoruz" tutmadı; "burnu kadrajın sağına baksın, kulağı solunda kalsın" ilk seferde tuttu.
- Her figür isteminde aynı satır (H3, aynen): "Başın açısı: burnu kadrajın soluna bakıyor; yüzü üç çeyrek, iki göz de görünüyor. Gözler kadrajın soluna, yatay bakıyor; yukarı, aşağı ya da kameraya değil."
- Vaka 3'te (BIRIKIM §6.1, işe yarayanlar) satır kulakla da yazılmıştı: "Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor; yüzü üç çeyrek. Kameraya bakmıyor."
- Gerekçe: oyunda Peri solda aynalanır, konuk sağda durur; bu satırla ikisi birbirine bakar.
- Yüz profile dönüyorsa: "üç çeyrek, İKİ göz de açıkça görünsün" (Vaka 3'te en sık bozulanlardan biri profil yüzdü).
- `istem_kontrol.sh` figürde "Başın açısı" yoksa geçirmez.
*Kaynak:* 73, 432, 446, 525, 526, 527, 350, 1423, 1159, 1495, 3568

### DENETIM-21 Yüz yönü ve bakış
Yüz ¾ (üç çeyrek) dönük, İKİ göz görünür, profil değil. Burun **her resimde** kadrajın soluna bakar (koşulsuz; Vaka 3'teki "istemin dediği yöne" koşulu kalktı — sahibinin kararı, 17 Kasım 2026, çelişki sorusu 5). Kontrol listesinde: "Bakış yönü doğru mu?" Sebep: G4 ilk geldiğinde neredeyse profildi (uzaktaki göz burun kemerinin arkasında kalmıştı); G50'de Peri'nin yüzü profile yakındı ve gözlük gözüne inmişti — afişteki yüzle tanındığı için onaylandı ve sahibine bildirildi.
*Kaynak:* 463, 1119, 1308, 1511

## 242. ARAYUZ-36 ↔ RAF-53 (0.26)

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### RAF-53 Kredi: bir reklam = bir kredi
Kredi düzeni internetsiz oyun açığını kapatmak için (sahibinin fikri). İzlenen her reklam = 1 kredi. Her reklamlı işlem (geçiş, +1 hak, kaçan ipuçları, vaka özeti) 1 kredi harcar.
*Kaynak:* 1613

## 243. CODEX-1 ↔ RAF-27 (0.26)

### CODEX-1 Codex'in rolü, çalışma yeri ve dili
Codex istemlerden resim üretir ve çıktısını `uretilen/`'e koyar; kuralları `uretim/AGENTS.md`'dedir. Bir çizgi oyunun (eski talimatta "çizgi
animasyon") resimlerini üretir. Çalışma yeri o vakanın klasörü `uretim/v<N>/`. Onu genellikle yerel Claude çalıştırır:
`codex exec --approve-for-me "AGENTS.md'ye göre G<n> resmini üret."`. Sahibi Türkçe konuşur; Codex kısa, Türkçe yanıt verir.
*Kaynak:* 1241, 1267, 1524

### RAF-27 Türkçe tasarım dili ve kanon
Tasarım ve yazım dili Türkçedir; Türkçe metin kanondur. Hikâyenin gerçekleri Türkçede durur (9 Kasım 2026).
*Kaynak:* 1576, 1990

## 244. BILGI-5 ↔ YAPI-5 (0.25)

### BILGI-5 İpucu adı açıktır ama fazlasını söylemez
İpucu adları açıktır; oyuncu neye hak harcadığını bilir. Ama ipucu adı, açılmadan önce oyuncunun bildiğinden fazlasını söylemez (yeni ad, yer, nesne yok).
*Kaynak:* 129, 130

### YAPI-5 İpucu ve araştırma hakkı
- Bedava ipucu yok: her ipucu bir hak harcar. İpucu sayısı haktan fazladır.
- Vaka 1: 5 ipucu, 4 hak. Vaka 2: 6 ipucu, 3 hak. Vaka 2'den itibaren 3 hak.
- **3 hakla `doğru` yolu şart** (`test_yeni_v2.js` sınar); 4. ipucu resmi genişletir.
- Reklamla +1 hak (16 Ekim 2026, sahibinin kararı; Android'de): reklam düğmesi hak bitince çıkar; kapanıştan sonra "Kaçırdığın ipuçları". Ayrıntı `kaynak/YENI_OYUN_CERCEVE.md`.
- Motor araştırmada ipucu listesi, hak sayısı, ipucu sahnesi ve "deftere düştü" kartı gösterir.
- Formda her ipucunun kısa sahne özeti ayrıca yazılır.
*Kaynak:* 85, 118, 119, 120, 294, 571, 599, 600, 2575

## 245. YAPI-9 ↔ KOD-80 (0.25)

### YAPI-9 Her vakada bir "aha!" anı
Her vakada oyuncuyu yanıltan bir iz ve onu çözen bir kanıt vardır ("aha!" anı). Form kontrolünde aranır.
*Kaynak:* 166, 660

### KOD-80 Vakadan vakaya geçiş
Vaka bitince sonraki vaka açılır (ilk iki vakada elle denenir).
*Kaynak:* 760

## 246. SATIR-26 ↔ KOD-41 (0.25)

### SATIR-26 Diyaloğu satır satır yazmak (adım 3)
Diyalog yazılırken her satır için baştan yazılır: konuşan, ifade, `kime` (konuk varsa), dinleyenin yüzü değişiyorsa işareti, arka plan/açı, kare. Kontrol sorusu her satırda: "Ekranda kim var, kime bakıyor, yüzü bu satıra uyuyor mu, metnin andığı nesne görünüyor mu?"
*Kaynak:* 2538

### KOD-41 Sahne ve satır biçimi
Sahne: vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda `sahne`, açılışta `acilis.json → sahneler[]`; biçim `{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }`.
Satır: `{ k: "peri", i: "kas", m: "Ne oldu?" }` (konuşan, ifade — verilmezse önceki kalır —, metin); `{ k: "not", m: … }` anlatı, ifade almaz; `{ k: "ses", m: … }` figürü olmayan konuşan, ifade almaz.
Satırda isteğe bağlı sahne değişiklikleri:
- `arka: "A5b"` arka plan değişir (aynı yer+saat çapraz geçiş, değilse karartma).
- `kare: "K8"` tam ekran ara kare / detay; figürler çekilir.
- `set: "balikli"` Peri'nin kıyafet seti değişir (sonraki ifadeler o setten).
- `gir: "serkan"` / `cik: true` konuk girer/çıkar; `gi` girenin ilk ifadesi; `gizle: "cengo"` figürü ekrandan çeker (konuşunca döner).
- `kime: "peri"`: konuk varken Cengo Peri'ye konuşuyorsa sağa geçer; yoksa Cengo konuk varken SOLA geçer (aynalı), konuk sağda kalır. Konuk satırında `kime: peri|cengo` solda kimin duracağını seçer. Anlatı satırında da `kime: peri|cengo|<konuk>` solda kimin duracağını seçer (konuk: sağdakinin karşısında, aynalı; 14 Kasım 2026).
- `peri: "tac"` konuşan başkayken Peri'nin (dinleyen) ifadesi; K15 set kuralıyla denetler.
- `mekan: true` mekân karesi: figürler çekilir, arka plan çıplak (yeri tanıtan anlatı satırı).
- `bag: "yuksek"` / `"dusuk"` satır yalnız o bağ hâlinde oynar (kapanış; eşik +1, `motor_yeni.js` → `BAG_ESIK`).
*Kaynak:* 2418, 2419, 2421, 2424, 2425, 2426, 2427, 2428, 2430, 2431, 2432

## 247. TON-15 ↔ KOD-33 (0.25)

### TON-15 Espri açıklanmaz, kurulumu önce gelir
Espri açıklanmaz ama kurulumu görünür olur (sahibinin kararı, 17 Ekim 2026; kural kitabı 5). Taramada sorulur: espri tek okumada anlaşılıyor mu; kurulumu ondan ÖNCE mi geliyor?
*Kaynak:* 177, 702

### KOD-33 Ortağın bilgisayarı ve ilk kurulum
- İlk kurulum (bir kez): Git, Node.js, Python 3 kurulu olmalı. Depoda olmayan tarayıcı aracı (`araclar/`, Playwright + Chromium) yeniden kurulur: `npx playwright install chromium`. Resim üretimi için ortağın kendi Codex erişimi gerekir (`uretim/CLAUDE.md`). Kurulumdan sonra `cd kaynak && node dogrulayici.js yeni` ve test döngüsü geçmeli.
- Tuzak: Claude'un kabuğu `PW` kullanıcı değişkenini görmez; tur araçlarından önce `export PW=C:/Yazilim/paravan/araclar/node_modules/playwright`. Python `py` ile çalışır (`python` yok).
*Kaynak:* 2887, 2912

## 248. YAPI-25 ↔ SATIR-36 (0.25)

### YAPI-25 Cengo söylenmeyen doğru kanıtı söyler
Kural 22c; sahibinin kararı, 16 Kasım 2026 (eski ücret kesintisinin ve formdaki "kesinti açıklaması"nın yerine; kasa yok).
- Kapanıştan önce, büroda, Cengo yalnız oyuncunun **elinde olup** suçlamada kullanmadığı doğru kanıtı anar ("Elindeydi"; seçimi `cozumYolu()` yapar, testli).
- **Açılmamış ipucunun bilgisi asla anılmaz** (kural 20 / 20 Ekim kuralı; reklamlı "kaçan ipucu" da bunun için korunur).
- Doğru kişi + sağlam kanıtta Cengo bu konuyu açmaz. Yanlış kişi suçlandıysa da aynı kural: elindeki doğru kanıt.
- Yazar suçluyu kanıtlayan **her doğru kanıt için bir** Cengo satırı yazar; satır yalnız o kanıtı anar, kanıtın kendi bilgisinden fazlasını söylemez, çiftin öbür kanıtını anmaz (oyuncu onu açmamış olabilir — V6'nın ilk örneğindeki "Sofradaki tarihle" sözü sızıntı taramasında yakalandı, 16 Kasım 2026). Form kontrolü: her doğru kanıt için satır var, yalnız o kanıtın bilgisini söylüyor.
- Örnek (V6, zayıf): "Elbise kılıfını o gün iki kişi tuttu, Peri. Onu söyleseydin kadın 'kanıtınız ne?' diyemezdi." (DEVIR'deki karar notunda aynı örnek "Torbayı o gün iki kişi tuttu…" biçimindedir.)
- Karar satırı da kanıt satırı da **Cengo'nun repliğidir** (Peri'ye söyler, anlatı değil; Peri dinler). Diyalogda etiketle yazılır: karar satırı `**CENGO [ifade]:** … {yuz: peri.x}`; kanıt satırı `## cengo_kanit` bölümünde `**olgu [Cengo'nun ifadesi]:** metin {yuz: peri.x}` — ifade ve Peri'nin yüzü yazılır (kapıda K8). Biçim `sablon/6_vaka_formu.md`. Veride `kim_yapti.cengo_kanit[olgu]`.
- Bir doğru kanıtın Cengo satırı yoksa o yolda Cengo susar.
*Kaynak:* 208, 614, 667, 2773

### SATIR-36 Cengo satırı etiketli replik olarak yazılır
Diyalogda Cengo satırı **etiketli** yazılır: `**CENGO [ifade]:** metin {yuz: peri.x}` → büroda Cengo'nun repliği (16 Kasım 2026). Etiketsiz `**CENGO:**` eski düzendir (anlatı satırı; V1–V5 yeniden geçirilene dek).
*Kaynak:* 633

## 249. KOD-50 ↔ RAF-74 (0.25)

### KOD-50 Kayıt sistemi
- Eski oyun: tek yuva, otomatik. Motorda `durumAl()` / `durumYukle()`, arayüzde `localStorage` (`paravan_kayit_v1`). Yeni oyun her adımda kaydedilir (suçlama dahil).
- Kaydedilen yalnız girdilerdir: tohumlar, tamamlanan vakalar, kalıcı olgular, aktif vakada açılmış kaynakların id'leri. Türetilmiş `knowledge`, araştırma hakkı ve giriş metni kaydedilmez, yüklemede güncel veriden yeniden üretilir — eski kayıt hak edilmemiş olguyu geri getiremez (Nurcan kuralı kayıt üzerinden delinmez).
- Yükleme kaynakları kaydedildikleri sırayla yeniden açar; bu aynı zamanda doğrulamadır: veri değiştiyse ya da kayıt kurcalandıysa bir adım "kilitli" döner, kayıt tümden reddedilir, eski durum geri konur.
- Karar verilir verilmez yazılır; oyuncu uygulamayı kapatıp kararı geri alamaz ("geri alınamaz karar" çekirdektir). Bu yüzden tek yuva; elle kayıt ve çoklu slot yok.
- `localStorage` yoksa (gizli sekme, kısıtlı WebView) kayıt sessizce devre dışı kalır, oyun sürer. İzole dev testi (🛠 → vakaya atla) ana kaydı kirletmez.
- Sahne kaydı (yeni oyun; 9 Ekim 2026, sahibinin isteği): her konuşma akışı (açılış, giriş, ipucu, yüzleşme+kovalamaca, kapanış) `akisBaslat` ile başlar; sahne ve satır ayrı anahtarda (`paravan_yeni_kayit_v1_sahne`). Açınca sahne o satıra kadar yazı/geçiş beklemeden yeniden oynatılır (`vnSar`), seçimler kaydedildiği gibi yapılır; görüntü (arka plan, kıyafet, figürler) aynı gelir. Kayıt motor durumuyla tutarsızsa yok sayılır. Akış bitince silinir. Sonuç ekranında kapatılırsa kapanış sahnesinden sürer. Sahne ve satır düzeyinde kayıt **her konuşma akışında** geçerlidir, yalnız açılışta değil (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 23).
*Kaynak:* 302, 2375, 2376, 2377, 2378, 2379, 2411

### RAF-74 Kayıt çakışmasında sorulur
İki cihazda farklı kayıt çıkarsa oyuncuya sorulur ("Bu cihazda Vaka 4, bulutta Vaka 6…"). Kararlar geri alınamadığı için kayıt sessizce ezilmez.
*Kaynak:* 1638

## 250. KOD-43 ↔ ARAYUZ-11 (0.25)

### KOD-43 Seçim ve karar alanları
- Seçim: `{ secim: "Peri ne desin?", secenekler: [ { m: "…", satirlar: [...] }, ... ] }`.
- Karar: `kare: "K3"` (sonuç ekranının görseli). Anı defteri `kisiler.json → defter.V1.<karar>`; anı özeti `ani_ozet.V1`. Anı sekmesindeki "Suçladığın" satırı motorun `_suclama_<vaka>` tohumundan (`"şüpheli:sonuç"`) okunur; bu tohumdan önceki kayıtlarda bu satır çıkmaz. Anı'da "Kasaya" satırı yok — kasa kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 21).
*Kaynak:* 2433, 2434

### ARAYUZ-11 Defter → Anı
Biten her vaka için bir kayıt, sırayla: **anı özeti** (2–3 cümle, kural 21d) → oyuncunun izi (kimi suçladı · sonucu, kararı) → Peri'nin karara göre notu. Anı, vakalar arası tek geriye bakış yeridir. Kod: `yeni_arayuz.js → defterAni`. Suçlama vaka bitince `_suclama_<vaka>` tohumunda kalır (`motor_yeni.js`). (Sahibinin isteği, 17 Ekim 2026.)
Kasa artık Anı'da basılmaz: kasa 16 Kasım 2026'da kalktı (kural 24).
*Kaynak:* 157, 300, 2577, 3007

