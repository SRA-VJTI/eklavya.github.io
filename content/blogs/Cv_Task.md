+++
title = "Haar Features!"
+++

**What are features in Computer Vision?**

Features are identification marks of an image using which we can convinicingly identify different images. Most features record data related to extreme change in pixel intensities(edges). These features can also be categorized for specific objects such as a Face, Hands, Person, etc. 

**What are Haar Features?**

There are many different types of features which differ from one another on the basis of method used for calculating them. Haar features is one such category of unique features used to categorize an image.

{{< image src="/img/Haar_feature1.png" alt="Haar_feature1" position="center" style="border-radius: 8px;" >}}

{{< image src="/img/Haar_feature2.png" alt="Haar_feature2" position="center" style="border-radius: 8px;" >}}

A sample calculation of Haar value from a rectangular image section has been shown here. The darker areas in the haar feature are pixels with values 1, and the lighter areas are pixels with values 0. Each of these is responsible for finding out one particular feature in the image. Such as an edge, a line or any structure in the image where there is a sudden change of intensities. For ex. in the image above, the haar feature can detect a vertical edge with darker pixels at its right and lighter pixels at its left.

The objective here is to find out the sum of all the image pixels lying in the darker area of the haar feature and the sum of all the image pixels lying in the lighter area of the haar feature and then find out their difference divided by overall sum. Now if the image has an edge separating dark pixels on the right and light pixels on the left, then the haar value will be closer to 1. That means, we say that there is an edge detected if the haar value is closer to 1. In the example above, there is no edge as the haar value is far from 1.

Here we ll use 4 types of haar feature:

 - a. type-2-x
 - b. type-2-y
 - c. type-3-x
 - d. type-3-y
 - e. type-4

{{< image src="/img/Haar_feature3.png" alt="Haar_feature3" position="center" style="border-radius: 8px;" >}}

## Task

**Question Statement**

We will provide you with an image, your job is to extract a single Haar feature from it. Your program must accept a path which will lead to the provided image and type of desired Haar feature. 

**Resources** 

Here is a collection of some links to help y'all. Try to solve the task on your own as much as you can without asking for help from your mentor(s).

 - [Resource](https://www.youtube.com/watch?v=RPoUdDGonWc)

 - [Resource](https://medium.com/analytics-vidhya/what-is-haar-features-used-in-face-detection-a7e531c8332b)
 
 - [Resource](https://towardsdatascience.com/face-detection-with-haar-cascade-727f68dafd08)
 