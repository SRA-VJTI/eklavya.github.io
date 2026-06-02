---
layout: page
title: AstraRTOS
description: A Real Time Operating System built from scratch for ARM Cortex-M — write the missing kernel layers, then port Wall-E's self-balancing onto an STM32 running Astra.
importance: 3
---

---

| Project Domains                                          | Mentors                       |
|----------------------------------------------------------|-------------------------------|
| Real-Time Operating Systems, Low Level Embedded Systems  | Vedant Malkar, Paarth Shirsat |

---

### Project Description

Every embedded device, from flight controllers and Mars rovers down to a microwave, depends on something deciding which task runs when, who gets the CPU and how interrupts are handled — that is the job of an RTOS (Real Time Operating System).

AstraRTOS is a Real Time Operating System being built from scratch for ARM Cortex-M. The kernel currently supports tasks with priority-based preemptive scheduling, recursive mutexes with priority inheritance, counting semaphores, dynamic memory allocation, and basic peripheral drivers (GPIO, UART) — enough to run multi-task applications on the STM32 Discovery Board.

You will be writing the missing layers such as software timers, stack overflow detection, power management and other features making Astra a full-fledged RTOS. Once the kernel is complete, we will port Wall-E's self-balancing onto STM32 using Astra, which means rewriting all required hardware drivers, porting the control loop and building a simple chassis for the bot.

And the best part is AstraRTOS does not end with Eklavya. RTOSes like Zephyr and FreeRTOS are hundreds of thousands of lines of code, with active communities, drivers for hundreds of boards and decades of work. Astra is at the very start of its journey — after Eklavya you become a maintainer adding new features, new boards and maybe even releasing it to the public in the future.

---

### Resources

[YouTube Playlist — Modern Embedded Systems Programming (builds an RTOS from scratch on Cortex-M)](https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM)<br>
[AstraRTOS GitHub](https://github.com/vedantmalkar/AstraRTOS)<br>

Concepts to read up on before Round 1 & 2: Dynamic Memory Allocation, Task Control Block, Mutexes & Semaphores, and **Software Timers** (important).<br>

---
