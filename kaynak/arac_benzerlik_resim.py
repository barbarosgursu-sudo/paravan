# ARAÇ (test değil): yeni konuğun RESMİ eski karakterlere ya da birlikte üretilenlere benziyor mu? (20 Kasım 2026, sahibinin
# isteği: "Daha önce vakadaki karakterlerin önceki vakalardakinden mutlaka farklı olmasını istemiştim" — Vaka 7 G4 Süheyla, Vaka 6
# Jale'nin aynısı çıktı; "bunu bir şekilde otomasyon şeklinde sağlamalıyız".)
#
# Benzerlik denetiminin İKİNCİ parçası. Birincisi (`arac_benzerlik.js`) üretimden ÖNCE görünüş tablosuna bakar ve yalnız barizi
# durdurur; bu araç üretimden SONRA resme bakar. arac_yuz.py'nin kardeşi: o "bu yüz gerçekten Peri mi" der, bu "bu konuk başka
# birine benziyor mu" der. Yalnız yüz yetmedi (arac_yuz Süheyla'yı Ayla'ya benzetti, Jale'yi bulamadı), o yüzden ÜÇ kanal:
#   yuz : yüz imzası (YuNet + SFace, arac_yuz.py'nin modeli)
#   bas : baş kırpığı — yüz + saç (CLIP ViT-B-32, arac_tarz.py'nin modeli)
#   tum : bütün figür — beden, duruş, genel görünüş (CLIP)
# Her kişinin bütün resimlerinin ortalaması (merkez) kullanılır. Ham benzerlik yanıltır: bazı karakterler (ör. Ayla) herkese
# benzer çıkar. Onun için her kanalda "yerel düzeltme" (CSLS) yapılır: 2·benzerlik − iki kişinin kendi en yakın 3 komşusuna
# ortalama benzerliği. Sonra her kanal, onaylı karakter çiftlerinin dağılımına göre z puanına çevrilir; PUAN = üç kanalın ortalaması.
# Yalnız aynı cinsiyet karşılaştırılır (cinsiyet sablon/kurallar/benzerlik/{havuz,adaylar}.tsv'den; bilinmiyorsa herkesle).
#
# KARŞILAŞTIRILAN (havuz): oyundaki bütün figürler (kaynak/yeni_gorsel/figur_*.webp) + her vakanın onaylı figür ve kartları
# (uretim/v*/onayli) + AYNI vakada üretilmiş öbür konuklar (uretim/vN/uretilen; birlikte üretilenler). Kişinin kendisi hariç.
# Peri, Cengo ve Gizem'in kendi resimleri denetlenmez (onların kimliği arac_yuz.py'de), ama konuk onlara da benzememeli.
#
# SINAV (20 Kasım 2026, `--sinav`): bilinen dört benzer çift — Süheyla–Jale, Necmi(eski)–Recep, Kaan(eski)–Bülent,
# Müzeyyen(reddedilen)–Nadide. Dördü de KALDI almalı; yoksa araç güvenilmez. Ölçülen (20 Kasım): Süheyla→Jale 1,96,
# Necmi→Recep 1,70, Kaan→Cengo 2,54 (Bülent yalnız 0,76: kıyafet farklı; ama Kaan resimde Cengo'ya gerçekten benziyor — dalgalı
# koyu saç, yaş, lacivert pantolon; gözle bakıldı), Müzeyyen→Nadide 3,06. Ayrıca Oğuz Bey'in "eskilere benziyor" diye yeniden
# yazdığı eski Şükrü (→Tahsin 1,58) ve Ercan (→Ferruh 1,82) da KALDI alıyor (sınavda değil, bilgi).
# Sınav resimleri git geçmişinden çıkarılır (SINAV tablosu), depoya ayrıca konmaz.
# EŞİK: puan ≥ 1,55 KALDI · 1,40–1,55 ŞÜPHELİ · < 1,40 GEÇTİ. Daha düşük eşik olmaz: bu üslupta herkesin EN YAKIN komşusu 0,9–1,5
# arası çıkıyor (1,00'da onaylıların neredeyse hepsi birine "benzer" sayılırdı). Bu eşikte onaylı 211 çiftten 7'si KALDI, 4'ü
# ŞÜPHELİ (`--havuz-ici`: Müzeyyen–Nadide, Bülent–Tolga, Lâl–Müjgan, Ferruh–Recep, Peri–Gizem, Dilek–Eylül, Defne–Gizem); gözle
# bakıldı, gerçekten benziyorlar — eski vakalarda kaçmış benzerlik. Bugün bilgi; yeni konukta kapı.
# SINIR: Necmi 1,70 eşiğe yakın; havuz büyüdükçe z ölçeği kayar → araç ya da havuz değişince --sinav yeniden koşulur.
#
# KARAR (sahibinin kuralı, 20 Kasım 2026 — arac_benzerlik.js ile aynı): KALDI → yeni konuğun görünüşü değişir (saç kesimi/rengi,
# yaş, yüz biçimi, beden), sahibine sorulmaz; form ve adaylar.tsv güncellenir, yeniden üretilir. ŞÜPHELİ → onaylanmaz, aynı yol;
# iki kez ŞÜPHELİ kalırsa sahibine (yan yana görüntüyle). Görüntü: YENI_UI/benzerlik/<G>.jpg (resim + en yakın 3 kişi).
#
# Kullanım (kaynak/ içinde):
#   python arac_benzerlik_resim.py --uretim v7 G4 G5      tür ve kişi istemden (arac_tarz.istemden)
#   python arac_benzerlik_resim.py <resim> --kim suheyla [--vaka v7]
#   python arac_benzerlik_resim.py --sinav                çıkış 0 = sınav geçti
#   python arac_benzerlik_resim.py --havuz-ici [n]        onaylı karakterlerin birbirine en benzer n çifti (bilgi)
# Çıkış: 0 GEÇTİ (ya da denetlenecek konuk yok) · 1 ŞÜPHELİ · 2 KALDI. İlk satır döngü kaydına gider.
import sys, os, re, glob, json, hashlib, argparse, subprocess
import numpy as np
from PIL import Image

