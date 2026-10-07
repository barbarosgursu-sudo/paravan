/* ===== YENİ OYUN: konuşma ekranı (yeni_arayuz.js) =====
   Yalnız `node build_html.js yeni` çıktısına girer, eski oyunun betiğinin SONUNA.
   Eski arayüzün beş fonksiyonunu sarar (prolog, vakaAc, kaynakAcFaz, kararFazi,
   kararVerFaz) — onclick'ler global adı çağırdığı için sarmalanmış hâl çalışır.
   Eski oyunun sayfası bu dosyadan hiç etkilenmez.

   Veri biçimi: kaynak/yeni/OKUBENI.md. Sahne satırı { k, i, m } + isteğe bağlı
   arka / kare / set / gir / cik / kasa; seçim { secim, secenekler }.

   Figür düzeni: Peri solda; sağda Cengo YA DA konuk. Sağdaki yer, sahnede bulunan
   ve en son konuşan Peri-dışı figürün. Üç kişilik sahnede (giriş: Peri, Cengo,
   Rıza Reis) kim söz alırsa sağa o geçer — boylar sabit, yalnız kişi değişir. */

const YG = YENI_GORSEL;
const SAHNE_KANON = GAME.kanon.sahne;
const VN_AZ_HAREKET = matchMedia("(prefers-reduced-motion: reduce)").matches;

function vnGorsel(anahtar){
  if(GORSELLER[anahtar]) return GORSELLER[anahtar];
  const t = (YG.takma||{})[anahtar];
  return t ? GORSELLER[t] || null : null;
}
function vnAd(k){
  if(k === "peri") return "Peri";
  if(k === "cengo") return "Cengo";
  const f = SAHNE_KANON.figurler[k];
  return (f && f.ad) || (SAHNE_KANON.sesler||{})[k] || k;
}
function vnVarsayilanIfade(k){
  const f = SAHNE_KANON.figurler[k];
  return (f && f.ifadeler && f.ifadeler[0]) || "normal";
}
function vnHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

let vn = null;   // çalan sahnenin durumu

/* Bir sahneyi oynatır, bitince sonra()'yı çağırır. baslik: üst şeritteki ad. */
function sahneOynat(sahne, sonra, baslik){
  if(!sahne || !Array.isArray(sahne.satirlar) || !sahne.satirlar.length){ sonra(); return; }
  const figurler = sahne.figurler || ["peri"];
  vn = {
    kuyruk: [...sahne.satirlar], sonra,
    set: sahne.set || vnSonSet || "manto",
    ifade: {}, mevcut: new Set(figurler),
    sag: figurler.find(f => f !== "peri" && f !== "cengo") || (figurler.includes("cengo") ? "cengo" : null),
    arka: null, grup: null, satir: null, yaziyor: null, tamMetin: "", secimde: false,
    kasaGorunur: vnKasaGorunur, cikacak: false,
  };
  app.innerHTML = `<div class="vn" role="application" aria-label="Konuşma">
    <div class="vn-serit"><span class="vn-baslik">${vnHtml(baslik||"")}</span>
      <span class="vn-sag"><span class="vn-kasa" id="vnKasa" hidden></span>
      <button class="vn-gec" id="vnGec" type="button">Sahneyi geç ▸▸</button></span></div>
    <div class="vn-sahne" id="vnSahne">
      <div class="vn-arka" id="vnArka"></div>
      <div class="vn-vurgu" id="vnVurgu"></div>
      <div class="vn-figurler" id="vnFig">
        <div class="vn-figur sol pasif" id="vnSol"></div>
        <div class="vn-figur sag pasif" id="vnSag"></div>
      </div>
      <div class="vn-mekan" id="vnMekan"></div>
      <div class="vn-karartma" id="vnKarartma"></div>
    </div>
    <div class="vn-kutu-alani"><div class="vn-kutu" id="vnKutu" tabindex="0" role="button" aria-label="Devam et">
      <span class="vn-plaka sol" id="vnPlakaSol" hidden>Peri</span>
      <span class="vn-plaka sag" id="vnPlakaSag" hidden></span>
      <div id="vnIcerik"></div>
    </div></div>
  </div>`;
  const $ = id => document.getElementById(id);
  $("vnKutu").addEventListener("click", vnIlerle);
  $("vnSahne").addEventListener("click", vnIlerle);
  $("vnKutu").addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); vnIlerle(); } });
  $("vnGec").addEventListener("click", e => { e.stopPropagation(); vnGec(); });
  if(sahne.arka) vnArkaKoy(sahne.arka, true);
  vnKasaTazele();
  vnIlerle();
}

