/* IsAuthenticated */

module.exports = (req) => {
  return req.session && req.session.user;
};