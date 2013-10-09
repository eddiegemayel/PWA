//Eddie Gemayel , Tuesday October 1 2013. Duel part 3

(function(){
console.log("FIGHT!");

//player names
var player1 = {name : "Spiderman", damage: 20, health: 100};

var player2 = {name : "Batman", damage : 20, health : 100};


//round start
var round = 0;



//Math.floor(Math.random() * (max - min)

//function damage(min, max){
//	var result = Math.floor(Math.random()) *(max - min) + min;
//	return result;
//}



function fight(){
	alert(player1["name"] +" : "+ player1["health"] +"  START  "+ player2["name"] +" : "+player2["health"]);
	
	for(i=0; i<10; i++){
		
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
			alert(player1.name + " : "+ player1.health +"  ROUND "+ round +" OVER" +"  "+ player2.name + " : " + player2.health);
		}
		else{
			alert(result);
			break;
		}
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

fight();

})();
