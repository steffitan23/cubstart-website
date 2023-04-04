# HW8: Coin Toss

Track: Swift, SwiftUI
Week: Week 9

# Introduction 💰

**Hi there! Congrats, you made it to the last homework assignment! 🥳**

For this homework, we will be implementing 3 different animations! Thus, this homework will be split up into three parts, one for each animation respectively. Tools required to complete this homework include knowledge of implicit and explicit animations in SwiftUI. This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. If you are confused, **referencing the lecture slides or demo may be helpful (especially for this homework)**!

# Overview 🪙

By the end of this homework you will have built three different interactable animations! For the first animation, you will animate a 3D rotating circle and changing color. For the second animation, you will animate a square traversing the screen’s border clockwise while rotating. For the third animation, you will implement a coin toss!

Here are demos for the three animations you will be building:

<video width="250" controls autoplay>
    <source src="/assets/hw8ios/greenCircle.mp4" type="video/mp4">
</video>

<video width="250" controls autoplay>
    <source src="/assets/hw8ios/rollingSquare.mp4" type="video/mp4">
</video>

<video width="250" controls autoplay>
    <source src="/assets/hw8ios/coinToss.mp4" type="video/mp4">
</video>

Take a second to analyze each animation and think about how you would implement it! This will give you an idea of what to expect later on in this assignment.

## Setup 🛠️

Pull the skeleton code using this command:

```markdown
git clone https://github.com/AndyyHuang/Coin_Toss-HW.git
```

To open the project, open Xcode → Open a Project or File → Navigate to hw8.xcodeproj

**Important note if you plan to push this project into your own repo:** After cloning the repo, delete the hidden .git folder inside Coin_Toss-HW. It has been known to cause issues pushing changes into your remote due to nested .git folders. You can reveal hidden folders in your finder on Mac via [Shift + Cmd + .]. On Windows via View > Options > Change folder and search options then select the View tab and, in Advanced settings, select show hidden files, folders, and drives and OK.

# Part 0: Logistics 📜

As you might of noticed, animations can be implemented in more than one way, although some ways may be simpler than others. Thus, feel free to disregard the spec and animate each part however you prefer as long as your solution your captures the main behavior of the animation from the demo.

Code you will write for this homework assignment is split up into three files: q1.swift, q2.swift, and q3.swift. Optionally, you can do q4.swift as well if you want more practice with animations. Each file corresponds to a different animation you will implement. You do **not** need to implement anything in ****ContentView.swift for this homework.

Lines of code from the original solution are replaced with TODO: comments, so please keep an eye out.

Feel free to add any additional features that you like, however, the bare minimum requirement to finish this project is implementing all features that were present in the demo. Mimicking the spacing of the original solution can be tedious, thus spacing will not matter in the final submission. Without further delay let's jump in!

# Part 1: Spinny Spin! 😵‍💫

For this part, you will be using **implicit** animations to animate circle to spin and change colors! You will be implementing this in q1.swift.

## 1a. The Circle

First, let's create the green circle around the button by placing some view modifiers on the `Button`.

Some modifiers that will come in handy for this are:

- `.clipShape(Circle())`
- `.background(color)`
- `.frame(width: 200, height: 200)`

Remember that modifier order matters, so play around with the order until you find one that creates a green circle!

## 1b. 3D Rotation + Animation Modifier

Next, let’s add the modifiers responsible for changing the state and animating the button.

Some modifiers that will come in handy for this are:

- `.rotation3DEffect(…)`
- `.animation(…)`

`.rotation3DEffect(…)` is a modifier that rotates the view in 3D space given an angle of rotation and axis to rotate about.

Here is an example of how you use it:

```swift
Text("Hello")
.rotation3DEffect(Angle(degrees: 180), axis: (x: 0, y: 0, z: 1))
```

In the example above, `.rotation3DEffect(…)` will rotate the text “Hello” 180 degrees around the z-axis. As a result, “Hello” and the circle will be upside down. This is because the z-axis is the axis pointing out of the screen towards the user.

To further explain each axis:

- The x-axis represents the **horizontal** axis across the screen (left-to-right)
- The y-axis represents the **vertical** axis across the screen (top-to-bottom)
- The z-axis corresponds to the axis pointing **outwards** of the screen towards the user.

