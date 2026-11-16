# Paravan Dedektiflik — V3 metin incelemesi

Ekteki `V3_okuma.txt`, **üçüncü vakanın** tam metin dökümü. V1 ve V2'yi
incelemiştin. Format ve sözleşmeler aynı; altta tekrar var.

---

## V2 turunun sonucu

**Beş bulgun uygulandı, yanlış bulgun olmadı.** Geçen turdan belirgin sıçrama.

| bulgu | ne yapıldı |
|---|---|
| `kuru_rapor` defter/Cengo çelişkisi | Alıntı kaldırıldı, cümle Peri'nin kendi sesine geçti |
| `vedat_yuz` üç katmanda niyet okuyordu | Üçü de gözleme çekildi |
| `aldatmiyor_kesin` fazla kesin | "Takipte aldatmaya dair bir iz çıkmadı." |
| `vedat_mali` "metresin değil" | Dışlama kaldırıldı |
| `kuru_rapor` yüksek bağ: "ne sordu?" | Soru eklendi |

`kuru_rapor` çelişkisi **en değerli bulgundu**: denetim aracımız onu kaçırıyordu,
senin raporundan sonra araca yeni bir denetim eklendi ("ekranda susuyor ama
defterde konuşuyor").

**`vedat_yuz` tuzağı ise bilerekmiş.** Bedelsiz yapmayı denedik ve bir test
kırıldı; o test vakanın tasarımını yazıyor: *"gerçek seçim: tam gerçek (güç) vs
Vedat'a acıma (empati). İkisi birden değil."* Mekanik geri alındı. Ama haklı
kaldığın nokta duruyordu — oyuncu bedeli harcadıktan sonra öğreniyordu. Etiket
düzeltildi: `Vedat'ın hâli (opsiyonel)` → `(araştırma harcar, gerçeği açmaz)`.

Ders: **bir şey tuhaf görünüyorsa tuhaflığın kasıtlı olma ihtimalini de yaz.**
"Şu sebeple yanlış, ama şu sebeple kasıtlı olabilir" demen bize vakit kazandırır.

---

## Oyuncunun elinde ne var

- **V1:** Kaya merdivenden düşüp öldü. Belki kaza değildi. **Kimin ittiği
  açılmadı.** Cavit adında bir avukat var.
- **V2:** Nesrin'in kocası Vedat aldatmıyordu; kaçak kardeşinin borcunu ödüyordu.
  Parayı kapıda **İlyas adında yorgun bir tahsildara** veriyordu. *(Oyuncu bu
  ipucunu açmamış da olabilir — V2'de 4 hak vardı ve tam zincir dördünü
  istiyordu.)*
- V1 ve V2'deki kararlar bayrak bıraktı; V3'ün giriş metni **V1'deki karara göre
  değişiyor.** Vakalar arası hafızayı ilk kez burada göreceksin.

---

## Format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan metin |
| `✦ BEDELSİZ` | araştırma hakkı harcatmaz *(V3'te üç tane var)* |
| `{"seed":"ilk_karar","esit":"reddetti"}` | önceki vakada verilen karar |
| `[{"cengoBag_en_az":3}]` | Cengo satırı: bağ en az 3 ise bu varyant |
| `↳` | meta — Peri'nin o an yaptığı çıkarım |

**Varyant sırası:** motor listedeki İLK tutan varyantı basar.

---

## ⚠ Dökümde olan, oyuncunun görmediği

**YAZARIN GERÇEĞİ** bloğu ve **ruh hâli** sınıflaması. Sızıntı diye raporlama.

---

## Sözleşmeler

**1 · Nurcan kuralı.** Hiçbir metin, oyuncunun hak etmediği bilgiyi sızdıramaz.
En tehlikeli yer **varsayılan varyantlar**.

**2 · Oyun not vermez.** Kalıp: **eylem → sonuç → bedel.** Hüküm cümlesi yasak.
Nitelik+bedel yapısı ("En tehlikeli, en güçlü yol") hüküm değil — dünyanın
tepkisi, serbest.

**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.**

**4 · Kaybetme yok.**

**5 · Metin SABİT finansal durum iddia edemez** ("borç kapandı", "kasam boş").
Olay bildiren cümleler serbest ("para geldi", "para kesildi").

**6 · Cengo satırı:** kararın **ÖNCESİNDEKİ** bağa bakar; **sıcaklık onay
değildir** — bağ güçlendikçe kirli kararlar daha çok acıtır.

---

## V3 hakkında bilmen gerekenler

**Bu vaka maskenin düştüğü yer — ama yalnız bir maskenin.**

- **İlyas AÇILIYOR** ve açılması gerekiyor. V2'deki "sızmasın" kaygısının tersi:
  burada oyuncu tarifi alıyor, ismi buluyor, fotoğrafla teşhis ettiriyor. Zincir
  görünür ve hak edilmiş olmalı.
- **CAVİT AÇILMIYOR.** Yazarın gerçeği: `sikistiran: Cavit — BU VAKADA AÇILMAZ`.
  Oyuncunun varabileceği en uzak nokta `el_var` çıkarımı: *"arkasında onu süren
  biri var"* — **yüzü yok.** Senin en önemli kontrolün bu: **herhangi bir cümle
  o eli Cavit'e bağlıyor mu?** Giriş metni Cavit'i tedirgin gösteriyor, bu
  kasıtlı bir şüphe; ama "tedirgin avukat" ile "azmettiren" arasındaki çizgi
  aşılmamalı.
- **`ilyas_supde` çıkarımının adında "ilyas" geçiyor ama başlığında geçmiyor** —
  bu bilerek. O çıkarım yalnız tarife dayanıyor (yara + topallama), isme değil.
  Başlıkta isim geçseydi sızıntı olurdu. Kimliğe bakıp "tutarsız" deme.
- **Kanon eklemesi, kasıtlı:** `cengo_okuma`'daki *"İlyas o mahallede çalışmaz —
  orada bir kuruş alacağı yok"* cümlesi sonradan eklendi, çünkü `el_var`
  çıkarımı eskiden **yokluktan** doğuyordu ("sebebi yok"). Artık pozitif kanıttan
  doğuyor. Bunu gereksiz bulursan söyle, ama sebebini bil.
- **Bilinen ve kabul edilmiş uyarı:** V3'te oyuncu hiçbir noktada iki kaynak
  arasında seçmek zorunda kalmıyor — 6 ipucunun 3'ü bedelsiz, 4 hak hepsine
  yetiyor. Yani **araştırmamanın bedeli yok.** Keşif diye raporlama, ama
  yargını söyle: bu vakada gerilimin başka yerden gelmesi yeterli mi?

---

## Bakmanı istediklerim

Önem sırasına koy. Her bulgu için **hangi cümle, ne yanlış, ne bekliyordum**.
Düzeltme önermeden önce mevcut cümleyi bir daha oku.

**1 · Cavit sızıyor mu?** En kritik soru. Giriş metinleri, `cavit_brief`
ipucu ve metası, `el_var` başlığı, karar sonuçları — hiçbiri o eli
adlandırmamalı, ima yoluyla bile.

**2 · İlyas'ın teşhisi hak edilmiş mi?** Zincir şu: tarif (yara+topal) →
Cengo bir isim söylüyor → fotoğraf → tanık onaylıyor.
**Özellikle ortadaki adıma bak:** `mahalle_don`'un varsayılan varyantında
Cengo, oyuncu İlyas'ı hiç görmemişken *"bu İlyas olabilir"* diyor. Yara ve
topallama tarifinden bir isme atlamak fazla mı kolay? (Cengo'nun kanonu
"sokağı bilen adam" — ama bu yeterli gerekçe mi?)

**3 · Sızıntı, genel.** Varsayılanlar, metalar, çıkarım başlıkları.

**4 · `tanigi_lekele`.** Oyunun en kirli kararı: kapısı yok, 85.000 ₺, bağ −2.
Üç sonuç varyantı oyuncunun ne kadar bildiğine göre ayrışıyor
(`iten_ilyas` / `itis_kesin` / varsayılan). Bu ayrışma doğru mu — az bilenle
çok bilen aynı suçu işlemiyor, metin bunu adil ayırıyor mu?

**5 · Cengo'nun üç kademesi.** `tanigi_lekele`'de var. En sıcak varyant
*"En çok da sen yaptığın için"*, en soğuk *"Etmesi için önce bir şey beklemesi
gerekirdi."* "Sıcaklık onay değildir" kuralı tutuyor mu?

**6 · Dört karar.** 0 / 40.000 / 70.000 / 85.000 ₺ ve +2 / +1 / −1 / −2. Para
ile vicdan düzgün ters orantılı — fazla mı düzgün? Oyuncu hesap yapıp
"en pahalısı en kirlisi" diye okuyabilir mi, yoksa tercih hâlâ zor mu?

**7 · Proza.** Ayrı liste.

**8 · İyi çalışan ne?**

---

## Son not

İddiayı **dosyadan alıntıla.** Emin değilsen "şüpheleniyorum" de. Bir şey tuhaf
görünüyorsa kasıtlı olma ihtimalini de yaz.

Bulamazsan bulamadığını söyle. Uydurma bulgu, bulgu yokluğundan kötüdür.
