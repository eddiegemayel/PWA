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
var victimWeight = 200;
function sting(){
	var victimWeight = 200;
	var stingsForDeath = 8.66666667;
	var death = victimWeight * stingsForDeath;
	return death;
}

console.log("It would take "+ sting() + "stings to kill a " + victimWeight +"lbs animal.");


