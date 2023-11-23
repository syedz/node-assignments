const fs = require('fs');

const jsonFilePath = `${__dirname}/../data/students.json`;
const students = JSON.parse(
  fs.readFileSync(jsonFilePath)
);

exports.getAllStudents = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      students: students
    }
  });
};

exports.getStudentById = (req, res, next) => {
  const studentId = req.params.studentId * 1;
  const student = students.filter((std) => std.id == studentId);

  res.status(200).json({
    status: 'success',
    data: {
      student: student
    }
  });
};

exports.createStudent = (req, res, next) => {
  const newId = students[students.length - 1].id + 1;
  const newStudent = Object.assign({ id: newId }, req.body);

  students.push(newStudent);

  fs.writeFile(
    jsonFilePath,
    JSON.stringify(students),
    err => {
      console.log(err);
      res.status(201).json({
        status: 'success',
        data: {
          student: newStudent
        }
      });
    }
  );
};