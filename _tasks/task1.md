---
layout: page
title: Task 1
description: The Binary Gauntlet
importance: 2
Category: Computer Vision
---

**Points for this task: 50**

# The Binary Gauntlet  
_A challenge only the most perceptive members of the Rebel Alliance can overcome._

Welcome, young Padawan, to **The Binary Gauntlet** – a cryptographic trial embedded inside a **20×20 galactic pixel grid**. Only those who can decode the transmission hidden within shall retrieve the encrypted secret held tightly by the Empire.

---

## Mission Objective

Your task is to:

- Traverse a **pixel-based grid** using custom Jedi traversal rules.
- Extract **binary data** from each valid cell (Black = 1, White = 0).
- Respect all **movement constraints** set by the Jedi Council.
- Decode the resulting binary stream into a **14-character ASCII passphrase**.
- Use this passphrase to **unlock a zip file** and recover a **classified Rebel video transmission**.

---

## The Galactic Grid

Each pixel is a **cell of traversal**. The colors and their meanings are as follows:

| Pixel Color           | Meaning                              |
| --------------------- | ------------------------------------ |
| White `(255,255,255)` | Binary `0` – valid step              |
| Black `(0,0,0)`       | Binary `1` – valid step              |
| Red `(255,0,0)`       | Forbidden Zone – stepping here = mission failure |
| Blue `(0,0,255)`      | Checkpoints – must pass through in order |
| Green `(0,255,0)`     | Starting point (for visual aid only) |

---

## Jedi Traversal Rules

1. **Valid Steps Only**: Step only on black or white pixels.  
   **Red pixels are traps** — they trigger alarms and end your mission.

2. **Bit Extraction**:
   - Step on **White → record `0`**
   - Step on **Black → record `1`**
   - **Order matters**: record bits in the order of your steps

3. **Checkpoint Protocol**:
   - You must visit **blue pixels** in the **exact order** they appear in the galaxy.

4. **No Re-Tracing**:
   - **Do not step twice** on any pixel — each move is final.

---

## Expected Outcome

- You will collect **112 binary bits** during your journey.
- Convert these into **14 ASCII characters** using the ways of the Jedi.
- This string is the **password** to unlock the zip file:  
  `secret.zip`
- Inside the archive lies a **critical video transmission**. Share it with the Rebellion and claim your reward.

---

## Mission Visual
 
![Binary Gauntlet Grid](assets/img/maze.png)

---

**The Empire hides its secrets in plain sight — only a true decoder of the Force will succeed.**  
_This is your trial. May the Source be with you._
