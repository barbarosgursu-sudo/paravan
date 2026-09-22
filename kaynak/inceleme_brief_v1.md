# Paravan Dedektiflik — V1 metin incelemesi

Ekteki dosya (`V1_okuma.txt`) bir oyunun **ilk vakasının tam metin dökümü**.
Oyunu oynamana gerek yok — zaten oynayarak bu vakayı bütünüyle göremezsin, ve
sebebi tam da bu incelemenin konusu.

Oyun: Türkçe, İstanbul-Noir, ahlaki tercih temelli bir dedektiflik oyunu.
Oyuncu batmakta olan küçük bir dedektiflik bürosunun sahibi Peri. Tek çalışanı
Cengo. Sezon dokuz vakadan oluşuyor; bu birincisi.

---

## Neden metin, neden oyun değil

Hiçbir oyun bu vakanın bütün yollarını birden gezmez:

- **6 ipucu var, oyuncu 3 araştırma hakkı harcayabiliyor** (2 ipucu bedelsiz,
  hak harcatmıyor). Yani bir oyunda en çok 5'ini görürsün.
- **Kararların kapısı var.** Bazı kararlar ancak belli bir çıkarıma ulaşmışsan
  açılır.
- **Metinler koşullu.** Aynı ekran, oyuncunun bildiklerine göre farklı cümle
  basar.

Bu döküm o daralmayı kaldırıyor: her varyant, koşuluyla birlikte basılı.

---

## Dosyayı nasıl okuyacaksın — format sözlüğü

| işaret | anlamı |
|---|---|
| `[koşul: X]` | bu varyant yalnız X doğruysa görünür |
| `[varsayılan]` | hiçbir koşul tutmazsa basılan metin |
| `✦ BEDELSİZ` | bu ipucu araştırma hakkı harcatmaz |
| `açtığı olgular:` | bu ipucunu açan oyuncunun eline geçen bilgi kalemleri |
| `← polis_dosyasi` | bu olguyu şu ipucu açıyor |
| `↳` | ipucunun altındaki "meta" satırı — Peri'nin o an yaptığı çıkarım |
| `gerekir:` | bir çıkarımın doğması için gereken olgular |
| `VE` / `YA DA` | koşul bağlaçları |

**Varyant sırası önemli:** motor listedeki İLK tutan varyantı basar, sonrakilere
bakmaz.

---

## ⚠ Dökümde olan ama OYUNCUNUN ASLA GÖRMEDİĞİ iki şey

Bunları "sızıntı" diye raporlama — denetim için basılıyorlar:

1. **YAZARIN GERÇEĞİ** bloğu. Vakanın çözümü. Oyuncuya hiçbir biçimde
   gösterilmez.
2. **ruh hâli: temiz / bedel / boşluk / kirli.** Motorun iç sınıflaması;
   yalnızca hangi atmosfer görselinin çıkacağını seçer. Oyuncuya kelime olarak
   ASLA gösterilmez.

Görsel dosya adları da basılı (`v1_merdiven.jpg` gibi) — görselleri görmüyorsun,
sadece hangi slotun nerede olduğunu biliyorsun.

---

## Uymak zorunda olduğu sözleşmeler

Bulgularını bunlara karşı ölç.

**1 · Nurcan kuralı — projenin çekirdeği.**
Hiçbir metin, oyuncunun o an henüz hak etmediği bir bilgiyi sızdıramaz. En
tehlikeli yer **varsayılan varyantlar**: onları okuyan, o yüzeyi gören EN AZ
BİLGİLİ oyuncudur. Bir varsayılan metin, yalnızca ileri gitmiş oyuncunun
bilebileceği bir şeyi ima ediyorsa sızıntıdır.

**2 · Oyun oyuncuya not vermez.**
Ahlak skoru, sıralama, "doğru olanı yaptın" yok. Karar sonucu kalıbı:
**eylem → sonuç → bedel.** Somut bir fiille açılır, sonra ne olduğunu gösterir.
Hüküm cümlesi yasak. *Ama* nitelik+bedel yapısı ("Onurlu ama ölümcül",
"Dürüstsün ama saf") hüküm değildir — orada oyuncunun seçimi değil dünyanın
tepkisi anlatılıyor, kalabilir.

**3 · Ekonomi seçenekleri daraltır, KİRLETMEYE ZORLAMAZ.**
Bütçeyi harcamanın hiçbir biçiminde oyuncunun elinde yalnızca vicdansız
kararlar kalamaz.

**4 · Kaybetme yok.** Batmak oyunu bitirmez, düzgün olma hakkını daraltır.

