# Paravan Dedektiflik — ChatGPT taze göz incelemesi

> **DURUM (20 Eylül 2026): altı bulgu uygulandı, ikisi AÇIK.** Açık olanlar yeni içerik
> gerektiriyor (yeni olgu / yeni metin), o yüzden ayrı ele alınacak — aşağıda
> **AÇIK** başlığı altında. Uygulananların başında ✔ ve commit hash'i var.

**Tarih:** 20 Eylül 2026 · **Kapsam:** `game_data.json`, `kisiler.json`, `prolog.json`,
`motor.js` · **İnceleyen:** ChatGPT (dosyalar yüklenerek; canlı sayfa 4,8 MB olduğu
için araç tarafında sınıra takılmış, UI hakkında yorum yapmamış).

**Yöntem notu:** İnceleme, doğrulayıcının yapısal olarak yapamadığı şeye yönlendirildi —
K1 metinde ismin *geçip geçmediğine* bakabiliyor, ama "bu cümle ismi anmadan cevabı ele
veriyor mu" sorusunu ölçemiyor. Bir okur ölçebilir. Sonuç bunu doğruladı: iki gerçek
sözleşme ihlali de isim sızıntısı değil, **anlamsal** sızıntıydı.

**En değerli bulgu tek bir hata değil, bir kör noktaydı:** `kisiler.json`'un katman
metinlerini hiçbir şey denetlemiyordu. `test_sizinti.js` dosyayı okuyor ama yalnızca
`defter` kısmını kullanıyor; doğrulayıcı da onu sadece K9 tohum araması için ham metin
olarak yutuyordu. İki ihlal de bu boşlukta oturuyordu.

---

## UYGULANANLAR

