const mongoose = require('mongoose'),
      _= require('lodash'),
      Promise = require('bluebird');

const TableSchema = new mongoose.Schema({
    tableId: {type: Number, required: true, unique: true},
    numberOfSeats: {type: String, min: 1},
    section: {type: String, required: true},
    available: {type: Boolean}
});

mongoose.model('Table', TableSchema);