KOK = os.path.dirname(os.path.abspath(__file__))
DEPO = os.path.dirname(KOK)
YG = os.path.join(KOK, "yeni_gorsel")
U = os.path.join(DEPO, "uretim")
TSV = os.path.join(DEPO, "sablon", "kurallar", "benzerlik")
CIKTI = os.path.join(KOK, "YENI_UI", "benzerlik")
KANAL = ("yuz", "bas", "tum")
KOMSU = 3
KALMA, SUPHE = 1.55, 1.40
KALICI = ("peri", "cengo", "gizem")

# (git nesnesi, kişi, benzediği) — bilinen benzer çiftler. Hepsi KALDI almalı.
SINAV = [
    ("8154ba1:uretim/v7/uretilen/G4.png", "suheyla", "jale"),
    ("a80a75a^:uretim/v7/uretilen/G10.png", "necmi", "recep"),
    ("a80a75a^:uretim/v7/uretilen/G8.png", "kaan", "bulent"),
    ("ea93ee3^:uretim/v6/red/G3_red1.png", "muzeyyen", "nadide"),
]

# ---------------------------------------------------------------- kişiler
def cinsiyetler():
    c = {}
    for ad in ("havuz.tsv", "adaylar.tsv"):
        yol = os.path.join(TSV, ad)
        if not os.path.exists(yol):
            continue
        bas = None
        for s in open(yol, encoding="utf-8"):
            if s.startswith("#") or not s.strip():
                continue
            h = s.rstrip("\n").split("\t")
            if bas is None:
                bas = h; continue
            o = dict(zip(bas, h)); c[o["id"]] = o.get("cins", "?")
    return c

def istemden(f):
    sys.path.insert(0, KOK)
    from arac_tarz import istemden as i
    return i(f)

