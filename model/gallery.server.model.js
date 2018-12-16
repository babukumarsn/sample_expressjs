var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gallerySchema = new Schema({
    firstName: String,
    lastName: String,
    mobileNumber: String,
    location: String,
    dateOfYear: String
});

module.exports = mongoose.model('gallery', gallerySchema);
