// BUSINESS LOGIC 

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

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
  return this;

};

// myPizza.totalPrice();
// console.log(typeof(myPizza))



// USER INTERFACE LOGIC 


$(document).ready(function() {
  $("#pizza").submit(function(e) {
    e.preventDefault();
    let price = 0;
    const size = $("input:radio[name=size]:checked").val();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
    toppings.push($(this).val());
    });
    let newPizza = new Pizza(toppings, size, price);
    newPizza.sizePrice();
    newPizza.toppingsPrice();
    let finalPizza = newPizza.totalPrice();
    $(".output").html(finalPizza.price);
  });
});

