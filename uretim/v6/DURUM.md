# Vaka 6 — üretim durumu

**13 Kasım 2026, ~19:45 — GÜN SONU. Yarın Oğuz Bey'in bilgisayarında, onun hesabıyla devam (Barbaros "kurulumla başla" deyince
`uretim/KURULUM_ORTAK.md`).** G18 (Cengo temeli, 3. deneme) ve G6 (Eylül, kumaş ayarıyla 4. deneme) sahibince ONAYLI. Eylül'ün
G42–G45'i aynı ayarla yeniden üretildi → `uretilen/`'de, DENETLENMEDİ (araç + göz + sahibine tek sayfa). Sıradaki: G34–G41 (Cengo
ifadeleri), G47–G60 (konuklar), kareler G61–G85 — hepsi araçtan geçerek; parti sonunda tek sayfa sahibine. Kumaş dersi
`ISTEM_KALIPLARI.md` §11'de.

**13 Kasım 2026, 19:30 — DURAKLADI (sahibi: ChatGPT 5 saatlik kota %93).** Döngü çalışmıyor. Kaldığımız yer:
- **Tarz aracı** `kaynak/arac_tarz.py` hazır, sınav GEÇTİ (kaymış 8/8, iyi 42/42), `dongu.sh`'a bağlı; kural `uretim/CLAUDE.md` → Denetim 0.
- **Sahibince onaylı temeller:** G2 (Cengo ütülü kart), G86 (buruşuk kart, 3. deneme), G6 (Eylül, 3. deneme). Onaylı ifadeler: G42–G46
  (Eylül ×4, Haldun dertli) + öncekiler. `onayli/`'de toplam 38.
- **Bekleyen:** `uretilen/G18.png` (Cengo temeli, 3. deneme: saç koyu, gömlek pürüzsüz). Araç ŞÜPHELİ (+0,004) — bilinen sınır: düz,
  pürüzsüz açık gömlek gövde puanını düşürüyor; gözle çapaya (v3 G4) çok yakın. **Sahibinin kararı bekleniyor.** G18 onaylanmadan
  Cengo ifadeleri (G34–G41) ve Cengo'lu kareler başlamaz.
- **Kota yenilenince ilk iş (sahibi, 13 Kasım 19:35):** Eylül'ü G18'de işe yarayan ayarla yeniden üret: kot ceket ve pantolonda fırça
  dokusu bir tık AZ, kumaş pürüzsüz ve yumuşak geçişli; boya dokusu yüzde ve saçta; saç koyu kahve kalsın. Sıra: önce G6 (temel) →
  sahibine çapayla yan yana → onaylanırsa G42–G45 (4 ifade) aynı notla yeniden. Eski onaylılar `red/*_kot.png`'ye taşınır.
- **Ders:** "görünür fırça darbesi, dokulu boya" vurgusu düz kumaşta kırışık/kâğıt dokusu yapıyor (G18 1. deneme, G86 1. deneme).
  Kural taslağı: doku yüz/saç/ışıkta, kumaş "pürüzsüz, yumuşak geçişli". `ISTEM_KALIPLARI.md`'ye henüz yazılmadı.
- **Araç için not:** figürde tarz puanı gövdeden; düz geniş kumaşta yanlış ŞÜPHELİ verebilir → yüz+gövde birlikte düşünülmeli (sonraki iş).
- Yeniden başlarken: `cd uretim && KOL=2 DONGU_LOG=<scratchpad> ./dongu.sh 6` (kilit/ içindeki eski G42, G44 kilitleri başlangıçta silinir).


