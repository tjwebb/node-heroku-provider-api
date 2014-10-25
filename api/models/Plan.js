module.exports = {
  attributes: {
    name: {
      type: 'string',
      primaryKey: true
    },
    disk_mb: {
      // megabytes
      type: 'integer'
    },
    vm: {
      type: 'string'
    },
    nodes: {
      type: 'integer'
    },
    connections: {
      type: 'integer'
    },
    support: {
      type: 'string',
      enum: [
        'community',
        'email',
        '24/7'
      ]
    },
    production: {
      type: 'boolean'
    },
    price: {
      // $ per month
      type: 'integer'
    },

    disk: function (multiplier) {
      if (multiplier === 'mb') return this.disk_mb;
      if (multiplier === 'gb') return this.disk_mb * 1024;
      if (multiplier === 'tb') return this.disk_mb * 1024 * 1024;

      throw new Error('disk multiplier not recognized; should be mb, gb, or tb');
    }
  }
};

