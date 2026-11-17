# DENETIM — resim denetimi ve onay (birleştirilmiş kurallar)

Sıra: 0 tarz (yazılım) → 0b yüz (yazılım) → 0c el (araç + sahibinin onayı) → göz denetimi (A istemle, B oyundaki hâli) → karar.

## Yazılımla denetim

### DENETIM-1 Tarz denetimi yazılımla, her resimde gözden önce
Her resim, gözle bakılmadan ÖNCE yazılımla tarz denetiminden geçer (13 Kasım 2026, sahibi: "benim gözle görüp onaylamamdan önce bu işin yazılımsal olarak yapılması gerekiyor; yoksa gene aynı durumla tekrar üretmek zorunda kalırız"). Komut: `cd kaynak && python arac_tarz.py --uretim v<N> G<n>`. Araç CLIP tarz puanı verir; çapası LoRA ve Vaka 1–3. Döngü her üretimden sonra aracı kendisi koşar; sonuç `$DONGU_LOG/tarz.tsv`'de ve kol çıktısında. KALDI ya da ŞÜPHELİ çıkan resim onaylanmaz. Kart da bu denetime girer.
*Kaynak:* 1096, 559, 1230

### DENETIM-2 Tarz sonucunun üç hâli
- **KALDI** (tarz puanı < 0) → ret; `## Düzeltme`: tarz (boyalı, sıcak ışık, dokulu; kalın kontur/düz boya yok).
- **ŞÜPHELİ** (0–0,02) → onaylanmaz; aynı düzeltmeyle yeniden üretilir. İki kez ŞÜPHELİ kalırsa sahibine sorulur (görüntüyle).
- **GEÇTİ** → göz denetimi (A ve B). Kayda `G<n> tarz GEÇTİ (+0,0xx)` yazılır; bu satırı olmayan resim onaylı sayılmaz.
*Kaynak:* 1097, 1098, 1099

### DENETIM-3 Sahibine yalnız GEÇTİ olanlar gider; tarz çapası
Sahibine yalnız tarz denetiminden GEÇTİ alan resimler gider. Çapa (sahibinin seçimi): Peri/Cengo LoRA resimleri (`uretim/referanslar/tarz_capa/`); konuk: Gizem, Müjgan, Defne, Tolga, Kenan, Ferruh; mekân: Vaka 1–3'ün bütün arka planları; kare: Vaka 1–3'ün kareleri.
*Kaynak:* 1100

### DENETIM-4 Tarz aracının kör noktası
Hafif "soluk / fazla gerçekçi" kayma (eski Eylül G6) puana yansımayabilir; bu yüzden gözle tarz maddesi (DENETIM-25, A.7) kalır.
*Kaynak:* 1101

### DENETIM-5 Tarz kararı figürde gövdeden, kartta yüzden
Figürde tarz kararı GÖVDEDEN verilir; yüz tarz puanı karara katılmaz (14 Kasım ölçümü: kaymış Cengo yüzleri onaylılarla aynı aralıkta, yani yüz o kaymayı göstermiyor). Kartta tarz puanı yüz kırpığından okunur.
*Kaynak:* 1103

### DENETIM-6 Araç değişirse önce sınav
- Tarz aracı değişirse önce `python arac_tarz.py --sinav` → "SINAV GEÇTİ" görülür (kaymış 8 resim yakalanır, 42 iyi resim geçer).
- Yüz aracı değişirse önce `python arac_yuz.py --sinav` → "SINAV GEÇTİ".
*Kaynak:* 1102, 1111

