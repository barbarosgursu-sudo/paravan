# Paravan Dedektiflik — Peri & Cengo Yakınlaşma Mekaniği (`cengoBag`) v1

> Flört **kazanılır, verilmez.** Ani değil, kararlarla yavaşça birikir — ve düşebilir.
> Cengo'nun Peri'ye yakınlığı, Peri'nin nasıl bir insan olduğuna verdiği tepkidir:
> para/soğukluk seçenden uzaklaşır, vicdan/cesaret/insanlık seçene yaklaşır.
> **Hep belli belirsiz kalır — söze dökülmez.** Bu bir romantik komedi değil; hüzünlü,
> tekinsiz bir oyun. Bir jest, bir suskunluk, bir "kal" diyememe.

---

## 1. Sayaç

`cengoBag` — 0'dan başlar, negatife de düşebilir. **Oyuncuya görünmez** (bar/sayı yok).
Oyuncu Cengo'nun tavrının değiştiğini *hisseder*, bir göstergenin dolduğunu görmez.

---

## 2. Eşikler (arka planda, dört durum)

| Durum | Aralık | Cengo'nun hâli |
|---|---|---|
| **Mesafeli** | ≤ −2 | Profesyonel, mesafeli. "Abla" demez olur; seni "patron" görür. |
| **Yoldaş** | −1 … +2 | Varsayılan. Hınzır, laubali, "Peri abla"lı. İş arkadaşı sıcaklığı. |
| **Yakın** | +3 … +5 | Aralarında belli belirsiz bir şey. Bakış, yarım cümle, tehlikede yaslanma. |
| **Bağlı** | ≥ +6 | Söze dökülmese de ikisi de biliyor. Nadir ve hak edilmiş. |

---

## 3. Besleme tablosu — Omurga vakaları

| Vaka | Karar | Puan | Neden |
|---|---|---|---|
| V1 | temiz_rapor | −1 | şüpheyi parayla gömmek |
| V1 | soyle_cavit | 0 | dürüst ama saf |
| V1 | gizli_kaz | +1 | Cengo kurnazlığı sever |
| V1 | reddet | +1 | omurga/duruş |
| V2 | hersey_soyle | 0 | dürüst ama yıkıcı, Cengo bölünür |
| V2 | aldatmiyor_de | +1 | küçük adamı koruma |
| V2 | yalan_kur | −1 | ilk müşteri yalanı, Cengo tedirgin |
| V2 | kuru_rapor | −1 | "insanla mı uğraşıyoruz kağıtla mı" |
| V3 | polise_ver | +2 | cesur, doğru olan |
| V3 | koz_yap | +1 | kurnaz, gri |
| V3 | cavite_teslim | −1 | katili patrona teslim |
| V3 | tanigi_lekele | −2 | **ilk ciddi çatlak** |
| V4 | aileye_soyle | +2 | dürüst + şefkatli |
| V4 | sessiz_coz | +2 | **en güçlü yakınlaşma anı** |
| V4 | kimligi_sakla | +1 | merhametli sessizlik |
| V4 | koz_yap | −2 | ölü adamın iyiliğini koz yapmak, Cengo iğrenir |
| V5 | cavite_vur | +1 | cesaret |
| V5 | kanit_biriktir | +1 | cesaret + kurnazlık |
| V5 | ceydaya_git | 0 | gri, riskli satranç |
| V5 | oyunu_surdur | −1 | suç ortağı kalmak |

---

## 4. Besleme — Yan vakalar (2 tane, opsiyonel)

Kesin puanlar yan vakalar tasarlanınca dolar; kalıp sabit:

| Eylem | Puan |
|---|---|
| Yan vakayı **almak** | +1 (ana işten fedakârlık, insani seçim) |
| İçindeki **vicdanlı karar** | +1 / +2 |
| **Soğuk çözmek** | 0 / −1 |
| **Almamak** | 0 (fırsat kaçtı — soğukluk dolaylı birikir) |

> "Bağlı" (+6) eşiğine ulaşmanın anahtarı yan vakalardır: omurgayı hep vicdanlı oynayıp
> yan vakaları da alan oyuncu +6'ya varır; sadece omurgayı iyi oynayan "Yakın"da kalır.
> Bu bilinçli bir denge — en derin bağ, hem ana hikâyede iyi olmayı hem de küçük insani
> molalara zaman ayırmayı ödüllendirir.

---

## 5. Küçük an bonusları (sahne içi, opsiyonel)

Belli sahnelerde minik +1'ler: Cengo'ya hak vermek, onu dinlemek, tehlikede yanında durmak.
Sayaca serpiştirilmiş dokunuşlar; abartılmaz.

