var express = require('express');
var app = express.Router();

const Api = require('./api');
const Pages = require('./pages');

app.use(Pages);

app.use(Api);

module.exports = app;
