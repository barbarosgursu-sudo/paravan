# KURALLARI TEK DOSYADA TOPLAMA — PLAN VE DURUM

> **Yeni pencere: önce bunu baştan sona oku.** 16 Kasım 2026 akşamı başlayan işin bütün kaydı burada. Sahibi (Barbaros)
> işi "çok kritik" saydı ve hiçbir ayrıntının unutulmamasını istedi. İş başka pencerede, aşağıdaki **Sıradaki adım**dan sürer.
> Kök `CLAUDE.md` ve `kaynak/DEVIR.md` en üstte buraya işaret eder.

---

## 0. Sahibiyle konuşma biçimi (ZORUNLU)

- **En basit ve en kısa Türkçe.** Sahibi açıkça istedi: "Bu pencerede bana yazacağın her şeyi en basit ve olabilecek en kısa
  şekilde cevapla." Uzun, ayrıntılı, teknik cevaplara iki kez tepki verdi ("o kadar uzun yazıyorsun ki okuyamıyorum bile",
  "hiçbir şey anlamadım"). Tablo, dosya yolu, kod adı yalnız gerektiğinde.
- **Önce konuş, sonra yap.** Her adımda ne yapılacağını söyle, "yap" dendikten sonra yap.
- **Kural işi Barbaros'ta.** Oğuz Bey kurallarla ilgilenmiyor; bu iş için ona bir şey iletilmez (sahibi: "Oğuz Bey'in görmesi
  önemli değil… Oğuz Bey kurallarla ilgilenmiyor").

## 1. Neden başladı

1. Oğuz Bey'in Vaka 7 Parti 1'inde **G4 (Süheyla)**, Vaka 6'nın terzisi **Jale**'nin aynısı çıktı (yüz biçimi, yaş, küt saç,
   koyu üst; tek fark saç rengi). Dilek'in de siyah küt saçı var. Sahibi: "Daha önce vakadaki karakterlerin önceki
   vakalardakinden mutlaka farklı olmasını istemiştim, kurala bağlamıştık. Bu kural geçerli değil mi?"
