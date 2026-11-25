# ARAÇ + KAPI (14 Kasım 2026, kural 5 — sahibi: "neden sürekli eller, kollar gözden kaçıyor"; V6 K96'da Peri'nin iki SAĞ eli
# vardı, gözle iki kez kaçtı). Elin sağ/sol olduğunu çizimden makine güvenilir biçimde söyleyemez (avuç mu sırt mı görünüyor
# bilinmez); bu yüzden kapı iki şey yapar:
#   1) OTOMATİK: insan sayısı istemin "TAM n kişi"siyle tutuyor mu (YOLOX), her kişinin iki kolu ve iki eli bulunuyor mu (DWPose).
#   2) ZORUNLU BAKIŞ: her resmin "el sayfası" — her kişinin SOL ve SAĞ kolu renkle çizilmiş (sol mavi, sağ kırmızı), her el
#      büyütülmüş ve hangi kola bağlı olduğu yazılı. Bakan kişi başparmağın yönüne bakar: sol kolun ucunda sol el mi?
#      Bakıp onaylanan resim `uretim/v<N>/el_onay.md`'ye yazılır (`- G65 <dosya imzası>`); resim değişirse onay düşer.
# Kullanım:
#   python arac_el.py --sayfa V6 [G65 …]   → YENI_UI/el/G<n>.jpg sayfaları (hepsi ya da verilenler) + otomatik bulgular
#   python arac_el.py --onay V6 G65 …      → bakılan resimleri onaylar (el_onay.md'ye imzayla yazar)
#   python arac_el.py --kapi V6            → kapı: onaysız ya da değişmiş resim, kişi sayısı tutmayan resim → çıkış 1
# Modeller ilk kullanımda indirilir (~350 MB, huggingface.co/yzd-v/DWPose, Apache-2.0) → ~/.cache/paravan/.
import os, re, sys, hashlib, urllib.request
try: sys.stdout.reconfigure(encoding="utf-8")   # Windows konsolu (cp1252) "→" basamıyordu — 23 Kasım 2026
except Exception: pass
import numpy as np
from PIL import Image, ImageDraw, ImageFont

def yazi(boy=14):
    # Türkçe harfli yazı tipi (Windows: Arial / Segoe; Linux: DejaVu); yoksa varsayılan.
    for f in ('C:/Windows/Fonts/arial.ttf', 'C:/Windows/Fonts/segoeui.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', '/Library/Fonts/Arial.ttf'):
        if os.path.exists(f): return ImageFont.truetype(f, boy)
    return ImageFont.load_default()

KOK = os.path.dirname(os.path.abspath(__file__))
DEPO = os.path.dirname(KOK)
ONB = os.environ.get('PARAVAN_MODEL_DIR') or os.path.join(os.path.expanduser('~'), '.cache', 'paravan')
MODELLER = {'yolox_l.onnx': 2e8, 'dw-ll_ucoco_384.onnx': 1.2e8}

def model(ad):
    f = os.path.join(ONB, ad)
    if not os.path.exists(f) or os.path.getsize(f) < MODELLER[ad]:
        os.makedirs(ONB, exist_ok=True); print('model indiriliyor (bir kez):', ad, flush=True)
        urllib.request.urlretrieve('https://huggingface.co/yzd-v/DWPose/resolve/main/' + ad, f + '.part'); os.replace(f + '.part', f)
    import onnxruntime as ort
    return ort.InferenceSession(f, providers=['CPUExecutionProvider'])

_S = {}
def S(ad):
    if ad not in _S: _S[ad] = model(ad)
    return _S[ad]

