# KURALLARI TEK DOSYADA TOPLAMA — PLAN VE DURUM

> **Yeni pencere: önce bunu baştan sona oku.** 16 Kasım 2026 akşamı başlayan işin bütün kaydı burada. Sahibi (Barbaros)
> işi "çok kritik" saydı ve hiçbir ayrıntının unutulmamasını istedi. İş başka pencerede, aşağıdaki **Sıradaki adım**dan sürer.
> Kök `CLAUDE.md` ve `kaynak/DEVIR.md` en üstte buraya işaret eder.

> ## ▶️▶️▶️ YENİ PENCERE: MADDE 3 BURADAN SÜRER (21 Kasım 2026 gece geç; sahibi: "geri kalanları yeni pencerede yapacağım")
> **Durum:** "Kolay ve faydalı" 20 aday bitti (18 yazıldı, 2'si arşiv işine). "Zor ama değerli"den 2'si yazıldı, `main`'de:
> `e2ac785` YAPI-25/KOD-75 (K19: doğru kanıtın Cengo satırı + ifadesi; şimdilik UYARI — V1–V5'te yok) ve `aae4326` KOD-38 (kapı veriyi
> diyaloglardan geçici kopyaya yeniden yazar, fark = elle düzenleme → durur; araçla yazılamayan eski biçimli V1–V5 atlanır ve bildirilir;
> `arac_diyalog.js`'e `VERI_DIZIN` ortam değişkeni eklendi). Codex veriye dokunmuyor (yalnız `uretim/vN/`; git kaydında 0 dokunuş).
>
> **(3) TON-9 / ARAYUZ-28 YAZILDI (sahibi: "Yaz", 21 Kasım 2026):** `dogrulayici.js yeni` yeni **K21** (yalnız UYARI): 110 harfi geçen
> replik (sahneler + ipucu sahneleri + açılış; anlatı `not` hariç) ve vaka ortalaması 45'in altı. Bugün 25 uyarı: V1 3, V2 1, V3 4, V4 4, V5 1,
> V6 1, V7 8, açılış 1 uzun replik; V1 (36) ve V2 (37) ortalaması düşük. Bilerek V8'e 120 harf sokuldu → yakalandı. Eski oyun etkilenmez.
> **(4) ARAYUZ-16 YAZILDI (sahibi: "Yaz"):** K15 ekran etiketinde 2'den fazla kişi → HATA (arac_diyalog yerine doğrulayıcı: kapı
> zaten koşuyor). Bugün 0 ihlal; bilerek V6'ya `peri+cengo+jale` yazıldı → durdu.
> **(5) KOD-44 YAZILDI (sahibi: "Yaz"):** K15 Cengo'nun büro satırlarını (cengo_replik, cengo_kanit_replik) kapanışın arka/set/cset'iyle
> denetler — ifade o kıyafette yoksa HATA. V6–V8'de 24 satır, 0 ihlal; bilerek V7 karar + V8 kanıt ifadesi bozuldu → durdu.
> **Bulgu (sahibine söylendi):** `yuz` (dinleyenin yüzü, `peri.x+cengo.y`) hiçbir yerde denetlenmiyor; 524 satır ölçüldü, hepsi geçerli.
> Ayrı aday olarak sorulabilir.
> **(6) KOD-77/YAPI-34 YAZILDI (sahibi: "Yaz"):** `dogrulayici.js yeni` yeni **K22** (UYARI): metindeki tutar (rakam ya da sayı sözü +
> ₺/lira/TL, ya da "bin"/"milyon"lu sayı; "buçuk", "yirmişer" okunur) `sablon/vakalar/vakaN_form.md` §17 tablosunda yoksa. 8 vakada 111 tutar;
> tek uyarı V7 "Doksan lira, Cengo. Deftere yaz." (tabloda kartpostal 100 ₺) — sahibine söylendi, düzeltme Oğuz Bey'in/sahibinin işi.
> Bilerek V8'e "yetmiş beş bin" ve "12.500 ₺" eklendi → ikisi de uyarıldı.
> **(7) YAPI-23 YAZILDI (sahibi: "Yaz"):** K20 — `karar_soru` varsa her kararda `secenek`, `secenek` varsa `karar_soru` (yarımsa HATA);
> ikisi de yoksa UYARI (eski düzen; bugün V1–V5, 5 uyarı). Bilerek V7'de bir SEÇENEK, V8'de karar_soru silindi → ikisi de durdu.
> Sahibi "ne kadar kaldı" diye sordu: zor ama değerli 21, istem 16 (toplu onay önerildi), yazmaya değmez 15 (tek soru).
> **(8) YAPI-16 YAZILDI (sahibi: "4–9 uyarı olsun"):** kural metni 4–6 → **4–9 replik** (ölçüm: 32 yüzleşmeden 15'i 6'yı geçiyordu, V4–V8
> 7–9 yazılmış); `6_vaka_formu.md` de. K19 her yüzleşmede `not` dışı replik sayısı 4–9 değilse UYARI; bugün 1 (V1 Tuba 3). Bilerek
> V8 dogru 11'e çıkarıldı → uyarıldı.
> **(9) TON-6 SİLİNDİ (sahibi, 22 Kasım 2026: "Cengo ya da Peri sahneler ne kadar gerektiriyorsa o kadar konuşmalı"; yeniden yazmak bir şey
> kazandırmıyorsa sil):** KURALLAR.md'den çıktı; kaynağı (HAM 1721) `harita_TON.tsv`'de ESKIDI, kayıt `kayit_sinif.tsv`'de GECMIS.
> (`adim4/uyg_*.tsv`'deki TON-6 aday satırı tarihî kayıt, dokunulmadı.)
> **(10) TON-12 YAZILDI (sahibi: "Yaz"):** `dogrulayici.js yeni` yeni **K23** (UYARI): "çeyrek / yarım saat / sayı (+ dakika) kala"
> (vakalar, açılış, künye). Bugün 0 (tek "kala" V2 "düğüne üç gün kala", doğru). Bilerek V8'e üç saat + bir süre cümlesi → üçü uyarıldı,
> süre ve "çeyrek geçe" uyarılmadı.
> **(11) RAF-65 YAZILDI (sahibi: "Yaz"):** K19 "Dosyanın tamamı" (`kim_yapti.hikaye`) yoksa ya da 5–7 paragraf değilse UYARI. Bugün 0
> (V1–V3 6, V4–V8 5). Bilerek V7 2 paragrafa indirildi, V8'de silindi → ikisi uyarıldı.
> **(12) BILGI-17 YAZILMADI (sahibi: "Yazma"):** yeni oyunda ipucunda `gorsel`/`gosterir` alanı yok (resim sahne karesi; ne gösterdiği veride
> yazılı değil) — program karşılaştıramaz; görsel denetiminde göz sorar (hatırlat 8, 10 kalır).
> **(13) YAPI-14 YAZILDI, YAPI-29/37 YAZILMADI (sahibi: "Önerilerini uygula"):** `test_yeni_kimyapti.js` yeni blok — her vakada (öncekiler
> oynanmış) doğru/zayıf/yanlış sonucu, ücret sırası, suçlamadan sonra kararların hepsi açık; 8/8 geçer; bozuk kopyada V7 ücret sırası →
> yakalandı. YAPI-29/37: yeni oyunda kasa yok, karar kapısı yok (K19 `gate: "yok"`) → dört karar hep açık, zorlanma olmaz; "dürüst" mü
> yargısı insanın (hatırlat 1 kalır).
> **(14) KAR-19 YAZILDI (sahibi: "Yaz"):** aynı blokta her vakada yanlış/zayıf/doğru suçlama Cengo bağını değiştirmez; 8/8 geçer; suçlamaya
> bağ ekleyen yamayla 8/8 yakalandı. Uygulayıcı "yok" → program.
> **(15) YAPI-38 YAZILDI (sahibi: "Yaz"):** HUKUM listesi `arac_akis_denetim.js`'ten `dogrulayici.js`'e taşındı (araç oradan alır); K20 yeni
> oyunda kararın kendisi, `sonuc_<karar>` sahnesi ve anı defterinde hüküm sözü → HATA. Sahne diyaloğu taranmaz. Bugün 0; bilerek V7 sonuç +
> Cengo satırı + V8 defter → üçü durdu, sahnedeki "Haklıydın" geçti. 
> (16) BILGI-9 YAZILMADI (sahibinin kararı, 22 Kasım 2026): zincir defterini commit kapısı zaten denetliyor (`arac_kapi.js` → `arac_sizinti_tur.js` "zincir" ekranı, vaka değişince kendiliğinden). 
> (17) KAR-4 YAZILMADI (sahibinin kararı, 22 Kasım 2026): 22 commit'te ad hiç değişmedi; diyalogdaki ad değişimini söz farkı kapısı zaten durdurur (KOD-35).
> (18) GOMME-13 YAZILDI: doğrulayıcı K20 — gömülü konuk figürünün `gorseller.json → boy`'u yoksa hata (ekran sessizce 1 veriyordu). Bugün 29 konuk, 0 eksik; Gizem'in boyu silinince durdu.
> (19) SATIR-7 YAZILMADI (sahibinin kararı, 22 Kasım 2026): mekanik kısmı K15 zaten denetliyor (satırdaki `set`/`cset` var mı, ifade o sette var mı); "değişim metinde söyleniyor mu, resim o hâlde mi" göz işi (hatırlat 8, 11).
> (20) SATIR-19 YAZILMADI (sahibinin kararı, 22 Kasım 2026): İLK GÖRME/DURUŞ zaten kapıda (`arac_kapi.js`); `⚙ akış` notu V4–V8'de karar_soru dışında her sahnede var, yazım yardımı, hata yakalamaz.
> (21) SATIR-35 YAZILDI: doğrulayıcı K24 (uyarı) — `vakaN_gorsel.md`'deki figür ifadesini (K15'in bütün veriden topladığı: `i`, `peri`, `cengo`, `yuz`, `gi`, büro satırları) hiçbir satır istemiyorsa; `normal` sayılmaz, backtick'siz eski liste (V1) atlanır. Bugün V2'de 2, V3'te 7 (eski "her kıyafete yedi ifade" döneminden, gerçekten kullanılmıyor), V6'da 0; sahte G999 eklenince uyardı.
> (22) DENETIM-9 YAZILMADI (sahibinin kararı, 22 Kasım 2026): onaylı resimde kapı tarz + yüz araçlarını zaten koşar, biri geçmezse kaydetmez (`.claude/kapi_hook.js` → ARAC); kayda yazma alışkanlık, V6 DURUM'da düzenli.
> (23) DENETIM-24 YAZILMADI (sahibinin kararı, 22 Kasım 2026): oran istem denetiminde, figür boyu paket aracında, zemin GOMME-16'da; kadraj/ölçek göz işi. Onaylı 203 resimden 20'si 1024×1536 (2:3 kart) — kural listesine "2:3 → 1024×1536 (kart)" eklendi.
> (24) CODEX-21 YAZILMADI (sahibinin kararı, 22 Kasım 2026): liste fazlasını K24, gömülmemiş anahtarı derleme + `test_yeni_arayuz.js` yakalıyor; "satır istiyor, listede yok" yönü V2/V3'te 0, V6'da 3 aday — üçü de kare arkasında (figür görünmüyor), A6/A8 önceki vakadan yeniden kullanım; gerçek eksik 0.
> (25) CODEX-19 YAZILDI: `uretim/dongu.sh` başta Python kütüphanelerine, `codex --version`'a ve `codex login status`'a bakar; eksikse listeyi basar, çıkış 3, döngü başlamaz (PY/CODEX değişkeniyle bozuk araç verilince ikisini de yakaladı).
> (26) CODEX-22 YAZILDI: `uretim/dongu.sh` ikinci döngüyü durdurur — başlangıçtaki kilit temizliği çalışan döngünün kilitlerini de siliyordu (iki Codex aynı resme, boşa kota). `kilit/DONGU`'da süreç numarası: yaşıyorsa çıkış 4, ölmüşse devralır; çıkışta kendi kilidini siler. Canlı ve ölü süreçle denendi. 
> (27) CODEX-5 YAZILMADI (sahibinin kararı, 22 Kasım 2026): Codex `--approve-for-me` ile çalışma klasörüne (v<N>) yazan korumalı alanda; AGENTS.md ve .git dışarıda. Kayıtlarda ihlal yok; denemeyle doğrulanmadı (kota). **ZOR ADAYLAR BİTTİ.** **SIRADAKİ:** istem denetimleri (16) ve "yazmaya değmez" (15) — sahibi toplu/tek tek kararını henüz vermedi.
> (28) "YAZMAYA DEĞMEZ" 15'İN HEPSİ YAZILMADI (sahibinin kararı, 22 Kasım 2026, tek soru): CODEX-8, CODEX-12, CODEX-13, KOD-6, KOD-29, KOD-49,
> KOD-79, SATIR-6, SATIR-23, SATIR-33, YAPI-32, SHORTS-3, SHORTS-26, SEZON-5, SEZON-21 — gerekçeler yukarıdaki listede. **SIRADAKİ:** istem denetimleri (16), ISTEM-5'ten.
> (29) İSTEM A GRUBU YAZILDI (ISTEM-5, ISTEM-6, ISTEM-21): `istem_kontrol.sh` figürde 'DİKEY 4:5', 'Uyluk ortasından', 'burnu kadrajın soluna';
> Peri figüründe 'Çekicilik:'. V6'da 53/53, 53/53, 8/8 geçiyordu; bozulmuş Peri istemi durdu. **SIRADAKİ:** istem B grubu (13, tek tek):
> ~~ISTEM-12~~ (YAZILDI, 30), ISTEM-14 (29/30), SATIR-17 (17/30), ISTEM-19 (kartta "YALNIZ kıyafetin" 0/8), ISTEM-30, ISTEM-35, ISTEM-43, ISTEM-44,
> SATIR-8, SATIR-10, KAR-25, SINIR-3, ARAYUZ-6.
> (30) ISTEM-12 YAZILDI: `istem_kontrol.sh` yeni karakter temelinde (gövde referansı var, kendi baş kırpığı yok) 'Başı bilerek silindi' arar. V6'da eksik görünen 2 istem (G23, G23z) Gizem'in — dönen karakter, kendi baş kırpığıyla; gerçekten yeni 13 temelin 13'ü geçiyor; bozulmuş G3 durdu. ~~SIRADAKİ: ISTEM-14~~
> (31) ISTEM-14 YAZILDI: `istem_kontrol.sh` varyantta (birinci referans onaylı resim, başlıkta "temel" yok) "AYNISI" ve "Değişen" arar. V6'da 55 varyantın hepsi geçiyor; bozulmuş G24 durdu. ~~SIRADAKİ: SATIR-17~~
> (32) SATIR-17 YAZILDI: `istem_kontrol.sh` varyantta 'Bu figürü/ifadeyi … ayıran:' satırını arar. V6'da 55 varyantın hepsi geçiyor; bozulmuş G24 durdu. Ayrımın resimde gerçekten görünmesi gözde kalır. ~~SIRADAKİ: ISTEM-19~~
> (33) ISTEM-19 YAZILDI: `istem_kontrol.sh` referansında kart olan her istemde (kart afişi hariç) İstem metninde 'YALNIZ kıyafetin' arar. V6'da 10 istem (G17, G23, G23z, G27–G33) bunu yalnız referans listesinde yazmış — Codex'e yalnız İstem bölümü gider, yani not modele ulaşmamış; resimler onaylı, geçmişe dokunulmadı. Bozulmuş G34 durdu. ~~SIRADAKİ: ISTEM-30~~
> (34) ISTEM-30 YAZILMADI (sahibi): 'görünmesin' V3+V6'da hiç yok; 'görünmüyor' 20 yerde, hepsi yerinde. Tehlike anlamda (kanondaki şeyi saklatmak), söz yasağı yakalamaz. Gözde kalır. ~~SIRADAKİ: ISTEM-35~~
> (35) ISTEM-35 YAZILDI: `istem_kontrol.sh` ara karede (başlığı 'Detay' olan yakın plan hariç) 'TAM <n> kişi' arar; kalabalıkta yüzü seçilenler sayılır. V3+V6'da 61 ara karenin tek eksiği V6 G76 (düğün; onaylı, dokunulmadı); bozulmuş G65 durdu. Kişi başına referans/kıyafet parantezi gözde. ~~SIRADAKİ: ISTEM-43~~
> (36) ISTEM-43 YAZILMADI (sahibi): V3+V6'da yüzde yalnız 2 istemde, ikisi de görsel tarifle birlikte; kuralın kendi örneğinde 'üst %80' var — '%' yasağı doğru cümleyi de durdurur. Gözde kalır. DENETIM-24 çelişkisi madde 4 listesinde. ~~SIRADAKİ: ISTEM-44~~
> (37) ISTEM-44 YAZILDI: `istem_kontrol.sh` Peri/Cengo dışı figürde 'dış çizgisi toplu' ya da 'eşarbın içinde' arar. V6'da 36 yan karakter isteminin hepsi geçiyor; V3'te 9 eksik (Gizem, kuraldan önce 6 Kasım; onaylı, dokunulmadı). Bozulmuş G24 durdu. ~~SIRADAKİ: SATIR-8~~
> (38) SATIR-8 YAZILMADI (sahibi): mekanik kısmı zaten iki denetimde (Peri/Cengo'da kart referansı; ISTEM-19 'YALNIZ kıyafetin'). 'Kartla birebir aynı' cümlesi V6'da 49'un 10'unda; öbürleri başka sözle ('kart referansındaki ütülü hâl') — 39 yanlış alarm. Satırın hâli anlam işi, gözde. ~~SIRADAKİ: SATIR-10~~
> (39) SATIR-10 YAZILMADI (sahibi): kapı zaten diyalog değişen her commit'te satır–resim aracını koşuyor, İŞ/SOR açıkken diyalog kaydedilemiyor — istemden önce kapanmış oluyor. İstem commit'inde ayrıca koşturmak aynı turu ikinci kez yapar. ~~SIRADAKİ: KAR-25~~
> (40) KAR-25 YAZILMADI (sahibi): V3+V6'da büro referanslı, kapısı açık 4 kare; G90–G92 koridor referansı ve sözüyle tam. G87 'kapı açık' der ama kamera kapının ağzından içeri bakar, ardı görünmez — program bunu ayırt edemez, tek uyarısı yanlış olurdu. Hatırlatmada kalır. ~~SIRADAKİ: SINIR-3~~
> (41) SINIR-3 YAZILMADI (sahibi): 'Çekicilik:' satırını ISTEM-21 zaten arıyor; V3+V6'da 31 Peri figürünün hepsinde dekolte yazılı. 'Üst düğmeleri açık' yalnız kapalı yakalı parçada gerekir; program 'gömlek' sözünden ayıramaz (V6'nın açık, düğümlü gömleği). Seviye gözde. **SIRADAKİ:** ARAYUZ-6.
>
> **Konuşma biçimi (aynen sürdür):** her aday TEK TEK; çok kısa, sade Türkçe, bir somut örnekle; "program şunu yapar"; bugünkü durum
> (ölçerek); önerim. Sahibi "Yaz" deyince: yaz → bilerek hatayla dene → uygulayıcı satırı (`*Uygulayıcı:*`) → üç sayaç `hata: 0`
> (`arac_uygulayici.js yaz` + `say`, `arac_kurallar.js say`, `adim3/tasima_say.js`) → PLAN'a bir satır → commit (`kaynak/` değişirse kapı
> testleri + V6–V8 denetimini koşar, 10 dk'yı geçebilir: arka planda koş, sahibine "kapı çalışıyor, sorun yok" de) → `git push origin HEAD:main`.
> Denetim vakadan bağımsız: V1–V5 eski düzende tutmuyorsa vaka no istisnası YAZMA; uyarı ver ya da biçime göre atla, sebebini yaz.
>
> **Kalan adaylar (Claude'un gruplaması, sahibine tek tek getirilecek):**
> - *Zor ama değerli (önce bunlar, bu sırayla):* TON-9/ARAYUZ-28 (yukarıda) · ARAYUZ-16 (ekran etiketinde 2'den fazla kişi → arac_diyalog
>   durdurur) · KOD-44 (Cengo karar/kanıt repliğinin ifadesi kapanış setinde var mı) · KOD-77/YAPI-34 (metindeki ₺ tutarları fiyat tablosunda mı)
>   · YAPI-23 (`## sahne karar_soru` ve her kararın `**SEÇENEK:**` satırı zorunlu) · YAPI-16 (yüzleşme 4–6 replik, uyarı) · TON-6 (her sahnede
>   Cengo'nun en az bir repliği, uyarı) · TON-12 ("… kala" saat sözü) · RAF-65 (`## hikaye` 5–7 paragraf) · BILGI-17 (ipucu görseline
>   `gosterir` zorunlu, K1 yeni oyunda) · YAPI-14, YAPI-29/37 (Kim yaptı? ve "kirli karara zorlamaz" testleri bütün vakalara) · KAR-19 (suçlama
>   cengoBag'i değiştirmez, test) · YAPI-38 (HUKUM listesi yeni oyunun sonuç sahnelerine) · BILGI-9 (tahta testi yeni defterZincir'e) ·
>   KAR-4 (kalıcı figür adı değişmez) · GOMME-13 (her konuk figürünün `boy` değeri) · SATIR-7 (kıyafet hâli tablosu eksiksiz) · SATIR-19
>   (sahne başında `⚙ akış:`) · SATIR-35 (her figür resminin en az bir satırı) · DENETIM-9 (onaylı her resmin tarz/yüz/benzerlik GEÇTİ satırı)
>   · DENETIM-24 (üretilen resmin piksel boyu türüne uyar) · CODEX-21 (LISTE.md ↔ vakaN_gorsel.md eşliği) · CODEX-19 (dongu.sh başında
>   bağımlılık + `codex login status`) · CODEX-22 (dongu.sh kilit dosyası) · CODEX-5 (Codex sonrası vaka klasörü dışında değişiklik var mı).
> - *İstem denetimleri (`istem_kontrol.sh`, çoğu kolay):* ISTEM-5 (figürde "DİKEY 4:5", "Uyluk ortasından") · ISTEM-6 ("burnu kadrajın
>   soluna" biçimi) · ISTEM-12 (yeni temelde "Başı bilerek silindi", kişi resmi referansı yok) · ISTEM-14 (varyantta 1. referans onayli/G<temel>,
>   "Değişen tek şey poz ve ifade") · ISTEM-19 ("Kart YALNIZ kıyafetin") · ISTEM-21 (Peri'de "Çekicilik:") · ISTEM-30 ("görünmesin" bayrağı)
>   · ISTEM-35 ("Kadrajda TAM n kişi" ↔ diyalog) · ISTEM-43 (kadraj yüzdeyle yazılmaz — DİKKAT: DENETIM-24 "%20" ile çelişki, madde 4) ·
>   ISTEM-44 (yeni yan karakterde "saçın dış çizgisi toplu") · SATIR-8 (konuk istemlerinde kart referansı) · SATIR-17 (ifade varyantında
>   "Bu ifadeyi … ayıran") · SATIR-10 (satır–resim İŞ sayısı 0 değilse istem üretilmez) · KAR-25 ("kapı"+"büro" → buro_koridor.jpg) ·
>   SINIR-3 (Peri'de "üst düğmeleri açık" — önce gözden geçirme sayfasında sorulabilir, ISTEM-20/38 gibi) · ARAYUZ-6 (arka plan 3:4; ISTEM-3
>   istem tarafını zaten yapıyor, kalan resim tarafı).
> - *Yazmaya değmez olabilir (sahibine kısaca sor, önerim "yazma"):* CODEX-8, CODEX-12, CODEX-13 (dongu.sh kayıt/süre bayrakları) · KOD-6
>   (Bash'te doğrulayıcıya boru — artık kapı git kancasında) · KOD-29 (kapıda --tablet turu; süre) · KOD-49 (görsel tablosu ↔ kareler) · KOD-79
>   (sol=sağ figür) · SATIR-6, SATIR-23, SATIR-33 (tur/döküm bayrakları) · YAPI-32 (ücret kademeleri; V6+ diyor — vakadan bağımsız değil) ·
>   SHORTS-3, SHORTS-26 (Shorts — başka pencerenin işi, dokunma) · SEZON-5, SEZON-21.
> Tam liste komutu: `awk -F'	' 'FNR>1 && $0 ~ /EVET/ {print $1" | "$4}' sablon/kurallar/adim4/uyg_*.tsv` (yazılanları çıkar: aşağıdaki kutular).
>
> **Bekleyen dış soru:** Oğuz Bey'e — V8'de Tarkan = Nihat mı (aşağıdaki kutu). **Madde 3'ten sonra:** eski oyunun arşivi (ayrı iş; 🛠 DEV_MOD
> düğmesi sökülür, KOD-36/KOD-15), madde 4 (çelişkiler; KOD-21 alert, ISTEM-43 ↔ DENETIM-24), madde 5, kuralları gözden geçirme sayfası
> (ilk soru ISTEM-20/38 "Peri'de çorap yok"), sonra üretime dönüş. Oğuz Bey'in bilgisayarında bir kez `git config core.hooksPath .githooks`.
>
> ## ✅ 16'SI YAZILDI, 2'Sİ SAHİBİNİN CEVABINI BEKLİYOR (21 Kasım 2026 gece)
> Yazıldı ve bilerek hatayla sınandı: kapı (CODEX-17, CODEX-25, KOD-1), `istem_kontrol.sh` (CODEX-4, ISTEM-3/9/10/22/39/46, KAR-24 —
> V7'nin 27 istemi yine geçiyor), `dogrulayici.js yeni` yeni **K20** (sigara, bağ ±2, araştırma hakkı, kapanış iki hâl, webp),
> `arac_diyalog.js` (SATIR-36), `arac_paket.js --yaz` (yarım set). KAR-24'e "bileklik SOL bilekte" eklendi. Uygulayıcı satırları
> güncellendi (program 158 → 178).
> **GOMME-28 YAZILDI (sahibi: "a yolu"):** K20 her vakada giris_gorsel = MASA_V<N> ve resim ya da yer tutucu; V4, V5 yer tutucuya eklendi
> (masa ekranı resimsiz vakaya düz kart çiziyor — yanlış resim çıkmıyordu). **SUREC-13 YAZILDI (sahibi: "yedisini de yaz"):** Derya, Efe, Tahsin Usta, Necmi, Pınar, Yusuf Efendi künyede (Tahsin’in portresi
> kesildi, öbürleri yer tutucu); K20 her figür künyede ya da `kisiler.json → kunyesiz`’de sebebiyle. **OĞUZ BEY'E SORULACAK (sahibi: "Oğuz Bey
> biliyor, sonra çözelim", 21 Kasım 2026):** V8 diyalog satır 85 "Tarkan Bey … Nihat Kora. Adını değiştirmiş" (aynı kişi) ↔ satır 344
> "Nihat ile Tarkan tekneye koşuyor… ikisi de ağa düşüyor" (iki kişi). Cevaba göre Nihat ya künyeye girer ya `kunyesiz`'de kalır (şimdilik orada).
> **ZOR AMA DEĞERLİ — tek tek (21 Kasım gece):** (1) YAPI-25/KOD-75 YAZILDI: K19 doğru çiftteki her kanıtın Cengo satırı + ifadesi;
> şimdilik UYARI (V1–V5'te satır yok, eski düzen; elden geçince hataya çevrilir). (2) KOD-38 YAZILDI: kapı veriyi
> diyaloglardan geçici kopyaya yeniden yazar, fark = elle düzenleme → durur (eski biçimli diyalog atlanır, bildirilir; Codex veriye dokunmuyor). Kalan adaylar: `awk` komutu aşağıda, yazılanları çıkar.
> **Bulgu:** V3 ve V6 Cengo istemlerinin çoğunda "tel" yok (KAR-24 17 Kasım'da kondu); program yeni istemlerde arar.
> **Sonra:** madde 3'ün kalan grupları (zor ama değerli ~35, yazmaya değmez ~36) — yine tek tek; ardından eski oyunun arşivi (ayrı iş).
>
> ## ▶️ MADDE 3 — "KOLAY VE FAYDALI" 20 ADAY SAHİBİYLE TEK TEK KONUŞULDU (21 Kasım 2026 gece)
> **YAZILACAK (18):** CODEX-17 (onayli/ silme/png dışı → dur), KOD-1 (yalnız `yeni/index.html` derlemeyle aynı), CODEX-25 (`## İstem`
> değişmez; sona `## Düzeltme`/`## ENGELLENDİ` serbest), CODEX-4 (referansta `red/`/`uretilen/` yok), ISTEM-3 (oran türle tutar),
> ISTEM-9/22/39 (Peri-Cengo'da tarz paragrafı, Peri'de "kalın ve mat", her yerde "yorgun göz" yok), ISTEM-10 (tarz örneği en sonda),
> ISTEM-46 ("KOMPOZİSYONUNU ALMA"), KAR-24 (Cengo: tel + bileklik + **yeni kural: bileklik SOL bilekte** — istemde "sol bilek" ya da
> "kadrajın sağında kalan bilek"), SINIR-13/KOD-78 (metinde sigara), KAR-21 (bağ −2…+2), ARAYUZ-36 (araştırma 3, V1 4 — sahibi onayladı),
> SATIR-36 (etiketsiz `**CENGO:**` yok; diyalog yazılırken), KAR-16 (kapanışta yüksek+düşük), SUREC-13/ARAYUZ-31 (her konuğa künye),
> GOMME-10 (webp), GOMME-28 (MASA_V<N>), DENETIM-47/GOMME-8 (yarım set gömülmez).
> **ÇIKTI:** KOD-36 ve KOD-15 → arşiv işine (eski motor korunmaz, 🛠 düğmesi sökülür). KOD-21 (alert) çelişki → madde 4. ISTEM-20/38,
> KAR-23 (çorap) → gözden geçirme sayfası.
> **SAHİBİNİN YENİ KARARLARI:** (1) Eski oyun prototipti → madde 3'ten hemen sonra AYRI İŞ olarak arşivlenir; ana adreste bir şey
> çıkması gerekmez. (2) Denetimler vakadan bağımsız ("Vaka 7+" istisnası yok). Sıra: V7, V8 tamamlanır → V1–5 yeni kurallarla elden geçer.
> (3) Sahibiyle aday konuşması TEK TEK, her madde çok kısa, örnekle.
>
> ## ▶️▶️▶️ YENİ PENCERE: ADIM 4 BURADAN SÜRER — MADDE 3 (21 Kasım 2026 akşam; sahibi: "Bunu yeni pencerede yapacağım")
> **Durum:** "Sahibine sorulacak" listesinin (aşağıda, "(önceki durum notu)" kutusu) madde 2'si ve madde 1'i BİTTİ, `main`'de
> (`d1ec1f6` beş bağlantı, `ee0a081` listelere Claude bakar). "ÖNCE KURALLAR, ÜRETİM YOK" sürüyor.
>
> **Sıradaki iş: madde 3 — programla denetlenebilecek adaylar.** Sahibine anlatıldı ve "başlayayım mı?" sorusuna "yeni pencerede" dedi;
> yani **yeni pencerede önce iki satırla hatırlat, "başlıyorum" de ve başla** (anlatım onaylandı, yeniden ayrıntılı sorma).
> Sahibine anlatılan ve onun anladığı biçim (aynen uygula):
> 1. Adayları üç gruba ayır: **kolay ve faydalı / zor ama değerli / yazmaya değmez**.
> 2. Sahibine kısa liste: her aday TEK SATIR, sade Türkçe — "şu kural · program şunu yapar · önerim: yaz / yazma". Kod adı satırın sonunda.
>    Örnekler (sahibine bunlar gösterildi): eski motor dosyasına (`kaynak/motor.js`) dokunan commit dursun (KOD-36); `onayli/`'den resim
>    silen commit dursun (CODEX-17); oyun sayfası (`index.html`, `yeni/index.html`) derlemeyle aynı mı (KOD-1).
> 3. Sahibinin seçtiklerini yaz; **her birini bilerek hata koyarak dene** (bugünkü beş bağlantı böyle sınandı); uygulayıcı satırı
>    `hatırlat` → `program`; üç sayaç `hata: 0`; commit.
> **Aday listesi:** `adim4/uyg_*.tsv` → `aday` sütununda "EVET:" olan 103 satır. **Bunlardan 12'si bugün kapandı, sayma:** KOD-3, SATIR-11,
> SATIR-38, 40, 41, 42, GOMME-1, DENETIM-1, 7, 49, 53, SEZON-26 → **kalan 91** (ARAYUZ 5, BILGI 2, CODEX 10, DENETIM 3, GOMME 4, ISTEM 17,
> KAR 7, KOD 13, RAF 1, SATIR 10, SEZON 2, SHORTS 2, SINIR 2, SUREC 1, TON 3, YAPI 9). Komut:
> `awk -F'\t' 'FNR>1 && $0 ~ /EVET/ {print $1" | "$4}' sablon/kurallar/adim4/uyg_*.tsv`. 91'i sahibine tek seferde dökme: önce grupla,
> "kolay ve faydalı" grubunu getir (ör. 10–20 satır), gerisini sonra.
> **Not:** `kaynak/` dışındaki programlar da yazılabilir; yeni kapı denetimi `.claude/kapi_hook.js`'e eklenir (git kancası da onu çağırır).
>
> **Madde 3'ten sonra sırayla:** madde 4 (çelişkiler — tek tek, "eski: …, yeni: …, önerim: …"), madde 5 (eski açıklar: kanon ↔ KAR,
> KOD-78 sigara taraması metne/sahne notuna, §7 soru 6–7, üç küçük soru) → **kuralları gözden geçirme sayfası** (sahibinin isteği, 21 Kasım:
> "Peri'de çorap yok yalnız o vakada söylediğim bir şeydi ama genel kural olarak yazılmış; bunun gibi başka şeyler olabilir". Öneri ve
> sahibinin onayladığı sıra: Adım 4 bitince, **üretime dönmeden önce**; okunaklı sayfa — üretim adımına göre gruplu, her kural tek satır
> sade Türkçe, yanında "doğru / yalnız o vakaydı / yanlış" düğmeleri; işaretleri Claude okur, KURALLAR.md'yi düzeltir. Örnek kural ISTEM-20
> ve ISTEM-38: kayıtta "17 Kasım çelişki sorusu 15, sahibinin kararı" yazıyor; sahibi yalnız o vaka diyor — sayfada ilk sorulacak.)
> → üretime dönüş. Ayrıca: **Oğuz Bey'in bilgisayarında bir kez `git config core.hooksPath .githooks`** (Codex/terminal commit'leri kapıdan geçsin).
>
> **Bugün öğrenilen tuzaklar:**
> - **Kapı, Bash komutunun METNİNDE "git … commit" geçerse çalışır** (echo içinde bile): deneme komutlarını betik dosyasına yaz
>   (`K=git; C=commit` gibi), yoksa gerçek kapı koşar ve komut durur. Bu bilgisayarda git kancası kurulu olduğundan Claude Code kipi
>   kendini atlar; asıl denetim git kancasında (`.githooks/commit-msg` → `node .claude/kapi_hook.js --git`). Kuru deneme: `KAPI_KURU=1`.
> - Uygulayıcı satırında ters tırnak içindeki her şey dosya sayılır (`say` "program dosyası yok" der): yalnız gerçek dosya yollarını tırnakla.
> - Onaylı resim commit'i tarz/yüz/benzerlik araçlarıyla ~30 sn sürer (resim başına değil, commit başına; modeller yükleniyor).
> - Söz farkı aracı diyalog dosyasının baş notlarını da söz sayar; onları değiştiren commit de iletide `[söz onaylı]` ister.
>
> **Sahibiyle konuşma (21 Kasım'da yeniden öğrenildi):** her yeni adımı önce **basit bir örnekle** anlat (soyut anlatımı anlamadı; "örnekle"
> isteyince anladı). "Şimdi bir kez ne yapacağım" ile "her vakada ne olacak"ı ayır. "Okunmaz" gibi öznesiz söz kullanma (kim okuyamaz?).
> Teknik ölçüyü doğru söyle (önce "resim başına 30 sn" dendi, doğrusu commit başına — düzeltildi). En kısa Türkçe, önce sonuç.
>
> ## ✅ MADDE 1 BİTTİ — LİSTELERE CLAUDE BAKAR (21 Kasım 2026, sahibi: "Evet")
> Claude'un adımlarında listeye Claude bakar, `sablon/vakalar/vaka<N>_hatirlatma.md`'de işaretler (`arac_uygulayici.js kayit <vaka> <adım>`);
> sahibine yalnız UYMUYOR / EMİN DEĞİLİM gider, onay anında (`… bitti <vaka> onay1|onay2|don|resim|onay3|son`; işaretsiz madde → çıkış 1).
> SUREC-43 ve `7_uretim_sureci.md` buna göre yazıldı. **Sırada:** madde 3 (103 aday), 4 (çelişkiler), 5 (eski açıklar), sonra sahibiyle
> kuralları gözden geçirme sayfası (sahibi: bazı kurallar yalnız bir vakaya söylenmişken genel yazılmış olabilir — örnek ISTEM-20/38
> "Peri'de çorap yok"; üretime dönmeden önce), Oğuz Bey'in bilgisayarında `git config core.hooksPath .githooks`.
>
> ## ✅ BEŞ BAĞLANTI YAPILDI (21 Kasım 2026, sahibi: "programları bağlayalım") — aşağıdaki "Sahibine sorulacak" madde 2 BİTTİ
> (a) kapı `kaynak/` değişen her commit'te iki doğrulayıcı + `test_*.js`'i koşar; (b) `uretim/dongu.sh` üç aracın çıkış koduna bakar
> (KALDI/ŞÜPHELİ → `v<N>/kayit/denetim.tsv` ONAYLANAMAZ; benzerlik DUR → döngü durur) ve kapı `onayli/`'e giren resimde araçları yeniden
> koşar; (c) `istem_kontrol.sh` yeni konuk temelinde `arac_benzerlik.js`'i çağırır; (d) gömme commit'i (gorseller.json, yeni_gorsel/)
> YALNIZ değişen resmin vakasına resim kapısı açar (anahtar → `uretim/v<N>/LISTE.md` / `vaka<N>_gorsel.md`); (e) diyalogda söz farkı
> commit'i durdurur (`[söz onaylı]` iletide → geçer). Git kancası `.githooks/commit-msg` (bu bilgisayarda `core.hooksPath` kuruldu;
> Oğuz Bey'in bilgisayarında bir kez `git config core.hooksPath .githooks`). Hepsi gerçek denemeyle sınandı. Uygulayıcı satırları
> `program`'a döndü (KOD-3, KOD-35, SATIR-11, 38, 40–42, SEZON-26, DENETIM-1, 2, 7, 8, 38, 53, GOMME-1). **Sırada madde 1** (listeleri
> kısaltma), sonra 3, 4, 5. Açık küçük not: söz farkı aracı diyalog dosyasının baş notlarını da söz sayar (onları değiştirmek de `[söz onaylı]` ister).
>
> ## (önceki kutu, 21 Kasım sabah — madde 1 ve 2 artık BİTTİ) ADIM 4 BURADAN SÜRER (sahibi biçimi 20 Kasım gece onayladı: "Evet, başla")
> **Sahibinin cevap beklediği soru (son mesaj):** "Önce hangisini yapayım: programları bağlamak mı (önerim), listeleri kısaltmak mı?"
> — aşağıdaki "Sahibine sorulacak" madde 2 (öneri) ve madde 1. Sahibi cevap vermeden kod değiştirme (SUREC-1). Cevaba göre:
> **madde 2** → beş bağlantı: (a) commit kapısı `test_*.js`'i de koşsun; (b) `uretim/dongu.sh` tarz/yüz/benzerlik araçlarının çıkış
> koduna baksın (KALDI/DUR → onaylanmaz/durur); (c) `uretim/istem_kontrol.sh` yeni konuk temelinde `kaynak/arac_benzerlik.js`'i
> çağırsın; (d) gömme commit'i (`yeni_gorsel/`, `gorseller.json`) resim kapısını açsın (`.claude/kapi_hook.js`); (e)
> `kaynak/arac_soz_farki.js` kapıda koşsun. Ayrıca: kapı yalnız Claude Code hook'u — Codex/terminal commit'i geçmiyor (git hook?).
> Her bağlantıdan sonra ilgili kuralların `*Uygulayıcı:*` satırı `hatırlat`'tan `program`'a döner (KURALLAR.md'de doğrudan ya da
> `adim4/uyg_*.tsv` + `node adim4/uygula.js --yaz`), sonra `node arac_uygulayici.js yaz && say`. İlgili kurallar `adim4/uyg_*.tsv`
> `aday` sütununda (DENETIM-53, SEZON-26, DENETIM-49, SATIR-11, SATIR-38/40/41/42, GOMME-1, KOD-3).
> **madde 1** → `arac_uygulayici.js adim <n>` çıktısını "Claude'un kendi baktığı" / "sahibine giden" diye ayırma biçimi önerilir,
> onay alınır. Sonra madde 3 (103 aday), madde 4 (çelişkiler) tek tek, sade ("eski: …, yeni: …, önerim: …").
> **Kural dosyasıyla çalışma:** her değişiklikten sonra `node sablon/kurallar/arac_uygulayici.js say` (eksik uygulayıcı = HATA),
> `node sablon/kurallar/arac_kurallar.js say`, `node sablon/kurallar/adim3/tasima_say.js` → üçü `hata: 0`. Yeni kural `*Uygulayıcı:*` ve
> `*Kaynak:* yeni karar (…)` satırıyla yazılır (örnek: SEZON-26, DENETIM-53, SUREC-43). Tuzak: Bash heredoc'ta `\\` ve iç tırnak
> bozuluyor — betiği Write ile dosyaya yaz ya da Edit kullan; yazdıktan sonra dosyayı kontrol et.
>
> ## (önceki durum notu) ADIM 4 SÜRÜYOR (20 Kasım 2026 gece)
> **Biten (`b262e87`):** benzerlik kuralları SEZON-26 (yazı) + DENETIM-53 (resim); biçim `*Uygulayıcı:* program \`…\` | hatırlat <adım> |
> yok — <sebep>` (parçalar ` · `); araç `sablon/kurallar/arac_uygulayici.js say|yaz|adim <n>`; liste `HATIRLATMA.md` (programla);
> SUREC-43 (her adım listeyle kapanır; `7_uretim_sureci.md`'ye bağlı). Yeni kural `*Kaynak:* yeni karar …` der (`say` kaynaksız saymaz).
> **Biten (2. commit):** 667 kuralın HEPSİNE uygulayıcı yazıldı — program 158, talimat 14 (Codex: `uretim/AGENTS.md` kodu anmalı,
> araç denetler), hatırlat 374, yok 229; `say` artık eksik uygulayıcıyı HATA sayar. Yol: 4 ajan `adim4/uyg_*.tsv` (TALIMAT.md) →
> 4 ikinci göz `adim4/denetim_*.md` (53 bulgu; hepsi kabul, `adim4/duzeltme_*_islendi.tsv`) → `adim4/uygula.js --yaz`.
> Yeni tür: `talimat`. "Program" yalnız gerçekten DURDURAN (ikinci göz abartılı program satırlarını hatırlat'a indirdi).
> **Sahibine sorulacak (sırayla, sade):**
> 1. Adım 3, 8, 10'un listeleri ~100 madde (1: 67) — "kısa liste" değil. Öneri: o adımları Claude yapıyor; Claude her maddeye
>    bakar, sahibine yalnız "uymayan / emin olmadığım" maddeler gider. Sahibinin kendi adımları (2, 6, 12) zaten kısa (1, 9, 4).
> 2. Bugün durdurmayan programlar (ikinci gözün en önemli bulgusu): testler commit'te koşmuyor (kapı yalnız Claude Code hook'u, V6+);
>    döngü tarz/yüz/benzerlik sonucuna bakmıyor; `arac_benzerlik.js`'i hiçbir şey çağırmıyor; gömme commit'i resim kapısını açmıyor;
>    `arac_soz_farki.js` hiçbir yerde. Öneri: bu beşini bağla (kod işi; onayla).
> 3. 103 "aday" (yazılabilecek yeni denetim; `adim4/uyg_*.tsv` `aday` sütunu) — hangileri, hangi sırayla.
> 4. Çelişkiler: RAF-5 (~10–15 dk) ↔ YAPI-4 (15–25 dk); `test_yeni_v2.js:62-69` kasa döneminden iki denetim (YAPI-31); KOD-33 `py` ↔
>    `dongu.sh`/`arac_kapi.js` `python`; KOD-51 arşivdeki belgeye yazdırıyor; ISTEM-1 arşivdeki kalıbı gösteriyor; KOD-21 ↔ `alert()`;
>    DENETIM-24 "%20" ↔ ISTEM-43 "yüzdeyle yazılmaz"; eski kural numaraları (SATIR-2, 18, ISTEM-8, 55, DENETIM-12, 13); `arac_satir_resim.js`
>    SOR sınıfını hiç atamıyor. Yeni oyunda boşa dönen denetimler: K1 görsel (`gosterir` yok), `test_tahta.js`, `test_yeni_kimyapti.js` (yalnız V1).
> 5. Eski açıklar (aşağıda): kanon ↔ KAR, KOD-78 sigara, §7 soru 6–7, üç küçük soru.
>
> ## (Eski başlık) YENİ PENCERE: ADIM 4 BURADAN BAŞLAR (güncel: 20 Kasım 2026 gece)
> **Durum:** Adım 1–3 BİTTİ, hepsi `main`'de (son commit'ler `f7f6df7` + `35275f6`). Bütün kurallar `sablon/kurallar/KURALLAR.md`'de
> (664 asıl kural + 23 "→ ANA" yönlenen kod; başlıklar `#### KOD-n`). 12 eski kural belgesi `arsiv/`'de (silinmedi). Yaşayan belgeler
> kural yazmaz, kod anar. Hâlâ geçerli: ÖNCE KURALLAR, ÜRETİM YOK (aşağıdaki kutu) — Adım 4 bitince üretime dönülür.
>
> **Sahibinin hedefi (20 Kasım, sözleri):** "Bu tecrübelerimin kaybolmasını ASLA istemiyorum." "Bu yapacaklarımızı yaptıktan sonra
> artık vaka üretimi yapmak istiyorum. Bir vakayı üretirken daha önce hallettiğimiz bir sorunla tekrar tekrar uğraşmak istemiyorum."
> "Artık bu iş bittikten sonra saçmalıklarla uğraşmak istemiyorum." → Her kararı "bir sonraki vakada aynı sorun yine çıkar mı?" diye sına.
>
> **ADIM 4 — ne yapılacak (§2 madde 3 ve §4 Adım 4; sahibi onaylı plan):**
> 1. Her kurala bir **uygulayıcı**: (a) programın ölçebildiği kural → program bağlanır, iş DURUR (doğrulayıcı, `arac_kapi.js`,
>    `uretim/istem_kontrol.sh`, `arac_tarz.py`, `arac_benzerlik*.js/py`, `arac_satir_resim.js`, testler…); (b) ölçülemeyen kural
>    (espri, parmak, ton…) → **hangi üretim adımında** sahibine hatırlatılacağı; sahibi "baktım" demeden o adım geçmez. Sahibi 664 kuralı
>    tek tek sormayacak: hatırlatma yeri gelince, ilgili adımda, kısa liste olarak çıkmalı.
> 2. Önerilen biçim (sahibine kısaca sunulup onayı alınır): her kuralın bloğuna `*Uygulayıcı:* program <dosya/kural adı>` ya da
>    `*Uygulayıcı:* hatırlat <SUREC adım no>` satırı; `arac_kurallar.js say` (ya da yeni bir test) uygulayıcısı olmayan kuralı sayar ve
>    uyarır. Hatırlatmaların adım adım listesi programla üretilir (elle değil), üretim süreci (`sablon/7_uretim_sureci.md`) adımlarında anılır.
> 3. Önce en çok ısıranlar: **benzerlik, el, kıyafet, satır–resim**. Benzerliğin iki aracı zaten var (`kaynak/arac_benzerlik.js` yazı,
>    `kaynak/arac_benzerlik_resim.py` resim; `uretim/CLAUDE.md` 00 ve 0b2) — ama **KURALLAR.md'de kodları YOK**: önce KURALLAR'a
>    eklenmeli (bugünkü sahibi kararı, yeni kanon değil). Aşağıdaki "⚠ ADIM 4'TE UNUTMA — KONUK BENZERLİĞİ" kutusu da buna dair.
> 4. Elde hazır malzeme: `sablon/KURALLAR_TASLAK.md`'nin uygulayıcı tespitleri (yaklaşık: 30 kural programla, 51 kısmen, 18 kodun yapısı
>    gereği, 99 programsız — özet olduğu için yaklaşık; kodları KURALLAR.md'ye göre yeniden eşlenmeli). Doğrulayıcı kural listesi
>    `kaynak/dogrulayici_sozlesmesi.md`, kapının 13 kuralı `kaynak/arac_kapi.js` başı, istem denetimleri `uretim/istem_kontrol.sh`.
>
> **Adım 4'te karar bekleyen / çözülecek açıklar (kaybolmasın):**
> - **Kanon ↔ KAR iki yerde:** `sablon/3_kanon_kaydi.md` gerçekleri metin olarak tutuyor (bilerek geri getirildi — yazar okusun diye);
>   KAR-24 ve KAR-26…39 aynı gerçekleri tekrar ediyor. Bölünme bir çelişkiyi gizlemişti (KAR-26 avukat; düzeltildi). Tek yere bağlanmalı
>   (öneri: kanon kaydı asıl, KAR kuralları "kanon kaydında" desin) — sahibine sor.
> - **KOD-78 sigara:** program yalnız istemi tarıyor; metin, sahne notu, ifade adı taraması eklenecek (sahibi onayladı, B-2).
> - **§7 soru 6:** Cengo bağı ±2 doğrulayıcıya eklensin mi (cevap yok). **§7 soru 7:** ilk arşivlenen 16 dosya ham listeye (cevap yok).
> - **Ajanın sorduğu, sahibine iletilmemiş üç küçük soru** (`adim3/tasima.md`, `denetim_tasima.md`): reddedilen seçenekler ayrı bir liste
>   olsun mu; V1–V6 ilk taslakları fikir havuzuna girsin mi; `c9e79469d0` (tepsi örtüsü farkının kabulü) SATIR-7 ile DENETIM-51 ilişkisi.
> - **Okuma bedeli:** `7_uretim_sureci.md` tarama soruları artık yalnız ad + kod; uygulayıcı/hatırlatma listesi bunu çözmeli.
> - `istem_kontrol.sh` hata iletileri ve `uretim/v6/uret_istem_parti3.py` eski belge adlarını (ISTEM_KALIPLARI, BIRIKIM) anıyor — bilerek
>   bırakıldı (HAM kimlikleri); Adım 4'te program iletileri kural koduna çevrilebilir.
> - §5'teki "kapı kendiliğinden çalışmıyor" ESKİDİ: kapı commit'te çalışıyor (`.claude/kapi_hook.js`; 20 Kasım'da iki kez durdurdu).
>
> **Araçlar ve tuzaklar (Adım 3'te öğrenildi):**
> - `KURALLAR.md` ASIL dosya: `arac_kurallar.js birlestir` ÇALIŞTIRMA (reddeder; `--yeniden` bütün birleştirmeleri siler).
> - Her değişiklikten sonra: `node sablon/kurallar/arac_kurallar.js say` ve `node sablon/kurallar/adim3/tasima_say.js` → ikisi `hata: 0`.
>   `say` birleşen kodun kaynaklarının ANA'da olduğunu da sayar; `*Kaynak:*` satırına kod yazma (rakamı kaynak no sanır).
> - `kaynak/arac_kural_ham.js`'i HAM.tsv'nin ÜSTÜNE koşma (`no` kayar, `*Kaynak:*` numaraları bozulur); karşılaştırma için `--cikti <klasör>`.
>   Arşive taşınan belgeleri eski adlarıyla okur (kimlikler aynı).
> - Bash aracı komut metnindeki `\\`'ı tek `\`'a indiriyor: ters bölü içeren betikleri Write aracıyla dosyaya yaz, öyle çalıştır.
>   (Adım 3'te bir ajan `kaynak/DEVIR.md`'ye düz `\n` yazdı, 243 yerde satırlar yapıştı; düzeltildi. Belge değiştiren işten sonra
>   `grep -cF '\n' <dosya>` ile bak.)
> - Kapı commit'i durdurursa `git add` de ÇALIŞMAMIŞ olur (aynı komuttaysa): commit'ten sonra `git status --short` boş mu bak. Kapı bir kez
>   "derleme" diye durdu, yeniden denemede geçti (geçici).
> - Ajanlar 5 saatlik sınıra takılabilir: aynı ajana SendMessage ile "kaldığın yerden" de, yeni ajan açma.
> - Her büyük adımda birinci uygulayıcı + bağımsız ikinci göz; sahibine yalnız ayrışan/çelişen yerler.
>
> **Sahibiyle konuşma (20 Kasım'da öğrenilenler):** en kısa, en basit Türkçe; önce sonuç; en geç 3 dakikada bir 1–2 satır durum.
> Çelişki/öneri sunarken **tek tek, sade** anlat ("eski kural: …, yeni kural: …, önerim: …") — kod adlarıyla dolu liste anlaşılmadı.
> Kelimeye dikkat: "telefonda" yanlış anlaşıldı (ayrım cihaz değil, web sayfası ↔ uygulama). Sahibine "failed" görünürse ne olduğunu söyle.
>
> ---
>
> ## Önceki kutu: YENİ PENCERE (20 Kasım 2026 öğleden sonra — Adım 3 başlarken yazıldı; çoğu artık geçmiş)
> **SAHİBİNİN KARARI (Barbaros, 20 Kasım 2026): ÖNCE KURALLAR, ÜRETİM YOK.** Sözleri: "Kurallar olmadan bir şeyler üretmemiz hem
> işleri karıştırıyor hem de sürekli aynı şeyleri tekrar tekrar yapmamıza neden oluyor. Tekrar resim üretme, tekrar yazma…" ve "kural
> sadeleştirme işini ve kuralların hepsini düzeltip otomatik uygulama işini yapmıyor muyuz?" → Aşağıdaki eski "ANLAŞILAN SIRA"nın
> "(3) üretim yeniden başlar" adımı **GEÇERSİZ**. Vaka 7/8 resim üretimi, Vaka 1–4 geçişi ve benzeri işler kural işi bitene dek
> önerilmez. **Bu pencerede yapılacak iş: Adım 3** (aşağıda "Sıradaki iş" madde 3 ve §4 Adım 3), sonra **Adım 4** (otomatik uygulama).
>
> **Sahibiyle konuşma (20 Kasım'da üç kez bozuldu, tekrarlama):**
> - En kısa, en basit Türkçe; önce sonuç. Uzun işte **en geç 3 dakikada bir** 1–3 satır durum yaz ("bana 3 dakikada bir durumu yaz;
>   bir sorun varsa zamanında söyle").
> - Bir araç ya da hook işi durdurursa **hemen ve doğru sebebiyle** söyle. Araç çağrısı "The user doesn't want to take this action"
>   diye dönerse bu sahibinin reddi DEĞİL olabilir: commit'te `.claude/kapi_hook.js` (kapı) durdurur; başka komutlarda sahibi tam o an
>   mesaj yazıyordu (kesin değil). "Siz durdurdunuz" deme — sahibi hiçbir şeyi reddetmemişti ve buna çok kızdı.
> - Sahibini kural işinden başka işe (üretim) çekme.
>
> **ADIM 3 DURUMU (20 Kasım 2026 akşam):** (1) BİTTİ: `sablon/kurallar/KURALLAR.md` — 16 konu dosyası tek dosyada, metne
> dokunulmadı; artık ASIL dosya (`arac_kurallar.js birlestir` üstüne yazmayı reddeder). `node arac_kurallar.js say`: 3.585 ham
> kaydın hepsi etiketli, 1.725 KURAL kaydının hepsinin karşılığı var, hata 0. (2) Konular arası tekrar: program 250 aday çift buldu
> (`adim3/aday.js`), birinci okuma 16 grup (`adim3/tekrar_karar.md`), ikinci göz 3 cümle düzeltmesi + 5 kaçan grup + 3 yeni çelişki
> (`adim3/denetim_tekrar.md`). (3) BİTTİ: sahibi "öneriler uygulansın" dedi; 21 birleşme + 7 çelişki KURALLAR.md'ye işlendi
> (`adim3/uygulama.md`, ikinci göz `adim3/denetim_uygulama.md` GEÇTİ, tek düzeltmesi yapıldı). 664 asıl kural + 23 yönlenen kod;
> `say` hata 0 (artık birleşen kuralın kaynaklarının ANA'da olduğunu da sayar). Açık küçük bulgular (sahibine sorulmadı):
> GOMME-20 başlığı ve RAF-65 (uygulamada V1–2 reklamsız) sahibinin onayıyla düzeltildi.
> (4) BİTTİ (sahibinin onayıyla): arşive gidecek belgelerin 839 kural-dışı satırı sınıflandı; 286 ders/bilgi yerine taşındı (kural
> altına `*Ders:*`/`*Bilgi:*`, yeni `sablon/FIKIR_HAVUZU.md`, `uretim/CLAUDE.md`, kanon), her biri `(k:id)` etiketli, `adim3/tasima_say.js`
> hata 0. 12 belge `arsiv/`'e (1, 2, 4, 5. parça, TASLAK, ISTEM_KALIPLARI, uretim/OKUBENI, TON/SEZON/ÇERÇEVE, RAF_KARARLARI, v3_eski).
> Yaşayan belgelerde kural cümlesi → kod; kanon kaydı BİLEREK metin olarak kaldı (veri; ikinci gözün önerisi). Vaka başlangıçları ve
> `8_shorts.md` yerinde. İkinci göz (`adim3/denetim_son.md`) bulgularının hepsi düzeltildi. Doğrulayıcı (iki oyun), testler, iki
> derleme, `say` temiz. **Adım 3 BİTTİ. Sırada Adım 4** (uygulayıcılar, §4). Açık: 20 Kasım benzerlik kuralları (`uretim/CLAUDE.md` 00,
> 0b2) KURALLAR.md'de kodsuz; kanon kaydı ile KAR-24…39 aynı gerçekleri iki yerde tutuyor (Adım 4'te tek yere bağlanmalı).
>
> **20 Kasım'da bu pencerede biten (hepsi `main`'de):**
> - Benzerlik denetimi iki parça tamam: yazı (`kaynak/arac_benzerlik.js`) + resim (`kaynak/arac_benzerlik_resim.py`; yüz + baş/saç + bütün
>   figür; sınır her çalıştırmada bilinen 4 benzer çiftten kendiliğinden; ölçü ayırt edemezse DUR, çıkış 3). Döngüye bağlı, kural
>   `uretim/CLAUDE.md` Denetim 0b2. Bu Adım 4'ün (otomatik uygulama) ilk örneği sayılabilir.
> - Vaka 7: Süheyla (Jale'ye benziyordu) ve Nesrin (Nadide'ye) yeni görünüşle yazıldı; resimleri ÜRETİLMEDİ (üretim yok, yukarıda).
>   Hikâye aynı, yalnız diyalog satır 47 ve 205'ten saç tarifi çıktı. `kaynak/yeni/gorseller.json` → K152 tarifi bilerek eski
>   (`uretim/v7/DURUM.md` en üst).
> - **Kapı değişti (sahibinin kararı):** commit kapısı yalnız DEĞİŞEN vakayı denetler. Ortak veride (game_data/kisiler.json) yalnız
>   içinde değişen vakalar; ortak resim dosyaları resim kapısı açmaz (derleme yakalar); `yeni/index.html` kapı açmaz. Önceden ortak
>   bir dosyaya dokunmak V6–V8'in hepsini denetletiyor, resimsiz V7–V8 her commit'i durduruyordu. Kuru deneme: komutu
>   `{"tool_input":{"command":"git commit …"}}` olarak `KAPI_KURU=1 node .claude/kapi_hook.js`'e ver → hangi kapıları koşacağını basar.
>
> ### Önceki kutu (20 Kasım sabahı; "(3) üretim" adımı yukarıdaki kararla geçersiz)
> **BUGÜNKÜ İŞ, SIRAYLA:** aşağıdaki "ANLAŞILAN SIRA" (1) 41 karar + Cengo'nun saçı → üretim belgelerinin en üstüne, (2) konuk
> benzerliği denetimi (önce sahibinin kısa onayı), (3) üretim yeniden başlar. Adım 3–4 bundan SONRA, arka planda. Açık soru yok.
> Hesap: Barbaros'un sınırı azalınca son durum buraya yazılır, iş Oğuz Bey'in hesabından sürer (o hesap her şeye yetkili).
> Sahibine en kısa, en basit Türkçe (§0).
> **(1) BİTTİ (20 Kasım 2026):** kısa liste `uretim/CLAUDE.md` en üstte; kök `CLAUDE.md` ve `sablon/` 5, 6, 7 en üstte ona
> işaret eder. Ayrıca iki açık çelişki hemen düzeltildi: `uretim/CLAUDE.md` Cengo satırı (haki ceket → yüz, saç, tel, bileklik) ve 5. parça
> A figür satırı (bej → programla zemin; konuk 4:5). **Sırada (2):** benzerlik denetimi — önce sahibinin kısa onayı.
> **(2) ilk parça BİTTİ (20 Kasım 2026):** üretimden önceki yazı denetimi `kaynak/arac_benzerlik.js`. Sahibinin kararı: kural vaka
> numarasına bağlı değil. **Havuz** (`sablon/kurallar/benzerlik/havuz.tsv`) = resmi onaylanmış karakterler (bugün yalnız Vaka 6'nınkiler
> + Peri, Cengo, Gizem); **adaylar** (`adaylar.tsv`) = geri kalan herkes (Vaka 1–5, 7, 8, açılış; hepsi değişebilir). Yeni karakter
> havuza ve birlikte üretilenlere benzerse görünüşü değişir, sahibine sorulmaz; onaylanınca kendiliğinden havuza girer (onay adımı +
> `arac_paket.js --yaz` yedeği). Ağırlıklı puan, eşik 6 (gevşek eşik her vakada 10–40 yanlış alarm verdi; bilinen çiftler resimde
> benzedi, yazıda değil → onları üretimden sonraki resim aracı yakalayacak, sahibinin ya da Oğuz Bey'in bilgisayarında). Uygulandı:
> Pınar'ın saçı at kuyruğu (Dilek'e benziyordu), Yusuf'un saçı yazıldı.
> **(2) ikinci parça BİTTİ (20 Kasım 2026, Barbaros'un bilgisayarında):** üretimden sonraki resim aracı `kaynak/arac_benzerlik_resim.py`
> (yüz + baş/saç + bütün figür; oyundaki bütün figürler, onaylılar ve aynı vakanın üretilenleriyle). Sınav GEÇTİ: Süheyla–Jale,
> Necmi–Recep, Müzeyyen–Nadide yakalandı; eski Kaan Bülent'e değil Cengo'ya daha çok benzedi (resimde de öyle). Eski Şükrü ve Ercan
> da yakalandı. Döngüye bağlı (`uretim/dongu.sh`), kural `uretim/CLAUDE.md` Denetim 0b2. Bugün: V7 G4 Süheyla KALDI (Jale), G5 Nesrin
> ŞÜPHELİ (Nadide), G7 Vedat GEÇTİ. Eski vakalarda 7 benzer çift kalmış (`--havuz-ici`; bilgi). Sahibinin kararıyla sınır her çalıştırmada bilinen çiftlerden
> kendiliğinden hesaplanır; ölçü ayırt edemez hâle gelirse araç DUR der. (Öğleden sonra: sahibi "önce kurallar, üretim yok" dedi — en üst kutu.)
>
> **17 Kasım 2026 öğleden sonra:** sahibi 41 önerinin hepsini onayladı ("41 kuraldaki önerilerini onaylıyorum"). Cevaplar
> kural dosyalarına işlendi (`kapsam.js`: 687 kural, 17 YOK, 11 ESKİDİ, **0 çelişki, hata 0**; her `celiski_*.md` sorusunun altında
> "Cevap" satırı). Kod: doğrulayıcı K19'dan önizleme/kesinti/kasa denetimi kalktı, K8 yeni oyunda çalışmaz (`d3b4c7d`). Kapı commit
> bağlantısı (soru 24) ayrı commit'te. Belgelerdeki eski metinler (ör. veri sözleşmesinde "6 + 2", 7. parça adım 8–9, D-6, Ton belgesi)
> **adım 3'te** bir seferde düzeltilir. (Sıra değişti: bkz. en üstteki BUGÜNKÜ İŞ.)
>
> ### 🖼️ VAKA 1–5 RESİMLERİ (19 Kasım 2026, Barbaros'un kararı): metinler yeni kurallara göre geçirildikten sonra **yalnız yeni
> metne uymayan resimler** yeniden üretilir (satır–resim denetimi ve kapı hangilerini işaretlerse). Yeni üretilenler eski, uyan
> resimlerden **farklı görünmemeli**: aynı yüz, saç, kıyafet, ölçek, zemin ve çizim tarzı. Yol: eski onaylı resim 1. referans (yüz/tarz),
> o kıyafetin kıyafet kartı eski resimden çıkarılır, her yeni resim `arac_tarz.py` ile eski setle karşılaştırılır ve oyunda eski
> komşularıyla yan yana konup bakılır.
>
> **▶️ ANLAŞILAN SIRA (19 Kasım 2026, sahibi: "bu şekilde ilerleyelim", haftalık sınır yenilenince başlanır):** üretim (Barbaros ve
> Oğuz Bey) kural işinin bitmesini beklemesin. (1) Sahibinin onayladığı 41 kararın + Cengo'nun saçı kararının KISA listesi üretimin
> okuduğu belgelerin en üstüne konur (`uretim/CLAUDE.md`, kök `CLAUDE.md`, gerekirse `sablon/` parçaları) — karar metni
> `adim2/celiski_*.md` "Cevap" satırları. (2) Konuk benzerliği denetimi (aşağıdaki kutu) kurulur. (3) Üretim yeniden başlar. Adım 3 ve
> adım 4'ün kalanı arka planda, parça parça (sınır bitmesin diye ajan çoğaltmadan, mümkünse programla).
>
> **⚠ ADIM 4'TE UNUTMA — KONUK BENZERLİĞİ (19 Kasım 2026, sahibi "son adımda unutmayalım" dedi):** yüzü silinmiş tarz referansı
> (ISTEM-12) aynen kalır. Üstüne iki otomatik denetim, adım 4'ün İLK işlerinden: (1) **üretimden önce** her yeni konuğun görünüş
> tablosu (yaş, saç rengi, saç kesimi, yüz biçimi, beden, ayırıcı işaret) önceki vakaların BÜTÜN konuklarıyla program tarafından
> karşılaştırılır; ≥2 özellik aynıysa istem üretime girmez; (2) **üretimden sonra** yalnız yüze değil saça ve genel görünüşe bakan
> araç; bilinen benzer çiftlerle sınanır (Süheyla–Jale, Necmi–Recep, Kaan–Bülent, Müzeyyen–Nadide), yakalayamazsa güvenilmez.
> Ayrıntı §7 madde 1. Sahibine sunuldu; adım 4'te uygulamadan önce kısa onayı alınır. Aracın yüz modeli bulut kabında inmiyor —
> Oğuz Bey'in ya da Barbaros'un bilgisayarında denenir.
>
> **Cengo'nun saçı (19 Kasım 2026, sahibinin cevabı):** değişmez, her vakada aynı. KAR ve SEZON-19/22 işlendi. Açık soru kalmadı.
>
> **Yetki (17 Kasım akşam):** Barbaros'un sınırı doldu (Cuma sıfırlanır); işi Oğuz Bey'in hesabıyla sürdürecek. O hesap her şeye
> yetkili (kod dahil).
>
> **Eski durum:** Adım 1 (etiketleme) BİTTİ. Adım 2 (birleştirme) BİTTİ — yalnız sahibinin **41 sorusu** cevap bekliyor:
> `sablon/kurallar/adim2/SORULAR.md` (her soruda Claude'un önerisi var; sahibi "öneriler tamam" ya da numara + istediği der).
> **Sıradaki iş, sırayla:**
> 1. Sahibinden 41 sorunun cevabını al (dosyayı ona gönder ya da hatırlat; uzun anlatma).
> 2. Cevapları kurallara işle: her `celiski_<KOD>.md` sorusu → ilgili `kural_<KOD>.md` maddesi düzeltilir, haritada `CELISKI-…` hedefi
>    kural koduna ya da `ESKIDI`'ye çevrilir. Sonra `node sablon/kurallar/adim2/kapsam.js sablon/kurallar/adim2` → `hata: 0` ve
>    CELISKI sayısı 0 olmalı. Cevap kodu/belgeyi değiştiriyorsa (ör. soru 19–21 doğrulayıcı K19, soru 24 kapı bağlantısı) o iş AYRI:
>    sahibine söyle, onayla yap (CLAUDE.md "önce konuş").
> 3. Adım 3: 16 `kural_<KOD>.md` → tek `KURALLAR.md` (konu sırasıyla; kural kodları korunur). Program iki şeyi sayar (§4 Adım 3).
>    Konular arası tekrarlar (ör. sigara SINIR'da ve ISTEM'de) o sırada birleştirilir; her birleştirme ikinci gözle denetlenir.
>    Sonra öbür belgelerden kural metinleri çıkarılır, yerine kural kodu konur — **sahibinin onayıyla, en sonda, bir seferde.**
>    Kırık atıflar (§5) da o sırada düzelir.
> 4. Adım 4: uygulayıcılar (§4).
>
> **Adım 2 nasıl yapıldı (aynı yöntem adım 3'te de kullanılabilir):** 1.725 KURAL satırı (`adim2/KURAL_SATIRLAR.tsv`) iki Claude ile 16
> konuya ayrıldı (`adim2/KONULAR.md`, `konu.tsv`). Her konu için bir Claude birleştirdi (`TALIMAT_BIRLESTIR.md` → `kural_<KOD>.md`,
> `harita_<KOD>.tsv` = her kaynak satır → kural kodu / YOK / ESKIDI / CELISKI, `celiski_<KOD>.md`); bağımsız ikinci Claude denetledi
> (`TALIMAT_DENETIM.md` → `denetim_<KOD>.md`); üçüncüsü sorunları işledi (`TALIMAT_DUZELT.md` → `duzeltme_<KOD>.md`). Program
> (`kapsam.js`) her satırın haritada ve her hedefin kural dosyasında olduğunu saydı: **687 kural, 17 YOK, 10 ESKIDI, 41 çelişki, hata 0.**
> ⚠ TALIMAT dosyalarındaki yollar eski pencerenin geçici klasörünü (`/tmp/claude-0/…/scratchpad/b2`) gösterir; yeni pencerede
> `sablon/kurallar/adim2/` kullan (dosyalar aynı adla orada).
> Ajanlar kullanım sınırına iki kez takıldı (kaldıkları yerden sürdürüldü); büyük işte ara ara `main`'e kaydet.
> Sahibi binlerce satırı okuyamaz ("Tamam demekten başka çarem yok"): ona yalnız ayrışan/çelişen yerler, tek cümleyle, önerili gider.

---

## 0. Sahibiyle konuşma biçimi (ZORUNLU)

- **En basit ve en kısa Türkçe.** Sahibi açıkça istedi: "Bu pencerede bana yazacağın her şeyi en basit ve olabilecek en kısa
  şekilde cevapla." Uzun, ayrıntılı, teknik cevaplara iki kez tepki verdi ("o kadar uzun yazıyorsun ki okuyamıyorum bile",
  "hiçbir şey anlamadım"). Tablo, dosya yolu, kod adı yalnız gerektiğinde.
- **Önce konuş, sonra yap.** Her adımda ne yapılacağını söyle, "yap" dendikten sonra yap.
- **17 Kasım 2026'dan beri (Barbaros'un kararı): kural işi Oğuz Bey'in hesabıyla da yürür; o hesap her şeye yetkili** (kod, kural,
  metin, resim, yayın). Bu bölümdeki konuşma biçimi onunla çalışırken de geçerli. Eski not: **Kural işi Barbaros'ta.** Oğuz Bey kurallarla ilgilenmiyor; bu iş için ona bir şey iletilmez (sahibi: "Oğuz Bey'in görmesi
  önemli değil… Oğuz Bey kurallarla ilgilenmiyor").

## 1. Neden başladı

1. Oğuz Bey'in Vaka 7 Parti 1'inde **G4 (Süheyla)**, Vaka 6'nın terzisi **Jale**'nin aynısı çıktı (yüz biçimi, yaş, küt saç,
   koyu üst; tek fark saç rengi). Dilek'in de siyah küt saçı var. Sahibi: "Daha önce vakadaki karakterlerin önceki
   vakalardakinden mutlaka farklı olmasını istemiştim, kurala bağlamıştık. Bu kural geçerli değil mi?"
2. Bulunan: kural **yedi yerde** yazılı (`uretim/CLAUDE.md` 9 ve 9b, `arsiv/sablon/5_gorsel_sistemi.md` D-4 ve hatalar tablosu,
   `arsiv/uretim/ISTEM_KALIPLARI.md` §4, `sablon/6_vaka_formu.md` kontrol kutusu, `uretim/istem_kontrol.sh`, `uretim/CLAUDE.md` 0b),
   **kural kitabında yok**, ve **hiçbiri durdurmuyor**: `istem_kontrol.sh` yalnız "benzemiyor" sözcüğünü arıyor; `arac_yuz.py`
   yalnız yüze bakıyor, yalnız uyarıyor (Süheyla'yı en çok Ayla'ya benzetti 0,70, Jale'yi hiç bulmadı); form tarifinde Süheyla
   yalnız Dilek'le karşılaştırılmış ("kâkül yok" diye tek ayrıntı değiştirilmiş).
3. Önerilen "gözle karşılaştırma" çözümünü sahibi **reddetti**: "Bunu bir şekilde otomasyon şeklinde sağlamalıyız."
4. Sahibinin asıl itirazı (sözleri): "Bir sürü kural yazıyoruz ama sonra otomatik uygulanmadığını, gözle görmemiz gerektiğini
   söylüyorsun. Otomatik uygulamayacağımız kuralı niye yapıyoruz? Ben her seferinde yüzü, kaşı, saçı, ayağı, eli kontrol et
   diye söyleyemem. Yazdığımız bütün kurallar otomatik uygulanacak şekilde olmalı." … "Bunun içinden çıkmak mümkün değil."
   … "Her vakada farklı bir şeyle karşılaşıyoruz. Önce uğraştığımız şeylerle tekrar uğraşıyoruz. Hiçbir otomasyon yapamadık."

## 2. Sahibiyle varılan anlaşma (pazarlığa kapalı)

1. **Hiçbir kural kaybolmayacak.**
2. **Anlam değişmeyecek.** Metin sadeleşebilir, kelimesi kelimesine korunması şart değil ("korunması gerekiyorsa korunsun");
   önemli olan anlam ve amaçlanan işi yapması. **Her sadeleştirmede eski ve yeni metin yan yana gösterilir, onay sahibinden.**
   Sahibi: "Hepsi vakalardaki tecrübelerimiz sonucunda oluştu. Farklılaşırsa ya da kaybolursa emeklerimiz boşa gider."
3. **Her kural otomatik uygulanacak.** Programın ölçebildiği kurala program bağlanır ve iş durur. **Bilgisayarın ölçemediği
   kurallar** (parmak kontrolü, espriler ve benzeri) **her vakada, yeri gelince, ilgili adımda sahibine hatırlatılır**; sahibi
   "baktım" demeden o adım geçmez. Sahibi 198 kuralı her vakada tek tek söyleyip "yaptın mı" diye sormayacak.
4. **Sonunda bütün kurallar tek dosyada** (`KURALLAR.md`). İş dosyaları (diyalog, form, resim istemleri) kalır; rehberler
   (`CLAUDE.md`, `DEVIR.md`, teknik notlar) kalır ama **kural yazmaz**, yalnız kural numarasını anar. Kural yazılı dosya 34 → 1.
5. Doğruluk benim özetime bağlı olmayacak: **program sayar** (bkz. §4).

## 3. Bu pencerede yapılanlar (sırasıyla, hepsi `main`'de)

| commit | ne |
|---|---|
| `8459cf9` | `sablon/KURALLAR_TASLAK.md` — ilk deneme: 198 kural, uygulayıcı, 16 çelişki, kaynak eşlemesi. **GÜVENİLMEZ, kullanma:** satırlar Claude'un özeti, ~450 kaynak madde gruplanarak 198'e indi (ör. "göz kontrol listesi" tek satırda 17 madde). Sahibi bunu sorguladı; ham listeye geçildi. Yalnız **çelişki listesi** (dosyanın sonu) ve **uygulayıcı tespitleri** işe yarar, yeniden kullanılabilir. |
| `1661764` | **Ham liste:** `kaynak/arac_kural_ham.js` → `sablon/kurallar/HAM.tsv` (programlar için) + `HAM.md` (okumak için). 34 kural belgesi + 2 programdaki (`arac_kapi.js` K1–K13, `istem_kontrol.sh`) her madde, tablo satırı, paragraf **asıl metniyle**; özet yok, ayıklama yok. Her kaydın kalıcı kimliği (`id`, dosya + metin özeti; satır değişse de aynı). Eksiksizlik programla sayıldı: atlanan satır yok (fazladan sayılanlar yalnız kod bloklarının içindeki boş/`#` satırlar). |
| `809478b` | **Arşiv 1:** eski oyunun 16 belgesi `arsiv/`'e taşındı (silinmedi): `kaynak/inceleme_*.md` (12), `arsiv/kaynak/gorsel_promptlari.md`, `arsiv/kaynak/gorsel_promptlari_2.md`, `arsiv/kaynak/final_tablo_plani.md`, kökteki `PARA_YOLU.md`. Yeni oyunun kullandığı bilgi olmadığı denetlendi; okuyan program yok; doğrulayıcı geçti. `arsiv/OKUBENI.md` açıklar. |
| `e66c93b` | **Arşiv 2:** `arsiv/kaynak/gorsel_stil_sozlesmesi.md` ve `arsiv/kaynak/cengo_bag_mekanigi.md` `arsiv/kaynak/`'e. İçlerindeki iki işe yarar kural ham listede: **2123** (resim yanlış gösteremez — kanondaki yara/topallık/yaş yokmuş gibi çizilmez, gizlenecekse kadraj dışında; silinmez) ve **2204** (Cengo bağı küçük adımlarla, ±1/±2). Ham araç arşivdekini eski adıyla okur, kimlikler değişmedi (önce/sonra karşılaştırıldı: aynı). |
| `6d25b2f` | **OKUBENI bölündü:** `kaynak/OKUBENI.md`'nin eski oyuna ait satır 142–1146'sı (açık uyarılar, kapatılan tuzaklar, sızıntı, ekonomi, eski vakalar) `arsiv/kaynak/OKUBENI_eski_oyun.md`'ye; ortak kısım kaldı (derleme, dosyalar, geliştirici modu, testler, doğrulayıcı kuralları, koşullu metin, kayıt, ses, Android). Ham liste önce/sonra karşılaştırıldı: **kaybolan 0**, yeni 2 (taşıma notları). Doğrulayıcı ve `test_yedek.js` geçti. |

| (bu commit) | **Etiket önerisi, bütün ham liste** (sahibinin isteği, 16 Kasım gece: "belge belge değil, ham listeden satır satır"; emin olunmayan satır KURAL sayılır, sahibine yalnız kural olmayanlar gruplu gösterilir). `ETIKET_ONERI.tsv` (her `id` → KURAL / KAYIT / ESKİ OYUN + sebep), `ETIKET_KONTROL.md` (sahibinin okuyacağı gruplu liste). Sayım: 3.585 = 1.611 KURAL + 1.379 KAYIT + 595 ESKİ OYUN; atlanan yok. **Sahibinin onayı bekleniyor**; onaylanınca `ETIKET.tsv` olur. |
| (bu commit) | **İkinci göz** (sahibi binlerce satırı okuyamaz; 16 Kasım gece onayıyla): bağımsız bir Claude, öneriyi görmeden aynı 3.585 satırı etiketledi (talimat: aynı tanımlar). 207 satırda ayrıştık (114'ünde o KURAL dedi, 93'ünde ben). **Birleştirme kuralı: ikimizden biri KURAL dediyse KURAL** — hiçbir kural kaybolmaz; fazlası adım 2'de (birleştirme) ayıklanır. `ETIKET_ONERI.tsv` son sütun `ikinci_goz` onun etiketi. Sonuç: 1.725 KURAL. **Sahibi onayladı → `ETIKET.tsv`** (sözü: "Tamam demekten başka çarem yok" — binlerce satırı okuyamıyor; adım 2–4 de sahibine satır okutmadan, yalnız ayrışan ya da anlam değiştiren yerler sorularak yürümeli). Kalan risk: ikimizin de kural saymadığı bir kural (iki bağımsız okumada kaçmış olmalı). |

| `1458482`…`46032b2` | **Adım 2** (sahibi "yap" dedi, 16 Kasım gece): konu ataması, 16 konunun birleştirilmesi, bağımsız denetim, düzeltme, kapsam sayımı (687 kural, hata 0), sahibine 41 soru (`adim2/SORULAR.md`). Hepsi `sablon/kurallar/adim2/`. |

**Ham listenin şu anki hâli: 3.585 kayıt, 36 dosya** (yukarıdaki son commit). Bu, iş bitince yapılacak yeniden çıkarmanın
**karşılaştırma tabanıdır** (bkz. §6).

## 4. Plan — dört adım (sahibi planı gördü; "tam olarak ne" diye sordu, aşağıdaki gibi anlatıldı)

**Adım 1 — Etiketleme (BİTTİ, 16 Kasım gece: sahibi "tamam" dedi; `ETIKET.tsv`). Sıradaki: Adım 2.** Ham listedeki her kayda bir etiket önerilir:
- **KURAL** — yapılması ya da yapılmaması gereken bir şey;
- **ESKİ OYUN** — yalnız eski oyuna ait (asıl listeye girmez, kayıt için ham listede kalır);
- **KAYIT** — geçmiş, açıklama, örnek, gerekçe; kural değil.

Belge belge gidilir, **ilk belge kural kitabı** (`arsiv/sablon/2_kural_kitabi.md`, 61 kayıt). Sahibine iki liste gösterilir: KURAL
olanlar asıl metinleriyle; öbürleri kısa liste. Sahibi yanlış etiketi söyler. Onaylanınca etiketler **ayrı dosyaya** yazılır:
`sablon/kurallar/ETIKET.tsv` (`id` → etiket; ham liste ve belgeler değişmez). Bu adımda hiçbir kural birleştirilmez,
yeniden yazılmaz, silinmez. Sonra öbür belgeler (öneri sırası: 1. parça, 5, 6, 7, `uretim/CLAUDE.md`, `ISTEM_KALIPLARI`, kök
`CLAUDE.md`, 4. parça, 8. parça, TASLAK, RAF/TON/SEZON/ÇERÇEVE, `uretim/AGENTS.md`, `arsiv/uretim/v3_eski`, vaka başlangıçları, OKUBENI'ler,
doğrulayıcı/veri sözleşmeleri, en son `DEVIR.md` — 445 kaydın çoğu geçmiş).

**Adım 2 — Birleştirme (BİTTİ 17 Kasım; yalnız 41 soru cevap bekliyor — en üstteki kutu).** KURAL etiketlilerden aynı şeyi söyleyenler yan yana, asıl metinleriyle gösterilir; sahibi "birleşsin"
derse tek kural olur. **Gruplama yok:** her ayrı kural kendi satırında (taslaktaki hata tekrarlanmaz). Sadeleştirilen metin
eskisiyle yan yana onaylanır.

**Adım 3 — Kural dosyası.** Onaylananlar `KURALLAR.md`'ye. Bir program iki şeyi sayar: (a) ham listedeki her kaydın etiketi var
mı, (b) her KURAL kaydının son dosyada karşılığı var mı. Eksik varsa durur ve gösterir. Sonra öbür belgelerden kural metinleri
çıkarılır, yerine kural numarası konur (bu, sahibinin onayıyla, en sonda, bir seferde).

**Adım 4 — Uygulayıcı.** Her kurala ya program bağlanır (iş durur) ya da "sahibine hatırlatılır" işareti + hangi adımda
(sahibi "baktım" demeden adım geçmez). Uygulayıcısı olmayan kural kalırsa bir test uyarır. Önce en çok ısıranlar: benzerlik,
el, kıyafet, satır–resim.

## 5. Bulgular (kaybolmasın)

- **Kapı kendiliğinden çalışmıyor.** `.claude/kapi_hook.js` yazılmış, ama `.claude/settings.json` yok → commit'te kapı
  çalışmıyor. Belgeler "kendiliğinden çalışır, geçmezse commit olmaz" diyor. Program olan kurallar bile ancak biri elle
  çalıştırınca devreye giriyor.
- **Taslak (KURALLAR_TASLAK) sayımı** (özet olduğu için yaklaşık): 30 kural programla durduruluyor, 51 kısmen, 18 kodun yapısı
  gereği, **99'un hiç programı yok.**
- **Çelişkiler:** `KURALLAR_TASLAK.md`'nin sonunda 16 tane (ör. doğrulayıcı K19 hâlâ eski kasa/önizleme/kesinti düzenini
  denetliyor — `dogrulayici.js` 987, 1010, 1015; Peri'nin L1 poz resmi bir belgede yüz kaynağı, öbüründe yasak; İK §6 hâlâ
  "orta yeşil" zemin; kapı bağlantısı kapalı). İkinci taramada **5 yeni**: (1) Ton belgesi "kısa replik" ↔ kural kitabı 5
  "anlaşılır replik"; (2) Ton §6 "bağ her vakada bir konuşmayı değiştirir" ↔ kural 12a "yalnız kapanışta"; (3) Sezon belgesi
  "her kıyafette 4 ifade / ~96 görsel" ↔ 5. parça B "yalnız satırların istediği"; (4) Sezon belgesi "V7'de taç kasaya bağlı"
  geçersiz (kasa kalktı, kural 27); (5) `arsiv/uretim/v3_eski/CLAUDE.md` L1'i Peri'nin yüz kaynağı sayıyor.
- **Yalnız taslak dosyasında kalmış, sahibinin onayladığı kararlar** (asıl belgelere işlenmemiş): garip vaka harmanı
  (`arsiv/sablon/TASLAK_tekrar_onleme.md` §5), dönen figür hâli değişir ve üst üste iki vakada görünmez (§6), her formda "bu vakada hayvan
  görünsün mü?" sorusu (§6), sezon kuralları (§7–8).
- **Yazılı olmayıp uygulanan:** Cengo bağı ±1/±2 (yeni oyunun verisi −2…+2 arasında; kural hiçbir yerde yazılı değildi, şimdi
  ham kayıt 2204). Önerildi: doğrulayıcı ±2'yi aşan kararı durdursun — **sahibi henüz onaylamadı.**
- **Ham listeye girmeyenler:** ilk arşivlenen 16 dosya (incelemeler, eski istemler, planlar) kural belgesi sayılmadı, ham
  listede yok. İçlerinde eski oyuna ait ders olabilir. Sahibine "ekleyeyim mi" soruldu; sahibi "eski oyunun kuralları neden ham
  listede, kullanıyor muyuz" diye sordu, cevap: bir kısmı yeni oyunda da geçerli, kalanı ESKİ OYUN etiketi alır. **Ekleme
  kararı verilmedi** — sahibine yeniden sor.
- **`.md` sayısı:** depoda 430 `.md`; ~340'ı resim istemi (`G<n>.md`), ~30'u vaka metni, kalanı durum kayıtları. Kural yazılı
  olan 34 (+2 program).
- **Hâlâ kullanılan, arşivlenmeyecek** (sahibiyle konuşuldu): `kaynak/dogrulayici_sozlesmesi.md` (doğrulayıcı yeni oyunda da
  çalışıyor), `kaynak/veri_format_sozlesmesi.md` (yeni oyunun verisi bu biçimde), `kaynak/ses_promptlari.md` + `ses/GECICI.md`
  (yeni sayfa eski betiği ve sesleri kullanıyor), `kaynak/OKUBENI.md` ortak kısmı, `arsiv/uretim/v3_eski/` (eski oyun değil; yeni
  oyunun Vaka 3 ilk denemesi; bugünkü resim kuralları gerekçe ve örnek için ona atıf yapıyor).
- **Eski oyunun kodu arşivlenemez** (yeni oyun `motor.js` ve eski sayfa betiğini kullanıyor). Eski oyunun verisi
  (`game_data.json`, `vaka2-6.json`, `yan_*.json`) ve kökteki `index.html` ayrı karar konusu; dokunulmadı.
- **Kırık atıflar** (arşive taşınan dosyaların eski yolu): kök `CLAUDE.md` 11 yer, `kaynak/DEVIR.md` 2,
  `arsiv/kaynak/RAF_KARARLARI.md` 2, `kaynak/YENI_OYUN_GORSEL_PROMPTLARI.md` 2, `kaynak/referans/OKU.md` 2, `kaynak/OKUBENI.md` 1,
  `arsiv/kaynak/YENI_OYUN_CERCEVE.md` 1, `arsiv/kaynak/YENI_OYUN_TON.md` 1, `arsiv/sablon/TASLAK_tekrar_onleme.md` 1. Dosyalar `arsiv/` altında aynı adla.
  **Adım 3'te düzeltilecek** (sahibine söylendi). **DÜZELDİ (20 Kasım 2026, son adım):** bütün atıflar `arsiv/…` yoluna ya da
  kural koduna çevrildi — `sablon/kurallar/adim3/son_adim.md`.

## 6. Oğuz Bey ve süren işler

- Oğuz Bey bu işten **etkilenmez**: vaka yazarken kullanılan belgelere dokunulmadı; yeni `KURALLAR.md` sahibi onaylayınca
  **bir seferde** devreye girer, o zamana kadar eski belgeler geçerli. Vaka 8'e başlayabilir (sahibine söylendi).
- **Tek risk:** Oğuz Bey arada eski belgelere yeni kural eklerse ham listede görünmez. **Çare:** iş bitince
  `node arac_kural_ham.js` yeniden koşar, `HAM.tsv` bu plandaki tabanla (commit `6d25b2f`) `id` üzerinden karşılaştırılır;
  sonradan eklenen her kayıt etiketlenir. Kaybolan kayıt varsa (bir belge değişmiş demektir) o da gösterilir.

## 7. Sahibinin cevap bekleyen soruları (bu işin dışındakiler dahil)

1. **CEVAPLANDI (20 Kasım 2026):** G4 Süheyla ve G5 Nesrin reddedildi, yeni görünüşle yeniden yazıldı (`uretim/v7/DURUM.md` en üst).
   Eski soru: **G4 (Süheyla) reddedilsin mi, yeni görünüş ne olsun?** Sahibi gözle çözümü reddetti, otomasyon istedi.
   Benzerlik otomasyonu önerisi (iki adım: üretimden önce görünüş tablosu karşılaştırması — yaş, saç rengi, kesim, yüz biçimi,
   beden, ayırıcı işaret, ≥2 aynıysa istem üretime girmez; üretimden sonra saç ve genel görünüşü de karşılaştıran araç,
   bilinen benzer çiftlerle sınav: Süheyla–Jale, Necmi–Recep, Kaan–Bülent, Müzeyyen–Nadide…) **sunuldu ama sahibi bunun yerine
   bütün kuralları düzenlemeyi önceledi.** Not: 2. adımın aracı bu bulut kabında denenemiyor (yüz modeli inemiyor, ağ izni yok);
   Oğuz Bey'in ya da Barbaros'un bilgisayarında denenmeli.
2. **15c önerisi** (Oğuz Bey'in "konuklar birbirine benzemez" genel kuralı; metin `kaynak/DEVIR.md` en üstte) — kural listesine
   girecek; ayrıca işlenmedi.
3. **Vaka 7 resimleri durdu**: Barbaros'la Peri'nin kıyafeti (G1 manto Vaka 1'dekinden farklı — düğmeli, kapaklı cep; Vaka 1'de
   kruvaze, kuşaklı, açık yaka, saten bluz) konuşulmadan başlanmaz. Parti 1'in 24 resmi onay bekliyor; G2 web paketi
   (`uretim/v7/WEB_G2.md`) Barbaros'un hesabıyla üretilecek; dört konuk (Kaan, Ercan, Necmi, Şükrü) yeniden yazıldı, "başla"
   bekliyor.
4. **Kapı commit bağlantısı açılsın mı** (`.claude/settings.json`)?
5. **Doğrulayıcı K19'un eski kasa/önizleme/kesinti denetimleri kaldırılsın mı** (çelişki 1)? Sunuldu, cevap gelmedi.
6. **Cengo bağı ±2 denetimi** doğrulayıcıya eklensin mi?
7. **İlk arşivlenen 16 dosya ham listeye eklensin mi?**
