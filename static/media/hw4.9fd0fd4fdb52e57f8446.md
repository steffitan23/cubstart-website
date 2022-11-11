## Waitlist Helper
# Introduction👋

Hello Hello! It’s Week 4 of Cubstart. Wooooo! Congrats for making it this far. Halfway point of homework :)). Hope you’ve been having fun and are learning a lot this semester. This week, your HW will be focusing creating multiple pages/screens in SwiftUI and navigating them with Swift. We will be mainly utilizing Navigation Views and Tab Views. The project we will be building is called Waitlist Helper. It will allow the user to input a waitlist position and class size, and then display a percentage chance of them getting into the class!

## Setup🛠

For this project, you will be using some skeleton code that I wrote up to get you started. The file is pretty blank but the assets you need are there and the general setup is made for you. Don’t worry, like all homework, I’ll walk you through the entire project!

```jsx
git clone https://github.com/jy73/waitlisthelper-skeleton
```

# Part 1: Concept Review

No real tasks here. Just give this a read real fast to review concepts from last lecture!

## NavigationView & NavigationLink

*From Apple’s official documentation...*

**NavigationView** - A view for presenting a stack of views that represents a visible path in a navigation hierarchy

```swift
struct NavigationView<Content> where Content : View
```

A NavigationView essentially allows you to push a view on top of another via some sort of action. This is often used for any sort of cause-effect relationship. In the case of this project, we will use NavigationView to navigate from the page where the user inputs in values to the page that displays the calculation results.

**NavigationLink** - A view that controls a navigation presentation

```swift
struct NavigationLink<Label, Destination> where Label : View, Destination : View
```

The NavigationLink is the actual code that controls the NavigationView. Using the NavigationLink gives you the ability to customize when and where the page changes, as well as how the transition is triggered.

## TabView & TabItem

*From Apple’s official documentation...*

**TabView** - A view that switches between multiple child views using interactive user interface elements

```swift
struct TabView<SelectionValue, Content> where Selection Value: Hashable, Content : View
```

The TabView is used to create a TabBar at the bottom of the screen and easily navigate to other views that may be more stand alone from each other.

**tabItem(_:)** - Sets the tab bar item associated with this view

Tab Items are the actual icons in the tab bar that are tapped on to switch the views

# Part 2: Main Page UI

Time to get coding! Okay, let’s open up that skeleton code and make your way over to ContentView. All the code we will be doing will be in here. I have marked the general spots where your code should be so just follow the numbers and you’ll be just fine.

Before we get into the nitty gritty of NavigationViews, TabViews, and Swift functionality, we need to build the UI! As you can see, I’ve provided you with a blank slate :)). It's your job to change that.

*NOTE: I will add in “.padding” a lot in the solution/guidance code I provide. This just adds a little more space between elements and makes things look a little cleaner.* 

## Task 1: App Background + Header

First up, we have to make a background and header! As always, I will provide screenshots of my end result so you know what you are aiming for.

