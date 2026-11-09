"""Satır seslerini ElevenLabs'ten üretir (zaman damgalı; .srt için hizalama da kaydedilir).
Kullanım: python3 ses_uret.py metin_deneme.json <çıktı klasörü>
Anahtar betikte yok: ağ geçidi ekler (xi-api-key sahte değer)."""
import json, sys, base64, os, ssl, time, urllib.request, urllib.error
metin, cikti = sys.argv[1], sys.argv[2]
os.makedirs(cikti, exist_ok=True)
M = json.load(open(metin))
ctx = ssl.create_default_context(cafile=os.environ.get('SSL_CERT_FILE', '/root/.ccr/ca-bundle.crt'))
AYAR = {'stability': 0.45, 'similarity_boost': 0.8, 'style': 0.3, 'use_speaker_boost': True}
for i, s in enumerate(M['satirlar']):
    yol = f"{cikti}/{i:03d}.mp3"
    if os.path.exists(yol): continue
    kim = 'anlatici' if s['k'] == 'not' else s['k']
    vid = M['sesler'][kim][0]
    govde = json.dumps({'text': s['m'], 'model_id': 'eleven_multilingual_v2', 'language_code': 'en',
                        'voice_settings': AYAR}).encode()
    r = urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{vid}/with-timestamps?output_format=mp3_44100_128',
                               data=govde, headers={'xi-api-key': 'x', 'Content-Type': 'application/json'})
    for deneme in range(4):   # ağ geçidi ara sıra 401 veriyor; bekleyip yeniden dene
        try: d = json.load(urllib.request.urlopen(r, context=ctx)); break
        except urllib.error.HTTPError as e:
            print(i, 'HTTP', e.code, e.read()[:200]); time.sleep(3 * (deneme + 1))
    else: sys.exit('ses üretilemedi: satır %d' % i)
    open(yol, 'wb').write(base64.b64decode(d['audio_base64']))
    json.dump(d['alignment'], open(f"{cikti}/{i:03d}.json", 'w'))
    print(i, kim, round(d['alignment']['character_end_times_seconds'][-1], 2), 'sn')
