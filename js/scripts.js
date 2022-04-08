// BUSINESS LOGIC 

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}
// let myPizza = new Pizza(["anchovies", "pineapple"], "medium", 0);
// console.log(myPizza);

Pizza.prototype.sizePrice = function() {
  this.price = 0;
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 10;
  } else {
    this.price += 12;
  }
  return this;
};
// myPizza.sizePrice();

Pizza.prototype.toppingsPrice = function() {
  let toppings = this.toppings
  let length = toppings.length;
  for (i = 0; i <= length -1; i++)
    length[i]++;
      this.toppings = length;
  };

// myPizza.toppingsPrice();

Pizza.prototype.totalPrice = function() {
  this.price = (this.toppings + this.price);
  return this.price;
};

// myPizza.totalPrice();



// USER INTERFACE LOGIC 


$(document).ready(function() {
  $("#pizza").submit(function(e) {
    e.preventDefault();

    const size = $("input:radio[name=size]:checked").val();
    console.log(size);
    let toppings = $("input:checkbox[name=toppings]:checked").each(function() {
    const checkedToppings = $(this).val();
    toppings = checkedToppings;
    return toppings;
    });
    let newPizza = new Pizza(toppings, size, 0);
    newPizza = newPizza.totalPrice();
    console.log(newPizza)
  });
});

