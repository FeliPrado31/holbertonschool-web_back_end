const http = require("http");
const countStudents = require("./3-read_file_async");

const PORT = 1245;

const app = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Holberton School!");
  }
  if (method === "GET" && url === "/students") {
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
  }
});

app.listen(PORT);

module.exports = app;
w Error('Cannot load the database');
  }
};
const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((dataShow) => {
      res.write([dataShow.numberStudents].concat(dataShow.studentsFields).join('\n'));
      res.end('\n');
    }).catch((error) => {
      res.end(error.message);
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
