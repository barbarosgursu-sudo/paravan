// Program sayar: her KURAL satırı haritada mı, her hedef kural dosyasında mı
const fs=require('fs'),D=process.argv[2];
const konu={};fs.readFileSync(D+'/konu.tsv','utf8').trim().split('\n').forEach(l=>{const[n,k]=l.split('\t');konu[n]=k});
const kodlar=[...new Set(Object.values(konu))];let hata=0,say={kural:0,YOK:0,ESKIDI:0,CELISKI:0};
for(const k of kodlar){
 const hf=D+'/harita_'+k+'.tsv',kf=D+'/kural_'+k+'.md';
 if(!fs.existsSync(hf)||!fs.existsSync(kf)){console.log('EKSİK DOSYA',k);hata++;continue}
 const tanim=new Set((fs.readFileSync(kf,'utf8').match(new RegExp('^### ('+k+'-\\d+)','gm'))||[]).map(s=>s.slice(4)));
 say.kural+=tanim.size;
 const har={};fs.readFileSync(hf,'utf8').trim().split('\n').forEach(l=>{const r=l.split('\t');if(/^\d+$/.test(r[0]))har[r[0]]=r[1]||''});
 for(const[n,kk]of Object.entries(konu))if(kk===k&&!(n in har)){console.log('HARİTADA YOK',k,n);hata++}
 for(const[n,h]of Object.entries(har)){if(konu[n]!==k){console.log('BAŞKA KONUNUN SATIRI',k,n);hata++}
  for(const t of h.split(/[,\s]+/).filter(Boolean)){ if(t==='YOK'||t==='ESKIDI'){say[t]++;continue} if(/^CELISKI/.test(t)){say.CELISKI++;continue}
   if(!tanim.has(t)){console.log('TANIMSIZ HEDEF',k,n,t);hata++}}}
 const kul=new Set(Object.values(har).flatMap(h=>h.split(/[,\s]+/)));for(const t of tanim)if(!kul.has(t)){console.log('BOŞTA KURAL',t)}
}
console.log(JSON.stringify(say),'hata:',hata);process.exit(hata?1:0);
