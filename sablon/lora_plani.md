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

## Adım 0 — Eğitime özel Peri seti (12 Ekim 2026, sahibinin kararı; önce yalnız Peri)

Oyun görselleri hep aynı bej zemin ve kadrajda; LoRA'ya çeşitlilik lazım. ChatGPT'de **25 görsel**,
iş sayfası: https://claude.ai/artifact/VZx993DUZZniyMiYrtsExm (üreticisi `sablon/lora_sayfa/uret.py`).
- Sohbet 1 · Yakın yüz (L1–L8, kare): açılar (önden, ¾ sol/sağ, profil, yukarıdan, aşağıdan), ifadeler,
  ışıklar. **L1 = setin yüz referansı**: önce yalnız L1 üretilir, Claude asıl Peri'ye (G1-1) benzerliğini
  onaylar; sonra devam.
- Sohbet 2 · Bel üstü (L9–L17, 2:3), Sohbet 3 · Boydan (L18–L25, 2:3): 9 farklı kıyafet, farklı zemin
  ve ışık. Her promptta referans: L1 (yüz) + G1-1 (vücut hatları); kimlik ve beden satırı sabit.
- Her gelen görselde Claude yüzü L1 ile karşılaştırır; kayanlar elenir, yeniden ürettirilir.
- Tutarsa aynı yöntemle Cengo seti.
Bu set Adım 1'deki oyun görselleriyle birleştirilebilir (en iyi 25–30 seçilir).