/* Kıyafet seti ve kasa göstergesi sahneler arasında taşınır (açılışta manto
   giyilince sonraki sahne de mantolu başlar; kasa bir kez görününce kalır). */
let vnSonSet = null, vnKasaGorunur = false;

function vnKasaTazele(){
  const el = document.getElementById("vnKasa"); if(!el) return;
  el.hidden = !vn.kasaGorunur;
  if(vn.kasaGorunur) el.textContent = "Kasa " + tl(oyun.durum.para);
}

function vnArkaKoy(kod, anlik){
  const bilgi = (YG.arka||{})[kod] || {};
  const src = vnGorsel(kod);
  const arka = document.getElementById("vnArka");
  const katman = document.createElement("div");
  katman.className = "katman";
  katman.innerHTML = src ? `<img class="kaplama" alt="" src="${src}">` : "";
  const uygula = () => {
    document.getElementById("vnFig").classList.toggle("aksam", !!bilgi.aksam);
    document.getElementById("vnMekan").textContent = bilgi.ad || "";
  };
  const ayniGrup = bilgi.grup && bilgi.grup === vn.grup;
  vn.arka = kod; vn.grup = bilgi.grup || kod;
  if(anlik || VN_AZ_HAREKET){ arka.replaceChildren(katman); uygula(); return; }
  if(ayniGrup){
    katman.style.opacity = "0"; arka.append(katman); void katman.offsetWidth; katman.style.opacity = "1"; uygula();
    setTimeout(() => { while(arka.firstChild && arka.firstChild !== katman && arka.contains(katman)) arka.firstChild.remove(); }, 650);
    return;
  }
  const kr = document.getElementById("vnKarartma");
  kr.classList.add("acik");
  setTimeout(() => { arka.replaceChildren(katman); uygula(); kr.classList.remove("acik"); }, 300);
}

function vnKareGoster(kod){
  const eski = document.querySelector(".vn-kare"); if(eski) eski.remove();
  if(!kod) return;
  const src = vnGorsel(kod); if(!src) return;
  const d = document.createElement("div");
  d.className = "vn-kare";
  d.innerHTML = (YG.tam||[]).includes(kod)
    ? `<img class="dolgu" alt="" src="${src}"><img class="tam" alt="" src="${src}">`
    : `<img class="kaplama" alt="" src="${src}">`;
  document.getElementById("vnSahne").insertBefore(d, document.getElementById("vnMekan"));
}