def havuz_dosyalari(vaka=None, haric=None):
    """[(kişi, dosya)] — oyundaki figürler + bütün vakaların onaylıları + (vaka verilirse) o vakanın uretilen'i."""
    out = []
    for f in sorted(glob.glob(os.path.join(YG, "figur_*.webp"))):
        k = os.path.basename(f)[6:-5].split("_")[0]
        out.append((k, f))
    klasor = [os.path.join(U, v, "onayli") for v in os.listdir(U) if re.fullmatch(r"v\d+", v)]
    if vaka:
        klasor.append(os.path.join(U, vaka, "uretilen"))
    for d in klasor:
        for f in sorted(glob.glob(os.path.join(d, "G*.png"))):
            tur, k = istemden(f)
            if tur in ("figur", "kart") and k:
                out.append((k, f))
    if haric:
        h = os.path.normcase(os.path.abspath(haric))
        out = [(k, f) for k, f in out if os.path.normcase(os.path.abspath(f)) != h]
    return out

# ---------------------------------------------------------------- ölçü
_M = {}
def clip():
    if "m" not in _M:
        import torch, open_clip
        m, _, pre = open_clip.create_model_and_transforms("ViT-B-32", pretrained="laion2b_s34b_b79k")
        m.eval(); _M.update(m=m, pre=pre, torch=torch)
    return _M

def gomu(im):
    c = clip()
    with c["torch"].no_grad():
        v = c["m"].encode_image(c["pre"](im).unsqueeze(0))[0].numpy()
    return v / np.linalg.norm(v)

def gri(f):
    im = Image.open(f).convert("RGBA")
    z = Image.new("RGBA", im.size, (128, 128, 128, 255)); z.alpha_composite(im)
    return z.convert("RGB")

def olc(f):
    sys.path.insert(0, KOK)
    import arac_yuz
    im = gri(f); y = arac_yuz.yuzler(f)
    r = {"tum": gomu(im)}
    if y:
        x, yy, w, h = y[0][2]; r["yuz"] = y[0][1]
        r["bas"] = gomu(im.crop((max(0, x - 0.7 * w), max(0, yy - 0.9 * h), x + 1.7 * w, yy + 1.5 * h)))
        r["kutu"] = [max(0, x - 0.7 * w), max(0, yy - 0.9 * h), x + 1.7 * w, yy + 1.5 * h]
    return r

_ONB = {}
def onbellek_yolu():
    return os.path.join(CIKTI, "olcu_onbellek.npz")

def olc_onbellekli(f):
    if not _ONB:
        p = onbellek_yolu()
        if os.path.exists(p):
            _ONB.update(np.load(p, allow_pickle=True)["d"].item())
        _ONB.setdefault("__degisti", False)
    st = os.stat(f)
    anah = f"{os.path.relpath(f, DEPO)}|{st.st_size}|{int(st.st_mtime)}"
    if anah not in _ONB:
        _ONB[anah] = olc(f); _ONB["__degisti"] = True
    return _ONB[anah]

def onbellek_kaydet():
    if _ONB.get("__degisti"):
        os.makedirs(CIKTI, exist_ok=True)
        d = {k: v for k, v in _ONB.items() if k != "__degisti"}
        np.savez(onbellek_yolu(), d=np.array(d, dtype=object)); _ONB["__degisti"] = False

def merkez(olculer):
    m = {}
    for ch in KANAL:
        X = [o[ch] for o in olculer if ch in o]
        if X:
            c = np.mean(X, axis=0); m[ch] = c / np.linalg.norm(c)
    return m

