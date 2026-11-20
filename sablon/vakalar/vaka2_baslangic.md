# VAKA 2 — BAŞLANGIÇ (yeni pencere için)

Tarih: 10 Ekim 2026. **Vaka 1 bitti ve kalıp oldu.** Vaka 2 aynı şablonla, aynı araçlarla,
**daha hızlı** üretilecek. Sahibi süreyi ölçüyor: Vaka 2'nin süresi, sonraki vakalar için ölçü.

## 0. Okuma sırası

1. `CLAUDE.md` (kalıcı kurallar, tuzaklar, komutlar)
2. **bu dosya**
3. `sablon/` — 7 parça, sırayla (özellikle `arsiv/sablon/5_gorsel_sistemi.md` C ve F, `7_uretim_sureci.md`)
4. Örnek olarak: `sablon/vakalar/vaka1_form.md`, `vaka1_diyalog.md`, `vaka1_gorsel.md`
5. Gerekirse geçmiş: `sablon/vakalar/vaka1_gorsel_devir.md` (Vaka 1 görsel işinin tamamı)

## 1. Süre ölçümü

- **Başlangıç = sahibinin "Vaka 2'ye başla" dediği an.** Tarih ve saati aşağıdaki tabloya yaz.
- Her adım bittiğinde (özellikle her **Onay**) tarihi ve saati yaz. Sona kadar doldur.
- Sahibi sonunda bu tabloya bakacak; adım adım ne kadar sürdü görünmeli.

| adım (7. parça) | başladı | bitti | not |
|---|---|---|---|
| 1 Form | 10 Eki 16:52 (TSİ) | 10 Eki 17:02 | başlangıç = "Vaka 2'ye başla" |
| 2 Onay 1 | 10 Eki 17:02 | 10 Eki 17:23 | onay; tek ek: kadınlar en çekici hâlde |
| 3–4 Diyalog + veri + künye | 10 Eki 17:23 | 10 Eki ~17:33 | doğrulayıcı PASS; künye aracı temiz; bağ: "nikâhtan sonra" +2 (K8) |
| 5 Görselsiz tur | 10 Eki ~17:33 | 10 Eki 17:44 | araçlar V2'ye açıldı (Cengo kıyafet seti, gri arka plan/kare, tur, `test_yeni_v2.js`); 6 yol temiz; satır satır ekran denetimi, 6 düzeltme |
| 6–7 Onay 2, hikâye donar | 10 Eki 17:44 | 10 Eki 19:40 | 22 metin notu (hepsi bulanık replik; hikâye değişmedi); soğuk kapanış belirginleşti (+K32); geçici "Vaka 2'den başla" düğmesi |
| 8 Görsel listesi + promptlar | 10 Eki 19:40 | 10 Eki 19:44 | 59 görsel, `vaka2_gorsel.md`; 29 referans `vaka2_referans/` |
| 9–10 Görseller, kontrol, yerleştirme | 11 Eki 09:17 (TSİ) | 16 Eki 16:47 | **Başlangıç = sahibinin yeni pencereye ilk mesajı verdiği an** (sahibinin kararı); o saati yaz. 10 Eki 19:44'ten o ana kadar ara, toplama girmez. İşleme `arac_paket.js` ile |
| 11 Görselli tur | 16 Eki 16:58 | 16 Eki 17:40 | `arac_yeni_tur.js --hepsi` yazıldı (her satır görüntü + döküm); 4 yol × 4 sonuç × 4 karar + soğuk kapanış; 7 sahne düzeltmesi (konuk girişi ×3, K20, Kısası, K31 etiketi, Tolga eli); `--cihaz` temiz (bilinen tek bayrak) |
| 12–13 Onay 3, düzeltmeler | 16 Eki 17:40 | 16 Eki 19:52 | sahibinin tek notu: "yazıda bahsedilen kişiler görünmüyor" → kural (ZORUNLU) + 4 yeni görsel (K33, K34, K35, `lal.kilif`), 4 tanıtım satırına `gir`; iki küçük soru "kalsın" |
| 14 Vaka donar | 16 Eki 19:52 | 16 Eki 20:10 | geçici düğme kapandı; 8 son tur (bütün yollar, tablet, 19 boy) temiz |

### Toplam (aralar ve "sayılmaz" işler hariç)

| bölüm | süre |
|---|---|
| 1–8 (form → görsel listesi, 10 Eki) | 2 sa 52 dk |
| 9–10 görseller (11 Eki 277 dk + 16 Eki 16:33–16:58 25 dk) | 5 sa 02 dk |
| 11 görselli tur | 42 dk |
| 12–13 Onay 3 + 4 ek görsel | 2 sa 12 dk |
| 14 dondurma | 18 dk |
| **Toplam** | **≈ 11 sa 06 dk** |

