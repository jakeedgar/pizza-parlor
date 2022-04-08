function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}
let myPizza = new Pizza(['extra cheese'], "medium", 0);
console.log(myPizza);

Pizza.prototype.sizePrice = function() {
  this.price = 0;
  if (this.size === "small") {
    this.price += 9;
  } else if (this.size === "medium") {
    this.price += 10;
  } else {
    this.price += 12;
  }
  return this;
};
myPizza.sizePrice();

// Test: “It should return a price for each pizza size. 8 for small, 10 for medium, and 12 for large.”
// Code: 	Let myPizza = new Pizza([], “medium””
// 	myPizza.prototype.sizePrice();
// Expected Output: 10



