module.exports = {
  /**
   * https://devcenter.heroku.com/articles/add-on-provider-api#provision
   */
  provision: function (resource) {
    return {
      resource: resource,
      config: {
        COUCHDB_URL: 'https://admin:admin@localhost:5984',
        COUCHDB_FUTON_URL: 'https://localhost:5984/_util',
        COUCHDB_URL: 'https://localhost:5984',
        COUCHDB_USER: 'admin',
        COUCHDB_PASSWORD: 'admin'
      },
      message: 'ok'
    };
  },

  /**
   * https://devcenter.heroku.com/articles/add-on-provider-api#deprovision
   */
  deprovision: function (resource) {
    return resource;
  }
};
