# Fable incelemesi — uygulama talimatları

> Bu dosya `inceleme_fable.md`'deki bulguları **düzeltecek** oturum için yazıldı. Bulguların
> gerekçesi ve kanıtı orada; burada yalnızca **ne yapılacağı**, **nasıl doğrulanacağı** ve
> **hangi sırayla** olduğu var. Soğuk başlayan bir oturumun bu dosyayla tek başına
> bitirebilmesi hedeflendi.

## 0. Çalışma kuralları (her adım için geçerli)

1. **Önce oku:** `CLAUDE.md` (kök), `kaynak/inceleme_fable.md`, bu dosya. Gerektikçe
   `OKUBENI.md`'nin ilgili bölümü.
2. **Dal:** doğrudan `main`. Her bulgu **ayrı commit**; küçükler (Kü1–Kü11) tek commit olabilir.
3. **Her commit'ten önce** (`cd kaynak`):
   ```
   node dogrulayici.js && node build_html.js
   for t in test_*.js; do [ "$t" = test_bozuk.js ] && continue; node "$t" > /dev/null || echo "FAIL $t"; done
   ```
   Doğrulayıcı **PASS (5 uyarı)** demeli — uyarı sayısı ve içeriği değişmemeli (K6 V2/mahalle_konus;
   K7 V3, V6, YAN-B; K9 6 ölü tohum). Test sayısı bu dosyada eklenen testlerle artabilir;
   arttıysa `CLAUDE.md`'deki "17 test" ifadesini güncelle.
4. **Arayüze dokunan her adımdan sonra** tarayıcı turu: `node arac_ui_tur.js` (Pixel 5, gerçek
   tıklama; JS hatası / yatay taşma / kayıt-sürdürme). `ses/` için file:// CORS uyarıları normaldir.
5. **Dokunma:** doğrulayıcının 5 kabul edilmiş uyarısı, CLAUDE.md'deki bozulmaz sözleşmeler,
   `index.html` (derleme çıktısı — elle düzenlenmez), `_gomulu_gorseller.js` (bu turda görsel yok).
6. **Testlerde sabit sayı yazma.** İddiayı ilişkiyle kur (`a > b`, "veride ne yazıyorsa o").
7. **Türkçe İ:** `/i/` bayrağı U+0130'u katlamaz; karşılaştırma gerekirse `toLocaleLowerCase("tr")`.
8. `game_data.json` asıl veri; `vaka2-6.json`, `yan_a/b.json` **yedek** — veride değiştirdiğin
   şeyi ilgili yedekte de değiştir (`yan_a.json` bu turda kesin etkilenecek).
9. Metin yazarken üslup: mevcut kaynak metinleri gibi — kısa, noir, yargısız; **sabit finansal
   iddia yok** ("borç kapandı", "kasa boş" yasak, bkz. OKUBENI "Sabit finansal iddia yasağı");
   oyuncunun hak etmediği hiçbir isim/olgu yok.
10. Bittiğinde `inceleme_fable.md`'de her bulgunun başına `✔ <commit>` yaz; `CLAUDE.md`
    "Şu anki durum" bölümünü güncelle.

Sıra: **K1 → K2 → Ö1 → Ö2 → Ö3+Ö4 → Kü'ler**. Ö3+Ö4 en son çünkü doğrulayıcıyı sıkılaştırır;
önce metin düzeltmeleri (K2, Kü3, Kü4) girsin ki yeni kural doğru veriyle sınansın.

---

## K1 — `eski_dava` olgu çakışması + K11 kuralı

### K1-a · Olguyu yeniden adlandır
YAN-A'daki `eski_dava` → **`cengo_eski_dava`**. V5'teki `eski_dava` **olduğu gibi kalır**.

`game_data.json`, YAN-A vakası içinde (5 yer — `grep -n '"eski_dava"' game_data.json` ile bul,
satır ~882–968):
- `facts` anahtarı (`"eski_dava": "Yıllar önce bir suç; kayıtlarda Cengo'nun adı."`)
- `eski_kayit` kaynağının `reveals`
- `eski_kayit` kaynağının `gorsel.gosterir`
- `cengo_cumle` kaynağının `needs`
- `knowledge` → `gecmis_sezildi` ifadesi

