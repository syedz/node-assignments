const express = require('express');
const studentController = require('./../controller/studentController');

const router = express.Router();

router
  .route('/summaries')
  .get(studentController.getStudentSummaries);

module.exports = router;