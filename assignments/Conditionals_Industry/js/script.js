//Eddie Gemayel , Sunday Sept 14. Conditionals Industry

//Number of shoes sold

var shoesSold=prompt("Enter the amount of pairs of shoes sold today: ");

var shoeCost= 10;

var profit=prompt("How much money do you need to make today to be profitable? ");

var total=shoesSold*shoeCost;


if(total > profit){
	console.log("Wow! You made $"+ total +" today, and you only had to make more than $"+profit+". You were profitable!");

}

else if(total <= profit){
	console.log("You only made $"+ total +" today. You fail.");
}