// Eddie Gemayel, September 16 2013, functions Worksheet


//Circumference 
//Formula = C=d*pi  or 2*pi*r=C

function circumference (){			//started the function and named it circumference
	var radius = 6;					//variable "radius" with a value of 6
	var pi = 3.14;					//variable "pi" with a value of 3.14
	var answer = 2*pi*radius;		//variable "answer" with circumference formula
	return answer;					//tells the function to return to us the answer
}
console.log("The circumference of a circle is "+ circumference());		//console log the function





//Stung
var victimWeight = 200;				//variable for weight of animal
function sting(){					//function named sting
	var victimWeight = 200;			//variable for weight of animal again
	var stingsForDeath = 8.66666667;//variable for how many stings per pound
	var death = victimWeight * stingsForDeath;//formula for death of the animal
	return death;					//return the death value
}

console.log("It would take "+ sting() + " stings to kill a " + victimWeight +"lbs animal.");

//the code above is to console log out the information and data collected in the function


