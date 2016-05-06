/*
 * @Author: chenhuawei
 * @Date:   2016-05-05 19:54:43
 * @Last Modified by:   chenhuawei
 * @Last Modified time: 2016-05-06 15:05:20
 */

'use strict';
var db = require('../conf/db');
var GeneralErrors = require('../error/generalError');

var Agent = function(options) {
  this.c_name = options.c_name;
  this.contact_person = options.contact_person;
  this.tel = options.tel;
  this.fax = options.fax;
  this.email = options.email;
  this.pwd = option.pwd;
}

Agent.getAgentByName = function getAgentByName(c_name,cb){
  if(c_name){

  }
}

Agent.prototype.save = function(cb) {
  if (c_name) {
    db('Agent').where({
        c_name: this.c_name
      }).upadate({
        contact_person: this.contact_person,
        tel: this.tel,
        fax: this.fax,
        email: this.email
      }).then(function() {
        cb(null, this);
      }.bind(this))
      .catch(function(err) {
        console.log("AGENT UPDATED", err);
        cb(new gerror.Database());
      });
  }
}
