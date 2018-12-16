var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var simpleDataSchema = new Schema({
    name: String
});

module.exports = mongoose.model('simpleData', simpleDataSchema);