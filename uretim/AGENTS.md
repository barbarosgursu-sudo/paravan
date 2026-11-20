# Codex talimatı — resim üretimi

> Kurallar `sablon/kurallar/KURALLAR.md`'de (bu klasörden `../../sablon/kurallar/KURALLAR.md`); kodu geçen kuralı oradan oku.
> Aşağıdaki adımlar iş talimatıdır; her adımın kuralı yanındaki kodda.

Bir çizgi oyunun resimlerini üretiyorsun. Türkçe, kısa yanıt ver (CODEX-1).
Çalışma yeri: `uretim/v<N>/` (o vakanın klasörü). Seni genellikle yerel Claude çalıştırır:
`codex exec --approve-for-me "AGENTS.md'ye göre G<n> resmini üret."`

## Klasörler ve izinler — CODEX-3, CODEX-4, CODEX-12

| yer | ne | sen |
|---|---|---|
| `prompts/G<n>.md` | istem, sıralı referanslar, kontrol notu | OKU; yalnız sonuna `## ENGELLENDİ` ekleyebilirsin |
| `referanslar/` ve `../referanslar/` | sabit referanslar | istemin "Referanslar" listesinde geçiyorsa KULLAN; değiştirme |
| `onayli/` | onaylanan resimler | listede geçiyorsa KULLAN; değiştirme |
| `uretilen/` | senin çıktın | `G<n>.png` YAZ; buradakini referans VERME |
| `red/` | reddedilenler | DOKUNMA, referans VERME |
| `uretim_kaydi.md` | kayıt | sonuna satır EKLE |
| `kayit/kol<k>.md` | paralel kolun kaydı | komut bu dosyayı adlandırırsa kaydı `uretim_kaydi.md` yerine BURAYA ekle (yoksa oluştur) |

Referans yalnız `referanslar/` ve `onayli/`'den — CODEX-4. Yazma sınırları (klasör dışı yok, git yok, talimat dosyasına not yok,
ek dosya yok) — CODEX-5.

## Komut: `üret`, `üret G50 G51` ya da "G<n> resmini üret"

`prompts/`'u numara sırasıyla gez (ya da yalnız adı verileni) — CODEX-6. Her `G<n>.md` için:

1. **Atla** (CODEX-7): `onayli/G<n>.png` ya da `uretilen/G<n>.png` varsa.
2. **Atla** (CODEX-7): dosyada `## ENGELLENDİ` varsa.
3. **Atla** (CODEX-7): Referanslar'daki bir `onayli/G<k>` dosyası yoksa (henüz onaylanmadı).
4. **Üret** (CODEX-8): Referanslar listesindeki dosyaların HEPSİNİ listedeki SIRAYLA görüntü aracına ver ("birinci referans" =
   listedeki 1.). İstem = `## İstem` bölümündeki metin AYNEN; `## Düzeltme` bölümleri varsa hepsini sırayla sonuna ekle.
   İstem aynen — CODEX-8: kısaltma, yumuşatma, çeviri, kendi eklemen yok.
5. **Kaydet** (CODEX-9): `uretilen/G<n>.png`.
6. **Güvenlik filtresi engellerse** (CODEX-10): AYNI istem ve AYNI referanslarla bir kez daha dene. Yine engellenirse
   `prompts/G<n>.md` sonuna `## ENGELLENDİ` + tarih + mesajın kısası ekle, sıradakine geç.
7. **Başka hata** (CODEX-11): bir kez yeniden dene; olmazsa sıradakine geç.
8. **Kayıt** (CODEX-12): her çağrıdan sonra (engel, hata, yeniden deneme dahil) `uretim_kaydi.md` tablosuna satır ekle:
   G no | araç/model | araca giden TAM istem (`<br>` ile) | referanslar ve sırası | boyut/kalite | istemi aynen mi
   aldın | sonuç. Bildirilmeyen model/ayarı tahmin etme, "bildirilmedi" yaz.
   Kayda NORMAL izinle, dosyanın SONUNA ekleyerek yaz (silip yeniden oluşturma). Yazamazsan yükseltilmiş izne geçme;
   satırı `kayit_bekleyen.md`'ye yaz, devam et.

Bitince kısa özet (CODEX-14): üretilen · engellenen · referans bekleyen.

## Yapma

- Beğenmesen de yeniden üretme — CODEX-15.
- Resme yazı, filigran, imza yok — CODEX-16.
