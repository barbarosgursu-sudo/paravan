# İstem kalıpları — onaylı tarz (6 Kasım 2026, sahibinin onayı)

`istemleri hazırla <N>` her vakada bu kalıplarla yazılır. Amaç: eski resimlerin (Vaka 1–2 ve eski Vaka 3) tarzını ve
kalitesini tutturmak. Bu kalıplar Vaka 3'te iki kez yanlış kurulup düzeltildi; neyin neden böyle olduğu en altta.
**Yeni istem yazarken bu dosyayı ve onaylı örnekleri aç; ezberden yazma.**

Onaylı örnekler (bu kalıplarla üretilip onaylandı):
- Peri temeli: `v3/prompts/G1.md` → `v3/onayli/G1.png`
- Mekânlar: `v3/prompts/G10.md`, `G11`, `G15`–`G18` → `v3/onayli/`
- Yeni karakter: `v3/prompts/G7.md` (Ferruh) — eski Vaka 3'te aynı kalıp onaylandı (`v3_eski/prompts/G6–G14`)

---

## 1. Tarz paragrafı — NEREYE yazılır, nereye YAZILMAZ

Metin (değiştirme, aynen kopyala):

> Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, ama fotoğraf değil:
> belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. Animasyon filmi afişi ile modern
> çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.

| istem türü | tarz paragrafı |
|---|---|
| Peri ve Cengo temeli (yeni kıyafet) | **YOK** — tarzı boyalı referanslar taşır |
| Her karakterin ifade/varyant istemleri (onaylı temelden) | **YOK** |
| Yeni karakter temeli | VAR + sonda tarz örneği cümlesi (§3) |
| Arka plan, detay, ara kare, kart afişi | VAR |

Paragraf tek başına "çizgi roman" der; boyalı referans yoksa resim karikatüre kayar (kalın kontur, düz boya).
Karakter istemlerinde onu dengeleyen tek şey boyalı referanstır.

## 2. Peri / Cengo temeli (yeni kıyafet)

Referanslar (sırayla), hepsi dekoltesiz:
1. yüz: `../referanslar/peri_bas.jpg` ya da `../referanslar/C1_cengo_yuz.jpg`
2. beden/ölçek: `../referanslar/tarz_govde_kadin.jpg` ya da `../referanslar/cengo_beden.jpg`
3. tarz örneği: `../referanslar/tarz_ornek_kadin.jpg` ya da `../referanslar/tarz_ornek_erkek.jpg`

İstem sırası: `Birinci referans görseldeki … AYNISI` → kıyafet (her ayrıntı, dekolte dahil) → `Poz: TAM İKİ KOL, İKİ EL.`
+ her elin işi → bakış satırı (H3) → ifade → kadraj + zemin satırı (§6) → çıplaklık satırı → **tarz örneği cümlesi (§3)**
→ yazı yasağı → oran.

**Saç:** Peri ve Cengo'nun saçı dağınık kalır (sahibi, 6 Kasım). "Saç toplu" satırı onlara yazılmaz; kesimde kalan
hale gömmede temizlenir (`5_gorsel_sistemi.md` → F).

## 3. Tarz örneği cümlesi (temel ve yeni karakterde, en sonda, yazı yasağından önce)

> Son referans YALNIZ bitmiş çizim tarzı örneğidir: boya dokusu, ince kontur, yumuşak gölgeler, yüz çiziminin
> gerçekçiliği, renkler ve ölçek onun gibi olsun. Oradaki kişinin yüzünü, saçını, kıyafetini ve pozunu ALMA.
> Karikatür değil: doğal yüz oranları, abartısız ifade.

Tarz örneği dosyası referans listesinde SON sırada. `tarz_ornek_kadin.jpg` (eski Nadide) ve `tarz_ornek_erkek.jpg`
(eski Kenan) dekoltesiz, boyalı; yeni karakterin kendi temeli onaylanınca o karakterin varyantlarında gerekmez.

## 4. Yeni karakter temeli

Referanslar: 1. `tarz_govde_<kadin|erkek|iri_erkek>.jpg` (başı silik), 2. `tarz_ornek_<kadin|erkek>.jpg`.
İstem: tarz paragrafı → "Referans görsel YALNIZ çizim tarzı, renk, ölçek ve kadraj içindir. Başı bilerek silindi…
Bu yepyeni, kimseye benzemeyen bir kişi." → karakter (yaş, boy, yüz, saç, ayırıcı özellik; benzeyebileceği kişiye
"X'e benzemiyor") → kıyafet → poz → bakış → ifade → (saç toplu satırı, yan karakterde) → kadraj + zemin → çıplaklık →
§3 cümlesi → yazı yasağı → oran.

## 5. Varyant (aynı karakter, başka ifade)

Referanslar: 1. `onayli/G<temel>.png` (dekolteliyse baş kırpığı + kapalı gövde), gerekiyorsa 2. poz (`poz_cengo_*`,
"YALNIZ poz"). Tarz paragrafı YOK, §3 YOK. İstem: "Birinci referans görseldeki X'in AYNISI: aynı yüz, saç, kıyafet ve
takılar; aynı çizim tarzı, aynı düz <renk> arka plan, aynı ölçek ve kadraj. Değişen yalnız poz ve ifade." → poz → bakış →
ifade → kadraj + zemin → çıplaklık → yazı yasağı → oran.

