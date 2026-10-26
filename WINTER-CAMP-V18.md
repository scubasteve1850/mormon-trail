# Work through Winter Quarters

The previous automatic spring preparation granted food, wagon repairs, warmth and healing. It is replaced with a full-screen, saved winter camp with six condensed rounds, plus up to two optional spring work weeks. Entering camp carries the player's existing inventory and health forward. Leaving camp carries exactly the remaining supplies, condition, health, warmth and injuries forward. A calendar transition no longer grants resources or recovery.

Each round:
- Inspect a saved, forecast hardship and the coming food/fuel costs.
- Give an available family helper a light camp task: kindling, shelter patching, food support, care, or wagon repairs using one actual part.
- Choose rations and a main activity: profession work, general labor, shelter building, firewood or rest.
- Paid work has an untimed tool-order memory game. Study the order, then repeat it. Easy keeps the order visible; Normal/Hard allow another look for a five-pound reduction in pay. Three/four/five steps scale with difficulty. Correct steps change the actual earnings; no perfect result is required to earn something.
- Resolve earned provisions, paid food/fuel costs, shelter wear, hardship and family health. Decisions can produce a strong spring outfit or hunger, illness, cold injury and death.

Professions have distinct opportunities and protections:
- Farmer: strongest grain income and smaller flour losses.
- Carpenter: paid work also improves shelter/wagon condition; smaller wind damage.
- Doctor: care work improves health and reduces illness damage, with lower food earnings.
- Merchant: more cash and better winter food purchase prices.
- Teacher: improves morale and reduces family strain.

Additional choices include finite purchases using existing cash and medicine using actual kits. Meager rations conserve food but worsen health, warmth and morale; filling rations cost more and aid recovery. Profession advantages and hardship effects are visible before committing. The work tasks and numeric resource values are fictional gameplay, not claims about exact historical wages or literal monthly rations.

Forecast hardships include bitter wind, sickness, flour spoilage, damp wood, strained spirits and a calmer interval. Insufficient fuel and food can injure or kill family members. Existing named-grave notices interrupt camp, then resume the saved round summary. Spring does not erase injuries. The real Winter Quarters history remains linked from the camp: https://www.nps.gov/mopi/planyourvisit/winter-quarters.htm

Animation/art:
- Raised the hip-to-foot extension and reduced vertical bob so planted legs can straighten rather than staying in a squat. Two-bone joints remain reachable throughout the gait for every walking size.
- Slimmer sleeves, shaped coats, curved apron/skirt hems and fabric shading replace the oversized shoulder wraps and flatter silhouettes. Existing portraits and individual colors remain.
- Inspected four phases of the full walking cycle with the actual repository images, plus winter/summer and camp canvas renders.

Persistence/interaction:
- Order, step, score, forecast, costs, resources, optional work weeks and summary persist in the normal save.
- Old buttons and repeated callbacks cannot repeat a step or pay a completed round twice.
- Death records are saved as part of the settled winter round, preventing a half-resolved winter snapshot.
- Underlying trail controls remain inert during camp. Escape cannot bypass winter. Reset closes its modal and animation. Existing completed-winter saves remain completed.

Validation:
- `node tests/screens-rivers.test.cjs` passes the existing river, outing, landmark, history/map, death and arrival checks.
- Nine complete deterministic journeys from real setup/store/departure through the new camp to valley arrival passed across Easy/Normal/Hard, all with five travelers and nine discoveries using a responsive provisioning strategy.
- Added tests cover all five professions, work quality, partial-task reload without reroll, stale callbacks, duplicate payments, no automatic restock/repair/healing, winter mortality and grave resume, food/fuel/medicine costs, rations, help costs, two optional spring weeks, preserved departure injuries, reset and full-cycle joint lengths.
- Native canvas renderer previews were inspected. The local browser executable is unavailable, so browser CSS layout, live deployment and native iPhone frame rate remain unverified.
