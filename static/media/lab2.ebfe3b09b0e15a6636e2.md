# Random Joke Generator

Welcome to Lab! Today, you will be creating a random joke generator, similar to the video below! 

<video width="100%" controls>
  <source src="/assets/lab2/lab2demo.mp4" type="video/mp4">
</video>

<strong>Note:</strong> Lab is meant to be collaborative! Introduce yourself to the people next to you and work on this lab with 1 or 2 other people!

## Setting up your Files
<ol>
  <li>Download the skeleton for the lab <a href="./assets/lab2/lab2-skeleton.zip" download>here</a>. </li>
  <li>Unzip the file.</li>
  <li>Run your text editor of choice. </li>
  <li>Open the lab2 folder. We will only be editing <strong>index.js.</strong></li>
</ol>

## Instructions

Briefly look through all of the files and read the comments. Take a look at <strong>index.js</strong> line 2. We created an array of jokes named <strong>jokesArray</strong>. Everytime we click the button, we want to select a random joke from that array by indexing into <strong>jokesArray</strong>. 

### <strong>Task 1</strong>
Fill in the <strong>getRandomInt</strong> function body. 

_<strong>Hint:</strong> You will need to use Javascript’s built-in Math.random() and Math.floor() functions. [Here](https://www.w3schools.com/js/js_random.asp) is a helpful link, please check it out!_

### <strong>Task 2</strong>
Fill in the <strong>replaceJoke</strong> function body. 

_<strong>Hint: </strong> <strong>randInt</strong> should be a random integer greater than or equal to zero and less than the length of <strong>jokesArray</strong>. What function do we need to call for this to happen?_

_<strong>Hint:</strong> <strong>randJoke</strong> should be a string from jokesArray at index <strong>randInt.</strong>_

_<strong>Hint: </strong> For line 30 in <strong>index.js,</strong> we want to modify the content of our HTML file so anyone viewing our site can see the joke! You will need to get an HTML element with a specific id (look through your HTML file to figure out what the id is called!) and use the textContent property. This [link](https://www.w3schools.com/jsref/prop_node_textcontent.asp) is super helpful!_

### <strong>Task 3</strong>
Fill in line 34 to get an HTML element with the specified id of “joke_btn” (similar to the last part of Task 2).

_<strong>Hint: </strong> Check out this [link](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)._

### <strong>Task 4</strong>
Add an event listener to the button so that when it is clicked, the replaceJoke function is called. 

_<strong>Hint: </strong> Here is another [link](https://www.w3schools.com/js/js_htmldom_eventlistener.asp). If you get really stuck, highlight the line below._

<span style="color:black; background-color:black;">button.addEventListener(“click”, replaceJoke);</span>

## Congrats on completing Lab 2!
Try out your joke generator by clicking on the index.html file on your computer! Add some of your most knee-slapping dad jokes to the array if you’d like!
