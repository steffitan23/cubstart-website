# HW3: Coffee Shop Menu

Track: iOS
Week: Week 3

# Introduction 👋

**Today we will be implementing the UI of a Coffee Shop Menu + price calculator using SwiftUI and some of its functionality!** This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. If you are confused, **referencing the lecture slides or demo may be helpful**! 

**To avoid unnecessary confusion and bugs, PLEASE READ THROUGH THE ENTIRE INSTRUCTIONS CAREFULLY WHEN COMPLETING THIS ASSIGNMENT :D**

The core concept of this app is to view menu items and calculate the total price you’d pay based on a select quantity of items!

**Here is an example of the finished product:**

<video width="400" controls autoplay>
    <source src="/assets/hw3ios/hw3demo.mp4" type="video/mp4">
</video>


## Setup 🛠️

Pull the skeleton code using this command:

```markdown
git clone https://github.com/anhdo0413/CoffeeShopMenu-HW.git
```

To open the project, open Xcode → Open a Project or File → Navigate to CoffeeShopMenu.xcodeproj

# Part 0: Opening the Project 📱

## What is SwiftUI?

SwiftUI is a recently developed framework that is still rapidly developing. It is used for building user interfaces for iOS, tvOS, etc. and is overall SUPER EASY TO USE!!!

## Initial Takeaways

<img src="/assets/hw3ios/hw3-1.png" style="width: 60%; padding: 20px 0;"/>

When you first open the project you should see “ContentView” (selected) on the left navigation bar of your screen and the preview on the right side of your screen. Let’s quickly break this down (ignore commented code for now)!

For most single screen applications we will mainly be working with the “ContentView” file. When working with SwiftUI we must always import the SwiftUI framework at the top of the file:

<img src="/assets/hw3ios/hw3-2.png" style="width: 60%; padding: 20px 0;"/>


For any view we work with in SwiftUI, any UI elements are contained within “var body: some View {}” to the create the body. After that, everything else + the body is wrapped within **“**struct *ViewName*: View {}**”** (in this case our ViewName is ContentView):

```markdown
struct ViewName: View {

		// You would initialize variables, functions, etc. here

    var body: some View {
		    // all UI elements here
		}
}
```

**Now you might be wondering what in the world is (at the bottom of the file):**

<img src="/assets/hw3ios/hw3-3.png" style="width: 60%; padding: 20px 0;"/>

As it says in the above comment, this is basically SwiftUI’s way of allowing us to view the UI **as we’re typing in code** without having to run it on a simulator (like in the example screenshot below).

<img src="/assets/hw3ios/hw3-4.png" style="width: 60%; padding: 20px 0;"/>

The preview on the right hand side will automatically be updated as we add in code! In this course however, we won’t be relying on the preview functionality to run our code and will instead continue to run it on the simulator. You can use the preview functionality if you want but be careful because it can lag and display the wrong UI in some cases and generally isn’t as reliable as the simulator. Feel free to delete or comment out the code.

**Now, navigate to the “CoffeeShopMenuApp” file using the left side navigation bar.**

<img src="/assets/hw3ios/hw3-5.png" style="width: 60%; padding: 20px 0;"/>

You might be wondering what the purpose of this file is! This file is basically an entry point for SwiftUI meaning it will be the **first file** that will run and be displayed in the simulator. In the picture below, ContentView() (highlighted) is called since we'll mainly be working in that file and we want that file to be the first file displayed.

<img src="/assets/hw3ios/hw3-6.png" style="width: 60%; padding: 20px 0;"/>

# Part 1: Creating our Class

**Note that your starting file will have errors and will not compile! Don’t worry, we’ll resolve those as we code and complete the app, it’s mainly due to incomplete brackets because of commented started code.**

Let’s begin by navigating to part 1 where you will complete the **Coffee** class! 

As a reminder, classes are general-purpose, flexible constructs that become the building blocks of your code. They may contain:

**Instance Variable(s) -** A class property that can be different for each object. You create an instance variable by declaring it in the class definition (top of class, outside of methods).

**Constructor** - A special function of a class executed whenever we **create new objects** of that class. A constructor will have exact same name as the class and no return type.

**Method(s) -** A a block of code or function that only runs when it is called. You can pass in and use data, known as parameters.

## Part 1A - Writing the class

In this case, our Coffee class will allow us to create different drinks or menu items to display on our app. **Fill in the blanks below and complete the class constructor. Uncomment the section when you are done!**

<img src="/assets/hw3ios/hw3-7.png" style="width: 60%; padding: 20px 0;"/>

**Stuck? Here are some hints:**

- Look back at the final project example above. What values/data types do you see? How do you think those correspond to the given instance variables of the Coffee Class?
- Notice the class is an ObservableObject. For instance variables that change often where we may want to track and refresh/update views (COUGH quantity COUGH COUGH) what property wrapper might we add to the beginning?
- How were the itemNum and drinkName vars initialized? Make sure to initialize all necessary variables!
- You can set default values in the constructor! Of the variables, which one must have a default value.

 

## Part 1B - Instantiating Objects

