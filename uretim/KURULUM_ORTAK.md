# Resim üretimi — Oğuz Bey'in bilgisayarına kurulum

13 Kasım 2026, Barbaros'un isteği: resim üretimi genelde Oğuz Bey'in bilgisayarında, **Oğuz Bey'in ChatGPT hesabıyla** yapılacak;
orada da bu bilgisayardaki programlar ve `Paravan` klasörünün yapısı kurulacak. **Kurulumu yalnız Barbaros yapar.** Claude bu
dosyayı ancak Barbaros o bilgisayarın başında "kurulumla başla" / "resim üretim programlarını kurdurt" deyince açar; Oğuz Bey'in
oturumlarında bu konuyu kendiliğinden açmaz. Adımları sırayla uygulat; her adımın sonundaki **Doğrula** geçmeden sonrakine geçme.
Bitince en alttaki "Kayıt"a tarih + "kuruldu" yaz, commit → `git push origin HEAD:main`.

**Ortağın bilgisayarında zaten olanlar** (11 Kasım 2026, `kaynak/DEVIR.md`): Node.js 26.13, Python 3.12, Git (Git Bash), depo
`C:\Yazilim\paravan` (D: sürücüsü YOK — bütün yollarda `D:\Yazilim` yerine `C:\Yazilim`; Git Bash'te `/c/Yazilim/paravan`),
Playwright + Chromium (`araclar/`), Codex CLI 0.167.1 (**giriş yapılmamış**).

**Barbaros'un bilgisayarında (referans, 13 Kasım 2026):** ImageMagick 7.1.2-34 · Python 3.12.10 · Pillow 13.0 · numpy 2.5 ·
PyTorch 2.15 (CPU) + torchvision 0.29 · open_clip_torch 4.2 · Git 2.55 · Codex CLI 0.167.0 · Node 26.13.

## 0. Depo güncel

Git Bash'te: `cd /c/Yazilim/paravan && git pull origin main` (yalnız `main`).
**Doğrula:** `git log --oneline -1` → Barbaros'un bilgisayarındakiyle aynı commit (Barbaros `git log --oneline -1` ile söyler).

## 1. Klasör yapısı — GitHub'la GELMEYEN parçalar

Depo (`git pull`) her şeyi getirir; şunlar bilerek depoda değil, elle kurulur:

| ne | nereye | nasıl |
|---|---|---|
| `uretim/v6/red/` (reddedilenler, ~72 MB; tarz aracının sınavı buradaki `*_stil.png`'yi okur) | `C:\Yazilim\paravan\uretim\v6\red\` | Barbaros'un bilgisayarından USB/Drive ile **bütün klasör** |
| `uretim/v3/red/` (~127 MB) | — | GEREKMEZ (eski vaka) |
| döngü kayıt klasörü (`DONGU_LOG`) | `C:\Yazilim\paravan_log\` (depo DIŞINDA) | `mkdir C:\Yazilim\paravan_log` |
| `kaynak/YENI_UI/` | — | araçlar kendisi üretir |
| `C:\lora\` | — | GEREKMEZ (tarz çapası depoda: `uretim/referanslar/tarz_capa/`) |

**Doğrula:** `ls /c/Yazilim/paravan/uretim/v6/red/*_stil.png | wc -l` → en az 8.

## 2. Codex: giriş + bu proje için ayar (resimleri Codex üretir)

1. PowerShell'de `codex login` → tarayıcıda **Oğuz Bey'in** ChatGPT hesabıyla giriş (Plus ya da üstü; resim kotası bu hesaptan düşer).
2. Codex'in ayar dosyasına (`%USERPROFILE%\.codex\config.toml`; yoksa oluştur) bu iki bölümü ekle — döngü Codex'i soru soramadan
   (`codex exec … < /dev/null`) çalıştırır; proje "güvenilir" değilse takılır ya da reddeder:
   ```
   [windows]
   sandbox = "elevated"

   [projects.'c:\yazilim\paravan']
   trust_level = "trusted"
   ```
3. Bir kez elle dene (kota harcamaz): Git Bash'te `cd /c/Yazilim/paravan/uretim/v6 && codex exec --approve-for-me "Yalnız 'hazır' yaz." < /dev/null`
**Doğrula:** `codex login status` → Oğuz Bey'in hesabı; 3. adım "hazır" ile biter, izin sorusunda takılmaz.

## 3. ImageMagick (kırpma, şerit, karşılaştırma sayfaları — `magick` komutu)

`winget install ImageMagick.ImageMagick` (kurulumda "Add to PATH" açık kalsın), sonra terminali kapatıp aç.
**Doğrula:** `magick -version` → "ImageMagick 7…".

## 4. Python paketleri

```
python -m pip install pillow numpy
python -m pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu
python -m pip install open_clip_torch
```
(PyTorch CPU sürümü; ekran kartı gerekmez. İndirme birkaç yüz MB.)
**Doğrula:** `python -c "import PIL, numpy, torch, torchvision, open_clip; print(torch.__version__)"`

## 5. Tarz denetim aracı (ilk çalıştırmada modeli indirir)

`kaynak/arac_tarz.py` ilk koşuşta CLIP modelini (ViT-B-32, ~600 MB) Hugging Face'ten `%USERPROFILE%\.cache\huggingface` altına
indirir (birkaç dakika; "HF_TOKEN" uyarısı zararsız). Çapa resimleri depoda (`uretim/referanslar/tarz_capa/`).
**Doğrula:** `cd /c/Yazilim/paravan/kaynak && python arac_tarz.py --sinav` → son satır **"SINAV GEÇTİ"** (kaymış 8/8, iyi 42/42).
Geçmezse 1. adımdaki `red/` kopyasını kontrol et.

## 6. Döngü (Git Bash'te)

`uretim/dongu.sh` Git Bash ister (`timeout`, `date -d`, `mkdir` kilidi). Her yeni resim gelince `arac_tarz.py`'yi kendisi koşar.
**Doğrula:** `cd /c/Yazilim/paravan/uretim && ./istem_kontrol.sh v6/prompts/G34.md; echo $?` → `0`.
Döngüyü sahte Codex'le denerken PATH'e Windows yolu (`C:/…`) VERME (`uretim/CLAUDE.md` → Tuzak).

## 7. Son kontrol ve tek resimlik deneme

- `cd /c/Yazilim/paravan/kaynak && node dogrulayici.js yeni && node dogrulayici.js` → ikisi de PASS.
- Barbaros'un onayıyla TEK resim: `cd /c/Yazilim/paravan/uretim && KOL=1 SADECE="47" DONGU_LOG=/c/Yazilim/paravan_log ./dongu.sh 6`
  → `uretilen/G47.png` gelir, çıktıda `G47 TARZ: …` satırı görünür. Resim `uretim/CLAUDE.md` → Denetim ile denetlenir.
- Kota kaydı: Oğuz Bey'in hesabının ChatGPT → Ayarlar → Kullanım değerleri `uretim/v6/DURUM.md` → Kota kaydı tablosuna yazılır
  (hesap değişti: önceki satırlarla toplanmaz).

## Kayıt

- (henüz kurulmadı)
