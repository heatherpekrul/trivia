const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', {
    subject: 'Trivia Login',
    name: 'our template',
    link: 'https://google.com'
  });
});

module.exports = router;