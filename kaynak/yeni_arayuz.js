/* ===== YENİ OYUN: konuşma ekranı (yeni_arayuz.js) =====
   Yalnız `node build_html.js yeni` çıktısına girer, eski oyunun betiğinin SONUNA.
   Eski arayüzün beş fonksiyonunu sarar (prolog, vakaAc, kaynakAcFaz, kararFazi,
   kararVerFaz) — onclick'ler global adı çağırdığı için sarmalanmış hâl çalışır.
   Eski oyunun sayfası bu dosyadan hiç etkilenmez.

   Veri biçimi: kaynak/yeni/OKUBENI.md. Sahne satırı { k, i, m } + isteğe bağlı
   arka / kare / set / gir / cik / kasa; seçim { secim, secenekler }.

   Figür düzeni: sol "bizim taraf" (Peri ya da Cengo), sağ karşı taraf (konuk ya da
   Cengo). Konuk yokken Peri solda, Cengo sağda. Konuk sahnedeyken konuk sağda kalır;
   Cengo konuşursa Peri'nin yerine SOLA geçer (aynalı, konuğa bakar) — konuşan ile
   karşısındaki hep ekranda (sahibinin kararı, 9 Ekim 2026). Cengo konuk varken
   Peri'ye konuşuyorsa satıra `kime: peri` yazılır: Cengo eskisi gibi sağa geçer.
   Konuk satırında `kime: peri|cengo` solda kimin duracağını seçer (yoksa sol değişmez). */

/* Yeni oyunun motoru (motor_yeni.js, derlemede bu dosyadan hemen önce gömülür).
   `oyun` eski betikte zaten kuruldu; prototipini değiştirmek yeterli (kurucu aynı).
   Sonraki her `new Oyun(GAME)` (yükleme denemesi, baştan başla) OyunYeni kurar. */
Oyun = OyunYeni;
Object.setPrototypeOf(oyun, OyunYeni.prototype);

const YG = YENI_GORSEL;
const SAHNE_KANON = GAME.kanon.sahne;
const VN_AZ_HAREKET = matchMedia("(prefers-reduced-motion: reduce)").matches;

function vnGorsel(anahtar){
  if(GORSELLER[anahtar]) return GORSELLER[anahtar];
  const t = (YG.takma||{})[anahtar];
  return t ? GORSELLER[t] || null : null;
}
/* Yer tutucu: görseli henüz üretilmemiş ifade (manifesto 'yer_tutucu'). Görselsiz testte
   figürün yerinde adı ve ifadesi yazılı gri bir kutu durur; sessizce başka bir sprite'a
   düşmez, yoksa test eden kişi eksik görseli fark etmez. */
