const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
// Bu test vakanın İÇERİK mantığını sınıyor (türetme, kapı, karar), ekonomiyi
// değil. Kasa boşken elektrik kesiliyor ve araştırma hakkı bir azalıyor —
// gerçek bir davranış, ama burada ölçmek istediğimiz şey o değil. Ajansı
// ödeyebilir durumda tutuyoruz ki tam bütçeyle sınansın.
const ODEYEBILIR = 2000000;
const varlikli = () => { const o = new Oyun(g); o.durum.para = ODEYEBILIR; return o; };
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== 'BELİRİR': YAN-B V4'ten sonra ===");
let o=varlikli();
function tamamla(o){
  o.vakaBaslat("V1"); o.kararVer("reddet");
  o.vakaBaslat("V2"); o.kararVer("kuru_rapor");
  o.vakaBaslat("V3"); o.kararVer("tanigi_lekele");
  o.vakaBaslat("V4"); o.kaynakAc("odeme_iz"); o.kararVer("koz_yap");  // araştır sonra karar
}
tamamla(o);
k("V4 sonrası YAN-B masada VAR", o.masadakiVakalar().includes("YAN-B"));

console.log("\n=== GİRİŞ → KEŞİF → KARARLAR ===");
o.vakaBaslat("YAN-B");
k("girişte nadire_geldi+dolandirici_var açıldı", o.bilinenler().includes("nadire_geldi") && o.bilinenler().includes("dolandirici_var"));
k("başta gecistir AÇIK (gate yok)", o.acikKararlar().some(x=>x.id==="gecistir"));
k("başta tam_sahip_cik KAPALI", !o.acikKararlar().some(x=>x.id==="tam_sahip_cik"));
o.kaynakAc("dolandirici_iz");
k("sadece_coz açıldı (dolandirici_kim)", o.acikKararlar().some(x=>x.id==="sadece_coz"));
const hakOnce = o.durum.aktif.arastirmaKalan;
o.kaynakAc("peri_ic_ses");  // bedelsiz
// bütçeden bağımsız iddia: bedelsiz kaynak hak HARCAMAMALI
k("peri_ic_ses bedelsiz (araştırma korundu)", o.durum.aktif.arastirmaKalan===hakOnce);
k("sorumluluk_tam türedi", o.bilinenler().includes("sorumluluk_tam"));
k("tam_sahip_cik + gercegi_soyle açıldı", o.acikKararlar().some(x=>x.id==="tam_sahip_cik") && o.acikKararlar().some(x=>x.id==="gercegi_soyle"));

console.log("\n=== SEZON 2 KANCASI (opsiyonel) ===");
o.kaynakAc("avukat_kirintisi");
k("avukat_izi öğrenildi", o.bilinenler().includes("avukat_izi"));

console.log("\n=== SAHİPLENME: oyunun en ağır vicdan hamlesi + tohumlar ===");
let bagOnce=o.durum.cengoBag;
const SAHIP = g.vakalar.find(x=>x.id==="YAN-B").decisions.find(d=>d.id==="tam_sahip_cik");
let r=o.kararVer("tam_sahip_cik");
// Sabit sayı yerine iddianın kendisi: bu karar bağı verilerdeki değeri kadar
// yükseltmeli ve YAN-B'nin en yüksek vicdan hamlesi olmalı. (Değer 2 iken
// gercegi_soyle ile eşitti; aynı vicdanda farklı para baskınlık demekti.)
k("tam_sahip_cik bağı verideki değeri kadar yükseltti", o.durum.cengoBag===bagOnce+SAHIP.cengoBag);
k("YAN-B'nin en vicdanlı kararı bu",
  g.vakalar.find(x=>x.id==="YAN-B").decisions.every(d=>d.cengoBag<=SAHIP.cengoBag));
k("peri_yuzlesti tohumu=true", o.durum.seeds.peri_yuzlesti===true);
k("sezon2_avukat_ipi tohumu=true", o.durum.seeds.sezon2_avukat_ipi===true);

