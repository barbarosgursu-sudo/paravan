# ARAÇ (test değil): yeni resmin çizim tarzı onaylı eski tarza uyuyor mu? (13 Kasım 2026, sahibinin isteği: "Benim gözle görüp
# onaylamamdan önce bu işin yazılımsal olarak yapılması gerekiyor.")
#
# ÇAPA (sahibinin seçimi, 13 Kasım 2026):
#   peri, cengo  → uretim/referanslar/tarz_capa/{peri,cengo}/ (LoRA eğitim resimlerinin küçültülmüş kopyaları, C:\lora'dan)
#   konuk        → Vaka 1–3: Gizem, Müjgan, Defne (kadın), Tolga, Kenan, Ferruh (erkek) — kaynak/yeni_gorsel/figur_*.webp
#   mekan        → Vaka 1–3'ün bütün arka planları (arka_*.webp)
#   kare         → Vaka 1–3'ün bütün ara kare ve detayları (ara_*, detay_*) — sahibi ayrıca seçmedi, hepsi
#
# ÖLÇÜ (CLIP ViT-B-32): "tarz puanı" = resmin "boyalı, sıcak ışıklı, dokulu" tarifine yakınlığı eksi "kalın konturlu düz çizim /
# katalog çizimi" tarifine yakınlığı. Sınavda kaymış 8 Cengo resminin hepsi eksi, onaylı eskilerin ve tarzı tutan V6 resimlerinin
# hepsi artı çıktı (13 Kasım). Eşik: 0 altı KALDI, 0–0,02 ŞÜPHELİ (SUPHE_SINIRI). Çapa grubu en yakın örnekleri göstermek içindir.
# Ayrıca Peri ve Cengo'da yüz, LoRA yüzlerine benzerlikle bakılır (yalnız uyarı). Tam boy kartta puan yüz kırpığından.
#
# BİLİNEN KÖR NOKTA: hafif "soluk / fazla gerçekçi" kayma (eski Eylül G6) bu puanla yakalanmadı → sahibinin gözü hâlâ son karardır.
#
# Kullanım (kaynak/ içinde):
#   python arac_tarz.py --uretim v6 G27 G28        uretim/v6/{uretilen,onayli}/G<n>.png; tür ve kişi istemden okunur
#   python arac_tarz.py <resim.png> --tur figur|kart|mekan|kare [--kim peri|cengo]
#   python arac_tarz.py --sinav                     kaymışlar KALMALI, eskiler GEÇMELİ; çıkış 0 = sınav geçti
#   python arac_tarz.py --capa-yenile               çapa önbelleğini baştan hesapla
# Çıkış kodu: 0 hepsi GEÇTİ · 1 en az biri ŞÜPHELİ · 2 en az biri KALDI. Görüntü: YENI_UI/tarz/<ad>.png (çapanın en yakın 4'üyle).
import sys, os, re, json, glob, argparse, hashlib
import numpy as np
from PIL import Image, ImageFilter

KOK = os.path.dirname(os.path.abspath(__file__))
DEPO = os.path.dirname(KOK)
YG = os.path.join(KOK, "yeni_gorsel")
TC = os.path.join(DEPO, "uretim", "referanslar", "tarz_capa")
CIKTI = os.path.join(KOK, "YENI_UI", "tarz")
GRI = (128, 128, 128)
KONUK = ("gizem", "mujgan", "defne", "tolga", "kenan", "ferruh")

POZ = ["a painterly digital painting with soft brush strokes, warm golden light and textured paint",
       "a semi-realistic painted illustration with soft shading and warm cinematic lighting"]
NEG = ["a flat vector illustration with thick black outlines and cel shading, clean line art, catalog fashion drawing",
       "a comic book drawing with bold ink outlines and flat colors"]

