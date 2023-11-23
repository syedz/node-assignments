exports.getAllStudents = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      test: 'something'
    }
  });
};