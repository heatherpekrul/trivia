const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('home');

  res.render('index', {
    subject: 'Trivia Home',
  });
});

module.exports = router;