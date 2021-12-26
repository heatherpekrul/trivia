const express = require('express');
const app = express();

app.use(function (req, res, next) {
  app.set('GOOGLE_CLIENT_ID', '329235712483-f2isifu37ih9eguiaha6aoe4hgeafkh3.apps.googleusercontent.com');
  next();
});

module.exports = app;