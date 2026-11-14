# ARAÇ (test değil): yeni resimdeki yüz gerçekten Peri / Cengo / Gizem mi? (14 Kasım 2026, sahibinin isteği: "ilerleyen
# vakalarda Peri ve Cengo'nun yüzü bozulabilir; bunu nasıl engelleyeceğiz?")
#
# Tarz aracının (arac_tarz.py) kardeşi: o ÇİZİM TARZINA bakar, bu KİMLİĞE. İkisi de gözden önce koşar (uretim/CLAUDE.md →
# Denetim 0). CLIP kimliği ayıramadı (14 Kasım ölçümü: kaymış Cengo yüzleri onaylılarla iç içe); burada yüz tanıma için
# eğitilmiş model var: OpenCV YuNet (yüzü bulur) + SFace (yüz imzası). Modeller ilk çalıştırmada OpenCV'nin resmî deposundan
# uretim/referanslar/yuz_model/'e iner (depoya girmez).
#
# ÇAPA (sabit liste; V6 ve sonrasının onaylıları BİLEREK çapada değil — yoksa kayan bir yüz onaylanınca çapa da kayar):
#   peri, cengo → LoRA eğitim resimleri (uretim/referanslar/tarz_capa/) + oyundaki sprite'lar + Vaka 3'ün onaylı figürleri
#   gizem       → oyundaki figur_gizem_* + Vaka 3'ün onaylı Gizem figürleri
# Sonradan tekrar çıkan bir karakter olursa (sahibi, 14 Kasım): önceki vakadaki resimleri çapa olarak KARAKTER tablosuna eklenir.
#
# ÖLÇÜ: resimdeki en büyük yüzün imzası ile çapanın en yakın 5 imzasının ortalama benzerliği (kosinüs).
# Sınav (14 Kasım): çapa dışındaki V6 onaylılarının en düşüğü 0,736 (Peri G30); yabancıların (öbür karakterler ve bütün
# konuklar) en yükseği Peri'ye 0,653 · Cengo'ya 0,634 · Gizem'e 0,657. Eşikler bu boşluğa kondu.
#   KALDI   : benzerlik < 0,66, ya da yüz başka bir çapalı karaktere daha yakın, ya da yüz bulunamadı
#   ŞÜPHELİ : 0,66–0,70
#   GEÇTİ   : ≥ 0,70
# KARE (çok kişi, küçük yüz): kapı DEĞİL. Onaylı Vaka 3 karelerinde puanlar 0,4–0,8 arasında dağınık; araç yalnız bulduğu yüzleri
# ve en yakın karakteri BİLGİ olarak basar, karar gözde (A.2).
# BİLİNEN SINIR: uç ifadeler puanı düşürür — eski oyun sprite'larından "utanmış" Peri'ler (gözler kapalı, yüz buruşuk, elle ya da
# kremle kısmen kapalı yüz) 0,62–0,67 çıkıyor. Böyle bir ifade istenen resim ŞÜPHELİ/KALDI alabilir → gözle bakılır; yüz Peri'yse
# sahibine "araç uç ifade yüzünden düşük verdi" diye sorulur, kendiliğinden onaylanmaz.
# Tarzı kaymış Cengo seti (tarz_sinav/) bu araçta çoğunlukla GEÇER — o kayma kimlikte değil tarzdaydı; onu tarz aracı yakalar.
#
# Kullanım (kaynak/ içinde):
#   python arac_yuz.py --uretim v6 G27 G28       uretim/v6/{uretilen,onayli}/G<n>.png; tür ve kişi istemden (arac_tarz.istemden)
#   python arac_yuz.py <resim> --kim peri|cengo|gizem [--tur figur|kart|kare]
#   python arac_yuz.py --sinav                    çıkış 0 = sınav geçti
#   python arac_yuz.py --capa-yenile
# Çıkış: 0 GEÇTİ (ya da denetlenecek karakter yok) · 1 ŞÜPHELİ · 2 KALDI. İlk satır döngü kaydına gider.
import sys, os, re, glob, json, hashlib, argparse, urllib.request
import numpy as np
from PIL import Image

