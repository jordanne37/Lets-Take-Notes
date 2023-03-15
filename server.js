const PORT = process.env.PORT || 3001;

const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

const noteCreate = require("./Develop/db/db.json");

app.get("/api/notes", (req, res) => {
    res.json(noteCreate)
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

function makeNewNote()
