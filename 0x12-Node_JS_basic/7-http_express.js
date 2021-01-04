const express = require("express");
const countStudents = require("./3-read_file_async");

const app = express();
const PORT = 12345;

app.get("/", (req, res) => res.send("Hello Holberton School!"));
app.get("/students", (req, res) => {
  countStudents(String(process.argv.slice(2)))
    .then((arrOfClass) => {
      res.write("This is the list of our students\n");
      res.write(`Number of students: ${arrOfClass.count}\n`);
      for (const data in arrOfClass) {
        if (data && data !== "count")
          res.write(
            `Number of students in ${data}: ${
              arrOfClass[data].length
            }. List: ${arrOfClass[data].join(", ")}\n`
          );
      }
      res.end();
    })
    .catch((err) => {
      throw err;
    });
});
app.listen(PORT);

module.exports = app;
