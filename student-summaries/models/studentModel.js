const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'A student must have a name'],
      trim: true
    },
    Age: {
      type: Number,
      required: [true, 'A student must have an age']
    },
    Grade: {
      type: String,
      required: [true, 'A student must have a grade']
    },
    Class: {
      type: mongoose.Schema.ObjectId,
      ref: 'Class',
      required: [true, 'Student must have a class']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;