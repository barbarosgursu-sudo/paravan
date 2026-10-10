# 7. ÜRETİM SÜRECİ

Bir vaka formdan oynanır hâle bu sırayla gelir. **Adım atlanmaz.**

## Adımlar

| # | adım | kim | çıkış şartı |
|---|---|---|---|
| 1 | **Form** doldurulur (6. parça) | ben | formun kontrol listesi tamam |
| 2 | **Onay 1:** form | sahibi | "onay" |
| 3 | **Diyalog** yazılır (`vakalar/vakaN_diyalog.md`): her satırın konuşanı, ifadesi ve görseli (satır → görsel tablosu) | ben | otomatik denetimden geçer |
| 4 | **Veri** hazırlanır: yapı (ipuçları, olgular, Kim yaptı?) elle; sahne ve karar metni `arac_diyalog.js` ile diyalogdan; **künye** (`yeni/kisiler.json`) | ben | otomatik denetimden geçer; künye aracı temiz |
| 5 | **Görselsiz oyun turu:** yeni görsellerin yerinde yer tutucu (eski görsel ya da yazılı gri kutu); bütün yollar otomatik oynanır. Ardından **bulanık replik taraması** (aşağıda) | ben | hata yok; tarama bitti, düzeltmeler veride |
| 6 | **Onay 2 — görselsiz test:** sahibi oynar. Bakılan: hikâye anlaşılıyor mu, bulmaca çözülüyor mu, Kim yaptı? keyifli mi, espriler, süre | sahibi | notlar tek listede |
| 7 | **Hikâye düzeltmeleri** (değişiklik kuralına göre) ve tekrar görselsiz test, sahibi "tamam" diyene kadar | ben + sahibi | **hikâye donar** |
| 8 | **Görsel listesi ve promptlar** tek seferde verilir (numaralı referanslarla) | ben | — |
| 9 | **Görseller** üretilir; **toplu gönderilir** (aşağıda) | sahibi | — |
| 10 | **Kontrol, kesim, yerleştirme** (5. parça, kontrol listesi); **toplu işlenir** | ben | her görsel gömülü |
| 11 | **Görselli oyun turu:** bütün yollar otomatik oynanır; ayrıca her sahne satır satır: konuşan/karşısındaki doğru mu, iki aynı figür var mı, dinleyenin yüzü uygun mu, saç kenarı temiz mi | ben | hata yok |
| 12 | **Onay 3 — görselli test:** sahibi oynar. **Yalnız görsellere** bakılır: metinle uyum, ifade, çekicilik | sahibi | notlar tek listede |
| 13 | **Görsel düzeltmeleri** | ben + sahibi | — |
| 14 | **Vaka donar.** Şablonda eksik çıktıysa şablon düzeltilir | ben + sahibi | — |

- **Görseller, hikâye donmadan (7. adım) üretilmez.**
- Görselli testte hikâye değişmez; değişecekse forma dönülür ve etkilenen görseller listelenir.
- Her adımın sonunda değişiklikler `main`'e gönderilir.
- **Her vakanın süresi ölçülür:** başlangıç ve her adımın bitişi vakanın başlangıç belgesindeki
  tabloya yazılır (örnek: `vakalar/vaka2_baslangic.md` §1).
- **Vaka 1 dersleri** (zamanı en çok yiyen görsel düzeltmeleri ve önlemleri): `vakalar/vaka2_baslangic.md` §2–4.

## Hızlandırma kuralları (10 Ekim 2026, Vaka 2 ölçümünden)

Vaka 2'de metin tarafı 2 sa 52 dk sürdü; bunun 1 sa 56 dk'sı Onay 2'ydi ve 22 notun
**hepsi bulanık replikti** (hikâye hiç değişmedi). Görselde zaman, tek tek gidip gelmeye gidiyor.

**Bulanık replik taraması (adım 5'in sonu, Onay 2'den ÖNCE).** Diyaloğu baştan sona, oyuncunun
gördüğü sırayla okurum (`arac_okuma.js` ya da görselsiz turun ekranları) ve her satıra sorarım:
- **Kime?** Konuşanın kime konuştuğu belli mi; cevap doğru kişiden mi geliyor?
- **Neyi?** "O", "bu", "orası" neyi gösteriyor; oyuncu bunu bu satıra kadar duydu mu?
- **Nereden biliyor?** Karakter bu bilgiyi ya da bu kişiyi nereden tanıyor; ekranda görüldü mü?
- **Espri tutuyor mu?** Espri tek okumada anlaşılıyor mu; kurulumu ondan ÖNCE mi geliyor?
- **Sıra:** cevap sorudan, tepki olaydan sonra mı; iki iş tek replikte karışmış mı?
- **Ne istiyor?** Karakterin bu satırdaki niyeti (iltifat mı, iğne mi, yalan mı) belli mi?

Düzeltme yalnız **netleştirme**dir (hikâyeye yeni olgu eklenmez; eklenecekse önce sahibine
sorulur — CLAUDE.md çalışma kuralı). Bulunanlar ve yapılanlar sahibine **tek liste** hâlinde
verilir; sahibi Onay 2'ye temizlenmiş metinle başlar. Sahibi de notlarını sahne sahne,
**toplu** verir.

