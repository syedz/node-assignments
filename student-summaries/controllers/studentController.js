const Student = require('../models/studentModel');

exports.getStudentSummaries = async(req, res, next) => {
  try {
    const stats = await Student.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$Age" }
        }
      },
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        stats
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};