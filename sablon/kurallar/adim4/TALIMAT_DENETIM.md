# Adım 4 — ikinci göz (bağımsız denetim talimatı)

Önce `sablon/kurallar/adim4/TALIMAT.md`'yi oku (birinci uygulayıcıya verilen talimat; dilbilgisi ve adımlar orada).
Sana verilen `uyg_<…>.tsv` dosyasını denetle. **Hiçbir dosyayı değiştirme** (TSV dahil); yalnız raporunu yaz:
`sablon/kurallar/adim4/denetim_<aynı ad>.md`. Commit yapma.

Denetle:
1. **Her "program" satırı** (en önemlisi): kanıttaki dosyayı/yeri AÇ. Program o kuralı gerçekten ölçüyor mu ve tutmayınca iş
   DURUYOR mu (çıkış ≠ 0, kapı, test, hook)? Yalnız bilgi basıyorsa, bayrak ADAY ise, ya da kuralın yalnız küçük bir parçasını
   ölçüyorsa → bulgu (öneri: `hatırlat N` ya da `program … · hatırlat N`).
2. **"yok" satırları:** gerçekten vaka üretiminde hiç ısırmıyor mu? Isırıyorsa → bulgu (öneri adımıyla).
3. **"hatırlat" adımı:** sorunun hâlâ ucuz düzeldiği adım mı? Çok geç (ör. istem kuralı 10'da) ya da yanlış adımsa → bulgu.
4. **Eksik / fazla kod:** KURALLAR.md'deki ilgili bölümlerin bütün kodları (ilk satırı `→ KOD` olanlar hariç) TSV'de var mı.
5. **"aday" sütunu:** mekanik olarak ölçülemeyecek bir şeyi aday saymış mı; gözden kaçmış bariz aday var mı.

Rapor biçimi: en üstte tek satır sonuç (`GEÇTİ` ya da `n bulgu`), sonra her bulgu tek satır:
`KOD — birinci: <yazdığı> — öneri: <senin önerin> — sebep: <kısa>`. Uzun yazma. Son mesajında yalnız sonuç satırı ve bulgu sayısı.
