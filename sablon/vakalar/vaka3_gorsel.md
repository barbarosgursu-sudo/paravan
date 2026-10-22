# VAKA 3 — GÖRSEL LİSTESİ VE PROMPTLAR

Üretim adımı 8 (`7_uretim_sureci.md`). **Hikâye 22 Ekim 2026'da donmuş sayıldı** (sahibi: "hikâyeyi donmuş sayalım").
**Bu dosya `vaka3_sayfa/uret.py` ile üretilir — elle düzenlenmez.** Promptların tam metni iş sayfasında ve `uret.py`'de.

**Sahibinin düzeni (22 Ekim 2026):** Aşama 1 ana referanslar tek pencerede → Claude onaylar → Aşama 2 gruplar üç
pencerede paralel, onaylı referans her pencereye bir kez eklenir → 8–10 görsel birikince toplu gönderilir, Claude toplu değerlendirir
→ Aşama 3 kareler. "Beklemeden" bölümü hiçbir onaya bağlı değil.

Referans dosyaları: `vaka3_sayfa/ref/`. **Susam dörtlüsü şeridi** (K39, K40'ın atası, afiş): G6–G9 onaylanınca Claude birleştirir.

## Liste (67 görsel)

| # | tür | ne | anahtar | referans | aşama |
|---|---|---|---|---|---|
| G1 | figür | Peri, trençkot, normal (temel) | `peri.trenckot.normal` | L1_peri_yuz.jpg, peri_beden.jpg, L14_peri_trenckot.jpg, peri_kirmizi_stiletto.jpg | Aşama 1 · Ana referanslar |
| G2 | figür | Peri, pekmezli-susamlı, sinirli (felaket temeli) | `peri.simit.sinirli` | G1 | Aşama 1 · Ana referanslar |
| G3 | figür | Peri, pembe önlüklü, normal (kapanış temeli) | `peri.onluklu.normal` | G2 | Aşama 1 · Ana referanslar |
| G4 | figür | Cengo, haki ceket, normal (temel) | `cengo.haki.normal` | C1_cengo_yuz.jpg, cengo_beden.jpg | Aşama 1 · Ana referanslar |
| G5 | figür | Cengo, unlu, normal (felaket temeli) | `cengo.unlu.normal` | G4 | Aşama 1 · Ana referanslar |
| G6 | figür | Nadide Hanım, normal (temel) | `nadide.normal` | tarz_kadin.jpg | Aşama 1 · Ana referanslar |
| G7 | figür | Ferruh, normal (temel) | `ferruh.normal` | tarz_yasli_adam.jpg | Aşama 1 · Ana referanslar |
| G8 | figür | Kenan, normal (temel) | `kenan.normal` | tarz_genc_adam.jpg | Aşama 1 · Ana referanslar |
| G9 | figür | Gizem, normal (temel) | `gizem.normal` | tarz_kadin.jpg | Aşama 1 · Ana referanslar |
| G10 | arka plan | Susam'ın merkezi: tezgâh ve afiş | `A23` | tarz_mekan_ic.jpg, L1_peri_yuz.jpg | Aşama 1 · Ana referanslar |
| G11 | arka plan | Susam'ın imalathanesi: fırın, pekmez kazanı, susam tablaları | `A25` | tarz_mekan_ic.jpg | Aşama 1 · Ana referanslar |
| G12 | figür | Sedat (alarmcı) | `sedat.normal` | tarz_genc_adam.jpg | Beklemeden · onaya bağlı değil |
| G13 | figür | Ayla Hanım (Badem'in şefi) | `ayla.normal` | tarz_kadin.jpg | Beklemeden · onaya bağlı değil |
| G14 | figür | Rüstem Bey (un toptancısı) | `rustem.normal` | tarz_yasli_adam.jpg | Beklemeden · onaya bağlı değil |
| G15 | arka plan | Susam'ın arka sokağı | `A26` | tarz_sokak.jpg | Beklemeden · onaya bağlı değil |
| G16 | arka plan | Tophane: eski apartmanın önü | `A27` | tarz_sokak.jpg | Beklemeden · onaya bağlı değil |
| G17 | arka plan | Badem Pastanesi, Kadıköy | `A28` | tarz_mekan_ic.jpg, G13 | Beklemeden · onaya bağlı değil |
| G18 | arka plan | Rüstem'in un toptancısı, Eminönü | `A29` | tarz_mekan_ic.jpg | Beklemeden · onaya bağlı değil |
| G19 | figür | Peri, trençkot, kaşı kalkık | `peri.trenckot.kas` | G1, poz_peri_kas.jpg | G1 → Peri, trençkot ifadeleri |
| G20 | figür | Peri, trençkot, sinirli | `peri.trenckot.sinirli` | G1, poz_peri_sinirli.jpg | G1 → Peri, trençkot ifadeleri |
| G21 | figür | Peri, trençkot, utanmış | `peri.trenckot.utanmis` | G1, poz_peri_utanmis.jpg | G1 → Peri, trençkot ifadeleri |
| G22 | figür | Peri, trençkot, şaşırmış | `peri.trenckot.sasirmis` | G1, poz_peri_sasirmis.jpg | G1 → Peri, trençkot ifadeleri |
| G23 | figür | Peri, trençkot, meraklı | `peri.trenckot.merakli` | G1, poz_peri_merakli.jpg | G1 → Peri, trençkot ifadeleri |
| G24 | figür | Peri, trençkot, kıskanç | `peri.trenckot.kiskanc` | G1, L9_peri_kollar_kavusuk.jpg | G1 → Peri, trençkot ifadeleri |
| G25 | figür | Peri, pekmezli-susamlı, utanmış | `peri.simit.utanmis` | G2, poz_peri_utanmis.jpg | G2 → Peri, pekmezli-susamlı |
| G26 | figür | Peri, önlüklü, kaşı kalkık | `peri.onluklu.kas` | G3, poz_peri_kas.jpg | G3 → Peri, pembe önlüklü |
| G27 | figür | Peri, önlüklü, şaşırmış | `peri.onluklu.sasirmis` | G3, poz_peri_sasirmis.jpg | G3 → Peri, pembe önlüklü |
| G28 | figür | Peri, önlüklü, utanmış | `peri.onluklu.utanmis` | G3, poz_peri_utanmis.jpg | G3 → Peri, pembe önlüklü |
| G29 | figür | Peri, önlüklü, sinirli | `peri.onluklu.sinirli` | G3, poz_peri_sinirli.jpg | G3 → Peri, pembe önlüklü |
| G30 | figür | Cengo, haki, kaşı kalkık | `cengo.haki.kas` | G4, poz_cengo_kas.jpg | G4 → Cengo, haki ceket |
| G31 | figür | Cengo, haki, gülen | `cengo.haki.gulen` | G4, poz_cengo_gulen.jpg | G4 → Cengo, haki ceket |
| G32 | figür | Cengo, haki, yumuşak | `cengo.haki.yumusak` | G4, poz_cengo_yumusak.jpg | G4 → Cengo, haki ceket |
| G33 | figür | Cengo, unlu, kaşı kalkık | `cengo.unlu.kas` | G5, poz_cengo_kas.jpg | G5 → Cengo, unlu |
| G34 | figür | Cengo, unlu, gülen | `cengo.unlu.gulen` | G5, poz_cengo_gulen.jpg | G5 → Cengo, unlu |
| G35 | figür | Cengo, unlu, yumuşak | `cengo.unlu.yumusak` | G5, poz_cengo_yumusak.jpg | G5 → Cengo, unlu |
| G36 | figür | Nadide, kırgın | `nadide.kirgin` | G6 | G6 → Nadide |
| G37 | figür | Ferruh, terli (panik) | `ferruh.terli` | G7 | G7 → Ferruh |
| G38 | figür | Ferruh, itiraf (unlu, yenik) | `ferruh.itiraf` | G7 | G7 → Ferruh |
| G39 | figür | Kenan, kızgın | `kenan.kizgin` | G8 | G8 → Kenan |
| G40 | figür | Gizem, işveli | `gizem.isveli` | G9 | G9 → Gizem |
| G41 | figür | Gizem, kaşı kalkık (süzüyor) | `gizem.kas` | G9 | G9 → Gizem |
| G42 | figür | Gizem, korkmuş (telefonu gösteriyor) | `gizem.korkmus` | G9 | G9 → Gizem |
| G43 | arka plan | Susam, salı akşamı: kepenk yarı inik | `A23b` | G10 | G10 → Susam dükkânı (mekân ve detaylar) |
| G44 | arka plan | Susam'ın ofisi: açık kasa, kayıt cihazı | `A24` | G10 | G10 → Susam dükkânı (mekân ve detaylar) |
| G45 | detay | Detay: kayıt cihazının son karesi | `D8` | G44 | G10 → Susam dükkânı (mekân ve detaylar) |
| G46 | detay | Detay: Gizem'in fotoğrafı | `D9` | G44, G9 | G10 → Susam dükkânı (mekân ve detaylar) |
| G47 | arka plan | İmalathane: un deposu | `A25b` | G11 | G11 → İmalathane (mekân ve detay) |
| G48 | detay | Detay: dolapta başka pastanenin önlüğü | `D10` | G11, G13 | G11 → İmalathane (mekân ve detay) |
| G49 | ara kare | Giriş: Peri trençkotu açmış, masada; Nadide hayran | `K36` | buro_gunduz.jpg, G1, G4, G6, L25_peri_oturur.jpg | Aşama 3 · Kareler |
| G50 | ara kare | Afiş: Peri kendi afişine bakakalmış; Ferruh gururla gösteriyor | `K37` | G10, G1, G7, G4 | Aşama 3 · Kareler |
| G51 | ara kare | Gizem apartman önünde komşulara simit dağıtıyor | `K38` | G16, G9, G1, G4 | Aşama 3 · Kareler |
| G52 | ara kare | Yüzleşme: salı akşamı, herkes tezgâhın önünde | `K39` | G43, G1, G4, Susam dörtlüsü şeridi | Aşama 3 · Kareler |
| G53 | ara kare | Yüzleşme: herkes Ferruh'a dönmüş; Ferruh depoya koşuyor | `K40` | G52, G37 | Aşama 3 · Kareler |
| G54 | ara kare | Kovalamaca 1: un bulutunda bembeyaz Cengo | `K41` | G47, G5 | Aşama 3 · Kareler |
| G55 | ara kare | Kovalamaca 2: Peri pekmez kazanının içinde | `K42` | G11, G1 | Aşama 3 · Kareler |
| G56 | ara kare | Kovalamaca 3: susamlı Peri tablada; Gizem kapıda | `K43` | G11, G2, G9 | Aşama 3 · Kareler |
| G57 | ara kare | Kovalamaca 4: Ferruh yırtık çuvalda, paralar saçılmış | `K44` | G47, G37, G5 | Aşama 3 · Kareler |
| G58 | ara kare | Kovalamaca sonu: Gizem Peri'ye pembe önlüğü uzatıyor | `K45` | G11, G2, G9 | Aşama 3 · Kareler |
| G59 | ara kare | Karar: eksper'e anlat — merkezin kepengi inik | `K46` | G43, G4 | Aşama 3 · Kareler |
| G60 | ara kare | Karar: talebi Ferruh geri çeksin — Kenan simit uzatıyor | `K47` | G11, G8, G4 | Aşama 3 · Kareler |
| G61 | ara kare | Karar: Nadide'ye bırak — merkezin yeni tabelası | `K48` | G43, G17, G4 | Aşama 3 · Kareler |
| G62 | ara kare | Karar: Ferruh'tan pay al — Cengo parayı sayıyor | `K49` | buro_gunduz.jpg, G4 | Aşama 3 · Kareler |
| G63 | ara kare | Kapanış (bağ düşük): Gizem pencerede, Cengo'nun sandalyesi boş | `K50` | buro_aksam.jpg, G3, G9 | Aşama 3 · Kareler |
| G64 | ara kare | Kapanış (bağ yüksek): Cengo simidi bölüp büyük yarısını Peri'ye veriyor | `K51` | buro_aksam.jpg, G3, G4, G9 | Aşama 3 · Kareler |
| G65 | ara kare | Kapanış: Gizem Peri'ye çerçeveli afişi uzatıyor | `K52` | buro_aksam.jpg, G3, G9, G10 | Aşama 3 · Kareler |
| G66 | ara kare | Kapanış: kapıda Gizem ve Cengo; masanın altında Peri | `K53` | aci_masanin_alti_v2.jpg, buro_aksam.jpg, G3, G9, G4 | Aşama 3 · Kareler |
| G67 | kart afişi | Kart afişi: Simit Soygunu | `KART_V3` | G10, G1, G4, Susam dörtlüsü şeridi, L19_peri_yuruyor.jpg | Aşama 3 · Kareler |
