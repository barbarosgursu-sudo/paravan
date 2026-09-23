# Paravan Dedektiflik — üç yan vaka, tek turda

Ekte **üç döküm**: `YAN-A_okuma.txt`, `YAN-B_okuma.txt`, `YAN-C_okuma.txt`.
Omurganın altı vakasını (V1–V6) incelemiştin; bunlar geriye kalanlar.

**Üçünü birden veriyorum** çünkü birbirlerine bakarak okunmaları gerekiyor —
özellikle YAN-A ile YAN-B depo belgesinde **birbirinin aynası** diye tanımlı.

---

## V6 turunun sonucu

**Dört onarımın hepsi uygulandı, bir bulgu elendi, iki yanlış alarm çıktı.**

Uygulananlar, hepsi aynı kökten — final, Peri'nin şüphesini anlatmak yerine
oyunun kendisi hüküm vermeye başlıyordu:

| eski | yeni |
|---|---|
| **Adalet geldi** — ama bedelini masumlar ödedi | **Hepsi düştü** — … |
| …ama o adam bunu **hak etti** | **Kendime** onun bunu hak ettiğini **söyledim** |
| **Bilseydi baharı planlamazdı** | Ölümünden birkaç gün önce **hâlâ baharı planlıyordu** |
| **Mimarlar** gölgede kaldı | **Mimar** gölgede kaldı; **Ceyda'nın payı da karanlıkta** |

Sonuncusu senin proza notundandı ve en önemlilerindendi: çoğul *"mimarlar"*,
`ceyda_pay` çözülmemişken Ceyda'yı mimar ilan ediyordu.

**Elenen:** *"Ajans ayakta"* sabit finans iddiası sayılmadı. Yasak, oyuncunun
gerçek kasasıyla **çelişebilecek** cümleleri hedefliyor; bu çelişemez, çünkü
*"Kaybetme yok — batmak oyunu bitirmez"* sözleşmesi ajansın her durumda ayakta
olmasını garanti ediyor.

**İki yanlış alarm, ikisi de motorla çürütüldü:**

- **`boslukla_kapat` kapısı doğru.** Ham veri `not(any(zincir_tam,
  iten_biliniyor))` — yani "ikisi de yoksa". Her şeyi bilen oyuncuda o karar
  **görünmüyor**, motorla sınandı. Yanlış okumanın sebebi **bizim aracımızdı**:
  `DEĞİL`i parantezsiz basıyordu. Düzeltildi.
- **`%100`** hiç ekrana gelmiyor: arayüz tek seçenekte paneli göstermiyor ve
  `boslukla_kapat` hep tek başına açılıyor.

---

## Bu tur: önce bir bulgu, bizden

Turu hazırlarken **YAN-A/`cengoya_birak`'ta bir çelişki bulduk**; senin de
görüp görmeyeceğini merak ediyorum ama saklamıyorum, çünkü asıl sorum başka.

Anı defteri **koşulsuz** şunu diyor:
> Bana '**sen iyi birisin Peri abla**' **dedi**.

Cengo satırının üç kademesi ise şöyle:

| bağ | ekranda |
|---|---|
| ≥3 | *"Sen iyi birisin" **demedi**; demeye gerek kalmamıştı.* |
| ≥−1 | *"Sen iyi birisin, Peri abla," der* |
| varsayılan | *"Sağ olun." Patron-çalışan mesafesinde bir teşekkür.* |

Yani **üç kademenin ikisinde** defter yalan söylüyor. Denetim aracımız bunu
kaçırmıştı (kalıp fazla harfiydi); genişletildi ve artık yakalıyor.

**Sana sorum:** bunun **kardeşleri** var mı? Üç dökümde de, ekranda olan ile
deftere yazılan arasında başka uyuşmazlık arıyoruz — yalnız Cengo'nun
konuşup konuşmadığı değil, **her türlü** uyuşmazlık.

---

## Format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan |
| `✦ BEDELSİZ` | araştırma hakkı harcatmaz |
| `DEĞİL ( … )` | koşulun olumsuzu — **parantez kapsamı gösterir** |
| `{"borc_en_az":80000}` | borç eşiği — vakanın açılma koşulu |
| `↳` | meta — Peri'nin o an yaptığı çıkarım |

**⚠ Dökümde olan, oyuncunun görmediği:** YAZARIN GERÇEĞİ ve **ruh hâli**.

---

## Sözleşmeler

