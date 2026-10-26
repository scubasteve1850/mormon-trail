# Shared Mormon Trail leaderboard

The `/api/leaderboard` Pages Function uses a Cloudflare D1 database. Create a D1 database in the Cloudflare account that hosts the Pages project, then in that Pages project choose Settings → Bindings → Add → D1 database and set its variable name to `TRAIL_SCORES`. Select the database and redeploy the Pages project. The function creates its table on first use. Production and preview bindings may need to be configured separately. See https://developers.cloudflare.com/pages/functions/bindings/.

Players opt in using a public nickname; no family names are automatically published. Scores are self-reported by the browser, so they are not independently verified and can be manipulated. The endpoint validates basic input and duplicate IDs, but has no moderation or rate limiting. Before inviting broad public use, add abuse controls/moderation and a privacy notice appropriate to the audience. Do not put credentials in the client or repository.
