# ARAÇ (test değil): bir kıyafetin figür zeminini ÜRETİMDEN ÖNCE seçer (14 Kasım 2026, sahibinin isteği: "arka planı kartlardaki
# kıyafetlerin renklerine göre seçelim; her seferinde bununla uğraşmayalım").
#
# Sorun: zemin yalnız saça göre seçiliyordu; V6'da Peri'nin mesai kıyafeti (krem gömlek + mavi kot) gri-mavi zemine kondu ve
# kesimde kot zeminle birlikte silindi. Kesim aracı zemine renkçe yakın pikseli zemin sayar (kenar toleransı 10–28).
#
# Yöntem: onaylı kıyafet kartını (ya da temel figürü) alır, figürü kendi zemininden ayırır ve her ADAY zemin için "kesim riski"ni
# ölçer: figür piksellerinin yüzde kaçı o zemine 30'dan yakın (RGB uzaklığı). Zeminler uretim/referanslar/zeminler.tsv'de (tek kaynak;
# istem_kontrol.sh de oradan okur): yalnız DENENMİŞ iki zemin, açık bej ve gri-mavi. İlk sıradaki riski %5'in altında olan seçilir —
# sıra saç halesi tecrübesinden (bej hiç hale bırakmadı, gri-mavi açık/sıcak saçta mavi hale bıraktı). İkisi de riskliyse
# KIYAFET DEĞİŞİR, zemin değil (sahibinin kararı, 14 Kasım 2026: "yeni bir kıyafet giydiririz, bu kadar uğraşacak bir şey yok");
# araç çakışan rengi ve figürdeki yerini basar.
#
# Doğrulama (14 Kasım, V6 onaylıları): Peri mesai kartı bej %17,5 · gri-mavi %22,3 → KIYAFET DEĞİŞMELİ (yaşanan sorun); Eylül
# gri-mavi %14,8 → bej (biz de bej seçtik); Cengo, Tahsin, Recep, Haldun, Dilek, Gizem → bej (hepsinde bej seçilmişti).
#
# Kullanım (kaynak/ içinde):
#   python arac_zemin.py --uretim v6 G19 --kiyafet muzeyyen [--yaz]     onaylı kart/temel; --yaz kararı uretim/v6/zemin.tsv'ye yazar
#   python arac_zemin.py <resim.png> --kiyafet peri.mesai --vaka 7 [--yaz]
#   python arac_zemin.py --sinav
# --kiyafet: figür anahtarının kıyafete kadar olan öneki (peri.mesai, cengo.utulu, eylul). O önekle başlayan BÜTÜN figür istemleri
# bu zemini alır; istem_kontrol.sh denetler.
import sys, os, re, argparse, datetime
import numpy as np

KOK = os.path.dirname(os.path.abspath(__file__))
DEPO = os.path.dirname(KOK)
U = os.path.join(DEPO, "uretim")
LISTE = os.path.join(U, "referanslar", "zeminler.tsv")
YAKIN = 30      # kesim toleransının üst ucu (kenarTol 28)
ESIK = 5.0      # % — bunun altı güvenli

def adaylar():
    satirlar = [s.rstrip("\n").split("\t") for s in open(LISTE, encoding="utf-8") if s.strip()]
    bas = satirlar[0]
    out = []
    for s in satirlar[1:]:
        d = dict(zip(bas, s)); h = d["hex"].lstrip("#")
        d["rgb"] = tuple(int(h[i:i + 2], 16) for i in (0, 2, 4)); out.append(d)
    return out

def figur_pikselleri(yol, konum=False):
    import cv2
    img = cv2.imread(yol); h, w = img.shape[:2]
    m = np.zeros((h + 2, w + 2), np.uint8)
    bayrak = cv2.FLOODFILL_MASK_ONLY | cv2.FLOODFILL_FIXED_RANGE | (255 << 8) | 4
    for p in [(5, 5), (w - 6, 5), (5, h - 6), (w - 6, h - 6)]:
        cv2.floodFill(img.copy(), m, p, 0, (12, 12, 12), (12, 12, 12), bayrak)
    fig = m[1:-1, 1:-1] == 0
    fig = cv2.erode(fig.astype(np.uint8), np.ones((5, 5), np.uint8)) > 0   # kenardaki zemin karışımı sayılmasın
    if konum:
        ys = np.nonzero(fig)[0]; y0, y1 = ys.min(), ys.max() + 1
        return img[..., ::-1][fig].astype(np.float32), float(fig.mean()), (ys - y0) / max(1, y1 - y0)
    return img[..., ::-1][fig].astype(np.float32), float(fig.mean())

def olc(yol):
    px, oran = figur_pikselleri(yol)
    sonuc = []
    for a in adaylar():
        d = np.linalg.norm(px - np.array(a["rgb"], np.float32), axis=1)
        sonuc.append((a, 100 * float((d < YAKIN).mean())))
    return sonuc, oran

def karar(sonuc):
    """Riski %5'in altındaki ilk zemin; hiçbiri güvenli değilse (None, en düşük risk) → kıyafet değişmeli."""
    for a, r in sonuc:
        if r < ESIK:
            return a, r
    return None, min(r for _, r in sonuc)

