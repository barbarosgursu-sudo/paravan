"""Vaka 3 YouTube videosu — dikey (1080x1920, 30 fps).
Oyunun ORİJİNAL resimlerinden (kaynak/yeni_gorsel, yalnız OKUNUR) her satır için kare kurar, satırın
sesi bitene kadar gösterir. Karakterler kımıldamaz; hareket kamerada ve ışıkta:
  - kamera konuşana yaklaşır/kayar (yumuşak), arka plan figürlerden yavaş kayar (derinlik)
  - vurgu: satırda kısa ek yaklaşma · sarsinti: kısa ekran sarsıntısı
  - gergin: kenar karartması + soğuk, soluk renk · parilti: küçük ışıltı (Peri'nin gösterişi)
  - mekân ışığı (büro: masa lambası titrer, pencere huzmesi nefes alır), toz, çok hafif film greni
  - konuşan değişince figür çapraz geçişi, mekân etiketi, baş/son kararma
Altyazı YOK. Kullanım:
  python3 video_uret.py <metin.json> <ses klasörü> <çıktı.mp4> [--kare t1,t2,...]
  (--kare: video yerine o saniyelerin PNG'sini yazar; denetim için)
Ses klasöründe satır başına NNN.wav (ses_kokoro.py) ya da NNN.mp3 (ses_uret.py).
"""
import json, sys, os, subprocess, math, random, wave
import numpy as np
from PIL import Image, ImageEnhance, ImageOps, ImageDraw, ImageFont, ImageFilter

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
GORSEL = os.path.join(KOK, 'kaynak', 'yeni_gorsel')
MANIFESTO = json.load(open(os.path.join(KOK, 'kaynak', 'yeni', 'gorseller.json')))
FONT = os.path.join(KOK, 'uretim', 'tanitim_video', 'public', 'font', 'f8.woff2')   # Shrikhand (oyunun mekân yazısı)

W, H, FPS = 1080, 1920, 30
ARA = 0.45          # satırlar arası nefes (sn)
BAS, SON = 0.6, 1.4 # videonun başı/sonu
GECIS = 0.25        # figür ışık/ifade geçişi (oyundaki .25s)

# Mekân ışıkları — arka plan resminin KENDİ pikselinde (900x1200 orijinal ölçüsünde)
ISIK = {
    'A6': {'lamba': (268, 370, 70), 'huzme': [(330, 400), (585, 400), (440, 940), (60, 940)]},
}

