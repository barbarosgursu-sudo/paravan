# Paravan Dedektiflik — Doğrulayıcı Sözleşmesi (v1)

> Doğrulayıcının amacı — KOD-53. Kuralların metni `sablon/kurallar/KURALLAR.md`'de (KOD-53…72); bu belge kodları ve
> örnekleri tutar.

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

Doğrulayıcı ne zaman çalışır, ne çıktı verir — KOD-4.

---

## 2. Beş Kural

### Kural 1 — Sözlük Denetimi  *(Nurcan'ın asıl dersi)*

**Ne denetler** — KOD-54.

**Geçme koşulu** — KOD-54.
- `reveals` (KOD-54),
- ya da `needs` (KOD-54).

**Patlama koşulu** — KOD-54 (FAIL).

**Nurcan örneği (bu kuralın doğuş sebebi):**
```
clue "kamera":
  text: "...kadın Nurcan değil..."
  needs: []            ← "Nurcan" burada YOK
  reveals: [...]       ← burada da YOK
→ FAIL: "kamera metni 'Nurcan' diyor ama needs/reveals'te yok."
```
Düzeltme iki yoldan biri — KOD-54 (`needs:["nurcan_suclamasi"]` eklenir ya da isim metinden çıkarılır).

**Doğru örnek (Paravan V3):**
```
clue "cengo_okuma":
  text: "...böyleleri kendi aklıyla adam itmez — biri sırtına bindiyse iter..."
  needs: [iten_ilyas]
  reveals: [ilyas_sebep_yok, el_var]
→ PASS: metinde "Cavit" ismi GEÇMİYOR; sadece "biri" deniyor (el_var, isimsiz).
```

> **Kapsam notu (sonraki tur)** — KOD-54.

---

### Kural 2 — Erişilebilirlik Denetimi  *(ulaşılamaz bilgi / ölü karar)*

**Ne denetler** — KOD-55.

**Geçme koşulu:**
- `knowledge` çıkarımının `gerekli` olguları (KOD-55).
- `decision`'ın `gate`'i (KOD-55).

**Patlama koşulu** — KOD-55 (FAIL, "ulaşılamaz bilgi").

**Örnek:**
```
decision "gizli_kaz": gate: cinayet_suphesi
knowledge: cinayet_suphesi = dusus_acisi VE (ceyda_celiski VEYA komsu_ses)
→ dusus_acisi bir clue tarafından reveals ediliyor mu? ceyda_celiski türeyebiliyor mu?
   Hepsi evetse PASS. Biri bile hiçbir yerde açılmıyorsa FAIL.
```

---

### Kural 3 — Bağımlılık Döngüsü Denetimi

**Ne denetler** — KOD-56.

**Geçme koşulu** — KOD-56 (DAG).

**Patlama koşulu** — KOD-56 (FAIL).

**Not:** açık giriş (`needs:[]`) — KOD-56.

---

### Kural 4 — Truth Uyumu Denetimi

**Ne denetler** — KOD-57.

**Geçme koşulu** — KOD-57.

**Patlama koşulu** — KOD-57 (FAIL).

**Örnek (V2):**
```
truth (V2): ilyas_cinayet = "GİZLİ — bu vakada YOK"
→ V2'de hiçbir clue, İlyas'ı cinayete bağlayan bir olgu reveals edemez.
   Bir clue "ilyas_katil" gibi bir olgu açarsa → FAIL:
   "V2 truth'u İlyas-cinayet bağını yasaklıyor ama 'X' clue'su açıyor."
```

---

### Kural 5 — Belirsizlik Denetimi  *(Ceyda koruması)*

**Ne denetler** — KOD-58 (`KANON.belirsiz`: `ceyda_pay`, `kaya_biliyordu`).

**Geçme koşulu** — KOD-58 (çift okunuş).

**Patlama koşulu (uyarı)** — KOD-58 (WARN).

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

- **FAIL** → `BLOCKED` (KOD-4).
- **Yalnız WARN** → `PASS (n uyarı)` (KOD-4).
- Hepsi temizse: `PASS` (KOD-4).

---

## 4. Ne zaman çalışır

- Her oyun değişikliğinden sonra (KOD-4, KOD-3).
- Görseller/ses gömülmeden önce (KOD-4).
- Komut: `node dogrulayici.js` (yeni oyun: `node dogrulayici.js yeni`) — KOD-4.

---

## 5. Kapsam DIŞI (dürüst sınırlar)

Doğrulayıcının kapsamı dışı (insanda kalır) — KOD-72:
- **Anlatısal tutarlılık** (KOD-72).
- **Ton/kalite** (KOD-72).
- **Denge** (KOD-72).

Bu sınırlar, doğrulayıcının **çelişki** (yapısal) ile **kalite** (yazınsal) sorunlarını
ayırdığını gösterir: makine birincisini garanti eder, ikincisi bizde kalır.

---

## 6. Özet

Beş kural bir arada, çelişkiyi **yazılabilir ama teslim edilemez** kılar:
Kural 1 serbest ismi, Kural 2 ulaşılamaz bilgiyi, Kural 3 kısır döngüyü, Kural 4 cetvele
aykırılığı, Kural 5 belirsizliğin çözülmesini yakalar. Nurcan hatası artık kapıda durur —
oyunun içine sızamaz.

---

## 7. Sonradan eklenen kurallar

Sözleşme beş kuralla yazıldı; uygulama sırasında altı kural daha eklendi (K6 bütçe,
K7 seçim baskısı, K8 baskınlık, K9 ölü tohum, K10 olgu sızıntısı, K11 olgu kimliği).
Hepsinin gerekçesi ve şiddeti `arsiv/uretim/OKUBENI.md` → "Doğrulayıcı kuralları" tablosunda.

### Kural 11 — Olgu kimliği (hata)

**Ne denetler** — KOD-63.

**Neden:** Vaka bitince olgular `kaliciOlgular`a taşınıyor; künye katmanları ve koşullu
metinler bu birleşik kümeyi okuyor. Aynı ad iki vakada iki şey anlamına gelirse, birinde
hak edilen bilgi ötekinin kapısını açar — Nurcan kuralının sessiz bir ihlali.

**Patlama koşulu** — KOD-63 (FAIL).
