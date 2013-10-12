//Eddie Gemayel , Tuesday October 1 2013. Duel part 3

(function(){
console.log("FIGHT!");

//player names
var player1 = {name : "Spiderman", damage: 20, health: 100};

var player2 = {name : "Batman", damage : 20, health : 100};

var players = [player1, player2];



//round start
var round = 1;

var button = document.querySelector(".buttonblue");

button.addEventListener("click", fight);



function fight(){

	var roundUpdate = document.querySelector("input");
	
	var spiderHealth = document.querySelector("#kabal");
	
	var batHealth = document.querySelector("#kratos");

	roundUpdate.value = "Round " + round +"!!";

		
		var minDamage1 = player1.damage * .5;
        var minDamage2 = player2.damage * .5;
        var f1 = Math.floor(Math.random()*(player1.damage-minDamage1)+minDamage1);
    	var f2 = Math.floor(Math.random()*(player2.damage-minDamage2)+minDamage2);
    	
    	
        //inflict damage
        player1.health-=f1;
        player2.health-=f2;
		
		var result = winnerCheck();
		
		console.log(winnerCheck());
		
		
		if(result =="No Winner"){
			round++;
			spiderHealth.innerHTML = player1.name + " : " +player1.health;
			batHealth.innerHTML = player2.health + " : "+  player2.name;
			
		}
		else{
			roundUpdate.value = result;
			//break;
		}
	
	
	function winnerCheck(){
		var result ="No Winner";
		
		if(player2.health < 1){
			result = player1.name + " WINS!";
		}
		else if(player1.health < 1){
			result = player2.name + " WINS!";
		}
		else if( player1.health < 1 && player2.health < 1){
			result = "You both DIE!";
		}
		return result;
	}
	
}



})();