It might help to think about each axis like a skewer that you poke through the circle and the rotation angle is how much you want to turn the skewer! With this in mind, what axis is the circle rotating around? Take a look at the demo again if you need a refresher! Additionally, instead of setting the degree of rotation to a constant 180, we would like to put a variable there, so we can later change the value of that variable to rotate the circle in the button logic. Changing the degree of rotation is a state change that can be animated!

After adding `.rotation3DEffect(…)`, add the `.animation(…)` modifiers to the view. Note that animation for the color changing is **different** than the animation for the circle spinning so you will need to attach two different `.animation(…)` modifiers to your view! There is nothing special about the color changing, however if you look closely at the rotation of the circle, it bounces back and forth after rotating.

Thus, you will want to attach:

- One `.animation(…)` modifier somewhere on the Button with an animation style of `.default` for animating the color
- And another `.animation(…)` modifier elsewhere on the Button with an animation style of `interpolatingSpring(…)` for animating the spin. The demo uses a stiffness of 30 and damping of 5 for the interpolating spring.

The value that you want each `.animation(…)` to watch can either be `rotation` or `color` since both of those values will change when button is clicked!

Finally, because we want to give the color changing a different animation than the rotation, we want to carefully place each `.animation()` modifier in the correct order to animate the respective parts successfully. If you are unsure how to do this, I recommend taking a look at lecture slides, specifically the implicit animation example in “The Animation Stack” part of lecture.

Don’t worry if you are unsure whether your implementation of the `.animation(…)` is correct! You will be able to test it after finishing 1b! As a sanity check, the solution has six view modifiers attached to the Button.

## 1c. Button Logic

Phew! We finally got our view modifiers setup. Time to change some values to trigger a state change!

First, let's handle changing the value of `rotation` to make the circle spin one full revolution! How many degrees is in a full revolution? Increment `rotation` by that amount! Then, let's change the color of the circle! Use an if statement that swaps the Color stored in `color`. The circle swaps between `Color.red` and `Color.green`. 

Hint: If `color` is equal to `Color.green` then set color to `Color.red`. Otherwise, set it to `Color.green`. You can use the `==` operator to compare two colors.

# Part 2: A square, rolling?! 🤯

For this part, you will be using **explicit** animations to create an animation that moves a square from corner to corner. You will be implementing this in q2.swift.

## 2a. 4-Step Animation

In this part, you will have to implement four explicit animations that are responsible for animating the movement of the square traveling from corner to corner. This may seem like an arduous task, but don’t worry it's a lot simpler than it looks! The implementation of the first explicit animation is done for you. If you run the simulator and click on the square, it should roll to its left.

In the demo, the square moves from corner to corner in a clockwise fashion. The trick to this is animating each movement towards a corner as a SEPARATE explicit animation with an input delay AND specifying how long it takes for the square to get to each corner using the `duration:` parameter of the `.linear` animation style. To add an input delay for an animation, attach `.delay(…)` to the animation style. 

For simplicity, the time it takes for the square to travel from a corner to the next will be **0.5 seconds**, which may seem odd since the vertical length of the screen is longer than the horizontal length of the screen. If you look closely at the demo, you may notice the square moves slower when traveling horizontally than vertically. This is because the square is only given 0.5 seconds ****to travel different distances.

Now that we know how long exactly each animation takes (0.5 seconds), how long should we stagger/delay the start of the other animations? You should have a total of four calls to `withAnimation` with each call taking the square from a corner and to the next.

The offset values for each corner of the screen are:

- Bottom-Right: (90.0, 300.0)
- Bottom-Left: (-90.0, 300.0)
- Top-Left: (-90.0, -300.0)
- Top-Right: (90.0, -300.0)

Use these offset values to correctly set `offset_x` and/or `offset_y` in each call to `withAnimation.` Additionally, in each call to `withAnimation` increment the `rotation` by half a revolution (180), so the square will look like its rolling or spinning to each corner!

Tip: Start with implementing one call to `withAnimation` first! This call will change and animate the square’s position from the bottom-left to the top-left. It would also be helpful to reference the “N-step Animations” part of lecture for this part if you are confused.

Hint:

Let us consider implementing the 2-step animation of the square going from the bottom-right → bottom-left → top-left (the square starts at the bottom-right). This is done with two calls to `withAnimation`. The first call to `withAnimation` is provided for you. 

- The first call should change and animate the the square’s position from bottom-right → bottom-left.
- The second call should change and animate the square’s position from bottom-left→top-left.

