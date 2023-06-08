const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

//Importing the db.json object
const db = require("../../../db/db.json");

router.use(express.json());

let noteArray;

fs.readFile(path.join(__dirname, "../../../db/db.json"), (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    //Reading the data from noteArray
    noteArray = JSON.parse(data);
});

router.get("/notes", (req, res) => {
    console.log(`GET NOTES`);
    res.json(noteArray);
});

//Creating notes
router.post("/notes", (req, res) => {
    console.log(`POSTED NOTES`);
    if(!req.body.title && !req.body.text){
        return res.status(400).send("Cannot Find Notes");
    } 

    console.log("THE BODY INFO: ", req.body);

    const noteInfo = {
        id: noteArray.length + 1,
        title: req.body.title,
        text: req.body.text
    }
    
    noteArray.push(noteInfo);

    
    fs.writeFile(path.join(__dirname, "../../../db/db.json"), JSON.stringify(noteArray), (error) => {
        if(error) {
            console.log(error);
        }
        console.log("File Successfully Created!");
    });
    
    res.send(noteArray);
});

//Deleting notes
router.delete("/notes/:id", (req, res) => {
    console.log(`Deleted NOTES`);
   
    noteArray = noteArray.filter((note) => {

        return note.id != req.params.id;
    });

     fs.writeFile(path.join(__dirname, "../../../db/db.json"), JSON.stringify(noteArray), (error) => {
        if(error) {
            console.log(error);
        }
        console.log("Successfully removed id!");
        res.send("Information deleted from notes.");
    });
});

module.exports = router;