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

**Sonuç (9 Ekim): Tuttu, ilk seferde.** İki elde beşer parmak, baş tepesi G3'le 4 px farkla
aynı. `--profil konuk`, elle düzeltme yok. Ekranda kadrajın sağındaki eli ekran kenarında
yarım kalıyor (figür ekranın sağına yaslı). Kumaşta (kot, ceket) ince çatlak dokusu var;
ekran boyunda görünmüyor.

## G5 — Peri, mantolu, acı

**Referans 1:** Peri, mantolu, nötr (A2). **Referans 2:** Peri, mantosuz, acı (yalnız poz için).

```
Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı kızıl-kahve saç ve topuz, aynı
domates kırmızısı kuşaklı yün manto, krem saten bluz ve aynı derin dekolte, siyah kalem etek,
ince siyah kemer, kırmızı stiletto, aynı altın küpeler. Aynı çizim tarzı, aynı düz açık bej arka
plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey.

İkinci referans görsel YALNIZ poz içindir; oradaki kıyafeti alma.

Değişen tek şey poz ve ifade.

Poz (ikinci referanstaki gibi): TAM İKİ KOL, İKİ EL. Kolları dekoltenin altında, mantonun
üstünden kavuşturulmuş. Manto birinci referanstaki gibi: kuşağı belde bağlı, yakası açık; bluz ve
dekolte yakadan görünüyor.

Başın açısı: başı kadrajın soluna dönük; burnu kadrajın soluna bakıyor, kulağı kadrajın sağında.

İfade: içe dönük öfke, kırgınlık; bakışı aşağı ve yana kaçmış, çenesi gergin, dudakları sıkılmış.
Kimseye bağırmıyor; kendine kızgın.

Çekicilik: zarif ve çekici; dekolte ve kalem eteğin hattı korunur. Çıplaklık yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Sonuç (9 Ekim): Tuttu, ilk seferde.** Ölçek ve baş yüksekliği temel görselle aynı. Manto
kuşaksız ve önü açık geldi (kuşak yanlarda sarkıyor; etek ve kemer görünüyor) — cüzdanlı ve
kâğıtlı görsellerde de manto açık, kabul edildi. `--profil peri`, elle düzeltme yok.

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

**Sonuç (9 Ekim): Tuttu, ilk seferde.** Ölçek ve baş yüksekliği temel görselle aynı; bileklik
görünüyor, mendil yerinde, gömlek kesimde korundu. `--profil cengo`. Gri yer tutucu kalmadı.

## G7 — Peri mantosunu askıya asıyor, Rıza gözünü kaçırıyor (ara kare)

**Referans 1:** Büro, gündüz (A6). **Referans 2:** Peri, mantosuz. **Referans 3:** Rıza Reis.

*9 Ekim düzeltmesi:* büroda askı zaten var (sağda, ayaklı ahşap portmanto) ve kapı solda. Eski
prompt "duvardaki askı", "Rıza sağda kapıda", "başka nesne yok" diyordu — odayla çelişiyordu.
Yerleşim odaya göre çevrildi: Rıza solda kapıda, Peri sağda portmantoda.

```
Birinci referans görseldeki büronun AYNISI: aynı oda, aynı iki ahşap masa, aynı kemerli pencere
ve deniz manzarası, aynı ışık, aynı solda açık duran ahşap kapı, aynı sağdaki ayaklı ahşap
portmanto, aynı çizim tarzı. İkinci referans görseldeki kadının AYNISI: aynı yüz, saç ve topuz,
aynı krem saten bluz, siyah kalem etek, ince siyah kemer, aynı altın küpeler; ayağında kırmızı
stiletto. Üçüncü referans görseldeki yaşlı balıkçının AYNISI: aynı yüz, beyaz bıyık ve sakal,
aynı lacivert kasket, açık mavi gömlek ve lacivert örgü yelek.

Kadraj: DİKEY (3:4). Kamera büronun içinde, göz hizasında; oda referanstaki gibi görünüyor.

Kadrajda şunlar var:
1. Kadın kadrajın sağında, ayaklı ahşap portmantonun önünde; yarı yana dönük, üç çeyrek
   profilden, tam boy. Domates kırmızısı yün mantosunu iki eliyle portmantonun kancasına asıyor;
   TAM İKİ KOL, İKİ EL, ikisi de mantonun yakasında, kancanın üstünde. Mantoyu çıkarmış: saten
   bluzun ince kumaşı ve derin dekolte, kalem eteğin sardığı kalça ve bacak hattı, kırmızı
   stilettolar görünüyor. Yüzünde küçük, kendinden emin bir gülümseme; omzunun üstünden
   kadrajın soluna, kapıdaki adama bakıyor.
