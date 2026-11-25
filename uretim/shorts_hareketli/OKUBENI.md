# Hareketli Shorts — yöntem notu (Vaka 6, 25 Kasım 2026)

Senaryo `sablon/vakalar/vaka6_shorts.md`, iş tarifi `sablon/vakalar/vaka6_shorts_hareketli.md`. Videolar depoya girmez.

## Hat
1. **Resimler:** ChatGPT/Codex, Barbaros'un bilgisayarında (`uretim/v6_shorts/`, 5 resim, 2:3 dikey). Tarz oyunla aynı.
2. **Sesler:** ElevenLabs (deneme: ücretsiz plan — TİCARİ DEĞİL; yayından önce ücretli plan, kitaplıktan yaşlı kadın sesi).
3. **Konuşan çekimler:** InfiniteTalk (animasyon-uretim deposu, `infinitetalk_goruntu.sh`), 720p dikey 704×1280, konuşan kutusuyla
   (tek kişide ikinci kutu boş köşe + sessiz ses). Kamera komutu "Locked-off static camera: no zoom, no push-in, no camera movement."
4. **Sessiz hareket:** Wan2.1 I2V (`aksiyon.py`). T5 kartta kodlanmalı (Community EPYC 7453'te CPU'da takılıyordu — düzeltildi).
5. **Büyütme:** kartta Real-ESRGAN, `BUYUT_DIKEY=1` → 1080×1920.
6. **Montaj:** yerelde ffmpeg — açılış resme yavaş yaklaşma, son kare (oyunun son kare tasarımı, Playwright), müzik (YouTube Ses Kitaplığı,
   "atıf gerekmez"; konuşurken sidechain ile kısılır), −14 LUFS.

## Maliyet ve süre (Community L40S $0,79/sa)
- 5 konuşan çekim (her biri ~4 sn, 2 parça): 720p'de çekim başına ~15–16 dk → ~$1,55 (takılan aksiyon dahil).
- Aksiyon: 2 sürüm ~3 dk üretim + açılış ~7 dk → ~$0,13. Takılan iki deneme ~$0,55 boşa.
- Vaka başına gerçekçi: ~$2 (yeniden üretim hariç).

## Dersler
- Kimlik (yüz, saç, Cengo'nun bileklik/saçı) 4 sn'lik çekimlerde TUTTU; kanepe.mp4'teki saç kayması görülmedi.
- Kanca: sır/tehdit ilk 3 sn'de; boşluklar kırpılınca 29,5 → 26 sn; müzik tempoyu belirgin artırıyor.
