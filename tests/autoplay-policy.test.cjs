const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const start=html.indexOf('function startRecorded(){'),end=html.indexOf('function nextWalkingHymn()',start);
assert.ok(start>=0&&end>start);
const source=html.slice(start,end);
async function run(){
 const c={musicOn:true,recordedAudio:null,recordedCue:null,currentCue:'travel',trailPlaylist:[{name:'Test',url:'test.mp3',rate:1}],trailTrackIndex:0,trailTrackOffset:0,trailFailures:0,musicTimer:1,recordedTrackFor:()=> 'travel',$:()=>({value:35}),clearInterval:()=>{},updateSoundUI:s=>{c.notice=s},stopRecorded:()=>{if(c.recordedAudio)c.trailTrackOffset=c.recordedAudio.currentTime;c.recordedAudio=null;c.recordedCue=null}};
 let rejectPlay;
 c.Audio=class{constructor(){this.currentTime=12}addEventListener(){}play(){return new Promise((resolve,reject)=>{rejectPlay=reject})}};
 vm.createContext(c);vm.runInContext(source+';startRecorded()',c);
 rejectPlay({name:'NotAllowedError'});await Promise.resolve();await Promise.resolve();
 assert.equal(c.musicOn,false);assert.equal(c.trailTrackIndex,0);assert.equal(c.trailFailures,0);assert.equal(c.musicTimer,null);assert.equal(c.trailTrackOffset,12);assert.match(c.notice,/Tap Music/);
 c.musicOn=true;vm.runInContext('startRecorded()',c);const replacement={};c.recordedAudio=replacement;
 rejectPlay({name:'NotAllowedError'});await Promise.resolve();await Promise.resolve();
 assert.equal(c.recordedAudio,replacement);assert.equal(c.musicOn,true,'Stale rejection cannot stop a replacement recording');
 console.log('PASS: autoplay denial preserves track/offset, stops timer, requests gesture, and ignores stale rejections');
}
run().catch(e=>{console.error(e);process.exitCode=1});
