# HW 8: Social Media Website With React (OPTIONAL)

## Facebook who?
Ddoski is trying to make the next big thing: a **social media website** for himself and other college bears like him. Unfortunately, Ddoski spent many hours working on his site but he still couldn't manage to complete it. **Finish the code in his project** to make the social media website work!

Note: The skeleton code provided may feel daunting at first, but don't be intimidated by it! This page should guide you through completing the code with many hints, so please read through and follow along.


## Setting up the project
Make sure you've downloaded Node.js, which you hopefully did in a previous homework. We're going to set up a project with an existing `package.json`.

_[Download the skeleton here.](assets/hw8/hw8-skeleton.zip)_

Extract the skeleton `.zip.` Go to your terminal in the extracted `hw8-skeleton` folder and run the command:
```bash
npm install
```

Check that all the dependencies are successfully installed (a `node_modules` folder is created).

Finally, run
```bash
npm run dev
```
to get your website running! Click the link shown in the terminal (i.e. http://localhost:5173/) to open your webpage.

<img src="/assets/hw8/viteRunning.png" style="margin-top:15px;width:80%;" />

Your folder should look something like this:

<img src="/assets/hw8/projectFolder.png" style="margin-top:15px;" />

Let's get started!


## What are routes?

Most web applications, such as a social media site, are composed of multiple pages. For example, there may be a homepage, a page with a feed, and a settings page. These pages are usually served, or shown, at different paths inside of the URL of a website.

In his project, Ddoski has set up a homepage at `/` and a profile page at `/profile`. Additionally, he has a 404 error page set up, which is displayed when the user opens a URL that is not recognized. Ddoski's routes are configured in `src/main.jsx` using [`react-router`](https://reactrouter.com/), which is a library that allows us to **show different components for different paths**.

The component `App`, imported from `src/routes/App.jsx` is served at the root URL of the website (i.e. http://localhost:5173/), and the component `Profile`, imported from `src/routes/Profile.jsx`, is served at `/profile` (http://localhost:5173/profile).


## Warmup: Check out the different pages!
First, go to http://localhost:5173/ to check the homepage.

Now, go to http://localhost:5173/<Insert_Random_Characters_Here> and http://localhost:5173/profffile.

**You should see this page pop up each time!** This is the 404 page, which is in `src/routes/NotFound.jsx`.

<img src="/assets/hw8/errorPage.png" style="width:50%; margin-top:15px; margin-bottom:5px;" />

Now, change `/profffile` to `/profile`, and notice that it **routes to the right page!**

<img src="/assets/hw8/profilePage.png" style="width:50%;" />

Anytime a user goes to a page that doesn't exist, you don't want your website to crash. Instead, you want to show an error page like the one we have set up.


## Task 1: I can't type anything!
Go to the homepage of our site, and try typing in the comment box. Huh, nothing happens!

It looks like there is some **incomplete code in `App.jsx` where the `<input>` element is**. See if you can figure out what to do! Be sure to test your site. <br>

<details>
<summary>Hint 1</summary>

_We set the `value` property of the `<input>` element to `inputValue`, which is stored using a useState hook at the top of the component. Then, we have an event handler attached to the `change` event which runs when someone types something. <br/><br/> What do we need to do inside the event handler in order for the `value` of the `<input>` element to be updated?_

</details>

<details>
<summary>Hint 2</summary>

_Note that a component is rerendered by react (reevaluated and displayed to screen) when any props or state change. If we update `inputValue` and `App` is rerendered, then the `<input>` element will have its value set to whatever the updated value for `inputValue` is. What function can we use to update `inputValue`?_

</details>


## Task 2: Let's add some comments

Yay! We can now type a comment. But wait a minute, nothing happens when we press "Add Comment!".

**Part (a): Complete the function `addComment()` inside of `App.jsx`.**

<details>
<summary>Hint</summary>

_We need to update two different state variables. What functions should we use to do this?_

</details>


**Part (b): Now, modify the "Add Comment" `<button>` to use this function.**

<details>
<summary>Hint</summary>

_We have to attach the function `addComment` as an event handler to the button for some event. What event would be appropriate, and what is the corresponding property we need to set? What function can we set this property to?_

</details>

_Note: You should not see the actual comments just yet, but make sure the comments title / counter on screen is updating!_


## Task 3: Who's eating up the comments?

Ok, we can now type a comment and add it. But it isn't actually showing up!

**Complete the code on line 41 in `App.jsx` to render the `<Comment>` component** for each comment.

You will need to reference `src/components/Comment.jsx`, which is imported in `App.jsx`, to see which props to pass. Additionally, look at the slides for an example on rendering lists if you are confused on how to do this task.

_Note: When rendering lists, you need to set the `key` prop in the root element returned by the map function to something unique to that list item. In this case, you can set `key={index}` as the array index is unique to our comment. This will make sure that React does not print an error in the console._

<details>
<summary>Help! What does .map() do?</summary>

_In JavaScript, `array.map(someFunc)` loops through the array, calls `someFunc(item)` on each item, and then returns an array with the compilation of the return values of someFunc for each item. This is useful in React to take an array and convert it into a list of HTML elements to display on the screen, using JSX markup, which is then rendered. Check the slides for an example!_

</details>

<details>
<summary>Hint</summary>

_Within the function inside of `.map()`, we want to return some markup of the form `<Comment ...>`. Based on `Comments.jsx`, what prop do we need to pass? Additionally, what other prop do we need to set (check note above)?_

</details>


## Try it Out!
Hooray! Our homepage should be working now. Try adding some comments!

<img src="/assets/hw8/commentOutput.png" />


## Task 4: Add a missing link
There's just one more bug left to fix!

On your website, click the button at the bottom of the page that says "Go to My Profile". You will now see Ddoski's profile page that you saw earlier.

Try clicking "Back to Home". Nothing happens!

<img src="/assets/hw8/backHomeButton.png" style="width:25%; margin-top:5px;"/>

**On line 20 in Profile.jsx**, it seems like Ddoski forgot to wrap his button in a tag so the "Back to Home" goes back to the main page. **Fix the code** so that the button goes back to the "`/`" path.

If you're stuck, **check how we did this for the button on the App.jsx page!** You could also check the React slides on "Routing" or the `react-router` documentation.

<details>
<summary>Hint</summary>

_There's an interesting component we have imported from `react-router` that could be useful..._

</details>


## HOOOORAY
You've completed Ddoski's code for his project!

He will be eternally grateful for your contribution to his social media website.

**In exchange, he's decided to give you a 10% stake in his social media company that will one day be worth billions.**

He is still writing up the contract papers, so stay tuned!


# Submission
To submit the homework folder, you have to zip it first. Make sure **not to include the "node_modules" folder**. You can do this by moving all your other files for submission into a separate folder and then zipping that folder.

**To zip a folder:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)
