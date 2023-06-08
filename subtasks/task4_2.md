---
layout: page
title: PCB Designing
img: assets/img/PCB.jpg
importance: 5
permalink: /tasks/task4_3
---

## Description

Have you ever heard of Automatic Headlights? It basically means that the headlights will turn ON when its dark and during day-time, the headlights will turn OFF. This serves as a feature in many luxurious cars. In this problem statement, you have to design one!

## Problem Statement

In this task, you have to design a PCB for Automatic Headlights which means that the lights will turn ON when its dark and vice versa. For this, you need few components like:

1. **LDR (Light Dependent Resistor):** An LDR is a component that has a (variable) resistance that changes with the light intensity that falls upon it. In case of dark environment, the resistance value becomes very high and vice versa.
2. **LM358 (Comparators):** From the name itself it is clear that this is an Op-Amp that compares two voltages, one is a SET voltage and other one is the incoming voltage (through LDR) and correspondingly generate a HIGH or LOW output. In case of HIGH condition, the LED/ headlight shall glow. Read more about the **IC LM358** if it is still not clear.

**BLOCK DIAGRAM AND CIRCUIT DIAGRAM ARE GIVEN BELOW:**

{% include figure.html path="assets/img/block_diagram.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}

{% include figure.html path="assets/img/circuit_diagram.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}

## Submission Instructions: (KiCAD software is recommended)

```
1. Submit a PDF that includes the snapshots of the following things:
	- Schematic Diagram
	- PCB Layout (Both front layer and back layer)
2. Along with the PDF, submit a zip folder that contains all the KiCAD files and rename it as your team name and task number. Eg. "Task_4_TEAM_ABCD"
3. You have to import the component symbols and footprints from EDA Websites given below. For now, we have provided you the the folder which includes all the required symbols and footprints of the components. (Refer Playlist for tutorial)
```

## Resources:

1. KiCAD Installations: (Follow all the steps carefully)

   - [Linux](https://www.kicad.org/download/linux/)
   - [Windows](https://www.kicad.org/download/windows/)
   - [MacOS](https://www.kicad.org/download/macos/)

2. **KiCAD Playlist:**
   [Click here](https://www.youtube.com/playlist?list=PL3bNyZYHcRSUhUXUt51W6nKvxx2ORvUQB)

3. **Download the library from here (For Symbols and Footprints):**
   [Click here](https://drive.google.com/drive/folders/1WAuIDvje05pGdIHXOORPXT2VOyxn8W1j)

4. **EDA Tools for importing components: (Not Required for this task)**
   - [SnapEDA](https://www.snapeda.com/)
   - [Component Search Engine](https://componentsearchengine.com/)