function vnFigurCiz(satir){
  const sol = document.getElementById("vnSol"), sag = document.getElementById("vnSag");
  // Peri
  const periVar = vn.mevcut.has("peri");
  sol.hidden = !periVar;
  if(periVar){
    const anahtar = "peri." + vn.set + "." + (vn.ifade.peri || "normal");
    const src = vnGorsel(anahtar) || vnGorsel("peri." + vn.set + "." + SAHNE_KANON.figurler.peri.setler[vn.set][0]);
    const genis = (YG.genis||[]).includes(anahtar) ? ' class="genis"' : "";
    if(sol.dataset.src !== anahtar){ sol.innerHTML = src ? `<img${genis} alt="Peri" src="${src}">` : ""; sol.dataset.src = anahtar; }
  }
  // Sağdaki: Cengo ya da konuk
  const kim = vn.sag && vn.mevcut.has(vn.sag) ? vn.sag : null;
  sag.hidden = !kim;
  if(kim){
    const anahtar = kim + "." + (vn.ifade[kim] || vnVarsayilanIfade(kim));
    if(sag.dataset.src !== anahtar){
      const src = vnGorsel(anahtar);
      const olcek = (YG.boy||{})[kim] || 1;
      const stil = olcek < 1 ? ` style="height:${olcek*100}%;margin-top:${(1-olcek)*100}%"` : "";
      sag.innerHTML = src ? `<img alt="${vnHtml(vnAd(kim))}"${stil} src="${src}">` : "";
      sag.dataset.src = anahtar;
    }
  }
  const k = satir.k;
  sol.classList.toggle("aktif", k === "peri"); sol.classList.toggle("pasif", k !== "peri");
  sag.classList.toggle("aktif", !!kim && k === kim); sag.classList.toggle("pasif", !(kim && k === kim));
}

/* vurgu: satır arka plandaki bir nesneyi anıyorsa (avize, koltuk) o nesnenin üstüne
   ışık düşer, çevresi hafifçe kararır — konuşan figürün aydınlanmasının nesne hâli.
   Nesnenin yeri manifestoda, görselin kesri olarak (YENI_GORSEL.vurgular[arka][ad]).
   Arka plan object-fit:cover + object-position center 70% ile çizildiği için kesir,
   kabın o anki boyutuna göre ekran koordinatına çevrilir. */
function vnVurguGoster(ad){
  const el = document.getElementById("vnVurgu");
  if(!el) return;
  const v = ad && ((YG.vurgular || {})[vn.arka] || {})[ad];
  if(!v){ el.classList.remove("acik"); return; }
  const img = document.querySelector("#vnArka .katman:last-child img");
  const kap = document.getElementById("vnSahne");
  const W = (img && img.naturalWidth) || 900, H = (img && img.naturalHeight) || 1200;
  const w = kap.clientWidth, h = kap.clientHeight;
  const o = Math.max(w / W, h / H);
  const sol = (w - W * o) * 0.5, ust = (h - H * o) * 0.7;
  const px = sol + v.x * W * o, py = ust + v.y * H * o;
  const rx = v.rx * W * o, ry = v.ry * H * o;
  el.style.background = `radial-gradient(ellipse ${rx}px ${ry}px at ${px}px ${py}px, ` +
    `rgba(255,236,190,.34) 0%, rgba(255,236,190,.12) 55%, rgba(12,9,6,0) 80%, rgba(12,9,6,.46) 100%)`;
  el.classList.add("acik");
}

