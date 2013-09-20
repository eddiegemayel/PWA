//lecture6

//password problem

var initPass="";
var secondPass="";
var validLength = false;


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
}
else{
	console.log("They do not match.");
}