module.exports = function (req, res, next) {
  var manifest = sails.config.manifest;
  var connect = require('sails/node_modules/express/node_modules/connect');
  var basicAuth = connect.middleware.basicAuth(manifest.id, manifest.api.password);
  basicAuth(req, res, next);
};
