# HW2: Bullseye with Storyboard

# Introduction 👋

**Today we will be implementing the logic of Bullseye!** This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. For this homework we have implemented the UI for you using storyboards so you can focus solely on practicing swift.

The core concept of it is that given a random number, you will try to move the slider to match the number, and the application will tell you if you're right or even close!

Here is an example of the finished product:

[Screen Recording 2022-01-23 at 3.04.09 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b663e6f2-3f69-4c5c-957f-6e1a19eec253/Screen_Recording_2022-01-23_at_3.04.09_AM.mov)

## Setup 🛠️

Throughout this course you will be pulling skeleton code from our github repos. To pull the skeleton code for bullseye, type this command below into your terminal on the directory you want the folder in.

```markdown
git clone https://github.com/tonyhong007/bullseye_with_storyboard-skeleton
```

To open the project, open Xcode → Open a Project or File → Navigate to Bullseye

### Creating a Project

If you ever want to set up your own project first Open Xcode → Create a new Xcode project → App

Here are the new project options:

![Screen Shot 2022-01-10 at 12.49.54 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/43fc9d6b-4641-4547-8ca4-da28e9fb7c1d/Screen_Shot_2022-01-10_at_12.49.54_PM.png)

This might change depending on the project you are working on but generally these options will do when working with SwiftUI. Feel free to place the project wherever you like; then click create! 

# Part 1: Getting Started 📱

## What are Storyboards?

A storyboard is a visual representation of the UI of an app. As a developer you are able to manually place different elements of the app using “drag and drop” to build the UI.

![Screen Shot 2022-01-13 at 8.38.38 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5302a2fa-1557-4664-8f9f-5e31bdc93330/Screen_Shot_2022-01-13_at_8.38.38_PM.png)

In this course we will not be directly working with storyboards and will be working with SwiftUI instead. If you ever want to use storyboards you can change the “interface” setting to “storyboard” when creating a new project.

![Screen Shot 2022-01-13 at 8.43.23 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb5c3845-c1db-44e7-8c1d-82e3b4a669cd/Screen_Shot_2022-01-13_at_8.43.23_PM.png)

## Why SwiftUI?

Although storyboards are intuitive when creating simple applications, storyboards become difficult to use when creating modern applications and it is in most cases more intuitive to use SwiftUI. SwiftUI is also becoming more and more popular in industry while storyboards are slowly becoming outdated. 

## What are IBActions and IBOutlets?

IBActions and IBOutlets result from connecting elements from a storyboard to actual code. For example, IBActions for buttons can be modified to perform a certain action when the button is tapped and IBOutlets for labels (text) can be modified to change how a piece of text appears on the screen. All IBActions and IBOutlets will be initialized for you. We would never use this with SwiftUI, but it is useful to know!

This is how the IBActions and IBOutlets for this homework were initialized using Ctrl + click + drag

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c256f212-6093-430f-b5ab-11adab8e42cb/2connecting.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c256f212-6093-430f-b5ab-11adab8e42cb/2connecting.mov)

## [OPTIONAL] Implementing the UI

### Adding the Elements”

You may read through this section if you are interested in seeing how the UI was implemented, but this section is purely optional!

First, navigate to “Main”. Then add a label, a button, and a slider! 

You can either press the + button at the top right or use the shortcut Cmd+Shift+L to search for the elements.

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/836a9828-90eb-4df6-8d93-afcc476514c1/1addingobjects.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/836a9828-90eb-4df6-8d93-afcc476514c1/1addingobjects.mov)

### Connecting to the View Controller

To connect the elements to your controller, Ctrl click from elements in “Main” to your View controller text file. I added the following:

Label as an Outlet: `numLabel`

Button as an Action: `checkValue`

Slider as an Outlet: `numSlider`

Slider as an Action: `sliderValueChanged`

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c256f212-6093-430f-b5ab-11adab8e42cb/2connecting.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c256f212-6093-430f-b5ab-11adab8e42cb/2connecting.mov)

