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


## Sonuç — R1 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_riza_normal.webp`. Yetmiş civarı, lacivert
kasket, açık mavi gömlek, lacivert örgü yelek, beyaz bıyık ve kırçıl sakal, iri nasırlı
eller kenetli; bakış kadrajın soluna; boyun kordonunun ucu gömleğin içinde. Yazı/arma
yok. Kesim `hilmi` profiliyle (aynı kaynak boyu, beyaz yok ama açık mavi gömlek).

**Boy dersi:** bütün figürler aynı çerçeveyle kesildiği için ekranda aynı boyda duruyor;
"orta boylu, tıknaz" Rıza Reis Peri'nin üstünde dev gibi kaldı. Taslağa `KONUK_BOY`
eklendi (Rıza 0.86, Hilmi 0.95) — kanondaki boy farkı arayüzde verilir, görsel yeniden
üretilmez. Gerçek oyunda figür kaydı `boy` alanı taşımalı.

Taslakta Vaka 1 girişi (büro, kapıda Rıza Reis; Peri–Rıza replikleri) eklendi. Üç
figürlü düzen (Peri + Cengo + konuk) henüz yok — o sahnede Cengo çekilmiş, Rıza onun
yerinde. Üçlü düzen gerçek oyunun arayüz işi.

## R2 — Rıza Reis, dertli (R1 referanslı)

Replikler: "Teknemi aldılar. Kırk yıllık teknemi." / "Ben bir hafta denize çıkmazsam
batarım." / "Bugün balık yok, tekne yok, para yok."

```
Referans görseldeki adamın AYNISI: aynı yüz, aynı yaş, aynı kasket, bıyık ve sakal,
aynı açık mavi gömlek, lacivert örgü yelek ve pantolon, aynı çizim tarzı, aynı düz açık
bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, aynı kesim, başın tepesi aynı
yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Kameraya
bakmıyor.

Değişen şeyler poz ve ifade.

Poz: kasketini başından çıkarmış, iki eliyle göğsünün önünde tutuyor, parmakları
kasketin kenarını sıkıyor; kırçıl saçları dağınık görünüyor. Omuzları düşmüş, başı
hafifçe öne eğik.

İfade: derdini saklamaya çalışan gururlu bir adam; kaşları ortada yukarı kalkmış,
alnında derin çizgiler; gözleri nemli ama ağlamıyor; dudakları bıyığının altında
sıkılı, çenesi titremesin diye kasılmış.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** aynı adam mı, kasketin içinde/üstünde yazı ya da etiket var
mı (kasketin içi görünürse en büyük risk), ölçek R1 ile aynı mı, bakış kadrajın soluna mı.


## Sonuç — R2 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_riza_dertli.webp`. Kasket elinde, buruşturulmuş,
**içi görünmüyor** (etiket riski yok); saçları dağınık, kaşlar kalkık, gözler nemli. Ölçek
R1 ile aynı. Taslakta "Teknemi aldılar" ve "…Ödenir" dertli, "Otuz beş bin mi?" ciddi.

## R3 — Rıza Reis, öfkeli (R1 referanslı)

K1 sonucu ("tekneye çıktı, boyaya tırnağını geçirdi") ve ara kare K3 için de yüz kaynağı.
Kanondaki öfke: bağırmayan, kızgınlığını tutan yaşlı adam — patlama değil, kararlılık.

```
Referans görseldeki adamın AYNISI: aynı yüz, aynı yaş, aynı kasket, bıyık ve sakal,
aynı açık mavi gömlek, lacivert örgü yelek ve pantolon, aynı çizim tarzı, aynı düz açık
bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, aynı kesim, başın tepesi aynı
yükseklikte, dikey.

Başın açısı referansla aynı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden
görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Kameraya
bakmıyor.

Değişen şeyler poz ve ifade.

Poz: gövdesi hafifçe öne, kadrajın soluna eğilmiş; bir eli yumruk hâlinde yanında,
öteki elinin işaret parmağı ileri, kadrajın soluna doğru uzatılmış, uyarır gibi.
Omuzları kalkık, geniş göğsü şişmiş.

İfade: tutulmuş, sessiz bir öfke: kaşları sertçe aşağı ve içe çatılmış, alnında derin
bir kırışık; gözleri kısılmış, keskin; bıyığının altında dişleri sıkılı, ağzı hafif
aralık, tek bir sert söz söylemek üzere; burun kanatları açılmış; yüzü kızarmış.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** aynı adam mı, ölçek R1 ile aynı mı, parmak çerçeveden taşıyor
mu (taşıyorsa geniş kesim), öfke komedi tonunu aşıp korkutucu olmuş mu.


## Sonuç — R3 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_riza_ofkeli.webp`. Kaşlar çatık, dişler sıkılı,
yüz kızarmış, parmak kadrajın soluna uzanmış, öteki el yumruk; tutulmuş öfke, korkutucu
değil. Baş R1 ile aynı yerde; parmak çerçevenin içinde (geniş kesim gerekmedi). Taslakta
K1 sonucu yok; gerçek oyunda K1 sonuç ekranında ve K3 ara karesinde kullanılır.
**Rıza Reis tamam (normal, dertli, öfkeli).**

## S1 — Serkan, kaçamak (★, ekran hâli)

Kanondan: Rıza Reis'in oğlu, otuzlarında ("Otuzlarında bir adam. Serkan." — Tuba);
batmış balık-ekmek dükkânı, cuma ödemeli borç; konuyu değiştiriyor; cebi şıngırdıyor
(yedek anahtar); **boynunda bir dizi setinin yaka kartı, Peri bakınca gömleğinin içine
sokuyor.** Kanonun görsel kuralı: **yaka kartının yüzü görünmez.** Çözüm: kart yarı
yarıya gömleğin içine sokulmuş, görünen kısmı kartın **arkası** — düz, boş. Ekranda Peri'ye
bakan biri olarak, kartı saklamaya çalışırken yakalanmış an.

Görünüş (balıkçı tulumu değil, kafe-dükkân sahibi genç adam) öneridir.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı, renk, ölçek, kadraj ve arka plan içindir;
içindeki adam bu görselde yok.)

Karakter: Serkan, otuz iki yaşında, İstanbullu bir adam; yaşlı bir balıkçının oğlu.
Orta boylu, ince; omuzları hafif çökük, yerinde duramayan, gergin biri. Babasından
kalma geniş yüz hatları ama daha yumuşak; kısa, kenarları kazınmış koyu kahve saç, iki
günlük sakal, uykusuz gözlerinin altında morluk. Esmer ten.

Kıyafet: eskimiş, koyu yeşil bir kapüşonlu üst, fermuarı yarıya kadar açık; altında
gri bir tişört. Koyu, solmuş bir kot. Kapüşonlunun ve tişörtün üzerinde hiçbir yazı,
logo, desen yok.

Boynunda: ince, siyah bir kordon; ucundaki plastik, dikdörtgen kart YARI YARIYA
tişörtünün yakasından içeri sokulmuş; görünen yarısı kartın ARKA YÜZÜ: düz, beyaz, boş,
hiçbir yazı, fotoğraf, logo yok.

Poz: bir eli kartı tişörtünün içine itmeye çalışırken yakalanmış, yaka hizasında;
öteki eli kotunun cebinde, cebi şişkin (içinde anahtarlar). Ağırlığı bir ayağında,
kaçmaya hazır gibi hafif yana dönük.

Başın açısı ve bakış: başı kadrajın soluna, karşısında duran birine dönük; yüzü üç
çeyrek profilden görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında
kalıyor. Ama gözleri karşısındakinin yüzüne değil, kaçamak bir biçimde aşağıya ve yana
kayıyor. Kameraya bakmıyor.

İfade: kaçamak, suçlu, zoraki bir gülümseme; dudaklarının bir köşesi yukarıda ama gözleri
gülmüyor; kaşları ortada kalkık; "bir şey yok, her şey yolunda" der gibi.

Kadraj: DİKEY. Referanstaki adamla aynı ölçek ve kesim: uyluk ortasından yukarısı,
başın tepesi aynı yükseklikte. Tek başına, ayakta.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kartta yazı/fotoğraf/logo görünüyor mu (en büyük risk — kanon
yüzünün görünmesini yasaklıyor; görünüyorsa rötuşla düz beyaza), kıyafette yazı/logo,
yaş otuzlar mı, bakış kaçamak ama kadrajın soluna mı, Rıza Reis'in oğlu olabilir mi.


## S1 — ilk deneme Cengo'ya benzedi (6 Ekim 2026) → S1b

Sahibinin itirazı: "Cengo'ya benziyor mu?" — evet: yüz kesimi, dağınık koyu saç, hınzır
yarım gülüş neredeyse aynı. **Ders: yan karakterde referans olarak ana karakteri verme;
üretici yüzü de alır.** Stil referansı olarak yalnız arka plan/sahne değil, kişi
gösteren her görsel yüz sızdırır. Serkan için referans **babası Rıza Reis** (R1):
benzerlik hikâyeye hizmet eder. Yüz tarifi Cengo'dan bilerek uzaklaştırıldı.

### S1b — Serkan, kaçamak (R1 referanslı)

```
Referans görseldeki yaşlı adamın OĞLU: aynı aile yüzü, aynı geniş elmacık kemikleri,
aynı kalın kaşlar ve aynı burun biçimi, ama otuz iki yaşında. Aynı çizim tarzı, aynı
renkler, aynı düz açık bej arka plan, referansla aynı ölçek ve kadraj: uyluk ortasından
yukarısı, başın tepesi aynı yükseklikte, dikey. Referanstaki yaşlı adamın kendisi bu
görselde yok.

Karakter: Serkan, otuz iki yaşında; yuvarlakça, yumuşak hatlı, biraz tombul yanaklı bir
yüz; geniş, etli bir burun; çok kısa, makineyle kesilmiş koyu kahve saç (dağınık ya da
kıvırcık DEĞİL); seyrek, düzensiz bir sakal; uykusuz, şiş göz kapakları, gözlerinin
altında morluk. Orta boylu, hafif kilolu, omuzları çökük. Yakışıklı ya da karizmatik
değil; sıradan, yorgun, dertli bir genç adam.

Kıyafet: eskimiş, koyu yeşil, fermuarlı kapüşonlu bir üst, fermuarı yarıya kadar açık;
altında gri bir tişört; solmuş koyu kot. Hiçbir yazı, logo, desen yok.

Boynunda: ince siyah bir kordon; ucundaki plastik, dikdörtgen kart YARI YARIYA tişörtün
yakasından içeri sokulmuş; görünen yarısı kartın ARKA YÜZÜ: düz, beyaz, boş.

Poz: bir eli kartı tişörtünün içine itmeye çalışırken yakalanmış, yaka hizasında; öteki
eli kotunun cebinde, cebi şişkin. Omuzları büzülmüş.

Başın açısı ve bakış: başı kadrajın soluna dönük, yüzü üç çeyrek profilden; burnu
kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Gözleri karşısındakinden
kaçıyor, aşağıya bakıyor. Kameraya bakmıyor.

İfade: korkak, suçlu, sinik değil; zorla gülümsemeye çalışan ama beceremeyen bir ağız,
dudakları gergin; kaşları ortada endişeyle kalkık; alnında ter. Hınzır ya da kendinden
emin DEĞİL.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```


## Sonuç — S1b (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_serkan.webp`. Kısa saç, yuvarlak yüz, seyrek
sakal, terli alın, korkak gülümseme; Rıza Reis'in oğlu olarak okunuyor, **Cengo'ya
benzemiyor.** Kartın görünen kısmı boş beyaz arka yüz. Taslakta satır düzeyinde
`konukGir` / `konukCik`: Serkan konuşmaya girince Cengo'nun yerine geçiyor, dükkâna
geçerken çıkıyor ve Cengo dönüyor. Boy 0.92.

## T1 — Tuba, set mekân sorumlusu (★, ekran hâli)

