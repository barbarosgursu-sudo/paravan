# VAKA 3 — BAŞLANGIÇ (yeni pencere için)

Vaka 3, Vaka 2 ile aynı şablonla üretilir; Vaka 2'nin ölçümünden çıkan **iki hızlandırma
kuralı** bu vakada ilk kez uygulanır. Kurallar ve gerekçe: `sablon/7_uretim_sureci.md` →
"Hızlandırma kuralları".

## 0. Okuma sırası

1. `CLAUDE.md`
2. **bu dosya**
3. `sablon/` — 7 parça, sırayla (özellikle `7_uretim_sureci.md` → Hızlandırma kuralları)
4. `sablon/vakalar/vaka2_baslangic.md` §2–5 (Vaka 1 dersleri, görselli tur denetimi, çalışma biçimi)
5. Örnek olarak: `sablon/vakalar/vaka2_form.md`, `vaka2_diyalog.md`, `vaka2_gorsel.md`

## 1. Bu vakada yeni olan

- **Bulanık replik taraması** (adım 5'in sonu): Onay 2'den önce her replik "kime, neyi,
  nereden biliyor, espri, sıra, niyet" sorularıyla okunur; düzeltmeler sahibine tek listede
  verilir. Ölçü: Vaka 2'de Onay 2 = 1 sa 56 dk, 22 not.
- **Toplu görsel işleme** (adım 9–10): görseller sohbet sohbet gelir, paket hâlinde işlenir,
  sahibine oyundaki son hâli tek seferde gösterilir.
- **Görsel–metin uyum denetimi** (adım 11, Onay 3'ten önce): görselli tur bütün yollarda; her ekran
  altındaki metinle yan yana okunur (kim var, kime konuşuyor, yüz satıra uyuyor mu, anılan şey
  görünüyor mu, süreklilik, yer/zaman, kenardan taşan jest, Nurcan). Bulunanlar tek listede.
  Ayrıntı: `7_uretim_sureci.md` → Hızlandırma kuralları.
- **Görsel iş sayfası aynı biçimde (11 Ekim, sahibinin kararı).** Adım 8'de `vaka2_sayfa/`
  kopyalanıp `vaka3_sayfa/` yapılır, `uret.py`'deki liste Vaka 3'e göre yazılır, sayfa
  yayımlanır ve bağlantısı sahibine verilir. Sahibi sohbetleri sayfanın sırasıyla yürütür;
  süre tablosu ve `DEVIR.md` de o sırayı kullanır. Ayrıntı: `5_gorsel_sistemi.md` D-6.
- **Temel görsel önce, tek başına; türevler onaydan sonra.** Ayrıca Vaka 2'nin bütün görsel
  dersleri (kıyafet sabiti kayması, külotlu çorap, sayı, şehir, marka izi, kalabalıkta kişi
  düşmesi, kim kimi görüyor, red) `5_gorsel_sistemi.md` D (bilinen hatalar tablosu), E (kontrol
  listesi 10–12) ve F'de (kesim profilleri, hale, rötuş sınırı). Prompt yazarken D tablosundaki
  önlemler promptlara baştan konur.
- **Görsel sorunu anında söylenir (11 Ekim, Vaka 2 Sohbet 1 dersi).** Sahibi üretim sırasında bir
  sorun görürse (fazla ayrıntı, tutarsız kıyafet, el, yazı) o an yazar — özellikle sonraki
  görsellere **referans olacak** görselde (temel: G1, ilk kremalı, ilk örtülü vb.). Hata referansta
  düzelmezse zincirle yayılır: Vaka 2'de G8'de doğan çorap bandı G9–G13'e geçti; 5 görsel yeniden
  üretildi, G13 limite takıldı (~20 dk kayıp).
- **Adı geçen kişi ekranda mı (16 Ekim, sahibinin kararı — ZORUNLU):** anlatı satırında adı geçen
  her kişi o satırda ekranda; tek kişi → `{gir: x}`, iki kişiden fazlası ya da grup → kare.
  Diyalogda (adım 3), görsel listesinde (adım 8) ve turda (`--hepsi` → `adi_gecen_yok.txt`)
  denetlenir. `7_uretim_sureci.md` → Görsel–metin uyum denetimi.
- **ChatGPT reddederse (16 Ekim, sahibinin kararı):** aynı promptu ChatGPT'nin düşünen kipinde
  ver; kendisi yumuşatıp yeniden dener (Vaka 2 K23 böyle çıktı). Olmazsa Grok. `5_gorsel_sistemi.md` D-5.
- **Claude tutarlılık sorununu "beğeni" diye geçmez.** Setin içinde tutarsız ya da promptta
  istenmemiş bir ayrıntı görürse gömmeden önce sorar ve düzeltme promptunu verir. Otomatik rötuşa
  (ör. bant/nesne silme) ancak yüzey düzse girer; yeniden üretim çoğu zaman daha kısadır.

## 2. Süre ölçümü

Başlangıç = sahibinin "Vaka 3'e başla" dediği an. Her adımın bitişi yazılır; aralar toplama girmez.

| adım (7. parça) | başladı | bitti | not |
|---|---|---|---|
| 1 Form | | | |
| 2 Onay 1 | | | |
| 3–4 Diyalog + veri + künye | | | |
| 5 Görselsiz tur + bulanık replik taraması | | | |
| 6–7 Onay 2, hikâye donar | | | Vaka 2: 1 sa 56 dk |
| 8 Görsel listesi + promptlar | | | |
| 9–10 Görseller, toplu işleme, yerleştirme | | | |
| 11 Görselli tur | | | |
| 12–13 Onay 3, düzeltmeler | | | |
| 14 Vaka donar | | | |