If you mess up, don't fret! You can click the element, and under the connections inspector, you are able to delete and redo any messed up connections!

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c079760b-5b0e-45a5-89c5-5d364ce5face/fix.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c079760b-5b0e-45a5-89c5-5d364ce5face/fix.mp4)

### The Slider

Let's try out the slider! If you run the build after inputting the code below (Cmd R).

```markdown
@IBAction func sliderValueChanged(_ sender: Any) {
        print(numSlider.value)
    }
```

You will see the values between 0 and 1 printed in your terminal...that's not what we want.

Click on the slider element and you can change the range of values:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1229c2b5-f653-4daa-970f-7fc41712a763/Screen_Shot_2020-08-17_at_4.56.36_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1229c2b5-f653-4daa-970f-7fc41712a763/Screen_Shot_2020-08-17_at_4.56.36_PM.png)

Value represents where the slider circle begins, and min and max represent the smallest and largest values possible for the slider.

If we run again, we see the values are between 1 and 100 but are decimals! How do we fix this? 

**Fix + String Interpolation**

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d291254-b7e9-49f3-8b90-3738ef2d9cb1/stringinterp2.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d291254-b7e9-49f3-8b90-3738ef2d9cb1/stringinterp2.mov)

Try running again and...Yay! now our slider should be working

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9894e75-e9bb-47d1-9441-283eab3608e7/3sliderworking.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9894e75-e9bb-47d1-9441-283eab3608e7/3sliderworking.mov)

### Adding the Switch

With only these components it is very hard to get a bullseye.

That is why we will add an exact switch! If the exact game mode is off, then we will have a range that is ±x where x is an integer so it will be a little easier to get a bullseye!

First, let's add a switch:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7aadcdd-1429-46d9-8cf7-4d527f28887d/Screen_Shot_2020-08-17_at_5.43.16_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7aadcdd-1429-46d9-8cf7-4d527f28887d/Screen_Shot_2020-08-17_at_5.43.16_PM.png)

I placed the switch at the bottom of the screen along with a label above it just to let users know what it does.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/231aa012-d5d6-4022-adba-b4a6af6b1dc2/Screen_Shot_2020-08-17_at_5.46.20_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/231aa012-d5d6-4022-adba-b4a6af6b1dc2/Screen_Shot_2020-08-17_at_5.46.20_PM.png)

…and turn it off for now

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5217af1-daee-4455-b9c2-7d54c46a17f5/Screen_Shot_2020-08-17_at_5.47.31_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5217af1-daee-4455-b9c2-7d54c46a17f5/Screen_Shot_2020-08-17_at_5.47.31_PM.png)

Then create an IB outlet called exactSwitch for it. We set it as an outlet and not an action, because the "Check?" button will check the property of the switch to see if it is on or off.

### **Other Labels**

The “High Score”, “Current Level”, and “Result Label” labels were added and connected to the code using the same method as shown above. The UI of the code when run should initially look like this except “Result Label” will be invisible on your screen and you will see why soon!

![Screen Shot 2022-01-18 at 6.47.08 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01b37bd8-61a2-47e5-9fad-61b3a635ecbf/Screen_Shot_2022-01-18_at_6.47.08_PM.png)

That concludes the UI for this homework!

# Part 2: Adding the Logic 🔢

First, navigate to “Main” to view the storyboard. All of the UI should be completed and should appear as shown except for “Result Label”:

![Screen Shot 2022-01-21 at 2.24.17 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ea61b6c-f5bf-4e1c-8392-1ead10d3b5a1/Screen_Shot_2022-01-21_at_2.24.17_AM.png)

Note that “Result Label” will be invisible (empty text) on your screen. This was purposely done and you will see why soon!

Remember, the core concept of Bullseye is that given a random number, you're supposed to move the slider to try to match the number, and the application will tell you if you're right!

**NOTE:**

Please run the code on the iPhone 12 Pro **ONLY.** This is because of spacing issues which we will learn how to cover in future homeworks / lectures.

## Exercise 2A: Random Number

