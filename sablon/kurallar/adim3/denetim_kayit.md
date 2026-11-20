# İkinci göz — kayıt sınıflaması denetimi (`kayit_sinif.tsv`)

20 Kasım 2026. Hiçbir dosya değiştirilmedi; yalnız bu rapor yazıldı.
Karşılaştırma `KURALLAR.md`'nin kural gövdeleriyle (`####` başlıkları) yapıldı; `URETIM` hedefleri `uretim/CLAUDE.md`'de arandı.

## Özet

| denetim | kapsam | sonuç |
|---|---|---|
| 1. GECMIS | 429 satırın hepsi okundu | **20 satır yükselmeli** (6 güçlü, 8 orta, 6 zayıf) |
| 2. DERS-VAR / BILGI-VAR | 163 satırın hepsi başlıkla, ~85'i kural metniyle karşılaştırıldı | **5 yanlış** (anlam kuralda yok), **8 kısmi** (yarısı kuralda) |
| 3. DERS / BILGI hedefi | 247 satıra göz gezdirildi | **4 net yanlış**, 6 küçük (daha iyi yer var) |

GECMIS'in büyük kısmı (ayraç, tablo başlığı, okuma sırası, ara kaydı, ilk taslak, yapıldı notu, reddedilen seçenek) doğru sınıflanmış.

---

## 1. GECMIS → yükselmesi gerekenler

### Güçlü (üretimde gereken bilgi kuralda yok)

| id | önerilen | neden |
|---|---|---|
| e4bcfa1e27, 1828d4530e, 24d1f334cf, 2cea0bfc65 | BILGI → SUREC-30 (ve RAF-105/106) | Vaka 4'ün metin adımlarının süreleri (Form 25 dk, Onay 1 ~58+10 dk, diyalog 11 dk, tur 17 dk); V4'ün "toplam" satırı boş olduğundan bunlar atılırsa V4 ölçümü hiç kalmaz — oysa RAF-106 "yayın sözü Vaka 4–5 ölçülünce" diyor. |
| 929dc73367 | BILGI → YAPI-13 | "Cengo şüpheli (motor izin veriyor)" — V6'da Cengo yanlış şüpheliydi; Peri/Cengo'nun şüpheli olabileceği KURALLAR'da hiçbir yerde yazmıyor. |
| 06c17df589 | BILGI → SUREC-14 / KOD-35 | Yeni vakada kapı için `arac_kapi.js` YOLLAR tablosu ve `vakaN_kapi.md` (eş sözler) adım 5'te yazılmalı (V7'de eksikti); KOD-35 yalnız V6 dosyasını anıyor, SUREC-14 kapıyı hiç anmıyor. |

### Orta

| id | önerilen | neden |
|---|---|---|
| 029a998c5d | DERS → SUREC-15 (TON-14) | V2 Onay 2'nin 22 notunun **hepsi** bulanık replikti — bulanık taramanın doğuş gerekçesi; TON-14 yalnız "Vaka 2 ölçümünden" diyor. |
| 34a487a69c | DERS → SATIR-21 | V2 görselli turda 7 düzeltmenin 3'ü konuk girişiydi: V1 dersi V2'de tekrarladı (kuralın neden kapıya bağlandığının kanıtı). |
| c9e79469d0 | BILGI → SATIR-7 (sahibine sor) | Sahibi küçük süreklilik farkını (tepsi örtüsü çizgili/dantelli) kabul etti; DENETIM-51 "tutarlılık beğeni diye geçilmez" ile ilişkisi yazılı değil — emsal kaybolur. |
| 05ebd9184d, 7dd9142ea4 | BILGI → SUREC-30 | V6 resim aşamasının Codex süreleri (Parti 2: 5 Codex ~10 dk; düzeltme: 3 Codex ~7 dk, 2 kol) — SUREC-30 "resim başına Codex süresi" istiyor; V6 için başka kayıt yok. |
| 26c14d892a, 48e4d7d162, b0fe8f55fb | BILGI → SUREC-30 | V7 süre satırları. **Ayrıca:** V7 henüz donmadı; `vaka7_baslangic.md` canlı süre tablosu — arşive taşınırsa üretim kaydı yarıda kalır. Bu dosyanın taşınması V7 donana kadar ertelenmeli. |

### Zayıf (kaybı küçük ama tecrübe)