# ---------------------------------------------------------------- çapa listesi
def capa_listesi():
    t = {"peri": sorted(glob.glob(os.path.join(TC, "peri", "*.webp"))),
         "cengo": sorted(glob.glob(os.path.join(TC, "cengo", "*.webp"))),
         "konuk": sorted(f for k in KONUK for f in glob.glob(os.path.join(YG, f"figur_{k}_*.webp"))),
         "mekan": sorted(glob.glob(os.path.join(YG, "arka_*.webp"))),
         "kare": sorted(glob.glob(os.path.join(YG, "ara_*.webp")) + glob.glob(os.path.join(YG, "detay_*.webp")))}
    return t

# ---------------------------------------------------------------- ön işlem
def maske_ve_rgb(im):
    """Figür: saydam kanal varsa onu, yoksa kenar renginden zemini ayır; zemini nötr griye boya."""
    if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
        im = im.convert("RGBA")
        a = np.asarray(im)[..., 3] > 128
        rgb = np.asarray(im.convert("RGB")).astype(np.float32)
    else:
        rgb = np.asarray(im.convert("RGB")).astype(np.float32)
        kenar = np.concatenate([rgb[:8].reshape(-1, 3), rgb[-8:].reshape(-1, 3), rgb[:, :8].reshape(-1, 3), rgb[:, -8:].reshape(-1, 3)])
        bg = np.median(kenar, axis=0)
        a = np.abs(rgb - bg).sum(axis=2) > 45
    a = np.asarray(Image.fromarray(a.astype(np.uint8) * 255).filter(ImageFilter.MedianFilter(5))) > 128
    out = rgb.copy()
    out[~a] = GRI
    return out, a

def kutu(a):
    ys, xs = np.where(a)
    if len(ys) == 0:
        return 0, 0, a.shape[1], a.shape[0]
    return xs.min(), ys.min(), xs.max() + 1, ys.max() + 1

def kare_kirp(rgb, x0, y0, x1, y1):
    s = max(x1 - x0, y1 - y0)
    cx, cy = (x0 + x1) // 2, (y0 + y1) // 2
    X0, Y0 = cx - s // 2, cy - s // 2
    tuval = np.full((s, s, 3), 128, np.float32)
    sx0, sy0 = max(X0, 0), max(Y0, 0)
    sx1, sy1 = min(X0 + s, rgb.shape[1]), min(Y0 + s, rgb.shape[0])
    tuval[sy0 - Y0:sy1 - Y0, sx0 - X0:sx1 - X0] = rgb[sy0:sy1, sx0:sx1]
    return Image.fromarray(tuval.clip(0, 255).astype(np.uint8))

def parcalar(yol, tur):
    """figur/kart: {'govde','yuz'} (gri zeminde); mekan/kare ve LoRA çapası: {'tum'}."""
    im = Image.open(yol)
    if tur in ("mekan", "kare", "lora"):
        return {"tum": im.convert("RGB")}
    rgb, a = maske_ve_rgb(im)
    x0, y0, x1, y1 = kutu(a)
    hb = max(int((y1 - y0) * (0.12 if tur == "kart" else 0.21)), 24)
    xs = np.where(a[y0:y0 + hb].any(axis=0))[0]
    bx0, bx1 = (x0 + xs.min(), x0 + xs.max() + 1) if len(xs) else (x0, x1)
    return {"govde": kare_kirp(rgb, x0, y0, x1, y1), "yuz": kare_kirp(rgb, bx0, y0, bx1, y0 + hb)}

def lora_yuz(yol):
    im = Image.open(yol).convert("RGB"); w, h = im.size
    return im.crop((int(w * .2), 0, int(w * .8), int(h * .6)))

# ---------------------------------------------------------------- CLIP
_M = {}
def clip():
    if not _M:
        import torch, open_clip
        m, _, pre = open_clip.create_model_and_transforms("ViT-B-32", pretrained="laion2b_s34b_b79k")
        m.eval(); tok = open_clip.get_tokenizer("ViT-B-32")
        def metin(l):
            with torch.no_grad():
                v = m.encode_text(tok(l)); v = v / v.norm(dim=-1, keepdim=True)
            v = v.mean(0); return (v / v.norm()).numpy()
        _M.update(m=m, pre=pre, poz=metin(POZ), neg=metin(NEG))
    return _M