Kanondan: "Mekân sorumlusu Tuba, elinde üç telefonla"; telaşlı, pratik, "Çekim cumaya
yetişmezse ben yetişemem." Yaş ve görünüş öneridir: kırklarında (Peri'den ve sezonun
genç pastane çalışanından ayrışsın), işini bilen, uykusuz bir set emekçisi.

**Referans: Rıza Reis R1** (yalnız stil, renk, ölçek). Yan karakter kuralı: ana
karakter referans verilmez. Yaşlı bir erkek referansı kadın figüre yüz sızdırmaz.

**Yazı riski:** üç telefonun ekranı. Hepsi ekranı ona dönük ya da kapalı/kararmış;
set yeleği/yaka kartı yok.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı, renk, ölçek, kadraj ve arka plan içindir;
içindeki adam bu görselde yok.)

Karakter: Tuba, kırk iki yaşında, bir dizi setinin mekân sorumlusu. Orta boylu, sağlam
yapılı, enerjik; hep acelesi olan, pratik, işini bilen biri. Kalın, dalgalı, koyu kumral
saçları tepede gelişigüzel bir topuzla toplanmış, topuza bir kurşun kalem saplanmış;
birkaç tutam yüzüne düşmüş. Gözlerinin altında uykusuzluk; makyajı yok denecek kadar az.
Açık buğday ten.

Kıyafet: bol, koyu lacivert, kolları sıvalı bir keten gömlek, üstünde kalın, haki,
çok cepli bir çalışma yeleği; ceplerden yalnız birkaç kalem ve bir rulo bant görünüyor.
Siyah, rahat bir pantolon. Boynunda hiçbir kart, isim etiketi yok. Kıyafetlerde hiçbir
yazı, logo, arma yok.

Elinde: ÜÇ cep telefonu: biri kulağında, ikisi öteki elinde üst üste tutuluyor. Bütün
ekranlar ya ona dönük ya da kararmış; hiçbir ekranın yüzü görünmüyor.

Poz: bir telefon omzuyla kulağı arasında sıkıştırılmış, başı o yana eğik; öteki elinde
iki telefon; gövdesi hafif dönük, sanki yürürken durmuş.

Başın açısı ve bakış: başı ve gözleri kadrajın soluna, karşısında duran birine dönük;
yüzü üç çeyrek profilden görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında kalıyor. Kameraya bakmıyor.

İfade: telaşlı ama dostça; kaşları kalkık, ağzı konuşurken hafif açık, gözleri
yorgun ama canlı; "iki dakikam var, hızlı sorun" der gibi.

Kadraj: DİKEY. Referanstaki adamla aynı ölçek ve kesim: uyluk ortasından yukarısı,
başın tepesi aynı yükseklikte. Tek başına, ayakta.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** telefon ekranlarında yazı/görüntü (en büyük risk), yelekte
arma/yazı, kurşun kalemde yazı, Peri'ye benzemiş mi, bakış kadrajın soluna mı.


## Sonuç — T1 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_tuba.webp`. Kırklarında, dağınık topuzda kurşun
kalem, lacivert gömlek, çok cepli haki yelek (kalemler, bant), bir telefon omzunda, iki
telefon elde — **hepsinin sırtı görünüyor, ekran yok.** Yazı/arma yok. Peri'ye
benzemiyor. Taslakta Tuba satırlarında `konukGir: "tuba"`; boy 0.9.

## C1 — Çaycı, gülümseyen (ekran hâli)

Kanondan: iskeledeki çay ocağının sahibi; Cengo'ya üç bardak çayı sonunda ödüyor ve
konuşuyor; "Dümendeki genç bana el salladı." Görünüş öneridir: altmışlarında, tombul,
şakacı, iskelenin her şeyini gören biri.

**Referans: Tuba T1** (yalnız stil, renk, ölçek). Rıza Reis referans verilmez — yaşlı
erkek yüzü sızar ve iki iskele adamı birbirine benzer.

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
(Referans görsel yalnız çizim tarzı, renk, ölçek, kadraj ve arka plan içindir;
içindeki kadın bu görselde yok.)

Karakter: Karaköy iskelesindeki çay ocağının sahibi, altmış beş yaşında bir adam.
Kısa boylu, tombul, yuvarlak göbekli; neşeli, meraklı, şakacı. Yuvarlak, kırmızı
yanaklı, güler yüzlü bir surat; tamamen dökülmüş, parlak bir kafa, kulaklarının üstünde
yalnız ince beyaz saç; gür, beyaz, uçları yukarı kıvrık bir bıyık; sakal yok. Gözlerinin
kenarında derin gülme çizgileri.

Kıyafet: beyaz, kolları sıvalı bir gömlek; üstünde bele bağlanmış, düz, açık kahve bir
önlük (üzerinde hiçbir yazı, logo yok); koyu gri kumaş pantolon. Omzunda katlanmış küçük
beyaz bir kurulama bezi.

Elinde: bir eliyle tuttuğu yuvarlak, metal, askılı bir çay tepsisi; tepside iki ince
belli çay bardağı, içlerinde koyu kızıl çay. Tepside ve bardaklarda yazı, damga yok.

Poz: tepsiyi ustalıkla tek elle göğüs hizasında tutuyor; öteki eli havada, bir şey
anlatırken el sallar gibi.

Başın açısı ve bakış: başı ve gözleri kadrajın soluna, karşısında duran birine dönük;
yüzü üç çeyrek profilden görünüyor. Burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında kalıyor. Kameraya bakmıyor.

İfade: geniş, sıcak, dedikodu yapmaya hazır bir gülümseme; gözleri parlıyor, kaşları
kalkık, "Sana bir şey söyleyeyim mi?" der gibi.

Kadraj: DİKEY. Referanstaki kadınla aynı ölçek ve kesim: uyluk ortasından yukarısı,
başın tepesi aynı yükseklikte. Tek başına, ayakta.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** önlükte yazı/logo, Rıza Reis'e benzemiş mi (kasket, sakal,
yelek olmamalı), bardak ve tepside damga, bakış kadrajın soluna mı.


## Sonuç — C1 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/figur_cayci.webp`. Kel, tombul, kıvrık beyaz bıyık,
beyaz gömlek, kahve önlük, omzunda bez, askılı tepside iki çay; Rıza Reis'e benzemiyor.
Önlükte yazı yok (bezdeki mavi çizgiler desen). Taslakta İ2'de `konukGir: "cayci"`,
Cengo'nun repliğinde `konukCik`; boy 0.82 (kısa boylu).

**YAN KARAKTERLER TAMAM:** Hilmi Bey (2), Rıza Reis (3), Serkan, Tuba, çaycı.

---

# ARA KARELER — VAKA 1

Ara kare = konuşma ekranının taşıyamadığı doruk an; tam ekran, karakterler içinde çizili.
Yüzler riskli (üretici yüzü kaydırır), o yüzden ilk tercih **yüzsüz kadraj**: eller,
nesneler, sırttan çekim. Yüz gerekirse sprite referans verilir.

## K1 — Taç kolinin içine giriyor (★, A2 referanslı)

Açılış S1 sonu: "Peri tacı bırakmıyor. Hilmi Bey nazikçe çekiyor… Peri bırakıyor. Taç
bir kolinin içine giriyor; koli kapanıyor." **Yüzsüz:** yalnız eller ve taç.

İki referans: **A2** (salon, ters açı — arka plan, ışık, koliler) ve **Hilmi Bey H1**
(gri takım kolu, beyaz manşet). Peri'nin eli metinle tarif edilir (krem saten kol —
mantosuz set; takı yok — kanon).

```
Birinci referans görseldeki salonun AYNISI arka planda, bulanık: aynı krem duvarlar,
aynı balıkçılsırtı parke, aynı sabah ışığı, aynı çizim tarzı. İkinci referans
görseldeki adamın YALNIZ kolu ve elleri: aynı gri takım ceketin kolu, aynı beyaz
gömlek manşeti. Yüzü görünmüyor.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kadrajın ortasında, göğüs hizasında, açık duran
kapaksız düz kahverengi bir karton koli; kamera kolinin biraz üstünden bakıyor.

Kadrajda YALNIZ şunlar var:
1. Ortada, parlak, gümüş renkli, ince işçilikli, kristal taşlı küçük bir güzellik
   yarışması tacı; tam kolinin içine düşmek üzere, havada.
2. Kadrajın solundan giren bir kadın eli: krem rengi saten bluz kolu, ince bilek,
   parmakları tacın ucunu son bir kez bırakıyor; parmak uçları hâlâ tacın kenarına
   değiyor, isteksizce. Elde yüzük, bilezik, saat yok.
3. Kadrajın sağından giren bir erkeğin iki eli: gri takım kolu, beyaz manşet;
   koliyi iki yanından nazik, saygılı bir tavırla tutuyor.
4. Kolinin içi boş, karanlık; kolinin üzerinde hiçbir yazı, etiket, işaret yok;
   kenarında yarım kalmış bir bant şeridi.

Başka hiçbir nesne yok: kâğıt, liste, dosya, telefon yok.

Işık: sabah güneşi arkadan; tacın kristallerinde küçük parıltılar; arka plan yumuşak
bulanık. Hava: komik bir hüzün; bir devrin bir koliye girişi.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** tacın üstünde yazı/rakam/kurdele yazısı (güzellik tacı
kurdele çağırır — yasak), kolide yazı, Peri'nin elinde takı, el sayısı (üretici fazla
parmak/el çizebilir), kollar doğru kişilerin mi (krem saten / gri takım).


## Sonuç — K1 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k1_tac.webp`. Peri'nin eli (krem saten kol,
takısız) tacın ucunu bırakıyor; Hilmi Bey'in gri takımlı iki eli koliyi tutuyor; kolide
yarım bant; arkada bulanık salon ve sabah ışığı. Taçta kurdele/yazı yok, kolide yazı
yok; el ve parmak sayıları doğru. Taslakta "Satmıyoruz. Haczediyoruz."dan sonra K1
(karakterler çekilir), sonra avizesiz salona dönülür.

## K2 — Peri boş salonda mantonun kuşağını sıkıyor (A3b + Peri A2 referanslı)

Açılış S2 sonu: "Peri mantoyu giyiyor. Kuşağını bağlıyor, düğümü sıkıyor." — "Üstümde."
Yıldızsız. **Yüzsüz kadraj:** belden aşağı-yukarı dar, eller ve düğüm; ardında boş askı
ve boş salon. Mantonun kesimi ve rengi Peri'nin sprite'ından gelir.

