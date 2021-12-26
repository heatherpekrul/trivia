const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  if (!req.session && req.session.user) {
    return res.redirect('/login');
  }

  return next();
});

module.exports = router;