def cakisan(yol, a):
    """Zemine yakın piksellerin rengi ve figürde nerede olduğu (baş/gövde/alt) — kıyafeti değiştirecek kişiye ipucu."""
    px, _, yy = figur_pikselleri(yol, konum=True)
    d = np.linalg.norm(px - np.array(a["rgb"], np.float32), axis=1); m = d < YAKIN
    if not m.any():
        return "-"
    renk = "#%02X%02X%02X" % tuple(int(c) for c in np.median(px[m], axis=0))
    bolge = np.bincount(np.minimum((yy[m] * 3).astype(int), 2), minlength=3) / m.sum()
    ad = ["figürün üst üçte biri", "figürün orta üçte biri", "figürün alt üçte biri"]
    return f"renk {renk}, en çok {ad[int(bolge.argmax())]} %{100 * bolge.max():.0f}"

def profil(zemin, kiyafet):
    kim = kiyafet.split(".")[0]
    if zemin == "açık bej":
        return {"peri": "peri", "cengo": "cengo"}.get(kim, "konuk")
    return {"peri": "peri_mavi", "cengo": "cengo_beyaz"}.get(kim, "konuk_beyaz_delik")

def rapor(yol, kiyafet):
    sonuc, oran = olc(yol)
    print(f"{os.path.relpath(yol, DEPO)} — kıyafet '{kiyafet}' (figür resmin %{100 * oran:.0f}'i)")
    for a, r in sonuc:
        print(f"  {a['ad']:9s} kesim riski %{r:5.2f}  {'güvenli' if r < ESIK else 'RİSKLİ'}  [{a['durum']}]")
    a, r = karar(sonuc)
    if a is None:
        print("  → KIYAFET DEĞİŞMELİ: iki zemine de çakışıyor (sahibinin kararı, 14 Kasım 2026: zemin değil kıyafet değişir).")
        for z, _ in sonuc:
            print(f"     {z['ad']} ile çakışan: {cakisan(yol, z)}")
        print("     Kıyafetin çakışan parçasını iki zeminden de uzak bir renkle değiştir (sahibine/ortağa sor: kıyafet kanondur),")
        print("     kartı yeniden üret, bu aracı yeniden koş.")
        return None, r
    print(f"  → ZEMİN: {a['ad']} ({a['hex']}, örnek uretim/referanslar/{a['örnek']}) · kesim profili: {profil(a['ad'], kiyafet)}")
    if a["ad"] == "gri-mavi":
        print("  ⚠ gri-mavi açık/sıcak saçta mavi hale bıraktı (V6) → saç açıksa temelde açık bej ile zemin denemesi")
    return a, r

def yaz(vaka, kiyafet, a, r, yol):
    f = os.path.join(U, vaka, "zemin.tsv")
    satirlar = [s for s in open(f, encoding="utf-8")] if os.path.exists(f) else ["kıyafet\tzemin\trisk\tkaynak\ttarih\n"]
    satirlar = [s for s in satirlar if not s.startswith(kiyafet + "\t")]
    satirlar.append(f"{kiyafet}\t{a['ad']}\t%{r:.2f}\t{os.path.relpath(yol, DEPO).replace(os.sep, '/')}\t{datetime.date.today()}\n")
    open(f, "w", encoding="utf-8").writelines(satirlar)
    print(f"  yazıldı: {os.path.relpath(f, DEPO)}")

def sinav():
    V6 = os.path.join(U, "v6", "onayli")
    # (resim, kıyafet, beklenen) — V6'da yaşanan/seçilen sonuçlar
    vaka = [("G1", "peri.mesai", "KIYAFET"), ("G17", "peri.mesai", "KIYAFET"),
            ("G6", "eylul", "açık bej"), ("G18", "cengo.utulu", "açık bej"), ("G2", "cengo.utulu", "açık bej"),
            ("G86", "cengo.buruşuk", "açık bej"), ("G5", "haldun", "açık bej"), ("G7", "recep", "açık bej"),
            ("G8", "dilek", "açık bej"), ("G9", "tahsin", "açık bej"), ("G23", "gizem.triko", "açık bej")]
    hata = 0
    for g, k, bek in vaka:
        f = os.path.join(V6, g + ".png")
        if not os.path.exists(f):
            print("yok:", g); hata += 1; continue
        a, _ = karar(olc(f)[0])
        ad = a["ad"] if a else "KIYAFET"
        tamam = ad == bek
        print(f"{'TAMAM' if tamam else 'HATA ':5s} {g:4s} {k:14s} → {ad:9s} (beklenen {bek})")
        hata += not tamam
    print("SINAV GEÇTİ" if hata == 0 else f"SINAV KALDI ({hata})")
    return 0 if hata == 0 else 1

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("resim", nargs="*"); ap.add_argument("--uretim"); ap.add_argument("--kiyafet")
    ap.add_argument("--vaka"); ap.add_argument("--yaz", action="store_true"); ap.add_argument("--sinav", action="store_true")
    a = ap.parse_args()
    if a.sinav:
        sys.exit(sinav())
    if not a.kiyafet or not a.resim:
        ap.error("resim ve --kiyafet gerekli")
    if a.uretim:
        g = a.resim[0] if a.resim[0].startswith("G") else "G" + a.resim[0]
        yol = next((os.path.join(U, a.uretim, k, g + ".png") for k in ("onayli", "uretilen")
                    if os.path.exists(os.path.join(U, a.uretim, k, g + ".png"))), None)
        if not yol:
            sys.exit(f"bulunamadı: {g}")
        vaka = a.uretim
    else:
        yol = a.resim[0]; vaka = f"v{a.vaka}" if a.vaka else None
    z, r = rapor(yol, a.kiyafet)
    if z is None:
        sys.exit(2)
    if a.yaz:
        if not vaka:
            sys.exit("--yaz için --uretim ya da --vaka gerekli")
        yaz(vaka, a.kiyafet, z, r, yol)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
