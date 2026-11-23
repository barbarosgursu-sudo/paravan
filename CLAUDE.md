# Paravan Dedektiflik

> ## 🔄 HER YENİ OTURUMDA İLK İŞ: `git pull` (sormadan), SONRA `kaynak/DEVIR.md` EN ÜST — oradaki "başlamadan önce" listesi.
> ## İki bilgisayarda çalışılıyor (Barbaros, Oğuz Bey); çekmeden okunan belge eski olabilir.

Türkçe, İstanbul-Noir, ahlaki tercih temelli dedektiflik oyunu. Tek dosyalık HTML,
dikey/mobil. Yayında: https://barbarosgursu-sudo.github.io/paravan/

Oyunun sayfası `yeni/index.html` derleme çıktısıdır — KOD-1 (yayında `…/paravan/yeni/`). Depo kökündeki `index.html`
arşivlenen eski oyunun donmuş sayfasıdır (22 Kasım 2026), derlenmez. Kaynak `kaynak/` klasöründe. Ayrıntılı belge: `kaynak/OKUBENI.md`.

> ### 📘 BÜTÜN KURALLAR TEK DOSYADA: `sablon/kurallar/KURALLAR.md` (Adım 3 BİTTİ, 20 Kasım 2026 gece). Belgelerdeki `TON-9`,
> ### `SATIR-3` gibi kodlar oradaki kuraldır. Eski kural belgeleri `arsiv/`'de (silinmedi). Fikir havuzu `sablon/FIKIR_HAVUZU.md`.
> ### 🛑 ÖNCE KURALLAR, ÜRETİM YOK (20 Kasım 2026, Barbaros'un kararı): otomatik uygulama (Adım 4) bitmeden resim/metin üretimi
> ### önerilmez. **Adım 4 madde 4–5 ve kuralların gözden geçirmesi BİTTİ (22 Kasım 2026; `sablon/kurallar/PLAN.md` (52)…(71)).**
> ### 👥 **23 Kasım 2026 öğleden sonra — İŞ BÖLÜMÜ:** Barbaros Vaka 5→1'i yeni kurallarla elden geçirir (her vakada önce eksik listesi);
> ### Oğuz Bey önce V7–V8 resimleri, sonra V5→1'in yeniden üretilecek resimleri (vaka vaka). Ayrıntı `kaynak/DEVIR.md` en üst.
> ### ▶️ **23 Kasım 2026: ÜRETİME DÖNÜLDÜ** (Barbaros "üretim yok"u kaldırdı). Vaka 7 Parti 1 Barbaros'un bilgisayarında denendi (öğleden sonra Oğuz Bey'e geçti), 7 resim onaylı;
> ### sıradaki iş ve bulunan araç hataları `kaynak/DEVIR.md` en üst, günün kaydı `uretim/v7/DURUM.md` en üst. Commit kapısı: onaylı resim yalnız
> ### kendi araçlarından + el onayından geçer, vakanın tamamı gömmede (`.claude/kapi_hook.js`, 23 Kasım). Madde 3 bitti, eski oyun arşivde (`arsiv/kaynak/eski_oyun/`).
> ### Commit kapısı git kancasıyla da çalışır (`.githooks/commit-msg`; yeni bilgisayarda bir kez `git config core.hooksPath .githooks`) — KOD-35.
> ### Üretim adımlarının hatırlatma listesine Claude bakar, sahibine yalnız sorunlu madde gider (`arac_uygulayici.js kayit|bitti`) — SUREC-43.
> ### Adım 4: her kuralın `*Uygulayıcı:*` satırı var (program / talimat / hatırlat <adım> / yok) — SUREC-43;
> ### `node sablon/kurallar/arac_uygulayici.js say|yaz|adim <n>`; liste `sablon/kurallar/HATIRLATMA.md` (elle yazılmaz).
> ### Sahibiyle çalışma biçimi — SUREC-34 (en kısa Türkçe, uzun işte en geç 3 dakikada bir durum). Commit kapısı artık yalnız değişen vakayı denetler (KOD-35).
>
> ### 🔑 YETKİ (17 Kasım 2026, Barbaros'un kararı): **Oğuz Bey'in hesabı Paravan'da HER ŞEYE yetkili** — SUREC-4. Sebep: Barbaros'un
> haftalık sınırı doldu (Cuma sıfırlanır); kural toplama işini Oğuz Bey'in hesabıyla sürdürecek. Aşağıdaki "kurallar Barbaros'ta /
> Barbaros'a danışılır" sözleri bu kararla askıda; Barbaros geri alana dek geçerli. Kural işi: `sablon/kurallar/PLAN.md` en üst kutu.
>
> ### ✅ ONAYLI 41 KARAR + CENGO'NUN SAÇI (17 + 19 Kasım 2026): kararlar `sablon/kurallar/KURALLAR.md`'ye işlendi; kısa liste
> ### `uretim/CLAUDE.md` en üstte. Örn.: Cengo'da sabit yalnız yüz, saç, tel, bileklik — KAR-24; ifade sayısını satırlar belirler — SATIR-35;
> ### konuk figürü 4:5 — ISTEM-3; figür zemini programla — GOMME-16; Peri'nin çorabı vakanın kıyafetine göre — ISTEM-20; replik anlaşılır — TON-9.
>
> ### ✅ VAKA 6 DONDU (15 Kasım 2026, adım 14): Onay 3 düzeltmeleri gömüldü, kapı GEÇTİ, sızıntı taraması temiz, tablet ve
> ### 19 ekran boyu denetimi geçti. Sıradaki iş sahibinde — `kaynak/DEVIR.md` en üst.
> ### Durum `uretim/v6/DURUM.md` en üst. Vaka 7 üretimi Oğuz Bey'de. Tarz denetimi gözden önce — DENETIM-1 (`kaynak/arac_tarz.py`,
> ### sonra göz: `uretim/CLAUDE.md` → Denetim 0). İstem denetimi — ISTEM-52 (`uretim/istem_kontrol.sh`).
>
> ### 👥 ROL AYRIMI (11 Kasım 2026; 14 Kasım'da genişledi): SUREC-4 —
> ### `kaynak/DEVIR.md` en üst bölüm ve "11 Kasım 2026 öğlen — İŞ ARKADAŞA DEVREDİLDİ" bölümü.
>
> ### ✅ VAKA 3'ÜN TÜRKÇESİ DONDU (9 Kasım 2026) — Vaka 2 dondu (16 Ekim 2026)
> ### YENİ PLAN (12 Kasım 2026, sahibinin kararı): SUREC-39. Ayrıntı ve açık sorular: önce DEVIR.md.
> ### Vaka 3'ün kayıtları: `sablon/vakalar/vaka3_baslangic.md` (süre tablosu dahil).
>
> ### 📚 YAYIN / MOBİL (9 Kasım 2026): oyun tek başına değil, "Ajar" adlı mobil kitap rafının ilk kitabı olarak çıkacak — RAF-1…RAF-113
> ### (platform, dil — rafta yalnız İngilizce RAF-28, satış, reklam/kredi). Eski belgeler: `arsiv/kaynak/RAF_KARARLARI.md`,
> ### `arsiv/kaynak/YENI_OYUN_CERCEVE.md`.
>
> ### 🖼️ RESİM ÜRETİMİ: `uretim/CLAUDE.md` OKU (Codex + yerel Claude düzeni, 6 Kasım 2026)
>
> ### 🔁 KARAR ANI YENİLENDİ, KASA KALKTI (16 Kasım 2026): karar sahnede — YAPI-23; Cengo söylenmeyen kanıtı söyler — YAPI-25;
> ### "Dosya kapandı" kartı — YAPI-26; kasa yok — YAPI-31. Kod `main`'de. **Vaka 6 yeni düzende TAMAM** (Cengo satırı etiketli replik —
> ### SATIR-36); sırada Oğuz Bey'in Vaka 7'si (adım 2). Ayrıntı `kaynak/DEVIR.md` en üst.
>
> ### 📚 KURALLAR TEK DOSYADA (16 Kasım 2026, Barbaros; 20 Kasım 2026 akşam: kural metinleri öbür belgelerden çıktı, yerlerinde kod):
> ### `sablon/kurallar/KURALLAR.md`. Kural belgeleri (eski şablon parçaları 1, 2, 4, 5, TASLAK; Ton, Sezon, Çerçeve, RAF; İSTEM
> ### KALIPLARI; `arsiv/uretim/v3_eski/`) `arsiv/`'e taşındı — `arsiv/OKUBENI.md`. Sırada Adım 4 (otomatik uygulama): `sablon/kurallar/PLAN.md` en üst kutu.
>
> ### ⬅️ YENİ OTURUM: ÖNCE `kaynak/DEVIR.md` OKU
> Bu dosya kalıcı bilgidir (komutlar, araçlar, kural kodları). `DEVIR.md` ise **oturum
> durumudur**: en son ne yapıldı, sahibi hangi soruya cevap bekliyor, sıradaki iş ne.
> İkisi birlikte okunur. `DEVIR.md` iş ilerledikçe güncellenir ya da silinir.