function vnSatirGoster(satir){
  const $ = id => document.getElementById(id);
  if(satir.set){ vn.set = satir.set; vnSonSet = satir.set; }
  if(satir.arka) vnArkaKoy(satir.arka);
  if(satir.gir){ vn.mevcut.add(satir.gir); if(satir.gir !== "peri") vn.sag = satir.gir; }
  const k = satir.k;
  const figur = !!SAHNE_KANON.figurler[k];
  if(figur && k !== "peri"){ vn.mevcut.add(k); vn.sag = k; }
  if(figur && satir.i) vn.ifade[k] = satir.i;
  if(satir.kasa){ vn.kasaGorunur = vnKasaGorunur = true; vnKasaTazele(); }
  vnKareGoster(satir.kare || null);
  vnVurguGoster(satir.kare ? null : (satir.vurgu || null));
  // mekan: yeri tanıtan anlatı satırı — figürler çekilir, arka plan çıplak görünür
  // (aksi hâlde sahnenin ortasındaki nesne, ör. A2'deki yerdeki avize, figürlerin arkasında kalır).
  $("vnFig").classList.toggle("cekilmis", !!(satir.kare || satir.mekan));
  vnFigurCiz(satir);
  $("vnPlakaSol").hidden = k !== "peri";
  const sagPlaka = (figur && k !== "peri") || !!(SAHNE_KANON.sesler||{})[k];
  $("vnPlakaSag").hidden = !sagPlaka;
  $("vnPlakaSag").textContent = sagPlaka ? vnAd(k) : "";
  $("vnPlakaSag").classList.toggle("konuk", sagPlaka && k !== "cengo");
  const p = document.createElement("p");
  p.className = "vn-replik" + (k === "not" ? " not" : "");
  const ileri = document.createElement("span"); ileri.className = "vn-ileri"; ileri.textContent = "dokun";
  $("vnIcerik").replaceChildren(p, ileri);
  vn.tamMetin = satir.m;
  vn.cikacak = !!satir.cik;
  if(VN_AZ_HAREKET){ p.textContent = vn.tamMetin; return; }
  let i = 0;
  clearInterval(vn.yaziyor);
  vn.yaziyor = setInterval(() => {
    i++; p.textContent = vn.tamMetin.slice(0, i);
    if(i >= vn.tamMetin.length){ clearInterval(vn.yaziyor); vn.yaziyor = null; }
  }, 22);
}

function vnSecimGoster(oge){
  vn.secimde = true;
  vnKareGoster(null);
  document.getElementById("vnFig").classList.remove("cekilmis");
  document.getElementById("vnPlakaSol").hidden = true;
  document.getElementById("vnPlakaSag").hidden = true;
  const kap = document.createElement("div"); kap.className = "vn-secimler";
  const b = document.createElement("p"); b.className = "vn-secim-baslik"; b.textContent = oge.secim;
  kap.append(b);
  oge.secenekler.forEach((s, n) => {
    const btn = document.createElement("button");
    btn.className = "vn-secim"; btn.type = "button"; btn.id = "vnSecim" + n; btn.textContent = s.m;
    btn.addEventListener("click", e => {
      e.stopPropagation(); vn.secimde = false;
      vn.kuyruk.unshift(...(s.satirlar||[])); vnIlerle();
    });
    kap.append(btn);
  });
  document.getElementById("vnIcerik").replaceChildren(kap);
}

/* cik: satır gösterildikten SONRA konuk sahneden çıkar (Rıza Reis son sözünü
   söyler ve gider). Sağdaki yer Cengo'ya döner; Cengo da yoksa boş kalır. */
function vnCikisUygula(){
  if(!vn.cikacak) return;
  vn.cikacak = false;
  const konuk = [...vn.mevcut].reverse().find(f => f !== "peri" && f !== "cengo");
  if(!konuk) return;
  vn.mevcut.delete(konuk);
  if(vn.sag === konuk) vn.sag = vn.mevcut.has("cengo") ? "cengo" : null;
}

function vnIlerle(){
  if(!vn || vn.secimde) return;
  if(vn.yaziyor){
    clearInterval(vn.yaziyor); vn.yaziyor = null;
    const p = document.querySelector(".vn-replik"); if(p) p.textContent = vn.tamMetin;
    return;
  }
  vnCikisUygula();
  if(!vn.kuyruk.length){ vnBitir(); return; }
  const oge = vn.kuyruk.shift();
  if(oge.secim) vnSecimGoster(oge); else vnSatirGoster(oge);
}

/* "Sahneyi geç": seçimlere kadar ileri sarar — seçim atlanmaz, oyuncu kendisi seçer.
   Satırların durum etkileri (kıyafet, kasa) sarılırken de uygulanır. */
function vnGec(){
  if(!vn) return;
  clearInterval(vn.yaziyor); vn.yaziyor = null;
  if(vn.secimde) return;
  while(vn.kuyruk.length && !vn.kuyruk[0].secim){
    const s = vn.kuyruk.shift();
    if(s.set){ vn.set = s.set; vnSonSet = s.set; }
    if(s.kasa){ vn.kasaGorunur = vnKasaGorunur = true; }
  }
  vnKasaTazele();
  if(vn.kuyruk.length) vnIlerle(); else vnBitir();
}

