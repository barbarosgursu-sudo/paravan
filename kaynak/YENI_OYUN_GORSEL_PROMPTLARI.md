# YENİ OYUN — GÖRSEL PROMPTLARI

*Yeni oyunun görsel siparişleri. Eski oyununkiler `gorsel_promptlari.md` ve
`gorsel_promptlari_2.md`'de; o belgelerdeki dersler (nesneleri tek tek say, yazı
taşıyan yüzü kapat, yönü burun-kulak geometrisiyle ver, "görünmesin" deme) burada da
geçerli.*

---

# DENEME 1 — PERİ, TARZ DENEMESİ (4 Ekim 2026)

**Amaç:** iki soruyu cevaplamak.
1. **Yarı gerçekçi illüstrasyon** tarzı oyuna yakışıyor mu?
2. Üretici **aynı yüzü** ikinci bir ifadede tutturabiliyor mu? Konuşma ekranı
   karakter başına 4-5 ifade istiyor; bu tutmazsa sprite modeli çöker.

Bu yüzden deneme **iki görsel**: önce referans (A), sonra A'yı referans vererek
aynı kadın, başka ifade (B). Yalnız A'yı üretmek ikinci soruyu cevaplamaz.

**Yaş (sahibinin kararı, 4 Ekim 2026):** Peri **37**, Cengo **34**. Eski oyunda 49
ve 38'di.

---

## A — Referans: Peri, nötr

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.

Karakter: Perihan "Peri" Aksoy, 37 yaşında, bir zamanlar güzellik kraliçesi
olmuş, hâlâ çok çekici ve bunun farkında bir kadın. Dik duruş, çenesi
hafif yukarıda. Kumral-kızıl saçları özenle topuz yapılmış, yüzünün iki yanına
birer tutam düşüyor. Ela gözler, belirgin kaşlar, kırmızı ruj. Gözlerinin
kenarında hafif gülme çizgileri; genç kız değil, olgun ve kendinden emin bir kadın.

Kıyafet: tek bir pahalı parça eski günlerden kalmış: diz boyu, beli kemerli,
domates kırmızısı yün bir manto. Altında krem rengi ipek bluz. Kulaklarında
küçük altın küpeler. Başka takı yok.

İfade: hafif kendinden emin, dudakları kapalı, belli belirsiz bir gülümseme.
Kameraya bakıyor.

Kadraj: DİKEY. Dizlerinden yukarısı, tek başına, ayakta. Gövdesi hafif yana
dönük, burnu kadrajın soluna bakıyor, ama gözleri kameraya dönük. İki eli de
görünüyor: biri mantonun yakasında, öteki belinde.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok. (Karakter
sonradan sahnelerin önüne yerleştirilecek.)

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## B — Aynı kadın, kaş kaldırmış

**A'yı referans görsel olarak ver** (üretici izin veriyorsa "karakter referansı"
ya da "görselden üret" seçeneğiyle). Metin:

