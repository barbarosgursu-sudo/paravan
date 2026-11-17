# Denetim — GOMME

Kapsam: kural_GOMME.md (29 kural), harita_GOMME.tsv (82 satır; konu.tsv'deki GOMME satırlarının hepsi eşlenmiş), celiski_GOMME.md (2 çelişki).
Eşlenen bütün kaynak satırlar okundu. YOK yok; ESKIDI tek (1200), yerine geçen kural GOMME-16/18'de açıkça var. CELISKI-1 ve -2 yerinde, çözülmeden bırakılmış.

**Sorun sayısı: 3**

### GOMME-20 — çelişki (işaretlenmemiş)
Ne sorun: Kural "kesim profili zemine göre seçilir… öbürleri → dar profil `peri_mavi`/`cengo_beyaz`/`konuk_beyaz_delik`" diyerek renk toleransı anlamındaki "dar" profili hâlâ geçerli bir kesim ayarı gibi sunuyor. Ama 27 ve 1144 (14 Kasım, tek yöntem YZ kesimi) "Profil yalnız çerçeveyi verir" diyor; renk kesimi profilleri (kenar tol, hale, delik) GOMME-2'de "yalnız kayıt" diye ayrılmışken aynı profil adları GOMME-20'de canlı kural olarak duruyor. (`arac_zemin.py → profil()` bu adları hâlâ basıyor, `arac_kes_yz.py` onlardan yalnız çerçeveyi alıyor.) 1144 542'yi açıkça kaldırmadığı için çözülmemeli, sorulmalı. Kaynak no: 542, 1084 ↔ 27, 1144.
Önerilen düzeltme: GOMME-20'den "dar profil" ifadesini kaldırmadan CELISKI-GOMME-3 aç: "YZ kesiminde zemine göre profil seçimi yalnız çerçeve mi belirliyor; `peri_mavi`/`konuk_beyaz_delik` ayrımı hâlâ anlamlı mı?" Ya da en azından kurala "(YZ kesiminde profil yalnız çerçeveyi verir, bkz. GOMME-1)" notu ekle ve CELISKI'ye bağla.

### GOMME-16 — anlam / uydurma (gerekçe bağlantısı) + kaynak eksik
Ne sorun: (a) 536 "açık bej → gri-mavi (sıra saç halesi tecrübesinden)" der, hangi tecrübe olduğunu söylemez. Kural bunu 529'daki Vaka 3 dersine (yeşil zeminde kızıl saç sisi; bejde hale yok) bağlıyor. 529 o dersi "zemin saçtan da uzak olsun" kuralının gerekçesi olarak veriyor, bej ile gri-mavi arasındaki sıranın gerekçesi olarak değil (gri-mavinin hale bıraktığı tecrübe 541'deki V6 olayı). Kaynakta olmayan bir sebep bağı kurulmuş. (b) "`istem_kontrol.sh` … uymayan istem üretilmez. Zemin adları zeminler.tsv'den." cümleleri 540'tan alınmış (ISTEM konusunda), ama *Kaynak* listesinde 540 yok; 1084 yalnız "denetler" diyor. Kaynak no: 529, 536, 541, 540, 1084.
Önerilen düzeltme: (a) "sıra saç halesi tecrübesinden" diye bırak; Vaka 3 dersini ayrı cümlede "zeminin saça yakın olmaması dersi (Vaka 3: yeşil zemin + kızıl saç → zeytin-yeşil sis; bejde hale çıkmadı)" diye ver, sıranın gerekçesi diye değil. İstenirse 541'i (gri-mavi açık saçta mavi hale bıraktı) gerekçe adayı olarak an. (b) *Kaynak* listesine 540'ı ekle (ya da cümleyi ISTEM kuralına bırakıp atıf ver).

### GOMME-5 — anlam (açık çelişkiyi örtük olarak yumuşatıyor)
Ne sorun: Giriş cümlesi "saç kenarı büyütülüp **bakılır**" diyor; kaynak 2531 "büyütülüp **temizlenir**", 2545 "büyütüp temizle". Bu fark, CELISKI-GOMME-1'in tam sorduğu şeyi (YZ kesiminden sonra elle temizlik hâlâ adım mı, yoksa yalnız bakmak mı) Taraf B lehine önceden çözüyor; aynı kuralın maddeleri ve GOMME-7 ise "temizle" demeye devam ediyor. Kaynak no: 2531, 2545.
Önerilen düzeltme: Kaynağın fiilini koru: "saç kenarı büyütülüp temizlenir (§4)"; geçerliliği CELISKI-GOMME-1'e bırak.
