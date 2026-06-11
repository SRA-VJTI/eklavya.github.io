---
layout: page
title: Task 3
description: The Case of the Phantom Machine
importance: 4
category: Mathematics & Control Systems
---

<style>
/* Mobile responsive */
@media (max-width: 768px) {
  iframe {
    max-width: 100%;
    height: auto !important;
  }
}
</style>

**Points: <span style="color: #D72B2B;">50</span>**

# The Case of the Phantom Machine

<div style="margin: 1rem 0;"></div>

### Prologue

The November fog had settled thick upon London, swallowing the gas lamps of Baker Street in its grey embrace, when a hansom cab clattered to a halt before No. 221B. I had scarcely set down my evening paper when Mrs. Hudson appeared at the door, her face pale with concern.

<div style="margin: 1rem 0;"></div>

"A telegram, Mr. Holmes. Marked most urgent, from Scotland Yard."

<div style="margin: 1rem 0;"></div>

Holmes rose from his chair by the fire, his grey eyes already sharpening with that peculiar intensity I had come to know so well. He tore open the envelope and read aloud:

<div style="margin: 1rem 0;"></div>

"UNDERGROUND LABORATORY BREACHED STOP EXPERIMENTAL VEHICLE ESCAPED STOP MORIARTY'S HAND SUSPECTED STOP MACHINE HEADING NORTH FROM COORDINATES NEAR BAKER STREET STOP CAPABLE OF GROUND AND AERIAL OPERATION STOP MUST BE INTERCEPTED BEFORE IT VANISHES INTO THE CITY STOP COME AT ONCE STOP LESTRADE"

<div style="margin: 1rem 0;"></div>

Holmes was already reaching for his coat. "Watson, fetch your revolver. We pursue no ordinary quarry tonight."

<div style="margin: 1rem 0;"></div>

Within the hour, we found ourselves in a subterranean chamber beneath an abandoned warehouse, where Inspector Lestrade stood amid the wreckage of what had clearly been a sophisticated engineering works. Scattered across workbenches lay blueprints, canisters of fuel, and the remnants of mechanical components bearing the unmistakable precision of Continental manufacture.

<div style="margin: 1rem 0;"></div>

"The machine," Lestrade explained, mopping his brow, "was designed by engineers in Moriarty's employ. A multi-functional vehicle, Mr. Holmes, capable of traversing any terrain on wheels, and then, by some diabolical mechanism, transforming into an autonomous aerial system. A drone, scientists call it."

<iframe src="https://drive.google.com/file/d/13wjPagXmFJLEK1254PZx_wuId4Q6U4fQ/preview" width="300" height="200" allow="autoplay"></iframe>

Holmes knelt beside a sheaf of documents, his long fingers tracing columns of figures. "The control system data," he murmured. "They have left behind the mathematical principles governing the machine's behaviour. Careless, or perhaps intentional, a challenge laid at my feet."

<div style="margin: 1rem 0;"></div>

He rose, fixing me with his penetrating gaze.

<div style="margin: 1rem 0;"></div>

"Watson, we must reconstruct this machine's journey from first principles. Only by understanding its motion can we predict where it will emerge, and intercept it before Professor Moriarty's agents reclaim their prize."

<div style="margin: 1.5rem 0;"></div>

### The Assignment

You are tasked with analysing the trajectory and control systems of Professor Moriarty's escaped mechanical vehicle, using the engineering data recovered from the underground laboratory.

The pursuit comprises two distinct phases:

<div style="margin: 1.5rem 0;"></div>

### Part I: The Ground Pursuit - Kinematic Analysis of the Escaping Vehicle

According to the intelligence gathered by Holmes's network of street informants, the mechanical vehicle initiated its escape from a fixed position, designated as Point A, located in the underground chamber. From there, it travelled in a perfectly straight line along a cobblestone passage leading toward the surface, covering a total distance of 1000 metres before emerging into the London streets.

<div style="margin: 1rem 0;"></div>

The vehicle's onboard chronometer recorded its position at one-second intervals, providing a complete sampling of its motion throughout the escape.

<div style="margin: 1rem 0;"></div>

Your task is as follows:

Using the kinematic data encoded in the machine's control system along with PID gain values, determine the instantaneous speed of the vehicle at the following distances from Point A:

- 0 metres (at the moment of departure)
- 200 metres
- 500 metres
- 700 metres
- 1000 metres (at the moment of emergence)

<div style="margin: 1rem 0;"></div>

