# Vaka 3 resim üretimi — birikim

Vaka 3'te (2026-11-04 … 11-06, `D:\Yazilim\chatcpt-resim\v3`) resim üretimi ve denetiminden öğrenilen her şey burada.
Kaynaklar: istem dosyaları, `uretim_kaydi.md`, `red/`, `onayli/`, `deneme_codex/`, yerel Claude'un belleği ve konuşma kayıtları.
Düzen ve roller için `ISLEYIS_v4.md`'ye bak. Bu dosya onun ayrıntılı ve düzeltilmiş eki.
Not: ISLEYIS_v4.md'deki sayılardan ikisi yanlış. Doğruları: **14 engel** ve **22 denetim reddi** (artı yamadan önce atılan 6 resim).

---

## 1. Sayılarla Vaka 3

| | |
|---|---|
| Resim | 67 (LISTE.md). Hepsi `onayli/`'de. |
| Baştan onaylı (eski, web) | 15: G1 G2 G3 G9 G19–G29 (`.webp`; G3 `.jpg`) |
| Vaka içinde web'de yapılan | 2: G49 (yol web) ve G64 (Codex engelledi) |
| Codex'in ürettiği ve onaylanan | 50 |
| Codex üretim çağrısı (`uretim_kaydi.md`) | 96 satır. Normal `üret`te ~78 çağrı, `dene`de 18 çağrı. |
| Güvenlik engeli | 14 çağrı. `üret`te 3 (G64, G63, G67), `dene`de 11 (G1'de 7, G2'de 4). |
| Denetim reddi | 22: G4 1 · G5 2 · G8 1 · G14 1 · G40 1 · G41 1 · G42 1 · G43 1 · G44 2 · G51 1 · G56 2 · G58 1 · G63 2 · G65 1 · G67 4 |
| Denetimsiz atılan | 6: G6 G7 G8 G12 G13 G14 (tarz yamasından önce eski istemle üretilmişlerdi) |
| `red/` dosyası | 26. G8_red1 ile G14_red1'in yama öncesi halleri üzerine yazıldı, kayıp. |
| Hız | Normalde resim başına 40–120 sn. İzin sorunu varken 5–12 dk (§3.4). |

---

## 2. Denetim kuralları ve sebepleri

Komut "kontrol et". Bütün kurallar `CLAUDE.md`'de; burada sebepleri ve uygulamada öğrenilenler var.

### 2.1 Her resimde
1. **İstem dosyasının Kontrol satırı.** Resme özgü en riskli noktaları istemi yazan belirliyor. Önce bunlara bak.
2. **Kimlik.** Yüz, saç ve kıyafet referansla aynı olmalı. Peri'nin kaynağı L1 ve onaylı G1, Cengo'nunki C1 ve onaylı G4. Seride ölçü temel resimdir.
   *Sebep:* Varyantlar ve sahneler temelden türüyor. Temeldeki sapma bütün seriye yayılıyor.
3. **Karakter sabitleri.** Peri'nin ayakkabısı HER resimde kırmızı stiletto; doğru örnek onaylı G49. Siyah ya da başka renkse ret.
   *Sebep:* G63 ve G65 siyah stilettoyla geldi. Sahibi bunu karakter sabiti yaptı. Kural CLAUDE.md'ye 2026-11-04'te eklendi.
   Kural eklenince eski onaylıların hepsine geriye dönük bakıldı:
   - G2, G25 ve G55: kırmızı, kaldı.
   - G1, G3, G19–G24 ve G26–G29: ayaklar kadraj dışında.
4. **Yüz ¾ dönük, İKİ göz görünür, profil değil.** Burun istemin dediği yöne baksın; kalıp "burun kadrajın soluna".
   *Sebep:* G4 ilk geldiğinde neredeyse profildi: uzaktaki göz burun kemerinin arkasında kalmıştı.
   G50'de Peri'nin yüzü profile yakındı ve gözlük gözüne inmişti. Afişteki yüzle tanındığı için onaylandı ve sahibine bildirildi.
5. **Eller.** İki kol, iki el, beşer parmak olmalı; kaynaşmış ya da fazla parmak yok.
   *Sebep:* G58'de Gizem'in üç kolu vardı. Kalabalık sahnelerde kolları kişi kişi say.
6. **İstemde olmayan nesne, yazı, harf, rakam, logo ya da filigran YOK.**
   *Sebep:* Küçük boyutta görünmüyorlar ama büyütünce çıkıyorlar. Örnekler: G14 hesap makinesi tuşlarında rakam ve fazladan şapka, G44 monitör çerçevesi ve kayıt cihazında logo izi, G51 Peri'nin omzunda zincirli çanta.
7. **Kadraj ve oran istemdeki gibi.** Figürlerde uyluk ortasından yukarısı ve düz açık bej zemin. Afişte alt %20 boş.
   Boyutu dosya başlığından doğrula. Doğru değerler: 4:5 → 1122×1402, 3:4 → 1086×1448, 9:16 → 941×1672.
8. **Tarz öbür onaylılarla aynı.** Yarı gerçekçi boyalı illüstrasyon olmalı; anime, 3D ya da fotoğraf değil.
   *Sebep:* G5 (unlu Cengo) ilk üretimde fotoğrafa kaydı.
