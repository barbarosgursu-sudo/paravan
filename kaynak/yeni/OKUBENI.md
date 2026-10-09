# YENİ OYUN VERİSİ (Peri & Cengo)

Bu klasör yeni oyunun verisidir. Eski oyunun (dokuz vaka, `kaynak/game_data.json`)
verisine **dokunulmaz**; o hâlâ yayındaki `index.html`'in kaynağı.

| dosya | ne |
|---|---|
| `game_data.json` | kanon, ekonomi, vakalar (şimdilik yalnız V1) |
| `acilis.json` | açılış: dört konuşma sahnesi (haciz → manto → Cengo → kapı çalar) |
| `kisiler.json` | anı defteri (karar başına). **Künye henüz yazılmadı** — her katman yeni metin ve Nurcan yüzeyi, sahibinin onayıyla yazılacak |
| `prolog.json` | boş; eski araçlar okuyabilsin diye duruyor |

Kaynak metin: Vaka 1 için `sablon/vakalar/vaka1_diyalog.md` (sahneler, karar metinleri, anı
defteri) — veriye `cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md V1`
yazar; **elle düzenlenmez.** Açılış için `kaynak/YENI_VAKA_1.md` → `acilis.json`.

## Komutlar

```
cd kaynak
node dogrulayici.js yeni          # yeni veriyi denetler (argümansız = eski oyun)
node test_yeni_v1.js              # yeni verinin testi (test_*.js döngüsüne girer)
cd yeni && node ../arac_okuma.js V1   # düz okuma (sahneleri değil, düz 'text'i basar)
```

Motor, doğrulayıcı ve araçlar **aynen** devralındı (`YENI_OYUN_CERCEVE.md` §3).

## Sayfa ve konuşma ekranı

```
node build_html.js yeni           # → depo kökü yeni/index.html
node arac_yeni_tur.js 0 set       # Pixel 5 turu (karar sırası, yol: set | dukkan)
```

Akış (şablon, `sablon/1_oyun_yapisi.md`): açılış sahneleri → masa → giriş + konuşma
sahnesi → araştırma (ipucu açılınca sahnesi oynar, ardından "Deftere düştü" kartı) →
**Kim yaptı?** (şüpheli + iki kanıt, tek hak) → **yüzleşme** (sonuca göre dört sahneden
biri) → **kovalamaca** → karar ekranı (dört karar her zaman açık) → sonuç (kararın
karesi, Cengo satırı, anı defteri, ücret + karar parası) → kapanış sahnesi (bağa göre
iki hâl) → masa.

**Motor eki `kaynak/motor_yeni.js`** (`OyunYeni extends Oyun`): Kim yaptı?, sonda
ödenen ücret, suçlamanın kaydı. `motor.js`'e dokunmaz (o eski sayfaya da gömülü ve eski
sayfa birebir aynı çıkmalı). Yeni kip derlemesi dosyayı `// <node>` bloklarını atarak
sayfaya ekler; `yeni_arayuz.js` sayfadaki `Oyun` adını `OyunYeni`'ye bağlar.

Konuşma ekranı `kaynak/yeni_arayuz.js`: eski arayüzün fonksiyonlarını sarar
(`prologGoster`, `vakaAc`, `kaynakAcFaz`, `arastirmaFazi`, `kararFazi`, `kararVerFaz`,
`sonEkrani`, `kasaSerit`, `cengoGosterge`). Cengo göstergesi bu sayfada boş döner
(kural kitabı 11: bağ ekranda görünmez).
Peri solda; sağda Cengo ya da konuk — sahnede olan ve en son konuşan. "Sahneyi geç"
seçime kadar sarar, seçimi atlamaz. **GEÇİCİ:** "◂ Geri" düğmesi (sahibinin gözden geçirmesi için, 7 Ekim 2026) satır satır geri gider; sahnenin ilk satırında zincirdeki önceki sahnenin başına döner (açılış, giriş+konuşma). Oyun durumunu geri almaz (ipucu, karar, para). Kapatmak: `yeni_arayuz.js` → `VN_GERI = false`.

**Sahne kaydı (9 Ekim 2026, sahibinin isteği):** her konuşma akışı (açılış, giriş, ipucu,
yüzleşme+kovalamaca, kapanış) `akisBaslat` ile başlar; hangi sahnede ve kaçıncı satırda
olunduğu ayrı anahtarda (`paravan_yeni_kayit_v1_sahne`) tutulur. Açınca sahne o satıra kadar
yazı/geçiş beklemeden yeniden oynatılır (`vnSar`), seçimler kaydedildiği gibi yapılır; görüntü
(arka plan, kıyafet, figürler) aynı gelir. Kayıt motor durumuyla tutarsızsa yok sayılır. Akış
bitince silinir. Sonuç ekranında kapatılırsa kapanış sahnesinden sürer.

