# Paravan Dedektiflik — V4 metin incelemesi

Ekteki `V4_okuma.txt`, **dördüncü vakanın** tam metin dökümü. V1–V3'ü
incelemiştin.

---

## V3 turunun sonucu

**Beş bulgun uygulandı. Üçü ise yanlıştı — ikisi ilginç biçimde yanlış.**

### Uygulananlar

| bulgu | ne yapıldı |
|---|---|
| Kanıt zinciri boşluğu | **En değerli bulgun.** Haklıydın ve sandığından derindi |
| `cavit_brief` tanığın konuşacağını erken söylüyor | Hak edilmeyen kısım kaldırıldı |
| `mahalle_yokla` söylentiyi olguya yükseltiyor | Düzeltildi |
| Cengo ismi nereden buluyor | **Sandığından büyük çıktı, aşağıda** |
| Proza ("sustur istiyor", "bir görüntü") | Düzeltildi |

**Kanıt zinciri:** boşluk metinde değil **olgu düzeyindeydi** — çıkarım ipucu
metnini değil olguları okuyor, ve `tarif_yara` *"binadan **çıkan** adamın"*
diyordu. Beş metin düzeltildi; tanık artık tek kesintisiz olay anlatıyor.

**Cengo'nun ismi:** sen yalnız varsayılan yolu sorunlu görmüştün. Kontrol ettik:
**V2'de "yara" ve "topal" sıfır kez geçiyor.** V2'nin verdiği her şey isim ve
meslek. Yani İKİ YOL DA aynı sıçramayı yapıyordu; V2'yi oynamak mantığı
kurtarmıyor, yalnız *"ha, o adam"* dedirtiyordu. Çözüm Cengo'nun atlanan işini
göstermek oldu — artık soruyor, soruşturuyor, sonra dönüyor.

### Geçmeyenler

- **`cavite_teslim` Cavit'i açıklıyor.** Mekanizmayı doğru gördün ama sonucu
  yanlış çıkardın: o varyantın koşulu `zincir_tam`, ve `zincir_tam` **V6'nın
  olgusu** — V3'te oyuncunun eline geçmesi imkânsız (motorla doğrulandı). Yani
  o metin V3'te hiç basılmıyordu. **Ölü koddu**, sızıntı değil. Silmek yerine
  V3'te ulaşılabilir olan `el_var`'a bağlayıp yeniden yazdık; artık eli
  sezmiş oyuncu farklı bir cümle okuyor ve Cavit hâlâ adlandırılmıyor.
- **Anı defterindeki aynı cümle ise KASITLI.** Defter notu, karar anındaki
  bilgiyle değil **oyuncunun o anki toplam bilgisiyle** çözülüyor. Yani oyuncu
  V6'da zinciri çözdükten sonra deftere dönerse V3'teki kararını yeni gözle
  okuyor. Metin bunu kendisi söylüyor: *"…attığımı **sonradan anladım**."*
- **`zincir_tam` tanımsız.** Tanımlı — V6'da.
- **4. araştırma hakkı işlevsiz.** Elektrik krizi hakkı 3'e düşürüyor; ölçtük.
  Dördüncü hak boşa değil, **krize karşı tampon.**

**Sorduğun soruya cevap:** para/vicdan merdiveninin V4–V6'da tekrar etmemesi
gerektiğini yazmıştın. **V4'te tekrar etmiyor** — aşağıya bak, rakamlar orada.
Yargını duymak istiyorum.

---

