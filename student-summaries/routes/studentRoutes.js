const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router
  .route('/summaries')
  .get(studentController.getStudentSummaries);

module.exports = router;