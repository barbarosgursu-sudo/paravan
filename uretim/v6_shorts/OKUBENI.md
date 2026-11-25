# Yerel Claude için — Shorts V6 resimleri

1. `git pull`. Bu klasör: `uretim/v6_shorts/`. Liste ve denetim: `LISTE.md`.
2. Her resim için (Codex `uretim/AGENTS.md`'yi kendisi bulur):
   ```
   cd uretim/v6_shorts
   codex exec --approve-for-me "AGENTS.md'ye göre G1 resmini üret."
   ```
   (`dongu.sh` KULLANILMAZ: tarz/yüz/benzerlik araçları vaka tablosuna bağlı, bu klasörü tanımaz.)
3. Çıktı `uretilen/G<n>.png` → `LISTE.md`'deki denetim → uygunsa `onayli/G<n>.png`'ye TAŞI; değilse `red/`'e taşı, istemin
   sonuna `## Düzeltme` yaz, yeniden üret. 3 denemede tutmazsa ya da filtre engellerse web ChatGPT'de (aynı istem + referanslar).
4. Beşi onaylanınca: `onayli/` klasörünü zip'leyip bulut oturumuna (Claude Code web) gönder — orada videoya çevrilecek.
5. `DURUM.md`'ye kısa kayıt → commit → `git push origin HEAD:main` (resimler `.gitignore`'da, depoya girmez).
