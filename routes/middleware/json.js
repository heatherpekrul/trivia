const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

module.exports = app;