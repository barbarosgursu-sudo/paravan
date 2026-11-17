# BILGI — Nurcan kuralı / sızıntı

### BILGI-1 Nurcan kuralı: hak edilmemiş bilgi hiçbir yerden sızmaz
Projenin çekirdeği; korunacak sözleşmelerden biridir. Oyuncu henüz hak etmediği bir bilgiyi hiçbir yerden almaz: metin, görsel, defter, ipucu adı, Cengo'nun esprisi.
- Şakaya da uyar: Cengo'nun esprisi, oyuncunun henüz hak etmediği bir ipucunu "yanlışlıkla" söyleyemez. Komik yan karakterlerin en kolay düştüğü tuzak budur.
- Metin tarafını doğrulayıcı K1/K10/K11 ve `test_sizinti.js` kollar; görsel tarafı `kaynak/gorsel_stil_sozlesmesi.md` §7. Künye portresi de katmanlıdır (`kisiler.json` → `portre_katman`).
*Kaynak:* 31, 199, 1799, 2045

### BILGI-2 Oyun cevabı söylemez
Oyuncunun çözdüğü şey "Kim yaptı, nasıl biliyorum?"dur. Oyun cevabı söylemez; oyuncu ipuçlarını kendisi birleştirir. Hiçbir ekran "suçlu X" demez; bunu oyuncu "Kim yaptı?"da söyler.
*Kaynak:* 116, 200

### BILGI-3 Girişte yasak olanlar
Her vakanın girişinde: suçlu ele verilmez; bir ipucunun vereceği bilgi önceden söylenmez.
*Kaynak:* 104, 105, 106

### BILGI-4 Hiçbir ipucu suçluyu tek başına göstermez (kural 21c)
Sahibinin görselsiz testi, 8 Ekim 2026. Suçlunun adı, ona özgü bir eşya ya da itiraf tek ipucunda verilmez; her ipucunun bilgisi en az iki şüpheliye uyar ya da masum bir açıklaması vardır. Suçlu, en az iki ipucunun birleşmesiyle bulunur. K19 denetler: hiçbir doğru kanıt çifti tek ipucundan çıkmaz. Vaka formu onaya gitmeden kontrol listesinde işaretlenir.
*Kaynak:* 128, 202, 658

### BILGI-5 İpucu adı açıktır ama fazlasını söylemez
İpucu adları açıktır; oyuncu neye hak harcadığını bilir. Ama ipucu adı, açılmadan önce oyuncunun bildiğinden fazlasını söylemez (yeni ad, yer, nesne yok).
*Kaynak:* 129, 130

### BILGI-6 Defter yalnız ara bulgu yazar (kural 21a)
İpucu açılınca olgular gelir; olgular birleşince deftere bir ara bulgu cümlesi yazılır (ör. "Tekne sette"). Bu cümle suçluyu asla söylemez. Vaka formu onaya gitmeden "Defter cümleleri suçluyu söylemiyor" kontrolü işaretlenir.
*Kaynak:* 201, 295, 604, 659