def insanlar(im):
    """YOLOX: kişi kutuları [(x0,y0,x1,y1,skor)]."""
    W, H = im.size; r = min(640 / W, 640 / H)
    k = im.resize((int(W * r), int(H * r)), Image.BILINEAR)
    pad = Image.new('RGB', (640, 640), (114, 114, 114)); pad.paste(k, (0, 0))
    x = np.asarray(pad, np.float32)[..., ::-1].transpose(2, 0, 1)[None].copy()   # BGR, 0–255
    o = S('yolox_l.onnx').run(None, {'images': x})[0][0]
    grids, strides = [], []
    for s in (8, 16, 32):
        h = w = 640 // s; yv, xv = np.meshgrid(np.arange(h), np.arange(w), indexing='ij')
        grids.append(np.stack((xv, yv), 2).reshape(-1, 2)); strides.append(np.full((h * w, 1), s))
    g = np.concatenate(grids); st = np.concatenate(strides)
    xy = (o[:, :2] + g) * st; wh = np.exp(o[:, 2:4]) * st
    sk = o[:, 4] * o[:, 5]
    m = sk > 0.35; xy, wh, sk = xy[m], wh[m], sk[m]
    kut = np.concatenate([xy - wh / 2, xy + wh / 2], 1) / r
    sira = sk.argsort()[::-1]; secilen = []
    for i in sira:
        if all(iou(kut[i], kut[j]) < 0.45 for j in secilen): secilen.append(i)
    return [(*kut[i].clip(0, [W, H, W, H]), float(sk[i])) for i in secilen]

def iou(a, b):
    x0, y0, x1, y1 = max(a[0], b[0]), max(a[1], b[1]), min(a[2], b[2]), min(a[3], b[3])
    i = max(0, x1 - x0) * max(0, y1 - y0)
    return i / ((a[2] - a[0]) * (a[3] - a[1]) + (b[2] - b[0]) * (b[3] - b[1]) - i + 1e-6)

def iskelet(im, kutu):
    """DWPose: 133 nokta (x, y, güven) — 0–16 gövde (7 sol dirsek, 9 sol bilek, 8 sağ dirsek, 10 sağ bilek), 91–111 sol el, 112–132 sağ el."""
    x0, y0, x1, y1 = kutu[:4]; cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    w, h = (x1 - x0) * 1.25, (y1 - y0) * 1.25
    if w / h > 288 / 384: h = w * 384 / 288
    else: w = h * 288 / 384
    # 288×384 kırpık: çıktı pikseli (u,v) → kaynak (cx - w/2 + u·w/288, cy - h/2 + v·h/384)
    k = im.transform((288, 384), Image.AFFINE, (w / 288, 0, cx - w / 2, 0, h / 384, cy - h / 2), Image.BILINEAR)
    a = (np.asarray(k, np.float32) - [123.675, 116.28, 103.53]) / [58.395, 57.12, 57.375]
    sx, sy = S('dw-ll_ucoco_384.onnx').run(None, {'input': a.transpose(2, 0, 1)[None].astype(np.float32)})
    px = sx[0].argmax(1) / 2.0; py = sy[0].argmax(1) / 2.0
    guv = np.minimum(sx[0].max(1), sy[0].max(1))
    return np.stack([cx - w / 2 + px * w / 288, cy - h / 2 + py * h / 384, guv], 1)

def tablo(N):
    """vaka<N>_gorsel.md → {G<n>: (tür, anahtar)} yalnız ekranda kişi görünen resimler (figür, ara kare, detay)."""
    t = {}
    for l in open(os.path.join(DEPO, 'sablon', 'vakalar', f'vaka{N}_gorsel.md'), encoding='utf-8'):
        c = [x.strip() for x in l.split('|')]
        if len(c) > 5 and re.match(r'^G\d+$', c[1]) and c[2] in ('figür', 'ara kare', 'detay'): t[c[1]] = (c[2], c[4].strip('`'))
    return t

def kac_kisi(N, g):
    f = os.path.join(DEPO, 'uretim', f'v{N}', 'prompts', g + '.md')
    if not os.path.exists(f): return None
    m = re.search(r'TAM (\d+) kişi', open(f, encoding='utf-8').read())
    return int(m.group(1)) if m else (1 if 'figür' in tablo(N).get(g, ('',))[0] else None)

