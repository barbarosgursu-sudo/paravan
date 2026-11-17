# CODEX — Codex/döngü kuralları (birleştirilmiş)

Not: `uretim/v3_eski/` belgeleri eski Vaka 3 düzenidir (yerel `uretim/CLAUDE.md` onları "geçmiş ve gerekçeler" diye anar). Aynı şeyi söyleyen
eski satırlar yeni kurala birleştirildi; yalnız eskide olan ayrıntılar korundu ve "(eski Vaka 3 talimatı)" diye işaretlendi.

### CODEX-1 Codex'in rolü, çalışma yeri ve dili
Codex istemlerden resim üretir ve çıktısını `uretilen/`'e koyar; kuralları `uretim/AGENTS.md`'dedir. Bir çizgi oyunun (eski talimatta "çizgi
animasyon") resimlerini üretir. Çalışma yeri o vakanın klasörü `uretim/v<N>/`. Onu genellikle yerel Claude çalıştırır:
`codex exec --approve-for-me "AGENTS.md'ye göre G<n> resmini üret."`. Sahibi Türkçe konuşur; Codex kısa, Türkçe yanıt verir.
*Kaynak:* 1241, 1267, 1524

### CODEX-2 Codex'in projesi tam vaka klasörü, yeni sohbetle başlar
Codex'in projesi tam vaka klasörü olmalı; Codex yeni sohbetle başlatılır. (Yavaşlarsa: CODEX-13.)
*Kaynak:* 1501

### CODEX-3 Klasörler ve Codex'in izinleri
| yer | ne | Codex |
|---|---|---|
| `prompts/G<n>.md` | istem, sıralı referanslar, kontrol notu | OKUR; yalnız sonuna `## ENGELLENDİ` ekleyebilir |
| `referanslar/` ve `../referanslar/` | sabit referanslar | istemin "Referanslar" listesinde geçiyorsa KULLANIR; değiştirmez |
| `onayli/` | onaylanan resimler | listede geçiyorsa KULLANIR; değiştirmez |
| `uretilen/` | Codex'in çıktısı (onay bekleyen) | `G<n>.png` YAZAR; buradakini referans VERMEZ; onayı yerel Claude verir |
| `red/` | reddedilenler | DOKUNMAZ, referans VERMEZ (yerel Claude gerekirse açar) |
| `uretim_kaydi.md` | kayıt | sonuna satır EKLER |
| `kayit/kol<k>.md` | paralel kolun kaydı | komut bu dosyayı adlandırırsa kaydı `uretim_kaydi.md` yerine buraya ekler (yoksa oluşturur) |

Eski Vaka 3 düzeninde özet liste `prompts/LISTE.md`'deydi; yeni düzende liste `uretim/v<N>/LISTE.md` (CODEX-20).
*Kaynak:* 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1506, 1525, 1526, 1527, 1529

### CODEX-4 Referans yalnız `referanslar/` ve `onayli/`'den
Referans = istemin "Referanslar" listesindeki dosyalar; `referanslar/` (ve `../referanslar/`) ile `onayli/` ikisi de geçerli. Önceki G resimlerinden
referans YALNIZ `onayli/`'den olur. `uretilen/` ve `red/` asla referans olmaz.
*Kaynak:* 1250, 1357, 1527, 1528, 1246, 1247

### CODEX-5 Codex'in yazma sınırları
Codex vaka klasörünün dışındaki hiçbir dosyaya yazmaz, git komutu çalıştırmaz, talimat dosyalarına (AGENTS.md, CLAUDE.md) not yazmaz,
özet ya da başka ek dosya yazmaz (izinli istisnalar CODEX-3 ve CODEX-12'deki `kayit_bekleyen.md`).
*Kaynak:* 1250

### CODEX-6 Komut ve gezme sırası
Komut: `üret`, `üret G50 G51` ya da "G<n> resmini üret". Codex `prompts/`'taki G dosyalarını NUMARA sırasıyla gezer (ya da yalnız adı verilenleri)
ve her `G<n>.md` için CODEX-7…12 adımlarını uygular.
*Kaynak:* 1251, 1530

### CODEX-7 Atlama koşulları
Codex şu resimleri atlar:
1. `onayli/G<n>` ya da `uretilen/G<n>` zaten varsa (yeni talimat `.png` arar; eski Vaka 3 talimatı her uzantıyı, `G<n>.*`).
2. Dosyada `## ENGELLENDİ` başlığı varsa (bunları sahibi web'de yapar — CODEX-10).
3. "Referanslar"daki bir `onayli/G<k>` dosyası yoksa (o resim henüz onaylanmadı).
*Kaynak:* 1252, 1253, 1254, 1531, 1532, 1533

### CODEX-8 Üretim: istem aynen, referanslar sırayla
Referanslar listesindeki dosyaların HEPSİ listedeki SIRAYLA görüntü aracına verilir ("birinci referans" = listedeki 1.). İstem = `## İstem`
bölümündeki metin (eski talimatta: kod bloğu) AYNEN; `## Düzeltme` bölümleri varsa hepsi sırayla istemin SONUNA eklenir. Kısaltma, yumuşatma,
çeviri, kendi ekleme yok. Boyut: istemin "oran" satırındaki dikey orana en yakın boyut (eski Vaka 3 talimatı).
*Kaynak:* 1255, 1534

### CODEX-9 Kaydetme
Üretilen resim `uretilen/G<n>.png` olarak kaydedilir.
*Kaynak:* 1256, 1535

### CODEX-10 Güvenlik filtresi engellerse: iki deneme, sonra web
Güvenlik filtresi engellerse AYNI istem ve AYNI referanslarla bir kez daha denenir (istem DEĞİŞTİRİLMEZ). İkinci deneme de engellenirse
`prompts/G<n>.md` sonuna `## ENGELLENDİ` + tarih + mesajın kısası eklenir, sıradakine geçilir. Sahibinin v4 kararı (4 Kasım 2026): "kesin web"
yolu yok; her resim önce Codex'te iki kez denenir, yalnız iki denemede de engellenen web'e gider.
*Kaynak:* 1257, 1536, 1396

### CODEX-11 Başka hata
Filtre dışı bir hatada bir kez yeniden denenir; olmazsa sıradakine geçilir.
*Kaynak:* 1258, 1537

### CODEX-12 Üretim kaydı (`uretim_kaydi.md`)
- Her üretim çağrısından hemen sonra (engellenen, hatayla biten ve yeniden denemeler dahil) `uretim_kaydi.md` tablosuna bir satır EKLENİR.
  Sütunlar: G no | araç/model | araca giden TAM istem (kısaltmadan; satır sonları `<br>` ile) | referanslar ve sırası | boyut/kalite |
  istem `prompts/G<n>.md`'den aynen mi alındı | sonuç (üretildi / engellendi / hata + varsa mesaj).
  Eski Vaka 3 talimatı ayrıca şunları söylüyordu: satır mevcut tabloya aynı sütun sırası ve biçimiyle eklenir, eski kayıtlar değiştirilmez;
  "aynen mi" sütununda ayrıca çevrildi mi, değiştirildi mi (ne eklendi/çıkarıldı) yazılır (eski Vaka 3 talimatı).
- İstem sonradan dosyadan yeniden kurulmaz; gerçekten araca gönderilen tam metin kaydedilir (eski Vaka 3 talimatı). Bildirilmeyen model/ayar
  tahmin edilmez, "bildirilmedi" yazılır.
- Kayda NORMAL izinle, dosyanın SONUNA ekleyerek yazılır (dosya silinip yeniden oluşturulmaz). Yazılamazsa yükseltilmiş izne geçilmez;
  satır `kayit_bekleyen.md`'ye yazılır, üretime devam edilir ve bitince sahibine "kayıt dosyasına yazamadım" denir (bu son cümle eski Vaka 3
  talimatında). Bu kural Vaka 3'teki yavaşlamadan sonra AGENTS.md 8. maddeye eklendi.
- Paralel kolda kayıt `kayit/kol<k>.md`'ye gider (CODEX-3).
- Gerekçe: bu kayıt engel analizini mümkün kıldı (BIRIKIM §4). Dosya büyür (Vaka 3 sonunda ~190 KB); okurken sütun ayıklayarak oku.
*Kaynak:* 1259, 1538, 1363, 1366, 1367

### CODEX-13 Codex yavaşlarsa kayıt dosyasının sahibine/iznine bak
Codex yavaşlarsa ya da 5 dakikadan uzun beklerse önce `uretim_kaydi.md`'nin sahibine/iznine bakılır (Windows'ta `Get-Acl uretim_kaydi.md`;
ayrıntı BIRIKIM §3.4).
*Kaynak:* 1364, 1086, 1501

### CODEX-14 Bitiş özeti
Codex bitince kısa özet verir: üretilen · engellenen · referans bekleyen (neyi beklediği).
*Kaynak:* 1260, 1539

### CODEX-15 Codex beğenmese de yeniden üretmez
Codex beğenmediği resmi yeniden üretmez; onayı yerel Claude verir.
*Kaynak:* 1261, 1539

### CODEX-16 Resme yazı, filigran, imza yok
Codex resme yazı, filigran, imza eklemez.
*Kaynak:* 1262, 1539

### CODEX-17 Resim dosyası PNG, onaylı resim silinmez
Resim dosyası PNG'dir, adı `G<n>.png` (görsel standart H7). Onaylı resim silinmez. (Vaka 3'te web'den gelenler `.webp`/`.jpg`, Codex'inkiler `.png` idi; ders:
mümkünse hepsi `.png` tutulur, araç uyumu kolaylaşır.)
*Kaynak:* 552, 1487, 1527

