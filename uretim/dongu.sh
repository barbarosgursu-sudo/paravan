#!/usr/bin/env bash
# Üretim döngüsü (yerel Claude çalıştırır, arka planda): [KOL=k] [SADECE="3 4 10"] uretim/dongu.sh <vaka_no>
# Üretilebilir resimleri bulur ve Codex'e ürettirir; iş kalmayınca çıkar.
# Üretilebilir = onayli/ ve uretilen/'de yok · istemde "## ENGELLENDİ" yok · Referanslar'daki her dosya mevcut
# (onayli/G<k>.png onaylanmamışsa ya da referanslar/<dosya> henüz hazırlanmamışsa bekler) · başka kolda değil.
# Denetim yerel Claude'da: döngü çalışırken uretilen/'e geleni denetler, onayladıkça yeni resimlerin önü açılır.
#
# KOL (varsayılan 1): aynı anda kaç Codex çalışsın. Her kol bir resmi kilitler (kilit/G<n>, mkdir atomik) ki iki kol
#   aynı resme girmesin. Kayıt kol başına: kayit/kol<k>.md (aynı dosyaya iki Codex aynı anda yazmasın).
# SADECE: yalnız bu numaralar (deneme ölçümleri için).
# Zaman ölçümü: $DONGU_LOG/zaman.tsv  (G · kol · başla · bitir · saniye · sonuç).
# Kota/hız sınırı: Codex logunda sınır mesajı görülürse o kol BEKLE saniye (varsayılan 900) bekler, resim sıraya döner.
#
# DURDURMA: `touch uretim/v<N>/DUR` — kollar o anki resmi bitirip çıkar. Windows'ta arka plan görevini durdurmak kabuğu
# öldürmüyor (6 Kasım: döngü "durdurulduktan" sonra 3 resim daha üretti). Yeniden başlatınca DUR kendiliğinden silinir.
# Codex ASLA --dangerously-bypass… ile çalışmaz. stdin kapalı (< /dev/null), yoksa Codex girdi bekleyip takılır.
set -u
N="${1:?vaka no}"
KOL="${KOL:-1}"
SADECE="${SADECE:-}"
BEKLE="${BEKLE:-900}"
ZAMAN_ASIMI="${ZAMAN_ASIMI:-900}"
KONTROL="$(cd "$(dirname "$0")" && pwd)/istem_kontrol.sh"   # geçmeyen istem üretilmez
# Bilgisayar hazır mı (CODEX-19): eksik varsa üretime başlanmaz, eksik listesi sahibine. PY/CODEX denemek için değiştirilebilir.
PY="${PY:-python}"; CODEX="${CODEX:-codex}"; EKSIK=""
"$PY" -c "import onnxruntime, PIL, numpy, torch, open_clip" >/dev/null 2>&1 \
  || EKSIK="$EKSIK\n- Python kütüphanesi eksik (onnxruntime, PIL, numpy, torch, open_clip) — KURULUM_ORTAK.md'deki pip install satırı"
if ! "$CODEX" --version >/dev/null 2>&1; then EKSIK="$EKSIK\n- Codex kurulu değil (codex --version çalışmıyor)"
elif ! "$CODEX" login status 2>&1 | grep -qi "logged in"; then EKSIK="$EKSIK\n- Codex'te oturum açık değil (codex login)"; fi
if [ -n "$EKSIK" ]; then printf "DÖNGÜ BAŞLAMADI — bilgisayar hazır değil (CODEX-19):$EKSIK\n" >&2; exit 3; fi
cd "$(dirname "$0")/v$N" || exit 1
LOG="${DONGU_LOG:-/tmp}"
mkdir -p "$LOG" kayit kilit
[ -f "$LOG/zaman.tsv" ] || printf 'G\tkol\tbasla\tbitir\tsaniye\tsonuc\n' > "$LOG/zaman.tsv"

