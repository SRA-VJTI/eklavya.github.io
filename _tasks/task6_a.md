---
layout: page
title: Task 6A
description: Sherlock Holmes and the Broken Cipher Engine
importance: 7
parent: task6
category: Digital Design & Verilog
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

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}
</style>

**Points: <span style="color: #D72B2B;">150</span>**

# Sherlock Holmes and the Broken Cipher Engine

London, 1895.

<div style="margin: 1rem 0;"></div>

A secret transmission intended for the British government was intercepted by Professor Moriarty. Before he could fully decode the message, officers from Scotland Yard raided his hideout.

<div style="margin: 1rem 0;"></div>

Moriarty escaped.

<div style="margin: 1rem 0;"></div>

In his haste, he destroyed part of a mysterious machine called the Sequential Reconstruction Apparatus (<span style="color: #D72B2B;">SRA</span>)-a device believed to generate the pulse sequences required to decode encrypted messages.

The machine was recovered, but a critical section of its control logic is missing.

<div style="margin: 1rem 0;"></div>

Holmes believes that if the missing logic can be reconstructed, the machine will resume generating the correct pulse sequence, revealing:

- What message Moriarty was attempting to decode.
- Whether accomplices were involved.
- The location of Moriarty's next operation.

<div style="margin: 1rem 0;"></div>

Only fragments remain:

- A simulation testbench recovered from the workshop.
- An incomplete Verilog design.
- A reference waveform found in Moriarty's notebook.

Holmes has asked you to complete the missing logic and restore the machine.

<div style="margin: 1.5rem 0;"></div>

### Objective

Complete the missing portion of the Verilog code so that the generated waveform matches the expected output exactly.

You are provided:

- The testbench
- The incomplete Verilog module
- The expected waveform image

Run the design on EDA Playground and enable EPWave to inspect the generated waveform.

The goal is to make the waveform produced by your design match the reference waveform.

<div style="margin: 1.5rem 0;"></div>

### Instructions

**Step 1** - Open the provided code on EDA Playground.

**Step 2** - Paste the testbench and the incomplete module.

**Step 3** - Enable: Open EPWave after run

**Step 4** - Run the simulation.

**Step 5** - Analyze the waveform and determine the missing logic responsible for generating the pulse sequence.

**Step 6** - Modify only the missing logic section until the waveform matches the expected output.

<div style="margin: 1.5rem 0;"></div>

### Files Provided

| File | Link |
|---|---|
| Testbench.v | [Download](https://drive.google.com/file/d/1WXBGBP0zPG8_EEQYvXcDjX4K_b4Ifaqu/view?usp=drive_link) |
| SRA.v | [Download](https://drive.google.com/file/d/1T1-AR8RkHmgy8TIGVoOlu31F_JfsPFne/view?usp=drive_link) |
| Expected Waveform Image | [View](https://drive.google.com/file/d/11xJiP-vXJ1fIPRIjTf0-lx_YfnhckYvD/view?usp=drive_link) |

<div style="margin: 1.5rem 0;"></div>

### Sherlock's Notes

Holmes recovered the following observations from Moriarty's laboratory:

- The internal counter advances from 0 to 22.
- Different counter values generate different pulse patterns.
- The pulse sequence appears to form symbols used by the decryption engine.
- After counter value 22, the sequence repeats.
- The expected waveform contains all the clues needed to reconstruct the missing logic.

<div style="margin: 1.5rem 0;"></div>

### Resources for Holmes' Apprentices

- [Verilog Tutorial Playlist](https://www.youtube.com/playlist?list=PL_3xKnVkfI2itQhCyfnamNYSCHd2KHi4k) - Learn the fundamentals of Verilog
- [HDLBits - Step One](https://hdlbits.01xz.net/wiki/Step_one) - Practice interactive Verilog problems
- [ChipVerify Verilog Tutorials](https://chipverify.com/tutorials/verilog) - Detailed Verilog explanations and examples

<div style="margin: 1.5rem 0;"></div>

### Final Message from Sherlock Holmes

"Restore the machine so that the simulation waveform matches the reference waveform."

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScMFQf8h6MhfOhjfRRevVWSUabyna3j4YpvaptTGEdPKzMC4A/viewform" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
