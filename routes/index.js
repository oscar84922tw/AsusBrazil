var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var Agent = require('../models/Agent')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Asus@Brazil' });
});

router.get('/login',function(req,res,next){
  res.render('products');
});
module.exports = router;
