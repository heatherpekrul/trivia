var express = require('express');
var app = express.Router();

const Api = require('./api');
const Pages = require('./pages');

app.use(Api);
app.use(Pages);

module.exports = app;
