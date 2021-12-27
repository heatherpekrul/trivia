const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Trivia Home',
  });
});

module.exports = router;