| id | önerilen | neden |
|---|---|---|
| 31b0e7a581 | BILGI → SEZON-7 | Büro hayvanı V6'da da yok; "henüz hiçbir vakada görünmedi" bilgisi SEZON-7'nin açık sorusu (ilk hangi vakada) için gerekli. |
| c19343d93a | BILGI → GOMME-3/4 | Web üretimi: Grok 912×1136 verdi, araç büyüttü, ölçek tuttu; boydan gelen figür elle kırpıldı; boyun cebi zemini elle temizlendi. |
| 434bcb3027 | BILGI → KOD | "Motorda ve derleyicide gömülü tek bir vaka adı yok" — vaka eklerken korunacak mimari özellik. |
| bfcbc735ee | BILGI → SUREC-34 | Ortağın düzeni: metin/senaryo ve form ayrı oturumda yazılır (V7). |
| 8c84b80519 | DERS-VAR → SEZON-9 | "Kararlar arası fark 5–20 bin" — SEZON-9'un "az/çok para hissedilmiyor" tespitinin sayısal kanıtı. |
| 7e16212aad | DERS → SATIR-35 | Çerçevedeki sprite gerekçesi ("aynı ifade üç replikte çalışır") SATIR-35'in tersine giden eski gerekçe; neden bırakıldığı kayıtta dursun. |

### Tutarsızlık (sınıf değil, kural)
- Kullanılmamış fikirler iki farklı sınıfta: V8 ilk taslağı ve Cengo'nun reddedilen sırları (5af707db8e, ae5944457c, f3de5a8551…) **BILGI → SEZON-16/17** ("fikir havuzu"), ama V7'nin terk edilen saat/usta planı (962c44ffa3, 84969bee69, dbab0d56ca, 4133621de0, a8c3848365) ve seçilmeyen öneriler (32e00ff73a) **GECMIS**. Biri seçilmeli.
- Reddedilen seçenekler (5fc27a364c, de1544494e, 34909d02c3… ve iptal edilen D/E/F) GECMIS'te doğru; kararlar kuralda (SUREC-38 vb.). Yeniden önerilmesin diye ayrı bir "reddedilenler" listesi gerekip gerekmediği sahibine sorulabilir.

---

## 2. DERS-VAR / BILGI-VAR — kuralda yok ya da yarım

### Yanlış (anlam hedefte yok)

| id | hedef | sorun → öneri |
|---|---|---|
| 465321f998 | ISTEM-26 | "G44 ve G56 2. retten sonra 3. üretimde temiz geldi" filtre değil **denetim reddi**; BIRIKIM'de "3. kez reddedilecekse dur, sahibine sor" kuralının altında. ISTEM-26 (filtre) yanlış → **DERS → DENETIM-42** (3. ret kuralının kanıtı). |
| 5691d10441 | SUREC-16 | İki yarım: kanon okuma SUREC-16'da var; ama "satır numarası sahne içinden **dosya satırına** geçti" yok ve **SUREC-35 ile çelişiyor** (SUREC-35 sahne içi numara diyor). Sahibine sorulmalı hangisi geçerli. |
| e9f4b3cbe7 | SUREC-30 | "İstem/referans verme ve araç yazımı (arac_paket.js) süreden sayılmaz" SUREC-30'da yok → DERS → SUREC-30. |
| e60b9134cd | SUREC-30 | "Saat dururken sahibinin beyan ettiği çalışma (45 dk) aktif süreye eklenir" SUREC-30'da yok → DERS → SUREC-30. |
| 4915076b46 | ISTEM-56 | ISTEM-56 yalnız "susam değil yosun" diyor; **sebep** ("dalga susam getirmez" — fiziksel olay gerçekte olur mu) yok. D kuralı iptal olduğu için bu tecrübenin tek izi burası → DERS → ISTEM-56. |

### Kısmi (bir parçası kuralda yok)

