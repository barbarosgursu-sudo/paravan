# Resim üretimi — Oğuz Bey'in bilgisayarına kurulum

13 Kasım 2026, Barbaros'un isteği: resim üretimi genelde Oğuz Bey'in bilgisayarında yapılacak; orada da bu bilgisayardaki
programlar kurulacak. **Kurulumu yalnız Barbaros yapar.** Claude bu dosyayı ancak Barbaros o bilgisayarın başında "resim üretim
programlarını kurdurt" deyince açar; Oğuz Bey'in oturumlarında bu konuyu kendiliğinden açmaz. Adımları sırayla uygulat; her adımın
sonundaki "Doğrula" komutu geçmeden sonrakine geçme. Bitince bu dosyanın sonuna tarih + "kuruldu" yaz.

Ortağın bilgisayarında zaten olanlar (11 Kasım 2026, `kaynak/DEVIR.md`): Node.js 26.13, Python 3.12, Git, depo
`C:\Yazilim\paravan` (D: sürücüsü YOK — yollarda `D:\Yazilim` yerine `C:\Yazilim`), Playwright + Chromium, Codex CLI 0.167.1
(**giriş yapılmamış**).

Barbaros'un bilgisayarında (referans sürümler, 13 Kasım 2026): ImageMagick 7.1.2-34 · Python 3.12.10 · Pillow 13.0 · numpy 2.5 ·
PyTorch (CPU) + torchvision · Git 2.55 (Git Bash) · Codex CLI 0.167.0 · Node 26.13.

## 1. Codex'e giriş (resimleri Codex üretir)

PowerShell'de: `codex login` → tarayıcıda ChatGPT hesabıyla giriş (Plus ya da üstü; resim kotası bu hesaptan düşer).
Hangi hesabın kullanılacağına Barbaros karar verir.
**Doğrula:** `codex login status` → giriş yapılmış hesap görünür.

## 2. ImageMagick (kırpma, şerit, karşılaştırma sayfaları — `magick` komutu)

`winget install ImageMagick.ImageMagick` (kurulumda "Add to PATH" açık kalsın), sonra terminali kapatıp aç.
**Doğrula:** `magick -version` → "ImageMagick 7…".

## 3. Python paketleri

```
python -m pip install pillow numpy
python -m pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu
python -m pip install open_clip_torch
```
(PyTorch CPU sürümü; ekran kartı gerekmez. İndirme birkaç yüz MB.)
**Doğrula:** `python -c "import PIL, numpy, torch, torchvision; print(torch.__version__)"`

## 4. Tarz denetim aracının model dosyası (ilk çalıştırmada kendiliğinden iner)

`kaynak/arac_tarz.py` ilk koşuşta CLIP modelini (ViT-B-32, ~600 MB) Hugging Face'ten `%USERPROFILE%\.cache\huggingface`
altına indirir (birkaç dakika). Çapa resimleri depoda (`uretim/referanslar/tarz_capa/`); `C:\lora` gerekmez.
**Doğrula:** `cd C:\Yazilim\paravan\kaynak` → `python arac_tarz.py --sinav` → "SINAV GEÇTİ". **Dikkat:** sınav kaymış örnekleri
`uretim/v6/red/*_stil.png`'den okur ve `red/` GitHub'a gitmez → sınavdan önce Barbaros'un bilgisayarındaki
`uretim/v6/red/` içinden `G2_stil.png`, `G18_stil.png`, `G34_stil.png`–`G39_stil.png` (8 dosya) aynı klasöre kopyalanır (USB/Drive).

## 5. Döngü (Git Bash'te)

`uretim/dongu.sh` Git Bash ister (`timeout`, `date -d`, `mkdir` kilidi). Git for Windows ile gelir.
**Doğrula:** Git Bash'te `cd /c/Yazilim/paravan/uretim && ./istem_kontrol.sh v6/prompts/G3.md; echo $?` → `0`.
Döngüyü sahte Codex'le denerken PATH'e Windows yolu (`C:/…`) VERME (`uretim/CLAUDE.md` → Tuzak).

## 6. Son kontrol

- `git pull` (yalnız `main`).
- `cd kaynak && node dogrulayici.js yeni && node dogrulayici.js` → ikisi de PASS.
- Bir resimle deneme: Barbaros'un onayıyla tek bir istem `SADECE="<n>"` ile üretilir, `arac_tarz.py` ile denetlenir.

## Kayıt

- (henüz kurulmadı)
