const express = require('express');
const bodyParser = require('body-parser');
const JsonHeader = require('../middleware/json');
const Login = require('./login');

const app = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(JsonHeader);

app.use(Login);

module.exports = app;
