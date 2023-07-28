# Quizlet-ish (Part 1): Make an API

## Ddoski needs your help... again!
Ddoski needs help with his final project. He wants to build a flashcard website, but so far he's only built the front-end (the webpage with HTML and CSS)! His project partner, Leland, was supposed to be working on the API, but he has gone MIA :(. Ddoski sees he started on some parts of the code. Can you finish it?

**NOTE: Every task after line 63 in index.js is optional!**

_[Download skeleton code.](assets/hw6/hw6-skeleton.zip)_

## Some Notes on Homework
If you need help with the homework, make a private post on EdStem or pull up to [virtual office hours](https://berkeley.zoom.us/j/3732485321) on Thursdays and Fridays (5.30pm - 6.30pm).

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

## Now, look in index.js, and try to fill in the methods wit Ddoski's help! We will be testing these endpoints you create in Part 3. :)

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
<img src="/assets/hw6/postman-4.PNG" style="width: 100%; padding: 20px 0;"/>

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
</br>

# Submission
To submit the homework folder, you have to zip it first. Make sure **not to include the "node_modules" folder**.

**To zip a folder:**
_**Windows:** Right-click the folder **hw6-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **hw6-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/) :)

# Part 4: Optional Questions! 

If you're interested in getting extra experience working with APIs, this section will cover how to add security to stop unwanted people from accessing your API. In most cases, this is due to API usage quotas (e.g. limit of 100 requests per user) or to prevent non-paying users from using an API.

***Quick Advice:** When you finish, make sure to read through all the code and understand what it's doing!*

We first have to install some extra dependencies for our authentication. Run these commands in your terminal:
```bash
npm install jsonwebtoken
npm install dotenv
```

Then, add this line of code to the top of your file:

```require('dotenv').config()```

## Part 4a: Adding Basic Security to Your API Methods

In this section, we'll see how to you can send a username and password into an API request to authenticate a user. This is a bad way to authenticate requests because you are sending your username and password in plain-text that can easily be stolen.

### But First: Set your custom username and password!

Before starting the tasks, make sure to update the username and password variables on line 22 to your choosing. Make sure to remember these for later!
### Optional Task 1: Use res.send() to tell the user they're already signed in.

Update the code inside the if statement to let the user know they're already signed in. If you can't find it, look for the /* OPTIONAL TASK 1 */ line.

### Optional Task 2: Set the value of enteredUsername and enteredPassword

Set the value of enteredUsername and enteredPassword equal to username and password from req.headers. This will let us detect whether the username and password passed in was correct or not. Once again, if you can't find it, look for the /* OPTIONAL TASK 2 */ line.

### Optional Task 3: Use an If/Else Block to Check User Authentication

Lastly, use an If/Else block with the value of the variable signedIn to check if the user is signed in or not. If they are, we want to use res.send() to send back the flashcards. Otherwise, we want to tell the user that they're not signed in.

### Test Your Code!

Run "node index.js" on your terminal and then open up Postman. Run the following GET request ("/sign-in-with-basic-security") with the appropriate header! You should set the "auth" header equal to **(YOUR USERNAME):(YOUR PASSWORD)**. (The same username/password you defined at the top of the file!)

**Postman:**
<img src="/assets/hw6/postman-8.jpg" style="width: 100%; padding: 20px 0;"/>

Then try signing out (no headers are required!). Use the "/sign-out-with-basic-security" method:

**Postman:**
<img src="/assets/hw6/postman-9.jpg" style="width: 100%; padding: 20px 0;"/>


## Part 4b: Adding Advanced Security to Your API Methods

In this section, we'll see how you can use modern and secure web-development methods to add authentication to your API requests.
We'll be using a node package called JWT or JSON Web Token to make sure your user's credentials are secure.

### Create a .env file

Before we start our advanced security, we want to create a .env file that will store a value called **ACCESS_TOKEN_SECRET**. To do this, first head to [this link](https://generate-random.org/api-token-generator?count=1&length=64&type=mixed-numbers-symbols&prefix=) and generate a 64-bit randomized API token:

**Token Generator:**
<img src="/assets/hw6/random-token-generator.jpg" style="width: 100%; padding: 20px 0;"/>

Then create a new file in your project directory called ".env" and paste your token exactly like I have (set the value of ACCESS_TOKEN_SECRET):

**Creating a .env File**
<img src="/assets/hw6/dotenvfile.jpg" style="width: 100%; padding: 20px 0;"/>

You're now ready to start the first and last task of this section.

### Optional Task 4: Set the value of enteredUsername and enteredPassword

Before starting this task, let's quickly read over the "/sign-in-secure" method.

<img src="/assets/hw6/secure-sign-in-code.jpg" style="width: 100%; padding: 20px 0;"/>

This method takes in a username and password header, and will use it to create a user object. 

Then, using jwt.sign(), we will encrypt this user object in the form of a long string of characters. This string can only be deciphered using our ACCESS_TOKEN_SECRET, so only us and that user will know the username and password of a user. 

This long string of characters token is called a JWT token and it's going to be sent back to us. 

Let's test this out. Send the following request to "/sign-in-secure":

**Postman:**
<img src="/assets/hw6/postman-10.jpg" style="width: 100%; padding: 20px 0;"/>

Copy the JWT token that was returned (called accessToken).

When we use this JWT token in further requests, we want to append a string "Bearer " to the front of it.

This is what this next task is about. Because our JWT token will have the form: "Bearer G!yn2Qw....", we only want to get the second part of the string separated by a space, which is our actual token. 

**Here's your task:** use .split() and array indexing to get the token value from the variable auth. Look for /* OPTIONAL TASK 4 */ in your code.

Let's now test this authentication using a new GET method called "/cards-with-good-security". This will do exactly the same as our previous "/cards" method, but it'll only return the card if the user is signed in with our secure JWT token method.

Run the following Postman request with a header "authorization" equal to "Bearer (YOUR JWT TOKEN HERE)". This is what it should look like:

**Postman:**
<img src="/assets/hw6/postman-11.jpg" style="width: 100%; padding: 20px 0;"/>

**Note:** I'm getting an empty array back because I created no cards. If you have a list of cards or an empty array, then it's working!

Then, try changing your JWT token to something else. See how our request is not longer valid:

**Postman:**
<img src="/assets/hw6/postman-12.jpg" style="width: 100%; padding: 20px 0;"/>

### You've Now Finished The Optional Task!

To submit, go to the [Gradescope](https://gradescope.com) assignment called "Homework 6 Optional"! You'll be able to get some extra points and maybe we'll even see your stuff in lecture. :)