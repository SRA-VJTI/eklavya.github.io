---
layout: page
title: Task 2
description: Welcome to Arrovia
img: assets/img/forest.jpeg
importance: 3
category: Computer Vision
---

**Points for this task: 150**

# The Enchanted Arrows: Deciphering Destiny in Arrovia

<div style="text-align:center;">
  <img src="https://st4.depositphotos.com/1752371/30801/i/600/depositphotos_308011538-stock-photo-archway-enchanted-fairy-forest-landscape.jpg" alt="Forest">
</div>

## Task Description

In the remote kingdom of Arrovia, an ancient tradition has been passed down for generations. Legends speak of enchanted arrows hidden in the mystical Arrow Forest, each possessing a unique power and purpose. 🏹✨ These arrows hold the key to the prosperity and well-being of the kingdom.

As a young and ambitious programmer in Arrovia, you have been chosen to embark on a quest to unlock the secrets of the enchanted arrows. The kingdom's fate rests in your hands as you are tasked with developing a groundbreaking program that can decipher the direction of the arrows hidden within images. 💻🔍

Armed with your programming skills and a deep understanding of image analysis, you set out on a journey to explore the Arrow Forest. The forest is known for its lush greenery, towering trees, and the presence of magical energies that surround the hidden arrows. 🌳🌿✨ It is said that only those with the keenest eyes and the sharpest algorithms can uncover the true nature of the arrows.

Your adventure begins with capturing images of the mystical arrows scattered throughout the forest. Each arrow you encounter presents a unique challenge, as their appearances vary in shape, size, and orientation. 📷🎯 Some arrows are clearly defined, while others may be partially covered by foliage or concealed in the shadows.

To successfully fulfill your quest, you must employ your image analysis skills to process each image and identify the direction of the arrows. You experiment with custom algorithms, exploring techniques to differentiate arrows from the forest background and detect subtle visual cues that indicate their directions. 🧪🔬

The people of Arrovia eagerly await your success, believing that your program will unlock the full potential of the enchanted arrows. The prosperity and harmony of the kingdom hinge on your ability to accurately identify the direction of each arrow and harness their powers for the greater good. 🌟🌍

But beware, as you delve deeper into the Arrow Forest, you encounter mystical creatures that guard the arrows. These creatures, with their enigmatic presence, challenge your skills and force you to adapt your algorithms to overcome their tricks and illusions. 🦉🌌

In your quest, you find ancient scrolls containing cryptic symbols and riddles, believed to hold the key to understanding the hidden patterns of the arrows. With careful analysis and logical reasoning, you decipher these mysterious clues and unlock the secrets they hold. 📜🔓

As you make progress, you uncover the existence of a legendary Golden Arrow, said to possess unparalleled power and wisdom. Finding this elusive arrow becomes your ultimate goal, as it is believed to hold the key to unlocking the kingdom's true potential. ⚡🔑

Can you rise to the challenge and develop a robust C++ program that can decipher the hidden arrow directions, overcome the mystical creatures, and find the legendary Golden Arrow? The destiny of an entire kingdom lies in your code, and the wonders of the Arrow Forest await your exploration. 🏞️🔐

Let the coding adventure begin! Good luck, brave programmer, for the fate of Arrovia rests in your hands! 🚀👨‍💻🔥🗺️

## Task Details

- Your task is to read images `arrow0.png, arrow1.png, arrow2.png` etc. given in the zip file (i.e. `arrow[0,1,2,3..].png`) using `Opencv`
- Next, for each image, using only `Mat` , you have to determine the direction of the arrow.
- Store the directions determined for all images in a `.txt` file, located in the same folder as the images and your code file.

> Directions for arrows can be **"TOP", "BOTTOM", "LEFT", and "RIGHT"** only.

## Input:

- `arrow[1,2,3..].png`
  > Multiple grayscale image files each containing an arrow pointing at a particular direction **[LEFT, RIGHT, TOP, BOTTOM]**

## Output:

#### For a single input image:

- `LEFT/RIGHT/TOP/BOTTOM`
  > ie, Arrow Direction

#### For multiple input images:

- `.txt file`
  > That contains the directions of arrows of images read in the order `arrow[i].png` where i = 0, 1, 2 ... 9

## Example:

#### For a single input image:

```bash
sra@sra20:~$ g++ assignment.cpp -o assignment
sra@sra20:~$ ./assignment
Direction of arrow: TOP
```

#### For multiple input images:

If there are 3 images (`arrow[i].png`, where i=0,1,2) and the output for `arrow0.png` is 'TOP', `arrow1.png` is 'BOTTOM', `arrow2.png` is 'LEFT', the .txt file generated must look like this:

```
TOP
BOTTOM
LEFT
```

## Warnings

- <b>Language</b>: The program must be implemented in C++.

- <b>Libraries</b>: Only standard C++ libraries. OpenCV can be used only for reading and displaying images.

- <b>Image Input</b>: The program should accept input images in common formats, such as JPEG or PNG.

## Zip file download:

A zip containing your input images:
[Download](https://drive.google.com/file/d/1fs5P6x0vzsBSCq6Nv9KvfR-1CWDbN-Cu/view?usp=sharing)

### Sample Arrow image

{% include figure.html path="assets/img/arrow0.png" title="example image" class="img-fluid rounded z-depth-1" %}

## Submission Instructions:

- You must create a `.zip` file containing the C++ code file (`.cpp` file) & the text file (`.txt`) with the output directions.
- Submit here: [Form](https://forms.gle/9F8hJSjqtHrBax4U9)

### Resources

- [MakeFile Tutorial](https://github.com/SRA-VJTI/Pixels_Seminar/tree/main/2_build_systems)
