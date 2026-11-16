# KURALLAR — TASLAK (16 Kasım 2026)

> **Taslaktır. Hiçbir belge değişmedi.** Bütün kurallar tek tabloda; tekrarlar birleştirildi. Her kuralın yanında
> nerede yazılı olduğu ve **onu hangi programın uyguladığı** var. Sahibiyle tek tek gözden geçirilecek.
> En altta iki bölüm: **çelişkiler** ve **kaynak → kural eşlemesi** (hiçbir maddenin dışarıda kalmadığının kanıtı).

## İşaretler

| işaret | anlamı |
|---|---|
| ✅ | **Program durdurur.** Kural bozulursa program hata verir, iş ilerlemez. |
| 🟨 | **Kısmen.** Program var ama ya yalnız bir kısmına bakıyor, ya yalnız uyarıyor, ya elle çalıştırılıyor, ya ölçüp kararı göze bırakıyor. |
| 🔧 | **Kodun yapısı böyle.** Oyun başka türlü davranamaz (ör. ekranda kasa yok, çünkü kodda kasa yok). |
| ❌ | **Program yok.** Kural yalnız yazılı; uygulanması hatırlamaya ve göze kalmış. |

**Önemli not:** "✅" olanlar bile **biri programı çalıştırınca** durdurur. Kapının commit'te kendiliğinden çalışması
için yazılan bağlantı (`.claude/kapi_hook.js`) **açılmamış** — `.claude/settings.json` yok (kural 174).

**Kısaltmalar (nerede yazılı):** KK = kural kitabı (`sablon/2`), OY = oyun yapısı (`sablon/1`), MS = motor sınırları
(`sablon/4`), GS = görsel sistemi (`sablon/5`), VF = vaka formu (`sablon/6`), ÜS = üretim süreci (`sablon/7`),
UC = `uretim/CLAUDE.md`, İK = `uretim/ISTEM_KALIPLARI.md`, KC = kök `CLAUDE.md`, KP = kapı (`kaynak/arac_kapi.js` K1–K13),
DV = `kaynak/DEVIR.md`, TS = `sablon/TASLAK_tekrar_onleme.md`, GSS = `kaynak/gorsel_stil_sozlesmesi.md`.

**Programlar:** Doğ = `dogrulayici.js` (K1–K19) · Kapı = `arac_kapi.js` (yalnız Vaka 6+) · İstem = `istem_kontrol.sh`
(döngü her istemi bundan geçirir) · Sızıntı = `arac_sizinti_tur.js` · Satır = `arac_satir_resim.js` · Tarz/Yüz/El =
`arac_tarz.py`, `arac_yuz.py`, `arac_el.py` · Zemin = `arac_zemin.py` · Paket = `arac_paket.js` · Derleme = `build_html.js` ·
test_* = test dosyaları.

## Özet

| | sayı |
|---|---|
| Kaynaklardaki madde (tablo satırları dahil, tekrarlarla) | ~450 |
| Birleştirilmiş kural | **198** |
| ✅ program durdurur | 30 |
| 🟨 kısmen | 51 |
| 🔧 kodun yapısı | 18 |
| ❌ program yok | **99** |
| Çelişki / eskimiş yer | 16 |

---

