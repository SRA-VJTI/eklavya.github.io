---
layout: page
title: PCB Designing
img: assets/img/PCB.jpg
importance: 5
permalink: /tasks/task4_3
---

## Description

  
PCB and circuit design is about how carefully we can plan electronic layouts and diagrams, focusing on where to put which electronic component and how to connect them to make devices work well. In any electronics/robotics project, the power circuitry is super important. It's like the manager, making sure the electricity flows smoothly and safely through the whole system.

## Problem Statement

In this task, you have to design a PCB with a power circuitry on it with specific requirements. The use case of the same is given below:

1)Screw Terminal with 24V as Input

2)Screw Terminal with 12V and 4A current rating as Output

3)Screw Terminal with 5V and 2A current rating as Output

4)Screw Terminal with 3.3V and 2A current rating as Output

Following components can be used to achieve the task:
1. **Buck Convertors:** Buck converters, also known as step-down converters, are a type of DC-DC power converter that efficiently reduces a higher input voltage to a lower output voltage. They operate by rapidly switching the input voltage on and off and then smoothing it to provide a stable output voltage, making them ideal for applications where energy efficiency and voltage regulation are crucial, such as in portable electronic devices and power supplies. Examples are LM2576,XL4015,XL4005,etc.

2. **Linear Regulators:** Linear regulators maintain stable voltage levels by dissipating excess voltage as heat. They are simple and inexpensive, suited for applications prioritizing low noise and simplicity over energy efficiency, such as audio amplifiers and sensor circuits. Example AMS1117,etc.

## Submission Instructions: (KiCAD software is recommended)

```
1. Submit a PDF that includes the snapshots of the following things:
	- Schematic Diagram
	- PCB Layout (Both front layer and back layer)
2. Along with the PDF, submit a zip folder that contains all the KiCAD files and rename it as your team name and task number. Eg. "Task_4_TEAM_ABCD"
3. You have to import the component symbols and footprints from EDA Websites given below. For now, we have provided you the the folder which includes some of the suggested components with their symbols & footprints.Although we encourgae you to use different components than mentioned below. (Refer Playlist for tutorial)
```

Task Submission Link: [Form](https://forms.gle/CW8H5cMQxCDznzcW7)


## Resources:

1. KiCAD Installations: (Follow all the steps carefully)

   - [Linux](https://www.kicad.org/download/linux/)
   - [Windows](https://www.kicad.org/download/windows/)
   - [MacOS](https://www.kicad.org/download/macos/)

2. **KiCAD Playlist:**
   [Click here](https://www.youtube.com/playlist?list=PL3bNyZYHcRSUhUXUt51W6nKvxx2ORvUQB)

3. **Download the Symbols and Footprints from here:**
   [Click here](https://drive.google.com/file/d/1jm2rXZxPTpAuMMbnAyWenM84ktNT7qWE/view)

4. **EDA Tools for importing components: (If using any other components than suggested above)**
   - [SnapEDA](https://www.snapeda.com/)
   - [Component Search Engine](https://componentsearchengine.com/)