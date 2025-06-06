---
layout: page
title: FPGA-Based Tetris

description: Build a tiny FPGA console that plays Tetris in real-time, rendered entirely in Verilog on a BeagleVFire.  
---

---

| Project Domains                                       |Mentors    | Project Difficulty |
|-------------------------------------------------------|----|--------------------|
| FPGA, Digital Design, Embedded Graphics, UART I/O     |Suchit, Sarvesh    | Medium             |

---

### Project Description

Turn a BeagleVFire into a one-game console:  
* Re-use an existing Verilog “VideoCard” to push pixels over HDMI.  
* Write the entire Tetris game—state machine, collision logic, score—with pure Verilog.  
* Read player input via simple GPIO buttons or a UART-connected keyboard.  
* If logic resources run tight, add on-chip RAM for the framebuffer.  

By the end you’ll have a self-contained bitstream that boots straight into Tetris and shows real-time graphics on any HDMI display.

---

### Resources

* [FPGA Tetris (YouTube talk)](https://youtu.be/8OK8_tHeCIA?si=YbuLPEYIBgEx-y8m)  
* [GameBub FPGA Handheld Blog](https://eli.lipsitz.net/posts/introducing-gamebub/)  
