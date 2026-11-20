// ARAÇ (test değil): kural belgelerindeki HER maddeyi asıl metniyle, kelimesi kelimesine çıkarır (16 Kasım 2026,
// sahibinin isteği: "hiçbir kural kaybolmasın, anlamı değişmesin"). Özet yok, ayıklama yok: her madde, her tablo satırı,
// her paragraf ayrı bir kayıt olur; yanında dosya, satır ve bölüm başlığı yazılır.
// Çıktı: sablon/kurallar/HAM.tsv (programların okuyacağı) ve sablon/kurallar/HAM.md (insanın okuyacağı).
// Kayıt kimliği metnin kendisinden türer (dosya + metin özeti), satır numarası değişse de aynı kalır; sonraki adımda
// her kimliğin son listede bir karşılığı olduğu bununla sayılır.
// Kullanım: cd kaynak && node arac_kural_ham.js [--cikti <klasör>]
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const KOK = path.join(__dirname, '..');

// Kural yazılı belgeler (16 Kasım 2026 taraması). Resim istemleri (G<n>.md), vaka metinleri ve DURUM kayıtları kural belgesi
// değildir, girmez. Yeni kural belgesi açılırsa buraya eklenir.
// Kural toplamanın son adımında (20 Kasım 2026) arşive taşınan belgeler `A(...)` ile yazılır: arsiv/<yol>'dan okunur, kayıtları
// ESKİ yolun adıyla yazılır (kimlik değişmesin). Sıra değiştirilmez: `no` sütunu sıraya bağlı (KURALLAR.md `*Kaynak:*`).
const A = yol => ({ yol: 'arsiv/' + yol, etiket: yol });
const BELGELER = [
  'CLAUDE.md',
  A('sablon/1_oyun_yapisi.md'), A('sablon/2_kural_kitabi.md'), 'sablon/3_kanon_kaydi.md', A('sablon/4_motor_sinirlari.md'),
  A('sablon/5_gorsel_sistemi.md'), 'sablon/6_vaka_formu.md', 'sablon/7_uretim_sureci.md', 'sablon/8_shorts.md',
  A('sablon/TASLAK_tekrar_onleme.md'),
  'uretim/CLAUDE.md', A('uretim/ISTEM_KALIPLARI.md'), 'uretim/AGENTS.md', A('uretim/OKUBENI.md'),
  A('uretim/v3_eski/BIRIKIM.md'), A('uretim/v3_eski/CLAUDE.md'), A('uretim/v3_eski/AGENTS.md'),
  A('kaynak/RAF_KARARLARI.md'), A('kaynak/YENI_OYUN_TON.md'), A('kaynak/YENI_OYUN_SEZON.md'), A('kaynak/YENI_OYUN_CERCEVE.md'),
  'kaynak/gorsel_stil_sozlesmesi.md', 'kaynak/cengo_bag_mekanigi.md', 'kaynak/dogrulayici_sozlesmesi.md',
  'kaynak/veri_format_sozlesmesi.md', 'kaynak/OKUBENI.md', 'kaynak/yeni/OKUBENI.md',
  'sablon/vakalar/vaka2_baslangic.md', 'sablon/vakalar/vaka3_baslangic.md', 'sablon/vakalar/vaka4_baslangic.md',
  'sablon/vakalar/vaka5_baslangic.md', 'sablon/vakalar/vaka6_baslangic.md', 'sablon/vakalar/vaka7_baslangic.md',
  'kaynak/DEVIR.md',
  // Bölünüp arşive taşınan parça: kayıtları eski belgenin adıyla yazılır (kimlik değişmesin).
  { yol: 'arsiv/kaynak/OKUBENI_eski_oyun.md', etiket: 'kaynak/OKUBENI.md' },
];
// Programın içinde yazılı kurallar: yalnız kural satırları alınır.
const PROGRAMLAR = [
  { dosya: 'kaynak/arac_kapi.js', desen: /^\/\/\s+(K\d+\s+.+)$/ },
  { dosya: 'uretim/istem_kontrol.sh', desen: /eksik\+=\("([^"]+)"\)/ },
];

const kayitlar = [];
const kimlik = (dosya, metin) => crypto.createHash('md5').update(dosya + '\n' + metin.replace(/\s+/g, ' ').trim()).digest('hex').slice(0, 10);

