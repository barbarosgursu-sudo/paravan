# Paravan Dedektiflik — Ses Sipariş Metinleri

> ## ⛔ MÜZİK KALDIRILDI (19 Eylül 2026)
>
> **Sahibinin kararı: oyunda arka plan müziği yok.** Sekiz parçanın altısı
> üretilmiş, döngüleri kesilmiş, −18 LUFS'a hizalanmış ve oyuna gömülmüştü;
> müzikli hâli beğenilmedi ve katman tamamen söküldü — kod, dosyalar, testler.
> Oyun artık **sessizlik + kısa efektler** üzerine kurulu.
>
> **Canlı olan tek bölüm: BÖLÜM 2 — EFEKTLER (5).**
>
> Aşağıdaki müzik bölümleri (ev standardı, sekiz stil satırı, kesme noktaları,
> hizalama tarifi) **kayıt olarak duruyor** — iş listesi değil. Karar geri
> alınırsa sıfırdan başlanmaz; ama `build_html.js`'teki müzik motoru da
> silindiği için geri getirmek kod işi gerektirir (MUZIK tablosu, muzikCal/
> muzikBaslat/muzikDur, capraz geçiş, vakaModu ve dokuz çağrı yeri).
> `test_ses.js` müzik izini kasten kolluyor; geri getirilirse o test de
> bilerek güncellenmeli.
>
> **Lisans notu:** üretilen altı parça Suno'nun Free planındaydı ve Suno'nun
> şartlarına göre Free çıktıları yalnızca kişisel/ticari olmayan kullanım için;
> abonelik geriye dönük hak vermiyor. Müzik kaldırıldığı için bu sorun da
> ortadan kalktı. Efektler Suno'dan gelmiyor.

**Nasıl kullanılır (efektler):** Efektler müzik değil — Suno/Udio bunları
üretemez. Metinden efekt üreten bir araç ya da hazır kütüphane gerekir.

Toplam: **5 efekt.** (Müzik kaldırıldı — yukarıdaki nota bakın.)

---

## ✅ EV STANDARDI — `arastirma` kabul edildi (19 Eylül 2026)

İlk parça oturdu; **stil satırı ve ayarlar artık referans.** Kalan 7 müzik bunun
deltası olarak yazıldı — görsellerde `karar_temiz`'in yaptığı iş.

