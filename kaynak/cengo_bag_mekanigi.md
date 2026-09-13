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
