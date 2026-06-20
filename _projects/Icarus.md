---
layout: page
title: Icarus
description: Develop custom quadcopter flight control firmware from scratch on the ESP32-S3, implementing IMU interfacing, sensor fusion, and PID control loops for stable flight.
importance: 6
---

---

| Project Domains                                      | Mentors         |
|------------------------------------------------------|-----------------|
| Embedded Systems, PCB Design, Control Theory, Firmware Development | Bhakti, Aryan |

---

### Project Description

Icarus is a project focused on developing custom flight control firmware from scratch for a quadcopter using the ESP32-S3.

The project begins with designing a custom flight controller PCB from scratch using the ESP32-S3. The board is intended for a tiny whoop drone using 8520 coreless motors. The hardware design includes sensor integration, power management and motor control circuitry.

The firmware is written in C/C++ to interface with an IMU and a barometer. It handles sensor data acquisition, processing and filtering. PID control loops are implemented to translate sensor data into precise motor speed adjustments for stable flight.

Alongside custom hardware and firmware development, the project includes practical flying experience using open-source flight stacks such as Betaflight and ArduPilot. This involves flashing, configuring, tuning and testing flight controllers.

The project combines embedded systems, PCB design, sensor fusion, control theory and firmware development to achieve stable flight on a fully custom flight controller, using 8520 coreless dc motor.


---

### Resources

[Blog](https://medium.com/@svirahonda/building-a-drone-flight-controller-from-scratch-a-software-engineers-guide-to-clean-c-644a2bd392c4)<br>
[ExpressLRS](https://github.com/ExpressLRS)<br>
[I Built a Drone Where the PCB Frame is the Circuit Board](https://www.hackster.io/sathishkumargkg/i-built-a-drone-where-the-pcb-frame-is-the-circuit-board-e5c182)<br>

---
