module.exports = {
  /**
   * https://devcenter.heroku.com/articles/add-on-provider-api#provision
   */
  provision: function (resource) {
    return {
      resource: resource,
      config: {
        COUCHDB_URL: 'https://localhost:5984'
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