KOK = os.path.dirname(os.path.abspath(__file__))
DEPO = os.path.dirname(KOK)
YG = os.path.join(KOK, "yeni_gorsel")
U = os.path.join(DEPO, "uretim")
MODEL = os.path.join(U, "referanslar", "yuz_model")
CIKTI = os.path.join(KOK, "YENI_UI", "yuz")
MODELLER = {
    "face_detection_yunet_2023mar.onnx": "https://github.com/opencv/opencv_zoo/raw/main/models/face_detection_yunet/face_detection_yunet_2023mar.onnx",
    "face_recognition_sface_2021dec.onnx": "https://github.com/opencv/opencv_zoo/raw/main/models/face_recognition_sface/face_recognition_sface_2021dec.onnx",
}
KALMA, GECME = 0.66, 0.70

def v3_figurleri(kim):
    sys.path.insert(0, KOK)
    from arac_tarz import istemden
    out = []
    for f in glob.glob(os.path.join(U, "v3", "onayli", "G*.png")):
        tur, k = istemden(f)
        if tur == "figur" and k == kim:
            out.append(f)
    return out

def capa_listesi():
    t = {}
    for k in ("peri", "cengo"):
        t[k] = sorted(glob.glob(os.path.join(U, "referanslar", "tarz_capa", k, "*.webp"))
                      + glob.glob(os.path.join(YG, "sprite", f"{k}_*.webp")) + v3_figurleri(k))
    t["gizem"] = sorted(glob.glob(os.path.join(YG, "figur_gizem_*.webp")) + v3_figurleri("gizem"))
    return t

# ---------------------------------------------------------------- model
_M = {}
def model():
    if not _M:
        import cv2
        os.makedirs(MODEL, exist_ok=True)
        for ad, url in MODELLER.items():
            yol = os.path.join(MODEL, ad)
            if not os.path.exists(yol):
                print(f"  model indiriliyor: {ad}", file=sys.stderr)
                urllib.request.urlretrieve(url, yol)
        cv2.setLogLevel(0) if hasattr(cv2, "setLogLevel") else None
        _M["cv2"] = cv2
        _M["det"] = cv2.FaceDetectorYN.create(os.path.join(MODEL, "face_detection_yunet_2023mar.onnx"), "", (320, 320), 0.6, 0.3, 5000)
        _M["rec"] = cv2.FaceRecognizerSF.create(os.path.join(MODEL, "face_recognition_sface_2021dec.onnx"), "")
    return _M

def yuzler(yol):
    """[(alan, imza, kutu)] büyükten küçüğe. Saydam zemin griye basılır; resim uzun kenarı 1600 px'e getirilir."""
    m = model(); cv2 = m["cv2"]
    im = Image.open(yol)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA"); z = Image.new("RGBA", im.size, (128, 128, 128, 255)); z.alpha_composite(im); im = z
    img = cv2.cvtColor(np.asarray(im.convert("RGB")), cv2.COLOR_RGB2BGR)
    h, w = img.shape[:2]; s = 1600 / max(h, w)
    img = cv2.resize(img, (int(w * s), int(h * s)))
    m["det"].setInputSize((img.shape[1], img.shape[0]))
    _, fs = m["det"].detect(img)
    out = []
    for fc in (fs if fs is not None else []):
        v = m["rec"].feature(m["rec"].alignCrop(img, fc)).flatten()
        out.append((float(fc[2] * fc[3]), v / np.linalg.norm(v), [int(x / s) for x in fc[:4]]))
    return sorted(out, key=lambda x: -x[0])

# ---------------------------------------------------------------- çapa
def capa_hesapla(yenile=False):
    liste = capa_listesi()
    imza = hashlib.md5(json.dumps({k: [os.path.relpath(f, DEPO) for f in v] for k, v in liste.items()}).encode()).hexdigest()[:10]
    yol = os.path.join(CIKTI, f"capa_yuz_{imza}.npz")
    if os.path.exists(yol) and not yenile:
        return np.load(yol, allow_pickle=True)["capa"].item()
    os.makedirs(CIKTI, exist_ok=True)
    capa = {}
    for k, dosyalar in liste.items():
        V, D = [], []
        for f in dosyalar:
            y = yuzler(f)
            if y:
                V.append(y[0][1]); D.append(f)
            else:
                print(f"  çapa {k}: yüz bulunamadı, atlandı: {os.path.relpath(f, DEPO)}", file=sys.stderr)
        capa[k] = {"dosya": D, "v": np.array(V)}
        print(f"  çapa {k}: {len(V)} yüz", file=sys.stderr)
    np.savez(yol, capa=np.array(capa, dtype=object))
    return capa

