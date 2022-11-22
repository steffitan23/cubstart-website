const express = require("express")
const app = express()

var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect().catch(err => console.log(err))

async function connect() {
  await mongoose.connect('YOUR_MONGODB_URL')
}

const flashcardSchema = new mongoose.Schema({
  front: String,
  back: String
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema)

app.post("/new", async (req, res) => {
    const newCard = new Flashcard({front:req.body.front, back:req.body.back});
    await newCard.save()
    return res.send(newCard)
})

app.get("/cards", async (req, res) => {
    const foundCards = await Flashcard.find()
    return res.send(foundCards)
})

app.get("/card/:id", async (req, res) => {
    const foundCard = await Flashcard.findById(req.params.id)
    return res.send(foundCard)
})

app.get("/delete/:id", async (req, res) => {
    const foundCard = await Flashcard.findByIdAndDelete(req.params.id)
    return res.send(foundCard)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})