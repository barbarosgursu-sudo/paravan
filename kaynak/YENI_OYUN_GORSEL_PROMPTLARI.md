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

## Sonuç — PM2 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/deneme_peri_pm2.webp`. Sabit çerçeveyle (x 120–1034)
kesilip A2 ile yan yana kondu:

| | sonuç |
|---|---|
| **Ölçek** | A2 ile aynı; baş birkaç piksel aşağıda ve sağda — manto giyildiği an fark edilmeyecek kadar. |
| **Yüz** | Aynı kadın, yaş korunmuş. |
| **Kıyafet** | Manto yok; krem saten bluz, siyah kalem etek, ince siyah kemer, altın küpeler. |
| **Dekolte** | Temel setle aynı ayarda (azalmamış). |
| **Bakış** | Kadrajın soluna; aynalanınca karşıdakine bakıyor. |
| **Yazı** | Yok (kemer tokası düz). |

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

## Sonuç — PMK, ilk deneme (5 Ekim 2026)

Teknik olarak tuttu (yüz, ölçek, kaş, bakış) ama **B4'ün birebir aynısı, yalnız kıyafet
farklı.** Sahibinin itirazı: çeşitlilik yok. Kabahat prompt'ta — B4'ün poz satırı aynen
kopyalanmıştı. **Ders: ifade setleri kıyafet değişince poz da değişir.** Ekranda zıplamayı
önleyen şey poz değil; **ölçek, kesim çerçevesi ve baş açısı.** Pozlar sahnenin durumuna
göre yeniden yazılır (haciz: evde, eşyaları gidiyor). Yeni pencerede, yalnız PM2
referansla, "referansın pozunu kopyalama" satırıyla yeniden üretilecek.

## PMK2 — Şüpheci, kollar kavuşturulmuş (PM2 referanslı, yeni pencere)

Replikler: "Çok naziksiniz. Hatıralar haczedilmiyor demek." / "Benim şirketim yok."

```
Referans görseldeki kadının AYNISI: aynı yüz (37 yaşında, gözlerinin kenarında
hafif gülme çizgileri, gençleştirilmemiş), aynı saç ve topuz, aynı krem ipek bluz ve
aynı dekolte, aynı siyah kalem etek ve kemer, aynı altın küpeler, mantosu yok; aynı
çizim tarzı, aynı düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek,
uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor.

POZ REFERANSTAN TAMAMEN FARKLI; referanstaki poz kopyalanmayacak. Hiçbir eli yakasında,
çenesinde ya da belinde değil.

Poz: iki kolunu göğsünün altında sıkıca kavuşturmuş, parmakları dirseklerini tutuyor.
Omuzları geride, çenesi yukarıda, başı hafifçe geriye çekilmiş: karşısındakini
yukarıdan süzüyor. Ağırlığı arka bacağında, kalçası hafif yana kaymış.

İfade: alaycı şüphe, abartılı ve okunaklı. Tek kaşı belirgin biçimde yukarı kalkmış,
öteki düz. Göz kapakları yarı inik, burnunun üstünden bakıyor. Bakışı kadrajın soluna,
karşısında kendi boyunda duran birinin yüzüne; gözbebekleri gözlerin kadrajın soluna
yakın köşesinde. Kameraya bakmıyor. Dudakları kapalı, bir köşesi aşağı çekilmiş, "Öyle
mi?" der gibi.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — PMK2 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/deneme_peri_pmk2.webp` (ilk deneme yedek:
`deneme_peri_pmk_ilk.webp`). Yeni pencere + "poz referanstan tamamen farklı" satırı işe
yaradı: kollar kavuşturulmuş, çene yukarıda, karşısındakini süzüyor. Kaş tam kalkmadı,
ifade şüpheden çok küçümsemeye kaydı; "Hatıralar haczedilmiyor demek" repliğine daha da
iyi oturuyor. Ölçek ve baş yüksekliği PM2 ile aynı.

**Kesim dersi — saten:** delik doldurma (tol 14) saten bluzun parlak yerini arka plan
sanıp sildi (PMK2'de göğüste, PM2'de kolda). Delik doldurmayı kapatmak da kol–bel
arasındaki boşluğu bej bırakıyor. Çözüm `kes_saten` ayarı: **delik tohumu sıkı (tol 6)**
— gerçek boşluk düz renk, saten değil — **sonra onaylı boşluktan tol 22 ile yeniden
taşkın**, dokulu kalıntıları da alır. Mantosuz set bu ayarla kesilir; PM2 de yeniden
kesildi.

## PMS2 — Sinirli, parmağıyla gösteriyor (PM2 referanslı, yeni pencere)

Replikler: "O satılık değil." / "Avukatım benim adıma çok şey kurmuş. En büyüğü tuzaktı."

```
[PMK2'nin ilk iki paragrafı aynen]

POZ REFERANSTAN TAMAMEN FARKLI; referanstaki poz kopyalanmayacak.

Poz: kadrajın soluna yakın kolu ileri uzanmış, işaret parmağı kadrajın soluna,
karşısındakinin göğsüne doğru dikilmiş, uyarır gibi. Öteki eli yumruk, yanında. Gövdesi
öne, kadrajın soluna doğru eğilmiş; bir adım atmış gibi.

İfade: komedi öfkesi — abartılı, tiyatral, okunaklı. İki kaşı aşağı ve içe çatılmış,
kaşlarının arasında derin bir kırışık. Gözleri kocaman açılmış. Bakışı kadrajın
soluna, karşısındakinin yüzüne; gözbebekleri gözlerin kadrajın soluna yakın köşesinde.
Kameraya bakmıyor. Ağzı konuşurken açık, dişleri hafif görünüyor. Burun kanatları
açılmış, yanaklarında hafif kızarıklık.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — PMS2 (5 Ekim 2026)

**Tuttu, çok iyi.** Kopya `kaynak/yeni_gorsel/deneme_peri_pms2.webp`. Okunaklı komedi
öfkesi: çatık kaşlar, açık ağız, öne eğilmiş gövde, dikilmiş parmak, öteki el yumruk.
Bakış ve parmak kadrajın soluna — aynalanınca ekranda Cengo'ya / karşıdakine doğru.

**Taşan sprite:** parmak ucu x≈40'ta, yumruk x≈1060'ta; sabit çerçeve (x 120–1034)
ikisini de keser. Çözüm: bu görsel **tam genişlikte** (x 0–1121) kesilir ve ekranda
standart kutuya hizalanarak taşar. Kutunun içi öteki ifadelerle piksel piksel aynı
yerde kalır, yalnız el kutudan dışarı uzanır. Aynalı (Peri) için:

```css
img.genis { width: 122.62%; max-width: none; margin-left: -9.51%; }  /* 1122/915, −87/915 */
```

Aynasız bir karakterde `margin-left` −120/915 (= −13.11 %) olur. Gerçek motorda her
sprite kaydı kendi kesim aralığını taşımalı (`x0`, `x1`); ekran kutusu çerçeveden,
taşma kayıttan hesaplanır. Hizalama testi: PM2 ile yan yana, baş ve bel aynı yerde.

## PMU2 — Utanmış, elleri önde (PM2 referanslı, yeni pencere)

Replikler: "Bilmiyorum. Sayan dolandırıcı avukatımdı." / "…Annenize selam söyleyin."

```
[PMK2'nin ilk iki paragrafı aynen; "Başı hafifçe öne eğik." eklenir]

POZ REFERANSTAN TAMAMEN FARKLI; referanstaki poz kopyalanmayacak.

Poz: iki eli önünde, bel hizasında birleşmiş, parmakları birbirine kenetlenmiş;
omuzları hafifçe kulaklarına doğru kalkmış, kendini küçültür gibi. Dizleri hafif
içe dönük.

İfade: komedi utancı — yakalanmış ama gülmesini tutamayan biri. Yanakları belirgin
biçimde pembe. Kaşları ortada yukarı kalkmış. Gözleri aşağıya ve kadrajın soluna
kaçmış. Kameraya bakmıyor. Dudakları kapalı, mahcup, yamuk bir gülümseme; dişleri
görünmüyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde (her biri):** manto gerçekten yok mu, dekolte temel setle aynı mı (az da
çok da değil), yüz ve yaş aynı mı, sabit çerçeveyle kesilince temel setle aynı ölçekte
mi, bakış kadrajın soluna mı.

## Sonuç — PMU2 (5 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/deneme_peri_pmu2.webp`. Elleri önde kenetli,
omuzları kalkık, yanakları pembe, gözleri aşağı-sola kaçmış, mahcup yamuk gülümseme.
Kaşlar ortada kalkık. Standart çerçeveyle (x 120–1034) kesildi, `kes_saten` ayarıyla.

## PERİ MANTOSUZ SET — TAMAM (5 Ekim 2026)

| ifade | görsel | kesim |
|---|---|---|
| nötr / gülen | PM2 | standart |
| şüpheci | PMK2 | standart |
| sinirli | PMS2 | **tam genişlik** (x 0–1121), `img.genis` ile hizalı taşar |
| utanmış | PMU2 | standart |

Taslakta açılış sahnesi (A1 salon) eklendi: Peri mantosuz, Cengo yok, Hilmi Bey'in
yalnız plakası var (figürü sırada). "Peri mantoyu giyiyor" satırında mantolu sete
geçilir. Satır düzeyinde `periSet`, sahne düzeyinde `periSet` ve `cengoYok`.

**Ortaya çıkan süreklilik açığı:** Peri mantoyu giydikten sonra A1'deki askıda manto
hâlâ asılı. Kanonda S2 zaten A3'te (boşalmış salon) geçiyor; çözüm A3'ü iki hâlde
üretmek: **A3** askıda manto var, **A3b** askı boş (A3 referanslı, tek değişiklik —
burada üreticinin referansa kilitlenmesi işimize yarar). "Peri mantoyu giyiyor"
satırında arka plan A3 → A3b geçer.

## A3 — Aynı salon, bomboş, öğle (A1 referanslı, ★)

```
Referans görseldeki salonun AYNISI: aynı oda, AYNI KADRAJ, aynı yüksek pencereler ve
tül perdeler, aynı tavan süslemeleri, aynı balıkçılsırtı parke, aynı çizim tarzı. Bu
görselde hiç insan yok.

Değişen şeyler: saat ve eşyalar. Öğle; güneş yüksekte, pencerelerden giren ışık
parlak ama sıcak, bal rengi; parkeye kısa, keskin pencere gölgeleri düşüyor.

Salon artık BOMBOŞ. Kanepe, koliler, örtülü mobilya GİTMİŞ. Avize de sökülmüş: tavanın
ortasında yalnız alçı göbek ve ondan sarkan kısa, çıplak bir elektrik kablosu kalmış.
Parkede, eşyaların durduğu yerlerde hafif açık renkli izler ve sürükleme çizikleri var.
Duvarda tablolardan kalan açık renkli dikdörtgen izler ve boş çiviler duruyor.

Odada kalan TEK eşya: kapı kenarındaki ayaklı ahşap askılık; askıda tek bir şey var:
kırmızı, kuşaklı, uzun bir kadın mantosu.

Görselin alt üçte biri boş parke zemin.

Başka hiçbir nesne yok: kâğıt, liste, kutu, koli, kitap, fotoğraf, çerçeve, ayna, saat,
taç yok.

Hava: sessiz, boş, biraz hüzünlü ama aydınlık.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## A3b — Aynı boş salon, askı boş (A3 referanslı)

```
Referans görselin AYNISI: aynı oda, aynı kadraj, aynı öğle ışığı, aynı gölgeler,
aynı çizim tarzı. Bu görselde hiç insan yok.

Değişen TEK şey: askıdaki kırmızı manto yok. Ayaklı ahşap askılık aynı yerde duruyor
ama BOMBOŞ; kancaları çıplak.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde:** A1 ile aynı kadraj mı (pencereler ve askı aynı yerde), avize gerçekten
sökülmüş mü, ışık öğle mi; A3b'de yalnız manto mu gitmiş (başka bir şey
değişmişse fark gözü tırmalar).


