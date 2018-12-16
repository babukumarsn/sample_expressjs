var express = require('express');
var router = express.Router();
var newRecord = require('../controller/newRecord.server.controller');
var gallery = require('../controller/gallery.server.controller');

/* POST home page. */
router.post('/createRecord', function(req, res, next) {
  return newRecord.create(req, res);
});

/* GET home page. */
router.get('/getRecord', function(req, res, next) {
  return newRecord.get(req, res);
});

router.post('/nameCreation', function(req, res, next) {
  return newRecord.createSimpleData(req, res);
});

router.post('/saveGallery', function(req, res, next) {
  return gallery.create(req, res);
});

router.get('/getGallery', function(req, res, next) {
  return gallery.get(req, res);
});

module.exports = router;
