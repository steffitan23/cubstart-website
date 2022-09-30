# HW3: Bullseye with SwiftUI

# Introduction 👋

**Today we will be implementing the UI of Bullseye using SwiftUI and some of its functionality!** This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. 

Remember that the core concept of it is that given a random number, you will try to move the slider to match the number, and the application will tell you if you're right or even close!

Here is an example of the finished product:

## Setup 🛠️

Pull the skeleton code using this command:

```markdown
https://github.com/tonyhong007/bullseye_with_swiftUI-skeleton
```

To open the project, open Xcode → Open a Project or File → Navigate to Bullseye

# Part 0: Opening the Project 📱

## What is SwiftUI?

SwiftUI is a recently developed framework that is still rapidly developing. It is used for building user interfaces for iOS, tvOS, etc. and is overall SUPER EASY TO USE!!!

## Initial Takeaways

![image](https://user-images.githubusercontent.com/71753465/193163361-bf546864-60a0-4684-a271-70429a3db1ca.png)

When you first open the project you should see “ContentView” on the left side of your screen and the preview on the right side of your screen. Let’s quickly break this down!

For most single screen applications we will mainly be working with the “ContentView” file. When working with SwiftUI we must always import the SwiftUI framework:

![image](https://user-images.githubusercontent.com/71753465/193163396-0e6f39f7-892e-43b4-83eb-58f0382a7b74.png)

For any view we work with in SwiftUI, we must wrap any UI elements within “var body: some View {}” and we must wrap everything else + the body within “struct ViewName: View {}”:

```markdown
struct ViewName: View {

		// variables, functions, etc. here

    var body: some View {
		    // all UI elements here
		}
}
```

Now you might be wondering what in the world is:

![image](https://user-images.githubusercontent.com/71753465/193163430-a5473a4e-7cef-4433-963c-a0a28a8bbb0b.png)

This is basically SwiftUI’s way of allowing us to view the UI as we’re typing in code without having to run it on a simulator. Click “Resume” on the top right corner to view the current UI.

Your screen should now look like this:

![image](https://user-images.githubusercontent.com/71753465/193163455-79052014-76da-40d9-af69-fd8fdf83904a.png)

Now the preview on the right hand side will automatically be updated as we add in code! In this course however, we won’t be relying on the preview functionality to run our code and will instead continue to run it on the simulator. You can use the preview functionality if you want but be careful because it can display the wrong UI in some cases so it isn’t as reliable as the simulator. Go ahead and delete this piece of code.

Your screen should now look like this:

![image](https://user-images.githubusercontent.com/71753465/193163487-a0125971-d51a-48a1-ad0d-aa95fd407eee.png)

You might also be wondering what the purpose of the "SwiftUI_BullseyeApp" file on the left side is. This file is basically an entry point for SwiftUI which means it will be the first file that will run and displayed in the simulator. In the picture below ContentView() is called since we'll mainly be working in that file and we want that file to be the first file displayed when running the simulator.

![image](https://user-images.githubusercontent.com/71753465/193163517-ed13795a-4b58-48df-8c6f-7fc04ce818db.png)

# Part 1: Implementing the UI 🎨

## ****High Score and Current Level Labels****

Let's break down the UI into separate components starting with the "High Score" and "Current Level" labels on the top right and left corners.

![image](https://user-images.githubusercontent.com/71753465/193163545-ac3c48fd-c7dc-432b-8ec9-128e88bf6116.png)

To implement this we'll be using a combination of HStacks and VStacks. An HStack is essentially a view that arranges any elements placed inside it in a horizontal order and a VStack is a view that arranges any elements placed inside it in a vertical order. Take a look at this example:

![image](https://user-images.githubusercontent.com/71753465/193163576-cf4ed132-1b83-41d5-8772-8f4c76ac8aec.png)

We have a VStack with two Text elements inside it. This would display the two "Hello World" texts stacked on top of each other:

![image](https://user-images.githubusercontent.com/71753465/193163626-908ee0f4-aedb-4790-a26c-bbf9b89a860c.png)

Based on the image of what's expected, we can see that "High Score" and "0" would be in a VStack while "Current Level" and "1" would also be in a VStack. Let's go ahead and add two VStack elements to the body:

```markdown
import SwiftUI

struct ContentView: View {
    
    var body: some View {
        VStack() {
            Text("High Score")
            Text("0")
        }
        
        VStack() {
            Text("Current Level")
            Text("1")
        }
    }
}
```

Your app should now look like this:

![image](https://user-images.githubusercontent.com/71753465/193163667-035e11df-306c-422b-a962-73e4f1076396.png)

We now have "High Score" on top of "0" and "Current Level" on top of "1" which we want, but we want to have these VStack elements be ordered horizontally. We could use a HStack for this. In SwiftUI we're able to nest VStacks and HStacks which comes in handy. In this case we could nest our VStack elements inside an HStack.

```markdown
import SwiftUI

struct ContentView: View {
    
    var body: some View {
        HStack() {
            VStack() {
                Text("High Score")
                Text("0")
            }
            
            VStack() {
                Text("Current Level")
                Text("1")
            }
        }
    }
}
```

Your app should now look like this:

![image](https://user-images.githubusercontent.com/71753465/193163702-2a239bce-7e24-4dd0-9700-1a81b54b90b3.png)

All our elements are now perfectly aligned vertically and horizontally! Now we have to work on getting the correct spacing. We can use different tools like Spacer(), .padding(), and more but we'll be using Spacer() and .padding() for this. Spacer() essentially fills up as much space as possible in the specified direction. Take a look at this example:

![image](https://user-images.githubusercontent.com/71753465/193163735-aeccef68-4222-4022-8fda-64591d88e488.png)

We added Spacer() in between the two VStack elements. What this would do is it would create as much space as possible between the two VStack elements horizontally. It occupies as much space as possible horizontally because it is within an HStack. If it was within a VStack it would occupy space vertically. This is what the app should look like with the Spacer():

![image](https://user-images.githubusercontent.com/71753465/193163771-1f1a0b41-3524-49e6-ba67-2247b184a404.png)

Notice how Spacer() maximized the white space between the two VStack elements. This is what we want initially before we use .padding() to move the two elements to look slightly better. Now we want to push everything all the way to the top and a way to do this would be to maximize space between the two VStack elements and the bottom of the screen. However, we don't yet have a VStack encasing everything which we need in order to add a Spacer() vertically. You could implement it like this:

```markdown
import SwiftUI

struct ContentView: View {
    
    var body: some View {
        VStack() {
            HStack() {
                VStack() {
                    Text("High Score")
                    Text("0")
                }
                
                Spacer()
                
                VStack() {
                    Text("Current Level")
                    Text("1")
                }
            }
            
            Spacer()
        }
    }
}
```

Notice how we wrapped everything we had before inside another VStack. This will be useful when we add more elements below the HStack and for when we want to add Spacers. Your app should now look like this:

![image](https://user-images.githubusercontent.com/71753465/193163790-667af756-05b6-4339-b68a-19558d3314fc.png)

We're almost there! Now we just need to move the VStack elements slightly inward to make it look nicer. We can do this by using .padding(). .padding() is used to add space around a single element. We can specify which side of the element we want padding on and how many pixels of padding we want. For example:

```markdown
import SwiftUI

struct ContentView: View {
    
    var body: some View {
        VStack() {
            HStack() {
                VStack() {
                    Text("High Score")
                    Text("0")
                }
                .padding(.leading, 20)
                
                Spacer()
                
                VStack() {
                    Text("Current Level")
                    Text("1")
                }
            }
            
            Spacer()
        }
    }
}
```

Notice how we added ".padding(.leading, 20)" below the first VStack. This essentially made 20 pixels of space between the left side of the phone screen and the VStack itself. Also note that any property beginning with " . " is always added to the bottom of a single element unless it is within another property like .padding() and .leading. Your app should now look like this:

![image](https://user-images.githubusercontent.com/71753465/193163822-60a70058-04c0-4f21-939d-f96879b69113.png)

Notice how there is clearly more space between the left side of the phone screen and the VStack. Now that you have all this information, try to add additional padding() to mimic the app below!

Hint: you can have multiple .padding() properties under an element for different sides

Ex: .padding(.leading, 20) and .padding(.top, 20)

Please add three additional .padding() properties!

![image](https://user-images.githubusercontent.com/71753465/193163858-b27900e0-f097-410f-8aa6-6611c84f14ac.png)

## ****Other Components****

We've basically covered everything that's needed to complete the rest of the UI. I'll leave the rest of the UI to you but I'll cover any concepts that I haven't explained and I'll give a lot of hints along the way. I strongly believe in learning by doing and learning how to use SwiftUI will come from making mistakes and searching through Google!

Your app should look like this by the time you finish this homework

![image](https://user-images.githubusercontent.com/71753465/193163900-dd7a0859-6073-4df5-b871-dfd802293ca4.png)

Let's start by listing what additional components we'll need.

1. We'll need a Text element for "Move the slider to:"
2. We'll need a Text element for "25"
3. We'll need a Slider element
4. We'll need a Button element for "Check"
5. We'll need a Text element for "Exact Mode?"
6. We'll need a Toggle element

These elements are in order of how they should be coded and all of these elements are within the outermost VStack and below the last Spacer() we used.

![image](https://user-images.githubusercontent.com/71753465/193163927-b99ca816-b230-4511-b64d-b24f308a0291.png)

Before we continue there are a few concepts that we haven't yet covered in this homework.

The Slider and Toggle elements are elements we've never seen before.

- Slider takes in two arguments. The first argument (value) is for the value that the slider is initially on and the second argument (in) is for the range that the slider can be moved across. In this case we want the value to be 50 and the range to be from 0 to 100.
- Toggle also takes in two arguments. The first argument is the text that is displayed before the toggle button and the second argument (isOn) is a boolean that displays whether the toggle button is on or off.

Hint #2: Also remember that you'll have to create spacing. As a hint I used Spacer() one more time and used two .padding() properties for the Slider element.

Hint #3: I changed the font of the first two Text elements to 30 by using ".font(.system(size: 30))”

Hint #4: You can initialize these two variables outside of the body to use for the Slider and Toggle elements. "Num" would be used for the value argument for Slider and "toggle" would be used for the isOn argument for Toggle.

- You can check out these links to see how arguments are passed into Slider and Toggle:
    - [https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-toggle-switch](https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-toggle-switch)
    - [https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it](https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it)

```markdown
@State var num: Double = 50
    
@State var toggle = false
```

Notice how these two variables have "@State" attached to it. @State is used for variables that often change while an app is running. Let's say that we have a name variable initialized to "Tony". If we wanted to change this variable to "Jordan" while the app is running, we would need to add the @State wrapper to the name variable in order to have it automatically be changed and displayed on the app in real time. Without the @State wrapper, we would not be able to modify "Tony" at all and it surely wouldn't instantly update to "Jordan" on the app. We need to use @State on these variables because the value of the slider can change if the user interacts with the slider and the toggle button can also toggle on and off based on how the user interacts with it. We want these updates to instantly show up on the app which is why we use the @State wrapper.

You should now have all the information you need to complete this app. Feel free to come to lab if you have any questions or make a piazza post!

# Submission:

To submit your homework. Go back to your terminal and navigate to your “Cubstart-iOS” directory using these commands:

```markdown
cd Desktop
cd Cubstart-iOS
```

Then type in these commands to push your code onto your personal repository:

```markdown
git add .
git commit -m "completed homework 3"
git push
```

You can also type `git status` to verify which files you are pushing.

Upload your code onto gradescope for HW 1 like so. Choose your personal repository we created in the beginning of the homework under “repository” and choose “main/master” under branch.

![image](https://user-images.githubusercontent.com/64179036/191868700-7a68570a-bf24-403a-9fbf-89dc57cf9d1b.png)
