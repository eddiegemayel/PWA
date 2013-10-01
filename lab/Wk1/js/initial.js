//lab1
//Eddie Gemayel , Tuesday October 1 2013. Duel part 1


var player1Name = "Spiderman";
var player2Name = "Batman";

var player1Health = 100;
var player2Health = 100;



var round = 0;

function fight(){
	alert(player1Name +":"+ player1Health +"  START  "+ player2Name +":"+player2Health);
	
	for(i=0; i<=10; i++){
		var player1Damage = Math.floor(Math.random());
		var player2Damage = Math.floor(Math.random());
		var player1Health =  player1Health - player2Damage;
		var player2Health = player2Health - player1Damage;
		
		
	
	}
	
	function winnerCheck(){
		var result ="";
		
		if(player1Health > player2Health){
			result = player1Name + " WINS!";
		}
		else if(player1Health < player2Health){
			result = player2Name + " WINS!";
		}
		else if( player1Health < 0 && player2Health < 0){
			result = "You both DIE!";
		}
		return result;
	}
	
}


