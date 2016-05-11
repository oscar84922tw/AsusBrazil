/**
 * Created by chenhuawei on 5/11/16.
 */
var Sequelize = require('sequelize');


var db = new Sequelize(
    'Asus',
    'root',
    'admin',
    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306
    }
);

module.exports = db;