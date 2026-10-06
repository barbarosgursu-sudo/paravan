# YENİ OYUN VERİSİ (Peri & Cengo)

Bu klasör yeni oyunun verisidir. Eski oyunun (dokuz vaka, `kaynak/game_data.json`)
verisine **dokunulmaz**; o hâlâ yayındaki `index.html`'in kaynağı.

| dosya | ne |
|---|---|
| `game_data.json` | kanon, ekonomi, vakalar (şimdilik yalnız V1) |
| `acilis.json` | açılış: dört konuşma sahnesi (haciz → manto → Cengo → kapı çalar) |
| `kisiler.json` | anı defteri (karar başına). **Künye henüz yazılmadı** — her katman yeni metin ve Nurcan yüzeyi, sahibinin onayıyla yazılacak |
| `prolog.json` | boş; eski araçlar okuyabilsin diye duruyor |

Kaynak metin: `kaynak/YENI_VAKA_1.md`. **Metin orada değişir, sonra buraya taşınır.**

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

Akış: açılış sahneleri → masa → giriş + konuşma sahnesi → araştırma (eski ekran;
ipucu açılınca sahnesi oynar, ardından "Deftere düştü" kartı) → "Karar vermeye
hazırım" → büroya dönüş sahnesi (vaka başına bir kez) → karar ekranı → sonuç
(kararın karesi, Cengo satırı, anı defteri, hesap) → kapanış sahnesi → masa.

Konuşma ekranı `kaynak/yeni_arayuz.js`: eski arayüzün altı fonksiyonunu sarar
(`prologGoster`, `vakaAc`, `kaynakAcFaz`, `kararFazi`, `kararVerFaz`, `sonEkrani`).
Peri solda; sağda Cengo ya da konuk — sahnede olan ve en son konuşan. "Sahneyi geç"
seçime kadar sarar, seçimi atlamaz. Ruh hâli görseli ve istatistik paneli yeni
sayfada yok (ikisi de açık soru). `test_yeni_arayuz.js` manifesto ↔ kanon ↔
derleyici eşlemesini sınar.

**Henüz eski görünümde:** masa, araştırma, karar ve sonuç ekranları eski oyunun
lacivert noir temasında; konuşma ekranı taslağın açık temasında.

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
| `gir: "serkan"` / `cik: true` | konuk sahneye girer / çıkar |
| `kasa: true` | kasa göstergesi ilk kez görünür (açılış) |

**Seçim:** `{ secim: "Peri ne desin?", secenekler: [ { m: "…", satirlar: [...] }, ... ] }`

**Karar:** `kare: "K3"` (sonuç ekranının görseli). Anı defteri `kisiler.json → defter.V1.<karar>`.

**Vaka:** `ucret` (vakanın sabit ücreti; şimdilik bilgi, karar `para`'sına zaten dahil).

## Düz metin ile sahne

İpucunun `text`/`meta`'sı **düz okuma biçimi** (eski arayüz, `arac_okuma.js`, K5/K10);
`sahne` **oynanan biçim**. İkisi aynı içeriğin iki hâli — birinde değişen ötekinde de
değişmeli. K1 (isim sızıntısı) ikisini de tarar.

## Doğrulayıcıya eklenen iki kural

- **K15 — Sahne satırı** (yalnız `kanon.sahne` olan veride): konuşan tanımlı mı, ifade
  o figürün (Peri için o anki setin) sprite'ı mı, arka plan/kare listede mi. Hiçbiri
  JS hatası vermezdi; tanımsız ifade sessizce eski sprite'ta kalırdı.
- **K16 — Kararsız yol** (iki oyunda da): hakkı harcamanın her biçiminde en az bir karar
  açık kalmalı. İlk yazımda V1'de İskele + Serkan + Dükkân yolu Bebek'i hiç görmüyor,
  dört karar da kapalı kalıyordu. Sahibinin kararıyla İskele bedelsiz oldu.

## Açık uyarılar (tasarım; sahibine soruldu)

- **K8:** `sete_gotur` hem `her_seyi_anlat`'ı (aynı para, bağ +1'e 0) hem
  `serkanla_anlas`'ı (+3.000, aynı bağ) iki eksende de geçiyor.
- **K9:** beş tohum (`v1_karar`, `iskele_dostu`, `riza_levrek`, `serkan_iyilik`,
  `yapimci_defter`) henüz okunmuyor — okuyacak vakalar yazılmadı. Beklenen.
