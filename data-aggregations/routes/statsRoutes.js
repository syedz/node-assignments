const express = require('express');
const studentController = require('../controllers/statsController');

const router = express.Router();

router
  .route('/summaries')
  .get(studentController.getSummaries);

module.exports = router;