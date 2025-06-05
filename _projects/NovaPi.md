---
layout: page
title: NovaPI

description: Bare-metal OS on Raspberry Pi with HDMI and a Pong game from scratch.
---

---

| Project Domains                                               | Mentors                                 | Project Difficulty |
|---------------------------------------------------------------|-----------------------------------------|--------------------|
| Bare-metal, Drivers, ARM Assembly, Hardware Abstraction Layer | Shaunak Datar, Aditya Joil              | Hard             |

---

### Project Description

Focuses on building a bare-metal operating system and hardware abstraction layer (HAL) for Raspberry Pi 4B/5 without relying on existing OS kernels.<br>
Initial work involves setting up bootloaders, managing memory, and writing low-level drivers from scratch.<br>
Implements core features like UART and SPI communication protocols, interrupt handling, and support for timers and GPIOs.<br>
Adds audio output using Pulse Code Modulation (PCM) and gradually builds up to HDMI video output.<br>
All hardware interfacing will be handled through the custom HAL, offering a clear abstraction between kernel code and peripherals.<br>
With HDMI output in place, the final goal is to build a simple Pong game that runs directly on the custom OS with no external libraries.<br>
Offers deep insights into low-level systems programming, embedded graphics, and peripheral interfacing on modern ARM platforms.

---

### Resources
[RasPi-OS](https://github.com/s-matyukevich/raspberry-pi-os)<br>
[Assembly Language](https://youtu.be/gfmRrPjnEw4?si=flEVGXRJBXGRP29f)<br>
[BareMetal Programming](https://youtu.be/mshVdGlGwBs?si=KgdI0XSvzd5yrXnl)<br>
