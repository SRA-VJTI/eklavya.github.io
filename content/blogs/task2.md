+++
title = "Task 2: Bytes and Pieces"
description = "01000001 01110011 01110011 01101001 01100111 01101110 01101101 01100101 01101110 01110100 00100000 01101011 01100001 01110010 00100000 01101110 01100001"
+++

## Download

[Download](https://github.com/SRA-VJTI/eklavya2020-assignments/releases/download/eklavya/Assignment_3.zip)

## Description

You have been given a 1D lidar sensor data.
Go through its datasheet provided within this folder
Especially the "Serial port data communication" part

## Task

In the file data.bin
you have been given a large set of binary stream received from the lidar.
Each data stream has been seperated by a `\x0A (newline byte)`
Extract the distance and signal info and plot a graph for both

This is a practically obtained data set
so discard any impractical values which may have been recorded
refer the datasheet to know what impractical means for this lidar

## Input

- `data.bin` file contains a large set of binary stream received from the lidar.
- The program on running must ask the name of the file to be read

## Output

- The program must output two files `distance.txt` and `signal.txt` which contains distance and signal data.
- Each line in file must be of the form `<distance or strength_value>`
- The extracted data can be plotted using gnuplot
- Example of data in file:

```
900
900
900
300
...
```

### Installing gnuplot

- **For Ubuntu**

```
sudo apt-get install gnuplot
```

- **For Windows**
  - Follow this [link](https://www.youtube.com/watch?v=L-YPZDe_BYw&feature=youtu.be)
- Running `gnuplot` should result in:

```bash
G N U P L O T
Version 5.0 patchlevel 3    last modified 2016-02-21

Copyright (C) 1986-1993, 1998, 2004, 2007-2016
Thomas Williams, Colin Kelley and many others

gnuplot home:     http://www.gnuplot.info
faq, bugs, etc:   type "help FAQ"
immediate help:   type "help"  (plot window: hit 'h')

Terminal type set to 'qt'
gnuplot>
```

### Plotting using gnuplot

```bash
gnuplot> plot "./distance.txt"
gnuplot> plot "./signal.txt"
```

## Submission Instructions

- You must create a zip file, which should contain source files, files distance.txt, signal.txt and screenshot of the plots for distance and signal value.

- Submit here : [Link to Google Form](https://docs.google.com/forms/d/e/1FAIpQLSclVNltkwhaIiOB-Qd8fwsdESAibQ552X7wv-36sp34d85sxw/viewform)

## Example

```bash
sra@sra21:~$ ./assignment
enter name of file to be read: data.bin
```

<!-- [Go back](tasks.md) -->