## 1. Metin ve ton

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 1 | Oyunun özü Peri–Cengo atışmasıdır; vaka bahanedir. | KK1 | ❌ |
| 2 | Gizem dürüsttür; oyuncuyu kandıran hile yok. | KK2 | ❌ |
| 3 | Hafif ama bedelli: bedel utanç, para, gurur ya da fırsattır; ölüm, hapis değil. | KK3 | ❌ |
| 4 | Anlatıcı yok. Sahne notu yalnız o an görüleni söyler; sonra ortaya çıkacak gerçeği yazmaz ("nereden biliyoruz?" sorusu notlara da sorulur). | KK4, KK4a, GS SR-H, ÜS | ❌ |
| 5 | Replik ilk okumada anlaşılır (kim, neyi, neden); şifreli kısa cümle yok; ~110 harfe (4 satır) sığar, uzunsa bölünür; ölçü ortalama ~50 harf. | KK5, KC, ÜS, MS7 | ❌ |
| 6 | Giriş uzun ve açık: en az 15 satır, üst sınır yok (45'i geçerse uyarı); müşteri, olay adım adım, her şüphelinin şüphe sebebi, kim neyi nereden biliyor, tehdit/kayıp açıkça, ücret, ilk gidilecek yer. Açıklık kısalıktan önce gelir; kısaltmayı sahibi yapar. | KK5c, OY Giriş 2, KC, ÜS | 🟨 Doğ K17 satır sayısını durdurur; açıklık göze kalmış |
| 7 | Giriş: büroda geçer; müşteri kim/ne kaybetti/ne istiyor; en az bir şüpheli adıyla; ücret konuşulur; Peri'nin kıyafeti ilk kez görünür (çekicilik anı); bir espri; suçlu ele verilmez; ipucu bilgisi önceden söylenmez; iş kabul edilir, ilk yer belli olur. | OY Giriş 1,3,4,5, MS K17, ÜS, VF3 | 🟨 Doğ K17: büro, şüpheli adı, ücret, ipucu anahtar kelimesi ✅; dolaylı ele verme, çekicilik, espri, bitiş ❌ |
| 8 | Saat "kala" ile geriye sayılmaz ("sekiz on beşte"); cihazdan okunan saat ekrandaki gibi; yazılı yüzeyde rakam ("22.46"). | KK5b, ÜS | ❌ |
| 9 | Tekrar eden şaka her dönüşte bir basamak büyür; aynı kurulum iki kez gelmez; sahnede en çok 4 replik; kapanış ona dönebilir. | ÜS | ❌ |
| 10 | Bulanık replik taraması: kime, neyi ("o, bu" belli mi), espri kurulumu önce mi, cevap sorudan sonra mı, karakterin niyeti belli mi. | ÜS | ❌ |
| 11 | Hikâyeye/kanona yeni ayrıntı eklemek sahibinin işidir: önce nereye ne ekleneceği söylenir, onay alınır. Düzeltme yalnız netleştirmedir. İstemde de hikâyede olmayan ayrıntı yok. | KC, ÜS, UC istem 6 | ❌ |
| 12 | Dördüncü duvar seyrek: ilk vakalarda yok, sonra vaka başına en çok bir kez, yalnız Cengo. | KK13, kanon | ❌ |
| 13 | Ton harmanı (sezon): 1–2 garip vaka, 2–3 vakada garip öğe, gerisi gerçekçi; iki garip vaka yan yana gelmez; aynı garip öğe iki kez kullanılmaz. | **yalnız TS §5** | ❌ |

## 2. Peri, Cengo, dönen figürler

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 14 | Peri (37): kurala bağlı, kitap gibi konuşur, yalanı okur; dırdırcı değil; güzel ve çekici. | KK6 | ❌ |
| 15 | Cengo (34): içgüdüyle hareket eder, herkesin bir "adamı" var, insanlar ona açılır; soytarı değil; görünüşü sabit. | KK7 | ❌ |
| 16 | Atışma: son söz sırayla; her vakada ikisi de en az bir kez "kaybeder"; kavga işin üstünde, kişiliğin değil. | KK8 | ❌ |
| 17 | İkisi de gerekli: bazı ipuçlarını Peri'nin yolu, bazılarını Cengo'nun yolu açar. | KK9, VF6 | ❌ |
| 18 | Kavuşmazlar; yakınlık eylemde (bakış, yarım laf, uzatılan ceket). | KK10 | ❌ |
| 19 | Cengo bağının değeri görünmez: sayı, çubuk, alev, söz yok; seçeneğin altında Cengo'nun tavrı yok. | KK11, KK22a | 🔧 yeni arayüzde gösterge yok (eski oyunda 5 alev bilerek kaldı — çelişki 12) |
| 20 | Bağ kapanışta görünür: 2–3 replik iki hâlde (soğuk/sıcak); eşik +1. | KK12a, MS, VF13 | 🔧 motor iki hâli destekliyor; yazılıp yazılmadığına bakan yok ❌ |
| 21 | Sıcaklık onay değildir: bağ yükseldikçe kirli karar daha çok kırar. Cengo satırı kararın ÖNCESİNDEKİ bağa bakar; varyant sırası azalan eşik, sonda `varsayilan`. | KK12, KC | 🟨 Doğ K13 sırayı ve varsayılanı durdurur (eski oyun); anlam ❌ |
| 22 | Cengo'nun tepkisi ahlaka değil duruma göredir; dört karar satırı yan yana "doğru cevap" vermez. | KK23, VF12, KK26 | 🟨 Doğ K8 baskın kararı yalnız uyarır |
| 23 | Dönen figür her dönüşte farklı bir hâlde gelir; üst üste iki vakada görünmez (Gizem hariç). | **yalnız TS §6** | ❌ |
| 24 | Her yeni vakanın formunda sahibine "Bu vakada hayvan görünsün mü?" diye sorulur. | **yalnız TS §6** (belgelere işlenmedi) | ❌ |

## 3. İçerik sınırları

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 25 | Siyaset yok; devlet, kurum, siyasi makam, gerçek kişi espri konusu olmaz, adı geçmez. | KK14, kanon | ❌ |
| 26 | Peri seksi ve çekici: izin verilen en yüksek seviye; kovalamacada erotik + gülünç aynı karede; yeni resim eski onaylılardan sönük değil. | KK15, OY, VF11, UC A15, İK §9 | ❌ |
| 27 | Peri her zaman en gösterişli kadındır; başka kadınla aynı karede açıkça daha alımlı. | KK15b, İK §8 | ❌ |
| 28 | Her vakada Peri ve Cengo yeni kıyafet giyer (V1 temel kıyafet); kovalamacadaki felaket kıyafeti de yeni; kıyafet kütüphanesi tutulmaz. | KK15a, VF14, ÜS | ❌ |
| 29 | Çıplaklık yok, cinsel eylem yok; reşit olmayan hiç kimse (Eylül dahil) bu çerçeveye girmez, hep masum çizilir. | KK16, kanon, OY, UC A8 | 🟨 İstem "Çıplaklık yok" satırını arar (figürde); resim göze kalmış |
| 30 | Suç olur, vahşet olmaz: ölüm sahnelenmez, yas merkezde durmaz. | KK17 | ❌ |
| 31 | Hakaretin yönü yukarıdır; zayıf, yoksul, hasta şakanın hedefi olmaz. | KK18 | ❌ |
| 32 | Mavi Ay'dan yalnız yapı alınır (ad, replik, sahne yok). | KK19 | ❌ |
| 33 | Sigara yok: metin, sahne notu, ipucu, olgu, ifade adı, istem, resim; "mola" anı sigarasız kurulur. | KK19a, GS A ve E13, UC, ÜS, VF | 🟨 İstem ✅ durdurur; **metinde ve resimde program yok** ❌ |
| 34 | Kovalamacada acı, tehlike, aşağılanma yok. | OY, İK §9 | ❌ |

## 4. Bilgi — Nurcan kuralı (sızıntı)

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 35 | Oyuncu hak etmediği bilgiyi hiçbir yerden almaz: metin, görsel, defter, espri, ipucu adı, künye, zincir, kart. | KK20, KC | 🟨 Doğ K1, K10 ✅; test_sizinti ✅; Sızıntı turu çıkış 1 ✅; anlamsal okuma elle |
| 36 | Oyun cevabı söylemez; defter/çıkarım yalnız ara bulgu yazar, suçluyu asla. | KK21, KK21a, OY, VF8, MS | 🟨 tahta aracı basar, göz okur |
| 37 | Hiçbir ipucu suçluyu tek başına göstermez; suçlu en az iki ipucuyla bulunur. | KK21c, OY, VF19 | ✅ Doğ K19 |
| 38 | Anı özeti (2–3 cümle) yalnız her yolda oynayan itirafın söylediğini yazar. | KK21d, OY, VF12, KC | 🟨 varlığı ✅ (test_yeni_arayuz); içerik ❌ |
| 39 | Kilit açarak bulunan kanıt Kim yaptı?'da geçerli; mahkeme yalnız espri. | KK21b | 🔧 |
| 40 | Suçlamadan sonraki her metin (Cengo kanıt satırı, Dosya kapandı kartı, MASUM satırları, SONUÇ, ÖNİZLEME) yalnız oyuncunun ELİNDEKİ kanıtı ve her yolda oynayan sahneleri anar; açılmamış ipucu anılmaz. | KK22c, OY, KC, ÜS | 🟨 cozumYolu + test_yeni_kimyapti ✅; Sızıntı turu ✅; metinlerin anlamı elle |
| 41 | İpucu adı açıktır; açılmadan önce oyuncunun bildiğinden fazlasını söylemez (yeni ad, yer, nesne yok). | OY, MS | 🟨 Doğ K18 özel isimleri durdurur; anlam ❌ |
| 42 | Kim yaptı? kısa kanıt adı olgunun metninden fazlasını söylemez; en çok 32 harf. | KC | 🟨 Doğ K19 uzunluk ✅; anlam ❌ |
| 43 | Künye katmanı koşulunun garanti ettiğinden fazlasını söylemez; künye yalnız içinde bulunulan vakanın kişilerini gösterir. | KC, VF16 | 🟨 Doğ K1b koşulu ✅; metni künye aracı basar, göz okur |
| 44 | Zincir defteri: yalnız hak edilmiş düğüm; "?" kutusu, "şu da lazım" yok; sayaç yok; her çıkarımın başlığı var. | KC, OY | ✅ test_tahta, Doğ K12 (başlığın anlamı tahta aracıyla elle) |
| 45 | Olgu adları vakalar arasında benzersizdir. | KC | ✅ Doğ K11 |
| 46 | Görsel de sızdırmaz; görsel eksik gösterebilir, YANLIŞ gösteremez (gizlenecek ayrıntı kadraj dışında, silinmez); yazı taşıyan nesnenin yüzü kapalı. | GSS §7, 7b, 7c, KC, GS E8, ÜS | ❌ |
| 47 | Paylaşım kartına suçlu, karar, suçlama, not girmez; afiş ipucusuz (tanık ve sır taşıyan girmez). | KC, GS G | 🟨 kartın yazısı 🔧; afiş resmi göze kalmış |
| 48 | Eski oyun: `ceyda_pay`, `sevil_pay` hiç çözülmez; `kaya_biliyordu` V6'da bilerek çözülür. | KC | 🟨 Doğ K5 uyarı |

## 5. Vaka yapısı

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 49 | Sabit sıra: giriş → konuşma → araştırma → Kim yaptı? → yüzleşme → kovalamaca → karar → kapanış. Sezon açılışı vaka değildir. | OY, MS | 🔧 |
| 50 | 3 şüpheli: 1 suçlu, 2 yanlış iz. | OY, VF, ÜS | ✅ Doğ K19 |
| 51 | 4 karar; doğru ya da yanlış cevap yok. | OY | ✅ Doğ K19 (sayı); "doğru cevap yok" ❌ |
| 52 | Bedava ipucu yok; her ipucu bir hak harcar; ipucu sayısı haktan fazla; V2'den beri 3 hak; 3 hakla doğru yol kurulabilmeli. | OY, VF1, VF6, MS | ✅ Doğ K19 |
| 53 | Suçluyu kanıtlayan en az iki ayrı ipucu yolu. | OY, VF7, ÜS | ✅ Doğ K19 |
| 54 | Her yanlış şüphelinin onu suçlu gösteren izi ve aklayan kanıtı var; her vakada bir "aha!" anı (yanıltan iz + çözen kanıt). | OY, VF4, VF9 | 🟨 Doğ K19 masumiyet açıklamasının varlığını durdurur; iz ve aha ❌ |
| 55 | Müşterinin girişte anlattıkları ipucu değil, kanıt değildir; kanıt yalnız ipucundan. | OY | 🔧 |
| 56 | Kanıtlar şüpheliye göre süzülmez; öğrenildiği yerin başlığı altında durur. | OY | 🔧 |
| 57 | Kim yaptı?'da yalnız şüphelenme sebebi olan kişi görünür (adının geçmesi yetmez); hakkını bitiren herkeste suçlu görünür; bir kişi bir olgu yüzünden görünüyorsa bağ o sahnede açıkça söylenir. | OY | 🟨 Doğ K19 görünürlüğü ✅; "bağ söylenir" ❌ |
| 58 | Tek suçlama hakkı; üç sonuç (doğru+doğru kanıt / doğru+zayıf / yanlış kişi). | OY, MS | 🔧 |
| 59 | 4 yüzleşme sahnesi (4–6 replik); hepsinde gerçek suçlu kaçar; hepsi kovalamacanın başladığı yerde (değilse telefon ya da oraya getiren sebep). | OY, VF10 | 🟨 Doğ K19 sahnelerin varlığı ✅; içerik ❌ |
| 60 | Suçlunun paniği somut bir tetikleyiciye bağlı (kanıt yalanı çürütür ya da sakladığı şey tehlikeye girer); zayıf sözle kaçış yok. | OY, KC, ÜS | ❌ |
| 61 | Kovalamaca her vakada, yüzleşmeden sonra, karardan önce; yazıyla değil 3–4 kareyle; Peri'nin felaketi vakanın konusundan; Cengo da bir kez komik; kaçanı şans yakalar; temizlenme anı. | OY, VF11, GS C6 | ❌ |
| 62 | Kaybetme yok: oyun hiçbir durumda bitmez; para hiçbir yolu kapatmaz. | OY, KK24, KC | ✅ test_softlock, test_borc, Doğ K16 |
| 63 | Her durumda en az bir dürüst seçenek açık. | OY, VF12, ÜS | ✅ Doğ K19 (kapı yok) + test_borc |
| 64 | Zayıf/yanlış suçlamanın bedeli sahnede duyulur ve o vakada kalır; kimse küsmez; Cengo bağı etkilenmez. | OY | 🔧 |
| 65 | Defter vaka başına: Zincir yalnız içinde bulunulan vaka; Anı biten her vaka (özet → kimi suçladı · karar → Peri'nin notu). | OY, KC, MS | 🔧 |
| 66 | Vaka tipi yalnız Bilmece; Ters tip ayrı deneme vakasıyla, sonra. | OY | ❌ |
| 67 | Bir vaka 15–25 dakika. | OY, VF1 | ❌ |
| 68 | Kişi tablosu: her kişinin işi rolüne uyar (A); oturduğu yer, gittiği yer ve yolu tutarlı (C). | VF2, TS §12 | ❌ |
| 69 | Zaman çizelgesi saat saat; her şüphelinin nerede olduğu, ne gördüğü; çelişki yok. | VF2, VF19 | ❌ |
| 70 | "Kim neyi biliyor" listesi kararlardan önce; kararlar, Cengo satırları, kapanış ona uyar (B). | VF12, ÜS | ❌ |
| 71 | Onay 2'de okuyan önce kanon kaydını okur (G). | ÜS adım 6, TS §12 | ❌ |

## 6. Karar ve kapanış

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 72 | Oyun not vermez: eylem → sonuç → bedel; hüküm cümlesi yok ("doğru olanı yaptın"); nitelik + bedel kalabilir; `kararRuhHali` oyuncuya kelime olarak gösterilmez. | KK22, KC, OY | ❌ metin · 🔧 ruh hâli |
| 73 | Karar sahnenin içinde: sahnedeki biri sorar (ekranda); seçenekler Peri'nin kısa cümleleri, ne yapılacağını söyler, sonucu söylemez; altında önizleme, rakam, Cengo tavrı yok. | KK22a, OY, VF12, ÜS | 🟨 arayüz 🔧; soru ve seçeneğin yazılmış olmasına kısmen kapı bakar |
| 74 | Sonuç sahnede anlatı satırlarına bölünür, karar karesinin üstünde akar; bedel orada görünür. | KK22b | 🔧 |
| 75 | Cengo söylenmeyen doğru kanıtı söyler: her doğru kanıt için bir satır; yalnız o kanıtı anar; büroda, Peri'ye, etiketli replik (`**CENGO [ifade]:** … {yuz: peri.x}`); doğru kişi + sağlam kanıtta konuşmaz. | KK22c, VF10, ÜS | ✅ Kapı K2/K8 (etiket, ifade) + Sızıntı turu |
| 76 | "Dosya kapandı" kartı: sonuç başlığı, kanıtlar ✓/✗, "Elindeydi", yanlışsa masumiyet, Peri'nin anı cümlesi; rakam yok. | KK22d, OY | 🔧 |
| 77 | Karar kapısı yok: dört karar her zaman açık. | OY, MS | ✅ Doğ K19 |
| 78 | Kirli seçenek Peri'nin bir derdine çare olur (rakamla değil hikâyeyle); parasızlığı ara ara hatırlatılır; dürüst seçeneğin de karşılığı var. | KK26, VF12 | ❌ |
| 79 | Ruh hâli görseli ve istatistik paneli yok; kararın sonucunu kendi karesi gösterir. | KK27a | 🔧 |
| 80 | "Dosyanın tamamı" (`## hikaye`): 5–7 paragraf, olay sırasıyla; kendi düğmesiyle, reklamdan sonra. | VF12 | 🟨 test_yeni_arayuz düğmeyi sınar; metin ❌ |

## 7. Para

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 81 | Para yalnız hikâyede: ekranda kasa, ücret, hesap yok; her kararın parası kendi sahnesinde görünür ve orada biter. | KK24, OY | 🔧 arayüz · metin ❌ · ⚠ Doğ K19 hâlâ "kasaya eksi" denetliyor (çelişki 1) |
| 82 | Müşteri girişte söylediği ücreti öder; kesinti yok; `## ucret` yazılmaz; ücret kademeleri eşit. | KK25, OY, DV | 🟨 ⚠ Doğ K19 hâlâ kesinti açıklaması arıyor (kademeler eşitse tetiklenmiyor) |
| 83 | Taç her yolda Vaka 7'de alınır; karar yalnız nasıl alındığını değiştirir; sonraki vakalarda anılmaz. | KK27, kanon | ❌ |
| 84 | Her tutar o yılın gerçek İstanbul fiyatıdır. | KK27b, kanon | ❌ |
| 85 | Her vakanın fiyat tablosu var; tabloda olmayan tutar metne giremez. | KK27c, VF17, ÜS | ❌ (ÜS "otomatik denetim" diyor ama program yok) |
| 86 | Eski oyun: ekonomi seçenekleri daraltır, kirletmeye zorlamaz. | KC | ✅ test_borc |

## 8. Vakalar arası ve kanon

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 87 | Vakalar arasında yalnız Cengo bağı ve sabit sezon hikâyesi taşınır; tohum yok. | KK28, OY | ✅ Doğ K19 (tohum) |
| 88 | Kanonda yazmayan bilinmez; ekleme yolu: öneri → onay → kanon kaydı → vaka. | 3. parça, VF18 | ❌ |
| 89 | Eski oyunun bağlı kanonu: İlyas'ın Kaya'nın mahallesiyle bağı yazılamaz; Kaya'nın şüphe duyduğu kurgu yazılamaz. | KC | ❌ |
| 90 | Sezon tasarımı: iplik her sezon farklı gruptan; bir semt/çevre sezonda en çok iki vakada; yeni oyun biçimi S2'den; karar dönüşü üçlüsü. | **yalnız TS §7–8** | ❌ |

## 9. Satır–resim (metin ↔ ekran)

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 91 | Temel ilke: söylenen kişi ya da şey ekranda; ekrandaki şey o an söylenmiş. Geçmişteki ya da sahnede olmayan birinden söz serbest. Metin bir nesne, hareket, kıyafet anıyorsa o satırda görünür; yoksa metin değişir. | GS C0, C1, KC | 🟨 Kapı K2 ✅ (yalnız V6+); V1–V5 ❌ |
| 92 | SR-A Hitap: konuşanın karşısında muhatabı durur; `kime` gerçek muhatabı gösterir; satır işaretleri (`kime`, `gir`, `gizle`, `peri:`, `mekan`). | GS SR-A, C3, ÜS | ✅ Satır (HİTAP) + Kapı |
| 93 | SR-B Süreklilik: kıyafet hâli, çıkarılan şey, elde nesne sürer (dinleyen dahil); kıyafet hâli tablosu; ıslandı/kirlendi hâli sonraki satırlarda da. | GS SR-B, C7, ÜS | 🟨 Kapı K13 (poz kaydına yazılmışsa); hâl tablosu ❌ |
| 94 | SR-C Kıyafet kartı: her kıyafet tek ölçü resmiyle onaylanır; istemde kıyafet sözle tarif edilmez, kart referans verilir; kart değişirse etkilenen figürler sorulur. | GS SR-C, I, İK §10 | 🟨 İstem Peri/Cengo'da kart referansını durdurur; konukta ❌ |
| 95 | SR-D Nesne metnin getirdiği satırda başlar, bıraktığında biter; ifade figürü nesnesiz; kare tek an; elde yalnız metindeki nesne. | GS SR-D, UC 10, İK §10 | 🟨 Satır (EYLEM) + Kapı K10 |
| 96 | SR-E Bayrak kapıdır: istem yazılmadan bayraklar kapanır; "kalsın" `vakaN_bayrak.md`'ye yazılır. | GS SR-E, ÜS adım 8 | ✅ Kapı (İŞ/SOR = 0) |
| 97 | SR-F İpucu taşıyan eylem o satırda ekranda görünür. | GS SR-F | ❌ |
| 98 | SR-G Konuk konuğa konuşursa ikisi de ekranda; karşılıklı sürerse yerler sabit. | GS SR-G, DV | 🔧 |
| 99 | SR-I Yüz satıra uyar (eldeki figürlere göre değil); uyan yüz yoksa yeni ifade; dinleyenin yüzü de satırdan gelir; bakışın yönü ve hedefi istemde yazılır. | GS SR-I, B, C2, ÜS, Kapı K8, K9 | 🟨 Kapı K8 (ifade yazılı mı) ve K9 (bakış) ✅; ifadenin satıra uyup uymadığı ❌ |
| 100 | SR-J Her ifade kardeşlerinden ayrılır; istemde ayıran şey yazılır; denetimde yan yana. | GS SR-J, İK §10, UC A14 | ❌ |
| 101 | SR-K Karar karesi SONUÇ'un asıl anını gösterir (bedeli yaşayanlar karede). | GS SR-K | ❌ |
| 102 | SR-L Akış mantıklı: önce giriş sonra içerisi; ilk görme o satırda; söylenen yer figür ve arka planla çelişmez; sahne başına akış notu; yer, saat, ışık metinle aynı. | GS SR-L, ÜS | 🟨 Satır İLK GÖRME, DURUŞ |
| 103 | SR-M Bayraklar kuralla kapanır; onaylı sözler değişmez (yalnız etiket); M1–M8; erken tarama hikâye donmadan. | GS SR-M, UC 8, ÜS | 🟨 `arac_soz_farki.js` elle çalıştırılır |
| 104 | Anlatıda adı geçen herkes o satırda ekranda; ikiden fazlası ya da grup → kare. | ÜS, KC, Kapı K2 | 🟨 Kapı K2 ✅ (V6+); grup ve akrabalık sözleri ("annesi") ❌ |
| 105 | Figürü olmayan konuşmacı karenin üstündeyse cevabı da aynı karede; boş iki figür kalmaz. | ÜS, GS C3 | ❌ |
| 106 | Saklanan kişi ara kareyle gösterilir. | ÜS | ❌ |
| 107 | ~15 satırdan uzun konuşma tek arka planda geçmez; olay değişince (kapı açıldı) arka plan da değişir. | GS C5 | ❌ |
| 108 | Hareket sahnesinde kareler birbirinin devamı; sıra metinle aynı; sahneden ayrılan kareye girmez. | GS C6 | ❌ |
| 109 | Figür birini işaret ediyorsa karşısındaki o kişi; poz bir kişiye yöneliyorsa o kişi karşıda; konuşur gibi poz yalnız konuşanda. | GS C3, ÜS, Kapı K3, K12 | 🟨 Kapı K3, K12 (poz kaydı yazılmışsa) |
| 110 | Kapı kuralları: her satırda `{ekran}` yazılı (K1); "eşikte/kapıda/uzakta" kare ister (K4); yeni geleni anlatan satırda ekranda yalnız o (K7); iki figür üst üste binmez (K11). | Kapı | ✅ Kapı (yalnız V6+) |
| 111 | Aynı kare üst üste satırlarda yerinde kalır; kare ekrandayken yer etiketi gizli. | DV | 🔧 |
| 112 | Her sahne için satır → görsel tablosu; satır satır okunur (konuşan, karşısı, dinleyenin yüzü). | GS C3, C4, ÜS | 🟨 tur dökümü (`--hepsi`), okuma elle |

## 10. Görsel üretim — istem

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 113 | Görseller hikâye donmadan üretilmez; görselli testte hikâye değişmez (değişecekse forma dönülür). | ÜS | ❌ |
| 114 | Görsel listesi oyunla eşleşir: numara, tür, anahtar `vakaN_gorsel.md`'de; anahtarlar diyalogla aynı. | UC 0 | ✅ Doğ K15, test_yeni_arayuz |
| 115 | Temeller önce (kıyafet temeli, mekân temeli); temel onaylanmadan türev yok; iki kez engellenen ya da üç kez reddedilen temel hemen web paketiyle sahibine. | UC 1, ÜS, UC döngü | 🟨 döngü referansı hazır olmayanı üretmez 🔧; web paketi elle |
| 116 | Referansta dekolte yok; Peri'nin eski dekolteli referansları kullanılmaz; kadında baş kırpığı + kapalı tarz gövdesi; kıyafetin her ayrıntısı metinde. | UC 2, İK §9 | ✅ İstem (dekolteli dosya adları) |
| 117 | En çok 5 referans; daha çok kişi gerekiyorsa önceki kare tek referans. | GS D2 | ✅ İstem |
| 118 | Yan karaktere ana karakter referansı verilmez; tarz için başı silik gövde; yüz sıfırdan, ayırt edici çizgilerle; "pozunu alma". | GS D3, GS hatalar | 🟨 İstem: "benzemiyor" ve tarz cümlesi var mı |
| 119 | **Konuklar eski BÜTÜN konuklardan açıkça farklıdır** (yüz biçimi, saç, beden, yaş); form tarifi de karşılaştırılır; temel üretilince en yakın eski konuklarla yan yana; istemde "X'e benzemiyor". Sürekli karakterler hariç. | GS D4, GS hatalar, İK §4, UC 9, 9b, UC 0b, V3 dersleri, VF4 ve VF19, DV 15c önerisi | 🟨 İstem yalnız "benzemiyor" sözcüğünü arar; Yüz aracı yalnız yüze bakar ve yalnız uyarır → **fiilen ❌** (Süheyla geçti) |
| 120 | İstem kalıpları zorunlu, ezberden yazılmaz: tarz paragrafı Peri/Cengo/varyantta YOK, yeni karakter/mekân/karede VAR; yeni karakterde sonda tarz örneği cümlesi; kalıp sırası; eski onaylı istemlerle karşılaştır. | İK §1–5, GS H6, UC 3, UC dersleri | 🟨 İstem: mekân/karede paragrafı, yeni karakterde §3 cümlesini durdurur; Peri'de paragrafın OLMAMASI ❌ |
| 121 | Her figür isteminde: "TAM İKİ KOL, İKİ EL", bakış satırı (burun sola, üç çeyrek, iki göz), zemin satırı (düz, dokusuz, lekesiz), çıplaklık satırı, yazı yasağı, oran satırı; `## Kontrol` satırı. | GS H3, H6, kalıp 11, İK §6, UC 5 | ✅ İstem |
| 122 | Yön burun-kulak geometrisiyle; her el ayrı tarif; nesneler tek tek sayılır (açık uçlu liste yok); yazı taşıyan nesnenin yüzü kapalı; "görünmesin" yerine kadraj dışı. | GS kalıp ve hatalar, KC | ❌ |
| 123 | Karakter sabitleri her istemde yeniden yazılır (Peri kırmızı stiletto, çorap yok; Cengo haki ceket + bileklik; Ferruh, Gizem, V6 konukları…). | UC tablo, GS hatalar | ❌ |
| 124 | Kalabalık karede "kadrajda TAM n kişi", her kişiye referans ve kıyafet özeti, her elin işi; şerit referans. | İK §8, GS hatalar, UC şerit | ❌ |
| 125 | Peri'nin çekicilik satırı (normal / komik hâl); "kumaş kalın ve mat" satırı Peri'ye yazılmaz; ıslaklık yalnız üst giyside; komedi karesinde "aile dostu, göz hizası" cümlesi; kartta çekicilik yok, "V yakalı". | İK §9, GS I | 🟨 İstem kartta çekicilik satırını durdurur; gerisi ❌ |
| 126 | Figür ve kare isteminde `## Satırlar` zorunlu; ifade ve poz bu satırların hepsine uyar. | İK §10, UC 7, ÜS | ✅ İstem (bölüm var mı); uyum ❌ |
| 127 | Mekân istemi: zengin, somut, İstanbul; ışığı yasaklama; yasak nesneler adıyla; "İnsan yok"; `Kompozisyon:` satırı; aynı kurgu vakada en çok bir kez; eski mekânlara benzemez, aynı yer başka açıdan; istemden önce eski mekânların temas sayfası. | İK §7, §7a, GS hatalar | 🟨 İstem "İnsan yok" ve "Kompozisyon"u durdurur; benzemezlik ❌ |
| 128 | Kıyafet kartı: tek kişi, dikey 2:3, tam boy; tarz taşımaz; kartı alan istem "kartın çizim tarzını alma" der; açılıp kapanan kıyafetin iki hâli. | İK §11, GS I | 🟨 İstem "TAM BOY"u durdurur |
| 129 | Boya dokusu yüzde, kumaş pürüzsüz (kâğıt/folyo kırışığı yok); koyu saçta "ışık saç rengini açmasın". | İK §11, UC A13 | ❌ |
| 130 | Nesne tutan el: nesne kameraya yakın elde; kenarından kavrama, başparmak görünür, tam beş parmak; iki el adıyla, "iki sağ el YOK". | İK §12 | ❌ |
| 131 | Yan karakterde "saç toplu, zemine taşan tel yok"; Peri ve Cengo'nun saçı dağınık kalır. | İK §2, UC dersleri | ❌ |
| 132 | Zemin kıyafete göre yazılımla seçilir; iki zemin de riskliyse kıyafet değişir; yeşil yok; renk düzeltmesi yapılmaz. | GS H4, UC | ✅ Zemin + İstem (`zemin.tsv`) |
| 133 | Web paketi: istemin tam metni, referanslar sırayla ve tam yolla; en sona zemin rengi resmi; 3. ret / iki engel `WEB_LISTESI.md`'ye. | UC | ❌ |
| 134 | Üretici reddederse önce düşünen kip, sonra Grok; Claude istemi kendiliğinden yumuşatmaz; riskli karede "family-friendly" ve örten nesne. | GS D5 | ❌ ⚠ eski düzen (çelişki 7) |
| 135 | Görsel iş sayfası (Artifact): sohbet sırası, tam istem, Kopyala, Yapıldı, bakılacaklar. | GS D6, ÜS | ❌ ⚠ eski düzen (çelişki 7) |
| 136 | Bilinen hatalar: çorap bandı görünmez; sayı büyük harfle ("BEŞ katlı (dört değil)"); pencereden İstanbul; markasız, rozetsiz; saklanma karesinde kamera ve engel; detay karede elin sahibinin kıyafeti. | GS hatalar tablosu | ❌ |
| 137 | Vaka 3 dersleri: göğsü örten poz + kalın mat kumaş (dar tişört); cihazlarda tuşlar işaretsiz; "çanta YOK"; "morluk yok"; unlu yüz genç; loş sahnede lambalar tek tek; oturuş/dayanma fiziksel; havadaki nesnenin yeri başa göre. | UC dersleri tablosu | ❌ |
| 138 | Yeni istemi eski onaylı istemlerle yan yana karşılaştır. | İK "Neden" | ❌ |
| 139 | Duvardaki portre/afişte duygu abartısız. | İK §7 | ❌ |
| 140 | Büro kapısı hanın koridoruna açılır (ardı asla sokak); referans `buro_koridor.jpg`. | UC | ❌ |
| 141 | Peri ve Cengo poz kütüphanesi: L1/C1 yüz, uygun poz "YALNIZ poz için". | GS D2 | ❌ ⚠ çelişki 3 |
| 142 | Yalnız satırların istediği ifade ve poz üretilir; Peri'de tavan yok; aynı resim art arda çok tekrar ederse yeni poz; konukta 1–3 ifade. | GS B, VF16 | 🟨 Satır "Resim → satırlar" listesi; karar elle |
| 143 | Uygun ifade yoksa önce görsel üretilir, sonra replik yazılır. | GS B | ❌ |
| 144 | Kıyafet başına tek temel; öbür ifadeler onun düzenlemesi (1. referans temel; yüz, ölçek, kıyafet sabit). | GS D1, İK §5 | ❌ |

## 11. Görsel denetim

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 145 | Tarz denetimi her resimde gözden önce: KALDI → ret, ŞÜPHELİ → yeniden, iki kez ŞÜPHELİ → sahibine; kayıt satırı olmayan onaylı sayılmaz; temel ve kart eski onaylılarla yan yana. | UC 0, GS I, İK §11, UC A7 | 🟨 döngü ölçer ve kayda yazar; **gömmeyi durduran yok** |
| 146 | Yüz denetimi: Peri, Cengo, Gizem çapaya; konuk kendi temeline; eski karakterlere ≥ 0,70 benzerse uyarı. | UC 0b | 🟨 aynı: ölçer, durdurmaz |
| 147 | El denetimi: kişi görünen her resimde el sayfası, onayı sahibi verir; nesne tutan her el 4–5 kat büyütülür, topluca onaylanmaz. | UC 0c, Kapı K5 | 🟨 Kapı K5 onaysızı durdurur ✅; yakın bakış ❌ |
| 148 | Göz kontrol listesi: kimlik; ölçek; üç çeyrek, iki göz; iki kol, beş parmak; yazı/logo yok; kadraj, oran, zemin; çıplaklık, meme ucu; fiziksel olabilirlik; "TAM n kişi"; ışık ve saat mantığı; satırlara uyum; kıyafet kartına uyum; kardeşlerden ayrı; çekicilik az değil; doğru şehir; numarayı görselden doğrula; sigara. | UC A1–15, GS E1–13 | ❌ |
| 149 | Oyundaki hâli: kesip Peri'nin yanında bak — boy tablodaki gibi, bakışlar birbirine, giyside delik yok, saç kenarında iz yok; temel ölçeği setle aynı. | GS H5, UC B1–4, GS F | 🟨 `arac_yanyana.js` görüntü üretir, karar göz |
| 150 | Boy tablosu: yeni karakter önce tabloya; boyu tablo belirler; ölçülen boy `gorseller.json`'a. | GS H2, GS F, UC göm 3 | ❌ |
| 151 | Ret: istemin sonuna `## Düzeltme <k>`, resim `red/G<n>_red<k>.png`; istem metni değiştirilmez; onaylı resim silinmez. | UC, GS H7 | ❌ |
| 152 | Sahibi onaylı bir resimde hata bulursa onay geri alınır ve hata kural olarak yazılır. | UC | ❌ |
| 153 | Kart afişi: önde Peri ve Cengo, arkada müşteri + şüpheliler (tanık ve sır taşıyan yok); şüpheliler eşit; figürdeki ipuçları nötrlenir; yasak nesneler adıyla; hareketli; zemin satırı; kişiler alt %20'nin üstünde; 5 referans + şerit. | GS G, ÜS adım 8 | ❌ |
| 154 | Eski oyun: görsel sayısı 63'te; yeni görsel 900 px, q80; üç kontrol (parlaklık, büyütülmüş harf taraması, Nurcan). | KC | ❌ |

## 12. Kesim, gömme, ekran

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 155 | Figür kesimi yapay zekâyla (tek yöntem); eski renk kesimi yalnız karşılaştırma için; saç ve kol arasında zemin kalmaz. | KC, UC göm 3b, Kapı K6 | ✅ Paket + Kapı K6 |
| 156 | Karakterin sabit çerçevesi: bütün ifadeler aynı ölçek ve kadrajda; baş tepesi aynı yükseklikte; bakış sola; Peri ekranda aynalanır. | GS A, H1, F | 🔧 kesim profili |
| 157 | Zemine yakın nesne ve kol arası elle; hale yalnız baş kutusunda; rötuş yalnız düz yüzeyde, yapısal çizgi geçiyorsa yeniden üret. | GS F, KC | ❌ |
| 158 | Yarım set gömülmez: listenin hepsi onaylı olmadan gömme yok. | UC göm | ❌ |
| 159 | Görsel anahtarı uzantısız; her atıf gömülü olmalı. | KC, GS F | ✅ Derleme |
| 160 | Dosya biçimi: WebP q80; türlere göre boyut; üretim PNG `G<n>.png`. | GS A, H7 | 🟨 Paket |
| 161 | Gömmeden sonra: masa kartı (yoksa önceki vakanın büro resmi görünür), kart afişi, künye portresi. | UC göm 4, GS F | ❌ |
| 162 | Tablet düzeni: sütun genişliği, büyük ekranda yazı büyütme, figür katmanı Pixel 5 oranına kilitli; yeni ekran `#app`/`.vn` dışına eklenirse ayrıca bak. | KC | 🟨 tablet ve cihaz turu elle |
| 163 | Telefon yatayda "Telefonu dikey çevir" uyarısı. | KC | 🔧 |
| 164 | Yeni vaka, görsel ya da düzen değişikliğinden sonra tablet turu ve 19 ekran boyu turu. | KC | 🟨 elle; bayraklar aday |
| 165 | UI değişikliğinden sonra Pixel 5'te baştan sona tur. | KC | 🟨 elle |
| 166 | Uzanan kol ya da nesne çerçeveden taşıyorsa `--genis`; karşıdakinin arkasında kalıyorsa öne alınır. | GS F | ❌ |

## 13. Süreç ve çalışma kuralları

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 167 | Vaka 14 adımla oynanır hâle gelir; adım atlanmaz; her adımın çıkış şartı var. | ÜS | ❌ |
| 168 | Form onaylanmadan diyalog ve görsel yok; hikâye değişecekse önce form; değişiklik doğru yerden başlar (replik → diyalog, olay → form, kural → şablon). | VF, ÜS | ❌ |
| 169 | Önce konuş, sonra yap: sahibi "yap" demeden belge, kod, veri değişmez. | KC | ❌ |
| 170 | Rol ayrımı: üretim (metin + resim) Oğuz Bey'de; yeni kural, kod, altyapı, yayın Barbaros'ta; ortak var olan araca vaka ekleyebilir. | DV, UC | ❌ |
| 171 | Oturum başında `git pull`; aynı numarayı/vakayı iki bilgisayar aynı anda üretmez; kim ürettiği `DURUM.md` en üstte. | UC, DV | ❌ |
| 172 | Yalnız `main`'e gönder; her adımın sonunda gönder; `red/` gitmez. | KC, UC, ÜS | ❌ |
| 173 | Her commit'ten önce doğrulayıcı + derleme + testler; kapıya boru sokma. | KC | 🟨 hepsi elle |
| 174 | Kapı (Vaka 6+) commit'te kendiliğinden çalışır, geçmezse commit olmaz. | Kapı, DV | ❌ **bağlantı yazılı ama açık değil** (çelişki 9) |
| 175 | Her vakadan sonra sızıntı taraması + `sizinti_okuma.txt` elle okunur; vaka donmadan bir kez daha. | ÜS, KC | 🟨 kapı içinde koşar; okuma elle |
| 176 | Künye değişince künye aracı, çıkarım başlığı değişince tahta aracı, karar metni değişince akış aracı. | KC | 🟨 elle |
| 177 | Veri JSON'u `arac_json_yaz.js` ile, vaka metni `arac_diyalog.js` ile; elle değil. | KC | ❌ |
| 178 | Bulanık replik taraması Onay 2'den önce; bulunanlar sahibine tek liste; sahibinin notları toplu. | ÜS | ❌ |
| 179 | Görselli tur (adım 11) Onay 3'ten önce bütün yollarda; bulunanlar tek liste, ekran görüntüsüyle. | ÜS, UC göm 6 | 🟨 tur var, okuma elle |
| 180 | Toplu görsel işleme: paket önce önizlenir; her numaradan bir görsel; sayı tutmazsa durur. | ÜS, KC | ✅ Paket |
| 181 | Her vakanın süresi ölçülür, başlangıç belgesine yazılır. | ÜS | ❌ |
| 182 | Kapsam dışı: görsel sayısı azaltılmaz; ifade ızgarası yok; ücretli API yok. | ÜS | ❌ |
| 183 | Sahibi bir resim kuralı söylerse `uretim/CLAUDE.md`'ye yazılır, hafızaya değil. | UC | ❌ |
| 184 | Üretimden önce bilgisayar hazır mı (`onnxruntime`, `codex` girişli); eksikse başlama. | UC | ❌ |
| 185 | Döngü tuzakları: PATH'e Windows yolu verme; deneme klasörünü `rm -rf` ile silme; durdurmak için `DUR` dosyası; ikinci döngü başlatma. | UC | ❌ |
| 186 | Shorts: vaka başına 2–3, çözüm yok; spoiler denetimi en başta, damgasız video üretilmez; videolar depoya girmez. | KC, `sablon/8_shorts.md` | ✅ `arac_shorts.js` damga |
| 187 | Yayından önce `VN_VAKA_ATLA = false`, geri düğmesi kapalı; `DEV_MOD` `false`. | KC, MS | ❌ |
| 188 | Android aşamasına girerken sahibine eski dalları silmeyi hatırlat. | KC | ❌ |
| 189 | Motorun yapamadığı istenmez; yeni yetenek önce motor sınırlarına yazılır. | MS | ❌ |
| 190 | Motor sınırları: ekranda en çok iki figür; hareket yok; figür boyu sabit; sahne satırı koşula göre değişmez (sahne yalnız kendi koşulunun garanti ettiğini kullanır); seçim dallanmaz; tarayıcı uyarı kutusu yok. | MS | 🔧 |

## 14. Teknik tuzaklar (kod)

| # | kural | nerede | uygulayıcı |
|---|---|---|---|
| 191 | Türkçe İ: `/i/` yerine `toLocaleLowerCase("tr")`. | KC | ❌ |
| 192 | `index.html` tek şablon dizgisidir; bozuk çıktı yazılmaz. | KC | ✅ Derleme (`vm.Script`) |
| 193 | Testlerde sabit sayı yazılmaz; iddia ilişkiyle kurulur. | KC | ❌ |
| 194 | İki yerde duran her şey testle eşlenir; `game_data.json` asıl, yedekler eş. | KC | ✅ test_yedek, ilgili testler |
| 195 | Ses üç yerde (tablo, çağrı, dosya); müzik yok, yalnız 5 efekt. | KC, MS | ✅ test_ses |
| 196 | Tarayıcı turunda `text=` seçicisi yok; tur "karar yok" derse önce motora sor; tur eksik görsele, yanlış metne bakmaz. | KC | ❌ |
| 197 | Eski oyunun stil sözleşmesi (palet, sert ışık, foto-gerçekçi render) yalnız eski oyuna aittir. | GSS §1–6, 8–10 | ❌ |
| 198 | Doğrulayıcının kabul edilmiş uyarıları (eski oyunda 5) tasarım kararıdır, düzeltilmez. | KC | ✅ Doğ |

---

## Çelişkiler ve eskimiş yerler (karar gerekiyor)

1. **Doğrulayıcı K19 eski para düzenini hâlâ denetliyor:** kararda "önizleme" istiyor, "kasaya eksi girer" ve "kesinti
   açıklaması" bakıyor. Kural 22a, 24, 25 önizlemeyi, kasayı ve kesintiyi kaldırdı. (`kaynak/dogrulayici.js` 987, 1010, 1015)
2. **Motor sınırları (`sablon/4`)** "Karar ekranı: … kasaya girecek toplam, Cengo'nun tavrı" ve "Sonuç: … ücret + karar
   parası" satırlarını hâlâ taşıyor (üstte "KALKTI" notu var ama satırlar duruyor). Aynı belgede "Kim yaptı?: yalnız adı
   duyulan şüpheliler" yazıyor; oyun yapısı "adının geçmesi yetmez" diyor.
3. **Peri'nin poz kütüphanesi:** 5. parça D-2 "L1 her temel Peri'de yüz referansı" diyor; `uretim/CLAUDE.md` "Peri'nin eski
   referanslarının (L*) hepsi dekolteli, kullanılmaz" diyor; İstem kontrolü L1'i durduruyor.
4. **Zemin:** `ISTEM_KALIPLARI.md` §6 hâlâ "orta yeşil" ve "yeni temelde iki zeminle deneme" diyor; H4'e göre yeşil yok ve
   iki zemin yalnız gerektiğinde.
5. **Figür oranı:** 5. parça A tablosu konuk figürünü 1086×1448 (3:4) veriyor; H1 ve oran satırı 4:5 diyor.
6. **Cengo'nun ifade sayısı:** vaka formu §16 "Cengo: 4 ifade"; 5. parça B "yalnız satırların istediği".
7. **Üretim düzeni iki kez yazılı:** 5. parça D-5, D-6 ve 7. parça (ChatGPT/Grok, iş sayfası, sohbet sohbet gönderme) eski
   düzen; şimdiki düzen Codex döngüsü + web paketi (`uretim/CLAUDE.md`). Hangisinin geçerli olduğu belgede yazmıyor.
8. **Kesim:** 5. parça F (renk kesimi profilleri, hale temizliği, `arac_hale.py`) eski; 14 Kasım'dan beri tek yöntem
   yapay zekâ kesimi.
9. **Kapı:** belgeler "kendiliğinden çalışır, commit olmaz" diyor; commit bağlantısı açılmamış (`.claude/settings.json` yok).
10. **7. parça "Otomatik denetimler" listesi** programı olmayan maddeleri de "otomatik" sayıyor: "metindeki her tutar
    fiyat tablosunda", "sigara yok: metinde", "defter cümleleri suçluyu söylemiyor", "metinde anılan nesne o satırda görünüyor".
11. **Benzerlik kuralı (119)** yedi yerde yazılı, kural kitabında yok; 15c önerisi (DEVIR) işlenmedi.
12. **Cengo bağı:** kural 11 "alev yok" diyor; kök `CLAUDE.md` eski oyunda 5 alevi "şimdilik kalsın" diye bırakmış. Yeni
    oyun için çelişki değil, ama yazılı olarak ayrılmamış.
13. **1. parça sabit sayılar** "sonraki vakalar: karar verilecek" diyor; vaka formu "Vaka 2'den itibaren 3 hak" diyor.
14. **Eski stil sözleşmesi** (foto-gerçekçi render) ile yeni oyunun tarzı (yarı gerçekçi boyalı) çelişiyor; belgede
    "yalnız eski oyun" yazmıyor.
15. **TASLAK dosyasında kalan kararlar** (13, 23, 24, 90): sahibi onaylamış ama asıl belgelere işlenmemiş.
16. **V1–V5** yeni kurallara göre yeniden geçirilene dek eski düzende (kesinti metinleri, eski `kime`, etiketsiz Cengo
    satırı); kapı da Vaka 6'dan önceye uygulanmıyor. Bu kurallar o vakalarda kimse tarafından denetlenmiyor.

## Bu taslağa girmeyen belgeler (ikinci turda bakılabilir)

Kural içerebilir ama bu turda taranmadı: `kaynak/RAF_KARARLARI.md`, `kaynak/YENI_OYUN_TON.md`, `YENI_OYUN_SEZON.md`,
`YENI_OYUN_CERCEVE.md`, `uretim/v3_eski/BIRIKIM.md`, `kaynak/dogrulayici_sozlesmesi.md`, `veri_format_sozlesmesi.md`,
`cengo_bag_mekanigi.md`, `sablon/8_shorts.md` (yalnız ana satır alındı), vaka başına kayıtlar (`vakaN_bayrak.md`,
`vakaN_kapi.md`). `sablon/3_kanon_kaydi.md` kural değil kanon gerçekleri (yalnız ekleme yolu alındı: 88).

---

## Kaynak → kural eşlemesi (her madde nereye gitti)

**Kural kitabı (`sablon/2`):** 1→1 · 2→2 · 3→3 · 4→4 · 4a→4 · 5→5 · 5c→6 · 5b→8 · 6→14 · 7→15 · 8→16 · 9→17 · 10→18 ·
11→19 · 12a→20 · 12→21 · 13→12 · 14→25 · 15→26 · 15b→27 · 15a→28 · 16→29 · 17→30 · 18→31 · 19→32 · 19a→33 · 20→35 ·
21→36 · 21a→36 · 21c→37 · 21d→38 · 21b→39 · 22→72 · 22a→73, 19 · 22b→74 · 22c→75, 40 · 22d→76 · 23→22 · 24→81, 62 ·
25→82 · 26→78 · 27→83 · 27b→84 · 27c→85 · 27a→79 · 28→87. (Sorular bölümü: dördü de karara bağlanmış, 36, 39, 20, 79.)

**Oyun yapısı (`sablon/1`):** sezon açılışı→49 · adımlar 1–8→49 · Giriş 1→7 · Giriş 2→6 · Giriş 3→7 (kıyafet/çekicilik→28, 26) ·
Giriş 4→7 · Giriş 5→7 · Kovalamaca (her vakada, yer, kareler, felaket, Cengo, şans)→61 · erotik+gülünç→26 · sınır→34, 29 ·
"oyun cevabı söylemez"→36 · 3 şüpheli→50 · ipucu ve hak→52 · 4 karar→51 · süre→67 · Yanlış iz: iz+aklayan→54 · iki yol→53 ·
müşteri anlattığı→55 · tek ipucu→37 · ad açık / fazlası yok→41 · Kim yaptı?: kanıt yalnız ipucundan→55 · süzülmez→56 ·
üç sonuç→58 · görünen kişiler→57 · bağ söylenir→57 · Dosya kapandı→76, 40 · tek hak→58 · 4 yüzleşme→59 · panik→60 ·
yüzleşmenin yeri→59 · bedel sahnede→64, 82 · bedel o vakada→64 · bağ etkilenmez→64 · oyun bitmez→62 · Karar: 4 seçenek→51 ·
kapı yok→77 · sahnede→73 · sonuç→74 · not vermez→72 · Defter: Zincir→65 · Anı→65, 38 · iki vaka tipi→66 · vakalar arası→87 ·
tohum yok→87 · kaybetme yok→62 · dürüst seçenek→63 · aha anı→54.

**Motor sınırları (`sablon/4`):** yapabildikleri (arka plan, kare, figürler, ifade, kıyafet, giriş/çıkış, figürsüz konuşan)→190, 98 ·
seçim dallanmaz→190 · geri geçici→187 · oyun akışı→49 · araştırma/bedava yok→52 · olgu ve defter→36 · Kim yaptı?→57, 58 ·
karar ekranı / sonuç (eski)→çelişki 2 · defter→65 · kapanış iki hâl→20 · kayıt, metin kaynağı→177 · sınırlar 1–4, 6, 8→190 ·
sınır 5→195 · sınır 7→5 · "yeni yetenek önce buraya"→189 · yapılacaklar tablosu (iş listesi, kural değil) · K17 tasarımı→7.

**Görsel sistemi (`sablon/5`):** A türler/boyutlar→160 · WebP→160 · sigara→33 · figür sabitleri→156, 121 · B ifade seçimi→99 ·
"uygun ifade yoksa önce görsel"→143 · konuk 1–3 ifade, kıyafet başına sayı, Peri tavan yok, Cengo→142 · C0 temel ilke→91 ·
SR-A→92 · SR-B→93 · SR-C→94 · SR-D→95 · SR-E→96 · SR-F→97 · SR-G→98 · SR-H→4 · SR-I→99 · SR-J→100 · SR-K→101, 73 · SR-L→102 ·
SR-M (M1–M8)→103 · "nerede yakalanır"→167 · C1→91 · C2→99 · C3 işaret→109 · C3 ekran düzeni ve satır işaretleri→92, 98 ·
C3 denetim→112 · C3 figürsüz konuşan→105 · C4→112 · C5→107 · C6→108 · C7→93 · D1→144 · D2 beş referans→117 · D2 poz
kütüphanesi→141 · D2 kalabalık referans→124 · D3→118 · D4→119 · D5→134 · D6→135 · D7 (yerel üretim denemesi, karar
verilmemiş; kural değil) · istem kalıbı 1–10→120, 121, 122, 123, 125 · oran satırı→121 · bilinen hatalar: el/sağ-sol/yazı/açık
uçlu/ölçek→122, 144 · "görünmesin"→46 · kıyafet sabiti→123 · çorap, sayı, manzara, marka, kim kimi görüyor, kıyafet
çağrışımı→136 · kalabalıkta kişi düşer→124 · yan karakter benzer→119 · reddedilir→134 · E1–E13→148 (E8→46, E13→33) ·
F sabit çerçeve→156 · ölçüye getirme→160 · zemine yakın nesne, kol arası, hale, rötuş→157 · gömülü→159 · kesim profilleri→155
(eskidi, çelişki 8) · temel ölçeği→149 · boy→150 · `--genis`→166 · künye portresi→161 · G kart afişi→153, 47 · H1→156 ·
H2→150 · H3→121 · H4→132 · H5→149 · H6→121, 120 · H7→160, 151 · I kıyafet kartı→94, 128, 125 · I tarz→145 · I "kart
değişirse sor"→94 · I trençkot kaydı (Vaka 3'e özgü kayıt, kural değil).

**Vaka formu (`sablon/6`):** form önce→168 · hak / 3 hakla doğru yol→52 · zaman çizelgesi→69 · kişi tablosu A, C→68 · giriş→7 ·
şüpheli görünüşü→119 · her ipucu hak, sahne özeti→52 · kimin yolu→17 · kanıt yolları→53 · defter cümleleri→36 · aha→54 ·
yüzleşme→59 · Dosya kapandı→76 · Cengo kanıt satırları ve etiket→75 · kovalamaca, temizlenme anı→61 · kim neyi biliyor→70 ·
kararı kim soruyor→73 · karar tablosu→73, 74, 81, 22 · dürüst karar→63 · kirli karar→78 · önizleme yok→73 · Cengo etiketi→75 ·
anı özeti→38 · dosyanın tamamı→80 · kapanış iki hâl→20 · kıyafet→28 · mekânlar→127 · görsel listesi→142 (çelişki 6) · künye→43 ·
fiyat tablosu→85 · kanon→88 · kontrol listesi: giriş→7, 3 şüpheli→50, 54, iki yol→53, tek ipucu→37, defter→36, aha→54,
zaman→69, kişi tablosu→68, kim neyi biliyor→70, tutar→85, dürüst→63, karar sahnede→73, Cengo satırı→75, sigara→33,
anı→38, kanon→88, künye→43, görünüş ayrışıyor→119, kural kitabıyla çelişki yok→(genel).

**Üretim süreci (`sablon/7`):** 14 adım→167 (adım 3→92, 99, 4 · adım 5→175, 178, 103 · adım 6→71 · adım 8→93, 94, 95, 96, 135,
153 · adım 11→179 · adım 14→175) · donmadan üretilmez, görselli testte hikâye değişmez→113 · her adım `main`→172 · süre→181 ·
sızıntı taraması→175, 40 · Vaka 1 dersleri (vaka kaydı) · bulanık tarama: kime→92 · akış ve akış notu→102 · neyi→10 ·
nereden biliyor→4 · espri→10 · sıra→10 · kala→8 · tekrar eden şaka→9 · ne istiyor→10 · giriş→6 · fazla kısa→5 · bilmediğini
biliyor→70 · neden kaçıyor→60 · düzeltme yalnız netleştirme→11 · tek liste→178 · temel görsel önce→115 · satır–resim üç
aşama→103, 104, 126, 99, 100, 94, 95 · DURUŞ / İLK GÖRME→102 · adı geçen ekranda→104 · görsel–metin uyumu: kim var→104 ·
figürsüz konuşmacı→105 · saklanan→106 · yüz→99 · anılan şey→91 · süreklilik→93 · yer ve zaman→102 · görünürlük (kenardan
taşma)→179 · Nurcan→46 · teknik→149 · tek liste→179 · toplu işleme→180 · iş sayfası→135 · kapsam dışı→182 · otomatik denetimler
(her biri kendi satırında: 7, 50, 54, 53, 37, 36, 35, 41, 63, 73, 75, 38, 81, 87, 33, 85, 99, 91, 159; çelişki 10) · elle
bakılanlar→26, 7 · değişiklik kuralı→168 · süre tablosu (bilgi).

**`uretim/CLAUDE.md`:** oturum başı→171 · `DURUM.md` ve `main`→172 · kural bu dosyaya→183 · üretim nerede, sahibi kim→170, 171 ·
bilgisayar hazır mı→184 · karakter sabitleri→123 · büro kapısı→140 · sigara→33 · istem 0→114 · 1→115 · 2→116 · 3→120 · 4→137 ·
5→121 · 6→11 · 7→126, 103 · 8→103, 96, 94, 93, 95, 99, 100, 101 · 9→119 · 9b→119 · 10→95 · istem kontrolü önce→120 ·
döngü, durdurma→185 · ölçüm (bilgi) · tuzaklar→185 · zemin→132 · döngü sırasında→115, 161 · temeller önce, web paketi→115, 133 ·
WEB_LISTESI, zemin resmi→133 · onaylıda hata→152 · Denetim 0→145 · 0b→146 · 0c→147 · A1–A15→148 (A7→145, A12→99, A13→94,
129, A14→100, A15→26, 27) · B1–B4→149 · onay/ret→151 · göm: yarım set→158, boy→150, kesim→155, masa kartı/afiş/portre→161,
testler→173, tur→179 · şerit→124 · yapma→151, 172 · Vaka 3 dersleri→137 (yan karakter benzer→119, saç→131, karikatür→120,
kart kayması→128).

**`uretim/ISTEM_KALIPLARI.md`:** §1→120 · §2→120, 116, 131 · §3→120 · §4→119, 120 · §5→120, 144 · §6→121, 132 (çelişki 4) ·
§7→127 · §7a→127 · portre→139 · §8→124, 27 · §9→125, 116, 26, 34 · §10→126, 94, 95, 99, 100, 101 · §11→128, 129, 145 ·
§12→130 · "Neden"→138.

**Kök `CLAUDE.md`:** giriş uzun→6 · replikler anlaşılır→5 · panik→60 · satır–resim sözleşmesi→91–103 · önce konuş→169 ·
yeni ayrıntı→11 · dal `main`→172 · commit öncesi→173 · 5 uyarı→198 · JSON / diyalog aracı→177 · kısa kanıt adı→42 · Dosya
çözüldü Nurcan→40 · suçlamadan sonraki metinler→40 · sızıntı taraması→175 · defter vaka başına→65, 38 · künye vaka başına→43 ·
deneme düğmeleri→187 · paylaş kartı→47, 153 · adı geçen ekranda→104 · tablet/cihaz turu→164 · yatay uyarısı→163 · tablet
düzeni→162 · künye, tahta, akış, okuma araçları→176 · yapay zekâ kesimi→155 · paket→180 · Shorts→186 · UI turu→165 · Nurcan→35 ·
künye Nurcan yüzeyi→43 · zincir defteri→44 · Cengo bağı görsel/metin→21 · Cengo satırının üç kuralı→21 · 5 alev→19 (çelişki 12) ·
çözülmeyen olgular→48 · olgu adları→45 · ekonomi→86 · kaybetme yok→62 · not vermez→72 · Türkçe İ→191 · şablon dizgisi→192 ·
`DEV_MOD`→187 · boru→173 · sabit sayı→193 · ayrışma, yedek→194 · uzantısız anahtar→159 · `text=` seçici, motora sor, tur
her şeyi görmez→196 · ses→195 · Playwright doğrulaması→165 · eski oyun kanon bağları→89 · görsel 63, boru hattı→154 · açık uçlu
liste, sol/sağ→122 · görsel yalan söyleyemez→46 · rötuş sınırı→157 · müzik yok→195 · dallar→188.

**Kapı (`arac_kapi.js`):** K1→110 · K2→104, 91 · K3→109 · K4→110 · K5→147 · K6→155 · K7→110 · K8→99, 75 · K9→99 · K10→95 ·
K11→110 · K12→109 · K13→93 · commit bağlantısı (`.claude/kapi_hook.js`)→174.

**`kaynak/DEVIR.md` (yalnız orada duran kararlar):** rol ayrımı→170 · aynı kare kalır, yer etiketi→111 · yerler sabit→98 ·
kesinti kalktı→82 · 15c önerisi→119 · V1–V5 yeniden geçirilecek→çelişki 16.

**`sablon/TASLAK_tekrar_onleme.md`:** §5→13 · §6 dönen figür→23 · hayvan sorusu→24 · §7a, 7b, 7c, §8→90 · §12 A→68, B→70, C→68,
G→71 (D, E, F iptal edilmiş).

**`kaynak/gorsel_stil_sozlesmesi.md`:** §7, 7b, 7c→46 · §1–6, 8–10→197.