### DENETIM-7 Yüz (kimlik) denetimi yazılımla — Peri, Cengo, Gizem
14 Kasım 2026, sahibi: "ilerleyen vakalarda Peri ve Cengo'nun yüzü bozulabilir". Komut: `cd kaynak && python arac_yuz.py --uretim v<N> G<n>`. Döngü tarz denetiminin hemen ardından kendisi koşar; sonuç `$DONGU_LOG/yuz.tsv`. Yüz tanıma modeliyle resimdeki yüzü karakterin çapasıyla karşılaştırır (çapa: LoRA + oyundaki sprite'lar + Vaka 3 onaylıları; V6 ve sonrası bilerek çapada değil).
*Kaynak:* 1104

### DENETIM-8 Yüz eşikleri (figür ve kart)
- **KALDI** (< 0,66, başka karaktere daha yakın ya da yüz bulunamadı) → ret, `## Düzeltme`: yüz referanstaki gibi.
- **ŞÜPHELİ** (0,66–0,70) → onaylanmaz, yeniden üretilir; iki kez ŞÜPHELİ kalırsa sahibine.
- **GEÇTİ** → göz denetimi.
*Kaynak:* 1105

### DENETIM-9 İki aracın sonucu da kayda yazılır
Tarz ve yüz araçlarının ikisi de koşar, ikisinin sonucu kayda yazılır; ikisinden de GEÇTİ almayan resim göz denetimine geçmez. Kayıt satırı: `G<n> tarz GEÇTİ (+0,0xx) · yüz GEÇTİ (0,8xx)`.
*Kaynak:* 1106

### DENETIM-10 Karede yüz aracı kapı değildir
Kare (çok kişi) için yüz aracı kapı DEĞİL: bulduğu yüzleri ve en yakın karakteri bilgi olarak basar; karar göz denetiminde (A.2 kimlik) verilir.
*Kaynak:* 1107

### DENETIM-11 Yüz aracının bilinen sınırı
Uç ifadeler (gözler kapalı, yüz buruşuk, yüz kısmen kapalı) puanı düşürür. Yüz gözle karakterse sahibine sorulur.
*Kaynak:* 1108

### DENETIM-12 Konuğun yüz denetimi
14 Kasım 2026'dan beri:
- Çapa AYNI vakadaki kendi onaylı figürleri (temel + onaylı ifadeler). Başka konuğa daha yakınsa KALDI; < 0,60 KALDI; 0,60–0,70 ŞÜPHELİ.
- Temelde kimlik kapısı yok; onun yerine eski karakterlere (oyundaki bütün figür ve sprite'lar) yüz benzerliği basılır. ≥ 0,70 ise **UYARI: yan yana bak (kural 9, bkz. DENETIM-49)** — kapı değil (onaylı Müzeyyen Nadide'ye 0,748, Recep Ferruh'a 0,724 çıkıyor; görünüşle ayrıldılar).
- Sonraki vakada tekrar çıkan konuk olursa önceki vakadaki resimleri çapaya eklenir (sahibi, 14 Kasım).
*Kaynak:* 1109

### DENETIM-13 El denetimi — kişi görünen her resimde, onayı sahibi verir
14 Kasım 2026, kural 5 (V6 K96'da Peri'nin iki SAĞ eli iki kez gözden kaçtı). Komut: `cd kaynak && python arac_el.py --sayfa V<N> G<n>` → `kaynak/YENI_UI/el/G<n>.jpg`. Sayfada her kişinin SOL kolu mavi, SAĞ kolu kırmızı çizili; her el büyütülmüş ve hangi kolda olduğu yazılı; ayrıca istemin "TAM n kişi"siyle sayım var.
- Bak: sol kolun ucunda SOL el, sağ kolun ucunda SAĞ el mi (başparmağın yönü); fazla/eksik el var mı.
- Doğruysa sayfayı sahibine göster ya da sonucu söyle; **onayı sahibi verir** (kendisi bakar ya da "onayla" der) → `python arac_el.py --onay V<N> G<n>`.
- Onaysız resim kapıdan (`arac_kapi.js`, K5: "her el bir kola bağlı, sağ/sol doğru — el sayfasına bakılmış ve onaylanmış olmalı") geçmez; resim değişirse onay düşer.
- Kişi sayısı uyarısı yanlış alarm olabilir (sarılan iki kişi tek, manken kişi sayılır) — gözle karar verilir.
*Kaynak:* 1112, 3550

### DENETIM-14 Nesne tutan el: zorunlu yakın bakış
15 Kasım 2026, sahibi (V6 G25 ve G80, 69 resimlik toplu onayda kaçtı). Nesne tutan HER el (tepsi, telefon, kutu, kâğıt) el sayfasından ayrıca 4–5 kat büyütülür: `magick <resim> -crop WxH+X+Y +repage -resize 500% <çıktı>`. Bakılan:
1. başparmak görünüyor ve doğru tarafta mı,
2. beş parmak sayılıyor mu,
3. el bir ön kola bağlı mı,
4. nesnenin kenarında fazla parmak var mı.
Başparmak görünmüyorsa resim onaylanmaz; istemde §12 (`ISTEM_KALIPLARI.md`) kalıbıyla yeniden üretilir. Nesne tutan eller topluca onaylanmaz; büyütülmüş görüntü sahibine resim resim gösterilir. Bu bakışı yapan Claude kendi okumasında kuşkuluysa ("sol el gibi") bunu söyler, "doğru" demez.
*Kaynak:* 1113

## Göz denetimi — yöntem

### DENETIM-15 Önce bütün, sonra büyüt
`prompts/G<n>.md`'yi oku; resmi ve referanslarını (`onayli/` + `referanslar/`) aç, karşılaştır. Önce resmi bütün olarak gör; sonra şüpheli bölgeleri 2–4 kat büyüterek incele: eller, ayaklar ve ayakkabılar, tişört ve göğüs, cihaz ekranı ve tuşları, çerçeveler, çuvallar, tabelalar, kadraj kenarları. Büyütme: `magick <resim> -crop WxH+X+Y -resize 300% <çıktı>`. Sebep: Vaka 3'te küçük boyutta görünmeyen ret sebeplerinin hepsi büyütünce çıktı (G14'teki rakamlar, G44'teki logo, G56 ve G67'deki meme ucu).
*Kaynak:* 1115, 1317, 1507

### DENETIM-16 Temas sayfası
Birden çok resmi karşılaştırmak için temas sayfası işe yarar: hepsini küçültüp tek resimde yan yana koy, adlarını altına yaz.
*Kaynak:* 1324

### DENETIM-17 Gelen resmin numarası resimden doğrulanır
Gelen görselin numarası mesaj sırasından değil görselden doğrulanır (Vaka 2 konuklarında 3. ve 4. ters gelmişti).
*Kaynak:* 472, 473

## Göz denetimi — A. İstemle karşılaştır (her resim; `5_gorsel_sistemi.md` E kontrol listesi de bunlardır)

### DENETIM-18 Kontrol satırı önce
İstem dosyasının `## Kontrol` satırındaki her madde denetlenir; önce bunlara bakılır. Sebep: resme özgü en riskli noktaları istemi yazan belirler.
*Kaynak:* 1117, 1303, 1508

### DENETIM-19 Kimlik
Yüz, saç ve kıyafet referansla aynı olmalı. Seride ölçü temel resimdir (Vaka 3'te Peri'nin kaynağı L1 ve onaylı G1, Cengo'nunki C1 ve onaylı G4). Sebep: varyantlar ve sahneler temelden türer; temeldeki sapma bütün seriye yayılır.
*Kaynak:* 461, 1118, 1304, 1509

### DENETIM-20 Karakter sabitleri
Karakter sabitleri görünüyorsa her resimde denetlenir, uymazsa ret. Örnek: Peri'nin ayakkabısı HER resimde kırmızı stiletto (doğru örnek: Vaka 3 onaylı G49); siyah ya da başka renkse ret, düzeltme notu: "Peri'nin ayakkabıları kırmızı stiletto." (İstisna, `uretim/CLAUDE.md` karakter sabitleri tablosundan: vakanın formu başka ayakkabı yazıyorsa o — Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı.) Kayıt: G63 ve G65 siyah stilettoyla geldi; sahibi bunu karakter sabiti yaptı, kural 2026-11-04'te CLAUDE.md'ye eklendi ve eklenince eski onaylıların hepsine geriye dönük bakıldı. Kontrol listesinde: "Kıyafet sabitleri tutuyor mu?"
*Kaynak:* 466, 1118, 1305, 1509, 1510

### DENETIM-21 Yüz yönü ve bakış
Yüz ¾ (üç çeyrek) dönük, İKİ göz görünür, profil değil. Burun yönü: Vaka 3 metni "istemin dediği yöne; kalıp 'burun kadrajın soluna'" der, bugünkü `uretim/CLAUDE.md` koşulsuz "burun kadrajın soluna" der — bkz. CELISKI-DENETIM-3. Kontrol listesinde: "Bakış yönü doğru mu?" Sebep: G4 ilk geldiğinde neredeyse profildi (uzaktaki göz burun kemerinin arkasında kalmıştı); G50'de Peri'nin yüzü profile yakındı ve gözlük gözüne inmişti — afişteki yüzle tanındığı için onaylandı ve sahibine bildirildi.
*Kaynak:* 463, 1119, 1308, 1511

### DENETIM-22 Eller ve kollar (göz)
İki kol, iki el, beşer parmak; kaynaşmış ya da fazla parmak yok. Kalabalık sahnede kolları kişi kişi say. Sebep: G58'de Gizem'in üç kolu vardı. Kontrol listesinde: "El ve parmak sayısı doğru mu?"
*Kaynak:* 464, 1120, 1309, 1512, 3048

### DENETIM-23 İstemde olmayan nesne ve yazı yok
İstemde olmayan nesne, yazı, harf, rakam, logo ya da filigran YOK (yazı/harf büyütülerek aranır). Sebep: küçük boyutta görünmüyorlar ama büyütünce çıkıyorlar — G14 hesap makinesi tuşlarında rakam ve fazladan şapka, G44 monitör çerçevesi ve kayıt cihazında logo izi, G51 Peri'nin omzunda zincirli çanta. Gözlük, kalem, saat gibi markalı olabilen nesnelerde sapı ve kenarı büyütüp tara (Vaka 2, Lâl G26–G28: üretici gözlüğün sapına, menteşe yanına, her seferinde marka yazısı benzeri bir iz koydu; düz siyah yüzeyde, dikeyde koyu komşulardan medyanla dolduruldu).
*Kaynak:* 465, 1121, 1310, 1513, 3048, 3072

### DENETIM-24 Kadraj, oran, ölçek ve zemin
- Kadraj ve oran istemdeki gibi. Figürlerde uyluk ortasından yukarısı. Afişte alt %20 boş.
- Boyutu dosya başlığından doğrula. Doğru değerler: 4:5 → 1122×1402, 3:4 → 1086×1448, 9:16 → 941×1672.
- Ölçek ve baş yüksekliği aynı mı (kontrol listesi E.2).
- Zemin düz ve H4'teki renk (`5_gorsel_sistemi.md` H4). (Vaka 3 kaydındaki "düz açık bej zemin" H4'ün Vaka 4 ve 14 Kasım 2026 kararlarıyla eskidi.)
*Kaynak:* 462, 1122, 1311, 1514, 3048

### DENETIM-25 Tarz gözle
Tarz öbür onaylılarla aynı: yarı gerçekçi boyalı illüstrasyon; anime, 3B ya da fotoğraf değil. Sebep: G5 (unlu Cengo) ilk üretimde fotoğrafa kaydı. **Her yeni temel ve kartta zorunlu:** aynı karakterin eski onaylı resmiyle ve eski konuklarla yan yana bak; kontur kalınlığı, boya dokusu, ışığın sıcaklığı ve yüz eskilerden ayrılıyorsa ret (§11). Kart da bu denetime girer.
*Kaynak:* 1123, 1231, 1312, 1515

### DENETIM-26 Çıplaklık yok
Açık cinsel içerik / çıplaklık YOK (cazibe istenebilir, çıplaklık asla). Kumaşın altından meme ucu belirmesi de ret; şüpheli yer mutlaka büyütülerek bakılır. Düzeltme notu örneği: "Tişört kalın kumaş; altından meme ucu belirmiyor." (giysiye göre uyarla). Sebep: Gizem'in beyaz dar tişörtünde meme ucu izi defalarca çıktı; bunu ilk kez sahibi yakaladı (G40, G41, G42 ve G56'yı Claude onaylamıştı); sahibi "reddet" dedi ve madde o zaman kuruldu.
*Kaynak:* 1124, 1313, 1516

### DENETIM-27 Fiziksel olabilirlik
Oturan ya da dayanan figürde bacaklar nereye iniyor, mobilyanın içinden veya arkasından geçiyor mu, dirsek gerçekten masada mı — bakılır. Sebep: G63'te Gizem'in bacakları pervazın arkasına (kalorifer ile duvar arasına) girmişti, Peri'nin dirseği havadaydı; Claude onaylamıştı, sahibi yakaladı, onay geri alındı ve resim ret gibi işlendi.
*Kaynak:* 1125, 1314

### DENETIM-28 Sayım ve adı geçen herkes
İstemde "TAM n kişi" yazıyorsa kişiler sayılır; aynı karakter bir sahnede iki kez görünmez. Metindeki kare/sahne satırında adı geçen herkes resimde olmalı (`vakaN_diyalog.md` → `{kare: Kn}`).
*Kaynak:* 470, 1126, 1315

### DENETIM-29 Mantık, mekân ve hikâye
Işık ve saat istemdeki gibi (G51 sabah istiyordu, gün batımı gelmişti). Kapalı dükkânda ateş yanmaz (G43). Mekân doğru şehir mi, nesne sayısı (kat, kişi) doğru mu?
*Kaynak:* 471, 1127, 1316

### DENETIM-30 Satırlarla uyum
Resim metindeki satırla uyuşmalı: istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra — yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu; elde nesne yalnız metnin getirdiği satırlarda mı (SR-D); bakış satırın söylediği yere mi (SR-I).
*Kaynak:* 469, 1128

### DENETIM-31 Kıyafet kartına uyum ve kumaş yüzeyi
Kıyafet onaylı karttaki gibi mi — boy, kesim, açık/kapalı hâli (SR-B, SR-C); kıyafet istemle tutuyor mu (kartın `bak` satırı). **Kumaş yüzeyi de** (13 Kasım 2026, sahibi G18'de buldu): ütülü kıyafet pürüzsüz mü (her yerde küçük köşeli kırışık = buruşturulmuş kâğıt/folyo dokusu → ret), buruşuk kıyafet kumaş gibi yumuşak kıvrımlı mı. Gövdeyi büyütüp bak.
*Kaynak:* 1129, 3048

### DENETIM-32 Kardeş resimlerle ayrışma
Aynı kişinin onaylı ifadeleriyle yan yana bakılır; yüz ve poz onlardan açıkça ayrılıyor mu (SR-J).
*Kaynak:* 1130

### DENETIM-33 Çekicilik seviyesi
Çekicilik seviyesi kurala uygun olmalı. Peri ve Gizem için (sahibi, 8 Kasım 2026): yeni resim o karakterin eski onaylı resimleriyle yan yana; çekicilik ve dekolte onlardan AZ DEĞİL. Filtreden kaçarken istem farkında olmadan hafifleyebilir; sönük kalan onaylanmaz, `ISTEM_KALIPLARI.md` §9 satırlarıyla yeniden üretilir. Kıyafet kartı bu maddeden muaf. Peri "vakadaki en gösterişli kadın" (kural 15b) — konuk kadınlar onu geçmemeli.
*Kaynak:* 467, 1131, 3048

### DENETIM-34 Nurcan: hak edilmemiş bilgi
Resim hak edilmemiş bir bilgi gösteriyor mu? Gösteriyorsa onaylanmaz.
*Kaynak:* 468, 3048

### DENETIM-35 Sigara ve duman
Sigara, izmarit, kül tablası, çakmak, puro, pipo, nargile ya da duman var mı? Varsa ret (kural 19a).
*Kaynak:* 474

## Göz denetimi — B. Oyundaki hâli (figürler)

### DENETIM-36 Oyunda yan yana denetim
Yerel Claude her figürü onaylamadan önce `arac_yanyana.js` ile kesip Peri'nin yanında görür. Komut (`kaynak` içinde): `node arac_yanyana.js ../uretim/v<N>/uretilen/G<n>.png --kim <id> --profil <profil> --oran <H2 tablosu>`. Görüntü `uretim/v<N>/yanyana/G<n>.png` olarak saklanır. Bakılan:
1. **Boy:** tablodaki (H2) orana uyuyor mu? Temel figürde aracın bastığı boy ölçeği `DURUM.md`'ye not edilir (gömmede kullanılır).
2. **Bakış:** iki karakter birbirine bakıyor mu, göz hizası doğal mı?
3. **Kesim:** giysinin içinde delik var mı (arkadaki sahne görünüyor mu)?
4. **Saç:** başı büyütüp bak; saçın kenarında beyaz/bej iz var mı?
Biri tutmazsa resim onaylanmaz: ya kesim ayarı düzeltilir ya da resim düzeltme notuyla yeniden üretilir.
*Kaynak:* 545, 546, 547, 548, 549, 550, 1132, 1133, 1134, 1135

### DENETIM-37 Kesim profili
Zemin bej → `konuk` (Peri `peri`, Cengo `cengo`); yeşil/gri-mavi → `konuk_beyaz_delik`. Kesim tutmazsa önce başka profil dene; yine olmazsa reddet.
*Kaynak:* 1136

## Karar

### DENETIM-38 Onay
Onaylanan resim `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>` taşınır. Buna bağlı resimlerin önü açılır, çünkü Codex yalnız `onayli/`'yi referans alır. Temel figürse baş kırpığı hazırlanır (`referanslar/<kim>_bas.png`).
*Kaynak:* 1138, 1325, 1517

### DENETIM-39 Ret ve düzeltme notu
`prompts/G<n>.md` sonuna `## Düzeltme <k>` eklenir: tek-iki cümle, yalnız NE değişeceğini söyler (ör. "Bıyık kalem gibi ince olmalı, şimdiki gür."); bir sonraki üretimde istemin sonuna aynen eklenir ve Codex düzeltmeyle yeniden üretir. Resim `red/G<n>_red<k>.<uzantı>`'ya taşınır. k = ilk boş numara; üzerine yazılmaz — önce `red/G<n>_red<k>` var mı bak (2026-11-04'te G8_red1 ve G14_red1 yamadan önceki eski resimlerin üzerine yazıldı).
*Kaynak:* 1139, 1326, 1327, 1518

### DENETIM-40 Sahibi onaylı resimde hata bulursa
Onay geri alınır ve resim ret gibi işlenir (G40–G42, G56, G63). Sahibinin söylediği hata `uretim/CLAUDE.md`'ye kural olarak yazılır.
*Kaynak:* 1095, 1336

### DENETIM-41 Takılan temel hemen sahibine
Temeller önce (sahibi, 8 Kasım 2026): her vakada üretim temellerle başlar — her kıyafetin temel figürü (ve ondan baş kırpığı çıkacak her resim), mekân temelleri. İlk iş yalnız temelleri üretmek ve denetlemek; durumları (onaylı / ret / engelli) sahibine söylenir. İki kez filtreye takılan ya da üç kez reddedilen **temel** döngü sonunu beklemez: sahibine o an web paketi verilir. Sahibi web'de temeli üretirken döngü temele bağlı OLMAYAN resimlerle sürer; temel gelip onaylanınca ona bağlı olanlar başlar. (Vaka 3 Onay 3'te G2 ve G3 engellendi, 25 resim onları bekledi.)
*Kaynak:* 1090

### DENETIM-42 Filtreye iki kez takılan resim web listesine
Döngü sırasında iki kez güvenlik filtresine takılan resim (`## ENGELLENDİ`) `WEB_LISTESI.md`'ye yazılır, döngü sürer; sahibi web ChatGPT'de üretir. (Üçüncü kez reddedilecek ve emin olunamayan resimde ne yapılacağı çelişkili: bkz. CELISKI-DENETIM-1.)
*Kaynak:* 1091, 1093, 1273

### DENETIM-43 Web paketi
Web'e giden resim için sahibine her resmin istemi (tam metin) ve referansları, sırayla ve tam yollarıyla verilir (Vaka 3 G64'te böyle yapıldı); döngü sonunda TEK seferde (takılan temel için DENETIM-41: o an). Paket dosyası `v<N>/WEB_G<n>.md`; yollar Windows biçiminde tam yol. **Zemin rengi resim olarak verilir** (13 Kasım 2026, sahibi: "web'de üretilen resimler kolay kesilsin"): figür ve kart paketlerine EN SONA o resmin zemininin düz renk örneği eklenir ve istemin zemin satırına şu cümle konur: "Arka plan rengi son referanstaki düz renk ile BİREBİR aynı (<HEX>); başka ton, geçiş ya da gölge yok." Örnekler (`uretim/referanslar/`, renkler V6 onaylı resimlerinden ölçüldü): `zemin_gri_mavi.png` #778393 · `zemin_acik_bej.png` #F0E8D9 · `zemin_acik_gri.png` #D4D4D4 (kıyafet kartı). Sahibi web ChatGPT'de üretip `uretilen/G<n>.png` olarak koyar; Claude denetler.
*Kaynak:* 1095, 1273, 1503