**Kurallar `sablon/kurallar/KURALLAR.md`'de; kodu geçen kuralı oradan oku.** Bu dosya kural yazmaz, yalnız kodunu anar
(ör. `TON-9`); birleşmiş bir kod "→ ANA" der, ANA'yı oku.

## Çalışma kuralları

- **Giriş uzun ve açıklayıcı yazılır** — TON-10 (`sablon/6_vaka_formu.md` → Giriş).
- **Replikler anlaşılır yazılır** — TON-9 (bulanık replik taraması: `sablon/7_uretim_sureci.md` → "Fazla kısa mı?"); espri — TON-15;
  **yüzleşmede paniğin somut sebebi** — YAPI-17.
- **Satır–resim sözleşmesi** — SATIR-1, SATIR-2 ve SR kuralları: hitap SATIR-3, konuk konuğa SATIR-5, süreklilik SATIR-7,
  kıyafet kartı SATIR-8, nesne satırda başlar/biter SATIR-9, araç bayrağı kapıdır SATIR-10, ipucu taşıyan eylem SATIR-13, sahne notu
  TON-8, yüz satıra uyar SATIR-15, ifadeler ayrılır SATIR-17, karar karesi SATIR-18, mekân ve olay akışı SATIR-19. Yakalandığı yer:
  `sablon/7_uretim_sureci.md` adım 3, 8 ve "Satır–resim uyumu".