---

# SÜREKLİLİK DENETİMİ — VAKA 1 (6 Ekim 2026)

Sahibinin uyarısı: "Kırmızı mantoda olduğu gibi avizede de aynı sorun var." Bütün
arka planlar metne karşı tarandı. **Kural: sahne içinde durumu değişen her nesne için
arka planın o anki hâli ayrı bir görseldir; değişiklikten sonra eski görsele dönülmez.**
Bulunanlar ve kararlar:

| açık | karar |
|---|---|
| A1'de avize asılı, metinde S1 ortasında sökülüyor | A1 "Avize."ye kadar; sonrası (taç dahil) **A2** |
| A3 "akşamüstü" — ama aynı gün Karaköy, Rıza Reis, araştırma var | A3 **öğle** |
| Manto askıda, Peri giydikten sonra da | **A3 → A3b** |
| Cengo ışığı yakıyor, A6/A7'de lamba sönük | **A6 ve A7 lamba yanık yeniden üretilir** (sahibinin kararı) |
| Kapanışta kapı dışarıdan kilitleniyor, sahne A8'de (içeride) | ilk not A8, sonra **A5b** (koridor, akşam) |
| "Cengo ceketini alıyor" — ceket hep üstünde | metin: "Cengo kapıya yürüyor" |
| A8'de kutu öbür masaya geçmiş | zararsız, kalır |
| Camdaki yazı görünmüyor | bilinçli karar (yazı yasağı), kalır |

Saat çizgisi: A1/A2 sabah → A3 öğle → A5/A6/A7 öğleden sonra → A8/A5b akşam.

## A2 — Aynı salon, ters açı, avize sökülmüş (A1 referanslı, ★)

```
Referans görseldeki salonun AYNISI: aynı oda, aynı krem duvarlar, aynı tavan
süslemeleri, aynı balıkçılsırtı parke, aynı sabah ışığı, aynı çizim tarzı. Bu görselde
hiç insan yok.

Kadraj: DİKEY (3:4). TERS AÇI: kamera bu kez pencerelerin önünde duruyor ve odanın
içine, kapıya doğru bakıyor. Pencereler kameranın arkasında kalıyor; sabah ışığı
arkadan geliyor, parkeye pencere biçiminde ışık dikdörtgenleri düşüyor. Görselin alt
üçte biri boş parke zemin: orada hiçbir nesne yok.

Kadrajda YALNIZ şunlar var:
1. Karşı duvarda, kadrajın solunda, açık duran yüksek, çift kanatlı bir salon kapısı;
   kapının ötesi loş bir hol, holde hiçbir şey görünmüyor.
2. Kapının hemen yanında referanstaki ayaklı ahşap askılık; askıda tek bir şey var:
   kırmızı, kuşaklı, uzun bir kadın mantosu.
3. Tavanın ortasında, kadrajın üst kenarına yakın, alçı göbek; avize SÖKÜLMÜŞ, göbekten
   yalnız kısa, çıplak bir kablo sarkıyor.
4. Göbeğin altında, orta zeminde, kadrajın sağ yarısında: referanstaki kristal avize
   parkenin üstüne yan yatırılmış, kristal damlaları dağınık. Yanında ahşap, katlanır
   bir merdiven açık duruyor.
5. Avizenin biraz önünde parkede tek bir kristal damla parlıyor.
6. Sağ duvar dibinde, üst üste dört beş kapalı, düz kahverengi, bantlı koli;
   üzerlerinde hiçbir yazı, etiket, işaret yok.
7. Duvarda tablolardan kalan açık renkli dikdörtgen izler ve boş çiviler.

Bordo kanepe ve örtülü mobilya YOK (taşınmış); yerlerinde parkede hafif izler.

Başka hiçbir nesne yok: kâğıt, liste, kitap, gazete, fotoğraf, çerçeve, tablo, ayna,
ekran, telefon, saat, taç, kupa, alet çantası yok.

Hava: telaşlı bir karmaşa, ama komik; zarif bir evin dağılması.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde:** A1 ile aynı ev gibi mi (duvar, parke, tavan, askı, manto), avize yerde
ve göbek boş mu, kolilerde yazı var mı, alt üçte bir boş mu, kapının ötesinde bir şey
(yazı, insan) var mı.

## Sonuç — A2 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a2_salon_avize.webp`. Ters açı doğru kuruldu:
askı ve manto artık solda, kapının yanında (A1'de sağdaydı — geometri tutarlı).
Avize yerde, kristaller dağılmış, önde tek damla parlıyor; göbekten çıplak kablo
sarkıyor; katlanır merdiven, kapalı koliler, tablo izleri. Kanepe ve örtülü mobilya
yok. **Yazı yok** (koliler, hol, kapı büyütülerek tarandı). Alt üçte bir boş.
Işık A1'den biraz daha turuncu, sabah sayılır. Taslakta "Arkada iki memur avizeyle
boğuşuyor" satırından itibaren A2; taç bölümü burada geçiyor.

## Sonuç — A3 (6 Ekim 2026)

**Tuttu, renk düzeltmesiyle.** Kopya `kaynak/yeni_gorsel/arka_a3_salon_bos.webp`. Kadraj
A1 ile aynı; salon boş, göbekten kablo sarkıyor, parkede izler, tablo izleri, askıda
manto. Yazı yok. Alt üçte bir boş.

**Sahibinin itirazı: renk kehribar olmalıydı.** Üretici "öğle, beyaz ışık" satırını
fazla ciddiye aldı; ortalama renk 182/146/117 (A1 168/118/84, A2 174/114/64) — beyaza
kaymış, set içinde kopuk duruyordu. Yeniden üretmek yerine **renk düzeltmesi**:

```
convert A3.png -channel R -evaluate multiply 1.06 -channel G -evaluate multiply 0.93 \
  -channel B -evaluate multiply 0.68 +channel -modulate 100,110 A3_kehribar.png
```

Sonuç ortalaması 197/135/73 — A1/A2 ailesinde. **A3b de aynı komutla düzeltilir**
(sahibi A3'ün özgün hâlini referans verir; iki görsel aynı ayarı alınca renk birebir
tutar). Ders: aynı mekânın saat değişen görsellerinde "beyaz ışık" yazma; set
kehribar tonda — "öğle, parlak ama sıcak, bal rengi ışık" de.

## Sonuç — A3b (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a3b_salon_askisiz.webp`. A3 (özgün) referans
verildi, üretici kilitlendi — burada istenen buydu: fark haritasında tek gerçek
değişiklik manto, gerisi ince kenar gürültüsü. Aynı kehribar düzeltmesi uygulandı.
Taslakta "Peri mantoyu giyiyor" satırında A3 → A3b geçiyor; askı boşalıyor, manto
Peri'nin üstünde. **Açılış salonu tamam: A1, A2, A3, A3b.**

## A5b — Koridor, akşam (A5 referanslı, ★)

```
Referans görselin AYNISI: aynı koridor, AYNI KADRAJ, aynı kapılar, aynı karo zemin,
aynı tonozlu tavan, aynı çizim tarzı. Büro kapısının üstündeki pirinç tabela yine
tam yandan, yalnız ince kenarıyla görünüyor; yüzü görünmüyor. Bu görselde hiç insan
yok.

Değişen TEK şey saat: akşam. Koridorun dibindeki kemerli pencereden lacivert akşam
göğü ve ufukta son turuncu çizgi görünüyor. Tavandan sarkan cam abajurlu lamba YANIYOR;
koridoru sıcak, sarı, loş bir ışıkla aydınlatıyor, karolarda ışığın yansıması var.
Köşeler karanlık.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — A5b (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a5b_koridor_aksam.webp`. Aynı kadraj; tavan
lambası yanık, karolarda sıcak yansıma, dipteki pencerede lacivert gök ve turuncu ufuk
çizgisi. **Tabela akşamda da yalnız kenarıyla** görünüyor. Yazı yok. Taslakta kapanış
"Cengo kapıya yürüyor"dan sonra A5b'ye geçiyor; figürlere akşam tonu uygulanıyor.

## A6L — Büro, gündüz, lamba yanık (A6 referanslı; A6'nın yerine geçer)

```
Referans görselin AYNISI: aynı oda, aynı kadraj, aynı sabah ışığı, aynı nesneler aynı
yerlerde, aynı çizim tarzı. Bu görselde hiç insan yok.

Değişen TEK şey: soldaki masanın üstündeki masa lambası YANIYOR; ampulünden sıcak
sarı bir ışık masanın üstüne ve çevresine düşüyor. Başka hiçbir şey değişmiyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — A6L (6 Ekim 2026)

**Tuttu.** Fark haritasında tek gerçek değişiklik lamba ve masadaki ışık havuzu.
`kaynak/yeni_gorsel/arka_a6_buro_gunduz.webp` artık lambası yanık hâl (sönük A6
kullanılmıyor). Taslakta büro gündüz arka planı A6L.

## A7L — Büro, pencere tarafı, lamba yanık (A7 referanslı; A7'nin yerine geçer)

```
Referans görselin AYNISI: aynı kadraj, aynı pencere ve manzara, aynı sabah ışığı, aynı
çizim tarzı. Bu görselde hiç insan yok.

Değişen TEK şey: soldaki masanın üstündeki masa lambası YANIYOR; ampulünden sıcak
sarı bir ışık masanın üstüne düşüyor. Başka hiçbir şey değişmiyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## Sonuç — A7L (6 Ekim 2026)

**Tuttu.** Tek gerçek fark: lamba yanıyor, duvara ve masaya sıcak ışık düşüyor (A7'de
ampulde belli belirsiz bir parıltı vardı, şimdi açıkça yanık). Fark haritasındaki öteki
noktalar manzaradaki ve kenarlardaki ince yeniden çizim, gözle görülmüyor.
`kaynak/yeni_gorsel/arka_a7_buro_pencere.webp` artık bu hâl.

**Süreklilik açıklarının hepsi kapandı:** A1 → A2 (avize), A3 → A3b (manto), A6L/A7L
(lamba), A8 → A5b (kapanış koridorda).

**Not:** A6L ve A7L'de üretici referansa kilitlenirse (B3'teki gibi aynı görseli
verirse) iş rötuşla yapılır: lambanın başlığına sıcak bir ışıma ve masaya ışık
havuzu boyanır. Lamba düz bir yüzeyde, yapısal çizgi kesmiyor — rötuş sınırının
içinde.


