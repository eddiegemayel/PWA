//Eddie Gemayel. Friday Sept 20. Expressions Personal

//Calculates if you have enough money to buy all the items you want on Amazon

var shoppingCartCost = [];
shoppingCartCost[0] = parseInt( prompt("Enter the cost of the first item in your shopping cart: "));
shoppingCartCost[1] = parseInt(prompt("Enter the cost of the second item in your shopping cart: "));
shoppingCartCost[2] = parseInt(prompt("Enter the cost of the third item in your shopping cart: "));
shoppingCartCost[3] = parseInt(prompt("Enter the cost of the fourth item in your shopping cart: "));

//The code above is an Array the collects data on how much each item costs in the user's shopping cart. Each value that is entered is checked to make sure it's an integer and not a string.




var budget = parseInt(prompt("Enter how much you can spend without going broke: "));
//This variable asks the user how much they can spend without going broke




var totalCost = shoppingCartCost[0] + shoppingCartCost[1] + shoppingCartCost[2] + shoppingCartCost[3];
//This variable calculates the total cost of everything in your shopping cart



if(totalCost>budget){
	console.log("You can't afford what you want to buy! You want to spend $"+ totalCost +" but you only have $"+ budget +"! Haha!");
	//The first part of this if statement says that if your total cost is greater than your budget, that you can't afford what you are trying to buy.
}
else{
	console.log("You can afford what you want to buy! You want to spend $" + totalCost + " and you have $"+ budget +" to spend!");
	//this part of the if statement says if you have enough money to buy your items, congrats!


}