Ölçülmeyen: G13'ün Gemini'de üretimi (12 Eki sabahı, birkaç dakika). Önceki tahmin 7–10 saatti;
aşan kısım Onay 3'te sonradan istenen 4 görsel (~1,5 sa). Vaka 3'te "adı geçen kişi ekranda"
kuralı adım 3 ve 8'de uygulanırsa bu süre baştan görsel listesine girer, Onay 3'e kalmaz.
Görseller vakanın yarısına yakın (5 sa) — en büyük kalem.

**Adım 9–10 sohbet sohbet (sahibinin isteği: üretim süresi de ölçülür).** Sahibi "Sohbet N'e
başlıyorum" deyince **üretim başladı** yazılır; görselleri gönderince **üretim bitti**; paket
oyuna gömülüp sahibine gösterilince **işleme bitti**. ChatGPT dosya adlarındaki saat (ilk ve son
görsel) üretim süresini ayrıca doğrular. Sohbetler arasındaki boşluk da tablodan okunur; sahibi
"ara" demedikçe çalışma süresidir.

| sohbet | görseller | üretim başladı | üretim bitti | işleme bitti | not |
|---|---|---|---|---|---|
| 1 Peri | G1–G13 | 11 Eki 09:17 | 11 Eki 09:46 | 11 Eki 10:00 | G8–G9 Grok'ta (912×1136, araç büyüttü; ölçek tuttu). G1 boydan geldi → elle kırpıldı. Krema/örtü için `peri_beyaz` kesim profili eklendi. G10–13 boyun cebi elle temizlendi. Sonra sahibi çorap bandını kaldırttı: G8–G12 Grok'ta yeniden (bantsız) gömüldü; G13 limite takıldı; 12 Oct 07:56'te **Gemini**'de üretilip gömüldü (geçici G12 kaldırıldı) |
| 2 Cengo | G14–G18 | 11 Eki 10:54 | 11 Eki 11:05 | 11 Eki 11:08 | hepsi ChatGPT; G14 önce ayrı kontrol edildi. G15–G16'da beyaz yaka ucu zeminle gidiyordu → `cengo_beyaz` profili. Saç halesi baş kutusunda elle. Düzeltme promptu gerekmedi |
| 3 Müjgan | G19–G21 | 11 Eki ~11:08 (Sohbet 2 bitince; ayrıca bildirilmedi) | 11 Eki 11:20 | 11 Eki 11:23 | G19 önce ayrı kontrol: saç bal-kumraldı, metin "platin" diyor → bir düzeltme. G21'de sola uzanan el satırın zemin örneğini bozdu → `konuk_sag` profili. Boy 0.82 (uzun boylu) |
| 4 Defne | G22–G25 | 11 Eki 11:25 | 11 Eki 11:32 | 11 Eki 11:38 | G22 önce ayrı kontrol; düzeltme yok. Koyu saçın kıvrımındaki bej hale elle (ten korunarak; ilk denemede G24'ün göz akı da gidiyordu). Boy 0.80 |
| 5 Lâl | G26–G28 | 11 Eki 12:01 | 11 Eki 12:10 | 11 Eki 12:13 | G26 önce ayrı kontrol. Üçünde de gözlük sapında yazı benzeri iz → elle silindi (düz siyah yüzey). G28 parmağı sol kenarda → `konuk_sag`. Boy 0.80 |
| 6 Tolga | G29–G30 | 11 Eki 12:14 | 11 Eki 12:19 | 11 Eki 12:21 | G29 önce ayrı kontrol; düzeltme yok. Kesim varsayılan `konuk`. Boy 0.90. G30'un havadaki eli sağ figür yuvasında ekran dışında kalıyor (adım 11'de bak) |
| tekli konuklar | G31–G34 | 11 Eki ~12:21 (Sohbet 6 bitince) | 11 Eki 12:28 | 11 Eki 12:32 | sıra karışık geldi (3.=Saadet, 4.=Sarkis), görselden düzeltildi. Beyaz gömlek/bez için `konuk_beyaz`. Gülsüm ve Saadet saç halesi elle. Boy: Gülsüm 0.80, Bülent 0.94, Sarkis 0.80, Saadet 0.72 |
| 7 Atölye | G35–G37, G44 | 11 Eki 12:34 | 11 Eki 12:44 | 11 Eki ~12:50 | G35 önce ayrı kontrol. G44: siyah uzun kol Lâl'i çağrıştırıyordu (satır Gülsüm'ün) → bir düzeltme |
| 8 Otel | G40 → G41, G42 | 11 Eki 13:12 | 11 Eki ~13:19 | 11 Eki 13:22 | G40 önce ayrı kontrol: pasta 4 kattı → bir düzeltme (5 kat). G42 buzdolabındaki marka levhaları elle silindi |
| 9 Terzi | G43 → G45 | 11 Eki 13:23 | 11 Eki ~13:28 | 11 Eki 13:29 | G43 önce ayrı kontrol; düzeltme yok |
| Sokak, Salon | G38, G39 | 11 Eki 13:31 | 11 Eki ~13:34 | 11 Eki 13:36 | vale kürsüsündeki küçük rozet elle silindi; plakalar görünmüyor |
| kareler (her biri ayrı sohbet) | G46–G59 | 11 Eki 13:38 (K19) | | | |
|   K19 | G46 | 11 Eki 13:38 | | 11 Eki 13:46 | Cengo eksikti (metin "Cengo kravatına bakıyor") → bir düzeltme |
|   K20 | G47 | | | 11 Eki 13:55 | ilk hâlde masanın açık yüzü kapıya bakıyordu (Saadet Peri'yi görürdü) → kamera masanın arkasına alındı, ön panel kapalı |
|   K21 | G48 | | | 11 Eki 14:02 | düzeltme yok; 6 kişi, eller doğru |
|   K22 | G49 | | | 11 Eki 14:09 | düzeltme yok |
|   K23 | G50 | 16 Eki 16:34 | 16 Eki ~16:45 | 16 Eki 16:47 | 11 Eki: ChatGPT reddetti. 16 Eki: hem Grok hem ChatGPT üretti; sahibi **ChatGPT'ninkini** seçti (mutfak G42'yle aynı, Peri satırdaki gibi sinirli; Grok'unkinde köprü kırmızı Golden Gate'ti). Pasta oturulmuş değil yıkılmış — kabul. Buzdolabındaki 4 marka levhası elle silindi |
|   K24 | G51 | 11 Eki 14:40 | | 11 Eki 14:44 | ayakkabılar yeşildi → bir düzeltme (kırmızı stiletto) |
|   K25 | G52 | | | 11 Eki 14:50 | düzeltme yok |
|   K26 | G53 | | | 11 Eki 14:55 | düzeltme yok |
|   K27 | G54 | | | 11 Eki 15:00 | düzeltme yok |
|   K28 | G55 | | | 11 Eki 15:05 | düzeltme yok |
|   K29 | G56 | 11 Eki 15:34 | | 11 Eki 15:39 | düzeltme yok |
|   K30 | G57 | | | 11 Eki 15:43 | düzeltme yok |
|   K31, K32 | G58, G59 | | | 11 Eki 15:52 | düzeltme yok (K32'de tepsi örtüsü çizgili, K20'de dantelli — küçük fark, kabul) |

