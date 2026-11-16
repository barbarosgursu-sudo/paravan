# Paravan Dedektiflik — V2 metin incelemesi

Ekteki `V2_okuma.txt`, oyunun **ikinci vakasının tam metin dökümü**. V1'i
incelemiştin; bu onun devamı. Format ve sözleşmeler aynı, altta yeniden
özetliyorum — ama **önce V1 turundan çıkan dört düzeltmeyi oku**, çünkü ikisi
seninle ilgili.

---

## V1 turunun sonucu

**Üç bulgun uygulandı.** Üçü de aynı cinstendi ve teşhisin doğruydu: metin,
elindeki kanıttan fazlasını söylüyordu.

| eski | yeni |
|---|---|
| "Kendi düşen biri böyle yaralanmaz." | "Yaraların açısı sıradan bir düşmeyle uyuşmuyor." |
| "Kaza olsaydı, o ikinci ses yardım çağırırdı." | "İki kişi tartışmış. Sonra gelen sessizliği kimse açıklamıyor." |
| "…evde Kaya'dan başkası yok." | "…Ceyda döndüğünde başka birinden söz etmedi." |

**Üç bulgun geçmedi.** Gerekçeleri, aynı hataya iki kez düşmemen için:

- **`ceyda_celiski` başlığı.** Önerdiğin metin *zaten mevcut metindi*:
  "Ceyda'nın anlattığı saat, duran saatle örtüşmüyor." Seninkiyle aynı iddia.
  Ayrıca `cinayet_suphesi` hiçbir zaman saate tek başına dayanmıyor — ifadesi
  `dusus_acisi VE (ceyda_celiski YA DA komsu_ses)`. Bir düzeltme önermeden
  önce **mevcut cümleyi bir daha oku.**

- **"kasa erir" / "ajans nefes alır".** Bu benim hatamdı: brief'teki finans
  kuralını fazla geniş yazmışım. Doğrusu aşağıda, 5. sözleşmede.

- **"Açılış Peri'yi kurmuyor".** Bu da benim hatamdı — sana **prolog'u
  vermemiştim.** Prolog V1'den önce oynanıyor ve tam onu kuruyor: Peri'nin
  eski şöhreti, avukatının bütün parayı alıp kaçması, *"Kasada kalan son para
  bir ayı zor çıkarır"*, ve Cengo'nun hak ettiğinin yarısını bile almadığı.
  Araç düzeltildi. **V2 dökümünde prolog yok, çünkü artık geride kaldı** —
  ama yukarıdakilerin oyuncunun zihninde olduğunu varsay.

Yanlış çıkan üç bulgunun ikisi benim yüzümdendi. Bu turda o tuzaklar yok.

---

## V1'den sonra oyuncunun elinde ne var

V2'yi buna göre oku. Oyuncu V1'i oynadı ve şunları biliyor olabilir (hepsini
değil, seçtiği rotaya göre):

- Kaya Tuncer merdivenden düşüp öldü; polis kaza dedi.
- Belki: ölüm kaza olmayabilir. **Kimin ittiği V1'de AÇILMADI.**
- Cavit adında bir avukat var; ona bir rapor imzaladı, ya da imzalamadı.
- V1'deki kararı bir bayrak bıraktı (`ilk_karar`, `cavit_guven`) ve ileride
  okunuyor.

V2 **ayrı bir vaka**: cinayetle görünürde ilgisi yok. Bağlantı ileride kuruluyor.

---

