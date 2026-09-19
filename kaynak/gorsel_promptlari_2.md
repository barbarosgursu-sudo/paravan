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
tek sıcak leke arkadaki eski, soluk bir dükkân vitrininin kehribarı; görselin en fazla
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

# PAKET 1-DÜZELTME — süreklilik onarımı (5 görsel) — **GÖMÜLDÜ**

İlk tur gömüldükten sonra üç kırık çıktı. İkisi süreklilik, biri Nurcan.

**1. `yanc_ayla_hayat` — Nurcan sızıntısı.** Gömülen görselde pencereden panoramik
Haliç/cami manzarası görünüyor. `ayla_kim` ile `izi_sur` **kardeş ipuçları** — ikisinin de
tek koşulu `kadin_adi`, biri ötekini gerektirmiyor. Yani oyuncu `ayla_yeri`'ni hak etmeden
`ayla_kim`'i açabiliyor ve manzara ona semti veriyor. Ayrıca daire yeni yapı; `yanc_sokak`'taki
eski apartmanla aynı dünyada değil.

**2. Karar seti — palto ve çekmece.** "Duvarda paltonun asılı olduğu boş askı" cümlesi *boş
askı* diye okundu: trençkot yalnızca `karar_temiz`'de asılı kaldı. Dahası açık çekmece
`bedel`'in ayırt edici motifi olması gerekirken `bosluk` ve `kirli`de de duruyor; üç ekran
birbirine benziyor.

**3. `portre_dolandirici` — yüz karışması.** Bıyıklı, koyu montlu, kırk beş yaşında bir adam;
`portre_ilyas_v2` ve `portre_vedat` de öyle.

**Büronun mimarisi kanon, dokunulmuyor.** D2–D4'ün odası `prolog_masa`, `yanc_giris`,
`yana_giris` ve `karar_temiz` ile birlikte dört gömülü görselde tanımlı: uzun pencere, arkada
Haliç, geniş ahşap masa, tek lamba. "Dar, tek odalı, zemin küçük" istemi Ayla'nın dairesine
aittir (D1) ve büroya taşınamaz — taşınırsa dördüyle birden kopar. Notun eskilik/yoksulluk
yükü ise mobilya çıkarmadan, yıpranma diliyle uygulanmıştır: yıpranmış masa, boyası çatlamış
duvar, çizilmiş dolap, solmuş halı. Büroyu gerçekten daraltmak istenirse `karar_temiz` dahil
dört gömülü görselin de yeniden üretilmesi gerekir.

**Siparişlerin kalıbı bozulmadı:** her biri kendi orijinalinin aynısıdır, yalnızca kırığı
düzelten cümleler değişmiştir. `karar_temiz` **çıpadır, yeniden üretilmez** — D2/D3/D4 için
onu referans görsel olarak eklemek, üçünü aynı odada tutmanın en kısa yolu.

---

## D1. `yanc_ayla_hayat.jpg` — `ayla_kim` ipucu (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke çekili perdenin ardından sızan geç öğleden sonra ışığının soluk kehribarı;
görselin en fazla %20'si sıcak. Işık yandan ve yumuşak gelir; odanın yarısı gölgede.
Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü)
kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Eski bir İstanbul apartmanında, dar ve tek odalı bir dairenin içi — tavan yüksek ama
zemin küçük, yıpranmış ama tertemiz silinmiş parke. Eşya az ve eski: yıllanmış küçük bir
masa, tek sandalye, masada tek bardak ve tek tabak; her şey tam yerinde, hiçbir şey fazla.
Şık ya da yeni hiçbir mobilya YOK; ayrı salon, geniş hol, gösterişli konsol YOK — oda tek.
Kapının arkasında ikinci bir sürgü. Pencerenin perdesi tamamen çekili — dışarısı görünmüyor,
yalnızca perdenin ardından soluk bir ışık sızıyor. Hiçbir fotoğraf, hiçbir hatıra, hiçbir
davetiye yok — duvarlar çıplak. Kimse yok. Yıllardır aynı düzenle sürdürülen, kimseyi içeri
almayan, adı konmamış bir saklanma hâli. Sessiz, temiz, yalnız. Hüzünlü ama onurlu bir
dinginlik.
```

*Kısıt:* `ayla_hayati`. Ayla'nın **yüzü yok**. Korku ya da kaçış sahnesi değil; düzenli bir
hayat. Kapı sürgüsü tek ipucu, ve o kadarı yeter. **Pencereden hiçbir şey görünmeyecek** —
cami, Haliç, deniz, tanınır silüet, karşı bina yasak: `ayla_kim` yer bilgisi vermiyor ve
`izi_sur`suz açılabiliyor. Bina eski, `yanc_sokak`'taki cepheyle aynı dünya; yeni yapı,
panoramik cam, lüks manzara yasak. **Ölçek de ipucunun parçası:** ilk denemede daire ferah
ve zevkli çıktı — üç yıldır işten eve gidip gelen, kimseyle görüşmeyen bir kadının evi dar
olacak, eşyası az ve eski.

---

## D2. `karar_bedel.jpg` (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının dar kehribar konisi; görselin en fazla %20'si sıcak. Işık
yandan gelir; odanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Aynı loş büro, aynı masa — eski ve yorgun bir yer: yıpranmış koyu ahşap masa, boyası
çatlamış duvarlar, pirinç gövdeli yarım küre abajur, arkada eskimiş deri koltuk, sağda tülü
çekili uzun pencere, solda çizilmiş metal evrak dolabı, yerde solmuş eski bir halı. Bir çekmece açık ve
neredeyse boş; içinde birkaç madenî para, katlanmış tek bir kâğıt para, bir de eski bir
makbuz koçanı. Çekmecenin yanında kapanmış bir dosya duruyor — iş bitmiş. Duvardaki askıda
bir trençkot asılı duruyor. Kimse yok. Acıma yok, dram yok; verilmiş bir şeyin sessiz
boşluğu. Dik durmayı bilen bir yoksulluk. Hüzünlü ama onurlu.
```

