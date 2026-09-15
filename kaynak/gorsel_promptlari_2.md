# Paravan Dedektiflik — Görsel Siparişleri, 2. Tur

**Kalıp:** Her prompt tek parça ve kendi kendine yeter — çekirdek + özel diye ayırmıyoruz.
Doğrudan kopyalanıp yapıştırılır. (Kalıp, `yana_giris_b` için kullanılan gerçek promptun
aynısıdır; eldeki 33 görsel bu ağızdan çıktı.)

**Üç kural, promptun içine gömülü:**

1. **Giriş sahnesinde yüz seçilmez.** Müvekkil kapıda durur, duruşu konuşur — yüzü değil.
   Yüz, o kişiyi tanıtan *ipucuna* aittir. (`yana_giris_b`'de Nadire'nin yüzü yok,
   `portre_nadire` ipucuyla geliyor. Aynısını sürdürüyoruz.)
2. **Görselde hiçbir yazı, harf, rakam olmaz.** Belge görselleri bu yüzden hep dokuyla
   anlatır: kalınlık, kırışık, mühür izi, lambanın düştüğü açı.
3. **Görsel, bağlı olduğu ipucunun `reveals`inden fazlasını gösteremez** (Nurcan kuralının
   görsel hali, stil sözleşmesi §7). Her siparişin altında *Kısıt* satırı olarak yazılı —
   o satır ChatGPT'ye gitmez, bizim kontrolümüzdür.

Tek biçim: dikey (portre yönlü), ~760–900 px genişlik. Gömerken WebP q80'e çevriliyor.

---

# PAKET 1 — YAN-C "Adres" (6 görsel) — **GÖMÜLDÜ** (`yanc_sokak` plaka rötuşuyla)

Oyunun tek tamamen görselsiz vakası. Borç 80.000 ₺'yi geçince beliriyor: Hulki adında sakin
bir adam bir kadının adresini istiyor. **Vakanın kalbi belirsizlik** — Hulki'nin niyeti
oyun boyunca çözülmez. Görseller bu belirsizliği korumak zorunda: hiçbiri "bu adam katil"
demeyecek, hiçbiri "bu adam masum" demeyecek.

---

## 1. `yanc_giris.jpg` — vakanın açılış sahnesi

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masadaki abajurun kehribar parıltısı; görselin en fazla %20'si sıcak. Işık
yandan gelir; sahnenin yarısı gölgede. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Loş, borç yorgunu bir dedektiflik bürosunda, kapının hemen içinde ayakta duran iyi
giyimli bir erkek silüeti (yüz seçilmiyor — sadece duruş). Oturmamış; paltosunu bile
çıkarmamış, çıkmaya hazır gibi. Duruşu son derece sakin, dengeli, hiç acelesi yok — ve
tam bu sakinlik odayı ağırlaştırıyor. Önünde boş bir misafir sandalyesi duruyor, adam onu
kullanmamış. Karşısında masa, üstünde tek abajur. Tehdit YOK, şiddet YOK, silah YOK, öfke
YOK — yalnızca fazla düzgün bir nezaket. Soğuk, ölçülü, tekinsizliği sessizliğinden gelen
bir an.
```

*Kısıt:* Girişte oyuncu yalnızca `is_teklifi`'ni biliyor. Adamın geçmişi, Ayla, uzaklaştırma
kararı — hiçbiri görselde ima edilemez. **Yüz yok** (kural 1). Tehditkâr poz yasak:
V2'deki İlyas emsali, stil sözleşmesi §7.

---

## 2. `portre_hulki.jpg` — `kimi_ariyor` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke arkada uzaktaki bir lambanın soluk kehribar parıltısı; görselin en fazla
%20'si sıcak. Işık yandan gelir, yüzün yarısı gölgede kalır — ama yüz kaybolmaz, ifade net
seçilir. Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey
(portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Elli yaşlarında bir adamın portresi. Bakımlı, iyi giyimli, tıraşlı; kravatı düzgün.
Yüzü tamamen sakin — kızgın değil, sert değil, soğuk bile değil; sadece düzgün. Bakışı
dolaysız ve dingin, karşısındakini rahatsız edecek kadar dengeli. Asla sesini yükseltmemiş
birinin yüzü. Hiçbir yara izi, hiçbir öfke çizgisi, hiçbir kabalık yok; huzursuzluk bu
pürüzsüzlükten geliyor. Nötr, ölçülü, okunamaz bir sükûnet.
```

