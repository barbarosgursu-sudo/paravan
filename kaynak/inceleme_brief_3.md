# Paravan Dedektiflik — 3. Tur İnceleme İsteği

Oyna: **https://barbarosgursu-sudo.github.io/paravan/**
(Tek dosya HTML, dikey mobil.)

Bu oyunu iki kez inceledin. 2. turdaki raporun **dokuz maddesinin dokuzu da
uygulandı**. Bu tur onların gerçekten işe yarayıp yaramadığını ve yeni bir şey
kırılıp kırılmadığını görmek istiyorum.

---

## Önce: raporundaki bir P0 doğru değildi

> *"[P0] Elektrik kesintisi V6 araştırmasını 1'den 0'a indiriyor."*

Bu **olmuyordu.** Araştırma hakkında zaten `Math.max(1, …)` tabanı vardı;
elektrik kesikken de hak 1'de kalıyor, `zincir_ozet` bedelsiz açılıyor ve
`kaya_izi` alınabiliyordu. Motor üzerinde doğruladım.

Yine de **önerdiğin mekanizmayı uyguladım**, çünkü teşhisin altındaki mantık
doğruydu: V6'yı koruyan şey tesadüftü (taban 1 ile çekirdek kaynağın maliyeti
1 çakışıyordu). Bütçe 2 olsaydı koruma çalışmayacaktı. Artık `cekirdek: true`
etiketi var ve hak şöyle hesaplanıyor:

```
hak = max( max(1, çekirdeğe ulaşmanın maliyeti),  tam bütçe − 1 )
```

Bunu sana söylüyorum çünkü bu tur **kendi ölçümlerine güvenmeni** istiyorum —
ama ölçtüğünü gerçekten ölçtüğünden emin ol. Bir davranışı kural metninden
çıkarım yaparak değil, oynayarak doğrula.

---

## 2. turdan bu yana ne değişti

### V6 artık dört bilgi durumunu ayırıyor
Eskiden zinciri çözemeyen herkes tek zorunlu kapanışa düşüyordu.

| Durum | Ne biliyor | Ne sunuluyor |
|---|---|---|
| A | Hiçbir şey | Dosyayı kapat |
| B | Bir şey tutmuyor, isim yok | Dosyayı kapat *(farklı metin)* |
| C | **İlyas'ın ittiğini biliyor** | **İlyas'ı ele ver** · **sus** |
| D | Zincirin tamamı | Dört seçenek |

C'ye yeni karar eklemedim; var olan iki kararın kapısını genişletip
metinlerini ayırdım. C susarsa Cavit ödüyor — **neden bu kadar kolay ödediğini
bilmeden.**

### Metinler artık finansal durum iddia etmiyor
*"Borç kapandı"*, *"kasam boş"*, *"ajans rahat"*, *"borç biraz nefes aldı"*
gibi sabit cümleler kaldırıldı. Kural: **metin eylemi anlatır, durumu değil**;
rakamı hesap kutusu gösterir. Prolog da açılış ekonomisiyle (65.000 ₺ kasa,
0 borç) uyumlandı.

### Nurcan denetimi tüm metin yüzeylerine yayıldı
Artık karar sonuçları, defter notları ve giriş varyantları da otomatik
taranıyor. Mantık: bir metnin **varsayılan** varyantı, o yüzeyi gören **en az
bilgili** oyuncunun okuduğu şeydir. Her yüzeyin garantisi ayrı hesaplanıyor
(kaynakta `needs`+`reveals`, kararda `gate`, defterde ait olduğu kararın
`gate`'i). Senin bulduğun altı sızıntı kapandı.

### Eksi ödemelerin artık gerçek adı var
*"ÜCRET −35.000 ₺"* yerine **"TEDAVİ KATKISI −35.000 ₺"**, *"AYLA'NIN TAŞINMA
PARASI −15.000 ₺"*, *"NADİRE'NİN ZARARI −40.000 ₺"*.

### `gizli_kaz` artık bedava vicdan puanı satmıyor
Haklıydın: sezon boyu değeri 210.000 ₺ idi, temiz_rapor 230.000 ₺ — yani bir
vicdan puanı yalnızca 20.000 ₺'ye geliyordu (ikinci puan 69.500 ₺'ye).
`gizli_dosya` tohumu da hiçbir yerde okunmuyordu: **söz verilen dosya hiç
açılmıyordu.**