- **Önce konuş, sonra yap** — SUREC-1. Okumak serbest.
- **Kanona ekleme sahibinin işidir** — KAR-1.
- **Git: yalnız `main`** — SUREC-7. Komutlar: `git push origin HEAD:main`; oturum sonu denetimi "dalda gönderilmemiş commit var"
  derse yerelde `git fetch origin main && git checkout -B main origin/main`.

**Her commit'ten önce** — KOD-3:
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # hepsi geçmeli
```
Commit kapısı bunları (doğrulayıcı + testler) `kaynak/` değişen her commit'te kendisi koşar; diyalogda söz farkını da durdurur
(sahibi onayladıysa iletiye `[söz onaylı]`) — KOD-35. **Yeni bilgisayarda bir kez:** `git config core.hooksPath .githooks`
(Codex ve terminal commit'leri de kapıdan geçsin).
Test sayısı — KOD-7: `kaynak/`'ta 8 test (`test_yeni_v1.js`, `test_yeni_v2.js`, `test_yeni_arayuz.js`, `test_yeni_kimyapti.js`,
`test_ses.js`, `test_yeni_kayit.js`, `test_yeni_bozuk.js`, `test_yeni_softlock.js`), hepsi geçmeli. Hata ile uyarı ayrımı — KOD-5.

> **ESKİ OYUN ARŞİVDE (22 Kasım 2026, sahibinin kararı: prototipti)** — KOD-36. Verisi (`game_data.json`, yedekler, `kisiler.json`,
> `prolog.json`, `_gomulu_gorseller.js`), 22 testi ve dört aracı (akış, tahta, okuma, UI turu) `arsiv/kaynak/eski_oyun/`'de. Depo
> kökündeki `index.html` son hâliyle **donmuş**, artık derlenmez; ana adres olduğu gibi durur. Derleyici ve doğrulayıcı tek kip: yeni
> oyun (`yeni` argümanı kabul edilir, gerekmez). 🛠 düğmesi (DEV_MOD) söküldü. Aşağıda eski oyuna ait anlatımlar geçmiş kayıttır.

**Yeni oyunun verisi `kaynak/yeni/`'de** (Vaka 1 + açılış) — KOD-36. Doğrulayıcı: `cd kaynak && node dogrulayici.js`
(`… yeni` ile aynı) — KOD-37. Yeni oyun yapım şablonuyla üretilir: `sablon/` (3, 6, 7 ve `vakalar/`) +
kurallar `sablon/kurallar/KURALLAR.md`. Yeni oyunun motor eki `kaynak/motor_yeni.js` (Kim yaptı?; karar sahnede, kasa yok —
YAPI-13, YAPI-23, YAPI-31); `motor.js` yeni oyunun tabanıdır (eski oyun için korunması gerekmez) — KOD-36. Doğrulayıcı yeni oyunda ayrıca K17 (giriş, KOD-68), K18 (ipucu
adı, KOD-69), K19 (Kim yaptı?, KOD-70) çalıştırır. Veri elle yazılmaz — KOD-38: JSON'u `arac_json_yaz.js` yazar. Sahne satırı
biçimi, K15/K16 ve açık uyarılar: `kaynak/yeni/OKUBENI.md`. Vaka metni `sablon/vakalar/vakaN_diyalog.md`'de değişir; veriye
`node arac_diyalog.js <dosya> <vaka>` yazar. Açılış metni hâlâ `YENI_VAKA_1.md` → `yeni/acilis.json`.

**Yeni oyunun sayfası** — KOD-39: `cd kaynak && node build_html.js` → depo kökünde
`yeni/index.html` (yayında `…/paravan/yeni/`). Eski sayfanın betiği aynen kullanılır;
konuşma ekranı `kaynak/yeni_arayuz.js` + `.css`'ten eklenir, görseller
`kaynak/yeni/gorseller.json` manifestosundan gömülür. Kayıt anahtarı ayrı (`paravan_yeni_kayit_v1`): donmuş eski sayfa aynı alan adında.

**Yeni oyun turu** — KOD-27: konuşma ekranı değişince `node arac_yeni_tur.js [karar] [set|dukkan]` — yeni oyunu
Pixel 5'te baştan sona oynatır, görüntüleri `kaynak/YENI_UI/`'ye yazar. Test değil, araç.
Vaka 2 için yol adı ver: `node arac_yeni_tur.js [karar] [ortu|vale|terzi|defne] [dogru|zayif|lal|tolga]`
(Vaka 1 önce hızlı oynanır; V1 → V2 geçişi de böylece denenir).
Vaka 3: `[kod|foto|borc|badem|cozmez] [dogru|zayif|kenan|gizem]`; Vaka 4: `[soz|aksam|ilham|cozmez4] [dogru|zayif|tarik|rana]`;
Vaka 5: `[vapur|iskele|usta|cozmez5] [dogru|zayif|kadir|nedim]`;
Vaka 6: `[sofra|siparis|kagit|cozmez6] [dogru|zayif|cengo|jale]`
(önceki vakalar hızlı oynanır). Yol adları, hızlı oynatma ve kapanış satır başları aracın içinde değil, her vakanın
`sablon/vakalar/vakaN_tur.md` dosyasında; kapının yolları `vakaN_kapi.md` → `## yollar` (23 Kasım 2026: yeni vaka aracı
değiştirmez, öbür vakaları yeniden denetletmez).
- `--hepsi` — KOD-28: incelenen vakanın her satırı `YENI_UI/satir/`'a, `dokum.txt`'ye (konuşan/kime/arka/kare/figür); görselli
  tur denetimi (adım 11) bununla yapılır. Ayrıca `satir/adi_gecen_yok.txt` (adı geçen herkes ekranda — SATIR-20).