### CODEX-18 Codex talimatında kapsam açık yazılır
Talimat dosyasındaki "YALNIZ", "dokunma" gibi kelimelerin kapsamı açık yazılır; Codex kelimesi kelimesine uygular.
*Kaynak:* 1502

### CODEX-19 Oturum başı: bilgisayar hazır mı
Yerel Claude her oturumda, üretimden önce denetler:
1. `python -c "import onnxruntime, PIL, numpy, torch, open_clip"` hata vermemeli; verirse `KURULUM_ORTAK.md`'deki eksik `pip install` satırını
   sahibine söyler (kendisi kurmaz). `onnxruntime` kesim (`arac_kes_yz.py`) ve el denetimi (`arac_el.py`) için şart.
2. `codex --version` çalışmalı ve Codex girişli olmalı (`codex login status`); değilse sahibine söyler, döngüyü başlatmaz.
3. İlk kullanımda modeller kendiliğinden iner (~1,3 GB: kesim ve el modelleri) — internet gerekir, birkaç dakika sürer.
Eksik varsa üretime başlanmaz; sahibine eksik listesi verilir.
*Kaynak:* 1037, 1038, 1039, 1040

### CODEX-20 Komut `istemleri hazırla <N>`
Hikâye donmuş olmalı (`sablon/vakalar/vaka<N>_diyalog.md`). Çıktı: `uretim/v<N>/LISTE.md`, `prompts/G<n>.md`, gerekirse `referanslar/`.
Liste sahibine gösterilir; onaylarsa commit → push.
*Kaynak:* 1056

