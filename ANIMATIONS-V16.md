# Seamless full-width scenes and required crossing playback

The travel canvas now sizes its drawing buffer to the element's current aspect ratio. One continuous rendered landscape, road, grass, weather, and ambient animation fills the entire width. The separate static CSS landscape behind a contained canvas has been removed. The wagon, oxen, and family retain uniform proportions, remain together, and are not cropped to fill a wide screen. Wide views extend the world horizontally; taller views extend the sky above the family. The canvas adjusts on subsequent frames after resizing, rotating, or changing tabs.

River presentations no longer provide a skip control or an Escape shortcut. Ford, float, hired ferry, and waiting presentations run for 5.2 seconds of visible playback before automatically showing the already resolved result or next choice. Moving crossings enter from the right bank and reach the left bank before completion. The final shore pose holds briefly. The underlying game stays inert. A guard prevents early completion, outcomes and costs remain exactly once, and reopening a saved presentation plays it again without rerolling. Playback pauses in a hidden tab and does not jump to completion when the tab returns. Reduced motion retains a static shore illustration for the same short presentation, then continues automatically.

Validation:
- `node tests/screens-rivers.test.cjs` passed, including all prior journal/history/map/death checks and nine complete deterministic journeys across all difficulties.
- Added checks cover five screen proportions, all crossing methods, early-completion and Escape guards, hidden-tab pause, reload stability, and automatic completion with both motion preferences.
- Rendered actual canvas artwork with loaded repository images using the native canvas library, then inspected phone/wide travel scenes and river midpoint/shore frames. These are renderer checks, not browser layout tests.
- The local browser executable was unavailable and its download failed. Browser CSS layout, native iPhone frame rate, and live hosting deployment were not verified.

This update also includes HISTORY-MAP-V15.md: Trail messages merged into Trail, twelve sourced accounts in the location-aware History tab, a geographic period map, and named grave notifications.
