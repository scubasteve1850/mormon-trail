const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');const js=html.split('<script>')[1]?.split('</script>')[0];assert.ok(js);new vm.Script(js);
const fn=js.match(/function skillWidth\(species='deer'\)\{[^}]+\}/)?.[0];assert.ok(fn,'species-dependent target size');
for(const difficulty of ['easy','normal','hard']){
 const context={state:{difficulty}};vm.createContext(context);vm.runInContext(fn,context);
 const b=context.skillWidth('bison'),d=context.skillWidth('deer'),h=context.skillWidth('hare');
 assert.ok(b>d&&d>h,'large animals should have wider target windows');
 assert.ok(h>0&&b<.5,'target windows stay inside the meter');
}
assert.match(js,/updateSkillMeter\('hunt',o.elapsed,aim.start,outingSpecies\(aim.slot,o\)\)/);
assert.match(js,/skillWidth\(species\)/);
console.log('Hunting target-size regression checks passed');