![image](https://user-images.githubusercontent.com/71753465/194472863-ec576345-b4bd-4be1-8270-4d161b086c96.png)

### Custom App Background

The following code should point you in the right direction! We have provided you with the custom background already in the Assets folder. It is your job to figure out how to fill in the following code to **insert the custom background ****and **fill the entire area of the screen.**

```swift
Image(...)
	.resizeable()
	.aspectRatio(contentMode: .fill)
	....
```

### Header

Nothing complicated here! Add in the text **“WILL YOU GET OFF THE WAITLIST”.** However, I want you to follow these **parameters**:

- largeTitle font
- bolded
- black text
- padding

**A quick sanity check as well:** 

Make sure you understand why we have a VStack inside of the ZStack and why the background code is not in the VStack but above it. What would happen if these were flipped??

## Task 2: Accepting and Displaying User Input

In this section, we will be adding in the Sliders and code functionality for displaying the changing inputs in real time!

![image](https://user-images.githubusercontent.com/71753465/194472924-5a07cd15-e810-4747-a85f-5a9c9b11a2d0.png)


### Sliders

In all honesty, sliders are not the greatest tool for this app. It would be more convenient to simply have a text box, but for the sake of LEARNING, we are going to use sliders!

The basic code for a slider is as follows: 

```swift
Slider(value: ... , in: ... , step: ... )
	.padding
	
```

For this project, we want **2 Sliders**. 

1. Slider 1 will be for the place on the waitlist input. It will store the value of the waitlist place and have max value of 200.
2. Slider 2 will be for the class size. It will store the value of the class size and have a max value of 1000.

**Things to Keep In Mind:**

- Take a look at what variables have been provided (HINT: Use the ‘$’ in front of any variable you write in for value in the slider)
- What would the step size be in this situation?

### Displaying the Slider Values

Now we want to be able to display the value of the sliders as the user moves them so that the user knows when to stop! Otherwise, they are just guessing what number they are inputting.

In this case, we want text for each slider. Here is a little hint at to what the code should look like:

```swift
Text(" ... : \( ... , specifier: "%.f")")
```

You need to fill in the “...” with the appropriate text and values for each slider. Refer to your slider code for help!

Make sure to check that your sliders are working and mess around with different values to see if they are displayed correctly as you move the slider!

**HEY! Now that you have added in these UI elements, I want you to go back and use modifiers to customize your project. This may be messing around with font colors, overlays, etc. It’s boring to use default settings so have some fun with this!** 

## Task 3: Custom Button

Time for a little fun! I want you to customize your calculate button! You will do this using the buttonStyle modifier (which is already written in for you). For this part, scroll down to the CustomButton struct and modify the configuration.label tag. **Please take some time to Google button modifiers and come up with a creative look to your button! Maybe even try making it do something different when tapped!**

![image](https://user-images.githubusercontent.com/71753465/194473010-eb22811e-407c-4c93-b864-d52b38a111b7.png)


My button gets larger when it is tapped! Unfortunately, I am not sure how to make gif so you’ll just have to believe me :))

When all the UI is completed, it should look a little something like this:

![image](https://user-images.githubusercontent.com/71753465/194473035-c5c393a0-47bb-4b90-ad58-8e86070ce4ff.png)


# Part 3: NavigationView

Alright, alright, time to knock out this NavigationView! When you finish this section, you will have built out the two main views and will be able to navigate between the two with a push of a button. No pressure!

## Task 1: NavigationView & NavigationBar

This should be fairly obvious, but you can’t navigate anywhere without declaring a NavigationView! **Let’s wrap the ZStack in a NavigationView first!**

![image](https://user-images.githubusercontent.com/71753465/194473068-abb86b5b-9085-4271-ad77-e2717e98628e.png)


No visual changes will show up from this! But here’s DDoski working alongside you. A quick note, I did already code in the following:

```swift
.navigationBarTitle("")
.navigationBarHidden(true)
```

This essentially just makes it so there is no Navigation Bar Title or Bar. If I changed the code to the following, the view would look like this:

```swift
.navigationBarTitle("HOME")
```

![image](https://user-images.githubusercontent.com/71753465/194473185-1f2fdad8-7d46-43f2-ac00-e6577283a102.png)


Notice how the title shows up at the top now and all the text gets pushed down to make room for the Navigation Bar.

## Task 2: NavigationLink

With the NavigationView, nothing much happens. We ultimately need the NavigationLink to make the magic happen! There are many ways that you can implement a NavigationLink. The most common and basic one:

```swift
NavigationLink(destination: ResultView()) {
                Text("Tap Me")
            }
```

This one would simply display a button “Tap Me” that when pressed would push the ResultView into place. The ResultView would have a back button as well to go back to the original view.

In our case, we want to do this a little more programmatically so we can utilize the nice custom button we created earlier. Uncomment the following code in the file to get your navigation link going.

```swift
NavigationLink(destination: ResultView(prob: $probability, 
feedback: $text), isActive: $calculate) { EmptyView() } 
.padding()
```

This code essentially does three things when the variable calculate is set to true (done when the calculate button is clicked):

1. Transitions to the ResultView
2. Binds the probability variable to the prob variable in ResultView and the text variable to the feedback variable in ResultView (You will learn about bindings in a couple weeks. Pretty much we are just sending values from view to view)
3. Does not bring any element into the UI (EmptyView()) so that we can control this link with a button of our own instead


<video width="400" controls autoplay>
    <source src="https://user-images.githubusercontent.com/71753465/194473697-a62d0436-f447-4b90-ac13-65b3e6bf3474.mov" type="video/mp4">
</video>


This is what you should be able to do! We have already provided the UI for ResultView.

## Task 3: Custom Back Button

The NavigationView and Link provide you with a basic default back button that works just fine, but in my opinion, it is much more fun to have a custom back button! So, real quick, I’ll walk you through making your own. 

1. First, we must set up the environment and put the view into presentation mode. You will go more in depth on this when you get to bindings, but essentially what we are doing is making it so a button can programmatically “dismiss” the current view and default to the home view. Uncomment this code at the top of ResultView:
    
    ```swift
    @Environment(\.presentationMode) var presentation: Binding<PresentationMode>
    ```
    
2. Next, we need to create the actual button to perform the action. Create a button within the HStack provided. The code should be as follows:
    
    ```swift
    Button(action: {
                    self.presentation.wrappedValue.dismiss()
                  }) {
                  Image(systemName: "arrow.left")
                      .foregroundColor(.white)
                  }
                  .navigationBarHidden(true)
    ```
    

**This is all you need! Currently, I have here a simple white arrow as the custom back button but I invite you to customize this yourself and mess around with other looks. And with that, we have completed the UI Navigation part of this project! Good job :))**


<video width="400" controls autoplay>
    <source src="https://user-images.githubusercontent.com/71753465/194473385-eb2b4707-dc97-4c48-944a-e2c672948908.mov" type="video/mp4">
</video>


# Part 4: Calculation Functionality

Now that we have a UI, it’s time to work on making this app actually function. Our goal here is to be able to accept inputs of class size and waitlist place, and then spit out the percentage chance the user will get into their class

## Task 1: calculateProbability

Head on over to the calculateProbability function and fill in with the following:

For our calculation, we are using the following very simple (and almost certainly inaccurate) function to calculate the probability of getting off the waitlist as a function of the current waitlist position and the total size of the course. The following equation describes how we will be calculating probability. $p$ is the waitlist position, $s$ is the size of the class, and $P$ is the probability that the user gets off the waitlist.

$$
P(p, s) = \begin{cases}    
100\%,& \text{if } p\leq 0.1s\\    
0\%, & \text{if } p > 0.2s \\    100\% - \frac{p - 0.1s}{0.1s}, & \text{otherwise}
\end{cases}
$$

**HINT: Use the given variables in ContentView to figure out what variables you might want to use in your equation**

```swift
func calculateProbability(waitlistPlace: Int, classSize: Int) {
        let tenth = classSize / 10
        if  (waitlistPlace <= tenth) {
            probability = 100
        } else if (waitlistPlace > tenth * 2) {
            probability = 0
        } else {
            probability = 100 - Int(((Float(waitlistPlace - tenth) / Float(tenth))*100))
        }
        
    }
```

Once you have done this, you are going to want to call calculateProbability when the calculate button is pressed. Think about where and how you would do this...

**CONGRATS! Your app is fully functioning now and should look a little something like this:**


<video width="400" controls autoplay>
    <source src="https://user-images.githubusercontent.com/71753465/194473460-647ae76b-62e1-486f-933d-9cab86743e3b.mov" type="video/mp4">
</video>



NOTE: Try plugging in the same numbers and make sure you get the same results before continuing on!

# Part 5: TabView

Last part! For the sake of learning and fun, we are also going to implement a TabView in Waitlist Helper. 

## Task 1: TabView

1. First, let’s create the actual TabView. You are going to want to wrap the original ZStack in the TabView but keep the TabView within the NavigationView. This is to not mess up the formatting of our UI elements.
2. After creating the TabView, not much will have changed because we have yet to declare Tab Items. To do this, uncomment the following:
    
    ```swift
    .tabItem{
              Image(systemName: "house.fill")
              Text("Home")
          }
    ```
    
    This creates a tab item within the Tab Bar. It’ll look like this:
    

![image](https://user-images.githubusercontent.com/71753465/194473527-7a544e35-ee64-4dac-be6c-917ccc5fc8b7.png)

## Task 2: DIY View

Your final task is to create your own view and TabItem! Come up with something different and fun that you think would add something to this app. Give it it’s own tab bar item as well.

**You will do this within the content view after the “tab item” code you just put in. This spot is marked in the file. To give you some inspiration, I have provided the code I wrote for my DIY View below as well as a video showing how the Tab Bar should work! Good Luck. Happy Coding!**


```swift
//DIY VIEW GOES HERE//
ZStack {
    Image("calculate_background")
        .resizable()
        .aspectRatio(contentMode: .fill)
        .ignoresSafeArea()
    VStack {
        HStack {
            Text("MY \nCLASSES")
                .font(.system(size: 40, weight: .bold))
                .foregroundColor(Color.black)
                .padding()
            Spacer()
        } .padding()

        Spacer()
        }

}
    .tabItem {
        Image(systemName: "person.crop.circle")
        Text("Profile")
    }
```


<video width="400" controls autoplay>
    <source src="https://user-images.githubusercontent.com/71753465/194473697-a62d0436-f447-4b90-ac13-65b3e6bf3474.mov" type="video/mp4">
</video>

# Submission:

To submit your homework. Go back to your terminal and navigate to your “Cubstart-iOS” directory using these commands:

```swift
cd Desktop
cd Cubstart-iOS
```

Then type in these commands to push your code onto your personal repository:

```swift
git add .
git commit -m "completed homework 3"
git push
```

You can also type `git status` to verify which files you are pushing.

Upload your code onto gradescope for HW 4 like so. Choose your personal repository we created in the beginning of the homework under “repository” and choose “main/master” under branch.

![image](https://user-images.githubusercontent.com/64179036/191868700-7a68570a-bf24-403a-9fbf-89dc57cf9d1b.png)