9. **Çıplaklık yok; kumaşın altından meme ucu belirmesi de ret.**
   *Sebep:* Cazibe istenebilir, çıplaklık asla. Gizem'in beyaz dar tişörtünde meme ucu izi defalarca çıktı.
   Bunu ilk kez sahibi yakaladı: G40, G41, G42 ve G56'yı ben onaylamıştım. Sahibi "reddet" dedi ve bu madde o zaman kuruldu.
   Şüpheli yeri mutlaka büyüterek bak.
10. **Fiziksel olabilirlik.** Oturan ya da dayanan figürde bacaklar nereye iniyor, mobilyanın içinden veya arkasından geçiyor mu, dirsek gerçekten masada mı, bunlara bak.
    *Sebep:* G63'te Gizem'in bacakları pervazın arkasına (kalorifer ile duvar arasına) girmişti, Peri'nin dirseği de havadaydı.
    Ben onaylamıştım, sahibi yakaladı. Onay geri alındı ve resim ret gibi işlendi.
11. **Sayım.** İstemde "TAM n kişi" yazıyorsa kişileri say. Aynı karakter bir sahnede iki kez görünmemeli.
12. **Mantık ve hikâye.** Kapalı dükkânda ateş yanmaz (G43). Sahnenin istediği ışık ve saat doğru olmalı (G51 sabah istiyordu, gün batımı gelmişti).

### 2.2 Yöntem
- Resmi önce bütün olarak gör. Sonra şüpheli bölgeleri 2–4 kat büyüterek incele: tişört ve göğüs, cihaz ekranı, tuşlar, çerçeveler, çuvallar, tabelalar, eller, ayaklar ve ayakkabılar, kadraj kenarları.
  Küçük boyutta görünmeyen ret sebeplerinin hepsi büyütünce çıktı: G14'teki rakamlar, G44'teki logo, G56 ve G67'deki meme ucu.
- Kırpma ve büyütme scripti (PowerShell, System.Drawing). Çalıştırma:
  `powershell -NoProfile -ExecutionPolicy Bypass -File crop.ps1 <kaynak> x y w h <çıktı.png> 3`
  ```powershell
  param([string]$src,[int]$x,[int]$y,[int]$w,[int]$h,[string]$out,[double]$scale=2)
  Add-Type -AssemblyName System.Drawing
  $img=[System.Drawing.Image]::FromFile($src)
  $bmp=New-Object System.Drawing.Bitmap ([int]($w*$scale)),([int]($h*$scale))
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode='HighQualityBicubic'
  $g.DrawImage($img,(New-Object System.Drawing.Rectangle 0,0,$bmp.Width,$bmp.Height),(New-Object System.Drawing.Rectangle $x,$y,$w,$h),'Pixel')
  $bmp.Save($out,[System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose();$bmp.Dispose();$img.Dispose()
  ```
  Bu scriptte iki tuzak var:
  - `-ExecutionPolicy Bypass` olmadan çalışmıyor.
  - `param` satırı tiplenmezse Bitmap kurucusu "ambiguous overloads" hatası veriyor.
- `.webp` System.Drawing ile açılmıyor. WPF ile açılıyor: `Add-Type -AssemblyName PresentationCore,WindowsBase` + `BitmapDecoder`; kırpmak için `CroppedBitmap` + `JpegBitmapEncoder`. PIL kurulu değil.
- Birden çok resmi karşılaştırmak için temas sayfası işe yarıyor: hepsini küçültüp tek resimde yan yana koy, adlarını altına yaz.

### 2.3 Karar kuralları ve sebepleri
- **Onay:** `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>`. Buna bağlı resimlerin önü açılır, çünkü Codex yalnız `onayli/`'yi referans alır.
- **Ret:** `prompts/G<n>.md` sonuna `## Düzeltme <k>` eklenir. Not tek-iki cümle olur ve yalnız NE değişeceğini söyler; bir sonraki `üret`te istemin sonuna aynen eklenir.
  Resim `red/G<n>_red<k>`'ya taşınır.
  - **Ad çakışması:** Önce `red/G<n>_red<k>` var mı bak. 2026-11-04'te G8_red1 ve G14_red1 yamadan önceki eski resimlerin üzerine yazıldı. Varsa bir sonraki boş k'yı kullan.
- **Aynı resim 3. kez reddedilecekse dur, sahibine sor.** Bu G67'de iki kez işletildi:
  - Sahibi 3. düzeltmeyi kendisi verdi: "Gizem kolları kavuşuk".
  - 4. düzeltmede "bir kere daha üretelim" dedi ve simidin konumunu ekletti.
  - G44 ile G56 2. retten sonra 3. üretimde temiz geldi.
- **Emin değilsen onaylama.** Resmi ve kuşkunu sahibine söyle. Örnekler:
  - G50'deki profile yakın yüz onaylandı, sahibine "bir göz at" denildi.
  - G18'de sokağın ucundaki seçilmeyen insan lekeleri onaylandı, rapora yazıldı.
  - G6'da bastonun ucu kadraj dışında kalmıştı ("yere değmiyor" maddesi kontrol edilemedi); onaylandı ve bu not edildi.