```
Referans görseldeki kadının AYNISI: aynı yüz, aynı saç, aynı kırmızı manto, aynı
krem bluz, aynı altın küpeler, aynı çizim tarzı, aynı düz açık bej arka plan,
aynı kadraj (dizlerden yukarısı, dikey).

Değişen tek şey ifade ve kollar: tek kaşı belirgin biçimde yukarıda (kadrajın
sağ tarafında kalan kaş), öteki kaşı yerinde. Dudakları hafif büzülmüş, "Ciddi misin?" der gibi şüpheli bir bakış.
Kollarını göğsünde kavuşturmuş. Burnu yine kadrajın soluna bakıyor, gözleri
kameraya dönük.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

---

## Geldiğinde bakılacaklar

| | soru |
|---|---|
| **Tarz** | Fotoğrafa ya da animeye kaymış mı? Komik bir ifade bu tarzda doğal duruyor mu? |
| **Tutarlılık (asıl test)** | A ile B yan yana: aynı kadın mı? Yüz şekli, saç rengi ve topuz, mantonun rengi ve kesimi, küpeler. **Bir tanesi bile farklıysa** not edilir. |
| **Yaş** | Otuzlarının sonunda mı duruyor? Üretici yirmilerine gençleştirmiş ya da kırklarına yaşlandırmış mı? |
| **Yazı taraması** | Büyütüp bak: düğmede, kemer tokasında, küpede harf ya da logo var mı? |
| **Arka plan** | Gerçekten düz mü? Taslağa koyunca karakter kesilip sahnenin önüne yerleştirilecek. |

Sonuç ne olursa olsun buraya yazılır: tuttuysa bu metin bütün karakterlerin
şablonu olur; tutmadıysa neyin kaydığı bir sonraki denemenin girdisidir.

## Sonuç — 4 Ekim 2026

İki görsel geldi; 900 px WebP q80 olarak `kaynak/yeni_gorsel/deneme_peri_a.webp`
ve `deneme_peri_b.webp`'de duruyor (referans olarak, oyuna gömülmedi).

| | sonuç |
|---|---|
| **Tutarlılık (asıl test)** | **Tuttu.** Yüz, saç ve topuz, manto (renk, yaka, kuşak, cep kapağı), bluz, küpe, arka plan, kadraj — A ile B'de aynı. Sprite modeli bu üreticiyle çalışabilir. |
| **İfade** | Kısmen. B'de şüpheli, yarım ağızlı bir bakış var ve okunuyor; ama tek kaş belirgin biçimde kalkmamış, iki kaş da hafif çatık. "Kaş kaldırma" gibi abartılı ifadeler için prompt daha sert olmalı. |
| **Tarz** | **Gerçekçiye kaymış.** Boyalı ama fotoğrafa yakın: ten dokusu ayrıntılı, kontur çizgisi neredeyse yok. İstenen "belirgin kontur, animasyon afişi" tutmadı. |
| **Yaş** | Otuzlarının sonu–kırklarının başı arası okunuyor; kabul edilebilir, sınırda. |
| **Yazı taraması** | Temiz: düğmede, küpede, kuşakta harf/logo yok. |
| **Arka plan** | Düz bej, nesne yok. Kesip sahneye koymaya uygun. |
| **Kadraj** | Diz yerine uyluk ortasından kesilmiş. Sprite için sorun değil. |
| **Göğüs dekoltesi** | Derin. **Sahibinin kararı (4 Ekim 2026): olduğu gibi kalıyor, ve bütün vakalarda, bütün kıyafetlerde bu seviyede — azalmaz.** Kural `YENI_OYUN_SEZON.md` §0. |

**Açık karar (sahibi):** bu tarzda mı kalınacak, yoksa daha çizgisel bir tarz
için ikinci deneme mi yapılacak?

---

# DENEME 2 — PERİ, İKİ İFADE DAHA (4 Ekim 2026)

Taslaktaki konuşmada Peri'nin beş ifadesi geçiyor; elde iki görsel var (A nötr,
B şüpheci). Eksik ikisi: **sinirli** ("O zaman peşin değil.", "Bunun adı haneye
tecavüz.") ve **utanmış** ("…Kimse görmesin.").

**B'nin dersi uygulandı:** "kaş kaldırmış" yumuşak çıkmıştı. Bu yüzden ifadeler
yüzün parça parça hareketiyle, abartı açıkça istenerek yazıldı.

Her ikisinde de **A'yı referans görsel olarak ver.** Dekolte kararı verilene kadar
kıyafet A ile aynı kalıyor; tutarlılık testi bozulmasın.

## C — Sinirli

```
Referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı kırmızı
manto, aynı krem bluz, aynı altın küpeler, aynı çizim tarzı, aynı düz açık bej
arka plan, aynı kadraj (dikey, uyluklardan yukarısı).

Değişen tek şey ifade ve kollar. İfade: açıkça sinirli, abartılı ve okunaklı.
İki kaşı da aşağı ve içe çatılmış, kaşlarının arasında belirgin bir kırışık.
Gözleri kısılmış. Dudakları sıkıca birbirine bastırılmış, ağzının köşeleri
aşağıda. Burun kanatları hafif açılmış. Kollar: bir eli belinde, öteki eli
öne uzanmış, işaret parmağı ileriyi gösteriyor, karşısındakini azarlıyor.

Burnu kadrajın soluna bakıyor, gözleri kameraya dönük.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## D — Utanmış

