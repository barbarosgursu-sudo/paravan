# Resim üretimi — işleyiş

Oyunun resimleri burada üretilir. Her vaka bir klasör: `v3/`, `v4/` …
Her şey GitHub'da durur; bilgisayar kapalıyken telefondan (bulut Claude) da görülür.

## Kim ne yapar

| Kim | Ne yapar |
|---|---|
| **Oğuz Bey** (14 Kasım 2026'dan beri) | Üretimi yürütür: yerel Claude'a `vaka N resimlerini üret` der; takılınca sorulana cevap verir; resim onayında son karar onun. Web'de üretilecekleri Barbaros'un ChatGPT hesabıyla üretir. |
| **Barbaros** | Kurallar: yeni kural ya da kural değişikliği, kod ve altyapı ona danışılır. Codex/ChatGPT hesabı onun. |
| **Codex** | İstemlerden resim üretir → `uretilen/`. Yerel Claude çalıştırır. Kuralları: `AGENTS.md` |
| **Yerel Claude** | Denetler, onaylar ya da düzeltme notuyla reddeder, oyuna gömer, GitHub'a gönderir. Kuralları: `CLAUDE.md` |
| **Bulut Claude** | Bilgisayar kapalıyken: istem yazar, onaylıları inceler, oyunu düzeltir. Resim üretemez. |

## Döngü

1. Hikâye donar → Claude'a **`istemleri hazırla N`** (yerel ya da bulut) → sahibi listeyi onaylar.
2. Yerel Claude'a **`vaka N resimlerini üret`**. Yerel Claude kendi döngüsünü yürütür:
   Codex'i çalıştırır → gelen resmi denetler → onaylar ya da düzeltme notuyla yeniden ürettirir →
   ara ara GitHub'a gönderir.
3. Hepsi onaylanınca resimleri oyuna gömer, testleri çalıştırır, gönderir.
4. Sahibine soru sormaz. 3. kez reddedilecek ya da filtreye takılan resimleri biriktirir; sonda hepsini tek
   listede verir (`WEB_LISTESI.md`), sahibi web ChatGPT'de toptan üretir.

## Bir vakanın klasörü

| klasör / dosya | ne | GitHub'da |
|---|---|---|
| `LISTE.md` | resim listesi: no · tür · ne · önce onaylanması gereken | ✓ |
| `DURUM.md` | ne bitti, ne bekliyor, sıradaki ne | ✓ |
| `WEB_LISTESI.md` | sahibinin web'de üreteceği resimler | ✓ |
| `prompts/G<n>.md` | her resmin istemi | ✓ |
| `referanslar/` | yüzler, pozlar, mekânlar (dekoltesiz) | ✓ |
| `uretilen/` | denetim bekleyen | ✓ |
| `onayli/` | onaylanan | ✓ |
| `red/` | reddedilen | ✗ yalnız bilgisayarda |
| `yanyana/` | resmin oyundaki hâli (denetim kanıtı) | ✓ |
| `uretim_kaydi.md` | Codex'in her üretimi | ✓ |

## Ortak referanslar: `uretim/referanslar/`

Her vakada aynı kalanlar: Peri ve Cengo baş kırpıkları, kapalı giyimli tarz gövdeleri (kadın / erkek / iri erkek),
büro ve tarz mekânları. **Hepsi dekoltesiz** (güvenlik filtresi referanstaki dekolteye takılıyor). Vakaya özgü
referanslar o vakanın `referanslar/` klasöründe.

## Belgeler

- Görsel kurallar: `sablon/5_gorsel_sistemi.md` → **H. Görsel standart**
- İstem kalıpları (onaylı tarz): `ISTEM_KALIPLARI.md`
- Vaka 3'ün Codex deneyimi (gerekçeler, ret geçmişi, filtre deneyi): `v3_eski/BIRIKIM.md`
