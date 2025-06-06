---
layout: page
title: Handheld Gaming Console 

description: Build a custom STM32-based board that runs a simple Snake-style game on an LCD, all written in bare-metal C with your own I²C drivers.  
---

---

| Project Domains                                             | Mentors | Project Difficulty |
|------------------------------------------------------------|--|--------------------|
| Embedded Systems, MCU Programming, PCB Design, I²C Drivers | Piyush, Shaurya, Vishal | Medium-Hard        |

---

### Project Description

Design a pocket-sized console from scratch:  
* Pick an STM32 MCU, flash a “blinky” to prove the toolchain.  
* Write drivers (no HAL) for GPIO, the I²C bus, and an MPU6050 IMU.  
* Lay out and assemble a simple PCB with the MCU, OLED, joystick, and buttons.  
* Draw pixels on the screen and code a lightweight Snake game that uses the joystick for control.  

By the end, you’ll hold a fully working handheld you built, soldered, and programmed yourself.

---

### Resources

[STM32CubeIDE Docs](https://www.st.com/en/development-tools/stm32cubeide.html)<br>
[I²C-Bus Protocol Guide](https://www.i2c-bus.org/)<br>
[TI Educational BoosterPack MKII](https://www.ti.com/tool/BOOSTXL-EDUMKII)<br>
[KiCad PCB Tutorial](https://kicad.org/help/)  