## Format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan metin |
| `✦ BEDELSİZ` | bu ipucu araştırma hakkı harcatmaz *(V2'de hiç yok)* |
| `← nesrin_gorusme` | bu olguyu şu ipucu açıyor |
| `↳` | ipucunun altındaki "meta" — Peri'nin o an yaptığı çıkarım |
| `gerekir:` | bir çıkarımın doğması için gereken olgular |
| `[{"cengoBag_en_az":3}]` | Cengo satırı: bağ en az 3 ise bu varyant |

**Varyant sırası:** motor listedeki İLK tutan varyantı basar.

---

## ⚠ Dökümde olan ama OYUNCUNUN ASLA GÖRMEDİĞİ iki şey

Sızıntı diye raporlama:

1. **YAZARIN GERÇEĞİ** bloğu.
2. **ruh hâli: temiz / bedel / boşluk / kirli.** Motorun iç sınıflaması,
   yalnızca atmosfer görseli seçer. Oyuncuya kelime olarak ASLA gösterilmez.

---

## Sözleşmeler

**1 · Nurcan kuralı.** Hiçbir metin, oyuncunun o an hak etmediği bilgiyi
sızdıramaz. En tehlikeli yer **varsayılan varyantlar** — onları okuyan, o
yüzeyi gören EN AZ BİLGİLİ oyuncudur.

**2 · Oyun not vermez.** Ahlak skoru yok. Karar sonucu kalıbı:
**eylem → sonuç → bedel.** Hüküm cümlesi yasak ("doğru olanı yaptın").
*Ama* nitelik+bedel yapısı ("Dürüstsün ama saf") hüküm değil — orada dünyanın
tepkisi anlatılıyor, serbest.

**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.** Bütçeyi harcamanın
hiçbir biçiminde oyuncunun elinde yalnızca vicdansız kararlar kalamaz.

**4 · Kaybetme yok.**

**5 · Metin SABİT bir finansal durum iddia edemez.** "Borç kapandı", "kasam
boş", "ajans rahat" yasak — oyuncunun gerçek kasasıyla çelişebilirler.
**Ama olay bildiren cümleler serbesttir** ("para geldi", "kasa erir"), çünkü
kararın kendi sonucundan doğar ve her zaman doğrudurlar. Bu ayrımı geçen tur
yanlış yazmıştım.

**6 · Cengo satırının üç kuralı.** V2, Cengo'nun sesinin bağa göre değiştiği
ilk vaka:
- Satır, kararın **ÖNCESİNDEKİ** bağa bakar. İhanet bulunduğun yere göre ölçülür.
- **Sıcaklık onay değildir.** Bağ güçlendikçe kirli kararlar daha çok acıtır,
  temiz kararlar daha az söze dökülür. Tersi "puan topla, affedil" olurdu.
- Varyant sırası azalan eşik, sonda `varsayilan`.

---

## V2 hakkında bilmen gerekenler

- **İlyas bu vakada İLK KEZ görünüyor** ve **sıradan bir tahsildar** olarak
  kalmak zorunda. Aynı adam üçüncü vakada Kaya'yı iten kişi çıkıyor. Oyuncu
  V2'de bunu sezmemeli. Yazarın gerçeği de bunu söylüyor:
  `ilyas_cinayet: GİZLİ — bu vakada YOK`. **Bu, senin en önemli
  kontrolün:** V2'nin herhangi bir cümlesi İlyas'ı olduğundan tehlikeli
  gösteriyor mu? "Sıradan" fazla mı vurgulanıyor — yani oyuncuya göz mü
  kırpıyor?
- **V2'de bedelsiz ipucu YOK.** 6 ipucu, 4 araştırma hakkı.
- **Bilinen ve kabul edilmiş bir uyarı var**, keşif diye raporlama ama
  yargını söyle: `mahalle_konus` (tam gerçeğe ulaştıran ipucu) yalnızca
  kusursuz sırada açılabiliyor ve **dört hakkın dördünü birden** gerektiriyor
  (`nesrin_gorusme` ya da `vedat_mali` → `takip_gece` → `kenar_ev_gozlem` →
  `mahalle_konus`). Tek bir farklı seçim tam gerçeği kapatıyor.
- Sonraki yedi vakayı görmüyorsun. **Vakalar arası tutarlılığı yargılama.**

---

## Bakmanı istediklerim

Önem sırasına koy. Her bulgu için **hangi cümle, ne yanlış, ne bekliyordum**
yaz — ve düzeltme önermeden önce mevcut cümleyi bir daha oku.

**1 · İlyas sızıyor mu?** Yukarıdaki en kritik soru. `kenar_ev_gozlem` metni,
meta'sı, `ilyas_tahsildar` olgusu ve portre alt metni — dördü birden İlyas'ı
unutulur kılmalı. Başarıyor mu, yoksa tersine mi dönüyor?

**2 · Sızıntı, genel.** Varsayılan metinler, meta satırları, çıkarım
başlıkları. Oyuncunun hak etmediğini söyleyen var mı?

**3 · `vedat_yuz` ipucu bir tuzak mı?** Bu ipucu bir araştırma hakkı
harcatıyor, `vedat_pisman` olgusunu açıyor — **ve o olguyu hiçbir çıkarım,
hiçbir karar kapısı, hiçbir koşullu metin okumuyor.** Meta'sı bunu kendisi
itiraf ediyor: *"bu bilgi seni gerçeğe yaklaştırmaz — sadece ona acıtır."*
Üstelik dört hakkın biri ona giderse `mahalle_konus` zinciri kapanır, yani
tam gerçek erişilemez olur.
Soru: bu dürüst bir tasarım tercihi mi (empati, avantaj değil), yoksa
oyuncuyu cezalandıran gizli bir tuzak mı? "(opsiyonel)" etiketi yeterli
uyarı mı?

**4 · Cengo'nun üç kademesi çalışıyor mu?** `yalan_kur` ve `kuru_rapor`
kararlarında üçer varyant var. Bağ yüksekken gelen cümle gerçekten daha çok
acıtıyor mu? "Sıcaklık onay değildir" kuralı tutuyor mu, yoksa bir varyant
oyuncuyu ödüllendiriyor gibi mi duruyor?

**5 · Dört karar gerçekten farklı mı?** `yalan_kur` ve `kuru_rapor` ikisi de
18.000 ₺ ve ikisi de bağ −1. Mekanik olarak aynılar. Anlatı onları yeterince
ayırıyor mu, yoksa biri gereksiz mi?

**6 · Ekonomi.** 4 hak / 6 ipucu, bedelsiz yok. Dürüst oynamak içerik
kaybettiriyor mu? Tam gerçeğe ulaşmak için tek bir kusursuz rota gerekmesi
gerilim mi yaratıyor, hayal kırıklığı mı?

**7 · Proza.** Kırık cümle, sarkan tire, bulanık özne, tekrar. Ayrı liste yap.

**8 · İyi çalışan ne?** Bunu da yaz.

---

## Son not

İddiayı **dosyadan alıntıla.** Emin değilsen "şüpheleniyorum, doğrulanması
lazım" de — bu da değerli. Kesinlik taklidi değerli değil.

Bulamazsan bulamadığını söyle. Uydurma bulgu, bulgu yokluğundan kötüdür.
