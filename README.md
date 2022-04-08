# Pizza Parlor Website

#### By Jake Edgar

#### A website to explore Object oriented Programming with a Pizza theme.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description

Using the Pizza Parlor website users can easily add ingredients or change the size of the Pizza (salad) they order and receive an update price based on their input. 

## Setup/Installation Requirements

* Navigate to your preferred code editing software. 
* Clone this repository to your desktop by using the command *git clone* followed by this link https://github.com/jakeedgar/pizza-parlor
* Navigate to the top level of the directory. 
* Open index.html in your browser. 
* Enter any number into the empty form to see the function in action.

## Tests

## Describe: Pizza();

* Test: "It should return a Pizza object with two properties one for toppings and one for size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

* Code: const myPizza = new Pizza(["extra cheese"], "small");
Alternate Expected Output: Pizza { toppings: ["extra cheese"], size: "small" }

## Describe: Pizza.prototype.sizePrice();

* Test: “It should return a price for each pizza size. 8 for small, 10 for medium, and 12 for large.”
Code: 
Let myPizza = new Pizza([], “medium””)
myPizza.prototype.sizePrice();
Expected Output: 10

## Describe: Pizza.prototype.toppingsPrice();

* Test: “It should return a 0 for a pizza with no toppings.”
Code: 
Let myPizza = new Pizza([], “medium””)
myPizza.prototype.toppingsPrice();
Expected Output: 0

* Test: “It should return a toppings price that changes based on how many toppings the user adds to their pizza.”
Code: 
Let myPizza = new Pizza([“anchovies”], “medium””)
myPizza.prototype.toppingsPrice();
Expected Output: 1

* Code: 
Let myPizza = new Pizza([“anchovies”, “pineapples”], “medium””)
myPizza.prototype.toppingsPrice();
Alternate Expected Output: 2

## Describe: Pizza.prototype.totalPrice();

* Test: “It should return a price that takes into account the size and the toppings of each pizza.”
code: 	
Let myPizza = new Pizza([“anchovies”, “pineapples”], “medium””)
myPizza.prototype.totalPrice();
Expected Output: 12


## Known Bugs

* There are no known bugs at this time. 

## Questions, Comments or Concerns
* Please email me at jakeedgar1012@gmail.com with any inquires or comments. Thank you. 

## License
Licensed under the [MIT License](LICENSE).

Copyright (c) Jake Edgar