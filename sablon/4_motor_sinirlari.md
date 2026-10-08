# 4. MOTOR SINIRLARI

Vaka yazılırken motorun yapamadığı bir şey istenmez. Yeni bir yetenek gerekirse önce buraya eklenir, sonra yapılır.

## Konuşma ekranı: yapabildikleri

- **Arka plan:** her satırda değişebilir (aynı yerde yumuşak geçiş, başka yerde kararma).
- **Ara kare:** tam ekran görsel; figürler çekilir.
- **Mekân karesi:** figürler çekilir, yalnız arka plan görünür.
- **Figürler:** Peri solda, sağda **tek** konuk. Konuşan aydınlanır, dinleyen kararır.
- **İfade:** her satırda konuşanın ifadesi değişebilir. Dinleyen Peri'nin ifadesi de değişebilir.
- **Kıyafet:** sahne içinde Peri'nin kıyafeti değişebilir (manto → mantosuz gibi).
- **Giriş / çıkış:** konuk sahneye girer, sahneden çıkar.
- **Figürsüz konuşan:** görseli olmayan biri adıyla konuşabilir (ses, asistan…).
- **Seçim:** oyuncu bir cevap seçer; birkaç satır değişir, hikâye **dallanmaz.**
- **Sahneyi geç** ve **geri** (geri geçici).

## Oyun akışı: yapabildikleri

- Açılış → masa → vaka girişi → konuşma → araştırma → dönüş → karar → sonuç → kapanış.
- **Araştırma:** ipucu listesi, hak sayısı, ipucu sahnesi, "deftere düştü" kartı.
- **Olgu ve defter:** ipucu açılınca olgular gelir; olgular birleşince deftere bir cümle yazılır.
- **Karar:** her kararın bir kapısı vardır (hangi olgular bilinirse açılır).
- **Sonuç:** kararın ara karesi, Cengo satırı, anı defteri notu, kazanılan para.
- **Koşullu metin:** karar sonucu olgulara göre, Cengo satırı bağa göre değişebilir.
- **Kayıt:** oyun her adımda kaydedilir; açılışta sahne düzeyinde.

## Yapamadıkları (sınırlar)

1. **Ekranda en çok iki figür:** Peri ve bir konuk. Üç kişilik sahnede sağdaki kişi değişir.
2. **Hareket yok:** figürler ve kareler durağan görsellerdir. Yeni poz = yeni görsel.
3. **Figür boyu sabit:** her konuğun boyu bir kez ayarlanır.
4. **Sahne satırı koşula göre değişmez:** ipucu ve konuşma sahnelerinde bir satır "oyuncu şunu biliyorsa" diye değişemez. Bu yüzden her sahne yalnız kendi açılma koşulunun garanti ettiği bilgiyi kullanır.
5. **Ses:** yalnız 5 kısa efekt. Müzik yok.
6. **Tarayıcı uyarı kutusu yok** (Claude sayfası engelliyor). Her onay sayfanın içinde.
7. **Telefon dikey ekran:** yazı kutusu 4 satır; uzun replik bölünür.
8. **Sayfa boyutu:** görseller sayfaya gömülü. Bir görsel ~50–120 KB; sezon için yer var.

## Şablon için yapılması gerekenler

| # | iş | neden |
|---|---|---|
| 1 | **Kim yaptı? ekranı:** şüpheli + iki kanıt seçimi, üç sonuç | 1. parça |
| 2 | **Yüzleşme:** seçime göre üç kısa sahneden biri | 1. parça |
| 3 | **Sıra:** araştırma → Kim yaptı? → yüzleşme → kovalamaca → karar | 1. parça |
| 4 | **Para:** gider, borç, faiz kapanır; kasa yalnız birikir | 2. parça |
| 5 | **Kapanışta bağa göre iki hâl:** sahne satırının bağa göre değişmesi | 2. parça, kural 12a |
| 6 | **Tohum sistemi kapanır** | 1. parça |
| 7 | **Bedava ipucu kalkar** (motor zaten destekliyor; yalnız veri) | 1. parça |
| 8 | **Karar kapıları kapanır:** dört karar her zaman açık | 1. parça |
| 9 | **Geri düğmesi:** geçici; yayından önce kapanır | — |
| 10 | **Giriş denetimi (doğrulayıcıda K17):** büro, 15–25 replik, şüpheli adı, ücret, ipucu bilgisi sızmıyor | 1. parça, "Giriş" |
| 11 | **İpucu adı denetimi:** addaki özel isimler, ipucu açılabilir olduğu anda duyulmuş mu | 1. parça, "Yanlış iz" |

## K17: giriş denetimi (tasarım)

`dogrulayici.js`'e eklenir, yalnız yeni oyunda çalışır. Giriş sahnesine bakar:

| # | ne | nasıl |
|---|---|---|
| 1 | Büro | arka plan, kanondaki büro görselleri listesinde mi |
| 2 | Uzunluk | 15–25 replik |
| 3 | Şüpheli | vakanın şüpheliler listesinden en az bir ad metinde geçiyor |
| 4 | Ücret | vakanın ücreti (ör. "35.000") metinde geçiyor |
| 5 | Sızıntı | ipucu olgularının anahtar kelimeleri metinde **geçmiyor** |

- **Veriye iki yeni alan:** vaka başına `supheliler` (üç ad); her ipucu olgusuna 1–3 `anahtar` kelime.
- Arama `toLocaleLowerCase("tr")` ile (Türkçe İ).
- Biri tutmazsa **hata**: derleme durur.
- `test_bozuk.js`'e bozuk bir giriş eklenir; doğrulayıcının durdurduğu görülür.
- **Sınır:** 5. madde kelime arar; dolaylı ele vermeyi yakalayamaz. O, Onay 2'de sahibinde.

---

## Sahibine sorular

1. ✓ *Karar: a (iki figür).* **Ekranda iki figür sınırı** uygun mu? Üç kişilik sahnelerde (Peri, Cengo, konuk) Cengo ile konuk sırayla sağda durur.
   - a) Uygun. *(önerim; görseller ve yerleşim basit kalır)*
   - b) Üç figür olsun (yerleşim ve ölçek işi, her sahnede daha kalabalık ekran).
