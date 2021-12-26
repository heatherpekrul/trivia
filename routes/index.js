var express = require('express');
var app = express.Router();

app.get('/', (req, res) => {
  res.render('index', {
    subject: 'EJS template engine',
    name: 'our template',
    link: 'https://google.com'
  });

  // res.send('Hello World!');
});


app.get('/test', (req, res) => {
  res.send('Test Hello!');
});

module.exports = app;