- `--tablet` — KOD-29: dikey tablette (800×1280) oynatır, tam sayfa görüntü alır. Yeni vaka bittiğinde iki kipte de koş.
- `--cihaz` — KOD-30: 19 ekran boyu (`kaynak/arac_cihaz.js`; ~3 dk). Çıktı `YENI_UI/cihaz/`: karşılaştırma sayfası +
  `bayraklar.txt` (bayraklar ADAY; eşikler `ESIK` tablosunda). Yatay telefonda "Telefonu dikey çevir" uyarısı — ARAYUZ-8
  (`yeni_arayuz.css` sonu, `body::before`). Bilinen tek bayrak: 1280×650'de seçim ekranı (arka planın ~%51'i görünür) — göze batmıyor.

**Kim yaptı? kanıtları kısa adla** — KOD-89: diyalogda `## kanit` (`**olgu_id:** Kısa ad`) → `kim_yapti.kanit_ad`.
**"Dosya kapandı" ve suçlama sonrası metinler Nurcan yüzeyidir** — KOD-90: seçim `motor_yeni.js → cozumYolu()`;
`test_yeni_kimyapti.js` her ipucu alt kümesi × şüpheli × çifti sınar. Mekanik yakalanmaz, elle oku.
**Sızıntı taraması her vakadan sonra** — SUREC-27: `cd kaynak && node arac_sizinti_tur.js [VN] [tur]` (ör. `V5 40`; çıkış 1 = sızıntı;
`YENI_UI/sizinti_okuma.txt` elle okunur). Test değil, araç.
**Defter ve Künye vaka başına** — KOD-91, ARAYUZ-9, ARAYUZ-11, ARAYUZ-31 (`yeni_arayuz.js → defterZincir, defterAni,
vnKisiGorunur`; anı özeti diyalogda `## ani`, `kisiler.json → ani_ozet` — BILGI-7). Portre:
`python3 arac_portre.py <figür> yeni_gorsel/portre/portre_<id>.webp`. Deneme reklamı — ARAYUZ-36 (`reklamGoster`); test için vaka
düğmeleri — ARAYUZ-37 (`VN_VAKA_ATLA`, yayından önce `false`).
**Paylaş (davet kartı)** — ARAYUZ-32: kart `yeni_arayuz.js → paylasKartCiz`, mesaj `paylasMetin`; afiş promptları ve iş sayfası
`sablon/kart_sayfa/uret.py`; afiş kuralları GOMME-21…27, BILGI-14…16. Bağlantı önizlemesi (`og:` etiketleri) `build_html.js yeni`'de;
görseli `yeni_gorsel/paylas_onizleme.jpg` → `yeni/paylas.jpg`. Anı karşılaştırması ve davet kodu Android aşamasında.

