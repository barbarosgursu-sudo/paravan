# Kural olmayan satırlar — kontrol listesi

Ham listede 3.585 satır var:

- **Kural: 1611.** Bunlar yeni kural dosyasına gidecek.
- **Kural değil: 1379.** Geçmiş, açıklama, başlık, örnek ya da süre kaydı.
- **Eski oyuna ait: 595.** Yeni oyunda geçerli değil.

Aşağıda kural saymadığım satırlar, aynı sebeptekiler bir arada. Her grubun yanında bir örnek var. Yanlış bulduğun grubun numarasını söylemen yeter.

## CLAUDE.md

**1.** Oyunun tanımı — **1 satır**  
<sub>örnek: Türkçe, İstanbul-Noir, ahlaki tercih temelli dedektiflik oyunu. Tek dosyalık HTML, dikey/mobil. Yayında: https…</sub>

**2.** Vaka 6'nın durumu (geçmiş) — **1 satır**  
<sub>örnek:   ### ✅ VAKA 6 DONDU (15 Kasım 2026, adım 14): Onay 3 düzeltmeleri gömüldü, kapı GEÇTİ, sızıntı taraması temiz…</sub>

**3.** 🗄 eski oyun — Doğrulayıcının eski oyundaki kural ve uyarı sayısı — **1 satır**  
<sub>örnek: Doğrulayıcı eski oyunda   15 kural   çalıştırıyor (K16 kararsız yol dahil; K15 yalnız yeni oyunda) ve hâlihazı…</sub>