Furthermore, you must demonstrate through calculation that the vehicle's speed at the 1000-metre mark was precisely 44 metres per second, confirming the testimony of a crossing-sweeper who reported "a blur of brass and steam, faster than any hansom I ever saw."

<iframe src="https://drive.google.com/file/d/1qer_1Dj0CfUMAV8mhnKFEgdGT10Jods3/preview" width="500" height="300" allow="autoplay"></iframe>

<div style="margin: 1.5rem 0;"></div>

### Part II: The Aerial Transformation - Hovering Altitude Control Analysis

<div style="margin: 1rem 0;"></div>

Upon reaching the 1000-metre threshold and recognising that it had crossed its programmed setpoint, the machine initiated an emergency deceleration protocol. It applied a constant braking acceleration of 4.4 m/s² for precisely 10 seconds, bringing itself to a complete halt upon the surface.

<div style="margin: 1rem 0;"></div>

At that moment, the vehicle underwent its remarkable transformation: wheels retracting, rotors deploying, the machine rising from the cobblestones as an autonomous drone, ascending toward the rooftops of London.

<div style="margin: 1rem 0;"></div>

The drone's objective, as decoded from the recovered documents, was to achieve and maintain a steady hover at an altitude of 500 metres above ground level, presumably to rendezvous with an accomplice aboard an airship.

<div style="margin: 1rem 0;"></div>

The altitude control system employs a Proportional-Integral-Derivative (PID) controller, with gain values designated in the recovered schematics as Kp, Ki, and Kd.

<div style="margin: 1rem 0;"></div>

Your task is as follows:

Using the PID control parameters provided, calculate the motor speed required to lift and stabilise the drone at the following altitudes:

- 0 metres (ground level, at the moment of lift-off)
- 100 metres
- 250 metres
- 400 metres
- 500 metres (the target hovering altitude)

<div style="margin: 1rem 0;"></div>

You must determine the final motor speed, expressed in revolutions per minute (RPM), required to maintain steady hover at the 500-metre altitude, demonstrating that the control system achieves stable equilibrium at this height.

<iframe src="https://drive.google.com/file/d/1-rqYvJrgc-v1_RYsMOrG55rmh4kCkmgZ/preview" width="300" height="300" allow="autoplay"></iframe>

<div style="margin: 1.5rem 0;"></div>

### Part III: Total Displacement - The Complete Journey

Finally, Holmes requires a complete accounting of the machine's displacement from its origin to its final hovering position.

<div style="margin: 1.5rem 0;"></div>

### Holmes's Directive

Holmes turned from the window, where he had been observing the fog-shrouded rooftops.

"A case is only as strong as its documentation, Watson. I will not accept vague approximations or incomplete reasoning. Every calculation must be shown. Every assumption stated. The mathematics must be as precise as the gears of a Swiss chronometer, for it may one day be presented as evidence before a court of law, or before minds far more critical than Lestrade's."

Your analysis must reflect:

- Complete derivation of velocity at each specified distance during ground travel
- Clear demonstration that the terminal ground speed equals 44 m/s
- Proper application of PID control theory to the altitude stabilisation problem
- Accurate calculation of motor speeds at each altitude checkpoint
- Final motor RPM required for stable hover at 500 metres
- Total displacement from origin to final hovering position

<div style="margin: 1.5rem 0;"></div>

### Resources

The following references have been left by Holmes upon the mantelpiece at Baker Street for your study:

- [Reference 1](https://youtu.be/XfAt6hNV8XM?si=LiXWcoPInHj4QftU)
- [Reference 2](https://youtu.be/UR0hOmjaHp0?si=cuD5Q7g9nLl8yS_y)
- [Reference 3](https://youtu.be/tFVAaUcOm4I?si=K9dPfk5zk2JCsi0_)

<div style="margin: 1.5rem 0;"></div>

### Closing Note from Holmes

The detective settled into his chair, steepling his fingers beneath his chin.

"The machine has fled into the night, Watson, but mathematics does not lie, and physics cannot be bribed. Every metre it travels, every rotation of its motors, obeys laws as immutable as those that govern the stars. You have the data. You have the principles. The question that remains is whether you possess the analytical rigour to reconstruct its path, and the precision to intercept it before it vanishes forever into Moriarty's web."

<div style="margin: 1.5rem 0;"></div>

**Deliverables**

Handwritten report in form of pdf containing tabular solution (for part 1 and part 2) and final solved solution (for part 3) should be submitted

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://forms.gle/V6sFHE56n4BwcBJN9" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
