/* GetUserId */

module.exports = (req) => {
  if (!req || !req.session || !req.session.user || !req.session.user.id) {
    throw new Error('Invalid user session');
  }

  return req.session.user.id;
};