# Adım 3 — onaylı değişikliklerin KURALLAR.md'ye işlenmesi (20 Kasım 2026)

Girdi: `SORULAR.md` (A 21 birleşme + B 7 çelişki, öneriler onaylı), `tekrar_karar.md` (16 grubun metni), `denetim_tekrar.md`
(G6, G10, G14 düzeltmeleri; 5 ek grup). Yalnız `KURALLAR.md` değişti. Kural kodları korundu, yeniden numaralanmadı.

Sonuç: 687 başlık duruyor; 23'ü "→ ANA (birleşti, 20 Kasım 2026)" + eski *Kaynak:* satırı; asıl kural 664.
`node arac_kurallar.js say` → `{"ham_kayit":3585,"kural_kaydi":1725,"karsilik":1697,"YOK":17,"ESKIDI":11,"birlesen":23,"kural_basligi":687} hata: 0`

Dikkat: `KURALLAR.md` başta `arac_kurallar.js birlestir` ile `adim2/kural_<KOD>.md`'den üretilmişti; bu değişiklikler o dosyalara
işlenmedi. `birlestir` yeniden koşulursa bu işlem silinir.

## A. Birleşmeler (21 grup, 23 kod yönlendi)

Her satırda: ANA ← birleşen · ANA'nın gövdesi · ANA *Kaynak:* (önce ANA'nınkiler) · birleşen kodun stub kaynağı.

