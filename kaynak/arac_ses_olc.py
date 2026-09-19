#!/usr/bin/env python3
"""Gelen ses dosyalarını kabul etmeden önce ölçer. Test değil, araç —
`test_*.js` döngüsüne girmez (arac_ui_tur.js gibi).

    python3 arac_ses_olc.py ../ses/*.mp3

Bağımlılık (ortamda yoksa):  pip install numpy imageio-ffmpeg
imageio-ffmpeg statik bir ffmpeg getirir; sistemde ffmpeg olmasa da çalışır.

NEYE BAKAR — görsellerdeki üç kontrolün ses karşılığı:

1. Teknik: süre, kanal, bit hızı, boyut. ses_promptlari.md'deki
   TEKNİK GEREKLİLİKLER tablosuna karşı okunur.
2. Seviye (LUFS): parçalar birbirine yakın olmalı. Sahne değişince
   ses zıplarsa oyuncu irkilir — müzikte ±1 LUFS bandı hedef.
   Efektler bilerek bir tık üstte (kod zaten +0.15 ekliyor).
3. Döngü dikişi: parçanın sonu ile başı uyuşuyor mu? Uyuşmazsa
   döngüde duyulur bir 'tık' olur. ses_promptlari.md dikişsiz döngü
   şart koşuyor, ama Suno/Udio bunu kendiliğinden vermez — ham parça
   genelde fade ya da bitiş akoruyla gelir ve burada yakalanır.
   Efektler tek seferlik; onlarda dikiş ölçülmez.

Referans (geçici sentetik yer tutucular, 19 Eylül 2026):
  müzik   I = -22.0 … -19.8 LUFS,  tepe -10.8 … -6.4 dB
  dikiş   seviye farkı ≈ 0 dB, sınır sıçraması < 0.01  (karar.wav -5.2 dB ile
          en kötüsü; gerçek parçalarda bundan iyisini bekliyoruz)
"""
import subprocess, sys, os, re, math
import numpy as np
import imageio_ffmpeg

FF = imageio_ffmpeg.get_ffmpeg_exe()

def pcm(path, sr=22050):
    p = subprocess.run([FF, "-v", "quiet", "-i", path, "-f", "f32le", "-ac", "1",
                        "-ar", str(sr), "-"], capture_output=True)
    return np.frombuffer(p.stdout, dtype="<f4"), sr

def kunye(path):
    return subprocess.run([FF, "-hide_banner", "-i", path],
                          capture_output=True, text=True).stderr

def lufs(path):
    s = subprocess.run([FF, "-v", "info", "-i", path, "-af", "ebur128=peak=true",
                        "-f", "null", "-"], capture_output=True, text=True).stderr
    out = {}
    if "Integrated loudness" in s:
        for satir in s[s.index("Integrated loudness"):].split("\n"):
            if "I:" in satir and "LUFS" in satir: out["I"] = float(satir.split()[-2])
            if "Peak:" in satir and "dBFS" in satir: out.setdefault("peak", float(satir.split()[-2]))
    return out

def dikis(x, sr, ms=120):
    """Sonun son ms'i ile başın ilk ms'i. Seviye farkı ve örnek sınırındaki sıçrama."""
    n = int(sr * ms / 1000)
    if len(x) < 2 * n: return None
    rms = lambda a: float(np.sqrt(np.mean(a ** 2)) + 1e-12)
    return {"seviye_farki_dB": round(20 * math.log10(rms(x[-n:]) / rms(x[:n])), 1),
            "sinir_sicramasi": round(float(abs(x[-1] - x[0])), 4)}

def main(yollar):
    print(f"{'dosya':22} {'süre':>7} {'kanal':6} {'bit':>5} {'boyut':>7}  "
          f"{'LUFS':>7}  {'tepe':>7}  döngü dikişi")
    for path in yollar:
        ad = os.path.basename(path)
        x, sr = pcm(path)
        if len(x) == 0:
            print(f"{ad:22} ÇÖZÜLEMEDİ — biçim bozuk ya da dosya boş"); continue
        inf = kunye(path); l = lufs(path)
        kanal = "mono" if "mono" in inf else ("stereo" if "stereo" in inf else "?")
        m = re.search(r"(\d+) kb/s", inf)
        efekt = ad.startswith("efekt_")
        d = None if efekt else dikis(x, sr)
        dik = "— (efekt, döngü değil)" if efekt else (
            f"seviye {d['seviye_farki_dB']:+.1f} dB, sınır {d['sinir_sicramasi']:.4f}"
            if d else "ölçülemedi (çok kısa)")
        print(f"{ad:22} {len(x)/sr:6.1f}s {kanal:6} {(m.group(1)+'k') if m else '-':>5} "
              f"{os.path.getsize(path)/1024:6.0f}KB  {str(l.get('I','?')):>6} {str(l.get('peak','?')):>7}  {dik}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    main(sys.argv[1:])