2. Bulunan: kural **yedi yerde** yazılı (`uretim/CLAUDE.md` 9 ve 9b, `sablon/5_gorsel_sistemi.md` D-4 ve hatalar tablosu,
   `uretim/ISTEM_KALIPLARI.md` §4, `sablon/6_vaka_formu.md` kontrol kutusu, `uretim/istem_kontrol.sh`, `uretim/CLAUDE.md` 0b),
   **kural kitabında yok**, ve **hiçbiri durdurmuyor**: `istem_kontrol.sh` yalnız "benzemiyor" sözcüğünü arıyor; `arac_yuz.py`
   yalnız yüze bakıyor, yalnız uyarıyor (Süheyla'yı en çok Ayla'ya benzetti 0,70, Jale'yi hiç bulmadı); form tarifinde Süheyla
   yalnız Dilek'le karşılaştırılmış ("kâkül yok" diye tek ayrıntı değiştirilmiş).
3. Önerilen "gözle karşılaştırma" çözümünü sahibi **reddetti**: "Bunu bir şekilde otomasyon şeklinde sağlamalıyız."
4. Sahibinin asıl itirazı (sözleri): "Bir sürü kural yazıyoruz ama sonra otomatik uygulanmadığını, gözle görmemiz gerektiğini
   söylüyorsun. Otomatik uygulamayacağımız kuralı niye yapıyoruz? Ben her seferinde yüzü, kaşı, saçı, ayağı, eli kontrol et
   diye söyleyemem. Yazdığımız bütün kurallar otomatik uygulanacak şekilde olmalı." … "Bunun içinden çıkmak mümkün değil."
   … "Her vakada farklı bir şeyle karşılaşıyoruz. Önce uğraştığımız şeylerle tekrar uğraşıyoruz. Hiçbir otomasyon yapamadık."

## 2. Sahibiyle varılan anlaşma (pazarlığa kapalı)

1. **Hiçbir kural kaybolmayacak.**
2. **Anlam değişmeyecek.** Metin sadeleşebilir, kelimesi kelimesine korunması şart değil ("korunması gerekiyorsa korunsun");
   önemli olan anlam ve amaçlanan işi yapması. **Her sadeleştirmede eski ve yeni metin yan yana gösterilir, onay sahibinden.**
   Sahibi: "Hepsi vakalardaki tecrübelerimiz sonucunda oluştu. Farklılaşırsa ya da kaybolursa emeklerimiz boşa gider."
3. **Her kural otomatik uygulanacak.** Programın ölçebildiği kurala program bağlanır ve iş durur. **Bilgisayarın ölçemediği
   kurallar** (parmak kontrolü, espriler ve benzeri) **her vakada, yeri gelince, ilgili adımda sahibine hatırlatılır**; sahibi
   "baktım" demeden o adım geçmez. Sahibi 198 kuralı her vakada tek tek söyleyip "yaptın mı" diye sormayacak.
4. **Sonunda bütün kurallar tek dosyada** (`KURALLAR.md`). İş dosyaları (diyalog, form, resim istemleri) kalır; rehberler
   (`CLAUDE.md`, `DEVIR.md`, teknik notlar) kalır ama **kural yazmaz**, yalnız kural numarasını anar. Kural yazılı dosya 34 → 1.
5. Doğruluk benim özetime bağlı olmayacak: **program sayar** (bkz. §4).

## 3. Bu pencerede yapılanlar (sırasıyla, hepsi `main`'de)

| commit | ne |
|---|---|
| `8459cf9` | `sablon/KURALLAR_TASLAK.md` — ilk deneme: 198 kural, uygulayıcı, 16 çelişki, kaynak eşlemesi. **GÜVENİLMEZ, kullanma:** satırlar Claude'un özeti, ~450 kaynak madde gruplanarak 198'e indi (ör. "göz kontrol listesi" tek satırda 17 madde). Sahibi bunu sorguladı; ham listeye geçildi. Yalnız **çelişki listesi** (dosyanın sonu) ve **uygulayıcı tespitleri** işe yarar, yeniden kullanılabilir. |
| `1661764` | **Ham liste:** `kaynak/arac_kural_ham.js` → `sablon/kurallar/HAM.tsv` (programlar için) + `HAM.md` (okumak için). 34 kural belgesi + 2 programdaki (`arac_kapi.js` K1–K13, `istem_kontrol.sh`) her madde, tablo satırı, paragraf **asıl metniyle**; özet yok, ayıklama yok. Her kaydın kalıcı kimliği (`id`, dosya + metin özeti; satır değişse de aynı). Eksiksizlik programla sayıldı: atlanan satır yok (fazladan sayılanlar yalnız kod bloklarının içindeki boş/`#` satırlar). |
| `809478b` | **Arşiv 1:** eski oyunun 16 belgesi `arsiv/`'e taşındı (silinmedi): `kaynak/inceleme_*.md` (12), `gorsel_promptlari.md`, `gorsel_promptlari_2.md`, `final_tablo_plani.md`, kökteki `PARA_YOLU.md`. Yeni oyunun kullandığı bilgi olmadığı denetlendi; okuyan program yok; doğrulayıcı geçti. `arsiv/OKUBENI.md` açıklar. |
| `e66c93b` | **Arşiv 2:** `kaynak/gorsel_stil_sozlesmesi.md` ve `kaynak/cengo_bag_mekanigi.md` `arsiv/kaynak/`'e. İçlerindeki iki işe yarar kural ham listede: **2123** (resim yanlış gösteremez — kanondaki yara/topallık/yaş yokmuş gibi çizilmez, gizlenecekse kadraj dışında; silinmez) ve **2204** (Cengo bağı küçük adımlarla, ±1/±2). Ham araç arşivdekini eski adıyla okur, kimlikler değişmedi (önce/sonra karşılaştırıldı: aynı). |
| `6d25b2f` | **OKUBENI bölündü:** `kaynak/OKUBENI.md`'nin eski oyuna ait satır 142–1146'sı (açık uyarılar, kapatılan tuzaklar, sızıntı, ekonomi, eski vakalar) `arsiv/kaynak/OKUBENI_eski_oyun.md`'ye; ortak kısım kaldı (derleme, dosyalar, geliştirici modu, testler, doğrulayıcı kuralları, koşullu metin, kayıt, ses, Android). Ham liste önce/sonra karşılaştırıldı: **kaybolan 0**, yeni 2 (taşıma notları). Doğrulayıcı ve `test_yedek.js` geçti. |

| (bu commit) | **Etiket önerisi, bütün ham liste** (sahibinin isteği, 16 Kasım gece: "belge belge değil, ham listeden satır satır"; emin olunmayan satır KURAL sayılır, sahibine yalnız kural olmayanlar gruplu gösterilir). `ETIKET_ONERI.tsv` (her `id` → KURAL / KAYIT / ESKİ OYUN + sebep), `ETIKET_KONTROL.md` (sahibinin okuyacağı gruplu liste). Sayım: 3.585 = 1.611 KURAL + 1.379 KAYIT + 595 ESKİ OYUN; atlanan yok. **Sahibinin onayı bekleniyor**; onaylanınca `ETIKET.tsv` olur. |
| (bu commit) | **İkinci göz** (sahibi binlerce satırı okuyamaz; 16 Kasım gece onayıyla): bağımsız bir Claude, öneriyi görmeden aynı 3.585 satırı etiketledi (talimat: aynı tanımlar). 207 satırda ayrıştık (114'ünde o KURAL dedi, 93'ünde ben). **Birleştirme kuralı: ikimizden biri KURAL dediyse KURAL** — hiçbir kural kaybolmaz; fazlası adım 2'de (birleştirme) ayıklanır. `ETIKET_ONERI.tsv` son sütun `ikinci_goz` onun etiketi. Sonuç: 1.725 KURAL. Kalan risk: ikimizin de kural saymadığı bir kural (iki bağımsız okumada kaçmış olmalı). |

**Ham listenin şu anki hâli: 3.585 kayıt, 36 dosya** (yukarıdaki son commit). Bu, iş bitince yapılacak yeniden çıkarmanın
**karşılaştırma tabanıdır** (bkz. §6).

## 4. Plan — dört adım (sahibi planı gördü; "tam olarak ne" diye sordu, aşağıdaki gibi anlatıldı)

**Adım 1 — Etiketleme (ÖNERİ HAZIR, SAHİBİNİN KONTROLÜNDE — §3 son satır).** Ham listedeki her kayda bir etiket önerilir:
- **KURAL** — yapılması ya da yapılmaması gereken bir şey;
- **ESKİ OYUN** — yalnız eski oyuna ait (asıl listeye girmez, kayıt için ham listede kalır);
- **KAYIT** — geçmiş, açıklama, örnek, gerekçe; kural değil.

Belge belge gidilir, **ilk belge kural kitabı** (`sablon/2_kural_kitabi.md`, 61 kayıt). Sahibine iki liste gösterilir: KURAL
olanlar asıl metinleriyle; öbürleri kısa liste. Sahibi yanlış etiketi söyler. Onaylanınca etiketler **ayrı dosyaya** yazılır:
`sablon/kurallar/ETIKET.tsv` (`id` → etiket; ham liste ve belgeler değişmez). Bu adımda hiçbir kural birleştirilmez,
yeniden yazılmaz, silinmez. Sonra öbür belgeler (öneri sırası: 1. parça, 5, 6, 7, `uretim/CLAUDE.md`, `ISTEM_KALIPLARI`, kök
`CLAUDE.md`, 4. parça, 8. parça, TASLAK, RAF/TON/SEZON/ÇERÇEVE, `uretim/AGENTS.md`, `v3_eski`, vaka başlangıçları, OKUBENI'ler,
doğrulayıcı/veri sözleşmeleri, en son `DEVIR.md` — 445 kaydın çoğu geçmiş).

**Adım 2 — Birleştirme.** KURAL etiketlilerden aynı şeyi söyleyenler yan yana, asıl metinleriyle gösterilir; sahibi "birleşsin"
derse tek kural olur. **Gruplama yok:** her ayrı kural kendi satırında (taslaktaki hata tekrarlanmaz). Sadeleştirilen metin
eskisiyle yan yana onaylanır.

**Adım 3 — Kural dosyası.** Onaylananlar `KURALLAR.md`'ye. Bir program iki şeyi sayar: (a) ham listedeki her kaydın etiketi var
mı, (b) her KURAL kaydının son dosyada karşılığı var mı. Eksik varsa durur ve gösterir. Sonra öbür belgelerden kural metinleri
çıkarılır, yerine kural numarası konur (bu, sahibinin onayıyla, en sonda, bir seferde).

**Adım 4 — Uygulayıcı.** Her kurala ya program bağlanır (iş durur) ya da "sahibine hatırlatılır" işareti + hangi adımda
(sahibi "baktım" demeden adım geçmez). Uygulayıcısı olmayan kural kalırsa bir test uyarır. Önce en çok ısıranlar: benzerlik,
el, kıyafet, satır–resim.

## 5. Bulgular (kaybolmasın)

- **Kapı kendiliğinden çalışmıyor.** `.claude/kapi_hook.js` yazılmış, ama `.claude/settings.json` yok → commit'te kapı
  çalışmıyor. Belgeler "kendiliğinden çalışır, geçmezse commit olmaz" diyor. Program olan kurallar bile ancak biri elle
  çalıştırınca devreye giriyor.
- **Taslak (KURALLAR_TASLAK) sayımı** (özet olduğu için yaklaşık): 30 kural programla durduruluyor, 51 kısmen, 18 kodun yapısı
  gereği, **99'un hiç programı yok.**
- **Çelişkiler:** `KURALLAR_TASLAK.md`'nin sonunda 16 tane (ör. doğrulayıcı K19 hâlâ eski kasa/önizleme/kesinti düzenini
  denetliyor — `dogrulayici.js` 987, 1010, 1015; Peri'nin L1 poz resmi bir belgede yüz kaynağı, öbüründe yasak; İK §6 hâlâ
  "orta yeşil" zemin; kapı bağlantısı kapalı). İkinci taramada **5 yeni**: (1) Ton belgesi "kısa replik" ↔ kural kitabı 5
  "anlaşılır replik"; (2) Ton §6 "bağ her vakada bir konuşmayı değiştirir" ↔ kural 12a "yalnız kapanışta"; (3) Sezon belgesi
  "her kıyafette 4 ifade / ~96 görsel" ↔ 5. parça B "yalnız satırların istediği"; (4) Sezon belgesi "V7'de taç kasaya bağlı"
  geçersiz (kasa kalktı, kural 27); (5) `uretim/v3_eski/CLAUDE.md` L1'i Peri'nin yüz kaynağı sayıyor.
