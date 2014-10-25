var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (sails) {
  return {
    initialize: function (next) {
      sails.after('hook:orm:loaded', function () {
        sails.log('orm loaded');

        var plans = [
          Plan.create({
            name: 'Starter',
            disk_mb: 10,
            vm: 'shared',
            nodes: 1,
            connections: 5,
            production: false,
            price: 5,
            support: 'community'
          }),
          Plan.create({
            name: 'Shared Node',
            disk_mb: 1024,
            vm: 'r3.large',
            nodes: 1,
            connections: 16,
            production: false,
            price: 19,
            support: 'email'
          }),
          Plan.create({
            name: 'Medium Cluster',
            disk_mb: 262144,
            vm: 't2.medium',
            nodes: 4,
            connections: 1024,
            production: true,
            price: 199,
            support: '24/7'
          })
        ];

      Promise.settle(plans)
        .then(function (plans) {
          next();
        })
        .catch(function (error) {
          next();
          sails.log.error(error);
          // ignore
        });

      });
    }
  };
};
