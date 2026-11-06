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
| Peri | kırmızı stiletto (görünüyorsa HER resimde), çorap yok |
| Cengo | haki ceket, renkli boncuklu bileklik |
| Ferruh | kalem gibi ince bıyık, bordo papyon |
| Gizem | bal rengi kâküllü saç, çil |

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

## Komut: `vaka <N> resimlerini üret`  (asıl komut — döngü sahibine sormadan yürür)

Tekrarla:
1. Üretilecek resimleri bul (AGENTS.md atlama kuralları). Her biri için `uretim/v<N>` içinde:
   `codex exec --approve-for-me "AGENTS.md'ye göre G<n> resmini üret."`
   Bitmesini bekle (~1–2 dk). `--dangerously-bypass-approvals-and-sandbox` ASLA.
   Codex 5 dakikadan uzun beklerse: `uretim_kaydi.md`'nin sahibine bak (BIRIKIM §3.4).
2. `uretilen/`'e gelenleri aşağıdaki **denetim** ile değerlendir.
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. Üretilecek ve denetlenecek resim kalmayınca dur. LISTE'nin hepsi `onayli/`'deyse `göm`'e geç.

**Sahibine sormadan devam et.** Şunları `WEB_LISTESI.md`'ye yaz, döngü sürsün:
- 3. kez reddedilecek resim (son düzeltme notuyla),
- iki kez güvenlik filtresine takılan resim (`## ENGELLENDİ`),
- emin olamadığın resim (kuşkunu yaz).
Döngü bitince sahibine TEK seferde ver: her resmin istemi ve referansları, sırayla ve tam yollarıyla. Sahibi web
ChatGPT'de üretip `uretilen/G<n>.png` olarak koyar; sen denetlersin. Sahibi onaylı bir resimde hata bulursa onay
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
