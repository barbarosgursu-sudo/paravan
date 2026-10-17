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
  (`kaynak/YENI_OYUN_SEZON.md` → "VAKA 3 — SİMİT SOYGUNU") Columbo tipi yazıyor; konu oradan alınır, tip
  Bilmece'ye çevrilir. Columbo/Ters tip ileride ayrı bir deneme vakasıyla (`1_oyun_yapisi.md`).
- **Konu: Simit Soygunu (17 Ekim, sahibinin onayı).** Yan karakter **Gizem**: pastanenin tezgâhtarı, yirmili
  yaşlarının ortası, hazırcevap, seksi ve işveli; Cengo'yla atışır, Peri'yi zaman zaman kıskançlık krizine sokar.
  Masum; soygun gecesinin tek gerçek tanığı; vakadan sonra büroya yerleşir. Kanon: `3_kanon_kaydi.md`.
- **Peri her zaman üstün (17 Ekim, sahibinin kararı):** Vaka 2 kuralı sürer — Peri vakadaki kadınların içinde
  her zaman en gösterişli ve seksi olandır; Gizem'le yan yana Peri çok daha alımlı görünür. Kıskançlık bundan
  doğar: Peri üstün olduğu hâlde huzursuzlanır. Görsel promptlarına (adım 8) baştan konur.
- **Gizem referans seti (17 Ekim):** Vaka 3'te yok — önce temel figür tek başına, onaydan sonra ifadeler.
  Vaka 3 bitince sahibiyle karar: küçük set (8–10) ya da tam set (25, Peri/Cengo gibi). Vaka süresine girmez.

