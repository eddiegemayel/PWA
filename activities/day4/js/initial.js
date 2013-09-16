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
	var percentChance =Math.random();
	if(percentChance < .5){return 'woods'}
	else {return 'jungle'} 
}

for (i=0; i<100; i++){
	
	console.log(landSelection());

}

// function that cubes a value


function test(num1){
	var cube = num1*num1*num1;
	return num1 + "*" + num1 + "*" + num1 + "*" + "= " + cube;
}

for(i=0; i<10; i++){
	console.log(test(i));
}

 
