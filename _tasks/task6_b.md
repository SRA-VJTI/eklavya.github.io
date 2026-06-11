---
layout: page
title: Task 6B
description: The Cartesian Relay
importance: 7
parent: task6
category: Mechanical Design & CAD
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
</style>

**Points: <span style="color: #D72B2B;">150</span>**

# The Cartesian Relay

<div style="margin: 1rem 0;"></div>

### The Case

The Cartesian Robotics Laboratory of Whitechapel has engaged the services of Mr. Sherlock Holmes in a matter of considerable mechanical urgency. Their automated carriage, a precision arm used in the sequencing of evidence parcels has gone silent. The transmission that once drove it has been destroyed, and no documentation survives.

<div style="margin: 1rem 0;"></div>

The laboratory's lead engineer, a haggard man with chalk-dusted fingers, laid three facts before Holmes like clues at a crime scene:

"The motor turns at precisely 3000 revolutions per minute at full duty cycle. The carriage must travel approximately at 63 metres per minute. And the shafts — input and output must remain perfectly coaxial. The workspace permits nothing else."

<div style="margin: 1rem 0;"></div>

Holmes steepled his fingers. A long silence followed.

"You have given me three constraints," he said at last, "and three constraints, properly examined, admit precisely one solution. The transmission is not unknown to me. You need a fixed-ring planetary gear system. The geometry demands it. The coaxiality demands it. The reduction ratio demands it."

<div style="margin: 1rem 0;"></div>

He rose and moved to the blackboard.

"The pinion diameter is 20 millimetres with 2mm module and 20° of pressure angle. Elementary. Work backwards from the rack velocity and you will find the gear reduction ratio. The sun, the planets and the ring, their tooth counts are not arbitrary. They are the only logical deduction."

<div style="margin: 1.5rem 0;"></div>

### Your Commission

Watson, Scotland Yard cannot wait. You are to reconstruct this transmission from first principles and render it in full, functional CAD.

<div style="margin: 1rem 0;"></div>

Holmes has marked the method on the blackboard. The rest is your deduction.

"When you have eliminated the impossible," he said, pulling on his coat, "whatever transmission remains, however compact, however elegant, must be the truth."

"But Holmes," Watson protested, "where do we begin?"

Holmes paused at the door, silhouetted against the gaslight.

"Where any good investigation begins, Watson. With the numbers."

The game is afoot. The gears are waiting.

<div style="margin: 1.5rem 0;"></div>

### System Specifications

| Specification | Value |
|---|---|
| Motor max speed | 3000 rpm |
| Target rack speed | 63 m/min (63,000 mm/min) |
| Pinion pitch diameter | 20 mm |
| Shaft configuration | Coaxial input & output |
| Ring gear condition | Fixed (stationary) |
| Software | Onshape or Fusion 360 (with animation) |

<div style="margin: 1.5rem 0;"></div>

### What You Must Derive

1. **Required pinion speed** - Use the rack velocity equation to find what speed the pinion (and thus the carrier) must turn at.

2. **Gear reduction ratio** - Find the ratio between motor speed and required pinion speed. This is your planetary reduction target.

3. **Tooth counts** - Using the Willis equation with ring fixed, determine valid tooth counts for sun, planet, and ring gears. Satisfy the geometric constraint.

4. **Rack parameters** - Select a module, verify rack pitch, and confirm linear output matches the needs.

<div style="margin: 1.5rem 0;"></div>

### CAD Deliverables

<div style="margin: 1rem 0;"></div>

**For Onshape users:**
Provide edit access to the following emails: ashish422005@gmail.com, aayadav_b24@ee.vjti.ac.in, amvyapari_b24@ee.vjti.ac.in, ppdube_b24@et.vjti.ac.in and upload the animated GIF file on the drive.

<div style="margin: 1rem 0;"></div>

**For Fusion 360 users:**
Upload the .f3d (Fusion Archive File) with the animated GIF on the drive.

① **Planetary gear assembly** - Model sun, planet (×3), ring, and carrier. Ring must be grounded. All gear teeth must mesh correctly.

② **Rack and pinion stage** - Model a rack meshing with a 20 mm pitch diameter pinion. Rack must be tangent to the pinion pitch circle with correct module.

③ **Motion links** - Set up all joints and motion links: Sun→Carrier ratio, Sun→Planet (×3) ratio, and Rack & Pinion joint. Carrier output must drive the pinion.

④ **Animation** - Animate the full system driving the rack. All joints must move correctly and simultaneously.

<div style="margin: 1.5rem 0;"></div>

### Resources

- [What is a planetary gear system](https://youtu.be/ARd-Om2VyiE)
- [Spur gear basics for Onshape](https://youtu.be/AxCgO_eJocc)
- [Spur gear basics for Fusion](https://youtu.be/DdCMjsYvVTc?si=CFzg48jz01KEnm2H)
- [Rack and Pinion for Onshape](https://youtu.be/wLZq1ZXhPfE?si=o187wT3UHw_g1VDy)
- [Rack and Pinion for Fusion - Part 1](https://youtu.be/laBmk4ksrmg?si=DTrjtbIY2VUOLx5c)
- [Rack and Pinion for Fusion - Part 2](https://youtu.be/X3cJNxvROxs?si=tpIZpsfOwcH5a6Gc)
- [Rack and Pinion for Fusion - Part 3](https://youtu.be/X8SrkIw3who?si=Dx1GgiFIS_lY1BOJ)

<div style="margin: 1.5rem 0;"></div>

### Holmes's Final Words

"The transmission is not lost, Watson. It was never lost. It was merely waiting to be found by someone capable of understanding the language of gears."

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://forms.gle/oQJyQxxWnCRBBmdT6" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
