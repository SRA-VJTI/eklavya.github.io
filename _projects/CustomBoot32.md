---
layout: page
title: CustomBoot-32 

description: STM32+ESP32 Development Board with Custom Bootloader and OTA Support
---

---

| Project Domains                                       |Mentors | Project Difficulty |
|-------------------------------------------------------|-------|------------|
| Embedded C, PCB Designing, Bootloaders, OTA, PCB Design, UART  | Prithvi, Vishal , Shaunak |Hard               |

---

### Project Description

* Pair an **STM32F103 “Blue Pill”** with an **ESP32-WROOM-32D (16 MB)** on a custom PCB.  
* ESP32 runs a web-server, saves uploaded binaries to LittleFS, and streams them over chunked UART with CRC checks.  
* STM32 hosts a dual-image bootloader: it verifies each image, rolls back on failure, and lets a 2-position switch pick which firmware to boot.  
* Result: a plug-and-play dev board that can flash, select, and update its own firmware wirelessly—no USB cables or ST-Link required.

---

### Resources

[Reference Project](https://github.com/SurajSonawane2415/USB-OTA-Bootloader-Integrated-Custom-STM-Board)<br>
[BootLoader](https://embeddedinventor.com/embedded-bootloader-and-booting-process-explained/)<br>
[OTA](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/system/esp_https_ota.html)<br>
[STM32](https://youtu.be/EaZuKRSvwdo?si=apB8K7ngO-cd8fAq)<br>