def benzerlik(A, v, haric=None, k=5):
    s = A @ v
    if haric is not None:
        s = np.delete(s, haric)
    return float(np.sort(s)[-k:].mean())

# ---------------------------------------------------------------- değerlendirme
def degerlendir(yol, tur, kim, capa, haric=None):
    """haric: {karakter: çapa sırası} — sınavda resim çapadaysa kendisi sayılmaz."""
    haric = haric or {}
    y = yuzler(yol)
    s = {"dosya": yol, "tur": tur, "kim": kim}
    if tur == "kare":
        parca = []
        for _, v, _k in y[:6]:
            b = {c: benzerlik(capa[c]["v"], v) for c in capa}
            en = max(b, key=b.get); parca.append(f"{en} {b[en]:.2f}")
        s["karar"] = "BİLGİ"
        s["olcu"] = f"{len(y)} yüz — " + (", ".join(parca) or "yok") + " (karede kapı değil, göz karar verir)"
        return s
    if not y:
        s["karar"] = "KALDI"; s["olcu"] = "yüz bulunamadı (yüz kapalı, profil ya da çok küçük olabilir — gözle bak)"
        return s
    v = y[0][1]
    b = {c: benzerlik(capa[c]["v"], v, haric.get(c)) for c in capa}
    p = b[kim]; en = max(b, key=b.get)
    oteki = ", ".join(f"{c} {b[c]:.3f}" for c in b if c != kim)
    s["olcu"] = f"benzerlik {p:.3f} ({kim} çapası; kalma < {KALMA}, geçme ≥ {GECME}; öbür çapalar: {oteki})"
    if en != kim:
        s["karar"] = "KALDI"; s["olcu"] += f" — yüz daha çok {en} çapasına yakın"
    elif p < KALMA:
        s["karar"] = "KALDI"
    elif p < GECME:
        s["karar"] = "ŞÜPHELİ"
    else:
        s["karar"] = "GEÇTİ"
    return s

# ---------------------------------------------------------------- konuk: vaka içi kimlik + eski karakterlere benzerlik
# (14 Kasım 2026, sahibi: "yeni konuklar sonraki vakalarda muhtemelen kullanılmayacak"). Konuğun çapası AYNI VAKADAKİ kendi onaylı
# figürleri (temel + onaylanmış ifadeler). Ölçüm (V3 + V6): kendi resimlerine en yakın benzerlik en düşük 0,744; başka konuğa en
# yüksek 0,719 (Eylül–Dilek) → karar en yakın resme göre: başka bir konuk daha yakınsa KALDI; < 0,60 KALDI; 0,60–0,70 ŞÜPHELİ.
# Temel (çapası olmayan ilk resim) için kimlik kapısı yok; onun yerine ESKİ karakterlere (oyundaki figür ve sprite'lar) benzerlik
# UYARISI basılır (uretim/CLAUDE.md kural 9). Ölçüm: reddedilen eski Müzeyyen Nadide'ye 0,768; onaylı Müzeyyen 0,748, Recep
# Ferruh'a 0,724 → kapı değil, yalnız "yan yana bak" uyarısı (0,70 üstü).
KONUK_KALMA, KONUK_GECME, ESKI_UYARI = 0.60, 0.70, 0.70

def vaka_konuklari(vaka_dir, haric):
    sys.path.insert(0, KOK)
    from arac_tarz import istemden
    kisi = {}
    for f in glob.glob(os.path.join(vaka_dir, "onayli", "G*.png")):
        if os.path.normcase(f) == os.path.normcase(haric):
            continue
        tur, kim = istemden(f)
        if tur in ("figur", "kart") and kim and kim not in ("peri", "cengo", "gizem"):
            y = yuzler(f)
            if y:
                kisi.setdefault(kim, []).append(y[0][1])
    return kisi