- **Bulanık replik taraması** (adım 5'in sonu): Onay 2'den önce her replik "kime, neyi,
  nereden biliyor, espri, sıra, niyet" sorularıyla okunur; düzeltmeler sahibine tek listede
  verilir. Ölçü: Vaka 2'de Onay 2 = 1 sa 56 dk, 22 not.
- **Toplu görsel işleme** (adım 9–10): görseller sohbet sohbet gelir, paket hâlinde işlenir,
  sahibine oyundaki son hâli tek seferde gösterilir.
- **Görsel–metin uyum denetimi** (adım 11, Onay 3'ten önce): görselli tur bütün yollarda; her ekran
  altındaki metinle yan yana okunur (kim var, kime konuşuyor, yüz satıra uyuyor mu, anılan şey
  görünüyor mu, süreklilik, yer/zaman, kenardan taşan jest, Nurcan). Bulunanlar tek listede.
  Ayrıntı: `7_uretim_sureci.md` → Hızlandırma kuralları.
- **Görsel iş sayfası aynı biçimde (11 Ekim, sahibinin kararı).** Adım 8'de `vaka2_sayfa/`
  kopyalanıp `vaka3_sayfa/` yapılır, `uret.py`'deki liste Vaka 3'e göre yazılır, sayfa
  yayımlanır ve bağlantısı sahibine verilir. Sahibi sohbetleri sayfanın sırasıyla yürütür;
  süre tablosu ve `DEVIR.md` de o sırayı kullanır. Ayrıntı: `5_gorsel_sistemi.md` D-6.
- **Temel görsel önce, tek başına; türevler onaydan sonra.** Ayrıca Vaka 2'nin bütün görsel
  dersleri (kıyafet sabiti kayması, külotlu çorap, sayı, şehir, marka izi, kalabalıkta kişi
  düşmesi, kim kimi görüyor, red) `5_gorsel_sistemi.md` D (bilinen hatalar tablosu), E (kontrol
  listesi 10–12) ve F'de (kesim profilleri, hale, rötuş sınırı). Prompt yazarken D tablosundaki
  önlemler promptlara baştan konur.
- **Görsel sorunu anında söylenir (11 Ekim, Vaka 2 Sohbet 1 dersi).** Sahibi üretim sırasında bir
  sorun görürse (fazla ayrıntı, tutarsız kıyafet, el, yazı) o an yazar — özellikle sonraki
  görsellere **referans olacak** görselde (temel: G1, ilk kremalı, ilk örtülü vb.). Hata referansta
  düzelmezse zincirle yayılır: Vaka 2'de G8'de doğan çorap bandı G9–G13'e geçti; 5 görsel yeniden
  üretildi, G13 limite takıldı (~20 dk kayıp).
- **Adı geçen kişi ekranda mı (16 Ekim, sahibinin kararı — ZORUNLU):** anlatı satırında adı geçen
  her kişi o satırda ekranda; tek kişi → `{gir: x}`, iki kişiden fazlası ya da grup → kare.
  Diyalogda (adım 3), görsel listesinde (adım 8) ve turda (`--hepsi` → `adi_gecen_yok.txt`)
  denetlenir. `7_uretim_sureci.md` → Görsel–metin uyum denetimi.
- **3 araştırma hakkı + reklamla +1 (16 Ekim, sahibinin kararı):** formda 3 hak; **3 hakla `doğru` yolu
  şart** (`test_yeni_v2.js` sınar), 4. ipucu resmi genişletir. Reklam düğmesi hak bitince çıkar;
  kapanıştan sonra "Kaçırdığın ipuçları". Ayrıntı `kaynak/YENI_OYUN_CERCEVE.md`.
- **Künye vaka başına (16 Ekim):** künyede yalnız o vakanın kişileri (+ Peri, Cengo). Her konuşan kişiye
  künye kaydı (adı olan herkes; Vaka 2'de Saadet unutulmuştu) ve portre. Önceki vakadan dönen kişi
  için `tanisma` dizi olur.
- **Defter vaka başına + anı özeti (17 Ekim, sahibinin isteği):** Zincir sekmesi yalnız içinde bulunulan
  vakayı gösterir. Anı sekmesinde her biten vakanın üstünde 2–3 cümlelik **anı özeti** durur
  (müşteri ve kayıp, kim almıştı, neden; yalnız kovalamacadaki itirafın söylediği — kural 21d).
  Formda §12'nin altına yazılır, diyalogda `## ani` bölümüne (`**ANI:** …`, `## cozum`'dan sonra) gider;
  bölüm yoksa `arac_diyalog.js` veriyi yazmaz. Örnek: `vaka2_diyalog.md` → `## ani`.
- **Paylaş kartı (17 Ekim):** her vakaya iki şey gerekir.
  (1) **Kapak** (`gorseller.json → kapak`, zorunlu, yedek): ipucu sahnelerinde geçen bir ARKA PLAN; yüzleşme/
  kovalamaca/kapanış ve K kareleri olmaz (Nurcan). `test_yeni_arayuz.js` kapaksız vakayı yakalar.
  (2) **Kart afişi** (`gorseller.json → kart`, `KART_V3`): kişiler + mekân, ipucusuz, hareketli. Adım 8'de görsel
  listesine eklenir, promptu `sablon/kart_sayfa/uret.py`'ye yazılır; kurallar `5_gorsel_sistemi.md` → **G**.
  `giris` varsayılanının ilk cümlesi paylaşım mesajına girer: sızıntısız ve tek başına anlaşılır olsun.
- **Kıyafet:** hikâye gerektirirse vaka içinde değişebilir (her yeni kıyafet = ifade seti, ~6–8 figür).
- **Künye portresi (16 Ekim, sahibi buldu: Vaka 2'nin yedi konuğunda yoktu):** her yeni kişinin figürü
  gömülünce `python3 arac_portre.py <figür_normal> yeni_gorsel/portre/portre_<id>.webp` + `gorseller.json`.
  `test_yeni_v2.js` eksik portreyi yakalar.
- **Peri poz kütüphanesi (16 Ekim):** `sablon/peri_poz/` — L1 yüz, L22/L25 oturur-bacak bacak üstünde,
  L16 işaret eden, L13/L24 arkadan… Adım 8'de her Peri promptuna uygun L eklenir (en çok 5 referans).
  **Cengo poz kütüphanesi (17 Ekim, tamam):** `sablon/cengo_poz/` — C1 yüz, G14-1 beden; C25 koltukta
  bacak bacak üstünde, C16 işaret eden, C24 arkadan, C19 yürüyor… Aynı kural: uygun C "YALNIZ poz için".
  Yeni kıyafette temel figür C1 + G14-1 (+ poz C) ile; ifadeler o temelin düzenlemesi (D-1). Kıyafet V1/V2
  ile aynıysa oyundaki figür referanstır. Adım 8'de her Peri/Cengo kartına hangi L/C'nin gireceğini yaz.
- **ChatGPT reddederse (16 Ekim, sahibinin kararı):** aynı promptu ChatGPT'nin düşünen kipinde
  ver; kendisi yumuşatıp yeniden dener (Vaka 2 K23 böyle çıktı). Olmazsa Grok. `5_gorsel_sistemi.md` D-5.
- **Claude tutarlılık sorununu "beğeni" diye geçmez.** Setin içinde tutarsız ya da promptta
  istenmemiş bir ayrıntı görürse gömmeden önce sorar ve düzeltme promptunu verir. Otomatik rötuşa
  (ör. bant/nesne silme) ancak yüzey düzse girer; yeniden üretim çoğu zaman daha kısadır.

## 2. Süre ölçümü

Başlangıç = sahibinin "Vaka 3'e başla" dediği an. Her adımın bitişi yazılır; aralar toplama girmez.
Sahibi "zamanı durdur" / "tekrar başlat" der; aralar aşağıdaki ara tablosuna yazılır (17 Ekim, sahibinin isteği):
aktif süre = toplam − aralar.

| ara | durdu | başladı | süre |
|---|---|---|---|
| 1 | 17 Eki 15:40 (Onay 2 öncesi) | 17 Eki 16:11 | 31 dk |
| 2 | 17 Eki 16:18 (Onay 2 öncesi; sahibi kontrol edecek) | | |

| adım (7. parça) | başladı | bitti | not |
|---|---|---|---|
| 1 Form | 17 Eki 14:19 (TSİ) | 17 Eki 14:30 | başlangıç = "Vaka 3'e başlayalım"; müşteri aile dışı (V1 baba–oğul tekrarı olmasın) |
| 2 Onay 1 | 17 Eki 14:30 | 17 Eki 15:03 | onay; düzeltmeler: çek → elden borç, afiş = Nadide'nin imzalı hayran afişi, Peri kitaba göre dedektif kılığında, "Tabii, tabii" |
| 3–4 Diyalog + veri + künye | 17 Eki 15:03 | 17 Eki 15:11 | doğrulayıcı PASS; testler geçti (V3: 9/14 küme çözer); künye aracı temiz; kapak testi görselsiz aşamada yer tutucuyu kabul eder |
| 5 Görselsiz tur + bulanık replik taraması | 17 Eki 15:11 | 17 Eki 15:37 | `arac_yeni_tur.js` V3'e açıldı (yollar kod/foto/borc/badem/cozmez); 9 tur (5 yol × 4 sonuç × 4 karar) temiz; `--hepsi` 140 satır; motor eki: satırda `cset` (Cengo unlu); 11 bulanık replik düzeltmesi (saat ifadeleri ×3, 'patron' → Ferruh ×2, Gizem'in istifa cümlesi, Cengo'nun kime'si…) |
| 6–7 Onay 2, hikâye donar | 17 Eki 15:37 | | Vaka 2: 1 sa 56 dk. 16:11–16:18: sahibinin isteğiyle anlaşılırlık geçişi — 109 replik açıldı (kısa/şifreli cümleler: "Senin defterin ayrı", "Önce dükkân" gibi) |
| 8 Görsel listesi + promptlar | | | |
| 9–10 Görseller, toplu işleme, yerleştirme | | | |
| 11 Görselli tur | | | |
| 12–13 Onay 3, düzeltmeler | | | |
| 14 Vaka donar | | | |