`yan_a.json` (yedek): aynı 5 yer.
`kisiler.json:110` İlyas katmanının `"kosul": "eski_dava"` → **DEĞİŞMEZ** (V5 anlamı).
`kisiler.json` içinde Cengo/Sevil katmanları `cengo_gecmis_bilinir` / `gecmis_tam` okuyor →
etkilenmez; yine de `grep -n eski_dava kisiler.json` ile doğrula: yalnızca satır 110 çıkmalı.
`test_yana.js:26` yalnızca yorum; güncelle.

**Doğrulama (K1-a):**
```
node -e '
const {Oyun}=require("./motor.js"); const G=require("./game_data.json"); const K=require("./kisiler.json");
const o=new Oyun(G);
const P=(id,k,ac=[])=>{o.vakaBaslat(id); for(const a of ac){const r=o.kaynakAc(a); if(r.hata) throw new Error(a+": "+r.hata);} if(o.kararVer(k).hata) throw new Error(k);};
P("V1","temiz_rapor"); P("V2","kuru_rapor",["nesrin_gorusme","takip_gece","kenar_ev_gozlem"]);
P("YAN-A","sessiz_coz",["tehdit_arastir","eski_kayit"]);
const b=o.tumBilinen(); const i=K.kisiler.find(x=>x.id==="ilyas");
const gorunen=i.katmanlar.filter(k=>k.kosul==="her_zaman"||b.has(k.kosul)).map(k=>k.kosul);
console.log("İlyas görünen katmanlar:", gorunen);
if(gorunen.includes("eski_dava")) { console.log("SIZINTI SÜRÜYOR"); process.exit(1); }
console.log("OK: künye yalnızca", gorunen);'
```
Beklenen: `İlyas görünen katmanlar: [ 'ilyas_tahsildar' ]`.

### K1-b · Doğrulayıcıya K11: olgu kimlikleri vakalar arasında benzersiz
`dogrulayici.js`'e yeni kural (K4'ten sonra, hata sınıfı):
```js
// Kural 11 — Olgu kimlikleri VAKALAR ARASINDA benzersiz olmalı. Olgular vaka bitince
// kaliciOlgular'a taşınır ve künye/koşullu metin tumBilinen() üzerinden okur; aynı ad
// iki vakada iki şey anlamına gelirse, birinde açılan olgu ötekinin katmanını açar
// (yaşanan örnek: YAN-A/eski_dava ↔ V5/eski_dava → künye V2'de "katil" dedi).
function kural11_olguBenzersiz(game, hatalar) {
  const sahip = {};   // olgu → [vaka id]
  for (const vaka of game.vakalar) {
    const adlar = new Set([...Object.keys(vaka.facts || {}), ...(vaka.knowledge || []).map(k => k.turetilen)]);
    for (const ad of adlar) (sahip[ad] ??= []).push(vaka.id);
  }
  for (const [ad, vakalar] of Object.entries(sahip)) {
    if (vakalar.length > 1)
      hatalar.push(`[K11] olgu '${ad}' birden çok vakada tanımlı: ${vakalar.join(", ")} — kalıcı olgular vakalar arası taşındığı için aynı ad iki anlam taşıyamaz.`);
  }
}
```
`dogrula()` içinde çağır (`kural4_truth`'tan sonra) ve rapora satır ekle:
`kural("Kural 11 (Olgu kimliği)  ", hatalar.some(h => h.startsWith("[K11]")));`
`module.exports`'a eklemeye gerek yok.

`test_bozuk.js`'e negatif senaryo ekle (mevcut kalıpla):
```js
console.log("\n########## TEST 6: OLGU ÇAKIŞMASI (K11) — iki vakada aynı olgu adı ##########");
let t6 = clone();
t6.vakalar[1].facts["polis_kaza"] = "V2'de aynı adla başka bir şey";   // V1'in olgusu V2'de de tanımlı
dogrula(t6);
```
Çıktıda `[K11] olgu 'polis_kaza' ...` ve `BLOCKED` görünmeli.

Belge: `OKUBENI.md` "Doğrulayıcı kuralları" tablosuna K11 satırı (hata);
`dogrulayici_sozlesmesi.md` sonuna kısa bir K11 paragrafı; `dogrulayici.js:3` "5 kuralını" → "11 kuralını".

**Commit:** `Olgu kimliği çakışması: YAN-A eski_dava → cengo_eski_dava, K11 kuralı`

---

## K2 — V5/`cavit_ilyas_ilgi` metni İlyas'ı tanımayana sızdırıyor

`game_data.json` V5 → `cavit_ilyas_ilgi` (satır ~1913). Şu an `ad` koşullu, `text` ve `meta` düz.

**Yapılacak:** `text` ve `meta`'yı `ad` ile aynı biçimde varyant dizisine çevir. Koşul —
`ad`'ın mevcut koşuluna **`ilyas_tahsildar`** da eklenmiş hâli (V2'de kapıyı gözleyen oyuncu
İlyas'ı adıyla ve tahsildar olarak tanıyor; V3'e girmemiş olsa bile):
```json
{"any": ["iten_ilyas", "ilyas_isim", "ilyas_tahsildar", {"seed": "iten_biliniyor", "esit": true}]}
```
`ad`'ın koşuluna da `ilyas_tahsildar`'ı ekle (tutarlılık).

