# DEVİR NOTU — 22 Eylül 2026

> Bir sohbet penceresinden ötekine devir. **Önce `CLAUDE.md`'yi oku** (sözleşmeler,
> tuzaklar, komutlar orada). Bu belge onun üstüne yalnız **oturum durumunu** koyar:
> ne yapıldı, sahibi neyi bekliyor, sıradaki iş ne.
>
> Bu belge tarihlidir. İş ilerledikçe **güncellenir ya da silinir** — `CLAUDE.md` kalıcı
> bilgi, bu dosya geçici durumdur.

---

## 1. NEREDE DURUYORUZ

Son commit **`8725789`**, `main`'de, push edilmiş. Çalışma ağacı temiz.

| | |
|---|---|
| Doğrulayıcı | **PASS (5 uyarı)** — 13 kural |
| Test | **21/21** (+ `test_bozuk.js`, çıkış 0, gösteri betiği) |
| Görsel | **63/63** gömülü |
| Yayın | https://barbarosgursu-sudo.github.io/paravan/ |

**Cache uyarısı:** GitHub Pages tek 4.7 MB'lık `index.html`'i `max-age=600` ile sunuyor.
Sahibi değişikliği göremezse **`?v=6`** gibi bir sorgu eki ver — cache'i atlar. Service
worker yok, kontrol edildi. (Bir kez yaşandı; 10 dakika beklemek de çözüyor.)

---

## 2. BU OTURUMDA YAPILANLAR (11 commit)

### ChatGPT incelemesi kapandı
- `0725395` **A-5** — V3'te çıkarım yokluktan değil pozitif kanıttan geliyor.
- `47b1972` **A-3** sahibince olduğu gibi bırakıldı; üç çözüm yolu denendi, üçü elendi,
  ölçümleriyle `inceleme_chatgpt.md`'de. Tekrar açılırsa dördüncü yol gerekir.
- `72ec929` **A-4** — Kaya'nın kendi el yazısıyla defteri. **Açık bulgu kalmadı.**

### Görseller
- `bb9fea7` + `e0a7aaf` **Paket 6** — `v1_merdiven` (kanona aykırı bina) ve
  `portre_ilyas_v2` (olmayan temiz yanak) yeniden üretildi. Sayım değişmedi.
- `3346caf` + `787064d` + `c71da8d` **Paket 7** — Cengo–Peri ikili kareleri,
  dört yeni slot. **Sezon 59'da kapanmıştı, 63'e açıldı** (sahibinin kararı).

### Arayüz / mekanik
- `173a781` **Zincir defteri** — Defter iki sekme oldu (Zincir | Anı). Ulaşılan her
  çıkarımın türetme ağacı. 21 çıkarım başlığı yazıldı (sahibinin onayıyla).
- `7629ebd` **Cengo'nun sesi bağa göre değişiyor** — 17 karar sonucunda üç sıcaklık
  kademesi (`cengo_sonuc`).

### Eklenen koruma katmanları
| | ne kolluyor |
|---|---|
| K12 | başlıksız çıkarım → ekranda ham kimlik |
| K13 | `cengo_sonuc` eşik sırası + `varsayilan` eksikliği |
| `test_tahta.js` | tahtanın hak edilmemiş olgu sızdırmaması |
| `test_cengo_gorsel.js` | motor `ESIKLER` ↔ `CENGO_GORSEL` eşlemesi |
| `test_cengo_satir.js` | üç kademe, "karar öncesi bağ", anı defteri tekrarı |
| `arac_tahta_denetim.js` | çıkarım başlığı vs garanti kümesi (insan denetimi) |

**Hepsi negatif sınandı** — kasten bozulup yakaladıkları doğrulandı. Yeni koruma
eklerken aynısını yap; yakalayamayan test işe yaramaz.

---

## 3. SAHİBİNİN CEVAP BEKLEDİĞİ İKİ SORU — ✅ İKİSİ DE KAPANDI (22 Eylül)

Geçmiş kayıt olarak duruyor; ikisi de cevaplandı ve uygulandı. **Sıradaki iş §4'te: SES.**