At the top under your IB outlets, go ahead and add a random number variable; this will be the value we try to match on the slider.

```markdown
//at the very top after UIKit
import Foundation
```

```markdown
var randomNumber = 0

override func viewDidLoad() {
        super.viewDidLoad()
        randomNumber = Int(arc4random_uniform(101))
				numLabel.text = String(randomNumber)
}
```

Imported from Foundation, arc4random gives us a decimal number *under* 101, and wrapping it in Int converts it to an integer by rounding down to the nearest whole number, similar to the rounding we did to the slider number. We then set the random number in our viewDidLoad function.

*Notice how we used string interpolation to evaluate randomNumber within the text!*

- Why is `var randomNumber = 0` outside the function block rather than inside it?
    
    This has to do with a concept called scoping. By declaring the variable outside `viewDidLoad()`, other functions are able to access and modify `randomNumber` as well. If `randomNumber` were declared inside of `viewDidLoad()`, the variable would not be accessible inside other functions. You can read more about scoping [here](https://learnappmaking.com/scope-context-swift-how-to/)! If you're in CS 61A or CS 88,  [environment diagrams](http://composingprograms.com/pages/13-defining-new-functions.html#environments) go into this in depth.
    

Your application should now look like this:

[Screen Recording 2022-01-21 at 1.44.28 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3548b3a8-8702-497d-828a-b005777b5efc/Screen_Recording_2022-01-21_at_1.44.28_AM.mov)

We do not need the view to update when moving the slider, so go ahead and remove the code from sliderValueChanged.

## Exercise 2B: The Check Button

This is when we will begin to use the IB action function, checkValue.

Our goal is to check if the randomNumber we generated is equal to the number of the slider, and if the number matches, we will have a label that says "Bullseye!"

*I will begin to write in pseudocode, because you have all the knowledge you need to write this :) Practice makes progress!*

```markdown
@IBAction func checkValue(_ sender: Any) {
				write your if statement here {
						...
        }
    }
```

*Hint: make sure to round your numSlider value to an integer!*

*Hint2: to compare two values you can use ==*

```markdown
@IBAction func checkValue(_ sender: Any) {
        your if statement here {
            set the text of your resultLabel to "Bullseye!"
        } else {
            set the resultLabel text to indicate the user missed
        }
    }
```

Run, and your app should now look like this. Don't worry if the spacing is a little off! This could be fixed with something called “constraints”, but since we will be using SwiftUI from now on we won’t be dealing with it here.

[Screen Recording 2022-01-21 at 2.01.13 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ee470db-5601-4182-82b1-61fe34e39f49/Screen_Recording_2022-01-21_at_2.01.13_AM.mov)

Notice how the result label displays text after clicking “check”. We could not show text before the user clicked “check” which is why we initialized result label to be an empty string!

## Exercise 2C: Adding the Switch

You may notice it is very hard to get a bullseye at the moment. I got lucky in the video above 

This is where the exact switch comes in! If the exact game mode is off, then we will have a range that is ±3 so it will be a little easier to get a bullseye.

We will use this exactSwitch condition in our checkValue function:

if `exactSwitch.isOn` is **false**, we run this set of statements based on the ±3 range

if `exactSwitch.isOn` is **true**, we run our original if else statements where it decides based on if randomNumber = numSlider.value

```markdown
@IBAction func checkValue(_ sender: Any) {
        if exactSwitch.isOn == false {
            if randomNumber - 3 <= Int(numSlider.value) && randomNumber + 3 >= Int(numSlider.value) {
                resultLabel.text = "You were right on point! Bullseye!"
            } else {
                resultLabel.text = "Whoops! You missed! Try again later"
            }
        } else { //if exactSwitch.isOn is true
            your if statement here {
		            set the text of your resultLabel to "Bullseye!"
		        } else {
		            set the resultLabel text to indicate the user missed
		        }
        }
    }
```

## Exercise 2D: Play Again

Right now we can't play again unless we rerun on Xcode 😢 That doesn't make sense so let's go ahead and add that functionality.

