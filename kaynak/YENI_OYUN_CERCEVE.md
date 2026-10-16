# YENİ OYUN — ÇERÇEVE KARARLARI

*23 Eylül 2026. Sahibiyle konuşarak alındı. Bu belge **kararların kaydı**, tasarım
belgesi değil — henüz tek satır yazılmadı.*

> **Bu, Paravan'ın devamı değil, yeni bir oyun.** Mevcut Türkçe sezon (dokuz vaka,
> bitmiş, denetlenmiş) elde duruyor; yayınlanıp yayınlanmayacağına karar verilmedi.

---

## 1. NE YAPIYORUZ

Mavi Ay (*Moonlighting*, 1985-89) tonunda, İngilizce, İstanbul'da geçen bir
dedektiflik oyunu. Mevcut motorun üstüne kurulacak.

**Neden Mavi Ay:** Paravan'ın açılışı zaten o dizinin kurulumu. Araştırıldı ve
birebir çıktı:

| Mavi Ay | Paravan |
|---|---|
| Eski manken, herkesin tanıdığı yüz | *"Bir zamanlar herkes yüzümü tanırdı"* |
| **Muhasebecisi** hesapları boşaltıp kaçıyor | **Avukatı** hesapları boşaltıp kaçıyor |
| Geriye **vergi için kurulmuş** göstermelik şirketler | *"sırf vergi için kurduğumuz göstermelik bir şirket"* |
| David: pervasız, sokağı bilen | Cengo: *"serseri ruhlu, sokağı bilen, pervasız"* |

Kurulum zaten yazılmış; **oynanmamış.** `arac_akis_denetim.js` her koşuşta basıyor:
**40 kararın 23'ünde Cengo hiç konuşmuyor.** Komedinin duracağı yer tam orası ve boş.

**Eksen (sahibi belirledi):** kadın kural, adam içgüdü. Her vakada aynı kavga başka
kılıkta çıkar — *"kapıyı çalalım" / "kilidi açalım."*

---

## 2. KARARLAR

| konu | karar |
|---|---|
| **Dil** | **Önce Türkçe, sonra İngilizce** *(4 Ekim 2026, sahibi; 23 Eylül'deki "sadece İngilizce" kararının yerine).* İngilizce geçiş çeviri değil, **yeniden yazım** olacak — espri çevrilmez (bkz. gerekçe). |
| **Metin anahtarı sistemi** | **Kurulmayacak.** Metin JSON içinde kalır. |
| **Mekân** | **İstanbul.** Türk karakterler, Türk mekânlar. |
| **Platform** | **Steam birinci, Android ikinci.** Aynı HTML; Electron + Capacitor. |
| **Satış** | İlk 2-3 vaka bedava, gerisi **tek seferlik ödeme.** |
| **Reklam / elmas / abonelik** | **Yok. Üçü de reddedildi.** — *Gevşetildi (16 Ekim 2026, sahibi): Android'de ödüllü reklamla üç şey — kozmetik kıyafet (gardırop), vaka başına **bir ek araştırma hakkı**, vaka bitince **kaçırılan ipuçları**. Aşağıda.* |
| **Oyun ve ajans adı** | ⏳ açık. "Paravan" İngilizce'de çalışmıyor. |

### Gerekçeler

**Dil.** Araştırma: ABD'de mobil oyun kullanıcı başına yıllık gelir ~60 $, Hindistan'da
~3,5 $. Gelişmekte olan pazarlarda gelirin %55-70'i **reklamdan** geliyor — bizim
reddettiğimiz mekanizma. Rusya 2022 sonrası mağaza gelir verilerinden çıkarıldı,
tahsilat çalışmıyor. İlk düşünülen beş dil (EN/TR/ES/AR/RU) indirme getirir, para
getirmez.

Tek dil ayrıca **en zor sorunu ortadan kaldırdı:** screwball komedi kelime oyunu ve
ritimdir, çevrilmez. Tek dilde yazılınca o sorun yok.

**Metin anahtarı.** Beş dil için önerilmişti; tek dilde sadece sürtünme. İleride
lokalizasyon gerekirse tek dilden anahtar çıkarmak mekanik iştir, betikle yapılır.

**Platform.** Steam'de peşin satış normal, mobilde F2P kültürü peşin satışı eziyor.
Steam'de medyan solo geliştirici ömür boyu 5-15 bin $ (brüt). Somut örnek: 4,99 $'lık
bir anlatı-bulmaca oyunu ilk 30 günde 1.640 satış / 8.200 $.

**Satış modelinin tek kuralı: VAKA SAT, SEÇİM SATMA.** Chapters'ın modeli (elmasla
açılan özel seçenekler) sözleşmeyi doğrudan deler — *"düzgün insan olmak için para öde"*
demeye gelir. `test_borc.js` dokuz vakada da tersini sınıyor.

