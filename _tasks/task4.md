---
layout: page
title: Task 4
description: The Droid Awakens — Maze Runner Protocol
importance: 5
---

**Points for Task: 150**

## Description

Alan faced a maze in a vast city. He had to navigate a treacherous path full with mines and incorrect turns. But he was determined to go to his target, even if it meant risking danger around every corner.
Alan's journey was like a puzzle with many pieces missing. Every time he believed he was on the correct track, he ran into a dead end or turned back on discovering a concealed mine. It was aggravating, but Alan refused to quit. He continued going, determined to finish no matter what.
After what seemed like an eternity, Alan arrived at his destination. He felt tired and relieved. He understood he needed to assist others to avoid the same difficulties he encountered. So he sent all of the details of his journey—every false turn, every mine—to his pal Tom, who was waiting at the starting spot.
Tom was quite skilled at reading maps and finding out the best routes. When he received Alan's information, he realised he had an essential job. He meticulously documented Alan's route, noting every twist and bend, every risky area.
Tom used Alan's data to generate a map of his path. Then he began determining the safest path for others to travel. He wanted to ensure that no one else had to go through what Alan did. With patience and skill, Tom evaluated the map to find the optimum route that avoided the mines and wrong turns.


**An Example of Maze**

```
                                                    ___
 __________________________________________________|   |
|   _______________________________    ____________    | <---- **END**
|  |               |  |            |  |            |___|
|  |               |  |            |  |
|  |         ______|  |____        |  |
|  |        |   ________   |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |        |  |        |  |       |  |
|  |________|  |________|  |_______|  |________|
|___________    _______________________________| <--- **DEAD END**
            |  |
            |  |
            |  |
            |  |
            |  |
          **START**


```

** Sensor placement ***
- Two sensors are used for this maze : a Line Sensor Array and an Infrared (IR) sensor.

```
                               |     |
                               |     |
                           ____|     |____
                           ____|     |____
                               |     |
                               |  6  |
                              1|2 3 4|5
```

- 1, 2, 3, 4, 5 are the positions of the 5 line sensors and the 6th is for the IR sensor.
- The line sensors detect the lines on the maze while the IR sensor detects mines on it.

**Types of Junction**

```
					   |XX|	  <--- Mines/U-turn
					   |  |
			-----------    -------------    <---- plus junction
			-----------	   -------------		
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

# Task

[Download Task data](https://drive.google.com/file/d/1lQB1hIVMLCdLkzNckBj-tAfWj_tsVkLb/view?usp=drive_link)


## Input

- `LSA_IR_data.txt`  has the sensor data obtained by Alex ,that has all the turns & obstacles on the map Alex traversed.
- You will now process this map to find the shortest and safest path on the map .

## Output
- The output should consist of the shortest & safest path to navigate the maze . The path should be printed into a text file describing each turn taken at the type of junction with the direction.
- Use the below example for reference : 
```
START
LEFT TURN       PLUS                    East
RIGHT TURN      ONLY RIGHT              South
LEFT TURN       ONLY LEFT               East
END
...
```

__Note__ :- 
1. You should use only C language to solve this task.
2.  Consider reference direction as North.
3.  U turn is taken whenever a mine is encountered.

## Submission Instructions

- You must create a zip file, which should contain your code and generated output files.