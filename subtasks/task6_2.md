---
layout: page
title: The Galactic Signal Jam
importance: 5
permalink: /tasks/task6_2
Category: PCB Designing
---

## Holoboard Mission Brief

Design and assemble a PCB fit for the Rebel Alliance's signal command unit — engineered using KiCad.

### The Mission Objective:

Craft a Holoboard (**PCB**) that performs the following core functions within the realm of analog circuitry:

- **Bandpass Filter Module:** Filters transmissions between **100 Hz and 500 Hz** — allowing only the desired frequencies to pass through the Force-field.  
- **Amplification Core:** Amplifies incoming signals with a total gain factor of **6x** — boosting weak transmissions from outer sectors.  
- **Threshold Detection Unit (Comparator):** Identifies signals exceeding **6V** and activates a **Status Beacon (LED)** — signaling the presence of high-power waves.

---

### System Requirements from the Jedi Council:

- **Input Signal Source:** A sine wave from a rebel transmitter, with a peak amplitude of **up to 2V**. Provide a **screw terminal** labeled `"INPUT"` for mission-critical interfacing.  
- **Power Protocols:** Deploy **±12V power rails** through dedicated **screw terminals** — one for the filter, another for the comparator. Keep their paths clear of interference.  
- **Board Constraints:** The holoboard must fit within the confines of **100mm × 80mm** — suitable for starfighter compartments.  
- **Assembly Considerations:** All components must be **suitable for hand-soldering by field engineers** (no droid-assisted assembly required).  
- **Labeling & Grounding:** Ensure all signals are **clearly marked via silkscreen**, and grounding follows **Imperial safety protocols** — preventing interference from the Dark Side (noise).

---

### Hint 1 (Resources)

To aid in your design journey, consult the following data scrolls and holograms from the Rebel Archives:

- [PCB Design Tutorial (YouTube Playlist)](https://youtube.com/playlist?list=PLEBQazB0HUyR24ckSZ5u05TZHV9khgA1O&si=jV_f-F7LT0rPMgh-)  
- [Operational Amplifier: Inverting Op Amp and The Concept of Virtual Ground in Op Amp](https://www.youtube.com/watch?v=9D06x5lF9sI)  
- [Operational Amplifier: Non-Inverting Op-Amp and Op-Amp as Buffer (Voltage Follower)](https://www.youtube.com/watch?v=C_2_zZr6gf0)  
- [Active Low Pass Filter and Active High Pass Filter Explained](https://www.youtube.com/watch?v=9OqI2Bz7WW8)

You are also encouraged to browse the holonet (internet) and consult other resources to deepen your understanding of filters and come up with the most efficient circuit designs.

---

### High Council’s Design Commandment

**The simpler the routes, the more the marks — and the smaller the PCB, the more the marks.**  
Let this guiding principle shape your layout, your traces, and your component placement.

---

Let the electrons flow through your design, young Padawan. And remember — **with great layout comes great signal integrity**.
