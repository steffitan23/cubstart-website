# HW5: Biography

# Introduction 👋

**Today we will be implementing the UI of a simple biography app that uses forms and sheets using SwiftUI!** This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. If you are confused, **referencing the lecture slides or demo may be helpful**! 

The core concept of this app is to create a biography page that will display different info about your chosen subject!

**Here is an example of the finished product:**

<video width="400" controls autoplay>
    <source src="/assets/hw5ios/hw5-vid1.mp4" type="video/mp4">
</video>

## Setup 🛠️

Pull the skeleton code using this command:

```markdown
git clone https://github.com/anhdo0413/cubstart-iOS-hw5.git
```

To open the project, open Xcode → Open a Project or File → Navigate to Biography.xcodeproj

# Part 1: Designing your Homepage

Let’s begin by navigating to part 1 where you will implement the UI of the homepage of your app! Remember, for each of your views/pages you always want to implement the UI in the **body** of your view.

# Part 1A - Design your Header!

In the body of your ContentView struct, begin designing your main page by add in some text and an image for the header. I highly encourage you to play around with the layout and visual of your app by adjusting the padding, colors, font weight/size, fonts, etc!

<img src="/assets/hw5ios/hw5-1.png" style="width: 60%; padding: 20px 0;"/>


S**tuck? Here are some hints:**

- Remember to use HStacks, VStacks, Spacers, and padding to create your layout
- Here is a good resource on text styling in SwiftUI!
    - [https://www.hackingwithswift.com/quick-start/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more](https://www.hackingwithswift.com/quick-start/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more)
- Here is a good resource on how to add images in SwiftUI!
    - [https://www.simpleswiftguide.com/swiftui-image-tutorial/](https://www.simpleswiftguide.com/swiftui-image-tutorial/)
    - Make sure you are uploading any images you want to use in the assets folder of your project!

******************************************Your app should now resemble the following:******************************************

<img src="/assets/hw5ios/hw5-2.png" style="width: 40%; height: 100%; padding: 20px 0;"/>

 

# Part 1B - Adding a Form

Good work designing your header! Now let’s add a form. But first, what exactly is a form is SwiftUI again?

Forms are scrolling lists of static controls like text and images, but can also include user interactive controls like text fields, toggle switches, buttons, and more. **In the case of our app we will be using buttons that trigger the opening of another sheet (a type of page)!**

You can implement a basic form by wrapping your contents inside Form, like this:

```swift
var body: some View {
    Form {
        Button("I'm a button") {

				}
            .padding()
    }
}
```

**Implement a form containing a minimum of 4 buttons that will link to a page with additional info on the subject of your app. You can leave the action brackets of your button blank for now.**

<img src="/assets/hw5ios/hw5-3.png" style="width: 60%; padding: 20px 0;"/>


******************************************Your app should now resemble the following:******************************************

<img src="/assets/hw5ios/hw5-4.png" style="width: 40%; height: 100%; padding: 20px 0;"/>

**Note:** Button text is automatically blue. I made it black by adding .foregroundColor(.black) to each button. Feel free to style your buttons to your hearts content <33

S**tuck? Here are some hints:**

- Helpful resource on forms
    - [https://blog.logrocket.com/building-forms-swiftui-comprehensive-guide/](https://blog.logrocket.com/building-forms-swiftui-comprehensive-guide/)

# Part 2: Creating a Sheet

# Part 2A: Creating our first Sheet

So… we have some buttons (yay) but they don’t yet do anything! Let’s begin solving that problem by creating some sheets for our button to display.

SwiftUI’s sheets are used to present new views over existing ones, while still allowing users to drag down to dismiss the new view when they are ready. Below is an example of a sheet view!

<img src="/assets/hw5ios/hw5-5.png" style="width: 40%; height: 100%; padding: 20px 0;"/>

To use a sheet you’d need to def it using a struct, give it something to show (some text, an image, a custom view, etc), add a Boolean that defines whether the detail view should be showing, then attach it to your main view (ContentView).

**Skeleton code has been provided to help you create your first sheet. Fill out the body of your first sheet with whatever content your heart desires!**

<img src="/assets/hw5ios/hw5-6.png" style="width: 60%; padding: 20px 0;"/>

**In your sheet be sure to include a back button that calls the dismiss() function (like my orange one in the ex above). This will make it so when that button is clicked, your sheet closes.**

# Part 2B: Sheet Functionality

Now that you’ve created a sheet, let’s link it to a button in the main ContentView. 

To do this, we will first be creating a boolean (true/false) variable in our ContentView struct that will track whether or not the sheet is being shown. Remember, all variables should be defined OUTSIDE of the body! You can do so with the following code:

```swift
@State private var showingSheet1 = false
```

As a reminder, @State is used to track the changing of the var value. The var is also declared as private since it shouldn’t be accessed outside our current struct.

**************Create a boolean variable *************showingSheet1*** **************(or whatever you want to call it) to track the view of your sheet.************** 

# Part 2C: Linking our button

Now that we have a boolean variable to toggle (turn on and off) let’s bring everything together by implementing the functionality of our buttons!

This part is super simple, simply call and toggle the boolean you just created in the action brackets of your button and add the following line to your button: 

```swift
.sheet(isPresented: $[INSERT BOOLEAN NAME]) {
                   [INSERT NAME OF VIEW]() }
```

**Here’s an example:**

<img src="/assets/hw5ios/hw5-7.png" style="width: 60%; padding: 20px 0;"/>

************************************************Implement the functionality of your first button by connecting the sheet you previously created and your boolean following the example above.************************************************

S**tuck? Here are some hints:**

- Helpful resource on sheets
    - [https://www.hackingwithswift.com/quick-start/swiftui/how-to-present-a-new-view-using-sheets](https://www.hackingwithswift.com/quick-start/swiftui/how-to-present-a-new-view-using-sheets)

Your app should now resemble the following: 

<video width="400" controls autoplay>
    <source src="/assets/hw5ios/hw5-vid2.mp4" type="video/mp4">
</video>

# Part 3 - Final Steps

Follow the steps above to create 3 more sheets and link them to your buttons! Once you complete this step your app will be complete. Feel free to have fun with the content and layout of each sheet you create and incorporate text, pictures, and more!


# Submission

To submit your homework, open your Finder and navigate to the directory that includes BOTH your homework folder and a "homework".xcodeproj file. Right click the folder (NOT the .xcodeproj file) and compress it. Upload your compressed file onto gradescope.

### Congrats on making it to the end of this week’s homework and completing a super cool app!! Feel free to come to lab if you have any questions <33 (attending will also grant you a hw checkoff) 