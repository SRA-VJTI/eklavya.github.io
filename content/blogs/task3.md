+++
title = "Task 3: Spread your arms"
description = "Work with your favourite inverse kinematics."
+++

## ZIP File Download:
A zip containing :-
[Download](https://drive.google.com/drive/folders/1k_b8FbtwirBn1d9N5-RJgHnU5uFAJIjV?usp=sharing)
- [x] Input parameters configurations.
- [x] A template Python file.
- [x] An example input set

## Description:
Given the below 3-DOF Arm, with the denoted parameters, your job is to **create an inverse kinematics module** in Python to solve for the Joint Parameters, given the X, Y, Z co-ordinates of the end-effector and Link lengths as input.

![Image of 3-DOF Robotic Arm with Link Lengths, Axes and Joint Parameters depicted.](https://i.imgur.com/LaDt7rT.png)

| Joints Parameters    | Description                               |
|----------------------|-------------------------------------------|
| &Theta;<sub>1</sub>  | Revolute Joint with 360 rotation          |
| &Theta;<sub>2</sub>  | Revolute Joint with 360 rotation          |
| d<sub>3</sub>        | Prismatic Joint with max length 4.0 units |

## Task:
- Solve the Inverse Kinematics equations for the given arm on paper(you will have to submit the working for this too).
- For the code, your task is to read the `arm_configs.txt` file given in the zip file using *file handling in Python*.
- Next, make a function in Python which takes each configuration as input and outputs the joint parameters. 
- For the given arm there are 3 Joint parameters, namely $\theta$<sub>1</sub>, $\theta$<sub>2</sub> and $d$<sub>3</sub>.
Hence, your Python function should look something like:
```\python
# Here, `config` is a Python list where the first 3 elements are
# the X, Y, Z co-ordinates of the end-effector and the
# next 5 elements are the link-lengths in order.
def inverse_kinematics(config):
    X  =  config[0]
    Y  =  config[1]
    Z  =  config[2]
    a1 =  config[3]
    a2 =  config[4]
    a3 =  config[5]
    a4 =  config[6]
    a5 =  config[7]
    
    # Your inverse kinematics code should go here.
    
    return (theta_1, theta_2, d3)
```
- After finding the Joint Parameters, you need to write them in a space-seperated manner in an output file called `output.txt`.
- **Your output angles should be in radians.**
- **For cases where the given X, Y, Z co-ordinates are outside of the workspace of the arm, output `-1 -1 -1`.**
- **Round all your answers to 3 decimal places.**

## Input:
- A single file `arm_configs.txt`
> A text file containing different configurations **(X, Y, Z, a[1,2,..5])** of the given 3-DOF robotic arm.

## Output:
- A single text file `output.txt`
> For each line in the `arm_configs.txt` the `output.txt` will contain three space seperated nos. representing **$\theta$<sub>1</sub>, $\theta$<sub>2</sub> and $d$<sub>3</sub>.**

## Example:
You are given an `example.txt` file in the zip file to test your code.
#### example.txt

```\text
2.58 4.73 3.76 2.13 3.45 4.46 8.8 1.94
8.71 7.08 4.34 1.35 3.68 7.58 8.69 1.87
4.12 4.54 4.68 3.86 3.29 5.67 3.68 4.81
7.39 4.79 2.89 4.53 4.12 3.36 5.21 3.89
6.51 1.23 4.28 4.32 4.57 8.43 1.11 2.2
```

The output for the above file should look like:
#### output.txt

```\text
-1.876 3.023 0.89
-0.002 0.956 2.72
0.307 0.993 0.04
0.195 0.678 1.11
-1 -1 -1
```

## Pssst...
- *Still not able to crack how to write an inverse kinematics module?*
-> Well, you have used one before, and we wrote it for you then! Dig through the **MARIO Repo**, to find the *inverse_kinematics_module* used there :wink:

## Submission Instructions:
- You must create a `.zip`(**not `.rar`**) file containing:-
    - Scanned PDF of your working on paper(name it `written_working.pdf`)
    - Python code file(`inverse_kinematics_module.py`)
    - Output Text file(`output.txt`) with the joint parameters.
- Submit here: [Link to Google Form](https://docs.google.com/forms/d/1Tl0XqX3IxwrMUj4DOb3GdpeHUCPihgAnCy64FhZz9g4)