---

# KESİM ARACI — `kaynak/arac_kes.js` (6 Ekim 2026)

Bütün karakter kesimleri artık bu araçla yapılır; geçici betikler emekli.

```
cd kaynak
node arac_kes.js <girdi.png> <cikti.webp> --profil peri|saten|cengo [--genis] [--onizleme <yesil.png>]
```

| profil | çerçeve | delik doldurma | ne için |
|---|---|---|---|
| `peri` | x 120–1034 | tol 14 | Peri mantolu temel set |
| `saten` | x 120–1034 | **kenar tol 14**; tohum tol 6 → yeniden taşkın tol 22 | Peri mantosuz set (saten bluz) |
| `cengo` | x 10–1111 | kapalı | Cengo (beyaz gömlek) |

- **`--genis`**: el/parmak çerçeveden taşıyorsa tam genişlikte keser ve ekran için CSS'i
  basar. Araç taşmayı kendisi de sezer: standart kesimde çerçeve kenarında karakter
  varsa UYARI verir.
- **`--onizleme`**: yeşil zemin üstünde PNG; kalıntı ve delik gözle aranır.
- Kaynak yüksekliği 1402 değilse uyarır (ölçek setten farklı olabilir).
- Doğrulama: PMK2 ve PMS2 (geniş) eski kesimlerle piksel piksel aynı. CY'de fark var
  ve iyi yönde: araç alt kenardan da taşkın yapıyor, eski kesimde bacak arasında kalan
  bej üçgen artık temizleniyor.
- **Cengo seti araçla yeniden kesildi** (CA2, CC, CK, CY; 6 Ekim): dördünde de bacak
  arası kalıntı gitti, gömlek sağlam. Peri setleri de denendi: fark 0–5 piksel, yeniden
  kesime gerek yok. Bu sırada
  geniş hizalama hesabındaki bir hata yakalandı: taşan sağ şerit 88 değil **87 px**
  (1121−1034); `margin-left` −9.62 % değil **−9.51 %**.

**Sahibinin kuralı (6 Ekim 2026): her prompt ile birlikte referans görselin KENDİSİ
gönderilir** (özgün dosya, adıyla). Kodlar (A9, PM2…) tek başına yazılmaz — görsel
sayısı arttıkça sahibi koddan hangisi olduğunu çıkaramıyor.

**Yeni karakter eklenince:** referans görselden çerçeveyi seç (bütün ifadelerde
karakterin hiçbir yeri kesilmesin), giysinin arka plana yakın rengi var mı bak, profili
`PROFILLER`'a ekle.


## Hata — PMU2'de kol silindi (6 Ekim 2026, sahibi telefonda yakaladı)

PMU2'de Peri'nin bir kolu neredeyse tamamen kaybolmuştu. Sebep delik doldurma değil,
**kenardan taşkın**: kol arka plana doğrudan değiyor, saten parlaklığı bej zemine 28
tolerans içinde yakın, taşkın dışarıdan kolun içine yürüdü. Önizleme dosyası vardı ama
**bakılmadı** — hata oradaydı.

Düzeltme (`arac_kes.js`):
- Profil başına **kenar toleransı** (`kenarTol`); saten 14, öbürleri 28.
- Sıkı tolerans arka planda küçük lekeler bırakıyor → **kırıntı temizliği**: ana gövdenin
  %2'sinden küçük, gövdeye bağlı olmayan opak adacıklar silinir. Araç kaç piksel
  sildiğini basar.
- Mantosuz set (PM2, PMK2, PMS2, PMU2) yeniden kesildi; Cengo ve mantolu Peri yeni
  adımla denendi, gözle fark yok (karşılaştırmadaki dağınık farklar WebP sıkıştırma
  gürültüsü).

**Kural: her kesimden sonra `--onizleme` çıktısına bakılır, taslağa ondan sonra konur.**


---

# ARKA PLAN GEÇİŞLERİ (6 Ekim 2026, sahibinin isteği)

Her arka plan bir **grup** taşır: yer + saat (`salon_sabah`, `salon_ogle`, `buro_gunduz`,
`buro_aksam`, `koridor_gunduz`, `koridor_aksam`).

- **Aynı grup → çapraz geçiş** (0,6 sn): yeni görsel eskinin üstünde belirir. Durum
  değişimleri (avize, manto, lamba) ve aynı mekânda açı değişimi (A6 → A7) böyle.
- **Grup değişir → kısa kararma** (≈0,3 sn kararır, açılır): yer ya da saat değişti.
- **"Hareketi azalt" açıksa ve sahne baştan kurulurken → anında.**
- Hızlı dokunmada geçişler üst üste binmez: bekleyen kararma iptal edilip son hedef
  uygulanır, eski katmanlar temizlenir (tur testi: her iki yolda sonda tek katman).

