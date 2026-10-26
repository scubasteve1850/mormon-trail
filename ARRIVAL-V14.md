# Personalized arrival and complete-journey review

The valley now opens a full-screen animated arrival featuring the actual surviving travelers and current wagon or handcart. Family reflections use each traveler’s condition and their saved memories. Lost family members are remembered separately and do not appear as living travelers in the arrival animation. Reduced motion shows a static arrival.

Three recap views:
- Family: portraits, arrival health, individual reflections, recent memories, and respectful remembrance.
- Results: current supplies and condition, score breakdown, earned achievements, and replay goals based on the completed journey. Points recognize gameplay choices, not faith or worthiness.
- Scrapbook: visited landmarks, collected discoveries, and actual decisions, outings, crossings, service, and conversations recorded during the journey. A bounded 60-event history is separate from the rolling journal. Older saves use surviving journal notes when detailed entries are unavailable.

Completed saves resume the selected recap view without repeated arrival rewards, costs, or logs. The journal includes a direct recap button after arrival. Players can inspect the journal or start a new expedition. The recorded music system remains unchanged; the ending uses its existing arrival cue.

Playability corrections:
- Rest now uses the number of days whose rations were actually paid. A traveler resting with exactly one day of food receives that day’s recovery. Partial-ration multi-day rests recover only for fed days, while hunger still applies on unfed days. Camp, exhaustion encounters, and landmark rest use this rule consistently.
- Continue on a travel report now starts the next stretch directly, up to five days; players can still return to the dashboard, camp, adjust the plan, or find provisions.
- Ending headings and bottom navigation avoid the existing mobile rule that hides the main page header and footer during play.

Validation:
- node tests/screens-rivers.test.cjs passes previous river, encounter, outing, landmark, save, and animation checks.
- Added arrival tests cover personalized memories, living-family labels, both transports and motion preferences, respectful remembrance, stable scores and rewards, scrapbook fallback, saved recap views, bounded history, failed-expedition exclusion, fed-day recovery, and direct travel continuation.
- Nine automated reference journeys start through real setup, store, and departure handlers and continue through winter, exploration, outings, encounters, rivers, and arrival: three deterministic seeds on each difficulty. All arrived with five travelers and nine discoveries using a strategy that responds early to supplies and condition. Easy took 84–89 active game days and three provisioning outings; Normal 110–116 days and six outings; Hard 160–180 days and 14–15 outings. This is a reproducible reference-strategy check, not a player win-rate study.
- Browser checks at 355 x 580 verified arrival, family-memory expansion, results, scrapbook, keyboard navigation, journal return, and the travel report’s direct Continue action. Live deployment and native iPhone frame rate were not verified.
