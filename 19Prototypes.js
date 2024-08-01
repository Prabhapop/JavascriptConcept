//  create a prototype for a product object with properties like name, price and VideoPlaybackQuality.
//  Add a method to the product prototype to calculate the total value

function product(name, price, quality) {
  this.name = name;
  this.price = price;
  this.quality = quality;
}
product.prototype.calculateTotalValue = function () {
  return this.price * this.quality;
};

const product1 = new product("Widget", 10, 5);
const totalValue1 = product1.calculateTotalValue();

const product2 = new product("Gadget", 23, 6);
const totalValue2 = product2.calculateTotalValue();

console.log(`total value of ${product1.name}:$${totalValue1}`);
console.log(`total value of ${product2.name}:$${totalValue2}`);

console.log(product.prototype);