```
Birinci referans görseldeki boş salonun AYNISI arka planda, bulanık: aynı boş oda, aynı
pencereler, aynı öğle ışığı, kapının yanında BOŞ ayaklı askılık. İkinci referans
görseldeki kadının YALNIZ mantosu ve elleri: aynı domates kırmızısı, kemerli yün manto,
aynı altındaki krem saten bluzun kenarı. Kadının yüzü görünmüyor.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kamera kadının bel hizasında, kadrajın ortasında
mantonun kuşağı; kadraj göğsün altından dizlerin üstüne kadar.

Kadrajda YALNIZ şunlar var:
1. Kırmızı yün mantonun beli; kuşak iki elle sıkıca düğümleniyor; iki el kuşağın
   uçlarını kararlı bir hareketle iki yana çekiyor, düğüm sıkılıyor.
2. Kadın elleri: ince, bakımlı; yüzük, bilezik, saat yok.
3. Arka planda, bulanık, boş salon ve kapının yanında boş ayaklı askılık.

Başka hiçbir nesne yok.

Işık: öğle güneşi pencereden, kırmızı yünde sıcak bir parlaklık. Hava: kararlılık;
"üstümde" — kaybedilen her şeyin içinden kalan tek şey.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** manto Peri'ninkiyle aynı mı (renk, kuşak, yaka), elde takı
var mı, askı boş mu, yüz kadraja girmiş mi.


## Sonuç — K2 (6 Ekim 2026)

**Tuttu, bir soruyla.** Kopya `kaynak/yeni_gorsel/ara_k2_manto.webp`. Kırmızı manto,
kuşak iki elle düğümleniyor, takı yok, krem saten bluz ve dekolte sprite ayarında,
arkada boş askı ve öğle salonu. Yazı yok.
**Süreklilik sorusu:** mantonun içinde görünen etek kırmızı — mantosuz sette Peri **siyah
kalem etek** giyiyor. Kruvaze mantonun iç kanadı olarak da okunabilir. Sahibine soruldu.
Taslakta "Peri mantoyu giyiyor" satırında K2, "Üstümde."de boş askılı salon.

### K2b — sahibinin kararı: siyah kalem etekle yeniden (6 Ekim 2026)

Üçüncü referans eklendi: Peri mantosuz PM2 (siyah kalem etek ve kemer için). Metne
eteği adıyla soran satır eklendi — "kırmızı etek yok" de; yoksa üretici mantonun rengini
eteğe taşır.


## Sonuç — K2b (6 Ekim 2026)

**Tuttu, kırpmayla.** Kopya `kaynak/yeni_gorsel/ara_k2_manto.webp` (eskisinin yerine).
Siyah kalem etek ve kemer tokası mantonun arasından görünüyor; manto, kuşak, boş askı
doğru. **Üst kenarda sarı bir saç tutamı vardı** (Peri kumral-kızıl, topuz) — üstten 45 px
kırpıldı, 3:4 korundu (1052×1403). Ders: yüzsüz kadrajda da saç kenardan sızabilir;
"saç kadraja girmesin" satırı eklenmeli.

## K3 — Rıza Reis setin ortasında teknede, boyaya tırnağını geçiriyor (★)

K1 kararının sonucu: "Çekimin ortasında sete daldı, tekneye çıktı, boyaya tırnağını
geçirdi. Çekim durdu." İki referans: **A11** (set, beyaz tekne, ışıklar) ve **Rıza Reis
R3** (öfkeli — yüz, kıyafet). Başka insan yok (set ekibi kadraj dışında; "çekim durdu"
metinden gelir).

```
Birinci referans görseldeki setin AYNISI: aynı beyaz boyanmış ahşap tekne, aynı iki film
ışığı, aynı gün batımı, aynı Boğaz manzarası, aynı çizim tarzı. İkinci referans
görseldeki yaşlı adamın AYNISI: aynı yüz, kasket, bıyık ve sakal, aynı açık mavi gömlek,
lacivert örgü yelek. Başka hiçbir insan yok.

Kadraj: DİKEY (3:4). Kamera kıyıdan, tekneye yakın, biraz alttan bakıyor. Adam teknenin
güvertesinde, pruvanın yanında; kadrajın ortasında, belden yukarısı görünüyor.

Kadrajda YALNIZ şunlar var:
1. Yaşlı adam, güvertede tek dizinin üstüne çökmüş, bir eli pruvanın küpeştesini
   kavramış; öteki elinin başparmak tırnağını taze beyaz boyaya bastırıp çekiyor:
   tırnağının altında beyaz boya kalkmış, altından eski mavi boya kısacık bir çizgi
   hâlinde görünüyor. Bu çizgi harf değil, yalnız kısa bir çizik.
2. Yüzü, üç çeyrek profilden, boyaya eğilmiş; kaşları çatık, gözleri dolu, dudakları
   bıyığının altında sıkılı: öfke ve tanıma bir arada — "bu benim teknem".
3. Teknenin güvertesinde devrilmiş beyaz bir minder ve yan yatmış beyaz şemsiye.
4. Arkada referanstaki iki film ışığı yanıyor, ama kimse yok; sette sessizlik.

Başka hiçbir nesne yok: klaket, kamera önünde kimse, kâğıt, telefon yok. Teknenin
hiçbir yerinde ad, harf, rakam yok.

Işık: gün batımının turuncu ışığı ve film ışıklarının beyazı; adamın yüzü ikisinin
arasında. Hava: dizinin sahte parıltısının ortasında gerçek bir an.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kazınan boyanın altında harf seçiliyor mu (Nazlı adı burada
görünmemeli), Rıza Reis'in yüzü ve kıyafeti tutuyor mu, başka insan var mı, tekne
A11'dekiyle aynı mı.


## Sonuç — K3 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k3_riza_teknede.webp`. Rıza Reis (yüz, kasket,
yelek, kordon tutuyor) beyaz teknenin bordasına eğilmiş, başparmağının altında kalkan
boya; altından **yalnız mavi lekeler, harf yok**. Gözleri dolu. Arkada iki film ışığı,
devrik şemsiye ve minder, Rumeli Hisarı, gün batımı. Taslakta K1 sonuç ekranı yok;
gerçek oyunda K1 sonucunda gösterilir.

## K4 — Büroda levrek kasası, Cengo buzdolabına sığdırmaya çalışıyor (★, A6L + CA2)

K2 sonucu: "Cengo levrek kasasını büronun tek buzdolabına sığdırmaya çalıştı. Sığmadı."
Kanon metinde **büroda bir buzdolabı var**; A6'nın geniş açısında görünmüyor → kapının
yanında, A6'nın kadrajı dışındaki köşede duruyor sayılır (A6 kapıdan bakıyor; kapının
dibi kadraj dışı). Çelişki yok, ama bu kare o köşeyi ilk kez gösterir.