2. Yaşlı balıkçı kadrajın solunda, açık kapının aralığında ayakta; lacivert kasketini çıkarmış,
   iki eliyle göğsünde tutuyor; mahcup, başını yana çevirmiş, gözünü kaçırıyor, yanakları hafif
   kızarmış.
3. Oda referanstaki gibi: iki masa, pencere, dolap, masa lambası. Masalarda ve duvarlarda yazı
   taşıyan hiçbir şey yok: kâğıt, afiş, tabela, takvim yok. Masadaki karton kutunun yüzü düz,
   etiketsiz.

Kişi olarak YALNIZ bu iki kişi var. Hiçbir kâğıtta, duvarda, kapıda, camda yazı yok.

Hava: komik ve çekici; kadın farkında, yaşlı adam utanmış.

Çekicilik: seksi ve zarif; dekolte, dar etek, bacak hattı belirgin. Çıplaklık yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Bakılacaklar:** kapı camında yazı ("Camda yazıyor" — metin anıyor ama görselde harf olmamalı;
kapı camı görünüyorsa düz buzlu cam); Rıza'nın kasketi elinde mi; el sayısı.

**Sonuç (9 Ekim): Tuttu, ilk seferde.** Oda referansla aynı, yazı yok (vapur büyütülüp bakıldı),
kasket Rıza'nın elinde, eller doğru. Rıza'nın kasketsiz başı ilk kez görünüyor: kıvırcık kır
saç. 1086×1448 geldi → 900×1200. Kare K15; diyalogda tek satırda (`{set: mantosuz, kare: K15}`).

## G8 — Set arkası: Cengo pilav tabağıyla Tuba'nın yanında (ara kare)

**Referans 1:** Set arkası (A12). **Referans 2:** Cengo (CA2). **Referans 3:** Tuba.

*9 Ekim düzeltmesi:* A12'de "uzun katering masası" yok; beyaz örtülü tek bir masa (semaver,
karton bardaklar, simit sepeti, portakal kâsesi), yanında katlanır yönetmen sandalyesi, siyah
ekipman sandıkları, ışık ayağı ve kablo makarası var. Eski prompt "başka hiçbir nesne yok"
diyordu — mekânla çelişiyordu. Prompt mekâna göre yazıldı.

