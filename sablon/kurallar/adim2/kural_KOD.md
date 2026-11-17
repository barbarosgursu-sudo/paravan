# KOD — kod, veri ve araçlar (birleştirilmiş kurallar)

## A. Derleme, kapı, test

### KOD-1 index.html derleme çıktısıdır
Depo kökündeki `index.html` derleme çıktısıdır, elle düzenlenmez; `kaynak/` klasöründen üretilir. Ayrıntılı belge `kaynak/OKUBENI.md`.
Yayındaki oyun: https://barbarosgursu-sudo.github.io/paravan/
*Kaynak:* 2, 2325

### KOD-2 Ara dosyalar depoya girmez
`_gomulu_motor.js` ve `_gomulu_veri.js` her derlemede üretilir, depoya girmez. Yeni kip derlemesi `_gomulu_veri.js`'in üstüne yazar; ardından argümansız derleme onu yeniden üretir.
*Kaynak:* 2342, 15

### KOD-3 Her commit'ten (ve her değişiklikten) önce
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # test_bozuk.js hariç hepsi geçmeli
```
Yeni oyunda her değişiklikten sonra: `node dogrulayici.js yeni`, `node build_html.js yeni`, `node build_html.js`, testler. Sahneyi etkileyen
değişiklikte ayrıca tur (`node arac_yeni_tur.js 0 vapur dogru` gibi, yollar KOD-27'de) ve sızıntı taraması (`node arac_sizinti_tur.js V5 40`).
*Kaynak:* 10, 11, 2326, 2350, 2886

### KOD-4 Doğrulayıcı ne zaman çalışır, ne çıktı verir
- Her oyun değişikliğinden sonra, `node --check`'ten **önce**; görseller/ses gömülmeden önce (metin ve mantık dondurulurken). Tek komut: `node dogrulayici.js` → raporu basar.
- Girdi: tüm vakalar + KANON. Kurallar sırayla çalışır (sözleşmenin ilk hâlinde beş kural; sonradan K6… eklendi, liste OKUBENI'de).
- **FAIL** (hata) varsa sonuç `BLOCKED`: oyun paketlenmez, hangi vaka/clue/kural olduğu yazılır. **Yalnız WARN** varsa `PASS (n uyarı)`: paketlenir, yazar uyarılır. Hepsi temizse `PASS`.
- Rapor biçimi örneği: başlık `PARAVAN DOĞRULAYICI v1`, her kural için satır (`Kural 1 (Sözlük): PASS` … `Kural 5 (Belirsizlik): 1 UYARI` ve altında `⚠ V5/ceyda_derin: "asıl akıl oydu" cümlesi tek yönlü olabilir — çift-okunuş ekleyin.`), sonda `SONUÇ: PASS (1 uyarı) — oyun paketlenebilir.`
- Doğrulayıcı veri dosyasını bulamazsa hata koduyla çıkar; doğrulama koşmadan derleme yapılmaz.
*Kaynak:* 2234, 2272, 2273, 2274, 2275, 2277, 2278, 2279, 2328

### KOD-5 Hata ile uyarı ayrımı
Hata = oyun bozulur, paketlenemez. Uyarı = tasarım kararı bekliyor. K1–K4 ve K6'nın ölü içerik kolu çelişki/bozukluk yakalar; K5, K7, K8, K9 yazarın karar vermesi gereken tasarım sorularıdır.
*Kaynak:* 2352

### KOD-6 Kapıya boru sokma
`node dogrulayici.js | tail -1 && node build_html.js` yazma: `tail` çıkış kodunu yutar, doğrulayıcı BLOCKED derken bile derleme çalışır ve bozuk veri `index.html`'e yazılır (düşüldü: K1 bir Nurcan sızıntısını yakalayıp BLOCKED verdi, boru yüzünden derleme yine geçti). Aynı şekilde doğrulayıcı ile derlemeyi `;` ile değil `&&` ile zincirle (`;` ile yazınca BLOCKED veri yine `yeni/index.html`'e derlendi).
Çıktıyı kısaltmak gerekirse önce dosyaya yaz, çıkış kodunu ayrı oku:
```
node dogrulayici.js > /tmp/dog.txt 2>&1; echo $?; tail -1 /tmp/dog.txt
```
Kardeş tuzak: test döngüsünde `|| echo FAIL` yazıp sonunda koşulsuz "hepsi geçti" basmak. Bayrak tut, sonunda bayrağa bak.
*Kaynak:* 52, 53, 54, 2452

### KOD-7 test_bozuk.js ve test sayısı
`test_bozuk.js` negatif testtir: bilerek bozuk veri besler, yedi senaryonun her birinde BLOCKED basar ve çıkış kodu 0'dır (gösteri başarılı; buradaki "BLOCKED" beklenen sonuçtur, hata değil). Diğer 26 test geçmelidir (22'si eski oyunun; `test_yeni_v1.js`, `test_yeni_v2.js`, `test_yeni_arayuz.js`, `test_yeni_kimyapti.js` yeni oyunun).
*Kaynak:* 12, 2351

### KOD-8 Doğrulayıcı testlerin içinde de çalışır
`test_v5.js` ve `test_v6.js` doğrulayıcıyı çağırıp temiz geçmesini bekler; bir K1 hatası bu ikisini de kırar. Üç kırık görünce tek kök sebep ara.
*Kaynak:* 55

### KOD-9 Testlerde sabit sayı yazma
İddiayı rakamla değil ilişkiyle kur; yoksa veri değişince test yalan söyler (tekrar tekrar ısırdı).
*Kaynak:* 56

### KOD-10 Arayüz/motor ayrışması testle eşlenir
İki yerde duran her şey (KRIZLER/KRIZ_METIN, kararRuhHali/RUH_GORSEL) testle eşlenmiştir; ayrışma sessizdir. Yenisini eklerken aynısını yap.
*Kaynak:* 57

### KOD-11 game_data.json asıl, yedekler eşlenir
`game_data.json` ASIL; `vaka2-6.json` ve `yan_a/b.json` YEDEK. Asılda değiştirdiğini yedekte de değiştir. Önceden denetlenmiyordu ve yedi yedeğin yedisi de kaymıştı (22–80 satır; Cengo satırı gibi bütün bir özellik hiç işlenmemişti); ayrışma sessizdir. `test_yedek.js` artık eşliyor, kayma olursa hangi alanın ayrıldığını basar. V1 ve YAN-C'nin yedeği bilerek yok; küme OKUBENI'de tanımlı.
*Kaynak:* 58

### KOD-12 Değiştirmeden önce ilgili teste bak
Tuhaf görünen şey kasıtlı olabilir. Örnek: `vedat_yuz` "gizli tuzak" sanılıp bedelsiz yapıldı, `test_v2b.js` kırıldı; testin yorumu tasarımı yazıyordu ("gerçek seçim: tam gerçek (güç) vs Vedat'a acıma (empati). İkisi birden değil.").
*Kaynak:* 3201

## B. Teknik tuzaklar

### KOD-13 Türkçe harf tuzakları
- JS'in `/i/` bayrağı U+0130'u (İ) katlamaz: `/icra/i` "İcra"yı bulmaz. Çözüm: `String(x).toLocaleLowerCase("tr")`.
- JS'in `\b` sınırı "ğ"yi harf saymaz: `/\bsordu\b/` "sorduğu" ile eşleşir. Sınır Türkçe harf kümesiyle elle kurulur.
*Kaynak:* 49, 3164

### KOD-14 index.html tek bir JS şablon dizgisidir
`build_html.js` içinde; kaçış karakterleri gerçek bir tehlike. `vm.Script` derleme koruması bozuk çıktıyı yazmayı reddeder.
*Kaynak:* 50

### KOD-15 DEV_MOD
- `build_html.js` içinde `const DEV_MOD = false;` (satır ~508), **şu an `false`** — yayın modu. Derleme bunu her seferinde söyler (`index.html yenilendi: 4357 KB` / `✓ yayın modu — 🛠 düğmesi basılmadı`).
- `true` iken üst şeritte 🛠 düğmesi çıkar: durum özeti, `cengoBag` oynatma, tohum anahtarları ve ses teşhisi (hangi dosya çalıyor, uzantı keşfi, kilit durumu). Ses teşhisi paneli de bu bayrağın arkasında.
- Tuzak 1: bayrak üretilen sayfanın içinde yaşar, derleyicinin kapsamında değil — `console.log(DEV_MOD)` doğrudan patlar; kontrol çıktı dizgisine bakmalı.
- Tuzak 2: çıktıda `dev-btn` aramak yanıltıcıdır (dizgi koşulun içinde her hâlükârda var, grep 1 döndürür ama düğme yoktur). Tek doğru kontrol tarayıcıda DOM: `.dev-btn` sayısı 0.
*Kaynak:* 51, 2335, 2343, 2344, 2345, 2347, 2348

### KOD-16 GORSELLER anahtarı uzantısız
Sayfa her aramada `.replace('.jpg','')` yapar; `"v5_takip.jpg"` diye gömülen görsel hiç bulunamaz. Eksik görsel JS hatası vermez, sessizce metin yer tutucuya düşer; `arac_ui_tur.js` de yakalamaz (düşüldü: 7 görsel uzantılı gömüldü, hiçbiri görünmedi). `build_html.js` artık uzantılı anahtarı ve gömülmemiş atfı yakalayıp derlemeyi durdurur; görsel gömdükten sonra "✓ görsel: N atıfın hepsi gömülü" satırını görmek şart. Otomatik denetim: her görsel gömülü, adı doğru.
*Kaynak:* 59, 762

### KOD-17 Ses üç yerde durur
EFEKT tablosu, `efektCal` çağrıları, `ses/` klasörü. Ayrışma sessizdir: çalınmayan ses hata vermez, hiç duyulmaz (düşüldü: `efekt_alev` tabloda ve sipariş listesindeydi ama hiç çağrılmıyordu). `test_ses.js` üçünü eşler; yeni ses eklerken üçüne birden ekle.
*Kaynak:* 63

### KOD-18 Ses: yalnız beş kısa efekt, müzik yok
19 Eylül 2026, sahibinin kararı: müzikli hâli beğenilmedi; arka plan müziği katmanı tamamen söküldü (MUZIK tablosu, muzikCal/muzikBaslat/muzikDur, çapraz geçiş, vakaModu, dokuz çağrı yeri, 14 ses dosyası; sekiz parçanın altısı üretilmiş, döngüleri kesilmiş, −18 LUFS'a hizalanmış ve gömülmüştü). Oyun sessizlik + beş kısa efekt üzerine kurulu. Motor sınırı: yalnız 5 kısa efekt, müzik yok. Efekt adları: `efekt_dokun`, `efekt_kaynak`, `efekt_kilit`, `efekt_muhur`, `efekt_alev`.
*Kaynak:* 76, 308, 2384

### KOD-19 Ses dosyaları ve çalma davranışı
- Dosyalar depo kökündeki `ses/` klasörüne konur, `index.html`'e gömülmez (gömülürse dosya 15 MB'ı aşar, ilk açılış yavaşlar). Beklenen adlar `build_html.js` içindeki `EFEKT` haritasında.
- Uzantı sırası `SES_UZANTILAR = [".mp3", ".wav"]`; bulunan uzantı akılda tutulur, her ses için yalnız bir kez aranır.
- Dosya yoksa oyun sessiz devam eder: eksik dosya bir kez denenir, işaretlenir, bir daha istenmez; bir parçanın eksikliği diğerlerini etkilemez.
- Otomatik çalma kilidi: tarayıcı ve Android WebView kullanıcı dokunmadan ses çaldırmaz; ilk dokunuşta kilit açılır, bekleyen parça başlar. `play()` reddi `NotAllowedError` ise kilit (dokunuş bekleniyor), değilse dosya eksik sayılır — karıştırılırsa tek eksik dosya bütün sesi susturur.
- Ses tercihi kayıt yuvasından ayrıdır (`paravan_ses_v1`): "baştan başla" oyunu sıfırlar, ses tercihini silmez.
*Kaynak:* 2382, 2385, 2387, 2388, 2390

### KOD-20 Sayfa boyutu
Görseller sayfaya gömülü; bir görsel ~50–120 KB; sezon için yer var.
*Kaynak:* 311

### KOD-21 Tarayıcı iletişim kutusu kullanma
claude.ai artifact çerçevesi `confirm()`/`alert()`ı engeller (kutu çıkmaz, `confirm` "hayır" döner); eski sayfanın "Baştan başla"sı bu yüzden hiçbir şey yapmıyordu. Yeni oyunda `yenidenBasla` sayfa içi onay ekranıyla değiştirildi. Yeni onay/uyarı eklerken iletişim kutusu kullanma.
*Kaynak:* 2412

## C. Tarayıcı turları ve araçlar

### KOD-22 UI doğrulaması tarayıcıda
UI değişikliği Playwright + Chromium ile tarayıcıda doğrulanır: `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Pixel 5 profili. UI değişikliğinden sonra `cd kaynak && node arac_ui_tur.js`: oyunu Pixel 5'te gerçek tıklamayla baştan sona oynatır (JS hatası, yatay taşma, dokunma hedefi, kayıt-sürdürme). Test değil, araç; `test_*.js` döngüsüne girmez.
*Kaynak:* 30, 64

