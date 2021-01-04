const fs = require("fs");

const countStudents = (path) => {
  const promise = (response, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(Error("Cannot load the database"));
      if (data) {
        let res = data.toString().split("\n");
        res = res.slice(1, res.length - 1);
        console.log(`Number of students: ${res.length}`);
        const arrOfClass = {};
        for (const row of res) {
          const student = row.split(",");
          if (!arrOfClass[student[3]]) arrOfClass[student[3]] = [];
          arrOfClass[student[3]].push(student[0]);
        }
        for (const cls in arrOfClass) {
          if (cls)
            console.log(
              `Number of students in ${cls}: ${
                arrOfClass[cls].length
              }. List: ${arrOfClass[cls].join(", ")}`
            );
        }
      }
      response();
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
