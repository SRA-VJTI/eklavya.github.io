---
layout: page
title: Task 5
description: Droid Arm Trials in the Holochamber
importance: 6
category: ROS2 and Gazebo
---

**Points for this task: 150**

# The Droid Arm Trials – Simulation in the Holochamber

A rogue droid arm has been discovered in the ruins of a Jedi Temple. Your mission, young apprentice, is to restore its function using the sacred tools of ROS 2 and simulate it in the holorealm of Ignition Gazebo. The task demands dexterity in code, clarity in control, and honor in motion.

---

## Holotask Briefing

You are entrusted with the remains of a **3-DOF manipulator**, and must bring it to life in simulation.

Your objectives:

1. **Summon** the robot inside **Ignition Gazebo** using the Force of URDF and STL meshes.
2. **Control** its every move by interpreting the scroll of joint angles.
3. **Organize** your code like a true Knight of ROS — modular and sacred to best practices.

---

## Provided Files

All resources for this mission are stored in this **datavault**:  
👉 **[GitHub Repository – Click Here](https://github.com/NoobMaster-version/ros_task_eklavya)**

The repository contains:

- `meshes/`: STL files for robot visualization and collision modeling.
- `ros_task/`: Supporting files like DH parameters and joint angle commands.
- `config/`: Control configurations for `ros2_control`.
- `launch/`: Launch files for the simulation and robot spawn.
- `src/`: Skeleton of the Python node for publishing joint commands.
- `CMakeLists.txt` and `package.xml`: Build and installation setup (some parts incomplete – complete them!).

Use these files **as your only source**. Do not forge components from the void.

---

## Your Trials

### I. Implement `src/fk_task.py`

You must become one with the node. This ROS 2 Python node should:

- Parse the **joint angles and gripper commands** from `angles.txt`.
- **Publish joint positions** to the topic `/forward_position_controller/commands` every **2 seconds**.
- **Compute and print the end-effector position** using DH parameters.
- *(Optional)* Log the final end-effector position to a file for Jedi Archives.

---

### II. Complete `launch/display.launch.py`

This file is your portal to the holorealm. You must:

- Set up the simulation environment for Ignition Gazebo.
- Launch Ignition Gazebo with a clean world.
- Include the `spawn_robot.launch.py` to manifest the droid arm.
- Ensure all control systems come online.

---

### III. Do Not Modify `spawn_robot.launch.py`

This file has already been forged by the High Council of Robotics. Study it if you must, but **do not alter its form**.

---

## Final Submission Checklist

- [ ] You have written `fk_task.py` to read joint angles and send them to the robot.
- [ ] You have completed `display.launch.py` so it opens Ignition Gazebo and loads the robot.
- [ ] The robot moves correctly in the simulation based on the angle values.
- [ ] You recorded a video showing your terminal and the simulation working together.
- [ ] You saved the final position of the robot arm's end (end-effector) in a `.txt` file.

---

## Use Not the GPT Droids

> *"These are not the droids you’re looking for..."*  
> This mission tests **your command over the code**. Do not call upon the AI — only your own strength in the Force.

---

**May your joints never lag, and your transforms never fail.**
