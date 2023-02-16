## Happy Hour and Disney+
Welcome to Lab! Today, we have 2 optional activities to help you gain more experience with HTML and CSS! These activities are completely optional and are for extra practice.

## Setting up your Files
<ol>
  <li>Create a new folder on your computer called "cubstart web sp23" (this should be done if you finished the hw). </li>
  <li>Create a new folder titled “Lab 1”. Create a new folder inside the Lab 1 folder titled “assets”. </li>
  <li>Open up Lab 1 in your text editor. </li>
  <li>Create 2 new files, one titled “index.html” and the other titled “index.css”.</li>
  <li>Type or copy/paste HTML starter code from HW 1.
To view your site in a web browser, double click on the index.html file on your computer and refresh every time you make changes!</li>
</ol>

## Option 1: Advertisement

A client has contacted you, asking you to design a web page that advertises their latest novel/movie/tv show/etc! Create a page, similar to the one below (or something more complex if you are comfortable with HTML/CSS), that accomplishes this task!

The skeleton in **index.html** looks like this:
<img src="./assets/lab1/happyhour.png" style="width: 90%; padding: 20px 0;"/>

### Hints
- Include 
~~~html
<link rel="stylesheet" href="index.css">
~~~
in the head of your html file to link the HTML file to the CSS file.

- Your image tag should look something like this: 
~~~html
<img id="book-cover" src="./assets/book-cover.png">
~~~

- The purchase now button should be a button tag! Not a div tag.

- When you hover over the button, have the button move down using
~~~css
transform: translate(0, 3px);
~~~

_Are you stuck? Ask your lab TAs for help, consult [Google](https://google.com), or look at the HW 2 skeleton code as a starting point!_

## Option 2 (for those seeking a challenge!): Recreating Disney+

This is what Disney+ looks like on desktop:
<img src="./assets/lab1/shangchi.png" style="width: 90%; padding: 20px 0;"/>

Try recreating a very basic version of this site to the best of your ability! Here is an example:
<img src="./assets/lab1/mandalorian.png" style="width: 90%; padding: 20px 0;"/>

### Hints
- Include
~~~html
<link rel="stylesheet" href="index.css">
~~~
in the head of your html file to link the HTML file to the CSS file.

- Your image tag should look something like this:
~~~html
<img id="featured-movie" src="./assets/featured-movie.png">
~~~

- Use CSS flexbox for the navbar and boxes.

- Wrap the boxes (Disney, pixar, marvel, etc) in a div. Set the display to **flexbox** in this CSS selector for this wrapper div.

_Are you stuck? Ask your lab TAs for help, consult [Google](https://google.com), or look at the HW 2 skeleton code as a starting point!_

# Congrats on completing Lab 1!
There is no submission for this assignment, as it is optional. However, feel free to play around more with HTML/CSS and build your own web pages!