19 bulgu

CODEX-1 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:6 kodu anıyor; rol ve dil Codex'in kendi işi.
CODEX-3 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:10 (izin tablosu) kodu anıyor.
CODEX-4 — birinci: hatırlat 8, 9 — öneri: talimat `uretim/AGENTS.md` · hatırlat 8 (aday kalsın) — sebep: AGENTS.md:10,22 anıyor; Codex tarafı talimat, Referanslar listesini adım 8'de istemi yazan kurar.
CODEX-5 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` (aday kalsın) — sebep: AGENTS.md:23 anıyor.
CODEX-6 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:27 anıyor; döngüde sırayı dongu.sh zaten veriyor.
CODEX-7 — birinci: program `uretim/dongu.sh` uretilebilir() — öneri: program `uretim/dongu.sh` uretilebilir() · talimat `uretim/AGENTS.md` — sebep: program doğru (dongu.sh:33,37,43); elle `codex exec`te kuralı AGENTS.md:29-31 taşıyor (birincinin notu da bunu söylüyor).
CODEX-8 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` (aday kalsın) — sebep: AGENTS.md:32-34 anıyor.
CODEX-9 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:35 anıyor.
CODEX-10 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:36 anıyor; iki deneme Codex'te.
CODEX-11 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:38 anıyor.
CODEX-12 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` (aday kalsın) — sebep: AGENTS.md:10,39 anıyor.
CODEX-14 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:45 anıyor.
CODEX-15 — birinci: hatırlat 9 — öneri: talimat `uretim/AGENTS.md` — sebep: AGENTS.md:49 anıyor.
CODEX-16 — birinci: program `uretim/istem_kontrol.sh` 'yazı yasağı satırı' · hatırlat 10 — öneri: program `uretim/istem_kontrol.sh` 'yazı yasağı satırı' · talimat `uretim/AGENTS.md` · hatırlat 10 — sebep: AGENTS.md:50 anıyor; program doğru (istem_kontrol.sh:24, dongu.sh:38 geçmeyeni üretmez).
CODEX-13 — birinci: hatırlat 9, aday boş — öneri: aday EVET: dongu.sh zaman.tsv'ye yazarken 300 sn'yi aşan resmi bayraklasın (ve `uretim_kaydi.md`/`kayit/` dosyasının sahibini bassın) — sebep: notu "300 sn üstü için bayrak yok" diyor, ölçü mekanik; aday sütunu boş kalmış.
KOD-16 — birinci: program `kaynak/build_html.js` uzantılı anahtar / gömülmemiş atıf → DERLEME DURDU — öneri: program `kaynak/build_html.js` uzantılı anahtar · program `kaynak/test_yeni_arayuz.js` (yeni oyunda atıf) — sebep: yeni kipte atıf denetimi kapalı (build_html.js:1500 `if (YENI) istenen.clear()`); yeni oyunda derleme yalnız uzantılı anahtarı durdurur. `.claude/kapi_hook.js:25-26` yorumu ("bitmiş vakanın resmi bozulursa derleme durdurur") bu yüzden yanlış — not'a yazılmalı.
KOD-33 — birinci: yok — bir kerelik kurulum — öneri: hatırlat 5, 9 — sebep: iki tuzak (PW, `py`) her oturumda ısırır, kurulumla bitmez. Çelişki doğrulandı: dongu.sh:71,75,79 `python … 2>/dev/null` → `py`'li makinede tarz/yüz/benzerlik sessizce "araç çalışmadı" der; arac_kapi.js:213 Windows'ta `python` çağırır (`PYTHON` değişkeni yoksa K5 kapıyı durdurur); CODEX-19 da `python -c` der. Bu makinede (D:) `python` var; KOD-33 ortağın makinesi (C:) için.
KOD-22 — birinci: yok … · not "ESKİMİŞ: Linux yolu" — öneri: yok (aynı) · not: "Linux yolu bulut kabının; Windows'ta arac_ortam.js PW/CHROME ya da Playwright'ın kendi tarayıcısına düşer" — sebep: kuşku kısmen çürük: yol eskimiş değil, kaba ait; arac_ortam.js:16-29 iki ortamı da karşılıyor. Kural metninde Windows yolu eksik, o kadar.
KOD-36 — birinci: program `kaynak/arac_kapi.js` (eski index.html md5) · hatırlat 4, aday boş — öneri: aynı + aday EVET: kapi_hook.js commit'te `kaynak/motor.js` ya da `kaynak/game_data.json` (eski oyun) değişiyorsa dursun — sebep: md5 denetimi (arac_kapi.js:84-87) yalnız `build_html.js yeni`'nin eski sayfaya yazmasını yakalar; motor.js'e/eski veriye dokunmak hiç ölçülmüyor, ölçmesi mekanik.

## Birincinin kuşkuları
- KOD-3: DOĞRU. Testler commit'te koşmuyor: kapi_hook.js ve arac_kapi.js'te `test_` yok, `.git/hooks`'ta kanca yok. Kapı yalnız Vaka 6+ dosyası ya da ORTAK_VERI/ORTAK_KOD değişince açılır (kapi_hook.js:29-30); `dogrulayici.js`, `build_html.js`, `motor.js`, `test_*.js` bu listede değil. Sonuç: yalnız `test_*.js`'e dayanan "program" satırları (KOD-17, 18, 48, 80, 90, 91; ARAYUZ-31, 32, 36; CODEX-21, KOD-39/43/49/73/76'nın test kolu) bugün yalnız biri elle koşarsa durdurur. KOD-3'ün adayı (kapı testleri de koşsun) bunların hepsini gerçek program yapar — en değerli aday.
- KOD-21: DOĞRU. yeni_arayuz.js:630 ve :848 `alert(r.hata)`; ikisi de motorun reddi (reklamHakAl, kararVer) için hata yolu, arayüz normalde oraya düşürmez. Kural ihlali ama oyuncu görmez; aday yerinde.
- KOD-33 ↔ CODEX-19/dongu.sh: DOĞRU (yukarıda bulgu).
- KOD-22: KISMEN ÇÜRÜK (yukarıda bulgu).
- KOD-51: DOĞRU. `arsiv/sablon/4_motor_sinirlari.md` arşivde; motor sınırları artık KURALLAR.md'de (ARAYUZ-13…26, KOD-18). Kural metni "yeni yetenek KURALLAR.md'ye (ARAYUZ) eklenir" demeli — kural düzeltmesi, sahibine. Uygulayıcı (hatırlat 1, 3) doğru.

## Doğrulananlar (bulgu yok)
Kod listesi tam (150 kural; KOD-31, 32, 92, ARAYUZ-12, 27 "→ ANA", doğru atlanmış). Program kanıtları açıldı, tutuyor: dogrulayici.js K1–K4, K6, K10–K19 hata → çıkış 1 (satır 1133); K12 716-721, K13 732-753, K11 334-342, K14 363-370, K15 807-872, K19 975-1014; build_html.js vm.Script 1436/1476; arac_kapi.js derleme 83-87, YOLLAR 38-42/89, sızıntı 92-95, satır–resim 98-109, poz/K6 209-210, çıkış 1; arac_yeni_tur.js 136-137 (+ çıkış 1, 319); arac_sizinti_tur.js çıkış 1; arac_diyalog.js 176/181 YAZILMADI çıkış 1; dongu.sh 33/37/43; istem_kontrol.sh 24/29; test_ses.js 40-46; test_yeni_v1/v2/arayuz satırları.
