---
layout: page
title: Task 0
description: Tighten your Seatbelts
img: assets/img/Windy.jpeg
importance: 1
category: Computer Vision
---

[Download](https://drive.google.com/file/d/16hg60JUl6SjvoTKHPaqrVoQm9FwXktDe/view?usp=drive_link)

## Description

Given data contains the values obtained by a line sensor.
4 space-separated values on each line give the values of the sensor at any instant.
You have been given a scenario of a white line on a black surface. There are regions on this line called nodes.
A node looks like this:

```
        |  |
        |  |
    ____|  |____
    ____|  |____ <--- node here
        |  |
        |  |
        |  |
        |  |             ^
        |  |             |
        |  |             |
        |  | bot travels in this direction
```

Line sensor placement:

```
    |  |
    |  |
____|  |____
____|  |____
    |  |
    |  |
   0|12|3
```

0, 1, 2, 3 are the locations of the 4 line sensors

## Task

Your task is to count the number of nodes from the values given in the data.
The bot starts "On the line", "passes straight through nodes," and stops when it reaches the "end of the line."
This is a practically obtained dataset, so discard any impractical values that may have been recorded due to "sensor or motion errors."

## Input

- data.txt file contains the values obtained by a line sensor. 4 space-separated values on each line give the values of the sensor at any instant.
- The program, when running, must ask the name of the file to be read.

## Output

- The program must output the number of nodes it detected after reading the given .txt file.

<b>Note</b>: You should use only C language to solve this task.

### Example

```
sra@sra20:~$ ./assignment
enter name of the file to be read: data.txt
number of nodes: 1
```

## Submission Instructions

You must create a zip file, which should contain source files and a screenshot of the output.

Submit here: [Form]()