| # | ANA ← birleşen | ANA gövdesi | ANA *Kaynak:* eski → yeni |
|---|---|---|---|
| G1 | KAR-6 ← SINIR-4 | `tekrar_karar.md` G1 metni | 192 → 192, 1210, 2566, 2997 |
| G2 | TON-8 ← SATIR-14 | G2 metni (son cümle: "anlatıcı da 'nereden biliyoruz?' sınavından geçer") | 176, 701 → 176, 701, 6, 384, 2628 |
| G3 | SUREC-27 ← KOD-32 | G3 metni (`V5 40`, şablon 7. parça adım 5 ve 14, "Test değil, araç.") | 694, 2783 → 694, 2783, 15, 2886 |
| G4 | ARAYUZ-37 ← SUREC-42 | G4 metni (10 Ekim ilk hâl, 16 Ekim 20:20 Vaka 1 dahil; Vaka 2 süre kaydı parantezde) | 2454, 2938, 3017, 3079 → + 3055 |
| G5 | RAF-111 ← YAPI-41, BILGI-21 | G5 metni; başlık "…komik anlar, yalnız kazanılan görünür, Play başarı sistemi yok" | 1702, 2011, 3019 → + 1698, 1703, 1699 |
| G6 | KAR-22 ← SEZON-22 | G6 metni, **ikinci gözün düzelttiği sırayla**: "…vakaya göre değişir (sahibinin isteği); bu yüzden kıyafet kütüphanesi tutulmaz." ilk cümleye bağlandı | 193, 102 → + 1857, 3084, 1971 |
| G7 | BILGI-7 ← ARAYUZ-12 | G7 metni | 203, 634, 669 → + 2577, 3007 |
| G8 | ISTEM-51 ← SATIR-27 | G8 metni | 3566, 3578, 2967, 2630 → + 715, 1073, 1218 |
| G9 | SATIR-35 ← SEZON-24 | G9 metni (yeni son madde: görsel sayısını satırlar belirler … KAR-22) | 371, 372, 373, 645, 370, 646 → + 1971, 3081 |
| G10 | YAPI-17 ← TON-17 | G10 metni, **düzeltilmiş**: "Sahibinin kararı, 17 Ekim 2026; Vaka 4'te de geçerli. Yüzleşmede suçlunun paniği…"; sondaki "Vaka 4'te de geçerli." silindi (başa taşındı) | 145, 710 → + 5, 2629 |
| G11 | DENETIM-30 ← SATIR-29 | G11 metni | 469, 1128 → + 716, 1074 |
| G12 | KAR-8 ← TON-18, TON-20 | G12 metni ("(Ton belgesi taslağı §4, öneri:)" maddesi) | 183, 1754, 1987 → + 1756, 1758 |
| G13 | KAR-9 ← TON-19 | G13 metni (öneri işaretli) | 184 → + 1757 |
| G14 | KOD-3 ← SUREC-9 | G14 metni, **düzeltilmiş** son cümle: "Resim gömmede (`göm` komutu) adım 5: kök CLAUDE.md'deki "Her commit'ten önce" komutları (yukarıdaki kod bloğu); hepsi geçerse commit → push." | 10, 11, 2326, 2350, 2886 → + 2555, 1147 |
| G15 | YAPI-40 ← KAR-20 | G15 metni | 1792, 1794, 1795 → + 210, 632 |
| G16 | ARAYUZ-8 ← KOD-31 | G16 metni | 3032 → 3032, 15 |
| E1 | KOD-21 ← ARAYUZ-27 | KOD-21 aynen + "Tarayıcı uyarı kutusu yok (Claude sayfası engelliyor); her onay sayfanın içinde." | 2412 → 2412, 309 |
| E2 | RAF-65 ← YAPI-47 | RAF-65 + YAPI-47'den: "(vaka sonundaki ekran…)", "reklamla açılır", "5–7 kısa paragraf", "yanıltan izler nereden geldi", "Formun §2'sinden (Gerçek) düz dille", `YENI_OYUN_CERCEVE.md` | 2006 → 2006, 636 |
| E3 | ISTEM-54 ← (SUREC-31'in ifade ızgarası maddesi) | ISTEM-54 metni aynen (madde orada zaten vardı) | 3082 → 3082, 732 — SUREC-31 stub değil, aşağıya bkz. |
| E4 | GOMME-28 ← ISTEM-57 | Başa: "Her vakaya kendi masa kartı (`MASA_V<N>`) — sahibinin kalıcı kararı (6–7 Kasım)." Sonrası GOMME-28 aynen | 1145 → 1145, 2967 |
| E5 | ARAYUZ-32 ← KOD-92 | ARAYUZ-32 + KOD-92'den: "Yalnız yeni oyun", "Arkadaşına öner" düğmesi ve yerleri (kapanış sonrası ekran / "Dosya kapandı", Defter → Anı), 1080×1920 `paylasKartCiz`, afiş/`kapak` yedeği, küçük kutu ("Sen olsan ne yapardın?"), "önce resim, yazı az", suçlu/karar/suçlama/kasa/not girmez + gerekçe, `navigator.share` / indir + kopyala, `uret.py` (afiş promptları ve iş sayfası), `5_gorsel_sistemi.md` → G, ilk cümle `paylasMetin`'de, `og:` etiketleri ve `paylas_onizleme.jpg` → `yeni/paylas.jpg`, "Android aşaması" | 2008, 2578 → 2008, 2578, 15 |

ANA seçimi (ek 5 grup): KOD-21 (kod yasağı, `confirm()`/`alert()`), RAF-65 (asıl ekran kararı RAF'ta, daha geniş), ISTEM-54 (talimat
gereği), GOMME-28 (kartın yapımı), ARAYUZ-32 (ekran; G16'daki KOD-31 → ARAYUZ-8 ile aynı mantık, ikisi de kaynak 15).

Stub'lar — başlık yerinde, gövde iki satır (`→ ANA (birleşti, 20 Kasım 2026)` + eski *Kaynak:*):
SINIR-4→KAR-6, SATIR-14→TON-8, KOD-32→SUREC-27, SUREC-42→ARAYUZ-37, YAPI-41→RAF-111, BILGI-21→RAF-111, SEZON-22→KAR-22,
ARAYUZ-12→BILGI-7, SATIR-27→ISTEM-51, SEZON-24→SATIR-35, TON-17→YAPI-17, SATIR-29→DENETIM-30, TON-18→KAR-8, TON-20→KAR-8,
TON-19→KAR-9, SUREC-9→KOD-3, KAR-20→YAPI-40, KOD-31→ARAYUZ-8, ARAYUZ-27→KOD-21, YAPI-47→RAF-65, ISTEM-57→GOMME-28,
KOD-92→ARAYUZ-32, DENETIM-45→ISTEM-25 (B-4).

Tek kaynak satırı ayrıntısı: SINIR-4'ün eski satırı "1210, 2566, 2997 (asıl hâli 192, KAR konusunda, KAR-6)" idi; stub'da
"…(asıl hâli 192, KAR konusunda)". "KAR-6" ok satırında duruyor; kaynak satırında kalsa `say` "6"yı kaynak numarası sanıp hata verirdi.

Atıflar:
- SATIR-28: "istem yazarken (SATIR-27), denetimde (SATIR-29)" → "istem yazarken (ISTEM-51), denetimde (DENETIM-30)".
- SEZON-24'ün "(SEZON-22)" sözü birleşik SATIR-35'te "(KAR-22)".
- Dosyada stub'lanan 23 koda başka atıf kalmadı (grep).

## B. Çelişkiler

| # | kod | eski | yeni |
|---|---|---|---|
| 1 | SUREC-31 | "Sahibinin kararı: görsel sayısı azaltılmaz; ifade ızgarası (bir istekte birkaç ifade) kullanılmaz, çözünürlük düşüyor; ücretli üretim (API) yok …" | "Sahibinin kararı: ifade ızgarası: bkz. ISTEM-54; ücretli üretim (API) yok (şimdilik; ChatGPT/Grok sohbetinde elle üretim); her vakada Peri ve Cengo yeni kıyafet giyer, kıyafet kütüphanesi tutulmaz. (görsel sayısı: SATIR-35)" — kaynak 732, 3083 aynen |
| 2 | KOD-78 | "Metinde, sahne notunda, ifade adında, istemde sigara yok (kural 19a)." | + "Şimdilik yalnız istemde programla aranır (`istem_kontrol.sh`); metin, sahne notu ve ifade adı taraması Adım 4'te eklenecek." |
| 3 | KOD-44 | "(V1–V5, V7 yeniden geçirilene dek)" | "(V1–V5 yeniden geçirilene dek)" |
| 4 | ISTEM-25 / DENETIM-45 | ISTEM-25: "…Olmazsa aynı promptla Grok." · DENETIM-45: "ChatGPT'nin reddettiği resim Grok'ta orijinal istemle denenir; Grok da reddederse sahibine sorulur, istem kendiliğinden yumuşatılmaz." | ISTEM-25: "…Olmazsa aynı promptla (orijinal istemle) Grok. Grok da reddederse sahibine sorulur, istem kendiliğinden yumuşatılmaz." · kaynak + 3059 · DENETIM-45 stub → ISTEM-25 |
| 5 | DENETIM-37 | "Zemin bej → `konuk` (Peri `peri`, Cengo `cengo`); yeşil/gri-mavi → `konuk_beyaz_delik`. Kesim tutmazsa önce başka profil dene; yine olmazsa reddet." | "Profil zemine göre seçilmez; yalnız karakterin çerçevesini verir (Peri `peri`, Cengo `cengo`, konuk `konuk`; GOMME-1, GOMME-20). Kesim tutmazsa reddet." + "(eski: "…" — 17 Kasım 2026'da kalktı, çelişki sorusu 8)" |
| 6 | ISTEM-7 | "- Vaka 4'ten itibaren zemin kıyafetten olduğu gibi saçtan da uzak …" | "- Kayıt (artık geçerli değil; zemini program seçer, GOMME-16): Vaka 4'ten itibaren …" (satırın kendisi aynen) |
| 7 | ARAYUZ-36 | "- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Steam sürümü için düğmeler kapatılacak." | "- Android'de yalnız `reklamGoster`'ın içi gerçek ödüllü reklamla değişir. Android'de de ilk iki vaka reklamsız (RAF-48). Steam sürümü için düğmeler kapatılacak." |

Kararlarım:
- **SUREC-31** stub yapılmadı: ifade ızgarası ISTEM-54'te zaten aynı sözle vardı; SUREC-31'de yalnız o madde "ifade ızgarası: bkz. ISTEM-54"
  oldu, API ve kıyafet maddeleri kendi başına kaldı. ISTEM-54'ün kaynağına 732 eklendi (maddenin SUREC-31'deki kaynağı); SUREC-31'in
  kaynağı (732, 3083) değişmedi.
- B-1 notu talimattaki "(görsel sayısı: SEZON-24)" yerine "(görsel sayısı: SATIR-35)" yazıldı: SEZON-24 bu işte SATIR-35'e birleşti;
  "birleşen koda atıf ANA'ya çevrilir" kuralı.
- B-5: eski "Kesim tutmazsa önce başka profil dene" bugünkü kurala uymuyor (profil yalnız çerçeve verir, başka profil kesimi
  düzeltmez); yalnız "reddet" sonucu kaldı, cümlenin tamamı "(eski: …)" kaydında. Profil adları GOMME-1'in komutundaki
  `peri|cengo|konuk` ile aynı.
- B-7: "her vaka reklamsız … çözülür" ile çelişen bir söz bulunmadı (ARAYUZ-36, YAPI-5, RAF-52, RAF-109 hep aynı yönde).
  Ayrı not (ikinci gözün C bulgusu, bu işin kapsamı dışı, değiştirilmedi): birleşik RAF-65'te "Dosyanın tamamı · reklam" ile RAF-47'nin
  "Vaka 1–2 dosyanın tamamı reklamsız" sözü ayrışıyor.

## Konu tablosu

Sayılar asıl (stub olmayan) kurallar: TON 18, KAR 38, SINIR 12, BILGI 22, YAPI 45, SEZON 23, SUREC 39, SATIR 39, ISTEM 56, DENETIM 51,
GOMME 29, CODEX 25, KOD 89, ARAYUZ 36, RAF 113, SHORTS 29 — toplam 664. Altına: "Birleşip başka kurala yönlenen: 23".
- ARAYUZ-32: ikinci göz düzeltmesi uygulandı (paylasMetin sözü 'Sahibinin kuralı' cümlesine geri bağlandı). Ayrıca arac_kurallar.js 'say' komutuna birleşme denetimi eklendi (birleşen kuralın kaynakları ANA'da mı, zincir yok mu).
