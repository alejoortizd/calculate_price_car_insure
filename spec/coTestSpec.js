const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });

});

describe("CO Test for Full Coverage", function() {
  const coTest = new CarInsurance([ new Product("Full Coverage", 2, 0) ]);

  it("should return  1, 1 for sellIn and price on day 1", function() {
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(1);
  });

  it("should return  -1, 4 for sellIn and price on day 3", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 2) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(4);
  });

  it("should return  -13, 26 for sellIn and price on day 15", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", -12, 26) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-13);
    expect(products[0].price).equal(28);
  });

  it("should return  -28, 50 for sellIn and price on day 30", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", -27, 50) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-28);
    expect(products[0].price).equal(50);
  });
});

describe("Co Test for Mega Coverege", function() {
  const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);

  it("should return  0, 80 for sellIn and price on day 1", function() {
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should return  0, 80 for sellIn and price on day 3", function() {
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should return  0, 80 for sellIn and price on day 15", function() {
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should return  0, 80 for sellIn and price on day 30", function() {
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });
});

describe("Co Test for Special Full Coverage", function() {

  it("should return  14, 21 for sellIn and price on day 1", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(14);
    expect(products[0].price).equal(21);
  });

  it("should return  12, 23 for sellIn and price on day 3", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 13, 22) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(12);
    expect(products[0].price).equal(23);
  });

  it("should return  10, 25 for sellIn and price on day 5", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 11, 24) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(25);
  });

  it("should return  7, 31 for sellIn and price on day 8", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 8, 29) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(7);
    expect(products[0].price).equal(31);
  });

  it("should return  0, 50 for sellIn and price on day 15", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 1, 47) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(50);
  });

  it("should return  -7, 0 for sellIn and price on day 22", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", -6, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-7);
    expect(products[0].price).equal(0);
  });

  it("should return  -15, 0 for sellIn and price on day 30", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", -14, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-15);
    expect(products[0].price).equal(0);
  });

});