**Gardırop — reklamla açılan kıyafet (16 Ekim 2026, sahibinin kararı; Android aşamasında).**
Oyuncu ödüllü reklam izleyerek Peri ve Cengo için ek kıyafet açar. Yalnız **kozmetik**: hiçbir
seçeneği, ipucunu, parayı, bağı değiştirmez — "seçim satma" kuralına dokunmaz. Yalnız **konuşma
ekranındaki figürlerde** görünür; ara kareler hikâyenin kendi kıyafetiyle kalır (her kareyi iki
kez çizmek görsel sayısını katlar). Hikâyenin gerektirdiği kıyafet değişimi (Vaka 2: tayyör →
kremalı → örtülü) bundan ayrıdır, her vakada serbest. Her gardırop kıyafeti = o kıyafette bütün
ifadeler (~6–8 figür). Başlangıç havuzu: `sablon/peri_poz/` L kıyafetleri (kırmızı manto, gece
elbisesi, trençkot…), Cengo'nun C seti. Web sayfasında reklam yok; iş Capacitor + reklam SDK'sıyla.
Steam sürümünde reklam olmaz — orada gardırop ya bedava açılır ya da yoktur (karar sonra).

**Reklamla ek ipucu hakkı (16 Ekim 2026, sahibinin kararı; Android aşamasında).** Sahibi oynarken 3 hakkı
az buldu. Vaka başına **bir kez**, ödüllü reklamla bir ek araştırma hakkı. Koruma kuralı (pazarlığa
kapalı): **her vaka reklamsız haklarla `doğru` çözülebilir olmalı** — reklam başarı satmaz, yalnız
daha geniş resim verir. Doğrulayıcı/test bunu vaka başına sınar (reklamsız hak sayısıyla en az bir
`doğru` yolu). Ekonomi sözleşmesi aynen (`test_borc.js`). Reklamsız sürümde (web, Steam) ek hak
düğmesi çıkmaz; Steam'de hak sayısı karar sonra (ör. reklamın yerine +1 sabit).

**Deneme reklamı (16 Ekim 2026, sahibinin isteği).** Web sayfasında gerçek reklam yok; `yeni_arayuz.js →
reklamGoster` 5 saniyelik bir taklit perde açar ("Ödülü al" / "Kapat (ödül yok)"). Araştırma ekranında
"▶ Reklam izle · +1 araştırma hakkı" (motor `reklamHakAl`, kayıtta `aktif.reklamHak`); kapanıştan sonra
"Kaçırdığın ipuçları" ekranı (`kacanEkrani`, liste `…_kacan` anahtarında). Android'de yalnız
`reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak.

**Kaçırılan ipuçları (aynı karar).** Vaka bitip karar verildikten sonra, oyuncu açmadığı ipucu
sahnelerini reklam izleyerek görür. Sonucu, parayı, bağı değiştirmez; olgu da vermez (vaka kapandı,
olgu taşınmaz — Nurcan: sonraki vakada hak edilmemiş bilgi olmasın). Yalnız sahne.

**Mekân.** İngilizce yazılmış bir İstanbul-noir ayırt edici. Pazarda genel Amerikan
dedektif hikâyesi çok, İstanbul yok.

---

## 3. NE DEVRALINIYOR

Ölçüldü (23 Eylül 2026):

| | satır | yeni oyunda |
|---|---|---|
| `motor.js` — ipucu/olgu/çıkarım, ekonomi, tohum, Cengo bağı, kayıt | 711 | **aynen** |
| `build_html.js` — arayüz, ekranlar, zincir defteri, ses | 1.426 | **aynen** (+ ~39 sabit TR metni çevrilecek) |
| `dogrulayici.js` — 14 kural | 801 | **aynen** |
| 4 denetim aracı | 670 | **aynen** |
| 22 test | 3.502 | 8'i vakayla ölür, ~10'u vaka adı güncellenir, 5'i dokunulmaz |
| Hikâye (`game_data` + `kisiler` + `prolog`) | 3.556 | yeniden yazılır |

**~7.100 satır makine, ~3.500 satır hikâye.** Motorda ve derleyicide gömülü tek bir
vaka adı yok (tek istisna bir yorum satırı).

**Yöntem de devralınıyor:** döküm çıkar → brief yaz → dışarıya inceletme → her iddiayı
veriye karşı doğrula → ayıkla → uygula. Dokuz turda oturdu, `DEVIR.md` §2'de kayıtlı.
İngilizce metinde **daha da değerli** olacak: "bu replik komik mi, yoksa çeviri gibi mi
duruyor" sorusu dış göze sorulur.

---

## 4. NE YENİ

Sahibinin sekiz maddesinden altısı zaten kurulu. İki ekran yeni:

**A. Konuşma ekranı** — Peri ve Cengo atışır. Sprite + konuşma balonu, oyuncu ara sıra
seçer. Screwball ritimdir; tek paragraflık sonuç metni onu taşıyamaz. `cengo_sonuc` var
ama tek satırlık ve kararın *sonrasında*.

**B. Sahnede ipucu arama** — görselin üstünde dokunulacak noktalar.

> **B'nin mantığı zaten çalışıyor.** `knowledge` sistemi tam olarak "birkaç ipucu bir
> araya gelince sonuç doğar" demek:
> `"ifade": {"all": ["ceyda_saat","olum_saati"]}` → *"Anlattığı saat, duran saatle
> örtüşmüyor."* Zincir defteri bunu ağaç olarak çiziyor bile. **Yazılacak olan sadece ekran.**

### Vaka döngüsü

```
1. GİRİŞ       müşteri gelir, dert anlatılır
               (Columbo tipinde: suçu önce oyuncu görür)