- Koşullu varyant: **mevcut metinler aynen** ("Cavit, İlyas gibi sıradan bir tahsildar için…" /
  "İlyas onun için sıradan biri değil. Aralarında bir geçmiş var.").
- `varsayilan` varyant — İlyas'ın adı, tahsildarlığı, V2/V3'e gönderme **yok**; Cavit'in
  telaşı bir adamla ilgili ama adam adsız. Öneri (üslup sana kalmış, kısıtlar değil):
  - text: *"Cavit'in bu kez istediği 'temizlik' bir adamla ilgili. Adını vermiyor, 'önemsiz
    biri' diyor — ama önemsiz biri için fazla telaşlı. Peri soruyor: bu adamı neden bu kadar
    önemsiyor?"*
  - meta: *"O adam Cavit için sıradan biri değil. Aralarında bir geçmiş var."*

Not: Bu kaynağın `reveals`i `cavit_ilyas_neden` ve o olgunun açıklaması İlyas'ı anıyor; bu
yüzden **K1 bu sızıntıyı hiçbir sürümünde yakalayamaz** (kaynak ismi "açıyor" sayılır).
Bekçi, aşağıdaki test gidişatı.

**`test_sizinti.js`:**
1. Gidişat listesine (satır ~158) ekle:
   ```js
   // V3'te hiç araştırmadan tanığı lekeleyen, V5'te derin kazan oyuncu: V5 metinleri
   // ona İlyas'ın adını ya da tahsildarlığını hediye etmemeli
   ["V3 SIĞ + LEKELE, gerisi derin", 1, false, { "V3": 0 }],
   ```
   (`kararSecici` `kararlar[0]`; V3'te araştırmasız tek açık karar `tanigi_lekele` olduğu için
   bu gidişat kendiliğinden lekele yoluna düşer — `node -e` ile bunu bir kez doğrula.)
2. İMA sözlüğüne ekle:
   ```js
   { kelimeler: ["İlyas gibi", "sıradan bir tahsildar için", "İlyas onun için"],
     olgular: ["ilyas_tahsildar", "ilyas_isim", "iten_ilyas", "zincir_tam"],
     aciklama: "İlyas'ın adının ve tahsildar olduğunun bilindiği" },
   ```
3. **Negatif kontrol:** önce yalnızca testi ekle, çalıştır → BAŞARISIZ olmalı (sızıntıyı
   yakalıyor). Sonra veriyi düzelt → geçmeli. Bu iki çıktıyı commit mesajına yaz.

**Commit:** `V5/cavit_ilyas_ilgi: gövde ve meta koşullu; sızıntı testine lekele gidişatı`

---

## Ö1 — Final bittikten sonra YAN-C masaya düşüyor