class Havuz:
    def __init__(self, dosyalar, cins):
        self.cins = cins
        kisi = {}
        for k, f in dosyalar:
            kisi.setdefault(k, []).append(olc_onbellekli(f))
        onbellek_kaydet()
        self.M = {k: merkez(v) for k, v in kisi.items()}
        self.sayi = {k: len(v) for k, v in kisi.items()}
        # yerel yoğunluk (her kişinin kendi cinsinden en yakın 3 komşusu) ve onaylı çiftlerin dağılımı
        self.r = {k: self.yaricap(self.M[k], k, self.g(k)) for k in self.M}
        P = [self.csls_ham(self.M[a], self.r[a], a, b) for a, b in self.ciftler()]
        self.mu = {ch: float(np.nanmean([p[ch] for p in P])) for ch in KANAL}
        self.sd = {ch: float(np.nanstd([p[ch] for p in P])) for ch in KANAL}

    def g(self, k):
        return self.cins.get(k, "?")

    def ayni_cins(self, a, b):
        return a == "?" or b == "?" or a == b

    def sim(self, A, B, ch):
        return float(A[ch] @ B[ch]) if ch in A and ch in B else np.nan

    def yaricap(self, A, kendi, cins):
        r = {}
        for ch in KANAL:
            s = sorted((self.sim(A, self.M[j], ch) for j in self.M
                        if j != kendi and self.ayni_cins(cins, self.g(j)) and not np.isnan(self.sim(A, self.M[j], ch))), reverse=True)
            r[ch] = float(np.mean(s[:KOMSU])) if s else 0.0
        return r

    def ciftler(self):
        ks = sorted(self.M)
        return [(a, b) for i, a in enumerate(ks) for b in ks[i + 1:] if self.g(a) == self.g(b) and self.g(a) != "?"]

    def csls_ham(self, A, rA, a, b):
        return {ch: 2 * self.sim(A, self.M[b], ch) - rA[ch] - self.r[b][ch] for ch in KANAL}

    def puan(self, A, rA, a, b):
        p = self.csls_ham(A, rA, a, b)
        z = {ch: (p[ch] - self.mu[ch]) / self.sd[ch] for ch in KANAL if not np.isnan(p[ch])}
        return (float(np.mean(list(z.values()))) if z else 0.0), z

    def karsilastir(self, olcu, kim):
        """Yeni resim (tek ölçü) → [(puan, kişi, z)] büyükten küçüğe; kişinin kendisi ve öbür cinsiyet hariç."""
        A = merkez([olcu]); cins = self.g(kim)
        rA = self.yaricap(A, kim, cins)
        out = []
        for b in self.M:
            if b == kim or not self.ayni_cins(cins, self.g(b)):
                continue
            p, z = self.puan(A, rA, kim, b)
            out.append((p, b, z))
        return sorted(out, key=lambda x: -x[0])

def karar(p):
    return "KALDI" if p >= KALMA else ("ŞÜPHELİ" if p >= SUPHE else "GEÇTİ")

def ornek_resim(k):
    f = glob.glob(os.path.join(YG, f"figur_{k}_normal.webp")) or sorted(glob.glob(os.path.join(YG, f"figur_{k}*.webp")))
    if f:
        return f[0]
    for d in sorted(glob.glob(os.path.join(U, "v*", "onayli"))) + sorted(glob.glob(os.path.join(U, "v*", "uretilen"))):
        for g in sorted(glob.glob(os.path.join(d, "G*.png")), key=lambda x: int(re.sub(r"\D", "", os.path.basename(x)) or 0)):
            t, kk = istemden(g)
            if t == "figur" and kk == k:
                return g
    return None

def goruntu(f, kim, sira, ad):
    H = 420; ims = []
    for yol, et in [(f, kim)] + [(ornek_resim(k), f"{k} {p:.2f}") for p, k, _ in sira[:3]]:
        if not yol:
            continue
        im = gri(yol); im = im.resize((int(im.width * H / im.height), H)); ims.append((im, et))
    from PIL import ImageDraw
    W = sum(i.width for i, _ in ims) + 12 * len(ims)
    c = Image.new("RGB", (W, H + 30), "white"); d = ImageDraw.Draw(c); x = 0
    for im, et in ims:
        c.paste(im, (x, 0)); d.text((x + 6, H + 8), et, fill="black"); x += im.width + 12
    os.makedirs(CIKTI, exist_ok=True)
    yol = os.path.join(CIKTI, ad + ".jpg"); c.save(yol, quality=85)
    return yol

def denetle(f, kim, vaka, cins, gorsel=True, havuz=None):
    havuz = havuz or Havuz(havuz_dosyalari(vaka, haric=f), cins)
    o = olc_onbellekli(f); onbellek_kaydet()
    sira = havuz.karsilastir(o, kim)
    p, en, z = sira[0] if sira else (0.0, "-", {})
    k = karar(p)
    ek = "" if "yuz" in o else " (yüz bulunamadı; yalnız bütün figüre bakıldı)"
    yakin = ", ".join(f"{b} {q:.2f}" for q, b, _ in sira[:3])
    kanal = " ".join(f"{ch} {z[ch]:+.1f}" for ch in KANAL if ch in z)
    satir = (f"BENZERLİK {k:7s} {os.path.basename(f)} [{kim}] — en yakın {en} {p:.2f} ({kanal}); "
             f"ilk üç: {yakin}; kalma ≥ {KALMA:.2f}, şüphe ≥ {SUPHE:.2f}{ek}")
    if gorsel:
        satir += f" — görüntü: {os.path.relpath(goruntu(f, kim, sira, os.path.splitext(os.path.basename(f))[0] + '_' + kim), KOK)}"
    return k, p, en, satir

