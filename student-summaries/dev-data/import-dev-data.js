const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./../models/studentModel');
const Teacher = require('./../models/teacherModel');
const Class = require('./../models/classModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const teachers = JSON.parse(fs.readFileSync(`${__dirname}/teachers.json`, 'utf-8'));
const classes = JSON.parse(fs.readFileSync(`${__dirname}/classes.json`, 'utf-8'));
const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Teacher.create(teachers);
    await Class.create(classes);
    await Student.create(students);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Teacher.deleteMany();
    await Class.deleteMany();
    await Student.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