*Kısıt:* Trençkot **askıda asılı** olacak — ilk turda "boş askı" diye okundu ve set dağıldı;
palto dördünde de aynı yerde duruyor. Kâğıt paranın üstünde okunur hiçbir rakam ya da desen
olmayacak; makbuz koçanı yalnızca çizgi ve kırışıklıkla anlatır.

---

## D3. `karar_bosluk.jpg` (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: neredeyse tamamen soğuk kurşuni gri ve gece laciverti (asla saf siyah
değil); sıcak leke en aza inmiş — yalnızca uzakta, pencerenin ötesindeki bir sokak lambasının
çok soluk kehribarı. Işık zayıf ve yandan gelir; odanın çoğu gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Aynı büro, gece — eski ve yorgun bir yer: yıpranmış koyu ahşap masa, boyası çatlamış
duvarlar, pirinç gövdeli yarım küre abajur, arkada eskimiş deri koltuk, sağda tülü çekili
uzun pencere, solda çizilmiş metal evrak dolabı, yerde solmuş eski bir halı, duvardaki
askıda asılı bir trençkot. Masadaki abajur SÖNMÜŞ. Masanın bütün çekmeceleri kapalı. Kapanmış bir dosya tam
ortada duruyor, üstünde hiçbir şey yok. Koltuk geri itilmiş, biri kalkıp gitmiş. Bir bardak
dibinde soğumuş çay. Hava durgun, toz askıda. Ne rahatlama ne pişmanlık — bir şey bitti ama
hiçbir şey çözülmedi. Nötr, durgun, tuhaf biçimde sessiz. Boşluğun kendisi.
```

*Kısıt:* Çekmece **kapalı** olacak — açık çekmece `bedel`'in işareti, tekrarı ikisini
birbirine benzetiyor. Lamba kesinlikle sönük.

---

## D4. `karar_kirli.jpg` (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke kül tablasındaki sigara közünün küçük turuncu noktası ve lambanın masaya
düşen fazla sert kehribar lekesi; görselin en fazla %20'si sıcak. Işık tek kaynaktan, sert
ve yandan; odanın yarısı karanlıkta. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Aynı büro, gece geç saat — eski ve yorgun bir yer: yıpranmış koyu ahşap masa, boyası
çatlamış duvarlar, pirinç gövdeli yarım küre abajur, arkada eskimiş deri koltuk, sağda tülü
çekili uzun pencere, solda çizilmiş metal evrak dolabı, yerde solmuş eski bir halı,
duvardaki askıda asılı bir trençkot. Masanın bütün çekmeceleri kapalı. Masanın üstünde dolu bir kül tablası ve kenarına
bırakılmış, kimse çekmediği hâlde filtresine kadar yanmış bir sigara — ince bir duman hâlâ
yükseliyor. Yanında kapanmış bir dosya. Lamba ışığı masaya olması gerekenden biraz fazla
sert düşüyor. Odanın bir köşesi tamamen karanlık ve göz oraya gitmek istemiyor. Kan YOK,
silah YOK, şiddet YOK, korku öğesi YOK — hiçbir melodram yok. Rahatsızlık yalnızca
beklemekten ve sönmemiş közden geliyor. Ağır, bayat, huzursuz.
```

*Kısıt:* Çekmece **kapalı**. Yargı yok: hiçbir yerinde "bu kötü bir karardı" diyen bir işaret
olmayacak; rahatsızlık yalnızca közden ve bekleyen sigaradan gelecek.

---

