# DEVİR NOTU — 23 Eylül 2026

> Bir sohbet penceresinden ötekine devir. **Önce `CLAUDE.md`'yi oku** (sözleşmeler,
> tuzaklar, komutlar orada). Bu belge onun üstüne yalnız **oturum durumunu** koyar:
> ne yapıldı, sahibi neyi bekliyor, sıradaki iş ne.
>
> Bu belge tarihlidir. İş ilerledikçe **güncellenir ya da silinir**.

---

## 1. NEREDE DURUYORUZ

Son commit **`e3b79d6`**, `main`'de, push edilmiş. Çalışma ağacı temiz.

| | |
|---|---|
| Doğrulayıcı | **PASS (5 uyarı)** — 13 kural |
| Test | **22/22** (+ `test_bozuk.js`, çıkış 0, gösteri betiği) |
| Görsel | **63/63** gömülü |
| Tarayıcı turu | dokuz vakayı da oynuyor, hata yok |
| İçerik | 9 vaka · 48 ipucu · 67 olgu · 40 karar |

**Cache uyarısı:** GitHub Pages `index.html`'i `max-age=600` ile sunuyor. Sahibi
değişikliği göremezse **`?v=8`** gibi bir sorgu eki ver.

---

## 2. BU OTURUMDA NE OLDU (29 commit)

Oturum "akışta çelişki var mı" sorusuyla başladı ve **sistematik bir metin
denetimine** dönüştü. Omurganın altı vakası da (V1–V6) taze göz incelemesinden
geçirildi ve düzeltildi.

### Yöntem — tekrar kurulabilir

1. `node arac_okuma.js V3 > /tmp/v3.txt` — vakanın tam dökümü
2. `kaynak/inceleme_brief_v3.md` — ChatGPT'ye brief (format sözlüğü + sözleşmeler
   + o vakaya özgü uyarılar + önceki turun karnesi)
3. Rapor gelince **her maddeyi veriye/motora karşı doğrula**, sonra ayıkla
4. Geçerli olanları uygula, geçmeyenlerin gerekçesini bir sonraki brief'e yaz

Altı brief `kaynak/inceleme_brief_v1..v6.md` olarak duruyor. **Yan vakalar için
aynı kalıbı kullan.**

### Tur tur bilanço

