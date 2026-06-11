---
layout: page
title: Task 5
description: The Flight of Colonel Drake
importance: 6
category: C Programming & Data Processing
---

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: left;
}

table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

table tr:nth-child(even) {
  background-color: #fafafa;
}

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  iframe {
    max-width: 100%;
    height: auto !important;
  }
}
</style>

**Points: <span style="color: #D72B2B;">200</span>**

# The Flight of Colonel Drake

<div style="margin: 1.5rem 0;"></div>

### Being an Account of the Pentonville Affair, as Recorded by Dr. John H. Watson

It was the sort of morning that London produces when she is in a foul temper, slate grey, bitter, and smelling of coal smoke and river mud, when Holmes set down his coffee cup with a crack that suggested he had been waiting for precisely this sort of occasion.

The telegram had arrived at six. By half past, he was already in his coat.

## The Affair

Colonel Sebastian Drake, a forger, extortionist, and the man Holmes had once described, with genuine admiration, as "the most disciplined criminal intelligence I have encountered since Moriarty went over the falls", had walked out of Pentonville Prison the previous night.

Not escaped. Walked. The distinction, Holmes informed me on the cab ride over, mattered enormously.

"A man who escapes panics. He makes noise. He leaves evidence of desperation." Holmes pressed his fingertips together. "Drake walked. That means he had a vehicle waiting, a route planned, and almost certainly a ship booked. We have perhaps eighteen hours before he reaches the coast and we lose him to the Continent entirely."

Lestrade met us at the prison gates, hat askew, looking like a man who had not slept and was beginning to resent the fact.

"We found the vehicle," he said. "A stolen Daimler, torched in a barn outside Gravesend. But one of our undercover men had the foresight to conceal a tracking device inside it before Drake's associates acquired it. A neckband fitted with two sensors, worn by the operative during an earlier reconnaissance and left wedged beneath the rear seat."

He produced a scorched evidence bag.

Holmes took it, turned it over once, and handed it to me. "The logs will be intact. The casing is gone but the data card is a different material entirely." He was already walking. "Come along, Watson. We have a route to reconstruct."

<div style="margin: 1.5rem 0;"></div>

### The Two Witnesses

Back at Baker Street, Holmes spread the recovered sensor logs across the dining table and stood over them with the expression he reserves for problems that are difficult enough to be genuinely interesting.

The neckband had carried two instruments, both recording from the moment the Daimler left Pentonville's eastern gate to the moment someone put a match to it. How the operative had wedged the thing beneath the seat, at what angle, facing which way, was anyone's guess; he had been concerned with concealing it, not with cataloguing its posture.

The first was a satellite positioning receiver. Holmes held its log up and read through it with the quiet satisfaction of a man reviewing a credible confession.

"This one," he said, setting it down, "is our Mycroft. Unhurried. Precise. Speaks only when it has something worth saying, and when it speaks, you may take it as gospel." He tapped the page. "One fix every hundred milliseconds, latitude and longitude to an accuracy that would make the Ordnance Survey envious. Minimum noise, minimum drift. When Drake's Daimler was in open country under clear sky, this instrument recorded every metre of his path without a tremor."

He picked up the second log and his expression shifted, just slightly, to the particular variety of tolerant contempt he usually reserves for Lestrade's deductions.

"And this," he said, "is our Wiggins."

I leaned over. The second instrument measured the vehicle's own linear and angular acceleration across all three axes, which reports every thirty milliseconds, through the tunnel, through the barn, through the fire, never once going quiet.

"Never shuts up," Holmes said, almost approvingly. "Through the tunnel, through the barn, through the fire and still chattering, facing towards its destiny." He set it down. "Unfortunately, it also invents. Twitches that aren't turns. Rotations that last a single sample and then have the decency to disappear, like a witness who recants mid-sentence. The bias wanders. The numbers lie by small amounts, consistently, and in changing directions." He picked up his pipe. "Useful the way a nervous informant is useful. You listen, you discount heavily, and you do not let it near a courtroom."

He drew on the pipe and regarded me through the smoke.

"One thing more, and mark it well, for it is the whole of the exercise. This second instrument speaks only in its own tongue, the frame of the casing it sits in, however that casing came to rest beneath the seat. Which of its axes runs down the bonnet, which points out across the seats, which aims at the road beneath, that is not written on any label and I shall not be telling you. Nor can you assume it keeps to any convention you have met before. It is yours to establish, Watson, before a single one of its numbers will mean a thing. Work it out. I want no assumptions you cannot defend."

He straightened up.

"Drake's route passes through the Blackwall Tunnel." Holmes tapped the dropout markers with one finger. "Route where our composed friend goes completely silent." He set the logs down and looked at me with the expression he wears when he considers something beneath elaboration. "You will figure out the rest. Produce me a complete account of every turn, every straight, every metre of that vehicle's route from Pentonville gate to wherever Drake's driver finally lost his nerve."

He sat down, lit his pipe, and added, as an afterthought: "In C. Standard library only. I won't have you importing half of London's mathematics departments into a single source file."

<div style="margin: 1.5rem 0;"></div>