- **Sahibi onaylı bir resimde hata bulursa** onay geri alınır ve resim ret gibi işlenir (G40–G42, G56, G63).
- Web'den gelen resmi reddedersen sahibine söyle: web'de yeniden yapacak.
- **Sondaki rapor:** kısa tablo (onaylanan / reddedilen ve nedeni / web'de yapılacak), ardından "Codex'e `üret` yaz".
  Sahibi "ne kaldı" diye sorduğunda bağımlılık zincirini göster: hangi resim hangi onayı bekliyor.

### 2.4 Şerit (`referanslar/serit_susam_dortlu.jpg`)
- Şerit onaylı G6, G7, G8 ve G9'dan (Nadide, Ferruh, Kenan, Gizem) yapılır. Dört resim aynı yüksekliğe (900 px) getirilir, soldan sağa yan yana konur, aralarına 24 px zemin rengi bırakılır.
  Dördü YENİDEN onaylanınca şerit yenilenir. Vaka 3'te G8 onaylanınca bir kez yenilendi.
- Zemin rengi G6'nın sol üst köşesinden alınır. G9 `.webp` olduğu için WPF kullanıldı:
  ```powershell
  Add-Type -AssemblyName PresentationCore,WindowsBase
  $d='D:\Yazilim\chatcpt-resim\v3'
  $files='G6.png','G7.png','G8.png','G9.webp' | % { Join-Path "$d\onayli" $_ }
  $H=900;$gap=24
  $bmps=@()
  foreach($f in $files){ $s=[IO.File]::OpenRead($f); $dec=[Windows.Media.Imaging.BitmapDecoder]::Create($s,'PreservePixelFormat','OnLoad'); $fr=$dec.Frames[0]; $s.Close()
   $sc=$H/$fr.PixelHeight; $t=New-Object Windows.Media.Imaging.TransformedBitmap($fr,(New-Object Windows.Media.ScaleTransform($sc,$sc))); $bmps+=$t }
  $c=New-Object Windows.Media.Imaging.FormatConvertedBitmap($bmps[0],[Windows.Media.PixelFormats]::Bgra32,$null,0)
  $px=New-Object byte[] 4; $c.CopyPixels((New-Object Windows.Int32Rect(5,5,1,1)),$px,4,0)
  $col=[Windows.Media.Color]::FromRgb($px[2],$px[1],$px[0])
  $W=($bmps|%{[int]$_.PixelWidth}|Measure-Object -Sum).Sum + $gap*3
  $dv=New-Object Windows.Media.DrawingVisual; $dc=$dv.RenderOpen()
  $dc.DrawRectangle((New-Object Windows.Media.SolidColorBrush($col)),$null,(New-Object Windows.Rect(0,0,$W,$H)))
  $x=0; foreach($b in $bmps){ $dc.DrawImage($b,(New-Object Windows.Rect($x,0,$b.PixelWidth,$H))); $x+=$b.PixelWidth+$gap }
  $dc.Close()
  $rt=New-Object Windows.Media.Imaging.RenderTargetBitmap($W,$H,96,96,[Windows.Media.PixelFormats]::Pbgra32); $rt.Render($dv)
  $e=New-Object Windows.Media.Imaging.JpegBitmapEncoder; $e.QualityLevel=95; $e.Frames.Add([Windows.Media.Imaging.BitmapFrame]::Create($rt))
  $o=[IO.File]::Create("$d\referanslar\serit_susam_dortlu.jpg"); $e.Save($o); $o.Close()
  ```
- Şerit G52 ve G67'de kullanıldı. G52 eski şeritle üretilmişti, ama yeni G8 eski Kenan'a çok benzediği için etkilenmedi.

---

## 3. Codex'le çalışırken öğrenilenler

### 3.1 Ayarlar
- Araç: `image_gen.imagegen` (çağrı adı `tools.image_gen__imagegen`). Araç alttaki modelin adını ve sürümünü bildirmiyor; model parametresi gönderilmedi.
- Ayrı `size` ya da `quality` parametresi yok; boyut istem metninin son satırında yazıyor. `transparent_background=false`.
  Çıkan boyutlar istemdekilere uydu: 1122×1402, 1086×1448, 9:16 afiş.
- Codex istemi aynen gönderdi: kod bloğu çitleri yok, son satır sonu yok, `## Düzeltme`'ler sırayla sona eklenmiş. Kayıtta bunu her satırda belirtti.
- Referanslar sırayla ve tam yolla verildi. Sıra önemli, çünkü istem "birinci referans, ikinci referans…" diye konuşuyor.

### 3.2 Hatalar ve çözümleri
| Sorun | Sebep | Çözüm |
|---|---|---|
| Codex "üret"i genel bir istek sandı | Codex'te açık proje bir üst klasördü (`chatcpt-resim`); `AGENTS.md`'yi yalnız proje kökünde arıyor | Codex'te proje olarak tam `...\v3` klasörünü aç, yeni sohbet başlat. Kontrol için önce "AGENTS.md kurallarını özetle" yaz. |
| Codex 14 resmi atladı | AGENTS.md'de `onayli/` için "Referans olarak YALNIZ buradakileri kullan" yazıyordu; Codex bunu `referanslar/` yasak diye okudu | Satır şöyle düzeltildi: "`referanslar/`: istemin listesinde geçiyorsa KULLAN (serbest)". Ayrıca "önceki G resimlerinden YALNIZ onayli/" dendi. **Ders: "yalnız" kelimesini kapsamı belli olmadan kullanma.** |
| G64 engellendi ama yeniden denenmedi | O sırada "engellenirse bir kez daha dene" kuralı yoktu | Kural (AGENTS.md 6. madde) sonradan eklendi. G63 ve G67 o kuralla 2. denemede geçti. |
| Codex AGENTS.md'nin sonuna kendi notunu ekledi | İzin hatası alınca kendine not düştü | Not silindi, kural 8. maddeye kondu. Codex talimat dosyasına yazmamalı. |
| Codex her resimde 5–12 dk bekledi | §3.4 | §3.4 |
| Beğenmediğini yeniden üretme eğilimi | — | AGENTS.md'de: "Beğenmesen de yeniden üretme; onayı yerel Claude verir." |

### 3.3 Atlama ve bağımlılık
- Codex referans listesindeki bir `onayli/G<k>` yoksa resmi atlıyor. Bu yüzden ilk turlar kısmi oluyor. Temel bir resim (G4, G5, G8, G10, G43, G44) reddedilince ona bağlı resimler bir tur daha bekliyor.
- G5 iki kez reddedildi ve beş resmi (G33, G34, G35, G54, G57) bekletti. **Ders: önce temelleri ürettir ve onayla, sonra varyantları.**
  Sahibi "üret" dediğinde hiçbir resim hazır değilse bunu söyle ve önce "kontrol et" iste.
- Kural: `uretilen/` ve `red/` asla referans olmaz.
- Codex tur sürerken resimleri tek tek `uretilen/`'e bırakıyor. "kontrol et" Codex çalışırken de yapılabilir. Erken onaylanan temel, bir sonraki turda bağlı resimlerin önünü açar.

### 3.4 Yavaşlama ve izinler (önemli)
- Belirti: resim başına süre 16:21'den sonra ~1 dk'dan 5–12 dk'ya çıktı. Codex'in kendi ölçtüğü üretim süresi hâlâ 40–120 sn'ydi; aradaki fark bekleme süresiydi.
- Sebep: Codex `uretim_kaydi.md`'ye bir kez yükseltilmiş izinle yazıp dosyayı yeniden oluşturmuştu. Dosyanın sahibi `CodexSandboxOffline` oldu ve korumalı alan izinlerini kaybetti. Ardından Codex her kayıtta yükseltilmiş izin istedi ve onay bekledi.
- `icacls` ile düzeltme denendi: "Access is denied". Dosyanın sahibi Codex hesabıydı.
- Çözüm (yönetici gerekmedi): dosya kopyalandı, eskisi silindi, kopya aynı adla yerine kondu. Sahip `BG` oldu, izinler klasörden miras geldi, içerik doğrulandı.
- AGENTS.md 8. maddeye kural eklendi: "Kayda NORMAL izinle, dosyanın sonuna ekleyerek yaz (silip yeniden oluşturma). Yazamazsan yükseltilmiş izne geçme; satırı `kayit_bekleyen.md`'ye yaz."
- Yeniden yavaşlarsa önce `Get-Acl uretim_kaydi.md` ile dosyanın sahibine bak.
- Sahibine not: terminalde Ok tuşu komutu yalnız kutuya getirir; çalıştırmak için Enter gerekir.

### 3.5 Üretim kaydı (`uretim_kaydi.md`)
- Her çağrıda (engel, hata ve yeniden deneme dahil) bir satır yazılır. Sütunlar: G | araç/model | TAM istem (`<br>` ile) | referanslar ve sırası | boyut/kalite | istem aynen mi alındı | sonuç.
  Bu kayıt engel analizini mümkün kıldı (§4).
- Dosya büyüyor (Vaka 3 sonunda ~190 KB). Okurken sütun ayıklayarak oku.
- Codex tur sonunda `uretim_ozeti*.md` ve `referans_bekleyenler.md` gibi özet dosyaları da yazdı. Bunlar zararsız ama talimatta yoktu.

### 3.6 "dene" komutu (karşılaştırma denemesi)
- Web'de yapılmış resimlerin Codex'te üretilip üretilemediğini sınamak için eklendi. Çıktı `deneme_codex/G<n>.png` (varsa `_2`, `_3`). `uretilen/` ve `onayli/`'ye dokunmaz, `## ENGELLENDİ` yazmaz, kayıtta sonuç "DENEME:" diye başlar.
- Deneme kopyaları `deneme_codex/prompts/`'ta, dekoltesiz referanslar `deneme_codex/referanslar/`'da. Test bitti (G1, G2, G9). v4'te gerekmiyor.

---

## 4. Güvenlik filtresi

### 4.1 Engellenen çağrılar
| G | Ne zaman | Sonuç | Mesaj |
|---|---|---|---|
| G64 | `üret`, 1. deneme | Yeniden denenmedi (kural yoktu) → web'de yapıldı, onaylandı | `HTTP 400 moderation_blocked; safety_violations=[sexual]; moderation_stage=output` |
| G63 | `üret` (Düzeltme 2 ile), 1. deneme | 2. denemede üretildi | "Your request was rejected by the safety system" |
| G67 | `üret` (Düzeltme 1–3 ile), 1. deneme | 2. denemede üretildi | aynı |
| G1 | `dene` ×7 | Ayrıntı §4.2'de; 7. denemede üretildi | aynı |
| G2 | `dene` ×4 | Ayrıntı §4.2'de; 5. denemede üretildi | aynı |

Filtre aşamasının **output** olması önemli: istem metni geçiyor, üretilen resim takılıyor. Resim referanslara benzedikçe onların dekoltesini taşıyor.

### 4.2 Nedeni bulma deneyi (G1, G2, G9)
Sahibinin yöntemi: kafadan değiştirme. Codex'in geçirdiği ve engellediği istemleri karşılaştır, ortak yanı bul, sonra dene.
Bizim reddettiğimiz (üretilmiş ama sorunlu) resimler bu karşılaştırmaya katılmadı; ölçüt yalnız Codex'in engellemesiydi.

| Deneme | Referanslar | Metin | Sonuç |
|---|---|---|---|
| G1 asıl | L1 (göğse kadar açık gömlek), peri_beden (derin dekolte), L14 (dekolteli trençkot), stiletto (dekolteli) | "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı…" | 0/2 |
| G1 tur 1 | aynı 4 | Çekicilik satırı yumuşatıldı: "zarif, kendinden emin, eski film yıldızı havası" | 0/2 → **metin sebep değil** |
| G1 tur 2 | İlk ikisi dekoltesiz: L1'in yalnız çeneden yukarısı + tarz_govde_kadin (kapalı). L14 ve stiletto duruyor (ikisi de dekolteli). | asıl | 0/2 → **dekolteli tek referans bile yetiyor** |
| G1 tur 3 | YALNIZ iki referans: yalnız yüz + tarz_govde_kadin. Trençkot ve stiletto metinde tarif edildi. | asıl | 2. denemede ✅, kalite onaylanabilir |
| G2 asıl | onayli/G1 (dekolteli) | "seksi" | 0/2 |
| G2 tur 1 | aynı | Çekicilik satırı yumuşatıldı | 0/2 |
| G2 tur 3 | onaylı G1'in yalnız baş kırpığı + tarz_govde_kadin | Kıyafet metinde, dekolte yazılmadı | 1. denemede ✅, ama dekolte kapalı çıktı; sahibi beğenmedi |
| G2 tur 4 | aynı | "vücudu saran kısa siyah elbise, derin V dekolteli" eklendi; "en üst seviyede seksi" duruyor | 1. denemede ✅, dekolte istendiği gibi |
| G9 | tarz_govde_kadin (kapalı, başı silik) | "vücudu saran… göbeği açıkta, derin yuvarlak yakalı… çok çekici… kıvrımlı" | 1. denemede ✅ |

**Sonuç:**
1. Engelin asıl sebebi **referans resimdeki görünür dekolte**. Metindeki "seksi", "dekolte", "vücudu saran" ve "çekici" kelimeleri tek başına engel sebebi değil.
2. Bir tane dekolteli referans bile yetiyor. Referansların HEPSİ dekoltesiz olmalı.
3. Referanstan çıkarılan her kıyafet ayrıntısı, dekolte dahil, metne yazılmalı. Yazılmazsa resimde çıkmıyor.
4. Filtre sınırda: G1 tur 3 ve G63/G67 ancak 2. denemede geçti. G64'ün istemi geçen G63, G65 ve G66 ile neredeyse aynıydı; ortak sebep bulunamadı. Bu yüzden iki deneme kuralı şart.
5. Vaka içinde onaylı Peri resimleri (G1, G2, G3; dekolteli) sahne referansı olarak kullanıldı ve G49–G67'nin çoğu yine geçti. Yani tek bir dekolteli referans her zaman engellemiyor, ama riski artırıyor.
   v4'te sahnelerde de baş kırpığı ve kapalı gövde kullanılması güvenli yol.

### 4.3 v4 kararı (sahibi, 2026-11-04)
"Kesin web" yolu yok. Her resim önce Codex'te iki kez denenir. Yalnız iki denemede de engellenen web'e gider.

---

## 5. Resim resim ret ve engel geçmişi

Burada yalnız sorun çıkanlar var. Geri kalanlar ilk üretimde onaylandı: G10, G11, G15, G16, G17, G18, G30–G39, G45–G48, G50, G52–G55, G57, G59–G62 ve G66.
Eski web resimleri (G1–G3, G9, G19–G29) baştan onaylıydı. G49 web'de yapıldı ve ilk gelişte onaylandı.

| G | Ret | Sebep (sırayla) | Sonunda ne düzeltti |
|---|---|---|---|
| G4 Cengo temel | 1 | Neredeyse profil, uzaktaki göz görünmüyor | "üç çeyrek, İKİ göz de açıkça görünsün (burun yine soluna)" |
| G5 Cengo unlu | 2 | 1) Fotoğraf gibi, un gri · 2) Saç gri-kır (yaşlı duruyor), kaşlar unsuz koyu | "saç, kaşlar, sakal ve yüz kalın, bembeyaz bir un tabakasıyla kaplı; yüz yine Cengo, genç" |
| G6 Nadide, G7 Ferruh, G12 Sedat, G13 Ayla | (yama) | Eski istemle üretildiler; tarz yaması gelince denetlenmeden atıldılar | Yamayla 2. referans eklendi: onaylı G1/G4 "YALNIZ bitmiş çizim tarzı örneği (kişi, kıyafet, poz alınmaz)". Hepsi ilk üretimde onaylandı. |
| G8 Kenan | yama + 1 | Sol gözün altında darbe izi gibi mor morluk ("yorgun göz" isteğinden) | "yorgunluk yalnız iki gözün altında hafif koyu halka; morluk ya da yara yok" |
| G14 Rüstem | yama + 1 | Hesap makinesi tuşlarında rakam; istemde olmayan şapka | "tuşlar düz, işaretsiz; şapka YOK, sağ el boş, göğsünde" |
| G40, G41, G42 Gizem | 1'er | Tişörtün altından meme ucu (önce ben onaylamıştım, sahibi yakaladı) | "Tişört kalın kumaş; altından meme ucu belirmiyor." 1 düzeltmede tuttu. |
| G43 Susam akşam | 1 | Tek lamba istenmişti, üç ışık yanıyordu; kapalı dükkânda ocakta ateş ve buhar | Hangi lambanın yanık, hangisinin sönük olduğu tek tek yazıldı; "ateş ve buhar YOK" |
| G44 ofis | 2 | 1) Monitör çerçevesinde logo izi · 2) Monitörde ve kayıt cihazında hâlâ logo; monitör cihazın yanındaydı | "ikisi de tamamen düz siyah, hiçbir işaret yok; monitör kayıt cihazının ÜSTÜNDE" |
| G51 apartman önü | 1 | Peri'nin omzunda istemde olmayan zincirli çanta; ışık gün batımı | "çanta YOK; ışık sabah, gün batımı değil" |
| G56 tabla | 2 | 1–2) Gizem'in tişörtünde meme ucu | "kalın, mat kumaş"; 3. üretimde temiz (büyütüp bakıldı) |
| G58 önlük | 1 | Gizem'in ÜÇ kolu | Her elin işi ayrı yazıldı: "bir eli önlüğü uzatıyor, öbür eli susamı ağzına götürüyor" |
| G63 kapanış, düşük bağ | 2 (+1 engel) | 1) Peri'nin stilettosu siyah · 2) Gizem'in bacakları pervazın arkasında (sahibi yakaladı), Peri'nin dirseği havada | "pervazın ön kenarında, bacakları kaloriferin ÖNÜNDE"; "dirseği açıkça masanın üstünde". Düzeltme 2'li ilk çağrı engellendi, 2. denemede geçti, onaylandı. |
| G64 kapanış, yüksek bağ | engel | Codex engeli (sexual, output) | Web'de yapıldı, onaylandı |
| G65 kapanış afiş | 1 | Peri'nin stilettosu siyah | "Peri'nin ayakkabıları kırmızı stiletto." |
| G67 kart afişi | 4 (+1 engel) | 1) Ön ikilinin ayakları alt %20'ye inmiş, Gizem'in tişörtünde iz · 2) Tişört izi hâlâ var · 3) (sahibine soruldu) Tişört izi + Peri'nin ayak ucu alt %20'de · 4) (sahibi "bir kere daha" dedi) Peri'nin ayakkabısı hâlâ alt %20'de, simit ağza çok yakın | Tişört: "Gizem kollarını göğsünün üstünde KAVUŞTURMUŞ" (sahibinin fikri) çözdü. Kadraj: "kişiler daha küçük ve kadrajda daha yukarıda, ayakkabı dahil" çözdü. Simit: "başının epey yukarısında". 5. üretim onaylandı. |

