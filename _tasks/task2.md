---
layout: page
title: Task 2
description: The Case of the Vanishing Inventory
importance: 3
category: Electronics (Bill Of Materials)
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

/* Mobile responsive */
@media (max-width: 768px) {
  iframe {
    max-width: 100%;
    height: auto !important;
  }
}
</style>

**Points: <span style="color: #D72B2B;">50</span>**

# The Case of the Vanishing Inventory

A Record of the Investigations of Mr. Sherlock Holmes

<div style="margin: 1.5rem 0;"></div>

### Prologue

Holmes had not left Baker Street in three days. The sitting room was cluttered with circuit diagrams, vendor catalogues, and cold cups of tea when a frantic young engineer from Whitechapel burst through the door.

"Mr. Holmes, our manufacturing run is a disaster. Someone has handed us a completed schematic for a Handheld Gaming Console, but there is no procurement list, no part numbers, no vendors, nothing. The factory floor is idle and we cannot order a single component."

Holmes glanced at the schematic, rolled under the man's arm, then leaned back in his chair.

"The schematic tells us everything we need to know. Every component is there, waiting to be identified, sourced, and priced. What you need," he said, "is a Bill of Materials. And what I need is someone meticulous enough to produce one correctly."

He looked at you.

"That would be you."

<div style="margin: 1.5rem 0;"></div>

### The Assignment

You will be provided with the schematic of the Handheld Gaming Console. Your task is to produce a complete and accurate Bill of Materials for it.

<div style="margin: 1.5rem 0;"></div>

### The Procurement Rules

Holmes was particular about his sources. He kept a ranked list of trusted vendors, consulted strictly in order:

| Vendor Priority |
|---|
| Mouser |
| DigiKey |
| Robu.in |
| KTRON |
| Amazon India (last resort only) |

When selecting a component from any vendor, three conditions must be satisfied:

- The component must be in stock.
- The component must have the correct footprint and package as specified in the schematic. Verify against the datasheet.
- The component must be reasonably priced. Do not select an overpriced part when an equivalent is available.

<div style="margin: 1.5rem 0;"></div>

### The Evidence Manifest

Every component in the schematic, resistors, capacitors, ICs, connectors, and all else, must appear in the BOM. Each row in the BOM must include:

| Field | Description | Example |
|---|---|---|
| Reference | Reference designator(s) on PCB | C1,C2 |
| Quantity | Number of units | 2 |
| Value | Component value | 12pF |
| Package/Footprint | Package type | Capacitor_SMD:C_0805_2012Metric |
| Purchase Link | Direct vendor link | https://www.mouser.com/... |
| Rate | Cost per unit | 1.78 |
| Cost | Total cost (Quantity × Rate) | 3.56 |

If the Generate BOM tool adds extra columns beyond those listed above, you may retain or remove them as you see fit. They will not affect your evaluation.

<div style="margin: 1.5rem 0;"></div>

### Holmes's Directive

"A purchase link that leads to the wrong package is worse than no link at all. Confirm the footprint. Confirm the stock. Confirm the price. Then, and only then, add it to the list."

<div style="margin: 1.5rem 0;"></div>

### Resources

**KiCad Official Website:** [https://www.kicad.org/](https://www.kicad.org/)

**KiCad Installation**

**Windows**
- Download the installer from the [official KiCad website](https://www.kicad.org/).
- Run the .exe file.
- Follow the setup wizard with default options.
- Ensure symbol libraries and footprints are selected during installation.

**macOS**
- Download the .dmg file from the official site.
- Open the DMG and drag KiCad into the Applications folder.
- On first launch, allow permissions if macOS blocks the app.

**Linux (Ubuntu / Debian)**
- Use the official KiCad PPA or distribution repository.
- Install via the package manager.
- Ensure libraries are installed along with the main package.

**Post-Installation Checks**

- Launch KiCad successfully.
- Open Schematic Editor and PCB Editor.

<div style="margin: 1.5rem 0;"></div>

### PCB Schematic

<iframe src="https://drive.google.com/file/d/1JZnAx0AAHoDll6BsR44T0GGuU1jCNbbR/preview" width="350" height="350" allow="autoplay"></iframe>

<div style="margin: 1.5rem 0;"></div>

### Closing Note from Holmes

"Any fool can read a schematic. It takes a methodical mind to translate it into something a factory can actually build. Do not guess. Verify."

<div style="margin: 1.5rem 0;"></div>

**Your Mission:** Generate a complete, accurate, and verified Bill of Materials from the provided schematic and submit it as a Google Sheet.

<div style="margin: 1.5rem 0;"></div>

**Deliverables**

A google sheet link with the Bill of Materials for the given schematic.

<p style="text-align: center; margin-top: 2rem;">
  <a href="https://forms.gle/JQV2B3TMeoDQXNUd8" style="color: #D72B2B; font-size: 0.9rem; font-weight: bold;">[Submit Here]</a>
</p>
