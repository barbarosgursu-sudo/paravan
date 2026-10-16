# ARAÇ (test değil): künye portresi — figürün baş-omuz karesini koyu zeminde 240×240 keser.
# Kullanım: python3 arac_portre.py yeni_gorsel/figur_X_normal.webp yeni_gorsel/portre/portre_X.webp [...]
# Sonra gorseller.json → dosyalar'a "portre_X" ekle. test_yeni_v2.js eksik portreyi yakalar.
import sys
from PIL import Image
import numpy as np
def portre(src, oran=0.5):
    f=Image.open(src).convert('RGBA'); a=np.array(f)[...,3]
    ys,xs=np.where(a>40); top=ys.min()
    side=int(f.width*oran)
    band=a[top:top+int(side*0.35)]; bx=np.where(band.max(0)>40)[0]; cx=(bx.min()+bx.max())//2
    x0=max(0,min(f.width-side,cx-side//2)); y0=max(0,top-int(side*0.04))
    c=f.crop((x0,y0,x0+side,y0+side))
    bg=Image.new('RGBA',c.size,(58,46,40,255)); bg.alpha_composite(c)
    return bg.convert('RGB').resize((240,240),Image.LANCZOS)
if __name__=='__main__':
    for src,out in zip(sys.argv[1::2],sys.argv[2::2]): portre(src).save(out,quality=85)
