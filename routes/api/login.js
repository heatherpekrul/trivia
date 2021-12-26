const express = require('express');
const app = express.Router();

app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.send();
});

module.exports = app;