uretilebilir() {
  for f in prompts/G*.md; do
    n=$(basename "$f" .md); n=${n#G}
    if [ -n "$SADECE" ]; then case " $SADECE " in *" $n "*) ;; *) continue ;; esac; fi
    [ -f "onayli/G$n.png" ] || [ -f "uretilen/G$n.png" ] || [ -d "kilit/G$n" ] && continue
    # İki zemin (H4): G<k> ile G<k>z'den biri seçilip onayli/G<k>.png olunca öbürü (red/'e taşınmış olsa da) üretilmez.
    # 13 Kasım 2026: bu satır yokken seçilmeyen G3z ve G4z yeniden üretildi (2 resim boşa kota).
    case "$n" in *z) [ -f "onayli/G${n%z}.png" ] && continue ;; esac
    grep -q '^## ENGELLENDİ' "$f" && continue
    if ! "$KONTROL" "$f" > /dev/null 2>&1; then
      grep -qx "G$n" "$LOG/kontrolden_gecmedi.txt" 2>/dev/null || { echo "G$n" >> "$LOG/kontrolden_gecmedi.txt"; echo "G$n kontrol listesinden geçmedi, üretilmiyor: $("$KONTROL" "$f" | tail -n +2 | tr '\n' ' ')" >&2; }
      continue
    fi
    hazir=1
    while read -r r; do [ -f "$r" ] || { hazir=0; break; }; done < <(sed -n '/^## Referanslar/,/^## Kontrol/p' "$f" | grep -o '^[0-9]*\. `[^`]*`' | sed 's/.*`\(.*\)`/\1/')
    [ $hazir = 1 ] && echo "$n"
  done | sort -n
}

sinir_mi() { grep -qiE 'usage limit|rate.?limit|too many requests|quota|\b429\b' "$1"; }

