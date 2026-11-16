# Kural olmayan satırlar — kontrol listesi

Ham listede 3.585 satır var:

- **Kural: 1725.** Bunlar yeni kural dosyasına gidecek.
- **Kural değil: 1272.** Geçmiş, açıklama, başlık, örnek ya da süre kaydı.
- **Eski oyuna ait: 588.** Yeni oyunda geçerli değil.

Aşağıda kural saymadığım satırlar, aynı sebeptekiler bir arada. Her grubun yanında bir örnek var. Yanlış bulduğun grubun numarasını söylemen yeter.

## CLAUDE.md

**1.** Oyunun tanımı — **1 satır**  
<sub>örnek: Türkçe, İstanbul-Noir, ahlaki tercih temelli dedektiflik oyunu. Tek dosyalık HTML, dikey/mobil. Yayında: https…</sub>

**2.** Vaka 6'nın durumu (geçmiş) — **1 satır**  
<sub>örnek:   ### ✅ VAKA 6 DONDU (15 Kasım 2026, adım 14): Onay 3 düzeltmeleri gömüldü, kapı GEÇTİ, sızıntı taraması temiz…</sub>

**3.** 🗄 eski oyun — Doğrulayıcının eski oyundaki kural ve uyarı sayısı — **1 satır**  
<sub>örnek: Doğrulayıcı eski oyunda   15 kural   çalıştırıyor (K16 kararsız yol dahil; K15 yalnız yeni oyunda) ve hâlihazı…</sub>

**4.** 🗄 eski oyun — Eski oyunun çıkarım tahtası aracı — **1 satır**  
<sub>örnek:   Çıkarım başlığı değiştirdikten sonra    cd kaynak && node arac tahta denetim.js  — her başlığı, o çıkarıma u…</sub>

**5.** 🗄 eski oyun — Eski oyunun 40 kararını denetleyen araç — **1 satır**  
<sub>örnek:   Karar metni / cengoBag / para değiştirdikten sonra    cd kaynak && node arac akis denetim.js  — 40 kararın h…</sub>

**6.** 🗄 eski oyun — Eski oyunun dokuz vakasını okuyan araç — **1 satır**  
<sub>örnek:   Bir vakayı baştan sona okumak için    cd kaynak && node arac okuma.js V1  — vakanın bütün metnini oyuncunun …</sub>

**7.** 🗄 eski oyun — Eski oyunun Cengo bağı görsel ve metni — **1 satır**  
<sub>örnek:   Cengo bağı artık hem görülüyor hem duyuluyor.   31 karar  cengoBag 'i besliyor. 20 Eylül'de iki yanıt da ver…</sub>

**8.** Başlık — **3 satır**  
<sub>örnek:   Cengo satırının üç kuralı:  …</sub>

**9.** 🗄 eski oyun — Eski oyunun 5 alevlik göstergesi — **1 satır**  
<sub>örnek: Ekrandaki 5 alevlik gösterge notun "görünmez sayaç" ilkesiyle çelişiyor; sahibi şimdilik kalmasına karar verdi…</sub>

**10.** 🗄 eski oyun — Eski oyunun çözülmeyen iki olgusu — **1 satır**  
<sub>örnek:   Kanonda ÇÖZÜLMEYEN iki olgu var:    ceyda pay  ve  sevil pay .  kaya biliyordu  da  belirsiz  listesinde ama…</sub>

**11.** Fable incelemesinin geçmişi — **1 satır**  
<sub>örnek: Metin, mantık ve ekonomi   bitti  . Fable 5.1 taze göz incelemesi (16 Eylül 2026) uygulandı — bulgular ve comm…</sub>

**12.** ChatGPT incelemesinin geçmişi — **1 satır**  
<sub>örnek: ChatGPT taze göz incelemesi (20 Eylül 2026) —  kaynak/inceleme chatgpt.md .   Açık bulgu kalmadı.   Beş bulgu …</sub>

**13.** 🗄 eski oyun — Eski oyunun kanonu (İlyas, Kaya) — **1 satır**  
<sub>örnek: Bu iki eklemenin bağladığı kanon:   İlyas'ın Kaya'nın mahallesiyle bir bağı olduğu   bir daha yazılamaz, ve   …</sub>