_ESKI = {}
def eski_karakterler():
    if not _ESKI:
        dosyalar = sorted(glob.glob(os.path.join(YG, "figur_*.webp")) + glob.glob(os.path.join(YG, "sprite", "*.webp")))
        imza = hashlib.md5("|".join(os.path.basename(f) for f in dosyalar).encode()).hexdigest()[:10]
        yol = os.path.join(CIKTI, f"eski_yuz_{imza}.npz")
        if os.path.exists(yol):
            _ESKI.update(np.load(yol, allow_pickle=True)["eski"].item())
        else:
            for f in dosyalar:
                ad = os.path.basename(f)
                k = re.sub(r"\.webp$", "", ad.split("_")[1] if ad.startswith("figur_") else ad.split("_")[0])
                y = yuzler(f)
                if y:
                    _ESKI.setdefault(k, []).append(y[0][1])
            os.makedirs(CIKTI, exist_ok=True)
            np.savez(yol, eski=np.array(dict(_ESKI), dtype=object))
    return _ESKI

def degerlendir_konuk(yol, tur, kim):
    s = {"dosya": yol, "tur": tur, "kim": kim}
    y = yuzler(yol)
    if not y:
        s["karar"] = "KALDI"; s["olcu"] = "yüz bulunamadı (yüz kapalı, profil ya da çok küçük olabilir — gözle bak)"; return s
    v = y[0][1]
    vaka_dir = os.path.dirname(os.path.dirname(os.path.abspath(yol)))
    kisi = vaka_konuklari(vaka_dir, yol)
    if kim not in kisi:
        en = sorted(((max(float(v @ w) for w in l), k) for k, l in eski_karakterler().items() if k != kim), reverse=True)[:3]
        s["karar"] = "GEÇTİ"
        s["olcu"] = "temel (vakada çapası yok, kimlik kapısı yok); eski karakterlere en yakın: " + ", ".join(f"{k} {p:.3f}" for p, k in en)
        if en and en[0][0] >= ESKI_UYARI:
            s["olcu"] += f" — UYARI: eski karakter {en[0][1]} ile yüz benzerliği ≥ {ESKI_UYARI}, yan yana bak (kural 9)"
        return s
    kendi = max(float(v @ w) for w in kisi[kim])
    yab = max(((max(float(v @ w) for w in l), k) for k, l in kisi.items() if k != kim), default=(0.0, "-"))
    s["olcu"] = f"benzerlik {kendi:.3f} (vakadaki {len(kisi[kim])} onaylı {kim} resmi; kalma < {KONUK_KALMA}, geçme ≥ {KONUK_GECME}; en yakın başka konuk {yab[1]} {yab[0]:.3f})"
    if yab[0] > kendi:
        s["karar"] = "KALDI"; s["olcu"] += f" — yüz daha çok {yab[1]} resimlerine yakın"
    elif kendi < KONUK_KALMA:
        s["karar"] = "KALDI"
    elif kendi < KONUK_GECME:
        s["karar"] = "ŞÜPHELİ"
    else:
        s["karar"] = "GEÇTİ"
    return s

def yaz(s):
    print(f"YÜZ {s['karar']:7s} {os.path.basename(s['dosya'])} [{s['tur']}/{s['kim']}] — {s['olcu']}")

