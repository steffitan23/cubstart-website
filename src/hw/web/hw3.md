# JavaScript Playground

This week's homework is intended to set you up for the more complex JavaScript-heavy projects to come in future weeks. Here, we'll go through the foundations and allow you to work with manipulating the DOM.

For this project, there won't be any use of external libraries, so the skeleton simply includes the basic web file structure that we covered in lecture (HTML, CSS, JavaScript).

**Download the homework skeleton [here](assets/hw3/hw3-skeleton.zip).**

## Part 1: Creating a Counter
**index.html** is your landing page which just has two sections for you to optionally explain what this project is and how you built it. Navigate to **playground.html.** In this part, you'll be creating a simple counter application with three main features: a button to +1, a button to -1, and the number displayed depending on the button presses.

First things first, you'll need to define the relevant elements in the DOM with HTML. Use an <mark><code>h1</code></mark> tag to hold the displayed counter number and give it the id of "count-display." Then, you'll need two buttons, one for adding and one for subtracting. Use the HTML <mark><code>button</code></mark> element for these buttons and give them the class of "button" and respective ids of "subtract" and "add." A button tag can hold text within its enclosing tags.

```html
<!-- Part 1: -->
<!-- Add h1 with the id "count-display" here. -->
<button class="button" id="subtract">-</button>
<!-- Add button with the id "add" and the class "button", containing the text "+" here. -->
```

That's all the HTML you'll need for a counter. The logic is all handled in JavaScript. The styles for the button are within the styles folder, feel free to change the look of your application however you'd like. Navigate to "./scripts/playground.js" and open the file.

## Part 2: Targeting DOM Elements

This is the JavaScript file that is linked to your playground HTML file. As such, you are able to target DOM elements within **playground.html** here. Recall that the syntax for targeting DOM elements in JS is <mark><code>document.getElementById()</code></mark>. Because you assigned ids to all the relevant elements in your counter, you can do so and assign them to a variable that you can manipulate:

```javascript
// Part 2:
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = /* YOUR CODE HERE */
```

## Part 3: Event Listeners
If you want something to happen when an element is clicked, in this case your buttons, you want to use what's known as an event listener. An event listener generally accepts 2 parameters, the first being the type of event (e.g. "click"), and the second being the function that executes when the event occurs on the associated element. In JavaScript, another way to define anonymous functions is to use ES6 arrow syntax. <mark><code>() => {// function body here}</code></mark> where the parentheses are for parameters and the braces indicate the function's body. Within this function, you want to increment your count variable (pre-defined and assigned to 0) and then update the contents of your counter display to be the new count value!

```javascript
function increaseCount() {
    count += 1;
    countDisplay.textContent = count;
}
addButton.addEventListener("click", increaseCount);
```
**But wait!**

If you want to be a little fancier, here's an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). These are just compact ways to define functions, without naming them. The "()" represents in arguments in the unnamed function, and the "=> {}" is just a shorter way of defining the function (instead of using "function f() {}"). 

```javascript
addButton.addEventListener("click", () => {
    count += 1;
    countDisplay.textContent = count;
}));
```

**Now implement an arrow function for the subtract button on your own!** Try playing around with your counter and you should see that it's now fully functional :)

```javascript
// Part 3:
// Add subtractButton's event listener, with an arrow function ( () => { function goes here} ):
/* YOUR CODE HERE */
```

## Part 4: Building a Todo List
Now, you'll build a simple todo list. At first glance, you'll need to make some kind of input field to hold text values of tasks to add to the list, and some kind of empty list that holds the tasks, along with buttons that allow you to actually submit tasks and clear the list. 

You should use an HTML <mark><code>input</code></mark> element of type "text" to create a space where a user can input text (i.e. the todo task). You can also use a <mark><code>ul</code></mark> element which is an unordered list that can hold <mark><code>li</code></mark> elements which are list item elements that can contain text. 

_Fill in the blank for the input element :) Make the type "text" and the id "task-name"._

```html
<!-- Part 4: -->
<!-- Create an "input" HTML element, with type "text" and the id "task-name": -->
<!-- YOUR CODE HERE -->
<div id="input-handlers">
    <button class="button" id="submit">Submit</button>
    <button class="button" id="clear">Clear</button>
</div>
<ul id="tasks"></ul>
```

## Part 5: More DOM Targeting
Go back to the **playground.js** file. Again, declare and initialize your JavaScript variables to manipulate the respective elements on the DOM.

```javascript
// Part 5:
const taskName = document.getElementById("task-name");
const taskList = document.getElementById("tasks");
// Initialize the const submitButton, from the id "submit":
/* YOUR CODE HERE */
// Initialize the const clearButton, from the id "clear":
/* YOUR CODE HERE */
```

## Part 6: Dynamic Element Creation
This part will be more guided to allow you some explanation and experience with some more complex JavaScript methods. Once again, you want a list element to be added to the todo list when the submit button is clicked. So you need an event listener on the submit button to do just that. 

The logical flow of what to expect when carrying out this action is as follows: if there is a valid task name in the text input field, then create a <code><mark>li</mark></code> list item element and set its [**textContent**](https://www.w3schools.com/jsref/prop_node_textcontent.asp) to be the text in the input field. Then add this element to the enclosing <code><mark>ul</mark></code> parent element with <mark><code>appendChild()</code></mark>.

```javascript
// Part 6:
submitButton.addEventListener("click", () => {
    if (taskName.value != "") {
        // Initialize a const variable named "task", and set it equal to a new li element. 
        /* YOUR CODE HERE */
        task.textContent = taskName.value; // Here you set the li element you created to have the text value in the input field!
        // Add this task to the end of taskList (this is the list you initialized earlier!).
        taskList./*YOUR CODE HERE*/
    }
});
```

To clear the list, a way to achieve this is by simply replacing all the children of your taskList with nothing. Then reset your input text to be an empty string to reset the input text as well (so the user doesn't have to manually delete it).

```javascript
clearButton.addEventListener("click", () => {
    taskList.replaceChildren();
    taskName.value = "";
});
```
You'll notice there is another event listener on the taskName element which listens on "input." This is an example of another event triggering a function's execution. On "input" means every time the input field is modified (e.g. typing a new letter). So you'll notice that whenever you type the value "Cal Hacks" into your task input field, the count display on your previous counter app turns blue!
 
```javascript
taskName.addEventListener("input", () => {
    if (taskName.value == "Cal Hacks") {
        countDisplay.style.color = "steelblue";
    }
});
```

## You're done! :D


# Homework Submission!
To submit the homework folder, you have to zip it first. 

**To zip a folder:**
_**Windows:** Right-click the folder **hw3-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **hw3-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)