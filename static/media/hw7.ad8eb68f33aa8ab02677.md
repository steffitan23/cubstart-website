# HW7: Firebase + Firestore

Track: Swift, SwiftUI
Week: Week 7

# Introduction 🫕🌯

A long night of partying and you’re DYING for a good burrito? Want to have a first date at somewhere OTHER than asian ghetto? Don’t wanna starve because you’re too indecisive to pick a spot to eat? Fear not, today we’ll be using Firebase, a backend that enables us to store data in the long term, to create a user-driven platform for finding the best spots to eat around campus.

# Overview 🍟

By the end of this homework you will have built an app that enables users to submit food recommendations and filter through other entries. It will be complete with user authentication, which Firebase makes super easy to do. They can rate the restaurant, add their own images of food, and add a list of labels to help categorize the spot, like “Club Chummings”, “Late Night”, and “Hot Comfort Food”.

Note: In this HW, you will ONLY be modifying ContentView.swift. Please ignore all other files as they will be explained/used later for Lab.

Here is a demo of the final product:

<video width="400" controls autoplay>
    <source src="/assets/hw7/hw7DEMO.mp4" type="video/mp4">
</video>

Take a second to think about what kinds of data entries we will need to keep in our firebase for this to work. If you didn’t have something like Firebase, would it be possible to implement this?

## Setup 🛠️

Pull the skeleton code using this command:

```markdown
git clone https://github.com/abinayadinesh1/BerkeleySpots.git
```

To open the project, open Xcode → Open a Project or File → Navigate to hw72.xcodeproj

# Set up Firebase:

Firebase is a backend database that allows you to store data even when the user is not actively on the app! It is really useful whenever you want to use and collect user data: like if you wanted to store a username/password for authentication, keep a list of the top scores of a game leaderboard, or store images that your user uploads.

### Lets get Firebase set up!

Some part of this will be done the firebase console, and some will be setting up your Xcode. We have to do this for every new project!

1. Log in to [https://console.firebase.google.com/](https://console.firebase.google.com/u/0/) with your **personal email.** Make sure it isn’t linked to your berkeley email, because they block us from making projects!
2. After logging in, click on **'Add project'** and name your project.
3. Click on **Continue**, you can add Google Analytics if you want. I added it, although we won’t be using it in this assignment.
4. Finally, click on **'Create project'.** When it's done, click on **Continue** and you'll see the **dashboard**.

Yay! You should see now see the console. Try clicking on the **settings** icon and go to **project settings**. Then scroll down to **Your Apps** and find the “iOS” button. It should look like this:

<img src="/assets/hw7/pic1.png" style="width: 60%; padding: 20px 0;"/>

# **Setting the App on Firebase**

In **'Your apps'**, select **iOS**.

We need to get the iOS bundle ID, which is unique your project and helps connect Firebase to your XCode.

Open the skeleton code you got from Github as a new XCode project. Double click on the blue folder at the top of the folder directory.

<img src="/assets/hw7/pic2.png" style="width: 60%; padding: 20px 0;"/>

Under \***\*TARGETS\*\***, select your project name. Find the Bundle Identifier and copy the value here. Mine is **abinaya.HW7**, but yours should be completely different!

<img src="/assets/hw7/pic3.png" style="width: 60%; padding: 20px 0;"/>

After copying the **Bundle Identifier,** paste it as the input value of **iOS bundle ID**. Click on **'Register app'** and then **download** the **config file** in the next step. Continue following the steps in the Firebase console until your project is completely set up.

To set up the firebase SDK:

Copy the link provided on your screen: (mine looks like this)

<img src="/assets/hw7/pic4.png" style="width: 60%; padding: 20px 0;"/>

Go to File >> Add Packages in XCode, type in the link in the search, and locate the firebase-ios-sdk

<img src="/assets/hw7/pic5.png" style="width: 60%; padding: 20px 0;"/>

Click on Add Package and wait for everything to load in. If it asks you to select specific packages to load, just add all of them.

You should be able to see your new Package Dependencies on the left bar.

<img src="/assets/hw7/pic6.png" style="width: 50%; height: 80%; padding: 20px 0;"/>

Once this is done, do NOT use the code they provide to integrate Firebase into XCode. This is outdated and overcomplicated, so instead, we’ll just be importing Firebase and initializing a FirebaseApp within our ContentView.

# Adding Authentication

In this step, we’ll be using Firebase to add authentication to our app. Head back to the Firebase console, click on Build >> **Authentication >> Set up Sign in Method OR Get Started**

<img src="/assets/hw7/pic8.png" style="width: 60%; padding: 20px 0;"/>

We’ll be adding email/password authentication today, but in your final project, we encourage you to try implementing a different kind of authentication! (For example, google sign on is extremely common)

# **Creating User**

Firebase works by storing **user data** in it. A user, like me and you, is differentiated from another user by their unique email/password combination. We will be manually creating a user so we can test if the authentication we make will work!

To create a user, click on **'Users'** and then **'Add user'.** Fill in an accurate email (for testing) as well as a fake password,  then click on the **'Add user'** button.

<img src="/assets/hw7/pic9.png" style="width: 60%; padding: 20px 0;"/>

There should be a new data entry with an automatically populated userid! This id is the unique identifier to every person: any action taken by this person will be done under this userID.

### **Login Screen**

Navigate to ContentView.swift and:

1. Create two new variables, one to store the email and password.
2. Create a TextField and a SecureTextField for users to input this information
3. Create a Button that calls a function named “login()” when it is tapped.

The logic for login() is already implemented for you, but make sure to read the code to understand what it does as we will be using similar functionality to catch errors later!

Now, run this code in your simulator. Try entering the same username and password you chose in your Users collection in firebase, and see what happens. Most importantly: check your **console in XCode**. What does it say?

## Navigation after Sign-In

It seems pretty natural to want to move to another screen after signing into your application, so lets try to figure out how that works!

In the past, you’ve learned how to navigate through NavigationStacks and NavigationLinks. This is definitely the industry standard, but for this project, the code looks a bit messy when we try to piece those all together.

Instead, we’ll opt for a much simpler if-statement within the body of our view.

Pseudocode:

`If the authentication has succeeded: return a different view!`

`If the authentication has not succeeded: return the current view.`

We keep a state variable named `loggedIn` that will track this for us. Please add that in, as well as the if-else block stated above.

And that’s it! 🎉 You can decorate this new view however you’d like; we’d love to see what creative things you can come up with that might need authentication. In the follow-up lab to this, we’ll be collecting data from users, posting it to our firebase database, and reading them back in to create a sort of ‘feed’ of great spots to eat on campus. 🍕 🍦 You’ll also see how to make a sign-up link, although you won’t be implementing it yourselves :)

Stick around for more and enjoy your spring break 🌱🌸😴
