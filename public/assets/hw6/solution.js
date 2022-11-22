const express = require("express")
const app = express()

// Ddoski: I need this so I can access it from my front-end webpage :) (https://expressjs.com/en/resources/middleware/cors.html)
var cors = require('cors')

// Ddoski: I use this to parse the data from requests! So if someone sends a post request with JSON, I can read it :D
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

// Ddoski: In the future, I'll store this in a database, but for now, I'll keep it in an array.
let flashcards = []

// Ddoski: I defined an endpoint here, so when someone sends a POST request to http://localhost:3000/new with some JSON data, 
// I add this to my flashcards array.
app.post("/new", (req, res) => {
    flashcards.push(req.body)
    res.sendStatus(200)
})

// Ddoski: Could you make an endpoint here so that if someone makes a GET request to http://localhost:3000/cards, 
// I send the flashcards array as a response?
app.get("/cards", (req, res) => {
    res.send(flashcards)
})

app.get("/card/:id", (req, res) => {
    if (req.params.id >= flashcards.length) {
        res.send("Card not created.")
    } else {
        // Ddoski: I want to send back a JSON of the flashcard at the index [req.params.id]! (Hint: res.json() might be helpful here)
        res.json(flashcards[req.params.id])
    }
})

// Ddoski: This gets a random integer!
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Ddoski: We use the previous function to randomize what card we send back!
app.get("/random", (req, res) => {
    randomNum = randomInteger(0, flashcards.length - 1)
    res.json(flashcards[randomNum])
})

// Ddoski: I want to define an endpoint here "/delete/SOMETHING", but SOMETHING is an id that I can input,
// so when we do "/delete/2", it deletes the card at index 2 in the flashcards array.

// Hint: You might use flashcards.splice(req.params.id, 1) here to delete the card.
app.get("/delete/:id", (req, res) => {
    if (req.params.id >= flashcards.length) {
        res.send("Card does not exist.")
    } else {
        flashcards.splice(req.params.id, 1)
        res.send(flashcards)
    }
})

app.listen(3000, () => {
    // Ddoski: This function starts my server so that it's listening out for requests.
    // Let's do console.log something like "Listening on port 3000" so we know our app started.
    console.log("Listening on port 3000")
})