# ---------------------------------------------------------------- sınav
def sinav(capa):
    sys.path.insert(0, KOK)
    from arac_tarz import istemden
    hata = 0
    # 1) çapadaki her resim (kendisi hariç) kendi karakterine en yakın olmalı; V3 üretimi GEÇMELİ
    print("— ÇAPA VE VAKA 3 (kendisi hariç) —")
    for k in capa:
        for i, f in enumerate(capa[k]["dosya"]):
            s = degerlendir(f, "figur", k, capa, {k: i})
            v3 = os.sep + "v3" + os.sep in f
            if s["karar"] != "GEÇTİ" and (v3 or "daha yakın" in s["olcu"]):
                print("  HATA", end=" "); yaz(s); hata += 1
            elif s["karar"] != "GEÇTİ":
                print("  bilinen sınır", end=" "); yaz(s)
    # 2) V6 onaylı Peri/Cengo/Gizem figür ve kartları GEÇMELİ (çapada değiller — gerçek sınav)
    print("— VAKA 6 ONAYLI (çapa dışı) —")
    for f in sorted(glob.glob(os.path.join(U, "v6", "onayli", "G*.png"))):
        tur, kim = istemden(f)
        if tur in ("figur", "kart") and kim in capa:
            s = degerlendir(f, tur, kim, capa); yaz(s)
            if s["karar"] != "GEÇTİ":
                hata += 1
    # 3) yabancılar: hiçbir konuk ve öbür karakter Peri/Cengo/Gizem diye GEÇMEMELİ
    print("— YABANCILAR (hiçbiri geçmemeli) —")
    yab = [f for f in glob.glob(os.path.join(YG, "figur_*.webp")) if "gizem" not in f]
    for v in ("v3", "v6"):
        for f in glob.glob(os.path.join(U, v, "onayli", "G*.png")):
            tur, kim = istemden(f)
            if tur == "figur" and kim not in capa:
                yab.append(f)
    en_yuksek = {k: 0 for k in capa}
    for f in yab:
        y = yuzler(f)
        if not y:
            continue
        for k in capa:
            p = benzerlik(capa[k]["v"], y[0][1])
            en_yuksek[k] = max(en_yuksek[k], p)
            if p >= GECME:
                print(f"  HATA: {os.path.relpath(f, DEPO)} {k} diye geçiyor ({p:.3f})"); hata += 1
    for k in capa:   # öbür çapalı karakterler birbirine
        for j in capa:
            if j != k:
                for v in capa[j]["v"]:
                    p = benzerlik(capa[k]["v"], v); en_yuksek[k] = max(en_yuksek[k], p)
                    if p >= GECME:
                        print(f"  HATA: bir {j} yüzü {k} diye geçiyor ({p:.3f})"); hata += 1
    print("  yabancıların en yükseği: " + ", ".join(f"{k} {v:.3f}" for k, v in en_yuksek.items()) + f" (geçme ≥ {GECME})")
    # 4) konuklar, vaka içi: V3 ve V6'nın onaylı konuk figürlerinin hepsi (kendisi hariç) GEÇMELİ
    print("— KONUKLAR, VAKA İÇİ (kendisi hariç; hepsi geçmeli) —")
    for v in ("v3", "v6"):
        for f in sorted(glob.glob(os.path.join(U, v, "onayli", "G*.png"))):
            tur, kim = istemden(f)
            if tur == "figur" and kim and kim not in capa:
                s = degerlendir_konuk(f, tur, kim)
                if s["karar"] != "GEÇTİ":
                    print("  HATA", end=" "); yaz(s); hata += 1
                elif "UYARI" in s["olcu"] or "temel" not in s["olcu"]:
                    print(f"  {v}", end=" "); yaz(s)
    # 5) bilgi: tarzı kaymış Cengo seti
    print("— BİLGİ: tarzı kaymış Cengo (kimlik değil tarz kaymıştı; çoğu burada geçer) —")
    for f in sorted(glob.glob(os.path.join(U, "referanslar", "tarz_sinav", "*.webp"))):
        yaz(degerlendir(f, "kart" if "G2_" in f else "figur", "cengo", capa))
    print("\nSINAV GEÇTİ" if hata == 0 else f"\nSINAV KALDI ({hata} hata)")
    return 0 if hata == 0 else 1

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("resim", nargs="*")
    ap.add_argument("--tur"); ap.add_argument("--kim"); ap.add_argument("--uretim")
    ap.add_argument("--sinav", action="store_true"); ap.add_argument("--capa-yenile", action="store_true")
    a = ap.parse_args()
    capa = capa_hesapla(a.capa_yenile)
    if a.sinav:
        sys.exit(sinav(capa))
    sys.path.insert(0, KOK)
    from arac_tarz import istemden
    yollar = []
    if a.uretim:
        for g in a.resim:
            g = g if g.startswith("G") else "G" + g
            for kl in ("uretilen", "onayli"):
                f = os.path.join(U, a.uretim, kl, g + ".png")
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
        if tur == "kare":
            yaz(degerlendir(f, "kare", kim, capa)); continue
        if not kim:
            print(f"YÜZ -       {os.path.basename(f)} — kişi istemden okunamadı; --kim ver")
            continue
        s = degerlendir(f, tur, kim, capa) if kim in capa else degerlendir_konuk(f, tur, kim)
        yaz(s)
        en_kotu = max(en_kotu, {"GEÇTİ": 0, "ŞÜPHELİ": 1, "KALDI": 2}[s["karar"]])
    sys.exit(en_kotu)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    import warnings; warnings.filterwarnings("ignore")
    main()
