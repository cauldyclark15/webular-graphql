const { merge } = require('lodash');
const serviceResolvers = require('./serviceResolvers');

module.exports = merge(
  serviceResolvers
);
