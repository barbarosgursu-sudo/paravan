# Resim üretimi — Oğuz Bey'in bilgisayarına kurulum

13 Kasım 2026, Barbaros'un isteği: resim üretimi genelde Oğuz Bey'in bilgisayarında, **Oğuz Bey'in ChatGPT hesabıyla** yapılacak;
orada da bu bilgisayardaki programlar ve `Paravan` klasörünün yapısı kurulacak. **Kurulumu yalnız Barbaros yapar.** Claude bu
dosyayı ancak Barbaros o bilgisayarın başında "kurulumla başla" / "resim üretim programlarını kurdurt" deyince açar; Oğuz Bey'in
oturumlarında bu konuyu kendiliğinden açmaz. Adımları sırayla uygulat; her adımın sonundaki **Doğrula** geçmeden sonrakine geçme.
Bitince en alttaki "Kayıt"a tarih + "kuruldu" yaz, commit → `git push origin HEAD:main`.

**Üretim düzeni Barbaros'un bilgisayarındakiyle BİREBİR aynı (sahibi, 14 Kasım 2026):** üretimi Claude Code başlatır ve yürütür —
`uretim/dongu.sh` arka planda, Codex komut satırından (`codex exec`); Codex masaüstü uygulaması KULLANILMAZ. Sahibi üretimi ekranda
izlemez: her resimden sonra döngü `arac_tarz.py`'yi koşar, Claude denetler (`uretim/CLAUDE.md` → Denetim 0, A, B) ve sahibine yan
yana sayfa gösterir; temeller tek tek, parti sonu tek sayfa. Tek fark hesap/kota (Oğuz Bey'in ChatGPT hesabı).

**Ortağın bilgisayarında zaten olanlar** (11 Kasım 2026, `kaynak/DEVIR.md`): Node.js 26.13, Python 3.12, Git (Git Bash), depo
`C:\Yazilim\paravan` (D: sürücüsü YOK — bütün yollarda `D:\Yazilim` yerine `C:\Yazilim`; Git Bash'te `/c/Yazilim/paravan`),
Playwright + Chromium (`araclar/`), Codex CLI 0.167.1 (**giriş yapılmamış**).

**Barbaros'un bilgisayarında (referans, 13 Kasım 2026):** ImageMagick 7.1.2-34 · Python 3.12.10 · Pillow 13.0 · numpy 2.5 ·
PyTorch 2.15 (CPU) + torchvision 0.29 · open_clip_torch 4.2 · Git 2.55 · Codex CLI 0.167.0 · Node 26.13.

## 0. Depo güncel

Git Bash'te: `cd /c/Yazilim/paravan && git pull origin main` (yalnız `main`).
**Doğrula:** `git log --oneline -1` → Barbaros'un bilgisayarındakiyle aynı commit (Barbaros `git log --oneline -1` ile söyler).

## 1. Klasör yapısı — hepsi GitHub'dan gelir (14 Kasım 2026)

Barbaros bilgisayarını götürmüyor; elle taşınacak bir şey YOK. `git pull` her şeyi getirir:
- tarz çapası `uretim/referanslar/tarz_capa/` ve sınav resimleri `uretim/referanslar/tarz_sinav/` (kalıcı, depoda);
- `uretim/v6/red/` **GEÇİCİ olarak depoda** (normalde `.gitignore`'da; Barbaros'un isteğiyle `git add -f` ile eklendi, ~72 MB).
  **Kurulum bitince depodan sil, diskte kalsın:** `git rm -r --cached uretim/v6/red && git commit -m "red/ yeniden yalnız yerelde" &&
  git push origin HEAD:main`. Bunu yapmayı unutma — "Kayıt"a yazılır.
- döngü kayıt klasörü depo DIŞINDA oluşturulur: Git Bash'te `mkdir -p /c/Yazilim/paravan_log`.
- `C:\lora\` ve `uretim/v3/red/` GEREKMEZ.

**Doğrula:** `ls /c/Yazilim/paravan/uretim/referanslar/tarz_sinav | wc -l` → 8 · `ls /c/Yazilim/paravan/uretim/v6/red | wc -l` → 40.

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
python -m pip install opencv-python
```
(PyTorch CPU sürümü; ekran kartı gerekmez. İndirme birkaç yüz MB. `opencv-python` yüz denetim aracı için, 14 Kasım 2026.)
**Doğrula:** `python -c "import PIL, numpy, torch, torchvision, open_clip, cv2; print(torch.__version__, cv2.__version__)"`

## 5. Tarz denetim aracı (ilk çalıştırmada modeli indirir)

`kaynak/arac_tarz.py` ilk koşuşta CLIP modelini (ViT-B-32, ~600 MB) Hugging Face'ten `%USERPROFILE%\.cache\huggingface` altına
indirir (birkaç dakika; "HF_TOKEN" uyarısı zararsız). Çapa resimleri depoda (`uretim/referanslar/tarz_capa/`).
**Doğrula:** `cd /c/Yazilim/paravan/kaynak && python arac_tarz.py --sinav` → son satır **"SINAV GEÇTİ"** (kaymış 8/8, iyi 42/42).
Geçmezse `git pull`'un tamamlandığını ve `tarz_sinav/`'da 8 dosya olduğunu kontrol et.

**Yüz denetim aracı (14 Kasım 2026):** `kaynak/arac_yuz.py` ilk koşuşta iki küçük yüz modelini (~39 MB, OpenCV'nin resmî deposu)
`uretim/referanslar/yuz_model/`'e indirir (depoya girmez). Çapa: Peri/Cengo LoRA resimleri, oyundaki sprite'lar, Vaka 3 onaylıları.
**Doğrula:** `python arac_yuz.py --sinav` → son satır **"SINAV GEÇTİ"** (çapa sayıları: peri 105, cengo 52, gizem 18).
Vaka 3'ün onaylıları (`uretim/v3/onayli/`) bu bilgisayarda yoksa çapa küçülür ve sınav sonucu değişebilir — önce onu kontrol et.

**Zemin aracı (14 Kasım 2026):** `python arac_zemin.py --sinav` → **"SINAV GEÇTİ"** (ek paket gerekmez).

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

- **14 Kasım 2026 — kuruldu.** Codex **Barbaros'un ChatGPT hesabıyla** (sahibi, 14 Kas; belgedeki "Oğuz Bey'in hesabı" yerine — ileride
  değişebilir). Sürümler: Codex CLI 0.167.0, ImageMagick 7.1.2-34, Pillow 13.0, numpy 2.5, PyTorch 2.15 (CPU), OpenCV 5.0. Tarz, yüz,
  zemin sınavları GEÇTİ; doğrulayıcı iki oyunda PASS, testler geçti. Deneme: G47 üretildi (87 sn), TARZ ve YÜZ GEÇTİ, onaylandı.
  `uretim/v6/red/` depodan çıkarıldı (diskte duruyor).
  **Tuzak:** Claude masaüstü uygulaması Windows'ta paket olarak çalışıyor; içinden `npm install -g` ile kurulan Codex gerçekte
  `AppData\Local\Packages\Claude_…\LocalCache\Roaming\npm`'e yazılıyor. Codex'in "elevated" korumalı alan kurulumu uygulamanın dışında
  çalıştığı için o yolu bulamıyor ("Belirtilen yol yok", `codex doctor`: "provisioning is incomplete"). Çözüm: Codex'i bir kez de
  Başlat → `cmd`'den (uygulamanın dışından) aynı sürümle kur: `npm install -g @openai/codex@0.167.0`. Bu bilgisayarda yönetici
  yükseltmesi soru sormadan yapılıyor; izin penceresi çıkmaz. `magick` yeni kabukta PATH'e girer; açık kabukta tam yol:
  `/c/Program Files/ImageMagick-7.1.2-Q16-HDRI/magick.exe`. PowerShell betik çalıştırmayı kapalı tutuyor (`.ps1` yerine `.cmd`).