## Format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan |
| `✦ BEDELSİZ` | araştırma hakkı harcatmaz *(V4'te hiç yok)* |
| `{"seed":"kaya_kayit_gordu","esit":true}` | önceki vakadan taşınan bayrak |
| `[{"cengoBag_en_az":3}]` | Cengo satırı eşiği |
| `↳` | meta — Peri'nin o an yaptığı çıkarım |

**⚠ Dökümde olan, oyuncunun görmediği:** YAZARIN GERÇEĞİ ve **ruh hâli**
sınıflaması. Sızıntı diye raporlama.

---

## Sözleşmeler

**1 · Nurcan kuralı.** Hiçbir metin oyuncunun hak etmediğini sızdıramaz. En
tehlikeli yer **varsayılan varyantlar**.

**2 · Oyun not vermez.** Kalıp: **eylem → sonuç → bedel.** Hüküm cümlesi yasak
("doğru olanı yaptın", "en adil"). Nitelik+bedel ("Dürüst ama acı") serbest —
orada dünyanın tepkisi anlatılıyor.

**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.** Bütçeyi harcamanın
hiçbir biçiminde oyuncunun elinde yalnızca vicdanı eksi kararlar kalamaz.

**4 · Kaybetme yok.**

**5 · Metin SABİT finansal durum iddia edemez.** Olay cümleleri serbest.

**6 · Cengo satırı** kararın ÖNCESİNDEKİ bağa bakar; **sıcaklık onay değildir.**

---

## V4 hakkında bilmen gerekenler

- **Bu vaka cinayeti çözmüyor.** V4 bir **karakter vakası**: Kaya'nın kim
  olduğunu açıyor. Evde ağır diye bilinen adam, yıllarca gizlice hasta bir
  çocuğu yaşatmış. Aynı adam.
- **Ceyda AÇILMIYOR.** Yazarın gerçeği: `ceyda_biliyor_muydu: GİZLİ — V5'e ip`.
  Karısının bundan haberi olup olmadığı V5'in konusu.
- **Vaka iki kapıdan başlıyor.** V1'de Kaya'nın kayıtlarına bakmış oyuncu
  ödemeyi zaten görmüştür; bakmamışsa Cengo getiriyor. İki giriş de aynı
  olguyla açılıyor, sonrası birebir aynı.
- **`koz_yap` kimliği V3'te de var** ama başka bir karar. Karar kimlikleri
  vakalar arası benzersiz değil; olgu adları benzersiz.
- **Kendi okumamdan bir gözlem:** `kaya_cevre` ipucu bir araştırma hakkı
  harcıyor ve açtığı `kaya_itibar` olgusunu hiçbir çıkarım, kapı ya da koşullu
  metin okumuyor. V2'deki benzer durumun aksine **bu bir tuzak değil**: tam
  gerçeğe giden zincir 3 hak sürüyor, dördüncü zaten yedek (motorla
  doğruladık). Yani saf renk. Yargın: bir araştırma hakkını yalnız atmosfer
  için harcatmak doğru mu, yoksa o ipucunun bir karşılığı olmalı mı?

---

## Bakmanı istediklerim

Her bulgu için **hangi cümle, ne yanlış, ne bekliyordum**. Düzeltme önermeden
önce mevcut cümleyi bir daha oku. Bir şey tuhaf görünüyorsa **kasıtlı olma
ihtimalini de yaz** — geçen iki turda bu ikimizin de vaktini yedi.

**1 · Para/vicdan eğrisi.** Kendi uyarındı, şimdi ölç:

| karar | para | bağ |
|---|---|---|
| Aileye gerçeği söyle | −10.000 | +2 |
| Kimliği sakla, çözüm ara | **−35.000** | **+3** |
| 'Artık gelmeyecek' de | 0 | +1 |
| Koz yap | +25.000 | −2 |
| Boş ver | +18.000 | −1 |

En temiz karar en pahalısı; en kirli karar en çok ödeyen değil. Merdiven
kırıldı. **Bu kırılma yeterli mi, yoksa hâlâ okunabilir bir cetvel var mı?**

**2 · Sızıntı.** Özellikle: Ceyda'nın bilip bilmediğine dair ima var mı?
Kaya'nın "evde ağır" olduğu bilgisi nereden geliyor, oyuncu bunu hak etti mi?

**3 · Hüküm cümlesi.** `kimligi_sakla` sonucu *"Belki en merhametlisi."*
diyor. Sözleşme *"en adil"*i yasaklıyor ve bu aynı kalıp — ama "belki" ile
yumuşatılmış ve bu bir **karakter vakası**. Sence sınırı aşıyor mu?

**4 · Duygusal şantaj riski.** Hasta çocuk, ölen hayırsever, titreyen anne.
Bu malzeme kolayca ucuzlar. Metin oyuncunun gözyaşını zorluyor mu, yoksa
mesafesini koruyor mu? Somut cümle göster.

**5 · Cengo'nun kademeleri.** `koz_yap` ve `bos_ver`de var. En sıcak varyant
*"iğrendiğini senden saklamaya çalıştı, beceremedi"* — çalışıyor mu?

**6 · İki giriş.** V1'de kayıtlara bakmış oyuncu ile bakmamış oyuncu farklı
açılış okuyor. Fark anlamlı mı, yoksa kozmetik mi?

**7 · Proza.** Ayrı liste.

**8 · İyi çalışan ne?**

---

## Son not

İddiayı **dosyadan alıntıla.** Emin değilsen "şüpheleniyorum" de. Bulamazsan
bulamadığını söyle — uydurma bulgu, bulgu yokluğundan kötüdür.
