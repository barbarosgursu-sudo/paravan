# Vaka 5 — kapı kaydı

Kapı aracı (`kaynak/arac_kapi.js`) bu dosyayı okur. Vaka başına bir kez yazılır; figür ya da metin değişince güncellenir.
Kurallar ve gerekçeleri `arac_kapi.js`'in başında. Vaka 5 kapıya 23 Kasım 2026'da girdi (elden geçirme, Barbaros).

## yollar

Kapının oynattığı yollar (her şüpheli ve her ipucu yolu en az bir kez): `- <karar> <ipucu yolu> <suçlama>`,
`arac_yeni_tur.js` argümanları. 23 Kasım 2026'da `arac_kapi.js`'teki tablodan buraya taşındı.

- 0 vapur dogru
- 2 iskele zayif
- 0 usta kadir
- 3 cozmez5 nedim

## eş söz

Anlatıda kişiyi adı yerine anan sözler (adın kendisi kanondan otomatik). Yalnız kesin olanlar; her çekim ayrı yazılır.

- selim: tamirci, tamircisi, tamircinin, tamirciyi, tamirciye
- kadir: çaycı, çaycının, çaycıyı, çaycıya
- nedim: koleksiyoncu, koleksiyoncunun
- efe: çocuk, çocuğa, çocuğun, çocuğu
- ismet: usta, ustası, ustanın, ustaya
- gorevli: görevli, görevlinin, görevliye
- simitci: simitçi, simitçinin, simitçiye, simitçiyle
- derya: kadın, kadının, kadına

## poz

Her figür pozu için: **hedef**, **bakış** (`karşı` / `yan` / `aşağı`), **konuşur**, **görünüş** (biçim `vaka6_kapi.md`).
28 Kasım 2026'da figürlere tek tek bakılarak yazıldı (Claude, Oğuz Bey'in bilgisayarı); sahibi düzeltebilir.

