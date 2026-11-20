# Son adım — kural belgeleri arşive, yaşayan belgelerde kural metni → kod (20 Kasım 2026)

Sahibinin kararı: "Sonunda bütün kurallar tek dosyada. Rehberler kural yazmaz, yalnız kural numarasını anar."
Git commit/push yapılmadı (`git mv` kullanıldı). Shorts dosyalarına dokunulmadı.

## 1. Arşive taşınanlar (`git mv`, `arsiv/` altında aynı göreli yol)

`sablon/1_oyun_yapisi.md`, `sablon/2_kural_kitabi.md`, `sablon/4_motor_sinirlari.md`, `sablon/5_gorsel_sistemi.md`,
`sablon/TASLAK_tekrar_onleme.md`, `uretim/ISTEM_KALIPLARI.md`, `uretim/OKUBENI.md`, `kaynak/YENI_OYUN_TON.md`,
`kaynak/YENI_OYUN_SEZON.md`, `kaynak/YENI_OYUN_CERCEVE.md`, `kaynak/RAF_KARARLARI.md`, `uretim/v3_eski/` (klasör, istemler ve
referans resimleri dahil). `arsiv/OKUBENI.md`'ye liste ve sebep eklendi.

**Program denetimi:** bu dosyaları OKUYAN tek program `kaynak/arac_kural_ham.js` (+ `sablon/kurallar/adim3/kayit_aday.js`
yalnız HAM.tsv'deki dosya etiketini okur, belgeyi okumaz). Öbür bütün anışlar yorum satırıydı. Taşımayı durduran bir şey çıkmadı.

**`kaynak/arac_kural_ham.js`:** taşınan her belge `A('eski/yol')` = `{ yol: 'arsiv/eski/yol', etiket: 'eski/yol' }` ile yazıldı
(`OKUBENI_eski_oyun.md` için var olan yöntem); liste sırası korundu (`no` sırası). Ayrıca `--cikti <klasör>` seçeneği eklendi
(HAM.tsv'nin üstüne yazmadan karşılaştırma için).

**Karşılaştırma (HAM.tsv'ye yazılmadı):** HEAD'in kendi aracı + HEAD belgeleri ile üretilen HAM, taşımadan hemen sonra
üretilenle **birebir aynı** (7 sütunun hepsi). 2. madde bittikten sonra: taşınan 14 belgenin bütün kayıtları aynı kimlikle duruyor
(kayıp 0, yeni 0); değişen yalnız 2. maddede düzenlenen yaşayan belgeler. Not: yaşayan belgelerin kayıt sayısı değiştiği için
araç yeniden koşulup HAM.tsv'nin ÜSTÜNE yazılırsa `no` numaraları kayar (KURALLAR.md `*Kaynak:*` numaraları bozulur) — yeniden
koşmak gerekirse `--cikti` ile başka yere yazın.

## 2. Yaşayan belgelerde koda dönen kural metni

| belge | KURAL kaydı | koda döndü | bilerek kaldı |
|---|---|---|---|
| `CLAUDE.md` (kök) | 60 | 60 (+ en üst kutulardaki kural cümleleri) | — |
| `uretim/CLAUDE.md` | 135 | 132 (+ 41 karar kutusu) | 3 YOK |
| `uretim/AGENTS.md` | 21 | 21 (kod eklendi, adımlar kaldı) | — |
| `sablon/3_kanon_kaydi.md` | 36 | 36 | — |
| `sablon/6_vaka_formu.md` | 59 | 55 | 4 (form tablosu başlıkları) |
| `sablon/7_uretim_sureci.md` | 90 | 87 | 3 (değişiklik tablosu satırları) |
| `kaynak/OKUBENI.md` | 45 | 40 | 4 kod bloğu, 1 YOK |
| `kaynak/yeni/OKUBENI.md` | 45 | 38 | 4 kod bloğu (veri şeması), 3 YOK |
| `kaynak/dogrulayici_sozlesmesi.md` | 39 | 35 | 1 örnek çıktı, 3 ESKIDI/YOK |
| `kaynak/veri_format_sozlesmesi.md` | 19 | 10 | 9 kod bloğu (veri şeması) |
| `sablon/vakalar/vaka2_baslangic.md` | 34 | 27 | 7 (görselli tur soru listesi) |
| `sablon/vakalar/vaka3_baslangic.md` | 19 | 19 | — |
| `sablon/vakalar/vaka4_baslangic.md` | 11 | 11 | — |
| `sablon/vakalar/vaka5…7_baslangic.md` | 5 | 5 | — |
| `kaynak/DEVIR.md` | 101 | 48 tam koda; 50'sine kod eklendi, metin kaldı | 3 ESKIDI |

Kural: kuralı söyleyen cümle çıktı, yerine kısa ad + kod; komut, dosya yolu, tarih/durum kaldı. Form ve süreçteki soru/kontrol
kutuları ve adımlar kaldı, içlerindeki kural açıklaması koda döndü. `→ ANA` diyen birleşmiş kodlar yerine ANA yazıldı.
`uretim/AGENTS.md` en üstüne ve kök `CLAUDE.md` üst kutuların altına "Kurallar `sablon/kurallar/KURALLAR.md`'de; kodu geçen kuralı
oradan oku" satırı kondu (6. ve 7. parçanın üst kutusuna da).

## 3. Atıflar

- Arşive taşınan belgelere (ve 16 Kasım'da arşive giden 16 belgeye — PLAN §5 kırık atıfları) giden **yol** atıfları `arsiv/…`
  yoluna çevrildi: **255 yer, ~95 dosya** (.md'de bütün metin; .js/.py/.sh'de yalnız yorum satırı).
- Kod yorumlarında ve yaşayan belgelerde "kural kitabı N", "N. parça", "SR-X", "ISTEM_KALIPLARI §N" gibi atıflar koda çevrildi:
  **41 yer** (15 kod dosyası: `motor_yeni.js`, `yeni_arayuz.js`, `dogrulayici.js`, testler, araçlar, `istem_kontrol.sh` yorumu…)
  + belgelerde ~12 elle.
- PLAN.md §5 kırık atıflar maddesine "DÜZELDİ" notu eklendi.

## 4. Denetim

- `node dogrulayici.js yeni` → çıkış 0, PASS (1 uyarı: V6 giriş 56 satır, kabul edilmiş).
- `node dogrulayici.js` (eski oyun) → çıkış 0, PASS (5 kabul edilmiş uyarı).
- `test_*.js` → hepsi geçti (FAIL yok; `test_bozuk.js` beklendiği gibi BLOCKED basıp 0 döndü).
- `node sablon/kurallar/arac_kurallar.js say` → hata 0. `node sablon/kurallar/adim3/tasima_say.js` → hata 0.
- Derleme yapılmadı. Değişen kod dosyaları `node --check` / `bash -n` / `py_compile` ile sözdizimi denetimden geçti.

## 5. Taşınamayan / emin olunmayanlar

1. **`kaynak/DEVIR.md` (50 kayıt):** uzun tarihli mesaj kutuları ve iş kaydı (ör. "Barbaros'un kararı 16 Kasım — KARAR ANI",
   "Barbaros'tan Oğuz Bey'e — üç soru", Vaka 2 görsel kayıtları) içinde kural cümlesi var ama durum, soru ve iş kaydıyla iç içe.
   Tarihi yeniden yazmamak için metin kaldı, sonuna `*(Kural: KOD…)*` eklendi. İstenirse bunlar da kısaltılır.
2. **Kodu olmayan yeni kurallar** (20 Kasım, HAM'dan sonra yazıldı; KURALLAR.md'de yok): `uretim/CLAUDE.md` 00 (üretimden
   önce konuk benzerliği, `arac_benzerlik.js`) ve 0b2 (resim benzerlik aracı). Metin yerinde kaldı, SEZON-19'a işaret edildi;
   KURALLAR.md'ye eklemek sahibinin onayını ister.
3. **Kodun içindeki dizgiler değiştirilmedi** (yalnız yorum değişti): `kaynak/arac_satir_resim.js` 131. satır çıktı metninde hâlâ
   `` `sablon/5_gorsel_sistemi.md` → SR-M `` yazıyor (artık kırık yol); 107/127. satır "SR-F/SR-M5", "SR-L". `uretim/istem_kontrol.sh`
   hata iletileri "ISTEM_KALIPLARI §10, SR-E", "BIRIKIM §4" diyor (bunlar ayrıca HAM'ın program kayıtları — değişirse kimlik değişir).
   `uretim/v6/uret_istem_parti3.py` istem üreten dizgilerde `sablon/5_gorsel_sistemi.md`, `sablon/2_kural_kitabi.md` geçiyor.
4. **İstem metinleri ve üretim kayıtları:** `uretim/v6/prompts/*.md` ve `uretim/v6/kayit/kol*.md` içinde Codex'e giden istem
   metninde "(ISTEM_KALIPLARI §11)" geçiyor — üretilen resmin kaydı olduğu için dokunulmadı. İstemlerin başlık satırlarındaki
   yol atıfları (`sablon/5_gorsel_sistemi.md` I) `arsiv/…` yoluna çevrildi; `## İstem` bölümüne dokunulmadı.
5. **Eski vaka belgeleri** (vaka formları, diyaloglar, `vakaN_gorsel.md`, `DURUM.md`'ler, `KURALLAR_TASLAK.md`, `FIKIR_HAVUZU.md`,
   PLAN.md): yalnız yol atıfları çevrildi; içlerindeki "kural 5", "5. parça B" gibi yolsuz atıflar tarihî kayıt olarak kaldı.
   `KURALLAR.md`'deki "(kural kitabı 4a)" gibi kaynak notları da kaldı (kuralın nereden geldiğini söylüyor); içindeki dosya
   yolları `arsiv/…`'e çevrildi (75 yer).
6. **Kanon kaydı:** `sablon/3_kanon_kaydi.md` tabloları artık kod gösteriyor (ör. `| **Peri** | KAR-27 |`); KURALLAR.md'de olmayan
   sonraki kanon (Avukat Nihat Kora, Ozan, tacın V8'deki yeri — 19 Kasım) metin olarak kaldı. Yazarlar için okunurluk azaldı;
   istenirse kanon kaydı yeniden metin hâline döndürülebilir (kanon kural değil veri sayılırsa).
7. **`uretim/AGENTS.md`:** Codex `uretim/v<N>/`'de çalışıyor; KURALLAR.md'yi okuyabileceği kesin değil. Bu yüzden adımlar ve tablo
   yerinde kaldı, kodlar yanına eklendi; yalnız gerekçe cümleleri koda döndü.
8. Belgelerde ESKIDI etiketli kayıtlar (DEVIR 3, doğrulayıcı sözleşmesi 2) olduğu gibi kaldı.
