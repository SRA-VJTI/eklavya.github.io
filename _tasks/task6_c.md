---
layout: page
title: Task 6C
description: The Case of the Four Signals
importance: 7
parent: task6
category: Circuit Design & KiCAD
---

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: left;
}

table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

table tr:nth-child(even) {
  background-color: #fafafa;
}

.resources-list a {
  color: #D72B2B;
  text-decoration: underline;
  font-weight: 500;
}

.resources-list a:hover {
  color: #a01f1f;
}
</style>

**Points: <span style="color: #D72B2B;">150</span>**

# The Case of the Four Signals

<div style="margin: 1rem 0;"></div>

### Prologue

It was a dreary Thursday evening at 221B Baker Street when Inspector Lestrade arrived, visibly flustered, clutching a leather satchel. He laid before Holmes the remnants of a curious apparatus, a partially burnt circuit board recovered from the den of Professor Alistair Voss, a disgraced electrical engineer suspected of orchestrating a string of telecommunications frauds across London.

<div style="margin: 1rem 0;"></div>

"The device," Holmes said, lifting a fragment to the gaslight, "was a signal routing machine. Voss was feeding four distinct analog signals into a selector, intercepting whichever channel he wished at the turn of a jumper. Elegant. Criminal, but elegant."

<div style="margin: 1rem 0;"></div>

He turned to you, eyes sharp.

"Scotland Yard needs this device reconstructed, fully documented, fully functional. Can you do it?"

<div style="margin: 1rem 0;"></div>

### The Assignment

You are tasked with reconstructing Professor Voss's signal routing apparatus from first principles.

The device comprised two sections:

<div style="margin: 1rem 0;"></div>

### Part I: The Four Signal Sources

Voss's machine generated four analog signals, each processed by a dedicated circuit built around an operational amplifier. You must implement all four independently:

| Signal | Circuit |
|---|---|
| Signal A | Summing Amplifier: adds two input voltages |
| Signal B | Difference Amplifier: subtracts one input from another |
| Signal C | Ideal Integrator: outputs the time-integral of an input |
| Signal D | Ideal Differentiator: outputs the rate of change of an input |

All four circuits must be designed independently, each as a self-contained op-amp stage.

The output equations for each circuit, along with the component value constraints, are detailed in the attached reference sheet. Use these to determine appropriate resistor and capacitor values for your design.

<iframe src="https://drive.google.com/file/d/1NHlrR3VkHUWTf6bwV5InIIBhB3_AE1q8/preview" width="500" height="500" allow="autoplay"></iframe>

<div style="margin: 1rem 0;"></div>

### Part II: The Selector Mechanism

The outputs of all four circuits fed into a 4:1 multiplexer, Voss's method of switching between intercepted channels at will.

Holmes's analysis of the charred remains revealed that Voss had built his selector to handle the analog nature of the signals cleanly, routing waveforms without distortion or loss. The select lines, Voss's channel keys, were implemented using push buttons, allowing silent toggling between the four feeds at will.

You must do the same. The 4:1 analog multiplexer must be constructed to faithfully pass the op-amp outputs, with the select lines controlled by push buttons.

<div style="margin: 1rem 0;"></div>

### Holmes's Directive

"A case is only as strong as its documentation, Watson. I will not accept loose wiring and vague labels. Every component named. Every signal traced. The schematic drawn cleanly in KiCAD, for it may one day be presented as evidence."

Your schematic must reflect:

- All required components with correct symbols
- Proper interconnection of op-amp outputs to the MUX input
- Clear and correct labeling of all components and signals

You may use the following ICs or any other as per your preference:
- LM741, CD4052B

<div style="margin: 1rem 0;"></div>

### Resources

**Op Amp:**
- [Introduction to Operational Amplifier: Characteristics of Ideal Op-Amp](https://www.youtube.com/watch?v=QiJYv4hHcLY&t=10s)
- [Adder](https://www.youtube.com/watch?v=p4FQyOwjhLA)
- [Subtractor](https://www.youtube.com/watch?v=ltVspUteuuI)
- [Integrator](https://www.youtube.com/watch?v=OPvs7A554Rw)
- [Differentiator](https://www.youtube.com/watch?v=aU24RWIgJVs&t=282s)

**MUX:**
- [4:1 Multiplexer](https://www.youtube.com/watch?v=aQlF-9i3fAA&t=372s)

**KiCAD:**
- [KiCAD Tutorial Playlist](https://youtube.com/playlist?list=PLn6004q9oeqGl91KifK6xHGuqvXGb374G&si=lC6g04QjkYcJt8Uo)

<div style="margin: 1rem 0;"></div>

### Closing Note from Holmes

"You have all the clues. The question is whether you have the intellect to assemble them."

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://forms.gle/9SESzEGrNwG6FLLz8" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
