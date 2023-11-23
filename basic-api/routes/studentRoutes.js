const express = require('express');
const studentController = require('./../controller/studentController');

const router = express.Router();

router
  .route('/')
  .get(studentController.getAllStudents)

module.exports = router;