**Ara 8:** 11 Ekim 15:55 → 16 Ekim 16:33 (sahibinin yeni pencereye ilk mesajı). Arada G13 Gemini'de üretildi (12 Eki 07:56); LoRA denemesi ve 16 Ekim cihaz düzeni oturumu süreye girmez. Ara toplama girmez.

**Ara 7:** 11 Ekim 15:55'te K32'den sonra gün kapandı (sahibi). Kalan G13 ve K23 yarın Grok'ta. Ara toplama girmez.

**Ara 6:** 11 Ekim 15:07'te K28'den sonra ara verildi (sahibi). Ara toplama girmez. Süre 11 Oct 15:34'te (K29) yeniden başladı.

**Ara 5:** 11 Ekim 14:15'te K22'den sonra gün kapandı (sahibi). Ara toplama girmez. Süre 11 Oct 14:40'te (K24) yeniden başladı.

**Ara 4:** 11 Ekim 12:56'te Sohbet 7 (Atölye) bitince ara verildi (sahibi). Ara toplama girmez; sahibi başladığını haber verince süre yeniden başlar. Süre 13:12'te yeniden başladı.

**Ara 3:** 11 Ekim 11:39'te Sohbet 4 bitip Sohbet 5'ten (Lâl) önce ara verildi (sahibi). Ara toplama girmez; sahibi "Sohbet 5'e başlıyorum" deyince süre yeniden başlar. Süre 11 Oct 12:01'te yeniden başladı.

**Ara 2:** 11 Ekim 10:23'te Sohbet 1 bitip Sohbet 2'den önce ara verildi (sahibi). Ara toplama girmez; sahibi "Sohbet 2'ye başlıyorum" deyince süre yeniden başlar. Süre 11 Ekim 10:54'te yeniden başladı.

**Ara:** 10 Ekim 19:44'te ara verildi (sahibi). Ara süresi toplama girmez; yeniden başlanınca saat yazılır. Aradan sonra 19:54'te G1'in (Peri, tayyör) promptu ve referansları sahibine verildi; sahibinin isteğiyle **süreden sayılmaz**. Toplu görsel işleme aracının (`kaynak/arac_paket.js`) yazımı da sahibinin isteğiyle **süreden sayılmaz**; kalan 59 görsel bu araçla, paket paket işlenir.

