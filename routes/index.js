var express = require('express');
var app = express.Router();

app.get('/', (req, res) => {
  res.render('index', {
    subject: 'Trivia Home',
    name: 'our template',
    link: 'https://google.com'
  });
});

app.get('/login', (req, res) => {
  res.render('login', {
    subject: 'Trivia Login',
    name: 'our template',
    link: 'https://google.com'
  });
});

app.get('/test', (req, res) => {
  res.send('Test Hello!');
});

module.exports = app;
