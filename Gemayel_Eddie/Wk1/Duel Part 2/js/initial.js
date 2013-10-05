//duel part 2
//Eddie Gemayel , Tuesday October 1 2013. Duel part 1

(function(){
console.log("FIGHT!");

//player names
var player1 = ["Spiderman", 20, 100];

var player2 = ["Batman", 20, 100];


//round start
var round = 0;



//Math.floor(Math.random() * (max - min)

//function damage(min, max){
//	var result = Math.floor(Math.random()) *(max - min) + min;
//	return result;
//}



function fight(){
	alert(player1[0] +" : "+ player1[2] +"  START  "+ player2[0] +" : "+player2[2]);
	
	for(i=0; i<10; i++){
		
		var minDamage1 = player1[1] * .5;
        var minDamage2 = player2[1] * .5;
        var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
    	var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

            //inflict damage
            player1[2]-=f1;
            player2[2]-=f2;
		
		var result = winnerCheck();
		
		console.log(winnerCheck());
		
		
		if(result =="No Winner"){
			round++;
			alert(player1[0] + " : "+ player1[2] +"  ROUND "+ round +" OVER" +"  "+ player2[0] + " : " + player2[2]);
		}
		else{
			alert(result);
			break;
		}
	}
	
	function winnerCheck(){
		var result ="No Winner";
		
		if(player2[2] < 1){
			result = player1[0] + " WINS!";
		}
		else if(player1[2] < 1){
			result = player2[0] + " WINS!";
		}
		else if( player1[2] < 1 && player2[2] < 1){
			result = "You both DIE!";
		}
		return result;
	}
	
}

fight();

})();
