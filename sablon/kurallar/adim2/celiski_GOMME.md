# Çelişkiler — GOMME

### CELISKI-GOMME-1
Elle hale / kol arası temizliği, yapay zekâ kesiminden sonra da bir adım mı?
- **Taraf A (elle temizlik bir adım):** saç halesi ve kol–gövde arası bej boşluk elle temizlenir; yöntem baş kutusunda, ten korumalı piksel silme/aşındırma; "saç halesi araca değil insana kalır". Kaynak: 28, 478, 480, 485, 2531, 2545, 3052, 3074 (ayrıca 730: "Araca kalmayan: saç halesi temizliği").
- **Taraf B (YZ kesimi bunu yapar):** 14 Kasım 2026'dan beri tek yöntem `arac_kes_yz.py`; saç arası ve kol arası zemini de siler, kenardaki zemin rengini arındırır; eski renk kesimi ve `arac_hale.py` artık kullanılmaz; kapı K6 "saç ve kol arasında zemin kalmaz". Kaynak: 27, 1144, 3551. Taraf B yalnız araçları (arac_kes.js, arac_hale.py) açıkça kaldırıyor; elle temizlik adımını ve "kesim aracı hale bırakır" öncülünü açıkça kaldırmıyor.
- **Soru:** Yapay zekâ kesiminden sonra elle hale/kol arası temizliği (baş kutusu yöntemi) hâlâ bir adım mı, yoksa yalnız büyütüp bakma (ve kalırsa yeniden kesme/üretme) mı kalıyor?

**Cevap (sahibi, 17 Kasım 2026; soru 6):** Hayır. Büyütüp bakılır; hale kalırsa yeniden kesilir ya da yeniden üretilir. İşlendi.

### CELISKI-GOMME-2
Konuğun ekran boyu değerleri.
- **Taraf A:** kadın yan karakterler genellikle 0.76–0.82, çok kısa/tombul 0.72 (`gorseller.json → boy`). Kaynak: 487, 3052.
- **Taraf B (6 Kasım 2026 görsel standardı, H2):** resimde herkes aynı yükseklikte çizilir, boyu tablo belirler; tablodaki kadınlar 0,92–1,00 (Gizem 0,93, Ayla 1,00, Jale 1,00, Eylül 0,94, Dilek 0,92). Kaynak: 504, 507–522. H2 eski aralığın yerine geçtiğini açıkça söylemiyor.
- **Soru:** "Kadınlar 0.76–0.82, kısa/tombul 0.72" aralığı H2 tablosuyla birlikte kalkmış sayılsın mı, yoksa ayrı bir ölçekte (eski resimler için) hâlâ geçerli mi?

**Cevap (sahibi, 17 Kasım 2026; soru 7):** Yeni tablo. Eski aralık kalkar. İşlendi.

### CELISKI-GOMME-3
Zemine göre kesim profili (dar profil) yapay zekâ kesiminde hâlâ anlamlı mı?
- **Taraf A (profil zemine göre, dar profil):** kesim profili zemine göre seçilir ve araç basar, gömmede o kullanılır: bej → `peri`/`cengo`/`konuk`; öbürleri → dar profil `peri_mavi`/`cengo_beyaz`/`konuk_beyaz_delik`. Kaynak: 542, 1084.
- **Taraf B (profil yalnız çerçeve):** 14 Kasım 2026'dan beri tek yöntem `arac_kes_yz.py`; "Profil yalnız çerçeveyi verir"; renk kesimi (`arac_kes.js`, kenar tol / hale / delik ayarları) artık kullanılmaz. Kaynak: 27, 1144. Taraf B, zemine göre profil seçimini açıkça kaldırmıyor.
- **Soru:** Yapay zekâ kesiminde zemine göre profil seçimi (`peri_mavi`/`cengo_beyaz`/`konuk_beyaz_delik` gibi "dar" profiller) hâlâ bir kural mı, yoksa profil artık yalnız karakterin çerçevesini mi belirliyor?

**Cevap (sahibi, 17 Kasım 2026; soru 8):** Profil adı kalır ama yalnız çerçeveyi belirler. Eski renk ayarları kalkar. İşlendi.
