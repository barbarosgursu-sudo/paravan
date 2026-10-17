# Cengo poz ve kıyafet kütüphanesi (C1–C25)

Kaynak: Cengo referans seti (17 Ekim 2026, ChatGPT), iş sayfası
https://claude.ai/artifact/XxseE7eCNqgr8oPqy8V6Nc — üreticisi `../lora_sayfa/uret_cengo.py`.
**ChatGPT'ye referans kütüphanesi** olarak depoda (900 px JPEG). Peri'deki karşılığı `../peri_poz/`.

## Nasıl kullanılır (her vakanın görsel listesinde, adım 8)
- **Yüz:** C1 her yeni kıyafetli temel Cengo promptunda 1. referans ("yüz için"). Gelen her Cengo,
  C1 ile yan yana konup yüz kayması aranır.
- **Beden ve ölçek:** G14-1 (`../lora_sayfa/ref/G14-1_cengo.jpg`).
- **Poz:** uygun C, satırıyla: *"Bu referans YALNIZ poz içindir; kıyafeti, saçı ve arka planı alma."*
- En çok **5 referans** (ChatGPT sınırı).

## Dizin

| # | kadraj | poz | ifade | kıyafet / zemin |
|---|---|---|---|---|
| C1 | yakın, önden | kameraya bakıyor | hınzır yarım gülüş | beyaz gömlek, üst düğmeler açık; açık bej — **YÜZ REFERANSI** |
| C2 | yakın, ¾ sol | burnu sola, başı hafif eğik | kuşkulu, alaycı, kaş kalkık | beyaz gömlek; açık bej |
| C3 | yakın, ¾ sağ | burnu sağa, bakış yana | ciddi, düşünceli | koyu tişört; orta gri |
| C4 | yakın, **profil** (sola) | uzağa bakıyor | sakin | lacivert gömlek; koyu lacivert |
| C5 | yakın, ¾ sol | başı hafif geride | **kahkaha**, dişler görünür | beyaz gömlek; açık gri |
| C6 | yakın, **aşağıdan** | çene hafif yukarıda | kendinden memnun yarım gülüş | bordo gömlek; koyu kahve, akşam ışığı |
| C7 | yakın, **yukarıdan** | kameraya yukarı bakıyor | yumuşak, hafif gülümseme | beyaz gömlek; açık bej |
| C8 | yakın, önden | — | **şaşkın**, gözler açık, ağız aralık | siyah tişört; koyu gri |
| C9 | bel üstü, ¾ sol | bir el cepte, öbürü yanda; baş yana dönük | hınzır yarım gülüş | **Vaka 1:** bol kahverengi ceket, kollar sıvalı, beyaz gömlek, bordo kravat cepten sarkıyor, boncuklu bileklik; bej |
| C10 | bel üstü, ¾ sol | bir el kravat düğümünü gevşetiyor, öbürü cepte | sıkışmış ama keyifli | **Vaka 2:** koyu lacivert takım, gömlek ilikli, bordo kravat bağlı, bileklik; bej |
| C11 | bel üstü, önden | **kollar göğüste kavuşuk** | kendinden emin gülümseme | siyah deri ceket, beyaz tişört; orta gri |
| C12 | bel üstü, ¾ | elinde **porselen fincan** | dalgın, yumuşak | koyu gri balıkçı yaka kazak; mutfak, sabah ışığı |
| C13 | bel üstü, ¾ sol | **eli ensesinde** | mahcup yarım gülüş | açık mavi kot gömlek, kollar sıvalı; bej |
| C14 | bel üstü, önden | el ceket yakasında | ciddi, karizmatik | siyah smokin, papyon; koyu, altın ışıklar |
| C15 | bel üstü, ¾ sol | **eller cepte**, saç ıslak | temkinli, gözler kısık | koyu yeşil yağmurluk, yaka kalkık; gece sokak, yağmur, fener |
| C16 | bel üstü, ¾ sol | **sola işaret ediyor**, öbür el belde | öfkeli, ağız açık | beyaz gömlek, kollar sıvalı, kot; bej |
| C17 | bel üstü | **eli çenesinde**, bakış aşağıda | düşünceli, hüzünlü | lacivert yuvarlak yaka kazak; koyu gri |
| C18 | **boydan**, ayakta, ¾ | bir el kot cebinde, ağırlık tek bacakta | hınzır yarım gülüş | **Vaka 1:** bol kahverengi ceket, beyaz gömlek, kot, kahve bot, kravat cepte, bileklik; bej |
| C19 | boydan, **yürüyor** (kameraya) | kollar yanda | hafif gülümseme | **Vaka 2:** kısa gelen lacivert takım (bilekler açık), bordo kravat, siyah ayakkabı, bileklik; gri |
| C20 | boydan, **duvara yaslanmış** | bacaklar çapraz, baş yana | rahat, gülüyor | siyah deri ceket, beyaz tişört, siyah kot, siyah bot; taş duvar, gün ışığı |
| C21 | boydan, ayakta, önden | **eller cepte** | rahat gülümseme | bej keten gömlek ve pantolon, espadril; deniz kıyısı, mavi gök |
| C22 | boydan, **sandalyeye ters oturmuş** | kollar sandalye arkasında | dalgın | gri kazak, kot, kahve bot; oda, gün ışığı |
| C23 | boydan, **profil** (sola) | ayakta, kollar yanda | sakin, gururlu | siyah smokin, papyon, rugan ayakkabı; koyu, lacivert-altın ışık |
| C24 | boydan, **arkadan ¾** | omzunun üstünden bakıyor | alaycı gülümseme | bej trençkot, koyu pantolon, siyah ayakkabı; bej |
| C25 | boydan, **koltukta oturur, bacak bacak üstünde** | kollar koltuk kollarında | kendinden memnun | beyaz gömlek, koyu gri pantolon, kahve ayakkabı; gri |

## Notlar
- Set tamam (17 Ekim 2026, 25/25). Hepsi C1 ile aynı yüz; eller ve boydan oranlar denetlendi.
- C9 ve C10 baş açısı/gülüşü G14-1'den kopya; C9 neredeyse G14-1'in aynısı. Yeni poz için başka C seç.
- C1 ikinci denemede onaylandı. İlk deneme yaşlı (göz çizgileri), çilli, saçı kabarık ve kızıla çalıyordu;
  düzeltme: 34 yaş, pürüzsüz cilt, çil yok, saç koyu kahve-siyah ve yatık, ten zeytinî esmer.
