//duel part 2
//Eddie Gemayel , Tuesday October 1 2013. Duel part 1

(function(){
console.log("FIGHT!");

//player names
var player1Name = "Spiderman";
var player2Name = "Batman";

//player healths
var player1Health = 100;
var player2Health = 100;

//player damage
var player1Damage = 20;
var player2Damage = 20;

//round start
var round = 0;



//Math.floor(Math.random() * (max - min)

//function damage(min, max){
//	var result = Math.floor(Math.random()) *(max - min) + min;
//	return result;
//}



function fight(){
	alert(player1Name +" : "+ player1Health +"  START  "+ player2Name +" : "+player2Health);
	
	for(i=0; i<10; i++){
		
		var minDamage1 = player1Damage * .5;
        var minDamage2 = player2Damage * .5;
        var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
    	var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            player1Health-=f1;
            player2Health-=f2;
		
		var result = winnerCheck();
		
		console.log(winnerCheck());
		
		
		if(result =="No Winner"){
			round++;
			alert(player1Name + " : "+ player1Health +"  ROUND "+ round +" OVER" +"  "+ player2Name + " : " + player2Health);
		}
		else{
			alert(result);
			break;
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

})();
