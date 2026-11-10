# VAKA 4 — BAŞLANGIÇ (yeni pencere için)

Vaka 4, Vaka 3'ün bütün kurallarıyla **sıfırdan** üretilen ilk vakadır. İki amacı var (sahibinin kararı, 10 Kasım 2026):
1. Vaka 3'ten çıkan kurallar yeni bir vakada çalışıyor mu, yeni kural çıkıyor mu, görmek.
2. **Süreyi baştan sona ölçmek** (Vaka 3'te ölçülmedi). Vaka 1–2'nin yeniden yapımı ve sezon takvimi bu rakamla planlanır.

Vaka 4 yalnız sahibinin Claude hesabıyla yürür (ikinci kişi/hesap yok). Bittikten sonra sonuçlara göre yeniden planlanır.

## 0. Okuma sırası

1. `CLAUDE.md`
2. **bu dosya**
3. `kaynak/DEVIR.md` en üst bölüm
4. `sablon/` — 7 parça, sırayla (özellikle `7_uretim_sureci.md`: adımlar, hızlandırma kuralları, bulanık replik taraması,
   sızıntı taraması; `5_gorsel_sistemi.md` C0 SR-A…L, H, I)
5. Örnek: `sablon/vakalar/vaka3_form.md`, `vaka3_diyalog.md`, `vaka3_gorsel.md`, `vaka3_baslangic.md` §1 (Vaka 3'te yeni olanlar)
6. Resim aşamasında: `uretim/CLAUDE.md`, `uretim/ISTEM_KALIPLARI.md`

## 1. Konu (taslak — Onay 1'de sahibiyle kesinleşir)

Kaynak: `kaynak/YENI_OYUN_SEZON.md` → **"VAKA 4 — FALCI"** (Cihangir'de kahve falcısı, şantaj suçlaması, kafenin garsonu;
komedi motoru, dördüncü duvar, kararın düğümü, kıyafetler orada). Taslakta "Mavi Ay tipi" yazıyor = Vaka 1–2 gibi **Bilmece**
(`1_oyun_yapisi.md`; Ters tip ertelendi). Taslaktaki her ayrıntı forma girmeden önce sahibine sorulur; taslakta olmayan
bir şey eklemek kanona eklemektir (önce söyle, onay al).

## 2. Bu vakada geçerli olan (Vaka 3'ten gelen, şablonda yazılı)

- Adım 3'te diyalog satır–resim sözleşmesiyle yazılır: `kime`/`gir`, ifade satırın duygusundan, sahne başına `⚙ akış:` notu,
  sahne notu yalnız o an görüleni söyler (SR-A…L, kural 4a).
- Anlaşılır replik (kural 5), yüzleşmede somut panik sebebi, saatte "kala" yok (5b), Kim yaptı? kısa kanıt adları (`## kanit`),
  anı özeti (`## ani`, kural 21d), masum/karar metni yalnız her yolda oynayan sahneleri anar.
- Adım 8: kıyafet hâli tablosu, ifade/nesne ayrımı, `arac_satir_resim.js` bayrakları kapalı, **kıyafet kartları** önce
  sahibine (taslakta Peri kaşe palto, Cengo deri ceket → yeni kartlar; yüz için Vaka 3'teki baş kırpıkları kullanılır).
  Yalnız satırların istediği ifade üretilir. Zemin saçtan da uzak (Vaka 4'ten itibaren, `5_gorsel_sistemi.md` H4).
- Resimler Codex + yerel Claude düzeniyle (`uretim/CLAUDE.md`): `istemleri hazırla 4` → `vaka 4 resimlerini üret`.
- Bitişte: sızıntı taraması, bütün yollar `--hepsi`, tablet, 19 boy, kart afişi, masa kartı, künye portreleri.

## 3. Bu vakada yeni olan

- **Ölçüm genişledi** (§4): sahibinin süresi ile makine süresi ayrı; resim aşamasında sayımlar.
- **Codex 2 kolla denenir** (resim aşaması). Amaç: hesabın aynı anda kaç resim isteğini kabul ettiğini, hız sınırı olup
  olmadığını görmek; Vaka 1–2 paralel üretiminin kol sayısı buna göre seçilir. **Ön koşul:** `uretim/dongu.sh`'ye kol desteği
  (aynı resmi iki kolun almaması için kilit, kol başına ayrı log ve kayıt dosyası) ve `AGENTS.md` kayıt kuralı. Henüz
  YAZILMADI — resim aşamasından önce sahibine hatırlat, "yap" deyince yazılır. Sahibi ayrıca kendi bilgisayarında
  `git pull` yapar, Codex'in güncel ve girişli olduğuna bakar, açık kalmış eski döngü olmadığından emin olur.
- **Çeviri (cevaplandı, 10 Kasım 2026):** `RAF_KARARLARI.md` §11c Vaka 4'ü çeviri dahil ölçmeyi söylüyordu; sahibinin
  kararı: Vaka 4'ün İngilizcesi **sonra**, İngilizce aşamasında yapılır. Bu ölçüm Türkçe metin + resimle sınırlı.

## 4. Süre ölçümü

**Başladı: 10 Kasım 2026, 12:49 (İstanbul).** Başlangıç = sahibinin "Vaka 4'e başla" dediği an. Saat yalnız sahibinin sözüyle işler ya da durur ("zamanı durdur" /
"tekrar başlat"); aralar ara tablosuna yazılır, aktif süre = toplam − aralar (Vaka 3 §2 ile aynı). **Bu kez saat sonuna kadar
işletilir.** Her adımın satırına iki süre yazılır:
- **sahibi:** sahibinin bilfiil çalıştığı süre (onaylar, oynama, web'de resim üretimi, okuma),
- **makine:** sahibi beklemeden Claude/Codex'in çalıştığı süre (yazım, turlar, Codex üretimi, denetim).
Kesin ayrılamayan yerde tahmin yazılır ve "~" konur.

Resim aşamasında ayrıca: resim sayısı (liste), Codex çağrısı, ret, filtre engeli, web'de üretilen; resim başına ortalama
Codex süresi (1 kol ve 2 kol ayrı, bekleme dahil). Kaynak: `uretim/v4/uretim_kaydi.md` + döngü logu.

| ara | durdu | başladı | süre |
|---|---|---|---|
| 1 | 10 Kas 14:46 | 10 Kas 16:42 | 1 sa 56 dk |
| 2 | 10 Kas 18:04 | | |

| adım (7. parça) | başladı | bitti | sahibi | makine | not |
|---|---|---|---|---|---|
| 1 Form | 10 Kas 12:49 | 10 Kas 13:14 | | | konu soruları sahibine (soru-cevap ~sahibi); form `vaka4_form.md` |
| 2 Onay 1 | 10 Kas 13:14 | 10 Kas 14:12 | ~57 dk (soru-cevap, 10 konu) | ~10 dk (form düzeltmeleri) | dört itiraz (sözlük, Rana, telve, kedi) + altı soru |
| 3–4 Diyalog + veri + künye | 10 Kas 14:12 | 10 Kas 14:23 | 0 | ~11 dk | diyalog 212 satır; veri iskeleti betikle (scratchpad), sahneler `arac_diyalog.js` ile |
| 5 Görselsiz tur + taramalar | 10 Kas 14:23 | 10 Kas 14:40 | 0 | ~17 dk | 6 tur (4 yol, 4 yüzleşme, iki kapanış hâli) hatasız; bulanık tarama 8 düzeltme; sızıntı 40 yol/1319 ekran: 1 aday düzeltildi, sonra temiz |
| 6–7 Onay 2, hikâye donar | 10 Kas 14:40 | | | | |
| 8 Görsel listesi + istemler + kıyafet kartları | | | | | |
| 9–10 Resimler (Codex), denetim, gömme | | | | | |
| 11 Görselli tur | | | | | |
| 12–13 Onay 3, düzeltmeler | | | | | |
| 14 Vaka donar (sızıntı taraması, son turlar) | | | | | |

| resim sayımı | değer |
|---|---|
| listedeki resim | |
| Codex çağrısı | |
| ret | |
| filtre engeli / web'de üretilen | |
| resim başına Codex süresi, 1 kol | |
| resim başına Codex süresi, 2 kol | |
| hız sınırı görüldü mü | |

### Toplam

| bölüm | sahibi | makine | takvim |
|---|---|---|---|
| metin (1–7) | | | |
| resim (8–11) | | | |
| Onay 3 → donma (12–14) | | | |
| **toplam** | | | |
