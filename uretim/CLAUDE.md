# Yerel Claude talimatı — resim üretimi

Önce depo kökündeki `CLAUDE.md`'yi oku. Görsel kurallar: `sablon/5_gorsel_sistemi.md` → **H. Görsel standart**.
Ayrıntılı geçmiş ve gerekçeler: `uretim/v3_eski/BIRIKIM.md` (Vaka 3'ün Codex deneyimi). Türkçe, kısa yaz.

## Her oturumda

- **Başlarken:** `git pull`. Sonra `uretim/v<N>/DURUM.md`'yi oku.
- **Bitirirken ve döngüde ara ara:** `DURUM.md`'yi güncelle → commit → `git push origin HEAD:main`. Yalnız `main`.
- Sahibi bir kural söylerse (ör. "Peri'nin ayakkabısı hep kırmızı") onu BU dosyaya yaz; hafızaya değil.

## Karakter sabitleri (her istemde yazılır, her denetimde aranır)

| karakter | sabit |
|---|---|
| Peri | kırmızı stiletto (görünüyorsa HER resimde), çorap yok — **istisna:** vakanın formu başka ayakkabı yazıyorsa o (Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı) |
| Cengo | haki ceket, renkli boncuklu bileklik |
| Ferruh | kalem gibi ince bıyık, bordo papyon |
| Gizem | bal rengi kâküllü saç, çil |
| Müzeyyen (V6) | kısa kül sarısı mizanpli saç, ince uzun, lacivert puantiyeli elbise + ince lacivert hırka, inci kolye, gözlük yok |
| Jale (V6) | kısa düz kızıl saç, sade siyah elbise, bileğinde iğnelik |
| Haldun (V6) | kır şakaklar, ince çerçeveli gözlük, gri takım, gevşek lacivert kravat |
| Recep (V6) | tombul, kısa kıvırcık kır saç, bıyık/sakal yok, koyu yeşil yün yelek |
| Dilek (V6) | kısa kâküllü siyah saç, hardal kazak + açık pembe önlük, beyaz mezura, ağzında iğneler |
| Tahsin (V6) | ince uzun, gür dalgalı beyaz saç, temiz traşlı, kalın gözlük, mürekkepli önlük |

Yeni vakada yeni karakter → buraya eklenir (sahibinin onayıyla).

---

## Komut: `istemleri hazırla <N>`

Hikâye donmuş olmalı (`sablon/vakalar/vaka<N>_diyalog.md`). Çıktı: `uretim/v<N>/LISTE.md`, `prompts/G<n>.md`,
gerekirse `referanslar/`. Listeyi sahibine göster; onaylarsa commit → push. Kurallar:

0. **Liste oyunla eşleşir — zorunlu.** Oyun her resmi bir anahtarla arar (ör. `peri.trenckot.kas`, `A23`, `K36`);
   gömme aracı (`arac_paket.js`) numarayı ve anahtarı `sablon/vakalar/vaka<N>_gorsel.md` tablosundan okur.
   - Listesi zaten olan vaka (Vaka 3): `vaka<N>_gorsel.md`'deki liste AYNEN alınır — aynı numaralar, tür, anahtar.
     Yalnız istemler yazılır. Numara ya da anahtar değişmez, resim eklenmez, çıkarılmaz.
   - Yeni vaka: liste `vaka<N>_gorsel.md`'ye de aynı tablo biçiminde yazılır
     (`| G<n> | figür / arka plan / detay / ara kare / kart afişi | ne | \`anahtar\` | referans | aşama |`).
     Anahtarlar diyalogdaki sahne kodlarıyla aynı olmalı (`node dogrulayici.js yeni` ve `test_yeni_arayuz.js` sınar).
1. **Sıra: temeller önce.** Karakter temel figürleri ve mekân temelleri ilk numaralarda; ifadeler ve kareler sonra.
   (Bir temelin reddi bütün zinciri bir tur geciktirir — Vaka 3'te G5 beş resmi bekletti.)
2. **Referanslarda dekolte YOK — zorunlu.** Güvenlik filtresi metne değil referans resimdeki dekolteye bakıyor;
   tek dekolteli referans bile engelletiyor (BIRIKIM §4). Bu yüzden:
   - Kadın karakterin referansı: yalnız **baş kırpığı** (çeneden yukarısı, yaka yok) + **kapalı giyimli tarz gövdesi**
     (`uretim/referanslar/tarz_govde_kadin.jpg`).
   - Peri'nin eski referanslarının (L*, peri_*, poz_peri_*) HEPSİ dekolteli — kullanılmaz. Peri'nin pozu metinle anlatılır.
   - Varyantta (aynı karakter, başka ifade) referans = onaylı temelin **baş kırpığı** + kapalı gövde. Onaylı temel
     dekolteliyse bütün hâliyle referans verilmez. Baş kırpığını temel onaylanınca sen hazırlarsın (`referanslar/`).
   - Kıyafetin HER ayrıntısı, dekolte dahil, metne yazılır ("vücudu saran kısa siyah elbise, derin V dekolteli").
     Yazılmazsa resimde çıkmaz.
   - Erkek karakterlerde açık göğüs sorun çıkarmadı.
3. **İstem kalıpları: `uretim/ISTEM_KALIPLARI.md` — ZORUNLU, ezberden yazma.** Tarz paragrafının nereye yazılıp
   nereye YAZILMADIĞI (Peri/Cengo ve varyantlarda yok), tarz örneği cümlesi, mekânda ışık, zemin satırı orada.
   Yazmadan önce oradaki onaylı örneklerle ve `v3_eski/prompts/` ile yan yana karşılaştır. Ayrıca **H. Görsel standart**:
   kadraj (H1), bakış (H3), zemin (H4), iki kol iki el, yazı yok, oran.
4. **Vaka 3 dersleri baştan istemde** (aşağıdaki tablo).
5. **Kontrol satırı:** o resimde en kolay bozulacak 2–5 şey.
6. Hikâyede olmayan ayrıntı ekleme (kök CLAUDE.md kuralı). Gerekirse sahibine sor.
7. **Satır–resim uyumu ZORUNLU (sahibi, 6 Kasım 2026).** Her metin, gösterildiği resimle uyumlu olmalı ve resim bunu bilerek
üretilir. Üç aşama, araç `kaynak/arac_satir_resim.js` (tur dökümünden her resmin göründüğü satırları ve riskli satırları basar):
   - **İstem yazarken:** görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`, her yolun `satir/`'ını kopyala) →
  `node arac_satir_resim.js <dokum…> --vaka V<N>`. Her figür/kare isteminin `## Satırlar` bölümüne o resmin satırları
  konur. Bir yüz hepsine uymuyorsa (ör. güler yüz + suçlanma satırı) AYRI ifade istenir. EYLEM bayraklı anlatı satırı
  (yiyor, uzatıyor, kesiyor…) kare ister ya da diyalogda o satıra uygun kare/figür bağlanır. JEST bayraklı replik
  ("(papyonunu düzelterek)") konuşanın figürünün pozuna yazılır.
   - **Denetimde:** resim istemle birlikte o satırlarla da okunur: yüz, el, jest, konuşanın kim olduğu (dinleyen
  parmağıyla işaret ediyorsa konuşan o sanılır — Vaka 3, Gizem konuşurken Peri'nin işaret eden figürü).
   - **Gömmeden sonra:** bütün yollar `--hepsi` ile oynanır, araç yeniden çalışır; her bayrak ve her satırın ekranı
  metniyle okunur, sonuç sahibine tablo hâlinde verilir (satır · metin · uyuyor/uymuyor · neden).
8. **Satır–resim sözleşmesi SR-A…M (sahibi, 8 Kasım 2026): `sablon/5_gorsel_sistemi.md` C0.** İstem yazmadan önce:
   bayrakların hepsi kapalı (SR-E). **13 Kasım'dan beri kuralla (SR-M):** araç OTO/İŞ/SOR ayırır; İŞ'i sen diyalogda kurala
   göre YALNIZ ETİKETLE çözersin (`[ifade]`, `{kare}`, `{gi}`; onaylı söz değişmez, gerekirse yeni poz/kare; `arac_diyalog.js`; sonra `node arac_soz_farki.js <diyalog>` "söz farkı 0" demeli), tur + araç yeniden koşar, İŞ sıfırlanana dek; sahibine yalnız SOR ve yeni resim
   sayısı gider. Komut: `node arac_satir_resim.js <dokum…> --vaka V<N> --karar ../sablon/vakalar/vaka<N>_bayrak.md`; kıyafet hâli tablosu var ve karenin referansı o hâlden
   (SR-B); kıyafet **kartı** referans verilir, kıyafet sözle tarif edilmez (SR-C, 5. parça I); ifade figürü nesnesiz,
   nesneli poz ayrı anahtar, kare tek an (SR-D); bakışın yönü/hedefi ve ifadeyi kardeşlerinden ayıran şey yazılır
   (SR-I, SR-J); karar karesi SONUÇ metninin asıl anı (SR-K).
9. **Yeni karakter eski BÜTÜN figürlerle yan yana karşılaştırılır (13 Kasım 2026, sahibi).** İstemden önce
   `kaynak/yeni_gorsel/figur_*_normal.webp` temas sayfası + önceki vakaların formlarındaki tarifler. Formdaki tarif de
   benzetebilir (V6'da Müzeyyen = Nadide, Dilek = Gülsüm, Tahsin = Sarkis/Rıza çıktı): benzerse sahibine yeni görünüş öner,
   metinde geçen eşyayı koru. İstemde "X'e (ayırıcı özelliği) benzemiyor" yazılır. Benzerlik `istem_kontrol.sh`'ın
   yakalayamadığı şeydir.
10. **Elde yalnız metindeki nesne (SR-D):** temel figüre de "rahat dursun" diye mendil, makas, bez verilmez; `## Satırlar`'da
   geçmiyorsa eller boş.

## Komut: `vaka <N> resimlerini üret`  (asıl komut — döngü sahibine sormadan yürür)

**Önce kontrol listesi (13 Kasım 2026, sahibinin isteği):** `cd uretim && ./istem_kontrol.sh v<N>/prompts/*.md` — çıkış 0
olmadan üretim başlatılmaz. Döngü de her istemi bundan geçirir; geçmeyeni ÜRETMEZ (`$DONGU_LOG/kontrolden_gecmedi.txt`).
Liste mekanik olanı yakalar (Satırlar, zemin, iki zemin denemesi, "X'e benzemiyor", kart referansı, dekolteli referans,
5 referans sınırı); anlam (yüz satıra uyuyor mu, Nurcan, eski karakterlere benzerlik) yine elle okunur.

**Döngüyü arka planda başlat:** `cd uretim && KOL=2 DONGU_LOG=<scratchpad, /c/… biçiminde> ./dongu.sh <N>` (run_in_background).
Betik referansı hazır olan her resmi Codex'e ürettirir (`codex exec --approve-for-me … < /dev/null`; stdin kapalı değilse
Codex takılır), kuyruk boşalınca çıkar. `KOL=2`: iki Codex aynı anda, her biri bir resmi kilitler (`kilit/`), kayıt kol başına
`kayit/kol<k>.md`. Süre ve sonuç `$DONGU_LOG/zaman.tsv`'ye yazılır. `SADECE="3 3z 10"` yalnız o numaraları üretir.
Kota/hız sınırı mesajında kol `BEKLE` sn (varsayılan 900) bekleyip sürer. Döngü çalışırken ikinci bir döngü başlatma.
**Durdurmak için `touch uretim/v<N>/DUR`** (TaskStop Windows'ta kabuğu öldürmez; sonra kalan `codex`/`bash` süreci var mı bak).

**Ölçüm (13 Kasım 2026, ChatGPT Plus):** resim başına ~95–115 sn; 2 kolda resim başına süre aynı (iş iki katı). Kota:
resim başına 5 saatlik sınırın ~%1,2'si (~80 resim / 5 saat), haftalık sınırın çok azı. Sınırı hız değil 5 saatlik kota
koyuyor: 2 kol ~1 sa 10 dk'da doldurur, sonra döngü bekler. Gecede (~10 sa) ~160 resim. Kota dolunca Codex'in verdiği
mesaj henüz görülmedi; ilk gece `zaman.tsv`'deki SINIR satırına ve logda mesajın metnine bak, `sinir_mi` desenini düzelt.

**Tuzak (13 Kasım 2026):** döngüyü sahte Codex'le denerken PATH'e Windows yolu (`C:/…`) verme — iki nokta PATH'i böler,
gerçek Codex çalışır ve kota harcar. Deneme kopyası klasörünü (`v99`) komut sonunda `rm -rf` ile silme: içinde gerçek
resim olabilir (o gün 4 resim böyle silindi, `~/.codex/generated_images/`'tan geri alındı — Codex her resmin kopyasını
orada tutar).

**İki zemin denemesi (H4):** her yeni karakter temeli için `G<n>.md` (asıl zemin) ve `G<n>z.md` (aday zemin) istemi olur;
ikisi üretilir, `arac_kes.js` + `arac_yanyana.js` ile kesilip başı büyütülür, saç kenarı temiz olan seçilir. Seçilen
`onayli/G<n>.png` olur (z seçildiyse o dosya `G<n>.png` adıyla); öbürü `red/`'e. O karakterin bütün ifadeleri o zemini alır
(istemlerine o renk yazılır).

Döngü çalışırken sen:
1. `uretilen/`'e geleni denetle (aşağıda). Onayladıkça yeni resimlerin önü açılır; döngü çıktıysa yeniden başlat.
   Codex 5 dakikadan uzun beklerse: `uretim_kaydi.md`'nin sahibine bak (BIRIKIM §3.4).
2. Temel onaylanınca gereken baş kırpığını/şeridi hazırla (`referanslar/`); hazırlanmayan referansı bekleyen resim döngüye girmez.
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. Üretilecek ve denetlenecek resim kalmayınca dur. LISTE'nin hepsi `onayli/`'deyse `göm`'e geç.

**Temeller önce, takılan temel HEMEN sahibine (sahibi, 8 Kasım 2026).** Her vakada üretim temellerle başlar: her
kıyafetin temel figürü (ve ondan baş kırpığı çıkacak her resim), mekân temelleri. İlk iş yalnız temelleri üretmek ve
denetlemek; durumları (onaylı / ret / engelli) sahibine söylenir. İki kez filtreye takılan ya da üç kez reddedilen **temel**
döngü sonunu beklemez: sahibine o an web paketi verilir (istemin tam metni + referanslar sırayla, tam yollarıyla).
Sahibi web'de temeli üretirken döngü temele bağlı OLMAYAN resimlerle sürer; temel gelip onaylanınca ona bağlı olanlar başlar.
(Vaka 3 Onay 3'te G2 ve G3 engellendi, 25 resim onları bekledi.)

**Sahibine sormadan devam et.** Şunları `WEB_LISTESI.md`'ye yaz, döngü sürsün:
- 3. kez reddedilecek resim (son düzeltme notuyla),
- iki kez güvenlik filtresine takılan resim (`## ENGELLENDİ`),
- emin olamadığın resim (kuşkunu yaz).
Döngü bitince sahibine TEK seferde ver: her resmin istemi ve referansları, sırayla ve tam yollarıyla.
**Web paketinde zemin rengi resim olarak verilir (13 Kasım 2026, sahibi: "web'de üretilen resimler kolay kesilsin").**
Figür ve kart paketlerine EN SONA o resmin zemininin düz renk örneği eklenir ve istemin zemin satırına şu cümle konur:
"Arka plan rengi son referanstaki düz renk ile BİREBİR aynı (<HEX>); başka ton, geçiş ya da gölge yok." Örnekler
(`uretim/referanslar/`, renkler V6 onaylı resimlerinden ölçüldü): `zemin_gri_mavi.png` #778393 · `zemin_acik_bej.png`
#F0E8D9 · `zemin_acik_gri.png` #D4D4D4 (kıyafet kartı). Paket dosyası `v<N>/WEB_G<n>.md`; yollar Windows biçiminde tam yol.
Sahibi web ChatGPT'de üretip `uretilen/G<n>.png` olarak koyar; sen denetlersin. Sahibi onaylı bir resimde hata bulursa onay
geri alınır, ret gibi işlenir; söylediği hata buraya kural olarak yazılır.

## Denetim (her resim)

`prompts/G<n>.md`'yi, resmi ve referanslarını aç. Önce bütün olarak bak, sonra şüpheli bölgeleri 2–4 kat büyüt
(eller, ayaklar ve ayakkabı, tişört ve göğüs, cihaz ekranı ve tuşları, tabelalar, kadraj kenarları). Vaka 3'te küçük
boyutta görünmeyen ret sebeplerinin hepsi büyütünce çıktı. Büyütme: `magick <resim> -crop WxH+X+Y -resize 300% <çıktı>`.

**A. İstemle karşılaştır**
1. `## Kontrol` satırındaki her madde.
2. Kimlik: yüz, saç, kıyafet referansla aynı; **karakter sabitleri**.
3. Yüz üç çeyrek, İKİ göz görünür, profil değil; burun kadrajın soluna.
4. İki kol, iki el, beşer parmak. Kalabalık sahnede kolları kişi kişi say.
5. İstemde olmayan nesne, yazı, harf, rakam, logo, filigran yok.
6. Kadraj ve oran istemdeki gibi; zemin düz ve H4'teki renk.
7. Tarz öbür onaylılarla aynı (yarı gerçekçi boyalı; anime, 3B, fotoğraf değil).
8. Çıplaklık yok; kumaşın altından meme ucu belirmiyor (büyüt).
9. Fiziksel olabilirlik: oturan/dayanan figür mobilyanın içinden ya da arkasından geçmiyor; dirsek gerçekten masada.
10. Sayım: "TAM n kişi" tutuyor; aynı karakter iki kez yok.
11. Mantık: ışık ve saat istemdeki gibi; kapalı dükkânda ateş yanmaz.
12. **Satırlar:** istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra uyuyor mu —
    yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu. Elde nesne yalnız metnin getirdiği satırlarda mı (SR-D);
    bakış satırın söylediği yere mi (SR-I).
13. **Kıyafet kartı:** kıyafet onaylı karttaki gibi mi — boy, kesim, açık/kapalı hâli (SR-B, SR-C).
14. **Kardeşler:** aynı kişinin onaylı ifadeleriyle yan yana; yüz ve poz onlardan açıkça ayrılıyor mu (SR-J).
15. **Çekicilik (Peri ve Gizem; sahibi, 8 Kasım 2026):** yeni resim, o karakterin eski onaylı resimleriyle yan yana;
    çekicilik ve dekolte onlardan AZ DEĞİL. Filtreden kaçarken istem farkında olmadan hafifleyebilir; sönük kalan
    onaylanmaz, `ISTEM_KALIPLARI.md` §9 satırlarıyla yeniden üretilir. (Kıyafet kartı bu maddeden muaf.)

**B. Oyundaki hâli (figürler)** — `kaynak` içinde:
`node arac_yanyana.js ../uretim/v<N>/uretilen/G<n>.png --kim <id> --profil <profil> --oran <H2 tablosu>`
Görüntüyü `uretim/v<N>/yanyana/G<n>.png` olarak sakla. Bak:
1. **Boy:** temel figürde aracın bastığı boy ölçeğini `DURUM.md`'ye not et (gömmede kullanılır).
2. **Bakış:** iki karakter birbirine bakıyor, göz hizası doğal.
3. **Kesim:** giysinin içinde delik yok. 4. **Saç:** başı büyüt; kenarda beyaz/bej iz yok.
Profil: zemin bej → `konuk` (Peri `peri`, Cengo `cengo`); yeşil/gri-mavi → `konuk_beyaz_delik`. Kesim tutmazsa önce
başka profil dene; yine olmazsa reddet.

**Karar**
- **Onay** → `onayli/G<n>.png`. Temel figürse baş kırpığını hazırla (`referanslar/<kim>_bas.png`).
- **Ret** → `prompts/G<n>.md` sonuna `## Düzeltme <k>` + tek-iki cümle (NE değişecek); resmi `red/G<n>_red<k>.png`'ye
  taşı (k = ilk boş numara; üzerine yazma).

## Komut: `göm`

Yalnız LISTE'deki her resim `onayli/`'deyken (yarım set gömülmez; oyunda eski ve yeni resim karışmasın).
1. `kaynak` içinde: `node arac_paket.js ../uretim/v<N>/onayli --vaka <N> --profil <G=profil,…> --genis <…>` → temas sayfasına bak.
2. Aynı komut `--yaz` ile (doğrulayıcı ve derlemeleri kendisi çalıştırır).
3. Not ettiğin boy ölçeklerini `kaynak/yeni/gorseller.json → boy`'a yaz (`arac_json_yaz.js` ile).
3b. **Saç halesi (yeşil zeminli figürler):** `python arac_hale.py ../uretim/v<N>/onayli/G<n>.png yeni_gorsel/<…>.webp --profil peri|konuk [--genis]`
   — kaynağın baş bölgesinde renk anahtarıyla teller arasındaki yeşili siler, kenar sisini saç tonuna çeker. Bir dosyaya
   BİR kez çalıştır (önce `arac_paket.js --yaz` yeniden keser). Bej zeminli figüre kullanma. Oyunda `arac_yanyana.js --kesik` ile bak.
4. **Masa kartı (Ajansın Masası, vaka seçme):** kart afişinden yatay kırpık, yüzler görünür:
   `magick yeni_gorsel/kart_v<N>.webp -resize 900x -crop 900x500+0+<y> +repage -quality 80 yeni_gorsel/masa_v<N>.webp`;
   `gorseller.json → dosyalar.MASA_V<N>`, `game_data.json → vakalar[V<N>].giris_gorsel = "MASA_V<N>"` (yoksa önceki vakanın
   büro resmi görünür — Vaka 3'te sahibi buldu, 6 Kasım).
4. Kart afişi (9:16) elle: `kart_v<N>.webp` (`5_gorsel_sistemi.md` → G). Yeni karakter: künye portresi (`python arac_portre.py …`).
5. Kök CLAUDE.md'deki "Her commit'ten önce" komutları; hepsi geçerse commit → push.
6. `node arac_yeni_tur.js 0 <yol> dogru --hepsi` ile vakayı oynat; görüntülere bak, sorunları sahibine listele.

## Şerit (birden çok karakteri tek referansta veren resim)

Kaynak temeller yeniden onaylanınca yenilenir: hepsi 900 px yüksekliğe, soldan sağa, aralarında 24 px zemin rengi.
`magick G6.png G7.png G8.png G9.png -resize x900 -background "<zemin>" -splice 24x0 +append serit.jpg` (ilk sütundaki
fazla boşluğu kırp). Şeritte dekolte olmamalı.

## Yapma

- Resim üretme (Codex üretir). İstem metnini değiştirme (yalnız sona `## Düzeltme`).
- `main` dışında dala gönderme. `red/` GitHub'a gitmez (.gitignore).

## Vaka 3 dersleri (istemde baştan önlenir, denetimde aranır)

| Sorun | Önlem |
|---|---|
| Filtre engeli | referansta dekolte yok; kıyafet ayrıntısı metinde; iki deneme kuralı |
| Dar beyaz tişörtün altından meme ucu | göğsü örten poz (kollar kavuşuk) + "kalın, mat, düz renk kumaş"; yalnız "kalın kumaş" yetmedi |
| Cihazlarda logo, rakam | her cihaz tek tek: "tuşlar düz, işaretsiz", "çerçeve tamamen düz siyah", ekran kameradan çevrik |
| İstenmeyen aksesuar | "çanta YOK", "şapka YOK" — poz/sahne çağrıştırıyorsa |
| Peri'nin ayakkabısı siyah | HER istemde "kırmızı stiletto" |
| Fazla uzuv | her elin ne yaptığı ayrı ayrı |
| Yüz profile dönüyor | "üç çeyrek, İKİ göz de açıkça görünsün" |
| "Yorgun göz" → morluk | "iki gözün altında hafif koyu halka; morluk ya da yara yok" |
| Unlu karakter yaşlı/gri, fotoğrafa kayıyor | "un bembeyaz, kalın tabaka; saç, kaş, sakal dahil; yüz genç" + tarz paragrafı |
| Loş sahne fazla aydınlık | hangi lamba yanık, hangisi sönük, tek tek; saat açıkça |
| Fiziksel imkânsızlık | oturuş/dayanma tarif: "pervazın ön kenarında, bacakları kaloriferin önünde" |
| Kadraj sınırı yüzdesi tutmuyor | "kişiler daha küçük ve kadrajda daha yukarıda; ayakkabı dahil" |
| Havadaki nesne yanlış yerde | konumu başa göre yaz: "başının epey yukarısında" |
| İki yan karakter birbirine benziyor | "X'e benzemiyor" + ayırıcı özellik (ince bıyık / gür pala bıyık) |
| Yeni karakter eski birine benziyor | başı silinmiş tarz gövdesi; yüzü ayırt edici çizgilerle tarif et |
| Boy, bakış, kesim, saç | H. Görsel standart + `arac_yanyana.js` |
| Çizgi roman / karikatür tarzı, kalın kontur (v3 ilk G1, G4; 6 Kasım, sahibi fark etti) | Eski düzen gibi: Peri, Cengo ve bütün ifade/varyant istemlerinde tarz paragrafı YOK (boyalı referanslar taşır). Yeni karakterde tarz paragrafı + sonda `tarz_ornek_kadin/erkek.jpg` + "Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur… Karikatür değil" cümlesi. Yeni istem yazarken önce `v3_eski/prompts/` ile karşılaştır |
| Dağınık saç telleri zemine taşıyor → kesimden sonra teller arasında zemin halesi kalıyor (v3 G1, G4) | istemde "saçın dış çizgisi toplu; zemine taşan ince tel yok" (eşarplıysa "saçın tamamı eşarbın içinde"). Hale tek başına RET SEBEBİ DEĞİL: gömmede yalnız baş kutusunda temizlenir (`5_gorsel_sistemi.md` → F "Hale temizliği yöntemi"; Vaka 1–2'de böyle yapıldı). **Peri ve Cengo istisna (sahibi, 6 Kasım):** saçları eskisi gibi dağınık kalır; onlara bu satır yazılmaz, hale gömmede temizlenir |