| tur | uygulanan | yanlış çıkan |
|---|---|---|
| V1 | 3 | 3 *(ikisi benim brief hatam: prolog verilmemişti, finans kuralı fazla geniş yazılmıştı)* |
| V2 | 5 | 0 |
| V3 | 5 | 3 |
| V4 | 7 | 1 |
| V5 | 6 + **kanıt eklendi** | 1 |
| V6 | 4 | 2 *(biri `arac_okuma`'nın basım hatası)* |

### Kanona eklenen tek şey (sahibinin onayıyla)

**V5'e Cavit'i cinayete bağlayan kanıt.** Vakanın adı "Cavit'in maskesi düşüyor"du
ama düşüren kanıt yoktu: eski dava dosyası yalnız **kaldıracı** gösteriyordu.
Sahibi üç şekilden **B**'yi (sokak yolu) seçti.

Yeni ipucu `cengo_mahalle_donus` (**bedelsiz**, needs `ilyas_mahkum`): Cengo
mahalleye dönüyor, kahvede biri hatırlıyor — ölümden bir hafta önce İlyas *"bir iş
var, tahsilat değil; onu yapınca eski defter kapanıyor"* demiş. Yeni olgu
`ilyas_son_is`. `cavit_azmettiren` artık üç olgunun kesişiminden doğuyor.

**Bağladığı kanon:** İlyas'ın ölümden bir hafta önce kahvede konuştuğu artık
sabit. Ekonomi korundu (adım bedelsiz, `tam_resim` yine aynı 5 ödemeyle geliyor).

### Sezon boyu yapılan iki büyük geri çekme

**"Evde ağır" kaldırıldı (V4).** İfade üç yerde geçiyordu ve hiçbiri öncesini
kurmuyordu — dahası `kaya_cevre` tam tersini söylüyor (*"iyi kalpli, sessiz,
kimseye yük olmayan"*). Boşluk değil çelişkiydi. Sahibi kurmak yerine kaldırmayı
seçti; kurmak Ceyda'nın "mağdur mu" okumasını güçlendirirdi.

**"Sevgili" yedi yüzeyde "gizlice yakın" oldu (V5+V6).** Perde arkasındaki giriş
gizli yakınlık gösteriyor, sevgililiği kanıtlamıyor.
**ÇİZGİ ŞURADA VE SEBEBİ ÖNEMLİ:** V6'daki `kaya_bilmiyordu` olgusu hâlâ
*"aldatıldığını"* diyor ve **kalacak** — o olgu `kaya_izi`'nden geliyor, o da
Kaya'nın kendi el yazısını getiriyor (*"karısıyla aralarının açıldığını görmüş,
sebebini bulamamış"*). Gözlem + kocanın kendi kalemi = hak edilmiş adlandırma.

### Araçlara eklenen beş kör nokta

`arac_akis_denetim.js` yeni yazıldı (40 kararın bütün yüzeyleri yan yana) ve
`arac_okuma.js` yeni yazıldı (bir vakayı baştan sona okunur hâlde). İkisi de
kullanıldıkça kör noktaları çıktı:

| kör nokta | sonucu |
|---|---|
| Cengo ekranda susarken defterde konuşuyor | V2/`kuru_rapor` çelişkisi yakalandı |
| `meta` koşullu varyant olabiliyor | üç varyant `[object Object]` basıyordu |
| ipucu `ad`'ı da varyant olabiliyor | iki başlık `[object Object]` |
| prolog basılmıyordu | inceleme "açılış Peri'yi kurmuyor" dedi, yanlıştı |
| `DEĞİL` parantezsiz basılıyordu | inceleme yanlış bir **P0** bildirdi |

### Yeni koruma

`test_yedek.js` — `game_data.json` ↔ `vaka2-6/yan_a-b` eşlemesi. Kural belgede
yazılıydı ama denetlenmiyordu: **yedi yedeğin yedisi de kaymıştı** (22–80 satır).
Hepsi yeniden üretildi. Negatif sınandı.

### CLAUDE.md'ye yazılan dört tuzak

kapıya boru sokma · doğrulayıcı testlerin içinde de çalışıyor · yedek dosya
senkronu · tarayıcı turunda `text=` seçicisi kullanma (+ tur "karar düğmesi yok"
derse önce motora sor)

---

## 3. SAHİBİNİN CEVAP BEKLEDİĞİ İKİ SORU ⬅️ BURADAN DEVAM ET

### 3.1 · `boslugu_kabul` tanımsız bir olgu

V6'daki `eldekiler` ipucu `boslugu_kabul` diye bir olgu açıyor ama **o olgu
hiçbir yerde tanımlı değil.** Oyuncuya görünmüyor (metinsiz olgu boş dizgi
dönüyor), yani sessiz bir no-op. Hiçbir çıkarım/kapı/metin de okumuyor.

Bütün oyun tarandı: 67 tanımlı olgu içinde **tek örnek bu**, yani yazım hatası
değil, tek bir açık uç.

Seçenekler: (a) metin verip gerçek olgu yap, (b) `reveals`'tan sil.

### 3.2 · Doğrulayıcıya "tanımsız olgu" kuralı eklensin mi?

Şu an `reveals`/`acilan` içindeki bir yazım hatası **sessizce** olguyu düşürüyor —
tam da CLAUDE.md'nin uyardığı cinsten ayrışma. Kural eklenirse 3.1 önce
çözülmeli (yoksa BLOCKED verir).

---

## 4. SIRADAKİ İŞLER

### 🔴 Üç yan vaka incelenmedi
YAN-A (Kapalı Defter), YAN-B (Enkaz), YAN-C (Adres). Omurga bitti, bunlar duruyor.
Kalıp hazır: döküm + brief + doğrulama + ayıklama. **Aynı sırayla yap.**

### 🔴 Ses — DEVIR'in eski notundaki "tek gerçek eksik"
`ses/` içindeki **5 dosya sentetik yer tutucu** (12 kHz bip). Sipariş metinleri
`ses_promptlari.md` BÖLÜM 2'de. Efekt müzik değil; Suno/Udio üretemez, metinden
efekt üreten araç ya da freesound gibi kütüphane gerekiyor. `test_ses.js` üç yeri
eşliyor (EFEKT tablosu, `efektCal` çağrıları, `ses/` klasörü).

### 🟡 İncelemelerden kalan, sahibinin karar vermediği
- **Ahlak cetveli.** Dokuz vakanın dokuzunda da vicdan düşerse para artıyor.
  Testten çıkan teşhis: bu bir gözden kaçma değil **zorunluluk** — aynı vicdan +
  farklı para = baskınlık, eksen ikiyse katı sıralama ters orantı demek. Kırmanın
  yolu rakam değil **üçüncü eksen**; o eksen veride var (`cavit_karsi_konum` gibi
  tohumlar) ama karar anında görünmüyor. İnceleme "karar kartında stratejik yön
  göster, sayılaştırma" öneriyor. V6'da dört karar zaten 0/0'da düzleşiyor.
- **Ceyda'nın üç "A mı B mi"si** (V5). Fikir sözleşme gereği doğru ama üçüncü
  tekrarda oyuncu yazarın elini görüyor. V6'da aynı belirsizlik kararın bedeline
  dönüştüğü için orada çalışıyor.
- **Üç hüküm kalıbı**: *"Umarım doğru olanı yaptım"* (V2), *"Doğrusu buydu"* (V3),
  *"Haklıydın olmasan bile"* (YAN-B — bu ayrıca Türkçe olarak tökezliyor).
  `arac_akis_denetim.js --bayrak` üçünü de bayrakla basıyor.
- **"Peri'nin boğazı düğümlendi"** (V4) — oyuncuya ne hissedeceğini söylüyor.
- **`cengo_yoldas` yeniden üretimi** — PAKET 8 siparişi duruyor ama **gerek
  kalmadı**: kareler takas edilerek çözüldü. Sipariş kaydı tarihsel.

### 🟢 Eski açık işler (değişmedi)
- Paket 5 görselleri (4: kriz kutusu + sezon sonu) — slot veride açılmamış
- K10 kör noktası — doğrulayıcı yalnız varsayılan metin varyantını denetliyor
- Cengo satırı / anı defteri tekrarı — `cengoya_birak`, `gecistir`, `oyunu_surdur`

### ⚪ Sonraki faz
Android: Capacitor, görselleri base64'ten çıkarma, donanım geri tuşu,
erişilebilirlik, `final_tablo_plani.md`'deki sezon sonu istatistik tablosu.

---

## 5. SAHİBİYLE ÇALIŞMA BİÇİMİ

**Kısa konuş.** Bu oturumda sahibi dört kez "basit ve kısaca anlat" dedi. Uzun
tablo ve çok maddeli cevap işe yaramıyor; **iki-üç cümle + bir soru** çalışıyor.

**"Senin fikrin nedir?" diye sorar.** Seçenek listesi sunmak yerine **bir tane
öner ve gerekçesini tek cümlede söyle.** Bu oturumda beş kez böyle ilerledi.

**Kanona ekleme yapmadan önce onay al** — nereye ne ekleyeceğini söyle, onaylasın,
sonra yap. Bu oturumda bir kez işledi (V5 kanıtı) ve şekli sahibi seçti.

**Taslak → oku → uygula.** Her seferinde taslakta bir hata yakalandı.

**Sahibinin prozasına dokunma.** Onun cümlesini değiştirmek öneriyle olur.

---

## 6. BU OTURUMDA ISIRAN DERSLER

**Önce motora sor, sonra inan.** İnceleme üç kez "bu bozuk" dedi ve üçü de
doğruydu; ama iki kez de yanlış alarm verdi ve ikisi de ancak **motoru
çalıştırınca** çürütülebildi (`boslukla_kapat` kapısı, `%100` paneli).

**Tuhaf görünen şey kasıtlı olabilir.** `vedat_yuz`'ü "gizli tuzak" sanıp bedelsiz
yaptım; `test_v2b.js` kırıldı ve testin kendi yorumu tasarımı yazıyordu:
*"gerçek seçim: tam gerçek (güç) vs Vedat'a acıma (empati). İkisi birden değil."*
**Değiştirmeden önce ilgili teste bak.**

**Kendi aracına da şüpheyle bak.** İki yanlış alarmdan biri verinin değil
`arac_okuma.js`'in hatasıydı. Bir teşhiste de kendi "düzeltmem" hatayı büyüttü
(tur döngüsünün frenini 8'den 4'e düşürdüm).

**Geri çekme, ekleme kadar iş görür.** Bu oturumda uygulanan 30 düzeltmenin
büyük çoğunluğu **cümle kısaltmaktı** — "kimseye söylememiş" → "desteği veren
oydu", "Adalet geldi" → "Hepsi düştü". Yeni kanon yalnız bir kez eklendi.

**Aynı kök, farklı yüzey.** V4'teki altı sızıntının hepsi tek bir sebeptendi:
vaka "bunu kim biliyordu?" sorusunu cevaplıyordu, oysa o soru V5'in. Bir bulgu
bulduğunda **kardeşlerini ara.**
