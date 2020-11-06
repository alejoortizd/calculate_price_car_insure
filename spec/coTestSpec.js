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