---

## 6. İstem kalıpları

### 6.1 İşe yarayanlar
- **Tarz paragrafı** her istemin başında olmalı:
  > Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.
- **Yeni karakter** için referans olarak başı silinmiş tarz gövdesi (`tarz_govde_*`) ver ve şunu yaz:
  > Referans görsel YALNIZ çizim tarzı, renk, ölçek, kadraj ve arka plan içindir. Başı bilerek silindi: yüzü sıfırdan, aşağıdaki tarife göre çiz; referanstaki kişinin bedenini, kıyafetini ve POZUNU alma. Bu yepyeni, kimseye benzemeyen bir kişi.

  Tarz yamasından sonra 2. referans olarak bir onaylı temel eklendi: "YALNIZ bitmiş çizim tarzı örneği (kişi, kıyafet, poz alınmaz)". Böylece yeni karakterler serinin tarzına oturdu.
- **Varyant:**
  > Birinci referans görseldeki X'in AYNISI: aynı yüz, saç, kıyafet ve takılar. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj. Değişen tek şey poz ve ifade.

  Poz için 2. referans: `poz_*.jpg` "YALNIZ poz".
- **Her figürde sabit satırlar:**
  - "Poz: TAM İKİ KOL, İKİ EL." ve ardından her elin ne yaptığı ayrı ayrı.
  - "Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor; yüzü üç çeyrek. Kameraya bakmıyor."
  - Kadraj satırı: "DİKEY … uyluk ortasından yukarısı, başın tepesi aynı yükseklikte … düz, tek renk açık bej; hiçbir nesne yok."
