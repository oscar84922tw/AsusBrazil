/**
 * Created by chenhuawei on 5/11/16.
 */

var db = require('../models/db');
var Sequelize = require('sequelize');
var Invoice = db.define('Invoice'
    ,
    {
        Invoice_No: {
            type: Sequelize.INTEGER(25),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Invoice_Date: {
            type: Sequelize.INTEGER
        },
        c_name: {
            type: Sequelize.STRING(30)

        },
        Dealer_VAT_No: {
            type: Sequelize.INTEGER(30),
            references:{
                // model: Dealer,
                // key: 'Dealer_VAT_No',

            }
        }
    }
)
Invoice.sync();
module.exports = Invoice;