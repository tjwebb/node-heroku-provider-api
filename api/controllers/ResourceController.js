/**
 * ResourceController
 *
 * @description :: Server-side logic for managing Resources
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create: function (req, res) {
    Resource
      .create({
        heroku_id: req.param('heroku_id'),
        plan: req.param('plan'),
        region: req.param('region'),
        callback_url: req.param('callback_url'),
        log_input_url: req.param('log_input_url'),
        options: req.param('options')
      })
      .then(function (resource) {
        return ResourceService.provision(resource);
      })
      .then(function (result) {
        res.json({
          id: result.resource.id,
          config: result.config,
          message: result.message
        });
      })
      .catch(function (error) {
        sails.log.warn(error);
        res.json(422, { message: error });
      });
  }
};
