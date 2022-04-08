# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties one for toppings and one for size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Code: const myPizza = new Pizza(["extra cheese"], "small");
Alternate Expected Output: Pizza { toppings: ["extra cheese"], size: "small" }

Describe: Pizza.prototype.sizePrice();

Test: “It should return a price for each pizza size. 8 for small, 10 for medium, and 12 for large.”
Code: 
  Let myPizza = new Pizza([], “medium””
	myPizza.prototype.sizePrice();
Expected Output: 10

Describe: Pizza.prototype.toppingsPrice();

Test: “It should return a 0 for a pizza with no toppings.”
Code: 
	Let myPizza = new Pizza([], “medium””
	myPizza.prototype.toppingsPrice();
Expected Output: 0

Test: “It should return a toppings price that changes based on how many toppings the user adds to their pizza.”
Code: 
	Let myPizza = new Pizza([“anchovies”], “medium””)
	myPizza.prototype.toppingsPrice();
Expected Output: 1

Code: 
	Let myPizza = new Pizza([“anchovies”, “pineapples”], “medium””)
	myPizza.prototype.toppingsPrice();
Alternate Expected Output: 2

Describe: Pizza.prototype.totalPrice();

Test: “It should return a price that takes into account the size and the toppings of each pizza.”
code: 	
  Let myPizza = new Pizza([“anchovies”, “pineapples”], “medium””)
	myPizza.prototype.totalPrice();
Expected Output: 12


## Known Bugs

* _Any known issues_
* _should go here_

## Questions, Comments or Concerns
* Please email me at jakeedgar1012@gmail.com with any inquires or comments. Thank you. 

## License
Licensed under the [MIT License](LICENSE).

Copyright (c) Jake Edgar