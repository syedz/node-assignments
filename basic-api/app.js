const express = require('express');

const studentRouter = require('./routes/studentRoutes');

// Start express app
const app = express();

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use('/students', studentRouter);

app.all('*', (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;