// RANDOM EXERCISE: create a function that takes an array of objects(groceries) which calculate
// the total price and return it as a number.

function getTotalPrice(groceries) {
  let total = 0;

  for (const item of groceries) {
    console.log(item);

    const itemPrice = item.quality * item.price;
    total += itemPrice;
  }
  return total;
}

console.log(
  getTotalPrice([
    { product: "Milk", quality: 2, price: 2.5 },
    { product: "careals", quality: 2, price: 1.5 },
  ])
);
