# Vaka 3 resimleri — Codex talimatı

Bir çizgi animasyonun resimlerini üretiyorsun. Sahibi Türkçe konuşur; kısa Türkçe yanıt ver.

## Klasörler
- `prompts/G<n>.md` — her resmin yolu, SIRALI referansları ve istemi. `prompts/LISTE.md` özet.
- `referanslar/` — sabit referans resimleri. İstemin "Referanslar" listesinde geçiyorsa KULLAN (serbest). Dokunma.
- `onayli/` — onaylı resimler (`G<n>.webp/.jpg/.png`). Önceki G resimlerinden YALNIZ buradakileri referans ver
  (`uretilen/` ve `red/` içindekileri asla). Dokunma.
- Kısaca: referans = istemin "Referanslar" listesindeki dosyalar, `referanslar/` ve `onayli/` ikisi de geçerli.
- `uretilen/` — ürettiğin resimler buraya: `uretilen/G<n>.png`. Onayı yerel Claude verir.

## "üret" (ya da "üret G50 G51")
`prompts/` içindeki G dosyalarını NUMARA sırasıyla gez. Her biri için:
1. Atla: `onayli/G<n>.*` ya da `uretilen/G<n>.*` varsa.
2. Atla: yol **web** ise, ya da dosyada `## ENGELLENDİ` başlığı varsa (bunları sahibi web'de yapar).
3. Atla: "Referanslar"daki `onayli/G<k>` dosyalarından biri yoksa (o resim henüz onaylanmadı).
4. Üret: referans resimlerin HEPSİNİ listedeki SIRAYLA görüntü aracına ver ("birinci referans" = listedeki 1.).
   İstem = "İstem" bölümündeki kod bloğu AYNEN; dosyada `## Düzeltme` bölümleri varsa hepsini istemin SONUNA ekle.
   Kısaltma, yumuşatma, çevirme, kendi eklemen YOK. Oran "oran" satırındaki dikey orana en yakın boyut.
5. Kaydet: `uretilen/G<n>.png`.
6. Güvenlik sistemi engellerse AYNI istem ve AYNI referanslarla bir kez daha dene (istemi DEĞİŞTİRME). İkinci deneme de
   engellenirse `prompts/G<n>.md` sonuna `## ENGELLENDİ` + tarih + mesajın kısası ekle, sıradakine geç.
7. Başka hata: bir kez yeniden dene; olmazsa sıradakine geç.
8. Her üretim çağrısından hemen sonra (engellenen veya hatayla sonuçlanan çağrılar ve yeniden denemeler dahil), `uretim_kaydi.md` dosyasındaki mevcut tabloya aynı sütun sırası ve biçimiyle bir satır EKLE; eski kayıtları değiştirme. Sütunlar: G no | kullandığın araç/model adı | araca gönderdiğin istemin TAM metni (kısaltmadan) | verdiğin referans dosyaları ve sırası | boyut/kalite ayarı | istemi `prompts/G<n>.md`'den aynen mi aldın, çevirdin mi, değiştirdin mi (ne ekledin/çıkardın) | sonuç (üretildi / engellendi / hata + varsa mesaj). İstemi sonradan dosyadan yeniden kurma; gerçekten araca gönderilen tam metni kaydet. Tablo içindeki satır sonlarını mevcut biçimde `<br>` ile göster. Model adı veya ayar araç tarafından bildirilmediyse bunu açıkça belirt, tahmin etme.
   Kayda NORMAL izinle, dosyanın sonuna ekleyerek yaz (dosyayı silip yeniden oluşturma). Yazamazsan yükseltilmiş izne geçme;
   satırı `kayit_bekleyen.md`'ye yaz, üretime devam et ve bitince sahibine "kayıt dosyasına yazamadım" de.
Bitince kısa özet: üretilen / engellenen / referans bekleyen (neyi beklediği).
Beğenmesen de yeniden üretme; onayı yerel Claude verir.
Resimlere yazı, filigran, imza ekleme.

## "dene G1 G2 …" (karşılaştırma denemesi — yalnız sahibi isteyince)
Sahibi web'de yaptığı resimleri Codex'in de üretip üretemediğini görmek istiyor. Yalnız adı verilen G'ler için:
- "üret"teki 1. ve 2. atlama kurallarını UYGULAMA (onaylı olsa da, yol web olsa da üret). 3. kural geçerli.
- İstem dosyası: `deneme_codex/prompts/G<n>.md` VARSA onu kullan, yoksa `prompts/G<n>.md`. Kayıtta hangisini kullandığını yaz.
  Deneme kopyasının referans listesinde `deneme_codex/referanslar/` dosyaları da geçebilir; onları da kullan (yalnız "dene"de).
- Referanslar, istem ve Düzeltme'ler "üret"teki 4. adımla AYNI. Engellenirse 6. adımdaki gibi bir kez daha dene.
- Kaydet: `deneme_codex/G<n>.png` (klasör yoksa aç). Aynı adda dosya varsa `deneme_codex/G<n>_2.png`, `_3` … diye kaydet. `uretilen/` ve `onayli/`'ye YAZMA; `## ENGELLENDİ` EKLEME.
- `uretim_kaydi.md`'ye 8. adımdaki gibi satır ekle; sonuç sütununun başına "DENEME:" yaz.
Bitince kısa özet: üretilen / engellenen (kaç denemede).
