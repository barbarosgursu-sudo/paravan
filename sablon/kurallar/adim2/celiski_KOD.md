# KOD — çelişkiler

### CELISKI-KOD-1 Karar `onizleme`si zorunlu mu?
- Zorunlu: K19 "her kararın `onizleme`si … var (kural 22a)" (2444). Kod da hâlâ istiyor: `kaynak/dogrulayici.js:1010` onizleme yoksa K19 hatası verir.
- İsteğe bağlı / yok: 16 Kasım 2026 düzeni "`onizleme` … artık gösterilmez, isteğe bağlı" (2435); üretim denetimi "Önizleme ve rakam yok" (750).
- Metin 2435 açıkça "artık" diyor, ama doğrulayıcı kodu ve K19 belgesi güncellenmemiş; bu yüzden çözülmedi.
**Soru:** Kararlarda `onizleme` artık isteğe bağlıysa K19'un onizleme şartı (belge ve `dogrulayici.js`) kaldırılsın mı?
*Kaynak:* 2444, 2435, 750

### CELISKI-KOD-2 Karar ekranında kesinti tutarı gösterilir mi?
- Gösterilir: `kim_yapti.kesinti: { zayif, yanlis }` "karar ekranının üstü; {anlasilan} {kesinti} tutarla dolar" (2437); K19 her ücret kesintisinin açıklamasını ister (2444; kod `dogrulayici.js:987`).
- Gösterilmez: "Kararı sahnedeki biri soruyor … Önizleme ve rakam yok" (750); karar 16 Kasım'dan beri sahnede.
**Soru:** Karar sahneye taşındıktan sonra `kesinti` açıklaması (tutarla) hâlâ bir yerde gösteriliyor mu, yoksa K19'un kesinti şartı da mı kalkmalı?
*Kaynak:* 2437, 2444, 750

### CELISKI-KOD-3 Kasa kalktı mı, yoksa hâlâ hesaplanıyor mu?
- Kasa yok: "Kasa yok; para yalnız hikâyede, her kararın parası kendi sahnesinde bitiyor (kural 24)" (754); `para` = "hikâye rakamı; kasa yok" (2435).
- Kasa var gibi: K19 "en kötü durumda kasa eksiye düşmez" (2444; kod `dogrulayici.js:1015` hâlâ denetliyor); Anı sekmesinde "Kasaya" satırı (2434); "`ekonomi.gider` boş (para yalnız birikir)" (2438).
**Soru:** Kasa kalktığına göre K19'un "kasa eksiye düşmez" denetimi, Anı'daki "Kasaya" satırı ve "para yalnız birikir" notu silinsin mi?
*Kaynak:* 754, 2435, 2444, 2434, 2438

### CELISKI-KOD-4 Eski oyunda kaç vaka var?
- Veri formatı sözleşmesi: `vakalar` "6 omurga + 2 yan" (2295).
- Yeni oyun OKUBENI'si: eski oyun "dokuz vaka" (2398); CLAUDE.md'de de V1–V6, YAN-A, YAN-B, YAN-C anılıyor.
**Soru:** Veri formatı sözleşmesindeki "6 omurga + 2 yan" ifadesi "6 omurga + 3 yan (dokuz vaka)" olarak mı düzeltilsin?
*Kaynak:* 2295, 2398

### CELISKI-KOD-5 Yeni oyunda sahne kaydı nerede tutulur?
- Motor sınırları: "oyun her adımda kaydedilir (suçlama dahil); açılışta sahne düzeyinde" (302) — sahne düzeyinde kayıt yalnız açılış için gibi okunuyor.
- Yeni OKUBENI: her konuşma akışı (açılış, giriş, ipucu, yüzleşme+kovalamaca, kapanış) sahne ve satır düzeyinde kaydedilir (2411).
**Soru:** Sahne düzeyinde kayıt bütün akışlarda mı geçerli (302 eskimiş mi), yoksa 302'deki "açılışta" "açınca" (oyunu yeniden açınca) mı demek?
*Kaynak:* 302, 2411

### CELISKI-KOD-6 Kapının commit bağlantısı açıldı mı?
- Bekliyor: "Commit bağlantısı (`.claude/kapi_hook.js`) yazıldı ama Vaka 6 kapıdan geçince açılacak (`.claude/settings.json` henüz yok)" (2791, 14 Kasım 2026).
- Koşul gerçekleşti: "15 Kasım 2026 — VAKA 6 KAPIDAN GEÇTİ" (2783'ün başlığı; CLAUDE.md de "kapı GEÇTİ" diyor). Depoda hâlâ yalnız `.claude/kapi_hook.js` var, `.claude/settings.json` yok.
- Hiçbir metin bağlantının açıldığını ya da ertelendiğini söylemiyor; bu yüzden çözülmedi.
**Soru:** Vaka 6 kapıdan geçtiğine göre kapının commit bağlantısı (`.claude/settings.json`) şimdi açılsın mı?
*Kaynak:* 2791, 2783
