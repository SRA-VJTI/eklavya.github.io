+++
title = "Task 1: A Windy Path"
description = "Don't get lost in the maze!"
+++

## Download

[Download](https://drive.google.com/drive/folders/1k_b8FbtwirBn1d9N5-RJgHnU5uFAJIjV?usp=sharing)

## Description

Given line sensor data of a line following bot in a maze following "Left follow rule", write left follow algorithm and give dynamic output for encountered turn, type of junction and direction facing.
You have been given a scenario of a white line on black surface

**An Example of Maze**       

```
                                                    _______
 __________________________________________________|       |
|   _______________________________    ____________        | <---- **END**
|  |                               |  |            |_______|
|  |                               |  |
|  |         ______________        |  |
|  |        |   ________   |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |________|  |________|  |_______|  |________
|___________    _______________________________ <--- **DEAD END**
            |  |             
            |  | 
            |  |
            |  |
            |  |
          **START**


```

**Line sensor placement**

```
    |   |
    |   |
____|   |____
____|   |____
    |   |
    | 5 |
   1|2 3|4
```

- 1, 2, 3, 4 are the location of the 4 line sensors and extra 5th one for front line

**Types of Junction**

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

## Task

In the file data.txt you have been given line sensor data.

The bot starts "On the line"(Initial direction North), "traverses through the maze" by using the left follow rule.

Your task is to determine the path taken by the bot to reach the end based on the sensor values.

This is a practically obtained data set
so discard any impractical values which may have been recorded
due to "sensor or motion errors"

## Input

- `data.txt` has the line sensor data.
- The program on running must ask the name of the file to be read

## Output

- Print Turn Type, Type of Junction and Direction of the bot for each Junction encountered.
- Turn Types : Left, Right or Straight
- Types of Junction : Only Left, Only Right, Left + Straight, Right + Straight, Plus, End
- Directions: North South East West

```
Enter the filename: data.txt
LEFT TURN       PLUS                    East
RIGHT TURN      ONLY RIGHT              South
LEFT TURN       ONLY LEFT               East
...
```

*Note :- You should use only C language to solve this task*

## Submission Instructions

- You must create a zip file, which should contain source files, nad screenshot of output.

- Submit here : [Link to Google Form](https://forms.gle/kzgtZ43YSVEezpTGA)
