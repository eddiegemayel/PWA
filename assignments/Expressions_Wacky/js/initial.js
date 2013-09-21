//Eddie Gemayel. Friday Sept 20 Expressions Wacky

//Adding up armor values in a video game to see if you are ready for a boss fight or not

var headArmor = parseInt(prompt("Enter the armor value of your equipped helmet(10-100): "));
//variable above collects a value that is the armor value of your helmet


var bodyArmor = parseInt(prompt("Enter the armor value of your equipped chest piece(10-100): "));
//variable above collects chest armor value




var legArmor = parseInt(prompt("Enter the armor value of your equipped leg piece(10-100): "));
//variable above collects leg armor value




var totalArmor = (headArmor + bodyArmor + legArmor);
//variable adds up all armor values



var bossArmor = 250;
//variable states what the boss armor value is



if(totalArmor >=bossArmor){
	console.log("You are ready to face the final boss of this level...Good luck!");
	//if your armor value is equal to or more than the boss's armor level then good luck! you can fight him!
}
else{
	console.log("You are not ready to face the final boss yet. Your armor level is only "+ totalArmor +", and you need at least "+ bossArmor +".");
	//if your armor level is too low, you need at least 250. Go back and collect better armor!
}


