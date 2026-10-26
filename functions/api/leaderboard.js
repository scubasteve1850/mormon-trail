// Cloudflare Pages Function. Scores are self-reported and are not cheat-proof.
const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
const reply=(data,status=200)=>new Response(JSON.stringify(data),{status,headers});
export async function onRequest({request,env}){
 if(!env.TRAIL_SCORES)return reply({error:'Leaderboard is not configured yet.'},503);
 try{
  const db=env.TRAIL_SCORES;
  await db.prepare('CREATE TABLE IF NOT EXISTS trail_scores (id TEXT PRIMARY KEY, nickname TEXT NOT NULL, score INTEGER NOT NULL, difficulty TEXT NOT NULL, transport TEXT NOT NULL, created_at TEXT NOT NULL)').run();
  if(request.method==='GET'){
   const {results}=await db.prepare('SELECT nickname, score, difficulty, transport, created_at FROM trail_scores ORDER BY score DESC, created_at ASC LIMIT 25').all();
   return reply({scores:results||[],notice:'Scores are player-submitted and not independently verified.'});
  }
  if(request.method!=='POST')return reply({error:'Method not allowed.'},405);
  const origin=request.headers.get('Origin');if(origin&&origin!==new URL(request.url).origin)return reply({error:'Invalid origin.'},403);
  if(Number(request.headers.get('Content-Length')||0)>2048)return reply({error:'Request too large.'},413);
  const data=await request.json(),nickname=typeof data.nickname==='string'?data.nickname.trim().replace(/\s+/g,' '):'';
  if(!/^[a-zA-Z0-9 _.-]{2,20}$/.test(nickname)||!Number.isInteger(data.score)||data.score<0||data.score>50000||!['easy','normal','hard'].includes(data.difficulty)||!['wagon','handcart'].includes(data.transport)||!/^[-a-zA-Z0-9]{16,64}$/.test(data.id||''))return reply({error:'Please use a 2–20 character nickname and a valid journey score.'},400);
  await db.prepare('INSERT OR IGNORE INTO trail_scores (id,nickname,score,difficulty,transport,created_at) VALUES (?,?,?,?,?,?)').bind(data.id,nickname,data.score,data.difficulty,data.transport,new Date().toISOString()).run();
  return reply({ok:true});
 }catch{return reply({error:'Leaderboard is temporarily unavailable.'},503)}
}
