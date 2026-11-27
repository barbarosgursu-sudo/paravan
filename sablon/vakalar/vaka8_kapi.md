# Vaka 8 — kapı kaydı

Kapı aracı (`kaynak/arac_kapi.js`) bu dosyayı okur. Vaka başına bir kez yazılır; figür ya da metin değişince güncellenir.
Kurallar ve gerekçeleri `arac_kapi.js`'in başında (sahibiyle 14 Kasım 2026'da kararlaştırıldı).

## yollar

Kapının oynattığı yollar (her şüpheli ve her ipucu yolu en az bir kez): `- <karar> <ipucu yolu> <suçlama>`,
`arac_yeni_tur.js` argümanları. 23 Kasım 2026'da `arac_kapi.js`'teki tablodan buraya taşındı.

- 0 sifre dogru
- 1 studyo dogru
- 2 iptal zayif
- 3 cozmez8 nevzat
- 0 cozmez8 fikret

## eş söz

Anlatıda kişiyi adı yerine anan sözler (adın kendisi kanondan otomatik). Yalnız kesin olanlar; her çekim ayrı yazılır.

- bahar: aşçı, aşçının
- nevzat: muhasebeci, muhasebecisi, muhasebecim
- fikret: eski ortağı, eski ortağım
- tarkan: avukatı, avukatım, avukatınız
- pinar: yapım asistanı
- emir: şoför görünen

## poz

Her figür pozu için: **hedef**, **bakış** (`karşı` / `yan` / `aşağı`), **konuşur**, **görünüş** — tanımlar `vaka7_kapi.md → ## poz`. 27 Kasım 2026'da figürlere tek tek bakılarak yazıldı (Claude, Oğuz Bey'in bilgisayarı); sahibi düzeltebilir.