2. KONUŞMA     Peri ve Cengo atışır                    ★ YENİ
3. ARAŞTIRMA   ipucu açma (mevcut) + sahnede arama     ★ YENİ
               bulunanlar birleşir → çıkarım (hazır)
4. KARAR       mevcut karar ekranı; para / bağ / tohum
```

### İki vaka tipi

- **Mavi Ay tipi** — oyuncu da bilmez, gerçeği kurar. *(mevcut sistemin aynısı)*
- **Columbo tipi** — **ters kurgu** ("howcatchem"): oyuncu katili baştan görür, Peri
  bilmez. Oyuncunun işi *kanıt bulmak*. Sahnede ipucu arama ekranının en iyi kullanıldığı
  yer; katilin ifadesiyle çelişen ayrıntı aranır.

Bedava vakalar hafif ve eğlenceli olur; ücretli kısımda zor Columbo vakaları durur.

---

## 5. GÖRSEL — asıl maliyet

Mevcut 63 görsel ayrıldı: ~26 vakaya özel (mekân/kanıt), 14 vaka karakteri portresi,
Peri+Cengo portresi, 4 Cengo ikili karesi, 4 ruh hâli, 3 açılış görseli.

Sprite formatı **maliyeti düşürüyor:**

| | üretim | tekrar kullanım |
|---|---|---|
| Peri + Cengo sprite'ı, 4-5 ifadeyle | ~10 | **bütün sezonlarda** |
| Arka planlar (büro, sokak, kahve, adliye) | ~8 | **bütün sezonlarda** |
| Vaka konuğu sprite'ı | vaka başına 1 | o sezon |

Şimdiki modelde sezon başına ~40 görsel; sprite modelinde ilk sezonda ~20, sonrası
neredeyse bedava. İfadeler komediyi taşır — aynı sprite kaş kaldırmış hâliyle üç ayrı
replikte çalışır.

**Not:** 4 ruh hâli görseli noir tonunda (kül tablası vb.); neşeli bir oyunda tutmayabilir.

---

## 6. KORUNACAK SÖZLEŞMELER

Eski oyundan aynen taşınır — bunlar tonla ilgili değil, yapıyla ilgili:

- **Nurcan kuralı.** Hak edilmemiş bilgi sızmaz.
- **Ekonomi daraltır, kirletmeye zorlamaz.** `test_borc.js` kolluyor.
- **Kaybetme yok.** Batmak oyunu bitirmez.
- **Oyun not vermez.** `eylem → sonuç → bedel`; hüküm cümlesi yasak; `kararRuhHali`
  asla kelime olarak gösterilmez.
- **Dallanma YOK.** Chapters dallanır, biz dallanmayız: kararlar birleşir, değişen şey
  bilgi/para/bağ/tohum. Dallanmada yazılanın çoğunu kimse görmez; bizde her şey oynanır,
  sadece farklı anlama gelir. Ayrıca dallanma bütün Nurcan mimarisini yıkar.

### Ve bir uyarı: Mavi Ay laneti

Dizide 3. sezonda ikili kavuşunca dizi öldü — reyting 9. sıradan 49'a düştü.
"İki başrolü kavuşturma" kuralının adı o diziden geliyor.

`cengoBag` tam olarak bir "kavuşacaklar mı" sayacı. Eski sözleşmedeki şu satır
farkında olmadan buna karşı yazılmış bir sigorta:

> *"Sıcaklık onay değildir. Bağ güçlendikçe kirli kararlar daha çok acıtır."*

**Bozma.**

---

## 7. AÇIK OLANLAR

- **Oyunun ve ajansın adı.** Mavi Ay'ın "Blue Moon"u gibi, ikisi birden olacak bir şey.
- **Sahibi İngilizce esprinin tuttuğunu hissedebilecek mi?** Proza taşınabilir, ama son
  söz sahibinin. Taze göz yöntemi burada devreye girer.
- **Konuşma ekranının tasarımı** — sprite yerleşimi, balon, sıra yönetimi.
- **Sahnede arama ekranı gerçekten gerekli mi** — kâğıt üstünde pilot yazılınca belli olur.

---

## 8. SIRADAKİ ADIM

**Tek bir vakayı kâğıt üstünde baştan sona yaz.** Dört ekranın hepsi, gerçek metinle,
kod yazmadan. Hafif bir Mavi Ay vakası; pilot işi görür.

Bittiğinde iki şey netleşir: konuşma ekranının nasıl duracağı, ve arama ekranının
gerçekten gerekip gerekmediği. Kâğıt üstünde "bu ekran gereksizmiş" demek bedava.

**İlk iki vaka hem tek başına tatmin etmeli hem devamını merak ettirmeli** — çünkü
bedava olanlar onlar. Hangi vakanın bedava olacağı bir yazım kararıdır.
