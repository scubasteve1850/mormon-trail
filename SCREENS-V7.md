# Screen and river update

- Compact phone Trail layout keeps the eight main actions visible.
- Gear tiles and tab badge identify low and critical supplies, including food days at the current ration setting.
- Map adds current-leg progress, persistent landmark selection, and a locate-company control.
- Family and oxen use planted-foot walking phases with smooth foot lift and opposing limb motion. Living travelers preserve their identities when another traveler is lost.
- Full-screen ford, float, guided ferry, and riverbank wait scenes illustrate the selected action. Saved results resolve once and resume after reload without repeating costs or rerolling outcomes. Reduced motion remains supported.

Validation: phone UI inspected at 355 x 580; node tests/screens-rivers.test.cjs passes supply and save checks, crossing replay and wait semantics, gait loop closure, 160 crossing frames, scene/weather rendering, and actual-control reference journeys on easy, normal, and hard. Native iPhone performance and live deployment were not verified.
