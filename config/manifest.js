/**
 * https://devcenter.heroku.com/articles/add-on-manifest
 */
exports.manifest = {
  id: 'foundationdb',
  api: {
    config_vars: [
      'FOUNDATIONDB_URL'
    ],
    password: process.env.MANIFEST_PASSWORD || '123',
    sso_salt: process.env.MANIFEST_SALT || '123',
    regions: ['us'],
    requires: ['log_input'],
    production: {
      base_url: process.env.PRODUCTION_BASEURL || 'http://loalhost:1337/heroku/resources',
      sso_url: process.env.PRODUCTION_SSOURL || 'http://localhost:1337/sso/login'
    },
    test: {
      base_url: 'http://localhost:1337/heroku/resources',
      sso_url: 'http://localhost:1337/sso/login'
    }
  }
};

  /**
   *
   * {
      'id': 'errorbucket',
      'api': {
        'config_vars': [
          'ERRORBUCKET_URL'
        ],
        'password': 'GqAGAmdrnkDFcvR9',
        'sso_salt': '7CwqmJLEjv8YZTXK',
        'regions': ['us','eu'],
        'requires': ['log_input'],
        'production': {
          'base_url': 'https://errorbucket.com/heroku/resources',
          'sso_url': 'https://errorbucket.com/sso/login'
        },
        'test': {
          'base_url': 'http://localhost:4567/heroku/resources',
          'sso_url': 'http://localhost:4567/sso/login'
        }
      }
    }
   */
