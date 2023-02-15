# HW2: Make your own Profile Page with SwiftUI!

# Introduction 👋

**Today we will be practicing basic Swift features and making our own shareable profile page!** This homework builds off of the knowledge from the lecture, so please go back to the lecture slides, google search, or come to lab if you're unclear about anything.

The core concept of it is a grid that displays random facts about yourself and some images!

Here is an example of the finished product:

<video width="400" controls autoplay>
    <source src="https://user-images.githubusercontent.com/64179036/218925769-d2689f5b-9b8b-4297-bd17-c2029d3d1f00.mov" type="video/mp4">
</video>

## Setup 🛠️

First open your terminal which should already be set up on your laptop:

![image](https://user-images.githubusercontent.com/64179036/191868525-25f7ce78-40e2-4fd0-9bd2-89f536d6e072.png)

It should first look like this when you open it:

![image](https://user-images.githubusercontent.com/64179036/191868549-0ba6617d-b0fc-4146-9fd9-d8ef200dc908.png)

Type in the commands below individually to create a new folder “Cubstart-iOS” in your Desktop folder

```bash
cd Desktop
mkdir Cubstart-iOS
cd Cubstart-iOS
```

The “cd <path>” command is changing your current working directory to the specified path and the “mkdir <directory-name>” is creating a folder in your current working directory.
Your current working directory should be “Cubstart-iOS” before running the next few commands

We will be creating your very own personal repository on GitHub and we will connect it to your local git: (you don’t need to do this if you already have a git repository set up for Cubstart)

1. Create a [GitHub](https://github.com/) Account if you don't already have one. Use your Berkeley email to sign up
2. Click the `+` in the upper-right corner, and select `New repository`
3. Give your repo a name, and leave it public. You can leave other fields set to their default values. Click `Create repository`
4. Copy the link from the `Quick setup` section
5. Use the link you copied to connect your local git repository to the one you just made on GitHub using `git remote add <your name> <url>`

Now you should have a git repository set up for Cubstart that is connected to your local computer.

**Note: The sections above should be a one time setup**

Throughout this course you will be pulling skeleton code from our github repos. This next command will pull code from Abinaya's personal repository into your local computer. To pull the skeleton code for bullseye, type this command below into your terminal on the directory you want the folder in (Cubstart-iOS).

```bash
git clone https://github.com/abinayadinesh1/MiniProfilePage.git
```

To open the project, open Xcode → Open a Project or File → Navigate to HW2

### Creating a Project

If you ever want to set up your own project first Open Xcode → Create a new Xcode project → App

Here are the new project options:

This might change depending on the project you are working on but generally these options will do when working with SwiftUI. Feel free to place the project wherever you like; then click create!

## Exercise 1: Making Structures, ForEach loops, and displaying their contents!

Go to Practice.swift and follow the directions there!

## Exercise 2: Make your own profile!

- Head back to ContentView.swift and follow the instructions. For help, COME TO LABS.

- Here is a bit about the project structure. We have:
    1. struct Person:
        - describes what kind of info we have about a person (like their name, age)
    2. struct PersonView:
        - describes HOW we want to render someone's info (like in a Text())
    3. struct Fact:
        - describes what kind of info we have about a fact (like its description)
    4. struct FactView 
        - describes HOW we want to render specific attributes of the fact (like in an Image())
    5. struct ContentView 
        - describes the entire View (what we see). We can call other views in this View!
    6. struct ContentView_Previews
        - (which you shouldn't change!) --> used to preview our app in XCode

### How to load images in your app

1. find Assets in the project directory and click on it. Your screen should look like this!
<img width="1378" alt="ASSETSDIR" src="https://user-images.githubusercontent.com/64179036/218925892-60447f2f-8f31-46da-822e-e202386b8066.png">
  
2. Save the image you want, locally, to your computer.

3. Drag the image from Finder (or the Windows photos directory) over to the Assets folder here. It should populate immediately!

4. Copy the name of the image you want and fill it into the img = " " string

## Once your profile page is done...

YAY! We are now finished! Hope you had fun with this 😎

At the start of next lecture, we are going to spend 5 minutes sharing our apps with people we've never met before - hopefully this helps you make more friends in the class!

# Submission:

To submit your homework, open your Finder and navigate to the directory that includes BOTH your homework folder and a "homework".xcodeproj file like so:

<img width="778" alt="hw2submission" src="https://user-images.githubusercontent.com/64179036/218925267-bfb302f2-ef95-423c-950d-ce514af06c64.png">

Right click the folder (NOT the .xcodeproj file) and compress it. Upload your compressed file onto gradescope for HW 2.