function vnBitir(){
  const sonra = vn.sonra;
  clearInterval(vn.yaziyor);
  vn = null;
  sonra();
}

function sahneZinciri(sahneler, sonra, baslik){
  const kalan = sahneler.filter(Boolean);
  if(!kalan.length){ sonra(); return; }
  const [ilk, ...geri] = kalan;
  sahneOynat(ilk, () => sahneZinciri(geri, sonra, baslik), typeof baslik === "function" ? baslik(ilk) : baslik);
}

/* ---------- Eski arayüzün sarmalanan fonksiyonları ---------- */

// Açılış: eski oyunun slayt prologu yerine konuşma sahneleri.
prologGoster = function(){
  vnSonSet = null; vnKasaGorunur = false;
  sahneZinciri(ACILIS, masaGoster, s => "Açılış · " + (s.baslik || ""));
};

// Vaka girişi: giriş sahnesi + Peri–Cengo konuşması, sonra araştırma.
vakaAc = function(id){
  oyun.vakaBaslat(id);
  sonAcilan = null;
  kayitYaz();
  const v = oyun.durum.aktif.vaka;
  const s = v.sahneler || {};
  vnSonSet = "manto"; vnKasaGorunur = true;
  sahneZinciri([s.giris, s.konusma], arastirmaFazi, v.baslik);
};

// İpucu: sahnesi oynanır, ardından kart — ne öğrenildi (yeni olgular + doğan çıkarımlar).
const _eskiKaynakAcFaz = kaynakAcFaz;
kaynakAcFaz = function(id){
  const a = oyun.durum.aktif;
  const c = a.vaka.clues.find(x => x.id === id);
  if(!c || !c.sahne) return _eskiKaynakAcFaz(id);
  const once = new Set(a.bilinen);
  const r = oyun.kaynakAc(id);
  if(r.hata){ efektCal('kilit'); sonUyari = r.hata; arastirmaFazi(); return; }
  kayitYaz();
  efektCal('kaynak');
  const yeni = [...a.bilinen].filter(x => !once.has(x));
  vnSonSet = "manto";
  sahneOynat(c.sahne, () => ipucuKarti(c, r, yeni), a.vaka.baslik + " · " + c.ad);
};
function ipucuKarti(c, r, yeni){
  const v = oyun.durum.aktif.vaka;
  const cikarim = Object.fromEntries((v.knowledge||[]).map(k => [k.turetilen, k.baslik]));
  const satirlar = yeni.map(o => v.facts[o] ? `<div class="o">${v.facts[o]}</div>`
                              : cikarim[o] ? `<div class="o cikarim">◆ ${cikarim[o]}</div>` : "").join("");
  let h = ust() + '<div class="faz kanit-ekran">';
  h += `<div class="baslik"><div class="no">${c.ad}</div></div>`;
  h += `<div class="kanit-metin"><span class="meta">${r.meta}</span></div>`;
  if(satirlar) h += `<div class="yeni-olgular"><div class="b">Deftere düştü</div>${satirlar}</div>`;
  h += `<button class="buton" onclick="arastirmaFazi()">← Araştırmaya dön</button></div>`;
  app.innerHTML = h; scrollUst();
}

