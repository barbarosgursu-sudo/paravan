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

# PAKET 1 — YAN-C "Adres" (6 görsel)

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

# PAKET 1-EK — YAN-B düzeltmesi (1 görsel)

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

# SIRADAKİ PAKETLER (henüz yazılmadı)

| Paket | Kapsam | Yeni görsel |
|---|---|---|
| 2 | V1 + V3 kanıtları (sigorta dosyası, komşu, mahalle, tanığın tepkisi) | 4 |
| 3 | V4 + V2 kanıtları (hastane kaydı, çocuk, Vedat'ın parası, mahalle fısıltısı) | 5 |
| 4 | V5 + V6 (Cavit takibi, Ceyda'nın bulanıklığı, dosyaya dönüş, zincir) | 5 |
| 5 | Krizler + final (elektrik kesik ofis, icra, sezon sonu) | 4 |
| 6 | Karar ekranı ruh hâlleri (temiz / kirli / boşluk / bedel) | 4 |

Toplamda 7 + 22 = **29 yeni görsel**, 63 slotun tamamı dolar. WebP bütçesiyle
index.html ~4,1 MB — bugünkü 2,25 MB'dan büyük ama dünkü 4,47 MB'dan küçük.
