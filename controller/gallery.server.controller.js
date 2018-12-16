var GalleryData = require('../model/gallery.server.model');

exports.create = function(req, res) {
    console.log('create data', req.body);
    var entry = new GalleryData({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        location: req.body.location,
        dateOfYear: req.body.dateOfYear
    });
    entry.save(function(err, response) {
        if (err) res.status(500).send(err);
        res.status(201).send({'message': 'success'});
    });
    
}

exports.get = function(req, res) {
    GalleryData.find(function(err, response) {
        res.status(200).send(response);
    });
} 