`motor.js` → `masadakiVakalar()` (satır ~161). Omurga kalmadıysa yan vaka listelenmesin:
```js
    if (omurga[0]) out.push(omurga[0].id);
    // Omurga bitti = sezon bitti. Yan iş artık masaya düşmez; yoksa final mührü
    // (kararVer: hepsini_ifsa / cavit_ver) bir sonraki yan işin kararıyla siliniyor
    // ve "Dava Kapandı" ekranı Hulki'nin arkasına kalıyordu.
    else return out;
```
(`out` bu noktada boş; `masaGoster` boş masada `sonEkrani()` çağırıyor — arayüz değişikliği gerekmez.)

**`test_yanc.js`'e ekle** (mevcut `borcla` yardımcısının yanına; tüm omurgayı bitiren bir yardımcı
yaz, karar olarak her vakada `acikKararlar()[0]` yeter):
```js
console.log("\n=== FİNAL SONRASI ===");
{
  const o = new Oyun(g);
  for (const vid of g.vakalar.filter(v => v.tur === "omurga").sort((a,b)=>a.sira-b.sira).map(v=>v.id)) {
    o.vakaBaslat(vid); o.kararVer(o.acikKararlar()[0].id);
  }
  o.durum.borc = ESIK * 2; o.durum.para = 0;          // eşik fazlasıyla aşılmış
  k("omurga bitince borç ne olursa olsun masa BOŞ (YAN-C düşmez)", o.masadakiVakalar().length === 0);
}
```
(`ESIK` Kü5 ile veriden okunur hâle gelecek; şimdilik mevcut sabiti kullan.)

Belge: `OKUBENI.md` YAN-C bölümüne bir cümle: *"Omurga bitince masaya düşmez — final mührü ve
son ekranı korunur."*

**Commit:** `Final bitince yan iş masaya düşmüyor; YAN-C testi`

---

## Ö2 — Künyedeki İlyas portresi V3'ün yara ipucunu V2'de gösteriyor

