const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoModel = require('../db/mongoose');

const AccountSchema = new Schema({
  companyName: String,
  services: [{ type: Schema.Types.ObjectId, ref: 'Services' }],
  address: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  email: String
});

module.exports = mongoModel.model('Accounts', AccountSchema);