### 3.1 · `V1/reddet` anı notu görselle çelişiyor — ✅ KAPANDI (`29dcd4e`)

Sahibi oynarken buldu. Aynı ekranda:
- **Anı defteri:** *"…bu ay eve bir kuruş girmedi, **Cengo'nun yüzü asık**."*
- **Görsel:** `cengo_yoldas` — ikisi gülümseyerek bakışıyor.

Sebep: `reddet` kararı bağı **+2** yükseltiyor (Cengo omurgaya saygı duyar), görsel
Yoldaş karesine geçiyor. Anı notu ise suratını paraya bağlıyor.

**Ölçüldü: bütün oyunda TEK çelişki bu.** Sistematik değil. Çelişki görselden önce de
vardı (metin mekanikle çelişiyordu); görsel onu görünür kıldı.

Mevcut satır (`kisiler.json` → `defter.V1.reddet`):
> Reddettim. Onurluydu belki, ama bu ay eve bir kuruş girmedi, Cengo'nun yüzü asık. Onur karın doyurmuyor.

Sunulan üç yol:
- **A.** Cengo'yu cümleden çıkar: *"…bir kuruş girmedi. Onur karın doyurmuyor."*
- **B (önerilen).** Endişeyi koru, yüzü değiştir:
  *"…bir kuruş girmedi, Cengo hesabı iki kez saydı. Onur karın doyurmuyor."*
- **C.** Dokunma.

**Sahibi "senin fikrin ne" dedi; B uygulandı**, tek değişiklikle: `hesabı` yerine
**`kasayı`**. Gerekçe — kararın `sonuc` metni bir satır önce *"kasa erir"* diyor, aynı
nesneye dönmek satırı ona bağlıyor; ve `Cengo rakamı yazdı, kasaya koydu` kanonda zaten
var, yani yeni kanon eklenmedi. Yeni hâli:

> Reddettim. Onurluydu belki, ama bu ay eve bir kuruş girmedi, Cengo kasayı iki kez saydı.
> Onur karın doyurmuyor.

Asıl mesele görsel değildi: `reddet` bağı **+2** yükselten karardır, yani metin
**mekanikle** çelişiyordu; ikili kareler onu yalnızca görünür kıldı. Sahibi sözcüğü
beğenmezse tek satırlık geri alma — `kisiler.json` satır 203.

### 3.2 · Yoldaş karesi "nötr varsayılan" için fazla sıcak — ✅ KAPANDI (takasla)

Bağımsız bir gözlem, çelişki taraması sırasında fark edildi. Yoldaş kademesi bağ −1 ile
+2 arasını kaplıyor — **oyunun çoğu orada geçiyor**. O kare ikisinin gülümseyerek
bakışmasını gösteriyor. Sonuç: soğuk bir karardan sonra bile (`kuru_rapor`, bağ 0 → −1,
hâlâ Yoldaş) gülümseyen kare çıkıyor; üstelik Cengo satırı *"dosyayı aldı, arşive koydu,
soru sormadı"* diyorken.

Metin taraması bunu yakalamaz — çelişki kelimede değil **tonda**.

**Çözüm yeniden üretim değil, takas çıktı.** Dört kare gömülü base64'ten çıkarılıp yan
yana konunca görüldü ki `cengo_yoldas` ile `cengo_yakin`'in sıcaklığı **ters**: Yoldaş'ta
duran kare setin en sıcağı (ikisi gülümsüyor), Yakın'da duran ise sessiz ve gülümsemesiz.
`build_html.js` → `CENGO_GORSEL`'de ikisi takas edildi; **üretim yok, sayım 63'te kaldı.**

Merdiven artık tek yönde yükseliyor: sırtı dönük → sessiz bakışma → gülümseme → uyuyakalma.
Dosya adları kademe adlarıyla bilerek eşleşmiyor — tablonun üstündeki yorum bunu söylüyor,
geri çevirme. Ayrıntı ve çıkan dersler: `gorsel_promptlari_2.md` PAKET 8.

---

