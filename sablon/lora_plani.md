# LoRA PLANI — Peri ve Cengo (yerel üretim için)

> Yeni pencere bu dosyayla başlar. Önce `CLAUDE.md`, sonra bu dosya, sonra
> `sablon/5_gorsel_sistemi.md` D-7 (yerel üretim denemesinin sonuçları).
> Durum (12 Ekim 2026): Forge kurulu ve çalışıyor; IP-Adapter denendi; **LoRA henüz yok.**

## Amaç

Yerel üretimde (Forge, DreamShaper XL Lightning) Peri ve Cengo'nun **aynı kişi** olarak, ChatGPT
setindeki güzellik ve alımla çıkması. IP-Adapter tek görselden kabaca benzetiyor (yüz sönük, küpe
kayıyor); LoRA karakteri 20–30 görselden öğrenir. Başarılı olursa gece otomatik üretimin (Forge API
betiği) temeli olur.

**Başarı ölçütü:** Forge'da `<lora:…>` ile üretilen 4 Peri görselinden en az 3'ü, sahibine göre "bu
Peri" — yüz, saç rengi/topuz, vücut hattı; kıyafet promptla değişebiliyor. Cengo için aynı.

## Adım 1 — Veri toplama (sahibi, ~30 dk)

- Sahibinin telefonundaki **orijinal** ChatGPT/Grok/Gemini çıktıları (ekran görüntüsü değil).
- Yalnız **kabul edilmiş son hâller**; çorap bantlı, yeşil ayakkabılı gibi reddedilenler girmez.
- Yalnız **tek kişilik figür** görselleri (kareler şimdilik dışarıda).
- Bilgisayarda: `C:\lora\peri`, `C:\lora\cengo`.
- Kaynak: Vaka 1 (mantolu, mantosuz, saten, balıklı vb.) + Vaka 2 (tayyör, kremalı, örtülü) Peri;
  Vaka 1 (kahverengi ceket) + Vaka 2 (lacivert takım) Cengo. Peri ~45, Cengo ~15–20 görsel bekleniyor.

## Adım 2 — Seçim (Claude, sahibi onaylar, ~20 dk)

- Sahibi görselleri pencereye yükler (ya da sayısını ve birkaç örneğini).
- Claude her karakter için **20–30** görsel seçer: farklı ifade, farklı kıyafet, yüz net; aynı pozun
  kopyaları azaltılır. Cengo azsa 15 de yeter.
- Kıyafet çeşitliliği önemli: LoRA yüzü kıyafetten ayırmayı ancak farklı kıyafetler görürse öğrenir;
  hep tayyörle eğitilirse her görsele tayyör giydirir.

## Adım 3 — Eğitim

**Önerilen yol: Civitai'nin site içi LoRA eğiticisi** (kurulum yok, tarayıcıdan, Buzz ile ödenir;
SDXL LoRA'sı tipik olarak birkaç dolar). Sahibinin Civitai hesabı var.
1. civitai.com → **Create → Train a LoRA** → tür: **Character**.
2. Görselleri yükle. Eğitici otomatik yazı (caption) önerir; Claude gözden geçirir:
   - Tetik sözcüğü: **`prvperi`** (Cengo: **`prvcengo`**) — gerçek bir sözcük olmasın.
   - Caption kıyafeti, pozu, ifadeyi, arka planı anlatır; **yüzü/saçı anlatmaz** (onlar tetik
     sözcüğüne bağlansın). Örnek: `prvperi, emerald green suit, pencil skirt, hand on hip, smiling, plain beige background`.
3. Temel model: **SDXL** (SDXL 1.0 tabanı; DreamShaper XL dahil bütün SDXL modelleriyle çalışır).
4. Ayarlar: eğiticinin "Character" önerileri yeterli. Elle gerekirse: 1024 çözünürlük, ~10 epoch,
   toplam ~1500–2500 adım, network dim 32 / alpha 16, öğrenme oranı 1e-4 (ya da Prodigy).
5. Model **özel (yayımlanmamış)** kalsın. Eğitim bitince her epoch'un örnek görsellerine bak; en iyi
   epoch'un `.safetensors` dosyasını indir (~50–200 MB).

**Yedek yol: RunPod** (saatlik GPU, ~0,5 $/sa; Kohya_ss ya da OneTrainer şablonu). Daha fazla kontrol,
daha teknik. Civitai eğiticisi yetmezse.

## Adım 4 — Forge'da deneme (sahibi + Claude, ~30 dk)

1. Dosyayı `C:\forge\webui\models\Lora` klasörüne koy; Forge'da **Lora** sekmesinde 🔄.
2. ControlNet (IP-Adapter) **kapalı**.
3. Prompt örneği (ayarlar D-7'deki gibi: 6 adım, CFG 2, DPM++ SDE, Karras, 832×1216, GPU Weights 4096):
   `<lora:prvperi:0.8> prvperi, painted illustration, semi-realistic graphic novel style, emerald green suit jacket with deep V neckline, pencil skirt, red stiletto heels, single pearl earring, hand on hip, three-quarter view, face turned to the left, plain beige background`
4. Ağırlık taraması: 0.6 / 0.8 / 1.0 — benzerlik ile esneklik (kıyafet değişebilmesi) dengesi.
5. Kıyafet testi: aynı tetikle **başka kıyafet** (örn. "red evening dress") — kıyafet değişiyor ama yüz
   kalıyorsa LoRA doğru öğrenmiş.
6. Süreyi ölç (LoRA belleğe çok az yük getirir; ~1,5 dk beklenir).

## Adım 5 — Sonra

- Sonuç ölçütü geçerse: gece betiği (Forge API, `--api` ile başlat) + promptların yerel modele uyarlanması.
  Betiği kimin çalıştıracağı karar bekliyor (sahibi mi, bilgisayara kurulacak Claude Code mu).
- Geçmezse: daha çok/daha çeşitli veriyle yeniden eğitim ya da başka bir temel model; olmazsa
  ChatGPT/Grok/Gemini düzeni sürer, Forge yalnız reddedilen kareler için yedek.
- Sonuçlar `5_gorsel_sistemi.md` D-7'ye işlenir.

## Dikkat

- Oyunun kuralı değişmez: çekici, **çıplaklık yok**. LoRA verisi zaten bu çizgide.
- Eğitim verisi Civitai'ye yüklenir; model özel tutulur. İstenmezse RunPod yolu veriyi dışarıya
  açmadan eğitir.
