# HW 2: Personal Portfolio

## Objective
The objective of this homework is to help you through the entire process of making a simple website in HTML/CSS, as well as test your knowledge of the box model, flexbox, and other CSS properties.

The best way to learn web development is through making your own projects. A personal, resume-style website is pretty useful and a great starter project, so that's what we're making today. 

Here's an example from our friend and Cubstart alum Ddoski:

<video width="100%" controls>
  <source src="/assets/hw2/oski-personal-portfolio.mp4" type="video/mp4">
</video>

Don't worry, we're going to customize it with our own information and style it how we like!

## Setting up your Files
Before we start building our website, we need to create a folder that will hold all of the site's content, with both the HTML and CSS files this time. 

1. Download the skeleton for the homework [here](assets/hw2/fa24-hw2-skeleton.zip).
2. Unzip the file. 
_**macOS:** Double-click the .zip file. The unzipped item appears in the same folder as the .zip file. If you want to, you can delete the .zip file._
_**Windows:** To unzip the entire folder, right-click the .zip file. Select Extract All, and then follow the instructions._
3. Run your text editor of choice. We like VSCode.
4. Open the **fa24-hw2-skeleton** folder. We'll be editing **index.html** and **styles.css**. If the CSS file name is red, that means there are errors in that file. Don't worry, you will be fixing those errors later!

## Viewing Your Site

To see what your site looks like in a web browser, double click on the **index.html** file and it should open your page on your default browser. 

If you're viewing your site while you're still making edits, don't forget to refresh the page to see your changes.

## Part 1: HTML

Now that you're all set up, let's get creating!

The **index.html** file looks like this:
<img src="/assets/hw2/hw2-skel-pic.png" style="width: 90%; padding: 20px 0;"/>

Answer the questions in **index.html** skeleton code from top to bottom by editing the HTML code. There is extra information on each questions below if you need help!

### Question 0. Add an image of yourself here.
_We use img tags to insert images. Review the Lab 1 slides if you are having trouble defining a path to your image!_

### Question 1. Add a unique id to each section wrapper.
_Make sure that these ids make sense in the context of your web page. Suggested id names would be "education", "experience", "projects", and "contact". After you do this, each element with the class "section-wrapper" will also have an id. This will be useful later when we style each individual section!_

### Question 2. Fill this in with details about your degree, major(s), and coursework. Use at least 1 header tag (h3, b, or em).
_You can experiment with the 3 tags to see which you like best!_

### Question 3a. Copy-paste the div with the class experience-list-item a couple times, and fill them in with your work experiences.
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

## Browser Developer Tools

Try experimenting with browser developer tools. They help a lot when you're making your own projects, for debugging. 

### How to access Browser Developer Tools
Open your page on a browser by double clicking on the **index.html** file, if you haven't already done so.

Right-click anywhere on the page and click **"Inspect"**. Your browser window should now look something like this:

<img src="/assets/hw2/dev-tools-1.PNG" style="width: 90%; padding: 20px 0;"/>

You can double-click on any HTML tag and it will allow you to edit the code, showing the changes it would make to the site live. Similarly, you can double-click on the panel with the CSS, and it wll allow you to edit attributes, add them, and more!

If you click the icon on the top left of the developer tools panel, you're then able to click on anything on the actual website and see which part of the HTML it corresponds to. (The corresponding HTML tag is highlighted in blue!) Hovering over it will also let you see the width and height of the element, as well as its margin and padding.

<img src="/assets/hw2/dev-tools-2.png" style="width: 50%; padding: 20px 0;"/>
<img src="/assets/hw2/dev-tools-4.PNG" style="width: 90%; padding: 20px 0;"/>

If you click the second icon on the top left, you can expand or shrink the website window to see how your website reacts to different screen sizes. 

<img src="/assets/hw2/dev-tools-3.png" style="width: 50%; padding: 20px 0;"/>
<img src="/assets/hw2/dev-tools-5.png" style="width: 90%; padding: 20px 0;"/>


You can see how it would look on iPhone, tablets, and more specifically using the dropdown at the top as well.

<img src="/assets/hw2/dev-tools-6.PNG" style="width: 50%; padding: 20px 0;"/>

## Part 2: CSS
Now we're moving on to the more fun, pretty part of web development: styling!

Open the styles.css skeleton. 

### Question 0: Importing Fonts
We didn't go through this during lecture, but fonts and typography are a big part of making your website look good!

If we want to use fonts outside of the default fonts (Arial, Times New Roman, Verdana, etc.) provided, we need to import them so the browser can use them.

1. Go to [fonts.google.com](https://fonts.google.com) and pick a font you like!
2. Click on the font and scroll down to see all the font weights.
<img src="/assets/hw2/google-fonts.png" style="width: 50%; padding: 20px 0;"/>
3. Click on all the font weights you want (just click all of them if you're not sure!).
4. Copy the <link ..> provided in the panel of the right, and paste it into the <**head**> of **index.html**.
<img src="/assets/hw2/google-fonts-1.PNG" style="width: 50%; padding: 20px 0;"/>
5. You can use CSS rules to get text to use the font you imported!
~~~css
/* Example CSS for using fonts: */
font-family: 'Roboto', sans-serif;
~~~

Inside the body selector, set the text color to be a color of your choosing. To center all of the text in the body, check out the text-align property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

### Question 1. Add a border, border radius, box shadow, or whatever other styling you'd like to your image!
_We recommend doing a quick google search of the property you want to use to find the syntax! MDN Web Docs and W3Schools are both reliable resources._

### Question 2: Select the h1 tag and add a hover effect! You can change the background-color, color, opacity, or anything you want.
_For a refresher on psuedo-classes and hovers, you can reference the Lecture 2 slides or click [here](https://www.w3schools.com/cssref/sel_hover.asp)._

### Question 3. Add different background colors for all the different sections, by selecting them via ids.
_Hint: Use the # symbol to select ids._

### Question 4. Add margin, padding, and borders to the section-wrapper class!
_Learn more about the Box Model [here](https://www.w3schools.com/css/css_boxmodel.asp)._

### Question 5a. Use CSS Flexbox to display your experiences as shown in the diagram.
_Here is more information about [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) and [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)._

### Question 5b. Add a background color to the experience-list-item class.
_Notice how we have not set a background color to the experience-list-item class, but rather these elements have inherited the background color property from one of its parents._

### Question 5c. Let's take a break! Add a hover effect to each experience-list-item div. 
_Some cool CSS hover effects [here](https://css-tricks.com/css-link-hover-effects/)!_

### Question 6. Use CSS Flexbox and hover effects for the Projects Section, just as you did for the Experience Section!
_This should look similar to our CSS code for the Experience Section._

### Question 7. Make your link pretty!
_Make your link look something like the one below! Hint: set text-decoration to none, add padding, and use the box-shadow property. The background color in the image below is rgb(42, 65, 167)._
<img src="/assets/hw2/hw2-link.png" style="width: 50%; padding: 20px 0;"/>

# Optional: Do whatever you want!
You've covered the basics of HTML/CSS, congratulations! Now, make the website yours. Add as many sections as you want, change the colors, add images, and more. We want to see you have fun with it!

# Homework Submission!
To submit the homework folder, you have to zip it first. 

**To zip a folder:**
_**Windows:** Right-click the folder **fa24-hw2-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **fa24-hw2-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/) and you're done!