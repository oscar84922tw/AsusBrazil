/**
 * Created by chenhuawei on 5/12/16.
 */
var Dealer = require('../models/dealer');
var express = require('express')
var router = express.Router();

router.get('/', function (req, res, next) {
    Dealer.findAll().then(function (dealer) {
        res.render('addDealer', {Dealer: dealer});
    })
})

router.get('/del_dealer', function (req, res, next) {
    if (req.query.Dealer_VAT_No == undefined || req.query.Dealer_VAT_No == "") {
        res.render('404', "");
        return;
    }

    Dealer.findOne({
        where: {
            id: req.query.Dealer_VAT_No
        }
    }).then(function (dealer) {
        dealer.destroy().then(
            console.log('delete sucess'),
            res.redirect('/')
        )

    })
});

router.post('/add_dealer', function (req, res, next) {
    if (req.body.Dealer_VAT_No == undefined || req.body.Dealer_VAT_No == "") {
        res.render('404');
        return;
    }

    var dealer = {
        Dealer_VAT_No: req.body.Dealer_VAT_No,
        Dealer_Name: req.body.Dealer_Name,
        Region: req.body.Region,
        City: req.body.City,
        Zip_Code: req.body.Zip_Code,
        Tel: req.body.Tel,
        Fax: req.body.Fax,
        c_name: req.body.c_name
    };

    Dealer.create(dealer).then(function (dealer1) {
        console.log(dealer1);
        res.redirect('/dealer');
    })
})

module.exports = router;
