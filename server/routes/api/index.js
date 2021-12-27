const express = require('express');
const router  = express.Router();

const Logout = require('./logout');

router.use('/api/login', require('./login'));
router.use(Logout);

module.exports = router;