**Tarayıcı iletişim kutusu yok:** claude.ai artifact çerçevesi `confirm()`/`alert()`ı engelliyor (kutu çıkmıyor, `confirm` "hayır" döner). Eski sayfanın "Baştan başla"sı bu yüzden hiçbir şey yapmıyordu; yeni oyunda `yenidenBasla` sayfa içi onay ekranıyla değiştirildi. Yeni bir onay/uyarı eklerken iletişim kutusu kullanma. Ruh hâli görseli ve istatistik paneli yeni
sayfada yok (ikisi de açık soru). `test_yeni_arayuz.js` manifesto ↔ kanon ↔
derleyici eşlemesini sınar.

**Tema (6 Ekim 2026, sahibinin kararı):** bütün ekranlar konuşma ekranının dilinde —
kâğıt zemin, koyu mürekkep, kalın kontur, ofset gölge, Nunito + Shrikhand
(Google Fonts; çevrimdışıyken Georgia'ya düşer — Android aşamasında gömülecek).
`yeni_arayuz.css`'in ikinci bloğu eski CSS değişkenlerini yeniden tanımlar ve sabit
renkli kuralları ezer.

**Batma uyarısı yok (sahibinin kararı):** kasa şeridi yalnız kasa ve borcu gösterir;
karar seçeneklerinin altındaki "yeni iş gelmezse batarsın / açık verirsin / borca
girersin" kaldırıldı, "ay sonunda X ₺" önizlemesi ve gider kutusu kaldı (bilgi).
`arac_yeni_tur.js` karar ekranında bu cümleleri arar; `test_yeni_arayuz.js` eski
karar ekranının temizlenen sınıf adlarını hâlâ ürettiğini sınar.

## Eski formata eklenenler

Eski veri formatı (`veri_format_sozlesmesi.md`) aynen geçerli; üstüne:

**`kanon.sahne`** — konuşma ekranının görsel seti. Doğrulayıcı K15 her satırı buna karşı denetler.
```
figurler: { peri: { setler: { manto: [ifadeler], balikli: [...] } },
            cengo: { ifadeler: [...] }, riza: { ad, ifadeler }, ... }
sesler:   { ses: "Ses", asistan: "Set asistanı" }   // figürü olmayan konuşanlar
arkalar:  ["A1", ...]     // arka plan kodları (YENI_VAKA_1.md görsel planı)
kareler:  ["D1", "K1", ...]   // detay ve ara kareler
```

**Sahne** — vaka içinde `sahneler.{giris, konusma, donus, kapanis}`, her ipucunda
`sahne`, açılışta `acilis.json → sahneler[]`:
```
{ arka: "A6", figurler: ["peri","cengo"], set: "manto", satirlar: [SATIR, ...] }
```

**Satır:**
```
{ k: "peri", i: "kas", m: "Ne oldu?" }       // konuşan, ifade (verilmezse önceki kalır), metin
{ k: "not", m: "Kapı açılıyor." }            // anlatı; ifade almaz
{ k: "ses", m: "Tel lazım mı?" }             // figürü olmayan konuşan; ifade almaz
```
Satırda isteğe bağlı sahne değişiklikleri:

| alan | anlamı |
|---|---|
| `arka: "A5b"` | arka plan değişir (aynı yer+saat çapraz geçiş, değilse karartma — taslaktaki kural) |
| `kare: "K8"` | tam ekran ara kare / detay; figürler çekilir |
| `set: "balikli"` | Peri'nin kıyafet seti değişir (sonraki ifadeler o setten seçilir) |
| `gir: "serkan"` / `cik: true` | konuk sahneye girer / çıkar; `gi` girenin ilk ifadesi |
| `kime: "peri"` | konuk varken Cengo Peri'ye konuşuyor: sağa geçer. Yoksa Cengo konuk varken SOLA geçer (aynalı), konuk sağda kalır. Konuk satırında `kime: peri\|cengo` solda kimin duracağını seçer |
| `kasa: true` | kasa göstergesi ilk kez görünür (açılış) |
| `peri: "tac"` | konuşan başkayken Peri'nin (dinleyen) ifadesi; K15 set kuralıyla denetler |
| `mekan: true` | mekân karesi: figürler çekilir, arka plan çıplak görünür (yeri tanıtan anlatı satırı) |
| `bag: "yuksek"` / `"dusuk"` | satır yalnız o bağ hâlinde oynar (kapanış; eşik +1, `motor_yeni.js` → `BAG_ESIK`) |

**Seçim:** `{ secim: "Peri ne desin?", secenekler: [ { m: "…", satirlar: [...] }, ... ] }`

**Karar:** `kare: "K3"` (sonuç ekranının görseli). Anı defteri `kisiler.json → defter.V1.<karar>`.

**Karar:** `onizleme` = karar ekranındaki tek cümlelik kısa sonuç (kural 22a); `para` = **karar parası** (ücretin üstüne eklenen ya da düşülen; çoğu 0),
`gate: "yok"` (kapı yok), `seed_yaz` yok (tohum yok).

**Vaka — Kim yaptı?:**
```
kim_yapti: {
  suclu: "serkan",
  supheliler: [ { id, ad, gorunur: "her_zaman" | <ifade> } ],   // ekranda ne zaman görünür
  dogru_ciftler: [ [<olgu|ifade>, <olgu|ifade>], ... ],          // suçu kanıtlayan iki olgu
  ucret: { dogru, zayif, yanlis },                                // sonda ödenir
  kesinti: { zayif, yanlis }   // karar ekranının üstü; {anlasilan} {kesinti} tutarla dolar (diyalogda '## ucret')
}
sahneler: { giris, konusma, yuzlesme_dogru, yuzlesme_zayif, yuzlesme_<masum id>, kovalamaca, kapanis }
anahtarlar: { <ipucu olgusu>: ["kelime", ...] }                    // K17 sızıntı araması
```
Girişte anlatılan olgular `giris[].acilan`'da (ipucu değil). `ekonomi.gider` boş (para
yalnız birikir). Ücret Vaka 1'de bilerek `vaka.ucret`'te de duruyor (masa kartı).

