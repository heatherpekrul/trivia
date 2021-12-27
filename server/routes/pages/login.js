const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  console.log('login2');
  res.render('login', {
    subject: 'Trivia Login',
    name: 'our template',
    link: 'https://google.com'
  });
});

module.exports = router;