Cengo **arkadan-yandan**, yüzü kısmen görünür (gülen ifade sprite'tan); ceket, gömlek,
bordo kravat cepten sarkıyor — tanınması kıyafetten.

```
Birinci referans görseldeki bürodan bir köşe: aynı sıvası dökülmüş krem duvar, aynı
eski ahşap döşeme, aynı sabah ışığı, aynı çizim tarzı. İkinci referans görseldeki
adamın AYNISI: aynı dağınık siyah saç, aynı açık kahverengi buruşuk ceket, beyaz gömlek,
koyu kot, ceketin yan cebinden sarkan bordo kravat, bilekte renkli boncuklu bileklik.

Kadraj: DİKEY (3:4). Kamera büronun bir köşesine bakıyor; adam kadrajın ortasında,
yandan ve biraz arkadan görünüyor, yüzünün yalnız yan profili ve gülümseyen ağız
kenarı seçiliyor.

Kadrajda YALNIZ şunlar var:
1. Köşede, duvara dayalı, küçük, eski, krem rengi, tek kapılı, köşeleri yuvarlak bir
   buzdolabı (1970'ler tarzı); kapısı ardına kadar açık; içi boş, tek bir rafı var,
   içerisi soğuk mavi bir ışıkla aydınlık.
2. Adam iki eliyle büyük, düz mavi, plastik bir balık kasasını buzdolabının içine
   itmeye çalışıyor; kasa açıkça buzdolabından büyük, yarısı dışarıda kalmış. Kasa
   ağzına kadar dolu, gümüş pullu, parlak levreklerle; birkaç kuyruk kasadan sarkıyor.
3. Bir levrek kasadan kaymış, adamın ayakkabısının yanında, yerde.
4. Kasanın üstünde ve buzdolabında hiçbir yazı, etiket, marka yok.

Başka hiçbir nesne yok: kâğıt, takvim, mıknatıs, şişe, ambalaj yok.

Işık: sabah güneşi yandan; buzdolabının içinden soğuk mavi ışık; levreklerin pulları
parlıyor. Hava: komik; imkânsız bir işe gönülden girişmiş bir adam.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** buzdolabında marka/logo (en büyük risk — eski buzdolabı
logolu çizilir; rötuşla silinir), kasada yazı, Cengo tanınıyor mu (kıyafet, saç,
bileklik), yüz Cengo'dan kaymış mı, balık sayısı ve eller düzgün mü.


## Sonuç — K4 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k4_levrek.webp`. Cengo yandan-arkadan, gülümsüyor;
ceket, cepten sarkan bordo kravat, bileklik tanıtıyor; yüz kaymamış. Eski krem
buzdolabı **logosuz**, mavi kasa yazısız, levrekler taşıyor, biri yerde. Büro duvarı ve
ahşap zemin A6 ile uyumlu.

## K5 — Cumartesi sabahı iskelede Nazlı, boyası yarı sökülmüş (★, A9 referanslı)

K3 kararının sonucu: tekne cumartesi sabahı iskelede, "boyasını yapım sökecek". Sabah —
A9'un gün batımı değil: **serin, pembe-mavi sabah ışığı**, sakin su. Tekne A9'daki boş
yerde, kıyıya bağlı; boyası yarı sökülmüş: beyaz yamalar, altından eski mavi gövde.
**Yazı:** bordada ad çıkmamalı (beyazın sökülmesi adı açar — ad bölgesi hâlâ beyaz kalsın).
İnsan yok (Rıza Reis'in "üç gün denize çıkamadığı" bekleyiş).

```
Referans görseldeki iskelenin AYNISI: aynı taş rıhtım, aynı demir bağlama babası ve
zincir, aynı mavi ve kırmızı balıkçı tekneleri, aynı Haliç ve tarihi yarımada siluet,
aynı çizim tarzı. Bu görselde hiç insan yok.

Değişen şeyler: saat ve ortadaki boş yer.

Saat: erken sabah. Güneş henüz doğmuş, ışık serin, pembe ve açık mavi; suyun üstünde
ince bir sis; su çarşaf gibi sakin. Gün batımı turuncusu YOK.

Ortadaki boş bağlama yerinde artık bir tekne var: eski, ahşap, orta boy bir balıkçı
teknesi, babaya kalın zincirle bağlı. Teknenin boyası YARI YARIYA sökülmüş: gövdenin
üst kısmında ve pruvada hâlâ beyaz boya yamaları var, aşağılarda ve yer yer beyazın
altından eski, solmuş mavi gövde görünüyor; geçişler pürüzlü, fırça ve kazıma izli.
Pruvanın ön yüzü ve bordanın ortası hâlâ BEYAZ; hiçbir yerde ad, harf, rakam yok.
Teknenin üstünde katlanmış eski bir ağ ve bir tahta kova.

Görselin alt üçte biri boş taş rıhtım.

Başka hiçbir nesne yok: tabela, kâğıt, insan, kedi, araba yok.

Işık: serin sabah ışığı; teknenin beyaz yamaları pembemsi parlıyor. Hava: dönüş;
sessiz, yorgun bir rahatlama.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** bordada/pruvada ad ya da harf (en büyük risk), ışık gerçekten
sabah mı (A9'un turuncusu taşınmış mı), tekne A9'daki boş yerde mi, insan var mı.


## Sonuç — K5 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k5_nazli_sabah.webp`. Serin pembe-mavi sabah, sis,
çarşaf gibi su; Nazlı mavi ile yeşilin arasındaki eski yerinde, babaya zincirli, boyası
yarı sökülmüş (beyaz yamalar, altından mavi). **Bordada ve pruvada ad yok**; vapurlarda
yazı yok. Kenarda kırmızı dördüncü tekne eklenmiş, zararsız.

## K6 — Peri yapımcıyla imza masasında; arkada beyaz tekne (★, A12 + Peri A2)

K4 kararının sonucu ("danışmanlık sözleşmesi"; ruh: kirli). Yapımcı **figür olarak yok**
— yüzü kadraj dışında; yalnız eli ve takım kolu (kanonda tarif edilmedi; yeni karakter
çizmeyelim). Sözleşme yazı riski: kâğıdın yüzü görünmez, Peri'nin elinin ve kalemin altında;
kamera yandan. **Peri'nin yüzü görünür:** zarafetle imza atıyor, dudaklarında küçük,
soğuk bir gülümseme — kazanmış ama bir şey kaybetmiş. Dekolte temel setteki ayarda.

```
Birinci referans görseldeki set arkasının AYNISI arka planda, bulanık: aynı katering
masası, aynı evler ve çınar, aynı gün batımı ışığı, aynı çizim tarzı; uzakta, bulanık,
beyaz boyalı teknenin kıçı ve bir film ışığı görünüyor. İkinci referans görseldeki
kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı kırmızı manto, krem saten bluz ve
aynı dekolte, aynı altın küpeler.

Kadraj: DİKEY (3:4). Kamera katering masasının yanından, masanın üstüne hafif yukarıdan
ve yandan bakıyor. Kadın kadrajın solunda, masanın başında oturuyor, belden yukarısı
görünüyor; yüzü üç çeyrek profilden.

Kadrajda YALNIZ şunlar var:
1. Kadın, dolma kalemle masadaki tek sayfalık kâğıda imza atıyor. Kâğıt kameraya göre
   neredeyse yan duruyor; eli ve kalem kâğıdın üstünü kapatıyor; kâğıdın yüzündeki hiçbir
   satır, harf, imza okunmuyor; kâğıt yalnızca düz, beyaz bir dikdörtgen.
2. İfadesi: başı hafifçe eğik, gözleri kâğıtta; dudaklarında küçük, soğuk, kendinden
   emin bir gülümseme; kaşları hafif kalkık. Kazanmış ama bunu sevmeyen biri.
3. Kadrajın sağından giren bir erkeğin YALNIZ eli ve kolu: lacivert, pahalı bir takım
   kolu, beyaz manşet, altın kol düğmesi; eli masaya, kâğıdın yanına, kapalı, kalın,
   yazısız bir zarf koyuyor. Adamın yüzü ve gövdesi kadraj dışında.
4. Masada yalnız: kâğıt, zarf, bir karton bardak.

Başka hiçbir nesne yok: telefon, senaryo, klaket, ikinci kâğıt yok. Zarfta, bardakta,
kalemde hiçbir yazı, logo yok.

Işık: gün batımının sıcak ışığı yandan; kadının yüzünün yarısı gölgede. Hava: şık,
sessiz, biraz kirli bir anlaşma.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kâğıtta satır/harf/imza (en büyük risk — rötuşla
düzleştirilir), zarfta yazı, Peri'nin yüzü kaymış mı, dekolte setteki ayarda mı, yapımcının
yüzü kadraja girmiş mi.


## Sonuç — K6 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k6_imza.webp`. Peri (yüz, saç, manto, dekolte
tutuyor) gözleri kapalı, küçük soğuk gülümsemeyle imzalıyor; **kâğıt bomboş, zarf
yazısız**; yapımcının yalnız lacivert kolu ve altın kol düğmesi. Notlar (bulanık arka
plan): uzaktaki tekne gerçek bir yat gibi; küçük kırmızı-beyaz-mavi bir bayrak var —
yazısız; sahibi isterse rötuşla silinir.

## K7 — Peri'nin eli mantonun cebinde, telin ucu görünüyor (★, A5b + Peri A2)

Kapanış son satırı: "Peri bir an kapının önünde duruyor, elini cebine sokuyor; tel orada."
**Yüzsüz**, bel hizası; akşam koridorun sıcak lamba ışığı. Tel D1'deki gibi gümüş.

```
Birinci referans görseldeki akşam koridorunun AYNISI arka planda, bulanık: aynı karo
zemin, aynı yanan tavan lambası, dipte lacivert akşam penceresi, sağda koyu ahşap büro
kapısı, aynı çizim tarzı. İkinci referans görseldeki kadının YALNIZ mantosu ve eli:
aynı domates kırmızısı, kuşaklı yün manto. Kadının yüzü, saçı ve başı kadraja girmiyor.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kamera kadının yanında, bel hizasında; kadrajın
ortasında mantonun yan cebi.

Kadrajda YALNIZ şunlar var:
1. Kırmızı yün mantonun yan cebi; kadının eli cebin içinde, yalnız bileği ve parmak
   eklemleri dışarıda görünüyor; yüzük, bilezik, saat yok.
2. Parmaklarının arasından, cebin ağzından, ince, eğilmiş, gümüş renkli bir telin ucu
   dışarı çıkıyor; ucunda lambanın ışığından küçük bir parıltı.
3. Arka planda, bulanık: koridorun karoları, sıcak sarı tavan lambası, kapalı koyu
   ahşap kapı.

Başka hiçbir nesne yok.

Işık: akşam; tavan lambasının sıcak sarı ışığı mantonun yününde ve telin ucunda;
köşeler karanlık. Hava: sessiz, içten; küçük bir sırrın ilk günü.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** yüz ya da saç kadraja girmiş mi (K2b dersi), elde takı, tel
seçiliyor mu, manto Peri'ninki mi.


## Sonuç — K7 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k7_tel.webp`. Kırmızı manto, el cepte, telin ucu
parlıyor; takı yok, yüz ve saç yok; akşam koridoru (lamba, lacivert pencere, halka
tokmaklı kapı). Taslakta kapanışın son satırı: "Cengo merdivenden iniyor… tel orada."

## K8 — Kovalamaca: Peri balık kasalarında, Serkan levreklerin üstünde (★)

İ6 (sahibinin onayladığı kovalamaca). Üç referans: **A9** (iskele, gün batımı), **Peri A2**
(yüz, saç rengi, manto, bluz, dekolte), **Serkan S1b** (yüz, kıyafet). Cengo kadraja
girmiyor (yüz sayısı az kalsın; "Cengo yetişiyor" metinden gelir).

**Sahibinin kuralı:** dekolte görünür, temel setteki ayarda; saçı başı balık suyuyla
ıslak, topuz dağılmış, saçında pul. Ton: komedi — tehlike ya da acı yok.

```
Birinci referans görseldeki iskelenin AYNISI: aynı taş rıhtım, aynı renkli balıkçı
tekneleri, aynı Haliç ve gün batımı ışığı, aynı çizim tarzı. İkinci referans görseldeki
kadının AYNISI: aynı yüz, aynı kumral-kızıl saç rengi, aynı kırmızı kuşaklı manto, aynı
krem saten bluz ve aynı dekolte, aynı altın küpeler. Üçüncü referans görseldeki genç
adamın AYNISI: aynı yüz, aynı kısa saç, aynı yeşil kapüşonlu üst ve gri tişört.

Kadraj: DİKEY (3:4). Kamera rıhtımda, göz hizasının biraz altında.

Kadrajda YALNIZ şunlar var:
1. Ön planda, kadrajın ortasında, kadın büyük, mavi, plastik bir balık kasasının İÇİNE
   oturmuş: kasa ağzına kadar gümüş pullu levreklerle dolu, kadın balıkların arasına
   gömülmüş, dizleri havada, topukluları kasanın kenarından sarkıyor. Bir elinde, kuyruğundan
   tuttuğu, çırpınan bir levrek; öteki eli kasanın kenarını kavramış.
2. Kadının hâli: kumral-kızıl saçı balık suyuyla sırılsıklam, topuzu dağılmış, ıslak
   tutamlar yüzüne ve boynuna yapışmış; saçında ve yanaklarında birkaç gümüş balık pulu;
   kırmızı mantosu ıslak ve buruşuk, kuşağı gevşemiş. Krem saten bluzu ıslak ve dekoltesi
   referanstaki gibi açıkça görünüyor. Altın küpeleri yerinde.
3. Kadının ifadesi: komik bir öfke ve inanamama; ağzı açık, kaşları çatık, gözleri kocaman;
   "bu bana olamaz" der gibi. Yüzü üç çeyrek profilden, kadrajın soluna dönük.
4. Arka planda, biraz uzakta, rıhtımda devrilmiş ikinci bir kasa; levrekler ıslak taşlara
   saçılmış. Genç adam o levreklerin üstünde kaymış, sırt üstü yatıyor, kolları ve bacakları
   havada, şaşkın.
5. Uçuşan su damlaları ve havada bir iki pul.

Başka hiçbir insan yok. Başka hiçbir nesne yok: tabela, kâğıt, telefon yok. Kasalarda,
teknelerde hiçbir yazı, ad, numara yok.

Işık: gün batımının sıcak turuncu ışığı; ıslak saçta, pullarda ve suda parıltılar.
Hava: tam bir komedi felaketi; zarif bir kadının en kötü anı, ama acı yok, yalnız gülünç.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** Peri'nin yüzü ve saç rengi tutuyor mu, dekolte setteki ayarda
mı (az değil, fazla değil), Serkan tanınıyor mu, kasalarda/teknelerde yazı, el ve parmak
sayıları, ton korkutucu ya da acı verici olmuş mu.


## Sonuç — K8 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k8_kovalamaca.webp`. Peri (yüz, saç rengi, manto,
bluz, küpeler tutuyor) mavi kasanın kenarına oturmuş, elinde damlayan levrek, ağzı açık,
kaşlar çatık; saçında ve mantosunda pullar, her yeri ıslak; dekolte setteki ayarda.
Arkada Serkan levreklerin üstünde sırt üstü, ayaklar havada — tanınıyor. Gün batımı,
vapurlar, martılar. **Yazı yok** (vapurlar, kasalar tarandı). Ton tam komedi.

Farklar (kabul edilebilir): Peri kasanın içine gömülmemiş, kenarına oturmuş; topuz
dağılmamış, yalnız tutamlar ıslak. Kırmızı stiletto kanonda yoktu, Peri'ye yakışıyor.
Balıklı ifadeler (PB1/PB2) bu karedeki saç ve ıslaklığı referans alacak.

## PB1 — Peri balıklı, sinirli (ekran hâli; K8 + Peri C3 referanslı)

Replik: "Planlamıştım." Sprite: Peri C3 (sinirli, mantolu) **poz ve kadraj** için; K8
**ıslaklık ve pullar** için. Kesim: `peri` profili, aynı çerçeve.

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı kırmızı
manto, krem saten bluz ve aynı dekolte, aynı altın küpeler, aynı çizim tarzı, aynı düz
açık bej arka plan. Kadraj birinci referansla birebir aynı: aynı ölçek, uyluk ortasından
kesilmiş, başın tepesi aynı yükseklikte, dikey. Başın açısı birinci referansla aynı:
başı kadrajın soluna dönük, burnu kadrajın soluna bakıyor, kulağı kadrajın sağında.
Kameraya bakmıyor.

İkinci referans görselden yalnız kadının hâli alınacak: her yeri balık suyuyla ıslak.
Kumral-kızıl saçı sırılsıklam, topuzu yarı dağılmış, ıslak tutamlar yüzüne ve boynuna
yapışmış; saçında, yanağında ve mantosunun üstünde birkaç gümüş balık pulu; manto ıslak,
koyulaşmış, buruşuk; saten bluz ıslak, dekoltesi birinci referanstaki gibi görünüyor.
Arka plan yine DÜZ, AÇIK BEJ; iskele, balık, kasa YOK.

Poz: bir eliyle saçından bir balık pulunu tiksintiyle ayıklıyor, iki parmağının ucunda
tutuyor; öteki eli yumruk, belinde. Çenesi yukarıda, gururunu toplamaya çalışıyor.

İfade: onurlu öfke; kaşları çatık, burun kanatları açık, dudakları sıkı, gözleri
kısılmış: "Planlamıştım." diyen biri.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde:** arka plan düz bej mi (kesim için şart), ölçek ve baş açısı C3 ile aynı mı,
dekolte setteki ayarda mı, yüz Peri mi.


## PB1 — ilk deneme: siyah etek görünmüyor (sahibi yakaladı) → PB1b

Manto kapalı, alttaki aralıkta kırmızı (mantonun iç kanadı, ama etek gibi okunuyor).
**Kural (sahibinin kararı, 6 Ekim 2026): mantolu Peri'nin altında HER ZAMAN siyah kalem
etek ve ince siyah kemer var; manto önden açıkken görünür.** Mantolu her yeni görselde
metne yazılır ve PM2 üçüncü referans olarak eklenir. K8'de aynı sorun var (kucaktaki
kırmızı); ara kare olduğu için şimdilik kalıyor, sahibi isterse yeniden üretilir.

PB1b: PB1 metnine eklenen satırlar —
"Üçüncü referans görseldeki kadının siyah, dar, diz boyu kalem eteği ve ince siyah
kemeri. Mantonun önü kuşağın altında açık; aradan SİYAH kalem etek açıkça görünüyor.
Kırmızı etek YOK; mantonun altında yalnız siyah etek ve krem bluz."


## Sonuç — PB1b (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/deneme_peri_pb1.webp`. Islak saç ve manto, pullar,
parmak ucunda pul, öteki el yumruk belde, onurlu öfke; **siyah kalem etek ve kemer
görünüyor.** Dekolte setteki ayarda. Sağ dirsek çerçeveden taştığı için **geniş kesim**
(`--genis`, aynı CSS). Taslakta İ6 yeni metne göre baştan kuruldu: kart → kaçış →
K8 (balık) → iskelede balıklı Peri ("Planlamıştım.") → Serkan itiraf → istavrit →
"Akşam yemeği çıktı." → hortum (mantolu sete dönüş) → dükkân.

## PB2 — Peri balıklı, utanmış: istavrit anı (D3 + PB1b + PM2 referanslı)

Vaka 1 İ6, sahibinin onayıyla: "Göğsünün arasına küçük bir istavrit sıkışmış. Peri
kıpkırmızı, iki parmağıyla kuyruğundan çekip çıkarıyor." Komedi; açık bir şey yok.
**ChatGPT reddederse Grok.**

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı çizim tarzı, aynı düz açık
bej arka plan; kadraj birinci referansla birebir aynı: aynı ölçek, uyluk ortasından
kesilmiş, başın tepesi aynı yükseklikte, dikey. Başın açısı birinci referansla aynı:
başı kadrajın soluna dönük, hafifçe öne eğik; burnu kadrajın soluna bakıyor, kulağı
kadrajın sağında. Kameraya bakmıyor.

İkinci referans görseldeki kadının hâli ve kıyafeti AYNEN: ıslak, dağınık kumral-kızıl
saç ve içinde balık pulları, ıslak kırmızı manto ve üstündeki pullar, ıslak krem saten
bluz ve aynı dekolte, mantonun önünden görünen siyah kalem etek ve ince siyah kemer,
altın küpeler. Üçüncü referans görseldeki siyah kalem etek ve kemer.

Değişen şeyler poz ve ifade.

Poz: bir elinin iki parmağıyla, dekoltesinin arasından yarısı çıkmış küçük, gümüş,
ince bir balığı (istavrit) kuyruğundan tutup çekiyor; balık havada hafifçe kıvrılmış.
Öteki eli yüzünün yanında, utançla avucu açık, sanki yüzünü saklamak ister gibi.
Omuzları kalkık.

İfade: komedi utancı — yanakları ve kulakları kıpkırmızı; kaşları ortada yukarı kalkmış;
gözleri kocaman açılmış ve balığa bakıyor; dudakları sıkılı, gülmekle ağlamak arasında
bir çarpıklık. "Bu olmuyor" der gibi.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** arka plan düz bej mi, ölçek ve baş açısı D3/PB1 ile aynı mı,
siyah etek görünüyor mu, balık küçük mü (levrek değil), ton komik mi, dekolte setteki ayarda
mı.


## Sonuç — PB2 (Grok ile, 6 Ekim 2026)

**ChatGPT reddetti; Grok üretti.** Kopya `kaynak/yeni_gorsel/deneme_peri_pb2.webp`.
Grok çıktısı 912×1136 (oran set ile aynı) → 1122×1402'ye büyütülüp `peri` profiliyle
geniş kesildi. Kıpkırmızı yanaklar, kocaman gözler, çarpık ağız, küçük istavrit
kuyruğundan çekiliyor, öteki el "dur" der gibi; ıslaklık, pullar, siyah etek ve kemer,
dekolte setteki ayarda. Grok kadrajı biraz yakın tuttu: Peri bu satırda bir tık büyük;
komik anda göze batmıyor. Taslakta "…Kıpkırmızı, kuyruğundan çekip çıkarıyor" ve
"Akşam yemeği çıktı." satırlarında.

**Ders (tekrar):** ChatGPT'nin reddettiği iki görsel de (kilit açma, istavrit) Grok'ta
çıktı. Grok çıktısında kaynak boyu farklı olabilir; set oranı tutuyorsa set boyuna
büyütülüp araçla kesilir.

**VAKA 1 GÖRSELLERİ TAMAM (44/45).** Kalan yalnız isteğe bağlı A4 (hanın sokaktan
girişi); şimdilik salon → koridor kararmayla geçiyor.

## A4 — Karaköy, eski hanın sokaktan girişi (A13 + A5 referanslı)

Açılış S2 → S3 geçişi: Peri anahtarla Karaköy'e geliyor. Saat **öğleden sonra** (A3 öğle,
A5 öğleden sonra arası). İki referans: **A13** (Karaköy sokak dokusu) ve **A5** (hanın
içi — taş, kemer, karo; giriş onun dışı olmalı). Yazı riski: han kapılarında kitabe ve
tabela olur — kemer taşı düz, kitabe yeri boş istenir.

