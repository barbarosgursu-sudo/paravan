# Paravan Dedektiflik — Doğrulayıcı Sözleşmesi (v1)

> Bu belge, oyunu açmadan önce çalışacak **build-time doğrulayıcının** ne yapacağını
> kesin olarak tanımlar. Amaç tek cümle: *hiçbir kaynak, oyuncunun o an bilemeyeceği
> bir isimden veya olgudan bahsetmesin.* Yani "Nurcan hatasını" insana değil makineye
> yakalatmak. Kodlama aşamasında (Adım 4) bu sözleşmeden gerçek kod yazılacak.

---

## 1. Doğrulayıcının denetlediği veri şekli

Her vaka aşağıdaki iskelete uyar. (Alan adları kodlama aşamasında son hâlini alır;
mantık sabittir.)

```
VAKA = {
  id:       "V1",
  truth:    { ...anahtar: değer... },        // değişmez gerçek; kesin + belirsiz alanlar
  facts:    { anahtar: "insan-okur açıklama", ... },   // kimliklenmiş olgular
  knowledge:[ { turetilen: "X", gerekli: ["a","b"] }, ... ],  // küme-tabanlı çıkarımlar
  clues:    [ { id, text, meta, needs:[...], reveals:[...] }, ... ],
  decisions:[ { id, gate: "olgu | çıkarım | yok", ... }, ... ],
  seeds:    { anahtar: kaynak, ... }
}

KANON = {
  isimler:  ["Kaya","Ceyda","Cavit","İlyas","Vedat","Nesrin","Peri","Cengo", ...],
  belirsiz: ["ceyda_pay","kaya_biliyordu", ...]   // tek yöne kesinleşmemesi gerekenler
}
```

Doğrulayıcı, **tüm vakaları + KANON'u** girdi alır, beş kuralı sırayla çalıştırır,
biri bile patlarsa çıkışı `FAIL` verir ve oyun paketlenmez.

---

## 2. Beş Kural

### Kural 1 — Sözlük Denetimi  *(Nurcan'ın asıl dersi)*

**Ne denetler:** Her `clue`'nun `text` ve `meta` metninde geçen her **kanon ismi** ve
her **olgu-anahtarı**, o clue'nun `needs ∪ reveals` kümesinde bulunmalı.

**Geçme koşulu:** Metinde görünen her tanınabilir isim/olgu için:
- ya o clue onu `reveals` ediyordur (ilk kez o açıyor),
- ya da bir `needs` şartı olarak listelenmiştir (daha önce açılmış olmalı).

**Patlama koşulu:** Metinde, `needs ∪ reveals`'te olmayan bir isim/olgu geçiyorsa → **FAIL**.

**Nurcan örneği (bu kuralın doğuş sebebi):**
```
clue "kamera":
  text: "...kadın Nurcan değil..."
  needs: []            ← "Nurcan" burada YOK
  reveals: [...]       ← burada da YOK
→ FAIL: "kamera metni 'Nurcan' diyor ama needs/reveals'te yok."
```
Düzeltme iki yoldan biri olur: ya `needs:["nurcan_suclamasi"]` eklenir (o ismi açan
kaynak görülmeden kamera açılmaz), ya da isim metinden çıkarılır.

**Doğru örnek (Paravan V3):**
```
clue "cengo_okuma":
  text: "...böyleleri kendi aklıyla adam itmez — biri sırtına bindiyse iter..."
  needs: [iten_ilyas]
  reveals: [ilyas_sebep_yok, el_var]
→ PASS: metinde "Cavit" ismi GEÇMİYOR; sadece "biri" deniyor (el_var, isimsiz).
```

> **İsim tespiti notu:** Doğrulayıcı KANON.isimler listesini kelime sınırıyla arar
> (büyük/küçük harf ve Türkçe ekler dahil: "İlyas", "İlyas'ı", "İlyas'ın" → hepsi
> "İlyas" sayılır). Olgu-anahtarları metne `{olgu}` şablonuyla veya açık atıfla girer;
> serbest metinde olgu-anahtarı geçmesi beklenmez, isimler asıl risktir.

---

### Kural 2 — Erişilebilirlik Denetimi  *(ulaşılamaz bilgi / ölü karar)*

**Ne denetler:** `knowledge` ve `decisions` içinde kullanılan her olgu ve çıkarımın,
en az bir yoldan **açılabilir** olduğunu.

**Geçme koşulu:**
- Bir `knowledge` çıkarımının `gerekli` listesindeki her olgu, en az bir clue tarafından
  `reveals` ediliyor **veya** başka bir ulaşılabilir çıkarımdan türüyor.
- Bir `decision`'ın `gate`'i, ulaşılabilir bir olgu/çıkarım.

**Patlama koşulu:** Hiçbir clue'nun `reveals` etmediği ve hiçbir çıkarımdan türemeyen bir
olgu, bir `knowledge` veya `gate` içinde kullanılıyorsa → **FAIL**
("ulaşılamaz bilgi: oyuncu bu olguya asla varamaz").

**Örnek:**
```
decision "gizli_kaz": gate: cinayet_suphesi
knowledge: cinayet_suphesi = dusus_acisi VE (ceyda_celiski VEYA komsu_ses)
→ dusus_acisi bir clue tarafından reveals ediliyor mu? ceyda_celiski türeyebiliyor mu?
   Hepsi evetse PASS. Biri bile hiçbir yerde açılmıyorsa FAIL.
```

---

### Kural 3 — Bağımlılık Döngüsü Denetimi

**Ne denetler:** `needs` zincirlerinde kısır döngü olmadığını.

