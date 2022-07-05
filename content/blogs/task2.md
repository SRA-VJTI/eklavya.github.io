+++
title = "Task 2: Mark your ways"
draft = true
description = "Always track the direction in which you are going!"
+++

## Zip file download:
A zip containing your input images:
[Download](https://drive.google.com/drive/folders/1k_b8FbtwirBn1d9N5-RJgHnU5uFAJIjV?usp=sharing)

## Description:
Given Grayscale Image(s) will contain an arrow which will face a particular direction like RIGHT, TOP, BOTTOM, LEFT. 

                                    __ 
               |\        /\        |  |         /|
     __________| \      /  \       |  |        / |__________
    |          |  \    /_  _\      |  |       /  |          |
    |__________|  /     |  |      _|  |_      \  |__________|
               | /      |  |      \    /       \ |
               |/       |__|       \  /         \|
                                    \/

## Task:
* Your task is to read images `arrow0.png, arrow1.png, arrow2.png` etc. given in the zip file (i.e. `arrow[0,1,2,3..].png`) using `PIL`
* Next, for each image, using only `Numpy` , you have to determine the direction of the arrow. 
* Store the directions determined for all images in a `.txt` file, located in the same folder as the images and your code file.

> Directions for arrows can be **"TOP", "BOTTOM", "LEFT", and "RIGHT"** only.
            

## Input:
* `arrow[1,2,3..].png` 
>Multiple grayscale image files each containing an arrow pointing at a particular direction **[LEFT, RIGHT, TOP, BOTTOM]**

## Output:
#### For a single input image:
* `LEFT/RIGHT/TOP/BOTTOM`
>ie, Arrow Direction


#### For multiple input images:
* `.txt file` 
> That contains the directions of arrows of images read in the order `arrow[i].png` where i = 0, 1, 2 ... 9 


## Example:


#### For a single input image:
```bash
sra@sra20:~$ python3 assignment.py
Direction of arrow: TOP
```
#### For multiple input images:
If there are 3 images (`arrow[i].png`, where i=0,1,2) and the output for `arrow0.png` is 'TOP', `arrow1.png` is 'BOTTOM', `arrow2.png` is 'LEFT', the .txt file generated must look like this:

```
TOP
BOTTOM
LEFT
```

## Warnings:
#### 1. You must make use of only Numpy and PIL Libraries in Python to solve this task, no other libraries can be used.
#### Furthermore PIL can only be used to read the image and convert color if necessary ( nothing else )
#### 2. Make sure to store the `png` images and `.txt` file in the same folder as your .py file.

## Submission Instructions:

- You must create a `.zip` file containing the python code file (`.py` file) & the text file (`.txt`) with the output directions.
- Submit here : [Link to Google Form](https://forms.gle/6zzG9r4vusep26jV7)
