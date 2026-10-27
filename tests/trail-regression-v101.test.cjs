const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,'Game script must be present');
new vm.Script(script,{filename:'mormon-trail.js'});
function functionSource(name,next){
 const begin=script.indexOf('function '+name+'(');
 const end=script.indexOf('function '+next+'(',begin);
 assert.ok(begin>=0&&end>begin,name+' should be followed by '+next);
 return script.slice(begin,end);
}
const encounter=functionSource('canTriggerTrailEncounter','event');
for(const [difficulty,gap] of [['easy',5],['normal',4],['hard',3]]){
 const ctx={state:{day:100,difficulty,lastEncounterDay:100}};
 vm.runInNewContext(encounter+';globalResult=canTriggerTrailEncounter()',ctx);
 assert.equal(ctx.globalResult,false,difficulty+' must not trigger immediately');
 ctx.state.lastEncounterDay=100-gap;
 vm.runInNewContext('globalResult=canTriggerTrailEncounter()',ctx);
 assert.equal(ctx.globalResult,true,difficulty+' should trigger after gap');
}
const positionSource=functionSource('outingPosition','presentOuting');
for(const difficulty of ['easy','normal','hard']){
 const ctx={state:{difficulty},outingSpecies:slot=>['hare','deer','bison'][slot],Math};
 vm.runInNewContext(positionSource,ctx);
 const fn=vm.runInNewContext('outingPosition',ctx);
 const o={elapsed:0,seed:2,versions:[0,0,0]};
 for(let ms=0;ms<=60000;ms+=250){o.elapsed=ms;for(let slot=0;slot<3;slot++){
 const pos=fn(slot,o);
 assert.ok(Number.isFinite(pos.x)&&Number.isFinite(pos.y),'Animal coordinates finite');
 assert.ok(typeof pos.offscreen==='boolean','Offscreen state explicit');
 }}
}
assert.match(script,/function huntHidden\(slot,o\)/);
assert.match(script,/pos\.offscreen/);
assert.match(script,/function finishOuting\(/);
assert.match(script,/HUNT REPORT/);
assert.match(script,/function autosave\(/);
assert.match(script,/function normalizeCompany\(/);
assert.match(script,/function dateLabel\(/);
assert.match(script,/function setMusicCue\(/);
assert.match(script,/frontier-piano-rag-encore\.mp3/);
console.log('Trail regression checks passed: syntax, encounter pacing, hunting positions, summary, saves, calendar, music.');
