const express = require("express");

const app = express();
const PORT = 12345;

app.get("/", (req, res) => res.send("Hello Holberton School!"));

app.listen(PORT);

module.exports = app;
