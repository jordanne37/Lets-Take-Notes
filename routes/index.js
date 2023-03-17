const router = express.Router();
const dbJson = require("./db/db.json");
const path = require("path");
const express = require("express")
const fs = require("fs");

router.use(express.json())

let arrayNotes;

fs.readFile(path.join(__dirname, "./db/db.json"))

arrayNotes = JSON.parse()
// api routes
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    const theNote = {
        id: arrayNotes.length +1,
        title: req.body.title,
        text: req.body.text
    }
    arrayNotes.push(theNotes);

    fs.writeFile(path.join(__dirname, "./db/db.json"));
    res.send(arrayNotes);
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})
module.exports = router;