```
Referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı kırmızı
manto, aynı krem bluz, aynı altın küpeler, aynı çizim tarzı, aynı düz açık bej
arka plan, aynı kadraj (dikey, uyluklardan yukarısı).

Değişen tek şey ifade ve kollar. İfade: açıkça utanmış ve mahcup, ama
gülümsemesini tutamıyor; yakalanmış bir çocuk gibi. Yanakları belirgin biçimde
pembeleşmiş. Kaşları ortada yukarı kalkmış. Bakışları kameradan kaçıyor, aşağıya
ve kadrajın soluna bakıyor. Dudaklarını ısırır gibi, yarım, sıkılmış bir
gülümseme. Kollar: bir eli ağzının önünde, parmak uçları dudağına değiyor;
öteki kolu gövdesine yakın, eli mantonun kuşağını tutuyor.

Başı hafif öne eğik, burnu kadrajın soluna bakıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

Geldiğinde: arka planı ayrılıp taslakta `sinirli` ve `utanmis` ifadelerine
bağlanır; A/B ile yan yana tutarlılık kontrolü yapılır.

## Sonuç — 4 Ekim 2026

C ve D geldi; referans kopyaları `kaynak/yeni_gorsel/deneme_peri_c.webp`,
`deneme_peri_d.webp`. Taslakta `sinirli` → C, `utanmis` → D.

| | sonuç |
|---|---|
| **İfade** | **Tuttu.** Parça parça, abartı açıkça istenince ikisi de ilk seferde okunaklı geldi: C'de çatık kaş, kısık göz, sıkılmış dudak, parmakla gösterme; D'de pembe yanak, kaçan bakış, eli ağzında, sıkılmış gülümseme. B'nin dersi doğrulandı. |
| **Tutarlılık** | Manto, bluz, küpe, saç, arka plan, kadraj dördünde aynı. **D'de yüz bir tık yumuşamış/gençleşmiş** — yan yana bakınca fark ediliyor, tek başına değil. |
| **Yön** | D'de bakış kadrajın soluna değil sağına gitti. Taslakta bütün Peri görselleri aynalandığı için sorun olmadı: C'nin parmağı Cengo'yu gösteriyor, D Cengo'dan kaçıyor. |

**Kural (yeni):** ifade promptu kaşı, gözü, ağzı, yanağı ve elleri **ayrı ayrı**
tarif eder ve abartıyı açıkça ister. "Kaşını kaldırsın" tek başına yetmiyor.

---

# DENEME 3 — PERİ B, C, D YENİDEN (5 Ekim 2026, taslak)

**Sahibinin kararı:** A kalıyor; B, C, D yeniden üretilecek. Değişecek olan: **poz**
ve **ifade.** Her üçünde de **A referans görsel olarak verilir.**

**Kadraj sabit kalır, poz değişir.** Konuşma ekranında ifadeler birbirinin yerine
anında geçer; ölçek ya da kesim değişirse Peri ekranda zıplar. Bu yüzden her üçü
A'yla aynı ölçekte, aynı kesimde (uyluk ortası), başın tepesi aynı yükseklikte.

**Yüz kilidi** (D'de yüz gençleşmişti): her promptta yaş ve "A'daki yüzün aynısı"
açıkça yazılır.

**Ekranda yön:** taslakta Peri solda durur ve görselleri aynalanır. Promptta "burnu
kadrajın soluna" denir; aynalanınca Cengo'ya döner.

**Screwball ilkesi:** ifadeler gerçek öfke ya da gerçek utanç değil, komedi
öfkesi ve komedi utancı — abartılı, okunaklı, biraz tiyatral.

## B2 — Şüpheci

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı kırmızı manto,
aynı krem ipek bluz ve aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı
düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk
ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Değişen tek şey poz ve ifade.

Poz: bir eli belinde. Öteki elinin işaret parmağı çenesinde, düşünür gibi. Başı
hafifçe yana eğik. Ağırlığı tek bacağında.

İfade: açıkça şüpheci, abartılı ve okunaklı. Tek kaşı belirgin biçimde, alnına
doğru yukarı kalkmış; öteki kaşı yerinde ve hafif aşağıda. Gözleri yarı kısılmış,
yan bakış: bakışı kameraya değil, kadrajın soluna kaymış. Dudakları tek yana
kıvrılmış, kapalı, "Ciddi misin?" der gibi yarım bir sırıtma.

Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## C2 — Sinirli

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı kırmızı manto,
aynı krem ipek bluz ve aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı
düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk
ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Değişen tek şey poz ve ifade.

Poz: iki eli de yumruk hâlinde belinde. Gövdesi ve başı öne, kadrajın soluna doğru
eğilmiş, birini azarlıyor. Omuzları kalkık.

İfade: komedi öfkesi — abartılı, tiyatral, okunaklı. İki kaşı da aşağı ve içe
çatılmış, kaşlarının arasında derin bir kırışık. Gözleri kocaman açılmış, öfkeyle
parlıyor. Ağzı konuşurken açık, dişleri hafif görünüyor, tam bir cümlenin
ortasında. Burun kanatları açılmış. Yanaklarında hafif kızarıklık.

Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## D2 — Utanmış

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, olgun bir kadın; gençleştirilmemiş, yüzü yumuşatılmamış),
aynı saç ve topuz, aynı kırmızı manto, aynı krem ipek bluz ve aynı dekolte, aynı
altın küpeler, aynı çizim tarzı, aynı düz açık bej arka plan. Kadraj referansla
birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte,
dikey.

Değişen tek şey poz ve ifade.

Poz: bir eli yüzünün yanına düşen saç tutamını kulağının arkasına sıkıştırıyor.
Öteki eli mantonun kuşağının düğümünü tutuyor. Omuzları hafif içe dönük, başı
hafif öne eğik.

İfade: komedi utancı — yakalanmış ama gülmesini tutamayan biri. Yanakları belirgin
biçimde pembe. Kaşları ortada yukarı kalkmış. Gözleri aşağıya ve kadrajın soluna
kaçmış, kameraya bakmıyor. Dudakları kapalı, alt dudağını hafifçe ısırır gibi,
tutulmaya çalışılan bir gülümseme.

Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde:** dördü (A + B2, C2, D2) yan yana: aynı kadın mı, aynı ölçek mi,
taslakta ifade değişince Peri zıplıyor mu.
