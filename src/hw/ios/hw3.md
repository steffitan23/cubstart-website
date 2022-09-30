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

![Screen Shot 2022-01-26 at 11.12.54 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8cdbbf7-d75a-48d1-aa1b-145ba94b2d1c/Screen_Shot_2022-01-26_at_11.12.54_PM.png)

When you first open the project you should see “ContentView” on the left side of your screen and the preview on the right side of your screen. Let’s quickly break this down!

For most single screen applications we will mainly be working with the “ContentView” file. When working with SwiftUI we must always import the SwiftUI framework:

![Screen Shot 2022-01-26 at 11.20.45 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9993791-4965-4712-bb99-9da227897947/Screen_Shot_2022-01-26_at_11.20.45_PM.png)

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

![Screen Shot 2022-01-26 at 11.38.16 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82f4df4a-dcd8-4516-9e81-61b0e7564eda/Screen_Shot_2022-01-26_at_11.38.16_PM.png)

This is basically SwiftUI’s way of allowing us to view the UI as we’re typing in code without having to run it on a simulator. Click “Resume” on the top right corner to view the current UI.

Your screen should now look like this:

![Screen Shot 2022-01-26 at 11.54.45 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a73b3b39-0948-49e1-b7ce-46b994a29127/Screen_Shot_2022-01-26_at_11.54.45_PM.png)

Now the preview on the right hand side will automatically be updated as we add in code! In this course however, we won’t be relying on the preview functionality to run our code and will instead continue to run it on the simulator. You can use the preview functionality if you want but be careful because it can display the wrong UI in some cases so it isn’t as reliable as the simulator. Go ahead and delete this piece of code.

Your screen should now look like this:

![Screen Shot 2022-01-27 at 12.08.13 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fd2bc24-8f25-4954-95a0-f721d4f48cdf/Screen_Shot_2022-01-27_at_12.08.13_AM.png)

You might also be wondering what the purpose of the "SwiftUI_BullseyeApp" file on the left side is. This file is basically an entry point for SwiftUI which means it will be the first file that will run and displayed in the simulator. In the picture below ContentView() is called since we'll mainly be working in that file and we want that file to be the first file displayed when running the simulator.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19020d7d-395b-42c6-aa0c-c8b56160c97f/Untitled.png)

# Part 1: Implementing the UI 🎨

## ****High Score and Current Level Labels****

Let's break down the UI into separate components starting with the "High Score" and "Current Level" labels on the top right and left corners.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef24f916-26c4-4a08-b1dd-4d6306a81f44/Untitled.png)

To implement this we'll be using a combination of HStacks and VStacks. An HStack is essentially a view that arranges any elements placed inside it in a horizontal order and a VStack is a view that arranges any elements placed inside it in a vertical order. Take a look at this example:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb54bb27-02a8-4981-bb57-764d6dd2c703/Untitled.png)

We have a VStack with two Text elements inside it. This would display the two "Hello World" texts stacked on top of each other:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de1f4345-da65-4ff5-a73b-00a9e9a191b7/Untitled.png)

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f10e6258-3fb4-4129-b46f-28d4ea653146/Untitled.png)

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc5078e5-e016-4b9e-857d-587eedf25ca3/Untitled.png)

All our elements are now perfectly aligned vertically and horizontally! Now we have to work on getting the correct spacing. We can use different tools like Spacer(), .padding(), and more but we'll be using Spacer() and .padding() for this. Spacer() essentially fills up as much space as possible in the specified direction. Take a look at this example:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfce893c-f790-4f9b-a527-b838794e5870/Untitled.png)

We added Spacer() in between the two VStack elements. What this would do is it would create as much space as possible between the two VStack elements horizontally. It occupies as much space as possible horizontally because it is within an HStack. If it was within a VStack it would occupy space vertically. This is what the app should look like with the Spacer():

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a3a6013-05c8-463d-b1e9-ae8ae649fe27/Untitled.png)

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/507a281e-cc9d-4a39-8d32-f189b8489d5d/Untitled.png)

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ad93be1-c1d2-4e58-b75d-67c774bb6bd9/Untitled.png)

Notice how there is clearly more space between the left side of the phone screen and the VStack. Now that you have all this information, try to add additional padding() to mimic the app below!

Hint: you can have multiple .padding() properties under an element for different sides

Ex: .padding(.leading, 20) and .padding(.top, 20)

Please add three additional .padding() properties!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21856235-d4a2-4ba9-a950-9e72931a3b92/Untitled.png)

## ****Other Components****

We've basically covered everything that's needed to complete the rest of the UI. I'll leave the rest of the UI to you but I'll cover any concepts that I haven't explained and I'll give a lot of hints along the way. I strongly believe in learning by doing and learning how to use SwiftUI will come from making mistakes and searching through Google!

Your app should look like this by the time you finish this homework

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/332f6a48-b1be-41ae-b05a-d08179ee48fb/Untitled.png)

Let's start by listing what additional components we'll need.

1. We'll need a Text element for "Move the slider to:"
2. We'll need a Text element for "25"
3. We'll need a Slider element
4. We'll need a Button element for "Check"
5. We'll need a Text element for "Exact Mode?"
6. We'll need a Toggle element

These elements are in order of how they should be coded and all of these elements are within the outermost VStack and below the last Spacer() we used.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b0ebc2f-aaa4-4aea-9f24-9751478fe475/Untitled.png)

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