Şimdi dosyanın iki yüzü var: V5'te ona yeniden bakmak hak yemiyor (zaten
tutuyordun), ama Cavit seziyor — V5 ücreti ×0.85. Yeni fark 32.000 ₺ ve
karşılığında bir araştırma hakkı geliyor.

### "Adres"te isim sormak bedelsiz oldu
Ama bu sefer bütçe her şeye yetti ve seçim baskısı çöktü. Onun yerine
dördüncü bir ücretli kaynak ekledim: **Ayla'nın kim olduğu.** Prosedür değil,
insan — *"Üç yıldır aynı işte, aynı semtte. Kimseyle görüşmüyor."* Adresi yine
satabilirsin, ama sonuç metni artık bunu biliyor: *"kim olduğunu öğrenmiştin,
yine de yazdın."*

### V4 köprüsü gerçek oldu
Kayıtları görmüş sayılmak artık **sigorta dosyasına** bağlı (ölüm soruşturması
yürüten sigorta hesap dökümlerini ister, dosyayı veren Cavit'in kendisi), olay
yeri incelemesine değil.

### Cengo: sadakat ve alacak birlikte görünüyor
Senin önerin birebir uygulandı. Final ekranı:

> **Cengo mesleki bir vedayla ayrıldı; yollar ayrıldı.**
> *Ama 4 ay eline tam para geçmedi. Birikmiş alacağı 95.800 ₺. Sana bir kez
> bile sormadı.*

Ayrıca `cavit_ver`'in "Bağlı" mührü artık kriz hesabından **sonra** vuruluyor;
eskiden aynı ay Cengo'ya ödenemezse sessizce geri alınıyordu. Bunu da sen
yakalamıştın.

---

## Değiştirilmesini istemediğim şeyler (sözleşme, hata değil)

1. **Nurcan kuralı** — hiçbir metin hak edilmemiş bilgiyi ele vermez.
2. **Bazı şeyler bilerek çözülmez** (Ceyda mağdur mu, asıl akıl mı).
3. **Kaybetme yok** — "oyun bitti" ekranı istemiyorum.
4. **Para bir skor değil, bir kısıt.**
5. **Tek ahlak puanı yok**; para ve vicdan iki ayrı eksen.
6. **Liderlik tablosu / rozet / başarım yok.**

## Bilinen, karar verilmiş açık noktalar

- **Sesler geçici** (sentetik yer tutucular).
- **Geliştirici paneli açık** (`DEV_MOD`, üstteki 🛠). Yayından önce kapanacak.
- **Sezon sonu istatistik tablosu yok** — bilerek Android aşamasına bırakıldı.
- Karar yüzdeleri **gerçek oyuncu verisi değil**; ekran bunu zaten söylüyor.
- V3 ve V6'da araştırma seçimi baskısı yok — kabul edilmiş.
- **Borç ödeme sırası:** gelir → bu ayın giderleri → borcun tamamına faiz →
  kalan kasa borcu kapatır. Yani "operasyon önce, borç sonra". 2. turda bunu
  doğru tespit etmiştin; belge düzeltildi, davranış aynı kaldı.

---

## Bu tur asıl merak ettiklerim

### 1. Dürüst rota hâlâ içerik kaybettiriyor mu?
2. turun en önemli bulgusu buydu:

> *"Dürüst rotada karar verirken artık 'hangisi doğru?'dan çok 'hangi içeriği
> kaybetmeden yaşayabilirim?' diye düşünülüyor."*

Çekirdek kaynak koruması ve Adres'in yeni bütçesi bunu hafifletmeliydi. **Hâlâ
oluyor mu?** Somut örnek ver: hangi vakada, hangi kaynağa bakamadın, neyi
kaçırdın.

Kendi ölçümümde pro-sosyal bir gidişat ~194.000 ₺ borçla bitti (senin 2. turda
ölçtüğün 512.003 ₺'ye karşılık) — ama benim betiğim her vakada en vicdanlı
seçeneğe ulaşamadı, o yüzden **senin ölçümün belirleyici.**

### 2. V6'nın dört durumu çalışıyor mu?
Özellikle **C**: İlyas'ı bilip zinciri çözemeyen oyuncu. Önüne çıkan iki
seçenek ona yeterli geliyor mu, yoksa hâlâ cezalandırılmış mı hissediyor?
Metinler Cavit/Ceyda/"mimar" sızdırıyor mu?

### 3. Cengo'nun alacağı işe yarıyor mu?
*"Bağlı, ama 95.800 ₺ alacağı var"* — bu seni vurdu mu, yoksa bir muhasebe
satırı gibi mi durdu? Sadakat ile sömürü aynı anda okunuyor mu?

### 4. Eksi ödemelerin adı fark yarattı mı?
*"TEDAVİ KATKISI −35.000 ₺"* ile *"ÜCRET −35.000 ₺"* arasında seçim yaparken
gerçekten bir his farkı var mı?

### 5. Ayla'yı tanımak satmayı zorlaştırıyor mu?
Dördüncü kaynağı (Ayla'nın kim olduğu) aç, sonra adresi satmayı dene.
Duraksadın mı? Yoksa bilgi yalnızca metni mi değiştiriyor?

### 6. `gizli_kaz` hâlâ "optimum çözüm" mü?
Yeni denge: 230.000 / 198.000 / 140.500 / 115.500 ₺ ve gizli dosya bir
araştırma hakkı kazandırıyor, ×0.85 ücret kaybettiriyor. Bu yeterli mi?

### 7. Bu değişiklikler bir şeyi kırdı mı?
En çok bundan korkuyorum. Dokuz ayrı yerde metin ve mekanik değişti. Yeni bir
tutarsızlık, ele geçmeyen bir ipucu, anlamsız kalan bir cümle var mı?

### 8. Hâlâ duran anlatı sorunları
2. turda şunları söylemiştin ve **henüz dokunmadım** — hâlâ geçerli mi,
öncelikli mi?
- Kırık kol saatinin ölüm saatini tek başına kanıtlaması (telefon verisi,
  kamera veya otopsi aralığı ile desteklenmeli mi?)
- Komşunun duyduğu iki sesin **ne zaman** duyulduğunun söylenmemesi
- Sigortanın, ücreti Cavit'in ödediği raporu neden "bağımsız" sayacağı
- Aylık %10 faizin alacaklısının kim olduğunun tanımlanmaması

---

## Nasıl oynamanı öneririm

**Üç tur:**
1. Hiç araştırma yapmadan, hızlı ve kirli. (V6'da A durumunu görürsün.)
2. V3'ü çöz, sonrasını savsakla. **(V6'da C durumunu görürsün — yeni.)**
3. Her vakada bütçeyi sonuna kadar harca, hep dürüst olanı seç. Borca
   batacaksın; orada ne hissettiğini yaz.

Üçünde de final ekranını ve Cengo satırını gör.

---

Bulduklarını önem sırasına koy; her biri için **hangi ekran, hangi cümle veya
rakam, ne bekliyordum** diye yaz. Bir şeyin bozuk olduğunu iddia ediyorsan
oynayarak doğrulamış ol — geçen tur bir P0 böyle yanlış çıktı. İyi çalışan
şeyleri de söyle.
