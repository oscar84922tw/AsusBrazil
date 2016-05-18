/**
 * Created by chenhuawei on 5/18/16.
 */
var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
    Product.findAll().then(function (product) {
        res.render('addProduct', {Product: product});
    })

});

router.get('/del_product', function (req, res, next) {
    if (req.query.Asus_Part_No == undefined || req.query.Asus_Part_No == "") {
        console.log("cc");
        res.render('404', "");
        return;
    }

    Product.findOne({
        where: {
            id: req.query.Asus_Part_No
        }
    }).then(function (product) {
        product.destroy().then(
            console.log('delete sucess'),
            res.redirect('/')
        )

    })
});

router.post('/add_product', function (req, res, next) {
    if (req.body.Asus_Part_No == undefined || req.body.Asus_Part_No == "") {
        res.render('404');
        return;
    }

    var product = {
        Asus_Part_No: req.body.Asus_Part_No,
        Description: req.body.Description,
        Unit_Price: req.body.Unit_Price,
    };

    Product.create(product).then(function (product1) {
        console.log(product1);
        res.redirect('/product');
    })
})

module.exports = router;
