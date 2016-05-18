/**
 * Created by chenhuawei on 5/12/16.
 */
var Sequelize = require('sequelize');
var db = require('../models/db');

var Product = db.define('Product', {
        Asus_Part_No: {
            type: Sequelize.STRING(50),
            primaryKey: true,
            allowNull: false
        },
        Description: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Unit_Price: {
            type: Sequelize.INTEGER(7),
            allowNull: false,
            validate: {
                isInt: true,
            }
        },

    },
    {
        createdAt: false,
        updatedAt: false
    }
);
Product.sync();
module.exports = Product;