function vnYerTutucu(anahtar, kim){
  const p = anahtar.split("."), i = p[p.length - 1];
  const ad = { ofkeli: "öfkeli", aci: "acı", utanmis: "utanmış", sasirmis: "şaşırmış", merakli: "meraklı", gulen: "gülen", yumusak: "yumuşak" }[i] || i;
  return `<div class="vn-yer-tutucu"><b>${vnHtml(vnAd(kim))}</b><span>${vnHtml(ad)}</span><em>görsel yok</em></div>`;
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
/* Cengo'nun sprite anahtarı kıyafet setine göre: "cengo.takim.gulen"; set yoksa "cengo.gulen" (Vaka 1). */
function vnFigurAnahtar(kim, ifade){
  return kim === "cengo" && vn && vn.cset ? "cengo." + vn.cset + "." + ifade : kim + "." + ifade;
}
/* Görseli henüz üretilmemiş arka plan ya da kare (görselsiz test): gri bir alan, üstünde kodu ve
   ne göstereceği yazılı (manifesto 'yer_tutucu_metin'). Sessizce boş kalmaz; test eden fark eder. */
function vnYerTutucuAlan(kod){
  const metin = (YG.yer_tutucu_metin||{})[kod] || "";
  return `<div class="vn-yer-tutucu alan"><b>${vnHtml(kod)}</b><span>${vnHtml(metin)}</span><em>görsel yok</em></div>`;
}
function vnHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

let vn = null;   // çalan sahnenin durumu

/* GEÇİCİ (7 Ekim 2026, sahibinin isteği): sahneleri gözden geçirmek için "Geri" düğmesi.
   Sahne içinde bir önceki satıra döner. Kaldırmak için false yap. */
const VN_GERI = true;

/* Bir sahneyi oynatır, bitince sonra()'yı çağırır. baslik: üst şeritteki ad. */
/* bag: "yuksek" | "dusuk" taşıyan satır yalnız o hâlde oynar (kural 12a, eşik motor_yeni.js).
   Bağ sahne BAŞLARKEN okunur; kapanış karardan sonra oynadığı için kararın etkisi dahildir. */
function vnBagSuz(satirlar){
  const yuksek = oyun.bagYuksek ? oyun.bagYuksek() : false;
  return satirlar.filter(s => !s.bag || (s.bag === "yuksek") === yuksek)
    .map(s => s.secenekler ? { ...s, secenekler: s.secenekler.map(o => ({ ...o, satirlar: vnBagSuz(o.satirlar || []) })) } : s);
}

function sahneOynat(sahne, sonra, baslik, onceki, devam){
  if(!sahne || !Array.isArray(sahne.satirlar) || !sahne.satirlar.length){ sonra(); return; }
  if(vn) clearInterval(vn.yaziyor);
  const figurler = sahne.figurler || ["peri"];
  vn = {
    kuyruk: vnBagSuz(sahne.satirlar), sonra,
    set: sahne.set || vnSonSet || "manto",
    cset: sahne.cset || null,   // Cengo'nun kıyafeti (Vaka 2'den itibaren); yoksa düz "cengo.<ifade>"
    ifade: {}, mevcut: new Set(figurler), sol: "peri",
    sag: figurler.find(f => f !== "peri" && f !== "cengo") || (figurler.includes("cengo") ? "cengo" : null),
    arka: null, grup: null, satir: null, yaziyor: null, tamMetin: "", secimde: false,
    kasaGorunur: vnKasaGorunur, cikacak: false, gecmis: [], onceki: VN_GERI ? onceki || null : null,
    adim: 0, secimler: [], hizli: false, basSet: vnSonSet, basKasa: vnKasaGorunur,
  };
  app.innerHTML = `<div class="vn" role="application" aria-label="Konuşma">
    <div class="vn-serit"><span class="vn-baslik">${vnHtml(baslik||"")}</span>
      <span class="vn-sag"><span class="vn-kasa" id="vnKasa" hidden></span>
      ${oyun.durum && oyun.durum.aktif ? '<button class="vn-gec vn-kisi" id="vnKisi" type="button" aria-label="Kişiler">☗</button>' : ""}
      ${VN_GERI ? '<button class="vn-gec vn-geri" id="vnGeri" type="button" hidden>◂ Geri</button>' : ""}
      <button class="vn-gec" id="vnGec" type="button">Sahneyi geç ▸▸</button></span></div>
    <div class="vn-sahne" id="vnSahne">
      <div class="vn-arka" id="vnArka"></div>
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
  if(VN_GERI) $("vnGeri").addEventListener("click", e => { e.stopPropagation(); vnGeri(); });
  if($("vnKisi")) $("vnKisi").addEventListener("click", e => { e.stopPropagation(); vnKisilerAc(); });
  if(sahne.arka) vnArkaKoy(sahne.arka, true);
  vnKasaTazele();
  if(devam && devam.adim > 0) vnSar(devam); else vnIlerle();
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
  katman.innerHTML = src ? `<img class="kaplama" alt="" src="${src}">`
    : (YG.yer_tutucu||[]).includes(kod) ? vnYerTutucuAlan(kod) : "";
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
  const kr = document.getElementById("vnKarartma"), sahip = vn;
  kr.classList.add("acik");
  // Bu arada sahne değiştiyse (Sahneyi geç) eski geçiş yeni sahnenin mekân adına dokunmasın.
  setTimeout(() => { if(vn !== sahip) return; arka.replaceChildren(katman); uygula(); kr.classList.remove("acik"); }, 300);
}

function vnKareGoster(kod){
  const eski = document.querySelector(".vn-kare"); if(eski) eski.remove();
  if(!kod) return;
  const src = vnGorsel(kod);
  const yt = !src && (YG.yer_tutucu||[]).includes(kod);
  if(!src && !yt) return;
  const d = document.createElement("div");
  d.className = "vn-kare";
  d.innerHTML = yt ? vnYerTutucuAlan(kod) : (YG.tam||[]).includes(kod)
    ? `<img class="dolgu" alt="" src="${src}"><img class="tam" alt="" src="${src}">`
    : `<img class="kaplama" alt="" src="${src}">`;
  document.getElementById("vnSahne").insertBefore(d, document.getElementById("vnMekan"));
}

function vnFigurCiz(satir){
  const sol = document.getElementById("vnSol"), sag = document.getElementById("vnSag");
  // Solda Cengo: konuk sahnedeyken konuğa konuşuyor (aynalı, sağa bakar).
  const solCengo = vn.sol === "cengo" && vn.mevcut.has("cengo");
  sol.classList.toggle("cengo", solCengo);
  if(solCengo){
    const anahtar = vnFigurAnahtar("cengo", vn.ifade.cengo || "normal");
    const yt = !vnGorsel(anahtar) && (YG.yer_tutucu||[]).includes(anahtar);
    const src = vnGorsel(anahtar) || vnGorsel(vnFigurAnahtar("cengo", "normal")) || vnGorsel("cengo.normal");
    sol.hidden = false;
    if(sol.dataset.src !== "sol:" + anahtar){ sol.innerHTML = yt ? vnYerTutucu(anahtar, "cengo") : `<img alt="Cengo" src="${src}">`; sol.dataset.src = "sol:" + anahtar; }
  }
  // Peri
  const periVar = !solCengo && vn.mevcut.has("peri");
  if(!solCengo) sol.hidden = !periVar;
  if(periVar){
    const anahtar = "peri." + vn.set + "." + (vn.ifade.peri || "normal");
    const yt = !vnGorsel(anahtar) && (YG.yer_tutucu||[]).includes(anahtar);
    const src = vnGorsel(anahtar) || vnGorsel("peri." + vn.set + "." + SAHNE_KANON.figurler.peri.setler[vn.set][0]);
    const genis = (YG.genis||[]).includes(anahtar) ? ' class="genis"' : "";
    // Geniş poz (uzanan kol, havada tutulan nesne) karşıdakinin üstünde kalır; yoksa el onun arkasına girer.
    sol.classList.toggle("ustte", !!genis && ["peri.balikli.istavrit", "peri.manto.tel"].includes(anahtar));
    if(sol.dataset.src !== anahtar){ sol.innerHTML = yt ? vnYerTutucu(anahtar, "peri") : src ? `<img${genis} alt="Peri" src="${src}">` : ""; sol.dataset.src = anahtar; }
  }
  // Sağdaki: Cengo ya da konuk
  const kim = vn.sag && vn.mevcut.has(vn.sag) ? vn.sag : null;
  sag.hidden = !kim;
  if(kim){
    const anahtar = vnFigurAnahtar(kim, vn.ifade[kim] || vnVarsayilanIfade(kim));
    if(sag.dataset.src !== anahtar){
      const src = vnGorsel(anahtar);
      const olcek = (YG.boy||{})[kim] || 1;
      // Küçük figür tabana oturur: kesik alt kenarı sahnenin altında kalmalı, havada değil.
      const stil = olcek < 1 ? ` style="position:absolute;left:0;bottom:0;height:${olcek*100}%"` : "";
      sag.innerHTML = src ? `<img alt="${vnHtml(vnAd(kim))}"${stil} src="${src}">` : vnYerTutucu(anahtar, kim);
      sag.dataset.src = anahtar;
    }
  }
  const k = satir.k;
  const solKim = solCengo ? "cengo" : "peri";
  sol.classList.toggle("aktif", k === solKim); sol.classList.toggle("pasif", k !== solKim);
  sag.classList.toggle("aktif", !!kim && k === kim); sag.classList.toggle("pasif", !(kim && k === kim));
}

function vnSatirGoster(satir){
  const $ = id => document.getElementById(id);
  if(satir.set){ vn.set = satir.set; vnSonSet = satir.set; }
  if(satir.arka) vnArkaKoy(satir.arka, vn.hizli);
  if(satir.gir){ vn.mevcut.add(satir.gir); if(satir.gir !== "peri") vn.sag = satir.gir; }
  // gizle: o figür bu satırdan itibaren ekranda değil (ör. Cengo kestirmeye koştu); konuşunca geri gelir.
  if(satir.gizle){ vn.mevcut.delete(satir.gizle); if(vn.sag === satir.gizle) vn.sag = null; if(vn.sol === satir.gizle) vn.sol = "peri"; }
  // gi: giren konuğun ilk ifadesi ({gir: kemal, gi: ofkeli}) — konuşmadan önce de doğru yüz.
  if(satir.gir && satir.gi) vn.ifade[satir.gir] = satir.gi;
  const k = satir.k;
  const figur = !!SAHNE_KANON.figurler[k];
  // Cengo yalnız SAĞDA bir konuk duruyorsa sola geçer; sağ boşsa ya da Cengo'nun kendisiyse
  // (konuk çıktı) sola geçmek iki Cengo çizer.
  const konukVar = !!vn.sag && vn.sag !== "cengo" && vn.mevcut.has(vn.sag);
  if(k === "peri") vn.sol = "peri";
  if(k === "cengo" && konukVar && satir.kime !== "peri"){ vn.sol = "cengo"; vn.mevcut.add(k); }
  else if(figur && k !== "peri"){ vn.mevcut.add(k); vn.sag = k; if(k === "cengo") vn.sol = "peri"; }
  // Konuk satırında kime: karşısındaki (solda) kim olsun — "Kızım…" Peri'ye.
  if(k !== "peri" && k !== "cengo" && satir.kime === "peri") vn.sol = "peri";
  if(k !== "peri" && k !== "cengo" && satir.kime === "cengo" && vn.mevcut.has("cengo")) vn.sol = "cengo";
  if(figur && satir.i) vn.ifade[k] = satir.i;
  // peri: Peri konuşmuyorken de ifadesi değişebilir (Hilmi Bey tacı okurken Peri onu çoktan kavramış).
  if(satir.peri) vn.ifade.peri = satir.peri;
  if(satir.cengo) vn.ifade.cengo = satir.cengo;   // dinleyen Cengo'nun yüzü
  if(satir.kasa){ vn.kasaGorunur = vnKasaGorunur = true; vnKasaTazele(); }
  vnKareGoster(satir.kare || null);
  // mekan: yeri tanıtan anlatı satırı — figürler çekilir, arka plan çıplak görünür
  // (aksi hâlde sahnenin ortasındaki nesne, ör. A2'deki yerdeki avize, figürlerin arkasında kalır).
  $("vnFig").classList.toggle("cekilmis", !!(satir.kare || satir.mekan));
  vnFigurCiz(satir);
  const solda = k === "peri" || (k === "cengo" && vn.sol === "cengo");
  $("vnPlakaSol").hidden = !solda;
  $("vnPlakaSol").textContent = k === "cengo" ? "Cengo" : "Peri";
  $("vnPlakaSol").classList.toggle("cengo", k === "cengo");
  const sagPlaka = !solda && ((figur && k !== "peri") || !!(SAHNE_KANON.sesler||{})[k]);
  $("vnPlakaSag").hidden = !sagPlaka;
  $("vnPlakaSag").textContent = sagPlaka ? vnAd(k) : "";
  $("vnPlakaSag").classList.toggle("konuk", sagPlaka && k !== "cengo");
  const p = document.createElement("p");
  p.className = "vn-replik" + (k === "not" ? " not" : "");
  const ileri = document.createElement("span"); ileri.className = "vn-ileri"; ileri.textContent = "dokun";
  $("vnIcerik").replaceChildren(p, ileri);
  vn.tamMetin = satir.m;
  vn.cikacak = !!satir.cik;
  if(VN_AZ_HAREKET || vn.hizli){ p.textContent = vn.tamMetin; return; }
  let i = 0;
  clearInterval(vn.yaziyor);
  // Yazı efekti kendi sahnesine bağlı: sahne değiştiyse (geç, bitir) kendini durdurur.
  const sahip = vn, metin = vn.tamMetin;
  const t = setInterval(() => {
    if(vn !== sahip){ clearInterval(t); return; }
    i++; p.textContent = metin.slice(0, i);
    if(i >= metin.length){ clearInterval(t); vn.yaziyor = null; }
  }, 22);
  vn.yaziyor = t;
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
    btn.addEventListener("click", e => { e.stopPropagation(); vnSecimYap(oge, n); });
    kap.append(btn);
  });
  document.getElementById("vnIcerik").replaceChildren(kap);
}

function vnSecimYap(oge, n){
  vn.secimde = false; vn.secimler.push(n);
  vn.kuyruk.unshift(...(oge.secenekler[n].satirlar || []));
  if(!vn.hizli) vnIlerle();
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
  vn.sol = "peri";
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
  if(VN_GERI) vnAnlikKaydet();
  const oge = vn.kuyruk.shift();
  if(oge.secim){ vn.secimOge = oge; vnSecimGoster(oge); } else vnSatirGoster(oge);
  vn.adim++; vnYerKaydet();
}

/* Kaldığı satırdan devam (sahibinin isteği, 9 Ekim 2026): kayıttaki adım sayısına kadar
   sahne yazı ve geçiş beklemeden yeniden oynatılır; seçimler kaydedildiği gibi yapılır.
   Kuyruğu baştan oynatmak, satırların bütün etkilerini (kıyafet, giren/çıkan, arka plan,
   ifade) doğru sırayla yeniden kurmanın tek güvenli yolu. */
function vnSar(devam){
  vn.hizli = true;
  let si = 0, fren = 0;
  while(vn && vn.adim < devam.adim && fren++ < 3000){
    if(vn.secimde){
      const k = (devam.secimler || [])[si++];
      if(k === undefined || !vn.secimOge.secenekler[k]) break;
      vnSecimYap(vn.secimOge, k); continue;
    }
    if(!vn.kuyruk.length) break;
    vnIlerle();
  }
  if(vn) vn.hizli = false;
}

/* "Sahneyi geç": sahnenin SONUNA atlar, bir sonraki sahne başlar (sahibinin isteği, 9 Ekim 2026).
   Eskiden seçime kadar sarıyordu; atlanan satırların arka plan değişimi uygulanmadığı için seçim
   önceki mekânın görüntüsü üstünde çıkıyordu. Atlanan seçimlerde ilk seçenek alınır (metin
   farkı yaratır, oyun durumu değil). Kıyafet ve kasa etkileri sarılırken de uygulanır. */
function vnGec(){
  if(!vn) return;
  clearInterval(vn.yaziyor); vn.yaziyor = null;
  const sec = oge => { vn.secimler.push(0); vn.kuyruk.unshift(...((oge.secenekler[0] || {}).satirlar || [])); };
  if(vn.secimde){ vn.secimde = false; sec(vn.secimOge); }
  while(vn.kuyruk.length){
    const s = vn.kuyruk.shift(); vn.adim++;
    if(s.secim){ sec(s); continue; }
    if(s.set){ vn.set = s.set; vnSonSet = s.set; }
    if(s.kasa){ vn.kasaGorunur = vnKasaGorunur = true; }
  }
  vnBitir();
}

/* Geri: her öğe gösterilmeden hemen önceki durum saklanır; geri dönmek, bir önceki
   öğenin anlık durumunu geri yükleyip o öğeyi yeniden göstermektir. */
function vnAnlikKaydet(){
  vn.gecmis.push({ kuyruk: [...vn.kuyruk], set: vn.set, ifade: { ...vn.ifade },
    mevcut: new Set(vn.mevcut), sag: vn.sag, sol: vn.sol, arka: vn.arka, kasaGorunur: vn.kasaGorunur,
    adim: vn.adim, secimN: vn.secimler.length });
  const b = document.getElementById("vnGeri"); if(b) b.hidden = vn.gecmis.length < 2 && !vn.onceki;
}
function vnGeri(){
  if(!vn) return;
  if(vn.gecmis.length < 2){ if(vn.onceki){ clearInterval(vn.yaziyor); const o = vn.onceki; vn = null; o(); } return; }
  clearInterval(vn.yaziyor); vn.yaziyor = null;
  vn.gecmis.pop();
  const a = vn.gecmis.pop();
  Object.assign(vn, { kuyruk: a.kuyruk, set: a.set, ifade: a.ifade, mevcut: a.mevcut, sag: a.sag, sol: a.sol,
    kasaGorunur: a.kasaGorunur, secimde: false, cikacak: false, adim: a.adim });
  vn.secimler.length = a.secimN;
  vnSonSet = a.set;
  if(a.arka && a.arka !== vn.arka) vnArkaKoy(a.arka, true);
  vnKasaTazele();
  vnIlerle();
}

function vnBitir(){
  const sonra = vn.sonra;
  clearInterval(vn.yaziyor);
  vn = null;
  sonra();
}

function sahneZinciri(sahneler, sonra, baslik, n = 0, baslar = [], kayit = null, devam = null){
  const liste = sahneler.filter(Boolean);
  if(n >= liste.length){ sonra(); return; }
  if(vnAkis) vnAkis.n = n;
  // Geri düğmesi zincirde bir önceki sahnenin BAŞINA döner; o sahne başladığındaki
  // kıyafet seti ve kasa görünürlüğü geri yüklenir.
  baslar[n] = { set: vnSonSet, kasa: vnKasaGorunur };
  if(kayit) kayit(n);
  const onceki = n > 0 && baslar[n-1] ? () => { vnSonSet = baslar[n-1].set; vnKasaGorunur = baslar[n-1].kasa; sahneZinciri(liste, sonra, baslik, n - 1, baslar, kayit); } : null;
  const ilk = liste[n];
  sahneOynat(ilk, () => sahneZinciri(liste, sonra, baslik, n + 1, baslar, kayit), typeof baslik === "function" ? baslik(ilk) : baslik, onceki, devam);
}

/* ---------- Akışlar ve sahne kaydı ----------
   Her konuşma akışı (açılış, giriş, ipucu, yüzleşme+kovalamaca, kapanış) adıyla başlar;
   oynarken hangi sahnede ve kaçıncı satırda olunduğu ayrı bir anahtara yazılır. Akış
   bitince silinir. Oyunun asıl kaydı (motor durumu) ayrıdır ve değişmez. */
const SAHNE_YER_ANAHTAR = KAYIT_ANAHTAR + "_sahne";
let vnAkis = null;
function vnYerKaydet(){
  if(!vn || !vnAkis) return;
  try{ localStorage.setItem(SAHNE_YER_ANAHTAR, JSON.stringify({ ...vnAkis, adim: vn.adim, secimler: vn.secimler, set: vn.basSet, kasa: vn.basKasa })); }catch(e){}
}
function vnYerOku(){ try{ return JSON.parse(localStorage.getItem(SAHNE_YER_ANAHTAR)); }catch(e){ return null; } }
function vnYerSil(){ try{ localStorage.removeItem(SAHNE_YER_ANAHTAR); }catch(e){} }
function vnAkisKur(tur, ek){
  if(tur === "acilis") return { sahneler: ACILIS, sonra: masaGoster, baslik: s => "Açılış · " + (s.baslik || "") };
  const v = GAME.vakalar.find(x => x.id === ek.vaka), s = (v && v.sahneler) || {};
  if(!v) return null;
  if(tur === "giris") return { sahneler: [s.giris, s.konusma], sonra: arastirmaFazi, baslik: v.baslik };
  if(tur === "ipucu"){
    const c = v.clues.find(x => x.id === ek.ipucu); if(!c) return null;
    return { sahneler: [c.sahne], sonra: () => ipucuKarti(c, { meta: c.meta }, c.reveals || []), baslik: v.baslik + " · " + c.ad };
  }
  if(tur === "yuzlesme") return { sahneler: [s[ek.sahne], s.kovalamaca], sonra: cozumEkrani, baslik: v.baslik };
  if(tur === "kapanis") return { sahneler: [s.kapanis], sonra: masaGoster, baslik: v.baslik };
  return null;
}
function akisBaslat(tur, ek = {}, n = 0, devam = null, sonraOzel = null){
  const k = vnAkisKur(tur, ek);
  if(!k){ vnYerSil(); masaGoster(); return; }
  vnAkis = { tur, vaka: ek.vaka, ipucu: ek.ipucu, sahne: ek.sahne, n };
  sahneZinciri(k.sahneler, () => { vnAkis = null; vnYerSil(); (sonraOzel || k.sonra)(); }, k.baslik, n, [], null, devam);
}
// Kayıttaki akış motorun durumuyla hâlâ tutarlı mı (eski ya da bozuk kayıt sahne açmasın).
function vnAkisGecerli(y){
  const a = oyun.durum.aktif;
  if(y.tur === "giris") return !!a && a.id === y.vaka;
  if(y.tur === "ipucu") return !!a && a.id === y.vaka && a.acilanKaynaklar.has(y.ipucu);
  if(y.tur === "yuzlesme") return !!a && a.id === y.vaka && !!a.suclama;
  if(y.tur === "kapanis") return !a && oyun.durum.tamamlanan.includes(y.vaka);
  return false;
}
function akisDevam(y){
  vnSonSet = y.set || "manto"; vnKasaGorunur = !!y.kasa;
  akisBaslat(y.tur, y, y.n || 0, { adim: y.adim || 0, secimler: y.secimler || [] });
}
kayittanDevam = function(){
  const r = oyun.durumYukle(kayitOku());
  if(r.hata){ kayitSil(); vnYerSil(); prologIndex = 0; prologGoster(); return; }
  const y = vnYerOku();
  if(y && y.tur !== "acilis" && vnAkisGecerli(y)){ akisDevam(y); return; }
  vnYerSil();
  if(oyun.durum.aktif) arastirmaFazi(); else masaGoster();
};

/* ---------- Eski arayüzün sarmalanan fonksiyonları ---------- */

// Açılış: eski oyunun slayt prologu yerine konuşma sahneleri.
/* Açılışta oyun durumu yok (ilk kayıt masada yazılır); kaldığı satır genel sahne
   kaydında (akış "acilis") durur, açınca "Kaldığın yer — Açılış" ekranı oradan sürdürür. */
function acilisSil(){ vnYerSil(); }
function acilisBaslat(n, y){
  vnSonSet = y ? y.set : null; vnKasaGorunur = !!(y && y.kasa);
  akisBaslat("acilis", {}, n, y ? { adim: y.adim || 0, secimler: y.secimler || [] } : null);
}
prologGoster = function(){
  const y = vnYerOku();
  if(y && y.tur === "acilis" && (y.n > 0 || y.adim > 1) && y.n < ACILIS.length){
    let h = '<div class="faz prolog-faz">' + ustSade();
    h += `<div class="baslik" style="padding-top:32px"><div class="no">Kaldığın Yer</div><h1>Açılış</h1></div>`;
    h += `<div class="giris-metin anlati-italik">“${vnHtml(ACILIS[y.n].baslik || "")}” sahnesinde kalmıştın.</div>`;
    h += '<button class="buton" onclick="acilisDevam()">Kaldığın yerden devam et</button>';
    h += '<button class="buton ikincil" onclick="acilisSil(); acilisBaslat(0)">Baştan başla</button></div>';
    app.innerHTML = h; scrollUst(); return;
  }
  acilisBaslat(0);
};
function acilisDevam(){ const y = vnYerOku(); if(y && y.tur === "acilis") acilisBaslat(y.n, y); else acilisBaslat(0); }

// Vaka girişi: giriş sahnesi + Peri–Cengo konuşması, sonra araştırma.
vakaAc = function(id){
  oyun.vakaBaslat(id);
  sonAcilan = null;
  kayitYaz();
  const v = oyun.durum.aktif.vaka;
  const s = v.sahneler || {};
  vnSonSet = "manto"; vnKasaGorunur = true;
  akisBaslat("giris", { vaka: v.id });
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
  akisBaslat("ipucu", { vaka: a.id, ipucu: id }, 0, null, () => ipucuKarti(c, r, yeni));
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

/* ---------- Kim yaptı? (sablon/1_oyun_yapisi.md) ----------
   Sıra: araştırma → Kim yaptı? → yüzleşme → kovalamaca → karar → kapanış.
   Suçlama tek haktır; yapıldıktan sonra araştırmaya dönülmez. */
const _eskiArastirmaFazi = arastirmaFazi;
const _eskiKararFazi = kararFazi;
arastirmaFazi = function(){
  const a = oyun.durum.aktif;
  if(!a || !a.vaka.kim_yapti) return _eskiArastirmaFazi();
  if(a.suclama){ kararEkrani(); return; }        // kayıttan dönüş: suçlama yapılmış
  _eskiArastirmaFazi();
  // Eski düğme ("Karar vermeye hazırım") ve "daha fazla araştırman gerek" notu yerine:
  document.querySelectorAll('.faz > .buton[onclick="kararFazi()"]').forEach(el => el.remove());
  document.querySelectorAll('.faz > .bilgi').forEach(el => { if(/Karar verebilmek/.test(el.textContent)) el.remove(); });
  const b = document.createElement("button");
  b.className = "buton"; b.textContent = "Kim yaptı? →";
  b.addEventListener("click", () => kimYaptiEkrani());
  document.querySelector(".faz").append(b);
};
kararFazi = function(){
  const a = oyun.durum.aktif;
  if(a && a.vaka.kim_yapti && !a.suclama){ kimYaptiEkrani(); return; }
  kararEkrani();
};

/* İki adım (sahibinin görselsiz testi, 9 Ekim 2026): önce şüpheli, sonra kanıt.
   Kanıtlar şüpheliye göre SÜZÜLMEZ (süzmek hangi kanıtın önemli olduğunu söylemek olurdu);
   nereden öğrenildiyse o başlığın altında durur, başlığa dokununca açılır. */
let kySecim = { supheli: null, kanitlar: [], acik: null };
function kyGruplar(){
  const a = oyun.durum.aktif, v = a.vaka, ky = v.kim_yapti;
  const elde = new Set(oyun.kanitlar().map(k => k.id)), atanan = new Set(), gruplar = [];
  const ekle = (ad, olgular) => {
    const k = olgular.filter(o => elde.has(o) && !atanan.has(o));
    k.forEach(o => atanan.add(o));
    if(k.length) gruplar.push({ ad, kanitlar: k });
  };
  for(const c of v.clues) if(a.acilanKaynaklar.has(c.id)) ekle(c.ad, c.reveals || []);
  ekle("Diğer", [...elde]);
  return gruplar;
}
function kimYaptiEkrani(sifirla = true){
  if(sifirla) kySecim = { supheli: null, kanitlar: [], acik: null };
  const a = oyun.durum.aktif;
  let h = ust() + '<div class="faz ky">';
  h += `<div class="baslik"><div class="no">${vnHtml(a.vaka.baslik)}</div><h1 style="font-size:24px">Kim yaptı?</h1></div>`;
  if(!kySecim.supheli){
    h += `<div class="ky-not">Kimi suçluyorsun? Tek hakkın var.` +
         (a.arastirmaKalan > 0 ? ` <b>Hâlâ ${a.arastirmaKalan} araştırma hakkın var.</b>` : "") + `</div><div class="ky-liste">`;
    for(const s of oyun.supheliler())
      h += `<button type="button" class="ky-secenek ky-kisi" onclick="kySupheli('${s.id}')">${vnHtml(s.ad)}</button>`;
    h += `</div><button class="buton ikincil" onclick="arastirmaFazi()">← Araştırmaya dön</button></div>`;
  } else {
    const s = oyun.supheliler().find(x => x.id === kySecim.supheli), f = a.vaka.facts;
    // Ad sonuna ek koymuyoruz: "Kemal Reis'ı" gibi yanlış ünlü uyumu çıkar.
    h += `<div class="ky-not">Suçladığın: <b>${vnHtml(s.ad)}</b>. Hangi iki kanıtla?</div>`;
    h += `<div class="faz-etiket"><span class="t">Kanıtlar</span><span class="ky-sayac">${kySecim.kanitlar.length} / 2</span></div><div class="ky-liste">`;
    kyGruplar().forEach((g, n) => {
      const secili = g.kanitlar.filter(id => kySecim.kanitlar.includes(id)).length;
      const acik = kySecim.acik === n;
      h += `<button type="button" class="ky-grup${acik ? " acik" : ""}" onclick="kyGrup(${n})"><span>${vnHtml(g.ad)}</span>` +
           `<span class="ky-grup-say">${secili ? `<b>${secili} seçili</b> · ` : ""}${g.kanitlar.length} ${acik ? "▴" : "▾"}</span></button>`;
      if(acik) for(const id of g.kanitlar)
        h += `<button type="button" class="ky-secenek kanit${kySecim.kanitlar.includes(id) ? " secili" : ""}" onclick="kyKanit('${id}')">${vnHtml(f[id])}</button>`;
    });
    h += `</div>`;
    h += `<button class="buton" ${kySecim.kanitlar.length === 2 ? "" : "disabled"} onclick="kyOnay()">Suçla</button>`;
    h += `<button class="buton ikincil" onclick="kySupheli(null)">← Başka şüpheli</button></div>`;
  }
  app.innerHTML = h;
  if(sifirla) scrollUst();
}
function kySupheli(id){ kySecim = { supheli: id, kanitlar: [], acik: null }; kimYaptiEkrani(false); scrollUst(); }
function kyGrup(n){ kySecim.acik = kySecim.acik === n ? null : n; kimYaptiEkrani(false); }
function kyKanit(id){
  const k = kySecim.kanitlar;
  if(k.includes(id)) k.splice(k.indexOf(id), 1);
  else { if(k.length >= 2) k.shift(); k.push(id); }
  kimYaptiEkrani(false);
}
function kyOnay(){
  const s = oyun.supheliler().find(x => x.id === kySecim.supheli);
  const f = oyun.durum.aktif.vaka.facts;
  if(!s || kySecim.kanitlar.length !== 2) return;
  let h = ust() + '<div class="faz ky">';
  h += `<div class="baslik"><div class="no">Kim yaptı?</div><h1 style="font-size:24px">${vnHtml(s.ad)}</h1></div>`;
  h += `<div class="ky-ozet">${kySecim.kanitlar.map(id => `<div class="o">${vnHtml(f[id])}</div>`).join("")}</div>`;
  h += `<div class="uyari">Bu suçlama geri alınamaz.</div>`;
  h += `<button class="buton" onclick="kySucla()">Evet, suçla</button>`;
  h += `<button class="buton ikincil" onclick="kimYaptiEkrani(false)">Vazgeç</button></div>`;
  app.innerHTML = h; scrollUst();
}
function kySucla(){
  const a = oyun.durum.aktif;
  const r = oyun.suclama(kySecim.supheli, kySecim.kanitlar);
  if(r.hata){ kimYaptiEkrani(); return; }
  kayitYaz();
  efektCal('muhur');
  const s = a.vaka.sahneler || {};
  vnSonSet = "manto";
  akisBaslat("yuzlesme", { vaka: a.id, sahne: r.sahne });
}

/* "Dosya çözüldü" (sahibinin görselsiz testi, 9 Ekim 2026): kovalamacadan sonra, karardan önce.
   Oyuncu suçlamasının neden tam, zayıf ya da yanlış olduğunu ve suçluyu gösteren yolları görür.
   Suçlamadan sonra geldiği için sızıntı değil: gerçek kovalamacada ortaya çıktı. */
const KY_SONUC_BASLIK = { dogru: "Doğru kişi, sağlam kanıt", zayif: "Doğru kişi, zayıf kanıt", yanlis: "Yanlış kişi" };
function cozumEkrani(){
  const a = oyun.durum.aktif, ky = a.vaka.kim_yapti, sc = a.suclama, f = a.vaka.facts;
  const ad = id => (ky.supheliler.find(x => x.id === id) || {}).ad || id;
  const cz = ky.cozum || { masum: {} };
  const madde = ids => `<ul class="ky-madde">${ids.map(id => `<li>${vnHtml(f[id])}</li>`).join("")}</ul>`;
  let h = ust() + '<div class="faz ky">';
  h += `<div class="baslik"><div class="no">Dosya çözüldü</div><h1 style="font-size:24px">${KY_SONUC_BASLIK[sc.sonuc]}</h1></div>`;
  // Ada ek koymuyoruz (ünlü uyumu her adda tutmaz).
  const ozet = sc.sonuc === "dogru" ? `Suçlu doğru: ${ad(ky.suclu)}. Kanıtların da sağlam.`
             : sc.sonuc === "zayif" ? `Suçlu doğru: ${ad(ky.suclu)}. Ama kanıtların onu suça bağlamadı.`
             : (cz.masum[sc.supheli] || `${ad(sc.supheli)} masumdu.`);
  h += `<div class="ky-not">${vnHtml(ozet)}</div>`;
  h += `<div class="ky-alt-baslik">Senin kanıtların</div>` + madde(sc.kanitlar);
  if(sc.sonuc !== "dogru"){
    // Tek yol: oyuncunun seçtiğine en yakın doğru çift (ortak kanıtı olan önce).
    const somut = o => typeof o === "string" ? o : (o.any || o.all || [])[0];
    const ciftler = ky.dogru_ciftler.map(c => c.map(somut));
    const yakin = ciftler.map(c => ({ c, ortak: c.filter(x => sc.kanitlar.includes(x)).length }))
                         .sort((x, y) => y.ortak - x.ortak)[0].c;
    h += `<div class="ky-alt-baslik">Şu ikisi yeterdi</div>` + madde(yakin);
  }
  h += `<button class="buton" onclick="kararEkrani()">Karara geç →</button></div>`;
  app.innerHTML = h; scrollUst();
}

/* Karar ekranı: dört karar her zaman açık (kapı yok). Para yalnız birikir;
   gider, "ay sonunda", batma yok (kural 24). Ücret Kim yaptı?'nın sonucundan gelir,
   karar parası varsa kararın altında yazar. */
function kararEkrani(){
  const a = oyun.durum.aktif;
  if(!a.vaka.kim_yapti){                         // eski tip vaka: batma uyarısı temizlenir
    _eskiKararFazi();
    document.querySelectorAll(".karar .bedel .sonuc").forEach(el => el.remove());
    document.querySelectorAll(".karar .bedel .kalan").forEach(el => el.classList.remove("kotu", "dar", "iyi"));
    return;
  }
  const ucret = a.vaka.kim_yapti.ucret[a.suclama.sonuc];
  let h = ust() + '<div class="faz">';
  h += `<div class="baslik"><div class="no">Karar</div><h1 style="font-size:22px">Ne yapacaksın?</h1></div>`;
  h += `<div class="uyari">Bu karar geri alınamaz.</div>`;
  // Ücret kesildiyse sebebi (kural 22a): anlaşılan rakamla ekrandaki rakam arasındaki fark açıklanır.
  const ky = a.vaka.kim_yapti, sonuc = a.suclama.sonuc;
  if(ucret < ky.ucret.dogru && (ky.kesinti || {})[sonuc])
    h += `<div class="ky-kesinti">${vnHtml(ky.kesinti[sonuc].replace("{anlasilan}", tl(ky.ucret.dogru)).replace("{kesinti}", tl(ky.ucret.dogru - ucret)))}</div>`;
  // Kural 22a: seçmeden önce kısa sonuç, kasaya girecek toplam ve Cengo'nun tavrı (kural 11: yön, sayı değil).
  for(const k of oyun.acikKararlar()){
    const d = v6Karar(k.id);
    h += `<div class="karar" onclick="kararVerFaz('${k.id}')"><div class="et">${vnHtml(k.etiket)}</div>
      ${d.onizleme ? `<div class="ky-onizleme">${vnHtml(d.onizleme)}</div>` : ""}
      <div class="ky-alt"><span class="ky-kasa">Kasaya <b>${tl(ucret + (d.para || 0))}</b></span>
      <span class="ky-cengo">${CENGO_TAVIR(d.cengoBag || 0)}</span></div></div>`;
  }
  h += '</div>';
  app.innerHTML = h; scrollUst();
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
  vnKapanis = (v.sahneler || {}).kapanis ? { vaka: vid } : null;
  // Sonuç ekranında kapatılırsa açınca kapanıştan sürsün (sonuç metni yeniden kurulamaz).
  if(vnKapanis) try{ localStorage.setItem(SAHNE_YER_ANAHTAR, JSON.stringify({ tur: "kapanis", vaka: vid, n: 0, adim: 0, set: "manto", kasa: true })); }catch(e){}
  let h = ust() + '<div class="faz">';
  if(kare) h += `<div class="gorsel-cerceve giris-gorsel karar-kare"><img src="${kare}" alt=""></div>`;
  h += `<div class="sonuc-kutu"><h3>Sonuç</h3><p>${r.sonuc}</p></div>`;
  if(r.cengoSatir) h += `<div class="cengo-satir">${r.cengoSatir}</div>`;
  if(not) h += `<div class="defter-not">${not}</div>`;
  h += v.kim_yapti ? yeniHesapKutusu(r.ekonomi) : hesapKutusu(r.ekonomi);
  h += `<button class="buton" onclick="vnKapanisOynat()">Devam et</button></div>`;
  app.innerHTML = h; scrollUst();
};
/* Kural 11 istisnası: karar ekranında Cengo'nun tavrı — yön, sayı değil. */
const CENGO_TAVIR = b => b > 0 ? "Cengo'nun hoşuna gider" : b < 0 ? "Cengo'nun hoşuna gitmez" : "Cengo'yu ilgilendirmez";

/* Cengo bağı ekranda görünmez: sayı, alev, kelime yok (kural kitabı 11). Bağ yalnız
   kapanışın iki hâlinde hissedilir (12a). Eski arayüzün göstergesi bu sayfada boş döner. */
cengoGosterge = function(){ return ""; };

/* Para yalnız birikir (kural 24–25): ücret + karar parası = kasaya giren. */
const KY_SONUC_AD = { dogru: "kanıt tam", zayif: "kanıt zayıftı", yanlis: "yanlış kişi suçlandı" };
function yeniHesapKutusu(e){
  let h = '<div class="hesap">';
  h += `<div class="satir gelir"><span>Vaka ücreti<em class="acik" style="color:var(--sonuk)">${KY_SONUC_AD[e.suclama] || ""}</em></span><b>${tl(e.ucret)}</b></div>`;
  if(e.kararPara) h += `<div class="satir ${e.kararPara > 0 ? "gelir" : "gider"}"><span>Kararın getirdiği</span><b>${tl(e.kararPara)}</b></div>`;
  h += '<div class="ayrac"></div>';
  h += `<div class="sonuc-satir"><span>Kasa</span><span>${tl(e.para)}</span></div></div>`;
  return h;
}
let vnKapanis = null;
function vnKapanisOynat(){
  const k = vnKapanis; vnKapanis = null;
  if(!k){ masaGoster(); return; }
  vnSonSet = "manto";
  akisBaslat("kapanis", { vaka: k.vaka });
}

// Sezon sonu: yazılmış vakalar bitti.
sonEkrani = function(){
  let h = ust() + '<div class="faz">';
  h += `<div class="baslik"><div class="no">Şimdilik bu kadar</div><h1>Sıradaki vaka yazılıyor</h1></div>`;
  h += `<div class="bilgi">Yazılmış vakalar burada bitiyor.</div>`;
  h += `<button class="buton ikincil" onclick="defterGoster()">Anı defterini oku</button>`;
  h += `<button class="buton ikincil" onclick="yenidenBasla()">Baştan oyna</button></div>`;
  app.innerHTML = h; scrollUst();
};

/* "Baştan başla" eski sayfada confirm() soruyordu. claude.ai'nin artifact çerçevesi
   tarayıcı iletişim kutularını engelliyor: kutu görünmüyor, cevap "hayır" sayılıyor,
   düğme hiçbir şey yapmıyor. Yeni oyunda onay sayfanın içinde. */
let vnOnayOncesi = "";
yenidenBasla = function(){
  vnOnayOncesi = app.innerHTML;
  let h = '<div class="faz prolog-faz">' + ustSade();
  h += `<div class="baslik" style="padding-top:32px"><div class="no">Baştan başla</div><h1>Emin misin?</h1></div>`;
  h += `<div class="giris-metin anlati-italik">Kayıtlı ilerleme silinecek, oyun açılıştan yeniden başlayacak.</div>`;
  h += '<button class="buton" onclick="yenidenBaslaOnay()">Evet, baştan başla</button>';
  // GEÇİCİ: sahibinin testi için sonraki vakaya atlama (10 Ekim 2026). Kaldırmak: VN_VAKA_ATLA = false.
  if(VN_VAKA_ATLA) for(const v of GAME.vakalar.filter(x => x.tur === "omurga").sort((a, b) => a.sira - b.sira).slice(1))
    h += `<button class="buton ikincil" onclick="vakaAtla('${v.id}')">Vaka ${v.sira}'den başla (geçici)</button>`;
  h += '<button class="buton ikincil" onclick="yenidenBaslaVazgec()">Vazgeç</button></div>';
  app.innerHTML = h; scrollUst();
};
/* GEÇİCİ (sahibinin testi için): önceki vakaları motorda kendiliğinden oynatır — her ipucu
   açılır, suçlu doğru kanıtla suçlanır, ilk karar seçilir — ve masaya o vakayla döner.
   Kasa ve Cengo bağı bu varsayılan yolun sonucudur. Yayından önce false yapılır. */
const VN_VAKA_ATLA = true;
function vakaAtla(hedef){
  kayitSil(); acilisSil();
  oyun.durum = new Oyun(GAME).durum;
  cengoSonAlev = null;
  for(const v of GAME.vakalar.filter(x => x.tur === "omurga").sort((a, b) => a.sira - b.sira)){
    if(v.id === hedef) break;
    oyun.vakaBaslat(v.id);
    oyun.durum.aktif.arastirmaKalan = 99;
    let acik; while((acik = oyun.acikKaynaklar()).length) oyun.kaynakAc(acik[0].id);
    const kn = oyun.kanitlar().map(x => x.id), suclu = v.kim_yapti.suclu;
    let cift = null;
    for(const a of kn) for(const b of kn) if(!cift && a !== b && oyun.suclamaSonucu(suclu, [a, b]) === "dogru") cift = [a, b];
    oyun.suclama(suclu, cift || kn.slice(0, 2));
    oyun.kararVer(v.decisions[0].id);
  }
  vnKasaGorunur = true;
  masaGoster();
}
function yenidenBaslaOnay(){
  kayitSil(); acilisSil();
  oyun.durum = new Oyun(GAME).durum;
  cengoSonAlev = null;
  prologIndex = 0; prologGoster();
}
function yenidenBaslaVazgec(){ app.innerHTML = vnOnayOncesi; scrollUst(); }

/* Konuşma sırasında Kişiler: künye konuşmanın ÜSTÜNDE pencere olarak açılır, kapanınca
   konuşma aynı satırdan sürer (sayfa değişmez, vn durumu el sürülmeden kalır). Düğme
   yalnız bir vaka açıkken çıkar — açılışta Cengo ve Hilmi Bey'le henüz tanışılmadı.
   Kart mantığı eski kisilerGoster'ın aynısı: tanışılan kişi, en derin bilinen katman. */
function vnKisilerAc(){
  if(document.getElementById("vnKisiler")) return;
  const bilinen = oyun.tumBilinen();
  let h = '<div class="panel-baslik">☗ Kişiler</div>';
  for(const kisi of KISILER.kisiler){
    if(!(kisi.tanisma === "her_zaman" || bilinen.has(kisi.tanisma))) continue;
    let tanim = "";
    for(const kat of kisi.katmanlar) if(kat.kosul === "her_zaman" || bilinen.has(kat.kosul)) tanim = kat.tanim;
    let portre = kisi.portre || "";
    for(const pk of (kisi.portre_katman||[])) if(bilinen.has(pk.kosul)) portre = pk.portre;
    const src = GORSELLER[portre.replace(".jpg","")];
    h += `<div class="kisi-kart"><div class="kisi-portre">${src ? `<img src="${src}" alt="${vnHtml(kisi.ad)}">` : "☗"}</div>
      <div class="kisi-bilgi"><div class="ad">${vnHtml(kisi.ad)}</div><div class="tanim">${vnHtml(tanim)}</div></div></div>`;
  }
  h += '<button class="buton ikincil" id="vnKisilerKapat" type="button">← Konuşmaya dön</button>';
  const d = document.createElement("div");
  d.className = "vn-kisiler"; d.id = "vnKisiler"; d.innerHTML = h;
  d.addEventListener("click", e => e.stopPropagation());
  document.querySelector(".vn").append(d);
  document.getElementById("vnKisilerKapat").addEventListener("click", () => d.remove());
}