### CODEX-21 Liste oyunla eşleşir (zorunlu)
Oyun her resmi bir anahtarla arar (ör. `peri.trenckot.kas`, `A23`, `K36`); gömme aracı (`arac_paket.js`) numarayı ve anahtarı
`sablon/vakalar/vaka<N>_gorsel.md` tablosundan okur.
- Listesi zaten olan vaka (Vaka 3): `vaka<N>_gorsel.md`'deki liste AYNEN alınır — aynı numaralar, tür, anahtar. Yalnız istemler yazılır;
  numara ya da anahtar değişmez, resim eklenmez, çıkarılmaz.
- Yeni vaka: liste `vaka<N>_gorsel.md`'ye de aynı tablo biçiminde yazılır
  (`| G<n> | figür / arka plan / detay / ara kare / kart afişi | ne | \`anahtar\` | referans | aşama |`). Anahtarlar diyalogdaki sahne
  kodlarıyla aynı olmalı (`node dogrulayici.js yeni` ve `test_yeni_arayuz.js` sınar).
*Kaynak:* 1057, 1058, 1059

### CODEX-22 Döngüyü başlatma, çalıştırma, durdurma (`dongu.sh`)
- Başlat (arka planda, run_in_background): `cd uretim && KOL=2 DONGU_LOG=<scratchpad, /c/… biçiminde> ./dongu.sh <N>`.
- Betik referansı hazır olan her resmi Codex'e ürettirir (`codex exec --approve-for-me … < /dev/null`; stdin kapalı değilse Codex takılır);
  kuyruk boşalınca çıkar.
