# VAKA 3 — BAŞLANGIÇ (yeni pencere için)

Vaka 3, Vaka 2 ile aynı şablonla üretilir; Vaka 2'nin ölçümünden çıkan **iki hızlandırma
kuralı** bu vakada ilk kez uygulanır. Kurallar ve gerekçe: `sablon/7_uretim_sureci.md` →
"Hızlandırma kuralları".

## 0. Okuma sırası

1. `CLAUDE.md`
2. **bu dosya**
3. `sablon/` — 7 parça, sırayla (özellikle `7_uretim_sureci.md` → Hızlandırma kuralları)
4. `sablon/vakalar/vaka2_baslangic.md` §2–5 (Vaka 1 dersleri, görselli tur denetimi, çalışma biçimi)
5. Örnek olarak: `sablon/vakalar/vaka2_form.md`, `vaka2_diyalog.md`, `vaka2_gorsel.md`

## 1. Bu vakada yeni olan

- **Tip: Bilmece (17 Ekim, sahibinin kararı)** — Vaka 1 ve 2 gibi; oyuncu da suçluyu bilmez. Taslak
  (`arsiv/kaynak/YENI_OYUN_SEZON.md` → "VAKA 3 — SİMİT SOYGUNU") Columbo tipi yazıyor; konu oradan alınır, tip
  Bilmece'ye çevrilir. Columbo/Ters tip ileride ayrı bir deneme vakasıyla (`arsiv/sablon/1_oyun_yapisi.md`).
- **Konu: Simit Soygunu (17 Ekim, sahibinin onayı).** Yan karakter **Gizem**: pastanenin tezgâhtarı, yirmili
  yaşlarının ortası, hazırcevap, seksi ve işveli; Cengo'yla atışır, Peri'yi zaman zaman kıskançlık krizine sokar.
  Masum; soygun gecesinin tek gerçek tanığı; vakadan sonra büroya yerleşir. Kanon: `3_kanon_kaydi.md`.
- **Peri her zaman üstün (17 Ekim, sahibinin kararı)** — KAR-6.
- **Gizem referans seti (17 Ekim)** — SUREC-23.

