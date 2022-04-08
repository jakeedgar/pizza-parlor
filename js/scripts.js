function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}
let myPizza = new Pizza(["extra cheese", "anchovies"], "medium", 0);
console.log(myPizza);

// Pizza.prototype.sizePrice = function() {
//   this.price = 0;
//   if (this.size === "small") {
//     this.price += 9;
//   } else if (this.size === "medium") {
//     this.price += 10;
//   } else {
//     this.price += 12;
//   }
//   return this;
// };
// myPizza.sizePrice();


Pizza.prototype.toppingsPrice = function() {
  let toppings = this.toppings
  let length = toppings.length
  console.log(length);
  console.log(toppings);
  this.price = 0;
  for (i = 0; i <= toppings.length; i++)

    this.toppings += this.price
    return this;
};
myPizza.toppingsPrice();


// Test: “It should return a base pizza price with no toppings.”
// Code: 
// 	Let myPizza = new Pizza([], “medium””
// 	myPizza.prototype.toppingsPrice();
// Expected Output: 10



