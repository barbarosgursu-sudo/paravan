# Görev: birleştirilmiş kuralları kaynak satırlarla karşılaştırmak (bağımsız denetim)

Bir başka Claude, Paravan oyununun kural satırlarını konu konu tek kurallara indirdi. Senin işin, sana verilen konuda bunun doğru yapıldığını
denetlemek. Kaynak satırlar: `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/KURAL_SATIRLAR.tsv` (no, id, dosya, satir, bolum, tur, metin; `\n` satır sonu).
Yeni kurallar: `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/kural_<KOD>.md`, eşleme: `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/harita_<KOD>.tsv` (no → kural kodu / YOK / ESKIDI / CELISKI), çelişkiler:
`/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/celiski_<KOD>.md`. Hiçbir dosyayı değiştirme, git kullanma; yalnız çıktını yaz.

Her yeni kural için, ona eşlenen BÜTÜN kaynak satırları oku ve sor:
1. **Anlam değişti mi?** Yeni metin kaynağın söylemediği bir şey söylüyor ya da söylediğini farklı söylüyor mu (daha katı / daha gevşek / başka)?
2. **Ayrıntı düştü mü?** Kaynakta olup yeni metinde olmayan sayı, eşik, istisna, dosya adı, komut, örnek, "kimin kararı" var mı (notta gerekçesi
   yazılı değilse)?
3. **Uydurma var mı?** Hiçbir kaynakta olmayan bilgi eklenmiş mi?
Ayrıca: `YOK` eşlenen her satır gerçekten kural değil mi? `ESKIDI` eşlenenin yerine geçen kural metinde açıkça var mı? Çelişki olduğu hâlde
çözülüp birleştirilmiş bir yer var mı (biri öbürünü açıkça iptal etmiyorsa çözülmemeliydi)?

Çıktı: `<ÇIKTI>` — yalnız SORUNLAR, her biri:
```
### <kural kodu ya da no> — anlam / ayrıntı / uydurma / YOK / ESKIDI / çelişki
Ne sorun: tek-iki cümle. Kaynak no: …  Önerilen düzeltme: …
```
Sorun yoksa "sorun yok" yaz. Küçük üslup farklarını yazma; yalnız anlamı ya da bilgiyi etkileyenleri yaz. Raporda sorun sayısını ver.
