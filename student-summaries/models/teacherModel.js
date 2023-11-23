const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'A teacher must have a name'],
      trim: true
    },
    Subject: {
      type: String,
      required: [true, 'A teacher must have a subject'],
      trim: true
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;