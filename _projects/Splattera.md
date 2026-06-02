---
layout: page
title: Splattera
description: Turn a regular phone video of VJTI's campus into a photorealistic, navigable 3D environment you can walk around in like a first-person game.
importance: 1
---

---

| Project Domains                                                      | Mentors             |
|----------------------------------------------------------------------|---------------------|
| Computer Vision, Machine Learning, 3D Reconstruction, Gaussian Splatting | Sarayu Anantharaman, Shashvat Prabhu |

---

### Project Description

This project's goal is taking a regular phone video of VJTI's campus and turning it into a photorealistic, navigable 3D environment where you can walk around like a First-Person game.

It involves Long Context 3D Scene Reconstruction, which is done by solving the camera position at every frame across the entire trajectory, without losing track over long distances. The camera positions and depth information then supervise the training of a 3D Gaussian Splat. To make it actually playable, we run semantic segmentation to identify individual objects in the scene, making them independently interactive.

The final output is a navigable first-person Unity environment built entirely from a phone video, with collision, walkable surfaces, and interactive objects.

---

### Resources

[3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://arxiv.org/pdf/2308.04079)<br>
[LoGeR Paper](https://loger-project.github.io/files/loger_paper.pdf)<br>

---
