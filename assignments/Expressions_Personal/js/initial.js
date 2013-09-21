//Eddie Gemayel. Friday Sept 20. Expressions Personal

//Calculates if you have enough money to buy all the items you want on Amazon

var shoppingCartCost = [];
shoppingCartCost[0] = prompt("Enter the cost of the first item in your shopping cart: ");
shoppingCartCost[1] = prompt("Enter the cost of the second item in your shopping cart: ");
shoppingCartCost[2] = prompt("Enter the cost of the third item in your shopping cart: ");
shoppingCartCost[3] = prompt("Enter the cost of the fourth item in your shopping cart: ");

var budget = parseInt(prompt("Enter how much you can spend without going broke: "));

var totalCost = shoppingCartCost[0] + shoppingCartCost[1] + shoppingCartCost[2] + shoppingCartCost[3];

if(totalCost>budget){
	console.log("You can't afford what you want to buy! You want to spend $"+ totalCost +" but you only have $"+ budget +"! Haha!");
}




