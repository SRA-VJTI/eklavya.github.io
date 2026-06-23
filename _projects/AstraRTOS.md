---
layout: page
title: AstraRTOS
description: A Real Time Operating System built from scratch for ARM Cortex-M - write the missing kernel layers, then port Wall-E's self-balancing onto an STM32 running Astra.
importance: 3
---

---

| Project Domains                                          | Mentors                       |
|----------------------------------------------------------|-------------------------------|
| Real-Time Operating Systems, Low Level Embedded Systems  | Vedant Malkar, Paarth Shirsat, Mustafa |

---

### Project Description

Every embedded device, from flight controllers and Mars rovers down to a microwave, depends on something deciding which task runs when, who gets the CPU and how interrupts are handled that is the job of an RTOS - Real Time Operating System

AstraRTOS is a Real Time Operating System being built from scratch for ARM Cortex-M. The kernel currently supports tasks with priority-based preemptive scheduling, recursive mutexes with priority inheritance, counting semaphores, dynamic memory allocation, and basic peripheral drivers (GPIO, UART) enough to run multi-task applications on STM32 Discovery Board.

You will be writing the missing layers such as software timers, stack overflow detection, power management and other features making Astra a full-fledged RTOS. Once the kernel is complete, we will port Wall-E's self-balancing onto STM32 using Astra, which means rewriting all required hardware drivers, porting the control loop and building a simple chassis for the bot.

And the best part is AstraRTOS does not end with Eklavya. RTOSes like Zephyr and FreeRTOS are hundreds of thousands of lines of code, with active communities, drivers for hundreds of boards and decades of work. Astra is at the very start of its journey, after Eklavya you become a maintainer adding new features, new boards and maybe even releasing it to the public in the future.

---

### Resources

<p style="margin-bottom: 0.4rem;"><strong>Blogs to refer to:</strong></p>

<ul style="list-style: none; padding-left: 0.5rem; margin-top: 0; line-height: 1.9;">
  <li>&rsaquo;&nbsp; <a href="https://medium.com/@prashantajabe09/learning-rtos-part-2-b4eb1eb0f89c" target="_blank">Dynamic Memory Allocation</a></li>
  <li>&rsaquo;&nbsp; <a href="https://medium.com/@prashantajabe09/learning-rtos-part-3-b10b8d808e4a" target="_blank">Task Control Block</a></li>
  <li>&rsaquo;&nbsp; <a href="https://medium.com/@prashantajabe09/learning-rtos-part-8-082ffc48fca5" target="_blank">Mutexes &amp; Semaphores</a></li>
  <li>&rsaquo;&nbsp; <a href="https://medium.com/@prashantajabe09/learning-rtos-part-7-92e50ffb9363" target="_blank">Software Timers</a></li>
  <li>&rsaquo;&nbsp; <a href="https://medium.com/@prashantajabe09/learning-rtos-9-3bb4b9f33b40" target="_blank">Event Groups</a></li>
</ul>

<p style="line-height: 1.9; margin-top: 1rem;">
  <a href="https://www.youtube.com/playlist?list=PLP29wDx6QmW7HaCrRydOnxcy8QmW0SNdQ" target="_blank">Bare Metal Programming Series</a><br>
  <a href="https://github.com/vedantmalkar/AstraRTOS" target="_blank">AstraRTOS GitHub</a>
</p>

---
