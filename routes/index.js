var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/view', { title: 'Express' });
});

// Get Detail TPU Karet Bivak 

router.get('/tpu-karet', function(req, res, next) {
  res.render('tpu_karet/view', { title: 'Express' });
});

// Get Detail TPU PSBB 

router.get('/tpu-psbb', function(req, res, next) {
  res.render('tpu_psbb/view', { title: 'Express' });
});

// Get Detail TPU KAWI

router.get('/tpu-kawi', function(req, res, next) {
  res.render('tpu_kawi/view', { title: 'Express' });
});

// Get Detail TPU PETAMBURAN

router.get('/tpu-petamburan', function(req, res, next) {
  res.render('tpu_petamburan/view', { title: 'Express' });
});


module.exports = router;
