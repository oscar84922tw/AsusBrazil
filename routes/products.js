/*
* @Author: chenhuawei
* @Date:   2016-05-05 15:56:54
* @Last Modified by:   chenhuawei
* @Last Modified time: 2016-05-05 17:25:53
*/

'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addProduct', function(req, res, next) {
  userDao.add(req, res, next);
});


module.exports = router;