def imza(f): return hashlib.md5(open(f, 'rb').read()).hexdigest()[:12]
def kaynak(N, g): return os.path.join(DEPO, 'uretim', f'v{N}', 'onayli', g + '.png')
def onay_dosya(N): return os.path.join(DEPO, 'uretim', f'v{N}', 'el_onay.md')
def onaylar(N):
    f = onay_dosya(N)
    return dict(re.findall(r'^- (G\d+) ([0-9a-f]{12})', open(f, encoding='utf-8').read(), re.M)) if os.path.exists(f) else {}

def incele(N, g):
    im = Image.open(kaynak(N, g)).convert('RGB')
    kisiler = [k for k in insanlar(im) if (k[3] - k[1]) > im.size[1] * 0.15]
    bulgu, sk = [], []
    beklenen = kac_kisi(N, g)
    if beklenen is not None and len(kisiler) != beklenen: bulgu.append(f'istem TAM {beklenen} kişi diyor, {len(kisiler)} kişi bulundu')
    for i, k in enumerate(kisiler):
        p = iskelet(im, k); sk.append(p)
        for ad, bilek, el in (('SOL', 9, slice(91, 112)), ('SAĞ', 10, slice(112, 133))):
            if p[bilek, 2] < 0.3 and p[el, 2].mean() < 0.3: continue   # kadraj dışı ya da arkada: göz bakar
    return im, kisiler, sk, bulgu

