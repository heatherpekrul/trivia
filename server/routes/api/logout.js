const express = require('express');
const router  = express.Router();
const IsAuthenticated = require('../../utilities/isAuthenticated');

router.post('/api/logout', (req, res) => {
  if (!IsAuthenticated(req)) return res.status(401).send();

  res.setHeader('Content-Type', 'application/json');
  req.session.destroy(function(err) {
    return res.send();
  });
});

module.exports = router;