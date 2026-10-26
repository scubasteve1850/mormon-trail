# Coherent character art and natural walking

Replaced the normal walking renderer's flat bodies and pasted portrait faces with five matching shaded character rigs. Each transparent atlas contains a complete head/body, a sleeved arm and a stocking/trouser leg with boot. The face, cloth, skin and leather now share lighting and material detail. Family identity, palette, order and historical clothing remain recognizable. These are cinematic 3D-style illustrations rendered as articulated 2D sprites, not real-time 3D models.

Review and iteration:
1. Generated and inspected all five modular atlases. Located the alpha bounds and shoulder/elbow/knee/ankle pivots; integrated the textured body and limbs.
2. Corrected the ground line, smoothed foot position and velocity through toe-off/heel-strike, and added a shared pelvis reach constraint. Boots roll separately from the shin. Idle blends to a neutral planted stance rather than holding a walking pose.
3. Close-up cycle review exposed the remaining tiny-step/fast-cadence shuffle. Increased road travel to 36 scene units/second and reduced human gait frequency to 5.4 radians/second; stride length is derived from those values. Oxen cadence and stride were synchronized to the same ground speed. Scene rendering targets the browser's 60 Hz frame opportunities, while reduced motion remains static/slow-refresh.
4. Live browser review confirmed the new artwork and exposed frame stalls from per-limb filtering of large atlases. Added load-time cropped/resized caches and pre-shaded far limbs; animation frames reuse small canvas textures and perform no brightness filtering. Cache body textures are 320 pixels high and limb textures 192 pixels high, sufficient for their scene display sizes.
5. Inspected winter/summer family scenes, idle camp and twelve cycle phases, including close-up joint connections. Existing scene composition remains westward/right-to-left. The textured renderer is shared by trail, river, camp and arrival scenes.

The dress mesh narrows the working skirt below the waist and adds subtle fabric sway. Foreground/background limbs overlap at the source pivots; darker far limbs provide depth. Existing canvas artwork is retained as a loading/error fallback. New atlases preload at startup with versioned filenames.

Assets, saved in /workspace/scratch/af1daa05345d/mormon-trail/:
- assets/family/rig-captain-v19.webp
- assets/family/rig-eliza-v19.webp
- assets/family/rig-joseph-v19.webp
- assets/family/rig-sarah-v19.webp
- assets/family/rig-hyrum-v19.webp

These five assets were made with the built-in image-generation tool using the existing family portraits as identity/style references. The exact prompt set and output paths are recorded in art/family-rig-v19-prompts.json. Generated originals remain intact; the project copies are WebP-encoded RGBA atlases.

Validation:
- node tests/screens-rivers.test.cjs passes the existing gameplay checks, including nine complete seeded journeys through the playable winter camp to arrival.
- Added checks verify all five transparent WebP assets, pose reachability and fixed limb lengths over full gait cycles/sizes/speeds, neutral idle phase independence, smooth foot position and velocity at both cycle boundaries, stance speed matching the ground, reduced motion, and balanced canvas state.
- Native canvas renders were reviewed with actual repository images. Actual iPhone hardware frame rate is not established by these checks.

The update preserves winter camp economics, death/grave notifications, history/map behavior, music, saved gameplay state and mandatory river presentation.

Also corrected the shop recommendation label to match its existing 375-lb and one-clothing-bundle-per-traveler packing targets.
