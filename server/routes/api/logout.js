var express = require('express');
const { OAuth2Client } = require('google-auth-library');
var router  = express.Router();

router.post('/api/logout', (req, res) => {
  req.session.destroy(function(err) {
    return res.send();
  });
});

module.exports = router;