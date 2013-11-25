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
	var magicNum = ~~(Math.random()*10+1);		// Remember: ~~ == Math.floor();
	var playersGuess = 0;
	var guessesMade = 0;
	var guessRemaining = 3;
	
	//console.log(compNum);
	
	//storing dom elements in an object for easy access
	var dom = {
		input: document.querySelector("#input"),
		output : document.querySelector("#output"),
		button : document.querySelector("button")
	};
	
	
	var clickFn=function(e){
		console.log(guessRemaining,input.value);
		validateInput();
	}
	
	
	//checking the value
	var validateInput = function(){
		playersGuess = parseInt(dom.input.value);
		
		if(isNaN(playersGuess)){
			dom.output.innerHTML = "Please Enter a number";
		}
		else if(playersGuess < 1 || playersGuess > 10){
			dom.output.innerHTML = "Please enter a number between 1 and 10";
		}
		else{
			playGame();
		}
	}
	
	//playing the actual game
	var playGame = function(){
		guessRemaining--;
		guessesMade++;
		 gameState = "Guess: " +guessesMade + ", Remaining " +guessRemaining;
		playersGuess = parseInt(input.value);
	
		if(playersGuess > magicNum){
			dom.output.innerHTML = "That's too high." + gameState;
			
		}
		
		else if(playersGuess < magicNum){
			dom.output.innerHTML = "That's too low." + gameState;
		}
		else if(playersGuess == magicNum){
			gameOver(true);
		}
	
		if(guessRemaining < 0){
			console.log("Game Over : guessesRemaining is < 1");
			gameOver(false);
		}
		
	}
	
	var gameOver = function(win){
		if(win){
			dom.output.innerHTML
			= "Yes, it's " + magicNum + "!" + "<br>"
			+ "It only took you " + guessesMade + " guesses.";
		}
		else{
			dom.output.innerHTML
			= "No more guesses left!" + "<br>"
			+ "The number was : "+ magicNum + ".";
		};
		
		dom.button.removeEventListener("click", clickFn, false);
		
	}
	
	dom.button.addEventListener("click", clickFn);
		
	//function guess(comp){
	
	
	//	for(i=0; i<4; i++){
			//var userNum  = parseInt(prompt("Enter your guess! 1-10"));
	//		var userNum = document.getElementById("input").value; 
			
			
	//		if(userNum == comp){
	//			document.getElementById("output").innerHTML = "You guessed the number right! Wow!";
	//			break;
	//		}
	//		else if( userNum < comp){				
	//			document.getElementById("output").innerHTML = "The computer's number is larger...you only have "+ (3-i) +" chances left!!";
	//		}
	//		else if(userNum > comp){			
	//			document.getElementById("output").innerHTML = "The computer's number is smaller...you only have " + (3-i) + " chances left!!";
	//		}
	//		else if(i ==3){				
	//			document.getElementById("output").innerHTML = "You couldn't guess the number!";
	//		}
	//	}
	//}
	//guess();
	
	
})();