**Veri:** `kisiler.json:98` İlyas:
```json
"portre": "portre_ilyas_v2.jpg",
"portre_katman": [ { "kosul": "iten_ilyas", "portre": "portre_ilyas.jpg" } ],
```
(`portre_ilyas.jpg` yaralı yüz; `iten_ilyas` V3'te teşhisle türeyen olgu — yara artık hak edilmiş.)

**Arayüz:** `build_html.js` → `kisilerGoster()` (satır ~1097), portre seçimi:
```js
    // Portre de katmanlı olabilir: yüzdeki yara V3'ün ipucu, V2'de görünmemeli (§7).
    let portreDosya = kisi.portre || '';
    for(const pk of (kisi.portre_katman||[])) if(bilinen.has(pk.kosul)) portreDosya = pk.portre;
    const pad = portreDosya.replace('.jpg','');
```
(`const pad = (kisi.portre||'').replace('.jpg','');` satırının yerine.)

**Test:** `test_sizinti.js` sonuna yapısal kontrol (kisiler.json'u oku):
```js
console.log("\n=== KÜNYE PORTRESİ ===");
{
  const K = JSON.parse(require("fs").readFileSync("kisiler.json", "utf-8"));
  const ilyas = K.kisiler.find(x => x.id === "ilyas");
  const v3 = g.vakalar.find(v => v.id === "V3");
  const v3Olgular = new Set([...Object.keys(v3.facts), ...v3.knowledge.map(k => k.turetilen)]);
  k("İlyas'ın temel portresi yarasız (v2)", ilyas.portre === "portre_ilyas_v2.jpg");
  const yarali = (ilyas.portre_katman || []).find(p => p.portre === "portre_ilyas.jpg");
  k("yaralı portre yalnızca V3 olgusuyla açılıyor", !!yarali && v3Olgular.has(yarali.kosul));
}
```
**Tarayıcı:** `node arac_ui_tur.js` — turun sonundaki künye görüntüsü `UI_kisiler_V3_oncesi.png`
dosyasında; İlyas kartındaki yüz yarasız olmalı (gözle bak: `Read` ile aç).

Belge: `OKUBENI.md` "Dosyalar" → `kisiler.json` satırına "(portre de katmanlı olabilir)".

**Commit:** `Künye portresi katmanlı: İlyas'ın yarası V3'ten önce görünmüyor`

---

## Ö3 + Ö4 — Doğrulayıcı K1/K5 koşullu metne kör; "temel" isimler giriş varyantlarının birleşimi

Bu adım prototiplendi: aşağıdaki değişikliklerden sonra doğrulayıcı **yalnızca 2** yeni K1 hatası
veriyor ve ikisi de aşağıdaki (c) ve (d) ile kapanıyor. Başka bir hata çıkarsa **kuralı
gevşetme**; metni koşullu yap ya da ismi gerçekten taşıyan olgunun `facts` açıklamasına ismi
yaz (o olgu gerçekten o kişiye dairse).

`dogrulayici.js` → `kural1_sozluk`:

**(a) Temel isimler = yalnızca `varsayilan` giriş varyantı** (en az bilgili oyuncunun garantisi):
```js
    const girisMetin = ((vaka.giris || []).find(g => g.kosul === "varsayilan") || {}).metin || "";
```

**(b) Her metin varyantı ayrı denetlenir; varyantın koşul olguları o varyantın havuzuna katılır.**
Mevcut `const blob = ...` satırından isim döngüsünün sonuna kadar olan bloğu şununla değiştir:
```js
      const parcalar = [];   // {metin, ekHavuz, etiket}
      const ekle = (alan, ham) => {
        if (typeof ham === "string") parcalar.push({ metin: ham, ekHavuz: new Set(), ekTohum: [], etiket: alan });
        else if (Array.isArray(ham)) for (const v of ham) {
          const ek = v.kosul === "varsayilan" ? new Set() : ifadeOlgulari(v.kosul);
          parcalar.push({ metin: v.metin || "", ekHavuz: ek, ekTohum: tohumlariTopla(v.kosul), etiket: alan + "[" + JSON.stringify(v.kosul) + "]" });
        }
      };
      ekle("text", c.text); ekle("meta", c.meta); ekle("ad", c.ad);
      for (const p of parcalar) {
        const havuz2 = havuzGenislet(vaka, new Set([...havuz, ...p.ekHavuz]));
        const havuzMetin2 = [...havuz2].map(o => facts[o] || "").join(" ");
        const tohumIsimleri = new Set(p.ekTohum.flatMap(t => tohumIsimleriAl(game, t)));
        for (const isim of game.kanon.isimler) {
          if (isim.endsWith("-YOK")) continue;
          if (temel.has(isim) || tohumIsimleri.has(isim)) continue;
          if (isimGeciyor(p.metin, isim) && !isimGeciyor(havuzMetin2, isim)) {
            hatalar.push(`[K1] ${vaka.id}/${c.id} (${p.etiket}): metin '${isim}' diyor ama needs/reveals olgularının hiçbiri onu taşımıyor (temelde de yok).`);
          }
        }
      }
```
Dikkat: `ad` da taranıyor (başlıklar araştırma ekranında açılmadan görünür); `havuz`'un
tanımı (needs ∪ reveals) aynen kalır.

**(c) Türetilmiş olgular bileşenlerine açılır** — `V5/iliski_gor meta[cavit_azmettiren]` İlyas'ı
anıyor, `cavit_azmettiren` bir `knowledge` (facts'te yok); bileşeni `eski_dava`'nın açıklaması
İlyas'ı taşıyor. Dosya üstüne yardımcı:
```js
// Havuzdaki türetilmiş olgular (knowledge.turetilen) bileşen olgularına açılır — sabit nokta.
// "cavit_azmettiren" bilen oyuncu "eski_dava"yı da bilir; ismi taşıyan açıklama oradadır.
function havuzGenislet(vaka, havuz) {
  const out = new Set(havuz);
  let degisti = true;
  while (degisti) {
    degisti = false;
    for (const k of vaka.knowledge || []) {
      if (!out.has(k.turetilen)) continue;
      for (const o of ifadeOlgulari(k.ifade)) if (!out.has(o)) { out.add(o); degisti = true; }
    }
  }
  return out;
}
```

**(d) Tohum koşulu isim taşıyabilir** — `V6/eldekiler text[seed iten_biliniyor]` İlyas'ı anıyor;
tohumların açıklaması yok. `game_data.json` → `kanon`'a **elle yazılan, denetlenebilir** bir
harita ekle; her girdiyi tohumu YAZAN yerle karşılaştırarak doğrula (`grep -n "<tohum>"`):
```json
"tohum_isimleri": {
  "iten_biliniyor":      { "true": ["İlyas"] },
  "ilyas_yuz_tandi":     { "true": ["İlyas"] },
  "ilyas_kime_gitti":    { "polis": ["İlyas"], "koz": ["İlyas"], "cavit": ["İlyas"] },
  "cavit_ceyda_bilinir": { "true": ["Cavit", "Ceyda", "İlyas"] },
  "cengo_gecmis_bilinir":{ "true": ["Sevil"] }
}
```
(`ilyas_kime_gitti: "lekele"` bilerek yok — o oyuncu İlyas'ı tanımıyor.) Yardımcılar:
```js
function tohumlariTopla(ifade, acc = []) {          // ifadedeki {seed, esit} yaprakları
  if (!ifade || typeof ifade !== "object") return acc;
  if (ifade.seed) acc.push({ seed: ifade.seed, esit: ifade.esit === undefined ? true : ifade.esit });
  for (const k of ["all", "any"]) if (Array.isArray(ifade[k])) ifade[k].forEach(x => tohumlariTopla(x, acc));
  // {not: ...} altındaki tohum bir şeyin BİLİNMEDİĞİNİ söyler, isim taşımaz
  return acc;
}
function tohumIsimleriAl(game, t) {
  const h = (game.kanon.tohum_isimleri || {})[t.seed];
  return (h && h[String(t.esit)]) || [];
}
```
`veri_format_sozlesmesi.md` §2 KANON'a `tohum_isimleri` alanını ekle (bir cümle: "K1 için,
tohumun hangi değerinde hangi kanon isimlerinin bilindiği").

**(e) K5** (`kural5_belirsizlik`) `blob`'u tüm varyant metinlerinin birleşimi yap:
```js
const duzMetin = x => typeof x === "string" ? x : Array.isArray(x) ? x.map(v => v.metin || "").join(" ") : "";
const blob = duzMetin(c.text) + " " + duzMetin(c.meta);
```
**(f) K10** — isteğe bağlı: aynı `parcalar` mantığıyla her varyantı kendi koşuluyla denetle.
Yapmazsan belgeye "K10 yalnızca varsayılanı denetler" notu zaten var, bırak.

**Beklenen sonuç:** `node dogrulayici.js` → PASS (5 uyarı), K1 PASS. Prototipte (a)+(b) sonrası
çıkan iki hata (`V5/iliski_gor`, `V6/eldekiler`) (c) ve (d) ile kapanmalı. Çıktıyı commit
mesajına yapıştır.

**`test_bozuk.js`'e negatif:** koşullu bir varyanta isim sok, BLOCKED bekle:
```js
console.log("\n########## TEST 7: KOŞULLU METİNDE SIZINTI (K1) ##########");
let t7 = clone();
t7.vakalar[0].clues.find(c=>c.id==="komsu_ifadesi").meta.find(v=>v.kosul==="varsayilan").metin += " Sevil de oradaydı.";
dogrula(t7);
```

Belge: `dogrulayici_sozlesmesi.md` Kural 1 bölümüne iki cümle (varsayılan giriş; varyantlar
ayrı; türetilmiş olgular açılır; tohum isimleri); `OKUBENI.md` K1 satırı.

**Commit:** `Doğrulayıcı K1/K5 koşullu metni tarıyor; temel isimler yalnızca varsayılan giriş`

---

## KÜÇÜKLER (tek commit olabilir: `İnceleme küçükleri: …`)

### Kü1 · Kasa şeridi bitişik metin
`build_html.js` CSS `.kasa-serit{…}` (satır ~97): `gap:10px;flex-wrap:wrap;` ekle.
Doğrula: `arac_ui_tur.js` sonrası herhangi bir borçlu ekran görüntüsünde "₺" ile "bir aylık"
arasında boşluk var.

### Kü2 · `kasaDurumu` icra masrafını saymıyor
`motor.js` `kasaDurumu()`: `const gider = giderToplam(this.game);` → `const gider = this.aylikGiderToplam();`
Test (`test_ekonomi.js`'e): icra sürerken (`o.durum.kriz.kira = true`) `kasaDurumu().aylikGider`
`===` `o.aylikGiderToplam()` ve `>` `giderToplam(g)`.

### Kü3 · V3/`mahalle_don` "şu tahsildar"
`game_data.json` V3 → `mahalle_don.text` varyant dizisi: `ilyas_tahsildar` koşullu = mevcut metin;
`varsayilan` = "…bu İlyas olabilir, kenar mahallede tanınan biri." (Cengo'nun sokak bilgisi;
"tahsildar" ve V2 imâsı yok). `test_sizinti` İMA'ya: `{ kelimeler: ["şu tahsildar"], olgular:
["ilyas_tahsildar"] }`.

### Kü4 · V4 varsayılan girişi — V1'i reddedip hiçbir şey açmayan oyuncuda Kaya dosyası yok
`game_data.json` V4 → `giris` dizisine, `kaya_kayit_gordu` varyantı ile `varsayilan` **arasına**
üçüncü varyant:
```json
{ "kosul": { "all": [ { "seed": "ilk_karar", "esit": "reddetti" }, { "seed": "kaya_kayit_gordu", "esit": false } ] },
  "metin": "<Cengo'nun kâğıdı, Cavit'in V3'te bıraktığı dosyanın arasından çıkmış — Kaya'nın hesabından her ay giden isimsiz bir para. Peri'nin merakı.>",
  "acilan": ["gizemli_odeme"] }
```
Metni yaz; "kayıtlarına bakarken / kayıtlarında / dekont" kelimelerini **kullanma**
(test_sizinti İMA). `kaya_kayit_gordu` tohumu koşul sağlanmayınca `false` yazılıyor
(`motor.kararVer` → `esit_ise` dalı), o yüzden `esit:false` çalışır — `node -e` ile V1 reddet
→ V2 → V3 → V4 girişinin bu varyanta düştüğünü doğrula.

### Kü5 · `test_yanc.js:13` sabit eşik
`const ESIK = g.vakalar.find(v => v.id === "YAN-C").belirir.kosul.borc_en_az;`

### Kü6 · `ucret` özelliği: kayıt yüklemede çifte düşüm + `harcanan` kaybı + simülasyon kasayı bilmiyor
Özellik kullanılmıyor ama tasarımda var ("yoksulluk bilgiye erişimi kısıtlar"); **kaldırma, düzelt**:
1. `motor.js` `durumYukle`: kaynakları yeniden açan döngüyü `this._yukleniyor = true; … finally
   this._yukleniyor = false;` içine al; `kaynakAc` içinde ücret düşümü `if (ucret && !this._yukleniyor)`.
   Kasa denetimi (`ucret > para`) yüklemede de atlanmalı (para zaten düşülmüş).
2. `durumAl`: `aktif: { id, acilan, harcanan: d.aktif.harcanan || 0 }`; `durumYukle`: yükledikten
   sonra `this.durum.aktif.harcanan = k.aktif.harcanan || 0`. `test_kayit.js`'teki
   `"acilan,id"` iddiasını `"acilan,harcanan,id"` yap.
3. `_kirletmeyeZorlarMi` ve `_cekirdekMaliyet` kopyalarına `o.durum.para = this.durum.para;
   o.durum.borc = this.durum.borc;` ekle.
4. `test_kayit.js`'e senaryo: veri kopyasında bir kaynağa `ucret: 1000` ver; kaynağı aç → kaydet →
   yükle; `para` **aynı** (ikinci kez düşmedi) ve `aktif.harcanan` korunmuş.
   `test_ekonomi.js:121-127` zaten ücretli kaynak yoksa atlıyor — dokunma.

### Kü7 · Motorda sabit kodlu karar kimlikleri (`hepsini_ifsa`, `cavit_ver`)
`game_data.json` V6 kararlarına alan: `hepsini_ifsa` → `"cengo_etki": { "ust_sinir": 2 }`;
`cavit_ver` → `"cengo_etki": { "muhur": 6, "eger_kademe": "Yakın" }`.
`motor.js` `kararVer` "Final mührü" bloğu: id karşılaştırması yerine `d.cengo_etki` oku:
```js
    if (finalDurumOnce !== null && d.cengo_etki) {
      const e = d.cengo_etki;
      if (typeof e.ust_sinir === "number") this.durum.cengoBag = Math.min(this.durum.cengoBag, e.ust_sinir);
      if (typeof e.muhur === "number" && (!e.eger_kademe || finalDurumOnce === e.eger_kademe)) this.durum.cengoBag = e.muhur;
    }
```
`test_v6.js` mevcut mühür/düşüş iddiaları geçmeli; ek olarak "veride cengo_etki tanımlı" iddiası
(sayı değil, alanın varlığı). `veri_format_sozlesmesi.md` DECISION şemasına alanı ekle.

### Kü8 · `durumYukle` para yedeği
`motor.js:655` `this.game.baslangic?.para ?? 2400` → `ekonomiAl(this.game).baslangic_kasa`;
borç için `?? 0` kalsın.

### Kü9 · Yakınlaştırma kilidi
`build_html.js:20` viewport: `maximum-scale=1.0, user-scalable=no` kaldır → `width=device-width, initial-scale=1.0, viewport-fit=cover`.
Sonra `arac_ui_tur.js`: yatay taşma yok kalmalı.

### Kü10 · Üst şerit düğmeleri 29 px
`build_html.js` `.ust-btn`: `min-height:40px` (padding'i ona göre). `arac_ui_tur.js` çıktısında
"40px altı dokunma hedefi: yok" görülmeli; üst şerit Pixel 5'te tek satırda kalmalı (ekran
görüntüsüne bak; sığmıyorsa `.ust-butonlar`'a `flex-wrap`).

### Kü11 · Belge bayatlıkları
- `OKUBENI.md:14,31` "34 görsel" → 44.
- `OKUBENI.md:142` "9 tohum" → 6.
- `OKUBENI.md:~1130-1133` "Ekonomi → Kalan" paragrafındaki tekrar eden ve "şu an sıfır
  getiriyorlar" diyen ikinci cümleyi sil (yan vakalar artık ücret getiriyor).
- `OKUBENI.md:1198` "Yayın öncesi DEV_MOD = false" maddesini sil (yapıldı).
- `gorsel_stil_sozlesmesi.md:160` "tek teknik: koyu yağlıboya" → "tek teknik: foto-gerçekçi
  sinematik render (§3)"; §10 şablon başı `[Koyu yağlıboya, İstanbul noir.]` → `[Foto-gerçekçi,
  sinematik, atmosferik dijital render; İstanbul Noir.]`.
- `dogrulayici.js:3` kural sayısı (K1-b'de yapıldıysa atla).

### Kü12 · Ses keşfi 26 HEAD isteği
**Yapma.** Gerçek mp3'ler gelince `.wav` yedeği ile birlikte kalkacak; not olarak kalsın.

---

## Şüpheliler — yapma, sor
`inceleme_fable.md` "ŞÜPHELİ" bölümündekiler (ruh hâli sınıflaması, istatistik paneli, künye
tanışma koşulları) tasarım kararı. Uygulamadan önce sahibine tek tek sor; cevap gelmeden dokunma.

## Bitiş kontrol listesi
- [ ] `node dogrulayici.js` → PASS (5 uyarı), K1 ve K11 PASS
- [ ] `node build_html.js` → "yayın modu"
- [ ] tüm `test_*.js` (test_bozuk hariç) geçiyor; test_bozuk 6 ve 7 numaralı senaryolarda BLOCKED
- [ ] `node arac_ui_tur.js` → JS hatası yok, taşma yok, küçük hedef yok, "Dosya açık"
- [ ] `inceleme_fable.md` her bulgu `✔ <commit>` ile işaretli
- [ ] `CLAUDE.md` "Şu anki durum" + test sayısı güncel
- [ ] `git log` — her bulgu ayrı commit, hepsi `main`'de push'lu
