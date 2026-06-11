---
layout: page
title: Task 4
description: Lost in the ROS
importance: 5
category: ROS2 and Gazebo
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

**Points: <span style="color: #D72B2B;">150</span>**

# Lost in the ROS

<div style="margin: 1rem 0;"></div>

### PROLOGUE

The fog had settled thick over Baker Street when the first reports came in. Constables from three precincts. Frantic telegrams from the Ministry. And one very peculiar observation from a street sweeper on Aldgate : a wheeled machine, moving in perfect circles, obeying no human hand.

<div style="margin: 1rem 0;"></div>

No one knew where it had come from. No one could stop it. And no one , not Scotland Yard , not the Royal Society, not the bewildered engineers who claimed to have built it  could explain why it was still transmitting.

<div style="margin: 1rem 0;"></div>

"The machine is not broken, Watson. It is following instructions. Someone sent it those commands. The question is not what the rover is doing that much is obvious to anyone with eyes. The question is: who started it, and what exactly has it traced across this city?"

Sherlock Holmes, 221B Baker Street

<div style="margin: 1rem 0;"></div>

Holmes turned to you then, with that familiar look, half contempt, half challenge.

<div style="margin: 1rem 0;"></div>

"You. You'll play both roles in this investigation. First, the villain who set it loose. Then the detective's hand who must track it down. Can you manage that?"

<div style="margin: 1.5rem 0;"></div>

### PART I: THE VILLAIN'S GAMBIT

You are not the hero of this story. Not yet.

<div style="margin: 1rem 0;"></div>

The rover did not go rogue on its own. It received a command precise, deliberate, and signed by no one. Somewhere in the city, someone wrote a script that launched it into that relentless loop. A perfectly maintained circle. Over and over, like a confession hidden in plain sight.

<div style="margin: 1rem 0;"></div>

That someone was you.

<div style="margin: 1rem 0;"></div>

The Royal Engineering Society, with a trust they would later have abundant cause to regret, had thrown open the doors of their simulation chamber and surrendered everything besides: the rover's blueprints, the files that would summon it into being, the description of its every joint and limb, the rendered world through which it was to move, all of it placed in Watson's hands without a single question asked. What chamber it was, and by what name the engineers called it, they did not trouble to write down; a man clever enough to be trusted with the thing, they seemed to assume, was clever enough to know where he stood.

<div style="margin: 1rem 0;"></div>

**YOUR OBJECTIVE:**
Build the ROS workspace, source the environment, and launch the simulation. Spawn the rover. Then write the script that seals its fate. a velocity publisher that drives the rover in a clean, unbroken circle. Tune your linear and angular velocities. Make it geometric. Make it undeniable.

The rover must move. You must be the reason.

"Elementary geometry, really. A constant forward velocity paired with a constant angular turn rate. The machine will oblige , it always does."

<div style="margin: 1.5rem 0;"></div>

### PART II: THE DETECTIVE'S DEMAND

Three hours later. A knock at your door.

<div style="margin: 1rem 0;"></div>

You opened it to find a tall figure in a grey coat, pipe in hand, eyes that seemed to have already read every page of your life. He did not wait to be invited in.

<div style="margin: 1rem 0;"></div>

"Sit down. We haven't much time, and I have questions that only telemetry can answer."

<div style="margin: 1rem 0;"></div>

Holmes spread a map across your table. The rover's last known position was marked with a single red pin. But a pin means nothing as he needed the full path. Every coordinate. Every moment.

<div style="margin: 1rem 0;"></div>

"The rover is still transmitting , Its position. Every fraction of a second, it confesses exactly where it has been. I need you to listen. Write me a node that does nothing but listen  and remember."

<div style="margin: 1rem 0;"></div>

**YOUR OBJECTIVE:**

Write a ROS 2 node that reads the rover's live position data and prints its (x, y) coordinates to the terminal in real time. Let the path speak for itself a circle will look like a circle, a square will betray its corners. The rover cannot lie. Only you can misread it.

<div style="margin: 1rem 0;"></div>

"The coordinates don't lie, Watson. They never do. The rover has been leaving a confession on the floor of this city for the past three hours. You simply need to read it."

<div style="margin: 1rem 0;"></div>

<iframe src="https://drive.google.com/file/d/1p6Z0-1QBxQBbDacTjM4EtwSNHIoNhVIX/preview" width="300" height="300" allow="autoplay"></iframe>

<div style="margin: 1.5rem 0;"></div>

**Deliverables**

1) circle_driver.py  
(The velocity publisher that makes the rover circle)

<div style="margin: 0.5rem 0;"></div>

2) odom_printer_node.py  
(The odometry subscriber that prints (x, y) live)

<div style="margin: 0.5rem 0;"></div>

3) simulation & tracking.webm/mp4  
(A screen recording showing the launch of the publisher node, launching the simulation showing the rover circle, and then another terminal output showing the (x,y) values being printed on another terminal.)

<div style="margin: 1rem 0;"></div>

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://forms.gle/2g63hMn1tcnuoPrb7" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
