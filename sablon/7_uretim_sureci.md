# 7. ÜRETİM SÜRECİ

Bir vaka formdan oynanır hâle bu sırayla gelir — SUREC-10 (adım atlanmaz).

> **Kurallar `sablon/kurallar/KURALLAR.md`'de; kodu geçen kuralı oradan oku.** Onaylı kararlar (17 + 19 Kasım 2026; 41 çelişki cevabı ve Cengo'nun saçı) oraya işlendi; kısa liste `uretim/CLAUDE.md` en üstünde.

## Adımlar

| # | adım | kim | çıkış şartı |
|---|---|---|---|
| 1 | **Form** doldurulur (`sablon/6_vaka_formu.md`) — SUREC-11 | ben | formun kontrol listesi tamam |
| 2 | **Onay 1:** form — SUREC-11 | sahibi | "onay" |
| 3 | **Diyalog** yazılır (`vakalar/vakaN_diyalog.md`) — SUREC-12; satır–resim: `kime`/`gir` (SATIR-3, SATIR-5), ifade (SATIR-15), sahne notu (TON-8) | ben | otomatik denetimden geçer |
| 4 | **Veri** hazırlanır — SUREC-13: yapı elle; sahne ve karar metni `arac_diyalog.js` ile; **künye** (`yeni/kisiler.json`) | ben | otomatik denetimden geçer; künye aracı temiz |
| 5 | **Görselsiz oyun turu** — SUREC-14 (yer tutucu KOD-48); ardından **bulanık replik taraması** (SUREC-15), **sızıntı taraması** (SUREC-27) ve **erken satır–resim taraması** (SATIR-12) | ben | hata yok; üç tarama bitti, düzeltmeler veride |
| 6 | **Onay 2 — görselsiz test** — SUREC-16 (okuyan önce `3_kanon_kaydi.md`'yi okur) | sahibi | notlar tek listede |
| 7 | **Hikâye düzeltmeleri** (SUREC-28) ve tekrar görselsiz test, sahibi "tamam" diyene kadar — SUREC-17 | ben + sahibi | **hikâye donar** |
| 8 | **Görsel listesi ve promptlar** + iş sayfası — SUREC-19, SUREC-20; kart afişi (GOMME-21…27; prompt `sablon/kart_sayfa/uret.py`); istemlerden önce kıyafet hâli tablosu (SATIR-7), ifade/nesne ayrımı (SATIR-9), `arac_satir_resim.js` bayrakları kapalı (SATIR-10); ilk figürden önce kıyafet kartları (SATIR-8, ISTEM-17) | ben | bayrak kalmadı; kıyafet kartları onaylı |
| 9 | **Görseller** üretilir — SUREC-21 | sahibi | — |
| 10 | **Kontrol, kesim, yerleştirme** — SUREC-21 (DENETIM-*, GOMME-*) | ben | her görsel gömülü |
| 11 | **Görselli oyun turu** — SUREC-24, SATIR-31 | ben | hata yok |
| 12 | **Onay 3 — görselli test** — SUREC-25 | sahibi | notlar tek listede |
| 13 | **Görsel düzeltmeleri** — SUREC-25 | ben + sahibi | — |
| 14 | **Vaka donar** — SUREC-26 (sızıntı taraması bir kez daha) | ben + sahibi | tarama temiz |

- **Her adım hatırlatma listesiyle kapanır** — SUREC-43. Benim adımlarımda listeye ben bakarım: adım başında
  `node sablon/kurallar/arac_uygulayici.js kayit <vaka> <adım>`, her maddeyi `vakalar/vaka<N>_hatirlatma.md`'de işaretlerim
  (`[u]` `[X]` `[?]` `[-]`). Sahibine yalnız UYMUYOR / EMİN DEĞİLİM gider, onay anında: `… bitti <vaka> onay1|onay2|don|resim|onay3|son`
  (çıkış 1 = bitmedi, onay istenmez). Sahibinin adımları (2, 6, 12) olduğu gibi gösterilir. Programın ölçtüğü kurallar listede
  yok — onları program durdurur.
- **Görseller hikâye donmadan üretilmez** — SUREC-18.
- Görselli testte hikâye değişmez — SUREC-25.
- Değişiklikler `main`'e — SUREC-7.
- **Süre ölçümü** — SUREC-30 (örnek: `vakalar/vaka2_baslangic.md` §1).
- **Sızıntı taraması (22 Ekim 2026, sahibinin kararı — her vakadan sonra)** — SUREC-27: `cd kaynak && node build_html.js yeni &&
  node arac_sizinti_tur.js VN`; sonra `YENI_UI/sizinti_okuma.txt`'yi ELLE oku (KOD-90).
- **Vaka 1 dersleri** (zamanı en çok yiyen görsel düzeltmeleri ve önlemleri): `vakalar/vaka2_baslangic.md` §2–4.

## Hızlandırma kuralları (10 Ekim 2026, Vaka 2 ölçümünden)

Vaka 2'de metin tarafı 2 sa 52 dk sürdü; bunun 1 sa 56 dk'sı Onay 2'ydi ve 22 notun
**hepsi bulanık replikti** (hikâye hiç değişmedi). Görselde zaman, tek tek gidip gelmeye gidiyor.

**Bulanık replik taraması (adım 5'in sonu, Onay 2'den ÖNCE)** — SUREC-15. Diyaloğu oyuncunun gördüğü sırayla okurum
(`arac_okuma.js` ya da görselsiz turun ekranları) ve her satıra sorarım (sorular TON-14):
- **Kime?** (TON-14)
- **Akış: kim nerede, ne sırayla?** (SATIR-19) Sahne başına akış notu: `⚙ akış: kim nerede, kim ne zaman giriyor, ne ilk kez görülüyor`.
- **Neyi?** (TON-14)
- **Nereden biliyor?** (TON-14; sahne notuna da — TON-8)
- **Espri tutuyor mu?** (TON-15)
- **Sıra** (TON-14)
- **Saat "kala" ile mi söyleniyor?** (TON-12)
- **Tekrar eden şaka büyüyor mu?** (TON-16)
- **Ne istiyor?** (TON-14)
- **Giriş ilk okumada anlaşılıyor mu?** (TON-10)
- **Fazla kısa mı?** (TON-9)
- **Bilmediğini biliyor mu?** (YAPI-12)
- **Neden kaçıyor?** (YAPI-17)

Düzeltme yalnız netleştirmedir; bulunanlar sahibine tek liste — SUREC-15 (kanona ekleme KAR-1).

**Temel görsel önce, tek başına** — SUREC-22. Sahibi "Sohbet N'e başlıyorum" / "bitti" der, saatler süre tablosuna yazılır.

**Satır–resim uyumu zorunlu** — SATIR-28; araç `kaynak/arac_satir_resim.js`:
- **Hikâye donmadan önce** (adım 5) — SATIR-12: görselsiz tur bütün yollarda `--hepsi` ile →
  `node arac_satir_resim.js <dokum…> --vaka V<N>`; DURUŞ / İLK GÖRME bayrakları ve `satir/adi_gecen_yok.txt` burada kapanır.
- **İstem yazarken** — ISTEM-51, SATIR-10, SATIR-15, SATIR-17, SATIR-8: görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`,
  her yolun `satir/`'ını kopyala) → `node arac_satir_resim.js <dokum…> --vaka V<N>`.
- **Denetimde** — DENETIM-30.
- **Gömmeden sonra** — SATIR-30.

**Görsel–metin uyum denetimi (adım 11, Onay 3'ten ÖNCE)** — SATIR-31. Görselli turu bütün yollarda koşarım
(`arac_yeni_tur.js`) ve her ekranı altındaki metinle yan yana okurum:
- **Kim var?** (SATIR-20, SATIR-31; turda `arac_yeni_tur.js … --hepsi` → `satir/adi_gecen_yok.txt`)
- **Kime konuşuyor?** (SATIR-3, SATIR-6, SATIR-31)
- **Saklanan kişi** (SATIR-22)
- **Yüz satıra uyuyor mu?** (SATIR-15, SATIR-16)
- **Anılan şey görünüyor mu?** (SATIR-1)
- **Süreklilik** (SATIR-7)
- **Yer ve zaman** (SATIR-32)
- **Görünürlük** (SATIR-33)
- **Nurcan** (BILGI-17)
- Teknik: saç kenarı, boy, kesim kalıntısı (GOMME-7).
Bulunanlar sahibine tek liste — SUREC-24.

**Toplu görsel işleme (adım 9–10)** — GOMME-6: `cd kaynak && node arac_paket.js <klasör> --vaka N` (önizler; temas sayfası
`YENI_UI/paket_<klasör>.png`), sonra aynı komut `--yaz`; `--sira G1-G13`. Ekran görüntüsü `arac_yeni_tur.js`.

**İş sayfası (11 Ekim 2026, sahibinin kararı)** — SUREC-20.

Kapsam dışı bırakılanlar — SUREC-31.

## Otomatik denetimler

Geçmeyen vaka bir sonraki adıma geçmez — SUREC-10.

**Giriş (K17)**
- Arka plan büro (KOD-68).
- En az 15 satır (KOD-68, TON-10).
- Formdaki şüphelinin adı metinde geçiyor (KOD-68).
- Metindeki ücret formdaki ücretle aynı (KOD-68).
- Bir ipucunun vereceği bilgi metinde geçmiyor (KOD-68).

**Hikâye**
- 3 şüpheli; her yanlış şüpheliyi aklayan kanıt (KOD-73).
- Suçluyu kanıtlayan en az 2 ipucu yolu (KOD-70).
- Hiçbir doğru kanıt çifti tek ipucundan çıkmıyor (KOD-70, BILGI-4).
- Her ipucu yolunda "Kim yaptı?" çalışıyor (KOD-73).
- Defter cümleleri suçluyu söylemiyor (KOD-74).
- Hak edilmemiş bilgi sızmıyor (KOD-74).
- İpucu adındaki özel isimler (KOD-69).

**Karar ve para**
- En az bir dürüst karar her yolda açık (KOD-67).
- Kararı sahnedeki biri soruyor; seçenek cümlesi ve sahnede sonuç (KOD-75, YAPI-23, YAPI-24).
- Her doğru kanıt için Cengo'nun satırı (KOD-75, YAPI-25).
- Cengo satırları etiketli (KOD-75, KOD-35, SATIR-36): `**CENGO [ifade]:** … {yuz: peri.x}` / `**olgu [ifade]:** … {yuz: peri.x}`
  (`arac_kapi.js … resim` K2/K8/K6).
- Anı özeti var (KOD-76, BILGI-7): `## ani`; `test_yeni_arayuz.js`.
- Kasa yok, tohum yok (KOD-77, YAPI-31).
- Sigara yok (KOD-78, SINIR-13).
- Her tutar fiyat tablosunda (KOD-77).

**Görsel**
- Her satırın ifadesi sözlükte ve görseli var (KOD-66).
- Ekranda aynı figür iki kez yok (KOD-79).
- Vakadan vakaya geçiş (KOD-80).
- Anılan nesne/hareket o satırda görünüyor (KOD-79).
- Her görsel gömülü, adı doğru (KOD-16).

**Elle bakılanlar** — SUREC-16 (makine yapamaz; Onay 2'de sahibi bakar).

## Değişiklik kuralı

Değişiklik doğru yerden başlar — SUREC-28:

| ne değişiyor | nereden başlar | sonra |
|---|---|---|
| Bir replik, bir ifade | diyalog | veri → denetim |
| Bir görsel | görsel | kontrol listesi → yerleştirme |
| Bir olay, şüpheli, ipucu, karar | **form** (Onay 1'e döner) | diyalog → veri → denetim → etkilenen görseller |
| Bir kural | **`sablon/kurallar/KURALLAR.md`** (sahibinin onayı — SUREC-2) | etkilenen vakalar yeniden denetlenir |

- Veri ya da görsel formu değiştirmeden hikâyeyi değiştiremez (SUREC-28).
- Oyun testi notları önce bu tabloya göre sınıflanır (SUREC-28).

## Süre

| adım | süre |
|---|---|
| Form + onay | yarım gün |
| Diyalog + veri + denetim | 1 gün |
| Görselsiz test + hikâye düzeltmeleri | yarım–1 gün |
| Görseller (25–35 adet) | 2–3 gün (sahibinin üretim hızına bağlı) |
| Görselli test + düzeltme | yarım gün |
| **Toplam** | **5–6 gün** |

**Vaka 1'e özel:** motor işleri (Kim yaptı? ekranı, yüzleşme, para, kapanıştaki iki hâl, yeni denetimler) bir kez yapılır: **+2 gün.**
