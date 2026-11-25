# Vaka 7 — kapı kaydı

Kapı aracı (`kaynak/arac_kapi.js`) bu dosyayı okur. Vaka başına bir kez yazılır; figür ya da metin değişince güncellenir.
Kurallar ve gerekçeleri `arac_kapi.js`'in başında (sahibiyle 14 Kasım 2026'da kararlaştırıldı).

## yollar

Kapının oynattığı yollar (her şüpheli ve her ipucu yolu en az bir kez): `- <karar> <ipucu yolu> <suçlama>`,
`arac_yeni_tur.js` argümanları. 23 Kasım 2026'da `arac_kapi.js`'teki tablodan buraya taşındı.

- 0 el dogru
- 1 izmir dogru
- 2 tuval zayif
- 3 cozmez7 sukru
- 0 cozmez7 vedat

## eş söz

Anlatıda kişiyi adı yerine anan sözler (adın kendisi kanondan otomatik). Yalnız kesin olanlar; her çekim ayrı yazılır.

- suheyla: sahibe, sahibesi
- nesrin: restoratör, restoratörü, restoratörümüz
- sukru: uzman, uzmanı
- vedat: satıcı, satıcısı
- kaan: baş eksper
- ercan: vale, valesi
- necmi: tezgâhçı

## poz

Her figür pozu için: **hedef** (poz bir kişiye yöneliyorsa: kişi kimliği ya da `muhatap`; yoksa —), **bakış** (`karşı` = ekranda
karşısındakine, `yan` = başka yöne, `aşağı`), **konuşur** (konuşur gibi poz: açık el, el kol hareketi), **görünüş** (metnin
anabileceği görünür hâl). 25 Kasım 2026'da figürlere tek tek bakılarak yazıldı (Claude, Oğuz Bey'in bilgisayarı); sahibi düzeltebilir.

| anahtar | hedef | bakış | konuşur | görünüş |
|---|---|---|---|---|
| cengo.smokin.gulen | — | karşı | hayır | smokin, papyon yamuk |
| cengo.smokin.kas | — | karşı | hayır | smokin, papyon yamuk |
| cengo.smokin.normal | — | karşı | hayır | smokin, papyon yamuk |
| cengo.smokin.yumusak | — | karşı | hayır | smokin, papyon yamuk |
| ercan.fisilti | muhatap | karşı | evet | — |
| ercan.gulen | — | karşı | hayır | — |
| ercan.normal | — | karşı | hayır | — |
| gizem.triko | — | karşı | hayır | — |
| gizem.triko_aski | — | karşı | hayır | askıda gece mavisi elbise |
| kaan.ciddi | — | karşı | hayır | — |
| kaan.heyecanli | — | karşı | hayır | — |
| kaan.normal | — | karşı | hayır | — |
| necmi.defter | — | aşağı | hayır | defter |
| necmi.heyecanli | — | karşı | hayır | — |
| necmi.normal | — | karşı | hayır | — |
| nesrin.itiraf | — | yan | hayır | — |
| nesrin.normal | — | karşı | hayır | — |
| nesrin.soguk | — | karşı | hayır | — |
| peri.altin_temiz.kas | — | karşı | hayır | yaldızlı, eldivensiz |
| peri.altin_temiz.normal | — | karşı | hayır | yaldızlı, eldivensiz |
| peri.altin_temiz.yumusak | — | karşı | hayır | yaldızlı, eldivensiz |
| peri.gala.kas | — | karşı | hayır | eldivenli |
| peri.gala.merakli | — | karşı | hayır | eldivenli |
| peri.gala.normal | — | karşı | hayır | eldivenli |
| peri.gala.sasirmis | — | karşı | hayır | eldivenli |
| peri.gala.sevincli | — | karşı | hayır | eldivenli |
| peri.gala.utanmis | — | aşağı | hayır | eldivenli |
| peri.kadife7.kas | — | karşı | hayır | — |
| peri.kadife7.merakli | — | karşı | hayır | — |
| peri.kadife7.normal | — | karşı | hayır | — |
| peri.kadife7.sasirmis | — | karşı | hayır | — |
| suheyla.endiseli | — | karşı | hayır | — |
| suheyla.normal | — | karşı | hayır | — |
| suheyla.sert | — | karşı | hayır | — |
| suheyla.suzuyor | muhatap | karşı | hayır | — |
| sukru.dik | — | karşı | hayır | — |
| sukru.kirgin | — | aşağı | hayır | — |
| sukru.normal | — | karşı | hayır | — |
| vedat.kacamak | — | yan | hayır | — |
| vedat.ofkeli | — | karşı | evet | — |
| vedat.sakaci | muhatap | karşı | evet | — |
| vedat.yakalanmis | — | aşağı | hayır | — |