**Tablet düzeni (Ekim 2026) — yalnız yeni oyun, `kaynak/yeni_arayuz.css`** — ARAYUZ-1. Üç kural birlikte çözüyor, birini bozma:
- Sütun genişliği — ARAYUZ-2 (`.vn` → `max(480px,56dvh)`).
- Dikey tablette büyütme — ARAYUZ-3 (`@media (min-width:600px) and (min-height:1050px)`; `#app > :not(.vn){zoom:1.3}`;
  `.vn .vn-kisiler`).
- Yatay tablet / geniş ekran — ARAYUZ-4 (`min-width:1000px` ve `min-height:700px`).
- Figür katmanı Pixel 5 oranına kilitli — ARAYUZ-5 (`.vn-figurler`, `max(78cqh, min(115cqh, 100cqw·498/393))`, `min-width:0`).
- Yeni ekran / yeni arka plan — ARAYUZ-6.
Donmuş eski sayfa (kökteki `index.html`) bu kurallara girmez.

**Künye değişikliğinden sonra** `cd kaynak && node arac_kunye_denetim.js` — BILGI-8. Test değil, araç.

**Eski oyunun üç okuma aracı arşivde** (`arsiv/kaynak/eski_oyun/`): `arac_tahta_denetim.js` (çıkarım başlığını oyuncunun kesin
bildiği olguların yanına basar), `arac_akis_denetim.js` (her kararın bütün yüzeyleri yan yana — çelişki yüzeyler ARASINDA durur;
"Cengo'nun yüzü asık" notu bağı +2 yükselten bir kararda öyle oturmuştu), `arac_okuma.js` (vakanın tamamı akış sırasıyla düz metin;
oynayarak bütün yollar gezilemez). Yeni oyunda aynı işi görselsiz tur (`arac_yeni_tur.js … --hepsi` → `dokum.txt`) ve
`sablon/vakalar/vakaN_diyalog.md` görür; yeni oyuna uyarlanmaları gerekirse ayrı iş.

**Figür kesimi yapay zekâyla, tek yöntem** — GOMME-1: `cd kaynak && python arac_kes_yz.py <girdi> <çıktı.webp> --profil peri|cengo|konuk… [--genis]`
(BiRefNet; `KALINTI` sayısını uyarı olarak basar). Eski renk kesimi yalnız karşılaştırma için — GOMME-2:
`node arac_kes.js <girdi> <çıktı.webp> --profil peri|saten|cengo [--genis]`. Profiller ve gerekçeleri
`YENI_OYUN_GORSEL_PROMPTLARI.md` "KESİM ARACI" başlığında. Test değil, araç.

