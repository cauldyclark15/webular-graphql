const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoModel = require('../db/mongoose');

const ServiceSchema = new Schema({
  serviceKey: String,
  name: String,
  supplierCount: Number,
  description: String,
  tags: [String]
});

module.exports = mongoModel.model('Services', ServiceSchema);
