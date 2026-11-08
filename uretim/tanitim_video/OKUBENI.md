# Tanıtım videosu (Remotion) — deneme, 8 Kasım 2026

Oyunun KENDİ resimlerinden 2,5B hareketli dikey tanıtım videosu (1080×1920, 30 fps).
Yeni resim üretilmez: arka plan + saydam kesilmiş figürler katman katman kayar, figürler nefes alır,
lamba titrer, toz süzülür; replikler ElevenLabs sesiyle.
Fikir `mromidev/claude-animated-shorts` becerisinden (Remotion düzeni); onun 3B çizgi film tarzı ve
referans kareleri ALINMADI (tarz Paravan'a uymuyor, kareler "yalnız çalışma" lisanslı).

## Kurulum ve çizim
```
cd uretim/tanitim_video
npm i                        # remotion 4.0.300, react 18.3.1, typescript 5.6.3 (TS 6 Remotion'u kırıyor)
G=../../kaynak/yeni_gorsel
cp $G/arka_a23.webp $G/arka_a8_buro_aksam.webp $G/kart_v3.webp $G/figur_{nadide,ferruh,kenan,gizem}_normal.webp \
   $G/sprite/peri_trenckot_{normal,kas}.webp $G/sprite/cengo_haki_{normal,gulen}.webp public/
npx remotion render src/index.ts Tanitim out/tanitim.mp4 --codec h264 --crf 20 --browser-executable=<chrome-headless-shell>
ffmpeg -i out/tanitim.mp4 -c:v copy -af loudnorm=I=-16:TP=-1.5:LRA=11 -c:a aac -b:a 192k son.mp4
```
Resimler depoya ikinci kez konmaz (yukarıdaki `cp`). Yazı tipleri `public/font/` (Shrikhand, Nunito — OFL; bulut
Chrome'u Google Fonts'a sertifika hatası veriyor, yerel şart).

## Dosyalar
- `src/Tanitim.tsx` — dört sahne: Susam akşam + başlık · büroda Peri/Cengo konuşması · dükkânın dört kişisi · afiş.
  Zaman çizelgesi dosyanın başında (`S1–S4`, `PERI_AT`, `CENGO_AT`).
- `tts.py` — replik seslerini üretir. Ücretsiz ElevenLabs planı kitaplık seslerine (Türkçe "Sultan", "Tan") izin
  vermiyor; şimdilik hazır sesler (Lily = Peri, Callum = Cengo) çok dilli modelle Türkçe konuşuyor. Aksan sahibince dinlenecek.
- Ses efekti üretimi (ElevenLabs sound-generation) anahtarda kapalı: `ortam.wav` ve `vurus.wav` ffmpeg ile sentetik. Müzik YOK (19 Eylül kararı).

## Nurcan
Videodaki her söz oyuncunun girişte duyduğu bilgidir (Vaka 3 `sahne giris` / `sahne konusma`): arka cam kırık, kasa açık,
dört kişi. Suçlu, ipucu, karar videoya girmez — davet kartının kuralıyla aynı.

## Oyun içi hareket (ayrı deneme)
`oyun_ici_hareket.patch` — `kaynak/yeni_arayuz.css` sonuna eklenen salt CSS hareket (arka plan süzülmesi, ara kare
yaklaşması, figür nefesi, konuşanın öne çıkması, toz). Sahibinin onayı bekleniyor; onaylanınca
`git apply uretim/tanitim_video/oyun_ici_hareket.patch` + derleme.
