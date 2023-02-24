# Quizlet-ish (Part 1): Make an API

## Ddoski needs your help... again!
Ddoski needs help with his final project. He wants to build a flashcard website, but so far he's only built the front-end (the webpage with HTML and CSS)! His project partner, Leland, was supposed to be working on the API, but he has gone MIA :(. Ddoski sees he started on some parts of the code. Can you finish it?

_[Download skeleton code.](assets/hw6/hw6-skeleton.zip)_

# Part 1: Set up your Project
First, download [Node.js](https://nodejs.org/en/download/).

After extracting your skeleton code zip file, in your "hw6-skeleton" folder (create a folder with the extracted index.js file in it), run these commands in your terminal:
```bash
npm init
```
This should give you a ton of questions on package-name, description, author, etc.. Fill these in if you want, but **feel free to just press Enter all the way to skip it**. Now your project is created!

We have to install some dependencies for our project. Run these commands in your terminal:
```bash
npm install express
npm install body-parser
npm install cors
```

You can explore more packages [here](https://www.npmjs.com).

This should install [Express](https://expressjs.com/), [Body-Parser](https://www.npmjs.com/package/body-parser), and [CORS](https://www.npmjs.com/package/cors) in your project. Take a look at **package.json** to see them in your dependencies list! Now, if anyone downloads your project (without having to download your huge node_modules folder), they can just run the command **npm install** and get the project up and running.

Your folder should look like this:

<img src="/assets/hw6/folder.PNG" style="width: 70%; padding: 20px 0;"/>


# Part 2: Make an API!
_If you don't remember how to use Express, you might want to look at a simple guide [here](https://expressjs.com/en/starter/basic-routing.html) or at the [lecture slides](/#/schedule)._

Before you start, you should know what we're trying to achieve. Here, we have documenting all the functionalities your API should have.

**We're going to see how this look in 2 ways: sending requests with [Postman](https://www.postman.com/downloads/), and sending requests with [cURL](https://gist.github.com/afair/5265874).**

Here is a summary of all the functionalities:
- Add cards with "/new" endpoint
- Retrieves cards with "/cards" endpoint
- Retrieve a specific card by their id with "/cards/ID_HERE" endpoint
- Retrieves a random card with "/random" endpoint
- Deletes a specific card by their id with "/delete/ID_HERE" endpoint

# IMPORTANT: Running your API
When you're done, do 
```bash
node index.js
```
to run your API. Then, we can use cURL and Postman to send requests to it. **You have to rerun this every time you change something in index.js. Remember to save the file and do "node index.js" again.**

# Part 3: Examples: Functionality

## Add cards with "/new" endpoint
Here in Postman, we've set the request to POST instead of GET, sending a JSON with "front" and "back" set to the front and the back text of the flashcard respectively.

_You can download and try Postman [here](https://www.postman.com/downloads/)._
<img src="/assets/hw6/postman-1.PNG" style="width: 100%; padding: 20px 0;"/>

We do the same thing here but in a [cURL](https://gist.github.com/afair/5265874) request.
```bash
$ curl -X POST http://localhost:3000/new -H 'Content-Type: application/json' -d '{"front":"What is the powerhouse of the cell?", "back":"Mitochondria"}'
OK

$ curl -X POST http://localhost:3000/new -H 'Content-Type: application/json' -d '{"front":"What is the formula for Newtons Second Law?", "back":"F=ma"}'
OK

$ curl -X POST http://localhost:3000/new -H 'Content-Type: application/json' -d '{"front":"What is the 26th element?", "back":"Iron"}'
OK
```
</br></br></br>
## Retrieves cards with "/cards" endpoint
We should be able to retrieve all our flashcards too. 

**Postman:**
<img src="/assets/hw6/postman-1.PNG" style="width: 100%; padding: 20px 0;"/>

**Terminal (cURL):**
```bash
$ curl http://localhost:3000/cards
[{"front":"What is the powerhouse of the cell?","back":"Mitochondria"},{"front":"What is the formula for Newtons Second Law?","back":"F=ma"},{"front":"What is the 26th element?","back":"Iron"}]
```
</br></br></br>
## Retrieve a specific card by their id with "/cards/ID_HERE" endpoint
We see the result of sending a GET request to "/cards/2", retrieving the card with index 2 in the flashcards array. Different IDs replacing the '2' would result in those cards being returned from the array instead.

**Postman:**
<img src="/assets/hw6/postman-5.PNG" style="width: 100%; padding: 20px 0;"/>

**Terminal (cURL):**
```bash
$ curl http://localhost:3000/card/2
{"front":"What is the 26th element?","back":"Iron"}
```
</br></br></br>
## Retrieves a random card with "/random" endpoint
We might want to randomize a card so that we can learn the content better!

**Postman:**
<img src="/assets/hw6/postman-6.PNG" style="width: 100%; padding: 20px 0;"/>

**Terminal (cURL):**
```bash
$ curl http://localhost:3000/random
{"front":"What is the powerhouse of the cell?","back":"Mitochondria"}
```
</br></br></br>

## Deletes a specific card by their id with "/delete/ID_HERE" endpoint

<img src="/assets/hw6/postman-7.PNG" style="width: 100%; padding: 20px 0;"/>
</br></br></br>

# Submission
To submit the homework folder, you have to zip it first. Make sure **not to include the "node_modules" folder**.

**To zip a folder:**
_**Windows:** Right-click the folder **hw6-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **hw6-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)
