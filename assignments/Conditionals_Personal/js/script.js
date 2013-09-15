//Eddie Gemayel , Sunday Sept 14. Conditionals Personal worksheet
 
//Enough birthday money to buy a new phone?

var granny=prompt("Enter how much money your grandmother gave you for your birthday.: ");
var parents=prompt("Enter how much money your parents gave you for your birthday: ");
var uncle=prompt("Enter how much money your uncle and aunt gave you for your birthday: ");
//the variables above collect information about how much money you have gotten for your birthday



var totalCost= uncle+parents+granny;
//this variable adds all the money together

var phoneCost= 300;
//this just lets us know how much the brand new phone is

var message="";
//this holds the message String that will be displayed once we find out how much $ you got


if(totalCost == 300){
	message="Wow just enough money! Enjoy your new phone!";
	console.log(message);
}
//if your money equals 300, you have just enough to buy the phone. Computer displays the message


else if(totalCost > 300){
	message="You have rich family members! Enjoy your new phone!";
	console.log(message);
}
//if your money is more than 300, you have more than enough money to buy the phone


else{
	message="Sorry you are poor! Keep enjoying your old phone!";
	console.log(message);
}
//if you dont have enough you are poor!