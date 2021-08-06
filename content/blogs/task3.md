+++
title = "Task 3: C(V) you laterrr"
description = "Implementing harr features from scratch"
+++

## Haar Features!

**What are features in Computer Vision?**

Features are identification marks of an image using which we can convinicingly identify different images. Most features record data related to extreme change in pixel intensities(edges). These features can also be categorized for specific objects such as a Face, Hands, Person, etc. 

**What are Haar Features?**

There are many different types of features which differ from one another on the basis of method used for calculating them. Haar features is one such category of unique features used to categorize an image.

{{< image src="/img/Haar_feature1.png" alt="Haar_feature1" position="center" style="border-radius: 8px;" >}}

{{< image src="/img/Haar_feature2.png" alt="Haar_feature2" position="center" style="border-radius: 8px;" >}}

A sample calculation of Haar value from a rectangular image section has been shown here. The darker areas in the haar feature are pixels with values 1, and the lighter areas are pixels with values 0. Each of these is responsible for finding out one particular feature in the image. Such as an edge, a line or any structure in the image where there is a sudden change of intensities. For ex. in the image above, the haar feature can detect a vertical edge with darker pixels at its right and lighter pixels at its left.

The objective here is to find out the sum of all the image pixels lying in the darker area of the image patch(assumed haar feature) and the sum of all the image pixels lying in the lighter area of the image patch(assumed haar feature).

Here we ll use 5 types of haar feature:

 - type-2-x
 - type-2-y
 - type-3-x
 - type-3-y
 - type-4

{{< image src="/img/Haar_feature3.png" alt="Haar_feature3" position="center" style="border-radius: 8px;" >}}

# Task

## Download
[Download](https://drive.google.com/drive/folders/1NjuOatrqFM_e0NDT4FFm6Yi1LkaIXqUb?usp=sharing)

## **Question Statement**

We will provide you with an image, your job is to extract a single Haar feature from it. Your program must accept a path which will lead to the provided image and type of desired Haar feature. It should have the option of entering types of haar features in a continous fashion one after another. You must note that while doing so, image should be processed only once. 

Ignore the last remaining pixels of the image, accordingly.

Here is the expected program flow : 

Take image path input -> Process the Image in required manner -> Take input for haar feature type -> display haar feature -> Take input for haar feature type -> display haar feature .... until the user enters exit. 

Note that Image was processed only once during the entire cycle in beginning.

## **Sample Working**

{{< image src="/img/Task3v2.jpeg" alt="Sample_Working" position="center" style="border-radius: 8px;" >}}
 
Note : Solution should be prepared using Python.

## **Submission Instructions**
 - You must create a zip file, which should contain source file and two screenshots of the terminal displaying Haar Feature.

 - Submit here : [Google Form](https://forms.gle/5hjd2i47FgH1bH4c8)
