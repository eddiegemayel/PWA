//Eddie Gemayel , Sunday Sept 14. Conditionals Industry

//Number of shoes sold

var shoesSold=prompt("Enter the amount of pairs of shoes sold today: ");
//variable collects a number , the amount of shoes sold today

var shoeCost= 10;
//this static variable lets us know that each pair sold makes $10

var profit=prompt("How much money do you need to make today to be profitable? ");
//variable collects a number, how much we need to be profitable

var total=shoesSold*shoeCost;
//this variable does math, sees how much we made today


if(total > profit){
	console.log("Wow! You made $"+ total +" today, and you only had to make more than $"+profit+". You were profitable!");

}

//the code above sees if we made enough money. if we did, the console displays the amount we made as well as the profit amount

else if(total <= profit){
	console.log("You only made $"+ total +" today, and you needed to make more than $"+profit+". You fail.");
}

//the code above sees that we did not make enough money. the console shows us the numbers so we can feel guilty