- **Sahnelerde:**
  - "Kadrajda TAM n kişi."
  - Her kişi için parantez içinde referans numarası ve kıyafet özeti. Örnek: "Peri (ikinci referans; kısa bej trençkot kemeri bağlı, krem eşarp, güneş gözlüğü alnında, kırmızı stiletto, ÇORAP YOK)".
  - Peri'nin olduğu sahnelerde: "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde…; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor." Bu satır filtreye takılmadı.
- **Yasaklar tek tek yazılmalı.** "ÇORAP YOK", "Önlük yok", "çanta YOK", "şapka YOK", "ateş ve buhar YOK". İpucu taşımaması gereken sahnede (G67) yasaklı nesnelerin listesi verildi ve işe yaradı.
- **Cihazlar ve yazılı yüzeyler:** "tuşlar düz, işaretsiz", "çerçeve tamamen düz siyah, hiçbir işaret yok", "ekranı görünmüyor" (telefon, tablet ve hesap makinesi ekranını kameradan çevir).
- **Işık:** hangi lambanın yanık, hangisinin sönük olduğunu ve saati (sabah, akşam) açıkça yaz.
- **Konum ve fizik:** oturan figürün nereye oturduğunu, bacaklarının nereye sarktığını, dirseğinin neye dayandığını ve havadaki nesnenin başa göre konumunu yaz.
- **Kadraj sınırı:** yüzde yerine görsel tarif daha iyi tutuyor: "kişiler daha küçük ve kadrajda daha yukarıda; en öndekinin ayakkabısı dahil herkesin ayakları üst %80'in içinde".
- **Çıplaklık ve kumaş:** Gizem'in göğsünü kollar örttüğünde sorun bitti. Yalnız "kalın kumaş" yazmak yetmedi.
- **Unlu ya da kirli karakter:** "un bembeyaz, kalın tabaka; saç, kaş ve sakal dahil; yüz genç". Yazılmazsa karakter yaşlı ve gri çıkıyor.
- **Sonda her zaman şu iki satır:**
  > Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
  > Görselin oranı TAM 4:5, dikey (1122×1402). Birinci referansla aynı oran.