*Kısıt:* Bu ipucu yalnızca `kadin_adi`'nı açıyor. Oyuncu bu noktada Hulki'nin geçmişini
bilmiyor. Şiddet, tehdit, karanlık ima **yasak** — huzursuzluk yalnızca fazla düzgünlükten
gelecek. Adamın kötü olup olmadığı görselden anlaşılmamalı.

---

## 3. `yanc_iz.jpg` — `hulki_kim` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke yukarıdaki bir merdiven ampulünün cılız kehribar halesi; görselin en fazla
%20'si sıcak. Işık yandan/yukarıdan gelir; sahnenin yarısı gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Eski bir apartman katında, yan yana sıralanmış birkaç küçük büro kapısı — camları
buzlu, boyaları çatlamış, hepsi birbirinin benzeri. Kapıların önündeki zemin, aynı yolu
defalarca yürüyen ayaklarla aşınmış. Tek bir kapının önünde taze bir iz var, ötekilerde
daha eski izler. Hiç insan yok. Bu koridordan aynı sorunun birçok kez geçtiğini söyleyen
sessiz bir tekrar duygusu. Yorgun, silik, ısrarlı. Soğuk ve ıssız.
```

*Kısıt:* Yalnızca `hulki_gecmis` — "bu işi ilk kez yaptırmıyor". Kimin arandığı, uzaklaştırma
kararı ya da tehlike **gösterilemez**. İnsan figürü yok.

---

## 4. `yanc_adli.jpg` — `adli_kayit` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının dar kehribar konisi; görselin en fazla %20'si sıcak. Işık
tek kaynaktan, yandan ve sert gelir; sahnenin yarısı karanlıkta. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Bir adliye arşivinde, masanın üstünde açık duran ince bir dosya — kalın değil, ince;
içindeki mesele az sayfayla anlatılmış. Kâğıdın üstünde soluk bir mühür izinin kabartısı
(okunmuyor, sadece basıldığı belli). Kenarda bir kırtasiye tokası, bir bardak soğumuş çay.
Arkada rafların karanlığa giden sırası. Hiç insan yok. Az kelimeyle anlatılmış ağır bir
şeyin soğukluğu: kısa, resmî ve geri alınamaz. Ağır, sessiz, ürpertici.
```

*Kısıt:* `uzaklastirma`. Vakanın tehlikeyi ilk kez hak ettiren görseli — ağırlık burada
serbest. Ama Ayla'nın yüzü, evi ya da yeri **yok**; Hulki'nin ne yaptığı da gösterilmez,
yalnızca kaydın varlığı.

---

