const express = require('express');
const AuthMiddleware = require('./middleware/auth');
const router  = express.Router();

router.use('/api/login', require('./api/login'));

router.get('/login', (req, res) => {
  res.render('login', {
    subject: 'Trivia Login',
    name: 'our template',
    link: 'https://google.com'
  });
});

router.use(AuthMiddleware);

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

// 404
router.use(function(req, res, next) {
  res.send('oh no');
});

module.exports = router;