### KOD-23 Tarayıcı turu her şeyi görmez
JS hatası, yatay taşma, dokunma hedefi ve kayıt-sürdürmeye bakar; eksik görsele, yanlış metne, bozuk yerleşime bakmaz.
*Kaynak:* 62

### KOD-24 Turda text= seçicisi kullanma; fren sabit
- Playwright'ın `text=Geri` seçicisi büyük/küçük harf duyarsızdır ve alt dizgi eşler. V5'e "…iş olarak geri istemiş" diyen künye satırı eklenince seçici takıldı, tur Kişiler panelinden çıkamadı ve "KARAR DÜĞMESİ YOK" diye yanlış alarm verdi (motorda vaka aktif, dört karar açıktı). Düğmeyi hedefle: `.buton:has-text("Geri")`, `.ust-btn:has-text("Kişiler")`.
- İpucu döngüsünün emniyet freni ekrandaki `.kaynak` sayısından türetilemez (o seçici yalnız o an açılabilenleri sayar, zincirin başında 2). Fren bol ve sabit tutulur; bir iddia değildir (frenin 8'den 4'e düşürülmesi hatayı büyüttü).
*Kaynak:* 60, 3202

### KOD-25 Önce motora sor, sonra inan
Tur "karar düğmesi yok" derse önce motora sor: `oyun.acikKararlar()` tarayıcı konsolundan okunur; doluysa sorun oyunda değil turun gezinmesinde. Genel ders: "bu bozuk" iddiası motor çalıştırılarak doğrulanır (yanlış alarmlar — `boslukla_kapat` kapısı, `%100` paneli — ancak motoru çalıştırınca çürütüldü).
*Kaynak:* 61, 3200

### KOD-26 Kendi aracına da şüpheyle bak
İki yanlış alarmdan biri verinin değil `arac_okuma.js`'in hatasıydı; bir teşhiste kendi "düzeltme" hatayı büyüttü (fren, bkz. KOD-24).
*Kaynak:* 3202

