# Vaka 6 — üretim durumu

**13 Kasım 2026, öğleden sonra.** Parti 1 (temeller, 20 resim) istemleri hazır ve `istem_kontrol.sh`'tan geçti. Üretim
BAŞLAMADI — sahibi yeni pencerede "başla" diyecek.

## Yeni pencerede "başla" denince

1. `git pull` (yalnız `main`). Okuma: kök `CLAUDE.md` → `kaynak/DEVIR.md` en üst bölüm → `uretim/CLAUDE.md` → bu dosya →
   `LISTE.md`. Resim kuralları: `uretim/ISTEM_KALIPLARI.md`, `uretim/v3_eski/BIRIKIM.md`, `sablon/5_gorsel_sistemi.md`.
2. `cd uretim && ./istem_kontrol.sh v6/prompts/*.md` → çıkış 0 olmalı.
3. Saat: `sablon/vakalar/vaka6_baslangic.md` §2'ye "8 Görsel (Parti 1)" satırının başlangıcını yaz (İstanbul saati).
4. Döngü (arka planda): `cd uretim && KOL=2 DONGU_LOG=<scratchpad, /c/… biçiminde> ./dongu.sh 6`. Üretilecek: G1, G2, G3,
   G3z, G4z, G5, G5z, G7, G7z, G8, G8z, G9, G9z, G10–G16 (20 resim; G4 zaten `uretilen/`'de). ~15 dk, 5 saatlik kotanın ~%24'ü.
5. Gelen her resmi denetle (`uretim/CLAUDE.md` → Denetim; kartlarda tam boy, yüz, ayakkabı). Temel figürlerde iki zemini
   `arac_kes.js` + `arac_yanyana.js` ile kesip saç kenarı temiz olanı seç; boy ölçüsünü not et (H2).
6. **Temeller sahibine onaya:** onaylarsan `onayli/`'ye; tek sayfada yan yana (eski karakterlerle de) göster. Takılan temel
   HEMEN sahibine (web paketi). Bitince DURUM ve vaka6_baslangic güncelle, commit, `git push origin HEAD:main`.

## Ölçüm (13 Kasım, deneme)

| | |
|---|---|
| resim başına Codex süresi, 1 kol | 94–99 sn (G7, G8, G9) |
| resim başına Codex süresi, 2 kol | 94–114 sn (G3, G4, G5, G10; aynı anda) |
| 5 saatlik kota | 7 resim = %8 → resim başına ~%1,2 (~80 resim / 5 sa) |
| haftalık kota | 7 resim < %1 |
| hız sınırı / kota mesajı | görülmedi |

## Geçmiş

- 12:08–12:12: G3, G4, G5, G10 kazara 2 kolla (bkz. `uretim_kaydi.md`). 12:14–12:18: G7, G8, G9 1 kolla.
- Sahibi Müzeyyen'i Nadide'ye benzetti, müdür odasını eski mekânların yanında düz buldu → kurallar baştan okundu, eksikler
  (Satırlar, iki zemin, benzemiyor, boy tablosu) kapandı, `istem_kontrol.sh` yazıldı; G3, G5, G7, G8, G9, G10 `red/`'e.