**13 Kasım 2026, ~17:20 — DÖNGÜ DURDU (sahibi: önce farkın sebebi). Teşhis:** (1) Cengo kartı G2 kendisi kaydı: iki kişi
yan yana, yatay 3:2, küçük tam boy figür, "ölçü resmi" → katalog çizimi (kalın kontur, düz boya, soğuk ışık, yüz C1'den uzak). Peri
kartı G1 tek kişi dikey, kaymadı. (2) G18 kartı 3. referans aldı; aynı kişi aynı kıyafette olduğu için tarzı karttan kopyaladı
(V3 G4 kartsızdı, boyalı). (3) Varyantlar G18'in "AYNISI" → G34–G39 hepsi kaymış. (4) Eylül G6: istem Müzeyyen'le aynı, sonuç daha
gerçekçi/soluk; kesin sebep yok. (5) Model değişikliği ayırt edilemiyor (PNG metaverisi iki dönemde de yalnız "gpt-image");
konuk yüzleri, Peri, Gizem, mekânlar eski tarzda → genel kayma yok. Karşılaştırma sayfaları scratchpad'de.

**13 Kasım 2026, 17:00 — PARTİ 3 SÜRÜYOR; STİL SORUSU SAHİBİNDE.** Sahibi "eskilerden farklı" dedi; karşılaştırıldı: Cengo (G18 ve ondan çizilenler G34, G35, G37) kalın kontur, düz boya, soğuk ışık, farklı yüz; eski Cengo sıcak, boyalı. Eylül G6 daha gerçekçi ve soluk. Peri ve Gizem eskilere yakın. Cengo'ya ya da Eylül'e bağlı 26 istem `prompts_bekle/`'ye alındı (döngü görmez); karar gelince geri taşınır. Döngü konuk ifadeleri ve Cengo'suz karelerle sürüyor.

**13 Kasım 2026, 14:49 — PARTİ 1 BİTTİ; SAHİBİ ONAYLADI (14:52, "Onaylıyorum").** 14:21–14:47 (2 kol). `onayli/`'de 16 resim
(G1, G2 kart; G3, G4, G5, G7, G8, G9 temel; G10–G16 mekân). Onay sayfası: `yanyana/parti1_onay.jpg` (eski konuklar ve
V1–V5'in bütün mekânları altında, karşılaştırma için). Codex çalışması: 24 (+ sabahki G4) → 16 onay + 6 zemin denemesi
(gerekli) + 4 boşa (G3z, G4z ikinci kez — `dongu.sh` düzeltildi; G2 ret: bileklik yanlış bilekte; G11 ret: eski sokak
kalıbı + saat). Ret notları istemlerin sonunda (`## Düzeltme`).

**Parti 3 zemin seçimleri:** Eylül **açık bej** (G6; G6z gri-mavide saçta mavi iz) · Gizem triko **açık bej** (G23z seçildi → `onayli/G23.png`; gri-mavide saç kenarında mavi bant; krem kazak bejde delinmedi). G24–G25 istemleri açık beje çevrildi.

**Zemin seçimleri (H4; bu karakterin BÜTÜN ifadeleri bu zeminle):** Müzeyyen gri-mavi (G3), Jale gri-mavi (G4), Haldun
açık bej (G5; gri-mavide gözlük camı mavi kalıyor), Recep **açık bej** (G7z seçildi → `onayli/G7.png`; gri-mavide saçta
iz), Dilek açık bej (G8; G8z'nin mezurasında rakam), Tahsin **açık bej** (G9z seçildi → `onayli/G9.png`; beyaz saçta mavi
iz). Boy ölçüsü (`arac_yanyana --oran`): Müzeyyen, Jale, Haldun, Recep, Tahsin ~0,65 (oran 1,00); Dilek ~0,59 (0,90) —
H2 tablosuyla gömmede kesinleşir. Baş kırpıkları: `referanslar/<kim>_bas.png` (6 karakter).

**Bugün çıkan kurallar:** `ISTEM_KALIPLARI.md` §7a (mekân kompozisyonu tekrar etmez; yeni mekân eskilere benzemez, aynı
yer dönüyorsa farklı açı; `istem_kontrol.sh` `Kompozisyon:` arar). `dongu.sh` seçilmeyen zemini üretmez.

**Sıradaki:** sahibinin onayı → Parti 2 (Peri/Cengo temel figürleri karttan; Müzeyyen, Jale, Dilek kıyafet kartları) ve
Parti 3 (ifadeler, kareler, 11 ek resim, Eylül G6). İstemleri yazılmadı; §7a ve SR-M ile yazılacak.

**13 Kasım 2026, ~16:00 — PARTİ 2: 5/5 ONAYLI; SAHİBİ TOPLU ONAYLADI.** (G17 sahibi web'de üretti.) ⚠ GÖMME NOTU: G17'de mavi kot
gri-mavi zemine benziyor; `arac_kes --profil peri` kotu deliyor (kırıntı 1858 px). `konuk_beyaz_delik` eşiği kotu koruyor
(65 px) ama Peri'nin sabit çerçevesini kullanmıyor → gömmeden önce `arac_kes.js`'e Peri çerçevesi + beyaz_delik eşiği
(ör. `peri_beyaz_delik` profili) eklenmeli. Aynı sorun Parti 3'teki bütün `peri.mesai.*` ifadelerinde olacak; zemin
gri-mavi kalır (kızıl saç), çözüm kesimde.
(önceki durum:) **15:49 — PARTİ 2: 4/5 ONAYLI, G17 WEB'DE.** 15:39 istemler yazıldı (G17–G21), 15:43–15:49 üretim (2 kol, 5
Codex çalışması). Onaylı: G18 (Cengo ütülü temel), G19/G20/G21 (Müzeyyen, Jale, Dilek kartları). **G17 (Peri mesai temeli)
iki kez güvenlik filtresine takıldı** (output: sexual) → web paketi `WEB_G17.md` sahibine verildi; sonuç
`uretilen/G17.png` olarak gelince denetlenir. Web'de de takılırsa sahibine sorulacak: çekiciliği bir kademe hafifletmek mi,
yalnız pozu değiştirmek mi (§9 "çekicilik eskilerden az olmasın" ile çatışıyor). Not: eski Cengo resimlerinde bileklik
tutarsız (haki sol, takım sağ); bu vakada sol bilekte sabit. `istem_kontrol.sh`: Peri/Cengo artık "yeni karakter"
sayılmıyor. Parti 2 sahibinin toplu onayını bekliyor (G17 gelince).

## Yeni pencerede "başla" denince

1. `git pull` (yalnız `main`). Okuma: kök `CLAUDE.md` → `kaynak/DEVIR.md` en üst bölüm → `uretim/CLAUDE.md` → bu dosya →
   `LISTE.md`. Resim kuralları: `uretim/ISTEM_KALIPLARI.md`, `uretim/v3_eski/BIRIKIM.md`, `sablon/5_gorsel_sistemi.md`.
2. `cd uretim && ./istem_kontrol.sh v6/prompts/*.md` → çıkış 0 olmalı.
3. Saat: `sablon/vakalar/vaka6_baslangic.md` §2'ye "8 Görsel (Parti 1)" satırının başlangıcını yaz (İstanbul saati).
4. Döngü (arka planda): `cd uretim && KOL=2 DONGU_LOG=<scratchpad, /c/… biçiminde> ./dongu.sh 6`. Üretilecek: G1, G2, G3,
   G3z, G4z, G5, G5z, G7, G7z, G8, G8z, G9, G9z, G10–G16 (20 resim; G4 zaten `uretilen/`'de). ~15 dk, 5 saatlik kotanın ~%24'ü.
5. Gelen her resmi denetle (`uretim/CLAUDE.md` → Denetim; kartlarda tam boy, yüz, ayakkabı). Temel figürlerde iki zemini
   `arac_kes.js` + `arac_yanyana.js` ile kesip saç kenarı temiz olanı seç; boy ölçüsünü not et (H2).
6. **Temeller sahibine onaya:** onaylarsan `onayli/`'ye; tek sayfada yan yana (eski karakterlerle de) göster. Takılan temel
   HEMEN sahibine (web paketi). Bitince DURUM ve vaka6_baslangic güncelle, commit, `git push origin HEAD:main`.

## Ölçüm (13 Kasım, deneme)

| | |
|---|---|
| resim başına Codex süresi, 1 kol | 94–99 sn (G7, G8, G9) |
| resim başına Codex süresi, 2 kol | 94–114 sn (G3, G4, G5, G10; aynı anda) |
| 5 saatlik kota | 7 resim = %8 → resim başına ~%1,2 (~80 resim / 5 sa) |
| haftalık kota | 7 resim < %1 |
| hız sınırı / kota mesajı | görülmedi |

## ✅ YAPILDI (13 Kasım 14:45) — dongu.sh: seçilmeyen zemin artık üretilmiyor (`case *z` satırı; sahte kilitler silindi)

## (kayıt) dongu.sh: seçilmeyen zemin yeniden üretiliyordu (13 Kasım 2026, sahibi: "sakın unutma")

İki zeminden seçilmeyen `red/`'e taşınınca döngü onu "üretilmemiş" sayıp YENİDEN üretti (G3z, G4z: 2 resim boşa kota).
Sebep: `uretilebilir()` yalnız `onayli/` ve `uretilen/`'e bakıyor. Düzeltme (döngü BİTİNCE; çalışan betik dosyası
değiştirilmez): `G<n>` ya da `G<n>z`'den biri `onayli/`'deyse öbürü üretilmez. O zamana kadar her seçimde seçilmeyenin
`kilit/` klasörü elle açılır (`mkdir kilit/G<n>z`); düzeltmeden sonra bu sahte kilitler silinir.

## Kota kaydı — Vaka 6 üretimi (sahibinin isteği, 13 Kasım 2026)

Amaç: bir vakanın resimlerinin iki aboneliğin kotasından ne kadar yediğini görmek. Her parti başında ve sonunda sahibi iki
ekranın değerini verir (ChatGPT → Ayarlar → Kullanım; Claude → Ayarlar → Kullanım), buraya satır eklenir. Sıfırlanma
arada olursa not düşülür (fark o zaman iki parçadan toplanır).

| an | saat | ChatGPT 5 sa (kalan) | ChatGPT haftalık (kalan) | Claude oturum (kullanılan) | Claude haftalık (kullanılan) | not |
|---|---|---|---|---|---|---|
| Parti 1 öncesi (başlangıç) | 13 Kas 14:18 | %92 (sıfırlanma ~17:09) | %99 (6 gün 21 sa) | %52 (sıfırlanma 16:00) | %7 (sıfırlanma Cuma 11:00) | ChatGPT Plus, Claude Pro. ChatGPT'deki %8 sabahki 7 deneme resminden; Claude'daki %52 bu oturumun bayrak/kural işi |
| Parti 1 sonrası | 13 Kas 14:51 | %68 (sıfırlanma ~17:09) | %95 | %78 (sıfırlanma 16:00) | %11 | sıfırlanma arada olmadı |
| **Parti 1 farkı** | 14:18–14:51 | **%24** | **%4** | **%26** | **%4** | 24 Codex çalışması (16 onay + 6 zemin denemesi + 4 boşa) |
| Parti 2 öncesi | 13 Kas 15:39 | %68 (1 sa 30 dk) | %95 | %83 (sıfırlanma 16:00) | %11 | Parti 1 sonrası yalnız yazışma: Claude oturum +%5 |

**Okuma (Parti 1):** ChatGPT 5 saatlik kotada Codex çalışması başına ~%1,0 (sabahki ölçüm ~%1,2 ile uyumlu); haftalıkta 24 resim
%4 → haftada ~600 resim sığar. Onaylı resim başına ~%1,5 (boşa ve zemin denemeleriyle). Claude: denetim + kural işi oturumun
%26'sı, haftanın %4'ü (bu sürede bayrak sonrası kural yazımı da var; saf denetim daha az). Vaka 6'nın ~92 resmi için tahmin:
ChatGPT 5 saatlikte ~1,5 dolum (gece ikinci dolumda döngü bekler), haftalıkta ~%15.

## Geçmiş

- 12:08–12:12: G3, G4, G5, G10 kazara 2 kolla (bkz. `uretim_kaydi.md`). 12:14–12:18: G7, G8, G9 1 kolla.
- Sahibi Müzeyyen'i Nadide'ye benzetti, müdür odasını eski mekânların yanında düz buldu → kurallar baştan okundu, eksikler
  (Satırlar, iki zemin, benzemiyor, boy tablosu) kapandı, `istem_kontrol.sh` yazıldı; G3, G5, G7, G8, G9, G10 `red/`'e.
