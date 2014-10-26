var forge = require('node-forge');

module.exports = function (req, res, next) {
  req.session.resourceId = (req.params.length === 0) ? req.param('id') : req.params.id;

  sails.log(req.session.resourceId);
  sails.log(req.params);

  var md = forge.md.sha1.create();
  
  md.update(req.session.resourceId + ':' + process.env.SSO_SALT + ':' + req.param('timestamp'));
  var token = md.digest().toHex();

  if (req.param('token') !== token) {
    return res.send("Token Mismatch", 403);
  }

  var time = (new Date().getTime() / 1000) - (2 * 60);
  if (parseInt(req.param('timestamp')) < time) {
    return res.send("Timestamp Expired", 403);
  }

  res.cookie('heroku-nav-data', req.param('nav-data'));
  //req.session.resource = get_resource(id);
  req.session.email = req.param('email');

  next();
};