**Araç:** suno.com → **Advanced** (Simple'da stil alanı yok, vokal ekliyor) → model
`v6-mini`. Tam `v6` ücretli ve 1 dakikalık önizleme veriyor; mini yeterli çıktı.

**Ayarlar:**

| | |
|---|---|
| Lyrics | **boş** — bu sürümde ayrı Instrumental anahtarı yok, boş bırakmak enstrümantal demek |
| Vocal Gender | dokunma, ikisi de seçilmesin |
| Duration | Custom → 3 dk (uzun ham malzeme = temiz döngü kesme şansı) |
| Max Mode | Off (deneme turunda kredi harcama) |
| Weirdness | **%20–25** — bu müzik dikkat çekmemeli |
| Style Influence | **%75–80** — stil satırı spesifik, sıkı takip etsin |
| Variety / Personalize | Normal / Off |
| Exclude Styles | bu sürümde yok; "no vocals, no drums" stil satırında taşınıyor |

**Kabul edilen stil satırı (İngilizce — Suno stil alanı İngilizceyi daha iyi okuyor):**

```
instrumental istanbul noir ambient, pulseless low drone, sparse falling piano notes, distant rain, bass clarinet and ud fragments, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**Ölçüm (kabul edilen sürüm):** parlaklık ort. 473 Hz (karanlık), vurmalı yok,
gövde dinamiği ~6 dB, −17,4 LUFS. Bilinen eksik: 6 kHz üstü enerji %0,6 — yağmur/
cızırtı dokusu beklenenden zayıf geldi. Kabul edildi; sonraki parçalarda aynı
satır kullanıldığı için set kendi içinde tutarlı olacak.

**Döngü:** Suno dikişsiz döngü vermiyor, ham parça fade ile bitiyor. 3 dakikalık
hamdan `44,6 – 157,1 sn` aralığı kesildi, 5 sn eşit-güç çapraz geçişle başa
bağlandı → 112,5 sn dikişsiz. Araç: `arac_ses_olc.py` ölçer; kesme betikleri
oturum içinde yazıldı, tarif burada.

**Seviye:** parçalar −14 … −17 LUFS arasında geliyor, yer tutucular −20'ydi ve
parçalar arası fark 3 dB'yi buluyor. Sekizi de tamamlanınca hepsi tek seviyeye
hizalanacak — tek tek uğraşma.

**Gelen parçanın tamamı kullanılmıyor.** Suno 3 dakikalık bir yay çiziyor: sakin
giriş, hareketlenen orta, yatışan final. Hangi bölümün alınacağı parçanın briefine
göre değişiyor, o yüzden her parçada 2–3 aday kesilip dinleniyor.

### Gömülenler

| parça | ham | alınan aralık | döngü | not |
|---|---|---|---|---|
| `arastirma` | 180 sn | 44,6 – 157,1 | 112,5 sn | parlaklık 473 Hz, vurmalı yok |
| `masa` | 219 sn | 111,9 – 148,6 | 36,7 sn | orta bölüm; sakin giriş de kesildi ama sahibi bunu seçti |
| `giris` | 215 sn | 27,1 – 61,9 | 34,8 sn | parlaklık 862 Hz — setin en parlağı, sahibi bilerek seçti |
| `karar` | 215 sn | 8,0 – 35,4 | 27,4 sn | 288 Hz, atak 41 — setin en karanlık ve en durağanı |
| `sonuc` | 209 sn | 168,1 – 201,4 | 33,3 sn | 290 Hz — `karar`'ın 288 Hz'ine bilerek komşu seçildi |
| `huzun` | 223 sn | 74,2 – 170,2 | 96,0 sn | 652 Hz — setin kasıtlı sıcak istisnası; uzun tutuldu |

**Altısı −18,0 LUFS'a hizalandı (19 Eylül 2026).** Gelen parçalar −13,7 … −18,0
arasında savruluyordu; 4,3 dB fark ekran değişiminde duyuluyordu. Hizalama ham
dosyadan yeniden keserek yapıldı (kes + çapraz geçiş + kazanç → tek kodlama),
çünkü hazır mp3'e kazanç uygulamak ikinci bir kayıplı kodlama demekti. Tepe
tavanı −1 dBFS. Kalan iki müzik geldiğinde aynı hedefe hizalanacak; kesme
noktaları ve çapraz geçiş süreleri yukarıdaki tabloda, tarif
`/tmp` dışında kalmadı diye buraya yazıldı:

| parça | ham dosya | aralık | çapraz geçiş |
|---|---|---|---|
| `arastirma` | Rain on the Bosphorus | 44,6 – 157,1 | 5 sn |
| `masa` | Ajans masası | 111,9 – 148,6 | 4 sn |
| `giris` | giris | 27,1 – 61,9 | 4 sn |
| `karar` | karar | 8,0 – 35,4 | 7 sn |
| `sonuc` | Sonuc | 168,1 – 201,4 | 6 sn |
| `huzun` | Huzun | 74,2 – 170,2 | 8 sn |

İki gözlem, ikisi de sahibinin kararıyla kapandı:

- `masa`: aynı stil satırı kalıbı `arastirma`'dan iki kat yoğun bir parça üretti
  (atak 100–165 vs 36–90). Brief `masa`'yı daha durağan istiyordu; sahibi yoğun
  sürümü seçti.
- `giris`: parlaklık 796 Hz geldi (gömülü ikisi 430–473). Karanlık final bölümü
  de aday olarak kesildi (387 Hz) ama sahibi parlak olanı seçti — giriş ekranının
  bir tık farklı duyulması kasıtlı.

**Uzun dinlenen iki parça uzun tutulur.** `arastirma` ve `huzun` araştırma
ekranında çalıyor (`vakaModu()`: V4 → `huzun`, V6 → `final`, gerisi → `arastirma`),
yani oyuncunun en uzun kaldığı yer. Bu ikisinde döngü uzunluğu karakterden önce
gelir: `huzun`'da daha yumuşak ama 39 sn'lik aday varken 96 sn'lik olan seçildi.
Kısa geçiş ekranlarında (`giris`, `karar`, `sonuc`) 27–35 sn yeterli.

**Art arda gelen ekranların rengi eşlenir.** `karar` → `sonuc` geçişi oyunda her
vakada yaşanıyor. `karar` 288 Hz'de kapanınca `sonuc` için de 290 Hz'lik bölüm
seçildi; parçanın 428 Hz'lik daha açık bölümü de aday olarak kesilmişti ama
288→428 sıçraması "çözülme" yerine "ferahlama" gibi duyulma riski taşıyordu —
brief'in tam istemediği şey. Aday keserken hangi ekranın hangisinden sonra
geldiğine bak.

**Çapraz geçiş uzunluğu malzemeye göre.** Durağan parçada dikiş affetmiyor:
`karar` kendi içinde 0,7 dB dalgalanıyor, bu yüzden normalde sorun olmayacak
2,4 dB'lik bir birleşme sırıttı. 3 sn yerine 7 sn geçişle temizlendi. Kural:
malzeme ne kadar durağansa geçiş o kadar uzun (hareketli parçada 3–5 sn yeter,
durağanda 7–12 sn). `arac_ses_olc.py` bunu ölçmüyor; parçayı iki kez arka arkaya
ekleyip birleşmeyi parçanın kendi tipik dalgalanmasıyla karşılaştıran kontrol
oturum içinde yazıldı, tarif burada.

**Sonuç: set tek bir renkte değil, bir bant içinde.** Parlaklık 430–860 Hz,
yoğunluk 36–165 arası tolere ediliyor. Kalan parçalarda bu iki ölçü tek başına
ret sebebi değil; ölçüp bildiriyorum, karar sahibinin.

---

Üretilen dosyalar `ses/` klasörüne, **aşağıdaki adlarla birebir** konur. Ad tutmazsa oyun o sesi
sessizce atlar (hata vermez, ama ses de gelmez).

---

## ⭐ STİL ÇEKİRDEĞİ (her prompt'un başına konur)

> Enstrümantal, sözsüz, atmosferik bir parça — "İstanbul Noir". Yağmurlu, isli, yorgun bir şehrin
> gece müziği. Karakteri **soğuk ama insani**: ağırlıklı olarak koyu ve mesafeli, içinde çok az,
> değerli bir sıcaklık lekesi (tek bir ud ya da klarnet cümlesi, uzaktan bir piyano notası).
> Doku: kontrbas ya da alçak yaylı pedal, bant doygunluğu ve hafif plak cızırtısı, geniş oda
> yankısı. Anadolu tınısı **folklorik pastiş olmadan** sızsın: Hicaz ya da Nihavend makamından
> tek bir ezgi kırıntısı, ud / kanun / ney / bas klarnet, noir caz ile karışmış.
> Tempo yavaş (60–80 BPM) ya da nabızsız. Davul ya hiç yok ya da fırçayla, arkada.
> Dinamik dar: parça öne çıkmaz, altına yerleşir — oyuncu ekranda **metin okuyor**.
> Dramatik yükselişler, sinematik "trailer" patlamaları, koro, vokal, söz YOK.
>
> **Döngü şartı:** Parça kusursuz döngüye girmeli — sonu başına dikişsiz bağlanmalı.
> Sonda "bitiş" akoru, fade-out ya da sessizlik olmasın.

---

## 🎛 SUNO STİL SATIRLARI — 8 müzik

Hepsi kabul edilen `arastirma` satırının deltası: **baş ve son aynen korunur**,
yalnızca ortadaki karakter tarifi değişir. Böyle olduğu için sekiz parça aynı
dünyadan çıkar. Ayarlar her parçada AYNI (yukarıdaki EV STANDARDI tablosu) —
süre hedefi kısa olsa bile **Duration yine 3 dk**, çünkü uzun ham malzeme
olmadan temiz döngü kesilemiyor.

Aşağıdakiler Styles alanına olduğu gibi yapıştırılır. Lyrics boş kalır.

**1. `prolog` — Düşüş**
```
instrumental istanbul noir ambient, solo piano with long silences, fragile and sparse, bittersweet, a few sustained strings, weary not angry, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**2. `masa` — Ajans masası**
```
instrumental istanbul noir ambient, motionless low organ pedal, distant city hum, occasional single ud note, almost no melody, waiting and calm, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**3. `giris` — Yeni dosya**
```
instrumental istanbul noir ambient, slow walking upright bass line, one questioning bass clarinet phrase, quiet curiosity, gentle forward motion, no threat, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**4. `arastirma` — Araştırma** ✅ *kabul edildi, gömüldü*
```
instrumental istanbul noir ambient, pulseless low drone, sparse falling piano notes, distant rain, bass clarinet and ud fragments, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**5. `karar` — Karar**
```
instrumental istanbul noir ambient, single held low note, slow creeping dissonance underneath, held breath, tense by stillness not volume, no acceleration, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**6. `sonuc` — Sonuç ve defter notu**
```
instrumental istanbul noir ambient, lone ud, slow and resigned, tension released into quiet weight, no triumph, subdued, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**7. `huzun` — Hüzünlü keşif (V4)**
```
instrumental istanbul noir ambient, tender and warm, slow soft strings with gentle ud, mournful but restrained, warmer than the rest, no mystery or threat, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

**8. `final` — Final**
```
instrumental istanbul noir ambient, low strings thickening, distant ud, one sustained bass note, heavy mourning, closure without victory, no swell or climax, hicaz hint, tape saturation, vinyl crackle, no drums, no vocals
```

Aşağıdaki BÖLÜM 1, her parçanın **sahnesini ve niyetini** anlatır — stil satırı
tutmazsa oraya bakıp satırı düzeltiriz. Sipariş verirken kullanılan şey yukarıdaki
satırlardır.

---

# BÖLÜM 1 — MÜZİK (8)

## 1. `prolog.mp3` — Düşüş
**Sahne:** Peri'nin geçmiş ihtişamı ve avukatın onu soyduğu sabah. Oyunun ilk sesi.
**ÖZEL:** Yalnız bir piyano ya da çok az yaylı; aralarında uzun sessizlikler. Geçmişin
buruk tatlılığı ile şimdinin boşluğu yan yana. En kırılgan parça bu olsun — oyuncu daha hiçbir
şey bilmiyor, sadece bir kadının her şeyini kaybettiğini duyuyor. Öfke değil, **yorgunluk**.
~90 saniye.

## 2. `masa.mp3` — Ajans masası
**Sahne:** Hangi dosyaya bakacağını seçtiğin ekran. Oyun buraya defalarca döner.
**ÖZEL:** Sakin, bekleyen, neredeyse hareketsiz. Alçak bir org ya da yaylı pedal, uzakta
şehir uğultusu, ara ara tek bir ud notası. Ezgi neredeyse yok — bu bir nefes alma ekranı.
Tekrar tekrar duyulacağı için **özellikle göze batmayan** bir parça olmalı. ~80 saniye.

## 3. `giris.mp3` — Yeni dosya
**Sahne:** Vakanın anlatıldığı giriş ekranı. Kısa kalınan bir ekran.
**ÖZEL:** Merak. Hafif bir ileri itiş — nabız var ama tehdit yok. Kontrbasta yürüyen alçak bir
hat, üstünde soru soran tek bir klarnet ya da ney cümlesi. Kapı aralanıyor, henüz içerisi
görünmüyor. ~60 saniye.

## 4. `arastirma.mp3` — Araştırma
**Sahne:** Kaynak seçme ve kanıt okuma. **Oyuncunun en uzun kaldığı ekran.**
**ÖZEL:** Bu parça oyunun bel kemiği; defalarca ve uzun süre dinlenecek. Bu yüzden
**dikkat çekmemeli** — akılda kalıcı bir tema değil, bir doku olsun. Nabızsız ya da çok yavaş;
alçak bir uğultu, ara ara tek tek düşen notalar, uzakta yağmur hissi. Ezgi kırıntıları seyrek
gelsin ki yirminci dinleyişte de yormasın. En sade parça bu. ~120 saniye (uzun olsun, döngü
dikişi seyrek duyulsun).

## 5. `karar.mp3` — Karar
**Sahne:** "Bu karar geri alınamaz." yazan ekran.
**ÖZEL:** Gerilim, ama **gürültüyle değil** — daralarak. Tek bir alçak nota tutulur ve altından
yavaşça bir uyumsuzluk sızar. Nefesin tutulduğu an. Hızlanma, vurmalı, "aksiyon" yok; tersine
her şey durur. Oyuncu burada birine ihanet etmek üzere. ~60 saniye.

## 6. `sonuc.mp3` — Sonuç ve defter notu
**Sahne:** Kararın sonucu, Peri'nin anı defterine düştüğü not.
**ÖZEL:** Çözülme — ama rahatlama değil. Gerilim bırakılır, yerine sessiz bir ağırlık kalır.
Yalnız bir enstrüman (ud ya da piyano), yavaş, kabullenmiş. "Oldu bitti, artık taşıyacaksın."
Zafer tonu kesinlikle olmasın; hiçbir karar burada doğru değil. ~70 saniye.

## 7. `huzun.mp3` — Hüzünlü keşif (V4)
**Sahne:** "Küçük Hasta" vakası — Kaya'nın kimseye söylemediği iyiliğinin ortaya çıktığı dosya.
**ÖZEL:** Oyunun tek **şefkatli** parçası. Soğuk palet burada biraz ısınır: sıcak leke diğer
parçalardan belirgin olsun. Yavaş, yumuşak, ağlamaklı ama sulu gözlü değil. Ölmüş iyi bir adamın
arkasından çalan müzik. Gizem ya da tehdit tonu **olmasın** — bu vaka bir suçu değil, bir iyiliği
ortaya çıkarıyor. ~90 saniye.

## 8. `final.mp3` — Final
**Sahne:** V6 "Kaya Biliyor muydu" vakası ve Dava Kapandı ekranı.
**ÖZEL:** Ağırlık. Tüm parçalar içinde en dolusu, ama yine patlamasız — kalabalıklaşan bir
yas. Alçak yaylılar, uzaktan ud, altta duran tek bir bas nota. Sonunda kimse kazanmadı;
müzik de kazandığını söylemesin. Kapanış hissi versin ama **zafer vermesin**. ~110 saniye.

---

# BÖLÜM 2 — EFEKTLER (5)

Kısa, kuru, tek seferlik. Hepsi **mono**, 0,1–0,6 saniye, sonunda kuyruk
bırakmadan kesilsin.

**Müzik kaldırıldığı için bu beş efekt artık sesin tamamı.** Aşağıdaki
tarifler müziğin üstünde duyulacakları varsayımıyla yazılmıştı; sessizliğin
üstünde çok daha açıkta kalacaklar. Özellikle `efekt_dokun` için yazılan
"neredeyse fark edilmemeli" maddesi şimdi daha da kritik — sessizlikte her
dokunuş bir olay gibi duyulabilir. Sipariş verirken sessiz bir odada
dinleneceklerini düşün; kuru ve alçak tut, parlaklıktan kaçın.

## 9. `efekt_dokun.mp3` — Buton dokunuşu
Çok kısa, yumuşak bir tık. Dijital "bip" değil — tahta masaya konmuş bir şeyin tokluğu.
Sık duyulacağı için **neredeyse fark edilmemeli**. ~0,1 sn.

## 10. `efekt_kaynak.mp3` — Kaynak açma
Bir dosyanın açılması: kâğıt hışırtısı, karton klasörün aralanması. Tek hareket, kuru. ~0,4 sn.

## 11. `efekt_kilit.mp3` — Kilitli
Oyuncu henüz açamayacağı bir şeye dokunduğunda. Kısa, alçak, olumsuz ama sert değil —
kapalı bir çekmecenin tıkırtısı. Ceza gibi değil, "henüz değil" gibi. ~0,25 sn.

## 12. `efekt_muhur.mp3` — Karar mührü
Kararın geri alınamaz biçimde kapandığı an. Tek, alçak, ağır bir vuruş — mühür ya da kapanan
ağır bir kapak. Oyundaki en ağır efekt bu. ~0,6 sn.

## 13. `efekt_alev.mp3` — Cengo bağı değişti
Çok hafif, sıcak bir parıltı — bir kibritin tutuşması gibi ama yumuşak. ~0,3 sn.

---

# TEKNİK GEREKLİLİKLER

| | Müzik | Efekt |
|---|---|---|
| Biçim | `.mp3` | `.mp3` |
| Kanal | stereo | mono |
| Bit hızı | 96 kbps yeter | 96 kbps |
| Süre | 60–120 sn, **dikişsiz döngü** | 0,1–0,6 sn |
| Dosya boyutu | ~1 MB | ~10 KB |

**Toplam hedef: 8–10 MB.** Sesler `index.html`'e **gömülmez** — `ses/` klasöründen akıtılır.
Gömülürse dosya 15 MB'ı aşar, müzik akıtılamaz ve ilk açılış yavaşlar.

Oyun aynı anda yalnızca çalan parçayı indirir; 8 parçanın tamamı asla birden yüklenmez.

---

# SESİN NURCAN KURALI

Görsellerde olduğu gibi: **müzik de bilgi taşır.** Bir parça, oyuncunun henüz keşfetmediği bir
şeyi ele vermemeli.

- Araştırma müziği vakadan vakaya değişmez. Değişseydi, "bu vakada iş kötü" bilgisini oyuncu
  daha hiçbir şey bulmadan duyardı.
- Bu kuralın iki bilinçli istisnası var: **V4** (`huzun`) ve **V6** (`final`). İkisi de güvenli,
  çünkü oyuncu V4'e zaten hasta bir çocuk dosyası olduğunu bilerek, V6'ya da finalde olduğunu
  bilerek giriyor.
- Efektler asla sonucu ele vermemeli: `efekt_kaynak` açılan kaynağın iyi mi kötü mü haber
  getirdiğini belli etmemeli — hep aynı hışırtı.
