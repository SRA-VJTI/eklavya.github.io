---
layout: page
title: Make It Move

description: Train a PPO-based gait policy in MuJoCo and deploy it on a low-cost, tortoise-style quadruped.  
---

---

| Project Domains                                               |Mentors     | Project Difficulty |
|--------------------------------------------------------------|-----|--------------------|
| Reinforcement Learning, Robotics Simulation, Imitation Learning|Ansh, Prajwal    | Hard               |

---

### Project Description

Kurma is a budget quadruped with a turtle-like frame.  
Your mission: teach it to walk—first in simulation, then in the real world.

1. **Policy Learning (PPO)**  
   * Build a Gym-compatible MuJoCo environment for Kurma.  
   * Craft rewards for speed, stability, and energy use.  
   * Train a continuous-action neural policy using Proximal Policy Optimization.  

2. **Imitation / Inverse RL (stretch)**  
   * Script or joystick-teleop a stable gait.  
   * Use Inverse RL to learn a reward that reproduces the demonstration, then refine with PPO.  

Deploy the final network to a Raspberry Pi controller, drive affordable servos, and film an untethered demo of Kurma on the move.

---

### Resources

[Kurma](https://drive.google.com/file/d/1KZD7YOJFVc-1V6P_AOij_7Ek0Aka7dkh/view) <br>
[Intro to Reinforcement Learning](https://youtu.be/JgvyzIkgxF0) <br>
[Inverse RL](https://thegradient.pub/learning-from-humans-what-is-inverse-reinforcement-learning) <br>
[PPO – Spinning Up guide](https://spinningup.openai.com/en/latest/algorithms/ppo.html) 
