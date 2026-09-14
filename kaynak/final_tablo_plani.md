# Sezon Sonu Tablosu — Plan

**Durum: yazılmadı, bilerek ertelendi.** Android aşamasında devreye alınacak.
Bu belge o günün kararlarını bugünden veriyor ki aradaki işler bize engel
çıkarmasın.

İstek: *"oyunun en sonunda oyuncunun bütün sezon yaptığı tercihlerin ne kadar
ahlaki veya ne kadar kirli olduğunu gösteren bir istatistik tablosu. Belki
diğer oyuncularınki ile kıyaslamalı."*

---

## Neden şimdi değil

HTML'i bitirmeden hiçbir şeyin işimizi zorlaştırmaması kuralı geçerli.
Tablonun **kıyaslama** kısmı sunucu istiyor; sunucu, tek dosyalık HTML
mimarisini ve "önce HTML" sırasını bozar. Tablo sezonun sonunda durduğu için
en son yazılacak şey olması da doğal.

## Şu an elimizde ne var (doğrulandı)

Tablonun **ahlaki profil** kısmı için gereken her şey bugün kayıtta duruyor;
yeni bir alan gerekmiyor:

| Veri | Nerede | Örnek |
|---|---|---|
| Hangi vakada hangi karar | `seeds._karar_<vaka>` | `_karar_V3: "polise_ver"` |
| O kararın vicdan ağırlığı | `game_data` → `decisions[].cengoBag` | `polise_ver: +2` |
| Beklenen dağılım | `decisions[].yuzde` | `%38` |
| Cengo'yla son durum | `durum.cengoBag` | `−5` → "Mesafeli" |
| Kasa / borç | `durum.para`, `durum.borc` | `0 ₺ / 297.314 ₺` |
| Süren krizler | `durum.kriz` | `{isletme, cengo, kira}` |
| Oynanan vakalar | `durum.tamamlanan` | yan işleri de gösterir |

Yani sezon profili **bugünkü kayıttan tam olarak yeniden kurulabilir.**

### Elimizde OLMAYAN (istenirse eklenmeli)

Bunlar anlık durumu tutuyor, geçmişi değil:

- **Kaç ay elektrik kesik kaldı** (yalnız son hâl var)
- **En derin borç** (yalnız güncel borç var)
- **Vaka başına kaç kaynak açıldı** (biten vakanın açılanları saklanmıyor)

Üçü de küçük birer sayaç (`durum.gecmis = {karanlikAy, enDerinBorc, ...}`).
Sonradan eklemek `KAYIT_SEMA` artışı demek, o da yarım kalmış kayıtları
geçersiz kılar. **Karar: Android aşamasında, tablo yazılırken eklenecek.**
Oyun o noktada zaten yeni bir sürüme geçiyor olacak; ayrıca bu sayaçlar
olmadan da tablo ayakta duruyor — süs değiller ama omurga da değiller.

---

## Tablo ne gösterecek

Dört bölüm. Sıra önemli: önce ne yaptığın, sonra neye mal olduğu, en sonda
kıyas.

### 1. Sezonun eli
Her vaka bir satır: vakanın adı, verdiğin kararın etiketi, vicdan işareti.
Kirli (`cengoBag < 0`), nötr (`= 0`), temiz (`> 0`).

### 2. Tek sayı değil, iki eksen
- **Vicdan toplamı** — verilen kararların `cengoBag` toplamı.
- **Kazanılan para** — toplam vaka ücreti.

İkisi yan yana durmalı. Oyunun tezi tam olarak bu ödünleşim; tek bir
"ahlak puanı" onu ezer.

### 3. Bedeli
Borç, Cengo'yla son durum, süren krizler. Yani "temiz oynadım" diyenin bunun
neye mal olduğunu, "para kazandım" diyenin neyi verdiğini gördüğü yer.

### 4. Kıyas
Aşağıya bakınız.

---

## Kıyaslama: üç aşama

### Aşama A — beklenen dağılımla (HTML'de, sunucusuz)
Karar başına `yuzde` değerleri zaten yazılı ve karar ekranında kullanılıyor.
Sezon sonunda toplanır: *"Senin sezonun, oyunun beklediği dağılıma göre şurada
duruyor."*

Sunucu yok, kişisel veri yok, hemen yapılır. **Android'de açılacak ilk şey bu.**

### Aşama B — cihazdaki geçmiş sezonlar (sunucusuz)
Aynı cihazda oynanan önceki sezonlar `localStorage`'a yazılır: *"Üçüncü
sezonun. İlkinden daha kirli bitirdin."* Kişisel veri dışarı çıkmıyor.

### Aşama C — gerçek oyuncu verisi (sunucu ister)
Yalnızca Android aşamasında ve yalnızca şu şartlarla:

1. **Açık rıza.** Varsayılan KAPALI. Oyuncu bir kez sorulur, istediğinde
   kapatır. Mağaza kuralları da bunu istiyor.
2. **Anonim ve asgari.** Gönderilecek tek şey: hangi vakada hangi karar
   kimliği. Kasa, borç, cihaz kimliği, konum — hiçbiri yok.
3. **Tek yön.** Oyun hiçbir şey indirmeden de tam çalışmalı; sunucuya
   ulaşılamazsa sessizce Aşama A'ya düşer, hata göstermez.
4. **Gizlilik metni.** Mağaza zaten zorunlu tutuyor.

---

## Bozulmaması gereken sözler

**1. Oyun bir puan vermiyor.** Son ekran şu anda "Bu bir puan değil, kimse
kazanmaz. Bir ayna." diyor. Tablo bunu bozamaz:

- Tek bir ahlak puanı **yok**. İki eksen yan yana durur.
- Sıralama, rozet, başarım, "en iyi son" **yok**.
- Liderlik tablosu **yok**. Bu oyunda kazanmak diye bir şey yok; bir liste
  kazananı olduğunu söyler.
- Kıyas cümlesi yargılamaz. "Oyuncuların %70'i senden temiz" değil;
  "bu kararda çoğunluk şunu seçti" — dağılım, not değil.

**2. Rakamın kaynağı hakkında yalan söylenmiyor.** Karar ekranı bugün şunu
yazıyor:

> *"Bu oranlar gerçek oyuncu verisi değil — oyunun bu durumda insanlardan
> beklediği dağılım."*

Bu cümle A ve B aşamalarında **aynen kalır**. Ancak C devreye girdiğinde ve
yalnızca gerçekten gerçek veri gösterildiğinde değişir. Veri karışıksa (bazı
vakada gerçek, bazısında yazılı) hangisinin hangisi olduğu satır satır belli
olmalı.

**3. Nurcan kuralı sonda da geçerli.** Tablo, oyuncunun o sezonda hiç
öğrenmediği bir şeyi ele vermemeli. Örnek: `kaya_gercek_ogrenildi` olmadan
bitiren oyuncuya "aslında Kaya hiçbir şey bilmiyordu" denmez — son ekran bunu
zaten doğru yapıyor, tablo da aynı geniş bilgi kümesini kullanmalı
(`_metinBilinen`).

---

## Sıra

1. V4, V5, V6 ve yan vakaların para değerleri yazılsın — tablo bunları okuyacak.
2. HTML bitsin, `DEV_MOD = false`.
3. Android'e geçiş (Capacitor, görselleri base64'ten ayır, donanım geri tuşu).
4. **Aşama A tablosu** — sayaçlar (`durum.gecmis`) burada eklenir, `KAYIT_SEMA`
   burada artar.
5. Aşama B, oyuncu ikinci sezonu oynamak isterse.
6. Aşama C, ancak gerçekten istenirse ve rıza akışıyla birlikte.