### 6.2 İşe yaramayanlar
| Kalıp | Neden |
|---|---|
| Çekicilik satırını yumuşatmak | Filtre metne değil referanstaki dekolteye bakıyor (0/4) |
| Yalnız "tişört kalın kumaş; meme ucu belirmiyor" | G56'da 2, G67'de 3 üretimde tutmadı. Poz değişmeden düzelmedi. |
| Genel "yazı/logo olmasın" satırı tek başına | Cihaz çerçevelerinde ve tuşlarda logo ve rakam yine çıktı; nesneye özgü cümle gerekti |
| "alt %20 boş" yüzdesini tekrar etmek | 3 üretimde ayaklar yine taştı |
| "yorgun gözler" | Model morluk çizdi |
| "Kişinin dekoltesi, vücudu saran" metni + dekolteli referans | Engel. Aynı metin kapalı referansla geçti. |
| "vücudu saran, derin yuvarlak yakalı beyaz tişört" (G9 kıyafeti) | Filtreden geçti, ama tişört izi sorunu buradan doğdu. Beyaz, dar ve ince tarif meme ucu izini çağırıyor. v4'te kalın, mat, düz renk kumaş ve göğsü örten poz kullan. |
| Referanstan dekolteyi çıkarıp metne yazmamak | Dekolte kayboldu (G2 tur 3) |