---

## 6. Final istisnaları (V6) — flörtü kıran ve mühürleyen son dokunuş

V6'nın kendi final kararı normalde sayacı beslemez (bar o an kilitli), ama **iki simetrik
istisna** var:

- **KIRAR:** Finalde canavarca bir seçim (herkesi yaktın, çocuğun ailesi dahil masumlar da
  battı) → en yüksek eşikten bile **bir kademe düşürür.** "Cengo bunu kaldıramaz."
  Sayacı gerçek bir vicdan göstergesi yapan şey budur; yoksa "toplayan kazanır" ucuzluğu olur.
- **MÜHÜRLER:** Finalde en zor ama en doğru olanı yaptıysan (kendi çıkarını feda edip
  adaleti seçtin, ajans batsa bile) ve o ana kadar **"Yakın"** eşiğindeysen → seni
  **"Bağlı"ya** taşıyabilir.

Yani final, flörtü hem kırabilen hem mühürleyebilen son bir eksen.

---

## 7. Finale okuma — V6 Cengo satırı

`cengoBag` (V5 + yan vakalar sonunda, sonra V6 istisnasıyla) kilitlenir ve final ekranında
okunur:

| Eşik | Final ekranı Cengo satırı |
|---|---|
| Mesafeli | Çekip gitti. |
| Yoldaş | Mesleki bir veda; yolları ayrıldı. |
| Yakın | Yanında kaldı — aranızda bir şey asılı, söze dökülmemiş. |
| Bağlı | Karanlığın ortasında sana kalan tek insan oldu. |

Bu, ana kararlardan **bağımsız ama onlarla örülü** bir ikinci final eksenidir.

---

## 8. Tasarım ilkeleri (özet)

1. **Görünmez sayaç** — his üstüne kurulu, mekanik üstüne değil.
2. **Söze dökülmez** — hep belli belirsiz; açık aşk ilanı yok.
3. **Küçük adımlar** (±1/±2) — yavaş, inandırıcı birikim.
4. **Kırılabilir** — negatife düşebilir; kirli kararlar uzaklaştırır.
5. **Nadir zirve** — "Bağlı" (+6) tutarlı insani/cesur oyun ister; yan vakalar anahtarı.
6. **Final mühürler ya da kırar** — simetrik son dokunuş.

---

## 9. Uygulamanın bugünkü hâli (20 Eylül 2026) — iki sapma, biri kapatıldı

Sahibi "ilişki fazla basit bir tonda duruyor" deyince mekanik ölçüldü. İki sapma çıktı:

**1. Sayaç görünmez değil.** §1 "oyuncuya görünmez (bar/sayı yok)... oyuncu tavrın
değiştiğini HİSSEDER, bir göstergenin dolduğunu GÖRMEZ" diyor. Ama ekranda üç yerde
5 alevlik bir ölçek + kelime etiketi ("Cengo ile aran / Yoldaş") duruyor. İlke tersine
dönmüş: oyuncu göstergeyi görüyor, değişimi hissetmiyor.
**Sahibinin kararı: gösterge şimdilik kalsın.**

**2. Bağ hiçbir metni değiştirmiyor — asıl boşluk buydu.** Ölçüm:

| | |
|---|---|
| Bağı besleyen karar | 31 / 40 |
| Cengo'nun geçtiği metin yeri | 34 |
| Bunlardan bağa göre değişen | **0** |
| Bağı metin olarak okuyan yer | 1 (yalnız final ekranı) |

Motorda `ifadeCalistir` içinde `cengoBag_en_az` koşulu var — tam bu iş için yazılmış —
ve `game_data.json`'da **sıfır kez** kullanılmış. Yani ilişki her kararda ÖLÇÜLÜYOR,
hiçbir yerde OYNANMIYOR.

**Yapılan:** görsel yol. Dört ikili kare (`CENGO_GORSEL`), `cengoDurum()`'un dört
hâline bağlı, karar sonucu ekranında. Bkz. `gorsel_promptlari_2.md` PAKET 7.

**Yapılmayan, açık duran iş:** Cengo'nun sesinin bağa göre değişmesi. 17 karar
sonucunun 7'si zaten koşullu liste (varyant eklemek yapısal olarak bedava), kalan
10'u listeye çevrilir. "Aynı sahne, farklı sıcaklık" — mesafede "patron", yoldaşta
"Peri abla", bağlıda cümlesini bitirememek. Bu, §2'nin ve §8.1-8.2'nin istediği şeyin
ta kendisi ve tahtadaki en yüksek etkili hamle olarak duruyor.
