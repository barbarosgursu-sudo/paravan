const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
// Bu test V4'ün İÇERİK mantığını sınıyor (türetme, kapı, vicdan), ekonomiyi
// değil. Kasa boşken Cengo'ya ödenemiyor ve bağ ayrıca bir düşüyor —
// gerçek bir davranış ama burada ölçtüğümüz şey kararın KENDİ etkisi.
const varlikli = () => { const o = new Oyun(g); o.durum.para = 2000000; return o; };
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

console.log("=== YOL A: Kaya'nın kayıtlarına BAKMIŞ (kaya_kayit_gordu=true) ===");
let o=varlikli(); o.durum.seeds.kaya_kayit_gordu=true;
let gr=o.vakaBaslat("V4");
k("giriş 'zaten görmüştü' varyantı", gr.giris.includes("zaten görmüştü"));
k("gizemli_odeme girişte açıldı", o.bilinenler().includes("gizemli_odeme"));
k("odeme_iz baştan açık (needs karşılandı)", o.acikKaynaklar().some(x=>x.id==="odeme_iz"));

console.log("\n=== YOL B: BAKMAMIŞ (varsayılan, Cengo tetikler) ===");
let o2=varlikli();  // seed yok
let gr2=o2.vakaBaslat("V4");
k("giriş 'Cengo geldi' varyantı", gr2.giris.includes("Cengo elinde bir kağıtla"));
k("YOL B'de de gizemli_odeme açıldı", o2.bilinenler().includes("gizemli_odeme"));
console.log("   → İki giriş de aynı olguyla başlıyor; sonrası birebir aynı.");

console.log("\n=== TAM KEŞİF: iyilik_tam → şefkatli kararlar ===");
let o3=varlikli(); o3.durum.seeds.kaya_kayit_gordu=true; o3.vakaBaslat("V4");
["odeme_iz","cocuk_bul","hastane_kayit","aile_gorusme"].forEach(id=>o3.kaynakAc(id));
k("odeme_kayaya_ait türedi", o3.bilinenler().includes("odeme_kayaya_ait"));
k("iyilik_tam türedi", o3.bilinenler().includes("iyilik_tam"));
k("aileye_soyle AÇIK", o3.acikKararlar().some(x=>x.id==="aileye_soyle"));
k("sessiz_coz AÇIK", o3.acikKararlar().some(x=>x.id==="sessiz_coz"));
const V4 = g.vakalar.find(x=>x.id==="V4");
const SESSIZ = V4.decisions.find(d=>d.id==="sessiz_coz");
let r=o3.kararVer("sessiz_coz");
// Sabit sayı yerine iddia: bu karar bağı verideki değeri kadar yükseltmeli ve
// V4'ün en vicdanlı hamlesi olmalı. (Değer 2 iken aileye_soyle ile eşitti;
// aynı vicdanda farklı para baskınlık demekti — biri cebinden ödüyor, öteki
// ödemiyor.)
k("sessiz_coz bağı verideki değeri kadar yükseltti", o3.durum.cengoBag===SESSIZ.cengoBag);
k("V4'ün en vicdanlı kararı bu", V4.decisions.every(d=>d.cengoBag<=SESSIZ.cengoBag));
k("kaya_insani tohumu=true (V6 duygusal ağırlık)", o3.durum.seeds.kaya_insani===true);
k("ceyda_para_ipi tohumu=true (V5 ipi)", o3.durum.seeds.ceyda_para_ipi===true);

console.log("\n=== SIĞ KEŞİF: sadece odeme_kayaya_ait → koz açık, şefkat kapalı ===");
let o4=varlikli(); o4.durum.seeds.kaya_kayit_gordu=true; o4.vakaBaslat("V4");
o4.kaynakAc("odeme_iz");  // gizemli_odeme(giriş) + durma_tarihi → odeme_kayaya_ait türer
k("odeme_kayaya_ait türedi (tek kaynakla)", o4.bilinenler().includes("odeme_kayaya_ait"));
k("koz_yap AÇIK (odeme_kayaya_ait yeter)", o4.acikKararlar().some(x=>x.id==="koz_yap"));
k("aileye_soyle KAPALI (iyilik_tam yok)", !o4.acikKararlar().some(x=>x.id==="aileye_soyle"));
console.log("   → Yüzeyde kalan sadece 'kullan'ı görür; derine inen şefkati kazanır.");

