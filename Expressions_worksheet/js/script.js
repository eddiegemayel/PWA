// Eddie Gemayel, September 10 2013, expressions assignment



//Sparky the dog

var age = 2;           //variable tells age in human years
var dogYears = age * 7;	// variable tells age in dog years, which is age times 7

console.log("Sparky is " + age +" human years old which is "+ dogYears +" in dog years.");

// code above displays sparkys age




//Slice of Pie I

var slices = 6;  //this variable describes how many slices are per pizza
var people = 8;	 // this variable tells how many people are partying
var pizzas = 4;	// this variable tells us how many pizzas are present

var perPerson = (slices * pizzas) / people; // simple math to tell us how many slices per guy

console.log("Each person ate "+ perPerson + " slices of pizza at the party.");

//code above displays math and how much slices each person recieves




//Slice of Pie II

var perPerson= (slices * pizzas) % people; // Percent sign tells the computer to show me the remainder instead of the total 

console.log("Sparky gets "+ perPerson + " slices of pizza."); //displaying the collected information




//Shopping Bill

var groceryTotals = [100, 60, 110, 85, 90]; 	//this variable tells how much ive spend on groceries every week (5) total weeks

var actualTotal = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];			//this variable adds up all the info in the array to find the actual total ive spent in the past 5 weeks


var avg = actualTotal / 5;		//this variable takes the total and divides by 5, giving the average


console.log("You have spent a total of $"+ actualTotal +" on groceries over 5 weeks. Average of $" + avg + " a week.");

// the above code displays the info gathered previously



//Discounts

var price = 20;
var discount = .10;
var item = "Vaccum";
var tax = .06;