arg = [a for a in sys.argv[1:] if not a.startswith('--kare')]
KARE = next((a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--kare=')), None)
metin_yol, ses_dir, cikti = arg[:3]
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
def satir_no(t):
    j = 0
    for n, p in enumerate(plan):
        if t >= p['bas'] - ARA / 2: j = n
    return j

# ---- arka plan: "cover" (1200 -> 1920 yükseklik; ortadan 1080 görünür) ----------------
arka0 = resim(S['arka']).convert('RGB')
OLC = H / arka0.height
AW = round(arka0.width * OLC); AX = (AW - W) / 2          # arka planın taban kaymasu (görünmeyen yan)
arka_b = arka0.resize((AW, H), Image.LANCZOS)

# ---- figür katmanı: oyunun yerleşimi (yeni_arayuz.css) --------------------------------
LW = W; LH = round(W * 498 / 393); PAD = round(4 * W / 393); ALT = round(6 * W / 393)
BOY = MANIFESTO.get('boy', {})
def kutu_sag(anahtar):
    kim = anahtar.split('.')[0]; bh = 1.05 * LH; bw = min(bh * 1102 / 1402, .78 * LW)
    x1 = LW - PAD + .16 * LW; return kim, bh, bw, x1 - bw
def figur_kare(sol, sag, k):
    """Bir satırın figür katmanı (RGBA, W x H). sol: Peri ya da (aynalı) Cengo/konuk; sag: Cengo ya da konuk."""
    kat = Image.new('RGBA', (W, H), (0, 0, 0, 0)); taban = H + ALT; ciz = []
    if sag:
        kim, bh, bw, x0 = kutu_sag(sag); im = resim(sag); olc = BOY.get(kim, 1)
        if olc < 1: h = bh * olc; w = h * im.width / im.height; x = x0                      # tabana, sola yaslı
        else: sc = min(bw / im.width, bh / im.height); w, h = im.width * sc, im.height * sc; x = x0 + (bw - w) / 2
        ciz.append((kim, im.resize((round(w), round(h)), Image.LANCZOS), round(x), round(taban - h)))
    if sol:
        kim = sol.split('.')[0]; im = ImageOps.mirror(resim(sol))
        if kim == 'peri':
            bh = LH; bw = min(bh * 915 / 1402, .58 * LW); x0 = PAD
            sc = min(bw / im.width, bh / im.height); w, h = im.width * sc, im.height * sc; x = x0 + (bw - w) / 2
        else:   # .vn-figur.sol.cengo / .konuk: %105 yükseklik, en çok %78 genişlik, sol marj -16%
            bh = 1.05 * LH; bw = min(bh * 1102 / 1402, .78 * LW); x0 = PAD - .16 * LW; olc = BOY.get(kim, 1)
            if olc < 1: h = bh * olc; w = h * im.width / im.height; x = x0 + bw - w     # sağa yaslı (right:0)
            else: sc = min(bw / im.width, bh / im.height); w, h = im.width * sc, im.height * sc; x = x0 + (bw - w) / 2
        ciz.insert(0, (kim, im.resize((round(w), round(h)), Image.LANCZOS), round(x), round(taban - h)))
    for kim, im, x, y in sorted(ciz, key=lambda c: c[0] == k):   # konuşan en üstte
        b, sat = (1.04, 1.0) if kim == k else (.62, .75)            # aktif / pasif
        rgb = ImageEnhance.Color(ImageEnhance.Brightness(im.convert('RGB')).enhance(b)).enhance(sat)
        rgb.putalpha(im.getchannel('A')); kat.alpha_composite(rgb, (x, y))
    return kat
def taraf(p):
    """Konuşan ekranın neresinde: -1 sol, +1 sağ, 0 anlatı."""
    if p['k'] == 'not': return 0
    return -1 if (p.get('sol') or '').split('.')[0] == p['k'] else 1
katmanlar = [figur_kare(p.get('sol'), p.get('sag'), p['k']) for p in plan]

# ---- kamera: konuşana yumuşak yaklaşma (kare kare, durumlu) ---------------------------
def hedef(t):
    p = plan[satir_no(t)]; yon = taraf(p)
    z = 1.0 if yon == 0 else 1.055
    if p.get('vurgu') and t > p['bas'] + .5 * (p['son'] - p['bas']): z += .07   # cümlenin ikinci yarısı
    cx = W / 2 + yon * 95
    z += .025 * t / TOPLAM                                                      # baştan sona hafif itme
    return z, cx
class Kamera:
    def __init__(s): s.z, s.cx = 1.0, W / 2; s.t = 0
    def adim(s, t):
        hz, hcx = hedef(t); a = 1 - math.exp(-(t - s.t) / .55) if t > s.t else 1
        s.z += (hz - s.z) * a; s.cx += (hcx - s.cx) * a; s.t = t
        cy = H / 2 - (s.z - 1) * 1300                                           # yaklaşırken yüzlere doğru
        return s.z, s.cx, cy
def sarsinti(t):
    dx = dy = 0
    for p in plan:
        for ts in p.get('sarsinti', []):
            u = t - (p['bas'] + ts)
            if 0 <= u < .45:
                g = 16 * (1 - u / .45) ** 2
                dx += g * math.sin(u * 2 * math.pi * 23); dy += g * .6 * math.cos(u * 2 * math.pi * 17)
    return dx, dy
def afin(img, z, cx, cy, ox, boyut=(W, H), mode=Image.BILINEAR):
    """Ekran (X,Y) -> kaynak: x = (X - W/2)/z + cx + ox, y = (Y - H/2)/z + cy."""
    return img.transform(boyut, Image.AFFINE, (1 / z, 0, cx + ox - W / 2 / z, 0, 1 / z, cy - H / 2 / z), resample=mode)
def sinirla(z, cx, cy):
    hw, hh = W / 2 / z, H / 2 / z
    return min(max(cx, hw - AX), W + AX - hw), min(max(cy, hh), H - hh)

# ---- mekân ışığı: lamba parıltısı + pencere huzmesi (arka plan uzayında) --------------
isik = ISIK.get(S['arka'], {})
def isik_katmani():
    lam = Image.new('L', (AW, H), 0); huz = Image.new('L', (AW, H), 0)
    if 'lamba' in isik:
        x, y, r = [v * OLC for v in isik['lamba']]
        ImageDraw.Draw(lam).ellipse((x - r, y - r, x + r, y + r), fill=255); lam = lam.filter(ImageFilter.GaussianBlur(r * .7))
    if 'huzme' in isik:
        ImageDraw.Draw(huz).polygon([(x * OLC, y * OLC) for x, y in isik['huzme']], fill=255)
        huz = huz.filter(ImageFilter.GaussianBlur(70))
    return lam, huz
LAMBA, HUZME = isik_katmani()

# ---- sabit katmanlar: mekân etiketi, kenar karartması, gren, toz ----------------------
def etiket():
    im = Image.new('RGBA', (W, 200), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    f = ImageFont.truetype(FONT, 50); yazi = S['mekan']
    w = d.textlength(yazi, font=f); x, y = W - 40 - w, 40
    golge = Image.new('RGBA', im.size, (0, 0, 0, 0)); ImageDraw.Draw(golge).text((x, y + 3), yazi, font=f, fill=(0, 0, 0, 230))
    im.alpha_composite(golge.filter(ImageFilter.GaussianBlur(6)))
    d.text((x, y), yazi, font=f, fill=(244, 232, 210, 255))
    return np.asarray(im).astype(np.float32) / 255
ETIKET = etiket()
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
VIN = np.clip(((xx - W / 2) / (W * .62)) ** 2 + ((yy - H / 2) / (H * .62)) ** 2, 0, 1.6)[..., None]   # 0 orta .. ~1.6 köşe
rng = np.random.default_rng(7)
GREN = [rng.normal(0, 1, (H // 2, W // 2)).astype(np.float32) for _ in range(6)]
GREN = [np.asarray(Image.fromarray(g).resize((W, H), Image.BILINEAR))[..., None] for g in GREN]
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
def parilti(t):
    """Satırın 'parilti' noktasında 0,7 sn'lik dört kollu ışıltı (figür katmanı uzayında)."""
    for p in plan:
        if 'parilti' not in p: continue
        x, y, ts = p['parilti']; u = (t - p['bas'] - ts) / .7
        if 0 <= u < 1:
            g = math.sin(u * math.pi); im = Image.new('L', (W, H), 0); d = ImageDraw.Draw(im)
            L = 70 * g; w = 3.5 * g + .5
            d.polygon([(x - L, y), (x, y - w), (x + L, y), (x, y + w)], fill=255)
            d.polygon([(x, y - L), (x - w, y), (x, y + L), (x + w, y)], fill=255)
            d.ellipse((x - 9 * g, y - 9 * g, x + 9 * g, y + 9 * g), fill=255)
            return im.filter(ImageFilter.GaussianBlur(1.5)), g
    return None, 0

# ---- kare kare çizim --------------------------------------------------------------------
kam = Kamera(); gergin_d = 0.0; son_t = 0.0
def kare(t):
    global gergin_d, son_t
    z, cx, cy = kam.adim(t); sx, sy = sarsinti(t)
    # arka plan: kameranın %75'i kadar (uzakta) — derinlik
    zb = 1 + (z - 1) * .75; cxb = W / 2 + (cx - W / 2) * .75; cyb = H / 2 + (cy - H / 2) * .75
    cxb, cyb = sinirla(zb, cxb, cyb)
    bg = afin(arka_b, zb, cxb - sx, cyb - sy, AX)
    f = np.asarray(bg).astype(np.float32) / 255
    # mekân ışığı (arka planla birlikte hareket eder)
    if isik:
        lam = np.asarray(afin(LAMBA, zb, cxb - sx, cyb - sy, AX)).astype(np.float32)[..., None] / 255
        huz = np.asarray(afin(HUZME, zb, cxb - sx, cyb - sy, AX)).astype(np.float32)[..., None] / 255
        tit = .78 + .12 * math.sin(t * 7.3) + .07 * math.sin(t * 17.9 + 1) + .05 * (random.random() - .5)
        nef = .5 + .5 * math.sin(t * .55)
        f = 1 - (1 - f) * (1 - lam * tit * .55 * np.array([1, .78, .42], np.float32))
        f = 1 - (1 - f) * (1 - huz * (.10 + .08 * nef) * np.array([1, .9, .7], np.float32))
    # figürler: o anki satır (önceki satırdan GECIS sn içinde geçiş), kamerayla tam hareket
    j = satir_no(t); fk = afin(katmanlar[j], z, cx - sx, cy - sy, 0)
    fa = np.asarray(fk).astype(np.float32) / 255
    if j > 0 and t < plan[j]['bas'] - ARA / 2 + GECIS:
        a = max(0, min(1, (t - (plan[j]['bas'] - ARA / 2)) / GECIS))
        fa = np.asarray(afin(katmanlar[j - 1], z, cx - sx, cy - sy, 0)).astype(np.float32) / 255 * (1 - a) + fa * a
    f = f * (1 - fa[..., 3:]) + fa[..., :3] * fa[..., 3:]
    # parıltı
    pim, pg = parilti(t)
    if pim is not None:
        pa = np.asarray(afin(pim, z, cx - sx, cy - sy, 0)).astype(np.float32)[..., None] / 255
        f = 1 - (1 - f) * (1 - pa * .95)
    # toz
    f = 1 - (1 - f) * (1 - toz(t) * np.array([1.0, .93, .8], np.float32) * .5)
    # gerginlik: kenar karartması + soğuk/soluk renk (yumuşak geçiş)
    hg = 1.0 if plan[j].get('gergin') else 0.0
    gergin_d += (hg - gergin_d) * (1 - math.exp(-max(t - son_t, 0) / .8)); son_t = t
    gri = f.mean(axis=2, keepdims=True)
    f = f * (1 - .3 * gergin_d) + gri * .3 * gergin_d
    f = f * (1 + gergin_d * np.array([-.06, -.01, .07], np.float32))
    f = f * (1 - VIN * (.22 + .38 * gergin_d))
    # gren
    f = f + GREN[int(t * FPS) % len(GREN)] * .022
    # mekân etiketi (0,3 sn'de belirir)
    ea = max(0, min(1, (t - .3) / .6)) * ETIKET[..., 3:]
    f[:200] = f[:200] * (1 - ea) + ETIKET[..., :3] * ea
    k = min(1, t / .5, max(0, (TOPLAM - t) / 1.0))
    return (np.clip(f * k, 0, 1) * 255).astype(np.uint8)

if KARE:   # denetim: yalnız istenen anların PNG'si
    # Kamera durumlu: araya 0,1 sn adımlarla yalnız kamerayı yürüt (kare çizmeden), sonra o anı çiz.
    tt = 0.0
    for ts in sorted(float(x) for x in KARE.split(',')):
        while tt < ts: kam.adim(tt); tt += .1
        Image.fromarray(kare(ts)).save(f'{cikti}_{ts:05.1f}.png'); print('kare', ts, flush=True)
    sys.exit()

# ---- ses: satırlar yerlerine ------------------------------------------------------------
json.dump([{k: v for k, v in x.items() if k != 'm'} for x in plan], open(cikti + '.zaman.json', 'w'), indent=1)
SR = 44100
ses = np.zeros(int(TOPLAM * SR) + SR, np.float32)
for p in plan:
    raw = subprocess.check_output(['ffmpeg', '-v', 'error', '-i', p['ses'], '-f', 'f32le', '-ac', '1', '-ar', str(SR), '-'])
    a = np.frombuffer(raw, np.float32).copy()
    # satırlar aynı seviyede (ElevenLabs ile Kokoro karışınca da): RMS -20 dBFS, tepe -1 dB
    rms = float(np.sqrt(np.mean(a[np.abs(a) > .01] ** 2))) if np.any(np.abs(a) > .01) else 0
    if rms > 0: a *= min(10 ** (-20 / 20) / rms, .89 / max(1e-6, float(np.abs(a).max())))
    s0 = int(p['bas'] * SR); ses[s0:s0 + len(a)] += a
ses_yol = cikti + '.ses.wav'
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
    if fi % 300 == 0: print(f'{fi}/{n}', flush=True)
ff.stdin.close(); ff.wait()
os.remove(ses_yol)
print('bitti:', cikti, round(TOPLAM, 1), 'sn')
