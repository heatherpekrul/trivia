const express = require('express');
const app = express.Router();

const Login = require('./login');

app.use(Login);

app.get('/', (req, res) => {
  res.render('index', {
    subject: 'Trivia Home'
  });
});

app.get('/test', (req, res) => {
  res.send('Test Hello!');
});

app.get('/error', (req, res) => {
  res.render('error');
});

module.exports = app;