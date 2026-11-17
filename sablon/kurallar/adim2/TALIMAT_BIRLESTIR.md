# Görev: aynı şeyi söyleyen kural satırlarını tek kurala indirmek (tek konu)

Paravan adlı Türkçe dedektiflik oyununun kuralları 36 belgeye dağılmıştı; her kural satırı `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/KURAL_SATIRLAR.tsv`'de
(sütunlar: no, id, dosya, satir, bolum, tur, metin; metinde `\n` satır sonu). Konu kodları: `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/KONULAR.md`; her satırın konusu
`/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/konu.tsv`'de (no<TAB>KOD). Sen YALNIZ sana verilen konunun satırlarıyla çalışırsın. Bağlam için depodaki belgeleri
(`/home/user/paravan`) okuyabilirsin. Depoda hiçbir dosyayı değiştirme, git kullanma; yalnız aşağıdaki çıktıları yaz.

## Sahibinin pazarlığa kapalı şartları
1. **Hiçbir kural kaybolmaz.** Her ayrıntı (sayı, eşik, dosya adı, komut, örnek kelime, istisna, "kimin kararı, hangi tarih") yeni metinde ya kalır ya
   da neden düştüğü yazılır. Şüphedeysen koru.
2. **Anlam değişmez.** Metni sadeleştirebilirsin (kısa, basit Türkçe), ama söylediği şey aynı kalmalı. Yeni kural, yeni ayrıntı UYDURMA.
3. Birden çok satır aynı kuralı söylüyorsa TEK kural olur; ayrıntıları birleşir (birinde olan öbüründe yoksa eklenir).
4. Farklı şeyler söyleyen satırları zorla birleştirme; her ayrı kural kendi maddesinde kalır (gruplayıp "çeşitli kurallar" deme).
5. **Çelişki:** iki satır aynı konuda farklı şey söylüyorsa ve metinlerden biri öbürünün yerine geçtiğini AÇIKÇA söylemiyorsa (ör. "… yerine geçer",
   "kalktı", "artık", daha yeni tarihli bir kararın eskisini iptal ettiği yazılıysa) ÇÖZME — çelişki dosyasına yaz. Açıkça yerine geçiyorsa yenisini
   kural yap, eskisinin satırını `ESKIDI` olarak eşle.
6. Kural olmayan satır (yalnız başlık, ayraç, açıklama, örnek tablo başlığı…) `YOK` olarak eşlenir, sebebiyle.

## Çıktılar (`<KOD>` = senin konun)
1. `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/kural_<KOD>.md` — her kural:
```
### <KOD>-<sıra> Kısa başlık
Kural metni (bir ya da birkaç cümle; gerekirse maddeli).
*Kaynak:* no, no, no
```
2. `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/harita_<KOD>.tsv` — konundaki HER satır için tek satır: `no<TAB>hedef<TAB>not`. hedef = bir ya da virgülle birkaç kural kodu
   (`<KOD>-3,<KOD>-7`), ya da `YOK`, `ESKIDI`, `CELISKI-<n>`. not: YOK/ESKIDI için sebep; düşen ayrıntı varsa ne olduğu ve neden.
3. `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/celiski_<KOD>.md` — her çelişki: `### CELISKI-<KOD>-<n>`, iki (ya da daha çok) tarafın kısa özeti ve kaynak no'ları, sahibine
   sorulacak tek cümlelik soru. Çelişki yoksa dosyaya "yok" yaz.

Bitince kendin say: harita satır sayısı = konundaki satır sayısı; haritadaki her kural kodu kural dosyasında var. Raporda yalnız sayıları ver
(satır, kural, YOK, ESKIDI, çelişki).
