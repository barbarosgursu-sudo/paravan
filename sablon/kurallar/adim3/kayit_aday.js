// Arşive taşınacak belgelerin KURAL olmayan satırları → adim3/kayit_aday.tsv (id, dosya, etiket, bölüm, metin)
const fs=require('fs'),path=require('path');const K=path.join(__dirname,'..');
const TASINACAK=['sablon/1_oyun_yapisi.md','sablon/2_kural_kitabi.md','sablon/4_motor_sinirlari.md','sablon/5_gorsel_sistemi.md',
 'sablon/8_shorts.md','sablon/TASLAK_tekrar_onleme.md','sablon/vakalar/vaka2_baslangic.md','sablon/vakalar/vaka3_baslangic.md',
 'sablon/vakalar/vaka4_baslangic.md','sablon/vakalar/vaka5_baslangic.md','sablon/vakalar/vaka6_baslangic.md','sablon/vakalar/vaka7_baslangic.md',
 'uretim/ISTEM_KALIPLARI.md','uretim/OKUBENI.md','kaynak/YENI_OYUN_TON.md','kaynak/YENI_OYUN_SEZON.md','kaynak/YENI_OYUN_CERCEVE.md',
 'kaynak/RAF_KARARLARI.md','uretim/v3_eski/BIRIKIM.md','uretim/v3_eski/CLAUDE.md','uretim/v3_eski/AGENTS.md'];
const rd=f=>fs.readFileSync(f,'utf8').replace(/\r/g,'').trim().split('\n').map(l=>l.split('\t'));
const et={};rd(path.join(K,'ETIKET.tsv')).slice(1).forEach(r=>et[r[0]]=r[3]);
const out=['id\tdosya\tetiket\tbolum\tmetin'];
for(const r of rd(path.join(K,'HAM.tsv')).slice(1)){const[no,id,dosya,satir,bolum,tur,metin]=r;
 if(TASINACAK.includes(dosya)&&et[id]!=='KURAL')out.push([id,dosya,et[id],bolum,metin].join('\t'))}
fs.writeFileSync(path.join(__dirname,'kayit_aday.tsv'),out.join('\n')+'\n');console.log(out.length-1,'satır');