**Geçme koşulu:** clue'ların `needs` bağımlılık grafiği **döngüsüz** (DAG). Yani
"A açılması için B, B açılması için A" gibi bir çember yok.

**Patlama koşulu:** Bir döngü tespit edilirse → **FAIL** ("kilitli kapı arkasında kilitli
anahtar: şu clue'lar birbirini bekliyor: [...]").

**Not:** Girişi `needs:[]` olan (baştan açık) en az bir clue her vakada bulunmalı,
yoksa vaka hiç başlamaz — bu da bu kural altında FAIL sayılır ("vakanın açık girişi yok").

---

### Kural 4 — Truth Uyumu Denetimi

**Ne denetler:** Hiçbir clue'nun, vakanın `truth` objesiyle çelişen bir olgu
`reveals` etmediğini.

**Geçme koşulu:** Her `reveals` edilen olgu, `truth`'ta "YOK/GİZLİ" işaretlenmiş bir
gerçeği açığa vurmuyor.

**Patlama koşulu:** `truth` bir şeyi "bu vakada YOK" diyorsa ve bir clue onu açıyorsa →
**FAIL**.

**Örnek (V2):**
```
truth (V2): ilyas_cinayet = "GİZLİ — bu vakada YOK"
→ V2'de hiçbir clue, İlyas'ı cinayete bağlayan bir olgu reveals edemez.
   Bir clue "ilyas_katil" gibi bir olgu açarsa → FAIL:
   "V2 truth'u İlyas-cinayet bağını yasaklıyor ama 'X' clue'su açıyor."
```

---

### Kural 5 — Belirsizlik Denetimi  *(Ceyda koruması)*

**Ne denetler:** `KANON.belirsiz` listesindeki konuların (ör. `ceyda_pay`,
`kaya_biliyordu`) tek yönlü kesin bir hükme bağlanmadığını.

**Geçme koşulu:** Belirsiz bir konuyla ilgili her olgu/metin, **çift-okunuş** taşır
(hem "soğuk hesap" hem "korkan mağdur" gibi iki yorumu birden barındırır) veya en azından
tek yönlü kesin bir yargı **cümlesi kurmaz.**

**Patlama koşulu (uyarı):** Belirsiz bir konuda "kesinlikle / açıkça / hiç şüphesiz X'tir"
gibi tek yönlü bir hüküm cümlesi tespit edilirse → **WARN** (sert FAIL değil; çünkü dil
tespiti kusursuz değil, ama yazarı uyarır).

**İstisna:** `kaya_biliyordu` finalde (V6) **çözülür** — "bilmiyordu" kesinleşir. Bu yüzden
Kural 5, `kaya_biliyordu` için yalnızca **V6 dışındaki** vakalarda geçerlidir. V6'da bu
konunun kesinleşmesi beklenen davranıştır, WARN üretmez.
(`ceyda_pay` ise V6 dahil **hiçbir yerde** çözülmez — orada kesinleşme WARN üretir.)

---

## 3. Doğrulayıcının çıktısı

```
PARAVAN DOĞRULAYICI v1
──────────────────────
Kural 1 (Sözlük):        PASS
Kural 2 (Erişilebilirlik):PASS
Kural 3 (Döngü):          PASS
Kural 4 (Truth uyumu):    PASS
Kural 5 (Belirsizlik):    1 UYARI
  ⚠ V5/ceyda_derin: "asıl akıl oydu" cümlesi tek yönlü olabilir — çift-okunuş ekleyin.
──────────────────────
SONUÇ: PASS (1 uyarı) — oyun paketlenebilir.
```

- **FAIL** varsa: sonuç `BLOCKED`, oyun paketlenmez, hangi vaka/clue/kural olduğu yazılır.
- **Yalnız WARN** varsa: sonuç `PASS (n uyarı)`, oyun paketlenir ama yazar uyarılır.
- Hepsi temizse: `PASS` .

---

## 4. Ne zaman çalışır

- Her oyun değişikliğinden sonra, `node --check`'ten **önce**.
- Görseller/ses gömülmeden önce (metin ve mantık dondurulurken).
- İdeal olarak tek komut: `node dogrulayici.js` → yukarıdaki raporu basar.

---

## 5. Kapsam DIŞI (dürüst sınırlar)

Doğrulayıcı şunları yakalamaz — bunlar insan kontrolünde kalır:
- **Anlatısal tutarlılık:** İki cümlenin *mantıken* çelişmesi (ör. bir yerde "sabah",
  başka yerde "gece") — doğrulayıcı olgu-anahtarı düzeyinde bakar, üslup/zaman düzeyinde
  değil. Bunun için ayrı bir "kanon dosyası" tek gerçek kaynağı olarak tutulur.
- **Ton/kalite:** Bir metnin sıkıcı, düz veya duygusuz olması. (Bu tasarım işi.)
- **Denge:** Bir kararın çok kolay/zor, bir ödülün çok cömert olması.

Bu sınırlar, doğrulayıcının **çelişki** (yapısal) ile **kalite** (yazınsal) sorunlarını
ayırdığını gösterir: makine birincisini garanti eder, ikincisi bizde kalır.

---

## 6. Özet

Beş kural bir arada, çelişkiyi **yazılabilir ama teslim edilemez** kılar:
Kural 1 serbest ismi, Kural 2 ulaşılamaz bilgiyi, Kural 3 kısır döngüyü, Kural 4 cetvele
aykırılığı, Kural 5 belirsizliğin çözülmesini yakalar. Nurcan hatası artık kapıda durur —
oyunun içine sızamaz.