```
Birinci referans görseldeki set arkasının AYNISI: aynı beyaz örtülü masa ve üstündeki semaver,
karton bardaklar, simit sepeti ve portakal kâsesi; aynı çınar ağacı, aynı yalılar, aynı gün
batımı ışığı, aynı taş zemin, aynı çizim tarzı. İkinci referans görseldeki adamın AYNISI: aynı
yüz, saç, kahverengi süet ceket, krem gömlek, koyu kot, bordo mendil ve renkli boncuk bileklik.
Üçüncü referans görseldeki kadının AYNISI: aynı yüz, aynı kıvırcık topuz ve saçına sokulu
kalem, aynı haki yelek, lacivert gömlek ve koyu kargo pantolon.

Kadraj: DİKEY (3:4). Kamera masanın önünden, oturanların göz hizasında; masa ve ikisi kadrajın
ortasında, arkada çınar ve yalılar.

Kadrajda şunlar var:
1. Referanstaki beyaz örtülü masa; üstünde referanstaki semaver, karton bardaklar, simit sepeti
   ve portakal kâsesi, ayrıca kadının önünde yarısı yenmiş bir plastik tabak pilav.
2. Kadın masanın yanında, referanstaki katlanır ahşap yönetmen sandalyesinde oturuyor, kadrajın
   sağında. Telefonu omzuyla kulağına sıkıştırmış, iki eliyle ikinci bir telefona bakıyor;
   ekranlar kameraya dönük DEĞİL. Yorgun, aceleci, kaşları çatık; yanına oturan adama şüpheyle
   yan gözle bakıyor.
3. Adam kadrajın solunda, kadının yanına ikinci bir katlanır sandalyeye yeni oturmuş; elinde
   dolu bir plastik tabak pilav ve plastik kaşık; kadına dönmüş, sırıtıyor, sohbet açan, hınzır
   bir gülümseme. TAM İKİ KOL, İKİ EL.
4. Arkada referanstaki siyah ekipman sandıkları, ışık ayağı ve kablo makarası; sandıkların
   üstünde etiket, yazı, çıkartma yok.

Senaryo, klaket, kâğıt yok. Telefon ekranları görünmüyor.

Hava: hafif komik; adam kendini davet etmiş.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Bakılacaklar:** sandık ve ışıkta etiket/yazı; telefon ekranı; Tuba'nın yüzü referansla aynı mı.

**Sonuç (9 Ekim): Tuttu, ilk seferde.** Mekân A12'yle aynı; telefonların yalnız arkası
görünüyor; sandık, ışık, sandalye bezinde yazı yok (büyütüldü). Cengo pilavı yiyor (metindeki
"Pilavınız güzel"e uyuyor). Kare K16; diyalogda tek satırda (`{mekan, kare: K16}`).

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

**Sonuç (9 Ekim): iki deneme tutmadı.**
1. İlk prompt (omuz üstünden): Peri ile kamera kâğıdın aynı yüzünü görüyor; o yüz boş → "not
   boş" okunuyor, metinle çelişiyor.
2. Kepenk yanından deneme: kâğıt kepende bantlıyken okuyanla bakan aynı yüzü görür; görselde
   fizik tutmadı, bantlar havada.
**Ders:** duvara yapışık bir kâğıtta "okuyan yazıyı, kamera boş yüzü görsün" istenemez — iki göz
aynı yüze bakar. Kâğıt ya duvardan ayrılır ya kenarından görünür.
**Sahibinin kararı (A):** Peri notu kepenkten koparmış, önünde tutup okuyor; kepende yırtık bant
parçaları kalıyor. Yeni prompt:

```
Birinci referans görseldeki ara sokağın AYNISI, arka planda: aynı yeşil, yer yer paslı kepenkli
kapalı dükkân, aynı Arnavut kaldırımı, aynı gün batımı ışığı, aynı çizim tarzı. İkinci referans
görseldeki kadının AYNISI: aynı yüz, kızıl-kahve saç ve topuz, aynı domates kırmızısı yün manto,
krem saten bluz, aynı altın küpeler, kırmızı oje.

Kadraj: DİKEY (3:4). Kadın kadrajın ortasında, KAMERAYA DÖNÜK, göğüs hizasından yukarısı. Hemen
arkasında kepenk; kepengin yüzeyi kadın ile aynı düzlemde, onun arkasında.

Kadrajda YALNIZ şunlar var:
1. Kadının arkasında yeşil, eski, yer yer paslı metal kepenk. Kepengin üstünde, kadının omzunun
   yanında, koparılmış bir kâğıdın kalıntısı: iki küçük, yırtık koli bandı parçası ve bantlara
   yapışık kalmış minik kâğıt kırıntıları. Başka hiçbir şey yok.
2. Kadın tek sayfa, beyaz bir kâğıdı İKİ ELİYLE, iki yan kenarından tutmuş, yüzünün önünde, göğüs
   hizasında, okuyor. Kâğıdın üst kenarı hafif yırtık; köşelerinde koli bandı kalıntısı.
   Kâğıdın YAZILI YÜZÜ kadına dönük; kameraya kâğıdın BOŞ ARKA YÜZÜ görünüyor. Arka yüzde hiçbir
   iz, harf, mürekkep, arkadan sızan gölge ya da yazı yok; düz beyaz, ışık geçirmeyen kalın kâğıt.
3. Kadının yüzü kâğıdın üst kenarının üstünden görünüyor: gözleri aşağıda, kâğıtta; kaşları
   hafif çatık; dikkatle okuyor. TAM İKİ KOL, İKİ EL; kırmızı ojeli parmak uçları kâğıdın iki
   yanında; yüzük, bilezik yok. Manto açık yakalı, bluz ve dekolte yakadan görünüyor.

Başka hiçbir nesne yok. Kepengin üstünde yazı, afiş, tabela yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Sonuç (9 Ekim): A yoluyla tuttu, bir düzenlemeyle.** İlk A görselinde bel altı kırmızıydı
(kuşak bağlı manto kırmızı etek gibi okunuyordu) → görsel düzenletildi; 2. referans kâğıtlı Peri
(`peri_manto_kagit`: manto açık, siyah etek, kemer). Kâğıt kontrast açılarak bakıldı: arkadan
sızan yazı yok. Kepende yırtık bant kalıntısı var. Kare D4; diyalogda not satırında.
Metin "kepengin üstüne bantlanmış" diyor, görsel koparılmış notu gösteriyor — sahibinin onayı.