# ---------------------------------------------------------------- sınav
def sinav(cins):
    d = os.path.join(CIKTI, "sinav"); os.makedirs(d, exist_ok=True)
    hata = 0
    for nesne, kim, benzer in SINAV:
        f = os.path.join(d, f"{kim}_{hashlib.md5(nesne.encode()).hexdigest()[:6]}.png")
        if not os.path.exists(f):
            b = subprocess.run(["git", "show", nesne], cwd=DEPO, capture_output=True).stdout
            if not b:
                print(f"  HATA: git nesnesi okunamadı: {nesne}"); hata += 1; continue
            open(f, "wb").write(b)
        # Sınavda havuz: oyundaki figürler + onaylılar (vaka uretilen'i yok); kişinin kendi resimleri hariç (reddedilen Müzeyyen
        # onaylı Müzeyyen'e karşı değil, Nadide'ye karşı ölçülür).
        k, p, en, satir = denetle(f, kim, None, cins, gorsel=False)
        print(satir)
        if k != "KALDI":
            print(f"  HATA: {kim} {benzer}'e benziyordu; araç {k} dedi"); hata += 1
        elif en != benzer:
            print(f"  not: en yakın {en} çıktı ({benzer} değil) — resimde de benziyor mu, gözle bakıldı (SINAV notu)")
    print("\nSINAV GEÇTİ" if hata == 0 else f"\nSINAV KALDI ({hata} hata)")
    return 0 if hata == 0 else 1

def havuz_ici(cins, n):
    h = Havuz(havuz_dosyalari(), cins)
    P = sorted(((h.puan(h.M[a], h.r[a], a, b)[0], a, b) for a, b in h.ciftler()), reverse=True)
    print(f"Onaylı karakter çiftleri: {len(P)} (aynı cinsiyet). Eşiği geçenler: KALDI {sum(p >= KALMA for p, _, _ in P)}, "
          f"ŞÜPHELİ {sum(SUPHE <= p < KALMA for p, _, _ in P)}")
    for p, a, b in P[:n]:
        print(f"  {p:5.2f} {karar(p):7s} {a} – {b}")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("resim", nargs="*")
    ap.add_argument("--kim"); ap.add_argument("--vaka"); ap.add_argument("--uretim")
    ap.add_argument("--sinav", action="store_true"); ap.add_argument("--havuz-ici", nargs="?", const=30, type=int)
    a = ap.parse_args()
    cins = cinsiyetler()
    if a.sinav:
        sys.exit(sinav(cins))
    if a.havuz_ici:
        havuz_ici(cins, a.havuz_ici); return
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
        kim = a.kim or kim
        vaka = a.uretim or a.vaka
        if not vaka:
            m = re.search(r"uretim[\\/](v\d+)[\\/]", f); vaka = m.group(1) if m else None
        if (tur or "figur") not in ("figur", "kart") and not a.kim:
            print(f"BENZERLİK -       {os.path.basename(f)} — {tur}: konuk figürü değil, denetlenmez"); continue
        if not kim:
            print(f"BENZERLİK -       {os.path.basename(f)} — kişi istemden okunamadı; --kim ver"); continue
        if kim in KALICI:
            print(f"BENZERLİK -       {os.path.basename(f)} [{kim}] — kalıcı karakter; kimliği arac_yuz.py denetler"); continue
        k, p, en, satir = denetle(f, kim, vaka, cins)
        print(satir)
        en_kotu = max(en_kotu, {"GEÇTİ": 0, "ŞÜPHELİ": 1, "KALDI": 2}[k])
    sys.exit(en_kotu)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    import warnings; warnings.filterwarnings("ignore")
    os.environ.setdefault("OPENCV_LOG_LEVEL", "ERROR")
    main()
