# The Mormon Trail: Zion or Bust!

An original, browser-based retro pioneer survival adventure. Historical landmarks are real; fictional characters and humorous events are inventions. Not affiliated with The Church of Jesus Christ of Latter-day Saints.

## Play

Open [index.html](./index.html) locally in a modern browser, or deploy the repository to Cloudflare Pages. No build tools or dependencies required.

## Features (v0.1)

- Three difficulty modes and three starting supply packages
- Pixel-art canvas wagon scene
- Travel, food, health, morale, medicine, spare parts, and weather
- Historical route landmarks from Nauvoo to the Salt Lake Valley
- Random branching encounters, hunting/gathering, trading, and resting
- Browser-local save and load, victory and loss states

## Cloudflare Pages deployment

1. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the `scubasteve1850/mormon-trail` repository.
3. Configure as a static HTML site with **no build command** and the **repository root** as the output directory (`/` or leave the build output setting at root where supported).
4. Deploy. Once Cloudflare confirms the initial `pages.dev` deployment, open **Custom domains** and add `mormontrail.timberlaneward.com`.
5. Follow Cloudflare's DNS instructions. Since the parent domain is already on Cloudflare, the required record may be created automatically.

Commits to the connected branch should trigger future Cloudflare Pages deployments once the integration is enabled.

## Roadmap

Interactive hunting and river crossing minigames; richer map and journey journal; original music and sound effects; additional historical encounters; achievements and balancing; automated smoke tests.

## Privacy

Save data is stored in the player's browser via localStorage; no accounts or backend.