### DENETIM-44 Web'den gelen resim reddedilirse
Web'den gelen (Codex'in üretemediği) resmi reddedersen sahibine söyle: web'de yeniden yapacak.
*Kaynak:* 1337, 1520

### DENETIM-45 Filtre reddinde yumuşatma yok
ChatGPT'nin reddettiği resim Grok'ta orijinal istemle denenir; Grok da reddederse sahibine sorulur, istem kendiliğinden yumuşatılmaz.
*Kaynak:* 3059

### DENETIM-46 Sondaki rapor
Sonda sahibine kısa tablo: onaylanan / reddedilen (nedeni) / Codex'te ENGELLENDİ yazan (`## ENGELLENDİ`) ve yolu **web** olup henüz gelmeyen → "bunları web'de yap". Sahibi "ne kaldı" diye sorduğunda bağımlılık zinciri gösterilir: hangi resim hangi onayı bekliyor. (Sondaki "Codex'e `üret` yaz" cümlesi için bkz. CELISKI-DENETIM-2.)
*Kaynak:* 1338, 1521

### DENETIM-47 Vaka sonunda sayım
Vaka sonunda `prompts/LISTE.md`'deki her G'nin `onayli/`'de olduğu sayılır ve doğrulanır. Sonra sahibine "onayli/ klasörünü Claude penceresine gönder" denir.
*Kaynak:* 1504