kol() {
  k=$1
  while :; do
    [ -f DUR ] && { echo "kol$k: DUR dosyası, durdu $(date +%H:%M)"; return; }
    n=""
    for aday in $(uretilebilir); do
      mkdir "kilit/G$aday" 2>/dev/null && { n=$aday; break; }
    done
    [ -z "$n" ] && { echo "kol$k: BITTI $(date +%H:%M): üretilecek resim yok (kalanlar onay, referans ya da başka kol bekliyor)"; return; }
    b=$(date +%s)
    timeout "$ZAMAN_ASIMI" codex exec --approve-for-me "AGENTS.md'ye göre G$n resmini üret. Kayıt dosyası: kayit/kol$k.md (uretim_kaydi.md yerine)." < /dev/null > "$LOG/codex_G$n.log" 2>&1
    e=$(date +%s)
    if [ -f "uretilen/G$n.png" ]; then sonuc=uretildi
    elif grep -q '^## ENGELLENDİ' "prompts/G$n.md"; then sonuc=ENGELLENDI
    elif sinir_mi "$LOG/codex_G$n.log"; then sonuc=SINIR
    else sonuc=uretilemedi; fi
    printf 'G%s\t%s\t%s\t%s\t%s\t%s\n' "$n" "$k" "$(date -d @$b +%H:%M:%S)" "$(date -d @$e +%H:%M:%S)" "$((e-b))" "$sonuc" >> "$LOG/zaman.tsv"
    echo "kol$k: G$n $sonuc $(date +%H:%M) ($((e-b)) sn)"
    # Yazılımla tarz denetimi (13 Kasım 2026, sahibi): her yeni resim gözden önce arac_tarz.py'den geçer; sonuç kayda düşer.
    # KALDI/ŞÜPHELİ resim onaylanmaz (uretim/CLAUDE.md → Denetim 0). Döngü resmi taşımaz; kararı denetleyen verir.
    # 21 Kasım 2026 (Adım 4, sahibinin onayı): döngü üç aracın ÇIKIŞ KODUNA da bakar. Sonuç kalıcı kayda gider:
    # kayit/denetim.tsv (G · saat · tarz · yüz · benzerlik · karar). KALDI/ŞÜPHELİ/araç çalışmadı → karar ONAYLANAMAZ
    # (commit kapısı da onayli/'e giren resimde araçları yeniden koşar, geçmeyeni kaydettirmez). Benzerlik DUR (çıkış 3) →
    # ölçü ayırt etmiyor, sahibine sorulur: döngü DUR dosyasını koyar, bütün kollar durur.
    if [ "$sonuc" = uretildi ]; then
      cikti=$(cd ../../kaynak && python arac_tarz.py --uretim "v$N" "G$n" 2>/dev/null); tk=$?; tz=$(head -1 <<<"$cikti")
      echo "kol$k: G$n TARZ: ${tz:-araç çalışmadı}"
      printf 'G%s\t%s\t%s\n' "$n" "$(date +%H:%M)" "${tz:-araç çalışmadı}" >> "$LOG/tarz.tsv"
      # Yazılımla yüz (kimlik) denetimi (14 Kasım 2026, sahibi): Peri, Cengo, Gizem figür/kartında kapı; karede yalnız bilgi.
      cikti=$(cd ../../kaynak && python arac_yuz.py --uretim "v$N" "G$n" 2>/dev/null); yk=$?; yz=$(head -1 <<<"$cikti")
      echo "kol$k: G$n ${yz:-YÜZ araç çalışmadı}"
      printf 'G%s\t%s\t%s\n' "$n" "$(date +%H:%M)" "${yz:-YÜZ araç çalışmadı}" >> "$LOG/yuz.tsv"
      # Yazılımla konuk benzerliği (20 Kasım 2026, sahibi): konuk figür/kartı eski karakterlere ve birlikte üretilenlere benzemez.
      cikti=$(cd ../../kaynak && python arac_benzerlik_resim.py --uretim "v$N" "G$n" 2>/dev/null); bk=$?; bz=$(head -1 <<<"$cikti")
      echo "kol$k: G$n ${bz:-BENZERLİK araç çalışmadı}"
      printf 'G%s\t%s\t%s\n' "$n" "$(date +%H:%M)" "${bz:-BENZERLİK araç çalışmadı}" >> "$LOG/benzerlik.tsv"
      if [ "$tk" = 0 ] && [ "$yk" = 0 ] && [ "$bk" = 0 ]; then karar=GECTI; else karar=ONAYLANAMAZ; fi
      [ -f kayit/denetim.tsv ] || printf 'G\tsaat\ttarz\tyuz\tbenzerlik\tkarar\n' > kayit/denetim.tsv
      printf 'G%s\t%s\t%s\t%s\t%s\t%s\n' "$n" "$(date '+%d.%m %H:%M')" "$tk" "$yk" "$bk" "$karar" >> kayit/denetim.tsv
      [ "$karar" = ONAYLANAMAZ ] && echo "kol$k: G$n ONAYLANAMAZ (çıkış kodları tarz $tk · yüz $yk · benzerlik $bk; 1 ŞÜPHELİ, 2 KALDI, 3 DUR) — onayli/'e taşınmaz, ret yolu (DENETIM-2/8/53)"
      if [ "$bk" = 3 ]; then
        touch DUR
        echo "kol$k: G$n BENZERLİK DUR — sınır kurulamadı, döngü durdu; SAHİBİNE SOR (DENETIM-53)"
      fi
    fi
    rmdir "kilit/G$n"
    [ "$sonuc" = SINIR ] && { echo "kol$k: kota/hız sınırı, $BEKLE sn bekliyor (log: $LOG/codex_G$n.log)"; sleep "$BEKLE"; }
  done
}

rm -f DUR
rm -rf kilit/G*   # önceki çalıştırmadan kalan kilitler
for k in $(seq 1 "$KOL"); do kol "$k" & sleep 3; done
wait
echo "döngü bitti $(date +%H:%M)"
