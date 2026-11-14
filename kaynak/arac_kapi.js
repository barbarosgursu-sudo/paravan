// KAPI (14 Kasım 2026, sahibinin kararı): bir vakanın hikâyesi ya da resimleri kaydedilmeden önce BÜTÜN denetimler
// kendiliğinden çalışır; biri tutmazsa iş durur. "Kural belgede paragraf değil, kapıda denetimdir."
// Vaka 6 ve sonrası (sahibi: "Vaka 6 ve sonrası"). Commit bağlantısı: .claude/kapi_hook.js.
//
// Kullanım: cd kaynak && node arac_kapi.js V6 [hikaye|resim] [--yeniden]
//   hikaye : doğrulayıcı, derleme güncel mi, sızıntı taraması, bütün yolların turu, satır–resim aracı (İŞ/SOR = 0),
//            adı geçen ekranda, kural 1, 2, 4, 7, 8, 9 (hedef ekranda), 10.
//   resim  : hikâye kapısının hepsi + kural 3, 5, 6, 9 (bakış yönü), 11, 12, 13 (poz kaydı ve resim gerektirenler).
//   Aynı girdilerle daha önce geçtiyse tekrar koşmaz (önbellek: YENI_UI/kapi_onbellek.json); --yeniden zorlar.
//
// Kurallar (sahibiyle 14 Kasım 2026'da Vaka 6'nın yayındaki resimlerinden çıkarıldı):
//   K1  Ekran metinden gelir: her satırda {ekran: …} yazılı (kare/mekân satırı hariç); önceki satırdan hiçbir şey taşınmaz.
//   K2  İki yönlü: anlatıda adı/eş sözü geçen herkes ekranda; ekrandaki herkes o satırda anılıyor, konuşuyor ya da hitap ediliyor.
//   K3  Poz bir kişiye yöneliyorsa (sarılma, uzanma, dokunma) o kişi karşıda.
//   K4  "Eşikte", "kapıda", "uzakta" gibi yer sözü kare ister.
//   K5  El: her el bir kola bağlı, sağ/sol doğru — el sayfasına bakılmış ve onaylanmış olmalı (arac_el.py).
//   K6  Saç ve kol arasında zemin kalmaz: figür yapay zekâ kesimiyle gömülmüş olmalı.
//   K7  Yeni geleni anlatan satırda ekranda yalnız o (ve satırın andığı kişi).
//   K8  Dinleyenin yüzü de satırdan gelir: ekrandaki herkesin ifadesi o satırda yazılı ([ifade], gi, yuz, peri, cengo).
//   K9  "X'e bakıyor" → X ekranda ve bakanın pozu karşıya bakıyor.
//   K10 Nesne bırakıldığı satırda hâlâ görünür (satır–resim aracı İŞ sayar).
//   K11 İki figür üst üste binmez (ekranda ölçülür).
//   K12 Konuşur gibi poz yalnız konuşma satırında, konuşanda.
//   K13 Metnin söylediği görünüş (terli, ıslak, yaralı…) o figürde görünür (poz kaydında yazılı).
// Vaka başına bir kez yazılan kayıt: sablon/vakalar/vaka<N>_kapi.md (eş sözler, poz kaydı, sahibinin "kalsın"ları).
const fs = require('fs'), path = require('path'), os = require('os'), crypto = require('crypto');
const { spawn, spawnSync } = require('child_process');
const KOK = __dirname;
const arg = process.argv.slice(2);
const YENIDEN = arg.includes('--yeniden');
const VAKA = (arg.find(a => /^V\d+$/i.test(a)) || '').toUpperCase();
const TUR = arg.includes('resim') ? 'resim' : 'hikaye';
const N = Number(VAKA.slice(1));
if (!N) { console.error('Kullanım: node arac_kapi.js V6 [hikaye|resim] [--yeniden]'); process.exit(2); }
if (N < 6) { console.log(`${VAKA}: kapı Vaka 6 ve sonrasına uygulanır (sahibinin kararı) — geçti sayıldı.`); process.exit(0); }

