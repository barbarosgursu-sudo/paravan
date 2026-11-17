# Denetim — ISTEM

Toplam **7 sorun** (4 anlam/çelişki, 3 küçük ama bilgiyi etkileyen). `YOK` (1421, 1425) ve `ESKIDI` (1416, 3015; ayrıca 412/2581/3077'nin notlu
eski parçaları) eşlemeleri doğru: ikisi yalnız başlık, eskiyenlerin yerine geçen kural metinde açık (ISTEM-9, ISTEM-11, ISTEM-25).
`istem_kontrol.sh` için yazılan bütün "geçirmez" iddiaları betikle tek tek karşılaştırıldı; hepsi doğru (tür kapsamları dahil).

### ISTEM-17 / ISTEM-18 — anlam / çelişki
Ne sorun: no 553 (5_gorsel_sistemi I) "Peri, Cengo ve **her konuğun** kıyafeti" diyor. ISTEM-18 ise no 2816'daki Vaka 6'ya özgü cevabı (soru V6'nın
Parti 2'si için soruldu, gerekçe "kota", karar `uretim/v6/LISTE.md`'ye yazıldı) genel kural yapmış, ISTEM-17 de 553'ü "hangi konuklar: ISTEM-18"
diye bu genel kurala bağlamış. Kaynak bunun bütün vakalara uygulanacağını söylemiyor; 553 ile 2816 arasındaki fark çelişki olarak açılmalıydı.
Kaynak no: 553, 2816. Önerilen düzeltme: ISTEM-18'i "Vaka 6'da (13 Kasım, kota yüzünden) yalnız karede görünen konuklara üretildi" diye vaka
kararı olarak yaz; ISTEM-17'de "her konuğun kıyafeti" kalsın; genelleşip genelleşmeyeceğini çelişki dosyasına soru olarak ekle.

### ISTEM-14 — çelişki (açılmamış)
Ne sorun: no 1064 (uretim/CLAUDE.md) varyantın referansını koşulsuz verir: "Varyantta referans = onaylı temelin **baş kırpığı** + kapalı gövde."
No 1197 (ISTEM_KALIPLARI §5) ise "1. `onayli/G<temel>.png` (dekolteliyse baş kırpığı + kapalı gövde)" der. Kural yalnız 1197'nin koşullu biçimini
almış; 1064'ün koşulsuz okuması (dekoltesiz temelde de bütün figür değil baş kırpığı) sessizce düşmüş. Kaynak no: 1064, 1197.
Önerilen düzeltme: çelişki dosyasına ekle (soru: dekoltesiz temelde varyantın 1. referansı bütün temel mi, baş kırpığı mı?) ya da kuralda iki
okumayı birlikte göster.

### ISTEM-38 — çelişki (sessizce istisna yapılmış)
Ne sorun: no 452 / 3066'daki "külotlu çorap, bant görünmesin" kararı Vaka 2'de **Peri'nin** resimlerinde (G8–G13, "Sohbet 1 (Peri, G1–G13)") alındı.
Sonraki "Peri: çorap yok" sabiti (no 551, 1429, 1427) bunun tersi. Kural ikisini "(Peri için 'çorap yok': ISTEM-20)" diye istisna yaparak
birleştirmiş; hiçbir kaynak Peri'nin çorabının iptal edildiğini ya da 452'nin yalnız başka kadınlara kaldığını açıkça söylemiyor.
Kaynak no: 452, 3066, 551. Önerilen düzeltme: çelişki olarak aç ya da en azından notta "452'nin doğduğu resimler Peri'nindi; Peri için sonra
'çorap yok' kondu" yaz.

### ISTEM-20 — anlam (konular arası)
Ne sorun: "Peri: HER istemde 'kırmızı stiletto'" istisnasız yazılmış. Aynı sabitin uretim/CLAUDE.md'deki tablo satırı (no 1042, KAR-23'e eşlenmiş)
"**istisna:** vakanın formu başka ayakkabı yazıyorsa o (Vaka 4 kahverengi süet çizme, Vaka 6 beyaz spor ayakkabı)" der. ISTEM-20 bu hâliyle
KAR-23'ten daha katı. Kaynak no: 1157, 3119 (ISTEM) ↔ 1042 (KAR-23). Önerilen düzeltme: ISTEM-20'ye istisnayı ekle ya da "sabitlerin listesi
ve istisnaları: KAR-23" diye bağla.

### ISTEM-16 — çelişki çözülmüş gibi yazılmış
Ne sorun: Kural metni CELISKI-ISTEM-1'in B tarafını düz gerçek olarak söylüyor ("asıl sebebi referans resimdeki görünür dekolte; metindeki 'seksi'…
tek başına engel sebebi değildi"), çelişkiye yalnız parantezle atıf yapıyor. A tarafı (no 460: "asıl sebep çoğu zaman 'seksi / bacaklar havada /
etek' sözcükleri") hâlâ açık. Kaynak no: 1061, 1391, 1438 ↔ 460, 415. Önerilen düzeltme: cümleyi "Vaka 3 deneyinde (Codex) bulunan:" diye
kaynağa bağla; genel hüküm gibi durmasın.

### ISTEM-3 — çelişki (küçük, açılmamış)
Ne sorun: Figür satırı "karakter, **düz bej zemin**" diye 346'dan aynen alınmış; ISTEM-7 ise zemini zeminler.tsv / zemin.tsv'den seçtiriyor
(gri-mavi vb.). Tablo eski bilgiyi kural olarak taşıyor. Kaynak no: 346 ↔ 540, 2967, 3569. Önerilen düzeltme: "düz zemin (renk: ISTEM-7)"
yaz ya da 346'nın "bej" sözünü CELISKI-ISTEM-3'e ekle.

### ISTEM-6 — ayrıntı (kalıp metni değiştirilmiş)
Ne sorun: "Her figür isteminde aynı satır (H3)" diye verilen alıntıya H3'te olmayan "(kulağı kadrajın sağında kalıyor)" eklenmiş (1423'teki BIRIKIM
biçiminden). H3 kopyalanacak sabit satır olarak sunulduğu için alıntı kaynakla birebir olmalı. Kaynak no: 526, 1423. Önerilen düzeltme: H3
satırını aynen ver; burun-kulak ekini ayrı madde olarak "BIRIKIM'deki biçimde kulak da yazılmıştı" diye koy.
