const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log({
    reqAppSettings: req.app.settings,
    session: req.session,
    sessionuser: req.session.user,
  });
  res.render('index', {
    subject: 'Trivia Home',
    name: 'our template',
    link: 'https://google.com'
  });
});

module.exports = router;