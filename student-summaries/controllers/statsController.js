const Class = require('../models/classModel');
const Student = require('../models/studentModel');

const getTotalNumberOfStudents = () => {
  return Student.countDocuments();
}

const getAverageAgeOfStudents = async () => {
  return Student.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: '$Age' }
        }
      }
    ])
    .then(aggregateResult => aggregateResult[0].averageAge);
}

const getNumberOfClassesOffered = async () => {
  return Class.countDocuments();
}

exports.getSummaries = async(_, res) => {
  try {
    const [
      totalStudents,
      averageAge,
      totalClasses
    ] = await Promise.all([
      getTotalNumberOfStudents(),
      getAverageAgeOfStudents(),
      getNumberOfClassesOffered()
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        totalStudents,
        averageAge,
        totalClasses
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};