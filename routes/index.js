const router = require('express').Router();
const express = require("express");
const dbJson = require("./db/db.json");
const path = require("path");

// api routes
router.get("/api/notes", async function (req, res) {
    const notes = await dbJson.readNotes();
    return res.json(notes);
});


router.post("/api/notes", async function (req, res) {
    const theNotes = await dbJson.readNotes();
    let newNotes = {
        title: req.body.title,
        text: req.body.text,
    };

await dbJson.addNote([...theNotes, newNotes]);

return res.send(newNotes);
})
// router.delete("/api/notes", (req, res) => {
    // const deleteNotes = 
// })


// html routes
// router.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// router.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
// })

module.exports = router;