//Eddie Gemayel , Sunday Sept 14. Conditionals Personal worksheet
 
//Enough birthday money to buy a new phone?

var granny=prompt("Enter how much money your grandmother gave you for your birthday.: ");

var parents=prompt("Enter how much money your parents gave you for your birthday: ");

var uncle=prompt("Enter how much money your uncle and aunt gave you for your birthday: ");

var totalCost= uncle+parents+granny;

var phoneCost= 300;

var message="";


if(totalCost == 300){
	message="Wow just enough money! Enjoy your new phone!";
	console.log(message);
}