const express = require('express');
const Login = require('./login');
const app = express.Router();

app.use(Login);

app.get('/', (req, res) => {
  res.render('index', {
    subject: 'Trivia Home',
    name: 'our template',
    link: 'https://google.com'
  });
});

app.get('/test', (req, res) => {
  res.send('Test Hello!');
});

module.exports = app;