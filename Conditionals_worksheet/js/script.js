//Eddie Gemayel , Friday Sept 13. Conditionals worksheet

// Last chance for Gas

var MPG = 20; 						//MPG the car gets
var gallons = 8;					//How many gallons are in car
var distance = MPG * gallons;		//distance you can travel before running on empty

if (distance >200){
	console.log("You can Make it through the next 200 miles!");		
}		//if the distance is more than 200 miles, you're good
else{
	console.log("You can only make it the next "+ distance+" miles! Better re-fuel son.");
}		//if the distance is less than 200, better get gas so you dont die!
 
 
 
 // Check Login
 
 var username = "student988";
 var password = "fullSail";
 
 var correctUsername = "student988";
 var correctPassword = "fullSail700";
 
 if(username == correctUsername && password == correctPassword){
 	console.log("Welcome, "+ correctUsername +"!");
 }
 else if(username == correctUsername && password != correctPassword){
 	console.log("Password not correct. Please try again.");
 }
 else if(username != correctUsername && password != correctPassword){
 	console.log("Username and password are incorrect.");
 }