## G10 — Koridor, akşam: Peri anahtarla boğuşuyor (ara kare)

**Referans 1:** Peri kapıda anahtarla (K13, gündüz). **Referans 2:** Koridor, akşam (A5b).

*9 Ekim düzeltmesi:* K13'te Peri'nin sol elinde küçük bir kâğıt var; kapanışta metin kâğıt
anmıyor → kâğıt kaldırıldı.

```
Birinci referans görselin AYNISI: aynı kadın, aynı poz (kapıya eğilmiş, anahtarı kilitte
çeviriyor), aynı kapı ve kilit, aynı kıyafet, aynı kadraj ve çizim tarzı.

Değişen iki şey var.
1. Elindeki küçük beyaz kâğıt YOK: sol eli boş, parmakları yumruk gibi kapalı, mantonun önünde.
   Sağ eli aynen anahtarda.
2. IŞIK ve SAAT: ikinci referans görseldeki gibi AKŞAM. Tavanda yanan sıcak sarı
lamba, dipteki pencerede lacivert akşam göğü; köşeler karanlık, kadının yüzü ve eli lambanın
sıcak ışığında. Kadının ifadesi: sinirli, yorgun; dudaklarını ısırıyor.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**1. deneme (9 Ekim):** temiz ve akşam tuttu, ama K13'ün neredeyse birebir aynısı. Sahibi: "Yine
dekolte ve bacaklar görünsün, yine kapıyı açamadığı için sinirli olsun; poz farklı olsun."
Yeni prompt (Ref 1: ilk akşam denemesi — ışık, kapı, koridor, kıyafet; Ref 2: Peri mantolu):

```
Birinci referans görseldeki sahnenin AYNISI: aynı akşam koridoru, aynı koyu ahşap kapı ve pirinç
kilit, aynı tavanda yanan sıcak sarı lamba, dipteki pencerede aynı lacivert-turuncu akşam göğü,
aynı damalı mermer zemin, aynı çizim tarzı. Aynı kadın ve aynı kıyafet: domates kırmızısı yün
manto (açık), krem saten bluz ve derin dekolte, ince siyah kemer, siyah kalem etek, kırmızı
stiletto, altın küpeler. İkinci referans görsel yüzü ve kıyafeti doğrulamak içindir.

Değişen POZ ve KAMERA. Birinci referanstaki poz (kapıya yan dönmüş, bir bacağı kapıya dayalı)
TEKRARLANMASIN.

Kadraj: DİKEY (3:4). Kamera koridorun içinde, kapının çaprazında, kadının önünde; kadın kameraya
üç çeyrek dönük, dizlerinin altına kadar görünüyor.

Poz: TAM İKİ KOL, İKİ EL. Kadın sırtını ve bir omzunu kapıya yaslamış, yorgun ve öfkeli. Sağ eli
arkaya, kilitteki anahtara uzanmış, anahtarı tutuyor. Sol eli alnında, saçlarının dibinde,
"yine mi" der gibi. Başı geriye, kapıya yaslanmış; gözleri yarı kapalı, kaşları çatık, dudakları
sıkılmış, dişlerinin arasından nefes veriyor. Bir bacağı düz, öteki dizden hafif kırık, stiletto
topuğu kapıya dayalı. Manto omzundan hafif kaymış, iki yana açık: dekolte, kalem eteğin sardığı
kalça ve bacak hattı, kırmızı stilettolar görünüyor.

Işık: lamba yüzünü ve dekoltesini sıcak sarı aydınlatıyor; köşeler karanlık.

Çekicilik: seksi ve zarif; dekolte ve bacak hattı belirgin. Çıplaklık yok.

Kapıda, duvarda, hiçbir yerde yazı, numara, levha yok. Elinde kâğıt yok.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

**Sonuç (9 Ekim): 2. deneme tuttu.** Sırtı kapıya yaslı, bir eli arkada anahtarda (büyütüldü:
anahtar kilitte, el doğru), öteki alnında. Yazı yok. Kare K17; diyalogda koridor satırında.

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