**4.** Açıklama: eski sayfa tablet kurallarına girmez — **1 satır**  
<sub>örnek: Eski oyunun sayfası bu kurallara girmez (CSS yalnız  build html.js yeni 'de gömülür).…</sub>

**5.** 🗄 eski oyun — Eski oyunun çıkarım tahtası aracı — **1 satır**  
<sub>örnek:   Çıkarım başlığı değiştirdikten sonra    cd kaynak && node arac tahta denetim.js  — her başlığı, o çıkarıma u…</sub>

**6.** 🗄 eski oyun — Eski oyunun 40 kararını denetleyen araç — **1 satır**  
<sub>örnek:   Karar metni / cengoBag / para değiştirdikten sonra    cd kaynak && node arac akis denetim.js  — 40 kararın h…</sub>

**7.** 🗄 eski oyun — Eski oyunun dokuz vakasını okuyan araç — **1 satır**  
<sub>örnek:   Bir vakayı baştan sona okumak için    cd kaynak && node arac okuma.js V1  — vakanın bütün metnini oyuncunun …</sub>

**8.** Açıklama: çıkarımlar neden vaka içi — **1 satır**  
<sub>örnek: Çıkarımlar vaka içidir (knowledge dar kümeyle türetilir), o yüzden ağaçlar vaka başına; vakalar arası bağ KARA…</sub>

**9.** 🗄 eski oyun — Eski oyunun Cengo bağı görsel ve metni — **1 satır**  
<sub>örnek:   Cengo bağı artık hem görülüyor hem duyuluyor.   31 karar  cengoBag 'i besliyor. 20 Eylül'de iki yanıt da ver…</sub>

**10.** Başlık — **3 satır**  
<sub>örnek:   Cengo satırının üç kuralı:  …</sub>

**11.** 🗄 eski oyun — Eski oyunun 5 alevlik göstergesi — **1 satır**  
<sub>örnek: Ekrandaki 5 alevlik gösterge notun "görünmez sayaç" ilkesiyle çelişiyor; sahibi şimdilik kalmasına karar verdi…</sub>

**12.** 🗄 eski oyun — Eski oyunun çözülmeyen iki olgusu — **1 satır**  
<sub>örnek:   Kanonda ÇÖZÜLMEYEN iki olgu var:    ceyda pay  ve  sevil pay .  kaya biliyordu  da  belirsiz  listesinde ama…</sub>

**13.** Fable incelemesinin geçmişi — **1 satır**  
<sub>örnek: Metin, mantık ve ekonomi   bitti  . Fable 5.1 taze göz incelemesi (16 Eylül 2026) uygulandı — bulgular ve comm…</sub>

**14.** ChatGPT incelemesinin geçmişi — **1 satır**  
<sub>örnek: ChatGPT taze göz incelemesi (20 Eylül 2026) —  kaynak/inceleme chatgpt.md .   Açık bulgu kalmadı.   Beş bulgu …</sub>

**15.** 🗄 eski oyun — Eski oyunun kanonu (İlyas, Kaya) — **1 satır**  
<sub>örnek: Bu iki eklemenin bağladığı kanon:   İlyas'ın Kaya'nın mahallesiyle bir bağı olduğu   bir daha yazılamaz, ve   …</sub>

**16.** 🗄 eski oyun — Eski oyunun 63 görseli — **1 satır**  
<sub>örnek:   Görseller: 63 gömülü   (sezon 59'da kapatılmıştı; 20 Eylül'de sahibinin kararıyla Cengo–Peri ikili kareleri …</sub>

**17.** Yapılacak iş notu (ses dosyaları) — **1 satır**  
<sub>örnek: Kalan iş:  ses/efekt  .wav    5 sentetik yer tutucu   gerçek  .mp3  ile değiştirilecek. Sipariş metinleri  kay…</sub>

**18.** Müzik geri istenirse ne yapılacağı (açıklama) — **1 satır**  
<sub>örnek:   Müzik geri istenirse   sıfırdan başlanmaz ama kod işi gerektirir: ev standardı, sekiz stil satırı, kesme nok…</sub>

**19.** Android aşamasının yapılacakları — **1 satır**  
<sub>örnek: Sonrası Android aşaması (bilerek ertelendi; 9 Kasım 2026'dan beri çerçevesi  kaynak/RAF KARARLARI.md ): Capaci…</sub>

**20.** Eski dalları silme hatırlatması — **1 satır**  
<sub>örnek:   Android aşamasına girerken sahibine HATIRLAT — eski dalları toplu silecek (17 Ekim 2026 isteği).   GitHub'da…</sub>


## sablon/1_oyun_yapisi.md

**21.** Başlık ("İçinde bulunması gerekenler") — **1 satır**  
<sub>örnek: 3.   İçinde bulunması gerekenler:  …</sub>

**22.** Başlık ("Yasak") — **1 satır**  
<sub>örnek: 4.   Yasak:  …</sub>

**23.** Not: sonraki vakaların ipucu sayısı sonra kararlaştırılacak — **1 satır**  
<sub>örnek: - Sonraki vakalar: bu iki vakayı oynadıktan sonra karar verilecek.…</sub>

**24.** Tablo başlığı — **1 satır**  
<sub>örnek:   seçim   sonuç  …</sub>

**25.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**26.** Kapanmış soru (kararı kurallarda) — **3 satır**  
<sub>örnek: 1. ~~Yanlış suçlamanın bedeli~~ → tek hak, yalnız para, o vakada kalır.…</sub>


## sablon/2_kural_kitabi.md

**27.** Belgenin giriş notu — **1 satır**  
<sub>örnek: Bütün vakalar bu kurallara uyar. Kural değişecekse önce burada değişir. Kaynak: Ton, Sezon, Çerçeve belgeleri …</sub>

**28.** Kasanın neden kalktığı — **1 satır**  
<sub>örnek:  (Sahibinin kararı, 16 Kasım 2026: kasanın bir anlamı yoktu — yalnız birikiyor, hiçbir şeye bağlanmıyordu. Kas…</sub>

**29.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**30.** Kural kitabının eski soru-cevabı (kararı kuralda yazılı) — **11 satır**  
<sub>örnek: 1. ✓  Karar: a (21a).    Çıkarımlar cevabı söylüyor.   Şu an oyun iki olguyu birleştirip "Nazlı'yı sete Serkan…</sub>


## sablon/3_kanon_kaydi.md

**31.** Tablo başlığı — **4 satır**  
<sub>örnek:   kişi   bilinen  …</sub>

**32.** Açık nokta: ileride karara bağlanacak (yapılacak iş) — **3 satır**  
<sub>örnek: - Ev sahibinin adı, yaşı, tuhaflığı → Vaka 2…</sub>

**33.** Kapanmış açık nokta (cevabı kanonda) — **2 satır**  
<sub>örnek: - ~~Yan karakterin adı, kişiliği, çırak mı garson mu~~ → Gizem, tezgâhtar, hazırcevap (17 Ekim 2026)…</sub>

**34.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**35.** Kapanmış soru-cevap (kararı kurallarda) — **4 satır**  
<sub>örnek: 1. ✓  Karar: a (kasaya bağlı) — 16 Kasım 2026'da geçersiz: kasa kalktı, taç her yolda alınır (2. parça kural 2…</sub>


## sablon/4_motor_sinirlari.md

**36.** Not: aşağıdaki eski karar ekranı kalktı — **1 satır**  
<sub>örnek: -  (16 Kasım 2026: aşağıdaki karar ekranı / sonuç sayfası / kasa düzeni KALKTI — kod değişti (14bbf84). Bugünk…</sub>

**37.** Kalkmış eski karar ekranı (kasa) — **1 satır**  
<sub>örnek: -   Karar ekranı:   kapı yok, dört karar açık. Her seçenekte kısa sonuç, kasaya girecek toplam, Cengo'nun tavr…</sub>

**38.** Kalkmış eski sonuç sayfası (kasa) — **1 satır**  
<sub>örnek: -   Sonuç:   kararın ara karesi, Cengo satırı, anı defteri notu, ücret + karar parası. Cengo göstergesi (alev)…</sub>

**39.** Yapılan işler notu — **1 satır**  
<sub>örnek:  ✓ = yapıldı (8 Ekim 2026):  kaynak/motor yeni.js ,  yeni arayuz.js , doğrulayıcı K17–K19,  test yeni kimyapti…</sub>

**40.** Tablo başlığı — **2 satır**  
<sub>örnek:   #   iş   neden  …</sub>

**41.** Yapılmış iş (iş listesi) — **10 satır**  
<sub>örnek:   1   ✓   Kim yaptı? ekranı:   şüpheli + iki kanıt seçimi, üç sonuç   1. parça  …</sub>

**42.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**43.** Kapanmış soru-cevap (kararı kurallarda) — **3 satır**  
<sub>örnek: 1. ✓  Karar: a (iki figür).    Ekranda iki figür sınırı   uygun mu? Üç kişilik sahnelerde (Peri, Cengo, konuk)…</sub>


## sablon/5_gorsel_sistemi.md

**44.** Tablo başlığı — **8 satır**  
<sub>örnek:   tür   ne   boyut  …</sub>

**45.** Başlık — **4 satır**  
<sub>örnek:   Peri  …</sub>

**46.** Vaka 3'ün geçmişi (kuralların neden yazıldığı) — **1 satır**  
<sub>örnek: Vaka 3'ün resimleri sahibinin Onay 3'ünde satır satır yeniden açıldı: konuşulan kişi ekranda yoktu, anılan şey…</sub>

**47.** Yerel üretim denemesinin kaydı (11 Ekim; bugün Codex düzeni) — **7 satır**  
<sub>örnek: 7.   Yerel üretim denemesi (11 Ekim 2026; karar verilmedi, sürüyor).   Amaç: ret/limit yok, gece otomatik üret…</sub>

**48.** Not: V6 boy değerlerinin nereden geldiği — **1 satır**  
<sub>örnek:  (V6 satırları 13 Kasım 2026'da formdaki boy tarifinden konan başlangıç değerleri; temel onayında  arac yanyan…</sub>

**49.** Eski zemin tablosu (14 Kasım'dan beri tarihî kayıt, 536) — **4 satır**  
<sub>örnek:   hiçbiri, koyu saç (varsayılan)   açık bej  …</sub>

**50.** Vaka 3 kaydı (trençkot ölçüsü) — **1 satır**  
<sub>örnek: - Vaka 3 kaydı: Peri'nin trençkotu   uzun, diz altına iner   (sahibinin seçtiği ölçü: un deposu karesi, 8 Kası…</sub>

**51.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**52.** Kapanmış soru-cevap (kararı kurallarda) — **4 satır**  
<sub>örnek: 1. ✓  Karar (8 Kasım 2026, eski kararın yerine): yalnız satırların istediği ifade ve pozlar üretilir (B).    K…</sub>


## sablon/6_vaka_formu.md

**53.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**54.** Formun boş alanı (form dosyasında kalır) — **32 satır**  
<sub>örnek:   Vaka no ve adı    …</sub>

**55.** Tablo başlığı / formun boş tablosu — **15 satır**  
<sub>örnek:   kod   cümle   hangi ipucundan  …</sub>


## sablon/7_uretim_sureci.md

**56.** Tablo başlığı / formun boş tablosu — **3 satır**  
<sub>örnek:   #   adım   kim   çıkış şartı  …</sub>

**57.** Vaka 1 derslerinin nerede olduğu (yönlendirme) — **1 satır**  
<sub>örnek: -   Vaka 1 dersleri   (zamanı en çok yiyen görsel düzeltmeleri ve önlemleri):  vakalar/vaka2 baslangic.md  §2–…</sub>

**58.** Vaka 2'nin süre kaydı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 2'de metin tarafı 2 sa 52 dk sürdü; bunun 1 sa 56 dk'sı Onay 2'ydi ve 22 notun   hepsi bulanık replikti  …</sub>

**59.** Başlık — **4 satır**  
<sub>örnek:   Giriş (K17)  …</sub>

**60.** Süre tahmini (kural değil) — **6 satır**  
<sub>örnek:   Form + onay   yarım gün  …</sub>

**61.** Vaka 1'e özel motor işi notu (yapıldı) — **1 satır**  
<sub>örnek:   Vaka 1'e özel:   motor işleri (Kim yaptı? ekranı, yüzleşme, para, kapanıştaki iki hâl, yeni denetimler) bir …</sub>


## sablon/8_shorts.md

**62.** Shorts belgesinin giriş açıklaması — **1 satır**  
<sub>örnek: 14 Kasım 2026, sahibinin kararı. Her vaka için 2–3 kısa tanıtım videosu (30–55 sn). Vaka yayına girince birkaç…</sub>

**63.** Kimin ne yaptığı (açıklama) — **1 satır**  
<sub>örnek: Hattı sahibi kurdu, videoları Oğuz Bey üretir. Bu belge yeterli olsun diye yazıldı.…</sub>

**64.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**65.** Tablo başlığı — **1 satır**  
<sub>örnek:   Tip   Ne anlatır   Kapanış sorusu  …</sub>

**66.** Başlık — **1 satır**  
<sub>örnek:   Yasak:  …</sub>

**67.** Gerekçe: denetim neden en başta — **1 satır**  
<sub>örnek:   Neden en başta:   spoiler ancak video üretildikten sonra fark edilirse ses ve görüntü baştan üretilir. Bu yü…</sub>

**68.** Senaryo biçimi örneği — **1 satır**  
<sub>örnek:     ## video 1 · Kanca ⚙ baslik: Karaköy'de bir pastane soyuldu. Kim yaptı? #shorts ⚙ aciklama: Paravan Dedekt…</sub>

**69.** Ses aracı hakkında bilgi — **1 satır**  
<sub>örnek: Edge TTS ücretsizdir ve hesap istemez. Türkçe ana dilli iki ses var:  tr-TR-AhmetNeural  (erkek) ve  tr-TR-Eme…</sub>

**70.** Komut listesi (nasıl yapılır) — **1 satır**  
<sub>örnek:     cd kaynak # 1. Senaryoyu yaz: sablon/vakalar/vakaN shorts.md (Vaka 3 örneği hazır) node arac shorts.js N -…</sub>

**71.** Kurulum bilgisi — **1 satır**  
<sub>örnek: Gereken kurulum (bir kez): Node, Playwright ( arac ortam.js  bulur), ffmpeg, Python ve  pip install edge-tts .…</sub>


## sablon/TASLAK_tekrar_onleme.md

**72.** Taslağın başlık notu — **1 satır**  
<sub>örnek:     TASLAK — ONAYLANMADI.   Barbaros ile Claude arasındaki konuşmanın notu (12 Kasım 2026). Kural değil: şablo…</sub>

**73.** Vaka 1–5 karşılaştırma tablosu (çözümleme) — **7 satır**  
<sub>örnek:     Ne oldu   Suçlu kim   Neden yaptı   Yanlış iz   Karar  …</sub>

**74.** Fikir listesi (çeşit önerileri) — **23 satır**  
<sub>örnek: -   Neden yaptı:   intikam, kıskançlık, birini korumak, sevgi, gurur/itibar, şaka/iddia büyüdü, kaza sonra ört…</sub>

**75.** Şu an kanonda olanların durumu — **1 satır**  
<sub>örnek:   Şu an kanonda:   Gizem (V3'ten sonra büroda), ev sahibi (V2'den itibaren, yalnız komedi), avukat (V8'de döne…</sub>

**76.** Fikir listesi (dönen figür, iplik, semt seçenekleri) — **23 satır**  
<sub>örnek:   Yeni dönen figür seçenekleri (sahibi: hepsi olabilir):  …</sub>

**77.** Not: koda bakıldı — **1 satır**  
<sub>örnek: Koda bakıldı (12 Kasım 2026):…</sub>

**78.** Henüz konuşulmamış biçimler — **1 satır**  
<sub>örnek: - Diğerleri (henüz konuşulmadı, hepsi çok kod): ters vaka, saatli vaka, yalan bulma, kılık.…</sub>

**79.** Kararların etkisi üzerine çözümleme — **8 satır**  
<sub>örnek:   Sahibi:   vaka sonundaki kararların oyuna gerçek bir etkisi yok gibi; Cengo'nun hoşuna gidiyor/gitmiyor, az/…</sub>

**80.** Başlık — **3 satır**  
<sub>örnek:   Ek fikirler (sahibi: hepsi olabilir, 12 Kasım 2026):  …</sub>

**81.** Yapılacak iş: belgelere işlenirken değişecekler — **1 satır**  
<sub>örnek:   Belgelere işlenirken değişecekler (not):    1 oyun yapisi.md  "Tohum yok" kuralı ve doğrulayıcı K19 (tohumu …</sub>

**82.** Tekrara düşmenin sebepleri (çözümleme) — **4 satır**  
<sub>örnek:   Konuşmanın kökü — tekrara düşmenin 10 sebebi (12 Kasım 2026):  …</sub>

**83.** Onaylanmamış öneri — **4 satır**  
<sub>örnek:   Öneri olarak kaldı, onaylanmadı:  …</sub>

**84.** Açık soru — **6 satır**  
<sub>örnek:   Açık kalanlar (Barbaros: "şimdilik açık kalsın"):  …</sub>

**85.** Aynı günün başka işleri (geçmiş) — **1 satır**  
<sub>örnek:   Aynı gün ayrıca:   ortağın 4 sorusu cevaplandı ( kaynak/DEVIR.md ): V5 dondu, V4 resimlerini ortak yapacak (…</sub>

**86.** Örnek ve gerekçe (kararlara giden yol) — **25 satır**  
<sub>örnek: Yukarıdaki bölümler kararları tutar; bu bölüm o kararlara giden örnekleri ve gerekçeleri tutar.…</sub>

**87.** Ortağın okuma notu — **1 satır**  
<sub>örnek:   Ortak taslağı Claude'la baştan okudu (çeşit listeleri, ölçü, kararların etkisi, yeni oyun biçimleri). Sonra …</sub>

**88.** Yeni oyun biçimi fikirleri (karar verilmedi) — **22 satır**  
<sub>örnek:   Ters vaka   — Oyuncu suçluyu baştan görür, Peri görmez; iş "kim?" değil "nasıl kanıtlarım?" (Columbo).…</sub>

**89.** Vaka 5'te nerede takıldık (çözümleme) — **12 satır**  
<sub>örnek:   Ortak, Vaka 5'te en çok nerede takıldığını Claude'la çıkardı ve kural olarak öneriyor.   Barbaros onaylar ya…</sub>

**90.** İptal edilen öneri (D, E, F) — **3 satır**  
<sub>örnek: -   D. Aksiyon gerçekte olur mu:   kovalamaca ve şakalardaki fiziksel olaylar bir kez bu soruyla okunur. → 4…</sub>

**91.** Öneri G (kararı 1028'de) — **1 satır**  
<sub>örnek: -   G. Ortağa kısa kanon özeti:   okumaya başlamadan önce yarım sayfa (büro nerede, kim kimdir, dönen figürler…</sub>

**92.** Onay notu (kurallar 1017–1019'da) — **2 satır**  
<sub>örnek:   Barbaros'un cevabı (12 Kasım 2026): ONAYLANDI, Vaka 6'dan itibaren geçerli.  …</sub>

**93.** İptal kaydı (E) — **1 satır**  
<sub>örnek: -   E İPTAL (12 Kasım 2026, Barbaros):   önce yumuşatılmış hâliyle (soru ya da kendiliğinden söylenme sebebi) …</sub>

**94.** İptal kaydı (D, F) — **1 satır**  
<sub>örnek: -   D ve F İPTAL (12 Kasım 2026, Barbaros):   önce olduğu gibi onaylanmıştı; aynı gün geri alındı, şablondan ç…</sub>

**95.** İşlendiği yerler (kayıt) — **1 satır**  
<sub>örnek: -   İşlendi:    6 vaka formu.md  §2 kişi tablosu (A, C), §12 "kim neyi biliyor" (B), §19 kontrol listesi;  7 u…</sub>

**96.** Yapılacak iş (Vaka 1–4 yeniden geçirilecek) — **1 satır**  
<sub>örnek: - Vaka 1–4 yeni plana göre bu kurallarla yeniden geçirilecek ( kaynak/DEVIR.md  en üst bölüm).…</sub>


## uretim/CLAUDE.md

**97.** Tablo başlığı — **2 satır**  
<sub>örnek:   karakter   sabit  …</sub>

**98.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**99.** Ölçüm kaydı (resim başına süre) — **1 satır**  
<sub>örnek:   Ölçüm (13 Kasım 2026, ChatGPT Plus):   resim başına ~95–115 sn; 2 kolda resim başına süre aynı (iş iki katı)…</sub>

**100.** Başlık — **3 satır**  
<sub>örnek: Döngü çalışırken sen:…</sub>

**101.** Denenip bırakılan yöntem (kayıt) — **2 satır**  
<sub>örnek: - Denenip BIRAKILAN (14 Kasım): ifadeyi temeline CLIP benzerliği ya da renk doygunluğuyla karşılaştırıp "soluk…</sub>


## uretim/ISTEM_KALIPLARI.md

**102.** Belgenin amacı (açıklama) — **1 satır**  
<sub>örnek:  istemleri hazırla  N   her vakada bu kalıplarla yazılır. Amaç: eski resimlerin (Vaka 1–2 ve eski Vaka 3) tarz…</sub>

**103.** Onaylı örnek resimlerin yeri — **5 satır**  
<sub>örnek: Onaylı örnekler (bu kalıplarla üretilip onaylandı):…</sub>

**104.** Ayraç çizgisi — **2 satır**  
<sub>örnek: ---…</sub>

**105.** Tablo başlığı — **1 satır**  
<sub>örnek:   istem türü   tarz paragrafı  …</sub>

**106.** Gerekçe: tarz paragrafı neden tek başına yetmez — **1 satır**  
<sub>örnek: Paragraf tek başına "çizgi roman" der; boyalı referans yoksa resim karikatüre kayar (kalın kontur, düz boya). …</sub>

**107.** V6 kart hatasının geçmişi (gerekçe) — **1 satır**  
<sub>örnek: V6'da Cengo'nun kartı G2 (iki kişi yan yana, yatay 3:2, küçük tam boy, "ölçü resmi") katalog çizimine kaydı: k…</sub>

**108.** Gerekçe: üretici hangi eli çiziyor — **1 satır**  
<sub>örnek: Üretici, kameraya YAKIN koldaki doğal eli çiziyor: G80'de tepsi uzaktaki sol elde istendi, iki düzeltmede de y…</sub>

**109.** İlk istemlerin hatası (geçmiş; dersi 1240'ta) — **3 satır**  
<sub>örnek: 1. İlk istemler  5 gorsel sistemi.md  H6'daki "her istemde tarz paragrafı" satırına göre yazıldı → Peri ve Cen…</sub>


## uretim/AGENTS.md

**110.** Tablo başlığı — **1 satır**  
<sub>örnek:   yer   ne   sen  …</sub>


## uretim/OKUBENI.md

**111.** Klasörün açıklaması — **1 satır**  
<sub>örnek: Oyunun resimleri burada üretilir. Her vaka bir klasör:  v3/ ,  v4/  … Her şey GitHub'da durur; bilgisayar kapa…</sub>

**112.** Tablo başlığı — **2 satır**  
<sub>örnek:   Kim   Ne yapar  …</sub>

**113.** Klasör ve dosya açıklaması — **10 satır**  
<sub>örnek:    LISTE.md    resim listesi: no · tür · ne · önce onaylanması gereken   ✓  …</sub>

**114.** Ortak referansların açıklaması — **1 satır**  
<sub>örnek: Her vakada aynı kalanlar: Peri ve Cengo baş kırpıkları, kapalı giyimli tarz gövdeleri (kadın / erkek / iri erk…</sub>

**115.** Yönlendirme (hangi belgede ne var) — **3 satır**  
<sub>örnek: - Görsel kurallar:  sablon/5 gorsel sistemi.md  →   H. Görsel standart  …</sub>


## uretim/v3_eski/BIRIKIM.md

**116.** Belgenin giriş açıklaması (eski Vaka 3) — **1 satır**  
<sub>örnek: Vaka 3'te (2026-11-04 … 11-06,  D:\Yazilim\chatcpt-resim\v3 ) resim üretimi ve denetiminden öğrenilen her şey …</sub>

**117.** Ayraç çizgisi — **8 satır**  
<sub>örnek: ---…</sub>

**118.** Eski Vaka 3 sayımları (geçmiş) — **10 satır**  
<sub>örnek:   Resim   67 (LISTE.md). Hepsi  onayli/ 'de.  …</sub>

**119.** Bölüm açıklaması — **1 satır**  
<sub>örnek: Komut "kontrol et". Bütün kurallar  CLAUDE.md 'de; burada sebepleri ve uygulamada öğrenilenler var.…</sub>

**120.** Örnek (hangi resimde ne oldu) — **8 satır**  
<sub>örnek: - G2, G25 ve G55: kırmızı, kaldı.…</sub>

**121.** Eski PowerShell kırpma betiği (araç bilgisi) — **6 satır**  
<sub>örnek: - Kırpma ve büyütme scripti (PowerShell, System.Drawing). Çalıştırma:  powershell -NoProfile -ExecutionPolicy …</sub>

**122.** Eski Vaka 3'e özel şerit hazırlığı — **4 satır**  
<sub>örnek: - Şerit onaylı G6, G7, G8 ve G9'dan (Nadide, Ferruh, Kenan, Gizem) yapılır. Dört resim aynı yüksekliğe (900 px…</sub>

**123.** Codex'in nasıl çalıştığı (gözlem) — **3 satır**  
<sub>örnek: - Araç:  image gen.imagegen  (çağrı adı  tools.image gen  imagegen ). Araç alttaki modelin adını ve sürümünü b…</sub>

**124.** Tablo başlığı — **2 satır**  
<sub>örnek:   Sorun   Sebep   Çözüm  …</sub>

**125.** Eski Vaka 3'te çıkan sorun (çözümü AGENTS.md'de kural) — **6 satır**  
<sub>örnek:   Codex "üret"i genel bir istek sandı   Codex'te açık proje bir üst klasördü ( chatcpt-resim );  AGENTS.md 'yi…</sub>

**126.** Gözlem: Codex referansı yoksa atlıyor — **1 satır**  
<sub>örnek: - Codex referans listesindeki bir  onayli/G k   yoksa resmi atlıyor. Bu yüzden ilk turlar kısmi oluyor. Temel …</sub>

**127.** Gözlem: Codex resimleri tek tek bırakıyor — **1 satır**  
<sub>örnek: - Codex tur sürerken resimleri tek tek  uretilen/ 'e bırakıyor. "kontrol et" Codex çalışırken de yapılabilir. …</sub>

**128.** Dosya izin sorununun geçmişi — **6 satır**  
<sub>örnek: - Belirti: resim başına süre 16:21'den sonra ~1 dk'dan 5–12 dk'ya çıktı. Codex'in kendi ölçtüğü üretim süresi …</sub>

**129.** Codex'in yazdığı dosyalar ve deneme klasörü (bilgi) — **3 satır**  
<sub>örnek: - Codex tur sonunda  uretim ozeti .md  ve  referans bekleyenler.md  gibi özet dosyaları da yazdı. Bunlar zarar…</sub>

**130.** Filtre engeli denemelerinin kaydı (sonuçları 1391–1396'da) — **18 satır**  
<sub>örnek:   G   Ne zaman   Sonuç   Mesaj  …</sub>

**131.** Eski Vaka 3 ret kaydı (resim resim) — **17 satır**  
<sub>örnek: Burada yalnız sorun çıkanlar var. Geri kalanlar ilk üretimde onaylandı: G10, G11, G15, G16, G17, G18, G30–G39,…</sub>

**132.** Tablonun açıklaması — **1 satır**  
<sub>örnek: "Dekolte" sütunu, filtre açısından ve görsel incelemeyle (2026-11-06) dolduruldu.…</sub>

**133.** Eski referans dosyaları envanteri — **31 satır**  
<sub>örnek:   Dosya   Ne   Kullanıldığı istem   Dekolte  …</sub>

**134.** Yapılacak iş: v4 için Peri referansları — **1 satır**  
<sub>örnek:   v4 için:   Peri'nin bütün referansları (L , peri  , poz peri  ) dekolteli. Yeniden yapılmalı ya da yalnız ba…</sub>

**135.** Yerel Claude belleğinin yeri (bilgi) — **1 satır**  
<sub>örnek: 1.   Bellek klasöre bağlı.   Yerel Claude'un belleği  C:\Users\BG\.claude\projects\D--Yazilim-chatcpt-resim-v3…</sub>

**136.** Başlık — **1 satır**  
<sub>örnek: 2.   Sahibinin çalışma biçimi:  …</sub>


## uretim/v3_eski/CLAUDE.md

**137.** Eski Vaka 3 düzeninin açıklaması — **1 satır**  
<sub>örnek: Sahibi (Barbaros) resimleri iki yoldan üretir: Codex ( AGENTS.md ) ve web ChatGPT (elle). İkisi de  uretilen/ …</sub>

**138.** Klasör açıklaması — **1 satır**  
<sub>örnek:  prompts/G n .md  (istem, sıralı referanslar,   Kontrol   notu) ·  referanslar/  ·  uretilen/  (onay bekleyen)…</sub>

**139.** Eski Vaka 3'e özel şerit notu — **1 satır**  
<sub>örnek: Şerit eski onaylı G6–G9'dan yapılmıştır. G6, G7, G8, G9'un dördü de YENİDEN onaylanınca şeridi yenile: dördünü…</sub>

**140.** Eski Vaka 3'ün bitiş adımı — **1 satır**  
<sub>örnek:  prompts/LISTE.md 'deki her G  onayli/ 'de → sahibine "Vaka 3 tamam;  onayli/  klasörünü bulut Claude'una gönd…</sub>


## uretim/v3_eski/AGENTS.md

**141.** Eski Vaka 3'teki 'dene' komutu (web resimlerini Codex'te sınama denemesi) — **7 satır**  
<sub>örnek: Sahibi web'de yaptığı resimleri Codex'in de üretip üretemediğini görmek istiyor. Yalnız adı verilen G'ler için…</sub>


## kaynak/RAF_KARARLARI.md

**142.** Belgenin tarih notu — **1 satır**  
<sub>örnek:  9 Kasım 2026. Sahibiyle konuşarak alındı. Bu belge   kararların kaydı  ; henüz tek satır kod yazılmadı. …</sub>

**143.** Belgenin neyin yerine geçtiği — **1 satır**  
<sub>örnek:     Bu belge,  YENI OYUN CERCEVE.md 'deki platform, dil, satış ve reklam kararlarının YERİNE geçer.     Çelişk…</sub>

**144.** Ayraç çizgisi — **1 satır**  
<sub>örnek: ---…</sub>

**145.** Başlık — **5 satır**  
<sub>örnek:   Dil (sahibinin kararları):  …</sub>

**146.** Hesap (10 sezon ~30 $) — **1 satır**  
<sub>örnek: - 10 sezonun hepsini alan oyuncu kitaba yıllar içinde ~30 $ öder.…</sub>

**147.** Gerekçe: fiyat — **1 satır**  
<sub>örnek: - Gerekçe: mobilde oyuncuların yalnız ~%2–5'i para öder; fiyatı düşürmek bu oranı pek değiştirmez. Satın almay…</sub>

**148.** Tablo başlığı — **1 satır**  
<sub>örnek:     Vaka 1–2   Vaka 3+ (satın almadı)   Satın aldı  …</sub>

**149.** Reklam sayısı hesabı — **1 satır**  
<sub>örnek:   Reklam sayısı (hesap, 10 vakalık sezon, her şeyi reklamla açan oyuncu):   vaka başına ~5 (geçiş 1, +1 hak 1,…</sub>

**150.** Raf–kitap ilişkisinin açıklaması — **1 satır**  
<sub>örnek: Raf kitapçı, kitap yayınevinin kitabı: raf kitabın içini yazmaz, kitap rafın kasasına karışmaz.…</sub>

**151.** Elenen uygulama adları (kayıt) — **1 satır**  
<sub>örnek: -   Elenen adlar:   "The Back Room" (ünlü "The Backrooms" korku evrenine çok yakın — aramada korku oyunları çı…</sub>

**152.** Ad kontrolü kaydı (9 Kasım) — **7 satır**  
<sub>örnek: -   Ad kontrolü (9 Kasım 2026, ön eleme — hukuki görüş değil):  …</sub>

**153.** Yayın sırası adımı (yapıldı) — **2 satır**  
<sub>örnek: 1. Vaka 3 bitirilir.…</sub>

**154.** Gerekçe: kitap adı — **1 satır**  
<sub>örnek: - Gerekçe: "cover story" = gerçeği saklamak için uydurulan hikâye (paravan şirketin göstermelikliği) + Peri es…</sub>

**155.** Elenen kitap adları — **1 satır**  
<sub>örnek: - Elenenler:  On Paper  (Hilmi'nin "Kâğıtta var"ı; gizem havası zayıf),  Front  (sert, anlaşılması zor),  Para…</sub>

**156.** Ad kontrolü kaydı — **1 satır**  
<sub>örnek: - Kontrol: "Cover Story" adlı dedektiflik/gizem oyunu bulunmadı (web araması; marka veritabanına ve mağazaya a…</sub>

**157.** Ölçülen hız (kayıt) — **1 satır**  
<sub>örnek: -   Ölçülen hız:   Vaka 2 ~11 sa aktif, takvimde ~1 hafta (10–16 Ekim). Vaka 3 17 Ekim'de başladı, 9 Kasım'da …</sub>

**158.** Gözlem: darboğaz — **1 satır**  
<sub>örnek: - Darboğaz otomasyonun hızlandıramadığı yerler: sahibinin onayları ve oyunu baştan oynaması, görsel yeniden ür…</sub>

**159.** Hesap: sezon süresi — **1 satır**  
<sub>örnek: - 10 vakalık bir sezon: iki haftada bir ~5 ay, ayda bir ~10 ay.…</sub>

**160.** Açık iş: yayın sıklığı sözü — **1 satır**  
<sub>örnek: - Yayın sıklığı sözü (Vaka 4–5 ölçülünce, §11c).…</sub>

**161.** Açık iş: alan adı ve tescil (sahibinin işi) — **1 satır**  
<sub>örnek: - Alan adının satın alınması ve TÜRKPATENT tescil başvurusu (sahibinin işi).…</sub>


## kaynak/YENI_OYUN_TON.md

**162.** Belgenin tarih ve taslak notu — **1 satır**  
<sub>örnek:  4 Ekim 2026.   Taslak:   §9–11'deki kararlar sahibinindir; geri kalan her karakter ayrıntısı ve her örnek rep…</sub>

**163.** Ayraç çizgisi — **14 satır**  
<sub>örnek: ---…</sub>

**164.** Eski oyun–yeni oyun karşılaştırma tablosu — **7 satır**  
<sub>örnek:     eski oyun   yeni oyun  …</sub>

**165.** Başlık — **7 satır**  
<sub>örnek:   Önerilen komik zaaflar:  …</sub>

**166.** Örneklerin açıklaması — **1 satır**  
<sub>örnek:  Ton göstermek için. Hiçbiri bir vakaya ait değil. …</sub>

**167.** Örnek replik (ton göstermek için) — **5 satır**  
<sub>örnek:     PERİ:   Kapıyı çalacağız, kendimizi tanıtacağız, kibarca soracağız.     CENGO:   Ya da kilidi açarız, kend…</sub>

**168.** Eski oyunun teşhisi (gerekçe) — **1 satır**  
<sub>örnek:   Eski oyunun teşhisi:   ilişki ölçülüyordu ama oynanmıyordu. Bağ 31 kararda değişiyordu; 40 kararın 23'ünde C…</sub>

**169.** Bölümün tarih notu — **1 satır**  
<sub>örnek:  4 Ekim 2026'da sahibiyle konuşularak karara bağlandı. Hedef: Peri'nin eski hayatından geri alınacak bir şey; …</sub>

**170.** Eski oyunda paranın ne olduğu (geçmiş) — **1 satır**  
<sub>örnek:   Eski oyunda ne oldu.   Her omurga vakadan sonra 59.000 lira sabit gider kesiliyordu. Kararların çoğu bunun a…</sub>

**171.** Gerekçe: para neden kaldırılmamıştı (kasa sonra kalktı) — **1 satır**  
<sub>örnek:   Para neden kaldırılmıyor.   Paranın asıl işi muhasebe değil,   cazibedir.   Her kararda üç şey çekişir: para…</sub>

**172.** Eski kasa düzeni (16 Kasım'da kalktı, kural 24) — **8 satır**  
<sub>örnek:   Karar: batmayı kaldır, cazibeyi tut.  …</sub>

**173.** Motorun eski para alanı (bilgi) — **1 satır**  
<sub>örnek:   Motor tarafı:   gider, faiz ve başlangıç kasası zaten  game data.json  →  ekonomi  alanında ayar olarak duru…</sub>

**174.** Tablo başlığı — **2 satır**  
<sub>örnek:   ALINIR (yapı, tür kalıbı)   ALINMAZ (somut ifade)  …</sub>

**175.** Sıradaki iş notu (4 Ekim) — **1 satır**  
<sub>örnek:   Sıradaki iş:   vaka listesi — her vaka için birer paragraflık fikir, sahibi seçer. Açık kalan dört ayrıntı (…</sub>


## kaynak/YENI_OYUN_SEZON.md

**176.** Belgenin tarih ve taslak notu — **1 satır**  
<sub>örnek:  4 Ekim 2026.   Taslak:   her vaka bir   öneridir  , kanon değildir. Sahibi seçer, çıkarır, değiştirir; onayla…</sub>

**177.** Ayraç çizgisi — **13 satır**  
<sub>örnek: ---…</sub>

**178.** Tablo başlığı — **4 satır**  
<sub>örnek:   iplik   nasıl taşınır  …</sub>

**179.** Eski dekolte kuralı (8 Ekim'de 1859 yerine geçti) — **1 satır**  
<sub>örnek:   Dekolte kuralı (sahibinin kararı, 4 Ekim 2026):   Peri'nin dekoltesi   her vakada, her kıyafette   deneme se…</sub>

**180.** Not: kural kitabına taşınacak (taşındı, kural 15) — **1 satır**  
<sub>örnek: - Bu kural oyun yapım şablonunun kural kitabına taşınacak.…</sub>

**181.** Bölümün onay notu — **1 satır**  
<sub>örnek:  Sahibinin onayıyla (4 Ekim 2026). Üç kanon eklemesi onaylandı: Cengo'nun bordrodaki hayali çalışan olarak gel…</sub>

**182.** Açılışın taslak senaryosu (açılış yazıldı) — **13 satır**  
<sub>örnek: İcra memurları Peri'nin evini boşaltıyor. Peri gururunu bırakmıyor: memurlara çay ikram ediyor, "O koltuk İtal…</sub>

**183.** Ev sahibi borcu önerisi (kalktı: borç yok, ev sahibi yalnız komedi) — **1 satır**  
<sub>örnek: Avukat kaçtığından beri büronun kirası ödenmemiş:   90.000 ₺   (3 ay × 30.000 ₺). Borç kasaya yazılmaz (batmak…</sub>

**184.** Ev sahibinin dönüşü (kanon kaydında var) — **1 satır**  
<sub>örnek: Sonra ara sıra döner: kira gününde kapıda, merdivende, en kötü anda. Peri ondan saklanır (Ton §9.4); Cengo'nun…</sub>

**185.** Sezon taslağındaki vaka önerisi (kanon değil) — **48 satır**  
<sub>örnek:   Müşteri:   Karaköy'de yaşlı bir balıkçı. Kırk yıllık teknesi bir gecede iskeleden kaybolmuş. Peşin ödeyecek …</sub>

**186.** Eski görsel sayısı planı (8 Kasım'da değişti: yalnız satırların istediği) — **10 satır**  
<sub>örnek: Her vakada iki karakterin yeni kıyafeti, her kıyafette 4 ifade:…</sub>

**187.** Eski görsel sayısı kararı (8 Kasım'da değişti) — **1 satır**  
<sub>örnek:     Görsel sayısı       ~96 kalıyor.   Her vakada ikisi de yeni kıyafet, dörder ifade.  …</sub>

**188.** Eski dekolte kararı (8 Ekim'de değişti) — **1 satır**  
<sub>örnek:     Peri'nin dekoltesi     Her vakada, her kıyafette deneme seviyesinde; azalmaz (§0).  …</sub>

**189.** Kapanmış açık nokta (Gizem) — **1 satır**  
<sub>örnek:   Açık kalan:   ~~yan karakterin adı ve kişiliği; çırak mı garson mu~~ (17 Ekim 2026: Gizem, tezgâhtar, hazırc…</sub>


## kaynak/YENI_OYUN_CERCEVE.md

**190.** Belgenin tarih notu — **1 satır**  
<sub>örnek:  23 Eylül 2026. Sahibiyle konuşarak alındı. Bu belge   kararların kaydı  , tasarım belgesi değil — henüz tek s…</sub>

**191.** Uyarı: kararlar RAF_KARARLARI'na taşındı — **1 satır**  
<sub>örnek:     ⚠ 9 Kasım 2026: platform, dil, metin anahtarı, satış, reklam ve gardırop kararları  RAF KARARLARI.md  ile …</sub>

**192.** Belgenin açıklaması — **1 satır**  
<sub>örnek:     Bu, Paravan'ın devamı değil, yeni bir oyun.   Mevcut Türkçe sezon (dokuz vaka,   bitmiş, denetlenmiş) elde…</sub>

**193.** Ayraç çizgisi — **8 satır**  
<sub>örnek: ---…</sub>

**194.** Oyunun ilk tanımı (İngilizce kısmı değişti) — **1 satır**  
<sub>örnek: Mavi Ay ( Moonlighting , 1985-89) tonunda, İngilizce, İstanbul'da geçen bir dedektiflik oyunu. Mevcut motorun …</sub>

**195.** Gerekçe: neden Mavi Ay — **7 satır**  
<sub>örnek:   Neden Mavi Ay:   Paravan'ın açılışı zaten o dizinin kurulumu. Araştırıldı ve birebir çıktı:…</sub>

**196.** Tablo başlığı — **1 satır**  
<sub>örnek:   konu   karar  …</sub>

**197.** Karar RAF_KARARLARI'na taşındı (orada kural) — **6 satır**  
<sub>örnek:     Dil     ⚠  9 Kasım 2026: Türkçe tasarım dili ve kanon, rafta YALNIZ İngilizce; çok dilli yapı —  RAF KARAR…</sub>

**198.** Gerekçe ve araştırma (dil, platform, mekân) — **5 satır**  
<sub>örnek:   Dil.   Araştırma: ABD'de mobil oyun kullanıcı başına yıllık gelir ~60 $, Hindistan'da ~3,5 $. Gelişmekte ola…</sub>

**199.** Eski kodun yeni oyuna taşınma ölçümü (23 Eylül) — **9 satır**  
<sub>örnek: Ölçüldü (23 Eylül 2026):…</sub>

**200.** İlk ekran tasarımı (bugünkü hâli 1. ve 4. parçada) — **5 satır**  
<sub>örnek: Sahibinin sekiz maddesinden altısı zaten kurulu. İki ekran yeni:…</sub>

**201.** İlk vaka tipi önerisi (bugünkü hâli 1. parça: yalnız Bilmece) — **3 satır**  
<sub>örnek: -   Mavi Ay tipi   — oyuncu da bilmez, gerçeği kurar.  (mevcut sistemin aynısı) …</sub>

**202.** İlk görsel maliyet hesabı — **8 satır**  
<sub>örnek: Mevcut 63 görsel ayrıldı: ~26 vakaya özel (mekân/kanıt), 14 vaka karakteri portresi, Peri+Cengo portresi, 4 Ce…</sub>

**203.** Gerekçe: dizi kavuşunca öldü — **1 satır**  
<sub>örnek: Dizide 3. sezonda ikili kavuşunca dizi öldü — reyting 9. sıradan 49'a düştü. "İki başrolü kavuşturma" kuralını…</sub>

**204.** Gerekçe — **1 satır**  
<sub>örnek:  cengoBag  tam olarak bir "kavuşacaklar mı" sayacı. Eski sözleşmedeki şu satır farkında olmadan buna karşı yaz…</sub>

**205.** Açık soru (23 Eylül; çoğu sonra kapandı) — **4 satır**  
<sub>örnek: -   Oyunun ve ajansın adı.   Mavi Ay'ın "Blue Moon"u gibi, ikisi birden olacak bir şey.…</sub>

**206.** İlk plan: tek vakayı kâğıtta yaz (yapıldı) — **1 satır**  
<sub>örnek:   Tek bir vakayı kâğıt üstünde baştan sona yaz.   Dört ekranın hepsi, gerçek metinle, kod yazmadan. Hafif bir …</sub>

**207.** İlk planın beklentisi — **1 satır**  
<sub>örnek: Bittiğinde iki şey netleşir: konuşma ekranının nasıl duracağı, ve arama ekranının gerçekten gerekip gerekmediğ…</sub>


## kaynak/gorsel_stil_sozlesmesi.md

**208.** 🗄 eski oyun — Eski oyunun görsel stili / Cengo bağı (belge arşivde) — **79 satır**  
<sub>örnek:   Amaç: 40+ görselin   tek elden çıkmış   gibi durması ve görsellerin metnin süsü değil     ipucunun taşıyıcıs…</sub>


## kaynak/cengo_bag_mekanigi.md

**209.** 🗄 eski oyun — Eski oyunun görsel stili / Cengo bağı (belge arşivde) — **79 satır**  
<sub>örnek:   Flört   kazanılır, verilmez.   Ani değil, kararlarla yavaşça birikir — ve düşebilir.   Cengo'nun Peri'ye yak…</sub>


## kaynak/dogrulayici_sozlesmesi.md

**210.** Belgenin açıklaması — **1 satır**  
<sub>örnek:   Bu belge, oyunu açmadan önce çalışacak   build-time doğrulayıcının   ne yapacağını   kesin olarak tanımlar. …</sub>

**211.** Ayraç çizgisi — **11 satır**  
<sub>örnek: ---…</sub>

**212.** Örnek (eski oyunun vakalarından) — **9 satır**  
<sub>örnek:   Nurcan örneği (bu kuralın doğuş sebebi):  …</sub>

**213.** 🗄 eski oyun — Eski oyunun istisnası (kaya_biliyordu V6'da çözülür) — **1 satır**  
<sub>örnek:   İstisna:    kaya biliyordu  finalde (V6)   çözülür   — "bilmiyordu" kesinleşir. Bu yüzden Kural 5,  kaya bil…</sub>

**214.** Örnek rapor çıktısı — **1 satır**  
<sub>örnek:     PARAVAN DOĞRULAYICI v1 ────────────────────── Kural 1 (Sözlük): PASS Kural 2 (Erişilebilirlik):PASS Kural …</sub>

**215.** Açıklama — **1 satır**  
<sub>örnek: Bu sınırlar, doğrulayıcının   çelişki   (yapısal) ile   kalite   (yazınsal) sorunlarını ayırdığını gösterir: m…</sub>

**216.** Açıklama: beş kural birlikte ne yapar — **1 satır**  
<sub>örnek: Beş kural bir arada, çelişkiyi   yazılabilir ama teslim edilemez   kılar: Kural 1 serbest ismi, Kural 2 ulaşıl…</sub>

**217.** Geçmiş: sonradan eklenen kurallar — **1 satır**  
<sub>örnek: Sözleşme beş kuralla yazıldı; uygulama sırasında altı kural daha eklendi (K6 bütçe, K7 seçim baskısı, K8 baskı…</sub>

**218.** Gerekçe — **1 satır**  
<sub>örnek:   Neden:   Vaka bitince olgular  kaliciOlgular a taşınıyor; künye katmanları ve koşullu metinler bu birleşik k…</sub>


## kaynak/veri_format_sozlesmesi.md

**219.** Ayraç çizgisi — **8 satır**  
<sub>örnek: ---…</sub>

**220.** Örnek — **2 satır**  
<sub>örnek:   Örnek   — "cinayet suphesi = dusus acisi VE (ceyda celiski VEYA komsu ses)":…</sub>

**221.** 🗄 eski oyun — Eski oyunun Vaka 4 ve yan vakalarına ait not — **1 satır**  
<sub>örnek:   Vaka 4 ve yan vakalarda kullanılır (ör.  {seed:"kaya kayit gordu", esit:true}  → farklı giriş).   Tüm varyan…</sub>

**222.** Örnek vaka verisi (eski oyun) — **1 satır**  
<sub>örnek:    json { "id": "V1", "tur": "omurga", "sira": 1, "belirir": null, "baslik": "Merdivendeki Adam", "arastirma":…</sub>

**223.** Tablo başlığı — **1 satır**  
<sub>örnek:   Kural   Okuduğu alan  …</sub>

**224.** Belgenin kapanış açıklaması — **1 satır**  
<sub>örnek: Bu format tüm tasarım kararlarını taşıyacak şekilde kuruldu: koşullu girişler (müşterisiz/keşif vakaları), kan…</sub>


## kaynak/OKUBENI.md

**225.** Yayın adresi ve derleme bilgisi — **1 satır**  
<sub>örnek: Yayındaki oyun: https://barbarosgursu-sudo.github.io/paravan/ Depo kökündeki  index.html    derleme çıktısıdır…</sub>

**226.** Derlemenin ne yaptığı (bilgi) — **1 satır**  
<sub>örnek: Derleme depo kökündeki  index.html 'i yeniden yazar. Görseller   gomulu gorseller.js 'ten okunur (44 görsel,  …</sub>

**227.** Bilgi: doğrulayıcı veri bulamazsa — **1 satır**  
<sub>örnek: Doğrulayıcı veri dosyasını bulamazsa hata koduyla çıkar; yani doğrulama koşmadan derleme yapılmaz.…</sub>

**228.** Dosya listesi (açıklama) — **14 satır**  
<sub>örnek: -  motor.js  → oyun mantığı (arayüzsüz,  class Oyun )…</sub>

**229.** Not: ses teşhisi paneli — **1 satır**  
<sub>örnek:   Ses üretimine başlarken geri açmak isteyebilirsin   — ses teşhisi paneli orada. Tek satır.…</sub>

**230.** Tablo başlığı — **1 satır**  
<sub>örnek:     Ne kontrol eder   Şiddet  …</sub>

**231.** 🗄 eski oyun — Eski oyunun K5 kuralı (Ceyda/Sevil) — **1 satır**  
<sub>örnek:   K5   Belirsizlik — Ceyda/Sevil kesinleşmemeli   uyarı  …</sub>

**232.** Doğrulayıcı kurallarının nasıl çalıştığı (açıklama) — **5 satır**  
<sub>örnek: K6 ve K7   gerçek motoru   kullanır ( motor.js ): bütün açma sıralarını dener, böylece simülasyon oyunla bireb…</sub>

**233.** Yönlendirme: eski oyun notları arşivde — **1 satır**  
<sub>örnek: Eski oyunun (dokuz vaka) açık uyarıları, kapatılan tuzakları, sızıntı ve ekonomi notları, vaka vaka tasarım ka…</sub>

**234.** Bilgi — **1 satır**  
<sub>örnek: Altyapı kuruldu. Sipariş metinleri:  ses promptlari.md .…</sub>

**235.** Durum: geçici sesler — **1 satır**  
<sub>örnek:   Şu an depoda geçici sentetik sesler var   ( ses/ .wav , ~3 MB) — gerçek parçalar değil, geliştirme sırasında…</sub>

**236.** Müzik dosya adları (müzik 19 Eylül'de kalktı) — **1 satır**  
<sub>örnek: - müzik:  prolog   masa   giris   arastirma   karar   sonuc   huzun   final …</sub>

**237.** Başlık — **1 satır**  
<sub>örnek: Davranış:…</sub>

**238.** Müzik davranışı (müzik kalktı) — **3 satır**  
<sub>örnek: -   Çapraz geçiş:   sahne değişince parça 700 ms'de karşılıklı kısılıp açılır.…</sub>

**239.** Yapılacak iş: gerçek sesler — **1 satır**  
<sub>örnek: - Gerçek ses parçalarının üretilip  ses/  klasörüne  .mp3  olarak konması, ardından geçici  .wav  dosyalarının…</sub>

**240.** Android aşamasının yapılacakları — **4 satır**  
<sub>örnek: Oyun Android'e Capacitor ile paketlenecek (WebView; motor ve veri olduğu gibi taşınır). O aşamada yapılacaklar…</sub>


## kaynak/yeni/OKUBENI.md

**241.** Dosya listesi (açıklama) — **5 satır**  
<sub>örnek:   dosya   ne  …</sub>

**242.** Kaynak metnin nerede olduğu (bilgi) — **1 satır**  
<sub>örnek: Kaynak metin: Vaka 2 için  sablon/vakalar/vaka2 diyalog.md  ( … arac diyalog.js ../sablon/vakalar/vaka2 diyalo…</sub>

**243.** Komut listesi — **2 satır**  
<sub>örnek:     cd kaynak node dogrulayici.js yeni # yeni veriyi denetler (argümansız = eski oyun) node test yeni v1.js # …</sub>

**244.** Bilgi: motor ve araçlar devralındı — **1 satır**  
<sub>örnek: Motor, doğrulayıcı ve araçlar   aynen   devralındı ( YENI OYUN CERCEVE.md  §3).…</sub>

**245.** Akışın açıklaması (kuralı 1. ve 4. parçada) — **1 satır**  
<sub>örnek: Akış (şablon,  sablon/1 oyun yapisi.md ): açılış sahneleri → masa → giriş + konuşma sahnesi → araştırma (ipucu…</sub>

**246.** Motor ekinin açıklaması (kod bilgisi) — **1 satır**  
<sub>örnek:   Motor eki  kaynak/motor yeni.js    ( OyunYeni extends Oyun ): Kim yaptı?, sonda ödenen ücret, suçlamanın kay…</sub>

**247.** Konuşma ekranının açıklaması (kod bilgisi) — **1 satır**  
<sub>örnek: Konuşma ekranı  kaynak/yeni arayuz.js : eski arayüzün fonksiyonlarını sarar ( prologGoster ,  vakaAc ,  kaynak…</sub>

**248.** Eski kasa şeridi notu (kasa kalktı) — **1 satır**  
<sub>örnek:   Batma uyarısı yok (sahibinin kararı):   kasa şeridi yalnız kasa ve borcu gösterir; karar seçeneklerinin altı…</sub>

**249.** Bölüm açıklaması — **1 satır**  
<sub>örnek: Eski veri formatı ( veri format sozlesmesi.md ) aynen geçerli; üstüne:…</sub>

**250.** Başlık — **3 satır**  
<sub>örnek:   Satır:  …</sub>

**251.** Tablo başlığı — **1 satır**  
<sub>örnek:   alan   anlamı  …</sub>

**252.** Eski kasa göstergesi alanı (kasa kalktı) — **1 satır**  
<sub>örnek:    kasa: true    kasa göstergesi ilk kez görünür (açılış)  …</sub>

**253.** Kabul edilmiş doğrulayıcı uyarısı (kayıt) — **4 satır**  
<sub>örnek: -   K8 (V4):    polise ver  (−10.000, bağ −1) hem  uzaklastir 'ın hem  gercegi soyle 'nin gerisinde kalıyor; O…</sub>

**254.** Kalkan uyarı (kayıt) — **1 satır**  
<sub>örnek: - K9 uyarısı kalktı: tohum yok (şablon, 8 Ekim 2026).…</sub>


## sablon/vakalar/vaka2_baslangic.md

**255.** Vaka 2 başlangıç notu (10 Ekim) — **1 satır**  
<sub>örnek: Tarih: 10 Ekim 2026.   Vaka 1 bitti ve kalıp oldu.   Vaka 2 aynı şablonla, aynı araçlarla,   daha hızlı   üret…</sub>

**256.** Vaka 2'ye başlarken okuma sırası (geçmiş) — **5 satır**  
<sub>örnek: 1.  CLAUDE.md  (kalıcı kurallar, tuzaklar, komutlar)…</sub>

**257.** Vaka 2 süre tablosunun nasıl doldurulacağı (genel kural 7. parçada: 693) — **3 satır**  
<sub>örnek: -   Başlangıç = sahibinin "Vaka 2'ye başla" dediği an.   Tarih ve saati aşağıdaki tabloya yaz.…</sub>

**258.** Vaka 2 süre kaydı (geçmiş) — **54 satır**  
<sub>örnek:   adım (7. parça)   başladı   bitti   not  …</sub>

**259.** Vaka 1 dersinin açıklaması — **1 satır**  
<sub>örnek: Vaka 1'de vaktin çoğu   Onay 3'te  , sahibinin oynarken tek tek bulduğu görsel sorunlarına gitti. Hepsi baştan…</sub>

**260.** Tablo başlığı — **1 satır**  
<sub>örnek:   sorun (Vaka 1)   Vaka 2'de nasıl önlenir  …</sub>

**261.** Vaka 2 için araç işi (yapıldı) — **4 satır**  
<sub>örnek:   Araçları Vaka 2'ye aç (adım 5'ten önce, ~1 saat):  …</sub>


## sablon/vakalar/vaka3_baslangic.md

**262.** Vaka 3 başlangıç notu — **1 satır**  
<sub>örnek: Vaka 3, Vaka 2 ile aynı şablonla üretilir; Vaka 2'nin ölçümünden çıkan   iki hızlandırma kuralı   bu vakada il…</sub>

**263.** Vakaya başlarken okuma sırası (geçmiş) — **5 satır**  
<sub>örnek: 1.  CLAUDE.md …</sub>

**264.** Vaka 3'ün tipi (o vakaya özel karar) — **1 satır**  
<sub>örnek: -   Tip: Bilmece (17 Ekim, sahibinin kararı)   — Vaka 1 ve 2 gibi; oyuncu da suçluyu bilmez. Taslak ( kaynak/Y…</sub>

**265.** Vaka 3'ün konusu (o vakaya özel karar) — **1 satır**  
<sub>örnek: -   Konu: Simit Soygunu (17 Ekim, sahibinin onayı).   Yan karakter   Gizem  : pastanenin tezgâhtarı, yirmili y…</sub>

**266.** Vaka 3 süre kaydı (geçmiş) — **32 satır**  
<sub>örnek:   ara   durdu   başladı   süre  …</sub>


## sablon/vakalar/vaka4_baslangic.md

**267.** Vaka 4'ün amacı (açıklama) — **1 satır**  
<sub>örnek: Vaka 4, Vaka 3'ün bütün kurallarıyla   sıfırdan   üretilen ilk vakadır. İki amacı var (sahibinin kararı, 10 Ka…</sub>

**268.** Vaka 4'ün amacı — **2 satır**  
<sub>örnek: 1. Vaka 3'ten çıkan kurallar yeni bir vakada çalışıyor mu, yeni kural çıkıyor mu, görmek.…</sub>

**269.** Vaka 4'ün hangi hesapla yürüdüğü (geçmiş) — **1 satır**  
<sub>örnek: Vaka 4 yalnız sahibinin Claude hesabıyla yürür (ikinci kişi/hesap yok). Bittikten sonra sonuçlara göre yeniden…</sub>

**270.** Vakaya başlarken okuma sırası (geçmiş) — **6 satır**  
<sub>örnek: 1.  CLAUDE.md …</sub>

**271.** Vaka 4'ün konusu (o vakaya özel) — **1 satır**  
<sub>örnek: Kaynak:  kaynak/YENI OYUN SEZON.md  →   "VAKA 4 — FALCI"   (Cihangir'de kahve falcısı, şantaj suçlaması, kafen…</sub>

**272.** Vaka 4'te yapılan deneme (Codex 2 kol) — **1 satır**  
<sub>örnek: -   Codex 2 kolla denenir   (resim aşaması). Amaç: hesabın aynı anda kaç resim isteğini kabul ettiğini, hız sı…</sub>

**273.** Vaka 4'e özel cevaplanmış soru (çeviri) — **1 satır**  
<sub>örnek: -   Çeviri (cevaplandı, 10 Kasım 2026):    RAF KARARLARI.md  §11c Vaka 4'ü çeviri dahil ölçmeyi söylüyordu; sa…</sub>

**274.** Vaka 4'ün başlama saati — **1 satır**  
<sub>örnek:   Başladı: 10 Kasım 2026, 12:49 (İstanbul).   Başlangıç = sahibinin "Vaka 4'e başla" dediği an. Saat yalnız sa…</sub>

**275.** Vaka 4 süre kaydı (geçmiş) — **27 satır**  
<sub>örnek:   ara   durdu   başladı   süre  …</sub>


## sablon/vakalar/vaka5_baslangic.md

**276.** Vaka 5'in kimin yazdığı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 5 ortağın yazdığı ilk vakadır (Barbaros'un kararı, 11 Kasım 2026: önce Vaka 5'in metni, adım 1–7; Bilmece…</sub>

**277.** Yönlendirme — **1 satır**  
<sub>örnek:  vaka4 baslangic.md  §0 ile aynı. Örnek form:  vaka4 form.md .…</sub>

**278.** Vaka 5'in konusu (o vakaya özel) — **1 satır**  
<sub>örnek: Kaynak:  kaynak/YENI OYUN SEZON.md  → "VAKA 5 — VAPUR". Taslaktaki Columbo (Ters) tipi kullanılmaz; konu Bilme…</sub>

**279.** Vaka 5 süre kaydı (geçmiş) — **14 satır**  
<sub>örnek:   Başladı: 11 Kasım 2026, 14:01 (İstanbul)   — ortağın "forma başla" dediği an.…</sub>


## sablon/vakalar/vaka6_baslangic.md

**280.** Vaka 6'yı kimin yazdığı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 6'yı ortak yazar (Barbaros, 12 Kasım 2026: bütün kararlar ortağın). Yeni plana göre   resimsiz  : adım 1–…</sub>

**281.** Vaka 6'nın okuma sırası — **1 satır**  
<sub>örnek:  vaka6 oneri.md  →  ../3 kanon kaydi.md  (kural G) →  ../6 vaka formu.md  (yeni: §2 kişi tablosu, §12 "kim ney…</sub>

**282.** Vaka 6'ya özel karar (konu, kişiler, kanon) — **9 satır**  
<sub>örnek: -   Konu: "İsimsiz Mektuplar" (Üsküdar)  ,  vaka6 oneri.md 'deki öneri olduğu gibi seçildi.…</sub>

**283.** Vaka 6 süre kaydı (geçmiş) — **22 satır**  
<sub>örnek:   Başladı: 12 Kasım 2026, 20:57 (İstanbul)    (13 Kas düzeltmesi: ilk kayıtlar UTC ile yazılmıştı, hepsi +3 sa…</sub>


## sablon/vakalar/vaka7_baslangic.md

**284.** Vaka 7'yi kimin yazdığı (geçmiş) — **1 satır**  
<sub>örnek: Vaka 7'yi Oğuz Bey yazar (Barbaros, 13 Kasım 2026). Plana göre   resimsiz  : adım 1–7, hikâye donunca biter. M…</sub>

**285.** Vaka 7'nin okuma sırası — **1 satır**  
<sub>örnek:  ../3 kanon kaydi.md  (kural G) →  ../6 vaka formu.md  → form  vaka7 form.md . Örnek form:  vaka6 form.md .…</sub>

**286.** Vaka 7'nin konu taslağı (o vakaya özel) — **21 satır**  
<sub>örnek: -   Konu: "Açık Artırma" (Nişantaşı).   Müzayede evinin sahibesi, akşamki satışın en değerli parçası olan sara…</sub>

**287.** Vaka 7 süre ve durum kaydı (geçmiş) — **14 satır**  
<sub>örnek:   Başladı: 15 Kasım 2026, 02:00 (İstanbul)  , ortağın "bu haliyle yazabiliriz, başlayalım" dediği an. Konu kon…</sub>


## kaynak/DEVIR.md

**288.** Oturum kaydı (ne yapıldı, durum, soru-cevap) — **288 satır**  
<sub>örnek:   Bir sohbet penceresinden ötekine devir.   Önce  CLAUDE.md 'yi oku   (sözleşmeler,   tuzaklar, komutlar orada…</sub>

**289.** 🗄 eski oyun — Eski oyunun oturum kaydı (23 Eylül öncesi) — **84 satır**  
<sub>örnek:   Aşağıdaki §1 ve sonrası   eski oyunun   (dokuz vaka,  index.html ) 23 Eylül durumudur;   eski oyun o günden …</sub>


## kaynak/OKUBENI.md

**290.** 🗄 eski oyun — Eski oyunun vaka, sızıntı ve ekonomi notları (arşivde) — **341 satır**  
<sub>örnek:    kaynak/OKUBENI.md 'den 16 Kasım 2026'da taşındı (eski satır 142–1146). Eski oyun yayınlanmayacak; yeni iş b…</sub>

