# Personal Portfolio

## Objective
This objective of this homework is to help you through the entire process of making a simple website in HTML/CSS, as well as test your knowledge of the box model, flexbox, and media queries.

The best way to learn web development is through making your own projects. A personal, resume-style website is pretty useful and a great starter project, so that's what we're making today. 

Here's an example from our friend and Cubstart alum Oski Ddoski:

<video width="100%" controls>
  <source src="/assets/hw2/oski-personal-portfolio.mp4" type="video/mp4">
</video>

Don't worry, we're going to customize it with our own information and style it how we like!

## Setting up your Files
Before we start building our website, we need to create a folder that will hold all of the site's content, with both the HTML and CSS files this time. 

1. Download the skeleton for the homework [here](assets/hw2/hw2-skeleton.zip).
2. Unzip the file. 
_**Windows:** To unzip the entire folder, right-click the .zip file. Select Extract All, and then follow the instructions._
_**macOS:** Double-click the .zip file. The unzipped item appears in the same folder as the .zip file. If you want to, you can delete the .zip file._
3. Run your text editor of choice. We like VSCode.
4. Open the **hw2-skeleton** folder. We'll be editing **index.html** and **styles.css**.

## Part 1: HTML

Now that you're all set up, let's get creating!

The skeleton in **index.html** looks like this:
<img src="/assets/hw2/skeleton-hw2.png" style="width: 90%; padding: 20px 0;"/>

Answer the questions in **index.html** from top to bottom by editing the HTML code. There is extra information on each questions below if you need help!

### Question 0. Add an image here (a picture of you!) Make sure it's a square.
_We use img tags to insert images. What HTML attribute can we add to tell the browser where to get our image file from?_

### Question 1. Add headings to each of these sections! Make this heading smaller than your name.
_Remember what heading tags we've gone through in class (h1, h2, h3, h4, etc.). what happens to the text size as the number after the 'h' gets bigger?_

### Question 2. Fill this in with details about your degree, major(s), and coursework. Use at least 1 header tag (h3, b, or em).
_You can experiment with the 3 tags to see which you like best!_

### Question 3a. Create 2 to 3 divs with the same class (list-item), and fill them in with your work experiences.
_Pop Quiz: Why do we have to use classes for this and not ids?_

### Question 3b. Fill this in with some bulletpoints on things you did.
_How do you construct an unordered list (ul)?_

### Question 3c. Create a div that contains all the experience-list-item divs named "experience-wrapper"! You'll need this later.
_This is a good example of nesting divs within other divs! Usually, the convention is to name a div which has the primary purpose of containing other divs a container or a wrapper._

### Question 4a. Create a few project-list-items divs. Fill these in with your favorite projects!
_Note also that we're using dashes in the class name, because using spaces would give the divs multiple classes instead of just one._

### Question 4b. Create a div that contains all the projects-list-item divs named "project-wrapper". You'll need this later!
_You'll have more fun with these wrappers later!_

### Question 5. Add a link to your favorite social media account to the text "here".
_Still remember what anchor tags (a) are? How do we use them within a paragraph tag (p)?_

## Viewing Your Site

Want to see what your site looks like in a web browser? 

Double click on the **index.html** file and it should open your page on your default browser! 

If you're viewing your site while you're still making edits, you can refresh the page to see your changes.

_This will be super useful when doing the CSS part!_ 

## Browser Developer Tools

We touched on this a little during lecture, but you should try experimenting with browser developer tools a lot more. They help a lot when you're making your own projects, for debugging. 

### How to access Browser Developer Tools
Double click on the **index.html** files and it should open your page on your default browser.

In most browsers, the keyboard shortcut is **Ctrl + Shift + I (macOS: ⌘ + ⌥ + I)** to pull up the developer tools. For Internet Explorer and Edge, hit **F12** instead.

You can also right-click anywhere on the page and click **"Inspect"**.

Your browser window should now look something like this:

<img src="/assets/hw2/dev-tools-1.png" style="width: 90%; padding: 20px 0;"/>

You can double-click on any HTML tag and it will allow you to edit the code, showing the changes it would make to the site live. Similarly, you can double-click on the panel with the CSS, and it wll allow you to edit attributes, add them, and more!