| anahtar | hedef | bakış | konuşur | görünüş |
|---|---|---|---|---|
| bahar.endiseli | — | karşı | hayır | çiçekli bluz, halka küpe, eller göğüste |
| bahar.gulen | — | karşı | hayır | çiçekli bluz, halka küpe |
| bahar.normal | — | karşı | evet | çiçekli bluz, halka küpe |
| bahar.sasirmis | — | karşı | hayır | çiçekli bluz, halka küpe, eller açık |
| bahar.sert | — | karşı | hayır | çiçekli bluz, eller belde |
| cengo.ceket8.gulen | — | karşı | hayır | kahverengi ceket |
| cengo.ceket8.kas | — | karşı | hayır | kahverengi ceket |
| cengo.ceket8.normal | — | karşı | hayır | kahverengi ceket |
| cengo.ceket8.sinirli | — | karşı | hayır | kahverengi ceket |
| cengo.ceket8.yumusak | — | karşı | hayır | kahverengi ceket |
| cengo.sofor.gulen | — | karşı | hayır | şoför üniforması, kasket, eli kasketinde |
| cengo.sofor.kas | — | karşı | hayır | şoför üniforması, kasket |
| cengo.sofor.normal | — | karşı | hayır | şoför üniforması, kasket, eli kasketinde |
| cengo.sofor.yumusak | — | karşı | hayır | şoför üniforması, kasket |
| cengo.sofor_dugmesiz.kas | — | karşı | hayır | şoför ceketi düğmesiz, kasket |
| cengo.sofor_dugmesiz.yumusak | — | karşı | hayır | şoför ceketi düğmesiz, kasket |
| emir.gulen | — | karşı | hayır | turuncu yelek, eli başında |
| emir.normal | — | karşı | hayır | turuncu yelek |
| emir.sasirmis | — | karşı | hayır | turuncu yelek, eller açık |
| fikret.guler | — | karşı | hayır | lekeli aşçı ceketi, at kuyruğu |
| fikret.huysuz | — | karşı | hayır | lekeli aşçı ceketi, kollar kavuşmuş |
| fikret.huzunlu | — | aşağı | hayır | lekeli aşçı ceketi |
| fikret.ofkeli | — | karşı | evet | lekeli aşçı ceketi, yumruk |
| gizem.kazak8 | — | karşı | hayır | koyu yeşil kazak |
| nevzat.gergin | — | karşı | hayır | gözlük boynunda, kolluk, kulakta kalem |
| nevzat.normal | — | karşı | hayır | gözlük boynunda, kolluk, kulakta kalem |
| nevzat.utangac | — | aşağı | hayır | gözlük boynunda, kolluk, kızarmış |
| nihat.normal | — | karşı | hayır | beyaz takım, kır saç |
| peri.kilik.kas | — | karşı | hayır | beyaz önlük, kep, siyah gözlük |
| peri.kilik.merakli | — | karşı | hayır | beyaz önlük, kep, siyah gözlük |
| peri.kilik.normal | — | karşı | hayır | beyaz önlük, kep, siyah gözlük |
| peri.kilik.utanmis | — | aşağı | hayır | beyaz önlük, kep, siyah gözlük |
| peri.kilik.yumusak | — | karşı | hayır | beyaz önlük, kep, siyah gözlük |
| peri.manto8.kas | — | karşı | hayır | kırmızı manto, kuşak çözük |
| peri.manto8.merakli | — | karşı | hayır | kırmızı manto, kuşak çözük |
| peri.manto8.normal | — | karşı | hayır | kırmızı manto, kuşak çözük |
| peri.manto8.sevincli | — | karşı | hayır | kırmızı manto, kuşak çözük |
| peri.manto8.sinirli | — | karşı | hayır | kırmızı manto, kuşak çözük, eller belde |
| peri.manto8_son.kas | — | karşı | hayır | kırmızı manto omuzdan sıyrılmış |
| peri.manto8_son.normal | — | karşı | hayır | kırmızı manto omuzdan sıyrılmış |
| peri.manto8_son.sinirli | — | karşı | hayır | kırmızı manto omuzdan sıyrılmış |
| peri.manto8_son.utanmis | — | aşağı | hayır | kırmızı manto omuzdan sıyrılmış |
| peri.manto8_son.yumusak | — | karşı | hayır | kırmızı manto omuzdan sıyrılmış |
| peri.onluk8.kas | — | karşı | hayır | beyaz önlük, kepsiz, gözlüksüz |
| peri.onluk8.normal | — | karşı | hayır | beyaz önlük, kepsiz, gözlüksüz |
| peri.onluk8.sinirli | — | karşı | hayır | beyaz önlük, eller belde |
| peri.onluk8.utanmis | — | aşağı | hayır | beyaz önlük, kepsiz, gözlüksüz |
| pinar.defter | — | karşı | hayır | siyah tişört, kulaklık, pano |
| pinar.normal | — | karşı | hayır | siyah tişört, kulaklık |
| pinar.telasli | — | karşı | hayır | siyah tişört, eli kulaklıkta |
| tarkan.gulen | — | karşı | hayır | kel, siyah takım, siyah gömlek |
| tarkan.itiraf | — | aşağı | hayır | kel, siyah takım, siyah gömlek |
| tarkan.normal | — | karşı | hayır | kel, siyah takım, siyah gömlek |
| tarkan.panik | — | karşı | hayır | kel, siyah takım, siyah gömlek |
| yusuf.gulen | — | karşı | hayır | kasket, yuvarlak gözlük, hırka |
| yusuf.normal | — | karşı | hayır | kasket, yuvarlak gözlük, hırka |

## kalsın

