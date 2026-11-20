# KURALLARI TEK DOSYADA TOPLAMA — PLAN VE DURUM

> **Yeni pencere: önce bunu baştan sona oku.** 16 Kasım 2026 akşamı başlayan işin bütün kaydı burada. Sahibi (Barbaros)
> işi "çok kritik" saydı ve hiçbir ayrıntının unutulmamasını istedi. İş başka pencerede, aşağıdaki **Sıradaki adım**dan sürer.
> Kök `CLAUDE.md` ve `kaynak/DEVIR.md` en üstte buraya işaret eder.

> ## ▶️▶️ ADIM 4 SÜRÜYOR (20 Kasım 2026 gece, sahibi biçimi onayladı: "Evet, başla")
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