Good work creating the class! Next, let’s add some menu items by actually creating some Coffee class objects. Navigate to the ContentView struct where we’ll create our menu items. There should be a comment showing you where to add your code. Remember, objects should be created WITHIN the ContentView but OUTSIDE the body.

**Create four instances of the Coffee class (four new menu items) inside the ContentView Struct (but not in the body!!).**

**Stuck? Here are some hints:**

- How do you instantiate objects in SwiftUI? Look back at your constructor! An example is also given in the slides :)
- What property wrapper is needed in the beginning of the line when you initialize objects in a view? It’s similar to @State but for objects!

# Part 2: Implementing our UI

## Part 2A: Creating our Coffee List

In order to display our Coffee objects or menu items, we will be creating a list that holds all of the items and looping through each list item using a For Loop to display them in the view (For each menu item → display whatever text!).

Unfortunately, because the menu items are StateObjects (objects that frequently change!), we cannot directly add them to a list as they will NOT ACTUALLY be created until the body is run meaning we can’t directly add them to our coffee list outside of the body (they don’t exist yet!!).  

As a workaround we can **create an empty list** and a **helper function that will add all menu items to the list** when called. This helper function (in our case titled addListItems()) will be called at the beginning of the body.

*If this is a little confusing don’t worry, it’s not super important to your learning of SwiftUI but feel free to come to lab and ask some questions!*

**Start by uncommenting the section under the Part2A comment. Your screen should now look like this:**

<img src="/assets/hw3ios/hw3-8.png" style="width: 60%; padding: 20px 0;"/>


The creation of the empty list and skeleton for your helper function is already provided. Notice the “@State” tag added to coffeeList. This needs to be included since the value of coffeeList will be changed later on as your objects are added. 

**Implement the addListItems() helper function by adding the four Coffee objects you created to the provided coffeeList.**

To call the helper function when the body is run, we used .onAppear() on the **outer VStack** of the body**.** .onAppear performs an action when a value is displayed. 

**This code is already provided, navigate to the bottom of the outer VStack and uncomment the .onAppear line.** 

<img src="/assets/hw3ios/hw3-9.png" style="width: 60%; padding: 20px 0;"/>

Now, when our body is run an the first VStack is displayed, addListItems will be called and our coffeeList will contain all our menu items!

## Part 2B : Displaying our Menu Items

Now that we have a list containing all our items, we can display them with a for loop! This section of the homework relies heavily on the use of HStacks, VStacks, Spacer(), and .padding(). Though the structure is provided, you should be familiar with each of these things and their functionality to understand how our display works.

<img src="/assets/hw3ios/hw3-10.png" style="width: 60%; padding: 20px 0;"/>

**Understanding the code**

<img src="/assets/hw3ios/hw3-11.png" style="width: 60%; padding: 20px 0;"/>

Our ForEach loop loops from the items in coffeeList (done by typing coffeeList as a parameter). The **i in** text at the top allows us to access each object in the list, essentially it says “for i in coffee list”.

Next we have an HStack and a VStack. Let’s first focus on the contents of the VStack. This VStack will display the values each menu item like so. 

<img src="/assets/hw3ios/hw3-12.png" style="width: 60%; padding: 20px 0;"/>

In the VStack we have a var (formattedPrice) and two texts. Like specified in the comments, each text will either display a line with the itemNum and drinkName or drinkType and Price.

**Fill out the VStack by filling in the blank of all four [INSERTS] to access the appropriate value of each object. Uncomment the code when you’re done.**

Below that VStack is a second VStack that will display the item quantity.

<img src="/assets/hw3ios/hw3-13.png" style="width: 60%; padding: 20px 0;"/>

**Fill out the second VStack by filling in the blank to display the quantity of each object. Uncomment the code when you’re done.**

**Hint**

- In the for loop we are going through and accessing each object as **i**
- You can access the instance variables with dot notation

## Part 2C: Adding a Title and Headers

Now that we have some items displayed, we need a menu title! 

**Edit the title and add subtitle at the top of the app using Text().**

Make sure you are adding it here:

<img src="/assets/hw3ios/hw3-14.png" style="width: 60%; padding: 20px 0;"/>

Feel free to customize the text by changing the font size, color, weight, and more! You may need to play around with .padding() for a nice and even display.

**Next let’s add our headers.** A second VStack and HStack has been provided. Looking at the final proj example, you should have two headers, “Drink Name” and “Quantity”. 

**Add a “Drink Name” and “Quantity” header in the HStack!**

<img src="/assets/hw3ios/hw3-15.png" style="width: 60%; padding: 20px 0;"/>

**Hints**

- You will need to use Spacer()
- You will need .padding to adjust the spacing between the headers

**So far you should have implemented the following in your app!** 

<img src="/assets/hw3ios/hw3-16.png" style="width: 60%; padding: 20px 0;"/>

# Part 3: Price Calculation

## Part 3A: Increment and Decrement Buttons

We want our app to be able to calculate the total price of items based on their quantities. So far your displayed quantity should be 0! Let’s add some buttons to decrease and increase the quantity for each menu item and display the updated quantity.

