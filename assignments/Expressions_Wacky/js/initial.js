//Eddie Gemayel. Friday Sept 20 Expressions Wacky

//Adding up armor values in a video game to see if you are ready for a boss fight or not

var headArmor = parseInt(prompt("Enter the armor value of your equipped helmet(10-100): "));

var bodyArmor = parseInt(prompt("Enter the armor value of your equipped chest piece(10-100): "));

var legArmor = parseInt(prompt("Enter the armor value of your equipped leg piece(10-100): "));

var totalArmor = (headArmor + bodyArmor + legArmor);

var bossArmor = 250;

if(totalArmor >=bossArmor){
	console.log("You are ready to face the final boss of this level...Good luck!");
}
else{
	console.log("You are not ready to face the final boss yet. Your armor level is only "+ totalArmor +", and you need at least "+ bossArmor +".");
}


