"""Vaka 3 YouTube videosu — dikey deneme (1080x1920, 30 fps).
Oyunun ORİJİNAL resimlerinden (kaynak/yeni_gorsel, yalnız OKUNUR) her satır için kare kurar,
satırın sesi bitene kadar gösterir. Hareket: yavaş kamera (sahne boyunca kesintisiz), konuşan
değişince figür çapraz geçişi, ışık huzmesinde süzülen toz. Altyazı YOK; mekân etiketi var.
Kullanım: python3 video_uret.py metin_deneme.json <ses klasörü> <çıktı.mp4>
Ses klasöründe satır başına NNN.wav (ses_kokoro.py) ya da NNN.mp3 (ses_uret.py) olmalı.
"""
import json, sys, os, subprocess, math, random
import numpy as np
from PIL import Image, ImageEnhance, ImageOps, ImageDraw, ImageFont, ImageFilter

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
GORSEL = os.path.join(KOK, 'kaynak', 'yeni_gorsel')
MANIFESTO = json.load(open(os.path.join(KOK, 'kaynak', 'yeni', 'gorseller.json')))
FONT = os.path.join(KOK, 'uretim', 'tanitim_video', 'public', 'font', 'f8.woff2')   # Shrikhand (oyunun mekân yazısı)

W, H, FPS = 1080, 1920, 30
ARA = 0.45          # satırlar arası nefes (sn)
BAS, SON = 0.6, 1.2 # videonun başı/sonu
GECIS = 0.25        # figür ışık/ifade geçişi (oyundaki .25s)

metin_yol, ses_dir, cikti = sys.argv[1], sys.argv[2], sys.argv[3]
M = json.load(open(metin_yol))
S = M['sahne']

def resim(anahtar):
    return Image.open(os.path.join(GORSEL, MANIFESTO['dosyalar'][anahtar])).convert('RGBA')

# ---- sesler ve zaman çizelgesi -------------------------------------------------
def ses_yolu(i):
    for uz in ('wav', 'mp3'):
        p = f'{ses_dir}/{i:03d}.{uz}'
        if os.path.exists(p): return p
    sys.exit(f'ses yok: satır {i}')
def sure(p):
    return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
                                          '-of', 'csv=p=0', p]).decode())
t = BAS; plan = []
for i, s in enumerate(M['satirlar']):
    p = ses_yolu(i); d = sure(p)
    plan.append({'i': i, 'bas': t, 'son': t + d, 'ses': p, **s}); t += d + ARA
TOPLAM = t - ARA + SON
json.dump([{k: v for k, v in x.items() if k != 'm'} for x in plan], open(cikti + '.zaman.json', 'w'), indent=1)

# ---- sahne: arka plan "cover" + oyunun figür yerleşimi (yeni_arayuz.css) ------------
arka = resim(S['arka']).convert('RGB')
ARKA_OLC = H / arka.height                 # 1200 -> 1920
AW = round(arka.width * ARKA_OLC)          # 1440 (ortadan 1080 görünür)
arka_b = arka.resize((AW, H), Image.LANCZOS)

# Figür katmanı: telefon sahnesinin oranı (393/498), genişlik tam ekran, alta oturur.
LW = W; LH = round(W * 498 / 393); PAD = round(4 * W / 393); ALT = round(6 * W / 393)
BOY = MANIFESTO.get('boy', {})
def figur_kare(sol, sag, k):
    """Bir satırın figür katmanı (RGBA, W x H). sol = Peri (aynalı), sag = Cengo ya da konuk."""
    kat = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    taban = H + ALT
    kimler = []
    # sağ kutu: yükseklik %105, genişlik en çok %78, sağ marj -16%
    if sag:
        kim = sag.split('.')[0]
        bh = 1.05 * LH; bw = min(bh * 1102 / 1402, .78 * LW)
        x1 = LW - PAD + .16 * LW; x0 = x1 - bw
        im = resim(sag); olc = BOY.get(kim, 1)
        if olc < 1:   # küçük figür: kutunun soluna yaslı, boy ölçekli
            h = bh * olc; w = h * im.width / im.height; x = x0
        else:         # contain, alta ortalı
            sc = min(bw / im.width, bh / im.height); w, h = im.width * sc, im.height * sc; x = x0 + (bw - w) / 2
        kimler.append((kim, im.resize((round(w), round(h)), Image.LANCZOS), round(x), round(taban - h)))
    if sol:
        kim = sol.split('.')[0]
        bh = LH; bw = min(bh * 915 / 1402, .58 * LW)
        im = ImageOps.mirror(resim(sol))
        sc = min(bw / im.width, bh / im.height); w, h = im.width * sc, im.height * sc
        kimler.insert(0, (kim, im.resize((round(w), round(h)), Image.LANCZOS), round(PAD + (bw - w) / 2), round(taban - h)))
    for kim, im, x, y in kimler:   # konuşan aydınlık (aktif), dinleyen soluk (pasif)
        b, sat = (1.04, 1.0) if kim == k else (.62, .75)
        rgb = ImageEnhance.Color(ImageEnhance.Brightness(im.convert('RGB')).enhance(b)).enhance(sat)
        rgb.putalpha(im.getchannel('A'))
        kat.alpha_composite(rgb, (x, y))
    # konuşan öne: sıra korunur, ama konuşanı en son tekrar çiz
    for kim, im, x, y in kimler:
        if kim == k:
            rgb = ImageEnhance.Brightness(im.convert('RGB')).enhance(1.04); rgb.putalpha(im.getchannel('A'))
            kat.alpha_composite(rgb, (x, y))
    return np.asarray(kat).astype(np.float32) / 255

