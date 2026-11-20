# Son adım — ikinci göz denetimi (20 Kasım 2026)

Denetlenen: commit edilmemiş değişiklik (12 belge `arsiv/`'e, yaşayan belgelerde kural metni → kod). Hiçbir dosya değiştirilmedi
(bu rapor dışında), git'e yazılmadı.

## Sonuç: KOŞULLU GEÇER — kural içeriği kaybolmamış; 1 bozulma + 2 kırık atıf düzeltilmeli

| # | bulgu | ağırlık |
|---|---|---|
| 1 | **`kaynak/DEVIR.md` biçimi bozuk:** 50 satıra yeni satır yerine düz metin `\n` yazılmış (243 yer; HEAD'de 0). Paragraflar tek satıra yapışmış, ör. 58. satırdaki `## 🛑 OĞUZ BEY'E …` başlığı bütün paragrafı yutuyor. Satırlar: 58 60 195 197 199 223 234 236 246 284 309 341 342 359 376 485–488 509 528 544 575–577 640 706 803 818 832 840 843 845 846 891 892 936 937 941 947 950 966 988 1016 1024 1037 1136 1249 1285 1291. İçerik duruyor, okunmuyor. Düzeltme: bu dosyada düz `\n` → gerçek satır sonu (HEAD'de hiç düz `\n` yoktu, toplu çevirmek güvenli). Öbür değişen dosyalarda böyle bir şey yok. | düzelt |
| 2 | **`sablon/vakalar/vaka8_baslangic.md:8`** — süren vakanın okuma sırası hâlâ `../2_kural_kitabi.md` diyor (arşivde). `../kurallar/KURALLAR.md` olmalı. | düzelt |
| 3 | **`kaynak/arac_satir_resim.js:131`** çıktı dizgisi `sablon/5_gorsel_sistemi.md → SR-M` (uygulayıcı biliyor, §5.3). Ekrana kırık yol basıyor; `SATIR-11` yazılmalı. | düzelt |
| 4 | `uretim/istem_kontrol.sh` hata iletileri (ISTEM_KALIPLARI §10, BIRIKIM §4/§8.7, D-4) ve `uretim/v6/uret_istem_parti3.py` (eski yol) — bilerek bırakılmış, iş görmeyi bozmuyor. | kalabilir |
| 5 | `KAR-23` "bu tabloya (`uretim/CLAUDE.md`) eklenir" diyor; tablo artık yalnız KAR-23'te. `SUREC-33` görsel kurallar için hâlâ `arsiv/sablon/5_gorsel_sistemi.md → H`'yi gösteriyor. `ARAYUZ-32` "ayrıntı `CLAUDE.md` → Paylaş" diyor; ayrıntı artık kendisinde. | küçük, metin |
| 6 | Kök `CLAUDE.md`'de "Ara dosyalar depoya girmez — KOD-2." satırı Paylaş paragrafının sonunda yetim kalmış (KOD-2 `_gomulu_*.js` ile ilgili). | küçük |
| 7 | `uretim/CLAUDE.md` 41 karar kutusu: "kadın konuk boyu **0.92–1.00**" aralığı KURALLAR'da yok; GOMME-13 yalnız kişi tablosunu veriyor. Yeni konuk boyu seçilirken aralık işe yarar. | küçük kayıp |
| 8 | `kaynak/DEVIR.md` 14 Kasım "ROL DEĞİŞTİ": dört ayrı madde aynı "**Rol ayrımı** — SUREC-4" satırına döndü (dört kez tekrar). İçerik SUREC-4'te var; yalnız "Oğuz Bey'in bilgisayarında (`C:\Yazilim\paravan`)" yolu kayboldu (tarihî, önemsiz). | kozmetik |
| 9 | `uretim/AGENTS.md`: Codex için "Kısaltma, yumuşatma, çeviri, kendi ekleme yok" açık cümlesi çıktı, yerinde "İstem aynen — CODEX-8" var (adım 4'te "AYNEN" duruyor). Codex KURALLAR.md'yi (4.000 satır) açmayabilir; bu tek cümlenin AGENTS.md'de kalması daha güvenli. | öneri |

## 1. Kök `CLAUDE.md` ve `uretim/CLAUDE.md`

Çıkarılan bütün parçalar tek tek karşılaştırıldı. **Kural olup koduna aynı anlamla gitmeyen parça bulunmadı.** Örnekler, gerekçeleri
ve "düşüldü" hikâyeleri de kodun içinde duruyor (KOD-6 boru + `|| echo FAIL`, KOD-11 yedi yedek, KOD-16 `.replace('.jpg','')`,
KOD-24 fren 8→4, KAR-18 `koz_yap` örneği, ARAYUZ-3 `#app` 676 px, ARAYUZ-5 Lâl/Defne, BILGI-8 "Kaya'nın dul eşi", KOD-18 müzik geçmişi,
CODEX-23 `v99` silme, DENETIM-52 rötuş…).

Kural olmayan içerik (komut, yol, tarih, durum, tablo) yaşayan belgede kalmış ya da kodun içinde tam metniyle var: `--cihaz` boyları ve
bayrak listesi (KOD-30), yol adları (KOD-27), zemin renk kodları (DENETIM-43, `#778393` vb. uretim/CLAUDE.md'de de), döngü ayrıntıları
(CODEX-22), kurulum denetimi (CODEX-19), karakter sabitleri tablosu (KAR-23, V6 konukları dahil), büro kapısı (KAR-25), Vaka 3 dersleri
tablosundaki istem cümleleri (ISTEM-22/28/39–44, ISTEM-13 "pala bıyık", ISTEM-19 "kartın çizim tarzını ALMA").

KURALLAR.md'de açılıp okunan kodlar (~110): KOD-1/2/3/5/6/7/8/9/11/13–18/22–25/27–30/35–39/63/64/68/89/90/91, SUREC-1/3/4/7/27/33/34/39,
KAR-1/17/18/23/24/25, YAPI-17/23/25/26/31/36–39, BILGI-8–11, ARAYUZ-1–6/8/10/16/32/36, GOMME-1/2/11/13/16–19, ISTEM-3/6/13/19/29/38/41/52/55,
DENETIM-1/29/35/49/52, SATIR-9/15/28/35/36, SEZON-19, SHORTS-1/2/6/11/26–28, CODEX-1/4/5/8/15/16/19–24, RAF-1/28, TON-9/10.
Hepsi atıf yerindeki anlamı taşıyor; yanlış koda giden atıf bulunmadı. Ayrıca ~90 ayırt edici ifade (ör. "Codex girişli", "0,748",
"sarılan iki kişi", "24 px", "Şeritte dekolte", "Arka plan rengi son referanstaki") KURALLAR.md'de arandı: hepsi var.
Yeni kurallar 00 ve 0b2 (`arac_benzerlik*.js`) kodsuz, metinleriyle yerinde — uygulayıcının dediği gibi.

## 2. `7_uretim_sureci.md`, `6_vaka_formu.md`, `uretim/AGENTS.md`, `kaynak/DEVIR.md` (örnekleme)

- **7. parça:** adım tablosu, tarama soruları, otomatik denetim listesi ve değişiklik tablosu yerinde; soru açıklamaları koda döndü. 20 ayırt
  edici ifade arandı ("çeyrek kala", "dört replik", "109 replik", "64 dk", "GİTMEZ", "Üç kişiyi birden", "K38", "nedimeler", "7 = G35",
  "ifade ızgarası", "ilk iki vakada elle"…): hepsi KURALLAR.md'de. Not: tarama soruları artık yalnız ad + kod; tarayan her soruda kodu açmalı
  (okunurluk bedeli, kayıp değil).
- **6. parça:** form iskeleti ve kontrol kutuları duruyor; örnekler (Selim, Nedim/Moda, Muammer, "borçlu yanlış iz", "15–25") kodlarda var.
  SEZON-19 "en az iki özellik farklı, ayırıcı işaret" ayrıntısını taşıyor.
- **AGENTS.md:** adımlar ve tablo yerinde, kodlar eklendi; CODEX-4/5/8/15/16 aynı anlamda. Yalnız 9. bulgudaki öneri.
- **DEVIR.md:** "tam koda dönen" 48 kayıttan ~30'u açıldı (SINIR-13 Nesrin/sigara durumu dahil, SUREC-4, SUREC-39, ISTEM-56 yosun, KOD-34 `?v=8`,
  KOD-12, KOD-25/26, BILGI-22/23, ARAYUZ-7/37, SEZON-23, KAR-22): içerik eksiksiz. Sorun biçimde (1. bulgu).

## 3. `sablon/3_kanon_kaydi.md`

Kanondaki gerçekler (yaşlar 37/34/16, deniz tutması, bordro/yedi yıl, otopark, garsonluk, 18 yaşında baba, banktaki izleme, Üsküdar, "abla",
Gamze–Haldun–Müzeyyen–Jale ilişkileri, Hilmi Bey'in annesinin oyu, Susam Pastanesi, gece mavisi saten, Nişantaşı, asansörsüz 3. kat, ters yazı,
2009 tacı/14 numara, pırlanta kolye, tel, bileklik "yedi yaşında", yasal durum) **KAR-24, KAR-26…39'da aynı ayrıntıyla var; bilgi kaybı yok.**

**Görüş:** kanon kural değil veridir; yazar artık her satırda kod açmak zorunda ve kanon iki yere bölündü (eski gerçekler KURALLAR.md'de,
19 Kasım sonrası — Nihat Kora, Ozan, tacın V8'deki yeri — 3_kanon_kaydi.md'de metin). KAR-1 yeni kanonu 3_kanon_kaydi.md'ye yazdırıyor, yani
bölünme büyüyecek; KAR-26 hâlâ "avukatın Cengo'yu nereden tanıdığı açılır" derken kanon kaydı "Nihat Kora Cengo'yu tanımaz" diyor (ikisi
ayrı yerde, çelişki göze batmıyor). **Öneri:** kanon tabloları eski metniyle 3_kanon_kaydi.md'ye geri dönsün, KAR-27…38 "kanon:
`sablon/3_kanon_kaydi.md`" diye işaret etsin (kanonun tek yeri orası kalsın).

## 4. Kırık atıf

- 12 belgenin eski yoluna `arsiv/` dışında kalan atıflar: kayıt dosyaları (`HAM.tsv`, `ETIKET.tsv`, `adim2/`, `adim3/` — dosya etiketi, bilerek),
  `kaynak/arac_kural_ham.js` (`A()` ile doğru), `FIKIR_HAVUZU.md` ve `uretim/CLAUDE.md` `[BELGE › bölüm]` kaynak etiketleri (yol değil),
  `uretim/v6/prompts|kayit` istem metinleri (üretim kaydı, bilerek), `yeni/index.html` (derleme yapılmadı). **Gerçek kırık:** 2. ve 3. bulgu
  (+ 4. bulgudaki bilerek bırakılanlar).
- Var olmayan koda atıf: **yok.** Yaşayan 36 dosyada geçen bütün `KONU-N` kodları ve aralıklar (`RAF-1…RAF-113`, `KOD-53…72`, `GOMME-21…27`…)
  KURALLAR.md'de başlık olarak var; KURALLAR.md'nin kendi içindeki atıflar da. "→ ANA" diyen 23 birleşmiş koddan hiçbirine yaşayan belgeden
  atıf yok.

## 5. Program

- `cd kaynak && node dogrulayici.js yeni` → çıkış 0, PASS (1 kabul edilmiş uyarı: V6 giriş 56 satır).
- `node sablon/kurallar/arac_kurallar.js say` → çıkış 0, hata 0 (3.585 ham, 1.725 kural, 687 başlık).
- `node sablon/kurallar/adim3/tasima_say.js` → çıkış 0, hata 0.
- `uretim/istem_kontrol.sh`: v6 + v7'nin 129 istem dosyası hem yeni hem HEAD sürümüyle (aynı `referanslar/` yanında) koşuldu — **129'unda
  çıktı ve çıkış kodu birebir aynı**; v7'nin 27 istemi çıkış 0. Değişiklik yalnız yorum satırında.
