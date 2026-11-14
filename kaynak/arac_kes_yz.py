# ARAÇ (test değil): figür kesimi YAPAY ZEKÂ modeliyle (14 Kasım 2026, sahibinin kararı: "vakalar bir standarda otursun").
# arac_kes.js renkle (taşkın doldurma) keser: saç telleri arasındaki zemini ve kapalı boşlukları (kol arası) göremez;
# V6'da Peri'nin saçında gri-mavi hale, Cengo'nun kol arasında bej kaldı ve yayına çıktı. Bu araç şekille keser
# (BiRefNet, MIT lisanslı, ONNX; zemin rengi ne olursa olsun), sonra yarı saydam kenardan zemin rengini çıkarır
# (renk arındırma: F = (I - (1-a)·Z) / a) ki saç kenarında mavi/bej parlama kalmasın.
#
# Çerçeve arac_kes.js'deki profilin AYNISI (x0–x1, 700 px yükseklik): bütün ifadeler aynı çerçeveyle kesilir,
# figür ekranda zıplamaz; --genis aynı anlamda (tam genişlik).
#
# Kullanım: python arac_kes_yz.py <girdi.png> <cikti.webp> --profil <arac_kes profili> [--genis] [--onizleme <yesil.png>]
# Çıktı satırı: "KALINTI <n>" = kenarda zemin rengine yakın kalan piksel sayısı (arac_paket.js kapı olarak okur).
#
# Model ilk kullanımda indirilir (~970 MB, huggingface.co/onnx-community/BiRefNet-ONNX) → PARAVAN_YZ_MODEL ya da
# ~/.cache/paravan/birefnet.onnx. Gerekli: pip install onnxruntime numpy pillow.
import os, re, sys, urllib.request
import numpy as np
from PIL import Image

URL = 'https://huggingface.co/onnx-community/BiRefNet-ONNX/resolve/main/onnx/model.onnx'
MODEL = os.environ.get('PARAVAN_YZ_MODEL') or os.path.join(os.path.expanduser('~'), '.cache', 'paravan', 'birefnet.onnx')
KALINTI_UZAK = float(os.environ.get('KALINTI_UZAK', 22))   # zemine bu kadar yakın kenar pikseli = kalıntı

def profil_cerceve(ad):
    js = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'arac_kes.js'), encoding='utf-8').read()
    m = re.search(r'\b' + re.escape(ad) + r'\s*:\s*\{\s*x0:\s*(\d+),\s*x1:\s*(\d+)', js)
    if not m: sys.exit('profil yok: ' + ad)
    return int(m.group(1)), int(m.group(2))

def model():
    if not os.path.exists(MODEL) or os.path.getsize(MODEL) < 9e8:
        os.makedirs(os.path.dirname(MODEL), exist_ok=True)
        print('model indiriliyor (~970 MB, bir kez):', MODEL, flush=True)
        urllib.request.urlretrieve(URL, MODEL + '.part'); os.replace(MODEL + '.part', MODEL)
    import onnxruntime as ort
    return ort.InferenceSession(MODEL, providers=['CPUExecutionProvider'])

def maske(sess, im):
    W, H = im.size
    a = np.asarray(im.resize((1024, 1024), Image.BILINEAR), np.float32) / 255.0
    a = (a - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    inp = sess.get_inputs()[0]
    y = sess.run(None, {inp.name: a.transpose(2, 0, 1)[None].astype(np.float32)})[0][0, 0]
    m = 1 / (1 + np.exp(-y))
    return np.asarray(Image.fromarray((m * 255).astype(np.uint8)).resize((W, H), Image.BILINEAR), np.float32) / 255.0

def genislet(m, n):
    for _ in range(n):
        g = m.copy(); g[1:] |= m[:-1]; g[:-1] |= m[1:]; g[:, 1:] |= m[:, :-1]; g[:, :-1] |= m[:, 1:]; m = g
    return m

def kes(girdi, cikti, profil, genis=False, onizleme=None, sess=None):
    im = Image.open(girdi).convert('RGB'); W, H = im.size
    I = np.asarray(im, np.float32)
    Z = np.concatenate([I[5:40, 5:40].reshape(-1, 3), I[5:40, W - 40:W - 5].reshape(-1, 3)]).mean(0)  # zemin rengi
    alfa = maske(sess or model(), im)
    alfa[alfa < 0.02] = 0
    aa = np.clip(alfa, 1e-3, 1)[..., None]
    F = np.where(alfa[..., None] > 0.98, I, np.clip((I - (1 - aa) * Z) / aa, 0, 255))
    # Kalıntı ölçümü: görünür (a>0.3) ve saydama 3 px yakın piksellerden rengi zemine yakın olanlar.
    kenar = genislet(alfa < 0.3, 3) & (alfa > 0.3)
    kalinti = int((kenar & (np.sqrt(((F - Z) ** 2).sum(-1)) < KALINTI_UZAK)).sum())
    x0, x1 = (0, W - 1) if genis else profil_cerceve(profil)
    o = Image.fromarray(np.dstack([F, alfa * 255]).round().astype(np.uint8), 'RGBA').crop((x0, 0, x1 + 1, H))
    sc = min(1, 700 / H)
    o = o.resize((round(o.width * sc), round(H * sc)), Image.LANCZOS)
    o.save(cikti, 'WEBP', quality=80, method=6)
    if onizleme:
        z = Image.new('RGBA', o.size, (51, 170, 102, 255)); z.alpha_composite(o); z.save(onizleme)
    return o.size, kalinti, tuple(int(v) for v in Z)

if __name__ == '__main__':
    arg = sys.argv[1:]
    def al(ad, v=None):
        if ad not in arg: return v
        i = arg.index(ad); x = arg[i + 1]; del arg[i:i + 2]; return x
    genis = '--genis' in arg
    if genis: arg.remove('--genis')
    profil = al('--profil', 'konuk'); on = al('--onizleme')
    if len(arg) != 2: sys.exit('Kullanım: python arac_kes_yz.py <girdi.png> <cikti.webp> --profil <ad> [--genis] [--onizleme <png>]')
    boy, kalinti, z = kes(arg[0], arg[1], profil, genis, on)
    print(f'{os.path.basename(arg[1])}: {boy[0]}×{boy[1]} · yapay zekâ kesimi · zemin {z}')
    print(f'KALINTI {kalinti}')
