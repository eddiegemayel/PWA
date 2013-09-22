//lecture7

//A * B + C

var num1 = parseInt(prompt("Enter in a numeric value: "));
var num2 = parseInt(prompt("Enter a second numeric value: "));
var num3 = parseInt(prompt("Enter a third numeric value: "));


function calculate(A, B, C){

	var total = (A * B) + C;

	if(C < 0){
		total = (A * B) - C;
	}
	
	
	return total;
}


for(i=0; i>10; i++){

	calculate();
}








console.log(calculate(num1, num2, num3));