Sahibinin "kalsın" dediği bulgular (`- K<n> | <satırın başı>`). Bir daha sorulmaz.
- G2 | tarz | kıyafet kartı (oyuna gömülmez); üç üretimde tarz −0,024 / −0,021 / −0,012, yüz son üretimde GEÇTİ 0,856 — Oğuz Bey "kalsın" (25 Kasım 2026)
- G10 | benzerlik | Nihat ~ Cengo 1,78 / ~ Tarkan 1,79 (iki üretim). Gözle ayrışıyor: düz geriye yatırılmış gümüş saç, beyaz keten takım, yaşlı. Oğuz Bey: "diğer karakterler iyi", 25 Kasım 2026.
- G11 | tarz | Emir +0,013 (şüphe sınırı 0,02); benzerlik GEÇTİ (Sedat 1,22). Oğuz Bey, 25 Kasım 2026.
- G12 | tarz | Pınar +0,003 (şüphe sınırı 0,02); benzerlik GEÇTİ. Oğuz Bey, 25 Kasım 2026.
- G13 | benzerlik | Yusuf ~ Tahsin 1,81. Gözle ayrışıyor: çok kambur, ufak, kasketli, büyüteç gözlüklü, yeşil hırkalı. Oğuz Bey, 25 Kasım 2026.
- G7 | benzerlik | Tarkan (kel, sarı kaş, siyah takım) ~ Nihat 1,47 / Cengo 1,44 ŞÜPHELİ. Gözle ayrışıyor. Oğuz Bey, 25 Kasım 2026.
- G8 | benzerlik | Nevzat ~ Haldun 1,55 / 1,44 ŞÜPHELİ. Gözle ayrışıyor (kabarık kumral saç, kolluk). Oğuz Bey, 25 Kasım 2026.
- G9 | benzerlik | Fikret (siyah at kuyruğu, keçi sakalı — Oğuz Bey'in tarifi) ~ Kenan 1,64. Oğuz Bey "onaylı", 25 Kasım 2026.
- G34 | benzerlik | Fikret'in kıyafet kartı ~ Kenan 1,44 ŞÜPHELİ — temel G9 için Oğuz Bey'in "onaylı"sı (25 Kasım 2026) karta da geçer.
- G35 | benzerlik | Nihat'ın kıyafet kartı ~ Cengo 1,90 — temel G10 için Oğuz Bey'in "diğer karakterler iyi"si (25 Kasım 2026) karta da geçer.
- G42 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G57 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G62 | yüz yönü (gözler sağa) | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G63 | yüz yönü (gözler sağa) | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G65 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G67 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G69 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G71 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G72 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G72 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G73 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G74 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G75 | yüz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G76 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G77 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G78 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G79 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G80 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G81 | benzerlik | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G86 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- G87 | tarz | Parti 3; gözle doğru, araçta sınırda (konuklarda temeldeki kalsın'ın devamı). Oğuz Bey "hepsi kalsın", 26 Kasım 2026.
- K11 | Kuşağın çözük, Peri.
- K11 | Biliyorum. Bugün bağlamak istemedim.
- K11 | Bahar Peri'yi görünce olduğu yerde kalıyor.
- K11 | Siz… kozmetik reklamlarındaki kraliçe! Perihan!
- K11 | Sonunda biri tanıdı, Cengo.
- K11 | Ödeme talimatlarında benim imzam var. Ben atmadım.
- K11 | Avukatınız kim?
- K11 | Ücretimiz elli bin lira, Bahar Hanım. İş bitince ö
- K11 | Vekâlet. Olmayan bir firma. Bordroda kimsenin tanı
- K11 | Bunu bana yaptılar, Cengo. Adım adım, aynısını.
- K11 | Bize. Bordrodaki ben değil miydim?
- K11 | Bu Tarkan Bey benim avukatım. Nihat Kora. Adını de
- K11 | Seni dolandıran adam, benim de yedi yıllık patronu
- K11 | Ya beni? Beni görürse tanır.
- K11 | Smokini kiraladığım dükkânda şoför üniforması da v
- K11 | Teknede çok para var, Perihan. Kaybettiklerini kar
- K11 | Paranı mühürlediler, adamı götürdüler. Ben ikincis
- K11 | Ofise ilk bu mantoyla gelmiştin. Kuşağı bağlıydı a
- K11 | O sabah her şey bağlıydı, Cengo. Sonra hepsi çözül
- K11 | Alacağım hâlâ duruyor, haberin olsun. Patron bulun
- K11 | Ona kendi oyununu oynadın. Polise yalanı ben de sö
- K11 | Fikret Usta vekâleti bir yıl önce iptal ettirmişti
- K11 | Bir gence şans verdin, Peri. Bana da biri vermişti
