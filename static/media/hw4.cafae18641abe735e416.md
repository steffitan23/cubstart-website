# HW4: Maze Game

Track: Swift, SwiftUI
Week: Week 4

# Introduction 👋

**Today we will be implementing the UI and functionality of a maze game in SwiftUI!** Tools required to complete this homework include knowledge of navigation stacks and programmable navigation. This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. If you are confused, **referencing the lecture slides or demo may be helpful**! Finally, if you are struggling with this homework or have any questions please do not hesitate to come to lab or post on the class Edstem for help!

# Overview 🚶🏻

By the end of this homework you will have built a simple [text-based game](https://en.wikipedia.org/wiki/Text-based_game) that randomly generates a maze and allows the user to navigate through it via the navigationStack. Additionally, while the user is traversing the maze in search of the exit, you will display what path they are currently taking as well as what their previous move was. Finally, when the player makes it to the maze exit, they will be congratulated and given the option to replay the game with a different randomly generated maze.

Here is a demo of the final product:

<video width="250" controls autoplay>
    <source src="https://user-images.githubusercontent.com/29685826/222801205-f66fdcdb-26ed-4ecd-b522-84f5ec5ac397.mov" type="video/mp4">
</video>

Take a second to analyze the demo and think about how you would implement it! This will give you a good idea of what to expect later on in this assignment.

Note: Ignore the answer at the bottom, that is just for testing purposes (which I encourage you to do as well while developing your app)! Feel free to submit the assignment with the answer showing or not showing.

## Setup 🛠️

Pull the skeleton code using this command:

```markdown
git clone https://github.com/AndyyHuang/Maze_Game-HW
```

To open the project, open Xcode → Open a Project or File → Navigate to hw4.xcodeproj

**Important note if you plan to push this project into your own repo:** After cloning the repo, delete the hidden .git folder inside Maze_Game-HW. It has been known to cause issues pushing changes into your remote due to nested .git folders. You can reveal hidden folders in your finder on Mac via [Shift + Cmd + .]. On Windows via View > Options > Change folder and search options then select the View tab and, in Advanced settings, select show hidden files, folders, and drives and OK.

# Part 0: Logistics + Getting Familiar With The Code

After you opened up the project, take a couple minutes to get familiar with the code in ContentView.swift, MazeLocationView.swift, MazeExitView.swift, and HelperFunctions.swift. This may help you get a picture of the view hierarchy or give you ideas on the overall structure of the project. Lines of code from the original solution are replaced with TODO: comments, so please keep an eye out.

Feel free to add any additional features that you like, however, the bare minimum requirement to finish this project is implementing all features that were present in the demo. Perfectly mimicking the spacing of the original solution is tedious, thus spacing will not matter in the final submission. Without further delay let's begin!

# Part 1: Setting Up The Navigation Stack

## 1a: Implementing the maze start UI

Display your own menacing maze warning! You don’t want unknowing travelers exploring your dangerous maze which they could possibly get lost in for eternity! After setting a warning, implement a button to begin the maze. This button will be responsible for pushing a new view onto that navigation stack. To accomplish this, use the navPath variable. Also, don’t forget to uncomment solutionPath and properly initialize it.

**Note:** Try to implement this homework with a small solution path first. A small solution path will help debugging and testing go more smoothly. I recommend a solution path of size 3.

## 2a: Setting Up Navigation Destination

Implement the code in the .navigationDestination modifier. As review, the .navigationDestination modifier is responsible for presenting a new view onto the screen based on what was pushed onto the navigation stack. In our case, we want to push the “action” that the player takes onto the navigation stack so we can pass it into the views that we will display. This will allow us to later use that same action and display it onto the screen as the previous action that the player took in the maze.

HINT:

Our `.navigationDestination()` modifier should return two different types of views based on one condition. If the player has reached the maze exit then what view should we present? Otherwise, if the player has not reached the end of the maze (which means they are still exploring the maze), what is the other view we should present? How do you check whether a player has reached the end of the maze? Take a look at the variables defined in ContentView.

If you’re struggling on this part, I recommend taking a look at lecture slides. Specifically the “Programmatic Navigation” Slide. You do **not** need to define your own data type. The data type you pass into `.navigationDestination()` should be a data type already in Swift (String, Boolean, Int, Float, etc…). Ideally, this data type would be passed into `MazeLocationView` and later used to show the user’s previous action.

# Part 2: MazeLocationView

## 3a: Showing the previous action and current path

Implement the text displayed at the top of the screen when the player enters the maze and begins exploring. Notice that when the player first enters the maze, the message is different than when the player begins exploring (after going Up, Down, Left, or Right).

HINT:

Use an if-else statement. If the player is at the beginning of the maze, then display text stating so. Otherwise, display their previous move and the current path in the maze. What variable defined in the view can help you determine whether you are at the beginning or in somewhere in the middle of the maze? This should be the same variable that you push onto the navigationStack after taking an action. Additionally, what variable defined above `var body` will tell you the current path that the player is on?

## 3b: Implementing actions

Now we have to implement the actions that our player can take in the maze. As a reminder, these actions are “Up”, “Down”, “Left”, and “Right”. Create a button for each action. After the user presses on an action, we will want to run some code to update the current path that our user has taken and push that action onto the navigationStack to trigger a view change. This should be similar to how you implemented the Begin button in ContentView with the exception that you are also appending an action to the current path.

## 3c: Implementing backtracking

If you’ve made it this far, you probably noticed that when you press the back button, your current path is not updating to reflect that you are backtracking your steps in the maze. To implement this, we must somehow tell our MazeLocationView that our player is backtracking to this view. In other words, we want to differentiate the instances when the player goes forward into this view and when the player decides to change his mind while exploring and backtrack into this view. This can be a bit tricky so the following “hint” will basically go over the solution. Feel free to think about how you would implement this before reading the hint (notice the backtrack boolean variable).

HINT:

The general idea is to set a boolean value to false which indicates when the player initially opens up this view in their UI. In our case, this is `@State var backtrack: Bool` The only way the player can revisit this view is if they press the “back” button on the top left after pressing some action. So, if we set `backtrack` to `true` after a player takes an action (“Up”, “Down”, “Left”, or “Right”), then we can check whether it is `true` when the player reloads the view. If it is `true`, then we know that the player previously took an action from this view and is now backtracking into this view and we can remove the last item in the `currentPath` list, essentially undoing the player’s decision to take an action. We will run this code in the `.onAppear()` modifier.

```swift
// VStack of MazeLocationView
Vstack {

		// YOUR OTHER CODE HERE...

	/*
		Set backtrack to true for ALL action buttons in MazeLocationView.
		This is an example for how you do it for ONE of them.
	*/
	Button("Up") {
		backtrack = true
		...
	}

	// YOUR OTHER CODE HERE...
}
.onAppear {
	// If the user is backtracking to this location, remove their previous move.
	if backtrack {
	    _ = currentPath.popLast()
	    backtrack = false
	}

	// Refresh the currentPathString variable to reflect new current path whether visiting or backtracking.
	currentPathString = currentPath.joined(separator: "->")
}
```

# Part 3: MazeExitView

## 4a: Restart Game

Phew alright we made it to the home stretch. Don’t worry this section is pretty short.

MazeExitView is responsible for presenting some text congratulating the user that they made it out of the maze and giving them the option to start a new game with a different maze via a button press. To start a new game you should set reset the current path variables to empty and initialize a new solution path and string representation for that solution path. Finally, you want to pop all current views off the navigation stack to return to the root view. This is already done for you.

## [Optional] Part 4: Customization

Feel free to add any customizations to spice up the maze! It is rather barren and is in desperate need of beautification.

# Submission 🎉

To submit your homework, open your Finder and navigate to the directory that includes BOTH your homework folder and a "homework".xcodeproj file. Right click the folder (NOT the .xcodeproj file) and compress it. Upload your compressed file onto gradescope.

### Congrats on making it to the end of this week’s homework and completing a super cool app!! Feel free to come to lab if you have any questions (attending will also grant you a hw checkoff)
