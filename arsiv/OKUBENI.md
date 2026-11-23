# Arşiv

Eski oyunla (dokuz vakalık ilk Paravan, yayınlanmayacak) ilgili belgeler. 16 Kasım 2026'da buraya taşındı; içlerinde yeni
oyunun kullandığı kural ya da bilgi olmadığı denetlendi. Silinmedi, gerektiğinde okunur. Yeni iş bunlara dayanmaz.

## 20 Kasım 2026 — kural belgeleri (kural toplama işinin son adımı)

Bütün kurallar artık tek dosyada: `sablon/kurallar/KURALLAR.md` (kodlu: TON-1, SATIR-3…). Aşağıdaki belgelerin kuralları oraya
işlendi (Adım 2–3), ders ve bilgi satırları yerine taşındı (`sablon/kurallar/adim3/tasima.md`); belgeler silinmedi, kayıt için
burada, eski göreli yollarıyla duruyor. Yeni iş bunlara değil, kural koduna dayanır. `kaynak/arac_kural_ham.js` bunları eski
adlarıyla okur (ham kayıt kimlikleri değişmez).

- `sablon/1_oyun_yapisi.md` (eski şablonun 1. parçası: oyun yapısı)
- `sablon/2_kural_kitabi.md` (kural kitabı; "kural 5", "kural 22a" gibi atıfların kaynağı)
- `sablon/4_motor_sinirlari.md` (motorun sınırları)
- `sablon/5_gorsel_sistemi.md` (görsel sistem; SR-A…M, H1–H6, G, I bölümleri)
- `sablon/TASLAK_tekrar_onleme.md` (tekrar önleme taslağı; §1 vaka karşılaştırma tablosu burada)
- `uretim/ISTEM_KALIPLARI.md` (istem kalıpları ve onaylı örnekler)
- `uretim/OKUBENI.md` (resim klasörünün eski tanıtımı)
- `uretim/v3_eski/` (Vaka 3'ün ilk resim denemesi: `BIRIKIM.md`, `CLAUDE.md`, `AGENTS.md`, `prompts/`, `referanslar/`)
- `kaynak/YENI_OYUN_TON.md`, `kaynak/YENI_OYUN_SEZON.md`, `kaynak/YENI_OYUN_CERCEVE.md` (ton, sezon, çerçeve taslakları)
- `kaynak/RAF_KARARLARI.md` (yayın/raf kararları; artık RAF-1…RAF-113)

## 23 Kasım 2026 — Vaka 2 ve 3'ün eski görsel iş sayfaları (Barbaros)

Resimler web'de elle üretilirken kullanılan iş sayfası araçları. Vaka 6'dan beri bu işi `uretim/` düzeni (Codex döngüsü, istem
kontrolü, el onayı, kapı) yapıyor; Vaka 1–5 yeniden geçirilirken de o düzen kullanılır. Kodlamasız dosya açtıkları için (KOD-93)
Windows'ta zaten çalışmıyorlardı.

- `sablon/vakalar/vaka2_sayfa/` (`uret.py`, iş sayfası, `veri.js`)
- `sablon/vakalar/vaka3_sayfa/` (`uret.py`, iş sayfası, `veri.js`, `ref/` — 26 eski referans resmi: kullanılabilir olanların kopyası
  `uretim/referanslar/` ve `uretim/v3/referanslar/`'da; Peri'nin dekolteli olanları kullanılmaz)

Ortak sayfa kalıbı (eski `vaka2_sayfa/sablon.html`) arşive gitmedi: `sablon/is_sayfasi_sablon.html`. Paylaş kartı
(`sablon/kart_sayfa/uret.py`) ve LoRA sayfaları (`sablon/lora_sayfa/`) onu kullanıyor.