**5 · Metin SABİT bir finansal durum iddia edemez.** "Borç kapandı", "kasam
boş", "ajans rahat" gibi cümleler yasak, çünkü oyuncunun gerçek kasasıyla
çelişebilirler — rakamı ayrı bir hesap kutusu gösteriyor. **Ama olay bildiren
cümleler serbesttir** ("para geldi", "para gelmez", "kasa erir"), çünkü
kararın kendi sonucundan doğarlar ve her zaman doğrudurlar. V1'in özel bir
istisnası da var: bu vakaya herkes aynı durumdan giriyor (65.000 ₺, borç yok),
o yüzden `temiz_rapor`'un "ajans nefes alır"ı orada her zaman doğru ve
bilerek bırakılmış.

---

## V1 hakkında bilmen gerekenler

- **Bu vakada katil AÇILMAZ.** Kimin ittiği üçüncü vakanın konusu. V1'in
  varabileceği en uzak nokta "bu kaza değil" şüphesidir.
- **`giris_zorlama_yok` olgusunun meta satırı** — *"Zorla giriş yoksa, ya
  tanıdık biri ya içeriden"* — Peri'nin çıkarımı ve **bilerek yanlış**.
  Sonraki vakalar bu yanlışı açıkça geri açıyor. Çelişki diye raporlama;
  ama *kurulmuş yay ikna edici mi*, onu söyle.
- **Vakalar arası bağ kararlardadır.** Her kararın "sonraki vakalara yazdığı"
  satırı var; o bayraklar ileride okunuyor.
- Sonraki sekiz vakayı görmüyorsun. **Vakalar arası tutarlılığı yargılama** —
  onun yerine şunu yaz: *V1 neyi vaat ediyor ve sonrası bunu ödemek zorunda?*

---

## Bakmanı istediklerim

Önem sırasına koy. Her bulgu için **hangi satır / hangi cümle, ne yanlış, ne
bekliyordum** yaz.

**1 · Sızıntı.** Herhangi bir varsayılan metin, ipucu meta'sı ya da çıkarım
başlığı, oyuncunun hak etmediğini söylüyor mu? Özellikle çıkarım başlıklarına
bak: başlık, o çıkarıma ulaşan oyuncunun *kesinlikle* bildiğinden fazlasını
söylüyor mu?

**2 · Mantık sağlam mı?** Olgular çıkarımları gerçekten taşıyor mu? Kırık kol
saati ölüm saatini kanıtlamaya yetiyor mu? Komşunun ifadesi ile saatin durduğu
an arasındaki bağ ikna edici mi, yoksa bir sıçrama mı var? Bir oyuncu
"dur, bu böyle çıkmaz" der mi?

**3 · Yüzeyler birbiriyle çelişiyor mu?** Her kararın dört yüzeyi var: sonuç
metni, Cengo satırı, anı defteri notu, ve sayılar (para / Cengo bağı). Bunlar
birbirini yalanlıyor mu? *Bu tam olarak geçen hafta bir hata bulduğumuz yer:
bir anı notu "Cengo'nun yüzü asık" diyordu, oysa o karar Cengo'nun bağını en
çok YÜKSELTEN karardı.* Aynı cinsten başka bir şey var mı?

**4 · Ekonomi.** 3 hak + 2 bedelsiz ipucu, 6 ipuçluk bir vakada doğru denge mi?
Dürüst oynamak içerik kaybettiriyor mu? Bir kararın kapısı, ancak belli bir
araştırma rotasıyla açılıyorsa, o rota oyuncuyu kirlenmeye itiyor mu?
Ödemelerin büyüklükleri (65.000 / 45.000 / 25.000 / 0) tercihleri anlamlı
kılıyor mu, yoksa bir seçenek bariz "optimum" mu?

**5 · Proza.** Kırık cümle, sarkan tire, bulanık özne, gereksiz tekrar,
tökezleyen Türkçe. Bunları ayrı bir liste yap — küçük ama gerçek.

**6 · Açılış işini yapıyor mu?** Bu bir sezonun ilk vakası. Giriş metni ve ilk
ekran, oyuncuya dünyayı, Peri'nin çaresizliğini ve merkezî gerilimi (para mı
vicdan mı) yeterince kuruyor mu? Nesi eksik?

**7 · İyi çalışan ne?** Bunu da yaz. Neyi bozmamam gerektiğini bilmem lazım.

---

## Son not

Bir şeyin bozuk olduğunu iddia ediyorsan **dosyadan alıntıla.** Geçen turlardan
birinde en yüksek öncelikli bulgu yanlış çıktı: iddia edilen davranış motorda
gerçekleşmiyordu. Emin değilsen "şüpheleniyorum, doğrulanması lazım" de —
bu bilgi de değerli, ama kesinlik taklidi değerli değil.

Bulamazsan bulamadığını söyle. Uydurma bulgu, bulgu yokluğundan kötüdür.
