module.exports = function (req, res, next) {
  if (req.headers.authorization && req.headers.authorization.search('Basic ') === 0) {
    // fetch login and password
    if (new Buffer(req.headers.authorization.split(' ')[1], 'base64').toString() ==  
        process.env.HEROKU_USERNAME + ':' + process.env.HEROKU_PASSWORD) {
      return next();
    }   
  }
  sails.log.warn('Unable to authenticate user');
  sails.log.info(req.headers.authorization);

  res.header('WWW-Authenticate', 'Basic realm="Admin Area"');
  res.send('Authentication required', 401);
};