## 5. `yanc_sokak.jpg` — `izi_sur` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke üçüncü kattaki tek bir pencerenin ardındaki kehribar ev ışığı; görselin en
fazla %20'si sıcak. Işık yandan/uzaktan gelir; sokağın yarısı gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Akşam saatinde sıradan bir İstanbul ara sokağı; mütevazı, bakımlı bir apartmanın
cephesi aşağıdan görünüyor. Üçüncü katta tek bir pencerede ışık yanıyor, perdesi çekili;
içeride biri var ama görünmüyor. Sokak sakin: ıslak asfalt, birkaç park etmiş araba, bir
kedi. Kimse takip etmiyor, kimse pusuda değil, hiç insan figürü yok. Tehlike YOK, gerilim
YOK — yalnızca akşamın olağanlığı. Sakin, yorgun, sıradan bir mahalle akşamı.
```

*Kısıt:* `ayla_yeri`. **Bu ipucu yalnızca `kadin_adi` istiyor** — oyuncu uzaklaştırma
kararını okumadan da buraya gelebilir. O yüzden görsel tehdit, takip ya da av havası
taşıyamaz; V2'deki İlyas emsalinin birebir aynısı. Yüz yok.

---

## 6. `yanc_ayla_hayat.jpg` — `ayla_kim` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke pencereden giren geç öğleden sonra ışığının soluk kehribarı; görselin en
fazla %20'si sıcak. Işık yandan ve yumuşak gelir; odanın yarısı gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Küçük, son derece düzenli bir dairenin içi. Tek kişilik bir hayatın izleri: tek
bardak, tek tabak, tek sandalye; her şey tam yerinde. Kapının arkasında ikinci bir sürgü.
Pencerenin perdesi yarı çekili. Hiçbir fotoğraf, hiçbir hatıra, hiçbir davetiye yok —
duvarlar çıplak. Kimse yok. Yıllardır aynı düzenle sürdürülen, kimseyi içeri almayan,
adı konmamış bir saklanma hâli. Sessiz, temiz, yalnız. Hüzünlü ama onurlu bir dinginlik.
```

*Kısıt:* `ayla_hayati`. Ayla'nın **yüzü yok** — oyun onu hiç göstermiyor, oyuncu da hiç
hak etmiyor. Korku ya da kaçış sahnesi değil; düzenli bir hayat. Kapı sürgüsü tek ipucu,
ve o kadarı yeter.

---

# PAKET 1-EK — YAN-B düzeltmesi (1 görsel) — **GÖMÜLDÜ**

## 7. `portre_dolandirici.jpg` — `dolandirici_iz` ipucu