**Paket aracı ve toplu işleme** — GOMME-6: `cd kaynak && node arac_paket.js <klasör> --vaka N [--yaz]`
— dosyalar `G<n>` ile başlar ya da ChatGPT adıyla kalır ve `--sira G1-G13` üretim saatine göre
numara verir; numara `sablon/vakalar/vakaN_gorsel.md` tablosundan tür ve anahtara
çevrilir. `--yaz` yokken yalnız önizler (temas sayfası `YENI_UI/paket_<klasör>.png`); `--yaz` ile
keser, gömer, manifestoyu günceller, doğrulayıcı + iki derlemeyi koşar ve eski `index.html`'in
değişmediğini md5 ile sınar. Saç halesi (GOMME-5), yazı taraması ve boy (GOMME-13) insana kalır. Test değil, araç.

**YouTube Shorts (14 Kasım 2026, sahibinin kararı)** — SHORTS-1, SHORTS-2, SHORTS-11, SHORTS-26…28. Belge `sablon/8_shorts.md`;
senaryo `sablon/vakalar/vakaN_shorts.md`; araç `cd kaynak && node arac_shorts.js N --denetle | --onayla | [video] [--onizle]`
(`shorts/vN/denetim.json`; sesler ve son kare `kaynak/shorts_ayar.json`). Örnek: Vaka 3 (üç video). Üretimi Oğuz Bey yapar.

**UI değişikliğinden sonra** `cd kaynak && node arac_yeni_tur.js` — KOD-22, KOD-23, KOD-27 (Pixel 5'te gerçek tıklamayla baştan
sona; JS hatası, yatay taşma, kayıt). Test değil, araç; `test_*.js` döngüsüne girmez. Eski oyunun `arac_ui_tur.js`'i arşivde.

## Bozulmaz sözleşmeler

- **Nurcan kuralı** — projenin çekirdeği — BILGI-1 (metin tarafı: doğrulayıcı K1/K10/K11 ve `test_sizinti.js`; görsel tarafı
  BILGI-17…20; künye portresi katmanlı — `kisiler.json` → `portre_katman`).
- **Künye de Nurcan yüzeyidir** — BILGI-8. Künyeye katman eklerken ya da metnini değiştirirken `arac_kunye_denetim.js`'i çalıştır.
  Geçmiş: iki sızıntı (İlyas'ın "arkasında biri var"ı, Ceyda'nın "cinayetin bir ucu onda"sı) 20 Eylül 2026'da ChatGPT taze göz
  incelemesinde bulundu; K1b artık koşulun gerçekten var olduğunu denetliyor.
- **Zincir defteri ÜÇÜNCÜ Nurcan yüzeyidir** — BILGI-9 (yalnız hak edilmiş düğüm; `test_tahta.js` sınıyor), BILGI-10 (eksik düğüm
  yok), BILGI-11 (sayaç yok). Ağaçlar vaka başına, çıkarım başlığı zorunlu (K12) — ARAYUZ-10.
- **Cengo bağı (eski oyun) görülüyor ve duyuluyor.** 31 karar `cengoBag`'i besliyor; görsel (`CENGO_GORSEL`, dört ikili kare) ve
  metin (`cengo_sonuc`, 17 kararda üç sıcaklık kademesi). Ayrıntı `arsiv/kaynak/cengo_bag_mekanigi.md` §9-10.
  Cengo satırının üç kuralı: kararın öncesindeki bağa bakar — KAR-18; varyant sırası azalan eşik + `varsayilan` (K13) — KOD-64;
  sıcaklık onay değildir — KAR-17.
  Ekrandaki 5 alevlik gösterge notun "görünmez sayaç" ilkesiyle çelişiyor; sahibi şimdilik kalmasına karar verdi.
- **Kanonda ÇÖZÜLMEYEN iki olgu var:** `ceyda_pay` ve `sevil_pay`. `kaya_biliyordu`
  da `belirsiz` listesinde ama `belirsiz_istisna` ile V6'da bilerek çözülüyor —
  yani "asla çözülmeyen üç şey" demek yanlıştır, ikidir.
- **Olgu adları vakalar arasında benzersiz** (K11) — KOD-63.
- **Ekonomi seçenekleri daraltır, kirletmeye zorlamaz** — YAPI-37 (`test_borc.js` dokuz vakada sınıyor).
- **Kaybetme yok** — YAPI-36.
- **Oyun oyuncuya not vermez** — YAPI-38; ruh hâli sınıflaması (`kararRuhHali`) kelime olarak gösterilmez — YAPI-39.

## Teknik tuzaklar (hepsine düşüldü)