| anahtar | hedef | bakış | konuşur | görünüş |
|---|---|---|---|---|
| cengo.balikci.gulen | — | karşı | hayır | balıkçı yaka, kasket |
| cengo.balikci.kas | — | karşı | hayır | balıkçı yaka, kasket |
| cengo.balikci.kollar | — | karşı | evet | balıkçı yaka, kasket, kollar kanat gibi açık, bağırıyor |
| cengo.balikci.normal | — | karşı | hayır | balıkçı yaka, kasket, eli cepte |
| cengo.balikci.simit | — | karşı | hayır | balıkçı yaka, kasket, elde simit |
| cengo.simitli.gulen | — | karşı | hayır | balıkçı yaka, kasket, simitli kol ve kasket |
| cengo.simitli.kas | — | karşı | hayır | balıkçı yaka, simitli kol ve kasket |
| cengo.simitli.normal | — | karşı | hayır | balıkçı yaka, simitli kol ve kasket |
| cengo.simitli.yumusak | — | karşı | hayır | balıkçı yaka, simitli kol ve kasket |
| derya.normal | — | karşı | hayır | bere, kırmızı-lacivert yağmurluk |
| efe.gulen | — | karşı | evet | sarı yağmurluk, el çırpıyor, gülüyor |
| efe.normal | — | karşı | hayır | sarı yağmurluk |
| efe.simit | — | karşı | hayır | sarı yağmurluk, simit atıyor, poşet |
| gizem.hirka5 | — | karşı | hayır | kiremit hırka, kollar kavuşuk |
| gizem.hirka5_isveli | — | karşı | hayır | kiremit hırka, göz kırpıyor |
| gorevli.defter | — | karşı | hayır | kaptan şapkası, lacivert yelek, düdük, elde defter |
| gorevli.normal | — | karşı | hayır | kaptan şapkası, lacivert yelek, düdük, kollar kavuşuk |
| ismet.dikiyor | — | aşağı | hayır | deri önlük, gözlük, kayış dikiyor |
| ismet.normal | — | karşı | hayır | deri önlük, gözlük burnun ucunda |
| kadir.alinmis | — | karşı | evet | beyaz çaycı ceketi, avuçlar açık |
| kadir.gulen | — | karşı | hayır | beyaz çaycı ceketi, eli ensede |
| kadir.normal | — | karşı | hayır | beyaz çaycı ceketi, eller belde |
| kadir.tepsi | — | karşı | hayır | beyaz çaycı ceketi, elde çay tepsisi |
| muammer.dertli | — | karşı | hayır | bordo kadife ceket, el göğüste, kol saati |
| muammer.kacamak | — | karşı | hayır | bordo kadife ceket, bıyığını düzeltiyor |
| muammer.kutu | — | karşı | hayır | bordo kadife ceket, elde kadife kutu |
| muammer.normal | — | karşı | hayır | bordo kadife ceket, saat zinciri |
| muammer.ofkeli | — | karşı | evet | bordo kadife ceket, yumruk, bağırıyor |
| nedim.alayci | — | karşı | hayır | gri blazer, fular, baston |
| nedim.baston | — | karşı | hayır | gri blazer, fular, baston uzatılmış |
| nedim.normal | — | karşı | hayır | gri blazer, fular, baston |
| peri.battaniye.kas | — | karşı | hayır | ıslak, sırılsıklam, battaniye, yosunlu |
| peri.battaniye.normal | — | karşı | hayır | ıslak, sırılsıklam, battaniye, yosunlu |
| peri.ipek.canta | — | karşı | hayır | ipek elbise, krem hırka, elde çanta |
| peri.ipek.kas | — | karşı | hayır | ipek elbise, krem hırka |
| peri.ipek.merakli | — | karşı | hayır | ipek elbise, krem hırka |
| peri.ipek.normal | — | karşı | hayır | ipek elbise, krem hırka |
| peri.ipek.utanmis | — | karşı | hayır | ipek elbise, krem hırka |
| peri.ipek.yesil | — | karşı | hayır | ipek elbise, krem hırka, yeşil yüz, el midede |
| peri.ipek_acik.kas | — | karşı | hayır | ipek elbise, hırkasız |
| peri.ipek_acik.merakli | — | karşı | hayır | ipek elbise, hırkasız |
| peri.ipek_acik.normal | — | karşı | hayır | ipek elbise, hırkasız |
| peri.islak.kas | — | karşı | hayır | ıslak, sırılsıklam, yosunlu |
| selim.gergin | — | karşı | hayır | pardösü, el göğüste, terli |
| selim.itiraf | — | karşı | hayır | pardösü, gözler nemli |
| selim.normal | — | karşı | hayır | pardösü, kahverengi hırka |
| selim.sandalye | — | aşağı | hayır | kahverengi hırka, sandalye bacağı, tutkal |
| simitci.normal | — | karşı | hayır | beyaz önlük, başta simit tablası |
| simitci.ofkeli | — | karşı | evet | beyaz önlük, başta simit tablası, bağırıyor |
| simitci.tabla | — | karşı | hayır | beyaz önlük, başta simit tablası, simit uzatıyor |

## kalsın