### BILGI-7 Anı özeti yalnız herkesin duyduğunu yazar (kural 21d)
Sahibinin isteği, 17 Ekim 2026. Anı defterinde her biten vakanın üstünde (Peri'nin notunun üstünde) 2–3 cümlelik hatırlatma durur: müşteri ve kayıp, kim almıştı, neden. Bütün kararlarda aynıdır. Yalnız her yolda oynayan itiraf sahnesinin (kovalamaca) söylediği girer; bir ipucunda kalmış ayrıntı ya da karara göre değişen sonuç girmez. Diyalogda `## ani` bölümüne yazılır. Kimi suçladığın ve kararın oyunun kendi kaydından yazılır (kasa yok, kural 24). Vaka formu onaya gitmeden "Anı özeti yazıldı; yalnız itirafın söylediğini içeriyor" kontrolü işaretlenir.
*Kaynak:* 203, 634, 669

### BILGI-8 Künye de Nurcan yüzeyidir
`kisiler.json` katman metni (künye kartı), o katmanın koşulunun (olgunun) garanti ettiğinden fazlasını söyleyemez; kart yalnız o olgunun söylediğini söyler.
- Uzun süre denetimsiz kaldı; iki sızıntı bu boşlukta oturuyordu (20 Eylül 2026, ChatGPT taze göz incelemesi): İlyas'ın "arkasında biri var"ı ve Ceyda'nın "cinayetin bir ucu onda"sı.
- K1b koşulun gerçekten var olduğunu denetler. Metnin fazla söyleyip söylemediği anlamsal bir sorudur; mekanik kural bunu yanlış pozitif üretmeden yapamaz ("Kaya'nın dul eşi" sızıntı değildir). O denetim insana bırakıldı.
- Künyeye katman eklerken, metnini değiştirirken ya da künye değişikliğinden sonra `cd kaynak && node arac_kunye_denetim.js` (yeni oyun: `node arac_kunye_denetim.js yeni`) çalıştırılır: her katmanı koşulunun hak ettiği olgularla yan yana basar, sızıntı gözle aranır. Test değil, araç.
- Vaka formu onaya gitmeden "Künye kartları yazıldı, denetim aracından geçti" kontrolü işaretlenir.
*Kaynak:* 23, 32, 650, 671

### BILGI-9 Zincir defteri: yalnız hak edilmiş düğüm çizilir
Zincir defteri ÜÇÜNCÜ Nurcan yüzeyidir ve en genişi: bir vakanın bütün olgularını, çıkarımlarını ve türetme ağacını tek ekranda basar. Üç kuralı pazarlığa kapalıdır (BILGI-9, -10, -11). Birincisi: yalnız hak edilmiş düğüm çizilir. `ya biri` dalında YALNIZ TUTAN alternatif gösterilir — tutmayanı göstermek, oyuncunun sahip olmadığı bir olgunun adını söylemektir. `test_tahta.js` bunu davranışsal olarak sınar.
*Kaynak:* 33, 34

### BILGI-10 Zincir defteri: eksik düğüm yok
Eksik düğüm, "?" kutusu, "şu da lazım" YOK. Olsaydı tahta ipucu sistemine döner ve "ekonomi seçenekleri daraltır" sözleşmesini delerdi.
*Kaynak:* 33, 35

### BILGI-11 Zincir defteri: sayaç yok
Sayaç YOK ("7 ipucunun 5'i") — o not vermektir.
*Kaynak:* 33, 36

### BILGI-12 Kim yaptı? ekranında yalnız şüphelenmek için sebebi olan kişiler
Ekranda yalnız oyuncunun şüphelenmek için sebebi olan kişiler (biri onu suçladı, ipucunda karşılaştı ya da onu işaret eden bir olguyu biliyor; adının geçmesi yetmez) ve elindeki olgular görünür. Suçlu, hakkını bitiren her oyuncunun ekranında görünür; erken suçlayan göremeyebilir. (Sahibinin görselsiz testi, 9 Ekim 2026.)
*Kaynak:* 136

### BILGI-13 Kişiyi görünür yapan bağ sahnede söylenir
Bir kişi bir olgu yüzünden "Kim yaptı?" ekranında görünür hâle geliyorsa, o olgunun geldiği sahnede bağ söylenir ("Evde kim var?" "Bir oğlu var."); oyuncuya bırakılmaz.
*Kaynak:* 137

### BILGI-14 Kart afişi: şüpheliler eşit
Paylaşım kartı afişinde (17 Ekim 2026) şüpheliler eşittir: aynı boy, aynı ışık, aynı ciddi-temkinli ifade, eşit aralık; suçlu ortada ya da önde değil.
*Kaynak:* 492

### BILGI-15 Kart afişi: figürdeki ipuçları nötrlenir
Figür referansı ipucu taşıyabilir (Kemal'in beyaz boyası, Serkan'ın enseyi kaşıyan suçlu duruşu, Defne'nin rahat gülümsemesi). İstemde açıkça kaldırılır: "önlük yok, fırça yok", "eller cepte, ensesinde değil", "Defne de gülümsemiyor".
*Kaynak:* 493

### BILGI-16 Kart afişi: yasak nesneler adıyla sayılır
Açık uçlu liste yok. Yasak nesneler adıyla sayılır: yöntem nesneleri (kılıf, örtü, anahtar, zincir), yanıltıcı iz (boya), kovalamaca şakaları (simit, balık kasası, pasta). Mekân referansında böyle bir nesne varsa "referanstaki X'i ÇIKAR" yazılır (A20'nin pastası); örtü yığını olan ikinci açı (A20b) kullanılmadı.
*Kaynak:* 494

### BILGI-17 Görsel, bağlı ipucunun açtığından fazlasını gösteremez
Bir kanıt görseli de metin gibi bilgi taşır. Bir görsel, bağlı olduğu ipucunun (clue) `reveals` kümesinden FAZLASINI gösteremez; oyuncunun henüz bilmediği (o ana kadar hak etmediği) bir şeyi görsel sızdıramaz. Buna, karakteri tehlikeli gösteren ima da dahildir: o bilgi açılmadan konmaz. Görsel denetiminde (hızlandırma kuralları) sorulur: "Görsel, oyuncunun o ana kadar hak etmediği bir şeyi gösteriyor mu?"
*Kaynak:* 727, 2115, 2116, 2140, 2142

### BILGI-18 Görsel için doğrulayıcı eki (Kural 1 genişletme)
Her görsel, bağlı clue'nun `reveals`ine etiketlenir. Görsel bir kanon yüzü/olguyu gösteriyorsa, o yüz/olgu clue'nun `needs ∪ reveals` kümesinde olmalıdır; değilse → FAIL. Nurcan'ın görsel versiyonu böyle engellenir.
*Kaynak:* 2127

### BILGI-19 Görsel eksik gösterebilir, YANLIŞ gösteremez (§7c)
§7 fazlasını göstermeyi yasaklar; bu yetmez, görsel yalan da söyleyebilir ve o boşluktan bir hata geçti (20 Eylül 2026). Kanonda var olan fiziksel bir gerçek — yara, topallık, yaş, boy, bir eksik parmak — görselde yokmuş gibi gösterilemez. Oyuncu o gerçeği henüz hak etmediyse ayrıntı kadraj dışında bırakılır: yüz çevrilir, taraf gölgede kalır, mesafe açılır. Düzleştirilmez, silinmez, temiz gösterilmez. Saklamak Nurcan kuralıdır, uydurmak değildir: temiz bir yanak çizmek oyuncuya "bu adamda yara yok" demektir — sonraki vakada tanık yarayı tarif edince görsel doğru çıkarımın aleyhine delil olur.
*Kaynak:* 2122, 2123, 2124

### BILGI-20 Pratik kural: yüzü kapat, boş yüz isteme
İki yerde de aynı: yazı taşıyan nesnenin yüzü kapatılır ("dosya KAPALI"), gizlenecek fiziksel ayrıntı kadraj dışında bırakılır. Boş yüz isteme, yüzü kapat.
*Kaynak:* 2126

### BILGI-21 Rozetler: yalnız kazanılan görünür
(Paravan rozetleri ve sezon sonu tablosu, 9 Kasım 2026.) Yalnız kazanılan rozetler görünür. Liste yok, sayı yok ("12'nin 3'ü" YOK), gri/kilitli kutu yok — gri bir rozetin adı görülmemiş bir sahneyi söyler (Nurcan), sayı nottur. Oyuncu rozeti kazandığı an varlığını öğrenir.
*Kaynak:* 1699

### BILGI-22 Sızıntı onarımı: geri çekme, ekleme kadar iş görür
Sızıntı düzeltmelerinin büyük çoğunluğu cümle kısaltmaktır ("kimseye söylememiş" → "desteği veren oydu", "Adalet geldi" → "Hepsi düştü"). (Kayıt: o oturumdaki 30 düzeltmede yeni kanon yalnız bir kez eklendi.)
*Kaynak:* 3203

### BILGI-23 Bir sızıntı bulunca kardeşlerini ara
Aynı kök, farklı yüzey: V4'teki altı sızıntının hepsi tek bir sebeptendi — vaka "bunu kim biliyordu?" sorusunu cevaplıyordu, oysa o soru V5'in. Bir bulgu bulduğunda kardeşlerini ara.
*Kaynak:* 3204