**14.** 🗄 eski oyun — Eski oyunun 63 görseli — **1 satır**  
<sub>örnek:   Görseller: 63 gömülü   (sezon 59'da kapatılmıştı; 20 Eylül'de sahibinin kararıyla Cengo–Peri ikili kareleri …</sub>

**15.** Yapılacak iş notu (ses dosyaları) — **1 satır**  
<sub>örnek: Kalan iş:  ses/efekt  .wav    5 sentetik yer tutucu   gerçek  .mp3  ile değiştirilecek. Sipariş metinleri  kay…</sub>

**16.** Müzik geri istenirse ne yapılacağı (açıklama) — **1 satır**  
<sub>örnek:   Müzik geri istenirse   sıfırdan başlanmaz ama kod işi gerektirir: ev standardı, sekiz stil satırı, kesme nok…</sub>

**17.** Android aşamasının yapılacakları — **1 satır**  
<sub>örnek: Sonrası Android aşaması (bilerek ertelendi; 9 Kasım 2026'dan beri çerçevesi  kaynak/RAF KARARLARI.md ): Capaci…</sub>

**18.** Eski dalları silme hatırlatması — **1 satır**  
<sub>örnek:   Android aşamasına girerken sahibine HATIRLAT — eski dalları toplu silecek (17 Ekim 2026 isteği).   GitHub'da…</sub>


## sablon/1_oyun_yapisi.md

**19.** Not: sonraki vakaların ipucu sayısı sonra kararlaştırılacak — **1 satır**  
<sub>örnek: - Sonraki vakalar: bu iki vakayı oynadıktan sonra karar verilecek.…</sub>

**20.** Tablo başlığı — **1 satır**  
<sub>örnek:   seçim   sonuç  …</sub>

**21.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**22.** Kapanmış soru (kararı kurallarda) — **3 satır**  
<sub>örnek: 1. ~~Yanlış suçlamanın bedeli~~ → tek hak, yalnız para, o vakada kalır.…</sub>


## sablon/2_kural_kitabi.md

**23.** Kasanın neden kalktığı — **1 satır**  
<sub>örnek:  (Sahibinin kararı, 16 Kasım 2026: kasanın bir anlamı yoktu — yalnız birikiyor, hiçbir şeye bağlanmıyordu. Kas…</sub>

**24.** Kural kitabının eski soru-cevabı (kararı kuralda yazılı) — **11 satır**  
<sub>örnek: 1. ✓  Karar: a (21a).    Çıkarımlar cevabı söylüyor.   Şu an oyun iki olguyu birleştirip "Nazlı'yı sete Serkan…</sub>


## sablon/3_kanon_kaydi.md

**25.** Tablo başlığı — **4 satır**  
<sub>örnek:   kişi   bilinen  …</sub>

**26.** Açık nokta: ileride karara bağlanacak (yapılacak iş) — **3 satır**  
<sub>örnek: - Ev sahibinin adı, yaşı, tuhaflığı → Vaka 2…</sub>

**27.** Kapanmış açık nokta (cevabı kanonda) — **2 satır**  
<sub>örnek: - ~~Yan karakterin adı, kişiliği, çırak mı garson mu~~ → Gizem, tezgâhtar, hazırcevap (17 Ekim 2026)…</sub>

**28.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**29.** Kapanmış soru-cevap (kararı kurallarda) — **4 satır**  
<sub>örnek: 1. ✓  Karar: a (kasaya bağlı) — 16 Kasım 2026'da geçersiz: kasa kalktı, taç her yolda alınır (2. parça kural 2…</sub>


## sablon/4_motor_sinirlari.md

**30.** Kalkmış eski karar ekranı (kasa) — **1 satır**  
<sub>örnek: -   Karar ekranı:   kapı yok, dört karar açık. Her seçenekte kısa sonuç, kasaya girecek toplam, Cengo'nun tavr…</sub>

**31.** Kalkmış eski sonuç sayfası (kasa) — **1 satır**  
<sub>örnek: -   Sonuç:   kararın ara karesi, Cengo satırı, anı defteri notu, ücret + karar parası. Cengo göstergesi (alev)…</sub>

**32.** Yapılan işler notu — **1 satır**  
<sub>örnek:  ✓ = yapıldı (8 Ekim 2026):  kaynak/motor yeni.js ,  yeni arayuz.js , doğrulayıcı K17–K19,  test yeni kimyapti…</sub>

**33.** Tablo başlığı — **2 satır**  
<sub>örnek:   #   iş   neden  …</sub>

**34.** Yapılmış iş (iş listesi) — **10 satır**  
<sub>örnek:   1   ✓   Kim yaptı? ekranı:   şüpheli + iki kanıt seçimi, üç sonuç   1. parça  …</sub>

**35.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**36.** Kapanmış soru-cevap (kararı kurallarda) — **3 satır**  
<sub>örnek: 1. ✓  Karar: a (iki figür).    Ekranda iki figür sınırı   uygun mu? Üç kişilik sahnelerde (Peri, Cengo, konuk)…</sub>


## sablon/5_gorsel_sistemi.md

**37.** Tablo başlığı — **8 satır**  
<sub>örnek:   tür   ne   boyut  …</sub>

**38.** Başlık — **3 satır**  
<sub>örnek:   Peri  …</sub>

**39.** Vaka 3'ün geçmişi (kuralların neden yazıldığı) — **1 satır**  
<sub>örnek: Vaka 3'ün resimleri sahibinin Onay 3'ünde satır satır yeniden açıldı: konuşulan kişi ekranda yoktu, anılan şey…</sub>

**40.** Yerel üretim denemesinin kaydı (11 Ekim; bugün Codex düzeni) — **7 satır**  
<sub>örnek: 7.   Yerel üretim denemesi (11 Ekim 2026; karar verilmedi, sürüyor).   Amaç: ret/limit yok, gece otomatik üret…</sub>

**41.** Not: V6 boy değerlerinin nereden geldiği — **1 satır**  
<sub>örnek:  (V6 satırları 13 Kasım 2026'da formdaki boy tarifinden konan başlangıç değerleri; temel onayında  arac yanyan…</sub>

**42.** Eski zemin tablosu (14 Kasım'dan beri tarihî kayıt, 536) — **4 satır**  
<sub>örnek:   hiçbiri, koyu saç (varsayılan)   açık bej  …</sub>

**43.** Vaka 3 kaydı (trençkot ölçüsü) — **1 satır**  
<sub>örnek: - Vaka 3 kaydı: Peri'nin trençkotu   uzun, diz altına iner   (sahibinin seçtiği ölçü: un deposu karesi, 8 Kası…</sub>

**44.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**45.** Kapanmış soru-cevap (kararı kurallarda) — **4 satır**  
<sub>örnek: 1. ✓  Karar (8 Kasım 2026, eski kararın yerine): yalnız satırların istediği ifade ve pozlar üretilir (B).    K…</sub>


## sablon/6_vaka_formu.md

**46.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**47.** Formun boş alanı (form dosyasında kalır) — **32 satır**  
<sub>örnek:   Vaka no ve adı    …</sub>

**48.** Tablo başlığı / formun boş tablosu — **15 satır**  
<sub>örnek:   kod   cümle   hangi ipucundan  …</sub>


## sablon/7_uretim_sureci.md

**49.** Tablo başlığı / formun boş tablosu — **3 satır**  
<sub>örnek:   #   adım   kim   çıkış şartı  …</sub>

**50.** Vaka 1 derslerinin nerede olduğu (yönlendirme) — **1 satır**  
<sub>örnek: -   Vaka 1 dersleri   (zamanı en çok yiyen görsel düzeltmeleri ve önlemleri):  vakalar/vaka2 baslangic.md  §2–…</sub>

**51.** Vaka 2'nin süre kaydı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 2'de metin tarafı 2 sa 52 dk sürdü; bunun 1 sa 56 dk'sı Onay 2'ydi ve 22 notun   hepsi bulanık replikti  …</sub>

**52.** Başlık — **4 satır**  
<sub>örnek:   Giriş (K17)  …</sub>

**53.** Süre tahmini (kural değil) — **6 satır**  
<sub>örnek:   Form + onay   yarım gün  …</sub>

**54.** Vaka 1'e özel motor işi notu (yapıldı) — **1 satır**  
<sub>örnek:   Vaka 1'e özel:   motor işleri (Kim yaptı? ekranı, yüzleşme, para, kapanıştaki iki hâl, yeni denetimler) bir …</sub>


## sablon/8_shorts.md

**55.** Kimin ne yaptığı (açıklama) — **1 satır**  
<sub>örnek: Hattı sahibi kurdu, videoları Oğuz Bey üretir. Bu belge yeterli olsun diye yazıldı.…</sub>

**56.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**57.** Tablo başlığı — **1 satır**  
<sub>örnek:   Tip   Ne anlatır   Kapanış sorusu  …</sub>

**58.** Kurulum bilgisi — **1 satır**  
<sub>örnek: Gereken kurulum (bir kez): Node, Playwright ( arac ortam.js  bulur), ffmpeg, Python ve  pip install edge-tts .…</sub>


## sablon/TASLAK_tekrar_onleme.md

**59.** Taslağın başlık notu — **1 satır**  
<sub>örnek:     TASLAK — ONAYLANMADI.   Barbaros ile Claude arasındaki konuşmanın notu (12 Kasım 2026). Kural değil: şablo…</sub>

**60.** Vaka 1–5 karşılaştırma tablosu (çözümleme) — **7 satır**  
<sub>örnek:     Ne oldu   Suçlu kim   Neden yaptı   Yanlış iz   Karar  …</sub>

**61.** Fikir listesi (çeşit önerileri) — **23 satır**  
<sub>örnek: -   Neden yaptı:   intikam, kıskançlık, birini korumak, sevgi, gurur/itibar, şaka/iddia büyüdü, kaza sonra ört…</sub>

**62.** Şu an kanonda olanların durumu — **1 satır**  
<sub>örnek:   Şu an kanonda:   Gizem (V3'ten sonra büroda), ev sahibi (V2'den itibaren, yalnız komedi), avukat (V8'de döne…</sub>

**63.** Fikir listesi (dönen figür, iplik, semt seçenekleri) — **20 satır**  
<sub>örnek:   Yeni dönen figür seçenekleri (sahibi: hepsi olabilir):  …</sub>

**64.** Not: koda bakıldı — **1 satır**  
<sub>örnek: Koda bakıldı (12 Kasım 2026):…</sub>

**65.** Henüz konuşulmamış biçimler — **1 satır**  
<sub>örnek: - Diğerleri (henüz konuşulmadı, hepsi çok kod): ters vaka, saatli vaka, yalan bulma, kılık.…</sub>

**66.** Kararların etkisi üzerine çözümleme — **7 satır**  
<sub>örnek: Şu an (belgeler + kod):…</sub>

**67.** Başlık — **3 satır**  
<sub>örnek:   Ek fikirler (sahibi: hepsi olabilir, 12 Kasım 2026):  …</sub>

**68.** Yapılacak iş: belgelere işlenirken değişecekler — **1 satır**  
<sub>örnek:   Belgelere işlenirken değişecekler (not):    1 oyun yapisi.md  "Tohum yok" kuralı ve doğrulayıcı K19 (tohumu …</sub>

**69.** Tekrara düşmenin sebepleri (çözümleme) — **4 satır**  
<sub>örnek:   Konuşmanın kökü — tekrara düşmenin 10 sebebi (12 Kasım 2026):  …</sub>

**70.** Onaylanmamış öneri — **4 satır**  
<sub>örnek:   Öneri olarak kaldı, onaylanmadı:  …</sub>

**71.** Açık soru — **6 satır**  
<sub>örnek:   Açık kalanlar (Barbaros: "şimdilik açık kalsın"):  …</sub>

**72.** Aynı günün başka işleri (geçmiş) — **1 satır**  
<sub>örnek:   Aynı gün ayrıca:   ortağın 4 sorusu cevaplandı ( kaynak/DEVIR.md ): V5 dondu, V4 resimlerini ortak yapacak (…</sub>

**73.** Örnek ve gerekçe (kararlara giden yol) — **24 satır**  
<sub>örnek: Yukarıdaki bölümler kararları tutar; bu bölüm o kararlara giden örnekleri ve gerekçeleri tutar.…</sub>

**74.** Ortağın okuma notu — **1 satır**  
<sub>örnek:   Ortak taslağı Claude'la baştan okudu (çeşit listeleri, ölçü, kararların etkisi, yeni oyun biçimleri). Sonra …</sub>

**75.** Yeni oyun biçimi fikirleri (karar verilmedi) — **22 satır**  
<sub>örnek:   Ters vaka   — Oyuncu suçluyu baştan görür, Peri görmez; iş "kim?" değil "nasıl kanıtlarım?" (Columbo).…</sub>

**76.** Vaka 5'te nerede takıldık (çözümleme) — **12 satır**  
<sub>örnek:   Ortak, Vaka 5'te en çok nerede takıldığını Claude'la çıkardı ve kural olarak öneriyor.   Barbaros onaylar ya…</sub>

**77.** İptal edilen öneri (D, E, F) — **3 satır**  
<sub>örnek: -   D. Aksiyon gerçekte olur mu:   kovalamaca ve şakalardaki fiziksel olaylar bir kez bu soruyla okunur. → 4…</sub>

**78.** İptal kaydı (E) — **1 satır**  
<sub>örnek: -   E İPTAL (12 Kasım 2026, Barbaros):   önce yumuşatılmış hâliyle (soru ya da kendiliğinden söylenme sebebi) …</sub>

**79.** İptal kaydı (D, F) — **1 satır**  
<sub>örnek: -   D ve F İPTAL (12 Kasım 2026, Barbaros):   önce olduğu gibi onaylanmıştı; aynı gün geri alındı, şablondan ç…</sub>

**80.** İşlendiği yerler (kayıt) — **1 satır**  
<sub>örnek: -   İşlendi:    6 vaka formu.md  §2 kişi tablosu (A, C), §12 "kim neyi biliyor" (B), §19 kontrol listesi;  7 u…</sub>

**81.** Yapılacak iş (Vaka 1–4 yeniden geçirilecek) — **1 satır**  
<sub>örnek: - Vaka 1–4 yeni plana göre bu kurallarla yeniden geçirilecek ( kaynak/DEVIR.md  en üst bölüm).…</sub>


## uretim/CLAUDE.md

**82.** Tablo başlığı — **2 satır**  
<sub>örnek:   karakter   sabit  …</sub>

**83.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**84.** Ölçüm kaydı (resim başına süre) — **1 satır**  
<sub>örnek:   Ölçüm (13 Kasım 2026, ChatGPT Plus):   resim başına ~95–115 sn; 2 kolda resim başına süre aynı (iş iki katı)…</sub>

**85.** Denenip bırakılan yöntem (kayıt) — **2 satır**  
<sub>örnek: - Denenip BIRAKILAN (14 Kasım): ifadeyi temeline CLIP benzerliği ya da renk doygunluğuyla karşılaştırıp "soluk…</sub>


## uretim/ISTEM_KALIPLARI.md

**86.** Onaylı örnek resimlerin yeri — **5 satır**  
<sub>örnek: Onaylı örnekler (bu kalıplarla üretilip onaylandı):…</sub>

**87.** Ayraç çizgisi — **2 satır**  
<sub>örnek: ---…</sub>

**88.** Tablo başlığı — **1 satır**  
<sub>örnek:   istem türü   tarz paragrafı  …</sub>

**89.** Gerekçe: tarz paragrafı neden tek başına yetmez — **1 satır**  
<sub>örnek: Paragraf tek başına "çizgi roman" der; boyalı referans yoksa resim karikatüre kayar (kalın kontur, düz boya). …</sub>

**90.** V6 kart hatasının geçmişi (gerekçe) — **1 satır**  
<sub>örnek: V6'da Cengo'nun kartı G2 (iki kişi yan yana, yatay 3:2, küçük tam boy, "ölçü resmi") katalog çizimine kaydı: k…</sub>

**91.** Gerekçe: üretici hangi eli çiziyor — **1 satır**  
<sub>örnek: Üretici, kameraya YAKIN koldaki doğal eli çiziyor: G80'de tepsi uzaktaki sol elde istendi, iki düzeltmede de y…</sub>

**92.** İlk istemlerin hatası (geçmiş; dersi 1240'ta) — **3 satır**  
<sub>örnek: 1. İlk istemler  5 gorsel sistemi.md  H6'daki "her istemde tarz paragrafı" satırına göre yazıldı → Peri ve Cen…</sub>


## uretim/AGENTS.md

**93.** Tablo başlığı — **1 satır**  
<sub>örnek:   yer   ne   sen  …</sub>


## uretim/OKUBENI.md

**94.** Klasörün açıklaması — **1 satır**  
<sub>örnek: Oyunun resimleri burada üretilir. Her vaka bir klasör:  v3/ ,  v4/  … Her şey GitHub'da durur; bilgisayar kapa…</sub>

**95.** Tablo başlığı — **2 satır**  
<sub>örnek:   Kim   Ne yapar  …</sub>

**96.** Klasör ve dosya açıklaması — **10 satır**  
<sub>örnek:    LISTE.md    resim listesi: no · tür · ne · önce onaylanması gereken   ✓  …</sub>

**97.** Yönlendirme (hangi belgede ne var) — **3 satır**  
<sub>örnek: - Görsel kurallar:  sablon/5 gorsel sistemi.md  →   H. Görsel standart  …</sub>


## uretim/v3_eski/BIRIKIM.md

**98.** Belgenin giriş açıklaması (eski Vaka 3) — **1 satır**  
<sub>örnek: Vaka 3'te (2026-11-04 … 11-06,  D:\Yazilim\chatcpt-resim\v3 ) resim üretimi ve denetiminden öğrenilen her şey …</sub>

**99.** Ayraç çizgisi — **8 satır**  
<sub>örnek: ---…</sub>

**100.** Eski Vaka 3 sayımları (geçmiş) — **10 satır**  
<sub>örnek:   Resim   67 (LISTE.md). Hepsi  onayli/ 'de.  …</sub>

**101.** Bölüm açıklaması — **1 satır**  
<sub>örnek: Komut "kontrol et". Bütün kurallar  CLAUDE.md 'de; burada sebepleri ve uygulamada öğrenilenler var.…</sub>

**102.** Örnek (hangi resimde ne oldu) — **8 satır**  
<sub>örnek: - G2, G25 ve G55: kırmızı, kaldı.…</sub>

**103.** Eski PowerShell kırpma betiği (araç bilgisi) — **6 satır**  
<sub>örnek: - Kırpma ve büyütme scripti (PowerShell, System.Drawing). Çalıştırma:  powershell -NoProfile -ExecutionPolicy …</sub>

**104.** Eski Vaka 3'e özel şerit hazırlığı — **4 satır**  
<sub>örnek: - Şerit onaylı G6, G7, G8 ve G9'dan (Nadide, Ferruh, Kenan, Gizem) yapılır. Dört resim aynı yüksekliğe (900 px…</sub>

**105.** Codex'in nasıl çalıştığı (gözlem) — **3 satır**  
<sub>örnek: - Araç:  image gen.imagegen  (çağrı adı  tools.image gen  imagegen ). Araç alttaki modelin adını ve sürümünü b…</sub>

**106.** Tablo başlığı — **2 satır**  
<sub>örnek:   Sorun   Sebep   Çözüm  …</sub>

**107.** Eski Vaka 3'te çıkan sorun (çözümü AGENTS.md'de kural) — **6 satır**  
<sub>örnek:   Codex "üret"i genel bir istek sandı   Codex'te açık proje bir üst klasördü ( chatcpt-resim );  AGENTS.md 'yi…</sub>

**108.** Gözlem: Codex referansı yoksa atlıyor — **1 satır**  
<sub>örnek: - Codex referans listesindeki bir  onayli/G k   yoksa resmi atlıyor. Bu yüzden ilk turlar kısmi oluyor. Temel …</sub>

**109.** Gözlem: Codex resimleri tek tek bırakıyor — **1 satır**  
<sub>örnek: - Codex tur sürerken resimleri tek tek  uretilen/ 'e bırakıyor. "kontrol et" Codex çalışırken de yapılabilir. …</sub>

**110.** Dosya izin sorununun geçmişi — **5 satır**  
<sub>örnek: - Belirti: resim başına süre 16:21'den sonra ~1 dk'dan 5–12 dk'ya çıktı. Codex'in kendi ölçtüğü üretim süresi …</sub>

**111.** Codex'in yazdığı dosyalar ve deneme klasörü (bilgi) — **3 satır**  
<sub>örnek: - Codex tur sonunda  uretim ozeti .md  ve  referans bekleyenler.md  gibi özet dosyaları da yazdı. Bunlar zarar…</sub>

**112.** Filtre engeli denemelerinin kaydı (sonuçları 1391–1396'da) — **18 satır**  
<sub>örnek:   G   Ne zaman   Sonuç   Mesaj  …</sub>

**113.** Eski Vaka 3 ret kaydı (resim resim) — **17 satır**  
<sub>örnek: Burada yalnız sorun çıkanlar var. Geri kalanlar ilk üretimde onaylandı: G10, G11, G15, G16, G17, G18, G30–G39,…</sub>

**114.** Tablonun açıklaması — **1 satır**  
<sub>örnek: "Dekolte" sütunu, filtre açısından ve görsel incelemeyle (2026-11-06) dolduruldu.…</sub>

**115.** Eski referans dosyaları envanteri — **31 satır**  
<sub>örnek:   Dosya   Ne   Kullanıldığı istem   Dekolte  …</sub>

**116.** Yerel Claude belleğinin yeri (bilgi) — **1 satır**  
<sub>örnek: 1.   Bellek klasöre bağlı.   Yerel Claude'un belleği  C:\Users\BG\.claude\projects\D--Yazilim-chatcpt-resim-v3…</sub>

**117.** Başlık — **1 satır**  
<sub>örnek: 2.   Sahibinin çalışma biçimi:  …</sub>


## uretim/v3_eski/CLAUDE.md

**118.** Eski Vaka 3 düzeninin açıklaması — **1 satır**  
<sub>örnek: Sahibi (Barbaros) resimleri iki yoldan üretir: Codex ( AGENTS.md ) ve web ChatGPT (elle). İkisi de  uretilen/ …</sub>

**119.** Eski Vaka 3'e özel şerit notu — **1 satır**  
<sub>örnek: Şerit eski onaylı G6–G9'dan yapılmıştır. G6, G7, G8, G9'un dördü de YENİDEN onaylanınca şeridi yenile: dördünü…</sub>

**120.** Eski Vaka 3'ün bitiş adımı — **1 satır**  
<sub>örnek:  prompts/LISTE.md 'deki her G  onayli/ 'de → sahibine "Vaka 3 tamam;  onayli/  klasörünü bulut Claude'una gönd…</sub>


## uretim/v3_eski/AGENTS.md

**121.** Eski Vaka 3'teki 'dene' komutu (web resimlerini Codex'te sınama denemesi) — **7 satır**  
<sub>örnek: Sahibi web'de yaptığı resimleri Codex'in de üretip üretemediğini görmek istiyor. Yalnız adı verilen G'ler için…</sub>


## kaynak/RAF_KARARLARI.md

**122.** Belgenin tarih notu — **1 satır**  
<sub>örnek:  9 Kasım 2026. Sahibiyle konuşarak alındı. Bu belge   kararların kaydı  ; henüz tek satır kod yazılmadı. …</sub>

**123.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**124.** Başlık — **3 satır**  
<sub>örnek:   Dil (sahibinin kararları):  …</sub>

**125.** Hesap (10 sezon ~30 $) — **1 satır**  
<sub>örnek: - 10 sezonun hepsini alan oyuncu kitaba yıllar içinde ~30 $ öder.…</sub>

**126.** Gerekçe: fiyat — **1 satır**  
<sub>örnek: - Gerekçe: mobilde oyuncuların yalnız ~%2–5'i para öder; fiyatı düşürmek bu oranı pek değiştirmez. Satın almay…</sub>

**127.** Tablo başlığı — **1 satır**  
<sub>örnek:     Vaka 1–2   Vaka 3+ (satın almadı)   Satın aldı  …</sub>

**128.** Reklam sayısı hesabı — **1 satır**  
<sub>örnek:   Reklam sayısı (hesap, 10 vakalık sezon, her şeyi reklamla açan oyuncu):   vaka başına ~5 (geçiş 1, +1 hak 1,…</sub>

**129.** Elenen uygulama adları (kayıt) — **1 satır**  
<sub>örnek: -   Elenen adlar:   "The Back Room" (ünlü "The Backrooms" korku evrenine çok yakın — aramada korku oyunları çı…</sub>

**130.** Ad kontrolü kaydı (9 Kasım) — **7 satır**  
<sub>örnek: -   Ad kontrolü (9 Kasım 2026, ön eleme — hukuki görüş değil):  …</sub>

**131.** Yayın sırası adımı (yapıldı) — **2 satır**  
<sub>örnek: 1. Vaka 3 bitirilir.…</sub>

**132.** Gerekçe: kitap adı — **1 satır**  
<sub>örnek: - Gerekçe: "cover story" = gerçeği saklamak için uydurulan hikâye (paravan şirketin göstermelikliği) + Peri es…</sub>

**133.** Elenen kitap adları — **1 satır**  
<sub>örnek: - Elenenler:  On Paper  (Hilmi'nin "Kâğıtta var"ı; gizem havası zayıf),  Front  (sert, anlaşılması zor),  Para…</sub>

**134.** Ad kontrolü kaydı — **1 satır**  
<sub>örnek: - Kontrol: "Cover Story" adlı dedektiflik/gizem oyunu bulunmadı (web araması; marka veritabanına ve mağazaya a…</sub>

**135.** Ölçülen hız (kayıt) — **1 satır**  
<sub>örnek: -   Ölçülen hız:   Vaka 2 ~11 sa aktif, takvimde ~1 hafta (10–16 Ekim). Vaka 3 17 Ekim'de başladı, 9 Kasım'da …</sub>

**136.** Gözlem: darboğaz — **1 satır**  
<sub>örnek: - Darboğaz otomasyonun hızlandıramadığı yerler: sahibinin onayları ve oyunu baştan oynaması, görsel yeniden ür…</sub>

**137.** Hesap: sezon süresi — **1 satır**  
<sub>örnek: - 10 vakalık bir sezon: iki haftada bir ~5 ay, ayda bir ~10 ay.…</sub>

**138.** Açık iş: yayın sıklığı sözü — **1 satır**  
<sub>örnek: - Yayın sıklığı sözü (Vaka 4–5 ölçülünce, §11c).…</sub>

**139.** Açık iş: alan adı ve tescil (sahibinin işi) — **1 satır**  
<sub>örnek: - Alan adının satın alınması ve TÜRKPATENT tescil başvurusu (sahibinin işi).…</sub>


## kaynak/YENI_OYUN_TON.md

**140.** Ayraç çizgisi — **14 satır**  
<sub>örnek: ---…</sub>

**141.** Eski oyun–yeni oyun karşılaştırma tablosu — **1 satır**  
<sub>örnek:     eski oyun   yeni oyun  …</sub>

**142.** Başlık — **7 satır**  
<sub>örnek:   Önerilen komik zaaflar:  …</sub>

**143.** Örneklerin açıklaması — **1 satır**  
<sub>örnek:  Ton göstermek için. Hiçbiri bir vakaya ait değil. …</sub>

**144.** Örnek replik (ton göstermek için) — **5 satır**  
<sub>örnek:     PERİ:   Kapıyı çalacağız, kendimizi tanıtacağız, kibarca soracağız.     CENGO:   Ya da kilidi açarız, kend…</sub>

**145.** Eski oyunun teşhisi (gerekçe) — **1 satır**  
<sub>örnek:   Eski oyunun teşhisi:   ilişki ölçülüyordu ama oynanmıyordu. Bağ 31 kararda değişiyordu; 40 kararın 23'ünde C…</sub>

**146.** Bölümün tarih notu — **1 satır**  
<sub>örnek:  4 Ekim 2026'da sahibiyle konuşularak karara bağlandı. Hedef: Peri'nin eski hayatından geri alınacak bir şey; …</sub>

**147.** Eski oyunda paranın ne olduğu (geçmiş) — **1 satır**  
<sub>örnek:   Eski oyunda ne oldu.   Her omurga vakadan sonra 59.000 lira sabit gider kesiliyordu. Kararların çoğu bunun a…</sub>

**148.** Gerekçe: para neden kaldırılmamıştı (kasa sonra kalktı) — **1 satır**  
<sub>örnek:   Para neden kaldırılmıyor.   Paranın asıl işi muhasebe değil,   cazibedir.   Her kararda üç şey çekişir: para…</sub>

**149.** Eski kasa düzeni (16 Kasım'da kalktı, kural 24) — **7 satır**  
<sub>örnek:   Karar: batmayı kaldır, cazibeyi tut.  …</sub>

**150.** Motorun eski para alanı (bilgi) — **1 satır**  
<sub>örnek:   Motor tarafı:   gider, faiz ve başlangıç kasası zaten  game data.json  →  ekonomi  alanında ayar olarak duru…</sub>

**151.** Tablo başlığı — **2 satır**  
<sub>örnek:   ALINIR (yapı, tür kalıbı)   ALINMAZ (somut ifade)  …</sub>

**152.** Sıradaki iş notu (4 Ekim) — **1 satır**  
<sub>örnek:   Sıradaki iş:   vaka listesi — her vaka için birer paragraflık fikir, sahibi seçer. Açık kalan dört ayrıntı (…</sub>


## kaynak/YENI_OYUN_SEZON.md

**153.** Belgenin tarih ve taslak notu — **1 satır**  
<sub>örnek:  4 Ekim 2026.   Taslak:   her vaka bir   öneridir  , kanon değildir. Sahibi seçer, çıkarır, değiştirir; onayla…</sub>

**154.** Ayraç çizgisi — **13 satır**  
<sub>örnek: ---…</sub>

**155.** Tablo başlığı — **4 satır**  
<sub>örnek:   iplik   nasıl taşınır  …</sub>

**156.** Eski dekolte kuralı (8 Ekim'de 1859 yerine geçti) — **1 satır**  
<sub>örnek:   Dekolte kuralı (sahibinin kararı, 4 Ekim 2026):   Peri'nin dekoltesi   her vakada, her kıyafette   deneme se…</sub>

**157.** Not: kural kitabına taşınacak (taşındı, kural 15) — **1 satır**  
<sub>örnek: - Bu kural oyun yapım şablonunun kural kitabına taşınacak.…</sub>

**158.** Bölümün onay notu — **1 satır**  
<sub>örnek:  Sahibinin onayıyla (4 Ekim 2026). Üç kanon eklemesi onaylandı: Cengo'nun bordrodaki hayali çalışan olarak gel…</sub>

**159.** Açılışın taslak senaryosu (açılış yazıldı) — **13 satır**  
<sub>örnek: İcra memurları Peri'nin evini boşaltıyor. Peri gururunu bırakmıyor: memurlara çay ikram ediyor, "O koltuk İtal…</sub>

**160.** Ev sahibi borcu önerisi (kalktı: borç yok, ev sahibi yalnız komedi) — **1 satır**  
<sub>örnek: Avukat kaçtığından beri büronun kirası ödenmemiş:   90.000 ₺   (3 ay × 30.000 ₺). Borç kasaya yazılmaz (batmak…</sub>

**161.** Ev sahibinin dönüşü (kanon kaydında var) — **1 satır**  
<sub>örnek: Sonra ara sıra döner: kira gününde kapıda, merdivende, en kötü anda. Peri ondan saklanır (Ton §9.4); Cengo'nun…</sub>

**162.** Sezon taslağındaki vaka önerisi (kanon değil) — **48 satır**  
<sub>örnek:   Müşteri:   Karaköy'de yaşlı bir balıkçı. Kırk yıllık teknesi bir gecede iskeleden kaybolmuş. Peşin ödeyecek …</sub>

**163.** Eski görsel sayısı planı (8 Kasım'da değişti: yalnız satırların istediği) — **10 satır**  
<sub>örnek: Her vakada iki karakterin yeni kıyafeti, her kıyafette 4 ifade:…</sub>

**164.** Eski dekolte kararı (8 Ekim'de değişti) — **1 satır**  
<sub>örnek:     Peri'nin dekoltesi     Her vakada, her kıyafette deneme seviyesinde; azalmaz (§0).  …</sub>

**165.** Kapanmış açık nokta (Gizem) — **1 satır**  
<sub>örnek:   Açık kalan:   ~~yan karakterin adı ve kişiliği; çırak mı garson mu~~ (17 Ekim 2026: Gizem, tezgâhtar, hazırc…</sub>


## kaynak/YENI_OYUN_CERCEVE.md

**166.** Belgenin tarih notu — **1 satır**  
<sub>örnek:  23 Eylül 2026. Sahibiyle konuşarak alındı. Bu belge   kararların kaydı  , tasarım belgesi değil — henüz tek s…</sub>

**167.** Ayraç çizgisi — **8 satır**  
<sub>örnek: ---…</sub>

**168.** Gerekçe: neden Mavi Ay — **7 satır**  
<sub>örnek:   Neden Mavi Ay:   Paravan'ın açılışı zaten o dizinin kurulumu. Araştırıldı ve birebir çıktı:…</sub>

**169.** Tablo başlığı — **1 satır**  
<sub>örnek:   konu   karar  …</sub>

**170.** Gerekçe ve araştırma (dil, platform, mekân) — **5 satır**  
<sub>örnek:   Dil.   Araştırma: ABD'de mobil oyun kullanıcı başına yıllık gelir ~60 $, Hindistan'da ~3,5 $. Gelişmekte ola…</sub>

**171.** Eski kodun yeni oyuna taşınma ölçümü (23 Eylül) — **9 satır**  
<sub>örnek: Ölçüldü (23 Eylül 2026):…</sub>

**172.** İlk ekran tasarımı (bugünkü hâli 1. ve 4. parçada) — **5 satır**  
<sub>örnek: Sahibinin sekiz maddesinden altısı zaten kurulu. İki ekran yeni:…</sub>

**173.** İlk görsel maliyet hesabı — **8 satır**  
<sub>örnek: Mevcut 63 görsel ayrıldı: ~26 vakaya özel (mekân/kanıt), 14 vaka karakteri portresi, Peri+Cengo portresi, 4 Ce…</sub>

**174.** Gerekçe: dizi kavuşunca öldü — **1 satır**  
<sub>örnek: Dizide 3. sezonda ikili kavuşunca dizi öldü — reyting 9. sıradan 49'a düştü. "İki başrolü kavuşturma" kuralını…</sub>

**175.** Gerekçe — **1 satır**  
<sub>örnek:  cengoBag  tam olarak bir "kavuşacaklar mı" sayacı. Eski sözleşmedeki şu satır farkında olmadan buna karşı yaz…</sub>

**176.** Açık soru (23 Eylül; çoğu sonra kapandı) — **4 satır**  
<sub>örnek: -   Oyunun ve ajansın adı.   Mavi Ay'ın "Blue Moon"u gibi, ikisi birden olacak bir şey.…</sub>

**177.** İlk plan: tek vakayı kâğıtta yaz (yapıldı) — **1 satır**  
<sub>örnek:   Tek bir vakayı kâğıt üstünde baştan sona yaz.   Dört ekranın hepsi, gerçek metinle, kod yazmadan. Hafif bir …</sub>

**178.** İlk planın beklentisi — **1 satır**  
<sub>örnek: Bittiğinde iki şey netleşir: konuşma ekranının nasıl duracağı, ve arama ekranının gerçekten gerekip gerekmediğ…</sub>


## kaynak/gorsel_stil_sozlesmesi.md

**179.** 🗄 eski oyun — Eski oyunun görsel stili / Cengo bağı (belge arşivde) — **75 satır**  
<sub>örnek:   Amaç: 40+ görselin   tek elden çıkmış   gibi durması ve görsellerin metnin süsü değil     ipucunun taşıyıcıs…</sub>


## kaynak/cengo_bag_mekanigi.md

**180.** 🗄 eski oyun — Eski oyunun görsel stili / Cengo bağı (belge arşivde) — **79 satır**  
<sub>örnek:   Flört   kazanılır, verilmez.   Ani değil, kararlarla yavaşça birikir — ve düşebilir.   Cengo'nun Peri'ye yak…</sub>


## kaynak/dogrulayici_sozlesmesi.md

**181.** Ayraç çizgisi — **11 satır**  
<sub>örnek: ---…</sub>

**182.** Örnek (eski oyunun vakalarından) — **8 satır**  
<sub>örnek:   Nurcan örneği (bu kuralın doğuş sebebi):  …</sub>

**183.** 🗄 eski oyun — Eski oyunun istisnası (kaya_biliyordu V6'da çözülür) — **1 satır**  
<sub>örnek:   İstisna:    kaya biliyordu  finalde (V6)   çözülür   — "bilmiyordu" kesinleşir. Bu yüzden Kural 5,  kaya bil…</sub>

**184.** Açıklama — **1 satır**  
<sub>örnek: Bu sınırlar, doğrulayıcının   çelişki   (yapısal) ile   kalite   (yazınsal) sorunlarını ayırdığını gösterir: m…</sub>

**185.** Açıklama: beş kural birlikte ne yapar — **1 satır**  
<sub>örnek: Beş kural bir arada, çelişkiyi   yazılabilir ama teslim edilemez   kılar: Kural 1 serbest ismi, Kural 2 ulaşıl…</sub>

**186.** Geçmiş: sonradan eklenen kurallar — **1 satır**  
<sub>örnek: Sözleşme beş kuralla yazıldı; uygulama sırasında altı kural daha eklendi (K6 bütçe, K7 seçim baskısı, K8 baskı…</sub>

**187.** Gerekçe — **1 satır**  
<sub>örnek:   Neden:   Vaka bitince olgular  kaliciOlgular a taşınıyor; künye katmanları ve koşullu metinler bu birleşik k…</sub>


## kaynak/veri_format_sozlesmesi.md

**188.** Ayraç çizgisi — **8 satır**  
<sub>örnek: ---…</sub>

**189.** Örnek — **2 satır**  
<sub>örnek:   Örnek   — "cinayet suphesi = dusus acisi VE (ceyda celiski VEYA komsu ses)":…</sub>

**190.** Örnek vaka verisi (eski oyun) — **1 satır**  
<sub>örnek:    json { "id": "V1", "tur": "omurga", "sira": 1, "belirir": null, "baslik": "Merdivendeki Adam", "arastirma":…</sub>

**191.** Tablo başlığı — **1 satır**  
<sub>örnek:   Kural   Okuduğu alan  …</sub>

**192.** Belgenin kapanış açıklaması — **1 satır**  
<sub>örnek: Bu format tüm tasarım kararlarını taşıyacak şekilde kuruldu: koşullu girişler (müşterisiz/keşif vakaları), kan…</sub>


## kaynak/OKUBENI.md

**193.** Derlemenin ne yaptığı (bilgi) — **1 satır**  
<sub>örnek: Derleme depo kökündeki  index.html 'i yeniden yazar. Görseller   gomulu gorseller.js 'ten okunur (44 görsel,  …</sub>

**194.** Dosya listesi (açıklama) — **12 satır**  
<sub>örnek: -  motor.js  → oyun mantığı (arayüzsüz,  class Oyun )…</sub>

**195.** Not: ses teşhisi paneli — **1 satır**  
<sub>örnek:   Ses üretimine başlarken geri açmak isteyebilirsin   — ses teşhisi paneli orada. Tek satır.…</sub>

**196.** Tablo başlığı — **1 satır**  
<sub>örnek:     Ne kontrol eder   Şiddet  …</sub>

**197.** 🗄 eski oyun — Eski oyunun K5 kuralı (Ceyda/Sevil) — **1 satır**  
<sub>örnek:   K5   Belirsizlik — Ceyda/Sevil kesinleşmemeli   uyarı  …</sub>

**198.** Yönlendirme: eski oyun notları arşivde — **1 satır**  
<sub>örnek: Eski oyunun (dokuz vaka) açık uyarıları, kapatılan tuzakları, sızıntı ve ekonomi notları, vaka vaka tasarım ka…</sub>

**199.** Bilgi — **1 satır**  
<sub>örnek: Altyapı kuruldu. Sipariş metinleri:  ses promptlari.md .…</sub>

**200.** Durum: geçici sesler — **1 satır**  
<sub>örnek:   Şu an depoda geçici sentetik sesler var   ( ses/ .wav , ~3 MB) — gerçek parçalar değil, geliştirme sırasında…</sub>

**201.** Müzik dosya adları (müzik 19 Eylül'de kalktı) — **1 satır**  
<sub>örnek: - müzik:  prolog   masa   giris   arastirma   karar   sonuc   huzun   final …</sub>

**202.** Başlık — **1 satır**  
<sub>örnek: Davranış:…</sub>

**203.** Müzik davranışı (müzik kalktı) — **3 satır**  
<sub>örnek: -   Çapraz geçiş:   sahne değişince parça 700 ms'de karşılıklı kısılıp açılır.…</sub>

**204.** Yapılacak iş: gerçek sesler — **1 satır**  
<sub>örnek: - Gerçek ses parçalarının üretilip  ses/  klasörüne  .mp3  olarak konması, ardından geçici  .wav  dosyalarının…</sub>

**205.** Android aşamasının yapılacakları — **3 satır**  
<sub>örnek: - Görseller base64'ten çıkıp  gorseller/ .jpg  olacak. Tüm arayüz  GORSELLER[ad]  üzerinden gittiği için değiş…</sub>


## kaynak/yeni/OKUBENI.md

**206.** Dosya listesi (açıklama) — **5 satır**  
<sub>örnek:   dosya   ne  …</sub>

**207.** Komut listesi — **2 satır**  
<sub>örnek:     cd kaynak node dogrulayici.js yeni # yeni veriyi denetler (argümansız = eski oyun) node test yeni v1.js # …</sub>

**208.** Bilgi: motor ve araçlar devralındı — **1 satır**  
<sub>örnek: Motor, doğrulayıcı ve araçlar   aynen   devralındı ( YENI OYUN CERCEVE.md  §3).…</sub>

**209.** Eski kasa şeridi notu (kasa kalktı) — **1 satır**  
<sub>örnek:   Batma uyarısı yok (sahibinin kararı):   kasa şeridi yalnız kasa ve borcu gösterir; karar seçeneklerinin altı…</sub>

**210.** Tablo başlığı — **1 satır**  
<sub>örnek:   alan   anlamı  …</sub>

**211.** Eski kasa göstergesi alanı (kasa kalktı) — **1 satır**  
<sub>örnek:    kasa: true    kasa göstergesi ilk kez görünür (açılış)  …</sub>

**212.** Kalkan uyarı (kayıt) — **1 satır**  
<sub>örnek: - K9 uyarısı kalktı: tohum yok (şablon, 8 Ekim 2026).…</sub>


## sablon/vakalar/vaka2_baslangic.md

**213.** Vaka 2 başlangıç notu (10 Ekim) — **1 satır**  
<sub>örnek: Tarih: 10 Ekim 2026.   Vaka 1 bitti ve kalıp oldu.   Vaka 2 aynı şablonla, aynı araçlarla,   daha hızlı   üret…</sub>

**214.** Vaka 2'ye başlarken okuma sırası (geçmiş) — **5 satır**  
<sub>örnek: 1.  CLAUDE.md  (kalıcı kurallar, tuzaklar, komutlar)…</sub>

**215.** Vaka 2 süre tablosunun nasıl doldurulacağı (genel kural 7. parçada: 693) — **3 satır**  
<sub>örnek: -   Başlangıç = sahibinin "Vaka 2'ye başla" dediği an.   Tarih ve saati aşağıdaki tabloya yaz.…</sub>

**216.** Vaka 2 süre kaydı (geçmiş) — **54 satır**  
<sub>örnek:   adım (7. parça)   başladı   bitti   not  …</sub>

**217.** Vaka 1 dersinin açıklaması — **1 satır**  
<sub>örnek: Vaka 1'de vaktin çoğu   Onay 3'te  , sahibinin oynarken tek tek bulduğu görsel sorunlarına gitti. Hepsi baştan…</sub>

**218.** Tablo başlığı — **1 satır**  
<sub>örnek:   sorun (Vaka 1)   Vaka 2'de nasıl önlenir  …</sub>

**219.** Vaka 2 için araç işi (yapıldı) — **4 satır**  
<sub>örnek:   Araçları Vaka 2'ye aç (adım 5'ten önce, ~1 saat):  …</sub>


## sablon/vakalar/vaka3_baslangic.md

**220.** Vaka 3 başlangıç notu — **1 satır**  
<sub>örnek: Vaka 3, Vaka 2 ile aynı şablonla üretilir; Vaka 2'nin ölçümünden çıkan   iki hızlandırma kuralı   bu vakada il…</sub>

**221.** Vakaya başlarken okuma sırası (geçmiş) — **5 satır**  
<sub>örnek: 1.  CLAUDE.md …</sub>

**222.** Vaka 3'ün tipi (o vakaya özel karar) — **1 satır**  
<sub>örnek: -   Tip: Bilmece (17 Ekim, sahibinin kararı)   — Vaka 1 ve 2 gibi; oyuncu da suçluyu bilmez. Taslak ( kaynak/Y…</sub>

**223.** Vaka 3'ün konusu (o vakaya özel karar) — **1 satır**  
<sub>örnek: -   Konu: Simit Soygunu (17 Ekim, sahibinin onayı).   Yan karakter   Gizem  : pastanenin tezgâhtarı, yirmili y…</sub>

**224.** Vaka 3 süre kaydı (geçmiş) — **32 satır**  
<sub>örnek:   ara   durdu   başladı   süre  …</sub>


## sablon/vakalar/vaka4_baslangic.md

**225.** Vaka 4'ün amacı (açıklama) — **1 satır**  
<sub>örnek: Vaka 4, Vaka 3'ün bütün kurallarıyla   sıfırdan   üretilen ilk vakadır. İki amacı var (sahibinin kararı, 10 Ka…</sub>

**226.** Vaka 4'ün amacı — **2 satır**  
<sub>örnek: 1. Vaka 3'ten çıkan kurallar yeni bir vakada çalışıyor mu, yeni kural çıkıyor mu, görmek.…</sub>

**227.** Vaka 4'ün hangi hesapla yürüdüğü (geçmiş) — **1 satır**  
<sub>örnek: Vaka 4 yalnız sahibinin Claude hesabıyla yürür (ikinci kişi/hesap yok). Bittikten sonra sonuçlara göre yeniden…</sub>

**228.** Vakaya başlarken okuma sırası (geçmiş) — **6 satır**  
<sub>örnek: 1.  CLAUDE.md …</sub>

**229.** Vaka 4'ün konusu (o vakaya özel) — **1 satır**  
<sub>örnek: Kaynak:  kaynak/YENI OYUN SEZON.md  →   "VAKA 4 — FALCI"   (Cihangir'de kahve falcısı, şantaj suçlaması, kafen…</sub>

**230.** Vaka 4'te yapılan deneme (Codex 2 kol) — **1 satır**  
<sub>örnek: -   Codex 2 kolla denenir   (resim aşaması). Amaç: hesabın aynı anda kaç resim isteğini kabul ettiğini, hız sı…</sub>

**231.** Vaka 4'e özel cevaplanmış soru (çeviri) — **1 satır**  
<sub>örnek: -   Çeviri (cevaplandı, 10 Kasım 2026):    RAF KARARLARI.md  §11c Vaka 4'ü çeviri dahil ölçmeyi söylüyordu; sa…</sub>

**232.** Vaka 4 süre kaydı (geçmiş) — **27 satır**  
<sub>örnek:   ara   durdu   başladı   süre  …</sub>


## sablon/vakalar/vaka5_baslangic.md

**233.** Vaka 5'in kimin yazdığı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 5 ortağın yazdığı ilk vakadır (Barbaros'un kararı, 11 Kasım 2026: önce Vaka 5'in metni, adım 1–7; Bilmece…</sub>

**234.** Yönlendirme — **1 satır**  
<sub>örnek:  vaka4 baslangic.md  §0 ile aynı. Örnek form:  vaka4 form.md .…</sub>

**235.** Vaka 5'in konusu (o vakaya özel) — **1 satır**  
<sub>örnek: Kaynak:  kaynak/YENI OYUN SEZON.md  → "VAKA 5 — VAPUR". Taslaktaki Columbo (Ters) tipi kullanılmaz; konu Bilme…</sub>

**236.** Vaka 5 süre kaydı (geçmiş) — **14 satır**  
<sub>örnek:   Başladı: 11 Kasım 2026, 14:01 (İstanbul)   — ortağın "forma başla" dediği an.…</sub>


## sablon/vakalar/vaka6_baslangic.md

**237.** Vaka 6'yı kimin yazdığı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 6'yı ortak yazar (Barbaros, 12 Kasım 2026: bütün kararlar ortağın). Yeni plana göre   resimsiz  : adım 1–…</sub>

**238.** Vaka 6'nın okuma sırası — **1 satır**  
<sub>örnek:  vaka6 oneri.md  →  ../3 kanon kaydi.md  (kural G) →  ../6 vaka formu.md  (yeni: §2 kişi tablosu, §12 "kim ney…</sub>

**239.** Vaka 6'ya özel karar (konu, kişiler, kanon) — **9 satır**  
<sub>örnek: -   Konu: "İsimsiz Mektuplar" (Üsküdar)  ,  vaka6 oneri.md 'deki öneri olduğu gibi seçildi.…</sub>

**240.** Vaka 6 süre kaydı (geçmiş) — **22 satır**  
<sub>örnek:   Başladı: 12 Kasım 2026, 20:57 (İstanbul)    (13 Kas düzeltmesi: ilk kayıtlar UTC ile yazılmıştı, hepsi +3 sa…</sub>


## sablon/vakalar/vaka7_baslangic.md

**241.** Vaka 7'yi kimin yazdığı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 7'yi Oğuz Bey yazar (Barbaros, 13 Kasım 2026). Plana göre   resimsiz  : adım 1–7, hikâye donunca biter. M…</sub>

**242.** Vaka 7'nin okuma sırası — **1 satır**  
<sub>örnek:  ../3 kanon kaydi.md  (kural G) →  ../6 vaka formu.md  → form  vaka7 form.md . Örnek form:  vaka6 form.md .…</sub>

**243.** Vaka 7'nin konu taslağı (o vakaya özel) — **21 satır**  
<sub>örnek: -   Konu: "Açık Artırma" (Nişantaşı).   Müzayede evinin sahibesi, akşamki satışın en değerli parçası olan sara…</sub>

**244.** Vaka 7 süre ve durum kaydı (geçmiş) — **14 satır**  
<sub>örnek:   Başladı: 15 Kasım 2026, 02:00 (İstanbul)  , ortağın "bu haliyle yazabiliriz, başlayalım" dediği an. Konu kon…</sub>


## kaynak/DEVIR.md

**245.** Oturum kaydı (ne yapıldı, durum, soru-cevap) — **262 satır**  
<sub>örnek:   Bir sohbet penceresinden ötekine devir.   Önce  CLAUDE.md 'yi oku   (sözleşmeler,   tuzaklar, komutlar orada…</sub>

**246.** 🗄 eski oyun — Eski oyunun oturum kaydı (23 Eylül öncesi) — **82 satır**  
<sub>örnek:   Aşağıdaki §1 ve sonrası   eski oyunun   (dokuz vaka,  index.html ) 23 Eylül durumudur;   eski oyun o günden …</sub>


## kaynak/OKUBENI.md

**247.** 🗄 eski oyun — Eski oyunun vaka, sızıntı ve ekonomi notları (arşivde) — **341 satır**  
<sub>örnek:    kaynak/OKUBENI.md 'den 16 Kasım 2026'da taşındı (eski satır 142–1146). Eski oyun yayınlanmayacak; yeni iş b…</sub>

