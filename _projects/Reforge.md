---
layout: page
title: Reforge
description: Design and assemble your own FPGA development board combining an ESP32 and iCE40 FPGA on a custom KiCad PCB, with SPI communication and Verilog-based design loading.
importance: 4
---

---

| Project Domains                          | Mentors                        |
|------------------------------------------|--------------------------------|
| Embedded Systems, FPGA, PCB Design       | Archit More, Harshit Bhalani  |

---

### Project Description

CPUs run software on fixed hardware. FPGAs are different: instead of writing a program for existing hardware, you can change the hardware itself by loading a new design onto the chip. This makes FPGAs useful when you need hardware tailored to a specific task.

In Reforge, you will build your own FPGA development board by designing a custom PCB that combines an ESP32 and an iCE40 FPGA. The ESP32 will store FPGA designs and load them onto the FPGA whenever needed. You will also make the two chips communicate using SPI, allowing the ESP32 to send data and control the FPGA.

Along the way, you'll learn the basics of Verilog, design a PCB in KiCad, understand how FPGAs are configured, and build the software needed to manage FPGA designs from the ESP32.

The final result is a fully functional FPGA devkit designed and assembled by you. More importantly, you'll gain a practical understanding of how microcontrollers and FPGAs work together in real embedded systems, not by using an existing board, but by building one from scratch.

---

### Resources

[Kicad playlist](https://www.youtube.com/playlist?list=PLEBQazB0HUyQ5YJSdCBb79orXaR3Uk5vm)<br>
[Filesystem](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/file-system-considerations.html)<br>
[SPI explanation](https://youtu.be/MCi7dCBhVpQ?si=dbMR7HTboAvRNwoI)<br>
[Project inspired from](https://vicharak-in.github.io/shrike/index.html)<br>

---
