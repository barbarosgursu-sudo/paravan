#!/usr/bin/env bash
# İstem kontrol listesi (13 Kasım 2026, sahibinin isteği: "kuralları baştan tam uygula, iki kez üretmeyelim").
# Kullanım: uretim/istem_kontrol.sh <prompts/G<n>.md> [...]   → eksikleri basar; eksik varsa çıkış 1.
# dongu.sh her istemi üretmeden önce bundan geçirir; geçmeyen ÜRETİLMEZ.
# Kurallar: ISTEM-*, SATIR-* (sablon/kurallar/KURALLAR.md; ISTEM-52). Eski kaynaklar: arsiv/uretim/ISTEM_KALIPLARI.md (§1–10),
# arsiv/sablon/5_gorsel_sistemi.md (C0 SR-*, D-2/3/4, H1–H6, I), arsiv/uretim/v3_eski/BIRIKIM.md §6–8.
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
  # Sigara yok (16 Kasım 2026, kural 19a): istem sigarayı hiç anmaz — "sigara yok" demek bile üreticiye onu hatırlatır.
  grep -qiE 'sigara|izmarit|kül tablası|tütün|puro|pipo|nargile|çakmak|cigar|smoke|smoking' <<<"$istem" && eksik+=("istemde sigara/tütün sözü var (kural 19a)")
  # --- Adım 4 madde 3 (21 Kasım 2026, sahibi tek tek onayladı) ---
  # Referans yalnız referanslar/ ve onayli/'den: reddedilen ya da onaylanmamış resim hatasını yeni resme taşır — CODEX-4.
  grep -qE '(^|[/`. ])(red|uretilen)/' <<<"$refs" && eksik+=("referansta red/ ya da uretilen/ yolu var — referans yalnız referanslar/ ve onayli/'den (CODEX-4)")
  # "Yorgun göz" model yüze morluk çizdi — ISTEM-39.
  grep -qiE 'yorgun göz|yorgun bakan göz' <<<"$istem" && eksik+=("'yorgun göz' yazılmış — model morluk çiziyor; 'iki gözün altında hafif koyu halka; morluk ya da yara yok' yaz (ISTEM-39)")
  # Tarz örneği resmi referans listesinde EN SONDA; başta olursa model onu çizilecek kişi sanıyor — ISTEM-10.
  if grep -q 'tarz_ornek_' <<<"$refs" && ! grep -q 'tarz_ornek_' <<<"$(tail -1 <<<"$refs")"; then
    eksik+=("tarz örneği (tarz_ornek_*) referans listesinde son sırada değil (ISTEM-10)")
  fi
  # Oran resmin türüyle tutar: figür 4:5, arka plan/ara kare/detay 3:4, kıyafet kartı 2:3, kart afişi 9:16 — ISTEM-3.
  case "$tur" in figür) oran=4:5 ;; "arka plan"|"ara kare"|detay) oran=3:4 ;; "kıyafet kartı") oran=2:3 ;; "kart afişi") oran=9:16 ;; *) oran= ;; esac
  if [ -n "$oran" ] && has 'Görselin oranı TAM' && ! has "Görselin oranı TAM $oran"; then
    eksik+=("oran türe uymuyor: $tur → TAM $oran olmalı, istemde '$(grep -o 'Görselin oranı TAM [0-9:]*' <<<"$istem" | head -1)' (ISTEM-3)")
  fi
  # Peri'ye "kumaş kalın ve mat" yazılmaz (dekolteyi bastırdı; yalnız Gizem'in tişörtü) — ISTEM-22.
  if grep -qE '^# G[0-9a-z]+ — Peri' <<<"$baslik" && grep -qiE 'kalın ve mat|kalın, mat' <<<"$istem"; then
    eksik+=("Peri isteminde 'kalın ve mat' kumaş satırı var — dekolteyi bastırır, yalnız Gizem'de (ISTEM-22)")
  fi

  case "$tur" in
    figür)
      grep -q '^## Satırlar' "$f" && [ -n "$(sed -n '/^## Satırlar/,/^## /p' "$f" | grep -vE '^## |^\s*$')" ] \
                                       || eksik+=("## Satırlar bölümü yok ya da boş (ISTEM_KALIPLARI §10, SR-E)")
      has 'TAM İKİ KOL'                || eksik+=("'TAM İKİ KOL, İKİ EL' yok (H6)")
      has 'Başın açısı'                || eksik+=("bakış satırı yok (H3)")
      # Adım 4 madde 3 (22 Kasım 2026, sahibi): kadraj kalıbı ISTEM-5, bakış burun geometrisiyle ISTEM-6, Peri'de çekicilik ISTEM-21.
      has 'DİKEY 4:5'                  || eksik+=("kadraj satırında 'DİKEY 4:5' yok (ISTEM-5)")
      has 'Uyluk ortasından'           || eksik+=("kadraj satırında 'Uyluk ortasından yukarısı' yok (ISTEM-5)")
      has 'burnu kadrajın soluna'      || eksik+=("bakış burun geometrisiyle yazılmamış: 'Başın açısı: burnu kadrajın soluna bakıyor…' (ISTEM-6)")
      if grep -qE '^# G[0-9a-z]+ — Peri' <<<"$baslik"; then
        has 'Çekicilik:'               || eksik+=("Peri figürü: 'Çekicilik:' satırı yok (ISTEM-21)")
      fi
      # Varyant (birinci referans onaylı resim, başlıkta "temel" yok): temelin AYNISI, değişen yalnız poz ve ifade — ISTEM-14.
      if head -1 <<<"$refs" | grep -q 'onayli/G' && ! grep -qi 'temel' <<<"$baslik"; then
        has 'AYNISI'                   || eksik+=("varyant: 'Birinci referans görseldeki X'in AYNISI' satırı yok (ISTEM-14)")
        has 'Değişen'                  || eksik+=("varyant: 'Değişen yalnız poz ve ifade' satırı yok (ISTEM-14)")
        # Kardeş ifadeden ayıran satır (ferruh.terli ≈ ferruh.alingan) — SATIR-17.
        grep -qE "^Bu (ifadeyi|figürü) .*ayıran:" <<<"$istem" || eksik+=("varyant: 'Bu figürü <kardeş ifade>'den ayıran: …' satırı yok (SATIR-17)")
      fi
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
        # Gerçekten yeni karakter (kendi baş kırpığı yok — dönen Gizem gibi değil): baş silik referans söylenir, yoksa model
        # referanstaki yüzü kopyalıyor (V3: Kenan, Sedat → V1'in Serkan'ı) — ISTEM-12. (22 Kasım 2026, sahibi.)
        if ! grep -q '_bas\.' <<<"$refs"; then
          has 'Başı bilerek silindi'   || eksik+=("yeni karakter temeli: 'Başı bilerek silindi: yüzü sıfırdan …' satırı yok (ISTEM-12)")
        fi
        # Konuk benzerliği, yazıda (21 Kasım 2026, Adım 4 — SEZON-26): kişi adaylar.tsv'de olmalı ve havuzdaki kimseye,
        # aynı vakanın öbür adaylarına benzememeli. Benzerse istem üretime girmez.
        kim=${anahtar%%.*}
        vno=$(cd "$(dirname "$f")/.." && basename "$(pwd)" | sed 's/^v//')
        if [ -n "$kim" ]; then
          bcikti=$(cd "$(dirname "$0")/../kaynak" && node arac_benzerlik.js "$vno" "$kim" 2>&1); bkod=$?
          if [ $bkod -ne 0 ]; then
            if grep -q "adaylarda yok" <<<"$bcikti"; then eksik+=("benzerlik: '$kim' adaylar.tsv'de yok — önce oraya yaz (SEZON-26)")
            elif grep -qE "değişecek: .*\b$kim\b|^  $kim:" <<<"$bcikti"; then eksik+=("benzerlik DURDU: '$kim' — $(grep -E "^  .*($kim|~)" <<<"$bcikti" | head -2 | tr -s ' ' | tr '\n' ' ')(SEZON-26: görünüşü değiştir)")
            elif grep -q "TABLO HATALI" <<<"$bcikti"; then eksik+=("benzerlik: adaylar/havuz tablosu hatalı (arac_benzerlik.js)")
            fi
          fi
        fi
      fi
      if grep -qE '^# G[0-9a-z]+ — (Peri|Cengo)' <<<"$baslik"; then
        grep -qi 'kıyafet kartı' <<<"$refs" || eksik+=("Peri/Cengo figürü: kıyafet kartı referansı yok (SR-C)")
      fi
      # Tarz paragrafı yalnız yeni karakter temelinde; Peri/Cengo temeli ve her ifade/varyant isteminde YOK (çizgi roman
      # tarzına, kalın kontura kaydırdı — v3 ilk G1, G4) — ISTEM-9.
      if has 'Yarı gerçekçi dijital' && ! { grep -q 'tarz_govde_' <<<"$refs" && ! grep -qE '^# G[0-9a-z]+ — (Peri|Cengo)' <<<"$baslik"; }; then
        eksik+=("figür isteminde tarz paragrafı ('Yarı gerçekçi dijital') var — yalnız yeni karakter temelinde yazılır (ISTEM-9)")
      fi
      # Cengo'nun sabitleri: tel ve bileklik; bileklik SOL bilekte (kameraya bakınca kadrajın sağında kalan bilek) — KAR-24.
      if grep -qE '^# G[0-9a-z]+ — Cengo' <<<"$baslik"; then
        grep -qiE '(^|[^[:alpha:]çğıöşüÇĞİÖŞÜ])tel(i|in|ini|le)?([^[:alpha:]çğıöşüÇĞİÖŞÜ]|$)' <<<"$istem" || eksik+=("Cengo figürü: 'tel' sözü yok (göğüs cebinden telin ucu) (KAR-24)")
        if ! has 'bileklik'; then eksik+=("Cengo figürü: 'bileklik' sözü yok (KAR-24)")
        elif ! grep -qE 'sol bile|[Kk]adrajın (SAĞ|sağ)[^.]{0,40}bile' <<<"$istem"; then
          eksik+=("Cengo figürü: bilekliğin kolu yazılmamış — 'sol bileğinde' ya da 'kadrajın SAĞ tarafında kalan bileğinde' (KAR-24)")
        fi
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
      has 'KOMPOZİSYONUNU ALMA'        || eksik+=("'KOMPOZİSYONUNU ALMA' yok — referans resmin düzeni kopyalanır (ISTEM-46)")
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
