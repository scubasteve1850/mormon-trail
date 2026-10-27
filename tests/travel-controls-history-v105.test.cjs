const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,'Main game script exists');new vm.Script(script);
for(const text of ['🟢 GO · Start traveling','🛑 STOP · Make camp / plan','stopContinuousTravel();controls()','trail-go','trail-stop'])assert.ok(html.includes(text),'Travel control present: '+text);
for(const encounter of ['prairie_bridge','plains_water']){assert.ok(script.includes("id:'"+encounter+"'"),'Historical encounter present: '+encounter)}
assert.ok(script.includes('state.parts--;wear(-2)'), 'Creek crossing repair consumes parts and impacts condition');
assert.ok(script.includes('spendDay();spirits(8)'), 'Water-sharing option costs a day and improves morale');
assert.ok(script.includes('function autosave()'),'Saves remain available');
console.log('Version 105 controls and historical encounter smoke checks passed');