---

## 7. `referanslar/` klasörü (26 dosya)

"Dekolte" sütunu, filtre açısından ve görsel incelemeyle (2026-11-06) dolduruldu.

| Dosya | Ne | Kullanıldığı istem | Dekolte |
|---|---|---|---|
| `L1_peri_yuz.jpg` | Peri yüz portresi, krem saten gömlek göğse kadar açık | G1, G10 (afişteki yüz) | **VAR** (derin). `deneme_codex/referanslar/L1_peri_yalniz_yuz.jpg` dekoltesiz kırpığıdır. |
| `peri_beden.jpg` | Peri ayakta, saten gömlek + siyah kalem etek | G1 | **VAR** (derin) |
| `L14_peri_trenckot.jpg` | Peri, bej uzun trençkot, mavi zemin | G1 (YALNIZ trençkotun biçimi) | **VAR** (derin) |
| `peri_kirmizi_stiletto.jpg` | Peri, kırmızı kaban, saten gömlek, ayaklar görünmüyor | G1 (YALNIZ kırmızı stiletto) | **VAR** (gömlek açık). Üstelik stiletto kadrajda değil; kötü referans. |
| `L9_peri_kollar_kavusuk.jpg` | Peri, siyah V yaka elbise, kollar kavuşuk | G24 (YALNIZ poz) | **VAR** (derin V) |
| `L19_peri_yuruyor.jpg` | Peri boydan, siyah askılı kısa elbise, siyah stiletto, gri zemin | G67 (YALNIZ yürüyüş) | **VAR** (derin). Siyah stiletto, karakter sabitine aykırı. |
| `L25_peri_oturur.jpg` | Peri koltukta bacak bacak üstüne, saten gömlek, kırmızı stiletto | G49 (YALNIZ oturuş) | **VAR** |
| `poz_peri_kas.jpg` | Peri, kollar kavuşuk, kaş kalkık | G19, G26 | **VAR** |
| `poz_peri_merakli.jpg` | Peri, kırmızı kaban, parmak çenede | G23 | **VAR** |
| `poz_peri_sasirmis.jpg` | Peri, kırmızı kaban, el göğüste | G22, G27 | **VAR** |
| `poz_peri_sinirli.jpg` | Peri işaret ediyor, saten gömlek | G20, G29 | **VAR** |
| `poz_peri_utanmis.jpg` | Peri, eller önde, başı eğik | G21, G25, G28 | **VAR** |
| `aci_masanin_alti_v2.jpg` | Büro, kapıda iki kişi; masanın altında yeşil takımlı Peri çömelmiş | G66 (YALNIZ kamera açısı ve düzen) | Belirgin dekolte yok. Bacaklar açıkta, kırmızı stiletto. |
| `C1_cengo_yuz.jpg` | Cengo yüz portresi, beyaz gömlek göğse kadar açık | G4 | Erkek göğsü açık; filtre sorun çıkarmadı |
| `cengo_beden.jpg` | Cengo ayakta: kahverengi ceket, krem gömlek, kot, bileklik | G4 | Göğüs açık; sorun çıkmadı |
| `poz_cengo_gulen.jpg` | Cengo gülüyor, el açık | G31, G34 | Göğüs açık; sorun yok |
| `poz_cengo_kas.jpg` | Cengo kollar kavuşuk, kaş kalkık | G30, G33 | Göğüs açık; sorun yok |
| `poz_cengo_yumusak.jpg` | Cengo eller cepte, yumuşak | G32, G35 | Göğüs açık; sorun yok |
| `tarz_govde_kadin.jpg` | Başı silinmiş kadın gövdesi: lacivert gömlek, haki yelek, kargo pantolon, telefon | G6, G9, G13; `dene`de G1 ve G2 | **YOK**. Dekoltesiz yöntemin anahtarı. |
| `tarz_govde_erkek.jpg` | Başı silinmiş erkek: yeşil ceket, gri tişört, kot | G8, G12 | Yok |
| `tarz_govde_iri_erkek.jpg` | Başı silinmiş iri erkek: lacivert tişört, boyalı turuncu önlük, fırça | G7, G14 | Yok |
| `serit_susam_dortlu.jpg` | Onaylı G6 + G7 + G8 + G9 yan yana (Nadide, Ferruh, Kenan, Gizem) | G52, G67 | Dekolte yok, ama Gizem kısa tişörtlü ve göbeği açık |
| `buro_gunduz.jpg` | Boş büro, gündüz, kemerli pencereden İstanbul | G49, G62 | — |
| `buro_aksam.jpg` | Aynı büro, akşam, masa lambası | G63, G64, G65, G66 | — |
| `tarz_mekan_ic.jpg` | Eski dükkân içi, yarı inik kepenk, gün batımı ışığı | G10, G11, G17, G18 | — |
| `tarz_sokak.jpg` | Arnavut kaldırımlı dar sokak, gün batımı, deniz | G15, G16 | — |

