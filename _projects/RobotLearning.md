---
layout: page
title: Robot Learning from First Principals 

description: A hands-on project combining simulation and real-world control of the SO100 robotic arm using vision, language, and machine learning.  
---

---

| Project Domains                                               | Mentors                         | Project Difficulty |
|---------------------------------------------------------------|---------------------------------|--------------------|
| Machine Leaning, Computer Vision, Action Chunking Transformer | Atharva Kshirsagar              | Hard               |

---

### Project Description


This project sets up the SO100 robotic arm in MuJoCo simulation using the so100-mujoco-sim repo and LeRobot interface, enabling easy switching between virtual and real robots.<br>
Affordable 3D-printed or kit versions make assembly simple.<br>
Students will collect around 30 tele-operated demonstrations with LeRobot’s tools, then train models starting with Behavioural Cloning to teach the arm basic tasks.<br>
Next, an advanced Action Chunking Transformer (ACT) model will learn to follow language commands and video input to control the arm’s movements.<br>
The goal is to achieve over 80% success on language-guided pick-and-place tasks in simulation, with the stretch goal of matching this on the real SO100.<br>
This project introduces robotics, machine learning, and language-conditioned control in an accessible way.

---

### Resources
[LeRobot](https://github.com/huggingface/lerobot)
[Paper for Action Chunking Transformer ](https://tonyzhaozh.github.io/aloha/)
[Additional Robot Learning Resources](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)