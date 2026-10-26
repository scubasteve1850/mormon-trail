# Mormon Trail visual update

The game uses the built-in image-generation tool for three raster assets, with independent canvas animation and vector UI artwork. Original generated PNGs were resized and encoded as WebP for the game; alpha was preserved for sprites.

| Asset | Purpose |
| --- | --- |
| `assets/scenes/prairie-adventure-v2.webp` | Prairie panorama behind the animated company |
| `assets/scenes/wagon-body-v2.webp` | Transparent wagon body; wheels animate separately |
| `assets/scenes/ox-torso-v2.webp` | Transparent ox torso; legs animate separately |

Animation includes rotating spoked wheels, walking oxen and travelers, dust, moving grass, river ripples, snow/rain and a flickering campfire. Scene modes follow player actions. Rendering targets 30 fps, pauses painting in hidden tabs, and honors prefers-reduced-motion. Map and status graphics use native canvas/CSS rather than generated imagery so labels and resource values remain exact. The illustrated route is explicitly simplified, not a geographic map.

## Generation prompts

### Prairie
Use case: historical-scene. Asset type: seamless-feeling landscape background for an animated Mormon pioneer trail browser game for kids and teens. Create a beautiful wide cinematic stylized 3D animated adventure environment, soft richly textured painterly rendering, polished console game background. Sweeping American Great Plains with a winding dusty wagon road across the bottom quarter, lush golden-green prairie grasses, distant river valley, layered blue hazy hills, cottonwood trees far to the sides, broad luminous blue sky and soft billowing clouds, warm afternoon sunlight. Camera side-on landscape panorama, horizon about halfway down. Leave the central lower half unobstructed for animated wagon and oxen that will be drawn separately. No people, no animals, no wagons, no buildings, no text, no letters, no UI, no logos. A geographically plausible prairie landscape, no huge fantasy mountains. Wide 3:2 landscape composition that also crops well to a 2.5:1 banner.

### Wagon body
Use case: historical-scene. Asset type: transparent game sprite to layer above separately animated wheels. Create ONLY the BODY of an 1840s American covered pioneer wagon, strict SIDE VIEW, front faces RIGHT. Beautiful stylized cinematic 3D adventure game render with rich painterly textures, cream linen canvas arched high over a honey brown wooden wagon box, visible curved hoop ribs, tied ropes, small weathered water barrel strapped at the rear left, a teal rolled blanket, small brass lantern on the front right. Warm afternoon light from upper left, soft ambient shadows in fabric. CRITICAL: NO WHEELS, NO AXLES BELOW THE WAGON BOX, NO GROUND, NO SHADOW ON GROUND, NO ANIMALS, NO PEOPLE, NO POLE EXTENDING RIGHT. The sprite will sit on separate animated wooden wheels. Single isolated wagon body only, entire canopy and wooden box fully visible centered in frame, body fills the image with a little transparent margin. Genuine transparent background. No text, no border, no other objects.

### Ox torso
Use case: stylized-concept. Asset type: modular animal torso game sprite. Single ox facing RIGHT in strict side profile, realistic 1840s draft ox, broad tan brown body, short curved ivory horns, gentle expressive dark eye, brown leather collar and small wooden yoke. Beautiful polished 3D animated adventure game style with soft painterly fur and warm afternoon light. IMPORTANT: render only HEAD, NECK, BODY AND TAIL, NO LEGS AT ALL; this is a modular animation torso with legs supplied by the game engine. Clean natural belly contour, no stumps, no wounds, no gore. Transparent background, isolated ox torso centered, fits entire frame with a small transparent margin. No ground, no shadow on ground, no wagon, no people, no text, no border. Exactly one animal torso, not a sprite sheet.