### ✔ 4d19ff2 · A-1 · İlyas künyesi, hak edilmemiş iki iddiayı birden veriyordu
**Dosya:** `kisiler.json` → İlyas → `iten_ilyas` katmanı.
**Eski metin:** *"Kaya'yı merdivende iten kişi. Ama husumeti yok — sanki biri onu sürmüş."*
**Sorun:** Bu katman `iten_ilyas` ile açılıyor; o da `ilyas_supde + foto_teshis`'ten
türüyor, yani **teşhis anında**. Cümledeki iki iddia o noktada kazanılmamış:
`ilyas_sebep_yok` V3'te `cengo_okuma` ile geliyor, "biri sürmüş" ise `el_var` türetilmişi
(= `iten_ilyas + ilyas_sebep_yok`). Künye ikisini birden bedavaya veriyordu ve
`cengo_okuma`'nın sürprizini öldürüyordu.
**Düzeltme:** Katman yalnızca hak edileni söylüyor ("Tanığın tarif ettiği yara ve
aksaklık onda"); sızan iki iddia `el_var` koşullu yeni bir katmana taşındı. Katman sırası
kronolojik (son eşleşen kazanıyor: `ilyas_tahsildar` → `iten_ilyas` → `el_var` → `eski_dava`).
**Doğrulama:** Tarayıcıda V3 boyunca künye izlendi — `foto_goster` sonrası yalnızca itiş
ve tarif, `cengo_okuma` sonrası "arkasında onu süren biri var".

### ✔ 4d19ff2 · A-2 · Ceyda künyesi, ÇÖZÜLMEZ olan `ceyda_pay`'i iddia ediyordu
**Dosya:** `kisiler.json` → Ceyda → `cavit_ceyda_sevgili` katmanı.
**Eski metin:** *"Cavit'in sevgilisi — Kaya ölmeden önce de. **Cinayetin bir ucu onda.**"*
**Sorun:** Olgunun kendi metni yalnızca "Cavit ile Ceyda sevgili — avukat/müvekkil değil."
Künye, Ceyda'nın cinayetteki payını iddia ediyordu — yani `ceyda_pay`, `kanon.belirsiz`
listesinde ve istisnası yok. Üstelik bir sonraki katman ("Mağdur mu, asıl aklı mı?
Okunamıyor") kendini yalanlıyordu.
**Düzeltme:** Cümle ilişkiyle sınırlandı: *"…Bu ilişki, Kaya'nın ölümüne bakışı değiştiriyor."*

### ✔ 4d19ff2 · Kör nokta kapatıldı: künye artık denetleniyor
**Eklenen:** `dogrulayici.js` → `kural1b_kunye` (K1 etiketiyle raporlanır).
Yalnızca **koşulun gerçekten var olduğunu** denetler — yazım hatası ya da silinmiş olgu,
katmanı sessizce ölü bırakır. `tanisma`, `katmanlar` ve `portre_katman` koşullarının
üçünü de kapsar; negatif sınandı.
**Bilerek yapılmayan:** isim sızıntısı kontrolü de yazıldı ve **çıkarıldı** — gerçek
veride dört yanlış pozitif üretti ("Kaya'nın dul eşi", "Nesrin'in kocası" sızıntı
değildir) ve doğru yapmak "hangi isim ne zaman kamuya açık" diye bulanık bir model
gerektiriyordu. Üstelik bulunan iki hatanın ikisi de isim sızıntısı değildi. Kurt masalı
anlatan bir kural, olmayan kuraldan kötüdür.
**Onun yerine:** `arac_kunye_denetim.js` — her katmanı, koşulunun hak ettiği olgu
metinleriyle yan yana basar. Sızıntıyı görünür kılan tablo buydu. Test değil, araç.
CLAUDE.md'de "künye değiştirince çalıştır" kuralı var.

### ✔ 59b344e · A-8 · `V6/hepsini_ifsa` → "En adil"
A-2'nin aynısı, kararın sonuç metninde. Ceyda'nın payı çözülmezken onu da kapsayan
toplu ifşaya "En adil" demek o payı hak edilmiş ilan ediyordu; "Adalet, bedelini
masumlara ödetir" cümlesi de eylemin adalet *olduğunu* varsayıyordu. İki koşullu varyant
da yeniden yazıldı; yeni metin aynı işi görüyor ama hükmü oyuncuya bırakıyor ve payı
açıkça açık tutuyor.

### ✔ ece076b · A-7 · Sonuç metinleri hüküm veriyor
**Taranan:** 40 kararın tüm `etiket`/`sonuc` metinleri; 12 aday bulundu.
**Uygulanan:** Yalnızca **bir** tanesi gerçek ihlaldi — `V3/polise_ver` *"Doğru olanı
yaptın."* diye açılıyordu. Kardeş kararlar zaten doğru kalıbı kuruyordu (eylem → sonuç →
bedel); kalıba döndürüldü: *"İlyas'ı polise teslim ettin."*
**Bilerek yapılmayan:** Kalan 11'i hüküm değil. "Onurlu ama ölümcül", "Dürüstsün ama saf"
oyuncunun seçimini değil **dünyanın tepkisini** anlatıyor ve hemen bedelini gösteriyor;
"En tehlikeli, en güçlü yol" taktiğin niteliği, ahlakı değil. Kesmek noir sesini
zayıflatırdı. Kural CLAUDE.md'ye yazıldı.

### ✔ c867f24 · A-12 · `V6/kaya_izi` metninde bulanık özne
*"…sevgilinin onu istemediğinden habersizdi"* ilk okumada Kaya'nın sevgilisi gibi
okunuyordu; kast edilen Ceyda'nın sevgilisi, yani Cavit. Yeni hâli: *"Karısının onu
aldattığından da, Cavit'in onu engel saydığından da habersizdi."* İsim hak edilmiş
(`kaya_izi` → `zincir_tam`, o olgunun metni zaten Cavit'le başlıyor).

---

## AÇIK — yeni içerik gerektiriyor

Üçü de aynı sınıftan: **çıkarım, kanıtın önüne geçiyor.** Oyuncunun eline verilen veri
sonucu destekliyor ama kanıtlamıyor; `truth` doğru olduğu için cümle doğru çıkıyor, ama
dedektiflik açısından çıkarım kazanılmamış. Düzeltmek yeni olgu ve/veya yeni metin
yazmak demek — araştırma bütçesini artırmak gerekmiyor, mevcut ipucuna somut ikinci bir
parça eklemek yetiyor.

### ○ A-3 · V5 · `cavit_azmettiren` çıkarımı
**Yer:** `game_data.json` → V5 → `knowledge.cavit_azmettiren` ve `clues.ilyas_gecmis`.
**Zincir:** `eski_dava + ilyas_mahkum` → `cavit_azmettiren`.
**Sorun:** İpucunun olgusal kısmı güçlü (Cavit yıllar önce İlyas'ın avukatı, deliller
kayboldu, İlyas ona bağımlı kaldı) ama bu "Cavit'in İlyas üzerinde **gücü vardı**"
sonucunu destekliyor; "Kaya'yı öldürmesini **Cavit emretti**" sonucunu tek başına
kanıtlamıyor. `meta` doğrudan atlıyor: *"Kendi cinayeti lazım olunca, elindeki bağlı
adamı kullandı."*
**Hafifletici:** `ilyas_mahkum` olgusunun kendi metni zaten "silah oldu" diyor, yani
boşluk raporun sandığından dar. Ayrıca oyuncu buraya gelirken elinde `el_var` (V3:
birisi İlyas'ı sürdü) ve `cavit_supheli` (V5) var.
**Öneri:** Aynı ipucuna cinayet gecesini Cavit'e bağlayan küçük ve somut ikinci bir
parça: arama kaydı, buluşma, ödeme, kısa bir not. Yeni olgu gerekebilir.

### ○ A-4 · V6 · `kaya_izi` kanıt yokluğundan kesin sonuç çıkarıyor
**Yer:** `game_data.json` → V6 → `clues.kaya_izi`.
**Sorun:** Metin *"Hiçbir yerde bir şüphe, bir hesaplaşma, bir öfke izi yok"* diyor,
`meta` ise *"Kaya bilmiyordu"* diye kesinleştiriyor. Şüphe belirtisi **bulunmaması**,
bilmediğinin kanıtı değil. Kaya biliyor ama belli etmiyor da olabilirdi ve oyuncu bunu
dosyadaki bilgilerle eleyemiyor.
**Neden önemli:** `kaya_biliyordu`, `belirsiz_istisna` ile V6'da **bilerek çözülen** tek
olgu — yani oyunun kesin cevap verdiği yer. Kanıt standardı tam da burada diğer
vakalardan düşük.
**Öneri:** `arastirma: 1` korunsun. `kaya_izi` içine doğrudan bilgi taşıyan ikinci bir iz:
ölümden kısa süre önce yazılmış özel bir kayıt, ya da Cavit–Ceyda arasında "hâlâ hiçbir
şeyden şüphelenmiyor" anlamını taşıyan bir belge. İkincisi Ceyda'nın payını çözmeden
Kaya'nın bilgisizliğini kanıtlayabilir — `ceyda_pay` sözleşmesini bozmaz.

### ✔ A-5 · V3 · `cengo_okuma` → "onu biri gönderdi" çıkarımı
**Yer:** `game_data.json` → V3 → `clues.cengo_okuma`.
**Sorun:** Cengo *"Böyleleri kendi aklıyla adam itmez — biri sırtına bindiyse iter"*
diyor; `meta` bunu gerçek olarak kaydediyor: *"İlyas tek başına değil. Arkasında onu
süren biri var."* Bilinen husumet veya para nedeni **bulunamaması**, üçüncü bir kişinin
varlığını kanıtlamaz. Oyuncuya hipotez değil doğru cevap veriliyor.
**Not:** A-1 düzeltildikten sonra bu cümle artık künyede değil, yalnızca burada —
yani yazarın kurduğu yerde. Sorun yerin değil, kesinliğin.
**Uygulanan (sahibinin onayıyla, 20 Eylül 2026):** (b) seçildi. Kanona eklenen yeni
gerçek — **İlyas o mahallede hiç çalışmaz, orada alacağı yoktur; ama cinayet gecesi tam
saatinde oradadır.** Çıkarım artık yokluktan değil pozitif bir boşluktan geliyor: o
adresi, o merdiveni ve o saati bilmesinin yolu yok, birinin söylemesi gerekiyordu.
`ilyas_sebep_yok` olgusu, `cengo_okuma`'nın metni ve meta'sı güncellendi. Cavit'in adı
geçmiyor (`sikistiran` V3'te açılmaz), `cengo_okuma` zaten `bedelsiz: true` olduğu için
bütçe değişmedi, V2'deki "kenar mahalle" kurulumuyla çelişmiyor.
**Bu eklemenin kısıtı:** bundan sonra İlyas'ın Kaya'nın mahallesiyle bir bağı olduğu
yazılamaz.

---

## ELENENLER — gerekçeli

**A-6 · YAN-A `cengo_cumle`.** Cengo'nun cümlesinden "suç Sevil'indi" sonucunun zorunlu
çıkmadığı doğru; ama ipucu `cengo_eski_dava`'ya ihtiyaç duyuyor (kayıtlarda Cengo'nun
adı) ve `meta` belirsizliği doğru koruyor: *"Sadakat mi, aptallık mı — Cengo bile
söylemiyor."* Yani `sevil_pay` açık kalıyor. Yazar açık söylemek yerine ima etmeyi
seçmiş; savunulabilir.

**C-1 · "Oyun aslında not veriyor" itirazı — mekanik olarak yersiz.** Kontrol edildi:
`kararRuhHali`'nin döndürdüğü `temiz/bedel/bosluk/kirli` isimleri oyuncuya **hiç
gösterilmiyor**; yalnızca `RUH_GORSEL` üzerinden atmosfer görseli seçiyorlar ve alt
metinleri de atmosferik ("sabaha karşı açılan bir pencere"). Sınıf adı CSS'e gidiyor,
görünmez. Raporun kendisi de bu ihtimali belirtmiş. Geriye kalan `vicdan` değişken adı
ve Cengo'nun ahlak hakemi konumunda olması — isimlendirme/tasarım eleştirisi, hata değil.

**C-2 · V6'nın yapısı.** "1 araştırma hakkı yanlış değil ama seçim baskısı yok, dar değil
ince" eleştirisi meşru; ancak V6'nın daralması yazarın bilinçli kararı ve CLAUDE.md'de
kayıtlı. A-4 düzeltilirse bu eleştirinin bir kısmı kendiliğinden hafifler.

---

## RAPORUN BULDUĞU BİR HATA BİZDE DEĞİL, PROMPT'TAYDI

İncelemeyi isteyen prompt'ta "kanon olarak ASLA çözülmeyen üç şey" yazılmıştı. Yanlış:
`kanon.belirsiz` üç olgu listeliyor ama `kanon.belirsiz_istisna` `kaya_biliyordu`'yu
V6'da çözülmek üzere ayırıyor. **Gerçekten çözülmeyen iki olgu var: `ceyda_pay` ve
`sevil_pay`.** CLAUDE.md düzeltildi (4d19ff2).
