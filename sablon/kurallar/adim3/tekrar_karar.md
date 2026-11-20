# Tekrar adaylarının kararı (Adım 3)

Girdi: `adim3/TEKRAR_ADAY.md` (250 çift). Hiçbir kural dosyası değiştirilmedi; bu dosya yalnız öneridir.

## Özet

| karar | çift |
|---|---|
| AYNI | 11 (5, 9, 16, 36, 57, 59, 84*, 118, 122, 125, 176) |
| ICINDE | 8 (10, 13, 74, 81, 107, 110, 112, 141) |
| AYRI | 231 |

\* 84 (BILGI-21 ↔ YAPI-41) iki ayrı şeyi söyler, ama ikisi de RAF-111'e birleştiği için grubun içinde sayıldı.

Sonuç: 16 grup, 18 kod birleşir (687 → 669 kural).

Uygulanan ölçüt (tutarlı olsun diye):
- Bir kural ile o kuralı **denetimde** ya da **istemde** uygulayan madde AYRI (ör. sigara: SINIR-13 kural, ISTEM-55 istem sözcük listesi, DENETIM-35 denetim maddesi).
- KOD-73…KOD-80 ("7. parça → Otomatik denetimler" listesinin maddeleri) denetim listesidir, AYRI kaldı (KOD-78 sigara dahil).
- SUREC'teki "Adım N" özetleri (SUREC-12, -14, -21, -24) sürecin dizinidir; ayrıntılı kuralla (SATIR-26, SATIR-31, GOMME-6…) AYRI.
- Bir araç/ekran açıklaması (KOD-28 `--hepsi`, KOD-91, KOD-92, ARAYUZ-xx) ile kural AYRI; ikisi de aynı kuralı aynı işle söylüyorsa birleşti (KOD-32, KOD-31).

Birleşince güncellenecek atıflar (KURALLAR.md'de bulunan hepsi):
- SATIR-28 ("istem yazarken (SATIR-27)", "denetimde (SATIR-29)") → ISTEM-51 ve DENETIM-30.
- SEZON-24'teki "(SEZON-22)" → birleşik SATIR-35 metninde KAR-22 olarak yazıldı.

Yol üstünde görülen çelişkiler (karar değil, sahibine/birleştiriciye not):
1. SUREC-31 "görsel sayısı azaltılmaz" diyor; SEZON-24 (→ SATIR-35) bu kuralın 17 Kasım 2026'da kalktığını söylüyor (çelişki sorusu 31).
2. KOD-78 "Otomatik denetimler" altında; SINIR-13 ise "Doğrulayıcıda sigara metin taraması henüz yok" diyor (yalnız `istem_kontrol.sh` istemi tarıyor).
3. SATIR-36 eski etiketsiz Cengo düzenini "V1–V5" için sayıyor, KOD-44 "V1–V5, V7" diyor.
4. ISTEM-25 (ChatGPT reddederse önce düşünen kipte yeniden, sonra Grok) ile DENETIM-45 (ChatGPT reddi → doğrudan Grok, orijinal istemle; Grok da reddederse sahibine) sırada ayrışıyor — bu yüzden AYRI bırakıldı.

---

## Gruplar (AYNI / ICINDE)

### G1. KAR-6 ← SINIR-4 (çift 5, AYNI)
- ANA: KAR-6 (SINIR-4 kendi metninde "asıl kural: KAR-6, no 192" der).
- SINIR-4'ten eklenecek: "her resimde"; "dekolte istenir"; 17 Ekim 2026 Vaka 3 için sürdürüldü; 6 Kasım 2026 "dünkü ayarlar"; Gizem örneği; Vaka 3 kıskançlığı; adım 8 istemlerine baştan konur; kural 15b.
- Fark: yok.

Birleşmiş metin:

#### KAR-6 Peri her zaman en gösterişli kadındır
Sahibinin kararı, 10 Ekim 2026 (kural 15b); 17 Ekim 2026'da Vaka 3 için sürdürüldü; 6 Kasım 2026 "dünkü ayarlar". Eski güzellik kraliçesi olduğu için her resimde, vakadaki kadınların içinde en gösterişli ve en seksi odur; dekolte istenir. Başka bir kadınla aynı karede Peri açıkça daha alımlı görünür (ışık, duruş, kıyafet); öbür kadınlar çekici kalır ama onu gölgede bırakmaz. Başka bir kadınla (ör. Gizem) yan yana Peri çok daha alımlı görünür. Vaka 3'te kıskançlık bundan doğar: Peri üstün olduğu hâlde huzursuzlanır. Görsel istemlerine (adım 8) baştan konur.
*Kaynak:* 192, 1210, 2566, 2997

### G2. TON-8 ← SATIR-14 (çift 10, ICINDE)
- ANA: TON-8 (sahne notu yazımı; SR-H ve kural 4a'yı zaten anar).
- SATIR-14'ten eklenecek: yalnız kaynak numaraları ("nereden biliyoruz?" sınavı ve depo örneği TON-8'de var).
- Fark: yok. Not: SR-H artık SATIR bölümünde ayrı madde olarak değil, TON-8'de durur.

Birleşmiş metin:

#### TON-8 Sahne notu yalnız o an görüleni söyler
Sahibinin kararı, 8 Kasım 2026 (5. parça SR-H; kural kitabı 4a). Anlatı satırı karakterin aklındakini ya da sonra ortaya çıkacak bir gerçeği yazmaz. "Sonra parayı sakladığı depoya doğru koşuyor" yanlıştır (para itirafta ortaya çıkıyor); "Sonra depoya doğru koşuyor" doğrudur. Bulanık replik taramasındaki "Nereden biliyor?" sorusu sahne notlarına da sorulur (TON-14): anlatıcı da "nereden biliyoruz?" sınavından geçer.
*Kaynak:* 176, 701, 6, 384, 2628

### G3. SUREC-27 ← KOD-32 (çift 13, ICINDE)
- ANA: SUREC-27.
- KOD-32'den eklenecek: örnek `V5 40`; "Şablon 7. parça adım 5 ve 14"; "Test değil, araç."; "sahibinin kararı" (SUREC-27'de var).
- Fark: KOD-32'nin komutunda öndeki `node build_html.js yeni &&` yok; birleşik metin SUREC-27'nin tam komutunu korur.

