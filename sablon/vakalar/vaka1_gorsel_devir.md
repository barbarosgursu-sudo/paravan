# DEVİR — VAKA 1 GÖRSEL ÜRETİMİ (yeni pencere için)

Bu belge görsel işini yeni bir pencerede eksiksiz sürdürmek içindir. Tarih: 9 Ekim 2026.
Önce bunu, sonra sırayla `CLAUDE.md`, `kaynak/DEVIR.md`, `sablon/vakalar/vaka1_gorsel.md`,
`sablon/5_gorsel_sistemi.md` oku.

---

## 1. Neredeyiz

- Yeni oyun: **Peri & Cengo** (Paravan Dedektiflik'in yeni sürümü). Yayında: `…/paravan/yeni/`.
- Oyun **yapım şablonuyla** (`sablon/`, 7 parça) yapılıyor. Şu an **yalnız Vaka 1** ("Kayıp Tekne").
- **Hikâye dondu (Onay 2, 9 Ekim).** Metin artık değişmez; değişirse 7. parçadaki "değişiklik
  kuralı"yla.
- **Şimdiki adım: 8, görseller.** 11 prompt yazıldı: `sablon/vakalar/vaka1_gorsel.md`.
  Promptlar ve numaralı referans görseller sahibine gönderildi.
- **9 Ekim: 11 görselin 11'i oyunda.** Gri yer tutucu kalmadı. Sonuç notları her promptun altında
  (`vaka1_gorsel.md`); G7–G11 promptları mekâna göre düzeltildi, G9 üç denemede tuttu.
- **Onay 3 sürüyor (9 Ekim):** sahibinin oyun notlarıyla — "Buyurun, oturun"da sağa Rıza
  (`gir: riza`); konuk varken Cengo sola geçer, konuğa bakar (A yolu, `yeni_arayuz.js`;
  `kime: peri` istisnası 3 satırda; konuk satırında da `kime`). Cengo sinirli metinde ("Babana
  söyleyecek miydin?"). Boyacı satırında D3 kalır. Tuba küçüldü (0.8). 29 figürde saç halesi
  temizlendi. A6b (büro ters açı, manto askıda). K3 yeniden çizildi (mavi iz tek yerde, küpeşte
  bütün). Şablona oran satırı (figür 4:5, sahne 3:4). Sahibi oynamaya devam ediyor; notları
  geldikçe tek tek. Künye yazıldı (8 kişi, sahibinin onayı; `yeni/kisiler.json`), portreler
  figürlerden kırpıldı (`yeni_gorsel/portre/`). `node arac_kunye_denetim.js yeni` yeni künyeyi
  basar (9 Ekim; sızıntı yok). 10 Ekim: sahibi "her şey tamam gibi" dedi; resmî Onay 3 ve Vaka 2 başlangıcı bekleniyor.

## 2. Sahibiyle çalışma biçimi (çok önemli)

- **Çok basit, çok kısa yaz.** Türkçe olmayan kelime kullanma; Türkçesini yaz.
- Eksikleri **tek tek** konuş; bir adımda dur, ileri koşma.
- **Yalnız Vaka 1** üzerinde çalış.
- **Kanona ekleme** (oyunda henüz olmayan bir gerçek) → önce "nereye ne ekleyeceğim" de, onay al.
- **Commit doğrudan `main`'e** ve ayrıca oturumun verdiği dala push. Kendiliğinden dal açma.
- **Referans görseller her prompt ile, numaralı gönderilir** (dosyanın kendisi, adıyla).
  Kod (A9, K13) tek başına yazılmaz.

## 3. Görsel kuralları (sahibinin duran talimatları)

- **Peri olabildiğince seksi**, Google Play ve üreticilerin izin verdiği kadar. Çıplaklık yok,
  cinsel eylem yok. Çocuk asla.
- **Mantolu Peri hep:** siyah kalem etek, ince siyah kemer, kırmızı stiletto.
- **Her vakada yeni kıyafet** (Vaka 1 istisna: temel set kullanılır).
- **Yan karakterlere ana karakter referans verilmez** (stil için başka bir yan karakter).
- **Benzer yan karakterler ayrışır** (yaş, yapı, saç, bıyık).
- **Metin görselle uyuşmalı.**
- Cengo'nun kızı asla cinselleştirilmez. Devlet, kurum ve gerçek kişilerle şaka yok.
  Mavi Ay'ı somut olarak kopyalama.
- **Nurcan kuralı:** görsel, oyuncunun henüz hak etmediği bilgiyi göstermez.
- **Yazı riski:** yazı taşıyabilecek her nesnenin yüzü kapalı tarif edilir. Görselde harf,
  rakam, logo olmamalı (büyütüp bak).
- Prompt kalıbı ve bilinen hatalar: `sablon/5_gorsel_sistemi.md` D. Ayrıntılı geçmiş:
  `kaynak/YENI_OYUN_GORSEL_PROMPTLARI.md` (3800+ satır; "YAN KARAKTERLER — VAKA 1" ve
  "KESİM ARACI" başlıkları en yararlıları).
- Üretici: önce ChatGPT; reddederse ya da tutmazsa Grok.

## 4. 11 görsel — durum ve nereye gidecek

| # | ne | durum | gidecek dosya | manifesto anahtarı | metinde yeri |
|---|---|---|---|---|---|
| G1 | Kemal Reis, normal (fırçalı) | **oyunda** (9 Ekim) | `figur_kemal_normal.webp` | `kemal.normal` | iskele ipucu |
| G2 | Kemal Reis, öfkeli (G1'den) | **oyunda** (9 Ekim) | `figur_kemal_ofkeli.webp` | `kemal.ofkeli` | Kemal yüzleşmesi |
| G3 | Serkan, sakin, kartsız | **oyunda** (9 Ekim) | `figur_serkan_sakin.webp` | `serkan.normal` (eski kartlı görselin yerine) | Serkan ipucu, yüzleşmeler |
| G4 | Serkan, panik (G3'ten) | **oyunda** (9 Ekim) | `figur_serkan_panik.webp` | `serkan.panik` | yüzleşmeler |
| G5 | Peri mantolu, acı | **oyunda** (9 Ekim) | `sprite/peri_manto_aci.webp` | `peri.manto.aci` | zayıf kanıt yüzleşmesi |
| G6 | Cengo, sinirli | **oyunda** (9 Ekim; kovalamaca sonu "Babana söyleyecek miydin?") | `sprite/cengo_sinirli.webp` | `cengo.sinirli` | ileride |
| G7 | Peri mantosunu asıyor, Rıza gözünü kaçırıyor | **oyunda** (9 Ekim) | `ara_k15_aski.webp` | `K15` | giriş, diyalog satır ~31 ("Peri mantosunu çıkarıp askıya asıyor") |
| G8 | Cengo pilavla Tuba'nın yanında | **oyunda** (9 Ekim) | `ara_k16_pilav.webp` | `K16` | set_sorumlusu ipucu, satır ~132 ("Set arkası, yemek masası…") |
| G9 | Kepenkte borç notu (detay) | **oyunda** (9 Ekim, 3. deneme) | `detay_d4_not.webp` | `D4` | serkan ipucu, satır ~154 ("Kepengin üstüne bantlanmış…") |
| G10 | Akşam koridoru, Peri anahtarla | **oyunda** (9 Ekim, 2. deneme) | `ara_k17_anahtar_aksam.webp` | `K17` | kapanış, satır ~290 ("Koridor. Peri anahtarı kilide sokuyor") |
| G11 | Cengo teli Peri'nin avucuna koyuyor | **oyunda** (9 Ekim) | `ara_k18_avuc.webp` | `K18` | kapanış, satır ~297 (`bag: yuksek`) |
| A6b | Büro gündüz, ters açı, manto askıda (sahibinin isteği) | **oyunda** (9 Ekim) | `arka_a6b_buro_askili.webp` | `A6b` | giriş K15'ten sonra, konuşma sahnesi |
| G12 | Set asistanı (sahibinin isteği; görünüş onaylı: yirmilerinde, siyah küt saç, siyah tişört/kargo, telsiz, telefon) | **oyunda** (9 Ekim; 2. üretim denendi, sahibi ilkini tercih etti — boy 0.76) | `figur_asistan.webp` | `asistan.normal` (ses → figür) | bebek ipucu, iki satır |
| G13 | Kemal, sokak hâli, öfkeli (önlüksüz, eller yıkanmış; sahibinin isteği) | **oyunda** (9 Ekim) | `figur_kemal_sokak.webp` | `kemal.sokak` | Kemal yüzleşmesi (iskele fırçalı/önlüklü kalır) |
| G14 | Serkan simit tablasına çarpıyor (Cengo'suz) | **oyunda** (10 Ekim) | `ara_k10b_simit_serkan.webp` | `K10b` | kovalamaca 1. satır |
| G15 | Peri simitlerin arasında koşuyor (K10b + K11 karışımı, yandan; çarşafsız) | **oyunda** (10 Ekim) | `ara_k10c_kosu.webp` | `K10c` | kovalamaca: "Kestirme nereye çıkıyor?", "Bilmiyorum!" |
| G16 | K11 yeniden: çarşaflı Peri kovalamacanın içinde (Serkan önde, teyze, mandallar, güvercinler) | **oyunda** (10 Ekim) | `ara_k11_carsaf.webp` (eskisi `_eski2`) | `K11` | kovalamaca çarşaf satırları |
| G17 | Peri çarşafı fırlatıp rıhtıma çıkıyor, Serkan önde (sokaktan iskeleye geçiş) | **oyunda** (10 Ekim) | `ara_k11c_rihtim.webp` | `K11c` | kovalamaca "Peri çarşafı üstünden atıyor" |
| G18 | Peri mantolu, telefonla (hoparlörden konuşuyor) | **oyunda** (10 Ekim) | `sprite/peri_manto_telefon.webp` | `peri.manto.telefon` | Tuba yüzleşmesi |
| G19 | Peri balıklı, istavriti kuyruğundan havada tutuyor (geniş kesim) | **oyunda** (10 Ekim) | `sprite/peri_balikli_istavrit.webp` | `peri.balikli.istavrit` | "Bunu kime veriyorum?", "Akşam yemeği çıktı" (anlatı satırında `balikli.utanmis`) |
| G20 | Peri mantolu, ıslak, mantosunu sıkıyor (hortumdan sonra) | **oyunda** (10 Ekim) | `sprite/peri_manto_islak.webp` | `peri.manto.islak` | kovalamaca son satırı "Peri mantosunu sıkıyor" |
| G21 | Peri mantolu, avucunda tel; gururlu, hafif utangaç (geniş, öne alınır) | **oyunda** (10 Ekim) | `sprite/peri_manto_tel.webp` | `peri.manto.tel` | kapanış bağ yüksek: "Ben hırsız değilim…" ve sonrası |

Kodlar (K15–K18, D4) **öneri**; mevcut son kodlar K14 ve D3. Dosya adları da öneri.

**Kemal'in görünüşü onaylandı (9 Ekim):** elli yaşlarında, iri, kısa kır saç, kirli sakal,
**bıyıksız**, lastik balıkçı önlüğü, elleri beyaz boyalı (boya kanonda: `kemal_boya`).

**Referans dosyaları:** sahibi her promptla referans görsellerini de istiyor. Depo kökünde
`referans/` (git'e girmez) — `G<n>-<sıra>_<ad>.png`; kesilmiş figürler bej zemine basılır.
Kemal'in kesim profili: `arac_kes.js --profil kemal`; Serkan ve sonraki konuklar `--profil konuk`
(ikisi de 1122×1402, tam genişlik). Eski `figur_serkan.webp` (kartlı) artık kullanılmıyor.

## 5. Görsel gelince yapılacaklar (sırayla)

1. **Kontrol** (`5_gorsel_sistemi.md` E): kimlik, ölçek ve baş yüksekliği, bakış (kadrajın
   soluna), el ve parmak sayısı, yazı/harf/logo (büyüt), kıyafet sabitleri, çekicilik,
   hak edilmemiş bilgi, metindeki satırla uyum. Sorun varsa sahibine **kısa** söyle,
   düzeltme promptu ver.
2. **Figür (G1–G6)** — `arac_kes.js` ile kes:
   ```
   cd kaynak
   node arac_kes.js <girdi.png> yeni_gorsel/<dosya>.webp --profil <profil> --onizleme /tmp/.../yesil.png
   ```
   - Peri mantolu (G5): `--profil peri`. Cengo (G6): `--profil cengo`. Kaynak 1122×1402 olmalı;
     değilse önce zemin rengiyle 1122×1402'ye getir (`convert` kurulu).
   - Yan karakter (Kemal, Serkan): `--profil hilmi` (kaynak 1086×1448, tam genişlik).
     Kemal yeni karakter: çerçeve uymazsa `PROFILLER`'a yeni profil ekle.
   - El çerçeveden taşarsa `--genis`; araç CSS'i basar, manifestoda `genis` listesine ekle.
   - Yeşil önizlemede kalıntı ve delik ara (beyaz/bej giysi silinebilir).
   - Boy (`gorseller.json` → `boy`): Kemal 0.95, Serkan 0.92 duruyor.
3. **Ara kare / detay (G7–G11)** — 900×1200, WebP q80 (`convert in.png -resize 900x1200 -quality 80 out.webp`).
4. **Manifesto** `kaynak/yeni/gorseller.json`:
   - `dosyalar`'a ekle (anahtar **uzantısız** kod ya da `figür.ifade`).
   - Figürse `yer_tutucu` listesinden sil (şu an: kemal.normal, kemal.ofkeli, serkan.panik,
     peri.manto.aci, cengo.sinirli).
5. **Yeni kare kodu (G7–G11):** `kaynak/yeni/game_data.json` → `kanon.sahne.kareler`'e
   ekle (JSON'u elle değil `arac_json_yaz.js` ile yaz). Sonra diyalogda ilgili satırın
   sonuna `{kare: K15}` ekle (`sablon/vakalar/vaka1_diyalog.md`) ve:
   ```
   node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md V1
   ```
   Kare yalnız o satırda görünür; devam eden satırlarda da kalsın isteniyorsa her satıra
   yazılır (K10 simit sahnesindeki gibi).
6. **Doğrula ve derle** (kapıya boru sokma):
   ```
   cd kaynak
   node dogrulayici.js && node dogrulayici.js yeni
   node build_html.js yeni && node build_html.js
   md5sum ../index.html        # bc871463456171ae79f25847a2b962ad olmalı (eski sayfa değişmez)
   bayrak=0; for t in test_*.js; do node $t >/tmp/t.txt 2>&1 || { echo "KIRIK $t"; bayrak=1; }; done; echo bayrak $bayrak
   ```
   Derleme "✓ görsel: N atıfın hepsi gömülü" demeli; yer tutucu sayısı azalmalı.
   `test_bozuk.js` BLOCKED basar ama 0 döner — beklenen.
7. **Tur:** `node arac_yeni_tur.js [karar] [set|dukkan] [dogru|zayif|kemal|tuba]` →
   görüntüler `kaynak/YENI_UI/`. Yeni görseli ekranda gör, sahibine gönder.
8. `kaynak/yeni_gorsel/` içine yaz, sonuç notunu `vaka1_gorsel.md`'nin ilgili başlığına
   ekle ("Tuttu" / sorun), bu belgedeki tabloda durumu güncelle, commit + push.

## 6. Teknik tuzaklar (görselle ilgili)

- **Kıvırcık saçta bej hale (9 Ekim, sahibi buldu):** `arac_kes.js` saç kıvrımlarında kalan arka
  planı silemiyor — Tuba, Cengo (6), Peri (19) ve Hilmi (3) elle temizlendi; Rıza, çaycı, Kemal,
  Serkan temizdi (kır saçlılarda bu yöntem saçı da siler, dikkat) (yalnız baş bölgesi:
  saydama bağlı açık-bej pikseller + kıvrımda kapalı kalmış nötr bej cepler; ten ve beyaz yaka
  korunur). Yeni figür kesince saçı yeşil önizlemede büyütüp bak.
  **Dikkat:** hale temizliği gümüş/gri nesneleri de yer (G19'da istavrit kayboldu) — temizliği
  yalnız baş kutusuyla sınırla, yüz ve bluzu dışarıda bırak.

- `GORSELLER` anahtarı **uzantısız**; uzantılı anahtar sessizce görünmez (derleyici yakalar).
- `toLocaleLowerCase("tr")` "ZAYIF"ı "zayıf" yapar — kimliklerde açık eşleme kullan.
- Eski `index.html` **birebir aynı** kalmalı (md5 yukarıda). `motor.js`'e dokunma.
- Tarayıcı: `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Pixel 5.
- Playwright'ta `text=` seçicisi kullanma; düğmeyi hedefle.
- Yayın öncesi yapılacak: Geri düğmesini kaldır (`VN_GERI=false`).

## 7. Yeni pencereye ilk mesaj (sahibi yapıştırır)

> Paravan, Vaka 1 görselleri. Önce `sablon/vakalar/vaka1_gorsel_devir.md` oku, sonra
> içinde sayılan dosyaları. Kaldığımız yer: 11 prompt hazır, görsel üretimine başlıyorum.
> Görselleri sırayla göndereceğim; her birini kontrol et, kes, oyuna koy.
