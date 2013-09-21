//Eddie Gemayel. Friday Sept 20. Expressions Industry

//budget calculator

var companyName = prompt("Enter the name of the company you work for: ");

var hourlyWage = parseInt(prompt("Enter the amount you get paid per hour: "));

var hoursWorked = parseInt(prompt("Enter the amount of hours you work per week: "));

var totalEarned = (hourlyWage * hoursWorked);


console.log("You work at "+ companyName +" and earn a total of $"+ totalEarned +" per week.");


