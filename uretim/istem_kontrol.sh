#!/usr/bin/env bash
# İstem kontrol listesi (13 Kasım 2026, sahibinin isteği: "kuralları baştan tam uygula, iki kez üretmeyelim").
# Kullanım: uretim/istem_kontrol.sh <prompts/G<n>.md> [...]   → eksikleri basar; eksik varsa çıkış 1.
# dongu.sh her istemi üretmeden önce bundan geçirir; geçmeyen ÜRETİLMEZ.
# Kaynak kurallar: ISTEM_KALIPLARI.md (§1–10), 5_gorsel_sistemi.md (C0 SR-*, D-2/3/4, H1–H6, I), BIRIKIM.md §6–8.
# Mekanik olarak yakalanabilenleri yakalar; anlamı (satırlara uyuyor mu, Nurcan) yine istemi yazan okur.
set -u
hata=0
for f in "$@"; do
  eksik=()
  ad=$(basename "$f" .md)
  tur=$(grep -m1 '^- tür:' "$f" | sed 's/^- tür: *//; s/ *[·(].*//')
  istem=$(sed -n '/^## İstem/,$p' "$f")
  refs=$(sed -n '/^## Referanslar/,/^## /p' "$f" | grep -E '^[0-9]+\. ')
  baslik=$(head -1 "$f")
  has() { grep -qF -- "$1" <<<"$istem"; }

  # Her istemde (H6, D-11)
  grep -q '^## Kontrol' "$f"          || eksik+=("## Kontrol bölümü yok")
  grep -q '^## İstem' "$f"            || eksik+=("## İstem bölümü yok")
  has 'hiçbir yazı, harf, rakam, logo' || eksik+=("yazı yasağı satırı yok")
  has 'Görselin oranı TAM'            || eksik+=("oran satırı yok")
  n_ref=$(grep -c . <<<"$refs"); [ "$n_ref" -le 5 ] || eksik+=("referans 5'ten fazla (D-2)")
  grep -qiE 'peri_beden|L1_peri|L14_|L9_|L19_|L25_|poz_peri_|peri_kirmizi' <<<"$refs" && eksik+=("dekolteli Peri referansı (BIRIKIM §4, §7)")

  case "$tur" in
    figür)
      grep -q '^## Satırlar' "$f" && [ -n "$(sed -n '/^## Satırlar/,/^## /p' "$f" | grep -vE '^## |^\s*$')" ] \
                                       || eksik+=("## Satırlar bölümü yok ya da boş (ISTEM_KALIPLARI §10, SR-E)")
      has 'TAM İKİ KOL'                || eksik+=("'TAM İKİ KOL, İKİ EL' yok (H6)")
      has 'Başın açısı'                || eksik+=("bakış satırı yok (H3)")
      zemin=$(grep -o 'Arka plan: düz, tek renk [^;]*' <<<"$istem")
      grep -qE 'açık bej|gri-mavi' <<<"$zemin" || eksik+=("zemin satırı yok ya da renk açık bej/gri-mavi değil (H4)")
      grep -q 'yeşil' <<<"$zemin"      && eksik+=("yeşil zemin (H4: Vaka 4'ten sonra yok)")
      has 'Çıplaklık yok'              || eksik+=("çıplaklık satırı yok")
      if grep -q 'tarz_govde_' <<<"$refs"; then   # yeni karakter temeli (§4)
        has 'benzemiyor'               || eksik+=("yeni karakter: 'X'e benzemiyor' satırı yok (D-4, BIRIKIM §8.7)")
        has 'Son referans YALNIZ'      || eksik+=("tarz örneği cümlesi yok (§3)")
        grep -q '^- zemin denemesi:' "$f" || eksik+=("yeni temel: '- zemin denemesi: G<n>z' satırı yok (H4 iki zemin)")
      fi
      if grep -qE '^# G[0-9a-z]+ — (Peri|Cengo)' <<<"$baslik"; then
        grep -qi 'kıyafet kartı' <<<"$refs" || eksik+=("Peri/Cengo figürü: kıyafet kartı referansı yok (SR-C)")
      fi
      ;;
    "ara kare"|detay)
      grep -q '^## Satırlar' "$f"      || eksik+=("## Satırlar bölümü yok (SR-D, SR-K)")
      has 'Yarı gerçekçi dijital'      || eksik+=("tarz paragrafı yok (§1)")
      ;;
    "arka plan")
      has 'Yarı gerçekçi dijital'      || eksik+=("tarz paragrafı yok (§1)")
      has 'İnsan yok'                  || eksik+=("'İnsan yok' satırı yok (§7)")
      ;;
    "kıyafet kartı")
      has 'TAM BOY'                    || eksik+=("kart TAM BOY değil (I)")
      has 'Çekicilik'                  && eksik+=("kartta çekicilik satırı var (I, §9)")
      ;;
    "kart afişi") ;;
    *) eksik+=("tür okunamadı: '- tür:' satırı") ;;
  esac

  if [ ${#eksik[@]} -gt 0 ]; then
    hata=1; echo "$ad:"; printf '  - %s\n' "${eksik[@]}"
  fi
done
exit $hata