Gerçek oyunda da arka plan kaydı `grup` alanı taşımalı; süreklilik kuralının
doğrulayıcı tarafı (bkz. Vaka 1 süreklilik denetimi) aynı alanı saat çizgisi için
kullanabilir.

---

# VAKA 1 MEKÂNLARI

## A9 — Karaköy iskelesi, geniş: Nazlı'nın boş yeri (★, sezon boyu)

İ1 (Rıza Reis anlatır) ve İ3 (iskeleye bak) burada geçer. Saat: öğleden sonra (büro
gündüzünden sonra, aynı gün). Stil referansı olarak A6L eklenebilir.

**Nurcan:** A9 İ1'de de görünür, o yüzden kilidin sağlam olduğu (`kilit_saglam`, İ3)
buradan okunmamalı. Zincir görünür (Rıza zaten anlatıyor) ama kilit seçilmez; kilidin
yakın planı D2'dir ve yalnız İ3'te gösterilir. Teknelerin bordasındaki adlar en büyük
yazı riski: hepsi düz boyalı, adsız istenir.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman arka planı. Belirgin, temiz
kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi
afişi ile modern çizgi roman arası bir tarz. Anime değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı ve renk içindir; bu başka bir mekân ve görselde
hiç insan yok.)

Mekân: İstanbul Karaköy'de, Haliç'in ağzında küçük bir balıkçı iskelesi. Ekim,
öğleden sonra; güneş alçalmaya başlamış, ışık sıcak ve bal rengi.

Kadraj: DİKEY (3:4). Kamera göz hizasında, iskelenin taş rıhtımının üstünde duruyor
ve rıhtım boyunca ileri bakıyor; su kadrajın solunda. Görselin alt üçte biri boş,
sakin, eski taş rıhtım zemini: orada hiçbir nesne yok.

Kadrajda YALNIZ şunlar var:
1. Solda, rıhtım boyunca suya bağlı, yan yana duran üç küçük, eski, ahşap balıkçı
   teknesi; boyaları solmuş mavi, yeşil ve kırmızı; bordalarında hiçbir ad, harf,
   rakam yok, düz boyalı.
2. Bu teknelerin arasında, ortadaki yerde BOŞ bir bağlama yeri: orada tekne yok,
   yalnız suyun üstünde boşluk. O boş yerin rıhtım kenarında kısa, kalın, demir bir
   bağlama babası; babaya kalın, paslı bir zincir dolanmış, ucu rıhtımın taşına
   bırakılmış. Zincir uzaktan görünüyor, ayrıntısı seçilmiyor.
3. Rıhtımın üstünde, kenarda, üst üste yığılmış birkaç düz, adsız plastik balık
   kasası ve kıvrılmış bir halat yığını.
4. Suyun ötesinde, uzakta, Haliç'in mavi suyu, demirli beyaz bir şehir hatları
   vapuru ve karşı kıyıda tarihi yarımadanın kubbeli, minareli silueti.
5. Gökte birkaç martı.

Başka hiçbir nesne yok: tabela, levha, afiş, bayrak, büfe, araba, kâğıt, telefon yok.
Teknelerde, kasalarda ve vapurda hiçbir yazı, ad, numara yok.

Işık: öğleden sonra güneşi, suda parıltılar, rıhtım taşlarında sıcak ışık. Hava:
tanıdık, kokusunu hissettiren bir liman; ortadaki boş yer göze takılıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** teknelerin bordasında ad/rakam var mı (en büyük risk —
büyüterek tara), boş yer gerçekten okunuyor mu (ortada belirgin bir boşluk), kilit
seçiliyor mu (seçiliyorsa Nurcan sızıntısı: İ1'de kilit_saglam'ı ele verir), alt üçte
bir boş mu, vapurda yazı var mı, insan var mı.


## Sonuç — A9 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a9_iskele.webp`. Üç adsız tekne (mavi, yeşil,
kırmızı), mavi ile yeşilin arasında boş yer, zincirli baba, kasalar ve halat; ötede
Ayasofya silueti ve vapurlar. **Yazı yok** (bordalar, kasalar, vapur büyütülerek
tarandı). **Nurcan:** kilit seçilmiyor, yalnız zincir halkaları — İ1'de `kilit_saglam`
sızmıyor.

**Saat:** öğleden sonra istendi, **gün batımı** geldi. Sahibinin kararı: kalsın.
Saat çizgisi buna göre: **araştırma mekânları akşamüstü / gün batımı** (iskele, çay
ocağı, set, dükkân); kapanış akşam. Sonraki mekânlar bu ışıkta istenir.

**Kadraj dersi — açılış planı:** taslağa konunca boş yer ve zincir tam Peri ile
Cengo'nun arkasında kaldı. Mekânın anlatı öğesi ekranın ortasındaysa karakterler onu
örter. Çözüm arayüzde: mekânın ilk anlatım satırına `mekan: true` — karakterler çekilir,
yer boş görünür, sonraki satırda geri gelirler (0,5 sn). Taslakta her mekân girişinde
uygulandı. Gerçek oyunda da her sahnenin ilk notu açılış planı olmalı. Prompt
tarafında da: anlatı öğesi mümkünse ortaya değil, figürlerin arasına (orta-üst) ya da
açılış planına bırakılır.

## A10 — İskeledeki çay ocağı, yakın (A9 referanslı)

İ2 (Cengo'nun çaycısı) burada geçer. Aynı iskele, aynı gün batımı ışığı. **A9'u
referans olarak ekle.** Çay ocağı tabelası en büyük yazı riski: tabela hiç istenmez.

```
Referans görseldeki iskelenin AYNISI: aynı yer, aynı gün batımı ışığı, aynı renkler,
aynı çizim tarzı. Bu görselde hiç insan yok.

Kadraj: DİKEY (3:4). Kamera göz hizasında, iskelenin kara tarafına dönmüş; rıhtımın
gerisindeki küçük bir çay ocağına yakından bakıyor. Su ve tekneler kameranın arkasında
kalıyor; yalnız kadrajın kenarında bir tekne pruvasının ucu ve suyun parıltısı
seçiliyor. Görselin alt üçte biri boş, sakin taş rıhtım zemini: orada hiçbir nesne
yok.

Kadrajda YALNIZ şunlar var:
1. Ortada, eski, küçük, ahşap bir çay ocağı kulübesi; önü açık, tezgâhlı. Kulübenin
   üstünde ve önünde hiçbir tabela, levha, yazı, fiyat listesi yok.
2. Tezgâhın üstünde büyük, parlak, bakır bir semaver; buharı tütüyor.
3. Semaverin yanında yuvarlak, metal bir tepsi; tepside üç ince belli çay bardağı,
   tabaklarıyla, içlerinde koyu kızıl çay.
4. Tezgâhın önünde iki alçak, hasır oturaklı ahşap tabure.
5. Kulübenin saçağında yanmayan, çıplak, tek bir ampul.
6. Kulübenin yanında, duvara dayalı, katlanmış, düz renkli bir balıkçı ağı.

Başka hiçbir nesne yok: tabela, levha, afiş, menü, fiyat kartı, gazete, kâğıt,
telefon, şişe, paket, bayrak yok. Bardaklarda, tepside ve semaverde hiçbir yazı,
logo, damga yok.

Işık: gün batımı, kulübenin üstüne alçaktan sıcak turuncu ışık; semaverin bakırında
parıltı; buhar ışıkta görünüyor. Hava: sıcak, tanıdık, mahalle samimiyeti.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kulübede tabela/yazı var mı (en büyük risk), bardaklarda
ve semaverde damga ya da logo var mı, A9 ile aynı ışık mı, alt üçte bir boş mu, çay
ocağı ortada mı (açılış planında görünür, sonra karakterler önüne gelir — o yüzden
semaver ve bardaklar üst yarıda kalmalı).


## Sonuç — A10 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a10_cay_ocagi.webp`. Tabelasız ahşap kulübe,
bakır semaver ve buhar, tepside üç ince belli bardak, iki hasır tabure, çıplak ampul,
kırmızı ağ. Solda iskele babası ve zincir: A9 ile aynı yer. Arkada su ve Galata Kulesi
(iskele denize uzandığı için karaya geri bakış — coğrafyaya uyuyor). **Yazı yok** (raf,
semaver, bardaklar tarandı). Taslakta İ2 sahnesi; A9 ile aynı grup (`iskele_aksamustu`),
geçiş çapraz.

## A11 — Bebek sahili, dizi seti, geniş (★)

İ4 burada geçer. Akşamüstü, A9/A10 ile aynı gün batımı. **Stil referansı olarak A9
eklenebilir** (başka mekân).

**Nurcan / yazı:** Pruvadaki eski ad D3'ün işidir; A11'de pruva düz beyaz, iz yok —
yoksa D3'ün anı burada harcanır ve ad okunabilir hâle gelir. Set ekipmanı yazı riski
taşır: klaket istenmez, yönetmen sandalyesinin sırtlığı düz, kameralarda marka yok,
monitör ekranı kameraya dönük değil. Telefon ekranı (tanıtım) metinde kalır.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman arka planı. Belirgin, temiz
kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi
afişi ile modern çizgi roman arası bir tarz. Anime değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı ve renk içindir; bu başka bir mekân ve görselde
hiç insan yok.)