console.log("\n=== GEÇİŞTİR: gate'siz, her zaman kaçış mümkün ===");
let o2=varlikli();
o2.vakaBaslat("V1"); o2.kararVer("reddet"); o2.vakaBaslat("V2"); o2.kararVer("kuru_rapor"); o2.vakaBaslat("V3"); o2.kararVer("tanigi_lekele"); o2.vakaBaslat("V4"); o2.kaynakAc("odeme_iz"); o2.kararVer("koz_yap");
o2.vakaBaslat("YAN-B");
let r2=o2.kararVer("gecistir");  // hiç araştırmadan kaç
k("araştırmasız gecistir seçilebildi", o2.durum.tamamlanan.includes("YAN-B"));
k("gecistir cengoBag -2", r2.cengoBag===o2.durum.cengoBag && o2.durum.seeds.yanb_karar==="gecistirdi");

console.log("\n=== PARA: HİÇBİR SEÇENEK KAZANDIRMIYOR ===");
{
  const v = g.vakalar.find(x => x.id === "YAN-B");
  const tl = n => Math.round(n).toLocaleString("tr-TR") + " ₺";
  const s = [...v.decisions].sort((a, b) => a.cengoBag - b.cengoBag);
  for (const x of s) console.log("   " + x.id.padEnd(15) + tl(x.para).padStart(11) + "   vicdan " + (x.cengoBag > 0 ? "+" : "") + x.cengoBag);

  // Nadire beş parasız — Peri onu batıran kişi. Bu vakada ücret diye bir şey
  // yok: en iyi ihtimal sıfır, gerisi Peri'nin cebinden çıkıyor. Oyunun tek
  // "kazanç kapısı olmayan" vakası ve kasten öyle.
  k("hiçbir karar para KAZANDIRMIYOR", v.decisions.every(d => d.para <= 0),
    v.decisions.map(d => tl(d.para)).join(" | "));
  k("geçiştirmek tek 'bedelsiz' seçenek",
    v.decisions.find(d => d.id === "gecistir").para === 0);
  k("vicdan yükseldikçe cepten çıkan artıyor", s.every((x, i) => i === 0 || x.para < s[i - 1].para));

  // Eskiden tam_sahip_cik ve gercegi_soyle ikisi de +2 idi: biri sadece
  // itiraf, öteki itiraf + kadının zararını kendi cebinden kapatmak. Aynı
  // vicdan değerinde farklı para, K8'e göre baskınlık. Kararın kendi metni
  // zaten "en pahalı, en dürüst hali" diyordu — +3 onu söylüyor.
  const bag = Object.fromEntries(v.decisions.map(d => [d.id, d.cengoBag]));
  k("tam sahip çıkmak, yalnızca itiraf etmekten daha ağır",
    bag.tam_sahip_cik > bag.gercegi_soyle, `${bag.tam_sahip_cik} > ${bag.gercegi_soyle}`);

  // Cepten ödemek borcu gerçekten büyütüyor
  const o = varlikli();
  o.durum.para = 0; o.durum.borc = 50000;
  o.durum.tamamlanan = ["V1", "V2", "V3", "V4"];
  o.vakaBaslat("YAN-B");
  // sorumluluk_tam = (nadire_geldi + batis_enkazi) + peri_sorumluluk
  o.kaynakAc("dolandirici_iz"); o.kaynakAc("peri_ic_ses");
  const acik = o.acikKararlar().map(x => x.id);
  k("cepten ödeten karar açıldı (test anlamlı)", acik.includes("tam_sahip_cik"), acik.join(","));
  const r = o.kararVer("tam_sahip_cik");
  k("tam_sahip_cik: parasız oyuncuda doğrudan borca yazıldı", o.durum.borc > 50000,
    tl(50000) + " → " + tl(o.durum.borc));
  k("yan iş olduğu için sabit gider kesilmedi", r.ekonomi.giderler.length === 0);
}

console.log("\n"+(hata===0?"=== YAN-B TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
