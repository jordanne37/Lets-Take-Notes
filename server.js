
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const apiRoutes = require("./routes/index");
app.use(apiRoutes);
const htmlRoutes = require("./routes/index");
app.use(htmlRoutes);
app.listen(PORT, () => {PORT});