Mekân: İstanbul Bebek sahili, Boğaz kıyısı; bir televizyon dizisinin çekim seti,
çekime ara verilmiş. Ekim, gün batımı; ışık sıcak, turuncu ve alçak.

Kadraj: DİKEY (3:4). Kamera göz hizasında, sahil kaldırımından suya doğru bakıyor.
Görselin alt üçte biri boş, sakin, taş sahil kaldırımı: orada hiçbir nesne yok.

Kadrajda YALNIZ şunlar var:
1. Ortada, kıyıdaki küçük ahşap bir iskeleye bağlı, bembeyaz boyanmış eski bir ahşap
   tekne: aslında yaşlı bir balıkçı teknesi, ama "lüks yat" görünsün diye baştan
   sona parlak beyaza boyanmış; güvertesine iki beyaz minder ve küçük bir beyaz
   şemsiye konmuş. Ahşap gövdesi, eski biçimi ve balıkçı teknesi oranları belli
   oluyor. Pruvası ve bordası düz, pürüzsüz beyaz; üzerinde hiçbir ad, harf, iz yok.
2. Teknenin iki yanında, ayaklar üzerinde iki büyük film ışığı, YANIYOR; tekneye
   doğru çevrilmiş. Birinin önünde büyük, yuvarlak, gümüş bir yansıtıcı panel.
3. Sol önde, tekneye bakan, üç ayaklı bir sehpa üstünde büyük bir sinema kamerası;
   üstü bir örtüyle kısmen örtülü; üzerinde hiçbir marka, yazı yok.
4. Kaldırımda kıvrılarak tekneye uzanan siyah kablolar.
5. Sağ önde, katlanır iki ahşap yönetmen sandalyesi; kumaş sırtlıkları düz, tek renk,
   yazısız.
6. Arkada Boğaz'ın suyu, karşı kıyıda tepeler ve yalılar, uzakta Rumeli Hisarı'nın
   kuleleri; gökte birkaç martı.

Başka hiçbir nesne yok: klaket, tabela, afiş, pankart, monitör ekranı, kâğıt, senaryo,
telefon, araba, kamyon, çadır yok. Ekipmanın, teknenin, sandalyelerin hiçbir yerinde
yazı, logo, marka, numara yok.

Işık: gün batımının sıcak turuncu ışığı ve film ışıklarının beyaz ışığı karışıyor;
beyaz tekne iki ışığın arasında parlıyor. Hava: biraz gösterişli, biraz sahte, komik;
bir balıkçı teknesinin yat rolü oynaması.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** pruvada iz/harf var mı (varsa D3'ün anı harcanır ve ad
okunabilir — rötuş ya da yeniden), teknenin balıkçı teknesi olduğu belli mi (gerçek bir
yat çizilirse hikâye çöker), ekipmanda marka/yazı (kamera, ışıklar, sandalyeler), klaket
ya da monitör çizilmiş mi, A9 ile aynı ışık ailesi mi, alt üçte bir boş mu.


## Sonuç — A11 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a11_set.webp`. Beyaza boyanmış ahşap tekne —
kaptan köşkü ve balıkçı gövdesi belli, minderler ve şemsiye "yat" süsü; komik ve
doğru. İki yanık film ışığı, gümüş yansıtıcı, örtülü kamera, kablolar, iki yönetmen
sandalyesi (sırtlık düz); arkada yalılar ve Rumeli Hisarı. **Pruva temiz** — D3'ün
anı korunuyor. **Yazı/marka yok** (tekne, kamera, sandalyeler tarandı). Taslakta İ4
sahnesi ("Set asistanı" plakası, figürü sırada).

## A12 — Setin arkası: kablolar, katering masası (A11 referanslı)

İ5 (set sorumlusu Tuba, elinde üç telefon) burada geçer. **A11'i referans olarak
ekle** — aynı set, ters yön: kara tarafı. Katering masası yazı riski taşır (etiketli
şişe, ambalaj, menü kartı); hepsi sayılarak yasaklanır.

```
Referans görseldeki setin AYNISI: aynı yer, aynı gün batımı ışığı, aynı renkler, aynı
çizim tarzı. Bu görselde hiç insan yok.

Kadraj: DİKEY (3:4). TERS YÖN: kamera bu kez sudan kara tarafına, setin arkasına
bakıyor; Boğaz ve beyaz tekne kameranın arkasında kalıyor. Görselin alt üçte biri boş,
sakin taş sahil kaldırımı: orada hiçbir nesne yok.

Kadrajda YALNIZ şunlar var:
1. Ortada, katlanır ayaklı uzun bir katering masası; üstünde beyaz bir örtü. Masanın
   üstünde yalnız: büyük, metal bir termos semaver; üst üste dizilmiş beyaz karton
   bardaklar; bir tepside simitler; bir kâse mandalina. Bardaklarda, termosta, tepside
   hiçbir yazı, logo, etiket yok.
2. Masanın yanında, kaldırımda üst üste duran üç siyah, kapalı ekipman kutusu; düz,
   hiçbir yazı, etiket, numara yok.
3. Kaldırım boyunca kıvrılarak giden kalın siyah kablolar ve bir kablo makarası.
4. Sağda, ayaklı, sönük bir film ışığı; arkaya çevrilmiş.
5. Arkada, sahil yolunun ötesinde, ağaçların arasında Bebek'in eski, iki üç katlı
   taş ve ahşap evleri; pencerelerinde gün batımının yansıması.
6. Bir ağacın gövdesine yaslanmış, katlanmış bir yönetmen sandalyesi; sırtlığı düz,
   yazısız.

Başka hiçbir nesne yok: tabela, afiş, menü, senaryo, kâğıt, klaket, monitör, telefon,
şişe, kutu içecek, paket, araba, kamyon, karavan yok. Hiçbir yerde yazı, logo,
marka, numara yok.

Işık: gün batımının alçak, turuncu ışığı arkadan, evlerin camlarında; masanın
üstünde sıcak bir parıltı. Hava: telaşın ortasında bir mola; dağınık ama sıcak.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** masada etiketli şişe/ambalaj var mı (en büyük risk), kutularda
yazı/numara, evlerde tabela, A11 ile aynı ışık mı, alt üçte bir boş mu.


## Sonuç — A12 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a12_set_arkasi.webp`. Ters yön: Bebek'in eski
evleri, çınar, beyaz örtülü katering masası (termos semaver, karton bardaklar, simit,
mandalina), üç siyah ekipman kutusu, kablo makarası, sönük film ışığı, ağaca yaslı
yönetmen sandalyesi. **Yazı yok** (masa, kutular tarandı). Taslakta İ5 (Tuba) A11'in
devamı; aynı grup, geçiş çapraz.

## A13 — Karaköy ara sokağı, Serkan'ın kapalı dükkânı (★)

İ6 (Serkan dükkânın önünde) burada geçer. Akşamüstü, gün batımı ailesi. **Stil
referansı olarak A9 eklenebilir.**

**Nurcan:** kapıya bantlı not İ7'nin olgusudur (`serkan_borc`); A13 İ6'da görünür,
o yüzden kapıda **not yok**. Dükkân tabelası en büyük yazı riski: tabela yerinde
yalnız sökülmüş tabelanın izi ve boş vida delikleri istenir. Kepenk düz, yazısız.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman arka planı. Belirgin, temiz
kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi
afişi ile modern çizgi roman arası bir tarz. Anime değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı ve renk içindir; bu başka bir mekân ve görselde
hiç insan yok.)

Mekân: İstanbul Karaköy'de, iskeleye yakın, dar, eski, Arnavut kaldırımlı bir ara
sokak. Ekim, gün batımı; sokağın ucundan alçak, turuncu bir ışık giriyor.

Kadraj: DİKEY (3:4). Kamera göz hizasında, sokağın ortasında durup sokak boyunca
ileri bakıyor. Görselin alt üçte biri boş, sakin Arnavut kaldırımı: orada hiçbir
nesne yok.

Kadrajda YALNIZ şunlar var:
1. Sağda, yakında, küçük, eski bir dükkân; kepengi sonuna kadar inik, kilitli. Kepenk
   düz, solmuş yeşil, paslı; üzerinde hiçbir yazı, numara, çıkartma, afiş yok.
2. Kepengin yanında dar, camlı, eski bir ahşap kapı; kapalı; camı tozlu, içerisi
   karanlık; camda ve kapıda hiçbir şey asılı değil, bantlı değil.
3. Dükkânın üstünde, tabelanın söküldüğü yerde duvarda kalmış açık renkli, uzun,
   dikdörtgen bir iz ve boş vida delikleri (tabelanın kendisi yok).
4. Dükkânın önünde, kaldırımda, ters çevrilmiş, boş, düz renkli iki plastik balık
   kasası.
5. Sol tarafta, sokak boyunca, eski, iki üç katlı taş binaların cepheleri; kapıları ve
   pencereleri kapalı, tabelasız.