// Bütün yollar (her şüpheli ve her ipucu yolu en az bir kez). Yeni vaka eklenince buraya yazılır; yoksa kapı durur.
const YOLLAR = {
  V6: [['0', 'sofra', 'dogru'], ['2', 'siparis', 'zayif'], ['0', 'kagit', 'cengo'], ['3', 'cozmez6', 'jale']],
};
const katla = s => String(s).toLocaleLowerCase('tr');
const md5 = b => crypto.createHash('md5').update(b).digest('hex');
const DIYALOG = path.join(KOK, '..', 'sablon', 'vakalar', `vaka${N}_diyalog.md`);
const KAYIT = path.join(KOK, '..', 'sablon', 'vakalar', `vaka${N}_kapi.md`);
const BAYRAK = path.join(KOK, '..', 'sablon', 'vakalar', `vaka${N}_bayrak.md`);
const bulgu = []; // [kural, yer, açıklama]
const B = (kural, yer, not) => bulgu.push([kural, yer, not]);

// ---------- vaka kaydı: eş sözler, poz kaydı, kalsın ----------
const kayitMetin = fs.existsSync(KAYIT) ? fs.readFileSync(KAYIT, 'utf8') : '';
const bolum = ad => { const m = kayitMetin.split(/\n(?=## )/).find(b => b.startsWith('## ' + ad)); return m || ''; };
const esSoz = {};   // id → [söz…]
for (const l of bolum('eş söz').split('\n')) { const m = l.match(/^-\s*(\w+)\s*:\s*(.+)$/); if (m) esSoz[m[1]] = m[2].split(',').map(x => katla(x.trim())).filter(Boolean); }
const poz = {};     // anahtar → {hedef, bakis, konusur, gorunus[]}
for (const l of bolum('poz').split('\n')) {
  const c = l.split('|').map(x => x.trim()); if (c.length < 7 || !/^`?[a-z]/.test(c[1]) || c[1] === 'anahtar') continue;
  poz[c[1].replace(/`/g, '')] = { hedef: c[2] === '—' || c[2] === '-' ? '' : c[2], bakis: c[3], konusur: /evet/i.test(c[4]), gorunus: c[5] === '—' || c[5] === '-' ? [] : c[5].split(',').map(x => katla(x.trim())) };
}
const kalsin = bolum('kalsın').split('\n').map(l => (l.match(/^-\s*(K\d+)\s*\|\s*(.+)$/) || []).slice(1)).filter(x => x.length).map(([k, s]) => [k, s.trim()]);
const kalsinMi = (kural, metin) => kalsin.some(([k, s]) => k === kural && metin.startsWith(s));
if (!kayitMetin) B('kayıt', path.basename(KAYIT), 'vaka kaydı yok (eş sözler, poz kaydı) — şablon: sablon/vakalar/vaka6_kapi.md');

// ---------- önbellek ----------
const girdiler = [DIYALOG, KAYIT, BAYRAK, 'yeni/game_data.json', 'yeni/gorseller.json', 'yeni/kisiler.json', 'yeni_arayuz.js', 'yeni_arayuz.css',
  'motor_yeni.js', 'arac_kapi.js', 'arac_satir_resim.js', 'arac_yeni_tur.js'].map(f => path.resolve(KOK, f));
const resimler = TUR === 'resim' ? fs.readdirSync(path.join(KOK, 'yeni_gorsel'), { recursive: true }).filter(f => /\.webp$/.test(f)).map(f => path.join(KOK, 'yeni_gorsel', f)) : [];
const imza = md5([TUR, VAKA, ...[...girdiler, ...resimler].map(f => f + ':' + (fs.existsSync(f) ? md5(fs.readFileSync(f)) : '-'))].join('\n'));
const ONB = path.join(KOK, 'YENI_UI', 'kapi_onbellek.json');
const onb = fs.existsSync(ONB) ? JSON.parse(fs.readFileSync(ONB, 'utf8')) : {};
if (!YENIDEN && onb[VAKA + ':' + TUR] === imza) { console.log(`KAPI ${VAKA} ${TUR}: GEÇTİ (aynı girdilerle önce geçmişti)`); process.exit(0); }

const kos = (komut, a, ek = {}) => spawnSync(komut, a, { cwd: KOK, encoding: 'utf8', maxBuffer: 1 << 28, ...ek });
const arka = (komut, a, env) => new Promise(r => { const c = spawn(komut, a, { cwd: KOK, env: { ...process.env, ...env } }); let o = '';
  c.stdout.on('data', d => o += d); c.stderr.on('data', d => o += d); c.on('close', s => r({ status: s, out: o })); });

(async () => {
  console.log(`KAPI ${VAKA} ${TUR} — denetimler koşuyor (bütün yollar paralel; birkaç dakika).`);
  // 1) doğrulayıcı (iki oyun)
  for (const a of [['dogrulayici.js', 'yeni'], ['dogrulayici.js']]) { const r = kos('node', a); if (r.status !== 0) B('doğrulayıcı', a.join(' '), (r.stdout + r.stderr).trim().split('\n').slice(-3).join(' / ')); }
  // 2) derleme güncel mi: yeni sayfa derlenir; kaydedilecek sayfa ondan farklıysa durur (eski sayfa da birebir aynı kalmalı).
  const sayfa = path.join(KOK, '..', 'yeni', 'index.html'), eski = path.join(KOK, '..', 'index.html');
  const once = [sayfa, eski].map(f => md5(fs.readFileSync(f)));
  const rb = kos('node', ['build_html.js', 'yeni']); if (rb.status !== 0) B('derleme', 'build_html.js yeni', rb.stderr.trim().split('\n').pop());
  if (md5(fs.readFileSync(sayfa)) !== once[0]) B('derleme', 'yeni/index.html', 'derlenmiş sayfa güncel değildi — şimdi derlendi; onu da kaydet (git add yeni/index.html)');
  if (md5(fs.readFileSync(eski)) !== once[1]) B('derleme', 'index.html', 'eski oyunun sayfası değişti — yeni kip ona dokunmamalı');
  // 3) turlar (paralel) + sızıntı taraması
  const yollar = YOLLAR[VAKA]; if (!yollar) { B('yol', VAKA, 'arac_kapi.js → YOLLAR tablosunda bu vakanın yolları yok'); return bitir(); }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kapi_'));
  const isler = yollar.map((y, i) => arka('node', ['arac_yeni_tur.js', ...y, '--hepsi'], { TUR_CIKTI: path.join(tmp, 'y' + i) }));
  isler.push(arka('node', ['arac_sizinti_tur.js', VAKA, '40']));
  const sonuc = await Promise.all(isler);
  const siz = sonuc.pop();
  if (siz.status !== 0) B('sızıntı', 'arac_sizinti_tur.js ' + VAKA, siz.out.trim().split('\n').filter(l => /sızıntı|SIZINTI|✗/i.test(l)).slice(0, 5).join(' / ') || 'çıkış ' + siz.status);
  // Tur: JS hatası, yatay taşma ya da turun kendisi çökerse (✗ satırları). "Adı geçen ekranda yok" K2'de sayılır.
  sonuc.forEach((r, i) => { if (r.status !== 0) B('tur', yollar[i].join(' '), r.out.trim().split('\n').filter(l => /✗|TUR HATASI/.test(l)).slice(0, 4).join(' / ') || 'çıkış ' + r.status); });
  const dosya = (i, f) => path.join(tmp, 'y' + i, 'satir', f);
  // 4) satır–resim aracı: İŞ ve SOR sıfır olmalı (K10 bu araçta)
  const dokumlar = yollar.map((_, i) => dosya(i, 'dokum.txt')).filter(f => fs.existsSync(f));
  const sr = kos('node', ['arac_satir_resim.js', ...dokumlar, '--vaka', VAKA, '--cikti', path.join(tmp, 'satir_resim.md'), ...(fs.existsSync(BAYRAK) ? ['--karar', BAYRAK] : [])]);
  const say = (t) => Number(((sr.stdout || '').match(new RegExp(t + ' (\\d+)')) || [])[1] || 0);
  if (say('İŞ') + say('SOR') > 0) {
    const md = fs.readFileSync(path.join(tmp, 'satir_resim.md'), 'utf8');
    for (const l of md.split('\n').filter(l => /^\| (EYLEM|DURUŞ|JEST|KONUŞAN|HİTAP|İLK GÖRME) \|/.test(l))) {
      const sinifBolumu = md.slice(0, md.indexOf(l)).split('## Bayraklar — ').pop().split('\n')[0];
      if (sinifBolumu === 'OTO') continue;
      const c = l.split('|').map(x => x.trim()); B('satır–resim ' + c[1], c[2] + ' · ' + c[3].slice(0, 90), c[4]);
    }
  }
  // 5) satır kayıtları → kurallar
  const kayitlar = [];
  yollar.forEach((_, i) => { const f = dosya(i, 'satir.jsonl'); if (!fs.existsSync(f)) return;
    const l = fs.readFileSync(f, 'utf8').trim().split('\n').filter(Boolean).map(x => JSON.parse(x)); l.forEach((r, j) => { r.onceki = l[j - 1] || null; r.yol = i; }); kayitlar.push(...l); });
  const goruldu = new Set();
  const g = kayitlar.filter(r => r.ad && r.ad.startsWith(VAKA) && !goruldu.has(r.ad + r.k + r.m + r.sol + r.sag + r.kare) && goruldu.add(r.ad + r.k + r.m + r.sol + r.sag + r.kare));
  denetle(g);
  if (TUR === 'resim') resimDenetle(g);
  bitir(tmp);
})();

// ---------- adlar ----------
const veri = JSON.parse(fs.readFileSync(path.join(KOK, 'yeni', 'game_data.json'), 'utf8'));
const FIG = veri.kanon.sahne.figurler;
const adlar = id => { const a = id === 'peri' ? 'Peri' : id === 'cengo' ? 'Cengo' : (FIG[id] || {}).ad || id; return [...new Set([katla(a), katla(a.split(/\s+/)[0]), ...(esSoz[id] || [])])].filter(x => x.length >= 3); };
const KIMLER = [...new Set(['peri', 'cengo', ...Object.keys(FIG)])];
const gecer = (metin, soz) => new RegExp('(^|[^\\p{L}])' + soz.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "(?=$|[^\\p{L}]|['’])", 'u').test(katla(metin));
const anilanlar = metin => KIMLER.filter(id => adlar(id).some(s => gecer(metin, s)));
const fid = x => (x && x !== '-' ? x.split('.')[0] : null);
const ekrandakiler = r => (r.kare || r.cekilmis) ? [] : [r.sol, r.sag].map(fid).filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
const yer = r => `${r.no} ${r.ad} · ${(r.k === 'not' ? '' : r.k + ': ') + r.m.slice(0, 80)}`;
const BAK = /([\p{L}]+)['’]?(?:y?[ae]|n[ae])\s+(?:bir an |uzun uzun |dik dik |şöyle bir )?(?:bakıyor|bakarak|bakıp|bakakalıyor|süzüyor|dönüyor)/gu;
const YER = /(eşik|kapıda|kapının önünde|kapının ağzında|uzakta|uzaktan|karşı kaldırım|pencerede|balkonda|merdiven|yukarıdan|aşağıdan)/u;
const GORUNUS = ['terli', 'ıslak', 'sırılsıklam', 'yaralı', 'morluk', 'kanlı', 'ağlıyor', 'gözyaşı', 'unlu', 'çamurlu', 'güllü', 'duvaklı', 'şallı', 'buruşuk'];

function denetle(g) {
  for (const r of g) {
    const ekran = ekrandakiler(r), anilan = anilanlar(r.m), anlati = r.k === 'not', duz = r.kare || r.mekan;
    const B2 = (kural, not) => { if (!kalsinMi(kural, r.m)) B(kural, yer(r), not); };
    // K1
    if (!duz && !r.ekran) B2('K1', 'ekran etiketi yok — {ekran: …} yazılmalı (önceki satırdan taşınıyor)');
    // K2 (a) anlatıda anılan ekranda
    if (anlati && !duz) for (const id of anilan) if (!ekran.includes(id)) B2('K2', `anlatı ${id} kişisini anıyor, ekranda değil (ekranda: ${ekran.join(', ') || 'kimse'})`);
    // K2 (b) ekrandaki herkes anılıyor / konuşuyor / hitap ediliyor
    if (!duz) {
      let izinli = new Set(anilan);
      if (!anlati) { izinli.add(r.k); if (r.kime) izinli.add(r.kime);
        // kime yazılmamışsa: aynı kişinin süren konuşması — geriye doğru ilk hitaba ya da öteki konuşana kadar bakılır
        if (!r.kime) for (let o = r.onceki; o && o.k !== 'not'; o = o.onceki) { if (o.k !== r.k) { izinli.add(o.k); break; } if (o.kime) { izinli.add(o.kime); break; } } }
      if (anlati && !anilan.length && r.gir) izinli.add(r.gir);
      if (anlati && !anilan.length && !r.gir) izinli = new Set(ekran); // kimseyi anmayan anlatı (kapı çalınıyor): ekran serbest
      for (const id of ekran) if (!izinli.has(id)) B2('K2', `${id} ekranda ama bu satırda anılmıyor, konuşmuyor, hitap edilmiyor`);
    }
    // K4
    if (anlati && !r.kare && YER.test(katla(r.m))) B2('K4', `yer sözü ("${katla(r.m).match(YER)[1]}") — kare ister`);
    // K7
    if (anlati && !duz && r.gir && !(r.onceki && ekrandakiler(r.onceki).includes(r.gir))) {
      const fazla = ekran.filter(id => id !== r.gir && !anilan.includes(id));
      if (fazla.length) B2('K7', `${r.gir} giriyor; ekranda yalnız o olmalı, ama ${fazla.join(', ')} de var`);
    }
    // K8
    if (!duz) for (const id of ekran) {
      const yazili = (id === r.k && r.i) || (r.gir === id && r.gi) || (id === 'peri' && r.peri) || (id === 'cengo' && r.cengo) ||
        String(r.yuz || '').split('+').some(p => p.trim().startsWith(id + '.'));
      if (!yazili) B2('K8', `${id}: yüzü bu satırda yazılı değil (önceki satırdan taşınıyor: ${id === fid(r.sol) ? r.sol : r.sag})`);
    }
    // K9 (hedef ekranda)
    if (!r.kare) for (const m of String(r.m).matchAll(BAK)) {
      const hedef = KIMLER.find(id => adlar(id).some(s => katla(m[1]) === s));
      if (hedef && !ekran.includes(hedef)) B2('K9', `"${m[0]}" — ${hedef} ekranda değil`);
    }
  }
}

function resimDenetle(g) {
  const m = JSON.parse(fs.readFileSync(path.join(KOK, 'yeni', 'gorseller.json'), 'utf8'));
  const yz = new Set(m.kesim_yz || []);
  const kullanilan = new Set();
  for (const r of g) {
    const B2 = (kural, not) => { if (!kalsinMi(kural, r.m)) B(kural, yer(r), not); };
    if (r.kare || r.cekilmis) continue;
    const figs = [r.sol, r.sag].filter(x => x && x !== '-');
    figs.forEach(f => kullanilan.add(f));
    // K11
    if (figs.length === 2 && r.binme > Number(process.env.BINME_ESIK || 200)) B2('K11', `${figs.join(' ve ')} — öndekinin eli ötekinin üstünde (${r.binme} px), dokunuyormuş gibi`);
    for (const f of figs) {
      const id = fid(f), p = poz[f], obur = figs.map(fid).find(x => x !== id);
      if (!p) continue; // poz kaydı eksikliği aşağıda bir kez
      // K3
      if (p.hedef) { const hedef = p.hedef === 'muhatap' ? (r.k === id ? r.kime : r.k === 'not' ? '' : r.k) : p.hedef;
        if (hedef && obur !== hedef) B2('K3', `${f} pozu ${p.hedef === 'muhatap' ? 'muhatabına (' + hedef + ')' : hedef + ' kişisine'} yöneliyor, karşısında ${obur || 'kimse'} var`); }
      // K12
      if (p.konusur && r.k !== id) B2('K12', `${f} konuşur gibi, ama bu satırda ${r.k === 'not' ? 'anlatı var' : r.k + ' konuşuyor'}`);
    }
    // K9 (bakış yönü)
    for (const mm of String(r.m).matchAll(BAK)) {
      const hedef = KIMLER.find(id => adlar(id).some(s => katla(mm[1]) === s));
      const bakan = r.k !== 'not' ? r.k : anilanlar(String(r.m).slice(0, mm.index)).find(x => x !== hedef);
      const f = figs.find(x => fid(x) === bakan);
      if (f && poz[f] && poz[f].bakis !== 'karşı') B2('K9', `${bakan} ${hedef}'e bakıyor, ama ${f} pozu ${poz[f].bakis} bakıyor`);
    }
    // K13
    if (r.k === 'not') for (const w of GORUNUS) if (katla(r.m).includes(w)) {
      const kim = anilanlar(r.m)[0]; const f = figs.find(x => fid(x) === kim);
      if (f && poz[f] && !poz[f].gorunus.some(x => x.startsWith(w.slice(0, 4)))) B2('K13', `metin ${kim} için "${w}" diyor, ${f} pozunda yok`);
    }
  }
  for (const f of kullanilan) {
    if (!poz[f]) B('poz kaydı', f, `vaka${N}_kapi.md → ## poz tablosunda yok (K3, K9, K12, K13 bu kayda bakar)`);
    if (!yz.has(f)) B('K6', f, 'figür yapay zekâ kesimiyle gömülmemiş (gorseller.json → kesim_yz) — saç/kol arasında zemin kalabilir');
  }
  // K5: el sayfası onayı (arac_el.py yazar; sahibi/denetleyen onaylar)
  const el = spawnSync(process.env.PYTHON || (process.platform === 'win32' ? 'python' : 'python3'), [path.join(KOK, 'arac_el.py'), '--kapi', VAKA], { cwd: KOK, encoding: 'utf8' });
  if (el.status !== 0) for (const l of (el.stdout + el.stderr).trim().split('\n').filter(l => /^K5/.test(l))) { const c = l.split('|').map(x => x.trim()); B('K5', c[1], c[2]); }
  if (el.status !== 0 && !/^K5/m.test(el.stdout + el.stderr)) B('K5', 'arac_el.py', (el.stdout + el.stderr).trim().split('\n').slice(-2).join(' / '));
}

function bitir(tmp) {
  const rapor = path.join(KOK, 'YENI_UI', `kapi_${VAKA}_${TUR}.md`);
  fs.mkdirSync(path.dirname(rapor), { recursive: true });
  const grup = {}; for (const [k, y, n] of bulgu) (grup[k] = grup[k] || []).push(`- ${y} — ${n}`);
  const md = `# Kapı ${VAKA} — ${TUR}\n\n${bulgu.length ? '**DURDU: ' + bulgu.length + ' bulgu.**' : '**GEÇTİ.**'}\n\n` +
    Object.entries(grup).map(([k, l]) => `## ${k} (${l.length})\n\n${l.join('\n')}\n`).join('\n');
  fs.writeFileSync(rapor, md);
  if (tmp) console.log('tur çıktıları: ' + tmp);
  if (!bulgu.length) { onb[VAKA + ':' + TUR] = imza; fs.mkdirSync(path.dirname(ONB), { recursive: true }); fs.writeFileSync(ONB, JSON.stringify(onb, null, 1)); console.log(`KAPI ${VAKA} ${TUR}: GEÇTİ`); return; }
  console.log(`KAPI ${VAKA} ${TUR}: DURDU — ${bulgu.length} bulgu (${Object.entries(grup).map(([k, l]) => k + ' ' + l.length).join(', ')})\nRapor: ${path.relative(process.cwd(), rapor)}`);
  process.exitCode = 1;
}
