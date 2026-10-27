const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];assert.ok(script);new vm.Script(script);
const start=script.indexOf('const familyNamePools='),end=script.indexOf(' const shuffled=familyTalents',start);assert.ok(start>=0&&end>start);
const code=script.slice(start,end);const results=new Set();
for(let seed=0;seed<80;seed++){
 const captain={value:'Captain Jensen'};const ctx={Math:Object.create(Math),$:(id)=>id==='captain'?captain:null};ctx.Math.random=()=>((seed*193+29)%997)/997;
 vm.createContext(ctx);const names=vm.runInContext(code+';companions',ctx);
 assert.equal(names.length,4);assert.equal(new Set([...names,'Jensen']).size,5);
 results.add(names.join(','));
}
assert.ok(results.size>10,'The available families should vary across new journeys');
assert.match(script,/familyRosterVersion:2/,'New journeys maintain roster mapping');
assert.match(script,/function load\(/,'Saved journeys retain their roster');
console.log('Random family-name and existing-save regression checks passed');
