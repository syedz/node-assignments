const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    Subject: {
      type: String,
      required: [true, 'A class must have a Subject'],
      trim: true
    },
    NumberOfStudents: {
      type: Number,
      required: [true, 'A class must have a number of students']
    },
    Teacher: {
      type: mongoose.Schema.ObjectId,
      ref: 'Teacher',
      required: [true, 'Class must have a teacher']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Class = mongoose.model('Class', classSchema);

module.exports = Class;