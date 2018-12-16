var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newRecordSchema = new Schema({
    name: String,
    age: Number,
    occupation: String,
    residence: String
});

module.exports = mongoose.model('newRecord', newRecordSchema);
