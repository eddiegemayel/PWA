//lecture9 Quiz
//Part One: Take variable, multiply by another variable squared and console log it

var num1 = parseInt(prompt("Enter a number: "));
var num2 = parseInt(prompt("Enter another number: "));

var total = num1 *(num2 * num2);

console.log(total);



//Part Two: Write 2 arrays in 2 different ways

var goodForYou = ["Apple", "Orange", "Banana", "Grape"];

var badForYou = [];
badForYou[0]="Pizza";
badForYou[1]="Ice Cream";
badForYou[2]="Cookies";
badForYou[3]="Candy";
badForYou[4]="Sugar";

console.log(goodForYou);
console.log(badForYou);

//Part Three: write a conditional that checks lengths of arrays to see which is longer
//Array.length

if(goodForYou.length>badForYou.length){
	console.log("The first array is longer than the second array.")
}
else{
	console.log("The second array is longer than the first array.");
}




//Part Four: Write a function that takes in 3 parameters and adds then all and returns result
var number = parseInt(prompt("Enter a number to be added: "));
var number2 = parseInt(prompt("Enter a second number to be added: "));
var number3 = parseInt(prompt("Enter a third number to be added: "));


function shoppingCart(first, second, third){
	var total = first + second + third;
	return total;
}


console.log(shoppingCart(number, number2, number3));
