# Hunting and gathering activities

Hunting replaces the jumping emoji target with smooth-moving SVG deer, hares, and bison. Each has distinct size, speed, gait, and food reward. Five shots at most; empty-ground taps consume ammunition. Brief target replacement delays prevent repeated hits on the same disappearing animal. Base carrying limit is 100 lbs, and wagon cargo space also limits what returns.

Gathering is a short search for clearly marked fictional food baskets among illustrated rocks and branches: eight baskets, twelve attempts, limited time, and a per-camp restriction. Obstacles cost time on Normal/Hard. Cold weather reduces the yield. Basket symbols are game targets, not plant identification instructions.

Players choose a living companion with at least 40 health or go without one. Eliza packs +2 food per find; Joseph adds +1 per find and 20 lbs carrying capacity; Sarah gives five extra seconds; Hyrum gives four. Both activities consume one day and daily rations exactly once. Returning early keeps the collected food within limits. Outing results enter the journal and companion memories.

Active outings save remaining time, finds/hits, ammunition, board state, and companion. Reload resumes instead of spending another day or restarting the reward. Hidden pages pause active time. Reduced motion provides static targets without a timer. Keyboard target activation, focus confinement, and Escape-to-return are supported.

Validation: automated tests cover companion eligibility and bonuses, hits/misses, ammunition, target cooldown, one-time costs/rewards, save/resume, hidden-page pause, timeout, all-difficulty gathering, cargo limits, saved memories, stale callbacks, and reduced motion. Complete reference journeys still pass on Easy/Normal/Hard through actual control handlers. Browser checks at 355 x 580 verified hunting hit feedback, illustrated gathering controls, and returning food to the company. Live deployment and native iPhone performance were not verified.
