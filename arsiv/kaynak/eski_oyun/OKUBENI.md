# Eski oyun — kod ve veri arşivi (22 Kasım 2026)

Sahibinin kararı: eski oyun prototipti, arşive gitti (KOD-36). Hiçbir şey silinmedi; `git mv` ile buraya taşındı, geçmiş korunur.
Depo kökündeki `index.html` bu oyunun son derlenmiş sayfasıdır; donmuş, artık derlenmez (ana adres olduğu gibi durur).

- **Veri:** `game_data.json` (asıl) ve `game_data.js`; yedekler `vaka2-6.json`, `yan_a.json`, `yan_b.json` (KOD-11); `kisiler.json`,
  `prolog.json`; 63 görsel `_gomulu_gorseller.js` (base64).
- **Araçlar:** `arac_akis_denetim.js` (kararların bütün yüzeyleri yan yana), `arac_tahta_denetim.js` (çıkarım başlıkları),
  `arac_okuma.js` (vakanın tamamı akış sırasıyla), `arac_ui_tur.js` (eski sayfanın Pixel 5 turu).
- **Testler (`test/`, 22):** motor, kayıt, softlock, ekonomi/bütçe/borç, itibar, ruh hâli, Cengo satırı ve görseli, sızıntı, tahta,
  vaka testleri (V2b–V6, YAN-A/B/C), yedek eşleme, `test_bozuk.js` (doğrulayıcıya bozuk veri; yedi senaryoda BLOCKED beklenir).

**Yeniden çalıştırmak gerekirse:** araç ve testler `kaynak/` klasöründen göreli yol bekler (`./motor.js`, `./dogrulayici.js`,
`game_data.json`). Dosyaları geçici olarak `kaynak/`'a kopyala, `cd kaynak && node <dosya>`; işin bitince sil. Doğrulayıcı ve
derleyici 22 Kasım 2026'dan beri tek kipli (yeni oyun): eski veriyi denetlemek için `node dogrulayici.js <eski verinin klasörü>`
(klasörde `game_data.json` bulunmalı). Eski sayfayı yeniden derlemek artık mümkün değil (derleyicinin eski kipi söküldü; son çıktı kökteki `index.html`).
