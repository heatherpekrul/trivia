const express = require('express');
const router = express.Router();

router.get('/*', function(req, res) {
  const user = JSON.stringify((req.session && req.session.user) ? req.session.user : {});
  res.render('index', {
    title: 'Trivia Home',
    user,
  });
});

module.exports = router;