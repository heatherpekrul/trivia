const express = require('express');
const GoogleConfig = require('./google');
const app = express();

app.use(GoogleConfig);

module.exports = app;