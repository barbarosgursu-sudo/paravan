# Vaka 3 resimleri — yerel Claude: denetim ve onay

Sahibi (Barbaros) resimleri iki yoldan üretir: Codex (`AGENTS.md`) ve web ChatGPT (elle). İkisi de `uretilen/`'e düşer.
Senin işin: `uretilen/`'deki her resmi denetlemek, onaylananı `onayli/`'ye taşımak, reddedileni düzeltme notuyla geri vermek.
Sahibi "kontrol et" deyince başla. Türkçe, kısa yaz.

## Klasörler
`prompts/G<n>.md` (istem, sıralı referanslar, **Kontrol** notu) · `referanslar/` · `uretilen/` (onay bekleyen) · `onayli/` · `red/` (gerekirse aç).
`referanslar/` ve `prompts/`'taki istem metnine dokunma (yalnız sonuna `## Düzeltme` eklenir).

## Her resim için denetim
`uretilen/G<n>.*` → `prompts/G<n>.md`'yi oku, resmi ve referanslarını (onayli/ + referanslar/) aç, karşılaştır:
1. **Kontrol** satırındaki her madde.
2. Kimlik: yüz, saç, kıyafet referanstakiyle aynı mı (Peri = L1 / onaylı G1, Cengo = C1 / onaylı G4; seride temel resim).
   **Karakter sabitleri** (görünüyorsa her resimde kontrol et, uymazsa reddet):
   - Peri'nin ayakkabısı HER resimde kırmızı stiletto (doğru örnek: onaylı G49); siyah ya da başka renkse ret,
     düzeltme notu: "Peri'nin ayakkabıları kırmızı stiletto."
3. Yüz ¾ dönük, İKİ göz görünür; profil değil. Burun kadrajın soluna (istem öyle diyorsa).
4. Eller: iki kol, iki el, beşer parmak; kaynaşmış/fazla parmak yok.
5. İstemde olmayan nesne, yazı, harf, rakam, logo, filigran YOK.
6. Kadraj ve oran istemdeki gibi (figürlerde uyluk ortasından yukarı, düz açık bej zemin).
7. Tarz öbür onaylılarla aynı (yarı gerçekçi boyalı illüstrasyon; anime/3D/fotoğraf değil).
8. Açık cinsel içerik / çıplaklık YOK (cazibe istenebilir, çıplaklık asla). Kumaşın altından meme ucu belirmesi de ret sebebi
   (büyütüp bak); düzeltme notu: "Tişört kalın kumaş; altından meme ucu belirmiyor." (giysiye göre uyarla).

## Karar
- **Onay:** `uretilen/G<n>.*` → `onayli/G<n>.<aynı uzantı>` (taşı).
- **Ret:** `prompts/G<n>.md` sonuna `## Düzeltme <k>` + tek-iki cümle, NE değişecek (ör. "Bıyık kalem gibi ince olmalı, şimdiki gür."); resmi
  `red/G<n>_red<k>.<uzantı>`'ya taşı. Codex bir sonraki "üret"te düzeltmeyle yeniden üretir.
  Aynı resim 3. kez reddedilecekse durdur, sahibine sor.
- Emin değilsen onaylama; sahibine resmi ve kuşkunu söyle.
- Web'den gelen (Codex'in üretemediği) resmi reddedersen sahibine söyle: web'de yeniden yapacak.

## Sonda sahibine
Kısa tablo: onaylanan / reddedilen (neden) / Codex'te ENGELLENDİ yazan (`## ENGELLENDİ`) ve yolu **web** olup henüz gelmeyen →
"bunları web'de yap". Sonra "Codex'e `üret` yaz".

## Şerit (yalnız `referanslar/serit_susam_dortlu.jpg` kullanan istemler varsa)
Şerit eski onaylı G6–G9'dan yapılmıştır. G6, G7, G8, G9'un dördü de YENİDEN onaylanınca şeridi yenile: dördünü aynı yüksekliğe (900 px)
getirip soldan sağa G6 G7 G8 G9, aralarında 24 px zemin rengiyle yan yana koy, aynı adla kaydet (Python + Pillow ya da PowerShell System.Drawing).

## Hepsi onaylanınca
`prompts/LISTE.md`'deki her G `onayli/`'de → sahibine "Vaka 3 tamam; `onayli/` klasörünü bulut Claude'una gönder" de.
