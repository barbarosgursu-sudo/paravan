# Görev: denetim raporundaki sorunları birleştirilmiş kurallara işlemek (tek konu)

Dosyalar (`<KOD>` = senin konun): `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/kural_<KOD>.md`, `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/harita_<KOD>.tsv`, `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/celiski_<KOD>.md`, denetim raporu
`/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/denetim_<KOD>.md`. Kaynak satırlar `/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/KURAL_SATIRLAR.tsv` (no, id, dosya, satir, bolum, tur, metin). Önce
`/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/TALIMAT_BIRLESTIR.md`'yi oku: şartlar aynı (hiçbir kural kaybolmaz, anlam değişmez, uydurma yok, açıkça iptal edilmemiş çelişki çözülmez).
Depoda dosya değiştirme, git kullanma; yalnız bu üç konu dosyanı düzelt.

Denetim raporundaki HER sorun için kaynak satırları kendin oku ve karar ver:
- Sorun gerçekse ve çözümü kaynağa dönmekse (düşen ayrıntıyı geri koymak, uydurmayı çıkarmak, kaynakta olmayan genellemeyi daraltmak,
  yanlış atfı düzeltmek, eksik "taslak/öneri" ya da "eskidi" işaretini koymak, haritayı düzeltmek): düzelt.
- Çözümü sahibinin seçimine bağlıysa (iki kaynak birbirini tutmuyor, biri öbürünü açıkça iptal etmiyor): çelişki dosyasına yeni
  `### CELISKI-<KOD>-<n>` ekle (iki taraf, kaynak no, sahibine tek cümlelik basit soru); kural metninde o yerde çelişkiye atıf ver; haritada
  ilgili satırlara çelişki kodunu da ekle.
- Sorun gerçek değilse dokunma.
Başka konuya ait bir satırla ilgili öneri varsa (ör. "bu satır GOMME'ye gitmeli") satırı kendi konunda bırak, yalnız notuna yaz.

Bitince: harita satır sayısı değişmemeli; haritadaki her kural kodu kural dosyasında olmalı. Dosyanın sonuna değil, ayrı
`/tmp/claude-0/-home-user-paravan/e9e24907-b798-5f27-9124-7de30541e4c1/scratchpad/b2/duzeltme_<KOD>.md`'ye her sorun için tek satır yaz: sorun → ne yaptın (düzeltildi / çelişki açıldı / dokunulmadı + neden).
Raporda yalnız sayıları ver.