## 4. SIRADAKİ İŞLER (sahibinin listesi, öncelik sırasıyla)

### 🔴 Tek gerçek eksik: SES
`ses/` içindeki **5 dosya sentetik yer tutucu** — 12 kHz, 0.1–0.6 sn, telefon kalitesinde
bip. Gerçek efektle değişmeli. Sipariş metinleri `ses_promptlari.md` BÖLÜM 2'de hazır.

Efekt **müzik değil** — Suno/Udio üretemez. Metinden efekt üreten bir araç ya da
freesound gibi hazır kütüphane gerekiyor. Sahibine "nereden nasıl toplarız" çıkarılacak.

`test_ses.js` üç yeri eşliyor (EFEKT tablosu, `efektCal` çağrıları, `ses/` klasörü);
yeni ses eklerken **üçüne birden** ekle.

### 🟡 Sahibinin karar vermediği üç tasarım sorusu (Fable incelemesinden)
1. **`para 0 + vicdan artı` kararlar "temiz" mi sayılmalı?** Dört karar böyle. Borçluyken
   120 binlik işi reddetmek cebinden çıkarmıyor ama vazgeçilen ücret var. Değiştirilirse
   ruh hâli dağılımı kayar (temiz 11 → ~7).
2. **"Çoğu insan ne yapardı?" paneli kalsın mı?** `build_html.js` içinde. Oranlar elle
   yazılmış ve bunu dürüstçe söylüyor, ama "oyun not vermez" sözleşmesiyle gerilimli.
3. **Künye tanışma koşulları ipucuna bağlı olması bilinçli mi?** Kaya `polis_kaza`'ya,
   Ceyda `ceyda_saat`'e bağlı; o kaynağı açmayan oyuncu onları V6'da bile görmüyor.

### 🟢 Açık bırakılmış işler
- **Paket 5 görselleri** (4: kriz kutusu + sezon sonu) — slot veride hiç açılmamış,
  önce küçük bir arayüz işi gerekiyor. `gorsel_promptlari_2.md` PAKET 5.
- **K10 kör noktası** — doğrulayıcı yalnız varsayılan metin varyantını denetliyor.
- **Cengo satırı / anı defteri çakışması** — `kuru_rapor`, `cengoya_birak`, `gecistir`,
  `oyunu_surdur`'da aynı replik iki kez okunuyor. Bu özellikten ÖNCE de vardı; sahibinin
  prozası olduğu için dokunulmadı. `cengo_bag_mekanigi.md` §10.

### ⚪ Sonraki faz (bilerek ertelendi)
Android: Capacitor, görselleri base64'ten çıkarma, donanım geri tuşu, erişilebilirlik,
`final_tablo_plani.md`'deki sezon sonu istatistik tablosu.

---

## 5. SAHİBİYLE ÇALIŞMA BİÇİMİ (bu oturumda oturmuş düzen)

**Kanona ekleme yapmadan önce onay al.** Nereye ne ekleyeceğini söyle, onaylasın, sonra
yap. Bu oturumda üç kez işledi: A-4/A-5 kanon eklemeleri, 21 çıkarım başlığı, 17×3 Cengo
satırı. Hepsinde **önce taslak sunuldu, okundu, sonra uygulandı** — ve her seferinde
taslakta yakalanan bir hata çıktı. Kod yazmadan önce metni göstermek ucuz.

**Sahibinin prozasına dokunma.** Kendi yazdığın metni düzeltmek serbest; onun cümlesini
değiştirmek öneriyle olur. Bu ayrım bu oturumda iki kez belirleyici oldu.

**"Şimdilik böyle devam edelim" = onay.** Taslaklar kabul edildi demektir.

**Sahibi oynayarak test ediyor** ve bulduğu şeyler gerçek çıkıyor. Bu oturumda beş bulgu:
izbe merdiven, İlyas'ın yarasız yanağı, Defter'in boşluğu, ilişkinin düz tonu, ve
"Cengo'nun yüzü asık" çelişkisi. **Hiçbiri testlerden geçmedi — hepsini gözle buldu.**
Bir şey bittiğinde ona "neye bakayım" diye somut rota ver.