- **Yalnız taslak dosyasında kalmış, sahibinin onayladığı kararlar** (asıl belgelere işlenmemiş): garip vaka harmanı
  (`TASLAK_tekrar_onleme.md` §5), dönen figür hâli değişir ve üst üste iki vakada görünmez (§6), her formda "bu vakada hayvan
  görünsün mü?" sorusu (§6), sezon kuralları (§7–8).
- **Yazılı olmayıp uygulanan:** Cengo bağı ±1/±2 (yeni oyunun verisi −2…+2 arasında; kural hiçbir yerde yazılı değildi, şimdi
  ham kayıt 2204). Önerildi: doğrulayıcı ±2'yi aşan kararı durdursun — **sahibi henüz onaylamadı.**
- **Ham listeye girmeyenler:** ilk arşivlenen 16 dosya (incelemeler, eski istemler, planlar) kural belgesi sayılmadı, ham
  listede yok. İçlerinde eski oyuna ait ders olabilir. Sahibine "ekleyeyim mi" soruldu; sahibi "eski oyunun kuralları neden ham
  listede, kullanıyor muyuz" diye sordu, cevap: bir kısmı yeni oyunda da geçerli, kalanı ESKİ OYUN etiketi alır. **Ekleme
  kararı verilmedi** — sahibine yeniden sor.