Sahibinin "kalsın" dediği bulgular (`- K<n> | <satırın başı>`). Bir daha sorulmaz.
- G5 | benzerlik | temel figür; iki üretimde ŞÜPHELİ (Cengo 1,54 / Nihat 1,47, kalma 1,55); gözle benzemiyor — Oğuz Bey "kalsın" (27 Kasım 2026)
- G8 | benzerlik | temel figür (at kuyruklu); dört üretimde KALDI (kısa saçlı Şükrü 1,99; at kuyruklu Rüstem 1,62–1,66); gözle ayrı (at kuyruğu, keçi sakalı, baston) — Oğuz Bey "kalsın" (27 Kasım 2026)
- G11 | benzerlik | temel figür (bıyıksız, gözlüklü; gri-mavi); bıyıklı hâli Muammer'e KALDI, bu hâli iki kez ŞÜPHELİ (Haldun 1,42–1,47); gözle ayrı — Oğuz Bey "kalsın" (27 Kasım 2026)
- G6 | benzerlik | temel figür (kır sakallı); döngüde GEÇTİ (Rıza 1,36), commit kapısında sınırda ŞÜPHELİ (Rıza 1,41); gözle ayrı — Oğuz Bey "kalsın" (27 Kasım 2026)
- G27 | benzerlik | Muammer'in kıyafet kartı (oyuna gömülmez); --kim ile KALDI Cengo 1,69 — temelin (G5) kalsın'ı; Oğuz Bey kartları onayladı (27 Kasım 2026)
- G29 | benzerlik | Kadir'in kıyafet kartı (oyuna gömülmez); --kim ile ŞÜPHELİ İsmet 1,41; gözle ayrı — Oğuz Bey kartları onayladı (27 Kasım 2026)
- G59 | benzerlik | Kadir alınmış ifadesi; iki üretimde KALDI/ŞÜPHELİ (İsmet 1,59 / 1,55); onaylı Kadir'in yüzü, gözle ayrı — Oğuz Bey "kalsın" (28 Kasım 2026)
- G62 | benzerlik | Muammer dertli; ŞÜPHELİ Nevzat 1,52; onaylı Muammer, gözle ayrı — Oğuz Bey "kalsın" (28 Kasım 2026)
- G64 | benzerlik | Muammer kutulu; ŞÜPHELİ Fikret 1,42 — Oğuz Bey "kalsın" (28 Kasım 2026)
- G65 | benzerlik | Muammer öfkeli; iki üretimde KALDI Fikret 1,85 / 1,73 (bağıran yüz); gözle Muammer — Oğuz Bey "kalsın" (28 Kasım 2026)
- G67 | benzerlik | Nedim bastonla gösteriyor; ŞÜPHELİ Rüstem 1,41 — Oğuz Bey "kalsın" (28 Kasım 2026)
- G69 | benzerlik | Selim itiraf; ŞÜPHELİ Şükrü 1,44 — Oğuz Bey "kalsın" (28 Kasım 2026)
- G70 | benzerlik | Selim sandalye; ŞÜPHELİ Rıza 1,51 — Oğuz Bey "kalsın" (28 Kasım 2026)
- G63 | tarz | Muammer kaçamak; üç üretimde ŞÜPHELİ (+0,009 / +0,005 / +0,019; sınır +0,020); gözle doğru — Oğuz Bey "kalsın" (28 Kasım 2026)
- K11 | Cengo! Gel bakalım, çayın hazır. Hanımef
- K11 | Bana çay değil, kara lazım.
- K11 | Kadir, salı günkü çay kazasını soracağız
- K11 | Kaza değil, dalga! Bir tanker geçti, büt
- K11 | Koltuğu sildim, sonra bez almaya tezgâha
- K11 | Sen de unuttun.
- K11 | Unuttum. Size söyleyene kadar.
- K11 | İç şunu, hanımefendi. Rengin yerine gels
- K11 | Karada beni deniz tutmuyor, Kadir Bey.
- K11 | Otuz yıl, Peri. Bir saat için. Kazımayı 
- K11 | Islaksın. Giy bunu.
- K11 | Bu arada beni deniz tutmadı.
- K11 | Bu çanta sizin işiniz mi? İçinde bir dam
- K11 | (damgaya bakıp) Benim işim. İsmet. Elli 
- K11 | Bu çantadan kaç tane yaptın, usta?
- K11 | Bu modelden mi? Üç tane. İlkini yıllar ö
- K11 | Geçen ay tamircisi Selim Bey geldi, "dük
- K11 | İki hafta sonra Nedim Bey geldi. Muammer
- K11 | Şu cüzdan kaç?
- K11 | Senin için iki bin.
- K11 | Bin lira olmaz mı, usta?
- K11 | İki bin beş yüz. Pazarlık ettikçe artar.
- K11 | Ayağımın altı ilk kez sallanmıyor. Burad
- K11 | Kadir. Çayı sen döktün, çantanın başında
- K4 | Sabah. Büro. Peri masada