katmanlar = [figur_kare(s.get('sol'), s.get('sag'), s['k']) for s in plan]

# ---- mekân etiketi (oyundaki gibi sağ üstte; başta belirir) --------------------------
def etiket():
    im = Image.new('RGBA', (W, 200), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    f = ImageFont.truetype(FONT, 50); yazi = S['mekan']
    w = d.textlength(yazi, font=f); x, y = W - 40 - w, 40
    golge = Image.new('RGBA', im.size, (0, 0, 0, 0)); ImageDraw.Draw(golge).text((x, y + 3), yazi, font=f, fill=(0, 0, 0, 230))
    im.alpha_composite(golge.filter(ImageFilter.GaussianBlur(6)))
    d.text((x, y), yazi, font=f, fill=(244, 232, 210, 255))
    return np.asarray(im).astype(np.float32) / 255
ETIKET = etiket()

# ---- toz: pencereden gelen ışıkta süzülen zerreler -------------------------------------
random.seed(3)
TOZ = [(random.uniform(0, W), random.uniform(0, H * .75), random.uniform(1.2, 3.2), random.uniform(.15, .55),
        random.uniform(0, 6.28), random.uniform(8, 22)) for _ in range(70)]
def toz(t):
    im = Image.new('L', (W, H), 0); d = ImageDraw.Draw(im)
    for x0, y0, r, a, ph, hiz in TOZ:
        x = (x0 + hiz * t + 18 * math.sin(t * .4 + ph)) % W
        y = (y0 + 6 * t + 12 * math.sin(t * .3 + ph * 2)) % (H * .8)
        d.ellipse((x - r, y - r, x + r, y + r), fill=int(255 * a * (.6 + .4 * math.sin(t * 1.3 + ph))))
    return np.asarray(im.filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32)[..., None] / 255

# ---- kare kare çizim → ffmpeg ---------------------------------------------------------
def kamera(t):
    """Yavaş itme + hafif kayma, sahne boyunca kesintisiz (0..1 ilerleme, yumuşak)."""
    u = t / TOPLAM; u = u * u * (3 - 2 * u)
    z = 1.0 + .07 * u
    return z, (-40 + 80 * u), (-20 * u)    # yakınlaşma, x kayması, y kayması (px)

def kare(t):
    z, dx, dy = kamera(t)
    sw, sh = round(AW * z), round(H * z)
    bg = arka_b.resize((sw, sh), Image.BILINEAR)
    x0 = (sw - W) // 2 + round(dx); y0 = (sh - H) // 2 + round(dy)
    f = np.asarray(bg.crop((x0, y0, x0 + W, y0 + H))).astype(np.float32) / 255
    # figürler: o anki satır (bir önceki satırdan GECIS sn içinde geçiş)
    j = 0
    for n, p in enumerate(plan):
        if t >= p['bas'] - ARA / 2: j = n
    fk = katmanlar[j]
    if j > 0 and t < plan[j]['bas'] - ARA / 2 + GECIS:
        a = (t - (plan[j]['bas'] - ARA / 2)) / GECIS; a = max(0, min(1, a))
        fk = katmanlar[j - 1] * (1 - a) + fk * a
    # figür katmanı kamerayla biraz daha az hareket eder (derinlik)
    f = f * (1 - fk[..., 3:]) + fk[..., :3] * fk[..., 3:]
    # toz (ekran karışımı)
    tz = toz(t) * np.array([1.0, .93, .8], np.float32)
    f = 1 - (1 - f) * (1 - tz * .55)
    # mekân etiketi: 0.3 sn'de belirir
    ea = max(0, min(1, (t - .3) / .6)) * ETIKET[..., 3:]
    f[:200] = f[:200] * (1 - ea) + ETIKET[..., :3] * ea
    # baş ve sonda karartma
    k = min(1, t / .5, max(0, (TOPLAM - t) / .8))
    return (np.clip(f * k, 0, 1) * 255).astype(np.uint8)

# ---- ses: satırlar yerlerine (float, 44.1k) ---------------------------------------------
SR = 44100
ses = np.zeros(int(TOPLAM * SR) + SR, np.float32)
for p in plan:
    raw = subprocess.check_output(['ffmpeg', '-v', 'error', '-i', p['ses'], '-f', 'f32le', '-ac', '1', '-ar', str(SR), '-'])
    a = np.frombuffer(raw, np.float32); s0 = int(p['bas'] * SR); ses[s0:s0 + len(a)] += a
ses_yol = cikti + '.ses.wav'
import wave
with wave.open(ses_yol, 'wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((np.clip(ses[:int(TOPLAM * SR)], -1, 1) * 32767).astype('<i2').tobytes())

n = int(TOPLAM * FPS)
ff = subprocess.Popen(['ffmpeg', '-y', '-v', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS),
                       '-i', '-', '-i', ses_yol, '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p',
                       '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11,aformat=sample_fmts=fltp:sample_rates=48000',
                       '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-shortest', cikti], stdin=subprocess.PIPE)
for fi in range(n):
    ff.stdin.write(kare(fi / FPS).tobytes())
    if fi % 150 == 0: print(f'{fi}/{n}', flush=True)
ff.stdin.close(); ff.wait()
os.remove(ses_yol)
print('bitti:', cikti, round(TOPLAM, 1), 'sn')