**Durum (12 Ekim 2026): Peri seti BİTTİ — 25/25.** Yeniden üretilen: L1 (yaş, kaş), L3 (yüz dolgun;
düzeltme tutmadı, yeni sohbette baştan), L11 (iki ayrı küpe), L14 (yaş). L8'deki ben gibi nokta
rötuşla silindi. **Sahibinin kararı: oyun görselleri eklenmiyor** — set tek başına yeterli ve daha
çeşitli; oyun görselleri hep aynı bej zemin/kadraj. Yani Adım 1–2 Peri için atlandı.
Eğitim paketi (`prvperi_egitim_seti.zip`: `L1–L25` görseller + aynı adlı `.txt`; sahibinin dosyaları L1…L25 adında, yazılar da öyle) sahibine verildi;
görseller depoda yok (43 MB), yazılar `sablon/lora_sayfa/egitim_yazilari/`'nda.
Yazıların kuralı: `prvperi, <stil>, <kadraj>, <açı/poz>, <ifade>, <kıyafet>, <küpe>, <saç biçimi>,
<zemin/ışık>`. Yüz, saç RENGİ, ruj yazılmaz (tetiğe bağlansın). Değişebilir olması istenen her şey
yazılır: saç biçimi (topuz/açık), küpe (inci/altın), tırnak (kırmızı), ifade çizgileri (`furrowed
brows`), ışık (`bright sunlight` — L21'de saç güneşte parlak). Ders: ChatGPT'de "düzelt" yüzeyi
(cilt, küpe) düzeltir, yüzün iskeletini (yüz hattı) düzeltmez — o zaman yeni sohbet. Sağa dönük
üç çeyrekte yüz dolgun çıkıyor; sert ifadeler (temkinli, çatık) yaşı yukarı itiyor.

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

## Sonuç — Peri LoRA (12 Ekim 2026)

Civitai Training Studio, **SDXL Standard**, 25 görsel, etiket (tags) kipi, Auto-label = Manual (bizim
`.txt`'ler), tetik `prvperi`, 2000 adım / 10 epoch, 500 Buzz (~0,5 $), 1 sa 30 dk. Civitai'de
**11 Kasım 2026'ya kadar** duruyor; 10 checkpoint'in hepsi sahibinde (`C:\lora\peri_checkpoints`).
Forge'da kullanılan: `prvperi_e10` (ana), `prvperi_e07` (yedek) → `C:\forge\webui\models\Lora`.

Forge denemeleri (DreamShaper XL Lightning, 6 adım, CFG 2, DPM++ SDE Karras, GPU Weights 4096):
- 0.8, boydan 832×1216: kimlik tutarlı; ama **yüz ~100 px → gözler bozuk/orantısız**. Sebep çözünürlük,
  LoRA değil (yakın portrede gözler temiz). Çözüm: **ADetailer** (face_yolov8n). 4 görsel 7 dk 23 sn.
- Zümrüt tayyörde "hand on hip" tutmadı, el yakada (L12/L18 pozu ezberlenmiş).
- 0.6: kıyafet serbest (kırmızı gece elbisesi tuttu) ama **yüz Peri'den uzaklaştı** → kullanma.
- 0.8 yakın portre: aynı kadın ama yüz geniş/yuvarlak, göz kapağı ağır, "alım" eksik.
- **1.0 + güzellik tarifi + negatif → L1'e en yakın.** Sabit ayar bu:
  - pozitif: `<lora:prvperi_e10:1.0> prvperi, painted illustration, semi-realistic graphic novel style,
    beautiful woman, high cheekbones, slim face, sharp jawline, bright eyes, …`
  - negatif: `wide face, round face, double chin, heavy eyelids, tired eyes, old, wrinkles`
Sırada: ADetailer kurulumu → bu ayarlarla boydan deneme → kıyafet esnekliği 1.0'da yeniden sınanır.
- **ADetailer (face_yolov8n, varsayılan ayarlar, prompt boş) + 1.0 + tarif/negatif, boydan:** gözler
  simetrik ve net, yüz L1'e yakın, 4/4 tutarlı. **Başarı ölçütü geçti.** Kalan küçük şeyler: 1.0'da
  "evening dress" 3/4'te kısa kalem elbiseye kaydı (setteki kalem etek siluetinin ezberi) → uzun
  isteniyorsa `floor-length` yaz; "plain beige background" 2/4'te iç mekâna döndü.
  Not: Forge yeniden başlayınca ayarlar varsayılana döner (CFG 5, 20 adım…) — her açılışta kontrol.

## Cengo seti (12 Ekim 2026, sahibinin kararı: Peri yöntemiyle aynı)

**16 Ekim 20:23: sahibinin kararı — 25'in tamamı şimdi üretiliyor** (Vaka 3'ten önce; Vaka 3 süresine girmez).
Yeni amaç: LoRA'dan bağımsız olarak iki set (L1–L25, C1–C25) **ChatGPT'ye poz/kıyafet/yüz referansı**
olarak kullanılır — her vakanın temel figürü L1/C1 (yüz) + G1-1/G14-1 (beden) ile, zor pozlar ilgili L/C
ile ("YALNIZ poz; kıyafeti ve arka planı alma"). En çok 5 referans. Peri'nin 25 görseli küçültülüp
depoya konacak (sahibinden bekleniyor), dizin sayfasıyla.

İş sayfası: https://claude.ai/artifact/XxseE7eCNqgr8oPqy8V6Nc (üreticisi `sablon/lora_sayfa/uret_cengo.py`).
25 görsel, C1–C8 yakın yüz · C9–C17 bel üstü · C18–C25 boydan. Referans G14-1 (kahverengi ceket);
**C1 = setin yüz referansı**, Claude onaylamadan devam edilmez. Tetik `prvcengo`. Boncuklu bileklik
yalnız oyun kıyafetlerinde (C9, C10, C18, C19) — eğitim yazısında açıkça yazılacak ki promptla
açılıp kapanabilsin. Peri'den dersler baştan uygulandı: sert ifadeler yaşı iter (düzelt: cilt),
sağa dönük üç çeyrekte yüz dolgunlaşabilir (düzelt tutmazsa yeni sohbet).
- **Eller:** boydan görselde parmak uçları/tırnaklar kaynıyordu (el ~70 px; kırmızı tırnak kırmızı
  elbiseye karışıyor). Çözüm: ADetailer **2nd** sekmesi `hand_yolov8n.pt`, prompt `beautiful hands,
  five fingers, natural nails, nude nail polish`, negatif `fused fingers, extra fingers, deformed
  hands, blob`; ana negatife `deformed hands, fused fingers, extra fingers, missing fingers`. Sonuç:
  eller ayrık ve doğal, yüz değişmedi. Bedel: **4 görsel 16 dk 52 sn (~4,2 dk/görsel)** → 8 saatte ~110.
  Kalan: tırnak hâlâ kırmızı (ana prompt kazanıyor) → ana prompta `nude nail polish`.
- **Tırnak:** ana prompta `nude nail polish`, ana negatife `red nails` → 3/4 ten rengi, 1/4 hâlâ
  koyu/bordo (dördüncü görsel). Eller sağlam. Bu ayar gece betiğinin sabitlerine girer.

### Sabit Peri ayarı (gece betiği bundan başlar)
- Model DreamShaper XL Lightning, 6 adım, CFG 2, DPM++ SDE Karras, 832×1216 (portre 1024×1024), GPU Weights 4096
- Pozitif başı: `<lora:prvperi_e10:1.0> prvperi, painted illustration, semi-realistic graphic novel style,
  beautiful woman, high cheekbones, slim face, sharp jawline, bright eyes,` … sonu `, nude nail polish`
- Negatif: `wide face, round face, double chin, heavy eyelids, tired eyes, old, wrinkles, deformed hands,
  fused fingers, extra fingers, missing fingers, red nails`
- ADetailer 1st `face_yolov8n.pt` (prompt boş); 2nd `hand_yolov8n.pt` (yalnız el görünen kadrajlarda)
- Seçilenler Extras → R-ESRGAN 4x+ ×1.5 (1248×1824)

## Gece betiği ilk gerçek çalışma (12 Ekim 2026, 17:15)
`sablon/gece/` (gece.py + is_listesi.json + baslat.bat) → sahibinde `C:\lora\gece_betik`. Forge
`webui-user.bat` → `set COMMANDLINE_ARGS=--api`. **Çalıştı:** 17:15'te kendiliğinden başladı, 17:28 bitti.
Portre 2 görsel 5,2 dk (el kapalı), boydan 2 görsel 7,9 dk (el açık). Yüzler 4/4 Peri, eller sağlam.
Kayan: tayyörde `silk blouse under jacket` tutmadı (L12 ezberi: bluzsuz derin V) ve `full body`
yerine dizden kesik geldi. Tayyör için sırada: bluz rengini/ilikliliğini açıkça yaz + negatife
`deep cleavage, bare chest`; boydan için `feet visible, shoes visible` ekle.

## Eller — karar: kalite önce (12 Ekim 2026, sahibinin kararı: süre önemsiz, vaka başına ~60 görsel)
17:40 el denemesi (ADetailer el 0.5): sahibine göre ellerin hepsinde sorun. Sıralı plan:
1. **Hires. fix** (betikte varsayılan açık: ×1.5, R-ESRGAN 4x+, 6 adım, denoise 0.45) — ek indirme yok.
2. Yetmezse **ControlNet depth/openpose**: her iş için onaylı ChatGPT görselinden duruş + el iskeleti;
   LoRA yüzü verir. SDXL depth modeli (~2,5 GB) indirilecek.
3. Yetmezse Lightning olmayan SDXL modeli, 25–30 adım.
Poz kuralı (her durumda): Forge işlerinde mümkünse eller cepte/arkada/kadraj dışında.
- **19:00 Hires. fix denemesi (API hatası 2 adımda giderildi: hr_additional_modules + açık hr_sampler_name):**
  çalıştı, ~5–6 dk/görsel. **Sonuç: el görünen 6 görselin hiçbirinde düzgün el yok** (altı parmak,
  eğik). Hires. fix + ADetailer el 0.5 elleri ÇÖZMÜYOR. Sırada tek ciddi aday: ControlNet (onaylı
  ChatGPT görselinden duruş/el iskeleti). Tutmazsa karar: el görünen kareler ChatGPT'de kalır.

## Arka planlar (Forge) — plan (12 Ekim 2026)
Kişisiz mekân LoRA'sız ve ADetailer'sız üretilir (`"karakter": "mekan"` → gece.py MEKAN): stil satırı +
"empty room, no people, eye level, warm daylight"; negatif kişi + YAZI (tabela, plaka, etiket).
896×1192 (3:4) + Hires. fix ×1.5 → 1344×1788, oyunda 900×1200'e iner. El sorunu yok, bu yüzden
Forge'un en güçlü olduğu iş bu olmalı. Deneme: `is_listesi_mekan.json` = Vaka 2 A15, A18, A19, A22,
her biri 2 (`baslat_mekan.bat`, 21:15). Denetim aynı: yazı taraması, nesne sayımı (§E), doğru şehir.
Tarz tutarlılığı gerekirse sonraki adım: ChatGPT tarz referansından (G35-1 vb.) IP-Adapter ya da
img2img; ilk denemede düz txt2img.
