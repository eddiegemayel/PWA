/**
 * GUESSING GAME:
 *
 * Created By: Eddie Gemayel
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	var compNum = Math.floor(Math.random()*10+1);
	
	//console.log(compNum);
		
	function guess(comp){
	
	
		for(i=0; i<4; i++){
			//var userNum  = parseInt(prompt("Enter your guess! 1-10"));
			var userNum = document.getElementById("input").value; 
			
			
			if(userNum == comp){
				document.getElementById("output").innerHTML = "You guessed the number right! Wow!";
				break;
			}
			else if( userNum < comp){				
				document.getElementById("output").innerHTML = "The computer's number is larger...you only have "+ (3-i) +" chances left!!";
			}
			else if(userNum > comp){			
				document.getElementById("output").innerHTML = "The computer's number is smaller...you only have " + (3-i) + " chances left!!";
			}
			else if(i ==3){				
				document.getElementById("output").innerHTML = "You couldn't guess the number!";
			}
		}
	}
	//guess();
	
	
})();