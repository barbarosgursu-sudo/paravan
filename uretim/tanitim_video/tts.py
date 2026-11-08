import json,sys,base64,urllib.request,os
os.environ.setdefault('REQUESTS_CA_BUNDLE','/root/.ccr/ca-bundle.crt')
lines={'peri':('pFZP5JQG7iQjIQuC4Bku','Bu şehirde size borçlu olmayan var mı?'),
       'cengo':('N2lVS1w4EtoT3dr4eOWO','Ben de herkese borçluyum. Ödeşiyoruz.')}
import ssl;ctx=ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
for k,(vid,t) in lines.items():
  body=json.dumps({'text':t,'model_id':'eleven_multilingual_v2','language_code':'tr','voice_settings':{'stability':0.45,'similarity_boost':0.8,'style':0.35}}).encode()
  r=urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{vid}/with-timestamps?output_format=mp3_44100_128',data=body,headers={'xi-api-key':'x','Content-Type':'application/json'})
  d=json.load(urllib.request.urlopen(r,context=ctx))
  open(f'public/{k}.mp3','wb').write(base64.b64decode(d['audio_base64']))
  a=d['alignment'];print(k,a['character_end_times_seconds'][-1])
