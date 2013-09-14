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
 
 var username = "student988";		//username that the "user" entered 
 var password = "fullSail";			//password entered
 
 var correctUsername = "student988";		//the correct username
 var correctPassword = "fullSail700";		//correct password to login
 
 if(username == correctUsername && password == correctPassword){
 	console.log("Welcome, "+ correctUsername +"!");
 }		//if both username and password match up, deliver successful login message
 
 
 else if(username == correctUsername && password != correctPassword){
 	console.log("Password not correct. Please try again.");
 }		//if only password is wrong, let the user know through the console log
 
 
 else if(username != correctUsername && password != correctPassword){
 	console.log("Username and password are incorrect.");
 }		//if both are wrong, deliver error message to the user