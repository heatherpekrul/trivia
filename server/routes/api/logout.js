var express = require('express');
const { OAuth2Client } = require('google-auth-library');
var router  = express.Router();

router.post('/logout', (req, res) => {
  console.log('logout');
  req.session.destroy(function(err) {
    return res.send();
  });
});

module.exports = router;