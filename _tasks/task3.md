---
layout: page
title: Task 3
description: The Descent protocol
importance: 4
Category: Mathematics
---

**Points for this task: 25**

# The Descent Protocol

## Premise

You’re a companion of Han Solo, the Millennium Falcon took a hit during a short battle near the ruins of a forgotten Sith outpost orbiting a rogue planet. While escaping, you made the dumb call to jump into an uncharted gravity rift. Now you're trapped in what appears to be a vertical gravity tunnel, the data does not match anything you seen before. Gravity doesn’t pull in one direction. It changes with **time**. Your sensors spit out a equation:

$$
g(y) = 9.8 \cos(2t)
$$

The ship’s boosters are offline, and Chewie’s unconscious. Han is piloting manually, he needs your help in finding the trajectory.  
Suddenly, your mind is touched by a vision from Master Yoda.  
The vision says:

$$
\begin{aligned}
k_1 &= f(x, t) \\
k_2 &= f\left(x + \frac{h}{2} k_1, \; t + \frac{h}{2}\right) \\
k_3 &= f\left(x + \frac{h}{2} k_2, \; t + \frac{h}{2}\right) \\
k_4 &= f\left(x + h \cdot k_3, \; t + h\right) \\
x_{\text{next}} &= x + \frac{h}{6} \left(k_1 + 2k_2 + 2k_3 + k_4\right)
\end{aligned}
$$

System to save:

$$
x(t) = \begin{bmatrix}
y(t) \\
v(t)
\end{bmatrix}
$$

With dynamics as:

$$
\frac{d}{dt}x = f(x, t) = \begin{bmatrix}
v(t) \\
-9.8 \cos(2t)
\end{bmatrix}
$$

You realize you are 10 V (Vectras) above the abyss, the ship is **still** and each pulse of time is 0.1 seconds.

Use Yoda’s vision to calculate the state \( x \) at \( t = \{0.1\} \) seconds and save yourself.