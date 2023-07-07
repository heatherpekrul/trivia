const express = require('express');
const router  = express.Router();

const DeleteGame = require('./deleteGame');
const DeleteMyData = require('./deleteMyData');
const GetCurrentGame = require('./getCurrentGame');
const GetGameParticipants = require('./getGameParticipants');
const GetGameScore = require('./getGameScore');
const GetJoinedGames = require('./getJoinedGames');
const GetOwnedGames = require('./getOwnedGames');
const GetQuestionAnswers = require('./getQuestionAnswers');
const JoinGame = require('./joinGame');
const Login = require('./login');
const Logout = require('./logout');
const ProgressGame = require('./progressGame');
const RegressGame = require('./regressGame');
const RemoveJoinedGame = require('./removeJoinedGame');
const SubmitAnswer = require('./submitAnswer');

router.use(DeleteGame);
router.use(DeleteMyData);
router.use(GetCurrentGame);
router.use(GetGameParticipants);
router.use(GetGameScore);
router.use(GetJoinedGames);
router.use(GetOwnedGames);
router.use(GetQuestionAnswers);
router.use(JoinGame);
router.use(Login);
router.use(Logout);
router.use(ProgressGame);
router.use(RegressGame);
router.use(RemoveJoinedGame);
router.use(SubmitAnswer);

router.get('/api/*', (req, res) => {
  res.sendStatus(404);
});

router.post('/api/*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;