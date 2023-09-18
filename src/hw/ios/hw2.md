# HW 2:  Tic-Tac-Toe

Created: June 26, 2023 9:11 PM
Tags: Week 2
Contributors: @Justin Wong 
Track: iOS
Week: Week 2

In this homework assignment, you will get your hands dirty in working with Swift and the fundamentals of SwiftUI by creating Tic-Tac-Toe or Noughts and Crosses if you hail from The Commonwealth! At first glance, it might seem a bit daunting, but don’t worry! We will guide you and explain each step.  

<div align="center">
    <img src="assets/hw2ios/tic-tac-toe-screenshot.png">
</div>
---

# Table of Contents

[GitHub Directions to Get Project Files](https://www.notion.so/GitHub-Directions-to-Get-Project-Files-f64fc25ff0e34b3da1f587c0a88d6a78?pvs=21) 

[Project Overview ](https://www.notion.so/Project-Overview-57d3e4c553fb417d93bfa1f1bedf4cc2?pvs=21) 

[ScoreHeaderView ](https://www.notion.so/ScoreHeaderView-8e2722f12f154993bf7c0f518d19d279?pvs=21) 

[1. Recreate ScoreHeaderView UI ](https://www.notion.so/1-Recreate-ScoreHeaderView-UI-13ad80b590d448a0bd9c813c4dd0fc51?pvs=21) 

[2. PlayerAvatarScoreView: Refactor Emoji and Score ](https://www.notion.so/2-PlayerAvatarScoreView-Refactor-Emoji-and-Score-25f9b5dd87724df6932eabaf0c1a715a?pvs=21) 

[FullGameResetButton](https://www.notion.so/FullGameResetButton-ac58cb69bc334b9889bda791e2d5a8b1?pvs=21) 

[GameViewModel](https://www.notion.so/GameViewModel-e13ca34ec24e4fb4a13c0b15af304d33?pvs=21) 

[Navigating Complexity ](https://www.notion.so/Navigating-Complexity-4399e5b0d8dd42bc85c4e676ac2e236e?pvs=21) 

[Tic-Tac-Toe 🕊️👁️ Logic Explanation ](https://www.notion.so/Tic-Tac-Toe-Logic-Explanation-8d0aea2074a44caeab9d7d7ec8b36926?pvs=21) 

[Understanding GameModel](https://www.notion.so/Understanding-GameModel-6b2ea309ca4c4e1ca2632c8f7903338e?pvs=21) 

[Player Enum](https://www.notion.so/Player-Enum-85c3f2a9cb674a94835d664b90ef7954?pvs=21) 

[Move Struct ](https://www.notion.so/Move-Struct-9645e7a166974cdf80845999d86a151d?pvs=21) 

[Understanding Optionals](https://www.notion.so/Understanding-Optionals-0b4d1ce11065429997c812e19416b2fa?pvs=21) 

[Optionals are Enums!!](https://www.notion.so/Optionals-are-Enums-da24833704ec468a8bdf08ef84c8abdb?pvs=21) 

[Working with Optionals](https://www.notion.so/Working-with-Optionals-fa5c5e6eb7414caa9523ed0fb42a3452?pvs=21) 

[Implementing The Missing Functions](https://www.notion.so/Implementing-The-Missing-Functions-f5d2c27be2284799b11297e77963c0e8?pvs=21) 

[Submission ](https://www.notion.so/Submission-f27ff2e64ea743eebbd756153c11388f?pvs=21) 

[🎉 Congrats! ](https://www.notion.so/Congrats-05a1442710f14760b32e85fa624467fb?pvs=21) 

---

# GitHub Directions to Get Project Files

Head to **[https://classroom.github.com/a/_TsFLUoj](https://classroom.github.com/a/_TsFLUoj)** and follow the on-screen instructions. You should have a new repository under the “cubstart-ios-student” organization in Github. This is the repository where you will push to and submit to Gradescope. 

# Tic-Tac-Toe Rules:

If you are not familiar with the game and rules of Tic-Tac-Toe, please refer to this link: 

[Tic-Tac-Toe Rules](https://www.exploratorium.edu/explore/puzzles/tictactoe#:~:text=Rules%20for%20Tic%2DTac%2DToe&text=Players%20take%20turns%20putting%20their,game%20ends%20in%20a%20tie)

# Project Overview

There are two parts to this homework: 

1. Implementing the score header UI (called ScoreHeaderView in the code) in SwiftUI & Full Game Reset Button 
    1. You will be recreating views we have provided via screenshots & specifications
2. “Fill-In” the missing core game logic functions using Swift 
    1. Using provided models and implementations, complete the missing core game logic 

Now let’s open up the project in Xcode, and take a look at the files in the project and which ones you will be working in. 

<div align="center">
    <img src="assets/hw2ios/tic-tac-toe-project-files.png">
</div>

As you can see, there are a total of 7 files in the project:

- **GameModel**
    - Contains the model data representation of the Move struct & Player enum
- **GameViewModel**
    - Where the core game logic resides. It’s acts like a “manager, “ coordinating our model (data representation: Move struct & Player enum) and view (ScoreHeaderView, Grid container Xs and Os, etc…)
- **ScoreHeaderView**
    - SwiftUI view showing the score of both the player and computer
- **FullGameResetButton**
    - SwiftUI view of the Full Game Reset Button. When pressed it will reset the both the player’s and computer’s score back to 0
- **Tic_Tac_ToeApp**
    - Entry Point into application that shows Game View
    - (For those who have taken CS61B, it’s sort of like the main method in Java)
- **GameView**
    - The main view containing of all the components of what you see on the screen (ScoreHeaderView, Grid, Xs and Os, & FullGameResetButton)
- **Alerts**
    - Contains the AlertItem & AlertContext structs to help with representing the alert data when presenting an alert to the user for the win, lose, and draw conditions

You will only be working inside the files highlighted in **GameViewModel, ScoreHeaderView, &  FullGameResetButton.** 

You are free to poke around the other files if you are intrigued, but you are not required or expected to understand those files as they are out of scope. 

**🚨Please do not modify or change code in the rest of the files as it can break the game functionality if you are not careful.🚨** 

---

Let’s first build the additional UI needed to play the game! 

# ScoreHeaderView

### 1. Recreate ScoreHeaderView UI

**Navigate to ScoreHeaderView.swift.** 

![ScoreHeaderView Boilerplate Starting Code ](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-05_at_5.27.50_PM.png)

ScoreHeaderView Boilerplate Starting Code 

You are tasked to recreate the follow view in the image below: 

![You will be recreating this one! ](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-05_at_5.29.00_PM.png)

You will be recreating this one! 

![Completed ScoreHeaderView in full screen context ](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/simulator_screenshot_E483732A-97DE-4624-B3A2-A705C7887326.png)

Completed ScoreHeaderView in full screen context 

⚠️ Don’t forget the blue shadow around the edges! ⚠️

It does not have to be exact to the same code that was used to generate the view in the screenshot above, but your result does have to resemble it to some degree. 

Try to implement without looking at Hints! If you are stuck, don’t be afraid of Google! Being a good developer requires being a good Googler! 

- **💡Hints:**
    - To create the soft shadow around the view and images, check out the `.shadow` modifier:
        
        [shadow(color:radius:x:y:) | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/view/shadow(color:radius:x:y:))
        
    - To create a lighter shade of a Color, check out the `.opacity` modifier:
        
        [opacity(_:) | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/view/opacity(_:))
        

### 2. PlayerAvatarScoreView: Refactor Emoji and Score

Once you have finished with recreating the view from the image above, you might have noticed that the code representing the emoji and score below is repeated for both the player and computer scores. It’s always a good habit to refactor your code into a new SwiftUI View when you find yourself copying or pasting a piece of UI code around. 

Just below ScoreHeaderView, let’s refactor that piece of repetitive code into a new SwiftUI View called, ********************PlayerAvatarScoreView********************, and pass in the appropriate data to drive that view. 

**How do I get the player’s and computer’s score?:** 

To get access to the player’s score, use the `playerScore` property found in `viewModel`

like this: `viewModel.playerScore`.

To get access to the computer’s score, use the `computerScore` property found in `viewModel`

like this: `viewModel.computerScore`.

Ahhh much better! Refactoring definitely helped clean up ScoreHeaderView, making it more readable and maintainable. 

---

# FullGameResetButton

**Now, let’s head over to FullGameResetButton.swift.** 

You will be recreating this button via the given specifications: 

![Screenshot 2023-07-07 at 4.29.02 PM.png](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-07_at_4.29.02_PM.png)

### **FullGameResetButton Required Specifications:**

- When pressed, the button calls the `fullResetGame` method on `viewModel`
- Text Inside Button is “**Full Reset Game**”
- Text Color is **White**
- Text has an applied **Bold** font
- Button has default padding
- Button has a **Radial Gradient background**
    - Radial Gradient Colors:
        - Starting from **Blue** with **40%** opacity to…
        - Ending with **Purple** with **50%** opacity
- Button has a **corner radius** of **10**
- Button has a exterior shadow
    - Shadow’s color is **Purple** with **90%** opacity
    - Shadow has **radius 10**

Your button **MUST** be exact per these specifications above.

---

# GameViewModel

Nice! Our UI looks good now, but our game is not playable at the moment. Let’s fix that! 

**Navigate to GameViewModel.swift.**

Woooah! There is a lot happening in this file, and that is true! But do not worry, you are not required to understand all the “nitty-gritty” details of the program as we will explain how the game works on a high pseudocode level. You are **ONLY** responsible for filling out the missing functions near the bottom of the file. 

## Navigating Complexity

Writing the behind-the-scenes logic for a full fledged application can contain varying amounts of complexity. Some areas require greater attention to detail than others. To help us manage this sort of complexity, a good habit is to encapsulate portions of code that perform a certain identifiable task or code that is repetitive to abstract away the “baggage” or complexity that comes along with it. 

For example, when you drive a car, you do not care about how the car works on an electrical or mechanical point of view. There is simply no reason why you need to know how a spark plug in the engine or the gear in the transmission works. All of that is abstracted away into a couple of pedals, a wheel, and the dashboard. To interact with the car, the driver only has access to several functions, namely `driveForward`, `reverse`, and `brake`. Inside those functions, they contain more functions and those functions probably contain additional functions of increasing complexity. The point is that different levels of abstraction through encapsulating code into functions allow us to reduce complexity which makes our code more manageable and understandable. 

Likewise, the logic of our Tic-Tac-Toe can be encapsulated into various functions to help abstract away the complexity. Let’s take a look of how the logic is structured and works! 

## Tic-Tac-Toe 🕊️👁️ Logic Explanation

The entire game is centered on two principal functions: `processPlayerMove` and `determineComputerMovePosition`. 

In `processPlayerMove`:

1. Check to see if a square is occupied given the position that the player chose 
    1. If it is occupied, we do nothing
    2. If not occupied, we keep track of that position that player chose in `moves`. `moves` is an array of `Move` Optionals (we will explain in just a bit!) that helps us catalog which position is a player or computer move

*(The steps below are executed when the square is not occupied)*

1. Check if the player position results in a win. If so, exit out of the function and return the alert that the player won 
2. Check if the player position results in a draw. If so, exit out of the function and return the alert that it is a draw 

*(Wait 0.5 secs, then perform the computer move)*

1. Get the computer position via `determineComputerMovePosition`. 
    
    In `determineComputerMovePosition`:
    
    1. Determine if there is a possible win position via `getWinPositionIfPossible`. If there is one, return it (which exits the function).
    2. If there is no possible win position, then block
    3. If can’t block then take the middle square 
    4. If that does not work, then pick a random position, check to see if it is not yet occupied, then return that position 
2. Check if the computer position results in a win. If so, exit out of the function and return the alert that the computer won
3. Check if the computer position results in a draw. If so, exit out of the function and return the alert that it is a draw

This is just to help you get a “birds-eye-view” of how everything fits together. 

**Just to reiterate,** **you are NOT expected or required to understand how everything works on a code level outside of the functions you will be implementing.** 

However, if you have prior programming experience or just intrigued on how it works on a deeper level, feel free to explore and investigate how the program works. Feel free to ask us on ED or come to OH to learn more or if you have any questions! 

## Understanding GameModel

Before we start getting our hands dirty in filling in the missing functions. We first need to understand how data represented in the logic is being represented. 

******************************************Navigate to GameModel.swift.**

Here we have the **************Player************** enumeration & **********Move********** struct. 

![GameModel.swift](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-07_at_5.40.02_PM.png)

GameModel.swift

### Player Enum

An enumeration defines a common type for a group of related values. 

A better way of thinking about an enum is that it allows us to encapsulate a set of different cases or states into one overarching entity. For example, we can represent the different states of matter using an enum like this: 

```swift
enum MatterState {
	case solid 
	case liquid
	case gas 
	case plasma
}
```

In our game, a player can either be human or a computer. To help us represent these two different states, we can declare a **************Player************** enum with two cases: human and computer! 

```swift
enum Player {
    case human, computer
}
```

To use an enum, we simply use this syntax: `enumName + . + caseName`.

```swift
//To use the gas state from MatterState enum 
let gasState = MatterState.gas 
//To use the computer state from Player enum
let playerState = Player.computer 
```

### Move Struct

![Screenshot 2023-07-07 at 5.56.15 PM.png](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-07_at_5.56.15_PM.png)

The ****************Move**************** struct helps is represent what a move during the game is. 

It has three properties:

- `player`: a **************Player************** enum to represent if a human or computer made that move
- `boardIndex`: an ********Int******** to represent the one of the nine positions on the Tic-Tac-Toe grid
- **(NOT IN SCOPE)** `indicator`: a **read-only computed property** that returns a **************String************** based on the **************Player************** enum. This is used to get the appropriate image to display when the player or computer makes a move. “xmark” for the human and “circle” for the computer

Here, you might have noticed that we did not need to state the enum name first. We can just put `.human` instead of `Player.human`. The reason for this is that Swift can infer the type since we are comparing it with `player` which Swift knows is a `Player` enum. 

## Understanding Optionals

![Functions you will implement that contain optionals ](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-07_at_6.07.12_PM.png)

Functions you will implement that contain optionals 

You might have noticed that there appears to be question marks throughout the code, including the three functions that you will be implementing! This is not a mistake! 

These are called **optionals**. For those who have never used Swift before, this seems very foreign and weird, but they are a god-send in helping us deal with nil/null values. 

- ********************What is a nil value?********************
    
    Nil or null in many other programming languages represents an absence of a value. A common misconception is that the number zero has no value. However, that notion is incorrect. There is still data (ones and zeros) used to present zero. (This is a very high-level explanation. But it involves how data is being stored in memory with binary which is a conversation for another time!)
    

### Optionals are Enums!!

An optional is an enum! It has two cases: `.Some(wrapped)` and `.None`. 

The first case is an associated value which is an enum case that can contain a value. The second case is used to represent `nil`, an absence of a value (empty). 

Nil values can only be stored via variables of optionals types. 

```swift
//An Optional String that is current 
//assigned to nil (is empty) 
var optionalString1: String? = nil 

//An Optional String that is currently 
//assigned to a non-nil value! 
var optionalString2: String? = "Not Empty At the Moment!"
```

### Working with Optionals

These are some ways to check if an optional is nil or not, and depending on the condition be able to handle it to safely get a value if possible. 

******************Optional Binding****************** 

We can conditionally bind the wrapped value of an ****************Optional**************** to a new variable using an if statement. 

```swift
//Optional Binding 
let optionalString: String? = "Hello World!"
//If optionalString is not nil, assign the wrapped value to a new 
//variable called newString 
if let newString = optionalString {
	//Can access the new variable newString here 
} else {
	//Couldn't get the value of optionalString
}
```

**************************************************Using the Nil-Coalescing Operator************************************************** 

We can use the nil-coalescing operator (??) to supply a default value in the case that an ************Optional************ is nil 

```swift
//Nil-Coalescing Operator 
let newString = optionalString ?? "Optional String is Nil"
//If optionalString is not nil, then assign its wrapped value to 
//new String. If it is nil, then assign newString to "Optional is Nil"

//It's equivalent to this
var newString = ""
if optionalString != nil {
	newString = optionalString 
} else {
	newString = "Optional String is Nil"
}
```

For more detailed explanation on Optionals, please check out the official documentation here: 

[Optional | Apple Developer Documentation](https://developer.apple.com/documentation/swift/optional)

## Implementing The Missing Functions

![Missing functions that you will need to fill in ](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/Screenshot_2023-07-07_at_5.36.11_PM.png)

Missing functions that you will need to fill in 

Now with our understanding of Optionals, we now know what `[Move?]` means! What does that mean? Think it about it first before revealing the answer.

- **************************************What does [Move?] mean?**************************************
    
    `Move?` by itself means that we have an ****************Optional**************** of type `Move`. It can either be nil (no value) or a `Move` object. 
    
    `[]` in Swift is an array. 
    
    So, `moves: [Move?]` means that the variable `moves` is an ************Array************ that holds **************************Optional************************** `Move` objects. That means we can have an array of `Move` objects and `nil` values at the same time like this: `[Move, Move, nil, Move, nil, nil]`.
    

****************************REMINDER: You do not need to call these functions. Just fill in the functions!** 

`isSquareOccupied`: 

- This function accepts two arguments, `moves` of type `[Move?]`, and `index` of type `Int` . Our goal here is to return a `Bool` to see if the `index` (which is the position on the grid when either the player or computer makes move) already exists in the given `moves` array.
- **(OPTIONAL): Advanced Implementation**
    
    For those who are more comfortable working in Swift, there is a one-liner solution that uses the `contains` method on an array. Check out `contains` here: 
    
    [contains(_:) | Apple Developer Documentation](https://developer.apple.com/documentation/swift/array/contains(_:))
    

`checkForDraw`:

- This function accepts one argument, `moves` of type `[Move?]`. Our goal here is to return a `Bool` to see if the given `moves` satisfy a draw condition.
- **************(OPTIONAL): Advanced Implementation**************
    
    For those who are more comfortable working in Swift, there is a one-liner solution that uses the `compactMap` method on an array. Check out `compactMap` here: 
    
    [compactMap(_:) | Apple Developer Documentation](https://developer.apple.com/documentation/swift/sequence/compactmap(_:))
    

`getWinPositionIfPossible`: 

- This function accepts one argument, `positions` of type `Set` of `Int`s. Our goal here is to return an ********************Optional******************** `Int`. If the given `positions` allows for a win position, then we return the position `Int`. If not, we return `nil`.
- These might be helpful:
    - `winPatterns`
    - `subtracting`
        
        [subtracting(_:) | Apple Developer Documentation](https://developer.apple.com/documentation/swift/set/subtracting(_:)-3n4lc)
        
    - `isSquareOccupied`

`resetGame`:

- This function accepts no arguments. Our goal here is reset the grid, but **MAINTAINING** the current player and computer score. For example, every time the player dismiss an alert, `resetGame` gets called to clear the grid.
- The `init(repeating:count:)` method on an `array` might be helpful here:

[init(repeating:count:) | Apple Developer Documentation](https://developer.apple.com/documentation/swift/array/init(repeating:count:)-5y5f0)

`fullResetGame`:

- This function accepts no arguments. Our goal here is to reset the game, **INCLUDING** the current player and computer score back to 0.
- You can only use **3 TOTAL LINES** to implement this function.

## Submission

1. Submit to the Gradescope assignment with the individual repository for this homework assignment. 
2. Then, please record 4 videos performing the following separate tasks:

************Screen Recording Tasks (Separate Recordings):************

1. Play a game that you lose  
2. Play a game that you draw 
3. Play a game that you win
4. Play a game that you lose, Full Reset (scores should be both 0), Play a game that you lose

Please submit your screen recordings as links. An easy way is to upload your four video recordings to your Google Drive and share the link in the Google Form. Don’t forget to set the correct visibility! 

Upload your screen recordings to this Google Form here: [**https://forms.gle/njNCFPaVbaLHZFVQ9**](https://forms.gle/njNCFPaVbaLHZFVQ9)

# 🎉 Congrats!

After implementing the missing functions, you should now be able to play a full complete game of Tic-Tac-Toe! See if you can beat the “AI”! 

You should now be familiar with working in an iOS project & Xcode, using Swift to implement logic, and using the fundamentals of SwiftUI to build composition based UI views. Don’t worry about how everything fits together as we will discuss data flow in the next lecture (Lecture 3). 

[tic-tac-toe.mp4](HW%202%20Tic-Tac-Toe%201d7b9c386ed244378100d3c14c65d9f3/tic-tac-toe.mp4)