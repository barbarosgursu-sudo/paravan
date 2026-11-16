# Paravan Dedektiflik — V5 metin incelemesi

Ekteki `V5_okuma.txt`, **beşinci vakanın** tam metin dökümü. V1–V4'ü
incelemiştin. Bu sezonun en uzun vakası (7 ipucu, 5 karar).

---

## Önce: geçen turda İKİMİZ de yanıldık

V3 turunda şunu yazmıştın:

> *"V4–V6'da aynı monoton para/bağ merdivenini tekrar etmemek şart. Bir noktada
> ahlaken temiz bir karar daha çok para verebilmeli. Yoksa oyuncu gizli ahlak
> cetvelini çözer."*

V4 brief'inde sana *"V4'te merdiven kırıldı"* dedim, sen de *"evet, kırılma
yeterli"* dedin. **İkimiz de yanlıştı.** Bu tur bütün sezonu ölçtüm:

| vaka | bağ sırasına göre para dizisi | merdiven |
|---|---|---|
| V1 | 0 → 25.000 → 45.000 → 65.000 | düzgün |
| V2 | 10.000 → 14.000 → 18.000 → 18.000 | düzgün |
| V3 | 0 → 40.000 → 70.000 → 85.000 | düzgün |
| YAN-A | 0 → 12.000 → 45.000 → 65.000 | düzgün |
| YAN-B | −40.000 → −18.000 → −8.000 → 0 | düzgün |
| YAN-C | −15.000 → 0 → 40.000 → 120.000 | düzgün |
| V4 | −35.000 → −10.000 → 0 → 18.000 → 25.000 | düzgün |
| **V5** | 0 → 15.000 → 30.000 → 55.000 → 80.000 | düzgün |
| V6 | −20.000 → 0 → 0 → 0 → 0 → 70.000 | düzgün |

**Dokuz vakanın dokuzunda da istisnasız:** vicdan bir basamak düşerse para bir
basamak artar. Hiç tersine dönmüyor.

V4'ü "kırık" sanmamın sebebi rakamların **eksiye geçmesiydi** — temiz kararlar
orada cebinden para götürüyor. Ama sıralama yine kusursuz. Farklı olan
merdivenin yönü değil, sıfırın neresinde durduğu.

Yani senin V3'teki uyarın **hâlâ tamamen açık**, ve V5 bunun en saf örneği:
0 / 15 / 30 / 55 / 80 bin, düzgün beşli. **Bu turda asıl duymak istediğim
yargın bu.**

---

## V4 turunun sonucu

**Yedi bulgun uygulandı, biri yanlıştı.**

