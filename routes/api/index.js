const express = require('express');
const bodyParser = require('body-parser');
const JsonHeader = require('../middleware/json');
const Auth = require('./auth');

const app = express.Router();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(JsonHeader);

// Routes
app.use(Auth);

module.exports = app;