6. Sokağın ucunda, uzakta, Haliç'in suyundan bir parça ve bir vapurun silueti, gün
   batımına karşı.
7. Binaların arasında gerilmiş bir çamaşır ipi, üstünde iki beyaz çarşaf.

Başka hiçbir nesne yok: tabela, levha, afiş, ilan, kâğıt, not, grafiti, plaka,
araba, motosiklet, çöp kutusu, insan yok. Hiçbir yerde yazı, harf, rakam yok.

Işık: gün batımının alçak turuncu ışığı sokağın ucundan giriyor, kaldırım taşlarında
parıltı; dükkânın önü yarı gölgede. Hava: sessiz, biraz hüzünlü; batmış bir küçük
işletme.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kepenkte, kapıda, camda yazı/not/afiş var mı (not varsa
Nurcan sızıntısı), tabela izi gerçekten boş mu, binalarda tabela, alt üçte bir boş mu,
A9 ile aynı ışık ailesi mi.


## Sonuç — A13 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a13_ara_sokak.webp`. Dar Arnavut kaldırımlı
sokak, ucunda Haliç, vapur ve gün batımı; sağda yeşil, paslı, yazısız kepenk; tabelanın
söküldüğü yerde boş iz ve vida delikleri; camlı ahşap kapı, **not yok**; ters kasalar,
çamaşır ipinde iki çarşaf. **Yazı yok.** Taslakta İ6 (Serkan; figürü sırada).
Taslak etiketi "Taslak · deneme görselleri" → "Taslak" (görseller kalıcı).

## A14 — Serkan'ın dükkânının içi, camdan (A13 referanslı)

