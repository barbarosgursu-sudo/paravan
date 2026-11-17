# ARAYUZ — arayüz kuralları (birleştirilmiş)

### ARAYUZ-1 Tablet düzeni: genel çerçeve
Yalnız yeni oyun, `kaynak/yeni_arayuz.css` (Ekim 2026). Sorun: dikey tablette sabit 480 px sütun sahneyi 1:2'den uzun yapıyordu; 3:4 arka plan iki yandan ~%40 kesiliyor, figürler kadrajdan taşıyordu. Üç kural (ARAYUZ-2, -3, -4) birlikte çözüyor; birini bozma. ARAYUZ-5 (figür kilidi) aynı listede duran ek kuraldır, o da bozulmamalı.
Eski oyunun sayfası bu kurallara girmez (CSS yalnız `build_html.js yeni`'de gömülür).
*Kaynak:* 16, 22

### ARAYUZ-2 Sütun genişliği
`.vn` genişliği `max(480px,56dvh)`: sütun yüksekliğe göre genişler, oran telefondakine yakın kalır. Telefon ve yatay ekran 480 px tabanında kalır.
*Kaynak:* 17

### ARAYUZ-3 Dikey tablette büyütme
`@media (min-width:600px) and (min-height:1050px)` eşiğinde konuşma ekranının yazısı elle ~%30 büyür; eski arayüzün ekranları `#app > :not(.vn){zoom:1.3}` ile ölçeklenir (`#app` 676 px = 520 × 1,3; iç düzen telefondakiyle aynı). `.vn` `#app`'in İÇİNDE — `:not(.vn)` olmazsa iki kez büyür. Kişiler paneli `.vn .vn-kisiler` ile `.vn`'i kaplar (özgüllük şart: dosyanın sonundaki `.vn-kisiler` kuralı aksi hâlde ezer).
*Kaynak:* 18

### ARAYUZ-4 Yatay tablet / geniş ekran
`min-width:1000px` ve `min-height:700px`: yalnız `#app` ekranları aynı `zoom:1.3` ile büyür; konuşma ekranı BİLEREK 480 px'te kalır — 800 px yükseklikte genişlerse 3:4 arka plan üstten/alttan kesilir, figürün başı ya da ayağı gider. Yatay tablette konuşma ekranının dar kalması sahibince kabul edildi (16 Ekim 2026).
*Kaynak:* 19, 3033

### ARAYUZ-5 Figür katmanı Pixel 5 oranına kilitli
`.vn-figurler` Pixel 5 oranına (393/498) kilitli; yüksekliği `.vn-sahne`'nin container birimleriyle hesaplanır: `max(78cqh, min(115cqh, 100cqw·498/393))`. Gerekçe: konukların `gorseller.json → boy` ölçekleri telefonda ayarlandı ve telefonda figürler genişliğe takılıp küçülüyor; kilit olmadan geniş sahnede Peri tam boya çıkıp konuk %20 kısa kalıyordu (Lâl, Defne). Telefon birebir aynı. `min-width:0` şart — yoksa aspect-ratio içerikle ezilir.
*Kaynak:* 20

### ARAYUZ-6 Yeni ekran / yeni arka plan uyarısı
Yeni bir ekran ya da pencere `#app`'in ya da `.vn`'in DIŞINA eklenirse tablet kuralları ona uygulanmaz; tablette ayrıca bak. Yeni arka plan 3:4 değilse kesim oranı değişir.
*Kaynak:* 21

### ARAYUZ-7 Cihaza ayrı ayar yok
Her cihaza ayrı ayar yapılmaz; kurallar orana dayalı, denetim taklitle (`--cihaz`) yapılır (sahibinin kararı, 16 Ekim 2026).
*Kaynak:* 3031

### ARAYUZ-8 Yatay telefon
Yatay telefon için ayrı düzen yok, uyarı var (sahibinin kararı, 16 Ekim 2026).
*Kaynak:* 3032

### ARAYUZ-9 Defter → Zincir yalnız içinde bulunulan vaka
Zincir sekmesi yalnız içinde bulunulan vakanın olgularını ve çıkarımlarını gösterir (açık vaka yoksa son biten vaka). Önceki vakalar burada görünmez — künyedeki kuralın aynısı: geçmiş vakalar geçmişte kaldı. Önceden Vaka 2'de Vaka 1'in olguları görünüyordu; düzeltildi. Kod: `yeni_arayuz.js → defterZincir`. (Sahibinin isteği, 17 Ekim 2026.)
*Kaynak:* 156, 300, 2577, 3006

### ARAYUZ-10 Zincir ağaçları vaka başına; çıkarım başlığı zorunlu
Çıkarımlar vaka içidir (knowledge dar kümeyle türetilir), o yüzden ağaçlar vaka başına; vakalar arası bağ KARARLARDADIR (`seeds`) ve tahtanın altında karar satırı olarak durur. Her çıkarımın `baslik` alanı zorunludur (K12) — yoksa ekranda ham kimliğe düşer.
*Kaynak:* 37

### ARAYUZ-11 Defter → Anı
Biten her vaka için bir kayıt, sırayla: **anı özeti** (2–3 cümle, kural 21d) → oyuncunun izi (kimi suçladı · sonucu, kararı) → Peri'nin karara göre notu. Anı, vakalar arası tek geriye bakış yeridir. Kod: `yeni_arayuz.js → defterAni`. Suçlama vaka bitince `_suclama_<vaka>` tohumunda kalır (`motor_yeni.js`). (Sahibinin isteği, 17 Ekim 2026.)
Kasa artık Anı'da basılmaz: kasa 16 Kasım 2026'da kalktı (kural 24).
*Kaynak:* 157, 300, 2577, 3007

### ARAYUZ-12 Anı özeti nasıl yazılır
Anı sekmesinde her biten vakanın üstünde 2–3 cümlelik anı özeti durur: müşteri ve kayıp, kim almıştı, neden — yalnız kovalamacadaki itirafın söylediği (kural 21d, `2_kural_kitabi.md`). Formda §12'nin altına yazılır; diyalogda `## ani` bölümüne (`**ANI:** …`, `## cozum`'dan sonra) gider. Bölüm zorunlu: yoksa `arac_diyalog.js` veriyi yazmaz. Örnek: `vaka2_diyalog.md` → `## ani`. (Vaka 3 başlangıç notunda istendi: `vaka3_baslangic.md` §1; örnek Vaka 2'de.)
*Kaynak:* 2577, 3007

### ARAYUZ-13 Konuşma ekranı: arka plan
Arka plan her satırda değişebilir (aynı yerde yumuşak geçiş, başka yerde kararma).
*Kaynak:* 283

### ARAYUZ-14 Konuşma ekranı: ara kare ve mekân karesi
- **Ara kare:** tam ekran görsel; figürler çekilir.
- **Mekân karesi:** figürler çekilir, yalnız arka plan görünür.
*Kaynak:* 284, 285

### ARAYUZ-15 Aynı kare üst üste satırlarda kalır
Aynı kare sürüyorsa resim yerinde kalır, yalnız yazı değişir (`yeni_arayuz.js → vnKareGoster`, kare kodu `data-kod`'da). Bütün vakalara uyar; farklı kareye ya da karesiz satıra geçiş eskisi gibi. Sebep: V6 D18'de (Eylül'ün zarfları) kare her satırda silinip yeniden beliriyor, arada büro bir an görünüyordu. (Sahibinin kararı, 16 Kasım 2026.)
*Kaynak:* 2769

### ARAYUZ-16 Figür yerleşimi
- Ekranda en çok iki figür: Peri ve bir konuk. Peri solda, sağda **tek** konuk (Cengo ya da konuk — sahnede olan ve en son konuşan). Üç kişilik sahnede sağdaki kişi değişir. (Bu düzen `ekran` etiketli vakalarda (V6, V7) ARAYUZ-17'deki kayıtla tutmuyor — orada Peri'siz iki konuk karşılıklı durabiliyor, Cengo konukla solda durabiliyor: bkz. CELISKI-ARAYUZ-1.)
- Konuşan aydınlanır, dinleyen kararır.
- Sahnede tek kişi varken ortada durur; ikinci kişi gelince kaymadan, anında yanlara geçer (`yeni_arayuz.js/.css`, `.vn-figurler.tek`; `f8dfc4e`, 14 Kasım 2026).
*Kaynak:* 286, 304, 2410, 2779

### ARAYUZ-17 Karşılıklı konuşmada yerler sabit
Aynı iki kişi bir önceki satırda da ekrandaysa yerleri korunur, yalnız konuşan aydınlanır; yer ancak ekrandaki çift değişince değişir. Peri hep solda. Kod `yeni_arayuz.js` (`vnSatirGoster`, `ekran` dalı), kural `sablon/5_gorsel_sistemi.md` SR-G; `86db39d`. Yalnız `ekran` etiketli vakalara (V6, V7) uyar (ARAYUZ-16 ile ilişkisi: CELISKI-ARAYUZ-1). Sebep: V6 girişinde Gizem ↔ Eylül her satırda yer değiştiriyordu (`ekran` etiketinin sırası konuşanı sola alıyordu). (Sahibinin kararı, 16 Kasım 2026.)
- V6 tarandı: bu türden başka yer kalmadı.
- Kalan taraf değiştirmeler (Cengo konukla solda, Peri konuşunca sağda; tek görünen konuk karşısına biri gelince sola) sahibince sorunsuz bulundu, **dokunulmayacak**.
- V1–V5'teki iki örnek (V4: Rana ↔ Feraye, Feraye ↔ Sadık; eski `kime` düzeni) **bilerek düzeltilmedi**; o vakalar yeni kurallara göre yeniden geçirilecek.
*Kaynak:* 2770

### ARAYUZ-18 İfade
Her satırda konuşanın ifadesi değişebilir. Dinleyen Peri'nin ifadesi de değişebilir.
*Kaynak:* 287

### ARAYUZ-19 Kıyafet sahne içinde değişebilir
Sahne içinde Peri'nin kıyafeti değişebilir (manto → mantosuz gibi); Cengo'nunki de (`cset`, Vaka 3: un bulutu).
*Kaynak:* 288

### ARAYUZ-20 Giriş / çıkış
Konuk sahneye girer, sahneden çıkar.
*Kaynak:* 289

### ARAYUZ-21 Figürsüz konuşan
Görseli olmayan biri adıyla konuşabilir (ses, asistan…).
*Kaynak:* 290

### ARAYUZ-22 Seçim dallanmaz
Oyuncu bir cevap seçer; birkaç satır değişir, hikâye **dallanmaz.**
*Kaynak:* 291

### ARAYUZ-23 "Sahneyi geç"
"Sahneyi geç" seçime kadar sarar, seçimi atlamaz.
*Kaynak:* 292, 2410

### ARAYUZ-24 "◂ Geri" düğmesi (GEÇİCİ)
Sahibinin gözden geçirmesi için (7 Ekim 2026). Satır satır geri gider; sahnenin ilk satırında zincirdeki önceki sahnenin başına döner (açılış, giriş+konuşma). Oyun durumunu geri almaz (ipucu, karar, para). Yayından önce kapanır: `yeni_arayuz.js` → `VN_GERI = false`.
*Kaynak:* 292, 322, 2410

### ARAYUZ-25 Hareket yok
Figürler ve kareler durağan görsellerdir. Yeni poz = yeni görsel.
*Kaynak:* 305

### ARAYUZ-26 Figür boyu sabit
Her konuğun boyu bir kez ayarlanır.
*Kaynak:* 306

### ARAYUZ-27 Tarayıcı uyarı kutusu yok
Claude sayfası engelliyor; her onay sayfanın içinde.
*Kaynak:* 309

### ARAYUZ-28 Telefonda yazı kutusu 4 satır
Telefon dikey ekranda yazı kutusu 4 satır; uzun replik bölünür.
*Kaynak:* 310

### ARAYUZ-29 Konuşma ekranı eski arayüzü sarar; Cengo göstergesi boş
Konuşma ekranı `kaynak/yeni_arayuz.js`: eski arayüzün fonksiyonlarını sarar (`prologGoster`, `vakaAc`, `kaynakAcFaz`, `arastirmaFazi`, `kararFazi`, `kararVerFaz`, `sonEkrani`, `kasaSerit`, `cengoGosterge`). Cengo göstergesi bu sayfada boş döner (kural kitabı 11: bağ ekranda görünmez). (`kasaSerit` 16 Kasım 2026'dan beri boş döner — kasa kalktı.)
*Kaynak:* 2410

### ARAYUZ-30 Tema
Bütün ekranlar konuşma ekranının dilinde: kâğıt zemin, koyu mürekkep, kalın kontur, ofset gölge, Nunito + Shrikhand (Google Fonts; çevrimdışıyken Georgia'ya düşer — Android aşamasında gömülecek). `yeni_arayuz.css`'in ikinci bloğu eski CSS değişkenlerini yeniden tanımlar ve sabit renkli kuralları ezer. (Sahibinin kararı, 6 Ekim 2026.)
*Kaynak:* 2413

### ARAYUZ-31 Künye (Kişiler) vaka başına
- Künyede yalnız içinde bulunulan vakanın kişileri (+ Peri, Cengo her vakada; Hilmi Bey yalnız açılışın) (16 Ekim 2026).
- Vakada tanışılan / konuşan her kişiye (adı olan herkes) künye kaydı (kart) ve portre. Vaka 2'de Saadet unutulmuştu; Vaka 2'nin 7 kişisine portre + Saadet Hanım eklendi (sahibinin onayıyla metin). Test eksik portreyi yakalar.
- Önceki vakadan dönen kişi için `tanisma` dizi olur.
*Kaynak:* 648, 2576, 3016

### ARAYUZ-32 Paylaş kartı (vaka)
Biten vaka afişli bir kartla paylaşılır (web'de kuruldu, 17 Ekim 2026; ayrıntı `CLAUDE.md` → "Paylaş"). Kart suçlu/karar/kasa taşımaz (kasa 16 Kasım 2026'dan beri yok). Her vakaya iki şey gerekir:
1. **Kapak** (`gorseller.json → kapak`, zorunlu, yedek): ipucu sahnelerinde geçen bir ARKA PLAN; yüzleşme/kovalamaca/kapanış ve K kareleri olmaz (Nurcan). `test_yeni_arayuz.js` kapaksız vakayı yakalar.
2. **Kart afişi** (`gorseller.json → kart`, `KART_V3`): kişiler + mekân, ipucusuz, hareketli. Adım 8'de görsel listesine eklenir, promptu `sablon/kart_sayfa/uret.py`'ye yazılır; kurallar `5_gorsel_sistemi.md` → **G**.
`giris` varsayılanının ilk cümlesi paylaşım mesajına girer: sızıntısız ve tek başına anlaşılır olsun.
Android'de kalan: anı karşılaştırması (bitirmiş arkadaşa kilitli) ve davet kodu.
*Kaynak:* 2008, 2578

### ARAYUZ-33 Sezon sonu tablosu: yer ve paylaşım
- **Yer:** sezonun kapanış sahnesinden hemen sonra, ardından "rafta başka kitaplar" kartı. Defter'den yeniden açılır.
- **Paylaşım:** "Sezon 1 bitti" kartı — yalnız sezon afişi + "Sen olsan ne yapardın?". Suçlu/karar/kasa karta girmez; tablonun kendisi paylaşılmaz.
(9 Kasım 2026.)
*Kaynak:* 1708, 1709

### ARAYUZ-34 Rozet bildirimi
Rozet kazanınca ekranın kenarında küçük, sessiz bir not; birkaç saniyede kaybolur, akışı durdurmaz, dokunma istemez. (9 Kasım 2026.)
*Kaynak:* 1700

### ARAYUZ-35 Defter → Rozetler sayfası
Defter'de "Rozetler" sayfası: yalnız kazanılanlar, hangi vakada kazanıldığıyla (komik anların albümü). (9 Kasım 2026.)
*Kaynak:* 1701

### ARAYUZ-36 Deneme reklamı
Web sayfasında gerçek reklam yok; `yeni_arayuz.js → reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)") (sahibinin isteği, 16 Ekim 2026).
- Araştırma ekranında "▶ Reklam izle · +1 araştırma hakkı" yalnız hak bitince ve açılacak ipucu kaldıysa çıkar; vaka başına bir (motor `reklamHakAl`, kayıtta `aktif.reklamHak`).
- Kapanıştan sonra "Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında); her biri reklamla açılır, olgu vermez.
- Kural: her vaka reklamsız 3 hakla `doğru` çözülür (`test_yeni_v2.js`). Vaka 2'den itibaren 3 hak (Vaka 1: 4).
- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.
*Kaynak:* 2004, 3018

### ARAYUZ-37 "Vaka N'den başla" test düğmeleri (GEÇİCİ)
"Baştan başla" onay ekranında her sonraki omurga vakası için bir düğme (10 Ekim 2026, sahibinin testi için). Önceki vakalar motorda kendiliğinden oynanır (her ipucu, doğru suçlama, ilk karar). Şimdilik AÇIK KALIR (`VN_VAKA_ATLA = true`, sahibinin kararı, 9 Kasım 2026); **yayından önce** `yeni_arayuz.js` → `VN_VAKA_ATLA = false`.
*Kaynak:* 2454, 2938, 3017, 3079

### ARAYUZ-38 G65 ve Vaka 6 resimleri (devir notu; konusu GOMME — GOMME birleştiricisine bildirilmeli)
Oğuz Bey'in G65'i (Düzeltme 2: sol el, avuç içi bize dönük) kullanılır — gömülü olan o (`ara_k96.webp`, `onayli/G65.png`, el onayı `fa557717b270`); G65 yeniden gömülmez (Barbaros, 15 Kasım 2026; önce "geçersiz" denmişti, aynı gece kabul edildi). Vaka 6'nın resimleri Barbaros'ta; V6'ya resim gömmeden önce Barbaros'a sor. Açılıştaki dergi resmine (G87) dokunulmadı; kalan 10 resmi (G46, G87–G95) gömme Barbaros'ta (14 Kasım 2026 durumu).
*Kaynak:* 2779
