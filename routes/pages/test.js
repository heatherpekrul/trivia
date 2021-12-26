var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
  console.log({
    ENV: req.app.get('env'),
    reqsettings: req.app.settings,
    GOOGLE_CLIENT_ID: req.app.settings.GOOGLE_CLIENT_ID,
  });
  res.render('index', {
    subject: 'Trivia Test',
    name: 'our template',
    link: 'https://google.com'
  });
});

module.exports = router;