def gom(im):
    import torch
    c = clip()
    with torch.no_grad():
        v = c["m"].encode_image(c["pre"](im)[None])[0]
    return (v / v.norm()).numpy()

def tarz_puani(v):
    c = clip(); return float(v @ c["poz"] - v @ c["neg"])

# ---------------------------------------------------------------- çapa önbelleği
def capa_hesapla(yenile=False):
    liste = capa_listesi()
    imza = hashlib.md5(json.dumps({k: [os.path.basename(f) for f in v] for k, v in liste.items()} | {"poz": POZ, "neg": NEG}).encode()).hexdigest()[:10]
    yol = os.path.join(CIKTI, f"capa_clip_{imza}.npz")
    if os.path.exists(yol) and not yenile:
        return np.load(yol, allow_pickle=True)["capa"].item()
    os.makedirs(CIKTI, exist_ok=True)
    capa = {}
    for grup, dosyalar in liste.items():
        tur = "lora" if grup in ("peri", "cengo") else ("figur" if grup == "konuk" else grup)
        ana, yuz = [], []
        for f in dosyalar:
            p = parcalar(f, tur)
            ana.append(gom(p["govde"] if "govde" in p else p["tum"]))
            yuz.append(gom(lora_yuz(f)) if tur == "lora" else (gom(p["yuz"]) if "yuz" in p else None))
        puan = [tarz_puani(v) for v in ana]
        capa[grup] = {"dosya": dosyalar, "ana": np.array(ana), "puan": np.array(puan),
                      "yuz": np.array(yuz) if yuz and yuz[0] is not None else None}
        print(f"  çapa {grup}: {len(dosyalar)} resim · tarz puanı en düşük {min(puan):+.3f}, medyan {np.median(puan):+.3f}")
    np.savez(yol, capa=np.array(capa, dtype=object))
    return capa

def knn(A, v, k=5, haric=None):
    s = A @ v
    if haric is not None:
        s = s.copy(); s[haric] = -9
    return float(1 - np.sort(s)[-k:].mean())

# ---------------------------------------------------------------- değerlendirme
# Eşikler (13 Kasım sınavı): kaymışların hepsi ≤ 0,000; Vaka 1–3'ün ve tarzı tutan V6'nın hepsi ≥ +0,022; LoRA çapasının en
# düşüğü +0,011. Çapanın kendi en düşüğünü sınır yapmak fazla sıkıydı (iyi bir konuk ve iyi bir mekân şüpheli çıktı).
SUPHE_SINIRI = 0.02   # 0 altı KALDI · 0–0,02 ŞÜPHELİ · üstü GEÇTİ

def grup_sec(tur, kim):
    if tur in ("mekan", "kare"):
        return tur
    if kim in ("peri", "cengo"):
        return kim
    return "konuk"

def degerlendir(yol, tur, kim, capa):
    p = parcalar(yol, tur)
    grup = grup_sec(tur, kim)
    cg = capa[grup]
    satir = {"dosya": yol, "tur": tur, "kim": kim, "grup": grup, "uyari": []}
    if tur == "kart":
        # Tam boy kartın gövdesi doğası gereği "katalog" gibi durur; kartta tarz puanı YÜZ kırpığından okunur
        # (sınav: kaymış eski G2 −0,002, yeni kartlar +0,054).
        s = tarz_puani(gom(p["yuz"]))
        satir["olcu"] = f"yüz tarz puanı {s:+.3f} (kalma < 0, şüpheli < {SUPHE_SINIRI:.2f})"
        satir["karar"] = "KALDI" if s < 0 else ("ŞÜPHELİ" if s < SUPHE_SINIRI else "GEÇTİ")
        satir["ana_v"] = gom(p["govde"])
        return satir
    v = gom(p["govde"] if "govde" in p else p["tum"])
    s = tarz_puani(v)
    satir["olcu"] = f"tarz puanı {s:+.3f} (çapa '{grup}' en düşük {cg['puan'].min():+.3f}, medyan {np.median(cg['puan']):+.3f})"
    if s < 0:
        satir["karar"] = "KALDI"
    elif s < SUPHE_SINIRI:
        satir["karar"] = "ŞÜPHELİ"
    else:
        satir["karar"] = "GEÇTİ"
    if kim in ("peri", "cengo") and "yuz" in p:
        A = capa[kim]["yuz"]
        ic = [knn(A, A[i], haric=i) for i in range(len(A))]
        d = knn(A, gom(p["yuz"]))
        if d > max(ic):
            satir["uyari"].append(f"yüz {kim} LoRA yüzlerinden uzak: {d:.3f} (çapa içi en uç {max(ic):.3f}) — gözle bak")
    satir["ana_v"] = v
    return satir

