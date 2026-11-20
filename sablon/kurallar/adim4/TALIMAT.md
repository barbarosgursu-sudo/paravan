# Adım 4 — uygulayıcı tespiti (birinci uygulayıcı talimatı)

Depo: `D:\Yazilim\paravan` (Windows; Bash aracı Git Bash). Türkçe Noir dedektiflik oyunu "Paravan". Bütün kurallar
`sablon/kurallar/KURALLAR.md`'de (`#### KOD-n Başlık` blokları). Sahibinin hedefi: "Bir vakayı üretirken daha önce
hallettiğimiz bir sorunla tekrar tekrar uğraşmak istemiyorum." → Her kural ya bir PROGRAMLA durdurulur, ya üretimin
doğru ADIMINDA sahibine hatırlatılır, ya da üretimle ilgisi yoktur.

**KURALLAR.md'yi DEĞİŞTİRME.** Yalnız kendi TSV'ni yaz. Başka hiçbir dosyayı değiştirme, commit yapma.

## Senin işin
Sana verilen konu(lar)daki HER kural için (başlığın altındaki ilk satır `→ KOD` diyorsa ATLA — birleşmiş kod) bir satır:

`sablon/kurallar/adim4/uyg_<KONULAR>.tsv` — sekmeyle ayrılmış, başlık satırı:
`kod	uygulayici	kanit	aday	not`

- `uygulayici`: KURALLAR.md'ye girecek satırın gövdesi, şu dilbilgisiyle (parçalar ` · ` ile ayrılır):
  - `program \`<depo kökünden dosya yolu>\` <kısa ne/nerede, ör. K15, kapı K5, istem_kontrol 'zemin'>` — YALNIZ program bu
    kuralı GERÇEKTEN denetliyorsa ve tutmayınca iş DURUYORSA (çıkış kodu ≠ 0, kapı, commit hook'u, test). Kanıtı aşağıda.
    Yalnız bilgi basan / bayrağı ADAY olan araç "program" değildir → o kural `hatırlat`'tır (aracı `not`'a yaz).
  - `hatırlat <adım no>[, <adım no>]` — program ölçemiyor; üretim sürecinin hangi adımında hatırlatılmalı (aşağıdaki tablo).
    En geç, sorunun hâlâ ucuz düzeldiği adımı seç (ör. istem kuralı 8, resim gözle denetimi 10, diyalog yazımı 3,
    görselsiz okuma 5, form 1). Bir kural birden çok adımda ısırıyorsa en fazla iki adım.
  - `yok — <kısa sebep>` — vaka üretiminde hiç uygulanmayan kural: yayın/satış/raf kararı, Android, eski oyunun bakımı,
    tarihî kayıt, araç kullanım bilgisi, sahibinin bir kerelik kararı (ör. "Vaka 7 resimleri dursun")… Kuşkudaysan `hatırlat`.
  - `talimat \`uretim/AGENTS.md\`` — (sonradan eklendi) kuralı Codex uygular, çünkü her işte okuduğu `uretim/AGENTS.md` kuralın
    KODUNU anıyor (araç bunu denetler; anmıyorsa hata). Yalnız Codex'in kendi işi için; sahibine hatırlatılacak şey değil.
  - Hem program hem hatırlat olabilir: program bir kısmını ölçer, kalanı gözle (ör. `program \`kaynak/arac_satir_resim.js\` İŞ/SOR · hatırlat 10`).
- `kanit`: program dediysen dosya:satır ya da fonksiyon/kural adı (grep'le BULDUĞUN yer). Hatırlat/yok için boş bırakılabilir.
- `aday`: program ölçebilirdi ama bugün ölçmüyorsa `EVET: <ne ölçülür, hangi araca eklenir, bir cümle>`; yoksa boş.
  Bu liste sahibine "yazılabilecek yeni denetimler" diye gidecek; abartma, gerçekten mekanik ölçülebilenleri yaz.
- `not`: kısa; kuşku, çelişki, eskimiş görünen kural (ör. artık olmayan dosyayı anıyor) vb.

## Üretim adımları (`sablon/7_uretim_sureci.md`)
1 Form · 2 Onay 1 (sahibi) · 3 Diyalog yazılır · 4 Veri hazırlanır · 5 Görselsiz oyun turu + bulanık replik / sızıntı / erken satır–resim
taraması · 6 Onay 2 görselsiz test (sahibi) · 7 Hikâye düzeltmeleri, hikâye donar · 8 Görsel listesi ve istemler, kıyafet kartları ·
9 Görseller üretilir (Codex döngüsü) · 10 Kontrol, kesim, yerleştirme (resim denetimi) · 11 Görselli oyun turu · 12 Onay 3 görselli test
(sahibi) · 13 Görsel düzeltmeleri · 14 Vaka donar (sızıntı bir kez daha).
Shorts videoları ayrı süreç (`sablon/8_shorts.md`): SHORTS kuralları için `program \`kaynak/arac_shorts.js\`` (denetliyorsa) ya da
`yok — Shorts süreci (8_shorts.md)` + `not`'a "Shorts hatırlatması" yaz.

## Programlar (bak; listeyle sınırlı değil)
- `kaynak/dogrulayici.js` (eski ve `yeni` kipte; kurallar `kaynak/dogrulayici_sozlesmesi.md`) — HATA durdurur, UYARI durdurmaz.
- `kaynak/arac_kapi.js` (başındaki K1–K13; commit'te `.claude/kapi_hook.js` çalıştırır).
- `uretim/istem_kontrol.sh` (istem denetimi; çıkış ≠ 0 üretimi durdurur), `uretim/dongu.sh` (döngüde neyi koşturuyor).
- `kaynak/arac_tarz.py`, `arac_yuz.py`, `arac_el.py`, `arac_benzerlik.js`, `arac_benzerlik_resim.py`, `arac_satir_resim.js`,
  `arac_soz_farki.js`, `arac_sizinti_tur.js`, `arac_paket.js`, `arac_zemin.py`, `arac_kes_yz.py`, `arac_shorts.js`.
- Testler `kaynak/test_*.js` (her commit'ten önce koşar; `test_bozuk.js` hariç geçmeli) → test kuralı ölçüyorsa "program".
- `build_html.js` (derleme hatası durdurur).
- Eski taslak tespitleri (yaklaşık, kodlar eski): `arsiv/sablon/TASLAK_tekrar_onleme.md`.

Kanıtsız "program" yazma: emin değilsen `hatırlat` + `aday`. İkinci bir göz her "program" satırını açıp doğrulayacak.

## Bitince
Son mesajında yalnız: dosya adı, satır sayısı, program/hatırlat/yok sayıları, `aday` sayısı, en önemli 3–5 kuşku. Uzun yazma.
