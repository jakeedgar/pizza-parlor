function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

let newPizza = new Pizza(['extra cheese'], "small", 8);
console.log(newPizza);