- **`.md` sayısı:** depoda 430 `.md`; ~340'ı resim istemi (`G<n>.md`), ~30'u vaka metni, kalanı durum kayıtları. Kural yazılı
  olan 34 (+2 program).
- **Hâlâ kullanılan, arşivlenmeyecek** (sahibiyle konuşuldu): `kaynak/dogrulayici_sozlesmesi.md` (doğrulayıcı yeni oyunda da
  çalışıyor), `kaynak/veri_format_sozlesmesi.md` (yeni oyunun verisi bu biçimde), `kaynak/ses_promptlari.md` + `ses/GECICI.md`
  (yeni sayfa eski betiği ve sesleri kullanıyor), `kaynak/OKUBENI.md` ortak kısmı, `uretim/v3_eski/` (eski oyun değil; yeni
  oyunun Vaka 3 ilk denemesi; bugünkü resim kuralları gerekçe ve örnek için ona atıf yapıyor).
- **Eski oyunun kodu arşivlenemez** (yeni oyun `motor.js` ve eski sayfa betiğini kullanıyor). Eski oyunun verisi
  (`game_data.json`, `vaka2-6.json`, `yan_*.json`) ve kökteki `index.html` ayrı karar konusu; dokunulmadı.
- **Kırık atıflar** (arşive taşınan dosyaların eski yolu): kök `CLAUDE.md` 11 yer, `kaynak/DEVIR.md` 2,
  `kaynak/RAF_KARARLARI.md` 2, `kaynak/YENI_OYUN_GORSEL_PROMPTLARI.md` 2, `kaynak/referans/OKU.md` 2, `kaynak/OKUBENI.md` 1,
  `YENI_OYUN_CERCEVE.md` 1, `YENI_OYUN_TON.md` 1, `sablon/TASLAK_tekrar_onleme.md` 1. Dosyalar `arsiv/` altında aynı adla.
  **Adım 3'te düzeltilecek** (sahibine söylendi).

