# YENİ OYUN — GÖRSEL PROMPTLARI

*Yeni oyunun görsel siparişleri. Eski oyununkiler `gorsel_promptlari.md` ve
`gorsel_promptlari_2.md`'de; o belgelerdeki dersler (nesneleri tek tek say, yazı
taşıyan yüzü kapat, yönü burun-kulak geometrisiyle ver, "görünmesin" deme) burada da
geçerli.*

---

# DENEME 1 — PERİ, TARZ DENEMESİ (4 Ekim 2026)

**Amaç:** iki soruyu cevaplamak.
1. **Yarı gerçekçi illüstrasyon** tarzı oyuna yakışıyor mu?
2. Üretici **aynı yüzü** ikinci bir ifadede tutturabiliyor mu? Konuşma ekranı
   karakter başına 4-5 ifade istiyor; bu tutmazsa sprite modeli çöker.

Bu yüzden deneme **iki görsel**: önce referans (A), sonra A'yı referans vererek
aynı kadın, başka ifade (B). Yalnız A'yı üretmek ikinci soruyu cevaplamaz.

**Yaş (sahibinin kararı, 4 Ekim 2026):** Peri **37**, Cengo **34**. Eski oyunda 49
ve 38'di.

---

## A — Referans: Peri, nötr

```
Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek
insan oranları, ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak
boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern çizgi
roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.

Karakter: Perihan "Peri" Aksoy, 37 yaşında, bir zamanlar güzellik kraliçesi
olmuş, hâlâ çok çekici ve bunun farkında bir kadın. Dik duruş, çenesi
hafif yukarıda. Kumral-kızıl saçları özenle topuz yapılmış, yüzünün iki yanına
birer tutam düşüyor. Ela gözler, belirgin kaşlar, kırmızı ruj. Gözlerinin
kenarında hafif gülme çizgileri; genç kız değil, olgun ve kendinden emin bir kadın.

Kıyafet: tek bir pahalı parça eski günlerden kalmış: diz boyu, beli kemerli,
domates kırmızısı yün bir manto. Altında krem rengi ipek bluz. Kulaklarında
küçük altın küpeler. Başka takı yok.

İfade: hafif kendinden emin, dudakları kapalı, belli belirsiz bir gülümseme.
Kameraya bakıyor.

Kadraj: DİKEY. Dizlerinden yukarısı, tek başına, ayakta. Gövdesi hafif yana
dönük, burnu kadrajın soluna bakıyor, ama gözleri kameraya dönük. İki eli de
görünüyor: biri mantonun yakasında, öteki belinde.

Arka plan: düz, tek renk açık bej. Hiçbir nesne, hiçbir mekân yok. (Karakter
sonradan sahnelerin önüne yerleştirilecek.)

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

## B — Aynı kadın, kaş kaldırmış

**A'yı referans görsel olarak ver** (üretici izin veriyorsa "karakter referansı"
ya da "görselden üret" seçeneğiyle). Metin:

```
Referans görseldeki kadının AYNISI: aynı yüz, aynı saç, aynı kırmızı manto, aynı
krem bluz, aynı altın küpeler, aynı çizim tarzı, aynı düz açık bej arka plan,
aynı kadraj (dizlerden yukarısı, dikey).

Değişen tek şey ifade ve kollar: tek kaşı belirgin biçimde yukarıda (kadrajın
sağ tarafında kalan kaş), öteki kaşı yerinde. Dudakları hafif büzülmüş, "Ciddi misin?" der gibi şüpheli bir bakış.
Kollarını göğsünde kavuşturmuş. Burnu yine kadrajın soluna bakıyor, gözleri
kameraya dönük.

Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın.
```

---

## Geldiğinde bakılacaklar

| | soru |
|---|---|
| **Tarz** | Fotoğrafa ya da animeye kaymış mı? Komik bir ifade bu tarzda doğal duruyor mu? |
| **Tutarlılık (asıl test)** | A ile B yan yana: aynı kadın mı? Yüz şekli, saç rengi ve topuz, mantonun rengi ve kesimi, küpeler. **Bir tanesi bile farklıysa** not edilir. |
| **Yaş** | Otuzlarının sonunda mı duruyor? Üretici yirmilerine gençleştirmiş ya da kırklarına yaşlandırmış mı? |
| **Yazı taraması** | Büyütüp bak: düğmede, kemer tokasında, küpede harf ya da logo var mı? |
| **Arka plan** | Gerçekten düz mü? Taslağa koyunca karakter kesilip sahnenin önüne yerleştirilecek. |

Sonuç ne olursa olsun buraya yazılır: tuttuysa bu metin bütün karakterlerin
şablonu olur; tutmadıysa neyin kaydığı bir sonraki denemenin girdisidir.

## Sonuç — 4 Ekim 2026

İki görsel geldi; 900 px WebP q80 olarak `kaynak/yeni_gorsel/deneme_peri_a.webp`
ve `deneme_peri_b.webp`'de duruyor (referans olarak, oyuna gömülmedi).

| | sonuç |
|---|---|
| **Tutarlılık (asıl test)** | **Tuttu.** Yüz, saç ve topuz, manto (renk, yaka, kuşak, cep kapağı), bluz, küpe, arka plan, kadraj — A ile B'de aynı. Sprite modeli bu üreticiyle çalışabilir. |
| **İfade** | Kısmen. B'de şüpheli, yarım ağızlı bir bakış var ve okunuyor; ama tek kaş belirgin biçimde kalkmamış, iki kaş da hafif çatık. "Kaş kaldırma" gibi abartılı ifadeler için prompt daha sert olmalı. |
| **Tarz** | **Gerçekçiye kaymış.** Boyalı ama fotoğrafa yakın: ten dokusu ayrıntılı, kontur çizgisi neredeyse yok. İstenen "belirgin kontur, animasyon afişi" tutmadı. |
| **Yaş** | Otuzlarının sonu–kırklarının başı arası okunuyor; kabul edilebilir, sınırda. |
| **Yazı taraması** | Temiz: düğmede, küpede, kuşakta harf/logo yok. |
| **Arka plan** | Düz bej, nesne yok. Kesip sahneye koymaya uygun. |
| **Kadraj** | Diz yerine uyluk ortasından kesilmiş. Sprite için sorun değil. |
| **Göğüs dekoltesi** | Derin. Geniş kitle hedefinde mağaza yaş sınıflandırmasını etkileyebilir; bir düğme daha kapalı istenebilir — sahibinin kararı. |

**Açık karar (sahibi):** bu tarzda mı kalınacak, yoksa daha çizgisel bir tarz
için ikinci deneme mi yapılacak?