| id | hedef | eksik kalan |
|---|---|---|
| 43270ca92b | DENETIM-28 | DENETIM-28 yalnız kişi sayıyor; "nesne sayısı metne uyar (pasta 4 kat → 5 kat)" yok. |
| 2dd102a3ff | SUREC-16 | Görselsiz testin gerekçesi ("kâğıt üstünde 'bu ekran gereksiz' demek bedava") yok. |
| e3809c13ab | YAPI-39 | Ruh hâli görselinin kalkma sebebi (noir ton, kül tablası; neşeli oyuna uymaz) yok. |
| 8ea4cbae96 | SUREC-32 | "Gündüz temeller + sahibi onayı, gece Codex, sabah web" düzeni SUREC-32'de yok. |
| 48cfdb87fc | KAR-1 | "Taslaktaki her ayrıntı forma girmeden sahibine sorulur" yok (KAR-1 yalnız taslakta OLMAYANI anlatıyor). |
| 209f3d58fe | SUREC-27 | Sızıntı yarısı var; aynı satırdaki "yeni vakayı araçlara ekle (tur yolları, kapı YOLLAR, vakaN_kapi.md)" yok. |
| 8fbc908280 | SATIR-11 | SR-M yarısı var; Parti 1'in süre verisi (20 resim, 24 Codex, ~28 dk) kayboluyor → SUREC-30. |
| d7b58c2bf4 | SEZON-9 | SEZON-9 Cengo ve parayı anıyor, "anı defteri yalnız kayıt" tespitini anmıyor. |

Küçük: 9856ceeba3, c91f38eb7a (SEZON-16 "A sorunu çözmez, C motor işi" ve "kısmen/çözmez" ayrımı yok); e96885132b (YAPI-29'da "fark küçük, testle korunur" yok — kasa kalktığı için önemsiz); e515487396 (SUREC-22'de "3 pencere paralel" yok — eski düzen).

Doğru bulunanlar: CODEX-* satırları, ISTEM-16 dekolte deneyi ve referans tablosu (istem_kontrol.sh'deki yasak listesi dahil), ISTEM-22/28/29/31/39/40/41/42/43, KAR-23 stiletto, KAR-28/29/30, YAPI-11/12, TON-6, TON-9, SATIR-20, ISTEM-36/37, DENETIM-17/21, `URETIM` hedefli klasör satırları (uretim/CLAUDE.md'de var).

---

## 3. DERS / BILGI — hedefi yanlış

### Net yanlış

| id | şimdiki | öneri | neden |
|---|---|---|---|
| 3d6b32aaa5 | SUREC-31 | SATIR-20 (+SUREC-25) | SUREC-31 "kapsam dışı bırakılanlar" (API yok, ızgara); ders "adı geçen kişi kuralı adım 3 ve 8'de uygulanırsa Onay 3'te 4 resim çıkmaz". |
| f4468f331e | SUREC-31 | SUREC-25 | V1'de zamanın Onay 3'teki görsel sorunlarına gitmesi Onay 3 dersi; SUREC-31 ile ilgisi yok. |
| d9ac408c41 | YAPI-16 | YAPI-10 | "Selim saati neden susturmadı" itirafta olay mantığı boşluğu — gerçeğin zaman çizelgesi; YAPI-16 yalnız dört yüzleşmenin şeması. |
| a54e8a287c | YAPI-8 | TON-14 ("Nereden biliyor?") ya da YAPI-9 | Ders kilit ipucu bilgisinin gerekçesi ("rüzgârlı günlerde güverte boş"); YAPI-8 kanıt yolu sayısı. |

### Küçük (daha iyi yer var)
- cb71d33700 (Codex 40–120 sn / 5–12 dk) SUREC-30 yerine CODEX-13: yavaşlamanın eşiği orada lazım.
- f0d33f7de0, 470b8d4096, 4c0d8d1b9f, ed82a7e4aa (garip iplik alt seçenekleri) SEZON-3 yerine SEZON-2 (üst seçenekleri SEZON-2'de).
- 9134389f93 (eski oyunda gider+faiz kasayı batırdı) YAPI-36 yerine YAPI-37 daha yakın.

---

## En önemli beş

1. **V4 süre satırları GECMIS** (e4bcfa1e27 ve 3 kardeşi): V4'ün toplamı boş, bunlar giderse RAF-106'nın beklediği V4 ölçümü yok olur.
2. **465321f998** yanlış kurala bağlı: "3. üretimde temiz geldi" filtre değil, 3. ret kuralının (DENETIM-42) kanıtı.
3. **5691d10441**: "satır numarası dosya satırına geçti" SUREC-35 ile çelişiyor; sahibine sorulmalı.
4. **929dc73367**: Cengo'nun şüpheli olabildiği (motor izin veriyor, V6'da oldu) hiçbir kuralda yok.
5. **vaka7_baslangic.md arşiv listesinde**: V7 donmadı, süre tablosu canlı; taşıma V7 donana kadar ertelenmeli.
