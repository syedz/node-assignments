const Student = require('../models/studentModel');
const studentObj = new Student();

exports.getAllStudents = (req, res) => {
  let cursor = req.query.cursor;
  studentObj.getAllStudents(cursor, (students) => {
    res.status(200).json({
      status: 'success',
      data: {
        students
      }
    });
  });
};

exports.getStudentById = (req, res) => {  
  const studentId = req.params.studentId;
  const student = studentObj.getStudentById(studentId);

  res.status(200).json({
    status: 'success',
    data: {
      student: student
    }
  });
};

exports.createStudent = (req, res) => {
  const studentDetails = req.body;
  studentObj.createStudent(studentDetails, (student) => {
    res.status(201).json({
      status: 'success',
      data: {
        student
      }
    });
  });
};

exports.updateStudent = (req, res) => {
  const studentId = req.params.studentId;
  const updatedStudent = Object.assign(req.body);

  studentObj.updateStudent(studentId, updatedStudent, () => {
    res.status(200).json({
      status: 'success',
      data: updatedStudent
    });
  });
};

exports.deleteStudent = (req, res) => {
  const studentId = req.params.studentId;

  studentObj.deleteStudent(studentId, () => {
    res.status(204).json({
      status: 'success',
      data: null
    });
  });
};