**Neden:** Bu ipucu bugüne kadar `portre_nadire.jpg`'yi gösteriyordu — yani batış
mağdurlarını avlayan dolandırıcı olarak, oyuncuya **müvekkilin kendi yüzünü** gösteriyorduk.
Yanlış kişiyi suçlayan bir görsel. Slot şimdilik yer tutucuya alındı, doğrusu bekliyor.

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke arkadaki bir vitrin ya da tabela ışığının soluk kehribarı; görselin en fazla
%20'si sıcak. Işık yandan gelir, yüzün yarısı gölgede kalır — ama yüz kaybolmaz, ifade net
seçilir. Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey
(portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Kırk beş yaşlarında, tamamen sıradan görünen bir adamın portresi. Ucuz ama özenli bir
ceket, fazla gülümseyen bir yüz, insana güven vermeye çalışan bir ifade — ve gözlerinde
sürekli bir hesap. Kalabalıkta hatırlanmayacak kadar silik; tarif edilse kimse bulamaz.
Zengin değil, tehlikeli de değil; batmış insanların etrafında dolaşıp küçük paralar toplayan
biri. Bayat bir samimiyet. Soğuk, silik, hafifçe mide bulandırıcı.
```

*Kısıt:* `dolandirici_kim`. Nadire ya da salon çalışanlarından hiçbiri görselde olamaz.
Erkek olması zorunlu değil ama **Nadire'ye benzememesi** zorunlu.

---

# PAKET 6 — KARAR EKRANI RUH HÂLLERİ (4 görsel) — **GÖMÜLDÜ**

Kırk karar ekranı, dört görsel. Hangi kararın hangi görseli aldığı **elle atanmıyor** —
kararın kendi `cengoBag` ve `para` değerlerinden türüyor (`motor.js/kararRuhHali`):

| hâl | kural | kaç karar |
|---|---|---|
| `temiz` | vicdan artı, para artı — doğru olan aynı zamanda ayakta tuttu | 11 |
| `bedel` | vicdan artı, para eksi — doğru olanı yaptın, cebinden ödedin | 7 |
| `bosluk` | vicdan sıfır — ne temiz ne kirli; kapattın, o kadar | 9 |
| `kirli` | vicdan eksi — ne kazandırdığı önemli değil | 13 |

**Dördü de aynı odada geçiyor: Peri'nin bürosu.** İnsan yok, yüz yok, hiçbir vakaya ait
nesne yok — çünkü aynı dört görsel dokuz vakanın kırk ekranında dönecek. Anlatan şey oda
ve saat; olay değil.

**Yargı yok.** Hiçbirinin üstünde "kirli karar" yazmayacak, alt metinleri bile yargısız
(kül tablası, çekmece, pencere). Oyun oyuncuya not vermiyor; bu sözleşme metinde nasıl
geçerliyse görselde de geçerli. Ayrım oyuncuya zaten Cengo göstergesi ve hesap kutusuyla
veriliyor — görsel yalnızca ikisine yüz veriyor, yeni bilgi eklemiyor.

Dördü **birbirinin yanında** üretilmeli: aynı oda, aynı açı ailesi, yalnızca saat ve
nesneler değişsin. Bir set gibi durmalılar.

---

## 8. `karar_temiz.jpg`

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masada hâlâ yanan abajurun kehribar parıltısı; görselin en fazla %20'si
sıcak. Işık yandan ve yumuşak gelir; odanın yarısı gölgede. Sinematik renk derecelendirmesi,
hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle
hiçbir yazı, harf ya da rakam olmasın.
Konu: Sabaha karşı, loş bir dedektiflik bürosunun penceresi. Perde aralanmış, dışarıdan
günün ilk soğuk mavi-grisi sızıyor. Masadaki abajur hâlâ yanıyor ama artık gereksiz —
iki ışık bir an için yan yana. Pencerenin önünde boş bir sandalye, kenarda kapanmış bir
dosya. Kimse yok. Zafer yok, kutlama yok, rahatlama yok; sadece insanın kendi yüzüne
bakabildiği bir sabah. Sakin, yorgun, temiz bir dinginlik.
```

---

## 9. `karar_bedel.jpg`

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının dar kehribar konisi; görselin en fazla %20'si sıcak. Işık
yandan gelir; odanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Aynı loş büro, aynı masa. Bir çekmece açık ve neredeyse boş; içinde birkaç madenî
para, katlanmış tek bir kâğıt para, bir de eski bir makbuz koçanı. Çekmecenin yanında
kapanmış bir dosya duruyor — iş bitmiş. Duvarda paltonun asılı olduğu boş askı. Kimse yok.
Acıma yok, dram yok; verilmiş bir şeyin sessiz boşluğu. Dik durmayı bilen bir yoksulluk.
Hüzünlü ama onurlu.
```

---

## 10. `karar_bosluk.jpg`

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: neredeyse tamamen soğuk kurşuni gri ve gece laciverti (asla saf siyah
değil); sıcak leke en aza inmiş — yalnızca uzakta, pencerenin ötesindeki bir sokak lambasının
çok soluk kehribarı. Işık zayıf ve yandan gelir; odanın çoğu gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Aynı büro, gece. Masadaki abajur SÖNMÜŞ. Kapanmış bir dosya tam ortada duruyor,
üstünde hiçbir şey yok. Sandalye geri itilmiş, biri kalkıp gitmiş. Bir bardak dibinde
soğumuş çay. Hava durgun, toz askıda. Ne rahatlama ne pişmanlık — bir şey bitti ama
hiçbir şey çözülmedi. Nötr, durgun, tuhaf biçimde sessiz. Boşluğun kendisi.
```

---

## 11. `karar_kirli.jpg`

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke kül tablasındaki sigara közünün küçük turuncu noktası ve lambanın masaya
düşen fazla sert kehribar lekesi; görselin en fazla %20'si sıcak. Işık tek kaynaktan, sert
ve yandan; odanın yarısı karanlıkta. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Aynı büro, gece geç saat. Masanın üstünde dolu bir kül tablası ve kenarına bırakılmış,
kimse çekmediği hâlde filtresine kadar yanmış bir sigara — ince bir duman hâlâ yükseliyor.
Yanında kapanmış bir dosya. Lamba ışığı masaya olması gerekenden biraz fazla sert düşüyor.
Odanın bir köşesi tamamen karanlık ve göz oraya gitmek istemiyor. Kan YOK, silah YOK,
şiddet YOK, korku öğesi YOK — hiçbir melodram yok. Rahatsızlık yalnızca beklemekten ve
sönmemiş közden geliyor. Ağır, bayat, huzursuz.
```

---

# PAKET 1-DÜZELTME — süreklilik onarımı (5 görsel)

İlk tur gömüldükten sonra üç kırık çıktı. İkisi süreklilik, biri Nurcan.

**1. `yanc_ayla_hayat` — Nurcan sızıntısı.** Gömülen görselde pencereden panoramik
Haliç/cami manzarası görünüyor. `ayla_kim` ile `izi_sur` **kardeş ipuçları** —
ikisinin de tek koşulu `kadin_adi`, biri ötekini gerektirmiyor. Yani oyuncu
`ayla_yeri`'ni hak etmeden `ayla_kim`'i açabiliyor ve manzara ona semti veriyor.
Ayrıca daire yeni yapı; `yanc_sokak`'taki eski apartmanla aynı dünyada değil.
→ Perde kapalı, manzara yok, bina eski.

**2. Karar seti — palto ve çekmece tutarsızlığı.** Dört görsel aynı odada geçiyor
ama `karar_temiz`'de askıda trençkot var, ötekilerde askı boş. Dahası açık çekmece
`bedel`'in ayırt edici motifi olması gerekirken `bosluk` ve `kirli`de de duruyor;
üç ekran birbirine benziyor, fark lamba ile sigaraya kalıyor.
→ `karar_temiz` çıpa kabul edilir, diğer üçü onun odasına uydurulur: palto üçünde
de askıda, çekmece yalnızca `bedel`'de açık.

**3. `portre_dolandirici` — yüz karışması.** Bıyıklı, koyu montlu, kırk beş yaşında
bir adam; `portre_ilyas_v2` ve `portre_vedat` de öyle. Sette bu tipten üç kişi
olunca oyuncu tereddüt ediyor.
→ Bıyıksız, farklı yapı, farklı kıyafet sınıfı.

---

## D1. `yanc_ayla_hayat.jpg` — `ayla_kim` ipucu (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke kapalı perdenin ardından sızan geç öğleden sonra ışığının soluk kehribar
çizgisi; görselin en fazla %20'si sıcak. Işık yandan ve yumuşak gelir; odanın yarısı
gölgede. Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey
(portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Eski bir İstanbul apartman dairesinin içi — yüksek tavan, yıpranmış ama tertemiz
silinmiş parke, kalın kat kat boyanmış duvarlar, köşede eski bir radyatör. Küçük ve son
derece düzenli tek kişilik bir hayatın izleri: tek bardak, tek tabak, tek sandalye, masada
tek kişilik bir örtü; her şey tam yerinde, hiçbir şey fazla. Ahşap çerçeveli uzun pencerenin
ince perdesi tamamen çekili — dışarısı görünmüyor, yalnızca perdenin ardından soluk bir ışık
sızıyor. Kapının arkasında ikinci bir sürgü ve bir emniyet zinciri. Duvarlar çıplak: hiçbir
fotoğraf, hiçbir hatıra, hiçbir davetiye, hiçbir takvim. Köşede küçük bir mutfak tezgâhı,
üstünde tek bir çaydanlık. Kimse yok. Yıllardır aynı düzenle sürdürülen, kimseyi içeri
almayan, adı konmamış bir saklanma hâli. Sessiz, temiz, yalnız. Hüzünlü ama onurlu bir
dinginlik.
```

*Kısıt:* `ayla_hayati`. **Pencereden hiçbir şey görünmeyecek** — cami, Haliç, deniz,
tanınır silüet, karşı bina, çatı manzarası yasak; `ayla_kim` yer bilgisi vermiyor ve
`izi_sur`suz açılabiliyor. Bina **eski İstanbul apartmanı**, `yanc_sokak`'taki cepheyle
aynı dünya: yeni yapı, panoramik cam, lüks manzara yasak. Ayla'nın yüzü yok. Korku ya da
kaçış sahnesi değil; düzenli bir hayat. Kapı sürgüsü tek ipucu, o kadarı yeter.

---

## KARAR SETİ — üçü için ortak oda künyesi

D2, D3, D4'ün üçünde de aşağıdaki oda birebir aynı kalır; yalnızca son paragraf değişir.
Çıpa `karar_temiz.jpg`'dir (gömülü, değişmiyor) — üçü onun odası gibi durmalı.

> Oda: Eski bir İstanbul bürosu. Solda metal bir evrak dolabı, üstünde üst üste kâğıtlar.
> Dolabın üstündeki duvarda İstanbul limanını gösteren siyah-beyaz çerçeveli bir baskı;
> onun altında ahşap bir askılık ve **askıda asılı duran bir trençkot**. Masa koyu, yıpranmış
> ahşap; sol kenarında pirinç gövdeli, yarım küre abajurlu bir masa lambası, bir kalemlik,
> bir yığın dosya, bir kül tablası. Masanın arkasında siyah deri bir çalışma koltuğu. Sağda
> tavana kadar uzanan pencere: önünde tül, kenarında ağır perde, altında dökme demir
> radyatör; camdan gece İstanbul'u ve uzakta bir vapur. Yerde desenli eski bir halı.
> Kimse yok. Kamera masanın köşesinden, hafif alçak açıyla bakar.

---

## D2. `karar_bedel.jpg` — `bedel` ruh hâli (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının dar kehribar konisi; görselin en fazla %20'si sıcak. Işık
yandan gelir; odanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Eski bir İstanbul bürosu. Solda metal bir evrak dolabı, üstünde üst üste kâğıtlar;
dolabın üstündeki duvarda İstanbul limanını gösteren siyah-beyaz çerçeveli bir baskı, onun
altında ahşap bir askılık ve askıda asılı duran bir trençkot. Masa koyu, yıpranmış ahşap;
sol kenarında pirinç gövdeli, yarım küre abajurlu bir masa lambası, bir kalemlik, bir yığın
dosya, bir kül tablası. Masanın arkasında siyah deri bir çalışma koltuğu. Sağda tavana kadar
uzanan pencere: önünde tül, kenarında ağır perde, altında dökme demir radyatör; camdan gece
İstanbul'u ve uzakta bir vapur. Yerde desenli eski bir halı. Kimse yok. Kamera masanın
köşesinden, hafif alçak açıyla bakar.
Bu karede: masanın çekmecesi açık ve neredeyse boş — içinde birkaç madenî para, katlanmış
tek bir kâğıt para, bir de eski bir makbuz koçanı. Çekmecenin üstünde, masada kapanmış bir
dosya duruyor; iş bitmiş. Lamba yanıyor ama ışığı dar. Acıma yok, dram yok; verilmiş bir
şeyin sessiz boşluğu. Dik durmayı bilen bir yoksulluk. Hüzünlü ama onurlu.
```

*Kısıt:* Yargı yok, vakaya ait nesne yok, insan yok. Kâğıt paranın üstünde okunur hiçbir
rakam ya da desen olmayacak — yıpranmış, solmuş, yüzü seçilmeyen bir kâğıt. Makbuz koçanı
yalnızca çizgi ve kırışıklıkla anlatır; başlık, sütun yazısı, el yazısı yok.

---

## D3. `karar_bosluk.jpg` — `bosluk` ruh hâli (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: neredeyse tamamen soğuk kurşuni gri ve gece laciverti (asla saf siyah
değil); sıcak leke en aza inmiş — yalnızca pencerenin çok ötesinde, uzaktaki bir sokak
lambasının soluk kehribarı. Işık zayıf ve yandan gelir; odanın çoğu gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Eski bir İstanbul bürosu. Solda metal bir evrak dolabı, üstünde üst üste kâğıtlar;
dolabın üstündeki duvarda İstanbul limanını gösteren siyah-beyaz çerçeveli bir baskı, onun
altında ahşap bir askılık ve askıda asılı duran bir trençkot. Masa koyu, yıpranmış ahşap;
sol kenarında pirinç gövdeli, yarım küre abajurlu bir masa lambası, bir kalemlik, bir yığın
dosya, bir kül tablası. Masanın arkasında siyah deri bir çalışma koltuğu. Sağda tavana kadar
uzanan pencere: önünde tül, kenarında ağır perde, altında dökme demir radyatör; camdan gece
İstanbul'u ve uzakta bir vapur. Yerde desenli eski bir halı. Kimse yok. Kamera masanın
köşesinden, hafif alçak açıyla bakar.
Bu karede: masadaki abajur SÖNMÜŞ, odanın tek ışığı pencereden gelen zayıf gece aydınlığı.
Masanın bütün çekmeceleri kapalı. Kapanmış bir dosya masanın tam ortasında duruyor, üstünde
hiçbir şey yok. Koltuk geri itilmiş, biri kalkıp gitmiş. Kenarda bir bardak, dibinde birkaç
yudum kalmış soğumuş çay. Hava durgun, toz askıda. Ne rahatlama ne pişmanlık — bir şey bitti
ama hiçbir şey çözülmedi. Nötr, durgun, tuhaf biçimde sessiz. Boşluğun kendisi.
```

*Kısıt:* Çekmece **kapalı** olacak — açık çekmece `bedel`'in işareti, burada tekrarı
ikisini birbirine benzetiyor. Lamba kesinlikle sönük. Yargı yok, insan yok.

---

## D4. `karar_kirli.jpg` — `kirli` ruh hâli (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke kül tablasındaki sigara közünün küçük turuncu noktası ve lambanın masaya
düşen fazla sert kehribar lekesi; görselin en fazla %20'si sıcak. Işık tek kaynaktan, sert
ve yandan; odanın yarısı karanlıkta. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Eski bir İstanbul bürosu. Solda metal bir evrak dolabı, üstünde üst üste kâğıtlar;
dolabın üstündeki duvarda İstanbul limanını gösteren siyah-beyaz çerçeveli bir baskı, onun
altında ahşap bir askılık ve askıda asılı duran bir trençkot. Masa koyu, yıpranmış ahşap;
sol kenarında pirinç gövdeli, yarım küre abajurlu bir masa lambası, bir kalemlik, bir yığın
dosya. Masanın arkasında siyah deri bir çalışma koltuğu. Sağda tavana kadar uzanan pencere:
önünde tül, kenarında ağır perde, altında dökme demir radyatör; camdan gece İstanbul'u ve
uzakta bir vapur. Yerde desenli eski bir halı. Kimse yok. Kamera masanın köşesinden, hafif
alçak açıyla bakar.
Bu karede: gece geç saat. Masanın bütün çekmeceleri kapalı. Masanın üstünde dolu bir kül
tablası ve kenarına bırakılmış, kimse çekmediği hâlde filtresine kadar yanmış bir sigara —
ince bir duman hâlâ yükseliyor. Yanında kapanmış bir dosya. Lamba ışığı masaya olması
gerekenden biraz fazla sert düşüyor. Odanın bir köşesi tamamen karanlık ve göz oraya gitmek
istemiyor. Kan YOK, silah YOK, şiddet YOK, korku öğesi YOK — hiçbir melodram yok. Rahatsızlık
yalnızca beklemekten ve sönmemiş közden geliyor. Ağır, bayat, huzursuz.
```

*Kısıt:* Çekmece **kapalı**. Yargı yok: görselin hiçbir yerinde "bu kötü bir karardı" diyen
bir işaret olmayacak; rahatsızlık yalnızca közden ve bekleyen sigaradan gelecek.

---

## D5. `portre_dolandirici.jpg` — `dolandirici_iz` ipucu (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke arkadaki bir vitrin ışığının soluk kehribarı; görselin en fazla %20'si sıcak.
Işık yandan gelir, yüzün yarısı gölgede kalır — ama yüz kaybolmaz, ifade net seçilir.
Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü)
kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Kırk beş yaşlarında, tamamen sıradan görünen bir adamın portresi. Tıraşlı, bıyıksız,
sakalsız; yuvarlakça bir yüz, seyrelmiş saç, ince çerçeveli bir gözlük. Ucuz ama parlak
kumaştan açık renk bir takım ceket ve gevşek bağlanmış bir kravat — özenilmiş ama ucuzluğu
belli. Fazla gülümseyen bir yüz, insana güven vermeye çalışan bir ifade ve gözlerinde
sürekli bir hesap. Kalabalıkta hatırlanmayacak kadar silik; tarif edilse kimse bulamaz.
Zengin değil, tehlikeli de değil; batmış insanların etrafında dolaşıp küçük paralar toplayan
biri. Bayat bir samimiyet. Soğuk, silik, hafifçe mide bulandırıcı.
```

*Kısıt:* `dolandirici_kim`. Nadire'ye benzemeyecek. Ayrıca **`portre_ilyas_v2` ve
`portre_vedat` ile karışmayacak**: bıyık yok, koyu mont/parka yok, kasvetli-yorgun işçi
tipi yok. Ayırt edici yön tıraşlı yüz + gözlük + ucuz parlak takım. Arkadaki vitrinde
okunur hiçbir tabela, etiket, fiyat olmayacak.

---

## İSTEĞE BAĞLI — `yanc_sokak.jpg` (yeniden)

Gömülü sürümde beyaz sedanın iki plakası, cam çıkartması ve parmaklık ardındaki yazı şeridi
yerel bulanıklıkla silindi; oyun boyunda görünmüyor ve kural ihlali kalmadı. Rötuşsuz bir
asıl isteniyorsa aynı prompt **araçsız** tekrarlanır: `gorsel_promptlari_2.md` Paket 1 / 5.
maddedeki metne "Sokakta hiç araç yok — park etmiş araba, motosiklet, plaka, tabela yok;
yalnızca ıslak asfalt, birkaç saksı ve bir kedi." cümlesi eklenir.

---

# SIRADAKİ PAKETLER (henüz yazılmadı)

| Paket | Kapsam | Yeni görsel |
|---|---|---|
| 2 | V1 + V3 kanıtları (sigorta dosyası, komşu, mahalle, tanığın tepkisi) | 4 |
| 3 | V4 + V2 kanıtları (hastane kaydı, çocuk, Vedat'ın parası, mahalle fısıltısı) | 5 |
| 4 | V5 + V6 (Cavit takibi, Ceyda'nın bulanıklığı, dosyaya dönüş, zincir) | 5 |
| 5 | Krizler + final (elektrik kesik ofis, icra, sezon sonu) | 4 |

Toplamda 7 + 22 = **29 yeni görsel**, 63 slotun tamamı dolar. WebP bütçesiyle
index.html ~4,1 MB — bugünkü 2,25 MB'dan büyük ama dünkü 4,47 MB'dan küçük.
