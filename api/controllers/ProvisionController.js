/**
 * ProvisionController
 *
 * @description :: Server-side logic for managing Provisions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create: function (req, res) {
    Provision
      .create({
        heroku_id: req.param('heroku_id'),
        plan: req.param('plan'),
        region: req.param('region'),
        callback_url: req.param('callback_url'),
        log_input_url: req.param('log_input_url'),
        options: req.param('options')
      })
      .then(function (provision) {
        return ProvisionService.provision(provision);
      })
      .then(function (result) {
        res.json({
          id: result.provision.id,
          config: result.config,
          message: result.message
        });
      })
      .catch(function (error) {
        res.json(422, { message: error });
      });
  }
};