console.log("\n=== PARA: MÜŞTERİSİ OLMAYAN AY ===");
{
  const v = g.vakalar.find(x => x.id === "V4");
  const tl = n => (n>0?"+":"") + Math.round(n).toLocaleString("tr-TR") + " ₺";
  const s = [...v.decisions].sort((a, b) => a.cengoBag - b.cengoBag);
  for (const x of s) console.log("   " + x.id.padEnd(15) + tl(x.para).padStart(11) + "   vicdan " + (x.cengoBag>0?"+":"") + x.cengoBag);

  // V4'ün müşterisi YOK: Cengo'nun bulduğu bir kâğıt var, ücret ödeyen kimse
  // yok. Para ancak ipi ÇEKMEYEREK ya da bildiğini kendine saklayarak
  // geliyor — yani ayın kalanını ödeyen işlere ayırarak.
  k("vicdan yükseldikçe para düşüyor", s.every((x,i) => i===0 || x.para < s[i-1].para));
  const p = Object.fromEntries(v.decisions.map(d => [d.id, d.para]));
  k("şefkatli seçenekler Peri'nin cebinden çıkıyor", p.aileye_soyle < 0 && p.sessiz_coz < 0);
  k("para ancak ipi çekmeyerek/soğuk davranarak geliyor", p.bos_ver > 0 && p.koz_yap > 0);
  k("araştırıp sessiz kalmak ne kazandırıyor ne götürüyor", p.kimligi_sakla === 0);

  // Omurga vaka: ay kapanıyor, sabit giderler kesiliyor. Yani en kârlı
  // seçenek bile ayı zararla bitiriyor.
  const o = varlikli();
  o.durum.para = 200000; o.durum.seeds.kaya_kayit_gordu = true;
  o.durum.tamamlanan = ["V1","V2","V3"];
  o.vakaBaslat("V4");
  const once = o.durum.para;
  const r2 = o.kararVer("bos_ver");
  k("omurga olduğu için sabit giderler kesildi", r2.ekonomi.giderler.length > 0);
  k("en çok kazandıran seçenek bile ayı zararla bitiriyor", o.durum.para < once,
    tl(once) + " → " + tl(o.durum.para));
}

console.log("\n=== KAYITLARI NEREDEN GÖRDÜ? (köprü gerçek mi) ===");
{
  // V4'ün girişi "Peri o ödemeyi Kaya'nın KAYITLARINA bakarken görmüştü"
  // diyor. Eskiden bunu tetikleyen şey olay yeri incelemesiydi — oysa o
  // kaynak polis fotoğraflarından ibaret, banka kayıtlarına erişim sağlamaz.
  // Köprü artık sigorta dosyası: ölüm soruşturması yürüten sigorta hesap
  // dökümlerini ister, ve dosyayı Peri'ye veren Cavit'in kendisi.
  const kur = (yol, karar) => {
    const o = varlikli();
    o.vakaBaslat("V1");
    for (const c of yol) o.kaynakAc(c);
    const kr = o.acikKararlar().map(x => x.id);
    o.kararVer(kr.includes(karar) ? karar : kr[0]);
    return o;
  };
  k("sigorta dosyasını okuyan kayıtları görmüş sayılıyor",
    kur(["sigorta_yazisi"], "temiz_rapor").durum.seeds.kaya_kayit_gordu === true);
  k("SADECE olay yerine bakan görmüş SAYILMIYOR",
    kur(["olay_yeri"], "temiz_rapor").durum.seeds.kaya_kayit_gordu !== true);
  k("hiç bakmayan görmüş sayılmıyor",
    kur([], "temiz_rapor").durum.seeds.kaya_kayit_gordu !== true);
  k("kendine dosya açan (gizli_kaz) görmüş sayılıyor",
    kur(["polis_dosyasi", "olay_yeri", "ceyda_gorusme"], "gizli_kaz").durum.seeds.kaya_kayit_gordu === true);

  // Köprünün metinde de görünmesi şart: yoksa oyuncu nereden bildiğini anlamaz.
  const sig = g.vakalar.find(v => v.id === "V1").clues.find(c => c.id === "sigorta_yazisi");
  const duz = x => typeof x === "string" ? x : JSON.stringify(x);
  k("sigorta kaynağı hesap dökümlerinden söz ediyor",
    /hesap döküm/i.test(duz(sig.text)), duz(sig.text).slice(0, 120));
  k("tohum koşulu sigorta kaynağına bağlı",
    JSON.stringify(g.vakalar.find(v => v.id === "V1").seeds.kaya_kayit_gordu)
      .includes("sigorta_yazisi_acildi"));
  k("artık olay yerine bağlı DEĞİL",
    !JSON.stringify(g.vakalar.find(v => v.id === "V1").seeds.kaya_kayit_gordu)
      .includes("olay_yeri_acildi"));
}

console.log("\n"+(hata===0?"=== V4 TEST TAMAM ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
