const { merge } = require('lodash');
const serviceResolvers = require('./serviceResolvers');
const accountResolvers = require('./accountResolvers');

module.exports = merge(
  serviceResolvers,
  accountResolvers
);
