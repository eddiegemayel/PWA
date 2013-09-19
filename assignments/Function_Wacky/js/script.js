//Eddie Gemayel , Wed Sept 18. Functions "wacky"


//Function to see if you are old enough to watch rated R movie
// have to be born in at least 1996

var dob = prompt("Please enter your date of birth : ");

//the variable above asks for the user's date of birth


//function is named oldEnough with a parameter of birthYear, which is the variable "dob" from above

function oldEnough (birthYear){

		var currentYear = 2013;
		var age = currentYear - birthYear;
		var result ="";
		//Variables above together calculate how old you are, by subtracting your date of birth from the current year (2013). The "result" variable is an empty string that will be used later in the function.		
		
		
		
		result = (age >= 17) ? "You can see this R rated movie since you are "+ age +" years of age." : "You cannot see this R rated movie since you are the childish age of "+ age +"." ; 
		
		//the code above is a Ternary. This takes your age and finds out if you are old enough; then tells the "result" variable what to display.
		
		
		return result;
		//telling the computer to return to us the result
}
 
 console.log(oldEnough(dob));
 
 //displaying the result to the console.
 
 
 
  