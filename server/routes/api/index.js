const express = require('express');
const router  = express.Router();

const DeleteMyData = require('./deleteMyData');
const GetGames = require('./getGames');
const Login = require('./login');
const Logout = require('./logout');

router.use(DeleteMyData);
router.use(GetGames);
router.use(Login);
router.use(Logout);

module.exports = router;