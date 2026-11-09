"""A6 (büro) penceresindeki vapuru arka plandan ayırır — oyunun resmine YAZMAZ, bellekte çalışır.
ayir(arka RGB 900x1200) -> (temiz arka, vapur RGBA yaması, yamanın sol üst köşesi, cam maskesi L)
  - vapur: dikdörtgen içinde "su mavisi olmayan" pikseller + iki direk; kenarı yumuşak
  - temiz arka: vapurun yeri OpenCV inpaint (Telea) ile suyla doldurulur
  - orta dikmenin arkasında kalan vapur şeridi soldaki sütunlarla tamamlanır (vapur kayınca görünür)
  - cam maskesi: vapurun yalnız camdan görünmesi için (dikmeler önde kalır)
Koordinatlar orijinal 900x1200 pikselde. Deneme: python3 vapur.py <çıktı klasörü>
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import cv2

KUTU = (434, 368, 580, 414)                      # vapur + köpük izi (x0, y0, x1, y1)
DIREK = [(484, 342, 492, 372), (525, 342, 533, 372)]
DIKME = (501, 519)                               # orta dikme (x0, x1) — vapurun önünde
CAMLAR = [(335, 290, 401, 433), (415, 290, 501, 433), (519, 290, 582, 433)]   # pencere camları

def ayir(arka):
    a = np.asarray(arka).astype(np.int16)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    x0, y0, x1, y1 = KUTU
    m = np.zeros(a.shape[:2], np.uint8)
    su = (b - r > 45) & (b > 120) & (np.abs(a[..., :3] - a[..., :3].mean(2, keepdims=True)).max(2) > 30)
    kutu = np.zeros_like(m, bool); kutu[y0:y1, x0:x1] = True
    m[kutu & ~su] = 255
    for dx0, dy0, dx1, dy1 in DIREK: m[dy0:dy1, dx0:dx1] = 255
    m[:, DIKME[0]:DIKME[1]] = 0                  # dikme vapurun parçası değil
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
    # temiz arka: su bandındaki vapur pikselleri, hemen altındaki temiz su sıralarıyla (aynı sütun) doldurulur;
    # direkler (kıyının önünde) küçük olduğu için inpaint. Çerçeve ve dikme hiç ellenmez.
    sil = cv2.dilate(m, np.ones((5, 5), np.uint8)); sil[:, DIKME[0]:DIKME[1]] = 0
    cam_m = np.zeros_like(m, bool)
    for cx0, cy0, cx1, cy1 in CAMLAR: cam_m[cy0:cy1, cx0 + 1:cx1 - 1] = True
    sil[~cam_m] = 0
    temiz = np.asarray(arka).copy()
    # su kaynağı: orta camın alt kısmı (köpüksüz, teknesiz) — satır ve sütun kiremit gibi döşenir
    SX0, SX1 = CAMLAR[1][0] + 2, CAMLAR[1][2] - 2; SY0, SY1 = y1 + 6, CAMLAR[1][3] - 2
    for y in range(y0 - 3, y1 + 3):
        xs = np.where(sil[y] > 0)[0]
        if len(xs):   # aynalı döşeme: ek yeri yok
            n = SX1 - SX0; k = (xs - SX0) % (2 * n); k = np.where(k < n, k, 2 * n - 1 - k)
            temiz[y, xs] = np.asarray(arka)[SY0 + (y - y0 + 3) % (SY1 - SY0), SX0 + k]
    temiz = np.where(sil[..., None] > 0, cv2.GaussianBlur(temiz, (9, 1), 0), temiz)   # yatay hafif yumuşatma
    yumu = cv2.GaussianBlur(sil, (9, 9), 0).astype(np.float32)[..., None] / 255   # dolgu kenarı yumuşak
    temiz = (temiz * yumu + np.asarray(arka) * (1 - yumu)).astype(np.uint8)
    direk = np.zeros_like(m)
    for dx0, dy0, dx1, dy1 in DIREK: direk[dy0 - 2:dy1, dx0 - 2:dx1 + 2] = 255
    temiz = cv2.inpaint(temiz, direk, 3, cv2.INPAINT_TELEA)
    # vapur yaması: dikmenin solu + sağı birleştirilir, dikme genişliği kadar yatayda esnetilir
    # (dikmenin arkası hiç görülmedi; kopya yerine esnetme — hiçbir ayrıntı iki kez görünmez)
    px0, py0, px1, py1 = x0 - 2, DIREK[0][1] - 2, x1 + 2, y1 + 2
    rgba = np.dstack([np.asarray(arka), m])
    birlesik = np.concatenate([rgba[py0:py1, px0:DIKME[0]], rgba[py0:py1, DIKME[1]:px1]], axis=1)
    hedef_w = px1 - px0
    birlesik = cv2.resize(birlesik, (hedef_w, py1 - py0), interpolation=cv2.INTER_AREA)
    yama, alfa = birlesik[..., :3], birlesik[..., 3].copy()
    alfa = cv2.GaussianBlur(alfa, (3, 3), 0)
    vap = Image.fromarray(np.dstack([yama, alfa]), 'RGBA')
    cam = Image.new('L', arka.size, 0); d = ImageDraw.Draw(cam)
    for c in CAMLAR: d.rectangle(c, fill=255)
    return Image.fromarray(temiz), vap, (px0, py0), cam.filter(ImageFilter.GaussianBlur(.8))

if __name__ == '__main__':
    import sys, os
    out = sys.argv[1]
    KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    arka = Image.open(os.path.join(KOK, 'kaynak/yeni_gorsel/arka_a6_buro_gunduz.webp')).convert('RGB')
    temiz, vap, (px, py), cam = ayir(arka)
    kirp = (300, 300, 600, 440)
    def b(im): return im.crop(kirp).resize((1200, 560), Image.LANCZOS)
    on = []
    for d in (0, 30, 60):    # vapur 0 / 30 / 60 px sola kaymış
        k = temiz.copy().convert('RGBA'); ust = Image.new('RGBA', arka.size, (0, 0, 0, 0)); ust.paste(vap, (px - d, py))
        ust.putalpha(Image.fromarray((np.asarray(ust.getchannel('A')).astype(np.float32) * np.asarray(cam) / 255).astype(np.uint8)))
        k.alpha_composite(ust); on.append(b(k.convert('RGB')))
    s = Image.new('RGB', (1200, 560 * 4)); s.paste(b(arka), (0, 0))
    for i, im in enumerate(on): s.paste(im, (0, 560 * (i + 1)))
    s.save(f'{out}/vapur_deneme.png'); print('yazıldı')
