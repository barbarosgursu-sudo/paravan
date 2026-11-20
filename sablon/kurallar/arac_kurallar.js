// Adım 3 aracı — kuralları tek dosyada toplar ve hiçbir kuralın kaybolmadığını SAYAR.
//
//   node arac_kurallar.js birlestir   adim2/kural_<KOD>.md (16 dosya) → KURALLAR.md  (metne dokunmaz; yalnız başlık düzeyi)
//   node arac_kurallar.js say         (a) ham listedeki her kaydın etiketi var mı,
//                                     (b) her KURAL kaydının KURALLAR.md'de karşılığı var mı. Eksik varsa çıkış 1.
//
// Konu sırası adim2/KONULAR.md'deki sıradır. Kaynak numaraları adim2/KURAL_SATIRLAR.tsv "no" sütunudur.
// Birleştirilen (konular arası tekrar) bir kuralın kodu silinmez: başlığı kalır, gövdesi "→ <KOD>" der.
const fs = require('fs'), path = require('path');
const K = __dirname, A = path.join(K, 'adim2'), CIKTI = path.join(K, 'KURALLAR.md');

const tsv = f => fs.readFileSync(f, 'utf8').replace(/\r/g, '').trim().split('\n').map(l => l.split('\t'));
const konuSirasi = () => [...fs.readFileSync(path.join(A, 'KONULAR.md'), 'utf8').matchAll(/^\| ([A-Z]+) \|/gm)]
  .map(m => m[1]).filter(k => k !== 'kod');

function birlestir() {
  const sira = konuSirasi();
  // İlk üretimden sonra KURALLAR.md asıldır (konular arası birleştirmeler orada yapılır); yeniden üretmek onları siler.
  if (fs.existsSync(CIKTI) && !process.argv.includes('--yeniden')) {
    console.log('KURALLAR.md zaten var ve artık ASIL dosya. Üzerine yazmak için: --yeniden (birleştirmeler kaybolur).');
    process.exit(1);
  }
  const bolumler = [], icerik = [];
  for (const k of sira) {
    const satirlar = fs.readFileSync(path.join(A, 'kural_' + k + '.md'), 'utf8').replace(/\r/g, '').split('\n');
    let kod = false, n = 0, baslik = k;
    const cik = satirlar.map(s => {
      if (/^```/.test(s)) kod = !kod;
      if (kod || !/^#{1,5} /.test(s)) return s;
      if (/^### /.test(s)) n++;
      if (/^# /.test(s)) baslik = s.slice(2);
      return '#' + s;                       // # konu → ## konu, ## bölüm → ###, ### kural → ####
    });
    while (cik.length && cik[cik.length - 1] === '') cik.pop();
    bolumler.push({ k, baslik, n });
    icerik.push(cik.join('\n'));
  }
  const toplam = bolumler.reduce((a, b) => a + b.n, 0);
  const bas = [
    '# PARAVAN — KURALLAR',
    '',
    '> Bütün kurallar bu dosyada. Başka belge kural yazmaz, yalnız kural kodunu anar (ör. `SATIR-3`).',
    '> Bu dosya `sablon/kurallar/arac_kurallar.js birlestir` ile `adim2/kural_<KOD>.md` dosyalarından üretildi;',
    '> `node arac_kurallar.js say` her kaynak satırın burada karşılığı olduğunu sayar.',
    '> `*Kaynak:*` numaraları `adim2/KURAL_SATIRLAR.tsv` → `no` sütunudur (asıl metin ve hangi belgeden geldiği orada).',
    '',
    '| konu | kural sayısı |',
    '|---|---|',
    ...bolumler.map(b => `| ${b.baslik} | ${b.n} |`),
    `| **toplam** | **${toplam}** |`,
    '',
  ].join('\n');
  fs.writeFileSync(CIKTI, bas + '\n' + icerik.join('\n\n') + '\n');
  console.log('KURALLAR.md yazıldı:', bolumler.length, 'konu,', toplam, 'kural');
}

function say() {
  let hata = 0; const H = (...m) => { console.log('EKSİK', ...m); hata++; };
  // (a) ham listedeki her kaydın etiketi var mı
  const ham = tsv(path.join(K, 'HAM.tsv')).slice(1).map(r => r[1]);
  const et = {}; tsv(path.join(K, 'ETIKET.tsv')).slice(1).forEach(r => et[r[0]] = r[3]);
  const gecerli = new Set(['KURAL', 'KAYIT', 'ESKİ OYUN']);
  for (const id of ham) if (!gecerli.has(et[id])) H('etiket yok:', id);
  for (const id of Object.keys(et)) if (!ham.includes(id)) H('etiketli ama ham listede yok:', id);
  const kuralId = Object.keys(et).filter(id => et[id] === 'KURAL');
  // (b) her KURAL kaydının KURALLAR.md'de karşılığı var mı
  const noOf = {}; tsv(path.join(A, 'KURAL_SATIRLAR.tsv')).slice(1).forEach(r => noOf[r[1]] = r[0]);
  const konu = {}; tsv(path.join(A, 'konu.tsv')).forEach(r => konu[r[0]] = r[1]);
  const metin = fs.readFileSync(CIKTI, 'utf8').replace(/\r/g, '');
  const tanim = new Set([...metin.matchAll(/^#### ([A-Z]+-\d+)\b/gm)].map(m => m[1]));
  const kullanilan = new Set(), say = { kural_kaydi: kuralId.length, karsilik: 0, YOK: 0, ESKIDI: 0 };
  for (const id of kuralId) {
    const no = noOf[id]; if (!no) { H('KURAL kaydı adım 2 listesinde yok:', id); continue; }
    const k = konu[no]; if (!k) { H('konusu yok:', no); continue; }
    const har = tsv(path.join(A, 'harita_' + k + '.tsv')).find(r => r[0] === no);
    if (!har) { H('haritada yok:', k, no); continue; }
    const hedef = (har[1] || '').split(/[,\s]+/).filter(Boolean);
    if (!hedef.length) { H('hedefsiz:', k, no); continue; }
    for (const t of hedef) {
      if (t === 'YOK' || t === 'ESKIDI') { say[t]++; continue; }
      if (!tanim.has(t)) { H('KURALLAR.md\'de yok:', no, '→', t); continue; }
      kullanilan.add(t);
    }
    if (hedef.some(t => tanim.has(t))) say.karsilik++;
  }
  for (const t of tanim) if (!kullanilan.has(t)) console.log('UYARI kaynaksız kural:', t);
  // Birleştirilen kural: "→ KOD" diyorsa hedef var mı
  for (const m of metin.matchAll(/^#### ([A-Z]+-\d+)\b.*\n+→ ([A-Z]+-\d+)/gm))
    if (!tanim.has(m[2])) H('birleşme hedefi yok:', m[1], '→', m[2]);
  console.log(JSON.stringify({ ham_kayit: ham.length, ...say, kural_basligi: tanim.size }), 'hata:', hata);
  process.exit(hata ? 1 : 0);
}

({ birlestir, say }[process.argv[2]] || (() => { console.log('kullanım: node arac_kurallar.js birlestir|say'); process.exit(2); }))();
