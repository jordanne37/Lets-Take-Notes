const express = require("express");

const path = require("path");
const notesRouter = require('./Develop/public/assets/routes/notes');
const apiRouter = require('./Develop/public/assets/routes/api');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use("/api",apiRouter);

app.use("/notes",notesRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () => {PORT});
