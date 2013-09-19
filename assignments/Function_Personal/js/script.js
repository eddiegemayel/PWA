//Eddie Gemayel , Wednesday Sept 18. Functions Personal


//Super Mario High Scores

var score1 = prompt("Enter the first Score you got on Super Mario Bros: ");

var score2 = prompt("Enter the second Score you got on Super Mario Bros: ");

var score3 = prompt("Enter the third Score you got on Super Mario Bros: ");

function calcScore (){

	var avgScore ;
	var result = "";
	
	
	avgScore = (score1* score2* score3) / 3;
	

	if(avgScore > 10000){
		result = "Wow! You are a pro! With a score of "+ avgScore + "!";
	
	}
	else if(avgScore == 10000){
		result = "Right at 10,000? Interesting Score.";
	
	}
	else{
		result = "You fail! Your score was only "+ avgScore + "!";
	}
	
	
	//return avgScore;
	return result;
}
 console.log(calcScore());
 
 
 
 
  