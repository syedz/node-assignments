const express = require('express');
const studentController = require('./../controllers/studentController');

const router = express.Router();

router
  .route('/')
  .get(studentController.getAllStudents)
  .post(studentController.createStudent);

router
  .route('/:studentId')
  .get(studentController.getStudentById)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent)

module.exports = router;