def yan_yana(satir, capa):
    os.makedirs(CIKTI, exist_ok=True)
    cg = capa[satir["grup"]]
    en = np.argsort(-(cg["ana"] @ satir["ana_v"]))[:4]
    p = parcalar(satir["dosya"], satir["tur"])
    ilk = p["govde"] if "govde" in p else p["tum"]
    boy = (300, 300) if "govde" in p else (300, 400)
    def gri_zemin(f):
        im = Image.open(f)
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA"); z = Image.new("RGBA", im.size, GRI + (255,)); z.alpha_composite(im); im = z
        return im.convert("RGB")
    kareler = [ilk.resize(boy)] + [gri_zemin(cg["dosya"][i]).resize(boy) for i in en]
    W = sum(im.width for im in kareler) + 8 * (len(kareler) + 1)
    tuval = Image.new("RGB", (W, boy[1] + 16), (60, 60, 60))
    x = 8
    for i, im in enumerate(kareler):
        tuval.paste(im, (x, 8)); x += im.width + 8 + (16 if i == 0 else 0)
    ad = os.path.splitext(os.path.basename(satir["dosya"]))[0]
    yol = os.path.join(CIKTI, f"{ad}.png")
    tuval.save(yol)
    return yol

# ---------------------------------------------------------------- tür ve kişi: istemden
ADLAR = {"peri": "peri", "cengo": "cengo"}
def istemden(yol):
    m = re.search(r"uretim/(v\d+)/(?:uretilen|onayli|red)/(G\d+z?)", yol.replace("\\", "/"))
    if not m:
        return None, None
    ist = os.path.join(DEPO, "uretim", m.group(1), "prompts", m.group(2) + ".md")
    if not os.path.exists(ist):
        return None, None
    t = open(ist, encoding="utf-8").read()
    tl = re.search(r"^- tür: (.*)$", t, re.M).group(1)
    if tl.startswith("kıyafet kartı"): tur = "kart"
    elif tl.startswith("arka plan"): tur = "mekan"
    elif tl.startswith("figür"): tur = "figur"
    else: tur = "kare"
    an = re.search(r"anahtar: `([a-z_]+)\.", tl)
    kim = an.group(1) if an else None
    if tur == "kart":
        bas = t.splitlines()[0].lower()
        kim = "cengo" if "cengo" in bas else ("peri" if "peri" in bas else None)
    return tur, kim

def yaz(s):
    print(f"{s['karar']:8s} {os.path.basename(s['dosya'])} [{s['tur']}{'/' + s['kim'] if s['kim'] else ''} → çapa {s['grup']}] — {s['olcu']}")
    for u in s["uyari"]:
        print(f"           uyarı: {u}")

