// Konular arası tekrar ADAYLARI: KURALLAR.md'deki her iki farklı konunun kuralı arasında kelime benzerliği (tf-idf kosinüs).
// node adim3/aday.js [eşik=0.25] → adim3/TEKRAR_ADAY.md (her çift iki metniyle). Aday listesidir; karar insanda/Claude'da.
const fs=require('fs'),path=require('path');const K=path.join(__dirname,'..');
const esik=+process.argv[2]||0.25;const t=fs.readFileSync(path.join(K,'KURALLAR.md'),'utf8').replace(/\r/g,'');
const R=[];let cur=null,kod=false;
for(const s of t.split('\n')){if(/^```/.test(s))kod=!kod;const m=!kod&&s.match(/^#### ([A-Z]+)-(\d+) (.*)/);
 if(m){cur={kod:m[1]+'-'+m[2],konu:m[1],ad:m[3],g:[]};R.push(cur);continue}
 if(!kod&&/^#{1,3} /.test(s)){cur=null;continue} if(cur)cur.g.push(s)}
const tok=x=>x.toLocaleLowerCase('tr').replace(/[^a-zçğıöşü0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>3).map(w=>w.slice(0,6));
const df={};R.forEach(r=>{r.w={};tok(r.ad+' '+r.ad+' '+r.g.filter(s=>!/^\*Kaynak/.test(s)).join(' ')).forEach(w=>r.w[w]=(r.w[w]||0)+1);Object.keys(r.w).forEach(w=>df[w]=(df[w]||0)+1)});
R.forEach(r=>{let n=0;for(const w in r.w){r.w[w]*=Math.log(R.length/df[w]);n+=r.w[w]**2}r.n=Math.sqrt(n)});
const P=[];for(let i=0;i<R.length;i++)for(let j=i+1;j<R.length;j++){const a=R[i],b=R[j];if(a.konu===b.konu)continue;let d=0;for(const w in a.w)if(b.w[w])d+=a.w[w]*b.w[w];const c=d/(a.n*b.n||1);if(c>=esik)P.push([c,a,b])}
P.sort((x,y)=>y[0]-x[0]);
const o=[`# Konular arası tekrar adayları (eşik ${esik}, ${P.length} çift)`,'',`Üretildi: \`node adim3/aday.js ${esik}\`. Her çiftte iki kuralın KURALLAR.md'deki tam metni.`,''];
P.forEach(([c,a,b],i)=>o.push(`## ${i+1}. ${a.kod} ↔ ${b.kod} (${c.toFixed(2)})`,'',`### ${a.kod} ${a.ad}`,...a.g,'',`### ${b.kod} ${b.ad}`,...b.g,''));
fs.writeFileSync(path.join(__dirname,'TEKRAR_ADAY.md'),o.join('\n').replace(/\n{3,}/g,'\n\n'));
fs.writeFileSync(path.join(__dirname,'aday.tsv'),'no\ta\tb\tbenzerlik\n'+P.map(([c,a,b],i)=>[i+1,a.kod,b.kod,c.toFixed(2)].join('\t')).join('\n')+'\n');
console.log(P.length,'çift');