**Toplu görsel işleme (adım 9–10).** Sahibi görselleri tek tek değil, **sohbet sohbet** gönderir
(bir sohbetin bütün çıktıları, dosya adı ya da sırası prompt numarasıyla: `G2`, `G3`…).
Ben o paketin hepsini birden işlerim: `cd kaynak && node arac_paket.js <klasör> --vaka N` önce
**önizler** (proje dosyasına dokunmaz; temas sayfası `YENI_UI/paket_<klasör>.png`: yeşil zemin +
büyütülmüş baş), uygunsa aynı komut `--yaz` ile keser/küçültür, gömer, manifestoyu günceller,
doğrulayıcı ve iki derlemeyi koşar. Araca kalmayan: saç halesi temizliği, yazı/harf taraması,
boy ayarı (araç boyu olmayan konuğu söyler), ilgili satırlarda ekran görüntüsü (`arac_yeni_tur.js`). Sahibine paketin **oyundaki son
hâli tek seferde** gösterilir; düzeltme istenen görseller tek listede döner. Temel görseller
(G1, G14…) bitince öbür sohbetler aynı anda (başka sekmede, ChatGPT ya da Grok) yürüyebilir.

Kapsam dışı bırakılanlar (sahibinin kararı): görsel sayısı azaltılmaz; ifade ızgarası (bir
istekte birkaç ifade) kullanılmaz, çözünürlük düşüyor; ücretli üretim (API) yok; her vakada
Peri ve Cengo yeni kıyafet giyer, kıyafet kütüphanesi tutulmaz.

## Otomatik denetimler

Geçmeyen vaka bir sonraki adıma geçmez.

**Giriş (K17)**
- Arka plan büro.
- 15–25 replik.
- Formdaki şüphelinin adı metinde geçiyor.
- Metindeki ücret formdaki ücretle aynı.
- Bir ipucunun vereceği bilgi metinde geçmiyor (ipucu olgularının anahtar kelimeleriyle aranır).

**Hikâye**
- 3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var.
- Suçluyu kanıtlayan en az 2 ipucu yolu var.
- Hiçbir doğru kanıt çifti tek bir ipucundan çıkmıyor (kural 21c).
- Her ipucu yolunda "Kim yaptı?" ekranı çalışıyor (tam, zayıf ya da yanlış sonuç).
- Defter cümleleri suçluyu söylemiyor.
- Hak edilmemiş bilgi sızmıyor (isim, olgu, görsel).
- İpucu adındaki özel isimler, ipucu açılabilir olduğu anda oyuncunun duyduğu adlar arasında.

**Karar ve para**
- En az bir dürüst karar her yolda açık.
- Her kararın kısa sonucu (önizleme) ve her ücret kesintisinin açıklaması var (kural 22a).
- Kasa hiç eksiye düşmüyor; gider, borç, tohum yok.
- Metindeki her tutar fiyat tablosunda.

**Görsel**
- Her satırın ifadesi sözlükte ve görseli var.
- Hiçbir satırda ekranda aynı figür iki kez yok (Cengo hem solda hem sağda).
- Önceki vakaya geçiş: vaka bitince sonraki vaka açılıyor (ilk iki vakada elle denenir).
- Metinde anılan nesne ya da hareket o satırda görünüyor (satır → görsel tablosu).
- Her görsel gömülü, adı doğru.

**Elle bakılanlar** (makine yapamaz): espri tutuyor mu, çekicilik seviyesi, görsel kalitesi. Girişte: suçlu dolaylı yoldan ele veriliyor mu, çekicilik anı ve espri tutuyor mu, giriş ilk gidilecek yer belli olarak bitiyor mu (Onay 2'de sahibi bakar).

## Değişiklik kuralı

Bir şey beğenilmezse değişiklik **doğru yerden** başlar:

| ne değişiyor | nereden başlar | sonra |
|---|---|---|
| Bir replik, bir ifade | diyalog | veri → denetim |
| Bir görsel | görsel | kontrol listesi → yerleştirme |
| Bir olay, şüpheli, ipucu, karar | **form** (Onay 1'e döner) | diyalog → veri → denetim → etkilenen görseller |
| Bir kural | **şablon** (sahibinin onayı) | etkilenen vakalar yeniden denetlenir |

- Veri ya da görsel, formu değiştirmeden hikâyeyi değiştiremez.
- Sahibinin oyun testi notları önce bu tabloya göre sınıflanır, sonra uygulanır.

## Süre

| adım | süre |
|---|---|
| Form + onay | yarım gün |
| Diyalog + veri + denetim | 1 gün |
| Görselsiz test + hikâye düzeltmeleri | yarım–1 gün |
| Görseller (25–35 adet) | 2–3 gün (sahibinin üretim hızına bağlı) |
| Görselli test + düzeltme | yarım gün |
| **Toplam** | **5–6 gün** |

**Vaka 1'e özel:** motor işleri (Kim yaptı? ekranı, yüzleşme, para, kapanıştaki iki hâl, yeni denetimler) bir kez yapılır: **+2 gün.**
