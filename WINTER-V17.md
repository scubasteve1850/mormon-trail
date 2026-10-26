# Winter journey and walking animation update

The fictional wagon family departs in February 1846. The real exodus began February 4, 1846; the Iowa trek continued through winter exposure, spring rain and mud, reaching the Missouri River in June. Winter Quarters belongs to the later winter of 1846–47. The game retains its condensed distances and calendar rather than representing the real 105-day Iowa trek day for day.

History sources:
- https://www.nps.gov/mopi/learn/historyculture/the-1846-trek.htm
- https://www.nps.gov/mopi/planyourvisit/winter-quarters.htm

Gameplay:
- Each traveler has saved warmth, cold exposure, and frostbite state. Old saves initialize missing warmth at 100 without changing health or reviving anyone.
- Winter and late-winter weather consume 15% more food. Filling/meager rations, clothing coverage, travel pace, and sheltered rest influence warmth. Clothing represents a coat, boots and blankets bundle; one per living traveler gives full coverage.
- Sustained low warmth can cause frostbite. The first chilled/dangerously-cold threshold interrupts a multi-day travel command and appears in Trail messages. Family cards show individual warmth and frostbite; Gear flags inadequate clothing, and shop advice and recommended packing account for winter.
- Frostbite and extreme exposure cost individual and company health and can trigger the existing named-grave notification. The old instant random cold injury has been replaced by progressive exposure.
- Rest uses the existing wagon cover/tent and dry blankets. Fed, sheltered rest warms the family. Two warm rest days above 60 warmth begin recovery from the simplified frostbite condition. Medicine helps health but does not erase the cold condition by itself. This is a game model, not medical instruction.
- The existing condensed Winter Quarters preparation chapter restores surviving travelers' warmth and advances to spring 1847; it does not revive the dead. No additional winter-season management stage was introduced.

Visuals:
- Added a matching snowy Iowa background, snowy track, seasonal snow particles, winter layers/gloves/scarves, and breath vapor. Snow cover gives way to thaw and spring mud based on the game date; summer artwork remains available.
- Human walkers use heel/toe boot rolls, planted-foot recovery, shaped trousers/skirts, tailored seams, sleeve cuffs, restrained arm swing and winter shoulder wraps.
- Oxen have a slower four-beat gait, overlapping hoof contacts, fixed-length articulated upper/lower legs, stronger shoulder/thigh mass, knee/hock highlights and cloven hoof details. Human and oxen stride lengths match ground movement at their respective walking cadences.
- Full-width animation and mandatory river playback from v16 remain in place. The river backdrop and banks also follow the winter season.

Validation:
- `node tests/screens-rivers.test.cjs` passes all existing tests, including nine complete seeded journeys from setup to arrival across Easy/Normal/Hard.
- New tests cover seasonal snow/thaw/mud, cold food cost, different clothing coverage, hunger and pace exposure, warning stops, frostbite persistence/recovery and medicine behavior, exposure deaths, spring reset, old-save defaults, and oxen bone lengths throughout a complete gait.
- Rendered and inspected actual canvas artwork with repository images: winter/summer scenes and four walking phases. These renderer previews do not establish browser CSS layout or native iPhone frame rate. Live deployment was not verified.

Art asset: assets/scenes/iowa-winter-v17.webp
Workspace path: /workspace/scratch/af1daa05345d/mormon-trail/assets/scenes/iowa-winter-v17.webp
Created with the built-in image-generation tool, using the existing prairie scene as the edit target. WebP encoding preserves the generated image for the app.

Final art prompt:
"Use case: lighting-weather. Edit target: the attached prairie game background. Create the matching February 1846 Iowa winter version of this SAME landscape for a historical pioneer game. Preserve the wide rolling river valley, horizon, foreground track, and painterly polished 3D adventure-game art style and camera position. Snow-covered open prairie and foreground track with subtle wagon ruts, bare deciduous trees, pale frozen river margins, distant low hills, winter cloud sky with soft cool daylight and a little warm sunlight. Cold and challenging yet beautiful, suitable for kids and teens. No people, animals, vehicles, buildings, text, logos or UI. Do not add mountains or fantasy features. This is a clean empty scenery layer; characters will be animated separately. Landscape 3:2 aspect ratio."
