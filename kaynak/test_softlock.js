const { Oyun } = require("./motor.js");
const g = JSON.parse(require("fs").readFileSync("game_data.json","utf-8"));
// Bu test vakanın İÇERİK mantığını sınıyor (türetme, kapı, karar), ekonomiyi
// değil. Kasa boşken elektrik kesiliyor ve araştırma hakkı bir azalıyor —
// gerçek bir davranış, ama burada ölçmek istediğimiz şey o değil. Ajansı
// ödeyebilir durumda tutuyoruz ki tam bütçeyle sınansın.
const ODEYEBILIR = 2000000;
const varlikli = () => { const o = new Oyun(g); o.durum.para = ODEYEBILIR; return o; };
let hata=0; const k=(ad,ok)=>{console.log((ok?"✓":"✗ BAŞARISIZ")+" "+ad); if(!ok)hata++;};

// Her vaka için: açgözlü kaynak açma → mutlaka bir karara ulaşılmalı
console.log("=== SOFTLOCK TARAMASI: her vaka bir karara ulaşabiliyor mu? ===");
for (const vaka of g.vakalar) {
  // vakayı çeşitli seed durumlarıyla dene (giriş varyantları için)
  const seedSetleri = [
    {}, {ilyas_yuz_tandi:true}, {kaya_kayit_gordu:true},
    {cavit_ceyda_bilinir:true}, {ilyas_kime_gitti:"polis"}, {cavit_karsi_konum:"silahli"}
  ];
  let herZamanKararVar = true;
  for (const seeds of seedSetleri) {
    let o = varlikli();
    Object.assign(o.durum.seeds, seeds);
    o.vakaBaslat(vaka.id);
    // açgözlü: açılabilen tüm kaynakları aç (bedelsiz + bedelli), karar çıkana dek
    let guvenlik = 0;
    while (o.acikKararlar().length === 0 && guvenlik < 20) {
      const acik = o.acikKaynaklar();
      if (acik.length === 0) break;  // açılacak kaynak kalmadı
      const r = o.kaynakAc(acik[0].id);
      if (r.hata) break;  // araştırma bitti
      guvenlik++;
    }
    if (o.acikKararlar().length === 0) { herZamanKararVar = false; break; }
  }
  k(`${vaka.id}: her giriş durumunda bir karara ulaşılıyor`, herZamanKararVar);
}

console.log("\n=== UÇTAN UCA: 8 vakalık tam oyun (vicdanlı yol) ===");
let o = varlikli();
const oyna = (id, kaynaklar, karar) => {
  o.vakaBaslat(id);
  for (const c of kaynaklar) o.kaynakAc(c);
  const r = o.kararVer(karar);
  if (r.hata) { console.log("  ✗ "+id+" kararı reddedildi: "+r.hata); hata++; }
  return r;
};

// V1: araştır, gizli kaz
oyna("V1", ["olay_yeri","ceyda_gorusme","cengo_baglanti"], "gizli_kaz");
k("V1 sonrası cengoBag verideki gizli_kaz değeriyle uyuşuyor",
  o.durum.cengoBag === g.vakalar.find(v=>v.id==="V1").decisions.find(d=>d.id==="gizli_kaz").cengoBag);
k("V1 sonrası seed kaya_kayit_gordu=true", o.durum.seeds.kaya_kayit_gordu===true);

// YAN-A belirmiş olmalı mı? V1 sonrası hayır (sonra=V2)
// V2: tam gerçek
oyna("V2", ["nesrin_gorusme","takip_gece","kenar_ev_gozlem","mahalle_konus"], "aldatmiyor_de");
k("V2 sonrası ilyas_yuz_tandi=true", o.durum.seeds.ilyas_yuz_tandi===true);
k("V2 sonrası YAN-A masada", o.masadakiVakalar().includes("YAN-A"));

// YAN-A oyna (Cengo'ya bırak)
oyna("YAN-A", ["tehdit_arastir","eski_kayit","cengo_cumle"], "cengoya_birak");
k("YAN-A sonrası cengo_gecmis_bilinir=true", o.durum.seeds.cengo_gecmis_bilinir===true);

// V3: İlyas'ı tanıdık yüzle çöz, polise ver
oyna("V3", ["cavit_brief","tanik_gorusme","mahalle_don","foto_goster","cengo_okuma"], "polise_ver");
k("V3 sonrası iten_biliniyor=true", o.durum.seeds.iten_biliniyor===true);
k("V3 sonrası el_sezildi=true (cengo_okuma açıldı)", o.durum.seeds.el_sezildi===true);
k("V3 sonrası ilyas_kime_gitti=polis", o.durum.seeds.ilyas_kime_gitti==="polis");

// V4: keşif (kaya_kayit_gordu=true → doğrudan), tam iyilik, sessiz çöz
oyna("V4", ["odeme_iz","cocuk_bul","hastane_kayit","aile_gorusme"], "sessiz_coz");
k("V4 sonrası kaya_insani=true", o.durum.seeds.kaya_insani===true);
k("V4 sonrası YAN-B masada", o.masadakiVakalar().includes("YAN-B"));

// YAN-B: tam sahip çık + Sezon 2 kancası
oyna("YAN-B", ["dolandirici_iz","peri_ic_ses","avukat_kirintisi"], "tam_sahip_cik");
k("YAN-B sonrası peri_yuzlesti=true", o.durum.seeds.peri_yuzlesti===true);
k("YAN-B sonrası sezon2 ipi=true", o.durum.seeds.sezon2_avukat_ipi===true);

// V5: komplo çöz (tam_resim), kanıt biriktir
oyna("V5", ["cavit_ilyas_ilgi","ilyas_gecmis","cengo_mahalle_donus","cavit_izle","iliski_gor","ceyda_oku"], "kanit_biriktir");
k("V5 sonrası cavit_ceyda_bilinir=true", o.durum.seeds.cavit_ceyda_bilinir===true);
k("V5 sonrası cavit_karsi_konum=silahli", o.durum.seeds.cavit_karsi_konum==="silahli");

// V6: final — kaya gerçeğini öğren, Cavit'i ver
console.log("  [V6 öncesi cengoBag: "+o.durum.cengoBag+", durum: "+o.cengoDurum()+"]");
oyna("V6", ["kaya_izi"], "cavit_ver");
k("V6 sonrası final_karar=cavit", o.durum.seeds.final_karar==="cavit");
k("V6 sonrası kaya_gercek_ogrenildi=true", o.durum.seeds.kaya_gercek_ogrenildi===true);
k("8 vakanın hepsi tamamlandı", o.durum.tamamlanan.length===8);
console.log("  [FİNAL cengoBag: "+o.durum.cengoBag+", durum: "+o.cengoDurum()+"]");

console.log("\n"+(hata===0?"=== TÜM OYUN UÇTAN UCA GEÇTİ ===":"=== "+hata+" BAŞARISIZ ==="));
process.exit(hata?1:0);
