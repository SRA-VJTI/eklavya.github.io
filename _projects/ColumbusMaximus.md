---
layout: page
title: Columbus Maximus
description: Fuse UWB, LiDAR SLAM, and wheel odometry via an Extended Kalman Filter on ROS2 to achieve precise indoor robot localization and mapping without GPS.
importance: 7
---

---

| Project Domains                                                                                          | Mentors                              |
|----------------------------------------------------------------------------------------------------------|--------------------------------------|
| Embedded Systems, CAD, ROS2, SLAM, UWB Technology, Robotics, Sensor Fusion, Autonomous Navigation       | Siddharth Mishra, Vedant Malkar     |

---

### Project Description

GPS fails indoors yet robots in warehouses and factories navigate with remarkable precision. Columbus Maximus solves this by fusing three sensing technologies: UWB anchors for absolute position, LiDAR-based SLAM for real-time mapping, and wheel odometry for motion tracking. Since no single sensor is fully reliable, an Extended Kalman Filter (EKF) continuously blends all three, correcting drift and noise to produce a stable, accurate pose estimate. Built on ROS2, the system visualizes the robot's live position and generates a map in RViz, the same workflow used in professional autonomous navigation systems.

Beyond building a working robot, the project compares SLAM-only, UWB-only, and full EKF fusion approaches giving you real experimental insight into sensor trade-offs and robustness. Columbus Maximus gives you hands-on experience with sensor fusion, probabilistic estimation, embedded hardware, and autonomous navigation, the core skills behind self-driving robots and industrial AGVs.

---

### Resources

[Research Paper](https://www.mdpi.com/2072-4292/14/6/1380)<br>
[What is UWB?](https://youtu.be/UWJZZ9cHuyM?si=vK6IoP7KVzfEnaX5)<br>
[What is SLAM?](https://youtu.be/fsbPAgEyLeU?si=wXtb078SBkg0tEiG)<br>
[UWB Dev Kit](https://www.qorvo.com/products/p/DWM3001CDK)<br>
[Playlist For Example Project Pipeline](https://youtube.com/playlist?list=PLunhqkrRNRhYAffV8JDiFOatQXuU-NnxT&si=qDexqOuwNyGoKk4n)<br>

---
