const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://cauldyclark15:Fastest15@ds041861.mlab.com:41861/webular-graphql';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoDB URI.');
}

mongoose.Promise = global.Promise;
const mongoModel = mongoose.createConnection(MONGO_URI);

module.exports = mongoModel;