**1 · Nurcan kuralı.** Oyuncunun hak etmediği bilgi sızdırılamaz.
**2 · Oyun not vermez.** **eylem → sonuç → bedel.** Hüküm cümlesi yasak.
**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.**
**4 · Kaybetme yok.**
**5 · Metin SABİT finansal durum iddia edemez** (oyuncunun kasasıyla
çelişebilecek olanlar; olay cümleleri serbest).
**6 · Cengo satırı** kararın ÖNCESİNDEKİ bağa bakar; **sıcaklık onay değildir.**

---

## Üç vaka hakkında bilmen gerekenler

### YAN-A · Kapalı Defter *(V2'den sonra)*
Cengo'nun geçmişi burada açılıyor: yıllar önce Sevil'in suçunu üstlenmiş,
içeri girmiş. **`sevil_pay` kanonda çözülmeyen iki olgudan biri** — *"nankör
MÜ, kaçan kurban MI? ÇÖZÜLMEZ."* Çözülmemesi eksiklik değil, sözleşme.

### YAN-B · Enkaz *(V4'ten sonra)*
Peri'nin kendi enkazı: battığında Nadire de battı. **Hiçbir seçeneği para
kazandırmıyor** (−40.000 / −18.000 / −8.000 / 0) ve bu bilerek — belgede
yazılı: *"YAN-A nefes aldırır; YAN-B hiçbir seçeneğinde para kazandırmaz."*
`avukat_kirintisi` ipucu **Sezon 2 kancası**, burada çözülmüyor.

### YAN-C · Adres *(borç ≥ 80.000 olunca)*
**Bu vakayı ekonomi çağırıyor.** Oyunun tek "borç eşiğiyle açılan" vakası:
battığın için sana geliyor. 120.000 ₺ oyundaki en büyük tek ödeme.
`hulki_niyeti` çözülmüyor — *"barışmak MI, bitirmek Mİ?"*

---

## Bakmanı istediklerim

Her bulgu için **hangi cümle, ne yanlış, ne bekliyordum**. Tuhaf bir şey
kasıtlı olabilir — o ihtimali de yaz. Düzeltme önermeden önce mevcut cümleyi
bir daha oku.

**1 · Ekran ↔ defter uyuşmazlıkları.** Yukarıdaki bulgunun kardeşleri.
Üç dökümde de ara.

**2 · YAN-C etik olarak sağlam mı?** Bu oyunun en tehlikeli vakası: şiddet
mağduru bir kadının adresi satılık. Metin bunu **sömürüyor mu**, yoksa
ağırlığını taşıyor mu? Özellikle `ayla_kim` ipucu — *"Artık bir isim değil,
bir insan. Adresi yazmak bundan sonra daha zor olacak — ki zaten olması
gereken bu."* Bu cümle oyuncuya ne yapması gerektiğini mi söylüyor?

**3 · Ekonomi kirletmeye zorluyor mu?** YAN-C borç ≥ 80.000'de açılıyor,
yani **batmış oyuncuya**. Sözleşme *"ekonomi daraltır, kirletmeye zorlamaz"*
diyor. `isi_reddet` kapısız ve 0 ₺; yeterli bir kaçış mı, yoksa 120.000'in
yanında sahte bir seçenek mi?

**4 · YAN-B'nin para kazandırmaması.** Dördü de sıfır ya da eksi. Bu onurlu
bir tasarım mı, yoksa oyuncuyu cezalandırıyor mu? `gecistir` (0 ₺, bağ −2)
gerçekten bir seçenek mi?

**5 · İki çözülmeyen: `sevil_pay` ve `hulki_niyeti`.** V5'te Ceyda için üç
kez *"A mı B mi"* kalıbının görünür hale geldiğini söylemiştin. Burada aynı
şey oluyor mu, yoksa bu ikisi daha iyi mi saklanmış?

**6 · Hüküm cümleleri.** Denetim aracımız YAN-B/`gercegi_soyle`'nin sonucunda
*"**Haklıydın** olmasan bile"* diye bir bayrak veriyor. Hem hüküm sınırında,
hem Türkçe olarak tökezliyor. Başka var mı?

**7 · Cengo'nun kademeleri.** Üç vakada da var ve YAN-C'dekiler sezonun en
iyileri gibi duruyor (*"Cengo kapıyı iki kez kilitledi. Kendi için."*).
Çalışıyorlar mı?

**8 · Proza.** Ayrı liste.

**9 · İyi çalışan ne?**

---

## Son not

İddiayı **dosyadan alıntıla.** Emin değilsen "şüpheleniyorum" de. Bulamazsan
bulamadığını söyle — uydurma bulgu, bulgu yokluğundan kötüdür.
