# Paravan Dedektiflik — V6 metin incelemesi

Ekteki `V6_okuma.txt`, **sezonun son vakasının** tam dökümü. V1–V5'i
incelemiştin. Omurga burada bitiyor; geriye yalnız üç yan vaka kalıyor.

---

## V5 turunun sonucu

**Altı onarımın hepsi uygulandı, bir önerin geri çevrildi, bir bulgun
büyüdü.**

### En keskin bulgun doğruydu — `kazma`

Motorla oynattım: `iten_ilyas` + `el_var` + `tam_resim` sahibi oyuncu
*"Ama **farkında olmadan** bir cinayetin aletisin hâlâ"* okuyordu. Tam olarak
farkındaydı. Sonuç üç seviyeye, anı defteri dörde bölündü — dördüncüsü
`zincir_tam`'a bağlı ve eski *"sonradan öğrendim"* metnini koruyor, çünkü
defter geriye dönük çözülüyor.

### Cavit'e kanıt eklendi — senin 1. maddeindi

Haklıydın: eski dava dosyası yalnız **kaldıracı** gösteriyordu. Sahibi yeni
bir ipucu yazdırdı (bedelsiz, ekonomi değişmedi): Cengo mahalleye dönüyor,
kahvede biri hatırlıyor — ölümden bir hafta önce İlyas *"bir iş var, tahsilat
değil; onu yapınca eski defter kapanıyor"* demiş. `cavit_azmettiren` artık üç
olgunun kesişiminden doğuyor.

### Cavit–Ceyda: olgu indirildi, ve çizgi çizildi

