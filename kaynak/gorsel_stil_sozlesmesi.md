# Paravan Dedektiflik — Görsel Stil Sözleşmesi (v1)

> Amaç: 40+ görselin **tek elden çıkmış** gibi durması ve görsellerin metnin süsü değil
> **ipucunun taşıyıcısı** olması. Oyun okunmaz, *görülür* — dedektiflik gözle yapılır.
> Kritik kural: bir görsel de metin gibi bilgi taşır, o yüzden doğrulayıcıya tabidir
> (bkz. §7). "Nurcan hatasının görsel versiyonu" engellenir.

---

## 1. Palet felsefesi — İstanbul Noir

Münevver'in sıcak sepyası DEĞİL. Paravan'ın dünyası **soğuk ama yorgun** — tamamen karanlık
değil, içinde sönmekte olan sıcak lekeler olan bir noir. Düşmüş bir kraliçe, borçlu bir büro,
yağmurlu isli sokaklar.

**Temel ton (soğuk):**
- Kurşuni gri `#3A3F44`
- Kül mavisi `#5A6B78`
- Duman / beton `#787E82`
- Gece laciverti `#1C2530` (siyah DEĞİL — siyah ölü, lacivert yaşar)

**Sıcak lekeler (nadir, değerli — gözü çeker):**
- Kehribar / sokak lambası `#C8894B`
- Kirli altın (Peri'nin geçmiş ihtişamı) `#B8985A`
- Sönük kırmızı (tehlike/ifşa anı) `#8C3A34`
- Sigara közü / abajur `#D9A566`

**İlke:** Ekranın %80'i soğuk, %20'si sıcak. Sıcak asla baskın olmaz; tek bir lamba, tek bir
köz, bir yüzdeki tek altın parıltı. Soğuğun içindeki sıcak, noir'ı insani yapar.

---

## 2. Işık kuralı — sert, yandan, gölgeli

Münevver'in yumuşak abajur ışığının AKSİNE:
- Işık **yandan** gelir, yüzün yarısını gölgede bırakır.
- Panjur/jaluzi çizgileri, uzun gölgeler, kontrast.
- Ama **abartısız** — dram değil, *yorgunluk.* Klasik dedektif estetiği, sakin dozda.
- Gece sahnelerinde tek kaynak (sokak lambası, far, pencere) — gerisi lacivert karanlık.

---

## 3. Teknik / fırça

> **DÜZELTME (2. tur).** Bu bölüm önce "koyu yağlıboya" diyordu. Üretime geçerken
> `gorsel_promptlari.md`'deki çekirdek **foto-gerçekçi sinematik render**'a döndü ve
> eldeki 33 görselin hepsi o ağızdan çıktı. Bağlayıcı olan uygulamadır; sözleşme
> ona uyduruldu. Yeni görsel siparişleri yağlıboya DEĞİL, aşağıdaki teknikle verilir.

**Foto-gerçekçi, sinematik, atmosferik dijital render — bir film karesi.** Sinematik renk
derecelendirmesi, hafif film greni, gerçekçi dokular; dört köşesi hafif karanlığa düşen
kadraj. Tek teknik = 60+ görselde tutarlılık garantisi. Gerçekçiliğin sıcaklığı, tamamen
soğuk noir'ı insani tutar (hüzünlü + tekinsiz + sıcak dengesi).

**Koyuluk dengesi:** SAHNE ve KANIT görselleri koyu-atmosferik olabilir; PORTRELER biraz
daha aydınlık ve okunur olmalı — yandan ışık ve yarı gölge sürer, ama yüz kaybolmaz.

---

## 4. Karakter görsel kimlikleri

Her karakterin ışığı, karakterini taşır:

| Karakter | Görsel kimlik |
|---|---|
| **Peri** (49) | Soğuk gri dünyada eski ihtişamdan kalan kirli altın izler. Yorgun ama dik. Işık güzelliğini ve yıpranmışlığını aynı anda gösterir. |
| **Cengo** (38) | Daha sıcak tonlar (insani taraf). Bakımsız, gölgede rahat, hınzır. Sokağın adamı. |
| **Cavit** (57) | Soğuk, temiz takım — ama terli parıltılar. Işık onu hep biraz FAZLA aydınlatır: saklayacak şeyi olanın rahatsız parlaklığı. |
| **Ceyda** (34) | Belirsiz ışık; yüzünün yarısı HEP gölgede. Okunamazlığı görsel olarak taşır. |
| **İlyas** (46) | En kırık, en gölgeli. Yüzündeki **yara** ve **yorgunluk** ışıkta belirgin. Acınası ve tekinsiz aynı anda. (Topallama: duruşunda/yürüyüş karesinde.) |
| **Kaya** (53, maktul) | Fotoğraflarda "iyi adam" görünen, güven veren, babacan yüz. Ama bir gölge. |
| Yan: Nesrin, Vedat, tanık kadın, çocuğun annesi | Sıradan, yorgun İstanbul yüzleri; her biri tek bir yara taşır. |

---

## 5. Mekân / zaman tonları

| Bağlam | Ton |
|---|---|
| **Ajans (gündüz)** | Soğuk gri-mavi, tozlu, borç yorgunu ama güvenli. |
| **Sokak / soruşturma (gece)** | Derin lacivert, sokak lambası kehribarı, yağmur parıltısı. |
| **Tehlike / ifşa anları** | Sönük kırmızı sızar; gölgeler sertleşir. |
| **Geçmiş / Peri'nin anıları** | Kirli altın, sönmekte olan ihtişam — nadir kullanılan özel ton. |

---

## 6. GÖRSEL-YOĞUN İLKE — mümkün olan her yerde görsel

Oyun salt okuma olmayacak. Üç katman:

### a) Karakter portreleri
Her konuşan karakterin yüzü. Konuştukça görünür. (Temel — Münevver'de vardı.)

### b) Mekân / sahne görselleri
Her vakanın açılışında bir "sahne": ajans masası, gece sokağı, merdiven boşluğu (Kaya'nın
öldüğü yer), Vedat'ın kenar kapısı, Ceyda'nın evi.

### c) KANIT görselleri — oyunun kalbi
Her ipucu (`clue`) bir görselle gelir. Dedektiflik *görülerek* yapılır:
- Olay yeri fotoğrafı (merdiven, düşüş açısı)
- Belgeler (sigorta yazısı, banka dekontu, eski dava dosyası)
- Gizlice çekilen fotoğraf (İlyas'ın yüzü — **yara + topallama görünür**)
- Eşyalar (yüzük, zarf, tahsilat çantası, isimsiz ödeme kayıtları)
- Cavit + Ceyda'nın yakalandığı an

Metin anlatmaz, görsel gösterir. Kanıta bakmak = oynamak.

---

## 7. KRİTİK: Görsel de `needs/reveals` kuralına tabidir

Bir kanıt görseli de bilgi taşır — tıpkı metin gibi. Bu yüzden:

**Kural:** Bir görsel, bağlı olduğu clue'nun `reveals` kümesinden FAZLASINI gösteremez.
Oyuncunun henüz bilmediği bir şeyi görsel SIZDIRAMAZ.

**Örnek (V3):** İlyas'ın yüzünü (yara + topallama) gösteren gizli fotoğraf, ancak
`foto_teshis` olgusuyla AÇILIR — daha önce değil. Oyuncu teşhis noktasına gelmeden o yüzü
görsel olarak göremez.

**Örnek (V2):** İlyas V2'de tahsildar olarak görünür ama görseli yalnızca "yorgun bir adam"
gösterir — truth'ta `ilyas_cinayet = YOK` olduğu için, V2 görseli hiçbir tehlike/cinayet
iması taşıyamaz (karanlık ışık, tehditkâr poz vb. YASAK).

### 7b. Giriş sahnesinde yüz seçilmez

Vakanın açılış görseli müvekkili **duruşuyla** anlatır, yüzüyle değil: kapıda duran bir
silüet, eğik omuzlar, elde bir çanta. Yüz, o kişiyi tanıtan **ipucuna** aittir.

Bu bir estetik tercih değil, §7'nin aynısı: giriş metni oyuncuya henüz bir yüz
kazandırmamıştır. `yana_giris_b` (Nadire kapıda, yüzü seçilmiyor) ile `portre_nadire`
(ipucuyla açılan yüz) ayrımı bu kuralın kaynağıdır ve sürdürülür.

**Doğrulayıcıya ek (Kural 1 genişletme):** Her görsel, bağlı clue'nun `reveals`ine
etiketlenir. Görsel bir kanon yüzü/olguyu gösteriyorsa, o yüz/olgu clue'nun `needs ∪ reveals`
kümesinde olmalı. Değilse → FAIL. (Nurcan'ın görsel versiyonu böyle engellenir.)

---

## 8. Öncelik / maliyet katmanları

"Her yere görsel" = 40-60 görsel = büyük dosya + çok emek. Akıllı katmanlama:

| Öncelik | Ne | Neden |
|---|---|---|
| **Olmazsa olmaz** | Karakter portreleri + kanıt görselleri | Oyunun kalbi |
| **Çok değerli** | Her vakanın açılış sahne görseli | Atmosfer |
| **Lüks** | Her küçük an için ayrı görsel | Tekrar-kullanılabilir mekân görselleriyle idare edilir |

**Teknik not (Adım 4'e):** Dosya boyutu için görseller dışarıdan/ayrı yüklenebilir
(tek dev HTML'e gömmek yerine). Metin+mantık dondurulup test edildikten SONRA gömülür.

---

## 9. YAPMA listesi (tutarlılık koruması)

- Zifiri siyah kullanma → gece laciverti kullan.
- Sıcağı baskın yapma → %20 kuralı.
- Yumuşak/eşit aydınlatma yapma → yandan, sert, gölgeli.
- İkinci bir teknik karıştırma → tek teknik: foto-gerçekçi sinematik render (§3).
- Bir görselde clue'nun açtığından fazlasını gösterme → §7.
- Ceyda'yı net/aydınlık gösterme → yarısı hep gölgede.
- Karakteri tehlikeli gösteren imayı, o bilgi açılmadan koyma → §7.

---

## 10. Görsel sipariş kalıbı (her görsel için tek ağız)

Her görsel istenirken şu şablon kullanılır (tek elden çıkması için):

```
[Foto-gerçekçi, sinematik, atmosferik dijital render; İstanbul Noir.]
Konu: [ne/kim]
Palet: soğuk kurşuni-gri + gece laciverti temel; [varsa] tek sıcak leke: [kehribar/altın/kırmızı]
Işık: yandan, sert, yüzün/sahnenin yarısı gölgede; tek kaynak [lamba/pencere/far]
Ton: yorgun, tekinsiz, [vakaya göre: hüzünlü/gergin/soğuk]
Kısıt: [§7 — bu görsel yalnızca şunu göstermeli: {clue.reveals}; fazlası YOK]
```

Bu şablon, 40+ görselin aynı dünyadan çıkmasını sağlar.
