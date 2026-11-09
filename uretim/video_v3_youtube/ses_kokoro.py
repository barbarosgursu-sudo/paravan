"""Satır seslerini Kokoro TTS ile YEREL üretir (ücretsiz, Apache 2.0, İngilizce).
ElevenLabs kredisi bittiğinde ya da ses tutarlılığı için hepsi buradan.
Kullanım: <venv>/bin/python ses_kokoro.py metin_deneme.json <çıktı klasörü> <model klasörü>
Model dosyaları (kokoro-v1.0.onnx, voices-v1.0.bin): github.com/thewh1teagle/kokoro-onnx releases model-files-v1.0.
"""
import json, sys, os
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

metin, cikti, model = sys.argv[1:4]
os.makedirs(cikti, exist_ok=True)
M = json.load(open(metin))
K = Kokoro(f'{model}/kokoro-v1.0.onnx', f'{model}/voices-v1.0.bin')
SES = M['kokoro']            # konuşan → [ses, hız]
for i, s in enumerate(M['satirlar']):
    kim = 'anlatici' if s['k'] == 'not' else s['k']
    ses, hiz = SES[kim]
    a, sr = K.create(s['m'], voice=ses, speed=hiz, lang='en-us' if ses[0] == 'a' else 'en-gb')
    # baş/son sessizliği kırp (0.05 sn bırak)
    e = np.abs(a) > 0.01; idx = np.where(e)[0]
    if len(idx): a = a[max(0, idx[0] - int(.05 * sr)): idx[-1] + int(.08 * sr)]
    sf.write(f'{cikti}/{i:03d}.wav', a, sr, subtype='PCM_16')
    print(i, kim, ses, round(len(a) / sr, 2), 'sn')
