/**
* Provision.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    heroku_id: {
      type: 'string'
    },
    plan: {
      model: 'Plan'
    },
    region: {
      type: 'string',
      enum: [
        'amazon-web-services::us-east-1',
        'amazon-web-services::eu-west-1'
      ]
    },
    callback_url: {
      type: 'string'
    },
    log_input_url: {
      type: 'string'
    },
    options: {
      type: 'json'
    }
  }
};

