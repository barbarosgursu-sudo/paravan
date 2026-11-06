# ARAÇ (test değil): yeşil zeminli figürün saç halesini temizler (5_gorsel_sistemi.md → F "Hale temizliği").
# Kesimden SONRA kalan yeşil, dağınık saç telleri arasındaki kapalı ceplerdir: arac_kes.js'nin kenardan taşkın
# doldurması onlara ulaşamaz. Bu araç kesilmiş figürü ve aynı resmin KAYNAĞINI (yeşil zeminli png) alır; baş
# bölgesinde kaynakta yeşil-baskın olan her pikseli (renk anahtarı) saydamlaştırır, yarı yeşilleri yumuşak kenarla
# karıştırıp yeşil parlamasını bastırır. Ten, kızıl/kahve saç, krem eşarp, susam yeşil-baskın değil → korunur.
#
# Kullanım: python arac_hale.py <kaynak.png> <kesilmis.webp> [--profil peri|cengo|konuk] [--genis] [--bas 0.5] [--onizleme <dosya.png>]
#   Kesim çerçevesi arac_kes.js profilindeki x0 ile aynı olmalı (peri 120, öbürleri 0–10; --genis 0).
#   --bas: kaynağın üst kısmının bu oranı (varsayılan 0.5) = baş bölgesi; temizlik yalnız orada.
# Yeşil olmayan zemin (açık bej) için değil: bej zeminli figürde (Cengo haki, Kenan, Sedat) kullanma.
import sys, os
import numpy as np
from PIL import Image

X0 = {'peri': 120, 'cengo': 10, 'konuk': 0}
ESIK = float(os.environ.get('HALE_ESIK', 2))

def anahtar(src):
    r, g, b = src[..., 0], src[..., 1], src[..., 2]
    fark = g - np.maximum(r, b)          # yeşil baskınlığı
    # 0 → tam opak (yeşil yok), 1 → tam saydam (zemin). ESIK..ESIK+28 arası yumuşak geçiş.
    # İnce saç teli kenarı zeminle karışık (G yalnız ~5–15 baskın); eşik düşük tutulur.
    return np.clip((fark - ESIK) / 28.0, 0, 1), fark

def temizle(kaynak, kesik, profil='peri', genis=False, bas=0.5, onizleme=None):
    with Image.open(kaynak) as f: src = np.array(f.convert('RGB')).astype(np.float32)
    with Image.open(kesik) as f: cut = np.array(f.convert('RGBA')).astype(np.float32)
    H, W = src.shape[:2]
    x0 = 0 if genis else X0.get(profil, 0)
    ch, cw = cut.shape[:2]
    sc = ch / H
    # kaynağın kesim çerçevesini kesik boyutuna indir
    w = int(round(cw / sc))
    kare = Image.fromarray(src[:, x0:x0 + w].astype(np.uint8)).resize((cw, ch), Image.LANCZOS)
    s = np.array(kare).astype(np.float32)
    k, fark = anahtar(s)
    ust = int(ch * bas)
    k[ust:, :] = 0
    a = cut[..., 3] / 255.0
    yeni_a = np.minimum(a, 1 - k)
    # arac_kes.js kenarı 160/255 yarı saydam bırakır; bunlar baş bölgesinde ve kaynakta hafif yeşilse zemin
    # karışımıdır (saç teli arası) → sil.
    kenar = (np.arange(ch)[:, None] < ust) & (a < 0.7) & (fark > 0)
    yeni_a[kenar] = 0
    # yeşil parlamayı bastır (despill): baş bölgesinde kesik figürün KENDİ renginde G, max(R,B)'yi aşamaz.
    # Saç, ten, krem eşarp zaten G ≤ max(R,B); yalnız zeminle karışmış yeşilimsi pikseller değişir.
    rgb = cut[..., :3]
    bas_bolge = np.arange(ch)[:, None] < ust
    mx = np.maximum(rgb[..., 0], rgb[..., 2])
    rgb[..., 1] = np.where(bas_bolge, np.minimum(rgb[..., 1], mx), rgb[..., 1])
    # Saç teli + zemin karışımı (zeytin/gri sis): kaynakta hafif yeşil, R≈G olan pikseller. Saydamlık
    # yeşil payı kadar düşürülür; rengi saçın sıcak tonuna (R yukarı, B aşağı) kaydırılır.
    karisik = bas_bolge & (fark > -6) & (yeni_a > 0)
    pay = np.clip((fark + 6) / 30.0, 0, 1)
    yeni_a = np.where(karisik, yeni_a * (1 - pay), yeni_a)
    rgb[..., 0] = np.where(karisik, np.minimum(255, rgb[..., 0] * (1 + 0.35 * pay)), rgb[..., 0])
    rgb[..., 2] = np.where(karisik, rgb[..., 2] * (1 - 0.3 * pay), rgb[..., 2])
    cut[..., 3] = (yeni_a * 255).round()
    out = Image.fromarray(cut.clip(0, 255).astype(np.uint8), 'RGBA')
    out.save(kesik, 'WEBP', quality=80, method=6)
    if onizleme:
        z = Image.new('RGBA', out.size, (192, 48, 128, 255)); z.alpha_composite(out)
        z.crop((0, 0, cw, ust)).save(onizleme)
    return int(((a > 0.5) & (yeni_a <= 0.5)).sum())

if __name__ == '__main__':
    arg = sys.argv[1:]
    def al(ad, v=None):
        if ad in arg: i = arg.index(ad); val = arg[i + 1]; del arg[i:i + 2]; return val
        return v
    profil = al('--profil', 'peri'); bas = float(al('--bas', 0.5)); on = al('--onizleme')
    genis = '--genis' in arg
    if genis: arg.remove('--genis')
    kaynak, kesik = arg
    n = temizle(kaynak, kesik, profil, genis, bas, on)
    print(f'{os.path.basename(kesik)}: {n} px saydamlaştı')
