# Vaka 2 — kısa replik taraması (TON-9) — KARAR OĞUZ BEY'DE

24 Kasım 2026: Claude taradı (dosya değişmedi), Barbaros "bu metin işlerine Vaka 2 için Oğuz Bey baksın" dedi.
V2'de 174 replik, ortalama 36 harf (ölçü ~50; doğrulayıcı K21 eşiği 45). Aşağıdaki 37 replik bağlamı çözdürmeden
anlaşılmıyor; öneri yalnız açar, yeni bilgi eklemez (Nurcan yolları tek tek denetlendi). Esprilere dokunulmadı
("Evet dediklerine", "Şampuan işte", "…Tanır.", "Güzel soru", "Fıstıklı/Bademli", "İki./Ben ve şahit.", kovalamaca bağırışları).

**Karar:** her satır için "olsun / olmasın / başka söz". Sonra yol seçimi:
- **a)** yalnız bu 37'si (ortalama ~40'a çıkar, K21 uyarısı kalır) — Claude'un önerisi;
- **b)** ortalamayı 45'e çıkarmak için kısa ama açık 40–50 replik daha uzatılır (espriler zayıflar).

Uygulama: `vaka2_diyalog.md`'de satırlar değişir → `cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka2_diyalog.md V2`
→ `node arac_kapi.js V2 hikaye` (V2 kapıda) → `node arac_sizinti_tur.js V2 40` → commit iletisine `[söz onaylı]`.

| # | yer | kim | şimdi | öneri |
|---|---|---|---|---|
| 1 | giriş | Peri | Kravat mı o? | Boynundaki o şey kravat mı, Cengo? İlk kez görüyorum. |
| 2 | giriş | Peri | Neye? | Şahit mi? Neye şahitlik ettin? |
| 3 | giriş | Peri | Kozmetik. Kendi markamdı. | Şampuan değil, kozmetik. Kendi markamdı. |
| 4 | giriş | Müjgan | Bu tayyör Lâl işi. | Bu tayyör Lâl işi. Dikişinden tanırım. |
| 5 | giriş | Peri | On yıllık. | On yıllık bir tayyör. Hâlâ giyiyorum. |
| 6 | giriş | Cengo | Kapı? | Atölyenin kapısı kırılmış mı? |
| 7 | giriş | Müjgan | Kırılmamış. Anahtar yalnız Lâl'de. | Kapı kırılmamış. Atölyenin anahtarı yalnız Lâl'de. |
| 8 | giriş | Peri | Elli bin. | Ücretimiz elli bin lira. |
| 9 | giriş | Müjgan | …Makul. Gelinlik bulununca. … | …Makul. Gelinlik bulununca öderim. … |
| 10 | giriş | Peri | Anlaştık. Önce atölye. | Anlaştık. İşe gelinliğin kaybolduğu yerden, Lâl'in atölyesinden başlarız. |
| 11 | büro | Peri | Ev sahibi. | Üç vuruş. Bu ev sahibi. |
| 12 | büro | Peri | Utanmadım. | Ben utanmadım, Cengo. |
| 13 | büro | Cengo | Tanır mı? | Lâl Hanım sizi gerçekten tanır mı? |
| 14 | büro | Peri | Kimin kuzeni? | Kimin kuzeni olacaksın? |
| 15 | büro | Peri | Ustayla da konuşmak lazım. Gülsüm. Bir de gelinle. | Gelinliğin kaybolduğunu fark eden usta Gülsüm'le de konuşmak lazım. Bir de gelinle. |
| 16 | büro | Cengo | Gelin perişanmış. | Müjgan Hanım gelin perişan dedi. |
| 17 | atölye | Peri | Peri. | Peri. Adım Peri. |
| 18 | atölye | Peri | Dün akşam ne oldu? | Dün akşam provadan sonra atölyede ne oldu? |
| 19 | atölye | Cengo | Kuzen. | Gelinin kuzeniyim. |
| 20 | atölye | Lâl | Avluya. Avludan sokağa. | Arka avluya. Avludan da sokağa çıkılıyor. |
| 21 | Gülsüm | Peri | Açık mı? Örtüsüz? | Açık mı? Üstünde örtü yok muydu? |
| 22 | Gülsüm | Gülsüm | Sabah geldim, manken örtülü. Kaldırdım: çıplak. | Sabah geldim, manken örtülüydü. Örtüyü kaldırdım: manken çıplak, gelinlik yok. |
| 23 | Gülsüm | Cengo | Kapı? Cam? | Kapı ya da cam kırılmış mı? |
| 24 | vale | Peri | Lâl Hanım mı? | O kadın Lâl Hanım mıydı? |
| 25 | vale | Peri | Gelin. | Gelin vardı. Defne. |
| 26 | vale | Cengo | Bülent, çiziği unuttum. | Bülent, arabadaki çiziği ben de unuttum. |
| 27 | Defne | Peri | Çok sakinsiniz. | Gelinliğiniz kayıp ama çok sakinsiniz. |
| 28 | Defne | Cengo | Siz? | Peki siz? Siz gelinliği sevdiniz mi? |
| 29 | Defne | Defne | Ben de sevdim. | Ben de çok sevdim. |
| 30 | prova | Peri | Cuma sabahı. | Cuma sabahı işi varmış demek. |
| 31 | terzi | Sarkis | Kraliçe. Dergide görmüştüm. Taçlı. | Siz o kraliçesiniz. Dergide görmüştüm, başınızda taç vardı. |
| 32 | terzi | Peri | Şimdi taçsız. | Şimdi taçsızım. |
| 33 | terzi | Cengo | Kim getirdi? | Bu gelinliği size kim getirdi? |
| 34 | kapanış | Peri | Ev sahibi! | Ev sahibi! Kira için geldi! |
| 35 | kapanış | Peri | Ne? | Ne vardı? |
| 36 | kapanış | Lâl | Sonra. | Sonra anlatırım, Peri. |
| 37 | kapanış | Cengo | Gitti. | Lâl Hanım gitti. |
