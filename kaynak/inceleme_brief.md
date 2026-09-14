# Paravan Dedektiflik — İnceleme İsteği (2. tur)

Oyna: **https://barbarosgursu-sudo.github.io/paravan/**
(Tek dosya HTML, dikey mobil. Telefonda oynanması tasarlandığı gibidir.)

Daha önce bu oyunu bir kez incelemiştin. O turdan bu yana oyunun **ekonomisi
baştan yazıldı** ve iki yeni vaka eklendi. Bu tur özellikle o yeni katmanı
görmeni istiyorum.

---

## Oyun nedir

Türkçe, İstanbul-Noir, ahlaki tercih dedektiflik oyunu. Peri (Perihan Aksoy),
eski bir güzellik kraliçesi; avukatı tüm parasını alıp kaçınca battı, elinde
vergi için kurulmuş bir paravan dedektiflik bürosu kaldı. Yanında tek kişi
var: Cengo.

Her vaka üç fazdır: **giriş → sınırlı araştırma → geri alınamaz karar.**
Pilot sezon 9 vaka, 40 karar, 46 araştırma kaynağı.

---

## Geçen incelemeden bu yana ne değişti

### 1. Gerçek bir ekonomi var
- Başlangıç kasası **65.000 ₺**, aylık sabit gider **59.075 ₺**
  (ofis kirası 22.000 + Cengo'ya elden ödeme 28.075 + işletme 9.000).
- Rakamlar 2026 Türkiye seviyelerine dayanıyor; Cengo'nunki net asgari ücret.
- Bir **omurga vaka = bir ay**. Yan işler aynı ayın içinde yapılır, ikinci kira
  ödetmez — bu yüzden yan işler finansal olarak anlamlıdır.
- Kasa asla eksiye düşmez; açık **borca** yazılır ve her ay **%10** faiz işler.
- **Kaybetme yok.** Batmak oyunu bitirmez; seçenekleri daraltır.
- Eline geçen para borcu kapatır (kasa ve borç ayrı sayaçlar değil).

### 2. Her kararın bir parası var, ve para vicdanla ters gider
40 kararın hepsinde `para` yazılı. Kural şu: **bir seçenek hem daha çok para
hem daha çok vicdan getiremez.** Getiriyorsa o bir ikilem değil, doğru
cevaptır. Bazı kararlar Peri'nin CEBİNDEN ödetir (eksi tutar).

### 3. Borcun somut sonuçları var
Ödenmeyen her gider kaleminin kendi cezası var; hangisinin açık kaldığı ödeme
sırasından çıkar (kira → Cengo → işletme):

| Açık kalan | Sonuç |
|---|---|
| İşletme | **Elektrik kesildi** → sonraki vakalarda bir araştırma hakkı eksik |
| Cengo'ya ödeme | **Cengo'nun eline geçmedi** → Cengo bağı −1, her açık ayda |
| Ofis kirası | **Ev sahibi icraya verdi** → aylık giderlere 12.000 ₺ takip masrafı |

Bir kalemin yarıdan fazlası açık kalmalı (kirasının çoğunu ödeyen icraya
verilmez). Hepsi geri alınabilir: kalem ödendiği ay sonuç kalkar.

### 4. Borç tetikli yeni bir vaka: "Adres"
Borç 80.000 ₺'yi geçince masaya düşer ve koşul sürdükçe orada kalır. Hulki
adında bir adam tek bir şey ister: bir adres. Borçtan çıkış **var** ama
bedava değil; en vicdanlı seçenek Peri'nin cebinden ödetir.

### 5. İtibar: geçmiş kararlar sonraki ücretleri değiştirir
V1'de Cavit'in güvenini kaybedersen V3 ve V5 **×0.70** öder. V4'te Kaya'nın
sırrını koz yaparsan V5 **×1.15**. V2'de müvekkiline her şeyi anlatırsan
YAN-A **×0.80** (konuştuğun duyulur). Çarpan VAKA düzeyinde uygulanır,
karar düzeyinde değil — kararlar arası ödünleşim bozulmasın diye.

---

## Değiştirilmesini İSTEMEDİĞİM şeyler (bunlar hata değil, sözleşme)

Bunları "eksik" diye raporlarsan tur boşa gider:

1. **"Nurcan kuralı"**: hiçbir metin ya da görsel, oyuncunun HENÜZ hak
   etmediği bilgiyi ele vermez. Metinler koşullu varyantlar taşır; sığ oynayan
   ile derin oynayan aynı cümleyi okumaz. Bir metin "eksik" görünüyorsa
   önce oyuncunun o an ne bildiğini sor.
2. **Bazı şeyler bilerek çözülmez.** Ceyda mağdur mu, asıl akıl mı — oyun buna
   cevap vermez. Belirsizlik bir eksiklik değil, konunun kendisi.
3. **Kaybetme yok.** "Oyun bitti" ekranı istemiyorum.
4. **Para bir skor değil, bir kısıt.** Biriktirilip maksimize edilmez.
5. **Tek ahlak puanı yok.** Para ve vicdan iki ayrı eksendir; tek sayıya
   indirmek oyunun tezini yok eder.
6. **Liderlik tablosu / rozet / başarım yok.** Bu oyunda kazanmak diye bir şey
   yok.

## Zaten bildiğim, karar verilmiş açık noktalar

Bunları tekrar raporlamana gerek yok:

- **Sesler geçici.** `ses/` klasöründeki 13 dosya benim ürettiğim sentetik yer
  tutuculardır. Gerçek müzikler ayrıca yapılacak; sipariş metinleri hazır.
- **Geliştirici paneli açık** (`DEV_MOD = true`, üst şeritteki 🛠). Yayından
  önce kapatılacak.
- **Sezon sonu istatistik tablosu yok.** Bilerek Android aşamasına bırakıldı;
  planı yazılı.
- Karar sonrası çıkan yüzdeler **gerçek oyuncu verisi değil**; ekran bunu
  zaten açıkça söylüyor.
- V3 ve V6'da oyuncu iki kaynak arasında seçim yapmak zorunda kalmıyor —
  bilerek: V3 düz bir teşhis zinciri, V6 final; ağırlıkları ahlaki kararda.

---

## Asıl merak ettiklerim

Sırayla ve somut örnekle cevaplarsan çok işime yarar:

1. **Baskı gerçek hissediliyor mu?** Karar ekranında ücreti, ay sonu bakiyeyi
   ve uyarıyı görüyorsun. Bu, seçimi yaparken içini sıkıyor mu — yoksa
   tablodaki bir sayı gibi mi duruyor?

2. **Ekonomi ahlaki tercihi eziyor mu?** Korktuğum şey şu: oyuncu "hangisi
   doğru" diye değil "hangisi kârlı" diye bakmaya başlarsa oyun bozulur.
   Sen oynarken hangisini düşündün?

3. **Borç sonuçları adil mi?** Elektriğin kesilip bir araştırma hakkını
   kaybetmek, zaten zor durumdaki oyuncuyu daha da geriye itiyor. Bu ceza bir
   ölüm sarmalı yaratıyor mu, yoksa baskı olarak kalıyor mu?

4. **"Adres" vakası doğru yerde mi?** Batmış oyuncuya çıkış sunan bir vaka,
   batmayı ödüllendirmiş olur mu? Rahatlamanın tuzağın kendisi olması
   çalışıyor mu?

5. **Nurcan kuralı tutuyor mu?** Hiç araştırma yapmadan oyna, sonra derin
   oyna. Herhangi bir metin sana henüz öğrenmediğin bir şeyi söylüyor mu?
   Örnek ver: hangi ekran, hangi cümle, neyi biliyor olmam gerekirdi.

6. **Sayılar inandırıcı mı?** Bir dedektiflik bürosunun 2026 İstanbul'unda
   ödeyeceği kira, çalışan maliyeti, vaka ücretleri — rakamlar sana gerçekçi
   geliyor mu?

7. **Finali hak ediyor mu?** V6'da kimi ele verdiğin (ya da vermediğin)
   sezonun geri kalanıyla tutarlı hissettiriyor mu? Kapanış sana bir şey
   bıraktı mı?

8. **Anlatıda tutarsızlık, çelişki, boş kalan iplik var mı?** Özellikle:
   ölüm saati, Cavit'in rolü, Ceyda'nın belirsizliği, Cengo'nun geçmişi.

---

## Nasıl oynamanı öneririm

En az iki tur:
- **1. tur:** hiç araştırma yapmadan, hızlı ve kirli oyna. Para kazan.
- **2. tur:** her vakada bütçeyi sonuna kadar harca, hep dürüst olanı seç.
  Muhtemelen borca batacaksın — orada ne hissettiğini yaz.

İkisinde de Cengo'nun sonunu ve final ekranını gör.

---

Bulduklarını **önem sırasına** koy ve her biri için "hangi ekranda, hangi
cümle/rakam, ne bekliyordum" diye yaz. Beğendiğin şeyleri de söyle — neyin
çalıştığını bilmek neyin bozuk olduğunu bilmek kadar işime yarıyor.