## 6. Figür zemin satırı

> Kadraj: DİKEY 4:5. Tek kişi, ayakta, kadrajın ortasında. Uyluk ortasından yukarısı; başın tepesinin üstünde ince bir
> boşluk. Arka plan: düz, tek renk <açık bej | orta yeşil | gri-mavi>; gölgesiz, dokusuz, lekesiz, renk geçişi yok
> (bilgisayarda doldurulmuş tek renk gibi); hiçbir nesne yok.

"dokusuz, lekesiz" şart: bir denemede zemin tuval dokulu, lekeli çıktı ve kesim tutmazdı.

**Zemin rengi (Vaka 4'ten itibaren):** `5_gorsel_sistemi.md` → H4. Kızıl/bal/açık saçlı karakter (Peri, Gizem) ve
beyaz/krem giyen → gri-mavi; koyu saçlı → açık bej. Yeşil kullanılmaz. Yeni temelde iki zeminle deneme yapılır.

## 7. Arka plan (mekân)

Referans: `../referanslar/tarz_mekan_ic.jpg` ya da `tarz_sokak.jpg` — **"yalnız çizim tarzı ve ışık"**. Işığı yasaklama:
eski mekânların altın saat ışığı, gün batımı ve denizi bu referanstan geliyor; "gün batımını alma, ışık gündüz" yazınca
mekân düz ve sıradan çıktı (sahibi fark etti). İstemde saat "sabah" yazılır, ışık referanstan gelir.
İstem: tarz paragrafı → `Mekân: …` ZENGİN ve somut (malzeme, renk, lamba, çini, pencereden ne görünüyor; İstanbul) →
yasak nesneler adıyla → "İnsan yok; kadraj boş bir sahne gibi, figürler sonradan önüne konacak (ortası açık)." →
yazı yasağı → `Görselin oranı TAM 3:4, dikey (1086×1448).`
Duvardaki portre/afiş: duygu abartısız ("zarif, abartısız bir gülümseme"); "göz kamaştırıcı gülümseme" karikatür sırıtış verdi.

## 8. Ara kare, detay, kart afişi

Tarz paragrafı VAR. Mekân ve kişiler onaylı resimlerden (`onayli/G<n>.png`) referans verilir; tarzı onlar taşır.
Kalabalıkta "Kadrajda TAM n kişi", her kişiye referans numarası ve kıyafet özeti, Peri varsa "en gösterişli kadın" satırı,
her elin işi. Kurallar: `CLAUDE.md` → Vaka 3 dersleri tablosu.

## 9. Çekicilik ve dekolte — "dünkü ayarlar" (sahibi, 6 Kasım: "bütün resimleri dünkü ayarlarla")

Peri her resimde en seksi kadın; dekolte istenir. Filtreden geçen düzen (5 Kasım Codex denemesi, G2):
- **Peri'nin her isteminde:** `Çekicilik: en üst seviyede zarif ve seksi; belin inceliği ve bacakların hattı belirgin.
  Çıplaklık yok.` Felaket/komedi hâlinde: `Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da
  aşağılanma yok.`
- **"Kumaş kalın ve mat, altından vücut ayrıntısı belirmiyor" satırı Peri'ye YAZILMAZ** — dekolteyi ve seksiliği bastırdı.
  Yalnız Gizem'in dar beyaz tişörtünde kalır (meme ucu izi dersi), Gizem'de ayrıca kollar göğsü örter.
- **Dekolteli kıyafette referans = baş kırpığı + `tarz_govde_kadin.jpg`**, bütün figür değil (`v3/referanslar/peri_*_bas.png`).
- **Islaklık yalnız üst giyside:** "trençkot pekmezle ıslak; TENİ KENDİ RENGİNDE, yalnız dekoltesinde birkaç damla".
  "Elbise de ıslak, vücuda yapışık" yazınca iki çağrı da engellendi (sexual, output).
- **Fiziksel komedi karesinde:** `Sahne aile dostu bir fiziksel komedi anıdır; kamera göz hizasında, alttan açı yok;
  müstehcen değil.` (eski G55, G56 bununla geçti).
- Örnek: `v3/prompts/G2.md` → `v3/onayli/G2.png` (sahibinin "daha iyi" dediği hâl).

---

## Neden (Vaka 3, 6 Kasım 2026)

1. İlk istemler `5_gorsel_sistemi.md` H6'daki "her istemde tarz paragrafı" satırına göre yazıldı → Peri ve Cengo
   karikatür gibi çıktı. Eski istemlerle karşılaştırınca: eski Peri/Cengo/varyant istemlerinde paragraf hiç yoktu,
   yeni karakterlerde ise paragrafı dengeleyen §3 cümlesi vardı. H6 düzeltildi.
2. "Yağlıboya" gibi bir tarz sözü eklemek zemine tuval dokusu getirdi. Tarzı kelimeyle değil referansla taşı.
3. Mekânlarda ışığı yasaklamak eski havayı öldürdü.
4. Ders: **yeni istemi yazmadan önce eski onaylı istemlerle (`v3_eski/prompts/`, bu dosyadaki örnekler) yan yana karşılaştır.**
