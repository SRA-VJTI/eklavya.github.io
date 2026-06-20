---
layout: page
title: McQueen
description: Transform an off-the-shelf RC car into a self-driving vehicle using a single camera, imitation learning, and a distilled neural network running in real time on edge hardware.
importance: 17
---

---

| Project Domains                                                    | Mentors                          |
|--------------------------------------------------------------------|----------------------------------|
| Robotics, Autonomous Driving, Imitation Learning, Embedded Systems | Vrushtee Gaikwad, Sahil Apage   |

---

### Project Description

This project's goal is taking an off the shelf RC car and building it into a self-driving vehicle that learns to drive from a single camera bringing the end to end approach proven on full size cars down to a small vehicle whose entire control stack we build and own inspired by modern full self-driving (FSD) paradigms.

The system relies on an onboard edge computer acting as a centralized electronic control unit (ECU) that processes raw camera feeds through a deep neural network to directly output control commands to steering and throttle, trained on demonstrations we record by driving the car manually and over remote teleoperation.

To fit a strong policy on small silicon, a large model trained off board is distilled into a small student network that runs in real time on the car.

The final output is a single camera RC car that drives a real route autonomously, accepts remote teleop takeover — a self-built autonomy ECU that could drop into any small vehicle.

---

### Resources

[Learning to Drive from a World Model](https://blog.comma.ai/mlsim/)<br>
[simcity](https://x.com/simcity99)<br>
[openpilot](https://github.com/commaai/openpilot)<br>
[commavq](https://github.com/commaai/commavq)<br>
[ecu](https://github.com/vapor-autos/ecu)<br>
[The first robotics agent fully trained in a learned simulation](https://blog.comma.ai/011release/)<br>

---