- **Türkçe İ** — KOD-13 (`String(x).toLocaleLowerCase("tr")`).
- **Python'da metin dosyası hep `encoding='utf-8'`** — KOD-93 (Windows cp1252 "ş"yi yazamaz, dosya yarım kalır; kapı kaydedilen
  `.py`'de durdurur; elle: `node kaynak/arac_kodlama.js <dosya.py>`).
- **`index.html` tek bir JS şablon dizgisidir** — KOD-14 (`build_html.js`; `vm.Script` derleme koruması).
- **`DEV_MOD`** — KOD-15 (22 Kasım 2026'da 🛠 düğmesiyle birlikte söküldü).
- **Kapıya boru sokma** — KOD-6. Çıktıyı kısaltman gerekiyorsa önce dosyaya yaz, çıkış kodunu ayrı oku:
  ```
  node dogrulayici.js > /tmp/dog.txt 2>&1; echo $?; tail -1 /tmp/dog.txt
  ```
- **Doğrulayıcı testlerin içinde de çalışır** — KOD-8 (`test_yeni_v1.js`).
- **Testlerde sabit sayı yazma** — KOD-9.
- **Arayüz/motor ayrışması testle eşlenir** — KOD-10 (KRIZLER/KRIZ_METIN, kararRuhHali/RUH_GORSEL).
- **`game_data.json` asıl, yedekler eşlenir** — KOD-11 (eski oyun; dosyalar ve `test_yedek.js` arşivde).
- **`GORSELLER` anahtarı uzantısız** — KOD-16 (derlemenin "✓ görsel: N atıfın hepsi gömülü" satırını gör).
- **Tarayıcı turunda `text=` seçicisi kullanma; fren sabit** — KOD-24 (`.buton:has-text("Geri")`, `.ust-btn:has-text("Kişiler")`).
- **Tur "karar düğmesi yok" derse önce motora sor** — KOD-25 (`oyun.acikKararlar()`).
- **Tarayıcı turu her şeyi görmez** — KOD-23.
- **Ses üç yerde durur** — KOD-17 (EFEKT tablosu, efektCal çağrıları, `ses/`; `test_ses.js`).

## Doğrulama

UI doğrulaması tarayıcıda — KOD-22: Playwright + Chromium,
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Pixel 5 profili.

## Şu anki durum (Eylül 2026)

> **Bu bölüm eski oyunundur (22 Kasım 2026'dan beri arşivde — KOD-36); geçmiş kayıt olarak duruyor.**

Metin, mantık ve ekonomi **bitti**. Fable 5.1 taze göz incelemesi (16 Eylül 2026)
uygulandı — bulgular ve commit'ler `arsiv/kaynak/inceleme_fable.md`, uygulama talimatları
`arsiv/kaynak/inceleme_fable_talimat.md`. **Şüpheli** başlığındaki üç tasarım sorusu bilerek
açık bırakıldı (ruh hâli sınıflaması, istatistik paneli, künye tanışma koşulları) —
sahibine sorulacak.

ChatGPT taze göz incelemesi (20 Eylül 2026) — `arsiv/kaynak/inceleme_chatgpt.md`. **Açık bulgu
kalmadı.** Beş bulgu uygulandı (künyedeki iki Nurcan sızıntısı, "En adil", "Doğru olanı
yaptın", bulanık özne) ve künye kör noktası kapatıldı. A-5 uygulandı (İlyas'ın o
mahallede işi yok) ve A-4 uygulandı (Kaya'nın kendi el yazısıyla defteri) — iki çıkarım
da artık yokluktan değil pozitif kanıttan geliyor. A-3 sahibince **olduğu gibi
bırakıldı**; üç çözüm yolu denendi, üçü de elendi, gerekçeleri notta.

Bu iki eklemenin bağladığı kanon: **İlyas'ın Kaya'nın mahallesiyle bir bağı olduğu**
bir daha yazılamaz, ve **Kaya'nın en ufak bir şüphe duyduğu** bir kurgu yazılamaz —
kendi el yazısı aksini söylüyor. Kaya'nın muayenehanesi de artık içine girilebilen,
eşyaları duran bir yer.

**Görseller: 63 gömülü** (sezon 59'da kapatılmıştı; 20 Eylül'de sahibinin kararıyla
Cengo–Peri ikili kareleri için 4 slot açıldı — `arsiv/kaynak/gorsel_promptlari_2.md` PAKET 7).
WebP q80,
`_gomulu_gorseller.js` içinde base64; veride tanımlı her slot dolu. Sahibinin kararı:
**sezon 59'da kapanmıştı, 63'e açıldı.** (20 Eylül'de ayrıca iki slot **yeniden üretildi** — `v1_merdiven`
kanona aykırı bir binadaydı, `portre_ilyas_v2` olmayan bir temiz yanak gösteriyordu;
sayım değişmedi, bkz. `arsiv/kaynak/gorsel_promptlari_2.md` PAKET 6.) Paket 5'in dört görseli (kriz kutusu + sezon sonu) sipariş
edilmedi — bağlanacakları slot veride hiç açılmamıştı, açmak arayüz işi gerektiriyor;
gerekçe ve dönülecek yer `arsiv/kaynak/gorsel_promptlari_2.md` PAKET 5 başlığında.

Eski oyunun görsel boru hattı — GOMME-11 (900 px, WebP q80, üç kontrol); yazı taşıyabilecek nesnenin yüzü kapatılır, boş yüz
istenmez — BILGI-20. Aynı ailenin üç varyantı (`arsiv/kaynak/gorsel_promptlari_2.md` PAKET 6):

- **Açık uçlu nesne listesi yazma** — ISTEM-29.
- **Görsel yalan söyleyebilir** — ISTEM-30, BILGI-19 (eski kayıt: `arsiv/kaynak/gorsel_stil_sozlesmesi.md` §7c).
- **Sol/sağ talimatı ters anlaşılıyor** — ISTEM-6 (burun-kulak geometrisi).

**Rötuşun sınırı** — DENETIM-52 (`yanb_kirinti` düzeldi; merdivendeki defter rötuşla kaldırılamadı).

Kalan tek iş:

- **Ses — yalnızca efektler, arka plan müziği yok (19 Eylül 2026)** — KOD-18. Müzik katmanı tamamen söküldü — MUZIK tablosu,
  muzikCal/muzikBaslat/muzikDur, çapraz geçiş, vakaModu, dokuz çağrı yeri, 14 ses dosyası.

  Kalan iş: `ses/efekt_*.wav` **5 sentetik yer tutucu** gerçek `.mp3` ile
  değiştirilecek. Sipariş metinleri `kaynak/ses_promptlari.md` → BÖLÜM 2.
  Efektler müzik değil; Suno/Udio üretemez, metinden efekt üreten bir araç
  ya da hazır kütüphane gerekir. Silinecek not: `ses/GECICI.md`.

  **Müzik geri istenirse** sıfırdan başlanmaz ama kod işi gerektirir: ev
  standardı, sekiz stil satırı, kesme noktaları ve hizalama tarifi
  `ses_promptlari.md`'de kayıt olarak duruyor; motor silindiği için geri
  getirilmesi gerekir. `test_ses.js` müzik izinin geri sızmadığını kasten
  kolluyor — karar geri alınırsa o test de bilerek güncellenmeli.

Sonrası Android aşaması (bilerek ertelendi; 9 Kasım 2026'dan beri çerçevesi RAF-101…RAF-113, eski belge `arsiv/kaynak/RAF_KARARLARI.md`):
Capacitor (RAF-102), görselleri base64'ten çıkarma, donanım geri tuşu, erişilebilirlik, ve `arsiv/kaynak/final_tablo_plani.md`'deki
sezon sonu istatistik tablosu.

**Android aşamasına girerken sahibine HATIRLAT — eski dalları toplu silecek (17 Ekim 2026 isteği).**
GitHub'da `main` dışında yedi dal duruyor; hepsi incelendi, hiçbirinde `main`'de olmayan iş yok:
`ccr-343110e4-d0l9zo`, `ccr-87724e8f-t47bex`, `ccr-e81c6ba9-9m243w` (`main`'de olmayan commit yok),
`ccr-4dc083d1-16dsmw`, `ccr-b852a2a4-jzjulo`, `ccr-a12f42ec-wu06x5` (9–10 Ekim; GitHub yüzlerce
commit "önde" gösterir çünkü `main`'in geçmişi 12 Ekim'de tek commit'le yeniden başladı — içerikleri
`main`'de), `claude/vibrant-mccarthy-jdec2m` (13 Eylül, PR #1 ile birleşmiş). Silme sahibinde:
Branches sayfası → çöp kutusu (oturumdan `git push --delete` geçmiyor). O güne kadar yeni dal
açılırsa listeye eklenir; silinince bu not kalkar.