def sayfa(N, g):
    im, kisiler, sk, bulgu = incele(N, g)
    W, H = im.size; olc = 900 / H
    tam = im.resize((int(W * olc), 900)); d = ImageDraw.Draw(tam)
    kol = {'SOL': ((5, 7, 9), (0, 120, 255)), 'SAĞ': ((6, 8, 10), (255, 40, 40))}
    eller = []
    for i, p in enumerate(sk):
        for ad, (zincir, renk) in kol.items():
            pts = [tuple(p[j, :2] * olc) for j in zincir]
            d.line(pts, fill=renk, width=6)
            el = p[91:112] if ad == 'SOL' else p[112:133]
            if el[:, 2].mean() < 0.3 and p[zincir[2], 2] < 0.3:
                eller.append((f'kişi {i + 1} · {ad} el görünmüyor (gövdenin arkasında / kadraj dışı) — resimde kontrol et', renk, None)); continue
            x0, y0 = el[:, :2].min(0); x1, y1 = el[:, :2].max(0)
            bx, by = p[zincir[2], :2]
            x0, y0, x1, y1 = min(x0, bx), min(y0, by), max(x1, bx), max(y1, by)
            pay = max(x1 - x0, y1 - y0) * 0.35 + 30
            kut = (int(max(0, x0 - pay)), int(max(0, y0 - pay)), int(min(W, x1 + pay)), int(min(H, y1 + pay)))
            d.rectangle([c * olc for c in kut], outline=renk, width=3)
            d.text((kut[0] * olc + 4, kut[1] * olc + 2), f'K{i + 1} {ad}', fill=renk, font=yazi(16))
            c = im.crop(kut); c.thumbnail((300, 300)); eller.append((f'kişi {i + 1} · {ad} kolundaki el', renk, c))
    gen = tam.width + 20 + 2 * 310
    sf = Image.new('RGB', (gen, max(900, 40 + ((len(eller) + 1) // 2) * 340)), (30, 30, 30)); sf.paste(tam, (0, 0))
    dd = ImageDraw.Draw(sf)
    for j, (et, renk, c) in enumerate(eller):
        x = tam.width + 20 + (j % 2) * 310; y = 60 + (j // 2) * 340
        if c is not None: sf.paste(c, (x, y))
        dd.text((x, y + (c.height + 4 if c is not None else 0)), et, fill=renk, font=yazi(13))
    dd.text((tam.width + 20, 8), f'{g} — sol kolda SOL el, sağ kolda SAĞ el mi? (başparmağın yönü)', fill=(255, 255, 0), font=yazi(15))
    for k, b in enumerate(bulgu): dd.text((tam.width + 20, 30 + k * 16), 'OTOMATİK: ' + b, fill=(255, 140, 0), font=yazi(14))
    os.makedirs(os.path.join(KOK, 'YENI_UI', 'el'), exist_ok=True)
    out = os.path.join(KOK, 'YENI_UI', 'el', g + '.jpg'); sf.save(out, quality=85)
    return out, bulgu

def secim(N, gs): return gs or sorted(tablo(N), key=lambda x: int(x[1:]))

if __name__ == '__main__':
    a = sys.argv[1:]
    if len(a) < 2: sys.exit(__doc__ or 'Kullanım: python arac_el.py --sayfa|--onay|--kapi V6 [G…]')
    kip, N, gs = a[0], int(a[1].lstrip('Vv')), a[2:]
    if kip == '--sayfa':
        for g in secim(N, gs):
            if not os.path.exists(kaynak(N, g)): print(g, 'kaynak yok'); continue
            out, b = sayfa(N, g); print(g, '→', os.path.relpath(out), ('· ' + '; '.join(b)) if b else '')
    elif kip == '--onay':
        if not gs: sys.exit('hangi resimler? python arac_el.py --onay V6 G65 G66 …')
        on = onaylar(N); on.update({g: imza(kaynak(N, g)) for g in gs})
        f = onay_dosya(N)
        bas = '# El onayı — kural 5\n\nEl sayfasına (python kaynak/arac_el.py --sayfa V%d G<n>) bakılıp her elin kendi kolunda ve doğru\n(sağ/sol) olduğu görülen resimler. Onay sahibinindir (kendisi bakar ya da bakanın sonucunu onaylar). İmza resmin kendisinin; resim değişirse onay düşer, yeniden bakılır.\n\n' % N
        open(f, 'w', encoding='utf-8').write(bas + ''.join(f'- {g} {on[g]}\n' for g in sorted(on, key=lambda x: int(x[1:]))))
        print('onaylandı:', ' '.join(gs))
    elif kip == '--kapi':
        on = onaylar(N); kotu = 0
        import json
        sf = os.path.join(KOK, 'YENI_UI', 'el', 'sayim.json'); os.makedirs(os.path.dirname(sf), exist_ok=True)
        # Önbellek hep UTF-8 (Windows'ta varsayılan cp1252 "ş"yi yazamıyor, dosya yarım kalıyordu — 23 Kasım 2026);
        # bozuk önbellek kapıyı durdurmaz, baştan sayılır; yazma geçici dosyaya, sonra yer değiştirir (yarım dosya kalmaz).
        try: say = json.load(open(sf, encoding='utf-8')) if os.path.exists(sf) else {}
        except (ValueError, UnicodeDecodeError): say = {}
        def say_yaz():
            gec = sf + '.gecici'
            with open(gec, 'w', encoding='utf-8') as y: json.dump(say, y, ensure_ascii=False)
            os.replace(gec, sf)
        for g in secim(N, gs):
            f = kaynak(N, g)
            if not os.path.exists(f): continue
            # Kişi görünmeyen resim (arka plan) ve kişi sayısı bilinmeyen resim atlanır (kancadaki söz; 25 Kasım 2026: V7 mekânları
            # G13–G20 el onayı istiyordu).
            if g not in tablo(N) and kac_kisi(N, g) is None: continue
            i = imza(f)
            if (say.get(g) or [None])[0] != i:   # kişi sayısı: resim başına bir kez (imzayla önbellek)
                _, _, _, b = incele(N, g); say[g] = [i, b]; say_yaz()
            # Onaylanmış (imzası tutan) resimde otomatik kişi sayısı uyarısı da kapanır: onaylayan kişi sayıyı da gördü
            # (araç sarılan iki kişiyi tek, mankeni kişi sayabiliyor — V6 G66, G70, G77).
            if on.get(g) != i:
                for x in say[g][1]: print(f'K5 | {g} | {x}'); kotu += 1
            if on.get(g) != imza(f):
                print(f'K5 | {g} | el sayfasına bakılmadı ya da resim değişti — python arac_el.py --sayfa V{N} {g}, bak, sonra --onay'); kotu += 1
        sys.exit(1 if kotu else 0)
    else: sys.exit('kip: --sayfa | --onay | --kapi')