```
Birinci referans görseldeki Karaköy sokağının dokusu ve çizim tarzı: aynı eski taş
binalar, aynı Arnavut kaldırımı. İkinci referans görseldeki hanın içinin malzemesi:
aynı krem taş, aynı kemerler, aynı siyah-beyaz karo. Bu görselde hiç insan yok.

Mekân: İstanbul Karaköy'de, 19. yüzyıldan kalma, üç katlı, eski bir taş hanın sokaktan
girişi. Öğleden sonra; güneş yüksekte ama hafif yanlamasına, sıcak, bal rengi ışık.
A13'teki gün batımı turuncusu YOK.

Kadraj: DİKEY (3:4). Kamera dar sokağın karşı kaldırımında, göz hizasında, hanın
cephesine bakıyor. Görselin alt üçte biri boş, sakin Arnavut kaldırımı.

Kadrajda YALNIZ şunlar var:
1. Ortada, hanın büyük, yuvarlak kemerli taş giriş kapısı; ağır, iki kanatlı, eski
   ahşap kapının bir kanadı açık. Açık kanattan içeride loş bir taş avlu ve siyah-beyaz
   karolar, dipte yukarı çıkan taş bir merdivenin ilk basamakları seçiliyor.
2. Kemerin tepesindeki kilit taşı ve kemerin üstündeki dikdörtgen kitabe yeri DÜZ, BOŞ,
   aşınmış taş; üzerinde hiçbir yazı, harf, rakam, işaret yok.
3. Kapının iki yanında, cephede, demir parmaklıklı, kapalı pencereler; üst katlarda
   ahşap kepenkli pencereler, birinde saksıda bir sardunya.
4. Cephe boyunca soluk, yer yer dökülmüş krem sıva ve çıplak taş.
5. Kaldırımın kenarında, kapının yanında, eski, demir bir sokak lambası; sönük.
6. Sokağın ucunda, uzakta, Haliç'in suyundan bir parça.

Başka hiçbir nesne yok: tabela, levha, kitabe, afiş, ilan, numara plakası, zil paneli,
araba, motosiklet, çöp kutusu yok. Hiçbir yerde yazı, harf, rakam yok.

Işık: öğleden sonranın sıcak, bal rengi ışığı cepheye yandan vuruyor; kemerin içi loş.
Hava: eski, görkemli ama unutulmuş; bir kapının ardında bir şey bekliyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kitabe yeri ve kilit taşı boş mu (en büyük risk), kapıda numara,
ışık öğleden sonra mı, alt üçte bir boş mu.


## Sonuç — A4 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/arka_a4_han_giris.webp`. Kemerli taş giriş, iki kanat
açık (bir istendi; zararsız), içeride karo ve merdiven (A5 ile uyumlu); **kitabe yeri ve
kilit taşı boş**, numara/tabela yok; sardunyalı pencere, sönük sokak lambası, uçta Haliç.
Işık altın, A5 ile aynı aile. Taslakta salondan sonra kısa geçiş sahnesi (Peri mantolu,
Cengo yok); "Üçüncü kat. Tabii. Asansör yoktur." repliği **yalnız taslakta**, Vaka 1
metninde yok — sahibi isterse eklenir.

# VAKA 1 GÖRSELLERİ — TAMAM (45/45, 6 Ekim 2026)


# KONUŞAN / DİNLEYEN GÖSTERİMİ (6 Ekim 2026, sahibinin kararı)

Eski: konuşan büyür ve zıplar, dinleyen küçülür (scale .94) — orantısız görünüyordu.
Yeni: **boylar sabit**; konuşan hafif aydınlanır (`brightness(1.04)`), dinleyen gölgede
kalır (`brightness(.62)`; akşamda `.48` + sepya). Zıplama kaldırıldı. Ayrıca konuşma
kutusuna yeterli `min-height` verildi: uzun replik ya da seçim ekranında kutu uzayınca
sahne kısalıyor ve figürler 7–11 px küçülüyordu; artık bütün akışta Peri'nin boyu tek
değer (tur testiyle doğrulandı). Gerçek oyunda aynı kural.


## K9 — Hortum: çaycı Peri'yi iskelede yıkıyor (K8 + PB1b + çaycı referanslı)

