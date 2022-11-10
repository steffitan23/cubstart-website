# Your First Social Media With React

## Facebook Who?
Ddoski is trying to make the next big thing: a **social media website** for other college bears like him. However, unfortunately for Ddoski, he spent many hours working on it but still couldn't manage to make it work. **Fix the bugs in Ddoski's project code** to make the social media website work!

## Part 1: Set up your project
Since you've already downloaded Node.js in the last homework, we're just going to set up a project with an existing package.json.

_[Download the skeleton here.](assets/hw8/hw8-skeleton.zip)_

Extract the skeleton .zip. Go to your terminal in your hw8-skeleton folder and run the command:
```bash
npm install
```

Note: If you see any error related to React versions, use "npm install --force"

Check that all the dependencies are successfully installed (a node_modules folder is created) and you should be good to go!

Finally, run 
```bash
npm start
```
To get your website running on "http://localhost:3000"!

Your folder should look like this:

<img src="/assets/hw8/projectFolder.jpg" style="margin-top:15px;" />

## Part 2: Check Out The 404 Page
Go to localhost:3000/\[Insert Random Characters here]. <br/><br/>
Then go to /profffle/1. 

**You Should see this page pop up each time!**

<img src="/assets/hw8/errorPage.jpg" style="width:40%; margin-top:15px; margin-bottom:5px;" />

Then, change /profffle/1 to /profile/1 to see that it now **routes to the right page!**

<img src="/assets/hw8/profilePage.jpg" style="width:60%;" />

Anytime a user goes to a page that doesn't exist, you don't want their website to crash, instead, you want to show an error page like this one.

If you're interested in seeing how this works, check out lines 18 and 23 in index.js!

## Part 3: First Bug!
Huh.
It seems like **our first bug is on line 49 in the App.js page.**

We need to call a method from the App component that we've defined in order to create a new comment.

Unfortunately, Ddoski forgot which method this was. 

Write the correct method using method_name() (Note: do not include any parameters) and make sure to delete all of {/* YOUR CODE HERE */}!

## Part 4: Second Bug :()
On the same page, **App.js, on line 24, we can find our second bug.**

It appears that Ddoski forgot to update the state variable newComment every time the input value changes.

How can we use a state hook function we've defined in lines 9-12 of the same file to update the value of the newComment variable?

**Make sure you update newComment to be comment_value!**


## Part 6: Try it Out!
Once, you've finished parts 3 and 4 you can try making your own comments!

**In the input on the landing page, try typing some characters and click "Submit".**

You should see each comment appears on the screen!

<img src="/assets/hw8/commentOutput.jpg" />

## Part 7: Let's try to break a link ;)
On your website (localhost:3000/), click the button at the bottom of the page that says "Go to My Profile":

<img src="/assets/hw8/goToProfile.jpg" style="width:30%; margin-top:10px;" />

You will now see Ddoski's profile page that you saw in part 2.

If you now go back to your code editor, **you will find the next bug in Profile.js on line 7.**

The error Ddoski is getting is that there's a link on the page that we don't want to work.

However, Ddoski forgot which event object (e) function does that. Check last week's slides on React, specifically on Methods and Event Handlers!

**Once you've fixed the bug, make sure to try it out! The link should no longer work.**

## Part 8: Add a missing link!
There's just one more bug left to fix! 

**On line 19 in Profile.js**, it seems like Ddoski forgot to wrap his button in a tag so the "Back to Home" goes back to the main page! Make sure your button now goes back to the "/" path. 

If you're stuck, check the React slides specifically on "Routing". **Or check how we did this for the button on the App.js page!**

<img src="/assets/hw8/backHomeButton.jpg" style="width:30%; margin-top:5px;"/>

## HOOOORAY
You've fixed all the bugs Ddoski had.

He will be eternally grateful for your contribution to his social media website.

**In exchange, he's decided to give you a 10% stake in his social media company that will one day be worth billions.**

He still writing up the contract papers, so stay tuned!

# Submission
To submit the homework folder, you have to zip it first. Make sure **not to include the "node_modules" folder**. You can do this by moving all your other files for submission into a separate folder and then zipping that folder.

**To zip a folder:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)




