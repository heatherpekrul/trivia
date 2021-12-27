const express = require('express');
const router  = express.Router();

const Api = require('./api');
const AuthRedirectMiddleware = require('./middleware/authRedirect');
const HomePage = require('./pages/home');
const LoginPage = require('./pages/login');

router.use(Api);

router.use(LoginPage);

router.use(AuthRedirectMiddleware);

router.use(HomePage);

// 404
router.use(function(req, res, next) {
  res.send('oh no');
});

module.exports = router;