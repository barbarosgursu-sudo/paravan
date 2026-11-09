# Vaka 3 — YouTube videosu (seyirlik, deneme)

Oyunun ORİJİNAL resimlerinden, satır satır seslendirilmiş video. Oyun dosyalarına yazılmaz: `kaynak/yeni_gorsel/` ve
`kaynak/yeni/gorseller.json` yalnız OKUNUR (sahibinin şartı: Paravan V3 asla bozulmayacak).

Sahibinin kararları (9 Kasım 2026): resim başına konuşma süresi kadar gösterim; 6 ipucu art arda, doğru suçlama + doğru
kanıt çifti, karar yok, konuşma içi seçim yok; ALTYAZI YOK (YouTube'a ayrı .srt); basit efekt serbest (kamera, geçiş,
toz/ışık — karakter kımıldamaz); müzik sonra konuşulacak; ilk sürüm DİKEY (1080×1920); mekân etiketi var; doğrudan
girişle başlar ama durağan değil; İngilizce; üretim yerelde (bulut kartı yok).

## Dosyalar
- `metin_deneme.json` — Vaka 3 girişinin ilk 12 satırı İngilizce; konuşan/ifade/kim ekranda oyunun satırından.
  Efekt alanları satırda: `vurgu`, `sarsinti`, `gergin`, `parilti` (ayrıntı dosyanın `_not`'unda).
- `ses_uret.py` — ElevenLabs (zaman damgalı; .srt için hizalama `NNN.json`). Ücretsiz plan: yalnız hazır sesler,
  en çok mp3 128k, aylık 10.000 kredi (9 Kasım'da BİTTİ). Ücretsiz plan ticari kullanıma izin vermez.
- `ses_kokoro.py` — Kokoro TTS, yerel ve ücretsiz (Apache 2.0). Kurulum: venv + `pip install kokoro-onnx soundfile`,
  model `kokoro-v1.0.onnx` + `voices-v1.0.bin` (github thewh1teagle/kokoro-onnx, model-files-v1.0).
- `video_uret.py` — kareleri kurar (arka plan "cover" + oyunun figür yerleşimi `yeni_arayuz.css`'ten; konuşan aydınlık,
  dinleyen soluk). Efektler (karakter kımıldamaz): kamera konuşana yaklaşır/kayar, arka plan daha yavaş kayar (derinlik),
  vurgu yaklaşması, sarsıntı, gerginlikte kenar karartması + soğuk renk, Peri'nin ışıltısı, mekân ışığı (`ISIK` tablosu:
  arka plan pikselinde lamba ve pencere huzmesi; şimdilik yalnız A6), toz, hafif film greni, mekân etiketi; ses −14 LUFS.
  `python3 video_uret.py <metin.json> <ses klasörü> <çıktı.mp4>`; `--kare=5,14` yalnız o anların PNG'si (denetim).
  Yeni mekânda `ISIK`'a o arka planın lamba/huzme noktaları eklenir (yoksa ışık efekti yok, gerisi çalışır).
- `deneme_30sn_elevenlabs.mp4`, `deneme_30sn_kokoro.mp4` — ilk 5 satır, iki ses seçeneği, ilk efekt seti.
- `deneme_60sn_kokoro.mp4` — ilk 12 satır, bütün efektler. Sesler Kokoro; yalnız açılış anlatısı
  (satır 0) ElevenLabs George (sahibinin seçimi, 9 Kasım). Ses klasöründe `000.mp3` + diğerleri `NNN.wav` — betik önce
  `.wav`'ı arar; her satır RMS −20 dBFS'e eşitlenir (iki motorun seviyesi farklı).

Sesler — ElevenLabs: anlatıcı George, Peri Lily, Cengo Callum, Nadide Alice. Kokoro: bm_george, af_bella, am_fenrir, bf_emma.
