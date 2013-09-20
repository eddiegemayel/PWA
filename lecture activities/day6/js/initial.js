//lecture6

//password problem

var initPass="";
var secondPass="";
var validLength = false;
var validMatch=false;

do{


	do {
		initPass = prompt("Please Enter a password (min:8 max: 12)");
		if(initPass.length>=8 && initPass.length <=12){
			validLength=true;
		}


	}
	while(validLength=false);


	secondPass = prompt("Please re-enter password: ");

	if(secondPass==initPass){
		console.log("They match!");
		validMatch=true;
	}
	else{
		console.log("They do not match.");
	}
}while (validMatch==false)