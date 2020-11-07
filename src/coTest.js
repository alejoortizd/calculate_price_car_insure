const { nameProduct } = require('./typeProduct');

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      const typeOfProduct = nameProduct(this.products[i].name);
      this.products[i].sellIn += typeOfProduct.sellIn.value;
      let  newPrice = null;

      if(this.products[i].sellIn < 0) {
        newPrice = typeOfProduct.price.negativeValue ? 0 : this.products[i].price + typeOfProduct.price.value + typeOfProduct.price.increase
      } else {
        newPrice = this.products[i].price + typeOfProduct.price.value
      }
      if(newPrice > typeOfProduct.price.max) {
        this.products[i].price = typeOfProduct.price.max
      } else {
        this.products[i].price = newPrice > 0 ? newPrice : 0;
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