Below is the given code for the **Decrement button.** In the body, navigate to part 3 and uncomment the decrement button code. Ignore the 3C comment, we’ll get to that soon!

<img src="/assets/hw3ios/hw3-17.png" style="width: 60%; padding: 20px 0;"/>

Let’s break it down! In the given code we have a button. **Buttons in SwiftUI take in 2 parameters, the displayed string and an action.**

- The first parameter passed into the button is a string containing whatever we want the button to display in the view. In this case, since it is a decrement button we want it to be a “-” minus sign.
- The second parameter passed into the button is an action we want performed when the button is clicked. In this case, our button will decrease the instance objects by 1 (remember we are operating through a for loop where each list item, a Coffee object, is represented by i). Because we can’t order a negative quantity of drink, we included an if statement!

**Add an Increment Button to our app in the specified location. The implementation will be VERY similar to the given decrement implementation above!**

The button should be implemented under the follow comment. This comment can be found in the body below the Part 2B quantity display VStack.

<img src="/assets/hw3ios/hw3-18.png" style="width: 60%; padding: 20px 0;"/>

## Part 3B: “Calculate Total Price” Variables

Now that we are able to change the quantity of different menu items, let’s add a button that will calculate and display the total price!

**To do this, we need to create a few new variables.**

<img src="/assets/hw3ios/hw3-19.png" style="width: 60%; padding: 20px 0;"/>

- **totalPrice** is a Double that will store the value of the total price based on each object’s quantity. This variable will not actually be displayed since it will be automatically updated as quantities are changed. We only want out displayed price to update when clicked!
- **************************currentPrice************************** is a Double that will actually be displayed in our app. It will update to the totalPrice each time the “Calculate Total Price” button is displayed, showing the user their calculated value after incrementing or decrementing quantities.
- **showPrice** is a Bool (SwiftUI’s Boolean) that will tell us whether or not to show the price. When the app is first run, we don’t want any price to be shown since the user hasn’t yet clicked “Calculate Total Price”. Knowing this, what should we initialize the var to true or false?

**Fill in the property wrapper blank and data blank for each new variable.**

**Hint**

- The property wrapper is the same for all 3 variables. What property wrapper is used for variables that frequently change?

## Part 3C: Updating Total Price

Now that we have a totalPrice variable, it needs to be updated! The totalPrice variable should be updated when the quantity is changed, aka in the decrement and increment buttons.

**Add code to your decrement and increment button’s action (made in part 3A) that will either add the value of the items price to totalPrice or subtract it.**

**Hints**

- Your implementation should only be one line in each button.
- Make sure to update the total price in for BOTH the increment and decrement button.

## Part 3D: “Calculate Total Price” Button Helper Function

To implement our “Calculate Total Price” button functionality we’ve provided a helper function, updateCurrentPrice(). Because the totalPrice var is constantly being updated as the increment and decrement buttons are pressed, we don’t want to display this value in our view and instead will display the currentPrice var.

Each time the “Calculate Total Price” button is clicked, our helper function will be called. The helper function will update the currentPrice by setting it equal to totalPrice. For the user, this will look like their total price is being calculated and shown each time they press the calculate button (when in reality the currentPrice var is just being updated to match the accurate totalPrice).

<img src="/assets/hw3ios/hw3-20.png" style="width: 60%; padding: 20px 0;"/>

**Uncomment the helper function shown above (right outside and above the body view).**

## Part 3E: “Calculate Total Price” Button Implementation

It’s finally time to add in our actual “Calculate Total Price” button! In the provided started code we have a VStack with 3 main components.

- The first is our actual **button**! You will need to implement the functionality of the button in the action brackets. Our button should update currentPrice (think about how we can do this? is there any function we implemented that would help??) and make sure our price is visible (what variables have we created that will help us achieve this?)
- Next, we formatted our currentPrice Double to 2 decimals and stored the value in *formattedTotalPrice*
- Finally, we have our currentPrice Display which should also show when the showPrice var is true!
    
	<img src="/assets/hw3ios/hw3-21.png" style="width: 60%; padding: 20px 0;"/>

    

**Implement the functionality of the button (right now it’s action is empty) and update the empty Text() to display the total price when showPrice is true! Uncomment the section when you are done.**

**Hint**

- Right now showPrice should be instantiated as **false**. When should it be changed to true to display the currentPrice?

# Part 4: Customization 🎨

Your app should now be fully functioning. YAYY GREAT JOB!!! Now it’s time to customize your menu to your hearts content. Play around with font sizes, pictures, colors, types, the name of your cafe, the design of your buttons, whatever you want!  menu should NOT look identical to the example one!

### Congrats on making it to the end of this week’s homework and completing a super cool app!! Feel free to come to lab if you have any questions (attending will also grant you a hw checkoff) <33

# Submission:

To submit your homework, open your Finder and navigate to the directory that includes BOTH your homework folder and a "homework".xcodeproj file like so:

<img width="778" alt="hw2submission" src="https://user-images.githubusercontent.com/64179036/218925267-bfb302f2-ef95-423c-950d-ce514af06c64.png">

Right click the folder (NOT the .xcodeproj file) and compress it. Upload your compressed file onto gradescope for HW 3.