### KOD-27 arac_yeni_tur.js (yeni oyun turu)
Konuşma ekranı değişince `node arac_yeni_tur.js [karar] [set|dukkan]`: yeni oyunu Pixel 5'te baştan sona oynatır, görüntüleri `kaynak/YENI_UI/`'ye yazar. Test değil, araç. Düz tur (`--cihaz`sız) `YENI_UI/`'yi siler — `cihaz/` sayfaları da gider.
Yol adları (önceki vakalar hızlı oynanır; V1 → V2 geçişi de böylece denenir):
- Vaka 2: `[karar] [ortu|vale|terzi|defne] [dogru|zayif|lal|tolga]`
- Vaka 3: `[kod|foto|borc|badem|cozmez] [dogru|zayif|kenan|gizem]`
- Vaka 4: `[soz|aksam|ilham|cozmez4] [dogru|zayif|tarik|rana]`
- Vaka 5: `[vapur|iskele|usta|cozmez5] [dogru|zayif|kadir|nedim]`
- Vaka 6: `[sofra|siparis|kagit|cozmez6] [dogru|zayif|cengo|jale]`
Resim gömüldükten sonra (`göm` komutu adım 6): `node arac_yeni_tur.js 0 <yol> dogru --hepsi` ile vakayı oynat, görüntülere bak, sorunları sahibine listele.
*Kaynak:* 15, 1148, 3037

### KOD-28 --hepsi: her satırın görüntüsü ve adı geçen kişiler
`--hepsi` eklenirse incelenen vakanın HER satırı `YENI_UI/satir/`'a görüntülenir ve `dokum.txt`'ye konuşan/kime/arka/kare/figür anahtarıyla dökülür — görselli tur denetimi (adım 11) bununla yapılır. Ayrıca `satir/adi_gecen_yok.txt`: anlatıda adı geçen ama ekranda olmayan kişiler (aday; grup ve "annesi" gibi sözleri yakalamaz). Sahibinin kuralı: adı geçen herkes ekranda — tek kişi `gir`, kalabalık kare.
*Kaynak:* 15

### KOD-29 --tablet
`--tablet` (herhangi bir yere) eklenirse Pixel 5 yerine dikey tablette (800×1280) oynatır, tam sayfa görüntü alır; tablet eşiği tutmazsa hata basar. Yeni vaka bittiğinde iki kipte de koş.
*Kaynak:* 15

