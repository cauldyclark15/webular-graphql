const Account = require('../models/account');
const Service = require('../models/service');
const { keys, pick } = require('lodash');

const AccountResolvers = {
  RootQuery: {
    accounts: (root, { q }) => {
      return Account.find({})
        .then(accounts => accounts)
        .catch(err => { throw new Error('Internal server error.') });
    },
    account: (root, { accountId }) => {
      return Account.findById(accountId)
        .then(account => account)
        .catch(err => { throw new Error('Internal server error.') });
    }
  },
  RootMutation: {
    accountCreate: (root, { companyName, services, address, address2, city, state, zip, phone, email }) => {
      return Account.create({ companyName, services, address, address2, city, state, zip, phone, email })
        .then(account => account)
        .catch(err => { throw new Error('Internal server error.') });
    },
    accountUpdate: (root, props) => {
      const { accountId } = props;
      const accountUpdatedKeys = keys(props);
      const updatedData = pick(props, accountUpdatedKeys);
      return Account.findByIdAndUpdate(accountId, { $set: updatedData }, { new: true })
        .then(account => account)
        .catch(err => { throw new Error('Internal server error.') });
    },
    accountDelete: (root, { accountId }) => {
      return Account.findByIdAndRemove(accountId)
        .then(account => account)
        .catch(err => { throw new Error('Internal server error.') });
    }
  },
  Account: {
    services: ({ services }) => {
      return Service.find({ _id: { $in: services } })
        .then(services => services)
        .catch(err => { throw new Error('Internal server error.') });
    }
  }
};

module.exports = AccountResolvers;