## Düz metin ile sahne

İpucunun `text`/`meta`'sı **düz okuma biçimi** (eski arayüz, `arac_okuma.js`, K5/K10);
`sahne` **oynanan biçim**. İkisi aynı içeriğin iki hâli — birinde değişen ötekinde de
değişmeli. K1 (isim sızıntısı) ikisini de tarar.

## Doğrulayıcıya eklenen kurallar

- **K15 — Sahne satırı** (yalnız `kanon.sahne` olan veride): konuşan tanımlı mı, ifade
  o figürün (Peri için o anki setin) sprite'ı mı, arka plan/kare listede mi, `bag`
  geçerli mi. Hiçbiri JS hatası vermezdi; tanımsız ifade sessizce eski sprite'ta kalırdı.
- **K16 — Kararsız yol** (iki oyunda da): hakkı harcamanın her biçiminde en az bir karar
  açık kalmalı. Yeni oyunda kapı olmadığı için kendiliğinden geçer.
- **K17 — Giriş** (`kim_yapti` olan vakada): büroda (`kanon.sahne.buro`), 15–25 replik,
  bir şüphelinin adı geçiyor, ücret konuşuluyor (rakam ya da yazı), ipucu olgularının
  anahtar kelimeleri (`anahtarlar`) girişte geçmiyor. Kelime arar; dolaylı ele vermeyi
  yakalamaz — o, görselsiz testte sahibinde.
- **K18 — İpucu adı:** addaki özel isimler (kesmeli kelime ya da ilk kelime dışında büyük
  harfle başlayan) ipucu açılabilir olduğunda duyulmuş olmalı (giriş, konuşma, needs
  zincirindeki ipuçlarının sahne ve olguları; Peri ve Cengo her zaman bilinir).
- **K19 — Kim yaptı?:** 3 şüpheli, suçlu her yolda görünür, kanıt çiftleri olgu, ücret
  sırası, dört yüzleşme sahnesi, 4 karar, kapı/tohum/bedava ipucu yok, ipucu > hak,
  en kötü durumda kasa eksiye düşmez, hak içinde en az 2 farklı doğru kanıt çifti,
  hiçbir doğru çift tek ipucundan çıkmaz (kural 21c), her kararın `onizleme`si ve her
  ücret kesintisinin açıklaması (`kesinti`) var (kural 22a).

## Açık uyarılar (tasarım; sahibine soruldu)

- **K8:** `sete_gotur` hem `her_seyi_anlat`'ı (aynı para, bağ +1'e 0) hem
  `serkanla_anlas`'ı (+3.000, aynı bağ) iki eksende de geçiyor.
- K9 uyarısı kalktı: tohum yok (şablon, 8 Ekim 2026).