### KOD-30 --cihaz (19 ekran boyu)
`--cihaz` eklenirse oyun bir kez oynanır, seçilen her anda sayfa 19 ekran boyuna (telefonlar, iPhone Safari çubuklu, telefon yatay, tablet dikey/yatay — 1280×650 çubuklu dahil, dizüstü, masaüstü) getirilip görüntülenir ve ölçülür (`kaynak/arac_cihaz.js`; ~3–5 dk; örnek komut `node arac_yeni_tur.js 0 ortu dogru --cihaz`). Çıktı `YENI_UI/cihaz/`: her an için bütün boylar yan yana bir karşılaştırma sayfası + `bayraklar.txt`.
Bayraklar ADAY'dır: yatay taşma, figür başı kadraj dışı, konuk/Peri boy oranının Pixel 5'ten %12'den fazla sapması (Lâl/Defne hatası), arka planın %65'ten azı görünmesi (ilk tablet hatası), Peri'nin küçülmesi, kutunun ekranı yemesi, küçük dokunma hedefi. Eşikler `ESIK` tablosunda. Yeni vaka, yeni görsel ya da düzen değişikliğinden sonra koş. Telefon yatay boyunu araç "dikey uyarısı" diye işaretler, altını ölçmez. Bilinen tek bayrak: 1280×650'de seçim ekranı (arka planın ~%51'i görünür, kutu büyüdüğü için) — göze batmıyor.
*Kaynak:* 15, 3035

### KOD-31 Telefonu dikey çevir uyarısı
Telefon yatayda (alçak, dokunmatik, yatay ekran) oyunun üstüne "Telefonu dikey çevir" uyarısı biner (`yeni_arayuz.css` sonu, `body::before`; sahibinin kararı, Ekim 2026 — sahne ~170 px'e iniyordu).
*Kaynak:* 15

### KOD-32 Her vakadan sonra sızıntı taraması
Sahibinin kararı: `cd kaynak && node arac_sizinti_tur.js [VN] [tur]` (ör. `V5 40`) — farklı yollardan oynar, her ekranda bilinmeyen olgu arar (çıkış 1 = sızıntı) ve `YENI_UI/sizinti_okuma.txt`'yi elle okunmak üzere yazar. Şablon 7. parça adım 5 ve 14. Test değil, araç.
*Kaynak:* 15, 2886

### KOD-33 Ortağın bilgisayarı ve ilk kurulum
- İlk kurulum (bir kez): Git, Node.js, Python 3 kurulu olmalı. Depoda olmayan tarayıcı aracı (`araclar/`, Playwright + Chromium) yeniden kurulur: `npx playwright install chromium`. Resim üretimi için ortağın kendi Codex erişimi gerekir (`uretim/CLAUDE.md`). Kurulumdan sonra `cd kaynak && node dogrulayici.js yeni` ve test döngüsü geçmeli.
- Tuzak: Claude'un kabuğu `PW` kullanıcı değişkenini görmez; tur araçlarından önce `export PW=C:/Yazilim/paravan/araclar/node_modules/playwright`. Python `py` ile çalışır (`python` yok).
*Kaynak:* 2887, 2912

### KOD-34 Yayın kontrolü ve önbellek
- `main`'e push yayını tetikler (~2–10 dk). GitHub'ın "deploy" adımı bir kez zaman aşımına uğradı, sayfa eski kaldı. Şüphede: GitHub MCP `actions_list` → `list_workflow_runs` (pages build and deployment); `failure` ise `actions_run_trigger` → `rerun_workflow_run`. Oturumdan github.io'ya doğrudan erişim yok.
- GitHub Pages `index.html`'i `max-age=600` ile sunar; sahibi değişikliği göremezse `?v=8` gibi bir sorgu eki ver.
*Kaynak:* 2927, 3127

### KOD-35 Kapı (arac_kapi.js)
Sahibinin kararı: vaka kaydedilmeden önce `kaynak/arac_kapi.js` 13 kural + eski denetimleri kendiliğinden koşar; Vaka 6 ve sonrası. Kurallar dosyanın başında; vaka kaydı `sablon/vakalar/vaka6_kapi.md`. Commit bağlantısı (`.claude/kapi_hook.js`) **açık olmalı**: kapı her commit'te kendiliğinden çalışır, geçmezse commit olmaz (`.claude/settings.json` ile bağlanır) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 24). (14 Kasım'da "Vaka 6 kapıdan geçince açılacak" deniyordu; Vaka 6 15 Kasım'da geçti.) Ondan sonra: GitHub yayın koruması (sahibi: "sonra ekle"). `arac_kapi.js … resim` K2/K8/K6, Cengo satırlarındaki ifadenin kapanış setinde olmamasını yakalar (KOD-75).
*Kaynak:* 2791, 752

## D. Yeni oyunun verisi ve derlemesi

### KOD-36 Yeni oyun verisi ayrı; eski oyuna dokunulmaz
- Yeni oyunun verisi `kaynak/yeni/`'de (Vaka 1 + açılış …). Eski oyunun verisine (dokuz vaka, `kaynak/game_data.json`) dokunulmaz; o hâlâ yayındaki `index.html`'in kaynağı.
- Yeni oyunun motor eki `kaynak/motor_yeni.js` (`OyunYeni extends Oyun`): Kim yaptı?, sonda ödenen ücret, suçlamanın kaydı; 16 Kasım 2026'dan beri kasa yok, karar sahnede (`sablon/2_kural_kitabi.md` 22a–d, 24). `motor.js`'e dokunulmaz (eski sayfaya da gömülü; eski sayfa birebir aynı kalmalı). Yeni kip derlemesi dosyayı `// <node>` bloklarını atarak sayfaya ekler; `yeni_arayuz.js` sayfadaki `Oyun` adını `OyunYeni`'ye bağlar.
- Yeni oyun yapım şablonuyla üretilir: `sablon/` (7 parça + `vakalar/`). Şablon ile CLAUDE.md çelişirse yeni oyun için şablon geçerlidir.
*Kaynak:* 14, 2398, 2409

### KOD-37 Yeni oyunun doğrulayıcısı
`cd kaynak && node dogrulayici.js yeni` yeni oyunu denetler; argümansız çağrı eski oyunu denetler. Yeni oyunda ayrıca K17 (giriş), K18 (ipucu adı), K19 (Kim yaptı?) çalışır (K15 de yalnız `kanon.sahne` olan veride). Sahne satırı biçimi, K15/K16 ve açık uyarılar: `kaynak/yeni/OKUBENI.md`.
*Kaynak:* 14

### KOD-38 Veri elle yazılmaz
- Veri JSON'unu elle değil `arac_json_yaz.js` ile yaz (kısa, okunur biçim); kanon listesine ekleme de bununla.
- Vaka metni `sablon/vakalar/vakaN_diyalog.md`'de değişir (sahneler, karar metinleri, anı defteri, anı özeti); veriye `cd kaynak && node arac_diyalog.js <dosya> <vaka>` yazar (ör. `node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md V1`); veri elle düzenlenmez. Açılış metni hâlâ `YENI_VAKA_1.md` → `yeni/acilis.json`.
- `arac_diyalog.js` konuşan adındaki â/î/û'yu düzler ("LÂL" → `lal`).
*Kaynak:* 14, 303, 2404, 2452, 2453

### KOD-39 Yeni oyunun sayfası
`cd kaynak && node build_html.js yeni` → depo kökünde `yeni/index.html` (yayında `…/paravan/yeni/`). Eski sayfanın betiği aynen kullanılır; konuşma ekranı `kaynak/yeni_arayuz.js` + `.css`'ten eklenir, görseller `kaynak/yeni/gorseller.json` manifestosundan gömülür. Argümansız derleme eski `index.html`'i üretir ve ondan birebir aynı çıkar — yeni kip eski sayfaya dokunmaz. Kayıt anahtarı ayrı (`paravan_yeni_kayit_v1`), çünkü iki oyun aynı alan adında. `test_yeni_arayuz.js` manifesto ↔ kanon ↔ derleyici eşlemesini sınar. Ruh hâli görseli ve istatistik paneli yeni sayfada yok (ikisi de açık soru).
*Kaynak:* 15, 2412

### KOD-40 Yeni format: eski format + eklenenler; kanon.sahne
Eski veri formatı (`veri_format_sozlesmesi.md`) aynen geçerli; üstüne eklenenler. `kanon.sahne` konuşma ekranının görsel setidir; K15 her satırı buna karşı denetler:
```
figurler: { peri: { setler: { manto: [ifadeler], balikli: [...] } },
            cengo: { ifadeler: [...] }, riza: { ad, ifadeler }, ... }
sesler:   { ses: "Ses", asistan: "Set asistanı" }   // figürü olmayan konuşanlar
arkalar:  ["A1", ...]     // arka plan kodları (YENI_VAKA_1.md görsel planı)
kareler:  ["D1", "K1", ...]   // detay ve ara kareler
```
*Kaynak:* 2415, 2416, 2417

### KOD-41 Sahne ve satır biçimi
Sahne: vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda `sahne`, açılışta `acilis.json → sahneler[]`; biçim `{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }`.
Satır: `{ k: "peri", i: "kas", m: "Ne oldu?" }` (konuşan, ifade — verilmezse önceki kalır —, metin); `{ k: "not", m: … }` anlatı, ifade almaz; `{ k: "ses", m: … }` figürü olmayan konuşan, ifade almaz.
Satırda isteğe bağlı sahne değişiklikleri:
- `arka: "A5b"` arka plan değişir (aynı yer+saat çapraz geçiş, değilse karartma).
- `kare: "K8"` tam ekran ara kare / detay; figürler çekilir.
- `set: "balikli"` Peri'nin kıyafet seti değişir (sonraki ifadeler o setten).
- `gir: "serkan"` / `cik: true` konuk girer/çıkar; `gi` girenin ilk ifadesi; `gizle: "cengo"` figürü ekrandan çeker (konuşunca döner).
- `kime: "peri"`: konuk varken Cengo Peri'ye konuşuyorsa sağa geçer; yoksa Cengo konuk varken SOLA geçer (aynalı), konuk sağda kalır. Konuk satırında `kime: peri|cengo` solda kimin duracağını seçer. Anlatı satırında da `kime: peri|cengo|<konuk>` solda kimin duracağını seçer (konuk: sağdakinin karşısında, aynalı; 14 Kasım 2026).
- `peri: "tac"` konuşan başkayken Peri'nin (dinleyen) ifadesi; K15 set kuralıyla denetler.
- `mekan: true` mekân karesi: figürler çekilir, arka plan çıplak (yeri tanıtan anlatı satırı).
- `bag: "yuksek"` / `"dusuk"` satır yalnız o bağ hâlinde oynar (kapanış; eşik +1, `motor_yeni.js` → `BAG_ESIK`).
*Kaynak:* 2418, 2419, 2421, 2424, 2425, 2426, 2427, 2428, 2430, 2431, 2432

### KOD-42 Kıyafet seti sahne başında
Diyalogda `⚙ … · set: tayyor · cset: takim`: `set` Peri'nin, `cset` Cengo'nun seti (`kanon.sahne.figurler.cengo.setler`). Cengo'nun sprite anahtarı set varsa `cengo.<set>.<ifade>`, yoksa `cengo.<ifade>` (Vaka 1). K15 ikisini de denetler. Satırda `{cset: unlu}` Cengo'nun setini sahne ortasında değiştirir (Vaka 3, 17 Ekim 2026).
*Kaynak:* 2450

### KOD-43 Seçim ve karar alanları
- Seçim: `{ secim: "Peri ne desin?", secenekler: [ { m: "…", satirlar: [...] }, ... ] }`.
- Karar: `kare: "K3"` (sonuç ekranının görseli). Anı defteri `kisiler.json → defter.V1.<karar>`; anı özeti `ani_ozet.V1`. Anı sekmesindeki "Suçladığın" satırı motorun `_suclama_<vaka>` tohumundan (`"şüpheli:sonuç"`) okunur; bu tohumdan önceki kayıtlarda bu satır çıkmaz. Anı'da "Kasaya" satırı yok — kasa kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 21).
*Kaynak:* 2433, 2434

### KOD-44 Karar alanları (16 Kasım 2026 düzeni)
- `secenek` = Peri'nin seçim cümlesi (diyalogda `**SEÇENEK:**`); `cengo_sonuc` = Cengo'nun büroda satırı.
- `cengo_replik: { i, yuz }` varsa o satır Cengo'nun repliği olarak oynar (`k: "cengo", kime: "peri"`, `i` Cengo'nun ifadesi, `yuz` dinleyen Peri'nin yüzü); diyalogda etiketli `**CENGO [ifade]:** metin {yuz: peri.x}`. Etiketsiz `**CENGO:**` → `cengo_replik` yok → eski düzende anlatı satırı (V1–V5, V7 yeniden geçirilene dek).
- `kim_yapti.cengo_kanit: { olgu: metin }` ve `kim_yapti.cengo_kanit_replik: { olgu: { i, yuz } }` aynı biçimden gelir (`## cengo_kanit` → `**olgu [ifade]:** metin {yuz: peri.x}`).
- Eski alanlar: `onizleme` = eski karar ekranındaki tek cümlelik kısa sonuç (artık gösterilmez; zorunlu değil, doğrulayıcı da istemez (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19)); `para` = karar parası (hikâye rakamı; kasa yok); `gate: "yok"` (kapı yok); `seed_yaz` yok (tohum yok).
*Kaynak:* 2435

### KOD-45 Kim yaptı? veri şeması
```
kim_yapti: {
  suclu: "serkan",
  supheliler: [ { id, ad, gorunur: "her_zaman" | <ifade> } ],   // ekranda ne zaman görünür
  dogru_ciftler: [ [<olgu|ifade>, <olgu|ifade>], ... ],          // suçu kanıtlayan iki olgu
  ucret: { dogru, zayif, yanlis },                                // sonda ödenir
  // kesinti: { zayif, yanlis } — ESKİ: karar ekranının üstündeki ücret kesintisi açıklamasıydı; kesinti yok, zorunlu değil
}
sahneler: { giris, konusma, yuzlesme_dogru, yuzlesme_zayif, yuzlesme_<masum id>, kovalamaca, kapanis }
anahtarlar: { <ipucu olgusu>: ["kelime", ...] }                    // K17 sızıntı araması
```
Ücret kesintisi ve açıklaması kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 20).
*Kaynak:* 2437, 332

### KOD-46 Girişte açılan olgular ve ücret alanı
Girişte anlatılan olgular `giris[].acilan`'da (ipucu değil). `ekonomi.gider` boş (kasa yok; oyun para saymaz (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 21)). Ücret Vaka 1'de bilerek `vaka.ucret`'te de duruyor (masa kartı).
*Kaynak:* 2438

### KOD-47 Düz metin ile sahne aynı içeriğin iki hâli
İpucunun `text`/`meta`'sı düz okuma biçimi (eski arayüz, `arac_okuma.js`, K5/K10); `sahne` oynanan biçim. Birinde değişen ötekinde de değişmeli. K1 (isim sızıntısı) ikisini de tarar.
*Kaynak:* 2439

### KOD-48 Görselsiz testte yer tutucu
Arka plan ve kare de yer tutucu olabilir: `gorseller.json` → `yer_tutucu` listesindeki kod gri bir alan olarak çizilir, üstünde `yer_tutucu_metin`'deki açıklama yazar. Görsel gelince kod `dosyalar`'a eklenir, iki listeden silinir (`test_yeni_arayuz.js` bayatı yakalar).
*Kaynak:* 2451

### KOD-49 Diyaloğa yeni kare eklerken üç yer
(18 Ekim 2026, K53) `game_data.json → kanon.sahne.kareler` (`arac_diyalog.js` bunu YAZMAZ; eksikse K15 BLOCKED der; `arac_json_yaz.js` ile yaz), `gorseller.json → yer_tutucu` + `yer_tutucu_metin`, ve vakanın diyalog dosyasındaki görsel tablosu.
*Kaynak:* 2452, 2991

### KOD-50 Kayıt sistemi
- Eski oyun: tek yuva, otomatik. Motorda `durumAl()` / `durumYukle()`, arayüzde `localStorage` (`paravan_kayit_v1`). Yeni oyun her adımda kaydedilir (suçlama dahil).
- Kaydedilen yalnız girdilerdir: tohumlar, tamamlanan vakalar, kalıcı olgular, aktif vakada açılmış kaynakların id'leri. Türetilmiş `knowledge`, araştırma hakkı ve giriş metni kaydedilmez, yüklemede güncel veriden yeniden üretilir — eski kayıt hak edilmemiş olguyu geri getiremez (Nurcan kuralı kayıt üzerinden delinmez).
- Yükleme kaynakları kaydedildikleri sırayla yeniden açar; bu aynı zamanda doğrulamadır: veri değiştiyse ya da kayıt kurcalandıysa bir adım "kilitli" döner, kayıt tümden reddedilir, eski durum geri konur.
- Karar verilir verilmez yazılır; oyuncu uygulamayı kapatıp kararı geri alamaz ("geri alınamaz karar" çekirdektir). Bu yüzden tek yuva; elle kayıt ve çoklu slot yok.
- `localStorage` yoksa (gizli sekme, kısıtlı WebView) kayıt sessizce devre dışı kalır, oyun sürer. İzole dev testi (🛠 → vakaya atla) ana kaydı kirletmez.
- Sahne kaydı (yeni oyun; 9 Ekim 2026, sahibinin isteği): her konuşma akışı (açılış, giriş, ipucu, yüzleşme+kovalamaca, kapanış) `akisBaslat` ile başlar; sahne ve satır ayrı anahtarda (`paravan_yeni_kayit_v1_sahne`). Açınca sahne o satıra kadar yazı/geçiş beklemeden yeniden oynatılır (`vnSar`), seçimler kaydedildiği gibi yapılır; görüntü (arka plan, kıyafet, figürler) aynı gelir. Kayıt motor durumuyla tutarsızsa yok sayılır. Akış bitince silinir. Sonuç ekranında kapatılırsa kapanış sahnesinden sürer. Sahne ve satır düzeyinde kayıt **her konuşma akışında** geçerlidir, yalnız açılışta değil (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 23).
*Kaynak:* 302, 2375, 2376, 2377, 2378, 2379, 2411

## E. Motor sınırları

### KOD-51 Motorun yapamadığı istenmez
Vaka yazılırken motorun yapamadığı bir şey istenmez. Yeni bir yetenek gerekirse önce `sablon/4_motor_sinirlari.md`'ye eklenir, sonra yapılır.
*Kaynak:* 282

### KOD-52 Sahne satırı bilgiye göre değişmez
İpucu ve konuşma sahnelerinde bir satır "oyuncu şunu biliyorsa" diye değişemez; her sahne yalnız kendi açılma koşulunun garanti ettiği bilgiyi kullanır.
*Kaynak:* 307

## F. Doğrulayıcı kuralları

### KOD-53 Doğrulayıcının amacı
Oyunu açmadan önce çalışan build-time doğrulayıcı. Amaç: hiçbir kaynak, oyuncunun o an bilemeyeceği bir isimden veya olgudan bahsetmesin — "Nurcan hatasını" insana değil makineye yakalatmak.
*Kaynak:* 2230

### KOD-54 K1 — Sözlük (isim sızıntısı), hata
- Her clue'nun `text`, `meta`, `ad` ve `gorsel.gosterir`'inde geçen her kanon ismi ve olgu-anahtarı ya o clue'nun `reveals`'inde (ilk kez o açıyor) ya `needs`'inde (daha önce açılmış) olmalı; değilse FAIL. Görsel için: `gosterir ⊆ (clue.needs ∪ clue.reveals)` (Görsel Stil Sözleşmesi §7). KANON.isimler taranır.
- Düzeltme iki yoldan biri: `needs`'e açan olgu eklenir (ör. `needs:["nurcan_suclamasi"]` — o ismi açan kaynak görülmeden kamera açılmaz) ya da isim metinden çıkarılır.
- Keskinleştirmeler: (1) "girişte tanıtılmış" isimler yalnız varsayılan giriş varyantından alınır; (2) koşullu metinlerde her varyant ayrı denetlenir, varyantın koşul olguları o varyantın havuzuna katılır; (3) havuzdaki türetilmiş olgular bileşenlerine açılır; (4) varyantın koşulu bir tohumsa `KANON.tohum_isimleri` o tohumun hangi değerinde hangi isimleri garanti ettiğini söyler.
- İsim tespiti: KANON.isimler kelime sınırıyla, büyük/küçük harf ve Türkçe ekler dahil aranır ("İlyas'ı", "İlyas'ın" → "İlyas"). Olgu-anahtarları metne `{olgu}` şablonuyla ya da açık atıfla girer; asıl risk isimlerdir.
- Yeni oyunda K1 ipucunun hem düz metnini hem `sahne`'sini tarar (KOD-47).
*Kaynak:* 2236, 2237, 2238, 2239, 2240, 2243, 2246, 2307, 2309, 2318, 2354

### KOD-55 K2 — Erişilebilirlik, hata
`knowledge` (`ifade`) ve `decisions[].gate` içinde kullanılan her olgu/çıkarım en az bir yoldan açılabilir olmalı: ya bir clue `reveals` ediyor ya da ulaşılabilir bir çıkarımdan türüyor. Değilse FAIL ("ulaşılamaz bilgi: oyuncu bu olguya asla varamaz").
*Kaynak:* 2248, 2250, 2251, 2252, 2319, 2355

### KOD-56 K3 — Döngü, hata
Clue'ların `needs` grafiği döngüsüz (DAG) olmalı; döngü → FAIL ("kilitli kapı arkasında kilitli anahtar: şu clue'lar birbirini bekliyor: [...]"). Her vakada `needs:[]` olan (baştan açık) en az bir clue bulunmalı; yoksa FAIL ("vakanın açık girişi yok").
*Kaynak:* 2256, 2257, 2258, 2259, 2320, 2356

### KOD-57 K4 — Truth uyumu, hata
Hiçbir clue, vakanın `truth`'unda "YOK/GİZLİ" ("YOK/AÇILMAZ") işaretli bir gerçeği açığa vuran bir olgu `reveals` edemez; `truth` "bu vakada YOK" diyorsa ve bir clue onu açıyorsa FAIL.
*Kaynak:* 2261, 2262, 2263, 2321, 2357

### KOD-58 K5 — Belirsizlik (Ceyda koruması), uyarı
`KANON.belirsiz` konuları (ör. `ceyda_pay`, `kaya_biliyordu`) `truth`'ta ve metinlerde tek yönlü kesin hükme bağlanmaz: her ilgili metin çift-okunuş taşır (hem "soğuk hesap" hem "korkan mağdur") ya da en azından tek yönlü kesin yargı cümlesi kurmaz. "Kesinlikle / açıkça / hiç şüphesiz X'tir" gibi cümle → WARN (sert FAIL değil; dil tespiti kusursuz değil). İstisna: V6/kaya_biliyordu (`belirsiz_istisna`).
*Kaynak:* 2267, 2268, 2269, 2322

### KOD-59 K6 ve K7 — Bütçe ve seçim baskısı
- K6 Bütçe: araştırma hakkıyla açılamayan kaynak — ölü içerik: hata / kusursuz sıra: uyarı.
- K7 Seçim baskısı: oyuncu hiç iki kaynak arasında seçmek zorunda kalıyor mu — uyarı.
- İkisi gerçek motoru (`motor.js`) kullanır, bütün açma sıralarını dener (simülasyon oyunla birebir). K2 bir kaynağın ulaşılabilir olduğunu, K6 bütçe içinde açılabilir olduğunu söyler — aynı şey değil; aradaki fark canlı bir hataya yol açmıştı.
*Kaynak:* 2359, 2360, 2365

### KOD-60 K8 — Baskınlık, uyarı
Bir karar hem para hem vicdan ekseninde diğerini geçiyor mu. Yalnız kararlarında `para` bulunan vakalarda çalışır; ekonomisi yazılmamış vakaları sessizce atlar.
*Kaynak:* 2361, 2366

### KOD-61 K9 — Ölü tohum, uyarı
Yazılıp hiçbir yerde okunmayan tohum. Tohumları `kisiler.json`, `prolog.json` ve `build_html.js` içinde de arar.
*Kaynak:* 2362, 2367

### KOD-62 K10 — Olgu sızıntısı, hata
Metin bir kişinin söylediğine gönderme yapıyor ama o olgu `needs`'te yok → hata. K1'in açığını kapatır: K1 isim sızıntısına bakar ve girişte tanıtılan isimleri serbest sayar, ama ismin sahnede olması o kişinin ne dediğini bilmek değildir (canlı hata: V1'de komşu ifadesinin meta'sı "ama Ceyda 'yalnızdım' demişti" diyordu, oyuncu Ceyda ile henüz görüşmemiş olabilirdi).
*Kaynak:* 2363, 2368

### KOD-63 K11 — Olgu kimliği, hata
Bir olgu adı (`facts` anahtarı ya da `knowledge.turetilen`) yalnız tek bir vakada tanımlı olabilir; birden çok vakada → FAIL. Sebep: olgular vaka bitince `kaliciOlgular`'a taşınır, künye ve koşullu metinler birleşik kümeyi (`tumBilinen()`) okur; aynı ad iki anlam taşırsa biri ötekinin kapısını açar. Yaşandı: YAN-A'daki `eski_dava` (Cengo'nun sabıkası) ile V5'teki `eski_dava` (Cavit'in İlyas'ı kurtardığı dosya) aynıydı; YAN-A'da o kaydı açan oyuncunun künyesinde İlyas V3 başlamadan "Cavit'in kurtardığı katil" görünüyordu. Ad ayrıldı (`cengo_eski_dava`).
*Kaynak:* 45, 2290, 2292, 2364, 2369

### KOD-64 K13 — Varyant sırası
(Cengo satırının üç kuralından biri.) Cengo satırının (`cengo_sonuc`) sıcaklık varyantlarının (soğuk/varsayılan/sıcak; Cengo bağı eşiğine göre) sırası AZALAN eşik olmalı ve sonda `varsayilan` bulunmalı. Öbür iki kural KAR'da: kararın öncesindeki bağa bakar (KAR-18), sıcaklık onay değildir (KAR-17). `metinSec` ilk tutanı döndürür; sıra bozulursa sıcak varyant hiç görünmez, `varsayilan` yoksa satır sessizce boşalır; ikisi de hata vermez.
*Kaynak:* 41

### KOD-65 K14 — Tanımsız olgu, hata
`reveals`/`acilan` ile açılan her olgunun gövdesi olmalı: `vaka.facts`'te bir metin ya da bir `knowledge.turetilen` karşılığı; yoksa hata (tasarım kararı olamaz). `needs` bilerek denetlenmez: ipucu önceki vakadan taşınan kalıcı olguyu ya da tohumu isteyebilir, "bu vakada tanımlı değil" demek yanlış pozitif olurdu; `reveals`/`acilan` ise beyandır.
*Kaynak:* 3172, 3174

### KOD-66 K15 — Sahne satırı
Yalnız `kanon.sahne` olan veride: konuşan tanımlı mı, ifade o figürün (Peri için o anki setin) sprite'ı mı, arka plan/kare listede mi, `bag` geçerli mi. Hiçbiri JS hatası vermezdi; tanımsız ifade sessizce eski sprite'ta kalırdı. Otomatik denetim: her satırın ifadesi sözlükte ve görseli var.
*Kaynak:* 2440, 758

### KOD-67 K16 — Kararsız yol
İki oyunda da: hakkı harcamanın her biçiminde en az bir karar açık kalmalı. Yeni oyunda kapı olmadığı için kendiliğinden geçer. Üretim denetimi ayrıca: en az bir dürüst karar her yolda açık.
*Kaynak:* 2441, 749

### KOD-68 K17 — Giriş denetimi
`dogrulayici.js`'te, yalnız yeni oyunda (`kim_yapti` olan vakada) giriş sahnesine bakar:
1. Büro: arka plan kanondaki büro görselleri listesinde (`kanon.sahne.buro`).
2. Uzunluk: en az 15 satır, üst sınır yok; 45'i geçerse uyarı (10 Kasım 2026, kural 5c — girişte açıklık kısalıktan önce gelir).
3. Şüpheli: vakanın şüpheliler listesinden (formdaki) en az bir ad metinde geçer.
4. Ücret: vakanın ücreti (ör. "35.000") metinde konuşulur (rakam ya da yazı) ve formdaki ücretle aynıdır.
5. Sızıntı: ipucu olgularının anahtar kelimeleri (`anahtarlar`, her ipucu olgusuna 1–3 kelime) metinde geçmez.
Arama `toLocaleLowerCase("tr")` ile. Biri tutmazsa hata, derleme durur (45 üstü yalnız uyarı). `test_yeni_v1.js` bozuk girişler besler, doğrulayıcının durdurduğu görülür. Sınır: 5. madde kelime arar, dolaylı ele vermeyi yakalayamaz — o, Onay 2'de (görselsiz test) sahibinde. Gerekli veri alanları: `kim_yapti.supheliler` (üç ad), `anahtarlar`.
*Kaynak:* 325, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 735, 736, 737, 738, 739, 2442

### KOD-69 K18 — İpucu adı
İpucu adındaki özel isimler (kesmeli kelime ya da ilk kelime dışında büyük harfle başlayan) ipucu açılabilir olduğu anda oyuncunun duyduğu adlar arasında olmalı (giriş, konuşma, `needs` zincirindeki ipuçlarının sahne ve olguları; Peri ve Cengo her zaman bilinir).
*Kaynak:* 747, 2443

### KOD-70 K19 — Kim yaptı? yapısı
3 şüpheli; suçlu her yolda görünür; kanıt çiftleri olgu; ücret sırası; dört yüzleşme sahnesi; 4 karar; kapı/tohum/bedava ipucu yok; ipucu > hak; hak içinde en az 2 farklı doğru kanıt çifti; hiçbir doğru çift tek ipucundan çıkmaz (kural 21c); K19 artık `kesinti` açıklaması, karar `onizleme`si ve "kasa eksiye düşmez" denetimi **istemez** — üçü de 16 Kasım düzeniyle kalktı (kesinti, önizleme, kasa yok) (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–21). Üretim denetiminde ayrıca: suçluyu kanıtlayan en az 2 ipucu yolu var (742).
*Kaynak:* 2444, 742, 743

### KOD-71 Kabul edilmiş / açık uyarılar (yeni oyun)
(K8 yeni oyunda kalktı — para yok, YAPI-46; aşağıdaki üç K8 maddesi kayıt olarak durur. Sahibinin kararı, 17 Kasım 2026, çelişki sorusu 37.)
- K8 (V4): `polise_ver` (−10.000, bağ −1) hem `uzaklastir`'ın hem `gercegi_soyle`'nin gerisinde; Onay 1'de sahibi karar dağılımını olduğu gibi onayladı (10 Kasım 2026). Kabul edildi.
- K8 (V5): `polise_teslim` (−5.000, bağ −1) `muammere_soyle`'nin (+5.000, bağ 0) iki eksende de gerisinde; ortak bilerek bıraktı, Barbaros kabul etti (12 Kasım 2026). Kabul edildi.
- K8: `sete_gotur` hem `her_seyi_anlat`'ı (aynı para, bağ +1'e 0) hem `serkanla_anlas`'ı (+3.000, aynı bağ) iki eksende geçiyor (sahibine soruldu).
- K17 (V6): giriş 56 satır (45'i geçiyor); Eylül'ün kıskançlığı ve Gizem girişi uzattı; ortak bilerek bıraktı, Barbaros kabul etti (13 Kasım 2026). Kabul edildi.
*Kaynak:* 2445, 2446, 2447, 2448

### KOD-72 Doğrulayıcının kapsamı dışı (insanda kalır)
- Anlatısal tutarlılık (iki cümlenin mantıken çelişmesi, ör. "sabah"/"gece"); doğrulayıcı olgu-anahtarı düzeyinde bakar. Bunun için ayrı bir kanon dosyası tek gerçek kaynağı olarak tutulur.
- Ton/kalite (metnin sıkıcı, düz, duygusuz olması — tasarım işi).
- Denge (bir kararın çok kolay/zor, ödülün çok cömert olması).
*Kaynak:* 2281, 2282, 2283, 2284

## G. Üretim sürecinin otomatik denetimleri (7. parça)

### KOD-73 Şüpheli ve Kim yaptı? yolları
3 şüpheli var; her yanlış şüpheliyi aklayan bir kanıt var. Her ipucu yolunda "Kim yaptı?" ekranı çalışır (tam, zayıf ya da yanlış sonuç).
*Kaynak:* 741, 744

### KOD-74 Defter ve sızıntı denetimi
Defter cümleleri suçluyu söylemez. Hak edilmemiş bilgi sızmaz (isim, olgu, görsel).
*Kaynak:* 745, 746

### KOD-75 Karar sahnede; Cengo satırları
- Kararı sahnedeki biri sorar; her kararın Peri ağzından seçenek cümlesi ve sahne satırlarına bölünmüş sonucu var (kural 22a–b). Önizleme, kesinti ve rakam yok (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 19–20).
- Her doğru kanıt için Cengo'nun söylenmeyen kanıt satırı var; açılmamış ipucunu anmaz (kural 22c).
- Cengo'nun karar ve kanıt satırları etiketli: `**CENGO [ifade]:** … {yuz: peri.x}` / `**olgu [ifade]:** … {yuz: peri.x}`; ifade kapanış setinde (`gorseller.json`) var olan bir resim olmalı, yoksa kapı (`arac_kapi.js … resim` K2/K8/K6, poz kaydı) durur.
*Kaynak:* 750, 751, 752

### KOD-76 Anı özeti zorunlu
Diyalogda `## ani` yoksa `arac_diyalog.js` yazmaz, `test_yeni_arayuz.js` eksiği yakalar. İçerik (yalnız itirafın söylediği, kural 21d) bulanık replik taramasında okunur.
*Kaynak:* 753

### KOD-77 Kasa yok, tohum yok, tutarlar tabloda
Kasa yok; para yalnız hikâyede, her kararın parası kendi sahnesinde biter (kural 24). Tohum yok. Metindeki her tutar fiyat tablosunda.
*Kaynak:* 754, 756

### KOD-78 Sigara yok
Metinde, sahne notunda, ifade adında, istemde sigara yok (kural 19a).
*Kaynak:* 755

### KOD-79 Satır–görsel denetimleri
Hiçbir satırda ekranda aynı figür iki kez yok (Cengo hem solda hem sağda). Metinde anılan nesne ya da hareket o satırda görünür (satır → görsel tablosu).
*Kaynak:* 759, 761

### KOD-80 Vakadan vakaya geçiş
Vaka bitince sonraki vaka açılır (ilk iki vakada elle denenir).
*Kaynak:* 760

## H. Eski veri formatı (veri_format_sozlesmesi.md)

### KOD-81 Veri formatı sabit; üst yapı ve KANON
Motor ve doğrulayıcı ikisi de bu şekle göre yazılır; alan adları buradan sonra sabittir (§6'da Vaka 1 tam kodlu örnek).
```
GAME = { kanon: KANON, vakalar: [ VAKA, ... ] /* sıra alanıyla yönetilir */, baslangic: { para: 2400, ... } }
KANON = {
  isimler:  ["Kaya","Ceyda","Cavit","İlyas","Vedat","Nesrin","Peri","Cengo","Nadire","Sevil","Sabri-YOK"],  // K1 tarar
  belirsiz: ["ceyda_pay","kaya_biliyordu","sevil_pay"],   // K5 korur
  belirsiz_istisna: { "kaya_biliyordu": "V6" },           // V6'da çözülmesi serbest
  tohum_isimleri: { "iten_biliniyor": { "true": ["İlyas"] } }  // K1: tohumun hangi değerinde hangi isimler biliniyor; koşulu bu tohum olan varyant o ismi serbestçe anabilir
}
```
Vaka sayısı: 6 omurga + **3** yan (dokuz vaka: V1–V6, YAN-A, YAN-B, YAN-C); sözleşmedeki "6 omurga + 2 yan" düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 22).
*Kaynak:* 2293, 2295, 2297

### KOD-82 VAKA şeması
`id`, `tur: "omurga"|"yan"`, `sira` (omurga akış sırası), `belirir: null | { sonra: "V2", kosul: <IFADE> }` (yan vakalar ne zaman masaya düşer), `baslik`, `arastirma` (kaç kaynak açılabilir — araştırma puanı), `truth` (`anahtar: "değer" | "<BELİRSİZ>..."`), `facts` (`anahtar: "insan-okur açıklama"`), `knowledge: [ { turetilen, ifade: <IFADE> } ]`, `giris: [ GIRIS_VARYANT ]` (koşullu giriş metinleri — Vaka 4, yan vakalar), `clues`, `decisions`, `seeds` (sonraki vakalara taşınan).
*Kaynak:* 2299

### KOD-83 İFADE biçimi
VE/VEYA/DEĞİL mantığı, iç içe JSON: `"olgu_anahtari"` (biliniyorsa true) | `{ all: [...] }` | `{ any: [...] }` | `{ not: <IFADE> }` | `{ seed: "anahtar", esit: <değer> }` (önceki vakadan taşınan bayrak) | `{ cengoBag_en_az: 3 }` (sayaç eşiği).
*Kaynak:* 2301, 2302

### KOD-84 CLUE ve GORSEL
- CLUE: `id`, `ad` (listede görünen ad), `tur: "Görüntü"|"İfade"|"Belge"|"Gözlem"`, `ico`, `needs: [olgu|<IFADE>]` (boş = baştan açık), `reveals: [olgu]`, `text`, `meta` (yorum/çıkarım), `gorsel: GORSEL|null`.
- GORSEL: `dosya` (ör. "v1_merdiven.jpg"), `tur: "kanit"|"portre"|"mekan"`, `gosterir: [olgu|isim]` (görselin ifşa ettiği bilgi — `reveals`'ten fazlası olamaz), `alt` (erişilebilirlik + yer tutucu açıklama).
*Kaynak:* 2306, 2308

### KOD-85 GIRIS_VARYANT
`{ kosul: <IFADE> | "varsayilan", metin, acilan: [olgu] }`; ilk eşleşen varyant oynanır. Vaka 4 ve yan vakalarda kullanılır (ör. `{seed:"kaya_kayit_gordu", esit:true}` → farklı giriş). Tüm varyantlar aynı `acilan` sonucuna çıkmalı (çelişkisizlik).
*Kaynak:* 2310, 2311

### KOD-86 DECISION
`id`, `gate: <IFADE>|"yok"` (bilgi eşiği), `etiket`, `sonuc` (hemen / ilerleyen / görünmeyen), `cengoBag` (sayaca etki), `seed_yaz: { anahtar: değer }`, `cengo_etki` (yalnız final vakasında, kriz hesabından SONRA: `ust_sinir: 2` bağı bu değere kadar düşürür, ya da `muhur: 6, eger_kademe: "Yakın"` o kademedeyse bu değere mühürler).
*Kaynak:* 2312

### KOD-87 SEED_KAYNAK
`{ esit_ise: <IFADE>, deger }` (koşul true ise değeri taşı) | `{ karardan: "decision_id" }` (hangi karar seçildiyse) | `{ toplam: "cengoBag" }` (sayaç değeri).
*Kaynak:* 2313

### KOD-88 Koşullu metin
Kaynak `text`/`meta` düz dizgi yerine varyant dizisi olabilir:
```json
"meta": [
  {"kosul": "ceyda_saat", "metin": "... ama Ceyda 'yalnızdım' demişti."},
  {"kosul": "varsayilan", "metin": "... o saatte dairede iki kişi varsa, biri konuşmadı."}
]
```
Motorda `metinSec()` çözer. Desteklenen yerler: kaynak `text` ve `meta`, karar `sonuc`, anı defteri notu (`defterNotu`), vaka `giris` varyantları. Metin koşulları GENİŞ bilgi kümesini görür (`_metinBilinen`: aktif vaka + önceki vakalardan kalıcı olgular + tohumlar); mekanik kapılar (`needs`, `gate`) dar kümeyle çalışır — yoksa V1'de öğrenilen olgu V5'te kaynak açardı; bu ayrım olmadan "önceki vakada öğrenmiştin" diyen varyant tetiklenmez.
*Kaynak:* 2370, 2371, 2372, 2373

## I. Yeni oyunun ekran yüzeyleri (CLAUDE.md'nin KOD paragrafında geçenler)

### KOD-89 Kim yaptı? kanıtları kısa adla
(18 Ekim 2026) Diyalogda `## kanit` (`**olgu_id:** Kısa ad`) → `kim_yapti.kanit_ad`. Liste düz, tam metin ▾ ile; sonuç ekranı ✓/✗ + "Elindeydi". Ad olgunun metninden fazlasını söylemez (Nurcan). Adı olmayan vaka tam metne düşer.
*Kaynak:* 15

### KOD-90 "Dosya kapandı" ve suçlama sonrası metinler Nurcan yüzeyidir
(20 Ekim 2026, sahibi buldu; 16 Kasım 2026'dan beri "Dosya çözüldü" yerine "Dosya kapandı" kartı + Cengo'nun kanıt satırı.) Yalnız oyuncunun ELİNDEKİ kanıt anılır — açılmamış ipucunun olgusu basılırsa hem sızıntı olur hem reklamlı "kaçan ipucu"nu bedavaya açar. Seçim `motor_yeni.js → cozumYolu()`; `test_yeni_kimyapti.js` her ipucu alt kümesi × şüpheli × çifti sınar. Aynı kural suçlamadan sonraki metinlere de uyar (22 Ekim 2026): `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız her yolda oynayan sahnelerin (yüzleşme + kovalamaca itirafı) söylediğini anar, ipucu olgusunu değil. Mekanik yakalanmaz, elle oku.
*Kaynak:* 15

### KOD-91 Defter ve Künye vaka başına
- (17 Ekim 2026) Zincir yalnız içinde bulunulan vakayı gösterir; Anı her biten vakanın anı özetini (diyalogda `## ani`, `kisiler.json → ani_ozet`; kural 21d: yalnız itirafın söylediği), kimi suçladığını, kararını ve Peri'nin notunu basar (kasa 16 Kasım 2026'da kalktı) (`yeni_arayuz.js → defterZincir, defterAni`).
- Künye (Kişiler) yalnız içinde bulunulan vakanın kişilerini gösterir (`yeni_arayuz.js → vnKisiGorunur`); portre `python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`.
- Deneme reklamı (`reklamGoster`, +1 hak ve kaçırılan ipuçları) ve test için vaka düğmeleri (`VN_VAKA_ATLA`, yayından önce `false`): `kaynak/YENI_OYUN_CERCEVE.md`.
*Kaynak:* 15

### KOD-92 Paylaş (davet kartı) — yalnız yeni oyun
(17 Ekim 2026) Biten vaka "Arkadaşına öner" düğmesiyle paylaşılır (kapanıştan sonraki ekran — kaçan ipucu yoksa "Dosya kapandı" — ve Defter → Anı). Kart 1080×1920 tarayıcıda çizilir (`yeni_arayuz.js → paylasKartCiz`): vakanın afişi (`gorseller.json → kart`; yoksa `kapak` arka planı) ve altta KÜÇÜK bir kutu — vaka no/adı, "Sen olsan ne yapardın?" — ile bağlantı. Sahibinin kuralı: önce resim, yazı az; girişin ilk cümlesi kartta değil paylaşım mesajında (`paylasMetin`). Suçlu, karar, suçlama, kasa, not karta GİRMEZ (Nurcan — arkadaş oynamadı; ve oyun not vermez). `navigator.share` varsa görselle paylaşır, yoksa indir + bağlantıyı kopyala. Afiş promptları ve iş sayfası `sablon/kart_sayfa/uret.py`; yeni vakanın afişi için kurallar `sablon/5_gorsel_sistemi.md` → G. Bağlantı önizlemesi (`og:` etiketleri) `build_html.js yeni`'de; görseli `yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`. Anı karşılaştırması ve davet kodu Android aşamasında.
*Kaynak:* 15
