//Eddie Gemayel , Wed Sept 18. Functions "wacky"


//Function to see if you are old enough to watch rated R movie
// have to be born in at least 1996

var dob = prompt("Please enter your date of birth : ");

function oldEnough (birthYear){
		var currentYear = 2013;
		var age = currentYear - birthYear;
		var result ="";
		
		result = (age >= 17) ? "You can see this R rated movie since you are "+ age +"." : "You cannot see this R rated movie since you are the childish age of "+ age +"." ; 

}
 
 
 
 
 
  