- `KOL=2`: iki Codex aynı anda; her biri bir resmi kilitler (`kilit/`); kayıt kol başına `kayit/kol<k>.md`.
- Süre ve sonuç `$DONGU_LOG/zaman.tsv`'ye yazılır. `SADECE="3 3z 10"` yalnız o numaraları üretir.
- Kota/hız sınırı mesajında kol `BEKLE` sn (varsayılan 900) bekleyip sürer.
- Döngü çalışırken ikinci bir döngü başlatılmaz.
- Durdurmak için `touch uretim/v<N>/DUR` (TaskStop Windows'ta kabuğu öldürmez); sonra kalan `codex`/`bash` süreci var mı bakılır.
*Kaynak:* 1081

### CODEX-23 Tuzak: sahte Codex'le deneme (13 Kasım 2026)
Döngüyü sahte Codex'le denerken PATH'e Windows yolu (`C:/…`) verilmez — iki nokta PATH'i böler, gerçek Codex çalışır ve kota harcar.
Deneme kopyası klasörü (`v99`) komut sonunda `rm -rf` ile silinmez: içinde gerçek resim olabilir (o gün 4 resim böyle silindi,
`~/.codex/generated_images/`'tan geri alındı — Codex her resmin kopyasını orada tutar).
*Kaynak:* 1083

### CODEX-24 Döngü çalışırken yerel Claude'un işi
1. `uretilen/`'e geleni denetler. Onayladıkça yeni resimlerin önü açılır; döngü çıktıysa yeniden başlatır. (Codex 5 dk'dan uzun beklerse: CODEX-13.)
2. Temel onaylanınca gereken baş kırpığını/şeridi hazırlar (`referanslar/`); hazırlanmayan referansı bekleyen resim döngüye girmez.
   (Eski Vaka 3 talimatındaki "`referanslar/`'a dokunma" yasağıyla ilişkisi: CELISKI-CODEX-1.)
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. Üretilecek ve denetlenecek resim kalmayınca durur. LISTE'nin hepsi `onayli/`'deyse `göm`'e geçer. Gömmeden sonra `DURUM.md`'deki bağlama
   etiketlerini diyaloğa yazar ve `cd kaynak && node arac_kapi.js V<N> resim` koşar — GEÇTİ demeden vaka bitmiş sayılmaz.
*Kaynak:* 1086, 1087, 1088, 1089

### CODEX-25 Yerel Claude resim üretmez, istem metnini değiştirmez
Yerel Claude resim üretmez (Codex üretir). `prompts/`'taki istem metnini değiştirmez; istem dosyasına yalnız sonuna `## Düzeltme` eklenir.
Eski Vaka 3 talimatı ayrıca "`referanslar/`'a dokunma" diyordu; yeni düzende yerel Claude baş kırpığını/şeridi `referanslar/`'a hazırlar
(CODEX-24 madde 2) — hangisinin geçerli olduğu sahibine soruluyor: CELISKI-CODEX-1.
*Kaynak:* 1150, 1506