## The Coordinate System

Use the following **world** coordinate system throughout your solution:

| Axis | Direction |
|---|---|
| X | East (+) / West (-) |
| Y | North (+) / South (-) |
| Z | Up (+) / Down (-) |

## The Evidence Files

You are provided with exactly two input files. Do not modify them.

[`sensor_1.txt`](https://drive.google.com/file/d/1s5nIGZo9sjPsMBy_X_Vi6MHco25hWWw3/view?usp=drive_link)

[`sensor_2.txt`](https://drive.google.com/file/d/1eJXPsJfpoXLDVP92KQ_L2kp_KIorAtLY/view?usp=drive_link)

The Daimler departed Pentonville Prison heading North.

## The Route Log

Holmes requires the full reconstruction written out to a plain-text file named `path_travel.txt`, in the following exact format. It will be presented to Scotland Yard and must be unambiguous.

### Part 1: Header

```
Start : P00   Lat <Starting latitude>  Lon <Starting longitude>
Total distance : <XY.Z> m
```

The latitude and longitude are those of the very first valid satellite fix, the route origin at Pentonville's gate. Total distance is the sum of all straight-segment distances in metres, rounded to one decimal place.

**Part 2: Column Header**

```
WP     ACTION              TURN°    HEADING    DIR       DIST
```

**Part 3: Waypoint Rows**

START row (first waypoint only)

```
P00    START                 ---       0.0°      N     XY.Z m
```

TURN + STRAIGHT rows (all subsequent corners)

```
PXX    TURN RIGHT          +6.8°      281.2°
        STRAIGHT                       281.2°     W     XY.Z m
```

Each corner occupies two lines. The first line carries the waypoint label, TURN LEFT or TURN RIGHT, the signed turn angle, and the new heading. The second line carries an empty label, STRAIGHT, no turn field, the same heading, compass direction, and segment distance.

Right turns are positive. Left turns are negative.

Straight-continuation row (first leg of a section continues at the same heading)

```
PXX    STRAIGHT              ---      69.2°     NE    XY.Z m
```

When the first leg of a new section continues at precisely the same heading as the preceding section, with no turn at the boundary, emit a single STRAIGHT row with the turn field written as `---`.

### Tunnel boundary markers

```
ENTERING TUNNEL
```

Insert immediately before the entry in the tunnel.

```
EXITING TUNNEL
```

Insert immediately before the exit out of tunnel.

### END marker

```
PXX    END
```

<div style="margin: 1.5rem 0;"></div>

### Field Definitions

| Field | Definition |
|---|---|
| WP | Waypoint label: P00, P01, P02, and so on, incremented at every new corner, padded to 2 digits. |
| ACTION | One of: START, TURN LEFT, TURN RIGHT, STRAIGHT, END. |
| TURN° | Signed turn angle in degrees. Positive = right (clockwise), negative = left (counter-clockwise). Written as `---` when there is no turn. |
| HEADING | Compass bearing of the subsequent straight leg, 0 to 360 degrees. 0 = North, 90 = East, 180 = South, 270 = West. |
| DIR | N, NE, E, SE, S, SW, W, or NW. Divide the full circle into eight sectors of 45 degrees each. |
| DIST | Length of the straight segment in metres, to one decimal place. |

<div style="margin: 1.5rem 0;"></div>

## Implementation Requirements

- Write your solution entirely in standard C. No C++ features or non-standard extensions.
- Use only the C standard library. No external libraries of any kind.
- Your program must read exactly the two input files provided and write exactly one output file. Any extra steps you take for your own convenience are fine, and you have to mention them in your approach (`explanation.txt`).
- The program must compile without errors or warnings.
- If a file cannot be opened or any error, print the error message and exit properly.
- Disciplined, well-structured code will be looked upon favourably.
- Use flat-earth approximation for latitude and longitude.
  (One degree of latitude corresponds to approximately `111320` meters.
  One degree of longitude corresponds to approximately `105241` meters.)
- The files submitted should have the exact same names as mentioned below.

## Deliverables

Submit exactly three files:

| File | Description |
|---|---|
| `solution_path.c` | Your complete C source file. Must compile and run standalone. Include your name and a brief description at the top as a comment block. |
| `path_travel.txt` | The output file produced by running your program on the provided input files. Must match the reference format exactly. |
| `explanation.txt` | A thorough plain-text explanation of your approach, logic, and steps you took to solve the task. |

## Holmes's Final Word

He was already at the window, watching the street below, when he spoke.

"Drake is clever. Clever enough to pick a route with a tunnel in it, knowing it would break most tracking attempts clean in two. But clever men make a consistent error, Watson. They assume that because one instrument fails, the picture fails with it." A pause. "It does not. Not if you are paying attention."

He turned from the window.

"The satellite goes dark. The noisy little gyroscope carries on regardless. You know which one to lean on and you know how much to trust the other. The route is there. Reconstruct it. Every turn. Every straight. Every metre."

"And Drake?"

Holmes allowed himself the thinnest of smiles.

"Leave Drake to me."

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://forms.gle/Vh3xr3RRdHfbqfSy7" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
