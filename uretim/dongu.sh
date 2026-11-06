#!/usr/bin/env bash
# Üretim döngüsü (yerel Claude çalıştırır, arka planda): uretim/dongu.sh <vaka_no>
# Her turda üretilebilecek resimleri bulur ve Codex'e sırayla ürettirir; iş kalmayınca çıkar.
# Üretilebilir = onayli/ ve uretilen/'de yok · istemde "## ENGELLENDİ" yok · Referanslar'daki her dosya mevcut
# (onayli/G<k>.png onaylanmamışsa ya da referanslar/<dosya> henüz hazırlanmamışsa bekler).
# Denetim yerel Claude'da: döngü çalışırken uretilen/'e geleni denetler, onayladıkça yeni resimlerin önü açılır.
# Codex ASLA --dangerously-bypass… ile çalışmaz. stdin kapalı (< /dev/null), yoksa Codex girdi bekleyip takılır.
set -u
N="${1:?vaka no}"
cd "$(dirname "$0")/v$N" || exit 1
LOG="${DONGU_LOG:-/tmp}"
uretilebilir() {
  for f in prompts/G*.md; do
    n=$(basename "$f" .md); n=${n#G}
    [ -f "onayli/G$n.png" ] || [ -f "uretilen/G$n.png" ] && continue
    grep -q '^## ENGELLENDİ' "$f" && continue
    hazir=1
    while read -r r; do [ -f "$r" ] || { hazir=0; break; }; done < <(sed -n '/^## Referanslar/,/^## Kontrol/p' "$f" | grep -o '^[0-9]*\. `[^`]*`' | sed 's/.*`\(.*\)`/\1/')
    [ $hazir = 1 ] && echo "$n"
  done | sort -n
}
while :; do
  liste=$(uretilebilir)
  [ -z "$liste" ] && { echo "BITTI $(date +%H:%M): üretilecek resim yok (kalanlar onay ya da referans bekliyor)"; exit 0; }
  for n in $liste; do
    [ -f "onayli/G$n.png" ] || [ -f "uretilen/G$n.png" ] && continue
    timeout 590 codex exec --approve-for-me "AGENTS.md'ye göre G$n resmini üret." < /dev/null > "$LOG/codex_G$n.log" 2>&1
    if [ -f "uretilen/G$n.png" ]; then echo "G$n üretildi $(date +%H:%M)"
    elif grep -q '^## ENGELLENDİ' "prompts/G$n.md"; then echo "G$n ENGELLENDİ $(date +%H:%M)"
    else echo "G$n üretilemedi $(date +%H:%M) (log: $LOG/codex_G$n.log)"; fi
  done
done
