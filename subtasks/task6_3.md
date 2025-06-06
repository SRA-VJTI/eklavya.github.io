---
layout: page
title: The HDL Order
permalink: /tasks/task6_3
importance: 4
category: Digital Design
---

The time has come, young Padawan. Under the watchful eye of the Jedi Council of Digital Design, you are summoned to construct a module of power and precision — a **2×2 Matrix Multiplier**, forged in the language of Verilog. To complete this mission, you must strike a balance between **timing**, **resource usage**, and **logic efficiency**. The fate of the Rebellion may rest on your silicon.

---

## Mission Briefing

### Objective:
Design a Verilog module that performs **2x2 matrix multiplication** under the following conditions:

#### Specifications:
- **Input:** Two 2×2 matrices `A` and `B`, with each element as an **8-bit signed integer**
- **Output:** A 2×2 matrix `C`, which is the product `C = A × B`

#### Optimization Goals:
- Minimize the number of clock cycles required
- Use hardware resources efficiently
- Minimize overall hardware logic

---

## The Formula of Multiplicative Force

Let:
$$
A = \begin{vmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{vmatrix}
\quad
B = \begin{vmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{vmatrix}
$$

Then:
$$
C = A \times B = \begin{vmatrix}
a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\
a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22}
\end{vmatrix}
$$

---

## Task Execution Steps

1. **Access the secret Jedi datapad:**  
   [Testbench File – Google Drive](https://drive.google.com/drive/folders/1RF4yw-MRR_ZKoP1AoHSOtmx7msi20Z3P)

2. **Launch the Holoterminal:**  
   Navigate to [EDAPlayground](https://www.edaplayground.com)

3. **Testbench Deployment:**
   - Paste the content from the Google Drive link into the `testbench.sv` section (left panel)

4. **Design Deployment:**
   - Write your Verilog module in the `design.sv` section (right panel)

5. **Simulate the Force:**
   - Click **Save** then **Run**
   - If the console outputs:
     ```
        ===========================================================
        Test Summary:
        Total Tests:                6
        Errors:                   0
        *** ALL TESTS PASSED! ***
        ===========================================================
        testbench.sv:116 : $finish called at 425000 (1ps)
     ```
     ...then your circuit has awakened.

---

## Final Jedi Instructions

> Your design must be optimized for both **timing** and **logic**.
> This means:
> - Use the **least amount of hardware possible**
> - Implement logic in the **most pipelined** and efficient manner

---

**The Force binds all logic gates together. Let your HDL flow freely, but precisely.**

_May the clock edge rise in your favor._
