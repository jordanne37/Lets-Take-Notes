
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
// const noteCreate = require("./db/db.json");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const apiRoutes = require("./routes/index.js");
app.use(apiRoutes);
const htmlRoutes = require("./routes/index.js");
app.use(htmlRoutes);
app.listen(PORT, () => console.log("HELLO WORLD"));


// app.get("/api/notes", (req, res) => {
//     res.json(noteCreate)
// });

