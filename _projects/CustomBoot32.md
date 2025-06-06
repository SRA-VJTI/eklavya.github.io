---
layout: page
title: CustomBoot-32 

description: A compact STM32 + ESP32 board that stores multiple firmware images and updates itself over Wi-Fi.  
---

---

| Project Domains                                       |Mentors | Project Difficulty |
|-------------------------------------------------------|-------|------------|
| Embedded Systems, Bootloaders, OTA, PCB Design, UART  | Pritvi, Shaunak |Hard               |

---

### Project Description

* Pair an **STM32F103 “Blue Pill”** with an **ESP32-WROOM-32D (16 MB)** on a custom PCB.  
* ESP32 runs a web-server, saves uploaded binaries to LittleFS, and streams them over chunked UART with CRC checks.  
* STM32 hosts a dual-image bootloader: it verifies each image, rolls back on failure, and lets a 2-position switch pick which firmware to boot.  
* Result: a plug-and-play dev board that can flash, select, and update its own firmware wirelessly—no USB cables or ST-Link required.

---

### Resources

[STM32CubeIDE Quick-Start](https://youtube.com/playlist?list=PLNyfXcjhOAwO5HNTKpZPsqBhelLF2rWQx)<br>
[UART Basics – Phil’s Lab](https://www.youtube.com/watch?v=15zXAhsVx0k)<br>
[PCB Design Crash Course](https://youtube.com/playlist?list=PLEBQazB0HUyR24ckSZ5u05TZHV9khgA1O)<br>