## Kıyafet kartı onayı

### DENETIM-48 Kartlar birlikte onaylanır; kart değişirse sorulur
- Kıyafet kartlarının hepsi **tek sayfada yan yana** sahibine gider, **birlikte** onaylanır.
- Kart değişirse o kıyafetin bütün figürleri listelenir ve sahibine sorulur.
*Kaynak:* 556, 558

## Benzerlik

### DENETIM-49 Yeni karakter eski bütün figürlerle karşılaştırılır
13 Kasım 2026, sahibi (`uretim/CLAUDE.md` komut adımı 9). İstemden önce `kaynak/yeni_gorsel/figur_*_normal.webp` temas sayfası + önceki vakaların formlarındaki tarifler ile yan yana bakılır. Formdaki tarif de benzetebilir (V6'da Müzeyyen = Nadide, Dilek = Gülsüm, Tahsin = Sarkis/Rıza çıktı): benzerse sahibine yeni görünüş önerilir, metinde geçen eşya korunur. İstemde "X'e (ayırıcı özelliği) benzemiyor" yazılır. Benzerlik `istem_kontrol.sh`'ın yakalayamadığı şeydir.
*Kaynak:* 1077

## Sahibiyle çalışma ve rötuş

### DENETIM-50 Görsel sorunu anında söylenir
11 Ekim, Vaka 2 Sohbet 1 dersi: sahibi üretim sırasında bir sorun görürse (fazla ayrıntı, tutarsız kıyafet, el, yazı) o an yazar — özellikle sonraki görsellere **referans olacak** görselde (temel: G1, ilk kremalı, ilk örtülü vb.). Hata referansta düzelmezse zincirle yayılır: Vaka 2'de G8'de doğan çorap bandı G9–G13'e geçti; 5 görsel yeniden üretildi, G13 limite takıldı (~20 dk kayıp).
*Kaynak:* 2556, 2573

### DENETIM-51 Tutarlılık sorunu "beğeni" diye geçilmez
Claude setin içinde tutarsız ya da istemde istenmemiş bir ayrıntı görürse gömmeden önce sorar ve düzeltme istemini verir.
*Kaynak:* 2557, 2583

### DENETIM-52 Rötuşun sınırı
Otomatik rötuşa (ör. bant/nesne silme) ancak yüzey düzse girilir; yeniden üretim çoğu zaman daha kısadır. Düz bir yüzeydeki nesne klonlanarak silinebilir (`yanb_kirinti` böyle düzeldi). Ama silinecek bölgeden **yapısal bir çizgi geçiyorsa** (basamak kenarı, kiriş, sövenin hattı) klonlama o çizgiyi keser ve ek yeri belli olur — orada yeniden üretim şart. Merdivendeki defter bu yüzden rötuşla kaldırılamadı.
*Kaynak:* 74, 2557, 2583