---

## 6. BU OTURUMDA ISIRAN DERSLER

Hepsi `CLAUDE.md`'ye ve `gorsel_promptlari_2.md` PAKET 6-7'ye işlendi; özet:

**Görsel siparişi**
- Stil çekirdeğinin tamamı yazılmalı. Bir kez yarısı eksik yazıldı; **dikey kompozisyon**
  unutulmuştu ve yatay gelseydi ancak gömdükten sonra fark edilirdi.
- Büro mimarisi kanon: *uzun pencere, arkada Haliç, geniş ahşap masa, tek lamba* — dört
  gömülü görselde tanımlı. Oda çıpası **`karar_temiz.jpg`**, yenisi üretilmez.
- Kadrajdaki nesneler **tek tek sayılır.** "Dağılmış birkaç eşya" deyince üretici boşluğu
  yaldızlı monogramlı bir defterle doldurdu — üstelik A-4 kanonuyla çelişiyordu.
- **Çekingenlik ≠ kaçınmak.** "Birbirlerine bakmasınlar" yazınca dört kare de küs çıktı.
  Birbirine bakıp söylememek çekingenliktir; bakmamak küslüktür.
- **Ağır yasak listesi olumlu talimatı ezer.** Altı maddelik yasak yazınca üretici en
  güvenli yere kaçtı. Tek net olumlu sahne yaz, yasağı tek satıra indir.
- **Yön talimatı geometriyle yazılır.** "Sağ yanağını görüyoruz" ters anlaşıldı;
  "burnu kadrajın sağına baksın, kulağı solunda kalsın" ilk seferde tuttu.
- **Rötuşun sınırı:** silinecek bölgeden yapısal bir çizgi (basamak kenarı) geçiyorsa
  klonlama tutmaz, yeniden üretim şart.

**Metin / veri**
- Cümle silerken **sarkan tire** kalıyor. Otomatik kontrol yakalamadı; 17 metni tek tek
  okuyunca iki kırık çıktı ("Belki en kolayı — İpi çekmediğin için").
- **Karar kimlikleri vakalar arası benzersiz DEĞİL** (`koz_yap` hem V3 hem V4'te).
  Olgu adları benzersiz (K11), kararlar değil. Ararken vakaya kapsa.
- Çıkarım kimliği yanıltır: `ilyas_supde` adında "ilyas" geçiyor ama ifadesi `ilyas_isim`
  istemiyor — başlıkta isim geçseydi sızıntı olurdu.

**Test**
- `JSON.stringify(undefined)` dizgi değil; teşhis satırında `.slice` çağırma, test çöker.
- Kapılı kararlar basit koşumda açılmaz; yapısal soruları **veriden** sor, motordan değil.

---

## 7. CENGO ÖZELLİĞİNİ OYUNDA GÖRMEK İÇİN ROTALAR

Normal oyunda bağ **0'dan** başlar → Yoldaş kademesi → **kararın özgün cümlesi**, yani
bugünkü metin. Fark görmek için uca gitmek gerekir. İki rota motorla doğrulandı:

**Soğuk:** V1 *"Temiz 'kaza' raporu ver"* → V2 *"Rahatlatıcı bir yalan kur"* →
V3 *"Tanığı 'güvenilmez' diye rapor et"*
> ▸ Cengo tek kelime etmedi. Etmesi için önce bir şey beklemesi gerekirdi.

**Sıcak:** V1 *"İşi reddet"* → V2 *"Sadece 'aldatmıyor' de, borcu sakla"* →
V3 *"Tanığı 'güvenilmez' diye rapor et"* (aynı karar)
> ▸ Cengo bunu kaldıramaz. En çok da sen yaptığın için.

Aynı fiil, iki farklı adam. Tasarımın kalbi: **sıcaklık onay değildir** — yakınken
ihanet daha çok acıtır.

**Not:** kare ve gösterge kararın SONRASINI, Cengo satırı ÖNCESİNİ okur. İkisi de doğru,
farklı anlara bakarlar.