Q: How long will it take the square to travel from the bottom-right → bottom-left?

A: Exactly 0.5 seconds because the `duration` of `.linear` is 0.5. Furthermore, it should take the square 0.5 seconds to travel from a corner to the next as stated earlier.

Q: If it takes the square 0.5 seconds to travel from the bottom-right → bottom-left, then how long should we stagger/delay start of the second animation (second call)? Additionally, where should it place the square on the screen?

A: We should delay the start of the second animation by 0.5 seconds and it should put the square at the top-left (-90.0, -300.0).

Thus, the second call to `withAnimation` is:

```swift
// Second call to withAnimation (notice that the delay is 0.5)
withAnimation(.linear(duration: 0.5).delay(0.5)) {
	offset_y = -300.0
	rotation += 180.0
}
```

If you click on the square now, you should see that the square smoothly transitions to the top-left after it reaches the bottom-left corner. Note that we don’t change `offset_x` because we are just moving the square upwards!

Using the same logic, implement the other two calls to `withAnimation`! Be careful, as the delay for each call is not the same, it is in fact accumulating! (Why?)

# Part 3: Your Penny, Your Fate. 🍀

For this part, you will be using **explicit** animations to create an animation that simulates a coin toss. You will be implementing this in q3.swift.

This part should be fairly straight forward if you completed Part 1 and Part 2!

## 3a. 3D Rotation + Offset Modifier

Add the `.rotation3DEffect(…)` and `.offset(…)` modifiers to the Text and between the `.clipShape(…)` the `.tapGesture` modifiers. The order that you apply the rotation and offset matters here. You will get a totally unexpected result if you place them in the incorrect order!

Remember to correctly set the axis that the penny will be rotating about. Check the demo if you need a refresher. Take a look at the provided variables: `rotation` and `offset_y`. Don’t forget to pass them into `.rotation3DEffect(…)` and `.offset(…)`.

## 3b. 2-Step Animation

Animate the penny being tossed up and falling back down. This can be done with as a 2-step animation! The code provided for you in `.tapGesture` sets face to an empty string when the coin is tossed and randomly re-sets it to either heads or tails right before the coin lands. This makes the simulation a bit more realistic because the coin is generally indistinguishable during mid-flight in real life.

Animating the coin toss can be done by creating one call to `withAnimation` that is responsible for tossing the penny up and another call to `withAnimation` that is responsible for dropping the penny back down. 

- Both animations will have a duration of **1 second** each.
- Both animations will rotate the penny three times. So, the penny rotates three times going up and three times going down. To do this, increment `degree` by three revolutions (1080.0 degrees) in both calls to `withAnimation`.
- Stagger/delay the second animation using `.delay(…)`. (When should the coin begin falling down?)
- The offset positions for the penny are (0.0, 0.0) and (0.0, -300.0).

The animation style for tossing the penny upwards will be `.easeOut` and the animation style for dropping the penny down will be `.easeIn`. This creates a subtle, but nice detail of the penny being momentarily suspended in the air at the apex of the toss which gives a bit more realism to our simulation! This is because `.easeOut` slows down the animation towards the end and `.easeIn` starts the animation off slow. Don’t forget to set the duration for both of these animation styles!

After finishing this, you should have a fully functional coin toss simulator to help decide your fate during your hardest times of indecision!

# [Optional] Part 4: Wifi, Histogram, or Stairs? 🤨

For this part, you will be using **implicit** animations to create a nice staircase animation with rectangles. You will be implementing this in q4.swift.

There won’t be much of a spec for this section as it is left sparse on purpose as a challenge!

Here is a short demo of what it looks like:

<video width="250" controls autoplay>
    <source src="/assets/hw8ios/wifi.mp4" type="video/mp4">
</video>

## 4a. Useful Stuff

There are several ways to implement this but the solution uses a `ForEach` loop to create each `Rectangle()` and implicit animations.

Some helpful modifiers may be:

- .fill(Color.indigo)
- .frame(…)
- .scaleEffect(x: y: anchor:)
- .animation(…)

# Submission 🎉:

To submit your homework, open your Finder and navigate to the directory that includes BOTH your homework folder and a "homework".xcodeproj file. Right click the folder (NOT the .xcodeproj file) and compress it. Upload your compressed file onto gradescope.

### Congrats on making it to the end of this week’s homework and completing a super cool app!! Feel free to come to lab if you have any questions (attending will also grant you a hw checkoff)