## 2. Vaka 1'de zaman nereye gitti (tekrarlanmayacak)

Vaka 1'de vaktin çoğu **Onay 3'te**, sahibinin oynarken tek tek bulduğu görsel sorunlarına gitti.
Hepsi baştan önlenebilirdi:

| sorun (Vaka 1) | Vaka 2'de nasıl önlenir |
|---|---|
| Cengo konuğa konuşurken Peri'ye bakıyor gibi | SATIR-3, SATIR-4 (`{kime: peri}`) |
| Konuk Peri'ye konuşurken Cengo karşısında | SATIR-3, SATIR-4 (`{kime: peri}`) |
| İki Cengo aynı ekranda | SATIR-31 (aşağıda §4) |
| Dinleyenin yüzü bir önceki satırdan kalmış (kızgın Peri) | SATIR-16 (`{peri: …}` / `{cengo: …}`) |
| Kızgın konuk sahneye "zaten kızgın" giriyor | SATIR-21 (`{mekan}`, `{gir: x, gi: …}`) |
| Uzun konuşma hep aynı arka planda | SATIR-23 |
| Kovalamacada karelerin sırası/kişisi yanlış | SATIR-24, SATIR-22 (`{gizle: cengo}`) |
| Islanan/kirlenen Peri sonraki satırda kuru | SATIR-7 |
| Metin bir nesne anıyor, ekranda yok (telefon, istavrit, tel) | SATIR-1, SATIR-25 |
| Figürü olmayan konuşan (boyacı, asistan) | SATIR-6 |
| Yanlış kıyafetle sahne (önlüklü Kemal borç istemeye) | SATIR-7 |
| Saçta grilik (kesim halesi) | GOMME-5 (§4) |
| Konuk çok büyük/küçük | GOMME-7, GOMME-13 (`boy`) |
| Görsel oranı karışık | ISTEM-4 |
| Künye boş kaldı | SUREC-13 |
| Promptlar mekânla çelişiyor (olmayan askı, yanlış masa) | ISTEM-29 |
| Referans dosyaları sonradan istendi | ISTEM-15 (`referans/G<n>-<sıra>_ad.png`) |

## 3. Adım adım ne yapacaksın (7. parçaya ek)

**Form (adım 1):** SUREC-11 (6. parçanın — artık `sablon/6_vaka_formu.md` — bütün başlıkları + künye tablosu + yeni yan
karakterlerin görünüş önerisi; Onay 1).

**Diyalog (adım 3):** SATIR-26, SATIR-25.

**Veri (adım 4):** SUREC-13 — `arac_diyalog.js <dosya> V2`; künye `yeni/kisiler.json`;
`node arac_kunye_denetim.js yeni` temiz.

**Araçları Vaka 2'ye aç (adım 5'ten önce, ~1 saat):**
- `arac_yeni_tur.js` şu an yalnız Vaka 1'i oynuyor → Vaka 2'yi de oynasın.
- Vaka 1 → Vaka 2 geçişini dene (V1 bitince V2 açılıyor mu, kayıt doğru mu).
- `test_yeni_v1.js`'in Vaka 2 kardeşi gerekiyorsa yaz.

**Görsel listesi (adım 8):** SUREC-19 (kalıp ISTEM-8, oran satırı ISTEM-4, referanslar ISTEM-15).

**Görsel gelince (adım 10):** sahibine göndermeden önce teknik denetim — GOMME-7, GOMME-5.

## 4. Görselli tur denetimi (adım 11) — her sahne, her satır

- Ekranda kaç figür var, aynı figür iki kez var mı?
- Konuşan kim, karşısında kim; kime konuşuyorsa o mu karşısında?
- Dinleyenin yüzü bu satıra uyuyor mu (önceki satırdan kalmış mı)?
- Metinde anılan nesne/hareket görünüyor mu?
- Arka plan/açı hikâyedeki duruma uyuyor mu (kapı açık mı, kim ayrıldı)?
- Saç kenarı temiz mi, boy doğru mu?
- Yer etiketi doğru mu (ara sokak / iskele)?

## 5. Sahibiyle çalışma biçimi

- Sahibiyle çalışma biçimi — SUREC-34.
- Kanona ekleme — KAR-1. Metindeki küçük netleştirmeleri önerip uygula.
- Git — SUREC-7. Her değişiklikten sonra — KOD-3 (doğrulayıcı, iki derleme — eski `index.html` md5 aynı, testler, gerekiyorsa tur).
- **Görsel sorunu anında söylenir** (11 Ekim, Vaka 2 Sohbet 1 dersi) — DENETIM-50.
- **Tutarlılık sorunu "beğeni" diye geçilmez** — DENETIM-51; rötuşun sınırı — DENETIM-52.
