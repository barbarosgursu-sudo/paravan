// ============================================================================
// PARAVAN DETEKTİFLİK — DOĞRULAYICI v1
// Veri Format Sözleşmesi'nden okur, Doğrulayıcı Sözleşmesi'nin 5 kuralını çalıştırır.
// Kullanım: node dogrulayici.js  (GAME'i ./game_data.js'ten import eder)
// ============================================================================

// ---- İFADE değerlendirme + olgu toplama --------------------------------------
// Bir ifadedeki tüm yaprak-olguları toplar (erişilebilirlik/gate analizi için)
function ifadeOlgulari(ifade, acc = new Set()) {
  if (typeof ifade === "string") acc.add(ifade);
  else if (ifade && typeof ifade === "object") {
    if (Array.isArray(ifade.all)) ifade.all.forEach(x => ifadeOlgulari(x, acc));
    if (Array.isArray(ifade.any)) ifade.any.forEach(x => ifadeOlgulari(x, acc));
    if (ifade.not) ifadeOlgulari(ifade.not, acc);
    // seed / cengoBag_en_az yaprakları olgu değildir → atlanır
  }
  return acc;
}

// Bir ifadeyi bilinen olgu kümesine göre değerlendirir (motor da bunu kullanacak)
function ifadeDegerlendir(ifade, bilinen) {
  if (typeof ifade === "string") return bilinen.has(ifade);
  if (!ifade || typeof ifade !== "object") return false;
  if (Array.isArray(ifade.all)) return ifade.all.every(x => ifadeDegerlendir(x, bilinen));
  if (Array.isArray(ifade.any)) return ifade.any.some(x => ifadeDegerlendir(x, bilinen));
  if (ifade.not) return !ifadeDegerlendir(ifade.not, bilinen);
  if (ifade.seed || ifade.cengoBag_en_az) return true; // runtime kontrolü; statik analizde nötr
  return false;
}

// Bir vakada "açılabilir" tüm olguları hesaplar:
// giriş acilan olguları + tüm clue reveals + türetilebilen knowledge (sabit nokta)
function acilabilirOlgular(vaka) {
  const acik = new Set();
  // giriş varyantlarının açtığı olgular (müşterisiz/keşif vakaları için)
  (vaka.giris || []).forEach(g => (g.acilan || []).forEach(o => acik.add(o)));
  vaka.clues.forEach(c => (c.reveals || []).forEach(r => acik.add(r)));
  let degisti = true;
  while (degisti) {
    degisti = false;
    for (const k of vaka.knowledge || []) {
      if (!acik.has(k.turetilen) && ifadeDegerlendir(k.ifade, acik)) {
        acik.add(k.turetilen); degisti = true;
      }
    }
  }
  return acik;
}

