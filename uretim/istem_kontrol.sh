#!/usr/bin/env bash
# İstem kontrol listesi (13 Kasım 2026, sahibinin isteği: "kuralları baştan tam uygula, iki kez üretmeyelim").
# Kullanım: uretim/istem_kontrol.sh <prompts/G<n>.md> [...]   → eksikleri basar; eksik varsa çıkış 1.
# dongu.sh her istemi üretmeden önce bundan geçirir; geçmeyen ÜRETİLMEZ.
# Kaynak kurallar: ISTEM_KALIPLARI.md (§1–10), 5_gorsel_sistemi.md (C0 SR-*, D-2/3/4, H1–H6, I), BIRIKIM.md §6–8.
# Mekanik olarak yakalanabilenleri yakalar; anlamı (satırlara uyuyor mu, Nurcan) yine istemi yazan okur.
set -u
hata=0
# Zemin adayları tek kaynaktan (14 Kasım 2026): uretim/referanslar/zeminler.tsv (arac_zemin.py de oradan okur).
ZEMINLER=$(tail -n +2 "$(dirname "$0")/referanslar/zeminler.tsv" | cut -f1 | paste -sd'|')
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
      zemin=$(grep -o 'Arka plan: düz, tek renk [^;]*' <<<"$istem" | head -1 | sed 's/Arka plan: düz, tek renk //')
      grep -qxE "$ZEMINLER" <<<"$zemin" || eksik+=("zemin satırı yok ya da renk zeminler.tsv'de değil: '$zemin' (H4)")
      grep -q 'yeşil' <<<"$zemin"      && eksik+=("yeşil zemin (H4: Vaka 4'ten sonra yok)")
      # Kıyafetin zemini arac_zemin.py ile seçilir ve v<N>/zemin.tsv'ye yazılır (14 Kasım 2026); istem ona uymalı.
      # Zemin denemesi çifti (G<n> ve G<n>z, '- zemin denemesi:' satırı) bilerek iki renklidir → atlanır.
      ztsv="$(dirname "$(dirname "$f")")/zemin.tsv"
      anahtar=$(grep -m1 '^- tür:' "$f" | grep -o 'anahtar: `[^`]*`' | sed 's/anahtar: `//; s/`$//')
      if ! grep -q '^- zemin denemesi:' "$f"; then
        beklenen=$([ -f "$ztsv" ] && tail -n +2 "$ztsv" | awk -F'\t' -v a="$anahtar" 'index(a,$1)==1 && length($1)>n {n=length($1); z=$2} END{print z}')
        yeni_konuk_temeli=$(grep -q 'tarz_govde_' <<<"$refs" && ! grep -qE '^# G[0-9a-z]+ — (Peri|Cengo)' <<<"$baslik" && echo 1)
        if [ -z "$beklenen" ] && [ -n "$yeni_konuk_temeli" ]; then
          [ "$zemin" = "açık bej" ] || eksik+=("yeni konuk temeli zemin.tsv'den önce gelir → varsayılan 'açık bej' olmalı (H4)")
        elif [ -z "$beklenen" ]; then eksik+=("kıyafet zemin.tsv'de yok ('$anahtar'): önce kaynak/arac_zemin.py --kiyafet … --yaz")
        elif [ "$beklenen" != "$zemin" ]; then eksik+=("zemin '$zemin', ama zemin.tsv bu kıyafete '$beklenen' diyor")
        fi
      fi
      has 'Çıplaklık yok'              || eksik+=("çıplaklık satırı yok")
      if grep -q 'tarz_govde_' <<<"$refs" && ! grep -qE '^# G[0-9a-z]+ — (Peri|Cengo)' <<<"$baslik"; then   # yeni karakter temeli (§4); Peri/Cengo yeni değil
        has 'benzemiyor'               || eksik+=("yeni karakter: 'X'e benzemiyor' satırı yok (D-4, BIRIKIM §8.7)")
        has 'Son referans YALNIZ'      || eksik+=("tarz örneği cümlesi yok (§3)")
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
      grep -q 'Kompozisyon:' "$f"      || eksik+=("'Kompozisyon:' satırı yok — eski mekân kalıbı tekrar eder (§7a)")
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
