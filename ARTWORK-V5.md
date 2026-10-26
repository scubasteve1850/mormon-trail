# Family artwork and health meters

Five portrait assets under `assets/family/`: `father-v5.webp`, `mother-v5.webp`, `son-v5.webp`, `daughter-v5.webp`, and `young-son-v5.webp`. Generated using the built-in image-generation tool as a portrait atlas, then split into individual optimized WebP assets for game use. This is an original pioneer family, inspired by the supplied reference's expressive cinematic character style; ancient costumes were not copied.

Each family card displays a portrait, name, full-width health meter, percentage and condition. Conditions: Healthy at 80–100, Needs rest at 50–79, Unwell at 25–49, Critical below 25, Remembered for lost travelers. Colors supplement labels, and meters expose accessible numeric progress. HUD health, morale and vehicle meters use the same component. Wheel felloes, spokes and hubs use dark walnut tones; the narrow iron band remains. Existing walking rigs remain articulated canvas figures, with portrait-matched faces; this update does not supply full 3D animated bodies.

## Final portrait generation prompt

A polished cinematic stylized 3D adventure game portrait atlas: five separate pioneer character portraits arranged in five exactly equal vertical columns across one wide image. Soft dark teal background. Each character is centered in their own column, head and shoulders visible, generous margin around the head, no overlap between columns. Expressive friendly faces, detailed hair, appealing animated movie proportions, realistic tactile linen and wool clothing, rich warm rim lighting. 1840s American frontier family: left to right a kindly father with dark hair, short beard, brown hat and teal waistcoat; a mother with brown hair, cream bonnet and rust dress; a young male traveler with tousled brown hair, moss green vest and linen shirt; a young female traveler with brown braid, cream bonnet and dusty blue dress; a cheerful younger male traveler with chestnut hair, mustard vest and linen shirt. Distinct faces with hopeful expressions. Beautiful high quality game character design, not flat vector art. No text, no labels, no borders, no weapons. Horizontal landscape image.

## Validation

Browser inspected family portrait cards, individual accessible health meters and the Trail HUD. Existing gameplay and renderer checks pass; condition threshold labels and critical-versus-healthy colors were checked separately. Full-body character generation failed, so the existing native animation rig was retained and enhanced rather than advertised as a replacement 3D character set.
