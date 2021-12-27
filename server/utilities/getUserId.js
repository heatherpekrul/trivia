/* GetUserId */

module.exports = (req) => {
  if (!req || !req.session || !req.session.user) return null;

  return req.session.user.email;
};