İ6 sonu, sahibinin onayıyla (46. görsel). Felaketin temizlenme anı (sezon kuralı
"Peri'nin felaketi"). Üç referans: **K8** (iskele, gün batımı, Peri'nin ıslak hâli),
**PB1b** (yüz, ıslak saç, siyah kalem etek ve kemer), **çaycı C1** (yüz, kıyafet).
Cengo kadraja girmiyor. Dekolte temel setteki ayarda; bluz ıslak ama **opak** (ıslak
tişört görüntüsü istenmez — hem ret sebebi hem ton dışı). **ChatGPT reddederse Grok.**

```
Birinci referans görseldeki iskelenin AYNISI: aynı taş rıhtım, aynı renkli balıkçı
tekneleri, aynı Haliç ve gün batımı ışığı, aynı çizim tarzı. İkinci referans görseldeki
kadının AYNISI: aynı yüz, aynı ıslak kumral-kızıl saç, aynı kırmızı kuşaklı manto, aynı
krem saten bluz ve aynı dekolte, aynı altın küpeler; mantonun önü kuşağın altında açık
ve aradan SİYAH, dar, diz boyu kalem etek ile ince siyah kemer görünüyor. Kırmızı etek
YOK. Üçüncü referans görseldeki adamın AYNISI: aynı kel kafa, aynı kıvrık beyaz bıyık,
aynı tombul yüz, aynı beyaz kolları sıvalı gömlek ve açık kahve önlük.

Kadraj: DİKEY (3:4). Kamera rıhtımda, göz hizasında. İki kişi de dizlerinden yukarı
görünüyor.

Kadrajda YALNIZ şunlar var:
1. Kadrajın sağında kadın, ayakta, gövdesi kameraya dönük. Çenesi havada, gözleri sıkıca
   kapalı, dudakları büzülmüş; iki kolu yanlara hafifçe açık, avuçları yukarı, parmakları
   gergin: "bitsin artık" diye bekleyen, gururunu kurtarmaya çalışan biri. Yüzü üç çeyrek
   profilden, kadrajın soluna, hortuma dönük; burnu kadrajın soluna bakıyor, kulağı
   sağında.
2. Kadrajın solunda adam, kadından bir adım ötede. İki eliyle yeşil, lastik bir bahçe
   hortumu tutuyor; başparmağıyla hortumun ağzını sıkıştırmış, su yelpaze gibi kadının
   başına ve saçına yağıyor. Adam kocaman, keyifli bir gülümsemeyle, dili dişlerinin
   arasında, işine dikkat ediyor. Hortum yerde kıvrılarak kadrajın sol kenarından çıkıyor.
3. Su: kadının saçından, yüzünden ve mantosunun omuzlarından akıyor; havada parlak
   damlalar; ayaklarının dibinde rıhtım taşında bir su birikintisi ve birkaç gümüş
   balık pulu. Saçındaki son pullar suyla akıp gidiyor.
4. Kadının hâli: saçı sırılsıklam, ıslak tutamlar alnına yapışmış; manto ıslak ve
   koyulaşmış. Krem saten bluz ıslak ama OPAK, içi görünmüyor; dekolte ikinci
   referanstaki gibi, ne az ne fazla.
5. Arka planda, bulanık: rıhtım, tekneler, Haliç, gün batımı.

Başka hiçbir insan yok. Başka hiçbir nesne yok: kasa, balık yığını, tabela, kâğıt,
telefon, çay tepsisi yok. Teknelerde hiçbir yazı, ad, numara yok.

Işık: gün batımının sıcak turuncu ışığı; suda ve damlalarda parıltılar.
Hava: komedi; zarif bir kadının onurunu toplamaya çalıştığı gülünç bir an. Acı,
aşağılanma, korku yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** Peri'nin yüzü ve siyah etek tutuyor mu; dekolte setteki
ayarda mı, bluz opak mı; çaycı tanınıyor mu, Rıza Reis'e kaymış mı; hortumda, teknede
yazı; el ve parmak sayıları (iki kişi, hortum tutan eller); ton komik mi.


## Sonuç — K9 (6 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k9_hortum.webp`. Çaycı (kel, kıvrık beyaz bıyık,
kahve önlük; Rıza Reis'e benzemiyor) pirinç başlıklı yeşil hortumla Peri'nin başını
yıkıyor, keyifli; Peri gözleri kapalı, çenesi havada, avuçları açık. Islak manto, saçta ve
mantoda son pullar, **siyah kalem etek ve kemer görünüyor**; bluz opak, dekolte setteki
ayarda. Yazı yok (vapur ve tekneler büyütülerek tarandı). Peri'nin sağ eli kadraj
kenarında kesiliyor — ara kare için sorun değil.

**Taslakta yerleşim:** iki yüzlü ara kare dar telefon ekranında `cover` ile kesilince
çaycının yüzü dışarıda kalıyordu. `ARKALAR` girdisine `tam: true` eklendi: görsel %150
genişlikte, iki yüz de içeride kalacak şekilde kaydırılır, üst/alt boşluğu aynı görselin
bulanık kopyası doldurur. Gerçek oyunda iki yüzlü her yatay-ağırlıklı ara kare için aynı
kural (K8 de aday). Akış: Akşam yemeği çıktı → K9 → iskele, Peri mantolu sete döner
("Peri mantosunu sıkıyor.") → dükkân.

# VAKA 1 GÖRSELLERİ — TAMAM (46/46, 6 Ekim 2026)


## K9 — değiştirildi (6 Ekim 2026, sahibinin kararı)

Sahibi Grok'la ürettiği ikinci hâli seçti: `kaynak/yeni_gorsel/ara_k9_hortum.webp`.
İlk hâl (gözleri sıkıca kapalı, "bitsin artık") `ara_k9_hortum_ilk.webp` olarak duruyor.
Yeni karede Peri'nin yüzü keyifli, ıslak bluz bedene yapışık; **dekolte temel setin
ayarından derin** ve ton komedi yerine çekiciliğe kayıyor. İkisi de sahibinin bilinçli
tercihi; bu kare için istisna, setin genel ayarı değişmedi. Yüz Peri (çil yok, küçük
altın küpe), çaycı aynı, vapurda yazı yok. Taslakta aynı `tam` kadrajla iki yüz de
ekranda.


# KOVALAMACA — üç yeni ara kare (7 Ekim 2026, sahibinin onayı)

Vaka 1 İ6 dört vuruşa çıktı: **K10** kaçış → **K11** Cengo'nun kestirmesi → **K8** (aynen
kalıyor) → **K12** yakalama. Kural (sezon belgesi "Kovalamaca"): ikisi ayrı ayrı rezil
olur, suçluyu şans yakalar; yazı değil görüntü anlatır. Yan karakter yüzü kadraja
sokulmaz (simitçi, teyze) — yüz sayısı az, sızma riski yok.

## K10 — Kaçış: simit tablası (A13 + Serkan + Cengo referanslı)

Üç referans: **A13** (ara sokak, kepenkli dükkân), **Serkan S1b** (yüz, kıyafet), **Cengo
CA2** (yüz, kıyafet). Peri kadrajda yok.

```
Birinci referans görseldeki sokağın AYNISI: aynı dar Arnavut kaldırımlı Karaköy ara
sokağı, sağda aynı yeşil, paslı, yazısız kepenk, aynı gün batımı ışığı, ucunda Haliç,
aynı çizim tarzı. İkinci referans görseldeki genç adamın AYNISI: aynı yüz, aynı kısa
saç, aynı yeşil kapüşonlu üst ve gri tişört. Üçüncü referans görseldeki adamın AYNISI:
aynı yüz, aynı dalgalı koyu saç, aynı kahverengi ceket ve açık yakalı krem gömlek.

Kadraj: DİKEY (3:4). Kamera sokakta, bel hizasında. Hareketli, komik bir an.

Kadrajda YALNIZ şunlar var:
1. Ön planda, kadrajın sağında, genç adam koşarak kaçıyor: gövdesi kadrajın sağına
   dönük, bir ayağı havada, başı omzunun üstünden geriye dönmüş, gözleri panikle
   kocaman. Boynunda yaka kartı YOK.
2. Kadrajın ortasında, havada devrilen yuvarlak, tahta bir simit tablası; tablayı taşıyan
   ahşap sehpa yana yıkılıyor. Havada on beş-yirmi susamlı simit uçuşuyor, birkaçı yere
   düşmüş. Tablayı tutan kişiden yalnız kadrajın sol kenarından uzanan iki kol ve beyaz
   bir önlük görünüyor; yüzü kadrajın DIŞINDA.
3. Arka planda, kadrajın solunda, ikinci adam havaya sıçramış, bir eliyle uçan bir
   simidi yakalamış, ağzını açmış ısırmak üzere; yüzünde keyifli, çocuksu bir sırıtış.
   Yüzü üç çeyrek profilden, kadrajın sağına dönük; burnu kadrajın sağına bakıyor.

Başka hiçbir insan yok. Başka hiçbir nesne yok: tabela, afiş, kâğıt, telefon, araba yok.
Kepenkte, tablada, sehpada ve hiçbir yüzeyde yazı, harf, rakam, logo yok.

Işık: gün batımının sıcak turuncu ışığı; havadaki simitlerde ve susamlarda parıltı.
Hava: slapstick komedi; tehlike ya da acı yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** Serkan ve Cengo tanınıyor mu (Serkan Cengo'ya benzemesin —
S1'de bu oldu), simitçinin yüzü kadraj dışında mı, kepenkte yazı, el/parmak sayıları,
ton komik mi.


## Sonuç — K10 (7 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k10_simit.webp`. Serkan referansla birebir (kısa
saç, sakal, yeşil kapüşonlu, gri tişört), panikle geriye bakıyor; Cengo havada, simidi
yakalamış, ağzı açık; tabla ve sehpa devriliyor, simitler havada. Simitçinin yalnız kolu
ve beyaz kolu görünüyor, yüzü yok. A13'ün yeşil kepengi ve tabelanın söküldüğü boş iz
aynı; **yazı yok** (tabela izi ve kepenk büyütülerek tarandı). Oyunda İ6'nın ilk
kovalamaca satırında.

## K11 — Peri çamaşır ipinde: çarşaf (A13 + Peri A2 + Peri PM2 referanslı)

**Sahibinin kararı (7 Ekim 2026): bu sahne Peri'nin** (ilk taslakta Cengo'ydu). Cengo
kestirmeye sapıyor; Peri Serkan'ın peşinden ara sokaktan koşarken ipe dalıyor, çarşafı
atıp devam ediyor, sonra K8'de balık kasasına oturuyor (K8 değişmedi, çarşafsız).