- **Bulanık replik taraması** (adım 5'in sonu) — SUREC-15. Ölçü: Vaka 2'de Onay 2 = 1 sa 56 dk, 22 not.
- **Toplu görsel işleme** (adım 9–10) — SUREC-21.
- **Görsel–metin uyum denetimi** (adım 11, Onay 3'ten önce) — SATIR-31.
- **Görsel iş sayfası aynı biçimde (11 Ekim, sahibinin kararı)** — SUREC-20 (`vaka2_sayfa/` → `vaka3_sayfa/`, `uret.py`).
- **Temel görsel önce, tek başına; türevler onaydan sonra** — SUREC-22. Vaka 2'nin görsel dersleri artık ISTEM-*, DENETIM-*,
  GOMME-* kurallarında (eski yer: `arsiv/sablon/5_gorsel_sistemi.md` D, E, F).
- **Görsel sorunu anında söylenir** (11 Ekim, Vaka 2 Sohbet 1 dersi) — DENETIM-50.
- **Adı geçen kişi ekranda (16 Ekim, sahibinin kararı — ZORUNLU)** — SATIR-20 (`{gir: x}`; turda `--hepsi` → `adi_gecen_yok.txt`).
- **3 araştırma hakkı + reklamla +1 (16 Ekim, sahibinin kararı)** — YAPI-5, RAF-52 (`test_yeni_v2.js` sınar).
- **Künye vaka başına (16 Ekim)** — ARAYUZ-31 (önceki vakadan dönen kişi için `tanisma` dizi olur).
- **Defter vaka başına + anı özeti (17 Ekim, sahibinin isteği)** — ARAYUZ-9, ARAYUZ-11, BILGI-7. Diyalogda `## ani` bölümü
  (`**ANI:** …`, `## cozum`'dan sonra); bölüm yoksa `arac_diyalog.js` veriyi yazmaz. Örnek: `vaka2_diyalog.md` → `## ani`.
- **Paylaş kartı (17 Ekim)** — ARAYUZ-32; kapak (`gorseller.json → kapak`) ve kart afişi (`gorseller.json → kart`, `KART_V3`) —
  GOMME-21…27, BILGI-14…16. Promptu `sablon/kart_sayfa/uret.py`'ye; `test_yeni_arayuz.js` kapaksız vakayı yakalar.
- **Kıyafet vaka içinde değişebilir** — SEZON-23.
- **Künye portresi (16 Ekim, sahibi buldu: Vaka 2'nin yedi konuğunda yoktu)** — GOMME-12:
  `python3 arac_portre.py <figür_normal> yeni_gorsel/portre/portre_<id>.webp` + `gorseller.json`; `test_yeni_v2.js` eksik portreyi yakalar.
- **Peri / Cengo poz kütüphanesi (16–17 Ekim)** — ISTEM-11 (`sablon/peri_poz/`, `sablon/cengo_poz/`; Peri'nin L referansları
  sonradan kalktı — ISTEM-16).
- **ChatGPT reddederse (16 Ekim, sahibinin kararı)** — ISTEM-25.
- **Tutarlılık sorunu "beğeni" diye geçilmez** — DENETIM-51; rötuşun sınırı — DENETIM-52.

## 2. Süre ölçümü

Süre ölçümü — SUREC-30 (17 Ekim, sahibinin isteği; aktif süre = toplam − aralar; 18 Eki: "başlat" dendi ama çalışılamadı →
aynı anda yeni ara açıldı).

| ara | durdu | başladı | süre |
|---|---|---|---|
| 1 | 17 Eki 15:40 (Onay 2 öncesi) | 17 Eki 16:11 | 31 dk |
| 2 | 17 Eki 16:18 (Onay 2 öncesi) | 17 Eki 17:09 | 51 dk |
| 3 | 17 Eki 17:41 (Onay 2 sırasında) | 17 Eki 17:57 | 16 dk |
| 4 | 17 Eki 18:09 (Onay 2 sırasında) | 18 Eki ~09:14 (sahibinin ekran görüntüleri 09:13; afiş esprisi) | ~15 sa 05 dk |
| 5 | 18 Eki 10:11 (Onay 2 sırasında; afiş esprisi + kapanış K53 bitti, adım 8 başlamadı) | 18 Eki 11:26 ("saati başlat") | 1 sa 15 dk |
| 6 | 18 Eki 11:26 (sahibi başlattıktan sonra çalışamadı; aynı anda durduruldu) | 18 Eki 13:33 | 2 sa 07 dk |
| 7 | 18 Eki 14:38 (mola; Onay 2 sırasında) | 18 Eki 20:32 | 5 sa 54 dk |
| 8 | 18 Eki 20:51 (Onay 2 sırasında; Gizem'in fotoğrafı bitti) | 18 Eki ~21:25 ("zamanı başlat"; kanıt ekranı sorusu) | ~34 dk |
| 9 | 18 Eki 21:41 (Onay 2 sırasında; kanıt ekranı bitti, sahibi inceliyor) | 18 Eki 21:46 ("tekrar başlat") | 5 dk |
| 10 | 18 Eki 21:48 (Onay 2 sırasında; V1/V2 kısa ad kararı yarına) | 22 Eki 12:59 ("zamanı başlat"; hikâye donmuş sayıldı, adım 8) | ~3 gün 15 sa 11 dk (aradaki işler — kanıt sızıntısı, sahne sızıntıları, tarama aracı — saat dururken yapıldı, sayılmadı) |
| 11 | 22 Eki 13:09 (adım 8: iş sayfası yayımlandı; sahibi bilgisayarda "başlat" diyecek) | 22 Eki 15:34 ("zamanı başlat"; adım 9 görsel üretimi) | 2 sa 25 dk |
| 12 | 22 Eki 15:51 (adım 9: G1, G12–G18 onaylı; sıradaki G2) | 22 Eki 17:35 ("zamanı başlat") | 1 sa 44 dk |
| 13 | 22 Eki 18:37 (adım 9: Aşama 1 tamam, Aşama 2'de G19–G24 onaylı; sıradaki G25) | 22 Eki 20:20 ("zamanı başlat") | 1 sa 43 dk |
| 14 | 22 Eki 21:09 (adım 9: 45 görsel onaylı; kalan Aşama 2: G45–G48, sonra Aşama 3) | ölçülmedi | ölçülmedi — saat bundan sonra işletilmedi (sahibinin kararı, 9 Kas: "ölçülmedi yazılsın") |

| adım (7. parça) | başladı | bitti | not |
|---|---|---|---|
| 1 Form | 17 Eki 14:19 (TSİ) | 17 Eki 14:30 | başlangıç = "Vaka 3'e başlayalım"; müşteri aile dışı (V1 baba–oğul tekrarı olmasın) |
| 2 Onay 1 | 17 Eki 14:30 | 17 Eki 15:03 | onay; düzeltmeler: çek → elden borç, afiş = Nadide'nin imzalı hayran afişi, Peri kitaba göre dedektif kılığında, "Tabii, tabii" |
| 3–4 Diyalog + veri + künye | 17 Eki 15:03 | 17 Eki 15:11 | doğrulayıcı PASS; testler geçti (V3: 9/14 küme çözer); künye aracı temiz; kapak testi görselsiz aşamada yer tutucuyu kabul eder |
| 5 Görselsiz tur + bulanık replik taraması | 17 Eki 15:11 | 17 Eki 15:37 | `arac_yeni_tur.js` V3'e açıldı (yollar kod/foto/borc/badem/cozmez); 9 tur (5 yol × 4 sonuç × 4 karar) temiz; `--hepsi` 140 satır; motor eki: satırda `cset` (Cengo unlu); 11 bulanık replik düzeltmesi (saat ifadeleri ×3, 'patron' → Ferruh ×2, Gizem'in istifa cümlesi, Cengo'nun kime'si…) |
| 6–7 Onay 2, hikâye donar | 17 Eki 15:37 | 22 Eki 12:59 (sahibi: "hikâyeyi donmuş sayalım") | Vaka 2: 1 sa 56 dk. 16:11–16:18: sahibinin isteğiyle anlaşılırlık geçişi — 109 replik açıldı (kısa/şifreli cümleler: "Senin defterin ayrı", "Önce dükkân" gibi). 18 Eki notları: afiş esprisi, K53 (saklanma), K38 teyze cevabı, saat kuralı 5b, Cengo'nun dinleme yüzü, Gizem'in fotoğrafı bilerek — ayrıntı `DEVIR.md` |
| 8 Görsel listesi + promptlar | 22 Eki 12:59 | 22 Eki 13:09 | sahibinin yeni düzeni: önce ana referanslar (onay), sonra referansa göre gruplu toplu üretim, 3 pencere paralel |
| 9–10 Görseller, toplu işleme, yerleştirme | 22 Eki 15:34 | ölçülmedi | sahibi bilgisayarda; Aşama 1 (G1–G11) önce. 22 Eki 21:09'a kadar 2 sa 08 dk aktif; sonrası ölçülmedi (Codex + yerel Claude düzenine geçildi, `uretim/`) |
| 11 Görselli tur | ölçülmedi | ölçülmedi | |
| 12–13 Onay 3, düzeltmeler | ölçülmedi | 9 Kas | Onay 3 sahne sahne telefonda; satır–resim sözleşmesi (SR-A…L) bu turda yazıldı; son düzeltme: pembe önlük temizlendi (12 resim + kart G103, yalnız önlük) |
| 14 Vaka donar | 9 Kas | 9 Kas | süre ölçülmedi. Sızıntı taraması (40 yol, 1406 ekran) temiz; son turlar (bütün yollar, tablet, 19 boy). "Vaka N'den başla" düğmesi **açık kalır** (sahibinin kararı) |

### Toplam

| bölüm | süre |
|---|---|
| 1–8 (form → görsel listesi; 17–22 Eki) | 5 sa 01 dk |
| 9–10 görseller, 22 Eki 21:09'a kadar | 2 sa 08 dk |
| 22 Eki 21:09 → 9 Kas (görsellerin çoğu, görselli tur, Onay 3, düzeltmeler, dondurma) | **ölçülmedi** |
| **Ölçülen** | **≈ 7 sa 09 dk** (vakanın tamamı değil) |

Takvimde: 17 Ekim → 9 Kasım, ~3,5 hafta. Vaka 4'te saat baştan sona işletilmeli (`arsiv/kaynak/RAF_KARARLARI.md` §11c).