İ7 burada geçer. Kanonun görsel kuralı: **notun yüzü görünmez.** Çözüm geometride:
not kapının camına DIŞARIDAN bantlı; kamera İÇERİDEN bakıyor, yani yalnız kâğıdın
**arkası** görünür — bantları, kenarları, gün ışığında hafif saydam ama harfsiz.
Not İ7'nin olgusu olduğu için A14 yalnız İ7 açılınca gösterilir; A13 ile çelişmez
(A13'te kapı uzaktan ve cam karanlık).

**A13'ü referans olarak ekle** (aynı dükkân, içeriden).

```
Referans görseldeki dükkânın İÇİ: aynı sokak, aynı gün batımı ışığı, aynı renkler,
aynı çizim tarzı. Bu görselde hiç insan yok.

Kadraj: DİKEY (3:4). Kamera dükkânın İÇİNDE, göz hizasında, camlı ahşap kapıya ve
kepenge doğru, sokağa bakıyor. Görselin alt üçte biri boş, sakin, eski karo zemin:
orada hiçbir nesne yok.

Kadrajda YALNIZ şunlar var:
1. Ortada, referanstaki camlı ahşap kapı, içeriden; camından sokağın gün batımı ışığı
   giriyor, dışarıda Arnavut kaldırımı belli belirsiz seçiliyor.
2. Kapının camına DIŞARIDAN bantlanmış, beyaz, dikdörtgen bir kâğıt; içeriden
   yalnız ARKASI görünüyor: düz beyaz kâğıdın sırtı, dört köşesinde şeffaf bant.
   Kâğıdın arkasında hiçbir yazı, iz, gölge harf yok; ışık arkadan vurduğu için
   kâğıt düz, aydınlık bir dikdörtgen gibi parlıyor.
3. Solda, kepengin iç yüzü: inik, oluklu metal, içeriden çizgi çizgi ışık sızıyor.
4. Kapının önünde, uzun, boş, paslanmaz çelik bir tezgâh; üstünde yalnız ters çevrilmiş
   tek bir bardak ve kurumuş bir bez.
5. Tezgâhın önünde, üst üste ters çevrilmiş dört ahşap sandalye.
6. Duvarda boş bir ahşap raf ve tavandan sarkan sönük, çıplak bir ampul.
7. Zeminde, köşede, düz renkli, boş bir plastik balık kasası.

Başka hiçbir nesne yok: tabela, menü, fiyat listesi, takvim, fatura, kâğıt (kapıdaki
dışında), şişe, ambalaj, telefon, ekran yok. Hiçbir yerde yazı, harf, rakam yok.

Işık: içerisi loş; gün batımının turuncu ışığı yalnız kapı camından ve kepengin
aralarından giriyor, tozun içinde çizgiler çiziyor; kâğıt ışığa karşı parlıyor.
Hava: terk edilmiş, sessiz, biraz hüzünlü.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kâğıdın arkasında harf ya da ters yazı seçiliyor mu (en
büyük risk — ters harf de harftir; varsa rötuşla düz beyaza), A13 ile aynı kapı mı,
duvarda takvim/menü çizilmiş mi, alt üçte bir boş mu.


## Sonuç — A14 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a14_dukkan_ici.webp`. İçeriden kapı, camda
dört köşesi bantlı kâğıdın **arkası — bomboş**, ters harf yok (büyütülerek tarandı).
Işık sızan kepenk, çelik tezgâh, ters bardak, bez, ters sandalyeler, boş raf, sönük
ampul, mavi kasa. Taslakta İ7: not kâğıdı Peri ile Cengo'nun tam arasında görünüyor;
notun metni yalnız kutuda.

**VAKA 1 ARKA PLANLARI TAMAM:** A1, A2, A3, A3b, A5, A5b, A6L, A7L, A8, A9, A10, A11,
A12, A13, A14. (A4 — hanın sokaktan girişi — yıldızsız geçiş karesi; şimdilik açılış
S2 → S3 kararmayla geçiyor, gerekirse sonra.)

---

# DETAYLAR — VAKA 1

Detay = tam ekran yakın çekim, karaktersiz; ipucunun kendisi. Konuşma ekranında arka
planın yerine geçer (karakterler çekilir, `mekan: true` gibi), sonraki satırda mekâna
dönülür.

## D2 — İskelede zincir ve sağlam asma kilit (★, A9 referanslı)

İ3. Gösterir: `kilit_saglam` — kilit kırılmamış, zorlanmamış. **Yalnız İ3 açılınca.**
Asma kilidin gövdesi yazı riski (marka damgası): düz, damgasız istenir.

```
Referans görseldeki iskelenin AYNISI: aynı taş rıhtım, aynı paslı demir bağlama babası,
aynı zincir, aynı gün batımı ışığı, aynı çizim tarzı. Bu görselde hiç insan ve hiç el yok.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kamera rıhtım taşına çok yakın, bağlama babasının
dibine bakıyor; arka planda su ve tekneler bulanık.

Kadrajda YALNIZ şunlar var:
1. Babaya dolanmış kalın, paslı zincir; iki ucu, kadrajın ortasında, eski, pirinç bir
   asma kilitle birbirine kilitli.
2. Asma kilit SAĞLAM ve KAPALI: halkası kilidin gövdesine oturmuş, hiçbir çizik, ezik,
   kırık, zorlama izi yok; gövdesi düz, hiçbir yazı, marka, damga, rakam yok. Kilidin
   anahtar deliği net görünüyor.
3. Zincirin halkaları paslı, ama kilidin değdiği halkalar biraz daha parlak (yakın
   zamanda elle tutulmuş gibi).
4. Rıhtım taşının üstünde, kilidin yanında, ıslak bir iz.

Başka hiçbir nesne yok: kesici, alet, anahtar, kâğıt, etiket yok.

Işık: gün batımının alçak, sıcak ışığı kilidin pirincinde parlıyor. Hava: sakin, net;
"bu kilit açılmış ama kırılmamış" duygusu.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kilitte marka/damga/rakam (en büyük risk), kilit gerçekten
sağlam görünüyor mu (kırık ya da açık çizilirse ipucu tersine döner), A9 ile aynı zincir
ve baba mı, el ya da insan var mı.


## Sonuç — D2 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/detay_d2_kilit.webp`. Paslı baba, zincir, pirinç
asma kilit kapalı ve sağlam; kilidin değdiği halkalar parlak, taşta ıslak iz; arkada
bulanık iskele, yeşil tekne. **Kilitte marka/damga yok** (büyütülerek tarandı).
Taslakta İ3: "Kilidi kırılmamış…" satırında karakterler çekilir, D2 çapraz geçişle
gelir; Cengo'nun repliğinde iskeleye dönülür.

## D3 — Pruvada taze beyaz boya, altında eski adın gölgesi (★, A11 referanslı)

İ4. Gösterir: `nazli_izi`. **Yalnız İ4'te.** Kanon: "harfleri ve telefon ekranı görselde
görünmez; yalnız metinde." Ad metinde söyleniyor ("Nazlı"); görsel yalnız **bir şeyin
altta kaldığını** gösterir. Yazı riski en yüksek görsel bu: üretici adı okunur yazmaya
çok yatkın. İstenen: eski boyanın **harf olmayan**, dağınık lekeleri.

```
Referans görseldeki beyaz teknenin AYNISI: aynı ahşap gövde, aynı parlak beyaz boya,
aynı gün batımı ışığı, aynı çizim tarzı. Bu görselde hiç insan ve hiç el yok.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kamera teknenin pruvasına, bordanın ön ucuna çok
yakın; ahşap kalasların arasındaki çizgiler ve boyanın dokusu görünüyor. Arka planda
Boğaz'ın suyu bulanık.

Kadrajda YALNIZ şunlar var:
1. Pruvanın ahşap bordası, kadrajın çoğunu kaplıyor; üstünde taze, kalın, biraz
   özensiz sürülmüş beyaz boya; fırça izleri belli.
2. Beyaz boyanın altından, bordanın ortasında, eski boyanın hafifçe sızan gölgesi:
   yatay bir şerit hâlinde, dağınık, soluk, koyu lacivert lekeler; sanki bir zamanlar
   orada bir şey yazılıymış da üstü boyanmış. Lekeler HARF DEĞİL: biçimsiz, bulanık,
   kesik kesik; hiçbir harf, rakam, sembol seçilmiyor, okunmuyor.
3. Bir yerde beyaz boya hafifçe kabarmış, kenarından altındaki eski mavi boyanın küçük,
   biçimsiz bir parçası görünüyor.
4. Pruvanın ucunda eski, paslı bir halat halkası.

Başka hiçbir nesne yok: etiket, plaka, numara, bayrak, kâğıt yok.

Işık: gün batımının alçak ışığı bordayı yandan yalıyor; fırça izleri ve altta kalan
lekeler bu yan ışıkta seçiliyor. Hava: "boyanın altında bir şey var" duygusu.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın. Altta kalan izler
okunabilir bir kelime oluşturmasın.
```

**Geldiğinde bakılacaklar:** lekelerde harf ya da harfe benzer biçim var mı — en büyük
risk; tek bir okunur harf varsa rötuşla dağıtılır ya da yeniden üretilir. A11'deki
tekneyle aynı mı (beyaz, ahşap), alt kısımda gerçekten "altında bir şey var" okunuyor mu.


## Sonuç — D3 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/detay_d3_pruva.webp`. Kalın, fırça izli beyaz boya;
altından yatay bir şerit hâlinde sızan dağınık lacivert lekeler; köşede kabarmış boyanın
altından eski mavi; paslı halat halkası; arkada bulanık Boğaz ve gün batımı. **Lekelerde
harf ya da harfe benzer biçim yok** (büyütülerek tarandı) — "Nazlı" yalnız metinde.
Taslakta İ4'ün son satırında karakterler çekilir, D3 gelir.

## D1 — Kilitte Cengo'nun teli, kapı aralanıyor (A5 + Cengo referanslı)

Açılış S3, "İki saniye." Cengo'nun ilk marifeti; yıldızsız ama karakteri tanıtıyor.
**İki referans:** A5 (koridor, büro kapısı — kapı ve pirinç kilit aynı olsun) ve
Cengo'nun CA2'si (el, gömlek kolu ve **boncuklu bileklik** — kızından; elin kime ait
olduğunu bileklik söyler, yüz gerekmez). Bileklik harfsiz (kanon).

```
Birinci referans görseldeki koridorun ve büro kapısının AYNISI: aynı koyu ahşap kapı,
aynı pirinç kilit ve tokmak, aynı öğleden sonra ışığı, aynı çizim tarzı. İkinci referans
görseldeki adamın YALNIZ ELİ ve bileği: aynı ten, aynı kıvrılmış beyaz gömlek kolu, aynı
renkli boncuklu bileklik. Yüzü ve gövdesi görünmüyor.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kamera kapının kilidine çok yakın, kilit kadrajın
ortasında.

Kadrajda YALNIZ şunlar var:
1. Koyu ahşap kapının kenarı ve pirinç kilit; kapı ARALANMIŞ: kanadı içeri doğru bir
   parmak kadar açılmış, aradaki dar boşluktan içerideki odanın tozlu, sıcak ışığı
   ince bir çizgi hâlinde koridora sızıyor.
2. Kilidin anahtar deliğinde ince, eğilmiş, gümüş renkli tek bir tel.
3. Kadrajın sağından giren bir erkek eli: başparmak ve işaret parmağıyla telin ucunu
   gevşekçe tutuyor, kendinden emin, zahmetsiz. Bileğinde renkli boncuklardan, harfsiz
   bir bileklik; kolunda kıvrılmış beyaz gömlek kolu ve açık kahverengi ceketin kenarı.
4. Kapının üstünde, kadrajın tepesinde, pirinç tabelanın yalnız ince alt kenarı;
   yüzü görünmüyor.

Başka hiçbir nesne yok: anahtar, alet çantası, kâğıt, etiket yok.

Işık: koridorun loş, sıcak öğleden sonra ışığı; kapı aralığından sızan daha parlak bir
çizgi; telin ucunda küçük bir parıltı. Hava: hafif, oyunbaz; "iki saniye" anı.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** bileklikte harf var mı (kanon: harfsiz), el Cengo'nun eli
gibi mi (ten, kol, ceket), kapı A5'tekiyle aynı mı, tabelanın yüzü görünüyor mu, kapı
gerçekten aralık mı.


## D1 — üretici reddetti (6 Ekim 2026) → D1b

Üretici "içerik politikası" diyerek reddetti. Büyük olasılıkla **kilidi telle açan bir el**
tarifi "izinsiz giriş / hırsızlık talimatı" olarak okundu. Ders: **eylemin kendisini
değil, sonucunu göster.** Kapı zaten aralık, el yok, teldeki iş bitmiş; "tel" yerine
günlük bir nesne: **bükülmüş bir ataç**, kilitte asılı kalmış. Komedi aynı kalır:
"İki saniye" — ve ataç orada sallanıyor.

### D1b — Kilitte asılı kalmış bükülmüş ataç, kapı aralık (A5 referanslı)

```
Referans görseldeki koridorun ve kapının AYNISI: aynı koyu ahşap kapı, aynı pirinç
kapı kolu ve kilit, aynı öğleden sonra ışığı, aynı çizim tarzı. Bu görselde hiç insan,
hiç el yok.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kamera kapının kilidine yakın, kilit kadrajın
ortasında.

Kadrajda YALNIZ şunlar var:
1. Koyu ahşap kapının kenarı ve pirinç kilit; kapı biraz aralık: kanadı içeri doğru
   bir parmak kadar açılmış, aradaki dar boşluktan içerideki odanın sıcak, tozlu ışığı
   ince bir çizgi hâlinde dışarı sızıyor.
2. Kilidin deliğinden sarkan, eğrilip bükülmüş, gümüş renkli tek bir ataç; hafifçe
   sallanıyor gibi.
3. Kapının üstünde, kadrajın tepesinde, pirinç tabelanın yalnız ince alt kenarı; yüzü
   görünmüyor.

Başka hiçbir nesne yok: anahtar, alet, kâğıt, etiket yok.

Işık: loş, sıcak öğleden sonra ışığı; aralıktan sızan parlak bir çizgi; atacın ucunda
küçük bir parıltı. Hava: hafif, oyunbaz, komik; bir kapının fazla kolay açılmış olması.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

Bu da reddedilirse D1 düşer (yıldızsız): "İki saniye sürüyor. Kapı açılıyor." satırı
A5 üstünde metinle kalır.


## Sonuç — D1 (Grok ile, 6 Ekim 2026)

ChatGPT iki kez reddetti (el + tel, sonra yalnız ataç). Sahibi aynı ilk metni **Grok**'ta
denedi; üretti. Kopya `kaynak/yeni_gorsel/detay_d1_tel.webp`.

- **Tuttu:** koyu ahşap kapı, halka tokmak (A5 ile aynı), pirinç kilit, kilitte tel,
  zahmetsiz tutan el, beyaz gömlek kolu ve açık kahverengi ceket, **harfsiz renkli
  boncuklu bileklik**; kapı aralığından ışık çizgisi; arkada siyah-beyaz karo koridor.
- **Düzeltme 1 — kırpma:** kapının üstüne düz bir pirinç plaka konmuş, harfe benzer
  izler taşıyor ve kanondaki tabelayla (duvardan dik, yalnız kenarı) çelişiyordu. Üstten
  123 px kırpıldı; plaka tamamen çıktı, oran tam 3:4 oldu (784×1045).
- **Düzeltme 2 — parlaklık:** ortalama 69/49/30, koridor (A5) 129/87/56. `-level 0%,72%,1.15`
  ile 103/77/49'a çekildi; detay karesi olduğu için hafif koyu kalması sorun değil.
- **Stil:** öteki görsellerden biraz daha fotoğrafa yakın; tek başına tam ekran detay
  karesi olarak geçiyor, karakterlerle yan yana durmadığı için göze batmıyor.

**Ders:** ChatGPT kilit açma eylemini (hatta yalnız ataçlı kilidi) yasa dışı faaliyet
sayıyor. Böyle bir sahne gerekirse doğrudan Grok denenir; Grok çıktısı stil, renk ve
yazı için ayrıca kontrol edilir.

Taslakta koridor sahnesinde "İki saniye sürüyor. Kapı açılıyor." satırında karakterler
çekilir, D1 çapraz geçişle gelir; sonraki satırda koridora dönülür.

**VAKA 1 DETAYLARI TAMAM: D1, D2, D3.**

---

# YAN KARAKTERLER — VAKA 1

**Yöntem (temel setten kısaltılmış):** yan karakterlerin ekranda kameraya bakan kartı
yok, o yüzden ilk görsel doğrudan **ekran hâli**: başı ve bakışı kadrajın soluna
(Peri'ye) dönük, ekranın sağında durur, aynalanmaz. İkinci ifade bu görsel referans
verilerek üretilir. Stil referansı: Cengo'nun nötr görseli (CA2) — aynı tarafta durduğu
ve aynı yöne baktığı için kadraj ve ölçek de ondan gelir. Kesim: yeni profil
(`arac_kes.js`'e eklenir, çerçeve ilk görselden seçilir).

**Yazı riski:** yan karakterlerin elindeki her şey (liste, telefon, yaka kartı) yüzü
kapalı ya da ters çevrili istenir.

## H1 — Hilmi Bey, ciddi (★, ekran hâli)

Kanondan: icra memuru, çok kibar, işini harfiyen yapan biri; elinde liste. "Ben onu
takarken siz daha ilkokuldaydınız" / "O yarışmayı izledim, annemle" → **yaş otuz
civarı** (Peri'nin taç yılında ilkokulda). Görünüşün geri kalanı (gözlük, kumaş
yelek, ince bıyık) **öneri** — kanon değil, sahibi değiştirebilir.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı, ölçek, kadraj ve arka plan içindir; içindeki
adam bu görselde yok.)

Karakter: Hilmi Bey, otuz yaşında bir devlet memuru. Orta boylu, ince yapılı, dimdik
ve biraz resmî bir duruş; her şeyi kurallara göre yapan, ama içten içe kibar ve
utangaç biri. Kısa, düzgün taranmış, yandan ayrılmış koyu kahve saçlar; temiz traşlı,
yalnız ince, özenli bir bıyık. Yuvarlak, ince metal çerçeveli gözlük. Açık buğday ten.

Kıyafet: biraz eskimiş ama ütülü, gri, sade bir takım elbise; beyaz gömlek, düz lacivert
ince kravat, sıkıca bağlanmış. Ceketin altında gri örgü bir yelek. Yakasında ya da
göğsünde hiçbir kart, rozet, isim etiketi yok. Ayakkabılar parlatılmış.

Elinde: göğsüne bastırdığı, kapağı KAPALI, düz, koyu yeşil, karton bir dosya; kapağında
hiçbir yazı, etiket yok; içindeki kâğıtların yalnız kenarları görünüyor. Öteki elinde
tükenmez bir kalem. Kol saati, takı yok.

Poz: dimdik ayakta, dosya göğsünde iki eliyle tutuluyor; kalem dosyanın üstünde.

Başın açısı ve bakış: başı ve gözleri kadrajın soluna, karşısında duran birine dönük;
yüzü üç çeyrek profilden görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında kalıyor. Kameraya bakmıyor.

İfade: ciddi, resmî, nazik; dudakları kapalı, kaşları hafif yukarıda, "görevimi
yapıyorum, kusura bakmayın" diyen bir yüz.

Kadraj: DİKEY. Referanstaki adamla aynı ölçek ve kesim: uyluk ortasından yukarısı,
başın tepesi aynı yükseklikte. Tek başına, ayakta.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** dosyada/yakada yazı, kart ya da rozet var mı, yaş otuz
civarı mı (yaşlı memur çizilirse "ilkokuldaydınız" esprisi ölür), bakış kadrajın soluna
mı, ölçek Cengo ile aynı mı, arka plan düz bej mi.


## Sonuç — H1 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_hilmi_ciddi.webp`. Otuz civarı, gözlük, ince
bıyık, gri takım, örgü yelek, lacivert kravat; kapalı yeşil dosya göğsünde, kalem elde;
bakış kadrajın soluna. **Yazı/kart/rozet yok.** Stil öteki setten biraz daha yumuşak ve
mat, ama sahnede uyuyor.

Kesim: kaynak 1086×1448 (Peri/Cengo 1122×1402). İlk kesimde delik doldurma **beyaz
gömleği sildi** (Cengo'daki aynı ders) → `arac_kes.js`'e `hilmi` profili eklendi: tam
genişlik, delik doldurma kapalı.

Taslakta: sahne kaydına `konuk: "hilmi"` — Cengo'nun olmadığı sahnede yan karakter
sağdaki yerde durur, konuşunca öne gelir, konuşmayınca kararır. Hilmi Peri'den yarım baş
uzun; erkek figür için doğal.

## H2 — Hilmi Bey, hafif gülümseyen (H1 referanslı)

Replikler: "Annem size oy vermişti." / "Söylerim. Tacı verir misiniz?" / "Üstünüzde."

```
Referans görseldeki adamın AYNISI: aynı yüz, aynı yaş, aynı gözlük ve bıyık, aynı saç,
aynı gri takım, yelek, gömlek ve kravat, aynı kapalı yeşil dosya, aynı çizim tarzı,
aynı düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, aynı kesim,
başın tepesi aynı yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Kameraya
bakmıyor.

Değişen şeyler poz ve ifade.

Poz: dosyayı tek koluyla göğsüne bastırıyor; öteki eli kalemi tutarken hafifçe göğsüne
değmiş, "içtenlikle" der gibi. Başı çok hafif yana eğik.

İfade: utangaç, sıcak, hafif bir gülümseme; dudakları kapalı, bir köşesi yukarı
kalkmış; kaşları ortada hafif yukarıda; yanaklarında belli belirsiz bir kızarıklık;
gözleri yumuşamış. Resmî memur bir an çocukluğunu hatırlamış gibi.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** aynı adam mı (gözlük, bıyık, yaş), ölçek H1 ile aynı mı,
dosyada yazı var mı, bakış kadrajın soluna mı.


## Sonuç — H2 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_hilmi_gulen.webp`. Aynı adam, aynı ölçek (H1 ile
yan yana birebir); el göğsünde, utangaç gülümseme, yanaklar pembe. Yazı yok. Taslakta
satır düzeyinde `konuk: "gulen" | "ciddi"` ile ifade seçiliyor ("Hatıraları sizde
kalsın", "Üstünüzde" gülümseyen). **Hilmi Bey tamam.**

## R1 — Rıza Reis, normal (★, ekran hâli)

Kanondan: "Kapıda yetmişlerinde bir adam. Kasket, lacivert yelek, ellerinde ağ izleri."
Kırk yıllık balıkçı; karısının adını teknesine vermiş; kendi zincirini her akşam kendi
kilitler, anahtar boynunda. **Stil referansı Cengo CA2** (Hilmi biraz mat kaydı; set
rengini Cengo/Peri'den almak daha güvenli).

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı, renk, ölçek, kadraj ve arka plan içindir;
içindeki adam bu görselde yok.)

Karakter: Rıza Reis, yetmiş yaşında, kırk yıldır Karaköy'de balıkçılık yapan bir adam.
Orta boylu, tıknaz, geniş omuzlu; yaşına rağmen sağlam. Güneşten ve tuzdan yanmış,
derin çizgili, esmer bir yüz; kalın, beyaz, gür bir bıyık; kısa kırçıl sakal. Gür,
kırçıl kaşların altında küçük, keskin, açık kahve gözler. Elleri iri, nasırlı; parmak
eklemlerinde ve avuç kenarlarında ağ ipinin bıraktığı ince çizik izleri.

Kıyafet: başında eski, yıpranmış, lacivert bir kasket. Üstünde açık mavi, kalın pamuklu,
kolları dirseğe sıvalı bir gömlek; üstünde koyu lacivert, örgü, düğmeli, eski bir yelek.
Koyu, kalın bir kumaş pantolon. Boynunda, gömleğin yakasından içeri giren ince, siyah bir
kordon; ucu gömleğin altında, görünmüyor. Saat, yüzük, başka takı yok. Kıyafetlerde
hiçbir yazı, logo, arma yok.

Poz: dimdik ama yorgun ayakta; iki eli önünde, kasketini değil, iri parmaklarını
birbirine kenetlemiş; omuzları hafif öne düşük.

Başın açısı ve bakış: başı ve gözleri kadrajın soluna, karşısında duran birine dönük;
yüzü üç çeyrek profilden görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında kalıyor. Kameraya bakmıyor.

İfade: ağırbaşlı, gururlu ama derdi belli; dudakları kapalı, bıyığının altında sıkılı;
kaşları hafif çatık; gözleri yorgun ama dik bakıyor. Yardım istemeye alışık olmayan biri.

Kadraj: DİKEY. Referanstaki adamla aynı ölçek ve kesim: uyluk ortasından yukarısı,
başın tepesi aynı yükseklikte (kasketiyle birlikte biraz daha kısa durabilir). Tek
başına, ayakta.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** yaş yetmiş mi (gençleşme riski), kasket ve lacivert yelek
var mı, ellerde ağ izleri seçiliyor mu, boyun kordonunun ucu gizli mi (anahtar görünmemeli
— İ1'de söylüyor ama görselde göstermek gereksiz), kıyafette yazı/arma var mı, bakış
kadrajın soluna mı.
