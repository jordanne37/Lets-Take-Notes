
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const apiRoutes = require("./routes/index");
app.use("/api",apiRoutes);
const htmlRoutes = require("./routes/index");
app.use("/notes",htmlRoutes);

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {PORT});
