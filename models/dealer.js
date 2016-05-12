/**
 * Created by chenhuawei on 5/12/16.
 */
var db = require('../models/db');
var Sequelize = require('sequelize');

var Dealer = db.define(
    'Dealer',
    {
        Dealer_VAT_No: {
            type: Sequelize.INTEGER(30),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Dealer_Name: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        Region: {
            type: Sequelize.STRING(30)
        },
        City: {
            type: Sequelize.STRING(20)
        },
        Zip_Code: {
            type: Sequelize.INTEGER(10)
        },
        Tel: {
            type: Sequelize.INTEGER(15)
        },
        Fax: {
            type: Sequelize.INTEGER(15)
        },
        c_name: {
            type: Sequelize.STRING(30),
            allowNull: false
        }


    }
);
Dealer.sync();
module.exports = Dealer;