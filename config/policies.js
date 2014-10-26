module.exports.policies = {

  ResourceController: {
    create: [ 'HerokuAuth' ],
    update: [ 'HerokuAuth' ],
    delete: [ 'HerokuAuth' ],
    read: [ 'HerokuSSO' ]
  },

  SsoController: {
    '*': [ 'HerokuSSO' ]
  }

};
