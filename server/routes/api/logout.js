var express = require('express');
var router  = express.Router();

router.post('/api/logout', (req, res) => {
  req.session.destroy(function(err) {
    return res.send();
  });
});

module.exports = router;