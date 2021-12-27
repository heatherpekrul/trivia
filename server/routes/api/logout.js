const express = require('express');
const router  = express.Router();

router.post('/api/logout', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  req.session.destroy(function(err) {
    return res.send();
  });
});

module.exports = router;