Üç referans: **A13** (aynı ara sokak; ipteki iki beyaz çarşaf zaten orada), **Peri A2**
(yüz, saç, kırmızı manto, krem saten bluz, dekolte), **Peri PM2** (siyah kalem etek ve
kemer — mantolu Peri'nin kuralı). Kovalamaca kuralı: dekolte temel setteki ayarda görünür;
çarşaf başı ve sırtı örter, göğsün önünü kapatmaz. Teyzenin yüzü kadraj dışında.

```
Birinci referans görseldeki sokağın AYNISI: aynı dar Arnavut kaldırımlı Karaköy ara
sokağı, aynı eski taş binalar, binalar arasına gerilmiş aynı çamaşır ipi, aynı gün
batımı ışığı, aynı çizim tarzı. İkinci referans görseldeki kadının AYNISI: aynı yüz,
aynı kumral-kızıl saç ve topuz, aynı kırmızı kuşaklı manto, aynı krem saten bluz ve
aynı dekolte, aynı altın küpeler. Üçüncü referans görseldeki kadının siyah, dar, diz
boyu kalem eteği ve ince siyah kemeri: mantonun önü kuşağın altında açık, aradan SİYAH
kalem etek görünüyor. Kırmızı etek YOK.

Kadraj: DİKEY (3:4). Kamera sokağın ortasında, kadının önünde; kadın kameraya doğru
koşuyor. Dizlerinden yukarısı görünüyor.

Kadrajda YALNIZ şunlar var:
1. Ortada kadın topuklularıyla koşuyor. Büyük, beyaz bir çarşaf başına takılmış, bir
   gelin duvağı ya da hayalet pelerini gibi başının üstünden sırtına ve arkasına doğru
   uçuşuyor; çarşafta hâlâ iki tahta mandal takılı. Çarşaf göğsünün önünü KAPATMIYOR:
   manto, saten bluz ve dekolte ikinci referanstaki gibi açıkça görünüyor. Bir eliyle
   çarşafı yüzünün kenarından çekiyor. Yüzü öne, kameraya dönük; gözleri kocaman,
   kaşları çatık, ağzı açık: hem öfkeli hem rezil.
2. Arkasında, binalar arasındaki çamaşır ipi sallanıyor; ipte bir çarşafın boş yeri,
   kalan tek beyaz çarşaf ve birkaç mandal.
3. Kadrajın sağ üstünde, ikinci kattaki açık bir ahşap pencereden yalnız bir kadın kolu
   uzanıyor; elinde tahta bir kaşık, öfkeyle sallıyor. Kolun sahibinin yüzü ve başı
   pencerenin içinde, görünmüyor.
4. Yerde uçuşmuş iki üç mandal.

Başka hiçbir insan yok. Başka hiçbir nesne yok: tabela, afiş, kâğıt, araba yok. Duvarda,
kapıda, pencerede hiçbir yazı, harf, rakam, logo yok.

Işık: gün batımının sıcak turuncu ışığı; çarşafın kenarlarından süzülen ışık.
Hava: slapstick komedi; zarif bir kadının rezil anı, ama tehlike ya da acı yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** Peri'nin yüzü ve saç rengi, siyah etek görünüyor mu, dekolte
setteki ayarda mı (çarşaf örtmemeli), teyzenin yüzü görünmüyor mu, duvarlarda yazı,
el/parmak sayıları. ChatGPT reddederse Grok.


## K11 — ilk deneme (7 Ekim 2026): ayakkabı siyah, çarşaf pelerin gibi → K11b düzenleme

Yüz, saç, manto, bluz, dekolte, siyah etek ve teyzenin (yüzsüz) kolu tuttu; yazı yok.
İki sorun (sahibi yakaladı + değerlendirme):
- **Ayakkabı siyah.** **Kural (sahibinin kararı, 7 Ekim 2026): Peri'nin ayakkabıları
  KIRMIZI stiletto** — K8'de böyle çıkmıştı, kanon oldu. Peri'nin ayağının göründüğü her
  yeni görselde metne yazılır.
- **Çarşaf komik değil, zarif.** Başın arkasından pelerin/duvak gibi süzülüyor ve Peri onu
  taşıyormuş gibi tutuyor; "ipe dalıp sarılmış" okunmuyor, sahne dergi kapağına kayıyor.
  Düzenlemede çarşaf başına geçmiş, topuzu bastırmış, bir ucu yüzüne düşmüş, mandal
  saçına takılı, ipin kopan ucu çarşafta sürükleniyor — dekolte yine açık.

K11b, ilk denemenin kendisi birinci referans verilerek DÜZENLEME olarak istenir (kompozisyon,
ışık ve yüz korunur); ikinci referans K8 (kırmızı stiletto).

## Sonuç — K11b (7 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k11_carsaf.webp` (ilk deneme `_ilk` olarak duruyor).
Düzenleme olarak istendi, kompozisyon korundu: **kırmızı stiletto**, çarşaf başa geçmiş ve
topuzu bastırmış, mandal saçta, bir uç yüzün yarısını kapatıyor, ipin kopan ucu mandallarla
sürükleniyor; dekolte açık, siyah kalem etek ve kemer görünüyor. Teyzenin yalnız kolu ve
tahta kaşık; kepenk, kapı, duvar büyütülerek tarandı — **yazı yok**. A13'ün ters kasaları
da aynı. Yüz ifadesi rezil olmaktan çok şaşkın-soğukkanlı; kabul edilebilir.

## K12 — Yakalama (A9 + Serkan + Cengo referanslı)

Üç referans: **A9** (iskele, gün batımı), **Serkan S1b**, **Cengo CA2**. Peri kadrajda yok
(K8 onun karesi). Komik süreklilik: Cengo'nun elinde K10'da yakaladığı simidin yarısı.

```
Birinci referans görseldeki iskelenin AYNISI: aynı taş rıhtım, aynı renkli balıkçı
tekneleri, aynı Haliç ve gün batımı ışığı, aynı çizim tarzı. İkinci referans görseldeki
genç adamın AYNISI: aynı yüz, aynı kısa saç ve sakal, aynı yeşil kapüşonlu üst ve gri
tişört. Üçüncü referans görseldeki adamın AYNISI: aynı yüz, aynı dalgalı koyu saç, aynı
kahverengi ceket, açık yakalı krem gömlek, koyu kot.

Kadraj: DİKEY (3:4). Kamera rıhtımda, alçak açı.

Kadrajda YALNIZ şunlar var:
1. Ön planda genç adam ıslak taşların üstünde, gümüş pullu levreklerin arasında sırt
   üstü yatıyor; kolları iki yana açık, bir levrek göğsünün üstünde duruyor, yüzünde
   şaşkın, yenilmiş bir ifade. Boynunda yaka kartı YOK.
2. Onun üstüne eğilmiş ikinci adam: nefes nefese, terli, saçı dağınık; bir eliyle genç
   adamın kapüşonlusunun yakasını kavramış, öteki elinde yarısı ısırılmış susamlı bir
   simit. Yüzünde zafer kazanmış ama bitkin, komik bir sırıtış; yüzü üç çeyrek profilden,
   aşağıya, genç adama dönük.
3. Arkada devrilmiş mavi, plastik bir balık kasası; rıhtıma saçılmış levrekler, ıslak
   taşlarda parıltı.

Başka hiçbir insan yok. Başka hiçbir nesne yok: tabela, kâğıt, telefon yok. Kasada,
teknelerde ve hiçbir yüzeyde yazı, ad, numara, logo yok.

Işık: gün batımının sıcak turuncu ışığı; ıslak taşlarda, pullarda parıltı.
Hava: slapstick komedi; şiddet, acı yok — beceri değil şans: adam kendi kendine kaymış.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** Serkan ve Cengo tanınıyor ve birbirine benzemiyor mu, simit
elde mi, kasada/teknelerde yazı, el/parmak sayıları, ton şiddete kaymış mı.

## Sonuç — K12 (7 Ekim 2026)

**Tuttu.** Kopya `kaynak/yeni_gorsel/ara_k12_yakalama.webp`. Serkan levreklerin arasında
sırt üstü, göğsünde bir levrek, kolları açık; Cengo üstüne eğilmiş, bir eli kapüşonlunun
yakasında, öteki elinde yarısı ısırılmış simit (K10'la süreklilik), sırıtıyor. Devrik
mavi kasa, saçılmış levrekler, A9'un tekneleri ve vapuru. Şiddet yok. Kasada yazı yok;
vapurun pruvasında okunmayan, bulanık bir leke var (harf seçilmiyor) — kabul edildi.

# KOVALAMACA TAMAM (K10, K11, K8, K12) · VAKA 1 GÖRSELLERİ 49/49


## PK — Peri kâğıda bakıyor (mantolu set, yeni ifade "kagit"; A2 + PM2 referanslı)

Sahibi oyunda istedi (7 Ekim 2026): "(kâğıda bakar)" satırında Peri kaş kaldırıyordu,
kâğıt yoktu. Kullanılacağı yerler: Cengo sahnesi "Şirket gerçek görünsün diye…" ve han
kapısı "Üçüncü kat. Tabii. Asansör yoktur." (adrese bakıyor). Kesim: `peri` profili, aynı
çerçeve (ekranda zıplamasın). Kâğıdın yazılı yüzü Peri'ye dönük; kameraya yalnız boş
arkası görünür (yazı taşıyan nesnenin yüzü kapatılır — kalıcı ders).

İki referans: **Peri A2** (yüz, saç, manto, bluz, dekolte, kadraj, düz bej arka plan),
**Peri PM2** (siyah kalem etek ve kemer).

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı kırmızı
kuşaklı manto, aynı krem saten bluz ve aynı dekolte, aynı altın küpeler, aynı çizim
tarzı, aynı düz açık bej arka plan. Kadraj birinci referansla birebir aynı: aynı ölçek,
uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey. Mantonun önü kuşağın
altında açık; aradan ikinci referans görseldeki SİYAH, dar kalem etek ve ince siyah
kemer görünüyor. Kırmızı etek YOK.

Poz: iki eliyle, göğsünün biraz altında, açılmış, katlama izleri belli bir A4 kâğıdı
tutuyor ve ona bakıyor. Kâğıdın yazılı yüzü KADINA dönük; kameraya kâğıdın yalnız ARKA
yüzü görünüyor: düz, krem rengi, BOŞ, üzerinde hiçbir yazı, çizgi, iz yok. Kâğıt
dekolteyi örtmüyor. Bir elinde, kâğıtla birlikte, küçük, eski, pirinç bir anahtar.

Başın açısı: başı kadrajın soluna dönük ve hafifçe öne eğik, gözleri aşağıda, kâğıtta;
burnu kadrajın soluna bakıyor, kulağı kadrajın sağında. Kameraya bakmıyor.

İfade: kuşkulu, iğneleyici bir okuma: bir kaşı kalkık, dudağının bir ucu bükük;
"Bak sen şu işe" der gibi.

Arka plan DÜZ, AÇIK BEJ; başka hiçbir nesne yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** kâğıdın kameraya dönük yüzü gerçekten boş mu (büyüt), arka
plan düz bej mi (kesim için şart), ölçek ve baş açısı A2 ile aynı mı, dekolte setteki
ayarda mı, siyah etek görünüyor mu, el ve parmak sayıları.

## Sonuç — PK (7 Ekim 2026)

**Tuttu.** Kesik sprite `kaynak/yeni_gorsel/sprite/peri_manto_kagit.webp` (mantolu setin
beşinci ifadesi, `kagit`). Kâğıdın kameraya dönük yüzü boş (katlama izleri var, yazı
yok), anahtar elde, siyah etek ve kemer görünüyor, dekolte setteki ayarda. Ölçek A2 ile
aynı; kaynak 1086×1448 geldi → yükseklik 1402'ye indirilip yanlara bej dolgu ile
1122×1402'ye getirildi, sonra kesildi.

**Kesim dersi:** `peri` profili (kenar tol 28) kâğıdın üst yarısını arka plan sanıp sildi
— kâğıt bej zemine çok yakın. `saten` profili (kenar tol 14) kâğıdı korudu. **Zemine
yakın renkli bir nesne tutan sprite'larda `saten` profiliyle kes, önizlemeye bak.**
Oyunda: "(kâğıda bakar) Şirket gerçek görünsün…" ve han kapısında "Üçüncü kat. Tabii."


## PC — Peri cüzdanını açıyor (mantolu set, yeni ifade "cuzdan"; A2 + PM2 referanslı)

Sahibi oyunda istedi (7 Ekim 2026): "(cüzdanını açar) Kasa bu." / "Dört bin iki yüz elli
lira. Bütün servetim." satırlarında cüzdan yoktu. PK'nin kardeşi; aynı çerçeve, kesim
`saten` profiliyle (PK dersi). **Banknotun yüzü rakam ve yazı taşır** → cüzdanın içi
Peri'ye dönük, kameraya yalnız deri dışı; para görünmez.

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı kırmızı
kuşaklı manto, aynı krem saten bluz ve aynı dekolte, aynı altın küpeler, aynı çizim
tarzı, aynı düz açık bej arka plan. Kadraj birinci referansla birebir aynı: aynı ölçek,
uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey. Mantonun önü kuşağın
altında açık; aradan ikinci referans görseldeki SİYAH, dar kalem etek ve ince siyah
kemer görünüyor. Kırmızı etek YOK.

Poz: bir eliyle göğüs hizasında küçük, zarif, siyah deri bir kadın cüzdanını açık
tutuyor ve içine bakıyor. Cüzdanın İÇİ kadına dönük; kameraya yalnız cüzdanın düz, siyah
deri DIŞ yüzü görünüyor. Cüzdanın içinden hiçbir şey görünmüyor: para, kart, kâğıt
görünmüyor. Öteki eli, avucu yukarıda, yana açılmış: "işte bu kadar" der gibi.
Cüzdan dekolteyi örtmüyor.

Başın açısı: başı kadrajın soluna dönük, hafifçe öne eğik, gözleri cüzdanın içinde;
burnu kadrajın soluna bakıyor, kulağı kadrajın sağında. Kameraya bakmıyor.

İfade: dramatik bir teslimiyet ile kara mizah: kaşları kalkık, dudağı bükük, yarım bir
acı gülümseme; "Bütün servetim" diyen eski bir kraliçe.

Arka plan DÜZ, AÇIK BEJ; başka hiçbir nesne yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın; cüzdanda marka, toka yazısı,
logo yok.
```

**Geldiğinde bakılacaklar:** para/kart görünüyor mu (görünmemeli), cüzdanda logo, arka
plan düz bej mi, ölçek A2 ile aynı mı, dekolte, siyah etek, el ve parmak sayıları.

## Sonuç — PC (7 Ekim 2026): ilk deneme deftere benzedi → PC-b düzenleme tuttu

İlk denemede ikiye katlanan düz siyah nesne pasaport/cep defteri gibi okunuyordu (sahibi
yakaladı). Düzenlemeyle: uzun, parlak siyah, **altın fermuarlı** kadın cüzdanı, ağzı açık,
içinden katlı banknotların kenarı görünüyor — cüzdan diye okunuyor. **Ders: nesneyi
türüyle değil, onu tanıtan ayrıntıyla iste** (cüzdan → fermuar + banknot kenarı).

Banknot kenarında bulanık, okunmayan baskı izleri vardı; küçük bir bölgede yumuşak
kenarlı medyan rötuşla düzleştirildi (fermuar korunarak). Kesik sprite
`kaynak/yeni_gorsel/sprite/peri_manto_cuzdan.webp` (`saten` profili, 1086×1448 → 1122×1402
bej dolgu). Oyunda: "(cüzdanını açar) Kasa bu." ve "Bütün servetim."


## PT — Peri çay ikram ediyor (mantosuz set, yeni ifade "cay"; PM2 referanslı)

Sahibi oyunda istedi (7 Ekim 2026): haciz sahnesinde "Önce çayınızı için. Bardaklar listede
yok, değil mi?" derken bardaklar görünmeli, biri çay dolu. Arka plana konmuyor (figürlerin
arkasında kalırdı — avize dersi); Peri'nin elinde. Kullanılacağı satırlar: "Önce çayınızı
için…" ve "O zaman bugün için." Kesim: `saten` profili; aynı çerçeve (PM2).