The “Play Again” button shouldn't show up unless we have already played a round, so the property of the Hidden property of the button was initially set to true.

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c64e55f-9371-4dd1-b227-4e36b9ff0be3/6hidden.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c64e55f-9371-4dd1-b227-4e36b9ff0be3/6hidden.mov)

After you check your slider value, "Play Again" should appear, so change the property at the end of the checkValue function.

```markdown
@IBAction func checkValue(_ sender: Any) {
        ...
				resultLabel.isHidden = false //we'll come back to this
				playAgainButton.isHidden = false
    }
```

Many things have to happen when the "Play Again" button is tapped:

- The slider has to move back to the middle.
- The random number should be reset to another.
- Hide the result label from the previous round
- Hide the play again label

```markdown
@IBAction func playAgain(_ sender: Any) {
        numSlider.setValue(50.0, animated: false)
        randomNumber = Int(arc4random_uniform(101))
        numLabel.text = String(randomNumber)
        resultLabel.isHidden = true //must reappear next time it is checked ^
        playAgainButton.isHidden = true
    }
```

This is how your app should look now:

[Screen Recording 2022-01-21 at 2.28.40 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40479ede-4e64-47ed-a6fd-f170ce1aa5ca/Screen_Recording_2022-01-21_at_2.28.40_AM.mov)

## Exercise 2E: Levels

Now we should add a bit for functionality to make bullseye more fun!

We will introduce the concept of levels. Users will start at level 1 and progress through increasingly harder levels as they hit the bullseye.

To implement this functionality we will need to initially create new variables and initialize new labels in the viewDidLoad() function. Below your “randomNumber” variable, create two new variables. The “range” variable will allow us to keep track of the max range of the slider and the “level” variable will allow us to keep track of what level the user is on!

```markdown
var range = 100
    
var level = 1
```

In the viewDidLoad() function we will be assigning these variables above to the text of their respective label so it can be displayed to the user. Remember that viewDidLoad() is always run whenever a user opens the app!

```markdown
override func viewDidLoad() {
    super.viewDidLoad()
    randomNumber = Int(arc4random_uniform(101))
		numLabel.text = String(randomNumber)
        
    // Exercise 2E
    rangeLabel.text = String(range)
    currentLevel.text = String(level)
}
```

Your app should now look like this:

[Screen Recording 2022-01-21 at 11.45.46 PM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20de4afa-10d6-45d7-8237-b9438b8dfe53/Screen_Recording_2022-01-21_at_11.45.46_PM.mov)

You might notice that we aren’t actually changing the “Current Level” or “Range” labels as the user advances in levels. To do this we should add code in the checkValue() function since this function is called whenever the user wants to check for bullseye. When the user hits the bullseye we can update the values like how I did below:

