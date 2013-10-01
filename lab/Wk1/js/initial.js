//lab1
//Eddie Gemayel , Tuesday October 1 2013. Duel part 1

//player names
var player1Name = "Spiderman";
var player2Name = "Batman";

//player healths
var player1Health = 100;
var player2Health = 100;

var player1Damage = 10;
var player2Damage = 5;

//round start
var round = 0;

function fight(){
	alert(player1Name +" : "+ player1Health +"  START  "+ player2Name +" : "+player2Health);
	
	for(i=0; i<10; i++){
	
		//player1Damage = player1Damage * Math.floor(Math.random()) * 5;
		//player2Damage = player2Damage *.5;
		
		player1Health =  player1Health - player2Damage;
		player2Health = player2Health - player1Damage;
		
		
		var result = winnerCheck();
		console.log(winnerCheck());
		if(result =="No Winner"){
			round++;
			alert(player1Name + " : "+ player1Health +"  ROUND "+ round +" OVER" +"  "+ player2Name + " : " + player2Health);
		}
		else{
			alert(result);
			
		}
	}
	
	function winnerCheck(){
		var result ="No Winner";
		
		if(player2Health < 1){
			result = player1Name + " WINS!";
		}
		else if(player1Health < 1){
			result = player2Name + " WINS!";
		}
		else if( player1Health < 1 && player2Health < 1){
			result = "You both DIE!";
		}
		return result;
	}
	
}

fight();