`deneme_codex/referanslar/` klasöründeki iki dosya:
- `L1_peri_yalniz_yuz.jpg`: L1'in çeneden yukarısı, yaka yok.
- `G1_peri_yalniz_bas.jpg`: onaylı G1'in yalnız başı ve eşarbı.

İkisi de dekoltesiz ve v4 için örnek.

**v4 için:** Peri'nin bütün referansları (L*, peri_*, poz_peri_*) dekolteli. Yeniden yapılmalı ya da yalnız baş kırpığına indirilmeli. Poz referansları da kapalı giyimle ya da başı silik gövdeyle verilmeli.
Erkek referanslarında açık göğüs sorun çıkarmadı.

---

## 8. Bir sonraki vakada bilinmesi gerekenler

1. **Bellek klasöre bağlı.** Yerel Claude'un belleği `C:\Users\BG\.claude\projects\D--Yazilim-chatcpt-resim-v3\memory\` altında. Yeni vaka başka klasörde açılırsa bu belleği görmez.
   Bu yüzden dersler yeni klasörün `CLAUDE.md` ve `AGENTS.md` dosyalarına ve bu dosyaya yazılmalı.
2. **Sahibinin çalışma biçimi:**
   - Kısa Türkçe ister. "kontrol et" ve "üret" komutlarıyla yönetir.
   - Resimlere kendisi de bakar ve benim kaçırdıklarımı yakalar (G40–G42 ve G56'daki tişört izi, G63'teki bacaklar). Sahibi bir şey söylediğinde onu kural haline getir.
   - Değişiklikleri kafadan değil, veriye bakarak yapmak ister (§4.2).
   - Anlattığını hatırlar; yapılmış bir işi yeniden önerme. G1, G2 ve G9 denemelerini yeniden önermiştim, düzeltti.
3. **Onaylı resim biçimi:** Web'den gelenler `.webp` ya da `.jpg`, Codex'inkiler `.png`. Mümkünse hepsini `.png` tut; araç uyumu daha kolay.
4. **Temel önce:** Karakter temelleri (Peri, Cengo, yan karakterler) ve mekân temelleri ilk turda onaylanmalı. Her temel reddi bütün zinciri bir tur geciktiriyor.
5. **Kontrol satırını iyi yaz:** O resimde en çok bozulacak 2–5 şey. Vaka 3'te en sık bozulanlar:
   - Gizem'in tişörtü
   - cihazlarda logo ve rakam
   - Peri'nin ayakkabısı
   - kadraj sınırı
   - fazla uzuv
   - profil yüz
6. **Karakter sabitleri listesi CLAUDE.md'de durmalı** ve her istemde tekrarlanmalı. Vaka 3'te tek sabit Peri'nin kırmızı stilettosuydu. Diğer karakterlerde benzeri:
   - Cengo: haki ceket ve bileklik
   - Ferruh: kalem bıyık ve bordo papyon
   - Gizem: bal rengi kâküllü saç ve çil
7. **İki karakteri ayırt etmek** için istemde açıkça "X'e benzemiyor" yaz ve ayırıcı özelliği ver. Örnekler: Ferruh/Rüstem (ince bıyık / gür beyaz pala bıyık), Kenan/Sedat (dolgun sakal / sakalsız bebek yüzü). İşe yaradı.
8. **Codex'in projesi tam vaka klasörü olmalı.** Codex'i yeni sohbetle başlat. Yavaşlarsa önce kayıt dosyasının iznine bak.
9. **Talimat dosyasındaki "YALNIZ" ve "dokunma" gibi kelimelerin kapsamını açık yaz.** Codex kelimesi kelimesine uyguluyor.
10. **Web'e giden resim için** sahibine istemi ve referansları sırayla, tam yollarıyla ver (G64'te böyle yapıldı). Ürettiğini `uretilen/G<n>.png` olarak koyacak.
11. **Vaka sonunda** `prompts/LISTE.md`'deki her G'nin `onayli/`'de olduğunu say ve doğrula. Sonra sahibine "onayli/ klasörünü Claude penceresine gönder" de.