If you click the icon on the top left of the developer tools panel, you're then able to click on anything on the actual website and see which part of the HTML it corresponds to. (The corresponding HTML tag is highlighted in blue!) Hovering over it will also let you see the width and height of the element, as well as its margin and padding.

<img src="/assets/hw2/dev-tools-2.png" style="width: 50%; padding: 20px 0;"/>
<img src="/assets/hw2/dev-tools-4.png" style="width: 90%; padding: 20px 0;"/>

If you click the second icon on the top left, you can expand or shrink the website window to see how your website reacts to different screen sizes. 

<img src="/assets/hw2/dev-tools-3.png" style="width: 50%; padding: 20px 0;"/>
<img src="/assets/hw2/dev-tools-5.png" style="width: 90%; padding: 20px 0;"/>


You can see how it would look on iPhone, tablets, and more specifically using the dropdown at the top as well.

<img src="/assets/hw2/dev-tools-6.png" style="width: 50%; padding: 20px 0;"/>

## Part 2: CSS
Now we're moving on to the more fun, pretty part of web development: styling!

Go ahead and open the styles.css skeleton. 

### Question 0: Importing Fonts
We didn't go through this during lecture, but fonts and typography are a big part of making your website look good!

If we want to use fonts outside of the default fonts (Arial, Times New Roman, Verdana, etc.) provided, we need to import them so the browser can use them.

1. Go to [fonts.google.com](https://www.fonts.google.com) and pick a font you like!
2. Click on the font and scroll down to see all the font weights.
<img src="/assets/hw2/google-fonts.png" style="width: 50%; padding: 20px 0;"/>
3. Click on all the font weights you want (just click all of them if you're not sure!).
4. Copy the <link ..> provided in the panel of the right, and paste it into the <**head**> of **index.html**.
<img src="/assets/hw2/google-fonts-1.png" style="width: 50%; padding: 20px 0;"/>
5. You can use CSS rules to get text to use the font you imported!
~~~css
/* Example CSS for using fonts: */
font-family: 'Roboto', sans-serif;
~~~

### Question 1. Add a hover effect for your h1 tag and img tag! You can change the background-color, color, opacity, or anything you want.
_Learn more about hovers [here](https://www.w3schools.com/cssref/sel_hover.asp)._

### Question 2. Add margin, padding, and borders to section tags!
_Learn more about the Box Model [here](https://www.w3schools.com/css/css_boxmodel.asp)._

### Question 3. Add different background colors for all the different sections, by selecting them via ids.
_Hint: Use the # symbol._

### Question 4a. This is a little tougher! Use CSS Flexbox to display your experiences as shown in the diagram.
_You don't have to get the gap value perfect, it's up to you!_
If you're stuck, highlight the text below!
<p style="color:black;background-color:black;width:400px;">gap: 20px;</br>
    display: flex;</br>
    flex-wrap: wrap;</br>
    justify-content: center;</p>

### Question 4b. Let's take a break! Add a hover effect to each experience-list-item div. 
_Some cool CSS hover effects [here](https://css-tricks.com/css-link-hover-effects/)!_

### Question 5. Use CSS Flexbox or Grid and add hover effects for the Projects Section, but use different hover effects from the Experiences section!
_Some cool Flexbox/Grid layouts [here](https://1linelayouts.glitch.me/)!_

### Question 6. Make your link pretty!
_Change the background-color, color, font-weight, or whatever you want!_

### Question 7. Let's make this a little more mobile-friendly! Use a media query/breakpoint to make project-list-item and experience-list-item divs have a width of 100% for smaller devices.
_More on media queries [here](https://www.w3schools.com/css/css_rwd_mediaqueries.asp). You can add as many breakpoints as you want!_

This should be the result:

<video width="100%" controls>
  <source src="/assets/hw2/responsive-oski.mp4" type="video/mp4">
</video>

# Optional: Do whatever you want!
You've covered the basics of HTML/CSS, congratulations! Now, make the website yours. Add as many sections as you want, change the colors, add images, and more. We want to see you have fun with it!

# Homework Submission!
To submit the homework folder, you have to zip it first. 

**To zip a folder:**
_**Windows:** Right-click the folder **hw2-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **hw2-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/) and you're done!