---
layout: page
title: Synapse32

description: Design, implement, and verify a direct-mapped and set-associative cache subsystem for an existing RISC-V pipeline—boosting performance through reduced memory-access latency.  
---

---

| Project Domains                                    |Mentors | Project Difficulty |
|---------------------------------------------------|--|--------------------|
| Computer Architecture, Verilog, Cache Design, RTL |Shri Vishakh, Sujal  | Hard               |

---

### Project Description

This project guides you from basic digital-logic foundations to a fully integrated cache inside a RISC-V core.  
You’ll master Verilog for RTL design, explore cache theory (hits, misses, write policies, replacement strategies), and build two concrete implementations:

* **Direct-Mapped Cache** – write-back, write-allocate policy with tag/data arrays, valid bits, and a write-back engine.  
* **2-Way Set-Associative Cache** – adds an LRU replacement finite-state machine for improved miss behavior.

The final deliverable is a synthesizable cache subsystem plugged into the CPU pipeline, complete with test-benches, hit/miss statistics, and cycle-count comparisons against an uncached baseline.

---

### Resources


[Synapse32 RISC-V Core](https://github.com/SRA-VJTI/Synapse32.git) <br>
[Cornell CS3410 Cache Slides (2019)](https://www.cs.cornell.edu/courses/cs3410/2019sp/schedule/slides/12-caches-pre.pdf)<br>
[Onur Mutlu — Cache Design Talk](https://www.youtube.com/watch?v=EjjbMfHPkbg)<br>