Haklıydın, perde arkasındaki giriş sevgililiği kanıtlamıyor. **Yedi yüzeyde**
"sevgili" → "gizlice yakın" oldu (sen üçünü görmüştün; künyedeki *"Kaya
ölmeden **önce de**"* zamanlama iddiasını ve V6'daki üç yüzeyi de bulduk).

**Ama bir yerde durduk ve sebebini bilmen gerek:** V6'da `kaya_bilmiyordu`
olgusu *"Kaya **aldatıldığını** bilmiyordu"* diyor ve **orası kalıyor.** O
olgu `kaya_izi` ipucundan geliyor; o ipucu Kaya'nın kendi el yazısını
getiriyor — *"karısıyla aralarının açıldığını görmüş, sebebini bulamamış"*.
Yani orada **ikinci ve bağımsız** bir kanıt var. Gözlem + kocanın kendi
kalemi = "aldatma" artık tahmin değil, Peri'nin hak edilmiş adlandırması.
Sıra da doğru: `kaya_izi` zaten `zincir_tam` kapısının arkasında.

### Geri çevrilen öneri

*"`cavite_vur` +1, `kanit_biriktir` +2 olsun"* dedin. `test_v5.js` bunun
tersini **gerekçesiyle** kilitlemiş: ikisi eskiden aynı bağdaydı ve biri
ötekini parayla eziyordu (aynı ahlak, farklı para = baskınlık). Öneri o
düzeltmeyi geri alırdı.

### Ahlak cetveli — senin sorun hâlâ açık

Ama testten bir cevap çıktı: **merdiven bir gözden kaçma değil, zorunluluk.**
İki kararın vicdanı aynı, parası farklıysa zengin olan ötekini ezer. Bunu
önlemek için sıralama katı olmalı; eksen yalnız ikiyse (para, vicdan) katı
sıralama zorunlu olarak ters orantı demektir.

Yani cetveli kırmanın yolu rakam oynatmak değil, **üçüncü bir eksen**. Ve o
eksen veride zaten var: her karar farklı bir `cavit_karsi_konum` tohumu
yazıyor. Ama oyuncu karar anında bunu göremiyor. **V6 bu sorunun sınav
yeri** — aşağıya bak.

---

## Format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan |
| `✦ BEDELSİZ` | araştırma hakkı harcatmaz |
| `{"seed":"...","esit":...}` | önceki vakalardan taşınan bayrak |
| `DEĞİL {...}` | koşulun olumsuzu (bilmeyen oyuncuya açılan kapı) |
| `↳` | meta — Peri'nin o an yaptığı çıkarım |

**⚠ Dökümde olan, oyuncunun görmediği:** YAZARIN GERÇEĞİ ve **ruh hâli**.

---

## Sözleşmeler

**1 · Nurcan kuralı.** Oyuncunun hak etmediği bilgi sızdırılamaz.

**2 · Oyun not vermez.** **eylem → sonuç → bedel.** Hüküm cümlesi yasak.
Nitelik+bedel serbest. **Bu vakada en zor sözleşme bu** — final, yargılamaya
en açık yer.

**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.**

**4 · Kaybetme yok.** Batmak oyunu bitirmez, düzgün olma hakkını daraltır.

**5 · Metin SABİT finansal durum iddia edemez.**

**6 · Cengo satırı** kararın ÖNCESİNDEKİ bağa bakar; **sıcaklık onay
değildir.**

---

## V6 hakkında bilmen gerekenler

**Bu vaka araştırma vakası değil, hesaplaşma vakası.** 3 ipucu, **1 araştırma
hakkı**, ikisi bedelsiz. Bilerek böyle: araştırma V1–V5'te yapıldı. Burada
soru "bulabilecek miyim" değil, **"elimdekiyle ne yapacağım"**.

- **`kaya_biliyordu` BURADA ÇÖZÜLÜYOR.** Kanonda "asla çözülmeyen" listesinde
  ama V6 için açık bir istisnası var. Cevap: hayır, bilmiyordu.
- **`ceyda_pay` FİNALDE BİLE ÇÖZÜLMÜYOR.** Yazarın gerçeği aynen şöyle:
  *"final bile çözmez, ÇÖZÜLMEZ."* Bu bir eksiklik değil, sözleşme.
- **Dört ayrı giriş**, oyuncunun ne kadar çözdüğüne göre. En alttaki:
  *"Geriye tek soru kaldı ve onu soracak kimsen yok."*
- **Altı karar**, kapıları bilgiye bağlı. `boslukla_kapat` **yalnız
  bilmeyene** açılıyor; `hepsini_ifsa` V5'te kanıt biriktirmiş oyuncuya.
- **Bilinen açık uç, keşif diye raporlama:** `eldekiler` ipucu
  `boslugu_kabul` diye bir olgu açıyor ama o olgu hiçbir yerde tanımlı
  değil — yani sessiz bir no-op. Oyuncuya görünmüyor (metinsiz olgu boş
  basılıyor). Bütün oyunu taradık, başka örneği yok.

---

## Bakmanı istediklerim

Her bulgu için **hangi cümle, ne yanlış, ne bekliyordum**. Tuhaf bir şey
kasıtlı olabilir — o ihtimali de yaz.

**1 · Final yargılıyor mu?** En kritik soru. Altı kararın sonuç metinleri ve
anı notları. *"Adalet mi bu? Bilmiyorum."*, *"Doğru olan bu muydu
gerçekten?"* — bunlar Peri'nin kendi sesi mi, yoksa oyunun oyuncuya not
vermesi mi? Sınırı aşan var mı?

**2 · `boslukla_kapat` onurlu bir son mu, ceza mı?** Hiç kazmayan oyuncunun
tek seçeneği. Metin onu küçük düşürüyor mu, yoksa "bilmemek de bir hâldir"
diyebiliyor mu? *"Sen o kadar derine inmedin"* fazla mı sitemkâr?

**3 · `ceyda_pay` finalde bile çözülmüyor.** Tatmin edici mi, yoksa
kaçamak mı? V5'te üç kez *"A mı B mi"* kalıbı kullanıldığını söylemiştin;
burada aynı belirsizlik kararlara taşınıyor (*"Mağdur bir kadını mı, bir
canavarı mı"*). Bu sefer çalışıyor mu?

**4 · Ahlak cetveli — V6 sınavı.** Rakamlar: `cavit_ver` −20.000/+1,
`sus_bilerek` +70.000/−1, kalan dördü 0/0. Yani finalde **dört karar aynı
para ve aynı bağ.** Cetvel burada kırılıyor mu, yoksa sadece düzleşiyor mu?
Ve `hepsini_ifsa` (masumlar zarar görüyor) ile `ilyas_ver` (küçük balığı
verdin) gerçekten aynı ahlaki ağırlıkta mı — ikisi de 0?

**5 · `%100` tuhaflığı.** `boslukla_kapat`'ın "çoğu insan" oranı %100
yazıyor. O kapıya düşen herkesin tek seçeneği olduğu için mi, yoksa veri
hatası mı? Oyuncuya nasıl görünür?

**6 · Cengo'nun kademeleri.** `boslukla_kapat` ve `hepsini_ifsa`'da var.
En sıcak varyant *"Yanına oturdu, ışığı kapattı; bir süre öyle kaldınız"* —
bir sezonun kapanışı olarak çalışıyor mu?

**7 · Sızıntı.** `ceyda_pay` çözülmemeli — herhangi bir cümle onu bir yöne
itiyor mu?

**8 · Proza.** Ayrı liste.

**9 · İyi çalışan ne?** Bu bir final; neyi bozmamamız gerektiğini bilmemiz
özellikle önemli.

---

## Son not

İddiayı **dosyadan alıntıla.** Emin değilsen "şüpheleniyorum" de. Bulamazsan
bulamadığını söyle — uydurma bulgu, bulgu yokluğundan kötüdür.
