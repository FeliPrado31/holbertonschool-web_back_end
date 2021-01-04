const fs = require("fs");

const countStudents = (path) => {
  try {
    let res = fs.readFileSync(path, "utf8").toString().split("\n");
    res = res.slice(1, res.length - 1);
    console.log(`Number of students: ${res.length}`);
    const arrOfClass = {};
    for (const row of res) {
      const student = row.split(",");
      if (!arrOfClass[student[3]]) arrOfClass[student[3]] = [];
      arrOfClass[student[3]].push(student[0]);
    }
    for (const data in arrOfClass) {
      if (data)
        console.log(
          `Number of students in ${data}: ${
            arrOfClass[data].length
          }. List: ${arrOfClass[data].join(", ")}`
        );
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
};

module.exports = countStudents;
