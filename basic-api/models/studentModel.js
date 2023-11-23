const fs = require('fs');
const jsonFilePath = `${__dirname}/../data/students.json`;

const students = JSON.parse(
  fs.readFileSync(jsonFilePath)
);

class Student {
  constructor() {}

  getStudentById(stdId) {
    const studentId = stdId * 1;
    return students.filter((std) => std.id === studentId);
  };

  getAllStudents(cursorStr, callback) {
    const cursor = cursorStr * 1;
    
    if (cursor) {
      let filteredStudents = students.slice(0, cursor);
      callback(filteredStudents);
    } else {
      callback(students);
    }
  };

  createStudent(studentDetails, callback) {
    const newId = students[students.length - 1].id + 1;
    const newStudent = Object.assign({ id: newId }, studentDetails);

    students.push(newStudent);

    fs.writeFile(
      jsonFilePath,
      JSON.stringify(students),
      err => {
        console.log(err);
        callback(newStudent);
      }
    );
  }

  updateStudent(stdId, updatedDetails, callback) {
    const studentId = stdId * 1;
    const updatedStudent = Object.assign(updatedDetails);
    const updatedStudents = students.map((std) => (std.id === studentId ? { ...std, ...updatedStudent } : std));  

    fs.writeFile(
      jsonFilePath,
      JSON.stringify(updatedStudents),
      err => {
        console.log(err);
        callback();
      }
    );
  }

  deleteStudent(stdId, callback) {
    const studentId = stdId * 1;
    const filteredStudents = students.filter(
      (std) => std.id !== studentId
    );
  
    fs.writeFile(
      jsonFilePath,
      JSON.stringify(filteredStudents),
      err => {
        console.log(err);
        callback();
      }
    );  
  }
}

module.exports = Student;