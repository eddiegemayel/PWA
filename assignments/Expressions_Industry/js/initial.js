//Eddie Gemayel. Friday Sept 20. Expressions Industry

//budget calculator

var companyName = prompt("Enter the name of the company you work for: ");
//variable above collects the string that will be the name of your company

var hourlyWage = parseInt(prompt("Enter the amount you get paid per hour: "));
//variable that collects the number that is how much you get paid per hour

var hoursWorked = parseInt(prompt("Enter the amount of hours you work per week: "));
//variable collects the number that represents how many hours you work per week

var totalEarned = (hourlyWage * hoursWorked);
//variable calculates how much you earn per week by doing some simple math


console.log("You work at "+ companyName +" and earn a total of $"+ totalEarned +" per week.");


//console log out the result that tells you how much you earn per week