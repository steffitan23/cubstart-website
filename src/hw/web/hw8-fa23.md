# HW 8: Create your own API!

In this homework, you will review how to create an API server using Node, Express, MongoDB, and mongoose. There's no skeleton code. We will guide you through this assignment step by step.

## Part 0:

_No coding for this part! Brainstorm some ideas: what **data** do you want your API to store? What sort of **fields/properties** do you want each MongoDB document to have? What **endpoints** will you implement?_

**Example:**
The BooksAPI will store a collection of classic novels. Each piece of data will have an title and year. Endpoints will include a POST request that will add a book and a GET request to retrieve a list of all books.

<mark>Do NOT use the BooksAPI example above.</mark> If you can't think of anything, implement a movies API.

## Part 1: Project Setup

1. Make sure you have **Node.js** installed and have set up a **MongoDB** account.
2. Create a new folder for this homework somewhere on your computer
3. Open this folder in VS Code and create an index.js file for your server
4. Open up the terminal (Terminal->New Terminal in VS Code or default Mac/Windows terminal and change directories to your newly created folder) and run **npm init** (press enter for all questions)
5. Run the following line in the terminal to install express, body-parser, cors, and mongoose.
```bash
npm install express body-parser cors mongoose
```

## Part 2: Database Setup

Go to MongoDB. Use the same cluster and database as the last homework. Go to this cluster and click **connect**. <br></br>
<img src="/assets/hw7/connect-mongodb.png" style="width: 50%; padding: 20px 0;"/>

Click **MongoDB for VS Code**. Copy the connection string and save for later.
<img src="/assets/hw7/mongo-url.png" style="width: 50%; padding: 20px 0;"/>

## Part 3: Import modules + connect to MongoDB

Copy and paste this code into your **index.js file**. This code imports the necessary modules and connects to your MongoDB database.

```js
const express = require("express")
const app = express()

var cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connect().catch(err => console.log(err))

async function connect() {
  await mongoose.connect(/* YOUR CONNECTION STRING HERE */)
  console.log("Successfully connected to MongoDB")
}
```

**Paste your connection string** into the appropriate place. Use the **same password** from the last homework. Don't forget quotation marks! Note that this password is NOT your account password, but a user password. If you forgot it, on the side menu, go to Security->Database Access->Edit->Edit Password and create a new password.

## Part 4: Define a Schema and Model

Define a schema using Mongoose. The schema should include fields that make sense for **your own data and API**. Feel free to **copy-paste** all of the code in the spec, but modify to fit the data you want to store.

```js
const bookSchema = new mongoose.Schema({
  title: String,
  year: Number
});
```

Define a model using Mongoose.

```js
const Book = mongoose.model('Books', bookSchema);
```

## Part 5: Define a POST endpoint

Remember that in a POST request, the data that you want to save to your database will be found in **req.body** as a JavaScript object with key-value pairs.

```js
app.post("/new", async (req, res) => {
    // Here, we create a new Book from the mongoose model
    // and set its properties to whatever the user sent in the body of the POST request
    const newBook = new Book({
        title: req.body.title,
        year: req.body.year
    })
    // Then, we save the newly created document to the database
    await newBook.save()
    // Finally, we send the newBook data back to the user as a response in JSON format
    res.json(newBook) 
})
```

## Part 6: Define a GET endpoint

Define a GET endpoint that will retrieve all documents.

```js
app.get("/books", async (req, res) => {
    const books = await Book.find()
    res.send(books)
})
```

## Part 6.5: Start your Server

```js
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
```

_Run **node index.js** in the terminal._

 If an error occurs, it will be printed in the terminal. If the error looks like this: <code>"MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted."</code>, then follow these steps:
1. Go to MongoDB and on the side menu, go to Security->Network Access.
2. Click "+Add IP Address".
3. Copy your IP Address from [here](https://whatismyipaddress.com/) under IPv4.
4. Paste it into "Access List Entry" and click "Confirm".
5. Rerun **node index.js**. If you are getting the same error, click "+Add IP Address" and "Allow Access from Anywhere" and "Confirm".

## Part 7: Testing

Run **node index.js** and use Postman to test your API. Check your MongoDB collection to ensure that your POST requests are working.

<img src="/assets/hw8/book-post.png" style="width: 100%; padding: 20px 0;"/>
<img src="/assets/hw8/book-get.png" style="width: 100%; padding: 20px 0;"/>
<img src="/assets/hw8/book-mongo.png" style="width: 100%; padding: 20px 0;"/>


Congrats, you are done! You've created a fully functional server!

## +2 POINTS EXTRA CREDIT (OPTIONAL): Create a Frontend

Create an **index.html** and **scripts.js** file. Here is some basic frontend code. Modify it to fit your API.

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
</head>
<body>
    <h1>Post a book</h1>
    <input id="input-title" type="text">
    <input id="input-year" type="text">
    <button id="submit-post-request">Submit</button>

    <h1>Get all books</h1>
    <button id="submit-get-request">Submit</button>
    <ul id="list"></ul>

    <script src="scripts.js"></script>
</body>
</html>
```

<br></br>

```bash
const inputTitle = document.getElementById("input-title")
const inputYear = document.getElementById("input-year")

const submitPostReq = document.getElementById("submit-post-request")
const submitGetReq = document.getElementById("submit-get-request")

const list = document.getElementById("list")

submitPostReq.addEventListener("click", async function () {
    let data = {"title": inputTitle.value, "year": inputYear.value}
    await fetch("http://localhost:3000/new", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
    inputTitle.value = ""
    inputYear.value = ""
});

submitGetReq.addEventListener("click", async function () {
    list.replaceChildren()
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json()
    for (let index = 0; index < data.length; index = index + 1) {
        const bookTitle = data[index].title
        const listElement = document.createElement("li")
        listElement.textContent = bookTitle
        list.appendChild(listElement)
    }
});

```

Run **node index.js**. Any errors will appear in the terminal. Use **console.log** in the scripts.js file to debug. Open the **index.html** file in a browser and play around with your app!

# Submission
For this homework, <mark>only submit your index.js file</mark>.

**To zip a folder/file:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com) :)