## 6. Oğuz Bey ve süren işler

- Oğuz Bey bu işten **etkilenmez**: vaka yazarken kullanılan belgelere dokunulmadı; yeni `KURALLAR.md` sahibi onaylayınca
  **bir seferde** devreye girer, o zamana kadar eski belgeler geçerli. Vaka 8'e başlayabilir (sahibine söylendi).
- **Tek risk:** Oğuz Bey arada eski belgelere yeni kural eklerse ham listede görünmez. **Çare:** iş bitince
  `node arac_kural_ham.js` yeniden koşar, `HAM.tsv` bu plandaki tabanla (commit `6d25b2f`) `id` üzerinden karşılaştırılır;
  sonradan eklenen her kayıt etiketlenir. Kaybolan kayıt varsa (bir belge değişmiş demektir) o da gösterilir.

## 7. Sahibinin cevap bekleyen soruları (bu işin dışındakiler dahil)

1. **G4 (Süheyla) reddedilsin mi, yeni görünüş ne olsun?** Henüz karar yok. Sahibi gözle çözümü reddetti, otomasyon istedi.
   Benzerlik otomasyonu önerisi (iki adım: üretimden önce görünüş tablosu karşılaştırması — yaş, saç rengi, kesim, yüz biçimi,
   beden, ayırıcı işaret, ≥2 aynıysa istem üretime girmez; üretimden sonra saç ve genel görünüşü de karşılaştıran araç,
   bilinen benzer çiftlerle sınav: Süheyla–Jale, Necmi–Recep, Kaan–Bülent, Müzeyyen–Nadide…) **sunuldu ama sahibi bunun yerine
   bütün kuralları düzenlemeyi önceledi.** Not: 2. adımın aracı bu bulut kabında denenemiyor (yüz modeli inemiyor, ağ izni yok);
   Oğuz Bey'in ya da Barbaros'un bilgisayarında denenmeli.
2. **15c önerisi** (Oğuz Bey'in "konuklar birbirine benzemez" genel kuralı; metin `kaynak/DEVIR.md` en üstte) — kural listesine
   girecek; ayrıca işlenmedi.
3. **Vaka 7 resimleri durdu**: Barbaros'la Peri'nin kıyafeti (G1 manto Vaka 1'dekinden farklı — düğmeli, kapaklı cep; Vaka 1'de
   kruvaze, kuşaklı, açık yaka, saten bluz) konuşulmadan başlanmaz. Parti 1'in 24 resmi onay bekliyor; G2 web paketi
   (`uretim/v7/WEB_G2.md`) Barbaros'un hesabıyla üretilecek; dört konuk (Kaan, Ercan, Necmi, Şükrü) yeniden yazıldı, "başla"
   bekliyor.
4. **Kapı commit bağlantısı açılsın mı** (`.claude/settings.json`)?
5. **Doğrulayıcı K19'un eski kasa/önizleme/kesinti denetimleri kaldırılsın mı** (çelişki 1)? Sunuldu, cevap gelmedi.
6. **Cengo bağı ±2 denetimi** doğrulayıcıya eklensin mi?
7. **İlk arşivlenen 16 dosya ham listeye eklensin mi?**