// Karara geçerken büroya dönüş sahnesi — vaka başına bir kez.
const _eskiKararFazi = kararFazi;
const vnDonusOynandi = new Set();
kararFazi = function(){
  const a = oyun.durum.aktif;
  const s = a && (a.vaka.sahneler || {}).donus;
  if(s && !vnDonusOynandi.has(a.id)){
    vnDonusOynandi.add(a.id);
    vnSonSet = "manto";
    sahneOynat(s, kararEkrani, a.vaka.baslik);
    return;
  }
  kararEkrani();
};
/* Batma uyarısı yok (sahibinin kararı, 6 Ekim 2026; Ton §9 "batmak keyif vermez").
   Eski karar ekranı her seçeneğin altına "yeni iş gelmezse batarsın / açık
   verirsin / borca girersin" yazıyor, ay sonu tutarını kırmızıya boyuyordu.
   Yeni oyunda gider ve "ay sonunda" önizlemesi kalır — bilgi; hüküm cümlesi gider.
   Borç önizlemesi (borcSonra) kalır: o bir sonuç, uyarı değil. */
function kararEkrani(){
  _eskiKararFazi();
  document.querySelectorAll(".karar .bedel .sonuc").forEach(el => el.remove());
  document.querySelectorAll(".karar .bedel .kalan").forEach(el => el.classList.remove("kotu", "dar", "iyi"));
}

/* Kasa şeridi: yalnız kasa ve (varsa) borç. Eski şerit kasayı ay sonu giderine
   oranlayıp "bu ayın giderini karşılamıyor / kasa boş" diyordu — batma uyarısı. */
kasaSerit = function(){
  const k = oyun.kasaDurumu();
  if(!k.aylikGider) return "";
  return `<div class="kasa-serit">
    <span>Kasa <span class="tutar">${tl(k.para)}</span>${k.borc ? ` · <span class="borc">borç ${tl(k.borc)}</span>` : ""}</span>
    ${krizRozetleri()}
  </div>`;
};

// Karar sonucu: ruh hâli görseli yerine kararın kendi karesi; "Devam et" kapanış
// sahnesini oynatır. İstatistik paneli yok (yeni veride oran yazılmadı; açık soru).
kararVerFaz = function(id){
  const vid = oyun.durum.aktif.id;
  const v = oyun.durum.aktif.vaka;
  const d = v.decisions.find(x => x.id === id) || {};
  const r = oyun.kararVer(id);
  if(r.hata){ alert(r.hata); return; }
  kayitYaz();
  efektCal('muhur');
  const not = defterNotu(vid, id);
  const kare = d.kare && vnGorsel(d.kare);
  vnKapanis = (v.sahneler || {}).kapanis ? { sahne: v.sahneler.kapanis, baslik: v.baslik } : null;
  let h = ust() + '<div class="faz">';
  if(kare) h += `<div class="gorsel-cerceve giris-gorsel karar-kare"><img src="${kare}" alt=""></div>`;
  h += `<div class="sonuc-kutu"><h3>Sonuç</h3><p>${r.sonuc}</p></div>`;
  if(r.cengoSatir) h += `<div class="cengo-satir">${r.cengoSatir}</div>`;
  if(not) h += `<div class="defter-not">${not}</div>`;
  h += hesapKutusu(r.ekonomi);
  h += cengoGosterge();
  h += `<button class="buton" onclick="vnKapanisOynat()">Devam et</button></div>`;
  app.innerHTML = h; scrollUst();
};
let vnKapanis = null;
function vnKapanisOynat(){
  const k = vnKapanis; vnKapanis = null;
  if(!k){ masaGoster(); return; }
  vnSonSet = "manto";
  sahneOynat(k.sahne, masaGoster, k.baslik);
}

// Sezon sonu: yeni oyunda şimdilik tek vaka var.
sonEkrani = function(){
  let h = ust() + '<div class="faz">';
  h += `<div class="baslik"><div class="no">Şimdilik bu kadar</div><h1>Vaka 2 yazılıyor</h1></div>`;
  h += `<div class="bilgi">Yeni oyunun ilk vakası burada bitiyor.</div>`;
  h += `<button class="buton ikincil" onclick="defterGoster()">Anı defterini oku</button>`;
  h += `<button class="buton ikincil" onclick="yenidenBasla()">Baştan oyna</button></div>`;
  app.innerHTML = h; scrollUst();
};
