# Trail messages, pioneer history, geographic map, and death notifications

The former Story tab is now History (the internal journal tab key is retained for save compatibility). Trail contains a compact Trail messages drawer with the existing journal, discoveries, save/new controls, and completed-journey recap. The drawer expands over the Trail panel so the normal control layout remains compact. The arrival screen's journal shortcut also opens Trail messages.

History selects one of twelve accounts by the company's current route position. Named pioneers include Brigham Young, William Clayton, Orson Pratt, Louisa Barnes Pratt, and Thomas Bullock. Each card identifies the place, historical date, source, and whether it is an excerpt or summary. Locust Creek is distinguished from Sugar Creek. Historical dates are independent of the fictional game date, and earlier accounts remain available.

The map uses approximate latitude/longitude locations instead of modern-state bands. It shows river courses, the Rockies, Great Salt Lake, generalized 1846–47 claims and regions, a north arrow, coordinate grid, approximate scale, route progress, and whole-route/current-region views. Iowa's label changes after December 28, 1846. Mexico/Great Basin and Oregon Country replace anachronistic Utah/Wyoming state bands. Political lines and river courses are generalized, the Platte camp is fictional, and Indigenous homelands are explicitly acknowledged. This remains an illustrated game map, not a surveyed trail or exact historical boundary dataset.

Deaths now record cause, date, game mile, and nearest reached landmark. A saved notice queue pauses travel and opens a full-screen notification with a native canvas grave illustration and a wooden marker named for that person. Acknowledging notices does not spend another day. River and landmark decisions reached on the same day remain pending after the notice. Multiple notices cannot be skipped by a stale double-click callback. Deceased family cards provide View grave; older saves without death details do not invent a cause or date.

Sources:
- https://www.nps.gov/articles/000/mormon-pioneer-trail-junior-ranger.htm
- https://www.nps.gov/mopi/learn/historyculture/the-1846-trek.htm
- https://www.nps.gov/mopi/learn/historyculture/the-1847-trek.htm
- https://www.nps.gov/places/locust-creek-campsite.htm
- https://www.nps.gov/mopi/planyourvisit/garden-grove.htm
- https://www.nps.gov/mopi/planyourvisit/mount-pisgah.htm
- https://www.nps.gov/mopi/planyourvisit/winter-quarters.htm
- https://www.nps.gov/mopi/planyourvisit/fort-bridger.htm
- https://www.nps.gov/mopi/planyourvisit/upload/MOPI_LFT_ADA_Map-guide020113.pdf
- https://www.senate.gov/states/IA/timeline.shtml
- https://www.archives.gov/education/lessons/guadalupe-hidalgo
- https://www.nps.gov/places/formation-of-the-oregon-territory.htm

Validation: JavaScript syntax and unique HTML IDs checked. The existing Node-style test suite was executed against the updated source in the available JavaScript runtime using an in-memory DOM/canvas and VM adapter; all existing checks passed, including nine complete reference journeys from setup to arrival. New checks cover the merged journal, all twelve location-based history selections, period labels, geographic positions and zoom, finite map coordinates throughout the journey, grave rendering and causes, notice persistence and replay, duplicate guards, river/landmark continuity after death, total-family failure, reset, and legacy saves. The updated standard test file remains tests/screens-rivers.test.cjs.

The selected filesystem/browser environment was unavailable this turn. The Node command itself, phone rendering, live deployment, and native device performance were not verified. No generated bitmap asset is required for the grave: the named illustration is drawn from game state in canvas.
