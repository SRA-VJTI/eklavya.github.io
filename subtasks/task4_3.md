---
layout: page
title: Embedded Task
img: assets/img/PCB.jpg
permalink: /tasks/task4_2
importance: 4
---



This task involves implementing a system that reads a .txt file generated from Task 1 and performs actions based on the type of node and turn detected. The system will use the SRA board to control LED blinking patterns and motor movements. Additionally, the system will use freeRTOS to control both the LED blinking patterns and motor movements concurrently.

## **Task Instructions:**

- Read the lsa.txt file output from Task 1.
- Detect a specified type of node (e.g., only left node) and turn (e.g., left turn).
- What is a Node?

```
    |  |
____|  |____
____    ____ <-- Node here
    |  |
    |  |
____|  |
____   | <-- Node Here
    |  |
    |  |_____
    |   _____ <-- Node Here
    |  |
    |  |
    |  |
    |  |

```

Line sensor placement:

```

    |   |
    |   |
____|   |____
____|   |____
    |   |
    |   |
   0|123|4
```

0, 1, 2, 3, 4 are the locations of the 5 line sensors

**Types of Nodes:**

```
                       |  |
                       |  |
         ______________|  |
 Only-->|   ______________|  <-- Only Left
 Right  |  |
        |  |
    ____|  |____
    ____    ____ <-- Plus
        |  |
        |  |
    ____|  |
    ____   | <-- Straight+Left
        |  |
        |  |_____
        |   _____ <-- Straight+Right
        |  |
        |  |
        |  |
        |  |
```

- Implement **LED blinking** according to the **node type**:
    - Utilize the SRA board's 8 LEDs to display the blink pattern.
    - For only left node: LEDs will blink in a pattern from right to left.    
    - For only right node: LEDs will blink in a pattern from left to right.    
    - For right+straight or left+straight node: LEDs will blink in a pattern where the lights at both ends (first and eighth LEDs) move towards the center.
    - For plus node: All LEDs blink simultaneously (on and off).
    - For dead end: LEDs will blink in a stationary pattern, indicating the end of the path.
    
    **Click [here](https://tangy-ironclad-2ce.notion.site/LED-Patterns-415bc48176e9438fa4d564c7bb276041) for LED Patterns**

- Control **motor movement**s according to the detected **turn type** using the SRA board. 
    i.e 
    - For a left turn, the motors should turn left.
    - For a right turn, the motors should turn right.
    - For a right + straight node,  the motors should continue to move straight.
    - For a left + straight node, the motors should turn left.
    - For a plus node, the motors should turn left.
    - For dead end, the motors should stop.
    
    (This is the basic application of Left-Follow Rule where in the bot prioritises Left Turn at each node. The next priority is for going Straight and then least priority is given to the Right Turn.)
    
- Utilize freeRTOS to ensure parallel execution of LED blinking and motor control tasks.

## Submission Instructions

Make a zip file containing

- Your code file main.c
- A video showing LED blinking patterns and motor movements.
- Rename zip folder as your team name and task number. Eg. "Task_4_TEAM_ABCD”
- Submit [**here**](https://docs.google.com/forms/d/e/1FAIpQLSdfMcJeF9Kahu3anRx_x-Yy7Uge-mmePv7-zoeEcM3BXhWb_Q/viewform)

## **Resources**

- [**Wall-E PPT’s**](https://drive.google.com/drive/folders/1vG0va4bM5qz_MJKkz4dLdT4V8_zq696K)
- [**Wall-E github**](https://github.com/SRA-VJTI/Wall-E)
- [Task Creation using FreeRTOS](https://github.com/SRA-VJTI/Wall-E)