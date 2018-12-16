var NewRecord = require('../model/newRecord.server.model');
var SimpleData = require('../model/simpleData.server.model');

exports.create = function(req, res) {
    console.log('create data', req.body);
    var entry = new NewRecord({
        name: req.body.name,
        age: req.body.age,
        occupation: req.body.age,
        residence: req.body.residence
    });
    entry.save(function(err, response) {
        if (err) res.status(500).send(err);
        res.status(201).send({'message': 'success'});
    });
    
}

exports.createSimpleData = function(req, res) {
    console.log('simple data', req.body);
    var simple = new SimpleData({
        name: req.body.name
    });
    simple.save(function(err, data) {
        res.status(201).send({message: 'created'})
    });
}

exports.get = function(req, res) {
    NewRecord.find(function(err, response) {
        res.status(200).send(response);
    });
} 