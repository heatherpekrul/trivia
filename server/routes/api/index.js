const express = require('express');
const router  = express.Router();

const GetGames = require('./getGames');
const Login = require('./login');
const Logout = require('./logout');

router.use(Login);
router.use(GetGames);
router.use(Logout);

module.exports = router;