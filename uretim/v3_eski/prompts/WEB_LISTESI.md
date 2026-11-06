# Vaka 3 — web'de yapacakların

**Kesin web: 16** (elde 15, yapılacak 1) · **Codex engellerse web: en çok 16**

İstem: `prompts\G<n>.md` → "İstem" bölümü. Referansları o dosyadaki SIRAYLA ekle.
Ürettiğini `uretilen\G<n>.png` adıyla kaydet; yerel Claude kontrol eder.

## Kesin web

| G | ne | durum | referanslar (sırayla) |
|---|---|---|---|
| G1 | Peri, trençkot, normal (temel) | ✅ elde (onaylı) | L1_peri_yuz.jpg, peri_beden.jpg, L14_peri_trenckot.jpg, peri_kirmizi_stiletto.jpg |
| G2 | Peri, pekmezli-susamlı, sinirli (felaket temeli) | ✅ elde (onaylı) | G1 |
| G3 | Peri, pembe önlüklü, normal (kapanış temeli) | ✅ elde (onaylı) | G2 |
| G9 | Gizem, normal (temel) | ✅ elde (onaylı) | tarz_govde_kadin.jpg |
| G19 | Peri, trençkot, kaşı kalkık | ✅ elde (onaylı) | G1, poz_peri_kas.jpg |
| G20 | Peri, trençkot, sinirli | ✅ elde (onaylı) | G1, poz_peri_sinirli.jpg |
| G21 | Peri, trençkot, utanmış | ✅ elde (onaylı) | G1, poz_peri_utanmis.jpg |
| G22 | Peri, trençkot, şaşırmış | ✅ elde (onaylı) | G1, poz_peri_sasirmis.jpg |
| G23 | Peri, trençkot, meraklı | ✅ elde (onaylı) | G1, poz_peri_merakli.jpg |
| G24 | Peri, trençkot, kıskanç | ✅ elde (onaylı) | G1, L9_peri_kollar_kavusuk.jpg |
| G25 | Peri, pekmezli-susamlı, utanmış | ✅ elde (onaylı) | G2, poz_peri_utanmis.jpg |
| G26 | Peri, önlüklü, kaşı kalkık | ✅ elde (onaylı) | G3, poz_peri_kas.jpg |
| G27 | Peri, önlüklü, şaşırmış | ✅ elde (onaylı) | G3, poz_peri_sasirmis.jpg |
| G28 | Peri, önlüklü, utanmış | ✅ elde (onaylı) | G3, poz_peri_utanmis.jpg |
| G29 | Peri, önlüklü, sinirli | ✅ elde (onaylı) | G3, poz_peri_sinirli.jpg |
| G49 | Giriş: Peri trençkotu açmış, masada; Nadide hayran | ⏳ önce onaylanmalı: G4, G6 | buro_gunduz.jpg, G1, G4, G6, L25_peri_oturur.jpg |

## Codex engellerse web (önce Codex dener)

İstem dosyasının sonunda `## ENGELLENDİ` yazıyorsa bu resim senin.

| G | ne | durum | referanslar (sırayla) |
|---|---|---|---|
| G40 | Gizem, işveli | ▶ şimdi yapılabilir | G9 |
| G41 | Gizem, kaşı kalkık (süzüyor) | ▶ şimdi yapılabilir | G9 |
| G42 | Gizem, korkmuş (telefonu gösteriyor) | ▶ şimdi yapılabilir | G9 |
| G46 | Detay: Gizem'in fotoğrafı | ⏳ önce onaylanmalı: G44 | G44, G9 |
| G50 | Afiş: Peri kendi afişine bakakalmış; Ferruh gururla gösteriyor | ⏳ önce onaylanmalı: G10, G7, G4 | G10, G1, G7, G4 |
| G51 | Gizem apartman önünde komşulara simit dağıtıyor | ⏳ önce onaylanmalı: G16, G4 | G16, G9, G1, G4 |
| G52 | Yüzleşme: salı akşamı, herkes tezgâhın önünde | ⏳ önce onaylanmalı: G43, G4 | G43, G1, G4, serit_susam_dortlu.jpg |
| G53 | Yüzleşme: herkes Ferruh'a dönmüş; Ferruh depoya koşuyor | ⏳ önce onaylanmalı: G52, G37 | G52, G37 |
| G55 | Kovalamaca 2: Peri pekmez kazanının içinde | ⏳ önce onaylanmalı: G11 | G11, G1 |
| G56 | Kovalamaca 3: susamlı Peri tablada; Gizem kapıda | ⏳ önce onaylanmalı: G11 | G11, G2, G9 |
| G58 | Kovalamaca sonu: Gizem Peri'ye pembe önlüğü uzatıyor | ⏳ önce onaylanmalı: G11 | G11, G2, G9 |
| G63 | Kapanış (bağ düşük): Gizem pencerede, Cengo'nun sandalyesi boş | ▶ şimdi yapılabilir | buro_aksam.jpg, G3, G9 |
| G64 | Kapanış (bağ yüksek): Cengo simidi bölüp büyük yarısını Peri'ye veriyor | ⏳ önce onaylanmalı: G4 | buro_aksam.jpg, G3, G4, G9 |
| G65 | Kapanış: Gizem Peri'ye çerçeveli afişi uzatıyor | ⏳ önce onaylanmalı: G10 | buro_aksam.jpg, G3, G9, G10 |
| G66 | Kapanış: kapıda Gizem ve Cengo; masanın altında Peri | ⏳ önce onaylanmalı: G4 | aci_masanin_alti_v2.jpg, buro_aksam.jpg, G3, G9, G4 |
| G67 | Kart afişi: Simit Soygunu | ⏳ önce onaylanmalı: G10, G4 | G10, G1, G4, serit_susam_dortlu.jpg, L19_peri_yuruyor.jpg |
