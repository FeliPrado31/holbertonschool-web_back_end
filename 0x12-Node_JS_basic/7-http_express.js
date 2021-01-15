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
        dataShow.studentsFields.push(`Number of students in ${field}: ${list.length}. List: ${list.toString().replace(/,/g, ', ')}`);
      }
    }
    return dataShow;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2]).then((dataShow) => {
    res.write([dataShow.numberStudents].concat(dataShow.studentsFields).join('\n'));
    res.end('\n');
  }).catch((error) => {
    res.end(error.message);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