```markdown
@IBAction func checkValue(_ sender: Any) {
    if exactSwitch.isOn == false {
        if randomNumber - 3 <= Int(numSlider.value) && randomNumber + 3 >= Int(numSlider.value) {
            resultLabel.text = "You were right on point! Bullseye!"
                
            /*
						 * We should first update the range variable in order to update rangeLabel
						 * In this implementation I increased range by 50 but this is up to the developer!
						 */
            range += 50

						/* 
						 * Since range is an int we would need to type cast it into a String 
					   * to be able to assign it to rangeLabel.text
             */
            rangeLabel.text = String(range)
						

						/* 
             * To have the correct implementation we would also need to update the max
						 * value of the slider as we are increasing range
						 * 
					   * Since range is an int we would need to type cast it into a Float 
					   * to be able to assign it to numSlider.maximumValue
             */
            numSlider.maximumValue = Float(range)
                

					
						/*
					   * When the user hits a bullseye we want to increment the level the user is currently on
						 * 
						 * We can simply increment the level variable and assign it to currentLevel.text
					   * like we did for range!
		         */
            level += 1
            currentLevel.text = String(level)
               
  

						/*
					   * Similar to how we implemented the playAgain() function, we should reset
						 * the slider and generate a new random number for the user. 
						 *
						 * Unlike playAgain() however, we won't be able to use constant values and will instead
						 * have to rely on range.
						 *
						 * We can use range and divide it by 2 to determine a new value for the slider to be set to
						 * We can also use range to generate a new random number within the new range
						 *
						 * Note the type casting used below and how we added 1 to range when generating a new number
					   * because arc4random_uniform() returns a random number in between 0 and the input - 1
		         */
            numSlider.setValue(Float(range / 2), animated: false)
            randomNumber = Int(arc4random_uniform(UInt32(range + 1)))
            numLabel.text = String(randomNumber)
						// We should hide resultLabel since it's a new round!
            resultLabel.isHidden = true
        } else {

						// Make sure to move this line of code to this else statement so we can only show "Play Again" when the user loses
						playAgainButton.isHidden = false
            resultLabel.text = "Whoops! You missed! Try again later"
       }
   }
    else {
				if Int(numSlider.value) == randomNumber {
            resultLabel.text = "You were right on point! Bullseye!"
                
            // The code below is exactly the same as the code above ^.^

	          range += 50
            rangeLabel.text = String(range)
            numSlider.maximumValue = Float(range)
                
            level += 1
            currentLevel.text = String(level)
                
            numSlider.setValue(Float(range / 2), animated: false)
            randomNumber = Int(arc4random_uniform(UInt32(range + 1)))
            numLabel.text = String(randomNumber)
            resultLabel.isHidden = true
        } else {

						// Make sure to move this line of code to this else statement so we can only show "Play Again" when the user loses
						playAgainButton.isHidden = false
            resultLabel.text = "Whoops! You missed! Try again later"
        }
    }
        
    resultLabel.isHidden = false
}
```

Your app should now look like this:

[Screen Recording 2022-01-23 at 2.46.35 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9659f5ea-826c-42ca-b065-cae0bd8392f2/Screen_Recording_2022-01-23_at_2.46.35_AM.mov)

There is one more function we have to edit. You might’ve noticed that when I missed the bullseye in the video above and pressed “Play Again”, the current level was still 2 and the range was still 150. We should add code so that when a user “loses”, the level will reset to 1 and the range will reset to 100.

```markdown
@IBAction func playAgain(_ sender: Any) {
    numSlider.setValue(50.0, animated: false)
    randomNumber = Int(arc4random_uniform(101))
    numLabel.text = String(randomNumber)
    resultLabel.isHidden = true //must reappear next time it is checked ^
    playAgainButton.isHidden = true
        
        
    
    range = 100
    rangeLabel.text = String(range)
    numSlider.maximumValue = Float(range)
        
    level = 1
    currentLevel.text = String(level)
}
```

Your app should now look like this:

[Screen Recording 2022-01-23 at 2.47.51 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f063448c-04b1-4214-8fbe-f8884d2eadf3/Screen_Recording_2022-01-23_at_2.47.51_AM.mov)

## Exercise 2F: High score

In this last exercise we will be implementing the high score functionality! I will not be showing you the code for this exercise, but will leave you with lots of hints. 

Note that implementing this is very similar and far less complicated than implementing levels.

Hint 1: I created a new variable “x” (name it however you want) to keep track of the high score similar to “range” and “level”

Hint 2: I initialized highScore.text to the “x” in viewDidLoad()

Hint 3: Whenever the playAgain() function was called I had an if statement with 2 conditions

1. I checked if the current level was greater than the high score
2. I also checked if the current level wasn’t equal to 1 since if the current level was equal to 1 that would mean that the user wasn’t able to pass the first level

Hint 4: Inside the if statement I assigned the “x” to be the current level and reassigned this to highScore.text

Your app should look like this!

[Screen Recording 2022-01-23 at 3.04.09 AM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b663e6f2-3f69-4c5c-957f-6e1a19eec253/Screen_Recording_2022-01-23_at_3.04.09_AM.mov)

YAY! We are now finished! Hope you had fun with this homework 😎