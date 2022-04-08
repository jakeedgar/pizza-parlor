function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}
let myPizza = new Pizza([], "medium", 0);
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

Pizza.prototype.toppingsPrice = function(){
  let toppings = this.toppings
  let length = toppings.length;
      console.log(length);
  for (i = 0; i <= length -1; i++)
    length[i]++;
      return length;
  };

myPizza.toppingsPrice();