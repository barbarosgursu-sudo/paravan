# Paravan Dedektiflik — Ses Sipariş Metinleri (Suno / Udio vb.)

**Nasıl kullanılır:** Görsellerde olduğu gibi — önce **STİL ÇEKİRDEĞİ**'ni ver, sonra o parçanın
**ÖZEL** kısmını ekle. Böylece 8 parçanın hepsi aynı dünyadan çıkar ve sahne değişince oyuncu
"başka bir oyuna geçtim" hissetmez.

Toplam: **8 müzik + 5 efekt**.

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

**Seviye:** parçalar −17 LUFS civarında geliyor, yer tutucular −20'ydi. Sekizi de
tamamlanınca hepsi tek seviyeye hizalanacak — tek tek uğraşma.

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

Kısa, kuru, tek seferlik. Müziğin üstünde duyulmalı ama onu bastırmamalı.
Hepsi **mono**, 0,1–0,6 saniye, sonunda kuyruk bırakmadan kesilsin.

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
