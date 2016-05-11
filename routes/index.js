var express = require('express');
var router = express.Router();
var Invoice = require('../models/Invoice');

/* GET home page. */
router.get('/', function (req, res, next) {
  Invoice.findAll().then(function (invoice) {
    res.render('index', {Invoice: invoice});
  })

});

router.get('/del_invoice', function (req, res, next) {
  if (req.query.Invoice_No == undefined || req.query.Invoice_No == "") {
    res.render('404', "");
    return;
  }

  Invoice.findOne({
    where: {
      id: req.query.Invoice_No
    }
  }).then(function (invoice) {
    invoice.destroy().then(
        console.log('delete sucess'),
        res.redirect('/')
    )

  })
});

router.post('/add_invoice', function (req, res, next) {
  if (req.body.Dealer_VAT_No == undefined || req.body.Dealer_VAT_No == "") {
    res.render('404');
    return;
  }
  var invoice = {
    Invoice_Date: req.body.Invoice_Date,
    Dealer_VAT_No: req.body.Dealer_VAT_No,
    c_name: req.body.c_name
  };

  Invoice.create(invoice).then(function (invoice1) {
    console.log(invoice1);
    res.redirect('/');
  })
})

module.exports = router;
