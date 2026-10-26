# Travel gameplay update

The core travel loop now shows a report after an uninterrupted stretch: miles, days, food consumed, health change, and vehicle wear, followed by choices to continue, camp, adjust plans, or find provisions. Landmarks, river crossings, and encounters still interrupt travel immediately.

Terrain affects daily progress and wagon wear: rolling country, open plains, high country, mountain approach, and rain-softened ground. Players can choose an established track, careful footing, or pressing ahead through Pace & Rations → Read trail. Approach choices stack with pace and rations; their daily consequences are disclosed before selection and persist in saved games. These are fictional travel approaches, not claims about historical alternate routes. Older saves default to the balanced approach.

Repair now uses advanceDays(1), so the calendar and daily provisions agree with its stated cost. Tests cover the actual route tradeoffs, travel report save, repair date/food/parts accounting, terrain changes, existing river presentations, family health, and complete reference journeys on all difficulty levels.
