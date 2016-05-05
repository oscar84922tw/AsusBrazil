/*
* @Author: chenhuawei
* @Date:   2016-05-05 19:54:43
* @Last Modified by:   chenhuawei
* @Last Modified time: 2016-05-05 20:06:13
*/

'use strict';
var db = require('../conf/db');
var GeneralErrors = require('../errors/generalError');

var Agent = function(options){
  this.c_name = options.c_name;
  this.contact_person = options.contact_person;
  this.tel = options.tel;
  this.fax = options.fax;
  this.email = options.email;
}