## kalsın

Sahibinin "kalsın" dediği bulgular (`- K<n> | <satırın başı>`). Bir daha sorulmaz.
- G9 | benzerlik | Ercan ↔ Cengo 1,41 (şüphe sınırı 1,40; aynı resim önce 1,34 ölçüldü). Gözle ayrışıyor: jöleli düz saç, traşlı, yelek, eldiven — Cengo dağınık saçlı, sakallı, ceketli. Barbaros, 23 Kasım 2026.
- G36 | tarz | peri.gala.sasirmis +0,016 iki üretimde (şüphe sınırı 0,02); onaylı G34 ile yan yana aynı boyalı tarz. Oğuz Bey, 25 Kasım 2026.
- G38 | tarz | peri.gala.utanmis +0,016 iki üretimde (şüphe sınırı 0,02); onaylı G34 ile yan yana aynı boyalı tarz. Oğuz Bey, 25 Kasım 2026.
- G55 | yüz | vedat.yakalanmis 0,693 (geçme 0,70; ilk üretim 0,608); kel, kır sakallı, kalın gözlüklü Vedat açıkça tanınıyor, çökmüş ifade puanı düşürüyor. Oğuz Bey, 25 Kasım 2026.
- K11 | Paravan Dedektiflik? Süheyla. Nişantaşı'nda bir müzayede evi
- K11 | Süheyla Peri'yi baştan aşağı süzüyor.
- K11 | Sizi bir yerden tanıyorum. Kozmetik reklamı mı?
- K11 | Biraz daha büyük bir şey, Süheyla Hanım. Buyurun, oturun.
- K11 | Bu akşam sekizde satışımız var. Yıldızı bir tablo: Hüsnü Fai
- K11 | Altı ile sekiz milyon arası bekliyoruz. Satıcısı Vedat Bey.
- K11 | Ücretimiz elli bin lira. İş bitince ödenir.
- K11 | Nasıl isterseniz. Akşam yedi. Hiç geç kalmayın.
- K11 | Süheyla mı gönderdi? (Peri'ye) Durun, sizi tanıdım: hava dur
- K11 | Fırtına var, Vedat Bey. Tablonuz bu duvarda mı asılıydı?
- K11 | Kırk yıl. Babamdan kaldı. Lizbon'a götüremem; orada nem çok,
- K11 | Yalan söylerken o duvara bakıyorsunuz, Vedat Bey. Bir şey sö
- K11 | Şükrü'ye mi? Ben kimseye para vermem; ben reklamcıyım. Ben p
- K11 | Kimse paradan söz etmedi, Vedat Bey.
- K11 | Siz de mi tabloya veda etmeye geldiniz?
- K11 | Tabloyu kimin değiştirdiğini biliyorum. Söylemeye geldim.
- K11 | Cengo, gel bakalım. Bu kılık ne?
- K11 | Size doksan. Siz kraliçesiniz. (Cengo'ya) Papyonun yamuk, oğ
- K11 | Böyle kalsın, Necmi abi. Süheyla Hanım'ın müzayede evinden s
- K11 | Hangisi aldı, oğlun hatırlamıyor mu?
- K11 | Oğlan telefondan başını kaldırmaz. Bizim oğlan değil, telefo
- K12 | Bordo kadife ceketli, kel, kısa kır sakallı, kalın siyah göz
- K12 | Fırtına var, Vedat Bey. Tablonuz bu duvarda mı asılıydı?
- K12 | Tablo son aylarda bu duvardan hiç indi mi?
- K12 | Kimse paradan söz etmedi, Vedat Bey.
- K12 | Ercan etrafına bakıp sesini alçaltıyor.
- K12 | Sonra ne oldu?
- K12 | Tabloyu kimin değiştirdiğini biliyorum. Söylemeye geldim.
- K9 | Vedat bir an duvardaki dikdörtgene bakıyor, sonra Peri'ye gü
- K13 | Necmi tezgâhın altından buruşuk bir defter çıkarıp sayfaları
  (Yukarıdaki K11/K12/K9/K13 satırları: Oğuz Bey, 25 Kasım 2026 — gözle bakıldı: gerçek dokunma yok; Vedat şakacı, el kol hareketiyle dinliyor; Ercan'ın fısıltısı sır anlatırken; bakışta araç kişiyi okuyamadı; defter eski ve yıpranmış.)
