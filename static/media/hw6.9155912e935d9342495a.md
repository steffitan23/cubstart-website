# HW 6: Quizlet-ish (Part 1): Make a Flashcard API

## Ddoski needs your help!
Ddoski wants to build a flashcard website, but so far he's only built the frontend (the webpage with HTML and CSS)! His project partner, Oski, was supposed to be working on the API, but he has gone MIA :(. Ddoski sees he started on some parts of the backend code. Can you finish it?

_[Download skeleton code.](assets/hw6/sp24-hw6-skeleton.zip)_

# Part 1: Set up your Project
First, download [Node.js](https://nodejs.org/en/download/).

After extracting your skeleton code zip file, you will need to run the following commands in your terminal in the sp24-hw6-skeleton folder. You can use the VSCode terminal, which you can open by going to Terminal > New Terminal from the menu at the top. An alternative is you can open up Terminal on Mac or GitBash on Windows and change directories (e.g. cd Desktop) into the sp24-hw6-skeleton folder.

Run these commands in your terminal:
```bash
npm init
```
This should give you a couple of questions on package-name, description, author, etc. Fill these in if you want, but **feel free to just press Enter all the way to skip it**. Now your project is created!

We have to install some dependencies for our project. Run these commands in your terminal:
```bash
npm install express
npm install body-parser
npm install cors
```

This should install [Express](https://expressjs.com/), [Body-Parser](https://www.npmjs.com/package/body-parser), and [CORS](https://www.npmjs.com/package/cors) in your project. Take a look at **package.json** to see them in your dependencies list! Now, if anyone downloads your project (without having to download your huge node_modules folder), they can just run the command **npm install** and get the project up and running.

Your folder should look like this:

<img src="/assets/hw6/folder.PNG" style="width: 30%; padding: 20px 0;"/>


# Part 2: Make a Flashcard API!
If you don't remember how to use Express, you might want to look at a simple guide [here](https://expressjs.com/en/starter/basic-routing.html) or at the [Lecture/Lab 6 Slides](https://docs.google.com/presentation/d/1n0ersNZPwSVEaPOPSjo4EphlGFBNMzDsf6456ieQB1g/edit?usp=sharing).

Before you start, you should know what we're trying to achieve. Here is all of the functionality your API should have:
- Add cards with "/new" endpoint
- Retrieves cards with "/cards" endpoint
- Retrieve a specific card with "/card/:index" endpoint
- Retrieves a random card with "/random" endpoint
- Deletes a specific card with an endpoint that you'll write

_Go to **index.js**, and fill in Questions 1-4 with Ddoski's help! We will be testing these endpoints you create in Part 3. :)_

# Part 3: Running and Testing your API

When you're done, run this line in your terminal to run your API.
```bash
node index.js
```
You <mark>**MUST**</mark> download the Postman desktop app [here](https://www.postman.com/downloads/) because Postman on a browser will not make requests to localhost. We will use the Postman desktop app to send requests to your flashcards API and make sure that it works as intended.

**Every time you change something in index.js, you must rerun "node index.js" in your terminal.** To do this, follow these steps:
1. Save the file in VSCode.
2. Type Ctrl+C in the terminal to cancel the currently running program.
3. Run "node index.js" again to restart your server.

<br><br><br>

## Add 3 flashcards with the "/new" endpoint
Make 3 POST requests to the /new endpoint using Postman. Set the request type to POST from the dropdown menu. In the Body tab, select "raw" and then "JSON". Then, send some JSON data with "front" and "back" set to the front and the back text of the flashcard respectively. Here is an example:

<img src="/assets/hw6/postman-1.PNG" style="width: 100%; padding: 20px 0;"/>

</br></br></br>
## Retrieve cards with "/cards" endpoint
We should be able to retrieve all our flashcards too. Don't forget to set the request type to GET!

<img src="/assets/hw6/postman-4.PNG" style="width: 100%; padding: 20px 0;"/>

</br></br></br>
## Retrieve a specific card with "/card/:index" endpoint
Sending a GET request to "/card/2" should retrieve the card at index 2 in the flashcards array (unless your array has less than 3 cards).

<img src="/assets/hw6/postman-5.PNG" style="width: 100%; padding: 20px 0;"/>

</br></br></br>
## Retrieve a random card with "/random" endpoint
We might want to randomize a card so that we can learn the content better!

<img src="/assets/hw6/postman-6.PNG" style="width: 100%; padding: 20px 0;"/>

</br></br></br>

## Delete a specific card
In the example below, we have deleted the card at index 1 and our API responded with the updated flashcards array after deletion occured.
<img src="/assets/hw6/postman-7.PNG" style="width: 100%; padding: 20px 0;"/>
</br>

# Submission
For HW 6, <mark>**only submit your index.js file**</mark>. This is because node_modules is quite a large folder and it might take some time to upload. Zip your index.js file and submit to Gradescope!

**To zip a folder/file:**
_**Windows:** Right-click the folder **sp24-hw6-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **sp24-hw6-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/) :)