En büyüğü **7. maddendi** ve sandığından büyük çıktı. *"Evde ağır"* ifadesini
bütün oyunda aradım: üç yerde geçiyor (yazarın notu, `aile_gorusme` metası,
Kaya'nın künye katmanı) ve **üçü de aynı anda ortaya çıkıyor**, hiçbiri
öncesini kurmuyor. V5'te de Kaya'nın ev hayatı hakkında tek kelime yok.

Dahası boşluk değil **çelişkiydi**: Kaya'nın itibarından bahseden tek yüzey
(`kaya_cevre`) tam tersini söylüyor — *"iyi kalpli, sessiz, kimseye yük olmayan
bir adam."*

Sahibi ifadeyi **kaldırmayı** seçti. Kurmak kanona ekleme olurdu ve Kaya'yı
evde kötü göstermek Ceyda'nın *"mağdur mu"* okumasını güçlendirirdi — oysa o
soru bilerek çözülmüyor.

Diğer altısı da uygulandı: `iyilik_tam`'daki *"kimseye söylememiş"*,
`kaya_gizli_iyilik`'teki *"kimseye"*, *"sırrını onunla gömdün"*, *"Belki en
merhametlisi"*, `odeme_iz`'in erken *"hayırsever"*i ve *"zaten yoktu"*.

**Yanlış çıkan:** kriz + `kaya_cevre` tuzağı. Motoru sınadım — V4'te elektrik
cezası **uygulanmıyor**. Motorda `_kirletmeyeZorlarMi` var: ceza uygulanınca
elde yalnız vicdanı eksi karar kalacağını görüp cezayı reddediyor. Sözleşme
kendini koruyor. Koşullu riski doğru görmüştün, motor zaten kapatmış.

---

## Format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan |
| `✦ BEDELSİZ` / `✦ bedelsiz koşullu` | hak harcatmaz (koşulluysa: o koşul tutarsa) |
| `{"seed":"ilyas_kime_gitti","esit":"polis"}` | önceki vakadaki karar |
| `/ ... [koşul]` | ipucunun ADI da koşula göre değişiyor |
| `↳` | meta — Peri'nin o an yaptığı çıkarım |

**⚠ Dökümde olan, oyuncunun görmediği:** YAZARIN GERÇEĞİ ve **ruh hâli**.

---

## Sözleşmeler

**1 · Nurcan kuralı.** Oyuncunun hak etmediği bilgi sızdırılamaz. En tehlikeli
yer **varsayılan varyantlar**.

**2 · Oyun not vermez.** **eylem → sonuç → bedel.** Hüküm cümlesi yasak.
Nitelik+bedel ("Cesur — ama…") serbest.

**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.**

**4 · Kaybetme yok.**

**5 · Metin SABİT finansal durum iddia edemez.** Olay cümleleri serbest.

**6 · Cengo satırı** kararın ÖNCESİNDEKİ bağa bakar; **sıcaklık onay değildir.**

---

## V5 hakkında bilmen gerekenler

**Bu vaka Cavit'in maskesinin düştüğü yer.** V3'te *"arkasında biri var, yüzü
yok"* diyorduk; burada yüz veriliyor. `cavit_azmettiren` çıkarımı hak edilerek
doğuyor.

**Ama Ceyda ÇÖZÜLMÜYOR — ve bu bir eksiklik değil, sözleşme.** Kanonda
bilerek çözülmeyen iki olgudan biri `ceyda_pay`. Yazarın gerçeği bunu açıkça
yazıyor: *"mağdur MI, asıl akıl MI, para peşinde Mİ: üçü de mümkün, ÇÖZÜLMEZ."*

Üç `ip_*` olgusunun her biri iki okunuşu birden taşıyor:
- *"Soğuk hesap MI, korkan mağdur MU — belli değil."*
- *"Gerçek Mİ, Cavit'in yalanı MI — belli değil."*
- *"Açgözlülük MÜ, çaresiz dul MU — belli değil."*

**Bu belirsizliği "çözülmemiş" diye raporlama.** Ama şunu sor: belirsizlik
*dürüst* mü, yoksa yazar karar vermekten mi kaçıyor gibi duruyor? İkisi
arasındaki fark bu vakanın kaderi.

**`kaya_biliyordu` da gizli** — Kaya aldatıldığını biliyor muydu, V6'nın konusu.

Diğerleri:
- V5'in girişi **V3'teki kararına göre** dört ayrı varyant basıyor.
- `dosya_donus` **koşullu bedelsiz**: V1'de `gizli_kaz` seçmiş oyuncuya bedava.
- `kazma` sonucunda `zincir_tam` koşulu var ama bir `YA DA` listesinin içinde;
  ulaşılabilir olgularla birlikte, yani ölü değil (V3'teki durumun aksine).

---

## Bakmanı istediklerim

Her bulgu için **hangi cümle, ne yanlış, ne bekliyordum**. Düzeltme önermeden
önce mevcut cümleyi bir daha oku. Tuhaf bir şey **kasıtlı** olabilir — o
ihtimali de yaz.

**1 · Gizli ahlak cetveli.** Yukarıdaki tablo. Dokuz vakada da aynı yön.
Oyuncu bunu kaçıncı vakada çözer? Çözünce oyun bozulur mu, yoksa *"para ile
vicdan zaten ters orantılıdır"* gerçekçi mi? Kırılması gerekiyorsa **nerede**
ve **nasıl** — somut öner.

**2 · Ceyda'nın belirsizliği dürüst mü?** Yukarıya bak. Üç ipucu da iki
okunuşu yan yana koyuyor. Bu incelikli mi, yoksa formülleşmiş mi? Bir oyuncu
*"yazar karar vermemiş"* der mi?

**3 · Cavit sızıntısı, ters yönden.** Bu sefer Cavit AÇILIYOR — ama hak
edilerek mi? `cavit_supheli` → `cavit_azmettiren` → `tam_resim` zinciri sağlam
mı, yoksa bir yerde oyun cevabı veriyor mu?

**4 · `kaya_biliyordu` sızıyor mu?** V6'ya saklanan soru. Herhangi bir cümle
Kaya'nın bildiğini ya da bilmediğini ima ediyor mu?

**5 · Beş karar gerçekten farklı mı?** `cavite_vur` / `kanit_biriktir` /
`ceydaya_git` / `kazma` / `oyunu_surdur`. Özellikle `kanit_biriktir` ile
`ceydaya_git`: ikisi de "bekle ve hazırlan" gibi. Ayrışıyorlar mı?

**6 · Cengo'nun kademeleri.** `oyunu_surdur` ve `kazma`'da var. En sıcak
varyant *"odaya girdiğinde sana değil, pencereye bakıyor"* — çalışıyor mu?

**7 · Proza.** Ayrı liste.

**8 · İyi çalışan ne?**

---

## Son not

İddiayı **dosyadan alıntıla.** Emin değilsen "şüpheleniyorum" de. Bulamazsan
bulamadığını söyle — uydurma bulgu, bulgu yokluğundan kötüdür.
