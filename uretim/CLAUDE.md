# Yerel Claude talimatı — resim üretimi

Önce depo kökündeki `CLAUDE.md`'yi oku. **Kurallar `sablon/kurallar/KURALLAR.md`'de; kodu geçen kuralı oradan oku.** Bu dosya
iş talimatıdır (komutlar, adımlar); kural metni yazmaz, kodunu anar. Okunacaklar — SUREC-33. Görsel kurallar: ISTEM-*, DENETIM-*,
GOMME-*, SATIR-* (eski belge: `arsiv/sablon/5_gorsel_sistemi.md` → H. Görsel standart). Ayrıntılı geçmiş ve gerekçeler:
`arsiv/uretim/v3_eski/BIRIKIM.md` (Vaka 3'ün Codex deneyimi). Türkçe, kısa yaz.

> ## ✅ ONAYLI KARARLAR — ÜRETİMDE GEÇERLİ (17 + 19 Kasım 2026, Barbaros)
> Kararlar `sablon/kurallar/KURALLAR.md`'ye işlendi (20 Kasım 2026); aşağıda kısa adı ve kodu. Kaynak:
> `sablon/kurallar/adim2/SORULAR.md` (sorunun numarası parantezde).
>
> **Peri ve Cengo**
> - Cengo'da her vakada aynı kalan: yüz, saç, tel, bileklik — KAR-24, KAR-23 (17; saç 19 Kasım).
> - Dönen kişilerin yüzü ve kimliği aynı kalır, Cengo'nun saçı hariç kıyafet/saç/takı değişir — SEZON-19 (30).
> - Peri'nin çorabı vakanın kıyafetine göre (çoraplı ya da çorapsız, bant serbest) — ISTEM-20 (22 Kasım 2026; 17 Kasım'daki "çorap yok" kalktı).
> - Peri'nin dekoltesi asla azaltılmaz — SINIR-3 (32).
> - Felaket ve komedi karesinde "seksi"; filtrenin sebebi referanstaki dekolte — ISTEM-16, ISTEM-21, ISTEM-24 (9).
> - Cengo'nun Peri'nin yanında olma sebebi bilinir (alacağı var) — KAR-7 (18).
>
> **Resim ve istem**
> - İfade sayısını satırlar belirler — SATIR-35 (28, 29, 31).
> - Kıyafet kartı referans verilir, kıyafet sözle tarif edilmez — ISTEM-19 (10).
> - Açılıp kapanan kıyafetin iki hâli iki kart; kart her konuğa — ISTEM-17, ISTEM-18 (12, 13).
> - Dekoltesiz temelin türevinde referans bütün temel — ISTEM-14 (14).
> - Konuk figürü de 4:5 (1122×1402); zemin kıyafete göre programla — ISTEM-3 (11, 16).
> - Yüz her resimde kadrajın soluna bakar — DENETIM-21 (5).
> - Boyu tablo belirler — GOMME-13 (7).
> - Elle hale temizliği yok; kesim profili yalnız çerçeve — GOMME-4, GOMME-5, GOMME-20, DENETIM-37 (6, 8).
> - Denetleyen Claude `referanslar/`'a baş kırpığı koyabilir — CODEX-24, CODEX-25 (2).
> - 3. kez reddedilen resim web listesine — DENETIM-42 (3); rapor sonu — DENETIM-46 (4).
> - Resimleri Codex döngüsü üretir; iş sayfası yalnız web'de üretilecekler için — SUREC-20, SUREC-21, SUREC-32 (40).
> - Barbaros da üretimi yürütebilir; son söz üretimi yürütende — SUREC-4 (41).
> - Ekran düzeni (Vaka 6'dan beri 16 Kasım kararı) — ARAYUZ-16 (1).
>
> **Metin ve vaka**
> - Replik anlaşılır, ~110 harf — TON-9 (33).
> - Cengo'nun teliyle bulunan kanıt — YAPI-15 (34).
> - Kasa yok, para sayılmaz — YAPI-31, YAPI-34, YAPI-42 (35, 36).
> - "Yeni vaka geldi" kartı — RAF-76 (26); ilk iki vaka reklamsız — RAF-48, RAF-108 (25).
> - YouTube Shorts süresi — SHORTS-6 (27).
>
> **Kod ve çalışma** (kodu ilgilendirenler yapıldı)
> - Doğrulayıcı: KOD-44, KOD-45, KOD-46, KOD-70, KOD-71, KOD-75, YAPI-46 (19, 20, 21, 37).
> - Kapı her commit'te — KOD-35 (24). Kayıt — KOD-50 (23). Eski oyun "6 + 3" vaka — KOD-81 (22).
> - Yalnız `main` — SUREC-7 (38). Sahibine tek öneri + kısa gerekçe — SUREC-34 (39).

## Her oturumda

- **Başlarken:** `git pull` (SUREC-8). Sonra `uretim/v<N>/DURUM.md`'yi oku.
- **Bitirirken ve döngüde ara ara:** `DURUM.md`'yi güncelle → commit → `git push origin HEAD:main` (SUREC-7).
- Sahibinin söylediği kural yazıya geçer — SUREC-3 (artık `sablon/kurallar/KURALLAR.md`'ye, sahibinin onayıyla).
- **Üretim nerede, "sahibi" kim, kim neye karar verir** — SUREC-4 (14 Kasım 2026 gece: resim üretimi Oğuz Bey'in ya da Barbaros'un
  bilgisayarında; ikisi aynı numarayı aynı anda üretmesin — hangisinin ürettiği `DURUM.md` en üstte yazılır; Codex ve web ChatGPT
  Barbaros'un hesabıyla. 17 Kasım 2026'dan beri Oğuz Bey'in hesabı kurallar dahil her şeye yetkili — kök `CLAUDE.md` en üst).
- **İlk iş — bu bilgisayar hazır mı** — CODEX-19:
  1. `python -c "import onnxruntime, PIL, numpy, torch, open_clip"` (eksikse `KURULUM_ORTAK.md`'deki `pip install` satırını sahibine söyle).
  2. `codex --version` ve `codex login status`.
  3. İlk kullanımda modeller kendiliğinden iner (~1,3 GB).
  Eksik varsa üretime başlama; sahibine eksik listesini ver. (`dongu.sh` da başta bu üçüne bakar, eksikse başlamaz.)

## Karakter sabitleri ve mekân

- **Karakter sabitleri** (her istemde yazılır, her denetimde aranır) — KAR-23; Cengo'nun görünüşü — KAR-24. Yeni vakada yeni
  karakter KAR-23'e eklenir (sahibinin onayıyla).
- **Mekân sabiti — büro kapısı** (Barbaros, 14 Kasım 2026; V6 G90–G92) — KAR-25 (referans `v6/referanslar/buro_koridor.jpg`).
- **Sigara yok** (Barbaros, 16 Kasım 2026) — SINIR-13; istemde — ISTEM-55; denetimde — DENETIM-35.

---

## Komut: `istemleri hazırla <N>`

Komut ve ön koşulu — CODEX-20. Çıktı: `uretim/v<N>/LISTE.md`, `prompts/G<n>.md`, gerekirse `referanslar/`. Listeyi sahibine
göster; onaylarsa commit → push. Adımlar:

00. **Konuk benzerliği — zorunlu, otomatik** — SEZON-26. Görünüş `sablon/kurallar/benzerlik/adaylar.tsv`'ye; istemden önce
   `node kaynak/arac_benzerlik.js <vaka>` GEÇTİ demeli. DURDU → görünüş değişir (form, diyalog, `adaylar.tsv`), sahibine sorulmaz.
0. **Liste oyunla eşleşir** — CODEX-21. Anahtar örnekleri `peri.trenckot.kas`, `A23`, `K36`; tablo `sablon/vakalar/vaka<N>_gorsel.md`
   (`| G<n> | figür / arka plan / detay / ara kare / kart afişi | ne | \`anahtar\` | referans | aşama |`); sınayan
   `node dogrulayici.js yeni` ve `test_yeni_arayuz.js`.
1. **Sıra: temeller önce** — ISTEM-2.
2. **Referanslarda dekolte yok** — ISTEM-16 (kadın: baş kırpığı + `uretim/referanslar/tarz_govde_kadin.jpg`); Peri temeli — ISTEM-11;
   varyant — ISTEM-14; kıyafet referansı — ISTEM-19.
3. **İstem kalıpları ezberden yazılmaz** — ISTEM-1; tarz paragrafı — ISTEM-9, örnek cümlesi — ISTEM-10; kadraj ISTEM-5, bakış
   ISTEM-6, zemin ISTEM-7, iki kol iki el ISTEM-31, yazı yok ISTEM-28, oran ISTEM-4. Onaylı örnekler: `uretim/ISTEM_KALIPLARI.md`
   ve `arsiv/uretim/v3_eski/prompts/` ile yan yana karşılaştır.
4. **Vaka 3 dersleri baştan istemde** — ISTEM-53 (aşağıdaki tablo).
5. **Kontrol satırı** — ISTEM-50.
6. **Hikâyede olmayan ayrıntı ekleme** — KAR-1.
7. **Satır–resim uyumu zorunlu, dört aşama** — SATIR-28; araç `kaynak/arac_satir_resim.js`:
   - İstem yazarken — ISTEM-51, SATIR-15: görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`, her yolun `satir/`'ını
     kopyala) → `node arac_satir_resim.js <dokum…> --vaka V<N>`; satırlar istemin `## Satırlar` bölümüne.
   - Denetimde — DENETIM-30.
   - Gömmeden sonra — SATIR-30 (bütün yollar `--hepsi`, araç yeniden; sonuç sahibine tablo: satır · metin · uyuyor/uymuyor · neden).
8. **Satır–resim sözleşmesi** — SATIR-2; bayrak kapıdır SATIR-10; bayraklar kuralla kapanır SATIR-11 (İŞ'i diyalogda yalnız
   etiketle: `[ifade]`, `{kare}`, `{gi}`; `arac_diyalog.js`; sonra `node arac_soz_farki.js <diyalog>` "söz farkı 0"); kıyafet hâli
   SATIR-7, kıyafet kartı SATIR-8, nesne SATIR-9, ifadeler ayrılır SATIR-17, karar karesi SATIR-18. Komut:
   `node arac_satir_resim.js <dokum…> --vaka V<N> --karar ../sablon/vakalar/vaka<N>_bayrak.md`.
9. **Yeni karakter eski bütün figürlerle karşılaştırılır** — DENETIM-49 (temas sayfası `kaynak/yeni_gorsel/figur_*_normal.webp`);
   "X'e benzemiyor" — ISTEM-13.
9b. **Konuklar birbirine benzemez** — SEZON-19.
10. **Elde yalnız metindeki nesne** — SATIR-9.

## Komut: `vaka <N> resimlerini üret`  (asıl komut — döngü sahibine sormadan yürür)

**Önce kontrol listesi** — ISTEM-52: `cd uretim && ./istem_kontrol.sh v<N>/prompts/*.md` — çıkış 0 olmadan üretim başlatılmaz
(döngü de geçirir; geçmeyen `$DONGU_LOG/kontrolden_gecmedi.txt`). Liste mekanik olanı yakalar (Satırlar, zemin, iki zemin denemesi,
"X'e benzemiyor", kart referansı, dekolteli referans, 5 referans sınırı); anlam (yüz satıra uyuyor mu, Nurcan, eski karakterlere
benzerlik) yine elle okunur.

**Döngü** — CODEX-22: `cd uretim && KOL=2 DONGU_LOG=<scratchpad, /c/… biçiminde> ./dongu.sh <N>` (run_in_background).
`SADECE="3 3z 10"` yalnız o numaraları üretir; kota mesajında kol `BEKLE` sn (varsayılan 900) bekler. **Durdurmak için
`touch uretim/v<N>/DUR`** (TaskStop Windows'ta kabuğu öldürmez; sonra kalan `codex`/`bash` süreci var mı bak).

**Ölçüm (13 Kasım 2026, ChatGPT Plus):** resim başına ~95–115 sn; 2 kolda resim başına süre aynı (iş iki katı). Kota:
resim başına 5 saatlik sınırın ~%1,2'si (~80 resim / 5 saat), haftalık sınırın çok azı. Sınırı hız değil 5 saatlik kota
koyuyor: 2 kol ~1 sa 10 dk'da doldurur, sonra döngü bekler. Gecede (~10 sa) ~160 resim. Kota dolunca Codex'in verdiği
mesaj henüz görülmedi; ilk gece `zaman.tsv`'deki SINIR satırına ve logda mesajın metnine bak, `sinir_mi` desenini düzelt.

**Tuzak: sahte Codex'le deneme (13 Kasım 2026)** — CODEX-23 (Codex her resmin kopyasını `~/.codex/generated_images/`'ta tutar).

**Zemin seçimi** (14 Kasım 2026'dan beri yazılımla) — GOMME-16, GOMME-17, GOMME-18; zemin denemesi — GOMME-19; kesim profili —
GOMME-20. Araç `kaynak/arac_zemin.py` (`--yaz`), karar `v<N>/zemin.tsv`; deneme dosyaları `G<n>.md` + `G<n>z.md`.

Döngü çalışırken sen — CODEX-24 (Codex yavaşlarsa — CODEX-13):
1. `uretilen/`'e geleni denetle (aşağıda). Döngü çıktıysa yeniden başlat.
2. Temel onaylanınca baş kırpığını/şeridi hazırla (`referanslar/`).
3. Birkaç resimde bir `DURUM.md` → commit → push.
4. İş kalmayınca dur; LISTE'nin hepsi `onayli/`'deyse `göm`'e geç. Gömmeden sonra `DURUM.md`'deki bağlama etiketlerini diyaloğa
   yaz ve `cd kaynak && node arac_kapi.js V<N> resim` — GEÇTİ demeden vaka bitmiş sayılmaz.

**Temeller önce, takılan temel hemen sahibine** — DENETIM-41.

**Sahibine sormadan devam et; web listesi** — DENETIM-42 (`WEB_LISTESI.md`: 3. kez reddedilecek, iki kez filtreye takılan, emin
olunamayan resim). **Web paketi** — DENETIM-43 (zemin rengi resim olarak: `uretim/referanslar/zemin_gri_mavi.png` #778393 ·
`zemin_acik_bej.png` #F0E8D9 · `zemin_acik_gri.png` #D4D4D4; paket `v<N>/WEB_G<n>.md`, Windows tam yol). Sahibi web ChatGPT'de üretip
`uretilen/G<n>.png` olarak koyar; sen denetlersin. Sahibi onaylı resimde hata bulursa — DENETIM-40.

## Denetim (her resim)

**0. Yazılımla tarz denetimi — her resimde, gözden önce** — DENETIM-1. `cd kaynak && python arac_tarz.py --uretim v<N> G<n>`
(döngü kendisi koşar; sonuç `$DONGU_LOG/tarz.tsv`). Sonucun üç hâli — DENETIM-2 (kayıt satırı `G<n> tarz GEÇTİ (+0,0xx)`);
sahibine yalnız GEÇTİ, çapa (`uretim/referanslar/tarz_capa/`) — DENETIM-3; kör nokta — DENETIM-4; figürde gövdeden, kartta
yüzden — DENETIM-5; araç değişirse `python arac_tarz.py --sinav` → "SINAV GEÇTİ" — DENETIM-6.

**0b. Yazılımla yüz (kimlik) denetimi — Peri, Cengo, Gizem** — DENETIM-7. `cd kaynak && python arac_yuz.py --uretim v<N> G<n>`
(döngü kendisi koşar; `$DONGU_LOG/yuz.tsv`). Eşikler — DENETIM-8; iki aracın sonucu kayda (`G<n> tarz GEÇTİ (+0,0xx) · yüz GEÇTİ
(0,8xx)`) — DENETIM-9; karede kapı değil — DENETIM-10; bilinen sınır — DENETIM-11; konuk — DENETIM-12; araç değişirse
`python arac_yuz.py --sinav` — DENETIM-6.
- Denenip BIRAKILAN (14 Kasım): ifadeyi temeline CLIP benzerliği ya da renk doygunluğuyla karşılaştırıp "soluk/kaymış" yakalamak —
  poz ve bilerek değişen ifade (unlu yüz) ölçüyü bastırıyor, onaylılarla kaymışlar iç içe. Bu kayma gözle (A.7, A.14).

**0b2. Yazılımla konuk benzerliği — konuğun figür ve kartında** — DENETIM-53. `cd kaynak && python arac_benzerlik_resim.py
--uretim v<N> G<n>` (döngü kendisi koşar; `$DONGU_LOG/benzerlik.tsv`). KALDI/ŞÜPHELİ → görünüş değişir, sahibine sorulmaz;
DUR (çıkış 3) → sahibine. GEÇTİ → kayıt satırına `· benzerlik GEÇTİ (en yakın <kişi> 1,1x)`.

**0d. Araçlar işi durdurur (21 Kasım 2026, Adım 4)** — döngü 0, 0b, 0b2'nin çıkış koduna bakar: biri GEÇTİ demezse resim
`v<N>/kayit/denetim.tsv`'de **ONAYLANAMAZ** yazılır; benzerlik DUR → döngü durur (sahibine). Commit kapısı `onayli/`'e giren resimde üç
aracı yeniden koşar; geçmeyen kaydedilmez. Sahibinin "kalsın"ı: `sablon/vakalar/vaka<N>_kapi.md` → `## kalsın` → `- G<n> | tarz|yüz|benzerlik | <sebep>`.
Yeni konuk temelinin istemi `istem_kontrol.sh`'tan geçerken yazı benzerliği (`arac_benzerlik.js`) de koşar — SEZON-26.

**0c. El denetimi — kişi görünen her resimde, onayı sahibi verir** — DENETIM-13. `cd kaynak && python arac_el.py --sayfa V<N> G<n>`
→ `kaynak/YENI_UI/el/G<n>.jpg`; onay `python arac_el.py --onay V<N> G<n>`.
- **Nesne tutan el: zorunlu yakın bakış** — DENETIM-14 (`magick <resim> -crop WxH+X+Y +repage -resize 500% <çıktı>`; istem kalıbı ISTEM-32).
- **Denenip BIRAKILAN (15 Kasım 2026): yazılımla sağ/sol el.** DWPose kol tarafı × MediaPipe Hands el sınıfı (sağ/sol), ayrıca
  ayna sınavı (aynalanan kırpıkta etiket dönmeli) ve 3B noktalardan el yönü. Sınav: bilinen 5 yanlış el (`v6/red/G65_red2`,
  `G25_red1`, `G80_red1–3`) ve V3+V6 onaylılarının ~560 eli. En iyi ayarda 5 yanlıştan 2–3'ü yakalandı (biri hiç bulunamadı, biri
  "sol" sanıldı), vaka başına 10–23 bayrak çıktı ve bayrakların hemen hepsi yanlış alarmdı: kırpıkta başka kişinin eli (DWPose kolu
  bir kişiye, eli ötekine bağlıyor), kenetli eller, kolun ucunda çanta sapı / zarf / tül. 3B yön sinyali tutarsız. Boyalı resimde
  sağ/sol hâlâ gözün işi; yukarıdaki yakın bakış ve ISTEM-32 bu yüzden var. Model yeniden denenecekse önce bu sınav.

**Önce bütün, sonra büyüt** — DENETIM-15. `prompts/G<n>.md`'yi, resmi ve referanslarını aç. Büyütme:
`magick <resim> -crop WxH+X+Y -resize 300% <çıktı>`.

**A. İstemle karşılaştır**
1. Kontrol satırı — DENETIM-18.
2. Kimlik ve karakter sabitleri — DENETIM-19, DENETIM-20.
3. Yüz yönü ve bakış — DENETIM-21.
4. Eller ve kollar — DENETIM-22.
5. İstemde olmayan nesne ve yazı yok — DENETIM-23.
6. Kadraj, oran, ölçek ve zemin — DENETIM-24.
7. Tarz gözle — DENETIM-25.
8. Çıplaklık yok — DENETIM-26.
9. Fiziksel olabilirlik — DENETIM-27.
10. Sayım — DENETIM-28.
11. Mantık, mekân ve hikâye — DENETIM-29.
12. Satırlarla uyum — DENETIM-30.
13. Kıyafet kartına uyum ve kumaş yüzeyi — DENETIM-31.
14. Kardeş resimlerle ayrışma — DENETIM-32.
15. Çekicilik seviyesi (Peri ve Gizem) — DENETIM-33.
16. Sızıntı yok: resim, bağlı ipucu açılmadan oyuncunun bilmediği bir şeyi göstermiyor; kanondaki bir gerçeği yanlış da göstermiyor — BILGI-17, BILGI-19.

**B. Oyundaki hâli (figürler)** — DENETIM-36. `kaynak` içinde:
`node arac_yanyana.js ../uretim/v<N>/uretilen/G<n>.png --kim <id> --profil <profil> --oran <H2 tablosu>`
Görüntüyü `uretim/v<N>/yanyana/G<n>.png` olarak sakla. Bak: 1. boy (temel figürde ölçeği `DURUM.md`'ye not et), 2. bakış,
3. kesim, 4. saç. Kesim profili — DENETIM-37.

**Karar**
- **Onay** — DENETIM-38 → `onayli/G<n>.png`; temel figürse baş kırpığı (`referanslar/<kim>_bas.png`).
  **Konuk temel figürü onaylanınca, sormadan:** `adaylar.tsv` satırı resme göre düzeltilir, sonra
  `node kaynak/arac_benzerlik.js --havuza <kim>` — DENETIM-53.
- **Ret** — DENETIM-39 → `prompts/G<n>.md` sonuna `## Düzeltme <k>`; resim `red/G<n>_red<k>.png` (k = ilk boş numara).

## Komut: `göm`

`göm` komutu — GOMME-8:
1. `kaynak` içinde: `node arac_paket.js ../uretim/v<N>/onayli --vaka <N> --profil <G=profil,…> --genis <…>` → temas sayfasına bak.
2. Aynı komut `--yaz` ile (doğrulayıcı ve derlemeleri kendisi çalıştırır).
3. Boy ölçeklerini `kaynak/yeni/gorseller.json → boy`'a yaz (`arac_json_yaz.js` ile).
3b. **Kesim yapay zekâyla, tek yöntem** — GOMME-1 (`arac_kes_yz.py`, BiRefNet, ilk kullanımda ~970 MB, `onnxruntime` —
   `KURULUM_ORTAK.md`; `--eski` ile `--yaz` durur); eski renk kesimi ve `arac_hale.py` — GOMME-2.
4. **Masa kartı** — GOMME-28:
   `magick yeni_gorsel/kart_v<N>.webp -resize 900x -crop 900x500+0+<y> +repage -quality 80 yeni_gorsel/masa_v<N>.webp`;
   `gorseller.json → dosyalar.MASA_V<N>`, `game_data.json → vakalar[V<N>].giris_gorsel = "MASA_V<N>"`.
4. Kart afişi (9:16) elle: `kart_v<N>.webp` — GOMME-21…27. Yeni karakter: künye portresi — GOMME-12 (`python arac_portre.py …`).
5. Kök CLAUDE.md'deki "Her commit'ten önce" komutları (KOD-3); hepsi geçerse commit → push.
6. `node arac_yeni_tur.js 0 <yol> dogru --hepsi` ile vakayı oynat (KOD-27); görüntülere bak, sorunları sahibine listele.

## Şerit (birden çok karakteri tek referansta veren resim)

Şerit — ISTEM-15. Komut:
`magick G6.png G7.png G8.png G9.png -resize x900 -background "<zemin>" -splice 24x0 +append serit.jpg` (ilk sütundaki
fazla boşluğu kırp).

## Yapma

- Yerel Claude resim üretmez, istem metnini değiştirmez (yalnız sona `## Düzeltme`) — CODEX-25.
- Yalnız `main` — SUREC-7. `red/` GitHub'a gitmez (.gitignore).

## Vaka 3 dersleri (istemde baştan önlenir, denetimde aranır) — ISTEM-53

| Sorun | Kural |
|---|---|
| Filtre engeli | ISTEM-16, ISTEM-26 |
| Dar beyaz tişörtün altından meme ucu | ISTEM-22 |
| Cihazlarda logo, rakam | ISTEM-28 |
| İstenmeyen aksesuar | ISTEM-29 |
| Peri'nin ayakkabısı siyah | ISTEM-20 |
| Fazla uzuv | ISTEM-31 |
| Yüz profile dönüyor | ISTEM-6 |
| "Yorgun göz" → morluk | ISTEM-39 |
| Unlu karakter yaşlı/gri, fotoğrafa kayıyor | ISTEM-40 |
| Loş sahne fazla aydınlık | ISTEM-41 |
| Fiziksel imkânsızlık; havadaki nesne yanlış yerde | ISTEM-42 |
| Kadraj sınırı yüzdesi tutmuyor | ISTEM-43 |
| İki yan karakter birbirine benziyor | ISTEM-13 |
| Yeni karakter eski birine benziyor | ISTEM-12, ISTEM-13 |
| Boy, bakış, kesim, saç | ISTEM-53 + `arac_yanyana.js` |
| Kart katalog çizimine kayıyor, figür tarzı karttan alıyor (V6 G2 → G18 → bütün Cengo seti; 13 Kasım) | ISTEM-19 |
| Çizgi roman / karikatür tarzı, kalın kontur (v3 ilk G1, G4; 6 Kasım) | ISTEM-1, ISTEM-9, ISTEM-10 (karşılaştırma: `arsiv/uretim/v3_eski/prompts/`) |
| Dağınık saç telleri zemine taşıyor → kesimden sonra zemin halesi (v3 G1, G4) | ISTEM-44 |

## Taşınan bilgiler (20 Kasım 2026)

Kural toplama işinin taşıma adımında eski belgelerden buraya alındı; `(k:…)` = `sablon/kurallar/adim3/kayit_aday.tsv` kimliği.

### Resim klasörü ve ortak referanslar (eski `arsiv/uretim/OKUBENI.md`, `arsiv/uretim/v3_eski/BIRIKIM.md`; ikisi de artık `arsiv/uretim/` altında)

- *Bilgi:* [OKUBENI › Resim üretimi — işleyiş] Oyunun resimleri burada üretilir. Her vaka bir klasör: `v3/`, `v4/` … Her şey GitHub'da durur; bilgisayar kapalıyken telefondan (bulut Claude) da görülür. (k:6483fdba8b)
- *Bilgi:* [OKUBENI › Bir vakanın klasörü] `LISTE.md` · resim listesi: no · tür · ne · önce onaylanması gereken · ✓ (k:e29f4b9259)
- *Bilgi:* [OKUBENI › Bir vakanın klasörü] `red/` · reddedilen · ✗ yalnız bilgisayarda (k:bc7f9d13a9)
- *Bilgi:* [OKUBENI › Bir vakanın klasörü] `yanyana/` · resmin oyundaki hâli (denetim kanıtı) · ✓ (k:342f1282d4)
- *Bilgi:* [OKUBENI › Belgeler] Vaka 3'ün Codex deneyimi (gerekçeler, ret geçmişi, filtre deneyi): `arsiv/uretim/v3_eski/BIRIKIM.md` (k:bbf8ee3eac)
- *Bilgi:* [BIRIKIM › 7. `referanslar/` klasörü (26 dosya)] `buro_gunduz.jpg` · Boş büro, gündüz, kemerli pencereden İstanbul · G49, G62 · — (k:fb5114a950)
- *Bilgi:* [BIRIKIM › 7. `referanslar/` klasörü (26 dosya)] `buro_aksam.jpg` · Aynı büro, akşam, masa lambası · G63, G64, G65, G66 · — (k:0f1e7d2962)
- *Bilgi:* [BIRIKIM › 7. `referanslar/` klasörü (26 dosya)] `tarz_mekan_ic.jpg` · Eski dükkân içi, yarı inik kepenk, gün batımı ışığı · G10, G11, G17, G18 · — (k:f9dd1c9c86)
- *Bilgi:* [BIRIKIM › 7. `referanslar/` klasörü (26 dosya)] `tarz_sokak.jpg` · Arnavut kaldırımlı dar sokak, gün batımı, deniz · G15, G16 · — (k:14a1805a2c)

### Yerel üretim denemesi (Stable Diffusion / Forge, 11 Ekim 2026; karar verilmedi)

- *Bilgi:* [5_gorsel_sistemi › D. Üretim yöntemi] 7. **Yerel üretim denemesi (11 Ekim 2026; karar verilmedi, sürüyor).** Amaç: ret/limit yok, gece otomatik üretim, Claude üretir-denetler-yeniden dener, sahibi sabah toplu onaylar. (k:bba95c6a63)
- *Bilgi:* [5_gorsel_sistemi › D. Üretim yöntemi] Donanım: sahibinin dizüstü HP Omen, GTX 1060 Max-Q **6 GB**, 16 GB RAM, Win 10. Sınırda ama çalışıyor. (k:081c2f51f4)
- *Bilgi:* [5_gorsel_sistemi › D. Üretim yöntemi] Kurulum: Stable Diffusion WebUI **Forge** (tek tık paketi, CUDA 12.1) → `C:\forge`; NVIDIA 582.78. (k:f7e28987c7)
- *Bilgi:* [5_gorsel_sistemi › D. Üretim yöntemi] Model: **DreamShaper XL Lightning DPM++ SDE** (civitai 112902). Lisans CreativeML Open RAIL++-M (çıktı üzerinde hak iddia edilmiyor; ticari kullanım yasağı yok). Ayar: 6 adım, CFG 2, DPM++ SDE, Karras, 832×1216, UI = xl. (k:55ea392e08)
- *Ders:* [5_gorsel_sistemi › D. Üretim yöntemi] Tuzaklar: canlı önizleme GitHub'dan dosya indirmeye çalışıp "getaddrinfo failed" verdi → Settings → Live previews kapat, yöntem "Approx cheap". **GPU Weights 5119 → 4096** süreyi 4 dk 35 sn'den 1 dk 25 sn'ye indirdi (bellek %100 → %87). (k:525396a78e)
- *Bilgi:* [5_gorsel_sistemi › D. Üretim yöntemi] Karakter tutarlılığı: ControlNet Unit 0 → IP-Adapter (`ip-adapter-plus_sdxl_vit-h`, preprocessor CLIP-ViT-H) + G1 referansı. Weight 0.7: G1'e çok benzer ama fotoğrafa kayar; **0.5: hem benzer hem boyalı**, 1 dk 47 sn. (İlk çalıştırma kodlayıcıyı indirdiği için 14 dk.) (k:691fe1d01e)
