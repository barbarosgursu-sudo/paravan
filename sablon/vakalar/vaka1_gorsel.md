# VAKA 1 — GÖRSEL LİSTESİ VE PROMPTLAR

Üretim adımı 8 (`7_uretim_sureci.md`). **Hikâye 9 Ekim 2026'da dondu** (sahibi: "Hikâye tamam").
Kurallar: `5_gorsel_sistemi.md` (prompt kalıbı, bilinen hatalar, kontrol listesi). Üretici önce
ChatGPT; reddederse ya da tutmazsa Grok.

**Referanslar:** her promptun başında numaralı. Dosyalar sahibine `G<prompt>-<sıra>_...` adıyla
gönderildi. "G1 çıktısı" = o promptta üretilen görsel (önce o üretilir).

**Sıra önemli:** G1 → G2 (G1'den), G3 → G4 (G3'ten). Gerisi bağımsız.

| # | tür | ne | nerede | yerine geçtiği |
|---|---|---|---|---|
| G1 | figür | Kemal Reis, normal (fırçalı) | iskele | gri kutu `kemal.normal` |
| G2 | figür | Kemal Reis, öfkeli | Kemal yüzleşmesi | gri kutu `kemal.ofkeli` |
| G3 | figür | Serkan, sakin (kartsız) | Serkan ipucu, yüzleşmeler | `serkan.normal` (kartı saklayan eski görsel) |
| G4 | figür | Serkan, panik | yüzleşmeler | gri kutu `serkan.panik` |
| G5 | figür | Peri, mantolu, acı | zayıf kanıt yüzleşmesi | gri kutu `peri.manto.aci` |
| G6 | figür | Cengo, sinirli | sözlük eksiği (ileride) | gri kutu `cengo.sinirli` |
| G7 | ara kare | Peri mantosunu askıya asıyor, Rıza gözünü kaçırıyor | giriş | yeni |
| G8 | ara kare | Set arkası: Cengo pilav tabağıyla Tuba'nın yanında | 4. ipucu | yeni |
| G9 | detay | Kepenkte bantlı borç notu, Peri'nin elinde | Serkan ipucu | yeni |
| G10 | ara kare | Koridor, akşam: Peri anahtarla boğuşuyor | kapanış | yeni (K13'ün akşamı) |
| G11 | ara kare | Cengo teli Peri'nin avucuna koyuyor | kapanış, bağ yüksek | yeni |

**Ortak stil satırı** (yalnız sıfırdan üretilenlerde; düzenlemelerde "referansla aynı tarz" yeter):
> Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları,
> ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı
> renkler. Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi
> filmi değil, fotoğraf değil.

---

## G1 — Kemal Reis, normal (fırçalı)

**Referans 1:** Tuba (yalnız çizim tarzı, ölçek, kadraj, arka plan için).

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları,
ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı
renkler. Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi
filmi değil, fotoğraf değil. Referans görsel YALNIZ çizim tarzı, renk, ölçek, kadraj ve arka plan
içindir; içindeki kadın bu görselde yok.

Karakter: Kemal Reis, elli yaşlarında, Karaköy'de balıkçı. İri, geniş omuzlu, kalın boyunlu,
hafif göbekli; güçlü, nasırlı eller. Kara-kır, çok kısa kesilmiş saç; üç günlük kara-kır sakal;
BIYIKSIZ (üst dudağı tıraşlı). Güneşten yanmış, kalın derili, sert hatlı bir yüz; kalın kaşlar,
kısık gözler. Yaşlı değil; yorgun ama dinç.

Kıyafet: koyu lacivert, yıpranmış bir iş tişörtü; üstünde boynundan asılı, dizine kadar uzanan
turuncu-kahverengi kalın lastik balıkçı önlüğü. Hiçbir yazı, logo, desen yok.

Eller: TAM İKİ KOL, İKİ EL. İki eli de bileklerine kadar taze beyaz boyalı; önlükte de birkaç
beyaz boya lekesi. Sağ elinde (kadrajın solunda kalan el) beyaz boyalı, geniş bir boya fırçası,
fırçanın ucu aşağıda. Sol eli belinde.

Başın açısı ve bakış: başı kadrajın soluna, karşısında duran birine dönük; yüzü üç çeyrek
profilden. Burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor. Kameraya bakmıyor.

İfade: ters, somurtkan, savunmada; kaşları çatık, dudakları sıkılmış; "ne var?" der gibi.
Kötü biri değil; kaba ve kinci.

Kadraj: DİKEY. Referanstaki kadınla aynı ölçek ve kesim: uyluk ortasından yukarısı, başın tepesi
aynı yükseklikte. Tek başına, ayakta.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Sonuç (9 Ekim): Tuttu, ilk seferde (ChatGPT).** Bıyık yok (üst dudakta yalnız sakalla aynı
kirli sakal), iki el, fırça tek, yazı yok, bakış sola. Kaynak 1122×1402 geldi → yeni profil
`kemal` (tam genişlik, delik tol 10; 14'te önlükteki bir boya damlası delik sanılıp siliniyordu).
Koltuk altında kalan küçük bej leke elle silindi. Ekranda sağdaki el ekran kenarına değiyor;
sorun değil.

**Bakılacaklar:** bıyık yok mu; Rıza Reis'e (bıyıklı, kasketli, yaşlı) ve çaycıya benzemiyor mu;
eller beyaz, fırça tek mi; el sayısı.

## G2 — Kemal Reis, öfkeli

**Referans 1:** G1 çıktısı.

```
Referans görseldeki adamın AYNISI: aynı yüz, aynı kısa kara-kır saç ve sakal, bıyıksız, aynı
lastik önlük ve lacivert tişört, elleri aynı beyaz boyalı. Aynı çizim tarzı, aynı düz açık bej
arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey.

Değişen tek şey poz ve ifade. Fırça YOK.

Poz: TAM İKİ KOL, İKİ EL. Sol eli açık avuçla kendi göğsüne bastırılmış ("ben mi?"). Sağ eli
dirsekten bükük, avucu yukarı açık, kadrajın soluna doğru hafifçe uzanmış, öfkeyle soran bir el.

Başın açısı: başı kadrajın soluna dönük; burnu kadrajın soluna bakıyor, kulağı kadrajın sağında.

İfade: öfkeli, haksızlığa uğramış; kaşlar çatık ve ortada kalkık, ağzı açık, bağırıyor; boyun
damarları belirgin.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Sonuç (9 Ekim): Tuttu, ilk seferde.** Baş tepesi G1 ile aynı satırda (y=12), iki el beşer
parmak, yazı yok. `--profil kemal` ile temiz kesildi, elle düzeltme gerekmedi.

## G3 — Serkan, sakin (kartsız)

**Referans 1:** Serkan'ın mevcut görseli.

```
Referans görseldeki adamın AYNISI: aynı yüz, aynı kısa koyu saç ve kirli sakal, aynı koyu haki-yeşil
fermuarlı kapüşonlu ceket (açık), gri tişört ve koyu kot. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve
kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey.

Değişen: boynundaki kordon ve kart TAMAMEN YOK; boynu ve tişörtün yakası boş. Poz ve ifade.

Poz: TAM İKİ KOL, İKİ EL. Sol eli kotunun cebinde, rahat. Sağ eli ensesini kaşıyor, dirseği
yukarıda. Omuzları gevşek; ağırlığı bir ayağında.

Başın açısı: başı kadrajın soluna dönük, yüzü üç çeyrek profilden; burnu kadrajın soluna
bakıyor, kulağı kadrajın sağında. Kameraya bakmıyor.

İfade: sakin, yorgun, biraz kayıtsız; hafif, zoraki olmayan bir yarım gülümseme; "hava güzel,
değil mi?" diye konuyu değiştiren biri. Ter yok, korku yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Sonuç (9 Ekim): Tuttu, ilk seferde.** Kordon ve kart yok. Eller ters tarafta (cep kadrajın
solunda, ense sağında) — önemsiz. İfade istenenden biraz tedirgin/mahcup (yarım gülüş değil);
satırlarına ("Ne diyorsunuz siz?", "Ne kanıtınız var?") uyuyor, bırakıldı. 1122×1402 geldi →
`--profil konuk`. `serkan.normal` artık `figur_serkan_sakin.webp`.

## G4 — Serkan, panik

**Referans 1:** G3 çıktısı.

```
Referans görseldeki adamın AYNISI: aynı yüz, saç, sakal, aynı kıyafet; boynunda kordon ve kart
YOK. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.

Değişen tek şey poz ve ifade.

Poz: TAM İKİ KOL, İKİ EL. İki eli göğüs hizasında, avuçlar dışa dönük, savunmada ("yaklaşmayın");
gövdesi geriye kaykılmış, bir adım geri çekiliyor.

Başın açısı: başı kadrajın soluna dönük; burnu kadrajın soluna bakıyor, kulağı kadrajın sağında.

İfade: panik; gözleri fal taşı gibi açık, kaşları kalkık, ağzı açık, alnında ter damlaları.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## G5 — Peri, mantolu, acı

**Referans 1:** Peri, mantolu, nötr (A2). **Referans 2:** Peri, mantosuz, acı (yalnız poz için).

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı kızıl-kahve saç ve topuz, aynı
domates kırmızısı kuşaklı yün manto, krem saten bluz ve aynı derin dekolte, siyah kalem etek,
ince siyah kemer, kırmızı stiletto, aynı altın küpeler. Aynı çizim tarzı, aynı düz açık bej arka
plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey.

İkinci referans görsel YALNIZ poz içindir; oradaki kıyafeti alma.

Değişen tek şey poz ve ifade.

Poz (ikinci referanstaki gibi): TAM İKİ KOL, İKİ EL. Kolları dekoltenin altında kavuşturulmuş;
manto açık, bluz ve dekolte görünüyor.

Başın açısı: başı kadrajın soluna dönük; burnu kadrajın soluna bakıyor, kulağı kadrajın sağında.

İfade: içe dönük öfke, kırgınlık; bakışı aşağı ve yana kaçmış, çenesi gergin, dudakları sıkılmış.
Kimseye bağırmıyor; kendine kızgın.

Çekicilik: zarif ve çekici; dekolte ve kalem eteğin hattı korunur. Çıplaklık yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## G6 — Cengo, sinirli

**Referans 1:** Cengo, nötr (CA2).

```
Referans görseldeki adamın AYNISI: aynı yüz, aynı dağınık koyu saç, aynı kahverengi süet ceket,
krem gömlek, koyu kot, ceket cebinden sarkan bordo mendil, renkli boncuk bileklik.
Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı,
başın tepesi aynı yükseklikte, dikey.

Değişen tek şey poz ve ifade.

Poz: TAM İKİ KOL, İKİ EL. Kolları göğsünde kavuşturulmuş; omuzları gergin.

Başın açısı: başı kadrajın soluna dönük; burnu kadrajın soluna bakıyor, kulağı kadrajın sağında.

İfade: ters, sinirli; kaşları çatık, çenesi kasılmış, dudakları düz bir çizgi; gülümseme yok.
Bağırmıyor; soğuk bir kızgınlık.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## G7 — Peri mantosunu askıya asıyor, Rıza gözünü kaçırıyor (ara kare)

**Referans 1:** Büro, gündüz (A6). **Referans 2:** Peri, mantosuz. **Referans 3:** Rıza Reis.

```
Birinci referans görseldeki büronun AYNISI: aynı oda, aynı masa, aynı pencere ve ışık, aynı
çizim tarzı. İkinci referans görseldeki kadının AYNISI: aynı yüz, saç ve topuz, aynı krem saten
bluz, siyah kalem etek, ince siyah kemer, kırmızı stiletto, aynı altın küpeler. Üçüncü referans
görseldeki yaşlı balıkçının AYNISI: aynı yüz, bıyık, kasket ve lacivert yelek.

Kadraj: DİKEY (3:4). Kamera büronun içinde, göz hizasında.

Kadrajda YALNIZ şunlar var:
1. Kadın kadrajın solunda, duvardaki ahşap bir askının önünde; yarı yana dönük, üç çeyrek
   profilden. Domates kırmızısı yün mantosunu iki eliyle askıya asıyor; TAM İKİ KOL, İKİ EL, ikisi de
   mantonun yakasında, askının kancasında. Mantoyu çıkarmış: saten bluzun ince kumaşı ve derin
   dekolte, kalem eteğin sardığı kalça ve bacak hattı, kırmızı stilettolar görünüyor.
   Yüzünde küçük, kendinden emin bir gülümseme; omzunun üstünden geriye bakıyor.
2. Yaşlı balıkçı kadrajın sağında, kapı aralığında ayakta; kasketini iki eliyle göğsünde
   tutuyor; mahcup, başını yana çevirmiş, gözünü kaçırıyor, yanakları hafif kızarmış.
3. Duvarda yalnız askı; masada kapalı, yazısız bir dosya.

Başka hiçbir nesne yok. Hiçbir kâğıtta, duvarda, kapıda yazı yok.

Hava: komik ve çekici; kadın farkında, yaşlı adam utanmış.

Çekicilik: seksi ve zarif; dekolte, dar etek, bacak hattı belirgin. Çıplaklık yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## G8 — Set arkası: Cengo pilav tabağıyla Tuba'nın yanında (ara kare)

**Referans 1:** Set arkası (A12). **Referans 2:** Cengo (CA2). **Referans 3:** Tuba.

```
Birinci referans görseldeki set arkasının AYNISI: aynı katering masası, aynı ağaçlar, aynı gün
batımı ışığı, aynı çizim tarzı. İkinci referans görseldeki adamın AYNISI: aynı yüz, saç,
kıyafet ve bileklik. Üçüncü referans görseldeki kadının AYNISI: aynı yüz, saç ve kıyafet.

Kadraj: DİKEY (3:4). Kamera masanın karşısından, oturanların göz hizasında.

Kadrajda YALNIZ şunlar var:
1. Uzun katering masası; üstünde iki plastik tabak dolusu pilav, iki karton bardak.
2. Kadın masanın başında oturuyor, kadrajın sağında; bir elinde telefon kulağında, öteki elinde
   ikinci bir telefon, masada üçüncü telefon ekranı aşağı dönük. Yorgun, aceleci, kaşları çatık;
   yanına oturan adama şüpheyle yan gözle bakıyor.
3. Adam kadrajın solunda, kadının yanına yeni oturmuş; elinde dolu bir pilav tabağı ve plastik
   kaşık; kadına dönmüş, sırıtıyor, sohbet açan, hınzır bir gülümseme. TAM İKİ KOL, İKİ EL.

Başka hiçbir nesne yok: senaryo, klaket, kâğıt yok. Telefon ekranları görünmüyor.

Hava: hafif komik; adam kendini davet etmiş.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## G9 — Kepenkte bantlı borç notu, Peri'nin elinde (detay)

**Referans 1:** Ara sokak, kapalı dükkân (A13). **Referans 2:** Peri, mantolu (A2).

```
Birinci referans görseldeki ara sokağın AYNISI, arka planda bulanık: aynı yeşil kepenkli kapalı
dükkân, aynı Arnavut kaldırımı, aynı gün batımı ışığı, aynı çizim tarzı. İkinci referans
görseldeki kadının YALNIZ eli ve kırmızı manto kolu.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: kepengin yüzeyi kadrajı dolduruyor.

Kadrajda YALNIZ şunlar var:
1. Yeşil, eski, yer yer paslı metal kepenk.
2. Kepenge iki şerit koli bandıyla yapıştırılmış, tek sayfa, beyaz bir kâğıt. Kâğıdın üst kenarı
   bantlı; bir kadın eli kâğıdın alt ucunu tutmuş, okumak için KENDİNE doğru kaldırmış: kâğıdın
   YAZILI YÜZÜ kadına dönük, kameraya kâğıdın BOŞ ARKA YÜZÜ görünüyor. Arka yüzde hiçbir iz,
   harf, mürekkep yok; düz beyaz.
3. Kadının eli: kırmızı manto kolu, kırmızı ojeli parmaklar; yüzük, bilezik yok.

Başka hiçbir nesne yok. Kepengin üstünde de yazı, afiş, tabela yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Bakılacaklar:** kâğıtta harf/çizgi (en büyük risk); kepenkte yazı.

## G10 — Koridor, akşam: Peri anahtarla boğuşuyor (ara kare)

**Referans 1:** Peri kapıda anahtarla (K13, gündüz). **Referans 2:** Koridor, akşam (A5b).

```
Birinci referans görselin AYNISI: aynı kadın, aynı poz (kapıya eğilmiş, anahtarı kilitte
çeviriyor), aynı kapı ve kilit, aynı kıyafet, aynı kadraj ve çizim tarzı.

Değişen tek şey IŞIK ve SAAT: ikinci referans görseldeki gibi AKŞAM. Tavanda yanan sıcak sarı
lamba, dipteki pencerede lacivert akşam göğü; köşeler karanlık, kadının yüzü ve eli lambanın
sıcak ışığında. Kadının ifadesi: sinirli, yorgun; dudaklarını ısırıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## G11 — Cengo teli Peri'nin avucuna koyuyor (ara kare, bağ yüksek)

**Referans 1:** Koridor, akşam (A5b). **Referans 2:** Peri, mantolu (A2). **Referans 3:** Cengo (CA2).

```
Birinci referans görseldeki akşam koridorunun AYNISI arka planda, bulanık: aynı yanan tavan
lambası, aynı koyu ahşap kapı, aynı çizim tarzı. İkinci referans görseldeki kadının YALNIZ eli
ve kırmızı manto kolu; üçüncü referans görseldeki adamın YALNIZ eli, ceket kolu ve renkli
boncuk bilekliği.

Kadraj: DİKEY (3:4). YAKIN ÇEKİM: iki el kadrajın ortasında, göğüs hizasında.

Kadrajda YALNIZ şunlar var:
1. Kadının sağ eli, avucu yukarı açık; kırmızı manto kolu, kırmızı ojeli parmaklar; yüzük yok.
2. Adamın eli kadının avucunun üstünde: parmaklarının arasından ince, eğilmiş, gümüş renkli bir
   teli kadının avucuna bırakıyor; parmak uçları kadının avucuna bir an değiyor. Bileğinde renkli
   boncuk bileklik; ceket kolu.
3. Arka planda, bulanık: lamba ışığı, kapı.

İki yüz de kadraja girmiyor. Başka hiçbir nesne yok.

Işık: sıcak sarı lamba; tel küçük bir parıltıyla parlıyor. Hava: sessiz, yakın; bir dokunuş.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

---

## Kontrol (gelen her görsel — `5_gorsel_sistemi.md` E)

Kimlik · ölçek ve baş yüksekliği · bakış kadrajın soluna · el sayısı · yazı/harf/logo ·
kıyafet sabitleri (Peri: siyah kalem etek, ince siyah kemer, kırmızı stiletto) · çekicilik ·
hak edilmemiş bilgi · metindeki satırla uyum.