for (const belge of BELGELER) {
  const dosya = typeof belge === 'string' ? belge : belge.etiket;
  // Arşive taşınan belge (arsiv/<yol>) eski adıyla okunur: kayıt kimliği değişmesin.
  const yer = typeof belge !== 'string' ? path.join(KOK, belge.yol)
    : fs.existsSync(path.join(KOK, dosya)) ? path.join(KOK, dosya) : path.join(KOK, 'arsiv', dosya);
  const satirlar = fs.readFileSync(yer, 'utf8').split('\n');
  const baslik = [];            // [düzey] = başlık
  let kod = false, blok = null; // blok = { satir, metin[] , tur }
  const bitir = () => {
    if (!blok) return;
    const metin = blok.metin.join('\n').trim();
    if (metin) kayitlar.push({ dosya, satir: blok.satir, bolum: baslik.filter(Boolean).join(' › '), tur: blok.tur, metin });
    blok = null;
  };
  satirlar.forEach((l, i) => {
    const no = i + 1;
    if (/^\s*```/.test(l)) {      // kod bloğu bütünüyle tek kayıt
      if (!kod) { bitir(); kod = true; blok = { satir: no, metin: [l], tur: 'kod' }; }
      else { blok.metin.push(l); kod = false; bitir(); }
      return;
    }
    if (kod) { blok.metin.push(l); return; }
    const h = l.match(/^(#{1,6})\s+(.*)$/);
    if (h) { bitir(); const d = h[1].length; baslik.length = d; baslik[d - 1] = h[2].trim(); return; }
    if (/^\s*$/.test(l)) { bitir(); return; }
    if (/^\s*\|/.test(l)) {        // tablo: her satır ayrı kayıt; ayırıcı satır atlanır
      bitir();
      if (/^\s*\|[\s:|-]+\|\s*$/.test(l)) return;
      kayitlar.push({ dosya, satir: no, bolum: baslik.filter(Boolean).join(' › '), tur: 'tablo', metin: l.trim() });
      return;
    }
    const madde = l.match(/^(\s*)(?:[-*+]|\d+[a-z]?[.)])\s+/);
    const alinti = /^\s*>/.test(l);
    if (madde) {
      const girinti = madde[1].length;
      // Alt madde de ayrı kayıt olur (gruplama yok).
      bitir(); blok = { satir: no, metin: [l], tur: girinti ? 'alt madde' : 'madde', girinti }; return;
    }
    if (blok && (blok.tur === 'madde' || blok.tur === 'alt madde') && /^\s+\S/.test(l)) { blok.metin.push(l); return; }
    if (blok && blok.tur === (alinti ? 'alıntı' : 'paragraf')) { blok.metin.push(l); return; }
    bitir(); blok = { satir: no, metin: [l], tur: alinti ? 'alıntı' : 'paragraf' };
  });
  bitir();
}
for (const p of PROGRAMLAR) {
  fs.readFileSync(path.join(KOK, p.dosya), 'utf8').split('\n').forEach((l, i) => {
    const m = l.match(p.desen); if (m) kayitlar.push({ dosya: p.dosya, satir: i + 1, bolum: 'program', tur: 'program', metin: m[1].trim() });
  });
}

// Kimlik: aynı dosyada aynı metin iki kez geçerse sıra numarası eklenir (yine de kaybolmaz).
const gorulen = {};
kayitlar.forEach((k, i) => {
  let id = kimlik(k.dosya, k.metin);
  gorulen[id] = (gorulen[id] || 0) + 1;
  if (gorulen[id] > 1) id += '-' + gorulen[id];
  k.id = id; k.no = i + 1;
});

// --cikti <klasör>: karşılaştırma için başka yere yazar (HAM.tsv'nin üstüne yazmadan).
const ci = process.argv.indexOf('--cikti');
const CIKTI = ci > 0 ? path.resolve(process.argv[ci + 1]) : path.join(KOK, 'sablon', 'kurallar');
fs.mkdirSync(CIKTI, { recursive: true });
const tsvHucre = s => String(s).replace(/\t/g, '    ').replace(/\r?\n/g, '\\n');
fs.writeFileSync(path.join(CIKTI, 'HAM.tsv'),
  ['no\tid\tdosya\tsatir\tbolum\ttur\tmetin', ...kayitlar.map(k => [k.no, k.id, k.dosya, k.satir, k.bolum, k.tur, k.metin].map(tsvHucre).join('\t'))].join('\n') + '\n');

const say = {}; for (const k of kayitlar) say[k.dosya] = (say[k.dosya] || 0) + 1;
const md = [
  '# Kuralların ham listesi',
  '',
  `> Program çıkardı (\`kaynak/arac_kural_ham.js\`), ${new Date().toISOString().slice(0, 10)}. **Elle düzenlenmez.** Kural belgelerindeki`,
  '> her madde, tablo satırı ve paragraf asıl metniyle, kelimesi kelimesine; özet yok, ayıklama yok. Bu yüzden kural olmayan',
  '> satırlar da (açıklama, geçmiş, örnek) burada. Ayıklama sonraki adımda, sahibiyle birlikte yapılır.',
  '',
  `**Toplam: ${kayitlar.length} kayıt, ${Object.keys(say).length} dosya.**`,
  '',
  '| dosya | kayıt |',
  '|---|---|',
  ...Object.entries(say).map(([d, n]) => `| \`${d}\` | ${n} |`),
  '',
];
let onceki = '';
for (const k of kayitlar) {
  if (k.dosya !== onceki) { md.push('', `## ${k.dosya}`, ''); onceki = k.dosya; }
  md.push(`**${k.no}** · \`${k.id}\` · satır ${k.satir} · ${k.tur}${k.bolum && k.bolum !== 'program' ? ' · ' + k.bolum : ''}`, '');
  md.push(k.tur === 'kod' ? k.metin : k.metin.split('\n').map(x => '> ' + x).join('\n'), '');
}
fs.writeFileSync(path.join(CIKTI, 'HAM.md'), md.join('\n'));
console.log(`HAM: ${kayitlar.length} kayıt, ${Object.keys(say).length} dosya → ${path.relative(KOK, CIKTI) || '.'}/HAM.tsv, HAM.md`);
for (const [d, n] of Object.entries(say)) console.log(`  ${String(n).padStart(5)}  ${d}`);