// Türkçe ek toleranslı isim arama: "İlyas", "İlyas'ı", "İlyas'ın" → eşleşir
function isimGeciyor(metin, isim) {
  // Özel isim: kelime başında, ardından ya kelime biter ya da KESME ile ek alır (Sevil, Sevil'in).
  // "Sevilen" gibi doğrudan harf eklenmiş kelimeler ismin kendisi değildir → eşleşmez.
  const esc = isim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(^|[^\\p{L}])" + esc + "(['’]\\p{L}*)?(?![\\p{L}])", "u");
  return re.test(metin);
}

// ============================================================================
// KURALLAR
// ============================================================================

// Kural 1 — Sözlük: metin/görselde geçen her KANON ismi, clue'nun needs∪reveals'inde
// karşılığı olan bir olguyla taşınmalı. İsim, o clue'nun herhangi bir reveals/needs
// olgusunun açıklamasında (facts) geçiyorsa "taşınıyor" sayılır.
function kural1_sozluk(game, hatalar) {
  const KAHRAMAN = game.kanon.kahramanlar || ["Peri", "Cengo"];
  for (const vaka of game.vakalar) {
    const facts = vaka.facts || {};
    // TEMEL bilinen isimler: kahramanlar + girişte tanıtılanlar (vaka başında zaten sahnede)
    const girisMetin = (vaka.giris || []).map(g => g.metin || "").join(" ");
    const temel = new Set(KAHRAMAN.filter(k => true));
    for (const isim of game.kanon.isimler) {
      if (isim.endsWith("-YOK")) continue;
      if (isimGeciyor(girisMetin, isim)) temel.add(isim);
    }
    for (const c of vaka.clues) {
      const havuz = new Set([...(c.needs || []).flatMap(n => typeof n === "string" ? [n] : [...ifadeOlgulari(n)]),
                             ...(c.reveals || [])]);
      // havuzdaki olguların açıklama metinleri (isim bu olgularda geçebilir)
      const havuzMetin = [...havuz].map(o => facts[o] || "").join(" ");
      const blob = (c.text || "") + " " + (c.meta || "");

      for (const isim of game.kanon.isimler) {
        if (isim.endsWith("-YOK")) continue;
        if (temel.has(isim)) continue;   // kahraman ya da girişte tanıtılmış → serbest
        if (isimGeciyor(blob, isim)) {
          // Temelde olmayan isim: ya bu clue onu ilk açıyor (havuz olgusu taşıyor),
          // ya da bir needs olgusu üzerinden daha önce açılmış olmalı.
          if (!isimGeciyor(havuzMetin, isim)) {
            hatalar.push(`[K1] ${vaka.id}/${c.id}: metin '${isim}' diyor ama needs/reveals olgularının hiçbiri onu taşımıyor (temelde de yok).`);
          }
        }
      }
      // Görsel: gosterir ⊆ needs∪reveals (olgu bazlı)
      if (c.gorsel && Array.isArray(c.gorsel.gosterir)) {
        for (const g of c.gorsel.gosterir) {
          const isFact = Object.prototype.hasOwnProperty.call(facts, g);
          if (isFact && !havuz.has(g)) {
            hatalar.push(`[K1] ${vaka.id}/${c.id}: görsel '${g}' olgusunu gösteriyor ama needs/reveals'te yok.`);
          }
        }
      }
    }
  }
}

// Kural 2 — Erişilebilirlik: knowledge ve gate'lerde kullanılan her olgu açılabilir olmalı
function kural2_erisilebilirlik(game, hatalar) {
  for (const vaka of game.vakalar) {
    const acik = acilabilirOlgular(vaka);
    // knowledge girdileri
    for (const k of vaka.knowledge || []) {
      for (const olgu of ifadeOlgulari(k.ifade)) {
        if (!acik.has(olgu)) hatalar.push(`[K2] ${vaka.id}: knowledge '${k.turetilen}' ulaşılamaz olguya dayanıyor: '${olgu}'.`);
      }
    }
    // decision gate'leri
    for (const d of vaka.decisions) {
      if (d.gate && d.gate !== "yok") {
        for (const olgu of ifadeOlgulari(d.gate)) {
          if (!acik.has(olgu)) hatalar.push(`[K2] ${vaka.id}: karar '${d.id}' ulaşılamaz gate olgusuna dayanıyor: '${olgu}'.`);
        }
      }
    }
  }
}

// Kural 3 — Döngü: clue needs grafiği DAG olmalı + en az bir açık giriş (needs boş)
function kural3_dongu(game, hatalar) {
  for (const vaka of game.vakalar) {
    // clue'lar arası bağ: A'nın needs olgusunu B reveals ediyorsa A→B kenarı yok;
    // biz olgu-düzeyinde döngü ararız (needs olgusu ↔ reveals olgusu zinciri)
    // Basit yaklaşım: clue düğüm; bir clue'nun needs'i, başka clue'nun reveals'iyle karşılanıyorsa kenar
    const revToClue = {};
    vaka.clues.forEach(c => (c.reveals || []).forEach(r => (revToClue[r] ??= []).push(c.id)));
    const kenar = {}; // clue.id -> bağımlı olduğu clue.id'ler
    vaka.clues.forEach(c => {
      kenar[c.id] = [];
      (c.needs || []).forEach(n => {
        const olgular = typeof n === "string" ? [n] : [...ifadeOlgulari(n)];
        olgular.forEach(o => (revToClue[o] || []).forEach(src => kenar[c.id].push(src)));
      });
    });
    // açık giriş var mı? (needs:[] olan clue VEYA giriş acilan'ıyla açılabilen bir clue)
    const girisAcilan = new Set();
    (vaka.giris || []).forEach(g => (g.acilan || []).forEach(o => girisAcilan.add(o)));
    const acikGiris = vaka.clues.some(c => {
      const needs = c.needs || [];
      if (needs.length === 0) return true;
      // tüm needs, giriş acilan olgularıyla karşılanıyorsa da geçerli giriş
      return needs.every(n => typeof n === "string" ? girisAcilan.has(n) : false);
    });
    if (!acikGiris) hatalar.push(`[K3] ${vaka.id}: açık giriş yok (needs:[] olan ya da giriş açılanıyla açılan clue yok) — vaka başlayamaz.`);
    // döngü tespiti (DFS)
    const durum = {}; // 0=beyaz 1=gri 2=siyah
    const dfs = (u) => {
      durum[u] = 1;
      for (const v of kenar[u] || []) {
        if (durum[v] === 1) { hatalar.push(`[K3] ${vaka.id}: needs döngüsü — '${u}' ↔ '${v}'.`); return; }
        if (!durum[v]) dfs(v);
      }
      durum[u] = 2;
    };
    vaka.clues.forEach(c => { if (!durum[c.id]) dfs(c.id); });
  }
}

// Kural 4 — Truth uyumu: reveals edilen olgu, truth'ta "YOK/AÇILMAZ/GİZLİ" olanı çiğnemez
function kural4_truth(game, hatalar) {
  for (const vaka of game.vakalar) {
    // truth içinde "YOK"/"AÇILMAZ"/"GİZLİ" işaretli anahtarları çıkar
    const yasak = [];
    for (const [k, v] of Object.entries(vaka.truth || {})) {
      if (typeof v === "string" && /(YOK|AÇILMAZ|GİZLİ)/i.test(v)) yasak.push(k);
    }
    // yasak anahtarların "kavramı" (ör. iten, cavit_ilyas_bag) bir clue reveals'iyle açılıyorsa uyar.
    // Konvansiyon: yasak bir truth-anahtarıyla AYNI adlı bir olgu reveals edilirse ihlal.
    for (const c of vaka.clues) {
      for (const r of (c.reveals || [])) {
        if (yasak.includes(r)) {
          hatalar.push(`[K4] ${vaka.id}/${c.id}: truth '${r}' bu vakada açılmasın diyor ama clue onu reveals ediyor.`);
        }
      }
    }
  }
}

// Kural 5 — Belirsizlik: belirsiz konular tek yöne kesinleşmesin (istisna: V6/kaya_biliyordu)
function kural5_belirsizlik(game, uyarilar) {
  const kesinKalip = /(kesinlikle|açıkça|hiç şüphesiz|kuşkusuz|elbette .* dır)/i;
  for (const vaka of game.vakalar) {
    for (const konu of game.kanon.belirsiz) {
      const istisnaVaka = game.kanon.belirsiz_istisna?.[konu];
      if (istisnaVaka && istisnaVaka === vaka.id) continue; // bu vakada çözülmesi serbest
      // truth'ta belirsiz işareti korunuyor mu?
      const tv = vaka.truth?.[konu];
      if (typeof tv === "string" && !/BELİRSİZ|ÇÖZÜLMEZ|<|MI|MU|MÜ|Mİ/i.test(tv)) {
        uyarilar.push(`[K5] ${vaka.id}: '${konu}' truth'ta tek yöne kesinleşmiş görünüyor: "${tv}"`);
      }
      // clue metinlerinde kesin hüküm cümlesi
      for (const c of vaka.clues) {
        const blob = (c.text || "") + " " + (c.meta || "");
        if (kesinKalip.test(blob) && new RegExp(konu.split("_")[0], "i").test(blob)) {
          uyarilar.push(`[K5] ${vaka.id}/${c.id}: '${konu}' konusunda tek yönlü kesin ifade olabilir — çift-okuma ekleyin.`);
        }
      }
    }
  }
}

// ============================================================================
// ÇALIŞTIR
// ============================================================================
function dogrula(game) {
  const hatalar = [], uyarilar = [];
  kural1_sozluk(game, hatalar);
  kural2_erisilebilirlik(game, hatalar);
  kural3_dongu(game, hatalar);
  kural4_truth(game, hatalar);
  kural5_belirsizlik(game, uyarilar);

  console.log("PARAVAN DOĞRULAYICI v1");
  console.log("──────────────────────");
  const kural = (ad, hataVar) => console.log(`${ad}: ${hataVar ? "FAIL" : "PASS"}`);
  kural("Kural 1 (Sözlük)        ", hatalar.some(h => h.startsWith("[K1]")));
  kural("Kural 2 (Erişilebilirlik)", hatalar.some(h => h.startsWith("[K2]")));
  kural("Kural 3 (Döngü)         ", hatalar.some(h => h.startsWith("[K3]")));
  kural("Kural 4 (Truth uyumu)   ", hatalar.some(h => h.startsWith("[K4]")));
  console.log(`Kural 5 (Belirsizlik)   : ${uyarilar.length ? uyarilar.length + " UYARI" : "PASS"}`);
  console.log("──────────────────────");
  hatalar.forEach(h => console.log("  ✗ " + h));
  uyarilar.forEach(u => console.log("  ⚠ " + u));

  if (hatalar.length) { console.log("SONUÇ: BLOCKED — oyun paketlenemez."); return false; }
  console.log(`SONUÇ: PASS${uyarilar.length ? " (" + uyarilar.length + " uyarı)" : ""} — oyun paketlenebilir.`);
  return true;
}

module.exports = { dogrula, ifadeDegerlendir, acilabilirOlgular, ifadeOlgulari };

// Doğrudan çalıştırılırsa game_data.js'i dene
if (require.main === module) {
  try {
    const { GAME } = require("./game_data.js");
    const ok = dogrula(GAME);
    process.exit(ok ? 0 : 1);
  } catch (e) {
    console.log("game_data.js bulunamadı — test verisiyle çalıştırmak için test_dogrulayici.js kullanın.");
    console.log(e.message);
    process.exit(1); // doğrulama koşmadıysa "doğrula && derle" zinciri derlemeye geçmesin
  }
}
