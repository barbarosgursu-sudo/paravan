# Yerel Claude talimatı — resim üretimi

Önce depo kökündeki `CLAUDE.md`'yi oku. Görsel kurallar: `sablon/5_gorsel_sistemi.md` → **H. Görsel standart**.
Ayrıntılı geçmiş ve gerekçeler: `uretim/v3_eski/BIRIKIM.md` (Vaka 3'ün Codex deneyimi). Türkçe, kısa yaz.

> ## ✅ ONAYLI KARARLAR — ÜRETİMDE GEÇERLİ (17 + 19 Kasım 2026, Barbaros)
> Aşağıdaki belgelerdeki eski bir metinle çelişirse **bu kutu geçerli**. Belgeler kurallar tek dosyada toplanırken düzeltilecek
> (`sablon/kurallar/PLAN.md`). Kaynak: `sablon/kurallar/adim2/SORULAR.md` (sorunun numarası parantezde).
>
> **Peri ve Cengo**
> - Cengo'da her vakada aynı kalan: **yüz, saç, tel, bileklik.** Ceket dahil kıyafet her vakada değişir; "haki ceket" yalnız bir vakanın kıyafetiydi (17; saç 19 Kasım).
> - Dönen kişilerin (Peri, Cengo, Gizem…) yüzü ve kimliği aynı kalır; kıyafet, saç, takı vakaya göre değişir — Cengo'nun saçı hariç (30).
> - Peri'de külotlu çorap yok; "bacak görünen kadına ten rengi külotlu çorap" öbür kadınlar için geçerli (15).
> - Kapalı yakalı kıyafette de Peri'nin üst düğmeleri açık çizilir; dekolte asla azaltılmaz (32).
> - Felaket ve komedi karesinde Peri isteminde "seksi" yazılır; filtrenin sebebi referanstaki dekolte, kelime değil (9).
> - Cengo'nun neden Peri'nin yanında olduğu bilinir: alacağı var. "Kimse bilmiyor" sözü kalktı (18).
>
> **Resim ve istem**
> - İfade sayısını satırlar belirler: Cengo'ya sabit "4 ifade" yok; konuğa "2–3 ifade" yalnız tahmin, satırlar isterse fazlası üretilir; "görsel sayısı azaltılmaz, dörder ifade" kalktı (28, 29, 31).
> - Kıyafet kartı referans verilir, kıyafet istemde sözle tarif edilmez; yalnız kartta görünmeyen dekolte derinliği ve o satırın hâli (açık, lekeli) yazılır (10).
> - Açılıp kapanan kıyafetin iki hâli **iki ayrı kart** (12). Kıyafet kartı **her konuğa** üretilir (13).
> - Dekoltesiz temelin türevinde referans **bütün temel resim**; baş kırpığı yalnız dekolteli temelde (14).
> - Konuk figürü de **4:5 (1122×1402)**, herkesle aynı (11). Figür zemini bej değil, **kıyafete göre programla seçilir** (16).
> - Yüz her resimde **kadrajın soluna** bakar (5).
> - Kadın konuk boyu yeni tablodaki **0.92–1.00**; eski "0.76–0.82" kalktı (7).
> - Kesimden sonra elle hale temizliği yok: büyütüp bakılır, hale kalırsa yeniden kesilir ya da üretilir (6). Kesim profili yalnız çerçeveyi belirler; eski renk ayarları kalktı (8).
> - Denetleyen Claude `referanslar/`'a baş kırpığı koyabilir; var olan dosyayı değiştirmez (2).
> - 3. kez reddedilen resim üretimi durdurmaz: web listesine yazılır, sonda tek listede gelir (3). Rapor sonundaki "Codex'e üret yaz" adımı kalktı (4).
> - Resimleri Codex döngüsü üretir; iş sayfası yalnız web'de üretilecek resimler için (40).
> - Barbaros da üretimi yürütebilir; resim onayında son söz o oturumda üretimi yürütende (41).
> - Ekranda "Peri solda, sağda tek konuk" yalnız Vaka 1–5'in eski düzeni; Vaka 6'dan beri 16 Kasım kararı geçerli (1).
>
> **Metin ve vaka**
> - Replik **anlaşılır** yazılır, telefon kutusuna sığar (~110 harf); "kısa replik, bir satırı geçen bölünür" kalktı (33).
> - Cengo'nun teliyle bulunan kanıtın mahkemede geçmemesi gerçek bedel değil, yalnız espri (21b) (34).
> - Kasa yok, para sayılmaz: sezon tablosunda "kasa dolu/boş", "kasaya bir şey girmedi", "ay sonu gideri 35.000 ₺" kalktı (35, 36).
> - Yeni vaka gelince oyuncuya bir kez "yeni vaka geldi" kartı çıkar (26). İlk iki vaka reklamsız; "3. vaka da bedava" kalktı (25).
> - YouTube Shorts 28–55 sn (27).
>
> **Kod ve çalışma** (kodu ilgilendirenler yapıldı)
> - Doğrulayıcı önizleme, ücret kesintisi, kasa ve "Kasaya" satırı istemez; K8 yeni oyunda çalışmaz (19, 20, 21, 37).
> - Kapı her commit'te kendiliğinden çalışır (24). Oyun her konuşmayı kaydeder (23). Eski oyun "6 + 3" vaka (22).
> - Yalnız `main`'e gönderilir (38). Sahibine tek öneri + kısa gerekçe sunulur, seçenek listesi değil (39).

## Her oturumda

- **Başlarken:** `git pull`. Sonra `uretim/v<N>/DURUM.md`'yi oku.
- **Bitirirken ve döngüde ara ara:** `DURUM.md`'yi güncelle → commit → `git push origin HEAD:main`. Yalnız `main`.
- Sahibi bir kural söylerse (ör. "Peri'nin ayakkabısı hep kırmızı") onu BU dosyaya yaz; hafızaya değil.
- **Üretim nerede (Barbaros, 14 Kasım 2026 gece — öncekinin yerine):** resim üretimi (döngü, Codex) **Oğuz Bey'in ya da Barbaros'un**
  bilgisayarında yapılır; ikisi aynı numarayı aynı anda üretmesin (hangisinin ürettiği `DURUM.md` en üstte yazılır). Codex ve web
  ChatGPT Barbaros'un hesabıyla.
- **Bu belgede "sahibi":** o oturumda üretimi yürüten kişi (Oğuz Bey ya da Barbaros) — temel onayı, resim onayı/reddi, **el onayı**,
  web listesi, tarz soruları ona gider. Yeni kural ya da kural değişikliği Barbaros'a sorulur (`kaynak/DEVIR.md` en üst). **17 Kasım 2026'dan beri Oğuz Bey'in hesabı kurallar
  dahil her şeye yetkili (Barbaros'un kararı; kök `CLAUDE.md` en üst).**
- **İlk iş — bu bilgisayar hazır mı (her oturumda, üretimden önce):**
  1. `python -c "import onnxruntime, PIL, numpy, torch, open_clip"` hata vermemeli; verirse `KURULUM_ORTAK.md`'deki eksik `pip install`
     satırını sahibine söyle (kendin kurma). `onnxruntime` kesim (`arac_kes_yz.py`) ve el denetimi (`arac_el.py`) için şart.
  2. `codex --version` çalışmalı ve Codex girişli olmalı (`codex login status`); değilse sahibine söyle, döngüyü başlatma.
  3. İlk kullanımda modeller kendiliğinden iner (~1,3 GB: kesim ve el modelleri) — internet gerekir, birkaç dakika sürer.
  Eksik varsa üretime başlama; sahibine eksik listesini ver.

## Karakter sabitleri (her istemde yazılır, her denetimde aranır)

| karakter | sabit |
|---|---|
| Peri | kırmızı stiletto (görünüyorsa HER resimde), çorap yok — **istisna:** vakanın formu başka ayakkabı yazıyorsa o (Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı) |
| Cengo | yüz, saç, tel, renkli boncuklu bileklik — her vakada aynı; ceket dahil kıyafet vakanın formundan |
| Ferruh | kalem gibi ince bıyık, bordo papyon |
| Gizem | bal rengi kâküllü saç, çil |
| Müzeyyen (V6) | kısa kül sarısı mizanpli saç, ince uzun, lacivert puantiyeli elbise + ince lacivert hırka, inci kolye, gözlük yok |
| Jale (V6) | kısa düz kızıl saç, sade siyah elbise, bileğinde iğnelik |
| Haldun (V6) | kır şakaklar, ince çerçeveli gözlük, gri takım, gevşek lacivert kravat |
| Recep (V6) | tombul, kısa kıvırcık kır saç, bıyık/sakal yok, koyu yeşil yün yelek |
| Dilek (V6) | kısa kâküllü siyah saç, hardal kazak + açık pembe önlük, beyaz mezura, ağzında iğneler |
| Tahsin (V6) | ince uzun, gür dalgalı beyaz saç, temiz traşlı, kalın gözlük, mürekkepli önlük |

Yeni vakada yeni karakter → buraya eklenir (sahibinin onayıyla).

**Mekân sabiti — büro kapısı (Barbaros, 14 Kasım 2026; V6 G90–G92):** büronun kapısı hanın üçüncü kat koridoruna açılır
(krem, sıvası dökülmüş duvar; siyah-beyaz karo; kemerli tavan) — kapının ardı ASLA sokak, ağaç, gökyüzü değil. `buro_gunduz.jpg`
kapıdan içeri bakar ve kapı duvarını göstermez; kapının açık göründüğü her karede referans `v6/referanslar/buro_koridor.jpg`
(büro + koridor yan yana) ve ardındaki koridor istemde sözle de yazılır. Gelen kişi (eşikte, içeri giriyor): kamera büronun İÇİNDE,
kapıya bakar; kişi eşikte, arkasında koridor.

**Sigara yok (Barbaros, 16 Kasım 2026; kural 19a, bütün seri):** hiçbir resimde sigara içilmez; kadrajda sigara, izmarit, kül tablası,
çakmak, puro, pipo, nargile, duman olmaz. İstem bunları hiç anmaz ("sigara yok" bile yazılmaz); `istem_kontrol.sh` yakalar. Denetimde
(5. parça E.13) yakın bakışla aranır.

---

## Komut: `istemleri hazırla <N>`

Hikâye donmuş olmalı (`sablon/vakalar/vaka<N>_diyalog.md`). Çıktı: `uretim/v<N>/LISTE.md`, `prompts/G<n>.md`,
gerekirse `referanslar/`. Listeyi sahibine göster; onaylarsa commit → push. Kurallar:

00. **Konuk benzerliği — zorunlu, otomatik (20 Kasım 2026, sahibinin kararı; vaka numarasına bağlı değil).** Yeni karakterin
   görünüşü `sablon/kurallar/benzerlik/adaylar.tsv`'ye yazılır (her özellik dolu). İstemden önce `node kaynak/arac_benzerlik.js <vaka>`
   GEÇTİ demeli: aday, HAVUZA (`havuz.tsv`: resmi onaylanmış herkes) ve birlikte üretilen adaylara benzememeli. DURDU derse
   görünüş formda, diyalogdaki tarifte ve `adaylar.tsv`'de değiştirilir — **sahibine sorulmaz** — ve GEÇTİ diyene kadar yeniden denenir.
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
9b. **Vakaya özgü her karakter, önceki vakaların BÜTÜN konuklarından açıkça farklıdır (ortak, 16 Kasım 2026: "sadece vaka 7
   için özel ürettiğin kişiler tamamıyla diğer karakterlerden farklı olacak"; Peri, Cengo, Gizem gibi sürekli karakterler hariç).**
   Yüz aracının uyarısı (≥ 0,70) yetmez: V7 Parti 1'de 0,64–0,68 puanlı Necmi ve Ercan gözle Recep'in yüzüydü, Kaan Bülent'in.
   Temel üretilince her yeni konuk, aracın bulduğu en yakın İKİ eski konukla yan yana konur ve gözle bakılır (yüz biçimi, saç,
   beden, yaş); benzerse ortağa yeni görünüş önerilir. Üretici "neşeli yaşlı esnaf", "yakışıklı genç" gibi kalıp yüzlere kayar:
   istemde yüz biçimi (uzun/köşeli/yuvarlak), saç rengi ve bir ayırıcı işaret (gözlük, çil, altın diş, kel tepe) açıkça yazılır.
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

**Zemin seçimi (H4, 14 Kasım 2026'dan beri yazılımla):** zemin kıyafete göre `kaynak/arac_zemin.py` ile seçilir, karar
`v<N>/zemin.tsv`'ye yazılır, `istem_kontrol.sh` istemleri ona göre denetler. Peri/Cengo: kıyafet kartı onaylanınca, istemden
önce. Yeni konuk: temel açık bej zeminde üretilir, onaylanınca araç temelde koşar (`--yaz`); bej riskliyse temel önerilen
zeminde bir kez daha üretilir. O kıyafetin bütün ifadeleri o zemini alır. Araç "KIYAFET DEĞİŞMELİ" derse (iki zemin de
riskli) zemin değil kıyafet değişir: çakışan parçayı sahibine/ortağa sor, kartı yeniden üret (sahibi, 14 Kasım 2026).
**Zemin denemesi** (`G<n>.md` + `G<n>z.md`, ikisi üretilir, kesilip başı büyütülür, saç kenarı temiz olan seçilir; seçilen
`onayli/G<n>.png`, öbürü `red/`) yalnız araç gri-mavi seçip saç açıksa. Kesim profilini de araç basar (gömmede o kullanılır).

Döngü çalışırken sen:
1. `uretilen/`'e geleni denetle (aşağıda). Onayladıkça yeni resimlerin önü açılır; döngü çıktıysa yeniden başlat.
   Codex 5 dakikadan uzun beklerse: `uretim_kaydi.md`'nin sahibine bak (BIRIKIM §3.4).
2. Temel onaylanınca gereken baş kırpığını/şeridi hazırla (`referanslar/`); hazırlanmayan referansı bekleyen resim döngüye girmez.
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. Üretilecek ve denetlenecek resim kalmayınca dur. LISTE'nin hepsi `onayli/`'deyse `göm`'e geç. Gömmeden sonra `DURUM.md`'deki
   bağlama etiketlerini diyaloğa yaz ve `cd kaynak && node arac_kapi.js V<N> resim` — **GEÇTİ demeden vaka bitmiş sayılmaz.**

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

**0. Yazılımla tarz denetimi — HER resimde, gözden ÖNCE (13 Kasım 2026, sahibi: "benim gözle görüp onaylamamdan önce bu işin
yazılımsal olarak yapılması gerekiyor; yoksa gene aynı durumla tekrar üretmek zorunda kalırız").** `cd kaynak && python
arac_tarz.py --uretim v<N> G<n>` (döngü her üretimden sonra kendisi koşar, sonuç `$DONGU_LOG/tarz.tsv` ve kol çıktısında).
- **KALDI** (tarz puanı < 0) → ret; `## Düzeltme`: tarz (boyalı, sıcak ışık, dokulu; kalın kontur/düz boya yok).
- **ŞÜPHELİ** (0–0,02) → onaylanmaz; aynı düzeltmeyle yeniden üretilir. İki kez ŞÜPHELİ kalırsa sahibine sorulur (görüntüyle).
- **GEÇTİ** → aşağıdaki A ve B denetimi. Kayda `G<n> tarz GEÇTİ (+0,0xx)` yazılır; bu satırı olmayan resim onaylı sayılmaz.
- Sahibine yalnız GEÇTİ olanlar gider. Çapa: Peri/Cengo LoRA resimleri (`uretim/referanslar/tarz_capa/`), konuk Gizem, Müjgan,
  Defne, Tolga, Kenan, Ferruh; mekân Vaka 1–3'ün bütün arka planları; kare Vaka 1–3'ün kareleri (sahibinin seçimi).
- **Kör nokta:** hafif "soluk / fazla gerçekçi" kayma (eski Eylül G6) puana yansımayabilir → A.7 gözle tarz maddesi kalır.
- Araç değişirse önce `python arac_tarz.py --sinav` → "SINAV GEÇTİ" (kaymış 8 resim yakalanır, 42 iyi resim geçer).
- Figürde tarz kararı GÖVDEDEN verilir; yüz tarz puanı karara katılmaz (14 Kasım ölçümü: kaymış Cengo yüzleri onaylılarla aynı
  aralıkta, yani yüz o kaymayı göstermiyor). Kartta tarz puanı yüz kırpığından okunur.

**0b. Yazılımla yüz (kimlik) denetimi — Peri, Cengo, Gizem (14 Kasım 2026, sahibi: "ilerleyen vakalarda Peri ve Cengo'nun yüzü
bozulabilir").** `cd kaynak && python arac_yuz.py --uretim v<N> G<n>` (döngü tarz denetiminin hemen ardından kendisi koşar, sonuç
`$DONGU_LOG/yuz.tsv`). Yüz tanıma modeliyle resimdeki yüzü karakterin çapasıyla karşılaştırır (LoRA + oyundaki sprite'lar + Vaka 3
onaylıları; V6 ve sonrası bilerek çapada değil).
- Figür ve kart: **KALDI** (< 0,66, başka karaktere daha yakın ya da yüz bulunamadı) → ret, `## Düzeltme`: yüz referanstaki
  gibi. **ŞÜPHELİ** (0,66–0,70) → onaylanmaz, yeniden üretilir; iki kez ŞÜPHELİ kalırsa sahibine. **GEÇTİ** → göz denetimi.
- İki araç da koşar ve ikisinin sonucu kayda yazılır; ikisinden de GEÇTİ almayan resim göz denetimine geçmez. Kayıt satırı:
  `G<n> tarz GEÇTİ (+0,0xx) · yüz GEÇTİ (0,8xx)`.
- Kare (çok kişi): kapı DEĞİL, araç bulduğu yüzleri ve en yakın karakteri bilgi olarak basar; karar A.2'de gözle.
- Bilinen sınır: uç ifadeler (gözler kapalı, yüz buruşuk, yüz kısmen kapalı) puanı düşürür. Yüz gözle karakterse sahibine sorulur.
- **Konuk (14 Kasım 2026):** çapa AYNI vakadaki kendi onaylı figürleri (temel + onaylı ifadeler). Başka konuğa daha yakınsa
  KALDI, < 0,60 KALDI, 0,60–0,70 ŞÜPHELİ. Temelde kimlik kapısı yok; onun yerine eski karakterlere (oyundaki bütün figür ve
  sprite'lar) yüz benzerliği basılır, ≥ 0,70 ise **UYARI: yan yana bak (kural 9)** — kapı değil (onaylı Müzeyyen Nadide'ye
  0,748, Recep Ferruh'a 0,724 çıkıyor; görünüşle ayrıldılar). Sonraki vakada tekrar çıkan konuk olursa önceki vakadaki
  resimleri çapaya eklenir (sahibi, 14 Kasım).
- Denenip BIRAKILAN (14 Kasım): ifadeyi temeline CLIP benzerliği ya da renk doygunluğuyla karşılaştırıp "soluk/kaymış" yakalamak —
  poz ve bilerek değişen ifade (unlu yüz) ölçüyü bastırıyor, onaylılarla kaymışlar iç içe. Bu kayma gözle (A.7, A.14).
- Araç değişirse önce `python arac_yuz.py --sinav` → "SINAV GEÇTİ".

**0b2. Yazılımla konuk benzerliği — konuğun figür ve kartında (20 Kasım 2026, sahibi: "vakadaki karakterler önceki vakalardakinden
mutlaka farklı olmalı… otomasyon şeklinde sağlamalıyız"; V7 G4 Süheyla, V6 Jale'nin aynısı çıktı).** `cd kaynak && python
arac_benzerlik_resim.py --uretim v<N> G<n>` (döngü yüz denetiminin ardından kendisi koşar, sonuç `$DONGU_LOG/benzerlik.tsv`).
Yüz + baş (saç dahil) + bütün figür; karşılaştırılan: oyundaki bütün figürler, bütün vakaların onaylıları ve aynı vakada üretilen
öbür konuklar (aynı cinsiyet). Üretimden önceki yazı denetiminin (`arac_benzerlik.js`) ikinci parçası.
- **Sınır kendiliğinden (sahibi, 20 Kasım 2026: "sınırı kimse ayarlamasın"):** araç her çalıştırmada bilinen benzer çiftleri de
  ölçer; sınır = en düşüğünün 0,15 altı (1,55'ten yukarı çıkmaz), şüphe 0,15 daha altı. Sınır o kadar düşer ki onaylı karakter
  çiftlerinin %10'undan fazlası üstünde kalırsa araç **DUR** der (çıkış 3): üretim durur, sahibine sorulur.
- **KALDI** (bugün ≥ 1,55) → ret; konuğun görünüşü değişir (saç kesimi/rengi, yaş, yüz, beden), sahibine sorulmaz; form ve
  `sablon/kurallar/benzerlik/adaylar.tsv` güncellenir, `arac_benzerlik.js` yeniden koşulur, yeniden üretilir.
- **ŞÜPHELİ** (bugün 1,40–1,55) → onaylanmaz, aynı yol; iki kez ŞÜPHELİ kalırsa sahibine (görüntü `kaynak/YENI_UI/benzerlik/G<n>_<kişi>.jpg`).
- **GEÇTİ** → göz denetimi. Kayıt satırına eklenir: `· benzerlik GEÇTİ (en yakın <kişi> 1,1x)`.
- Peri, Cengo, Gizem denetlenmez (kimlikleri 0b'de). İfade resmi de koşar.
- Araç değişirse önce `python arac_benzerlik_resim.py --sinav` → "SINAV GEÇTİ" (Süheyla–Jale, Necmi–Recep, Kaan–Cengo/Bülent,
  Müzeyyen–Nadide). `--havuz-ici` eski vakalarda kalmış benzer çiftleri basar (bilgi).

**0c. El denetimi — kişi görünen HER resimde (14 Kasım 2026, kural 5; V6 K96'da Peri'nin iki SAĞ eli iki kez gözden kaçtı).**
`cd kaynak && python arac_el.py --sayfa V<N> G<n>` → `kaynak/YENI_UI/el/G<n>.jpg`: her kişinin SOL kolu mavi, SAĞ kolu kırmızı çizili,
her el büyütülmüş ve hangi kolda olduğu yazılı; ayrıca istemin "TAM n kişi"siyle sayım. Bak: sol kolun ucunda SOL el, sağ kolun ucunda
SAĞ el mi (başparmağın yönü), fazla/eksik el var mı. Doğruysa sayfayı sahibine göster ya da sonucu söyle; **onayı sahibi verir**
(kendisi bakar ya da "onayla" der) → `python arac_el.py --onay V<N> G<n>`. Onaysız resim kapıdan (`arac_kapi.js`) geçmez; resim
değişirse onay düşer. Kişi sayısı uyarısı yanlış alarm olabilir (sarılan iki kişi tek, manken kişi sayılır) — gözle karar verilir.
- **Nesne tutan el: zorunlu yakın bakış (15 Kasım 2026, sahibi; V6 G25 ve G80 69 resimlik toplu onayda kaçtı).** Nesne tutan HER el
  (tepsi, telefon, kutu, kâğıt) el sayfasından ayrıca 4–5 kat büyütülür: `magick <resim> -crop WxH+X+Y +repage -resize 500% <çıktı>`.
  Bakılan: (1) başparmak görünüyor ve doğru tarafta mı, (2) beş parmak sayılıyor mu, (3) el bir ön kola bağlı mı, (4) nesnenin
  kenarında fazla parmak var mı. Başparmak görünmüyorsa resim onaylanmaz, istemde §12 (`ISTEM_KALIPLARI.md`) kalıbıyla yeniden üretilir.
  Nesne tutan eller topluca onaylanmaz; büyütülmüş görüntü sahibine resim resim gösterilir. Bu bakışı yapan Claude kendi okumasında
  kuşkuluysa ("sol el gibi") bunu söyler, "doğru" demez.
- **Denenip BIRAKILAN (15 Kasım 2026): yazılımla sağ/sol el.** DWPose kol tarafı × MediaPipe Hands el sınıfı (sağ/sol), ayrıca
  ayna sınavı (aynalanan kırpıkta etiket dönmeli) ve 3B noktalardan el yönü. Sınav: bilinen 5 yanlış el (`v6/red/G65_red2`,
  `G25_red1`, `G80_red1–3`) ve V3+V6 onaylılarının ~560 eli. En iyi ayarda 5 yanlıştan 2–3'ü yakalandı (biri hiç bulunamadı, biri
  "sol" sanıldı), vaka başına 10–23 bayrak çıktı ve bayrakların hemen hepsi yanlış alarmdı: kırpıkta başka kişinin eli (DWPose kolu
  bir kişiye, eli ötekine bağlıyor), kenetli eller, kolun ucunda çanta sapı / zarf / tül. 3B yön sinyali tutarsız. Boyalı resimde
  sağ/sol hâlâ gözün işi; yukarıdaki yakın bakış ve `ISTEM_KALIPLARI.md` §12 bu yüzden var. Model yeniden denenecekse önce bu sınav.

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
7. Tarz öbür onaylılarla aynı (yarı gerçekçi boyalı; anime, 3B, fotoğraf değil). **Temel ve kartta zorunlu:** aynı karakterin eski onaylı resmi ve eski konuklarla yan yana bak; kontur kalınlığı, boya dokusu, ışık sıcaklığı, yüz (§11).
8. Çıplaklık yok; kumaşın altından meme ucu belirmiyor (büyüt).
9. Fiziksel olabilirlik: oturan/dayanan figür mobilyanın içinden ya da arkasından geçmiyor; dirsek gerçekten masada.
10. Sayım: "TAM n kişi" tutuyor; aynı karakter iki kez yok.
11. Mantık: ışık ve saat istemdeki gibi; kapalı dükkânda ateş yanmaz.
12. **Satırlar:** istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra uyuyor mu —
    yüz, el, jest; dinleyen figür konuşan gibi görünmüyor mu. Elde nesne yalnız metnin getirdiği satırlarda mı (SR-D);
    bakış satırın söylediği yere mi (SR-I).
13. **Kıyafet kartı:** kıyafet onaylı karttaki gibi mi — boy, kesim, açık/kapalı hâli (SR-B, SR-C). **Kumaş yüzeyi de (13 Kasım 2026, sahibi G18'de buldu):** ütülü kıyafet pürüzsüz mü (her yerde küçük köşeli kırışık = buruşturulmuş kâğıt/folyo dokusu → ret), buruşuk kıyafet kumaş gibi yumuşak kıvrımlı mı. Gövdeyi büyütüp bak.
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
  **Konuk temel figürü onaylanınca, sormadan:** o kişinin `adaylar.tsv` satırını onaylı RESME göre düzelt (saç, yüz, üst rengi
  resimde nasılsa; `kaynak` = resim), sonra `node kaynak/arac_benzerlik.js --havuza <kim>` — kişi havuza girer, bundan sonraki her
  karakter ona da bakılarak üretilir. (Unutulursa `arac_paket.js --yaz` gömerken taşır; ama satırı resme göre düzeltmez.)
- **Ret** → `prompts/G<n>.md` sonuna `## Düzeltme <k>` + tek-iki cümle (NE değişecek); resmi `red/G<n>_red<k>.png`'ye
  taşı (k = ilk boş numara; üzerine yazma).

## Komut: `göm`

Yalnız LISTE'deki her resim `onayli/`'deyken (yarım set gömülmez; oyunda eski ve yeni resim karışmasın).
1. `kaynak` içinde: `node arac_paket.js ../uretim/v<N>/onayli --vaka <N> --profil <G=profil,…> --genis <…>` → temas sayfasına bak.
2. Aynı komut `--yaz` ile (doğrulayıcı ve derlemeleri kendisi çalıştırır).
3. Not ettiğin boy ölçeklerini `kaynak/yeni/gorseller.json → boy`'a yaz (`arac_json_yaz.js` ile).
3b. **Kesim yapay zekâyla (14 Kasım 2026, sahibinin kararı — tek yöntem):** `arac_paket.js` figürleri `arac_kes_yz.py` ile keser
   (BiRefNet modeli; saç arası ve kol arası zemini de siler, kenardaki zemin rengini arındırır; ilk kullanımda model ~970 MB
   indirilir, `onnxruntime` gerekir — `KURULUM_ORTAK.md`). Profil yalnız çerçeveyi verir. **Kapı:** kenarda zemin rengi
   yalnız bu yöntemle kesilmiş figür gömülür (`--eski` ile `--yaz` durur); düz zemin rengi ölçüsü (`KALINTI`) yalnız uyarı. Eski renk kesimi (`arac_kes.js`) ve `arac_hale.py` artık
   kullanılmaz (V6'da hale adımı atlandı, Peri'nin saçında mavi, Cengo'nun kol arasında bej yayına çıktı). `--eski` yalnız karşılaştırma için.
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
| Kart katalog çizimine kayıyor, figür tarzı karttan alıyor (V6 G2 → G18 → bütün Cengo seti; 13 Kasım, sahibi fark etti) | `ISTEM_KALIPLARI.md` §11: kart tek kişi dikey + boyalı yüz referansı + tam §3 cümlesi; kartı alan istemde "kartın çizim tarzını alma"; denetimde temel/kart eski onaylılarla yan yana (tarz) |
| Çizgi roman / karikatür tarzı, kalın kontur (v3 ilk G1, G4; 6 Kasım, sahibi fark etti) | Eski düzen gibi: Peri, Cengo ve bütün ifade/varyant istemlerinde tarz paragrafı YOK (boyalı referanslar taşır). Yeni karakterde tarz paragrafı + sonda `tarz_ornek_kadin/erkek.jpg` + "Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur… Karikatür değil" cümlesi. Yeni istem yazarken önce `v3_eski/prompts/` ile karşılaştır |
| Dağınık saç telleri zemine taşıyor → kesimden sonra teller arasında zemin halesi kalıyor (v3 G1, G4) | istemde "saçın dış çizgisi toplu; zemine taşan ince tel yok" (eşarplıysa "saçın tamamı eşarbın içinde"). Hale tek başına RET SEBEBİ DEĞİL: gömmede yalnız baş kutusunda temizlenir (`5_gorsel_sistemi.md` → F "Hale temizliği yöntemi"; Vaka 1–2'de böyle yapıldı). **Peri ve Cengo istisna (sahibi, 6 Kasım):** saçları eskisi gibi dağınık kalır; onlara bu satır yazılmaz, hale gömmede temizlenir |
