const express = require('express');
const router  = express.Router();

router.use('/api/login', require('./login'));

module.exports = router;