Tek referans: **Peri PM2** (mantosuz: krem saten bluz, siyah kalem etek, kemer, yüz, kadraj).

```
Referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı krem saten bluz ve
aynı dekolte, aynı siyah kalem etek ve ince siyah kemer, aynı altın küpeler, aynı çizim
tarzı, aynı düz açık bej arka plan. Kadraj referansla birebir aynı: aynı ölçek, uyluk
ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey. Manto YOK.

Poz: iki eliyle, bel hizasının biraz üstünde, küçük, yuvarlak, gümüş renkli metal bir
çay tepsisi tutuyor ve onu kadrajın soluna, karşısında duran birine doğru zarifçe
uzatıyor. Tepside iki ince belli, şeffaf Türk çay bardağı, altlarında küçük beyaz
tabaklar: birinin içi koyu kızıl, sıcak demli çayla dolu (üstünden ince bir buhar
yükseliyor), öteki BOŞ. Tepside, bardaklarda, tabaklarda hiçbir yazı, desen, damga yok.
Tepsi dekolteyi örtmüyor.

Başın açısı: başı kadrajın soluna dönük; burnu kadrajın soluna bakıyor, kulağı kadrajın
sağında. Gözleri karşısındakinde. Kameraya bakmıyor.

İfade: kusursuz bir ev sahibesi nezaketi, ama altında ince bir ironi: hafif, kibar
bir gülümseme, bir kaşı belli belirsiz kalkık; "Bardaklar listede yok, değil mi?"

Arka plan DÜZ, AÇIK BEJ; başka hiçbir nesne yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** bir bardak dolu, biri boş mu; tepside desen/yazı; arka plan düz
bej mi; ölçek PM2 ile aynı mı; dekolte; el ve parmak sayıları.

## Sonuç — PT (7 Ekim 2026)

**Tuttu.** Kesik sprite `kaynak/yeni_gorsel/sprite/peri_mantosuz_cay.webp` (mantosuz setin
beşinci ifadesi, `cay`). Gümüş tepside iki ince belli bardak, biri demli çayla dolu
(buharlı), öteki boş; tepsi kadrajın soluna, Hilmi Bey'e uzatılıyor; kibar-ironik gülümseme.
Ölçek PM2 ile aynı (1086×1448 → 1122×1402 bej dolgu, `saten` profili). Tepside yazı/desen
yok. Oyunda "Önce çayınızı için…" ve "O zaman bugün için."; sonraki Peri satırı `normal`a döner.

## PT-b — düzenleme: bardaklar büyük, ikisi de dolu (sahibinin isteği, 7 Ekim 2026)

Telefonda tepsi küçük kalıyor, boş cam bardak seçilmiyordu. Sahibi: bardaklar büyüsün,
**ikisi de çay dolu**. Birinci referans PT'nin kendisi (düzenleme; çerçeve ve ölçek korunur —
yoksa sprite setle uyuşmaz).

## Sonuç — PT-b (7 Ekim 2026)

**Tuttu.** Bardaklar büyük, ikisi de demli ve buharlı, tabaklarda kaşık ve küp şeker; ölçek
ve baş açısı korundu, dekolte açık. Tepsi standart çerçeveden taştığı için **geniş kesim**
(`--genis`, manifestoda `genis` listesinde). Eski `cay` sprite'ının yerine geçti.


## PTC — Peri tacı göğsüne bastırıyor (mantosuz set, yeni ifade "tac"; PM2 + K1 referanslı)

Sahibi oyunda sordu (7 Ekim 2026): taç konuşulurken görünmeli. Kullanılacağı satırlar: "Son
kalem… tacı, bir adet" → "Tacı verir misiniz?" (altı satır); ardından K1 (taç koliye).
Tacın kendisi K1'deki gibi olmalı: gümüş, ince işçilikli, ortada büyük damla taşlı tiara.
Kesim `saten` profiliyle (taşlar bej zemine yakın parlıyor — PK dersi).

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı saç ve topuz, aynı krem saten
bluz ve aynı dekolte, aynı siyah kalem etek ve ince siyah kemer, aynı altın küpeler, aynı
çizim tarzı, aynı düz açık bej arka plan. Kadraj birinci referansla birebir aynı: aynı
ölçek, uyluk ortasından kesilmiş, başın tepesi aynı yükseklikte, dikey. Manto YOK.

İkinci referans görseldeki tacın AYNISI: aynı gümüş, ince işçilikli tiara, ortasında aynı
büyük damla biçimli parlak taş, aynı küçük taş dizisi. (İkinci görseldeki eller, koli ve
oda bu görselde YOK; yalnız taç alınacak.)

Poz: iki eliyle tacı göğsünün altına, kalbinin üstüne bastırıyor; parmakları tacın
etrafına sıkıca kapanmış, sahiplenici. Taç kameraya dönük, parlıyor. Taç dekolteyi
örtmüyor; göğsünün altında duruyor.

Başın açısı: başı kadrajın soluna dönük, çenesi hafifçe havada; burnu kadrajın soluna
bakıyor, kulağı kadrajın sağında. Gözleri karşısındakinde. Kameraya bakmıyor.

İfade: onurlu, inatçı bir meydan okuma: kaşları hafifçe çatık, dudakları sıkı, gözleri
kısık; "O satılık değil."

Arka plan DÜZ, AÇIK BEJ; başka hiçbir nesne yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Geldiğinde bakılacaklar:** taç K1'dekiyle aynı mı, arka plan düz bej mi, ölçek PM2 ile
aynı mı, dekolte, el ve parmak sayıları (tacı kavrayan parmaklar).

## Sonuç — PTC (7 Ekim 2026)

**Tuttu.** Kesik sprite `kaynak/yeni_gorsel/sprite/peri_mantosuz_tac.webp` (mantosuz setin
`tac` ifadesi). İki el tacı göğsün altına bastırıyor, inatçı meydan okuma; ölçek PM2 ile
aynı (`saten` profili). Fark: taç K1'e göre daha altın tonlu (K1'de sıcak ışıkta gümüş-şampanya);
tacın üst ucu dekoltenin altına değiyor, dekolte görünür. Oyunda "O satılık değil.",
"Ben onu takarken…", "…Annenize selam söyleyin." — Peri tacı K1'e kadar bırakmıyor.

### PTS — Peri, mantosuz, kızgın + taç (7 Ekim 2026) — TUTTU
Referanslar: 1) mevcut `peri_mantosuz_sinirli` ham görseli, 2) PTC (taçlı Peri), 3) K1.
Düzenleme: aynı poz ve ifade, yalnız sıkılı yumruk tacı kavrıyor (kalça hizasında,
göğsü örtmüyor). Kesim: saten profil, KENAR=14, `--genis` (uzanan kol). Oyunda
"O satılık değil." ve onu izleyen "Ben onu takarken…" satırında; ifade adı `tac_sinirli`.

### H3 — Hilmi Bey, anahtar ve kâğıdı uzatıyor (7 Ekim 2026) — TUTTU
Referans: 1) H1 ham görseli. Aynı adam ve ölçek; dosya bir kolda, öteki kol kadrajın
soluna uzanmış; katlı kâğıt (yüzü kapalı) ve üstünde etiketsiz pirinç anahtar. Yazı yok.
Kesim: `hilmi` profili. **Ders:** beyaz kâğıt açık bej zeminle bitişik olduğu için kenar
taraması onu da sildi (KENAR düşürmek yetmedi, renk eşiği zemini de aldı) → kâğıt
kaynakta elle çizilen bir çokgen maskesiyle geri kondu. Zemine yakın renkte, figürün
dışına taşan nesne istenecekse kesimden sonra maske gerekeceğini baştan bil.
Oyunda "Bir de bu var." satırından "Manto."ya kadar (`hilmi.uzatir`).

### K13 — Peri kapıda anahtarla boğuşuyor (A5 + D1 + Peri A2 + PM2 referanslı, 7 Ekim 2026) — TUTTU
Sahibinin isteği: "Peri anahtarı deniyor. Olmuyor." anlatısına görüntü. Kapı D1'deki
kapının aynısı; tabela kadrajın dışında (yazı yüzeyi), kâğıt buruşuk ve kapalı, kırmızı
stiletto kapının alt paneline dayalı. İlk sonuçta (ChatGPT) anahtarı tutan el ters
bükülmüştü → yalnız eli düzelten düzenleme (ilk görsel referans). Düzenlemeyi **Grok**
yaptı; yüz değişmedi (A2/ilk/Grok yan yana bakıldı). Grok 864×1152 verdi → Lanczos ile
900×1200'e büyütüldü, WebP q80. Kopya `kaynak/yeni_gorsel/ara_k13_anahtar.webp`.

### PSA — Peri, mantolu, şaşırmış (A2 referanslı, 7 Ekim 2026) — TUTTU
Sahibinin isteği: koridorda "Tel lazım mı?" sesini duyup Cengo'yu görünce Peri irkilsin.
Eli köprücük kemiğinin altında, gözler iri, dudaklar aralık. Ölçek ve baş yüksekliği A2
ile birebir; `peri` profiliyle temiz kesildi → `sprite/peri_manto_sasirmis.webp`.
Oyunda "Tel lazım mı?" (dinleyen Peri) ve Cengo'nun girdiği anlatı satırında.

### CB — Cengo "buyrun" (CA2 referanslı, 7 Ekim 2026) — TUTTU (CB-b)
Sahibinin isteği: kapıyı açınca bir eliyle teli cebe koyup öbürüyle içeri yol versin.
İlk sonuçta ÜÇ el vardı (cebe giden kol ile uzanan avuç aynı omuzdan) → düzenleme:
cebe giden kol kaldırıldı, tel zaten göğüs cebinde ucu görünür; bileklik uzanan bileğe
taşındı. Ölçek CA2 ile birebir. `cengo` profiliyle kesildi; kol ile gövde arasındaki
kapalı bej boşluk (delik doldurma kapalı olduğu için kalıyor) elle floodfill ile
saydamlandı → `sprite/cengo_buyrun.webp`. **Ders:** iki elle iki ayrı iş isteyince
üretici bir kola iki el bağlayabiliyor; el sayısını her sonuçta say.

### PME — Peri, mantolu, meraklı (A2 referanslı, 7 Ekim 2026) — TUTTU
Sahibinin isteği: "Ne maaşı?"da şaşırma görseli (irkilme, el göğüste) fazla geldi;
"biraz merak olmalı". Baş hafif eğik, işaret parmağı çenede, öteki el belde, kaşlar
kalkık, dudaklar aralık. Üretici 1024×1536 verdi; ölçek A2 ile aynıydı → x1402'ye
indirilip zemin rengiyle 1122×1402'ye ortalanarak dolduruldu, `peri` profiliyle kesildi
→ `sprite/peri_manto_merakli.webp`. Şaşırma görseli yalnız "Tel lazım mı?" irkilmesinde.

### K14 — Hilmi Bey kristali ışığa tutuyor (A2 + H1 referanslı, 7 Ekim 2026) — TUTTU
Sahibinin isteği: "Hilmi Bey eğilip bir kristali alıyor…" anlatısında ekranda dimdik duran
Hilmi ve önceki satırdan kalan utanmış Peri vardı. Ara kare: yerdeki avizenin yanında diz
çökmüş, bir kristali ışığa tutuyor, yanağında küçük bir gökkuşağı; dosya kapalı ve boş
(büyütüp bakıldı, yazı yok). Kadrajda yalnız Hilmi. 1086×1448 → 900×1200 WebP q80.

### PMA — Peri, mantosuz, acı (PM2 referanslı, 7 Ekim 2026) — TUTTU
Sahibinin isteği: "Avukatım… En büyüğü tuzaktı." satırında parmakla Hilmi Bey'i işaret
eden sinirli görsel tuhaftı — öfke orada olmayan avukata. Kollar dekoltenin altında
kavuşturulmuş, bakış aşağı kaçmış, çene gergin. Ölçek PM2 ile birebir; `peri` profiliyle
kesildi → `sprite/peri_mantosuz_aci.webp`.
