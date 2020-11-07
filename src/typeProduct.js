function nameProduct(nameProduct) {
  const typeProduct = [
    {
    name: 'Mega Coverage',
    sellIn: {
      value: 0
    },
    price: {
      value: 0,
      max: 80,
      increase: 0,
      condition: null,
      negativeValue: false
    }
  },
  {
    name: 'Full Coverage',
    sellIn: {
      value: -1
    },
    price: {
      value: 1,
      max: 50,
      increase: 1,
      condition: null,
      negativeValue: false
    }
  },
  {
    name: 'Special Full Coverage',
    sellIn: {
      value: -1
    },
    price: {
      value: 1,
      max: 50,
      increase: 1,
      condition: 5,
      negativeValue: true
    }
  },
  {
    name: 'Super Sale',
    sellIn: {
      value: -1
    },
    price: {
      value: -1,
      max: 50,
      increase: -1,
      condition: null,
      negativeValue: false
    }
  }];

  return typeProduct.find(product => product.name === nameProduct);
  
}

module.exports ={
  nameProduct
}
