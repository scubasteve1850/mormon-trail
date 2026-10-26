# Company animation update

Human and ox stride distances now account for their display scale, matching the shared ground movement more closely. Family figures have slight torso rotation, apron and skirt sway, and breathing at rest. Oxen have shoulder motion independent of their planted feet. Wagon suspension movement applies to the body instead of bouncing the whole team; background scenery no longer rocks side to side.

Floating crossings animate swimming strokes. Ford movement eases with crossing progress; ferry scenes have gentle roll and guide movement. Expanding ripples fade behind the crossing company and remain clipped to the river. Crossing animation temporarily sets and restores its own ambient clock so it does not depend on the paused trail scene. Reduced-motion scenes remain static.

Validation: render checks across river methods, transport types, weather, motion preferences, and all difficulties; gait and game-state checks retained. Browser preview inspected. Live deployment and native iPhone frame rate not verified.