Birleşmiş metin:

#### SUREC-27 Sızıntı taraması
22 Ekim 2026, sahibinin kararı — her vakadan sonra (adım 5'te ve adım 14'ün ön koşulu olarak; şablon 7. parça adım 5 ve 14): `cd kaynak && node build_html.js yeni &&
node arac_sizinti_tur.js VN [tur]` (ör. `V6 40`, `V5 40`). İki parça: (1) araç oyunu farklı yollardan oynar, her ekranda oyuncunun o an bilmediği
olgunun metni / kısa adı çıkıyor mu bakar — bulursa çıkış 1 (= sızıntı); (2) `kaynak/YENI_UI/sizinti_okuma.txt` ELLE okunur (Nurcan):
"Dosya çözüldü", `## cozum` MASUM satırları ve karar ÖNİZLEME/SONUÇ/CENGO yalnız her yolda oynayan sahnelerin (yüzleşmeler + kovalamaca
itirafı) söylediğini mi anıyor? Bir ipucunun bilgisi geçiyorsa sızıntıdır (22 Ekim'de 9 tane böyle bulundu: "kodu, fişi", "Gizem'in
fotoğrafı", "örtüyü"…). Bulgu sahibine kısa liste olarak verilir; düzeltme tek tek, önce/sonra gösterilerek yapılır (SUREC-1). Test değil, araç.
*Kaynak:* 694, 2783, 15, 2886

### G4. ARAYUZ-37 ← SUREC-42 (çift 16, AYNI)
- ANA: ARAYUZ-37 (arayüz düğmesi).
- SUREC-42'den eklenecek: düğme metni "Vaka N · Başlık (test)"; Vaka 1 dahil, açılış atlanır; 16 Eki 20:20 Vaka 2 donduktan sonra sahibinin isteği; yeni vaka eklenince düğme kendiliğinden çıkar; Vaka 2 süre/görsel kaydı.
- Fark: ARAYUZ-37 "10 Ekim 2026, her **sonraki** omurga vakası" der; SUREC-42 "16 Ekim, her vakaya, **Vaka 1 dahil**". Birleşik metin ikisini tarihle sıralar (10 Ekim ilk hâl, 16 Ekim Vaka 1 dahil) — bu sıralama bizim okumamızdır, sahibi bakmalı. Parantezdeki Vaka 2 süre kaydı konu dışıdır, kaybolmasın diye taşındı.

Birleşmiş metin:

#### ARAYUZ-37 "Vaka N'den başla" test düğmeleri (GEÇİCİ)
"Baştan başla" onay ekranında her vaka için bir düğme ("Vaka N · Başlık (test)"). İlk hâli 10 Ekim 2026'da, sahibinin testi için, her sonraki omurga vakasına; Vaka 2 donduktan sonra (sahibinin isteği, 16 Ekim 2026, 20:20) Vaka 1 dahil her vakaya, açılış atlanır. Önceki vakalar motorda kendiliğinden oynanır (her ipucu, doğru suçlama, ilk karar). Yeni vaka eklenince düğmesi kendiliğinden çıkar. Şimdilik AÇIK KALIR (`VN_VAKA_ATLA = true`, sahibinin kararı, 9 Kasım 2026); **yayından önce** `yeni_arayuz.js` → `VN_VAKA_ATLA = false`.
(Kayıt: Vaka 2 toplam ≈ 11 sa 06 dk, tablo `vaka2_baslangic.md` §1; 63 görsel = 59 + Onay 3'te 4.)
*Kaynak:* 2454, 2938, 3017, 3079, 3055

### G5. RAF-111 ← YAPI-41, BILGI-21 (çiftler 9, 84, 118; AYNI)
- ANA: RAF-111 (üç kuralın kaynağı da RAF_KARARLARI §12b bloğu, no 1697–1703).
- YAPI-41'den eklenecek: "9 Kasım 2026 raf kararı"; vaka başına en fazla bir-iki, yalnız gerçekten komik an varsa; rozeti olmayan vaka da olur.
- BILGI-21'den eklenecek: "12'nin 3'ü" YOK; gri/kilitli kutu yok; gerekçe (gri rozetin adı görülmemiş sahneyi söyler — Nurcan; sayı nottur); oyuncu rozeti kazandığı an öğrenir.
- Fark: yok. ARAYUZ-35 (Defter → Rozetler sayfası) ve RAF-110 (raf/kitap ayrımı) AYRI kalır.

Birleşmiş metin:

#### RAF-111 Paravan'ın rozetleri: komik anlar, yalnız kazanılan görünür, Play başarı sistemi yok
9 Kasım 2026 raf kararı (Paravan rozetleri ve sezon sonu tablosu). Rozetler yalnız komik anlar içindir ("Pastaya oturdun", "Saadet Hanım'dan üç kez saklandın"); iyi/kötü karar için rozet YOK — oyun not vermez. Vaka başına en fazla bir-iki, yalnız gerçekten komik bir an varsa; hiç rozeti olmayan vaka da olur.
Yalnız kazanılan rozetler görünür. Liste yok, sayı yok ("12'nin 3'ü" YOK), gri/kilitli kutu yok — gri bir rozetin adı görülmemiş bir sahneyi söyler (Nurcan), sayı nottur. Oyuncu rozeti kazandığı an varlığını öğrenir. Google Play başarı sistemi kullanılmaz (bütün listeyi ve sayıyı kendisi gösterir, gizliler bile sayılır).
*Kaynak:* 1702, 2011, 3019, 1698, 1703, 1699

### G6. KAR-22 ← SEZON-22 (çift 36, AYNI)
- ANA: KAR-22.
- SEZON-22'den eklenecek: takı ve aksesuar da değişir (sahibinin isteği); Peri'nin saçı da değişir; Cengo'nun saçı değişmez (19 Kasım 2026); kıyafet kütüphanesi tutulmaz; görsel üretimi vaka metni yazıldıktan sonra (maliyet notu).
- Fark: anlamca yok (KAR-22'nin "Cengo'da sabit: yüz, saç…" sözü 19 Kasım kararıyla aynı). Son cümle (görsel üretiminin zamanı) konu dışıdır; kaybolmasın diye taşındı — istenirse ayrı bir SEZON kuralı olarak bırakılabilir. Atıf: SATIR-35'e giren SEZON-24 metnindeki "(SEZON-22)" → "(KAR-22)".

Birleşmiş metin:

#### KAR-22 Her vakada yeni kıyafet
Peri ve Cengo her vakada yeni kıyafet giyer; kıyafeti, takısı, aksesuarı vakaya göre değişir (sahibinin isteği). İstisna: Vaka 1 temel kıyafeti kullanır; yeni kıyafet Vaka 2'den başlar. Kovalamacadaki felaket kıyafeti her vakada yenidir. Peri'nin vakadaki kıyafeti girişte ilk kez görünür (kural 15a); çekicilik anı burada olur. Peri'nin saçı da değişir. Cengo'da sabit kalan yalnız yüz, saç, tel ve bileklik; ceket dahil kıyafet değişir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 17); **Cengo'nun saçı değişmez** (sahibinin kararı, 19 Kasım 2026). Bu yüzden kıyafet kütüphanesi tutulmaz.
Görsel üretimi vaka metni yazıldıktan sonra yapılır (maliyet notu `kaynak/YENI_OYUN_SEZON.md` §9).
*Kaynak:* 193, 102, 1857, 3084, 1971

### G7. BILGI-7 ← ARAYUZ-12 (çift 57, AYNI)
- ANA: BILGI-7 (kural 21d bir Nurcan kuralıdır).
- ARAYUZ-12'den eklenecek: Anı sekmesi; formda §12'nin altına; `**ANI:** …` biçimi, `## cozum`'dan sonra; bölüm zorunlu (yoksa `arac_diyalog.js` yazmaz); örnek `vaka2_diyalog.md`; `2_kural_kitabi.md`; Vaka 3 başlangıç notu (`vaka3_baslangic.md` §1).
- Fark: yok. KOD-76 (otomatik denetim maddesi) ve ARAYUZ-11 (Anı ekranı) AYRI kalır.

Birleşmiş metin:

#### BILGI-7 Anı özeti yalnız herkesin duyduğunu yazar (kural 21d)
Sahibinin isteği, 17 Ekim 2026. Anı defterinde (Anı sekmesinde) her biten vakanın üstünde (Peri'nin notunun üstünde) 2–3 cümlelik hatırlatma — anı özeti — durur: müşteri ve kayıp, kim almıştı, neden. Bütün kararlarda aynıdır. Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği girer; bir ipucunda kalmış ayrıntı ya da karara göre değişen hiçbir şey (sonuç dahil) girmez (kural 21d, `2_kural_kitabi.md`). Formda §12'nin altına yazılır; diyalogda `## ani` bölümüne (`**ANI:** …`, `## cozum`'dan sonra) gider. Bölüm zorunlu: yoksa `arac_diyalog.js` veriyi yazmaz. Örnek: `vaka2_diyalog.md` → `## ani`. (Vaka 3 başlangıç notunda istendi: `vaka3_baslangic.md` §1; örnek Vaka 2'de.) Kimi suçladığın ve kararın oyunun kendi kaydından yazılır (kasa yok, kural 24). Vaka formu onaya gitmeden "Anı özeti yazıldı; yalnız itirafın söylediğini içeriyor" kontrolü işaretlenir.
*Kaynak:* 203, 634, 669, 2577, 3007

### G8. ISTEM-51 ← SATIR-27 (çift 59, AYNI)
- ANA: ISTEM-51 (kuralın işi istem dosyasına bölüm yazmak).
- SATIR-27'den eklenecek: "bütün vakalarda"; 8 Kasım 2026 kararı, 5. parça C0; görselsiz tur + `arac_satir_resim.js` komutu; bölümün yeri (`## Kontrol`'den önce) ve içeriği; satırların HEPSİNE uyma, uymazsa istem bölünür (SR-D); EYLEM ve JEST bayrakları; okuma sorusu; Codex bölümü istem metnine katmaz; bayraklar istemden önce kapanır (SR-E, SATIR-10); 13 Kasım SR-M notu.
- Fark: kapsam sözü — ISTEM-51 "figür, ara kare ve detay", SATIR-27 "her figür ve kare"; birleşik metin ikisini birlikte sayar. Tarih: ISTEM-51 "6–7 Kasım kalıcı karar", SATIR-27 "8 Kasım"; ikisi de korundu. Atıf: SATIR-28'deki "(SATIR-27)" → "(ISTEM-51)".

Birleşmiş metin:

#### ISTEM-51 `## Satırlar` bölümü
`## Satırlar` bölümü **bütün vakalarda**, her figür, ara kare, detay ve kare isteminde bulunur (satır–resim uyumu zorunlu: sahibinin kalıcı kararı 6–7 Kasım; 8 Kasım 2026, sahibinin kararı, 5. parça C0; ISTEM_KALIPLARI §10, SR-D, SR-E, SR-K); figürde boş olamaz. Yalnız satırların istediği ifade üretilir. `istem_kontrol.sh` yoksa geçirmez.
Görselsiz tur bütün yollarda (`arac_yeni_tur.js … --hepsi`, her yolun `satir/`'ını kopyala) → `node arac_satir_resim.js <dokum…> --vaka V<N>`. İstem dosyasında `## Kontrol`'den önce o resmin satırları konur (konuşan: metin; dinliyorsa işaretli). İstemin ifade ve poz satırları bu satırların HEPSİNE uyacak biçimde yazılır; bir satır uymazsa istem bölünür (SR-D). EYLEM bayraklı anlatı satırı (yiyor, uzatıyor, kesiyor…) kare ister ya da diyalogda o satıra uygun kare/figür bağlanır. JEST bayraklı replik ("(papyonunu düzelterek)", parantezli sahne yönü) konuşanın figürünün pozuna yazılır. Her satır şu soruyla okunur: *bu pozdaki her nesne ve hareket BU satırda metinde var mı; metindeki her kişi ve şey ekranda mı?* Codex bu bölümü istem metnine KATMAZ (yalnız `## İstem` gider); yerel Claude yazarken ve denetlerken okur. İstem yazılmadan önce her bayrak kapanır (SR-E, SATIR-10). (Not: 8 Kasım metnindeki "figür/kare bağlanır ya da sahibi 'kalsın' der; 'kısmen uyuyor' da sahibine gider" 13 Kasım'dan beri SR-M düzeniyle işler: sahibine yalnız SOR gider.)
*Kaynak:* 3566, 3578, 2967, 2630, 715, 1073, 1218

### G9. SATIR-35 ← SEZON-24 (çift 81, ICINDE)
- ANA: SATIR-35.
- SEZON-24'ten eklenecek: "görsel sayısını satırlar belirler; istediği de esirgenmez"; kalkan iki eski kural (11 Ekim 2026 "görsel sayısı azaltılmaz", 4 Ekim 2026 "~96 görsel, dörder ifade") ve 17 Kasım 2026 çelişki sorusu 31; her vakada yeni kıyafet atfı.
- Fark: yok. Dikkat: SUREC-31 hâlâ "görsel sayısı azaltılmaz" diyor (yukarıda çelişki 1).

Birleşmiş metin:

#### SATIR-35 Yalnız satırların istediği ifade ve poz üretilir
Kıyafet başına sayı (sahibinin kararı, 8 Kasım 2026 — 8 Ekim kararının yerine): yalnız satırların istediği ifade ve poz üretilir. Bir ifadenin vakada hiçbir satırı yoksa (`arac_satir_resim.js` → "Resim → satırlar" listesinde boşsa) üretilmez. Eski "Peri'nin her kıyafetinde yedi ifadenin hepsi" kuralı kalktı (Vaka 3'te altı resim hiçbir satırda kullanılmadan üretildi; biri filtreye takılıp sahibine web'de iş çıkardı).
- **Peri:** tavan yok; satırların istediği her ifade + vakanın gerektirdiği her nesneli ve hareketli poz. Aynı görsel bir sahnede art arda çok tekrar ederse yeni poz üretilir (o da satırlardan çıkar).
- **Cengo:** satırların istediği ifadeler (genelde normal, kas, gülen, yumuşak) + vaka gerektirirse fazlası. Her vakada sabit "4 ifade" üretilmez; vaka formundaki "Cengo: 4 ifade" satırı buna göre düzeltilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 28).
- **Konuk:** en az 1 ifade; "gerekirse 2–3" yalnız tahmindir, üst sınır değil — satırlar daha çok isterse üretilir (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 29).
- Konuklar, arka planlar, ara kareler, detaylar görsel listesinde ayrıca yer alır.
- Görsel sayısını satırlar belirler: satırın istemediği ifade üretilmez, istediği de esirgenmez. Eski "görsel sayısı azaltılmaz" (11 Ekim 2026) ve "~96 görsel, her vakada Peri ile Cengo için dörder ifade" (4 Ekim 2026) kuralları kalktı (sahibinin kararı, 17 Kasım 2026, çelişki sorusu 31). Her vakada Peri ile Cengo yeni kıyafet giyer (KAR-22).
*Kaynak:* 371, 372, 373, 645, 370, 646, 1971, 3081

### G10. YAPI-17 ← TON-17 (çift 107, ICINDE)
- ANA: YAPI-17.
- TON-17'den eklenecek: "yüzleşmede"; `sablon/1_oyun_yapisi.md` → Yüzleşme sahneleri atfı; "Vaka 4'te de geçerli".
- Fark: yok.

Birleşmiş metin:

#### YAPI-17 Panik ve kaçışın somut sebebi
Sahibinin kararı, 17 Ekim 2026. Yüzleşmede suçlunun paniği somut bir sebebe bağlanır. Suçlu "Bir his", "His mi?", "Neredeydin?", "Fırına bakayım" gibi zayıf / cevabı kolay bir sözle kaçmaz. Kaçışı bir tetikleyici başlatır: ya kanıt yalanını çürütür (doğru kanıt), ya da **sakladığı şey tehlikeye girer** (biri, farkında olmadan, onun sakladığı yeri arayacağını söyler). Oyuncu kovalamacada "ha, bu yüzden kaçtı" diyebilmeli. Örnek, Vaka 3: Nadide "Yarın eksper dükkânı arayacak, depodaki un çuvallarına kadar" der; para o çuvaldadır, Ferruh depoya koşar. Üretimde her yüzleşme "Neden kaçıyor?" diye denetlenir; Vaka 3'te üç yüzleşme bu yüzden yeniden yazıldı. Vaka 4'te de geçerli. Ayrıntı `sablon/1_oyun_yapisi.md` → Yüzleşme sahneleri.
*Kaynak:* 145, 710, 5, 2629

### G11. DENETIM-30 ← SATIR-29 (çift 110, ICINDE)
- ANA: DENETIM-30 (ikisi de denetim kuralı).
- SATIR-29'dan eklenecek: "resim istemle birlikte o satırlarla da okunur"; "konuşanın kim olduğu"; Vaka 3 örneği (dinleyen parmağıyla işaret edince konuşan sanılır).
- Fark: yok. Atıf: SATIR-28'deki "(SATIR-29)" → "(DENETIM-30)".

Birleşmiş metin:

#### DENETIM-30 Satırlarla uyum
Resim metindeki satırla uyuşmalı: denetimde resim istemle birlikte o satırlarla da okunur — istemin `## Satırlar` bölümündeki (yoksa `arac_satir_resim.js` çıktısındaki) HER satıra — yüz, el, jest; konuşanın kim olduğu: dinleyen figür konuşan gibi görünmüyor mu (dinleyen parmağıyla işaret ediyorsa konuşan o sanılır — Vaka 3, Gizem konuşurken Peri'nin işaret eden figürü); elde nesne yalnız metnin getirdiği satırlarda mı (SR-D); bakış satırın söylediği yere mi (SR-I).
*Kaynak:* 469, 1128, 716, 1074

### G12. KAR-8 ← TON-18, TON-20 (çiftler 74, 112; ICINDE)
- ANA: KAR-8 (iki kuralın özü zaten orada).
- TON-18'den eklenecek: gerekçe (hep Cengo kazanırsa Peri yemlik, hep Peri kazanırsa Cengo palyaço).
- TON-20'den eklenecek: "birbirlerini aşağılamazlar; birbirleriyle uğraşırlar".
- Fark: TON-18 ve TON-20 "Ton belgesi taslağı §4, öneri" diye işaretli; KAR-8 kural. Birleşik metinde öneri işareti yalnız eklenen cümlelerde durur, KAR-8'in kendi cümleleri kural olarak kalır.

Birleşmiş metin:

#### KAR-8 Atışmanın ekseni ve kuralı
- **Eksen (sahibi belirledi): kadın kural, adam içgüdü.** Her vakada aynı kavga başka kılıkta çıkar: *"Kapıyı çalalım." / "Kilidi açalım."*
- Son sözü sırayla alırlar; her vakada ikisi de en az bir kez "kaybeder". Kavga işin üstündedir, kişiliğin değil.
- (Ton belgesi taslağı §4, öneri:) Hep Cengo kazanırsa Peri yemlik olur; hep Peri kazanırsa Cengo palyaço olur. Peri ile Cengo birbirlerini aşağılamazlar; birbirleriyle uğraşırlar.
*Kaynak:* 183, 1754, 1987, 1756, 1758

### G13. KAR-9 ← TON-19 (çift 122, AYNI)
- ANA: KAR-9.
- TON-19'dan eklenecek: vaka tasarımı bunu taşır; "kapı" sözü; oyuncu ikisine de ihtiyaç duyar; "ikisi de haklıdır, ikisi de yanlıştır".
- Fark: TON-19 "öneri" (taslak §4); KAR-9 kural. Öneri işareti eklenen cümlede kalır.

Birleşmiş metin:

#### KAR-9 İkisi de gerekli
Bazı ipuçlarını Peri'nin yolu (kural, kibarlık), bazılarını Cengo'nun yolu (tanıdık, kurnazlık) açar.
(Ton belgesi taslağı §4, öneri:) İkisi de haklıdır, ikisi de yanlıştır. Vaka tasarımı bunu taşır: bazı kapıları kural (Peri) açar, bazılarını içgüdü (Cengo). Oyuncu ikisine de ihtiyaç duyar.
*Kaynak:* 184, 1757

### G14. KOD-3 ← SUREC-9 (çift 125, AYNI)
- ANA: KOD-3.
- SUREC-9'dan eklenecek: eski `index.html` md5'i aynı kalmalı; "gerekiyorsa tur"; resim gömme (`göm`) adım 5 bu komutlardır; hepsi geçerse commit → push.
- Fark: yok.

Birleşmiş metin:

#### KOD-3 Her commit'ten (ve her değişiklikten) önce
```
cd kaynak
node dogrulayici.js && node build_html.js     # doğrulayıcı geçmezse derleme olmaz
for t in test_*.js; do node $t; done          # test_bozuk.js hariç hepsi geçmeli
```
Yeni oyunda her değişiklikten sonra: `node dogrulayici.js yeni`, `node build_html.js yeni`, `node build_html.js` (iki derleme; eski `index.html`'in md5'i aynı kalmalı), testler. Sahneyi etkileyen
değişiklikte ayrıca tur (`node arac_yeni_tur.js 0 vapur dogru` gibi, yollar KOD-27'de) ve sızıntı taraması (`node arac_sizinti_tur.js V5 40`). Resim gömmede (`göm` komutu) adım 5 bu komutlardır. Hepsi geçerse commit → push.
*Kaynak:* 10, 11, 2326, 2350, 2886, 2555, 1147

### G15. YAPI-40 ← KAR-20 (çift 141, ICINDE)
- ANA: YAPI-40.
- KAR-20'den eklenecek: "dört kararın" Cengo satırları; vaka formu 12. Kararlar'da da denetlenir.
- Fark: yok.

Birleşmiş metin:

#### YAPI-40 Cengo'nun yorumu gizli not olmamalı
Komedi "not vermez" kuralını yeni bir yerden deler: Cengo'nun esprisi gizli bir not olabilir — her temiz karara alkış, her kirli karara laf sokarsa Cengo puan tabelasına döner.
- Cengo yorum yapabilir, çünkü o bir karakterdir, hakem değil. Ama tepkisi ahlaka değil **duruma** göredir: bazen kurnazca kirli bir oyunu sever (eski besleme tablosunda da öyleydi), bazen dürüst bir karar ona pahalıya patlar ve söylenir.
- Bir vakadaki (dört) kararın Cengo satırları yan yana konunca "doğru cevap" okunmamalı; `arac_akis_denetim.js` tam bunu basar; vaka formu 12. Kararlar'da da denetlenir.
*Kaynak:* 1792, 1794, 1795, 210, 632

### G16. ARAYUZ-8 ← KOD-31 (çift 176, AYNI)
- ANA: ARAYUZ-8.
- KOD-31'den eklenecek: uyarının metni, koşulu (alçak, dokunmatik, yatay ekran), yeri (`yeni_arayuz.css` sonu, `body::before`) ve gerekçesi (sahne ~170 px'e iniyordu).
- Fark: yok (KOD-31 "Ekim 2026", ARAYUZ-8 "16 Ekim 2026" — aynı karar).

Birleşmiş metin:

#### ARAYUZ-8 Yatay telefon
Yatay telefon için ayrı düzen yok, uyarı var (sahibinin kararı, 16 Ekim 2026): telefon yatayda (alçak, dokunmatik, yatay ekran) oyunun üstüne "Telefonu dikey çevir" uyarısı biner (`yeni_arayuz.css` sonu, `body::before`; sahne ~170 px'e iniyordu).
*Kaynak:* 3032, 15

---

## AYRI dediğim çiftler

1, 2, 3, 4, 6, 7, 8, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 82, 83, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 113, 114, 115, 116, 117, 119, 120, 121, 123, 124, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
