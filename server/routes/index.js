const express = require('express');
const router  = express.Router();

const Api = require('./api');
const AuthMiddleware = require('./middleware/auth');
const HomePage = require('./pages/home');
const LoginPage = require('./pages/login');

router.use(Api);

router.use(LoginPage);

router.use(AuthMiddleware);

router.use(HomePage);

// 404
router.use(function(req, res, next) {
  res.send('oh no');
});

module.exports = router;