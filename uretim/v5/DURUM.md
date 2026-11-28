# Vaka 5 — resim durumu

> **Üretim Oğuz Bey'in bilgisayarında** (27 Kasım 2026'dan beri). İki bilgisayar aynı vakayı aynı anda üretmez.

**28 Kasım 2026, 16:00 — VAKA 5 GÖMÜLDÜ.** `arac_paket.js --yaz` (PARAVAN_IPLIK=4, 50 figür tek süreçte, ~1,5 saat): 80 görsel. Konuk boyları
GOMME-13'e yazıldı (Oğuz Bey: Muammer 1,00 · Selim 1,05 · Kadir 0,96 · Nedim 0,90 · Derya 0,95 · Efe 0,62 · görevli 1,04 · İsmet 0,95 ·
simitçi 1,04); ölçek `arac_yanyana.js --oran`: muammer 0,65 · selim 0,69 · kadir 0,63 · nedim 0,60 · derya 0,62 · efe 0,40 · ismet 0,62 ·
gorevli 0,67 · simitci 0,77 (başındaki tabla ölçümü şaşırttığı için saç tepesine göre elle). `kart_v5` (G94), `masa_v5` (900×500, y=300),
7 portre (Muammer, Selim, Kadir, Nedim, İsmet, Derya, Efe; görevli ve simitçi künyesiz). Poz kaydı `vaka5_kapi.md → ## poz` (50 figür).
Resim kapısı: 24 K11 (yan yana el binmesi) Oğuz Bey "kalsın"; 8 K12 (Muammer'in öfkeli yüzü dinlerken) → diyalogda 8 satırda dinleme
yüzü `dertli`/`normal` (söz aynı). **`arac_kapi.js V5 resim` GEÇTİ.** Görselli tur (vapur · dogru, --hepsi): JS hatası yok, taşma yok;
adı geçen bayrakları 046/065 (mekân satırı, bilerek boş) ve 136 (gizem_tel, bilinen). Bilerek yer tutucu: `peri.islak.sinirli` (yalnız kare
üstünde geçiyor, figürü görünmüyor).

**28 Kasım 2026, 13:10 — PARTİ 3 TAMAM: 94/94 ONAYLI, el onayı (Oğuz Bey).** 3a G36–G72 (ifade, poz, hâl temelleri G43 islak,
G44 battaniye, G50 simitli), 3b G73–G76 detay, G77–G93 kare (K79–K95), G94 kart afişi. Gece döngüsü 02:09'da kotaya takıldı, 02:47'de
sürdü, 03:03'te bitti. Düzeltmeyle geçenler: G36 (kaş, tarz), G42 (elbise boyu), G59 (Kadir yüzü), G71 (tarz), G73 (ucuz kopya saat),
G75 (aynı çanta, deri astar), G83 (kovalamaca yönü), G94 (kadro yukarıda). Kalsın (Oğuz Bey, `vaka5_kapi.md`): G59, G62, G63 (tarz),
G64, G65, G67, G69, G70. **Oğuz Bey'in iki düzeltmesi:** görevliye armalı kaptan şapkası → G11/G33/G57 ENGELLENDİ, yerlerine G95 (temel),
G96 (kart), G97 (defter); Cengo martı pozu G48 iki düzeltmeyle (çöp adam iskeleti `referanslar/poz_cengo_kanat.jpg`, avuçlar yere dönük).
Sırada `göm`.

**27 Kasım 2026, 23:50 — PARTİ 2 TAMAM: 13/13 ONAYLI, el onayı (Oğuz Bey).** Döngü 23:25–23:41, hepsi ilk üretimde. Temeller:
G23 Peri ipek, G24 Peri ipek_acik, G25 Cengo balikci, G26 Gizem hirka5 (hepsi açık bej). Konuk kartları G27–G35 (benzerlik `--kim`
ile elle: G27 Muammer ~ Cengo 1,69 ve G29 Kadir ~ İsmet 1,41 → kalsın, Oğuz Bey kartları onayladı). Sırada Parti 3: ifadeler (satırların
istediği — SATIR-35), nesneli pozlar, hâller (islak, battaniye, simitli, yesil), detaylar D14–D17, kareler K79–K95, kart afişi.

**27 Kasım 2026, 23:10 — PARTİ 1 TAMAM: 22/22 ONAYLI** (el onayı Oğuz Bey'de, sonra commit). Döngü 21:47–22:57.
Benzerlik aracı yaşlı erkek konuklarda çok takıldı: Selim (Nevzat'a) → kısa kır sakal; Nedim (Şükrü'ye) → tombul, beyaz at kuyruğu,
keçi sakalı; görevli (Muammer'e) → bıyıksız, kalın siyah gözlük. Oğuz Bey "kalsın": G5 Muammer (ŞÜPHELİ Cengo/Nihat), G8 Nedim (KALDI
Rüstem 1,62), G11 görevli (ŞÜPHELİ Haldun) → `vaka5_kapi.md ## kalsın`. Kadir'in G7z'si GEÇTİ (G7 olarak onaylı; görünüş değişmedi).
G22 (kapak) bacada harf gibi leke → Düzeltme 1 ile temiz. Zeminler `zemin.tsv`; 9 konuk havuzda. Seçilen zeminler: G5 bej, G6 gri-mavi,
G7 bej, G8 bej, G9 bej, G10 gri-mavi, G11 gri-mavi, G12 gri-mavi, G13 gri-mavi. El sayfaları `el_p1_1.jpg`, `el_p1_2.jpg`.
Sırada: el onayı → commit → Parti 2 (Peri/Cengo/Gizem temelleri karttan; karede görünen konukların kıyafet kartları).

**27 Kasım 2026, akşam — PARTİ 1 İSTEMLERİ HAZIR (31 dosya, G1–G22, konuklarda zemin denemesi `z`), `istem_kontrol.sh` çıkış 0.**
Öncesinde V5 metni yeni kurallarla denetlendi ve düzeltildi (benzerlik bütün vakalarla, Gizem `hirka5`, Peri kırmızı stiletto,
yeni büro A72/A73; görevli ve simitçi `adaylar.tsv`'ye girdi). Liste `LISTE.md`. Sırada: Oğuz Bey listeyi onaylar → döngü
(`KOL=2 ./dongu.sh 5`, ~31 resim, ~1 saat).
