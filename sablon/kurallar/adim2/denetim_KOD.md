# Denetim — KOD

Kapsam: `kural_KOD.md` (KOD-1…KOD-92), `harita_KOD.tsv` (227 satır; konu.tsv'deki KOD satırlarının hepsi haritada, eksik/fazla yok),
`celiski_KOD.md` (5 çelişki). Her kuralın eşlendiği bütün kaynak satırlar okundu.

**Sorun sayısı: 5** (2 yanlış iç atıf, 1 ayrıntı kaybı, 1 küçük anlam kayması, 1 bayatlık notu). YOK (2249, 2346, 2420, 2422, 2436) ve
ESKIDI (2232, 2233) eşlemelerinin hepsi doğru; yerine geçen metin KOD-81/82'de açıkça var. Çelişkilerin hiçbiri sessizce
çözülmemiş; ilgili kurallar CELISKI-KOD-1…5'e açıkça atıf yapıyor. Gerekçeli birleştirmeler (2382/2388 müzik → ses, 3035 "~3–5 dk")
notta yazılı ve kabul edilebilir.

### KOD-3 — ayrıntı (yanlış atıf)
Ne sorun: "tur (… yollar KOD-28'de)" diyor; yol adları KOD-27'de, KOD-28 `--hepsi` kuralı. Okuyan yanlış yere gider.
Kaynak no: 2886 ("yollar yukarıda"), 15.  Önerilen düzeltme: "yollar KOD-27'de".

### KOD-35 — ayrıntı (yanlış atıf)
Ne sorun: "`arac_kapi.js … resim` K2/K8/K6, Cengo satırlarındaki ifadenin kapanış setinde olmamasını yakalar (KOD-52)" — KOD-52
"Sahne satırı bilgiye göre değişmez" kuralı; doğru yer KOD-75 (Cengo satırları etiketli, ifade kapanış setinde).
Kaynak no: 752, 2435.  Önerilen düzeltme: "(KOD-75)".

### KOD-64 — ayrıntı
Ne sorun: K13 kuralı genel "varyant sırası" diye yazılmış; kaynakta bu madde "Cengo satırının üç kuralı" başlığı altında, yani
`cengo_sonuc` sıcaklık varyantları (soğuk/varsayılan/sıcak, bağ eşiği) için. "AZALAN eşik" ifadesinin neyin eşiği olduğu (cengoBag)
düşmüş; bağlam olmadan kural her koşullu metne (ör. KOD-88'deki olgu koşullu `meta`) uygulanıyor gibi okunuyor — oysa onlarda eşik yok.
Kaynak no: 41 (bağlam 40, KAR konusunda).  Önerilen düzeltme: "`cengo_sonuc` varyantlarının sırası AZALAN bağ eşiği olmalı …" ve
KAR'daki Cengo satırı kuralına atıf.

### KOD-70 — anlam (küçük)
Ne sorun: "hak içinde en az 2 farklı doğru kanıt çifti (suçluyu kanıtlayan en az 2 ipucu yolu)" — 742'nin "en az 2 ipucu yolu"
K19'un "hak içinde 2 farklı doğru çift" şartıyla eşanlamlı gibi parantezle eşitlenmiş. Kaynakta biri üretim denetiminin maddesi,
öbürü K19'un daha dar (hak sınırlı) şartı; eşitleme "hak içinde" kısıtını gevşek okutabilir.
Kaynak no: 2444, 742.  Önerilen düzeltme: parantezi kaldırıp 742'yi ayrı cümle olarak yaz: "Üretim denetimi: suçluyu kanıtlayan en az
2 ipucu yolu var."

### KOD-35 — not (kaynağa sadık, ama durum bayat olabilir)
Ne sorun: "Commit bağlantısı … Vaka 6 kapıdan geçince açılacak (`.claude/settings.json` henüz yok)" 14 Kasım durumunu kural gibi
taşıyor; CLAUDE.md'ye göre Vaka 6 15 Kasım'da kapıdan GEÇTİ, ama `.claude/settings.json` hâlâ yok (yalnız `kapi_hook.js` var). Kural
kaynakla çelişmiyor; ancak koşul gerçekleştiği için "açılacak" ifadesi artık bekleyen bir iş. Kaynak no: 2791.  Önerilen düzeltme:
kuraldan durum cümlesini çıkarıp sahibine sor ("bağlantı açılsın mı?") ya da çelişki/açık soru listesine ekle.
