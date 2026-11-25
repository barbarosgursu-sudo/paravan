# Vaka 8 — resim durumu

**25 Kasım 2026, 22:10 —** G2 üçüncü üretimde yüz GEÇTİ 0,856, tarz −0,012 → Oğuz Bey "kalsın" (`vaka8_kapi.md`), onaylı. **Kart 5/5 TAMAM.**
G6 Bahar: benzerlik KALDI (Nadide 1,70) → yüz değişti (kare çene, esmer, kalın koyu kaşlar; form, `adaylar.tsv`, G6/G6z); yeni G6z GEÇTİ
(Nadide 1,34; yüz uyarısı Ayla 0,700 — gözle ayrışıyor), açık bej G6 bekleniyor, seçim saç kenarına göre. G7 Tarkan: benzerlik KALDI
(Ercan 1,86, Cengo 1,69, Kenan 1,58) → yüz dar, uzun, sivri çeneli, solgun (form, `adaylar.tsv`, G7/G7z); yeniden üretiliyor.

**25 Kasım 2026, 22:00 — DÖNGÜ ÇALIŞIYOR (Oğuz Bey'in bilgisayarı, 2 kol).** Onaylı (üç araç + göz): G1 Peri manto (Düzeltme 1:
V1'in çentikli yakası — ilki şal yaka, yüz 0,696; `referanslar/peri_manto_v1_yaka.png` eklendi) · G3 Cengo şoför (tarz +0,104 · yüz 0,841) ·
G4 Cengo ceket (tarz +0,089 · yüz 0,831) · G5 Gizem kazak (tarz +0,073 · yüz `--kim gizem` 0,903). G2 iki kez KALDI (gözlük yüzü örtüyor;
tarz −0,021 · yüz 0,655) → Düzeltme 2: kartta gözlük alna itilmiş. El sayfaları G3, G4 hazır (`kaynak/YENI_UI/el/`); el onayı Oğuz Bey'de.
`sablon/vakalar/vaka8_gorsel.md` yazıldı (LISTE'den).

**25 Kasım 2026, gece — PARTİ 1 İSTEMLERİ HAZIR (33 dosya, G1–G25 + 8 zemin denemesi), `istem_kontrol.sh` çıkış 0.** Görselsiz tur beş
kapı yolunda → `satir_resim.md` (250 satır, OTO 3, İŞ 0, SOR 0); konuk istemlerinin `## Satırlar`'ı oradan. Referanslar `v8/referanslar/`:
`peri_manto_v1_ref.png` (V1 mantosunun kemerden aşağısı — dekolte kırpıldı, ISTEM-16), `cengo_ceket_v1_ref.png` (V1 ceketi). Zemin:
asıl G6–G13 açık bej, `z` gri-mavi. Sırada döngü: `cd uretim && KOL=2 DONGU_LOG=<scratchpad> ./dongu.sh 8`.

**25 Kasım 2026, gece — V7 KURALLARI V8'E UYGULANDI (Oğuz Bey: "Vaka 7'nin bütün kuralları uygulansın, konuklar eski vakalara benzemesin").**
Benzerlik bütün vakalarla (V1–V7): Nevzat (Kadir V5) → zayıf, kabarık kumral saç, bıyıksız, açık mavi gömlek; Emir (Hilmi) → yuvarlak
yüz; Yusuf (Muammer) → yeşil hırka; GEÇTİ. SATIR-43: Gizem'e yeni kıyafet `kazak8` (koyu yeşil balıkçı yaka kazak, siyah pantolon),
Cengo `ceket8` V8 için yeniden. KAR-23/ISTEM-20: Peri kırmızı stiletto, çorap yok. Liste G1–G25 (`LISTE.md`). Doğrulayıcı PASS.

**25 Kasım 2026, akşam — ÜRETİM OĞUZ BEY'İN BİLGİSAYARINDA (Barbaros V8 üretmesin).** Hikâye bugünkü araçlarla yeniden
denetlendi: doğrulayıcı PASS (V8'de uyarı yok), kapı V8 hikaye GEÇTİ, 8 test geçti. Benzerlik aracı (V7+V8) Tarkan'ı Kaan'a
benzer buldu → Tarkan siyah kazınmış saç, kömür grisi takım (Oğuz Bey seçti; form, diyalog K166, `adaylar.tsv`). V7 konukları
havuza taşındı (gömmede atlanmıştı). Form §14 kılık tarifi diyaloğa uyduruldu (manto yok). Bilgisayar hazır (Python, Codex).
Parti 1 listesi `LISTE.md` (G1–G23) — Oğuz Bey'in onayını bekliyor; sonra istemler (`prompts/`).