## D5. `portre_dolandirici.jpg` — `dolandirici_iz` ipucu (yeniden)

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke arkadaki eski, soluk bir dükkân vitrininin kehribarı; görselin en fazla
%20'si sıcak. Işık yandan gelir, yüzün yarısı gölgede kalır — ama yüz kaybolmaz, ifade net
seçilir. Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey
(portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Kırk beş yaşlarında, tamamen sıradan görünen bir adamın portresi. Tıraşlı, bıyıksız,
sakalsız; yuvarlakça bir yüz, seyrelmiş saç, ince çerçeveli bir gözlük. Ucuz ama parlak
kumaştan, omuzları oturmamış açık renk bir takım ceket ve yıllanmış, gevşek bağlanmış bir
kravat, fazla gülümseyen bir yüz,
insana güven vermeye çalışan bir ifade — ve gözlerinde sürekli bir hesap. Kalabalıkta
hatırlanmayacak kadar silik; tarif edilse kimse bulamaz. Zengin değil, tehlikeli de değil;
batmış insanların etrafında dolaşıp küçük paralar toplayan biri. Bayat bir samimiyet.
Soğuk, silik, hafifçe mide bulandırıcı.
```

*Kısıt:* `dolandirici_kim`. Nadire ya da salon çalışanlarından hiçbiri görselde olamaz;
**Nadire'ye benzememesi** zorunlu. Ayrıca `portre_ilyas_v2` ve `portre_vedat` ile
karışmayacak: bıyık yok, koyu mont/parka yok, yorgun-işçi tipi yok — ayırt edici yön tıraşlı
yüz, gözlük ve ucuz parlak takım.

---

## İSTEĞE BAĞLI — `yanc_sokak.jpg` (yeniden)

Gömülü sürümde beyaz sedanın iki plakası, cam çıkartması ve parmaklık ardındaki yazı şeridi
yerel bulanıklıkla silindi; oyun boyunda görünmüyor ve kural ihlali kalmadı. Rötuşsuz bir
asıl isteniyorsa Paket 1 / 5. maddedeki prompt aynen tekrarlanır, yalnızca "Sokak sakin:
ıslak asfalt, birkaç park etmiş araba, bir kedi." cümlesi şununla değiştirilir: "Sokak
sakin: ıslak asfalt, birkaç saksı, bir kedi — hiç araç yok."

---

# PAKET 2 — V1 + V3 kalan kanıtları (4 görsel)

Omurganın ilk iki vakasında görselsiz kalan kaynaklar. İkisi belge/mekân, biri portre, biri
tepki anı.

---

## 12. `v1_sigorta.jpg` — `sigorta_yazisi` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının dar kehribar konisi; görselin en fazla %20'si sıcak. Işık
yandan ve sert gelir; masanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film
greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı,
harf ya da rakam olmasın.
Konu: Bir dedektiflik bürosunun masasında, yeni açılmış kalın bir sigorta dosyası. Şirket
işi: düzgün ciltlenmiş, lastikle bağlanmış, kenarları keskin — evde tutulan bir dosya değil,
kurumsal bir dosya. İçinden iki ayrı kâğıt cinsi taşıyor: kalın poliçe sayfaları ve arada
ince, uzun hesap dökümü şeritleri. Yanında bir ataç kutusu, bir bardak soğumuş çay. Dosya
fazla düzenli, fazla eksiksiz — aceleyle ayıklanmadan verilmiş. Kimse yok. Ölüm yok, kaza
yok, kan yok; yalnızca bekleyen bir ödemenin bürokratik ağırlığı. Soğuk, resmî, sabırlı.
```

*Kısıt:* Bu kaynak yalnızca `sigorta_sorusturma`'yı açıyor — ödemenin donduğunu ve bağımsız
rapor beklendiğini. Cinayet, itiliş, merdiven, şüphe **görselde yok**. Hesap dökümü şeritleri
kaynağın kendi metninde geçtiği için serbest (V4'ün köprüsü oradan kurulu), ama üstlerinde
okunur rakam olamaz. Yüz yok.

---

## 13. `portre_komsu.jpg` — `komsu_ifadesi` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke aralanmış kapıdan sızan koridor ampulünün soluk kehribarı; görselin en fazla
%20'si sıcak. Işık yandan gelir, yüzün yarısı gölgede kalır — ama yüz kaybolmaz, ifade net
seçilir. Sinematik renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre
yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Altmış yaşlarında bir kadının portresi; kendi kapısının aralığında duruyor, üstünde ev
hırkası, saçı gecelik hâlinde toplanmış. Uyandırılmış ama şaşırmamış bir yüz — anlatacağı şeyi
zaten kafasında çevirmiş biri. İfadesi ne korku ne heyecan: duyduğu bir şeyden emin, ama emin
olmanın kendisinden rahatsız. Bakışı biraz yana, duvara doğru — ses o taraftan gelmişti.
Sıradan, yorgun bir İstanbul yüzü. Suçlama yok, dehşet yok; yalnızca gece yarısı duyulan ve
unutulamayan bir şeyin ağırlığı. Sakin, tedirgin, dürüst.
```

*Kısıt:* Yalnızca `komsu_ses` — o gece boğuk bir tartışma ve ikinci bir ses. Kadının kimi
duyduğu, cinayet, itiliş, Ceyda'nın evde olup olmadığı **gösterilemez**. Korku dolu ya da
tanıklıktan kaçan bir poz değil: bu kadın polise değil, size anlatıyor.

---

## 14. `v3_mahalle.jpg` — `mahalle_yokla` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke kepenkleri yarı inik bir bakkalın içinden sızan kehribar; görselin en fazla
%20'si sıcak. Işık yandan ve alçaktan gelir; sokağın yarısı gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Akşamüstü, eski bir İstanbul mahallesinin dar sokağı. Bir bakkalın önünde duran boş
plastik sandalyeler — biraz önce oturulmuş, aceleyle kalkılmış gibi hâlâ dağınık. Yarı inik
kepenk. Bir balkonda yarı çekilmiş perde, arkasında kimse görünmüyor ama perde yeni
kımıldamış. Islak kaldırımda tek bir kedi. Hiç insan yüzü yok; birkaç uzak silüet var, hepsi
sırtı dönük ya da çoktan bir kapıdan giriyor. Konuşma bitmiş, soru sorulmuş, cevap alınmamış.
Tehlike YOK, tehdit YOK — yalnızca herkesin aynı anda meşgul olduğu bir sessizlik. Soğuk,
kapalı, ısrarla suskun.
```

*Kısıt:* Yalnızca `mahalle_fisilti` — o gece bir şey olduğu ve herkesin korkudan sustuğu.
Tanığın kim olduğu, ne gördüğü, İlyas, yara, topallama **hiçbiri görselde olamaz**. Yüz yok.

---

## 15. `v3_teshis.jpg` — `foto_goster` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masadaki tek ampulün kehribar halesi; görselin en fazla %20'si sıcak. Işık
yandan ve sert gelir; odanın yarısı karanlıkta. Sinematik renk derecelendirmesi, hafif film
greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı,
harf ya da rakam olmasın.
Konu: Küçük, mütevazı bir evin masası. Masanın üstünde yüzü aşağı bakan grenli bir fotoğraf —
yalnızca beyaz arkası ve kıvrılmış köşesi görünüyor. Fotoğrafın üstünde yaşlı bir kadının eli:
parmaklar geri çekilmiş, ağzına götürülmek üzere havada kalmış, eklemleri beyazlamış. Kadının
yalnızca eli ve omzunun bir parçası kadrajda; yüzü kadrajın dışında. Karşısında ikinci bir el,
fotoğrafı ona doğru itmiş ve orada bırakmış. İki el arasındaki mesafe konuşmayı bitirmiş.
Şiddet YOK, ağlama YOK, dram YOK — bir tanımanın refleksi. Sessiz, keskin, geri alınamaz.
```

*Kısıt:* Yalnızca `foto_teshis` — tanığın fotoğrafı onayladığı. **Fotoğrafın yüzü görünmüyor**
(o yüz `v3_gizli_foto`'nun işi, tekrarı bu kaynağın konusunu boğar). Tanığın yüzü de kadraj
dışında — `portre_tanik` zaten var, burada anlatan şey el. İlyas'a dair hiçbir işaret yok.

---

# PAKET 3 — V2 + V4 kalan kanıtları (5 görsel)

Biri belge, biri sokak, üçü V4'ün sessiz zinciri. V4 vakanın tonu **hüzün**; bu üç görsel
setin en yumuşak ışığını taşır.

---

## 16. `v2_hesap.jpg` — `vedat_mali` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının dar kehribar konisi; görselin en fazla %20'si sıcak. Işık
yandan gelir; masanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film greni,
gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf
ya da rakam olmasın.
Konu: Bir büro masasında yan yana dizilmiş bir dizi ince kâğıt: hepsi aynı boyda, hepsi aynı
yerden katlanmış, hepsi YÜZÜ AŞAĞI. Yalnızca kenarları, katlanma çizgileri ve üst üste binen
gölgeleri görünüyor; hiçbirinin yüzü kadrajda değil. Sayıları çok ve dizilişleri düzenli —
aynı şeyin aylarca tekrarlandığını yalnızca bu tekrar söylüyor. Yanlarında lastikle bağlanmış
kapalı bir esnaf defteri, bir ataç, ucu körelmiş bir kalem. Kâğıtların üstünde ne satır, ne
sütun, ne rakam, ne mühür var; bilgiyi taşıyan şey sayı ve düzen. Kimse yok. Suç yok,
skandal yok; yalnızca
bir adamın kazandığından fazlasını bir yere gönderdiğini gösteren soğuk bir düzen. Sabırlı,
sessiz, biraz hüzünlü.
```

*Kısıt:* Yalnızca `vedat_mali_sikinti` — düzenli bir para çıkışı olduğu. Paranın **kime**
gittiği, kardeş, tahsildar, kenar mahalle, tehlike **yok**. Aldatma iması da yok — bu kaynak
Nesrin'in şüphesini çürütmeye giden yolun ilk adımı. Rakam okunmayacak.

---

## 17. `v2_mahalle.jpg` — `mahalle_konus` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke uzakta yanan tek bir apartman penceresinin soluk kehribarı; görselin en fazla
%20'si sıcak. Işık yandan ve zayıf gelir; sokağın çoğu gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Gece, kenar bir mahallenin arka sokağı. Bir duvar dibinde, yan yana dizilmiş birkaç
eski sandalye ve devrilmiş bir tahta kasa — buranın düzenli bir bekleme yeri olduğu belli.
Duvarda yıllanmış bir sıva çatlağı ve üstünde silinmeye çalışılmış koyu bir leke. Uzakta bir
apartman girişi; kapı aralık ama içerisi karanlık. Sokakta araç YOK; tabela, levha, afiş,
plaka, dükkân yazısı YOK. Hiç insan yok; yalnızca bir duvara yaslanan
uzun, sahibi görünmeyen bir gölge. Silah YOK, şiddet YOK, kan YOK, tehditkâr figür YOK —
tehlike yalnızca burasının kimin sokağı olduğunu bilen bir düzenden geliyor. Ağır, kapalı,
tekinsiz.
```

*Kısıt:* `kacak_kardes` ve `kardes_tehlike` — borcun kardeşe ait olduğu ve işin tehlikeli
olduğu. Kardeşin **yüzü yok** (hiç gösterilmiyor, vakada da yok). İlyas yok, tahsilat anı yok,
Vedat yok. Tehlike atmosferle anlatılır; sahnelenmiş bir suç görüntüsü olamaz.

---

## 18. `v4_cevre.jpg` — `kaya_cevre` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke perdeden sızan geç öğleden sonra ışığının soluk kehribarı; görselin en fazla
%20'si sıcak. Işık yandan ve yumuşak gelir; odanın yarısı gölgede. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Kapanmış bir çocuk doktoru muayenehanesi. Alçak bir muayene masası, üstünde katlanmış
temiz bir örtü. Duvarda çocuk çizimlerinin asıldığı bir pano — kâğıtlar solmuş, bantları
kurumuş, bir köşesi sarkmış; çizimlerde yalnızca renkli şekiller var, hiçbir harf, isim ya da
rakam yok. Bekleme tarafında iki küçük sandalye, biri hâlâ hafifçe yana
dönük. Kapı camının ardında koridorun boşluğu. Her şey özenle bırakılmış: temiz, düzenli,
geri gelinecekmiş gibi. Kimse yok. Ölüm yok, yas töreni yok, ağlayan kimse yok — yalnızca
sevilen birinin ardından kapanmış bir odanın sessizliği. Hüzünlü, sıcak, onurlu.
```

*Kısıt:* Yalnızca `kaya_itibar` — Kaya'nın sevilen, dürüst bilinen bir doktor olduğu. Gizli
ödeme, çocuk, aile, Ceyda, cinayet **hiçbiri yok**. Panodaki çizimlerde okunur harf ya da
isim olamaz. Yüz yok — `portre_kaya` ayrı bir slot.

---

## 19. `v4_aile_evi.jpg` — `cocuk_bul` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke başucundaki küçük lambanın kehribarı; görselin en fazla %20'si sıcak. Işık
yandan ve yumuşak gelir; odanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film
greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı,
harf ya da rakam olmasın.
Konu: Yoksul ama tertemiz bir evin küçük odası. Tek kişilik bir çocuk yatağı, yorganı düzgünce
çekilmiş ve boş. Başucunda bir sehpa: üstünde bir sürahi, bir bardak, ve düzenli sıralanmış
birkaç ilaç kutusu — yenisi değil, yıllardır aynı sırayla dizilmiş olanlar. Kutular düz ve
etiketsiz, yüzleri çevrili; üzerlerinde hiçbir yazı, marka ya da rakam görünmüyor. Duvarda
küçük, yazısız bir çocuk çizimi. Yerde, yatağın yanında, oturulmaktan yıpranmış bir
tabure. Perde yarı çekili.
Kimse yok — ne çocuk, ne aile. Hastane YOK, tıbbi cihaz YOK, acı YOK, ağlama YOK. Yıllardır
sürdürülen bir bakımın sessiz düzeni. Hüzünlü ama onurlu; sevgiyle tutulmuş bir oda.
```

*Kısıt:* Yalnızca `cocuk_hasta` — paranın ağır hasta bir çocuğun tedavisine gittiği. **Çocuğun
yüzü ve bedeni görselde YOK** (hasta bir çocuğu göstermek hem oyuncunun hak etmediği bir
yakınlık kurar hem de vakanın tonunu melodrama çevirir). Kaya, doktor bağı, ödemenin kesilmesi
ve ailenin hayırseveri bilmediği **gösterilemez** — onlar sonraki kaynakların işi. İlaç
kutularında okunur yazı olamaz.

---

## 20. `v4_hastane.jpg` — `hastane_kayit` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke tavandaki tek floresanın ucunda titreyen soluk sıcak leke; görselin en fazla
%20'si sıcak. Işık yukarıdan ve yandan gelir; koridorun derinliği karanlığa gider. Sinematik
renk derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Eski bir hastanenin arşiv odası. Duvar boyunca metal kartoteks çekmeceleri; çekmecelerin
etiket çerçeveleri BOŞ. Biri yarıya kadar açık, içinde sıkışık duran yüzlerce kart fişin
yalnızca sırtı görünüyor — hiçbir fişin yüzü kadrajda değil. Açık çekmecenin önünde
bir tabure ve üstünde tek bir çıkarılmış dosya kartı, yüzü aşağı. Yanda tekerlekli bir arşiv
merdiveni. Zemin karo, yer yer aşınmış. Hiç insan yok. Hastalık YOK, hasta YOK, tıbbi sahne
YOK — bu bir kayıt odası, bir tedavi yeri değil. Yıllar öncesine uzanan bir bağın kâğıtta
durduğu, tozlu, sabırlı bir yer. Soğuk, kurumsal, biraz ürpertici.
```

*Kısıt:* Yalnızca `kaya_doktor_bag` — çocukla Kaya'nın doktor-hasta olarak tanıştığı. Kaya'nın
**adı, yüzü, imzası görselde olamaz** (kural: hiçbir yazı yok; bağı kaynağın metni kuruyor).
Çocuk, aile, ödeme yok.

---

# PAKET 4 — V5, V6 ve yan işlerin kalanı (6 görsel)

Sezonun sonuna giden zincir. Üçü V5'in takip-şüphe hattı, biri finalin toparlaması, ikisi yan
işlerin kapanış kaynakları.

---

## 21. `v5_dosya_donus.jpg` — `dosya_donus` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının kehribar konisi; görselin en fazla %20'si sıcak. Işık yandan
gelir; masanın yarısı gölgede. Sinematik renk derecelendirmesi, hafif film greni, gerçekçi
dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı, harf ya da rakam
olmasın.
Konu: Eski bir büro masası, gece. Ortada aylar önce kapatılmış bir dosya duruyor — yeniden
açılıp yine kapatılmış: kapağın katlanma izi hâlâ üstünde, kenarları yıpranmış. Dosya KAPALI;
hiçbir sayfanın yüzü görünmüyor. Etrafına, sonradan biriken kâğıtlar yelpaze gibi dizilmiş —
hepsi yüzü aşağı, görünen arka yüzleri bomboş; hepsi aynı dosyaya bakıyor. Kâğıtların üçünde
aynı yerde aynı biçimde kıvrılmış bir köşe, biri ötekinin üstüne dikkatle hizalanmış: bir el
bunları defalarca yan yana koymuş. Lamba dosyayı değil, dosyanın etrafındaki halkayı
aydınlatıyor. Kül tablasında iki izmarit. Kimse yok. Yeni bir delil YOK; eskiye yeniden bakmanın
soğukluğu var. Ağır, sabırlı, huzursuz.
```

*Kısıt:* Yalnızca `kaya_dosya_donus` — ilk dosyaya dönünce her düğümde aynı kişinin çıktığı.
Cavit'in **yüzü, adı, fotoğrafı görselde yok** (`portre_cavit` ayrı slot; şüphe bu kaynağın
metninde kuruluyor, görselde değil). Ceyda, İlyas, ilişki, cinayet sahnesi yok.

---

## 22. `v5_takip.jpg` — `cavit_izle` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke uzaktaki bir sokak lambasının camda dağılan kehribarı; görselin en fazla
%20'si sıcak. Işık yandan ve uzaktan gelir; ön plan karanlıkta. Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon.
Görselde kesinlikle hiçbir yazı, harf ya da rakam olmasın.
Konu: Gece, park etmiş bir arabanın içinden dışarı bakış. Ön camın alt kenarında buğu, üstünde
yağmur damlaları; cam kısmen kararmış, dışarısı bulanık. Uzakta ıslak bir cadde ve birkaç sönük
vitrin — vitrinlerde tabela, levha ya da logo yok, yalnızca bulanık ışık lekeleri. Sokakta başka
araç YOK. Gösterge paneli kadrajın dışında; hiçbir kadran ya da rakam görünmüyor. Kadrajın
kenarında, torpidonun üstünde soğumuş bir termos bardağı — düz ve etiketsiz. Dışarıda kimse yok
— takip edilen kişi kadrajda değil, henüz gelmemiş ya da çoktan geçmiş. Hiç insan figürü yok.
Silah YOK, gerilim YOK, kovalamaca YOK — yalnızca beklemenin kendisi: saatlerdir aynı yerde
duran bir arabanın içi. Soğuk, sabırlı, yalnız.
```

*Kısıt:* Yalnızca `cavit_takip` — Peri'nin Cavit'i izlemeye başladığı. Takibin **nereye
çıktığı** (Ceyda'nın kapısı, ilişki, perde) bu görselde **olamaz** — o `v5_perde`'nin işi ve
bir sonraki kaynağın ödülü. Cavit kadrajda yok, Peri'nin yüzü de yok.

---

## 23. `v5_bulanik.jpg` — `ceyda_derin` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke aralık duran çekmeceye düşen ince kehribar çizgi; görselin en fazla %20'si
sıcak. Işık yandan ve dar gelir; odanın çoğu gölgede. Sinematik renk derecelendirmesi, hafif
film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir
yazı, harf ya da rakam olmasın.
Konu: Bakımlı bir evin tuvalet masası, gece. Üstünde iki şey yan yana duruyor ve ikisi de aynı
kadına ait: bir yanda yas tutan birinin eşyası — siyah bir eşarp, ters çevrilmiş bir çerçeve,
kullanılmamış bir mendil; öbür yanda hesap tutan birinin eşyası — kilitli küçük bir kutu, bir
anahtar, düzgünce katlanmış kalın bir kâğıt — katı keskin, yüzü içeri dönük; üstünde hiçbir
yazı, kaşe ya da matbu iz görünmüyor, resmîliği yalnızca kâğıdın cinsinden belli. İkisinin
arasında ayna, ama ayna kadrajın açısından kimseyi yansıtmıyor. Bir çekmece parmak genişliğinde
aralık kalmış. Kimse yok. İki eşya öbeği eşit ışık alıyor, hangisinin asıl olduğu belli değil.
Suç YOK, kanıt YOK, itiraf YOK. Soğuk, kapalı, huzursuz edecek kadar dengeli.
```

*Kısıt:* `ip_akil` ve `ip_para` — cinayet fikrinin ondan çıkmış olabileceği ve servetle fazla
ilgilendiği. **Ceyda çözülmez** (kanon: `ceyda_pay` hiçbir yerde kesinleşmez, K5 bunu
koruyor). Görsel iki okunuşu da **eşit ağırlıkta** taşımalı: yas eşyaları hesap eşyalarından
ne daha aydınlık ne daha soluk olacak. Suçlayan bir kompozisyon (karanlıkta parlayan kutu,
gölgede gizlenmiş bakış) **yasak**. Ceyda'nın yüzü yok — `portre_ceyda_golge` ayrı slot.

---

## 24. `v6_zincir.jpg` — `zincir_ozet` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke masa lambasının kehribar konisi; görselin en fazla %20'si sıcak. Işık tam
tepeden ve yandan gelir; masanın dışı karanlıkta. Sinematik renk derecelendirmesi, hafif film
greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle hiçbir yazı,
harf ya da rakam olmasın.
Konu: Gece geç saat, büro masası yukarıdan görülüyor. Masanın üstü tek bir hat boyunca dizilmiş:
yıllanmış ve KAPALI bir dava dosyası, yüzü aşağı çevrilmiş dar bir kâğıt şerit (basılı yüzü
masaya bakıyor, görünen yüzü bomboş), yüzü aşağı bakan grenli bir fotoğraf, ve en sonda
kapatılmış bir kaza raporu. Dördünün de yüzü kapalı; hiçbir sayfa okunmuyor. Aralarında boşluk
yok — biri ötekinin kenarına değecek kadar yaklaştırılmış, sıra bilinçli. Kâğıtların altında,
masanın ahşabında yıllanmış halkalar. Kenarda sönmüş bir sigara ve soğumuş çay. Kimse yok;
yalnızca bir sandalye geri itilmiş. Ok YOK, ip YOK, duvar panosu YOK, not YOK — bağı kuran şey
yalnızca dizilişin kendisi. Sessiz, kesin, ağır.
```

*Kısıt:* Yalnızca `zincir_tam`. Bu kaynak **ancak** V5'te tam resmi çözen oyuncuya açılıyor,
yani zincirin parçaları hak edilmiş. Yine de **hiçbir yüz** gösterilmiyor: fotoğraf yüzü
aşağı, kimse kadrajda değil — dizilişin kendisi anlatıyor. Okunur yazı, isim, tarih yok.

---

## 25. `yana_sevil_kapali.jpg` — `sevil_okuma` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke pencereden giren geç ikindi ışığının soluk kehribarı; görselin en fazla %20'si
sıcak. Işık yandan ve yumuşak gelir; odanın yarısı gölgede. Sinematik renk derecelendirmesi,
hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle
hiçbir yazı, harf ya da rakam olmasın.
Konu: Bir büro masasında, misafir tarafında bırakılmış bir kadın eldiveni — tek tek, çifti yok.
Yanında dokunulmamış bir çay bardağı, kenarında ruj izi bile yok. Karşıdaki sandalye geri
itilmemiş, düzgünce yerinde: kalkan kişi acele etmemiş. Masanın kenarında kapalı, tokası takılı
küçük bir deri defter — kapağı düz, üstünde kabartma harf, isim ya da marka yok; kimsenin
açmadığı, açmaya da çalışmadığı bir defter. Pencereden giren ışık defterin üstüne düşüyor ama
içini göstermiyor. Kimse yok. Sır YOK, ifşa YOK, kanıt YOK — yalnızca bir kadının neden
geldiğini söylemeden gittiği bir odanın sessizliği. Ölçülü, kapalı, okunamaz.
```

*Kısıt:* Yalnızca `sevil_geldi_neden` — Sevil'in bu kapıyı boşuna çalmadığı. **Minnet mi korku
mu, çözülmez** (kanon: `sevil_pay` belirsiz, K5 koruyor): görsel iki yönden birine ağırlık
veremez. Cengo, eski dava, suçun kime ait olduğu **yok**. Sevil'in yüzü yok — `portre_sevil`
ayrı slot; burada anlatan şey geride bırakılan eşya.

---

## 26. `yanb_kirinti.jpg` — `avukat_kirintisi` ipucu

```
Foto-gerçekçi, sinematik, atmosferik bir dijital render; "İstanbul Noir" havası — bir film
karesi gibi. Palet: ağırlıklı soğuk kurşuni gri ve gece laciverti (asla saf siyah değil);
tek sıcak leke kapı aralığından sızan merdiven ampulünün kehribarı; görselin en fazla %20'si
sıcak. Işık yandan ve dar gelir; sahnenin çoğu gölgede. Sinematik renk derecelendirmesi,
hafif film greni, gerçekçi dokular. Dikey (portre yönlü) kompozisyon. Görselde kesinlikle
hiçbir yazı, harf ya da rakam olmasın.
Konu: Bir büro kapısının eşiği, içeriden bakış. Kapı yeni kapanmış, aralıktan merdiven boşluğu
ve inen basamakların ilk ikisi görünüyor. Eşiğin hemen içinde, yerde, biraz önce düşürülmüş ya
da bilerek bırakılmış küçük bir şey: ikiye KATLANMIŞ, kenarı yıpranmış ince bir kâğıt parçası —
bir zarfın köşesinden yırtılmış kadar küçük. Kâğıt katlı duruyor; iç yüzü görünmüyor, dışarıda
yalnızca boş arka yüzü ve katın keskin kenarı var. Üstünde hiçbir işaret yok: ne mürekkep, ne el
yazısı, ne çizik, ne damga, ne matbu iz. Kapının camı düz ve yazısız — üstünde tabela, harf ya
da numara yok. Arkada büronun loş içi: yıpranmış koyu ahşap bir masa, deri bir koltuk, metal bir
evrak dolabı, kubbe başlıklı eski bir masa lambası, yerde desenli yıpranmış bir kilim. Ekran
YOK, bilgisayar YOK, tekerlekli modern ofis sandalyesi YOK — bu büro eski ve analog. Kadrajda
HİÇ İNSAN YOK: ne kişi, ne silüet, ne insan biçiminde bir gölge, ne de camda ya da yerde
yansıyan bir insan hayali. Kapının camının ardı boş — merdiven boşluğundan başka bir şey
görünmüyor. Biri az önce gitti ama görüntüde kimse kalmadı; gidişi yalnızca aralık kapı ve
yerdeki kâğıt söylüyor. Kovalamaca YOK, gizem teatralliği YOK — bir kapının kapanışından sonra
yerde kalan tek şey. Küçük, soğuk, açık uçlu.
```

*Kısıt:* Yalnızca `avukat_izi` — kaçan avukata dair ince bir iz. Avukatın **yüzü, adı, yeri,
nereye kaçtığı yok**; bu vaka onu çözmüyor, Sezon 2'nin kapısını aralıyor. Nadire kadrajda
değil — `portre_nadire` ayrı slot. Kâğıtta okunur hiçbir şey olamaz. İlk üretimde camda
ayakta duran bir figür çıktı (sızıntı değildi, §7b'ye uygundu) ama "kapanıştan sonra kalan
tek şey" hissini bozuyordu; "geçip giden gölgenin izi" ifadesi insan biçimi davet ettiği
için gövdeden çıkarıldı. İkinci üretimde figür gitti ama kâğıtta el yazısı belirdi ve büroda
ekran/tekerlekli sandalye çıktı (kanon büro: `karar_temiz` — ahşap masa, deri koltuk, metal
evrak dolabı, analog). Üçüncüde kâğıt katlanıp yüzü gizlendi — v1_sigorta ve v6_zincir'de
işe yarayan çözümün aynısı — ve büro donanımı gövdeye yazıldı.

---

# PAKET 5 — krizler + final (4 görsel) — **KAPATILDI (19 Eylül 2026)**

**Sahibinin kararı: sezon 59 slotta kapandı; bu paket sipariş edilmedi.** Aşağısı, ileride
dönülmek istenirse diye duruyor — iş listesi değil, kayıt.

Bu paketin promptları **bilerek yazılmadı.** Sebep: bu dört görselin bağlanacağı slot veride
ya da arayüzde **yok**.

| Düşünülen görsel | Nereye bağlanacaktı | Bugünkü durum |
|---|---|---|
| Elektrik kesik büro | sonuç ekranı kriz kutusu (`isletme`) | kutu yalnızca metin (`build_html.js` → `KRIZ_METIN`) |
| İcra ihbarnamesi | kriz kutusu (`kira`) | aynı |
| Cengo'ya ödenemeyen ay | kriz kutusu (`cengo`) | aynı |
| Sezon sonu | `sonEkrani()` | görsel kancası yok |

Yani bunlar sipariş edilmeden önce küçük bir arayüz işi var: kriz kutusuna ve son ekranına
görsel alanı eklemek, krizleri `KRIZ_METIN` yerine görselli bir haritaya bağlamak (motordaki
`KRIZLER` ile eşleşmesi `test_borc.js` tarafından zaten kilitli — yeni alan eklenirken o eşleme
korunmalı).

Bu soru soruldu ve **59'da kapatmak** yönünde cevaplandı. Bu dosyadaki 15 prompt üretildi,
gömüldü ve sezonun görsel işini bitirdi.

---

# SLOT SAYIMI (19 Eylül 2026 — kapanış)

| | Sayı |
|---|---|
| Gömülü görsel | 59 |
| **Veride tanımlı toplam slot** | **59** |
| Bekleyen prompt | 0 |
| Paket 5 (krizler + final) — slot açılmadı, sipariş edilmedi | 4 |

Eski tablodaki "63 slot / 29 yeni görsel" hedefi Paket 5'in dört görselini de sayıyordu;
onların bağlanacağı yer veride hiç açılmamıştı. **Veride tanımlı her slot dolu.**
