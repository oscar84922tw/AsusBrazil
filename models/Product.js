var db = require('../conf/db');
var gerror = require('../error/generalError')

var Product = function(options){
  this.Asus_Part_Number = options.Asus_Part_Number;
  this.Desciption = options.Desciption;
  this.Unit_price = options.Unit_price;
}

Product.getAll = function(cb) {
  db.select()
    .from('Product')
    .map(function(row) {
      return new Product({
        Asus_Part_Number : row.Asus_Part_Number,
        Desciption : row.Desciption,
        Unit_price : row.Unit_price, //這邊剛剛忘記修正了
      });
    })
    .then(function(productList) {
      cb(null, productList);
    })
    .catch(function(err) {
      cb(new gerror.Database());
    });
}

Product.get = function(ProductId,cb){
  db.select().from('Product').where({
    id: ProductId
  })
  .map(function(row){
    return new Product(row);
  })
  .then(function(productList){
    if(memberList.length){
      cb(null, memberList[0]);
    }else{
      cb(new gerror.NotFound());
    }
  })
  .catch(function(err){
    cb(err);
  })
}

Product.prototype.save = function(cb){
  if(this.Asus_Part_Number){
    db("Product").where({
      Asus_Part_Number : this.Asus_Part_Number,
    })
    .update({
      Desciption : this.Desciption,
      Unit_price : this.Unit_price,
    })
    .then(function() {
        cb(null, this);
      }.bind(this))
      .catch(function(err) {
        console.log("PRODUCT UPDATED", err);
        cb(new gerror.Database());
      });
  }
};

module.exports = Product;
