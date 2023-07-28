# HW6: Guess the Dog!

Track: Swift, SwiftUI
Week: Week 6

# Introduction 🐕🦴

**WOOF WOOF (hi)!** **Wouldn’t it be nice to be able to recognize any dog breed?**

Well I have great news for you! Today we will be implementing an app that displays images of cute doggies for users to guess the breed of! Tools required to complete this homework include knowledge of basic API calls and alerts in Swift and SwiftUI. This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. If you are confused, **referencing the lecture slides or demo may be helpful**!

# Overview 🐾

By the end of this homework you will have built an app that pulls images of dogs from the [dogAPI](https://dog.ceo/dog-api/) and displays them along with a hint on the screen for the user to guess what breed it is. Additionally, there will be two statistics on the screen that will allow the user to see their current streak and best streak of identifying the correct dog. Finally, when a user incorrectly guesses the type of dog, an alert will pop up displaying a message that they guessed incorrectly and their streak for that run.

Here is a demo of the final product:

<video width="250" controls autoplay>
    <source src="/assets/hw6ios/demo.mp4" type="video/mp4">
</video>

Take a second to analyze the demo and think about how you would implement it! This will give you a good idea of what to expect later on in this assignment.

Note: Ignore the answer at the bottom, that is just for testing purposes (which I encourage you to do as well while developing your app)! The final product will not have the answer at the bottom.

## Setup 🛠️

Pull the skeleton code using this command:

```markdown
git clone https://github.com/AndyyHuang/Guess_the_Dog-HW.git
```

To open the project, open Xcode → Open a Project or File → Navigate to hw6.xcodeproj

**Important note if you plan to push this project into your own repo:** After cloning the repo, delete the hidden .git folder inside Maze_Game-HW. It has been known to cause issues pushing changes into your remote due to nested .git folders. You can reveal hidden folders in your finder on Mac via [Shift + Cmd + .]. On Windows via View > Options > Change folder and search options then select the View tab and, in Advanced settings, select show hidden files, folders, and drives and OK.

# Part 0: Logistics + Getting Familiar With The Code

Since this homework works with API calls, the performance of your app is dependent on the stability and speed of the internet you are connected to. In the demo, notice that it sometimes takes a second or two for an image of a dog to load after a user submits their answer. It will generally take longer to load images from a URL on slower internet. Finally, you will not be able to test your app if you are not connected to the internet, so please have access wifi connection while working on this project.

Once you open up the project, take a minute to get familiar with the code in ContentView.swift, Api.swift, Dog.swift, and HelperFunctions.swift. This may help you get a picture of the different views/data structures/functions you will be using or implementing in this project. Additionally, this may give you an idea of the overall structure of the project. Lines of code from the original solution are replaced with TODO: comments, so please keep an eye out.

Feel free to add any additional features that you like, however, the bare minimum requirement to finish this project is implementing all features that were present in the demo. Mimicking the spacing of the original solution can be tedious, thus spacing will not matter in the final submission. Without further delay let's jump in!

# Part 1: Building the UI

Let’s start off with something we’re familiar with, building a simple UI! For this part, you will be working in ContentView.swift.

## 1a: A Vibrant background

To start off, let's build a nice vibrant background for your interface. This vibrant background will be a simple [gradient](https://en.wikipedia.org/wiki/Color_gradient) consisting of two colors. We use a ZStack so other elements will lie on top of this background. To create a gradient, use the `LinearGradient(…)` UI element. We did not go over this particular UI element in lecture, however it's super simple to use and produces quite a nice background for how little code you write! Here is how you use it:

```swift
/* Replace the comments of "Color 1" and "Color 2" with your two colors. */
LinearGradient(gradient: Gradient(colors: [/* Color 1 */, /* Color 2 */]), startPoint: .top, endPoint: .bottom)
```

Notice that the `colors:` parameter of `Gradient(…)` takes in a list of `Color` objects, so you could add any number of colors you want to your gradient if you really wanted. In the demo, we just have two colors in our gradient, `lightBlue` and `lavender` which are Colors already defined for you in `ContentView`, but feel free to change the colors to whatever you want. Finally, the startPoint and endPoint parameters of `LinearGradient` denote where your gradient starts and stops.

After insert the linear gradient, you will see that the top and bottom areas of your screen are still white. These are the “safe areas” of the screen, and you can write over them by attaching the `.ignoresSafeArea()` view modifier to your `LinearGradient`.

(Optional) If you want to use your own color**:**

The parameters for `Color` are [rgb](https://en.wikipedia.org/wiki/RGB_color_model) weights from [0, 1] which dictate how intense each primary color is in the final color. You could play around with these values until you find a nice rgb combination but for simplicity, you could just search up the rgb values of your desired color and input them as parameters to `Color`. 

## 1b: The Foreground

Now, let's build the foreground of your UI. You should already have a placeholder image of a papillion a textfield in your foreground. It’s your job to implement everything else!

For your convenience, here is a list of the elements in the foreground:

- Title
- Streak
- Best Streak
- Image (Done for you)
    - Notice that this is an `AsyncImage` which is a view that asynchronously loads an image from a URL.
- A Hint
    - Look at the HelperFunctions.swift!
    - It’s a good idea to use the `.scaledToFit()` modifier for your hint
- TextField (Done for you)
    - The code for `.onSubmit` will be filled out in Part 3.
- Submit Guess Button
    - The action code for this button will be filled out in Part 3.
- (Optional) The answer
    - This will help with debugging and testing

Here is a quick guide on how to change the foreground color and size of your Text: [guide here](https://www.hackingwithswift.com/quick-start/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more).

# Part 2: Setting up the API call

It's time to get our hands dirty, API time. For this part, you will be working in Dog.swift and Api.swift.

## 2a: Defining the Model for JSON

In Dog.swift build the model or “blueprints” for the JSON data that you will be receiving from the DogAPI. You can check the structure of the Dog JSON object from this page of the [dogAPI website](https://dog.ceo/dog-api/). 

To be clear, this is specifically the JSON object returned from making a request to: [https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random). Notice that clicking on this link will send you to another page containing just the JSON displayed. This is because your web browser is making a request to the API when you click on it!

As brief review, JSON (JavaScript Object Notation) is a format that most API’s on the internet use to send information to programmers who make an API request. After receiving the JSON string, it is then required to be “decoded” into a data structure which allows the programmer to easily access the data elements of the JSON object/string. 

In our case, we want to decode the JSON string from the dogAPI into a Dog struct, so we can easily access the JSON data via the Dog struct’s attributes. In order to do this, we must first build the Dog struct and define its attributes. Its attributes should match the attributes of the JSON object that is returned.

For example, say you made a API request and the API returned JSON object that represents some fruit which looks like this:

```swift
// Example returned JSON of a fruit.
{
    "name": "banana",
    "color": "yellow",
		"status": "success"
}
```

Then you should create a model or “blueprint” for the fruit JSON object as such:

```swift
// Model for a fruit JSON object.
struct Fruit: Codable {
    let name: String
		let color: String
		let status: String
}
```

When the JSON object is decoded into a `Fruit` struct (in part 2b), then the decoder should return an optional Fruit that looks like this:

```swift
var decodedFruit: Fruit? = Fruit(name: “banana”, color: “yellow”, status: “success”)
```

Optional data types are defined by adding a ? after any data type or object. They represent values that could exist or not (nil) and must be safely “unwrapped” before their values are used. Feel free to learn more about them [here](https://www.tutorialspoint.com/swift/swift_optionals.htm), however it is absolutely not needed for you to understand them to finish this homework (as they are a bit confusing and out of scope). 

If you plan to build more complicated apps in the future, it is highly recommended that you take some time to get familiar with optionals.

## 2b: Building the API Call

After defining the model, we can finally get to making the actual API request and decoding the returned JSON. In Api.swift, finish implementing fetchDog(), which should return an optional Dog. Your API request URL should be [https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random).

**Note:** You will be able to test whether your API call works after finishing Part 3a.

Since API calls are quite [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_text), here is an example of how to execute one in Swift:

```swift
/* Returns an optional myDataModel after decoding JSON from API call. */
func fetchData() async -> myDataModel? {
    // Define url
    guard let url = URL(string: YOUR_HTTP_REQUEST_URL_STRING) else {
        return nil
    }
    
    // Wrap api call inside a do/catch block in case an error is thrown.
    do {
        // Get data (the second item (URLResponse) is metadata we don't need so we'll just assign it to _).
        let (data, _) = try await URLSession.shared.data(from: url)
        // Decode JSON into a myDataModel struct.
        if let decodedResponse = try? JSONDecoder().decode(myDataModel.self, from: data) {
            return decodedResponse
        }
    } catch {
        // Handle api call error here.
        return nil
    }
    return nil
}
```

The solution to `fetchDog()` is nearly identical to this. You should just replace `myDataModel` and `YOUR_HTTP_REQUEST_URL_STRING` with the correct code.

Notice the 4 pieces of new syntax here: if let, guard let, do-catch, try, and async.

The if-let and guard-let keywords are ways to safely unwrap optionals. For if-left statements, if the optional turns up empty (nil), the program will skip execution in the curly braces. For guard-let statements, if the optional turns up empty (nil), the program will execute code in the curly braces.

A do-catch block is useful for running code that could potentially throw errors and crash your program. Code prone to throwing errors is marked with “try” and run in the “do” block. Execution will jump to the “catch” block in the event that any code in the “do” block that is marked with “try” throws an error. This allows your program to gracefully handle/catch errors and resume execution elsewhere instead of crashing in the off chance that an error is thrown. 

The Async keyword marks a function as asynchronous, meaning that its execution can be paused and resumed later, allowing other parts of your code to run. We may want to mark functions as asynchronous if they need to “wait” on some data to become available to continue execution. In our case, we are waiting for our API request to receive a response so we can decode the JSON (or exit if there is an error). If asynchronous functions didn’t exist then our app would completely freeze up until either data or an error is returned by the API request. Thanks to asynchronous functions, our app will continue running and once the requested data is available, the asynchronous function will resume execution.

Ultimately, these topics and bits of syntax are also out of scope and you are not required to understand them for you to finish this homework assignment but feel free to read more about error handling [here](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/), optionals [here](https://www.tutorialspoint.com/swift/swift_optionals.htm), and async/concurrency [here](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/).

# Part 3: Integration

Hooray! You finished setting up all the building blocks. Time to integrate your UI with the power of API calls to display some cute doggies! In this part you will be working in ContentView.swift.

## 3a: Fetching a Dog Upon Loading In

Fetch your first doggy when your app loads by running code between the curly braces of the `.task` modifier. The `.task` modifier has the same functionality as `.onAppear` except that it can run code asynchronously. Call `fetchDoggy()` in between the curly braces of `.task` with the `await` keyword infront of it to retrieve a `Dog`. Putting `await` in front of the function call is just convention for calling asynchronous functions in Swift. For example, if we had an async function `fetchFruit()`:

```swift
let fruit = await fetchFruit()
```

After fetching your `Dog` with `fetchDoggy()`, access your `Dog` struct attributes to set `imageURL` and `dogBreed` to the image url and breed of the dog respectively. Take a look at HelperFunctions.swift to get an idea how to extract the breed of a dog from a string URL. Finally, don’t forget to replace the hardcoded image URL in the `AsyncImage` UI element with the `imageURL` variable.

After completing this, you should see an image of a dog load and the corresponding breed of that dog as text at the bottom of your screen.

## 3b: Submitting Guess

We provide two ways for a user to submit their guess. They can either press enter (via keyboard) while typing in the text field or press a button. Implement the functionality for **both** the text field and the button to handle a guess submission. The code for both of them should be exactly the same!

Hint:

If the user’s guess matches the dog’s breed then update the streak, max streak, and fetch a new dog to display onto the screen. When comparing the user’s guess with the answer, **capitalization should not matter**. The `.lowercased()` string method may come in handy for this. Otherwise, if they don’t match, then just simply set `incorrectGuess` to true, which will prompt the incorrect guess alert to popup. You will implement this alert in the next subpart. Finally, in **both** cases, you want to clear the user’s guess after they submitted, so the textfield will be clear.

You want to be running asynchronous code between the curly braces of `Task`. Notice that `Task` is different than `.task`. The `.task` is a view modifier that is attached to a view and runs asynchronous code when a view appears on the screen. `Task` just defines a section of your code that can run asynchronous code. So, you should be calling `fetchDoggy()` AND updating the `dogBreed` and `imageURL` between the curly braces of  `Task`. This is because `fetchDoggy()` is an asynchronous function and `dogBreed` and `imageURL` can only be set once `fetchDoggy()` returns a `Dog`.

## 3c: Incorrect Guess Alert

Attach an `.alert` modifier to the submit guess button. The alert should popup when the user has submitted a guess incorrectly and display a header text, the correct answer, and their streak for that run. When the user presses the Play Again Button, the streak should be reset to 0 and a new dog should be fetched using `fetchDoggy()`. Also don’t forget to set `imageURL` and `dogBreed` after fetching a new `Dog`. 

Make sure to create a new `Task` so you can call `fetchDoggy()` and update `imageURL` and `dogBreed` similar to how you implemented the `Task` in `Button(”Submit Guess”)`. 

Here is an example of how the alert should look like:

<img src="/assets/hw6ios/alert_example.png" style="width: 60%; padding: 20px 0;"/>

Hint:

Here is an example of how to implement an alert. Please notice that the variable names are going to be different in the homework than the example. When the Button is pressed, code between the curly braces of the button will be executed. Make sure to include a `Task` in there to fetch a new `Dog`, update `imageURL`, and `dogBreed`.

```swift
struct ContentView: View {
    @State private var showingAlert = false

    var body: some View {
        Button("Show Alert") {
            showingAlert = true
        }
				.alert("Header Message Here", isPresented: $showingAlert) {
					Button("Ok", role: .cancel) {
						// Code here will execute after dismissing alert.
				  }
				} message: {
						Text("An insightful message about the alert.")
				}
    }
}
```

You can use a newline **character (”\n”) in a string to display a new line of text with a single string. 

For example:

```swift
print("I like terriers.\nI also like poodles.")

/*
This will print:

I like terriers.
I also like poodles.

*/
```

After finishing this, your guessing game should be fully functional (hooray 🥳)!

# [Optional] Part 4: Customization

Feel free to add any customizations or additional functionality to make this little game even cuter! Additioanlly, you could make the game harder by uncommenting the code in the helper function `getDogName` to return more specific breeds of dogs for the user to guess.

# Submission 🎉:

To submit your homework, open your Finder and navigate to the directory that includes BOTH your homework folder and a "homework".xcodeproj file. Right click the folder (NOT the .xcodeproj file) and compress it. Upload your compressed file onto gradescope.

### Congrats on making it to the end of this week’s homework and completing a super cool app!! Feel free to come to lab if you have any questions (attending will also grant you a hw checkoff)

Credits:

This project was inspired by “The Dog Doin bot”, a fun little discord bot created by my friend, Nilson.