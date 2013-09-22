//lecture7

//A * B + C

var num1 = parseInt(prompt("Enter in a numeric value: "));
var num2 = parseInt(prompt("Enter a second numeric value: "));
var num3 = parseInt(prompt("Enter a third numeric value: "));





var total = (num1 * num2) + num3;

	if(num3 < 0){
		total = (num1 * num2) - num3;
	}
	
	


var resultArray=[];

for(i=0; i>10; i++){
	var aInc=2*i;
	var bInc=3*i;
	a=a+aInc;
	b=b+bInc;
	c=c+i;
	
	if(i!=0){
	resultArray[i]=a*b+c;
	console.log(a + " * "+b+ " + "+c+" = "+resultArray[i]);
	}
	
}








console.log(resultArray);


