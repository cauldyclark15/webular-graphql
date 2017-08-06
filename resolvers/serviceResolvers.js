const Service = require('../models/service');
const { keys, pick } = require('lodash');

const serviceResolvers = {
  RootQuery: {
    services: (root, { q }) => {
      return Service.find({})
        .then(services => services)
        .catch(err => { throw new Error('Internal server error.') });
    },
    service: (root, { serviceId }) => {
      return Service.findById(serviceId)
        .then(service => service)
        .catch(err => { throw new Error('Internal server error.') });
    }
  },
  RootMutation: {
    serviceCreate: (root, { serviceKey, name, supplierCount, description, tags }) => {
      return Service.create({ serviceKey, name, supplierCount, description, tags })
        .then(service => {
          return service
        })
        .catch(err => { throw new Error('Internal server error.') });
    },
    serviceUpdate: (root, props) => {
      const { serviceId } = props;
      const serviceUpdatedKeys = keys(props);
      const updatedData = pick(props, serviceUpdatedKeys);
      return Service.findByIdAndUpdate(serviceId, { $set: updatedData }, { new: true })
        .then(service => service)
        .catch(err => { throw new Error('Internal server error.') });
    },
    serviceDelete: (root, { serviceId }) => {
      return Service.findByIdAndRemove(serviceId)
        .then(service => service)
        .catch(err => { throw new Error('Internal server error.') });
    }
  }
};

module.exports = serviceResolvers;
