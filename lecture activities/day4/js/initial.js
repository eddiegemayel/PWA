//lecture4

//functions

function myFirstFunction (number1, number2){
	var productofNum1AndNum2;
	productofNum1AndNum2 = parseInt(number1)*parseInt(number2);
	return productofNum1AndNum2;

}

console.log(myFirstFunction(5,7));

function mySecondFunction (number1, number2){
	return parseInt(number1) + parseInt(number2);

}

console.log(mySecondFunction(5,7));

//both work

//land type generator


function landSelection(){
	var init = Math.random()*10;
	var percentChange = Math.floor(init);
	
	
	var woods=0;
	var jungle=1;
	var swamp=2;
	var desert=3;
	var mountains=4;
	var grasslands=5;
	var tundra=6;
	var hills=7;
	var city=8;
	var wasteland=9;
	var returnLandType;
	
	
	if(percentChange ==woods)
	{returnLandType= "woods\t"}
	else if (percentChange == jungle)
	{returnLandType = "Jungle\t"}
	else if(percentChange == swamp)
	{returnLandType = "Swamp\t"}
	else if(percentChange == desert)
	{returnLandType = "Desert\t"}
	else if(percentChange == mountains)
	{returnLandType = "Mountains\t"}
	else if(percentChange == grasslands)
	{returnLandType = "Grasslands\t"}
	else if(percentChange == tundra)
	{returnLandType = "Tundra\t"}
	else if(percentChange == hills)
	{returnLandType = "Hills\t"}
	else if(percentChange == city)
	{returnLandType = "City\t"}
	else if(percentChange == wasteland)
	{returnLandType = "Wasteland\t"}
	return returnLandType;
}

var world=[];

for(j=0 ; j<10; j++){//remove rowoflandvariable
	//var rowOfLand="";
	
	world[j]=[]; //for every row, make a column go across.
	
	
	}













// function that cubes a value


//function test(num1){												//function called test with variable num1
//	var cube = num1*num1*num1;										//variable that cubes the num1 
//	return num1 + "*" + num1 + "*" + num1 + "*" + "= " + cube;		//return the value of cube plus strings to make it look nice
//}

//for(i=0; i<10; i++){												//the loop starts at 0
//	console.log(test(i));											//conolse log it out
//}

 