# ---------------------------------------------------------------- sınav
def sinav(capa):
    U = os.path.join(DEPO, "uretim")
    # Kaymış örnekler depoda (red/ GitHub'a gitmez; 14 Kasım 2026'da ortağın bilgisayarı için buraya alındı).
    TS = os.path.join(U, "referanslar", "tarz_sinav")
    kotu = [(os.path.join(TS, f"G{n}_stil.webp"), "figur", "cengo") for n in (18, 34, 35, 36, 37, 38, 39)]
    kotu += [(os.path.join(TS, "G2_stil.webp"), "kart", "cengo")]
    iyi = [(os.path.join(U, "v3", "onayli", f"G{n}.png"), "figur", k) for n, k in
           [(1, "peri"), (2, "peri"), (3, "peri"), (4, "cengo"), (5, "cengo"), (6, None), (7, None), (8, None), (9, None), (12, None), (13, None), (14, None)]]
    iyi += [(os.path.join(U, "v6", "onayli", f"G{n}.png"), "figur", k) for n, k in
            [(17, "peri"), (27, "peri"), (28, "peri"), (29, "peri"), (30, "peri"), (31, "peri"), (32, "peri"), (33, "peri"),
             (3, None), (4, None), (5, None), (7, None), (8, None), (9, None), (23, None), (24, None), (25, None)]]
    iyi += [(os.path.join(U, "v6", "onayli", f"G{n}.png"), "mekan", None) for n in range(10, 17)]
    iyi += [(os.path.join(U, "v3", "onayli", f"G{n}.png"), "mekan", None) for n in (10, 11, 15, 16, 17, 18)]
    bilinen = [(os.path.join(U, "v6", "red", "G6_stil.png"), "figur", None)]   # yalnız Barbaros'un bilgisayarında; yoksa atlanır
    sonuc = {}
    for ad, kume in (("KAYMIŞ (yakalanmalı)", kotu), ("İYİ (geçmeli)", iyi), ("BİLİNEN KÖR NOKTA (bilgi)", bilinen)):
        print(f"— {ad} —")
        sonuc[ad] = []
        for f, t, k in kume:
            if os.path.exists(f):
                s = degerlendir(f, t, k, capa); yaz(s); sonuc[ad].append(s)
    # çapanın kendisi: her çapa resmi kendi grubunun sınırını geçmeli (birini dışarıda bırak)
    capa_kalan = 0
    for g in ("peri", "cengo", "konuk", "mekan", "kare"):
        P = capa[g]["puan"]
        for i in range(len(P)):
            if P[i] < 0:
                capa_kalan += 1
    k1 = sonuc["KAYMIŞ (yakalanmalı)"]; k2 = sonuc["İYİ (geçmeli)"]
    yak = sum(s["karar"] != "GEÇTİ" for s in k1); gec = sum(s["karar"] == "GEÇTİ" for s in k2)
    print(f"\nKaymış: {yak}/{len(k1)} yakalandı · İyi: {gec}/{len(k2)} geçti · Çapada eksi puanlı resim: {capa_kalan}")
    ok = yak == len(k1) and gec == len(k2) and capa_kalan == 0
    print("SINAV GEÇTİ" if ok else "SINAV KALDI")
    return 0 if ok else 1

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("resim", nargs="*")
    ap.add_argument("--tur"); ap.add_argument("--kim"); ap.add_argument("--uretim")
    ap.add_argument("--sinav", action="store_true"); ap.add_argument("--capa-yenile", action="store_true")
    a = ap.parse_args()
    capa = capa_hesapla(a.capa_yenile)
    if a.sinav:
        sys.exit(sinav(capa))
    yollar = []
    if a.uretim:
        for g in a.resim:
            g = g if g.startswith("G") else "G" + g
            for kl in ("uretilen", "onayli"):
                f = os.path.join(DEPO, "uretim", a.uretim, kl, g + ".png")
                if os.path.exists(f):
                    yollar.append(f); break
            else:
                print("bulunamadı:", g)
    else:
        yollar = a.resim
    en_kotu = 0
    for f in yollar:
        tur, kim = istemden(f)
        tur, kim = a.tur or tur or "figur", a.kim or kim
        s = degerlendir(f, tur, kim, capa)
        yaz(s)
        print("           görüntü:", yan_yana(s, capa))
        en_kotu = max(en_kotu, {"GEÇTİ": 0, "ŞÜPHELİ": 1, "KALDI": 2}[s["karar"]])
    sys.exit(en_kotu)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    import warnings; warnings.filterwarnings("ignore")
    main()
