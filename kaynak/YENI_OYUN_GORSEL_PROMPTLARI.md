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

**BAKIŞ KURALI (sahibinin sorusu üzerine, 5 Ekim 2026):** konuşma ekranında Peri ile
Cengo **birbirine bakar, kameraya bakmaz.** Kameraya bakmak oyuncuyla göz göze
gelmektir; bu bizde Cengo'nun seyrek dördüncü duvar anına ayrıldı (Ton §11).
- Peri'nin bütün sprite'larında bakış **kadrajın soluna** (aynalanınca Cengo'ya).
- Cengo ekranın sağında durur, aynalanmaz; onun sprite'larında da bakış **kadrajın
  soluna** (doğrudan Peri'ye).
- Utanma gibi "kaçan bakış" ifadelerinde bakış aşağı kayar ama yine o yöndedir.
- Ara karelerde (K1–K7) ikisi aynı karedeyse birbirine bakar; çekingenlik küslük
  değildir (Ton §6).
- Tek istisna: Cengo'nun dördüncü duvar anı için ayrı bir "kameraya bakan" ifade
  üretilir (Vaka 4).
- **A (referans) kameraya bakıyor;** karakter kartı olarak referans kalır, ama
  ekranda kullanılmak için bakışı kadrajın soluna dönük bir **A2** gerekir.

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

İfade: açıkça şüpheci, abartılı ve okunaklı. Kameraya bakmıyor. Tek kaşı belirgin biçimde, alnına
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
eğilmiş, birini azarlıyor. Omuzları kalkık. Bakışı kameraya değil, kadrajın
soluna, azarladığı kişiye dönük.

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
kaçmış; kameraya bakmıyor. Dudakları kapalı, alt dudağını hafifçe ısırır gibi,
tutulmaya çalışılan bir gülümseme.

Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## A2 — Nötr, ekran için (bakış kadrajın soluna)

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı kırmızı manto,
aynı krem ipek bluz ve aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı
düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk
ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Poz ve ifade referansla aynı: bir eli mantonun yakasında, öteki belinde, kendinden
emin, dudakları kapalı, belli belirsiz bir gülümseme.

Değişen tek şey bakış: kameraya bakmıyor. Başı ve gözleri kadrajın soluna,
karşısında duran birine dönük. Burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında kalıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde:** dördü (A2, B2, C2, D2) yan yana: aynı kadın mı, aynı ölçek mi,
taslakta ifade değişince Peri zıplıyor mu.

## Sonuç — A2 (5 Ekim 2026)

Geldi; referans kopyası `kaynak/yeni_gorsel/deneme_peri_a2.webp`. Taslakta `normal`
ve `gulen` ifadeleri artık A2'yi gösteriyor; A yalnız referans.

| | sonuç |
|---|---|
| **Bakış** | **Tuttu.** Başı ve gözleri kadrajın soluna dönük; aynalanınca ekranda Cengo'ya bakıyor. |
| **Kadraj** | A ile birebir aynı ölçek, kesim ve baş yüksekliği; ifade değişince Peri zıplamıyor. |
| **Yüz** | Aynı kadın, yaşı korunmuş. |
| **Yazı** | Yok. |

Kalan: B2, C2, D2.

## Sonuç — B2 (5 Ekim 2026)

Geldi; referans kopyası `kaynak/yeni_gorsel/deneme_peri_b2.webp`. Taslakta `kas` → B2.

| | sonuç |
|---|---|
| **Poz** | **Tuttu.** Parmak çenede, el belde, baş hafif eğik. |
| **İfade** | **Tuttu.** Bir kaş belirgin biçimde kalkık, öteki çatık; tek yana kıvrık sırıtma. İlk B'deki yumuşaklık yok. |
| **Kadraj** | A2 ile aynı ölçek ve kesim. |
| **Bakış** | Kısmen. Burun kadrajın soluna (doğru), ama gözler kadrajın sağına kaymış; aynalanınca Cengo'ya değil hafifçe yana bakıyor. Şüpheci "yan göz" olarak okunabilir; sahibinin kararı. |

## B3 — Şüpheci, bakış düzeltmesi (5 Ekim 2026)

**Sahibinin kararı:** B2 yeniden üretilecek; yalnız bakış düzelecek. Poz ve ifade
B2'de tuttuğu için **referans olarak B2 verilir** (A değil): üretici sadece gözleri
değiştirsin. Üretici "düzenle / yalnız bir bölgeyi değiştir" seçeneği sunuyorsa
yalnız gözler seçilerek o yol kullanılır.

Ders (B2): "bakışı kadrajın soluna" tek başına yetmedi; burun sola döndü, gözbebekleri
sağa kaçtı. Bakış da burun-kulak geometrisi gibi **gözbebeğinin göz içindeki yeriyle**
tarif edilir.

```
Referans görselin AYNISI: aynı kadın, aynı yüz, aynı poz (işaret parmağı çenede,
öteki eli belinde, başı hafif eğik), aynı ifade (bir kaşı yukarıda, öteki çatık,
tek yana kıvrık kapalı dudaklı sırıtma), aynı kıyafet ve dekolte, aynı çizim tarzı,
aynı düz açık bej arka plan, aynı kadraj.

Değişen TEK şey gözbebekleri. İki gözde de gözbebekleri gözün kadrajın SOL tarafına
yakın köşesinde duruyor; gözlerin beyazı kadrajın sağ tarafında görünüyor. Bakışı,
kadrajın solunda, kendi boyunda biri duruyormuş gibi yatay ve o kişinin yüzünde.
Kameraya bakmıyor; kadrajın sağına bakmıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — B3 (5 Ekim 2026)

**Tutmadı.** Üretici B2'yi neredeyse aynen geri verdi (piksel farkı çok küçük;
gözbebekleri yine kadrajın sağında). Ders: referans olarak bitmiş görseli verip
"yalnız gözleri değiştir" demek, üreticiyi referansa kilitliyor; küçük bir ayrıntıyı
değiştirmiyor. Bölge düzenleme (inpainting) yoksa bu yol işe yaramaz.

**Denenen çözüm (taslakta):** B2 **aynalanmadan** kullanıldı. Ekranda başı Cengo'dan
hafif çevrik, gözleri ona kayıyor — şüpheci bir "yan göz". Bedeli: bu tek görselde
beden öteki ifadelerin aynası; el ve topuz tarafı değişiyor. Sahibinin kararı bekleniyor.

## B4 — Şüpheci, sıfırdan (5 Ekim 2026)

**Sahibinin kararı:** sıfırdan yeniden üretilecek.

**Referans: A2** (A değil). A2'de bakış tuttu, çünkü baş gerçekten kadrajın soluna
dönmüştü (üç çeyrek profil); B2'de yüz kameraya yakın kaldığı için gözler kaçtı.
Bakışı sağlamanın yolu gözbebeğini tarif etmekten önce **başı çevirmek.** A2'yi
referans vermek bu açıyı hazır getirir; poz ve ifade değişikliği büyük olduğu için
B3'teki kilitlenme beklenmez.

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı kırmızı manto,
aynı krem ipek bluz ve aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı
düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk
ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: bir eli belinde. Öteki elinin işaret parmağı çenesinde, düşünür gibi. Başı
hafifçe yana eğik. Ağırlığı tek bacağında.

İfade: açıkça şüpheci, abartılı ve okunaklı. Tek kaşı belirgin biçimde, alnına
doğru yukarı kalkmış; öteki kaşı yerinde ve hafif aşağıda çatık. Gözleri yarı
kısılmış. Bakışı başıyla aynı yönde: kadrajın soluna, karşısında kendi boyunda
duran birinin yüzüne. Gözbebekleri gözlerin kadrajın soluna yakın köşesinde.
Kameraya bakmıyor. Dudakları tek yana kıvrılmış, kapalı, "Ciddi misin?" der gibi
yarım bir sırıtma.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — B4 (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_peri_b4.webp`. Taslakta `kas` → B4
(aynalı, öteki ifadeler gibi); B2 ve aynasız deneme kaldırıldı.

| | sonuç |
|---|---|
| **Bakış** | Baş üç çeyrek profil, gözbebekleri kadrajın soluna; ekranda doğrudan Cengo'ya. |
| **İfade** | Bir kaş kalkık, öteki çatık, gözler kısık, yarım sırıtma. |
| **Poz / kadraj** | Parmak çenede, el belde; A2 ile aynı ölçek ve kesim. |

**Kural (yeni):** bakışı sağlamanın yolu önce **başı çevirmek.** Bakışı tutmuş bir
görseli (A2) referans vermek açıyı hazır getirir; yalnız gözbebeğini tarif etmek
yetmez. Bitmiş bir görseli referans verip yalnız küçük bir ayrıntıyı değiştirmeye
çalışmak (B3) üreticiyi referansa kilitler.

## C3 — Sinirli, A2 referanslı (5 Ekim 2026)

C2 metni üretilmeden B4 dersiyle güncellendi: **referans A2**, baş açısı korunur.

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı kırmızı manto,
aynı krem ipek bluz ve aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı
düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk
ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: iki eli de yumruk hâlinde belinde. Gövdesi ve başı hafifçe öne, kadrajın
soluna doğru eğilmiş; karşısındakini azarlıyor. Omuzları kalkık.

İfade: komedi öfkesi — abartılı, tiyatral, okunaklı. İki kaşı da aşağı ve içe
çatılmış, kaşlarının arasında derin bir kırışık. Gözleri kocaman açılmış, öfkeyle
parlıyor. Bakışı başıyla aynı yönde: kadrajın soluna, karşısında kendi boyunda
duran birinin yüzüne; gözbebekleri gözlerin kadrajın soluna yakın köşesinde.
Kameraya bakmıyor. Ağzı konuşurken açık, dişleri hafif görünüyor, tam bir
cümlenin ortasında. Burun kanatları açılmış. Yanaklarında hafif kızarıklık.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — C3 (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_peri_c3.webp`. Taslakta `sinirli` → C3.

| | sonuç |
|---|---|
| **Bakış** | Baş profil, gözler kadrajın soluna; ekranda doğrudan Cengo'ya. |
| **İfade** | Çatık kaş, açık gözler, konuşurken açık ağız: okunaklı komedi öfkesi. |
| **Poz** | Yumruklar belde, dirsekler açık. |

**Yerleştirmede bulunan sorun — ölçek zıplaması.** Görseller arka planı ayrıldıktan
sonra kendi sınırlarına göre kırpılıyordu. C3'te dirsekler dışarıda olduğu için görsel
daha genişti, ekranda küçülüyordu: ifade değişince Peri boyu değişiyordu.
**Düzeltme:** bütün Peri görselleri artık aynı sabit çerçeveyle kesiliyor (orijinalde
x 120–1034, tam yükseklik → 915×1402); kutu da o orana uyuyor. Dördü yan yana
denendi: baş yüksekliği ve boy aynı.

**Kural (yeni):** bir karakterin bütün ifadeleri **aynı sabit çerçeveyle** kesilir;
görsel kendi sınırına göre kırpılmaz. Bu, üretici aynı kadrajı verse bile pozun
genişliği değişince ölçeği korur.

## D3 — Utanmış, A2 referanslı (5 Ekim 2026)

D2 metni üretilmeden B4/C3 dersiyle güncellendi: **referans A2**, baş açısı korunur.
Bakış kuralı: utanmada bakış aşağı kayar ama yine kadrajın soluna (Cengo'nun yönüne).

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, olgun bir kadın; gençleştirilmemiş, yüzü yumuşatılmamış),
aynı saç ve topuz, aynı kırmızı manto, aynı krem ipek bluz ve aynı dekolte, aynı
altın küpeler, aynı çizim tarzı, aynı düz açık bej arka plan. Kadraj referansla
birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte,
dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Başı
hafifçe öne eğik.

Değişen şeyler poz ve ifade.

Poz: kadrajın soluna yakın eli, yüzünün yanına düşen saç tutamını kulağının arkasına
sıkıştırıyor. Öteki eli mantonun kuşağının düğümünü tutuyor. Omuzları hafif içe
dönük.

İfade: komedi utancı — yakalanmış ama gülmesini tutamayan biri. Yanakları belirgin
biçimde pembe. Kaşları ortada yukarı kalkmış. Gözleri aşağıya ve kadrajın soluna
kaçmış: gözbebekleri gözlerin kadrajın soluna ve aşağıya yakın köşesinde. Kameraya
bakmıyor. Dudakları kapalı, alt dudağını hafifçe ısırır gibi, tutulmaya çalışılan
bir gülümseme.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — D3 (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_peri_d3.webp`. Taslakta `utanmis` → D3.

| | sonuç |
|---|---|
| **Bakış** | Baş profil, öne eğik; gözler aşağı ve kadrajın soluna — ekranda Cengo'nun önünde bakışını kaçırıyor. |
| **İfade** | Pembe yanaklar, kalkık kaşlar, sıkılmış gülümseme. Gülmekten çok "mahcup/yüzünü buruşturan" tarafa yakın; komedi utancı olarak okunuyor. |
| **Poz** | Bir eli saçında, öteki kuşakta. |
| **Yüz** | Gençleşme yok (D'deki sorun giderildi). |
| **Kadraj** | Sabit çerçeveyle kesildi; dört ifade yan yana aynı boy. |

## PERİ TEMEL SETİ — TAMAM (5 Ekim 2026)

| ifade | görsel | taslakta |
|---|---|---|
| nötr / gülen | A2 | `normal`, `gulen` |
| şüpheci | B4 | `kas` |
| sinirli | C3 | `sinirli` |
| utanmış | D3 | `utanmis` |
| (referans, ekranda yok) | A | — |

**Yöntem (bundan sonraki her karakter seti için):**
1. Kameraya bakan bir referans (karakter kartı) üretilir.
2. Ondan, **başı konuşma yönüne çevrilmiş** bir nötr (A2) üretilir.
3. Bütün öteki ifadeler **A2 referansla**, "başın açısı referansla aynı" satırıyla üretilir.
4. İfade yüzün parça parça hareketiyle, abartı açıkça istenerek yazılır.
5. Arka plan ayrılır, bütün ifadeler **aynı sabit çerçeveyle** kesilir.


---

# CENGO — TEMEL SET (5 Ekim 2026)

Görünüş: Ton belgesi §3 "Cengo'nun görünüşü". Yöntem: Peri temel setindeki 5 adım.
Cengo ekranın **sağında** durur ve **aynalanmaz**; ekran görsellerinde başı ve bakışı
**kadrajın soluna** (Peri'ye) dönüktür.

## CA — Referans (karakter kartı, kameraya bakar)

Peri A ile **aynı üretici ve aynı stil satırı.** Mümkünse Peri A2'yi **stil referansı**
olarak ver (yalnız çizim tarzı ve arka plan için; yüz için değil).

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı ve arka plan içindir; içindeki kadın bu
görselde yok.)

Karakter: Cengo, 34 yaşında, İstanbullu bir adam. Uzun boylu, rahat, kendinden
fazlasıyla memnun bir duruş; omuzları gevşek. Siyah, dağınık, hafif kıvırcık
saçları, alnına bir tutam düşüyor. İki üç günlük sakal. Kalın kaşlar, koyu kahve
gözler, hafif esmer ten. Gözlerinin kenarında gülme çizgileri; yüzünde hınzır bir
yarım gülümseme. Yakışıklı ama bakımsız; kendine yakışmış bir dağınıklık.

Kıyafet: bitpazarından alınmış, ona bir beden büyük, buruşuk, açık kahverengi
bir takım ceketi; kolları dirseğe kadar sıvalı. Altında beyaz gömlek, üst iki
düğmesi açık, yakası yamuk. Takımın pantolonu değil, koyu mavi kot pantolon.
Koyu bordo, düz renk bir kravat boynunda değil: kıvrılmış, ucu ceketin yan
cebinden sarkıyor. Ceketin göğüs cebinden ince, gümüş renkli bir telin ucu
görünüyor. Bir bileğinde renkli, ucuz, plastik boncuklardan elle yapılmış bir
bileklik; boncuklar düz renkli, üzerlerinde harf ya da sembol yok. Kol saati yok.
Başka takı yok.

Poz: bir eli kotunun cebinde. Öteki kolu gevşekçe yanında, bileklik açıkça
görünüyor.

İfade: hınzır, kendinden emin yarım gülümseme; dudakları kapalı, bir köşesi
yukarıda. Kameraya bakıyor.

Kadraj: DİKEY. Uyluk ortasından yukarısı, tek başına, ayakta. Gövdesi hafif yana
dönük.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok. (Karakter
sonradan sahnelerin önüne yerleştirilecek.)

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** yaş (34 mü, gençleşmiş mi), stil Peri'yle aynı mı,
kravat boyunda mı (olmamalı), bileklikte harf var mı, tel görünüyor mu, ceket
takım ceketi mi (spor ceket ya da deri değil).

## Sonuç — CA (5 Ekim 2026)

Geldi; referans kopyası `kaynak/yeni_gorsel/deneme_cengo_ca.webp`. Taslakta şimdilik
bütün Cengo ifadeleri CA'yı gösteriyor (yer tutucu çizim kalktı).

| | sonuç |
|---|---|
| **Kıyafet** | **Tuttu.** Buruşuk açık kahve ceket, sıvalı kollar, beyaz gömlek, koyu kot; kravat boyunda değil, yan cepten sarkıyor; göğüs cebinde tel; bileklik renkli, **harfsiz**. Kol saati yok. |
| **Yüz** | Dağınık kıvırcık siyah saç, kısa sakal, hınzır yarım gülümseme; 30–34 arası okunuyor. |
| **Stil** | Peri'den biraz daha "boyalı" (fırça dokusu belirgin), ama yan yana uyumlu. |
| **Gömlek** | İstenen "üst iki düğme" yerine yarıya kadar açık, göğüs görünüyor. Peri'nin dekoltesiyle dengeli duruyor; sahibinin kararı. |
| **Kadraj** | Peri'yle aynı ölçek. Cengo'yu Peri'den yarım baş uzun göstermek için taslakta kutusu %5 büyük. |
| **Kesim** | Beyaz gömlek arka plana çok yakın renk; "kapalı boşluk" temizliği gömleği siliyordu. Cengo için o adım kapalı. **Kural:** arka plana yakın renkli giysi varsa boşluk temizliği kapatılır, kesim gözle kontrol edilir. |

Sıradaki: **CA2** — başı kadrajın soluna (Peri'ye) dönük nötr; ondan sonra kaşı
kalkık, gülen, yumuşak.

**Gömlek (sahibinin kararı, 5 Ekim 2026):** CA'daki açıklıkta kalıyor; bütün Cengo
setinde aynı.

## CA2 — Nötr, ekran için (başı Peri'ye dönük)

**Referans: CA.** Peri A2'nin karşılığı: poz ve ifade aynı, yalnız baş ve bakış
kadrajın soluna (ekranda Peri'ye) döner. Cengo aynalanmaz.

```
Referans görseldeki adamın AYNISI: aynı yüz (34 yaşında, gözlerinin kenarında
gülme çizgileri, gençleştirilmemiş), aynı dağınık siyah saç, aynı kısa sakal, aynı
açık kahverengi buruşuk ceket ve sıvalı kolları, aynı beyaz gömlek ve gömleğin aynı
açıklığı, aynı koyu kot, cebinden sarkan aynı bordo kravat, göğüs cebinde aynı tel,
bileğinde aynı renkli boncuklu bileklik, aynı çizim tarzı, aynı düz açık bej arka
plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın
tepesi aynı yükseklikte, dikey.

Poz ve ifade referansla aynı: bir eli kotunun cebinde, öteki kolu gevşekçe yanında,
hınzır, kendinden emin yarım gülümseme.

Değişen tek şey baş ve bakış: kameraya bakmıyor. Başı kadrajın soluna dönük, yüzü
üç çeyrek profilden görünüyor; burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında kalıyor. Gözleri de başıyla aynı yönde: kadrajın solunda, kendinden biraz
kısa biri duruyormuş gibi, o kişinin yüzüne hafif aşağı bakıyor. Gözbebekleri
gözlerin kadrajın soluna yakın köşesinde.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — CA2 (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_cengo_ca2.webp`. Taslakta şimdilik
bütün Cengo ifadeleri CA2; CA yalnız referans.

| | sonuç |
|---|---|
| **Bakış** | Baş profil, gözler kadrajın soluna ve hafif aşağı; ekranda doğrudan Peri'nin yüzüne. İkisi ilk kez birbirine bakıyor. |
| **Gövde / kıyafet** | CA ile birebir (kravat, tel, bileklik, gömlek açıklığı). |
| **Kadraj** | CA ile aynı. |

**Taslakta düzeltme:** figürler üst üste bindiğinde artık **konuşan önde** duruyor
(Cengo konuşurken Peri'nin koluna binmiyordu, şimdi sıra konuşana göre).

Sıradaki: Cengo **kaşı kalkık**, **gülen**, **yumuşak** — üçü de CA2 referansla.

## CC — Gülen (CA2 referanslı, 5 Ekim 2026)

Vaka 1'de Cengo'nun en çok kullandığı ifade (14 replik): esprisini yapmış, keyfi
yerinde. Komedi ifadesi; abartılı ama sevimli, alaycı değil.

```
Referans görseldeki adamın AYNISI: aynı yüz (34 yaşında, gözlerinin kenarında
gülme çizgileri, gençleştirilmemiş), aynı dağınık siyah saç, aynı kısa sakal, aynı
açık kahverengi buruşuk ceket ve sıvalı kolları, aynı beyaz gömlek ve gömleğin aynı
açıklığı, aynı koyu kot, cebinden sarkan aynı bordo kravat, göğüs cebinde aynı tel,
bileğinde aynı renkli boncuklu bileklik, aynı çizim tarzı, aynı düz açık bej arka
plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın
tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: bir eli hâlâ kotunun cebinde. Öteki eli kaldırmış, avucu açık ve yukarı, omuz
hizasında, "Ne yapayım, ben böyleyim" der gibi. Omuzları gevşek, başı hafifçe
geriye yatık.

İfade: geniş, keyifli, hınzır bir sırıtma; espriyi yapmış ve kendinden çok memnun.
Ağzı açık gülüyor, üst dişleri görünüyor. Gözleri gülmekten kısılmış, kenarlarında
belirgin kırışıklar. Kaşları rahat, hafif yukarıda. Bakışı başıyla aynı yönde:
kadrajın solunda kendinden biraz kısa birinin yüzüne; gözbebekleri gözlerin
kadrajın soluna yakın köşesinde. Kameraya bakmıyor. Alaycı değil, sevimli.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — CC (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_cengo_cc.webp`. Taslakta `gulen` → CC.

| | sonuç |
|---|---|
| **İfade** | Geniş, keyifli sırıtma, kısılmış gözler; sevimli, alaycı değil. |
| **Poz** | Avuç açık, omuz hizasında ("ben böyleyim"); öteki el cepte. |
| **Bakış** | Baş profil, Peri'ye. |

**Yerleştirmede bulunan iki sorun:**
1. **Kalkan el çerçeveden taşıyordu.** Cengo'nun sabit çerçevesi Peri'ninkiyle aynıydı
   (x 104–1018); CC'de el x≈30'a uzanıyor. Cengo'nun çerçevesi **x 10–1111** yapıldı ve
   CA2 de yeniden kesildi. **Kural:** sabit çerçeve, o karakterin en geniş pozunu
   kapsayacak kadar geniş seçilir; yeni bir poz taşarsa bütün set yeniden kesilir.
2. **El Peri'nin yüzüne değiyordu.** Figürler fazla iç içeydi. Cengo sağa alındı; omzu
   ekranın sağ kenarından hafifçe taşıyor (kabul).

Kalan: **kaşı kalkık**, **yumuşak**.

## CK — Kaşı kalkık (CA2 referanslı, 5 Ekim 2026)

Vaka 1'de 6 replik: "Nazlı kim?", "Hiç denediniz mi?", "Benim maaşım da onda mı?" —
merak ve takılma; Peri'yi tartıyor. Peri'nin şüpheci pozundan (parmak çenede) ayrışsın
diye **kollar kavuşturulmuş.** Eller gövdeye yakın; sabit çerçeveden taşmaz.

```
Referans görseldeki adamın AYNISI: aynı yüz (34 yaşında, gözlerinin kenarında
gülme çizgileri, gençleştirilmemiş), aynı dağınık siyah saç, aynı kısa sakal, aynı
açık kahverengi buruşuk ceket ve sıvalı kolları, aynı beyaz gömlek ve gömleğin aynı
açıklığı, aynı koyu kot, cebinden sarkan aynı bordo kravat, göğüs cebinde aynı tel,
bileğinde aynı renkli boncuklu bileklik, aynı çizim tarzı, aynı düz açık bej arka
plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın
tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: kollarını göğsünün önünde gevşekçe kavuşturmuş; bileklikli eli dirseğinin
üstünde, bileklik görünüyor. Ağırlığı tek bacağında, başı hafifçe yana ve öne
eğik, karşısındakini süzüyor. Eller ve dirsekler gövdeye yakın.

İfade: meraklı, takılan, "Öyle mi?" diyen bir bakış. Tek kaşı belirgin biçimde,
alnına doğru yukarı kalkmış; öteki kaşı yerinde. Gözleri hafif kısık, eğlenen
bir dikkatle. Dudakları kapalı, bir köşesi yukarıda, yarım bir sırıtma. Bakışı
başıyla aynı yönde: kadrajın solunda kendinden biraz kısa birinin yüzüne;
gözbebekleri gözlerin kadrajın soluna yakın köşesinde. Kameraya bakmıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — CK (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_cengo_ck.webp`. Taslakta `kas` → CK.

| | sonuç |
|---|---|
| **İfade** | Tek kaş kalkık, yarım sırıtma, eğlenen dikkat — "Öyle mi?". |
| **Poz** | Kollar kavuşturulmuş, bileklik görünüyor; eller gövdede, çerçeveden taşmıyor. |
| **Bakış** | Baş profil, hafif aşağı; ekranda Peri'nin yüzüne. "Kibarca ama." repliğinde sinirli Peri'ye karşı çok iyi oturuyor. |

Kalan: **yumuşak** (Cengo temel setinin son ifadesi).

## CY — Yumuşak (CA2 referanslı, 5 Ekim 2026)

Cengo'nun ilk gülmediği an: kapanıştaki tel sahnesi ("Biliyorum. Cebinizde dursun."),
sezon boyunca "elektrik" anları. Sırıtma yok, şaka yok; sıcak ve sade. Peri'ye
**doğrudan** bakar (utanma gibi kaçan bakış değil). Poz genel olmalı (her elektrik
anında kullanılacak), sahneye özel nesne tutmaz.

```
Referans görseldeki adamın AYNISI: aynı yüz (34 yaşında, gözlerinin kenarında
gülme çizgileri, gençleştirilmemiş), aynı dağınık siyah saç, aynı kısa sakal, aynı
açık kahverengi buruşuk ceket ve sıvalı kolları, aynı beyaz gömlek ve gömleğin aynı
açıklığı, aynı koyu kot, cebinden sarkan aynı bordo kravat, göğüs cebinde aynı tel,
bileğinde aynı renkli boncuklu bileklik, aynı çizim tarzı, aynı düz açık bej arka
plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın
tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: iki eli de kotunun ön ceplerinde, başparmakları dışarıda. Omuzları hafif
düşük, rahat; gövdesi hafifçe kadrajın soluna, karşısındakine doğru dönük. Başı
çok hafif öne eğik.

İfade: ciddi, sıcak, sade. Sırıtmıyor, şaka yapmıyor. Kaşları rahat, iç uçları
çok hafif yukarıda. Gözleri yumuşak ve dikkatli, kısık değil. Dudakları kapalı,
belli belirsiz, içten bir tebessüm; ağız köşelerinden biri değil, ikisi de hafifçe
yukarıda. Bakışı başıyla aynı yönde ve doğrudan: kadrajın solunda kendinden biraz
kısa birinin gözlerine; gözbebekleri gözlerin kadrajın soluna yakın köşesinde.
Kameraya bakmıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — CY (5 Ekim 2026)

**Tuttu.** Referans kopyası `kaynak/yeni_gorsel/deneme_cengo_cy.webp`. Taslakta yeni
`yumusak` ifadesi → CY.

| | sonuç |
|---|---|
| **İfade** | Sırıtma yok; sıcak, sade, belli belirsiz tebessüm. Diğer dört ifadeden açıkça ayrılıyor. |
| **Poz** | İki el ön ceplerde, omuzlar rahat; nesne yok, her elektrik anında kullanılabilir. |
| **Bakış** | Peri'ye doğrudan. |

Taslağa üçüncü sahne eklendi: **Vaka 1 kapanışı (ilk kıvılcım)**, "Büro · akşam"
(yer tutucu büronun koyulaştırılmış hâli). CY ilk kez burada görünüyor.

## CENGO TEMEL SETİ — TAMAM (5 Ekim 2026)

| ifade | görsel | taslakta |
|---|---|---|
| nötr | CA2 | `normal` |
| gülen | CC | `gulen` |
| kaşı kalkık | CK | `kas` |
| yumuşak | CY | `yumusak` |
| (referans, ekranda yok) | CA | — |

Sabit kesim çerçevesi: orijinalde x 10–1111, tam yükseklik (1102×1402). Arka plana
yakın beyaz gömlek yüzünden "kapalı boşluk" temizliği kapalı.

**İki karakterin temel seti tamamlandı.** Vaka 1 görsel planında kalan: Cengo'nun
4 ifadesi ✓ — sırada arka planlar (14), detaylar (3), ara kareler (7), figürler (8).

---

# ARKA PLANLAR — VAKA 1

**Ortak kurallar (her arka plan):**
- Aynı stil satırı (karakterlerle aynı üretici). Karakter görseli stil referansı
  verilirse "yalnız çizim tarzı; içinde insan çizme" denir.
- **Dikey, 3:4.** Telefonda sahne alanı dikey; karakterler alt %80'e oturur.
- **İnsan yok.** Karakterler sonradan önüne konacak.
- **Kamera göz hizasında, ayakta duran birinin boyunda**; ön plandaki zemin boş ve
  sakin (karakterler oraya basacak), ilgi çekici ayrıntılar üst yarıda ve kenarlarda.
- **Nesneler tek tek sayılır;** yazı taşıyabilecek her yüz kapalı ya da boş tarif
  edilir; "başka nesne yok" denir.
- Aynı mekânın öteki açıları (A7 pencere tarafı, A8 akşam) bu görsel **referans
  verilerek** üretilir.

## A6 — Büro, gündüz, geniş açı (★, sezon boyu)

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman arka planı. Belirgin, temiz
kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi
afişi ile modern çizgi roman arası bir tarz. Anime değil, fotoğraf değil.
(Referans görsel varsa yalnız çizim tarzı içindir; bu görselde hiç insan yok.)

Mekân: İstanbul Karaköy'de, eski bir taş hanın üçüncü katında, yıllardır kimsenin
kullanmadığı küçük bir dedektiflik bürosu. Sabah, güneşli bir gün. Yüksek tavan,
sıvası yer yer dökülmüş krem rengi duvarlar, eski ahşap döşeme.

Kadraj: DİKEY (3:4). Kamera göz hizasında, odanın kapısından içeri bakıyor.
Görselin alt üçte biri boş, sakin bir ahşap zemin: orada hiçbir nesne yok.

Odada YALNIZ şunlar var:
1. Arka duvarın ortasında, üst yarıda, uzun ve kemerli tek bir pencere; ahşap
   çerçeveli, camı tozlu. Pencereden Karaköy iskelesi, Haliç'in mavi suyu, beyaz
   bir şehir hatları vapuru ve karşı kıyıda tarihi yarımadanın kubbeli silueti
   görünüyor. Camda hiçbir yazı yok.
2. Pencerenin önünde, yan yana iki eski ahşap masa; üstleri çizik ve tozlu. Masaların
   üstünde yalnızca bir masa lambası ve kapağı kapalı, boş bir karton kutu.
3. Her masanın arkasında birer eski ahşap sandalye.
4. Sol duvarda, kapakları kapalı, etiketsiz, gri metal bir dosya dolabı.
5. Sağ duvarda boş bir ayaklı askılık.
6. Sağ duvarda, bir zamanlar orada asılı duran bir çerçevenin bıraktığı soluk,
   dikdörtgen bir iz (çerçevenin kendisi yok).
7. Pencerenin altında eski, döküm bir kalorifer peteği.
8. Pencereden giren güneş ışığında havada süzülen toz zerrecikleri.

Başka hiçbir nesne yok: kâğıt, defter, kitap, gazete, takvim, tabela, poster,
ekran, telefon, saat yok.

Işık: sabah güneşi pencereden giriyor, zeminde sıcak bir ışık dikdörtgeni; odanın
köşeleri hafif gölgede. Hava: terk edilmiş ama umut veren, sıcak.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** alt üçte bir gerçekten boş mu (karakterler oraya
basacak), pencere ve manzara okunuyor mu, yazı taraması (dolap, kutu, cam, manzarada
vapur ve tabelalar), stil karakterlerle uyumlu mu, insan var mı.

## Sonuç — A6 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a6_buro_gunduz.webp` (900 px, WebP q80). Taslakta
"Büro · sabah" artık A6; "Büro · akşam" A8 gelene kadar A6'nın koyulaştırılmış hâli.

| | sonuç |
|---|---|
| **Kompozisyon** | Kapı aralığından içeri bakış (solda kapı kanadı ve tokmak); kemerli pencere, iki masa, dolap, askılık, petek, duvarda çerçeve izi — sayılan nesnelerin hepsi var, fazlası yok. |
| **Alt üçte bir** | Boş, güneş ışığı vuran ahşap zemin; karakterler oraya oturuyor. |
| **Manzara** | Haliç, şehir hatları vapuru, tarihi yarımada siluetinde kubbeli cami ve minareler. |
| **Yazı** | Yok (dolap, kutu, cam, vapur büyütülerek tarandı). |
| **Stil** | Karakterlerden biraz daha fotoğrafa yakın, alan derinliği var; karakterlerle yan yana uyumlu. |

Taslakta akşam sahnesinde karakterler arka plandan aydınlık kalıyor; A8 (gerçek akşam
ışığı) üretilince ve figürlere akşam tonu verilince düzelecek.

## A7 — Büro, pencere tarafı (A6 referanslı, sezon boyu)

Konuşmada açı değişimi için: aynı oda, kamera pencereye yaklaşmış. **A6'yı referans
olarak ekle** — oda, pencere, masalar ve ışık aynı kalmalı.

```
Referans görseldeki odanın AYNISI, aynı çizim tarzı, aynı renkler, aynı sabah ışığı.
Bu görselde hiç insan yok.

Kadraj: DİKEY (3:4). Kamera göz hizasında, odanın ortasına ilerlemiş, kemerli
pencereye doğru bakıyor; pencere kadrajın üst yarısını kaplıyor. Kamera hafifçe
sağa dönük: pencere kadrajın biraz soluna düşüyor.
Görselin alt üçte biri boş, sakin bir ahşap zemin ve güneş ışığı: orada hiçbir
nesne yok.

Kadrajda YALNIZ şunlar var:
1. Referanstaki kemerli ahşap pencere, yakından; camı tozlu, camda hiçbir yazı yok.
   Pencereden aşağıda Karaköy iskelesi, iskeleye yanaşmış beyaz bir şehir hatları
   vapuru, Haliç'in mavi suyu, martılar ve karşı kıyıda tarihi yarımadanın kubbeli,
   minareli silueti. İskelede uzaktan, küçük, yüzü seçilmeyen birkaç insan silueti
   olabilir.
2. Referanstaki iki ahşap masanın yalnız pencereye yakın uçları, kadrajın alt
   yarısının kenarlarında; üstlerinde yalnız masa lambası.
3. Pencerenin altındaki döküm kalorifer peteği.
4. Güneş ışığında süzülen toz zerrecikleri.

Başka hiçbir nesne yok: kâğıt, defter, kitap, gazete, takvim, tabela, poster,
ekran, telefon, saat yok. İskelede ve vapurda tabela, ad ya da yazı yok.

Işık: sabah güneşi doğrudan pencereden giriyor, hafif ters ışık; zeminde sıcak
ışık. Hava: sıcak, umut veren.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** A6 ile aynı oda gibi mi (pencere biçimi, masa rengi,
duvar), alt üçte bir boş mu, vapur/iskele yazı taraması, iskele figürleri yüzsüz ve
küçük mü.

## Sonuç — A7 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a7_buro_pencere.webp`. Taslakta Cengo
"Karaköy'de bir balıkçı" derken açı A7'ye geçiyor (satıra `arka:` alanı eklendi —
konuşmanın ortasında açı değişimi artık mümkün).

| | sonuç |
|---|---|
| **Uyum** | A6 ile aynı oda: kemerli ahşap pencere, dökük sıva, çizik masalar, petek, aynı ahşap zemin. |
| **Kadraj** | Pencere ortada (istenen hafif sağa dönüş tutmadı); sorun değil, iki figür pencerenin iki yanına düşüyor. |
| **Alt üçte bir** | Boş, pencere gölgeli güneş ışığı. |
| **Manzara** | Ayasofya silueti, minareler, iskeleye yanaşmış vapur, martılar, iskelede yüzsüz küçük figürler. |
| **Yazı** | Yok (vapur gövdesindeki kırmızı lekeler süs, harf değil; kıyı büyütülerek tarandı). |

## A8 — Büro, akşam (A6 referanslı, ★ kapanış)

Vaka sonu tel sahnesi burada geçer. **A6'yı referans olarak ekle** — aynı oda, aynı
kadraj; değişen yalnız saat ve ışık.

```
Referans görseldeki odanın AYNISI, AYNI KADRAJ, aynı çizim tarzı. Bu görselde hiç
insan yok. Değişen yalnız saat: akşam, güneş batmış, hava lacivert.

Kadraj: DİKEY (3:4). Kamera göz hizasında, referanstaki gibi kapıdan içeri bakıyor.
Görselin alt üçte biri boş, sakin bir ahşap zemin: orada hiçbir nesne yok.

Odada YALNIZ referanstaki nesneler var: kemerli pencere, iki ahşap masa, iki sandalye,
gri metal dosya dolabı (kapakları kapalı, etiketsiz), boş ayaklı askılık, duvarda
çerçeve izi, kalorifer peteği. Masalardan birinin üstünde masa lambası YANIYOR ve
yanında kapağı kapalı karton kutu.

Pencereden: lacivert akşam göğü, ufukta son turuncu çizgi; Haliç'in koyu suyunda
ışıkların yansıması; Karaköy iskelesinin sarı ışıkları; ışıkları yanan bir şehir
hatları vapuru; karşı kıyıda tarihi yarımadanın aydınlatılmış kubbeli, minareli
silueti. Camda hiçbir yazı yok.

Işık: odayı yalnız masa lambasının sıcak sarı ışığı aydınlatıyor, lambanın çevresinde
sıcak bir ışık havuzu; odanın geri kalanı pencereden gelen soğuk mavi akşam ışığında,
köşeler karanlık. Zemine lambanın ve pencerenin ışığı düşüyor. Hava: sessiz, yorgun,
sıcak; bir günün bittiği an.

Başka hiçbir nesne yok: kâğıt, defter, kitap, gazete, takvim, tabela, poster, ekran,
telefon, saat, bardak yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** A6 ile aynı kadraj mı (üst üste konunca nesneler
örtüşüyor mu), alt üçte bir boş mu ve karakterler okunacak kadar aydınlık mı, yazı
taraması (vapur, iskele ışıkları), lamba sıcak / pencere soğuk ayrımı var mı.

## Sonuç — A8 (5 Ekim 2026)

**Tuttu, çok iyi.** Kopya `kaynak/yeni_gorsel/arka_a8_buro_aksam.webp`. A6 ile yan yana
konunca kapı, dolap, masalar, askılık, pencere ve çerçeve izi neredeyse birebir
örtüşüyor; yalnız kutu lambanın yanına geçmiş (prompt öyle istedi). Lamba sıcak,
pencere soğuk ayrımı tuttu; alt üçte bir boş, zeminde lamba yansıması.
**Yazı yok** — dolap çekmecelerindeki etiket çerçeveleri boş, vapur ve kıyı ışık
lekesi. Stil A6'dan biraz daha fotoğrafa yakın; akşam karanlığında fark edilmiyor.

Taslakta akşam sahnesinde figürlere lamba tonu veriliyor (`.figurler.aksam`:
`brightness(.8) sepia(.18)`, konuşmayan için daha koyu). Gerçek oyunda da arka planın
`aksam` bayrağı figür tonunu seçmeli; yoksa karakterler karanlık odada sahne ışığında
duruyor gibi görünür.

## A5 — Hanın üçüncü kat koridoru, büro kapısı (★, sezon boyu)

Açılış S3: Peri anahtarı deniyor, Cengo arkasından çıkıyor. **Stil referansı olarak A6
eklenebilir** (yalnız çizim tarzı ve renk için; başka mekân).

Tuzak: kanonda kapıda **soluk bir tabela** var ve yüzü görünmemeli. Boş tabela istemek
üreticiye yazı yazdırır; o yüzden tabela **kenarından** görünür: kamera koridor
boyunca bakar, kapı yan duvarda, perspektifte daralmış durur.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman arka planı. Belirgin, temiz
kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi
afişi ile modern çizgi roman arası bir tarz. Anime değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı ve renk içindir; bu başka bir mekân ve görselde
hiç insan yok.)

Mekân: İstanbul Karaköy'de, 19. yüzyıldan kalma eski bir taş hanın üçüncü katındaki
koridor. Öğleden sonra. Yüksek tavan, yer yer sıvası dökülmüş krem rengi duvarlar,
eski siyah-beyaz karo zemin, aşınmış.

Kadraj: DİKEY (3:4). Kamera göz hizasında, koridorun bir ucunda durup koridor boyunca
ileri bakıyor; koridor perspektifle uzaklaşıyor. Görselin alt üçte biri boş, sakin
bir karo zemin: orada hiçbir nesne yok.

Kadrajda YALNIZ şunlar var:
1. Sağ duvarda, yakında, koyu ahşap, çift kanatlı değil tek kanatlı eski bir kapı;
   kapalı, pirinç tokmaklı, pirinç kilitli. Kapıya çok yandan bakıyoruz, kapı
   perspektifte daralmış görünüyor.
2. Bu kapının üstünde, duvardan dik çıkan küçük pirinç bir tabela; kamera ona tam
   yandan baktığı için tabelanın YALNIZ İNCE KENARI görünüyor, yüzü hiç görünmüyor.
3. Koridorun dibinde, uzakta, kemerli tek bir pencere; içeri sıcak, tozlu bir öğleden
   sonra ışığı giriyor. Pencereden yalnız gökyüzü ve ışık görünüyor.
4. Sol duvarda, uzakta, kapalı iki ahşap kapı daha; üzerlerinde tabela, numara ya da
   yazı YOK.
5. Tavandan sarkan, sönük, eski bir cam abajurlu lamba.
6. Pencereden gelen ışık huzmesinde süzülen toz zerrecikleri.

Başka hiçbir nesne yok: ilan, afiş, levha, posta kutusu, zil paneli, kâğıt, saat,
paspas, saksı yok.

Işık: koridorun dibindeki pencereden gelen sıcak, altın renkli ışık; yakın taraf
hafif loş. Hava: eski, unutulmuş, ama gizemli ve davetkâr.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** tabelanın yüzü görünüyor mu (görünüyorsa yazı taraması
ve gerekirse yeniden üretim), öteki kapılarda numara var mı, alt üçte bir boş mu,
stil A6 ile uyumlu mu, kapı karakterlerin arkasında okunuyor mu.

## Sonuç — A5 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a5_koridor.webp`. Taslakta koridor sahnesi
artık A5; mekân adı "Apartman koridoru" yerine **"Han · koridor"** (kanon: han).

| | sonuç |
|---|---|
| **Tabela** | Duvardan dik çıkan yuvarlak pirinç tabela, tam yandan; yüzü hiç görünmüyor. Kenardan gösterme hilesi tuttu — yüzü kanonda olup görünmemesi gereken her levhada aynısı kullanılır. |
| **Kapılar** | Sağda büro kapısı (pirinç halka tokmak, kilit), solda iki kapı; numara, yazı yok. Kapının üstündeki camlı tepelik karanlık, yazısız. |
| **Alt üçte bir** | Boş, güneşli siyah-beyaz karo (verev döşenmiş). |
| **Stil** | Tonozlu tavanıyla beklenenden görkemli, A6 gibi biraz fotoğrafa yakın; Karaköy hanlarıyla çelişmiyor. |

Not: büro kapısı sağ kenarda olduğundan Cengo'nun arkasında kalıyor; üst yarısı ve
tokmağı görünüyor, yeterli. "Kapı açılıyor" anı zaten D1 detay karesiyle verilecek.

## A1 — Peri'nin salonu, haciz sabahı, geniş açı (★)

Açılış S1. A2 (ters açı, avize) ve A3 (boşalmış salon) **bu görsel referans verilerek**
üretilecek. Stil referansı olarak A6 eklenebilir.

Kanondan: Nişantaşı, yüksek tavanlı daire; haciz sürüyor; koltuk, avize ve kırmızı
manto sahnede. Taç kadraja girmez (bir kolinin içinde, kapalı). Duvarlardaki
tablolar zaten indirilmiş — fotoğraf çerçevesi Peri'nin yüzünü gösterirdi, Nurcan
ve tutarlılık için hiç çerçeve yok.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman arka planı. Belirgin, temiz
kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi
afişi ile modern çizgi roman arası bir tarz. Anime değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı ve renk içindir; bu başka bir mekân ve görselde
hiç insan yok.)

Mekân: İstanbul Nişantaşı'nda, eski ve gösterişli bir apartman dairesinin salonu.
Sabah. Çok yüksek tavan, tavanda alçı süslemeler, krem rengi duvarlar, balıkçılsırtı
parke. Bir zamanlar çok şık bir salon; şimdi eşyaları haczediliyor, yarısı
toplanmış.

Kadraj: DİKEY (3:4). Kamera göz hizasında, salonun bir köşesinden odaya bakıyor.
Görselin alt üçte biri boş parke zemin: orada hiçbir nesne yok.

Salonda YALNIZ şunlar var:
1. Arka duvarda, iki uzun, yüksek pencere; ince tül perdeler; pencerelerden karşıdaki
   eski taş apartmanın cephesi ve sabah ışığı görünüyor. Cephede tabela, yazı yok.
2. Tavanın ortasından sarkan büyük, kristal damlalı, gösterişli bir avize.
3. Bordo kadife, oymalı ahşap ayaklı, eski tarz büyük bir koltuk; odanın ortasında
   biraz çapraz durmuş, sanki taşınmak üzere.
4. Sol duvar dibinde üst üste yığılmış altı yedi karton koli; hepsi kapalı, düz
   kahverengi, bantlı; üzerlerinde hiçbir yazı, etiket, işaret yok.
5. Sağda, üstüne beyaz bir örtü atılmış, şekli belli olmayan büyük bir mobilya.
6. Sağ duvarda, tabloların indirildiği yerlerde duvarda kalmış iki üç açık renkli
   dikdörtgen iz ve boş çiviler (çerçevelerin kendisi yok).
7. Kapı kenarında ayaklı ahşap bir askılık; askıda tek bir şey var: kırmızı, kuşaklı,
   uzun bir kadın mantosu.
8. Parkede, mobilyaların sürüklendiği yerlerde hafif çizik izleri.

Başka hiçbir nesne yok: kâğıt, liste, kitap, gazete, takvim, fotoğraf, çerçeve, tablo,
ayna, ekran, telefon, saat, taç, kupa yok.

Işık: sabah güneşi tüllerden süzülüp parkeye düşüyor, avizenin kristallerinde
parıltılar. Hava: zarif ama dağılmakta; hüzünlü değil, biraz komik bir karmaşa.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kolilerde yazı/etiket var mı (en büyük risk), karşı
cephede tabela var mı, duvarda çerçeve ya da fotoğraf var mı, manto askıda ve kırmızı
mı (Peri'nin mantosuyla renk uyumu), alt üçte bir boş mu.

## Sonuç — A1 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a1_salon_haciz.webp`. Sayılan sekiz nesnenin
hepsi var, fazlası yok: iki yüksek pencere ve tül, kristal avize, bordo kadife oymalı
kanepe (koltuk kanepe olarak çizildi; Türkçede "koltuk" ikisini de karşılar, kalabilir),
yedi düz koli, örtülü mobilya, duvarda tablo izleri ve boş çiviler, askıda kırmızı manto.
**Yazı yok** — koliler yalnız bantlı, cephe ve tavan süsleri büyütülerek tarandı.
Alt üçte bir boş balıkçılsırtı parke.

Küçük not: karşı cephenin mavi mansart çatısı Paris'e kayıyor; Nişantaşı'nda benzer
binalar var, kalabilir. A2/A3 üretilirken düzeltilecek bir şey değil — referans bu.

**Açık süreklilik sorusu:** askıdaki manto, Peri sprite'ının üstündeki mantonun aynısı.
S1–S2'de Peri mantoyu henüz giymemiş olmalı (S2 sonunda giyer: "Üstümde."). **Karar:
mantosuz set** (aşağıda, PM2/PMK/PMS/PMU).

---

# PERİ — MANTOSUZ SET (açılış S1–S2, 5 Ekim 2026)

**Sahibinin kararı:** haciz sahnelerinde Peri mantosuz görünür; S2'de "Üstümde."
dediği anda mevcut (mantolu) sete geçilir. Askıdaki manto A1'de zaten duruyor.

Dört ifade: S1–S2'de geçen `normal`, `kas`, `sinirli`, `utanmis`. Yöntem temel setle
aynı: önce **PM2** (nötr, A2 referanslı), sonra üçü **PM2 referanslı**. Kesim çerçevesi
temel setle aynı (x 120–1034), yoksa manto giyilince Peri ekranda zıplar.

**Dekolte kuralı:** krem ipek bluz ve dekolte temel setteki ayarda, azalmaz. Manto
kalkınca bluz daha görünür olur; dekolte büyütülmez de — "aynı dekolte" denir.

## PM2 — Nötr, mantosuz (A2 referanslı)

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı krem ipek bluz ve
aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı düz açık bej arka plan.
Kadraj referansla birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın tepesi
aynı yükseklikte, dikey.

Başın açısı ve bakış referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek
profilden görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.
Kameraya bakmıyor.

Değişen tek şey kıyafet: KIRMIZI MANTO YOK. Üstünde yalnız krem rengi ipek bluz,
kolları bileğe kadar, önü referanstaki gibi açık; bluz beline sokulmuş. Altında
siyah, dar, diz boyu bir kalem etek ve ince siyah bir kemer. Başka giysi, başka takı
yok.

Poz ve ifade referansla aynı: bir eli bluzunun yakasında, öteki belinde; kendinden
emin, dudakları kapalı, belli belirsiz bir gülümseme.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## PMK — Şüpheci, mantosuz (PM2 referanslı)

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı krem ipek bluz ve
aynı dekolte, aynı siyah kalem etek ve kemer, aynı altın küpeler, mantosu yok; aynı
çizim tarzı, aynı düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek,
uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: bir eli belinde. Öteki elinin işaret parmağı çenesinde, düşünür gibi. Başı
hafifçe yana eğik. Ağırlığı tek bacağında.

İfade: açıkça şüpheci, abartılı ve okunaklı. Tek kaşı belirgin biçimde, alnına
doğru yukarı kalkmış; öteki kaşı yerinde ve hafif aşağıda çatık. Gözleri yarı
kısılmış. Bakışı başıyla aynı yönde: kadrajın soluna, karşısında kendi boyunda
duran birinin yüzüne. Gözbebekleri gözlerin kadrajın soluna yakın köşesinde.
Kameraya bakmıyor. Dudakları tek yana kıvrılmış, kapalı, "Ciddi misin?" der gibi
yarım bir sırıtma.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## PMS — Sinirli, mantosuz (PM2 referanslı)

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı krem ipek bluz ve
aynı dekolte, aynı siyah kalem etek ve kemer, aynı altın küpeler, mantosu yok; aynı
çizim tarzı, aynı düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek,
uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

Değişen şeyler poz ve ifade.

Poz: iki eli de yumruk hâlinde belinde. Gövdesi ve başı hafifçe öne, kadrajın
soluna doğru eğilmiş; karşısındakini azarlıyor. Omuzları kalkık.

İfade: komedi öfkesi — abartılı, tiyatral, okunaklı. İki kaşı da aşağı ve içe
çatılmış, kaşlarının arasında derin bir kırışık. Gözleri kocaman açılmış, öfkeyle
parlıyor. Bakışı başıyla aynı yönde: kadrajın soluna, karşısında kendi boyunda
duran birinin yüzüne; gözbebekleri gözlerin kadrajın soluna yakın köşesinde.
Kameraya bakmıyor. Ağzı konuşurken açık, dişleri hafif görünüyor, tam bir
cümlenin ortasında. Burun kanatları açılmış. Yanaklarında hafif kızarıklık.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## PMU — Utanmış, mantosuz (PM2 referanslı)

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, olgun bir kadın; gençleştirilmemiş, yüzü yumuşatılmamış),
aynı saç ve topuz, aynı krem ipek bluz ve aynı dekolte, aynı siyah kalem etek ve
kemer, aynı altın küpeler, mantosu yok; aynı çizim tarzı, aynı düz açık bej arka
plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk ortasından kesilmiş, başın
tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Başı
hafifçe öne eğik.

Değişen şeyler poz ve ifade.

Poz: kadrajın soluna yakın eli, yüzünün yanına düşen saç tutamını kulağının arkasına
sıkıştırıyor. Öteki eli belinde, kemerin tokasının yanında. Omuzları hafif içe
dönük.

İfade: komedi utancı — yakalanmış ama gülmesini tutamayan biri. Yanakları belirgin
biçimde pembe. Kaşları ortada yukarı kalkmış. Gözleri aşağıya ve kadrajın soluna
kaçmış: gözbebekleri gözlerin kadrajın soluna ve aşağıya yakın köşesinde. Kameraya
bakmıyor. Dudakları kapalı, alt dudağını hafifçe ısırır gibi, tutulmaya çalışılan
bir gülümseme.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde (her biri):** manto gerçekten yok mu, dekolte temel setle aynı mı (az da
çok da değil), yüz ve yaş aynı mı, sabit çerçeveyle kesilince temel setle aynı ölçekte
mi, bakış kadrajın soluna mı.
